import { readFile, writeFile, mkdir, rm, copyFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..');
const siteDir=path.join(root,'_site');
const outRoot=path.join(root,'_wordpress');
const pluginName='the-crew-blueprint';
const pluginDir=path.join(outRoot,pluginName);
const contentDir=path.join(pluginDir,'content');
const publicDir=path.join(contentDir,'public');
const protectedDir=path.join(contentDir,'protected');
const assetsDir=path.join(pluginDir,'assets');
const configDir=path.join(pluginDir,'config');
const zipPath=path.join(outRoot,'the-crew-blueprint-production.zip');

const contract=JSON.parse(await readFile(path.join(root,'config','wordpress-production-contract.json'),'utf8'));
const projection=JSON.parse(await readFile(path.join(root,'data','generated','free-web-client-projection.json'),'utf8'));

await rm(outRoot,{recursive:true,force:true});
await mkdir(publicDir,{recursive:true});
await mkdir(protectedDir,{recursive:true});
await mkdir(assetsDir,{recursive:true});
await mkdir(configDir,{recursive:true});

async function fileExists(file){
  try{return (await stat(file)).isFile();}catch{return false;}
}
async function walk(dir){
  const out=[];
  for(const entry of await readdir(dir,{withFileTypes:true})){
    const full=path.join(dir,entry.name);
    if(entry.isDirectory())out.push(...await walk(full));
    else out.push(full);
  }
  return out;
}
function posixRel(file,base=root){
  return path.relative(base,file).split(path.sep).join('/');
}
function safeSlug(value){
  return String(value||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'item';
}
function phpReturnString(value){
  const b64=Buffer.from(value,'utf8').toString('base64');
  return "<?php\ndefined('ABSPATH') || exit;\nreturn base64_decode('"+b64+"');\n";
}
function phpReturnArray(value){
  const b64=Buffer.from(JSON.stringify(value),'utf8').toString('base64');
  return "<?php\ndefined('ABSPATH') || exit;\nreturn json_decode(base64_decode('"+b64+"'), true);\n";
}
function titleFromHtml(html){
  const match=html.match(/<title>([\s\S]*?)<\/title>/i);
  return match?match[1].replace(/\s*\|\s*The Crew Blueprint.*$/i,'').replace(/\s*—\s*The Crew Blueprint.*$/i,'').trim():'The Crew Blueprint';
}
function stripMetaRobots(html){
  return html.replace(/\s*<meta\s+name=["']robots["'][^>]*>/gi,'');
}
function ensureRuntimePlaceholder(html){
  if(html.includes('__CB_RUNTIME_CONFIG__'))return html;
  return html.replace(/<\/head>/i,'__CB_RUNTIME_CONFIG__\n</head>');
}
function removeElementsByAttr(html,attr){
  let output=html;
  while(true){
    const startRe=new RegExp('<([a-z][a-z0-9:-]*)\\b[^>]*\\b'+attr.replace(/[.*+?^$\{\}()|[\]\\]/g,'\\$&')+'\\b[^>]*>','i');
    const match=startRe.exec(output);
    if(!match)break;
    const tag=match[1];
    const start=match.index;
    const tokenRe=new RegExp('<\\/?'+tag+'\\b[^>]*>','gi');
    tokenRe.lastIndex=start;
    let depth=0,end=-1,token;
    while((token=tokenRe.exec(output))){
      if(/^<\//.test(token[0]))depth-=1;
      else if(!/\/>$/.test(token[0]))depth+=1;
      if(depth===0){end=tokenRe.lastIndex;break;}
    }
    if(end<0)throw new Error('Could not close '+attr+' element.');
    output=output.slice(0,start)+output.slice(end);
  }
  return output;
}
function makeSample(html){
  return removeElementsByAttr(html,'data-member-full');
}
function makeMember(html){
  let out=removeElementsByAttr(html,'data-member-sample');
  out=out.replace(/<([a-z][a-z0-9:-]*)([^>]*)\sdata-member-full\b([^>]*)>/i,(_m,tag,a,b)=>{
    return '<'+tag+(a+b).replace(/\shidden\b/i,'')+'>';
  });
  return out;
}
function cleanupProductionCopy(html){
  return html
    .replace(/<div\s+class=["']owner-review-badge["'][\s\S]*?<\/div>/gi,'')
    .replace(/\sdata-publication-state=["'][^"']*["']/gi,' data-publication-state="production-free"')
    .replace(/Owner Review\s*[·\-:]\s*/gi,'');
}
function normalizeRelative(sourceFile,value){
  if(!value||value.startsWith('#')||/^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(value))return null;
  const [withoutHash,hash='']=value.split('#',2);
  const qIndex=withoutHash.indexOf('?');
  const pathname=qIndex>=0?withoutHash.slice(0,qIndex):withoutHash;
  const query=qIndex>=0?withoutHash.slice(qIndex):'';
  if(!pathname)return {resolved:'',query,hash:hash?'#'+hash:''};
  const resolved=path.posix.normalize(path.posix.join(path.posix.dirname(sourceFile),decodeURIComponent(pathname))).replace(/^\.\//,'');
  return {resolved,query,hash:hash?'#'+hash:''};
}

const publicSourceToPath=new Map();
for(const route of contract.public_routes||[]){
  if(route.source!=='sign-up.html')publicSourceToPath.set(route.source,route.slug);
}

const freeCourses=(projection.courses||[]).filter(c=>['free_public','public_reference'].includes(c?.access?.delivery_state)&&c?.identity?.route_state==='materialized'&&c?.identity?.route_id);
const protectedRoutes=[];
const protectedBySource=new Map();

for(const course of freeCourses){
  const routeId=String(course.identity.route_id);
  const [routePath,query='']=routeId.split('?',2);
  let slug='';
  if(routePath==='courses/ecosystem-course.html'){
    slug=new URLSearchParams(query).get('course')||safeSlug(course.identity.canonical_course_id);
  }else{
    slug=path.posix.basename(routePath,'.html');
  }
  slug=safeSlug(slug);
  const entry={
    slug,
    source:routePath,
    route_id:routeId,
    title:course.identity.title||slug,
    canonical_course_id:course.identity.canonical_course_id||null,
    file:'course-'+slug+'.php'
  };
  protectedRoutes.push(entry);
  if(routePath!=='courses/ecosystem-course.html')protectedBySource.set(routePath,'/learn/'+slug+'/');
}

const foundation=[
  ['crew-ready','courses-v4/crew-ready.html','Crew Ready'],
  ['systems-thinking','courses-v4/systems-thinking.html','Systems Thinking for Live Production'],
  ['shop-logistics','courses-v4/shop-logistics.html','Shop, Warehouse & Logistics'],
  ['department-explorer','courses-v4/department-explorer.html','Department Explorer']
];
for(const [slug,source,title] of foundation){
  if(!protectedRoutes.some(x=>x.slug===slug)){
    protectedRoutes.push({slug,source,route_id:source,title,canonical_course_id:null,file:'course-'+slug+'.php',foundation:true});
    protectedBySource.set(source,'/learn/'+slug+'/');
  }
}

const protectedSlugSet=new Set();
for(const route of protectedRoutes){
  if(protectedSlugSet.has(route.slug))throw new Error('Duplicate WordPress protected slug: '+route.slug);
  protectedSlugSet.add(route.slug);
}

function rewriteRef(sourceFile,value){
  const local=normalizeRelative(sourceFile,value);
  if(!local)return value;
  const {resolved,query,hash}=local;

  if(publicSourceToPath.has(resolved))return publicSourceToPath.get(resolved)+(hash||'');

  if(resolved==='courses/ecosystem-course.html'){
    const slug=safeSlug(new URLSearchParams(query.replace(/^\?/,'')).get('course')||'');
    if(slug&&protectedSlugSet.has(slug))return '/learn/'+slug+'/'+hash;
  }

  if(protectedBySource.has(resolved))return protectedBySource.get(resolved)+(hash||'');

  if(resolved.endsWith('.html')){
    if(resolved==='courses.html')return '/courses/'+hash;
    if(resolved==='curriculum-map.html')return '/courses/'+hash;
    if(resolved==='resources.html')return '/sources/'+hash;
    throw new Error(sourceFile+' links to an unmapped HTML route: '+value+' -> '+resolved);
  }

  return '__CB_ASSET_BASE__'+resolved+(query||'')+(hash||'');
}

function rewriteLocalRefs(html,sourceFile){
  return html.replace(/\b(href|src)=["']([^"']+)["']/gi,(match,attr,value)=>{
    const rewritten=rewriteRef(sourceFile,value);
    return attr+'="'+rewritten.replace(/"/g,'&quot;')+'"';
  });
}
function setProtectedCanonical(html,slug){
  const canonical='https://'+contract.production_host+'/learn/'+slug+'/';
  if(/<link\s+rel=["']canonical["']/i.test(html)){
    return html.replace(/<link\s+rel=["']canonical["']\s+href=["'][^"']+["'][^>]*>/i,'<link rel="canonical" href="'+canonical+'">');
  }
  return html.replace(/<\/head>/i,'<link rel="canonical" href="'+canonical+'">\n</head>');
}

const fieldContext={window:{},console};
vm.createContext(fieldContext);
const fieldSource=await readFile(path.join(root,'js','field-expansion-courses.js'),'utf8');
vm.runInContext(fieldSource,fieldContext,{filename:'field-expansion-courses.js'});
const fieldMap=fieldContext.window.CBPFieldExpansionCourses||{};

const ecosystemContext={window:{},console};
vm.createContext(ecosystemContext);
const ecosystemSource=await readFile(path.join(root,'data','generated','free-course-runtime.js'),'utf8');
vm.runInContext(ecosystemSource,ecosystemContext,{filename:'free-course-runtime.js'});
const ecosystem=ecosystemContext.window.CBPEcosystem||{courses:[],existing:[],domains:{}};
const ecosystemBySlug=new Map((ecosystem.courses||[]).map(course=>[course.slug,course]));

function inlineProtectedData(html,route){
  let out=html;
  if(out.includes('field-expansion-courses.js')){
    const match=out.match(/data-course-slug=["']([^"']+)["']/i);
    const slug=match?match[1]:route.slug;
    const data=fieldMap[slug];
    if(!data)throw new Error('Missing Field Skill runtime data for '+slug);
    const safeJson=JSON.stringify(data).replace(/</g,'\\u003c');
    out=out.replace(/<script\s+type=["']application\/json["']\s+id=["']courseData["']>\s*<\/script>/i,'<script type="application/json" id="courseData">'+safeJson+'</script>');
    out=out.replace(/\s*<script[^>]+src=["'][^"']*field-expansion-courses\.js[^"']*["'][^>]*><\/script>/gi,'');
    out=out.replace(/\s*<script[^>]+src=["'][^"']*field-expansion-loader\.js[^"']*["'][^>]*><\/script>/gi,'');
  }

  if(route.source==='courses/ecosystem-course.html'){
    const course=ecosystemBySlug.get(route.slug);
    if(!course)throw new Error('Missing ecosystem runtime course for '+route.slug);
    const payload={courses:[course],existing:[],domains:ecosystem.domains||{},evidence:{}};
    const script='<script>window.CBPEcosystem='+JSON.stringify(payload).replace(/</g,'\\u003c')+';</script>';
    out=out.replace(/\s*<script[^>]+src=["'][^"']*free-course-runtime\.js[^"']*["'][^>]*><\/script>/i,script);
  }
  return out;
}

function transformPublic(html,sourceFile,indexRule){
  let out=cleanupProductionCopy(html);
  if(indexRule==='index,follow')out=stripMetaRobots(out);
  out=rewriteLocalRefs(out,sourceFile);
  out=ensureRuntimePlaceholder(out);
  return out;
}
function transformProtected(html,route){
  let out=cleanupProductionCopy(html);
  out=inlineProtectedData(out,route);
  out=makeMember(out);
  out=setProtectedCanonical(out,route.slug);
  out=out.replace(/<meta\s+name=["']robots["'][^>]*>/gi,'<meta name="robots" content="noindex,nofollow">');
  if(!/name=["']robots["']/i.test(out))out=out.replace(/<\/head>/i,'<meta name="robots" content="noindex,nofollow">\n</head>');
  out=rewriteLocalRefs(out,route.source);
  out=ensureRuntimePlaceholder(out);
  return out;
}

const publicManifest=[];
for(const route of contract.public_routes||[]){
  if(route.source==='sign-up.html')continue;
  const sourcePath=path.join(siteDir,route.source);
  if(!await fileExists(sourcePath))throw new Error('Missing public release source: '+route.source);
  const raw=await readFile(sourcePath,'utf8');
  const base=safeSlug(route.slug==='/'?'home':route.slug);
  const sampleFile=base+'.php';
  const sample=transformPublic(route.member_view?makeSample(raw):raw,route.source,route.index);
  await writeFile(path.join(publicDir,sampleFile),phpReturnString(sample),'utf8');

  let memberFile=null;
  if(route.member_view){
    memberFile=base+'-member.php';
    const member=transformPublic(makeMember(raw),route.source,route.index);
    await writeFile(path.join(publicDir,memberFile),phpReturnString(member),'utf8');
  }
  publicManifest.push({
    path:route.slug,
    source:route.source,
    file:sampleFile,
    member_file:memberFile,
    index:route.index,
    title:titleFromHtml(raw)
  });
}

for(const route of protectedRoutes){
  const sourcePath=path.join(siteDir,route.source);
  if(!await fileExists(sourcePath))throw new Error('Missing protected release source: '+route.source);
  const raw=await readFile(sourcePath,'utf8');
  const transformed=transformProtected(raw,route);
  await writeFile(path.join(protectedDir,route.file),phpReturnString(transformed),'utf8');
}

const excludedAssets=new Set([
  'data/generated/free-course-runtime.js',
  'js/field-expansion-courses.js',
  'js/field-expansion-loader.js'
]);
for(const file of await walk(siteDir)){
  const rel=posixRel(file,siteDir);
  if(rel.endsWith('.html'))continue;
  if(excludedAssets.has(rel))continue;
  const target=path.join(assetsDir,rel);
  await mkdir(path.dirname(target),{recursive:true});
  await copyFile(file,target);
}

// Production assets must not retain development Clerk credentials or domains.
for(const rel of ['js/blueprint-v4.js','js/course-consent.js']){
  const target=path.join(assetsDir,rel);
  if(!await fileExists(target))continue;
  let js=await readFile(target,'utf8');
  js=js
    .replace(/pk_test_[A-Za-z0-9_$-]+/g,'')
    .replace(/https:\/\/pleased-camel-3432\.clerk\.accounts\.dev\/npm\/@clerk\/ui@1\/dist\/ui\.browser\.js/g,'')
    .replace(/https:\/\/pleased-camel-3432\.clerk\.accounts\.dev\/npm\/@clerk\/clerk-js@6\/dist\/clerk\.browser\.js/g,'');
  await writeFile(target,js,'utf8');
}

await copyFile(path.join(root,'wordpress','plugin-src','the-crew-blueprint.php'),path.join(pluginDir,'the-crew-blueprint.php'));
await copyFile(path.join(root,'wordpress','plugin-src','README-FIRST.md'),path.join(pluginDir,'README-FIRST.md'));

const routes={
  version:contract.version,
  public:publicManifest,
  protected:protectedRoutes.map(({slug,file,title,canonical_course_id})=>({slug,file,title,canonical_course_id}))
};
await writeFile(path.join(configDir,'routes.php'),phpReturnArray(routes),'utf8');
await writeFile(path.join(configDir,'production-contract.json'),JSON.stringify(contract,null,2)+'\n','utf8');

const packageManifest={
  package:'the-crew-blueprint-production',
  plugin_version:'0.1.0-rc',
  contract_version:contract.version,
  public_route_count:publicManifest.length,
  protected_route_count:protectedRoutes.length,
  raw_dob_retained:false,
  paid_content_included:false,
  production_atlas_included:false,
  content_storage:'PHP guarded return payloads; protected course bodies are not shipped as static HTML',
  generated_at:new Date().toISOString()
};
await writeFile(path.join(pluginDir,'PACKAGE-MANIFEST.json'),JSON.stringify(packageManifest,null,2)+'\n','utf8');

const zip=spawnSync('zip',['-qr',path.basename(zipPath),pluginName],{cwd:outRoot,encoding:'utf8'});
if(zip.status!==0)throw new Error('zip failed: '+(zip.stderr||zip.stdout||'unknown error'));

const zipBytes=await readFile(zipPath);
const sha256=crypto.createHash('sha256').update(zipBytes).digest('hex');
packageManifest.zip_sha256=sha256;
packageManifest.zip_bytes=zipBytes.length;
await writeFile(path.join(outRoot,'the-crew-blueprint-production.manifest.json'),JSON.stringify(packageManifest,null,2)+'\n','utf8');

console.log('WordPress production package built.');
console.log('- public routes: '+publicManifest.length);
console.log('- protected free learner routes: '+protectedRoutes.length);
console.log('- raw DOB retained: no');
console.log('- paid/advanced bodies included: no');
console.log('- ZIP: '+posixRel(zipPath));
console.log('- SHA-256: '+sha256);
