# Department Systems C2 — Matrix Completion Status

**Prepared:** 2026-08-31  
**Branch:** `research/department-systems-c2-matrix-completion`  
**Scope:** Lighting Production Flow, Live Sound Systems, Large-Scale LED Video Systems, Modular Deck Systems, Backline/Props/Wardrobe Department Systems.  
**Purpose:** Close the first-pass claim, assessment, competency, evidence and review lineage for the five current learner-facing T4/C2 routes without rewriting live course pages on this structural branch.

## Completion result

| Route | Current scored questions | Matrix status | Main review gates |
|---|---:|---|---|
| Lighting Production Flow | 12/12 | complete first-pass lineage | rigging/electrical authority external; documentation conventions qualified; layered troubleshooting stays non-procedural |
| Live Sound Systems | 5/5 | complete first-pass lineage | gain/feedback live wording requires revision; network/RF/operator authority external |
| Large-Scale LED Video Systems | 8/8 | complete first-pass lineage | electrical/rigging/structural acceptance external; product/service troubleshooting remains model/practitioner controlled |
| Modular Deck Systems | 5/5 | complete first-pass lineage | exact manufacturer/model practical still blocked; no generic assembly/acceptance procedure |
| BPW Department Systems | 5/5 | complete first-pass lineage | custody/reconciliation conventions remain production-specific; deeper specialization should split by department |

**Total current scored C2 questions accounted for: 35/35.**

Two questions already had canonical assessment chains from earlier high-risk work and are intentionally reused rather than duplicated:

- Lighting `l2q10` — DMX universe → `Q-LTG-HR07-DMX-001`
- Video `v2q6` — IP rating scope → `Q-VID-SYSTEMS-IP-001`

All remaining current C2 scored items now resolve through:

`Question → normalized rationale → claim/boundary → support evidence where required`

## Field-practice retrofit applied

The C2 pass uses public practitioner/community evidence where it helps describe actual operating practice, while keeping formal/product authority separate.

Examples:

- Lighting: shop prep, labeling, current documentation and resolving show-specific changes before deployment.
- BPW: preservation/restoration of show equipment, case/item organization and reconciliation before handoff.
- General rule: public forum evidence can corroborate recurring field convention but cannot override manufacturer instructions, employer/site process, qualified technical authority, regulation or AHJ/venue requirements.

## Important review findings

### Lighting

- two-end labeling and patch-document practices are recurring professional patterns, not universal format requirements;
- the course must not imply systems learning creates rigging/electrical authority;
- troubleshooting is retained as layered fault-domain reasoning and change discipline, not generic repair/configuration procedure.

### Audio

- the live `noisy and thin → input gain/preamp first` answer is too absolute; C2 should teach the input stage as an upstream layer rather than one symptom-independent first adjustment;
- the live monitor-feedback question is too procedural; C2 should teach feedback as a multi-factor acoustic system loop and retain actual corrective decisions with the responsible operator;
- pre-/post-fader and physical/logical routing concepts remain platform-qualified.

### Video

- average panel consumption is not a complete production-power approval basis; no load calculation or circuit-sizing procedure is added;
- a working image does not imply structural, rigging, power, wind-plan or venue/AHJ acceptance;
- downstream dark-cabinet reasoning remains fault-domain awareness, not product-service procedure;
- the existing HR09 IP-rating assessment remains canonical and is reused.

### Staging

- practical modular-deck release remains **blocked** without exact manufacturer/model evidence and qualified staging/system review;
- the live receive-to-assemble workflow is normalized to assigned-plan/system workflow rather than a universal physical assembly sequence;
- no connector technique, leveling method, hardware substitution, capacity calculation or structural acceptance criteria are added.

### Backline / Props / Wardrobe

- assigned custody and move-versus-change remain work-control frameworks, not universal ownership law;
- field evidence supports accurate restoration/packing/organization and state reconciliation as real work outcomes;
- the combined C2 remains useful for shared workflow, but deeper technical material should split into Backline, Props and Wardrobe branches during curriculum-architecture redesign.

## Review-state integrity

All reviews created by this pass are labeled as AI-assisted `citation` or `safety` audits as appropriate. None are recorded as `practitioner` review events. Practitioner/manufacturer/qualified-role validation remains explicitly outstanding where required.

## Controlled-work boundary

This pass does **not** add or extend operational instructions for:

- overhead rigging, hoist or fly operation;
- energized temporary power or production-power design;
- modular-deck physical assembly/structural acceptance;
- suspended audio rigging;
- RF/network engineering;
- LED product service or structural/weather approval;
- hazardous/specialist prop/effect work.

## Next

1. run hardened matrix CI and both generated audit views;
2. resolve any schema/evidence/lineage failures;
3. self-audit the full C2 PR diff;
4. owner merge decision;
5. after merge, open a fresh higher-tier branch for Lead/Supervisor/C3/Production evidence completion.