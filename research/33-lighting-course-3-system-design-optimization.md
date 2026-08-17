# 33 — Lighting Course 3: System Design & Optimization

**Research Queue ID:** CC-001  
**Status:** Complete research packet  
**Research date:** 2026-08-17  
**Purpose:** Define the mastery-level learning architecture for live-event lighting system design after the Lighting Lead tier, without treating online coursework as electrical qualification or employer authorization.

---

## Decision question

**What changes when an experienced lighting technician/lead progresses from operating and leading an existing rig to designing, documenting, commissioning, and optimizing a complete lighting-control system?**

## Bottom-line finding

The mastery transition is best modeled as:

**operate a system → lead a system → define requirements → design architecture → document interfaces → commission/verify → diagnose at system level → optimize for resilience, maintainability, and show intent**

Course 3 should therefore not be “more console programming.” It should teach systems thinking across control, data, fixture/device behavior, documentation, redundancy, performance verification, and cross-department interfaces.

The strongest standards anchor is ESTA’s entertainment-control standards family. ANSI E1.31 defines streaming ACN/sACN transport for DMX-style control data; ANSI E1.20 defines RDM; related ESTA standards extend device discovery, configuration, and networked control. ETCP’s Entertainment Electrician framework is also important as a boundary: lighting system design often interfaces with electrical systems, but electrical qualification and power-distribution authority are not created by a lighting-design course.

---

# 1. Mastery-level role boundary

A mastery-level lighting systems learner should be able to reason about:

- production/design requirements;
- fixture and control-system requirements;
- DMX/RDM/sACN architecture conceptually;
- console, gateway, node, network and endpoint relationships;
- universes, addressing plans and data distribution;
- documentation and labeling;
- redundancy and failure domains;
- commissioning and verification;
- troubleshooting from a system architecture rather than a single device;
- maintainability and change control.

The course must not imply qualification to perform energized electrical work, alter venue electrical infrastructure, engineer structural support, or make rigging decisions outside the learner’s separately established competence and authorization.

---

# 2. Requirements before equipment

The first mastery habit should be: **design from requirements, not favorite equipment.**

The learner should identify:

1. creative/show requirements;
2. venue and touring constraints;
3. device/control requirements;
4. network/data requirements;
5. power and rigging interfaces requiring qualified coordination;
6. operational and redundancy requirements;
7. documentation/handoff requirements.

This prevents system design from becoming a shopping list.

---

# 3. Control architecture

Teach the control system as layers:

**operator/control surface → show-control engine → network/data transport → gateways/nodes → device-level control → fixture/device response**

The learner should understand that DMX512-style universes can be transported over Ethernet using sACN and that RDM adds bidirectional management capabilities to compatible device/control environments.

The curriculum should emphasize architecture and diagnostics rather than memorizing one console manufacturer’s menus.

### Core mastery concepts

- universe/address planning;
- patch and documentation consistency;
- physical versus logical topology;
- multicast/unicast awareness where applicable;
- gateways and protocol conversion;
- RDM discovery/configuration concepts;
- control priority/ownership concepts;
- device personality/mode implications;
- show-file/version management;
- system segmentation and failure domains.

---

# 4. Networked lighting

At mastery level, Ethernet networking becomes part of the lighting system model.

Teach:

- topology;
- managed-network awareness;
- IP addressing concepts;
- switches and endpoint relationships;
- bandwidth and traffic awareness;
- multicast concepts;
- redundancy concepts;
- separation of control networks from unrelated traffic when required by system design;
- systematic network troubleshooting.

Do not turn the course into a vendor-specific network certification. Learners should understand enough networking to design and communicate a lighting-control architecture and know when a dedicated network specialist is required.

---

# 5. Documentation as part of the system

Mastery requires documentation that another qualified technician can understand.

Recommended artifacts:

- system block diagram;
- signal/data-flow diagram;
- device schedule;
- universe/address schedule;
- network/topology diagram;
- labeling convention;
- patch documentation;
- version/change record;
- commissioning checklist;
- fault/escalation notes.

AVIXA’s ANSI/AVIXA D401.01:2023 provides a useful cross-industry model: system documentation has defined requirements, creation responsibilities, and delivery tracking. Crew Blueprint should adopt that mindset without claiming AVIXA documentation rules are entertainment-lighting law.

---

# 6. Commissioning and verification

A designed system is not complete merely because equipment powers on.

The learner should verify:

- expected endpoints are present;
- addressing/patch matches documentation;
- control reaches intended devices;
- device modes match design;
- network/data paths behave as intended;
- redundancy/fallback assumptions are tested where appropriate;
- show files and documentation correspond to the deployed system;
- discrepancies are recorded and resolved.

AVIXA’s system-performance-verification standard is useful conceptually because it formalizes the idea that verification criteria should be defined, measured, and reported rather than assumed.

---

# 7. Optimization

Optimization should mean more than “make it faster.”

Evaluate a lighting system across:

- reliability;
- predictable failure behavior;
- serviceability;
- troubleshooting speed;
- documentation quality;
- scalability;
- operational simplicity;
- network/control resilience;
- compatibility;
- change tolerance;
- handoff quality.

A system with fewer fragile dependencies may be superior to a technically elaborate system that cannot be diagnosed under show conditions.

---

# 8. System-level troubleshooting

Course 3 should move from component troubleshooting to architecture troubleshooting.

Ask:

- Is the fault local, segment-wide, universe-wide, network-wide, or control-wide?
- Is the physical path intact?
- Is the logical patch correct?
- Is the expected source controlling the endpoint?
- Did a configuration or show-file change create the symptom?
- Is the failure inside lighting or at an interface with another department?

Teach isolation of failure domains and verification against the system diagram.

---

# 9. Assessment architecture

Use design and commissioning scenarios rather than recall-heavy exams.

Learners should be asked to:

- turn a production brief into a control-system block diagram;
- identify missing requirements;
- design a documented universe/address strategy;
- diagnose a failure from topology and status information;
- identify single points of failure;
- propose a more maintainable architecture;
- create a commissioning plan;
- respond to a late production change without losing configuration control.

Assessment should reward explicit assumptions and escalation when information is missing.

---

# 10. Recommended course structure

### Module 1 — Requirements & Architecture
Production requirements, system boundaries, interfaces, control layers.

### Module 2 — Protocols & Networked Control
DMX concepts, RDM, sACN, gateways, network architecture, interoperability.

### Module 3 — Documentation & Configuration Management
System drawings, patch/address records, labeling, show-file/version control.

### Module 4 — Commissioning & Verification
Defined acceptance criteria, endpoint verification, control-path testing, discrepancy management.

### Module 5 — Resilience & Optimization
Failure domains, redundancy, maintainability, scalability, system-level troubleshooting.

### Module 6 — Integrated Design Scenario
A complete design/commissioning/change-control case requiring defensible decisions.

---

# 11. Evidence and sources

1. ESTA Technical Standards Program — entertainment technology standards, including E1.20 RDM and E1.31 sACN  
   https://tsp.esta.org/tsp/documents/published_docs.php
2. ETCP — Entertainment Electrician certification and scope boundary  
   https://etcp.esta.org/certify/certify_electrical.html
3. ETCP — Entertainment Electrician examination content  
   https://etcp.esta.org/certify/examination_electrical.html
4. AVIXA — ANSI/AVIXA D401.01:2023 Documentation Requirements for Audiovisual Systems  
   https://www.avixa.org/resources/standards/documentation-requirements-for-audiovisual-systems
5. AVIXA — Audiovisual Systems Performance Verification, reaffirmed 2024  
   https://www.avixa.org/resources/standards/av-systems-performance-verification

## Related Crew Blueprint research

- Package 12 / 12A — Lighting Production Flow
- Package 25 — Lighting Lead: Console & Rig Authority
- Package 30 — Electrics Lead: Power Authority & Code Compliance

---

## Curriculum decision

**Lighting Course 3 should be a systems-design and commissioning course, not an advanced-console feature tour.** The mastery outcome is the ability to translate requirements into a documented, verifiable, resilient lighting-control architecture while respecting separate electrical, rigging, engineering, and employer-authorization boundaries.