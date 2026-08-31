# Crew Blueprint Evidence Matrix

**Status:** Active pilot workspace  
**Canonical schema:** `research/MDQ-001_SOURCE_CITATION_CONTENT_MATRIX_SCHEMA_2026-08-31.md`  
**Competency extension:** `research/MDQ-001A_COMPETENCY_CONTENT_EDGE_EXTENSION_2026-08-31.md`

This directory is the beginning of the repository-readable normalized evidence store.

## Canonical record families

- `content.jsonl` — MDQ-001 CONTENT records.
- `sources.jsonl` — SOURCE records.
- `support_edges.jsonl` — claim/source evidence relationships.
- `competency_content_edges.jsonl` — competency/content relationships from MDQ-001A.
- later: `media.jsonl` and `reviews.jsonl` when pilot scope requires them.

JSONL is being used initially because it is diff-friendly, appendable, scriptable and easy to export into CSV/HTML audit views later.

## Pilot scope

The first seed intentionally covers representative records from the three MDQ-002 pilot families:

1. Stagehand Fundamentals;
2. one Field Skill — Move a Road Case With a Partner;
3. one Department Systems course — Lighting Production Flow.

The pilot is **not** a claim-complete backfill of those courses yet. It proves ID grammar, competency edges, support-strength handling, qualifiers and framework-vs-external-evidence separation before scaling across the site.

## Rules

1. Never infer `direct` support merely because a source appears in a bibliography.
2. Crew Blueprint frameworks may have no external source edge when clearly labeled as internal framing.
3. Safety/authority qualifiers live on the content record and support edge; they must survive wording changes.
4. Competency mapping does not mean course completion establishes job competency or authority.
5. External gates (`GATE-*`) are mapped as `boundary_only` relationships.
6. Existing source-data and lesson IDs remain authoritative; matrix IDs wrap them.
7. A source/version update creates source lineage rather than silently rewriting history.

## Next expansion

After pilot verification:

- backfill all 34 Stagehand Fundamentals lessons;
- backfill all existing Field Skills;
- backfill C1/C2 department pathways;
- backfill Lead/Supervisor/C3/infrastructure/coordination builds;
- generate unsupported/duplicate/qualification/safety-critical views;
- reconcile all new research-only competencies to missing learner-facing content.
