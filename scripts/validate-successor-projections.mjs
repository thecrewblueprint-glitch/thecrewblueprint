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
const responsibilityAccess = readJson(path.join(researchDir, 'integration', 'responsibility-access-crosswalk-143-v0.1-2026-09-09.json'));
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

const crosswalkRows = (responsibilityAccess.groups || []).flatMap((group) =>
  (group.canonical_ids || []).map((courseId) => ({
    course_id: courseId,
    responsibility_state: group.responsibility_state,
    access_class: group.access_class,
    delivery_policy: group.delivery_policy,
  }))
);
const crosswalkIds = crosswalkRows.map((row) => row.course_id);
assert(crosswalkRows.length === 143, `Expected 143 responsibility/access assignments; got ${crosswalkRows.length}.`);
assert(unique(crosswalkIds).length === 143, 'Responsibility/access crosswalk contains duplicate canonical IDs.');
assert(mappedIds.every((id) => crosswalkIds.includes(id)), 'Responsibility/access crosswalk is missing accepted canonical IDs.');
assert(crosswalkIds.every((id) => mappedIds.includes(id)), 'Responsibility/access crosswalk contains IDs outside the accepted mapping.');

const deliveryCounts = {};
for (const course of webProjection.courses) {
  const delivery = course.access?.delivery_state || 'missing';
  deliveryCounts[delivery] = (deliveryCounts[delivery] || 0) + 1;
  assert(course.access?.legacy_publication_state_is_not_access_authority === true, `Legacy publication/access firewall missing for ${course.identity.canonical_course_id}.`);
  if (course.placement?.public_by_default === true) {
    assert(['free_public','public_reference'].includes(delivery), `Locked identity became public-by-default: ${course.identity.canonical_course_id} (${delivery}).`);
  }
  if (!['free_public','public_reference'].includes(delivery)) {
    assert(course.identity?.route_id === null, `Locked identity exported a learner route: ${course.identity.canonical_course_id} -> ${course.identity?.route_id}.`);
    assert(course.learning?.objective === null, `Locked identity exported learner-facing objective text: ${course.identity.canonical_course_id}.`);
    assert(course.identity?.route_state === 'locked' || course.identity?.route_state === 'no_route', `Locked identity has unexpected route state: ${course.identity.canonical_course_id} -> ${course.identity?.route_state}.`);
  }
}
assert(deliveryCounts.free_public === 62, `Expected 62 high-confidence free identities; got ${deliveryCounts.free_public || 0}.`);
assert(deliveryCounts.public_reference === 12, `Expected 12 public-reference identities; got ${deliveryCounts.public_reference || 0}.`);
assert(deliveryCounts.future_paid_locked === 34, `Expected 34 future-paid locked identities; got ${deliveryCounts.future_paid_locked || 0}.`);
assert(deliveryCounts.specialist_review_locked === 8, `Expected 8 specialist-review locked identities; got ${deliveryCounts.specialist_review_locked || 0}.`);
assert(deliveryCounts.split_required_locked === 16, `Expected 16 split-required locked identities; got ${deliveryCounts.split_required_locked || 0}.`);
assert(deliveryCounts.review_locked === 11, `Expected 11 review-locked identities; got ${deliveryCounts.review_locked || 0}.`);

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

const expectedContextLabIds = [
  'C-SECT-TOUR',
  'C-SECT-VENUE',
  'C-SECT-CORP',
  'C-SECT-THEATRE',
  'C-SECT-WORSHIP',
  'C-SECT-BCAST',
  'C-SECT-OUT',
  'C-ACC-PUBLIC-ROUTES',
  'C-ACC-COMMUNICATION',
  'C-OUT-HEAT',
  'C-OUT-FIELD',
].sort();
const projectedContextLabs = webProjection.courses
  .filter((course) => course.placement?.learner_surface === 'contexts')
  .sort((a, b) => a.identity.canonical_course_id.localeCompare(b.identity.canonical_course_id));
const projectedContextLabIds = projectedContextLabs.map((course) => course.identity.canonical_course_id);
assert(
  JSON.stringify(projectedContextLabIds) === JSON.stringify(expectedContextLabIds),
  `Context Labs drifted: expected ${expectedContextLabIds.join(', ')}, got ${projectedContextLabIds.join(', ')}`
);
for (const course of projectedContextLabs) {
  assert(course.access?.delivery_state === 'free_public', `Context Lab must remain free: ${course.identity.canonical_course_id} -> ${course.access?.delivery_state}`);
  assert(course.placement?.public_by_default === true, `Context Lab must be public-by-default: ${course.identity.canonical_course_id}`);
  assert(course.identity?.route_state === 'materialized', `Context Lab route is not materialized: ${course.identity.canonical_course_id} -> ${course.identity?.route_state}`);
  assert(Boolean(course.identity?.route_id), `Context Lab route is missing: ${course.identity.canonical_course_id}`);
}
const advancedContextExclusions = ['C-LEAD-CREW-CHIEF', 'C-LEAD-LABOR', 'C-SHC-ARCH', 'C-SUP-HAZARD'];
for (const courseId of advancedContextExclusions) {
  const projected = webProjection.courses.find((course) => course.identity.canonical_course_id === courseId);
  assert(projected?.placement?.learner_surface !== 'contexts', `Advanced/split identity leaked into Context Labs: ${courseId}`);
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

assert(publicAtlas.access_state === 'locked_unavailable', 'Public Atlas projection must remain locked.');
assert(publicAtlas.learner_tool_available === false, 'Public Atlas learner tool must remain unavailable.');
assert(publicAtlas.links.length === 0, `Public Atlas projection must expose zero active routes while locked; got ${publicAtlas.links.length}.`);
assert(webProjection.atlas_access?.state === 'locked_unavailable', 'Web projection lost the Atlas locked state.');
assert(webProjection.atlas_access?.learner_tool_available === false, 'Web projection must not expose Atlas as a learner tool.');
assert((webProjection.atlas_links || []).length === 0, 'Web projection exposed active Atlas links while access is locked.');

const publicText = JSON.stringify(webProjection);
assert(!publicText.includes('atlas.thecrewblueprint.com'), 'Public web projection exposed an active Production Atlas URL while locked.');
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
  assert(course.work_bridge?.atlas_access_state === 'locked_unavailable', `Atlas access state missing for ${course.identity.canonical_course_id}.`);
  assert((course.work_bridge?.atlas_route_ids || []).length === 0, `Public course projection exposed Atlas route IDs for ${course.identity.canonical_course_id}.`);
}

console.log('Successor projection validation passed.');
console.log(`143/143 canonical identities projected; ${fieldGroup.course_ids.length} Field Skills preserved; ${initialEntryIds.length} initial lanes independent.`);
console.log(`${researchEdges.length} learner-path edges validated with zero hard prerequisites.`);
console.log('Production Atlas public access is locked with zero active learner routes.');
console.log(`Access projection: ${deliveryCounts.free_public} free, ${deliveryCounts.public_reference} public reference, ${deliveryCounts.future_paid_locked} future-paid locked, ${deliveryCounts.specialist_review_locked} specialist review, ${deliveryCounts.split_required_locked} split required, ${deliveryCounts.review_locked} review locked.`);
console.log(`${mediaQueue.length} media backlog items; ${sourceGapQueue.length} external source-gap items; ${internalPolicy.length} internal-policy boundaries separated.`);
