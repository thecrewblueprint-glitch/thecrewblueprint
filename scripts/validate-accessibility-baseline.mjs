import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const critical = [
  'index.html',
  'start.html',
  'learn.html',
  'field.html',
  'contexts.html',
  'departments.html',
  'advanced.html',
  'sources-v4.html',
  'about.html',
  'contact.html',
  'privacy-policy.html',
  'terms-and-conditions.html',
  'cookies-notice.html',
  'accessibility-statement.html',
  'limitation-of-liability.html',
  'affiliate-disclosure.html',
  'courses-v4/crew-ready.html',
  'courses-v4/systems-thinking.html',
  'courses-v4/shop-logistics.html',
  'courses-v4/department-explorer.html',
  'courses/ecosystem-course.html',
  'courses/field-skill-move-road-case-with-partner.html'
]

const errors = [];
const warnings = [];
const fail = (file, msg) => errors.push(`${file}: ${msg}`);

for (const file of critical) {
  const full = path.join(root, file);
  if (!fs.existsSync(full)) {
    fail(file, 'missing critical learner surface');
    continue;
  }
  const html = fs.readFileSync(full, 'utf8');
  if (!/<html\b[^>]*\blang=["'][^"']+["']/i.test(html)) fail(file, 'missing declared html language');
  if (!/<meta\b[^>]*name=["']viewport["'][^>]*>/i.test(html)) fail(file, 'missing responsive viewport metadata');
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  if (!title) fail(file, 'missing nonempty page title');
  if (!/<main\b/i.test(html)) fail(file, 'missing main-content landmark');

  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map(m => m[0]);
  for (const img of imgs) {
    if (!/\balt=["'][^"']*["']/i.test(img)) fail(file, `image missing alt attribute: ${img.slice(0, 100)}`);
  }

  const buttons = [...html.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/gi)];
  for (const b of buttons) {
    const tag = b[0];
    const text = b[1].replace(/<[^>]+>/g, '').trim();
    if (!text && !/\baria-label=["'][^"']+["']/i.test(tag)) fail(file, 'button has no text or aria-label');
  }

  const anchors = [...html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)];
  for (const a of anchors) {
    const tag = a[0];
    const text = a[1].replace(/<[^>]+>/g, '').replace(/&[a-z0-9#]+;/gi, '').trim();
    if (!text && !/\baria-label=["'][^"']+["']/i.test(tag)) fail(file, 'link has no discernible text or aria-label');
  }
}

// These are automated-baseline checks only. Keep explicit warnings so a green run
// cannot be mistaken for a complete WCAG/ADA audit.
warnings.push('Automated structural checks do not replace manual keyboard, zoom/reflow, screen-reader, contrast, media-alternative, and assessment testing.');
warnings.push('Do not market a passing baseline check as blanket ADA/WCAG compliance.');

if (errors.length) {
  console.error(`Accessibility baseline failed with ${errors.length} error(s):`);
  for (const e of errors) console.error(`- ${e}`);
  process.exit(1);
}

console.log(`Accessibility structural baseline PASS — ${critical.length} critical learner surfaces checked.`);
for (const w of warnings) console.log(`WARNING: ${w}`);
