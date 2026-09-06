/* Footer-only refinement for the accepted v2 site. */
(function(){
  'use strict';

  function textOf(el){
    return ((el && el.textContent) || '').replace(/\s+/g,' ').trim().toLowerCase();
  }

  function findFirstLegalLink(footer){
    var legalLabels = [
      'privacy policy',
      'terms & conditions',
      'cookies notice',
      'accessibility',
      'limitation of liability',
      'affiliate disclosure'
    ];

    return Array.prototype.slice.call(footer.querySelectorAll('a')).find(function(link){
      return legalLabels.indexOf(textOf(link)) !== -1;
    }) || null;
  }

  function legalBoundaryTarget(legalLink){
    if(!legalLink) return null;
    var target = legalLink;
    var parent = legalLink.parentElement;

    /* Keep list markup valid: place the disclaimer before the legal list,
       not inside the first <li>. */
    if(parent && parent.tagName === 'LI' && parent.parentElement){
      target = parent.parentElement;
      parent = target.parentElement;
    }

    return parent ? { parent: parent, target: target } : null;
  }

  function placeDisclaimer(grid){
    if(!grid) return;

    var footer = grid.closest('footer.site') || grid.closest('footer');
    var holding = grid.querySelector('.footer-column-center');
    var disclaimer = footer && footer.querySelector('.footer-disclaimer');
    var legalLink = footer && findFirstLegalLink(footer);
    var boundary = legalBoundaryTarget(legalLink);
    if(!footer || !holding || !disclaimer || !boundary) return;

    disclaimer.classList.remove('footer-disclaimer-mobile-slot');
    disclaimer.classList.add('footer-disclaimer-stacked-slot');
    boundary.parent.insertBefore(disclaimer, boundary.target);
    holding.hidden = true;
  }

  function buildStackedFooter(){
    var grid = document.querySelector('footer.site .footer-grid');
    if(!grid) return;

    if(grid.dataset.footerThreeColumns === '1'){
      placeDisclaimer(grid);
      return;
    }

    var disclaimer = grid.querySelector('.footer-disclaimer');
    if(!disclaimer) return;

    var groups = Array.prototype.slice.call(grid.children).filter(function(el){
      return el !== disclaimer && !el.classList.contains('footer-column');
    });

    var primary = document.createElement('div');
    var holding = document.createElement('div');
    primary.className = 'footer-column footer-column-right';
    holding.className = 'footer-column footer-column-center';

    /* Preserve the baseline source order. The disclaimer is inserted again
       immediately before the legal boundary, giving the footer three rows:
       brand/navigation, disclaimer, legal/copyright. */
    groups.forEach(function(el){ primary.appendChild(el); });
    holding.appendChild(disclaimer);

    grid.replaceChildren(primary, holding);
    grid.classList.add('footer-grid-three');
    grid.dataset.footerThreeColumns = '1';
    placeDisclaimer(grid);
  }

  buildStackedFooter();
  window.addEventListener('hashchange', function(){ setTimeout(buildStackedFooter,0); });
})();
