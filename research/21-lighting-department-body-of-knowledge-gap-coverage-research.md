# 21 — Lighting Department Body of Knowledge: Gap Coverage Research

**Research date:** 2026-08-19  
**Purpose:** Source-grounded gap-closing research for The Crew Blueprint lighting pathway.  
**Status:** Evidence package, not course copy.  
**Analytical career bands:** L0 Awareness / first-call beginner; L1 lighting hand; L2 lighting technician; L3 entertainment electrician and/or console operator; L4 programmer and/or lighting systems/network technician; L5 head electrician / systems lead / crew lead; L6 lighting designer / advanced specialist / system designer. These are Crew Blueprint analytical bands, not claims that the industry universally uses these titles.

---

## 1. Executive findings

The lighting department is not one skill ladder. It is a family of overlapping technical and creative disciplines connected by a common production system: **human vision and light science → fixtures and optics → power → control/data → networking → programming/show control → documentation and visualization → physical deployment → operation → troubleshooting → maintenance → leadership/design**.

The two prior broad source-mapping passes correctly identified the major institutions and platforms, but the gap audit showed that naming a source is not the same as closing a competency. This research closes or narrows the most important gaps by grounding them in current primary sources and by separating five different kinds of authority:

1. **Law/regulation** — OSHA workplace rules and FDA laser-product/light-show regulation.
2. **Consensus standards and technical specifications** — ESTA/ANSI, CIE/ISO, MIDI, OSC, GDTF/MVR, and other official specification owners.
3. **Certification/job-analysis evidence** — ETCP and AVIXA competency frameworks.
4. **Manufacturer instructions** — product-specific operation, maintenance, diagnostics, firmware, environmental limits, console workflows, fixture data and service boundaries.
5. **Crew Blueprint instructional framing** — how to sequence learning and where to place stop-and-escalate boundaries.

### Core conclusions

- **Lighting hand competence is primarily recognition, safe physical support, communication, documentation awareness and stop-and-ask judgment.** It should not be defined by independent electrical, network, programming, repair, rigging, laser or life-safety authority.
- **Lighting technician competence begins when the worker can trace ordinary signal/power/fixture problems systematically, read production paperwork, understand fixture modes and addresses, perform manufacturer-permitted inspection/configuration, and work inside an established system without redesigning it.**
- **Entertainment electricity is a specialist track.** ETCP’s Entertainment Electrician and Portable Power Distribution Technician (PPDT) programs are based on formal job analyses; the PPDT scope is explicitly targeted at experienced portable-power practitioners, and ETCP requires substantial work-experience points before examination eligibility. Online training must not be presented as authorization for energized work or portable-power responsibility.
- **Modern lighting systems are networked computing systems.** DMX512 remains the field-level control foundation, but current professional competence increasingly requires RDM, sACN, Art-Net, managed Ethernet, multicast behavior, addressing/subnetting, gateways/nodes, redundancy, diagnostics and basic production-network security.
- **Data interchange is now a core advanced competency.** GDTF (DIN SPEC 15800:2022-02) and MVR (DIN SPEC 15801:2023-12 / MVR 1.6) formalize exchange of device descriptions, geometry, patch and scene information among CAD, consoles and visualizers. Data quality and version control therefore belong in the body of knowledge, not as optional software trivia.
- **Fixture maintenance must be tiered.** Manufacturers such as Martin and Robe publish user/end-user maintenance schedules, diagnostic/configuration tools, service manuals and separate factory/authorized repair channels. This supports an explicit boundary among operator care, technician diagnostics and service-level repair.
- **Lighting science requires more depth than “RGB + lux.”** Current CIE material covers physical photometry, photopic/scotopic/mesopic visual response, temporal light modulation, glare, colorimetry and advanced color-rendering concerns. This science matters differently at each level: recognition at L0/L1, measurement and interpretation at L2/L3, specification and design judgment at L4–L6.
- **Atmospherics and lasers are not ordinary fixture topics.** ESTA has a dedicated Fog & Smoke standards family. FDA regulates entertainment laser products and higher-class laser light shows; these require specialized compliance pathways. Crew Blueprint should teach awareness, hazard recognition and responsibility boundaries rather than operational laser instruction.
- **AV-wide competency frameworks fill gaps that entertainment-lighting sources do not.** AVIXA’s CTS/CTS-I/CTS-D and networked-AV training show that installation, documentation, testing, project closeout, network security, packet analysis, design process and stakeholder coordination are legitimate advanced AV competencies that transfer into installed and corporate lighting systems.

---

## 2. Lighting Body of Knowledge master taxonomy

The following taxonomy is the recommended complete research architecture. A course may use only a subset; the body of knowledge should preserve all domains.

### Domain 1 — Human vision and visual perception
- photopic, scotopic and mesopic vision;
- adaptation;
- contrast and visibility;
- glare;
- temporal light modulation/flicker perception;
- peripheral/functional visual field;
- visual fatigue;
- brightness perception versus measured photometric quantities;
- camera-versus-human-eye differences;
- accessibility implications including glare, flicker/photosensitivity and color-only signaling limitations.

**Primary evidence:** CIE Division 1 and Division 2 publications, including CIE 015:2018, CIE 018:2019, ISO/CIE 23539:2023, CIE 249:2022, CIE 255:2025 and related technical notes.

### Domain 2 — Physics, optics and photometry
- radiant versus photometric quantities;
- candela, lumen, lux/footcandle and luminance concepts;
- inverse-square behavior as an optical/photometric principle;
- reflection, absorption and transmission;
- reflector/lens systems;
- beam and field angle;
- beam distribution;
- photometric reports;
- illuminance/luminance meters and measurement limitations;
- spectral measurement and spectroradiometry at advanced depth.

**Authority:** ISO/CIE 23539:2023 is the current CIE physical-photometry standard and incorporates updated SI/candela treatment and photopic/scotopic/mesopic functions.

### Domain 3 — Color science and spectral behavior
- additive/subtractive concepts;
- chromaticity and standard observers/illuminants;
- CCT and Duv;
- spectral power distribution;
- metamerism;
- LED multi-emitter systems;
- CRI as a legacy/common metric;
- IES TM-30 framework;
- TLCI/SSI where sector relevant;
- color appearance and color difference;
- camera/skin/scenic-material interactions.

**Boundary:** L0/L1 needs vocabulary and recognition; L2 needs practical interpretation; L3/L4 needs console/fixture color behavior; L5/L6 needs specification, measurement, camera/visual integration and design tradeoffs.

### Domain 4 — Conventional sources and fixtures
- tungsten-halogen source behavior;
- discharge-source legacy systems still encountered in venues/rental fleets;
- profile/ellipsoidal, Fresnel, PAR, cyc/strip/flood, followspot and practical fixture categories;
- reflector, lens, shutter, gobo, iris, gel/filter, frost/diffusion and accessory behavior;
- heat and source-life considerations;
- legacy dimming/power interfaces.

### Domain 5 — LED source engineering
- emitters and phosphor/multi-emitter engines;
- drivers;
- PWM and dimming behavior;
- thermal management;
- calibration/binning consistency concepts;
- spectral tradeoffs;
- aging and maintenance implications;
- flicker/frame-rate implications.

ESTA ANSI E1.69 provides a standardized method for reporting LED entertainment-luminaire dimming performance, confirming that dimming quality is a measurable engineering characteristic rather than only a subjective console setting.

### Domain 6 — Automated-fixture engineering
- pan/tilt mechanics;
- optical train;
- motors, sensors and encoders;
- framing, gobos, animation, prisms, iris, zoom/focus, frost;
- CMY/color wheels/multi-emitter color engines;
- cooling and thermal sensors;
- homing/calibration;
- firmware;
- error/warning systems;
- self-test/diagnostic concepts;
- common fault classes.

**Maintenance boundary evidence:** Martin publishes separate end-user maintenance schedules, service procedures, diagnostic/configuration tools and factory repair channels. Robe publishes user documentation plus service manuals/technical bulletins with some service documentation access-controlled. Curriculum should therefore separate **inspection/cleaning/configuration**, **technician diagnosis**, and **service-level component repair**.

### Domain 7 — Physical hanging/focus interface
- fixture identification and handling;
- clamps/mounting hardware awareness;
- secondary-retention awareness;
- orientation and clearance;
- cable strain relief;
- safe focus communication;
- conventional focus vocabulary;
- moving-light position/calibration awareness;
- boundary with qualified rigging and lift operation.

OSHA requires only authorized persons to operate aerial lifts under 29 CFR 1926.453; lift operation is not conferred by lighting-course completion.

### Domain 8 — Electrical theory and entertainment power
- voltage/current/resistance/power;
- AC frequency and phase concepts;
- single- and three-phase concepts;
- grounding/bonding;
- overcurrent protection;
- GFCI/GFPE awareness;
- branch circuits;
- portable distro architecture;
- feeder/company-switch concepts;
- generators/transformers as system components;
- load calculation and phase balance;
- voltage drop;
- neutral loading;
- nonlinear loads/harmonics;
- inrush/leakage/power-factor concepts;
- surge/UPS/power-quality awareness;
- inspection/test-instrument selection and limitations.

**Authority boundary:** ETCP Entertainment Electrician and PPDT content outlines are the strongest entertainment-specific competency benchmark. OSHA Subpart S governs workplace electrical systems/work practices. The Crew Blueprint should teach theory and recognition progressively but gate connection, energized testing and distribution responsibility behind employer qualification and applicable professional/legal requirements.

### Domain 9 — Connectors, cable and physical infrastructure
- NEMA/Edison, stage pin, IEC, powerCON/TRUE1, Socapex/multipin and Cam-Lok/feeder recognition;
- XLR/DMX, etherCON/RJ45, tactical Ethernet and fiber recognition;
- conductor/cable ratings;
- application/environment ratings;
- pinout awareness where safe and relevant;
- strain relief;
- labeling;
- inspection;
- adapters and compatibility boundaries;
- cable protection/management;
- manufacturer-specific connector restrictions.

OSHA 1910.305 requires flexible cords/cables to be approved for conditions of use, protected from physical damage and provided with strain relief; wet-location equipment/enclosures must be identified/weatherproof as applicable. These are safety principles, not permission to fabricate or modify electrical assemblies.

### Domain 10 — DMX512 physical/data layer
- ANSI E1.11 DMX512-A purpose and interoperability;
- RS-485 awareness;
- universe/address/slot concepts;
- fixture personalities/modes;
- topology;
- termination and signal-integrity principles;
- splitters/repeaters/opto-isolation;
- mergers;
- cable standards;
- testing and fault isolation.

**Current standards:** ANSI E1.11-2024 and ANSI E1.68-2024. E1.68 explicitly addresses compliance, interoperability and technician troubleshooting.

### Domain 11 — RDM
- ANSI E1.20 purpose;
- discovery;
- addressing/configuration;
- status/fault reporting;
- managed splitters/proxies;
- parameter extensions;
- limitations and interoperability;
- firmware/configuration transfer as an advanced topic.

**Current standards:** ANSI E1.20-2025; ANSI E1.37-4-2026 adds file-transfer control including firmware-upload capability; E1.37-5 and E1.37-7 extend general and gateway/splitter messages.

### Domain 12 — ACN/sACN/RDMnet
- ACN architecture awareness;
- sACN source/receiver/universe concepts;
- multicast/unicast behavior;
- source priorities and loss;
- merging/synchronization concepts;
- discovery;
- gateway/node architecture;
- RDMnet as device-management transport over IP;
- broker/controller/device concepts;
- network partitioning and multi-console integration.

ESTA describes RDMnet as extending RDM device management beyond local DMX links onto IP networks and supporting large-scale configuration/monitoring and multiple controllers.

### Domain 13 — Art-Net
- Artistic Licence as protocol owner;
- Art-Net addressing/universe concepts;
- broadcast/unicast behavior by version/application;
- nodes/gateways;
- coexistence with sACN;
- interoperability and troubleshooting;
- reason not to treat Art-Net and sACN as interchangeable names for “network DMX.”

### Domain 14 — Ethernet/IP networking
- Ethernet physical/media concepts;
- MAC addresses;
- IPv4 addressing and subnetting;
- DHCP/static addressing;
- ARP awareness;
- switches and forwarding tables;
- managed versus unmanaged switching;
- VLANs;
- multicast and IGMP;
- spanning-tree/redundancy concepts;
- QoS where relevant;
- link aggregation where supported;
- fiber;
- diagnostics;
- packet capture at advanced systems depth.

AVIXA’s Networked AV Systems training explicitly includes network architecture, protocols, security and Wireshark analysis; therefore packet-level diagnosis is defensible at advanced AV/systems depth, not beginner lighting depth.

### Domain 15 — Production-network security
- default credentials;
- credential management;
- unauthorized wireless access;
- segmentation;
- remote-access control;
- firmware provenance;
- device hardening;
- change control;
- backup/recovery;
- coordination with venue/corporate IT.

This is an **L4–L6 awareness/implementation domain**. Lighting technicians need practical security hygiene; they do not need to become penetration testers.

### Domain 16 — Wireless DMX/RDM
- RF fundamentals and shared-spectrum awareness;
- antenna placement/line-of-sight concepts;
- interference/coexistence;
- range/environment limitations;
- latency;
- redundancy;
- encryption/security features when supported;
- practical monitoring and troubleshooting;
- platform-specific implementations such as Multiverse, CRMX and W-DMX.

City Theatrical’s official white-paper library provides practical wireless-DMX and RDM education; platform implementation remains manufacturer-specific.

### Domain 17 — Console-independent programming
- programmer state;
- fixture attributes/parameters;
- patch;
- selection;
- groups;
- presets/palettes;
- tracking and cue-only concepts;
- cue lists/sequences;
- timing/delay;
- effects/phasers;
- playbacks/executors;
- priority;
- busking;
- cloning/fixture exchange;
- templates/recipes;
- macros;
- multi-user operation;
- scripting/plugins at advanced depth;
- large-show organization.

No single console vocabulary should be treated as universal.

### Domain 18 — Console platform fluency
Maintain vendor branches for:
- ETC Eos;
- grandMA3;
- ChamSys MagicQ;
- Avolites Titan;
- ONYX;
- Hog.

ETC currently offers Eos Levels 1–4 plus expert topics including Augment3d, Magic Sheets, Busking, Advanced Effects and Virtual Media Server. MA offers current grandMA3 software/manuals and free e-learning/onPC entry routes. Platform credentials demonstrate product fluency, not universal lighting qualification.

### Domain 19 — Show-file management and resilience
- file naming;
- versioning;
- backups;
- restore verification;
- fixture-library/GDTF changes;
- software-version compatibility;
- operator handoff;
- redundant consoles;
- failover/manual fallback;
- change logs;
- disaster recovery.

This domain was under-covered in the earlier source maps and should be taught explicitly from L2 upward.

### Domain 20 — Show control and synchronization
- MIDI fundamentals;
- MIDI Show Control;
- MIDI Time Code;
- OSC;
- LTC/SMPTE timecode awareness;
- GPIO/contact-closure interfaces;
- trigger/fallback concepts;
- latency and clock/reference awareness;
- ownership boundary among lighting, audio, video, automation and show control.

The MIDI Association states that MIDI Show Control was designed for theatrical/live-performance/multimedia control systems and can range from simple GO/STOP/RESUME commands to large synchronized systems. OSC is a transport-independent message encoding for realtime communication among applications/hardware.

### Domain 21 — GDTF and fixture data
- GDTF purpose;
- geometry;
- modes/channels;
- physical descriptions;
- emitters/filters/wheels;
- connector/wiring objects;
- virtual channels and dependencies;
- authoring/validation;
- manufacturer-provided versus user-created data;
- revision/data-quality issues.

GDTF 1.2 is formalized as DIN SPEC 15800:2022-02. The GDTF organization recommends obtaining manufacturer data first because the manufacturer has the best knowledge of the device.

### Domain 22 — MVR and production-data exchange
- MVR 1.6 / DIN SPEC 15801:2023-12;
- scene geometry;
- fixtures, truss, video and support objects;
- logical patch/address data;
- persistent IDs/change exchange;
- CAD-console-visualizer interchange;
- MVR-xchange;
- file/version integrity.

### Domain 23 — Drafting, paperwork and revision control
- lighting plots;
- sections/elevations;
- fixture schedules;
- channel hookups;
- circuit/patch schedules;
- color/gobo schedules;
- focus charts;
- cable schedules;
- power one-lines;
- network diagrams;
- notes/revisions/change control;
- as-built documentation.

Vectorworks Spotlight and Lightwright remain important professional source ecosystems. AVIXA’s CTS-I framework also validates testing, documentation and project-closeout documentation as professional AV competencies.

### Domain 24 — Visualization and preprogramming
- Capture;
- Vectorworks Vision;
- CAST WYSIWYG;
- Depence;
- ETC Augment3d;
- grandMA3 3D;
- fixture-data accuracy;
- geometry fidelity;
- photometric/rendering limitations;
- offline show preparation;
- validation against real-world conditions.

### Domain 25 — Pixel, media and visual integration
- pixel addressing/channel density;
- RGB/RGBW ordering;
- refresh/latency;
- pixel processors/controllers;
- media servers;
- MADRIX/Resolume/TouchDesigner/Unreal/P3 awareness;
- lighting-versus-video control ownership;
- GDTF/MVR/NDI/other cross-system awareness where relevant;
- projection-system interface awareness.

### Domain 26 — Followspot craft
- fixture/position recognition;
- operator communication;
- pickup/lead/framing vocabulary;
- intensity/iris/douser/color concepts;
- cue calling;
- ergonomic and position hazards;
- paperwork and rehearsal discipline.

### Domain 27 — Remote followspot and performer tracking
- systems such as Robe RoboSpot, zactrack, BlackTrax and Follow-Me;
- coordinate systems;
- calibration concepts;
- tags/sensors/cameras where applicable;
- networking;
- latency/occlusion;
- redundancy;
- manual/operator oversight;
- failure recovery;
- privacy implications of tracking technologies.

### Domain 28 — Atmospherics
- haze/fog technology categories;
- manufacturer-approved fluids;
- exposure/ventilation awareness;
- fire-alarm coordination;
- residue and equipment effects;
- optical interaction;
- outdoor behavior;
- documentation and venue approval.

ESTA maintains a dedicated Fog & Smoke Working Group with standards including ANSI E1.5, E1.14, E1.23, E1.29 and E1.40. This topic is therefore a formal safety/technical domain, not merely an effects preference.

### Domain 29 — Laser/high-intensity optical awareness
- laser classification awareness;
- FDA/CDRH jurisdiction in the United States;
- demonstration laser product definition;
- higher-class entertainment laser variance framework;
- audience-exposure hazards;
- aviation/outdoor interfaces;
- trained/qualified operator boundary;
- UV/IR/high-intensity source awareness.

**Curriculum rule:** teach recognition, regulatory awareness and stop/escalate boundaries only. FDA states that higher-class IIIb/IV entertainment laser shows require an approved variance and formal reports; ordinary lighting training must never imply authorization to operate such systems.

### Domain 30 — Outdoor/environmental systems
- IP/environment ratings;
- rain/wet-location restrictions;
- condensation;
- temperature limitations;
- sun/UV exposure where applicable;
- temporary outdoor power interface;
- severe weather and lightning coordination;
- wind exposure/overhead-system interface;
- manufacturer operating limits;
- dry-out/inspection/recovery procedures only as manufacturer-directed and authorized.

### Domain 31 — Reliability and redundancy engineering
- single points of failure;
- A/B power/control concepts;
- redundant consoles;
- network redundancy;
- UPS;
- spare fixtures/nodes/cables;
- degradation plans;
- recovery ownership;
- known-good backups;
- rollback/change management.

### Domain 32 — Commissioning and system acceptance
- visual/pre-power inspection;
- addressing/patch verification;
- fixture checkout;
- network validation;
- power validation by authorized personnel;
- focus/position verification;
- punch lists;
- documentation;
- client/venue handoff;
- as-built records.

AVIXA CTS-I describes professional AV installers as configuring/maintaining systems, performing system tests, training users and providing project-closeout documentation. This provides a strong cross-AV model for installed lighting commissioning.

### Domain 33 — Life-safety interfaces
- house/panic/emergency lighting awareness;
- egress illumination;
- fire-alarm interfaces;
- architectural control interaction;
- AHJ/venue engineering authority;
- do-not-bypass principle;
- documentation and escalation.

A lighting practitioner may need to recognize these systems without having authority to alter them.

### Domain 34 — Shop/rental workflow
- receiving;
- inventory;
- pull lists;
- fixture/cable inspection;
- test/QC;
- standardized modes/addresses/firmware;
- labeling;
- case packing;
- spare kits;
- repair triage;
- returns and damage reporting;
- chain of custody.

Manufacturer diagnostic/firmware platforms such as Martin Companion and Robe Toolkit demonstrate that configuration, sensor/error data, firmware and fixture records are now normal shop-prep data domains.

### Domain 35 — Transport/logistics
- case identification;
- weight/center-of-gravity awareness;
- truck-pack communication;
- weather exposure;
- damage prevention;
- labeling;
- chain of custody;
- department ownership;
- transport versus rigging/structural responsibility boundaries.

### Domain 36 — Vendor/rental/advance workflow
- quotes and availability;
- substitutions;
- subrentals;
- technical support;
- RMA/service;
- venue specifications;
- plots and schedules;
- power/network requirements;
- production advance;
- change control;
- procurement/budget interface.

### Domain 37 — Troubleshooting methodology
Use a universal reasoning model rather than memorized fixes:

**capture symptom → assess immediate safety → identify affected system layer → isolate → test with approved/appropriate means → compare against known-good state where safe → make one controlled change at a time → verify restoration → document → escalate when outside authorization → capture lessons learned.**

This is a reasoning framework, not authorization for electrical or service work.

### Domain 38 — Communication and leadership
- department vocabulary;
- radio/comms discipline;
- focus communication;
- notes/handoffs;
- change control;
- interdepartment coordination;
- delegation;
- QC;
- briefings;
- mentoring;
- schedule/labor planning;
- incident reporting;
- authority/escalation boundaries.

### Domain 39 — Estimating/resource planning
- labor-hours estimation;
- fixture/cable/distro/network quantities;
- spares/contingency;
- rental-versus-owned tradeoffs;
- trucking and schedule impacts;
- procurement/substitution;
- budget implications;
- risk contingency.

### Domain 40 — Sustainability and lifecycle
- energy use;
- lamp/fixture life;
- repair versus replacement;
- e-waste;
- batteries;
- consumables;
- transport impacts;
- reusable documentation/workflows;
- maintenance as lifecycle extension.

Martin’s maintenance training explicitly frames proper maintenance as a way to increase operational lifespan; this supports sustainability as an operations topic rather than only a design ideology.

---

## 3. Career-depth competency matrix

| Domain | L0/L1 | L2 | L3/L4 | L5/L6 | Authorization boundary |
|---|---|---|---|---|---|
| Vision/light/color | Recognize intensity, angle, basic color and glare/flicker concerns | Read photometric/basic color data; use approved meters if assigned | Interpret spectral/color metrics; camera/flicker implications | Specify/measure/design and resolve tradeoffs | Measurement competence does not equal electrical/service authority |
| Fixtures | Identify, move/stage/hang/focus under direction | Configure modes/addresses, inspect, perform manufacturer-permitted maintenance | Diagnose fixture/control faults; firmware/data management | Fleet/system decisions; service coordination | Internal repair only per employer/manufacturer authorization |
| Power | Recognize connectors, ratings and hazards; never improvise | Understand loads and trace de-energized/authorized system issues | EE/PPDT-level theory, distro planning and authorized testing | System design/supervision | Energized work, feeder/distro responsibility and legal electrical scope require qualification/authorization |
| DMX/RDM | Recognize DMX chain and addressing | Patch/address, terminate/split/test ordinary links | RDM management, interoperability diagnosis | Architecture and standards-level design | Follow manufacturer/venue rules |
| IP networking | Recognize nodes/switches/data path | Configure normal IP/subnet/node settings under plan | VLAN/multicast/IGMP/redundancy/packet diagnosis | Design and coordinate with IT/security | Corporate/venue network policy controls access |
| Wireless control | Recognize transmitters/receivers and RF constraints | Configure approved systems and basic diagnostics | RF planning, coexistence, redundancy | System design | Spectrum/regulatory and venue constraints apply |
| Consoles | Observe/playback under supervision; understand cue concept | Patch, palettes/presets, cues, basic effects/show-file discipline | Advanced programming, busking, multi-user, macros/scripting | Programming architecture/design leadership | Product training is not universal qualification |
| GDTF/MVR/CAD | Read basic plots and patch | Maintain accurate paperwork; import/export with verification | Author/validate data; resolve interchange issues | Data architecture and system design | Preserve revision control and manufacturer data authority |
| Followspots/tracking | Recognize system and operator cues | Manual followspot competence after practical training | Remote/tracking-system configuration/diagnosis | Design/redundancy/privacy decisions | Position safety, tracking installation and rigging remain separately authorized |
| Atmospherics | Recognize effect and venue approval requirement | Operate manufacturer-approved system if assigned/trained | Plan effect with exposure/fire-alarm/venue coordination | Design/approve within role | Venue/fire/life-safety authority controls use |
| Lasers | Recognize and do not treat as ordinary lighting | Awareness only unless separately qualified | Specialized regulatory/professional track | Specialized design/compliance | FDA variance/regulatory requirements; no authorization from Crew Blueprint |
| Shop/rental | Sort, label, handle, report damage | Prep/QC, firmware/modes under procedures | Repair triage, show prep leadership | Fleet/resource planning | Service repairs may require authorized center/manufacturer |
| Leadership | Clear comms, follow direction, report changes | Own assigned subsystem/tasks and handoff | Lead technicians/programming/system work | Department/system leadership/design | Authority is employer/production specific |

### Competency-gating rule

For safety-critical work, progression must be expressed as **knowledge → supervised practice → demonstrated competency → employer authorization → external credential/licensure where applicable**, not simply course completion.

---

## 4. Sector-transfer matrix

| Competency | Theatre/PAC | Touring/concert | Festival | Corporate AV | Film/TV/broadcast | Worship | Fixed venue/install | Rental/shop |
|---|---|---|---|---|---|---|---|---|
| Conventional focus/cue tracking | High | Medium | Low–Med | Medium | Medium | Medium | High | Medium |
| Busking/live programming | Med | Very high | Very high | Medium | Low–Med | High | Medium | Medium |
| Timecode/show control | High | High | High | Medium | High | Medium | High | Prep support |
| Portable power | Medium | High | Very high | Med–High | High | Low–Med | Low–Med | High prep/test |
| Networked lighting | High | Very high | Very high | High | High | High | Very high | High |
| Camera-aware color/flicker | Medium | Medium | Medium | Very high | Very high | High | Medium | Prep/test |
| Drafting/paperwork | High | High | High | High | Medium | Medium | Very high | High |
| Fixture service/prep | Medium | Medium | Medium | Low | Medium | Low–Med | Medium | Very high |
| Environmental/IP/weather | Low | Medium | Very high | Low | Medium | Low | Medium outdoors | High prep awareness |
| Architectural/life-safety interfaces | Medium | Low | Low | Medium | Low | High | Very high | Low |

### Sector observations

- **Theatre/PAC:** strongest emphasis on documentation, cueing, tracking, conventional focus, house systems and long-lived installed infrastructure.
- **Touring/concert:** strongest emphasis on fast deployment, busking/timecode, redundancy, network scale, show-file portability and vendor/rental interoperability.
- **Festival:** adds outdoor exposure, temporary power, weather, shared infrastructure and rapid changeovers.
- **Corporate AV:** demands camera-conscious presenter/scenic lighting, ballroom/site infrastructure, client-facing workflow and strong AV/IT integration.
- **Film/TV/broadcast:** requires deeper camera-color/flicker/exposure awareness, wireless control and department-specific labor terminology. Grip/electric boundaries vary by production and union context and must be researched/represented locally rather than universalized.
- **Worship:** often combines permanent systems, live programming, broadcast and mixed volunteer/professional training; it is a valid skills environment but not a universal labor model.
- **Fixed venue/install:** increases commissioning, as-built documentation, architectural controls, network/security, service and life-safety interface requirements.
- **Rental/shop:** emphasizes repeatable QC, firmware/data consistency, service triage, packing, logistics and asset records.

---

## 5. Role and responsibility map

### L0 — Awareness / first-call beginner
Should be able to identify major fixture/cable/control categories, follow handling instructions, read simple labels/plots, maintain cable/housekeeping discipline, report visible damage or unexpected behavior, and stop when work crosses into electrical, rigging, configuration, repair, laser, life-safety or other specialist authority.

### L1 — Lighting hand
Performs physical lighting support under department direction: staging gear, fixture handling, cable routing/protection, basic hanging/focus assistance where authorized, strike/reset, labeling and communication. The defining competency is reliable support without unauthorized adjustment.

### L2 — Lighting technician
Owns ordinary fixture/data tasks inside an established design: patch/address/mode verification, routine DMX troubleshooting, manufacturer-permitted configuration/maintenance, paperwork updates, system checkout, normal network-node configuration under a plan, fixture swaps and documented handoff.

### L3 — Entertainment electrician and/or console operator
This level branches. Entertainment electricians take deeper responsibility for electrical theory, distribution and safe use within their qualified scope. Console operators take deeper responsibility for show files, cue/playback execution, console configuration and programming. One branch does not automatically confer the other.

### L4 — Programmer and/or systems/network technician
Owns complex programming architecture or network/control-system behavior: multi-user sessions, timecode/show control, large universe counts, managed switching/multicast, RDM/RDMnet, redundancy, advanced diagnostics, GDTF/MVR/data interchange and production-network security hygiene.

### L5 — Head electrician / systems lead / crew lead
Translates plans into safe department execution: labor and schedule planning, QC, technical briefings, change control, cross-department coordination, spare/recovery strategy, escalation and documentation. Actual titles vary by sector/employer/local.

### L6 — Designer / advanced specialist / system designer
Owns creative/technical specification or specialist architecture: visual intent, photometric/color decisions, fixture selection, system topology, documentation standards, integration strategy, budgets/tradeoffs and design communication. This level may branch further into lighting design, controls/system design, programming, networking, electrical supervision, film/broadcast lighting or architectural lighting.

---

## 6. Standards, codes and certification map

### ESTA / ANSI — entertainment-specific technical standards
High-priority current references include:
- ANSI E1.11-2024 — DMX512-A;
- ANSI E1.20-2025 — RDM;
- ANSI E1.31 — sACN;
- ANSI E1.33 — RDMnet;
- ANSI E1.37 series — RDM extensions, including E1.37-4-2026 firmware/file transfer;
- ANSI E1.68-2024 — DMX512-A compliance/interoperability/troubleshooting;
- ANSI E1.69-2022 — reporting LED entertainment-luminaire dimming performance;
- E1.27 control-cable standards;
- Fog & Smoke standards family E1.5/E1.14/E1.23/E1.29/E1.40;
- applicable electrical, equipment-mounting, event-safety and rigging-interface standards.

ESTA’s published-document library is unusually valuable because many entertainment standards are downloadable without charge.

### ETCP
- Entertainment Electrician — broad electrical competency benchmark; exam content is based on formal job analysis and includes a large electrical-skills component.
- Portable Power Distribution Technician — narrower portable-power benchmark; ETCP states it targets experienced practitioners and requires work/education points for exam eligibility.

**Interpretation:** ETCP is a ceiling/benchmark source. Crew Blueprint should not market introductory courses as ETCP-equivalent qualification.

### OSHA
Relevant families include:
- 29 CFR 1910 Subpart S electrical systems and safety-related work practices;
- PPE hazard-assessment/use requirements;
- temporary/flexible wiring requirements;
- ladder/lift/fall-related standards as applicable to work context;
- lockout/tagout where applicable.

**Interpretation:** OSHA requirements depend on workplace/task. Avoid claiming that one entertainment practice is “OSHA required” unless the exact OSHA provision supports it.

### NFPA / NEC and NFPA 70E
These are essential advanced electrical references, but many detailed provisions are proprietary/paywalled. Crew Blueprint should cite official scope/article references and use licensed/authorized access for exact code language. Do not paraphrase a paid standard beyond what can be verified from official public material.

### CIE / ISO-CIE
Primary advanced science sources:
- CIE 015:2018 Colorimetry, 4th Ed.;
- CIE 018:2019 Basis of Physical Photometry;
- ISO/CIE 23539:2023 Physical Photometry;
- CIE 249:2022 Visual Aspects of Time-Modulated Lighting Systems;
- current Division 1/2 publications on color rendition, functional visual field, photometer calibration and measurement.

### IES
Use IES technical memoranda/education, especially TM-30, for color rendition and broader illuminating-engineering context. Distinguish IES recommendations/metrics from entertainment-industry operating rules.

### FDA/CDRH
Entertainment laser products are regulated under federal electronic-product-radiation rules. FDA identifies entertainment light-show projectors as demonstration laser products and requires formal variance/reporting pathways for higher-class Class IIIb/IV light shows. This is a specialist regulatory track.

### AVIXA
CTS, CTS-I, CTS-D and networked-AV training provide cross-AV job-analysis evidence for AV fundamentals, installation/configuration, testing, documentation, design, project workflow, security and network diagnosis.

### MIDI / OSC / GDTF-MVR
These are protocol/data-format authorities, not worker certifications.

---

## 7. Manufacturer/platform training map

| Source ecosystem | Strongest curriculum use | Limitation |
|---|---|---|
| ETC LearningStage / manuals | Eos L1–4, Augment3d, networking, Hog, fixture/power/control ecosystem | ETC-specific implementation |
| MA Lighting / MA University / manuals | grandMA3 beginner through advanced, onPC, large-show programming, nodes/network products | MA terminology/system architecture |
| ChamSys | MagicQ programming and touring/event workflows | Platform-specific |
| Avolites Academy | Titan programming; Ai/media integration | Platform-specific |
| Obsidian ONYX | Console workflow and visualization practice | Platform-specific |
| High End Systems Hog | Alternative professional programming model | Platform-specific |
| Martin | Moving-light engineering, maintenance schedules, service/diagnostics, P3/media/fixture management | Product-family specific |
| Robe | Automated fixtures, RoboSpot, service documentation, GDTF-first product data | Product-family specific; some service docs gated |
| City Theatrical | Wireless DMX/RDM, accessories, practical control white papers | Manufacturer perspective |
| LumenRadio / W-DMX | RF/wireless-control implementations | Manufacturer-specific |
| Pathway / Luminex / ProPlex | nodes, gateways, managed entertainment networks, fiber/control distribution | Product implementation |
| Vectorworks Spotlight | design, documentation, reports, entertainment system modeling | CAD/platform workflow |
| Lightwright | lighting paperwork/data management | Specialized paperwork tool |
| Capture / Vision / WYSIWYG / Depence | visualization/preprogramming | Simulation accuracy depends on data/models |
| GDTF/MVR official docs | open device/scene data exchange | Requires implementation-specific testing |

### Rule for manufacturer content
Manufacturer instructions are authoritative **for that product**, but should not be generalized into universal practice unless corroborated by standards or multiple independent professional sources.

---

## 8. Troubleshooting framework

### Universal diagnostic model
1. **Capture the symptom** — what changed, when, where, and what still works.
2. **Immediate safety screen** — if there is smoke, damaged insulation, overheating, unexpected mechanical motion, water/electrical exposure, unsafe overhead behavior, laser exposure, or another serious hazard, stop and escalate rather than troubleshoot through it.
3. **Identify the layer** — power, physical fixture, configuration, DMX, IP network, wireless, console/show file, show control/synchronization, optics/mechanics.
4. **Isolate the affected scope** — one fixture, one branch, one universe, one node, one VLAN, one console, or system-wide.
5. **Use approved diagnostic information/tools** appropriate to authorization level.
6. **Compare with known-good state** where safe and permitted: documentation, another device/configuration, backup show file, manufacturer diagnostics.
7. **Change one variable at a time.**
8. **Verify full restoration**, not merely disappearance of the first symptom.
9. **Document the change/failure** so the next operator does not unknowingly recreate it.
10. **Escalate** when the problem crosses electrical qualification, internal repair, rigging, life-safety, security/IT policy, laser regulation or manufacturer-authorized service boundaries.

### Failure-class responsibility

| Failure class | L0/L1 | L2 | L3/L4 | L5/L6 / specialist |
|---|---|---|---|---|
| No output from fixture | Report/identify obvious assigned context | Verify patch/mode/data path and approved swap | Diagnose console/network/RDM/fixture configuration | System/design or service escalation |
| DMX instability | Report scope | Check normal link topology/termination using approved test gear | Interoperability, RDM, gateway, protocol diagnosis | Architecture redesign if recurrent |
| IP/sACN issue | Report affected devices | Verify assigned address/node settings | VLAN/multicast/IGMP/packet diagnosis | Network architecture/IT coordination |
| Wireless instability | Report location/pattern | Basic manufacturer-guided checks | RF/coexistence/redundancy analysis | System design or specialist coordination |
| Electrical anomaly | Stop/report | Visual/de-energized checks within authorization | Qualified EE/PPDT/electrical personnel | Electrical design/supervision/licensed scope as applicable |
| Mechanical/fixture error | Report code/symptom | Manufacturer-permitted reset/config/inspection | Service diagnosis if trained/authorized | Authorized service/manufacturer |
| Show-file corruption/version mismatch | Report | Restore known backup / check version under procedure | File/library migration and redundancy | Workflow architecture/change-control fix |
| Tracking/timecode failure | Report | Basic operator fallback | Network/calibration/show-control diagnosis | Redundancy/system redesign |

---

## 9. Safety and authorization boundary table

| Topic | Education may teach | Education must not imply |
|---|---|---|
| Electrical theory | Concepts, ratings, hazards, documentation, load/power reasoning | Qualification for energized electrical work |
| Portable distro | Architecture, vocabulary, planning concepts, ETCP scope | Authority to connect/energize feeders or distro |
| Test instruments | Purpose, limitations, category/rating awareness | Permission to probe hazardous energized systems |
| Lifts | Hazard awareness, pre-use communication, role boundaries | Operator authorization/certification |
| Rigging interface | Hardware recognition, lighting attachment boundary, communication | Rigger qualification or structural decision authority |
| Fixture service | Cleaning/inspection/configuration per manufacturer; service awareness | Internal repair beyond employer/manufacturer authorization |
| Networks | Configuration/security hygiene/diagnosis | Permission to access venue/corporate networks outside authorization |
| Atmospherics | Product/venue/fire-alarm/exposure awareness | Authority to override alarms or venue rules |
| Lasers | Classification/regulation/hazard recognition | Laser-show operator qualification or variance authority |
| Life safety | Recognize emergency/egress interfaces and escalate | Permission to bypass or reprogram life-safety systems |

---

## 10. Documentation and paperwork map

### Minimum technician-readable set
- plot/position plan;
- fixture list;
- channel/fixture schedule;
- address/universe/patch sheet;
- cable/data route notes;
- focus notes;
- console/show-file identifier;
- change notes.

### Advanced/system documentation
- power one-line and distro schedule;
- network topology, switch/node inventory and IP/VLAN plan;
- sACN/Art-Net universe ownership;
- redundant-path plan;
- GDTF/MVR data versions;
- firmware/software versions;
- timecode/show-control map;
- equipment/spares list;
- commissioning/punch list;
- as-built record;
- recovery/backup locations;
- incident/failure/change log.

### Revision-control principle
A modern lighting system should be treated as a controlled data set. The physical rig, console patch, fixture-library data, CAD/MVR scene, network configuration and paperwork must describe the same system. If one changes, the handoff process should identify which other artifacts must be updated.

---

## 11. Shop-to-show workflow

**Advance → engineering/design → vendor/rental pull → shop prep/QC → packing/load sequencing → site receiving → build/hang/cable → power/data verification → network/console commissioning → focus/calibration → programming → rehearsal/show operation → change control → strike → return/QC/damage report → repair triage → asset/firmware/data update.**

### Shop-prep competency progression
- **L0/L1:** case/fixture/cable identification, careful handling, labeling, inventory assistance, visible-damage reporting.
- **L2:** fixture mode/address/firmware checks under procedure, functional check, cable/control testing with approved tools, packing/QC documentation.
- **L3/L4:** fleet-standard show prep, firmware/data consistency, network/control staging, diagnostics, repair triage, spares strategy.
- **L5/L6:** pull/quote/subrental/substitution decisions, prep standards, labor planning, contingency, vendor coordination, show-system acceptance.

---

## 12. Gap disposition table

| Subject | Disposition | Evidence result / remaining limit |
|---|---|---|
| Human visual perception/adaptation | closed | CIE provides current authoritative vision/photometry corpus |
| Glare/flicker/temporal modulation | closed | CIE publications cover temporal light modulation and glare |
| Photometry/measurement | closed | ISO/CIE 23539:2023 + CIE Division 2 |
| Advanced colorimetry | closed | CIE 015:2018 + IES TM-30 ecosystem |
| TLCI/SSI sector use | partially closed | Useful broadcast/film metrics; requires sector-specific primary supplementation before normative claims |
| LED dimming behavior | closed | ESTA E1.69 + manufacturer data |
| LED engineering/thermal/PWM | partially closed | Strong manufacturer/technical evidence; no single entertainment standard covers entire engineering stack |
| Automated fixture engineering | partially closed | Strong product/service documentation, but mechanisms vary by fixture family |
| Operator vs service repair boundary | closed | Manufacturer user maintenance/service/manual/factory-repair separation supports explicit boundary |
| Entertainment electrical body of knowledge | closed | ETCP EE/PPDT job-analysis frameworks + OSHA |
| NEC/NFPA detailed requirements | requires proprietary/paid standard | Use licensed standards for exact code text |
| Power quality/harmonics/nonlinear loads | partially closed | Legitimate advanced electrical topic; requires deeper electrical-engineering/ETCP/NFPA source pass before detailed curriculum |
| Electrical test instrumentation | partially closed | Appropriate as competency-awareness; exact procedures must remain qualification/task specific |
| Connector/cable ecosystem | context-specific | Ratings/uses vary by connector, region, listing and manufacturer |
| DMX physical/interoperability | closed | E1.11-2024 + E1.68-2024 |
| RDM | closed | E1.20-2025 + E1.37 family |
| sACN/ACN | closed | ESTA protocol family |
| RDMnet | closed | ESTA E1.33 and supporting publications |
| Art-Net | closed | Artistic Licence is primary protocol owner |
| Ethernet/IP fundamentals | closed | AVIXA + networking vendor/standards ecosystem |
| Lighting-network security | partially closed | AVIXA validates security as AV-network competency; venue/enterprise implementation remains policy-specific |
| Fiber | partially closed | Clearly part of advanced production networking; product/termination practices remain platform/task specific |
| Wireless DMX/RDM | context-specific | Official manufacturer evidence strong; RF implementation/environment differs |
| Console-independent programming | closed | Cross-platform comparison yields stable conceptual layer |
| Console platform fluency | context-specific | Must remain manufacturer/platform specific |
| Show-file/version/recovery practice | partially closed | Strong professional rationale; exact conventions are employer/show specific |
| MIDI Show Control/MTC | closed | MIDI Association primary specifications |
| OSC | closed | Official OSC specification available |
| SMPTE/LTC detail | partially closed | Timecode is clearly relevant; detailed SMPTE standards may require paid access |
| GDTF | closed | DIN SPEC 15800 / official GDTF docs |
| MVR | closed | DIN SPEC 15801 / official MVR docs |
| Drafting/paperwork | closed | Vectorworks/Lightwright + existing Package 12 workflow |
| Visualization limitations | context-specific | Capability depends on software and fixture data; must be validated against real rig |
| Pixel/media integration | partially closed | Clear platform ecosystem; discipline boundary varies by production |
| Manual followspot | partially closed | Established craft; needs dedicated source packet if detailed operator curriculum is built |
| Remote followspot/tracking | context-specific | Robe/zactrack/BlackTrax/Follow-Me implementations differ |
| Atmospherics | closed | ESTA Fog & Smoke standards family provides formal body of evidence |
| Laser regulation/awareness | closed | FDA/CDRH primary regulatory material |
| Outdoor/IP/weather | partially closed | OSHA/manufacturer sources establish principles; equipment-specific limits control actual use |
| Reliability/redundancy | partially closed | Strong system-engineering principle; acceptable architectures are show/venue specific |
| Commissioning/system acceptance | closed | AVIXA CTS-I plus lighting system workflow supports it |
| Emergency/egress/life-safety interfaces | partially closed | Awareness/authority boundary clear; detailed code obligations depend on adopted codes/AHJ |
| Theatre sector | closed | Existing packages + USITT/ETC ecosystem |
| Touring/concert sector | closed | Existing Package 12 + console/manufacturer ecosystem |
| Festival sector | closed | Existing Package 12 + event/outdoor/power evidence |
| Corporate AV | closed | AVIXA + existing Package 12 |
| Film/TV/broadcast | partially closed | Camera/flicker/color and wireless competencies clear; union/job-title boundaries need dedicated sector research |
| Worship | context-specific | Valid technical environment; staffing/training model varies widely |
| Fixed venue/install | closed | AVIXA/ETC architectural/system evidence |
| Rental/shop workflow | partially closed | Manufacturer prep/service tools + industry workflow support; detailed universal workflow does not exist |
| Vendor/advance/logistics | context-specific | Strong common workflow but employer/production-specific implementation |
| Formal troubleshooting method | closed | Cross-system reasoning model defensible; task authorization remains bounded |
| Lead/head-electrician leadership | partially closed | Core functions stable; titles/authority vary by sector/local/employer |
| Estimating/resource planning | partially closed | Legitimate advanced competency; formulas/practices vary by company and production |
| Sustainability | partially closed | Maintenance/lifecycle/energy evidence strong; no universal entertainment-lighting competency standard |
| Accessibility/inclusive visual design | partially closed | CIE supports glare/flicker/visual-field science; entertainment-specific accessibility guidance remains fragmented |
| Professional ethics/authorization boundaries | closed as Crew Blueprint framing | Supported by regulatory/manufacturer boundaries, but “ethics” itself is primarily instructional/professional framing |

---

## 13. Source registry

### Primary standards/regulators/certification
1. ESTA Technical Standards Program — Published Documents. https://tsp.esta.org/tsp/documents/published_docs.php
2. ESTA Control Protocols Working Group. https://tsp.esta.org/tsp/working_groups/CP/cp.html
3. ETCP — Entertainment Electrician Examination Content. https://etcp.esta.org/certify/examination_electrical.html
4. ETCP — Entertainment Electrician Certification. https://etcp.esta.org/certify/certify_electrical.html
5. ETCP — Portable Power Distribution Technician Examination Content. https://etcp.esta.org/certify/examination_ppdt.html
6. ETCP — PPDT Certification. https://etcp.esta.org/certify/certify_ppdt.html
7. OSHA — 29 CFR 1910 Subpart S index. https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910TableofContents
8. OSHA — 1910.305 Wiring Methods / Temporary Wiring / Flexible Cords. https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.305
9. OSHA — Personal Protective Equipment overview. https://www.osha.gov/personal-protective-equipment
10. OSHA — 1926.453 Aerial Lifts. https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.453
11. FDA — Laser Light Shows. https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/laser-light-shows
12. FDA — Laser Products and Instruments. https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/laser-products-and-instruments
13. CIE — ISO/CIE 23539:2023 Physical Photometry. https://cie.co.at/publications/photometry-cie-system-physical-photometry-3
14. CIE — CIE 015:2018 Colorimetry, 4th Edition. https://www.cie.co.at/publications/colorimetry-4th-edition
15. CIE — CIE 018:2019 Basis of Physical Photometry. https://www.cie.co.at/publications/basis-physical-photometry-3rd-edition
16. CIE — Division 1 publications. https://www.cie.co.at/technical-work/divisions/division1/division-publication
17. CIE — Division 2 publications. https://www.cie.co.at/technical-work/divisions/division2/division-publication
18. IES Learning — TM-30 education. https://elearning.ies.org/products/tm-30-in-2018-and-beyond-guidance-for-improving-color-quality
19. AVIXA — CTS. https://www.avixa.org/training-certification/certification/cts-certification
20. AVIXA — CTS-I. https://www.avixa.org/training-certification/certification/cts-i-certification
21. AVIXA — Networked AV Systems. https://ww2.avixa.org/training-section/networked-av-systems
22. AVIXA — Networking Technology Online. https://www.avixa.org/training-section/networking-technology-online/

### Control/data specifications
23. GDTF official specification — DIN SPEC 15800:2022-02 / GDTF 1.2. https://gdtf-share.com/help/developers/gdtf_1_2/index.html
24. MVR official specification — DIN SPEC 15801:2023-12 / MVR 1.6. https://gdtf-share.com/help/developers/mvr_1_6/index.html
25. GDTF/MVR help and FAQ. https://gdtf-share.com/help/ ; https://gdtf-share.com/landing/pages/faq.php
26. MIDI Association — MIDI Show Control. https://midi.org/midi-show-control
27. MIDI Association — MIDI 1.0 core specs / MTC. https://midi.org/midi-1-0-core-specifications
28. OpenSoundControl Specification 1.0. https://opensoundcontrol.stanford.edu/spec-1_0.html
29. Artistic Licence — Art-Net official documentation/specification ecosystem. https://artisticlicence.com/

### Manufacturer/platform training and documentation
30. ETC Training / LearningStage. https://www.etcconnect.com/education/ ; https://learningstage.etcconnect.com/learn
31. MA Lighting online manuals. https://www.malighting.com/training-support/online-manuals/
32. MA Lighting grandMA3 downloads/current release documentation. https://www.malighting.com/downloads/products/grandma3/
33. MA University first steps/e-learning. https://www.malighting.com/ma-university/first-steps/
34. Martin Training. https://www.martin.com/en/martin-training
35. Martin service-procedure library. https://www.martin.com/en-US/support_downloads/download_types/serviceprocedure
36. Martin Companion fixture management/diagnostics. https://www.martin.com/en-US/product_families/companion
37. Martin U.S. repair/service channels. https://www.martin.com/en-US/support/repairs?geo=us
38. Robe Toolkit / technical documentation update ecosystem. https://www.robe.cz/robe-toolkit
39. Robe maintenance/service documentation announcements. https://www.robe.cz/news/maintenance-and-regular-inspections-gdtf-libraries-and-other-updates
40. City Theatrical publication/white-paper library. https://www.citytheatrical.com/publications/2
41. ESTA Fog & Smoke Working Group. https://tsp.esta.org/tsp/working_groups/FS/fs.html
42. Vectorworks University — Spotlight certification/training ecosystem. https://university.vectorworks.net/
43. Lightwright user documentation. https://www.lightwright.com/docs/user-guide/

### Existing Crew Blueprint evidence
44. `research/07-ground-hand-lighting-support.md` — general-hand support boundary.
45. `research/12-lighting-production-flow-research-packet.md` — production lifecycle, advancing, documentation, power/network/programming workflow and sector context.
46. `research/12A` companion lighting curriculum package — interpret only as curriculum synthesis, not primary evidence.

---

## 14. Unresolved questions and future targeted research

1. **Film/TV/broadcast labor-role mapping:** a dedicated U.S. primary-source pass should distinguish electric, grip, board operator, programmer, dimmer/lighting-console and rigging boundaries across relevant IATSE locals and production types.
2. **TLCI/SSI normative use:** determine which current primary bodies own/maintain these metrics and where they are formally used versus informally specified.
3. **Power quality for LED-heavy temporary systems:** a specialist electrical packet should go deeper into harmonics, neutral loading, leakage, power factor and measurement using ETCP/NFPA/IEEE/manufacturer primary sources, while avoiding procedural energized-work instruction.
4. **SMPTE timecode standards:** exact current SMPTE documents and provisions may require paid access; establish licensed references before detailed implementation claims.
5. **Accessibility in entertainment lighting:** CIE provides strong visual-science evidence, but entertainment-specific inclusive-design standards are fragmented. A dedicated accessibility packet could combine CIE, accessibility organizations, venue practice and health guidance without overstating consensus.
6. **Followspot operator craft:** manual followspot deserves a dedicated source packet if it becomes its own practical course; this package establishes the domain but does not attempt to standardize detailed operator technique.
7. **Architectural controls/life safety:** exact DALI, emergency-lighting, fire-alarm and adopted-code obligations depend on jurisdiction/system. Build a separate installed-lighting packet before teaching commissioning authority.
8. **Rental-shop workflow:** there is strong product/manufacturer evidence for QC, firmware, maintenance and service triage, but no single universal shop workflow. Curriculum should label company-specific SOPs accordingly.

---

## 15. Crew Blueprint implications

### A. Build the body of knowledge before adding more course numbers
The lighting pathway should be designed from this competency taxonomy rather than forcing research into Course 1/Course 2 boundaries. Topics recur at increasing depth.

Example:
- **DMX L0/L1:** identify DMX/data chain and address concept; do not reconfigure without direction.
- **DMX L2:** patch/address, topology, termination, splitters and ordinary fault isolation.
- **DMX/RDM L3/L4:** interoperability, protocol testing, gateways, RDM management and network transport.
- **L5/L6:** design, redundancy, documentation and standards-level system decisions.

### B. Preserve branching careers
Do not force every lighting worker through one promotion ladder. At L3/L4, paths branch into entertainment electrics, programming, systems/networking, fixture/service, followspots/tracking, film/broadcast, architectural/install and design.

### C. Use source type labels in curriculum development
Each claim should be tagged internally as one of:
- law/regulation;
- consensus standard/specification;
- certification/job analysis;
- manufacturer instruction;
- employer/union/local practice;
- common convention;
- Crew Blueprint recommendation.

This prevents a manufacturer workflow or one local’s rule from becoming a false universal standard.

### D. Practical competency gates
Any task involving specialized electrical work, lift operation, rigging, internal repair, laser operation, life-safety systems or other safety-critical authority should include a visible curriculum boundary: **knowledge is not authorization**.

### E. Add explicit system-thinking objectives
A competent lighting technician should eventually be able to model the system as layers:

**creative intent → documentation → physical position/fixture → power → control/data → network transport → console/show file → show control/synchronization → human/camera output → monitoring/recovery.**

Troubleshooting and leadership should be taught using that same layered model.

### F. Recommended next research sequence
1. Film/TV/broadcast lighting career and labor-role packet.
2. Entertainment electrical power-quality/diagnostics packet.
3. Followspot + remote tracking competency packet.
4. Architectural/install controls + commissioning/life-safety interface packet.
5. Accessibility/flicker/glare inclusive-design packet.

---

## Final quality test

- **First-call worker:** covered — identification, support scope and stop/ask boundaries are explicit.
- **Developing technician:** covered — normal power/data/fixture chain, documentation and systematic troubleshooting are mapped without granting specialist authority.
- **Entertainment electrician:** covered as a competency/credential benchmark through ETCP/OSHA; detailed paid-code content remains gated.
- **Programmer:** covered — console-independent concepts plus major platform branches.
- **Systems technician:** covered — DMX/RDM/sACN/Art-Net/RDMnet/IP/wireless/GDTF/MVR/security/redundancy/diagnostics.
- **Lead:** covered — prep, QC, labor, change control, recovery and documentation.
- **Designer:** covered — visual science, color, photometry, documentation, programming/system constraints and production communication.
- **Sector breadth:** covered at mapping level for theatre, touring, festivals, corporate, film/TV/broadcast, worship, fixed venues, rental shops and installed/architectural systems; film/TV labor-role details remain a documented partial gap.
- **Advanced areas:** represented — GDTF/MVR, tracking, media, power quality, network security, fiber, commissioning and redundancy.
- **Safety boundaries:** explicit throughout.

**Overall disposition:** The Lighting Department body-of-knowledge map is now broad enough to support curriculum architecture. Remaining gaps are bounded specialist packets rather than unknown missing domains.