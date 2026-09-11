(function () {
  'use strict';

  var CONSENT_VERSION = '2026-08-30.3';
  var STORAGE_KEY = 'cbCourseConsent.v1';
  var scriptUrl = document.currentScript ? document.currentScript.src : window.location.href;
  var siteRoot = new URL('../', scriptUrl);
  var termsUrl = new URL('terms-and-conditions.html', siteRoot).href;
  var limitationUrl = new URL('limitation-of-liability.html', siteRoot).href;
  var coursesUrl = new URL('learn.html', siteRoot).href;

  function installCourseShell() {
    if (!document.querySelector('link[data-cb-course-shell]')) {
      var stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = new URL('css/course-shell.css', siteRoot).href;
      stylesheet.dataset.cbCourseShell = 'true';
      document.head.appendChild(stylesheet);
    }
    if (!document.querySelector('script[data-cb-course-shell]')) {
      var shell = document.createElement('script');
      shell.src = new URL('js/course-shell.js', siteRoot).href;
      shell.dataset.cbCourseShell = 'true';
      document.head.appendChild(shell);
    }
  }

  function hasCurrentConsent() {
    try {
      var record = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
      return Boolean(
        record
        && record.version === CONSENT_VERSION
        && record.ageMajorityConfirmed === true
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
      ageMajorityConfirmed: true,
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
        '<p id="cb-consent-description">Course content is limited to adults and discusses work that can cause serious injury, death, or property damage. Review and affirm all three statements before entering the course.</p>' +
        '<div class="cb-consent-choice">' +
          '<input id="cb-consent-age" type="checkbox" />' +
          '<label for="cb-consent-age">I confirm that I am at least 18 years old and have reached the age of legal majority where I live.</label>' +
        '</div>' +
        '<div class="cb-consent-choice">' +
          '<input id="cb-consent-terms" type="checkbox" />' +
          '<label for="cb-consent-terms">I have read and agree to the <a href="' + termsUrl + '" target="_blank" rel="noopener noreferrer">Terms and Conditions</a> and <a href="' + limitationUrl + '" target="_blank" rel="noopener noreferrer">Assumption of Risk, Release, and Limitation of Liability</a>.</label>' +
        '</div>' +
        '<div class="cb-consent-choice">' +
          '<input id="cb-consent-safety" type="checkbox" />' +
          '<label for="cb-consent-safety">I understand that this material is general education only. It does not qualify, certify, authorize, or supervise me to perform physical work. Before doing any task, I must obtain required hands-on training and authorization, follow employer and site rules, and work under qualified supervision.</label>' +
        '</div>' +
        '<p class="cb-consent-storage">This acceptance is stored only in this browser so the gate does not repeat on every course page. It is not an operator-held account, identity, IP-address, or server-side acceptance record.</p>' +
        '<p id="cb-consent-action" class="cb-consent-action">By selecting all three boxes and clicking <strong>Agree and enter course</strong>, you confirm your eligibility and affirmatively agree to the linked terms and acknowledgments.</p>' +
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

    var ageCheckbox = backdrop.querySelector('#cb-consent-age');
    var termsCheckbox = backdrop.querySelector('#cb-consent-terms');
    var safetyCheckbox = backdrop.querySelector('#cb-consent-safety');
    var submitButton = backdrop.querySelector('.cb-consent-submit');
    var focusableSelector = 'a[href], button:not([disabled]), input:not([disabled])';

    function updateSubmitState() {
      submitButton.disabled = !(ageCheckbox.checked && termsCheckbox.checked && safetyCheckbox.checked);
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

    ageCheckbox.addEventListener('change', updateSubmitState);
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

    ageCheckbox.focus();
  }

  var CLERK_PUBLISHABLE_KEY = 'pk_test_cGxlYXNlZC1jYW1lbC0zNDMyLmNsZXJrLmFjY291bnRzLmRldiQ';
  var AGE_GATE_VERSION = '2026-09-10.1';
  var AGE_GATE_PENDING_KEY = 'crewBlueprint.pendingBirthDate';
  var CLERK_UI_URL = 'https://pleased-camel-3432.clerk.accounts.dev/npm/@clerk/ui@1/dist/ui.browser.js';
  var CLERK_JS_URL = 'https://pleased-camel-3432.clerk.accounts.dev/npm/@clerk/clerk-js@6/dist/clerk.browser.js';
  var memberBackdrop = null;
  var courseStarted = false;

  function loadExternalScript(src, marker) {
    return new Promise(function (resolve, reject) {
      if (document.querySelector('script[' + marker + ']')) {
        resolve();
        return;
      }
      var script = document.createElement('script');
      script.src = src;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.setAttribute(marker, 'true');
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function ensureClerk() {
    try {
      if (!window.__internal_ClerkUICtor) await loadExternalScript(CLERK_UI_URL, 'data-cb-clerk-ui');
      if (!window.Clerk) await loadExternalScript(CLERK_JS_URL, 'data-cb-clerk-js');
      if (!window.Clerk) return false;
      var rootPath = window.location.pathname.indexOf('/thecrewblueprint/') === 0 ? '/thecrewblueprint/' : '/';
      await window.Clerk.load({
        ui: { ClerkUI: window.__internal_ClerkUICtor },
        signInUrl: rootPath,
        signUpUrl: rootPath,
        signInFallbackRedirectUrl: window.location.href,
        signUpFallbackRedirectUrl: window.location.href,
        afterSignOutUrl: rootPath
      });
      return true;
    } catch (error) {
      console.error('Crew Blueprint Clerk gate failed to load', error);
      return false;
    }
  }

  function closeMemberGate() {
    if (!memberBackdrop) return;
    var priorStates = memberBackdrop._cbPriorStates || [];
    memberBackdrop.remove();
    memberBackdrop = null;
    document.body.classList.remove('cb-consent-open');
    priorStates.forEach(function (state) {
      state.element.inert = state.inert;
      if (state.ariaHidden === null) state.element.removeAttribute('aria-hidden');
      else state.element.setAttribute('aria-hidden', state.ariaHidden);
    });
  }

  function parseBirthday(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ''))) return null;
    var date = new Date(value + 'T00:00:00');
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function isAdultBirthday(value) {
    var dob = parseBirthday(value);
    if (!dob) return false;
    var today = new Date();
    var cutoff = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    return dob <= cutoff;
  }

  function pendingBirthday() {
    try { return window.sessionStorage.getItem(AGE_GATE_PENDING_KEY) || ''; } catch (error) { return ''; }
  }

  function savePendingBirthday(value) {
    try { window.sessionStorage.setItem(AGE_GATE_PENDING_KEY, value); } catch (error) {}
  }

  function clearPendingBirthday() {
    try { window.sessionStorage.removeItem(AGE_GATE_PENDING_KEY); } catch (error) {}
  }

  function storedBirthday() {
    return String(window.Clerk && window.Clerk.user && window.Clerk.user.unsafeMetadata && window.Clerk.user.unsafeMetadata.birthDate || '');
  }

  async function persistBirthdayIfNeeded(value) {
    if (!window.Clerk || !window.Clerk.user || !value || storedBirthday()) return;
    try {
      await window.Clerk.user.updateMetadata({
        unsafeMetadata: {
          birthDate: value,
          ageGateVersion: AGE_GATE_VERSION,
          ageGateConfirmedAt: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error('Could not persist course birthday metadata', error);
    }
  }

  function birthdayFieldMarkup() {
    return '<div class="cb-consent-choice" style="display:block">' +
      '<label for="cb-member-birthday"><strong>Date of birth</strong><br><span style="color:#b9c4ce">Required. Accounts and full course access are limited to people age 18 or older.</span></label>' +
      '<input id="cb-member-birthday" type="date" autocomplete="bday" style="width:100%;min-height:44px;margin-top:10px;padding:8px 10px;border:1px solid #3a4652;border-radius:9px;background:#080d12;color:#f1f4f7;font:inherit" />' +
      '<p data-cb-age-error role="alert" style="display:none;margin:10px 0 0;color:#ffd0d0"></p>' +
    '</div>';
  }

  function validateBirthdayInput(backdrop) {
    var input = backdrop.querySelector('#cb-member-birthday');
    var error = backdrop.querySelector('[data-cb-age-error]');
    var value = input ? input.value : '';
    var dob = parseBirthday(value);
    if (!dob) {
      if (error) { error.textContent = 'Enter a valid date of birth.'; error.style.display = 'block'; }
      return '';
    }
    if (dob > new Date()) {
      if (error) { error.textContent = 'Date of birth cannot be in the future.'; error.style.display = 'block'; }
      return '';
    }
    if (!isAdultBirthday(value)) {
      if (error) { error.textContent = 'Accounts and full course access are limited to people age 18 or older.'; error.style.display = 'block'; }
      if (input) input.setAttribute('aria-invalid', 'true');
      return '';
    }
    if (error) error.style.display = 'none';
    if (input) input.removeAttribute('aria-invalid');
    savePendingBirthday(value);
    return value;
  }

  function showMemberGate(clerkReady) {
    if (memberBackdrop) return;
    var pageChildren = Array.prototype.slice.call(document.body.children);
    var priorStates = pageChildren.map(function (element) {
      return { element: element, inert: element.inert, ariaHidden: element.getAttribute('aria-hidden') };
    });
    var backdrop = document.createElement('div');
    backdrop.className = 'cb-consent-backdrop';
    backdrop.innerHTML =
      '<section class="cb-consent-dialog" role="dialog" aria-modal="true" aria-labelledby="cb-member-title" aria-describedby="cb-member-description">' +
        '<span class="cb-consent-kicker">Free learner account required</span>' +
        '<h1 id="cb-member-title">Sign in to open the full learning item</h1>' +
        '<p id="cb-member-description">The course overview is part of the public preview. Full free lessons, Field Skills, Context Labs, and department basics are available after sign-in.</p>' +
        (clerkReady
          ? birthdayFieldMarkup() + '<div class="cb-consent-actions"><a class="cb-consent-exit" href="' + coursesUrl + '">Back to course preview</a><button class="cb-consent-submit" type="button" data-cb-member-sign-in>Sign in</button><button class="cb-consent-submit" type="button" data-cb-member-sign-up>Create free account</button></div>'
          : '<p class="cb-consent-action">The account service is unavailable right now. Full course content remains locked.</p><div class="cb-consent-actions"><a class="cb-consent-exit" href="' + coursesUrl + '">Back to course preview</a></div>') +
      '</section>';
    backdrop._cbPriorStates = priorStates;
    document.body.classList.add('cb-consent-open');
    priorStates.forEach(function (state) {
      state.element.inert = true;
      state.element.setAttribute('aria-hidden', 'true');
    });
    document.body.appendChild(backdrop);
    memberBackdrop = backdrop;

    var signIn = backdrop.querySelector('[data-cb-member-sign-in]');
    var signUp = backdrop.querySelector('[data-cb-member-sign-up]');
    if (signIn) signIn.addEventListener('click', function () {
      var birthDate = validateBirthdayInput(backdrop);
      if (!birthDate) return;
      window.Clerk.openSignIn();
    });
    if (signUp) signUp.addEventListener('click', function () {
      var birthDate = validateBirthdayInput(backdrop);
      if (!birthDate) return;
      window.Clerk.openSignUp({ unsafeMetadata: {
        birthDate: birthDate,
        ageGateVersion: AGE_GATE_VERSION,
        ageGateConfirmedAt: new Date().toISOString()
      }});
    });
  }

  function currentCanonicalRoute() {
    var path = window.location.pathname;
    var basePath = siteRoot.pathname;
    if (path.indexOf(basePath) === 0) path = path.slice(basePath.length);
    else path = path.replace(/^\/+/, '');
    return path + window.location.search;
  }

  async function currentRouteIsFree() {
    try {
      var projectionUrl = new URL('data/generated/web-client-projection.json', siteRoot).href;
      var response = await fetch(projectionUrl, { cache: 'no-store' });
      if (!response.ok) return false;
      var data = await response.json();
      var route = currentCanonicalRoute();
      return (data.courses || []).some(function (course) {
        return course
          && course.identity
          && course.identity.route_id === route
          && course.access
          && course.access.delivery_state === 'free_public'
          && course.identity.route_state === 'materialized';
      });
    } catch (error) {
      console.error('Crew Blueprint access projection check failed', error);
      return false;
    }
  }

  function showUnavailableCourseGate() {
    if (memberBackdrop) return;
    var pageChildren = Array.prototype.slice.call(document.body.children);
    var priorStates = pageChildren.map(function (element) {
      return { element: element, inert: element.inert, ariaHidden: element.getAttribute('aria-hidden') };
    });
    var backdrop = document.createElement('div');
    backdrop.className = 'cb-consent-backdrop';
    backdrop.innerHTML =
      '<section class="cb-consent-dialog" role="dialog" aria-modal="true" aria-labelledby="cb-unavailable-title">' +
        '<span class="cb-consent-kicker">Not in the current free release</span>' +
        '<h1 id="cb-unavailable-title">This learning item is not available.</h1>' +
        '<p>Advanced, technician-depth, specialist-review, and unreleased material remains locked. Sign-in does not unlock it.</p>' +
        '<div class="cb-consent-actions"><a class="cb-consent-exit" href="' + coursesUrl + '">Back to free courses</a></div>' +
      '</section>';
    backdrop._cbPriorStates = priorStates;
    document.body.classList.add('cb-consent-open');
    priorStates.forEach(function (state) {
      state.element.inert = true;
      state.element.setAttribute('aria-hidden', 'true');
    });
    document.body.appendChild(backdrop);
    memberBackdrop = backdrop;
  }

  function showBirthdayCompletionGate() {
    if (memberBackdrop) closeMemberGate();
    var pageChildren = Array.prototype.slice.call(document.body.children);
    var priorStates = pageChildren.map(function (element) {
      return { element: element, inert: element.inert, ariaHidden: element.getAttribute('aria-hidden') };
    });
    var backdrop = document.createElement('div');
    backdrop.className = 'cb-consent-backdrop';
    backdrop.innerHTML =
      '<section class="cb-consent-dialog" role="dialog" aria-modal="true" aria-labelledby="cb-birthday-title">' +
        '<span class="cb-consent-kicker">18+ account verification</span>' +
        '<h1 id="cb-birthday-title">Complete your account eligibility</h1>' +
        '<p>A date of birth is required before full course access.</p>' +
        birthdayFieldMarkup() +
        '<div class="cb-consent-actions"><a class="cb-consent-exit" href="' + coursesUrl + '">Back to preview</a><button class="cb-consent-submit" type="button" data-cb-save-birthday>Continue</button></div>' +
      '</section>';
    backdrop._cbPriorStates = priorStates;
    document.body.classList.add('cb-consent-open');
    priorStates.forEach(function (state) {
      state.element.inert = true;
      state.element.setAttribute('aria-hidden', 'true');
    });
    document.body.appendChild(backdrop);
    memberBackdrop = backdrop;
    backdrop.querySelector('[data-cb-save-birthday]').addEventListener('click', async function () {
      var value = validateBirthdayInput(backdrop);
      if (!value) return;
      await persistBirthdayIfNeeded(value);
      clearPendingBirthday();
      closeMemberGate();
      startCourseAfterAuth();
    });
  }

  async function ensureSignedInAdult() {
    var birthday = storedBirthday() || pendingBirthday();
    if (!birthday) {
      showBirthdayCompletionGate();
      return false;
    }
    if (!isAdultBirthday(birthday)) {
      clearPendingBirthday();
      try { await window.Clerk.signOut(); } catch (error) {}
      showMemberGate(true);
      return false;
    }
    await persistBirthdayIfNeeded(birthday);
    clearPendingBirthday();
    return true;
  }

  function startCourseAfterAuth() {
    if (courseStarted) return;
    courseStarted = true;
    closeMemberGate();
    if (!hasCurrentConsent()) showConsentGate();
  }

  async function startMemberProtectedCourse() {
    installCourseShell();
    var freeRoute = await currentRouteIsFree();
    if (!freeRoute) {
      showUnavailableCourseGate();
      return;
    }
    var clerkReady = await ensureClerk();
    if (!clerkReady) {
      showMemberGate(false);
      return;
    }
    if (window.Clerk.isSignedIn) {
      if (await ensureSignedInAdult()) startCourseAfterAuth();
      return;
    }
    showMemberGate(true);
    window.Clerk.addListener(async function () {
      if (window.Clerk.isSignedIn && await ensureSignedInAdult()) startCourseAfterAuth();
    });
  }

  startMemberProtectedCourse();
}());
