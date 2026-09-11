import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..');
const sourcePath=path.join(root,'data','generated','web-client-projection.json');
const targetPath=path.join(root,'data','generated','free-web-client-projection.json');

const source=JSON.parse(await readFile(sourcePath,'utf8'));
const allowedDelivery=new Set(['free_public','public_reference']);

const courses=(source.courses||[]).filter(course=>allowedDelivery.has(course?.access?.delivery_state));
const ids=new Set(courses.map(course=>course?.identity?.canonical_course_id).filter(Boolean));

const edges=(source.edges||[]).filter(edge=>{
  const from=edge?.from||edge?.source||edge?.from_id||edge?.source_id;
  const to=edge?.to||edge?.target||edge?.to_id||edge?.target_id;
  const fromOk=!from||ids.has(from);
  const toOk=!to||ids.has(to);
  return fromOk&&toOk;
});

const output={
  ...source,
  courses,
  edges,
  release_scope:'free_tier_public_client',
  generated_from:'web-client-projection.json',
  excluded_nonfree_count:(source.courses||[]).length-courses.length
};

if(output.summary&&typeof output.summary==='object'){
  output.summary={...output.summary,course_count:courses.length,release_scope:'free_tier_public_client'};
}

await writeFile(targetPath,JSON.stringify(output,null,2)+'\n','utf8');
console.log(`Generated free client projection with ${courses.length} courses; excluded ${output.excluded_nonfree_count} non-free identities.`);
