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

const topLevelCourseFiles = (await readdir(coursesDir))
  .filter((name) => name.endsWith('.html'))
  .sort();
const foundationFiles = topLevelCourseFiles
  .filter((name) => name === 'stagehand-fundamentals.html' || name.startsWith('module-'));
const reviewFiles = topLevelCourseFiles.filter((name) => !foundationFiles.includes(name));

check(foundationFiles.length === 11, `expected 11 Fundamentals routes, found ${foundationFiles.length}`);
check(reviewFiles.length === 47, `expected 47 owner-review routes, found ${reviewFiles.length}`);

let structuredCourses = 0;
for (const filename of reviewFiles) {
  const html = await readFile(path.join(coursesDir, filename), 'utf8');
  check(html.length > 10000, `${filename}: restored course content is unexpectedly thin`);
  check(html.includes('data-publication-state="owner-review-live"'), `${filename}: missing owner-review state marker`);
  check(html.includes('class="owner-review-badge"'), `${filename}: missing visible owner-review badge`);
  check(html.includes('<meta name="robots" content="noindex,follow" />'), `${filename}: owner-review page must remain noindex`);
  check(!html.includes('data-course-lock="owner-audit"'), `${filename}: lock page remains in place`);
  check(!html.includes('This course is not open yet.'), `${filename}: lock message remains in place`);
  if (html.includes('id="courseData"')) {
    structuredCourses += 1;
    check(html.includes('../css/tiered-course.css'), `${filename}: missing shared course-player CSS`);
    check(html.includes('../js/tiered-course.js'), `${filename}: missing shared course-player runtime`);
  }
}
check(structuredCourses === 24, `expected 24 structured tiered courses, found ${structuredCourses}`);

const catalog = await readFile(path.join(rootDir, 'courses.html'), 'utf8');
check(catalog.includes('data-publication-policy="owner-review-live"'), 'courses.html: missing public owner-review notice');
check(!catalog.includes('Owner Audit Locked'), 'courses.html: stale locked status');
check(!catalog.includes('open a lock notice'), 'courses.html: stale lock explanation');

const pagesConfig = await readFile(path.join(rootDir, '_config.yml'), 'utf8');
check(!pagesConfig.includes('  - css/tiered-course.css'), '_config.yml: shared course-player CSS is excluded');
check(!pagesConfig.includes('  - js/tiered-course.js'), '_config.yml: shared course-player runtime is excluded');

const sitemap = await readFile(path.join(rootDir, 'sitemap.xml'), 'utf8');
for (const filename of reviewFiles) {
  const route = filename.replace(/\.html$/, '/');
  check(!sitemap.includes(`/courses/${route}`), `sitemap.xml: noindex review route is listed (${route})`);
}

if (errors.length) {
  console.error(`Owner-review validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('Owner-review live validation passed.');
  console.log(`- ${foundationFiles.length} Fundamentals routes live`);
  console.log(`- ${reviewFiles.length} post-Fundamentals routes live for owner audit`);
  console.log(`- ${structuredCourses} structured tiered course builds present`);
}
