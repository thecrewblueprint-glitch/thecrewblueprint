import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const inventoryPath = path.join(root, 'research', 'matrix', 'course_inventory.jsonl');
const contractPath = path.join(root, 'research', 'integration', 'responsibility-access-contract-2026-09-10.json');
const demandBridgePath = path.join(root, 'research', 'integration', 'job-demand-curriculum-bridge-2026-09-09.json');
const outputDir = path.join(root, 'research', 'generated');

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
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function writeJsonl(file, rows) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${rows.map((row) => JSON.stringify(row)).join('\n')}\n`, 'utf8');
}

const inventory = readJsonl(inventoryPath);
const contract = readJson(contractPath);
const demandBridge = readJson(demandBridgePath);

const demandByCourse = new Map();
for (const join of demandBridge.joins || []) {
  for (const courseId of join.primary_learning_homes || []) {
    if (!demandByCourse.has(courseId)) demandByCourse.set(courseId, []);
    demandByCourse.get(courseId).push(join.demand_domain);
  }
}

const laneByDomain = {
  'D-SHF': 'general_stagehand_production_labor',
  'D-FLD': 'general_stagehand_production_labor',
  'D-LOG': 'shop_warehouse_prep',
  'D-SHP': 'shop_warehouse_prep',
  'D-LTG': 'lighting',
  'D-AUD': 'audio',
  'D-VID': 'video_led_av',
  'D-STG': 'staging_structures',
  'D-RIG': 'rigging_bounded',
  'D-ELC': 'production_power_electrical_bounded',
  'D-BKL': 'backline_props_wardrobe',
  'D-PRP': 'backline_props_wardrobe',
  'D-WRD': 'backline_props_wardrobe',
  'D-LEAD': 'technical_leadership',
  'D-SMG': 'management_reference',
  'D-PMG': 'management_reference',
  'D-VOP': 'management_reference',
  'D-CAR': 'career_worker_reference',
  'D-OUT': 'context_labs',
  'D-ACC': 'accessibility_context',
  'D-SHC': 'cross_department_systems',
  'D-AUT': 'controlled_specialty_awareness',
  'D-FX': 'controlled_specialty_awareness',
  'D-COM': 'cross_department_communication'
};

const explicit = new Map([
  ['C-CAR-FIRST-FIVE', ['ORIENT', 'free', 'general_stagehand_production_labor', 'free_required', 'High-confidence beginner-entry material.']],
  ['C-SHF-FUNDAMENTALS', ['SUPPORT', 'free', 'general_stagehand_production_labor', 'free_required', 'Canonical production-hand readiness foundation.']],
  ['C-COM-WORK', ['SUPPORT', 'free', 'cross_department_communication', 'free_required', 'Shared work communication belongs before technician specialization.']],
  ['C-ELC-POWER-AWARENESS', ['SUPPORT', 'free', 'production_power_electrical_bounded', 'free_required', 'Power hazard/boundary awareness must remain available to hands who encounter distribution.']],
  ['C-RIG-AWARE', ['SUPPORT', 'free', 'rigging_bounded', 'free_required', 'Ground-support and rigging-boundary awareness is appropriate before technician depth.']],
  ['C-RIG-HEIGHT', ['REFERENCE_CONTEXT', 'context', 'controlled_specialty_awareness', 'free_required', 'Work-at-height/rescue interface awareness is safety context, not online qualification.']],
  ['C-PROD-CAREER-BRANCH', ['REFERENCE_CONTEXT', 'context', 'career_worker_reference', 'standard', 'Career comparison remains useful without becoming a management curriculum lane.']],
  ['C-CAR-LADDERS', ['HISTORICAL_SUPERSEDED', 'lineage', 'career_worker_reference', 'standard', 'Universal-ladder premise was previously dispositioned as obsolete; retain lineage only.']],
  ['C-SUP-HAZARD', ['DEEPEN_LEAD', 'paid', 'technical_leadership', 'split_free_awareness_required', 'Advanced predictive/supervisory reasoning may be paid, but baseline hazard recognition and stop-work knowledge must remain free.']],
  ['C-SHC-CYBER', ['REFERENCE_CONTEXT', 'context', 'cross_department_systems', 'free_required', 'Baseline production-network hygiene is cross-lane protective context; deeper network operation belongs in department technician study.']],
  ['C-SUP-EVENT-OPS', ['REFERENCE_CONTEXT', 'context', 'management_reference', 'standard', 'Integrated event-operations container predates clearer role split and should be decomposed/salvaged rather than retained as a primary lane.']]
]);

const careerReferenceIds = new Set([
  'C-CAR-ENTRY', 'C-CAR-PRO', 'C-CAR-UNION', 'C-CAR-CRED',
  'C-CAR-CLASSIFY', 'C-CAR-FREELANCE-BIZ', 'C-CAR-PAYMENT',
  'C-CAR-RECORDS', 'C-CAR-WORKER-RIGHTS'
]);

const managementReferenceIds = new Set([
  'C-SMG-ROLE', 'C-PMG-ROLE', 'C-VOP-ROLE',
  'C-PMG-PAPER', 'C-PMG-COMMS', 'C-PMG-LEARNING',
  'C-PMG-ADVANCE-ARTIFACTS', 'C-PMG-LABOR-SCHEDULE',
  'C-PMG-BUDGET-CHANGE', 'C-PMG-CLOSEOUT'
]);

function isContextId(id) {
  return id.startsWith('C-SECT-') || id === 'C-OUT-FIELD' || id === 'C-OUT-HEAT' || id.startsWith('C-ACC-');
}

function isControlledAwareness(row) {
  const id = row.course_id;
  return id.startsWith('C-FX-') || id.startsWith('C-AUT-');
}

function classify(row) {
  const id = row.course_id;
  const tier = row.tier_learning || '';
  const domain = row.domain_id_primary || '';
  const title = row.title || id;
  let state;
  let access;
  let lane = laneByDomain[domain] || 'cross_lane_context';
  let safety = 'standard';
  let rationale = '';
  let confidence = 'medium';
  let reviewStatus = 'first_pass_review_required';

  if (explicit.has(id)) {
    [state, access, lane, safety, rationale] = explicit.get(id);
    confidence = 'high';
  } else if (id.startsWith('C-FLD-')) {
    state = 'SUPPORT'; access = 'free'; lane = 'general_stagehand_production_labor';
    safety = /RATCHET|FLATBED|BARRICADE|CABLE-PROTECT|DECK|DOCK/.test(id) ? 'free_required' : 'standard';
    rationale = 'Field Skill is hand-level practical support under direction, not independent technical ownership.';
    confidence = 'high';
  } else if (/-SUPPORT$/.test(id)) {
    state = 'SUPPORT'; access = 'free';
    safety = domain === 'D-RIG' || domain === 'D-ELC' ? 'free_required' : 'standard';
    rationale = 'Explicit support course prepares assigned department assistance rather than independent technician responsibility.';
    confidence = 'high';
  } else if (domain === 'D-SHP' || id === 'C-LOG-PRODUCTION') {
    state = 'SUPPORT'; access = 'free'; lane = 'shop_warehouse_prep';
    safety = /TRAFFIC|HAZCOM|BATTERY/.test(id) ? 'free_required' : 'standard';
    rationale = 'Shop/warehouse preparation is a realistic entry route and remains support-level unless later evidence establishes independent specialist responsibility.';
    confidence = tier === 'T3' ? 'high' : 'medium';
  } else if (careerReferenceIds.has(id)) {
    state = 'REFERENCE_CONTEXT'; access = 'context'; lane = 'career_worker_reference';
    safety = id === 'C-CAR-WORKER-RIGHTS' ? 'free_required' : 'standard';
    rationale = 'Valuable worker/career information, but not a technical production competency ladder.';
    confidence = 'high';
  } else if (managementReferenceIds.has(id)) {
    state = 'REFERENCE_CONTEXT'; access = 'context'; lane = 'management_reference';
    safety = id === 'C-PMG-LEARNING' ? 'split_free_awareness_required' : 'standard';
    rationale = 'Administrative/management material is demoted from equal lane status; technical fragments may later be salvaged into department leadership/context nodes.';
    confidence = 'high';
    reviewStatus = 'scope_demotion_and_salvage_review_required';
  } else if (isContextId(id)) {
    state = 'REFERENCE_CONTEXT'; access = 'context'; lane = 'context_labs';
    safety = id === 'C-OUT-HEAT' || id.startsWith('C-ACC-') ? 'free_required' : 'standard';
    rationale = 'Environment/sector/accessibility material should contextualize already-taught principles rather than form a primary technical ladder.';
    confidence = 'high';
  } else if (isControlledAwareness(row)) {
    state = 'REFERENCE_CONTEXT'; access = 'context'; lane = 'controlled_specialty_awareness'; safety = 'free_required';
    rationale = 'Controlled-specialty awareness must communicate hazards/boundaries without implying operation or qualification.';
    confidence = 'high';
  } else if (tier === 'T7') {
    state = 'DEEPEN_LEAD'; access = 'paid'; safety = domain === 'D-ELC' || domain === 'D-RIG' ? 'split_free_awareness_required' : 'standard';
    rationale = 'Advanced system/design depth exceeds hand-level support and belongs behind the technician-responsibility boundary.';
    confidence = 'high';
  } else if (tier === 'T5' || tier === 'T6' || id.startsWith('C-LEAD-')) {
    if (domain === 'D-PMG' || domain === 'D-SMG' || domain === 'D-VOP') {
      state = 'REFERENCE_CONTEXT'; access = 'context'; lane = 'management_reference'; safety = 'standard';
      rationale = 'Higher-level administrative/management material is not a primary Crew Blueprint technical progression under Issue #78.';
      reviewStatus = 'scope_demotion_and_salvage_review_required';
    } else {
      state = 'DEEPEN_LEAD'; access = 'paid';
      safety = domain === 'D-ELC' || domain === 'D-RIG' ? 'split_free_awareness_required' : 'standard';
      rationale = 'Technical leadership/deeper responsibility belongs in paid depth and does not imply appointment to the role.';
    }
    confidence = 'high';
  } else if (tier === 'T4') {
    if (domain === 'D-CAR' || domain === 'D-OUT' || domain === 'D-ACC') {
      state = 'REFERENCE_CONTEXT'; access = 'context';
      rationale = 'Cross-sector/career context is useful but not the technician paywall itself.';
      confidence = 'medium';
    } else {
      state = 'OPERATE'; access = 'paid';
      safety = domain === 'D-ELC' || domain === 'D-RIG' ? 'split_free_awareness_required' : 'standard';
      rationale = 'T4 department systems material is the presumptive technician-knowledge layer; course-level review must confirm the exact SUPPORT→OPERATE boundary.';
      confidence = 'medium';
    }
  } else if (tier === 'T3') {
    state = 'SUPPORT'; access = 'free';
    safety = /AWARE|HAZ|POWER|RIG|OUT|ACC/.test(`${id} ${title}`.toUpperCase()) ? 'free_required' : 'standard';
    rationale = 'T3 material is provisionally treated as department/field support unless course-level review shows independent technician responsibility.';
    confidence = 'medium';
  } else if (tier === 'T0' || tier === 'T1' || tier === 'T2') {
    state = tier === 'T2' ? 'SUPPORT' : 'ORIENT'; access = 'free';
    rationale = 'Early-tier material is presumptively part of orientation/hand readiness unless explicitly reclassified.';
    confidence = 'medium';
  } else {
    state = 'REFERENCE_CONTEXT'; access = 'context';
    rationale = 'No deterministic responsibility mapping rule matched; retain as context pending review rather than inventing a paywall state.';
    confidence = 'low';
    reviewStatus = 'ambiguous_unmatched_review_required';
  }

  const controlled = lane === 'rigging_bounded' || lane === 'production_power_electrical_bounded' || lane === 'controlled_specialty_awareness';
  const roleTargets = [];
  if (lane === 'lighting') roleTargets.push('lighting_hand', 'L2_or_lighting_technician');
  if (lane === 'audio') roleTargets.push('audio_hand', 'A2_or_audio_technician');
  if (lane === 'video_led_av') roleTargets.push('video_hand', 'V2_or_video_led_technician');
  if (lane === 'staging_structures') roleTargets.push('staging_hand', 'staging_technician');
  if (lane === 'backline_props_wardrobe') roleTargets.push('department_support', 'department_technician_or_specialist');
  if (lane === 'general_stagehand_production_labor') roleTargets.push('entry_level_stagehand', 'experienced_stagehand');
  if (lane === 'shop_warehouse_prep') roleTargets.push('warehouse_or_shop_hand');
  if (lane === 'technical_leadership') roleTargets.push('technical_lead_or_crew_chief');

  const demandDomains = [...new Set(demandByCourse.get(id) || [])].sort();
  const credentialEligibility =
    state === 'OPERATE' || state === 'DEEPEN_LEAD'
      ? (controlled ? 'knowledge_record_only_external_qualification_or_authorization_separate' : 'knowledge_record_candidate_practical_experience_separate')
      : state === 'HISTORICAL_SUPERSEDED'
        ? 'not_eligible'
        : 'foundation_or_context_completion_not_technician_credential';

  const ambiguityReasons = [];
  if (confidence !== 'high') ambiguityReasons.push('classification_not_high_confidence');
  if (safety === 'split_free_awareness_required') ambiguityReasons.push('paid_depth_contains_safety_content_that_requires_free_awareness_split');
  if (reviewStatus === 'scope_demotion_and_salvage_review_required') ambiguityReasons.push('administrative_container_may_contain_reusable_technical_content');
  if (state === 'OPERATE' && tier === 'T4') ambiguityReasons.push('course_level_support_to_operate_boundary_must_be_reviewed');

  return {
    canonical_id: id,
    title,
    primary_lane: lane,
    source_domain: domain,
    source_tier_learning: tier,
    source_publication_state: row.publication_state || null,
    responsibility_state: state,
    access_class: access,
    learner_role_targets: roleTargets,
    prerequisite_or_prior_knowledge:
      state === 'ORIENT' ? 'none_or_zero_knowledge' :
      state === 'SUPPORT' ? 'industry_orientation_or_equivalent_prior_knowledge' :
      state === 'OPERATE' ? 'support_level_foundation_or_equivalent_prior_experience' :
      state === 'DEEPEN_LEAD' ? 'technician_foundation_plus_real_world_context_recommended' :
      'context_dependent',
    safety_visibility: safety,
    technical_responsibility_threshold:
      state === 'OPERATE' || state === 'DEEPEN_LEAD'
        ? 'beyond_following_supervised_instructions'
        : 'does_not_grant_independent_technical_ownership',
    employer_requirement_evidence_status: demandDomains.length ? 'existing_planning_signal_join' : 'no_current_normalized_demand_join',
    employer_demand_domains: demandDomains,
    credential_eligibility: credentialEligibility,
    source_lineage: {
      inventory_state: row.inventory_state || null,
      route_file: row.route_file || null,
      competency_family: row.competency_family || null
    },
    classification_confidence: confidence,
    review_status: reviewStatus,
    ambiguity_reasons: ambiguityReasons,
    classification_rationale: rationale,
    non_claim: 'Classification describes curriculum placement only; it does not establish field experience, certification, licensure, qualified-person status, employer authorization, or appointment to a job title.'
  };
}

const records = inventory.map(classify).sort((a, b) => a.canonical_id.localeCompare(b.canonical_id));
const ambiguous = records.filter((row) => row.ambiguity_reasons.length > 0);

const summary = {
  schema_version: '1.0.0',
  date: '2026-09-10',
  status: 'deterministic first-pass classification; owner/domain audit required before learner graph migration',
  contract: 'research/integration/responsibility-access-contract-2026-09-10.json',
  source_inventory: 'research/matrix/course_inventory.jsonl',
  source_demand_bridge: 'research/integration/job-demand-curriculum-bridge-2026-09-09.json',
  expected_count: 143,
  actual_count: records.length,
  unique_ids: new Set(records.map((row) => row.canonical_id)).size,
  counts_by_responsibility: Object.fromEntries([...new Set(records.map((row) => row.responsibility_state))].sort().map((state) => [state, records.filter((row) => row.responsibility_state === state).length])),
  counts_by_access: Object.fromEntries([...new Set(records.map((row) => row.access_class))].sort().map((access) => [access, records.filter((row) => row.access_class === access).length])),
  ambiguity_count: ambiguous.length,
  high_confidence_count: records.filter((row) => row.classification_confidence === 'high').length,
  safety_free_required_count: records.filter((row) => row.safety_visibility === 'free_required').length,
  safety_split_required_count: records.filter((row) => row.safety_visibility === 'split_free_awareness_required').length,
  note: 'This is a coverage-complete first pass, not publication authority. Ambiguous T4 SUPPORT→OPERATE boundaries and administrative-container salvage require human/domain review.'
};

writeJsonl(path.join(outputDir, 'responsibility-access-classification-143.jsonl'), records);
writeJsonl(path.join(outputDir, 'responsibility-access-ambiguities.jsonl'), ambiguous);
writeJson(path.join(outputDir, 'responsibility-access-summary.json'), summary);

console.log(`Generated responsibility/access classification for ${records.length} canonical inventory records.`);
console.log(JSON.stringify(summary.counts_by_responsibility));
console.log(`Ambiguities requiring review: ${ambiguous.length}`);
