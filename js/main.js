// The Crew Blueprint — main.js
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const cbMainScriptSrc = document.currentScript ? document.currentScript.src : '';
const cbSiteRoot = cbMainScriptSrc.replace(/js\/main\.js.*$/, '');

(function loadClientPolish() {
  if (document.querySelector('link[data-cb-client-polish]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = cbSiteRoot + 'css/client-polish.css';
  link.setAttribute('data-cb-client-polish', 'true');
  document.head.appendChild(link);
}());

function closeNavigation() {
  if (!navToggle || !navLinks) return;
  navLinks.classList.remove("open");
  navToggle.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

if (navToggle && navLinks) {
  navToggle.setAttribute("aria-expanded", navToggle.getAttribute("aria-expanded") || "false");

  // Keep client navigation focused. Internal curriculum/review tooling is direct-access only.
  navLinks.querySelectorAll('a[href$="curriculum-map.html"]').forEach((link) => link.closest('li')?.remove());

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
      closeNavigation();
    }
  });
}

function cbText(node) {
  return (node?.textContent || '').replace(/\s+/g, ' ').trim();
}

function cbHideCardByHeading(root, names) {
  const wanted = names.map((name) => name.toLowerCase());
  root.querySelectorAll('h2, h3, h4').forEach((heading) => {
    const text = cbText(heading).toLowerCase();
    if (!wanted.includes(text)) return;
    const block = heading.closest('.cb-dept-card, .cb-card, .rung, article, li');
    if (block) block.setAttribute('data-cb-public-hidden', 'true');
  });
}

function cbTuneCoursesPage() {
  if (!/\bcourses\.html$/.test(location.pathname) && !/\/courses\/?$/.test(location.pathname)) return;
  document.body.classList.add('cb-client-courses');

  document.querySelectorAll('.cb-owner-audit-notice').forEach((node) => {
    node.setAttribute('data-cb-public-hidden', 'true');
  });

  const advanced = document.getElementById('advanced-training');
  if (advanced) advanced.setAttribute('data-cb-public-hidden', 'true');

  const layers = document.getElementById('learning-layers');
  if (layers) {
    const heading = layers.querySelector(':scope > h2');
    if (heading) heading.textContent = 'Choose what to learn next';
    const intro = layers.querySelector(':scope > .cb-section-intro');
    if (intro) {
      intro.textContent = 'Start with the foundation, use Field Skills for common ground-level work, then choose a department starter when you need context for assigned support work. Advanced systems and responsibility material stays out of the public starter catalog until it is ready for owner review and release.';
    }
  }

  const dept = document.getElementById('department-pathways');
  if (dept) {
    const kicker = dept.querySelector('.cb-tier-kicker');
    const title = dept.querySelector('.cb-tier-heading h3');
    const desc = dept.querySelector('.cb-tier-heading p');
    const status = dept.querySelector('.cb-tier-status');
    if (kicker) kicker.textContent = 'Department Starters';
    if (title) title.textContent = 'Start with the first course in the department';
    if (desc) desc.textContent = 'These are the current entry courses for assigned support work. Systems, design, lead, supervisor, infrastructure, and specialist material is intentionally kept out of this public starter view.';
    if (status) status.textContent = 'Available';

    cbHideCardByHeading(dept, ['Electrics', 'Rigging']);

    dept.querySelectorAll('.cb-dept-card').forEach((card) => {
      card.querySelectorAll('.cb-dept-course-list li').forEach((item) => {
        if (!/Course\s*1\b/i.test(cbText(item))) item.setAttribute('data-cb-public-hidden', 'true');
      });
    });

    const summary = dept.querySelector('.cb-tier-toggle > span');
    if (summary) summary.innerHTML = 'Explore department starter courses <span class="cb-tier-toggle-count">&mdash; Lighting, Video, Audio, Staging &amp; Carpentry, Backline / Props / Wardrobe</span>';
  }

  const field = document.getElementById('field-skills-courses');
  if (field) {
    const status = field.querySelector('.cb-tier-status');
    if (status) status.textContent = 'Available';
    const title = field.querySelector('.cb-tier-heading h3');
    if (title) title.textContent = 'Practical field skills you can review as you grow';
    const desc = field.querySelector('.cb-tier-heading p');
    if (desc) desc.textContent = 'Short, focused references for common stagehand tasks and work habits. Use them to understand the task, vocabulary, boundaries, and what to ask before supervised practice.';
  }
}

function cbTuneHomePage() {
  if (!/\/(?:index\.html)?$/.test(location.pathname)) return;
  document.body.classList.add('cb-client-home');

  cbHideCardByHeading(document, ['Electrics', 'Rigging']);

  const ladderHeading = Array.from(document.querySelectorAll('h1, h2, h3')).find((node) => /how the ladder works/i.test(cbText(node)));
  if (ladderHeading) {
    ladderHeading.textContent = 'How to use The Crew Blueprint';
    const section = ladderHeading.closest('section, .section, .cb-section, .ladder-band') || ladderHeading.parentElement;
    if (section) {
      const copy = Array.from(section.querySelectorAll('p')).find((p) => cbText(p).length > 20);
      if (copy) {
        copy.classList.add('cb-honest-ladder-copy');
        copy.textContent = 'Start with Stagehand Fundamentals. Add Field Skills when you want more context for common ground-level work. Then choose a department starter course when you need to understand the support role around that department. The library will grow as research, field review, and owner approval support it—not on a fixed release schedule.';
      }
      section.querySelectorAll('.rung, .tier, .ladder-step, [class*="rung"], [class*="tier-card"]').forEach((item) => {
        if (/lead|supervisor|electrics|rigging/i.test(cbText(item))) item.setAttribute('data-cb-public-hidden', 'true');
      });
    }
  }
}

function cbTuneAboutPage() {
  if (!/\babout\.html$/.test(location.pathname) && !/\/about\/?$/.test(location.pathname)) return;
  document.body.classList.add('cb-client-about');
}

function cbTuneFooter() {
  document.querySelectorAll('.site-footer .footer-layout').forEach((layout) => layout.classList.add('cb-footer-flipped'));
}

cbTuneCoursesPage();
cbTuneHomePage();
cbTuneAboutPage();
cbTuneFooter();

// Cookie notice
(function () {
  if (localStorage.getItem('cbCookieAck')) return;
  var notice = document.createElement('div');
  notice.className = 'cookie-notice';
  notice.setAttribute('role', 'region');
  notice.setAttribute('aria-label', 'Cookie notice');
  notice.innerHTML =
    '<p>This site uses essential cookies and browser storage for basic functionality only. No tracking or advertising cookies are used. <a href="' + cbSiteRoot + 'cookies-notice.html">Learn more</a></p>' +
    '<button type="button" class="cookie-notice-dismiss">Got it</button>';
  document.body.appendChild(notice);
  notice.querySelector('.cookie-notice-dismiss').addEventListener('click', function () {
    notice.remove();
    localStorage.setItem('cbCookieAck', '1');
  });
}());
