# Issue #73 — Feedback and Contact Implementation Contract

Status: implementation-ready architecture; production endpoint remains intentionally unconfigured until a private server-side destination is selected.

## Purpose

Replace the legacy public `mailto:`-only contact pattern with a structured, privacy-preserving intake system that supports both general contact and course-specific feedback.

This document does not authorize storing submitter information in this public repository.

## Public intake surfaces

### General contact

Required categories:
- course/content question
- professional/industry feedback
- partnership/business inquiry
- accessibility issue
- technical/site issue
- legal/privacy request
- other

Required fields:
- category
- message
- optional reply email
- page URL
- build/version identifier

### Course feedback

Required fields:
- course ID/title
- lesson/content ID when applicable
- feedback type: correction, unclear explanation, missing topic, technical issue, accessibility issue, industry-practice feedback, other
- free-text feedback
- optional usefulness signal
- optional reply email
- page URL
- curriculum/build version

If authenticated, a server-side handler may attach a Clerk user identifier as provenance. Authentication must not be required to submit feedback.

## Server-side contract

The browser submits to a server-controlled endpoint. The endpoint must:

1. accept only HTTPS POST requests;
2. validate a strict JSON/form schema;
3. reject malformed and oversized payloads;
4. apply rate limiting and bot/spam controls;
5. sanitize or safely encode user text before later display;
6. create a cryptographically unpredictable durable submission ID;
7. record a server timestamp and status;
8. store private submitter information outside the public repository;
9. send a deterministic notification to the owner;
10. return a generic success/error response that does not expose infrastructure details.

Do not send directly from browser JavaScript to the owner's mailbox and do not embed private API keys, mail credentials, or owner-only routing addresses in client code.

## Submission states

`new | reviewed | actionable | incorporated | replied | closed | spam`

## Notification routing

Use deterministic subject prefixes:

- `[TCB FEEDBACK]`
- `[TCB CONTACT]`
- `[TCB TECH]`
- `[TCB ACCESSIBILITY]`
- `[TCB LEGAL]`

Notification metadata should include the submission ID, category, course/page identifier when relevant, and authenticated/anonymous state. Use `Reply-To` only when a submitter supplies a syntactically valid reply address.

## Privacy/minimization

- Do not require a name.
- Do not require an email unless a reply is requested by the submitter.
- Do not place submission bodies or submitter identifiers in GitHub.
- Define a retention/deletion policy before production activation.
- Treat all submitted text as untrusted input.
- Any Clerk user ID must be attached server-side rather than trusted from a client-supplied identity field.

## Deployment decision still required

A private server-side destination must be selected and configured before this can be activated. AWS remains an acceptable implementation path, but this repository must not invent a bucket, database, mail identity, API endpoint, or secret.

The deployment should expose configuration to WordPress/server runtime through environment/server settings, not hard-coded repository values.

## Production acceptance tests

- Signed-out visitor can submit general contact.
- Signed-out visitor can submit course feedback.
- Eligible signed-in learner can submit with server-attached identity context.
- Malformed and oversized payloads fail closed.
- Rate limiting/spam protection is exercised.
- Every accepted submission receives a unique durable ID.
- Notification subjects route deterministically.
- Private submitter information does not appear in the public repository or public logs.
- Submission can be traced to the exact page/course/build that produced it.
- Accessibility and legal/privacy categories use their designated routing prefixes.

## Current repository debt

`contact.html` currently exposes a direct Gmail address and relies on `mailto:`. That remains a temporary legacy contact mechanism until the private server-side endpoint is configured. Do not remove the only working contact path before the replacement is verified in production.
