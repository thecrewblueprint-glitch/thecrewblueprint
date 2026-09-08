# CLAUDE.md — Session Preferences

Read this before starting work. These are standing preferences from the owner, not one-off requests. They apply to every session.

## Never use AskUserQuestion (or any multiple-choice/decision-card UI)

Do not use the `AskUserQuestion` tool or structured multiple-choice prompt UI. Converse in plain text. If a decision genuinely requires the owner, ask directly in a normal chat message.

## Owner review happens in conversation

The owner does not review pull requests in the GitHub interface and should not be sent PR links as an expected review action. Treat branches and PRs as internal technical audit/continuation containers.

Agents must perform the technical diff, validation and governance review themselves; explain material results and uncertainties in chat; and never substitute “review this PR” for an understandable handoff.

## Repository operating model

`AGENTS.md` is the local canonical operating rule. `main` is accepted state.

During the current Crew Blueprint build phase, visible directly rendered work may use the validated direct-to-`main` path when owner-directed. Below-the-surface structural work — schemas, pipelines, admission/security, governance and instruction-surface changes — remains PR-first.

Git identity for commits remains:

`git -c user.name="Deadhang Labor LLC" -c user.email="thecrewblueprint@gmail.com" commit ...`

## Curriculum generation rule

Do **not** require V1, V2, archived, experimental and future curriculum generations to carry identical lesson bodies.

The repository may have an owner-authorized successor curriculum. Historical curriculum stays preserved verbatim as evidence/reference material. Only presentation variants of the **same accepted curriculum generation** are required to keep content and instructional meaning aligned unless a versioned content change supersedes them.

Never destroy unique older curriculum to simplify the current product. Use `content/archive/README.md` and the archive manifests before retiring or replacing materially distinct bodies.

## Permanent source-domain firewall

Crew Blueprint is for learners.

Admissible curriculum evidence includes applicable OSHA/regulatory material, statutes and official agency guidance, recognized consensus standards such as applicable ANSI material within copyright limits, manufacturer documentation, legitimate technical references, credential-body guidance, educational sources and clearly labeled practitioner knowledge when appropriate.

Do **not** use Production Atlas employer, vacancy, hiring, pay, market, demand, labor-route, worker-review or related employment-intelligence data as Crew Blueprint curriculum evidence or learner-facing course content. Atlas may influence private product-planning questions such as where a broad competency deserves more educational research, but the learner-facing claim must be supported independently by admissible education/technical/safety evidence. Crew Blueprint may link to Atlas as a separate work-search destination.

Do **not** use Deadhang Labor LLC pricing, margins, financials, insurance strategy, vendor/procurement information, client information, business-development research, market strategy, sourcing methods, operating methods or related commercial intelligence in Crew Blueprint research, examples, assessments or public copy.

The boundary runs both directions. Crew Blueprint educational evidence must not be repurposed to expose Deadhang private operations or procurement logic. If a Roadmapdev or other package mixes domains, split or reject it before use rather than filtering it only at render time.

## Shipping and validation

Every content or diagram change gets link-checked across all HTML files with zero broken internal links before it is represented as shipped or ready to ship. Run proportionate validators for the affected surface.

After accepted Crew Blueprint changes are verified, route relevant durable state through the current three-plane contract: `50yearroadmap` is the canonical Git closeout/current-state bridge, Supabase stores structured admitted state/provenance, and Roadmapdev consumes admitted state for intelligence. Automatic synchronization cannot manufacture cross-repository write authority.

## Anti-Robot Course Writing Rule

Course writing should sound like direct practitioner instruction, not corporate copy.

- Avoid generic corporate/AI jargon.
- Prefer direct active constructions and concrete subjects.
- State safety and authority boundaries clearly.
- Use field terminology where appropriate without pretending one employer/site convention is universal.
- Do not turn awareness material into instructions for controlled or safety-critical work.

## Paired with 50yearroadmap

This repo is governed by `50yearroadmap`'s `companies/crew-blueprint/` folder and top-level system governance. At the start of substantive work, inspect current `main`, applicable governance and existing branches/PRs before creating duplicate work.

When wording conflicts, use the newest applicable owner-approved governance and repository evidence rather than stale copied instructions.
