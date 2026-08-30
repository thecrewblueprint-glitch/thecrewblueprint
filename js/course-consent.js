(function () {
  'use strict';

  var CONSENT_VERSION = '2026-08-30';
  var STORAGE_KEY = 'cbCourseConsent.v1';
  var scriptUrl = document.currentScript ? document.currentScript.src : window.location.href;
  var siteRoot = new URL('../', scriptUrl);
  var termsUrl = new URL('terms-and-conditions.html', siteRoot).href;
  var limitationUrl = new URL('limitation-of-liability.html', siteRoot).href;
  var coursesUrl = new URL('courses.html', siteRoot).href;

  function hasCurrentConsent() {
    try {
      var record = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
      return Boolean(
        record
        && record.version === CONSENT_VERSION
        && record.termsAccepted === true
        && record.safetyLimitsAccepted === true
      );
    } catch (error) {
      return false;
    }
  }

  function saveConsent() {
    var record = {
      version: CONSENT_VERSION,
      acceptedAt: new Date().toISOString(),
      termsAccepted: true,
      safetyLimitsAccepted: true,
      scope: 'course-access',
      acceptedFrom: window.location.pathname
    };

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    } catch (error) {
      // Storage can be unavailable in private or restricted browser modes.
      // The affirmative choice still unlocks this page for the current view.
    }
  }

  function showConsentGate() {
    var previousFocus = document.activeElement;
    var pageChildren = Array.prototype.slice.call(document.body.children);
    var priorStates = pageChildren.map(function (element) {
      return {
        element: element,
        inert: element.inert,
        ariaHidden: element.getAttribute('aria-hidden')
      };
    });

    var backdrop = document.createElement('div');
    backdrop.className = 'cb-consent-backdrop';
    backdrop.innerHTML =
      '<section class="cb-consent-dialog" role="dialog" aria-modal="true" aria-labelledby="cb-consent-title" aria-describedby="cb-consent-description cb-consent-action">' +
        '<span class="cb-consent-kicker">Required before course access</span>' +
        '<h1 id="cb-consent-title">Safety and terms acknowledgment</h1>' +
        '<p id="cb-consent-description">This training discusses work that can cause serious injury, death, or property damage. Review and affirm both statements before entering the course.</p>' +
        '<div class="cb-consent-choice">' +
          '<input id="cb-consent-terms" type="checkbox" />' +
          '<label for="cb-consent-terms">I have read and agree to the <a href="' + termsUrl + '" target="_blank" rel="noopener noreferrer">Terms and Conditions</a> and <a href="' + limitationUrl + '" target="_blank" rel="noopener noreferrer">Limitation of Liability</a>, including the assumption-of-risk and release provisions.</label>' +
        '</div>' +
        '<div class="cb-consent-choice">' +
          '<input id="cb-consent-safety" type="checkbox" />' +
          '<label for="cb-consent-safety">I understand that this material is general education only. It does not qualify, certify, authorize, or supervise me to perform physical work. Before doing any task, I must obtain required hands-on training and authorization, follow employer and site rules, and work under qualified supervision.</label>' +
        '</div>' +
        '<p class="cb-consent-storage">This acceptance is stored only in this browser so the gate does not repeat on every course page. It is not an operator-held account, identity, IP-address, or server-side acceptance record.</p>' +
        '<p id="cb-consent-action" class="cb-consent-action">By selecting both boxes and clicking <strong>Agree and enter course</strong>, you affirmatively agree to the linked terms and acknowledgments.</p>' +
        '<div class="cb-consent-actions">' +
          '<a class="cb-consent-exit" href="' + coursesUrl + '">Leave course</a>' +
          '<button class="cb-consent-submit" type="button" disabled>Agree and enter course</button>' +
        '</div>' +
        '<span class="cb-consent-version">Acknowledgment version ' + CONSENT_VERSION + '</span>' +
      '</section>';

    document.body.classList.add('cb-consent-open');
    priorStates.forEach(function (state) {
      state.element.inert = true;
      state.element.setAttribute('aria-hidden', 'true');
    });
    document.body.appendChild(backdrop);

    var termsCheckbox = backdrop.querySelector('#cb-consent-terms');
    var safetyCheckbox = backdrop.querySelector('#cb-consent-safety');
    var submitButton = backdrop.querySelector('.cb-consent-submit');
    var focusableSelector = 'a[href], button:not([disabled]), input:not([disabled])';

    function updateSubmitState() {
      submitButton.disabled = !(termsCheckbox.checked && safetyCheckbox.checked);
    }

    function closeGate() {
      saveConsent();
      backdrop.remove();
      document.body.classList.remove('cb-consent-open');
      priorStates.forEach(function (state) {
        state.element.inert = state.inert;
        if (state.ariaHidden === null) state.element.removeAttribute('aria-hidden');
        else state.element.setAttribute('aria-hidden', state.ariaHidden);
      });
      if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
      document.dispatchEvent(new CustomEvent('cb:course-consent-accepted', {
        detail: { version: CONSENT_VERSION }
      }));
    }

    termsCheckbox.addEventListener('change', updateSubmitState);
    safetyCheckbox.addEventListener('change', updateSubmitState);
    submitButton.addEventListener('click', closeGate);
    backdrop.addEventListener('keydown', function (event) {
      if (event.key !== 'Tab') return;
      var focusable = Array.prototype.slice.call(backdrop.querySelectorAll(focusableSelector));
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    termsCheckbox.focus();
  }

  if (!hasCurrentConsent()) showConsentGate();
}());
