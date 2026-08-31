# MDQ-001A — Competency ↔ Content Edge Extension

**Prepared:** 2026-08-31  
**Status:** Schema extension proposed from post-MDQ competency synthesis  
**Extends:** `MDQ-001_SOURCE_CITATION_CONTENT_MATRIX_SCHEMA_2026-08-31.md`  
**Reason:** MDQ-001 correctly normalizes claims and sources, but the new canonical competency graph creates an additional relationship that must remain explicit: **which content teaches, assesses, practices, references, or bounds which competency**.

This extension does not replace the five MDQ-001 record types. It adds a sixth normalized relationship table.

---

# 1. New logical record type: COMPETENCY_CONTENT_EDGE

One lesson can support multiple competencies. One competency can be taught by multiple courses or contextualized differently by sector. Therefore competency IDs should **not** be stored as one comma-separated field in CONTENT.

| Field | Type | Meaning |
|---|---|---|
| `competency_content_edge_id` | string unique | Stable relationship ID |
| `competency_id` | FK competency graph | `CMP-*`, or where appropriate a `GATE-*` boundary node |
| `content_id` | FK MDQ-001 CONTENT | Course/module/lesson/block/claim/question/practice/boundary |
| `relationship_type` | enum | `introduces`, `teaches`, `reinforces`, `contextualizes`, `assesses`, `practice_prepares`, `practice_observes`, `boundary_only`, `career_maps`, `supersedes` |
| `coverage_depth` | enum | `mention`, `awareness`, `foundation`, `assigned_support`, `systems_reasoning`, `lead_reasoning`, `advanced_design`, `external_gate` |
| `primary_home` | boolean | Whether this content is the canonical teaching home for the competency at this depth |
| `sector_scope` | list | Empty = transferable/general; otherwise touring/venue/corporate/etc. |
| `model_product_scope` | string/null | Exact system/model if constrained |
| `authority_class` | MDQ-003 enum | A0–A5 relationship context |
| `evidence_state` | enum | `research_only`, `drafted`, `matrixed`, `practitioner_reviewed`, `learner_validated`, `publication_ready` |
| `required_prerequisite` | boolean | Whether graph traversal should require the competency before this content/path |
| `display_on_owner_map` | boolean | Whether edge should appear in owner-facing progression visualization |
| `display_on_learner_map` | boolean | Whether it should normally appear in simplified learner view |
| `notes` | text/null | Duplication, qualification, migration, or contextual notes |

---

# 2. Why this relationship is required

Without this table, the project cannot reliably answer:

- Which courses teach `CMP-CORE-006` communication/readback?
- What content currently supports `CMP-FLD-003` cart/dolly movement?
- Which competencies are researched but have no learner-facing lesson?
- Which course duplicates another competency explanation?
- What should light up on the owner “everything map” when a course is built, researched, validated or completed?
- What competencies belong to one role without pretending the role is one course?
- Which learner progress event corresponds to which competency?
- Which sector overlays contextualize an existing competency rather than creating a duplicate competency?

The competency graph becomes the semantic layer; CONTENT remains the educational artifact layer.

---

# 3. Distinguish four separate completion concepts

The owner map and future backend must not use one generic `completed` flag.

## Research coverage

`competency → research packet(s)`

Meaning: Crew Blueprint has sufficient evidence to describe the competency.

## Course/build coverage

`competency → COMPETENCY_CONTENT_EDGE → CONTENT`

Meaning: learner-facing material exists.

## Learner state

`user → learning/practice event → content/competency`

Meaning: a particular learner viewed, answered, practiced or was observed.

## Work/authority state

`user → verified experience / employer authorization / external credential`

Meaning: real-world activity or permission exists.

These can create separate overlays on the same graph.

---

# 4. Owner-map overlay model

The “everything map” can later derive visual states from normalized data:

| Visual state | Data meaning |
|---|---|
| muted/dull | competency exists but selected overlay has no completion state |
| bright research color | evidence research threshold reached |
| bright build color | learner-facing content exists at intended depth |
| bright validation color | practitioner/learner gates reached |
| bright personal-experience color | selected profile has experience evidence |
| white route | graph traversal to adjacent/prerequisite/downstream possibilities |
| controlled gate symbol | `GATE-*` external authority transition |

The visual style is presentation logic; these states must be derived from records, not hard-coded into the image.

---

# 5. Canonical-home rule

A competency may appear in multiple courses, but only one item at a given depth should normally have `primary_home=true`.

Example:

- `CMP-CORE-014 Stop/escalate judgment` may be introduced in Fundamentals;
- reinforced in every department;
- assessed in Field Skills;
- contextualized in Lighting/Audio/Video/etc.;
- used in Lead/Supervisor reasoning.

Those are separate edges, not duplicate competencies.

This is how the project prevents copy drift while retaining contextual teaching.

---

# 6. Prerequisite graph rule

`required_prerequisite=true` is used sparingly.

A prerequisite means the downstream material materially assumes the learner understands the upstream competency. It does **not** automatically create a public lock or enrollment restriction.

Example relationships:

- call readiness and authority-boundary literacy can precede physical Field Skills;
- signal-flow fundamentals can precede deeper Audio systems reasoning;
- lighting-control fundamentals can precede programming/network branches;
- no internal prerequisite edge may bypass `GATE-RIG-*`, `GATE-ELC-*`, or another external qualification boundary.

---

# 7. Role mapping remains separate

Roles should use a separate graph relationship:

`ROLE → requires/uses → COMPETENCY`

Do not map a role directly to one course as though course completion creates the role.

Future optional record type:

`ROLE_COMPETENCY_EDGE`

with fields for role ID, competency ID, importance, expected responsibility band, external authority, sector and evidence basis.

This is deliberately deferred until the role graph is normalized enough to avoid fake precision.

---

# 8. Initial migration order

1. Stagehand Fundamentals lessons → CMP-CORE-*.
2. Current Field Skills → CMP-FLD-*.
3. Department C1/C2 → department competencies.
4. Lead/Supervisor/C3 → responsibility/depth branches.
5. Production/coordination routes → SMG/PMG/VOP/LEAD.
6. Controlled-work content → awareness competency plus explicit `GATE-*` edges.
7. Career/resources → CMP-CAR-*.
8. Assessments/practice gates → same competency IDs with `assesses` / `practice_prepares` / `practice_observes` edge types.

---

# 9. Audit views enabled by the extension

Add these future generated views to the MDQ-001 audit suite:

1. **Competency → research → content → source**.
2. **Competency with research but no course**.
3. **Course blocks with no competency assignment**.
4. **Competency taught in multiple primary homes**.
5. **Role → competencies → available Crew Blueprint content**.
6. **External gate map**.
7. **Owner-map state view**.
8. **Learner progress eligibility view**.

---

# 10. Decision

Adopt `COMPETENCY_CONTENT_EDGE` as the semantic bridge between the research/industry graph and the source/citation/content matrix.

This preserves the project’s ability to change course structure later without losing the underlying progression map, source lineage or progress semantics.