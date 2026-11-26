// Runs the actual builder in disposable checkouts containing ONLY synthetic files.
import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,readFile,copyFile,rm,lstat,symlink,link} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {projectFreeClient} from './free-client-projection-policy.mjs';
const scripts=path.dirname(fileURLToPath(import.meta.url));
const files=['index.html','start.html','learn.html','field.html','contexts.html','departments.html','advanced.html','about.html','contact.html','sign-up.html','sources-v4.html','privacy-policy.html','terms-and-conditions.html','cookies-notice.html','accessibility-statement.html','limitation-of-liability.html','affiliate-disclosure.html','courses-v4/crew-ready.html','courses-v4/systems-thinking.html','courses-v4/shop-logistics.html','courses-v4/department-explorer.html','courses/free.html','css/blueprint-v4.css','css/course-dashboard-v4.css','css/successor-client.css','css/course-consent.css','css/course-shell.css','js/blueprint-v4.js','js/successor-client.js','js/course-consent.js','js/course-shell.js','js/ecosystem-course.js','data/generated/free-course-runtime.js','images/crew-blueprint-mark.png'];
const course=(id,state)=>({identity:{canonical_course_id:id,route_id:'courses/'+id+'.html',route_state:'materialized'},access:{delivery_state:state},evidence:{source_ids:[id+'-source']}});
const full=()=>({courses:[course('free','free_public'),course('locked','locked')],sources:[{source_id:'free-source'},{source_id:'locked-source'}]});
const freePath='data/generated/free-web-client-projection.json';
const manifestPath='data/generated/free-release-artifact-manifest.json';
const imagePath='images/crew-blueprint-mark.png';
const cases=[
 ['positive',async()=>{},true],
 ['tampered projection',async f=>{const v=projectFreeClient(full());v.private_field='synthetic';await f.put(freePath,JSON.stringify(v))},false],
 ['malformed projection',f=>f.put(freePath,'{'),false],
 ['missing dependency',f=>rm(f.abs('js/course-shell.js')),false],
 ['unapproved active asset',async f=>{await f.put('js/extra.js','synthetic');await f.put('index.html','<script src="js/extra.js"></script>')},false],
 ['unapproved private data',async f=>{await f.put('data/private.json','synthetic');await f.put('index.html','<a href="data/private.json">x</a>')},false],
 ['source symlink',async f=>{await rm(f.abs(imagePath));await f.put('synthetic-target.txt','fixture');await symlink(f.abs('synthetic-target.txt'),f.abs(imagePath))},false],
 ['source hardlink',async f=>{await rm(f.abs(imagePath));await f.put('synthetic-target.txt','fixture');await link(f.abs('synthetic-target.txt'),f.abs(imagePath))},false],
 ['locked route linked',f=>f.put('index.html','<a href="courses/locked.html">x</a>'),false],
 ['root-relative asset',f=>f.put('courses/free.html','<img src="/images/crew-blueprint-mark.png">'),true],
 ['encoded traversal',f=>f.put('index.html','<img src="images/%2e%2e/private.png">'),false]
];
async function missing(p){try{await lstat(p);return false}catch(e){if(e.code==='ENOENT')return true;throw e}}
for(const [name,mutate,want] of cases)test(name,async()=>{
 const root=await mkdtemp(path.join(tmpdir(),'cb-release-synthetic-'));
 try{
  const abs=rel=>path.join(root,rel);
  const put=async(rel,body)=>{await mkdir(path.dirname(abs(rel)),{recursive:true});await writeFile(abs(rel),body)};
  for(const rel of files)await put(rel,rel.endsWith('.html')?'<html>synthetic</html>':'synthetic');
  await put('data/generated/web-client-projection.json',JSON.stringify(full()));
  await put(freePath,JSON.stringify(projectFreeClient(full())));
  await put('_site/old.txt','stale');
  await put(manifestPath,'stale');
  await mkdir(abs('scripts'));
  for(const file of ['build-free-release-artifact.mjs','release-path-policy.mjs','free-client-projection-policy.mjs'])await copyFile(path.join(scripts,file),abs('scripts/'+file));
  await mutate({abs,put});
  const run=spawnSync(process.execPath,[abs('scripts/build-free-release-artifact.mjs')],{cwd:root,encoding:'utf8',timeout:10000});
  assert.equal(run.error,undefined);
  assert.equal(run.status===0,want,run.stderr);
  if(want){
   const manifest=JSON.parse(await readFile(abs(manifestPath),'utf8'));
   assert.ok(manifest.copied_files.includes('courses/free.html'));
   assert.ok(!manifest.copied_files.includes('courses/locked.html'));
   assert.equal(await missing(abs('_site/old.txt')),true);
   assert.equal(await missing(abs('_site/courses/free.html')),false);
  }else{
   assert.equal(await missing(abs('_site')),true);
   assert.equal(await missing(abs(manifestPath)),true);
  }
 }finally{await rm(root,{recursive:true,force:true})}
});
