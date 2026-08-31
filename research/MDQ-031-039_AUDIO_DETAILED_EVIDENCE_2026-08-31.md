# MDQ-031–039 — Audio Department Detailed Evidence

**Prepared:** 2026-08-31  
**Status:** Detailed source-grounded audio research packet; suitable for competency synthesis and initial bounded drafting, not publication release  
**Domain:** `D-AUD` Audio  
**Depends on:** MDQ-000–003, MDQ-030 role architecture, Package 09, Package 43 / audio rerun, current Audio C1/C2/Lead materials  
**Purpose:** Close the main curriculum gaps across signal flow, sources/stage patch, console workflow, PA/acoustics/measurement, audio networking/clocking, RF, intercom/comms, sector workflows, and lead/system leadership.

---

## 1. Controlling curriculum principle

Audio progression is multi-branch rather than one ladder. The evidence supports parallel growth into:

1. stage/patch support;
2. console/mixing operation;
3. PA/system technology;
4. RF/wireless systems;
5. intercom/comms;
6. playback/record/broadcast interfaces;
7. shop/bench/prep roles;
8. lead/advancing/system-design responsibility.

No Crew Blueprint learning state appoints a learner as FOH engineer, monitor engineer, RF coordinator, system tech, intercom engineer, designer, lead, or other employer-controlled role.

---

# MDQ-031 — Audio signal-flow fundamentals to systems thinking

## Scope

Teach audio as an end-to-end system rather than a list of devices.

## Canonical mental model

**source → source interface / microphone / DI → stage patch / split → transport / stagebox → console input → processing / routing → buses / matrices → system processing → amplification / powered loudspeaker interface → loudspeaker → acoustic field → audience / performer / recording / broadcast destination**

Additional branches include monitors/IEMs, recording feeds, broadcast/stream feeds, comms/IFB, playback returns, and measurement/reference paths.

## Competency families

- mic-level / line-level / loudspeaker-level distinction;
- balanced / unbalanced awareness;
- analog vs digital transport;
- gain structure as a system concept;
- clipping/noise/headroom relationships;
- channels, buses, auxiliaries, groups/DCAs, matrices and outputs;
- split and recording/broadcast-feed concepts;
- layered fault isolation by source/interface/patch/transport/console/routing/processor/amplifier/loudspeaker/network/control layer.

Troubleshooting should be taught as reasoning and escalation, not as permission to repair or alter equipment outside assignment.

**Curriculum:** Department Support → Department Systems → Advanced/System.  
**State:** `draftable`.

---

# MDQ-032 — Microphones, sources, stage patch and backline interface

## Microphone/source families

Teach functional recognition of:

- dynamic, condenser, ribbon-awareness and special-purpose microphones;
- wired vs wireless source paths;
- DI/source interfaces;
- playback/computer sources;
- instrument/backline interfaces;
- networked sources.

Core concepts include pickup pattern, sensitivity, source/interface compatibility, stage ownership, and documentation. Phantom-power and similar source-power concepts should be taught as controlled compatibility/ownership topics, not as universal button-press procedures.

## Documentation

- stage plot;
- input list;
- patch sheet;
- channel list;
- split documentation;
- monitor/IEM assignments;
- RF inventory where applicable;
- backline ownership/contact notes.

## Boundary

Audio may interface with artist/backline equipment without owning it. Curriculum must separate assigned interface work from altering artist equipment or settings.

**State:** `draftable`.

---

# MDQ-033 — Audio consoles and mixing workflow

## Transferable console model

Teach common concepts before vendor menus:

- input channel;
- preamp/head-amp ownership;
- trim/digital gain concepts;
- filters/EQ/dynamics;
- sends;
- groups/DCAs;
- matrices;
- mute groups;
- scenes/snapshots;
- show files;
- user layers/custom views;
- control/automation scope.

## FOH vs monitors

FOH and monitor work are different optimization problems and may develop as parallel specialties.

## Show-file discipline

- naming/versioning;
- backups;
- restore verification;
- scope/recall-safe concepts;
- ownership in shared systems;
- change notes;
- compatibility;
- handoff package.

## Manufacturer ecosystems

Maintain a living comparison of representative professional console families, but do not make popularity/market-share claims without current evidence.

**State:** `draftable`; vendor-specific practicals remain separately versioned.

---

# MDQ-034 — PA systems, acoustics, measurement and optimization

## Core system concepts

- frequency and wavelength;
- level;
- phase vs polarity;
- summation/cancellation;
- propagation delay;
- reflection/reverberation;
- direct vs reflected sound;
- coverage;
- intelligibility;
- spectral balance.

## System architecture

- point-source / line-array concepts;
- subwoofers;
- fills/delays;
- monitor systems;
- amplification or powered-loudspeaker architecture;
- DSP/system processing;
- network/control interfaces.

## Prediction and measurement

Teach what prediction and measurement can tell a technician, their limitations, and how documentation supports comparison/verification. Do not turn this into an unsupervised deployment or high-output operating guide.

AES standards remain the preferred exact-source family for acoustics and professional audio claims.

**State:** `draftable`; deployment workflow still needs practitioner review.

---

# MDQ-035 — Audio networking and clocking

## Current standards baseline

AES identifies **AES67-2023** as the current high-performance audio-over-IP interoperability edition.

AES67 covers interoperability dimensions including synchronization, transport, encoding/streaming, session description and connection management.

## Network mental model

1. endpoint/device;
2. audio stream/flow;
3. clock/synchronization domain;
4. IP address/subnet;
5. unicast/multicast transport;
6. switch/network infrastructure;
7. routing/subscription/control software;
8. redundancy/failure recovery;
9. documentation/change control.

## Dante and vendor ecosystems

Use official Audinate material for Dante-specific architecture and certification while teaching transferable networking concepts separately.

Concepts include clock leader/follower, routing/subscription, latency, multicast/unicast, redundancy, discovery, and network documentation.

Dante certification remains an external vendor credential.

## Security/change-control literacy

Teach credential/default-password risk, unauthorized endpoints, remote-access control, firmware provenance, backups/configuration records, segmentation awareness and show-critical change discipline.

**State:** `draftable` with AES67-2023 current baseline verified.

---

# MDQ-036 — RF coordination and wireless audio

## Scope and regulatory boundary

RF audio is a specialist branch with spectrum, equipment and regulatory implications.

Crew Blueprint can teach:

- spectrum/frequency concepts;
- transmitter/receiver/antenna/distribution architecture;
- wireless microphone and IEM system recognition;
- interference/failure categories;
- documentation;
- regulatory/licensing awareness;
- specialist role progression.

It does **not** grant FCC license eligibility, frequency-coordination authority, or employer appointment as an RF coordinator.

## Current regulatory evidence

FCC 24-22 updated U.S. wireless-microphone rules and added Wireless Multichannel Audio System provisions while retaining licensed/unlicensed distinctions under Part 74 / Part 15 frameworks.

This means learner-facing material must avoid treating RF legality as one static frequency chart.

Shure Wireless Workbench is a representative professional tool for RF inventory, coordination and monitoring; product-specific workflows remain vendor/version specific.

**State:** `researched` → `draftable` for concepts/roles; specialist operational content requires practitioner/vendor/regulatory review.

---

# MDQ-037 — Intercom / comms systems

## Architecture families

Professional systems demonstrate:

- partyline;
- digital matrix;
- wireless intercom;
- IP interfaces;
- IFB/program feeds;
- panels/stations;
- beltpacks;
- radio/phone/SIP interfaces;
- networked transport.

Clear-Com and Riedel provide representative primary-source architectures across theatre, broadcast and live-production environments.

## Learner mental model

**user position → beltpack/panel/station → channel/key/talk/listen assignment → partyline or matrix route → wired/wireless/IP transport → other users / IFB / program / radio interfaces**

Operational discipline belongs partly in MDQ-013; technical architecture belongs here.

**State:** `draftable`.

---

# MDQ-038 — Audio sector workflows

## Touring / festival

- advance/input/stage-plot exchange;
- festival patch/split systems;
- guest-console/house-system interface;
- compressed line-check/changeover;
- monitor/FOH/system-tech ownership;
- RF and network handoffs.

## Theatre

- cue-based operation;
- wireless-heavy systems;
- orchestra/pit integration;
- playback/show control;
- comms/IFB;
- sound-designer/A1/A2/operator title variation.

## Corporate/convention

- speech intelligibility;
- wireless inventory;
- breakout/general-session workflow;
- streaming/video integration;
- client/show-caller coordination.

## Worship

- permanent install plus recurring live operation;
- volunteer/pro mixed staffing;
- broadcast/stream integration;
- IEM/wireless workflows.

## Broadcast/streaming

- broadcast mix;
- network/embedded audio;
- loudness/metadata interfaces;
- IFB/comms;
- sync/reference.

## Rental shop

- cable/test/prep;
- console/stagebox/rack configuration;
- RF inventory;
- network prep;
- case/label/QC;
- return/damage/service workflow.

**State:** `draftable` as comparative orientation.

---

# MDQ-039 — Audio lead / system leadership

## Core responsibilities

- advancing;
- input/stage/patch/network/RF/comms documentation;
- labor sequencing;
- assignments and QC;
- vendor coordination;
- spares/redundancy planning;
- client/artist communication;
- show reports;
- damage/incident reporting;
- change control;
- shift/changeover handoff.

## Reliability

Leadership/system roles should understand backup show files, spare/control/network strategy, alternative signal paths, degraded-operation planning and documented recovery ownership without turning conceptual redundancy into unreviewed system-design authority.

**State:** `draftable`; practitioner validation required.

---

# 10. Cross-packet competency graph

**Audio Support / Stage Hand**
→ cable/source/patch recognition
→ **Stage Audio / Patch Technician**

From there:

- Console / Mix Operator → FOH or Monitor specialization;
- System / PA Technician → measurement/optimization → System Lead/Designer;
- Audio Network Technician → Dante/AES67 / clocking / redundancy;
- RF Support → RF Technician / Coordinator;
- Intercom/Comms Technician → matrix/wireless/network comms specialist;
- Playback/Record/Broadcast → dedicated operator/engineer path;
- Shop/Bench Technician → prep/QC/service triage;
- Audio Lead / Head → advance/labor/vendor/QC leadership.

These are connected branches, not one rank ladder.

---

# 11. Authority-class routing

| Competency | Learning home | Crew Blueprint authority ceiling |
|---|---|---|
| Cable/source/patch support | T3 Department Support | A1 assigned support |
| Signal-flow and console concepts | T4 | A0/A1 education |
| Mix-operation knowledge | T4/operator branch | actual show responsibility external |
| PA prediction/measurement concepts | T4/T7 | no automatic system-tech/design appointment |
| Network-audio knowledge | T4/T7 | employer/system-owner authority external |
| RF knowledge | T4/T7 specialist | no FCC/license/employer authority granted |
| Intercom system knowledge | T4/specialist | actual configuration responsibility external |
| Lead workflow | T5 | does not appoint learner as lead |
| System design | T7 | does not create professional/employer design authority |

---

# 12. Current official source ledger — core additions

## Audio Engineering Society

- AES Standards: https://aes.org/standards/
- AES Standards Store / AES67-2023: https://aes.org/publications/standards-store/
- AES Network Audio Systems: https://aes.org/network-audio-systems/

Supports professional standards, digital/network audio and current AES67 interoperability evidence.

## Audinate / Dante

- https://www.audinate.com/

Supports vendor-specific Dante networking, clocking, routing, redundancy and certification-path claims.

## FCC wireless microphone regulation

- FCC 24-22: https://docs.fcc.gov/public/attachments/FCC-24-22A1.pdf

Supports current U.S. wireless-microphone/WMAS regulatory context.

## Shure Wireless Workbench

- https://www.shure.com/en-US/docs/quickstart/WIRELESS-WORKBENCH

Representative vendor source for RF inventory/coordination/monitoring workflow.

## Clear-Com

- https://www.clearcom.com/Resource-Library/

Supports partyline/matrix/wireless/IP intercom architecture examples.

## Riedel

- https://www.riedel.net/

Supports Artist/Bolero and networked intercom architecture examples.

## Loudspeaker/system manufacturers

Maintain current primary documentation from representative manufacturers for prediction, measurement, deployment, control and model-specific claims. Do not collapse vendor-specific practice into one universal procedure.

---

# 13. Remaining unresolved Audio evidence

1. current console-family terminology/training comparison;
2. manufacturer prediction/measurement crosswalk;
3. system-tech practitioner review;
4. microphone/source application evidence without rigid recipes;
5. RF practitioner review and device/ecosystem comparison;
6. intercom comparison beyond representative Clear-Com/Riedel systems;
7. playback/broadcast/immersive/spatial-audio branches;
8. sector-specific hiring/title validation;
9. original/reviewed visuals;
10. assessment validity and learner usability;
11. sitewide source/citation/content matrix.

---

# 14. Research-state decision

**MDQ-031–039 state:** `researched` → largely `draftable` for initial bounded curriculum architecture.

Not publication-ready: practitioner review, learner testing, media/visual validation, claim-level matrixing and source-freshness controls remain required.

## Next execution

Use MDQ-030 + this packet to create the Audio competency/dependency graph and source crosswalk, then continue MDQ-041–048 Video / LED / Broadcast detailed research under the same evidence contract.
