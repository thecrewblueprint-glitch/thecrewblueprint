import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root=process.cwd();
const requiredPages={
  'learn.html':['data-successor-overview','data-successor-free-library','data-successor-reference-library'],
  'departments.html':['data-successor-overview','data-successor-lanes','data-successor-integrity'],
  'field.html':['data-successor-field-skills'],
  'contexts.html':['data-successor-contexts'],
  'advanced.html':[],
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
assert(!advanced.includes('data-successor-advanced'),'Advanced must not expose generated advanced course bodies.');
assert(!advanced.includes('data-premium-lock'),'Retired client-side premium-lock preview reappeared.');
assert(!advanced.includes('$'),'Advanced explainer must not publish pricing.');
assert(!advanced.includes('atlas.thecrewblueprint.com'),'Advanced must not expose Production Atlas while Atlas access remains locked.');
assert(advanced.includes('Future paid learning'),'Advanced page must remain an informational future-paid explainer.');
assert(advanced.includes('No pricing, checkout, subscription, or paid entitlement is active'),'Advanced page must state the noncommercial release boundary.');
assert(!advanced.includes('OPERATE')&&!advanced.includes('DEEPEN / LEAD'),'Advanced page must not publish account-access level labels.');

const field=text('field.html');
assert(field.includes('first-class Field Skills library'),'Field Skills surface no longer states its first-class-library role.');
const contexts=text('contexts.html');
assert(/situation-first learning/i.test(contexts),'Context Labs surface lost its situation-first role.');
const departments=text('departments.html');
assert(departments.includes('Stagehand is not a mandatory root'),'Department surface lost the independent-lane boundary statement.');

// Publication eligibility and route materialization are intentionally separate states.
// A canonical identity may be public-by-default before its presentation route exists;
// the runtime renderer must keep that item non-clickable until the route is materialized.
const publicationEligible=(projection.courses||[]).filter(course=>course.placement?.public_by_default===true);
const freeCourses=(projection.courses||[]).filter(course=>course.access?.delivery_state==='free_public');
const referenceCourses=(projection.courses||[]).filter(course=>course.access?.delivery_state==='public_reference');
assert(freeCourses.length===62,'Complete free library must expose 62 authorized identities; got '+freeCourses.length+'.');
assert(referenceCourses.length===12,'Public reference library must expose 12 identities; got '+referenceCourses.length+'.');
assert(freeCourses.every(course=>course.placement?.public_by_default===true&&course.identity?.route_state==='materialized'&&course.identity?.route_id),'Every free identity must have an authorized materialized learner route.');
assert(referenceCourses.every(course=>course.placement?.public_by_default===true&&course.identity?.route_state==='materialized'&&course.identity?.route_id),'Every public reference identity must have an authorized materialized learner route.');
const clickableCourses=publicationEligible.filter(course=>course.identity?.route_state==='materialized'&&course.identity?.route_id);
for(const course of clickableCourses){
  const route=course.identity.route_id;
  const routePath=String(route).split(/[?#]/,1)[0];
  assert(!String(route).startsWith('research/')&&!String(route).startsWith('archive/'),`Public learner route points into non-client data: ${route}`);
  assert(fs.existsSync(path.join(root,routePath)),`Materialized public learner route does not exist: ${route}`);
  assert(['free_public','public_reference'].includes(course.access?.delivery_state),`Clickable learner route is not free/reference: ${course.identity?.canonical_course_id}.`);
}
for(const course of publicationEligible.filter(course=>course.identity?.route_state!=='materialized')){
  assert(course.identity?.route_state==='unmaterialized'||course.identity?.route_state==='no_route',`Unexpected non-materialized publication state for ${course.identity?.canonical_course_id}: ${course.identity?.route_state}`);
}
for(const course of (projection.courses||[]).filter(course=>!['free_public','public_reference'].includes(course.access?.delivery_state))){
  assert(course.placement?.public_by_default===false,`Locked identity became public-by-default: ${course.identity?.canonical_course_id}.`);
  assert(course.identity?.route_id===null,`Locked identity exported a route to the client: ${course.identity?.canonical_course_id}.`);
  assert(course.learning?.objective===null,`Locked identity exported learner objective text: ${course.identity?.canonical_course_id}.`);
}

const clientJs=text('js/successor-client.js');
assert(clientJs.includes('replaceChildren'),'Successor client should render generated data without document.write/HTML string injection.');
assert(!clientJs.includes('innerHTML='),'Successor graph renderer must not inject generated projection content through innerHTML.');
assert(clientJs.includes('fetch(projectionUrl'),'Successor client is not loading the generated projection.');
assert(clientJs.includes("state.kind==='is-live'&&route"),'Successor client does not gate course links to released live routes.');
assert(clientJs.includes("delivery==='future_paid_locked'"),'Successor client is not rendering future-paid identities as locked.');
assert(clientJs.includes("delivery==='split_required_locked'"),'Successor client is not preserving split-required lock state.');
assert(clientJs.includes("['free_public','public_reference'].includes"),'Successor client is not filtering learner collections by access state.');
assert(clientJs.includes("renderFreeLibrary"),'Successor client is missing the complete free-library renderer.');
assert(clientJs.includes("renderReferenceLibrary"),'Successor client is missing the public-reference renderer.');
assert(clientJs.includes("c.access?.delivery_state==='free_public'"),'Free-library renderer is not access-authority driven.');
assert(clientJs.includes("c.access?.delivery_state==='public_reference'"),'Reference-library renderer is not access-authority driven.');
assert(!clientJs.includes('a.href=link.url'),'Successor client can still construct active Atlas links.');

const atlasLockPages=['index.html','start.html','learn.html','departments.html','field.html','contexts.html','advanced.html','sources-v4.html','experienced.html','employers.html'];
for(const file of atlasLockPages){
  const html=text(file);
  assert(!html.includes('atlas.thecrewblueprint.com'), `${file} exposes Production Atlas while learner access is locked.`);
}
const publicHtml=Object.keys(requiredPages).map(text).join('\n');
assert(!/archive\/frozen-|research-version/.test(publicHtml),'Learner-facing HTML embeds implementation/archive branch identities.');
assert(!/worker_records|personal_contacts/i.test(publicHtml),'Learner-facing HTML contains private-data semantics.');

console.log('Successor client validation passed.');
console.log(`${Object.keys(requiredPages).length} successor learner surfaces validated.`);
console.log(`${publicationEligible.length} access-authorized public identities tracked; ${freeCourses.length} free + ${referenceCourses.length} reference identities are fully materialized.`);
console.log('Existing four V4 foundation routes preserved; Advanced is explainer-only and Production Atlas remains locked.');
