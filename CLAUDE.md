# CLAUDE.md — Session Preferences

Read this before starting work. These are standing preferences from the owner, not one-off requests. They apply to every session.

## Never use AskUserQuestion (or any multiple-choice/decision-card UI)

Do not use the `AskUserQuestion` tool or structured multiple-choice prompt UI. Converse in plain text. If a decision requires the owner, ask directly in a normal chat message.

## Owner review happens in conversation

The owner does not review pull requests in the GitHub interface and should not be sent PR links as an expected review action. Treat branches and PRs as internal technical audit/continuation containers.

Agents must:

- perform the technical diff, validation, and governance review themselves;
- explain the material result, consequences, uncertainties, and real owner decisions in plain language in chat;
- ask the owner for field judgment, direction, approval, or a vibe check only when it genuinely belongs to the owner;
- never substitute “review this PR” for an understandable conversational handoff.

Owner approval given in conversation may satisfy the owner-review step when the agent has already completed and truthfully reported the technical review. Merge authority remains separate unless the owner grants it or standing governance provides it.

## Repository operating model

`AGENTS.md` is the local canonical operating rule for this repository. `main` is accepted state.

During the current Crew Blueprint build phase, use the same visible-content versus structural-work split recorded in `AGENTS.md` and `50yearroadmap/governance/CHANGE_CONTROL.md`.

### Visible, directly rendered work

Changes the owner can directly inspect on the published site go through the validated direct-to-`main` path. This includes:

- course pages;
- public copy;
- front-end structure;
- styling;
- directly rendered diagrams and other visible page content.

For direct owner-requested visible work, the request itself authorizes canonical integration unless the owner explicitly asks for a proposal, review-only result, or work-branch-only result. Finish means: make the focused change, run proportionate validation, update `main`, and verify the published GitHub Pages result.

The owner's live review of the published site is the audit step for this category. Keep owner-review badges, `noindex`, disclaimer/boundary language, and other publication-state labels accurate whenever they apply.

### Below-the-surface structural work

Changes the owner cannot directly verify by looking at the rendered site remain PR-first. This includes:

- data/schema architecture;
- build or validation pipelines;
- admission/security logic;
- governance/instruction-surface changes;
- other structural behavior below the visible site surface.

Use:

**current canonical `main` → dedicated work branch → coherent checkpoint commits → draft PR → technical audit/review → required owner approval → authorized merge → verification/record**

A work branch or PR is proposed state. Opening or updating a PR does not by itself grant merge authority. Preserve meaningful work before an agent workspace can disappear, and never overwrite unexplained predecessor work.

Trivial, emergency, runtime-generated-data, factual-currency, and explicit owner exceptions come from the current `50yearroadmap/governance/CHANGE_CONTROL.md` and repository-local rules.

PR-first governance does not authorize paid CI, metered runners, external validation services, or other cost-incurring automation.

Git identity for commits in this repository remains:

`git -c user.name="Deadhang Labor LLC" -c user.email="thecrewblueprint@gmail.com" commit ...`

## Permanent source-domain firewall

Crew Blueprint is for learners. Its curriculum may be **prioritized by job-market demand** without importing the job-market dataset into lessons.

The controlling transformation is:

`public employment/industry evidence → Roadmapdev normalized competency-demand signal → Crew Blueprint curriculum priority → independent instructional evidence → learner-facing course`

### What employment intelligence may do

Roadmapdev may analyze public Production Atlas and other public employment evidence and reduce it into non-identifying, non-commercial competency-demand signals such as communication, equipment handling, department workflow, documentation, troubleshooting, shop/logistics, leadership, and safety-boundary needs.

Those normalized signals may influence:

- which competencies belong in the curriculum;
- which learning paths deserve more depth;
- which advanced pathways should be developed;
- sequencing and responsibility-depth decisions.

They are **planning evidence**, not instructional authority.

### What employment intelligence may not do

Do not copy or expose Production Atlas employer lists, vacancies, pay, market rankings, labor routes, worker reviews, current opportunities, or other volatile employment records inside Crew Blueprint lesson bodies, assessments, examples, or learner profiles.

Do not treat an employer posting or market trend as technical proof of how a task should be performed. Course claims and instruction must be supported by the appropriate source class: OSHA/official regulatory material, applicable law and agency guidance, recognized consensus standards such as ANSI/ESTA, manufacturer documentation, legitimate technical/educational references, credential-body guidance, or clearly labeled practitioner knowledge.

Crew Blueprint may link outward to Production Atlas as the separate place for current work, employer, market, and labor-route information.

### Deadhang commercial firewall

Do **not** use Deadhang Labor LLC pricing, margins, financials, insurance strategy, vendor/procurement information, client information, business-development research, market strategy, sourcing methods, operating methods, or related commercial intelligence in Crew Blueprint research, examples, course content, assessments, or public copy.

The boundary runs both directions. Crew Blueprint curriculum, standards research, and educational evidence must not be repurposed as an explanation of Deadhang's private business operations or procurement logic.

If a Roadmapdev or other package mixes normalized competency demand, educational evidence, raw employment data, or commercial intelligence, split the package before Crew Blueprint admission. Preserve provenance privately; expose only the domain-appropriate material.

## Successor curriculum rule

Historical Crew Blueprint versions are evidence and references, not permanent content-parity targets.

- The current accepted successor build may contain materially new curriculum when the owner authorizes a redesign.
- Frozen V2, clean-sheet, archived, review, and historical builds remain immutable reference products unless the owner explicitly reopens them.
- Do **not** rewrite frozen historical versions merely to make them match the current curriculum.
- Content parity is required only across current surfaces that intentionally render the same canonical successor content.
- Before materially replacing or retiring current content, preserve the prior body under the repository's historical-retention rules.
- A new course must trace back to the applicable competency/research/evidence lineage even when its wording and packaging are completely new.

## Shipping and validation

Every content or diagram change gets link-checked across **all HTML files** with zero broken internal links before it is represented as shipped or ready to ship. Run the repository's other proportionate validators for the affected surface.

For structural changes, complete the applicable PR-first validation before integration.

After accepted Crew Blueprint changes are verified, route relevant durable state through the current three-plane contract: `50yearroadmap` is the canonical Git closeout/current-state bridge, Supabase stores structured admitted state and provenance, and Roadmapdev consumes that admitted state for intelligence. Automatic closeout/current-state synchronization is distinct from substantive product/governance mutation and cannot manufacture cross-repository write authority.

## Anti-Robot Course Writing Rule

All course content must be vetted against these constraints. These prevent generic AI-sounding text and preserve practitioner authenticity:

- **Never use:** delve, leverage, robust, optimize, synergy, paradigm shift, circle back, deep dive, best practices, industry-leading, cutting-edge, seamless, empower, unlock, transform, disrupt, scalable, or corporate jargon of any kind.
- Prefer active, direct sentences that make the actor and responsibility clear.
- Avoid empty hedging. State the evidence, boundary, or uncertainty precisely.
- Speak like a practitioner: use real crew language, field terminology, and direct instruction. If it sounds like a corporate post, rewrite it.
- Explain both sides of practical readiness: **what makes the worker useful to the crew/employer** and **what keeps the worker inside safe, authorized boundaries**.

## Paired with 50yearroadmap

This repo is governed by `50yearroadmap`'s `companies/crew-blueprint/` folder and the top-level system governance there.

At the start of a substantive session:

1. read `50yearroadmap/AGENT_ORIENTATION.md`;
2. read `50yearroadmap/governance/CHANGE_CONTROL.md` and `WRITE_ACCESS_PROTOCOL.md`;
3. read this file and this repository's `AGENTS.md`;
4. read `50yearroadmap/companies/crew-blueprint/13_sops.md` for Crew Blueprint shipping rules;
5. inspect current `main` and any existing PR/branch for the task before creating duplicate work.

When wording conflicts, preserve the accepted local Crew Blueprint visible/structural split from `AGENTS.md` and use the newest applicable top-level authority rule for cross-repository tracking. Repository evidence outranks stale copied instructions.
