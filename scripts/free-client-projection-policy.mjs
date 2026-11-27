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
// Validate the actual released field types before copying any values. Exact
// serialization alone cannot prevent a nested object hidden in a string field.
function publicString(value, label, limit=16384){
  if(value===undefined||value===null||value==='')return null;
  if(typeof value!=='string'||value.length>limit||/[\u0000\u007f]/.test(value))
    throw Error('Invalid released scalar: '+label);
  return value;
}
function stringList(value,label){
  if(value===undefined||value===null)return [];
  if(!Array.isArray(value)||value.length>1024||value.some(x=>typeof x!=='string'||!x.trim()||x.length>512||/[\u0000-\u001f\u007f]/.test(x))||new Set(value).size!==value.length)
    throw Error('Invalid released list: '+label);
  return value;
}
function publicURL(value){
  const raw=publicString(value,'source URL',4096);
  if(raw===null)return null;
  if(/\s|[\\\u0000-\u001f\u007f]/.test(raw)||!/^https?:\/\//i.test(raw))
    throw Error('Invalid released source URL');
  const url=new URL(raw);
  if(!['https:','http:'].includes(url.protocol)||!url.hostname||url.username||url.password)
    throw Error('Invalid released source URL');
  return raw;
}
function validateReleasedRows(courses,sources){
  for(const course of courses){
    for(const [section,fields] of Object.entries({
      identity:['canonical_course_id','route_id','title','publication_state','route_state'],
      placement:['learner_surface','presentation_tier','node_role'],
      access:['responsibility_state','access_class','delivery_state'],
      learning:['objective'],
      boundary:['safety_criticality','stop_or_escalate_message']
    }))for(const field of fields)publicString(course?.[section]?.[field],section+'.'+field);
    stringList(course?.placement?.career_lane_ids,'career_lane_ids');
    stringList(course?.evidence?.source_ids,'source_ids');
    for(const [section,field] of [['placement','public_by_default'],['boundary','qualification_boundary']]){
      const value=course?.[section]?.[field];
      if(value!==undefined&&value!==null&&typeof value!=='boolean')throw Error('Invalid released boolean: '+field);
    }
  }
  for(const source of sources){
    for(const field of ['source_id','source_owner','title','evidence_type','authority_level','jurisdiction_scope','access_date','freshness_class','source_status'])
      publicString(source[field],field);
    publicURL(source.url);
  }
}

export function projectFreeClient(source){
  if(!source||typeof source!=='object'||Array.isArray(source))throw Error('Invalid canonical projection');
  assertUniqueRows(source.courses,c=>c?.identity?.canonical_course_id,'course');
  assertUniqueRows(source.sources,s=>s?.source_id,'source');
  if(!source.courses.length)throw Error('Empty canonical courses');
const allowedDelivery=new Set(['free_public','public_reference']);

const rawCourses=(source.courses||[]).filter(course=>allowedDelivery.has(course?.access?.delivery_state));
const allowedSourceIds=new Set(rawCourses.flatMap(course=>stringList(course?.evidence?.source_ids,'source_ids')));
const rawSources=source.sources.filter(item=>allowedSourceIds.has(item?.source_id));
if(rawSources.length!==allowedSourceIds.size)throw Error('Released source identity is missing');
validateReleasedRows(rawCourses,rawSources);

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

const sources=rawSources.map(item=>({
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
