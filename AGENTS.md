# AGENTS.md — The Crew Blueprint Operating Rules

This repository is the production/content repository for The Crew Blueprint. It is governed hierarchically by `50yearroadmap` and locally by this file plus `CLAUDE.md`.

## 1. Governance order

Before substantive work:

1. read `50yearroadmap/AGENT_ORIENTATION.md`;
2. read `50yearroadmap/governance/CHANGE_CONTROL.md` and `WRITE_ACCESS_PROTOCOL.md`;
3. read this file and `CLAUDE.md`;
4. read `50yearroadmap/companies/crew-blueprint/13_sops.md` and other Crew Blueprint branch docs relevant to the task;
5. inspect current `main` and existing task-related branches/PRs.

Top-level governance establishes the default change-control model. This repository may add stricter content, validation, and publishing rules but does not silently weaken system-wide authority boundaries.

## 2. Canonical and proposed state

`main` is the canonical accepted state for this repository.

Substantive agent-authored work normally uses:

`work branch → coherent commits → draft PR → audit/review → required approval → merge → verify`

For direct owner-requested work inside The Crew Blueprint, the request itself authorizes canonical integration unless the owner explicitly asks for a proposal, review, or work-branch-only result. In that path, finish means: make the focused change, run proportionate validation, update `main`, and verify the GitHub Pages result. Do not leave completed owner-requested work only on a branch or send the owner a PR for review.

A branch or PR is proposed/in-progress state. Opening a PR is not permission to merge. Repository write authority, PR authority, and merge authority remain separate.

If a session may end before completion, preserve coherent work and update the PR with completed work, unfinished work, validation performed, known issues, and the exact continuation step. Leave interrupted work unmerged.

## 3. Scope discipline

Keep changes focused on the authorized Crew Blueprint task. Do not use a governance/content task as an excuse to redesign unrelated pages, rewrite unrelated course material, change architecture, or expand product scope.

Do not silently overwrite another agent's unexplained work. When continuing an existing PR, inspect its commits/diff/history and preserve provenance.

## 4. Course-content integrity

Crew Blueprint content must preserve these boundaries:

- educational content does not imply certification, licensing, employer authorization, union status, or practical qualification;
- distinguish OSHA/legal requirements, consensus standards, manufacturer instructions, employer/local practice, practitioner experience, and Crew Blueprint instructional framing;
- preserve qualifications when terminology or practice varies by employer, venue, local, region, manufacturer, or production context;
- do not turn model-specific handling guidance into universal industry rules;
- do not teach specialized electrical, rigging, structural, operation, configuration, repair, or safety-critical tasks as ordinary beginner authority;
- source externally verifiable claims where reasonably possible and label practitioner-derived guidance honestly.

The research library's source hierarchy and interpretation rules remain authoritative for research-backed curriculum work.

## 5. Writing standard

Follow the Anti-Robot Course Writing Rule in `CLAUDE.md`. Course writing should sound like direct practitioner instruction rather than generic corporate or AI prose.

## 6. Validation and publishing

For content or diagram changes, link-check all HTML and resolve broken internal links before representing the PR as ready to ship.

Validate the affected pages/content proportionately to the change. Do not restore or enable paid CI, metered runners, external validation services, or other cost-incurring automation without explicit owner authorization.

Keep execution proportionate: prefer one inspection pass, one focused edit or shared implementation, one relevant validation batch, and one canonical checkpoint. Avoid repetitive per-file commands when a shared component or bounded batch can safely produce the same result.

After an accepted Crew Blueprint change is merged and verified, synchronize durable ecosystem state into `50yearroadmap` only after the owner explicitly switches repository write authority. A merge here does not authorize writes there.

## 7. Research workflow

Use the current research workflow documented in `research/README.md` and current handoff notes. Preserve separate source packages and trace claims back to the strongest available evidence. Legacy workflow references do not override newer explicit workflow corrections.

## 8. Owner authority

The owner controls directional product decisions, scope changes, repository write-mode switches, exceptions to the normal change-control path, and canonical integration where approval is required.

Agents may investigate and prepare complete proposals within granted authority. Do not interpret the ability to prepare a PR as authority to merge it.
