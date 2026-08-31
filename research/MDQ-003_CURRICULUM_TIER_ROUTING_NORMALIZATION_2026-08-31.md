# MDQ-003 — Curriculum Tier and Routing Normalization

**Prepared:** 2026-08-31  
**Status:** Complete canonical routing model  
**Purpose:** Ensure curriculum depth, job responsibility and real-world authority are not collapsed into one misleading ladder.

## Core decision

The Crew Blueprint will use **three separate axes**:

1. **Learning tier** — how deep the course teaches.
2. **Responsibility band** — what kind of work/accountability the content discusses or practices.
3. **Authority class** — who actually has permission, qualification or legal/employer authority to perform the task.

This resolves the biggest structural risk in the older tier language: a learner can understand an advanced system without being the person authorized to operate, energize, rig, inspect, design or sign off that system.

# 1. Canonical learning tiers

## T0 — Orientation / Resource

**Purpose:** Explain the industry, career options, vocabulary, organizations, work patterns or interfaces without claiming task competence.

**Allowed outcome:** “I can recognize/compare/navigate this topic.”

Examples:
- career and hiring resources;
- Production & Coordination career branch;
- organizations/credentials overview;
- work-week/life-on-road resources.

T0 is not a prerequisite “rank.” It sits beside the learning ladder as navigation/context.

## T1 — Foundation

**Canonical label:** **Stagehand Fundamentals / Foundation**

**Purpose:** Shared first-call knowledge, work behavior, hazard awareness, communication, department recognition and stop-and-ask judgment.

**Allowed outcome:** “I understand the basic job context and can recognize when I need direction.”

**Does not establish:** practical task performance, department technician status, lead responsibility, employer authorization or external qualification.

## T2 — Field Skill

**Canonical label:** **Stagehand Field Skill**

**Purpose:** One bounded physical task that can be explained, shown, practiced and observed on named equipment/conditions.

**Allowed outcome:** “I demonstrated the named task under the recorded conditions and responsible observer.”

**Does not establish:** standing permission for other equipment/routes/conditions or specialist work.

Field Skill is **task-specific**, not a promotion above Foundation.

## T3 — Department Support

**Canonical label:** **Department Support · Course 1**

**Purpose:** Recognition and assigned support work inside a department.

**Allowed outcome:** “I can recognize equipment/workflow and support assigned work under direction.”

**Does not establish:** independent configuration, operation, troubleshooting, repair, inspection, energization, rigging, tuning, design or show-critical change authority.

## T4 — Department Systems

**Canonical label:** **Department Systems · Course 2**

**Purpose:** Explain how the department’s system works: signal/power/data/material flow, handoffs, documentation, common failure domains and escalation boundaries.

**Allowed outcome:** “I can trace the system, explain dependencies and communicate where a problem belongs.”

**Critical rule:** Systems understanding is **not** independent technician/operator authorization.

## T5 — Lead / Work-Package Responsibility

**Canonical label:** **Lead Tier**

**Purpose:** Plan, assign, sequence, communicate, verify, manage change and escalate within a named crew/system/work package.

**Allowed outcome:** “I can reason about bounded lead decisions and work-package accountability.”

**Does not establish:** appointment as a lead, craft qualification, design authority, licensure, employer authorization or specialist credentials.

A person may be technically senior without supervising people; likewise a crew lead may coordinate work without owning every specialist decision.

## T6 — Supervisor / Integrated Operations

**Canonical label:** **Supervisor Tier**

**Purpose:** Coordinate multiple work packages and forecast changing event-wide conditions while preserving department/specialist authority.

**Allowed outcome:** “I can integrate status, constraints, hazards and handoffs across functions.”

**Does not establish:** craft authority inside every department.

## T7 — Advanced Systems / Design / Portfolio

**Canonical label:** **Advanced Systems · Course 3**

**Purpose:** Requirements translation, architecture, documentation, commissioning logic, resilience/failure domains, controlled change and portfolio-level reasoning.

**Allowed outcome:** “I can develop/review a bounded technical architecture or coordination portfolio at the course’s stated scope.”

**Does not establish:** professional licensure, engineering authority, electrical/rigging qualification, equipment-specific employer authorization or appointment to a design role.

## TX — External Qualification / Specialist Authority Boundary

**Not a Crew Blueprint learning tier.**

This is an external state controlled by one or more of:

- law/regulation/AHJ;
- licensing;
- employer qualification/authorization;
- union/local referral/qualification rules;
- recognized credentialing body;
- manufacturer training/service authorization;
- venue/house authority;
- qualified/competent person designation;
- documented experience/appointment.

Examples include ETCP rigging/electrical pathways, licensed electrical work where required, employer MEWP/forklift authorization, manufacturer service work and named show/venue appointments.

Crew Blueprint may prepare knowledge for these environments. It does not self-issue TX.

# 2. Responsibility bands

Learning tier and job responsibility do not have to match one-to-one.

| Band | Responsibility meaning | Typical examples |
|---|---|---|
| R0 | Awareness / observer / learner | first-call learner, career explorer |
| R1 | Assigned support worker | stagehand, department hand, utility/support worker |
| R2 | Independent technician/operator/specialist subsystem owner | lighting tech, A2/A1 depending context, video tech, console operator, system tech |
| R3 | Crew/work-package/department lead | crew chief, head/lead tech, department head in bounded context |
| R4 | Cross-functional supervisor/manager/coordinator | production/event operations supervisor, production manager context |
| R5 | Designer/engineer/advanced specialist authority | system designer, programmer specialist, qualified rigger/electrician, engineer where applicable |

**Rule:** A T4 course can discuss R2/R3 workflows without granting R2/R3 status. A T7 course may teach R5 reasoning without granting external R5 authority.

# 3. Authority classes

| Code | Authority class | Meaning |
|---|---|---|
| A0 | Knowledge only | Reading/quiz creates no field permission |
| A1 | Assigned support | Responsible lead/employer assigns bounded support task |
| A2 | Observed task state | Named task observed on named equipment/conditions |
| A3 | Employer/venue appointment or authorization | Organization controls who may perform/lead/operate |
| A4 | Qualified/credentialed specialist | External credential/qualification/manufacturer/union program may apply |
| A5 | Licensed/regulatory/AHJ controlled | Law, adopted code, permit, license or AHJ controls work |

A course records only A0 by itself. A Field Skill observation can record A2. It cannot generate A3–A5.

# 4. Routing rules

## Rule 1 — every competency gets one home tier

A concept may be previewed earlier and revisited later, but one tier owns the complete instructional objective.

Example: **DMX**
- T1: recognize that lighting uses control/data and do not repatch/configure it casually.
- T3: identify common data cable/equipment under direction.
- T4: understand addressing, universes, topology and failure categories conceptually.
- T7: design/document/commission a bounded network architecture.
- TX/A3–A5: employer/specialist authority controls actual show-critical configuration where applicable.

Do not teach the T7 objective inside T1 and then rely on a disclaimer to fix the mismatch.

## Rule 2 — previews cannot expand permission

Earlier tiers may say what a specialist does and why it matters. They may not provide procedural depth that reasonably reads as permission to perform restricted work.

## Rule 3 — later tiers inherit earlier boundaries

Advancing from T3 to T4/T5/T7 never erases:

- manufacturer limits;
- employer/venue authority;
- qualified-person requirements;
- jurisdiction/AHJ requirements;
- rigging/electrical/licensing boundaries;
- equipment-specific training requirements.

## Rule 4 — lead and technical depth are parallel dimensions

Lead is not automatically “more technically expert than every specialist.”

Examples:
- an Audio Lead may coordinate RF work while an RF specialist owns frequency coordination;
- a Lighting Lead may run the department while a programmer owns console programming and a qualified electrician owns temporary-power decisions;
- a Crew Chief may coordinate stagehands without becoming the Head Rigger.

## Rule 5 — Supervisor does not absorb department authority

T6 teaches integration and escalation. It does not make the supervisor the technical signoff authority for rigging, electrical, structural, RF, network or other specialized systems.

## Rule 6 — Course 3 is portfolio reasoning, not a license

T7 emphasizes requirements, documents, architecture, verification and change control. Procedural live-power, physical rigging qualification and regulated work remain external/specialist boundaries.

## Rule 7 — resources and career maps are T0, not fake progression levels

“Production Infrastructure” and “Production & Coordination” describe subject areas, not ranks above/below a department course.

# 5. Current route normalization

| Current route/family | Canonical learning tier | Responsibility content | Authority created by course |
|---|---|---|---|
| `lms-dashboard.html` | T0 navigation into T1 | R0/R1 context | A0 |
| Stagehand Fundamentals | T1 | R0→R1 awareness | A0 |
| six Field Skills | T2 | R1 bounded physical task | A0 online; A2 only after recorded observation |
| Lighting/Audio/Video/Staging/BPW Course 1 | T3 | R1 support | A0; actual work requires A1 assignment |
| five Course 2 pathways | T4 | R1/R2 system context | A0 |
| seven Lead pages | T5 | R3 accountability reasoning | A0; appointment is A3 |
| Predictive Hazard Recognition | T6 | R3/R4 | A0 |
| Event Operations & Production Coordination | T6 | R4 | A0; employer role is A3 |
| Lighting/Audio/Video/Staging/Electrics Course 3 | T7 | R2–R5 architecture depending domain | A0; specialist authority external |
| Production Power Awareness | T1/T0 cross-functional awareness | R0/R1 recognizing shared infrastructure | A0 only |
| Production & Coordination Career Branch | T0 | compares R3/R4 career tracks | A0 |
| resource pages | T0 unless explicitly embedded in T1 | varies | A0 |

# 6. Department home-tier map

This table prevents the same competency from being taught at conflicting permission levels.

| Competency family | Preview tier | Home tier | Advanced revisit | External boundary |
|---|---|---|---|---|
| General jobsite behavior, PPE, egress, stop-and-ask | T1 | T1 | T5/T6 leadership application | employer/site controls exact program |
| Road-case movement | T1 awareness | T2 | T5 logistics/lead planning | employer/route/equipment controls method |
| Cable coiling | T1 awareness | T2 | department-specific T3/T4 exceptions | technician/manufacturer controls actual cable |
| Department equipment handling | T1 | T3 | T5 QC/assignment | lead/manufacturer rules |
| Lighting production lifecycle | T1 department intro | T4 | T5/T7 planning/design | role/employer appointment |
| Lighting console mental model | T3 recognition | T4 | T7 architecture/programming strategy | employer/show programmer authority |
| Product-specific console menus | none/minimal | specialist/manufacturer training, not core generic tier | optional specialist module only with evidence | A3/A4 as applicable |
| Audio signal flow | T1 intro | T4 | T7 architecture | employer/system-role authority |
| RF coordination | T1 recognize handoff | T4 conceptual interface / specialist research | T7 planning interface | specialist A3/A4/regulatory context |
| LED wall handling | T1 intro | T3 | T4 system reasoning / T7 architecture | exact manufacturer + lead |
| Rigging | T1 hazard/role recognition | awareness/support only until MDQ-060–066 decides bounded material | T5/T7 decision/documentation only | TX/A3–A5 qualified rigger/employer/venue |
| Temporary power | T1 hazard recognition | T4 conceptual literacy where appropriate | T7 planning/docs | TX/A3–A5 qualified/licensed/AHJ as applicable |
| Portable deck systems | T1 recognition | T3 assigned support | T4 system/inspection concepts; T7 coordination | manufacturer/venue/structural authority |
| Stage automation | T1 exclusion-zone awareness | T4 interface only if researched | T7 coordination | specialist/operator/engineer authority |
| Crew leadership | T1 communication intro | T5 | T6 integrated supervision | employer appointment A3 |
| Production management / stage management / venue ops | T0 orientation | separate T5/T6 track sequences after MDQ-090–092 | T7 portfolio where justified | employer/venue appointment |

# 7. Specific normalization findings

## Rigging

The current Rigging Lead page is **T5 decision/leadership curriculum**, not proof that a learner is a qualified rigger. Future rigging research must not backfill missing T2/T3 physical instruction merely to make the ladder visually symmetrical. A deliberate `external_boundary` is valid curriculum architecture.

## Electrics

Production Power Awareness is T1/T0 awareness. Electrics Course 3 is T7 planning/document literacy. Neither fills the external gap for connection, testing, energization, live troubleshooting or licensed/AHJ-controlled work. That is intentional.

## Backline / Props / Wardrobe

Current combined T3/T4 routes may remain for transferable support/system ownership concepts. MDQ-080–083 decides where specialization requires separate routes. Do not create a combined T7 simply to complete a three-course pattern.

## Production & Coordination

Stage Management, Production Management and Venue/Event Operations are parallel career families. The current shared page is T0 orientation. Future courses should branch rather than imply one title ladder.

## Course dashboards

All course dashboards should use the Stagehand Fundamentals interaction/layout pattern as the default UI standard. This is a **presentation standard**, not a learning tier. Course depth must not be inferred from card size, navigation style or visual prominence.

# 8. Content-writing guardrail

Before adding a lesson, state:

1. **Domain ID** from MDQ-000.
2. **Home learning tier** from this file.
3. **Responsibility band** being discussed.
4. **Authority class created by the course** — normally A0, or A2 only after a separately recorded observation.
5. **External authority retained elsewhere.**

If the proposed lesson cannot answer those five fields cleanly, its scope is not ready.

# 9. Matrix validation rules

The site-wide matrix should flag:

- T1/T3 content with `lead_decision` or `specialist_external` procedural claims;
- T4 content that uses language implying independent authorization;
- T5/T6 content that claims authority over another discipline without an explicit interface owner;
- T7 content that implies license/certification/qualification from course completion;
- any A3–A5 claim attributed to Crew Blueprint itself;
- a Field Skill where observed practice is not equipment/context-specific;
- duplicate concepts whose home tiers conflict.

# 10. Migration policy for existing content

This document **does not require immediate renaming of every current page label**. Existing visible labels may remain during owner audit if their learner-facing meaning is already bounded correctly.

During enhancement:

- normalize metadata/source-data to T0–T7;
- revise misleading learner-facing tier claims where found;
- preserve URLs unless there is a strong reason to migrate;
- use redirects/compatibility records if a route changes;
- do not force a course into a missing tier merely for symmetry.

# 11. Definition of done

- [x] One canonical learning-tier model defined.
- [x] Responsibility and authority separated from learning depth.
- [x] Current course families normalized without inventing qualifications.
- [x] Rigging/electrics external boundaries preserved as valid architecture.
- [x] Backline/Props/Wardrobe and Production/Coordination split decisions are represented correctly.
- [x] Cross-domain examples demonstrate how a concept can preview/recur without permission drift.
- [x] Matrix flags can detect tier/authority contradictions.
- [x] New course-writing guardrail established.

**MDQ-003 result:** complete. This model supersedes any interpretation of the older tier matrix that treats the course sequence as a universal career ladder or treats course completion as real-world authorization.