# MDQ-000 — Canonical Domain Inventory and Route Crosswalk

**Prepared:** 2026-08-31  
**Status:** Complete baseline inventory; future routes must be added here when created  
**Branch:** `research/master-domain-gap-queue-2026-08-31`  
**Purpose:** Establish one canonical subject-domain registry for The Crew Blueprint so every current content surface, source family, and planned curriculum area has an explicit home and next action.

## Rules

1. A route may belong to more than one domain, but it has one **primary domain owner**.
2. A domain can be valid without a course route only when its disposition is explicitly `research_then_build`, `resource_only`, `interface_only`, `split_pending`, or `no_build`.
3. Research state and publication state are separate. `drafted` does not mean practitioner-approved or publication-ready.
4. Generated HTML is not a separate curriculum source. The corresponding `scripts/course-data-*.mjs` record is the editable curriculum source where applicable.
5. Archived routes remain lineage evidence and are excluded from current learner-route counts unless explicitly restored.

## Canonical state vocabulary

`mapped` → `researched` → `draftable` → `drafted` → `matrixed` → `practitioner_reviewed` → `learner_validated` → `publication_ready`

Additional dispositions: `research_then_build`, `resource_only`, `interface_only`, `split_pending`, `external_boundary`, `no_build`.

## Domain registry

| Domain ID | Canonical domain | Current learner-facing surfaces | Current evidence / source records | Current tier/state | Primary owner | Next action |
|---|---|---|---|---|---|---|
| D-SHF | Stagehand Fundamentals | `lms-dashboard.html`; `courses/stagehand-fundamentals.html`; current module 1–10 routes | Packages 14/14A, 15–20A, CBR-021-SHF-AUDIT, `02-source-master-map.md`, architecture audit | Foundation · drafted; strong source base | Foundation curriculum | Matrix full 34-lesson claim set; then novice/owner review |
| D-FLD | Stagehand Field Skills | six `courses/field-skill-*.html` routes | Packages 46–53; `scripts/course-data-field.mjs`; `course-data-road-case.mjs` | Field Skill · drafted; practitioner gates open | Field-practice curriculum | MDQ-010 complete task universe; ECQ-01/02/03 validation |
| D-LTG | Lighting | Course 1, Course 2, five Course-2 lesson routes, Course 3, Lighting Lead | Packages 07, 12/12A, CBR-021-LTG-BOK, 25, 33; lighting gap map; `course-data-lighting.mjs` | Support/Systems/Lead/Advanced · drafted | Lighting pathway | MDQ-020–028; then claim-level matrix and enhancement |
| D-AUD | Audio | `pathway-audio-01-support.html`; `-02-live-systems.html`; `-03-system-design.html`; `lead-audio.html` | Packages 09, CBR-043-AUD-RERUN, 26, 34; original CBR-021-AUD retained for lineage | Support/Systems/Lead/Advanced · drafted | Audio pathway | MDQ-030–039 to bring breadth to lighting-map standard |
| D-VID | Video / LED / display systems | Video Course 1; Course 2; eight Course-2 lesson routes; old overview compatibility route; Course 3; Video Lead | Packages 08/08A, 13/13A, 27, 35 | Support/Systems/Lead/Advanced · drafted | Video pathway | MDQ-040–048; separate LED, signal, camera, media and projection competencies |
| D-STG | Staging / carpentry / scenic | Staging Course 1, Course 2, Course 3, Staging Lead | Packages 10, CBR-044-STG-RERUN, 28, 37 | Support/Systems/Lead/Advanced · drafted | Staging/scenic pathway | MDQ-050–057; add scenic/material/drawing/automation depth |
| D-RIG | Rigging | `lead-rigging.html`; rigging awareness in Fundamentals and department interfaces | Packages 02, 04, 29; ETCP/OSHA/ESTA evidence across corpus | Lead review page + awareness only; specialist boundary | Rigging domain | MDQ-060–066; no generic novice rigging practical |
| D-ELC | Electrics / temporary production power | `lead-electrics.html`; `pathway-electrics-03-system-load-planning.html`; `production-infrastructure-power-awareness.html` | Packages 04, 30, 36, 38; lighting BOK electrical evidence | Awareness/Lead/Advanced · drafted; qualified-person boundary | Electrics/power domain | MDQ-070–077; preserve no-live-power self-study boundary |
| D-BKL | Backline | combined Course 1/2 surfaces | Packages 11/11A, CBR-045-BPW-RERUN | Combined Support/Systems · drafted | Backline specialty | MDQ-080; split architecture decision through MDQ-083 |
| D-PRP | Props | combined Course 1/2 surfaces | Packages 11/11A, CBR-045-BPW-RERUN | Combined Support/Systems · drafted | Props specialty | MDQ-081; determine independent route depth |
| D-WRD | Wardrobe / costume | combined Course 1/2 surfaces | Packages 11/11A, CBR-045-BPW-RERUN | Combined Support/Systems · drafted | Wardrobe specialty | MDQ-082; determine independent route depth |
| D-LEAD | Crew chief / labor leadership | `lead-crew-chief-foundations.html`; department Lead pages | Packages 24–30 | Lead · drafted; practitioner review open | Leadership curriculum | MDQ-093 + ECQ-04 |
| D-SMG | Stage management | `production-coordination-career-branch.html`; portions of supervisor coordination course | Packages 05, 32, 39 | Orientation only · drafted | Production/coordination | MDQ-090; separate future track |
| D-PMG | Production management / coordination | career-branch route; `supervisor-event-operations.html` | Packages 05, 32, 39 | Orientation/Supervisor · drafted | Production/coordination | MDQ-091; separate future track |
| D-VOP | Venue / event operations | career-branch route; supervisor route | Packages 04, 05, 32, 39 | Orientation/Supervisor · drafted | Venue/event ops | MDQ-092; separate future track |
| D-SHC | Show control | Lighting Course 2/3 interfaces; Video/media interfaces; no dedicated route | Packages 12, 21-LTG, 33–35 | Mapped/researched partially · `research_then_build` | Cross-department systems | MDQ-100; decide course vs advanced resource |
| D-AUT | Stage automation / machinery interface | Staging Course 3 interface only | Packages 37 and cross-cutting notes | Thin · `interface_only` | Automation specialty | MDQ-056 + MDQ-101; specialist path, not novice operation |
| D-COM | Intercom / production comms | Fundamentals communication; Audio interfaces; no dedicated system course | Packages 05, 09, 26 plus current Fundamentals evidence | Introductory only · `research_then_build` | Cross-department comms | MDQ-013 + MDQ-037 |
| D-RF | RF coordination / wireless | Audio lead/system references; no dedicated route | Packages 26, 34 and audio sources | Partial · `research_then_build` | Audio/RF specialty | MDQ-036; preserve specialist coordination boundary |
| D-CAM | Camera / broadcast / video-engineering interface | Video Course 2/3 references; no dedicated route | Packages 13/13A, 35 | Partial · `research_then_build` | Video/broadcast interface | MDQ-045 + MDQ-115 |
| D-SHP | Warehouse / rental shop / logistics | career/resource references; no dedicated course | Packages 03 and department workflow evidence | Researched at career level · `research_then_build` | Operations/logistics | MDQ-011 plus department shop workflows |
| D-LOG | Trucking / dock / case / cargo workflow awareness | Field Skills road-case, ratchet, flatbed; resources and Fundamentals | Packages 18, 46–52; career-lane evidence | Partial/drafted · bounded support only | Operations/logistics | MDQ-012; maintain driver/load-lead authority line |
| D-OUT | Outdoor / weather / public-area operations | Fundamentals; cable protectors/barricade; supervisor hazards; resources | Packages 04/04A, 17, 31, 49–50 | Partial/drafted | Cross-cutting safety | MDQ-014 + MDQ-116 |
| D-ACC | Accessibility / public-route interface | cable protectors/public-area references; accessibility statement | Packages 04A, 50; site accessibility work | Thin · `research_then_build` or embed cross-domain | Accessibility/public interface | Expand in MDQ-014/116 and matrix every route-impact claim |
| D-CAR | Career / hiring / union / credential navigation | Fundamentals Module 10; `how-you-get-called-and-paid.html`; `organizations-worth-knowing.html`; `what-a-work-week-looks-like.html`; `support-for-life-on-the-road.html` | Packages 01–03, 06, 19, 40–42 | Drafted resources/foundation | Career resources | MDQ-120–124; refresh time-sensitive employer/credential facts |
| D-TOOLS | General tools / gear / handling references | `field-tools-for-real-calls.html`; `gear-and-tools.html`; `load-in-load-out-reference.html` | Fundamentals Packages 18–20A plus field packages | Drafted resources | Foundation/resources | Matrix and reconcile with MDQ-010 task backlog |
| D-LRN | Learner state / practice / authorization records | course consent/position state; practice gates; no durable LMS record | Architecture audit, Packages 06, build register; ECQ-16 | Conceptual · product dependency | Learning system | MDQ-131/132 + ECQ-16; never collapse completion into authorization |
| D-EVD | Evidence / citation / freshness / rights | Fundamentals bibliography; source panels; research library | corpus run log; research README; ECQ-17 | Partial · P0 infrastructure | Evidence architecture | MDQ-001/002 now; MDQ-134/135 later |
| D-FX | Atmospherics / laser / special-effects awareness | lighting specialist references only | Lighting BOK; safety corpus | Mapped; no dedicated learner route | Special systems | MDQ-102–104; awareness-first, specialist/legal boundary |

## Current learner-route crosswalk

### Foundation and course navigation

- `lms-dashboard.html` → D-SHF, D-LRN
- `courses/stagehand-fundamentals.html` → D-SHF, D-CAR, D-TOOLS, D-OUT, D-COM
- `courses/module-1-welcome-to-the-live-event-world.html` → D-SHF
- `courses/module-2-safety-mindset-before-skillset.html` → D-SHF, D-OUT
- `courses/module-3-ppe-clothing-and-what-to-bring.html` → D-SHF
- `courses/module-4-venue-and-jobsite-awareness.html` → D-SHF, D-OUT, D-ACC
- `courses/module-5-load-in-fundamentals.html` → D-SHF, D-LOG, D-TOOLS
- `courses/module-6-stagehand-communication-and-crew-etiquette.html` → D-SHF, D-COM
- `courses/module-7-department-basics.html` → D-SHF plus D-LTG/D-AUD/D-VID/D-STG/D-RIG/D-BKL/D-PRP/D-WRD
- `courses/module-8-tools-gear-and-handling-basics.html` → D-SHF, D-TOOLS, D-LOG
- `courses/module-9-load-out-fundamentals.html` → D-SHF, D-LOG, D-OUT
- `courses/module-10-getting-hired-getting-called-back-and-growing.html` → D-SHF, D-CAR

The standalone module routes are delivery/reference variants of the same 34-lesson Fundamentals corpus and must not be counted as additional curriculum.

### Stagehand Field Skills

- `courses/field-skill-move-road-case-with-partner.html` → D-FLD, D-LOG
- `courses/field-skill-over-under-cable-coiling.html` → D-FLD, D-TOOLS; interfaces with D-AUD/D-LTG/D-VID
- `courses/field-skill-ratchet-straps.html` → D-FLD, D-LOG
- `courses/field-skill-flatbed-cargo-securement-support.html` → D-FLD, D-LOG
- `courses/field-skill-barricade-setup.html` → D-FLD, D-OUT, D-VOP
- `courses/field-skill-cable-ramps-protectors.html` → D-FLD, D-OUT, D-ACC

### Department pathways

**Lighting**
- `courses/pathway-lighting-01-support.html` → D-LTG
- `courses/pathway-lighting-02-production-flow.html` → D-LTG, D-SHC
- `courses/pathway-lighting-02-lesson-1-production-lifecycle.html` through `lesson-5-focus-programming-and-load-out.html` → D-LTG
- `courses/pathway-lighting-03-system-design.html` → D-LTG, D-SHC

**Audio**
- `courses/pathway-audio-01-support.html` → D-AUD
- `courses/pathway-audio-02-live-systems.html` → D-AUD, D-COM, D-RF
- `courses/pathway-audio-03-system-design.html` → D-AUD, D-COM, D-RF

**Video**
- `courses/pathway-video-01-support.html` → D-VID
- `courses/pathway-video-02-led-video-systems.html` → D-VID, D-CAM
- `courses/pathway-video-02-led-video-systems-old-overview.html` → D-VID; compatibility/legacy surface, matrix separately
- `courses/pathway-video-02-lesson-1-integrated-systems.html` through `lesson-8-troubleshooting-and-show-operation.html` → D-VID with D-CAM/D-SHC interfaces where applicable
- `courses/pathway-video-03-system-architecture.html` → D-VID, D-CAM, D-SHC

**Staging / scenic**
- `courses/pathway-staging-carpentry-01-support.html` → D-STG
- `courses/pathway-staging-carpentry-02-deck-systems.html` → D-STG
- `courses/pathway-staging-carpentry-03-design-coordination.html` → D-STG, D-AUT, D-RIG

**Backline / Props / Wardrobe**
- `courses/pathway-backline-props-wardrobe-01-support.html` → D-BKL, D-PRP, D-WRD
- `courses/pathway-backline-props-wardrobe-02-department-systems.html` → D-BKL, D-PRP, D-WRD
- no defensible combined Course 3 currently exists; disposition `split_pending`.

### Leadership, supervisor, infrastructure and coordination

- `courses/lead-crew-chief-foundations.html` → D-LEAD
- `courses/lead-lighting.html` → D-LEAD, D-LTG
- `courses/lead-audio.html` → D-LEAD, D-AUD
- `courses/lead-video.html` → D-LEAD, D-VID
- `courses/lead-staging-carpentry.html` → D-LEAD, D-STG
- `courses/lead-rigging.html` → D-LEAD, D-RIG
- `courses/lead-electrics.html` → D-LEAD, D-ELC
- `courses/supervisor-predictive-hazard-recognition.html` → D-OUT, D-VOP, D-PMG
- `courses/supervisor-event-operations.html` → D-VOP, D-PMG, D-SMG
- `courses/production-infrastructure-power-awareness.html` → D-ELC
- `courses/production-coordination-career-branch.html` → D-SMG, D-PMG, D-VOP
- `courses/pathway-electrics-03-system-load-planning.html` → D-ELC

### Resource routes

- `resources/field-tools-for-real-calls.html` → D-TOOLS, D-FLD
- `resources/gear-and-tools.html` → D-TOOLS
- `resources/how-you-get-called-and-paid.html` → D-CAR
- `resources/load-in-load-out-reference.html` → D-SHF, D-LOG
- `resources/organizations-worth-knowing.html` → D-CAR
- `resources/support-for-life-on-the-road.html` → D-CAR
- `resources/what-a-work-week-looks-like.html` → D-CAR, D-SHP

`courses.html` and `resources.html` are catalog/navigation surfaces and inherit all linked domains; they still require matrix coverage for any substantive standalone claims they make.

## Curriculum-source modules

- `scripts/course-data-road-case.mjs` → D-FLD/D-LOG
- `scripts/course-data-field.mjs` → D-FLD and cross-domain task interfaces
- `scripts/course-data-lighting.mjs` → D-LTG
- `scripts/course-data-lead.mjs` → D-LEAD plus named department domains
- `scripts/course-data-advanced.mjs` → D-LTG/D-AUD/D-VID/D-STG/D-ELC/D-PMG/D-VOP/D-SMG as configured
- `courses/stagehand-fundamentals.html` plus bibliography-building sources currently act as the Fundamentals learner/content record; any future structured data source must preserve existing IDs and citation lineage.

## Claimed domains with no dedicated route: explicit disposition

| Domain | Decision now |
|---|---|
| Show control | Research then likely advanced cross-department course/resource; no beginner operating authority |
| Stage automation | Interface awareness first; specialist path later if evidence and practitioner review justify it |
| Intercom/comms | Build transferable communication foundation, then Audio/production-system depth |
| RF coordination | Specialist Audio path; beginner material limited to recognition and handoff |
| Camera/broadcast | Video pathway branch/interface course after MDQ-045/115 |
| Warehouse/rental shop | Build practical career/operations path after MDQ-011 |
| Accessibility/public route | Primarily embedded cross-domain requirements plus possible resource; not a standalone credential |
| Atmospherics/laser/special effects | Awareness and escalation first; specialized operation remains external/specialist authority |
| Learner records | Product/data architecture, not a vocational course |
| Evidence/citation system | Internal evidence architecture with learner-facing citation UX later |

## MDQ-000 completion check

- [x] Every current course family has a domain assignment.
- [x] Every current resource route has a domain assignment.
- [x] Current source-data modules have domain ownership.
- [x] Required future domains have explicit build/interface/boundary dispositions.
- [x] Rigging and electrical specialist boundaries are not represented as missing novice permissions.
- [x] Backline, Props, and Wardrobe are individually registered even while current learner routes remain combined.
- [x] Production Coordination is registered as three parallel domains rather than one universal title ladder.
- [x] The later site-wide matrix can use these stable domain IDs.

**MDQ-000 result:** complete for the 2026-08-31 repository baseline. New learner routes or source modules must be added to this registry as part of the same change that introduces them.