import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..');
const sourcePath=path.join(root,'data','generated','web-client-projection.json');
const targetPath=path.join(root,'data','generated','free-web-client-projection.json');

const source=JSON.parse(await readFile(sourcePath,'utf8'));
const allowedDelivery=new Set(['free_public','public_reference']);

const rawCourses=(source.courses||[]).filter(course=>allowedDelivery.has(course?.access?.delivery_state));
const allowedSourceIds=new Set(rawCourses.flatMap(course=>course?.evidence?.source_ids||[]));

const courses=rawCourses.map(course=>({
  identity:{
    canonical_course_id:course?.identity?.canonical_course_id||null,
    route_id:course?.identity?.route_id||null,
    title:course?.identity?.title||null,
    publication_state:course?.identity?.publication_state||null,
    route_state:course?.identity?.route_state||null
  },
  placement:{
    learner_surface:course?.placement?.learner_surface||'learn',
    career_lane_ids:course?.placement?.career_lane_ids||[],
    presentation_tier:course?.placement?.presentation_tier||null,
    node_role:course?.placement?.node_role||null,
    public_by_default:course?.placement?.public_by_default===true
  },
  access:{
    responsibility_state:course?.access?.responsibility_state||null,
    access_class:course?.access?.access_class||null,
    delivery_state:course?.access?.delivery_state||null
  },
  learning:{
    objective:course?.learning?.objective||null
  },
  boundary:{
    safety_criticality:course?.boundary?.safety_criticality||'unknown',
    qualification_boundary:course?.boundary?.qualification_boundary===true,
    stop_or_escalate_message:course?.boundary?.stop_or_escalate_message||null
  }
}));

const sources=(source.sources||[]).filter(item=>allowedSourceIds.has(item?.source_id)).map(item=>({
  source_id:item.source_id,
  source_owner:item.source_owner||null,
  title:item.title||null,
  url:item.url||null,
  evidence_type:item.evidence_type||null,
  authority_level:item.authority_level||null,
  jurisdiction_scope:item.jurisdiction_scope||null,
  access_date:item.access_date||null,
  freshness_class:item.freshness_class||null,
  source_status:item.source_status||null
}));

const output={
  schema_version:'1.0.0',
  projection_id:'crew-blueprint-free-web-client-projection-1',
  release_scope:'free_tier_public_client',
  invariants:{
    course_completion_not_authorization:true,
    production_atlas_owns_volatile_work_data:true
  },
  atlas_access:{
    state:'locked_unavailable',
    learner_tool_available:false,
    links_exposed:false
  },
  sources,
  courses
};

await writeFile(targetPath,JSON.stringify(output,null,2)+'\n','utf8');
console.log(`Generated minimal free client projection with ${courses.length} free/reference identities and ${sources.length} relevant public source records.`);
