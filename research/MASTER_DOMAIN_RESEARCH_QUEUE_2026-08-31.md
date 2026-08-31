# The Crew Blueprint — Master Domain Research Queue

**Prepared:** 2026-08-31  
**Status:** Active planning artifact  
**Scope:** The Crew Blueprint website and curriculum domain: stagehand readiness, practical field skills, live-event departments, specialist systems, leadership/supervision, production coordination, and supporting career/jobsite knowledge.  
**Primary gap-map seed:** `research/_planning/lighting-department-gap-coverage-map-and-research-prompt.md`  
**Release-validation companion:** `research/EXPANDED_CURRICULUM_RESEARCH_QUEUE_2026-08-30.md`

## 1. Purpose

This is the master research queue for filling out the remaining Crew Blueprint content domain. It is intentionally broader than the existing Expanded Curriculum Research Queue.

The two queues have different jobs:

- **This master queue** identifies knowledge, competency, role, workflow, evidence, and curriculum gaps that still need research before or while initial courses are written.
- **The ECQ release queue** validates material already drafted: practitioner review, model/jurisdiction applicability, original visuals, assessment validity, learner testing, rights, source freshness, and durable record state.

Do not collapse those two functions. A topic can be researched enough to draft a course and still be unready for final learner publication.

## 2. Program sequence

The current program is:

1. Inventory the complete subject domain and current repository coverage.
2. Convert gaps into bounded research assignments.
3. Run research and store each result as a separate source-traceable package.
4. Write initial courses from the resulting evidence.
5. Build a comprehensive site-wide source/citation-to-content matrix.
6. Audit every claim, lesson, question, visual, boundary, and source relationship.
7. Enhance course materials from the evidence and from owner review.
8. Later create a full-repository `audit` branch for final-publication review while `main` remains the ordinary live branch; branch creation/switching is a later owner-directed operation, not part of this queue update.

## 3. Coverage model

Every domain is tracked through the following states:

| State | Meaning |
|---|---|
| Mapped | Role/competency universe is identified well enough to know what belongs in the domain. |
| Researched | Primary/official and appropriate secondary evidence supports the competency map. |
| Draftable | Evidence is sufficient for an initial bounded course or resource draft. |
| Drafted | Initial learner-facing material exists. |
| Matrixed | Claims and content are linked to exact sources, applicability, and ownership. |
| Practitioner reviewed | Qualified field review has resolved material authenticity/authority issues. |
| Learner validated | Comprehension/assessment/usefulness has been tested with target learners. |
| Publication-ready | Legal, safety, accessibility, source freshness, rights, and owner review gates are closed. |

## 4. Research-package output contract

Every new research assignment should return, at minimum:

1. **Scope statement** — exact role, task, system, environment, and excluded authority.
2. **Role architecture** — real job titles, title variation, responsibilities, handoffs, prerequisites, and advancement path.
3. **Competency map** — novice awareness, supervised task ability, independent technician ability, lead/supervisor ability, specialist/design authority where applicable.
4. **Workflow map** — shop/advance/prep/load-in/build/test/rehearsal/show/strike/return/maintenance as relevant.
5. **Tools/equipment/system map** — categories first; product-specific material only where needed.
6. **Failure/hazard map** — common errors, stop conditions, escalation points, and authority limits.
7. **Sector variation** — concert/touring, venue, festival, corporate, theatre, worship, broadcast/film, convention/tradeshow, or other contexts where relevant.
8. **Source ledger** — source owner, title, URL, date/version, evidence type, jurisdiction/model scope, access date, and claim families supported.
9. **Curriculum recommendation** — what should become Foundation, Field Skill, Department Support, Department Systems, Lead, Supervisor, Advanced/System Design, Resource-only, or explicitly no-build.
10. **Unresolved gaps** — facts still requiring practitioner, manufacturer, employer, union, code/AHJ, or field observation evidence.

## 5. Priority logic

### P0 — architecture and matrix infrastructure
Needed so future research and drafting stays traceable rather than producing another pile of disconnected pages.

### P1 — major curriculum holes
Domains already represented or strongly implied by the site but lacking enough evidence/course depth for a coherent learning path.

### P2 — department depth and specialist branches
Deepens established pathways and separates roles that should not remain combined.

### P3 — context/sector expansion
Adds venue/tour/festival/corporate/theatre/broadcast/worship/convention distinctions after the transferable core is established.

### P4 — enhancement and publication evidence
Original visuals, practitioner review, learner testing, rights, freshness, and final audit. Most of this is already represented in the ECQ queue.

---

# P0 — Domain architecture, inventory, and source matrix

## MDQ-000 — Canonical domain inventory and route crosswalk

**Goal:** Build the canonical list of Crew Blueprint subject domains and map every current route, research package, source-data module, resource page, and planned course to one or more domains.

**Must include:**
- Stagehand Fundamentals;
- Stagehand Field Skills;
- Lighting;
- Audio;
- Video/LED/display systems;
- Staging/carpentry/scenic;
- Rigging;
- Electrics/temporary production power;
- Backline;
- Props;
- Wardrobe;
- Crew chief/labor leadership;
- stage management;
- production management/coordination;
- venue/event operations;
- show control/automation interfaces;
- intercom/comms;
- RF coordination;
- camera/broadcast/video-engineering interfaces;
- warehouse/rental-shop/logistics;
- trucking/case/cargo workflow awareness;
- outdoor/weather/public-area operations;
- accessibility and public-route interfaces;
- career/employment/union/credential navigation;
- learner/practice/authorization record concepts.

**Output:** One canonical inventory with `domain_id`, route(s), current source package(s), current tier, state, owner, and next action.

**Done when:** No public or owner-review course/resource exists without a domain assignment, and no claimed domain exists only in prose without a deliberate build/no-build decision.

## MDQ-001 — Site-wide source/citation/content matrix schema

**Goal:** Define the matrix before the corpus grows further.

**Required fields:**
- content ID;
- route/file;
- course/tier/module/lesson/block/question/visual identifier;
- exact learner-facing claim or claim family;
- source ID(s);
- source owner/title/URL;
- publication/version/effective date;
- access date;
- evidence type;
- primary/secondary/practitioner/Crew Blueprint framing classification;
- jurisdiction/sector/model applicability;
- direct support / partial support / framing only;
- authority implication;
- safety criticality;
- source freshness trigger;
- reviewer;
- disposition;
- rights/license for media;
- replacement/supersession relationship.

**Done when:** The schema can represent Stagehand Fundamentals, generated tiered courses, hand-written department courses, resources, assessments, and visuals without losing claim-level traceability.

## MDQ-002 — Current corpus-to-matrix backfill method

**Goal:** Create the repeatable method for converting existing packages 01–53 and current pages into the matrix.

**Method must distinguish:**
- exact externally supported fact;
- paraphrased source-backed instruction;
- practitioner convention;
- employer/manufacturer-specific procedure;
- Crew Blueprint instructional model;
- safety boundary;
- question/answer rationale;
- visual depiction.

**Done when:** A pilot backfill on Stagehand Fundamentals plus one Field Skill plus one Department Systems course can be audited claim-by-claim.

## MDQ-003 — Curriculum tier/routing normalization

**Goal:** Ensure each competency has one intended learning tier and that the same concept is not accidentally taught as novice permission in one route and specialist authority in another.

**Deliverable:** Cross-domain tier map using Foundation → Field Skill → Department Support → Department Systems → Lead/Supervisor → Advanced/System Design → external qualification/specialist boundary.

---

# P1 — Stagehand and field-practice expansion

## MDQ-010 — Stagehand Field Skills universe

**Goal:** Identify the practical tasks a general stagehand is commonly expected to perform under direction across major US live-event environments, then separate teachable general skills from equipment/employer-specific skills.

**Research families:**
- road-case movement and parking;
- cart/flatbed/dolly use;
- truck-pack support and case orientation;
- cable handling, coiling, labeling, laying, dressing, ramps/protectors;
- basic non-energized connector recognition;
- sandbags/ballast handling awareness;
- pipe-and-drape handling;
- soft goods/drape handling;
- barricade/fence/queue hardware families;
- deck/platform component handling;
- truss handling on the ground without teaching rigging authority;
- lift-gate/dock/ramp interface awareness;
- hand tools commonly used by stagehands;
- tape/labeling conventions;
- housekeeping/egress/work-area reset;
- safe team lifting/moving and spotter communication;
- basic radio/headset use;
- forklift/MEWP/rigging/electrical stop-and-escalate boundaries.

**Output:** Field Skill backlog ranked by frequency, transferability, risk, and ability to teach without implying authorization.

## MDQ-011 — Warehouse/rental-shop stagehand pathway

**Goal:** Map entry-level through technician shop work: receiving, pulls, prep, QC, cable testing, labeling, case packing, inventory, returns, damage triage, firmware/configuration boundaries, spare kits, and repair escalation.

## MDQ-012 — Loading dock, truck, case, and logistics interface

**Goal:** Map the production worker’s responsibilities around docks, ramps, lift gates, truck packs, case labels, manifests, chain of custody, weather protection, and driver/load-lead authority without teaching regulated driving or cargo-securement authority beyond learner scope.

## MDQ-013 — Work communication systems

**Goal:** Build a transferable communication course covering radio discipline, wired/wireless intercom awareness, cue vocabulary, confirmation/readback, emergency communication, hand signals where legitimate, hearing protection interaction, and department/venue-specific vocabulary boundaries.

## MDQ-014 — Outdoor/public-area field operations

**Goal:** Expand weather, public-interface, egress, crowd-route, temporary surface, cable crossing, water, mud, heat/cold, wind, lightning, vehicle-interface, and site-condition awareness for general production workers.

---

# P1 — Lighting department

Claude’s lighting gap map is the model for this program and remains the detailed seed. Package 21 already closes a substantial portion of it; the assignments below are the remaining curriculum-oriented research units rather than a request to rerun Package 21 wholesale.

## MDQ-020 — Lighting role architecture and sector progression

Map titles and boundaries across local crew, rental/shop, touring, venue, theatre, corporate, festival, worship, film/TV/broadcast, and installation contexts: lighting hand, technician, electrician, board op, console operator, programmer, systems tech, head electrician/ME, lighting director, associate/assistant roles, designer, service/bench roles.

## MDQ-021 — Lighting shop-to-show lifecycle

Advance → rental pull → prep/bench test → case/truck pack → load-in → hang/ground package → addressing/configuration → power/data checkout → focus → programming/rehearsal → show operation → notes/maintenance → strike → return/check-in.

## MDQ-022 — Lighting science and fixture technology

Human vision/perception; photometry; color science; optics; conventional/arc/LED source behavior; automated fixture mechanics; thermal management; dimming behavior; flicker/camera interactions; fixture taxonomy.

## MDQ-023 — Lighting electrical and connector literacy by authority level

Map what hands, technicians, electricians, and qualified PPDT/electrical personnel must understand about AC/power, grounding, overcurrent protection, distro architecture, cable/connectors, test instruments, power quality, neutral loading, GFCI/GFPE, generators, and inspection—without turning conceptual training into permission to perform restricted electrical work.

## MDQ-024 — Lighting control/network stack

DMX512 physical layer, RDM, sACN, Art-Net, RDMnet, Ethernet/IP, switching, multicast, VLANs, fiber, wireless DMX/RDM, production-network security, troubleshooting, documentation, redundancy, commissioning.

## MDQ-025 — Console programming and show-file practice

Transferable console mental model; patch; parameters; groups/palettes/presets; tracking/cue-only; timing; effects/phasers; busking; macros; timecode; multi-user; show-file organization; backups; cloning/fixture exchange; disaster recovery; major console-family terminology comparisons without overstating market share.

## MDQ-026 — Lighting design/previsualization/documentation interfaces

Plots, schedules, one-lines, Lightwright/CAD, GDTF/MVR, visualization, photometric data, focus charts, revisions, version control, digital twins, commissioning and acceptance.

## MDQ-027 — Lighting specialist interfaces

Followspots/tracking, pixel/media integration, projection interface, haze/fog, laser/optical-radiation awareness, outdoor/weather-rated lighting, architectural controls, emergency/life-safety interfaces, rigging/work-at-height boundaries.

## MDQ-028 — Lighting leadership/business workflow

Crew planning, delegation, QC, labor estimates, rental/vendor workflow, substitutions, advancing, spares, budgeting, incident/reporting, sustainability, accessibility/inclusive visual design, change control.

---

# P1 — Audio department

## MDQ-030 — Audio role architecture and progression

Map stage audio hand, patch tech, A2, RF tech, monitor tech/engineer, FOH engineer, system tech/PA tech, comms tech, playback/record/broadcast interfaces, shop/bench roles, audio lead/head, system designer and context-specific titles.

## MDQ-031 — Audio signal-flow fundamentals to systems thinking

Analog/digital signal path; gain structure; balanced/unbalanced; mic/line/speaker level; impedance awareness; DI; patching; stage boxes; digital snakes; console buses; matrices; system processing; amplification; loudspeaker systems; recording/broadcast feeds; fault isolation.

## MDQ-032 — Microphones, sources, stage patch, and backline interface

Microphone families/patterns; placement principles; phantom power awareness; DI/reamp boundaries; instrument/source interfaces; stage patch documentation; split systems; artist/backline ownership boundaries.

## MDQ-033 — Audio consoles and mixing workflow

Transferable console architecture; channels/buses/DCAs/matrices; head amp/preamp ownership; EQ/dynamics; sends; scenes/snapshots; show files; monitor/FOH differences; digital-console ecosystem comparisons; virtual soundcheck; backup/restore.

## MDQ-034 — PA systems, acoustics, measurement, and optimization

Coverage, level, delay, phase/polarity, crossover, array concepts, prediction software, measurement microphones, transfer-function awareness, alignment workflow, environmental limits, system-tech authority boundaries.

## MDQ-035 — Audio networking and clocking

Dante/AES67 and relevant network families; clock domains; latency; redundancy; multicast/unicast; VLAN/QoS; switch configuration; fiber; control networks; troubleshooting; security and change control.

## MDQ-036 — RF coordination and wireless audio

Spectrum fundamentals; wireless microphones; IEMs; antenna/distribution systems; coordination/scanning; intermodulation; licensing/regulatory awareness; show-file/frequency documentation; failure recovery; specialist boundaries.

## MDQ-037 — Intercom/comms systems

Partyline/digital matrix/wireless comms; beltpacks; stations; channels; IFB/program feeds; cueing and production communication; RF/network interfaces; troubleshooting and ownership boundaries.

## MDQ-038 — Audio sector workflows

Touring/festival changeovers, theatre, corporate, worship, broadcast/streaming, installed venue, rental shop, small-show combined roles.

## MDQ-039 — Audio lead/system leadership

Advancing, input lists, patch sheets, stage plots, RF plans, network docs, labor planning, spares, QC, client/artist communication, show reports, vendor coordination, handoff and incident/change management.

---

# P1 — Video, LED, camera, and media systems

## MDQ-040 — Video role architecture

Separate LED/display technician, video engineer, switcher/TD/operator, playback/media server, camera/CCU/shading, projection, network/AV-over-IP, utility/cable, LED lead, engineer-in-charge or equivalent context-specific roles.

## MDQ-041 — LED display hardware and build systems

Panel architecture, cabinets/modules, receiving cards, processors, power/data topology, rigging/support interfaces, ground support, alignment, spares, calibration, outdoor/weather operation, build/strike workflow, model-specific boundaries.

## MDQ-042 — Video signal standards and signal flow

SDI/HDMI/DisplayPort/fiber transport awareness; resolutions/frame rates; color sampling/bit depth; EDID/HDCP awareness; conversion; routing; distribution; synchronization; genlock/reference; failure isolation.

## MDQ-043 — Processing, scaling, switching, and screen management

Switchers, scalers, presentation systems, LED processors, screen-management architecture, multiviewers, confidence/DSM feeds, backup paths, configuration and show-file management.

## MDQ-044 — Projection systems

Projector types; brightness/contrast; lensing/throw; surfaces; blending/warping; geometry; alignment; mapping; environmental limits; hanging/rigging interface; maintenance; projection versus lighting ownership.

## MDQ-045 — Cameras and live/broadcast interface

Camera systems, lenses, supports, CCU/shading concepts, tally, return video, intercom, genlock, camera cable/fiber, IMAG workflow, latency, broadcast/streaming handoffs, camera-conscious lighting and screen content interfaces.

## MDQ-046 — Media servers, playback, graphics, and show control

Codecs/resolution/frame-rate; playback redundancy; key/fill; NDI or other IP media awareness; Resolume/QLab/media-server families; graphics/CG; timecode/OSC/MIDI/GPIO control; cue ownership; failure recovery.

## MDQ-047 — AV-over-IP and video networking

Network transport, bandwidth, multicast, PTP where relevant, VLAN/QoS, redundancy, fiber, switch requirements, monitoring, security, and boundary between IT/network and show-video ownership.

## MDQ-048 — Video documentation, commissioning, and leadership

Signal-flow diagrams, screen maps, processor backups, EDID/config records, camera plot, test patterns, QC/acceptance, spares, advancing, client/content requirements, show reports, crew planning.

---

# P1 — Staging, carpentry, scenic, and temporary structures

## MDQ-050 — Role architecture and system families

Map general staging hand, carpenter, scenic carpenter, deck lead, staging technician, automation interface, shop/fabrication roles, scenic/technical direction interfaces, and qualified structural/engineering boundaries.

## MDQ-051 — Portable deck/platform/stair/rail systems

Manufacturer-system families, component recognition, inspection, layout, assembly under direction, leveling, stairs/rails, load and occupancy boundaries, acceptance/inspection, strike, storage, model-specific differences.

## MDQ-052 — Scenic construction and material literacy

Lumber/sheet goods, metal interfaces, fasteners, adhesives, textiles/soft goods, plastics/foams, finishes/coatings awareness, tools, shop safety, drawings, fabrication sequencing, fire-rating/material compliance boundaries.

## MDQ-053 — Stage/scenic drawings and layout

Plans/elevations/sections, dimensioning, centerline/datums, marks, templates, revision control, field verification, tolerance, change approval, integration with rigging/lighting/video/audio.

## MDQ-054 — Soft goods, drape, masking, pipe-and-drape

Handling, identification, fullness/orientation, track/pipes, flame-retardancy documentation awareness, storage, contamination/damage, public/egress boundaries.

## MDQ-055 — Temporary structure and structural-interface awareness

Decks, roofs, towers, truss/support interfaces, ballast/anchorage awareness, wind/weather, load signage, competent/qualified-person boundaries, engineer/manufacturer/AHJ authority.

## MDQ-056 — Automation/machinery interface

Stage lifts, wagons, turntables, winches, moving scenic, control/e-stop awareness, exclusion zones, lockout/tagout awareness, commissioning/handoff and specialist boundaries.

## MDQ-057 — Staging/scenic lead and design-coordination practice

Labor planning, material takeoffs, work packages, QC/inspection, punch lists, change control, drawing revisions, vendor/manufacturer interface, incident reporting, closeout.

---

# P1 — Rigging

Rigging research must preserve a bright line between awareness/support and work requiring qualified/competent riggers or other controlled authorization.

## MDQ-060 — Rigging role architecture and qualification landscape

Ground rigger, up rigger, arena/theatre rigger, motor tech, head rigger, house rigger, tour rigger, ETCP roles, employer/union qualification pathways, local variation, rescue/fall-protection responsibilities.

## MDQ-061 — Ground-rigging awareness for non-riggers

Truss/motor/steel/hardware recognition; tag lines and ground handling where authorized; exclusion zones; communication; inspection awareness; what stagehands must never improvise.

## MDQ-062 — Rigging hardware and system knowledge map

Shackles, slings, wire rope, spansets/synthetics, chain motors/hoists, beam clamps and venue-specific hardware, truss, bridles, points, load cells; WLL/design-factor/inspection concepts; manufacturer and standard boundaries.

## MDQ-063 — Load calculation and force concepts

Static/dynamic load awareness, vectors, bridle geometry, point loads, distributed loads, truss loading, motor groups, load paths, center of gravity, calculation/documentation responsibility; no self-study claim of qualification.

## MDQ-064 — Arena/theatre/touring rigging workflows

Advance/plot review, point layout, mark floor, steel/motor prep, up/down calls, show changes, strike, house/tour authority split, venue rules.

## MDQ-065 — Work at height, fall protection, rescue interface

Authorized climbing/MEWP work, fall arrest/restraint, tool tethering, rescue planning, dropped-object controls, weather, communication, regulatory/employer boundaries.

## MDQ-066 — Rigging inspection, documentation, and leadership

Equipment inspection records, rejected gear, motor logs, plot revisions, load records, signoff/acceptance, crew briefing, stop-work decisions, incident reporting.

---

# P1 — Electrics and production power

## MDQ-070 — Entertainment electrical role architecture

Stagehand awareness, lighting/electrics technician, entertainment electrician, PPDT, generator tech, venue electrician, licensed electrician/AHJ interface, shop roles, head electrician, systems designer/planner.

## MDQ-071 — Electrical fundamentals by learner authority

Voltage/current/resistance/power; AC; single/three phase; grounding/bonding; overcurrent protection; neutral; power factor/harmonics; load diversity; voltage drop; inrush; leakage; test-before-use concepts mapped explicitly to role boundaries.

## MDQ-072 — Temporary distribution system architecture

Company switches, feeder, distros, transformers, branch distribution, multicable, stage pin/PowerCON/Socapex/IEC/NEMA families, generators/shore power, GFCI/GFPE, cable management and inspection; planning/awareness versus qualified connection/energization.

## MDQ-073 — Electrical test instruments and safe verification boundaries

Multimeters, clamp meters, receptacle testers, non-contact detectors and limitations, continuity/insulation tools where relevant, meter category ratings, proving instruments, who is authorized to test what.

## MDQ-074 — Generator and mobile-power interface

Generator types, grounding/bonding configuration awareness, fuel/exhaust/noise, power quality, load steps, cable routing, weather, monitoring, shutdown/escalation, qualified operator boundaries.

## MDQ-075 — Codes, standards, listings, jurisdiction, and AHJ matrix

OSHA, NFPA/NEC, state/local adoption, AHJ, NRTL/listing, employer policy, manufacturer instructions, ETCP, licensing. The course must teach how authority layers interact, not pretend one national rule resolves every production.

## MDQ-076 — Power-quality and modern electronic loads

LED/video/audio nonlinear loads, harmonics, neutral current, power factor, inrush, leakage, nuisance trips, UPS, isolation, surge protection, generator interaction, monitoring and escalation.

## MDQ-077 — Electrical planning, documentation, and leadership

One-lines, load schedules, phase planning, distro/cable schedules, labels, inspection/checklists, changes, incident reporting, vendor/venue coordination, qualified signoff boundaries.

---

# P2 — Backline, props, and wardrobe split decision

The current combined pathway is useful at support level but should not be assumed to remain combined at advanced levels.

## MDQ-080 — Backline specialty map

Instrument/amplifier/drum/keyboard/support-system families; artist/tech ownership; stage plots/input-list interface; tuning/setup/maintenance boundaries; spares; changeovers; touring/festival workflow; backline technician career path.

## MDQ-081 — Props specialty map

Props handling, tracking, presets, handoff, rehearsal/show workflow, weapons/special props boundary, food/liquid/breakaway/consumable awareness, maintenance/repair/design authority, continuity, storage, theatre/film/live-event context.

## MDQ-082 — Wardrobe/costume specialty map

Wardrobe crew/dresser roles, presets, quick changes, laundry/care, repairs, costume documentation, performer privacy, microphones/bodypack interface, hair/makeup boundary, touring/theatre differences, department leadership.

## MDQ-083 — Combined-versus-split architecture decision

Use MDQ-080–082 evidence to decide whether Course 2 can stay combined while Course 3 and lead paths split, or whether the split should happen earlier.

---

# P2 — Production communication, coordination, and management

## MDQ-090 — Stage management role architecture

Theatre, concert, corporate/event, festival and broadcast-adjacent variations; calling/cueing; rehearsal/process ownership; paperwork; communication; safety/escalation; production-manager/director interfaces.

## MDQ-091 — Production management role architecture

Advance, budgeting, vendors, labor, schedule, travel/logistics, technical requirements, site/venue coordination, permits/insurance awareness, show-day command interfaces, closeout.

## MDQ-092 — Venue/event operations role architecture

Venue production, event manager, house manager, operations, security/crowd interface, facilities, loading dock, fire/life-safety, guest services, client/event organizer interfaces.

## MDQ-093 — Crew chief/labor leadership deepening

Call organization, check-in, assignments, rotation, breaks, timekeeping, performance/correction, incident escalation, department handoff, load-in/load-out sequencing, employer/union rules, documentation.

## MDQ-094 — Production paperwork and information flow

Call sheets, schedules, run of show, cue sheets, stage plots, input lists, patch sheets, trucking/parking, contact sheets, labor calls, manifests, RF/power/network plans, revision control and document ownership.

## MDQ-095 — Client/artist/vendor communication

Scope confirmation, change requests, substitutions, escalation, service recovery, boundaries between technical facts and contractual authority, documentation and handoff.

## MDQ-096 — Incident, near-miss, and post-show learning loop

Reporting systems, immediate safety response boundaries, documentation, root-cause/postmortem concepts, corrective actions, knowledge transfer and non-retaliatory reporting principles.

---

# P2 — Show control, automation, special systems, and interfaces

## MDQ-100 — Cross-department show-control architecture

Timecode, OSC, MIDI, GPIO/contact closures, network triggers, QLab/media-server/control-system interfaces, trigger ownership, interlocks, fallback/manual takeover, deterministic versus network-dependent control, change/rehearsal procedure.

## MDQ-101 — Stage automation awareness and specialist path

Control systems, drives/motors, sensors/limits, e-stops, machinery zones, cueing, commissioning, maintenance, operator versus technician versus engineer authority, rescue/recovery boundaries.

## MDQ-102 — Atmospheric effects and fire/life-safety coordination

Haze/fog technologies, fluids, exposure/ventilation, detectors/alarms, fire-watch or authority interfaces where applicable, residue, visibility, outdoor behavior, cueing, documentation.

## MDQ-103 — Lasers and optical-radiation awareness

Laser classes, regulatory/variance context, operator qualification boundaries, audience/scanning concepts at awareness level, UV/IR/high-intensity source hazards, explicit stop-and-escalate rules.

## MDQ-104 — Pyrotechnics, flame, cryo, and special-effects awareness

High-level role/authority/hazard map only unless later evidence supports a safe bounded course. Identify licensing/permit/AHJ/manufacturer/operator boundaries and what general crew must recognize and avoid.

---

# P2 — Sector and context transfer

## MDQ-110 — Touring and festival production workflow

Advance, vendor packages, local labor, stage plots/input lists, festival patching, guest packages, changeovers, curfews, trucking, crew roles, hospitality/artist interfaces, strike and overnight transition.

## MDQ-111 — Venue/house production workflow

House rules, permanent systems, local labor, incoming tour interface, maintenance state, patching/house power/rigging authority, venue documentation, event turnover.

## MDQ-112 — Corporate and convention AV workflow

Ballrooms, general sessions/breakouts, hotel/venue AV, scenic/branding, projection/LED, cameras/streaming, client-facing operation, distributed rooms, fast turnovers, power/network sharing and union/venue rules.

## MDQ-113 — Theatre/performing-arts workflow

Rehearsal/performance cycle, departments, cueing, repertory, house roles, fly/rigging interfaces, wardrobe/props/scenic distinctions, paperwork and show maintenance.

## MDQ-114 — Worship production workflow

Volunteer/professional hybrid teams, permanent install, broadcast/streaming, lighting/audio/video integration, training structures, service repetition, transferability to commercial work.

## MDQ-115 — Film/TV/broadcast production interface

Grip/electric distinctions, camera, video village/engineering, lighting/camera interaction, audio recording, communications, power, union-role differences, what transfers and what does not from live-event stagehand practice.

## MDQ-116 — Outdoor/festival/weather operations

Weather monitoring authority, lightning/wind/heat/cold, temporary structures, wet power, ground conditions, public/vehicle routes, evacuation/hold interfaces, documentation and stop-work boundaries.

---

# P2 — Career, employment, qualification, and professional development

## MDQ-120 — Entry routes and hiring ecosystem

Labor providers, production companies, venues, unions, rental shops, touring vendors, corporate AV providers, theatres, festivals; call lists/dispatch; resumes; references; onboarding; probation; availability; travel; employment versus contractor distinctions at a general educational level.

## MDQ-121 — Union and collective-bargaining awareness

IATSE/local structures, hiring halls/dispatch concepts, apprenticeship/training variation, jurisdiction, seniority/referral variation, contracts/CBA awareness, avoid nationalizing local rules.

## MDQ-122 — Credential and training landscape

OSHA 10/30; ETCP; manufacturer certificates; MEWP/forklift/fall protection/electrical/rigging/employer qualifications; AVIXA or other industry credentials where relevant; distinguish education, certification, qualification, licensing and employer authorization.

## MDQ-123 — Career ladders and role-combination reality

Validate progression across small shows where roles combine and large productions where they specialize. Map skills that transfer between venue, rental-shop, touring, festival, corporate and theatre work.

## MDQ-124 — Professional practice and sustainability

Fatigue, travel, scheduling, handoff, continuing education, documentation habits, tool/equipment care, sustainable material/energy practices, repairability and waste handling within job authority.

---

# P3 — Learning system and evidence architecture

## MDQ-130 — Course architecture standard

Define the common instructional shell each course should follow while allowing department-specific variation. Stagehand Fundamentals is the visual/interaction reference pattern unless an explicit exception is approved.

**Minimum elements:** current lesson context, objective, explanation, visual/demo where useful, field boundary, common failure/stop conditions, scenario/knowledge check, practice or evidence gate, source lineage, previous/next navigation.

## MDQ-131 — Assessment taxonomy

Separate recognition questions, decision/scenario questions, sequence checks, troubleshooting reasoning, documentation/portfolio review, observed physical practice, supervisor simulation, and external qualification.

## MDQ-132 — Practical observation design

Define when a skill needs observed practice, what exact equipment/context must be recorded, who is qualified to observe, what counts as pass/rework/stop, and how the observation is kept separate from employer authorization.

## MDQ-133 — Course visual standard

Define when to use photos, diagrams, labeled components, sequence panels, video, animation, signal-flow diagrams, one-lines, plots, screenshots, or no visual. Every safety-critical depiction must record source/rights/model/reviewer/fallback.

## MDQ-134 — Source/citation UX standard

Decide what the learner sees inline versus in source panels/bibliography while preserving the full matrix behind the course. Define treatment of OSHA/code/standard/manufacturer/practitioner/Crew Blueprint framing.

## MDQ-135 — Maintenance and freshness policy

Review intervals and change triggers for regulations, standards, manufacturer procedures, software/protocol versions, role descriptions, external links, visuals/licenses, and practitioner-validated procedures.

---

# P4 — Existing release-validation queue

Do not duplicate the work already defined in `EXPANDED_CURRICULUM_RESEARCH_QUEUE_2026-08-30.md`.

The ECQ queue remains authoritative for:

- ECQ-01 practitioner acceptance of current physical Field Skills;
- ECQ-02 original reviewed visuals/video;
- ECQ-03 observation reliability;
- ECQ-04 lead-role review;
- ECQ-05 predictive-hazard validation;
- ECQ-06 event-operations simulation;
- ECQ-07 through ECQ-11 Course 3 portfolio/jurisdiction evidence;
- ECQ-12 production-power awareness field audit;
- ECQ-13 production/coordination source expansion;
- ECQ-14 Backline/Props/Wardrobe Course 3 decision;
- ECQ-15 learner/assessment retention validation;
- ECQ-16 learning/authority record model;
- ECQ-17 source/model/rights freshness registry.

Where this master queue creates a deeper research package that resolves part of an ECQ item, update the ECQ item rather than creating a duplicate gate.

---

# 6. Recommended execution waves

| Wave | Research | Result |
|---|---|---|
| 0 | MDQ-000 through MDQ-003 | Canonical domain inventory, tier map, and matrix schema before more content sprawl |
| 1 | MDQ-010 through 014; MDQ-020 through 028; MDQ-030 through 039; MDQ-040 through 048 | Complete the major worker/department cores and field-skill backlog |
| 2 | MDQ-050 through 077 | Complete staging/scenic, rigging and electrics depth with explicit safety/authority boundaries |
| 3 | MDQ-080 through 104 | Split specialist pathways and fill production-management/show-control/special-system gaps |
| 4 | MDQ-110 through 124 | Add context transfer, career, union, credential and professional-practice material |
| 5 | MDQ-130 through 135 plus ECQ queue | Standardize learning, visuals, source UX, practitioner review, learner testing and freshness |
| 6 | Initial course build sweep | Draft missing courses/resources from completed packages; do not wait for final publication evidence to create clearly labeled review drafts |
| 7 | Site-wide matrix backfill | Link every claim/question/visual to evidence and mark unsupported or framing-only content |
| 8 | Enhancement sweep | Improve diagrams, examples, scenarios, practice gates, depth, and cross-course consistency from matrix findings and owner review |
| 9 | Final publication audit | On later owner direction, clone the complete repo state to an `audit` branch, review there through GitHub Pages, resolve findings, then deliberately integrate accepted publication state |

# 7. Course-building rule

Research does not need to wait for every final release gate before an initial course can be drafted. The build rule is:

- **Draft when evidence is sufficient to teach the bounded concept accurately.**
- Clearly label unresolved model, jurisdiction, practitioner, or field-observation dependencies.
- Do not describe a learner as qualified, certified, authorized, jobsite-ready, or practitioner-approved unless the corresponding external evidence exists.
- Use the shared Stagehand Fundamentals interaction/layout pattern for course dashboards unless the owner explicitly approves a different shell.
- Preserve source lineage from the first draft so the later matrix is a reconciliation/backfill exercise, not a forensic reconstruction.

# 8. Matrix-first content IDs

Before the next large build wave, assign durable IDs to new content so citations can survive rewrites:

- `COURSE-<domain>-<tier>`
- `MOD-<course>-<nn>`
- `LESSON-<course>-<nn>`
- `CLAIM-<course>-<nnnn>`
- `Q-<course>-<nnn>`
- `VIS-<course>-<nnn>`
- `SRC-<owner>-<short-title>-<year/version>`

Exact formatting may change during MDQ-001, but stable identifiers are required before the matrix is considered durable.

# 9. Immediate next research set

After MDQ-000 through MDQ-003, the recommended first new source packets are:

1. **Stagehand Field Skills Universe** — turns the current six physical skills into a ranked complete backlog.
2. **Lighting Role Architecture + Shop-to-Show Lifecycle** — closes the most consequential remaining gap in the already deep lighting corpus without rerunning Package 21.
3. **Audio Role Architecture + Signal-Flow/Console/PA/Network/RF map** — brings audio depth up toward the lighting standard.
4. **Video Role Architecture + LED/Signal/Processing/Camera/Media map** — separates LED wall work from the wider video department.
5. **Staging/Scenic Role Architecture + Portable Systems + Drawings/Materials map.**
6. **Rigging Role/Qualification + Ground Awareness map.**
7. **Electrics Role/Jurisdiction + Temporary Power Architecture map.**
8. **Backline / Props / Wardrobe split research.**
9. **Stage Management / Production Management / Venue Operations split research.**
10. **Show Control / Intercom / RF / Automation interface map** to eliminate cross-department blind spots.

These packages create enough evidence to draft the next major course wave while MDQ-001/002 supplies the citation architecture needed for the comprehensive site-wide source matrix.
