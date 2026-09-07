/* Route-aware centering helper for the live V2 shell. */
(function(){
  'use strict';

  function markRouteIntro(){
    var app = document.getElementById('app');
    if(!app) return;

    Array.prototype.forEach.call(app.querySelectorAll('.v2-route-intro-centered'), function(el){
      el.classList.remove('v2-route-intro-centered');
    });

    var hash = location.hash || '#/home';
    if(/^#\/home(?:$|[/?#])/.test(hash)){
      var home = app.querySelector('.home-hero') || app.querySelector('section.wrap');
      if(home) home.classList.add('v2-route-intro-centered');
    }

    if(/^#\/field-skills(?:$|[/?#])/.test(hash)){
      var first = app.querySelector('section.wrap, section');
      if(first) first.classList.add('v2-route-intro-centered');
    }
  }

  markRouteIntro();
  window.addEventListener('hashchange', function(){ setTimeout(markRouteIntro, 0); });
})();
