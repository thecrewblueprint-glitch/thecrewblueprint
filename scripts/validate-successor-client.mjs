import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root=process.cwd();
const requiredPages={
  'learn.html':['data-successor-overview'],
  'departments.html':['data-successor-overview','data-successor-lanes','data-successor-integrity'],
  'field.html':['data-successor-field-skills'],
  'contexts.html':['data-successor-contexts'],
  'advanced.html':['data-successor-advanced'],
  'sources-v4.html':['data-successor-sources','data-successor-integrity']
};
const projectionPath=path.join(root,'data','generated','web-client-projection.json');

function assert(condition,message){if(!condition)throw new Error(message);}
function text(file){const p=path.join(root,file);assert(fs.existsSync(p),`Missing successor client file: ${file}`);return fs.readFileSync(p,'utf8');}

assert(fs.existsSync(projectionPath),'Generated web-client projection is required before client validation.');
const projection=JSON.parse(fs.readFileSync(projectionPath,'utf8'));

for(const [file,markers] of Object.entries(requiredPages)){
  const html=text(file);
  assert(html.includes('css/successor-client.css'),`${file} does not load successor-client.css.`);
  assert(html.includes('js/successor-client.js'),`${file} does not load successor-client.js.`);
  for(const marker of markers)assert(html.includes(marker),`${file} is missing ${marker}.`);
  assert(!html.includes('github.com/thecrewblueprint-glitch/festival-atlas/'),`${file} embeds a Production Atlas repository/branch URL instead of the stable product domain.`);
  assert(!html.includes('thecrewblueprint-glitch/Roadmapdev'),`${file} leaks a private Roadmapdev repository pointer.`);
}

const learn=text('learn.html');
for(const route of ['courses-v4/crew-ready.html','courses-v4/systems-thinking.html','courses-v4/shop-logistics.html','courses-v4/department-explorer.html']){
  assert(learn.includes(route),`Current V4 foundation route disappeared from learn.html: ${route}`);
}
for(const route of ['departments.html','field.html','contexts.html','advanced.html','sources-v4.html']){
  assert(learn.includes(route),`Learning-system navigation route missing from learn.html: ${route}`);
}

const advanced=text('advanced.html');
assert(advanced.includes('Checkout not connected'),'Advanced purchase gate must remain inactive until entitlement/payment design is accepted.');
assert(advanced.includes('data-premium-lock'),'Advanced preview lost its premium-lock boundary.');

const field=text('field.html');
assert(field.includes('first-class Field Skills library'),'Field Skills surface no longer states its first-class-library role.');
const contexts=text('contexts.html');
assert(contexts.includes('Situation-first learning'),'Context Labs surface lost its situation-first role.');
const departments=text('departments.html');
assert(departments.includes('Stagehand is not a mandatory root'),'Department surface lost the independent-lane boundary statement.');

const liveCourses=(projection.courses||[]).filter(course=>course.placement?.public_by_default===true);
for(const course of liveCourses){
  const route=course.identity?.route_id;
  assert(route,`Public-by-default course has no route: ${course.identity?.canonical_course_id}`);
  assert(course.identity?.route_state==='materialized',`Public-by-default route is not materialized: ${course.identity?.canonical_course_id}`);
  assert(!String(route).startsWith('research/')&&!String(route).startsWith('archive/'),`Public learner route points into non-client data: ${route}`);
  assert(fs.existsSync(path.join(root,route)),`Public learner route does not exist: ${route}`);
}

const clientJs=text('js/successor-client.js');
assert(clientJs.includes('replaceChildren'),'Successor client should render generated data without document.write/HTML string injection.');
assert(!clientJs.includes('innerHTML='),'Successor graph renderer must not inject generated projection content through innerHTML.');
assert(clientJs.includes('fetch(projectionUrl'),'Successor client is not loading the generated projection.');
assert(clientJs.includes("state.kind==='is-live'&&route"),'Successor client does not gate course links to released live routes.');

const publicHtml=Object.keys(requiredPages).map(text).join('\n');
assert(!/archive\/frozen-|research-version/.test(publicHtml),'Learner-facing HTML embeds implementation/archive branch identities.');
assert(!/worker_records|personal_contacts/i.test(publicHtml),'Learner-facing HTML contains private-data semantics.');

console.log('Successor client validation passed.');
console.log(`${Object.keys(requiredPages).length} graph-backed learner surfaces validated.`);
console.log(`${liveCourses.length} public-by-default graph routes resolve to existing client files.`);
console.log('Existing four V4 foundation routes preserved; premium checkout remains inactive.');
