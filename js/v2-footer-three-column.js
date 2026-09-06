/* Footer-only refinement for the accepted v2 site. */
(function(){
  'use strict';

  var mobileQuery = window.matchMedia('(max-width: 820px)');

  function textOf(el){
    return ((el && el.textContent) || '').replace(/\s+/g,' ').trim().toLowerCase();
  }

  function isRightGroup(el){
    var text = textOf(el);
    return text.indexOf('contact') !== -1 ||
      text.indexOf('also visit') !== -1 ||
      !!el.querySelector('a[href*="deadhanglaborllc"]');
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

  function placeDisclaimerForViewport(grid){
    if(!grid) return;

    var footer = grid.closest('footer.site') || grid.closest('footer');
    var center = grid.querySelector('.footer-column-center');
    var disclaimer = footer && footer.querySelector('.footer-disclaimer');
    if(!footer || !center || !disclaimer) return;

    if(!mobileQuery.matches){
      disclaimer.classList.remove('footer-disclaimer-mobile-slot');
      center.hidden = false;
      if(disclaimer.parentElement !== center) center.appendChild(disclaimer);
      return;
    }

    var legalLink = findFirstLegalLink(footer);
    if(!legalLink) return;

    var target = legalLink;
    var parent = legalLink.parentElement;

    /* Keep list markup valid: place the disclaimer before the legal list,
       not inside the first <li>. */
    if(parent && parent.tagName === 'LI' && parent.parentElement){
      target = parent.parentElement;
      parent = target.parentElement;
    }

    if(!parent) return;

    disclaimer.classList.add('footer-disclaimer-mobile-slot');
    parent.insertBefore(disclaimer, target);
    center.hidden = true;
  }

  function buildThreeColumnFooter(){
    var grid = document.querySelector('footer.site .footer-grid');
    if(!grid) return;

    if(grid.dataset.footerThreeColumns === '1'){
      placeDisclaimerForViewport(grid);
      return;
    }

    var disclaimer = grid.querySelector('.footer-disclaimer');
    if(!disclaimer) return;

    var groups = Array.prototype.slice.call(grid.children).filter(function(el){
      return el !== disclaimer && !el.classList.contains('footer-column');
    });

    var leftItems = [];
    var rightItems = [];

    groups.forEach(function(el){
      (isRightGroup(el) ? rightItems : leftItems).push(el);
    });

    /* Fail softly if the baseline groups are unlabeled: preserve source order
       and move only the final group to the right column. */
    if(!rightItems.length && leftItems.length > 1){
      rightItems.unshift(leftItems.pop());
    }

    var left = document.createElement('div');
    var center = document.createElement('div');
    var right = document.createElement('div');
    left.className = 'footer-column footer-column-left';
    center.className = 'footer-column footer-column-center';
    right.className = 'footer-column footer-column-right';

    leftItems.forEach(function(el){ left.appendChild(el); });
    center.appendChild(disclaimer);
    rightItems.forEach(function(el){ right.appendChild(el); });

    grid.replaceChildren(left, center, right);
    grid.classList.add('footer-grid-three');
    grid.dataset.footerThreeColumns = '1';
    placeDisclaimerForViewport(grid);
  }

  buildThreeColumnFooter();
  window.addEventListener('hashchange', function(){ setTimeout(buildThreeColumnFooter,0); });
  if(typeof mobileQuery.addEventListener === 'function'){
    mobileQuery.addEventListener('change', function(){
      placeDisclaimerForViewport(document.querySelector('footer.site .footer-grid'));
    });
  }
})();
