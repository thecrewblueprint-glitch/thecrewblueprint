/* V2 responsive layout fixes — presentation/IA only. No curriculum changes. */
(function(){
  'use strict';

  var mobileQuery = window.matchMedia('(max-width: 820px)');

  var FIELD_SKILL_GROUPS = [
    {
      id: 'movement',
      title: 'Cases, Carts & Team Movement',
      description: 'Moving cases, carts, scenery, and shared loads through real work areas.',
      slugs: [
        'field-skill-move-road-case-with-partner',
        'field-skill-cart-dolly-hand-truck-movement',
        'field-skill-team-lift-carry-set-down',
        'field-skill-scenery-flat-wagon-movement',
        'field-skill-dock-ramp-trailer-handoff-awareness'
      ]
    },
    {
      id: 'cables',
      title: 'Cable Handling & Floor Protection',
      description: 'Common cable-handling habits and keeping travel paths protected and workable.',
      slugs: [
        'field-skill-over-under-cable-coiling',
        'field-skill-cable-deployment-gathering',
        'field-skill-cable-ramps-protectors'
      ]
    },
    {
      id: 'site-support',
      title: 'Staging, Scenic & Site Support',
      description: 'Ground-level support around barricade, soft goods, pipe and drape, and deck components.',
      slugs: [
        'field-skill-barricade-setup',
        'field-skill-pipe-and-drape-support',
        'field-skill-ground-level-soft-goods',
        'field-skill-riser-deck-component-support'
      ]
    },
    {
      id: 'tools-securement',
      title: 'Tools, Marking & Securement',
      description: 'Basic tool use, jobsite marking, straps, and bounded cargo-securement support.',
      slugs: [
        'field-skill-basic-stagehand-tool-handling',
        'field-skill-jobsite-tape-label-marking',
        'field-skill-ratchet-straps',
        'field-skill-flatbed-cargo-securement-support'
      ]
    },
    {
      id: 'organization',
      title: 'Organization, Reset & Handoff',
      description: 'Keeping cases and work areas organized so the next handoff stays clean.',
      slugs: [
        'field-skill-case-boneyard-organization',
        'field-skill-work-area-reset-handoff'
      ]
    }
  ];

  function textOf(el){
    return ((el && el.textContent) || '').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  function route(){
    return location.hash || '#/home';
  }

  function legalLink(footer){
    var labels = [
      'privacy policy',
      'terms & conditions',
      'cookies notice',
      'accessibility',
      'limitation of liability',
      'affiliate disclosure'
    ];
    return Array.prototype.slice.call(footer.querySelectorAll('a')).find(function(link){
      return labels.indexOf(textOf(link)) !== -1;
    }) || null;
  }

  function legalBoundary(link){
    if(!link) return null;
    var node = link;
    while(node.parentElement){
      if(node.tagName === 'UL' || node.tagName === 'NAV') return node;
      if(node.parentElement.tagName === 'FOOTER') break;
      node = node.parentElement;
    }
    return link;
  }

  function stackFooter(){
    var grid = document.querySelector('footer.site .footer-grid');
    if(!grid) return;

    /* Normalize the earlier three-column enhancement back into source flow. */
    Array.prototype.slice.call(grid.children).forEach(function(child){
      if(!child.classList || !child.classList.contains('footer-column')) return;
      while(child.firstChild) grid.insertBefore(child.firstChild, child);
      child.remove();
    });

    grid.classList.remove('footer-grid-three');
    grid.classList.add('footer-grid-stacked');

    var footer = grid.closest('footer.site') || grid.closest('footer');
    var disclaimer = footer && footer.querySelector('.footer-disclaimer');
    var firstLegal = footer && legalLink(footer);
    var boundary = legalBoundary(firstLegal);
    if(!footer || !disclaimer || !boundary || !boundary.parentElement) return;

    var host = boundary.parentElement;
    if(disclaimer !== boundary && disclaimer.nextElementSibling !== boundary){
      host.insertBefore(disclaimer, boundary);
    }

    host.classList.add('footer-stack-host');
    boundary.classList.add('footer-stack-legal-boundary');
    disclaimer.classList.add('footer-disclaimer-mobile-slot');
    disclaimer.removeAttribute('hidden');
  }

  function enhanceCourseCatalog(){
    if(!/^#\/courses(?:$|[/?#])/.test(route())) return;
    var groups = document.querySelectorAll('#app .public-catalog-group');
    Array.prototype.forEach.call(groups, function(group, index){
      group.classList.toggle('v2-catalog-single', index < 2);
    });
  }

  function cardSlug(card){
    var source = [
      card.getAttribute('href') || '',
      card.getAttribute('onclick') || '',
      card.getAttribute('data-slug') || ''
    ].join(' ');
    var match = source.match(/field-skill-[a-z0-9-]+/i);
    return match ? match[0].toLowerCase() : '';
  }

  function makeFieldSkillGroup(group, cardsBySlug, index){
    var cards = group.slugs.map(function(slug){ return cardsBySlug[slug]; }).filter(Boolean);
    if(!cards.length) return null;

    var details = document.createElement('details');
    details.className = 'v2-field-skill-group';
    details.dataset.group = group.id;
    details.open = !mobileQuery.matches || index === 0;

    var summary = document.createElement('summary');
    summary.innerHTML = '<span class="v2-field-skill-heading"><strong>' + group.title + '</strong><span>' + group.description + '</span></span><span class="v2-field-skill-count">' + cards.length + ' skills</span><span class="v2-field-skill-chevron" aria-hidden="true">⌄</span>';

    var grid = document.createElement('div');
    grid.className = 'v2-field-skill-grid';
    cards.forEach(function(card){ grid.appendChild(card); });

    details.appendChild(summary);
    details.appendChild(grid);
    return details;
  }

  function enhanceFieldSkills(){
    if(!/^#\/field-skills(?:$|[/?#])/.test(route())) return;
    var app = document.getElementById('app');
    if(!app || app.querySelector('.v2-field-skill-groups')) return;

    var cards = Array.prototype.slice.call(app.querySelectorAll('.track-card'));
    if(cards.length < 2) return;

    var sourceParent = cards[0].parentElement;
    if(!sourceParent || !cards.every(function(card){ return card.parentElement === sourceParent; })) return;

    var cardsBySlug = {};
    var ungrouped = [];
    cards.forEach(function(card){
      var slug = cardSlug(card);
      if(slug) cardsBySlug[slug] = card;
      else ungrouped.push(card);
    });

    var recognized = FIELD_SKILL_GROUPS.reduce(function(total, group){
      return total + group.slugs.filter(function(slug){ return !!cardsBySlug[slug]; }).length;
    }, 0);
    if(recognized < Math.min(10, cards.length)) return;

    var wrapper = document.createElement('div');
    wrapper.className = 'v2-field-skill-groups';
    wrapper.setAttribute('aria-label', 'Field Skills categories');

    FIELD_SKILL_GROUPS.forEach(function(group, index){
      var section = makeFieldSkillGroup(group, cardsBySlug, index);
      if(section) wrapper.appendChild(section);
    });

    var groupedSlugs = new Set();
    FIELD_SKILL_GROUPS.forEach(function(group){ group.slugs.forEach(function(slug){ groupedSlugs.add(slug); }); });
    cards.forEach(function(card){
      var slug = cardSlug(card);
      if(slug && !groupedSlugs.has(slug)) ungrouped.push(card);
    });

    if(ungrouped.length){
      var other = document.createElement('details');
      other.className = 'v2-field-skill-group';
      other.open = !mobileQuery.matches;
      other.innerHTML = '<summary><span class="v2-field-skill-heading"><strong>Other Field Skills</strong><span>Additional practical lessons that do not fit the current groups.</span></span><span class="v2-field-skill-count">' + ungrouped.length + ' skills</span><span class="v2-field-skill-chevron" aria-hidden="true">⌄</span></summary><div class="v2-field-skill-grid"></div>';
      var otherGrid = other.querySelector('.v2-field-skill-grid');
      ungrouped.forEach(function(card){ otherGrid.appendChild(card); });
      wrapper.appendChild(other);
    }

    sourceParent.parentElement.insertBefore(wrapper, sourceParent);
    if(!sourceParent.children.length) sourceParent.remove();
  }

  function syncFieldSkillDisclosure(){
    var groups = document.querySelectorAll('.v2-field-skill-group');
    Array.prototype.forEach.call(groups, function(group, index){
      group.open = !mobileQuery.matches || index === 0;
    });
  }

  function enhance(){
    stackFooter();
    enhanceCourseCatalog();
    enhanceFieldSkills();
  }

  enhance();
  window.addEventListener('hashchange', function(){ setTimeout(enhance, 0); });
  if(typeof mobileQuery.addEventListener === 'function'){
    mobileQuery.addEventListener('change', function(){
      stackFooter();
      syncFieldSkillDisclosure();
    });
  }
})();
