# The Crew Blueprint — Active Research Queue

**Status:** Active  
**Prepared:** 2026-08-30  
**Repository baseline:** queue merged to main at 6b8a441c21ac230112352dbe1936bd2d035e1b29  
**Scope:** Research, validation, visual planning, and curriculum handoff readiness. This file does not authorize course or production-site changes.

## Purpose and authority

This is the source repository's active execution queue for Crew Blueprint research.

- This file answers **what must be researched next, in what order, and what makes each item complete**.
- [README.md](README.md) remains the research-library inventory, source hierarchy, and interpretation guide.
- [01-source-research-prompts.md](01-source-research-prompts.md) and [02-source-master-map.md](02-source-master-map.md) are evidence artifacts, not authoritative task-status trackers until RQ-000 reconciles them.
- The roadmap file companies/crew-blueprint/10_content_research_queue.md is a historical cross-ecosystem planning record. After this proposal is accepted and merged, the roadmap should be synchronized to point here rather than maintain a competing detailed queue.

## Accepted direction

**Current Field Skills direction — 2026-08-31:** The task-first redesign will reshape every Field Skill. Each physical-task lesson should use a concise explain-and-show format with written instruction, visual/narrated demonstration, and explicit in-field reinforcement. Research runs before owner review; public/unverified claims, cross-source patterns, and inference must be labeled so the owner reviews only the uncertain field-practice points. Package 51 records the redesign and Package 52 starts the replacement sequence with **Move a Road Case With a Partner**. The older five Field Skill builds and RQ-SFS-01 through RQ-SFS-05 remain preserved evidence and optional/special-assignment material; they no longer define the immediate core sequence.

The following product decisions are already accepted and are not open research questions:

1. **Stagehand Fundamentals should be divided into smaller, focused learning parts.**
2. **A practical Stagehand Field Skills layer should sit after the fundamentals and before departmental specialization.**
3. The first five Field Skills are:
   - over-under cable coiling;
   - ratchet-strap use;
   - flatbed truck-strap and cargo-securement support;
   - barricade setup;
   - cable-ramp setup.
4. Crew Blueprint teaches a stagehand how to recognize, prepare, assist, communicate, and perform assigned work correctly under direction.
5. The responsible technician, driver, qualified load lead, department lead, barricade lead, venue lead, or other designated authority retains final control over placement, routing, hardware, method, tension, sequence, acceptance, and stop/go decisions.
6. Educational completion, observed practical performance, employer authorization, career responsibility, and external certification remain separate claims.

## Target learning structure

The implementation status and claim boundary for every layer are recorded in the [Curriculum Tier and Build Matrix](CURRICULUM_TIER_AND_BUILD_MATRIX_2026-08-30.md).

| Layer | Purpose | Proposed organization |
|---|---|---|
| Stagehand Fundamentals | Shared entry knowledge and work behavior | Four smaller parts: First Call Readiness; Jobsite Awareness and Crew Conduct; Load-In and Load-Out; Departments and Career Direction |
| Stagehand Field Skills | Repeatable physical tasks performed under direction | Five initial practical skill units, each with knowledge and field-practice components |
| Department Course 1 | Perform assigned department support work | Lighting, Video, Audio, Staging/Carpentry, Backline/Props/Wardrobe |
| Department Course 2 | Understand department systems and boundaries | All five pathways are live as of the baseline |
| Later levels | Leadership, systems, design, and advanced responsibility | Released only after evidence, learner validation, and qualified review support the level |

## Queue status vocabulary

| Status | Meaning |
|---|---|
| proposed | Defined here but not yet started |
| queued | Approved and ready for research |
| in_research | Sources and practitioner evidence are being collected |
| source_pack_complete | Research packet is traceable and internally reviewed |
| practitioner_review | Awaiting or undergoing review by the correct field authority |
| ready_for_curriculum | Evidence and boundaries are strong enough for course architecture |
| blocked | Cannot proceed until the named dependency is resolved |
| deferred | Intentionally outside the current sequence |
| completed | Research deliverable and acceptance checks are complete |

A course already existing does not make its underlying research item completed. A completed research item does not authorize publishing curriculum.

## Verified baseline and reconciliation findings

- Stagehand Fundamentals currently contains ten modules.
- Five Course 1 and five Course 2 departmental pathways are live.
- The pre-queue research corpus contains **60 Markdown files**. The merged queue became file 61; this execution run adds the corpus log and Packages 46–50.
- Three unrelated files use Package 21:
  - 21-audio-course-2-sound-engineering-console-basics.md
  - 21-lighting-department-body-of-knowledge-gap-coverage-research.md
  - 21-stagehand-fundamentals-authenticity-audit-and-bibliography.md
- The legacy source-prompt tracker still labels ten topics not_started even though the master map and later validation packages contain evidence for many of them.
- Older planning records describe Audio, Staging/Carpentry, and Backline/Props/Wardrobe Course 2 as pending even though they are live.
- NotebookLM-named material remains in the library, but the current workflow note treats that wording as legacy and uses the repository research library as the evidence handoff.
- Existing Fundamentals content mentions or lightly covers some field-skill topics, but it does not yet provide a complete, dedicated practical sequence for any of the five initial units.
- Package numbers through 45 remain as historical filenames. RQ-000 assigns collision-free semantic keys to duplicate/rerun records, and new Field Skills research continues as Packages 46–50.

## Priority 0 — establish one trustworthy research system

### RQ-000 — Research corpus reconciliation

**Status:** source_pack_complete; cross-repository roadmap synchronization remains pending  
**Priority:** blocking  
**Goal:** Make the current evidence library, package registry, trackers, and course lineage agree before new package numbers are assigned.  
**Run log:** [60-file corpus registry, collision crosswalk, lineage matrix, and execution record](RESEARCH_CORPUS_RUN_LOG_2026-08-30.md)

**Research and audit tasks**

- Inventory all research files by exact filename, subject, date or commit, purpose, source quality, and downstream course use.
- Resolve the three-way Package 21 collision with a documented renumbering/crosswalk plan. Preserve Git history and inbound references.
- Distinguish intentional companion suffixes such as 20A from accidental duplicate package numbers.
- Reconcile 01-source-research-prompts.md against 02-source-master-map.md and Packages 15–20A.
- Identify which packages informed each live course and where source lineage is currently absent.
- Mark old “pending course” statements that became false after the five Course 2 pathways shipped.
- Confirm the current handoff pipeline: research evidence → repository research library → curriculum/content architecture. Retain legacy NotebookLM files as historical context, not workflow authority.
- Classify every research package as active evidence, companion note, curriculum draft, rerun, superseded artifact, historical context, or future work.

**Deliverables**

- [Completed corpus registry and execution log](RESEARCH_CORPUS_RUN_LOG_2026-08-30.md).
- Collision-free package registry and legacy-to-current crosswalk.
- Accurate status correction for the prompt tracker and master map.
- Course-to-evidence lineage matrix.
- Short deprecation notes where a legacy file remains useful but is no longer authoritative.

**Definition of done**

- Every research file has one recorded purpose and status.
- No package identifier refers to multiple unrelated subjects.
- A reader can trace each live course to its evidence without relying on memory.
- The README, this queue, and the roadmap snapshot no longer compete as three execution authorities.

## Priority 1 — restructure the learning foundation

### RQ-100 — Stagehand Fundamentals architecture audit

**Status:** practitioner_review — architecture deliverables prepared; owner, novice-learner, and safety-sensitive review pending
**Goal:** Split the current ten-module course into smaller, navigable parts without losing essential content or silently changing safety boundaries.

**Architecture deliverable:** [Stagehand Fundamentals Architecture Audit](STAGEHAND_FUNDAMENTALS_ARCHITECTURE_AUDIT_2026-08-30.md)
**Tier classification:** [Curriculum Tier and Build Matrix](CURRICULUM_TIER_AND_BUILD_MATRIX_2026-08-30.md)

**Questions to answer**

- Which lessons belong in each of the four accepted parts?
- What repeats, what should move, and what must remain available as a reference?
- Which current Module 8 material belongs in Fundamentals, and which should become an introduction to Field Skills?
- What is the smallest credible knowledge check for each part?
- Should an umbrella final draw approximately 20 randomized questions from all parts?
- What completion state should the learner see at part, course, and field-practice levels?
- Where does mobile navigation or lesson length create avoidable learner friction?

**Deliverables**

- Current-to-proposed lesson crosswalk.
- Duplication, gap, and prerequisite report.
- Assessment blueprint separating part checks from the Fundamentals final.
- Learner-progress state model.
- No-loss migration checklist for a later curriculum/site PR.

**Review**

- Owner review for operational authenticity.
- Novice learner test for language, navigation, and lesson size.
- Safety-sensitive statements cross-checked against their cited primary sources.

## Priority 1 — Stagehand Field Skills research program

Every Field Skill packet must cover:

1. when the stagehand may be assigned the task;
2. equipment and parts;
3. pre-use inspection;
4. the physical sequence;
5. body/hand positioning and crew communication;
6. common incorrect setups;
7. likely failure consequences;
8. stop-and-ask conditions;
9. model-, manufacturer-, venue-, and department-specific differences;
10. a visual demonstration plan;
11. a knowledge exercise;
12. a field-practice checklist;
13. who controls the work and who accepts it.

### RQ-SFS-01 — Over-under cable coiling

**Status:** practitioner_review  
**Research packet:** [Package 46 — Over-under cable coiling](46-stagehand-field-skills-over-under-cable-coiling.md)  
**Pilot reason:** Low equipment burden, visually teachable, and common across departments.

**Research questions**

- Why does alternating the loop direction reduce twist and support clean deployment?
- How should the learner use natural cable lay without forcing the jacket?
- How do connector protection, ties, tails, coil diameter, and storage vary by cable and department?
- Which cable types, reels, multicore systems, fiber assemblies, or manufacturer instructions require a different method?
- What visible mistakes indicate a figure-eight, over-over, reversed alternation, forced twist, or damaged cable?
- When must the stagehand stop and ask the responsible technician?

**Candidate primary sources**

- QSC training guidance on cable coiling.
- Hosa Technology cable-wrapping guidance.
- Cable-manufacturer handling instructions for any specific cable shown.

**Deliverables**

- Source packet and cable-family exception table.
- Hand-motion storyboard: over loop, under loop, completed coil, tie, and clean deployment.
- Good-versus-bad coil visual and short troubleshooting exercise.
- Practical check observed on the actual cable selected by the technician.

**Authority boundary**

The technician chooses the method for the actual cable. The learner does not override cable-specific, reel-specific, fiber, multicore, or manufacturer handling instructions.

### RQ-SFS-02 — Ratchet straps

**Status:** practitioner_review  
**Research packet:** [Package 47 — Ratchet straps](47-stagehand-field-skills-ratchet-straps.md)  
**Goal:** Teach inspection and basic use without presenting a general hand as the authority for anchors, routing, final tension, or load securement.

**Research questions**

- What are the ratchet, fixed end, adjustable end, hook/end fitting, webbing, label, spool/mandrel, handle, pawl, and release?
- How is webbing threaded, slack removed, tension applied, the handle locked, tension released, and the strap stored?
- What cuts, abrasion, chemical damage, heat damage, knots, missing labels, damaged stitching, bent hardware, corrosion, or mechanism faults remove a strap from service?
- How do working load limit, breaking strength, end fittings, angle, edge contact, and manufacturer instructions affect selection?
- What snap-back, pinch-point, sharp-edge, shifting-load, and over-tension hazards must be recognized?
- Which steps are always assigned or approved by the responsible lead?

**Candidate primary sources**

- Kinedyne ratchet and cargo-securement education.
- Applicable manufacturer instructions and Web Sling & Tie Down Association guidance.

**Deliverables**

- Parts/inspection/source packet.
- Thread–remove slack–tension–lock–release storyboard.
- Reject-or-escalate inspection scenarios.
- Practical checklist using the exact strap and anchor plan selected by the lead.

**Authority boundary**

The responsible lead determines whether the strap is suitable and controls anchors, routing, edge protection, tension, sequence, and acceptance.

### RQ-SFS-03 — Flatbed cargo-securement support

**Status:** practitioner_review  
**Research packet:** [Package 48 — Flatbed cargo-securement support](48-stagehand-field-skills-flatbed-cargo-securement-support.md)  
**Goal:** Teach a stagehand to assist a driver or qualified load lead without implying cargo-securement authority.

**Research questions**

- How do flatbed securement tasks differ from basic ratchet-strap mechanics?
- What are winch straps, winches, chains, binders, blocking, bracing, dunnage, edge protection, tiedowns, and anchor points?
- What must a helper inspect, communicate, and keep clear of during tensioning and release?
- What awareness is appropriate for working load limits, aggregate securement, tiedown count, commodity rules, load shift, and periodic inspection?
- Which decisions legally or operationally remain with the motor carrier, driver, or qualified load lead?
- Which hardware and cargo types should remain awareness-only?

**Candidate primary sources**

- Federal Motor Carrier Safety Administration cargo-securement rules and guidance.
- Manufacturer instructions for the specific winches, straps, chains, binders, and edge protection used.
- Kinedyne cargo-securement education and relevant industry standards.

**Deliverables**

- Federal rule/industry practice/employer procedure distinction table.
- Helper-safe-zone and communication storyboard.
- Hardware recognition exercise.
- Practical assist checklist requiring driver or qualified load-lead acceptance.

**Authority boundary**

The driver, motor carrier, or qualified load lead owns the securement plan and final acceptance. Course completion is not driver qualification or securement authorization.

### RQ-SFS-04 — Barricade setup

**Status:** practitioner_review  
**Research packet:** [Package 49 — Barricade setup](49-stagehand-field-skills-barricade-setup.md)  
**Goal:** Teach safe assistance while preserving differences among equipment families and event layouts.

**Research questions**

- How do folding bicycle barricade, interlocking steel crowd-control barricade, concert barricade, temporary fence, and other systems differ?
- How are panels inspected, lifted, connected, aligned, turned, gated, braced, and removed for the exact model?
- How do slopes, thresholds, public routes, emergency access, cable routes, wind, ground conditions, and crowd pressure affect the plan?
- What pinch, crush, tip, trip, and hand-placement hazards occur during setup and strike?
- What may a stagehand assemble under direction, and what requires layout or final inspection by the designated lead?

**Candidate primary sources**

- StageRight CC-500 installation/product information for that model.
- Manufacturer instructions for every barricade family demonstrated.
- Venue, authority-having-jurisdiction, and event emergency-access requirements where applicable.

**Deliverables**

- Barricade-family distinction sheet.
- Model-specific connection and safe-hand-position storyboard.
- Layout-reading exercise with explicit “do not improvise” conditions.
- Practical checklist signed off by the designated barricade or venue lead.

**Authority boundary**

The designated lead controls line, gates, corners, bracing, public/emergency access, sequence, and final placement. One model's connector or bracing logic must never be generalized to another.

### RQ-SFS-05 — Cable ramps and cable protectors

**Status:** practitioner_review  
**Research packet:** [Package 50 — Cable ramps and cable protectors](50-stagehand-field-skills-cable-ramps-protectors.md)  
**Goal:** Teach correct handling and assembly under an approved route, not independent cable-routing authority.

**Research questions**

- What differences matter among drop-over protectors, hinged modular ramps, heavy-duty vehicle-rated protectors, pedestrian transitions, and accessible systems?
- How are channels, lids, connectors, ramps, end pieces, and warning surfaces inspected and assembled?
- How do cable diameter, fill, bend limits, separation, heat, voltage/service type, connector placement, load rating, vehicle class, surface, slope, and manufacturer rules limit use?
- How are trip edges, lid closure, line stability, crossings, public visibility, and wet/uneven surfaces checked?
- When must a cable be rerouted, a different protector selected, or the responsible department/venue lead called?

**Candidate primary sources**

- Checkers/Linebacker product selection and installation information.
- Manufacturer instructions for the exact protector family used.
- Applicable venue access, pedestrian-route, and authority-having-jurisdiction requirements.

**Deliverables**

- Protector-family and selection-limits table.
- Channel loading, connection, lid closure, and edge-check storyboard.
- Route hazard exercise.
- Practical checklist accepted by the responsible department or venue lead.

**Authority boundary**

The department or venue lead controls the cable route and protector placement. The stagehand does not independently decide service separation, capacity, accessibility compliance, or vehicle suitability.

## Priority 2 — visual and video evidence program

### RQ-200 — Field Skills visual system

**Status:** phase-one AI visual pass complete in Package 53; exact-equipment footage, licensing registry, learner testing, and qualified review remain queued
**Goal:** Make physical skills understandable on a phone while keeping every safety-critical visual traceable to real equipment and reviewed procedure.

**Deliverables**

- Visual specification for still diagrams, short motion sequences, video, captions, alt text, and printable field cards.
- Original SVG/HTML sequence diagrams for precise steps; each tied to a reviewed research packet.
- Shot list, narration, captions, and review checklist for owner/qualified-lead footage using actual gear.
- Official/manufacturer video registry with title, owner, URL, equipment model, publication date, embed permission, accessibility, and backup status.
- A rule that every lesson remains understandable if an external video disappears.
- A licensing record for every non-original visual.

**Guardrails**

- Do not use AI-generated mechanical imagery as procedural authority.
- Do not rehost copyrighted video without permission.
- Do not crop away model identifiers or warnings that are necessary to interpret a demonstration.
- Label model-specific sequences as model-specific.

## Priority 1.5 — close the disclosed coverage gaps (Rigging, Electrics, Backline/Props/Wardrobe Course 3)

**Why this exists:** the v2 redesign concept discloses that 3 departments carry unbuilt tracks — Rigging (Course 1/2/3, its entire ladder), Electrics (Course 1/2), and Backline/Props/Wardrobe (Course 3) — 6 tracks total. [RQ-400's competency graph](RQ-400-role-competency-graph-and-coverage-map_2026-08-31.md) already identified Rigging Course 1 and Electrics Course 1 as the two priority gaps back on 2026-08-31, and named the real evidence for both, but no research queue item was ever opened to actually close them — RQ-400 explicitly "does not create new course content or research packets." This section is that missing queue: closing every item here is what lets the disclosed-gap stat eventually read **0** and be removed from the site entirely, rather than kept and worded honestly around a permanent gap.

### RQ-480 — Rigging Course 1: Ground Rigger awareness/assist

**Status:** queued  
**Priority:** highest of the three gaps — real, active, entry-level hiring demand exists for this exact role and Crew Blueprint currently has nothing between general Fundamentals overhead-hazard awareness and Lead-tier decision content.  
**Goal:** Teach ground-rigging support tasks, hardware recognition, and communication using the same "recognize, assist, stay within bounds" model already used for every other department's Course 1 — **not** physical rigging technique, point selection, or independent hands-on rigging work.

**Research questions**

- What does a Ground Rigger actually do day-to-day, assisting a Head/Up-Rigger from the ground? ([Package 02](02-department-skill-progressions-us-live-events.md) already cites Nasco's description of Ground Riggers assisting high riggers under the Head Rigger's plan, and Universal Orlando's 2026 postings distinguishing a Tech III ground rigger from a Tech II up rigger.)
- What hardware, hoist, and load-path terminology must a ground-level assist recognize and name correctly, without being taught to select or inspect it independently?
- What communication protocol (hand signals, radio calls, spotting) does ground support use with the rigger working aloft?
- What is the explicit "never" list — high work, point selection, load calculation, hardware inspection/approval, anything requiring a qualified/competent-person determination — mirrored from the existing Lead-tier Rigging course's own boundary language?
- What stop-and-ask conditions apply specifically to ground-level rigging assist work?

**Candidate primary sources**

- [Nasco Special Rigging](https://www.nasco.ca/service-type/special-rigging-projects/) (Ground Rigger role description).
- [Universal Rigging Opportunities](https://careers.pageuppeople.com/851/cw/en-us/job/655912/rigging-opportunities-universal-studios-and-islands-of-adventure) (Tech III ground rigger / Tech II up rigger distinction).
- [Encore Event Rigger](https://jobs.encoreglobal.com/fr/emploi/mississauga/event-rigger-toronto/6228/95423040032) postings (hour-based entry requirements).
- The existing `lead-rigging.html` boundary text itself, as the upper bound this course must never cross.

**Deliverables:** source packet; recognize/assist/communicate lesson sequence matching the Course 1 pattern used elsewhere; explicit no-high-work/no-point-selection boundary statement; knowledge check.

**Definition of done:** a qualified rigger reviewer confirms no question or lesson can be read as technical rigging authorization, hands-on point selection, or independent hardware judgment — same bar RQ-460's existing Lead-tier build already met.

**Authority boundary:** the Head Rigger and any qualified/competent person retain all point-selection, load-calculation, hardware-inspection, and high-work authority. This course teaches ground-level assist and recognition only.

### RQ-481 — Electrics Course 1: assigned electrical support

**Status:** queued  
**Priority:** second — closes the asymmetry with every other department (Electrics currently has Lead and Course 3 but nothing at Course 1/2) and gives learners heading toward Electrics Lead an actual entry point, instead of folding department-specific content into general Fundamentals/Infrastructure awareness.  
**Goal:** Teach assigned electrical-support tasks under an electrician's direction — distro/cable handling, patch, and jobsite awareness — using the same Course 1 pattern as every other department.

**Research questions**

- What does an entry-level electrics assist actually do under a working electrician's direction (cable/distro handling, running power, patch, striking)?
- What hazard recognition (overloaded circuits, damaged cable/connectors, wet conditions, ground-fault indicators) must an assist recognize and escalate, without being taught to diagnose or repair?
- What terminology and hardware (company switches, distro boxes, feeder cable, banded/socapex connectors) does an assist need to recognize and hand off correctly?
- What is the explicit boundary against any live-power procedure, consistent with `pathway-electrics-03-system-load-planning.html`'s own existing "literacy only, no live-power procedure" framing?

**Candidate primary sources**

- [Operation Mincemeat Head Electrician posting](https://playbill.com/job/head-electrician-operation-mincemeat-tour/c93251e5-f664-4f10-ab35-ab97fe1bed99) (department structure and assist role framing).
- [ETCP Entertainment Electrician](https://etcp.esta.org/certify/certify_electrical.html) (competency-tier framing, used the same way it's already cited for Lighting).
- Existing Packages 30, 36, and 38 (already support the Electrics Lead/Course 3 review builds — check for reusable assist-tier material before commissioning new interviews).

**Deliverables:** source packet; recognize/assist/escalate lesson sequence; explicit no-live-power-procedure boundary; knowledge check.

**Definition of done:** qualified entertainment-electrical reviewer confirms no question or lesson can be read as live-power authorization — same bar ECQ-10/ECQ-12 already hold Electrics Course 3 and Production Power awareness to.

**Authority boundary:** the assigned electrician and qualified/licensed personnel retain all live-power, circuit-design, and diagnostic authority. This course teaches recognition, assist, and escalation only.

### RQ-482 — Rigging Course 2 (Up-Rigger) and RQ-483 — Electrics Course 2 (systems)

**Status:** deferred — blocked on RQ-480 and RQ-481 respectively  
**Why deferred:** every other department's Course 2 (Systems Tier) was built after its Course 1 shipped and could bridge from real Course 1 content. Opening Course 2 research before Course 1 exists risks the same kind of gap this queue exists to close — a course that doesn't actually build on anything real. Once RQ-480/RQ-481 close, re-open these as full entries using the same template.

### Rigging Course 3 (Head Rigger) — flagged, not queued

Before commissioning new research here: `DEPARTMENTS.rigging.leadRole` already reads "Head Rigger track (decision-only)," and the existing Lead-tier `lead-rigging.html` build is explicitly decision-only Head Rigger content. A Course 3 slot separately labeled "Head Rigger" may be redundant with the Lead course that already exists, rather than a real missing layer — this needs an owner call on whether Rigging's ladder should end at Course 2 (Up-Rigger) with Lead absorbing the Head Rigger layer, or whether a distinct Course 3 covers something the Lead course doesn't. Not queuing speculative research until that's answered.

### Backline / Props / Wardrobe Course 3 — already queued, cross-referenced here

No new item needed: [ECQ-14](EXPANDED_CURRICULUM_RESEARCH_QUEUE_2026-08-30.md#ecq-14--backline--props--wardrobe-course-3-decision) already covers this exact gap (a real, named "proposed — actual curriculum gap" with the combined-vs-split decision as its open research question). Its status is unchanged by this section; it's cross-referenced here so all 6 disclosed gap tracks resolve from one place.

## Priority 2 — validation and handoff

### RQ-300 — Practitioner and learner validation protocol

**Status:** queued  
**Goal:** Establish the evidence needed before a packet becomes curriculum and before educational completion is presented as field capability.

**Required review**

- Owner review where the owner has direct operational expertise.
- Responsible technician/department lead review for department-specific practices.
- Driver or qualified load-lead review for flatbed securement.
- Manufacturer documentation review for model-specific hardware.
- Qualified rigger review for any future rigging material.
- Novice learner comprehension test.
- Observed field-practice test on actual equipment.

**Acceptance record**

Each skill must record:

- sources and applicability;
- known regional/employer/model variation;
- reviewer role and review date;
- knowledge-check result;
- field-practice result;
- unresolved limitations;
- exact claim permitted in the learner record.

The learner record must distinguish: **knowledge completed**, **practice observed**, **employer/lead authorized**, and **external credential verified**.

## Carried-forward research and build backlog

The 21-course build exposed a smaller, release-focused queue. Use the [Expanded Curriculum Research Queue](EXPANDED_CURRICULUM_RESEARCH_QUEUE_2026-08-30.md) for practitioner review, visuals, portfolio depth, assessment validity, record states, and source freshness. The [Expanded Curriculum Build Register](EXPANDED_CURRICULUM_BUILD_REGISTER_2026-08-30.md) maps every new course to its research and release gate.

| ID | Work | Current disposition |
|---|---|---|
| RQ-400 | Competency and role graph replacing a single universal job hierarchy | **completed 2026-08-31** — see [RQ-400 Competency Graph and Coverage Map](RQ-400-role-competency-graph-and-coverage-map_2026-08-31.md); surfaces Rigging Course 1/2/3 and Electrics Course 1/2 as the two priority gaps |
| RQ-410 | Electrics research program | Packages 30, 36, and 38 support three review builds; ECQ-10 and ECQ-12 now target qualified review, jurisdiction/authority mapping, and awareness validation; **Course 1 gap now queued as [RQ-481](#rq-481--electrics-course-1-assigned-electrical-support), Course 2 as [RQ-483](#rq-482--rigging-course-2-up-rigger-and-rq-483--electrics-course-2-systems) (deferred on RQ-481)** |
| RQ-420 | Infrastructure research program | Power awareness review build exists; networking, load-bearing systems, logistics, and site-service branches remain future decisions |
| RQ-430 | Production research program | Package 39 supports the three-track orientation build; ECQ-13 now targets track-specific sources, practitioner evidence, and scenarios |
| RQ-440 | Business and risk program | future; insurance, contracting, compliance, records, data governance, and market-entry evidence |
| RQ-450 | Predictive Hazard Recognition | Review build complete from Package 31; ECQ-05 performs the evolving-scenario validation needed for release |
| RQ-460 | Rigging | Decision-only Lead review build complete; physical instruction remains deferred and requires qualified-rigger governance; **Course 1 (ground-level assist, not physical technique) now queued as [RQ-480](#rq-480--rigging-course-1-ground-rigger-awarenessassist), Course 2 as [RQ-482](#rq-482--rigging-course-2-up-rigger-and-rq-483--electrics-course-2-systems) (deferred on RQ-480), Course 3 flagged — not queued — pending an owner call on Lead-tier overlap** |
| RQ-470 | Course 3+ expansion | Five Course 3 review builds complete from Packages 33–37; ECQ-07 through ECQ-11 define portfolio-depth and qualified-review work |

## Execution waves

| Wave | Work | Exit condition |
|---|---|---|
| 0 | RQ-000 | One reconciled registry, status model, and course-to-source crosswalk |
| 1 | RQ-100 and RQ-SFS-01 | Fundamentals architecture proposal plus one complete pilot Field Skill packet |
| 2 | RQ-SFS-02 and RQ-SFS-05 | Ratchet strap and cable-ramp packets pass source review |
| 3 | RQ-SFS-04 and RQ-SFS-03 | Barricade and flatbed packets pass the correct practitioner review |
| 3.5 | RQ-480 and RQ-481 | Rigging Course 1 and Electrics Course 1 pass qualified review — the two highest-priority disclosed coverage gaps close, unblocking RQ-482/RQ-483 |
| 4 | RQ-200 and RQ-300 | Reusable visual system and validation protocol are operational |
| 5 | RQ-400 onward | Future programs prioritized by evidence, learner outcomes, partner demand, and implementation capacity |

## Standard research-item template

Every new item added to this queue must include:

- stable RQ ID and title;
- status, priority, owner, and dependencies;
- learner/job outcome;
- scope and explicit non-scope;
- research questions;
- source plan using the README hierarchy;
- jurisdiction, employer, venue, and equipment-model limits;
- authority boundary;
- visual/video needs and licensing status;
- practitioner-review role;
- deliverables;
- definition of done;
- downstream course or product decision it informs.

## Source admission rules

Candidate links are starting points, not approved evidence merely because they appear in this queue. A source enters a research packet only after confirming author, version/date, equipment or jurisdiction applicability, accessibility, and the exact claims it supports.

Initial candidates:

- QSC, cable coiling: https://training.qsc.com/mod/book/tool/print/index.php?id=1715
- Hosa Technology, wrapping cable: https://hosatech.com/press-release/how-to-wrap-a-cable/
- Kinedyne, cargo-securement education: https://kinedyne.com/201-cargo-securement-education/
- Kinedyne, ratchet overview: https://kinedyne.com/1-inch-ratchets/
- FMCSA, cargo-securement rules: https://www.fmcsa.dot.gov/regulations/cargo-securement/cargo-securement-rules
- FMCSA, driver responsibility interpretation: https://www.fmcsa.dot.gov/regulations/question-4-there-requirement-driver-must-personally-load-block-brace-and-tie-down-cargo
- StageRight, CC-500 manual: https://performance.stageright.com/wp-content/uploads/sites/2/2015/09/pip-cc500-crowd-control-barricade-20161209.pdf
- StageRight, steel barricade product information: https://performance.stageright.com/products/accessories/crowd-control-barricades/steel-barricade/
- Checkers, cable-protector selection guide: https://checkers.justrite.com/buying-guide/cable-protectors
- Checkers, cable-protector overview: https://checkers.justrite.com/media/mageplaza/product_attachments/attachment_file/c/h/checkers_cable-protectors-overview__ck414-web_1.pdf

## Definition of done for this queue

This queue is working when:

- one file provides the next research action and its order;
- existing evidence is reused before duplicate research is commissioned;
- every safety-sensitive skill has an explicit authority boundary and qualified review path;
- course architecture cannot accidentally imply field authorization or certification;
- visual and video assets remain traceable, licensed, accessible, and replaceable;
- accepted source-repository status can be summarized into the 50 Year Roadmap without creating a second detailed queue.

## Non-goals

This queue does not:

- publish or rewrite courses;
- certify a learner's practical competence;
- authorize anyone to direct technical, vehicle, crowd, electrical, or rigging work;
- replace manufacturer instructions, employer procedures, site rules, law, codes, or a responsible lead's direction;
- merge this proposal into main without owner review.
