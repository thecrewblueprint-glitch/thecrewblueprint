# Course Version Candidate Archive

This directory preserves the two six-course candidate sets involved in the current owner selection decision.

## Separation invariant

- `pre-vnext-2026-09-06/` contains only the frozen pre-vNext candidate course bodies.
- `vnext-2026-09-06/` contains only the new vNext candidate set.
- The original 143-course corpus remains separate under its existing course, matrix, Owner Review, Approved, and exhaustive historical archive surfaces.
- Candidate review pages do not create authority over the original 143-course corpus.

## Selection lifecycle

Before owner selection, both candidates are `CANDIDATE_UNSELECTED`.

After owner selection:

1. The selected candidate becomes `CURRENT_SELECTED` on the active learner-facing surface.
2. The exact selected version remains archived and is labeled `CURRENT_SELECTED_SNAPSHOT` in the registry.
3. The non-selected candidate becomes `ARCHIVE_ONLY`.
4. Neither candidate is deleted.
5. The original 143-course corpus remains preserved and independently retrievable.
6. Any later rewrite of the selected current course set requires a new verbatim snapshot first.

The controlling machine-readable state is `content/archive/course-version-registry.json`.
