import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { fieldCourses } from './course-data-field.mjs';
import { leadCourses } from './course-data-lead.mjs';
import { advancedCourses } from './course-data-advanced.mjs';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const outputDir = path.join(rootDir, 'courses');
const sourceCourses = [...fieldCourses, ...leadCourses, ...advancedCourses];

function moveAnswer(question, targetIndex) {
  const correct = question.options[question.answer];
  const distractors = question.options.filter((_, index) => index !== question.answer);
  const options = [];
  for (let index = 0; index < 3; index += 1) {
    options.push(index === targetIndex ? correct : distractors.shift());
  }
  return { ...question, options, answer: targetIndex };
}

// Rotate answer positions across the complete 105-question set. With 21 courses
// and five questions per course, this produces exactly 35 correct answers in
// each of the three positions while keeping every course locally mixed.
const courses = sourceCourses.map((course, courseIndex) => ({
  ...course,
  quiz: course.quiz.map((question, questionIndex) => (
    moveAnswer(question, ((courseIndex * 2) + questionIndex) % 3)
  ))
}));

function cleanJson(value) {
  return JSON.stringify(value, null, 2).replaceAll('<', '\\u003c');
}

function page(course) {
  const canonical = `https://thecrewblueprint.com/courses/${course.slug}/`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${course.title} | The Crew Blueprint</title>
<meta name="description" content="${course.description}" />
<meta name="robots" content="noindex,follow" />
<link rel="icon" href="../images/logo.png" type="image/png" />
<link rel="canonical" href="${canonical}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="The Crew Blueprint" />
<meta property="og:title" content="${course.title} | The Crew Blueprint" />
<meta property="og:description" content="${course.description}" />
<link href="https://fonts.googleapis.com" rel="preconnect" />
<link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
<link href="../css/tiered-course.css" rel="stylesheet" />
</head>
<body class="course-tier ${course.tierClass}">
<header class="top">
  <div><div class="brand">The Crew <span>Blueprint</span></div><div class="top-title" id="topTitle">${course.tier} · ${course.title}</div></div>
  <div class="progbox"><div class="progrow"><span id="progtext">Lesson 1</span><span id="pcttext">0%</span></div><div class="bar"><i id="progbar" style="width:0"></i></div></div>
  <a href="../courses.html" class="exit-btn">← Exit Course</a>
</header>
<div class="shell">
  <nav class="side" aria-label="Course lessons"><div id="sidebar"></div></nav>
  <main class="content">
    <select class="mobile-select" id="mobileSelect" aria-label="Choose lesson"></select>
    <section class="course-hero" id="courseHero"></section>
    <div class="card progress"><div class="rule" id="objective">Select a lesson to begin.</div></div>
    <div id="lessonContent"></div>
    <nav class="footer-nav" id="footerNav" aria-label="Lesson navigation"></nav>
  </main>
</div>
<footer><p>&copy; 2026 The Crew Blueprint, a brand of Deadhang Labor LLC. All rights reserved.</p></footer>
<script type="application/json" id="courseData">${cleanJson(course)}</script>
<script src="../js/tiered-course.js"></script>
</body>
</html>
`;
}

await mkdir(outputDir, { recursive: true });
for (const course of courses) {
  await writeFile(path.join(outputDir, `${course.slug}.html`), page(course), 'utf8');
}

console.log(`Built ${courses.length} tiered course pages.`);
for (const course of courses) console.log(`- courses/${course.slug}.html`);
