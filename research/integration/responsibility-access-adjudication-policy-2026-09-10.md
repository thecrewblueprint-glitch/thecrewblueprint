# Crew Blueprint Responsibility / Access Adjudication Policy

**Date:** 2026-09-10  
**Target authority:** Issue #78  
**Base classifier:** `scripts/generate-responsibility-access-classification.mjs`  
**Status:** adjudication layer; does not rewrite historical V2/V4/PR #57 mappings

## Purpose

The 143-ID classifier merged in PR #82 is intentionally a coverage-complete **first pass**. It uses deterministic tier/domain rules to ensure every canonical identity is visible for review, but it is not publication authority and it deliberately leaves ambiguous SUPPORT → OPERATE and context/specialist boundaries unresolved.

This policy defines how reviewed overrides may be applied without hiding uncertainty or turning one historical taxonomy into the new product doctrine.

## Evidence order for adjudication

Use the following evidence in order:

1. Issue #78 responsibility/access doctrine.
2. Current course body, assessment, and normalized matrix evidence.
3. Accepted PR #57 role/node mapping as **structural evidence**, not target-product authority.
4. Course title, historical tier, and route metadata as supporting clues only.
5. Employer-demand evidence only for demand/priority/role relevance; never as technical or safety authority.

## Override rule

An override is allowed only when the first-pass classifier is clearly inconsistent with the responsibility the learning object is actually preparing the learner to carry.

Every override must record:

- canonical course ID;
- prior generated state/access;
- reviewed state/access;
- primary lane if changed;
- safety visibility if changed;
- rationale;
- evidence basis;
- whether the override is high-confidence or still provisional.

Do not use an override merely to reduce the ambiguity count.

## Access test

### ORIENT — free
The object mainly helps a learner understand the work environment, terminology, departments, hazards, boundaries, or career context.

### SUPPORT — free
The object prepares a learner to be useful under direction without independently owning technical correctness.

### OPERATE — paid
The object prepares a learner to understand system state, make department-specific technical decisions, configure/operate/diagnose equipment, or own technical correctness beyond supervised hand-level execution.

### DEEPEN / LEAD — paid
The object prepares deeper architecture, integration, advanced troubleshooting, planning, specialist depth, or technical leadership.

### REFERENCE / CONTEXT
The object is useful supporting material but should not define a primary progression step. Safety-critical awareness within reference/context remains freely reachable at the point of need.

## Mixed-container rule

If one historical course mixes free awareness/support material with paid technician depth, do **not** classify the whole historical container solely by its deepest paragraph. Mark it for split/recomposition:

- free awareness/support fragment remains reachable before the relevant hazard/task;
- technician/deep fragment may be paid;
- historical container remains intact for lineage.

## Initial high-confidence structural corrections

The following types are strong candidates for reviewed overrides because PR #57 already treated them as bridges or specialist-awareness nodes rather than ordinary lane-core technician progression:

- Lighting electrical/connector literacy used as a Lighting ↔ Power bridge;
- Lighting specialist-interface awareness;
- controlled-specialty awareness resources;
- sector/context labs;
- administrative management containers demoted by Issue #78.

Not every T4 course is automatically changed. A T4 node remains queued when its real responsibility threshold cannot be established from accepted structural evidence and current content without deeper review.

## Non-goals

This adjudication layer does not:

- change the live V4 course shell;
- activate a paywall;
- implement Clerk, Stripe, or entitlement delivery;
- claim practical competence or employer qualification;
- delete or mutate frozen historical versions;
- make employer demand evidence instructional authority.

## Acceptance condition before learner-graph migration

The classification is ready to drive the successor learner graph only when:

1. all 143 IDs remain represented exactly once;
2. every paid node has a defensible technician/deep responsibility rationale;
3. every free safety-awareness requirement remains reachable before exposure;
4. mixed containers are explicitly marked for split/recomposition;
5. management/reference demotions are reviewed for salvageable technical fragments;
6. unresolved ambiguity is small, explicit, and does not sit on the paywall boundary for a learner-facing launch path.
