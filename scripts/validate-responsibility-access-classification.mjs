import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const generatedDir = path.join(root, 'research', 'generated');
const classificationPath = path.join(generatedDir, 'responsibility-access-classification-143.jsonl');
const summaryPath = path.join(generatedDir, 'responsibility-access-summary.json');
const contractPath = path.join(root, 'research', 'integration', 'responsibility-access-contract-2026-09-10.json');
const inventoryPath = path.join(root, 'research', 'matrix', 'course_inventory.jsonl');

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function readJsonl(file) {
  return fs.readFileSync(file, 'utf8')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map(JSON.parse);
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const contract = readJson(contractPath);
const inventory = readJsonl(inventoryPath);
const rows = readJsonl(classificationPath);
const summary = readJson(summaryPath);

const inventoryIds = inventory.map((row) => row.course_id);
const rowIds = rows.map((row) => row.canonical_id);
const uniqueRowIds = new Set(rowIds);
const expectedStates = new Set(Object.keys(contract.responsibility_states));
const expectedAccess = new Set(['free', 'paid', 'context', 'lineage']);

assert(inventory.length === 143, `Canonical inventory must contain 143 records; got ${inventory.length}.`);
assert(rows.length === 143, `Responsibility/access classification must contain 143 records; got ${rows.length}.`);
assert(uniqueRowIds.size === 143, `Responsibility/access classification contains duplicate IDs; unique=${uniqueRowIds.size}.`);
assert(inventoryIds.every((id) => uniqueRowIds.has(id)), 'Responsibility/access classification dropped one or more canonical inventory IDs.');
assert(rowIds.every((id) => inventoryIds.includes(id)), 'Responsibility/access classification introduced an ID outside the canonical inventory.');

const requiredFields = contract.content_classification_required_fields || [];
for (const row of rows) {
  for (const field of requiredFields) {
    const aliases = {
      canonical_id: 'canonical_id',
      title: 'title',
      primary_lane: 'primary_lane',
      responsibility_state: 'responsibility_state',
      access_class: 'access_class',
      learner_role_targets: 'learner_role_targets',
      prerequisite_or_prior_knowledge: 'prerequisite_or_prior_knowledge',
      safety_visibility: 'safety_visibility',
      technical_responsibility_threshold: 'technical_responsibility_threshold',
      employer_requirement_evidence_status: 'employer_requirement_evidence_status',
      credential_eligibility: 'credential_eligibility',
      source_lineage: 'source_lineage',
      review_status: 'review_status',
      classification_rationale: 'classification_rationale'
    };
    const key = aliases[field] || field;
    assert(Object.hasOwn(row, key), `${row.canonical_id}: missing required classification field ${field}.`);
  }

  assert(expectedStates.has(row.responsibility_state), `${row.canonical_id}: invalid responsibility state ${row.responsibility_state}.`);
  assert(expectedAccess.has(row.access_class), `${row.canonical_id}: invalid access class ${row.access_class}.`);
  assert(typeof row.classification_rationale === 'string' && row.classification_rationale.length > 20, `${row.canonical_id}: classification rationale is missing/too weak.`);
  assert(typeof row.non_claim === 'string' && row.non_claim.includes('does not establish field experience'), `${row.canonical_id}: knowledge-vs-experience non-claim missing.`);

  if (row.responsibility_state === 'ORIENT' || row.responsibility_state === 'SUPPORT') {
    assert(row.access_class === 'free', `${row.canonical_id}: ORIENT/SUPPORT content must classify as free.`);
  }
  if (row.responsibility_state === 'OPERATE' || row.responsibility_state === 'DEEPEN_LEAD') {
    assert(row.access_class === 'paid', `${row.canonical_id}: OPERATE/DEEPEN_LEAD content must classify as paid.`);
  }
  if (row.responsibility_state === 'HISTORICAL_SUPERSEDED') {
    assert(row.access_class === 'lineage', `${row.canonical_id}: historical/superseded content must be lineage-only.`);
  }
  if (row.safety_visibility === 'free_required') {
    assert(row.access_class !== 'paid', `${row.canonical_id}: free-required safety awareness cannot be paywalled as a whole.`);
  }
  if (row.safety_visibility === 'split_free_awareness_required') {
    assert(row.access_class === 'paid', `${row.canonical_id}: split-free-awareness marker should be used only where deeper content is paid.`);
    assert((row.ambiguity_reasons || []).includes('paid_depth_contains_safety_content_that_requires_free_awareness_split'), `${row.canonical_id}: paid safety split must be explicitly queued for review.`);
  }
  if (row.primary_lane === 'management_reference') {
    assert(row.responsibility_state === 'REFERENCE_CONTEXT', `${row.canonical_id}: management-reference material cannot remain a primary progression state without explicit reclassification.`);
  }
}

const fieldSkills = rows.filter((row) => row.canonical_id.startsWith('C-FLD-'));
assert(fieldSkills.length === 18, `Expected 18 Field Skills; got ${fieldSkills.length}.`);
assert(fieldSkills.every((row) => row.responsibility_state === 'SUPPORT' && row.access_class === 'free'), 'All 18 Field Skills must remain free SUPPORT in this first-pass model.');

for (const id of ['C-LTG-SUPPORT', 'C-AUD-SUPPORT', 'C-VID-SUPPORT', 'C-STG-SUPPORT']) {
  const row = rows.find((item) => item.canonical_id === id);
  assert(row?.responsibility_state === 'SUPPORT' && row?.access_class === 'free', `${id}: department hand-support entry must remain free SUPPORT.`);
}

for (const id of ['C-LTG-PRODUCTION-FLOW', 'C-AUD-SYSTEMS', 'C-VID-SYSTEMS', 'C-STG-DECK-SYSTEMS']) {
  const row = rows.find((item) => item.canonical_id === id);
  assert(row?.responsibility_state === 'OPERATE' && row?.access_class === 'paid', `${id}: first-pass technician systems node must classify as paid OPERATE.`);
}

for (const id of ['C-ELC-POWER-AWARENESS', 'C-RIG-AWARE']) {
  const row = rows.find((item) => item.canonical_id === id);
  assert(row?.access_class === 'free' && row?.safety_visibility === 'free_required', `${id}: controlled-specialty boundary awareness must remain free.`);
}

const managerIds = ['C-PMG-ROLE', 'C-VOP-ROLE', 'C-SMG-ROLE', 'C-PMG-BUDGET-CHANGE'];
for (const id of managerIds) {
  const row = rows.find((item) => item.canonical_id === id);
  assert(row?.responsibility_state === 'REFERENCE_CONTEXT', `${id}: administrative/management container must be demoted pending salvage review.`);
}

assert(summary.actual_count === 143 && summary.unique_ids === 143, 'Classification summary does not report 143/143 unique coverage.');
assert(summary.ambiguity_count > 0, 'First-pass classification unexpectedly reports zero ambiguities; boundary review is required by design.');

console.log('Responsibility/access classification validation passed.');
console.log(`143/143 canonical identities classified exactly once; 18/18 Field Skills remain free SUPPORT.`);
console.log(`Ambiguities queued for review: ${summary.ambiguity_count}.`);
console.log(`Safety-free: ${summary.safety_free_required_count}; paid-with-free-awareness-split: ${summary.safety_split_required_count}.`);
