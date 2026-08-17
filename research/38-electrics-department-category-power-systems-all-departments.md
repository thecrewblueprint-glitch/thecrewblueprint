# 38 — Electrics Department Category: Power Systems for All Departments

**Research Queue ID:** CD-001  
**Status:** Complete research packet  
**Research date:** 2026-08-17  
**Purpose:** Define how Crew Blueprint should treat electrics as a cross-department infrastructure category rather than as merely another show department.

---

## Decision question

**Should electrics be modeled as a distinct infrastructure category that supports every production department, and what belongs inside that category?**

## Bottom-line finding

Yes. The strongest evidence supports treating **electrics / portable power distribution as shared production infrastructure** with its own competency ladder, rather than burying it inside lighting.

The correct mental model is:

**utility/source → service/interface → distribution → branch circuits → department loads → monitoring/protection → shutdown/strike**

Lighting is one consumer of production power, but audio, video, staging/automation, catering, site operations, broadcast, backline, temporary structures, and other systems may also depend on the same electrical infrastructure.

ETCP makes this distinction unusually clear. Its current Scope of Work document says the Portable Power Distribution Technician (PPDT) certification covers the specific area of portable power distribution, while the broader Entertainment Electrician certification covers all aspects of entertainment electrical work and is intended for technicians as well as managers and supervisors. ETCP further states that PPDT knowledge is a subset of Entertainment Electrician knowledge.

This supports a Crew Blueprint architecture in which **Electrics is an infrastructure branch serving multiple departments**, with lighting retaining its own artistic/control/fixture pathway.

---

# 1. Why electrics should not be treated as a lighting subsection

Historically, live-event crews often place portable power work organizationally near lighting/electrics. That does not mean the technical scope is equivalent to lighting operation.

Portable power can supply:

- lighting systems;
- audio amplification and processing;
- video walls, processors, cameras, and control systems;
- backline and instrument power;
- stage machinery and automation interfaces;
- broadcast/recording equipment;
- temporary production offices and support spaces;
- site and vendor systems where assigned.

The electrical system therefore behaves more like a **shared utility layer** than a single department endpoint.

Crew Blueprint should teach the organizational distinction:

> **Lighting determines how light is produced and controlled. Electrics determines how production electrical loads are supplied safely within the authorized system.**

On some shows the same people perform both functions; in others they are separated by role, contract, venue, or scale. The curriculum should preserve that variability.

---

# 2. Evidence from ETCP

ETCP's current Scope of Work comparison provides the strongest national entertainment-industry evidence.

### Portable Power Distribution Technician

PPDT covers portable electrical equipment and power distribution within the entertainment/event environment. ETCP describes PPDT work as the specific area of power distribution, often performed under supervision of an Entertainment Electrician.

### Entertainment Electrician

The Entertainment Electrician certification is broader. ETCP says it covers all aspects of the work and is intended for managers and supervisors as well as technicians.

### Curriculum implication

Crew Blueprint should not invent a false mandatory ladder in which every worker must hold PPDT before Entertainment Electrician. ETCP does not require that sequence.

The useful competency architecture is instead:

**power-awareness support → supervised portable-distribution work → independent portable-power competence → broader entertainment-electrical competence → lead/system authority**

Certification remains separate from Crew Blueprint course completion.

---

# 3. Electrical system mental model

The core teaching model should be system-level rather than connector-level.

## 3.1 Source

Examples can include:

- venue service;
- generator;
- approved temporary distribution source;
- other production-approved supply.

The learner should understand that source capacity, grounding/bonding arrangements, fault protection, and interface conditions are not casual choices.

## 3.2 Distribution

Portable production power may use feeder, distro equipment, disconnects, overcurrent protection, branch circuits, and specialized entertainment connectors.

A curriculum may teach identification and functional purpose without implying that an unqualified learner may connect, energize, modify, or troubleshoot any distribution system.

## 3.3 Loads

Each department presents electrical loads with different operating characteristics. The electrics function must know what is connected, how much capacity is required, and what protection/routing applies.

## 3.4 Protection and monitoring

The infrastructure layer includes:

- overcurrent protection;
- grounding/bonding integrity;
- weather/environmental protection;
- cable protection;
- appropriate equipment ratings;
- inspection/testing;
- controlled energization/de-energization;
- monitoring and fault response.

---

# 4. OSHA context

OSHA's Subpart S materials provide relevant general-industry requirements for temporary wiring and portable distribution. OSHA requires, among other things, appropriate distribution origins, protection of conductors, protection against accidental contact with live parts, and weatherproof construction for certain outdoor portable distribution boxes.

OSHA also requires temporary wiring to be removed when its temporary purpose is complete and contains requirements addressing cords/cables exposed to public access and physical damage.

These rules do not create a complete live-entertainment electrical curriculum by themselves. They establish the broader legal safety context within which entertainment-specific standards, NEC provisions, employer procedures, local electrical codes, and qualified-person requirements operate.

Crew Blueprint should therefore distinguish:

- **OSHA regulatory requirements**;
- **NEC / adopted electrical-code requirements**;
- **ETCP occupational competency**;
- **manufacturer instructions**;
- **employer/venue authorization**.

None should be presented as interchangeable.

---

# 5. Cross-department responsibility map

## Electrics owns or coordinates

Within the assigned production scope, qualified electrical personnel may be responsible for:

- understanding available source/service;
- distribution planning;
- feeder and branch strategy;
- load allocation;
- approved connections;
- testing and verification;
- energization/de-energization sequence;
- electrical fault response;
- coordination with venue/generator/vendor electrical personnel;
- protection of temporary power systems.

## Departments own their equipment/system intent

Audio, lighting, video, staging, and other departments retain responsibility for their own equipment configuration and operational intent.

The interface question is therefore:

> **What electrical service does the department require, and where does electrical authority end and department-system authority begin?**

This should become a recurring cross-department scenario in advanced Crew Blueprint courses.

---

# 6. Recommended Crew Blueprint course architecture

### Foundation — Electrical Hazard & Power Awareness

For general stagehands:

- recognize production-power equipment;
- understand that feeder/distro are safety-critical;
- identify damaged, wet, overheated, exposed, or improperly protected conditions;
- preserve cable paths and distro access;
- do not connect/disconnect or energize systems outside authorization;
- report abnormalities immediately.

### Portable Power Technician Track

For appropriately experienced learners:

- electrical theory relevant to production;
- connector/system identification;
- load concepts;
- cable selection concepts;
- distribution components;
- grounding/bonding concepts;
- overcurrent protection;
- inspection/testing;
- temporary outdoor/environmental considerations;
- documentation;
- fault-isolation principles;
- controlled energization and shutdown.

Practical qualification must remain employer/instructor controlled.

### Entertainment Electrician / Lead Track

Advanced learners should study:

- production power planning;
- system interfaces;
- calculated load planning;
- venue/generator coordination;
- code/standard navigation;
- verification and documentation;
- crew leadership;
- change control;
- incident/fault escalation;
- cross-department coordination.

---

# 7. What must remain outside unsupervised online instruction

Crew Blueprint should not imply that course completion authorizes a learner to:

- make energized connections;
- work exposed live parts;
- open/modify distribution equipment;
- defeat protective devices;
- determine grounding/bonding arrangements without qualification;
- select or alter overcurrent protection independently;
- repair feeder or distro equipment;
- perform code-required testing without training/authorization;
- connect to venue service or generators merely because the learner passed a quiz.

These require practical training, employer authorization, and—in many contexts—qualified electrical personnel and applicable licensing/code compliance.

---

# 8. Infrastructure-category decision

Crew Blueprint should create a top-level conceptual category such as:

**Production Infrastructure**

with at least two major branches:

1. **Electrics / Power Systems**
2. **Rigging / Load-Bearing Systems** — pending Phase E/ETCP dependency completion

The category exists because these systems support multiple departments and create shared safety constraints.

Production/stage-management coordination should remain a separate **cross-functional management branch**, not an infrastructure technology.

---

# 9. Primary sources

1. ETCP — Scope of Work for Entertainment Electrician and Portable Power Distribution Technician  
   https://etcp.esta.org/certify/scopeofwork.html
2. ETCP — Portable Power Distribution Technician eligibility  
   https://etcp.esta.org/certify/certify_ppdt.html
3. ETCP — PPDT examination content  
   https://etcp.esta.org/certify/examination_ppdt.html
4. OSHA — Subpart S Electrical Standard eTool  
   https://www.osha.gov/etools/subpart-s
5. OSHA — 29 CFR 1910.306, Specific Purpose Equipment and Installations  
   https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.306
6. OSHA — 29 CFR 1910.305, Wiring Methods  
   https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.305

## Related Crew Blueprint packages

- Package 02 — Department Skill Progressions
- Package 30 — Electrics Lead: Power Authority & Code Compliance
- Package 36 — Electrics Course 3: System Design & Load Planning

---

## Curriculum decision

**Electrics should be a distinct infrastructure category serving the whole production.** Do not collapse portable power into lighting. Teach a graduated competency model from hazard awareness through portable distribution and advanced entertainment-electrical leadership, while keeping certification, qualification, employer authorization, and electrical licensing separate from online course completion.