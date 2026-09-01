# The Crew Blueprint — v2 Style Guide

Reference document for the industrial/dark redesign concept (`design-concepts/2026-09-01-v2-redesign-concept.html`, branch `claude/v2-redesign-concept-images`). Everything here is extracted directly from that file's CSS/JS — nothing here is aspirational or unbuilt. If the concept changes, update this doc to match; if they disagree, the concept file is the real source and this doc is stale.

Status: concept under owner review, not merged into `main`. This guide documents what exists today so a swap decision can be made against a fixed reference rather than a moving target.

## 1. Color tokens

All colors are CSS custom properties on `:root`. Single committed dark theme — no light-mode variant exists or is planned for this concept.

| Token | Hex / value | Role |
|---|---|---|
| `--ground` | `#15181b` | Page background |
| `--ground-2` | `#1a1e21` | Secondary background (stat rail, ladder band, callout fills) |
| `--panel` | `#202528` | Card/panel surface |
| `--panel-2` | `#272d31` | Hover state for cards/nav links |
| `--steel` | `#5b6670` | Neutral accent (ladder rung markers) |
| `--steel-dim` | `#363d42` | Progress bar track background |
| `--ink` | `#eef1f2` | Primary text |
| `--ink-dim` | `#9ba6ac` | Secondary text (descriptions, body copy in cards) |
| `--ink-faint` | `#6d7880` | Tertiary text (labels, captions, muted metadata) |
| `--amber` | `#f5b400` | Primary accent — **this is the live site's real `--cb-gold` value**, not an invented color |
| `--amber-strong` | `#ffd45a` | Accent hover/emphasis — matches the live site's `--cb-gold-strong` |
| `--rust` | `#a8462a` | Danger/gap accent (status-gap chips, incorrect quiz answers) |
| `--border` | `rgba(238,241,242,0.09)` | Hairline borders |
| `--border-strong` | `rgba(238,241,242,0.16)` | Emphasized borders (card hover, focus states) |

**Compatibility aliases**: `--cb-bg`, `--cb-bg-deep`, `--cb-bg-light`, `--cb-border`, `--cb-border-strong`, `--cb-card`, `--cb-gold`, `--cb-gold-border`, `--cb-gold-strong`, `--cb-muted`, `--cb-muted-2`, `--cb-panel`, `--cb-text` all alias to the tokens above. These exist because ported real course content (the 7 bespoke courses, some tiered-course-shell lessons) references the live site's `--cb-*` variable names directly in inline styles. Keep these aliases if more real content gets ported later — removing them will silently break inline-styled content.

## 2. Typography

Loaded via one Google Fonts request: `Big Shoulders Display:wght@700;800;900`, `Archivo:wght@400;500;600;700;800`, `IBM Plex Mono:wght@500;600`.

- **Big Shoulders Display** — all headings (`h1`–`h4`), brand wordmark, stat numbers, department glyphs. Always `font-weight: 800`, always `text-transform: uppercase`, `letter-spacing: 0.01em`, `text-wrap: balance`. This is a global tag-level rule — every heading everywhere in the concept inherits it, including headings inside ported real course content. Don't fight this by overriding weight/case per-component; adjust `font-size` and `color` only.
- **Archivo** — body copy, buttons, nav links, everything that isn't a heading or a label.
- **IBM Plex Mono** — eyebrows, tags, kickers, small uppercase labels (`.tag`, `.eyebrow`, `.reference-label`, `.tc-boundary-label`, module/part labels in the course dashboard). Signals "metadata," not prose.

No fixed type scale table exists — sizes are set per-component with `clamp()` for hero/display text and fixed px for body/label text (13–15px body, 11–12.5px labels).

## 3. Layout

- `.wrap` — the one content-width container, `max-width: 1180px`, centered, `padding: 0 24px`. Every page section sits inside a `.wrap` (or a full-bleed section wrapping a `.wrap` for background-color bleed, e.g. `.ladder-band`).
- Grids use CSS Grid with `gap`, never margin-based spacing between siblings.
- Breakpoints: `900px` (tablet — most 3-column grids drop to 2, two-column heroes/about-grids stack), `800px` (course-shell sidebar collapses to single column), `700px`/`640px`/`560px` (further mobile narrowing on specific grids), `480px` (lesson pager stacks vertically).

## 4. Core components

### Navigation and footer — already global, by construction
The nav and footer are **not per-page markup** — they're written once in the page shell (outside `<main id="app">`) and every route (`render()`'s hash-switch) only ever replaces `#app`'s contents. There is exactly one header and one footer in the entire file, shared by all 45 courses, all department pages, all legal pages, home, and about. If this becomes the real site's actual implementation (rather than a single-file SPA), the equivalent is a shared include/partial for header and footer — never let a per-page copy of either drift out of sync the way the live site's marketing pages and course pages currently do (they use two different footer markups today).
- `nav.beam` — top nav, `position: relative` (**not sticky** — this was a real bug, fixed; do not reintroduce `position: sticky` here).
- `.hazard-rule` — the amber diagonal-stripe divider bar under the nav. Decorative, appears once, site-wide.
- `.brand-mark` — the real logo icon (cropped from `crew-blueprint-logo-master.jpeg`), 34px in nav, 44px (`.footer-brand img`) in footer. Not a placeholder monogram.
- `.footer-disclaimer` — the real "Important Safety Disclaimer" text (orientation/job-readiness training, does not replace employer safety training, site-specific instruction, union training, equipment certification, OSHA 10/30, or hands-on authorization), word-for-word from the live site's footer. This was missing from an earlier pass of the concept and has been added back — never drop it.
- Footer has two link rows below the disclaimer: `.footer-links` (Home/About/Courses) and `.footer-legal` (all 6 real legal pages, routed to `#/legal/<slug>`).

### Buttons
- `.btn` base class, always `background: transparent` explicitly set (native `<button>` elements have a browser-default light-gray face otherwise — this was a real bug, fixed. Never remove the explicit `background` from `.btn`).
- `.btn-primary` — amber fill, dark text. `.btn-ghost` — bordered, transparent, fills `--panel` on hover.
- `:disabled` state: `opacity: 0.4`, hover effects suppressed.

### Cards
- `.dept-card` (home page department grid), `.track-card` (catalog grid), `.track-row` (department detail view) — three different card shapes for three different densities of the same underlying data (`DEPARTMENTS`/`FIELD_SKILLS`/etc. JS arrays). All share the hover pattern: `border-color` shifts to `--amber`, background lifts to `--panel-2`.
- `.about-block`, `.pull-stat` — About page's two card types (principle blocks vs. numbered stat callouts).
- `.riveted` — corner-dot decorative motif (two small circles, top-left/top-right), used on photo frames and About blocks. Purely decorative, references industrial rivets.

### Photography — two distinct treatments, never mixed
- `.shot` — **attention/marketing photography only**, used exactly twice: one Home hero photo, one About banner photo. Both are real site photos (`images/site/`), duotone-treated (`grayscale(0.3) contrast(1.1) brightness(0.88)` plus an amber/dark gradient overlay via `::after`) so they read as this site's photos, not stock inserts. Always captioned via `.shot-cap`.
- `.figure-plate` — **course visual-aid photography only**, distinct on purpose: plain border, no color treatment, a small uppercase `.fig-label` header ("Visual Aid — Field Skill Reference"), and a real figure caption tied to the specific technique shown. Never use `.shot`'s duotone/rivet treatment on a course figure — the whole point is that marketing photos and lesson-reference photos read as two different categories at a glance.
- No other photography exists anywhere else in the concept. If adding a photo anywhere new, decide which of these two categories it belongs to before styling it — don't invent a third treatment.

### Course dashboard (Stagehand Fundamentals)
- `sfCourseView()` is the one hand-built dashboard, because Fundamentals is the one course with real 4-part/10-module/34-lesson depth in the live product.
- `.sf-part-label` / `.sf-module` / `.sf-module-head` / `.sf-lessons` — collapsible per-module sidebar tree. Only the module containing the active lesson starts expanded.
- `.sf-toggle-btn` / `.course-side.sf-side.mobile-open` — mobile-only "Course Contents" toggle. **Below 800px the sidebar starts collapsed** so lesson content is visible on load without scrolling past the full module list first (a real bug, fixed). This toggle/collapse pattern is reused as-is (same class names) for every ported real course's table of contents too — don't fork a second version of this pattern.
- `.sf-pager` — Previous/Next Lesson buttons, disabled at the first/last lesson, last button reads "Course Complete" instead of "Next Lesson →".
- `.rule-plate` — the module's real safety rule, surfaced per-lesson.

### Ported real course content — one global dashboard, format varies per course
`tieredCourseView()` renders every course that isn't Fundamentals, driven by the `TIERED_COURSES` data object (real content extracted from the live site's JSON course data, the 7 bespoke courses' inline render functions/content strings, and one hub-page-with-embedded-sections architecture — nothing here is written by the concept, all of it is pulled from the actual built pages). This is the "global course dashboard" — one shell, one set of components, one quiz handler, one mobile-collapse pattern, loading whatever a given course's real content actually is. The content *format* inside a lesson varies freely (plain prose, a two-column comparison via `grid2`, a numbered sequence, a glossary grid, an embedded knowledge-check) because different subjects retain differently — the dashboard shell around it never changes. Fundamentals gets its own dashboard (`sfCourseView()`) instead of this one only because it has real 4-part/10-module depth the others don't; every other course, regardless of which of the three source architectures it came from, ends up in the same shell.

- `.tc-hero` / `.tc-boundary` — course title, tier tag, description, and (when present) the real authority-boundary text in a callout.
- `.tc-module` / `.tc-lesson` — module and lesson wrappers; lessons get anchor IDs (`#tc-m0-l0`) for the table-of-contents to jump to.
- **Ported-content class names** (`card`, `card.objective`, `explainer`, `reference`, `.reference-label`, `mini`, `grid2`, `key-takeaway`, `cb-list`, `cb-panel`, `cb-section`, `cb-glossary-list`/`cb-glossary-item`, `cb-quiz-list`/`cb-quiz-item`, `cb-diagram`/`cb-diagram-label`/`cb-diagram-caption`, `cb-drill-grid`, `course-training-visual`) are **not this concept's own naming convention** — they're the exact class names the live site's real content HTML already uses. They're styled here to match the industrial palette so real content renders correctly without rewriting a single course. Do not rename these classes; add new ones instead if a new content shape shows up in an unported course.
- `.quiz-block` / `.quiz-q` / `.options` / `.opt` / `.coach` — the quiz component, styled to match `--amber`/`--rust` semantics. Click-to-score behavior is one delegated listener on `#app` (see §5), reused for every quiz on every course page — never wire a second quiz handler.
- `.tc-toc` — the table-of-contents sidebar for ported courses; reuses the exact same `.sf-side`/`.sf-toggle-btn` mobile-collapse pattern as Fundamentals.

### Legal pages
- `.legal-hero` / `.legal-doc` / `.legal-callout` — renders real extracted text (title, last-updated date, headings, paragraphs, lists, callouts) from all 6 live legal pages. Routed via `#/legal/<slug>`, linked from the footer.

## 4a. Tier naming — real crew role names, not "Course 1/2/3"

The catalog no longer labels department tracks "Course 1/Course 2/Course 3." That numbering was this concept's own invention, not extracted from anything, and it has a real problem: in the live industry, lower numbers mean *more* senior (an A1 outranks an A2), the reverse of what "Course 1 → Course 2 → Course 3" implies. Rather than invent a new scheme, each department's `DEPARTMENTS` entry now carries the **real role title** that department's crews actually use, researched per department rather than assumed:

| Department | Support role | Senior/systems role | Source |
|---|---|---|---|
| Lighting | L2 | L1 | [Lasso: What Does a Lighting Engineer (L1) Do?](https://www.lasso.io/articles/what-does-a-lighting-engineer-l1-do/), [AV Labor Source: L1 vs L2 Lighting Technician](https://avlaborsourceinc.com/blog/l1-vs-l2-lighting-technician-guide-2026) |
| Audio | A2 | A1 | [Lasso: What Does an Audio Engineer (A1) Do?](https://www.lasso.io/articles/what-does-an-a1-do/), [Shoflo: A1 Audio Engineer](https://blog.shoflo.tv/glossary/what-is-an-a1-audio) |
| Video | V2 | V1 | [Lasso: What Does a Video Engineer (V1) Do?](https://www.lasso.io/articles/what-does-a-video-engineer-v1-do/), [AV Labor Source: AV Technician Roles A1/A2/V1/V2/L1/L2](https://avlaborsourceinc.com/blog/complete-av-technician-roles-guide-2026) |
| Staging & Carpentry | Carpenter | Head Carpenter | [Toronto Metropolitan U. Production Handbook: Head Carpenter](https://pressbooks.library.torontomu.ca/productionhandbook/chapter/head-carpenter/) |
| Electrics | Electrician | Master Electrician | [Electrician (theatre) — Wikipedia](https://en.wikipedia.org/wiki/Electrician_(theatre)) |
| Rigging | Ground Rigger → Up-Rigger | Head Rigger | [Rigger (entertainment) — Wikipedia](https://en.wikipedia.org/wiki/Rigger_(entertainment)), [IATSE Local 55: Riggers](https://iatselocal55.com/riggers) |
| Backline / Props / Wardrobe | (no single unified role — see below) | — | [Backstage Culture: Jobs and Titles on Tour](https://www.backstageculture.com/jobs-and-titles-on-tour/), [Wardrobe supervisor — Wikipedia](https://en.wikipedia.org/wiki/Wardrobe_supervisor) |

**Why Backline/Props/Wardrobe has no Lead track, honestly explained rather than left unexplained**: real crews split this into separate guitar/drum/bass techs, a props department, and a wardrobe department, each with its *own* supervisor (a Wardrobe Supervisor is not a Props Manager is not a Head Backline Tech) — there is no single real "Backline/Props/Wardrobe Lead" role to name a course after, because the combined department itself is a training-convenience grouping, not how real crews are actually organized. `DEPARTMENTS.backline.roleNote` says this explicitly rather than silently having a missing tier. `lead: false` on this entry was already correct before this pass — the research explains *why* it's correct.

**Where a department has two courses under the same real rank** (e.g., Lighting's Production Flow and System Design are both "L1" work), that's not a labeling gap — a working L1 and a designing/coordinating L1 are genuinely different scopes of the same real rank, not two different ranks. The course subtitle (not a fake second rank) carries that distinction.

**Framing preserved everywhere this was applied**: none of this claims certification, employer authorization, or hands-on qualification — every place a role name appears, it's introduced as "the real crew role this teaches toward," with the same disclaimer language as before. `DEPARTMENTS.<dept>.roleNote` and `.leadRole` carry this framing; `deptView()` renders both.

**Scope of this pass**: this relabeling changed the concept's own catalog/department-navigation labels only (`DEPARTMENTS[key].tracks[].stage`, the ladder-band home section, the About page). It did **not** alter any ported course's own extracted `tier` string (e.g., a course's real hero still says "Department Support Tier · Course 1" if that's literally what the live page's own content says) — that's real extracted site text, not this concept's invention, and rewriting it would mean altering real content rather than relabeling navigation. If the site's actual course pages get relabeled to match (changing their own on-page "Course 1/2/3" language to the real role names), that's a larger, separate content edit across the live `courses/*.html` files, not done here.

## 4b. Tier naming, corrected — §4a's own relabeling overclaimed (2026-09-01, same day)

The owner flagged, correctly, that §4a's fix introduced a new problem: labeling a department's Course 1 as a bare rank tag ("L2," "A2," "V2") claims the course teaches that full real rank. It doesn't. Both subagent reviews (§8) and the owner's own instinct agreed: Course 1's content — and its own `boundary` text — consistently teaches *less* than the full L2/A2/V2 scope (e.g. lighting-01 explicitly disclaims "focus," a real, defining L2 duty per the Lasso citation in §4a's table). §4a's fix traded one overclaim (numbering that reads backwards) for another (a rank tag the content doesn't earn).

**What actually resolved this**: re-checking each course's own real, extracted `tier` field (never touched by §4a, since that pass deliberately left ported content alone) turned up the answer already sitting in the live site's own data. Every single course, in every department, without exception, already carries: `"Department Support Tier · Course 1"`, `"Department Systems Tier · Course 2"`, `"Advanced Systems Tier · Course 3"`. The real site never once claims "L2" or "A2" in its own course content — that claim only ever existed in this concept's own invented `DEPARTMENTS.tracks[].stage` navigation tags, never in the ported material itself.

**Further research** (new WebSearch/WebFetch pass, prompted by the owner's request to look for the correct generalist term below A2/L2/V2, with an explicit fallback instruction to use a plain phase-of-the-build label like "production support" or "staging support" if no real term exists): confirmed no standardized industry title exists for "generalist stagehand helping a specific department" below the A2/L2/V2 tier, across any of the five departments — with one narrow exception (an informal, shop-specific "A3" in audio, sourced only from a practitioner forum, not standard enough to use). The research also surfaced a real, concrete hazard in the owner's own suggested fallback: "Staging Support" is genuinely ambiguous in real usage, since "staging" independently means both the Staging & Carpentry department *and* the general event-build phase between load-in and show (the "set" phase, as distinct from "show" and "strike"). That ambiguity is exactly why this reconciliation lands on "Support" (bare) rather than "Staging Support" for that department's Course 1 — see the full research citations below.

**Fix applied**: `DEPARTMENTS[key].tracks[].stage` now reads `"Support"` / `"Systems"` / `"Advanced"` for every department with real courses (lighting, audio, video, staging & carpentry, backline/props/wardrobe, electrics), matching the real site's own tier-tier convention exactly instead of inventing a rank claim. `roleNote` on each department was rewritten to carry the real rank names as explicit *context*, in "builds toward" framing rather than an equivalence claim, e.g. lighting's now reads: *"Real lighting crews rank L2 (rig/cable/focus support) below L1 (runs the console, owns the system). Support and Systems below build toward that real-world scope — neither course teaches the full L2 or L1 role on its own."* The home page's "How the Ladder Works" rung descriptions and footnote, and the About page's course-structure paragraph, were rewritten the same way — same real citations as §4a's table, same "toward" framing, no rank equivalence claimed anywhere. `leadRole` (e.g. "Master Electrician / LD track") is untouched: the Lead tier is the one place a bare rank name stays honest, since that's a distinct, separately-built set of 7 courses, not Course 1/2/3.

**New research, this pass — generalist-support-role citations**: [ControlBooth: Input on Stagehand Classification/Job Levels](https://www.controlbooth.com/threads/input-on-stagehand-classification-job-levels.20987/) (practitioner forum — the source of the audio-only "A3" mention, flagged as shop-specific, not standardized); [Wikipedia: A2 (theater)](https://en.wikipedia.org/wiki/A2_(theater)) (stub, corroborates A1/A2 only); [Endless Events: AV Labor Positions](https://helloendless.com/av-labor-positions/); [NY Stagehand Glossary](http://stagehandglossary.blogspot.com/2016/07/stagehand-glossary-v-18-updated-6-28-16.html) (informal/fan-maintained — used only to confirm "stagehand" as the dominant real generic term, not for any specific title); [Wikipedia: Stagehand](https://en.wikipedia.org/wiki/Stagehand) and [ia470.com Primer](https://www.ia470.com/primer/basics.htm) (confirm Carpenter/Electrics/Properties/Wardrobe as IATSE's traditional four departments, and that "Carpenter" is itself the base rank, not a title above a generalist); [Set & Strike: A Pro's Guide](https://www.platomediaco.com/blog/what-are-set-amp-strike-a-pros-guide-to-event-load-in-and-load-out) and [Festival & Event Production Staging Guide](http://festivalandeventproduction.com/event-guides/production-guide/staging-guide/) (source for the confirmed "staging" ambiguity above); [Wrapbook: Film Crew Positions](https://www.wrapbook.com/blog/film-crew-positions) (confirms "loader"/load-in crew as a real, distinct temporary-labor category, separate from ongoing department-assigned support — relevant context, not used as a course label here since these courses are ongoing-department-support content, not load-in-specific).

**What stays the same as §4a**: the citation table above (L2/L1, A2/A1, V2/V1, Carpenter/Head Carpenter, Electrician/Master Electrician, Ground Rigger/Up-Rigger/Head Rigger) is still the accurate real-rank research and still lives in each department's `roleNote`/`leadRole` — nothing in that table was wrong. What was wrong was using those tags as the *primary, claimed* label for Course 1/2, instead of as explanatory context for what Support/Systems build toward.

## 5. Interaction patterns

- **Routing**: `location.hash`-based SPA router in `render()`. Real routes always start with `#/` (`#/`, `#/about`, `#/courses`, `#/dept/<key>`, `#/course/<slug>`, `#/legal/<slug>`). **`render()` explicitly ignores any hash that doesn't start with `#/`** — this is required because every course's table-of-contents uses plain in-page anchors (`#tc-m0-l0`) for native browser scroll-to-anchor, and without that guard the router's `hashchange` listener would misread an anchor jump as an unknown route and silently fall back to the home page (a real bug, fixed). Any new anchor-based navigation added later must keep using non-`#/`-prefixed hashes, or must be added as a real route.
- **Quiz scoring**: one delegated click listener on `#app`, not per-question listeners. On click: disables all options in the group, marks the correct one `.correct`, marks a wrong pick `.incorrect`, and reveals the matching `.coach` element. Guards against a `.coach` with no `.answer-result` child (some real live-site quiz content is missing that element — this concept tolerates it instead of throwing, unlike the live site's current `js/tiered-course.js`, which still has that bug as of this writing).
- **Mobile sidebar collapse**: `sfToggleSide()` / `sfToggleModule()` do direct DOM class toggles, not full re-renders — preserves scroll position. `sfSetLesson()` (Fundamentals pager) does a full `#app` re-render since it's a full state change (active lesson index), followed by an explicit `window.scrollTo({top:0})`.

## 6. Content rules

- **Real content only.** Every course, every legal page, every catalog number is pulled from the live site — nothing in this concept is placeholder copy standing in for real content, except the one course explicitly still marked as a stub (see below).
- **Honest gaps stay honest.** Rigging (no C1/C2/C3) and Electrics (no C1/C2) show as `status-gap`/"Not Built" chips, not hidden or silently populated. If either department gets real content built on the live site, update `DEPARTMENTS` in the concept to match — don't leave the concept's gap-marking out of sync with reality.
- **Every real course now has full content.** `pathway-video-02-led-video-systems` (a third architecture — a single hub page with 9 embedded lesson sections toggled by `switchLesson()`, distinct from both the tiered-JSON pattern and the bespoke render-function pattern) was the last one, extracted directly from its embedded `.lesson-content` sections. All 44 real courses are in `TIERED_COURSES` or `sfCourseView` (Fundamentals); none remain as a placeholder stub.

## 7. Known open items (not blockers to reading this guide, but real)

- The 12 Field Skills that were orphaned on the live site (unlinked from `courses.html`/`sitemap.xml`) are now wired up on `main` directly — see the `main` branch commit fixing this, separate from this concept.
- A real crash bug in the live site's `js/tiered-course.js` (missing `.answer-result` element assumption) is fixed in this concept's own quiz handler, and separately fixed on `main` directly.
- All 44 real courses have full content ported *as data*. See §8 below — the renderer that turns that data into visible content had a bug that silently dropped a third of it; that bug is now fixed and verified, so "content-complete" is now true of what actually renders, not just of what's stored.
- The 8 courses (Audio, Video, Staging & Carpentry, Backline Course 1/2) that had no `boundary` field are now fixed — see §9. `tierClass` remains genuinely unused (confirmed unused in production too, not a concept-only gap). `packet` is now wired up — see §9.
- The image-duplication issue is now half-fixed: the logo (previously embedded twice, ~118KB each) is deduped to a single embed via one shared CSS custom property. The two hero photos and the course-visual figure remain individually embedded — that's a deliberate tradeoff, not an oversight (see §9): this file is both a repo source file and a self-contained Claude Artifact, and an artifact can't reference the repo's `/images/` files by relative path, so those three images have to stay inline for the artifact to render standalone. If/when this concept merges to `main` (no longer needing to double as a portable artifact), those three could switch to real file references.

## 8. Independent review (2026-09-01) and fixes applied

Ran the `subagent` skill against this concept: a self-report plus two fresh, context-free subagent reviews (Owner/Operator perspective; Learner/receiving-end perspective), each with zero visibility into the others' brief or findings. Full report: published as a Claude Artifact (not repo-tracked; ask the owner for the link if revisiting this).

**Both reviews independently found the same bug**, using different methods (manual code trace vs. actually executing the render logic against the embedded data in Node): `tcRenderBlock()` only handled block types `html`, `demo`, `stop`/`callout`, `sequence`, `authority`, and silently returned `""` for `columns`, `evidence`, `practice`, and any block with no `type` key at all. Checked against the real embedded data: **155 of 476 blocks (33%) across 106 lessons in 21 of 44 courses were rendering as nothing**, with no error and no visual sign anything was missing — including the "Verify the System" capstone lesson, identical across all 7 Lead-tier courses, which was blank in every one of them.

**Fixed**: `tcRenderBlock()` now handles all block types present in the real data (`columns`, `evidence`, `practice` added; the untyped-bullet case now falls through to a generic paragraphs+bullets renderer instead of returning empty), matching production `js/tiered-course.js`'s `renderBlocks()` coverage. Also fixed in the same pass: the existing `stop`/`callout` branch was rendering `block.bullets` but silently dropping `block.paragraphs` — true for 40 `stop` blocks and 47 `callout` blocks (found while porting, not part of either subagent's report). Verified by running the actual `tcRenderBlock()` function (via Node's `vm` module against the live extracted script) over every block in every course: 476/476 now render non-empty output, versus 321/476 before the fix. Re-verified visually via Playwright at both 1400px and 390px — the previously-blank Lead-tier "Verify the System" lesson now shows its `evidence`, untyped-bullet, and `columns` content correctly.

**Both reviews also independently found**: 8 of 44 courses (all of Audio, Video, Staging & Carpentry, Backline Course 1/2 — exactly the entry-point courses for those departments) have no `boundary` field, so no safety scope-disclaimer box renders, while the equivalent Lighting/Electrics courses all have one. **Not fixed in this pass** — needs the same real-content-extraction rigor as the rest of this concept (writing a placeholder boundary would violate "real content only," §6), so it's logged as an open item, not silently left unlabeled as done.

**Owner-only findings, not yet fixed**: ~1MB of the 1.66MB file is base64 copies of images (logo, two hero photos, one course figure) that already exist as separate files in `/images/` — the logo alone is embedded twice (~118KB each). `tierClass` and `packet` are collected on every course record but never rendered by any CSS or JS in this file. The new two-column footer was fixed to restore the copyright/entity line, Contact link, and "Also Visit" sibling-site link that the prior footer redesign had dropped versus the live site (all three now present — see the footer HTML).

**Fixed, in this same pass**: footer — added back `thecrewblueprint@gmail.com` (mailto), the Deadhang Labor LLC cross-link, and the `© 2026 The Crew Blueprint, a brand of Deadhang Labor LLC. All rights reserved.` line, all inside the existing `.footer-col-right` column (no new CSS needed — reused `.footer-links` and `.footer-fine`).

**Still open after this pass**: the separately-discussed tier-naming reconciliation (Course 1/2/3 vs. real L2/L1-style rank names) — a distinct, larger structural question still awaiting the owner's decision, not addressed by any fix in this section or §9.

## 9. Follow-up pass (same day) — remaining open items closed out

Owner asked to fix everything from §8 that could be fixed. Three of the four open items closed:

**8 missing `boundary` fields — fixed with real extracted text, not placeholder.** All 8 courses (`pathway-audio-01-support`, `pathway-audio-02-live-systems`, `pathway-video-01-support`, `pathway-video-02-led-video-systems`, `pathway-staging-carpentry-01-support`, `pathway-staging-carpentry-02-deck-systems`, `pathway-backline-props-wardrobe-01-support`, `pathway-backline-props-wardrobe-02-department-systems`) turned out to have real scope-limiting prose on their live pages — just delivered as an in-lesson paragraph ("What Stays Off-Limits Without Direction") or an explicit "What this course does not do:" sentence, rather than as a structured `boundary` metadata field like the tiered-JSON courses use. Read each live page in `courses/`, pulled the real sentence(s), and added them as each course's `boundary` field (lightly trimmed for length where the source ran long — never paraphrased into new claims). Verified: all 44 courses now have a `boundary` value (0 missing), and a Playwright screenshot of `pathway-audio-01-support` confirms the box renders exactly like every other course's.

**`packet` — wired up.** `tieredCourseView()`'s sources panel now prints "This review build traces to **`<packet>`**. Confirm current manufacturer, employer, venue, legal, and production requirements before real work." above the source list, when `c.packet` exists — the same real sentence production's `renderSources()` uses. `tierClass` stays unwired: confirmed it's unused in production too (no matching CSS class exists there either), so it's not a concept-only gap to close, just genuinely dead data inherited from the source.

**Logo duplication — deduped.** The nav and footer logo were two independent ~118KB base64 embeds of the byte-identical image. Replaced both `<img>` tags with a `<span>` styled via `background-image: var(--logo-src)`, with `--logo-src` holding the one base64 embed as a single `:root`-level CSS custom property. File size: 1,663,341 → 1,549,210 bytes (~114KB saved). Verified via Playwright: both logos still render at their original sizes (34px nav / 44px footer) with a real background-image, on both desktop and mobile, zero page errors.

**Not fixed, and won't be within this file's constraints**: the two hero photos and the course-visual figure remain individually base64-embedded rather than referenced as files. Unlike the logo, these aren't duplicates of each other — each is a distinct image — so there's no waste to dedupe between them. The actual bloat is that they're embedded at all instead of referenced by path, but this file currently has to work as both a repo source file *and* a self-contained, portable Claude Artifact (the owner's review copy), and an artifact has no way to fetch `../images/...` from the repo it doesn't ship with. Real fix (switch to `<img src="../images/...">`) only becomes safe once this stops needing to double as a standalone artifact — i.e., after the merge decision, not before.

All fixes in this section validated the same way as §8: `node --check` on the extracted script, a full `tcRenderBlock()` execution pass against the live embedded data (476/476 blocks non-empty, 44/44 courses with a boundary value), and Playwright screenshots at 1400px and 390px with zero `pageerror` events.

## 10. Gap-coverage audit (same day) — About page's stat was wrong

Owner flagged the About page's stat directly: "there is an indicator that says 2 knowledge gaps," and asked for a full `subagent`-skill audit of gap coverage across the whole content architecture before anything else. Full report published as a Claude Artifact (not repo-tracked).

**The claim**: `aboutView()`'s pull-stat read *"2 — Real coverage gaps disclosed openly — Rigging and Electrics entry tracks, not yet built."*

**Both the self-check and both blind subagent reviews independently recomputed the real number from `DEPARTMENTS` and landed on the identical count**: 3 departments carry at least one `status: "gap"` track, not 2 — Backline/Props/Wardrobe (1 gap, its third track), Rigging (3 gaps, its entire ladder, not just "entry tracks"), and Electrics (2 gaps). **6 individual gap tracks total, across 3 departments.** The stat's own named list ("Rigging and Electrics") omitted Backline/Props/Wardrobe entirely, and understated Rigging (the whole department is unbuilt, not just its entry tier). The Learner-perspective review flagged the direction of the error as the one that matters most: understating a disclosed gap makes the site's own "gaps disclosed openly" claim look more complete than it is — the worse direction for learner trust, on the one page explicitly claiming full openness about gaps.

**Fixed**: the stat now reads *"3 — Real coverage gaps disclosed openly — Backline/Props/Wardrobe, Rigging, and Electrics carry unbuilt tracks (6 tracks total across those three)."* Verified via Playwright screenshot of the rendered About page.

**Everything else checked out clean** — both subagents independently verified "45 Courses Live Now," "7 Departments," "18 Field Skills," and "34 Fundamentals Lessons" against their underlying data arrays and found all four accurate, with zero courses claimed-live-but-missing and zero orphaned data. The home page and department-detail pages compute their status chips from the same `DEPARTMENTS[key].tracks[].status` field the fixed stat now reflects, so nothing else needed to change — this was one hand-typed number, now computed-consistent with the rest of the page.
