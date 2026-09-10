import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const researchDir = path.join(root, 'research');
const matrixDir = path.join(researchDir, 'matrix');
const integrationDir = path.join(researchDir, 'integration');
const generatedResearchDir = path.join(researchDir, 'generated');
const generatedPublicDir = path.join(root, 'data', 'generated');
const ATLAS_ACCESS_STATE = 'locked_unavailable';

const PATHS = {
  mapping: path.join(researchDir, 'analysis', 'vnext-career-guided-course-map-2026-09-07.json'),
  webContract: path.join(integrationDir, 'web-client-content-contract-2026-09-09.json'),
  mediaMap: path.join(integrationDir, 'sitewide-instructional-media-map-2026-09-09.json'),
  provenance: path.join(integrationDir, 'source-citation-regulatory-provenance-2026-09-09.json'),
  atlasRegistry: path.join(integrationDir, 'production-atlas-link-registry-2026-09-09.json'),
  currentInventory: path.join(matrixDir, 'course_inventory.jsonl'),
};

const VIRTUAL_NODES = [
  { id: 'SURFACE-ORIENTATION', type: 'surface', surface: 'start', label: 'Orientation' },
  { id: 'SURFACE-FIELD-SKILLS', type: 'surface', surface: 'field', label: 'Field Skills' },
  { id: 'SURFACE-CONTEXT-LABS', type: 'surface', surface: 'contexts', label: 'Context Labs' },
  { id: 'SURFACE-FIND-WORK', type: 'surface', surface: 'find_work', label: 'Find Work' },
  { id: 'SURFACE-GROW', type: 'surface', surface: 'grow', label: 'Grow' },
  { id: 'SURFACE-ADVANCED', type: 'surface', surface: 'advanced', label: 'Advanced' },
];

function requireFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Required file missing: ${path.relative(root, filePath)}`);
  }
  return filePath;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(requireFile(filePath), 'utf8'));
}

function readJsonl(filePath) {
  if (!fs.existsSync(filePath)) return [];
  return fs.readFileSync(filePath, 'utf8')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => {
      try {
        return JSON.parse(line);
      } catch (error) {
        throw new Error(`${path.relative(root, filePath)}:${index + 1}: ${error.message}`);
      }
    });
}

function readPartitions(kind) {
  if (!fs.existsSync(matrixDir)) return [];
  const patterns = {
    content: /^content(?:_(?!lineage_edges)[^.]+)?\.jsonl$/,
    sources: /^sources(?:_[^.]+)?\.jsonl$/,
    support_edges: /^support_edges(?:_[^.]+)?\.jsonl$/,
    competency_content_edges: /^competency_content_edges(?:_[^.]+)?\.jsonl$/,
    content_lineage_edges: /^content_lineage_edges(?:_[^.]+)?\.jsonl$/,
    reviews: /^reviews(?:_[^.]+)?\.jsonl$/,
    media: /^media(?:_[^.]+)?\.jsonl$/,
  };
  const re = patterns[kind];
  if (!re) throw new Error(`Unknown matrix partition family: ${kind}`);
  return fs.readdirSync(matrixDir)
    .filter((name) => re.test(name))
    .sort()
    .flatMap((name) => readJsonl(path.join(matrixDir, name)));
}

function unique(values) {
  return [...new Set(values.filter((value) => value !== null && value !== undefined && value !== ''))];
}

function maxSafety(values) {
  const rank = new Map([['none', 0], ['low', 1], ['moderate', 2], ['high', 3], ['critical', 4]]);
  return values.filter(Boolean).sort((a, b) => (rank.get(b) ?? -1) - (rank.get(a) ?? -1))[0] || 'unknown';
}

function slug(value) {
  return String(value)
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function writeJsonl(filePath, rows) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${rows.map((row) => JSON.stringify(row)).join('\n')}\n`, 'utf8');
}

function deriveSurface(group) {
  if (!group) return 'learn';
  if (group.node_role === 'field_skill_library') return 'field';
  if (group.lane === 'context_labs' || group.node_role === 'context_reference') return 'contexts';
  if (group.primary_bucket === 'CAREER_BUSINESS_RIGHTS') {
    return group.node_role === 'business_rights_modules' ? 'grow' : 'find_work';
  }
  if (group.node_role?.includes('advanced') || group.visibility?.includes('deep')) return 'advanced';
  if (group.primary_bucket === 'COMMON_FOUNDATION') return 'start';
  if (group.lane_status === 'initial' || group.lane_status === 'future') return 'departments';
  return 'learn';
}

function deriveAtlasRoutes(group) {
  if (!group) return [];
  const routes = [];
  if (group.primary_bucket === 'CAREER_BUSINESS_RIGHTS') routes.push('ATLAS-EMPLOYERS', 'ATLAS-IATSE', 'ATLAS-GUIDE');
  if (group.lane_status === 'initial' || group.lane_status === 'future') routes.push('ATLAS-EMPLOYERS', 'ATLAS-MARKET');
  if (group.node_role === 'career_guide') routes.push('ATLAS-OPPORTUNITIES');
  return unique(routes);
}

function isInternalSource(source) {
  if (!source) return false;
  const owner = String(source.source_owner || '').toLowerCase();
  const type = String(source.evidence_type || '').toLowerCase();
  return owner.includes('crew blueprint') || owner.includes('deadhang') || type.includes('internal');
}

function supportRank(value) {
  const rank = {
    direct: 6,
    strong: 6,
    primary: 6,
    partial: 4,
    corroborating: 3,
    context_only: 2,
    framing_only: 1,
    unsupported: 0,
  };
  return rank[String(value || '').toLowerCase()] ?? 0;
}

const mapping = readJson(PATHS.mapping);
const webContract = readJson(PATHS.webContract);
const mediaMap = readJson(PATHS.mediaMap);
const provenance = readJson(PATHS.provenance);
const atlasRegistry = readJson(PATHS.atlasRegistry);

const mappingGroups = Array.isArray(mapping.mapping_groups) ? mapping.mapping_groups : [];
const mappedCourseIds = mappingGroups.flatMap((group) => group.course_ids || []);
const duplicateMappedIds = mappedCourseIds.filter((id, index) => mappedCourseIds.indexOf(id) !== index);
if (mappedCourseIds.length !== mapping.expected_course_id_count || duplicateMappedIds.length) {
  throw new Error(`Accepted mapping invariant failed: expected ${mapping.expected_course_id_count}, got ${mappedCourseIds.length}, duplicates=${unique(duplicateMappedIds).join(',') || 'none'}`);
}

const groupByCourseId = new Map();
for (const group of mappingGroups) {
  for (const courseId of group.course_ids || []) groupByCourseId.set(courseId, group);
}

const archivedInventoryPath = path.join(root, mapping.source_frontier?.canonical_inventory || '');
const archivedInventory = readJsonl(requireFile(archivedInventoryPath));
const currentInventory = readJsonl(PATHS.currentInventory);
const inventoryById = new Map(archivedInventory.map((row) => [row.course_id, row]));
for (const row of currentInventory) inventoryById.set(row.course_id, { ...inventoryById.get(row.course_id), ...row });

const content = readPartitions('content');
const sources = readPartitions('sources');
const supportEdges = readPartitions('support_edges');
const competencyEdges = readPartitions('competency_content_edges');
const lineageEdges = readPartitions('content_lineage_edges');
const reviews = readPartitions('reviews');
const media = readPartitions('media');

const sourceById = new Map(sources.map((row) => [row.source_id, row]));
const contentByCourse = new Map();
for (const row of content) {
  const courseId = row.course_id || (row.content_type === 'course' ? row.content_id : null);
  if (!courseId) continue;
  if (!contentByCourse.has(courseId)) contentByCourse.set(courseId, []);
  contentByCourse.get(courseId).push(row);
}

const supportByContent = new Map();
for (const edge of supportEdges) {
  if (!supportByContent.has(edge.content_id)) supportByContent.set(edge.content_id, []);
  supportByContent.get(edge.content_id).push(edge);
}

const mediaByCourse = new Map();
for (const row of media) {
  const refs = unique([
    row.course_id,
    ...(Array.isArray(row.course_ids) ? row.course_ids : []),
    ...(Array.isArray(row.content_id_or_course_refs) ? row.content_id_or_course_refs : []),
  ]);
  for (const ref of refs) {
    if (!mappedCourseIds.includes(ref)) continue;
    if (!mediaByCourse.has(ref)) mediaByCourse.set(ref, []);
    mediaByCourse.get(ref).push(row);
  }
}

const reviewsByCourse = new Map();
for (const row of reviews) {
  const directCourseId = row.course_id || null;
  const contentTarget = row.content_id ? content.find((item) => item.content_id === row.content_id) : null;
  const courseId = directCourseId || contentTarget?.course_id || null;
  if (!courseId) continue;
  if (!reviewsByCourse.has(courseId)) reviewsByCourse.set(courseId, []);
  reviewsByCourse.get(courseId).push(row);
}

const learnerEdges = [];
const edgeKeys = new Set();
function addEdge(fromId, toId, relation, metadata = {}) {
  if (!fromId || !toId || fromId === toId) return;
  const key = `${fromId}|${toId}|${relation}`;
  if (edgeKeys.has(key)) return;
  edgeKeys.add(key);
  learnerEdges.push({
    edge_id: `LP-${String(learnerEdges.length + 1).padStart(4, '0')}`,
    from_id: fromId,
    to_id: toId,
    relation,
    hard_prerequisite: false,
    ...metadata,
  });
}

const initialEntryGroups = mappingGroups.filter((group) => group.lane_status === 'initial' && group.node_role?.includes('lane_entry'));
const futureEntryGroups = mappingGroups.filter((group) => group.lane_status === 'future' && group.node_role?.includes('lane_entry'));
const commonGroup = mappingGroups.find((group) => group.primary_bucket === 'COMMON_FOUNDATION');
const fieldGroup = mappingGroups.find((group) => group.node_role === 'field_skill_library');
const contextGroups = mappingGroups.filter((group) => group.lane === 'context_labs' || group.node_role === 'context_reference' || group.primary_bucket === 'CROSS_LANE_CONTEXT');
const careerGroups = mappingGroups.filter((group) => group.primary_bucket === 'CAREER_BUSINESS_RIGHTS');
const commonId = commonGroup?.course_ids?.[0] || null;

if (commonId) addEdge('SURFACE-ORIENTATION', commonId, 'recommended_shared_foundation', { visibility: 'front_door_shared' });
for (const group of initialEntryGroups) {
  const entryId = group.course_ids?.[0];
  addEdge('SURFACE-ORIENTATION', entryId, 'lane_choice', { lane: group.lane, visibility: group.visibility });
  if (commonId) addEdge(commonId, entryId, 'recommended_before_or_during_lane', { lane: group.lane, visibility: group.visibility });
  addEdge(entryId, 'SURFACE-FIND-WORK', 'career_bridge', { lane: group.lane, visibility: 'find_work_grow' });
  addEdge(entryId, 'SURFACE-GROW', 'growth_bridge', { lane: group.lane, visibility: 'find_work_grow' });
}
for (const group of futureEntryGroups) {
  addEdge('SURFACE-ORIENTATION', group.course_ids?.[0], 'future_lane_discovery', { lane: group.lane, visibility: group.visibility });
}

const groupsByLane = new Map();
for (const group of mappingGroups) {
  if (!group.lane) continue;
  if (!groupsByLane.has(group.lane)) groupsByLane.set(group.lane, []);
  groupsByLane.get(group.lane).push(group);
}

for (const [lane, groups] of groupsByLane) {
  const entry = groups.find((group) => group.node_role?.includes('lane_entry'));
  const entryId = entry?.course_ids?.[0];
  const coreGroups = groups.filter((group) => group.node_role?.includes('core') || group.disposition?.includes('SEQUENCED_LANE_CORE'));
  const advancedGroups = groups.filter((group) => group.node_role?.includes('advanced'));
  const specialistGroups = groups.filter((group) => group.node_role?.includes('specialist') || group.lane_status === 'future_specialist');

  let lastCoreId = entryId;
  for (const group of coreGroups) {
    const ids = group.course_ids || [];
    if (entryId && ids[0]) addEdge(entryId, ids[0], 'recommended_next', { lane, visibility: group.visibility });
    for (let index = 0; index < ids.length - 1; index += 1) {
      addEdge(ids[index], ids[index + 1], 'recommended_sequence', { lane, visibility: group.visibility });
    }
    if (ids.length) lastCoreId = ids[ids.length - 1];
  }

  for (const group of advancedGroups) {
    for (const courseId of group.course_ids || []) {
      if (lastCoreId) addEdge(lastCoreId, courseId, 'recommended_after_core', { lane, visibility: group.visibility, gated: group.visibility?.includes('gated') || group.visibility?.includes('owner_review') });
      addEdge('SURFACE-ADVANCED', courseId, 'advanced_catalog_member', { lane, visibility: group.visibility });
    }
  }

  for (const group of specialistGroups) {
    for (const courseId of group.course_ids || []) {
      if (entryId) addEdge(entryId, courseId, 'context_triggered_specialist_awareness', { lane, visibility: group.visibility, gated: true });
    }
  }
}

const stagehandEntry = initialEntryGroups.find((group) => group.lane === 'stagehand_generalist')?.course_ids?.[0];
if (fieldGroup && stagehandEntry) {
  addEdge(stagehandEntry, 'SURFACE-FIELD-SKILLS', 'opens_field_skills_library', { lane: 'stagehand_generalist', visibility: 'lane_library' });
  for (const courseId of fieldGroup.course_ids || []) {
    addEdge('SURFACE-FIELD-SKILLS', courseId, 'optional_library_branch', { lane: 'stagehand_generalist', visibility: fieldGroup.visibility });
  }
}

const situationGroups = mappingGroups.filter((group) => group.node_role === 'situation_first_module');
for (const group of situationGroups) {
  for (const courseId of group.course_ids || []) {
    addEdge('SURFACE-ORIENTATION', courseId, 'situation_first_entry', { lane: group.lane, visibility: group.visibility });
    if (stagehandEntry) addEdge(courseId, stagehandEntry, 'routes_into_lane_entry', { lane: 'stagehand_generalist', visibility: group.visibility });
  }
}

const contextIds = unique(contextGroups.flatMap((group) => group.course_ids || []));
if (contextIds.length) {
  for (const contextId of contextIds) addEdge('SURFACE-CONTEXT-LABS', contextId, 'context_lab_member', { visibility: 'context_labs' });
  for (const group of [...initialEntryGroups, ...futureEntryGroups]) {
    const entryId = group.course_ids?.[0];
    for (const contextId of contextIds) addEdge(entryId, contextId, 'optional_context_overlay', { lane: group.lane, visibility: group.lane_status === 'future' ? 'hidden_until_lane_enabled' : 'context_labs' });
  }
}

for (const group of careerGroups) {
  const surface = group.node_role === 'business_rights_modules' ? 'SURFACE-GROW' : 'SURFACE-FIND-WORK';
  for (const courseId of group.course_ids || []) {
    addEdge(surface, courseId, 'career_resource_member', { lane: group.lane, visibility: group.visibility });
  }
}

const adjacency = new Map();
for (const edge of learnerEdges) {
  if (!adjacency.has(edge.from_id)) adjacency.set(edge.from_id, []);
  adjacency.get(edge.from_id).push(edge.to_id);
}

const usedSourceIds = new Set();
const courseProjection = mappedCourseIds.map((courseId) => {
  const inventory = inventoryById.get(courseId) || { course_id: courseId, title: courseId, publication_state: 'unknown' };
  const group = groupByCourseId.get(courseId);
  const courseContent = contentByCourse.get(courseId) || [];
  const courseContentIds = new Set(courseContent.map((row) => row.content_id));
  const courseSupport = supportEdges.filter((edge) => courseContentIds.has(edge.content_id));
  const courseSourceIds = unique(courseSupport.map((edge) => edge.source_id));
  courseSourceIds.forEach((id) => usedSourceIds.add(id));
  const courseCompetencies = unique(competencyEdges.filter((edge) => courseContentIds.has(edge.content_id) || edge.content_id === courseId).map((edge) => edge.competency_id));
  const courseMedia = mediaByCourse.get(courseId) || [];
  const courseReviews = reviewsByCourse.get(courseId) || [];
  const qualifiers = unique(courseSupport.map((edge) => edge.required_qualifier));
  const authorityOwners = unique(courseSupport.map((edge) => edge.authority_owner));
  const publicationState = inventory.publication_state || courseContent.find((row) => row.content_type === 'course')?.publication_state || 'unknown';
  const routeFile = inventory.route_file || courseContent.find((row) => row.route_file)?.route_file || null;
  const routeExists = routeFile ? fs.existsSync(path.join(root, routeFile)) : false;
  const publicByDefault = ['live', 'public', 'accepted'].includes(publicationState) && !String(group?.visibility || '').includes('hidden') && !String(group?.visibility || '').includes('owner_review');

  return {
    identity: {
      content_id: courseId,
      canonical_course_id: courseId,
      route_id: routeFile,
      title: inventory.title || courseId,
      content_type: 'course_identity',
      version: 'successor-projection-1',
      publication_state: publicationState,
      route_state: routeFile ? (routeExists ? 'materialized' : 'unmaterialized') : 'no_route',
    },
    placement: {
      mapping_group_id: group?.id || null,
      learner_surface: deriveSurface(group),
      career_lane_ids: unique([group?.lane]),
      context_ids: group?.lane === 'context_labs' ? [courseId] : [],
      presentation_tier: inventory.tier_learning || null,
      lane_status: group?.lane_status || null,
      node_role: group?.node_role || null,
      visibility: group?.visibility || null,
      disposition: group?.disposition || null,
      prerequisite_or_recommendation_edges: learnerEdges.filter((edge) => edge.from_id === courseId || edge.to_id === courseId).map((edge) => edge.edge_id),
      public_by_default: publicByDefault,
    },
    learning: {
      competency_ids: courseCompetencies,
      objective: courseContent.find((row) => row.content_type === 'course')?.learner_facing_text || null,
      learner_depth: inventory.tier_learning || null,
      assessment_state: {
        scored_question_count: courseContent.filter((row) => row.content_type === 'question').length,
        completion_is_not_authorization: true,
      },
      practice_state: 'separate_from_completion_and_external_authorization',
    },
    evidence: {
      claim_ids: courseContent.filter((row) => row.content_type === 'claim').map((row) => row.content_id),
      boundary_ids: courseContent.filter((row) => row.content_type === 'boundary').map((row) => row.content_id),
      source_ids: courseSourceIds,
      support_edge_ids: courseSupport.map((edge) => edge.edge_id),
      support_strengths: unique(courseSupport.map((edge) => edge.support_strength)),
      authority_class: unique(courseContent.map((row) => row.authority_class)),
      required_qualifiers: qualifiers,
      last_evidence_review: unique(courseContent.map((row) => row.last_content_reviewed_at).concat(courseReviews.map((row) => row.reviewed_at || row.review_date))).sort().at(-1) || null,
      freshness_state: unique(courseSourceIds.map((id) => sourceById.get(id)?.freshness_class)),
      review_states: unique(courseReviews.map((row) => row.review_status || row.status || row.review_state)),
    },
    boundary: {
      safety_criticality: maxSafety(courseContent.map((row) => row.safety_criticality)),
      qualification_boundary: courseSupport.some((edge) => edge.qualification_required === true) || courseContent.some((row) => String(row.authority_implication || '').includes('qualified')),
      external_authority_owner: authorityOwners,
      stop_or_escalate_message: authorityOwners.length || courseSupport.some((edge) => edge.qualification_required === true)
        ? 'Follow the controlling employer, site, qualified-person, manufacturer, credential, or jurisdictional authority where applicable.'
        : null,
    },
    lineage: {
      source_inventory: path.relative(root, archivedInventoryPath),
      mapping_source: path.relative(root, PATHS.mapping),
      mapping_status: 'accepted_by_pr57_merge_2026-09-09',
      historical_version_refs: unique(lineageEdges.filter((edge) => courseContentIds.has(edge.from_content_id) || courseContentIds.has(edge.to_content_id)).map((edge) => edge.edge_id)),
      v2_ref: 'archive/frozen-v2-exact-2026-09-07',
      clean_sheet_ref: 'archive/frozen-vnext-clean-sheet-exact-2026-09-07',
      v4_presentation_ref: routeFile,
    },
    media: {
      media_ids: unique(courseMedia.map((row) => row.media_id)),
      media_type: unique(courseMedia.map((row) => row.media_type)),
      learning_purpose: unique(courseMedia.map((row) => row.learning_objective || row.learning_purpose)),
      rights_state: unique(courseMedia.map((row) => row.rights_status || row.rights_or_license_state)),
      review_state: unique(courseMedia.map((row) => row.review_state || row.status)),
      safety_review_state: unique(courseMedia.map((row) => row.safety_review_state)),
    },
    work_bridge: {
      atlas_route_ids: [],
      atlas_access_state: ATLAS_ACCESS_STATE,
      volatile_data_owned_by_atlas: true,
    },
    client: {
      navigation_parent: deriveSurface(group),
      return_route: deriveSurface(group) === 'field' ? 'field.html' : deriveSurface(group) === 'contexts' ? 'contexts.html' : deriveSurface(group) === 'find_work' ? 'find-work.html' : 'learn.html',
      related_nodes: unique(adjacency.get(courseId) || []),
      source_panel_enabled: true,
      progress_semantics: 'viewed != completed != assessed != observed_practice != employer_or_site_authorization',
    },
  };
});

const publicSources = [...usedSourceIds]
  .map((sourceId) => sourceById.get(sourceId))
  .filter(Boolean)
  .map((source) => ({
    source_id: source.source_id,
    source_owner: source.source_owner || null,
    title: source.title || null,
    url: String(source.url || '').includes('atlas.thecrewblueprint.com') ? null : (source.url || null),
    evidence_type: source.evidence_type || null,
    authority_level: source.authority_level || null,
    jurisdiction_scope: source.jurisdiction_scope || null,
    access_date: source.access_date || null,
    freshness_class: source.freshness_class || null,
    source_status: source.source_status || null,
  }))
  .sort((a, b) => a.source_id.localeCompare(b.source_id));

const atlasLinksPublic = [];

const publicProjection = {
  schema_version: '1.0.0',
  projection_id: 'crew-blueprint-successor-web-projection-1',
  generated_from: {
    accepted_mapping: path.relative(root, PATHS.mapping),
    web_contract_id: webContract.contract_id,
    atlas_registry_id: atlasRegistry.registry_id,
    canonical_course_count: mappedCourseIds.length,
  },
  invariants: {
    stagehand_not_universal_prerequisite: mapping.rules?.stagehand_not_universal_root === true,
    course_completion_not_authorization: true,
    production_atlas_owns_volatile_work_data: true,
    canonical_ids_retained: true,
  },
  atlas_access: {
    state: ATLAS_ACCESS_STATE,
    learner_tool_available: false,
    links_exposed: false,
  },
  virtual_nodes: VIRTUAL_NODES,
  learner_path_edges: learnerEdges,
  atlas_links: atlasLinksPublic,
  sources: publicSources,
  courses: courseProjection,
};

const mediaBacklog = [];
for (const surface of mediaMap.site_surfaces || []) {
  const preferred = surface.preferred_media || [];
  preferred.forEach((mediaType, index) => {
    const controlled = Boolean(surface.controlled_media_rule || surface.controlled_interfaces?.length || surface.prohibited_default_media?.length || surface.release_rule);
    const lowerType = String(mediaType).toLowerCase();
    let productionMode = 'imagecreator_or_authored_diagram';
    if (lowerType.includes('photo')) productionMode = 'authentic_or_rights-cleared_photo';
    if (lowerType.includes('scenario') || lowerType.includes('micro-practice')) productionMode = 'interactive_or_authored_practice';
    mediaBacklog.push({
      queue_id: `MEDIAQ-${slug(surface.surface)}-${String(index + 1).padStart(2, '0')}`,
      surface: surface.surface,
      course_ids: surface.course_ids || [],
      routes: surface.routes || [],
      media_type: mediaType,
      learner_objectives: surface.objectives || [],
      priority: surface.surface === 'controlled_specialty_awareness' || surface.surface === 'field_skills_library' ? 'high' : controlled ? 'medium_high' : 'normal',
      production_mode: productionMode,
      controlled_interfaces: surface.controlled_interfaces || [],
      prohibited_default_media: surface.prohibited_default_media || [],
      boundary: surface.controlled_media_rule || surface.media_boundary || surface.release_rule || surface.rule || null,
      review_required: controlled,
      provenance_required: true,
      alt_or_text_equivalent_required: true,
      status: 'planned',
      source_contract: path.relative(root, PATHS.mediaMap),
    });
  });
}

const internalPolicyBoundaries = [];
const sourceGapQueue = [];
for (const row of content) {
  if (!['claim', 'boundary'].includes(row.content_type)) continue;
  const edges = supportByContent.get(row.content_id) || [];
  const externalEdges = edges.filter((edge) => !isInternalSource(sourceById.get(edge.source_id)));
  const internalPolicyCandidate = ['crew_blueprint_framework', 'safety_boundary'].includes(row.content_classification) && externalEdges.length === 0;
  if (internalPolicyCandidate) {
    internalPolicyBoundaries.push({
      boundary_id: `POLICY-${row.content_id}`,
      content_id: row.content_id,
      course_id: row.course_id || null,
      safety_criticality: row.safety_criticality || null,
      content_classification: row.content_classification,
      state: 'internal_policy_only',
      publication_rule: 'May render only as Crew Blueprint product policy/boundary; do not present as external law, manufacturer rule, credential requirement, or universal industry fact.',
    });
    continue;
  }

  const strengths = unique(externalEdges.map((edge) => edge.support_strength));
  const strongest = Math.max(0, ...strengths.map(supportRank));
  const reviewNeeded = row.safety_criticality === 'high' && externalEdges.some((edge) => !['verified', 'approved', 'practitioner_reviewed'].includes(edge.review_status));
  let gapType = null;
  if (externalEdges.length === 0) gapType = 'missing_external_support';
  else if (strongest < supportRank('partial')) gapType = 'insufficient_directness';
  else if (reviewNeeded) gapType = 'high_safety_review_needed';
  else if (strengths.includes('partial') && !strengths.some((value) => supportRank(value) >= supportRank('direct'))) gapType = 'partial_support_review';
  if (!gapType) continue;

  sourceGapQueue.push({
    gap_id: `GAP-${row.content_id}`,
    content_id: row.content_id,
    course_id: row.course_id || null,
    gap_type: gapType,
    priority: row.safety_criticality === 'high' || reviewNeeded ? 'high' : strongest <= supportRank('context_only') ? 'medium_high' : 'medium',
    safety_criticality: row.safety_criticality || null,
    content_classification: row.content_classification || null,
    authority_implication: row.authority_implication || null,
    current_external_source_ids: externalEdges.map((edge) => edge.source_id),
    current_support_strengths: strengths,
    required_qualifiers: unique(edges.map((edge) => edge.required_qualifier)),
    required_action: gapType === 'missing_external_support'
      ? 'Locate an applicable qualified/primary source or reframe as independently valid internal policy.'
      : gapType === 'high_safety_review_needed'
        ? 'Complete qualified/practitioner review and preserve applicability/authorization boundaries.'
        : 'Strengthen direct claim support, applicability, edition/freshness, or qualifiers before treating the statement as established external fact.',
  });
}

sourceGapQueue.sort((a, b) => {
  const priorityRank = { high: 3, medium_high: 2, medium: 1 };
  return (priorityRank[b.priority] || 0) - (priorityRank[a.priority] || 0) || a.content_id.localeCompare(b.content_id);
});
internalPolicyBoundaries.sort((a, b) => a.content_id.localeCompare(b.content_id));
mediaBacklog.sort((a, b) => a.queue_id.localeCompare(b.queue_id));
learnerEdges.sort((a, b) => a.edge_id.localeCompare(b.edge_id));

writeJsonl(path.join(generatedResearchDir, 'learner-path-edges.jsonl'), learnerEdges);
writeJson(path.join(generatedResearchDir, 'production-atlas-link-registry.json'), atlasRegistry);
writeJsonl(path.join(generatedResearchDir, 'instructional-media-backlog.jsonl'), mediaBacklog);
writeJsonl(path.join(generatedResearchDir, 'source-gap-closure-queue.jsonl'), sourceGapQueue);
writeJsonl(path.join(generatedResearchDir, 'internal-policy-boundaries.jsonl'), internalPolicyBoundaries);
writeJson(path.join(generatedPublicDir, 'web-client-projection.json'), publicProjection);
writeJson(path.join(generatedPublicDir, 'learner-path-edges.json'), { schema_version: '1.0.0', virtual_nodes: VIRTUAL_NODES, edges: learnerEdges });
writeJson(path.join(generatedPublicDir, 'production-atlas-links.json'), { schema_version: '1.0.0', registry_id: atlasRegistry.registry_id, access_state: ATLAS_ACCESS_STATE, learner_tool_available: false, links: atlasLinksPublic });

console.log(`Generated successor projection for ${courseProjection.length} canonical course identities.`);
console.log(`Learner-path edges: ${learnerEdges.length}`);
console.log(`Production Atlas stable links: ${atlasLinksPublic.length}`);
console.log(`Instructional-media queue items: ${mediaBacklog.length}`);
console.log(`External source-gap queue items: ${sourceGapQueue.length}`);
console.log(`Internal-policy boundaries separated: ${internalPolicyBoundaries.length}`);
console.log(`Public sources projected: ${publicSources.length}`);
console.log(`Provenance contract: ${provenance.map_id}`);
