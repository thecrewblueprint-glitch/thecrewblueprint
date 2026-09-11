import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..');
const full=JSON.parse(await readFile(path.join(root,'data','generated','web-client-projection.json'),'utf8'));
const free=JSON.parse(await readFile(path.join(root,'data','generated','free-web-client-projection.json'),'utf8'));
const errors=[];
const allowed=new Set(['free_public','public_reference']);

for(const course of free.courses||[]){
  if(!allowed.has(course?.access?.delivery_state)){
    errors.push(`Non-free delivery state leaked: ${course?.identity?.canonical_course_id} -> ${course?.access?.delivery_state}`);
  }
}
const freeIds=new Set((free.courses||[]).map(c=>c?.identity?.canonical_course_id));
for(const course of full.courses||[]){
  const should=allowed.has(course?.access?.delivery_state);
  const has=freeIds.has(course?.identity?.canonical_course_id);
  if(should&&!has)errors.push('Missing allowed client identity: '+course?.identity?.canonical_course_id);
  if(!should&&has)errors.push('Disallowed client identity present: '+course?.identity?.canonical_course_id);
}
if(free.generated_from||free.learner_path_edges||free.virtual_nodes||free.edges)errors.push('Free projection still exposes internal graph lineage or edge structures.');
for(const course of free.courses||[]){
  if(course.lineage||course.evidence||course.media||course.work_bridge||course.client){
    errors.push('Free projection exposes internal course metadata: '+course?.identity?.canonical_course_id);
  }
}
const allowedSourceIds=new Set(
  (full.courses||[])
    .filter(course=>allowed.has(course?.access?.delivery_state))
    .flatMap(course=>course?.evidence?.source_ids||[])
);
for(const source of free.sources||[]){
  if(!allowedSourceIds.has(source?.source_id))errors.push('Source unrelated to free/reference content leaked: '+source?.source_id);
}

if(free.release_scope!=='free_tier_public_client')errors.push('Free projection release_scope is missing or incorrect.');
if((free.courses||[]).length>=(full.courses||[]).length)errors.push('Free projection did not remove any non-free identities.');

if(errors.length){
  console.error(`Free client projection validation failed with ${errors.length} error(s):`);
  for(const error of errors)console.error('- '+error);
  process.exitCode=1;
}else{
  console.log('Free client projection validation passed.');
  console.log(`- ${(free.courses||[]).length} free/reference client identities included`);
  console.log(`- ${(full.courses||[]).length-(free.courses||[]).length} non-free identities excluded`);
  console.log('- internal lineage, edge, media, and non-release graph metadata excluded');
  console.log(`- ${(free.sources||[]).length} source records limited to released free/reference content`);
}
