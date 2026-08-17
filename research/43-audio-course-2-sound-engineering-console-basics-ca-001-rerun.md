# Research Package 43 — CA-001 Rerun: Audio Course 2 — Sound Engineering & Console Basics

**Research date:** 2026-08-17  
**Queue item:** CA-001  
**Purpose:** Re-research the correct beginner mental model for live-event audio workflow after basic audio-support awareness.  
**Decision to resolve:** **What is the beginner mental model for audio workflow from signal path, through mixing, to troubleshooting?**

> **Status note:** This is a fresh CA-001 research pass created after the research queue was deliberately restarted. It does not overwrite the earlier Package 21. Treat this package as the newer evidence review for the restarted queue.

---

## Executive conclusion

The most defensible Course 2 mental model is:

> **Know where the signal is supposed to go → know what each stage is doing to it → use meters/listening to locate where reality stops matching the intended path → make the smallest safe correction or escalate.**

For a junior live-audio worker, audio should first be taught as a **traceable path**, not as a collection of console buttons:

**source → transducer / DI / wireless receiver → stage connection or stage box → transport → console input/preamp → channel processing → fader/pan → bus or mix → output routing/processing → amplifier (when external) → loudspeaker/monitor → listener**

A digital system may replace a long analog multicore with a networked stage box and Ethernet transport, and a powered loudspeaker may contain the amplifier and DSP internally, but the learner should still be able to identify the same functional stages.

Mixing is then taught as **controlled changes to that known path**: establish usable level, filter or shape tone, control dynamics, set channel level/pan, and deliberately send the signal to the required destination(s). Troubleshooting is the same model used diagnostically: **trace the signal, observe meters/listen at checkpoints, isolate the first failed stage, test one variable at a time, restore the intended path, and escalate when the fault crosses the learner's authority or safety boundary.**

This architecture is strongly consistent with Yamaha's training material on gain staging, buses/auxes, PFL/solo, groups, EQ, compression, scene memory and live-sound troubleshooting; Shure's guidance on feedback and RF systems; Audinate's Dante training hierarchy and Dante Controller documentation; and OSHA/NIOSH guidance on noise and electrical safety.

### Recommended three-module architecture

1. **Audio Fundamentals — Follow the Signal**  
   Learner builds the source-to-listener mental model, signal levels, gain structure, analog/digital transport, microphones/DIs/stage boxes/snakes/consoles/amplifiers/loudspeakers/monitors/FOH, and hearing/electrical boundaries.

2. **Console Basics — Control and Route the Signal**  
   Learner maps a channel through preamp → HPF/EQ/dynamics → fader/pan → buses → outputs; understands main mixes, auxes, monitor sends, groups, DCA/control groups, routing/patching, meters, PFL/solo/cue, mute, scenes, and basic digital-console navigation.

3. **Troubleshooting — Prove Where the Signal Stops**  
   Learner applies the same path to no-sound, weak/distorted/noisy signal, wrong routing, monitor problems, feedback, basic wireless faults, and basic Dante status/routing recognition, while learning explicit stop/escalation conditions.

---

# 1. Research method and evidence hierarchy

Priority was given to:

1. **Government occupational-safety sources:** OSHA and NIOSH/CDC.
2. **Protocol/platform owner:** Audinate for Dante.
3. **Professional-audio manufacturers:** Yamaha and Shure, supplemented by Radial for DI behavior.
4. **Manufacturer manuals/current technical documentation** where a specific console behavior matters.

Manufacturer material is strong evidence for technical concepts and for the controls implemented on that manufacturer's products. It is **not evidence that every console uses identical names, tap points, meter references, or routing architecture**. Curriculum recommendations below are therefore separated from source-established facts.

---

# 2. Established guidance: the signal path is the organizing concept

## 2.1 The essential live-audio chain

A beginner should recognize the following functional blocks:

### A. Source

A voice, acoustic instrument, electric instrument, playback device, computer, or other source produces the information that needs to reach a listener.

### B. Capture / interface

- **Microphone:** converts acoustic sound into an electrical signal.
- **DI (direct) box:** interfaces instruments/electronic sources with the balanced microphone-input world used by consoles. Radial's ProDI, for example, accepts an unbalanced high-impedance instrument input and provides a balanced mic-level XLR output to a mixer/mic preamp.
- **Wireless microphone system:** inserts an RF transport link between the microphone/bodypack transmitter and receiver; after the receiver, audio re-enters the ordinary signal chain.

### C. Stage connectivity / transport

- Individual XLR cables may run directly to a console.
- An **analog snake/stage box** collects many analog lines and transports them over multicore cable.
- A **digital stage box/I/O rack** converts/collects signals near the stage and transports channels digitally to the console, often over a network protocol such as Dante.

The pedagogical point is not connector memorization. It is that the learner can answer: **Where did this source enter the system, how is it being transported, and where does it arrive next?**

### D. Console input and channel

The console receives the source at an input/port, applies preamp gain where applicable, and presents a channel through which processing, level control and routing occur.

### E. Buses and destinations

A mixer does not merely make a signal louder or quieter. It **sums and routes** signals. Yamaha defines a bus as an audio path that brings multiple signals to a common destination. A channel can feed the main L/R bus while simultaneously feeding one or more aux buses.

### F. Output system

A main or auxiliary output may pass through additional processing before reaching:

- an external power amplifier and passive loudspeaker;
- a powered/active loudspeaker with amplification and DSP built in;
- a stage wedge;
- an IEM transmitter;
- a recording/broadcast destination;
- another downstream system.

Course 2 should use **main PA and stage monitor** as the principal examples. Matrices, distributed fills, broadcast feeds and complex system processing should be recognized but not deeply designed here.

---

# 3. Gain structure: the first operational principle

Yamaha describes gain staging as setting signal levels between components so the system minimizes noise and distortion while preserving headroom. Poor gain staging produces noise, distortion and reduced headroom. Yamaha also emphasizes matching source type to the appropriate input: microphone signals require preamplification, while line-level sources are substantially stronger.

For a Course 2 learner, the durable concept should be:

> **Gain makes the incoming signal usable; the fader places that already-healthy signal in the mix.**

This distinction matters because a beginner who treats the input-gain control as a second volume fader can create clipping, noise, inconsistent monitor levels, or problems on systems where preamps are shared.

### Beginner gain workflow

1. Confirm the correct source/input and required source conditions.
2. Establish the source at a realistic performance level.
3. Use the console's meter/PFL workflow to observe the signal before the channel fader.
4. Raise preamp gain enough to establish a healthy signal while retaining headroom and avoiding overload/clip indication.
5. Use channel and bus faders to establish mix balance.
6. Re-check meters when the source behavior changes.

Yamaha specifically identifies PFL as a tool for setting input gain because it can place the pre-fader channel level on the main meter and headphones.

### Do not teach one universal numeric target

A critical curriculum boundary: **do not turn one console's meter target into a universal rule.** Meter scales, nominal reference points, headroom, analog/digital calibration and manufacturer recommendations vary. Course 2 should teach learners to understand signal, headroom and clipping and to follow the specific console/system documentation or lead's procedure.

---

# 4. Analog vs. digital: appropriate beginner model

Course 2 does not need a deep lesson on binary encoding, converter architecture, clock jitter or network engineering.

The useful distinction is operational:

### Analog

- Signal is represented continuously as electrical voltage.
- Physical wiring commonly corresponds more visibly to the path.
- Traditional analog consoles tend to expose a comparatively fixed channel flow.
- External processing may require physical insert/send/return connections.

### Digital

- Audio is converted into digital data for processing and/or transport.
- Routing can be virtual and therefore less obvious from the physical cable path.
- A surface may control software-defined channels, buses and patch points.
- Internal DSP can provide EQ, dynamics, effects and routing without external hardware.
- Scenes/snapshots can store and recall many settings.

Yamaha's discussion of inserts illustrates this difference: analog consoles may use physical insert jacks, whereas digital mixers commonly perform processing internally and may provide virtual insert/rack locations. Yamaha's scene-memory guidance likewise explains that digital mixers can store channel gain, EQ, dynamics, faders, pan, aux sends, group assignments and effects.

### Curriculum rule

Teach digital flexibility as:

> **The physical connector tells you where the signal enters hardware; the console patch tells you which channel or destination receives it.**

That single distinction prevents a major beginner error: assuming that “XLR 1” must always equal “Channel 1.”

---

# 5. Console concepts a Course 2 learner should own

## 5.1 Input patch

The learner should understand **port ≠ channel** on a digital console. Yamaha's current DM3 documentation, for example, allows an input channel to be patched from a local input, Dante, USB, effects or playback source.

Course 2 outcome: given a simple patch diagram, learner can determine which physical/network source feeds which console channel.

## 5.2 Preamp / gain / trim

Understand input sensitivity, healthy level, headroom, clipping and why gain should be established before mix balance.

## 5.3 High-pass filter (HPF)

Yamaha describes HPF as rolling off low frequencies below its cutoff and identifies common live uses such as reducing vocal-mic rumble/unwanted low frequency content. Course 2 should teach **purpose and audible consequence**, not frequency recipes.

## 5.4 EQ

Yamaha defines EQ as tonal control. Course 2 should cover frequency, gain and — on parametric EQ — bandwidth/Q conceptually. The learner should be able to make small, reasoned corrections and recognize that EQ is not a substitute for fixing microphone placement, source problems, gain problems or feedback geometry.

## 5.5 Dynamics

Compression reduces dynamic range. Course 2 should cover threshold, ratio and gain reduction at a conceptual level, plus the risk of over-compression. Gate/expander may be recognized, but advanced dynamics programming is unnecessary.

## 5.6 Fader

Controls channel contribution at the relevant point in the signal path. Learner must understand that moving a fader does not necessarily change pre-fader sends.

## 5.7 Pan

Places a channel within a stereo bus or determines distribution between paired buses. It is a routing/balance control, not merely a cosmetic “left/right knob.”

## 5.8 Main L/R bus

The principal audience mix in a conventional stereo PA workflow. Yamaha's grouping material shows that channels must actually be assigned to a bus; a healthy input can still produce no main output if it is not routed to the main bus.

## 5.9 Aux / mix buses

Yamaha's aux guidance provides a particularly strong beginner model: an aux is a secondary path from a channel to another destination. Common examples:

- **pre-fader aux:** stage monitor/headphone mix that remains independent of FOH fader changes;
- **post-fader aux:** effects send that follows the channel's main level.

This is a convention, not a universal hard rule; many digital consoles permit tap-point configuration.

## 5.10 Groups/subgroups

An audio group is a bus that sums multiple channels so they can be processed/routed/controlled together. Yamaha demonstrates group-to-main routing and emphasizes that bus assignment matters.

## 5.11 DCA/VCA-style control groups

Yamaha distinguishes a DCA from an audio group: a DCA is **not an audio path**; it remotely changes the levels of assigned channels. This distinction is highly valuable for troubleshooting: muting or lowering a DCA can silence channels even though their audio routing is otherwise correct.

Course 2 should teach the concept, while noting that manufacturers use DCA/VCA/control-group terminology differently.

## 5.12 Mute

Mute interrupts a signal according to the console's architecture and tap points. Learner should treat mute status as a routine troubleshooting checkpoint, including channel, bus, mute-group and DCA-related states.

## 5.13 PFL / AFL / Solo / Cue / PAFL

Yamaha notes that PFL, AFL, SOLO and CUE all provide ways to hear a channel/bus in isolation but differ in where they listen in the path. Course 2 should teach:

- **PFL:** listen/meter before the fader; especially useful for input gain and determining whether signal reaches the channel.
- **AFL/post-fader solo:** listen later in the path, useful for checking an output/bus after its level control.
- **Solo/Cue/PAFL:** manufacturer-specific implementation; check the console.

The learner's mental question should be: **At what point in the signal path am I listening?**

## 5.14 Metering

Meters are diagnostic checkpoints, not decoration. A learner should correlate:

- input/preamp meter;
- channel/PFL meter;
- bus/output meter;
- amplifier/powered-speaker indicators;
- RF/audio meters on wireless receivers;
- network/status indicators on digital transport.

A visible signal upstream and no signal downstream narrows the fault location.

## 5.15 Scenes / snapshots

Yamaha establishes that digital scenes can recall many parameters at once. Course 2 should teach scenes primarily as **system state**:

- know which scene/show file is active;
- understand that recall can change routing, gain, processing, sends, faders and assignments;
- do not recall/store/overwrite scenes casually on a working production;
- recognize recall-safe/scope concepts without requiring advanced show programming.

---

# 6. FOH and monitor relationship

A beginner should understand that one source can feed multiple mixes simultaneously.

Example:

**Vocal mic → input channel → main L/R bus → PA for audience**  
**same vocal channel → pre-fader aux → wedge/IEM path for performer**

This is why “the vocal is in the PA” does not prove “the vocal is in the monitor,” and vice versa.

Yamaha explicitly explains that pre-fader monitor sends allow a performer's mix to remain different from and independent of FOH fader moves. The course should make this one of its central routing examples.

Systems may use one console for FOH and monitors, separate FOH/monitor consoles, analog splits, digital splits, shared preamps, or gain-compensation systems. Course 2 should recognize those topologies but not teach shared-preamp management as an independent operational authority.

---

# 7. Dante/networked audio boundary

## Established evidence

Audinate's training hierarchy strongly supports a bounded Course 2 treatment. Audinate has described Level 1 as foundational audio/networking knowledge sufficient for a small Dante system on a single dedicated switch, while higher levels address larger multi-switch systems, redundancy and more advanced networking. Audinate's revamped 2025 third-edition program includes IP addressing, VLANs, QoS, multicast, system design and expert troubleshooting across the certification levels.

Dante Controller itself can display devices/channels, create routes, show clock and network status, change latency, inspect errors and configure advanced settings. Clock instability can lead to loss of sync and automatic muting; insufficient latency can produce packet loss/audio glitches.

## Crew Blueprint Course 2 recommendation

Teach Dante as **networked signal transport and patching**, not as an IT/network-design course.

### Learner should understand

- Dante carries digital audio between networked devices.
- A networked stage box can replace/augment an analog multicore for signal transport.
- Dante Controller exposes transmitters, receivers and subscriptions/routes.
- “Link is up” does not prove that the correct audio route exists.
- Basic status concepts: device discovered, subscription/route, clock sync, network status, receive latency.
- A Dante fault can sit between otherwise healthy analog endpoints.
- Learner can **read** a simple Dante routing/status screen and explain where a missing route or red status belongs in the signal path.

### Do not require independent Course 2 authority for

- switch configuration;
- VLAN design;
- QoS engineering;
- multicast design;
- redundant-network architecture;
- enterprise/converged network integration;
- PTP/clock architecture decisions;
- advanced latency engineering;
- AES67/ST 2110 integration;
- Dante Domain Manager/security architecture;
- large-system network troubleshooting.

Those belong in higher audio/network training. A strong optional recommendation is to point learners toward **Audinate Dante Certification Level 1** after or alongside Course 2 rather than attempting to recreate Dante certification inside Crew Blueprint.

---

# 8. Wireless/RF boundary

## Established evidence

Shure describes wireless microphones/IEMs as audio transported over radio frequencies. Wireless reliability depends on compatible frequencies, antenna placement, spectrum conditions, device configuration and system scale. Shure's Wireless Workbench workflow includes spectrum scanning, compatibility analysis, frequency calculation, assignment/deployment and live RF/audio/battery monitoring. Shure also notes that legal frequency ranges and regulatory requirements vary by country/region.

## Crew Blueprint Course 2 recommendation

Teach wireless as **an RF transport block inserted into the audio signal path**:

**mic/capsule → transmitter → RF path → receiver → audio output/network output → console input**

### Learner should understand

- transmitter and receiver must belong to a compatible system/frequency range;
- transmitter/receiver must be on the intended frequency/channel;
- batteries/power matter;
- receiver RF meter and receiver audio meter answer different questions;
- antenna line-of-sight, obstruction and placement affect reliability;
- RF interference can produce dropouts even when the wired audio path after the receiver is healthy;
- a receiver with RF but no audio points to a different fault class than a receiver with no RF;
- frequencies are regulated and local coordination matters.

### Course 2 may introduce

- scan → choose/coordinate → sync/deploy → verify → monitor as the professional workflow;
- Wireless Workbench as an example of a professional coordination/monitoring tool;
- simple single/few-channel troubleshooting under direction.

### Reserve for higher-level RF training

- high-channel-count frequency coordination;
- intermodulation analysis;
- antenna distribution/combining design;
- RF gain/loss calculations;
- remote antenna system design;
- spectrum allocation strategy across multiple stages/productions;
- regulatory/licensing decisions;
- large-system Wireless Workbench deployment authority.

The course should not imply that recognizing RF concepts qualifies a learner to act as an RF coordinator.

---

# 9. Feedback: teach the loop before the EQ

Shure and Yamaha both describe acoustic feedback as a loop in which loudspeaker output is picked up by a microphone, amplified again and returned to the loudspeaker.

The beginner model should therefore be:

> **Feedback is a system-loop/gain problem first, not an EQ problem first.**

Shure recommends increasing useful source level at the microphone, using directional pickup/rejection appropriately, reducing unnecessary open microphones, increasing separation between microphones and loudspeakers, and reducing system gain/output. Shure's mic-placement guidance specifically links directional-microphone rejection to improved gain before feedback.

### Course 2 learner should be able to identify

- the feedback loop;
- gain-before-feedback as the practical margin before the loop becomes self-sustaining;
- why closer mic technique can help;
- why microphone polar pattern and monitor placement matter;
- why open microphones and excessive stage/monitor level can reduce margin;
- why indiscriminate EQ boosting can worsen the problem;
- why a sudden feedback event should first be controlled safely before detailed diagnosis.

### Higher-level boundary

System measurement, monitor “ringing,” precise filter selection, system alignment, advanced feedback suppression and PA tuning should not be presented as independent Course 2 competencies.

---

# 10. Systematic troubleshooting model

Yamaha's troubleshooting guidance supports a signal-path approach: verify power, connections, master state, routing, known working source, amplifier/powered-speaker status, monitor bus settings, PFL signal, cable substitution and other checkpoints.

The Crew Blueprint model should be memorable enough to use under pressure:

## **TRACE**

### T — Target

Define the failure precisely.

- No sound anywhere?
- One input missing?
- Main PA works but one monitor does not?
- Signal present but distorted?
- Wireless dropout?
- Networked channel missing?

Do not troubleshoot “the audio system.” Troubleshoot a specific expected source-to-destination path.

### R — Route

State the intended path before touching controls.

Example:

**Vocal mic → XLR → stage box input 12 → Dante route → console port → channel 12 → preamp → channel processing → main L/R → output → processor/amp → PA**

### A — Analyze checkpoints

Use meters, PFL/cue, status indicators and listening to determine the last known-good point.

Questions:

- Does the source exist?
- Is the input receiving signal?
- Does PFL hear it?
- Is the channel routed?
- Is it muted or controlled by a DCA/mute group?
- Does the bus meter show it?
- Does the output meter show it?
- Does downstream equipment show signal/power?

### C — Change one safe variable

Examples within authority:

- verify patch/routing;
- correct an accidental mute;
- substitute a known-good signal cable when permitted;
- correct an assigned send/fader state;
- verify wireless power/frequency pairing;
- identify a missing Dante subscription/status issue.

Avoid changing many variables simultaneously because it destroys diagnostic information.

### E — Evaluate / escalate

Confirm that the expected signal has returned and that the change did not create another problem. Escalate if the problem involves exposed electrical hazards, internal repair, power distribution, loudspeaker rigging, advanced RF/network design, unknown production programming, or anything outside assignment/authorization.

---

# 11. Fault-class examples

## 11.1 No sound from one input

Recommended diagnostic order:

1. Confirm source is actually producing output.
2. Confirm cable/DI/wireless receiver stage.
3. Confirm correct physical/network input patch.
4. Check preamp/input meter and PFL.
5. Check channel mute, fader and assignments.
6. Check DCA/mute-group state.
7. Check required bus send/main assignment.
8. Check downstream bus/output only if the failure is not isolated to that channel.

If PFL has no signal, look upstream of the PFL point. If PFL is healthy but the destination is silent, look downstream/routing.

## 11.2 Main PA silent but channels meter correctly

Check:

- main bus assignment;
- main mute/fader;
- output patch;
- processor/amplifier/powered-speaker power and status;
- output cabling;
- system protection states.

Do not jump immediately to input gain if input meters are already healthy.

## 11.3 Monitor silent while FOH works

Check:

- correct aux/mix selected;
- channel send to that mix;
- aux master;
- output patch;
- downstream monitor amplifier/powered wedge/IEM path.

The fact that FOH works proves only the shared upstream portion of the path.

## 11.4 Distortion

Possible beginner-level fault classes:

- source itself clipping;
- input preamp overload;
- excessive processing/makeup gain;
- bus/output overload;
- downstream amplifier/powered-speaker overload;
- damaged/intermittent connection.

Use meters/checkpoints to identify **where distortion first appears** rather than simply turning random stages down.

## 11.5 Hiss / poor signal-to-noise

Potential causes include weak source level followed by excessive gain later, high preamp gain on a noisy source, or excessive HF EQ. The learner should understand the concept but avoid “fixing” noise by indiscriminate gating/EQ before identifying its source.

## 11.6 Intermittent audio

Yamaha identifies defective cables as a common cause and also notes that overly aggressive gate settings can chatter/mute audio. Course 2 should include known-good substitution as a diagnostic technique for low-risk signal cables when authorized.

## 11.7 Wireless dropout

Check:

- battery/power;
- transmitter/receiver frequency match;
- RF meter;
- antenna placement/line of sight;
- interference/spectrum condition;
- receiver audio meter;
- audio cable/network route after receiver.

This keeps RF faults distinct from downstream audio faults.

## 11.8 Dante/no network audio

Course 2 diagnostic recognition:

- Is the device discovered/online?
- Is the intended Tx→Rx subscription present?
- Is clock status healthy?
- Are there network/latency/error indications?
- Does analog input exist at the transmitting device?
- Does the receiving device/channel patch actually use that Dante input?

If the issue requires switch configuration, VLAN/QoS changes, network redesign or uncertain clock architecture, escalate.

---

# 12. Hearing/noise safety boundary

## OSHA baseline

OSHA 29 CFR 1910.95 requires a hearing conservation program in covered general-industry workplaces when employee exposure equals or exceeds an 8-hour TWA of **85 dBA**. OSHA's permissible exposure table lists **90 dBA for 8 hours** and progressively shorter permissible durations as level increases.

## NIOSH recommended limit

NIOSH recommends **85 dBA as an 8-hour TWA** with a **3-dB exchange rate**: each 3 dB increase halves the recommended exposure time (e.g. 88 dBA/4 h, 91 dBA/2 h, 94 dBA/1 h, 100 dBA/15 min).

NIOSH also emphasizes the hierarchy of controls: elimination/substitution/engineering controls should be considered before administrative controls and PPE. Hearing protection must be selected, fit and used correctly; NIOSH cautions against relying on PPE alone.

## Course 2 implication

Do not teach “85 dBA is safe” as a simplistic threshold. Teach **level + duration = dose**.

Learner outcomes:

- recognize that concert/live-event exposure can accumulate across a long call;
- understand OSHA action-level vs NIOSH recommended-limit concepts without confusing them;
- know that hearing protection, quiet breaks/distance and employer controls matter;
- avoid excessive headphone/cue levels during PFL/solo work;
- follow employer/site hearing-conservation requirements.

---

# 13. Electrical and system-safety boundary

OSHA requires workers exposed to electrical hazards to receive training appropriate to their job assignment and distinguishes **qualified persons** permitted to work on or near exposed energized parts. OSHA also requires portable cord-and-plug equipment to be visually inspected, damaged equipment removed from service, and only qualified persons to perform electrical testing on circuits/equipment.

Therefore Course 2 should distinguish **audio signal troubleshooting** from **electrical repair/power troubleshooting**.

### Appropriate Course 2 actions

- visually recognize damaged power/signal cabling and report/remove from use according to procedure;
- verify ordinary equipment power state when safe and assigned;
- follow manufacturer shutdown/startup procedure;
- troubleshoot low-voltage audio signal paths and normal console routing within assignment;
- stop when a fault suggests damaged mains equipment, exposed conductors, overheating, arcing, wet electrical equipment, repeated breaker/protection trips or unknown power-distribution conditions.

### Not a Course 2 competency

- opening amplifiers/powered speakers/consoles for internal repair;
- electrical testing of energized circuits by an unqualified learner;
- altering grounding/safety-earth systems;
- temporary-power distribution design or repair;
- defeating protection devices;
- loudspeaker rigging/structural decisions.

A DI's audio “ground lift” must never be taught as permission to defeat AC protective earth.

---

# 14. Recommended Course 2 learning architecture

## Module 1 — Audio Fundamentals: Follow the Signal

### Core question

**Where is the signal, what form is it in, and where is it supposed to go next?**

### Recommended lesson sequence

1. **Source to listener: the complete PA path**
   - source/transducer
   - microphone vs DI
   - stage connection
   - console
   - output system
   - audience vs monitor destination

2. **Signal levels and gain structure**
   - mic/instrument/line concept
   - preamp vs fader
   - headroom/noise/clipping
   - PFL/meter introduction

3. **Stage transport: snake, stage box and patch**
   - analog multicore
   - digital I/O rack
   - port vs channel
   - labels/input lists/patch sheets

4. **Analog vs digital mental model**
   - physical vs virtual routing
   - ADC/DAC concept only
   - DSP concept only
   - scenes as stored state

5. **Outputs: FOH, monitors, amplifiers and speakers**
   - main vs monitor path
   - active vs passive loudspeaker chain
   - external amp vs built-in amp

6. **Wireless and Dante as transport blocks**
   - recognition-level architecture
   - status checkpoints
   - boundaries

7. **Hearing and electrical safety**
   - noise dose
   - hearing protection/controls
   - electrical stop/escalate conditions

### Module outcome

Learner can draw and explain a basic source-to-audience and source-to-monitor path and identify the functional role of each block.

---

## Module 2 — Console Basics: Control and Route the Signal

### Core question

**What does this control change, and where in the signal path does that change occur?**

### Recommended lesson sequence

1. **Channel strip as a signal path**
   - patch/input
   - preamp
   - HPF
   - EQ
   - dynamics
   - fader
   - pan
   - bus assignment

2. **Meters, PFL, solo/cue**
   - prove signal presence
   - pre vs post listening
   - safe headphone level

3. **Buses and main mix**
   - main L/R
   - aux/mix
   - group/subgroup
   - DCA as control rather than audio path

4. **Monitor sends and pre/post fader**
   - FOH vs performer needs
   - independent monitor balance
   - effects-send contrast

5. **Routing and patching**
   - port → channel → bus → output port → destination
   - physical vs virtual patch

6. **EQ and HPF**
   - corrective intent
   - frequency/gain/Q concept
   - avoid recipes

7. **Dynamics**
   - compression purpose
   - threshold/ratio/gain reduction
   - over-compression warning

8. **Mute, pan, groups and DCA**
   - operational state and troubleshooting implications

9. **Scenes and digital-console state**
   - store/recall concept
   - scene awareness
   - do-not-overwrite/recall without authority

### Module outcome

Given a simple digital-console diagram, learner can explain how one input reaches the mains and a monitor, identify where each core control acts, and recognize common states that can silence/misroute a signal.

---

## Module 3 — Troubleshooting: Prove Where the Signal Stops

### Core question

**What is the last confirmed-good point in the intended path?**

### Recommended lesson sequence

1. **TRACE troubleshooting method**
2. **No sound from one channel**
3. **No main output / one side missing**
4. **Monitor path problems**
5. **Weak, noisy or distorted signal**
6. **Feedback: break the loop**
7. **Wireless: separate RF status from audio status**
8. **Dante: recognize route/clock/network status**
9. **Scenes, mutes, DCA and patching mistakes**
10. **When to stop and escalate**

### Module outcome

Learner can troubleshoot controlled scenarios by stating the intended path, selecting the next diagnostic checkpoint, explaining what evidence means, and escalating rather than guessing when the problem crosses Course 2 authority.

---

# 15. Course 2 capability boundary

## Reasonable learner capability after Course 2

A successful learner should be able to:

- draw a conventional live-audio signal path;
- identify microphones, DIs, snakes/stage boxes, console, amps, loudspeakers, monitors and FOH relationships;
- distinguish input gain from mix fader level;
- establish basic gain under supervision using meters/PFL and console-specific guidance;
- explain headroom, clipping and noise-floor tradeoffs;
- trace a console channel from patch through processing to buses/outputs;
- explain main, aux, monitor, group and DCA concepts;
- distinguish common pre-fader monitor and post-fader effects workflows;
- use PFL/solo/cue conceptually and understand where it listens;
- perform basic HPF/EQ/compression adjustments under direction;
- identify mute/routing/patch/scene states relevant to troubleshooting;
- read simple wireless RF/audio status;
- recognize simple Dante routing/clock/network-status concepts;
- identify feedback as a loop and select basic corrective categories;
- troubleshoot common low-risk no-sound/bad-signal scenarios systematically;
- protect hearing and recognize electrical/system stop conditions.

## Reserve for higher-level audio training

- independent FOH/monitor engineering on complex productions;
- system design and loudspeaker prediction;
- system tuning/alignment and measurement-platform proficiency;
- complex matrix/distributed-system design;
- advanced console programming/automation/macros;
- shared-preamp architecture management on complex splits;
- high-channel-count RF coordination and antenna-system design;
- managed network/switch/VLAN/QoS/multicast design;
- Dante redundancy/enterprise network architecture;
- advanced clocking/interoperability engineering;
- amplifier/loudspeaker electrical design or service;
- temporary-power distribution;
- loudspeaker rigging;
- internal equipment repair.

---

# 16. Assessment recommendations

Course 2 assessment should test **mental models and diagnostic reasoning**, not only vocabulary.

## A. Signal-path construction

Give components out of order and require learner to build valid paths:

- wired vocal to FOH;
- keyboard through DI;
- wireless vocal;
- stage box/Dante path;
- monitor aux path.

## B. Console-path identification

On a simplified channel diagram, ask where:

- preamp gain acts;
- HPF/EQ/dynamics act;
- PFL listens;
- fader acts;
- pre-fader monitor branch leaves;
- main bus receives signal.

## C. Routing scenarios

Example: input meters and PFL are healthy, but main L/R meter is silent. Ask the learner to select the next most informative check.

## D. Troubleshooting branching scenarios

Use TRACE. Score the **reasoning sequence**, not merely whether the learner eventually selects the right fix.

## E. Boundary scenarios

Require learner to distinguish:

- safe assigned signal troubleshooting;
- task requiring audio lead/system tech;
- task requiring RF/network specialist;
- electrical hazard requiring qualified personnel;
- loudspeaker rigging requiring appropriately qualified personnel.

## F. Hearing-safety scenarios

Test noise dose concept and recognition that exposure duration matters.

## G. Optional supervised practical

Where an employer/training environment provides hardware:

- identify input/output path;
- patch a simple source under supervision;
- set gain using PFL/meter per that console's procedure;
- create a basic main and monitor send;
- diagnose a deliberately muted/misrouted channel;
- restore known baseline.

### Credential language

Course completion should be described as evidence that the learner completed **introductory/intermediate knowledge training**. It must not claim that the learner is a certified sound engineer, qualified electrician, RF coordinator, network engineer, system designer, rigger, or independently authorized console operator. Workplace competence requires system-specific familiarization, supervised practice and employer/production authorization appropriate to the task.

---

# 17. Practices that vary and must be labeled as such

| Topic | Stable concept | What varies |
|---|---|---|
| Gain staging | Healthy signal with headroom, avoid noise/clipping | Meter scale, nominal target, preamp architecture |
| PFL/Solo/Cue | Isolate/listen at a defined point | Names, tap points, solo-in-place behavior |
| Aux/Mix | Secondary bus/destination | Naming, pre/post options, pickoff locations |
| Groups | Audio summing/control path | Mono/stereo architecture, routing flexibility |
| DCA/VCA | Control multiple channel levels without ordinary audio summing | Name and implementation |
| Main bus | Audience/main program destination | L/R, LCR, mono, immersive architectures |
| HPF/EQ/dynamics order | Processing changes signal | Order, available processors, insert points |
| Scene/snapshot | Stored console state | Recall scope, safes, focus, automation behavior |
| Digital patching | Port and channel can be independent | UI/workflow/protocol |
| Stage transport | Multiple channels transported between stage/console | Analog snake, Dante, AES50, MADI, proprietary systems |
| Monitors | Separate performer mix | FOH console, monitor console, wedges, IEMs, personal mixers |
| Wireless | RF link between transmitter and receiver | Spectrum, system architecture, regulation, coordination tools |
| Dante | Networked media routing/status | Device capabilities, network scale, managed infrastructure |

This table should become a recurring instructional device: **teach the invariant concept first, then teach the console/system-specific implementation.**

---

# 18. Recommended visual learning assets

This course should not rely on prose alone. The following visuals are instructionally important:

1. **Canonical live-audio signal-path diagram** — wired mic, DI and wireless variants.
2. **Analog snake vs digital stage-box comparison** — same functional path, different transport.
3. **Channel-strip block diagram** — patch → preamp → HPF/EQ/dynamics → fader/pan → buses.
4. **Main vs pre-fader monitor split** — one source, two independent destinations.
5. **Audio group vs DCA control diagram** — audio path versus remote control.
6. **PFL diagnostic checkpoint diagram** — upstream/downstream reasoning.
7. **Gain-structure graphic** — noise floor → healthy operating region → headroom → clipping.
8. **Feedback loop diagram** — speaker → microphone → console → speaker.
9. **Wireless signal-path diagram** — audio path plus RF link, RF meter vs audio meter.
10. **Dante Tx/Rx subscription diagram** — network transport as virtual patch cable.
11. **TRACE troubleshooting flowchart**.
12. **Noise exposure/duration graphic** using NIOSH's 3-dB exchange-rate concept.

---

# 19. Final decision

## What is the beginner mental model for audio workflow from signal path, through mixing, to troubleshooting?

The beginner should think of live audio as a **known route with observable checkpoints**.

### 1. Signal path

Every source has an intended destination. Identify each functional stage from source to listener and know what transports, processes, routes or amplifies the signal at that stage.

### 2. Mixing

Mixing is not random knob-turning. It is deliberate control of a known signal path:

**establish healthy input level → remove/shape what is unnecessary → control dynamics as needed → balance with fader/pan → send to the correct bus(es) → verify the destination.**

### 3. Troubleshooting

Troubleshooting is signal flow used in reverse as a diagnostic map:

**define the failed destination → state the intended route → use meters/PFL/status/listening to find the last good point → test one safe variable → verify restoration → escalate beyond authority.**

The most important transferable capability is therefore not memorizing one Yamaha, Allen & Heath, DiGiCo, Avid, Midas or other console. It is being able to answer, at any moment:

> **Where should the signal be now, how can I prove whether it is there, and what is the next safe checkpoint?**

That is the correct Course 2 foundation for later console fluency, system design, network audio, RF coordination and lead-level troubleshooting.

---

# 20. Source record

## Yamaha Professional Audio / Yamaha Hub

1. **Gain Staging** — Yamaha Hub, Pro Audio / Live Sound. Establishes gain structure, mic vs line level, PFL metering and headroom concepts.  
   https://hub.yamaha.com/proaudio/livesound/gain-staging/

2. **Aux Sends and Returns** — Yamaha Hub. Establishes bus/aux concept, monitor sends, pre/post-fader distinction and FOH terminology.  
   https://hub.yamaha.com/proaudio/livesound/aux-sends-and-returns/

3. **Using Solo During Live Mixing** — Yamaha Hub. Establishes PFL/AFL/Solo/Cue distinctions and PFL use in gain staging.  
   https://hub.yamaha.com/proaudio/livesound/using-solo/

4. **Grouping In Live Sound** — Yamaha Hub. Establishes bus assignment and audio-group concepts.  
   https://hub.yamaha.com/proaudio/livesound/grouping/

5. **Step Up To A Better Mixer** — Yamaha Hub. Distinguishes DCA control from an audio group/path.  
   https://hub.yamaha.com/proaudio/livesound/step-up-to-a-better-mixer/

6. **Equalization** — Yamaha Hub. Establishes EQ and HPF concepts.  
   https://hub.yamaha.com/proaudio/livesound/eq/

7. **How to Use a Compressor** — Yamaha Hub. Establishes compression/dynamic-range concepts and cautions about overuse.  
   https://hub.yamaha.com/proaudio/livesound/tools-of-the-trade-how-to-use-a-compressor/

8. **Using Scene Memory** — Yamaha Hub. Establishes digital scene/snapshot storage and the scope of stored console parameters.  
   https://hub.yamaha.com/proaudio/livesound/using-scene-memory/

9. **How to Use Inserts** — Yamaha Hub. Useful comparison of analog physical inserts and digital internal processing/virtual racks.  
   https://hub.yamaha.com/proaudio/livesound/how-to-use-inserts/

10. **Live Sound Troubleshooting Tips, Part 1** — Yamaha Hub. Source for no-sound, output and monitor troubleshooting checkpoints.  
    https://hub.yamaha.com/proaudio/livesound/live-sound-troubleshooting-tips-part-1/

11. **Live Sound Troubleshooting Tips, Part 2** — Yamaha Hub. Source for low level, intermittent signal, noise and processing-related faults.  
    https://hub.yamaha.com/proaudio/livesound/tools-of-the-trade-live-sound-troubleshooting-tips-part-2/

12. **How to Fight Feedback, Part 1** — Yamaha Hub. Establishes feedback-loop concept.  
    https://hub.yamaha.com/proaudio/pa-how-to/how-to-fight-feedback-part-1/

13. **Optimizing Your Monitor Mix and Avoiding Feedback** — Yamaha Hub. Supports FOH/monitor distinction and monitor feedback context.  
    https://hub.yamaha.com/proaudio/livesound/optimizing-your-monitor-mix-and-avoiding-feedback/

14. **DM3 Reference Manual / StageMix documentation** — current Yamaha documentation showing digital input patch sources including local inputs, Dante, USB and internal sources.  
    https://usa.yamaha.com/files/download/other_assets/6/1626436/DM3_RM_En_C0.pdf

## Shure

15. **How to Control Feedback in a Sound System** — Shure. Establishes practical feedback controls: source/mic distance, directional mics, fewer open mics, loudspeaker/microphone separation and gain reduction.  
    https://www.shure.com/en-US/insights/how-to-control-feedback-in-a-sound-system

16. **Three Reasons Why Mic Placement Matters** — Shure. Establishes relationship among mic placement, signal-to-noise and gain before feedback.  
    https://www.shure.com/en-US/insights/three-reasons-why-mic-placement-matters

17. **Wireless Workbench Quick Start Guide** — Shure. Establishes scan/analyze/calculate/assign/deploy/monitor frequency-coordination workflow.  
    https://www.shure.com/en-US/docs/quickstart/WIRELESS-WORKBENCH

18. **Wireless Workbench 7** — Shure. Establishes current WWB roles in RF coordination, device management and live RF/audio/battery monitoring.  
    https://www.shure.com/en-US/products/software/wwb

19. **Tell Me About: Wireless Microphone Frequencies** — Shure. Establishes shared spectrum and regional regulatory/frequency differences.  
    https://www.shure.com/en-US/insights/tell-me-about-wireless-mic-frequencies

20. **Wireless Systems and Antenna Placement** — Shure. Establishes line-of-sight and antenna-placement importance.  
    https://www.shure.com/en-US/insights/wireless-systems-and-antenna-placement

21. **Troubleshooting Wireless Dropouts in 10 Simple Steps** — Shure. Supports basic RF troubleshooting and isolation.  
    https://www.shure.com/en-US/insights/troubleshooting-wireless-dropouts-10-simple-steps

## Audinate / Dante

22. **Audinate Launches Completely Revamped Dante Training Program** (2025) — establishes current third-edition Level 1/2/3 training and topic progression.  
    https://www.audinate.com/press/audinate-launches-completely-revamped-dante-training-program/

23. **Dante Level 1 description (Audinate NAMM training)** — describes Level 1 as foundational and appropriate to small dedicated-switch systems; Level 2 extends to multi-switch/redundant systems.  
    https://www.audinate.com/press/audinate-offers-seminar-on-adapting-music-education-for-covid-with-dante-during-namm-2021/

24. **About Dante Controller** — official Audinate user guide describing routing, device, clock, latency, network and performance functions.  
    https://dev.audinate.com/GA/dante-controller/userguide/webhelp/content/about_dante_controller.htm

25. **Clock Status Monitoring / Clock Status** — Audinate documentation describing synchronization and automatic mute behavior after clock loss.  
    https://dev.audinate.com/GA/dante-controller/userguide/webhelp/content/clock_status_monitoring.htm

26. **Latency** — Audinate documentation describing receiver latency, negotiation and packet-loss implications.  
    https://dev.audinate.com/GA/dante-controller/userguide/webhelp/content/latency.htm

## DI / source interface

27. **Radial ProDI** and specifications/features — manufacturer documentation demonstrating a common DI topology: instrument input, balanced mic-level XLR output to mixer/preamp and transformer isolation.  
    https://www.radialeng.com/product/prodi  
    https://www.radialeng.com/product/prodi/features

## OSHA / NIOSH

28. **OSHA 29 CFR 1910.95 — Occupational Noise Exposure** — action level, permissible exposure table, monitoring, hearing protection and hearing-conservation requirements.  
    https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.95

29. **NIOSH — Noise-Induced Hearing Loss / Noise Exposure** — 85 dBA REL, 3-dB exchange-rate concept and prevention guidance.  
    https://www.cdc.gov/niosh/noise/about/noise.html

30. **NIOSH — Provide Hearing Protection** — hierarchy context, fit/use and protection guidance.  
    https://www.cdc.gov/niosh/noise/prevent/ppe.html

31. **NIOSH — Hierarchy of Controls** — control priority from elimination through PPE.  
    https://www.cdc.gov/niosh/hierarchy-of-controls/index.html

32. **OSHA 29 CFR 1910.332 — Electrical Training** — qualified/unqualified electrical training boundary.  
    https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.332

33. **OSHA 29 CFR 1910.334 — Use of Equipment** — visual inspection, damaged equipment removal and qualified-person electrical testing.  
    https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.334

34. **OSHA 29 CFR 1910.305 — Wiring Methods** — flexible-cord protection, temporary wiring and strain-relief requirements relevant to live-event environments.  
    https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.305

---

## Evidence-strength summary

**Strong:** signal-flow/gain/PFL/bus/aux/group/EQ/compression/scene concepts; feedback mechanism; Dante training-tier boundary; OSHA/NIOSH noise guidance; OSHA electrical qualification boundary.

**Moderate:** exact Course 2 sequencing and the recommended TRACE mnemonic. These are Crew Blueprint curriculum syntheses built from the technical evidence, not industry standards.

**System-dependent:** exact meter targets, console terminology, processing order, aux tap points, DCA/VCA behavior details, scene scope, network topology, wireless coordination workflow and authority boundaries at a particular employer/production.
