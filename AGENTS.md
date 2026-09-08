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

For direct owner-requested work inside The Crew Blueprint, the request itself authorizes canonical integration unless the owner explicitly asks for a proposal, review, or work-branch-only result.

During the current build phase, visible physically manifested site content — course pages, copy, front-end structure/styling and directly rendered pages — may go directly to `main` under the accepted build-phase visible-content exception. The owner's live review of the published site is the audit step for this category.

Changes below the visible surface — governance, schema/data architecture, access/security logic, validation/build pipelines and other structural behavior — remain PR-first.

A branch or PR is proposed state. Do not merge without the applicable authority. Preserve coherent work when interrupted and do not overwrite unexplained predecessor work.

## 3. Scope discipline

Keep changes focused on the authorized Crew Blueprint task. Do not use a content/governance task to silently change unrelated systems. Cross-repository read access does not grant write authority elsewhere.

## 4. Curriculum integrity and successor architecture

Crew Blueprint may adopt a materially new **successor curriculum** when the owner explicitly authorizes a redesign.

The old rule that every historical/current/alternate build must always carry identical curriculum is superseded by this successor model.

- `main` may carry the current accepted successor curriculum.
- Frozen V2, clean-sheet, historical, review and archived products remain preserved as reference/evidence states rather than being rewritten for parity.
- Content parity is required only among current surfaces that intentionally render the same canonical successor content.
- Before materially replacing or retiring current curriculum, preserve the prior body under the permanent historical-retention rules.
- Historical preservation does not create publication authority.
- New course packaging may be completely different from older courses, but it must retain traceable competency/research/evidence lineage.

### 4.0 Job-market-to-curriculum bridge

The job market may shape **what the curriculum teaches**. It may not become raw learner content.

Controlling transformation:

`public employment/industry evidence → Roadmapdev normalized competency-demand signal → Crew Blueprint curriculum priority → independent instructional evidence → learner-facing course`

Roadmapdev may use public employment/market evidence to identify recurring non-identifying competency needs such as:

- general stage workflow;
- communication and cueing;
- equipment identification and stewardship;
- load-in/load-out and logistics;
- department workflow;
- signal/system reasoning;
- documentation;
- troubleshooting and escalation;
- warehouse/shop/QC interfaces;
- crew coordination and leadership;
- safety, stop-work and authorization boundaries.

Normalized demand signals may influence:

- which competencies receive courses;
- sequencing and learner-depth decisions;
- which advanced pathways warrant development;
- how much curriculum depth a recurring competency deserves.

They are **planning evidence, not instructional authority**.

Do not copy Production Atlas employer lists, vacancies, pay data, market rankings, current opportunities, worker reviews, labor-route records or similar volatile employment data into course bodies, assessments, learner examples or learner profiles.

Technical and safety claims must be supported by the appropriate instructional source class, including as applicable:

- OSHA and official regulatory material;
- statutes/regulations and official agency guidance;
- recognized consensus standards, including applicable ANSI/ESTA material, within copyright limits;
- manufacturer manuals/documentation;
- legitimate technical/educational references;
- credential-body guidance;
- clearly labeled practitioner knowledge where appropriate.

### 4.1 Deadhang commercial firewall

Deadhang Labor LLC is the owner/parent relationship. Ownership does not authorize commercial-data ingestion into Crew Blueprint.

Do **not** use Deadhang pricing, margins, financials, insurance strategy, vendor/procurement information, client information, business-development research, market strategy, sourcing methods, operating methods or other private/commercial intelligence in Crew Blueprint research, examples, assessments or learner-facing content.

The boundary runs outward too: Crew Blueprint learning material must not be repurposed to explain Deadhang's private procurement, finance, vendor/client or operating logic.

### 4.2 Production Atlas boundary

Production Atlas is the sibling work/hiring intelligence product.

Crew Blueprint may link learners to Production Atlas for current work, employer, market, labor-organization and public route information. Production Atlas records remain owned by Atlas.

Raw Atlas records are not Crew Blueprint lesson content. Roadmapdev may, however, transform public Atlas/employment evidence into normalized competency-demand signals as described in §4.0, provided the raw payload is not admitted into learner content.

### 4.3 Roadmapdev use

Roadmapdev contains multiple domains. Before using its material for Crew Blueprint:

- separate educational evidence from raw employment intelligence and Deadhang commercial intelligence;
- admit only domain-appropriate educational material and normalized competency-demand signals;
- preserve provenance privately;
- reject or split mixed packages before curriculum use.

### 4.4 Safety/authority boundaries

Crew Blueprint content must preserve these distinctions:

- education ≠ certification, licensing, union status or employer authorization;
- awareness/system literacy ≠ qualification;
- employer demand ≠ permission to perform controlled work;
- course completion ≠ observed practical competence;
- observed practice ≠ employer/site authorization.

Do not teach specialized electrical, rigging, structural, work-at-height, powered-equipment, automation, special-effects or other safety-critical operational procedures as ordinary beginner authority. Teach recognition, system context, communication, escalation and qualification boundaries where appropriate.

Distinguish OSHA/legal requirements, consensus standards, manufacturer instructions, employer/local practice, practitioner experience and Crew Blueprint instructional framing.

### 4.5 Permanent historical curriculum retention

Historical curriculum is part of the repository evidence base and must remain directly retrievable.

- Read `content/archive/README.md` and `content/archive/diff-manifest.json` before materially rewriting, collapsing, reclassifying, retiring, replacing or pruning curriculum.
- Do not delete or force-overwrite archive branches, historical tags, legacy course trees, raw drafts or materially distinct prior presentations containing unique content.
- Preserve exact prior text before replacement in the working-tree archive or another registered verbatim archive path.
- Git history alone is not sufficient for important prior bodies.
- Preserve even rejected, deferred, superseded or unpublished material when it contains substantive unique content.
- No historical curriculum source may be pruned without explicit owner approval after its unique material is preserved and indexed.

## 5. Writing standard

Follow the Anti-Robot Course Writing Rule in `CLAUDE.md`.

Course writing should be direct practitioner instruction. Every learner-facing unit should make clear, where relevant:

1. **what makes the worker useful to the crew/employer**, and
2. **what keeps the worker safe and inside the correct authority boundary**.

Do not narrate internal research mechanics to the learner unless the page itself is a source/methodology page.

## 6. Validation and publishing

For content or diagram changes, link-check all HTML and resolve broken internal links before representing the build as ready to ship.

Run proportionate validation for the affected surface. Do not restore or enable paid CI, metered runners, external validation services or recurring cost-generating automation without explicit owner authorization.

After accepted Crew Blueprint changes are verified, route relevant closeout/current-state through the active three-plane contract: `50yearroadmap` is the Git bridge/control plane, Supabase carries structured durable state/provenance, and Roadmapdev consumes admitted state for intelligence. This synchronization does not grant unrelated cross-repository write authority.

## 7. Research workflow

Use the current research workflow documented in `research/README.md` and current handoffs. Preserve source packages and trace claims to the strongest available evidence.

For research, course audit, citation trace or gap analysis, use `research/agent-retrieval-manifest.json` as the repository retrieval entrypoint. The normalized JSONL evidence matrix remains the source of truth for Crew Blueprint claim/source/competency/review lineage; generated Markdown views are audit surfaces.

Production Atlas is not a direct curriculum-content store. Use its public employment evidence only through the normalized demand-signal bridge described above.

## 8. Owner authority

The owner controls product direction, scope changes, repository write-mode exceptions and canonical integration where approval is required.

Agents may investigate and prepare complete proposals within granted authority. Capability does not create permission.
