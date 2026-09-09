# The Crew Blueprint — Clerk Account & Role Architecture (V4)

Status: implementation architecture

Issue: #66

## Current state

The current V4 GitHub Pages build already loads Clerk on the public pages with a publishable key and renders:

- Sign In;
- Create Account;
- Clerk UserButton for signed-in users.

That is **authentication UI**, not a complete application account system.

Current gaps:

- no explicit application roles;
- no owner/admin authorization model;
- no secure server-side role write path;
- no protected admin API;
- no account-backed learner progress store;
- no production Clerk instance cutover;
- no documented owner bootstrap procedure.

The current publishable key is a Clerk test/development key (`pk_test_…`). Production launch must use a production Clerk instance/key pair.

---

# Roles

The application role vocabulary is:

```text
owner
admin
learner
```

## `owner`

- full Crew Blueprint application authority;
- may access owner/admin product controls;
- may assign/remove admin roles through a protected backend process;
- cannot expose or retrieve backend secrets through the browser.

## `admin`

- may access administrative application functions explicitly granted by the backend;
- should not automatically receive every owner-only action.

## `learner`

- normal authenticated learner;
- owns learner profile/progress records associated with the Clerk user ID.

Unauthenticated visitors remain public/anonymous users rather than receiving a stored role.

---

# Role source of truth

Use Clerk `publicMetadata.role` as the identity-side application-role value:

```json
{
  "role": "owner"
}
```

Reasoning:

- the frontend needs to read the role to render the correct account/admin navigation;
- Clerk public metadata is frontend-readable;
- public metadata must be written from the Clerk Backend API, which prevents a learner from promoting themselves through browser JavaScript.

Do **not** store application authority in Clerk `unsafeMetadata` because the frontend can modify unsafe metadata.

The role value must always be validated against the exact allowlist:

```text
owner | admin | learner
```

---

# Security rule

**Hiding an Admin button is not authorization.**

Frontend role checks are only presentation/UX.

Any future action that changes users, permissions, paid access, course records, content, or administrative state must be handled by a backend that:

1. validates the Clerk session/token;
2. resolves the authenticated Clerk user ID;
3. verifies the user role server-side;
4. authorizes the requested action;
5. records an audit event for privileged changes.

No Clerk secret key belongs in HTML, CSS, browser JavaScript, or any public GitHub Pages artifact.

---

# Owner bootstrap

The repository contains a manual GitHub Actions workflow:

```text
.github/workflows/clerk-role-admin.yml
```

It provides a controlled backend call to Clerk for role assignment.

Required repository secret:

```text
CLERK_SECRET_KEY
```

The secret must belong to the same Clerk instance as the site publishable key.

The workflow accepts:

- Clerk user ID (`user_…`);
- role (`owner`, `admin`, or `learner`);
- explicit confirmation string.

The workflow sends the role change directly to Clerk's Backend API. It does not place the secret or role-write capability into the public site.

## Bootstrap sequence

1. User creates/signs into the intended Clerk account.
2. Resolve the account's Clerk user ID.
3. Add `CLERK_SECRET_KEY` to GitHub Actions secrets if it is not already configured.
4. Run `Clerk role administration` manually.
5. Set the project owner's role to `owner`.
6. Refresh the Clerk session/user data.
7. Verify the frontend reads `publicMetadata.role === "owner"`.

The owner bootstrap should happen once for the initial owner, then owner/admin management should move behind a protected application backend rather than routine manual workflows.

---

# Frontend account layer

The next frontend refactor should extract Clerk handling from the general `blueprint-v4.js` file into a dedicated module:

```text
js/auth-v4.js
```

Responsibilities:

- initialize Clerk;
- render Sign In / Create Account / UserButton;
- expose signed-in user ID;
- expose application role from `publicMetadata.role`;
- default authenticated users without a recognized role to `learner`;
- dispatch a stable auth-ready event for other site modules;
- show/hide presentation elements based on role;
- never perform privileged role writes.

Suggested browser state:

```js
window.CrewBlueprintAuth = {
  ready: true,
  isSignedIn: true,
  userId: "user_…",
  role: "owner"
}
```

Role-aware elements may use declarative attributes such as:

```html
<a href="admin.html" data-role-allow="owner admin">Admin</a>
```

This remains a UX layer only. Protected data/actions still require backend authorization.

---

# Learner progress

Do not store the full learner-progress graph in Clerk public metadata.

Progress can grow to include:

- course enrollment/entry;
- last lesson viewed;
- lesson completion;
- assessment attempts;
- assessment best score;
- assessment pass state;
- content-version identifiers;
- optional practice/observation records.

Use a Crew Blueprint-owned data store and key records by Clerk user ID.

Conceptual model:

```text
Clerk
  → authentication
  → user ID
  → application role

Crew Blueprint learner database
  → course progress
  → assessment state
  → learner preferences
  → content/version progress references
```

Anonymous/local progress may remain as a temporary fallback. When a user signs in, the application should reconcile local browser progress with the account-backed record instead of silently discarding either side.

---

# Minimal progress data model

```text
learner_progress
  clerk_user_id
  course_id
  lesson_id
  lesson_completed_at
  last_viewed_at
  content_version

course_assessments
  clerk_user_id
  course_id
  attempts
  best_score
  passed_at
  assessment_version
```

Do not treat lesson completion or assessment pass as employer authorization, certification, licensing, union status, or permission to perform controlled work.

---

# Admin surface

A future `admin.html` may be publicly downloadable because GitHub Pages is static. Therefore:

- the HTML itself must contain no secrets or private data;
- it may render an admin shell only after Clerk auth resolves;
- all real admin data must come from protected backend endpoints;
- every backend endpoint must independently validate role/authorization.

The static route is a user interface, not a security boundary.

---

# Production migration

Before public account launch:

1. create/configure the Clerk production instance;
2. configure production domain/redirect URLs;
3. move the site to the production publishable key;
4. store the matching production secret only in backend/secret storage;
5. bootstrap the production owner account;
6. test sign-up, sign-in, sign-out, account management, session refresh, owner/admin/learner rendering, and protected API authorization;
7. update privacy/cookie/account disclosures for the actual data flow.

Development/test users and production users should not be assumed to be the same identity records.

---

# Implementation order

## Phase 1 — now

- document role model;
- add secure manual owner/admin role workflow;
- retain current sign-in UI;
- do not expose secrets.

## Phase 2

- extract `auth-v4.js`;
- render role-aware navigation/account UI;
- add account dashboard shell;
- create signed-in learner progress API/database.

## Phase 3

- protected admin endpoints;
- owner/admin dashboard;
- user-role management UI;
- account-backed progress reconciliation;
- production Clerk migration.

---

# Definition of done for issue #66

Issue #66 is complete only when:

- owner/admin/learner roles exist and are enforced server-side for privileged actions;
- the project owner's Clerk account is `owner`;
- role state is readable by the frontend;
- sign-in/create-account/sign-out/account management work across the V4 site;
- learner progress is associated with authenticated Clerk identity through a product-owned backend;
- secrets remain out of GitHub Pages/browser code;
- production Clerk configuration is ready before public launch.
