# MDQ-021–028 — Lighting Department Detailed Evidence

**Prepared:** 2026-08-31  
**Status:** Detailed source-grounded lighting research packet; suitable for competency synthesis and initial bounded drafting, not publication release  
**Domain:** `D-LTG` Lighting  
**Depends on:** MDQ-000–003, MDQ-020 role architecture, Package 07, Package 12, Package 21 / lighting BOK, current Lighting C1/C2/C3/Lead materials, `research/_planning/lighting-department-gap-coverage-map-and-research-prompt.md`  
**Purpose:** Close the remaining curriculum-oriented lighting gaps across shop-to-show workflow, science/fixture technology, electrical literacy by authority level, control/networking, console programming, design/previsualization/documentation, specialist interfaces, and leadership/business workflow.

---

## 1. Controlling curriculum principle

Lighting is not one linear ladder.

The evidence supports at least five parallel dimensions that can deepen independently:

1. **physical/department support** — handling, placement, cable/data support, fixture recognition, paperwork literacy;
2. **technician/systems depth** — fixture systems, control/data, networking, troubleshooting, maintenance/QC;
3. **operator/programmer depth** — console operation, show-file organization, playback, busking, timecode, multi-user workflow;
4. **leadership/department ownership** — advancing, crew planning, QC, substitutions, spares, handoffs, reporting;
5. **design/engineering depth** — photometry, color, documentation, visualization, system design, design intent and commissioning interfaces.

No Crew Blueprint learning state creates employer authorization, licensed electrical authority, rigging qualification, MEWP authorization, laser authority, or other external qualification.

---

# MDQ-021 — Lighting shop-to-show lifecycle

## Scope

Map the complete production lifecycle so learners understand where each lighting role enters, what information changes hands, and how shop/advance/prep work affects the show.

## Canonical lifecycle

The transferable workflow is:

**advance / design intent → equipment specification → rental pull / inventory allocation → shop prep and QC → case/truck pack → load-in → fixture/system placement → power/data handoff → configuration/addressing under responsible authority → checkout → focus / position verification → programming / rehearsal → show operation → notes / maintenance → strike → return / check-in → damage / service / inventory disposition**

This is a lifecycle map, not a universal procedure. Exact sequence changes by sector, employer, venue, touring package and equipment.

## Competency map

### Awareness / support

Learner should recognize:

- plot / schedule / fixture-list / patch / case-label relationships;
- the difference between a pull, prep, checkout, show, strike and return phase;
- why labels, mode, address, accessories, clamps/hardware, cables and spares must remain associated with the intended fixture/system;
- why incomplete handoffs create downstream programming and show failures;
- why a shop-prepped package may follow employer/tour standards not obvious from the fixture itself.

### Technician / systems

Research supports deeper competency in:

- repeatable prep/QC records;
- firmware/configuration/version awareness;
- mode/personality consistency;
- data/power/network documentation;
- fault logging and repair escalation;
- spare strategy and known-good substitution;
- return/check-in and damage triage.

### Lead / department ownership

Lead-level evidence includes:

- advance interpretation;
- rental/vendor coordination;
- labor sequencing;
- substitution review;
- prep/QC acceptance;
- configuration/change control;
- show notes and maintenance planning;
- return-condition reporting.

## Sector variation

- **Touring/festival:** guest packages, festival house systems, cloning/substitution, compressed changeovers, guest LD/programmer handoff.
- **Theatre:** rep systems, permanent circuits, paperwork/version discipline, focus notes, longer rehearsal/change cycle.
- **Corporate:** ballroom/convention load paths, scenic/uplight/general-session integration, client/show-flow changes.
- **Venue/house:** permanent-system ownership, house documentation, local/tour handoff.
- **Rental shop:** inventory, prep/QC, serviceability, case packing, return inspection.

## Curriculum disposition

- Foundation: lifecycle recognition.
- Department Support: prep/load-in/show/strike handoff literacy.
- Department Systems: QC/configuration/documentation/troubleshooting lifecycle.
- Lead: advance/vendor/labor/change-control workflow.

**State:** `draftable` for bounded lifecycle content; practitioner validation still required.

---

# MDQ-022 — Lighting science and fixture technology

## Scope

Build the scientific mental model required to understand fixtures and design decisions without turning a beginner course into an electrical-engineering or optical-engineering degree.

## Evidence families

Current IES references establish a modern lighting-science corpus including:

- ANSI/IES LS-3-20 — physics and optics of radiant power;
- ANSI/IES LS-7-20 — vision, eye and brain;
- ANSI/IES LS-8-25 — vision, perception and performance;
- ANSI/IES LS-5-21 — color;
- ANSI/IES TM-30-24 — method for evaluating light-source color rendition;
- ANSI/IES TM-39-25 — temporal light modulation / flicker;
- ANSI/IES TM-40-24 — CCT / distance from Planckian locus;
- ANSI/IES RP-27-26 — photobiological safety for lighting systems.

## Competency families

### Human vision / perception

Teach conceptually:

- adaptation;
- contrast and visibility;
- glare;
- color perception;
- visual performance differences between eye and camera;
- why apparent brightness is not explained by one photometric number.

### Photometry

Transferable concepts:

- luminous flux;
- intensity;
- illuminance;
- luminance;
- beam / field descriptions;
- measurement context and uncertainty;
- photometric data as a design/selection input, not a guarantee of real-show appearance.

### Color

Teach:

- spectrum / spectral power distribution as a deeper explanation than nominal RGB values;
- CCT and tint/Duv concepts;
- color fidelity vs gamut/saturation;
- why CRI alone does not fully describe color rendition;
- TM-30 concepts at an appropriate level;
- camera/fixture matching and metamerism awareness.

The IES source corpus explicitly treats TM-30 as multi-dimensional rather than a single "better CRI" number.

### Fixture technology

Taxonomy should be functional rather than marketing-driven:

- profile / framing / ellipsoidal families;
- Fresnel / soft-edge families;
- PAR / wash;
- strip / cyc / batten;
- beam / spot / wash automated fixtures;
- hybrid fixtures;
- strobe / effect fixtures;
- pixel fixtures;
- followspots / remote followspot systems.

### Source / engine behavior

Research supports coverage of:

- tungsten/incandescent legacy behavior;
- discharge/arc source awareness;
- LED emitter engines;
- thermal management;
- dimming response;
- PWM/temporal behavior and camera interaction;
- calibration and emitter aging;
- multi-emitter color engines.

### Automated fixture mechanics

Conceptual systems map:

- pan/tilt drive;
- optical train;
- zoom/focus;
- color systems;
- gobos/prisms/frost;
- framing systems;
- sensors/encoders;
- fans/cooling;
- firmware/configuration.

Do not teach unauthorized service procedures. Learner-facing content should distinguish operator-level recognition, technician inspection/QC, and manufacturer/service-center work.

## Curriculum disposition

- Department Support: fixture recognition and visible functions.
- Department Systems: optics, photometry, color, automated-fixture architecture, camera/flicker interaction.
- Advanced/Design: deeper measurement, design tradeoffs, photometric interpretation and spectral/color strategy.

**State:** `draftable`, with exact scientific claims requiring matrixed IES/CIE/manufacturer support.

---

# MDQ-023 — Lighting electrical and connector literacy by authority level

## Scope and safety boundary

This packet maps what different lighting roles must **understand** about electrical systems. It does not provide self-study authorization for energized electrical work, temporary-power connection/testing, feeder work, generator/distro operation, or other tasks controlled by employer, code, AHJ, qualified-person or credential requirements.

## Responsibility split

### General lighting hand / department support

Appropriate learning:

- identify power vs data cable families;
- recognize common connector families by purpose/context;
- protect cable routes and connectors;
- identify obvious damage and stop/escalate;
- understand that adapters, distro, generator feeds, feeder, company switches and energized troubleshooting are controlled tasks;
- read labels and follow the responsible electrician/lead.

### Lighting technician

Conceptual/system literacy may include:

- AC power concepts;
- load awareness;
- grounding/bonding concepts;
- overcurrent protection concepts;
- constant vs dimmed/switched power;
- fixture electrical specifications;
- power quality symptoms;
- connector/cable ratings and manufacturer limitations;
- documentation and escalation.

### Electrician / PPDT / qualified-person pathway

Crew Blueprint may map the body of knowledge and external pathway, but practical authority stays external.

Topics include:

- temporary distribution architecture;
- generators / transformers / feeder systems;
- grounding/bonding;
- neutral loading;
- protection devices;
- inspection/testing;
- code/AHJ requirements;
- outdoor temporary electrical systems;
- power-quality diagnosis.

## Connector literacy taxonomy

Research should organize connectors by **function and authority**, not by memorizing a shopping list:

- ordinary branch-power connectors;
- locking / ruggedized entertainment power connectors;
- multipin distribution;
- feeder/high-current systems;
- DMX/control connectors;
- Ethernet/etherCON-style data;
- fiber/tactical fiber;
- legacy theatrical connector families.

Exact pinouts, compatibility, ratings, adapters, inspection and use must remain product/code/manufacturer-context dependent.

## Current ESTA safety context

Relevant current ESTA families include entertainment electrical safety, outdoor portable electrical equipment, luminaire inspection, GFCI/personnel protection, control protocols and temporary-production structures. Exact current standard/version should be matrixed at claim level rather than implied from generic organization links.

## Curriculum disposition

- Department Support: recognition/protection/stop-and-escalate.
- Department Systems: conceptual electrical literacy and documentation.
- TX / external qualification: practical energized production-power authority.

**State:** `draftable` for literacy and authority mapping; **no self-study live-power practical**.

---

# MDQ-024 — Lighting control and network stack

## Current standards baseline

Current official ESTA published-document evidence shows:

- **ANSI E1.11-2024** — DMX512-A;
- **ANSI E1.20-2025** — RDM;
- **ANSI E1.31-2025** — lightweight streaming protocol for DMX512 using ACN, commonly known as sACN;
- **ANSI E1.33-2019** — RDMnet;
- **ANSI E1.59-2021 (R2025)** — Object Transform Protocol (OTP), with explicit non-safety-critical positioning;
- additional current E1.37 RDM message sets, including **E1.37-4-2026** for file-transfer/firmware capabilities.

This is important because older training material may still cite superseded protocol editions.

## Layered mental model

Teach the stack in layers:

1. **device / fixture**;
2. **DMX address/personality/mode**;
3. **physical DMX link / splitter / node**;
4. **RDM device management where supported**;
5. **Ethernet/IP transport**;
6. **sACN / Art-Net or other show-control transport**;
7. **managed network infrastructure**;
8. **console / controller / gateway / monitoring layer**;
9. **documentation and change control**.

This layered model helps troubleshooting without teaching random menu navigation as if it were transferable systems knowledge.

## DMX512

Research/teaching domains:

- universe/channel/address/personality relationships;
- topology and distribution concepts;
- splitters/repeaters/termination as system concepts;
- physical/data fault categories;
- why cable and topology requirements matter;
- isolation and fault containment concepts.

## RDM

Teach what it enables conceptually:

- device discovery;
- remote configuration;
- status/fault reporting;
- manufacturer/device-specific parameter sets.

Current E1.20-2025 should replace stale references to the original 2006/2010 editions in new source maps.

## sACN / ACN

Teach:

- universes over IP;
- source/receiver concepts;
- multicast/unicast at a conceptual level;
- priority/merging/synchronization concepts;
- source-loss/redundancy considerations;
- IPv4/IPv6 awareness under the current E1.31-2025 standard.

## Art-Net

Treat as an important industry protocol family with primary documentation from Artistic Licence. Curriculum should compare concepts/interoperability rather than declaring one protocol universally preferred.

## Ethernet/IP fundamentals

Lighting systems technicians need transferable literacy in:

- addressing/subnets;
- DHCP/static addressing;
- switches;
- MAC/ARP concepts;
- multicast/IGMP;
- VLAN concepts;
- fiber/copper media;
- redundancy;
- documentation;
- packet-level diagnostic awareness;
- change control.

## Network security

Production networks are show-critical operational networks. Curriculum should include:

- default-credential risk;
- unauthorized wireless access;
- segmentation;
- remote-access control;
- firmware/software provenance;
- backup and recovery;
- least-change-during-show discipline;
- physical access to network equipment.

This is operational security literacy, not a cybersecurity credential.

## Fiber and wireless

Teach recognition, architecture and failure categories. Connector cleaning/inspection, optical-budget diagnosis, RF planning and other specialist work must remain bounded to appropriate training/equipment/manufacturer practice.

## Curriculum disposition

- Department Support: DMX/data recognition and routing awareness.
- Department Systems: DMX/RDM/sACN/network fundamentals and layered troubleshooting.
- Advanced/Systems: network design, redundancy, monitoring, security/change control.

**State:** `draftable` with current protocol versions now verified.

---

# MDQ-025 — Console programming and show-file practice

## Scope

Build a **console-independent mental model first**, then map manufacturer terminology.

Major console ecosystems should be treated as implementations of shared concepts, not as the curriculum architecture itself.

## Transferable programming concepts

- patch;
- fixture/device model and mode;
- parameters/attributes;
- selection and groups;
- palettes/presets;
- programmer/editor state;
- cues;
- tracking vs cue-only concepts;
- timing;
- effects/phasers;
- playback/executor concepts;
- busking/live operation;
- macros / command automation;
- timecode/external triggers;
- multi-user/session concepts;
- show-file backup and restore;
- cloning/fixture exchange;
- fixture-library/profile changes;
- documentation and handoff.

## Show-file reliability

The gap audit correctly identified show-file management as a separate competency.

Teach:

- naming/version conventions;
- local and external backups;
- restore testing;
- software/version compatibility;
- fixture-profile/library dependency;
- change notes;
- handoff package;
- redundant-console concepts;
- fallback/manual-operation planning.

Do not teach one exact vendor backup workflow as a universal standard.

## Console-family comparison

Research should maintain a living terminology map for ecosystems such as:

- ETC Eos;
- MA Lighting grandMA;
- ChamSys MagicQ;
- Avolites Titan;
- High End Systems Hog;
- Obsidian ONYX;
- other context-relevant systems.

Comparison dimensions:

- selection syntax;
- palettes/presets;
- tracking model;
- playback organization;
- effects/phaser model;
- networking/session model;
- fixture exchange;
- timecode;
- offline software / visualization integration;
- certification/training ecosystem.

Avoid market-share claims unless independently sourced.

## Timecode/show-control interface

Teach conceptual distinctions among LTC/SMPTE timecode, MIDI/MTC, OSC and other trigger/control interfaces, with ownership and fallback boundaries. Any automation/safety-critical trigger must retain the controlling system/operator boundaries.

## Curriculum disposition

- Department Systems: transferable console model and show-file discipline.
- Operator/Programmer branch: manufacturer-family practice and larger-show organization.
- Advanced: multi-user, timecode, scripting/plugins, redundancy and disaster recovery.

**State:** `draftable` for transferable concepts; vendor-specific practicals remain separate/versioned.

---

# MDQ-026 — Lighting design, previsualization and documentation interfaces

## Current open-data standards

Current GDTF Share documentation identifies:

- **GDTF Version 1.2 / DIN SPEC 15800:2022-02**;
- **MVR Version 1.6 / DIN SPEC 15801:2023-12**.

GDTF describes entertainment devices; MVR packages scene data and linked device descriptions for exchange between design, previsualization and control tools.

The support ecosystem includes design, console and visualizer applications across multiple vendors, making this a legitimate transferable workflow domain rather than a single-vendor feature.

## Documentation stack

Research supports the following document families:

- light plot;
- fixture schedule;
- channel/circuit/address/patch data;
- cable schedules;
- power one-lines;
- network one-lines;
- focus charts;
- equipment lists;
- revision notes;
- cue/show notes;
- venue/tour advance documents.

## Design/CAD/paperwork interfaces

Vectorworks Spotlight currently supports entertainment design, equipment lists, GDTF/MVR exchange and previsualization workflows.

Lightwright remains relevant as dedicated lighting paperwork/database software with Vectorworks data exchange.

Curriculum should teach **data ownership and revision control**, not only software menus.

## Previsualization

The relevant mental model:

**design data → fixture/device description → 3D scene → console/control link → visual simulation → programming/rehearsal → field verification**

Teach limitations:

- source fixture data may be wrong or incomplete;
- visualizer output is not physical measurement;
- geometry may be simplified;
- color/beam/atmospheric simulation has limitations;
- previsualization reduces uncertainty but does not replace on-site checkout/focus/commissioning.

## GDTF/MVR data quality

Curriculum should explicitly cover:

- manufacturer-provided vs user-created device data;
- version compatibility;
- modes/geometry/physical descriptions;
- validation/verification before relying on imported data;
- consequences of stale or incorrect fixture definitions.

## Commissioning / acceptance interface

A lighting course may teach the concept of commissioning/checking a system and maintaining a punch list. Final structural/electrical/life-safety acceptance remains with the appropriate responsible authorities.

## Curriculum disposition

- Department Systems: paperwork, plots, one-lines, revision awareness, visualization interfaces.
- Advanced/Design: drafting, photometrics, data exchange, visualization, design intent, commissioning documentation.

**State:** `draftable` with current GDTF/MVR versions verified.

---

# MDQ-027 — Lighting specialist interfaces

## Followspots and performer tracking

Followspot work is a legitimate specialist/operator branch.

Evidence families include current ESTA followspot-position guidance and manufacturer/operator systems.

Teach role architecture, communication/cueing, position/ergonomic/safety awareness, paperwork and system interfaces. Do not present remote tracking calibration or work-at-height setup as universal beginner practicals.

## Pixel/media/projection interfaces

Lighting increasingly overlaps video/media systems.

Curriculum should teach:

- where fixture/pixel control may remain lighting-owned;
- where media server/playback/projection becomes video/media ownership;
- mapping/data-density concepts;
- sync/genlock/timecode awareness;
- cross-department signal/control boundaries;
- documentation and handoff.

## Atmospheric effects

Current ESTA materials include product-safety and atmospheric-effects guidance.

Teach:

- why haze/fog affects beam visibility and optics;
- ventilation/fire-alarm/venue coordination;
- exposure and fluid/product-specific boundaries;
- residue/maintenance awareness;
- outdoor dispersion differences;
- authority/approval boundaries.

Do not provide hazardous substance or exposure-maximization instructions.

## Lasers / high-intensity optical hazards

General lighting curriculum should cover recognition, hazard awareness, regulatory/specialist boundaries and stop/escalate behavior only. It should not teach operation or audience-exposure setup.

## Outdoor/weather lighting

Teach interfaces:

- manufacturer environmental rating;
- wet-location / ingress-protection literacy;
- condensation/temperature awareness;
- public barriers/routes;
- wind/severe-weather escalation;
- outdoor electrical qualified-person boundary.

Current ESTA E1.58 and event-safety standards remain relevant source families for qualified-person/public-interface boundaries.

## Rigging/work-at-height interface

Lighting learners may need to understand fixture weight/orientation, attachment-point documentation and communication with rigging, but overhead rigging/climbing/MEWP operation remain external training/authorization pathways.

## Emergency/life-safety interface

Teach recognition and non-interference:

- egress lighting;
- fire-alarm interfaces;
- house/emergency-control priorities;
- AHJ/venue ownership;
- do not treat entertainment control as authority over life-safety systems.

## Curriculum disposition

- Department Support: awareness and handoff.
- Department Systems: integration concepts.
- Specialist paths: followspot/tracking/media/pixel where evidence and authority permit.
- External boundary: lasers, controlled optical hazards, specialized work-at-height/rigging/electrical authority.

**State:** `draftable` for awareness/interfaces; specialist practicals need manufacturer/practitioner review.

---

# MDQ-028 — Lighting leadership and business workflow

## Role scope

Lighting leadership is not simply “more programming.”

Lead/head/ME/system-lead responsibilities can include:

- interpreting design/advance information;
- creating/confirming crew work packages;
- labor calls and sequencing;
- venue/tour/vendor communication;
- rental quotes/subrentals/substitutions;
- QC and acceptance criteria;
- spare/contingency planning;
- technical documentation;
- show notes;
- incident/damage reporting;
- change control;
- handoff between shifts/teams;
- mentoring/delegation;
- budget/schedule tradeoffs.

## Advancing

A transferable advance packet can include:

- equipment requirements;
- plots/schedules;
- power/data/network requirements;
- rigging interface information;
- console/show-file needs;
- house-system interfaces;
- labor requirements;
- access/load-in constraints;
- contact/ownership matrix;
- substitutions/open questions.

Exact advance formats vary.

## Rental/vendor workflow

Teach role literacy around:

- quotes;
- substitutions;
- subrentals;
- prep standards;
- spares;
- tech support;
- RMA/service escalation;
- pickup/return condition;
- discrepancies and change authorization.

## Reliability and redundancy

Leadership/systems research should explicitly map:

- single points of failure;
- spare strategy;
- redundant control/network concepts;
- backup show files;
- power/control separation where engineered;
- acceptable-degradation planning;
- recovery ownership.

Do not turn conceptual redundancy into unreviewed electrical/network design authority.

## Sustainability

Research should include practical, non-greenwashing decisions:

- power/energy awareness;
- consumables/batteries;
- fixture lifecycle/repairability;
- reuse of cable/packaging/documentation;
- transport/trucking impacts;
- e-waste and responsible disposal;
- sustainability tradeoffs that do not compromise safety/reliability.

## Accessibility / inclusive visual design

Leadership/design curriculum should include:

- audience visibility/readability;
- glare and contrast implications;
- camera/audience tradeoffs;
- photosensitive/flicker considerations;
- venue/accessibility coordination;
- avoiding unsupported universal medical claims.

## Curriculum disposition

- Lead: crew/vendor/advance/QC/change workflow.
- Supervisor/Manager: integrated labor/schedule/client/venue management.
- Advanced/Design: budget/design/system tradeoffs and documentation ownership.

**State:** `draftable` as leadership/business workflow; real-world release requires practitioner review.

---

# 9. Cross-packet competency graph

The detailed Lighting evidence supports this non-linear graph:

**Lighting Support**
→ Fixture / cable / data / paperwork literacy
→ Lighting Technician

From Lighting Technician, multiple branches may develop:

- **Systems Technician** → DMX/RDM/sACN/networking → commissioning/reliability → Systems Lead
- **Console Operator / Programmer** → transferable programming → manufacturer-family depth → advanced show control/timecode
- **Followspot / Tracking Operator** → specialist show-operation path
- **Shop / Bench Technician** → prep/QC/service triage → shop lead/service specialist
- **Crew Lead / Head Electrician / ME context** → crew/vendor/advance/QC leadership
- **Designer / Associate / Assistant design** → photometry/color/documentation/visualization/design intent

These branches may cross and recombine. None should be rendered as automatically higher than every other branch.

---

# 10. Authority-class routing

| Competency | Typical learning home | Authority ceiling from Crew Blueprint |
|---|---|---|
| Fixture recognition / handling support | T3 Department Support | A1 assigned support |
| DMX/data routing awareness | T3 | A1 |
| Lighting systems concepts | T4 Department Systems | A0/A1 education; employer determines actual work |
| Console programming knowledge | T4/operator branch | A0 education; actual show responsibility assigned externally |
| Network/system design concepts | T7 Advanced | A0 education; employer/system-owner authority external |
| Electrical/temporary-power knowledge | T0/T4/T7 conceptual | no Crew Blueprint energized-work authorization |
| Rigging/work-at-height interface | awareness | external qualification/authorization |
| Laser/high-intensity optical hazard | awareness | specialist/regulatory boundary |
| Lead workflow | T5 | does not appoint learner as lead |
| Design/photometric workflow | T7 | does not grant professional/employer design authority |

---

# 11. Current official source ledger — core additions

## ESTA Technical Standards Program

**Published Documents**  
https://tsp.esta.org/tsp/documents/published_docs.php  
Supports current standard/version verification and scope.

Current versions verified for this packet:

- ANSI E1.11-2024 — DMX512-A;
- ANSI E1.20-2025 — RDM;
- ANSI E1.31-2025 — sACN;
- ANSI E1.33-2019 — RDMnet;
- ANSI E1.37-4-2026 — RDM file-transfer/firmware message capability;
- ANSI E1.54-2021 (R2025) — color communication in entertainment lighting;
- ANSI E1.59-2021 (R2025) — Object Transform Protocol;
- ANSI E1.28-2022 — followspot-position planning guidance;
- ANSI E1.29-2009 (R2024) — theatrical fog-generator product safety;
- ANSI E1.58-2017 (R2022) — portable stage/studio electrical equipment outdoors.

Applicability: standard scope and current-version evidence; exact technical requirements should be cited from exact standard text where used.

## Illuminating Engineering Society

**IES Lighting Library / Standards Cross-Reference**  
https://ies.org/standards/lighting-library/  
https://ies.org/standards/ies-standards-cross-reference/  
Supports science/vision/color/flicker/photobiological source families.

Key current references include LS-3-20, LS-7-20, LS-8-25, LS-5-21, TM-30-24, TM-39-25, TM-40-24, RP-27-26.

## GDTF / MVR

**GDTF Share developer documentation / FAQ**  
https://gdtf-share.com/landing/pages/developer.php  
https://gdtf-share.com/landing/pages/faq.php

Current specification evidence:

- GDTF 1.2 — DIN SPEC 15800:2022-02;
- MVR 1.6 — DIN SPEC 15801:2023-12.

Supports cross-platform device and scene-data exchange claims.

## Vectorworks Spotlight

https://www.vectorworks.net/en-US/spotlight  
https://app-help.vectorworks.net/2025/eng/VW2025_Guide/LightingDesign2/Attaching_GDTF_data.htm

Supports current Spotlight documentation, GDTF/MVR integration, equipment/documentation workflow and previsualization interfaces.

## Lightwright

https://www.lightwright.com/docs/user-guide/14-external-integration/01-vectorworks.html

Supports dedicated lighting paperwork/database and current Vectorworks data-exchange workflow.

## Manufacturer/controller training

Maintain current official documentation/training sources for ETC Eos, MA Lighting grandMA, ChamSys MagicQ, Avolites Titan, Hog and ONYX. Use them for vendor terminology and versioned product workflow only, not for universal control theory.

---

# 12. Matrix requirements

Before learner publication, MDQ-001 must separately map:

- each science definition;
- each protocol/version claim;
- each authority boundary;
- each connector/electrical claim;
- each console-family term;
- each GDTF/MVR/version claim;
- each specialist-interface claim;
- each visual depicting equipment, connector, topology, optical path or safety boundary;
- each assessment rationale.

Generic organization homepages are discovery/context links only. Safety-critical and technical claims need exact documents/manuals/standards.

---

# 13. Remaining unresolved Lighting evidence

The department is now well enough researched to synthesize a complete competency graph, but the following still require deeper evidence before publication-quality claims:

1. practitioner validation of shop-to-show sequence by sector;
2. exact manufacturer maintenance/service boundaries across representative fixture families;
3. exact connector/cable/rating claims by model/region;
4. current console-family concept/terminology comparison and training-path freshness;
5. Art-Net current-version primary documentation and interoperability matrix;
6. production-network security practice from representative network vendors/large-show practitioners;
7. fiber/wireless-DMX model-specific handling/troubleshooting boundaries;
8. followspot/tracking system comparison and practitioner workflow;
9. atmospheric-effects venue/fire-system operational review;
10. film/broadcast/corporate/worship/architectural sector-specific role validation;
11. life-safety/AHJ wording review;
12. original/reviewed visuals and demonstrations;
13. assessment validity and novice usability;
14. claim-level sitewide source matrix.

---

# 14. Research state decision

**MDQ-021–028 state:** `researched` → largely `draftable` for initial bounded curriculum architecture.

This does **not** mean publication-ready. The department still requires claim-level matrixing, practitioner review, learner testing, media/visual review, source-freshness controls and external-authority checks.

## Next execution

Use this packet plus MDQ-020 role architecture to produce:

1. Lighting competency/dependency graph;
2. source-to-competency crosswalk;
3. initial-course/content gap synthesis independent of current website format;
4. then continue MDQ-031–039 Audio detailed research under the same evidence contract.
