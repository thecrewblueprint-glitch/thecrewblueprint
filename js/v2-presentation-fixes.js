/* V2 presentation fixes — layout/organization only; curriculum content is unchanged. */
(function(){
  'use strict';

  var desktopQuery = window.matchMedia('(min-width: 821px)');

  var FIELD_GROUPS = [
    {
      title: 'Movement & Material Handling',
      slugs: [
        'field-skill-move-road-case-with-partner',
        'field-skill-cart-dolly-hand-truck-movement',
        'field-skill-team-lift-carry-set-down',
        'field-skill-scenery-flat-wagon-movement',
        'field-skill-case-boneyard-organization',
        'field-skill-dock-ramp-trailer-handoff-awareness'
      ]
    },
    {
      title: 'Cables & Floor Protection',
      slugs: [
        'field-skill-over-under-cable-coiling',
        'field-skill-cable-deployment-gathering',
        'field-skill-cable-ramps-protectors',
        'field-skill-jobsite-tape-label-marking'
      ]
    },
    {
      title: 'Staging & Site Support',
      slugs: [
        'field-skill-barricade-setup',
        'field-skill-pipe-and-drape-support',
        'field-skill-riser-deck-component-support',
        'field-skill-ground-level-soft-goods'
      ]
    },
    {
      title: 'Tools, Securing & Reset',
      slugs: [
        'field-skill-basic-stagehand-tool-handling',
        'field-skill-ratchet-straps',
        'field-skill-flatbed-cargo-securement-support',
        'field-skill-work-area-reset-handoff'
      ]
    }
  ];

  function textOf(el){
    return ((el && el.textContent) || '').replace(/\s+/g,' ').trim().toLowerCase();
  }

  function cardSlug(card){
    if(!card) return '';
    var haystack = [
      card.getAttribute('href') || '',
      card.getAttribute('onclick') || '',
      card.getAttribute('data-slug') || '',
      card.id || ''
    ].join(' ');

    var m = haystack.match(/#\/course\/([a-z0-9-]+)/i);
    if(m) return m[1];

    var all = FIELD_GROUPS.reduce(function(out, group){
      return out.concat(group.slugs);
    }, []);
    return all.find(function(slug){ return haystack.indexOf(slug) !== -1; }) || '';
  }

  function allFieldSlugs(){
    return FIELD_GROUPS.reduce(function(out, group){
      return out.concat(group.slugs);
    }, []);
  }

  function syncFieldGroupViewport(root){
    if(!root) return;
    root.querySelectorAll('.v2-field-group').forEach(function(group){
      if(desktopQuery.matches){
        group.open = true;
      } else if(!group.dataset.mobileInitialized){
        group.open = false;
        group.dataset.mobileInitialized = '1';
      }
    });
  }

  function organizeFieldSkills(){
    if((location.hash || '') !== '#/field-skills') return;

    var existing = document.querySelector('.v2-field-groups');
    if(existing){
      syncFieldGroupViewport(existing);
      return;
    }

    var cards = Array.prototype.slice.call(document.querySelectorAll('.track-card')).filter(function(card){
      return allFieldSlugs().indexOf(cardSlug(card)) !== -1;
    });

    if(!cards.length) return;

    var source = cards[0].parentElement;
    if(!source) return;

    var mount = document.createElement('div');
    mount.className = 'v2-field-groups';
    source.insertBefore(mount, cards[0]);

    var cardMap = {};
    cards.forEach(function(card){
      var slug = cardSlug(card);
      if(slug) cardMap[slug] = card;
    });

    FIELD_GROUPS.forEach(function(groupDef){
      var groupCards = groupDef.slugs.map(function(slug){ return cardMap[slug]; }).filter(Boolean);
      if(!groupCards.length) return;

      var details = document.createElement('details');
      details.className = 'v2-field-group';

      var summary = document.createElement('summary');
      var title = document.createElement('span');
      title.className = 'v2-field-group-title';
      title.innerHTML = '<strong>' + groupDef.title + '</strong><span>' + groupCards.length + ' field skills</span>';
      summary.appendChild(title);

      var grid = document.createElement('div');
      grid.className = 'v2-field-group-grid';
      groupCards.forEach(function(card){ grid.appendChild(card); });

      details.appendChild(summary);
      details.appendChild(grid);
      mount.appendChild(details);
    });

    syncFieldGroupViewport(mount);
  }

  function ensureFooterFieldSkillsLink(){
    var footer = document.querySelector('footer.site');
    if(!footer) return;
    var anchors = Array.prototype.slice.call(footer.querySelectorAll('a'));
    if(anchors.some(function(a){ return textOf(a) === 'field skills'; })) return;

    var courses = anchors.find(function(a){ return textOf(a) === 'courses'; });
    if(!courses || !courses.parentElement) return;

    var parent = courses.parentElement;
    var link = document.createElement('a');
    link.href = '#/field-skills';
    link.textContent = 'Field Skills';
    if(courses.className) link.className = courses.className;

    if(parent.tagName === 'LI' && parent.parentElement){
      var li = document.createElement('li');
      li.appendChild(link);
      parent.parentElement.insertBefore(li, parent.nextSibling);
    } else {
      parent.insertBefore(link, courses.nextSibling);
    }
  }

  function enhance(){
    ensureFooterFieldSkillsLink();
    organizeFieldSkills();
  }

  enhance();
  window.addEventListener('hashchange', function(){ setTimeout(enhance, 0); });
  if(typeof desktopQuery.addEventListener === 'function'){
    desktopQuery.addEventListener('change', function(){
      syncFieldGroupViewport(document.querySelector('.v2-field-groups'));
    });
  }
})();
