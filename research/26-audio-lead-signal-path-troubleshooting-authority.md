# 26 — Audio Lead: Signal Path & Troubleshooting Authority

**Research Queue ID:** CB-003  
**Status:** Complete research packet  
**Research date:** 2026-08-17  
**Depends on:** Package 24 / CB-001 and Package 21 / CA-001  
**Purpose:** Define how an audio lead/crew chief advances beyond technician-level signal-flow competence into system responsibility, crew leadership, fault triage, and escalation.

---

## Bottom-line finding

PRG’s current Audio Crew Chief classification provides a direct industry model: the crew chief leads technicians and stagehands, can **plan, execute, and monitor audio technical requirements**, has deep technical/product knowledge, and is responsible for the relevant audio systems. PRG separately lists Audio Technician, Wireless Technician, Network Technician, FOH Engineer, Monitor Engineer, System/PA Calibration Technician, and Intercom Technician.

That separation is crucial. The Audio Lead course should not pretend one lead personally performs every specialist function. Instead, the lead must understand the complete system well enough to **coordinate specialists, direct the crew, verify signal-path integrity, localize faults, protect show state, and know when to hand a problem to the specialist who owns that layer**.

The lead mental model is:

**system intent → signal-flow map → crew deployment → physical build → patch/routing → gain/processing → network/RF/speaker-system interfaces → verification → fault isolation → handoff/show readiness**.

---

# 1. Progression from Audio Course 2

Package 21 establishes the beginner model:

**source → input/preamp → processing → routing → output → amplification → loudspeaker → listener**.

The Audio Lead course should retain that model but add three responsibilities:

1. **multiple simultaneous signal paths** rather than one channel;
2. **people and specialist coordination** rather than personal troubleshooting only;
3. **system readiness/accountability** rather than “I fixed my assigned channel.”

A technician asks: **Where did this signal fail?**

A lead additionally asks: **How large is the failure domain, who owns the affected layer, what is the fastest safe verification path, what else could this change affect, and what must production know?**

---

# 2. Role boundaries inside modern audio

PRG’s role taxonomy is strong evidence that professional audio leadership is not one undifferentiated job.

Separate roles include:

- Audio Crew Chief;
- Audio Technician;
- Audio Wireless Technician;
- Audio Network Technician;
- Audio FOH Engineer;
- Audio Monitor Engineer;
- System & PA Calibration Technician;
- Intercom Technician;
- Backline Technician.

Crew Blueprint should therefore teach **functional ownership**.

An Audio Crew Chief may coordinate the whole audio department while an FOH engineer owns the audience mix, a monitor engineer owns performer mixes, an RF specialist owns wireless coordination, a network technician owns complex audio-network configuration, and a systems technician owns PA calibration/system optimization.

Small shows may combine roles. Large shows may separate them sharply.

---

# 3. Lead-level signal-flow mapping

The lead should be able to map the system at several layers.

## 3.1 Physical layer

- source/microphone/DI;
- cable;
- stage box/I/O;
- console/control surface;
- DSP;
- amplifier/powered speaker;
- loudspeaker;
- wireless receiver/transmitter;
- network switch and networked endpoints where applicable.

## 3.2 Logical layer

- input patch;
- channel routing;
- buses/auxes/groups;
- matrices;
- output patch;
- digital subscriptions/routes;
- scene/snapshot state.

## 3.3 Operational ownership layer

- FOH;
- monitors;
- RF;
- PA/system;
- network;
- intercom/comms;
- stage patch;
- recording/broadcast feeds where present.

Lead training should repeatedly require learners to identify **which layer and which owner** are implicated by a symptom.

---

# 4. Fault-domain triage

The lead should first classify the scope:

- one source/channel;
- one stage box/I/O group;
- one bus/mix;
- one output zone;
- one wireless channel;
- one network segment/device;
- one loudspeaker/amp path;
- system-wide.

This prevents the common failure mode of changing global settings to fix a local problem.

A recommended lead troubleshooting sequence:

1. define symptom and affected scope;
2. identify last known-good point;
3. verify the physical layer;
4. verify logical patch/routing;
5. verify gain/mute/processing state;
6. verify output path;
7. isolate specialist domains such as RF/network/system processing;
8. change one controlled variable at a time where practical;
9. verify restoration;
10. communicate cause/status and any remaining risk.

Yamaha’s gain-staging and troubleshooting guidance supports signal-path verification and use of PFL/metering rather than random adjustment.

---

# 5. RF authority

Shure’s Wireless Workbench documentation shows that professional wireless management includes networked device discovery, RF scanning, frequency coordination, deployment, and live monitoring of RF/audio/battery state.

Therefore the lead needs enough RF understanding to:

- distinguish an audio-path fault from an RF-link fault;
- recognize when a coordination issue is likely;
- preserve established frequency coordination;
- direct basic verification;
- escalate to the RF owner when the problem requires spectrum/coordination expertise.

The course should not imply that every Audio Crew Chief is automatically an expert RF coordinator.

A strong scenario is:

**receiver has stable RF but no console signal** versus **console path is intact but RF is dropping**. The lead should route the troubleshooting effort differently.

---

# 6. Networked-audio authority

Audinate’s 2025 third-edition Dante Certification program explicitly separates foundational through advanced networking and Dante topics, including IP addressing, VLANs, QoS, multicast, system design, interoperability, and expert troubleshooting.

PRG also separately identifies Audio Network Technician as a specialist role requiring deep network/audio-network knowledge.

Therefore the Audio Lead course should teach:

- networked audio as part of the signal path;
- device/subscription/routing awareness;
- clock/status awareness;
- basic endpoint and connection verification;
- preservation of established network configuration;
- when a fault should be handed to the audio-network specialist.

Do not make advanced switch configuration, VLAN/QoS design, multicast engineering, or large-system Dante architecture default Audio Lead competencies unless the pathway explicitly adds that specialization.

---

# 7. Console and show-state governance

The lead should understand that console scenes, patches, processing, routing, and output configuration are **show state**.

Teach:

- identify the authoritative show file/state;
- back up before consequential changes according to production procedure;
- distinguish temporary troubleshooting changes from approved show changes;
- document/communicate changes affecting other operators;
- avoid solving one path by silently breaking another;
- restore temporary diagnostic changes after testing.

This is especially important when FOH, monitors, broadcast, recording, and system processing share networked resources.

---

# 8. Crew leadership

Following Package 24, the Audio Lead must translate the system plan into work packages:

- unload/stage;
- speaker/PA assembly under applicable procedures;
- stage patch;
- microphones/stands/DI placement;
- cable paths;
- console/FOH/monitor world;
- RF racks;
- intercom;
- network endpoints;
- strike/repack.

The lead must match assignments to competence. A worker who can safely run XLR and place stands is not automatically qualified to alter network configuration, tune a PA, coordinate wireless, or change console routing.

---

# 9. Verification and readiness

A lead-level audio readiness check should establish, as applicable:

- expected devices are present and powered appropriately;
- physical patch matches plan;
- input/output routing is correct;
- gain structure is usable;
- FOH and monitor paths are verified;
- speaker/system paths are verified by the responsible role;
- RF status is verified by the responsible role;
- networked devices/routes are healthy;
- intercom/comms are functional where in scope;
- show files/scenes are controlled;
- unresolved faults and workarounds are communicated.

The exact checklist is production-specific.

---

# 10. Recommended terminal capability

A learner completing Audio Lead training should be able to:

> Direct an audio crew through build and strike; map and explain the physical, logical, and ownership layers of a live audio system; isolate faults by domain; protect established routing/show state; coordinate FOH, monitors, RF, networking, PA/system, and stage-patch specialists; verify readiness; and escalate problems that exceed the lead’s technical or organizational authority.

This does not make the learner an independent FOH engineer, monitor engineer, RF coordinator, network engineer, PA systems engineer, electrician, or employer-appointed Audio Crew Chief.

---

# 11. Primary sources

1. PRG Crew Portal — Audio Crew Chief and specialist audio classifications  
   https://crew.prg.com/en/
2. Yamaha — Gain Staging  
   https://hub.yamaha.com/proaudio/livesound/gain-staging/
3. Shure — Wireless Workbench Quick Start Guide  
   https://www.shure.com/en-US/docs/quickstart/WIRELESS-WORKBENCH
4. Shure — Wireless Workbench 7  
   https://www.shure.com/en-US/products/software/wwb
5. Audinate — 2025 launch of third-edition Dante Certification Levels 1–3  
   https://www.audinate.com/press/audinate-launches-completely-revamped-dante-training-program/
6. IATSE — current touring Yellow Card listings identifying Head Audio as a department head  
   https://iatse.net/shows/the-outsiders-tour/
7. OSHA — Safety Management: Education and Training  
   https://www.osha.gov/safety-management/education-training

## Related Crew Blueprint research

- Package 09 — Ground-Hand Audio Support
- Package 21 — Audio Course 2: Sound Engineering & Console Basics
- Package 24 — Cross-Department Lead/Crew Chief Framework

---

## Curriculum decision

**Make fault-domain ownership the central Audio Lead concept.** The lead must see the whole audio system and direct the response, but professional audio contains distinct specialist domains. Leadership means knowing how those domains fit together and who should own the decision—not pretending the crew chief personally replaces every specialist.