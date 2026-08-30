import { access, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const coursePath = path.join(rootDir, 'courses', 'stagehand-fundamentals.html');
const dashboardPath = path.join(rootDir, 'lms-dashboard.html');
const cableCoursePath = path.join(rootDir, 'courses', 'field-skill-over-under-cable-coiling.html');
const errors = [];

function check(condition, message) {
  if (!condition) errors.push(message);
}

const expectedModules = new Map([
  [1, 'Welcome to the Live Event World'],
  [2, 'Safety Mindset Before Skillset'],
  [3, 'PPE, Clothing & Readiness'],
  [4, 'Venue & Jobsite Awareness'],
  [5, 'Communication & Crew Etiquette'],
  [6, 'Load-In Fundamentals'],
  [7, 'Tools, Gear & Handling'],
  [8, 'Load-Out Fundamentals'],
  [9, 'Department Basics'],
  [10, 'Getting Hired, Called Back & Growing']
]);
const expectedParts = ['1,2,3', '4,5', '6,7,8', '9,10'];
const expectedLegacyMap = new Map([
  [1, 1], [2, 2], [3, 3], [4, 4], [5, 6],
  [6, 5], [7, 9], [8, 7], [9, 8], [10, 10]
]);

const course = await readFile(coursePath, 'utf8');
const dashboard = await readFile(dashboardPath, 'utf8');
const cableCourse = await readFile(cableCoursePath, 'utf8');
const bibliography = await readFile(path.join(rootDir, 'visuals', 'stagehand-fundamentals', 'bibliography.html'), 'utf8');

const moduleMatches = [...course.matchAll(/\{num:(\d+),title:"([^"]+)",lessons:\[([\s\S]*?)\]\s*,rule:/g)];
check(moduleMatches.length === 10, `expected 10 module records, found ${moduleMatches.length}`);
let lessonCount = 0;
const seenModuleNumbers = new Set();
for (const match of moduleMatches) {
  const moduleNumber = Number(match[1]);
  const title = match[2];
  seenModuleNumbers.add(moduleNumber);
  check(expectedModules.get(moduleNumber) === title, `Module ${moduleNumber} has unexpected title: ${title}`);
  const lessonIds = [...match[3].matchAll(/id:"(\d+\.\d+)"/g)].map((item) => item[1]);
  lessonCount += lessonIds.length;
  check(lessonIds.length > 0, `Module ${moduleNumber} has no lessons`);
  for (const lessonId of lessonIds) {
    check(lessonId.startsWith(`${moduleNumber}.`), `Module ${moduleNumber} contains noncanonical lesson ${lessonId}`);
  }
}
check(lessonCount === 34, `expected 34 lessons, found ${lessonCount}`);
check([...seenModuleNumbers].sort((a, b) => a - b).join(',') === '1,2,3,4,5,6,7,8,9,10', 'module numbers are not the complete canonical 1–10 sequence');

const partMatches = [...course.matchAll(/moduleNumbers:\s*\[([^\]]+)\]/g)]
  .map((match) => match[1].replaceAll(/\s/g, ''));
check(JSON.stringify(partMatches) === JSON.stringify(expectedParts), `unexpected four-part grouping: ${partMatches.join(' | ')}`);

const legacyMapBlock = course.match(/const legacyToCanonicalModule = new Map\(\[([\s\S]*?)\]\);/)?.[1] || '';
for (const [legacy, canonical] of expectedLegacyMap) {
  check(new RegExp(`\\[${legacy},\\s*${canonical}\\]`).test(legacyMapBlock), `legacy Module ${legacy} is not mapped to canonical Module ${canonical}`);
}
check(course.includes("url.searchParams.set('numbering','canonical')"), 'course URLs do not persist the canonical numbering marker');
check(course.includes("courseUrlParams.get('numbering')==='canonical'"), 'course does not distinguish canonical links from legacy bookmarks');
check(bibliography.includes('FUNDAMENTALS_NUMBERING:CANONICAL'), 'bibliography does not record its canonical module-number migration');
check(bibliography.includes('Communication Phrases (Module 5)'), 'bibliography still labels communication with a noncanonical module number');
check(bibliography.includes('Load-Out Risk (Module 8)'), 'bibliography still labels load-out with a noncanonical module number');
check(bibliography.includes('Module 9 department-awareness support'), 'bibliography packet lineage still labels department awareness with a noncanonical module number');

for (const [number, title] of expectedModules) {
  check(dashboard.includes(`<li><span>${number}</span>${title.replaceAll('&', '&amp;')}</li>`) || dashboard.includes(`<li><span>${number}</span>${title}</li>`), `dashboard is missing canonical Module ${number}: ${title}`);
}
check((dashboard.match(/numbering=canonical/g) || []).length >= 5, 'dashboard entry links do not consistently mark canonical numbering');
check(course.includes("../courses.html#field-skills"), 'Fundamentals completion does not continue to extra field-skills training');
check(dashboard.includes('Continue into extra training.'), 'course map does not explain the post-Fundamentals next step');

check(course.includes('../images/training/road-case-pre-move-inspection.jpg'), 'road-case lesson does not use the realistic inspection photo');
await access(path.join(rootDir, 'images', 'training', 'road-case-pre-move-inspection.jpg'));
await access(path.join(rootDir, 'images', 'crew-blueprint-logo-master.jpeg'));
check((await readFile(path.join(rootDir, 'css', 'theme.css'), 'utf8')).includes('crew-blueprint-logo-master.jpeg'), 'global navigation does not use the new Crew Blueprint logo');
check(cableCourse.includes('Watch QSC’s “How to properly roll a cable” demonstration'), 'cable-coiling lesson does not expose the QSC visual demonstration');
check(cableCourse.includes('https://training.qsc.com/mod/book/tool/print/index.php?id=1715'), 'cable-coiling lesson is missing the official QSC training URL');

if (errors.length) {
  console.error(`Fundamentals sequence validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('Fundamentals sequence validation passed.');
  console.log('- 10 canonical modules across Parts 1–4');
  console.log('- 34 canonically numbered lessons');
  console.log('- legacy bookmark translation retained');
  console.log('- extra-training handoff, road-case photo, logo, and QSC visual link present');
}
