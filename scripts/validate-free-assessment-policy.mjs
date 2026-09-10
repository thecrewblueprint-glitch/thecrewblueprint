import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root=process.cwd();
const matrixDir=path.join(root,'research','matrix');
const integrationDir=path.join(root,'research','integration');
const analysisDir=path.join(root,'research','analysis');

function readJson(file){return JSON.parse(fs.readFileSync(file,'utf8'));}
function readJsonl(file){
  if(!fs.existsSync(file))return[];
  return fs.readFileSync(file,'utf8').split(/\r?\n/).map(x=>x.trim()).filter(Boolean).map(JSON.parse);
}
function readPartitions(pattern){
  return fs.readdirSync(matrixDir).filter(name=>pattern.test(name)).sort().flatMap(name=>readJsonl(path.join(matrixDir,name)));
}
function unique(values){return [...new Set(values)];}
function assert(condition,message){if(!condition)throw new Error(message);}

const policy=readJson(path.join(integrationDir,'free-assessment-policy-74-v0.1-2026-09-10.json'));
const crosswalk=readJson(path.join(integrationDir,'responsibility-access-crosswalk-143-v0.1-2026-09-09.json'));
const mapping=readJson(path.join(analysisDir,'vnext-career-guided-course-map-2026-09-07.json'));
const inventory=readJsonl(path.join(matrixDir,'course_inventory.jsonl'));
const content=readPartitions(/^content(?:_(?!lineage_edges)[^.]+)?\.jsonl$/);

const invBy=new Map(inventory.map(row=>[row.course_id,row]));
const groupBy=new Map();
for(const group of mapping.mapping_groups||[]) for(const id of group.course_ids||[]) groupBy.set(id,group);

const freeIds=(crosswalk.groups||[])
  .filter(group=>group.access_class==='FREE'&&group.delivery_policy==='free')
  .flatMap(group=>group.canonical_ids||[]);
const refIds=(crosswalk.groups||[])
  .filter(group=>group.access_class==='REFERENCE'&&group.delivery_policy==='public_reference')
  .flatMap(group=>group.canonical_ids||[]);
const publicIds=[...freeIds,...refIds];

const assignments=policy.assignments||[];
const ids=assignments.map(row=>row.course_id);
assert(assignments.length===74,`Assessment policy must contain 74 public items; got ${assignments.length}.`);
assert(unique(ids).length===74,'Assessment policy contains duplicate course IDs.');
assert(publicIds.every(id=>ids.includes(id)),'Assessment policy is missing one or more public learner identities.');
assert(ids.every(id=>publicIds.includes(id)),'Assessment policy contains identity outside current public learner projection.');

const allowed=new Set(['ASSESSMENT_REQUIRED','KNOWLEDGE_CHECK_OPTIONAL','PRACTICE_OBSERVATION_MORE_APPROPRIATE','REFERENCE_NO_ASSESSMENT']);
const counts={};
for(const row of assignments){
  assert(allowed.has(row.assessment_policy),`Invalid assessment policy for ${row.course_id}: ${row.assessment_policy}`);
  assert(invBy.has(row.course_id),`Assessment policy identity missing from course inventory: ${row.course_id}`);
  counts[row.assessment_policy]=(counts[row.assessment_policy]||0)+1;

  const graph=groupBy.get(row.course_id)||{};
  if(refIds.includes(row.course_id)){
    assert(row.assessment_policy==='REFERENCE_NO_ASSESSMENT',`Public reference must not require assessment: ${row.course_id}`);
  }
  if(graph.node_role==='field_skill_library'){
    assert(row.assessment_policy==='PRACTICE_OBSERVATION_MORE_APPROPRIATE',`Field Skill must use observed-practice policy: ${row.course_id}`);
    assert(row.observed_practice_required_for_practical_competence===true,`Field Skill missing observed-practice requirement: ${row.course_id}`);
  }
  if(freeIds.includes(row.course_id)&&graph.node_role==='context_reference'){
    assert(row.assessment_policy==='REFERENCE_NO_ASSESSMENT',`Free context reference must not require scored assessment: ${row.course_id}`);
  }
  if(row.assessment_policy==='ASSESSMENT_REQUIRED'){
    assert(Number(row.minimum_normalized_question_count)>=5,`Required assessment must require at least five normalized questions: ${row.course_id}`);
  }
  assert(!/authoriz|qualif|certif|licen|appointment/i.test(String(row.completion_effect||''))
    || /no_|does_not|only_no|reference_access/i.test(String(row.completion_effect||'')),
    `Completion effect may imply external authority for ${row.course_id}: ${row.completion_effect}`);
}

const expectedCounts={
  ASSESSMENT_REQUIRED:30,
  PRACTICE_OBSERVATION_MORE_APPROPRIATE:18,
  KNOWLEDGE_CHECK_OPTIONAL:5,
  REFERENCE_NO_ASSESSMENT:21
};
for(const [key,value] of Object.entries(expectedCounts)){
  assert(counts[key]===value,`Expected ${value} ${key} items; got ${counts[key]||0}.`);
}

const questionCount=new Map();
for(const row of content){
  if(row.content_type!=='question'||!row.course_id)continue;
  questionCount.set(row.course_id,(questionCount.get(row.course_id)||0)+1);
}
const required=assignments.filter(row=>row.assessment_policy==='ASSESSMENT_REQUIRED');
const requiredGaps=required.filter(row=>(questionCount.get(row.course_id)||0)<Number(row.minimum_normalized_question_count||5));
const practice=assignments.filter(row=>row.assessment_policy==='PRACTICE_OBSERVATION_MORE_APPROPRIATE');
const optional=assignments.filter(row=>row.assessment_policy==='KNOWLEDGE_CHECK_OPTIONAL');
const references=assignments.filter(row=>row.assessment_policy==='REFERENCE_NO_ASSESSMENT');

console.log('Free/public assessment policy');
console.log(`- Public learner items: ${assignments.length}`);
console.log(`- Assessment required: ${required.length}`);
console.log(`- Practice/observation primary: ${practice.length}`);
console.log(`- Knowledge check optional: ${optional.length}`);
console.log(`- Reference/no assessment: ${references.length}`);
console.log(`- Required items already normalized to minimum: ${required.length-requiredGaps.length}/${required.length}`);
console.log(`- Required matrix-normalization gaps: ${requiredGaps.length}`);
for(const row of requiredGaps){
  console.log(`  - ${row.course_id} | ${row.title} | normalized questions ${questionCount.get(row.course_id)||0}/${row.minimum_normalized_question_count}`);
}

if(policy.enforcement?.phase==='hard_gate_assessment_required_minimum_question_count'){
  assert(requiredGaps.length===0,`Assessment-required normalization gaps remain: ${requiredGaps.map(row=>row.course_id).join(', ')}`);
} else {
  assert(policy.enforcement?.phase==='diagnostic_until_required_matrix_normalization_complete',
    `Unknown assessment enforcement phase: ${policy.enforcement?.phase}`);
}

console.log('PASS — assessment policy is structurally complete; required-question enforcement is currently diagnostic.');
console.log('ASSESSMENT_POLICY_DIAGNOSTIC_JSON='+JSON.stringify({
  counts,
  required_total:required.length,
  required_normalized:required.length-requiredGaps.length,
  required_gaps:requiredGaps.map(row=>({
    course_id:row.course_id,
    title:row.title,
    question_count:questionCount.get(row.course_id)||0,
    minimum:row.minimum_normalized_question_count
  }))
}));
