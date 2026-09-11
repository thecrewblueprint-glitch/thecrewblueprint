import { readFile, writeFile, mkdir, rm, copyFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..');
const outDir=path.join(root,'_site');
const generatedDir=path.join(root,'data','generated');
const manifestPath=path.join(generatedDir,'free-release-artifact-manifest.json');

const projection=JSON.parse(await readFile(path.join(generatedDir,'free-web-client-projection.json'),'utf8'));

const foundationPages=[
  'courses-v4/crew-ready.html',
  'courses-v4/systems-thinking.html',
  'courses-v4/shop-logistics.html',
  'courses-v4/department-explorer.html'
];

const publicPages=[
  'index.html',
  'start.html',
  'learn.html',
  'field.html',
  'contexts.html',
  'departments.html',
  'advanced.html',
  'about.html',
  'contact.html',
  'sign-up.html',
  'sources-v4.html',
  'privacy-policy.html',
  'terms-and-conditions.html',
  'cookies-notice.html',
  'accessibility-statement.html',
  'limitation-of-liability.html',
  'affiliate-disclosure.html'
];

const deliveryAllowed=new Set(['free_public','public_reference']);
const learnerRoutes=(projection.courses||[])
  .filter(course=>deliveryAllowed.has(course?.access?.delivery_state)&&course?.identity?.route_state==='materialized')
  .map(course=>String(course?.identity?.route_id||''))
  .filter(Boolean);

const routeFiles=learnerRoutes.map(route=>route.split(/[?#]/)[0]).filter(Boolean);
const htmlAllowlist=new Set([...publicPages,...foundationPages,...routeFiles]);

const explicitDynamicAssets=[
  'css/blueprint-v4.css',
  'css/course-dashboard-v4.css',
  'css/successor-client.css',
  'css/course-consent.css',
  'css/course-shell.css',
  'js/blueprint-v4.js',
  'js/successor-client.js',
  'js/course-consent.js',
  'js/course-shell.js',
  'js/ecosystem-course.js',
  'data/generated/free-course-runtime.js',
  'data/generated/free-web-client-projection.json',
  'images/crew-blueprint-mark.png'
];

const prohibitedPrefixes=[
  '.git/','.github/','.claude/','research/','archive/','content/archive/','docs/','legal-tasks/',
  'ai-communication/','handoffs/','planning/'
];
const prohibitedExact=new Set([
  'js/ecosystem-courses.js',
  'js/frontier-expansion.js',
  'js/ecosystem-depth-authoring.js',
  'js/ecosystem-depth-runtime-normalize.js',
  'data/generated/web-client-projection.json',
  'curriculum-map.html',
  'courses.html',
  'sitemap.xml',
  'robots.txt'
]);

const errors=[];
const copied=new Set();
const assetQueue=[...explicitDynamicAssets];

function normalizeRel(baseFile,ref){
  if(!ref)return null;
  const trimmed=ref.trim();
  if(!trimmed||trimmed.startsWith('#')||/^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(trimmed))return null;
  const clean=trimmed.split('#')[0].split('?')[0];
  if(!clean)return null;
  const resolved=path.posix.normalize(path.posix.join(path.posix.dirname(baseFile),decodeURIComponent(clean))).replace(/^\.\//,'');
  if(resolved.startsWith('../'))return null;
  return resolved;
}

function prohibited(rel){
  return prohibitedExact.has(rel)||prohibitedPrefixes.some(prefix=>rel===prefix.slice(0,-1)||rel.startsWith(prefix));
}

async function exists(rel){
  try{return (await stat(path.join(root,rel))).isFile();}catch{return false;}
}

async function copy(rel){
  if(copied.has(rel))return;
  if(prohibited(rel)){errors.push('Prohibited release path requested: '+rel);return;}
  if(!await exists(rel)){errors.push('Release dependency does not exist: '+rel);return;}
  const target=path.join(outDir,rel);
  await mkdir(path.dirname(target),{recursive:true});
  await copyFile(path.join(root,rel),target);
  copied.add(rel);
}

function refsFromHtml(source){
  return [...source.matchAll(/\b(?:src|href)=["']([^"']+)["']/gi)].map(m=>m[1]);
}
function refsFromCss(source){
  return [...source.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)].map(m=>m[1]);
}

await rm(outDir,{recursive:true,force:true});
await mkdir(outDir,{recursive:true});

for(const html of htmlAllowlist){
  if(prohibited(html)){errors.push('Prohibited HTML route entered allowlist: '+html);continue;}
  if(!await exists(html)){errors.push('Allowlisted HTML route is missing: '+html);continue;}
  await copy(html);
  const source=await readFile(path.join(root,html),'utf8');
  for(const ref of refsFromHtml(source)){
    const rel=normalizeRel(html,ref);
    if(!rel)continue;
    if(rel.endsWith('.html')){
      if(!htmlAllowlist.has(rel))errors.push(`${html}: links to non-release HTML route ${rel}`);
      continue;
    }
    if(prohibited(rel)){errors.push(`${html}: references prohibited release dependency ${rel}`);continue;}
    assetQueue.push(rel);
  }
}

while(assetQueue.length){
  const rel=assetQueue.shift();
  if(!rel||copied.has(rel))continue;
  if(prohibited(rel)){errors.push('Prohibited asset entered release queue: '+rel);continue;}
  if(!await exists(rel)){errors.push('Release asset is missing: '+rel);continue;}
  await copy(rel);
  if(rel.endsWith('.css')){
    const source=await readFile(path.join(root,rel),'utf8');
    for(const ref of refsFromCss(source)){
      const child=normalizeRel(rel,ref);
      if(child&&!copied.has(child))assetQueue.push(child);
    }
  }
}

const nonFreeMaterialized=(JSON.parse(await readFile(path.join(generatedDir,'web-client-projection.json'),'utf8')).courses||[])
  .filter(course=>!deliveryAllowed.has(course?.access?.delivery_state)&&course?.identity?.route_state==='materialized')
  .map(course=>String(course?.identity?.route_id||'').split(/[?#]/)[0])
  .filter(Boolean);

for(const rel of new Set(nonFreeMaterialized)){
  if(rel==='courses/ecosystem-course.html')continue;
  if(copied.has(rel))errors.push('Non-free materialized course body leaked into release artifact: '+rel);
}

for(const forbidden of prohibitedExact){
  if(copied.has(forbidden))errors.push('Forbidden file exists in release artifact: '+forbidden);
}

const manifest={
  release_scope:'free_tier_only',
  public_pages:publicPages,
  foundation_pages:foundationPages,
  learner_route_count:learnerRoutes.length,
  learner_route_files:[...new Set(routeFiles)].sort(),
  copied_files:[...copied].sort(),
  excluded_nonfree_routes:[...new Set(nonFreeMaterialized)].sort(),
  generated_projection:'data/generated/free-web-client-projection.json',
  generated_course_runtime:'data/generated/free-course-runtime.js'
};
await writeFile(manifestPath,JSON.stringify(manifest,null,2)+'\n','utf8');

if(errors.length){
  console.error(`Free release artifact build failed with ${errors.length} error(s):`);
  for(const error of errors)console.error('- '+error);
  process.exitCode=1;
}else{
  console.log('Free release artifact built from explicit allowlists.');
  console.log(`- ${manifest.public_pages.length} public shell/legal pages`);
  console.log(`- ${manifest.foundation_pages.length} authenticated foundation course pages`);
  console.log(`- ${manifest.learner_route_count} allowed learner routes`);
  console.log(`- ${manifest.copied_files.length} total files copied`);
  console.log('- paid/advanced course bodies and mixed runtime catalogs excluded');
}
