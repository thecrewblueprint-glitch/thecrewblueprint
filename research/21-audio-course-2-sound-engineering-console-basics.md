# 21 — Audio Course 2: Sound Engineering & Console Basics

**Research Queue ID:** CA-001  
**Status:** Complete research packet  
**Research date:** 2026-08-17  
**Purpose:** Establish the evidence-backed instructional architecture for the second Crew Blueprint Audio pathway course, progressing beyond ground-hand support into beginner sound-engineering and console concepts without implying professional qualification.

---

## Decision question

**What is the correct beginner mental model for progressing from signal path → mixing → troubleshooting?**

## Bottom-line finding

The proposed three-part progression is sound, but should be framed more precisely as:

1. **Audio System & Signal-Flow Fundamentals**
2. **Console Operation & Basic Mixing**
3. **Systematic Troubleshooting & Operational Awareness**

The central teaching model should be:

> **Know where the signal is supposed to go before learning what every control does.**

A learner should first understand audio as a directed system, then learn how a console modifies and routes that system, and only then learn to diagnose faults by locating where the expected signal path breaks down.

This is consistent with Yamaha's live-mixing training sequence, which establishes connections, microphones, inputs, and gain structure before EQ, dynamics, buses, faders, effects, soundcheck, and more advanced applications.

The course should remain **console-independent at the conceptual level**. Model-specific screenshots or exercises can be used as examples, but the transferable concepts—input, preamp, gain, processing, routing, buses, output, metering, PFL/cue, headroom, and signal tracing—should be taught before manufacturer-specific navigation.

---

# 1. Curriculum boundary

This course should sit directly above Audio Course 1 / ground-hand audio support.

Course 1 teaches the learner how to support an audio department safely and predictably: moving equipment, handling cable, recognizing common system components, following direction, and understanding what work remains outside an entry-level hand's authority.

Course 2 should move into **technical understanding and supervised beginner operation**, but it should not claim to produce an independent FOH engineer, monitor engineer, RF coordinator, systems engineer, network engineer, or qualified electrical worker.

A suitable terminal capability is:

> A learner can trace a basic live-audio signal from source to audience, recognize the major controls and routing structures of a mixing console, explain basic gain structure, build a simple mix in a controlled training context, and use a disciplined signal-path method to isolate common faults while recognizing when to stop and escalate.

---

# 2. The core beginner mental model

A novice should not encounter audio as a list of disconnected devices or console controls. The course should repeatedly return to a single system model:

**Source → transducer/input → preamp/gain → processing → routing/buses → output processing → amplification → loudspeaker → listener**

Depending on the system, stage boxes, digital networks, DSP, wireless links, monitor buses, matrices, and other devices may appear inside this chain. Those additions should be taught as extensions of the same model rather than as unrelated technologies.

Yamaha's introductory materials likewise describe audio as beginning at a source and moving through connections and system components toward an output, while its live-mixing curriculum teaches connection and input configuration before processing and mixing.

### Instructional implication

Every major console concept should answer one of four questions:

1. **Where is the signal now?**
2. **What is being done to it here?**
3. **Where is it being sent next?**
4. **How can I verify that it arrived?**

That same framework becomes the troubleshooting method later in the course.

---

# 3. Module 1 — Audio System & Signal-Flow Fundamentals

## Recommended purpose

Give the learner a stable internal picture of how a basic live sound system works before asking them to mix it.

## Recommended sequence

### 3.1 Signal origin and destination

Introduce the idea that audio signals originate at sources and move through a chain toward one or more destinations.

The learner should distinguish the physical sound in the room from the electrical/digital representation moving through the sound system.

### 3.2 Signal-level families

Teach the practical distinction among:

- microphone level;
- instrument level;
- line level.

Yamaha's interconnection and gain-staging guidance distinguishes these signal ranges and explains that incorrect source/input matching can create insufficient level, noise, overload, distortion, or impedance-related problems.

The instructional objective is not memorization of one universal voltage value. It is recognition that **different sources produce different signal ranges and inputs are designed for particular source types**.

### 3.3 Common physical connections

Teach recognition and functional purpose of common professional-audio connections, including XLR and common TS/TRS applications, while reinforcing that connector shape alone does not define signal type.

Balanced-versus-unbalanced concepts can be introduced at a beginner level: balanced interconnections are widely used in professional audio to improve noise rejection over cable runs.

### 3.4 Microphones and DI boxes

Teach microphones as transducers at the beginning of the chain and DI boxes as interface devices commonly used to connect instrument sources appropriately into audio systems.

This course should explain why a DI exists in the signal path rather than treating it as a mysterious stage accessory.

### 3.5 Phantom power awareness

Shure describes phantom power as DC supplied through the microphone cable to power condenser-microphone electronics, commonly in the 12–48 V range, with 48 V widespread in professional equipment.

Beginner training should teach:

- what phantom power is;
- why some microphones/devices require it;
- that it is supplied from a mixer, preamp, stage box, or similar device;
- that learners should not toggle power-related settings casually when they do not understand the connected equipment.

The objective is informed awareness and supervised operation, not blanket rules about every microphone or device type.

### 3.6 Stage boxes, snakes, and digital transport

Teach the functional idea: multiple stage signals need to reach the console and outputs need to return to stage/system destinations.

The learner should understand both an analog snake model and the modern possibility that stage I/O is converted to digital audio and transported over a network.

### 3.7 Preamps and gain

Gain structure deserves disproportionate emphasis because it connects signal flow, noise, distortion, headroom, metering, and troubleshooting.

Yamaha defines gain staging as setting signal levels appropriately between system components. Poor gain staging can increase noise and distortion and reduce headroom.

The beginner model should be:

**source level → preamp/input gain → channel processing → channel fader → bus/master → output/system**

The learner should understand that the preamp establishes a usable signal for downstream processing; the channel fader is not a substitute for badly set input gain.

### 3.8 Headroom and clipping

Teach headroom as operating margin between normal signal level and overload. Avoid giving learners one universal meter target because meter scales, calibration, analog/digital references, equipment, and workflows vary.

The transferable principle is:

> Establish a healthy signal with adequate headroom; do not run so low that noise dominates or so high that peaks overload the signal path.

### 3.9 FOH and monitor paths

Introduce the fact that one input may feed multiple destinations:

- front-of-house mix;
- monitor mixes;
- recording/broadcast feeds;
- matrices or other outputs.

This prepares the learner for buses and pre-/post-fader routing.

### 3.10 Powered versus passive loudspeaker systems

Teach only the functional distinction needed for signal tracing: some loudspeakers contain amplification while passive loudspeakers require an external amplifier. This changes the final stages of the signal path and therefore changes troubleshooting.

---

# 4. Module 2 — Console Operation & Basic Mixing

## Recommended purpose

Teach the console as a **signal-routing and signal-processing environment**, not a wall of knobs.

## 4.1 Console-independent concepts first

A beginner should learn concepts that transfer among Yamaha, Allen & Heath, Midas, DiGiCo, Soundcraft and other professional systems:

- input channel;
- preamp/gain;
- pad;
- phantom-power awareness;
- high-pass filter;
- EQ;
- dynamics awareness;
- fader;
- mute;
- pan;
- PFL/AFL/Solo/Cue;
- aux/mix bus;
- group;
- main/stereo bus;
- monitor send;
- output master;
- patching;
- scene/snapshot concepts;
- meters;
- headroom.

Manufacturer-specific user interfaces should be examples layered onto this vocabulary.

## 4.2 Input gain before mix balance

Yamaha's training places gain structure before fader balancing. Its beginner PA guidance instructs operators to establish input gain while avoiding peak/overload indications before using faders to balance the mix.

That supports the instructional sequence:

**configure source/input → establish gain → verify signal → apply necessary filtering/processing → route → balance with faders**

## 4.3 High-pass filtering and EQ

Teach EQ as frequency-selective adjustment, not as a magic repair tool.

At this level the learner should understand:

- frequency spectrum in practical terms;
- boost versus cut;
- high-pass filtering;
- broad versus narrow adjustments;
- why excessive processing can create new problems.

Detailed system tuning and advanced corrective EQ should remain outside this beginner course.

## 4.4 Faders and unity

Teach the difference between input gain and fader level. Explain unity as a reference point where a fader neither boosts nor attenuates relative to its calibrated path, while noting that exact workflows vary by console and system.

## 4.5 Buses and routing

This is the conceptual bridge from simple signal path to actual mixing.

A bus should be explained as a destination/combination path to which channels can be sent. Examples:

- main L/R;
- monitor aux;
- effects send;
- subgroup;
- matrix/output path.

Learners should practice answering: **Which input is being sent to which destination, and at what point in the channel path?**

## 4.6 Pre-fader versus post-fader

Teach the operational consequence rather than only the terminology.

A pre-fader send can remain independent of the channel's FOH fader movement; a post-fader send follows the relevant fader relationship. This is central to understanding common monitor and effects workflows.

## 4.7 PFL/Cue as a unifying teaching tool

PFL is unusually valuable because it connects four concepts at once:

- signal verification;
- metering;
- gain setting;
- troubleshooting.

Yamaha describes PFL as allowing an operator to hear and meter a channel before its fader. It can verify whether a signal has reached the channel, assist gain staging, and help isolate noise or other problems without relying solely on the house mix.

The course should use PFL/Cue repeatedly from the first console exercise through troubleshooting scenarios.

## 4.8 Scenes and digital-console awareness

Teach scenes/snapshots as stored console states and emphasize that recalling a state can alter many parameters at once. Beginners need change-awareness and confirmation discipline before they need advanced show-file management.

---

# 5. Module 3 — Systematic Troubleshooting & Operational Awareness

## Recommended purpose

Replace random knob-turning with a repeatable diagnostic method.

## 5.1 The troubleshooting algorithm

Teach:

1. **Define the symptom precisely.**
2. **Decide whether the problem is local or global.**
3. **Draw or recall the expected signal path.**
4. **Identify a known-good point.**
5. **Verify one stage at a time.**
6. **Change one variable at a time when practical.**
7. **Confirm the result.**
8. **Escalate when the fault exceeds your authority, training, or safe access.**

Yamaha explicitly distinguishes local problems affecting one/few channels from global problems affecting the larger system. Its troubleshooting materials then work through connections, routing, gain, processing, amplification, loudspeakers, and digital-console issues rather than encouraging random adjustment.

## 5.2 The diagnostic ladder

A useful Crew Blueprint troubleshooting ladder is:

**source → cable/connection → stage I/O → input patch → preamp/gain → channel processing → channel routing → bus/master → output patch/processing → amplifier → loudspeaker**

For wireless sources, insert:

**source → transmitter → RF link → receiver → receiver audio output → console input**

For networked audio, insert the relevant digital transport/routing stages.

## 5.3 No-signal faults

Beginner scenarios should include:

- wrong or failed cable;
- incorrect physical input;
- muted channel;
- missing routing/assignment;
- fader/master down;
- wrong digital patch;
- condenser microphone without required phantom power;
- powered device not powered;
- wireless receiver has RF but no usable audio, or audio path is fine while RF link is not.

The educational objective is not to memorize a checklist. It is to locate the last known-good point.

## 5.4 Distortion and noise

Teach the learner to distinguish symptoms such as:

- overload/clipping;
- hiss/noise associated with poor gain structure;
- intermittent connection;
- hum/buzz as a symptom requiring systematic isolation;
- processing settings that unintentionally suppress or distort audio.

Avoid training beginners to defeat safety grounds, open electrical equipment, or improvise electrical repairs.

## 5.5 Digital routing errors

Digital consoles create failure modes where the physical cable is correct but the software patch is not. Yamaha specifically identifies input/routing issues as a troubleshooting category on digital consoles.

Therefore, Course 2 must establish that **physical connection and logical routing are separate layers**.

---

# 6. Dante and networked-audio scope

Audinate released its third-edition Dante Certification training in October 2025. The current program spans foundational networking through more advanced IP addressing, VLAN, QoS, multicast, system design, interoperability, and troubleshooting.

Historically and currently, Audinate separates introductory Dante/audio-networking knowledge from intermediate and advanced network design. That provides a useful Crew Blueprint scope boundary.

## Include in Audio Course 2

- what audio-over-IP means;
- why a stage box or console may be network-connected;
- device and channel-routing concepts;
- the idea of Dante Controller;
- transmitter/receiver or source/destination subscription concepts at an introductory level;
- awareness that network routing can be the reason a physically connected system has no audio;
- awareness that clocking/network state matters, without advanced configuration training.

## Reserve for later training

- detailed IP addressing/subnet design;
- VLAN design;
- QoS configuration;
- multicast design;
- redundant network architecture;
- managed-switch engineering;
- advanced clocking;
- AES67/ST 2110 integration;
- large-system design;
- expert network troubleshooting.

Course 2 should prepare a learner to understand what a Dante technician is looking at, not imply that the learner can independently engineer a production network.

---

# 7. Wireless/RF scope

Wireless audio should be taught as a signal path containing **two different domains**:

**audio source → transmitter → RF path → receiver → receiver audio output → console/system**

This distinction is critical for troubleshooting. A fault before/after the RF link is not the same as an RF-coordination problem.

Shure's Wireless Workbench documentation describes professional wireless management as involving device networking, scan data, frequency coordination, frequency deployment, and live RF/audio/battery monitoring.

## Include in Course 2

- transmitter/receiver roles;
- basic RF-versus-audio distinction;
- frequency/channel awareness;
- antenna and line-of-sight awareness at a conceptual level;
- battery/status awareness;
- recognizing that multi-channel wireless systems require coordination;
- recognizing Wireless Workbench or comparable tools as specialist coordination/monitoring systems.

## Reserve for later RF specialization

- independent frequency coordination;
- intermodulation planning;
- spectrum engineering;
- complex antenna distribution;
- large-channel-count RF deployment;
- regulatory/spectrum planning in depth.

---

# 8. Feedback: correct beginner model

Feedback should not be taught as "hear a squeal, grab the EQ."

Shure describes acoustic feedback as a loop in which loudspeaker output re-enters an open microphone and is amplified repeatedly. Contributing factors include microphone/loudspeaker placement, distance from microphone to intended source, system gain, number of open microphones, room acoustics, and frequency response.

Shure also cautions that equalization cannot fix fundamental system-design or acoustic problems.

Therefore teach this order of reasoning:

1. **Identify the acoustic feedback loop.**
2. **Consider microphone/source placement.**
3. **Consider microphone/loudspeaker geometry.**
4. **Consider excessive gain and unnecessary open microphones.**
5. **Consider room/system response.**
6. **Use EQ carefully only as part of the solution, not as a substitute for correcting obvious physical problems.**

Advanced system optimization/ring-out technique should not be treated as an unsupervised beginner competency.

---

# 9. Hearing-safety requirement

Live audio training should include occupational-noise awareness because learners are being trained to work around amplified sound systems.

OSHA 29 CFR 1910.95 establishes:

- an 8-hour 90 dBA permissible-exposure reference in Table G-16;
- an **85 dBA 8-hour TWA action level** for the hearing-conservation program;
- monitoring obligations when exposure may reach that action level;
- hearing-protector and training requirements under specified conditions.

Crew Blueprint should teach these as occupational-noise and hearing-conservation concepts, not as permission for a learner to perform a compliance determination from a phone app or a single sound-level reading.

Course language should reinforce employer/site rules, appropriate hearing protection, and escalation when exposure is uncertain.

---

# 10. Recommended lesson architecture

The three modules should be broken into focused lessons rather than delivered as three large information blocks.

## Module 1 — Audio System & Signal-Flow Fundamentals

**Lesson 1.1 — From Source to Listener**  
Signal-chain model; physical sound versus audio signal; inputs and outputs.

**Lesson 1.2 — Signal Levels, Connections & Interfaces**  
Mic/instrument/line level; XLR/TS/TRS recognition; balanced concepts; DI purpose.

**Lesson 1.3 — Microphones, Phantom Power & Stage I/O**  
Microphone roles; condenser/dynamic awareness; phantom power; stage boxes/snakes.

**Lesson 1.4 — Gain Structure, Metering & Headroom**  
Preamp gain; noise versus overload; meters; headroom; PFL introduction.

**Lesson 1.5 — System Destinations**  
FOH, monitors, outputs, amplification, powered/passive speakers, introductory digital transport.

## Module 2 — Console Operation & Basic Mixing

**Lesson 2.1 — Reading a Console as Signal Flow**  
Channel strip; selected-channel digital workflows; input-to-output mental tracing.

**Lesson 2.2 — Filters, EQ & Dynamics Awareness**  
HPF; EQ; compression/gate concepts without advanced parameter training.

**Lesson 2.3 — Faders, Pan, Mutes & Mix Balance**  
Fader versus gain; unity; balance; basic pan.

**Lesson 2.4 — Auxes, Buses, Groups & Monitor Routing**  
Pre/post concepts; monitor mixes; buses and destinations.

**Lesson 2.5 — Patching, Scenes & Digital-Console Discipline**  
Physical versus logical patch; scenes/snapshots; confirmation before changes.

## Module 3 — Troubleshooting & Operational Awareness

**Lesson 3.1 — Troubleshooting by Signal Path**  
Local/global; known-good point; one-stage-at-a-time method.

**Lesson 3.2 — No Signal / Low Signal / Distortion / Noise**  
Controlled diagnostic scenarios.

**Lesson 3.3 — Feedback as a System Problem**  
Acoustic loop; geometry; gain; open microphones; EQ limitations.

**Lesson 3.4 — Wireless and RF Awareness**  
Audio versus RF domain; receiver/transmitter path; when RF coordination is specialist work.

**Lesson 3.5 — Dante & Networked-Audio Awareness**  
Audio-over-IP mental model; logical routing; Controller awareness; escalation boundaries.

**Lesson 3.6 — Integrated Troubleshooting Scenario**  
Learner receives a simple system diagram plus symptoms and must locate likely failure domains without random changes.

---

# 11. Retrieval and assessment design

Because Course 2 depends heavily on a mental model, assessment should repeatedly require the learner to **retrieve and use the signal path**, not merely recognize terminology.

Recommended assessment patterns:

- reorder scrambled signal-chain stages;
- identify the next expected stage after a given component;
- choose where to meter/listen next;
- distinguish gain problems from fader/routing problems;
- determine whether a fault is local or global;
- identify physical-versus-logical routing faults;
- trace one input simultaneously to FOH and a monitor bus;
- classify a wireless symptom as likely audio-path or RF-domain;
- identify when the correct action is escalation rather than further adjustment.

### Strong final assessment

Use a multi-stage virtual call:

1. inspect a simplified system diagram;
2. patch several sources conceptually;
3. establish sensible gain/headroom decisions;
4. create FOH and monitor routing;
5. respond to a no-signal fault;
6. respond to a distorted channel;
7. diagnose a digital patch error;
8. recognize a wireless/RF problem;
9. respond appropriately to feedback;
10. identify a noise-exposure/hearing-protection concern.

This tests integration rather than isolated vocabulary.

---

# 12. Explicit exclusions / later-course material

Do not imply mastery of the following from this course alone:

- independent FOH engineering for complex shows;
- independent monitor engineering;
- system tuning/alignment;
- loudspeaker prediction/design;
- amplifier/DSP system engineering;
- advanced dynamics and effects;
- show-file architecture for complex productions;
- advanced RF coordination;
- advanced Dante/network design;
- electrical repair or energized electrical work;
- professional hearing/noise compliance measurement;
- advanced measurement platforms and transfer-function analysis.

These should become later specialist or mastery courses.

---

# 13. Recommended course outcome statement

> **After completing Audio Course 2, the learner should be able to explain and trace the major stages of a basic live-sound signal path; recognize the transferable controls, buses, routing structures, and metering concepts found on professional mixing consoles; establish basic gain structure and a simple supervised mix; and apply a disciplined signal-path troubleshooting method to common audio faults. Completion demonstrates foundational knowledge, not independent professional qualification or authorization.**

---

# 14. Evidence strength and limitations

## Strongly supported

- Teach connection/input/gain concepts before advanced mixing controls.
- Treat gain structure as foundational to noise, distortion, headroom, and mix control.
- Use PFL/Cue for both gain setting and signal verification.
- Teach troubleshooting as systematic signal-path isolation.
- Separate physical connection from digital routing/patching.
- Treat feedback as a system/acoustic-loop problem rather than an EQ-only problem.
- Keep introductory Dante knowledge separate from advanced network engineering.
- Include occupational-noise/hearing-conservation awareness.

## Curriculum synthesis rather than an external industry standard

The exact **three-module structure**, lesson breakdown, troubleshooting ladder, terminal outcome statement, and assessment architecture above are **Crew Blueprint curriculum recommendations synthesized from the sources**. They should not be described as a Yamaha, Shure, Audinate, OSHA, or industry-mandated curriculum.

There is no evidence here establishing one universal number of lessons, one universal console workflow, or one universal meter target across all professional audio systems.

---

# 15. Primary and authoritative source set

1. **Yamaha — How To Mix Live Music**  
   https://usa.yamaha.com/products/contents/proaudio/training_support/how_to_mix_live_music/index.html  
   Supports the progression from connection, microphones, inputs and gain structure into EQ, dynamics, faders, buses, effects and soundcheck.

2. **Yamaha — Live Sound Interconnections 101**  
   https://hub.yamaha.com/proaudio/livesound/interconnections-101/  
   Supports mic/line/instrument signal-level distinctions and correct source/interconnection concepts.

3. **Yamaha — Gain Staging**  
   https://hub.yamaha.com/proaudio/livesound/gain-staging/  
   Supports gain structure, headroom, source/input matching, PFL metering and noise/distortion consequences.

4. **Yamaha — Using Solo During Live Mixing**  
   https://hub.yamaha.com/proaudio/livesound/using-solo/  
   Supports PFL/AFL/Cue distinctions and PFL's value for gain setting and fault isolation.

5. **Yamaha — Live Sound Troubleshooting Tips, Part 1**  
   https://hub.yamaha.com/proaudio/livesound/live-sound-troubleshooting-tips-part-1/  
   Supports local-versus-global fault framing and systematic PA troubleshooting.

6. **Yamaha — Live Sound Troubleshooting Tips, Part 2**  
   https://hub.yamaha.com/proaudio/livesound/tools-of-the-trade-live-sound-troubleshooting-tips-part-2/  
   Supports diagnosis of no-signal, distorted/noisy inputs, gain problems and digital-console issues.

7. **Shure — What is Phantom Power?**  
   https://service.shure.com/articles/en_US/Knowledge/what-is-phantom-power  
   Supports phantom-power definition and condenser-microphone power concepts.

8. **Shure — How do I fix my feedback problem?**  
   https://service.shure.com/articles/en_US/Knowledge/how-do-i-fix-my-feedback-problem  
   Supports the acoustic-loop model and physical/acoustic contributors to feedback.

9. **Shure — Basics of Equalization and Feedback**  
   https://service.shure.com/articles/en_US/Knowledge/basics-of-equalization-and-feedback  
   Supports limits of EQ and the principle that acoustical/system-design problems cannot simply be repaired electronically.

10. **Shure — Wireless Workbench Quick Start Guide**  
    https://www.shure.com/en-US/docs/quickstart/WIRELESS-WORKBENCH  
    Supports the professional RF workflow: device networking, scan data, frequency coordination, deployment and monitoring.

11. **Audinate — Revamped Dante Training Program / Third Edition (2025)**  
    https://www.audinate.com/press/audinate-launches-completely-revamped-dante-training-program/  
    Supports current Dante training levels and the distinction between foundational and advanced networking topics.

12. **Audinate — Dante Certification Level 1 background**  
    https://www.audinate.com/press/online-dante-certification-program-now-available/  
    Supports the foundational scope of basic audio networking, small Dante networks, Dante Controller and Virtual Soundcard.

13. **OSHA — 29 CFR 1910.95 Occupational Noise Exposure**  
    https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.95  
    Supports occupational-noise exposure limits, 85 dBA 8-hour TWA action level, hearing-conservation requirements, monitoring, protectors and training.

---

# 16. Research-queue disposition

**CA-001: COMPLETE**

### Decision

Retain the proposed progression, with the refined architecture:

**Module 1 — Audio System & Signal-Flow Fundamentals**  
**Module 2 — Console Operation & Basic Mixing**  
**Module 3 — Systematic Troubleshooting & Operational Awareness**

### Primary curriculum rule

**Signal flow is the organizing mental model for the entire course.** Console operation should be taught as modification/routing of that path, and troubleshooting should be taught as verification of that path.

### Next queue item

**CA-002 — Staging & Carpentry Course 2: Build & Load Coordination**
