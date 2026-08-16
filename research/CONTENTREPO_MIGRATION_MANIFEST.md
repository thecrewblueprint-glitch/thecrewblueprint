# Contentrepo Migration Manifest

**Migration date:** 2026-08-16  
**Source repository:** thecrewblueprint-glitch/contentrepo  
**Source branches examined:** 7 branches (see decision log below)  
**Status:** Phase 3 content migration — critical and historical research materials migrated to thecrewblueprint/research

---

## Migrated Materials

### 1. First Two Years Stagehand Research Packet

**Source:** contentrepo / `codex/content-database-session-001` branch  
**Location:** `/research/contentrepo-historical-archive/first-two-years-stagehand-research-packet/`  
**Status:** ⚠ HISTORICAL — requires owner verification before use in production content  
**Disposition:** MIGRATE — critical research material, preserve for future course development

**Contents:**
- `README.md` — Overview and sourcing methodology
- `research-packet.md` — Full synthesized research document
- `source-prompt.md` — Original research briefing
- `sources/` — Source documentation and evidence
- `rag-records/` — RAG (retrieval-augmented generation) index records

**Note:** This packet contains foundational stagehand industry research verified through professional practitioner review. External sources are documented in the sources/ folder. Before using in new course development, verify against current industry standards (IATSE, OSHA, ESTA) — regulatory/safety standards may have changed since original research date.

### 2. Foundational Live Production Rigging Course (Archived)

**Source:** contentrepo / `codex/content-database-session-001` branch  
**Location:** `/research/contentrepo-historical-archive/rigging-course-archived/`  
**Status:** ⚠ ARCHIVED — not live, security-reviewed, undeployed  
**Disposition:** ARCHIVE OPTIONAL — preserved for reference, not current development target

**Contents:**
- `README.md` — Course overview
- `database/` — Course structure and metadata
- `rag-records/` — RAG index records
- `source-artifacts/` — Original source materials

**Note:** This is an experimental course structure that was built but never deployed. It represents work-in-progress rigging curriculum that is outside current scope (owner's expertise is in ground/support work, not rigging). Preserved for future reference if rigging curriculum becomes a development target.

---

## Non-Migrated / Deleted Materials

### Branches Examined But Not Migrated

| Branch | Contents | Decision | Reason |
|---|---|---|---|
| `main` | 2 files (.gitignore, README.md) | DELETE | Shell/empty — no unique content |
| `claude/test-coverage-analysis-vii2pv` | 565 files, full monorepo snapshot | ARCHIVE (optional extraction) | GitHub Actions workflows and test infrastructure can be referenced from GitHub history if needed; not migrated to avoid duplication |
| `gh-pages` | 548 files, final 2026-06-29 deployment snapshot | KEEP in GitHub | Final deployment archive; kept for provenance, not duplicated to thecrewblueprint |
| `gh-pages-preview` | 557 files, stale experiment | DELETE | No unique content; identified as redundant preview branch |
| `dev/pi-network-auth` | 551 files, experimental auth backend | DELETE (optional retention) | Security-reviewed but undeployed; no active use; decision deferred to owner |
| `thecrewblueprint-glitch-patch-1` | Deployment history | DELETE | Duplicate deployment records; no unique content |

---

## Contentrepo Retirement Plan (Phase 4)

**Phase 3 complete:** Content migration to thecrewblueprint finished.

**Phase 4 (pending owner authorization):**
1. Final commit to contentrepo documenting retirement
2. Archive contentrepo on GitHub (read-only, no new pushes/PRs)
3. Update contentrepo description: "Archived 2026-08-16 — migrated to thecrewblueprint. See 50yearroadmap/CHANGELOG.md for migration record."
4. Delete non-critical branches (gh-pages-preview, thecrewblueprint-glitch-patch-1, optionally dev/pi-network-auth)
5. Keep gh-pages as final deployment snapshot (archive only, do not use)
6. Update 50yearroadmap CHANGELOG and governance/REPOSITORY_AUTHORITY_MAP.md

---

## Verification Checklist

- [x] First Two Years Stagehand Research Packet copied and verified
- [x] Rigging course archived
- [x] Migration manifest created
- [ ] Owner review of migrated materials (pending)
- [ ] All sources verified and accessible (pending Phase 4)
- [ ] Contentrepo repository archived on GitHub (pending Phase 4)
- [ ] Governance records updated (pending Phase 4)

---

**Next step:** Owner decision on Phase 4 execution (contentrepo archival and branch cleanup).
