// Deterministic free-client projection; only supplied canonical metadata, no I/O.
function assertUniqueRows(rows,key,label){
  if(!Array.isArray(rows))throw Error('Missing '+label+' records');
  const seen=new Set();
  for(const row of rows){
    const id=key(row);
    if(typeof id!=='string'||!id.trim()||seen.has(id))throw Error('Invalid or duplicate '+label+' identity');
    seen.add(id);
  }
}
export function projectFreeClient(source){
  if(!source||typeof source!=='object'||Array.isArray(source))throw Error('Invalid canonical projection');
  assertUniqueRows(source.courses,c=>c?.identity?.canonical_course_id,'course');
  assertUniqueRows(source.sources,s=>s?.source_id,'source');
  if(!source.courses.length)throw Error('Empty canonical courses');
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

  return output;
}
// Exact canonical serialization: different key order is rejected conservatively.
export function verifyFreeClient(source,free){
  const expected=projectFreeClient(source);
  if(!expected.courses.length||expected.courses.length>=source.courses.length)throw Error('Free/nonfree separation not established');
  if(JSON.stringify(expected)!==JSON.stringify(free))throw Error('Free projection differs from canonical allowlisted projection');
  return true;
}
