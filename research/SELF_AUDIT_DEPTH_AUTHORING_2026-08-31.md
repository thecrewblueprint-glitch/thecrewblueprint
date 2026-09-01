# Self-Audit — Curriculum Depth Authoring

**Project:** The Crew Blueprint  
**Local work date:** 2026-08-31 (America/New_York)  
**Branch:** `curriculum/depth-authoring-2026-08-31`  
**PR:** #45 — Author remaining curriculum to depth v1 with claim matrix and media backlog  
**Starting main:** `d703c6cb31298524ea177791fdf79a6d94c86075`

## Audit conclusion

**PASS FOR MERGE WITH EXPLICIT POST-AUTHORING REVIEW WORK REMAINING.**

This pass closes the specific curriculum-authoring gap identified in the prior frontier audit: the 76 expansion routes that were visible and research-mapped but still labeled `research_foundation` now have a depth-v1 authored layer. The 22 previously authored frontier routes were also normalized into the same claims, assessment, and media-planning model.

This audit does **not** claim that publication, authoring, research support, practitioner review, learner validation, employer authorization, external certification, licensure, or completed media are the same state. They remain separate by design.

## Final authored curriculum state

- Dedicated existing learner routes: **44**
- Expansion learner routes: **98**
- Total mapped learner routes: **142**
- Previously authored frontier routes: **22**
- Newly depth-v1 authored routes: **76**
- Expansion routes remaining at research-foundation maturity: **0**
- Authored claim checkpoints across expansion routes: **392**
- Course-specific assessment blueprint records: **490**
- Planned media briefs: **294**
- Formal normalized MEDIA records: **5**

The difference between **294 planned media briefs** and **5 formal MEDIA records** is intentional. A media brief is not promoted to formal MEDIA until an actual asset exists and its source/rightsholder, allowed use, accessibility fallback, safety review, and release state can be truthfully recorded.

## Matrix state from clean PR validation

- CONTENT: **991**
- SOURCE: **169**
- SUPPORT_EDGE: **360**
- COMPETENCY_CONTENT_EDGE: **831**
- RESEARCH_COMPETENCY_EDGE: **188**
- CONTENT_LINEAGE_EDGE: **669**
- REVIEW: **84**
- MEDIA: **5**
- COURSE inventory: **143**
- Fundamentals lesson mappings: **34**
- Owner map: **135 states — 84 bright / 41 muted / 10 gates**

Normalized research-matrix validation passed with no reported consistency errors.

## What was actually authored

Each former research-foundation expansion route now carries, at minimum:

1. explicit learning objectives;
2. topic-matched explanatory content across the route's topic anchors;
3. a changed-state / verification / handoff scenario;
4. five course-specific assessment items with rationales;
5. four claim checkpoints;
6. three media-production briefs with text-fallback requirements;
7. authoring-version and review-state metadata;
8. an explicit authority ceiling.

The learner course shell now renders course maturity, objectives, topic explanations, scenario, claim checkpoints, media study plan, assessment, evidence packet, and authority boundary.

## Assessment audit

The prior generic five-question pattern was removed as the default for the 76 depth routes. The full expansion layer now has **490 assessment blueprint records** — five per route across all 98 expansion routes.

The generated assessment blueprint is intentionally **not** promoted wholesale into normalized question/rationale CONTENT lineage. Where a question would depend on an external technical/legal/standards claim, the exact assessed claim should first have defensible claim-level support. This prevents the matrix from creating false citation precision merely because an assessment exists.

## Claim-matrix audit

The pass adds four claim checkpoints per authored expansion route, for **392 total**. These claim records are linked to their course and competency in the normalized matrix.

Claim checkpoints distinguish:

- Crew Blueprint framework statements;
- verification / changed-state reasoning;
- failure-recognition and handoff logic;
- explicit safety/authority boundaries.

No new exact-source support edge was fabricated solely to make the new claim count look complete. Existing research packets remain the research basis; exact external claims still need source/support edges where the content depends on a standard, law, manufacturer statement, regulatory rule, or other external authority.

## Media audit

The depth layer generates **294 production briefs**: generally a system map, changed-state decision flow, and annotated field/document example per expansion route.

The briefs include:

- media type;
- instructional purpose;
- text fallback requirement;
- safety-critical flag where applicable;
- rights state;
- accessibility state;
- explicit prohibition on formal MEDIA registration before a real asset and real review state exist.

This closes the *planning* gap, not the *asset-production* gap. The actual rights-cleared visual library remains a major next workstream.

## Controlled-work / authority audit

No course in this pass grants or simulates independent authority for:

- overhead rigging or climbing;
- energized electrical work, circuit probing, connection, testing, fault work, or generator operation;
- powered industrial trucks, MEWPs, or other powered equipment;
- structural engineering or structural acceptance;
- stage-automation operation, programming, reset, bypass, or maintenance;
- lasers, pyrotechnics, flame, cryogenic effects, performer flying, or other controlled special systems;
- hazardous/special prop operation;
- RF regulatory or coordinator authority;
- manufacturer service authority;
- legal/tax classification authority;
- management appointment, contract-signing authority, licensure, certification, or employer authorization.

These subjects remain awareness, system-literacy, document-recognition, changed-state reporting, stop/escalate, and handoff education where appropriate.

## Legal / consent audit

The shared ecosystem course remains behind the existing adult/terms/training-limitations consent runtime and stylesheet. CI verifies course-consent coverage dynamically across the discovered top-level course routes.

Clean validation result:

- **71 discovered top-level course routes gated**
- adult eligibility check verified;
- legal acknowledgments unchecked by default;
- explicit assent verified;
- local-storage disclosure/version alignment verified.

This remains a browser-local consent mechanism, not a durable authenticated commercial learner record.

## Accessibility audit

Automated structural accessibility validation passed on the critical learner surfaces.

That pass is **not** blanket ADA/WCAG certification. Still required before making such a claim:

- manual keyboard-only testing;
- screen-reader testing;
- zoom/reflow testing;
- contrast verification;
- assessment interaction testing;
- media alternatives for real produced assets;
- testing with actual learners with accessibility needs where feasible.

## Adversarial CI findings and fixes

The first strict depth-validation run correctly caught implementation defects:

1. three legacy Stagehand-adjacent topic normalizations occurred after depth authoring, creating detail/topic length mismatches;
2. the 22 frontier routes still had shorter legacy assessment sets.

The fixes:

- normalization now keeps those legacy topic corrections compatible with the depth layer;
- all frontier routes are expanded to five course-specific questions;
- frontier routes now also receive the same minimum four-claim / three-media-brief planning structure;
- CI now fails if any expansion route falls back to research-foundation maturity or loses the required authored structure.

The subsequent full validation passed.

## Honest limitations / residual work

### 1. Practitioner review remains incomplete

The new depth content is research-backed and bounded, but it has not been individually signed off by practitioners across every discipline. Department-specific editorial review remains necessary, especially for nuanced workflow language in Lighting, Audio, Video/Broadcast, Staging/Scenic, Warehouse, Production Management, Backline, Props, Wardrobe, RF, Rigging BOK, Power BOK, Automation, and specialty interfaces.

### 2. Learner validation remains incomplete

The authored routes have not yet been tested at scale for comprehension, retrieval, transfer, completion behavior, ambiguity, question difficulty, or jobsite usefulness. First-call/new-stagehand testing should be prioritized.

### 3. Depth v1 is structured authored curriculum, not 98 independently hand-written textbooks

The 76-route depth layer uses domain playbooks plus topic-sensitive rules to create consistent objectives, explanations, scenarios, assessment logic, claim checkpoints, and media requirements. This is materially deeper than the prior generic shell, but it should still receive practitioner editorial passes before being treated as final long-form subject-matter prose.

### 4. Claim-level external support is not complete

The matrix now knows where the claim checkpoints are. It does not pretend every new framework sentence has an exact external source edge. External technical/legal/regulatory assertions should continue to be promoted from research packet -> exact claim -> exact support edge as publication maturity advances.

### 5. Actual media production remains open

294 briefs exist; only 5 formal normalized media records exist. The next media work must produce or source rights-cleared assets, write accessibility alternatives, obtain owner/practitioner review where needed, and then register the completed assets.

### 6. Durable learner evidence remains future work

The static site still does not provide authenticated cross-device progress, observed-practice records, verified employer authorization, organization overlays, or durable credential evidence. The architecture for those states exists, but the backend/product layer is not implemented here.

## Final disposition

The authoring gap that motivated this pass is closed at **depth-v1** maturity:

**98 expansion routes authored = 22 frontier-authored + 76 depth-v1; 0 research foundations remain.**

Recommended next frontier after merge:

1. practitioner review by discipline;
2. rights-cleared media production from the 294-brief backlog;
3. learner testing and assessment calibration;
4. exact claim/support-edge promotion for externally governed assertions;
5. manual accessibility testing;
6. employer/venue overlay and durable learner-evidence implementation.
