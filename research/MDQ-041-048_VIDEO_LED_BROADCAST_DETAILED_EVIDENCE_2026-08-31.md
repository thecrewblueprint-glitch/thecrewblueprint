# MDQ-041–048 — Video / LED / Broadcast Detailed Evidence

**Prepared:** 2026-08-31  
**Status:** Detailed source-grounded research packet; suitable for competency synthesis and bounded drafting, not publication release  
**Domain:** `D-VID` Video / LED / Broadcast  
**Depends on:** MDQ-000–003, MDQ-040 role architecture, Packages 08/08A/13/13A, current Video C1/C2 materials  
**Purpose:** Close major curriculum gaps across LED display systems, signal standards/flow, processing/switching/screen management, projection, camera/broadcast interfaces, media/playback/show control, AV-over-IP/networking, documentation/commissioning and department leadership.

> **Canonical-ID correction:** This file follows the master queue exactly: MDQ-044 = Projection; MDQ-045 = Cameras/Broadcast; MDQ-046 = Media Servers/Playback/Graphics/Show Control; MDQ-047 = AV-over-IP; MDQ-048 = Documentation/Commissioning/Leadership.

---

## 1. Controlling curriculum principle

Video is a collection of adjacent systems rather than one ladder. Parallel pathways include:

1. video utility / cable / support;
2. LED display technician / processing;
3. switching / presentation / screen management;
4. projection;
5. camera / CCU / shading / broadcast utility;
6. playback / media server / graphics;
7. video engineering / signal / sync;
8. AV-over-IP / network video;
9. lead / EIC / system-design responsibility.

A learner can be advanced in one branch and junior in another. Course completion does not appoint a learner as EIC, TD, camera shader, LED lead, projectionist, media-server operator, network engineer or other employer-controlled role.

---

# MDQ-041 — LED display hardware and build systems

## System map

Learners should recognize panel/cabinet/module families, receiving electronics, processor/controller, power/data topology concepts, signal distribution, support/rigging/ground-support interfaces, spares/service modules, calibration relationships and model/environment limits.

## Responsibility layers

**Support / utility** — identify component families, preserve labels/orientation, protect connectors, follow the assigned system/lead, report mismatches/damage, and recognize structural/electrical boundaries.

**LED technician** — system topology, processor/receiving-card relationships, mapping/canvas concepts, resolution/pixel-density relationships, configuration/version awareness, verification concepts, spare/component boundaries, calibration/color-uniformity concepts.

**Lead / engineer** — system specification, compatibility, processing strategy, redundancy/spares, signal/power/support interfaces, QC/acceptance and change control.

Brompton Tessera and NovaStar are representative professional processing ecosystems. Product-specific workflows remain manufacturer/version specific.

Structural support, flown-display rigging and temporary power remain controlled external responsibilities.

**State:** `draftable` for architecture/recognition/roles; model-specific practicals need manufacturer/practitioner review.

---

# MDQ-042 — Video signal standards and signal flow

## Canonical mental model

**source / camera / playback → source format → transport / conversion → routing / distribution → processing / scaling / switching → destination format → LED processor / projector / monitor / recorder / stream / broadcast output**

## Core concepts

- resolution and frame rate;
- progressive/interlaced awareness;
- aspect ratio;
- color-space/colorimetry awareness;
- bit depth and chroma-sampling concepts;
- reference/sync;
- conversion/scaling;
- metadata/handshake constraints;
- product/system-specific transport limits.

Transport families include SDI, HDMI, DisplayPort, fiber/optical transport, IP/network video and smaller-system USB/webcam-style interfaces.

Troubleshooting should be layered by source/content, format, transport, conversion, routing, sync/reference, processing, destination and control/network layers.

**State:** `draftable`.

---

# MDQ-043 — Processing, scaling, switching and screen management

## System families

- live-production switchers;
- presentation switchers;
- scalers;
- routers;
- multiviewers;
- LED processors;
- screen-management systems;
- confidence / DSM feeds;
- record/stream outputs.

## Transferable switcher model

Teach inputs/sources, program vs preview, buses/layers/keys, transitions, graphics/stills, aux outputs, monitoring, macros/automation concepts, configuration/show-file concepts and downstream destinations.

Blackmagic ATEM is one accessible example; product menus are not the transferable curriculum.

Scaling/screen-management concepts include source vs destination canvas, scaling/cropping, aspect management, multi-screen layouts, output mapping, confidence feeds, EDID/HDCP awareness and reference/genlock where applicable.

**State:** `draftable`.

---

# MDQ-044 — Projection systems

## Transferable concepts

- projector / lens / surface relationship;
- throw/lens-ratio awareness;
- image size and placement;
- brightness/contrast as environment/system concepts;
- focus/geometry;
- blend/warp concepts;
- content resolution/frame rate;
- color matching;
- scenic/surface interaction;
- environmental-light interaction;
- media-server ownership/handoff.

## Boundary

Exact hanging/rigging, temporary power, laser-source service, high-access work and model-specific service remain with authorized personnel/manufacturer pathways.

**State:** `draftable` for conceptual/system content; specialist alignment/operation needs reviewed product-specific practice.

---

# MDQ-045 — Cameras and live/broadcast interface

## Role families

- camera utility;
- camera operator;
- CCU/shading operator;
- video engineer;
- technical director/switcher operator;
- EIC / engineer-in-charge context;
- record/stream engineering;
- replay/graphics interfaces.

## Camera/system concepts

Teach image sensor/lens path, exposure, frame-rate/shutter interaction, white balance/color temperature/tint, focus/depth-of-field awareness, return/tally/comms, SDI/IP transport, reference/genlock and shading/matching as a specialist role.

## Broadcast/IP convergence

SMPTE ST 2110 is a central professional-media-over-IP source family. It treats video, audio and ancillary data as separately timed IP essence streams referenced to common timing. It is a professional managed-media architecture, not a universal requirement for every event.

**State:** `draftable` for architecture/interfaces; specialist operation remains employer-assigned.

---

# MDQ-046 — Media servers, playback, graphics and show control

## Transferable concepts

- media asset and content version;
- codec/container awareness;
- resolution/frame-rate relationships;
- alpha/key/fill awareness;
- playlist/cue/timeline concepts;
- multi-output/canvas concepts;
- synchronization/timecode/trigger interfaces;
- output routing;
- graphics/CG interfaces;
- redundant-playback concepts;
- show-file/package versioning.

Advanced media-server systems may add mapping/compositing, real-time content, tracking/data interfaces, LED/projection canvases, genlock/sync, network control, show-control integration and failover.

Do not treat any one platform as the transferable curriculum model. QLab, Resolume and other platform families should be versioned vendor/product branches.

**State:** `draftable`; current platform comparisons remain freshness work.

---

# MDQ-047 — AV-over-IP and video networking

## Standards landscape

Professional network video is not one protocol. Relevant families include:

- SMPTE ST 2110;
- IPMX/open AV-over-IP ecosystems;
- NDI and proprietary ecosystems;
- RTP-based transport families;
- AES67 audio interoperability within broader professional-media networks.

## Mental model

Teach independent media flows, common timing, managed IP transport, unicast/multicast concepts, PTP/reference timing, bandwidth/capacity, switching/network topology, QoS/traffic engineering awareness, redundancy, access/security/change control and monitoring/documentation.

AVIXA resources reinforce that AV-over-IP transforms distribution from simple point-to-point paths into encoder/network/decoder architectures.

**State:** `draftable`; exact network/product configuration remains system-specific.

---

# MDQ-048 — Video documentation, commissioning and leadership

## Documentation families

- signal-flow diagrams;
- screen maps/canvases;
- processor/configuration backups;
- EDID/configuration records where relevant;
- camera plots;
- content/version inventories;
- router/switcher/output maps;
- network diagrams;
- test-pattern/QC records;
- change/revision logs;
- advance documents;
- show reports / damage / unresolved issues.

## Commissioning / QC concepts

Teach verification of expected sources/destinations, configuration/version consistency, image/screen mapping, monitoring/test patterns, handoff and punch-list/change documentation. Structural, electrical or other controlled-system signoff remains with the applicable responsible authority.

## Leadership responsibilities

- advance/specification;
- labor/crew sequencing;
- signal/system documentation;
- screen/canvas planning;
- content ownership/versioning;
- spares/redundancy;
- vendor/client communication;
- QC/acceptance;
- change management;
- show reports and closeout.

Sector examples include touring/festival, corporate/convention, broadcast/sports, theatre/worship/venue and rental-shop workflows, but sector detail belongs primarily in MDQ-110–116 overlays.

**State:** `draftable`; practitioner validation required.

---

# 10. Cross-packet competency graph

**Video Support / Utility**
→ cable / display / signal-chain recognition
→ **Video Technician**

From there:

- LED Technician → Processing / Calibration / LED Lead;
- Switcher / Presentation Operator → TD / screen-management specialist;
- Projection Technician → projection specialist;
- Camera Utility → Camera Operator → CCU/Shading / broadcast-camera specialist;
- Playback Operator → Media Server / graphics / real-time specialist;
- Video Engineer → signal/sync/network engineering → EIC/system design;
- Shop Technician → prep/QC/service triage;
- Video Lead → advance/labor/vendor/QC leadership.

Parallel branches can transfer laterally; they are not one rank ladder.

---

# 11. Authority-class routing

| Competency | Learning home | Crew Blueprint authority ceiling |
|---|---|---|
| Cable/display support | T3 | A1 assigned support |
| LED/signal/switching concepts | T4 | A0/A1 education |
| LED-processing knowledge | T4/operator branch | actual system responsibility external |
| Projection knowledge | T4/specialist | exact setup/operation assigned externally |
| Camera/switching knowledge | T4/operator branch | show responsibility external |
| Media-server/playback knowledge | T4/operator branch | actual show responsibility external |
| Network-video knowledge | T4/T7 | system/network authority external |
| Rigging/power interfaces | awareness | controlled external boundary |
| Lead workflow | T5 | does not appoint learner as lead |
| EIC/system design | T7 | does not create employer/professional authority |

---

# 12. Current official source ledger — core additions

## SMPTE
- ST 2110 Suite: https://www.smpte.org/standards/st2110
- ST 2110 FAQ: https://www.smpte.org/smpte-st-2110-faq

## AVIXA
- https://www.avixa.org/
- ANSI/AVIXA D401.01:2023 documentation standard

## Brompton Technology
- https://www.bromptontech.com/online-help/

## NovaStar
- https://www.novastar.tech/

## Blackmagic Design
- https://www.blackmagicdesign.com/products/atemsdi

Manufacturer/platform sources support model-specific claims only and must remain versioned.

---

# 13. Remaining unresolved Video evidence

1. current LED processor/model ecosystem comparison;
2. practitioner validation of LED build/QC handoffs;
3. signal-standard/version matrix for SDI/HDMI/DisplayPort/fiber/AV-over-IP;
4. projection manufacturer/system comparison;
5. media-server/platform comparison;
6. camera/broadcast title/workflow validation;
7. current NMOS/IPMX/NDI/interoperability mapping;
8. HDR/color-management/virtual-production branch;
9. original/reviewed diagrams and visuals;
10. assessment validity and learner usability;
11. sitewide source/citation/content matrix.

---

# 14. Research-state decision

**MDQ-041–048 state:** `researched` → largely `draftable` for bounded initial curriculum architecture.

Not publication-ready: practitioner review, learner testing, exact model/standard verification, visual review, source freshness and claim-level matrixing remain required.