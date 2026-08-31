import { readFile, readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const coursesDir = path.join(rootDir, 'courses');
const errors = [];

function check(condition, message) {
  if (!condition) errors.push(message);
}

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesUnder(fullPath));
    else files.push(fullPath);
  }
  return files;
}

function localTarget(rawTarget, sourceFile) {
  if (!rawTarget || /^(?:https?:|mailto:|tel:|data:|javascript:|#)/i.test(rawTarget)) return null;
  const target = rawTarget.split('#')[0].split('?')[0];
  if (!target) return null;
  return target.startsWith('/')
    ? path.join(rootDir, target)
    : path.resolve(path.dirname(sourceFile), target);
}

async function targetExists(target) {
  try {
    const info = await stat(target);
    if (info.isDirectory()) await stat(path.join(target, 'index.html'));
    return true;
  } catch {
    return false;
  }
}

const topLevelCourseFiles = (await readdir(coursesDir))
  .filter((name) => name.endsWith('.html'))
  .sort();
const openCourseFiles = topLevelCourseFiles
  .filter((name) => name === 'stagehand-fundamentals.html' || name.startsWith('module-'));
const lockedCourseFiles = topLevelCourseFiles.filter((name) => !openCourseFiles.includes(name));

check(openCourseFiles.length === 11, `expected Stagehand Fundamentals plus 10 open modules, found ${openCourseFiles.length}`);
check(lockedCourseFiles.length === 47, `expected 47 locked post-Fundamentals routes, found ${lockedCourseFiles.length}`);

for (const filename of openCourseFiles) {
  const html = await readFile(path.join(coursesDir, filename), 'utf8');
  check(!html.includes('data-course-lock="owner-audit"'), `${filename}: Stagehand Fundamentals content is incorrectly locked`);
}

for (const filename of lockedCourseFiles) {
  const html = await readFile(path.join(coursesDir, filename), 'utf8');
  check(html.includes('data-course-lock="owner-audit"'), `${filename}: missing owner-audit lock marker`);
  check(html.includes('<meta name="robots" content="noindex,nofollow,noarchive" />'), `${filename}: missing noindex/noarchive directive`);
  check(html.includes('This course is not open yet.'), `${filename}: missing learner-facing lock message`);
  check(html.includes('stagehand-fundamentals.html'), `${filename}: missing Stagehand Fundamentals route`);
  check(!html.includes('id="courseData"'), `${filename}: curriculum JSON remains in the public lock page`);
  check(!html.includes('../js/tiered-course.js'), `${filename}: course runtime remains in the public lock page`);
}

const catalog = await readFile(path.join(rootDir, 'courses.html'), 'utf8');
check(catalog.includes('data-publication-policy="fundamentals-only"'), 'courses.html: missing Fundamentals-only publication notice');
check(!/\b(?:10 Courses Live|10 Live)\b/.test(catalog), 'courses.html: stale post-Fundamentals live-course claim');

const sitemap = await readFile(path.join(rootDir, 'sitemap.xml'), 'utf8');
for (const filename of lockedCourseFiles) {
  const route = filename.replace(/\.html$/, '/');
  check(!sitemap.includes(`/courses/${route}`), `sitemap.xml: locked route remains indexed (${route})`);
}
check(sitemap.includes('/courses/stagehand-fundamentals/'), 'sitemap.xml: Stagehand Fundamentals route is missing');

const pagesConfig = await readFile(path.join(rootDir, '_config.yml'), 'utf8');
for (const excludedPath of ['courses/_archived', 'research', 'scripts', 'css/tiered-course.css', 'js/tiered-course.js']) {
  check(
    pagesConfig.includes(`  - ${excludedPath}`),
    `_config.yml: ${excludedPath} could publish outside the learner boundary`,
  );
}

const htmlFiles = (await filesUnder(rootDir))
  .filter((file) => file.endsWith('.html'))
  .filter((file) => !file.includes(`${path.sep}_archived${path.sep}`))
  .filter((file) => !file.includes(`${path.sep}.git${path.sep}`));
let localReferences = 0;
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/\s(?:href|src)=["']([^"']+)["']/g)) {
    const target = localTarget(match[1], file);
    if (!target) continue;
    localReferences += 1;
    check(await targetExists(target), `${path.relative(rootDir, file)}: missing local target ${match[1]}`);
  }
}

if (errors.length) {
  console.error(`Publication-lock validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('Publication-lock validation passed.');
  console.log(`- ${openCourseFiles.length} Stagehand Fundamentals routes open`);
  console.log(`- ${lockedCourseFiles.length} post-Fundamentals routes locked`);
  console.log(`- ${htmlFiles.length} live HTML files and ${localReferences} local references checked`);
}
