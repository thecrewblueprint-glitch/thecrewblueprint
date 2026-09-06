# The Crew Blueprint — Open PR & Repository Cleanup Audit

**Date:** 2026-09-06  
**Status:** live-state audit; recommendations only unless owner separately approves merge/deletion  
**Live branch count observed:** 48  
**Open PR count observed:** 1

## Executive result

The repository does **not** need a destructive cleanup. It needs clearer authority, discoverability, and a small number of future branch-pruning decisions.

The correct principle is:

> Reduce active ambiguity, not historical evidence.

Unique research, historical course bodies, owner-review material, and recovery branches should be preserved. Branches that are fully redundant can be pruned later only after owner approval and a stable accepted release/tag.

---

# Open PR audit

## PR #48 — Structural: add agent retrieval graph and reconcile course ID aliases

**Live state:** open, draft, mergeable.  
**Classification:** **NEEDS OWNER DECISION**.  
**Technical recommendation:** candidate to merge after owner review; do not merge automatically.

### What useful information it contains

- agent retrieval manifest;
- cross-system relationship and authority map;
- normalized cross-system context schema;
- whole-course-system situation snapshot;
- all-branch catalog summary;
- research priority snapshot;
- Field Skills ID alias/crosswalk;
- matrix-generator alias reconciliation;
- branch-state registry;
- community/client discovery input;
- target-audience content architecture;
- fresh audience/employer discovery synthesis;
- final 30-item reduced public-catalog recommendation in Markdown and JSON;
- current open-PR/repository-cleanup audit.

### Duplication / conflict assessment

The PR primarily indexes and normalizes existing information rather than copying volatile employer/opportunity payloads. Its current branch has been reconciled with accepted `main`; its structural files do not replace the v2 visual baseline.

### Validation state

- Research Matrix Validation: **PASS** on the refreshed PR head before the latest documentation-only additions and has remained passing through the catalog additions.
- Ecosystem matrix generation: **PASS**.
- Ecosystem curriculum validation: **PASS**.
- Repository-wide course-consent coverage: **FAIL**, inherited from `main` and tied to advanced/historical Lead, Supervisor, and Electrics routes rather than PR #48 structural changes.
- The same consent-gate failure existed on the restored v2 baseline before the current structural work.

### Why it should not auto-merge

The PR changes how future agents retrieve and interpret the repository. That is governance/architecture, not a cosmetic implementation detail. The owner should explicitly approve the retrieval graph, authority boundaries, branch registry, and reduced-catalog analytical artifacts before they become canonical `main` state.

### Merge effect

If accepted, PR #48 should reduce agent confusion by making current/historical/analytical states more explicit. It should not itself publish archived Lead/Supervisor/Electrics/Rigging material or change the current public v2 presentation.

---

# Live branch audit

## Canonical / active

### `main`

**Disposition:** KEEP — canonical current.  
Accepted v2 public/staging baseline plus the v2-preserving client-layer refinement.

### `work/ecosystem-retrieval-graph-2026-09-06`

**Disposition:** KEEP ACTIVE — PR #48.  
Do not treat as canonical until owner-approved merge.

---

# Protected archives / recovery evidence

These should remain retrievable and should not be casually deleted.

### `archive/lead-supervisor-electrics-rigging-2026-09-06`

**Disposition:** KEEP AS ARCHIVE/REFERENCE.  
Contains materially fuller historical Lead, Supervisor, Electrics, and Rigging bodies. Use for claim-level salvage and Owner Review only.

### `archive/owner-review-course-content-2026-09-05`

**Disposition:** KEEP AS ARCHIVE/REFERENCE.  
Owner-review history and course content evidence.

### `archive/pre-v2-restore-2026-09-06`

**Disposition:** KEEP AS SAFETY ARCHIVE.  
Preserves the state displaced when `main` was restored to the selected v2 visual baseline.

### `archive/v1-multipage-2026-09-03`

**Disposition:** KEEP AS HISTORICAL PRODUCT ARCHIVE.  
Useful for lineage/assets/content salvage; never current visual authority.

### `archive/infrastructure-career-pre-owner-review-2026-09-06`

**Disposition:** KEEP AS ARCHIVE/REFERENCE.  
This newer archive is not in the earlier branch registry. Relative to current `main`, it contains unique `css/client-polish.css` and `js/main.js` work from the post-restore line. Preserve it because it records the Infrastructure/Career pre-owner-review state and client-layer experiment. Do not merge the archived presentation wholesale.

### `archive/session-partial-ui-owner-review-2026-09-06`

**Disposition:** KEEP AS SESSION/RECOVERY ARCHIVE.  
Also missing from the earlier branch registry. It contains the client-polish files plus a session state where `production-coordination-career-branch.html` and `production-infrastructure-power-awareness.html` were substantially reduced. Preserve for provenance/recovery; do not treat those shortened pages as automatically preferred current content.

### `claude/production-courses-ui-ux-11l4vg`

**Disposition:** KEEP AS ARCHIVE/REFERENCE.  
Contains complete historical course bodies and useful UI/content evidence. Not current visual authority.

---

# Closed design explorations

### `claude/fresh-industrial-concept-11l4vg`
### `claude/fresh-blueprint-concept-11l4vg`

**Disposition:** KEEP AS ARCHIVE/REFERENCE for now.  
Former PRs #38/#39 are closed. These branches are visual exploration evidence only. If the owner later chooses aggressive branch pruning after a stable release, these are candidates to tag/archive externally and delete because v2 is controlling.

### `claude/v2-redesign-concept-images`

**Disposition:** KEEP AS HISTORICAL DESIGN EVIDENCE.  
May contain useful original concept imagery/history. Do not use it to redesign v2.

---

# Closed/superseded audit work

### `research/site-uiux-copy-freshness-2026-08-31`

**Disposition:** SUPERSEDED — preserve branch until the current strategy is accepted.  
Former PR #43 is closed. Useful findings have been incorporated into the current direction; stale assumptions should not drive site edits.

### `work/full-capacity-matrix-reconciliation-2026-09-06`

**Disposition:** SUPERSEDED.  
Relevant ID-reconciliation work has moved into PR #48. Preserve until #48 is resolved; then candidate for pruning if no unique evidence remains.

### `work/v2-client-polish-2026-09-06`

**Disposition:** SUPERSEDED / REDUNDANT — future prune candidate.  
Live comparison against `main` shows **0 unique commits and 0 changed files**; it points to the restored v2 baseline and is one accepted commit behind `main`. It can be deleted safely from a content-loss perspective, but no deletion should occur without owner approval.

---

# Historical research branches

Examples include:

- `chatgpt/consolidated-research-queue`
- `chatgpt/research-corpus-run-and-field-skills`
- `claude/rq-400-role-coverage-map-11l4vg`
- `curriculum/road-case-research-field-skills-message`
- `research/department-support-c1-matrix-completion`
- `research/department-systems-c2-matrix-completion`
- `research/master-domain-gap-queue-2026-08-31`
- `research/mdq-010-stagehand-field-skills-universe`
- `research/stagehand-field-task-redesign-2026-08-30`

**Disposition:** KEEP AS HISTORICAL RESEARCH until the 143-ID reclassification and final evidence-retention pass prove their unique findings are represented elsewhere. Prefer indexing over copying.

---

# Historical curriculum / release / fix branches

Examples include:

- `course/canonical-foundation-and-training-media-2026-08-30`
- `curriculum/depth-authoring-2026-08-31`
- `curriculum/owner-audit-2026-08-30`
- `curriculum/tiered-course-build-2026-08-30`
- `release/all-courses-live-2026-08-30`
- `release/course-ecosystem-build-2026-08-31`
- `fix/course3-catalog-dedup-2026-08-30`
- Fundamentals fix/audit branches
- `remove-course-page-diagrams`
- `ui/unified-course-shell-road-case`

**Disposition:** KEEP AS HISTORICAL until one stable post-reclassification release exists. Then compare each against accepted content/evidence. Branches with no unique research, course body, media, or governance evidence can become owner-approved prune candidates.

---

# Historical governance / legal branches

Examples include:

- `chatgpt/cross-build-content-governance`
- `chatgpt/pr-first-governance`
- `claude/governance-build-phase-exception-11l4vg`
- `docs/normalize-governance-wording`
- `legal/bump-consent-version-2026-08-30`
- `legal/course-consent-gate-2026-08-30`
- `legal/legal-task-backlog-2026-08-30`
- `legal/rocket-lawyer-reconciliation-2026-08-30`

**Disposition:** KEEP until current governance/legal state is consolidated and the inherited consent-gate failure is resolved or intentionally retired. These branches may contain the evidence needed to understand why the current validator expects consent coverage.

---

# Cleanup actions recommended now

1. **Do not delete any branch in this pass.**
2. Update the branch-state registry to include the three live refs it currently misses.
3. Correct PR #43 state from active/audit-candidate language to closed/superseded historical audit.
4. Keep PR #48 as the only active structural work branch and do not create competing retrieval/catalog branches.
5. Treat `work/v2-client-polish-2026-09-06` as the clearest future deletion candidate because it has no unique content.
6. After the owner accepts a stable post-reclassification architecture, create an immutable release tag before any historical branch pruning.
7. Before deleting any historical branch, prove all unique research, course bodies, media, and governance evidence are indexed or preserved elsewhere.

# Cleanup actions explicitly not recommended

- squashing historical research into one giant copied folder;
- deleting old course bodies merely because the current public catalog is smaller;
- using branch recency as authority;
- restoring a longer archived course simply because it is longer;
- merging structural PR #48 solely because GitHub reports it mergeable;
- deleting the legal/consent history before understanding the current validator contract.
