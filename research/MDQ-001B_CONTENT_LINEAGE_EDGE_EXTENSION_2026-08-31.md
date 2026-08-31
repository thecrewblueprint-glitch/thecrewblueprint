# MDQ-001B — Content Lineage Edge Extension

**Prepared:** 2026-08-31  
**Status:** Canonical extension for assessment and derived-content traceability  
**Extends:** `MDQ-001_SOURCE_CITATION_CONTENT_MATRIX_SCHEMA_2026-08-31.md`

## Why this extension exists

MDQ-001 requires every assessment to trace:

`Q-*` → `QR-*` → `CL-*` → `SUPPORT_EDGE` → `SOURCE`

The original five-record schema defines CONTENT and SOURCE relationships, but it does not define a normalized edge between two CONTENT records. Storing that relationship only in free-text `notes` would make question-rationale auditing unreliable and difficult to validate.

This extension adds one generic logical table:

**CONTENT_LINEAGE_EDGE** — a directed semantic relationship between two CONTENT records.

It does not replace CONTENT supersession fields or COMPETENCY_CONTENT_EDGE.

## Record shape

| Field | Type | Meaning |
|---|---|---|
| `content_lineage_edge_id` | string unique | Stable relationship ID |
| `from_content_id` | FK CONTENT | Origin record |
| `to_content_id` | FK CONTENT | Destination record |
| `relationship_type` | enum | Semantic relationship |
| `required` | boolean | Whether target is required for validity/release |
| `review_status` | enum | Current matrix review state |
| `notes` | text/null | Applicability or limitations |

## Relationship enum

Initial values:

- `has_rationale` — Question → Answer Rationale.
- `rationale_derived_from_claim` — Answer Rationale → Claim/Boundary.
- `assesses_claim` — Question → Claim/Boundary directly, for audit views.
- `explains` — explanatory content → claim/boundary.
- `practice_observes` — practice gate → claim/competency-related content.
- `visual_depicts` — visual content → claim/boundary; MEDIA remains authoritative for asset metadata.
- `contextualizes` — content places another claim in sector/model/authority context.

Do not use this table for source evidence; that remains SUPPORT_EDGE.

## Assessment rule

A scored question intended for more than navigation/self-reflection requires:

1. one `has_rationale` edge to a `QR-*` CONTENT record;
2. the rationale must have one or more `rationale_derived_from_claim` edges;
3. each external-fact/source-backed claim must have adequate SUPPORT_EDGE records;
4. Crew Blueprint-framework questions may terminate at a clearly classified `crew_blueprint_framework` claim instead of external evidence;
5. no question or score may imply a stronger authority/experience state than the underlying content establishes.

## Release-state consequence

A quiz may function in an owner-review build before full lineage is complete. It is not assessment-matrix complete until all scored questions satisfy the chain above.

This extension creates traceability only. It does not establish psychometric validity, job competency, employer authorization, external certification, or licensure.
