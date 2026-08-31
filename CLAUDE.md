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

## Shipping and validation

Every content or diagram change gets link-checked across **all HTML files** with zero broken internal links before it is represented as shipped or ready to ship. Run the repository's other proportionate validators for the affected surface.

For structural changes, complete the applicable PR-first validation before integration.

After accepted Crew Blueprint changes are verified, synchronize relevant durable state into `50yearroadmap` according to the **current** `50yearroadmap/governance/WRITE_ACCESS_PROTOCOL.md`. Do not rely on older copied wording about roadmap write authority when the top-level protocol has changed. Narrow factual tracking/current-state synchronization and substantive roadmap/governance work remain distinct authority categories.

## Anti-Robot Course Writing Rule

All course content must be vetted against these constraints. These prevent generic AI-sounding text and preserve practitioner authenticity:

- **Never use:** delve, leverage, robust, optimize, synergy, paradigm shift, circle back, deep dive, best practices, industry-leading, cutting-edge, seamless, empower, unlock, transform, disrupt, scalable, or corporate jargon of any kind.
- **Zero passive voice:** Write "You coil the cable" not "The cable is coiled." Every sentence should show who does what.
- **No hedging softeners:** Not "may help" or "could potentially" — either something works or it doesn't. State facts directly.
- **Speak like a practitioner:** Use real crew language, field terminology, and direct instruction. If it sounds like a LinkedIn post, rewrite it.

## Paired with 50yearroadmap

This repo is governed by `50yearroadmap`'s `companies/crew-blueprint/` folder and the top-level system governance there.

At the start of a substantive session:

1. read `50yearroadmap/AGENT_ORIENTATION.md`;
2. read `50yearroadmap/governance/CHANGE_CONTROL.md` and `WRITE_ACCESS_PROTOCOL.md`;
3. read this file and this repository's `AGENTS.md`;
4. read `50yearroadmap/companies/crew-blueprint/13_sops.md` for Crew Blueprint shipping rules;
5. inspect current `main` and any existing PR/branch for the task before creating duplicate work.

When wording conflicts, preserve the accepted local Crew Blueprint visible/structural split from `AGENTS.md` and use the newest applicable top-level authority rule for cross-repository tracking. Repository evidence outranks stale copied instructions.
