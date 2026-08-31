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

### Canonical current routes

All **33 current primary course/review routes** are inventoried. Course-level CONTENT records cover Stagehand Fundamentals, six current Field Skills, five Department Support C1 courses, five Department Systems C2 courses, seven Lead courses, two Supervisor courses, five Advanced/C3 courses, Production Power Awareness, and the Production & Coordination Career Branch.

### Researched/planned nodes

The matrix now also carries content objects that are **researched/planned but not learner-facing builds**. These do not enter the 33-route current inventory.

Current examples:

- `C-FLD-TEAM-LIFT` → `CMP-FLD-002`;
- `C-FLD-CART-DOLLY-MOVEMENT` → `CMP-FLD-003`;
- `C-FLD-CABLE-DEPLOY-GATHER` → `CMP-FLD-005`;
- `C-FLD-CASE-BONEYARD-ORG` → `CMP-FLD-007`;
- `C-FLD-WORK-AREA-RESET` → `CMP-FLD-008`.

This state distinction is intended to power the owner-facing progression map: built coverage, researched/planned coverage and external-gate coverage must not share one visual state.

### Fundamentals

All **34 current Fundamentals lessons** have stable lesson → competency mappings. The mapping supports targeted additions rather than a wholesale replacement of Fundamentals.

### High-risk source backfill

Substantial claim-level baselines now exist for:

1. HR-01 Electrics / Production Power;
2. HR-02 Rigging / Work at Height;
3. HR-03 Staging / Structures;
4. HR-04 Cargo / Transport Responsibility;
5. HR-05 Public Routes / Barricades / Cable Protectors;
6. HR-06 General Field Skills — core U01–U05;
7. HR-07 Lighting control / network / protocol claims;
8. HR-10 Assessment / Authority States.

These are **not publication-closed**. Exact model, jurisdiction, practitioner, owner and learner-validation dependencies remain explicit where applicable.

### Lighting current-state result

HR-07 normalizes current learner-facing protocol claims against:

- ANSI E1.11-2024 / DMX512-A;
- ANSI E1.20-2025 / RDM;
- ANSI E1.31-2025 / sACN;
- current Art-Net 4 specification.

The current Lighting C2/C3 audit does **not** find GDTF/MVR learner instruction. GDTF/MVR therefore remain research/competency coverage rather than built-course coverage. The broad learner sentence combining IP addressing, routing, casting, priority, merging, VLANs and switch configuration remains blocked for experienced lighting-network practitioner review because protocol standards do not themselves mandate one VLAN/switch architecture.

### Assessment lineage

Normalized scored-question chains now exist as:

`Q-*` → `QR-*` → `CL-*` → `SUPPORT_EDGE` → `SOURCE`

The Road Case pilot includes work-control and evidence-state/authorization questions. HR-07 adds the existing Lighting DMX-universe question and rationale. REVIEW records explicitly distinguish AI-assisted structural audit from practitioner, legal, learner or owner approval.

## Validator

`scripts/validate-research-matrix.mjs` checks:

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
13. Research coverage and learner-facing built coverage are separate states.
14. Protocol literacy does not itself establish product-specific configuration authority or employer appointment.

## Active backfill order

See `research/MATRIX_HIGH_RISK_SOURCE_BACKFILL_QUEUE_2026-08-31.md`.

Completed to current baseline: **HR-01 through HR-07, plus HR-10**.

Next:

1. HR-08 Audio RF/network/system claims;
2. HR-09 Video LED/network/structural interfaces;
3. expand MEDIA records;
4. expand REVIEW and practitioner/learner validation records;
5. generate unsupported / needs-primary-source / duplicate-primary-home / external-gate audit views;
6. connect remaining research-only competencies to planned content IDs before new drafting.

The resulting graph/matrix should inform final course structure, backend implementation and owner-facing progression views rather than allowing current page structure to dictate the domain model.
