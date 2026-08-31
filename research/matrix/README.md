# Crew Blueprint Evidence Matrix

**Status:** Active sitewide backfill — pilot passed  
**Canonical schema:** `research/MDQ-001_SOURCE_CITATION_CONTENT_MATRIX_SCHEMA_2026-08-31.md`  
**Competency extension:** `research/MDQ-001A_COMPETENCY_CONTENT_EDGE_EXTENSION_2026-08-31.md`  
**Pilot audit:** `research/MATRIX_PILOT_AUDIT_2026-08-31.md`

This directory is the repository-readable normalized evidence store connecting **industry competencies → Crew Blueprint content → claims → sources → review/authority state**.

## Logical record families

- `content*.jsonl` — MDQ-001 CONTENT records.
- `sources*.jsonl` — SOURCE records.
- `support_edges*.jsonl` — claim/source evidence relationships.
- `competency_content_edges*.jsonl` — competency/content relationships from MDQ-001A.
- `course_inventory.jsonl` — canonical current route inventory.
- `fundamentals_lesson_competency_map.jsonl` — all 34 current Fundamentals lessons mapped to competencies.
- `route_compatibility_inventory.jsonl` — legacy/deep-link/supersession candidates that must not be counted as separate canonical courses.
- `competency_id_aliases.jsonl` — deprecated IDs mapped to canonical IDs.
- later: MEDIA and REVIEW logical tables as claim/visual/reviewer backfill expands.

A logical table may be physically partitioned (`content.jsonl`, `content_higher_tiers.jsonl`, etc.). `scripts/validate-research-matrix.mjs` reads those partitions as one table and validates IDs/references globally.

JSONL is used because it is diff-friendly, appendable, scriptable and easy to export into CSV/HTML/database views later.

## Current coverage

### Canonical routes

All **33 current primary course/review routes** are inventoried.

Course-level CONTENT records now cover:

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

All **34 current Fundamentals lessons** have stable lesson → competency mappings. The mapping shows targeted gaps rather than a need to discard the course.

### Competency edges

Field Skills, C1/C2 pathways and higher-tier routes are linked to the cross-domain competency graph. Controlled-work content terminates at canonical external `GATE-*` nodes rather than internal authorization states.

### Claim/source pilot

Representative claim-level SUPPORT_EDGE records exist for:

1. Stagehand Fundamentals;
2. Move a Road Case With a Partner;
3. Lighting Production Flow.

The pilot confirmed that generic organization/root links may be retained for discovery/context but must not be upgraded to direct claim support without the exact controlling document.

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

## Active backfill order

See `research/MATRIX_HIGH_RISK_SOURCE_BACKFILL_QUEUE_2026-08-31.md`.

Priority begins with:

1. Electrics / Production Power authority claims;
2. Rigging / work-at-height authority claims;
3. Staging / structural-system claims;
4. Cargo / transport responsibility;
5. public-route / barricade / cable-protector claims;
6. assessment and authority-state claims;
7. physical Field Skills;
8. Lighting systems/protocols;
9. Audio RF/network/system claims;
10. Video LED/network/structural interfaces.

## Next expansion

- normalize exact SOURCE records for the high-risk queue;
- add claim/question/boundary records starting with safety-critical content;
- generate unsupported / needs-primary-source / duplicate-primary-home / external-gate views;
- backfill MEDIA and REVIEW records;
- connect research-only competencies to planned content IDs before new drafting;
- use the resulting graph/matrix to inform course structure rather than allowing current routes to dictate it.
