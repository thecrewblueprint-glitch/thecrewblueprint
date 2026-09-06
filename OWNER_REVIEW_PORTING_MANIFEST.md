# Owner Review Course Content — Porting Manifest

**Purpose:** preserve full learner-facing course content off the public `main` surface while keeping it easy for authorized AI agents to inspect, compare, port, revise, and restore for owner review.

**Archive snapshot:** this branch was created from `thecrewblueprint/main` at commit `56b9ab97576b5000addc66535e29437c415e7f13` before the public owner-review cleanup.

## Public active set

Keep these learner-facing on `main`:

- `courses/stagehand-fundamentals.html`
- all Stagehand Field Skill routes (`courses/field-skill-*.html`)
- `courses/pathway-lighting-01-support.html`
- `courses/pathway-video-01-support.html`
- `courses/pathway-audio-01-support.html`
- `courses/pathway-staging-carpentry-01-support.html`
- `courses/pathway-backline-props-wardrobe-01-support.html`

## Owner Review / archived-content set

The following content is intentionally preserved here while `main` exposes only owner-review placeholders or no normal navigation:

- Department Course 2 / Systems content and its lesson pages
- Department Course 3 / Design or architecture content
- Lead tier courses
- Supervisor tier courses
- Rigging material
- Electrics / production-power material
- Production / coordination higher-tier material
- dynamically generated ecosystem-course content not part of the public active set
- `curriculum-map.html` full-ladder presentation
- `first-five-calls.html` standalone career-path presentation

## Important historical/version branches

Do not collapse these into one assumed "latest" course body. They remain useful comparison evidence:

- `archive/lead-supervisor-electrics-rigging-2026-09-06`
- `archive/v1-multipage-2026-09-03`
- `claude/production-courses-ui-ux-11l4vg`
- `curriculum/depth-authoring-2026-08-31`
- `curriculum/tiered-course-build-2026-08-30`
- `release/all-courses-live-2026-08-30`
- `release/course-ecosystem-build-2026-08-31`
- `ui/unified-course-shell-road-case`

The repository-wide course catalog produced before this cleanup identified **143 registered course identities** plus alternate/historical versions. Treat alternate versions as research/design evidence until the owner explicitly selects or reconciles them.

## Porting rule

When the owner wants to review a hidden course live:

1. inspect this branch plus any relevant historical/version branch;
2. compare the versions rather than assuming one is automatically authoritative;
3. preserve current research/evidence boundaries;
4. port the selected/reconciled learner content into the corresponding `main` placeholder route;
5. mark it clearly as Owner Review until the owner approves it;
6. do not silently promote it to Active.

## Content-writing rule

Content changes are gradual and require owner approval. Site/UI structure may change independently, but archived curriculum is not silently rewritten merely to match a new presentation.
