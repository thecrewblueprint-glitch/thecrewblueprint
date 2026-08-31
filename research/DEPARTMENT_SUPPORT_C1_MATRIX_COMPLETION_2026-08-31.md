# Department Support C1 — Matrix Completion Status

**Prepared:** 2026-08-31  
**Branch:** `research/department-support-c1-matrix-completion`  
**Scope:** Lighting, Audio, Video/LED, Staging/Scenic, Backline/Props/Wardrobe Course 1 routes.  
**Purpose:** Close claim, assessment, competency and review lineage for the current learner-facing Department Support C1 layer without rewriting the live course pages on this structural branch.

## Completion result

All five current C1 routes now have a normalized first-pass evidence baseline.

| Route | Scored questions normalized | Key review gates |
|---|---:|---|
| Lighting Support | 5/5 | fixture handling is product-specific; `STOP is universal` wording requires revision; electrical and rigging authority remain external |
| Audio Support | 5/5 | cabinet handling is product-specific; placed/preset gear rule needs practitioner validation; line-array/suspended work remains specialist-controlled |
| Video / LED Support | 5/5 | LED-face/magnet handling requires exact product/manual + practitioner review; case/slot/orientation wording should become assigned packing-plan language |
| Staging / Scenic Support | 5/5 | exact modular-stage practical requires manufacturer/model review; structural acceptance remains external; scenic handling requires practitioner/sector validation |
| Backline / Props / Wardrobe Support | 5/5 | move-versus-change framing retained; ownership-sensitivity scale must not become a permission hierarchy; hazardous/specialist items remain outside general support |

**Total scored C1 questions normalized:** **25/25**.

Each scored question now resolves through:

`Question → normalized answer rationale → claim/boundary → support evidence where required`

and is mapped to a competency or external gate where appropriate.

## Important distinction

Matrix completion does **not** mean the current live learner copy is publication-ready.

The matrix deliberately preserves `revise`, `blocked`, and `accepted_with_qualification` review states where current wording is too absolute, too product-specific, or still needs practitioner confirmation.

Examples:

- Lighting: no universal entertainment-rigging signal vocabulary is asserted.
- Audio: no universal speaker-cabinet handle layout is asserted.
- Video: no universal LED-face or magnet-assisted alignment technique is asserted.
- Staging: no generic modular-stage assembly/acceptance method is asserted.
- BPW: no object category is automatically movable solely because of a Crew Blueprint sensitivity label.

## Controlled-work boundaries retained

This pass does not create or expand operational instruction for:

- overhead rigging / hoist / fly operation;
- energized temporary power;
- structural acceptance or load-capacity decisions;
- suspended line-array rigging;
- processor/system service authority;
- hazardous or specialist-controlled prop/effect work.

Those remain external qualification/employer/manufacturer/venue/authority states as already defined by the canonical competency graph.

## Next after this PR

1. run matrix CI and generated audit views;
2. resolve any schema/evidence failures exposed by CI;
3. owner/independent audit if desired;
4. merge this C1 matrix baseline;
5. start the five **Department Systems C2** routes on a fresh branch;
6. later perform learner-facing copy enhancement using the matrix review dispositions rather than editing from memory.
