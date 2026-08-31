# Stagehand Core Curriculum Architecture

**Prepared:** 2026-08-31  
**Status:** Architecture decision for owner review  
**Branch:** `research/mdq-010-stagehand-field-skills-universe`  
**Purpose:** Turn Stagehand Fundamentals and the growing Field Skills library into one coherent learner journey without collapsing knowledge, observed practice, specialist authority, or career progression into one misleading course.

## 1. Architecture decision

Create one umbrella learning program named **Stagehand Core**.

Stagehand Core is a **catalog and progression system**, not one giant linear page.

It contains four learner-facing layers:

1. **Stagehand Fundamentals** — shared jobsite knowledge, safety awareness, communication, department recognition, work behavior, and stop-and-ask judgment.
2. **Core Field Skills** — high-frequency transferable physical tasks a general stagehand may perform under direction and demonstrate on named equipment/conditions.
3. **Context & Specialty Field Skills** — useful tasks that vary more strongly by venue, event type, product, employer, lead, or regulatory context.
4. **Career & Department Launchpad** — a clear transition from general stagehand competence into Lighting, Audio, Video, Staging/Scenic, Rigging awareness, Electrics awareness, Production/Coordination, Warehouse/Rental Shop, and other career directions.

This structure preserves one coherent user experience while keeping different claims separate.

## 2. Why Fundamentals and Field Skills should not become one undifferentiated course

Fundamentals and Field Skills answer different questions.

### Fundamentals answers

- What is this job?
- How does a call work?
- What hazards and jobsite conditions should I recognize?
- How should I communicate and behave on a crew?
- Where are my boundaries?
- What departments and career directions exist?

### Field Skills answer

- Can I perform this specific bounded task correctly on the actual equipment and conditions selected by the responsible lead?

Merging those claims into one completion state would create avoidable ambiguity. A learner who finished a safety/communication lesson must not appear to have demonstrated cable handling, material movement, staging support, or any other physical skill.

The correct product architecture is therefore **one catalog, separate evidence states**.

## 3. Recommended learner journey

### Stage 1 — Start here

**Stagehand Fundamentals**

Current four-part structure remains valid:

1. First Call Readiness
2. Jobsite Awareness and Crew Conduct
3. Load-In and Load-Out
4. Departments and Career Direction

The learner should be able to enter any part directly, but the catalog should recommend Part 1 for a first-time worker.

### Stage 2 — Become useful on common calls

**Core Field Skills**

Recommended core sequence:

1. Move a Road Case With a Partner
2. Team Lift, Carry, and Set Down an Awkward Item
3. Move a Cart / Dolly / Hand Truck Through a Production Workspace
4. Coil and Stage Production Cable Under Direction
5. Lay, Gather, and Dress Released Cable Under Direction
6. Park, Label, and Organize Cases / Boneyard Without Blocking Work
7. Reset the Work Area and Protect Egress / Work Paths
8. Cable Ramps & Protectors Under an Approved Route Plan

These should appear as individual skill cards inside one Field Skills catalog rather than as unrelated standalone courses.

### Stage 3 — Add call-specific skills

**Context & Specialty Skills**

Examples:

- Barricade setup
- Pipe-and-drape support
- Soft-goods handling
- Riser/deck component support
- Scenery/flat movement
- Basic stagehand tool handling
- Ratchet straps under direction
- Flatbed cargo-securement support
- Loading-dock / trailer pedestrian and handoff awareness

These should be tagged by context such as:

- Arena / concert
- Festival / outdoor
- Theatre
- Corporate / convention
- Venue / house
- Warehouse / rental shop
- Truck / logistics

### Stage 4 — Choose a direction

The learner should then reach a **Career & Department Launchpad** rather than simply seeing “Course 2 / Course 3.”

Suggested choices:

- Lighting
- Audio
- Video / LED / Camera / Media
- Staging / Carpentry / Scenic
- Rigging — awareness first, qualification path clearly external
- Electrics / Production Power — awareness first, qualified work clearly external
- Backline
- Props
- Wardrobe
- Production / Stage Management / Venue Operations
- Warehouse / Rental Shop / Logistics
- Crew Chief / Leadership

The catalog should explain that workers may combine roles on smaller shows and specialize more deeply on larger productions.

## 4. Catalog UX

The Stagehand Core dashboard should visually follow the accepted **Stagehand Fundamentals** interaction pattern.

### Top-level dashboard

Use a compact header and a clear progression map instead of a screen-filling repeated course hero.

Recommended sections:

- **Start Here — Fundamentals**
- **Core Field Skills**
- **Context & Specialty Skills**
- **Department Pathways**
- **Career Growth**

### Field Skill cards

Each card should show:

- skill name;
- one strong visual or diagram thumbnail;
- short “why this matters on a call” statement;
- contexts where it applies;
- current learning state;
- equipment / lead / observer requirement;
- whether the learner can practice with ordinary controlled equipment or needs an exact product/site;
- source/review status;
- estimated lesson size, not a fake competency duration;
- clear button such as `Learn the Skill`, `Review the Skill`, or `Needs Field Observation`.

### Useful filters

- Core
- Cable
- Cases & carts
- Staging
- Logistics
- Public-area
- Theatre
- Concert / arena
- Festival / outdoor
- Corporate / convention
- Warehouse / rental shop

Do not use filters that imply a job title or qualification the course does not grant.

## 5. Standard Field Skill lesson pattern

Every Field Skill should use the same user-friendly instructional rhythm unless the task genuinely requires another structure.

### 1. What you are being asked to do

Show the real assignment in plain language.

### 2. What you need to recognize

Use a labeled visual of the equipment, parts, route, work area, or handoff.

### 3. Before you touch it

Cover:

- assignment owner;
- release state;
- equipment condition;
- route / destination;
- surrounding hazards;
- what must be clarified first.

### 4. Watch the skill

Use one or more:

- original photo sequence;
- labeled diagram;
- short video;
- narrated animation;
- manufacturer or authoritative demonstration where rights and applicability permit.

Every visual must identify model/context limitations.

### 5. Controlled sequence

Teach only the transferable sequence supported by evidence.

Do not fill gaps with invented universal procedure.

### 6. What good looks like

Give visible acceptance conditions the learner can recognize.

### 7. Common mistakes

Explain likely mistakes, why they matter, and whether the learner should correct, stop, or escalate.

### 8. Stop and ask

Every physical course includes explicit stop conditions.

### 9. Quick decision check

Use scenario-based questions rather than trivia where possible.

### 10. Field practice / teach-back

Observed practice records:

- named equipment;
- relevant model/type;
- route/environment;
- observer;
- conditions;
- result: pass / rework / stop;
- comments.

The observation does not create standing employer authorization.

### 11. Sources and boundaries

Learner-facing source panel plus full matrix lineage behind the page.

## 6. Visual instruction standard

Field Skills should be deliberately visual because many physical stagehand tasks are harder to learn from prose alone.

Use visuals for:

- equipment recognition;
- hand/body position where safe and appropriate;
- direction of movement;
- route/clearance examples;
- pinch/crush/no-go zones;
- good-versus-bad staging examples;
- cable path examples;
- labeled parts;
- before/after work-area states;
- escalation / decision diagrams.

A safety-critical visual must record:

- asset owner;
- source/license;
- equipment/model/context;
- reviewer;
- date/version;
- claims supported;
- alt text and text fallback;
- freshness/replacement trigger.

AI-generated visuals may be used as explanatory illustrations only when they are reviewed against the actual evidence and do not pretend to depict an exact product or approved procedure that was never verified.

## 7. Liability and authority architecture

The product should continuously distinguish these states:

1. **Viewed / lesson position recorded**
2. **Knowledge check completed**
3. **Skill prepared for practice**
4. **Observed practice completed on named equipment / conditions**
5. **Employer or responsible lead authorizes actual work in that context**
6. **External credential / qualification / license verified where applicable**

No earlier state implies a later state.

### Required language pattern

Prefer:

> This lesson prepares you to recognize and practice the task under the responsible lead. The equipment owner, employer, venue, manufacturer, qualified person, or other controlling authority determines the actual method and whether you may perform the work.

Avoid:

- certified stagehand;
- jobsite-ready;
- qualified rigger/electrician/operator;
- authorized after completion;
- industry standard when the source only shows one employer/local/manufacturer practice;
- exact physical limits not supported by controlling evidence.

## 8. What should remain outside the general Field Skills practical catalog

The following can appear as awareness, career-navigation, or specialist-path content but should not be general self-study practicals:

- overhead rigging / hoist work;
- climbing / fall-protection work;
- energized temporary-power connection, testing, troubleshooting, or fault work;
- forklift / powered industrial truck operation;
- MEWP operation;
- stage automation / machinery operation;
- pyrotechnics, flame, cryo, lasers, or similar special-effects operation;
- regulated cargo acceptance / commercial driving responsibility;
- any task whose legal/employer/manufacturer qualification cannot be separated from the physical procedure.

## 9. Career progression model

The Stagehand Core catalog should teach learners that career growth is not one universal ladder.

A useful model is:

**Reliable general hand**  
→ **repeatable core field skills**  
→ **department support experience**  
→ **systems understanding**  
→ **technician/operator/specialist experience where authorized**  
→ **leadership or advanced specialist/design path**

Workers may enter, skip, combine, or specialize differently depending on employer, union local, venue, tour, market, credentials, and prior experience.

The site should therefore show both:

- **learning progression**; and
- **real-world career branches**.

They are related but not identical.

## 10. Recommended migration from the current site

### Keep

- `courses/stagehand-fundamentals.html` as the canonical Fundamentals player.
- Existing Field Skill routes as individual deep links.
- Existing department course routes.

### Add

A new umbrella route, tentatively:

`courses/stagehand-core.html`

or a catalog section inside the existing learning dashboard.

This becomes the learner's main entry point and shows Fundamentals + Field Skills + career launchpad together.

### Reposition

- Ratchet straps and flatbed securement: move visually into `Context & Specialty Skills`.
- Barricade: context/event specialty.
- Cable ramps: later core/context crossover after general cable workflow.

### Do not delete

No existing course should be removed until the new catalog route, redirects/links, matrix relationships, and owner audit prove nothing was lost.

## 11. Build sequence

1. Finish SFS-U01 through the currently prioritized Field Skill source packets.
2. Define stable course IDs and visual requirements for each core skill.
3. Draft the unified Stagehand Core catalog/dashboard.
4. Populate Core Field Skills with existing and new lessons.
5. Add Context & Specialty filters and cards.
6. Add the Career & Department Launchpad.
7. Matrix every claim, question, visual, practice gate, and authority statement.
8. Run owner review and practitioner validation.
9. Enhance with original reviewed photos/diagrams/video.
10. Later use the repository-wide `audit` branch for final publication review when directed.

## 12. Decision summary

**Use one Stagehand Core catalog.**

**Do not use one giant monolithic course.**

The best structure for accuracy, usefulness, liability control, and actual career development is:

> **Stagehand Core = Fundamentals + Core Field Skills + Context/Specialty Skills + Career/Department Launchpad**

This architecture gives a learner one obvious place to start and grow while keeping knowledge, physical skill evidence, employer authorization, and specialist qualification separate.