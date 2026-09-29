# The Crew Blueprint — Academic Course Reference Registry

Status: **reference/audit layer only**. This directory does not replace canonical learner courses and does not grant release authority.

## Purpose

Maintain an academic benchmark beside the production curriculum so each Crew Blueprint stage can be compared against an independently generated instructional outline. The benchmark is intended to expose missing objectives, weak sequencing, shallow practice, predictable assessment, source gaps, media gaps, and review-maturity gaps without erasing production content.

## Version rule

Each benchmark record has two versions:

1. **Current Crew Blueprint version** — the canonical/release candidate being audited.
2. **Academic reference version** — an external outline generated through Course Studio / Colossyan and stored here after generation.

Reference material is non-authoritative. It may identify gaps or stronger instructional structure, but production changes still follow Crew Blueprint research, safety, practitioner-review, governance, and owner-approval rules.

## Rating rubric — 100 points

| Domain | Weight |
|---|---:|
| Learning outcomes and scope | 15 |
| Technical/academic depth and sequencing | 20 |
| Applied practice, scenarios, and transfer | 15 |
| Assessment validity and difficulty | 15 |
| Evidence, sources, and traceability | 15 |
| Safety / authority boundary quality | 10 |
| Media, accessibility, and review maturity | 10 |

Bands: **A 90–100**, **B 80–89**, **C 70–79**, **D 60–69**, **F <60**. `NR` means intentionally not rated because the current version is not release-audited or the academic reference has not yet been captured.

## Current release corpus snapshot

The audited release snapshot contains:

- 74 materialized projected course/reference records.
- 62 `free_public` projected courses.
- 12 `public_reference` records.
- 4 additional authenticated V4 foundation courses added to the WordPress protected route set.
- 66 protected free learner routes in the WordPress production package: 62 projected free courses + 4 V4 foundation routes.
- 18 Field Skills in the learner catalog.
- 37 generated ecosystem-runtime courses in the free runtime.

### Structural findings that materially affect course quality

- The 37 generated ecosystem courses are structurally complete on paper: each has 3–4 objectives, 8 detail blocks, 5 quiz items, 4 claims, a scenario, and 3 planned media items.
- **All 185 quiz items in that generated runtime use answer index `0` as the correct answer.** This is a major assessment-validity defect even where question wording is good.
- Generated ecosystem media is still planning-state material (`planned_owner_review` / `planned_rights_and_practitioner_review`), not a fully integrated instructional-media system.
- Generated ecosystem review states remain practitioner/learner-review pending.
- Some generated detail sections repeat the same opening instructional pattern; the strongest observed case repeats only four distinct opening patterns across eight detail blocks.
- Field Skills are split across two authoring generations: 12 use the expansion-course data model with modules, observed practice gates, quizzes, boundaries, and sources; 6 remain in older/static course structures. This should be normalized academically before claiming one uniform Field Skills standard.
- The WordPress route graph adds four V4 foundation courses outside the 74-course projection. They are valid release routes but should be represented explicitly in the academic benchmark so graph coverage and instructional coverage stay aligned.
- Public-reference material is intentionally not equivalent to protected learner course bodies. Ratings below treat that distinction as a release-maturity constraint rather than forcing reference-only records to masquerade as full courses.

## Stage benchmark registry

| Stage | Current version | Current rating | Academic reference | Comparison status | Primary gaps to test against reference |
|---|---|---:|---|---|---|
| 01 — Orientation & Common Foundation | Crew Ready / Systems Thinking / Shop & Logistics / Department Explorer + Work Communication / Stagehand Fundamentals | **84 / B** | Course Studio reference pending capture | OPEN | projection alignment, integrated sources, media completion, stronger cumulative assessment |
| 02 — Field Skills | 18 Field Skills | **88 / B** | Course Studio reference pending capture | OPEN | normalize 12 expansion + 6 legacy structures; practical rubric consistency; media completion |
| 03 — Department Support | Lighting, Audio, Video/LED, Staging/Carpentry, Backline/Props/Wardrobe support pathways | **82 / B** | Course Studio reference pending capture | OPEN | common lesson architecture, role-specific scenarios, assessment consistency, evidence at point of claim |
| 04 — Shop, Logistics & Infrastructure | production logistics + warehouse/shop/receiving/inventory/traffic/HazCom/battery/dock-return workflows | **80 / B** | Course Studio reference pending capture | OPEN | reduce generated repetition, diversify assessment, improve worked examples and source traceability |
| 05 — Safety & Controlled-Specialty Awareness | rigging, work-at-height interface, power/test awareness, automation, atmospherics, laser, special effects, cyber hygiene | **78 / C** | Course Studio reference pending capture | OPEN | practitioner validation, jurisdiction/source precision, scenario diversity, media review, avoid over-generalization |
| 06 — Context Labs / Sector Transfer | touring/festival, venue/house, corporate/convention, theatre, worship, film/TV/broadcast, outdoor/weather | **76 / C** | Course Studio reference pending capture | OPEN | deeper sector-specific evidence, less templated prose, authentic decision cases, comparative transfer exercises |
| 07 — Accessibility / Public Interface / Outdoor Operations | accessible routes, communication access, heat/changing conditions, outdoor/public-area operations | **78 / C** | Course Studio reference pending capture | OPEN | stronger source mapping, applied accessibility cases, operational handoff examples, practitioner review |
| 08 — Career, Professional Practice & Business Literacy | hiring, professional durability, union/CBA awareness, credentials, classification, freelance business, rates/payment, records, rights, career ladders | **73 / C** | Course Studio reference pending capture | OPEN | current-law/current-market provenance, scenario depth, decision tools, refresh cadence, reference-vs-instruction boundary |
| 09 — Production / Coordination / Leadership | current public-reference branch plus existing unreleased advanced/lead material | **NR** | Course Studio reference pending capture | OPEN | current paid/advanced material is intentionally unaudited for release; benchmark before any paid-course decision |

## Interpretation

The current free curriculum is not empty or structurally weak. Its strongest areas are explicit safety/authority boundaries, field-practice framing, scenario use, and broad occupational coverage. The largest cross-cutting weaknesses are assessment validity, inconsistent course generations, incomplete instructional media, practitioner/learner review status, and source specificity inside generated material.

A Course Studio outline is not automatically "better" than the current course. The comparison must be domain-by-domain under the rubric above. Crew Blueprint wins when its current version is stronger; the academic reference wins only where it demonstrates a specific, transferable instructional advantage.

## Course Studio capture protocol

For each stage:

1. Generate the reference outline in Course Studio / Colossyan.
2. Save the returned outline under `academic-reference/course-studio/NN-stage-name.md` without altering the current production course.
3. Record generation date and tool/provider.
4. Score **both** the current stage and the academic reference against the same 100-point rubric.
5. Record `current_strengths`, `reference_strengths`, `gaps`, `adopt`, `reject`, and `needs_practitioner_review` decisions.
6. Update the comparison issue with both versions and the scored comparison.
7. Any production adoption still requires the normal research → authority → PR → audit → owner approval path.
