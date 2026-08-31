# MDQ-041–048 — Video / LED / Broadcast Detailed Evidence

**Prepared:** 2026-08-31  
**Status:** Detailed source-grounded research packet; suitable for competency synthesis and bounded drafting, not publication release  
**Domain:** `D-VID` Video / LED / Broadcast  
**Depends on:** MDQ-000–003, MDQ-040 role architecture, Packages 08/08A/13/13A, current Video C1/C2 materials  
**Purpose:** Close major curriculum gaps across LED display systems, signal standards/flow, switching/scaling/screen management, media/playback, camera/broadcast interfaces, projection, AV-over-IP/networking, sector workflows and department leadership.

---

## 1. Controlling curriculum principle

Video is a collection of adjacent systems rather than one ladder.

Parallel pathways include:

1. **video utility / cable / support**;
2. **LED display technician / processing**;
3. **switching / presentation / screen management**;
4. **playback / media server**;
5. **camera / CCU / shading / broadcast utility**;
6. **projection**;
7. **video engineering / signal / sync**;
8. **AV-over-IP / network video**;
9. **lead / EIC / system-design responsibility**.

A learner can be advanced in one branch and junior in another. Course completion does not appoint a learner as EIC, TD, camera shader, LED lead, projectionist, media-server operator, network engineer or other employer-controlled role.

---

# MDQ-041 — LED display hardware and build systems

## Scope

Teach LED displays as a system architecture and role interface, not as an unsupervised structural-build manual.

## Component/system map

Learners should recognize:

- panel/cabinet/module families;
- receiving electronics;
- processor/controller;
- power/data topology concepts;
- signal distribution;
- support/rigging/ground-support interfaces;
- service/spare modules;
- calibration/data relationships;
- environmental/model-specific limits.

## Responsibility layers

### Support / utility

- identify panel/case/component families;
- preserve labels/orientation;
- follow the assigned lead and exact system;
- protect connectors/data/power interfaces;
- report damage or mismatched components;
- recognize controlled structural/electrical boundaries.

### LED technician

Conceptual competencies include:

- system topology;
- processor/receiving-card relationships;
- mapping/canvas concepts;
- resolution/pixel-density relationships;
- model/configuration/version awareness;
- test/verification concepts;
- spare/component replacement boundaries;
- calibration and color-uniformity concepts.

### Lead / engineer

- system specification;
- model compatibility;
- processing strategy;
- redundancy/spares;
- signal/power/support interfaces;
- acceptance/QC;
- documentation/change control.

## Current manufacturer evidence

Brompton Tessera documentation demonstrates mature processor-side concepts including panel mapping, test patterns, calibration, HDR-related processing and thermal/color compensation. NovaStar documentation demonstrates an alternate professional processing/configuration ecosystem.

These are representative product ecosystems, not universal operating procedures.

## Boundary

Structural support, flown-display rigging, temporary power and other controlled work remain with the responsible qualified/authorized personnel and exact manufacturer/system documentation.

**State:** `draftable` for architecture/recognition/role content; model-specific practicals require manufacturer/practitioner review.

---

# MDQ-042 — Video signal standards and signal flow

## Canonical mental model

**source / camera / playback → source format → transport / conversion → routing / distribution → processing / scaling / switching → destination format → LED processor / projector / monitor / recorder / stream / broadcast output**

## Core concepts

Teach:

- resolution;
- frame rate;
- progressive/interlaced awareness;
- aspect ratio;
- color space/colorimetry awareness;
- bit depth;
- chroma sampling;
- signal reference/sync;
- conversion/scaling;
- metadata/handshake constraints;
- cable/transport limits as product/system-specific.

## Transport families

Recognize major families without turning connector memorization into the curriculum:

- SDI;
- HDMI;
- DisplayPort;
- optical/fiber transport;
- IP/network video;
- USB/webcam-style interfaces in smaller systems.

## Failure categories

Teach layered diagnosis:

- source/content;
- format mismatch;
- transport/cabling;
- conversion;
- routing;
- sync/reference;
- processing/scaling;
- destination/display;
- control/network layer.

## Curriculum disposition

- Department Support: signal-chain recognition and cable ownership.
- Department Systems: format/routing/conversion/sync reasoning.
- Advanced/Engineer: complex distribution, redundancy and system design.

**State:** `draftable`.

---

# MDQ-043 — Processing, scaling, switching and screen management

## System families

- live production switchers;
- presentation switchers;
- scalers;
- routers;
- multiviewers;
- LED processors;
- screen-management systems;
- confidence / DSM feed systems;
- record/stream outputs.

## Transferable switcher mental model

Teach:

- inputs/sources;
- program vs preview;
- buses/layers/keys;
- transitions;
- stills/graphics;
- aux outputs;
- multiview monitoring;
- macros/automation concepts;
- snapshot/configuration/show-file concepts;
- downstream destinations.

Blackmagic ATEM documentation provides one accessible example of program/preview and multi-camera switching, but product menus must remain vendor-specific.

## Scaling/screen management

Concepts:

- source canvas vs destination canvas;
- scaling/cropping;
- aspect management;
- multi-screen layouts;
- output mapping;
- confidence/presenter feeds;
- EDID/HDCP awareness as compatibility/security constraints;
- genlock/reference where applicable.

## Curriculum disposition

- Department Systems: switching/scaling/screen-management mental model.
- Operator branch: vendor/product-family workflow.
- Advanced/Engineer: system architecture, redundancy and timing.

**State:** `draftable`.

---

# MDQ-044 — Playback and media-server systems

## Scope

Media playback is an operator/specialist branch crossing video, lighting, broadcast and show control.

## Transferable concepts

- media asset;
- codec/container awareness;
- resolution/frame-rate relationship;
- alpha/key/fill awareness;
- playlist/cue/timeline concepts;
- multiple outputs/canvases;
- synchronization/timecode/trigger interfaces;
- redundant playback concepts;
- output routing;
- versioned content and show-file packages.

## Media-server branch

Advanced systems may include:

- mapping and compositing;
- real-time content;
- tracking/data interfaces;
- LED/projection canvases;
- genlock/sync;
- network control;
- show control;
- redundancy/failover.

Do not treat any one vendor platform as the transferable curriculum model.

## Curriculum disposition

- Department Systems: playback/sync/signal concepts.
- Operator/Specialist: media-server workflow.
- Advanced: multi-system integration and redundancy.

**State:** `draftable`; current platform comparisons remain a later freshness task.

---

# MDQ-045 — Camera, broadcast and video-engineering interfaces

## Role families

- camera utility;
- camera operator;
- CCU/shading operator;
- video engineer;
- technical director/switcher operator;
- EIC / engineer-in-charge context;
- playback/replay;
- record/stream engineering;
- graphics interfaces.

## Camera/system concepts

Teach conceptually:

- image sensor/lens path;
- exposure;
- frame rate/shutter interaction;
- white balance/color temperature/tint;
- focus/depth-of-field awareness;
- camera return/tally/comms;
- SDI/IP transport;
- reference/genlock;
- shading/matching as a specialist role.

## Broadcast/IP convergence

SMPTE ST 2110 is a central current source family for professional media over managed IP networks. The suite treats video, audio and ancillary data as separately timed IP essence streams referenced to common timing.

ST 2110 should be taught as a professional-media network architecture, not as a universal requirement for every event.

## Current standard context

SMPTE identifies ST 2110 as an actively developed multipart suite; core documents were revised around 2022/2023 and the suite continues to expand.

## Curriculum disposition

- Department Support: camera/video-chain recognition.
- Department Systems: sync/format/routing/broadcast interfaces.
- Camera/Engineering specialist branches: deeper operation/configuration under employer assignment.

**State:** `draftable` for architecture and interfaces.

---

# MDQ-046 — Projection systems and visual-environment interfaces

## Scope

Projection should be its own video branch while remaining adjacent to lighting/scenic/media.

## Transferable concepts

- projector/lens/surface relationship;
- throw/lens-ratio awareness;
- image size and placement;
- brightness/contrast as environmental/system concepts;
- focus/geometry;
- edge blend / warp concepts;
- content resolution/frame-rate;
- color matching;
- scenic/surface interaction;
- environmental light interaction;
- media-server ownership/handoff.

## Boundary

Exact hanging/rigging, temporary power, laser-source service, high-access work and model-specific service remain with the appropriate authorized personnel/manufacturer pathway.

## Curriculum disposition

- Department Systems: projection architecture and signal interfaces.
- Specialist: projection alignment/blending/system operation with reviewed model-specific practice.

**State:** `draftable` for conceptual/system content.

---

# MDQ-047 — AV-over-IP, network video and synchronization

## Standards landscape

Current professional-video networking is not one protocol.

Relevant families include:

- SMPTE ST 2110 for managed professional-media IP;
- IPMX as an emerging/open AV-over-IP ecosystem related to ST 2110 concepts;
- NDI and proprietary vendor ecosystems;
- RTP and other network transport families;
- AES67 for audio interoperability within broader professional-media networks.

## SMPTE ST 2110 mental model

Teach:

- independent audio/video/data flows;
- common reference timing;
- managed IP network;
- RTP-based transport;
- unicast/multicast concepts;
- PTP timing;
- bandwidth/capacity planning;
- discovery/connection management as adjacent ecosystem functions.

SMPTE documentation notes cooperation with AES, IEEE, AMWA/NMOS, EBU and VSF in the broader interoperability ecosystem.

## Network-video fundamentals

- address/subnet awareness;
- switch/network topology;
- bandwidth;
- multicast;
- QoS/traffic engineering awareness;
- PTP/reference timing;
- redundancy;
- access/security/change control;
- monitoring/documentation.

AVIXA resources reinforce that AV-over-IP changes video distribution from simple point-to-point paths into networked encoder/switch/decoder architectures.

## Curriculum disposition

- Department Systems: network-video fundamentals.
- Engineer/Network specialist: managed-media IP, sync, redundancy and interoperability.

**State:** `draftable`; exact product/network configuration stays vendor/system specific.

---

# MDQ-048 — Video sector workflows and department leadership

## Touring / festival

- LED/display package advance;
- processor/screen-management handoff;
- guest video/playback/camera interfaces;
- compressed changeovers;
- screen/content routing;
- record/stream interfaces;
- spares/redundancy.

## Corporate/convention

- presentation switching;
- confidence/DSM;
- laptops/content compatibility;
- projection/LED display;
- breakout/general-session workflow;
- show-caller/client communication;
- streaming/recording.

## Broadcast/sports

- camera/shading;
- switcher/TD;
- replay/graphics;
- comms;
- reference/sync;
- ST 2110 or SDI infrastructure depending system;
- engineering/EIC responsibility.

## Theatre/worship/venue

- installed systems;
- recurring content/show files;
- camera/stream integration;
- projection/LED;
- lighting/scenic/media handoffs.

## Rental shop

- panel/cable/processor prep;
- camera/switcher/router prep;
- firmware/configuration/version awareness;
- case/inventory/QC;
- return/service triage.

## Lead responsibilities

- advance/specification;
- crew/labor sequencing;
- signal-flow and system documentation;
- screen/canvas planning;
- content ownership/versioning;
- spares/redundancy;
- vendor/client communication;
- QC and acceptance;
- change management;
- show reports/damage/issues.

**State:** `draftable`; practitioner validation required.

---

# 10. Cross-packet competency graph

**Video Support / Utility**
→ cable / display / signal-chain recognition
→ **Video Technician**

From there:

- LED Technician → Processing / Calibration / LED Lead;
- Switcher / Presentation Operator → TD / screen-management specialist;
- Playback Operator → Media Server / real-time specialist;
- Camera Utility → Camera Operator → CCU/Shading / broadcast-camera specialist;
- Projection Technician → projection specialist;
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
| Camera/switching knowledge | T4/operator branch | show responsibility external |
| Projection knowledge | T4/specialist | exact setup/operation assigned externally |
| Network-video knowledge | T4/T7 | system/network authority external |
| Rigging/power interfaces | awareness | controlled external boundary |
| Lead workflow | T5 | does not appoint learner as lead |
| EIC/system design | T7 | does not create employer/professional authority |

---

# 12. Current official source ledger — core additions

## SMPTE

- ST 2110 Suite: https://www.smpte.org/standards/st2110
- ST 2110 FAQ: https://www.smpte.org/smpte-st-2110-faq

Supports professional-media-over-IP architecture, timing, video/audio/data essence and current standards-suite status.

## AVIXA

- https://www.avixa.org/
- ANSI/AVIXA D401.01:2023 documentation standard

Supports professional AV system documentation, networked AV and AV/IT interface evidence.

## Brompton Technology

- https://www.bromptontech.com/online-help/

Representative primary source for Tessera LED processing, mapping, test patterns, calibration and color-processing concepts. Product-specific.

## NovaStar

- https://www.novastar.tech/

Representative alternate LED processing/configuration ecosystem. Product-specific.

## Blackmagic Design

- https://www.blackmagicdesign.com/products/atemsdi

Representative live-production switching/program-preview/camera-control ecosystem. Product-specific.

## GDTF/MVR / cross-domain data

The Lighting MDQ packet covers current GDTF/MVR standards; these remain relevant to video/media/scenic device/scene data exchange where supported.

## Media-server / playback vendors

Maintain current primary docs/training from representative live-event media platforms. Vendor-specific claims must remain versioned.

---

# 13. Remaining unresolved Video evidence

1. current LED processor/model ecosystem comparison;
2. practitioner validation of panel/build/QC handoffs;
3. signal-standard/version matrix for SDI/HDMI/DisplayPort/fiber/AV-over-IP;
4. projection manufacturer/system comparison;
5. media-server platform comparison;
6. camera/broadcast title and workflow validation across touring/corporate/sports/worship;
7. current NMOS/IPMX/NDI/interoperability source mapping;
8. HDR/color-management/virtual-production branch;
9. original/reviewed diagrams and visuals;
10. assessment validity and learner usability;
11. sitewide source/citation/content matrix.

---

# 14. Research-state decision

**MDQ-041–048 state:** `researched` → largely `draftable` for bounded initial curriculum architecture.

Not publication-ready: practitioner review, learner testing, exact model/standard verification, visual review, source freshness and claim-level matrixing remain required.

## Next execution

Use MDQ-040 + this packet for the Video competency/dependency graph and source crosswalk, then continue MDQ-051–057 Staging / Carpentry / Scenic detailed research.
