(() => {
  'use strict';

  const DATA_URL = 'content/testv3-career-pathways.json';
  const atlasUrl = 'https://atlas.thecrewblueprint.com/';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function renderMetrics(data) {
    const map = [
      ['demandDomains', 'Recurring employment-demand domains'],
      ['courseUniverse', 'Mapped course/content universe'],
      ['hiringChannels', 'Recurring hiring / employer channels'],
      ['topLevelOrphanDemandDomains', 'Top-level orphan demand domains']
    ];
    const root = $('#v3Metrics');
    if (!root) return;
    root.replaceChildren();
    map.forEach(([key, label]) => {
      const item = el('div', 'v3-metric');
      item.append(el('span', 'v3-metric-value', String(data.metrics[key])));
      item.append(el('span', 'v3-metric-label', label));
      root.append(item);
    });
  }

  function renderSignals(data) {
    const root = $('#v3Signals');
    if (!root) return;
    root.replaceChildren();
    data.coreSignals.forEach(signal => root.append(el('div', 'v3-signal-card', signal)));
  }

  function renderChannels(data) {
    const root = $('#v3Channels');
    if (!root) return;
    root.replaceChildren();
    data.channels.forEach(channel => {
      const card = el('article', 'v3-channel-card');
      card.append(el('h3', '', channel.title));
      card.append(el('p', '', channel.description));
      root.append(card);
    });
  }

  function renderBands(data) {
    const root = $('#v3Bands');
    if (!root) return;
    root.replaceChildren();
    data.responsibilityBands.forEach(band => {
      const card = el('article', 'v3-band');
      card.append(el('div', 'v3-band-id', band.id));
      card.append(el('h3', '', band.title));
      card.append(el('p', '', band.description));
      root.append(card);
    });
  }

  function renderContexts(data) {
    const root = $('#v3Contexts');
    if (!root) return;
    root.replaceChildren();
    data.contexts.forEach(context => root.append(el('div', 'v3-context-card', context)));
  }

  function chips(items) {
    const row = el('div', 'v3-chip-row');
    items.forEach(item => row.append(el('span', 'v3-chip', item)));
    return row;
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
    grid.append(detailBlock('Observed role families', chips(pathway.roleFamilies)));
    grid.append(detailBlock('Observed responsibility bands', chips(pathway.bands)));
    grid.append(detailBlock('Recurring employer signals', chips(pathway.signals)));

    const courseLinks = el('div', 'v3-course-links');
    pathway.courses.forEach(course => {
      const link = el('a', 'v3-course-link', course.label);
      link.href = course.href;
      courseLinks.append(link);
    });
    grid.append(detailBlock('Mapped learning', courseLinks));
    root.append(grid);

    const workNote = el('div', 'v3-work-note');
    workNote.append(document.createTextNode(pathway.workNote + ' '));
    const atlas = el('a', '', 'Check current work intelligence in Production Atlas →');
    atlas.href = atlasUrl;
    workNote.append(atlas);
    root.append(workNote);
  }

  function renderPathways(data) {
    const list = $('#v3PathList');
    if (!list) return;
    list.replaceChildren();

    data.pathways.forEach((pathway, index) => {
      const button = el('button', 'v3-path-button');
      button.type = 'button';
      button.dataset.pathwayId = pathway.id;
      button.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
      button.append(el('span', '', pathway.eyebrow));
      button.append(el('strong', '', pathway.title));
      button.addEventListener('click', () => selectPathway(pathway.id, data));
      list.append(button);
    });

    renderPathDetail(data.pathways[0]);
    const first = $('.v3-path-button', list);
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
      grow: 'leadership'
    };

    $$('.v3-intent').forEach(button => {
      button.addEventListener('click', () => {
        if (button.dataset.intent === 'work') {
          window.location.href = atlasUrl;
          return;
        }
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
    if (root) {
      root.innerHTML = '<p class="v3-loading">The evidence layer did not load. Use the full course catalog while this Test V3 review surface is being checked.</p>';
    }
    const detail = $('#v3PathDetail');
    if (detail) {
      detail.innerHTML = '<p class="v3-loading"><a href="courses.html">Open the full course catalog →</a></p>';
    }
  }

  async function init() {
    wireNav();
    try {
      const response = await fetch(DATA_URL, { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      renderMetrics(data);
      renderSignals(data);
      renderChannels(data);
      renderBands(data);
      renderContexts(data);
      renderPathways(data);
      wireIntentButtons(data);
    } catch (error) {
      console.error('Test V3 data load failed:', error);
      showLoadFailure();
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
