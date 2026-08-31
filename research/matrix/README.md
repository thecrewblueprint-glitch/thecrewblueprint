# Crew Blueprint Evidence Matrix

**Status:** Broad research complete — normalized sitewide matrix and audit production active  
**Canonical schema:** `research/MDQ-001_SOURCE_CITATION_CONTENT_MATRIX_SCHEMA_2026-08-31.md`  
**Competency extension:** `research/MDQ-001A_COMPETENCY_CONTENT_EDGE_EXTENSION_2026-08-31.md`  
**Content-lineage extension:** `research/MDQ-001B_CONTENT_LINEAGE_EDGE_EXTENSION_2026-08-31.md`  
**High-risk status:** `research/MATRIX_HIGH_RISK_BACKFILL_STATUS_2026-08-31.md`

This directory is the repository-readable normalized evidence store connecting **industry competencies → Crew Blueprint content → claims → sources → assessment lineage → media → review/authority state**.

## Logical record families

- `content*.jsonl` — CONTENT records for courses, claims, boundaries, questions and rationales.
- `sources*.jsonl` — normalized SOURCE records.
- `support_edges*.jsonl` — claim/source evidence relationships.
- `competency_content_edges*.jsonl` — competency/content relationships from MDQ-001A.
- `content_lineage_edges*.jsonl` — CONTENT → CONTENT semantic lineage from MDQ-001B, including question → rationale → claim.
- `reviews*.jsonl` — owner/practitioner/legal/safety/learner/accessibility/citation/freshness/rights review events.
- `media*.jsonl` — visual/audio/video rights, equipment/procedure scope, reviewer, fallback and release state.
- `course_inventory.jsonl` — canonical current learner-route inventory.
- `fundamentals_lesson_competency_map.jsonl` — all 34 current Fundamentals lessons mapped to competencies.
- `route_compatibility_inventory.jsonl` — legacy/deep-link/supersession candidates that must not be counted as separate canonical courses.
- `competency_id_aliases.jsonl` — deprecated IDs mapped to canonical IDs.

A logical table may be physically partitioned (`content_hr09_video.jsonl`, etc.). `scripts/validate-research-matrix.mjs` treats partitions as one logical table and validates references globally.

## Current learner-facing route coverage

All **33 current primary course/review routes** are inventoried and represented at course level:

- Stagehand Fundamentals;
- six current Field Skills;
- five Department Support C1 routes;
- five Department Systems C2 routes;
- seven Lead routes;
- two Supervisor routes;
- five Advanced/C3 routes;
- Production Power Awareness;
- Production & Coordination Career Branch.

All **34 Stagehand Fundamentals lessons** have stable lesson → competency mappings.

## Researched/planned Stagehand Field Skills

Research coverage and built learner coverage are deliberately separate states.

The Stagehand Field Skills universe now has planned/researched nodes for all remaining U01–U12 skill families:

- `C-FLD-TEAM-LIFT` → `CMP-FLD-002`;
- `C-FLD-CART-DOLLY-MOVEMENT` → `CMP-FLD-003`;
- `C-FLD-CABLE-DEPLOY-GATHER` → `CMP-FLD-005`;
- `C-FLD-CASE-BONEYARD-ORG` → `CMP-FLD-007`;
- `C-FLD-WORK-AREA-RESET` → `CMP-FLD-008`;
- `C-FLD-PIPE-DRAPE` → `CMP-FLD-010`;
- `C-FLD-SOFT-GOODS` → `CMP-FLD-011`;
- `C-FLD-RISER-DECK-SUPPORT` → `CMP-FLD-012`;
- `C-FLD-SCENERY-MOVEMENT` → `CMP-FLD-013`;
- `C-FLD-TOOLS-READINESS` → `CMP-FLD-014`;
- `C-FLD-MARKING-LABELING` → `CMP-FLD-015`;
- `C-FLD-DOCK-HANDOFF` → `CMP-FLD-016`.

These are **not added to the 33-route current inventory** because learner-facing course pages do not yet exist. Owner-map edges use `evidence_state: researched`, `display_on_owner_map: true`, `display_on_learner_map: false`.

The six already-built Field Skills retain their current built-route state separately.

## Liability-priority source baseline

HR-01 through HR-10 now have a first substantive claim/source baseline:

1. Electrics / Production Power;
2. Rigging / Work at Height;
3. Staging / Structures;
4. Cargo / Transport Responsibility;
5. Public Routes / Barricades / Cable Protectors;
6. General Field Skills, including U01–U12 planned evidence nodes;
7. Lighting controls/protocols;
8. Audio RF/network/hearing-safety;
9. Video / LED / display systems;
10. Assessment / authority states.

They remain **not publication-closed**. Model, jurisdiction, practitioner, owner, learner, accessibility, media and release dependencies remain explicit.

## Assessment lineage

Normalized scored-question chains use:

`Q-*` → `QR-*` → `CL-*` → `SUPPORT_EDGE` → `SOURCE`

Current seeded examples exist across Road Case, Lighting, Audio and Video. Traceability does not establish psychometric validity, field competence or employer authorization.

## MEDIA / visual evidence

MEDIA is operational. Initial normalized records include:

- the owned inline Lighting control-flow diagram;
- two existing AI-generated Road Case training visuals.

Safety-critical visuals cannot become `practitioner_reviewed` or `approved` without reviewer + review date. Approved media also requires complete text fallback. AI-generated physical-task visuals remain owner-review only until a qualified practitioner validates the depiction in the intended equipment/context.

## Validator

`scripts/validate-research-matrix.mjs` checks:

- JSONL parsing and unique IDs;
- logical partition selection;
- required fields and canonical SOURCE enums;
- CONTENT/SOURCE/COMPETENCY/LINEAGE/REVIEW/MEDIA references;
- assessment `Q → QR → claim/boundary` completeness;
- adequate evidence on externally-backed assessed claims;
- primary-home collisions;
- generic root-link misuse;
- MEDIA type/status and safety-critical release gates.

The current tool environment has not executed the validator against a local checkout, so a runtime PASS is **not claimed** here.

## Generated audit views

`scripts/generate-research-matrix-views.mjs` generates eight human-readable audit surfaces from canonical JSONL:

1. unsupported / needs-primary-source;
2. qualification-sensitive;
3. visual evidence / rights / reviewer / fallback;
4. route → claim → source;
5. source → affected content;
6. assessment rationale completeness;
7. supersession / legacy routes;
8. domain completeness / planned-vs-built.

Generated views are audit surfaces only; JSONL remains canonical.

## Core rules

1. Bibliography presence does not equal direct support.
2. Crew Blueprint frameworks remain labeled internal framing.
3. Safety/authority qualifiers must survive wording changes.
4. Competency mapping/course completion does not establish job authority.
5. External gates remain external.
6. Research coverage and built learner coverage are separate states.
7. Model-specific practical content requires exact product/version evidence and qualified review.
8. Assessment completion does not equal observed practice, verified experience, employer authorization, certification or licensure.
9. Safety-critical visuals require rights, context, reviewer state and a text fallback.
10. Final course/backend structure will be informed by the matrix rather than by current page structure.

## Next active matrix work

- normalize Stagehand operational-call evidence O01–O08 onto `CMP-CORE-*` nodes;
- expand full scored-question lineage across current routes;
- expand MEDIA inventory across existing course diagrams/images;
- use generated audit views to prioritize unsupported/qualification-sensitive claims;
- connect remaining research-only department competencies to planned content IDs;
- collect practitioner, learner and customer validation before final course/backend architecture decisions.
