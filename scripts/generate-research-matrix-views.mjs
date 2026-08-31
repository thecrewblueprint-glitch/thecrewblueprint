import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const matrixDir = path.join(root, 'research', 'matrix');
const viewsDir = path.join(matrixDir, 'views');

const patterns = {
  content: /^content(?:_(?!lineage_edges)[^.]+)?\.jsonl$/,
  sources: /^sources(?:_[^.]+)?\.jsonl$/,
  support_edges: /^support_edges(?:_[^.]+)?\.jsonl$/,
  competency_content_edges: /^competency_content_edges(?:_[^.]+)?\.jsonl$/,
  research_competency_edges: /^research_competency_edges(?:_[^.]+)?\.jsonl$/,
  content_lineage_edges: /^content_lineage_edges(?:_[^.]+)?\.jsonl$/,
  reviews: /^reviews(?:_[^.]+)?\.jsonl$/,
  media: /^media(?:_[^.]+)?\.jsonl$/,
};

function readJsonlFile(filePath) {
  if (!fs.existsSync(filePath)) return [];
  return fs.readFileSync(filePath, 'utf8').split(/\r?\n/).map((line) => line.trim()).filter(Boolean).map(JSON.parse);
}
function readTable(name) {
  const pattern = patterns[name];
  if (!pattern || !fs.existsSync(matrixDir)) return [];
  return fs.readdirSync(matrixDir).filter((file) => pattern.test(file)).sort().flatMap((file) => readJsonlFile(path.join(matrixDir, file)));
}
function esc(value) {
  if (value === null || value === undefined || value === '') return '—';
  return String(value).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
}
function list(value) { return Array.isArray(value) && value.length ? value.join(', ') : '—'; }
function writeView(name, title, purpose, body) {
  fs.mkdirSync(viewsDir, { recursive: true });
  fs.writeFileSync(path.join(viewsDir, name), `# ${title}\n\n**Generated from canonical matrix data. Do not hand-edit as source of truth.**\n\n${purpose}\n\n${body.trim()}\n`, 'utf8');
}
function domainForCompetency(id) {
  if (!id || id.startsWith('GATE-')) return null;
  const prefix = id.split('-').slice(0, 2).join('-');
  const map = {
    'CMP-CORE': 'D-SHF', 'CMP-FLD': 'D-FLD', 'CMP-LTG': 'D-LTG', 'CMP-AUD': 'D-AUD', 'CMP-VID': 'D-VID',
    'CMP-STG': 'D-STG', 'CMP-RIG': 'D-RIG', 'CMP-ELC': 'D-ELC', 'CMP-SPEC': 'D-BKL', 'CMP-BKL': 'D-BKL',
    'CMP-PRP': 'D-PRP', 'CMP-WRD': 'D-WRD', 'CMP-SMG': 'D-SMG', 'CMP-PMG': 'D-PMG', 'CMP-VOP': 'D-VOP',
    'CMP-LEAD': 'D-LEAD', 'CMP-SHC': 'D-SHC', 'CMP-CAR': 'D-CAR', 'CMP-EVD': 'D-EVD', 'CMP-COM': 'D-COM',
    'CMP-RF': 'D-RF', 'CMP-CAM': 'D-CAM', 'CMP-SHP': 'D-SHP', 'CMP-LOG': 'D-LOG', 'CMP-OUT': 'D-OUT',
    'CMP-ACC': 'D-ACC', 'CMP-TOOLS': 'D-TOOLS', 'CMP-AUT': 'D-AUT', 'CMP-FX': 'D-FX',
  };
  return map[prefix] || null;
}

const content = readTable('content');
const sources = readTable('sources');
const supportEdges = readTable('support_edges');
const competencyEdges = readTable('competency_content_edges');
const researchEdges = readTable('research_competency_edges');
const lineageEdges = readTable('content_lineage_edges');
const reviews = readTable('reviews');
const media = readTable('media');
const courseInventory = readJsonlFile(path.join(matrixDir, 'course_inventory.jsonl'));
const routeCompatibility = readJsonlFile(path.join(matrixDir, 'route_compatibility_inventory.jsonl'));

const contentById = new Map(content.map((row) => [row.content_id, row]));
const sourceById = new Map(sources.map((row) => [row.source_id, row]));
const edgesByContent = new Map();
const edgesBySource = new Map();
for (const edge of supportEdges) {
  if (!edgesByContent.has(edge.content_id)) edgesByContent.set(edge.content_id, []);
  edgesByContent.get(edge.content_id).push(edge);
  if (!edgesBySource.has(edge.source_id)) edgesBySource.set(edge.source_id, []);
  edgesBySource.get(edge.source_id).push(edge);
}

const adequate = new Set(['direct','partial','corroborating']);
const sourceBackedClasses = new Set(['external_fact','source_backed_instruction','cross_source_pattern','practitioner_convention','manufacturer_or_model_procedure','employer_or_venue_procedure','safety_boundary']);

const unsupported = content.filter((row) => ['claim','boundary'].includes(row.content_type))
  .filter((row) => row.content_classification !== 'crew_blueprint_framework' && sourceBackedClasses.has(row.content_classification))
  .filter((row) => !(edgesByContent.get(row.content_id) || []).some((edge) => adequate.has(edge.support_strength)))
  .sort((a,b) => `${a.route_file}|${a.content_id}`.localeCompare(`${b.route_file}|${b.content_id}`));
writeView('unsupported.md','Unsupported / Needs-Primary-Source View','Claims and boundaries lacking direct, partial, or corroborating evidence in the normalized matrix.',unsupported.length ? `| Content ID | Route | Class | Safety | Text |\n|---|---|---|---|---|\n${unsupported.map((row)=>`| ${esc(row.content_id)} | ${esc(row.route_file)} | ${esc(row.content_classification)} | ${esc(row.safety_criticality)} | ${esc(row.learner_facing_text)} |`).join('\n')}` : 'No unsupported source-required claims are currently represented.');

const qualificationEdges = supportEdges.filter((edge)=>edge.qualification_required).sort((a,b)=>`${a.content_id}|${a.edge_id}`.localeCompare(`${b.content_id}|${b.edge_id}`));
writeView('qualification-sensitive.md','Qualification / Scope-Sensitive View','Evidence edges where removing jurisdiction, model, employer, sector, role, or authority qualifiers could make wording misleading.',qualificationEdges.length ? `| Content ID | Source | Strength | Required qualifier | Authority owner | Applicability |\n|---|---|---|---|---|---|\n${qualificationEdges.map((edge)=>`| ${esc(edge.content_id)} | ${esc(sourceById.get(edge.source_id)?.title || edge.source_id)} | ${esc(edge.support_strength)} | ${esc(edge.required_qualifier)} | ${esc(edge.authority_owner)} | ${esc(edge.applicability_notes)} |`).join('\n')}` : 'No qualification-sensitive edges are currently represented.');

writeView('visual-evidence.md','Visual Evidence / Rights / Review View','Normalized MEDIA records with rights, model/procedure context, reviewer state, accessibility fallback, and safety-critical release state.',media.length ? `| Media ID | Asset | Type | Supports | Rights / permission | Model context | Reviewer | Safety-critical | Text fallback | Status |\n|---|---|---|---|---|---|---|---|---|---|\n${media.map((row)=>`| ${esc(row.media_id)} | ${esc(row.file_path_or_url)} | ${esc(row.media_type)} | ${esc(list(row.content_ids_supported))} | ${esc(row.license_permission)} | ${esc(row.model_equipment_context)} | ${esc(row.reviewer)} | ${esc(row.safety_critical)} | ${esc(row.text_fallback_complete)} | ${esc(row.status)} |`).join('\n')}` : 'No MEDIA records have been backfilled yet.');

const routeRows = content.filter((row)=>['claim','boundary'].includes(row.content_type)).sort((a,b)=>`${a.route_file}|${a.content_id}`.localeCompare(`${b.route_file}|${b.content_id}`));
writeView('route-claim-source.md','Route → Claim → Source View','Flattened learner-content audit. Bibliography presence alone is not treated as evidence.',routeRows.length ? `| Route | Content ID | Class | Safety | Learner-facing text | Sources |\n|---|---|---|---|---|---|\n${routeRows.map((row)=>{const edges=edgesByContent.get(row.content_id)||[];const src=edges.length?edges.map((edge)=>`${sourceById.get(edge.source_id)?.title||edge.source_id} [${edge.support_strength}]`).join('; '):row.content_classification==='crew_blueprint_framework'?'Crew Blueprint framework — no external source required by classification':'NONE';return `| ${esc(row.route_file)} | ${esc(row.content_id)} | ${esc(row.content_classification)} | ${esc(row.safety_criticality)} | ${esc(row.learner_facing_text)} | ${esc(src)} |`;}).join('\n')}` : 'No claim/boundary CONTENT records are present.');

const sourceRows=sources.slice().sort((a,b)=>`${a.source_owner}|${a.title}`.localeCompare(`${b.source_owner}|${b.title}`));
writeView('source-impact.md','Source → Affected Content View','Reverse index for freshness, supersession, broken-link, legal, standards, manufacturer, and product-version review.',sourceRows.length ? `| Source ID | Source | Type | Freshness | Status | Linked content |\n|---|---|---|---|---|---|\n${sourceRows.map((source)=>`| ${esc(source.source_id)} | ${esc(source.title)} | ${esc(source.evidence_type)} | ${esc(source.freshness_class)} | ${esc(source.source_status)} | ${esc((edgesBySource.get(source.source_id)||[]).map((edge)=>edge.content_id).join(', ')||'NONE')} |`).join('\n')}` : 'No SOURCE records are present.');

const questions=content.filter((row)=>row.content_type==='question').sort((a,b)=>`${a.course_id}|${a.content_id}`.localeCompare(`${b.course_id}|${b.content_id}`));
const assessmentRows=questions.map((question)=>{const rEdge=lineageEdges.find((edge)=>edge.from_content_id===question.content_id&&edge.relationship_type==='has_rationale');const rationale=rEdge?contentById.get(rEdge.to_content_id):null;const cEdges=rationale?lineageEdges.filter((edge)=>edge.from_content_id===rationale.content_id&&edge.relationship_type==='rationale_derived_from_claim'):[];const claims=cEdges.map((edge)=>contentById.get(edge.to_content_id)).filter(Boolean);const srcIds=[...new Set(claims.flatMap((claim)=>(edgesByContent.get(claim.content_id)||[]).map((edge)=>edge.source_id)))];return{question,rationale,claims,sources:srcIds.map((id)=>sourceById.get(id)?.title||id),chainState:rationale&&claims.length?'matrixed':'incomplete'};});
writeView('assessment-rationale.md','Assessment Question → Rationale → Claim → Source View','Shows assessment lineage. Traceability does not establish psychometric validity or field competence.',assessmentRows.length ? `| Question ID | Course | Question | Rationale | Claims | Sources | Chain state |\n|---|---|---|---|---|---|---|\n${assessmentRows.map((row)=>`| ${esc(row.question.content_id)} | ${esc(row.question.course_id)} | ${esc(row.question.learner_facing_text)} | ${esc(row.rationale?.learner_facing_text)} | ${esc(row.claims.map((claim)=>claim.content_id).join(', '))} | ${esc(row.sources.join('; '))} | ${esc(row.chainState)} |`).join('\n')}` : 'No question CONTENT records have been backfilled yet.');

const supersededContent=content.filter((row)=>row.supersedes_content_id||row.superseded_by_content_id);
const supersededSources=sources.filter((row)=>row.supersedes_source_id||row.superseded_by_source_id||row.source_status!=='active');
let supersessionBody='## Route compatibility / legacy pages\n\n';
supersessionBody+=routeCompatibility.length?`| Route | State | Canonical route | Notes |\n|---|---|---|---|\n${routeCompatibility.map((row)=>`| ${esc(row.route_file||row.path)} | ${esc(row.compatibility_state||row.inventory_state||row.state)} | ${esc(row.canonical_route_file||row.canonical_route||row.superseded_by)} | ${esc(row.notes)} |`).join('\n')}`:'No route compatibility records are present.\n';
supersessionBody+='\n\n## Content lineage / supersession\n\n';
supersessionBody+=supersededContent.length?`| Content ID | Supersedes | Superseded by |\n|---|---|---|\n${supersededContent.map((row)=>`| ${esc(row.content_id)} | ${esc(row.supersedes_content_id)} | ${esc(row.superseded_by_content_id)} |`).join('\n')}`:'No explicit CONTENT supersession relationships are currently represented.\n';
supersessionBody+='\n\n## Source lineage / status\n\n';
supersessionBody+=supersededSources.length?`| Source ID | Status | Supersedes | Superseded by |\n|---|---|---|---|\n${supersededSources.map((row)=>`| ${esc(row.source_id)} | ${esc(row.source_status)} | ${esc(row.supersedes_source_id)} | ${esc(row.superseded_by_source_id)} |`).join('\n')}`:'No superseded/non-active SOURCE records are currently represented.';
writeView('supersession.md','Supersession / Legacy Route View','Tracks old routes and source/content lineage without counting legacy pages as separate learning pathways.',supersessionBody);

const domains=[...new Set(content.map((row)=>row.domain_id_primary).filter(Boolean))].sort();
const domainRows=domains.map((domainId)=>{
  const domainContent=content.filter((row)=>row.domain_id_primary===domainId);
  const currentCourses=courseInventory.filter((course)=>course.domain_id_primary===domainId&&course.inventory_state==='canonical_current');
  const plannedCourses=domainContent.filter((row)=>row.content_type==='course'&&!courseInventory.some((course)=>course.course_id===row.course_id));
  const claims=domainContent.filter((row)=>['claim','boundary'].includes(row.content_type));
  const contentCompetencies=[...new Set(competencyEdges.filter((edge)=>domainContent.some((row)=>row.content_id===edge.content_id)).map((edge)=>edge.competency_id))];
  const researchCompetencies=[...new Set(researchEdges.filter((edge)=>edge.display_on_owner_map!==false&&domainForCompetency(edge.competency_id)===domainId).map((edge)=>edge.competency_id))];
  const blocked=reviews.filter((review)=>review.disposition==='blocked'&&domainContent.some((row)=>row.content_id===review.content_id_or_domain_id)).length;
  const revise=reviews.filter((review)=>review.disposition==='revise'&&(review.content_id_or_domain_id===domainId||domainContent.some((row)=>row.content_id===review.content_id_or_domain_id))).length;
  return{domainId,currentCourses,plannedCourses,claims,contentCompetencies,researchCompetencies,blocked,revise};
});
writeView('domain-completeness.md','Domain Completeness / Planned-vs-Built View','Owner-facing structural view distinguishing built routes, planned content, matrixed claims, and domain-scoped structure-neutral research coverage.',domainRows.length ? `| Domain | Built routes | Planned nodes | Claims/boundaries | Content competencies | Research competencies | Blocked | Revise |\n|---|---:|---:|---:|---:|---:|---:|---:|\n${domainRows.map((row)=>`| ${esc(row.domainId)} | ${row.currentCourses.length} | ${row.plannedCourses.length} | ${row.claims.length} | ${row.contentCompetencies.length} | ${row.researchCompetencies.length} | ${row.blocked} | ${row.revise} |`).join('\n')}` : 'No domain CONTENT records are present.');

const index=`# Research Matrix Generated Views\n\nGenerated from canonical JSONL.\n\n- [Unsupported](unsupported.md)\n- [Qualification-sensitive](qualification-sensitive.md)\n- [Visual evidence](visual-evidence.md)\n- [Route → Claim → Source](route-claim-source.md)\n- [Source → Affected Content](source-impact.md)\n- [Assessment rationale](assessment-rationale.md)\n- [Supersession](supersession.md)\n- [Domain completeness](domain-completeness.md)\n`;
fs.mkdirSync(viewsDir,{recursive:true});
fs.writeFileSync(path.join(viewsDir,'README.md'),index,'utf8');
console.log(`Generated 8 matrix audit views from ${content.length} CONTENT, ${sources.length} SOURCE, ${supportEdges.length} SUPPORT_EDGE, ${competencyEdges.length} COMPETENCY_CONTENT_EDGE, ${researchEdges.length} RESEARCH_COMPETENCY_EDGE, ${lineageEdges.length} CONTENT_LINEAGE_EDGE, ${reviews.length} REVIEW, and ${media.length} MEDIA records.`);
