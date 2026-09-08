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

During the current build phase, visible physically manifested site content — course pages, copy, front-end structure/styling, and other directly rendered pages — may go straight to `main` under the owner-approved build-phase exception. Changes below the visible surface — schemas, build/validation pipelines, admission/security logic, governance and other structural behavior — remain PR-first.

A branch or PR is proposed/in-progress state. Opening a PR is not permission to merge. Repository write authority, PR authority, and merge authority remain separate.

## 3. Scope discipline

Keep changes focused on the authorized Crew Blueprint task. Do not silently overwrite another agent's unexplained work. When continuing an existing PR, inspect its commits/diff/history and preserve provenance.

## 4. Curriculum generations and content integrity

The old cross-build rule requiring every historical, current, alternate and future build to carry identical curriculum is superseded.

The controlling model is now **versioned curriculum generations with permanent historical retention**:

- `main` may contain an owner-authorized successor curriculum whose architecture, course packaging, sequencing and lesson bodies differ materially from V1, V2, clean-sheet experiments or other historical generations.
- Historical curriculum is evidence/reference material, not a perpetual requirement that future products reproduce the same bodies.
- Presentation variants of the **same accepted curriculum generation** must keep lesson text, assessments, answers, citations, safety boundaries and instructional meaning aligned unless an explicit versioned content change supersedes them.
- A new curriculum generation must preserve the prior materially distinct bodies under the archive rules before those bodies are retired from the current product.
- Do not rewrite historical builds merely to make them match a successor curriculum.
- Do not delete unique older content because it is no longer learner-facing.

The current rebuild may therefore create new courses and reorganize or replace older course packaging when the owner has authorized the successor direction and historical material remains preserved.

### 4.0 Permanent source-domain firewall

Crew Blueprint is a learner-content system. It must remain separate from Deadhang Labor LLC commercial intelligence and Production Atlas employment/market intelligence in both directions.

**Admissible curriculum evidence includes:**

- applicable OSHA requirements and official regulatory material;
- statutes, regulations and official agency guidance;
- recognized consensus standards, including applicable ANSI material, with copyright limits respected;
- manufacturer documentation, manuals, technical bulletins and model-specific instructions;
- legitimate technical references, educational material and credential-body guidance;
- clearly labeled practitioner knowledge where appropriate and where no stronger source governs the claim.

**Not admissible as Crew Blueprint curriculum evidence or learner-facing content:**

- Production Atlas employer, vacancy, hiring, pay, market, demand, labor-route, worker-review, competitive or other employment-intelligence datasets;
- Deadhang Labor LLC pricing, margins, financials, insurance strategy, vendor/procurement information, client information, business-development research, market strategy, sourcing methods, operating methods or other private/commercial intelligence;
- Roadmapdev business-side research whose purpose is Deadhang commercial strategy or Atlas employment intelligence rather than learner education.

Employment or market research may inform private product-planning questions such as which broad competency domains deserve further educational research, but **it does not become course evidence and must not be copied, paraphrased or surfaced as learner-facing claims.** Learner-facing claims must stand on admissible educational/technical/safety evidence.

Crew Blueprint may link outward to Production Atlas as a separate place to explore work. That navigation link does not authorize copying, ranking, embedding or importing Atlas data into curriculum, assessments or learner recommendations.

The firewall also runs outward from Crew Blueprint: curriculum, standards research and educational evidence must not be repurposed to expose Deadhang's private procurement logic, financial model, client/vendor strategy or internal operating intelligence.

If a source package mixes admissible educational evidence with non-admissible Atlas or Deadhang intelligence, split or reject it before use. Do not rely on rendering-time filtering.

Crew Blueprint content must preserve these boundaries:

- educational content does not imply certification, licensing, employer authorization, union status or practical qualification;
- distinguish OSHA/legal requirements, consensus standards, manufacturer instructions, employer/local practice, practitioner experience and Crew Blueprint instructional framing;
- preserve qualifications when terminology or practice varies by employer, venue, local, region, manufacturer or production context;
- do not turn model-specific handling guidance into universal industry rules;
- do not teach specialized electrical, rigging, structural, operation, configuration, repair or other safety-critical tasks as ordinary beginner authority;
- source externally verifiable claims where reasonably possible and label practitioner-derived guidance honestly.

The research library's source hierarchy and interpretation rules remain authoritative for research-backed curriculum work, subject to the firewall above.

### 4.1 Permanent historical curriculum retention

Historical curriculum is part of the repository evidence base and must remain directly retrievable for side-by-side comparison and future reuse.

- Read `content/archive/README.md` and `content/archive/diff-manifest.json` before materially rewriting, collapsing, reclassifying, retiring, replacing or pruning curriculum.
- Do not delete, squash away, force-overwrite or otherwise destroy archive branches, historical tags, legacy course trees, raw drafts, alternate course bodies, syllabus iterations or materially distinct prior presentations that contain unique curriculum evidence.
- Git history alone is not sufficient for important prior bodies. Before a materially different current body is replaced or retired, preserve the prior body verbatim in the working-tree archive and register its source ref/path/blob lineage in `content/archive/diff-manifest.json`.
- A file labeled verbatim must not be silently normalized, corrected, rewritten, reformatted or safety-edited. Changes belong in a newer version while the earlier text remains intact.
- Preservation does not create publication authority. Old bodies remain evidence/reuse candidates and must still pass current evidence, safety, architecture and owner-review gates before restoration.
- No historical curriculum source may be pruned until unique bodies are preserved and the owner explicitly approves the specific deletion.

## 5. Writing standard

Follow the Anti-Robot Course Writing Rule in `CLAUDE.md`. Course writing should sound like direct practitioner instruction rather than generic corporate or AI prose.

## 6. Validation and publishing

For content or diagram changes, link-check all HTML and resolve broken internal links before representing the site as ready to ship. Validate affected pages/content proportionately to the change. Do not enable paid CI, metered runners or other cost-generating validation without explicit owner authorization.

After an accepted Crew Blueprint change is verified, route relevant current-state closeout through the three-plane contract: `50yearroadmap` is the governance/current-state bridge, Supabase stores admitted structured state/provenance, and Roadmapdev consumes admitted state for intelligence. Synchronization never grants unrelated cross-repository mutation authority.

## 7. Research workflow

Use the current research workflow documented in `research/README.md` and current handoff notes. Preserve separate source packages and trace learner-facing claims back to the strongest admissible educational evidence.

For research, course-audit, citation-trace or gap-analysis work, read `research/agent-retrieval-manifest.json` as the repository retrieval entrypoint. The normalized JSONL evidence matrix remains the source of truth for Crew Blueprint claim/source/competency/review lineage.

Production Atlas is **not** a Crew Blueprint curriculum-evidence source. Do not import or use Atlas hiring, employer, vacancy, pay, market, demand, labor-route, worker-review or related industry-intelligence data in course claims, assessments or public learning content.

Roadmapdev may contain multiple research domains. Before using Roadmapdev material for Crew Blueprint, verify that it is explicitly educational/curriculum research and contains no Deadhang commercial or Atlas employment-intelligence payload. If mixed, split or reject it before admission.

`research/ecosystem/relationship-map.json` describes system relationships and navigation/governance edges; it does not grant content-admission authority.

## 8. Owner authority

The owner controls directional product decisions, scope changes, repository write-mode switches, exceptions to the normal change-control path and canonical integration where approval is required.

Agents may investigate and prepare complete proposals within granted authority. Do not interpret the ability to prepare a PR as authority to merge it.
