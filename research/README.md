# The Crew Blueprint — Research Library

This directory is the staging library for deep research supporting The Crew Blueprint.

## Purpose

Research files collected here are intended to be:

1. Stored as durable source material in the repository.
2. Kept as separate, source-traceable research packages.
3. Handed directly to Claude for curriculum architecture, synthesis, and downstream content development.

## Claude handoff order

Keep the research files as **separate Markdown sources** rather than merging them into one document. This preserves source-level traceability during Claude synthesis.

Recommended handoff order:

1. `00-NOTEBOOKLM-RESEARCH-SYNTHESIS-NOTES.md` — legacy filename; interpretive map of the early research set. Its NotebookLM-specific wording is obsolete. Use it only as synthesis context, not as a substitute for the underlying evidence.
2. `00A-CLAUDE-HANDOFF-WORKFLOW-NOTE.md` — current workflow note; this supersedes NotebookLM-specific workflow instructions.
3. `01-general-stagehand-career-levels-us-live-events.md`
4. `02-department-skill-progressions-us-live-events.md`
5. `03-live-events-career-lanes-warehouse-touring-venue.md`
6. `04-safety-training-timing-crowd-weather-electrical-risk-assessment.md`
7. `04A-note-stagehand-public-area-material-interaction-awareness.md`
8. `05-stage-management-and-cross-cutting-production-leadership.md`
9. `06-training-certification-curriculum-progression-models.md`
10. `07-ground-hand-lighting-support.md`
11. `08-ground-hand-video-wall-support.md`
12. `08A-note-led-wall-model-specific-handling-boundaries.md`
13. `09-ground-hand-audio-support.md`
14. `10-ground-hand-staging-carpentry-support.md`
15. `11-ground-hand-backline-props-wardrobe-support.md`
16. `11A-note-sensitive-show-items-and-performer-owned-gear.md`

Claude can combine these with any additional Crew Blueprint source files selected for the curriculum/content handoff.

## Source hierarchy

When sources appear to differ, use this hierarchy:

1. **Primary/official evidence inside the numbered research packages** — standards bodies, unions, employers, certification programs, codes, official program documentation, manufacturer manuals.
2. **Other cited industry evidence** — trade publications, job postings, training providers, worker/community evidence where included.
3. **Research-package analysis and proposed models** — synthesis derived from the evidence.
4. **Companion clarification notes** — targeted curriculum corrections or interpretation safeguards tied to a numbered package.
5. **Cross-package synthesis notes** — orientation and interpretation only; they must not override stronger source evidence.

The synthesis and companion notes deliberately contain proposed Crew Blueprint structures. Those structures must not be mistaken for existing national industry standards.

## Important interpretation rules

- Preserve statements that terminology varies by employer, IATSE local, region, venue, production context, manufacturer, or equipment family.
- Do not convert proposed Crew Blueprint learning levels into claims that the industry uses those exact titles.
- Keep **course completion**, **practical competency**, **career responsibility**, **employer authorization**, and **external certification** conceptually separate.
- Treat department titles as branches where the evidence supports branching rather than forcing every title into one promotion ladder.
- Treat warehouse/shop, touring/field, and fixed-venue work as distinct operating environments with crossover potential.
- Treat theatrical stage management as a distinct discipline while preserving context differences with concert/festival uses of the title `stage manager`.
- For general hands, prioritize **Public-Area and Worksite Interaction Awareness** over formal crowd-management framing. Crowd Manager material establishes a responsibility boundary and may support later security/event-operations content.
- Do not infer qualification to perform specialized, regulated, electrical, rigging, supervisory, or safety-critical work from completion of educational content alone.
- For lighting/video/audio support, distinguish **physical department support under direction** from specialist configuration, troubleshooting, focus, patching, processing, tuning, calibration, repair, RF coordination, or other technical ownership.
- For LED walls, do not generalize one manufacturer's handle locations, lock sequence, connector family, or storage orientation into an industry-wide rule.
- For staging/carpentry support, distinguish **participating in modular assembly under direction** from structural modification, load-bearing decisions, hardware substitution, final leveling acceptance, or safety sign-off.
- For backline, props, and wardrobe, distinguish **moving an assigned item** from changing its settings, contents, preset, fit, condition, packing logic, or placement. Treat show-critical and performer-owned items as requiring explicit department direction.

## Organization

Research is stored as separate Markdown documents so individual topics remain independently citable and easy to hand directly to Claude.

Naming convention:

`NN-topic-name.md`

Companion notes may use suffixes such as `04A`, `08A`, or `11A` when they clarify or amend interpretation of a numbered package without replacing its underlying research.

Each completed research document should preserve source links/citations, distinguish sourced findings from analysis, and include the research date when information may change over time.

## Current research set

- **00** — Cross-package synthesis and interpretation notes *(legacy filename contains NotebookLM wording; workflow references are superseded by 00A)*
- **00A** — Current Claude handoff/workflow clarification
- **01** — General stagehand / ground-hand career levels
- **02** — Department skill progressions: audio, lighting, video, rigging, electrics, carpentry, staging
- **03** — Warehouse, touring/field, and fixed-venue career lanes
- **04** — Safety-training timing: crowd, weather, electrical awareness, proactive risk assessment
- **04A** — Stagehand public-area/material-interaction awareness clarification
- **05** — Stage management and cross-cutting production leadership
- **06** — Training/certification curriculum progression models
- **07** — General-hand support for lighting departments during load-in, hang, focus, and strike
- **08** — General-hand support for LED video-wall handling, build, cabling, staging, and strike
- **08A** — LED-wall model-specific handling and scope-boundary clarification
- **09** — General-hand support for audio departments during load-in, PA/system build, show, and strike
- **10** — General-hand support for staging/carpentry departments: modular decks, risers, platforms, stairs, guardrails, and scenic handling
- **11** — General-hand support for backline, props, wardrobe, and general production-support items
- **11A** — Sensitive show-item and performer-owned gear handling clarification
- **12** — Lighting Production Flow Research Packet (real citations: published books, ETCP/ESTA/USITT/OSHA/NFPA) — source for Lighting Pathway Course 2
- **12A** — Lighting Production Flow Rough Draft Curriculum Package — draft Course 2 was adapted from
- **13** — Large-Scale LED Video Systems Research Packet (real citations: ANSI E1.21/E1.56/E1.6/ES1.7/E1.58, OSHA 29 CFR 1926.404, NFPA 70/NEC, AVIXA) — source for Video Pathway Course 2
- **13A** — Large-Scale LED Video Systems Rough Draft Curriculum Package — draft Course 2 was adapted from
- **14** — Stagehand Fundamentals original source (`complete_course_1_standardized_lesson_structure`, Modules 1-10). **No external citations recorded** — flagged, see doc 14's header and `10_content_research_queue.md`
- **14A** — Stagehand Fundamentals Module 1 original source (structured JSON). Same no-citation flag as 14

## Suggested Claude synthesis role

Claude should perform **source-grounded cross-document synthesis**, identify recurring competencies, compare conflicting terminology, trace proposed curriculum claims back to evidence, and distinguish documented industry practice from Crew Blueprint design recommendations.

Useful cross-source questions include:

- Which department-support tasks are broadly transferable between calls, and which are product/company-specific?
- What physical tasks can a general hand safely repeat after demonstration without being treated as a department technician?
- Which actions should trigger an immediate stop-and-ask boundary because they enter technical, electrical, rigging, configuration, troubleshooting, repair, structural, or performer/show-critical scope?
- Which common gear-handling mistakes should be taught as prevention scenarios rather than specialist technique?
- Which support tasks are best taught as `move/stage/assist` versus `do not adjust/modify/configure`?
- How should the course teach ownership sensitivity for department-owned, preset-dependent, custom, or performer-owned items?
- Which competencies recur across every entry-level live-event pathway?
- Which skills require supervised practical experience rather than online instruction alone?
- Which proposed curriculum claims are inference/design recommendations rather than documented industry standards?

## Workflow

**Deep Research → Repository Research Library → Claude → Curriculum/Content Architecture**

There is **no NotebookLM step in the current workflow**.

## Status

Research Packages 01–11 and companion notes 04A/08A/11A are organized for direct Claude handoff. Packages 12/12A and 13/13A (Lighting and Video Course 2 source material) and 14/14A (Stagehand Fundamentals original source, no citations recorded) were pulled into the repo from Drive 2026-08-16 per owner directive: every Drive document used to create learner content lives here, not just in Drive. Additional research packages can be appended using the same structure.

**Note on 14/14A:** these two documents are archived as historical record only — they contain no external citation trail. New, genuinely sourced research packets to backfill real citations for Stagehand Fundamentals are a tracked, separate piece of work (see `10_content_research_queue.md`), not yet built.
