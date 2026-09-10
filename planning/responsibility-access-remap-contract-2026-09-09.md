# Crew Blueprint Responsibility / Access Remap Contract

**Date:** 2026-09-09  
**Parent doctrine:** Issue #78  
**Implementation issue:** Issue #79  
**Status:** planning/data contract; no learner-facing paywall or course-body rewrite authorized by this file

## Purpose

Convert the existing V2/V4/clean-sheet curriculum architecture into a responsibility-based model that cleanly supports the intended business model:

- **ORIENT — free and build to completion**
- **SUPPORT — free and build to completion**
- **OPERATE — future-paid classification; locked / in development**
- **DEEPEN_LEAD — future-paid classification; locked / in development**

The responsibility boundary is not based on course count, generic difficulty, or job title. It is based on the level of technical responsibility the learning prepares the worker to carry.

## Owner-selected delivery model — 2026-09-10

This contract now has an explicit delivery target.

### Free tier — build it out

The current product should fully develop the approved **ORIENT + SUPPORT** learner experience rather than leaving the free side as a small teaser.

The free product should include, as applicable after normal content/evidence/safety review:

- the complete beginner foundation;
- the 18 Field Skills library at appropriate SUPPORT scope;
- department orientation and support-level learning for lighting, audio, video/LED/AV, staging/scenic, backline/props/wardrobe, shop/warehouse/logistics, and other supported lanes;
- free hazard recognition, stop-work, escalation, and authorization-boundary material for controlled specialties;
- Context Labs at ORIENT/SUPPORT depth;
- public career/reference material that helps the learner understand next steps without implying qualification or employment outcomes;
- free assessments/knowledge checks where approved;
- clear progression into the future advanced boundary.

Approved free learning should remain usable signed out. Creating a Clerk account is optional for access to free content but may add persistent progress, assessment history, saved pathways, and account state.

### Future advanced tier — locked development state

OPERATE and DEEPEN_LEAD remain useful curriculum classifications, but **they are not an active commercial product yet**.

Current runtime/publication state:

- public status: **COMING SOON / IN DEVELOPMENT**;
- Clerk sign-up and sign-in: **allowed**;
- authenticated advanced status shell: **allowed**;
- pricing: **disabled / absent**;
- checkout sessions: **disabled / absent**;
- subscriptions/billing products: **disabled / absent**;
- Stripe/payment-provider coupling: **not authorized**;
- paid entitlement sales: **not active**;
- protected advanced lesson delivery: **not active**.

A signed-out visitor may see only a generic Advanced/Coming Soon entry point and sign-in/sign-up controls. A signed-in learner may enter the authenticated Advanced status area, but that area must remain a development/placeholder surface until a later owner decision activates commercial mechanics.

### Protected advanced content rule

Advanced content may be drafted ahead of commercialization **only if it can remain genuinely non-public**.

Because the current Crew Blueprint repository and GitHub Pages output are public:

- do **not** commit protected OPERATE/DEEPEN lesson bodies to the public repository merely because the UI hides them;
- do **not** place protected bodies in JavaScript bundles, static JSON, HTML, source maps, generated pages, or other publicly retrievable assets;
- the public repository may contain IDs, titles, pathway metadata, responsibility/access classifications, publication states, prerequisites, and generic Coming Soon descriptions;
- substantive future-paid lesson bodies must remain in an internal/private source or secure backend until protected server-side delivery exists;
- Clerk authentication alone is identity, not proof of a paid entitlement;
- when commercialization is activated later, application-layer entitlement must be checked before protected bodies are delivered.

This allows the curriculum to be authored and reviewed ahead of launch without pretending that a public static site can secure paid material.

## Governing learner progression

```text
ZERO KNOWLEDGE
  ↓
INDUSTRY ORIENTATION
  ↓
ENTRY-LEVEL PRODUCTION / STAGEHAND READINESS
  ↓
DEPARTMENT AWARENESS
  ↓
DEPARTMENT SUPPORT KNOWLEDGE
  ↓
TECHNICIAN PATHWAY
  ↓
DEEP TECHNICAL / SPECIALIST KNOWLEDGE
  ↓
TECHNICAL LEADERSHIP WHERE RELEVANT
```

A true beginner should first learn how the production environment works before being expected to select or understand a technical lane.

## Canonical boundary

### ORIENT — FREE

Prepares the learner to understand:

- show-site and warehouse environments;
- load-in / show / changeover / load-out flow;
- departments and crew roles;
- terminology;
- chain of command;
- equipment at recognition level;
- interdepartment dependencies;
- hazard recognition;
- stop-work and escalation behavior;
- role and authorization boundaries.

### SUPPORT — FREE

Prepares the learner to perform appropriate production-labor tasks under direction without owning the technical system or result.

Support may include real physical work such as:

- moving and staging equipment;
- cable deployment and handling;
- directed assembly/strike;
- making clearly instructed/labeled connections where appropriate;
- placing equipment according to direction;
- warehouse receiving/prep/returns;
- preserving labels, patch state, equipment position, and other workers' work;
- recognizing a problem and escalating instead of improvising.

The fact that a worker touches, connects, builds, or moves equipment does **not** by itself make the knowledge paid.

### OPERATE — FUTURE PAID / LOCKED

Begins when the learner is being prepared to carry department-specific technical responsibility beyond following an instructed plan.

Typical signals:

- interpreting or determining configuration;
- understanding system state well enough to make technical decisions;
- deriving or owning patch/routing/configuration choices;
- operating an assigned technical subsystem;
- diagnosing faults;
- verifying technical correctness;
- selecting among technically meaningful options;
- restoring/adapting a system within role boundaries;
- owning a department-specific result.

### DEEPEN_LEAD — FUTURE PAID / LOCKED

Prepares the learner for:

- deeper architecture;
- system integration;
- specialist reasoning;
- advanced troubleshooting;
- technical planning;
- commissioning/verification depth;
- advanced department responsibility;
- technical leadership.

Technical depth must not force a learner into management. Specialist depth and leadership are separate possible outcomes inside the paid layer.

## Hard rules

1. **Safety awareness cannot be paywalled.** Hazard recognition, stop-work, escalation, and authorization boundaries must be available at the level where the learner may encounter the hazard.
2. **Education is not field qualification.** Course completion does not independently establish practical competency, field experience, certification/licensure, qualified-person status, employer authorization, or readiness to lead.
3. **Job titles are destinations, not architecture.** A2, L2, V2, LED Tech, Staging Tech, etc. are learner-facing role targets. Competency/responsibility determines access classification.
4. **SUPPORT can include equipment interaction.** Do not classify a task as OPERATE merely because the learner physically handles or connects equipment.
5. **The future-paid responsibility boundary begins at technical judgment/ownership.** The decisive question is whether the learner is following/supporting an instructed technical plan or being taught to understand, diagnose, verify, configure, or own the technical result. This classification does not activate pricing, checkout, billing, or protected delivery.
6. **Controlled specialties need stronger gates.** Rigging, production power/electrical, lasers/effects, automation, and similar areas require explicit qualification/authority metadata. Paid access never means authorized practice.
7. **Management is not a first-class curriculum destination unless tied directly to technical production work.** Preserve technical leadership, coordination, advancing, documentation, handoffs, work allocation, verification, and escalation. Demote office/business administration.

## Department stress-test result

| Department / family | Free ORIENT / SUPPORT | Paid OPERATE / DEEPEN | Result |
|---|---|---|---|
| General stagehand / production labor | production flow, departments, terminology, communication, cases, carts, cable handling, dock/truck flow, directed support | generally transitions into a department-specific technician lane rather than a universal stagehand paid tier | PASS |
| Lighting | fixture/data/power recognition, workflow, directed handling/hanging/connection/support | addressing/configuration, control state, console/operator responsibilities, diagnosis, verification, architecture | PASS — split current core |
| Audio | equipment/stagebox/mic/comms recognition, cable and mic placement, directed/labeled support patching, state preservation | derived/owned patch, signal routing, A2-type responsibility, technician troubleshooting, system verification | PASS — split current core |
| Video / LED | tile/processor/signal/playback recognition, build/strike and cabling under direction | processor configuration, mapping, scaling/routing, playback/switching operation, fault diagnosis, architecture | PASS — split current core |
| Staging / structures / scenic | components, workflow, directed assembly/material handling, hazards | system/drawing interpretation, technician-level assembly responsibility, inspection/verification, troubleshooting decisions | PASS with stronger practical-risk metadata |
| Rigging | awareness, exclusion zones, boundaries, communication, bounded support only | specialist/qualified-role knowledge, deeper systems/lead study | PASS with SPECIALIST gate |
| Production power / electrical | awareness, hazards, boundaries, stop/escalate behavior | specialist system knowledge and responsibility subject to authority/qualification boundaries | PASS with SPECIALIST gate |
| Shop / warehouse / logistics | equipment lifecycle, receiving, inventory handling, traffic flow, truck staging, returns, routine prep, safety awareness | technical QC, diagnostic testing, repair/service decisions, department-specific technical prep/configuration | PASS — split current core |
| Backline / props / wardrobe | discipline awareness, handling, directed placement/reset/changeover | discipline-specific technician configuration/maintenance/show-running responsibility | PASS — split sublanes |
| Production/stage/venue management | retain only technical coordination/leadership content | no equal first-class management ladder | RECLASSIFY / DEMOTE |

## Existing 143-map conversion rules

The existing 143 canonical IDs remain lineage keys. Historical mappings are preserved.

Do **not** assign free/paid access by whole legacy groups where the group spans multiple responsibility states.

Initial treatment:

- `common-communication` → ORIENT/SUPPORT; rewrite presentation toward floor-level communication and system awareness.
- `stagehand-foundation` → ORIENT/SUPPORT.
- `stagehand-field-library` → SUPPORT by default, with per-skill safety/authority review.
- `stagehand-logistics-context` → ORIENT/SUPPORT.
- `stagehand-first-five` → ORIENT/SUPPORT.
- `lighting-entry` → ORIENT/SUPPORT.
- `lighting-core` → split across SUPPORT / OPERATE / DEEPEN.
- `lighting-advanced` → mostly DEEPEN_LEAD; remove business/admin content from primary technical path.
- `audio-entry` → ORIENT/SUPPORT.
- `audio-core` → split across SUPPORT / OPERATE / DEEPEN.
- `audio-advanced` → OPERATE / DEEPEN_LEAD.
- `video-entry` → ORIENT/SUPPORT.
- `video-core` → split across SUPPORT / OPERATE / DEEPEN.
- `video-advanced` → OPERATE / DEEPEN_LEAD.
- `staging-entry` → ORIENT/SUPPORT.
- `staging-core` → split SUPPORT / OPERATE / DEEPEN with practical-risk metadata.
- `staging-advanced` → OPERATE / DEEPEN_LEAD.
- `rigging-entry-awareness` → free awareness/support.
- `rigging-systems-literacy` → specialist paid/controlled review; extract required free safety awareness.
- `rigging-advanced` → DEEPEN_LEAD specialist gate.
- `power-entry-awareness` → ORIENT free.
- `power-core-literacy` → split awareness/support from specialist technical depth.
- `power-specialist-awareness` → preserve required free hazard/boundary awareness; gate operational depth.
- `power-advanced` → DEEPEN_LEAD specialist gate.
- `shop-overview` → ORIENT/SUPPORT free.
- `shop-core` → split ordinary warehouse lifecycle SUPPORT from technical QC/repair OPERATE.
- `production-management-*` → demote/split; salvage technical-production leadership pieces only.
- `career-*` → career/resource layer, not the technician paywall backbone.
- specialist-awareness material → awareness/boundaries free where needed; operation never inferred from awareness.
- `sector-context-labs` → contextual overlay; access follows the responsibility level of the underlying knowledge.

## Required successor node schema

Every successor mapping record must support at least:

```text
canonical_id
source_lineage
responsibility_state
access_class
primary_lane
secondary_lanes
role_family_targets
prerequisite_knowledge
experience_assumption
field_practice_required
practical_evaluation_required
credential_claim_level
technical_decision_authority_taught
safety_awareness_required_before_paywall
qualification_or_authorization_boundary
employer_demand_evidence_state
instructional_authority_state
assessment_state
publication_state
notes
```

Allowed top-level values should include:

```text
responsibility_state = ORIENT | SUPPORT | OPERATE | DEEPEN_LEAD
access_class = FREE | PAID | SPECIALIST_REVIEW | REFERENCE

Until commercial activation, `PAID` means **future-paid classification only**. It does not mean purchasable, published, entitled, or deliverable.
```

A historical V2 identity may contribute to more than one learner-facing module if its content spans the free/paid boundary. Preserve the original identity as lineage; do not create duplicate source truth.

## Employer-demand join rule

Roadmapdev labor-market evidence already distinguishes general-execution roles from department-execution/specialist role families and records recurring competency signals. Use that as **demand evidence**, not as technical or safety authority.

Target join:

```text
employer / observed role title
  ↓
normalized role family
  ↓
recurring competency-demand signals
  ↓
Crew Blueprint canonical competencies
  ↓
learner pathway + assessment
```

The system must distinguish:

- observed employer demand;
- curriculum definition;
- instructional authority;
- assessed knowledge claim;
- practical/field qualification.

No one layer may silently substitute for another.

## V4 foundation implications

### Crew Ready
Keep as the strongest ORIENT/SUPPORT foundation surface. Continue naturalizing language and preserving practical first-call relevance.

### Systems Thinking
Current mapping is too broad for the foundation presentation. Keep the legitimate shared competency, but narrow the free learner outcome to:

> Understand how your task connects to the rest of the show, preserve the work around you, notice dependencies, communicate useful information, and know when to stop and ask.

Department-specific signal/control/network depth remains in the owning lane and moves into OPERATE/DEEPEN as appropriate.

### Shop / Logistics
Keep foundation lifecycle/workflow/safety content free. Split deeper QC/repair/diagnostic content into OPERATE where it teaches technical ownership.

### Department Explorer
Treat as a transition and career-direction surface, not a pass/fail taxonomy course. It should expose what departments do, what hand-level support looks like, and where the future advanced responsibility boundary begins.

## Required deliverables before learner-facing implementation

1. Successor 143-ID responsibility/access crosswalk.
2. Zero missing canonical IDs.
3. Zero unexplained duplicate primary dispositions.
4. Explicit list of historical IDs that span the free/paid boundary and need learner-facing splitting.
5. Management/admin demotion/salvage list.
6. Specialist-gate list.
7. V4 foundation remap.
8. Assessment claim map.
9. Employer-demand join plan.
10. Conflict register for #61, #66, #71 and stale repo docs.

## Acceptance gate

No pricing, checkout, billing-provider coupling, or protected advanced-content delivery should be merged until:

- every canonical V2 identity is accounted for;
- the free beginner path has no hidden paid dependency;
- safety awareness required by free learners remains free;
- paid content corresponds to real technician/specialist responsibility;
- job-title navigation is separated from competency architecture;
- management/business content is no longer an equal curriculum backbone;
- specialist authority/qualification boundaries are explicit;
- the mapping supports Clerk/app entitlements without encoding Stripe product IDs into curriculum state.

## Related architecture

- #78 — target product doctrine
- #79 — responsibility/access remap implementation issue
- #61 — V2/V4/clean-sheet implementation guide to reconcile
- #66 — Clerk/account architecture requiring future-compatible entitlement correction
- #71 — V4 UI/UX debt; do not over-polish placeholder paid-tier UI before the real entitlement model exists
