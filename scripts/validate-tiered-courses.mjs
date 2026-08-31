import { readFile, readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { fieldCourses } from './course-data-field.mjs';
import { leadCourses } from './course-data-lead.mjs';
import { advancedCourses } from './course-data-advanced.mjs';
import { lightingCourses } from './course-data-lighting.mjs';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const sourceCourses = [...fieldCourses.slice(0, -1), ...leadCourses, ...advancedCourses, fieldCourses.at(-1), ...lightingCourses];
const errors = [];
const answerPositions = [0, 0, 0];
let sourceMappings = 0;
const sourceUrls = new Set();
let lessonCount = 0;
let questionCount = 0;

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

function extractCourseData(html, file) {
  const match = html.match(/<script type="application\/json" id="courseData">([\s\S]*?)<\/script>/);
  check(Boolean(match), `${file}: missing embedded course data`);
  if (!match) return null;
  try {
    return JSON.parse(match[1]);
  } catch (error) {
    errors.push(`${file}: invalid embedded course JSON (${error.message})`);
    return null;
  }
}

function validateCourseRecord(course) {
  const label = course.slug || course.title || 'unnamed course';
  for (const field of ['slug', 'title', 'tier', 'tierClass', 'status', 'packet', 'description', 'boundary']) {
    check(typeof course[field] === 'string' && course[field].trim(), `${label}: missing ${field}`);
  }
  check(Array.isArray(course.modules) && course.modules.length > 0, `${label}: no modules`);
  for (const [moduleIndex, module] of (course.modules || []).entries()) {
    check(typeof module.name === 'string' && module.name.trim(), `${label}: module ${moduleIndex + 1} has no name`);
    check(Array.isArray(module.lessons) && module.lessons.length > 0, `${label}: module ${moduleIndex + 1} has no lessons`);
    for (const [lessonIndex, lesson] of (module.lessons || []).entries()) {
      lessonCount += 1;
      const lessonLabel = `${label}: module ${moduleIndex + 1}, lesson ${lessonIndex + 1}`;
      check(typeof lesson.name === 'string' && lesson.name.trim(), `${lessonLabel} has no name`);
      check(typeof lesson.objective === 'string' && lesson.objective.trim(), `${lessonLabel} has no objective`);
      check(Array.isArray(lesson.blocks) && lesson.blocks.length > 0, `${lessonLabel} has no content blocks`);
    }
  }
  check(Array.isArray(course.quiz) && course.quiz.length === 5, `${label}: expected five quiz questions`);
  for (const [questionIndex, question] of (course.quiz || []).entries()) {
    const questionLabel = `${label}: question ${questionIndex + 1}`;
    questionCount += 1;
    check(typeof question.question === 'string' && question.question.trim(), `${questionLabel} has no prompt`);
    check(Array.isArray(question.options) && question.options.length === 3, `${questionLabel} must have three options`);
    check(new Set(question.options || []).size === 3, `${questionLabel} must have three distinct options`);
    check(Number.isInteger(question.answer) && question.answer >= 0 && question.answer <= 2, `${questionLabel} has an invalid answer key`);
    check(typeof question.coaching === 'string' && question.coaching.trim(), `${questionLabel} has no coaching`);
  }
  check(course.practice && Array.isArray(course.practice.checklist) && course.practice.checklist.length > 0, `${label}: missing practice or review gate`);
  check(Array.isArray(course.sources) && course.sources.length > 0, `${label}: no source lineage`);
  for (const [sourceIndex, source] of (course.sources || []).entries()) {
    check(typeof source.label === 'string' && source.label.trim(), `${label}: source ${sourceIndex + 1} has no label`);
    check(/^https:\/\//.test(source.url || ''), `${label}: source ${sourceIndex + 1} does not use HTTPS`);
  }
}

async function validateGeneratedPages() {
  const slugs = new Set();
  const tierCounts = new Map();
  const catalog = await readFile(path.join(rootDir, 'courses.html'), 'utf8');
  for (const course of sourceCourses) {
    validateCourseRecord(course);
    check(!slugs.has(course.slug), `${course.slug}: duplicate slug`);
    slugs.add(course.slug);
    tierCounts.set(course.tierClass, (tierCounts.get(course.tierClass) || 0) + 1);
    check(catalog.includes(`href="courses/${course.slug}.html"`), `${course.slug}: missing from courses.html`);

    const outputPath = path.join(rootDir, 'courses', `${course.slug}.html`);
    let html;
    try {
      html = await readFile(outputPath, 'utf8');
    } catch {
      errors.push(`${course.slug}: generated HTML is missing`);
      continue;
    }
    check(html.includes('<meta name="robots" content="noindex,follow" />'), `${course.slug}: review build must remain noindex`);
    check(html.includes('../css/tiered-course.css'), `${course.slug}: missing shared course stylesheet`);
    check(html.includes('../js/tiered-course.js'), `${course.slug}: missing shared course runtime`);
    const embedded = extractCourseData(html, path.relative(rootDir, outputPath));
    if (!embedded) continue;
    check(embedded.slug === course.slug, `${course.slug}: embedded slug mismatch`);
    check(embedded.title === course.title, `${course.slug}: embedded title mismatch`);
    check(embedded.modules?.length === course.modules.length, `${course.slug}: embedded module count mismatch`);
    check(embedded.quiz?.length === 5, `${course.slug}: generated page does not contain five questions`);
    for (const question of embedded.quiz || []) {
      if (Number.isInteger(question.answer) && question.answer >= 0 && question.answer <= 2) {
        answerPositions[question.answer] += 1;
      }
    }

    const packetNumber = course.packet.match(/Research Package (\d+)/)?.[1];
    check(Boolean(packetNumber), `${course.slug}: packet number is missing`);
    if (!packetNumber) continue;
    const packetCandidates = (await readdir(path.join(rootDir, 'research')))
      .filter((name) => name.startsWith(`${packetNumber}-`) && name.endsWith('.md'));
    check(packetCandidates.length === 1, `${course.slug}: expected one source packet for ${packetNumber}, found ${packetCandidates.length}`);
    if (packetCandidates.length !== 1) continue;
    const packetText = await readFile(path.join(rootDir, 'research', packetCandidates[0]), 'utf8');
    for (const source of course.sources || []) {
      sourceMappings += 1;
      sourceUrls.add(source.url);
      check(packetText.includes(source.url), `${course.slug}: source URL is not present in ${packetCandidates[0]} (${source.url})`);
    }
  }
  check(sourceCourses.length === 24, `expected 24 courses, found ${sourceCourses.length}`);
  const expectedTierCounts = new Map([
    ['course-tier-field-skill', 6],
    ['course-tier-lead', 7],
    ['course-tier-supervisor', 2],
    ['course-tier-advanced', 5],
    ['course-tier-infrastructure', 1],
    ['course-tier-production', 1],
    ['course-tier-department-support', 1],
    ['course-tier-department-systems', 1]
  ]);
  for (const [tierClass, expected] of expectedTierCounts) {
    check(tierCounts.get(tierClass) === expected, `${tierClass}: expected ${expected} courses, found ${tierCounts.get(tierClass) || 0}`);
  }
  check(questionCount === 120, `expected 120 source questions, found ${questionCount}`);
  check(Math.max(...answerPositions) - Math.min(...answerPositions) <= 1, `generated answer positions are not balanced: ${answerPositions.join('/')}`);
}

function localTarget(rawTarget, sourceFile) {
  if (!rawTarget || /^(?:https?:|mailto:|tel:|data:|javascript:|#)/i.test(rawTarget)) return null;
  const target = rawTarget.split('#')[0].split('?')[0];
  if (!target) return null;
  let decoded;
  try {
    decoded = decodeURIComponent(target);
  } catch {
    decoded = target;
  }
  return decoded.startsWith('/')
    ? path.join(rootDir, decoded)
    : path.resolve(path.dirname(sourceFile), decoded);
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

async function validateLiveLinks() {
  const htmlFiles = (await filesUnder(rootDir))
    .filter((file) => file.endsWith('.html'))
    .filter((file) => !file.includes(`${path.sep}_archived${path.sep}`))
    .filter((file) => !file.includes(`${path.sep}.git${path.sep}`));
  let linkCount = 0;
  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    const ids = [...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]);
    const seenIds = new Set();
    for (const id of ids) {
      check(!seenIds.has(id), `${path.relative(rootDir, file)}: duplicate id "${id}"`);
      seenIds.add(id);
    }
    for (const match of html.matchAll(/\s(?:href|src)=["']([^"']+)["']/g)) {
      const target = localTarget(match[1], file);
      if (!target) continue;
      linkCount += 1;
      check(await targetExists(target), `${path.relative(rootDir, file)}: missing local target ${match[1]}`);
    }
  }
  return { htmlFiles: htmlFiles.length, linkCount };
}

await validateGeneratedPages();
const linkReport = await validateLiveLinks();

if (errors.length) {
  console.error(`Tiered-course validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('Tiered-course validation passed.');
  console.log(`- ${sourceCourses.length} courses`);
  console.log(`- ${lessonCount} lessons`);
  console.log(`- ${questionCount} questions (${answerPositions.join('/')} answer-position balance)`);
  console.log(`- ${sourceMappings} course-to-packet source mappings (${sourceUrls.size} unique URLs)`);
  console.log(`- ${linkReport.htmlFiles} live HTML files and ${linkReport.linkCount} local references`);
}
