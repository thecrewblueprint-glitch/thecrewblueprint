import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const matrixDir = path.join(root, 'research', 'matrix');

function readJsonl(name) {
  const file = path.join(matrixDir, name);
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, 'utf8')
    .split(/\r?\n/)
    .map((line, index) => ({ line: line.trim(), lineNumber: index + 1 }))
    .filter(({ line }) => line.length)
    .map(({ line, lineNumber }) => {
      try { return { ...JSON.parse(line), __file: name, __line: lineNumber }; }
      catch (error) { throw new Error(`${name}:${lineNumber}: invalid JSON — ${error.message}`); }
    });
}

const logicalTablePatterns = {
  content: /^content(?:_(?!lineage_edges)[^.]+)?\.jsonl$/,
  sources: /^sources(?:_[^.]+)?\.jsonl$/,
  support_edges: /^support_edges(?:_[^.]+)?\.jsonl$/,
  competency_content_edges: /^competency_content_edges(?:_[^.]+)?\.jsonl$/,
  content_lineage_edges: /^content_lineage_edges(?:_[^.]+)?\.jsonl$/,
  reviews: /^reviews(?:_[^.]+)?\.jsonl$/,
  media: /^media(?:_[^.]+)?\.jsonl$/,
  research_competency_edges: /^research_competency_edges(?:_[^.]+)?\.jsonl$/,
};

function readLogicalTable(name) {
  if (!fs.existsSync(matrixDir)) return [];
  const pattern = logicalTablePatterns[name];
  if (!pattern) throw new Error(`No logical-table pattern registered for ${name}`);
  return fs.readdirSync(matrixDir).filter((file) => pattern.test(file)).sort().flatMap(readJsonl);
}

function location(row, fallback) { return row.__file ? `${row.__file}:${row.__line}` : fallback; }
function assertUnique(records, key, table, errors) {
  const seen = new Map();
  for (const row of records) {
    const value = row[key];
    if (!value) { errors.push(`${location(row, table)}: missing ${key}`); continue; }
    if (seen.has(value)) errors.push(`${location(row, table)}: duplicate ${key}=${value}; first seen at ${seen.get(value)}`);
    else seen.set(value, location(row, table));
  }
}
function requireFields(records, fields, table, errors) {
  for (const row of records) for (const field of fields) {
    if (row[field] === undefined || row[field] === null || row[field] === '') errors.push(`${location(row, table)}: missing required field ${field}`);
  }
}
function assertEnum(records, field, values, table, errors) {
  const allowed = new Set(values);
  for (const row of records) if (row[field] !== undefined && row[field] !== null && !allowed.has(row[field])) {
    errors.push(`${location(row, table)}: invalid ${field}=${row[field]}; allowed: ${[...allowed].join(', ')}`);
  }
}

const errors = [];
const warnings = [];
const content = readLogicalTable('content');
const sources = readLogicalTable('sources');
const supportEdges = readLogicalTable('support_edges');
const competencyEdges = readLogicalTable('competency_content_edges');
const lineageEdges = readLogicalTable('content_lineage_edges');
const reviews = readLogicalTable('reviews');
const media = readLogicalTable('media');
const researchCompetencyEdges = readLogicalTable('research_competency_edges');
const courseInventory = readJsonl('course_inventory.jsonl');
const fundamentalsMap = readJsonl('fundamentals_lesson_competency_map.jsonl');

assertUnique(content, 'content_id', 'CONTENT', errors);
assertUnique(sources, 'source_id', 'SOURCE', errors);
assertUnique(supportEdges, 'edge_id', 'SUPPORT_EDGE', errors);
assertUnique(competencyEdges, 'competency_content_edge_id', 'COMPETENCY_CONTENT_EDGE', errors);
assertUnique(lineageEdges, 'content_lineage_edge_id', 'CONTENT_LINEAGE_EDGE', errors);
assertUnique(reviews, 'review_id', 'REVIEW', errors);
assertUnique(media, 'media_id', 'MEDIA', errors);
assertUnique(researchCompetencyEdges, 'research_competency_edge_id', 'RESEARCH_COMPETENCY_EDGE', errors);
assertUnique(courseInventory, 'course_id', 'course_inventory.jsonl', errors);
assertUnique(fundamentalsMap, 'lesson_id', 'fundamentals_lesson_competency_map.jsonl', errors);

requireFields(content, ['content_id','domain_id_primary','content_type','course_id','tier_learning','authority_class','learner_facing_text','content_classification','publication_state'], 'CONTENT', errors);
requireFields(sources, ['source_id','source_owner','title','evidence_type','authority_level','freshness_class','source_status'], 'SOURCE', errors);
requireFields(supportEdges, ['edge_id','content_id','source_id','support_strength','review_status'], 'SUPPORT_EDGE', errors);
requireFields(competencyEdges, ['competency_content_edge_id','competency_id','content_id','relationship_type','coverage_depth','authority_class','evidence_state'], 'COMPETENCY_CONTENT_EDGE', errors);
requireFields(lineageEdges, ['content_lineage_edge_id','from_content_id','to_content_id','relationship_type','required','review_status'], 'CONTENT_LINEAGE_EDGE', errors);
requireFields(reviews, ['review_id','content_id_or_domain_id','review_type','reviewer_name_or_role','review_date','disposition','findings'], 'REVIEW', errors);
requireFields(media, ['media_id','file_path_or_url','media_type','content_ids_supported','asset_owner','license_permission','alt_text','caption','text_fallback_complete','safety_critical','freshness_trigger','status'], 'MEDIA', errors);
requireFields(researchCompetencyEdges, ['research_competency_edge_id','competency_id','research_file','mdq_ids','research_state','scope_note','authority_note','display_on_owner_map'], 'RESEARCH_COMPETENCY_EDGE', errors);
requireFields(courseInventory, ['course_id','title','route_file','domain_id_primary','tier_learning','inventory_state','publication_state'], 'course_inventory.jsonl', errors);
requireFields(fundamentalsMap, ['lesson_id','lesson_name','module_id','primary_competency_id','coverage_state'], 'fundamentals_lesson_competency_map.jsonl', errors);

assertEnum(sources, 'evidence_type', ['law_regulation','consensus_standard','official_spec','credential_job_analysis','manufacturer','employer','union_local','association','academic','government_guidance','trade_secondary','practitioner','public_unverified','internal_research','crew_blueprint_framework'], 'SOURCE', errors);
assertEnum(sources, 'authority_level', ['controlling','high','contextual','supporting','unverified','internal_framing'], 'SOURCE', errors);
assertEnum(supportEdges, 'support_strength', ['direct','partial','corroborating','context_only','framing_only','contradicts','unresolved'], 'SUPPORT_EDGE', errors);
assertEnum(supportEdges, 'review_status', ['unreviewed','mapped','verified','needs_practitioner','needs_primary_source','rejected','superseded','mapped_exact_source','mapped_with_qualification','mapped_exact_scope','mapped_context_only','mapped_contextual_authority','needs_model_source','needs_practitioner_and_scope'], 'SUPPORT_EDGE', errors);
assertEnum(lineageEdges, 'relationship_type', ['has_rationale','rationale_derived_from_claim','assesses_claim','explains','practice_observes','visual_depicts','contextualizes'], 'CONTENT_LINEAGE_EDGE', errors);
assertEnum(lineageEdges, 'review_status', ['unreviewed','matrixed','verified','needs_practitioner','rejected','superseded'], 'CONTENT_LINEAGE_EDGE', errors);
assertEnum(reviews, 'review_type', ['owner','practitioner','legal','safety','learner','accessibility','citation','freshness','rights'], 'REVIEW', errors);
assertEnum(reviews, 'disposition', ['accepted','accepted_with_qualification','revise','blocked','not_applicable','superseded'], 'REVIEW', errors);
assertEnum(media, 'media_type', ['photo','diagram','sequence','video','animation','screenshot','audio','document_excerpt'], 'MEDIA', errors);
assertEnum(media, 'status', ['draft','owner_review','practitioner_reviewed','approved','replace','retired'], 'MEDIA', errors);
assertEnum(researchCompetencyEdges, 'research_state', ['mapped','partial','research_complete_for_draft','strong_research','boundary_only','primary_research_needed'], 'RESEARCH_COMPETENCY_EDGE', errors);

const contentById = new Map(content.map((row) => [row.content_id, row]));
const contentIds = new Set(contentById.keys());
const sourceIds = new Set(sources.map((row) => row.source_id));
const courseIds = new Set(courseInventory.map((row) => row.course_id));
const validCompetencyId = (id) => /^(CMP|GATE)-/.test(id || '');

for (const edge of supportEdges) {
  if (!contentIds.has(edge.content_id)) errors.push(`${location(edge,'SUPPORT_EDGE')}: ${edge.edge_id} references missing content ${edge.content_id}`);
  if (!sourceIds.has(edge.source_id)) errors.push(`${location(edge,'SUPPORT_EDGE')}: ${edge.edge_id} references missing source ${edge.source_id}`);
}
for (const edge of competencyEdges) {
  if (!contentIds.has(edge.content_id)) errors.push(`${location(edge,'COMPETENCY_CONTENT_EDGE')}: ${edge.competency_content_edge_id} references missing content ${edge.content_id}`);
  if (!validCompetencyId(edge.competency_id)) errors.push(`${location(edge,'COMPETENCY_CONTENT_EDGE')}: invalid competency/gate ID ${edge.competency_id}`);
}
for (const edge of researchCompetencyEdges) {
  if (!validCompetencyId(edge.competency_id)) errors.push(`${location(edge,'RESEARCH_COMPETENCY_EDGE')}: invalid competency/gate ID ${edge.competency_id}`);
  if (!Array.isArray(edge.mdq_ids)) errors.push(`${location(edge,'RESEARCH_COMPETENCY_EDGE')}: ${edge.research_competency_edge_id} mdq_ids must be an array`);
  if (typeof edge.display_on_owner_map !== 'boolean') errors.push(`${location(edge,'RESEARCH_COMPETENCY_EDGE')}: ${edge.research_competency_edge_id} display_on_owner_map must be boolean`);
  if (!fs.existsSync(path.join(root, edge.research_file))) errors.push(`${location(edge,'RESEARCH_COMPETENCY_EDGE')}: research_file not found: ${edge.research_file}`);
}
for (const edge of lineageEdges) {
  if (!contentIds.has(edge.from_content_id)) errors.push(`${location(edge,'CONTENT_LINEAGE_EDGE')}: ${edge.content_lineage_edge_id} references missing from_content_id ${edge.from_content_id}`);
  if (!contentIds.has(edge.to_content_id)) errors.push(`${location(edge,'CONTENT_LINEAGE_EDGE')}: ${edge.content_lineage_edge_id} references missing to_content_id ${edge.to_content_id}`);
}
for (const review of reviews) {
  const target = review.content_id_or_domain_id;
  if (!contentIds.has(target) && !/^D-[A-Z0-9-]+$/.test(target)) errors.push(`${location(review,'REVIEW')}: ${review.review_id} references unknown content/domain target ${target}`);
}
for (const asset of media) {
  if (!Array.isArray(asset.content_ids_supported) || !asset.content_ids_supported.length) errors.push(`${location(asset,'MEDIA')}: ${asset.media_id} requires at least one content_ids_supported reference`);
  else for (const id of asset.content_ids_supported) if (!contentIds.has(id)) errors.push(`${location(asset,'MEDIA')}: ${asset.media_id} references missing content ${id}`);
  if (typeof asset.text_fallback_complete !== 'boolean') errors.push(`${location(asset,'MEDIA')}: ${asset.media_id} text_fallback_complete must be boolean`);
  if (typeof asset.safety_critical !== 'boolean') errors.push(`${location(asset,'MEDIA')}: ${asset.media_id} safety_critical must be boolean`);
  if (asset.safety_critical && ['practitioner_reviewed','approved'].includes(asset.status) && (!asset.reviewer || !asset.reviewed_at)) errors.push(`${location(asset,'MEDIA')}: safety-critical ${asset.media_id} cannot be ${asset.status} without reviewer and reviewed_at`);
  if (asset.status === 'approved' && !asset.text_fallback_complete) errors.push(`${location(asset,'MEDIA')}: approved ${asset.media_id} requires a complete text fallback`);
}

for (const row of content) if (!courseIds.has(row.course_id) && row.publication_state !== 'planned') warnings.push(`${location(row,'CONTENT')}: course_id ${row.course_id} not yet in course_inventory.jsonl`);
for (const course of courseInventory) if (!content.find((row) => row.content_id === course.course_id && row.content_type === 'course')) warnings.push(`course ${course.course_id}: canonical inventory exists but CONTENT course record has not yet been backfilled`);
for (const row of fundamentalsMap) for (const id of [row.primary_competency_id,...(row.secondary_competency_ids || [])]) if (!validCompetencyId(id)) errors.push(`${location(row,'fundamentals map')}: invalid competency ID ${id}`);

const primaryHomes = new Map();
for (const edge of competencyEdges.filter((row) => row.primary_home)) {
  const key = `${edge.competency_id}|${edge.coverage_depth}`;
  const list = primaryHomes.get(key) || [];
  list.push(edge);
  primaryHomes.set(key, list);
}
for (const [key, list] of primaryHomes) if (list.length > 1) warnings.push(`multiple primary homes for ${key}: ${list.map((e) => e.content_id).join(', ')}`);

const rootLinkIds = new Set(['S-OSHA-ROOT-CURRENT','S-USITT-ROOT-CURRENT','S-ESTA-TSP-ROOT-CURRENT']);
for (const edge of supportEdges) if (rootLinkIds.has(edge.source_id) && ['direct','corroborating'].includes(edge.support_strength)) errors.push(`${location(edge,'SUPPORT_EDGE')}: organization/root link ${edge.source_id} cannot be treated as ${edge.support_strength} without exact-source review`);

const sourceRequiredClassifications = new Set(['external_fact','source_backed_instruction','cross_source_pattern','practitioner_convention','manufacturer_or_model_procedure','employer_or_venue_procedure','safety_boundary']);
const adequateEvidenceStrength = new Set(['direct','partial','corroborating']);
for (const question of content.filter((row) => row.content_type === 'question')) {
  const rationaleEdges = lineageEdges.filter((edge) => edge.from_content_id === question.content_id && edge.relationship_type === 'has_rationale');
  if (rationaleEdges.length !== 1) { errors.push(`${location(question,'CONTENT')}: question ${question.content_id} requires exactly one has_rationale edge; found ${rationaleEdges.length}`); continue; }
  const rationale = contentById.get(rationaleEdges[0].to_content_id);
  if (!rationale || rationale.content_type !== 'answer_rationale') { errors.push(`${location(rationaleEdges[0],'CONTENT_LINEAGE_EDGE')}: has_rationale target must be answer_rationale CONTENT`); continue; }
  const claimEdges = lineageEdges.filter((edge) => edge.from_content_id === rationale.content_id && edge.relationship_type === 'rationale_derived_from_claim');
  if (!claimEdges.length) { errors.push(`${location(rationale,'CONTENT')}: rationale ${rationale.content_id} has no rationale_derived_from_claim edge`); continue; }
  for (const claimEdge of claimEdges) {
    const claim = contentById.get(claimEdge.to_content_id);
    if (!claim || !['claim','boundary'].includes(claim.content_type)) { errors.push(`${location(claimEdge,'CONTENT_LINEAGE_EDGE')}: rationale target ${claimEdge.to_content_id} must be claim or boundary CONTENT`); continue; }
    if (claim.content_classification === 'crew_blueprint_framework' || !sourceRequiredClassifications.has(claim.content_classification)) continue;
    const evidence = supportEdges.filter((edge) => edge.content_id === claim.content_id && adequateEvidenceStrength.has(edge.support_strength));
    if (!evidence.length) errors.push(`${location(claim,'CONTENT')}: assessment claim ${claim.content_id} has no direct/partial/corroborating SUPPORT_EDGE`);
  }
}

console.log(`Research matrix validation\n- CONTENT: ${content.length}\n- SOURCE: ${sources.length}\n- SUPPORT_EDGE: ${supportEdges.length}\n- COMPETENCY_CONTENT_EDGE: ${competencyEdges.length}\n- RESEARCH_COMPETENCY_EDGE: ${researchCompetencyEdges.length}\n- CONTENT_LINEAGE_EDGE: ${lineageEdges.length}\n- REVIEW: ${reviews.length}\n- MEDIA: ${media.length}\n- COURSE inventory: ${courseInventory.length}\n- Fundamentals lesson mappings: ${fundamentalsMap.length}`);
if (warnings.length) { console.log(`\nWarnings (${warnings.length}):`); warnings.forEach((warning) => console.log(`- ${warning}`)); }
if (errors.length) { console.error(`\nErrors (${errors.length}):`); errors.forEach((error) => console.error(`- ${error}`)); process.exit(1); }
console.log('\nPASS — normalized research matrix is internally consistent for the records currently backfilled.');
