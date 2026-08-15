# The Crew Blueprint — Research Library

This directory is the staging library for deep research supporting The Crew Blueprint.

## Purpose

Research files collected here are intended to be:

1. Stored as durable source material in the repository.
2. Imported as a batch into NotebookLM for cross-document synthesis and source-grounded analysis.
3. Handed off to Claude for downstream curriculum/content development.

## NotebookLM ingestion order

Keep the research files as **separate Markdown sources** rather than merging them into one document. This preserves source-level traceability inside NotebookLM.

Recommended ingestion order:

1. `00-NOTEBOOKLM-RESEARCH-SYNTHESIS-NOTES.md` — interpretive map of the research set; use as orientation, not as a substitute for the underlying evidence.
2. `01-general-stagehand-career-levels-us-live-events.md`
3. `02-department-skill-progressions-us-live-events.md`
4. `03-live-events-career-lanes-warehouse-touring-venue.md`
5. `04-safety-training-timing-crowd-weather-electrical-risk-assessment.md`
6. `04A-note-stagehand-public-area-material-interaction-awareness.md` — curriculum clarification to Package 04; prioritize this framing for general-hand public-area safety.
7. `05-stage-management-and-cross-cutting-production-leadership.md`
8. `06-training-certification-curriculum-progression-models.md`

Claude can package these with the additional Crew Blueprint files selected for the final NotebookLM source set.

## Source hierarchy

When sources appear to differ, use this hierarchy:

1. **Primary/official evidence inside the numbered research packages** — standards bodies, unions, employers, certification programs, codes, official program documentation.
2. **Other cited industry evidence** — trade publications, job postings, training providers, worker/community evidence where included.
3. **Research-package analysis and proposed models** — synthesis derived from the evidence.
4. **`00-NOTEBOOKLM-RESEARCH-SYNTHESIS-NOTES.md`** — cross-package interpretation and curriculum implications.

The synthesis note deliberately contains proposed Crew Blueprint structures. Those structures must not be mistaken for existing national industry standards.

## Important interpretation rules

- Preserve statements that terminology varies by employer, IATSE local, region, venue, or production context.
- Do not convert proposed Crew Blueprint learning levels into claims that the industry uses those exact titles.
- Keep **course completion**, **practical competency**, **career responsibility**, **employer authorization**, and **external certification** conceptually separate.
- Treat department titles as branches where the evidence supports branching rather than forcing every title into one promotion ladder.
- Treat warehouse/shop, touring/field, and fixed-venue work as distinct operating environments with crossover potential.
- Treat theatrical stage management as a distinct discipline while preserving context differences with concert/festival uses of the title `stage manager`.
- For general hands, prioritize **Public-Area and Worksite Interaction Awareness** over formal crowd-management framing. Crowd Manager material establishes a responsibility boundary and may support later security/event-operations content.
- Do not infer qualification to perform specialized, regulated, electrical, rigging, supervisory, or safety-critical work from completion of educational content alone.

## Organization

Research is stored as separate Markdown documents so individual topics remain independently citable and easy to ingest.

Naming convention:

`NN-topic-name.md`

Companion notes may use suffixes such as `04A` when they clarify or amend interpretation of a numbered package without replacing its underlying research.

Each completed research document should preserve source links/citations, distinguish sourced findings from analysis, and include the research date when information may change over time.

## Current research set

- **00** — Cross-package synthesis and interpretation notes
- **01** — General stagehand / ground-hand career levels
- **02** — Department skill progressions: audio, lighting, video, rigging, electrics, carpentry, staging
- **03** — Warehouse, touring/field, and fixed-venue career lanes
- **04** — Safety-training timing: crowd, weather, electrical awareness, proactive risk assessment
- **04A** — Stagehand public-area/material-interaction awareness clarification
- **05** — Stage management and cross-cutting production leadership
- **06** — Training/certification curriculum progression models

## Suggested NotebookLM role

NotebookLM should be used to perform **source-grounded cross-document synthesis**, identify recurring competencies, compare conflicting terminology, trace proposed curriculum claims back to evidence, and distinguish documented industry practice from Crew Blueprint design recommendations.

The `00` synthesis file includes a set of suggested cross-source questions for this purpose.

## Workflow

Deep Research → Repository Research Library → Claude packaging with additional source files → NotebookLM source set → source-grounded synthesis → Claude curriculum/content architecture

## Status

Research Packages 01–06 and companion note 04A are organized and prepared for NotebookLM packaging. Additional research packages can be appended using the same structure.
