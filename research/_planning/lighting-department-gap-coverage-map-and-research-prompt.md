# Lighting Department — Gap Coverage Map and Gap-Closing Research Prompt

**Status:** Research planning artifact — not a completed evidence package  
**Date:** 2026-08-19  
**Purpose:** Compare two broad AV/lighting source-map outputs, identify remaining competency and evidence gaps, and define a single deep-research prompt that closes those gaps before The Crew Blueprint treats the lighting department as comprehensively mapped.

## Inputs reviewed

This audit compares two source-map outputs supplied in the working chat:

1. A broad AV career-training source map centered on USITT, ESTA/ETCP, PLASA, IATSE, ETC, MA/ACT, ChamSys, Avolites, networking, design, electrical progression, and practical career sequencing.
2. A broader lighting-body-of-knowledge source universe adding IES, CIE, NFPA, OSHA, ESTA protocol standards, major fixture manufacturers, wireless DMX, GDTF/MVR, visualization, media/pixel systems, followspots/tracking, architectural controls, rigging interfaces, power-distribution manufacturers, and professional conferences.

These are source-discovery outputs, not completed research packages. A source being named does not mean the underlying competency has been researched, validated, scoped, or placed correctly in a career progression.

## Coverage rating

- **Strong** — both outputs identify authoritative source families and a meaningful skill scope.
- **Moderate** — source families are identified, but the competency is not decomposed enough for curriculum architecture.
- **Thin** — mentioned only briefly or through a narrow source set.
- **Gap** — materially absent or insufficiently defined.

## Gap coverage map

| Domain | Current coverage | What is already present | Remaining gap to research |
|---|---|---|---|
| Career-role architecture | Moderate | Hand, technician, electrician, console operator, programmer, systems tech, head electrician, designer | Validate real role titles, responsibility boundaries, progression patterns, context differences, prerequisites, and where titles are employer/local-specific rather than national |
| Department workflow | Moderate | Load-in, hang, focus, show, strike are acknowledged | Full end-to-end workflow: advancing, rental/shop prep, pull lists, prep/bench test, truck pack, load-in sequence, system checkout, rehearsal, show operation, notes, maintenance, strike, return/check-in |
| Entry-level lighting-hand scope | Strong | Existing Crew Blueprint Package 07 plus source maps | Confirm interface with technician/electrician work and identify repeatable tasks vs stop-and-ask boundaries across theatre, concert, corporate, festival, film/TV, worship and venue work |
| Human vision and perception | Thin | IES/CIE identified; color/visibility mentioned | Dark adaptation, contrast sensitivity, glare, adaptation, visual acuity, flicker perception, spatial perception, visual fatigue, audience/performance visibility, accessibility implications |
| Physics of light | Moderate | Wavelength, reflection, absorption, transmission mentioned | Radiation vs visible light, spectral power distribution, coherence/non-coherence where relevant, polarization where relevant, inverse-square limits/assumptions, beam propagation concepts |
| Optics | Moderate | Lenses, reflectors, beam/field angle, shutters, gobos | Lens systems, aberrations, zoom optics, projection optics, focus mechanics, beam shaping, optical efficiency, etendue where professionally relevant, automated-fixture optical trains |
| Photometry | Moderate | Lumens, lux, footcandles, candela, photometric charts | Measurement practice, illuminance vs luminance, cosine response, meters, photometric files/data, beam-field definitions, measurement uncertainty, camera vs eye measurement distinctions |
| Color science | Moderate-Strong | CIE/IES, CCT, Duv, CRI, TLCI, TM-30, SSI, metamerism | Chromaticity diagrams, dominant wavelength, MacAdam ellipses/SDCM, spectral tradeoffs in LED engines, white-point/tint control, camera color interaction, calibration and matching between fixture families |
| Conventional sources and lamp technology | Moderate | Conventional fixtures and tungsten are present | Lamp families, discharge/arc sources, ballasts/ignitors, dimming behavior, thermal behavior, failure modes, replacement/handling boundaries, legacy systems still encountered in venues |
| LED source technology | Moderate | LED fixtures/color mixing broadly covered | LED junction/thermal management, drivers, PWM, dimming curves, flicker, binning, emitter aging, calibration, multi-emitter engines, spectral tradeoffs, power-factor/harmonic implications |
| Fixture taxonomy | Strong | Profile, Fresnel, PAR, cyc, strip, wash, beam, spot, hybrid, strobe, batten, pixel, followspot | Validate taxonomy across theatre/concert/film/broadcast/architectural contexts and distinguish marketing labels from functional categories |
| Automated fixture mechanics | Moderate | Attributes, homing, calibration, firmware and error codes mentioned | Motors, encoders/sensors, belts/gears, framing systems, cooling, pan/tilt calibration, service intervals, mechanical failure recognition, operator vs authorized-service boundaries |
| Fixture maintenance and service | Thin | Manufacturer service docs mentioned | Inspection intervals, cleaning, optics care, fan/filter maintenance, firmware management, connector inspection, safe module replacement boundaries, ESD/electronics awareness, warranty/service-center boundaries, documentation of faults |
| Electrical fundamentals | Strong | Ohm's law, AC, power, single/three-phase concepts, grounding and overcurrent protection | Expand from conceptual understanding into competency levels and identify what a hand, technician, electrician and PPDT must each understand without implying authorization |
| Entertainment temporary power | Strong at source level | ETCP PPDT, NFPA/NEC, Lex, Motion Labs, ETC | Detailed competency map: feeder, distro architecture, company switches, transformers, neutral loading, phase balancing, voltage drop, bonding, GFCI/GFPE, generators, shore power, inspection, test-before-use and qualified-person boundaries |
| Power quality | Gap/Thin | Power factor/harmonics only lightly implied | Harmonics, nonlinear LED loads, neutral current, voltage sag, inrush, leakage current, nuisance tripping, UPS, isolation, surge protection, generator quality, measurement and escalation |
| Electrical test instruments | Gap | Not meaningfully mapped | Multimeters, clamp meters, receptacle testers, insulation/continuity tools where appropriate, non-contact testers and their limitations, phase/voltage verification, DMX testers vs electrical meters, category ratings and safe-use boundaries |
| Connectors and cable systems | Thin | Feeder, Neutrik/Hubbell/Ericson and DMX cabling identified | Edison/NEMA, stage pin, PowerCON/TRUE1, Socapex/multipin, Cam-Lok/feeder, IEC, etherCON/RJ45, fiber, cable ratings, conductor identification, strain relief, inspection, adapters, forbidden/unsafe combinations and regional differences |
| Dimming and power control | Moderate | Dimmers, relays, ETC Sensor/ThruPower | SCR/triac dimming, sine-wave/forward/reverse phase concepts, relay and switched power, constant power for intelligent fixtures, dimmer curves, minimum loads, LED compatibility, architectural vs entertainment control |
| DMX512 physical/data layer | Strong at source level | ESTA E1.11, termination, topology, splitters | Deep fault model: reflections, cable impedance, pinouts, opto-isolation, splitters, repeaters, mergers, grounding/common-mode issues, address/personality mistakes, testing methodology |
| RDM | Moderate | ESTA E1.20 and wireless RDM mentioned | Discovery, addressing/configuration, device management, proxies/splitters, limitations, troubleshooting and security/operational implications |
| sACN/ACN | Moderate-Strong | ESTA E1.31, networking and gateways | Priority, preview data, multicast/unicast behavior, universe discovery, source loss, merging, synchronization, redundancy, real troubleshooting scenarios |
| Art-Net | Moderate | Artistic Licence primary source identified | Current Art-Net behavior, addressing/universes, unicast/broadcast/multicast considerations, coexistence with sACN, interoperability and troubleshooting |
| RDMnet | Thin | ESTA E1.33 named | Architecture, brokers/controllers/devices, discovery, scope, use cases, relationship to RDM/DMX/IP networks, deployment maturity |
| Ethernet/IP fundamentals | Moderate-Strong | IP, subnet, DHCP/static, VLAN, multicast, IGMP, QoS | MAC/ARP, switching tables, spanning tree, link aggregation, redundancy, PoE where relevant, fiber, packet capture/basic diagnostics, managed-switch configuration, failure isolation |
| Lighting network engineering | Moderate | Luminex, Pathway, NETGEAR AV, Cisco listed | Network topology design, documentation, address plans, multicast containment, VLAN policy, redundancy, convergence, control/data segregation, show-critical change control and commissioning |
| Network security | Gap | Essentially absent | Threat model for production networks, unauthorized wireless access, default credentials, firmware provenance, segmentation, remote access, device hardening, operational security without turning lighting techs into cybersecurity engineers |
| Fiber-optic transport | Gap/Thin | Fiber mentioned through network vendors | Fiber types, connectors, transceivers, cleaning/inspection, bend radius, optical budgets at awareness level, tactical fiber, copper/fiber conversion, failure diagnosis and specialist boundaries |
| Wireless DMX/RDM | Moderate | City Theatrical, LumenRadio, W-DMX | RF fundamentals, spectrum use, antenna placement, coexistence/interference, latency/reliability, link planning, redundancy, encryption/security where supported, troubleshooting |
| Console-independent control concepts | Strong | Patch, groups, presets/palettes, cues, tracking, effects, macros, busking | Define transferable mental model independent of Eos/MA/ChamSys/Avolites/ONYX/Hog, including programmer state, tracking vs cue-only, playback priority, parameters, timing and data structure |
| Console-family proficiency | Strong at source level | Major ecosystems named | Build comparative matrix of concepts/terminology, entry-to-advanced pathways, offline practice options, certificates and which contexts each platform dominates without overstating market share |
| Advanced programming | Moderate | Phasers/effects, timecode, macros, multi-user, Lua mentioned | Recipes/templates, cloning, fixture exchange, tracking management, busking architecture, large-show organization, presets/palettes strategy, multi-programmer workflows, scripting/plugins, disaster recovery |
| Show-file management | Thin | Backups/show packages mentioned | Versioning, naming, backups, restore tests, console/software compatibility, fixture-library changes, show-file handoff, documentation, redundant consoles, USB/network storage practices |
| Timecode and synchronization | Moderate | SMPTE/LTC, MTC, MIDI, OSC | LTC/MTC differences, frame rates, drop/non-drop concepts, clocking, latency, trigger safety, rehearsal/change workflow, fallback/manual takeover |
| Show control | Moderate | QLab, MIDI, OSC, GPIO/contact closures | System architecture, interdepartment ownership, trigger loops/failure modes, automation boundaries, emergency-stop interfaces where relevant, deterministic vs network-triggered control |
| GDTF/MVR and digital-twin workflows | Moderate | GDTF, MVR, visualization identified | Authoring/validation, geometry, modes/channels, physical descriptions, fixture exchange, data-quality problems, version compatibility, workflow between CAD/visualizer/console |
| Drafting and paperwork | Strong | Vectorworks, Lightwright, plots, schedules and diagrams | Standards/conventions for symbols, title blocks, legends, revision control, circuit/channel conventions, cable schedules, power/network one-lines, focus charts, paperwork ownership and change control |
| Visualization/preprogramming | Strong at source level | Capture, Vision, Depence, WYSIWYG, Augment3d, MA3D | Accuracy limitations, fixture-data quality, photometric realism, network/console hookup, model cleanup, previsualization vs verification, rehearsal workflows |
| Pixel and LED control | Moderate | MADRIX, Resolume, ENTTEC, Advatek, P3 | Pixel electrical fundamentals, data protocols, addressing density, power injection at awareness level, mapping, color order, refresh rates, latency, scaling, distributed processing, fault isolation |
| Media-server integration | Moderate | Avolites Ai, Resolume, TouchDesigner, Unreal | Media pipeline, codecs/resolution/frame rate at interface level, NDI/SDI/AV-over-IP boundaries, genlock/sync awareness, control protocols, ownership split between lighting/video/media departments |
| Projection interface | Gap/Thin | Projection mapping is mentioned | Projector basics at lighting-interface level, lensing/throw, brightness/contrast, surfaces, blending/warping, media-server ownership, color matching and when projection belongs to video rather than lighting |
| Followspot craft | Moderate | Traditional and remote followspots listed | Operator communication, pickup/lead, beam size, color, iris/douser use, cueing, ergonomics, position safety, followspot calling, show paperwork and role progression |
| Performer tracking | Moderate | zactrack, BlackTrax, Follow-Me, RoboSpot | Coordinate systems, calibration, tracking tags/sensors, fixture calibration, networking, latency, occlusion, redundancy, operator oversight, safety and failure recovery |
| Atmospheric effects | Gap/Thin | Fog/haze only briefly named | Haze/fog technologies, fluid types, exposure guidance, ventilation, alarms/fire-safety coordination, residue, optics interaction, outdoor behavior, cueing, regulatory/employer boundaries |
| Lasers and optical-radiation hazards | Gap | Essentially absent | Laser class awareness, regulatory authority, variance/licensing context, trained operator boundaries, scanning/audience exposure concepts, UV/IR/high-intensity source hazards, explicit stop-and-escalate rules |
| Outdoor/weather-rated lighting | Thin | Weather and IP ratings not developed | IP ratings, wet-location considerations, temporary outdoor power, rain covers vs manufacturer restrictions, condensation, wind exposure, temperature limits, lightning/severe-weather shutdown interfaces |
| Film/TV/broadcast lighting | Thin | ARRI/Aputure and camera interaction mentioned | Grip/electric distinctions, fixtures/modifiers, exposure/metering, CCT/tint/green-magenta, flicker/frame-rate interaction, DMX/network control on set, wireless control, generator/distribution, union-role differences |
| Corporate AV lighting | Thin | Corporate named as context | General-session/breakout lighting, scenic/uplight, camera-conscious keynote lighting, fast-turn hotel/ballroom workflows, power/network sharing, client-facing operation and corporate show-call structure |
| Theatre/performing arts | Strong | USITT, Eos, cue stacks and paperwork | Preserve distinctions from concert workflows; verify house electrician, board op, programmer, ME, ALD and designer responsibilities across institutions |
| Concert/touring/festival | Strong at source level | MA, busking, touring vendors, festivals | Advancing, cloning/festival files, floor packages, guest LD workflow, changeovers, timecode, redundancy, festival patching/network policies, touring crew roles |
| Worship lighting | Gap/Thin | Houses of worship only mentioned as work source | Volunteer/pro hybrid environments, permanent install plus live operation, broadcast integration, training structures and transferability to commercial live events |
| Architectural/install lighting | Moderate | DALI, Pharos, Lutron, Crestron, ETC architectural | Commissioning, addressing/zoning, scenes, time schedules, sensors, gateways, emergency interfaces, documentation, maintenance and where licensed electrical work begins |
| Emergency/life-safety interfaces | Gap | Not developed | Emergency lighting interaction, egress illumination, fire alarm interfaces, panic/house-light controls, code/authority-having-jurisdiction boundaries; avoid implying entertainment crew authority over life-safety systems |
| Rigging interface | Moderate | ETCP/ESTA/CM/Clancy listed | Lighting-specific attachment methods, clamps/hardware, fixture weights, center of gravity, safety devices, truss positions, cable loads, moving-light orientation, what belongs to qualified riggers |
| Work at height / MEWPs | Moderate | OSHA/A92/fall protection listed | Lighting-specific focus workflows from lifts, basket/tool control, overhead exclusion zones, authorization/training boundaries, communication, rescue/emergency awareness |
| Warehouse/rental-shop skills | Gap/Thin | Shop prep acknowledged but not mapped | Receiving, inventory, inspection, cable testing, fixture prep, address/mode standardization, firmware, labeling, case packing, repair triage, spare kits, pull/return workflow and QC |
| Transport and case handling | Gap/Thin | Truck pack mentioned | Case types, orientation, shock/thermal considerations, truck-pack logic, weight/center of gravity, rain exposure, labeling, damage reporting and chain of custody |
| Troubleshooting methodology | Moderate | Signal tracing and faults mentioned | Formal diagnostic model: symptom capture, isolate power/data/config/mechanical/network layers, known-good substitution, one-change-at-a-time testing, documentation, escalation and postmortem |
| Reliability and redundancy | Gap/Thin | Backup consoles/network redundancy mentioned | Single points of failure, spare strategy, A/B power/control, redundant consoles, network failover, UPS, spare fixtures/nodes, disaster recovery and acceptable-degradation planning |
| Commissioning and system acceptance | Gap | Not mapped | Pre-power inspection, addressing, patch verification, fixture checkout, network validation, focus/position validation, documentation, acceptance tests, punch lists and handoff |
| Production communication | Moderate | Cueing, notes and crew communication are present | Department radios/comms, calls, chain of command, escalation, show-critical language, focus communication, programming sessions, notes, shift handoff, interdepartment coordination |
| Leadership and supervision | Moderate | Head electrician/systems lead roles named | Crew planning, delegation, quality control, briefing, mentoring, conflict resolution, technical sign-off boundaries, schedule pressure, labor calls, change management and incident reporting |
| Estimating/budgeting/resource planning | Gap | Not meaningfully covered | Labor estimation, fixture/cable/distro quantities, rental-vs-owned decisions, contingency/spares, trucking/weight awareness, schedule impacts, budget tradeoffs, procurement and substitutions |
| Rental/vendor/advancing workflow | Gap | Manufacturers and rental context present | Quotes, subrentals, prep standards, substitutions, tech support, RMA/service, tour/festival advance documents, venue specs, input lists/plots, power/network requirements and change control |
| Sustainability | Gap | Essentially absent | Energy use, LED lifecycle, consumables, batteries, hazardous/e-waste, repairability, transport impacts, reusable documentation/workflows and practical sustainability without sacrificing safety/reliability |
| Accessibility and inclusive visual design | Gap/Thin | Visibility broadly present | Photosensitive/flicker concerns, sensory accessibility, low-vision considerations where relevant, color-only signaling limitations in work interfaces, inclusive audience experience, applicable guidance |
| Professional ethics and boundaries | Moderate | Qualification/authorization distinctions repeatedly noted | Designer intent vs safe operation, bypassing safety features, undocumented modifications, privacy around cameras/tracking, counterfeit/unsafe equipment, pressure to work outside qualification |
| Credential and education landscape | Strong | ETCP, USITT, PLASA, AVIXA, IATSE, manufacturer training | Build a normalized matrix of credential purpose, prerequisites, assessment method, validity/renewal, geography and whether it demonstrates knowledge, hands-on competence, authorization or merely course completion |
| Career portability across sectors | Moderate | Theatre/concert/corporate/broadcast/install contexts named | Explicitly map transferable vs non-transferable competencies between theatre, concert, festival, corporate, worship, film/TV/broadcast, architectural/install and rental-shop lanes |

## Principal conclusions from the gap audit

1. The current source universe is broad enough to begin a comprehensive body-of-knowledge study, but it is not yet evidence that every lighting competency has been researched.
2. The strongest existing areas are standards/certification sources, console ecosystems, fixture manufacturers, core control protocols, general power, drafting/visualization and broad career progression.
3. The largest remaining blind spots are power quality/test instrumentation, connector/cable systems, deep maintenance/service, network security and fiber, reliability/redundancy, commissioning, shop/rental workflows, film/broadcast and corporate context, atmospheric effects/laser boundaries, emergency/life-safety interfaces, estimating/advancing, sustainability, accessibility and formal troubleshooting methodology.
4. Several areas need stronger *depth stratification*: the same subject must be taught differently to a hand, technician, electrician, programmer, systems technician, lead and designer.
5. Safety-critical topics must distinguish awareness/recognition from authorization or qualification. Educational completion must never be represented as employer authorization, licensure, ETCP certification or permission to perform regulated/specialist work.
6. Manufacturer knowledge must remain product-specific where appropriate; no single console, fixture, distro, network device or workflow should be generalized into an industry-wide rule without broader evidence.

---

# Gap-Closing Deep Research Prompt

## Research objective

Perform a comprehensive **Lighting Department Body of Knowledge — Gap Coverage Research** for The Crew Blueprint. This is not a course-writing task. It is an evidence-building task designed to close the remaining gaps after two broad source-mapping passes and establish a defensible knowledge map spanning the lighting career from first-call beginner through advanced technician, entertainment electrician, console operator/programmer, systems specialist, head electrician/crew lead and lighting designer.

The research must answer two questions simultaneously:

1. **What does a professional lighting worker need to know, recognize, do, troubleshoot, document or supervise at each career depth?**
2. **Which claims can be supported by primary/authoritative evidence, and which remain manufacturer-specific, employer/local practice, contextual convention or Crew Blueprint instructional design?**

## Source hierarchy

Prioritize sources in this order:

1. **Primary standards, codes, regulators and certification bodies:** ESTA Technical Standards Program, ETCP, OSHA, NFPA/NEC, ANSI/SAIA where applicable, ANSI/ASSP where applicable, IES, CIE, SMPTE, MIDI Association, DALI Alliance, applicable FCC/FDA or other U.S. regulatory sources for wireless/laser/optical-radiation issues, and other directly relevant standards bodies.
2. **Official labor/professional organizations and formal training bodies:** USITT, IATSE Training Trust Fund and relevant locals, PLASA, AVIXA and equivalent official professional bodies.
3. **Official manufacturer technical documentation and training:** ETC, MA Lighting/ACT, ChamSys, Avolites, Obsidian/ONYX, High End Systems/Hog, Martin, Robe, Claypaky, Ayrton, Vari-Lite, GLP, Elation, Chauvet Professional, Robert Juliat, Astera, ARRI, Aputure, City Theatrical, LumenRadio, Wireless Solution/W-DMX, Artistic Licence, Pathway, Luminex, ProPlex/TMB, Doug Fleenor Design, Swisson, ENTTEC, Lex Products, Motion Laboratories, Hubbell, Ericson, Neutrik, Vectorworks, Lightwright, Capture, CAST, Depence, Resolume, MADRIX, TouchDesigner, Unreal Engine, Pharos, Lutron, Crestron, Color Kinetics and other directly relevant manufacturers/platform owners.
4. **Accredited university/conservatory and union apprenticeship/training curricula** when useful for identifying competency coverage and sequencing.
5. **High-quality trade publications, textbooks and professional training providers** only when primary material does not adequately answer the question.
6. Community sources, forums, Reddit, Facebook and unsourced blogs may be used only as leads or evidence of terminology/practice variation. They must not establish safety, code, certification or universal industry claims.

Use current sources where current product/protocol/training status matters. Preserve publication/revision dates and standard versions whenever available.

## Required research domains

Research the following areas specifically because they remain thin, fragmented or absent after the prior source passes. Do not omit already-covered foundations when they are necessary to connect the gaps into a coherent career map.

### A. Human vision, lighting science and measurement

Research visual perception, adaptation, contrast, glare, flicker perception, visual fatigue, accessibility implications, physics of light, advanced optics, photometry, meter use, illuminance/luminance distinctions, spectral power distribution, CIE colorimetry, chromaticity, CCT, Duv, CRI, TLCI, TM-30, SSI, metamerism, MacAdam/SDCM concepts, LED spectral tradeoffs and camera-vs-eye differences.

Determine what depth belongs to a beginner hand, technician, programmer, designer and advanced systems/design specialist.

### B. Source and fixture engineering

Research conventional lamp technologies still encountered in professional venues; LED emitters, drivers, PWM, thermal management, binning and aging; automated-fixture optical and mechanical systems; sensors/encoders/motors; cooling; calibration; firmware; common fault classes; maintenance intervals; cleaning; optics care; connector inspection; service boundaries; ESD awareness; manufacturer warranty/authorized-service boundaries.

Separate **operator maintenance**, **technician troubleshooting** and **authorized repair/service**.

### C. Electrical systems beyond introductory theory

Build a staged competency map for entertainment electricity and portable distribution, including feeder/distro architecture, branch circuits, phase relationships, neutral loading, load calculation, phase balancing, voltage drop, grounding/bonding, overcurrent protection, GFCI/GFPE, generators, transformers where relevant, inrush, leakage, power factor, harmonics/nonlinear loads, nuisance tripping, surge protection, UPS, power-quality problems and inspection/testing.

Research electrical test instruments and safe-use boundaries: multimeters, clamp meters, receptacle testers, non-contact voltage indicators and their limitations, continuity/verification tools, category ratings, DMX testers vs electrical test equipment and when a qualified electrician/PPDT must take over.

Do not write procedural instructions for energized work beyond what authoritative safety sources support for the intended competency level.

### D. Connectors, cable and physical infrastructure

Research professional connector/cable families and their contexts: NEMA/Edison, stage pin, IEC, PowerCON/TRUE1, Socapex/multipin, Cam-Lok/feeder, etherCON/RJ45, DMX cable, tactical network cable, fiber, data/power hybrids and relevant regional/product differences.

Cover conductor/cable ratings, inspection, strain relief, labeling, adapters, pinout/compatibility awareness, cable management and common failure modes. Clearly identify unsafe/prohibited combinations where authoritative sources establish them.

### E. Control protocols and network engineering

Go deeper than protocol definitions. Research DMX physical-layer failure modes; RDM discovery/configuration; sACN source behavior, priorities, multicast/unicast, merging and source loss; Art-Net architecture and interoperability; RDMnet architecture and maturity; Ethernet/IP fundamentals; VLANs; multicast/IGMP; spanning tree; redundancy; fiber; diagnostics; managed switches; packet-level troubleshooting at an appropriate advanced level.

Add production-network security: credentials, firmware provenance, wireless access, segmentation, remote access, device hardening and change control.

Research wireless DMX/RDM RF fundamentals, spectrum considerations, antenna placement, coexistence/interference, reliability, latency, redundancy and security.

### F. Programming, show files and show control

Create a console-independent competency model covering programmer state, parameters, fixture profiles, patch, groups, presets/palettes, tracking vs cue-only behavior, cue timing, effects/phasers, playback priorities, busking, cloning, fixture exchange, templates/recipes, macros, multi-user systems, scripting/plugins where relevant and large-show organization.

Compare how Eos, grandMA3, ChamSys, Avolites, ONYX and Hog implement major concepts without treating any one implementation as the standard.

Research show-file management: naming, versioning, backups, restore testing, fixture-library/software compatibility, handoffs and disaster recovery.

Research LTC/SMPTE timecode, MTC, MIDI, OSC, GPIO/contact closure and advanced show-control integration, including latency, fallback/manual takeover and interdepartment ownership.

### G. Digital production data, visualization and integration

Research GDTF/MVR authoring, validation, data quality, versioning and exchange across CAD/visualizers/consoles. Cover Vectorworks/Lightwright documentation conventions, revision control, network/power one-lines and change management.

Research visualization/preprogramming limitations and workflows using Capture, Vision, WYSIWYG, Depence, Augment3d and grandMA3 3D.

Research pixel systems, mapping, media-server integration, Martin P3, Resolume, MADRIX, TouchDesigner, Unreal and the interface between lighting and video/media departments. Include projection-system interaction at an awareness/interface level so ownership boundaries are clear.

### H. Followspots, performer tracking and specialty optical systems

Research traditional followspot craft, communication/calling, operator ergonomics and safety; remote followspot systems such as RoboSpot; and automated tracking systems such as zactrack, BlackTrax and Follow-Me.

Cover coordinate systems, calibration, fixture calibration, latency, occlusion, network dependencies, redundancy and failure recovery.

Add atmospheric effects: haze/fog technology, fluid/product differences, ventilation/fire-alarm coordination, exposure guidance, residue and optical interaction.

Add laser and high-intensity optical-radiation awareness. Identify U.S. regulatory/certification/variance boundaries and make the stop-and-escalate boundary explicit. Do not teach unauthorized laser operation.

### I. Environment, field reliability and life-safety interfaces

Research outdoor/wet-location lighting, IP ratings, condensation, heat/cold limits, temporary outdoor power, severe weather, lightning shutdown interfaces and manufacturer restrictions.

Research reliability engineering for lighting systems: single points of failure, A/B power/control, redundant consoles and networks, UPS, spare strategy, spare fixtures/nodes, acceptable degradation and recovery planning.

Research commissioning/system acceptance: pre-power inspection, patch/address validation, fixture checkout, network validation, focus verification, punch lists, documentation and handoff.

Research entertainment lighting's interface with emergency/life-safety systems, egress illumination, panic/house-light control and fire-alarm systems. Clearly distinguish awareness from authority and preserve AHJ/licensed-professional boundaries.

### J. Sector-specific operating environments

Establish what changes across:

- theatre/performing arts;
- concerts/touring;
- festivals;
- corporate AV/general sessions/ballrooms;
- film/TV/broadcast;
- houses of worship;
- fixed venues;
- rental/production shops;
- architectural/install lighting.

For film/TV/broadcast, research grip/electric role boundaries, camera-oriented color/flicker issues, exposure/metering interface, wireless control, generator/distribution context and union terminology where authoritative evidence is available.

For corporate, research camera-conscious presenter lighting, scenic/uplight systems, ballroom infrastructure, rapid-turn workflows and client-facing operation.

For worship, distinguish volunteer-heavy permanent-install environments from commercial production workflows and identify transferable skills without generalizing one model.

### K. Shop, rental, advancing and logistics

Research rental-shop and warehouse competencies: receiving, inventory, inspection, fixture prep, standard mode/address practices, firmware, cable testing, labeling, case packing, repair triage, pull lists, QC, spare kits, returns and damage reporting.

Research transport/case handling and truck-pack considerations at a safe operational level.

Research rental/vendor relationships, quotes/subrentals, substitutions, technical support, RMA/service, advancing, venue specs, plots, input/power/network requirements and change control.

### L. Troubleshooting and technical decision-making

Build an explicit troubleshooting framework applicable from entry technician through systems lead. Include symptom capture; safety check; power/data/configuration/mechanical/network-layer isolation; known-good substitution; one-change-at-a-time testing; use of meters/testers where qualified; documentation; escalation; post-failure learning.

For each common failure class, identify what a hand can recognize/report, what a technician can troubleshoot, what requires electrician/system-specialist authority and what requires manufacturer/authorized service.

### M. Leadership, planning and professional practice

Research department communication, radio/comms practices, focus calls, programming-session etiquette, notes, shift handoff, interdepartment coordination and escalation.

Research lighting lead/head-electrician competencies: labor planning, delegation, QC, briefing, mentoring, technical sign-off boundaries, schedule pressure, incident reporting and change management.

Research estimating/resource planning: labor, fixture/cable/distro quantities, spares/contingency, rental-vs-owned decisions, schedule/trucking implications, budget tradeoffs and substitutions.

Research sustainability: energy, consumables, batteries, repairability, e-waste, lifecycle and transport considerations where credible professional guidance exists.

Research accessibility and inclusive visual-design issues, particularly flicker/photosensitivity, glare, low-vision considerations and the limits of color-only signals.

Research professional ethics: safety-feature bypasses, undocumented modifications, counterfeit/unsafe equipment, privacy implications of tracking/cameras, and pressure to work beyond qualification.

## Required career-depth model

Do not assume the industry universally uses these exact titles. Use them as analytical bands and report real terminology separately:

- **L0 — Awareness / first-call beginner**
- **L1 — Lighting hand / department support under direction**
- **L2 — Lighting technician**
- **L3 — Entertainment electrician and/or console operator**
- **L4 — Programmer and/or lighting systems/network technician**
- **L5 — Head electrician / systems lead / crew lead**
- **L6 — Lighting designer / advanced specialist / system designer**

For every major domain, state:

1. what an L0/L1 worker should recognize or safely assist with;
2. what an L2 worker can independently understand/troubleshoot in normal practice;
3. what belongs at L3/L4 specialist depth;
4. what supervisory/design/system responsibility emerges at L5/L6;
5. what requires employer authorization, external certification, licensure, manufacturer authorization or supervised practical competency rather than online education alone.

## Required deliverables

Produce a single, source-grounded Markdown research package containing:

1. **Executive findings** — the most important structural conclusions.
2. **Lighting Body of Knowledge master taxonomy** — complete hierarchical domain/subdomain map.
3. **Career-depth competency matrix** — domains × L0–L6 analytical levels.
4. **Sector-transfer matrix** — theatre, concert/touring, festival, corporate, film/TV/broadcast, worship, fixed venue, rental shop and architectural/install.
5. **Role and responsibility map** — real titles found in authoritative sources, with terminology variation and responsibility boundaries.
6. **Standards/codes/certification map** — standard number/title, issuing body, scope, current version/date where available, relevance and whether mandatory, consensus standard, certification framework or manufacturer guidance.
7. **Manufacturer/platform training map** — official training resources, skill depth, prerequisites where stated, and whether completion is a certificate of attendance/training or a competency certification.
8. **Troubleshooting framework** — layered failure model and escalation boundaries.
9. **Safety/authorization boundary table** — educational awareness vs hands-on competency vs employer authorization vs external certification/licensure/specialist service.
10. **Documentation/paperwork map** — artifacts a lighting worker encounters or produces at each level.
11. **Shop-to-show workflow** — advance/prep through return/QC, identifying role ownership at each stage.
12. **Gap disposition table** — every gap in this planning document marked `closed`, `partially closed`, `context-specific`, `requires proprietary/paid standard`, or `insufficient authoritative evidence`.
13. **Source registry** — direct links, organization, document/title, publication/revision date when available, source type and which competencies it supports.
14. **Unresolved questions** — claims that remain weak, disputed, proprietary, local, employer-specific or rapidly changing.
15. **Crew Blueprint implications** — only after the evidence section, propose how the body of knowledge might later be divided into learning stages. Clearly label this as instructional design, not an industry standard.

## Evidence rules

- Prefer primary sources for safety, electrical, regulatory, protocol, certification and manufacturer claims.
- Cite every substantive technical or career-standard claim.
- Distinguish legal requirements, consensus standards, certification bodies, manufacturer instructions, union/employer rules, common practice and educational recommendations.
- Do not convert one IATSE local, one employer, one university or one manufacturer workflow into a universal industry rule.
- Do not assume course completion proves hands-on competency.
- Do not imply The Crew Blueprint can authorize electrical, rigging, lift, laser, life-safety, repair or other specialist work.
- Preserve contradictions or regional differences instead of harmonizing them artificially.
- Where a standard is paywalled, cite the official scope/index/summary and clearly mark what could not be verified from full text.
- Prefer current official manuals/specifications but retain legacy equipment knowledge when it remains common enough to affect real work.
- Avoid using Reddit/Facebook/forum material for normative technical claims.

## Final quality test

Before completing the research, test whether the package can answer all of these questions:

- Can a first-call worker tell what lighting equipment is, what can be touched/moved under direction and when to stop and ask?
- Can a developing technician explain and troubleshoot the normal power/data/fixture chain without exceeding electrical/service boundaries?
- Can an entertainment electrician understand the full electrical context expected by authoritative entertainment-industry certification frameworks?
- Can a programmer transfer core concepts between major console families?
- Can a systems technician design, document and troubleshoot modern DMX/IP/wireless control architecture?
- Can a lead manage prep, labor, quality, redundancy, change control and show recovery?
- Can a designer connect visual intent to photometry, color, documentation, programming and production constraints?
- Does the map cover theatre, touring, festivals, corporate, film/TV/broadcast, worship, venue, rental-shop and installed/architectural contexts?
- Are advanced areas such as GDTF/MVR, tracking, media integration, power quality, network security, fiber, commissioning and redundancy included?
- Are safety-critical authorization boundaries explicit everywhere they need to be?

If any answer is no, continue the research until the gap is either closed or explicitly documented as unresolved.

## Repository output instruction for the future research run

When this prompt is executed, save the completed evidence package as the next available numbered Markdown file in:

`research/`

Suggested title if `21` is still available at execution time:

`21-lighting-department-body-of-knowledge-gap-coverage-research.md`

Do not overwrite this planning artifact. Update `research/README.md` only after the completed research package exists, adding the new package to the handoff order and current research set.
