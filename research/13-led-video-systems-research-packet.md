# 13 — Large-Scale LED Video Systems: Structured Research Packet

**Archived 2026-08-16.** Pulled from Drive (`Large-Scale_LED_Video_
Systems_Research_Packet.docx`) into the repo per owner directive. This is
the Research Packet that `13A-led-video-systems-rough-draft-curriculum.md`
and the live `pathway-video-02-led-video-systems.html` course (Video
Pathway Course 2) were built from. Its real citations (Section 19) are
what backs that course's live "Sources & Standards" section.

De-dup note: this Research Packet had only one copy in Drive (unlike the
derived Rough Draft Curriculum, which was duplicated across 3 locations —
see `10_content_research_queue.md`'s 2026-08-16 entry for that finding).

---

# STRUCTURED RESEARCH PACKET

## Large-Scale LED Video Systems for Live Production

Integration, operation, logistics, infrastructure, risk, and equipment-selection framework

| | |
|---|---|
| Pipeline position | Researcher → Draft Writer |
| Intended use | Source-of-truth packet for curriculum, quizzes, glossary, examples, and later Guardian review |
| Primary environments | Arenas, stadiums, large corporate events, outdoor festivals |
| Document status | Research-stage technical reference; not final curriculum or engineering approval |

Prepared for The Crew Blueprint content-development pipeline

> **IMPORTANT SCOPE LIMITATION:** This packet does not replace engineered rigging plans, structural calculations, electrical designs, manufacturer instructions, venue rules, permits, or decisions made by qualified riggers, electricians, engineers, employers, or authorities having jurisdiction.

## 1. Scope and Research Boundary

This packet addresses temporary and semi-temporary direct-view LED video systems used in arenas, stadiums, large corporate events, outdoor music festivals, and comparable large-format live-production environments.

LED panel selection; image-processing architecture; power and data distribution; structural support; environmental exposure; operating workflow; troubleshooting; major safety controls.

A central research finding is that an LED wall is not one device. It is an integrated system consisting of: structural support, panel hardware, panel-level power supplies, receiving electronics, processor or controller equipment, source and playback systems, network or transport infrastructure, electrical distribution, cooling and environmental controls, operational personnel.

Failures often occur at the interfaces between these subsystems rather than inside the LED modules themselves.

## 2. Core Terminology

| Term | Technical meaning | Operational significance |
|---|---|---|
| LED panel / tile / cabinet | Modular enclosure containing LED modules, power supplies, receiving electronics, connectors, and mechanical locks | Basic building block of the wall |
| LED module | Smaller serviceable assembly containing the LED pixels and driver electronics | Often replaceable from front or rear |
| Pixel pitch | Center-to-center distance between adjacent pixels, usually stated in millimeters | Primary determinant of pixel density and practical viewing distance |
| Native resolution | Total physical pixel count of the assembled wall | Defines the raster the processor must map |
| Nit | One candela per square meter; a unit of luminance | Used to describe display brightness |
| Refresh rate | Frequency at which LED driver electronics refresh the displayed image | Influences flicker, scanning artifacts, and camera compatibility |
| Scan rate | Multiplexing method used to drive groups of LEDs | Affects brightness, efficiency, and camera performance |
| Sending device / processor | Converts source video into data distributed to LED receiving cards | Performs scaling, mapping, color processing, synchronization, and often redundancy |
| Receiving card | Electronics inside a cabinet or module that receives mapped LED data | Drives panel outputs according to configuration files |
| Mapping | Assignment of processor outputs and data paths to physical cabinets | Incorrect mapping produces missing, duplicated, reversed, or displaced imagery |
| Brompton Tessera ecosystem | LED-processing and receiving-card platform common in high-end live production | Often selected for color management, camera workflows, monitoring, and redundancy |
| NovaStar | Family of LED controllers, processors, sending cards, and receiving cards | Common across rental, installation, touring, and corporate systems |
| Genlock | Synchronization of video devices to a common timing reference | Helps avoid image tearing and timing incompatibilities |
| Frame synchronization | Buffering and timing conversion used to align asynchronous sources | Stabilizes source switching but can add latency |
| EDID | Display-identification data communicated to a video source | Controls source resolution, refresh rate, color format, and compatibility |
| IP rating | Ingress-protection classification for resistance to solid objects and water | Relevant to outdoor suitability, but not a complete weather approval |
| Redundancy | Backup signal, processor, power, or data path designed to take over after a failure | Reduces single points of failure |
| Ground support | Structure supported from the ground using towers, frames, bases, ballast, or outriggers | Requires verified bearing capacity, ballast, stability, and environmental limits |
| Flown wall | LED array suspended from overhead rigging points or temporary roof systems | Requires load calculations, approved hardware, hoists, and qualified rigging personnel |
| Dead load | Permanent gravitational weight of the LED system and supporting hardware | Must include panels, cables, bumpers, rigging, and related components |
| Dynamic load | Load produced by movement, hoisting, impact, wind, acceleration, or oscillation | May exceed the static weight of the wall |
| Service loop | Additional cable length provided for access, motion, routing, or repair | Must not become a snagging or load-transfer point |

## 3. System Architecture

### 3.1 Functional Signal Chain

Playback or live source → switcher or screen-management system → optional router/converter/distribution → LED processor/controller → copper or fiber transport → receiving cards → hub/distribution boards → LED driver ICs → physical pixels

Common upstream sources include media servers, presentation computers, broadcast cameras, image-processing switchers, graphics systems, playback decks, streaming systems, and confidence-monitor feeds. Common supporting systems include video routers, EDID managers, frame synchronizers, matrix switchers, format converters, multiviewers, test-pattern generators, and monitoring scopes.

### 3.2 Media Server Role

Content playback; real-time compositing; synchronized multi-output playback; canvas management and warping; keying; timecode synchronization; generative graphics; integration with lighting, automation, or show control.

The media server does not ordinarily replace the LED processor. The server renders content; the processor adapts, maps, and distributes that content to the physical LED raster.

### 3.3 Switcher or Screen-Management Role

Source selection; picture-in-picture layouts; scaling; seamless transitions; routing; keying; backup-source selection; distribution to one or more processors.

| System class | Representative chain |
|---|---|
| Simple | Laptop → processor → wall |
| Standard corporate | Presentation computers and playback → switcher → processor → wall |
| Large show | Sources/media servers → router → redundant switcher/screens system → primary and backup processors → redundant LED-data paths → wall |

## 4. Technical Specification Framework

### 4.1 Pixel Pitch

Pixel pitch is the physical spacing between pixel centers. Smaller pitch generally provides higher pixel density, greater resolution in a given area, and reduced visible pixel structure at close range. Larger pitch reduces pixels per square meter and is often acceptable at greater audience distances.

| Environment | Common pitch range | Selection logic |
|---|---|---|
| Executive meeting, broadcast backdrop, close corporate viewing | Approx. 0.9–2.6 mm | Fine text, camera use, short viewing distances |
| Ballroom general session | Approx. 1.5–3.9 mm | Balance of close viewing, budget, and camera performance |
| Arena IMAG or scenic wall | Approx. 2.6–5.9 mm | Moderate pitch is acceptable at typical audience distances |
| Stadium scenic or long-view display | Approx. 3.9–10+ mm | Large scale and long viewing distances |
| Outdoor festival main-stage wall | Approx. 3.9–8.9 mm | Brightness, weather resistance, weight, and distance dominate |
| Transparent or mesh scenic product | Often larger effective pitch | Wind permeability and transparency prioritized over fine detail |

A smaller pitch does not automatically produce a better system. It can increase panel count, total pixels, processor-port use, power density, thermal output, setup time, cost, and sensitivity to module variation.

### 4.2 Viewing Distance

Rules such as "one meter of viewing distance per millimeter of pitch" are useful only as rough starting points. Actual perceived quality depends on visual acuity, content complexity, text size, contrast, brightness, ambient light, viewing angle, image motion, and whether the display is viewed by eye or camera.

### 4.3 Brightness

| Application | Broad luminance range |
|---|---|
| Fine-pitch indoor corporate display | Approx. 600–1,500 nits |
| General indoor rental panel | Approx. 800–2,000 nits |
| Outdoor covered stage | Approx. 3,500–5,000+ nits |
| Direct-sun outdoor display | Often 5,000–8,000+ nits |

Running a wall at maximum output is not always desirable. Excessive brightness can overpower cameras, wash out black levels, increase power draw and heat, create visual discomfort, and expose calibration inconsistencies.

### 4.4 Refresh Rate and Camera Compatibility

High refresh rates are generally advantageous for broadcast capture, IMAG, high-frame-rate cameras, and slow-motion cameras. A published refresh rate alone does not fully predict camera performance: scan ratio, LED driver design, camera shutter speed and shutter angle, frame rate, processor synchronization, PWM behavior, camera sensor readout. Typical symptoms include horizontal bands, dark scan lines, brightness pulsing, moiré, color breakup, and rolling-shutter interactions.

### 4.5 Color Depth and Processing

Additional bit depth is most valuable in dark gradients, low-brightness content, skin tones, smooth fades, and camera reproduction. The entire chain must support the intended precision; the processor cannot restore data already lost upstream.

### 4.6 IP Ratings

An IP rating has two digits: the first addresses solid-object ingress and the second addresses water ingress. The rating may apply only to a particular side of a cabinet and depends on correctly installed covers, seals, connectors, and modules. Does not establish wind resistance. Does not guarantee operation in every storm. Does not eliminate qualified supervision. Must be evaluated with drainage, connector orientation, condensation, humidity, dust, and temperature.

### 4.7 Weight and Structural Loads

LED wall weight includes more than the published panel weight. System dead load may include cabinets, flying bars, support members, bracing, cabling, cable bridges, distribution boxes, weather covers, service platforms, and secondary safety components. Point loads; distributed loads; eccentric loading; torsion; dynamic hoisting forces; wind pressure; load-path continuity; support-point capacity; permissible deflection.

## 5. Indoor Versus Outdoor Systems

| Factor | Indoor corporate or arena use | Outdoor festival or stadium use |
|---|---|---|
| Brightness priority | Moderate; image quality and black level often dominate | High; sunlight and ambient exposure dominate |
| Pixel pitch | Frequently finer | Frequently moderate or coarse |
| IP protection | May be minimal | High front and rear environmental protection generally preferred |
| Weight | Important for rigging and labor | Important for rigging, wind response, transport, and ground support |
| Thermal exposure | HVAC and venue temperature may help | Direct sun and high ambient temperature can materially reduce performance |
| Wind exposure | Usually limited | Major design and operational factor |
| Water exposure | Usually low but not absent | Rain, condensation, drainage, wet ground, and connector protection are central |
| Rigging | Existing venue points and house systems often used | Temporary roof, towers, stage structure, or engineered ground support |
| Power | Building service is common | Generators and temporary distribution are common |
| Signal distance | Often moderate | Long-distance fiber paths are common |
| Camera use | Frequent | Frequent, with added daylight challenges |
| Redundancy | Based on show criticality | Strongly recommended due to access and recovery difficulty |

## 6. Comparative Venue Analysis

### 6.1 High-Resolution Corporate Event
Clean presentation graphics, readable small text, accurate color, consistent brightness, low visual noise, and strong camera reproduction. Typical pressures: close front-row viewing, wide PowerPoint canvases, unusual aspect ratios, multiple presentation sources, rapid executive transitions. Common risks: incorrect EDID, unsupported resolution, scaling softness, insufficient processor canvas, excessive camera brightness, visible calibration differences.

### 6.2 Arena Concert
High-impact scenic imagery, IMAG, synchronized content, and show-control integration. Typical pressures: flown walls, moving or automated LED, complex media-server outputs, high camera use, touring repeatability. Common risks: mapping errors, damaged connectors, incomplete backup paths, hoist imbalance, fiber contamination, show-file mismatch.

### 6.3 Stadium Show
Visibility across extreme distances, large canvases, broad viewing angles, and reliable long-haul distribution. Typical pressures: very high pixel counts, multiple display zones, long fiber paths, large temporary structures, permanent/temporary system coordination. Common risks: underestimated processing capacity, timing mismatch, poor coordination, cable-path damage, weather exposure, complex shutdown constraints.

### 6.4 Outdoor Festival
Daylight visibility, rapid build and strike, weather resilience, and continuous operation across multiple acts. Typical pressures: temporary power, variable weather, limited repair windows, dust and mud, guest-artist changeovers. Common risks: wind exposure, inadequate ballast, water ingress, overheating, contaminated connectors, generator problems, unverified inputs.

## 7. Equipment Selection Decision Framework

Step 1: Define audience geometry — nearest and farthest viewers, horizontal and vertical viewing angles, elevation, and sightlines. Step 2: Define content requirements — text size, graphic detail, IMAG, frame rate, color requirements, raster dimensions, and camera use. Step 3: Define environmental conditions — indoor/outdoor exposure, sunlight, rain, wind, dust, temperature, altitude, and operating duration. Step 4: Define structural mode — ground-supported, wall-supported, flown, roof-supported, mobile trailer, or custom engineered structure. Step 5: Calculate total raster — cabinets wide/high, pixels per cabinet, total width/height in pixels, and total pixel count. Step 6: Determine processing architecture — inputs, processor model, output count, fiber conversion, backup processor, and redundancy behavior. Step 7: Determine power architecture — nominal and maximum consumption, branch loading, voltage, phase arrangement, connectors, and backup. Step 8: Evaluate serviceability — front/rear service, access, spare panels, spare electronics, cable access, and safe lowering method. Step 9: Confirm camera performance — shutter compatibility, moiré risk, refresh behavior, color rendering, gray scale, and brightness. Step 10: Perform compliance review — engineering, rigging, electrical requirements, fire-code issues, weather planning, egress, and approvals.

## 8. Comparative Equipment Categories

| Equipment type | Strengths | Limitations | Optimal uses |
|---|---|---|---|
| Fine-pitch modular LED | High pixel density, close-view quality, strong presentation graphics | Higher cost, delicate modules, greater processing density | Corporate, broadcast, studios, premium scenic walls |
| General rental LED | Flexible, touring-friendly, moderate pitch, fast assembly | May not satisfy very close viewing | Arenas, corporate general sessions, concerts |
| Outdoor high-brightness LED | Daylight output, weather resistance | Heavier, coarser pitch, more power, sometimes louder cooling | Festivals, stadiums, outdoor public events |
| Transparent LED | Transparency, scenic depth, reduced visual mass | Lower fill factor and image density | Scenic applications, retail, architectural effects |
| LED mesh / blow-through product | Reduced wind area, lower mass, transparency | Larger effective pitch, lower image density | Outdoor scenic and long-distance viewing |
| Curvable rental panel | Concave or convex geometry | Configuration limits and alignment complexity | Concert and corporate scenic design |
| Floor LED | Load-bearing face, interactive use | Slip, impact, load, and service concerns | Exhibits, stages, interactive environments |
| Mobile LED trailer | Rapid deployment, integrated support | Fixed proportions and limited creative geometry | Festivals, sports, public gatherings |

## 9. Power Distribution

### 9.1 Power Calculation Principles

Basic relationships include watts = volts × amperes and current = power ÷ voltage for simple single-phase loads. Three-phase calculations require the correct line voltage, phase configuration, load model, and qualified electrical design. Maximum consumption; typical or average consumption; inrush current; power factor; supply-voltage range; maximum cabinets per circuit or power link.

Using average consumption as though it were the guaranteed maximum is a common and hazardous planning error.

### 9.2 Phase Balancing

Large LED systems often use three-phase distribution. Loads should be distributed to avoid severe imbalance, overloaded neutrals, nuisance tripping, voltage instability, and generator stress. LED power supplies are nonlinear electronic loads, so harmonic current, neutral loading, and power factor may be relevant.

### 9.3 Power Sequencing

Staged energization; circuit-by-circuit turn-on; processor/network startup before display power where specified; controlled power distribution; manufacturer-defined sequence.

### 9.4 Electrical Protection

Possible controls include overcurrent protection, equipment grounding, GFCI or other ground-fault protection where applicable, suitable disconnects, weather-rated distribution, cable protection, and daily inspection of temporary cabling.

**Reference:** [OSHA 29 CFR 1926.404](https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.404)

### 9.5 Outdoor Electrical Systems

Elevated connectors; drip loops; water-resistant connections; protected distribution; cable ramps; puddling and drainage control; physical barriers; qualified supervision.

## 10. Data Distribution: Copper Versus Fiber

### 10.1 Copper Ethernet-Type Cabling
Common for short processor-to-wall links; common for cabinet-to-cabinet jumps; inexpensive and field replaceable; subject to distance limits, interference, connector damage, and grounding concerns. Proprietary LED data may use familiar Ethernet connectors and cabling without being ordinary IP network traffic. Technicians must not assume any network switch or conventional network topology will work.

### 10.2 Fiber
Preferred for long-distance processor links; useful between front of house and stage; immune to electromagnetic interference; provides electrical isolation; requires correct mode, wavelength, connector type, bend radius, cleaning, and transceivers.

### 10.3 Redundant Data Paths
Primary and backup processor; dual processor feeds; loop redundancy; dual cabinet inputs; alternate fiber routes; automatic or manual failover. Redundancy must be tested. A connected backup cable does not prove that takeover will occur or that its mapping and configuration are current.

## 11. Structural Support and Rigging

### 11.1 Ground-Supported Walls
Substrate bearing capacity; floor loading; soil condition; grade and slope; ballast design; overturning and sliding resistance; wall geometry; wind area; exclusion zones. Indoor ground support still requires structural review. Ballroom floors, stages, risers, and convention-center floors may have specific loading limitations.

### 11.2 Flown Walls
Approved pick locations; bumper capacity; maximum panel quantity; allowable curvature; hoist capacity; point-load capacity; equalized loading.

### 11.3 Temporary Outdoor Structures
Temporary structures require minimum design and performance parameters, engineered load paths, site-appropriate support, and code coordination. LED walls must be evaluated as part of the complete structural system.

### 11.4 Load Path
LED cabinet → cabinet locks/frame → flying bar or support frame → truss/hoist/tower/base → venue structure or ground → foundation/slab/soil

### 11.5 Dynamic Effects
Hoisting and stopping; uneven motor movement; wall rotation; automated motion; wind gusts; impact; emergency lowering.

## 12. Wind and Weather

### 12.1 Wind Load
Wind speed; exposed area; solidity ratio; permeability; drag coefficient; orientation; height; shielding; gust effects; structural geometry. Wind force is not safely determined by informal rules or a simple panel-area estimate. The complete system requires engineering based on the applicable standard, local code, manufacturer data, and site conditions.

### 12.2 Operational Wind Thresholds
Increased monitoring; suspended work; personnel evacuation; lowering the wall; removing panels; opening blow-through sections; abandoning the structure. The weather plan must assign who monitors, what source is authoritative, who decides, how decisions are communicated, and how long protective actions require.

### 12.3 Rain and Water
Connector inspection; cap management; drainage planning; cable elevation; protected distribution; drying procedures; post-exposure inspection.

### 12.4 Heat
Automatic brightness reduction; color shift; power-supply shutdown; receiving-card failure; accelerated aging; intermittent image faults.

### 12.5 Lightning
Lightning risk must be governed by the event's established weather and emergency plan. LED technicians should not improvise lightning thresholds.

## 13. Standard Operational Workflow

### 13.1 Advance and Preproduction
Display geometry (wall width and height, cabinet model and orientation, curvature, total raster, trim height, aspect ratio); structural information (support mode, total system weight, bumper/support configuration, pick points, hoists, engineering documents, ballast, access plan); video information (processor model, receiving-card ecosystem, input formats, output raster, frame rate, color format, genlock, backup signal, content specifications); power information (voltage, frequency, connector type, circuit quantity, maximum load, distro location, generator source, phase plan, cable distances); environmental information (indoor/outdoor, temperature range, rain exposure, wind plan, direct sunlight, dust, overnight protection); personnel (LED lead, processor technician, video engineer, rigger, electrician, media-server operator, stage or production manager).

### 13.2 Receiving and Inspection
Verify panel model and batch; inspect frames and locks; inspect power and data connectors; verify spares; identify damaged modules; verify processor/receiver compatibility; confirm rigging hardware.

### 13.3 Mechanical Build
Establish the support structure; confirm level, plumb, and approved configuration; install the first row or column; verify mechanical locks; continue in the approved sequence; manage cable routing; inspect alignment; add braces/support components; perform mechanical review before elevation or public exposure.

### 13.4 Power and Data Cabling
Correct input/output direction; supported cabinet count per data port; supported panel count per power feed; strain relief; locked connectors; protected fan-out points; clearly identified cable paths.

### 13.5 Processor Configuration
Verify receiver configuration; establish wall raster; define topology; map ports; configure input resolution; set frame rate; confirm color settings; establish redundancy; save the final configuration.

### 13.6 Initial Test
Low-brightness black; low-brightness gray; red; green; blue; white; gradients; grid or cabinet-boundary pattern; motion pattern; actual show content.

### 13.7 Show Operation
Source presence; processor status; cabinet errors; temperature; fiber health; backup readiness; power distribution; environmental conditions.

### 13.8 Shutdown and Load-Out
Stop show feeds; save configuration; follow approved power-down sequence; inspect for heat or water exposure; disconnect systematically; protect connectors; lower or dismantle under control; isolate damaged components; document faults.

## 14. Troubleshooting Framework

Troubleshooting should move from broad system boundaries toward local components.

### 14.1 Establish the Failure Category
Total power failure; partial power failure; total signal loss; partial signal loss; incorrect mapping; intermittent fault; color or brightness issue; synchronization issue; physical damage.

### 14.2 Total Wall Is Dark
Processor power; input detection; output enabled; panel power; breakers/disconnects; brightness/blackout; correct show file; expected processor outputs.

### 14.3 Entire Data Chain Missing
Failed processor output; failed fiber/copper home run; wrong port mapping; failed first cabinet; damaged pass-through; incorrect redundancy mode.

### 14.4 One Cabinet Is Dark
No power; failed power supply; failed receiver card; failed hub board; loose internal cable; incorrect configuration; damaged panel.

### 14.5 One Module Is Dark or Incorrect
Loose module connection; failed module; failed hub output; damaged pins; calibration mismatch.

### 14.6 Image Is Scrambled
Incorrect receiver file; wrong cabinet resolution; wrong scan configuration; mapping error; firmware incompatibility; data corruption.

### 14.7 Flicker or Camera Banding
No synchronization; unsuitable camera shutter; panel refresh behavior; low-quality converter; frame-rate mismatch; inappropriate driver settings.

### 14.8 Intermittent Failure
Damaged jumpers; partially seated connectors; heat-sensitive power supplies; dirty fiber; bent pins; vibration; moisture; overloaded circuits.

### 14.9 Diagnostic Discipline
Use known-good cables and panels; use test patterns and diagnostics; measure power only within qualification; document substitutions; change one variable at a time whenever practical.

## 15. Pre-Flight Checklist for a First-Time LED Wall Setup

**Documentation:** Confirm panel manufacturer and model; obtain panel and processor manuals; obtain approved rigging or ground-support plan; confirm wall dimensions and total raster; confirm input resolution and frame rate; confirm weather and emergency plans; confirm qualified person responsible for power; confirm qualified person responsible for rigging.

**Equipment:** Correct processors and receiver ecosystem; correct configuration files; primary and backup signal cables; correct fiber type and transceivers; spare copper jumpers; spare panels and modules; spare power supplies and receiving cards; approved lifting/support hardware; connector caps and weather protection; test-pattern source; monitoring computer and required software.

**Site:** Verify floor, roof, stage, or ground-support capacity; confirm access for cases, carts, lifts, and personnel; keep egress clear; confirm rear-service clearance; confirm cable routes; confirm power source and distro location; confirm FOH-to-stage signal route; confirm environmental exposure; confirm exclusion zones.

**Before Applying Power:** Inspect all power and data connections; verify cabinet count per power circuit; verify cabinet count per data output; verify grounding/distribution under qualified supervision; check for crushed or pinched cables; confirm dry/protected connectors; confirm processor configuration; confirm emergency disconnect location; clear personnel from hazardous areas.

**Before Show:** Test all source inputs; test backup source; test backup processor/data path; run full-panel color tests; verify brightness with lighting and cameras; confirm raster and scaling; check temperatures and errors; document failed or marginal components; confirm communications; review weather or shutdown triggers.

## 16. Beginner Traps That Commonly Cause Failures

Treating all LED panels as interchangeable; using the wrong receiver configuration; confusing physical size with resolution; exceeding port capacity; designing power from average consumption; ignoring inrush current; assuming an IP rating means rainproof; assuming fiber is automatically reliable; building without a known first cabinet; failing to label; testing redundancy only on paper; neglecting calibration; ignoring camera tests; making structural decisions from panel weight alone; allowing cables to carry mechanical load.

## 17. Misconceptions About LED Wall Reliability

"LED is more reliable than projection, so it cannot fail." "If one panel fails, only that panel is affected." "Outdoor-rated means safe in any weather." "Fiber eliminates all signal problems." "Higher brightness always means a better outdoor image." "Redundant means automatic." "A clean image proves the structure and power are safe."

## 18. Facts, Established Principles, and Practical Uncertainties

### 18.1 Verified Facts
Pixel pitch is the center-to-center spacing of LED pixels. Native wall resolution is determined by the physical pixel count of the assembled cabinets. IP ratings address ingress protection, not total system weather safety. LED systems require both power and data distribution. Manufacturer cabinet, port, hanging, and power-link limits must be followed. Temporary outdoor structures require structural analysis and site-appropriate controls. OSHA construction rules include relevant temporary electrical requirements. ANSI E1.21 addresses temporary ground-supported outdoor entertainment structures. ANSI ES1.7 addresses live-event weather preparedness. ANSI E1.58 addresses portable stage and studio electrical equipment used outdoors.

### 18.2 Established Engineering and Operational Principles
Load-path continuity is required for safe structural support. Outdoor walls require site-specific wind assessment. Processor mapping must match physical topology. Power design should use maximum rated demand and applicable electrical practices. Phase balancing reduces uneven loading in three-phase systems. Fiber is generally preferable for long-distance backbone distribution. Redundancy is meaningful only when configured and tested. Camera performance requires actual camera testing. Troubleshooting improves when one variable is changed at a time. Spare panels are most useful when matched in hardware, firmware, and calibration.

### 18.3 Practical Uncertainties
Ideal pixel pitch; minimum practical viewing distance; required brightness; acceptable processor latency; wind-action thresholds; ballast quantity; pick-point loads; maximum cabinets per circuit; maximum cabinets per processor port; thermal derating; generator size; camera compatibility; required spare percentage; whether a panel is acceptable outdoors. These cannot be resolved without exact product, site, jurisdiction, wall geometry, support system, weather, content, and production data.

## 19. Standards and Regulatory Map

ANSI E1.21-2024: Minimum design and performance requirements for temporary ground-supported outdoor entertainment structures. [Source](https://tsp.esta.org/tsp/documents/published_docs.php)

ANSI E1.56-2026: Permanent rigging support points attached to facility structures. [Source](https://tsp.esta.org/tsp/documents/published_docs.php)

ANSI E1.6 family: Powered-hoist systems, chain hoists, selection, inspection, maintenance, controls, and use. [Source](https://tsp.esta.org/tsp/documents/published_docs.php)

ANSI ES1.7-2021: Weather-preparedness strategies for live events and temporary event structures. [Source](https://tsp.esta.org/tsp/documents/published_docs.php)

ANSI E1.58: Temporary outdoor use of portable stage and studio electrical equipment. [Source](https://tsp.esta.org/tsp/documents/published_docs.php)

OSHA 29 CFR 1926.404: Wiring design, grounding, overcurrent protection, generators, GFCI, and assured grounding in covered construction settings. [Source](https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.404)

NFPA 70 / NEC: Potentially relevant provisions for temporary wiring, cords, overcurrent protection, grounding, generators, signs, and stage/studio equipment. [Source](https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70)

AVIXA standards: Audiovisual system performance, documentation, measurement, verification, and commissioning. [Source](https://www.avixa.org/standards)

**Product Certification and Listing:** Relevant frameworks may include UL, ETL, CSA, CE, FCC, and other nationally recognized or regional product-certification schemes. A mark must be checked against the specific product, intended environment, and conditions of use.

## 20. High-Priority Research Topics for the Draft Writer

Priority 1: LED processor architecture — Brompton Tessera, NovaStar, receiver configuration, port loading, canvas limits, redundancy, monitoring, firmware compatibility. Priority 2: Power calculations — maximum versus average consumption, single- and three-phase systems, phase balancing, inrush, generator selection, power factor, harmonics. Priority 3: Structural load paths — panel rating, flying-bar rating, hoists, points, truss, temporary structures, ballast, and ground bearing. Priority 4: Wind planning — design wind versus operational wind, gusts, solidity, blow-through panels, lowering plans, command authority. Priority 5: Camera and LED interaction — refresh rate, scan rate, shutter angle, genlock, moiré, brightness, and calibration. Priority 6: Configuration-file management — naming, version control, backups, firmware records, receiver files, calibration files, and mapping files. Priority 7: Fiber hygiene and testing — mode, optical budgets, connector inspection, cleaning, bend radius, redundancy, and fault isolation. Priority 8: Outdoor electrical deployment — weatherproof connectors, temporary distribution, GFCI, grounding, generators, cable protection, and qualified-person boundaries. Priority 9: Preventive maintenance — modules, connector wear, frame deformation, power supplies, firmware control, calibration drift, and post-rain service. Priority 10: Commissioning and acceptance testing — structural sign-off, electrical verification, mapping tests, test rasters, redundancy tests, camera tests, thermal observation, and handoff.

## 21. Suggested Source Hierarchy for Downstream Verification

Applicable law and adopted codes; authority-having-jurisdiction requirements; stamped engineering documents; current ANSI/ESTA standards; OSHA regulations and interpretations; current NFPA/NEC provisions; manufacturer manuals and configuration guides; venue rigging and electrical rules; AVIXA performance and commissioning standards; qualified industry procedures; anecdotal technician practice.

Where sources conflict, the downstream system should identify jurisdiction, legal hierarchy, equipment model, scope of each document, and the responsible qualified authority rather than selecting the most convenient value.

## 22. Draft-Writer Handoff Notes

The downstream curriculum should preserve the following distinctions: processor is not synonymous with media server; pixel pitch is not synonymous with image quality; outdoor rating is not synonymous with all-weather approval; total weight is not synonymous with rigging-point load; processor port count is not synonymous with pixel capacity; average consumption is not synonymous with design load; backup cabling is not synonymous with tested redundancy; a functioning image is not evidence of structural or electrical compliance. A technician should not approve structural, electrical, or weather-critical decisions outside their qualification and authority.

The Draft Writer may convert these findings into introductory LED-system lessons, processor and signal-flow lessons, power-distribution lessons, rigging-awareness lessons, outdoor-system lessons, troubleshooting scenarios, vocabulary, and assessments.

The curriculum should not instruct unqualified learners to: calculate or approve rigging; energize high-capacity distribution; bypass protective devices; alter engineered structures; defeat weather controls; upload unknown receiving-card configurations to live equipment.

*The Crew Blueprint — Research Packet | Large-Scale LED Video Systems*
