import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root=process.cwd();
const matrixDir=path.join(root,'research','matrix');
const integrationDir=path.join(root,'research','integration');

function readJson(file){return JSON.parse(fs.readFileSync(file,'utf8'));}
function readJsonl(file){
  if(!fs.existsSync(file))return[];
  return fs.readFileSync(file,'utf8').split(/\r?\n/).map(x=>x.trim()).filter(Boolean).map(JSON.parse);
}
function readPartitions(pattern){
  return fs.readdirSync(matrixDir).filter(name=>pattern.test(name)).sort().flatMap(name=>readJsonl(path.join(matrixDir,name)));
}
function uniq(values){return [...new Set(values.filter(Boolean))];}
function routeExists(route){
  if(!route)return false;
  const routePath=String(route).split(/[?#]/,1)[0];
  return Boolean(routePath)&&fs.existsSync(path.join(root,routePath));
}
function isInternalSource(source){
  if(!source)return false;
  const owner=String(source.source_owner||'').toLowerCase();
  const type=String(source.evidence_type||'').toLowerCase();
  return owner.includes('crew blueprint')||owner.includes('deadhang')||type.includes('internal');
}
function maxSafety(rows){
  const rank={unknown:-1,none:0,low:1,moderate:2,high:3,critical:4};
  return rows.map(r=>r.safety_criticality).filter(Boolean).sort((a,b)=>(rank[b]??-1)-(rank[a]??-1))[0]||'unknown';
}
const externalEvidenceRequiredClassifications=new Set([
  'cross_source_pattern',
  'source_backed_instruction',
  'manufacturer_or_model_procedure',
  'external_fact'
]);
const internalBoundaryClassifications=new Set([
  'crew_blueprint_framework',
  'safety_boundary'
]);

const crosswalk=readJson(path.join(integrationDir,'responsibility-access-crosswalk-143-v0.1-2026-09-09.json'));
const inventory=readJsonl(path.join(matrixDir,'course_inventory.jsonl'));
const content=readPartitions(/^content(?:_(?!lineage_edges)[^.]+)?\.jsonl$/);
const supportEdges=readPartitions(/^support_edges(?:_[^.]+)?\.jsonl$/);
const reviews=readPartitions(/^reviews(?:_[^.]+)?\.jsonl$/);
const sources=readPartitions(/^sources(?:_[^.]+)?\.jsonl$/);

const inventoryById=new Map(inventory.map(row=>[row.course_id,row]));
const sourceById=new Map(sources.map(row=>[row.source_id,row]));
const coursesByDomain=new Map();
for(const row of inventory){
  if(!row.domain_id_primary)continue;
  if(!coursesByDomain.has(row.domain_id_primary))coursesByDomain.set(row.domain_id_primary,[]);
  coursesByDomain.get(row.domain_id_primary).push(row.course_id);
}

const freeIds=(crosswalk.groups||[])
  .filter(group=>group.access_class==='FREE'&&group.delivery_policy==='free')
  .flatMap(group=>group.canonical_ids||[]);

const contentByCourse=new Map();
const contentById=new Map();
for(const row of content){
  if(row.content_id)contentById.set(row.content_id,row);
  const courseId=row.course_id||(row.content_type==='course'?row.content_id:null);
  if(!courseId)continue;
  if(!contentByCourse.has(courseId))contentByCourse.set(courseId,[]);
  contentByCourse.get(courseId).push(row);
}

const supportByContent=new Map();
for(const edge of supportEdges){
  if(!supportByContent.has(edge.content_id))supportByContent.set(edge.content_id,[]);
  supportByContent.get(edge.content_id).push(edge);
}

const reviewsByCourse=new Map();
function addReview(courseId,review,scope){
  if(!courseId)return;
  if(!reviewsByCourse.has(courseId))reviewsByCourse.set(courseId,[]);
  reviewsByCourse.get(courseId).push({...review,_audit_scope:scope});
}
for(const review of reviews){
  const direct=review.course_id||null;
  if(direct){addReview(direct,review,'course');continue;}
  const targetId=review.content_id_or_domain_id||review.content_id||null;
  if(!targetId)continue;
  if(inventoryById.has(targetId)){addReview(targetId,review,'course');continue;}
  const contentTarget=contentById.get(targetId);
  if(contentTarget?.course_id){addReview(contentTarget.course_id,review,'content');continue;}
  for(const courseId of coursesByDomain.get(targetId)||[])addReview(courseId,review,'domain');
}

const rows=freeIds.map(courseId=>{
  const inv=inventoryById.get(courseId)||{};
  const courseContent=contentByCourse.get(courseId)||[];
  const contentIds=new Set(courseContent.map(row=>row.content_id).filter(Boolean));
  const edges=supportEdges.filter(edge=>contentIds.has(edge.content_id));
  const sourceIds=uniq(edges.map(edge=>edge.source_id));
  const externalSources=sourceIds.filter(id=>!isInternalSource(sourceById.get(id)));
  const courseReviews=reviewsByCourse.get(courseId)||[];
  const types=courseContent.reduce((acc,row)=>{
    const key=row.content_type||'unknown';
    acc[key]=(acc[key]||0)+1;
    return acc;
  },{});
  const reviewStates=uniq(courseReviews.map(r=>r.disposition||r.review_status||r.review_state||r.status));
  const directOrContentReviews=courseReviews.filter(r=>r._audit_scope==='course'||r._audit_scope==='content');
  const nonAiReviews=courseReviews.filter(r=>!String(r.reviewer_name_or_role||'').toLowerCase().includes('ai-assisted'));
  const sourceStrengths=uniq(edges.map(e=>e.support_strength));
  const directExternalEdges=edges.filter(edge=>{
    const source=sourceById.get(edge.source_id);
    return !isInternalSource(source)&&['direct','strong','primary'].includes(String(edge.support_strength||'').toLowerCase());
  });
  const qualificationRequired=edges.some(e=>e.qualification_required===true);
  const highSafety=maxSafety(courseContent)==='high'||maxSafety(courseContent)==='critical';
  const evidenceRequiredRows=courseContent.filter(row=>externalEvidenceRequiredClassifications.has(row.content_classification));
  const evidenceRequiredRowsMissingExternal=evidenceRequiredRows.filter(row=>{
    const rowEdges=supportByContent.get(row.content_id)||[];
    return !rowEdges.some(edge=>!isInternalSource(sourceById.get(edge.source_id)));
  });
  const highSafetyEvidenceRequiredRows=evidenceRequiredRows.filter(row=>['high','critical'].includes(row.safety_criticality));
  const highSafetyEvidenceRequiredMissingExternal=evidenceRequiredRowsMissingExternal.filter(row=>['high','critical'].includes(row.safety_criticality));
  const internalBoundaryRows=courseContent.filter(row=>internalBoundaryClassifications.has(row.content_classification)&&['high','critical'].includes(row.safety_criticality));
  const courseRow=courseContent.find(row=>row.content_type==='course');
  return {
    course_id:courseId,
    title:inv.title||courseId,
    route_file:inv.route_file||null,
    route_materialized:routeExists(inv.route_file),
    publication_state:inv.publication_state||null,
    content_rows:courseContent.length,
    content_types:types,
    has_course_record:Boolean(courseRow),
    has_learner_objective:Boolean(courseRow?.learner_facing_text),
    question_count:types.question||0,
    claim_count:types.claim||0,
    boundary_count:types.boundary||0,
    source_edge_count:edges.length,
    unique_source_count:sourceIds.length,
    external_source_count:externalSources.length,
    support_strengths:sourceStrengths,
    review_count:courseReviews.length,
    direct_or_content_review_count:directOrContentReviews.length,
    non_ai_review_count:nonAiReviews.length,
    review_states:reviewStates,
    direct_external_support_edge_count:directExternalEdges.length,
    evidence_required_row_count:evidenceRequiredRows.length,
    evidence_required_rows_without_external_support:evidenceRequiredRowsMissingExternal.map(row=>row.content_id),
    high_safety_evidence_required_row_count:highSafetyEvidenceRequiredRows.length,
    high_safety_evidence_required_rows_without_external_support:highSafetyEvidenceRequiredMissingExternal.map(row=>row.content_id),
    high_safety_internal_boundary_row_count:internalBoundaryRows.length,
    safety_criticality:maxSafety(courseContent),
    qualification_required:qualificationRequired,
    high_safety_without_external_source:highSafety&&externalSources.length===0,
    high_safety_without_direct_external_support:highSafety&&directExternalEdges.length===0,
    high_safety_without_review:highSafety&&courseReviews.length===0,
    high_safety_without_non_ai_review:highSafety&&nonAiReviews.length===0,
    high_safety_external_claim_without_support:highSafetyEvidenceRequiredMissingExternal.length>0,
    high_safety_internal_boundary_without_review:internalBoundaryRows.length>0&&courseReviews.length===0,
  };
});

const count=fn=>rows.filter(fn).length;
const gapList=fn=>rows.filter(fn).map(r=>({course_id:r.course_id,title:r.title,route_file:r.route_file,safety_criticality:r.safety_criticality}));

const summary={
  generated_at:new Date().toISOString(),
  free_identity_count:rows.length,
  route_materialized:count(r=>r.route_materialized),
  with_structured_content:count(r=>r.content_rows>0),
  with_course_record:count(r=>r.has_course_record),
  with_learner_objective:count(r=>r.has_learner_objective),
  with_questions:count(r=>r.question_count>0),
  with_claims:count(r=>r.claim_count>0),
  with_boundaries:count(r=>r.boundary_count>0),
  with_any_source_support:count(r=>r.source_edge_count>0),
  with_external_source_support:count(r=>r.external_source_count>0),
  with_direct_external_support:count(r=>r.direct_external_support_edge_count>0),
  with_any_review_record:count(r=>r.review_count>0),
  with_direct_or_content_review:count(r=>r.direct_or_content_review_count>0),
  with_non_ai_review:count(r=>r.non_ai_review_count>0),
  high_or_critical_safety:count(r=>['high','critical'].includes(r.safety_criticality)),
  high_safety_without_external_source:count(r=>r.high_safety_without_external_source),
  high_safety_without_direct_external_support:count(r=>r.high_safety_without_direct_external_support),
  high_safety_without_review:count(r=>r.high_safety_without_review),
  high_safety_without_non_ai_review:count(r=>r.high_safety_without_non_ai_review),
  courses_with_evidence_required_rows:count(r=>r.evidence_required_row_count>0),
  courses_with_evidence_required_gaps:count(r=>r.evidence_required_rows_without_external_support.length>0),
  courses_with_high_safety_evidence_required_gaps:count(r=>r.high_safety_external_claim_without_support),
  courses_with_high_safety_internal_boundaries_without_review:count(r=>r.high_safety_internal_boundary_without_review),
  zero_structured_content:count(r=>r.content_rows===0),
  zero_questions:count(r=>r.question_count===0),
  zero_external_sources:count(r=>r.external_source_count===0),
  zero_reviews:count(r=>r.review_count===0),
  zero_non_ai_reviews:count(r=>r.non_ai_review_count===0),
};

const gaps={
  missing_route:gapList(r=>!r.route_materialized),
  zero_structured_content:gapList(r=>r.content_rows===0),
  zero_questions:gapList(r=>r.question_count===0),
  zero_external_sources:gapList(r=>r.external_source_count===0),
  zero_reviews:gapList(r=>r.review_count===0),
  zero_non_ai_reviews:gapList(r=>r.non_ai_review_count===0),
  high_safety_without_external_source:gapList(r=>r.high_safety_without_external_source),
  high_safety_without_direct_external_support:gapList(r=>r.high_safety_without_direct_external_support),
  high_safety_without_review:gapList(r=>r.high_safety_without_review),
  high_safety_without_non_ai_review:gapList(r=>r.high_safety_without_non_ai_review),
  high_safety_external_claim_without_support:gapList(r=>r.high_safety_external_claim_without_support),
  high_safety_internal_boundary_without_review:gapList(r=>r.high_safety_internal_boundary_without_review),
};

console.log('Free release readiness audit');
console.log(JSON.stringify(summary,null,2));
for(const [name,list] of Object.entries(gaps)){
  console.log(`\n${name}: ${list.length}`);
  list.slice(0,30).forEach(item=>console.log(`- ${item.course_id} | ${item.title} | ${item.safety_criticality} | ${item.route_file||'no route'}`));
  if(list.length>30)console.log(`... ${list.length-30} more`);
}
console.log('\nFREE_RELEASE_AUDIT_JSON='+JSON.stringify({summary,gaps,rows}));
