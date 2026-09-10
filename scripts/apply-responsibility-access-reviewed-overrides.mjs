import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const generatedDir = path.join(root, 'research', 'generated');
const classificationPath = path.join(generatedDir, 'responsibility-access-classification-143.jsonl');
const ambiguityPath = path.join(generatedDir, 'responsibility-access-ambiguities.jsonl');
const summaryPath = path.join(generatedDir, 'responsibility-access-summary.json');
const overridesPath = path.join(root, 'research', 'integration', 'responsibility-access-reviewed-overrides-2026-09-10.json');

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

function writeJson(file, value) {
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function writeJsonl(file, rows) {
  fs.writeFileSync(file, `${rows.map((row) => JSON.stringify(row)).join('\n')}\n`, 'utf8');
}

const records = readJsonl(classificationPath);
const config = readJson(overridesPath);
const summary = readJson(summaryPath);
const byId = new Map(records.map((row) => [row.canonical_id, row]));

const seen = new Set();
for (const override of config.overrides || []) {
  const id = override.canonical_id;
  if (!id) throw new Error('Reviewed override is missing canonical_id.');
  if (seen.has(id)) throw new Error(`Duplicate reviewed override for ${id}.`);
  seen.add(id);

  const row = byId.get(id);
  if (!row) throw new Error(`Reviewed override references unknown canonical ID ${id}.`);

  for (const [key, expected] of Object.entries(override.expected_base || {})) {
    if (row[key] !== expected) {
      throw new Error(`${id}: expected base ${key}=${JSON.stringify(expected)}, got ${JSON.stringify(row[key])}. Base classifier drift requires review before applying override.`);
    }
  }

  const set = override.set || {};
  const requiredSetFields = ['responsibility_state', 'access_class', 'classification_confidence', 'review_status', 'classification_rationale'];
  for (const field of requiredSetFields) {
    if (!Object.hasOwn(set, field)) throw new Error(`${id}: reviewed override missing required set.${field}.`);
  }
  if (!Array.isArray(override.evidence_basis) || override.evidence_basis.length === 0) {
    throw new Error(`${id}: reviewed override must record evidence_basis.`);
  }

  Object.assign(row, set, {
    adjudication: {
      applied: true,
      policy: config.policy,
      authority_issue: config.authority_issue,
      evidence_basis: override.evidence_basis
    }
  });
}

const adjudicated = [...byId.values()].sort((a, b) => a.canonical_id.localeCompare(b.canonical_id));
const ambiguous = adjudicated.filter((row) => Array.isArray(row.ambiguity_reasons) && row.ambiguity_reasons.length > 0);

const states = [...new Set(adjudicated.map((row) => row.responsibility_state))].sort();
const accesses = [...new Set(adjudicated.map((row) => row.access_class))].sort();
summary.status = 'deterministic first-pass classification plus reviewed adjudication overrides; unresolved owner/domain audit remains';
summary.counts_by_responsibility = Object.fromEntries(states.map((state) => [state, adjudicated.filter((row) => row.responsibility_state === state).length]));
summary.counts_by_access = Object.fromEntries(accesses.map((access) => [access, adjudicated.filter((row) => row.access_class === access).length]));
summary.ambiguity_count = ambiguous.length;
summary.high_confidence_count = adjudicated.filter((row) => row.classification_confidence === 'high').length;
summary.safety_free_required_count = adjudicated.filter((row) => row.safety_visibility === 'free_required').length;
summary.safety_split_required_count = adjudicated.filter((row) => row.safety_visibility === 'split_free_awareness_required').length;
summary.reviewed_override_count = seen.size;
summary.reviewed_overrides = [...seen].sort();
summary.adjudication_policy = config.policy;
summary.note = 'Coverage remains 143/143. Reviewed overrides correct only high-confidence base-classifier mismatches; unresolved paywall and mixed-container boundaries remain explicit in the ambiguity queue.';

writeJsonl(classificationPath, adjudicated);
writeJsonl(ambiguityPath, ambiguous);
writeJson(summaryPath, summary);

console.log(`Applied ${seen.size} reviewed responsibility/access override(s).`);
console.log(JSON.stringify(summary.counts_by_responsibility));
console.log(`Remaining ambiguities requiring review: ${ambiguous.length}`);
