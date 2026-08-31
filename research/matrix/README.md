# Crew Blueprint Evidence Matrix

**Status:** Broad research complete — normalized sitewide matrix and audit production active  
**Canonical schema:** `research/MDQ-001_SOURCE_CITATION_CONTENT_MATRIX_SCHEMA_2026-08-31.md`  
**Competency/content extension:** `research/MDQ-001A_COMPETENCY_CONTENT_EDGE_EXTENSION_2026-08-31.md`  
**Content-lineage extension:** `research/MDQ-001B_CONTENT_LINEAGE_EDGE_EXTENSION_2026-08-31.md`  
**Research/competency extension:** `research/MDQ-001C_RESEARCH_COMPETENCY_EDGE_EXTENSION_2026-08-31.md`  
**High-risk status:** `research/MATRIX_HIGH_RISK_BACKFILL_STATUS_2026-08-31.md`

This directory is the repository-readable normalized evidence store connecting **industry competencies → research coverage → Crew Blueprint content → claims → sources → assessment lineage → media → review/authority state**.

## Logical record families

- `content*.jsonl` — CONTENT records for current courses, planned content, claims, boundaries, questions and rationales.
- `sources*.jsonl` — normalized SOURCE records.
- `support_edges*.jsonl` — claim/source evidence relationships.
- `competency_content_edges*.jsonl` — competency/content relationships from MDQ-001A.
- `research_competency_edges*.jsonl` — structure-neutral research/competency relationships from MDQ-001C.
- `content_lineage_edges*.jsonl` — CONTENT → CONTENT semantic lineage from MDQ-001B, including question → rationale → claim.
- `reviews*.jsonl` — owner/practitioner/legal/safety/learner/accessibility/citation/freshness/rights review events.
- `media*.jsonl` — visual/audio/video rights, equipment/procedure scope, reviewer, fallback and release state.
- `course_inventory.jsonl` — canonical current learner-route inventory.
- `fundamentals_lesson_competency_map.jsonl` — all 34 current Fundamentals lessons mapped to competencies.
- `route_compatibility_inventory.jsonl` — legacy/deep-link/supersession candidates that must not be counted as separate canonical courses.
- `competency_id_aliases.jsonl` — deprecated IDs mapped to canonical IDs.

A logical table may be physically partitioned. `scripts/validate-research-matrix.mjs` treats recognized partitions as one logical table and validates references globally. The validator now includes the newer Stagehand U/O partitions and `RESEARCH_COMPETENCY_EDGE`; older regexes that omitted those files have been retired.

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

## Stagehand Field Skills state

The full U01–U12 early-career Field Skills universe is now normalized as either current built coverage or researched/planned coverage. Planned/researched nodes remain outside the 33-route current inventory until an actual learner-facing route exists.

Current researched/planned homes include:

- `CMP-FLD-002` Team Lift / Carry / Set Down;
- `CMP-FLD-003` Cart / Dolly / Hand-Truck Movement;
- `CMP-FLD-005` Released-Cable Deployment / Gathering;
- `CMP-FLD-007` Case / Boneyard Organization;
- `CMP-FLD-008` Work-Area Reset / Handoff;
- `CMP-FLD-010` Pipe-and-Drape Support;
- `CMP-FLD-011` Ground-Level Soft Goods;
- `CMP-FLD-012` Riser / Deck Component Support;
- `CMP-FLD-013` Scenery / Flat / Wagon Movement;
- `CMP-FLD-014` Ordinary Tool Recognition / Handoff;
- `CMP-FLD-015` Tape / Label / Marking Literacy;
- `CMP-FLD-016` Dock / Ramp / Trailer Handoff Awareness.

The six already-built Field Skills retain separate drafted/built state.

## Stagehand operational-call state

SFS-O01–O08 is normalized as planned Foundation extensions rather than a forced new course container. It covers:

- check-in/orientation;
- assignment ownership;
- task completion/handoff;
- report-back/reassignment;
- standby/break/release distinctions;
- show-call/changeover rhythm;
- department/call release;
- timekeeping/sign-out.

The synthesis added `CMP-CORE-019 — Show-call / changeover rhythm` because performance-phase work was not adequately represented by generic standby or load-in/load-out competencies.

## Structure-neutral department research

`RESEARCH_COMPETENCY_EDGE` is populated across Lighting, Audio, Video/LED/Broadcast, Staging/Scenic, Rigging awareness, Electrics/Production Power literacy, Backline/Props/Wardrobe, Stage Management, Production Management, Venue/Event Operations, Crew Leadership and Show Control.

This allows the owner-facing map to show **real research coverage even when no course container has been chosen**. Research coverage never implies a course exists, a learner completed it, practitioner approval, employer authorization, external certification or licensure.

## Liability-priority source baseline

HR-01 through HR-10 now have a first substantive claim/source baseline covering Electrics, Rigging, Structures, Cargo, Public Routes, General Field Skills, Lighting, Audio, Video and assessment/authority states.

They remain **not publication-closed**. Model, jurisdiction, practitioner, owner, learner, accessibility, media and release dependencies remain explicit.

## Assessment lineage

Normalized scored-question chains use:

`Q-*` → `QR-*` → `CL-*` → `SUPPORT_EDGE` → `SOURCE`

Current seeded examples exist across Road Case, Lighting, Audio and Video. Traceability does not establish psychometric validity, field competence or employer authorization.

## MEDIA / visual evidence

MEDIA is operational. Initial normalized records include the owned inline Lighting control-flow diagram and two existing AI-generated Road Case training visuals.

Safety-critical visuals cannot become `practitioner_reviewed` or `approved` without reviewer + review date. Approved media also requires complete text fallback. AI-generated physical-task visuals remain owner-review only until a qualified practitioner validates the depiction in the intended equipment/context.

## Validator

`scripts/validate-research-matrix.mjs` checks:

- JSONL parsing and unique IDs;
- all recognized logical partitions, including Stagehand U/O partitions;
- required fields and canonical SOURCE enums;
- CONTENT/SOURCE/COMPETENCY/RESEARCH_COMPETENCY/LINEAGE/REVIEW/MEDIA references;
- `RESEARCH_COMPETENCY_EDGE` state enums, research-file existence and owner-map flags;
- assessment `Q → QR → claim/boundary` completeness;
- adequate evidence on externally-backed assessed claims;
- primary-home collisions;
- generic root-link misuse;
- MEDIA type/status and safety-critical release gates.

The current tool environment has not executed the validator against a local checkout, so a runtime PASS is **not claimed** here. Repository-side structural validation remains the fallback until a checkout/CI environment runs the script.

## Generated audit views

`scripts/generate-research-matrix-views.mjs` generates the core claim/source/review audit surfaces. `scripts/generate-owner-competency-state-view.mjs` derives the owner-map content state, and `scripts/generate-owner-map-state-view.mjs` preserves the bright/muted/gate display logic.

Owner-map semantics:

- **bright** — drafted/current built content exists;
- **muted** — graph-mapped, research-only, or researched/planned but not built;
- **gate** — external qualification/authorization boundary;
- **white route** — future renderer-computed outward path from selected current position, not a completion state.

Generated views are audit surfaces only; canonical graph + JSONL remain source of truth.

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
10. Research may connect directly to a competency without inventing a course container.
11. Final course/backend structure will be informed by the completed matrix rather than by current page structure.

## Next active matrix work

1. Expand Stagehand Fundamentals from lesson-level competency mapping into claim/source backfill using Packages 15–21 and SFS-O01–O08.
2. Expand scored-question lineage across all current routes.
3. Expand MEDIA inventory across existing course diagrams/images.
4. Use generated audit views to prioritize unsupported and qualification-sensitive claims.
5. Add exact model/jurisdiction/practitioner evidence where blocked reviews require it.
6. Collect practitioner, learner and customer validation before final course/backend architecture decisions.
