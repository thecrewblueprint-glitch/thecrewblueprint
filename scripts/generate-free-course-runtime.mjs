import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..');
const projectionPath=path.join(root,'data','generated','web-client-projection.json');
const outputPath=path.join(root,'data','generated','free-course-runtime.js');

const projection=JSON.parse(await readFile(projectionPath,'utf8'));
const freeShared=(projection.courses||[]).filter(course=>
  course?.access?.delivery_state==='free_public'
  && course?.identity?.route_state==='materialized'
  && String(course?.identity?.route_id||'').startsWith('courses/ecosystem-course.html?course=')
);
const freeIds=new Set(freeShared.map(course=>course.identity.canonical_course_id));
const freeSlugs=new Set(freeShared.map(course=>new URLSearchParams(course.identity.route_id.split('?')[1]||'').get('course')).filter(Boolean));

const context={window:{},console};
vm.createContext(context);
for(const rel of [
  'js/ecosystem-courses.js',
  'js/frontier-expansion.js',
  'js/ecosystem-normalize.js',
  'js/ecosystem-depth-authoring.js',
  'js/ecosystem-depth-runtime-normalize.js'
]){
  const source=await readFile(path.join(root,rel),'utf8');
  vm.runInContext(source,context,{filename:rel});
}

const ecosystem=context.window.CBPEcosystem;
if(!ecosystem||!Array.isArray(ecosystem.courses))throw new Error('Mixed ecosystem runtime did not initialize.');

const courses=ecosystem.courses.filter(course=>freeIds.has(course.id)&&freeSlugs.has(course.slug));
const foundIds=new Set(courses.map(course=>course.id));
const missing=[...freeIds].filter(id=>!foundIds.has(id));
if(missing.length)throw new Error('Free shared runtime is missing canonical IDs: '+missing.join(', '));

const existing=(ecosystem.existing||[]).filter(course=>freeIds.has(course.id));
const payload={
  courses,
  existing,
  domains:ecosystem.domains||{},
  evidence:{}
};

const serialized='/* Generated free-tier runtime. Do not hand edit. */\n'
  +'(function(){\'use strict\';window.CBPEcosystem='+JSON.stringify(payload)+';})();\n';

await mkdir(path.dirname(outputPath),{recursive:true});
await writeFile(outputPath,serialized,'utf8');

console.log(`Generated free-only ecosystem runtime: ${courses.length} shared free courses.`);
console.log(`Excluded ${(ecosystem.courses||[]).length-courses.length} non-free or non-release runtime entries.`);
