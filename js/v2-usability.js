/* V2 usability layer — learner mechanics only. Does not rewrite curriculum content or the accepted v2 baseline. */
(function(){
  'use strict';

  var STORAGE_KEY = 'crewBlueprint.v2.progress.v1';
  var app = document.getElementById('app');
  if (!app) return;

  function blankState(){ return { fundamentals: { lastLesson: 0, completed: [] }, courses: {} }; }
  function readState(){
    try {
      var parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (!parsed || typeof parsed !== 'object') return blankState();
      parsed.fundamentals = parsed.fundamentals || { lastLesson: 0, completed: [] };
      parsed.fundamentals.completed = Array.isArray(parsed.fundamentals.completed) ? parsed.fundamentals.completed : [];
      parsed.courses = parsed.courses || {};
      return parsed;
    } catch (e) { return blankState(); }
  }
  function writeState(state){ try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {} }
  function courseSlug(){
    var m = (location.hash || '').match(/^#\/course\/([^/?#]+)/);
    return m ? m[1] : '';
  }
  function setFundLast(i){ var s=readState(); s.fundamentals.lastLesson=i; writeState(s); }
  function fundamentalCompleted(){ return new Set(readState().fundamentals.completed.map(Number)); }
  function toggleFundComplete(i){
    var s=readState(); var set=new Set(s.fundamentals.completed.map(Number));
    if(set.has(i)) set.delete(i); else set.add(i);
    s.fundamentals.completed=[...set].sort(function(a,b){return a-b;}); writeState(s);
  }
  function isCourseComplete(slug){ return !!readState().courses[slug]; }
  function toggleCourseComplete(slug){ var s=readState(); s.courses[slug]=!s.courses[slug]; writeState(s); }

  /* Persist the Stagehand Fundamentals lesson rather than resetting the learner to lesson 1. */
  if (typeof window.courseView === 'function') {
    var baseCourseView = window.courseView;
    window.courseView = function(slug){
      if (slug === 'stagehand-fundamentals' && typeof sfActiveIndex !== 'undefined' && typeof SF_FLAT !== 'undefined') {
        var last = Number(readState().fundamentals.lastLesson) || 0;
        sfActiveIndex = Math.max(0, Math.min(last, SF_FLAT.length - 1));
      }
      return baseCourseView(slug);
    };
  }

  if (typeof window.sfSetLesson === 'function') {
    window.sfSetLesson = function(i){
      if (typeof SF_FLAT === 'undefined' || i < 0 || i >= SF_FLAT.length) return;
      sfActiveIndex = i;
      setFundLast(i);
      app.innerHTML = sfCourseView();
      window.scrollTo({ top: 0, behavior: 'instant' });
      enhanceCurrentRoute();
    };
  }

  var restoredDirectFundamentals = false;
  function enhanceFundamentals(){
    if (courseSlug() !== 'stagehand-fundamentals' || typeof SF_FLAT === 'undefined' || typeof sfActiveIndex === 'undefined') return;
    if (!restoredDirectFundamentals) {
      restoredDirectFundamentals = true;
      var remembered = Math.max(0, Math.min(Number(readState().fundamentals.lastLesson) || 0, SF_FLAT.length - 1));
      if (remembered !== sfActiveIndex) { sfActiveIndex = remembered; app.innerHTML = sfCourseView(); }
    }
    var completed = fundamentalCompleted();
    var total = SF_FLAT.length;
    var count = [...completed].filter(function(i){ return i >= 0 && i < total; }).length;
    var pct = total ? Math.round((count / total) * 100) : 0;

    document.querySelectorAll('.sf-module-head').forEach(function(head){
      head.setAttribute('role','button'); head.setAttribute('tabindex','0');
      head.setAttribute('aria-expanded', head.closest('.sf-module') && head.closest('.sf-module').classList.contains('open') ? 'true' : 'false');
    });
    var sideToggle=document.getElementById('sfToggleBtn');
    if(sideToggle){sideToggle.setAttribute('aria-controls','sfSide');sideToggle.setAttribute('aria-expanded',document.getElementById('sfSide')&&document.getElementById('sfSide').classList.contains('mobile-open')?'true':'false');}

    document.querySelectorAll('.sf-lessons .les[data-i]').forEach(function(link){
      var i = Number(link.dataset.i);
      link.classList.toggle('v2-lesson-complete', completed.has(i));
      var old = link.querySelector('.v2-lesson-check'); if(old) old.remove();
      if(completed.has(i)) link.insertAdjacentHTML('beforeend','<span class="v2-lesson-check" aria-label="Completed">✓</span>');
    });

    var plate = document.querySelector('.progress-plate');
    if (plate) {
      var first = plate.querySelector('#lessonLabel');
      var fill = plate.querySelector('#barFill');
      var last = plate.querySelector('#pctLabel');
      if(first) first.textContent = 'Viewing lesson ' + (sfActiveIndex + 1) + ' of ' + total;
      if(fill) fill.style.width = pct + '%';
      if(last) last.textContent = count + '/' + total + ' complete';
      plate.setAttribute('aria-label', count + ' of ' + total + ' lessons completed');
    }

    var pager = document.querySelector('.sf-pager');
    if (pager) {
      var done = completed.has(sfActiveIndex);
      var mark = document.getElementById('v2MarkLessonComplete');
      if(!mark){
        mark = document.createElement('button'); mark.type='button'; mark.id='v2MarkLessonComplete';
        var next = pager.querySelector('.btn-primary'); pager.insertBefore(mark, next || null);
      }
      mark.className='btn ' + (done ? 'v2-complete-btn' : 'btn-ghost');
      mark.textContent = done ? '✓ Lesson Complete' : 'Mark Lesson Complete';
      mark.setAttribute('aria-pressed', done ? 'true' : 'false');
    }

    if (count === total && total > 0 && !document.querySelector('.v2-course-finished')) {
      var finished = document.createElement('div'); finished.className='v2-course-finished';
      finished.innerHTML='<strong>Stagehand Fundamentals complete.</strong><span>Your completion is saved in this browser. Continue into Field Skills or a department starter when you are ready.</span><div class="v2-finish-actions"><a class="btn btn-primary" href="#/field-skills">Open Field Skills</a><a class="btn btn-ghost" href="#/courses">Browse Course 1</a></div>';
      var main=document.querySelector('.course-main'); if(main) main.appendChild(finished);
    }
  }

  function enhanceTieredCourse(){
    var slug = courseSlug();
    if (!slug || slug === 'stagehand-fundamentals' || typeof TIERED_COURSES === 'undefined') return;
    var c = TIERED_COURSES[slug];
    if (!c || c.reviewPending) return;
    var main = document.querySelector('.course-main');
    if (!main || document.getElementById('v2CourseCompletion')) return;
    var done = isCourseComplete(slug);
    var returnHash = slug.indexOf('field-skill-') === 0 ? '#/field-skills' : '#/courses';
    var box = document.createElement('section');
    box.id='v2CourseCompletion'; box.className='v2-course-completion';
    box.innerHTML='<div><span class="v2-progress-kicker">Course progress</span><h3>'+(done?'Completed':'Ready to record completion')+'</h3><p>'+(done?'This course is marked complete in this browser. You can change that state at any time.':'When you have finished the course and its knowledge check, mark it complete here.')+'</p></div><div class="v2-completion-actions"><button type="button" class="btn '+(done?'v2-complete-btn':'btn-primary')+'" id="v2MarkCourseComplete" aria-pressed="'+(done?'true':'false')+'">'+(done?'✓ Course Complete':'Mark Course Complete')+'</button><a class="btn btn-ghost" href="'+returnHash+'">Return</a></div>';
    main.appendChild(box);
  }

  function decorateCatalogProgress(){
    var state=readState();
    document.querySelectorAll('.public-course-card,.track-card').forEach(function(card){
      var href=card.getAttribute('href')||'';
      var onclick=card.getAttribute('onclick')||'';
      var match=(href+' '+onclick).match(/#\/course\/([a-z0-9-]+)/i);
      if(!match) return;
      var slug=match[1];
      var status=card.querySelector('.status,.status-chip');
      if(slug==='stagehand-fundamentals' && typeof SF_FLAT!=='undefined'){
        var completed=new Set(state.fundamentals.completed.map(Number));
        var n=[...completed].filter(function(i){return i>=0&&i<SF_FLAT.length;}).length;
        if(status) status.textContent=(n===SF_FLAT.length?'Completed':n?'Continue · '+n+'/'+SF_FLAT.length:'Start learning')+' →';
        card.classList.toggle('v2-card-complete',n===SF_FLAT.length);
      } else if(state.courses[slug]){
        if(status) status.textContent='Completed ✓';
        card.classList.add('v2-card-complete');
      }
    });
  }

  function addRealHrefs(){
    document.querySelectorAll('a[onclick]').forEach(function(a){
      if(a.hasAttribute('href')) return;
      var code=a.getAttribute('onclick')||'';
      var m=code.match(/location\.hash\s*=\s*['"]([^'"]+)['"]/);
      if(m) a.setAttribute('href',m[1]);
    });
  }

  function enhanceNav(){
    var toggle=document.getElementById('navToggle'); var links=document.getElementById('navLinks');
    if(!toggle||!links) return;
    toggle.setAttribute('aria-controls','navLinks');
    toggle.setAttribute('aria-expanded',links.classList.contains('open')?'true':'false');
  }

  function enhanceCurrentRoute(){
    addRealHrefs(); enhanceNav(); enhanceFundamentals(); enhanceTieredCourse(); decorateCatalogProgress();
  }

  /* Retryable knowledge checks: wrong answers coach and remain retryable; correct answers lock the item. */
  app.addEventListener('click',function(event){
    var button=event.target.closest('.quiz-block .opt');
    if(!button || button.disabled) return;
    var group=button.closest('.options'); if(!group) return;
    event.preventDefault(); event.stopPropagation();
    var coaching=document.getElementById((group.dataset.q||'')+'c');
    var result=coaching?coaching.querySelector('.answer-result'):null;
    group.querySelectorAll('.opt').forEach(function(o){ o.classList.remove('incorrect'); });
    if(button.dataset.c==='1'){
      group.querySelectorAll('.opt').forEach(function(o){o.disabled=true;if(o.dataset.c==='1')o.classList.add('correct');});
      if(result) result.textContent='Correct. ';
    } else {
      button.classList.add('incorrect');
      if(result) result.textContent='Not quite. Review the explanation and try again. ';
    }
    if(coaching) coaching.classList.add('show');
  },true);

  app.addEventListener('click',function(event){
    var sideButton=event.target.closest('#sfToggleBtn');
    if(sideButton){setTimeout(function(){var side=document.getElementById('sfSide');sideButton.setAttribute('aria-expanded',side&&side.classList.contains('mobile-open')?'true':'false');},0);}
    var lesson=event.target.closest('#v2MarkLessonComplete');
    if(lesson){ toggleFundComplete(sfActiveIndex); enhanceCurrentRoute(); return; }
    var course=event.target.closest('#v2MarkCourseComplete');
    if(course){ var slug=courseSlug(); toggleCourseComplete(slug); var old=document.getElementById('v2CourseCompletion'); if(old) old.remove(); enhanceTieredCourse(); decorateCatalogProgress(); return; }
  });

  var toggle=document.getElementById('navToggle');
  if(toggle){
    toggle.addEventListener('click',function(){ requestAnimationFrame(enhanceNav); });
  }
  document.addEventListener('keydown',function(event){
    var moduleHead=event.target.closest&&event.target.closest('.sf-module-head');
    if(moduleHead&&(event.key==='Enter'||event.key===' ')){event.preventDefault();moduleHead.click();setTimeout(function(){var m=moduleHead.closest('.sf-module');moduleHead.setAttribute('aria-expanded',m&&m.classList.contains('open')?'true':'false');},0);return;}
    if(event.key!=='Escape') return;
    var links=document.getElementById('navLinks'); var btn=document.getElementById('navToggle');
    if(links&&links.classList.contains('open')){links.classList.remove('open');if(btn){btn.setAttribute('aria-expanded','false');btn.focus();}}
    var side=document.getElementById('sfSide'); var sb=document.getElementById('sfToggleBtn');
    if(side&&side.classList.contains('mobile-open')){side.classList.remove('mobile-open');if(sb){sb.classList.remove('open');sb.focus();}}
  });

  window.addEventListener('hashchange',function(){ setTimeout(enhanceCurrentRoute,0); });
  enhanceCurrentRoute();
})();
