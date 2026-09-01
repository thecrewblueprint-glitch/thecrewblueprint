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

### Navigation and footer
- `nav.beam` — top nav, `position: relative` (**not sticky** — this was a real bug, fixed; do not reintroduce `position: sticky` here).
- `.hazard-rule` — the amber diagonal-stripe divider bar under the nav. Decorative, appears once, site-wide.
- `.brand-mark` — the real logo icon (cropped from `crew-blueprint-logo-master.jpeg`), 34px in nav, 44px (`.footer-brand img`) in footer. Not a placeholder monogram.
- Footer has two link rows: `.footer-links` (Home/About/Courses) and `.footer-legal` (all 6 real legal pages, routed to `#/legal/<slug>`).

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

### Ported real course content (43 of 45 courses)
`tieredCourseView()` renders every course that isn't Fundamentals, driven by the `TIERED_COURSES` data object (real content extracted from the live site's JSON course data and, for the 7 bespoke courses, from their inline render functions/content strings — nothing here is written by the concept, all of it is pulled from the actual built pages).

- `.tc-hero` / `.tc-boundary` — course title, tier tag, description, and (when present) the real authority-boundary text in a callout.
- `.tc-module` / `.tc-lesson` — module and lesson wrappers; lessons get anchor IDs (`#tc-m0-l0`) for the table-of-contents to jump to.
- **Ported-content class names** (`card`, `card.objective`, `explainer`, `reference`, `.reference-label`, `mini`, `grid2`, `key-takeaway`, `cb-list`, `cb-panel`, `cb-section`, `cb-glossary-list`/`cb-glossary-item`, `cb-quiz-list`/`cb-quiz-item`, `cb-diagram`/`cb-diagram-label`/`cb-diagram-caption`, `cb-drill-grid`, `course-training-visual`) are **not this concept's own naming convention** — they're the exact class names the live site's real content HTML already uses. They're styled here to match the industrial palette so real content renders correctly without rewriting a single course. Do not rename these classes; add new ones instead if a new content shape shows up in an unported course.
- `.quiz-block` / `.quiz-q` / `.options` / `.opt` / `.coach` — the quiz component, styled to match `--amber`/`--rust` semantics. Click-to-score behavior is one delegated listener on `#app` (see §5), reused for every quiz on every course page — never wire a second quiz handler.
- `.tc-toc` — the table-of-contents sidebar for ported courses; reuses the exact same `.sf-side`/`.sf-toggle-btn` mobile-collapse pattern as Fundamentals.

### Legal pages
- `.legal-hero` / `.legal-doc` / `.legal-callout` — renders real extracted text (title, last-updated date, headings, paragraphs, lists, callouts) from all 6 live legal pages. Routed via `#/legal/<slug>`, linked from the footer.

## 5. Interaction patterns

- **Routing**: `location.hash`-based SPA router in `render()`. Real routes always start with `#/` (`#/`, `#/about`, `#/courses`, `#/dept/<key>`, `#/course/<slug>`, `#/legal/<slug>`). **`render()` explicitly ignores any hash that doesn't start with `#/`** — this is required because every course's table-of-contents uses plain in-page anchors (`#tc-m0-l0`) for native browser scroll-to-anchor, and without that guard the router's `hashchange` listener would misread an anchor jump as an unknown route and silently fall back to the home page (a real bug, fixed). Any new anchor-based navigation added later must keep using non-`#/`-prefixed hashes, or must be added as a real route.
- **Quiz scoring**: one delegated click listener on `#app`, not per-question listeners. On click: disables all options in the group, marks the correct one `.correct`, marks a wrong pick `.incorrect`, and reveals the matching `.coach` element. Guards against a `.coach` with no `.answer-result` child (some real live-site quiz content is missing that element — this concept tolerates it instead of throwing, unlike the live site's current `js/tiered-course.js`, which still has that bug as of this writing).
- **Mobile sidebar collapse**: `sfToggleSide()` / `sfToggleModule()` do direct DOM class toggles, not full re-renders — preserves scroll position. `sfSetLesson()` (Fundamentals pager) does a full `#app` re-render since it's a full state change (active lesson index), followed by an explicit `window.scrollTo({top:0})`.

## 6. Content rules

- **Real content only.** Every course, every legal page, every catalog number is pulled from the live site — nothing in this concept is placeholder copy standing in for real content, except the one course explicitly still marked as a stub (see below).
- **Honest gaps stay honest.** Rigging (no C1/C2/C3) and Electrics (no C1/C2) show as `status-gap`/"Not Built" chips, not hidden or silently populated. If either department gets real content built on the live site, update `DEPARTMENTS` in the concept to match — don't leave the concept's gap-marking out of sync with reality.
- **One remaining honest stub**: `pathway-video-02-led-video-systems` is not in `TIERED_COURSES` — it uses a third, separate architecture (an overview hub linking to 8 standalone lesson pages) that hasn't been ported. `courseView()` falls back to a plain "this course exists, not reproduced here" message for it, same as it would for any genuinely unported course. This is the last piece needed before the concept can be called fully content-complete.

## 7. Known open items (not blockers to reading this guide, but real)

- The 12 Field Skills that were orphaned on the live site (unlinked from `courses.html`/`sitemap.xml`) are now wired up on `main` directly — see the `main` branch commit fixing this, separate from this concept.
- A real crash bug in the live site's `js/tiered-course.js` (missing `.answer-result` element assumption) is fixed in this concept's own quiz handler, and separately fixed on `main` directly.
- `pathway-video-02-led-video-systems` + its 8 standalone lesson pages remain unported into this concept.
