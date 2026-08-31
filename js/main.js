// The Crew Blueprint — main.js
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const cbMainScriptSrc = document.currentScript ? document.currentScript.src : '';
const cbSiteRoot = cbMainScriptSrc.replace(/js\/main\.js.*$/, '');

function closeNavigation() {
  if (!navToggle || !navLinks) return;
  navLinks.classList.remove("open");
  navToggle.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

if (navToggle && navLinks) {
  navToggle.setAttribute("aria-expanded", navToggle.getAttribute("aria-expanded") || "false");

  if (!navLinks.querySelector('a[href$="curriculum-map.html"]')) {
    const li = document.createElement('li');
    li.innerHTML = '<a href="' + cbSiteRoot + 'curriculum-map.html">Full Curriculum</a>';
    const cta = navLinks.querySelector('.nav-cta')?.closest('li');
    if (cta) navLinks.insertBefore(li, cta); else navLinks.appendChild(li);
  }

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
