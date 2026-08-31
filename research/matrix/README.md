# Crew Blueprint Evidence Matrix

**Status:** Active sitewide backfill — broad research complete, high-risk claim matrix in progress  
**Canonical schema:** `research/MDQ-001_SOURCE_CITATION_CONTENT_MATRIX_SCHEMA_2026-08-31.md`  
**Competency extension:** `research/MDQ-001A_COMPETENCY_CONTENT_EDGE_EXTENSION_2026-08-31.md`  
**Content-lineage extension:** `research/MDQ-001B_CONTENT_LINEAGE_EDGE_EXTENSION_2026-08-31.md`  
**Pilot audit:** `research/MATRIX_PILOT_AUDIT_2026-08-31.md`  
**High-risk status:** `research/MATRIX_HIGH_RISK_BACKFILL_STATUS_2026-08-31.md`

This directory is the repository-readable normalized evidence store connecting **industry competencies → Crew Blueprint content → claims → sources → assessment lineage → review/authority state**.

## Logical record families

- `content*.jsonl` — MDQ-001 CONTENT records.
- `sources*.jsonl` — SOURCE records.
- `support_edges*.jsonl` — claim/source evidence relationships.
- `competency_content_edges*.jsonl` — competency/content relationships from MDQ-001A.
- `content_lineage_edges*.jsonl` — CONTENT → CONTENT semantic lineage from MDQ-001B, including question → rationale → claim.
- `reviews*.jsonl` — owner/practitioner/legal/safety/learner/accessibility/citation/freshness/rights review events.
- `course_inventory.jsonl` — canonical current route inventory.
- `fundamentals_lesson_competency_map.jsonl` — all 34 current Fundamentals lessons mapped to competencies.
- `route_compatibility_inventory.jsonl` — legacy/deep-link/supersession candidates that must not be counted as separate canonical courses.
- `competency_id_aliases.jsonl` — deprecated IDs mapped to canonical IDs.
- later: `media*.jsonl` — visual/audio/video rights, model/version, reviewer, fallback and content relationships.

A logical table may be physically partitioned (`content.jsonl`, `content_higher_tiers.jsonl`, `content_hr01_electrics.jsonl`, etc.). `scripts/validate-research-matrix.mjs` treats those partitions as one logical table and validates IDs/references globally.

JSONL is used because it is diff-friendly, appendable, scriptable and easy to export into CSV/HTML/database views later.

## Current coverage

### Canonical routes

All **33 current primary course/review routes** are inventoried.

Course-level CONTENT records cover:

- Stagehand Fundamentals;
- all six current Field Skills;
- five Department Support C1 courses;
- five Department Systems C2 courses;
- seven Lead courses;
- two Supervisor courses;
- five Advanced/C3 courses;
- Production Power Awareness;
- Production & Coordination Career Branch.

### Fundamentals

All **34 current Fundamentals lessons** have stable lesson → competency mappings. The mapping shows targeted additions rather than a need to discard the course.

### Competency edges

Field Skills, C1/C2 pathways and higher-tier routes are linked to the cross-domain competency graph. Controlled-work content terminates at canonical external `GATE-*` nodes rather than internal authorization states.

### High-risk source backfill

Substantial claim-level baselines now exist for:

1. HR-01 Electrics / Production Power;
2. HR-02 Rigging / Work at Height;
3. HR-03 Staging / Structures;
4. HR-04 Cargo / Transport Responsibility;
5. HR-05 Public Routes / Barricades / Cable Protectors;
6. HR-10 Assessment / Authority States.

These are **not publication-closed**. Exact model, jurisdiction, practitioner, owner and learner-validation dependencies remain explicit where applicable.

### Assessment lineage

The first real scored-question chains now exist as normalized records:

`Q-*` → `QR-*` → `CL-*` → `SUPPORT_EDGE` → `SOURCE`

The Road Case pilot includes both a work-control question and an evidence-state/authorization question. REVIEW records explicitly distinguish AI-assisted structural audit from practitioner, legal, learner or owner approval.

## Validator

`scripts/validate-research-matrix.mjs` now checks:

- JSONL parsing and unique IDs;
- logical-table partition selection without treating `content_lineage_edges*` as CONTENT;
- required fields;
- strict canonical SOURCE `evidence_type` and `authority_level` enums;
- SUPPORT_EDGE strength/state values, including temporary descriptive aliases already present in early HR packets;
- CONTENT, SOURCE, COMPETENCY_CONTENT_EDGE and CONTENT_LINEAGE_EDGE references;
- REVIEW target/reference structure;
- primary-home collisions;
- generic OSHA/USITT/ESTA root-link misuse;
- scored-question `Q → QR → claim/boundary` completeness;
- adequate claim/source support when the assessed claim requires external evidence.

The current execution environment cannot clone the remote branch to execute the Node validator locally, so a runtime PASS is **not claimed** from this session. Repository-side file/reference/taxonomy checks continue until a checkout/CI environment runs the script.

## Rules

1. Never infer `direct` support merely because a source appears in a bibliography.
2. Crew Blueprint frameworks may have no external source edge when clearly labeled as internal framing.
3. Safety/authority qualifiers live on the content record and support edge; they must survive wording changes.
4. Competency mapping does not mean course completion establishes job competency or authority.
5. External gates (`GATE-*`) are mapped as `boundary_only` relationships.
6. Existing source-data and lesson IDs remain authoritative; matrix IDs wrap them.
7. A source/version update creates source lineage rather than silently rewriting history.
8. One competency may appear in many courses, but a given depth should normally have one canonical `primary_home`.
9. Legacy/deep-link pages remain preserved until content/link/supersession audits prove their correct disposition.
10. High-risk claims are backfilled before low-risk descriptive copy.
11. Assessment completion never equals observed practice, verified work experience, employer authorization, external certification or licensure.
12. Model-specific practical content requires the exact product/version evidence and appropriate qualified review before stronger release.

## Active backfill order

See `research/MATRIX_HIGH_RISK_SOURCE_BACKFILL_QUEUE_2026-08-31.md`.

Completed to current baseline: HR-01 → HR-05 and HR-10.

Next:

1. HR-06 General Field Skill physical-task claims;
2. HR-07 Lighting systems/protocols;
3. HR-08 Audio RF/network/system claims;
4. HR-09 Video LED/network/structural interfaces;
5. expand MEDIA records;
6. expand REVIEW and practitioner/learner validation records;
7. generate unsupported / needs-primary-source / duplicate-primary-home / external-gate audit views;
8. connect research-only competencies to planned content IDs before new drafting.

The resulting graph/matrix should inform final course structure, backend implementation and owner-facing progression views rather than allowing current page structure to dictate the domain model.
