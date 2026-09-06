# Crew Blueprint Verbatim Curriculum Archive

## Status

**Permanent retention surface.**

This directory exists so historical Crew Blueprint curriculum can be compared, cited, and reused without relying only on Git history or branch archaeology.

## Non-negotiable retention rule

Historical curriculum is evidence and must not be destroyed merely because a newer structure, route, course body, or classification supersedes it.

The following are permanent requirements:

1. **No destructive pruning of historical curriculum.** Archive branches, historical tags, legacy course trees, raw drafts, alternate course bodies, syllabus iterations, owner-review copies, and materially distinct prior presentations must not be deleted, squashed away, force-overwritten, or treated as disposable cleanup.
2. **Preserve exact text before replacement.** Before a current curriculum body is materially rewritten, collapsed into a module, reclassified, retired from a public route, or removed from a current container, the prior body must be copied verbatim into this archive tree or another explicitly registered verbatim archive path.
3. **Git history is not the only archive.** Commit history and branch refs remain valuable provenance, but important prior curriculum bodies must also be directly retrievable from the working tree for side-by-side comparison.
4. **Do not normalize archived prose.** Archive copies are evidence. Do not silently fix spelling, terminology, formatting, citations, safety language, or structure in a file labeled verbatim. Corrections belong in a newer version, not retroactively in the archived source.
5. **Keep source lineage.** Every archived body must retain its source branch/ref, source path, source commit or blob SHA when available, capture date, logical course/content identity where known, and relationship to later versions.
6. **Preserve even rejected/deferred material.** `DEFER_OR_REMOVE`, superseded, unpublished, owner-rejected, and incomplete drafts remain retrievable if they contain substantive unique content.
7. **No automatic restoration.** Preservation does not make an old body current or publishable. Historical content still requires evidence, safety, architecture, and owner-review reconciliation before reuse.
8. **No archive pruning without explicit owner approval.** Repository cleanup recommendations may identify redundant refs, but no historical curriculum source may be deleted until the owner has reviewed the content/version map and explicitly authorizes the specific deletion.

## Completed exhaustive snapshot

The first repository-wide materialized snapshot is:

```text
content/archive/verbatim/snapshot-2026-09-06-all-course-versions/
```

It preserves the September 6, 2026 frontier at two levels:

- **branch-tip state:** course/content files from every live source branch;
- **reachable-history state:** every distinct relevant `path + Git blob` version found across all commits reachable from those source branches and fetched tags.

At capture time it asserts all **143 canonical logical course identities**, captures **48 live source branches**, materializes **4,396 branch-tip files**, scans **770 reachable commits**, and preserves **772 distinct historical path/blob versions representing 760 unique historical blobs**.

This history layer is important: a course version that was overwritten before the present branch tips can still be available directly in the working tree if the underlying Git object remains reachable.

The snapshot's own `README.md`, `snapshot-manifest.json`, `history-version-manifest.json`, `branch-summary.json`, and `identity-lineage-143.json` are the controlling indexes for that materialized set. `diff-manifest.json` registers the snapshot at the archive-governance level.

## Directory convention

```text
content/
├── current/                  # future canonical/current mirrors where useful
└── archive/
    ├── README.md             # this permanent policy
    ├── diff-manifest.json    # machine-readable lineage/index
    ├── verbatim/             # exhaustive/materialized immutable snapshot sets
    ├── snapshots/            # targeted verbatim snapshots grouped by source era/ref
    └── raw/                  # raw drafts/notes when preserved as source evidence
```

The repository does not need to physically relocate every current course into `content/current/` immediately. The important invariant is that future restructuring cannot erase the historical corpus.

## Snapshot naming

For targeted captures, recommended form:

```text
content/archive/snapshots/<source-era-or-ref>/<original-relative-path>
```

For exhaustive materialized sets, use:

```text
content/archive/verbatim/<snapshot-id>/
```

If two materially distinct bodies share the same path, use an additional commit/blob/era directory rather than overwriting either copy.

## Verbatim header rule

If metadata is needed, prefer recording it in manifests rather than inserting metadata into a verbatim archived file. A verbatim archive file should remain byte-for-byte equivalent to the preserved source whenever practical.

## Side-by-side comparison

Agents and reviewers should use `diff-manifest.json` and the selected snapshot's lineage manifests to locate:

- current identity / current route;
- every known materially distinct historical body;
- source branch/ref and commit;
- original Git blob SHA;
- verbatim working-tree archive path;
- lineage / replacement relationship;
- publication/review state.

This allows a reviewer to compare older and newer prose directly without checking out multiple branches or reconstructing content from commits.

## Completeness boundary

The exhaustive snapshot preserves selected course/content paths that are reachable through the live branch/tag frontier at capture time. It does not claim that Git can recover objects that have already become unreachable/dangling and were no longer exposed by any fetched ref. Source branches and repository history therefore remain protected even after materialization.

## Relationship to PR #48

The reduced catalog, product classifications, aliases, role map, and proposed architecture merged from PR #48 are **organizational decisions, not deletion authority**. They sit on top of this permanent historical corpus.

Any future implementation of that content structure must continue preserving older content under this policy before it changes or retires a current representation.
