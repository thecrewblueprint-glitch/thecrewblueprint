# MDQ-130–135 — Learning System, Assessment, Visual, Citation and Freshness Architecture

**Prepared:** 2026-08-31  
**Status:** Requirements-ready learning/evidence architecture; reconciles with P0 and ECQ rather than duplicating release-validation work  
**Depends on:** MDQ-001/002/003, Stagehand Fundamentals architecture, Expanded Curriculum Build Register, ECQ-01–17, PROJECT-E02/E03, current WCAG/learning-analytics standards  
**Purpose:** Define the reusable instructional/evidence system that future course structures can draw from without locking the final learner-facing course/catalog architecture prematurely.

---

## 1. Controlling principle

The final information architecture is deferred, but the **semantics of good instructional content do not need to be deferred**.

Every content unit should be able to answer:

- What should the learner understand or decide?
- What evidence supports the claim?
- What is Crew Blueprint framing vs external fact?
- What authority boundary applies?
- What visual/demo would materially improve understanding?
- What kind of assessment actually tests the objective?
- Does the skill require observed practice?
- What content/version/source did the learner see?
- What would trigger review or replacement?

This layer should survive future changes in course format.

---

# MDQ-130 — Course / instructional-unit architecture standard

## Recommended reusable unit anatomy

A learner-facing instructional unit should support these semantic roles where relevant:

1. **Context / why it matters**
2. **Objective / decision or capability target**
3. **Conceptual explanation / mental model**
4. **Recognition / vocabulary / components**
5. **Visual or demonstration where useful**
6. **Workflow / reasoning sequence where safe and appropriate**
7. **Common failure / misunderstanding patterns**
8. **Stop / escalate / authority boundary**
9. **Scenario / knowledge check**
10. **Practice or evidence gate where appropriate**
11. **Sources / version / scope**
12. **Connection to adjacent competencies / career path**

Not every unit needs every element. Do not manufacture steps or visuals just to fill a template.

## Current UI reference

Stagehand Fundamentals remains the accepted visual/interaction reference because it provides compact navigation, clear current lesson context, objective/rule framing, visual sections, explanations, knowledge checks and progression.

That is a **presentation reference**, not a decision that every future topic becomes one identical course.

## Content IDs

Maintain stable IDs beneath presentation:

- domain;
- competency;
- content unit;
- claim;
- question/rationale;
- visual;
- source;
- practice requirement;
- version/release state.

This allows future regrouping without breaking evidence history.

**State:** `requirements_ready`.

---

# MDQ-131 — Assessment taxonomy

## Assessment types must match the objective

### Recognition

Tests identification/classification, not performance.

Examples of objective types:

- recognize equipment family;
- identify owner/department;
- distinguish hazard/boundary categories.

### Concept / explanation

Tests whether the learner can explain relationships or mental models.

### Decision / scenario

Tests judgment under realistic constraints:

- continue;
- ask;
- stop/escalate;
- identify responsible role;
- choose correct information source.

### Sequence / workflow reasoning

Tests ordering or dependency where an evidence-backed transferable sequence exists and is safe to teach.

### Troubleshooting reasoning

Tests fault isolation / information gathering without necessarily asking the learner to physically manipulate a live system.

### Documentation / portfolio

Tests ability to interpret/create/review bounded paperwork or design artifacts.

### Observed practice

Records physical performance on named equipment/context where appropriate.

### Supervisor / management simulation

Scenario-based assessment of prioritization, delegation, communication and change handling.

### External qualification

Not a Crew Blueprint assessment type. The system may reference or verify externally issued status but must not mimic specialist certification.

## Core rule

Passing a knowledge question cannot be rendered as evidence of physical skill, employer authorization or external qualification.

**State:** `requirements_ready`; ECQ-15 remains authoritative for assessment/retention validation.

---

# MDQ-132 — Practical observation design

## When observed practice is appropriate

Use observed practice when the desired evidence is **visible task performance**, not merely knowledge.

Examples may include ordinary bounded field skills such as:

- case/cart movement;
- cable handling;
- organization/reset;
- other low-risk assigned tasks supported by exact evidence and workplace supervision.

Do not convert controlled specialist work into a Crew Blueprint practical merely because it is hands-on.

## Minimum observation record

Where observation is used, record:

- stable skill ID;
- content/version prepared from;
- date/time;
- named equipment/type/context;
- environment/route conditions where material;
- observer identity/role only to the extent legitimately needed;
- result such as `pass`, `rework`, `stop` or equivalent controlled vocabulary;
- comments/evidence as appropriate;
- explicit statement that observation does not establish standing employer authorization.

## Observer qualification

Do not hard-code one universal observer title.

Observation eligibility may depend on:

- skill risk;
- employer/site policy;
- department ownership;
- equipment/model;
- specialist qualification;
- customer workflow.

The future backend should support **observer-requirement metadata** instead of assuming every supervisor can verify every skill.

## Separation of states

`prepared_for_practice` ≠ `observed` ≠ `employer_authorized` ≠ `externally_qualified`.

**State:** `requirements_ready`; ECQ-03 remains the empirical observer-reliability gate.

---

# MDQ-133 — Course visual standard

## Use the visual type that answers the learning problem

### Photo

Best for real equipment recognition, workplace context, before/after state and realistic clutter/scale.

### Labeled diagram

Best for component/system relationships, safe zones, signal flow, information flow and conceptual architecture.

### Sequence panels

Best for bounded ordinary workflows where physical order matters and evidence supports a transferable sequence.

### Video / animation

Best when motion/timing/coordination cannot be understood well from static images.

### Signal-flow / one-line / network diagram

Best for lighting/audio/video/power/control system architecture.

### Plot / plan / map

Best for venue orientation, stage directions, system placement, career progression and documentation literacy.

### Screenshot / UI capture

Use only for product/version-specific software instruction and record software/version/context.

### No visual

Correct when a visual would be decorative, misleading or add cognitive load without improving the objective.

## Safety-critical visual metadata

Every safety-critical or model-specific visual should record:

- `VIS_ID`;
- owner/creator;
- source/license/rights;
- exact equipment/model/context where relevant;
- claims supported;
- reviewer;
- review date;
- alt text / text fallback;
- freshness/replacement trigger;
- whether illustration is conceptual rather than an exact approved procedure.

## AI-generated visuals

May illustrate concepts only after review against source evidence. They must not invent a manufacturer-approved setup, exact hazardous procedure or false technical geometry.

## Accessibility baseline

W3C recommends WCAG 2.2 for current accessibility work. Course visuals therefore need meaningful text alternatives, keyboard-compatible interaction, readable focus/target behavior, non-color-only meaning and accessible authentication/interaction patterns where applicable.

**State:** `requirements_ready`; ECQ-02 remains the original-media/practitioner-release gate.

---

# MDQ-134 — Source / citation UX standard

## Two-layer citation experience

### Learner-facing layer

Keep citations useful without turning every lesson into an academic paper:

- short source panel;
- clear source owner/title/version;
- direct link/reference where rights permit;
- visible label for Crew Blueprint framework or practitioner convention;
- model/jurisdiction caveat where material.

### Evidence/audit layer

MDQ-001 remains authoritative for claim-level lineage:

**CONTENT → SUPPORT_EDGE → SOURCE**

with source and review records independent of the learner-facing presentation.

## Source classes

Learner/content systems should distinguish:

- regulator / law / adopted code;
- consensus standard;
- manufacturer/product documentation;
- professional association / industry primary;
- employer/venue/local practice;
- practitioner evidence;
- secondary/reference evidence;
- Crew Blueprint instructional framework;
- unresolved/conflicting evidence.

## Support quality

Do not imply that a source merely mentioning a topic directly supports a specific claim.

MDQ-001 relationships remain:

- direct;
- partial;
- corroborating;
- context-only;
- framing-only;
- contradicts;
- unresolved.

## Current-version display

Where standards/protocol/software/manual versions matter, expose version/date rather than a timeless organization name.

**State:** `requirements_ready`.

---

# MDQ-135 — Maintenance and freshness policy

## Review triggers beat one universal review interval

Every source/content family should have both:

- a normal review interval; and
- event-driven review triggers.

## Trigger categories

### Regulation / code / standards

Trigger on:

- new edition;
- revision/reaffirmation/withdrawal;
- jurisdictional adoption change;
- regulator interpretation or significant guidance change.

### Manufacturer / product

Trigger on:

- model/manual revision;
- firmware/software change;
- product discontinuation/replacement;
- safety notice/recall;
- changed rating/configuration.

### Protocol / software

Trigger on:

- new protocol/standard edition;
- major software version;
- changed terminology/workflow;
- interoperability/security change.

### Role / career / market

Trigger on:

- major hiring/workflow change;
- credential revision;
- changed eligibility/renewal;
- substantially changed labor/sector practice.

### Visual / media

Trigger on:

- rights/license change;
- source change;
- equipment/version obsolescence;
- accessibility failure;
- practitioner finding that depiction is misleading.

### Practitioner validation

Trigger on:

- repeated field disagreement;
- learner misunderstanding;
- incident/safety concern;
- new equipment/workflow;
- contradictory evidence.

## Supersession model

Never silently overwrite historical evidence.

Track:

- current version;
- superseded version;
- effective dates;
- reason/change class;
- affected claims/questions/visuals;
- whether prior learner records remain historically valid or need a safety/update notice.

## Release urgency classes

Reuse PROJECT-E03 change classes:

- cosmetic/accessibility;
- clarification;
- instructional change;
- technical-source change;
- safety/authority correction.

Safety/authority corrections should be eligible for expedited release rather than waiting for the normal calendar.

**State:** `architecture_ready`; ECQ-17 remains authoritative for operational source/model/rights freshness validation.

---

# 8. Learning-data / backend interoperability implications

Crew Blueprint should define its **own canonical evidence semantics first**.

External interoperability standards may then be mapped where useful.

## Caliper Analytics

1EdTech Caliper Analytics 1.2 provides standardized learning-activity event profiles for analytics across digital resources.

Potentially useful for generic events such as:

- session;
- reading/media;
- assessment;
- feedback;
- tool use;
- search.

However, Crew Blueprint-specific states such as observed practice, employer authorization, external qualification and content-version provenance require domain semantics beyond a generic activity event.

## CLR / portable learner records

1EdTech's Comprehensive Learner Record ecosystem is relevant to future portable competency/achievement records, but should be evaluated only after Crew Blueprint decides exactly which claims it is entitled to make and verify.

## Identity/accessibility

NIST SP 800-63-4 remains a useful current reference for identity/authentication architecture. WCAG 2.2 remains the accessibility baseline already adopted in PROJECT-E02.

No interoperability standard should force the curriculum/evidence model into a weaker semantic shape.

---

# 9. Reconciliation with ECQ

MDQ-130–135 defines the **architecture/requirements**.

ECQ remains the **release-validation program**:

- ECQ-01 practitioner acceptance;
- ECQ-02 original reviewed visuals/video;
- ECQ-03 observation reliability;
- ECQ-04 lead-role review;
- ECQ-05 predictive-hazard validation;
- ECQ-06 event-operations simulation;
- ECQ-07–11 C3/portfolio/jurisdiction gates;
- ECQ-12 production-power field audit;
- ECQ-13 production/coordination sources;
- ECQ-14 BPW C3 decision — now partially resolved by MDQ-080–083 split architecture;
- ECQ-15 assessment/retention validation;
- ECQ-16 learning/authority record model;
- ECQ-17 source/model/rights freshness.

Where MDQ research resolves an architecture question, ECQ should test/validate the result rather than duplicate the research.

---

# 10. Current source ledger

## W3C

- WCAG 2.2: https://www.w3.org/TR/WCAG22/

Current W3C Recommendation for web-content accessibility; W3C advises using WCAG 2.2 to maximize current/future applicability.

## 1EdTech

- Caliper Analytics: https://www.1edtech.org/standards/caliper
- Standards catalog / CLR and analytics ecosystem: https://www.1edtech.org/standards/details

Supports learning-event/interoperability reference architecture; adoption remains optional.

## NIST

- SP 800-63-4 Digital Identity Guidelines: https://csrc.nist.gov/pubs/sp/800/63/4/final

Supports current identity/authentication reference architecture for the future backend.

## Internal canonical architecture

- MDQ-001 matrix schema;
- MDQ-002 backfill method;
- MDQ-003 tier/responsibility/authority model;
- PROJECT-E02 backend/data baseline;
- PROJECT-E03 testing/version/release baseline;
- Expanded Curriculum Research Queue (ECQ).

---

# 11. Research-state decision

- **MDQ-130:** `requirements_ready`.
- **MDQ-131:** `requirements_ready`; empirical validation in ECQ-15.
- **MDQ-132:** `requirements_ready`; reliability validation in ECQ-03.
- **MDQ-133:** `requirements_ready`; release-media gate in ECQ-02.
- **MDQ-134:** `requirements_ready`; implemented through MDQ-001 matrix.
- **MDQ-135:** `architecture_ready`; operational validation in ECQ-17.

## Master-queue consequence

The broad MDQ research waves **000–135 are now structurally researched/mapped enough to move into synthesis, matrixing, initial drafts and primary-human validation**, while unresolved specialist/model/jurisdiction/practitioner questions remain visible rather than being generalized away.