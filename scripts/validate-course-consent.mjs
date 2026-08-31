import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const coursesDir = path.join(rootDir, 'courses');
const errors = [];

function check(condition, message) {
  if (!condition) errors.push(message);
}

const consentRuntime = await readFile(path.join(rootDir, 'js', 'course-consent.js'), 'utf8');
const consentStyles = await readFile(path.join(rootDir, 'css', 'course-consent.css'), 'utf8');
const builder = await readFile(path.join(rootDir, 'scripts', 'build-tiered-courses.mjs'), 'utf8');
const privacy = await readFile(path.join(rootDir, 'privacy-policy.html'), 'utf8');
const cookies = await readFile(path.join(rootDir, 'cookies-notice.html'), 'utf8');
const terms = await readFile(path.join(rootDir, 'terms-and-conditions.html'), 'utf8');
const limitation = await readFile(path.join(rootDir, 'limitation-of-liability.html'), 'utf8');

const version = consentRuntime.match(/CONSENT_VERSION = '([^']+)'/)?.[1];
check(version === '2026-08-30.3', `unexpected consent version: ${version || 'missing'}`);
check(consentRuntime.includes('cbCourseConsent.v1'), 'runtime is missing its versioned local-storage key');
check(consentRuntime.includes('type="checkbox"'), 'runtime is missing affirmative checkboxes');
check(!consentRuntime.includes('type="checkbox" checked'), 'consent checkboxes must not be preselected');
check(consentRuntime.includes('Agree and enter course'), 'runtime is missing explicit assent button text');
check(consentRuntime.includes('id="cb-consent-age"'), 'runtime is missing the adult-eligibility confirmation');
check(consentRuntime.includes('ageMajorityConfirmed: true'), 'runtime is missing the stored adult-eligibility confirmation');
check(consentRuntime.includes('Terms and Conditions'), 'runtime is missing the Terms link');
check(consentRuntime.includes('Assumption of Risk, Release, and Limitation of Liability'), 'runtime is missing the release-and-limitation link');
check(consentRuntime.includes('aria-modal="true"'), 'runtime is missing modal semantics');
check(consentRuntime.includes('acceptedAt: new Date().toISOString()'), 'runtime is missing the local acceptance timestamp');
check(consentRuntime.includes("scope: 'course-access'"), 'runtime is missing the course-access scope marker');
check(consentStyles.includes('.cb-consent-backdrop'), 'consent stylesheet is missing the backdrop');
check(consentStyles.includes(':focus-visible'), 'consent stylesheet is missing keyboard focus styling');
check(builder.includes('../css/course-consent.css'), 'course builder is missing consent CSS');
check(builder.includes('../js/course-consent.js'), 'course builder is missing consent runtime');

const courseFiles = (await readdir(coursesDir))
  .filter((name) => name.endsWith('.html'))
  .sort();

check(courseFiles.length > 0, 'no top-level course routes found');
for (const filename of courseFiles) {
  const html = await readFile(path.join(coursesDir, filename), 'utf8');
  check(html.includes('../css/course-consent.css'), `${filename}: missing consent CSS`);
  check(html.includes('../js/course-consent.js'), `${filename}: missing consent runtime`);
}

for (const [name, html] of [['Privacy Policy', privacy], ['Cookies Notice', cookies]]) {
  check(html.includes('Last updated: August 30, 2026'), `${name}: update date is stale`);
  check(html.includes('course acknowledgment'), `${name}: course-acknowledgment disclosure is missing`);
  check(html.includes('server-side acceptance'), `${name}: local-only record limitation is missing`);
}

check(terms.includes('Last updated: August 30, 2026'), 'Terms version does not match the consent gate');
check(limitation.includes('Last updated: August 30, 2026'), 'Limitation version does not match the consent gate');
check(terms.includes('at least 18 years old'), 'Terms are missing the adult course-access restriction');
check(limitation.includes('<h1>Assumption of Risk, Release, and Limitation of Liability</h1>'), 'release page title is stale');

if (errors.length) {
  console.error(`Course-consent validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('Course-consent validation passed.');
  console.log(`- acknowledgment version ${version}`);
  console.log(`- ${courseFiles.length} discovered top-level course routes gated`);
  console.log('- route count is discovered dynamically; no stale hard-coded inventory count');
  console.log('- adult eligibility, unchecked legal acknowledgments, and explicit assent verified');
  console.log('- local-storage disclosures and version alignment verified');
}
