# Issue #61 blind-build research index

**Date:** 2026-09-10  
**Purpose:** define the evidence available to independent Crew Blueprint build candidates before comparison against Roadmapdev analysis.  
**Status:** research/indexing artifact; not learner-facing publication authority.

## 1. Experiment objective

Produce two independently reasoned candidate implementations from the same neutral evidence base:

1. **Claude Opus candidate**
2. **OpenAI candidate**

Neither candidate may inspect Roadmapdev's decision/recommendation artifacts before its candidate architecture and implementation output are frozen. After both candidates are frozen, they may be compared against each other, the owner doctrine, and Roadmapdev's separate analysis.

This index deliberately separates **controlling owner/product requirements**, **raw/reference source versions**, **neutral technical evidence**, **derived/possibly contaminating analyses**, and **withheld comparison material**.

---

## 2. Controlling owner/product doctrine — REQUIRED

These sources define requirements that both blind builders must satisfy. They are not optional design suggestions.

### Issue #78 — target product architecture
`https://github.com/thecrewblueprint-glitch/thecrewblueprint/issues/78`

Controls:
- workforce-development product intent;
- zero-knowledge beginner progression;
- ORIENT / SUPPORT / OPERATE / DEEPEN-LEAD responsibility states;
- free/paid boundary based on technical responsibility rather than arbitrary course depth;
- safety-awareness exception;
- competency and role normalization requirement;
- learner knowledge/credential direction;
- Production Atlas separation;
- future entitlement and protected-content requirements;
- employer-recognition boundary;
- Deadhang separation.

### Issue #79 — responsibility/access remap
`https://github.com/thecrewblueprint-glitch/thecrewblueprint/issues/79`

Controls the current mapping contract and required stress tests for the 143-identity corpus.

### Issue #66 — Clerk/account architecture
`https://github.com/thecrewblueprint-glitch/thecrewblueprint/issues/66`

Use only where it does not conflict with #78. #78 supersedes the earlier universal no-paywall future assumption. Clerk remains the identity layer; entitlement/business logic must remain separate.

### Issue #71 — V4 UI/UX debt register
`https://github.com/thecrewblueprint-glitch/thecrewblueprint/issues/71`

Treat as a defect/maintainability input, not as an instruction to preserve V4's exact visual design.

### Issues #73 and #74 — feedback/contact and legal-review launch gates
- `https://github.com/thecrewblueprint-glitch/thecrewblueprint/issues/73`
- `https://github.com/thecrewblueprint-glitch/thecrewblueprint/issues/74`

These are integration/launch constraints. A blind candidate may defer implementation, but it must not design an architecture that makes them impractical or contradicts their privacy/legal boundaries.

---

## 3. Raw/reference product versions — REQUIRED

These are evidence/reference states, not automatic winners.

### Frozen V2
- Branch: `archive/frozen-v2-exact-2026-09-07`
- Commit: `1b1ddb0649d5a66bfff91b74791b4f3ce4f4c256`

Use to inspect:
- curriculum breadth;
- long-form/deeper course material;
- Field Skills and department content;
- learner/course/site patterns that may still be useful;
- historical identity/content relationships.

Do not assume V2 navigation, catalog density, progression, or theme is the target.

### Frozen clean-sheet
- Branch: `archive/frozen-vnext-clean-sheet-exact-2026-09-07`
- Commit: `4378c3954efd8e8fee7b98842493e932567341b7`

Use to inspect:
- situation/work-centered journey design;
- Context Lab treatment;
- department discovery;
- alternate information architecture;
- independently developed learner-flow ideas.

Do not assume clean-sheet taxonomy or presentation is the target.

### V4 reference state
Use the preserved V4 references, not current `main` as a substitute:

- Pre-successor V4 reference: `e7abba17f9f81221ca41bd48b2f94bd32cdae4a4`
- Restore branch commit: `cfb21598fbf37d46ec031ec36d5195969bb9dfab`
- Historical restore merge: `7c76b7ce885f5ebe0c9d36e04314d448d80cce12`

Use to inspect:
- compact four-course foundation;
- course shell/dashboard behavior;
- assessment cadence;
- source/safety treatment;
- learner-facing visual language;
- account integration direction;
- known implementation debt identified in #71.

### Current repository frontier — ORIENTATION ONLY
At creation of this packet:

- `main`: `cd3ef36077535b41c7a405065c186c4af199b5ea`

Current `main` contains later successor/projection work and should **not** be treated as neutral source evidence for the blind architecture choice. Builders may use it only to understand current repository mechanics, tests, and non-semantic infrastructure after their architecture decision is frozen.

---

## 4. Neutral curriculum/evidence corpus — REQUIRED

Both builders should inspect the current Crew Blueprint matrix and canonical source material directly where needed.

Primary areas:
- `research/matrix/`
- `content/`
- `content/archive/`
- current course bodies and source/evidence records

Required rule:

> When a higher-level analysis conflicts with source curriculum/evidence, inspect the underlying evidence before deciding.

Do not treat generated projections as canonical truth.

---

## 5. Owner-reviewed post-#78 architecture artifacts — REQUIRED

These encode owner-approved/current doctrine implementation boundaries and may be used by both blind builders because they are now part of the controlling project state.

- `research/integration/responsibility-access-contract-2026-09-10.json`
- `research/integration/responsibility-access-adjudication-policy-2026-09-10.md`
- `research/integration/responsibility-access-reviewed-overrides-2026-09-10.json`
- `research/integration/beginner-foundation-responsibility-map-2026-09-10.json`
- `research/integration/target-product-migration-register-2026-09-10.md`

Relevant implementation history:
- PR #81 — responsibility/access migration contract
- PR #82 — 143-ID deterministic responsibility/access classification
- PR #83 — reviewed adjudication layer
- PR #84 — V4 beginner foundation responsibility map
- PR #85 — Systems Thinking field-first correction
- PR #86 — Department Explorer practical-orientation correction

Builders may disagree with implementation details only where they can show a direct conflict with controlling owner doctrine, stronger source evidence, safety/accessibility requirements, or a concrete technical defect. Such disagreement must be recorded in the candidate's deviation register.

---

## 6. Existing neutral research useful to both candidates — PERMITTED / RECOMMENDED

These files contain useful research or source-oriented analysis that predates the final candidate comparison. Builders may inspect them, but should distinguish facts/evidence from prior recommendations.

- `research/analysis/audience-employer-discovery-synthesis-2026-09-06.md`
- `research/analysis/clean-sheet-learning-product-2026-09-06.md`
- `research/analysis/clean-sheet-learning-product-source-ledger-2026-09-06.json`
- `research/analysis/clean-sheet-v1-ui-ux-usability-audit-2026-09-06.md`
- `research/analysis/course-product-classification-2026-09-06.json`
- `research/analysis/course-system-situation-2026-09-06.json`
- `research/analysis/ground-field-foundation-architecture-2026-09-06.md`
- `research/analysis/live-production-role-family-map-2026-09-06.json`
- `research/analysis/research-priorities-2026-09-06.json`
- `research/analysis/target-audience-content-strategy-and-course-catalog-2026-09-06.md`
- `docs/INSTRUCTIONAL_MEDIA_FRAMEWORK_V4.md`
- `research/integration/sitewide-instructional-media-map-2026-09-09.json`
- `research/integration/source-citation-regulatory-provenance-2026-09-09.json`

Caution: any file that contains a recommendation should be treated as one input, not controlling authority, unless separately accepted by owner doctrine.

---

## 7. Derived architecture artifacts that can contaminate a blind comparison — WITHHOLD UNTIL CANDIDATE FREEZE

These artifacts are useful later, but they encode prior synthesis choices or Roadmapdev-derived direction. They must not be supplied as candidate-generation inputs if the goal is a meaningful independent comparison.

### Withhold
- PR #57 narrative and its proposed career-guided synthesis as a recommendation source
- `research/analysis/vnext-career-guided-course-map-2026-09-07.md`
- `research/analysis/vnext-career-guided-course-map-2026-09-07.json`
- PR #72 — Roadmapdev-informed successor product
- PRs #76–#77 and generated successor projections where they embody the prior synthesis choice
- `research/integration/job-demand-curriculum-bridge-2026-09-09.json` when used as a Roadmapdev-derived recommendation signal rather than raw evidence
- `research/integration/knowledge-base-system-map-2026-09-09.json` if it contains accepted synthesis decisions being evaluated
- Roadmapdev planning/decision/recommendation artifacts described in Section 9

Important distinction: builders may still inspect **raw source facts** that also informed those artifacts. What is withheld is the previous model's conclusion/synthesis, not the underlying public or authoritative evidence.

---

## 8. Research gaps that may require fresh work

A candidate may perform additional research only when a material decision cannot be resolved from the repository's authoritative evidence. Record every new research action in the candidate's research log.

Priority research gaps:

### A. Role/competency normalization
Need evidence for:
- common responsibility boundaries across employer titles;
- where titles vary but competency expectations converge;
- where a role name is too employer-specific to become a canonical curriculum key.

Preferred sources:
1. primary employer role descriptions;
2. union/training/credential-body material where applicable;
3. manufacturer/system documentation for technical role expectations;
4. clearly labeled practitioner evidence only where higher-authority evidence is unavailable.

### B. Assessment validity
Need to distinguish:
- knowledge recall;
- scenario judgment;
- practical skill;
- supervised demonstration;
- qualification/certification/authorization.

Research should improve the truthfulness of credential claims, not invent stronger credential status.

### C. Controlled specialties
Rigging, production power/electrical, lasers/effects, automation, fall-protection-adjacent work, and other controlled/high-risk subjects require stronger authority checks before operational content is published.

### D. Protected paid-content architecture
Before monetized OPERATE/DEEPEN content is implemented, confirm an architecture that authorizes before delivery rather than hiding static client-side bodies.

### E. Accessibility and mobile interaction
Validate against current web accessibility practice for navigation, course progress, assessments, dialogs/dropdowns, media, focus state, contrast, keyboard interaction, and reduced motion.

### F. Portable competency record
Evaluate standards/interoperability options before inventing a proprietary credential format.

---

## 9. Roadmapdev comparison set — SEALED / WITHHELD DURING BLIND GENERATION

Roadmapdev remains a separate intelligence source. Its decision/recommendation set must be opened only after both candidate outputs are frozen.

Known comparison-set location includes Roadmapdev planning/analysis material related to the Crew Blueprint integrated rebuild. Do not retrieve, summarize, quote, or inspect its substantive conclusions during candidate generation.

At comparison time, create a separate manifest that records:
- exact Roadmapdev files/commits opened;
- decision timestamp;
- evidence-through date;
- recommendation status;
- any later owner decisions that superseded part of the original analysis.

This prevents a stale Roadmapdev recommendation from being judged as though it had access to later owner doctrine.

---

## 10. Required research log for each candidate

Each candidate must create a machine-readable or Markdown research log containing:

- source path or URL;
- source class: owner doctrine / frozen reference / current canonical evidence / external primary / external secondary;
- date accessed;
- factual question answered;
- whether the source influenced architecture, curriculum, safety, UX, or implementation;
- unresolved conflict if any;
- explicit statement that Roadmapdev comparison artifacts were not opened before candidate freeze.

No uncited 'industry standard' assumptions should determine a material architecture decision when verifiable evidence is available.
