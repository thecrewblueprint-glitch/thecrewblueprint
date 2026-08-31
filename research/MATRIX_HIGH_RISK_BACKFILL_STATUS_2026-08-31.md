# The Crew Blueprint — High-Risk Matrix Backfill Status

**Updated:** 2026-08-31  
**Branch:** `research/mdq-010-stagehand-field-skills-universe`  
**Purpose:** Track actual completion state of the liability-first MDQ-001 claim/source backfill.

This status file records source-traceability progress only. It does not grant learner qualification, jobsite authority, certification, licensure, structural acceptance, electrical authority, rigging authority, driver/load acceptance, crowd-management authority, accessibility approval, or employer appointment.

## HR-01 — Electrics / Production Power

**State:** `exact federal + ETCP baseline mapped; jurisdiction/model layers remain open`

Added:

- 11 exact SOURCE records covering current OSHA Subpart S provisions and current ETCP Entertainment Electrician / PPDT scope, eligibility and job-analysis pages;
- 7 high-risk CONTENT claim/boundary records across Production Power Awareness, Electrics Lead and Electrics Load-Planning;
- 17 SUPPORT_EDGE records separating direct, partial and corroborating evidence;
- exact OSHA support added for the electrical portion of the existing Lighting systems authority boundary.

Key result:

- electrical-hazard awareness training;
- OSHA qualified-person status;
- ETCP certification;
- employer/venue authorization;
- local licensure/code/AHJ authority

are now treated as separate evidence/authority layers.

Still open:

- exact NEC/NFPA provisions only where a learner-facing claim actually depends on them;
- state/local adoption and AHJ evidence;
- venue/employer authority evidence where wording depends on local practice;
- manufacturer/system documentation for product-specific claims;
- qualified electrical practitioner review before release-strength claims.

## HR-02 — Rigging / Work at Height

**State:** `exact credential + federal scope + current standard-family baseline mapped; specialist validation remains open`

Added:

- 7 SOURCE records covering ETCP Rigger eligibility, Arena/Theatre job-analysis pages, OSHA general-industry fall-protection scope and current ANSI/ESTA rigging standard families;
- 5 high-risk CONTENT claim/boundary records for Rigging Lead;
- 10 SUPPORT_EDGE records.

Key result:

ETCP itself targets experienced riggers and separates Arena and Theatre bodies of knowledge. The matrix therefore supports an entry awareness/interface route only; it does not support a novice physical-rigging qualification path.

Current external gate remains:

`GATE-RIG-TRAINING/AUTH`

Still open:

- employer/venue/local qualification evidence;
- exact manufacturer documentation when a hardware/system-specific claim is introduced;
- full controlling standard text where detailed requirements are asserted;
- experienced-rigger/practitioner review;
- any work-at-height claim must retain applicability/scope review rather than one universal entertainment-stage rule.

## HR-03 — Modular Deck / Staging / Temporary Structures

**State:** `scope/version baseline mapped; model-specific practical release blocked`

Added:

- 3 SOURCE records covering current ANSI/ESTA structural-system scope and OSHA walking-working-surface context;
- 5 high-risk CONTENT claim/boundary records across Modular Deck Systems and Staging Lead;
- 7 SUPPORT_EDGE records.

Key result:

The current `pathway-staging-carpentry-02-deck-systems.html` route is not tied to a named manufacturer/model. Therefore no manufacturer manual has been invented or falsely generalized.

Before any model-specific practical staging lesson can move toward stronger release, the matrix must contain:

1. the exact manufacturer/model manual;
2. the exact system/version shown to the learner;
3. responsible staging/structural practitioner review;
4. venue/AHJ/engineering evidence where acceptance depends on those authorities.

ANSI E1.21-2024 is retained only for its actual outdoor temporary-structure scope, and ANSI E1.2-2021 only for its aluminum truss/tower scope. Neither is treated as a universal modular-deck manual.

## HR-04 — Cargo / Transport Responsibility

**State:** `exact federal applicability + responsibility baseline mapped; device/model and employer layers remain open`

Added:

- 6 SOURCE records covering current 49 CFR 392.9, 393.100 and 393.104 plus FMCSA regulatory guidance and applicability context;
- 7 high-risk CONTENT claim/boundary records across Flatbed Cargo-Securement Support and Ratchet Straps Under Direction;
- 10 SUPPORT_EDGE records;
- 6 COMPETENCY_CONTENT_EDGE records connecting helper-level competencies to `GATE-DRIVER/CARGO` and the model-review gate.

Key result:

The matrix now separates:

- assigned physical helper work;
- motor-carrier responsibility;
- driver regulatory responsibility;
- public-road load acceptance;
- product/model-specific equipment practice;
- Crew Blueprint course/practice state.

FMCSA guidance supports that a covered driver need not personally perform every loading/securement act while retaining responsibilities under the rule. That does not transfer regulatory acceptance to a helper.

The existing `field-skill-ratchet-straps.html` route also contains a model-specific practical sequence without a named manufacturer/model source in the matrix. That portion is now explicitly marked `needs_model_or_jurisdiction_scope` / practitioner review before stronger release.

Still open:

- exact manufacturer/model documentation for any device-specific learner practice;
- employer/load-lead/driver workflow evidence where course wording depends on company practice;
- state/local requirements outside the federal CMV scope;
- qualified practitioner review;
- no Crew Blueprint state may traverse `GATE-DRIVER/CARGO` into driver/load-acceptance authority.

## HR-05 — Public Routes / Barricades / Cable Protectors

**State:** `accessibility + event-authority baseline mapped; model/public-route practical release blocked`

Added:

- 3 SOURCE records covering DOJ 2010 ADA Standards, U.S. Access Board accessible-route criteria, and a current NPS National Capital Region public-event/AHJ requirements example;
- 6 high-risk CONTENT claim/boundary records across Barricade Setup and Cable Ramps & Protectors;
- 7 SUPPORT_EDGE records;
- 6 COMPETENCY_CONTENT_EDGE records linking the field skills to `CMP-CORE-018` public/accessibility-route awareness and explicit review gates.

Key result:

The matrix separates:

- physical stagehand support;
- event layout ownership;
- crowd/security management;
- emergency egress and life-safety approval;
- accessibility-route compliance/approval;
- traffic/vehicle-control authority;
- AHJ/venue acceptance.

The 2010 ADA Standards expressly include temporary as well as permanent buildings/facilities within their scope where applicable and establish technical accessible-route criteria. A cable-protector label or visual appearance does not establish that an entire temporary route is compliant.

The NPS National Capital Region source is retained only as a jurisdiction-specific example showing that event plans, egress, crowd management and occupancy/AHJ approval may sit outside stagehand authority. It is not generalized nationally.

Both current practical routes contain product/model setup content. This matrix pass does not extend those procedures. Stronger release requires exact product/model documentation plus qualified adult workplace/practitioner and event-route authority review.

## Next active item

**HR-10 — Assessment / Authority States**

The next pass should establish question → rationale → claim → source lineage and the REVIEW table, while keeping viewed, knowledge-checked, observed practice, verified experience, employer authorization, external credential and licensure as distinct record states.

## Program status

HR-01 through HR-05 are **not publication-closed**. They are substantially better sourced and now carry explicit unresolved dependencies instead of generic bibliography links or implied authority.
