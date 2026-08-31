# The Crew Blueprint — Sitewide UI/UX & Copy Freshness Audit

**Prepared:** 2026-08-31  
**Audit branch:** `research/site-uiux-copy-freshness-2026-08-31`  
**Canonical source reviewed:** `main` at `1805e45808581fe6fff3bba6cd05a856399a1960`  
**Scope:** public marketing pages, learning entry points, shared theme/navigation/footer, representative course-shell patterns, contact/legal/trust pages, and public maintenance-state messaging.  
**Change rule:** audit only. No learner-facing page changes are made by this branch.

## Current public-state caveat

The public domain currently presents a maintenance/Coming Soon page rather than the full `main` site. Therefore this audit separates:

1. **Public maintenance UX** — what a visitor currently sees at the domain; and
2. **Full-site source UX/copy** — the current marketing/course source on `main` that would become the public experience when normal publication resumes.

A final visual-browser verification should be repeated against a rendered preview/full deployment after the refresh changes are implemented.

---

# Executive verdict

The site does **not** need a brand reset. The dark industrial foundation, gold identity, typography, card language, and course-shell direction are strong and appropriate for live-event production.

The site needs a **clarity, hierarchy, and voice refresh**.

The dominant problems are:

- too much repeated positioning language;
- too much internal/audit terminology exposed in learner-facing pages;
- a particularly repetitive About page with two consecutive introductions;
- inconsistent navigation and `Start Learning` destinations;
- a Courses page that currently reads partly like an owner/admin curriculum console rather than a learner catalog;
- safety/legal language repeated so often that it competes with the product story;
- stale wording that still describes existing department/leadership material as future work;
- a marketing UI built from many one-off page styles rather than a tighter reusable page system;
- partial accessibility polish on marketing pages compared with the stronger course shell;
- legal pages with mixed freshness: Privacy/Cookies are current and precise, while Accessibility/Affiliate material is older and more generic.

## Overall ratings

| Area | Current | Target | Main reason |
|---|---:|---:|---|
| Brand / visual identity | 8/10 | 9/10 | Strong palette/type; needs less templated repetition |
| Marketing information architecture | 6/10 | 9/10 | CTA/navigation inconsistency and admin language |
| Home page | 7/10 | 9/10 | Good core pitch; repetitive later sections |
| About page | 5/10 | 9/10 | Repeats the same thesis; lacks a human/industry story |
| Courses/catalog page | 5.5/10 | 9/10 | Valuable content buried under audit/status architecture |
| Learning dashboard | 8/10 | 9/10 | Clear map; wording can be simplified |
| Course shell | 8.5/10 | 9/10 | Strongest UX layer; good keyboard treatment/progress |
| Contact | 6/10 | 8.5/10 | Functional but cold and thin |
| Legal/trust | 7/10 | 9/10 | Privacy excellent; accessibility/affiliate need update |
| Accessibility implementation | 7/10 | 9/10 | Good fundamentals, but marketing focus/reduced-motion/skip-nav gaps |
| Voice / writing freshness | 5.5/10 | 9/10 | Repetition, institutional phrasing, internal jargon |

---

# P0 — fix before normal public relaunch

## 1. Separate learner-facing site from owner/audit language

The Courses page currently exposes labels and paragraphs such as:

- `Live for Owner Audit`
- `Current publication status`
- `public review copy`
- explanations of internal course-state distinctions

This is useful governance information but it weakens learner trust and creates cognitive overhead on a public catalog.

**Recommendation:**

- keep audit-state metadata in repository/audit views;
- public catalog should use learner states such as `Available`, `In Review`, `Coming Later`, or simply omit status when unnecessary;
- safety/authorization distinctions should remain, but expressed in learner language rather than owner-governance language.

## 2. Rewrite the About page from the ground up

The current About page begins with an image hero and then immediately presents a second large hero/introduction. Both sections make substantially the same promise: practical orientation, jobsite readiness, crew reliability, preparation, awareness, and limits of online learning.

The rest of the page repeats those themes again under:

- Why The Crew Blueprint exists
- What makes the approach different
- What this platform covers—and what it doesn't

The result is credible but circular.

### What the About page should answer instead

1. **What problem are we solving?**  
   New workers often learn basic context while already on the call. The platform exists to move some of that orientation before the call.

2. **Who is this for?**  
   New stagehands, general hands building department awareness, and workers moving deeper into live-production roles.

3. **How is the material built?**  
   Cross-check formal sources, manufacturer/system limits, employer/union material, and field-practice evidence. Where crews differ, teach the transferable principle and say what must be verified locally.

4. **What exists now?**  
   Fundamentals, Field Skills, department pathways and higher-level material are already represented in the project. Do not continue describing department/leadership work only as a future concept.

5. **What is deliberately outside the platform?**  
   Site/employer authorization, controlled specialist work, exact product procedures without exact documentation/review, and credentials issued by external bodies.

6. **Why should the learner trust it?**  
   Evidence discipline, field-practice corroboration, explicit uncertainty/variation, and ongoing practitioner review.

7. **What should the visitor do next?**  
   Start Fundamentals or explore the course map.

### Recommended About-page structure

- One hero only.
- `Why this exists` — short and concrete.
- `Built from the field, checked against the source` — explain evidence method in plain language.
- `What you can learn here` — current product, not future roadmap language.
- `What still has to happen on the job` — concise boundary section.
- Optional founder/origin block if the owner wants the brand to feel more personal.
- Single CTA strip.

## 3. Standardize navigation and the Start Learning path

Current templates are inconsistent:

- Home/About/Contact often send `Start Learning` directly to Stagehand Fundamentals.
- Courses sends `Start Learning` to `lms-dashboard.html`.
- The LMS dashboard sends its CTA to Part 1.
- Contact appears as a primary-nav item only on the Contact page itself.

**Recommended model:**

`Home | Courses | About | Contact` + `Start Learning`

`Start Learning` should always go to the same canonical learner entry point — preferably the four-part Fundamentals map/dashboard — and that page should provide the direct Part 1 action.

## 4. Remove stale/future wording that no longer matches the project

Examples that need freshness review:

- About: `future department, leadership, compliance-awareness, and worker-development pathways`
- About: `The long-term system supports department pathways...`
- Contact: `Social-media channels and additional contact options will be added in the future.`
- Courses: `Available Now` / public-review status language that conflicts with the current maintenance state.

The project has advanced beyond the language that was written when these pages were first created.

## 5. Decide publication-state truth before relaunch

The domain currently shows a Coming Soon/maintenance page while `main` contains the full site. Before relaunch, the product should have one clear public-state model:

- maintenance/closed;
- public review/beta;
- or normal learner publication.

Do not mix `Available Now`, `Live for Owner Audit`, and maintenance-state messaging across surfaces.

---

# P1 — high-value UI/UX refresh

## Global visual system

### Keep

- near-black/gunmetal background;
- gold/amber action color;
- Space Grotesk + Inter pairing;
- strong button sizes;
- clear cards/panels;
- sticky navigation;
- course-shell side navigation/progress architecture.

### Refresh

#### 1. Reduce card sameness

Many marketing sections use the same centered heading + muted paragraph + three/four bordered cards. This creates a template-generated rhythm.

Use more visual hierarchy:

- one strong text-led section;
- one evidence/proof strip;
- one progression graphic;
- one image/text split;
- one smaller card cluster;
- one CTA.

Not every idea needs a card.

#### 2. Reserve gold for meaning

Gold currently appears as CTA color, labels, card headings, borders, pills, active states and warnings. The identity remains strong, but the color loses hierarchy when everything important is gold.

Suggested priority:

1. actions / active state;
2. progress / selected state;
3. small identity accents;
4. warnings only when genuinely cautionary.

Use normal white text for more card headings.

#### 3. Vary the hero pattern

Home, About and Courses all use large full-width 16:9 image heroes with nearly identical overlay/content treatment.

- Keep the cinematic Home hero.
- Change About to a shorter split/origin/evidence hero.
- Make Courses more functional and catalog-oriented, with less vertical image space.

This will make pages feel purpose-built rather than templated.

#### 4. Replace the cropped-JPEG logo treatment

Navigation currently renders the wordmark by cropping a background position from a JPEG master asset. This is brittle, hard to maintain and can soften at different pixel densities.

Use a dedicated transparent logo/wordmark asset in an `<img>` or an SVG/PNG equivalent with explicit dimensions.

#### 5. Reduce section-divider fatigue

`cb-section` places a top border on essentially every section. On long pages this creates a stacked horizontal-band effect.

Use spacing, background changes and grouping instead of a border at every transition.

---

# Accessibility / interaction audit

## Strong existing work

- semantic nav labels;
- `aria-expanded` on mobile navigation;
- course consent uses a real modal dialog pattern, focus trapping and `inert` on background content;
- course-shell controls have explicit `:focus-visible` treatment;
- button/link targets are generally large enough for touch;
- course shell has responsive layout and mobile selection behavior.

## Gaps / refresh items

### 1. Add a skip link to public templates

Inspected marketing/legal templates do not provide an obvious `Skip to main content` control. With sticky navigation and repeated footer/legal links, this is worth adding globally.

### 2. Add global focus-visible treatment

Marketing/global theme has focused treatment for some nav states, but the course shell is much more deliberate. Standardize visible keyboard focus for:

- `.cb-btn`
- footer links
- contact email CTA
- cards that become links
- cookie-notice controls
- any expandable/clickable catalog items.

### 3. Add reduced-motion handling

Both global and course styles use smooth scrolling/transitions. No `prefers-reduced-motion` rule was found in the audited style layers.

Add a global reduced-motion block that disables smooth scrolling and nonessential transforms/transitions for users who request it.

### 4. Update the Accessibility Statement

The current statement is dated June 10, 2026 and uses vague phrases such as `where feasible` and `where practical`.

After the refresh, replace this with a factual statement describing what has actually been checked:

- keyboard navigation;
- visible focus;
- heading structure;
- alt text/decorative-image treatment;
- contrast;
- zoom/reflow;
- reduced motion;
- course dialog behavior;
- contact path for issues.

Avoid claiming conformance unless it has actually been tested to that standard.

### 5. Hero alt strategy

For photographic heroes that do not add information beyond the adjacent heading, consider empty alt text so screen readers do not hear redundant scene descriptions. Keep meaningful alt text when the image itself conveys instructional/contextual content.

---

# Information architecture audit

## Current strengths

- simple top-level site;
- Fundamentals has a clear four-part entry map;
- progression from Foundation → Field Skills → Departments is conceptually strong;
- breadcrumbs exist on learning surfaces;
- course shell has clear position/progress.

## Current weaknesses

### Courses page is trying to serve two audiences

It simultaneously acts as:

- learner storefront;
- curriculum architecture map;
- owner audit console;
- public safety/governance disclosure.

That creates a very long, dense catalog.

### Recommended split

**Public Courses page:**

- Start Here — Fundamentals;
- Field Skills;
- Choose a Department;
- Leadership / Production paths;
- concise training-limit note;
- CTA.

**Owner/evidence view:**

- publication status;
- audit state;
- source completeness;
- authority gates;
- matrix/competency coverage;
- planned vs built.

The owner view should eventually be generated from the matrix rather than manually embedded into public course copy.

---

# Page-by-page copy audit

## Home — refresh, do not rebuild

### Strong copy to preserve

- `Learn how to show up ready for real live event work.` — clear, although `real` can be removed if desired.
- `Built for the work behind the show.` — strong.
- `Get called back` — authentic and benefit-oriented.
- `Built for the people who build the show.` — strong brand line.

### Problems

The page repeats the same value proposition in slightly different forms:

- practical training;
- jobsite expectations;
- safety/timing/communication;
- prepared/reliable;
- get called back;
- training limits.

The safety limitation also appears as a dedicated section and again in the footer.

### Recommended Home hierarchy

1. Hero: one sentence + Start Learning / Explore Courses.
2. `What a production call feels like` progression strip.
3. `What you'll learn before your first/next call` — three concrete benefits.
4. Fundamentals feature.
5. `Where it can lead` — Field Skills + departments.
6. One concise training-limits statement.

Remove repetitive explanatory sections.

## About — highest copy priority

### Current issue

It reads like a legal-safe product description instead of a compelling reason for the brand to exist.

The page says variations of:

- practical training platform;
- jobsite readiness;
- crew reliability;
- awareness before speed;
- real jobsite expectations;
- orientation not authorization;

multiple times.

### Tone target

The About page should sound like someone who understands the field explaining why the platform had to exist — calm, specific, useful, and evidence-aware.

### Phrases to retire or sharply reduce

- `complete learning ecosystem`
- `expandable training system`
- `worker-development pathways`
- `compliance-awareness`
- `new and developing live event workers` repeated on every page
- `practical training platform` repeated sitewide
- `jobsite readiness` repeated as a catch-all

### Better vocabulary

Use concrete production language:

- call time;
- load-in;
- show call;
- load-out;
- crew lead;
- shop/prep;
- department;
- handoff;
- venue;
- case/cable/gear;
- field practice;
- current system/current crew;
- sources and manufacturer limits.

## Courses — major learner-facing cleanup

### Keep

- Fundamentals feature;
- Field Skills grouping;
- department cards;
- course-level progression;
- explicit authority boundaries where needed.

### Remove from normal learner presentation

- `Live for Owner Audit`
- owner-review copy labels;
- long governance explanations;
- internal audit terminology;
- detailed architecture paragraphs that belong in owner/evidence views.

### Copy freshness

`Course 1 · Assigned Work / Course 2 · Systems / Course 3 · Design` is clear internally but may not be the final learner taxonomy. The research program explicitly leaves final curriculum architecture open. Do not over-invest in polished marketing around this hierarchy until the post-matrix architecture decision.

## LMS dashboard

This is one of the clearest pages.

### Keep

- four focused parts;
- visible module counts;
- simple cards;
- direct CTA per part;
- evidence link.

### Refresh wording

- `split into four focused parts` is functional but mechanical; use a learner benefit first.
- `Continue into extra training` undersells Field Skills; rename to `Build practical field skills` or `Continue into Field Skills`.
- `Canonical course sequence` is internal/governance wording. Public learners only need to know that progress is saved/mapped consistently.

## Contact

Current page is functional but bureaucratic.

Current phrases such as `enough detail for the request to be reviewed` sound like a ticketing system rather than a small industry training brand.

Suggested structure:

- `Have a question, correction, partnership idea, or field-practice note?`
- email CTA;
- short prompt: tell us what page/topic you're writing about;
- remove the promise that social channels/contact options will be added later unless there is a real committed channel.

## Maintenance page

Current public message is honest but generic:

- `Coming Soon`
- `We are rebuilding the site...`
- `Full access will return once...`

A fresher version should say what is actually happening without making a date promise:

- the training library is temporarily offline while course structure and accuracy are being reviewed;
- the project is actively being rebuilt around clearer learning paths and field-verified material;
- provide a contact email if appropriate.

Avoid `Coming Soon` as the primary headline if the project already exists; `Site Update in Progress` or `Training Library Under Review` is more accurate.

---

# Voice and writing system

## Recommended public voice

**Direct. Concrete. Field-aware. Calm. Specific.**

The voice should sound like useful pre-call guidance from someone who respects both the learner and the crew — not a corporate LMS, not a legal waiver, and not a social-media hype account.

## Rules

1. Prefer concrete nouns/verbs over abstract program language.
2. One main claim per paragraph.
3. Use industry vocabulary when it improves clarity, then explain it once.
4. Do not use `practical`, `prepared`, `reliable`, `real`, or `jobsite` as filler words.
5. Keep safety boundaries visible but centralized.
6. Say when something varies by crew/site/system rather than writing a universal rule.
7. Do not expose internal matrix/governance terminology to normal learners.
8. Avoid inflated claims such as `industry standard`, `certified`, `professional-ready`, or `complete` unless independently supported.
9. Use `you` when helping a learner act or choose; use the brand name sparingly.
10. Shorten CTAs: `Start Fundamentals`, `Explore Courses`, `See Field Skills`, `Check Sources`.

## Common current patterns to reduce

- `The Crew Blueprint is...` openings;
- `built around...` repeated across sections;
- three-part noun lists used in every paragraph;
- defensive `not a substitute for...` copy repeated outside the dedicated limits area;
- future-roadmap language on pages describing already-built material;
- owner/internal words: `canonical`, `owner audit`, `publication state`, `systems reasoning`, `bounded decision responsibility`, `evidence state`.

---

# Legal / trust-page freshness

## Privacy Policy — strong/current

The August 30 Privacy Policy is unusually clear about what the current static site actually collects and does not collect. Preserve this `describe current reality first` approach.

## Cookies Notice — accurate but simplify the UI wording

The underlying notice accurately explains local browser storage rather than pretending tracking cookies exist. Public banner copy can be shortened to:

`This site uses local browser storage for essential functions. No analytics or advertising tracking is used.`

The legal page can retain details.

## Terms — current but broader than the current product

The Terms are dated August 30 and anticipate accounts, purchases and services that do not currently exist. This is legally understandable but can feel mismatched beside the Privacy Policy's precise `static site today` framing.

Before paid/accounts functionality launches, have the final terms reviewed for whether prospective sections should remain or activate only with those features.

## Accessibility Statement — stale/high priority

June 10 statement is the oldest major trust page and too generic. Refresh after the actual UI accessibility fixes and testing.

## Affiliate Disclosure — stale/high priority

June 10 disclosure says the site `may contain affiliate links` and that commissions support the site. If no affiliate links are currently active, say so explicitly or remove the footer prominence until an actual material relationship exists. Avoid making hypothetical monetization look like current business activity.

---

# SEO / social / technical freshness

## 1. Verify canonical URL strategy

Static source files use `.html` links while several canonical tags point to clean trailing-slash URLs such as:

- `/about/`
- `/courses/`
- `/privacy-policy/`

Before relaunch, verify those clean routes actually resolve correctly in the final hosting configuration. Otherwise canonical tags can point search engines to non-equivalent or missing URLs.

## 2. Social metadata consistency

Home has fuller OpenGraph/Twitter metadata. About/Courses/legal pages are less complete.

Create one shared social-preview asset and normalize:

- `og:image`
- Twitter image/card fields where useful;
- titles/descriptions that reflect the refreshed voice.

## 3. Search titles

Current titles are clean but generic. Once public structure is stable, consider search-intent versions such as:

- `Stagehand & Live Event Training | The Crew Blueprint`
- `Live Event Training Courses | The Crew Blueprint`

Do this after the curriculum/product naming is finalized.

---

# Performance / implementation hygiene

## Good

- WebP marketing imagery is reasonably sized;
- static HTML/CSS/JS is lightweight;
- no analytics/ad stack currently adds weight;
- fonts are preconnected;
- course shell is mostly reusable.

## Refresh

- Move repeated page-level hero CSS into shared components/tokens.
- Reduce inline `style=` use on marketing/LMS pages.
- Replace duplicated header/footer markup eventually with a build/include process if the project adopts one; until then, maintain a template/source-of-truth snippet and test nav parity.
- Replace logo background-cropping hack.
- Add a simple automated link/canonical/nav consistency check to CI before normal publication.

---

# Recommended refresh sequence

## Wave 1 — public voice + IA

1. Rewrite About completely.
2. Tighten Home.
3. Simplify Courses into a learner catalog.
4. Standardize nav and Start Learning destination.
5. Refresh Contact and maintenance message.
6. Remove stale future/internal audit wording.

## Wave 2 — shared UI polish

1. Shared hero variants.
2. Shared page-intro component.
3. Reduced card repetition.
4. Dedicated logo asset.
5. Footer simplification.
6. Global focus styles + skip link + reduced-motion handling.
7. Mobile footer/navigation review.

## Wave 3 — trust/legal freshness

1. Accessibility Statement after testing.
2. Affiliate disclosure/current-state correction.
3. Verify Privacy/Cookies against final deployment behavior.
4. Recheck Terms when accounts/payments become real.
5. Canonical/OG/social metadata consistency.

## Wave 4 — learning/catalog alignment

After the current evidence matrix and curriculum-architecture passes are complete:

1. update public course names/taxonomy to match the final architecture;
2. remove temporary internal C1/C2/C3 language if the final learner model changes;
3. separate learner-facing progression from owner/evidence progression;
4. generate owner/audit states directly from the matrix rather than hand-writing them into public pages.

---

# What should not change

Do **not** throw away the current visual identity. Specifically preserve:

- black/gunmetal + gold palette;
- strong high-contrast feel;
- industrial production photography;
- Space Grotesk/Inter unless there is a clear brand reason to change;
- the compact course shell;
- the idea of visible learning progression;
- the direct `get called back / show up ready / know the call` field-oriented benefit language;
- explicit training/authority boundaries;
- evidence transparency.

The refresh should make the site feel **more specific and more human**, not more polished-but-generic.

---

# Freshness definition for the next implementation pass

A page is `fresh` when:

- its claims match what currently exists in the project;
- it does not expose internal owner/governance language to learners;
- it has one clear purpose and one primary CTA;
- it uses the current public voice;
- repeated safety/legal text has been consolidated appropriately;
- navigation and learner-entry links are consistent;
- accessibility interaction patterns are current;
- canonical/social metadata reflects the actual published route;
- future promises are removed unless they represent an actual planned public feature;
- the page can be understood quickly by a new live-event worker on a phone.

## Recommended immediate implementation target

Start with **About → Home → Courses → global nav/footer/theme → Contact → maintenance page → trust/legal pages**.

That order fixes the brand voice first, then propagates it through the rest of the site before the final curriculum architecture changes course naming.