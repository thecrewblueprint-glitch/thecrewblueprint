(() => {
  'use strict';

  const DATA_URL = 'content/testv3-career-pathways.json';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function renderSkills(data) {
    const root = $('#v3Skills');
    if (!root) return;
    root.replaceChildren();
    data.coreSkills.forEach(skill => root.append(el('div', 'v3-signal-card', skill)));
  }

  function renderResponsibility(data) {
    const root = $('#v3Responsibility');
    if (!root) return;
    root.replaceChildren();
    data.responsibilitySteps.forEach((step, index) => {
      const card = el('article', 'v3-band');
      card.append(el('div', 'v3-band-id', String(index + 1).padStart(2, '0')));
      card.append(el('h3', '', step.title));
      card.append(el('p', '', step.description));
      root.append(card);
    });
  }

  function renderContexts(data) {
    const root = $('#v3Contexts');
    if (!root) return;
    root.replaceChildren();
    data.contexts.forEach(context => {
      const card = el('article', 'v3-context-card');
      const copy = el('div');
      copy.append(el('strong', '', context.title));
      copy.append(el('p', '', context.description));
      card.append(copy);
      root.append(card);
    });
  }

  function chips(items) {
    const row = el('div', 'v3-chip-row');
    items.forEach(item => row.append(el('span', 'v3-chip', item)));
    return row;
  }

  function list(items) {
    const ul = el('ul', 'v3-learning-list');
    items.forEach(item => ul.append(el('li', '', item)));
    return ul;
  }

  function detailBlock(title, contentNode) {
    const block = el('section', 'v3-detail-block');
    block.append(el('h4', '', title));
    block.append(contentNode);
    return block;
  }

  function renderPathDetail(pathway) {
    const root = $('#v3PathDetail');
    if (!root) return;
    root.replaceChildren();

    root.append(el('div', 'v3-section-kicker', pathway.eyebrow));
    root.append(el('h3', '', pathway.title));
    root.append(el('p', '', pathway.summary));

    const status = el('span', 'v3-status', pathway.coverageLabel);
    status.dataset.state = pathway.coverage;
    root.append(status);

    const grid = el('div', 'v3-detail-grid');
    grid.append(detailBlock('What you will build', list(pathway.outcomes)));
    grid.append(detailBlock('Where this learning can go next', chips(pathway.nextSteps)));

    const courseLinks = el('div', 'v3-course-links');
    pathway.courses.forEach(course => {
      const link = el('a', 'v3-course-link', course.label);
      link.href = course.href;
      courseLinks.append(link);
    });
    grid.append(detailBlock('Start learning', courseLinks));
    root.append(grid);

    const boundary = el('div', 'v3-work-note');
    boundary.append(el('strong', '', 'Learning boundary: '));
    boundary.append(document.createTextNode(pathway.boundaryNote));
    root.append(boundary);
  }

  function renderPathways(data) {
    const listRoot = $('#v3PathList');
    if (!listRoot) return;
    listRoot.replaceChildren();

    data.pathways.forEach((pathway, index) => {
      const button = el('button', 'v3-path-button');
      button.type = 'button';
      button.dataset.pathwayId = pathway.id;
      button.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
      button.append(el('span', '', pathway.eyebrow));
      button.append(el('strong', '', pathway.title));
      button.addEventListener('click', () => selectPathway(pathway.id, data));
      listRoot.append(button);
    });

    renderPathDetail(data.pathways[0]);
    const first = $('.v3-path-button', listRoot);
    if (first) first.classList.add('is-active');
  }

  function selectPathway(id, data) {
    const pathway = data.pathways.find(item => item.id === id);
    if (!pathway) return;
    $$('.v3-path-button').forEach(button => {
      const active = button.dataset.pathwayId === id;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    renderPathDetail(pathway);
    const detail = $('#v3PathDetail');
    if (detail && window.matchMedia('(max-width: 800px)').matches) {
      detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function wireIntentButtons(data) {
    const mapping = {
      new: 'general-production',
      call: 'general-production',
      department: 'lighting',
      specialize: 'audio',
      grow: 'leadership',
      manage: 'production-management'
    };

    $$('.v3-intent').forEach(button => {
      button.addEventListener('click', () => {
        const id = mapping[button.dataset.intent] || 'general-production';
        selectPathway(id, data);
        const paths = $('#pathways');
        if (paths) paths.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function wireNav() {
    const toggle = $('#navToggle');
    const links = $('#navLinks');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      toggle.classList.toggle('is-open', !isOpen);
      links.classList.toggle('open', !isOpen);
    });
  }

  function showLoadFailure() {
    const root = $('#v3PathList');
    if (root) root.innerHTML = '<p class="v3-loading">The pathway view did not load. Use the full course map instead.</p>';
    const detail = $('#v3PathDetail');
    if (detail) detail.innerHTML = '<p class="v3-loading"><a href="courses.html">Open the full course map →</a></p>';
  }

  async function init() {
    wireNav();
    try {
      const response = await fetch(DATA_URL, { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      renderSkills(data);
      renderResponsibility(data);
      renderContexts(data);
      renderPathways(data);
      wireIntentButtons(data);
    } catch (error) {
      console.error('Test V3 pathway data load failed:', error);
      showLoadFailure();
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
