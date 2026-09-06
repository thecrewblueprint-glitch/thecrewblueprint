# Clean-Sheet v1 — UI/UX & Usability Audit

**Date:** 2026-09-06  
**State audited:** `lab/clean-sheet-v1/`  
**Decision:** preserve/freeze as an owner-review experiment; do not replace regular v2 yet.

## Executive assessment

The clean-sheet product direction is strong. Its information architecture is substantially clearer than a large course catalog because it organizes training around the learner's real problem sequence: get the call, understand the call, become useful, build field competence, read context, choose a department, find work, grow deliberately.

The current implementation is suitable for owner testing, but it is not yet release-ready as the primary learner experience. The main gaps are navigation, progress semantics, mobile usability, assessment feedback, and accessibility polish—not the core curriculum concept.

### Audit scorecard

| Area | Score | Assessment |
|---|---:|---|
| Information architecture | 8/10 | Strong learner-centered structure and clear entry points. |
| Visual hierarchy | 8/10 | Cohesive dark industrial language; good separation of cards, lessons, callouts, and boundaries. |
| Learnability | 7/10 | Lesson pacing is strong, but progress/completion and next-step guidance need refinement. |
| Mobile course usability | 4/10 | Major defect: course sidebar/navigation disappears under 900px with no equivalent mobile lesson navigator. |
| Navigation/orientation | 6/10 | Hubs are understandable, but active state, return destinations, and Context Labs discovery are inconsistent. |
| Assessment/feedback | 6/10 | One check per lesson supports retrieval, but quizzes lock after one attempt and do not support retry/mastery flow. |
| Accessibility | 6/10 | Skip link and semantic structure are positive; small muted text, missing focus/active semantics, and hidden mobile navigation need work. |
| Source transparency | 8/10 | Evidence is separated from learner flow and remains inspectable. |

**Overall owner-testing readiness:** 7/10.  
**Primary-site replacement readiness:** 5.5–6/10 until the priority usability defects below are addressed.

---

## Priority findings

### P1 — Mobile learners lose course navigation

At `max-width: 900px`, `.course-side` is set to `display:none`. That removes:

- the course title/context;
- the module headings;
- direct lesson navigation;
- visibility into the full course structure.

The learner is left with Previous/Next only.

**Recommendation:** replace the hidden sidebar with a mobile course header plus a lesson/module drawer or select menu. Preserve sequential Next/Previous, but never make sequence the only navigation method.

### P1 — Progress currently means “last page visited,” not completion

The app stores one integer per program in `localStorage` and treats that index as progress. The visual progress bar is based on the currently opened lesson position.

This can tell a learner they are 70% through a course simply because they opened lesson 7 of 10. It does not represent:

- lessons completed;
- quiz attempts;
- quiz success;
- mastery;
- intentional skipping.

**Recommendation:** track `visited`, `completed`, and `assessment state` separately. Program-card progress should show completed lessons, while the current-lesson indicator should remain a separate position marker.

### P1 — Context Labs are core curriculum but under-discoverable

Context Labs are part of the program order and appear on the home program grid, but the dedicated **Learn** screen currently lists only:

- Start Working;
- Become the Hand They Want Back;
- Field Skills Studio;
- Choose a Department.

Context Labs therefore disappear from the obvious learning hub even though they are central to teaching that the same production ecosystem behaves differently across festivals, arenas/docks, venues/theatres, corporate/convention work, and shops/warehouses.

**Recommendation:** place Context Labs directly in Learn between Field Skills and Choose a Department. Consider making it a visible bridge: **“Same ecosystem, different operating context.”**

### P1 — Course return navigation loses context

Every program sidebar uses `← Learning home`, including programs entered from **Find Work** and **Grow**.

**Recommendation:** program metadata should define its parent hub. Examples:

- Start / Trusted / Field / Context / Departments → Learn;
- Find Work → Find Work hub;
- Grow → Grow hub.

### P1 — Quizzes are one-attempt locks rather than learning loops

After one answer, all options are disabled and the correct answer is shown. Coaching is revealed, but there is no retry flow.

**Recommendation:** for learning checks, permit one retry after coaching or provide a clear `Try again` control. Reserve hard one-attempt behavior for a separately labeled final assessment if one is ever added.

---

## P2 findings

### No explicit completion state

There are no lesson-complete controls/checkmarks and no course-complete summary. The learner cannot distinguish “I opened this” from “I worked through this.”

### No active state in the global navigation

Home / Learn / Find Work / Grow / Sources do not visibly or semantically identify the current section.

**Recommendation:** add visual active state plus `aria-current="page"` or route-equivalent semantics.

### Several interface labels are too small

The visual system uses 8–12px text for brand metadata, tags, module headings, breadcrumbs, lesson numbers, and navigation. This is visually consistent with the industrial aesthetic but unnecessarily demanding on mobile and lower-resolution screens.

**Recommendation:** establish a practical floor of ~12px for secondary labels and 14px for navigation/body-support text where possible.

### Muted small text has a contrast risk

`--muted: #747d84` against `--ground2: #171b1f` is approximately **4.13:1**, below the WCAG AA 4.5:1 target for normal-size text. Because muted text is frequently 9–11px, this should be corrected.

**Recommendation:** lighten the muted token or reserve it only for larger/nonessential decorative text.

### Keyboard focus styling is not intentionally designed

Hover states are well defined, but the stylesheet does not provide a consistent `:focus-visible` treatment for cards, buttons, quiz choices, and lesson links.

**Recommendation:** add a high-visibility amber focus ring with sufficient offset.

### Lesson active state is visual only

`.lesson-link.active` changes color/background but does not communicate `aria-current` to assistive technology.

### Source links repeat generic link text

Repeated `Open source ↗` links are visually understandable within a table, but screen-reader users navigating links out of context receive repetitive labels.

**Recommendation:** include the source name in accessible link labels.

### Mobile header sacrifices persistent orientation

Below 900px the sticky topbar becomes `position:relative`. On long lessons, global navigation disappears as the learner scrolls.

**Recommendation:** retain a compact sticky mobile header rather than removing stickiness.

### Visual learning aids are still mostly abstract

The UI supports `.visual` and `.visual-flow`, but the present learning language relies heavily on text cards and flow diagrams. For equipment recognition, production geography, department interfaces, dock/site flow, and context recognition, richer diagrams and carefully selected/generated visuals would increase comprehension.

**Recommendation:** add visuals only where they teach spatial/system relationships; avoid decorative media.

---

## What should not change

The following clean-sheet decisions tested well conceptually and should be retained in later iterations:

1. **Situation-first entry points** instead of forcing every learner through one rigid course ladder.
2. The journey model: **Get the call → Understand the call → Become useful → Build field competence → Read context → Choose a department → Find more work → Grow deliberately.**
3. Separation of **Learn**, **Find Work**, and **Grow** rather than presenting career information as more technical courses.
4. **Context Labs** as a mechanism for teaching transfer across festivals, arenas, venues, corporate work, and shop/warehouse environments.
5. A separate **Sources** surface so learner pages remain readable while evidence/provenance is inspectable.
6. Explicit safety/authority boundaries that distinguish online understanding from employer/site qualification or authorization.
7. One-lesson-at-a-time presentation with Previous/Next progression.
8. No assumption that one venue, labor company, tour, market, or crew workflow is the universal method.

---

## Recommended next iteration order

When this experiment is resumed, fix usability in this order:

1. Mobile lesson/module navigation.
2. Real completion/progress model.
3. Context Labs placement in Learn.
4. Context-sensitive return navigation.
5. Quiz retry/mastery behavior.
6. Active/focus states and small-text accessibility.
7. Completion summary / “what should I do next?” transitions.
8. Purpose-built visual aids and diagrams.
9. Learner testing with brand-new hands and working stagehands.

Do **not** rewrite the curriculum again before those interaction defects are corrected and tested; otherwise content and interface variables become impossible to evaluate separately.
