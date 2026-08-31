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

This repository inherits the system-wide change-control policy from `50yearroadmap`.

For substantive agent-authored work:

**current canonical `main` → dedicated work branch → coherent checkpoint commits → draft PR → audit/review → required owner approval → merge → verification/record**

- `main` is this repository's canonical accepted state.
- A work branch and PR contain proposed/in-progress state.
- Opening or updating a PR is not approval and does not grant permission to merge.
- Preserve meaningful work on the branch/PR before an agent session or workspace can disappear.
- If another authorized agent continues an unfinished PR, inspect the existing diff/history and preserve provenance rather than silently replacing predecessor work.
- Trivial, emergency, runtime-generated-data, and explicit owner-override exceptions come from `50yearroadmap/governance/CHANGE_CONTROL.md`.
- PR-first governance does not authorize paid CI, metered runners, external validation services, or other cost-incurring automation.

Git identity for commits in this repository remains:

`git -c user.name="Deadhang Labor LLC" -c user.email="thecrewblueprint@gmail.com" commit ...`

## Shipping and validation

Every content or diagram change gets link-checked across all HTML files with zero broken links before it is proposed as ready to ship.

After accepted Crew Blueprint changes are merged and verified, relevant durable state is synchronized into `50yearroadmap` tracking (`companies/crew-blueprint/`, `roadmap.json` where applicable, and `CHANGELOG.md`). Write access to `50yearroadmap` requires a separate explicit owner ask/grant; finishing work here does not authorize writing there.

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

Repository write authority and merge authority remain separate. A Crew Blueprint PR can be fully prepared for review without implying permission to merge it.
