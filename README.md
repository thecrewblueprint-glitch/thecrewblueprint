# The Crew Blueprint

Public training, technical, safety, and career-readiness content for live-event
workers — stagehands, ground hands, department support crew, leads, and
production coordinators.

## Live Site

View the live site here (GitHub Pages):

**https://thecrewblueprint-glitch.github.io/thecrewblueprint/**

## Current Public State

`main` currently serves a neutral rebuild-in-progress page. Neither the prior
V2 product nor the clean-sheet prototype is the chosen architecture. Both are
preserved as exact archival branches and are reference material only:

- `archive/frozen-v2-exact-2026-09-07`
- `archive/frozen-vnext-clean-sheet-exact-2026-09-07`

The rebuild starts from the complete course histories, 143-course corpus,
technical/academic evidence, and intended learner purpose. It does not merge
or reorganize course content before the canonical corpus and knowledge graph
are reconstructed and pass the owner architecture gate.

## Ecosystem and Repository Boundary

The Crew Blueprint and Production Atlas are sibling public products that link
to each other while keeping separate canonical datasets:

- **The Crew Blueprint** owns durable technical, safety, academic,
  job-readiness, and curriculum evidence.
- **Production Atlas** owns public-safe current festival, employer, market,
  labor-route, and labor-organization intelligence:
  **https://atlas.thecrewblueprint.com/**
- **Roadmapdev** is the private intelligence and analysis plane. Private or
  sensitive research is not projected into either public repository.
- **50yearroadmap** governs the ecosystem relationship and repository
  boundaries; it is not a duplicate content store.

No personal information belongs in The Crew Blueprint or Production Atlas.
Public packages may contain organization-level facts and official
organization URLs, but not personal names or contacts, worker records,
private referrals, member-only material, or private operational details.

Current employment and labor-market requirements should link to Production
Atlas instead of being copied into durable course text. Conversely, Production
Atlas should link here for training without copying course content into its
market datasets.

## Purpose

The Crew Blueprint helps new and developing live event workers understand the
pace, language, safety mindset, and crew expectations behind load-ins, show
calls, and load-outs — the real-world basics nobody hands you before your
first call.

The preserved corpus includes Stagehand Fundamentals, department support and
systems, field skills, lead and supervisor development, advanced department
systems, production power awareness, and production/coordination material.
During the rebuild those histories are source material, not an assertion that
every prior route is currently published, approved, or learner-ready.

## Preserved Repository Structure

The working tree still contains the prior implementation and source corpus so
the rebuild can reconstruct it without data loss. Except for the neutral
`index.html` holding page, these paths describe retained material and tooling;
they do not select the next public architecture.

- **Root** (`index.html`, `about.html`, `courses.html`, `resources.html`,
  `contact.html`, plus legal pages) — the holding page plus retained prior
  marketing and reference routes.
- **`/courses`** — Stagehand Fundamentals (four parts, 10 modules, 34 lessons)
  plus the complete Department, Field Skill, Lead, Supervisor, Advanced
  Systems, Infrastructure, and Production/Coordination owner-review catalog.
- **`/resources`** — the Resource Hub: fast-facts reference pages (gear and
  tools, load-in/load-out quick reference, field hand-signal guide, pay and
  call-sheet basics, and more).
- **`/research`** — the source library backing the course content: real
  research packets, curriculum drafts, and citation-validation packages
  (OSHA regulations, ANSI/ISEA standards, technically relevant union and
  training materials, industry sources, and manufacturer documentation).
  Volatile local intake, referral, membership, employer, market, and festival
  intelligence belongs in Production Atlas, not this library. See
  `research/README.md` for the retained manifest.
- **`/design`** — design-system and content-graphics planning docs.
- **`/css`** — the shared site stylesheet (`theme.css`) — dark/gold design
  system, shared component classes (cards, panels, diagrams, icon rows).
- **`/images`**, **`/js`** — site assets and the shared nav/interaction script.
- **`/scripts`** — structured curriculum records plus the deterministic builder,
  owner-review preparation, publication-boundary, and validation scripts.
- **`lms-dashboard.html`** — the four-part Stagehand Fundamentals course map.

See `research/EXPANDED_CURRICULUM_BUILD_REGISTER_2026-08-30.md` for the full
course-to-packet, tier, route, assessment, and release-gate map. Remaining
evidence work is listed in
`research/EXPANDED_CURRICULUM_RESEARCH_QUEUE_2026-08-30.md`.

## Preserved Owner-Review Infrastructure

The repository retains the prior 57-route owner-review implementation and its
publication controls for reconstruction and comparison. Those files are not
the selected rebuild architecture. Direct file availability must not be read
as learner release, practitioner approval, qualification, job authority, or a
decision to preserve the previous navigation.

The pre-publication review checkpoint remains preserved on
`curriculum/owner-audit-2026-08-30`. If that historical state must be
reproduced for comparison, its retained commands are:

```bash
node scripts/build-tiered-courses.mjs --owner-review-live
node scripts/apply-owner-review-live.mjs
node scripts/validate-fundamentals-sequence.mjs
node scripts/validate-tiered-courses.mjs
node scripts/validate-owner-review-live.mjs
node scripts/test-course-consent.mjs
node scripts/validate-course-consent.mjs
node scripts/validate-legal-reconciliation.mjs
```

The previous content-free publication lock remains available as a reversible
rollback:

```bash
node scripts/apply-publication-locks.mjs
node scripts/validate-publication-locks.mjs
```

`_config.yml` retains the prior publication exclusions for research,
curriculum data modules, build scripts, and archived snapshots. Rebuild work
must re-evaluate those boundaries before a controlled release.

## Content Sourcing

The retained courses map instructional claims to checkable material—government
regulations, standards bodies, technically relevant labor/training sources,
and manufacturer documentation—rather than presenting Crew Blueprint's own
framing as an industry standard. Any current local, employer, membership,
referral, or labor-market fact should be maintained in Production Atlas and
linked from the eventual learner experience instead of copied into course
content. See `/research` for the retained curriculum evidence trail.

## Copyright & Use

© 2026 Deadhang Labor LLC. All Rights Reserved.

This repository contains proprietary intellectual property owned by
Deadhang Labor LLC — website source code, design and layout, branding,
documentation, and training/course content. No permission is granted to
copy, reproduce, modify, distribute, or create derivative works from any
portion of this repository without prior written authorization. See
`NOTICE.md` and `LICENSE` for full terms.
