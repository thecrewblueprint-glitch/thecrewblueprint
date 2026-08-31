# Accessibility Release Gate

**Prepared:** 2026-08-31  
**Status:** Required release control

## Principle

Automated checks are a floor, not proof of accessibility or legal compliance. Public course releases should combine machine checks with manual keyboard, zoom, screen-reader, and content-alternative review.

DOJ starting points:
- https://www.ada.gov/resources/web-guidance/
- https://www.ada.gov/topics/title-iii/

## Automated baseline

Critical learner routes must have:
- declared page language;
- responsive viewport metadata;
- a nonempty page title;
- a main-content landmark;
- alternative text on every `<img>` element;
- no obvious empty buttons or links on the checked critical shells/templates;
- course consent coverage where required.

The repository script `scripts/validate-accessibility-baseline.mjs` enforces this limited structural floor for critical learner surfaces.

## Manual release checks

Before calling a major learner-facing release organization-ready:

1. **Keyboard** — all controls reachable in logical order; no keyboard trap; visible focus.
2. **Zoom/reflow** — usable at browser zoom and narrow mobile widths without hidden required content.
3. **Screen reader spot check** — headings, landmarks, forms, dialogs, quiz feedback, and link purpose make sense.
4. **Contrast/state** — text and meaningful UI states remain distinguishable without relying only on color.
5. **Images/diagrams** — meaningful visuals have equivalent text; decorative visuals are treated accordingly.
6. **Audio/video** — meaningful prerecorded media has captions/transcript or equivalent access.
7. **Motion** — essential information is not dependent on uncontrolled motion; reduced-motion behavior is considered where motion exists.
8. **Assessment** — errors/results are announced and the assessment is operable without pointer-only interaction.
9. **Consent dialog** — modal semantics, focus trap/return, labels, and link access are manually tested.
10. **Accessibility contact** — users have a clear route to report barriers or request support.

## Evidence state

Record accessibility review with:
- route/release;
- date;
- reviewer/method;
- devices/browsers/assistive technology used where applicable;
- findings;
- severity;
- remediation commit;
- unresolved exceptions.

Do not use a blanket "ADA compliant" marketing claim based solely on an automated scan or this checklist.
