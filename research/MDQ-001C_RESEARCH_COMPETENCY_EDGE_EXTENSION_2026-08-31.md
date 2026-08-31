# MDQ-001C — Research → Competency Edge Extension

**Prepared:** 2026-08-31  
**Status:** Canonical extension for structure-neutral research coverage  
**Extends:** MDQ-001 / MDQ-001A

## Problem

`COMPETENCY_CONTENT_EDGE` correctly connects a competency to actual or planned CONTENT. It should not be abused to invent a fake course merely because research exists.

The project now has many competencies where:

- domain evidence is substantial;
- the competency belongs on the owner-facing industry map;
- no final learner-facing course/container has been chosen.

Creating placeholder courses for those competencies would prematurely decide curriculum architecture and distort built-vs-researched state.

## New logical table

**RESEARCH_COMPETENCY_EDGE** connects a canonical competency directly to the research packet(s) that support its inclusion in the domain model.

### Fields

| Field | Meaning |
|---|---|
| `research_competency_edge_id` | unique edge ID |
| `competency_id` | canonical `CMP-*` or `GATE-*` node |
| `research_file` | primary repository research packet |
| `mdq_ids` | MDQ identifiers feeding the edge |
| `research_state` | `mapped`, `partial`, `research_complete_for_draft`, `strong_research`, `boundary_only`, `primary_research_needed` |
| `scope_note` | what the evidence supports |
| `authority_note` | authority/qualification limitation |
| `display_on_owner_map` | whether owner map should expose the node from research state |
| `notes` | optional provenance/limitations |

## State rule

This table records **evidence coverage only**.

It does not mean:

- a course exists;
- the competency has been practitioner approved;
- the learner has completed anything;
- the user has work experience;
- employer authorization exists;
- external qualification/licensure exists.

## Owner-map precedence

A future renderer may derive state in this order:

1. external `GATE-*` node → gate state;
2. publication/learner/practitioner state from CONTENT/REVIEW when present;
3. drafted/built `COMPETENCY_CONTENT_EDGE` → bright built state;
4. researched/planned content edge or `RESEARCH_COMPETENCY_EDGE` → muted researched state;
5. graph node without normalized research/content edge → muted mapped-only state.

White route-outward highlighting remains a graph-navigation/display calculation, not an evidence state.

## Architecture consequence

Research can now become complete **before** course structure is chosen. That matches the project's current evidence-first phase and prevents page architecture from dictating the industry model.
