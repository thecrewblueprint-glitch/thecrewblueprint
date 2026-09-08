# Crew Blueprint Ecosystem Relationship Map

This is the human-readable companion to `research/ecosystem/relationship-map.json`.

## Direct map

```text
                         ┌──────────────────────┐
                         │ Deadhang Labor LLC   │
                         │ owner / parent       │
                         └──────────┬───────────┘
                                    │ ownership only
                                    │ minimal governance metadata
                                    ▼
                         ┌──────────────────────┐
                         │  The Crew Blueprint  │
                         │ learner education    │
                         └──────┬──────┬────────┘
                                │      │
                  link only     │      │ learner-domain intelligence
                  no data back  │      │
                                ▼      ▼
                    ┌────────────────┐   ┌──────────────────────┐
                    │Production Atlas│   │      Roadmapdev      │
                    │jobs / hiring   │   │ intelligence engine  │
                    └────────────────┘   └──────────┬───────────┘
                                                   │
                                                   │ admissible learner
                                                   │ research only
                                                   └───────────────┐
                                                                   ▼
                         ┌──────────────────────┐   accepted state / governance
                         │    50yearroadmap     │◄──────────────────────────────
                         │ governance / state   │
                         └──────────┬───────────┘
                                    │ governs
                                    └──────────────► The Crew Blueprint
```

## Meaning of each edge

### Deadhang Labor LLC → Crew Blueprint

**Ownership / parent relationship only.** Deadhang Labor LLC owns The Crew Blueprint and may provide owner-level product direction and the minimal legal/governance metadata needed to represent that ownership.

That ownership edge does **not** create a data pipeline. Deadhang financials, pricing, margins, procurement, vendors, clients, insurance strategy, market strategy, sourcing methods, operating intelligence, or `marketstrategy` research do not flow into Crew Blueprint curriculum, research evidence, learner pathways, assessments, or public learner content.

### Crew Blueprint → Production Atlas

**Human navigation only.** Crew Blueprint may send a learner to Production Atlas to look for jobs or hiring information.

Production Atlas does **not** feed employer, vacancy, pay, market, demand, labor-route, worker-review, or other employment-intelligence data back into Crew Blueprint curriculum, assessments, course recommendations, or learner-facing claims.

### 50yearroadmap ↔ Crew Blueprint

50yearroadmap governs ecosystem authority, repository relationships, change control, and accepted-state continuity. Crew Blueprint reports accepted/verified state back to 50yearroadmap for continuity and provenance.

### Crew Blueprint ↔ Roadmapdev

Crew Blueprint may send admitted learner-domain state to Roadmapdev for curriculum/evidence analysis.

Roadmapdev may return only learner-domain research that passes Crew Blueprint's source-admission firewall, including appropriate regulatory, OSHA, recognized consensus-standard, manufacturer, technical, credential-body, and legitimate educational evidence.

Roadmapdev may **not** return Production Atlas hiring/market intelligence, Deadhang business intelligence, `marketstrategy` procurement research, financial/pricing/client/vendor/insurance strategy, or other commercial intelligence into Crew Blueprint.

## Explicit non-edges

```text
marketstrategy      -X->  The Crew Blueprint
Supabase Roadmap    -X->  The Crew Blueprint   (no direct content/source edge)
```

Supabase may exist behind the governed ecosystem synchronization architecture, but it is not a direct Crew Blueprint content source or outward product relationship.

## Source rule

Crew Blueprint curriculum is built from legitimate learner/technical evidence. The primary admissible source families are:

- OSHA and other official regulatory material;
- statutes, regulations, and official agency guidance;
- recognized consensus standards, including applicable ANSI material;
- manufacturer manuals and technical documentation;
- credential-body guidance;
- legitimate technical and educational references;
- clearly labeled practitioner knowledge when appropriate and when stronger authority is unavailable.

The public learner experience can point outward to Production Atlas. It does not import Production Atlas or Deadhang commercial data back into the curriculum.
