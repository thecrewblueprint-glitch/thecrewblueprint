import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const researchDir = path.join(root, 'research');
const matrixDir = path.join(researchDir, 'matrix');
const viewsDir = path.join(matrixDir, 'views');

function readJsonl(filePath) {
  if (!fs.existsSync(filePath)) return [];
  return fs.readFileSync(filePath, 'utf8')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map(JSON.parse);
}

function readPartitions(prefix) {
  if (!fs.existsSync(matrixDir)) return [];
  const re = prefix === 'competency_content_edges'
    ? /^competency_content_edges(?:_higher_tiers|_hr\d+.*|_stagehand.*)?\.jsonl$/
    : prefix === 'content'
      ? /^content(?:_higher_tiers|_hr\d+.*|_stagehand.*)?\.jsonl$/
      : null;
  if (!re) return [];
  return fs.readdirSync(matrixDir).filter((name) => re.test(name)).sort().flatMap((name) => readJsonl(path.join(matrixDir, name)));
}

function extractGraphNodes() {
  const files = [
    path.join(researchDir, 'CROSS_DOMAIN_COMPETENCY_GRAPH_2026-08-31.md'),
    path.join(researchDir, 'COMPETENCY_GRAPH_EXTENSION_STAGEHAND_OPERATIONS_2026-08-31.md'),
  ];
  const nodes = new Map();
  const idRe = /\b(CMP-[A-Z]+-\d+|GATE-[A-Z0-9][A-Z0-9/-]*)\b/g;

  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    for (const line of lines) {
      for (const match of line.matchAll(idRe)) {
        const id = match[1];
        if (!nodes.has(id)) {
          const cleaned = line
            .replace(/[`*#>|]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
          nodes.set(id, {
            competency_id: id,
            node_type: id.startsWith('GATE-') ? 'external_gate' : 'competency',
            graph_context: cleaned,
            graph_source: path.relative(root, file),
          });
        }
      }
    }
  }
  return [...nodes.values()].sort((a, b) => a.competency_id.localeCompare(b.competency_id));
}

function esc(value) {
  if (value === null || value === undefined || value === '') return '—';
  return String(value).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
}

const graphNodes = extractGraphNodes();
const content = readPartitions('content');
const edges = readPartitions('competency_content_edges');
const contentById = new Map(content.map((row) => [row.content_id, row]));

const stateRank = new Map([
  ['publication_ready', 8],
  ['learner_validated', 7],
  ['practitioner_reviewed', 6],
  ['matrixed', 5],
  ['drafted', 4],
  ['researched', 3],
  ['mapped', 2],
]);

function deriveNodeState(node) {
  if (node.node_type === 'external_gate') {
    return {
      state: 'external_gate',
      owner_color_role: 'gate',
      content_ids: [],
      learner_visible_edges: 0,
      notes: 'External qualification/authorization boundary; Crew Blueprint may point to the gate but does not traverse it.',
    };
  }

  const nodeEdges = edges.filter((edge) => edge.competency_id === node.competency_id && edge.display_on_owner_map !== false);
  if (!nodeEdges.length) {
    return {
      state: 'mapped_only',
      owner_color_role: 'muted',
      content_ids: [],
      learner_visible_edges: 0,
      notes: 'Competency exists in the canonical graph but has no normalized content edge yet.',
    };
  }

  const sorted = nodeEdges.slice().sort((a, b) => (stateRank.get(b.evidence_state) || 0) - (stateRank.get(a.evidence_state) || 0));
  const strongest = sorted[0].evidence_state || 'mapped';
  const hasDrafted = nodeEdges.some((edge) => ['drafted', 'matrixed', 'practitioner_reviewed', 'learner_validated', 'publication_ready'].includes(edge.evidence_state));
  const hasResearchOnly = nodeEdges.some((edge) => edge.evidence_state === 'researched');
  const learnerVisible = nodeEdges.filter((edge) => edge.display_on_learner_map).length;

  let state = strongest;
  let ownerColorRole = 'muted';
  if (hasDrafted) {
    state = strongest;
    ownerColorRole = 'bright';
  } else if (hasResearchOnly) {
    state = 'researched_planned';
    ownerColorRole = 'muted';
  }

  const contentIds = [...new Set(nodeEdges.map((edge) => edge.content_id))];
  const plannedOnly = contentIds.length > 0 && contentIds.every((id) => contentById.get(id)?.publication_state === 'planned');

  return {
    state,
    owner_color_role: ownerColorRole,
    content_ids: contentIds,
    learner_visible_edges: learnerVisible,
    notes: plannedOnly
      ? 'Research/planned content exists but no current learner-facing route is represented by these edges.'
      : hasDrafted
        ? 'At least one current drafted/built content edge exists. Bright owner-map state does not mean practitioner-validated or publication-ready.'
        : 'Mapped/researched state only.',
  };
}

const rows = graphNodes.map((node) => ({ ...node, ...deriveNodeState(node) }));

fs.mkdirSync(viewsDir, { recursive: true });
const out = path.join(viewsDir, 'owner-competency-state.md');
const table = rows.map((row) => `| ${esc(row.competency_id)} | ${esc(row.node_type)} | ${esc(row.state)} | ${esc(row.owner_color_role)} | ${esc(row.graph_context)} | ${esc(row.content_ids.join(', '))} | ${row.learner_visible_edges} | ${esc(row.notes)} |`).join('\n');

const markdown = `# Owner Competency State — Everything Map Data View\n\n**Generated view. Canonical graph + matrix records remain source of truth.**\n\nThis view implements the owner-map state logic requested for the full-scale industry map.\n\n## Display semantics\n\n- **bright** — the competency has drafted/current built content represented in the matrix. This does **not** mean practitioner-reviewed, learner-validated or publication-ready.\n- **muted** — competency is mapped/researched/planned but not currently built to the stronger state.\n- **gate** — external qualification/authorization boundary.\n- **white route** is not stored as completion state; it is computed by a future map renderer from graph adjacency and the selected current-position node(s).\n\n| Competency / Gate | Node type | Current state | Owner color role | Graph context | Linked content | Learner-visible edges | Notes |\n|---|---|---|---|---|---|---:|---|\n${table}\n`;
fs.writeFileSync(out, markdown, 'utf8');

console.log(`Generated ${rows.length} owner-map competency/gate states at ${path.relative(root, out)}`);
