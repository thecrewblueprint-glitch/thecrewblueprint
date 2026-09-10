import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const researchDir = path.join(root, 'research');
const generatedResearchDir = path.join(researchDir, 'generated');
const generatedPublicDir = path.join(root, 'data', 'generated');

function readJson(filePath) {
  if (!fs.existsSync(filePath)) throw new Error(`Missing generated file: ${path.relative(root, filePath)}`);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function readJsonl(filePath) {
  if (!fs.existsSync(filePath)) throw new Error(`Missing generated file: ${path.relative(root, filePath)}`);
  return fs.readFileSync(filePath, 'utf8').split(/\r?\n/).map((line) => line.trim()).filter(Boolean).map(JSON.parse);
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function unique(values) {
  return [...new Set(values)];
}

const mapping = readJson(path.join(researchDir, 'analysis', 'vnext-career-guided-course-map-2026-09-07.json'));
const webProjection = readJson(path.join(generatedPublicDir, 'web-client-projection.json'));
const publicEdges = readJson(path.join(generatedPublicDir, 'learner-path-edges.json'));
const publicAtlas = readJson(path.join(generatedPublicDir, 'production-atlas-links.json'));
const researchEdges = readJsonl(path.join(generatedResearchDir, 'learner-path-edges.jsonl'));
const mediaQueue = readJsonl(path.join(generatedResearchDir, 'instructional-media-backlog.jsonl'));
const sourceGapQueue = readJsonl(path.join(generatedResearchDir, 'source-gap-closure-queue.jsonl'));
const internalPolicy = readJsonl(path.join(generatedResearchDir, 'internal-policy-boundaries.jsonl'));

const mappedIds = mapping.mapping_groups.flatMap((group) => group.course_ids || []);
assert(mappedIds.length === 143, `Expected 143 accepted mapping identities; got ${mappedIds.length}`);
assert(unique(mappedIds).length === 143, 'Accepted mapping contains duplicate primary course IDs.');

const projectedIds = webProjection.courses.map((course) => course.identity.canonical_course_id);
assert(projectedIds.length === 143, `Expected 143 projected course identities; got ${projectedIds.length}`);
assert(unique(projectedIds).length === 143, 'Web projection contains duplicate canonical course identities.');
assert(mappedIds.every((id) => projectedIds.includes(id)), 'Web projection dropped one or more accepted mapping identities.');

const initialEntryGroups = mapping.mapping_groups.filter((group) => group.lane_status === 'initial' && group.node_role?.includes('lane_entry'));
const initialEntryIds = initialEntryGroups.map((group) => group.course_ids?.[0]).filter(Boolean).sort();
const expectedInitialEntryIds = ['C-AUD-SUPPORT', 'C-LTG-SUPPORT', 'C-RIG-AWARE', 'C-SHF-FUNDAMENTALS', 'C-STG-SUPPORT', 'C-VID-SUPPORT'].sort();
assert(JSON.stringify(initialEntryIds) === JSON.stringify(expectedInitialEntryIds), `Initial learner-facing lane entries drifted: ${initialEntryIds.join(', ')}`);

const fieldGroup = mapping.mapping_groups.find((group) => group.node_role === 'field_skill_library');
assert(fieldGroup, 'Field Skills library mapping group is missing.');
assert((fieldGroup.course_ids || []).length === 18, `Field Skills must remain an 18-skill first-class library; got ${(fieldGroup.course_ids || []).length}.`);
for (const courseId of fieldGroup.course_ids || []) {
  const projected = webProjection.courses.find((course) => course.identity.canonical_course_id === courseId);
  assert(projected?.placement?.learner_surface === 'field', `Field Skill ${courseId} was not projected to the field surface.`);
}

assert(webProjection.invariants?.stagehand_not_universal_prerequisite === true, 'Stagehand universal-prerequisite protection is missing.');
assert(researchEdges.every((edge) => edge.hard_prerequisite === false), 'Generated learner graph introduced a hard prerequisite.');
assert(publicEdges.edges.length === researchEdges.length, 'Public/internal learner-edge projections disagree on edge count.');

const orientationLaneChoices = researchEdges.filter((edge) => edge.from_id === 'SURFACE-ORIENTATION' && edge.relation === 'lane_choice');
assert(orientationLaneChoices.length === 6, `Orientation must expose six independent initial lane choices; got ${orientationLaneChoices.length}.`);
assert(unique(orientationLaneChoices.map((edge) => edge.to_id)).length === 6, 'Orientation lane choices contain duplicates.');

const mappedSet = new Set(mappedIds);
const virtualSet = new Set((webProjection.virtual_nodes || []).map((node) => node.id));
const atlasSet = new Set((webProjection.atlas_links || []).map((link) => link.atlas_route_id));
for (const edge of researchEdges) {
  assert(mappedSet.has(edge.from_id) || virtualSet.has(edge.from_id) || atlasSet.has(edge.from_id), `Unknown learner-edge from_id: ${edge.from_id}`);
  assert(mappedSet.has(edge.to_id) || virtualSet.has(edge.to_id) || atlasSet.has(edge.to_id), `Unknown learner-edge to_id: ${edge.to_id}`);
}

assert(publicAtlas.links.length >= 6, `Expected at least six stable Production Atlas routes; got ${publicAtlas.links.length}.`);
for (const link of publicAtlas.links) {
  const url = new URL(link.url);
  assert(url.protocol === 'https:', `Atlas route must use HTTPS: ${link.url}`);
  assert(url.hostname === 'atlas.thecrewblueprint.com', `Atlas route must use the stable custom domain, not a repository/branch URL: ${link.url}`);
  assert(link.volatile_data_owned_by_atlas === true, `Atlas ownership flag missing on ${link.atlas_route_id}.`);
}

const publicText = JSON.stringify(webProjection);
assert(!publicText.includes('thecrewblueprint-glitch/Roadmapdev'), 'Public projection leaked a private Roadmapdev repository pointer.');
assert(!publicText.includes('worker_records'), 'Public projection leaked private worker-record semantics.');
assert(!publicText.includes('personal_contacts'), 'Public projection leaked personal-contact semantics.');

const gapIds = new Set(sourceGapQueue.map((row) => row.content_id));
const internalIds = new Set(internalPolicy.map((row) => row.content_id));
for (const id of gapIds) assert(!internalIds.has(id), `Content ${id} appears in both external source-gap and internal-policy queues.`);
assert(internalPolicy.every((row) => row.state === 'internal_policy_only'), 'Internal-policy boundary queue contains a non-policy state.');
assert(sourceGapQueue.every((row) => row.gap_type && row.required_action), 'Source-gap queue contains incomplete work items.');

const prohibitedControlledMedia = /step[- ]by[- ]step|operational procedure|load\/calculation instruction|energized-work procedure|work-at-height procedure|bypass\/reset procedure|effects operation procedure/i;
for (const item of mediaQueue.filter((row) => row.surface === 'controlled_specialty_awareness')) {
  assert(!prohibitedControlledMedia.test(item.media_type), `Controlled-specialty media queue includes prohibited procedural default: ${item.media_type}`);
  assert(item.review_required === true, `Controlled-specialty media item ${item.queue_id} must require review.`);
}
assert(mediaQueue.every((row) => row.provenance_required === true && row.alt_or_text_equivalent_required === true), 'Every media backlog item must require provenance and an accessible text equivalent.');

for (const course of webProjection.courses) {
  assert(course.client?.progress_semantics?.includes('employer_or_site_authorization'), `Progress/authorization separation missing for ${course.identity.canonical_course_id}.`);
  assert(course.work_bridge?.volatile_data_owned_by_atlas === true, `Atlas volatile-data ownership missing for ${course.identity.canonical_course_id}.`);
}

console.log('Successor projection validation passed.');
console.log(`143/143 canonical identities projected; ${fieldGroup.course_ids.length} Field Skills preserved; ${initialEntryIds.length} initial lanes independent.`);
console.log(`${researchEdges.length} learner-path edges validated with zero hard prerequisites.`);
console.log(`${publicAtlas.links.length} stable Production Atlas routes validated on atlas.thecrewblueprint.com.`);
console.log(`${mediaQueue.length} media backlog items; ${sourceGapQueue.length} external source-gap items; ${internalPolicy.length} internal-policy boundaries separated.`);
