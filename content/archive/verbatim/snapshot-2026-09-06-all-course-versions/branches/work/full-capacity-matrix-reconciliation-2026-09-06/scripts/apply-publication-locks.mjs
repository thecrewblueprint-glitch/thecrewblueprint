import { readFile, readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const coursesDir = path.join(rootDir, 'courses');

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function decodeTitle(value) {
  return String(value)
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&#039;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&mdash;', '—')
    .replaceAll('&ndash;', '–');
}

function courseTitle(html, filename) {
  const recorded = html.match(/data-course-title="([^"]+)"/)?.[1];
  if (recorded) return decodeTitle(recorded);
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]
    ?.replace(/\s*(?:\||—)\s*(?:The )?Crew Blueprint.*$/i, '')
    ?.trim();
  if (title) return decodeTitle(title);
  return filename.replace(/\.html$/, '').replaceAll('-', ' ');
}

function lockPage(title) {
  const safeTitle = escapeHtml(title);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${safeTitle} — Owner Audit Required | The Crew Blueprint</title>
<meta name="description" content="This Crew Blueprint course remains locked until the owner completes its curriculum audit." />
<meta name="robots" content="noindex,nofollow,noarchive" />
<link rel="canonical" href="https://thecrewblueprint.com/courses/" />
<link rel="icon" href="../images/logo.png" type="image/png" />
<link href="https://fonts.googleapis.com" rel="preconnect" />
<link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
<link href="../css/theme.css" rel="stylesheet" />
</head>
<body class="course-lock-page" data-course-lock="owner-audit" data-course-title="${safeTitle}">
<main class="course-lock-shell">
  <article class="course-lock-card" aria-labelledby="lock-title">
    <a class="course-lock-brand" href="../index.html">The Crew <span>Blueprint</span></a>
    <span class="course-lock-status">Owner Audit Required</span>
    <p class="course-lock-name">${safeTitle}</p>
    <h1 id="lock-title">This course is not open yet.</h1>
    <p>The curriculum exists, but the owner has not released it. The course stays locked while its accuracy, sources, questions, visuals, and field boundaries receive a personal audit.</p>
    <p><strong>Stagehand Fundamentals is the only course currently open to learners.</strong></p>
    <div class="course-lock-actions">
      <a class="cb-btn cb-btn-primary" href="stagehand-fundamentals.html">Open Stagehand Fundamentals</a>
      <a class="cb-btn cb-btn-secondary" href="../courses.html">Return to Courses</a>
    </div>
  </article>
</main>
</body>
</html>
`;
}

const files = (await readdir(coursesDir))
  .filter((name) => name.endsWith('.html'))
  .filter((name) => name !== 'stagehand-fundamentals.html')
  .filter((name) => !name.startsWith('module-'))
  .sort();

for (const filename of files) {
  const filePath = path.join(coursesDir, filename);
  const current = await readFile(filePath, 'utf8');
  await writeFile(filePath, lockPage(courseTitle(current, filename)), 'utf8');
}

const sitemapPath = path.join(rootDir, 'sitemap.xml');
const sitemap = await readFile(sitemapPath, 'utf8');
const filteredSitemap = sitemap
  .split('\n')
  .filter((line) => {
    const route = line.match(/<loc>https:\/\/thecrewblueprint\.com\/courses\/([^<]*)<\/loc>/)?.[1];
    if (route === undefined || route === '') return true;
    return route.startsWith('stagehand-fundamentals/') || route.startsWith('module-');
  })
  .join('\n');
await writeFile(sitemapPath, filteredSitemap, 'utf8');

console.log(`Applied owner-audit publication locks to ${files.length} course routes.`);
