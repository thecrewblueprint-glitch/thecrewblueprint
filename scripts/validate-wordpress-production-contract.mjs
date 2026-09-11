import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..');
const contract=JSON.parse(await readFile(path.join(root,'config','wordpress-production-contract.json'),'utf8'));
const errors=[];
const check=(condition,message)=>{if(!condition)errors.push(message);};

check(contract.production_runtime==='wordpress','Production runtime must remain WordPress.');
check(contract.identity_provider==='clerk','Clerk must remain the configured identity provider.');
check(contract.audience_rule?.public_browsing_requires_account===false,'Public browsing must not require an account.');
check(contract.audience_rule?.account_creation_minimum_age===18,'Account creation minimum age must remain 18.');
check(contract.audience_rule?.birthday_required_only_for_new_account_creation===true,'Birthday must be required only for new account creation.');
check(contract.audience_rule?.existing_account_signin_requires_birthday===false,'Existing-account sign-in must not ask for birthday.');
check(contract.audience_rule?.retain_raw_date_of_birth===false,'Raw DOB retention must remain disabled.');
check(contract.audience_rule?.authoritative_adult_eligibility==='server_side','Adult eligibility must be server-authoritative.');

const publicRoutes=contract.public_routes||[];
const bySlug=new Map(publicRoutes.map(route=>[route.slug,route]));
for(const slug of ['/','/start-here/','/courses/','/field-skills/','/context-labs/','/about/','/contact/','/privacy/','/terms/']){
  check(bySlug.has(slug),`Missing required public route: ${slug}`);
}
for(const slug of ['/','/start-here/','/courses/','/field-skills/','/context-labs/','/about/','/contact/']){
  check(bySlug.get(slug)?.index==='index,follow',`${slug} must be indexable as a public sample/shell route.`);
}
check(bySlug.get('/create-account/')?.index==='noindex,nofollow','Create Account must remain noindex/nofollow.');

const learner=contract.learner_route_policy||{};
check(learner.direct_static_full_body_files_in_public_webroot===false,'Full learner bodies must not exist as directly retrievable static files in the public webroot.');
check(learner.authenticated_response_cache_control==='private, no-store','Authenticated learner responses must be private/no-store.');
check(learner.authenticated_response_indexing==='noindex,nofollow','Authenticated learner responses must be noindex/nofollow.');
check(learner.sitemap_include_full_learner_routes===false,'Full learner routes must not be placed in the public sitemap as separately indexable bodies.');

const clerk=contract.clerk_policy||{};
check(clerk.production_keys_required===true,'Production Clerk keys must be required.');
check(clerk.server_verify_session===true,'Clerk sessions must be verified server-side.');
check(clerk.sign_in_transfer_to_sign_up===false,'Sign In must not silently transfer into Sign Up.');
check(clerk.sign_up_must_pass_age_screen===true,'Sign Up must pass the age screen.');
check(clerk.unsafe_metadata_authoritative===false,'Clerk unsafeMetadata must not be authoritative.');

const wp=contract.wordpress_policy||{};
check(wp.native_public_registration===false,'WordPress native public registration must remain disabled.');
check(wp.comments===false,'WordPress comments must remain disabled unless the privacy model is revised.');
check(wp.wordpress_is_canonical_router===true,'WordPress must own canonical routing.');
check(wp.wordpress_generates_public_sitemap===true,'WordPress must generate the public sitemap.');
check(wp.strip_staging_noindex_from_indexable_public_routes===true,'WordPress packaging must strip staging noindex from indexable public routes.');

const paid=contract.paid_release_policy||{};
for(const key of ['pricing','checkout','subscription','paid_entitlement','production_atlas_access','advanced_lesson_bodies']){
  check(paid[key]===false,`Paid-release control must remain false: ${key}`);
}

const forbidden=new Set(contract.forbidden_public_artifact||[]);
for(const rel of [
  'research/','archive/','content/archive/','data/generated/web-client-projection.json',
  'js/ecosystem-courses.js','js/frontier-expansion.js','js/ecosystem-depth-authoring.js',
  'js/ecosystem-depth-runtime-normalize.js','curriculum-map.html','courses.html'
]){
  check(forbidden.has(rel),`Forbidden public artifact rule missing: ${rel}`);
}

if(errors.length){
  console.error(`WordPress production contract validation failed with ${errors.length} error(s):`);
  for(const error of errors)console.error('- '+error);
  process.exitCode=1;
}else{
  console.log('WordPress production contract validation passed.');
  console.log('- public sample routes remain indexable without requiring an account');
  console.log('- account creation is 18+ and birthday is signup-only');
  console.log('- Clerk and adult eligibility must be enforced server-side');
  console.log('- authenticated learner responses are private/no-store and noindex');
  console.log('- paid/Atlas/advanced delivery remains excluded from the production release');
}
