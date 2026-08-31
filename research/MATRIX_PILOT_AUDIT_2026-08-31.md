# The Crew Blueprint — Matrix Pilot Audit

**Prepared:** 2026-08-31  
**Status:** First normalized evidence-matrix audit  
**Pilot scope:** Stagehand Fundamentals, Move a Road Case With a Partner, Lighting Production Flow  
**Data:** `research/matrix/*.jsonl`

---

## 1. What the pilot proved

The MDQ-001 normalized model works when competency relationships are added through MDQ-001A.

The pilot can distinguish:

- learner-facing content from research evidence;
- externally supported claims from Crew Blueprint instructional framing;
- direct/partial/corroborating/context-only support;
- role/authority qualifiers;
- a competency's primary teaching home versus contextual reinforcement;
- observed-practice evidence from employer authorization;
- external qualification gates from internal learning progression.

This is sufficient to scale the matrix without locking the final course architecture.

---

# 2. Immediate quality findings

## FINDING P-01 — Organization/root links are not claim evidence

Current older course bibliographies sometimes use links such as:

- OSHA home page;
- USITT home page;
- ESTA published-document index.

These are useful discovery/context links but generally cannot support an exact learner-facing proposition by themselves.

### Disposition

`FIX / SOURCE`

During backfill:

1. retain the organization/root link only as contextual/discovery evidence where useful;
2. locate the exact regulation, standard, guidance, manual, job analysis or publication supporting the claim;
3. create the exact SOURCE record;
4. change the claim edge from `needs_primary_source` to the appropriate verified strength only after the exact source is reviewed.

This confirms the earlier MDQ-002 pilot finding.

---

## FINDING P-02 — Internal research packets are synthesis, not external proof

Research Packages 12 and 52 are useful internal evidence objects because they preserve the reasoning and source set used to draft content.

They do not replace the underlying external sources for claims presented as external facts or industry practices.

### Disposition

`KEEP + EXPAND`

- Keep internal-packet SOURCE records for provenance.
- Use them as `framing_only`, `partial`, or internal synthesis edges as appropriate.
- Preserve exact underlying external-source edges for externally asserted claims.

---

## FINDING P-03 — The same competency legitimately appears in multiple courses

Examples:

- `CMP-CORE-014 Stop/escalate judgment` belongs primarily in Foundation but is repeatedly contextualized in Road Case, Lighting and every other department.
- `CMP-CORE-008 Task completion/handoff` belongs in Foundation but also appears as department release/acceptance logic.

### Disposition

`KEEP / NORMALIZE`

Do not duplicate competency IDs. Use `COMPETENCY_CONTENT_EDGE.relationship_type` and `primary_home` to distinguish:

- primary instruction;
- reinforcement;
- context-specific application;
- assessment;
- practice observation.

---

## FINDING P-04 — Current Stagehand Fundamentals has evidence-backed content gaps

The current live course already covers readiness, safety, orientation, communication, load-in/out, boundaries, handling and career basics well.

The crosswalk shows thinner learner-facing treatment for:

- explicit assignment receipt/ownership;
- task acceptance/handoff;
- report-back/reassignment;
- standby vs break vs actual release;
- work-area reset as a repeatable professional behavior;
- timekeeping/sign-out;
- public/accessibility-route awareness;
- explicit sector/local-rule adaptability.

### Disposition

`BUILD LATER FROM EXISTING RESEARCH`

No further broad Stagehand research is required before initial drafting. Use SFS-O01–O08, SFS-U04/U05, MDQ-013/014 and existing Fundamentals source lineage.

---

## FINDING P-05 — Research coverage materially exceeds current Field Skill inventory

Current dedicated Field Skill builds cover only part of the researched common-work universe.

High-value researched-but-unbuilt skills include:

1. Team Lift / Carry / Set Down.
2. Cart / Dolly / Hand-Truck Movement.
3. Cable Deployment / Gathering.
4. Case / Boneyard Organization.
5. Work-Area Reset / Handoff.
6. Pipe-and-Drape Support.
7. Ground-Level Soft Goods.
8. Riser / Deck Component Support.
9. Scenery / Flat / Wagon Movement.

### Disposition

`BUILD CANDIDATES`

These are evidence-ready enough for bounded owner-review drafts, subject to the existing practitioner/model/visual release gates.

---

## FINDING P-06 — Controlled-work gates fit the graph cleanly

The model correctly represents:

- rigging;
- production power;
- automation;
- laser/pyro/SFX and comparable controlled systems

as knowledge/awareness pathways ending at an external `GATE-*` rather than internal qualification routes.

### Disposition

`KEEP`

Do not add internal graph edges that imply course completion traverses a controlled-work gate.

---

## FINDING P-07 — Course route compatibility/supersession needs explicit records

The current `courses/` directory contains both canonical current pages and older/compatibility material, including:

- individual legacy Fundamentals module pages alongside the consolidated Fundamentals course;
- `pathway-video-02-led-video-systems-old-overview.html` alongside the current Video Course 2;
- individual Lighting/Video Course 2 lesson pages alongside consolidated shared-shell courses.

### Disposition

`AUDIT / SUPERSESSION`

Do not infer deletion. During route inventory, classify each as:

- canonical current;
- compatibility/deep-link route;
- archived;
- superseded historical page;
- generated child/lesson route.

Use MDQ-001 supersession fields rather than silently treating all pages as equal primary courses.

---

# 3. Pilot action queue

| Priority | Action | Result |
|---:|---|---|
| 1 | Build canonical route/course inventory | Know exactly what exists and which route is primary |
| 2 | Map all 34 Fundamentals lessons to CMP-CORE/CAR/FLD competencies | Complete Foundation semantic coverage |
| 3 | Map all current Field Skills to CMP-FLD nodes | Expose built vs research-only work |
| 4 | Map five C1/five C2 department courses | Establish current department coverage |
| 5 | Map Lead/Supervisor/C3/Infrastructure/Coordination routes | Establish responsibility/depth coverage |
| 6 | Normalize source records from all mapped courses | Deduplicate sources and versions |
| 7 | Create claim-level edges for high/specialist safety content first | Reduce highest liability uncertainty first |
| 8 | Generate unsupported / needs-primary-source / duplicate-primary-home views | Turn matrix into actionable QA |
| 9 | Draft researched-but-unbuilt content only after stable IDs are assigned | Avoid another forensic backfill later |
| 10 | Begin practitioner/learner/customer validation against the matrix | Move from research to real validation |

---

# 4. Scaling rule

Backfill priority is **risk and architecture first**, not raw page count.

Order:

1. authority/safety boundary claims;
2. assessment rationales;
3. practical-task claims;
4. department systems claims;
5. lead/supervisor/advanced decisions;
6. lower-risk descriptive/context claims;
7. navigation/UI and non-claim copy last.

This ensures the matrix starts reducing actual project risk before every sentence has been entered.

---

# 5. Pilot decision

**Result:** `PASS — scale the normalized matrix.`

The data model is sufficient to proceed with full course/competency inventory and incremental claim/source backfill. No final course-format decision is required to continue.