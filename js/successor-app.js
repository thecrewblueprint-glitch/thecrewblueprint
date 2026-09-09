(function () {
  'use strict';

  const KEY = 'crew-blueprint-learner-v1';
  const DEFAULT = { route: null, lane: null, lastPage: null, started: [], updatedAt: null };

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? Object.assign({}, DEFAULT, JSON.parse(raw)) : Object.assign({}, DEFAULT);
    } catch (_) {
      return Object.assign({}, DEFAULT);
    }
  }

  function save(next) {
    const state = Object.assign({}, load(), next, { updatedAt: new Date().toISOString() });
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (_) {}
    return state;
  }

  function continueUrl(state) {
    if (state.route === 'employer') return 'employers.html';
    if (state.route === 'experienced') return state.lane ? `experienced.html?lane=${encodeURIComponent(state.lane)}` : 'experienced.html';
    if (state.route === 'new') return state.lane ? `learn.html?lane=${encodeURIComponent(state.lane)}` : 'learn.html';
    return 'learn.html';
  }

  function routeLabel(route) {
    return ({
      'new': 'Start Learning',
      'experienced': 'Build on Your Experience',
      'employer': 'For Employers'
    })[route] || 'Learning';
  }

  function laneLabel(lane) {
    return ({
      'stagehand': 'Stagehand / General Production',
      'lighting': 'Lighting',
      'audio': 'Audio',
      'video': 'Video / LED / AV',
      'staging': 'Staging / Carpentry',
      'backline': 'Backline / Props / Wardrobe',
      'production': 'Production / Coordination',
      'rigging': 'Rigging Awareness',
      'electrics': 'Power / Electrical Awareness'
    })[lane] || lane || '';
  }

  function rememberRoute(el) {
    const route = el.dataset.cbxRoute;
    const lane = el.dataset.cbxLane || null;
    if (!route) return;
    save({ route, lane: lane || load().lane });
  }

  function rememberLane(el) {
    const lane = el.dataset.cbxLane;
    if (!lane) return;
    save({ lane });
  }

  function rememberCourse(el) {
    const id = el.dataset.cbxCourse;
    if (!id) return;
    const state = load();
    const started = Array.from(new Set([...(state.started || []), id]));
    save({ started });
  }

  function applyLaneFilter() {
    const cards = Array.from(document.querySelectorAll('[data-cbx-lane-card]'));
    const chips = Array.from(document.querySelectorAll('[data-cbx-lane-filter]'));
    if (!cards.length || !chips.length) return;

    const params = new URLSearchParams(location.search);
    const requested = params.get('lane') || load().lane || 'all';

    function show(lane) {
      cards.forEach(card => {
        const names = String(card.dataset.cbxLaneCard || '').split(/\s+/);
        card.hidden = lane !== 'all' && !names.includes(lane);
      });
      chips.forEach(chip => chip.classList.toggle('is-active', chip.dataset.cbxLaneFilter === lane));
      if (lane !== 'all') save({ lane });
    }

    chips.forEach(chip => chip.addEventListener('click', () => show(chip.dataset.cbxLaneFilter)));
    show(chips.some(c => c.dataset.cbxLaneFilter === requested) ? requested : 'all');
  }

  function renderStateBanner() {
    const banner = document.querySelector('[data-cbx-state-banner]');
    if (!banner) return;
    const state = load();
    if (!state.route) return;
    const detail = state.lane ? ` · ${laneLabel(state.lane)}` : '';
    banner.innerHTML = `<div><strong>Continue where you left off:</strong> ${routeLabel(state.route)}${detail}</div><a class="cbx-btn cbx-btn-secondary" href="${continueUrl(state)}">Continue</a>`;
    banner.classList.add('is-visible');
  }

  function renderStateFields() {
    const state = load();
    document.querySelectorAll('[data-cbx-state-route]').forEach(el => { el.textContent = routeLabel(state.route); });
    document.querySelectorAll('[data-cbx-state-lane]').forEach(el => { el.textContent = state.lane ? laneLabel(state.lane) : 'Choose a department'; });
    document.querySelectorAll('[data-cbx-started-count]').forEach(el => { el.textContent = String((state.started || []).length); });
    document.querySelectorAll('[data-cbx-continue-href]').forEach(el => { el.href = continueUrl(state); });
  }

  function nav() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.addEventListener('click', event => {
    const route = event.target.closest('[data-cbx-route]');
    const lane = event.target.closest('[data-cbx-lane]');
    const course = event.target.closest('[data-cbx-course]');
    if (route) rememberRoute(route);
    if (lane) rememberLane(lane);
    if (course) rememberCourse(course);
  });

  document.addEventListener('DOMContentLoaded', () => {
    save({ lastPage: location.pathname.split('/').pop() || 'index.html' });
    nav();
    applyLaneFilter();
    renderStateBanner();
    renderStateFields();
  });
})();
