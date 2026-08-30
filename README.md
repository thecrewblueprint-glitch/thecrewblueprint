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
public site as clearly labeled, `noindex` owner-review copies while the owner
audits them. Their presence does not mean practitioner approval, qualification,
or final learner release.

## Structure

- **Root** (`index.html`, `about.html`, `courses.html`, `resources.html`,
  `contact.html`, plus legal pages) — the public marketing site.
- **`/courses`** — Stagehand Fundamentals (four parts, 10 modules, 34 lessons)
  plus the complete Department, Field Skill, Lead, Supervisor, Advanced
  Systems, Infrastructure, and Production/Coordination owner-review catalog.
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
- **`/scripts`** — structured curriculum records plus the deterministic builder,
  owner-review preparation, publication-boundary, and validation scripts.
- **`lms-dashboard.html`** — the four-part Stagehand Fundamentals course map.

See `research/EXPANDED_CURRICULUM_BUILD_REGISTER_2026-08-30.md` for the full
course-to-packet, tier, route, assessment, and release-gate map. Remaining
evidence work is listed in
`research/EXPANDED_CURRICULUM_RESEARCH_QUEUE_2026-08-30.md`.

## Owner-Review Publication State

All 57 top-level course routes are accessible from the public GitHub Pages
site. Stagehand Fundamentals and its ten module routes retain their existing
learner state. The 46 post-Fundamentals routes are public audit copies marked
`Owner Review · Public Audit Copy` and carry `noindex,follow` metadata while
the owner reviews them. Public visibility does not grant job authority,
qualification, practitioner approval, or final learner-release status.

The pre-publication review checkpoint remains preserved on
`curriculum/owner-audit-2026-08-30`. To regenerate and prepare the tiered pages
for the current public owner-review state, run:

```bash
node scripts/build-tiered-courses.mjs --owner-review-live
node scripts/apply-owner-review-live.mjs
node scripts/validate-tiered-courses.mjs
node scripts/validate-owner-review-live.mjs
```

The previous content-free publication lock remains available as a reversible
rollback:

```bash
node scripts/apply-publication-locks.mjs
node scripts/validate-publication-locks.mjs
```

`_config.yml` keeps research, curriculum data modules, build scripts, and
archived course snapshots out of the generated GitHub Pages site. The shared
tiered-course CSS and JavaScript are published because the live review pages
depend on them.

## Content Sourcing

Stagehand Fundamentals and each live owner-review course map
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
