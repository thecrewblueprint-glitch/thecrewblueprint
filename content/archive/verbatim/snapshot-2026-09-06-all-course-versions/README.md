# Verbatim Course Content Snapshot — snapshot-2026-09-06-all-course-versions

This directory is a **reference-only historical archive**. It preserves course/content bytes from every repository branch available at snapshot time so older versions can be compared directly without checking out historical refs.

## Guarantees

- Canonical logical identities asserted at snapshot time: **143**.
- Source branches captured: **48**.
- Snapshot files materialized: **4396**.
- Unique Git blob versions represented: **480**.
- Every registered main identity resolves to a snapshotted physical route.
- Query-routed identities preserve their exact logical route and map to the shared physical source file.
- Unregistered/alternate files under `courses/` are separately indexed rather than discarded.
- Original branch, commit SHA, original path, and blob SHA are recorded for every materialized file.

## What is included

For every source branch, the snapshot captures the complete `courses/`, `scripts/`, `visuals/`, and `_includes/` file sets where present, the branch's course inventory when present, and relevant top-level learner/catalog presentation HTML. This intentionally preserves versions that were never assigned a separate logical course ID.

## What this archive does **not** mean

Historical presence does not equal current authority, current safety sufficiency, learner readiness, or publication approval. Reuse still requires current evidence, safety/qualification review, structural reconciliation, and owner approval where required.

## Indexes

- `snapshot-manifest.json` — per-file source branch/commit/path/blob provenance.
- `branch-summary.json` — branch-level counts and tree/blob fingerprints.
- `identity-lineage-143.json` — each of the 143 registered identities mapped to every branch version found at its physical route.
- `alternate-and-unregistered-course-versions.json` — historical course files not represented as separate canonical IDs.
- `catalogs/course_inventory-main-143.jsonl` — exact canonical inventory used for the assertion.
