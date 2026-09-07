# The Crew Blueprint

Training and career-readiness content for people entering live event work — stagehands, ground hands, and department support crew.

## Live Site and Current Review State

The public site is served through the repository's established GitHub Pages path:

**https://thecrewblueprint-glitch.github.io/thecrewblueprint/**

The canonical repository branch remains `main`, but the owner may temporarily swap which repository presentation is served from `main` for direct live review. As of the 2026-09-07 documentation audit, `main` had been temporarily switched to the clean-sheet learning-lab presentation for owner review and then received V2 visual-library integration work. That temporary review state must not be interpreted as a permanent architectural adoption decision unless the owner explicitly accepts it.

Vercel is not part of the Crew Blueprint deployment path. Vercel mutation authority is restricted to the separate Upnow ecosystem.

## Purpose

The Crew Blueprint helps new and developing live event workers understand the pace, language, safety mindset, work boundaries, and crew expectations behind load-ins, show calls, and load-outs.

The curriculum includes Stagehand Fundamentals plus department, field-skill, leadership, systems, infrastructure, and production/coordination material. Public visibility, owner-review status, archival presence, or inclusion in a comparison build does **not** by itself establish practitioner approval, qualification, job authority, or final learner-release status.

## Current Repository Architecture

The repository now carries both learner/site surfaces and a permanent version-retention/review system. Major surfaces include:

- **Root public site** — marketing, legal, navigation, and whichever owner-authorized learner presentation is currently being served from `main`.
- **`/courses`** — course routes and learner-facing curriculum surfaces.
- **`/resources`** — Resource Hub and quick-reference material.
- **`/research`** — evidence/source packages, research matrix material, curriculum research queues, citation validation, and supporting authority records.
- **`/scripts`** — deterministic curriculum builders, validators, archive/version materialization logic, comparison preparation, and publication-boundary tooling.
- **`/content/archive`** — permanent historical/version retention, including verbatim course-version captures, manifests, branch/version summaries, comparison metadata, and review-support datasets. Archive material preserves evidence; it does not automatically become the current learner version.
- **`/lab/clean-sheet-v1`** — isolated clean-sheet learning-lab implementation used for controlled review/experimentation. It may be temporarily promoted into the served `main` presentation for owner review without that temporary swap becoming a permanent adoption decision.
- **`.github/workflows/`** — validation and controlled export/materialization workflows, including clean-sheet validation and interactive/version snapshot support.
- **`/design`, `/css`, `/images`, `/js`** — design system, presentation assets, and shared interaction/runtime support.

Read repository-local manifests, current Git state, and validation scripts for exact inventory rather than relying on old hard-coded route/course counts in this README.

## Version and Preservation Model

The repository follows a no-silent-loss preservation rule:

1. accepted Git history remains durable evidence;
2. superseded curriculum/version material is retained through the archive/version system where the current architecture requires explicit materialization;
3. comparison, vNext, clean-sheet, temporary live-review, and archival copies remain distinguishable from an owner-accepted long-term learner presentation;
4. course-content parity across presentation variants is governed separately from CSS/layout experimentation;
5. deletion or slimming must not be inferred from a redesign or version transition.

The version/archive system includes a course-version registry, diff/review manifests, verbatim version captures, and isolated current-versus-proposed review surfaces. Use those records for version archaeology and comparison instead of treating this README as a version manifest.

## Publication and Owner-Review Boundary

Crew Blueprint is in an active build phase with a bounded owner live-review exception for directly visible site content. That exception does **not** extend to data/schema architecture, build/validation pipelines, admission/security/governance logic, or structural repository documentation that the owner cannot audit simply by viewing the rendered site.

A temporary presentation swap performed for owner review is therefore a live-review operation, not an automatic change to the repository's deeper governance, curriculum authority, archival rules, or long-term product decision.

For learner/review pages, publication labels, `noindex` behavior where applicable, safety/qualification boundaries, legal statements, and repository-local validation requirements must remain accurate. Public visibility never grants occupational authorization or qualification.

## Content Sourcing

Instructional claims are mapped to checkable material such as government regulations, standards bodies, union/local rules where relevant, manufacturer documentation, and other scoped authorities. Crew Blueprint framing must not be presented as an external industry standard when it is a local convention, interpretation, or training choice.

The `/research` area is the evidence trail. Exact source status, research queues, qualified-person boundaries, practitioner-review requirements, and release gates should be read from current research/matrix/build records rather than reconstructed from historical README prose.

## Deterministic Validation

Before structural or generated curriculum changes are treated as complete, use the validators/build scripts applicable to the changed surface. The repository contains targeted validation paths for fundamentals, tiered curriculum, owner-review/publication state, legal reconciliation, consent/progress preservation, version/archive integrity, and clean-sheet/review artifacts.

Do not assume an old command list in a README is exhaustive; inspect `scripts/`, repository instructions, and workflow definitions for the current validation contract.

## Authority and Change Control

Read `AGENTS.md` and repository-local instructions before making changes. Source repository evidence is authoritative for Crew Blueprint implementation/content state. Cross-system copies in Supabase, `50yearroadmap`, Roadmapdev, or archival systems do not transfer mutation authority away from this repository.

Structural documentation and governance changes use the repository's governed change path. The build-phase direct-to-accepted-branch exception is limited to its explicitly defined directly visible owner-reviewed content scope.

## Copyright & Use

© 2026 Deadhang Labor LLC. All Rights Reserved.

This repository contains proprietary intellectual property owned by Deadhang Labor LLC — website source code, design and layout, branding, documentation, and training/course content. No permission is granted to copy, reproduce, modify, distribute, or create derivative works from any portion of this repository without prior written authorization. See `NOTICE.md` and `LICENSE` for full terms.
