# Curriculum vNext comparison-mode correction

Owner feedback identified that the initial review surface mixed two presentation systems: proposed vNext content rendered in the review UI while “current” links navigated back into legacy-styled course pages. That made content comparison unnecessarily difficult.

Correction requirements:

- Preserve the six current learner course files verbatim as a frozen **pre-vNext comparison snapshot**.
- Do not modify the current `courses/` routes.
- Provide three review modes inside one owner-review surface: **Current before vNext**, **Proposed vNext**, and **Side-by-side**.
- Label the frozen comparison baseline by source frontier so it cannot drift silently as current routes evolve.
- Keep the proposed content visually distinct but do not require navigation away from the comparison surface.
- Field Skills remain outside this comparison pass pending separate owner review.
