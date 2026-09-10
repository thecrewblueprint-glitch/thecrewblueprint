# Issue #61 candidate evaluation rubric

**Date:** 2026-09-10  
**Purpose:** precommit the comparison method before Claude Opus, OpenAI, and Roadmapdev outputs are evaluated together.

This rubric is intentionally created **before** the two new candidate outputs are frozen so the scoring criteria cannot be retrofitted to favor whichever candidate looks best afterward.

---

## 1. Hard-fail / veto conditions

A candidate is not eligible for adoption as-is if it materially does any of the following:

1. destroys or rewrites frozen V2/V4/clean-sheet history;
2. silently drops canonical curriculum identities without lineage/disposition;
3. exposes private/personal research in public learner artifacts;
4. treats employer-demand evidence as technical/safety authority;
5. paywalls hazard-recognition, stop-work, escalation, or role-boundary knowledge needed by exposed learners;
6. represents online completion as practical qualification, licensing, certification, employer authorization, union status, or equivalent field competence without supporting authority;
7. delivers future paid lesson bodies as publicly retrievable static content protected only by client-side hiding;
8. makes Production Atlas volatile market/job data the Crew Blueprint instructional source of truth;
9. turns Crew Blueprint completion into automatic Deadhang contractor eligibility;
10. merges the blind experiment into `main` before comparison/owner acceptance.

A veto does not make the entire candidate useless. It means the candidate must be classified **ineligible as-is**, with salvageable components scored separately if useful.

---

## 2. Weighted score — 100 points

### A. Owner-doctrine fidelity — 18 points
Evaluate whether the candidate accurately implements #78/#79 rather than merely mentioning them.

Questions:
- Does it serve a true zero-knowledge learner before premature specialization?
- Does it preserve a path for experienced workers to bypass material they already know?
- Does it use responsibility/competency rather than arbitrary course-number depth?
- Does it preserve technical-specialist depth without forcing management progression?
- Does it keep management/business-administration content proportionate to the hands-on workforce mission?

### B. Responsibility, access, safety, and claim truthfulness — 15 points
Evaluate:
- ORIENT / SUPPORT / OPERATE / DEEPEN-LEAD coherence;
- free→paid technician threshold quality;
- controlled-specialty handling;
- safety-awareness-before-paywall behavior;
- practical-skill vs online-knowledge distinction;
- credential/authorization disclaimers and metadata.

### C. Curriculum integrity and 143-ID treatment — 12 points
Evaluate:
- canonical identity coverage;
- lineage preservation;
- sensible split/merge/reference treatment;
- Field Skills preservation;
- Context Lab use;
- avoidance of a flat 143-card learner catalog;
- avoidance of silent content loss.

### D. Learner information architecture and usability — 12 points
Evaluate both:
- zero-knowledge learner journey;
- working/experienced learner journey.

Look for:
- low decision burden at entry;
- clear next step;
- useful department/role discovery;
- understandable depth/responsibility transitions;
- navigation that works without requiring knowledge of internal taxonomy.

### E. Technical architecture and maintainability — 10 points
Evaluate:
- separation of source truth vs projections;
- stable IDs/routes;
- shared reusable shell/components;
- generated vs hand-maintained state;
- rollback/recovery quality;
- testability;
- avoidance of duplicated chrome/dead code;
- fit with low-cost/static-public-site constraints where appropriate.

### F. Learning design and assessment validity — 8 points
Evaluate:
- lessons organized around useful learning objectives;
- reasonable cognitive load;
- field-recognizable examples/scenarios;
- separation of lesson completion and assessment;
- end-of-course/session assessment cadence;
- mastery/retry behavior;
- truthful limits on what assessment proves.

### G. Identity, data, entitlement, and security architecture — 8 points
Evaluate:
- Clerk as identity rather than curriculum authority;
- learner record model;
- anonymous/public free experience;
- future entitlements independent of Stripe product IDs;
- authorization-before-delivery for paid content;
- owner/admin authorization;
- privacy-aware progress/credential design.

### H. Evidence, provenance, and research quality — 7 points
Evaluate:
- use of authoritative sources;
- traceability of architectural decisions;
- research log completeness;
- conflict handling;
- separation of fact from recommendation;
- explicit uncertainty instead of fabricated certainty.

### I. Visual system, accessibility, and performance — 5 points
Evaluate:
- hierarchy clarity;
- consistency;
- responsive/mobile behavior;
- keyboard/focus behavior;
- contrast/readability;
- reduced motion;
- media performance/provenance;
- whether visuals support learning rather than decorate it.

### J. Ecosystem and future-workforce extensibility — 5 points
Evaluate:
- Production Atlas bridge without data contamination;
- role/competency normalization;
- learner credential portability;
- employer-recognition states without implied endorsement;
- future employer-sponsored access/referral compatibility;
- separation from Deadhang contractor operations.

---

## 3. Scoring scale

Score each weighted category using a 0–5 quality rating, then multiply by the category weight fraction.

- **5 — Excellent:** fully coherent, evidence-backed, implementable, minimal material gaps.
- **4 — Strong:** good solution with bounded corrections needed.
- **3 — Adequate:** viable but several meaningful weaknesses or unresolved areas.
- **2 — Weak:** major architectural or learner-value shortcomings.
- **1 — Poor:** mostly fails the criterion or depends on unsupported assumptions.
- **0 — Missing/contradictory:** criterion absent or directly violated.

Record evidence for every category score. Do not assign a single unexplained total.

---

## 4. Non-score comparison dimensions

Some differences should be recorded even when they do not map neatly to a numeric winner.

For each candidate, record:
- most original useful idea;
- strongest retained legacy element;
- strongest rejection/simplification decision;
- biggest unnecessary complexity;
- biggest risk;
- highest-confidence improvement over current product;
- most important unresolved question;
- estimated migration difficulty from current repository state;
- estimated ongoing owner maintenance burden;
- degree of lock-in to a particular hosting/auth/payment architecture.

---

## 5. Roadmapdev comparison phase

Roadmapdev's prior decision/analysis remains sealed until both new candidates are frozen.

After freeze:

1. Create a Roadmapdev comparison manifest with exact source files, commits, timestamps, and evidence-through date.
2. Separate Roadmapdev **observations**, **analysis**, **recommendations**, and any **implementation artifacts**.
3. Identify which Roadmapdev assumptions predate later owner doctrine in #78/#79 and should therefore be judged as historically reasonable but now superseded.
4. Score the architectural recommendation using the same rubric where comparable.
5. Do not penalize Roadmapdev for implementation details it was never asked to build; mark those categories `not directly evaluated` and compare only supported scope.
6. Compare decision-level convergence/divergence separately from implementation quality.

Required three-way matrix:

| Decision area | Claude Opus | OpenAI | Roadmapdev | Owner doctrine | Evidence winner / synthesis |
|---|---|---|---|---|---|
| Beginner entry | | | | | |
| Experienced bypass | | | | | |
| Responsibility model | | | | | |
| Free/paid boundary | | | | | |
| 143-ID treatment | | | | | |
| Field Skills | | | | | |
| Context Labs | | | | | |
| Department architecture | | | | | |
| Course shell | | | | | |
| Assessment model | | | | | |
| Visual/navigation system | | | | | |
| Accounts/entitlement | | | | | |
| Credential model | | | | | |
| Employer recognition | | | | | |
| Production Atlas bridge | | | | | |
| Safety/qualification boundaries | | | | | |
| Build/deployment architecture | | | | | |
| Owner maintenance burden | | | | | |

---

## 6. Final synthesis rule

The comparison is **not a model popularity vote** and does not require selecting one candidate wholesale.

Final owner-facing recommendation should classify major elements as:

- **KEEP CURRENT** — current accepted implementation remains strongest;
- **ADOPT CLAUDE** — Claude candidate is best supported;
- **ADOPT OPENAI** — OpenAI candidate is best supported;
- **ADOPT ROADMAPDEV** — Roadmapdev recommendation remains best supported;
- **SYNTHESIZE** — best solution combines compatible elements;
- **RESEARCH FIRST** — evidence is insufficient or materially conflicting;
- **REJECT** — violates doctrine, safety, privacy, architecture, or evidence requirements.

Every final recommendation must cite the concrete candidate artifacts/evidence supporting it and distinguish owner preference from technical/evidence conclusions.
