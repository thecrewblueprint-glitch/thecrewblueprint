# The Crew Blueprint — Audience & Employer Discovery Synthesis

**Date:** 2026-09-06  
**Status:** analytical research input for owner review; not technical or safety authority  
**Purpose:** deepen the existing Roadmapdev community-discovery layer with current public worker discussions, current employer expectations, and Production Atlas industry structure before final curriculum architecture decisions.

## Evidence boundary

This document answers what workers and employers appear to care about, not how hazardous work should be performed. Public discussion is qualitative needs evidence. Individual job descriptions describe specific employers and venues, not universal rules. Technical, legal, safety, manufacturer, venue, union, and qualified-person authority remain separate controlling evidence classes.

## Inputs used

### Existing internal analytical inputs

- Roadmapdev: `research/crew-blueprint-community-client-discovery-2026-09-05.md`
- Roadmapdev: `research/crew-blueprint-client-discovery-packet-2026-09-06.md`
- Crew Blueprint: `research/analysis/course-system-situation-2026-09-06.json`
- Crew Blueprint: `research/matrix/course_inventory.jsonl`
- Production Atlas (`festival-atlas`, `research-version`): `data/packages/production-branches.js`
- Production Atlas: `research/employer-landscape-market-analysis.md`

### Fresh public worker/community sample reviewed in this pass

Representative discussions:

- Touring engineers on useful local hands and recurring mistakes: https://www.reddit.com/r/livesound/comments/dmypt8/
- Touring technicians on signals of professional local crews: https://www.reddit.com/r/livesound/comments/1tri8ky/
- Newer technical-theatre worker asking how to become a strong crew member: https://www.reddit.com/r/techtheatre/comments/1va46hy/
- IATSE extra-list discussion involving lateness, unread work documents, and distraction during instructions: https://www.reddit.com/r/IATSE/comments/1v26ygi/
- New stagehand uncertainty about slow-season call volume and career direction: https://www.reddit.com/r/stagehands/comments/1ojdux0/
- Touring-career entry discussion: https://www.reddit.com/r/TouringCrew/comments/1spfvqy/
- Local-crew discussion about unclear instructions and respect from touring personnel: https://www.reddit.com/r/stagehands/comments/1w0gfoc/
- Touring-tech discussion about keeping assigned local hands together and giving simple instructions: https://www.reddit.com/r/livesound/comments/1mijath/

### Current employer / venue evidence reviewed in this pass

- Rhino Staging national stagehand labor and current Utah stagehand recruiting materials: https://www.rhinostaging.com/ and https://recruiting.paylocity.com/Recruiting/Jobs/Details/4289511
- Rhino guidance for new stagehands and riggers, emphasizing honest self-assessment, scope, learning, and context variation: https://www.rhinostaging.com/5tipsfornewriggersandstagehands/
- Crew One application flow, including transportation, experience, certifications, and referrals: https://www.crew1.com/careers/join-the-crew
- Current Lincoln Theatre / CAPA stagehand posting: https://www.indeed.com/viewjob?jk=3baa61ceff5ba6bc
- Current ASM Global / Legends Global stagehand postings, including punctuality, communication, equipment care, changing venue needs, and qualified-person boundaries.
- Current Live Nation stagehand postings, including load-in/out, department assistance under direction, event communication, and stage-manager / production-manager direction.

## Findings that are now strong enough to drive product architecture

### 1. Clarification is a primary novice skill, not a soft extra

Experienced workers repeatedly prefer a beginner who asks a short clarifying question over someone who guesses, disappears with an assignment, or improvises beyond what was requested. Current employer descriptions independently emphasize following direction and communicating clearly.

**Curriculum implication:** “listen → clarify → execute the assigned support → report back” should be a visible operating loop in Fundamentals and department Course 1 material.

### 2. Preserve the existing system before trying to improve it

The worker sample repeatedly describes avoidable rework when local hands unplug, untape, move, reorganize, or otherwise alter a touring or department-owned system without being asked. Production Atlas also shows that the same event contains many distinct ownership domains and vendors.

**Curriculum implication:** adopt **Preserve → Verify → Report** as a cross-department professional behavior. This is not permission to perform specialist work; it is a rule against silently changing someone else’s system.

### 3. Reliability is observable job competence

Across worker discussions and employer postings, the repeated signals are punctuality, reading call/work information, staying findable, remaining with the assigned team, completing ordinary work consistently, and communicating delays or unfinished work.

**Curriculum implication:** Fundamentals should teach reliability as a practical competency with scenarios, not as a motivational slogan.

### 4. Documents and information flow deserve more weight

Current employer material expects workers to interpret or at least work from call sheets, plots, setup diagrams, labels, inventories, run-of-show information, and supervisor instructions. Community complaints also include people failing to read provided information.

**Curriculum implication:** create a bounded Fundamentals lesson on **reading the call**: recognizing what information matters, identifying who controls unclear details, and confirming changes rather than independently rewriting plans.

### 5. Useful support beats premature technical identity

Touring and experienced-worker discussions repeatedly distinguish a useful local hand from somebody trying to prove they are already an engineer or technician. Employers likewise describe stagehand work as broad support, with specialist operation limited by training, qualification, authorization, or assignment.

**Curriculum implication:** department starters should teach vocabulary, workflow, gear recognition, ownership, handoffs, and escalation. Advanced design, programming, energized work, rigging, structural acceptance, powered-equipment operation, and other specialist procedures do not belong in beginner starter courses.

### 6. Equipment stewardship and reset quality are reputation signals

Employer descriptions explicitly require proper handling/storage, clean work areas, reporting damage, and restoring spaces. Community material treats careless cable/case/tool handling and unrequested changes as memorable failures.

**Curriculum implication:** Field Skills should remain prominent, but should be presented as one coherent practice library rather than eighteen claims of eighteen separate major courses.

### 7. Career navigation remains one of the largest unmet needs

New workers continue asking how first calls turn into regular work, how department specialization happens, how local work connects to touring, and which experience or credentials matter. Production Atlas confirms that a festival or concert is an employer ecosystem: labor companies, IATSE locals, venues, staging vendors, lighting/audio/video vendors, power providers, site operations, logistics, touring teams, and production offices may all be separate hiring pathways.

**Curriculum implication:** do not build one universal promotion ladder. Build a branching role/employer map and route volatile employer/market lookup to Production Atlas.

### 8. Work availability, transportation, scheduling, and seasonality are part of job readiness

Current hiring materials ask about reliable transportation and variable availability; community discussion shows anxiety around slow periods and uneven call volume. Production Atlas also describes festival labor as seasonal and vendor-mediated.

**Curriculum implication:** career guidance should explain irregular work, multiple work sources, call acceptance, transportation/logistics planning, and seasonality without promising earnings or presenting one employer’s scheduling system as universal.

### 9. Leadership quality is also part of the problem

The community evidence is not simply “new hands are bad.” Local hands also describe poor outcomes when touring personnel give unclear instructions, belittle locals, or fail to manage the crew. Experienced leads discuss the value of simple instructions and manageable team sizes.

**Curriculum implication:** future Lead / Crew Chief material should teach clear assignment, respectful correction, verification, and escalation. Crew Blueprint should not normalize yelling, humiliation, or abuse as an industry rite of passage.

### 10. Context varies enough that the curriculum must teach transfer, not one sacred method

Rhino’s own training guidance explicitly notes that venues, shows, roles, and environments differ. Production Atlas identifies distinct branches across staging, rigging, lighting, audio, video/LED, power, site ops, logistics, scenic, backline, stage management, and production office work.

**Curriculum implication:** teach durable behaviors and decision boundaries; route exact equipment/site/company procedure to the responsible current authority.

## Audience demand vs employer demand

| Audience / worker demand | Employer / lead demand | Overlap to prioritize |
|---|---|---|
| Know what a first call is actually like | Arrive ready, punctual, and able to follow the call | Stagehand Fundamentals |
| Know what to do when unsure | Accurate direction-following and clear communication | Listen / clarify / report-back scenarios |
| Learn practical tasks | Gear care, organization, handling, reset, handoffs | Field Skills library |
| Understand departments without bluffing expertise | Stay within assignment and specialist boundaries | Five Course 1 department starters |
| Know how to get called again and progress | Reliable, recommendable workers | Professional Trust career guide |
| Understand where jobs actually come from | Workers matched to real labor/vendor/venue pathways | Live Production Ecosystem guide + Production Atlas bridge |
| Understand touring/festival reality | Workers prepared for irregular schedules and changing environments | Touring & Festival Work Reality guide |
| Understand pay/admin/records | Fewer timekeeping, scope, and communication problems | Worker Business & Admin Basics guide |
| Know which credentials/training matter | Qualified/authorized people for specialist work | Training, Credentials & Specialist Paths guide |

## What is unnecessary beginner overkill

The evidence does **not** support making the following normal first-stage learner choices merely because deep research or historical HTML exists:

- lighting control-system design;
- audio system/network architecture;
- advanced LED display architecture;
- temporary-power system/load planning;
- rigging procedure or work-at-height procedure;
- structural assembly/acceptance authority;
- department-specific Lead courses as a universal next rung;
- Supervisor as a universal promotion tier;
- production infrastructure/research containers;
- volatile employer/job data copied into static lessons.

These materials may remain valuable as advanced modules, references, specialist-awareness content, owner-review packs, or internal research.

## Product decision

The strongest current evidence supports a public learner system built around:

1. **Stagehand Fundamentals**
2. **One Field Skills Library** containing the existing field-skill routes
3. **Five Department Starter courses (Course 1 only)**
4. **Five practical career/resource guides**

Advanced and specialist material remains retrievable behind Owner Review and in research/history. The catalog should grow only when a distinct audience problem, evidence base, learner claim, assessment method, and real industry role justify another standalone course.

## Research still needed before claiming the architecture is fully validated

- Direct interviews with labor coordinators, crew chiefs, department leads, venue technical managers, touring technicians, and shop managers.
- Direct learner usability testing of Fundamentals and the five Course 1 starters.
- A cross-context role-family map covering venue, touring, festival, corporate, theatre, union, non-union, vendor, and production-office structures.
- Targeted Backline / Props / Wardrobe practitioner validation.
- Identity-by-identity reclassification of the 143 registered records into course/module/lesson/field-skill/reference/guide/research/archive/defer states.
- Continued authoritative-source review for any claim involving specialist or hazardous work.
