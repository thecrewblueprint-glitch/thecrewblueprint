import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const matrixDir = path.join(root, 'research', 'matrix');

function readJsonl(name) {
  const file = path.join(matrixDir, name);
  if (!fs.existsSync(file)) return [];
  const text = fs.readFileSync(file, 'utf8');
  return text
    .split(/\r?\n/)
    .map((line, index) => ({ line: line.trim(), lineNumber: index + 1 }))
    .filter(({ line }) => line.length)
    .map(({ line, lineNumber }) => {
      try {
        return { ...JSON.parse(line), __file: name, __line: lineNumber };
      } catch (error) {
        throw new Error(`${name}:${lineNumber}: invalid JSON — ${error.message}`);
      }
    });
}

function readPartitions(prefix) {
  if (!fs.existsSync(matrixDir)) return [];
  return fs.readdirSync(matrixDir)
    .filter((name) => name.endsWith('.jsonl') && (name === `${prefix}.jsonl` || name.startsWith(`${prefix}_`)))
    .sort()
    .flatMap(readJsonl);
}

function location(row, fallback) {
  return row.__file ? `${row.__file}:${row.__line}` : fallback;
}

function assertUnique(records, key, tableName, errors) {
  const seen = new Map();
  for (const row of records) {
    const value = row[key];
    if (!value) {
      errors.push(`${location(row, tableName)}: missing ${key}`);
      continue;
    }
    if (seen.has(value)) {
      errors.push(`${location(row, tableName)}: duplicate ${key}=${value}; first seen at ${seen.get(value)}`);
    } else {
      seen.set(value, location(row, tableName));
    }
  }
}

function requireFields(records, fields, tableName, errors) {
  records.forEach((row) => {
    for (const field of fields) {
      if (row[field] === undefined || row[field] === null || row[field] === '') {
        errors.push(`${location(row, tableName)}: missing required field ${field}`);
      }
    }
  });
}

const errors = [];
const warnings = [];

// Logical tables may be partitioned physically as table.jsonl + table_<partition>.jsonl.
const content = readPartitions('content');
const sources = readPartitions('sources');
const supportEdges = readPartitions('support_edges');
const competencyEdges = readPartitions('competency_content_edges');
const courseInventory = readJsonl('course_inventory.jsonl');
const fundamentalsMap = readJsonl('fundamentals_lesson_competency_map.jsonl');

assertUnique(content, 'content_id', 'CONTENT', errors);
assertUnique(sources, 'source_id', 'SOURCE', errors);
assertUnique(supportEdges, 'edge_id', 'SUPPORT_EDGE', errors);
assertUnique(competencyEdges, 'competency_content_edge_id', 'COMPETENCY_CONTENT_EDGE', errors);
assertUnique(courseInventory, 'course_id', 'course_inventory.jsonl', errors);
assertUnique(fundamentalsMap, 'lesson_id', 'fundamentals_lesson_competency_map.jsonl', errors);

requireFields(content, ['content_id', 'domain_id_primary', 'content_type', 'course_id', 'tier_learning', 'authority_class', 'learner_facing_text', 'content_classification', 'publication_state'], 'CONTENT', errors);
requireFields(sources, ['source_id', 'source_owner', 'title', 'evidence_type', 'authority_level', 'freshness_class', 'source_status'], 'SOURCE', errors);
requireFields(supportEdges, ['edge_id', 'content_id', 'source_id', 'support_strength', 'review_status'], 'SUPPORT_EDGE', errors);
requireFields(competencyEdges, ['competency_content_edge_id', 'competency_id', 'content_id', 'relationship_type', 'coverage_depth', 'authority_class', 'evidence_state'], 'COMPETENCY_CONTENT_EDGE', errors);
requireFields(courseInventory, ['course_id', 'title', 'route_file', 'domain_id_primary', 'tier_learning', 'inventory_state', 'publication_state'], 'course_inventory.jsonl', errors);
requireFields(fundamentalsMap, ['lesson_id', 'lesson_name', 'module_id', 'primary_competency_id', 'coverage_state'], 'fundamentals_lesson_competency_map.jsonl', errors);

const contentIds = new Set(content.map((row) => row.content_id));
const sourceIds = new Set(sources.map((row) => row.source_id));
const courseIds = new Set(courseInventory.map((row) => row.course_id));

for (const edge of supportEdges) {
  if (!contentIds.has(edge.content_id)) errors.push(`${location(edge, 'SUPPORT_EDGE')}: ${edge.edge_id} references missing content ${edge.content_id}`);
  if (!sourceIds.has(edge.source_id)) errors.push(`${location(edge, 'SUPPORT_EDGE')}: ${edge.edge_id} references missing source ${edge.source_id}`);
}

for (const edge of competencyEdges) {
  if (!contentIds.has(edge.content_id)) errors.push(`${location(edge, 'COMPETENCY_CONTENT_EDGE')}: ${edge.competency_content_edge_id} references missing content ${edge.content_id}`);
  if (!/^(CMP|GATE)-/.test(edge.competency_id)) errors.push(`${location(edge, 'COMPETENCY_CONTENT_EDGE')}: invalid competency/gate ID ${edge.competency_id}`);
}

for (const row of content) {
  if (!courseIds.has(row.course_id)) warnings.push(`${location(row, 'CONTENT')}: course_id ${row.course_id} not yet in course_inventory.jsonl`);
}

for (const course of courseInventory) {
  const courseRecord = content.find((row) => row.content_id === course.course_id && row.content_type === 'course');
  if (!courseRecord) warnings.push(`course ${course.course_id}: canonical inventory exists but CONTENT course record has not yet been backfilled`);
}

for (const row of fundamentalsMap) {
  const ids = [row.primary_competency_id, ...(row.secondary_competency_ids || [])];
  for (const id of ids) {
    if (!/^(CMP|GATE)-/.test(id)) errors.push(`${location(row, 'fundamentals map')}: invalid competency ID ${id}`);
  }
}

const primaryHomes = new Map();
for (const edge of competencyEdges.filter((row) => row.primary_home)) {
  const key = `${edge.competency_id}|${edge.coverage_depth}`;
  const existing = primaryHomes.get(key) || [];
  existing.push(edge);
  primaryHomes.set(key, existing);
}
for (const [key, edges] of primaryHomes) {
  if (edges.length > 1) warnings.push(`multiple primary homes for ${key}: ${edges.map((e) => e.content_id).join(', ')}`);
}

const rootLinkIds = new Set(['S-OSHA-ROOT-CURRENT', 'S-USITT-ROOT-CURRENT', 'S-ESTA-TSP-ROOT-CURRENT']);
for (const edge of supportEdges) {
  if (rootLinkIds.has(edge.source_id) && ['direct', 'corroborating'].includes(edge.support_strength)) {
    errors.push(`${location(edge, 'SUPPORT_EDGE')}: organization/root link ${edge.source_id} cannot be treated as ${edge.support_strength} without exact-source review`);
  }
}

console.log(`Research matrix validation\n- CONTENT: ${content.length}\n- SOURCE: ${sources.length}\n- SUPPORT_EDGE: ${supportEdges.length}\n- COMPETENCY_CONTENT_EDGE: ${competencyEdges.length}\n- COURSE inventory: ${courseInventory.length}\n- Fundamentals lesson mappings: ${fundamentalsMap.length}`);

if (warnings.length) {
  console.log(`\nWarnings (${warnings.length}):`);
  warnings.forEach((warning) => console.log(`- ${warning}`));
}

if (errors.length) {
  console.error(`\nErrors (${errors.length}):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('\nPASS — normalized research matrix is internally consistent for the records currently backfilled.');
