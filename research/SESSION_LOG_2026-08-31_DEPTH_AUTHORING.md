# Session Log — Curriculum Depth Authoring

**Workspace:** The Crew Blueprint  
**Local date:** 2026-08-31 (America/New_York)  
**Repository:** `thecrewblueprint-glitch/thecrewblueprint`  
**Work branch:** `curriculum/depth-authoring-2026-08-31`  
**Pull request:** #45  
**Starting main:** `d703c6cb31298524ea177791fdf79a6d94c86075`

## Owner direction

Continue the post-frontier work without stopping for topic-by-topic approval. The immediate priorities were:

1. fully author the 76 remaining research-foundation routes;
2. replace generic assessments with course-specific assessment logic;
3. deepen the matrix from course containers toward claim-level mapping;
4. build the media-production backlog without pretending planned media are completed assets;
5. audit the work after execution;
6. record the session;
7. if validation is clean, merge to `main` and publish through the existing GitHub Pages workflow.

## Starting state

At session start the live curriculum had:

- 44 dedicated learner routes;
- 98 expansion routes;
- 142 mapped learner routes total;
- 22 expansion routes at `authored_frontier`;
- 76 expansion routes at `research_foundation`;
- normalized matrix counts from the previous pass of 599 CONTENT / 169 SOURCE / 360 SUPPORT_EDGE / 439 COMPETENCY_CONTENT_EDGE / 188 RESEARCH_COMPETENCY_EDGE / 277 CONTENT_LINEAGE_EDGE / 84 REVIEW / 5 MEDIA;
- adult/terms/training-limitations consent enforcement;
- structural accessibility CI;
- authority restricted to canonical A0–A4/X;
- explicit external gates for rigging, energized electrical work, powered equipment, structural acceptance, automation operation, special systems, and other controlled work.

## Branch establishment

Created:

`curriculum/depth-authoring-2026-08-31`

from:

`d703c6cb31298524ea177791fdf79a6d94c86075`

No live `main` mutation occurred during authoring.

## Authoring implementation

### `js/ecosystem-depth-authoring.js`

Added a companion authoring layer that upgrades the remaining research-foundation routes without rewriting the canonical base course registry.

For each applicable course it adds:

- explicit learning objectives;
- topic-matched instructional explanations;
- domain-specific system/workflow framing;
- changed-state / failure-recognition scenario;
- five course-specific questions and rationales;
- four claim checkpoints;
- three planned media briefs;
- authoring version;
- review state;
- explicit authority ceiling.

Domain playbooks cover field workflow, warehouse/shop, Lighting, Audio, Video/Broadcast, Staging/Scenic, Rigging BOK, Production Power BOK, Backline, Props, Wardrobe, Crew Leadership, Stage Management, Production Management, Venue Operations, Show Control, Automation awareness, Camera/Broadcast, RF, Special Systems, Career/Employment, and sector-transfer overlays.

Topic-sensitive rules distinguish, among other concepts:

- inventory and custody;
- shop lifecycle;
- dock/logistics;
- photometry/fixture science;
- electrical conceptual literacy;
- DMX/RDM/sACN/Art-Net/network control;
- console/show-file structure;
- documentation/previsualization;
- audio signal flow;
- consoles/buses/matrices;
- acoustics/measurement;
- network clocking;
- RF/intercom;
- LED/video transport/processing;
- projection;
- camera/broadcast;
- media-server/playback;
- AV-over-IP;
- scenic materials/platforms/movement;
- automation interfaces;
- rigging vocabulary/engineering/rescue interfaces;
- backline/props/wardrobe;
- labor/management controls;
- show control;
- venue/public/accessibility interfaces;
- heat/weather;
- career/worker-status/credential distinctions;
- controlled special systems.

## Runtime normalization

### `js/ecosystem-depth-runtime-normalize.js`

Added/iterated a compatibility and consistency layer to:

- normalize legacy question shapes;
- normalize scenario shapes;
- use `gate` as the actual authority boundary;
- provide additional playbooks for Production Logistics, Production Communications, Outdoor/Public-Area Operations, Venue/Event Operations, Crew Leadership, and Special Systems;
- expand the 22 frontier-authored routes to five-question minimums;
- give the 22 frontier routes the same minimum four-claim / three-media-brief planning structure;
- assign authoring-version metadata to all authored expansion routes.

## Learner shell changes

### `courses/ecosystem-course.html`

Loaded the depth authoring/runtime layers while retaining:

- course-consent stylesheet;
- course-consent runtime;
- existing course registry;
- existing frontier expansion;
- normalizer;
- learner runtime.

Added presentation surfaces for:

- course maturity;
- claim checkpoints;
- planned teaching media.

### `js/ecosystem-course.js`

Expanded the generic learner shell so an authored route can display:

- maturity state;
- evidence packet;
- objectives;
- four lesson sections;
- course-specific explanations;
- changed-state scenario;
- claim checkpoints;
- visual-study/media plan;
- practice artifacts where present;
- five-question knowledge check;
- explicit statement that assessment does not create jobsite authority.

## Curriculum map changes

### `curriculum-map.html`

Updated the map to distinguish:

- dedicated route;
- authored frontier;
- authored depth v1;
- research foundation.

The map now shows that the expansion layer has moved beyond research-foundation status while continuing to state that practitioner review, learner validation, media approval, and jobsite authority are separate states.

## Matrix-generation changes

### `scripts/generate-ecosystem-matrix.mjs`

Expanded generation to include:

- authored course inventory metadata;
- course-level CONTENT;
- claim/boundary CONTENT records;
- course -> claim lineage;
- competency -> claim edges;
- research -> competency edges;
- generated course registry;
- course-specific assessment blueprint;
- media-production backlog;
- human-readable ecosystem course evidence matrix;
- human-readable media backlog summary.

Generated data files include:

- `research/matrix/content_ecosystem_courses.jsonl`
- `research/matrix/content_ecosystem_depth_claims.jsonl`
- `research/matrix/competency_content_edges_ecosystem.jsonl`
- `research/matrix/content_lineage_edges_ecosystem_depth.jsonl`
- `research/matrix/research_competency_edges_ecosystem.jsonl`
- `research/matrix/ecosystem_course_registry.generated.jsonl`
- `research/matrix/ecosystem_assessment_blueprint.generated.jsonl`
- `research/matrix/ecosystem_media_backlog.generated.jsonl`

The filename `content_ecosystem_depth_claims.jsonl` now contains the normalized authored expansion claim checkpoints, including the 22 frontier routes as well as the 76 depth-v1 routes. The filename is retained for compatibility in this pass; the record semantics are governed by the content itself and validator.

## Media-state decision

A deliberate governance decision was made not to insert planned visuals into formal normalized MEDIA.

A planned brief becomes a formal MEDIA record only after there is an actual asset with truthful data for:

- source/rightsholder;
- allowed use;
- accessibility fallback;
- safety review where relevant;
- owner/practitioner review state;
- release status.

This avoids converting a backlog into fake completed-media evidence.

## Assessment-state decision

Course-specific questions are generated into an assessment blueprint but are not automatically represented as fully sourced normalized assessment CONTENT/rationale lineage when the assessed statement would require a specific external claim/support edge.

This avoids creating false source precision. Exact question -> claim -> source support should be promoted as external claims are fully backfilled.

## Adversarial CI pass 1

The first strict CI run succeeded at:

- ecosystem matrix generation;
- normalized research-matrix validation.

It correctly failed the new curriculum authoring validator.

Findings:

1. `C-LOG-PRODUCTION`, `C-COM-WORK`, and `C-OUT-FIELD` had legacy topic normalization occurring after authoring, causing detail/topic mismatches.
2. The 22 earlier frontier-authored routes still had shorter legacy quiz sets rather than the new five-question minimum.

## Corrections

- Made legacy topic normalization compatible with authored details/objectives/scenarios.
- Expanded all 22 frontier route quiz sets to at least five course-specific questions.
- Added claims/media normalization to the 22 frontier routes.
- Strengthened validator logic so the entire 98-route expansion layer must meet the authored-state floor.

## Final authored-state validator

`validate-ecosystem-curriculum.mjs` now requires authored routes to have:

- valid canonical authority A0–A4/X;
- evidence packet;
- six or more topic anchors;
- authoring-version metadata;
- at least three objectives;
- one explanatory detail per topic;
- complete scenario setup / decision / response;
- at least five valid course-specific assessment items;
- at least four claim checkpoints;
- at least three complete media briefs.

It also fails if any expansion route remains outside `authored_frontier` or `authored_depth_v1` after this pass.

## Clean validation result

Final clean PR validation produced:

### Curriculum

- 44 dedicated routes
- 98 expansion routes
- 142 mapped routes total
- 22 frontier-authored routes
- 76 depth-v1 authored routes
- **0 research foundations remaining**
- **392 authored claim checkpoints**
- **490 assessment blueprint records**
- **294 planned media briefs**
- authority axis A0–A4/X

### Normalized matrix

- CONTENT: **991**
- SOURCE: **169**
- SUPPORT_EDGE: **360**
- COMPETENCY_CONTENT_EDGE: **831**
- RESEARCH_COMPETENCY_EDGE: **188**
- CONTENT_LINEAGE_EDGE: **669**
- REVIEW: **84**
- MEDIA: **5**
- COURSE inventory: **143**
- Fundamentals lesson mappings: **34**

### Owner map

- 135 states
- 84 bright
- 41 muted
- 10 gates

### Additional validations

- normalized research matrix: PASS
- ecosystem curriculum: PASS
- course-consent coverage: PASS
- 71 discovered top-level course routes gated
- accessibility structural baseline: PASS
- matrix audit-view generation: PASS

## Authority/safety decisions preserved

The build does not grant or teach independent physical authority for controlled work. Specifically preserved as external where applicable:

- physical rigging / climbing;
- energized electrical work and live circuit testing;
- powered equipment;
- structural engineering / acceptance;
- automation operation/programming/bypass/service;
- lasers / pyrotechnics / flame / cryogenic / performer flying / other specialty systems;
- hazardous/special props;
- RF legal/coordinator authority;
- manufacturer service;
- management appointment;
- legal/tax classification authority;
- certification/licensure/employer authorization.

## Self-audit

Recorded separately at:

`research/SELF_AUDIT_DEPTH_AUTHORING_2026-08-31.md`

The self-audit concludes the depth-authoring target is merge-ready while explicitly preserving the remaining practitioner review, learner validation, actual media-production, claim-support promotion, manual accessibility, and durable learner-evidence work.

## Remaining work after this session

The next frontier is no longer broad curriculum authoring. It is validation and production maturity:

1. practitioner editorial review across disciplines;
2. creation/sourcing of the 294 planned visuals with real rights/accessibility/review records;
3. learner testing and assessment calibration;
4. exact support-edge promotion for externally governed claim checkpoints;
5. manual accessibility testing;
6. employer/venue overlay implementation;
7. durable learner evidence / observed-practice / authorization data architecture;
8. commercial buyer/pilot validation.

## Promotion state

At the time this log is written, PR #45 is the merge surface. Promotion requires the final post-log CI cycle to remain green. Once green, the intended sequence is:

**MERGE -> main validation -> generated matrix sync -> final main SHA -> GitHub Pages deployment -> live verification.**
