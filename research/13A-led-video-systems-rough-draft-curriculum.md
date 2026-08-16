# 13A — Large-Scale LED Video Systems: Rough Draft Curriculum Package

**Archived 2026-08-16.** Pulled from Drive
(`Large-Scale_LED_Video_Systems_Rough_Draft.docx`) into the repo per
owner directive. This is the Draft Writer output, built from
`13-led-video-systems-research-packet.md`, that the live
`pathway-video-02-led-video-systems.html` course (Video Pathway Course 2,
8 lessons) was directly adapted from.

De-dup note: this document existed as 3 identical copies across Drive
(different accounts/folders) — confirmed byte-identical during the
2026-08-16 build, see `10_content_research_queue.md`. This is one of
those copies, archived once.

---

The Crew Blueprint | Draft Writer Rough Draft | Large-Scale LED Video Systems

## Large-Scale LED Video Systems for Live Production

**Rough Draft Curriculum Package**

Draft Writer Phase | Source packet: Large-Scale LED Video Systems Research Packet

**Audience:** new stagehands, early-career live event workers, freelance labor, arena crews, festival crews, corporate event crews, and convention center crews.

**Scope note:** This is awareness-level curriculum. It does not certify the learner, authorize restricted work, replace employer training, replace manufacturer instructions, or replace engineered, electrical, rigging, weather, venue, OSHA, ANSI/ESTA, NFPA/NEC, or authority-having-jurisdiction requirements.

## 1. Module Overview

This module introduces large-scale direct-view LED video systems used in arenas, stadiums, large corporate events, outdoor festivals, theaters, convention centers, and touring environments. The central idea is that an LED wall is not one device. It is an integrated system made of structure, cabinets, modules, power supplies, receiving electronics, processors, source systems, transport cabling, electrical distribution, environmental controls, and trained personnel.

### Intended Learner Level
Beginner to early-career. The learner is expected to understand basic stagehand conduct and chain of command, but not advanced video engineering, rigging, electrical distribution, or weather operations.

### Key Concepts to Preserve
An LED wall is an integrated system, and many failures happen at subsystem interfaces rather than inside the LED modules themselves. Pixel pitch affects pixel density and practical viewing distance, but it is not the same thing as overall image quality. The media server renders or plays content; the LED processor maps, scales, synchronizes, and distributes video data to the physical raster. Processor port count is not the same as pixel capacity; mapping and topology must match the physical cabinet layout. Power planning must distinguish maximum consumption, average consumption, inrush, phase balance, power factor, and qualified electrical design. Outdoor suitability requires more than an IP rating. Wind, rain, drainage, heat, lightning, power, and structure remain separate planning issues. A working image does not prove that the structure, rigging, grounding, branch loading, ballast, wind plan, or emergency plan is safe. Redundancy only matters when it is correctly configured, current, and tested.

### Safety-Sensitive Claims and Boundaries
Learners must not approve rigging, structural loading, ballast, wind thresholds, generator sizing, temporary power distribution, or high-capacity electrical systems unless qualified and authorized. Learners must not bypass protective devices, defeat weather controls, alter engineered support systems, or upload unknown receiving-card configurations to live equipment. Work on flown walls, ground support, power distribution, lifts, hoists, and outdoor structures must follow site policy and qualified supervision. This module teaches recognition, communication, and workflow awareness, not formal authorization.

### Operational Workflows Covered
Advance and preproduction; receiving and inspection; mechanical build; power and data cabling; processor configuration; initial test patterns; show operation monitoring; shutdown and load-out; troubleshooting from system-level symptoms to local components.

### Weak or Missing Research Areas to Flag
Exact pixel pitch, brightness, processor capacity, spare percentage, port loading, circuit loading, wind thresholds, ballast quantity, generator size, and camera settings require product-, site-, and show-specific data. ANSI, OSHA, NFPA/NEC, AVIXA, and manufacturer references require downstream verification against the current adopted edition and local authority requirements. Brand-specific procedures for Brompton, NovaStar, and other ecosystems should be verified against current manufacturer documentation before final publication.

## 2. Lesson Drafts

### Lesson 1: LED Walls Are Integrated Systems

**In This Lesson You Will Learn:** Recognize the major subsystems in a large LED wall. Explain why an LED wall is not just a stack of panels. Identify common interface points where failures occur. Use basic LED system terminology on a call. Know when to ask the LED lead, video engineer, rigger, or electrician.

**Short Answer:** A large LED wall is a connected production system. The visible wall is built from LED cabinets or tiles, but the finished display depends on structural support, power distribution, receiving electronics, processors, signal transport, source systems, cooling, weather protection, and crew workflow. This matters because a problem on the wall may not be a bad panel. It may be power, data, mapping, source format, processor configuration, structure, weather, or a communication issue.

**What This Looks Like on a Real Call:** On a corporate load-in, the wall may look like a simple 40-foot-wide rectangle, but several teams are touching it: riggers or ground-support crew establish the support, electricians or qualified power crew provide distro, LED techs build and cable cabinets, video engineers configure processors, and media-server or graphics operators feed content. On a festival, the same wall also has weather planning, wind monitoring, generator coordination, dust, mud, and limited repair windows.

**Beginner Mistakes:** Calling every part a "screen" instead of using cabinet, module, processor, source, power, and data language. This slows troubleshooting. Assuming a dark area always means a bad tile. A downstream data-chain failure can remove many cabinets. Moving cables or panels without knowing whether they are power, data, safety-related, or part of a tested path. Treating similar-looking cabinets as interchangeable. Hardware, firmware, scan configuration, calibration, and pinouts can differ.

**Professional Habit:** Use system language and report what you actually see: location, symptom, timing, and what changed. Example: "Stage left, third row from bottom, four cabinets downstream from port 3 went black after the cable move."

**Safety Notes:** Do not perform work you have not been trained or authorized to do. Do not treat a clean image as proof that the wall is structurally or electrically safe. Follow the department lead's direction before touching power, rigging, processor files, or weather-critical systems. Keep egress, cable paths, and exclusion zones clear.

**Reflection Questions:** Which subsystem might cause an image problem besides the cabinet itself? Who should you ask before moving a cable that appears to feed the wall? Why is it useful to describe the symptom by wall location and signal path? What does a working image not prove?

**Key Takeaway:** Think of the LED wall as a complete system, not a single piece of gear.

### Lesson 2: Pixel Pitch, Resolution, Brightness, and Equipment Choice

**In This Lesson You Will Learn:** Define pixel pitch, native resolution, nit, refresh rate, and scan rate. Explain why smaller pixel pitch is not automatically better. Recognize how venue type affects equipment selection. Understand why camera performance must be tested, not assumed. Distinguish indoor, outdoor, fine-pitch, mesh, transparent, floor, and mobile LED categories.

**Short Answer:** Pixel pitch is the center-to-center spacing between pixels, usually measured in millimeters. Smaller pitch creates more pixels in a given area and can look better at close distances, but it also increases pixel count, processing needs, panel count, power density, heat, cost, setup time, and sensitivity to calibration. Native resolution is the total physical pixel count of the assembled wall. Brightness is commonly described in nits, but maximum brightness is not always the best operating setting.

**What This Looks Like on a Real Call:** For an executive meeting, a fine-pitch wall may be needed because the front row is close and PowerPoint text must be readable on camera. For an arena IMAG wall, a moderate pitch may be acceptable because the audience is farther away. For a stadium or outdoor festival, brightness, weather resistance, wind behavior, weight, service access, and long-distance viewing may matter more than fine detail.

**Beginner Mistakes:** Choosing the smallest pitch without checking processing, power, heat, labor, or budget impact. Confusing physical size with resolution. A large coarse wall can have fewer pixels than a smaller fine-pitch wall. Running the wall at maximum brightness even when it overpowers cameras, washes out black level, increases heat, and exposes calibration differences. Assuming published refresh rate guarantees camera compatibility. Scan behavior, shutter, frame rate, synchronization, PWM behavior, and camera sensor readout also matter.

**Professional Habit:** Before judging the wall, ask what it is for: close presentation, IMAG, scenic imagery, outdoor daylight, camera backdrop, or long-distance viewing. The right panel is selected against the job, not against one isolated specification.

**Safety Notes:** Do not promise that a pitch, brightness, IP rating, or refresh rate will be acceptable without product and site-specific confirmation. Camera tests should be conducted with the actual camera settings where practical. Outdoor-rated product still requires qualified review of weather, support, power, and operation conditions.

**Reflection Questions:** Why might a 1.9 mm wall be wrong for a specific job even though it has high pixel density? What is the difference between wall size and wall resolution? What symptoms can show up on camera even when the wall looks fine by eye? Why should maximum brightness not be the default show setting?

**Key Takeaway:** Select LED equipment by audience, content, environment, structure, power, camera use, and serviceability—not by one spec.

### Lesson 3: Signal Flow, Processors, Mapping, and Redundancy

**In This Lesson You Will Learn:** Trace a typical LED signal chain from source to physical pixels. Separate media-server duties from LED-processor duties. Explain mapping and receiver configuration at a beginner level. Recognize common failures caused by topology or configuration mismatch. Understand why redundancy must be tested.

**Short Answer:** A typical chain is source or playback system to switcher or screen-management system, then router, converter, or distribution if needed, then LED processor, transport over copper or fiber, receiving cards, hub boards, driver electronics, and physical pixels. The media server renders or plays content. The LED processor adapts that content to the real cabinet raster, maps outputs, handles scaling and synchronization, and distributes LED data to receiving cards.

**What This Looks Like on a Real Call:** On a concert, content may come from media servers into a router, through redundant screen-management systems, into primary and backup processors, and then to redundant LED-data paths. On a smaller corporate show, laptops and playback may feed a switcher, then a processor, then the wall. In both cases, the processor file must match the actual panel model, cabinet count, orientation, port topology, and receiver ecosystem.

**Beginner Mistakes:** Thinking the media server replaces the processor. The server creates the image; the processor maps and distributes it. Assuming any Ethernet switch or network layout will work because the LED data cable uses RJ45-style connectors. Proprietary LED data is not ordinary IP traffic unless the system documentation says so. Starting the wall at the wrong cabinet and then chasing a mapping problem across the entire wall. Leaving backup fibers connected but never testing failover. A connected backup cable is not proven redundancy.

**Professional Habit:** Label home runs, ports, cabinet coordinates, fibers, and backup paths. Save known-good configurations with clear names. Change one variable at a time when troubleshooting whenever practical.

**Safety Notes:** Do not upload unknown receiver files or unverified firmware/configuration files to live equipment unless directed by the qualified LED lead or video engineer. Do not unplug or reroute processor, fiber, or data paths without permission. Redundancy procedures should be tested during setup, not discovered during show failure.

**Reflection Questions:** What does the LED processor do that the media server usually does not? What can happen if the receiver configuration does not match the cabinet hardware? Why does labeling reduce recovery time? What makes redundancy real rather than theoretical?

**Key Takeaway:** The wall will only display correctly when the source, processor, receiver configuration, mapping, and physical topology agree.

### Lesson 4: Power and Data Distribution Awareness

**In This Lesson You Will Learn:** Recognize basic power planning terms for LED systems. Understand why maximum consumption is different from average consumption. Identify field risks with inrush, phase balance, grounding, and weather exposure. Differentiate copper and fiber use cases. Apply beginner-level cable discipline.

**Short Answer:** LED walls require planned power and data distribution. Power planning must account for maximum demand, average demand, inrush current, power factor, phase arrangement, branch loading, circuit limits, and qualified electrical design. Data distribution may use copper for short processor-to-wall and cabinet-to-cabinet paths, while fiber is often preferred for long FOH-to-stage or processor-backbone runs.

**What This Looks Like on a Real Call:** On a ballroom general session, power may come from building service and the data path may be short. On an outdoor festival, the wall may be fed from generators and temporary distribution, with long fiber paths from front of house. Wet ground, cable ramps, drip loops, elevated connectors, dust, and physical protection become part of the job.

**Beginner Mistakes:** Using average wattage as the design load. Average show content is not a safe substitute for maximum rated demand. Ignoring inrush. A system may be acceptable after startup but still trip if everything energizes at once. Letting power or data cables carry mechanical load or become strain points. Assuming fiber is automatically reliable. Dirty ends, wrong mode, wrong transceiver, tight bends, or damaged connectors can fail.

**Professional Habit:** Keep cables protected, labeled, strain-relieved, and routed where they are not trip hazards, pinch points, or load-transfer paths. Report damage early. Do not coil, bend, tape, or route cable in a way that violates site practice or manufacturer guidance.

**Safety Notes:** Electrical distribution must be handled by qualified and authorized personnel. Do not bypass breakers, GFCI/ground-fault protection, grounding, disconnects, or weather-rated distribution requirements. Outdoor cabling needs protected distribution, elevated connectors, drip loops, drainage control, cable ramps, and inspection under qualified supervision. Do not measure or open electrical equipment unless trained and authorized.

**Reflection Questions:** Why is maximum consumption more important than average consumption for planning? What can inrush current do during startup? Why can fiber fail even when it looks physically fine? What cable behaviors make you more useful to the department lead?

**Key Takeaway:** Good power and data discipline prevents many wall failures before troubleshooting begins.

### Lesson 5: Structural Support, Rigging, and Load-Path Awareness

**In This Lesson You Will Learn:** Recognize the difference between ground-supported and flown LED walls. Describe a basic load path without calculating it. Understand why panel weight alone is not enough for structural decisions. Identify dynamic effects such as hoisting, wind, movement, and impact. Know role boundaries for rigging and structure.

**Short Answer:** LED walls can be ground-supported, flown from approved points, roof-supported, mounted to temporary structures, built on mobile trailers, or installed in custom engineered systems. The structural concern is not just panel weight. Dead load includes panels, bumpers, rigging, cables, distribution boxes, covers, service elements, and secondary components. Dynamic load can come from hoisting, stopping, wind, rotation, impact, and movement.

**What This Looks Like on a Real Call:** In an arena, a flown wall may hang from approved rigging points through hoists, truss, bumpers, and cabinet locks. At an outdoor festival, a wall may be part of a roof, tower, or ground-support system with ballast and wind planning. In a convention center, even an indoor ground-support wall still needs review for floor loading, stage decks, risers, slope, access, and egress.

**Beginner Mistakes:** Making structural decisions from the published panel weight alone. Assuming a clean rectangular image means the wall is mechanically safe. Removing braces, ballast, pins, locks, outriggers, or safety components because they are in the way. Standing under or behind a wall without understanding the established exclusion zone and work plan.

**Professional Habit:** Respect the load path and the exclusion zone. If something looks loose, missing, overloaded, unsupported, out of plumb, or different from the plan, stop and report it through the chain of command.

**Safety Notes:** Do not calculate, approve, or modify rigging, ballast, pick points, hoists, truss, roof systems, or ground support unless qualified and authorized. Follow the approved rigging or ground-support plan and the direction of the qualified lead. Do not let cables become suspension members or uncontrolled strain points. Do not work under suspended loads or within restricted areas unless the site plan and qualified supervision permit it.

**Reflection Questions:** What is included in system dead load besides the panels? Why is the load path more important than the image on the wall? Who should decide whether a ground-supported wall has enough ballast? What should you do if a support component appears missing or moved?

**Key Takeaway:** Structural safety belongs to qualified planning and supervision; a beginner's job is to recognize boundaries and report concerns.

### Lesson 6: Outdoor LED, Wind, Weather, Heat, and Lightning Awareness

**In This Lesson You Will Learn:** Explain why outdoor-rated does not mean safe in all weather. Identify major environmental risks: wind, rain, heat, dust, and lightning. Understand the difference between design planning and operational decisions. Recognize what a weather plan must assign. Apply beginner-level protection habits around connectors and cable paths.

**Short Answer:** Outdoor LED systems face sunlight, rain, condensation, wind, heat, dust, mud, generators, long cable paths, and limited repair windows. IP ratings address ingress protection against solids and water, but they do not establish wind resistance, lightning safety, drainage performance, structural adequacy, or approval for every storm. Wind force depends on speed, exposed area, solidity, permeability, height, orientation, shielding, gusts, geometry, manufacturer data, codes, and engineering.

**What This Looks Like on a Real Call:** At a festival, a wall may operate through daylight, sunset, night, rain risk, and multiple artist changeovers. The wall may need brightness adjustment for cameras and audience comfort. Crew may need to protect connector caps, keep cable ends out of mud, preserve drip loops, monitor temperatures, and follow weather calls from production leadership. If wind rises, the plan may call for monitoring, suspended work, lowering, panel removal, evacuation, or abandoning the structure.

**Beginner Mistakes:** Assuming IP65 or similar language means "rainproof in any condition." Improvising wind or lightning thresholds instead of following the event weather plan. Leaving connector caps off or cable ends exposed to wet ground. Ignoring heat symptoms such as brightness reduction, color shift, shutdowns, or intermittent faults.

**Professional Habit:** Protect the system from the start: keep caps managed, connections oriented and elevated as directed, cable paths clear of puddles, fan paths unobstructed, and weather information flowing through the correct chain of command.

**Safety Notes:** Do not decide wind, lightning, lowering, evacuation, or restart thresholds unless specifically assigned and qualified. Follow the site weather and emergency plan. Do not improvise weather calls. Do not assume drainage, connector orientation, seals, or rear protection are correct just because the panel has an IP rating. Outdoor power and weather exposure require qualified supervision.

**Reflection Questions:** What does an IP rating not tell you? Why are wind decisions more complex than the square footage of the wall? Who should be identified in the weather plan? What small connector habits can prevent larger failures?

**Key Takeaway:** Outdoor LED safety depends on weather planning, structure, power, and disciplined operation—not just outdoor-rated panels.

### Lesson 7: Build, Configuration, Test, and Commissioning Workflow

**In This Lesson You Will Learn:** Follow the normal LED workflow from advance to initial test. Recognize what should be checked during receiving and inspection. Understand why the first cabinet, orientation, and port mapping matter. Use basic test patterns to identify system problems. Document final configuration and marginal components.

**Short Answer:** A controlled LED build moves from advance and preproduction to receiving, inspection, mechanical build, power and data cabling, processor configuration, initial test, show operation, and shutdown. Each step reduces uncertainty. The wall should not be treated as complete until structure, power, signal, mapping, test patterns, redundancy, content, cameras, and monitoring expectations have been reviewed by the responsible leads.

**What This Looks Like on a Real Call:** On a large corporate show, the LED lead confirms wall dimensions, cabinet model, raster, processor model, input format, frame rate, backup signal, power, cable distances, rigging, and access before the truck arrives. During build, the crew verifies panel model and batch, inspects connectors and locks, follows the approved mechanical sequence, manages cable routing, maps outputs, then runs black, gray, red, green, blue, white, gradients, grid patterns, motion patterns, and actual show content.

**Beginner Mistakes:** Skipping inspection because the cases look organized. Building without confirming the known first cabinet and physical orientation. Testing only show content and never using full-field color, gray, grid, or motion patterns. Failing to save the final processor configuration after changes. Not documenting a damaged panel, marginal jumper, or inconsistent replacement cabinet.

**Professional Habit:** Build in a repeatable order. Label as you go. Test with patterns before blaming content. Save final files and communicate changes to the LED lead or video engineer.

**Safety Notes:** Do not elevate, fly, power, or expose the wall to public areas until required mechanical, electrical, and operational checks have been completed by responsible personnel. Do not change processor settings, receiver files, firmware, redundancy mode, or cabling topology without direction. Keep people clear of hazardous areas before energizing or moving equipment.

**Reflection Questions:** What information should be advanced before the wall arrives? Why are full-field color and grid tests useful? Why does the first cabinet matter? What should be documented before show starts?

**Key Takeaway:** A reliable wall is built by sequence, inspection, labeling, testing, documentation, and controlled handoff.

### Lesson 8: Troubleshooting and Show Operation Discipline

**In This Lesson You Will Learn:** Classify LED failures before replacing parts. Move from broad system boundaries toward local components. Recognize common symptoms: dark wall, missing chain, bad cabinet, bad module, scrambled image, flicker, and intermittent failure. Use known-good substitutions and test patterns carefully. Understand show-call monitoring responsibilities.

**Short Answer:** Good troubleshooting starts by naming the failure category: total power failure, partial power failure, total signal loss, partial signal loss, incorrect mapping, intermittent fault, color or brightness issue, synchronization issue, or physical damage. From there, move from system-wide causes toward local causes. Change one variable at a time whenever practical and document substitutions.

**What This Looks Like on a Real Call:** If the entire wall is dark during rehearsal, the team may check processor power, input detection, output enable, panel power, breakers, disconnects, blackout settings, show file, and expected outputs. If one data chain is missing, the likely boundary may be a processor output, fiber, home run, first cabinet, pass-through, or redundancy mode. If one module is wrong, the issue may be a module connection, failed module, hub output, pins, or calibration mismatch.

**Beginner Mistakes:** Replacing panels before checking source, processor output, power, and data boundaries. Making several changes at once and losing track of what fixed or worsened the problem. Ignoring intermittent symptoms caused by heat, vibration, moisture, dirty fiber, or partially seated connectors. Trying to solve camera banding by random processor changes instead of coordinating shutter, frame rate, sync, brightness, and driver behavior.

**Professional Habit:** Report symptoms clearly, preserve the tested configuration, and avoid speculative changes. During show, monitor source presence, processor status, cabinet errors, temperature, fiber health, backup readiness, power distribution, and environmental conditions according to assigned role.

**Safety Notes:** Only qualified personnel should open equipment, measure power, modify electrical distribution, or make restricted configuration changes. Do not defeat safety systems or protective devices to make an image appear. If a fault is tied to heat, water, structure, power, or weather, escalate through the chain of command rather than treating it as a simple image problem.

**Reflection Questions:** What is the first step in disciplined troubleshooting? Why should you change one variable at a time? What can remove all downstream cabinets in a data chain? When should a video symptom be escalated as a safety or weather concern?

**Key Takeaway:** Troubleshooting is faster and safer when you classify the failure, isolate the boundary, test deliberately, and escalate correctly.

## 3. Quiz Bank

1. What is the best beginner description of a large LED wall? **Correct: An integrated system of structure, panels, power, receiving electronics, processing, transport, sources, and personnel.** A wall depends on many subsystems, and failures often occur at the interfaces between them.
2. Which statement about pixel pitch is most accurate? **Correct: Pixel pitch affects pixel density and practical viewing distance.** Pitch is one selection factor; it does not automatically determine total image quality, safety, or processing workflow.
3. A media server usually does which job? **Correct: Renders or plays back content.** The LED processor maps and distributes the content to the physical raster.
4. Why is average power consumption not enough for electrical planning? **Correct: It ignores maximum demand and startup conditions such as inrush.** Planning from average consumption can underestimate load.
5. What does an IP rating primarily describe? **Correct: Ingress protection against solids and water.** IP ratings do not prove all-weather suitability or structural wind safety.
6. A backup fiber is plugged in. What still needs to happen? **Correct: Failover should be configured and tested.** Connected backup cabling is not meaningful unless the system is configured correctly and failover is tested.
7. A clean image on the LED wall proves: **Correct: The signal path is producing an image.** Image quality does not verify rigging, power, ballast, grounding, wind capacity, or compliance.
8. Scenario: Four cabinets downstream from one cabinet go dark. Which category should be considered early? **Correct: Possible data-chain interruption near the first affected cabinet.** A failure near the start of a data chain can affect downstream cabinets.
9. Who should approve rigging-point loads or ballast decisions? **Correct: Qualified and authorized rigging/structural personnel under the site plan.** Rigging and structural decisions require qualified authority.
10. Which is a professional troubleshooting habit? **Correct: Use known-good parts, test patterns, and one variable at a time when practical.** Disciplined isolation and documentation reduce risk and speed recovery.
11. Which symptom may appear on camera even if the wall looks good by eye? **Correct: Horizontal bands or flicker.** Camera interaction can cause banding, pulsing, moire, color breakup, or rolling-shutter artifacts.
12. Scenario: During outdoor load-in, a connector is lying uncapped in mud. What should a beginner do? **Correct: Report it and follow the LED lead's direction for inspection/replacement.** Moisture and contamination can create failures or hazards.
13. Which item belongs in the advance for an LED wall? **Correct: Wall dimensions, cabinet model, raster, processor, input format, power, support mode, access, weather plan, and responsible leads.** Advance information reduces build, configuration, power, support, and show risks.
14. What should not be done by an unqualified learner? **Correct: Bypass a breaker or protective device to keep the show running.** Bypassing protective devices is outside beginner authority and unsafe.
15. Why are test patterns useful? **Correct: They help identify mapping, color, module, brightness, and boundary issues systematically.** Test patterns reveal technical display issues before or alongside show content checks.

## 4. Glossary

LED cabinet / tile / panel — modular enclosure containing LED modules, power supplies, receiving electronics, connectors, and locks; basic building block handled during wall assembly.

LED module — smaller serviceable pixel assembly within a cabinet; may be replaced from front or rear depending on product.

Pixel pitch — center-to-center spacing between pixels, usually in millimeters; helps determine pixel density and practical viewing distance.

Native resolution — total physical pixel count of the assembled wall; defines the raster the processor must map.

Nit — unit of luminance equal to one candela per square meter; used to discuss display brightness.

Refresh rate — how often LED driver electronics refresh the image; affects flicker and camera behavior, but is not the only camera factor.

Scan rate — multiplexing method used to drive LEDs; can affect brightness, efficiency, and camera artifacts.

LED processor / sending device — device that scales, maps, synchronizes, processes, and distributes LED data; bridge between video sources and receiving cards.

Receiving card — electronics in the cabinet that receive mapped LED data and drive outputs; must match configuration and hardware.

Mapping — assignment of processor outputs and data paths to physical cabinets; bad mapping causes missing, reversed, duplicated, or displaced imagery.

EDID — display-identification data communicated to a video source; can affect source resolution, refresh rate, and compatibility.

Genlock — common timing reference for synchronized video devices; helps avoid tearing or timing mismatch in complex systems.

Frame synchronization — buffering/timing conversion to align asynchronous sources; can stabilize switching but may add latency.

IP rating — ingress-protection rating against solids and water; not a full weather approval or wind rating.

Redundancy — backup signal, processor, data, or power path; useful only when configured, current, and tested.

Ground support — structure supported from the ground with towers, frames, bases, ballast, or outriggers; requires verified support, stability, and environmental limits.

Flown wall — LED array suspended from overhead rigging points or temporary roof systems; requires approved hardware, hoists, load calculations, and qualified rigging personnel.

Dead load — permanent gravitational weight of the system and support hardware; includes more than panel weight.

Dynamic load — load created by motion, stopping, wind, impact, or oscillation; can exceed the static weight.

Service loop — extra cable length for access, motion, routing, or repair; must not become a snag or load-transfer point.

Fiber hygiene — cleaning, inspecting, protecting, and handling fiber correctly; dirty or damaged fiber can cause signal failures.

## 5. Scenario Drills

**Drill 1 — Corporate general session:** The wall is built, but the laptop will not output the expected resolution. **Task:** Identify likely questions and escalation path. **Expected response:** Tell the video lead. Check source format, EDID, processor input settings, raster, switcher/scaler path, and supported resolution under direction. **Teaching point:** Source compatibility can look like a wall problem. EDID and input format are part of LED workflow.

**Drill 2 — Arena concert:** A flown wall is physically complete, and a stagehand wants to remove a brace that blocks access. **Task:** Decide what to do. **Expected response:** Do not remove it. Stop and ask the rigging/LED lead. Any support component belongs to the approved system until qualified personnel say otherwise. **Teaching point:** Structural components are not convenience items.

**Drill 3 — Festival:** Rain starts during changeover and several connector caps are missing. **Task:** Respond as a beginner crew member. **Expected response:** Report to the LED lead, help protect connectors as directed, keep cable ends elevated/protected if assigned, and avoid energizing questionable connections. **Teaching point:** Outdoor protection depends on small habits and qualified inspection.

**Drill 4 — Corporate ballroom:** The wall looks fine by eye but cameras show rolling bands. **Task:** Name likely factors. **Expected response:** Escalate to video/LED/camera leads. Possible factors include refresh behavior, scan rate, camera shutter, frame rate, genlock, brightness, converter quality, and processor settings. **Teaching point:** Camera compatibility must be tested with the actual chain.

**Drill 5 — Stadium show:** The backup signal path is connected but was never tested. **Task:** State the risk and next step. **Expected response:** Connected backup cabling does not prove redundancy. Ask the LED/video lead whether failover can be tested before show under controlled conditions. **Teaching point:** Redundancy must be configured and tested.

**Drill 6 — Load-out:** A panel was intermittent during show and now appears to work. **Task:** Choose the professional response. **Expected response:** Tag or document the panel/jumper/location according to department practice rather than returning it silently to inventory. **Teaching point:** Intermittent faults often return under heat, vibration, or moisture.

## 6. Instructor Notes

Emphasize that this is awareness-level training. Avoid implying authorization for rigging, electrical, weather, lift, hoist, processor-file, or engineered structural decisions. Learners may over-focus on panels. Repeatedly return to the full system: source, switcher, processor, transport, receiving cards, power, structure, weather, and personnel. Clarify common vocabulary: cabinet, module, processor, receiving card, raster, mapping, EDID, genlock, fiber, redundancy, IP rating, ground support, flown wall. Use real call examples from corporate, arena, stadium, and festival environments so learners understand that the same LED concepts change under different conditions. Spend extra time on misconceptions: smaller pitch is not always better; outdoor-rated is not all-weather approval; average consumption is not design load; backup cable is not tested redundancy; image quality is not compliance. Safety-sensitive sections include power distribution, weather operations, rigging/ground support, wind, lightning, processor/receiver files, and troubleshooting that involves electrical measurement or equipment opening. **Pacing note: Lessons 3 and 4 may be dense for beginners. Use diagrams and physical examples if available.** Review brand references such as Brompton Tessera and NovaStar only as examples of ecosystems, not endorsements or complete procedural guides.

## 7. Student Reinforcement Material

**Field Reminders:** Describe what you see, where it is, when it happened, and what changed. Label cables and ports as directed. Good labels save show time. Never assume similar-looking panels are interchangeable. Keep connectors capped, clean, strain-relieved, and off wet ground as directed. A wall can show a clean image and still have unresolved structural, electrical, or weather risks. Ask before changing processor settings, receiver files, redundancy paths, rigging components, or power distribution. Treat backup paths as unproven until tested. Change one troubleshooting variable at a time whenever practical.

**Call-Prep Checklist for New Crew:** Know the department lead and who gives you direction. Know whether the wall is ground-supported, flown, roof-supported, trailer-based, or otherwise supported. Know basic wall coordinates: stage left/right, rows, columns, first cabinet, and data direction if taught. Know where egress, exclusion zones, cable paths, and work areas are. Have gloves, appropriate footwear, and site-required PPE. Ask how damaged panels, modules, jumpers, and fibers should be tagged or reported. Ask what you are not allowed to touch.

**Before Show Memory Check:** Sources tested. Processor and mapping verified by responsible tech. Test patterns run. Camera checked if cameras matter. Backup path tested if required. Temperatures and errors checked. Weather plan reviewed if outdoors. Communication path confirmed.

## 8. Visual Asset Recommendations

System signal-flow diagram: source/media server → switcher/router → LED processor → copper/fiber → receiving cards → driver electronics → pixels. Department/chain-of-command diagram showing LED lead, video engineer, rigger, electrician, media-server operator, stage manager, and production manager. Annotated cabinet image identifying module, cabinet frame, locks, power connector, data connector, receiving electronics, and service access. Pixel pitch comparison graphic showing coarse, moderate, and fine pitch at different viewing distances. Processor mapping example showing physical cabinet coordinates and data-port topology. Power/data cable path example with strain relief, drip loop, elevated connectors, cable ramp, and protected fan-out point. Ground-supported versus flown wall comparison diagram with simplified load-path arrows. Outdoor weather-risk graphic covering wind, rain, heat, lightning, dust, mud, drainage, and connector protection. Troubleshooting decision tree moving from total wall dark to chain missing to cabinet/module-level symptoms. Redundancy diagram contrasting connected backup cable with tested failover path.

**Note (2026-08-16):** none of these diagrams were built into the live course — flagged in the same-day owner audit as the most concrete retention improvement still available. Tracked in `10_content_research_queue.md`.

## 9. Handoff Notes for Persona Rewrite Layer

Preserve all role-boundary language. Do not soften statements that learners must not approve rigging, temporary power, weather thresholds, ballast, or restricted processor/receiver changes. Preserve the key distinctions: processor vs media server; pixel pitch vs image quality; IP rating vs all-weather approval; total weight vs point load; port count vs pixel capacity; average consumption vs design load; backup cabling vs tested redundancy; working image vs compliance. Keep the practical jobsite framing. Learners should understand what they might see during load-in, show call, and load-out. Tone can be made more conversational later, but do not add jokes or casual language that reduces perceived seriousness around power, rigging, wind, lightning, or configuration files. Human phrasing can be added to beginner mistakes and professional habits, provided the technical boundaries stay intact.

## 10. Guardian Flags

Verify current references and editions for ANSI E1.21, ANSI E1.56, ANSI E1.6 family, ANSI ES1.7, ANSI E1.58, OSHA 29 CFR 1926.404, NFPA 70/NEC, AVIXA, and manufacturer-specific documentation. Review all power language for jurisdictional accuracy and to avoid implying electrical qualification. Review all rigging and structural language to ensure it remains awareness-level and does not teach calculation or approval. Review all outdoor weather, wind, and lightning language to ensure it does not set unsupported thresholds. Review brand/ecosystem mentions for currency, neutrality, and manufacturer-specific limitations. Confirm that troubleshooting language does not imply unqualified learners should open cabinets, measure live power, bypass safety devices, or modify protected settings. Confirm the document does not imply certification, formal authorization, code compliance, or replacement of employer/site training. Confirm any values retained from the research packet, such as pitch and brightness ranges, are presented as broad planning examples rather than universal requirements.

**Note:** the Guardian Flags above are still open — this pipeline stage (Guardian review) was never formally run against the live course. Tracked in `10_content_research_queue.md`.

*Awareness-level curriculum draft. Not certification, engineering, electrical, rigging, weather, or legal approval.*
