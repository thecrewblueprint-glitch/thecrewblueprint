# Crew Blueprint Ecosystem Relationship Map

**Status:** canonical relationship documentation  
**Root system:** The Crew Blueprint  
**Purpose:** define how Crew Blueprint, Production Atlas, Roadmapdev, 50yearroadmap and Deadhang relate without collapsing their data domains.

## Direct map

```text
Deadhang Labor LLC
  │
  │ owns / directs product
  │ ownership metadata only — no commercial-data feed
  ▼
The Crew Blueprint ───── navigation ─────► Production Atlas
  │                                         │
  │ curriculum state                        │ public employment / market evidence
  ▼                                         ▼
Roadmapdev ◄────────────────────────────────┘
  │
  │ filtered return path:
  │ educational evidence + normalized competency-demand signals only
  ▼
The Crew Blueprint

50yearroadmap ◄──── accepted-state / governance ────► The Crew Blueprint
```

## The key bridge

Crew Blueprint is allowed to be shaped by the real job market without becoming a copy of the job market.

The controlling transformation is:

```text
public employment / industry evidence
        ↓
Roadmapdev normalizes recurring competency demand
        ↓
Crew Blueprint decides what deserves curriculum space
        ↓
appropriate instructional evidence supports the lesson
        ↓
learner-facing course
```

Examples of normalized competency-demand signals include communication, equipment stewardship, load-in/load-out logistics, department workflow, system reasoning, documentation, troubleshooting/escalation, shop/QC, leadership and safety/authorization boundaries.

Those signals can answer **what is worth teaching**. They cannot by themselves answer **how a learner should perform a technical task**.

## Deadhang Labor LLC → Crew Blueprint

Deadhang Labor LLC is the owner/parent business.

Allowed across this edge:

- ownership identity;
- owner-authorized product direction;
- minimal legal/governance metadata required to represent ownership.

Not allowed into Crew Blueprint curriculum or learner content:

- pricing or margins;
- financial data;
- procurement/vendor/client strategy;
- insurance strategy;
- marketstrategy research;
- sourcing methods;
- internal operating intelligence.

Ownership does not create a commercial-data feed.

## Crew Blueprint → Production Atlas

This direct public edge is **navigation**.

Crew Blueprint sends a learner to Production Atlas when the learner wants current employers, opportunities, markets, labor organizations, hiring routes or other current work intelligence.

Do not send learner progress, assessment state, personal records or course bodies.

## Production Atlas → Roadmapdev

Roadmapdev may analyze public Atlas employment/market evidence and other public industry evidence to identify recurring role and competency signals.

Raw Atlas payloads stay in the Atlas/Roadmapdev side of the system. They do not become lesson copy.

Examples of data that must not be projected directly into Crew Blueprint lessons:

- employer lists;
- vacancies;
- pay records;
- market rankings;
- current opportunity records;
- labor-route records;
- worker reviews;
- personal data.

## Roadmapdev → Crew Blueprint

Allowed after filtering:

- normalized, non-identifying competency-demand signals;
- curriculum-gap analysis;
- OSHA and regulatory research;
- recognized consensus-standard research;
- manufacturer and technical-documentation research;
- credential-body and legitimate educational research;
- learner-domain decision support and provenance.

Not allowed:

- raw Atlas employment payloads;
- Deadhang business/financial intelligence;
- marketstrategy procurement/access research;
- client/vendor/pricing/insurance/competitive strategy.

Mixed packages must be split before Crew Blueprint admission.

## 50yearroadmap ↔ Crew Blueprint

50yearroadmap governs ecosystem authority, repository relationships, change control and accepted-state continuity. Crew Blueprint reports accepted/verified state back for closeout and provenance.

## Instructional evidence

Once a competency is selected for teaching, course claims should use the appropriate authority for that claim, including as applicable:

- OSHA and official regulatory material;
- statutes/regulations and official agency guidance;
- applicable ANSI/ESTA and other recognized consensus standards within copyright limits;
- manufacturer manuals and technical documentation;
- credential-body guidance;
- legitimate technical and educational references;
- clearly labeled practitioner knowledge where appropriate.

Employer demand is never a substitute for technical or safety authority.

## Successor curriculum

The active Crew Blueprint may use a materially new curriculum architecture. Frozen V2, clean-sheet, historical and archived builds remain preserved as reference/evidence states. They do not have to be rewritten to match the successor curriculum.

## Public user journey

```text
learn in Crew Blueprint
      ↓
use Production Atlas to understand real work and hiring routes
      ↓
identify the role or skill direction that matters
      ↓
return to Crew Blueprint for the relevant learning path
```

The products work together through navigation and stable relationships, not by collapsing their canonical datasets.
