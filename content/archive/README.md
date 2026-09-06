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

## Directory convention

```text
content/
├── current/                  # future canonical/current mirrors where useful
└── archive/
    ├── README.md             # this permanent policy
    ├── diff-manifest.json    # machine-readable lineage/index
    ├── snapshots/            # verbatim working-tree copies grouped by source era/ref
    └── raw/                  # raw drafts/notes when preserved as source evidence
```

The repository does not need to physically relocate every current course into `content/current/` immediately. The important invariant is that future restructuring cannot erase the historical corpus.

## Snapshot naming

Recommended form:

```text
content/archive/snapshots/<source-era-or-ref>/<original-relative-path>
```

If two materially distinct bodies share the same path, use an additional commit/era directory rather than overwriting either copy.

## Verbatim header rule

If metadata is needed, prefer recording it in `diff-manifest.json` rather than inserting metadata into a verbatim archived file. A verbatim archive file should remain byte-for-byte equivalent to the preserved source whenever practical.

## Side-by-side comparison

Agents and reviewers should use `diff-manifest.json` to locate:

- current identity / current route;
- every known materially distinct historical body;
- source branch/ref and commit;
- verbatim working-tree archive path;
- lineage / replacement relationship;
- publication/review state.

This allows a reviewer to compare older and newer prose directly without checking out multiple branches.

## Relationship to PR #48

The reduced catalog, product classifications, aliases, role map, and proposed architecture in PR #48 are **organizational decisions, not deletion authority**. They sit on top of this permanent historical corpus.

Any future implementation of the proposed content structure must preserve older content under this policy before it changes or retires the current representation.
