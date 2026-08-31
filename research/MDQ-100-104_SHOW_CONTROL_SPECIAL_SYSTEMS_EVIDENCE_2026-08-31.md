# MDQ-100–104 — Show Control, Automation and Special Systems Evidence

**Prepared:** 2026-08-31  
**Status:** Source-grounded architecture/awareness packet; safety-critical special systems remain external specialist work  
**Domains:** `D-SHC`, `D-AUT`, `D-FX` plus cross-department interfaces  
**Depends on:** MDQ-000–003, Lighting/Audio/Video/Staging detailed packets, Production/Coordination evidence, ESTA/ESA standards  
**Purpose:** Map show-control architecture and the learner-facing awareness boundaries for automation, atmospheric effects, lasers/optical hazards, pyrotechnics/flame/cryo and comparable special systems without providing operational instructions for hazardous systems.

---

## 1. Controlling boundary

Show control can be taught deeply as an information/ownership/reliability system. Safety-critical machinery and special-effects operation cannot be treated as ordinary self-study practicals.

Crew Blueprint may teach:

- system roles;
- trigger/cue ownership;
- signal/control categories;
- documentation;
- rehearsal/change-control logic;
- fallback/recovery concepts;
- failure recognition;
- exclusion-zone and specialist-authority awareness;
- career pathways.

It should not provide operational instructions for machinery, lasers, pyrotechnics, flame, cryogenic effects or other hazardous special-effects systems.

---

# MDQ-100 — Cross-department show-control architecture

## System concept

Show control coordinates events across technical departments by connecting **intent, cue ownership, trigger source, controlled system, state feedback and fallback**.

## Interface families

At a conceptual level, live-event systems may exchange control through:

- timecode;
- OSC;
- MIDI/MTC;
- GPIO/contact-closure interfaces;
- vendor APIs/protocols;
- network triggers;
- media/playback cues;
- lighting-console macros/cues;
- audio/playback automation;
- stage-machinery show-control systems.

The exact interface is system-specific and does not determine who owns the cue.

## Transferable model

**show intent → cue owner/caller → trigger/control system → destination system → state/confirmation → fallback/manual path → show report/change record**

## Competencies

- identify cue owner and destination owner;
- distinguish control message from system authority;
- recognize dependencies and failure propagation;
- document versions/configuration/ownership;
- rehearse changes before show-critical use where required;
- understand fallback/manual-takeover concepts;
- escalate when a trigger affects a safety-critical system or another department's controlled equipment.

**State:** `draftable` for architecture/reliability content.

---

# MDQ-101 — Stage automation awareness and specialist path

## Current standards context

ESTA currently publishes stage-machinery standards including:

- **ANSI E1.64-2024 — Stage Machinery Control Systems in the Entertainment Industry**;
- **ANSI E1.42-2023 — Safety Standard for Entertainment Lifts**;
- stage-machinery show-file exchange guidance in the E1.44 family.

These standards demonstrate that stage automation is a distinct engineered/control discipline.

## General learner awareness

- recognize moving machinery/scenery zones;
- identify operator/technician/engineer ownership;
- understand that sensors/interlocks/e-stops and machinery-control states are safety systems, not casual controls;
- remain clear of controlled zones and follow cue/hold instructions;
- report abnormal movement/state and stop/escalate;
- do not independently reset, bypass, configure or operate machinery.

## Career architecture

**Automation Awareness**  
→ external employer/manufacturer/specialist training  
→ automation operator / technician  
→ programmer / controls specialist / engineer / lead as applicable.

**State:** `external_boundary` for operation; `draftable` for roles/interfaces.

---

# MDQ-102 — Atmospheric effects and fire/life-safety coordination

## Appropriate learner content

Atmospheric effects can affect:

- visibility;
- optical/lighting appearance;
- ventilation;
- detectors/alarms;
- surfaces/equipment;
- performers/audience/workers;
- venue/fire-safety operations;
- outdoor dispersion.

## General curriculum boundary

Teach:

- recognize effect systems and responsible operator;
- understand that product, fluid, venue, ventilation and alarm-system requirements matter;
- preserve fire/life-safety ownership;
- report unexpected exposure, residue, alarm interaction or visibility problem;
- do not improvise fluids, defeat detectors/alarms or operate an unassigned effect system.

Event Safety Alliance guidance treats special effects and fire/life-safety coordination within the broader live-event safety system.

**State:** `draftable` for awareness/coordination; operation remains product/employer/venue specific.

---

# MDQ-103 — Lasers and optical-radiation awareness

## Scope

This domain is awareness and career-navigation only for general learners.

Teach:

- lasers/high-intensity optical sources can present hazards not obvious from ordinary stage lighting;
- regulatory, equipment, operator and venue requirements may apply;
- audience/performer/crew exposure is a specialist safety responsibility;
- identify the responsible operator and controlled area;
- never treat a lighting-course completion state as laser-operation authority;
- stop/escalate if an optical-hazard boundary is unclear.

Do not teach laser setup, alignment, scanning, exposure planning or operating procedure.

**State:** `external_boundary`.

---

# MDQ-104 — Pyrotechnics, flame, cryogenic and comparable special-effects awareness

## Scope

General crew need a **role/hazard/authority map**, not an operating tutorial.

Appropriate learning:

- recognize that special-effects systems can involve fire, pressure, extreme temperature, hazardous energy or regulated materials;
- identify effect operator / production / venue / fire-AHJ ownership;
- understand exclusion-zone, cue, hold and communication concepts;
- avoid touching, moving, modifying or operating unassigned special-effects equipment;
- report damaged, leaking, displaced, unsecured or unknown equipment to the responsible specialist;
- understand that permits/licensing/training/manufacturer procedures may be required.

Do not provide setup, firing, handling, material, pressure, fuel, mixture, storage or other operational instructions.

**State:** `external_boundary`.

---

# 7. Cross-system responsibility graph

**General Stagehand / Department Technician**  
→ Show-control awareness and cue ownership literacy  
→ Department-specific operator/programmer path where assigned  
→ Cross-department show-control specialist / programmer / engineer path  

Separate controlled branches:

- stage automation → external specialist pathway;
- atmospheric effects → product/venue/operator-specific pathway;
- lasers/optical hazards → external specialist/regulatory pathway;
- pyro/flame/cryo/special effects → external specialist/permit/AHJ pathway.

---

# 8. Authority-class routing

| Domain | Crew Blueprint treatment | Authority ceiling |
|---|---|---|
| Cross-department show-control concepts | T4/T7 | education only; actual show responsibility external |
| Cue/trigger ownership | T1–T5 | role/process literacy |
| Stage automation | awareness/interface | operation external |
| Atmospheric effects | awareness/interface | operation external/product-specific |
| Laser/optical hazards | awareness only | specialist/regulatory external |
| Pyro/flame/cryo | awareness only | specialist/permit/AHJ external |

---

# 9. Current source ledger

## ESTA Technical Standards Program

- Published documents: https://tsp.esta.org/tsp/documents/published_docs.php
- ANSI E1.64-2024 — Stage Machinery Control Systems in the Entertainment Industry.
- ANSI E1.42-2023 — Safety Standard for Entertainment Lifts.
- E1.44 family — stage-machinery show-file exchange.

Use exact standards for claim-level technical wording; generic TSP links are discovery/context only.

## Event Safety Alliance

- https://eventsafetyalliance.org/
- https://eventsafetyalliance.org/standards-guidance-1

Supports live-event safety planning and specialist-system coordination context. Exact controlled-effect requirements remain with governing rules, permits, venue/AHJ and specialists.

---

# 10. Remaining evidence gaps

1. current cross-department show-control practitioner workflows;
2. QLab/media-server/lighting/audio/automation ownership examples;
3. stage-automation operator/technician/engineer title validation;
4. exact current atmospheric-effect safety/source matrix;
5. specialist regulatory landscape review for optical effects;
6. specialist/permit/AHJ architecture for other special effects;
7. original awareness-only diagrams;
8. learner testing to ensure awareness is not misread as authorization;
9. claim-level MDQ-001 matrix.

---

# 11. Research-state decision

- **MDQ-100:** `researched` → `draftable` for show-control architecture.
- **MDQ-101:** `researched` for role/interface; operation `external_boundary`.
- **MDQ-102:** `researched` for awareness/coordination; operation external/product-specific.
- **MDQ-103:** `external_boundary` with awareness-only curriculum.
- **MDQ-104:** `external_boundary` with awareness-only curriculum.

Next: sector-transfer MDQ-110–116.