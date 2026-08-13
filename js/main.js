// The Crew Blueprint — main.js
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

function closeNavigation() {
  if (!navToggle || !navLinks) return;
  navLinks.classList.remove("open");
  navToggle.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

if (navToggle && navLinks) {
  navToggle.setAttribute("aria-expanded", navToggle.getAttribute("aria-expanded") || "false");

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

  // Compute the site root relative to this script's own location, so the
  // "Learn more" link works the same whether main.js loaded from a root
  // page ("js/main.js") or a nested page ("../js/main.js").
  var scriptSrc = document.currentScript ? document.currentScript.src : '';
  var siteRoot = scriptSrc.replace(/js\/main\.js.*$/, '');

  var notice = document.createElement('div');
  notice.className = 'cookie-notice';
  notice.setAttribute('role', 'region');
  notice.setAttribute('aria-label', 'Cookie notice');
  notice.innerHTML =
    '<p>This site uses essential cookies and browser storage for basic functionality only. No tracking or advertising cookies are used. <a href="' + siteRoot + 'cookies-notice.html">Learn more</a></p>' +
    '<button type="button" class="cookie-notice-dismiss">Got it</button>';
  document.body.appendChild(notice);
  notice.querySelector('.cookie-notice-dismiss').addEventListener('click', function () {
    notice.remove();
    localStorage.setItem('cbCookieAck', '1');
  });
}());
