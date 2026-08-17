# 35 — Video Course 3: Wall Design & System Architecture

**Research Queue ID:** CC-003  
**Status:** Complete research packet  
**Research date:** 2026-08-17  
**Purpose:** Define mastery-level live-event video/LED education beyond wall assembly and lead-level display integrity.

---

## Decision question

**What distinguishes mastery-level video-system design from being highly competent at building, configuring, and leading an LED/video system?**

## Bottom-line finding

Mastery is the ability to translate **content and audience requirements into a complete display system**, then document, verify, troubleshoot, and optimize that system.

The progression is:

**assemble/display competence → lead/system integrity → viewing requirements → display geometry → signal architecture → processing/data architecture → redundancy → commissioning/performance verification → optimization**

AVIXA’s current display standards are particularly useful because they define performance at the system level rather than around one LED product. In April 2026, ANSI/AVIXA V202.01:2026 updated the Display Image Size for 2D Content standard; it applies to permanent and temporary systems and ties display size/viewing positions to user viewing needs. AVIXA V201.01:2021 separately defines image-system contrast measurement across the display, sources, distribution, and environment.

---

# 1. Design from viewing requirements

A mastery learner should first ask:

- What content must viewers perceive?
- From what distances and positions?
- What level of detail matters?
- What environmental/ambient-light conditions exist?
- What aspect ratio and canvas are required?
- What camera/broadcast interactions matter?
- What redundancy is expected?

This is superior to beginning with “how many LED panels do we have?”

AVIXA V202.01:2026 provides direct support for this requirements-first approach by connecting display image size and viewer position to viewing need.

---

# 2. Display geometry and pixel architecture

Teach the relationship among:

- physical dimensions;
- panel/module dimensions;
- pixel pitch;
- native pixel resolution;
- aspect ratio;
- viewing distance;
- content canvas;
- processor/output capacity;
- physical segmentation.

Learners should be able to reason about how a physical wall becomes a pixel canvas without assuming one manufacturer’s cabinet dimensions or processing workflow.

Do not generalize cabinet lock, connector, hanging, or storage procedures across manufacturers; Package 08A already establishes that boundary.

---

# 3. Signal architecture

Teach the system as layers:

**content/source → playback/switching → scaling/compositing → processor → data distribution → receiving/display hardware → physical pixels → viewer**

Possible parallel interfaces include:

- cameras;
- IMAG;
- presentation computers;
- media servers;
- broadcast feeds;
- confidence/DSM displays;
- recording;
- streaming;
- backup sources/processors.

Mastery requires mapping both the **video signal path** and the **LED control/data path**.

---

# 4. Processing and data architecture

At mastery level, learners should understand conceptually:

- input/output formats;
- resolution and frame-rate compatibility;
- scaling;
- EDID/handshake awareness;
- color-space/processing awareness;
- genlock/synchronization concepts;
- processor canvas mapping;
- receiving-card/data topology concepts;
- capacity constraints;
- redundancy/failover concepts;
- configuration backups/version control.

Manufacturer-specific processors can be case studies, but the curriculum must preserve transferable architecture.

---

# 5. Image performance

AVIXA V201.01:2021 treats contrast as a **system** property affected by the display, source, signal distribution, and environment. That is an important mastery lesson: image quality is not a panel specification alone.

Course 3 should address:

- contrast and ambient environment;
- brightness appropriateness;
- uniformity awareness;
- color consistency;
- scaling artifacts;
- signal integrity;
- content-to-display matching;
- camera interaction/flicker awareness;
- verification against production requirements.

The goal is not to train a color scientist but to make system performance measurable and diagnosable.

---

# 6. Documentation

Recommended mastery artifacts:

- system block diagram;
- source/destination matrix;
- display geometry/canvas plan;
- processor mapping documentation;
- data-flow diagram;
- device inventory;
- configuration/version record;
- redundancy map;
- commissioning checklist;
- discrepancy log.

AVIXA D401.01:2023 supports formal responsibility and tracking for AV-system documentation.

---

# 7. Commissioning and verification

AVIXA’s system-performance-verification framework is directly applicable conceptually: determine what must be verified, define criteria, perform verification, and report results.

Video-system commissioning should verify:

- correct source routing;
- expected resolution/frame-rate behavior;
- complete canvas mapping;
- no missing/mis-mapped display regions;
- correct orientation/geometry;
- expected redundancy behavior where designed;
- acceptable image performance for the production environment;
- documentation matches deployed configuration.

---

# 8. System-level troubleshooting

Move beyond “which panel is bad?”

Classify failures by layer:

- source/content;
- switching/routing;
- scaling/processing;
- signal transport;
- processor configuration;
- LED data distribution;
- receiving/display endpoint;
- physical panel/module;
- power/infrastructure interface;
- synchronization;
- environmental/performance issue.

Use the architecture diagram to locate the failure domain.

---

# 9. Resilience and optimization

Optimize for:

- signal-path simplicity;
- predictable failover;
- spare strategy;
- configuration recoverability;
- processor/data headroom;
- maintainability;
- fast fault isolation;
- documentation quality;
- content/display compatibility;
- viewing performance;
- safe coordination with staging, rigging, and electrical specialists.

---

# 10. Recommended course structure

### Module 1 — Viewing Requirements & Display Design
Audience, content, image size, geometry, pixel architecture.

### Module 2 — Signal & Processing Architecture
Sources, switching, scaling, processor relationships, synchronization concepts.

### Module 3 — LED Data Architecture
Canvas mapping, data topology, endpoint relationships, capacity and redundancy concepts.

### Module 4 — Image Performance
Contrast, environment, uniformity/color awareness, camera interaction, performance criteria.

### Module 5 — Documentation & Commissioning
System drawings, configuration control, verification and discrepancy management.

### Module 6 — Resilience & Integrated Design
Failure domains, redundancy, optimization, full-system capstone.

---

# 11. Evidence and sources

1. AVIXA — ANSI/AVIXA V202.01:2026 Display Image Size for 2D Content in Audiovisual Systems  
   https://store.avixa.org/CPBase__item?id=a13f200000C2iQeAAJ
2. AVIXA — Image System Contrast Ratio, V201.01:2021  
   https://www.avixa.org/resources/standards/image-system-contrast-ratio
3. AVIXA — Audiovisual Systems Performance Verification  
   https://www.avixa.org/resources/standards/av-systems-performance-verification
4. AVIXA — Documentation Requirements for Audiovisual Systems, D401.01:2023  
   https://www.avixa.org/resources/standards/documentation-requirements-for-audiovisual-systems
5. AVIXA — Published Standards catalog  
   https://www.avixa.org/resources/standards/published-standards

## Related Crew Blueprint research

- Package 08 / 08A — LED ground-hand support and manufacturer-specific handling boundary
- Package 13 / 13A — Large-Scale LED Video Systems
- Package 27 — Video Lead: Wall Integrity & Display Authority

---

## Curriculum decision

**Video Course 3 should teach performance-driven display-system architecture.** A mastery learner should be able to turn audience/content requirements into a documented signal, processing, canvas, data, redundancy, and verification plan while keeping structural, rigging, and electrical authority in their proper qualified domains.