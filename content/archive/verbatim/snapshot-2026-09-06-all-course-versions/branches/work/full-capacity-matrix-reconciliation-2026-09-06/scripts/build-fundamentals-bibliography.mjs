import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '..');
const researchDirectory = path.join(repositoryRoot, 'research');
const bibliographyPath = path.join(
  repositoryRoot,
  'visuals',
  'stagehand-fundamentals',
  'bibliography.html',
);

const packetGroups = [
  {
    name: 'Direct Stagehand Fundamentals lineage',
    description: 'The source map, original archives, validation packets, gap audits, and authenticity audit that directly support or document the ten-module course.',
    packets: [
      ['02 Map', '02-source-master-map.md', 'Canonical evidence map', 'Modules 1–10', 'Active crosswalk'],
      ['P14', '14-stagehand-fundamentals-original-source.md', 'Original course source archive', 'Modules 1–10', 'Lineage archive'],
      ['P14A', '14A-stagehand-fundamentals-module-1-source.json.md', 'Original Module 1 source archive', 'Module 1', 'Lineage archive'],
      ['P15', '15-stagehand-fundamentals-entry-level-role-validation.md', 'Entry-level role validation', 'Modules 1 and 6', 'Active evidence'],
      ['P16', '16-stagehand-fundamentals-safety-ppe-validation.md', 'Safety and PPE validation', 'Modules 2 and 3', 'Active evidence'],
      ['P17', '17-stagehand-fundamentals-jobsite-hazard-awareness-validation.md', 'Jobsite hazard-awareness validation', 'Module 4', 'Active evidence'],
      ['P18', '18-stagehand-fundamentals-load-in-load-out-validation.md', 'Load-in and load-out validation', 'Modules 5 and 9', 'Active evidence'],
      ['P19', '19-stagehand-fundamentals-tools-handling-hiring-career-growth-validation.md', 'Tools, handling, hiring, and career-growth validation', 'Modules 8 and 10', 'Active evidence'],
      ['P20', '20-stagehand-fundamentals-gap-audit-and-supplemental-validation.md', 'Canonical gap audit and supplemental validation', 'Modules 1–10', 'Active evidence'],
      ['P20A', '20A-stagehand-fundamentals-gap-audit-addendum.md', 'Targeted gap-audit addendum', 'Modules 1–10', 'Active companion'],
      ['CBR-021-SHF-AUDIT', '21-stagehand-fundamentals-authenticity-audit-and-bibliography.md', 'Authenticity audit and bibliography evidence', 'Modules 1–10', 'Active audit'],
    ],
  },
  {
    name: 'Module 7 department-awareness support',
    description: 'Department packets used to keep the awareness-level overview accurate without teaching specialist authority.',
    packets: [
      ['P07', '07-ground-hand-lighting-support.md', 'Lighting support boundaries', 'Module 7', 'Active evidence'],
      ['P08', '08-ground-hand-video-wall-support.md', 'Video-wall support boundaries', 'Module 7', 'Active evidence'],
      ['P08A', '08A-note-led-wall-model-specific-handling-boundaries.md', 'LED-wall model-specific clarification', 'Module 7', 'Active companion'],
      ['P09', '09-ground-hand-audio-support.md', 'Audio support boundaries', 'Module 7', 'Active evidence'],
      ['P10', '10-ground-hand-staging-carpentry-support.md', 'Staging and carpentry support boundaries', 'Module 7', 'Active evidence'],
      ['P11', '11-ground-hand-backline-props-wardrobe-support.md', 'Backline, props, and wardrobe support boundaries', 'Module 7', 'Active evidence'],
      ['P11A', '11A-note-sensitive-show-items-and-performer-owned-gear.md', 'Sensitive and performer-owned item clarification', 'Module 7', 'Active companion'],
    ],
  },
  {
    name: 'Background and curriculum-context research',
    description: 'Earlier research that informs course positioning, career context, safety sequencing, department branching, and training boundaries. It is context, not a claim that every finding appears in a lesson.',
    packets: [
      ['P01', '01-general-stagehand-career-levels-us-live-events.md', 'General stagehand career levels', 'Modules 1 and 10 context', 'Background research'],
      ['P02', '02-department-skill-progressions-us-live-events.md', 'Department skill progressions', 'Modules 7 and 10 context', 'Background research'],
      ['P03', '03-live-events-career-lanes-warehouse-touring-venue.md', 'Warehouse, touring, and venue career lanes', 'Modules 1 and 10 context', 'Background research'],
      ['P04', '04-safety-training-timing-crowd-weather-electrical-risk-assessment.md', 'Safety-training timing and risk awareness', 'Modules 2–4 context', 'Background research'],
      ['P04A', '04A-note-stagehand-public-area-material-interaction-awareness.md', 'Public-area interaction clarification', 'Module 4 context', 'Active companion'],
      ['P05', '05-stage-management-and-cross-cutting-production-leadership.md', 'Stage management and production leadership', 'Modules 1 and 6 context', 'Background research'],
      ['P06', '06-training-certification-curriculum-progression-models.md', 'Training and certification progression models', 'Course-boundary context', 'Background research'],
    ],
  },
];

const relatedRecords = [
  ['Sourcing brief', '00B-stagehand-fundamentals-sourcing-brief.md', 'The brief that commissioned the Fundamentals validation packets.'],
  ['Architecture audit', 'STAGEHAND_FUNDAMENTALS_ARCHITECTURE_AUDIT_2026-08-30.md', 'The no-loss crosswalk for all 34 lessons and four delivery parts.'],
  ['Curriculum tier matrix', 'CURRICULUM_TIER_AND_BUILD_MATRIX_2026-08-30.md', 'The current learner-claim, evidence-lineage, and release-gate map.'],
  ['Research corpus run log', 'RESEARCH_CORPUS_RUN_LOG_2026-08-30.md', 'The complete 60-file Crew Blueprint research inventory and course-to-evidence map.'],
  ['Research library guide', 'README.md', 'The source hierarchy, interpretation rules, and current handoff guidance.'],
];

const sourceCategoryOrder = [
  'Government, law, and standards',
  'Union and professional guidance',
  'Employer and career evidence',
  'Education and training',
  'Manufacturer and technical guidance',
  'Industry and other collected evidence',
];

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const cleanLabel = (value) => String(value)
  .replace(/[`*_#]/g, '')
  .replace(/\s+/g, ' ')
  .trim();

function normalizeUrl(rawUrl) {
  const cleaned = rawUrl
    .replaceAll('&amp;', '&')
    .replace(/[\\.,;:!?]+$/g, '')
    .trim();

  try {
    const parsed = new URL(cleaned);
    parsed.hostname = parsed.hostname.toLowerCase();
    for (const key of [...parsed.searchParams.keys()]) {
      if (/^(utm_|gclid$|fbclid$|mc_)/i.test(key)) parsed.searchParams.delete(key);
    }
    if (parsed.pathname.length > 1) parsed.pathname = parsed.pathname.replace(/\/$/, '');
    return parsed.toString();
  } catch {
    return null;
  }
}

function fallbackLabel(url) {
  const parsed = new URL(url);
  const pathLabel = decodeURIComponent(parsed.pathname)
    .split('/')
    .filter(Boolean)
    .at(-1)
    ?.replace(/[-_]+/g, ' ')
    .replace(/\.[a-z0-9]{2,5}$/i, '')
    .trim();
  return pathLabel ? `${parsed.hostname} — ${pathLabel}` : parsed.hostname;
}

function classifySource(url) {
  const host = new URL(url).hostname.replace(/^www\./, '');
  if (/\.gov$|osha\.gov|ecfr\.gov|cdc\.gov|nist\.gov|weather\.gov|legislature|law\.cornell/.test(host)) {
    return 'Government, law, and standards';
  }
  if (/iatse|union|aflcio|stagecraft|etcp|esta|usitt/.test(host)) {
    return 'Union and professional guidance';
  }
  if (/workdayjobs|greenhouse|governmentjobs|teamworkonline|indeed|careers|jobs\.|livenation|asmglobal|aegworldwide|rhino|crew1/.test(host)) {
    return 'Employer and career evidence';
  }
  if (/\.edu$|training|university|college|school/.test(host)) {
    return 'Education and training';
  }
  if (/qsc|protapes|3m\.|neutrik|shure|yamaha|dandb|l-acoustics|meyersound|chamsys|etcconnect|avolites|grandma|disguise|barco|roevisual|gerriets|tensator|checkers|yellowjacket|vestil|grainger/.test(host)) {
    return 'Manufacturer and technical guidance';
  }
  return 'Industry and other collected evidence';
}

function packetLink(filename) {
  return `https://github.com/thecrewblueprint-glitch/thecrewblueprint/blob/main/research/${filename}`;
}

function chooseLabel(existing, candidate, url) {
  const fallback = fallbackLabel(url);
  const usable = cleanLabel(candidate || '');
  if (!usable || usable.length < 4 || usable.length > 180 || /^https?:/i.test(usable) || /^\d+$/.test(usable)) {
    return existing || fallback;
  }
  if (!existing || existing === fallback || usable.length > existing.length) return usable;
  return existing;
}

function extractPacketSources(markdown) {
  const labels = new Map();
  const markdownLinkPattern = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
  for (const match of markdown.matchAll(markdownLinkPattern)) {
    const normalized = normalizeUrl(match[2]);
    if (normalized) labels.set(normalized, chooseLabel(labels.get(normalized), match[1], normalized));
  }

  const urls = new Set();
  const rawUrlPattern = /https?:\/\/[^\s<>"')\]}]+/g;
  for (const match of markdown.matchAll(rawUrlPattern)) {
    const normalized = normalizeUrl(match[0]);
    if (normalized) urls.add(normalized);
  }

  return [...urls].map((url) => ({
    url,
    label: labels.get(url) || fallbackLabel(url),
  }));
}

const allPackets = packetGroups.flatMap((group) => group.packets.map((packet) => ({
  group: group.name,
  id: packet[0],
  filename: packet[1],
  title: packet[2],
  appliesTo: packet[3],
  status: packet[4],
})));

const sources = new Map();
for (const packet of allPackets) {
  const markdown = await readFile(path.join(researchDirectory, packet.filename), 'utf8');
  const packetSources = extractPacketSources(markdown);
  packet.sourceCount = packetSources.length;

  for (const packetSource of packetSources) {
    const existing = sources.get(packetSource.url) || {
      url: packetSource.url,
      label: packetSource.label,
      packets: new Set(),
      category: classifySource(packetSource.url),
    };
    existing.label = chooseLabel(existing.label, packetSource.label, packetSource.url);
    existing.packets.add(packet.id);
    sources.set(packetSource.url, existing);
  }
}

const sortedSources = [...sources.values()].sort((left, right) => {
  const categoryDifference = sourceCategoryOrder.indexOf(left.category) - sourceCategoryOrder.indexOf(right.category);
  if (categoryDifference) return categoryDifference;
  const leftHost = new URL(left.url).hostname;
  const rightHost = new URL(right.url).hostname;
  return leftHost.localeCompare(rightHost) || left.label.localeCompare(right.label);
});

const packetByFilename = new Map(allPackets.map((packet) => [packet.filename, packet]));

function renderPacketGroup(group) {
  const cards = group.packets.map((packetData) => {
    const packet = packetByFilename.get(packetData[1]);
    return `<article class="packet-card">
  <div class="packet-card-head"><span class="packet-id">${escapeHtml(packet.id)}</span><span class="packet-status">${escapeHtml(packet.status)}</span></div>
  <h4><a href="${escapeHtml(packetLink(packet.filename))}" target="_blank" rel="noopener noreferrer">${escapeHtml(packet.title)}</a></h4>
  <p>${escapeHtml(packet.appliesTo)} · ${packet.sourceCount} collected external URL${packet.sourceCount === 1 ? '' : 's'}</p>
  <code>${escapeHtml(packet.filename)}</code>
</article>`;
  }).join('\n');

  return `<section class="packet-group">
  <h3>${escapeHtml(group.name)}</h3>
  <p>${escapeHtml(group.description)}</p>
  <div class="packet-grid">${cards}</div>
</section>`;
}

const relatedRecordItems = relatedRecords.map(([label, filename, description]) => (
  `<li><a href="${escapeHtml(packetLink(filename))}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a> — ${escapeHtml(description)}</li>`
)).join('');

const categoryNotes = new Map([
  ['Government, law, and standards', `<tr class="source-note"><td colspan="3"><em>Note (added 2026-09-01): OSHA has no entertainment-industry-specific standard and treats live-event/entertainment work as general industry (29 CFR 1910), not construction (29 CFR 1926) — confirmed via OSHA's own 1997 standard interpretation letter, <a href="https://www.osha.gov/laws-regs/standardinterpretations/1997-01-28" target="_blank" rel="noopener noreferrer">"Fall protection for the entertainment industry"</a>. Several 29 CFR 1926 entries below (Subpart CC cranes/derricks/rigging/signals, Subpart L scaffolds) are construction-industry standards included here for comparative research background only — they are not controlling law for typical touring/festival/concert work, and should not be read as directly authorizing or governing entertainment rigging, hoisting, or scaffold-adjacent tasks. Where a real general-industry equivalent exists (e.g. 29 CFR 1910.184, Slings, for rigging hardware), that is the applicable citation instead.</em></td></tr>`],
]);

let previousCategory = null;
const sourceRows = sortedSources.map((source) => {
  const host = new URL(source.url).hostname.replace(/^www\./, '');
  const packetIds = [...source.packets].sort();
  const categoryDivider = source.category !== previousCategory
    ? `<tr class="source-category"><th colspan="3">${escapeHtml(source.category)}</th></tr>${categoryNotes.get(source.category) || ''}`
    : '';
  previousCategory = source.category;
  const searchText = [source.label, source.url, host, source.category, ...packetIds].join(' ').toLowerCase();
  return `${categoryDivider}<tr class="source-row" data-search="${escapeHtml(searchText)}">
  <td><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)}</a><span class="source-domain">${escapeHtml(host)}</span></td>
  <td>${packetIds.map((id) => `<span class="source-packet">${escapeHtml(id)}</span>`).join(' ')}</td>
  <td>${escapeHtml(source.category)}</td>
</tr>`;
}).join('\n');

const provenanceHtml = `<!-- GENERATED:FUNDAMENTALS_PROVENANCE:START -->
<div class="section" id="research-packets">
  <h2>📚 Complete Research Packet Lineage</h2>
  <p><strong>${allPackets.length} Fundamentals-relevant research, archive, map, audit, and companion records are indexed below.</strong> Direct evidence, Module 7 department support, and background curriculum context are labeled separately so a background packet is not mistaken for proof of every current lesson claim.</p>
  <div class="warning-box"><strong>Scope:</strong> This course page includes every collected packet used for Stagehand Fundamentals lineage, validation, department-awareness support, or documented curriculum context. Research written only for later Course 2, Course 3, lead, supervisor, strategic, or field-skill courses is not presented as Fundamentals evidence. The complete project-wide 60-file inventory remains available in the Research Corpus Run Log below.</div>
  ${packetGroups.map(renderPacketGroup).join('\n')}
  <h3>Related provenance and architecture records</h3>
  <ul class="provenance-list">${relatedRecordItems}</ul>
</div>

<div class="section" id="complete-source-ledger">
  <h2>🔗 Complete Collected Source Ledger</h2>
  <p><strong>${sortedSources.length} unique collected external URLs</strong> appear across the ${allPackets.length} Fundamentals-relevant records after mechanical URL normalization and deduplication. The packet badges show where each URL entered the research trail.</p>
  <div class="warning-box"><strong>Evidence status:</strong> “Collected” does not mean every historical link was rechecked today or that every source supports every lesson. The curated sections above show the primary learner-facing sources and qualifications. This ledger preserves the complete research trail for audit and follow-up.</div>
  <div class="source-controls">
    <label for="sourceSearch">Search the source ledger</label>
    <input id="sourceSearch" type="search" placeholder="Search organization, topic, domain, category, or packet ID" autocomplete="off">
    <span id="sourceCount" aria-live="polite">Showing ${sortedSources.length} of ${sortedSources.length} sources</span>
  </div>
  <div class="table-container source-ledger-container">
    <table id="completeSourceTable">
      <thead><tr><th>Collected source</th><th>Research packet(s)</th><th>Source class</th></tr></thead>
      <tbody>${sourceRows}</tbody>
    </table>
  </div>
</div>
<!-- GENERATED:FUNDAMENTALS_PROVENANCE:END -->`;

const generatedCss = `/* GENERATED:FUNDAMENTALS_PROVENANCE_CSS:START */
.packet-group{margin-top:30px}.packet-group>h3{margin:0 0 6px;color:var(--text)}.packet-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.packet-card{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:14px;min-width:0}.packet-card-head{display:flex;justify-content:space-between;gap:10px;align-items:center}.packet-id,.source-packet{display:inline-block;border-radius:999px;padding:2px 7px;background:rgba(244,180,0,.16);color:var(--gold);font-size:10px;font-weight:700}.packet-status{color:var(--muted);font-size:10px;text-transform:uppercase;letter-spacing:.04em}.packet-card h4{margin:9px 0 6px;font-size:14px}.packet-card h4 a,.provenance-list a{color:var(--gold);text-decoration:none}.packet-card h4 a:hover,.provenance-list a:hover{text-decoration:underline}.packet-card p{margin:0 0 8px;font-size:12px}.packet-card code{display:block;overflow-wrap:anywhere;color:var(--muted);font-size:10px}.provenance-list{padding-left:20px}.provenance-list li{margin:8px 0;color:var(--muted)}.source-controls{display:grid;grid-template-columns:auto minmax(220px,1fr) auto;gap:10px;align-items:center;margin:16px 0}.source-controls label{font-size:12px;font-weight:700;color:var(--gold)}.source-controls input{width:100%;border:1px solid var(--border);border-radius:7px;background:var(--card);color:var(--text);padding:10px 12px}.source-controls span{color:var(--muted);font-size:11px}.source-ledger-container{max-height:70vh;border:1px solid var(--border);border-radius:8px}.source-ledger-container table{margin:0}.source-ledger-container thead{position:sticky;top:0;z-index:2}.source-category th{background:#10151b;color:var(--gold);text-transform:uppercase;letter-spacing:.05em}.source-domain{display:block;margin-top:4px;color:var(--muted);font-size:10px}.source-row[hidden],.source-category[hidden]{display:none}.source-packet{margin:2px 2px 2px 0}.source-row td:nth-child(2){min-width:180px}.source-row td:nth-child(3){min-width:170px;color:var(--muted)}
@media(max-width:760px){.packet-grid{grid-template-columns:1fr}.source-controls{grid-template-columns:1fr}.source-ledger-container{max-height:none}.source-row td:nth-child(2),.source-row td:nth-child(3){min-width:150px}}
/* GENERATED:FUNDAMENTALS_PROVENANCE_CSS:END */`;

const generatedScript = `<!-- GENERATED:FUNDAMENTALS_PROVENANCE_SCRIPT:START -->
<script>
(() => {
  const returnLink = document.getElementById('returnToCourse');
  const setReturnTarget = (rawTarget, baseUrl) => {
    if (!returnLink || !rawTarget) return false;
    try {
      const target = new URL(rawTarget, baseUrl);
      const sameOrigin = target.origin === window.location.origin;
      const coursePath = /\\/courses\\/stagehand-fundamentals\\.html$/.test(target.pathname);
      const visualPath = /\\/visuals\\/stagehand-fundamentals\\/index\\.html$/.test(target.pathname);
      const mapPath = /\\/lms-dashboard\\.html$/.test(target.pathname);
      if (sameOrigin && (coursePath || visualPath || mapPath)) {
        returnLink.href = target.href;
        returnLink.textContent = coursePath ? '← Back to the course' : visualPath ? '← Back to the course visuals' : '← Back to the course map';
        return true;
      }
    } catch {
      // The stable fallback already points to Stagehand Fundamentals.
    }
    return false;
  };

  const explicitReturn = new URLSearchParams(window.location.search).get('return');
  const explicitReturnApplied = setReturnTarget(explicitReturn, window.location.href);
  if (!explicitReturnApplied) {
    setReturnTarget(document.referrer, window.location.href);
  }

  const input = document.getElementById('sourceSearch');
  const count = document.getElementById('sourceCount');
  const rows = [...document.querySelectorAll('#completeSourceTable .source-row')];
  const categoryRows = [...document.querySelectorAll('#completeSourceTable .source-category')];
  if (!input || !count || rows.length === 0) return;

  const updateSourceFilter = () => {
    const query = input.value.trim().toLowerCase();
    let visible = 0;
    for (const row of rows) {
      const matches = !query || row.dataset.search.includes(query);
      row.hidden = !matches;
      if (matches) visible += 1;
    }

    for (const categoryRow of categoryRows) {
      let next = categoryRow.nextElementSibling;
      let hasVisibleSource = false;
      while (next && !next.classList.contains('source-category')) {
        if (next.classList.contains('source-row') && !next.hidden) hasVisibleSource = true;
        next = next.nextElementSibling;
      }
      categoryRow.hidden = !hasVisibleSource;
    }
    count.textContent = \`Showing \${visible} of \${rows.length} sources\`;
  };

  input.addEventListener('input', updateSourceFilter);
})();
</script>
<!-- GENERATED:FUNDAMENTALS_PROVENANCE_SCRIPT:END -->`;

let page = await readFile(bibliographyPath, 'utf8');

const provenanceStart = '<!-- GENERATED:FUNDAMENTALS_PROVENANCE:START -->';
const provenanceIndex = page.indexOf(provenanceStart);
if (provenanceIndex < 0) throw new Error('Could not find the generated provenance start marker.');
const numberingMarker = '<!-- FUNDAMENTALS_NUMBERING:CANONICAL -->';
let curatedSection = page.slice(0, provenanceIndex);
if (!curatedSection.includes(numberingMarker)) {
  curatedSection = `${curatedSection}${numberingMarker}`;
}
page = `${curatedSection}${page.slice(provenanceIndex)}`;

page = page.replace(
  /<nav>.*?<\/nav>/s,
  '<nav><a id="returnToCourse" href="../../courses/stagehand-fundamentals.html">← Back to Stagehand Fundamentals</a><a href="#research-packets">Research packets</a><a href="#complete-source-ledger">Complete source ledger</a></nav>',
);

const provenancePattern = /<!-- GENERATED:FUNDAMENTALS_PROVENANCE:START -->.*?<!-- GENERATED:FUNDAMENTALS_PROVENANCE:END -->/s;
const legacyMethodPattern = /<div class="section"><h2>🔍 How This Bibliography Was Built<\/h2>.*?<\/div><\/div>(?=<div class="foot">)/s;
if (provenancePattern.test(page)) {
  page = page.replace(provenancePattern, provenanceHtml);
} else if (legacyMethodPattern.test(page)) {
  page = page.replace(legacyMethodPattern, provenanceHtml);
} else {
  throw new Error('Could not find the generated provenance block or the legacy bibliography-method section.');
}

const cssPattern = /\/\* GENERATED:FUNDAMENTALS_PROVENANCE_CSS:START \*\/.*?\/\* GENERATED:FUNDAMENTALS_PROVENANCE_CSS:END \*\//s;
if (cssPattern.test(page)) {
  page = page.replace(cssPattern, generatedCss);
} else {
  page = page.replace('</style>', `${generatedCss}</style>`);
}

const scriptPattern = /<!-- GENERATED:FUNDAMENTALS_PROVENANCE_SCRIPT:START -->.*?<!-- GENERATED:FUNDAMENTALS_PROVENANCE_SCRIPT:END -->/s;
if (scriptPattern.test(page)) {
  page = page.replace(scriptPattern, generatedScript);
} else {
  page = page.replace('</body>', `${generatedScript}</body>`);
}

await writeFile(bibliographyPath, `${page.trim()}\n`, 'utf8');

console.log('Stagehand Fundamentals bibliography rebuilt.');
console.log(`- ${allPackets.length} Fundamentals-relevant packet records`);
console.log(`- ${sortedSources.length} unique collected external URLs`);
console.log(`- ${relatedRecords.length} related provenance records`);
