import { readFile, writeFile, mkdir, rm, copyFile, lstat, realpath } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { canonicalReleasePath, resolveReleaseReference, learnerRoutePath, allowedReleaseAsset } from './release-path-policy.mjs';
import { verifyFreeClient } from './free-client-projection-policy.mjs';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..');
const outDir=path.join(root,'_site');
const generatedDir=path.join(root,'data','generated');
const manifestPath=path.join(generatedDir,'free-release-artifact-manifest.json');

// Clear prior release output even when projection parsing/validation fails.
await rm(outDir,{recursive:true,force:true});
for(const directory of [path.join(root,'data'),generatedDir]){
  const info=await lstat(directory);
  if(!info.isDirectory()||info.isSymbolicLink())throw Error('Unsafe generated artifact directory');
}
await rm(manifestPath,{force:true});
try{
for(const rel of ['data/generated/free-web-client-projection.json','data/generated/web-client-projection.json']){
  let current=root;
  for(const segment of rel.split('/')){
    current=path.join(current,segment);
    if((await lstat(current)).isSymbolicLink())throw Error('Symbolic link in projection input');
  }
}
const projection=JSON.parse(await readFile(path.join(generatedDir,'free-web-client-projection.json'),'utf8'));
const fullProjection=JSON.parse(await readFile(path.join(generatedDir,'web-client-projection.json'),'utf8'));
verifyFreeClient(fullProjection,projection);

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
  .map(course=>course?.identity?.route_id);

const routeFiles=learnerRoutes.map(learnerRoutePath);
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

// Seven shared dependencies observed in release HTML at the reviewed candidate.
 // They remain conditional on an actual page reference, never a broad JS/CSS wildcard.
const reviewedSharedAssets=new Map([
  ['css/homepage-review.css','9b41864ae69e82f03612163bb0bf99391aab1989'],
  ['css/theme.css','0ee8992f7a44a78fc66b87063257f683de6c289d'],
  ['css/tiered-course.css','348da8284b426805a94637abec88058716172209'],
  ['js/main.js','6d0fa19e03455375321b1ee45d06d2f7e9962a4b'],
  ['js/field-expansion-loader.js','acf815375da74f88bccf10492878311a8d0d7c14'],
  ['js/tiered-course.js','758182b2915a9101c456e4c693a5c89d64f71e99'],
  ['js/field-expansion-courses.js','39a2e787c721e99cfa5071b2acf343455d1a7fef']
]);
const approvedAssets=new Set([...explicitDynamicAssets,...reviewedSharedAssets.keys()]);
const reviewedFieldSlugs=[
  'field-skill-team-lift-carry-set-down','field-skill-cart-dolly-hand-truck-movement',
  'field-skill-cable-deployment-gathering','field-skill-case-boneyard-organization',
  'field-skill-work-area-reset-handoff','field-skill-ground-level-soft-goods',
  'field-skill-pipe-and-drape-support','field-skill-riser-deck-component-support',
  'field-skill-basic-stagehand-tool-handling','field-skill-jobsite-tape-label-marking',
  'field-skill-scenery-flat-wagon-movement','field-skill-dock-ramp-trailer-handoff-awareness'
];
const reviewedFieldRoutes=new Set(routeFiles);
function verifiedSharedBytes(rel,bytes){
  const pin=reviewedSharedAssets.get(rel);
  const actual=createHash('sha1').update('blob '+bytes.length+'\0').update(bytes).digest('hex');
  if(actual!==pin)throw Error('Reviewed shared asset changed: '+rel);
  if(rel==='js/field-expansion-courses.js'){
    // All records in this exact catalog must be approved materialized free routes.
    // Do not copy a partially eligible catalog or infer access from its filename.
    const slugs=[...bytes.toString('utf8').matchAll(/\bslug\s*:\s*['"]([^'"]+)['"]/g)].map(m=>m[1]);
    if(JSON.stringify(slugs)!==JSON.stringify(reviewedFieldSlugs)||slugs.some(slug=>!reviewedFieldRoutes.has('courses/'+slug+'.html')))
      throw Error('Shared field catalog contains nonrelease or unverified records');
  }
  if(rel==='js/main.js'){
    // Only the release artifact receives this exact reviewed navigation change.
    const source=bytes.toString('utf8');
    if(source.split('curriculum-map.html').length!==3||source.split('Full Curriculum').length!==2)
      throw Error('Shared navigation transform drift');
    return Buffer.from(source.replaceAll('curriculum-map.html','learn.html').replace('Full Curriculum','Learning pathways'),'utf8');
  }
  return bytes;
}

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

function normalizeRel(baseFile,ref){ return resolveReleaseReference(baseFile,ref); }

function prohibited(rel){
  return prohibitedExact.has(rel)||prohibitedPrefixes.some(prefix=>rel===prefix.slice(0,-1)||rel.startsWith(prefix));
}

async function exists(rel){
  canonicalReleasePath(rel);
  try{
    let current=root;
    for(const segment of rel.split('/')){
      current=path.join(current,segment);
      if((await lstat(current)).isSymbolicLink())throw Error('Symbolic link in release source');
    }
    const resolved=await realpath(current), base=await realpath(root);
    const info=await lstat(current);
    return resolved.startsWith(base+path.sep)&&info.isFile()&&info.nlink===1;
  }catch{return false;}
}

async function stripExternalFontLoads(){
  for(const rel of [...copied].filter(file=>file.endsWith('.html'))){
    const target=path.join(outDir,rel);
    let html=await readFile(target,'utf8');
    const before=html;
    html=html.replace(/\s*<link\b[^>]*href=["']https:\/\/fonts\.googleapis\.com[^"']*["'][^>]*>/gi,'');
    html=html.replace(/\s*<link\b[^>]*href=["']https:\/\/fonts\.gstatic\.com[^"']*["'][^>]*>/gi,'');
    if(html!==before)await writeFile(target,html,'utf8');
  }
}

async function copy(rel){
  canonicalReleasePath(rel);
  if(copied.has(rel))return;
  if(!htmlAllowlist.has(rel)&&!allowedReleaseAsset(rel,approvedAssets)){errors.push('Unapproved release asset: '+rel);return;}
  if(prohibited(rel)){errors.push('Prohibited release path requested: '+rel);return;}
  if(!await exists(rel)){errors.push('Release dependency does not exist: '+rel);return;}
  const target=path.join(outDir,rel);
  await mkdir(path.dirname(target),{recursive:true});
  if(reviewedSharedAssets.has(rel)){
    const bytes=await readFile(path.join(root,rel));
    await writeFile(target,verifiedSharedBytes(rel,bytes));
  }else await copyFile(path.join(root,rel),target);
  copied.add(rel);
}

function refsFromHtml(source){
  // Conservative static discovery; still not a browser parser or dynamic-JS proof.
  if(/<base\b/i.test(source)||/<meta\b[^>]*\bhttp-equiv\s*=\s*(?:"refresh"|'refresh'|refresh(?:\s|\/?>))/i.test(source))
    throw Error('Unreviewed base or refresh changes release routing');
  const refs=[];
  const attrs=/(?:^|\s)(src|href|srcset|poster|action|formaction)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>]+))/gi;
  for(const m of source.matchAll(attrs)){
    const value=m[2]??m[3]??m[4];
    if(m[1].toLowerCase()==='srcset'){
      if(/data:|&[#A-Za-z]/i.test(value))throw Error('Unreviewed encoded srcset');
      for(const candidate of value.split(',')){
        const parts=candidate.trim().split(/\s+/);
        if(!parts[0]||parts.length>2||(parts.length===2&&!/^(?:[1-9]\d*w|(?:\d+(?:\.\d+)?|\.\d+)x)$/.test(parts[1])))
          throw Error('Unreviewed srcset candidate');
        refs.push(parts[0]);
      }
    }else refs.push(value);
  }
  return refs;
}
function refsFromCss(source){
  return [...source.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)].map(m=>m[1]);
}

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
  if(!allowedReleaseAsset(rel,approvedAssets)){errors.push('Unapproved dependency in asset queue: '+rel);continue;}
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

const nonFreeRoutes=fullProjection.courses
  .filter(course=>!deliveryAllowed.has(course?.access?.delivery_state))
  .map(course=>String(course?.identity?.route_id||'').split(/[?#]/)[0])
  .filter(Boolean);

for(const rel of new Set(nonFreeRoutes)){
  if(rel==='courses/ecosystem-course.html')continue;
  if(copied.has(rel))errors.push('Non-free course route leaked into release artifact: '+rel);
}

for(const forbidden of prohibitedExact){
  if(copied.has(forbidden))errors.push('Forbidden file exists in release artifact: '+forbidden);
}

await stripExternalFontLoads();

const manifest={
  release_scope:'free_tier_only',
  public_pages:publicPages,
  foundation_pages:foundationPages,
  learner_route_count:learnerRoutes.length,
  learner_route_files:[...new Set(routeFiles)].sort(),
  copied_files:[...copied].sort(),
  excluded_nonfree_routes:[...new Set(nonFreeRoutes)].sort(),
  generated_projection:'data/generated/free-web-client-projection.json',
  generated_course_runtime:'data/generated/free-course-runtime.js'
};
if(errors.length){
  await rm(outDir,{recursive:true,force:true});
  await rm(manifestPath,{force:true});
  console.error(`Free release artifact build failed with ${errors.length} error(s):`);
  for(const error of errors)console.error('- '+error);
  process.exitCode=1;
}else{
  await writeFile(manifestPath,JSON.stringify(manifest,null,2)+'\n','utf8');
  console.log('Free release artifact built from explicit allowlists.');
  console.log(`- ${manifest.public_pages.length} public shell/legal pages`);
  console.log(`- ${manifest.foundation_pages.length} authenticated foundation course pages`);
  console.log(`- ${manifest.learner_route_count} allowed learner routes`);
  console.log(`- ${manifest.copied_files.length} total files copied`);
  console.log('- paid/advanced course bodies and mixed runtime catalogs excluded');
  console.log('- external Google Fonts/preconnect tags stripped from the release artifact; system font fallbacks remain');
}

}catch(error){
  await rm(outDir,{recursive:true,force:true});
  await rm(manifestPath,{force:true});
  throw error;
}
