import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const terms = await readFile(path.join(rootDir, 'terms-and-conditions.html'), 'utf8');
const limitation = await readFile(path.join(rootDir, 'limitation-of-liability.html'), 'utf8');
const consent = await readFile(path.join(rootDir, 'js', 'course-consent.js'), 'utf8');
const errors = [];

function requireText(haystack, needle, label) {
  if (!haystack.includes(needle)) errors.push(`${label}: missing ${needle}`);
}

requireText(terms, 'educational brand operated by Deadhang Labor LLC', 'operator identity');
requireText(limitation, 'educational brand operated by Deadhang Labor LLC', 'release-page operator identity');
requireText(terms, 'at least 18 years old', 'adult course-access restriction');
requireText(limitation, '<h1>Assumption of Risk, Release, and Limitation of Liability</h1>', 'release-page title');
requireText(terms, 'Copyright complaints.', 'copyright-notice procedure');
requireText(terms, 'does not state that Deadhang Labor LLC has registered a designated agent', 'DMCA-status accuracy');
requireText(terms, 'circumstances beyond our reasonable control', 'force-majeure language');
requireText(terms, 'the greater of (a) US $100 or (b)', 'Terms liability cap');
requireText(limitation, 'the greater of (a) US $100 or (b)', 'Limitation liability cap');
requireText(terms, 'gross negligence, recklessness, or intentional misconduct', 'Terms statutory carve-outs');
requireText(limitation, 'gross negligence, recklessness, or intentional misconduct', 'Limitation statutory carve-outs');
requireText(terms, 'third-party claims', 'narrowed indemnification scope');
requireText(terms, 'reasonable defense costs and attorneys&rsquo; fees', 'indemnification costs');
requireText(terms, 'require a fresh affirmative acceptance', 'Terms change acceptance');
requireText(limitation, 'require a fresh affirmative acceptance', 'Limitation change acceptance');
requireText(consent, "var CONSENT_VERSION = '2026-08-30.3'", 'consent version');
requireText(consent, 'ageMajorityConfirmed: true', 'adult eligibility record');

if (/mandatory binding arbitration|class action waiver/i.test(terms + limitation)) {
  errors.push('unreviewed mandatory arbitration or class-action waiver language is present');
}

if (errors.length) {
  console.error(`Legal reconciliation validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('Legal reconciliation validation passed.');
  console.log('- operator identity, copyright reporting, and force-majeure language present');
  console.log('- $100-or-fees liability cap aligns across both legal documents');
  console.log('- non-waivable-liability carve-outs preserved');
  console.log('- indemnification narrowed to specified third-party claims');
  console.log('- material revisions require renewed course acknowledgment');
  console.log('- mandatory arbitration and class waiver remain deferred for counsel');
}
