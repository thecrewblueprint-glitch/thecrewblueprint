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

Key result: electrical-hazard awareness training, OSHA qualified-person status, ETCP certification, employer/venue authorization, and local licensure/code/AHJ authority are separate evidence/authority layers.

Still open: exact NEC/NFPA provisions only where a learner-facing claim depends on them; state/local adoption; venue/employer authority; manufacturer/system documentation; qualified electrical practitioner review.

## HR-02 — Rigging / Work at Height

**State:** `exact credential + federal scope + current standard-family baseline mapped; specialist validation remains open`

Added:

- 7 SOURCE records covering ETCP Rigger eligibility, Arena/Theatre job-analysis pages, OSHA general-industry fall-protection scope and current ANSI/ESTA rigging standard families;
- 5 high-risk CONTENT claim/boundary records for Rigging Lead;
- 10 SUPPORT_EDGE records.

Key result: ETCP targets experienced riggers and separates Arena and Theatre bodies of knowledge. The matrix supports an entry awareness/interface route only; it does not support a novice physical-rigging qualification path.

Current external gate: `GATE-RIG-TRAINING/AUTH`.

Still open: employer/venue/local qualification evidence; manufacturer documentation for hardware/system-specific claims; controlling standard text where detailed requirements are asserted; experienced-rigger review; work-at-height applicability review.

## HR-03 — Modular Deck / Staging / Temporary Structures

**State:** `scope/version baseline mapped; model-specific practical release blocked`

Added:

- 3 SOURCE records covering current ANSI/ESTA structural-system scope and OSHA walking-working-surface context;
- 5 high-risk CONTENT claim/boundary records across Modular Deck Systems and Staging Lead;
- 7 SUPPORT_EDGE records.

Key result: the current generic modular-deck route is not tied to a named manufacturer/model, so no manufacturer manual has been invented or falsely generalized.

Before model-specific practical staging content can move toward stronger release, the matrix needs the exact manufacturer/model manual, exact system/version, responsible staging/structural practitioner review, and venue/AHJ/engineering evidence where acceptance depends on those authorities.

ANSI E1.21-2024 remains limited to its outdoor temporary-structure scope; ANSI E1.2-2021 remains limited to aluminum truss/tower scope.

## HR-04 — Cargo / Transport Responsibility

**State:** `exact federal applicability + responsibility baseline mapped; device/model and employer layers remain open`

Added:

- 6 SOURCE records covering current 49 CFR 392.9, 393.100 and 393.104 plus FMCSA guidance and applicability context;
- 7 high-risk CONTENT claim/boundary records across Flatbed Cargo-Securement Support and Ratchet Straps Under Direction;
- 10 SUPPORT_EDGE records;
- 6 COMPETENCY_CONTENT_EDGE records connecting helper-level competencies to `GATE-DRIVER/CARGO` and model review.

Key result: assigned helper work, motor-carrier responsibility, driver regulatory responsibility, public-road load acceptance, product/model-specific practice, and Crew Blueprint course/practice state are separate.

The existing ratchet-strap practical contains model-specific physical content without a named manufacturer/model source in the matrix. That practical remains blocked from stronger release until exact product documentation and qualified review exist.

Still open: exact manufacturer/model documentation; employer/load-lead/driver workflow evidence; state/local requirements outside federal CMV scope; qualified practitioner review.

## HR-05 — Public Routes / Barricades / Cable Protectors

**State:** `accessibility + event-authority baseline mapped; model/public-route practical release blocked`

Added:

- 3 SOURCE records covering DOJ 2010 ADA Standards, U.S. Access Board accessible-route criteria, and an NPS National Capital Region public-event/AHJ example;
- 6 high-risk CONTENT claim/boundary records across Barricade Setup and Cable Ramps & Protectors;
- 7 SUPPORT_EDGE records;
- 6 COMPETENCY_CONTENT_EDGE records linking field skills to public/accessibility-route awareness and explicit review gates.

Key result: physical stagehand support is separate from event layout ownership, crowd/security management, emergency egress/life-safety approval, accessibility compliance/approval, traffic authority, and AHJ/venue acceptance.

The NPS source remains jurisdiction-specific and is not generalized nationally. Existing model/setup practicals are not extended by this matrix pass and remain blocked from stronger release pending exact product/model documentation and qualified public-route/practitioner review.

## HR-10 — Assessment / Authority States

**State:** `content-lineage + review baseline operational; full assessment inventory and validity remain open`

Added:

- MDQ-001B CONTENT_LINEAGE_EDGE extension for normalized CONTENT → CONTENT relationships;
- 5 HR-10 CONTENT records: two existing scored Road Case questions, their two answer rationales, and one canonical assessment/authority boundary;
- 6 CONTENT_LINEAGE_EDGE records creating explicit `Q → QR → CL` chains for the two seeded questions;
- 1 professional testing SOURCE record from AERA / APA / NCME;
- 1 SUPPORT_EDGE preserving that source as context for conservative score interpretation rather than as the source of Crew Blueprint's authority-state taxonomy;
- 5 REVIEW records covering assessment traceability and blocked practical-release conditions from HR-04/HR-05.

Key result:

The matrix now distinguishes:

- viewed/content-access state;
- knowledge-check performance;
- course completion;
- observed practice;
- verified work experience;
- employer/venue authorization;
- external certification;
- licensure/regulatory authority.

The first normalized assessment chains are real repository data rather than a prose requirement. A correct quiz answer cannot terminate at “the course says so” when the underlying claim requires external evidence.

Still open:

- inventory and lineage every scored question across all 33 canonical routes;
- practitioner review for scenario authenticity;
- novice comprehension/ambiguity testing;
- reliability/validity evidence where scores are used for stronger decisions;
- owner review of assessment-state semantics;
- backend implementation must preserve the distinct states rather than collapsing them into one completion/certification flag.

## Validator state

`scripts/validate-research-matrix.mjs` now validates CONTENT_LINEAGE_EDGE and REVIEW records, strict canonical SOURCE evidence/authority enums, cross-table references, assessment-chain completeness, root-link misuse, and the existing competency/content relationships.

A prior partition-loader collision was corrected so `content_lineage_edges*.jsonl` cannot be mistaken for CONTENT merely because the filename begins with `content_`.

The current execution environment cannot clone the branch to run Node against a local checkout, so a runtime PASS is not claimed from this session. Repository-side structural checks show no remaining instances of the known pre-normalization SOURCE taxonomy labels searched during this pass.

## Next active item

**HR-06 — General Field Skill physical-task claims**

Next work should backfill bounded, low-risk Stagehand Field Skills in this order:

1. team lift / carry / set-down;
2. carts / dollies / hand trucks;
3. cable deployment / gathering;
4. case / boneyard / work-area organization;
5. work-area reset / handoff;
6. soft goods, pipe-and-drape, riser/deck support and ordinary tool handling where evidence allows.

Do not invent universal weight limits, crew sizes, exact phrases or one mandatory method from generalized ergonomic evidence. Powered equipment and controlled specialist work remain outside the general practical path.

## Program status

HR-01 through HR-05 and HR-10 are **substantially matrixed but not publication-closed**. The next liability-priority work is HR-06, followed by HR-07 Lighting, HR-08 Audio, and HR-09 Video.
