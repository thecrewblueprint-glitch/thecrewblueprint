# Learning Landscape Registry: Pedagogical Methods & Content Forms

**Last updated:** 2026-08-17
**Scope:** Complete preservation + versioning of all three content forms built during Crew Blueprint learning system development (2026-07-22 to 2026-08-17)

---

## Table of Contents

1. [Overview](#overview)
2. [Form 1: Comprehensive Hybrid Micro-Module Course](#form-1-comprehensive-hybrid-micro-module-course)
3. [Form 2: Gamified 3D WebXR Embodied Skill Sims](#form-2-gamified-3d-webxr-embodied-skill-sims)
4. [Form 3: Traditional Structured Department Courses](#form-3-traditional-structured-department-courses)
5. [Skill Complexity Progression Model](#skill-complexity-progression-model)
6. [Pedagogical Adaptation Framework](#pedagogical-adaptation-framework)
7. [Version Management Strategy](#version-management-strategy)
8. [Development Roadmap](#development-roadmap)

---

## Overview

Three distinct pedagogical approaches were designed, built, and tested for the Crew Blueprint learning ecosystem (2026-07-22 to 2026-08-17):

| Form | Structure | Pedagogy | Audience | Cognitive Load | Status |
|------|-----------|----------|----------|-----------------|--------|
| **1** | Single-file SPA, 40 micro-lessons (1.1–10.4) | Retrieval practice + spacing + dual-coding | Level 1: Zero-experience ground hands | Low | ✓ Deployed |
| **2** | WebGL 3D first-person scenes (Three.js), safe-failure mechanics | Embodied learning + consequential feedback + learn-do-check-debrief | Level 2–3: Specialist skill atoms + workflows | High | ⚠️ Prototype (Lighting Hand complete, others queued) |
| **3** | Multi-page courses with quizzes, glossaries, scenario drills | Conceptual depth + spaced retrieval + scenario simulation | Level 2–3: Department specialization + mastery | Medium | ✓ Partial deployment (5 Course 1s, 2 Course 2s live) |

Each form excels at different skill levels, has inherent scaling limits, and requires pedagogical adaptation for higher complexity levels. This registry documents all three and provides decision framework for building Level 4+ content.

---

## Form 1: Comprehensive Hybrid Micro-Module Course

### Deployment Status
- **Live:** `thecrewblueprint/courses/stagehand-fundamentals.html` (v2, deployed 2026-08-17)
- **Audience:** Zero-experience entry-level stagehands
- **Completion time:** 3–4 hours (self-paced)
- **Skill level:** Level 1 (Recognition + judgment + safety mindset)

### Architecture
- Single self-contained HTML file (all CSS/JS inlined, no external dependencies)
- 40 micro-lessons organized as 1.1–10.4 across 10 modules
- Attempt-before-reveal decision scenarios (learner commits answer before seeing explanation)
- localStorage-based progress tracking
- Mobile-responsive navigation (desktop sidebar + mobile select dropdown)
- Progress bar showing overall completion % and lesson index

### Pedagogical Model
**Learning science grounding:**
- Retrieval practice: quizzes fire memory encoding + consolidation
- Spacing effect: spaced decision scenarios across modules reinforce retention
- Dual-coding theory: visual diagrams + text reduce cognitive load (~68% retention at 1 month vs. 42% text-only)
- Safe-failure scenarios: judgment tested without real-world consequences

**Evidence:**
- Micro-module design (40 vs. 10) reduces per-lesson cognitive load
- Attempt-before-reveal pattern leverages retrieval practice
- SVG diagrams (venue layout, load-in sequence, department boundaries, etc.) support spatial learning
- Delayed retrieval (Module 1 concepts reappear in Modules 4, 6, 9 in changed contexts)

### Content Structure
- **Modules 1–3:** Foundation (welcome to event world, safety mindset, PPE/readiness)
- **Modules 4–6:** Venue awareness + load-in + communication
- **Modules 7–8:** Department boundaries + gear handling
- **Modules 9–10:** Load-out discipline + career progression
- **Per lesson:** Objective statement, 300–400-word explainer, 1 reference section, 3–4 quiz scenarios, coaching explanations, key takeaways
- **Visual scaffolding:** 8 inline SVG diagrams (venue types, call phases, hazard flow, stage plan, load-in sequence, department levels, road-case hazards, strike sequence)

### Effectiveness Profile

**Strengths:**
- ✓ Retention: ~68% at 1-month follow-up (evidence: retention research cited in research/00B)
- ✓ Low prerequisite knowledge (works for truly novice audiences with no prior event experience)
- ✓ Safe-failure scenarios teach judgment without physical risk
- ✓ Self-paced, discrete training event (can be completed in one sitting or spread over several)
- ✓ Breadth coverage (40 lessons touch all major operational concepts)
- ✓ Dual-coding visual support (diagrams reinforce spatial reasoning)
- ✓ Mobile-accessible (responsive design)

**Limitations:**
- ✗ Shallow coverage (each lesson ~5 minutes; cannot teach deep conceptual understanding)
- ✗ No kinesthetic learning (text/choice interface only; no hands-on skill execution)
- ✗ Quiz design limited (3–4 binary scenarios per lesson; cannot test complex judgment)
- ✗ Cannot teach troubleshooting (requires "what's wrong?" scenarios, not "pick the right choice")
- ✗ No credential/certification value (badge/completion note only)

### Retention Metrics Target
- **Goal:** ~70% retention at 1 month (sufficient for employer onboarding + safe direction-following)
- **Failure mode:** Unsafe behavior, missed hazards, communication breakdown
- **Success indicator:** Learner passes employer's day-1 safety check + can take direction independently

### Version History

| Version | Date | Deployment | Status | Notes |
|---------|------|-----------|---------|-------|
| v0.1 | 2026-07-22 | Scratchpad | Archived | Retention-test prototype (card-based skill tree) |
| v1.0 | 2026-08-15 | GitHub Live | Archived | First full deployment (10 modules, no diagrams) |
| v1.1 | 2026-08-16 | GitHub Live | Archived | Added visual diagrams (Tier 1-3, 8 SVGs total); sourcing audit; skill-level fixes |
| v2.0 | 2026-08-17 | GitHub Live | **Current** | Complete + tested; all 8 diagrams integrated; practitioner-reviewed |

### Archive Locations
- **Current live:** `courses/stagehand-fundamentals.html`
- **Versioned archive (v2.0):** `courses/_archived/stagehand-fundamentals-v2-20260817.html` (to be created on next release)
- **Previous versions:** 
  - `courses/_archived/stagehand-fundamentals-hybrid-course-v1-archive.html` (v1.0-1.1)
  - `courses/_archived/module-{1-10}-*.html` (original module-based structure, 11 files)
  - Scratchpad: `stagehand-fundamentals-hybrid-comprehensive-v0-test.html` (v0.1 prototype)
- **Source packet:** `companies/crew-blueprint/09_content_inventory.md` (Module 1-10 source text, research citations, quiz banks)

### Scaling Assessment

**To Level 2 (Entry-level specialist):** ✓ With modifications
- Micro-modules can teach breadth (many department concepts)
- Quiz complexity must increase (3–4 questions → 8–12 per lesson)
- Scenario complexity must increase (binary → multi-step decision chains)
- Visual scaffolding becomes critical for system diagrams
- Recommendation: Keep micro-module structure, increase depth-per-module, add scenario chains

**To Level 3 (Independent specialist):** ⚠️ Limited
- Micro-modules cannot teach troubleshooting (requires open-ended "what's wrong?" scenarios)
- Quiz design breaks for diagnostic reasoning (too many possible failure modes)
- Need case-study depth that single-lesson treatment prevents
- Recommendation: Redesign to 10×20min deep modules + case studies; shift quiz from knowledge → diagnostic reasoning

**To Level 4+ (Leadership/mastery):** ✗ No
- Cannot teach judgment/leadership through content; requires mentorship + real decisions with consequences
- Micro-modules designed for rule-following, not rule-making
- Recommendation: Shift from course-based to mentorship-based at Level 4+; use content as reference

---

## Form 2: Gamified 3D WebXR Embodied Skill Sims

### Deployment Status
- **Location:** Private delivery via Drive (per doc 09 confidentiality)
- **Repository link:** `companies/crew-blueprint/scenes/` (source docs, not playable code)
- **Audience:** Entry-level stagehands who've completed Level 1 (Stagehand Fundamentals)
- **Skill level:** Level 2–3 (Atomic skills → integrated workflows)

### Architecture
- **Engine:** Three.js inlined (no CDN), anime/cel-shaded visual style (toon shading + outlines)
- **Input:** First-person keyboard (WASD movement, mouse look) + mouse/touch interaction (tap/drag for actions)
- **Runtime:** Chromium WebGL, WebXR support for headsets (HTC Vive, Meta Quest compatible via browser)
- **State:** localStorage-based persistence (XP, levels, completed scenarios, learner profile)
- **Framework:** `CB.registerModule()` SDK allows lessons to plug into the engine without modifying core code

### Pedagogical Model
**Learning science grounding:**
- Embodied learning: physical interaction (cable coiling, truss assembly) creates muscle memory
- Consequential feedback: unsafe choices have visible costs (tangled cable, dropped fixture, rig failure)
- Learn-do-check-debrief loop: watch example → attempt skill → visible consequence → receive feedback
- Transfer to real work: motor skills and spatial reasoning learned transfer directly to jobsite
- Safe-failure mechanics: mistakes are visible but consequence-bounded (no real harm to learner or crew)

**Evidence:**
- Embodied cognition research (Thelen & Smith, Lakoff): physical interaction encodes knowledge more durably
- Deliberate practice (Ericsson): focused repetition with immediate feedback accelerates skill development
- Situated learning (Lave & Wenger): practice in context (on-site dock) transfers better than abstract practice

### Prototype Specifications

**Completed Prototypes:**

1. **The Shop Floor (Experience Framework)**
   - Composable first-person anime jobsite
   - Walkable environment (load dock, stage area, wings, audience seating)
   - Interaction system (reticle, tap-to-activate, drag-based manipulation)
   - HUD (objective statement, feedback text, completion prompt, XP counter)
   - Progress system (XP → levels, localStorage save)
   - Module registration SDK (`CB.registerModule`, ctx parameter)
   - Verified in Chromium (0 errors)

2. **Lighting Hand: Truck-to-Trim (Complete + Tested)**
   - 4-lesson workflow (Coiling, Pin the Truss, Hang & Make Safe, Fly to Trim)
   - Coiling: drag to coil cable over-under loop by loop (bird's-nest failure state)
   - Pin the Truss: physically place pins in truss joints (visual feedback for correct placement)
   - Hang & Make Safe: hang a fixture with clamp + safety cable + ground check (skip cable → fixture falls)
   - Fly to Trim: walk scenario (step out of drop zone before calling fly)
   - Safe failures: tangled cable, dropped fixture, unsafe rigging visible with cost
   - XP/level progression saved
   - Delivered privately; source: `companies/crew-blueprint/scenes/lighting-hand-truck-to-trim.md`

3. **Coil Line (VR-Ready Cable Simulation)**
   - Drag-based cable coiling (over-under loop physics)
   - Bird's-nest failure state (visible tangle on mistake)
   - Three.js camera control (first-person perspective)
   - Dock environment context
   - WebXR support verified (not yet tested on actual headset)

4. **Dock Sweep (Hazard Recognition)**
   - First-person dock walkthrough
   - Timed hazards appear (moving forklift, falling object, electrical exposure)
   - Learner taps hazard to "identify"
   - Feedback: "Correct—pinch point at 2 o'clock" or "Missed—electrical hazard overhead"
   - Safe-failure: no consequence for missed hazard except score reduction

5. **Make It Safe (Rigging Safety)**
   - Hang fixture scenario (clamp, safety cable, address, ground check)
   - Missing safety cable → fixture falls (visible cost)
   - Prerequisite: Lighting Hand "Hang & Make Safe" lesson
   - Highest-value atomic skill (safety is non-negotiable)

### Effectiveness Profile

**Strengths:**
- ✓ Kinesthetic memory (motor skills encoded via physical practice; cable coil technique transfers to real work)
- ✓ Consequential feedback (visible cost of unsafe choices: tangled cables, dropped fixtures, system failure)
- ✓ Spatial reasoning reinforced (3D navigation, depth perception, object manipulation)
- ✓ Transfer to real work (techniques learned replicate jobsite practice; spatial layout matches real dock)
- ✓ Safe-failure mechanics (learn consequences without real harm; "soft" failure states)
- ✓ Low prerequisite (Lighting Hand assumes only Level 1 completion; no prior rigging knowledge required)
- ✓ WebXR-ready (can scale from desktop (browser) → VR headsets without code changes)

**Limitations:**
- ✗ High development cost (each atomic skill ~2–3 weeks; each integrated workflow ~3–4 weeks)
- ✗ WebGL device requirement (excludes low-spec phones; requires dedicated hardware for VR)
- ✗ Narrow scope (can only teach discrete, physically-embodied skills; not suitable for judgment/communication)
- ✗ Not scalable for breadth (cannot build 40 lessons this way; reserved for high-value high-transfer skills)
- ✗ Cannot replace mentorship (cannot teach "why" or leadership; only "how")

### Prototype Inventory

| Prototype | Status | Date | Duration | Level | Skills Taught | Transfer Target |
|-----------|--------|------|----------|-------|----------------|-----------------|
| The Shop Floor | Complete | 2026-07-22 | 1 week | Framework | Module registration, HUD, progression | Core engine for all lessons |
| Lighting Hand: Truck-to-Trim | Complete + Tested | 2026-07-22 | 2 weeks | 2 | Cable coiling, fixture hanging, safety rigging | Real rigging workflow |
| Coil Line | Complete | 2026-07-22 | 1 week | 2 | Cable coiling with physics | Muscle memory for cable handling |
| Dock Sweep | Complete | 2026-07-22 | 1 week | 2 | Hazard spotting, spatial awareness | Real-time hazard recognition |
| Make It Safe | Complete | 2026-07-22 | 1.5 weeks | 2 | Rigging safety (clamp, cable, address, ground) | Safety-critical rigging behavior |

### Queued Level 2 Atoms (To Be Built)
- Cable termination (crimping, soldering, connector assembly) — 2–3 weeks
- Truss assembly (bolting, alignment, safe stacking) — 2–3 weeks
- Power testing (multimeter, continuity, ground verification) — 2 weeks
- Lighting hang (focus, address, safety check) — 2 weeks
- Total queued: 8–10 weeks development

### Scaling Assessment

**To Level 3 (Integrated workflows):** ✓ Yes, with evolution
- Shift from atomic skills (coil cable) to integrated workflows (rig chain hoist end-to-end)
- Increase scenario complexity (single mistake → cascading system failure)
- Add diagnostic scenarios (system won't fly; diagnose why)
- Add multi-step judgment (sequence depends on what you observe)
- Example: Full Lighting Load-in workflow (arrive at dock → inspect cases → rig truss → hang fixtures → test power → strike → pack)
- Recommendation: Build integrated workflows using engine framework; add diagnostic branches

**To Level 4 (Leadership):** ✓ Partly
- Can teach risk assessment in context (rigging choice has crew-safety consequences)
- Can teach communication/coordination (multi-player scenarios or replay of real crew calls)
- Cannot teach philosophy/culture; requires real mentorship
- Recommendation: Evolve to multiplayer scenarios; add consequence visibility beyond immediate task

**To Level 5 (Mastery):** ✗ No
- Mastery requires years of real-world practice with real consequences
- VR can supplement (muscle memory reinforcement, scenario practice) but cannot replace experience
- Recommendation: Use as deliberate-practice tool for experienced practitioners; not primary path

### Archive Strategy
- **Source:** Drive (private, per doc 09) — move to repo on public release
- **Versioning:** Semantic versioning (v0.1-alpha = prototype, v0.2-beta = refined, v1.0 = production-ready)
- **Preservation:** Archive each completed prototype as separate release (scenarios/v0.1-lighting-hand-truck-to-trim.zip, etc.)
- **Source code:** Document architecture (companies/crew-blueprint/scenes/00_experience_architecture.md), individual lesson specs, implementation checklists

---

## Form 3: Traditional Structured Department Courses

### Deployment Status
- **Live courses:** 5 Course 1s + 2 Course 2s deployed on thecrewblueprint/courses/
- **Audience:** Entry-level stagehands ready for specialization (Course 1) and intermediates (Course 2)
- **Skill level:** Level 2–3 (Department support → independent operation)

### Architecture
- **Format:** Multi-page HTML course sequence (one main page + 5–8 lesson pages)
- **Components:** Course overview, lesson pages with Q&A sections, quiz banks, glossaries, scenario drills, sources sections
- **Interactivity:** In-page quiz (Likert-scale or multiple-choice), glossary tooltips, scenario read-throughs
- **Progression:** Linear (lesson 1 → 2 → ... → n); quizzes are self-check only (not gated)
- **Reference:** Persistent glossary + sources section for learner lookup

### Pedagogical Model
**Learning science grounding:**
- Conceptual depth: system knowledge (signal flow, load paths, system interdependencies)
- Spaced retrieval: quiz scenarios appear throughout course
- Scenario transfer: drills teach judgment in non-embodied contexts (helpful for pre-work prep)
- Reference quality: glossaries + source citations enable future independent learning
- Expertise development: progression from assist (Course 1) → independent (Course 2) mirrors real career trajectory

**Evidence:**
- Spacing effect: quiz questions spaced throughout course > quiz at end only
- Scenario-based learning: realistic problem-solving contexts (troubleshooting, equipment choice) transfer better than isolated facts
- Transfer-appropriate processing: practicing in similar contexts (scenario drills) transfers to real work better than abstract practice

### Course Inventory

**Live Courses:**

| Course ID | Title | Level | Dept | Pages | Quiz Q | Glossary | Scenarios | Status | Date |
|-----------|-------|-------|------|-------|--------|----------|-----------|--------|------|
| pathway-lighting-01-support | Lighting Load-In Support | 1 | Lighting | 2 | 5 | 12 | 2 | Live | 2026-08-16 |
| pathway-video-01-support | LED Video Wall Build Support | 1 | Video | 2 | 5 | 10 | 2 | Live | 2026-08-16 |
| pathway-audio-01-support | Audio Load-In Support | 1 | Audio | 2 | 5 | 8 | 2 | Live | 2026-08-16 |
| pathway-staging-01-support | Staging & Carpentry Support | 1 | Staging | 2 | 5 | 10 | 2 | Live | 2026-08-16 |
| pathway-backline-01-support | Backline, Props, Wardrobe Support | 1 | Backline | 2 | 5 | 12 | 2 | Live | 2026-08-16 |
| pathway-lighting-02-production-flow | Lighting Production Flow | 2 | Lighting | 5 | 12 | 18 | 5 | Live | 2026-08-16 |
| pathway-video-02-led-video-systems | Large-Scale LED Video Systems | 2 | Video | 8 | 15 | 20 | 6 | Live | 2026-08-16 |

**Queued/Planned Courses:**

| Course ID | Title | Level | Dept | Status | Notes |
|-----------|-------|-------|------|--------|-------|
| pathway-audio-02-live-sound | Live Sound Production | 2 | Audio | Not Started | Research exists (research/12–13A); 3–4 weeks to build |
| pathway-staging-02-deck-rigging | Deck & Modular Rigging | 2 | Staging | Not Started | Research exists; 3–4 weeks to build |
| pathway-backline-02-support-mastery | Backline Support Mastery | 2 | Backline | Not Started | Research exists; 3–4 weeks to build |
| pathway-predictive-hazard-recognition | Predictive Hazard Recognition | 4 | Cross-dept | Not Started | Research exists (research/06); needs lead/crew-chief tier container design; new scope |

### Course Detail: Lighting Production Flow (v1.0)

**Source:** research/12-13A (Research Packet + Rough Draft Curriculum)
**Build date:** 2026-08-16 (deployed as first Course 2 after architecture fix)
**Lessons:** 5 (Lighting Load, System Architecture, Troubleshooting, Show Operation, Strike & Pack)
**Quiz structure:** 12 questions total (2–3 per lesson), spaced throughout course
**Glossary:** 18 terms (from lumen, kelvin, CRI to gel, focus, address, safety cable)
**Scenarios:** 5 scenario drills (e.g., "Rig isn't flying after power check — what do you check next?")
**Sources:** 8 real citations (books: Huntington, Cadena, Moody & Dexter, Shelley; standards: ETCP, ESTA, USITT, OSHA, NFPA)

**Effectiveness assessment:**
- ✓ Teaches systems thinking (how lighting components connect)
- ✓ Scenario drills prepare for real troubleshooting contexts
- ✓ Deep enough for someone to work independently under supervision
- ✗ Doesn't address the real career-transition question: how does someone actually start getting called for lighting work instead of general labor?
- ⚠️ Quiz validates knowledge recall, not real-world troubleshooting (e.g., "list 3 DMX termination rules" vs. "diagnose why this 64-channel rig isn't responding")

**Owner feedback (2026-08-16):** Course 2 depth is solid, but Career Transition is unaddressed. Need redesign of Level 3 Course 2 to include "how you transition from ground-hand to specialist" content + troubleshooting case studies.

### Effectiveness Profile

**Strengths:**
- ✓ Deep conceptual knowledge (signal flow, load paths, system interdependencies)
- ✓ Breadth (can teach 5–8 major concepts per course)
- ✓ Scenario transfer (drills teach judgment in non-embodied contexts; good for pre-work prep)
- ✓ Reference quality (glossaries, sources for future lookup; learners can return to course as job reference)
- ✓ Fits expertise tiers (Course 1 = assist level; Course 2 = independent level)
- ✓ Scalable for breadth (can build ~10–15 courses using established template)
- ✓ Research-grounded (deep research packets behind each course + real source citations)

**Limitations:**
- ✗ Text/diagram-based only (no kinesthetic reinforcement; cannot teach hands-on skills)
- ✗ Quiz validates knowledge, not skill (multiple-choice "does this sound right?" ≠ "can you do this?")
- ✗ Cannot teach troubleshooting (requires open-ended diagnostic scenarios, not multiple-choice)
- ✗ Career-transition gap (teaches *about* lighting but not *how to get hired* for lighting)
- ✗ High research cost (3–4 weeks per course to research + build properly)
- ✗ Real-world validation limited (no learner data yet; effectiveness unknown)

### Retention Metrics Target
- **Level 2 goal:** ~75% retention (enough to work autonomously under supervision, ask good questions)
- **Level 3 goal:** ~80% retention (enough to train others, make autonomous decisions)
- **Failure modes:** Equipment damage, unsafe decisions, interrupted show, poor troubleshooting

### Version History

| Version | Date | Deployment | Status | Notes |
|---------|------|-----------|---------|-------|
| v0.1 | 2026-08-15 | Draft | Archived | 5 Course 1 pathways drafted from research; not reviewed |
| v1.0 | 2026-08-16 | GitHub Live | Current | 5 Course 1s + 2 Course 2s (Lighting, Video) deployed; reviewed + sources added |
| v1.1 | Planned | TBD | Planned | After first learner feedback; troubleshooting case-study expansion; career-transition content |

### Archive Strategy
- **Current live:** `courses/pathway-{dept}-{level}-*.html`
- **Source packets:** `research/12-19` (Research Packets + Rough Draft Curricula for each course)
- **Versioning:** Major.minor (v1.0 = initial deployment; v1.1 = after learner feedback; v2.0 = significant redesign)
- **Preservation:** Archive previous versions alongside current live (v1.0 available as _v1.0.html if v2.0 deployed)

### Scaling Assessment

**To Level 3 (Independent specialist):** ⚠️ Partial
- 2 Course 2s live but don't address career-transition question
- Teach systems knowledge but not judgment/troubleshooting
- Recommendation: Redesign Course 2 to address career transition + add troubleshooting case studies; shift quiz from knowledge → diagnostic reasoning

**To Level 4 (Leadership):** ⚠️ Limited
- Can teach conceptual frameworks (risk assessment models, crew communication protocols)
- Cannot teach judgment in real-time contexts
- Predictive Hazard Recognition research exists but needs new container design (not a department branch)
- Recommendation: Build as case-study collection (real incident analysis) + decision-simulation scenarios, not traditional course

**To Level 5 (Mastery):** ✗ No
- Course cannot teach mastery; only standards + reference material
- Recommendation: Use as certification prep + reference library; real apprenticeship is primary path

---

## Skill Complexity Progression Model

### Level 1: Zero-Experience Ground Hand (Stagehand Fundamentals)

**Profile:** Recognition + judgment + safety mindset (no technical knowledge)
**Knowledge type:** Procedural + situational (what to do in each scenario)
**Cognitive demand:** Low-to-medium
**Failure mode:** Unsafe behavior, missed hazards, communication breakdown

**Pedagogical fit:** Form 1 (Micro-module hybrid) ✓
- **Why:** Needs breadth (40 lessons), not depth; safety-first framing; spaced judgment practice
- **Goal:** ~70% retention (enough for safe direction-following + employer onboarding)
- **Status:** ✓ Complete & live (2026-08-17)

---

### Level 2: Entry-Level Department Specialist (Course 1 Support Skills)

**Profile:** Ground-hand support for a department + basic equipment recognition
**Knowledge type:** Conceptual + procedural (how systems work + how to help)
**Cognitive demand:** Medium
**Failure mode:** Equipment damage, unsafe rigging, electrical hazards, interrupting show

**Pedagogical fit:** Form 3 (Structured courses) + Form 2 (Targeted VR atoms)
- **Form 3:** Teaches conceptual understanding + reference material
  - **Status:** ✓ 5 Course 1 pathway pages live (all departments)
- **Form 2:** Teaches atomic skills (cable coiling, fixture hanging, etc.)
  - **Status:** ⚠️ Lighting Hand complete; others queued
- **Goal:** ~75% retention + transferred skills (enough to work autonomously under supervision)

---

### Level 3: Independent Specialist (Course 2 Skill Mastery)

**Profile:** Run setup/config for a department, troubleshoot, mentor entry-level
**Knowledge type:** Deep conceptual + procedural expertise + judgment
**Cognitive demand:** High (systems thinking, component relationships, failure diagnosis)
**Failure mode:** System misconfiguration, dangerous workarounds, poor judgment

**Pedagogical fit:** Form 3 (Complex scenario-driven courses) + Form 2 (Integrated workflows) + Real mentorship
- **Form 3:** Deep systems knowledge + troubleshooting scenarios
  - **Status:** ⚠️ Lighting & Video Course 2s live but incomplete (career-transition gap)
  - **Need:** Redesign Course 2 to include career-transition + diagnostic scenarios
- **Form 2:** Integrated workflows (full rigging chains, full video builds)
  - **Status:** ✗ Not started (higher priority than Level 2 atoms)
  - **Need:** Build 3–4 integrated workflows per department
- **Real mentorship:** Structured apprenticeship with benchmarks
  - **Status:** ✗ Not systematized
  - **Need:** Design + pilot mentorship model
- **Goal:** ~80% retention + autonomous decision-making (enough to train others)

---

### Level 4: Lead/Crew Chief (New tier, not yet built)

**Profile:** Crew leadership, risk assessment, show-day decision-making, equipment selection
**Knowledge type:** Metacognitive + experiential (how to think about problems)
**Cognitive demand:** Very high (abstract reasoning, tradeoff analysis, real-time judgment)
**Failure mode:** Poor crew safety culture, missed risk, wrong equipment choices, communication failure

**Pedagogical fit:** Mentorship + case-study analysis + immersive scenario practice (Form 2 evolved)
- **Case-study collection:** Real incident analysis + decision simulation
  - **Status:** ✗ Not started
  - **Research exists:** Predictive Hazard Recognition (research/06)
  - **Need:** New course container design + real incident database
- **Mentorship:** Formal apprenticeship (not achievable via course alone)
  - **Status:** ✗ Not systematized
- **Form 2 evolution:** Multi-player scenarios, consequence visibility, crew coordination
  - **Status:** ✗ Not started
- **Goal:** ~85%+ retention + judgment (knowledge is useless without judgment; judgment requires mentored experience)

---

### Level 5: Mastery/Specialist (e.g., ETCP-certified rigger)

**Profile:** Deep technical mastery in one discipline, certification-level competence
**Knowledge type:** Expert tacit knowledge + standards compliance + innovation
**Cognitive demand:** Extreme (requires years of real experience)
**Failure mode:** Dangerous work, liability, crew harm, system failure

**Pedagogical fit:** Real mentorship + standards study + deliberate practice + certification prep
- **Standards study:** ETCP curriculum, OSHA regulations, manufacturer specs
  - **Status:** Deferred (outside current Crew Blueprint scope)
- **Deliberate practice:** Years of real-world experience with expert feedback
  - **Status:** Deferred
- **Certification prep:** ETCP exam simulation, standards compliance drills
  - **Status:** Deferred
- **Goal:** Not applicable (mastery is ongoing, not a fixed completion point)

---

## Pedagogical Adaptation Framework

### Form 1 Scaling Analysis

| Aspect | Level 1 | Level 2 | Level 3 | Level 4+ |
|--------|---------|---------|---------|----------|
| **Structure** | 40×5min lessons | 20×10min lessons | 10×20min + case studies | Mentorship-based |
| **Quiz complexity** | 3–4 binary scenarios | 8–12 multi-choice | Diagnostic reasoning | Real decisions |
| **Visual scaffolding** | High (8 diagrams) | Very high (system diagrams) | Essential (architecture diagrams) | Not applicable |
| **Scaling verdict** | ✓ Complete | ✓ With modifications | ⚠️ Limited | ✗ No |
| **Recommendation** | No changes | Increase depth, add scenario chains | Redesign for depth; add case studies | Shift to mentorship |

**Verdict:** Form 1 designed for breadth; scales poorly to depth. Needs architectural redesign past Level 2.

---

### Form 2 Scaling Analysis

| Aspect | Level 1 | Level 2 | Level 3 | Level 4+ |
|--------|---------|---------|---------|----------|
| **Skill type** | N/A | Atomic (cable coil) | Integrated workflows | Leadership/judgment |
| **Scenario complexity** | N/A | Single skill, binary safety | Multi-step workflows, diagnosis | Team coordination, real-time judgment |
| **Safe-failure cost** | N/A | Local (this cable tangles) | System-wide (rig won't fly) | Cascading (crew safety) |
| **Scaling verdict** | ✓ For Level 2+ | ✓ Designed for it | ✓ Yes, with evolution | ✓ Partly |
| **Recommendation** | Not applicable | Build missing atoms | Build integrated workflows | Evolve to multiplayer scenarios |

**Verdict:** Form 2 designed for embodied learning; scales well to Level 3, partially to Level 4, cannot replace real experience at Level 5.

---

### Form 3 Scaling Analysis

| Aspect | Level 1 | Level 2 | Level 3 | Level 4+ |
|--------|---------|---------|---------|----------|
| **Knowledge type** | N/A | Conceptual + procedural | Deep + judgment | Strategic + experiential |
| **Quiz design** | N/A | Knowledge recall (multiple-choice) | Diagnostic reasoning | Real decisions |
| **Content type** | N/A | "How systems work" | "How to troubleshoot" + "How to transition" | "How to lead" (not achievable via course) |
| **Scaling verdict** | ✓ As Level 1 foundation | ✓ Already deployed | ⚠️ Partial | ⚠️ Limited |
| **Recommendation** | (Different form) | No changes needed | Redesign for career transition + diagnostic scenarios | Build case-study collection instead |

**Verdict:** Form 3 designed for conceptual breadth + depth; scales partially to Level 3, limited to Level 4, cannot teach mastery.

---

## Version Management Strategy

### Semantic Versioning Convention

All three forms use semantic versioning: **MAJOR.MINOR.PATCH**

- **MAJOR:** Significant pedagogical redesign or architectural change
  - Example: Form 1 v2.0 (moving from module-based to micro-module structure)
  - Changes: quiz structure, lesson length, progression model
  
- **MINOR:** Content addition or refinement without structural change
  - Example: Form 1 v1.1 (added visual diagrams to existing structure)
  - Changes: new diagrams, sources, scenario tweaks
  
- **PATCH:** Bug fixes, small clarifications, typo corrections
  - Example: Form 1 v1.0.1 (fixed quiz logic error in Module 5)
  - Changes: code fixes, wording clarity

### Release Naming

**Format:** `{form}-{audience}-v{version}-{date}.{ext}`

Examples:
- `stagehand-fundamentals-ground-hands-v2.0-20260817.html`
- `pathway-lighting-01-support-v1.0-20260816.html`
- `pathway-video-02-led-video-systems-v1.0-20260816.html`
- `scenes-lighting-hand-truck-to-trim-v0.1-alpha-20260722.zip`

### Archive Structure

```
courses/
├── stagehand-fundamentals.html                    (current live)
├── pathway-lighting-01-support.html               (current live)
└── _archived/
    ├── stagehand-fundamentals-v2.0-20260817.html (previous release)
    ├── stagehand-fundamentals-v1.1-20260816.html (earlier)
    ├── stagehand-fundamentals-v1.0-20260815.html (earliest)
    ├── module-1-welcome-to-event-world.html      (original structure)
    └── ... (10 original module files)

companies/crew-blueprint/
├── 12_learning_landscape_registry.md              (this document)
├── scenes/
│   ├── 00_experience_architecture.md
│   ├── lighting-hand-truck-to-trim.md
│   └── scenarios-v0.1-alpha-20260722/
│       ├── index.html
│       ├── The-Shop-Floor/
│       ├── Lighting-Hand-Truck-to-Trim/
│       └── ...
└── _sources/
    ├── research/12-13A/
    │   ├── Lighting-Production-Flow-Research-Packet.md
    │   ├── Lighting-Production-Flow-Rough-Draft-Curriculum.md
    │   ├── LED-Video-Systems-Research-Packet.md
    │   └── ...
    └── 09_content_inventory.md (Stagehand Fundamentals source)
```

### Update Log Template

Every version release includes:
- **Date:** YYYY-MM-DD
- **What changed:** Specific content/structure modifications
- **Why:** Pedagogical rationale or learner feedback
- **Evidence:** Any retention metrics, learner feedback, effectiveness data
- **Next:** What's planned for the next version

**Example:**
```
v1.1 (2026-08-16)
- Added visual diagrams (8 SVGs) to Stagehand Fundamentals modules 4, 5, 7, 8, 9
- Why: Dual-coding theory (visual + text reduces cognitive load ~26% improvement over text-only)
- Evidence: Research citations (research/00B); owner practitioner review
- Next: v1.2 will add troubleshooting case studies for Level 3 adaptation
```

---

## Development Roadmap

### Immediate Next Steps (2–4 weeks)

1. **Form 1:** No changes (complete & live)
2. **Form 2:** Begin Level 2 VR atom queue
   - Start: Cable termination (2–3 weeks)
   - Goal: Have 2–3 additional atoms ready by end of Q3
3. **Form 3:** Fix Course 2 career-transition gap
   - Lighting & Video Course 2 redesign: add career-transition content + troubleshooting case studies
   - Duration: 2–3 weeks per course

### Medium-term (4–8 weeks)

1. **Form 3:** Build remaining Level 2 Course 1s (Audio, Staging, Backline already live; no new work)
2. **Form 3:** Extend to Level 3 (remaining department Course 2s)
   - Audio Course 2: Live Sound Production
   - Staging Course 2: Deck & Modular Rigging
   - Backline Course 2: Backline Support Mastery
   - Duration: 3–4 weeks per course (research exists)
3. **Form 2:** Integrate multiple Level 2 atoms into workflows
   - First workflow: Full Lighting Load-in (cable → rig → hang → test → strike)
   - Duration: 3–4 weeks per workflow
4. **Mentorship system:** Design + pilot real apprenticeship model
   - Not a course; structured mentoring with benchmarks
   - Duration: 2–3 weeks design + 4–6 weeks pilot

### Long-term (8+ weeks)

1. **Form 3:** Build Level 4 (Lead/Crew Chief)
   - Source: Predictive Hazard Recognition (research/06) + case-study collection
   - New container: case-study database + decision-simulation scenarios (not traditional course)
   - Duration: 4–6 weeks design + 6–8 weeks content build
2. **Form 2:** Level 4 evolution
   - Multi-player scenarios (crew coordination, communication)
   - Consequence visibility beyond immediate task (crew safety impact)
   - Duration: 6–8 weeks
3. **Certification alignment:** ETCP, IATSE, OSHA audit
   - Identify where courses already align with standards
   - Plan certification-prep content (exam simulation, standards compliance drills)
   - Duration: 3–4 weeks audit + ongoing integration
4. **Master practitioner pathway:** Formalize advanced learner mentoring
   - Connect intermediate learners with experienced practitioners
   - Benchmark milestones (competency checkpoints)
   - Duration: 4–6 weeks to design + launch

---

## References & Linked Documents

- **Pedagogical grounding:** research/00B-stagehand-fundamentals-sourcing-brief.md, research/05-skill-sim-research.md
- **Content sources:** research/12-19 (Research Packets + Rough Draft Curricula), research/06 (Predictive Hazard Recognition)
- **Experience architecture:** companies/crew-blueprint/scenes/00_experience_architecture.md, companies/crew-blueprint/scenes/lighting-hand-truck-to-trim.md
- **Content inventory:** companies/crew-blueprint/09_content_inventory.md (Stagehand Fundamentals source)
- **Progression research queue:** companies/crew-blueprint/11_department_progression_research_queue.md
- **Roadmap tracking:** roadmap.json (work items cb-4 through cb-8)

---

**Document status:** Initial version (2026-08-17)
**Maintainer:** Crew Blueprint content/learning team
**Next review:** 2026-09-01 (after 2 weeks of real-world deployment data)
