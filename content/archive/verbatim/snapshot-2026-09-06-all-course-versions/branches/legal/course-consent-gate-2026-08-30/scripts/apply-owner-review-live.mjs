import { readFile, readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const coursesDir = path.join(rootDir, 'courses');

const reviewStyle = `<style id="ownerReviewBadgeStyle">
.owner-review-badge{position:fixed;right:12px;bottom:12px;z-index:9999;padding:7px 10px;border:1px solid rgba(245,180,0,.55);border-radius:999px;background:rgba(9,12,16,.94);box-shadow:0 8px 24px rgba(0,0,0,.35);color:#f5b400;font:800 10px/1.2 Inter,system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;pointer-events:none}
</style>`;
const reviewBadge = '<div class="owner-review-badge" role="note">Owner Review · Public Audit Copy</div>';

const files = (await readdir(coursesDir))
  .filter((name) => name.endsWith('.html'))
  .filter((name) => name !== 'stagehand-fundamentals.html')
  .filter((name) => !name.startsWith('module-'))
  .sort();

for (const filename of files) {
  const filePath = path.join(coursesDir, filename);
  let html = await readFile(filePath, 'utf8');

  if (/<meta\s+name=["']robots["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<meta\s+name=["']robots["'][^>]*>/i,
      '<meta name="robots" content="noindex,follow" />',
    );
  } else {
    html = html.replace(
      /(<meta\s+name=["']viewport["'][^>]*>)/i,
      '$1\n<meta name="robots" content="noindex,follow" />',
    );
  }

  if (!html.includes('id="ownerReviewBadgeStyle"')) {
    html = html.replace('</head>', `${reviewStyle}\n</head>`);
  }
  if (!html.includes('data-publication-state="owner-review-live"')) {
    html = html.replace(/<body\b([^>]*)>/i, '<body data-publication-state="owner-review-live"$1>');
  }
  if (!html.includes('class="owner-review-badge"')) {
    html = html.replace(/(<body\b[^>]*>)/i, `$1\n${reviewBadge}`);
  }

  await writeFile(filePath, html, 'utf8');
}

console.log(`Prepared ${files.length} public owner-review course routes.`);
