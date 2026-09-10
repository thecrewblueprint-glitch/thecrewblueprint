# Crew Blueprint Target-Product Migration Register

**Date:** 2026-09-10  
**Target authority:** Issue #78  
**Starting `main`:** `84aa321019e5bead30c5b2476353e7578bef8717`  
**Working branch:** `work/target-product-architecture-phase-0-2026-09-10`

> This register does not delete or rewrite the PR #57/V2/V4/clean-sheet history. It records where the accepted historical architecture must be migrated to the owner-directed target product.

## Governing target

Crew Blueprint is being built as a workforce education and assessed-knowledge system for the people who physically and technically put on live productions.

The learner journey is:

`zero knowledge → industry orientation → production-hand readiness → department awareness/support → technician pathway → deep technical/specialist knowledge → technical leadership where relevant`

The canonical access boundary is responsibility-based:

- **ORIENT — Free**
- **SUPPORT — Free**
- **OPERATE — Paid**
- **DEEPEN / LEAD — Paid**
- **REFERENCE / CONTEXT — contextual, not a primary ladder**
- **HISTORICAL / SUPERSEDED — lineage only**

Paid begins when instruction prepares a learner to determine, configure, verify, diagnose, operate with technical judgment, or assume responsibility for technical correctness beyond supervised hand-level support.

Safety awareness required for hazard recognition, stop-work, role boundaries, or escalation remains available before that paywall.

## Conflict register

| Current artifact / issue | Current assumption | #78 target correction | Action |
| --- | --- | --- | --- |
| Issue #61 | Stagehand is not a universal prerequisite; multiple lanes can be entered directly from the front door | A zero-knowledge learner needs a common live-production/hand foundation before informed specialization; prior experience/education may bypass or validate it | Supersede learner-entry language; retain version-integration mechanics |
| Issue #61 | Production Management, Stage Management, Venue/Site Operations appear as peer learner lanes | Keep only the portions that directly support technical production/leadership as primary learning; move administrative/business material to reference/context | Reclassify during 143-ID pass |
| Issue #61 | No paid-course entitlement model introduced | Introduce future OPERATE/DEEPEN entitlement boundary after classification | Replace future access rule, not current production behavior yet |
| Issue #66 | All published instructional content remains public and Clerk never gates course access | Clerk remains identity; free ORIENT/SUPPORT may be public; paid OPERATE/DEEPEN requires authenticated entitlement and protected delivery | Update account architecture before production auth build |
| `vnext-career-guided-course-map-2026-09-07.json` | `stagehand_not_universal_root=true`; six independent initial lanes | Preserve as PR #57 historical placement; derive a new responsibility/access classification and beginner-entry graph | Do not mutate old map in place |
| `v4-clean-sheet-to-v2-content-crosswalk-2026-09-09.json` | Department Explorer says it does not impose Stagehand Fundamentals as universal prerequisite | Reframe Explorer as the bridge from common production readiness into informed specialization; allow equivalent-prior-knowledge bypass | Create successor crosswalk rather than overwriting provenance |
| `generate-successor-projections.mjs` | Orientation emits direct lane choices and six independent initial lanes | New generator should emit common beginner foundation first for zero-knowledge flow, then department awareness/support, then paid technician depth | Change only after audited classification exists |
| `validate-successor-projections.mjs` | Protects the old six-lane / no-universal-stagehand invariant | Validation must eventually protect #78 responsibility/access and safety invariants instead | Replace only in same PR as new graph/projection contract |
| `job-demand-curriculum-bridge-2026-09-09.json` | Demand bridge contains strong PM/venue-management demand surfaces | Retain employer-demand evidence, but prevent it from promoting administrative management into equal curriculum prominence | Reclassify demand surfaces, keep evidence authority rule |
| V4 `Systems Thinking` | Synthetic foundation bundle pulls T3/T4 department/PM concepts upward and assesses abstract vocabulary | Keep the useful dependency/communication concept at ORIENT/SUPPORT; return department-specific system reasoning to paid technician/deeper lanes where appropriate | Rewrite course/assessment after foundation map is approved |
| V4 `Advanced` | General deep technical / lead / management discovery surface | Rebuild as department technician + technical-depth pathways; leadership is optional, management is not the default end-state | Defer UI until curriculum classification is complete |

## Non-negotiable invariants during migration

1. Preserve all 143 canonical identities as lineage/evidence until each is explicitly classified; do not silently delete knowledge.
2. Do not expose all 143 identities as equal public courses.
3. Do not infer that course completion creates field experience, certification, qualification, employer authorization, practical competency, or appointment to a job title.
4. Do not place hazard-recognition, stop-work, or role-boundary knowledge behind a paywall when a free/support learner may encounter that hazard.
5. Do not use job titles as the canonical curriculum schema; normalize employer requirements to competencies/responsibility states.
6. Do not allow employer demand evidence to become technical/safety instructional authority.
7. Do not represent an employer as recognizing or preferring Crew Blueprint training without explicit evidence/permission.
8. Clerk identifies the learner; application state controls entitlement; future Stripe records payment. None of those systems becomes curriculum authority.
9. Paid lesson bodies must eventually be authorized before delivery; client-side hiding alone is not a secure paywall.
10. Crew Blueprint completion alone never creates eligibility for the future Deadhang contractor pool.

## Remediation sequence

### Phase A — architecture correction

- [x] Create Issue #78 as target product doctrine.
- [x] Create `responsibility-access-contract-2026-09-10.json`.
- [x] Register the contract and current migration debt in `research/integration/README.md`.
- [ ] Mark #61 as superseded where it conflicts with #78.
- [ ] Mark #66 as superseded where it conflicts with #78.
- [ ] Add the new contract to the agent retrieval manifest or equivalent mandatory retrieval path.

### Phase B — classify the 143-ID corpus

For every canonical identity, add a migration record with:

- canonical ID and title;
- retained lane/domain;
- primary responsibility state;
- free / paid / reference / historical access class;
- role targets;
- prior-knowledge requirement;
- safety-public requirement;
- technician-responsibility threshold;
- employer-demand evidence status;
- credential eligibility;
- source lineage;
- classification rationale;
- review status.

Required outputs:

- [ ] 143/143 responsibility/access classification with zero missing IDs and zero duplicate primary assignments.
- [ ] ambiguity register for identities that mix SUPPORT and OPERATE or mix technical work with administrative/business content.
- [ ] management/reference demotion map.
- [ ] safety-free exception register.

### Phase C — rebuild the learner graph

- [ ] Define the zero-knowledge foundation graph.
- [ ] Place Stagehand Fundamentals / First Five Calls / Field Skills / communication / shop-context material at the correct ORIENT/SUPPORT depth.
- [ ] Reframe Department Explorer as informed specialization after common production readiness.
- [ ] Define each department's SUPPORT → OPERATE threshold.
- [ ] Define technician destinations such as A2/L2/V2/LED/staging-tech as role targets mapped to competencies, not as curriculum IDs.
- [ ] Keep controlled specialties separately bounded by external qualification/authorization requirements.
- [ ] Keep technical depth independent from leadership progression.

### Phase D — repair current V4 learning surfaces

- [ ] Rewrite Systems Thinking from the floor upward and replace phrase-recall assessment items with realistic stagehand scenarios.
- [ ] Audit Crew Ready against the new ORIENT/SUPPORT outcome.
- [ ] Audit Shop / Logistics for natural worker language and determine which material remains SUPPORT versus technician/shop-specialist depth.
- [ ] Rebuild Department Explorer around recognition, comparison, and informed lane choice rather than taxonomy trivia.
- [ ] Rebuild Advanced into technician/deep-technical pathways rather than a generic management-heavy destination.

### Phase E — employer/role normalization

- [ ] Extend the existing Roadmapdev demand bridge into normalized role families and employer requirement evidence.
- [ ] Separate common requirements from employer-specific requirements.
- [ ] Map normalized requirements to Crew Blueprint competencies.
- [ ] Track evidence provenance and freshness.
- [ ] Add explicit employer-review / recognition states; no implied endorsements.

### Phase F — identity, progress, entitlement and credential data

- [ ] Revise #66 around the new access model.
- [ ] Keep Clerk as identity/authentication and optional LinkedIn connection.
- [ ] Define learner progress, competency, assessment, entitlement, pathway, credential, and privacy records in the application data layer.
- [ ] Design free access and authenticated paid access without coupling access directly to Stripe product IDs.
- [ ] Define public verification/portable credential format and explicit non-claims.

### Phase G — secure paid delivery and future billing

- [ ] Choose/implement an application runtime capable of authorizing protected content before delivery.
- [ ] Migrate paid OPERATE/DEEPEN lesson bodies out of publicly retrievable static assets.
- [ ] Add entitlement enforcement.
- [ ] Integrate Stripe only when paid launch is ready.
- [ ] Support individual, employer-sponsored, scholarship/promotional, and partner access without changing curriculum IDs.

### Phase H — employer partnership pilot

- [ ] Select a narrow role family with strong evidence and mature curriculum.
- [ ] Produce an employer-readable competency crosswalk.
- [ ] Ask employers first to review requirements, then acknowledge alignment, before requesting formal recognition.
- [ ] Track recognition/endorsement/interview-signal claims only where documented.
- [ ] Evaluate employer-sponsored seats/cohorts.
- [ ] Keep future employer-paid recruiting/referral fees as a separate commercial transaction from training.

### Phase I — future Deadhang contractor network

- [ ] Keep outside automatic Crew Blueprint progression.
- [ ] Restrict candidate pool to people personally known/vetted by the owner or brought in by trusted partners.
- [ ] Use Crew Blueprint knowledge records only as one signal among real-world experience/reliability/qualification factors.
- [ ] Perform separate legal/compliance/business review before activation.

## Immediate acceptance gate

Do not begin broad UI reconstruction or paid-gate implementation until Phase B produces an audited 143/143 responsibility/access classification and Phase C establishes the new learner graph. The current V4 site remains the rollback/live reference while this migration is developed through PR-first change control.
