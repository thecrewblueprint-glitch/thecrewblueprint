import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const errors = [];

function check(condition, message) {
  if (!condition) errors.push(message);
}

async function text(rel) {
  return readFile(path.join(rootDir, rel), 'utf8');
}

const publicPages = [
  'index.html',
  'start.html',
  'learn.html',
  'field.html',
  'contexts.html',
  'departments.html',
  'advanced.html',
  'about.html',
  'contact.html',
  'sources-v4.html',
  'privacy-policy.html',
  'cookies-notice.html',
  'terms-and-conditions.html',
  'limitation-of-liability.html',
  'accessibility-statement.html',
  'affiliate-disclosure.html',
  'courses-v4/crew-ready.html',
  'courses-v4/systems-thinking.html',
  'courses-v4/shop-logistics.html',
  'courses-v4/department-explorer.html',
];

const privacy = await text('privacy-policy.html');
const cookies = await text('cookies-notice.html');
const terms = await text('terms-and-conditions.html');
const liability = await text('limitation-of-liability.html');
const signup = await text('sign-up.html');
const blueprint = await text('js/blueprint-v4.js');
const consent = await text('js/course-consent.js');

check(privacy.includes('California online tracking disclosures'), 'Privacy Policy is missing the California tracking disclosure.');
check(privacy.includes('Do Not Track'), 'Privacy Policy is missing the Do Not Track disclosure.');
check(privacy.includes('Current learner progress is browser-based.'), 'Privacy Policy misstates or omits current browser-only progress behavior.');
check(!privacy.includes('production design is intended'), 'Privacy Policy still contains noncommittal future-state wording.');
check(cookies.includes('Signed-out public sample browsing is designed not to initialize Clerk'), 'Cookies Notice does not disclose deferred Clerk loading.');
check(!cookies.includes('production design is intended'), 'Cookies Notice still contains noncommittal future-state wording.');

check(signup.includes('type="date"'), 'Account creation is missing neutral date-of-birth entry.');
check(signup.includes("AGE_GATE_VERSION='2026-09-10.2'"), 'Account eligibility version is stale.');
check(signup.includes('cb_age_screen_ineligible'), 'Ineligible age-screen session marker is missing.');
check(signup.includes('adultEligibility:true'), 'Eligible account handoff is missing the adult eligibility result.');
check(!signup.includes('birthDate:'), 'Raw DOB is being copied into account metadata.');
check(!/<script[^>]+src=["'][^"']*clerk\.accounts\.dev/i.test(signup), 'Clerk is preloaded before age eligibility on sign-up.');

check(blueprint.includes('transferable:false'), 'Existing-account sign-in can still transfer opaquely into sign-up.');
check(blueprint.includes('hasSessionCookie()'), 'Public shell lacks the existing-session-only Clerk restore gate.');
check(blueprint.includes('if(!runtimeConfig.serverAuthenticated&&!hasSessionCookie())return;'), 'Signed-out browsing may initialize Clerk without an existing session or server-authenticated state.');
check(blueprint.includes('openExistingAccountSignIn'), 'Header sign-in is not routed through the dedicated existing-account flow.');
check(blueprint.includes('goToAccountCreation'), 'Create Account is not routed through the dedicated age-screened sign-up page.');

check(!consent.includes('id="cb-consent-age"'), 'Course consent redundantly re-asks adult eligibility.');
check(!consent.includes('ageMajorityConfirmed'), 'Course consent still stores a duplicate age affirmation.');
check(consent.includes("var CONSENT_VERSION = '2026-09-10.2'"), 'Course consent version is stale after legal changes.');
check(consent.includes('Terms and Conditions'), 'Course consent is missing Terms assent.');
check(consent.includes('Assumption of Risk, Release, and Limitation of Liability'), 'Course consent is missing risk/liability assent.');

check(!terms.includes('nonpayment when paid services eventually exist'), 'Terms include unapproved future paid mechanics.');
check(terms.includes('No pricing, checkout, subscription, or paid entitlement is active in this release.'), 'Terms are missing the future-paid noncommercial boundary.');
check(liability.includes('No waiver or liability cap is guaranteed to be enforceable'), 'Liability page overstates enforceability or lacks the enforceability notice.');

const reviewOnlyPatterns=[
  /owner review/i,
  /research rebuild/i,
  /public audit copy/i,
  /rebuild in progress/i,
  /successor client/i,
  /canonical graph/i,
  /canonical identities/i,
  /responsibility\/access crosswalk/i,
  /\bV4\b/,
  /Roadmapdev/i
];

const prohibitedNetworkPatterns = [
  /googletagmanager\.com/i,
  /google-analytics\.com/i,
  /connect\.facebook\.net/i,
  /facebook\.com\/tr/i,
  /hotjar\.com/i,
  /clarity\.ms/i,
  /js\.stripe\.com/i,
  /paypal\.com\/sdk/i,
];

for (const rel of publicPages) {
  const html = await text(rel);
  check(!html.includes('atlas.thecrewblueprint.com'), `${rel}: Production Atlas link leaked into the current learner release.`);
  for(const pattern of reviewOnlyPatterns){
    check(!pattern.test(html), `${rel}: review/staging-only copy leaked into production surface: ${pattern}`);
  }
  check(!/<script[^>]+src=["'][^"']*clerk\.accounts\.dev/i.test(html), `${rel}: Clerk is preloaded on public browsing.`);
  for (const pattern of prohibitedNetworkPatterns) {
    check(!pattern.test(html), `${rel}: unapproved analytics/advertising/commerce network found: ${pattern}`);
  }
}

if (errors.length) {
  console.error(`Public legal/behavior validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('Public legal/behavior validation passed.');
  console.log('- public signed-out browsing does not preload Clerk');
  console.log('- account creation uses a neutral 18+ age screen without persisting raw DOB to account metadata');
  console.log('- existing-account sign-in is separated from sign-up transfer');
  console.log('- course consent contains Terms/risk assent without duplicate age affirmation');
  console.log('- Privacy/Cookies match browser-only progress and current no-tracking behavior');
  console.log('- no unapproved analytics, advertising, or checkout networks found on release-candidate public pages');
  console.log('- no Production Atlas links, private-system names, or review/internal graph labels found on public release pages');
  console.log('- liability language states its enforceability ceiling');
}
