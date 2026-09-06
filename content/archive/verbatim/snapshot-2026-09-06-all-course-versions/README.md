# Verbatim Course Content Snapshot — snapshot-2026-09-06-all-course-versions

This directory is a **reference-only historical archive**. It preserves course/content bytes from every live repository branch **and every distinct reachable historical version** so older versions can be compared directly without Git archaeology.

## Guarantees

- Canonical logical identities asserted at snapshot time: **143**.
- Live source branches captured: **48**.
- Fetched tags included in history reachability: **0**.
- Branch-tip snapshot files materialized: **4396**.
- Unique branch-tip Git blobs represented: **480**.
- Reachable commits scanned: **770**.
- Distinct historical path/blob versions materialized: **772**.
- Unique historical Git blobs represented: **760**.
- Every registered main identity resolves to a snapshotted physical route.
- Query-routed identities preserve their exact logical route and map to the shared physical source file.
- Historical files that no longer exist at any current branch tip are retained if they are reachable from repository history.
- Unregistered/alternate files under `courses/` are separately indexed rather than discarded.
- Original path, blob SHA, and an earliest observed source commit are recorded for every historical version.

## What is included

For each live branch tip, the snapshot captures complete `courses/`, `scripts/`, `visuals/`, and `_includes/` file sets where present, the course inventory where present, and relevant top-level learner/catalog presentation HTML. The history layer then scans every commit reachable from those branches and fetched tags and materializes every distinct relevant `path + blob SHA` version. This intentionally preserves versions that were overwritten before today's branch tips or never assigned a separate logical course ID.

## What this archive does **not** mean

Historical presence does not equal current authority, current safety sufficiency, learner readiness, or publication approval. Reuse still requires current evidence, safety/qualification review, structural reconciliation, and owner approval where required.

## Indexes

- `snapshot-manifest.json` — overall snapshot scope and branch-tip provenance.
- `branch-summary.json` — branch-level counts and tree/blob fingerprints.
- `history-version-manifest.json` — every distinct reachable historical path/blob version and earliest observed commit.
- `identity-lineage-143.json` — each of the 143 registered identities mapped to branch-tip and full reachable-history route/source-data versions.
- `alternate-and-unregistered-course-versions.json` — alternate course files visible at branch tips.
- `historical-alternate-and-unregistered-course-versions.json` — alternate course files found anywhere in reachable history.
- `catalogs/course_inventory-main-143.jsonl` — exact canonical inventory used for the 143-ID assertion.

The source branches and Git history remain preserved; this working-tree archive is an additional retrieval surface, not a replacement for them.
