# Crew Blueprint Ecosystem Relationship Map

**Status:** canonical relationship documentation  
**Root system:** The Crew Blueprint  
**Purpose:** define which systems Crew Blueprint is allowed to relate to, what may cross each relationship, and what must remain separate.

## Direct relationship map

```text
Deadhang Labor LLC
  │
  │ owns / directs product at owner-governance level
  │ no commercial-data feed
  ▼
The Crew Blueprint
  ├── links outward to ──► Production Atlas
  │                        (separate employer / hiring / market product)
  │
  ├── reports accepted state to / is governed by ──► 50yearroadmap
  │
  └── exchanges admitted learner-domain research/state with ──► Roadmapdev

No direct Crew Blueprint relationship:
  ✕ marketstrategy
  ✕ Deadhang commercial operating data
  ✕ Production Atlas datasets as curriculum evidence
  ✕ Supabase as a content/source authority
```

## System roles

### Deadhang Labor LLC

Deadhang Labor LLC is the owner/parent business of The Crew Blueprint.

Allowed across this edge:

- ownership identity;
- owner-authorized product direction;
- minimal legal/governance metadata required to represent ownership.

Not allowed into Crew Blueprint learner content or curriculum research:

- pricing or margins;
- financial data;
- procurement/vendor/client strategy;
- insurance strategy;
- market strategy;
- sourcing methods;
- operating intelligence;
- private commercial conclusions.

Ownership does **not** create a business-intelligence data feed.

### The Crew Blueprint

Owns:

- learner-facing curriculum;
- durable technical/safety education;
- assessments and progress semantics;
- technical evidence lineage;
- learner pathways;
- publication state.

The active research-led curriculum may supersede earlier presentation/course architecture. Older course bodies remain preserved as historical/reference material rather than being forced to stay identical to the active successor curriculum.

### Production Atlas

Production Atlas is the separate public employer/hiring/market intelligence product.

Crew Blueprint may link a learner to Atlas when they want current work or hiring information.

That link does **not** authorize Crew Blueprint to import or teach from Atlas datasets.

Atlas owns:

- employer profiles;
- official hiring/application/contact routes;
- current events and public opportunity context;
- labor organizations and public labor routes;
- market geography;
- event/employer/labor relationships where specifically verified;
- source freshness and public evidence state.

### Roadmapdev

Roadmapdev is the private research/reconciliation/intelligence plane.

It may compare the entire ecosystem internally, but Crew Blueprint may only admit Roadmapdev material that is explicitly learner-domain educational research and already satisfies Crew Blueprint's source-admission rules.

Roadmapdev material about Deadhang business strategy, Production Atlas hiring/market intelligence, pricing, procurement, clients, vendors, insurance, margins, or competitive strategy does not enter curriculum.

### 50yearroadmap

50yearroadmap is the governance/control plane.

It owns:

- relationship rules;
- change-control authority;
- accepted-state continuity;
- governance metadata and cross-repository boundaries.

## Allowed data flow

### Crew Blueprint → Production Atlas

Navigation only:

- stable URL;
- stable public learning-path identifier when useful;
- short public purpose label.

Do not send learner progress, assessment state, personal records, or course bodies.

### Production Atlas → Crew Blueprint

Navigation only:

- stable Atlas URL;
- public route/role identifier when useful;
- short navigation label.

Do not import employer, vacancy, hiring, pay, market, labor-route, worker-review, or opportunity datasets into curriculum.

### Crew Blueprint ↔ Roadmapdev

Allowed:

- curriculum-state analysis;
- evidence-gap analysis;
- course completeness analysis;
- learner-domain technical/safety research grounded in admissible sources;
- provenance and review-state analysis.

Not allowed into Crew Blueprint:

- Deadhang commercial intelligence;
- marketstrategy research;
- Production Atlas hiring/market payloads;
- client/vendor/pricing/insurance/procurement strategy;
- private competitive intelligence.

### Crew Blueprint ↔ 50yearroadmap

Allowed:

- governance;
- accepted-state reporting;
- provenance;
- source/authority relationship metadata;
- closeout/current-state continuity.

## Curriculum source admission

Admissible curriculum evidence includes:

- OSHA and official regulatory material;
- statutes, regulations, and official agency guidance;
- applicable consensus standards, including relevant ANSI/ESTA material, without reproducing copyrighted standards beyond permitted limits;
- manufacturer manuals and technical documentation;
- credential-body guidance;
- legitimate technical and educational references;
- clearly labeled practitioner knowledge when appropriate.

Not admissible as curriculum evidence:

- Production Atlas hiring/employer/pay/market/demand/labor-route/worker-review intelligence;
- Deadhang private business intelligence;
- marketstrategy research;
- mixed research packages that have not been split before admission.

## Product handoff

The intended public user journey is:

```text
learn in Crew Blueprint
      ↓
open Production Atlas for employer/hiring intelligence
      ↓
identify a real employer or labor route
      ↓
return to Crew Blueprint when a learning need is identified
```

This is a navigation relationship, not a shared public dataset.
