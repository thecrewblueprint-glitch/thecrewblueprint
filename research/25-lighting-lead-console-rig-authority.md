# 25 — Lighting Lead: Console & Rig Authority

**Research Queue ID:** CB-002  
**Status:** Complete research packet  
**Research date:** 2026-08-17  
**Depends on:** Package 24 / CB-001  
**Purpose:** Define the technical and crew-leadership authority appropriate to a lighting lead/crew chief while separating crew chief, programmer/operator, designer, electrician, and rigger responsibilities.

---

## Bottom-line finding

A lighting lead/crew chief is best defined as the person accountable for turning the approved lighting plan into a functioning, safe, verified lighting system **within the authority assigned to that role**.

PRG’s current Lighting Crew Chief model requires the ability to lead technicians and stagehands, plan/execute/monitor lighting-specific requirements, and carry responsibility for lighting systems. Harman’s lighting-team overview similarly describes the crew chief as responsible for bringing the plot to reality, directing the crew, and ensuring power/data/rigging requirements are implemented. Current touring IATSE records separately identify Head Electrician as a traveling department head.

The lead should therefore be trained around:

**plot/requirements → prep → crew deployment → hang/placement → power/data/control verification → console/show-file coordination → system check → change control → show/strike readiness**.

---

# 1. Role boundaries

Lighting terminology varies by production. Crew Blueprint should distinguish functions rather than assume one title always owns everything.

### Lighting Designer

Owns creative lighting design intent in contexts where a separate designer exists.

### Programmer / Console Operator / Lighting Director

Owns or operates show-control programming according to production structure. Harman notes that a lighting operator/director may run the console and maintain the intended looks across performances.

### Lighting Crew Chief / Lead / Head Electrician

Owns implementation and crew/system readiness within the assigned lighting department scope.

### Entertainment Electrician / qualified electrical role

Electrical work can carry separate legal, code, employer, and qualification requirements. ETCP’s Entertainment Electrician program is explicitly aimed at experienced electricians whose work involves safety, liability, and compliance with electrical laws.

### Rigger

Suspension/rigging authority is separate unless the worker also holds that assigned competence/authority.

One person may hold several functions on a small production, but the curriculum must teach the functions separately.

---

# 2. What the lighting lead owns

## 2.1 Plan interpretation

The lead should be able to interpret the production’s relevant lighting documentation sufficiently to organize implementation:

- fixture schedule/plot;
- positions;
- circuit/power requirements as applicable;
- data/control requirements;
- addressing/patch information;
- accessories;
- special equipment;
- labor sequence;
- dependencies with rigging, staging, video, audio, and venue systems.

The course should not turn a crew chief into a lighting designer. The lead implements approved intent and manages changes through the correct authority.

## 2.2 Crew deployment

Following Package 24, the lighting lead should assign work according to capability and risk:

- unload/stage;
- fixture prep;
- hang/position under the applicable procedure;
- cable/data runs;
- addressing/patch tasks;
- focus support;
- console/support roles;
- strike/repack.

The lead verifies that workers understand the assignment and any relevant stop-and-ask boundaries.

## 2.3 System integrity

The lighting lead needs a system-level model:

**power + fixture + data/control + addressing/patch + console/show file + physical position/focus = usable lighting system**.

A problem can exist in any layer. Lead-level troubleshooting should isolate the layer rather than randomly changing settings.

---

# 3. Console authority and show-file discipline

Modern console files contain far more than cues. MA Lighting’s grandMA3 documentation states that show data can include patch, pool objects, users/profiles, output configuration, and DMX protocol configuration. ETC’s Eos documentation likewise treats the show file as the stored show-data environment.

Therefore a lighting lead curriculum should teach **change control around console/show files**.

Core rules:

- know which file/version is authoritative;
- save/back up before consequential changes according to production procedure;
- understand whether the requested change affects patch, output configuration, protocols, programming, or local settings;
- avoid overwriting touring/designer data casually;
- communicate changes to the responsible operator/programmer/designer;
- verify output after changes.

MA Lighting documents automatic backup creation when saving and supports multiple backup files. That is product-specific evidence for a broader operational principle: **show data needs recoverability**.

The course should not prescribe grandMA or Eos menu steps as universal lighting-lead behavior. Product-specific console training should be separate labs or vendor modules.

---

# 4. Patch and addressing authority

grandMA3 documentation shows that patch configuration defines fixtures, fixture types, DMX universes, stages, and related control data. This demonstrates why patch is a system-level configuration, not clerical labeling.

Lead-level learners should understand:

- fixture identity and mode must match the control model;
- physical addressing and console patch must agree;
- universe/network routing must reach the intended device;
- changes can affect multiple departments or show-file elements;
- established touring patch should not be “cleaned up” without authorization.

Assessment should use mismatches such as:

**correct fixture, wrong address; correct address, wrong mode; correct patch, missing data path; correct data, missing power; correct system, wrong physical position.**

---

# 5. Power authority boundary

ETCP’s Entertainment Electrician certification explicitly covers experienced personnel dealing with electrical systems, safety, and code compliance, and its Scope of Work distinguishes broader Entertainment Electrician responsibilities from the narrower Portable Power Distribution Technician scope.

Crew Blueprint must therefore avoid teaching “lighting lead” as automatically equivalent to “qualified electrician.”

A lighting lead needs enough power-system awareness to:

- understand the approved power plan;
- recognize when work enters qualified electrical scope;
- ensure the crew follows the assigned distribution procedure;
- identify obvious mismatches/overload concerns and escalate;
- coordinate with venue/electrical authority;
- prevent unauthorized modifications.

Independent design of complex temporary power, energized electrical work, code determinations, and other qualified electrical tasks belong to the appropriate electrical training/authority.

---

# 6. Rigging authority boundary

A lighting plot may specify truss/fixture positions, but that does not make the lighting lead the structural/rigging authority.

Teach the distinction:

- lighting lead: what lighting equipment needs to be placed and how it interfaces with the lighting system;
- rigger/qualified rigging authority: how suspended loads are safely supported and installed within the rigging plan;
- production/design authority: approved location/design changes.

A lighting lead should identify conflicts early and coordinate rather than independently alter rigging.

---

# 7. Troubleshooting model

Use a layer-based diagnostic ladder:

1. **Scope:** one fixture, one position, one universe, or entire system?
2. **Power:** is the equipment powered as intended?
3. **Physical/data:** are connections and data paths correct?
4. **Address/mode:** does device configuration match the patch?
5. **Network/protocol:** is control data reaching the correct node/device?
6. **Console patch:** is the logical fixture correctly configured?
7. **Programming:** is the console actually commanding the expected state?
8. **Fixture fault:** does the device require service/replacement?
9. **Escalation:** is the fault electrical, rigging, network, manufacturer-service, or design scope?

The lead’s value is the ability to direct the right person toward the right layer quickly.

---

# 8. Safety and verification

Following OSHA’s supervisor-training principles and Package 24, the lighting lead should perform or coordinate a pre-ready verification appropriate to the production:

- crew assignments complete;
- fixtures/accessories match plan;
- connections are secure and appropriately routed;
- required safeties/secondary retention are present according to equipment/production requirements;
- power/data plan has been followed;
- obvious damage is removed from service/escalated;
- work areas and access paths are controlled;
- system test completed;
- discrepancies documented/communicated;
- design/technical changes approved by the correct authority.

This is an instructional framework, not a substitute for venue, employer, manufacturer, code, or ETCP procedures.

---

# 9. Recommended terminal capability

A learner completing the Lighting Lead course should be able to:

> Plan and direct implementation of an approved lighting package; assign and monitor a lighting crew; reason across fixture, power, data, patch, console, and physical-position layers; protect show-file/configuration integrity; verify system readiness; troubleshoot methodically; coordinate with designers, programmers, electricians, riggers, venue staff, and production management; and stop/escalate decisions outside their authority.

Course completion does not confer ETCP certification, electrical licensure/qualification, rigging qualification, or employer appointment as Head Electrician/Crew Chief.

---

# 10. Primary sources

1. PRG Crew Portal — Lighting Crew Chief classification  
   https://crew.prg.com/en/
2. HARMAN Professional Solutions — Meet Your Lighting Team  
   https://pro.harman.com/insights/harman-pro/meet-your-lighting-team/
3. ETCP — Entertainment Electrician certification  
   https://etcp.esta.org/certify/certify_electrical.html
4. ETCP — Entertainment Electrician / PPDT Scope of Work  
   https://etcp.esta.org/certify/scopeofwork.html
5. MA Lighting — grandMA3: Load a Show File  
   https://help.malighting.com/grandMA3/2.2/HTML/sfh_load.html
6. MA Lighting — grandMA3: Backup, Demo and Template Show Files  
   https://help.malighting.com/grandMA3/2.2/HTML/sfh_backup.html
7. MA Lighting — grandMA3: Patch and Fixture Setup  
   https://help.malighting.com/grandMA3/2.4/HTML/patch.html
8. ETC — Eos Family: About Show Files  
   https://www.etcconnect.com/WebDocs/Controls/EosFamilyOnlineHelp/en/Content/05_Show_Files/About_Show_Files.htm
9. IATSE — current touring Yellow Card listings showing Head Electrician as a department head  
   https://iatse.net/shows/the-outsiders-tour/
10. OSHA — Safety Management: Education and Training  
    https://www.osha.gov/safety-management/education-training

---

## Curriculum decision

**Teach lighting lead authority as system implementation authority bounded by design, electrical, rigging, and production governance.** The lead owns crew execution and lighting-system readiness; they do not automatically own every creative, structural, or electrical decision touching the rig.