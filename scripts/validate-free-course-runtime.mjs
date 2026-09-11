import { readFile } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..');
const projection=JSON.parse(await readFile(path.join(root,'data','generated','web-client-projection.json'),'utf8'));
const runtimeSource=await readFile(path.join(root,'data','generated','free-course-runtime.js'),'utf8');

const context={window:{},console};
vm.createContext(context);
vm.runInContext(runtimeSource,context,{filename:'free-course-runtime.js'});
const runtime=context.window.CBPEcosystem;
if(!runtime||!Array.isArray(runtime.courses))throw new Error('Free runtime did not initialize.');

const freeProjected=(projection.courses||[]).filter(course=>
  course?.access?.delivery_state==='free_public'
  && course?.identity?.route_state==='materialized'
  && String(course?.identity?.route_id||'').startsWith('courses/ecosystem-course.html?course=')
);
const expected=new Set(freeProjected.map(course=>course.identity.canonical_course_id));
const actual=new Set(runtime.courses.map(course=>course.id));
const errors=[];

for(const id of expected)if(!actual.has(id))errors.push('Missing free course: '+id);
for(const id of actual)if(!expected.has(id))errors.push('Non-free course leaked into free runtime: '+id);

for(const course of runtime.courses){
  if(!course.slug)errors.push('Missing slug: '+course.id);
  if(!course.title)errors.push('Missing title: '+course.id);
  if(course.tier&&['T5','T6','T7'].includes(course.tier))errors.push('Advanced tier leaked into free runtime: '+course.id+' '+course.tier);
}

const mixedSources=[
  'js/ecosystem-courses.js',
  'js/frontier-expansion.js',
  'js/ecosystem-depth-authoring.js',
  'js/ecosystem-depth-runtime-normalize.js'
];
const courseHtml=await readFile(path.join(root,'courses','ecosystem-course.html'),'utf8');
for(const source of mixedSources){
  if(courseHtml.includes(source))errors.push('Shared course page still loads mixed runtime source: '+source);
}
if(!courseHtml.includes('../data/generated/free-course-runtime.js'))errors.push('Shared course page does not load the generated free runtime.');

if(errors.length){
  console.error(`Free runtime validation failed with ${errors.length} error(s):`);
  for(const error of errors)console.error('- '+error);
  process.exitCode=1;
}else{
  console.log('Free runtime validation passed.');
  console.log(`- ${actual.size} shared course bodies included`);
  console.log('- no advanced T5/T6/T7 runtime entries included');
  console.log('- mixed ecosystem catalogs are not loaded by the shared learner route');
}
