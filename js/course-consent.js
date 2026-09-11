(function () {
  'use strict';

  var CONSENT_VERSION = '2026-09-10.2';
  var STORAGE_KEY = 'cbCourseConsent.v1';
  var runtimeConfig = window.CBP_CONFIG || {};
  var scriptUrl = document.currentScript ? document.currentScript.src : window.location.href;
  var siteRoot = runtimeConfig.siteBase ? new URL(runtimeConfig.siteBase, window.location.origin) : new URL('../', scriptUrl);
  var assetRoot = runtimeConfig.assetBase ? new URL(runtimeConfig.assetBase, window.location.origin) : siteRoot;
  var termsUrl = runtimeConfig.termsUrl || new URL('terms-and-conditions.html', siteRoot).href;
  var limitationUrl = runtimeConfig.limitationUrl || new URL('limitation-of-liability.html', siteRoot).href;
  var coursesUrl = runtimeConfig.coursesUrl || new URL('learn.html', siteRoot).href;

  function installCourseShell() {
    if (!document.querySelector('link[data-cb-course-shell]')) {
      var stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = new URL('css/course-shell.css', assetRoot).href;
      stylesheet.dataset.cbCourseShell = 'true';
      document.head.appendChild(stylesheet);
    }
    if (!document.querySelector('script[data-cb-course-shell]')) {
      var shell = document.createElement('script');
      shell.src = new URL('js/course-shell.js', assetRoot).href;
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
        '<p id="cb-consent-description">Full course access is available only through an eligible adult account. This material discusses work that can cause serious injury, death, or property damage. Review and affirm both statements before entering the course.</p>' +
        '<div class="cb-consent-choice">' +
          '<input id="cb-consent-terms" type="checkbox" />' +
          '<label for="cb-consent-terms">I have read and agree to the <a href="' + termsUrl + '" target="_blank" rel="noopener noreferrer">Terms and Conditions</a> and <a href="' + limitationUrl + '" target="_blank" rel="noopener noreferrer">Assumption of Risk, Release, and Limitation of Liability</a>.</label>' +
        '</div>' +
        '<div class="cb-consent-choice">' +
          '<input id="cb-consent-safety" type="checkbox" />' +
          '<label for="cb-consent-safety">I understand that this material is general education only. It does not qualify, certify, authorize, or supervise me to perform physical work. Before doing any task, I must obtain required hands-on training and authorization, follow employer and site rules, and work under qualified supervision.</label>' +
        '</div>' +
        '<p class="cb-consent-storage">The current acknowledgment version and acceptance time are recorded for course-access purposes. Browser storage may be used on this build, and the production account system may retain account-linked acceptance records as described in the Privacy Policy.</p>' +
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

  var CLERK_PUBLISHABLE_KEY = 'pk_test_cGxlYXNlZC1jYW1lbC0zNDMyLmNsZXJrLmFjY291bnRzLmRldiQ';
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

  function signUpUrl() {
    return new URL('sign-up.html', siteRoot).href;
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
        signUpUrl: signUpUrl(),
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

  function openExistingAccountSignIn() {
    if (!window.Clerk || typeof window.Clerk.openSignIn !== 'function') return;
    window.Clerk.openSignIn({
      withSignUp: false,
      transferable: false,
      signUpUrl: signUpUrl()
    });
  }

  function goToAccountCreation() {
    var target = new URL(signUpUrl());
    target.searchParams.set('redirect_url', window.location.href);
    window.location.href = target.href;
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
          ? '<div class="cb-consent-actions"><a class="cb-consent-exit" href="' + coursesUrl + '">Back to course preview</a><button class="cb-consent-submit" type="button" data-cb-member-sign-in>Sign in</button><button class="cb-consent-submit" type="button" data-cb-member-sign-up>Create free account</button></div>'
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
    if (signIn) signIn.addEventListener('click', openExistingAccountSignIn);
    if (signUp) signUp.addEventListener('click', goToAccountCreation);
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
      var projectionUrl = new URL('data/generated/free-web-client-projection.json', siteRoot).href;
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

  function startCourseAfterAuth() {
    if (courseStarted) return;
    courseStarted = true;
    closeMemberGate();
    if (!hasCurrentConsent()) showConsentGate();
  }

  async function startMemberProtectedCourse() {
    installCourseShell();

    // WordPress production verifies Clerk and adult eligibility before it sends
    // the protected course body. In that environment, keep the legal/course
    // acknowledgment gate but do not repeat the client-side member gate.
    if (window.CBP_SERVER_AUTHORIZED === true) {
      startCourseAfterAuth();
      return;
    }

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
      startCourseAfterAuth();
      return;
    }
    showMemberGate(true);
    window.Clerk.addListener(function () {
      if (window.Clerk.isSignedIn) startCourseAfterAuth();
    });
  }

  startMemberProtectedCourse();
}());
