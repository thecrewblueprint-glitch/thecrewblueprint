# The Crew Blueprint

Training and career-readiness content for people entering live event work —
stagehands, ground hands, and department support crew.

## Live Site

View the live site here (GitHub Pages):

**https://thecrewblueprint-glitch.github.io/thecrewblueprint/**

## Purpose

The Crew Blueprint helps new and developing live event workers understand the
pace, language, safety mindset, and crew expectations behind load-ins, show
calls, and load-outs — the real-world basics nobody hands you before your
first call.

The flagship course, **Stagehand Fundamentals**, retains 10 modules and 34
micro-lessons while presenting them through four focused parts. It covers what
a stagehand actually does, safety mindset, PPE, venue and jobsite awareness,
load-in/load-out fundamentals, crew communication, department basics,
tools/gear handling, and getting hired and called back. Later curriculum spans
Department Support, Department Systems, Stagehand Field Skills, Lead,
Supervisor, Department Course 3 systems, Production Power Awareness, and a
Production & Coordination career branch. Those later courses remain on the
owner-audit branch and do not publish learner content until the owner releases
them individually.

## Structure

- **Root** (`index.html`, `about.html`, `courses.html`, `resources.html`,
  `contact.html`, plus legal pages) — the public marketing site.
- **`/courses`** — Stagehand Fundamentals (four parts, 10 modules, 34 lessons)
  plus content-free owner-audit notices at every later course route.
- **`/resources`** — the Resource Hub: fast-facts reference pages (gear and
  tools, load-in/load-out quick reference, field hand-signal guide, pay and
  call-sheet basics, and more).
- **`/research`** — the source library backing the course content: real
  research packets, curriculum drafts, and citation-validation packages
  (OSHA regulations, ANSI/ISEA standards, IATSE local rules, industry and
  manufacturer documentation) that every course's "Sources" section points
  back to. See `research/README.md` for the full manifest and how the
  packages relate to each other.
- **`/design`** — design-system and content-graphics planning docs.
- **`/css`** — the shared site stylesheet (`theme.css`) — dark/gold design
  system, shared component classes (cards, panels, diagrams, icon rows).
- **`/images`**, **`/js`** — site assets and the shared nav/interaction script.
- **`/scripts`** — structured curriculum records plus the deterministic builder
  and validators for the owner-audit curriculum and public lock state.
- **`lms-dashboard.html`** — the four-part Stagehand Fundamentals course map.

See `research/EXPANDED_CURRICULUM_BUILD_REGISTER_2026-08-30.md` for the full
course-to-packet, tier, route, assessment, and release-gate map. Remaining
evidence work is listed in
`research/EXPANDED_CURRICULUM_RESEARCH_QUEUE_2026-08-30.md`.

## Publication Boundary

Stagehand Fundamentals and its ten module routes are the only learner courses
published from `main`. Every post-Fundamentals route serves a content-free
owner-audit lock page until the owner explicitly releases that course.

The complete review curriculum is preserved on
`curriculum/owner-audit-2026-08-30`. To regenerate review pages there, run:

```bash
node scripts/build-tiered-courses.mjs --owner-audit
node scripts/validate-tiered-courses.mjs
```

Before any branch can become public, restore and verify the locks:

```bash
node scripts/apply-publication-locks.mjs
node scripts/validate-publication-locks.mjs
```

`_config.yml` also keeps research, curriculum data modules, build scripts,
archived course snapshots, and owner-review player assets out of the generated
GitHub Pages site.

## Content Sourcing

Stagehand Fundamentals and each course preserved on the owner-audit branch map
their instructional claims to real, checkable material — government
regulations, standards bodies, union locals, and manufacturer documentation —
rather than presenting Crew Blueprint's own framing as an industry standard.
Where a claim is local, employer-specific, or a Crew Blueprint convention, the
course says so directly. See `/research` for the evidence trail.

## Copyright & Use

© 2026 Deadhang Labor LLC. All Rights Reserved.

This repository contains proprietary intellectual property owned by
Deadhang Labor LLC — website source code, design and layout, branding,
documentation, and training/course content. No permission is granted to
copy, reproduce, modify, distribute, or create derivative works from any
portion of this repository without prior written authorization. See
`NOTICE.md` and `LICENSE` for full terms.
