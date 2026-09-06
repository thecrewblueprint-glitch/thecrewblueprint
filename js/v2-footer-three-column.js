/* Footer-only refinement for the accepted v2 site. */
(function(){
  'use strict';

  function textOf(el){
    return ((el && el.textContent) || '').replace(/\s+/g,' ').trim().toLowerCase();
  }

  function isRightGroup(el){
    var text = textOf(el);
    return text.indexOf('contact') !== -1 ||
      text.indexOf('also visit') !== -1 ||
      !!el.querySelector('a[href*="deadhanglaborllc"]');
  }

  function buildThreeColumnFooter(){
    var grid = document.querySelector('footer.site .footer-grid');
    if(!grid || grid.dataset.footerThreeColumns === '1') return;

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
  }

  buildThreeColumnFooter();
  window.addEventListener('hashchange', function(){ setTimeout(buildThreeColumnFooter,0); });
})();
