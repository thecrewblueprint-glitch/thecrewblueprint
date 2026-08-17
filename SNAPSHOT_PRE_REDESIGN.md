# The Crew Blueprint — Pre-Redesign Snapshot
## Current State Documentation
**Date:** 2026-08-17  
**Purpose:** Capture existing architecture before design implementation begins

---

## 1. Current Directory Structure

```
thecrewblueprint/
├── index.html                    (homepage)
├── courses.html                  (course catalog)
├── about.html                    (about page)
├── resources.html                (resource hub)
├── contact.html                  (contact form)
├── privacy-policy.html           (legal)
├── terms-and-conditions.html     (legal)
├── cookies-notice.html           (legal)
├── accessibility-statement.html  (legal)
├── limitation-of-liability.html  (legal)
├── affiliate-disclosure.html     (legal)
│
├── courses/
│   ├── stagehand-fundamentals.html
│   ├── pathway-lighting-01-support.html
│   ├── pathway-lighting-02-production-flow.html
│   ├── pathway-video-01-support.html
│   ├── pathway-video-02-led-video-systems.html
│   ├── pathway-audio-01-support.html
│   ├── pathway-staging-carpentry-01-support.html
│   ├── pathway-backline-props-wardrobe-01-support.html
│   ├── module-1-welcome.html
│   ├── module-2-safety-mindset.html
│   ├── module-3-ppe.html
│   ├── [... additional modules and lessons ...]
│   └── _archived/
│
├── resources/
│   └── [resource content files]
│
├── images/
│   ├── logo.png
│   ├── signals/
│   └── [SVG diagrams and technical graphics]
│
├── css/
│   └── theme.css  (master stylesheet)
│
├── js/
│   └── main.js    (navigation toggle, etc.)
│
└── design/
    └── [design assets, reference files]
```

---

## 2. Current Visual Design System

### Color Palette (Design Tokens)
- **Primary background:** `#05060a` (near-black)
- **Elevated surfaces:** `#0d1117`, `#141a21`, `#181f27`, `#1f262e` (stepped grays)
- **Primary action:** `#f5b400` (Crew Blueprint gold)
- **Light text:** `#f4f6f8` (off-white)
- **Muted text:** `#b8c1cc`, `#a7b0ba` (blue-gray)
- **Borders:** `rgba(255,255,255,0.12)` to `rgba(255,255,255,0.18)`
- **Gold variants:** `#ffd45a` (bright), `#ffcf3a` (amber)

### Typography
- **Display (headings):** Space Grotesk (500, 600, 700)
- **Body:** Inter (400, 500, 600, 700)
- **Letter-spacing on headlines:** -0.03em to -0.05em

### Layout Tokens
- **Max width:** 1280px
- **Nav height:** 76px
- **Border radius:** 8px (sm), 14px (md), 20px (lg), 999px (pill)
- **Shadows:** sm/md/lg opacity-based black shadows

### Existing Components
- `.cb-btn` (primary, secondary)
- `.cb-card` (generic card container)
- `.cb-panel` (elevated panel)
- `.cb-label` (eyebrow tag)
- `.cb-pill` (inline badge)
- `.cb-warning` (warning box)
- `.cb-actions` (flex button container)
- `.cb-grid-2`, `.cb-grid-3`, `.cb-grid-4` (responsive grids)
- `.cb-list` (styled list)
- `.cb-icon-row`, `.cb-icon-item` (icon groups)
- `.cb-section`, `.cb-section-intro` (content sections)
- `.cb-dept-card`, `.cb-dept-grid` (department pathway cards)
- `.cb-course-card`, `.cb-course-meta` (course cards)
- `.cb-hero` (page hero section)
- `.site-nav`, `.nav-inner`, `.nav-links` (navigation)
- `.site-footer`, `.footer-layout`, `.footer-cols` (footer)

---

## 3. Current Page Structures

### index.html (Homepage)
**Current structure:**
1. Primary navigation (sticky)
2. Hero section (2-column grid: headline + sidebar panel)
   - Headline: "Learn how to show up ready for real live event work"
   - Sidebar: "First Training Path" intro to Stagehand Fundamentals
   - Icon row: Load-In / Show Call / Load-Out
   - Primary CTA: "Start Stagehand Fundamentals"
   - Secondary CTA: "Learn About The Crew Blueprint"

3. Section: "Built for the work behind the show"
   - 3-card grid: Know the call / Work with awareness / Get called back

4. Section: "Available Course" (Stagehand Fundamentals card)
   - Large course card with meta tags and feature list

5. Section: "Who this is for"
   - 4-card grid: New stagehands / Developing workers / Event labor crews / Future paths

6. Section: "Training that respects the limits of online learning"
   - Warning box with safety disclaimer

7. Section: "Also available now" (Resource Hub CTA)

8. Section: "What is coming next"
   - 2-card grid: Department Basics / Career Progression

9. Footer

**Key observations:**
- Heavy use of card-based layout
- Multiple repetitive sections
- Limited visual hierarchy
- No contextual photography
- Lacks production-environment visual grounding

---

### courses.html (Course Catalog)
**Current structure:**
1. Primary navigation
2. Hero section (single column)
   - Headline: "Training for live event workers who want to show up prepared"
   - Supporting copy
   - Primary/secondary CTAs

3. Section: "Stagehand Fundamentals" (large course card)
   - Features list
   - Meta tags
   - View Course CTA

4. Section: "Department Pathways"
   - Explanatory text for Course 1 and Course 2 with mental models
   - 5-column grid of department cards (Lighting, Video, Audio, Staging, Backline)
   - Each department card shows:
     - Department name
     - Department tagline
     - Course 1 link
     - Course 2 link (or "Coming Soon" if not built)

5. Section: "Future training paths"
   - 2-card grid: Specialized Career Development / Leadership Preparation

6. Footer

**Key observations:**
- Catalog-like presentation of courses
- No visual context for production environment
- Department cards follow repetitive pattern
- "Coming Soon" items scattered throughout
- No systems-thinking visual

---

### resources.html (Resource Hub)
**Current structure:**
1. Primary navigation
2. Hero section
3. Brief intro to Resource Hub
4. Resource content (varies by resource type)
5. Footer

**Current state:**
- Minimal visual differentiation from other pages
- No production-environment context photography
- Resources presented in text-heavy sections

---

### about.html (About Page)
**Current state:**
- Basic informational page
- Explains purpose and approach
- No systems-perspective visual
- Relatively light on visual hierarchy

---

### Course/Module Pages (e.g., stagehand-fundamentals.html)
**Current structure:**
1. Navigation
2. Breadcrumb
3. Course/module hero with title
4. Course meta (level, tags, estimated time)
5. Content sections with:
   - Headings
   - Body copy
   - Inline SVG diagrams
   - Lists
   - Call-out panels (warnings, notes)
6. Knowledge check (quiz/details sections)
7. Key takeaways
8. Sources/references
9. Continue Learning (next/previous navigation)
10. Footer

**Key observations:**
- Semantic components (Field Note, Why This Matters, etc.) are defined in text, not as reusable styled components
- Some pages have mental models added (after previous session's work)
- Course 2 pages have "What this course does NOT do" disclaimers (after previous session's work)
- SVG diagrams are inline (good for technical accuracy)
- Layout is readable but lacks visual distinction between lesson types

---

## 4. Current Navigation & Site Map

**Primary Navigation:**
- Home
- About
- Courses
- Resources
- Contact
- Start Learning (CTA button)

**Sitemap:**
```
Home
├── About
├── Courses
│   ├── Stagehand Fundamentals
│   │   ├── Module 1: Welcome
│   │   ├── Module 2: Safety Mindset
│   │   ├── Module 3: PPE
│   │   ├── [... modules 4-10 ...]
│   │   └── Department Basics (Module 7)
│   │
│   ├── Department Pathways
│   │   ├── Lighting
│   │   │   ├── Course 1: Supporting a Lighting Hang
│   │   │   └── Course 2: Lighting Production Flow
│   │   ├── Video
│   │   │   ├── Course 1: Supporting an LED Video Wall
│   │   │   └── Course 2: Large-Scale LED Video Systems
│   │   ├── Audio
│   │   │   ├── Course 1: Supporting an Audio Load-In
│   │   │   └── Course 2: Coming Soon
│   │   ├── Staging & Carpentry
│   │   │   ├── Course 1: Supporting Staging & Carpentry
│   │   │   └── Course 2: Coming Soon
│   │   └── Backline/Props/Wardrobe
│   │       ├── Course 1: Supporting Backline, Props & Wardrobe
│   │       └── Course 2: Coming Soon
│   │
│   └── Future Paths
│       ├── Specialized Career Development
│       └── Leadership Preparation
│
├── Resources
│   ├── Learn
│   ├── Quick Reference
│   └── Tools
│
└── Contact & Legal
    ├── Contact
    ├── Privacy Policy
    ├── Terms & Conditions
    ├── Cookies Notice
    ├── Accessibility Statement
    ├── Limitation of Liability
    └── Affiliate Disclosure
```

---

## 5. Current CSS Architecture

**theme.css structure:**
1. Fonts (loaded from Google Fonts)
2. Design tokens (CSS custom properties)
3. Reset & base styles
4. Navigation styles
5. Logo styling
6. Mobile menu toggle
7. Layout primitives (.container, .cb-wrap, .cb-page)
8. Typography (.cb-section, headings, etc.)
9. Component styles (buttons, cards, panels, etc.)
10. Grid systems (.cb-grid-2, etc.)
11. Utility classes
12. Footer styling
13. Responsive media queries

**Size:** ~2000+ lines of CSS

**Approach:** Single global stylesheet with page-specific overrides via inline `<style>` tags where needed

---

## 6. Current JavaScript

**main.js:**
- Mobile navigation toggle (hamburger menu)
- Simple scroll behavior
- No complex interactions, animations, or state management

---

## 7. Image & Asset Status

**Current images:**
- Logo (logo.png)
- SVG technical diagrams (inline, throughout courses)
- No environmental/contextual photographs

**Pre-redesign images ready for integration:**
- IMG-01: Homepage hero (arena load-in context)
- IMG-02: Courses context (arena load-in with multiple workers)
- IMG-03: Production systems perspective (wide elevated view)
- IMG-04: Resource hub/field context (backstage work area)
- IMG-05: Additional outdoor festival stage setup

**Image storage:** To be placed in `/images/site/` directory with WebP format

---

## 8. Existing Content Architecture (Valid & Preserved)

**Canonical documentation:**
- 01_learning_model.md (updated in previous session)
- 03_curriculum.md (updated in previous session)
- 12_learning_landscape_registry.md (created in previous session)

**Learning Foundation (all valid):**
- Three-tier progression model (Fundamentals → Course 1 → Course 2)
- Mental models for each tier
- Clear Course 1/Course 2 definitions
- Explicit "What this course does NOT do" boundaries

**Course Content (all valid):**
- Stagehand Fundamentals modules 1-10 (complete)
- Lighting pathway (Course 1 & 2 complete)
- Video pathway (Course 1 & 2 complete)
- Audio pathway (Course 1 complete, Course 2 queued)
- Staging & Carpentry pathway (Course 1 complete, Course 2 queued)
- Backline/Props/Wardrobe pathway (Course 1 complete, Course 2 queued)

**Course 2 research packages (all valid):**
- Lighting systems research (integrated into Course 2)
- Video systems research (integrated into Course 2)
- Audio systems research (queued for Course 2)
- Staging systems research (queued for Course 2)
- Production systems understanding (queued for advanced tiers)

---

## 9. What Will Change (According to Design Spec)

### Phase 1: Design System Normalization
- Audit & formalize reusable classes
- Establish Blueprint Line System visual motif
- Create semantic lesson components (.cb-field-note, .cb-why-matters, etc.)
- Define photography component
- No color token changes (preserve existing palette)

### Phase 2: Homepage Restructure
- Integrate IMG-01 hero
- Replace repetitive card sections with production-call lifecycle visual
- Add Course 1 → Course 2 progression visual
- Reduce card density
- Strengthen visual hierarchy

### Phase 3: Courses Page Restructure
- Integrate IMG-02
- Convert from catalog mental model to learning map mental model
- Add department path map visual
- Add career progression map
- Replace "Coming Soon" scattered tags with unified visual approach
- Add systems-perspective framing

### Phase 4: Learning Shell
- Establish desktop 3-column layout (left nav, center content, optional right context)
- Establish mobile-optimized learning navigation
- Implement semantic lesson components
- Add progress visualization
- Implement previous/next lesson navigation

### Phase 5: Resources Page
- Integrate IMG-04
- Separate "Learn" and "Quick Reference" intents
- Improve field usability
- Add search (when content volume warrants)
- Optimize for mobile field access

### Phase 6: About/Systems Page
- Integrate IMG-03
- Strengthen systems-perspective communication
- Clarify online-learning boundaries
- Connect to broader learning ecosystem

### Phase 7: QA & Polish
- Test desktop, tablet, mobile
- Keyboard navigation
- Screen reader accessibility
- Link validation
- Image loading performance
- Cross-browser compatibility

---

## 10. What Will NOT Change

- Existing color palette (gold/black/off-white remain)
- Typography (Space Grotesk + Inter)
- Course content structure or learning objectives
- Navigation framework (primary nav stays, learning shell added)
- Footer structure
- Accessibility standards already met
- Technical SVG diagrams (preserved as-is)
- Existing responsive patterns that work

---

## 11. Preserved Components (Continue Using)

All existing CSS components will remain available:
- `.cb-btn`, `.cb-btn-primary`, `.cb-btn-secondary`
- `.cb-card`, `.cb-panel`
- `.cb-label`, `.cb-pill`
- `.cb-warning`
- `.cb-actions`
- `.cb-grid-*` (all grid variations)
- `.cb-list`, `.cb-icon-row`
- `.cb-section`, `.cb-section-intro`
- `.site-nav`, `.site-footer`
- All existing media queries and responsive behaviors

These will be enhanced, not replaced.

---

## 12. Key Metrics (Current State)

- **Main stylesheet size:** ~2000+ lines
- **Homepage sections:** 8
- **Card-based layouts:** ~15+ instances
- **Inline SVG diagrams:** 50+ (in courses)
- **Department pathways:** 5 (Lighting, Video, Audio, Staging, Backline)
- **Course pages:** 8 (Stagehand Fundamentals + 7 pathways)
- **Module/lesson pages:** 40+ (Stagehand + pathway modules)
- **Pages with inline styles:** ~20+ (page-specific overrides)

---

## 13. Next Steps (Implementation Sequence)

1. ✅ Snapshot current state (THIS DOCUMENT)
2. Phase 1: Design system normalization
   - Create Blueprint Line System SVG components
   - Define semantic lesson components in CSS
   - Create photography component styles
3. Phase 2: Homepage implementation
4. Phase 3: Courses page implementation
5. Phase 4: Learning shell implementation
6. Phase 5: Resources page implementation
7. Phase 6: About page implementation
8. Phase 7: QA & deployment
9. Link checking & 50yearroadmap sync

---

**End of Snapshot**  
Status: Ready to begin Phase 1 implementation
