import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..');
const errors=[];
const check=(condition,message)=>{if(!condition)errors.push(message);};
const text=rel=>readFile(path.join(root,rel),'utf8');

const projection=JSON.parse(await text('data/generated/free-web-client-projection.json'));
const courses=projection.courses||[];
const free=courses.filter(c=>c?.access?.delivery_state==='free_public');
const field=free.filter(c=>c?.placement?.learner_surface==='field');
const contexts=free.filter(c=>c?.placement?.learner_surface==='contexts');
const departments=free.filter(c=>c?.placement?.learner_surface==='departments');

check(field.length===18,`Expected 18 free Field Skills; found ${field.length}.`);
check(contexts.length===11,`Expected 11 free Context Labs; found ${contexts.length}.`);
check(departments.length>=6,`Expected at least 6 free department-basics identities; found ${departments.length}.`);

const requiredDepartmentIds=new Set([
  'C-LTG-SUPPORT',
  'C-AUD-SUPPORT',
  'C-VID-SUPPORT',
  'C-RIG-AWARE',
  'C-STG-SUPPORT',
  'C-ELC-POWER-AWARENESS',
  'C-BPW-SUPPORT'
]);
const actualDepartmentIds=new Set(departments.map(c=>c?.identity?.canonical_course_id));
for(const id of requiredDepartmentIds)check(actualDepartmentIds.has(id),`Required free department basic missing from client projection: ${id}`);

const foundation=[
  'courses-v4/crew-ready.html',
  'courses-v4/systems-thinking.html',
  'courses-v4/shop-logistics.html',
  'courses-v4/department-explorer.html'
];
for(const rel of foundation){
  const html=await text(rel);
  check(html.includes('js/blueprint-v4.js'),`${rel}: foundation course is missing the shared auth/navigation runtime.`);
}

const primaryPages=['index.html','start.html','learn.html','field.html','contexts.html'];
const navTargets=[
  ['Home','index.html'],
  ['Start Here','start.html'],
  ['Courses','learn.html'],
  ['Field Skills','field.html'],
  ['Context Labs','contexts.html']
];
for(const rel of primaryPages){
  const html=await text(rel);
  for(const [label,href] of navTargets){
    check(html.includes(`href="${href}"`)&&html.includes(`>${label}</a>`),`${rel}: required primary navigation item missing: ${label}`);
  }
  check(html.includes('id="clerk-auth-slot"'),`${rel}: Clerk account/sign-in slot missing from primary header.`);
}

const gatedPages=['start.html','learn.html','field.html','contexts.html','departments.html'];
for(const rel of gatedPages){
  const html=await text(rel);
  check(html.includes('data-member-sample'),`${rel}: signed-out sample surface missing.`);
  check(html.includes('data-member-full'),`${rel}: signed-in full surface missing.`);
  check(html.includes('data-member-sign-in'),`${rel}: sign-in action missing from sample surface.`);
  check(html.includes('data-member-sign-up'),`${rel}: create-account action missing from sample surface.`);
}

const index=await text('index.html');
check(!index.includes('Free foundation track'),'Homepage still duplicates the foundation-course catalog.');
for(const route of foundation)check(!index.includes(route),`Homepage still links directly to duplicated foundation course card: ${route}`);

const learn=await text('learn.html');
check(learn.includes('data-successor-free-library'),'Courses page is missing the complete free-library renderer.');
check(!learn.includes('Creating an account is optional for access.'),'Courses page still claims full account access is optional.');
check(!learn.includes('data-successor-overview'),'Courses page still exposes internal canonical-graph overview.');

const fieldHtml=await text('field.html');
check(fieldHtml.includes('data-successor-field-skills'),'Field Skills page is missing the 18-skill renderer.');

const contextsHtml=await text('contexts.html');
check(contextsHtml.includes('data-successor-contexts'),'Context Labs page is missing the free context renderer.');

const departmentsHtml=await text('departments.html');
check(departmentsHtml.includes('data-successor-departments'),'Department Basics page is missing the free department renderer.');
check(!departmentsHtml.includes('data-successor-overview')&&!departmentsHtml.includes('data-successor-lanes')&&!departmentsHtml.includes('data-successor-integrity'),'Department Basics still exposes internal graph/audit surfaces.');

if(errors.length){
  console.error(`Free learner-scope validation failed with ${errors.length} error(s):`);
  for(const error of errors)console.error('- '+error);
  process.exitCode=1;
}else{
  console.log('Free learner-scope validation passed.');
  console.log('- header: Home / Start Here / Courses / Field Skills / Context Labs + Clerk account slot');
  console.log('- signed-out sample and signed-in full surfaces are present');
  console.log('- 4 foundation courses, 18 Field Skills, 11 Context Labs, and free Department Basics are wired into the current release');
  console.log('- homepage course duplication and internal canonical-graph learner surfaces are absent');
}
