import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..');
const packageRoot=path.join(root,'_wordpress','the-crew-blueprint');
const zipPath=path.join(root,'_wordpress','the-crew-blueprint-production.zip');
const errors=[];

async function exists(file){
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
function rel(file){return path.relative(packageRoot,file).split(path.sep).join('/');}
function check(condition,message){if(!condition)errors.push(message);}

check(await exists(path.join(packageRoot,'the-crew-blueprint.php')),'Production plugin entrypoint is missing.');
check(await exists(path.join(packageRoot,'README-FIRST.md')),'Production setup README is missing.');
check(await exists(path.join(packageRoot,'config','routes.php')),'Generated route manifest is missing.');
check(await exists(path.join(packageRoot,'config','production-contract.json')),'Production contract copy is missing.');
check(await exists(zipPath),'Production ZIP was not generated.');

const files=await walk(packageRoot);
const rels=files.map(rel);
check(!rels.some(file=>file.endsWith('.html')),'Static HTML exists inside the WordPress package; protected/public documents must be PHP-guarded payloads.');

for(const file of rels.filter(file=>file.startsWith('content/')&&file.endsWith('.php'))){
  const source=await readFile(path.join(packageRoot,file),'utf8');
  check(source.includes("defined('ABSPATH') || exit"),file+': guarded direct-access check is missing.');
}

const forbidden=[
  'assets/data/generated/free-course-runtime.js',
  'assets/data/generated/web-client-projection.json',
  'assets/js/field-expansion-courses.js',
  'assets/js/ecosystem-courses.js',
  'assets/js/frontier-expansion.js',
  'assets/js/ecosystem-depth-authoring.js',
  'assets/js/ecosystem-depth-runtime-normalize.js'
];
for(const file of forbidden)check(!rels.includes(file),'Forbidden content-bearing/internal asset leaked into package: '+file);

for(const file of rels.filter(file=>/\.(?:php|js|json|md)$/i.test(file))){
  const source=await readFile(path.join(packageRoot,file),'utf8');
  check(!/sk_live_[A-Za-z0-9_$-]+/.test(source),file+': production Clerk secret leaked into package.');
  check(!/pk_test_[A-Za-z0-9_$-]+/.test(source),file+': development Clerk publishable key leaked into production package.');
  check(!source.includes('pleased-camel-3432.clerk.accounts.dev'),file+': development Clerk domain leaked into production package.');
  check(!source.includes('atlas.thecrewblueprint.com'),file+': Production Atlas learner access leaked into production package.');
}

const plugin=await readFile(path.join(packageRoot,'the-crew-blueprint.php'),'utf8');
for(const required of [
  'CBP_CLERK_PUBLISHABLE_KEY',
  'CBP_CLERK_SECRET_KEY',
  'CBP_CLERK_JWT_KEY',
  'CBP_CLERK_ISSUER',
  'CBP_CLERK_AUTHORIZED_PARTY',
  'CBP_CLERK_FRONTEND_API',
  'openssl_verify',
  'adultEligibility',
  'private_metadata',
  'Cache-Control: private, no-store',
  'X-Robots-Tag: noindex, nofollow'
]){
  check(plugin.includes(required),'Production plugin is missing required control: '+required);
}
check(plugin.includes("add_rewrite_rule('^learn/([^/]+)/?$'"),'Protected /learn/{slug}/ router is missing.');
check(plugin.includes("pre_option_users_can_register"),'Native WordPress public registration disablement is missing.');
check(plugin.includes("comments_open"),'WordPress comments disablement is missing.');

const manifest=JSON.parse(await readFile(path.join(packageRoot,'PACKAGE-MANIFEST.json'),'utf8'));
check(manifest.raw_dob_retained===false,'Package manifest does not affirm raw DOB minimization.');
check(manifest.paid_content_included===false,'Package manifest indicates paid content is present.');
check(manifest.production_atlas_included===false,'Package manifest indicates Production Atlas is present.');
check(Number(manifest.protected_route_count)>=62,'Protected free learner route count is unexpectedly low.');
check(manifest.public_reference_delivery==='metadata_only_via_sources_page','Public reference identities are being treated as protected course bodies.');

if(errors.length){
  console.error(`WordPress package validation failed with ${errors.length} error(s):`);
  for(const error of errors)console.error('- '+error);
  process.exitCode=1;
}else{
  console.log('WordPress production package validation passed.');
  console.log(`- ${manifest.public_route_count} public WordPress routes`);
  console.log(`- ${manifest.protected_route_count} protected free learner routes`);
  console.log('- public-reference identities remain metadata-only on the Sources surface');
  console.log('- protected/public documents stored as guarded PHP payloads, not static HTML');
  console.log('- no dev Clerk keys/domain, paid bodies, mixed catalogs, or Production Atlas access in package');
  console.log('- server JWT verification + private adult eligibility controls present');
}
