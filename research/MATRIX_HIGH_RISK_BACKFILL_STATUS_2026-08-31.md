# The Crew Blueprint — High-Risk Matrix Backfill Status

**Updated:** 2026-08-31  
**Branch:** `research/mdq-010-stagehand-field-skills-universe`  
**Purpose:** Track actual completion state of the liability-first MDQ-001 claim/source backfill.

This status file records source-traceability progress only. It does not grant learner qualification, jobsite authority, certification, licensure, structural acceptance, electrical authority, rigging authority, driver/load acceptance, crowd-management authority, accessibility approval, or employer appointment.

## HR-01 — Electrics / Production Power

**State:** `exact federal + ETCP baseline mapped; jurisdiction/model layers remain open`

Added 11 exact SOURCE records, 7 high-risk CONTENT claims/boundaries, 17 SUPPORT_EDGE records, and exact OSHA support for the electrical portion of the Lighting systems authority boundary.

Key result: electrical-hazard awareness training, OSHA qualified-person status, ETCP certification, employer/venue authorization, and local licensure/code/AHJ authority are separate evidence/authority layers.

Still open: claim-specific NEC/NFPA evidence, state/local adoption, venue/employer authority, manufacturer/system documentation, and qualified electrical practitioner review.

## HR-02 — Rigging / Work at Height

**State:** `exact credential + federal scope + current standard-family baseline mapped; specialist validation remains open`

Added 7 SOURCE records, 5 high-risk CONTENT claims/boundaries, and 10 SUPPORT_EDGE records.

Key result: ETCP targets experienced riggers and separates Arena and Theatre bodies of knowledge. The matrix supports an entry awareness/interface route only; it does not support a novice physical-rigging qualification path.

Current external gate: `GATE-RIG-TRAINING/AUTH`.

Still open: employer/venue/local qualification evidence, manufacturer documentation for hardware/system-specific claims, full controlling standard text where detailed requirements are asserted, experienced-rigger review, and work-at-height applicability review.

## HR-03 — Modular Deck / Staging / Temporary Structures

**State:** `scope/version baseline mapped; model-specific practical release blocked`

Added 3 SOURCE records, 5 high-risk CONTENT claims/boundaries, and 7 SUPPORT_EDGE records.

Key result: the generic modular-deck route is not tied to a named manufacturer/model, so no manufacturer manual has been invented or falsely generalized. Model-specific practical staging content requires the exact system/manual plus responsible staging/structural practitioner and venue/AHJ/engineering review where applicable.

## HR-04 — Cargo / Transport Responsibility

**State:** `exact federal applicability + responsibility baseline mapped; device/model and employer layers remain open`

Added 6 SOURCE records, 7 high-risk CONTENT claims/boundaries, 10 SUPPORT_EDGE records, and 6 COMPETENCY_CONTENT_EDGE records.

Key result: assigned helper work, motor-carrier responsibility, driver regulatory responsibility, public-road load acceptance, product/model-specific practice, and Crew Blueprint course/practice state are separate.

The existing ratchet-strap practical remains blocked from stronger release until exact product documentation and qualified review exist.

## HR-05 — Public Routes / Barricades / Cable Protectors

**State:** `accessibility + event-authority baseline mapped; model/public-route practical release blocked`

Added 3 SOURCE records, 6 high-risk CONTENT claims/boundaries, 7 SUPPORT_EDGE records, and 6 COMPETENCY_CONTENT_EDGE records.

Key result: physical stagehand support is separate from event layout ownership, crowd/security management, emergency egress/life-safety approval, accessibility compliance/approval, traffic authority, and AHJ/venue acceptance.

Existing model/setup practicals remain blocked from stronger release pending exact product/model documentation and qualified public-route/practitioner review.

## HR-06 — General Field Skill Physical-Task Claims

**State:** `core U01–U05 research-to-matrix baseline complete; learner-facing builds and practitioner review remain open`

Added 17 SOURCE records; 5 planned-course CONTENT records; 18 bounded claim/boundary CONTENT records; 27 SUPPORT_EDGE records; and 6 COMPETENCY_CONTENT_EDGE records linking researched/planned skills to `CMP-FLD-002`, `003`, `005`, `007`, `008` and shared `CMP-CORE-012`.

Key result: the owner graph can distinguish **researched/planned** Field Skills from **actually built** Field Skills using matrix state instead of manual coloring.

The five planned skills remain outside the 33-route current course inventory because they are not learner-facing routes yet.

Still open: practitioner/workplace review, novice testing, reviewed visuals/demos, practice-rubric review, and U06–U09/specialty Field Skill backfill.

## HR-07 — Lighting Systems / Protocols

**State:** `current learner-facing protocol baseline matrixed; network wording and broader research-only competencies remain qualified`

Added exact current protocol/specification evidence for:

- ANSI E1.11-2024 / DMX512-A;
- ANSI E1.20-2025 / RDM;
- ANSI E1.31-2025 / sACN;
- current Art-Net 4 context;
- existing Lighting C2/C3 authority boundaries.

The existing DMX-universe question now has explicit `Q → QR → CL → SOURCE` lineage.

Key result: GDTF/MVR remain mapped research competencies but are **not** counted as current learner-facing Lighting C2/C3 coverage. The current Lighting network sentence is retained only with qualification because protocol facts and network-design choices such as VLAN/switch configuration must not be conflated.

Still open: practitioner review of live-event network architecture wording; product/platform evidence where actual screenshots or configuration behavior are taught; GDTF/MVR learner content only after a deliberate build decision.

## HR-08 — Audio RF / Network / Hearing-Safety Claims

**State:** `learner-facing RF/network/authority baseline matrixed; hearing-safety wording requires revision`

Added exact/current evidence spanning:

- OSHA 29 CFR 1910.95 occupational-noise requirements;
- Audinate/Dante training and architecture context;
- Shure RF/wireless role and workflow context;
- FCC regulatory context for wireless-spectrum operation;
- Audio C2/C3 authority-state claims and assessment lineage.

Key correction: the current Audio C2 sentence that describes every +5 dB increase as cutting “safe exposure time” in half is formally marked `revise`. OSHA’s 85 dBA 8-hour TWA is the hearing-conservation action level, while 90 dBA for 8 hours is the Table G-16 permissible-exposure point. The course should describe the regulatory framework accurately rather than translate it into a universal guarantee of safe exposure duration.

Key result: RF coordination, Dante/network design, system engineering, electrical work, course completion, and external certification/appointment remain separate states.

Still open: revised hearing-safety copy; experienced audio/RF/network practitioner review; model/platform-specific network or RF procedures only where exact documentation is available.

## HR-09 — Video / LED / Display Systems

**State:** `display/product/authority baseline matrixed; model-specific physical practice and structural wording remain review-gated`

Added:

- 8 SOURCE records including ANSI/AVIXA V202.01:2026 Display Image Size, ANSI/AVIXA V201.01:2021 Image System Contrast Ratio, AVIXA performance-verification context, IEC 60529 IP Code, current ROE/Absen product-family evidence, current Brompton Tessera redundancy documentation, and internal MDQ synthesis;
- 11 CONTENT records covering display-selection/image-system claims, IP-rating scope, product/model boundaries, cross-domain authority boundaries, redundancy, and two existing scored questions with rationales;
- 11 SUPPORT_EDGE records;
- 6 CONTENT_LINEAGE_EDGE records creating complete assessment chains for the existing IP-rating and C3 structural-authority questions;
- 4 REVIEW records.

Key results:

- pixel pitch is one display-selection factor, not a universal “smaller is better” rule;
- image performance is a system/environment property, not one panel spec;
- IEC 60529 supports IP ingress-protection scope but does not establish wind resistance, structural approval, lightning safety or universal outdoor suitability;
- current manufacturer evidence confirms LED locking, curving, hanging/stacking, resolution, pitch, and configuration details vary by product family;
- redundancy is product/topology/configuration dependent and must not be assumed merely because a backup path exists;
- Video-system learning does not absorb structural, rigging, power, manufacturer-service, venue or employer authority.

The current Video C1 physical locking-support language is blocked from stronger practical release until tied to the exact manufacturer/model/manual and qualified adult workplace/Video-LED practitioner review.

The current Video C2 “dynamic load can exceed static weight” warning is marked `revise` pending an exact controlling structural/rigging source and specialist review for the intended context. No load calculation, attachment, hoisting, wind-threshold or structural-acceptance instruction is created by this matrix pass.

## HR-10 — Assessment / Authority States

**State:** `content-lineage + review baseline operational; full assessment inventory and validity remain open`

MDQ-001B now normalizes `CONTENT_LINEAGE_EDGE`. Existing Road Case, Lighting, Audio, and Video assessment pilots demonstrate `Q → QR → CL → SUPPORT_EDGE → SOURCE` lineage.

The matrix distinguishes content viewed, knowledge-check performance, course completion, observed practice, verified work experience, employer/venue authorization, external certification, and licensure/regulatory authority.

Still open: full scored-question inventory across all canonical routes, practitioner scenario review, novice ambiguity/comprehension testing, validity/reliability evidence where scores support stronger decisions, owner review of state semantics, and backend implementation that preserves these distinctions.

## MEDIA / visual-evidence baseline

**State:** `first owned-asset records operational`

The first normalized MEDIA records now cover:

- the owned inline Lighting control-flow diagram;
- two existing AI-generated Road Case training visuals.

The Road Case images are explicitly `safety_critical: true` and remain `owner_review`; they are not practitioner-approved merely because they visually resemble a plausible task. Their records preserve model limitations, alt text, caption, text fallback, rights/provenance notes, freshness triggers, and required review state.

`scripts/validate-research-matrix.mjs` now validates MEDIA required fields, media/status enums, CONTENT references, boolean fallback/safety fields, and prevents a safety-critical visual from becoming `practitioner_reviewed` or `approved` without reviewer + review date. Approved media also requires a complete text fallback.

## Validator state

The validator now covers CONTENT, SOURCE, SUPPORT_EDGE, COMPETENCY_CONTENT_EDGE, CONTENT_LINEAGE_EDGE, REVIEW and MEDIA records; strict SOURCE enums; cross-table references; assessment-chain completeness; root-link misuse; visual release gates; and existing competency/content relationships.

The current execution environment still does not provide a local branch checkout for a runtime Node execution, so a runtime PASS is not claimed here. Repository-side structural checks continue, and the validator is ready for execution in a checkout/CI environment later.

## High-risk baseline milestone

**HR-01 through HR-10 are now substantially matrixed to a first liability-priority baseline.** None should be interpreted as publication-closed.

The next matrix phase is no longer another high-risk-domain queue. It is to generate and work the required cross-site audit views:

1. unsupported / needs-primary-source;
2. qualification-sensitive / model-jurisdiction-employer scope;
3. visual evidence / rights / reviewer / fallback;
4. route → claim → source;
5. source → all affected content;
6. assessment rationale completeness;
7. supersession/legacy-route state;
8. domain completeness and planned-vs-built coverage.

Those views should drive the remaining claim-level backfill, practitioner review, learner testing, visual replacement/creation, and eventual course-structure decisions.
