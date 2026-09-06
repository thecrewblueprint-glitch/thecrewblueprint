/* V2 client layer — preserves the accepted SPA and replaces only public-facing copy/IA. */
(function(){
  'use strict';

  function goCourse(slug){ location.hash = '#/course/' + slug; }
  function go(hash){ location.hash = hash; }
  function card(eyebrow,title,desc,slug,status){
    return `<a class="public-course-card" onclick="location.hash='#/course/${slug}'"><span class="eyebrow">${eyebrow}</span><h3>${title}</h3><p>${desc}</p><span class="status">${status || 'Open course'} →</span></a>`;
  }

  window.catalogView = function(){
    return `
      <section class="wrap catalog-hero catalog-public-hero">
        <div class="client-kicker">Practical training for live-event work</div>
        <h1>Courses</h1>
        <p class="client-intro">Start with the basics, practice common field tasks, then use a department starter to understand how entry-level support work fits into a real crew. The public catalog intentionally stays focused on material that is ready for learners now.</p>
      </section>
      <section class="wrap public-catalog">
        <div class="public-catalog-group">
          <div class="public-catalog-group-head"><div><div class="client-kicker">Start here</div><h2>Stagehand Fundamentals</h2></div><p>Orientation for a first call: crew structure, communication, work flow, safety boundaries, and how to be useful without pretending you already know the job.</p></div>
          <div class="public-course-grid">
            ${card('Foundation','Stagehand Fundamentals','Build a practical mental model for a live-event call before you walk onto one.','stagehand-fundamentals','Start learning')}
          </div>
        </div>

        <div class="public-catalog-group">
          <div class="public-catalog-group-head"><div><div class="client-kicker">Practical field skills</div><h2>Field Skills Library</h2></div><p>Short, bounded lessons for ordinary tasks a lead may assign once the real equipment, route, conditions, and authority are clear.</p></div>
          <div class="public-course-grid">
            <a class="public-course-card" onclick="location.hash='#/field-skills'"><span class="eyebrow">Library</span><h3>Browse Field Skills</h3><p>Road cases, cable handling, carts, team movement, work-area reset, basic tool handling, staging support, and other common ground-hand tasks.</p><span class="status">Open library →</span></a>
          </div>
        </div>

        <div class="public-catalog-group">
          <div class="public-catalog-group-head"><div><div class="client-kicker">Department starters</div><h2>Course 1</h2></div><p>Entry-level department awareness and assigned-support preparation. These do not grant specialist qualification, system authority, or independent technical responsibility.</p></div>
          <div class="public-course-grid">
            ${card('Lighting · Course 1','Supporting a Lighting Hang','Understand the physical support work a lighting lead may assign and where lighting, power, focus, control, lift, and rigging authority stay with the department.','pathway-lighting-01-support')}
            ${card('Video · Course 1','Supporting an LED Video Wall Build','Learn the vocabulary, workflow, handling boundaries, and assigned support role around LED video systems.','pathway-video-01-support')}
            ${card('Audio · Course 1','Supporting an Audio Load-In','Prepare for the physical support work around PA systems, stage patch, cable flow, speakers, and audio department handoffs.','pathway-audio-01-support')}
            ${card('Staging & Carpentry · Course 1','Supporting Staging & Carpentry','Understand material flow, component recognition, directed assembly support, and the boundary around structural decisions.','pathway-staging-carpentry-01-support')}
            ${card('Backline / Props / Wardrobe · Course 1','Supporting Backline, Props & Wardrobe','Recognize performer-facing and department-owned gear, permission boundaries, careful handling, and clean handoffs.','pathway-backline-props-wardrobe-01-support')}
          </div>
          <div class="public-catalog-note"><strong>Why the catalog stops here:</strong> Crew Blueprint is not publishing advanced/internal research containers as ordinary learner choices. Later-stage technical development happens through real experience, employer training, specialist education, manufacturer training, credentials where applicable, and future Crew Blueprint resources only when they are actually ready.</div>
        </div>
      </section>`;
  };

  window.homeView = function(){
    return `
      <section class="wrap home-hero">
        <div class="client-kicker">The Crew Blueprint</div>
        <h1>Know what the call expects<br>before you walk onto it.</h1>
        <p class="lede">Practical orientation and job-readiness training for people entering live-event production — built around real crew work, clear boundaries, and the things new hands are actually expected to understand.</p>
        <div class="client-actions"><a class="client-btn" onclick="location.hash='#/course/stagehand-fundamentals'">Start with Fundamentals</a><a class="client-btn secondary" onclick="location.hash='#/courses'">Browse Courses</a></div>
      </section>

      <section class="wrap home-now">
        <div class="home-now-copy"><div class="client-kicker">What exists now</div><h2>A growing practical training and resource project.</h2><p>Crew Blueprint is being built in public-facing stages rather than pretending an entire industry curriculum already exists. The current focus is first-call preparation, common field skills, and starter-level department awareness that helps a learner ask better questions and work more effectively under the people responsible for the job.</p></div>
        <div class="home-now-list">
          <div class="home-now-item"><strong>Stagehand Fundamentals</strong><span>Orientation for the first calls and the working culture around them.</span></div>
          <div class="home-now-item"><strong>Practical Field Skills</strong><span>Short lessons on ordinary lead-assigned tasks and clean handoffs.</span></div>
          <div class="home-now-item"><strong>Department Starting Courses</strong><span>Course 1 only: Lighting, Video, Audio, Staging & Carpentry, and Backline / Props / Wardrobe.</span></div>
        </div>
      </section>

      <section class="wrap home-progress">
        <div class="client-kicker">How the learning path works</div>
        <h2>Start broad. Practice the work. Then choose where to go deeper.</h2>
        <div class="home-progress-grid">
          <article class="home-progress-card"><span class="step">01 · Foundation</span><h3>Stagehand Fundamentals</h3><p>Learn the pace, vocabulary, crew relationships, communication habits, and boundaries of a real call.</p></article>
          <article class="home-progress-card"><span class="step">02 · Practical work</span><h3>Field Skills</h3><p>Build familiarity with common tasks that can be demonstrated and practiced under real employer or lead direction.</p></article>
          <article class="home-progress-card"><span class="step">03 · Department start</span><h3>Course 1</h3><p>Understand the entry support role and vocabulary around a department without claiming specialist authority.</p></article>
        </div>
        <p class="home-progress-note">There is no single promotion ladder for live-event production. Continued development depends on the department, employer, venue, union or non-union environment, equipment, experience, specialist training, and the role you actually want. Crew Blueprint can support that learning where appropriate; it does not replace those pathways.</p>
      </section>`;
  };

  window.aboutView = function(){
    return `
      <section class="wrap about-hero">
        <div class="client-kicker">About the project</div>
        <h1>Built from the view<br>of a working stagehand.</h1>
        <p class="lede">The Crew Blueprint exists because starting live-event work can feel unnecessarily opaque: people arrive on calls without knowing the language, what a lead expects, what they are allowed to touch, or which questions they should ask.</p>
      </section>

      <section class="wrap about-human">
        <div class="about-human-grid">
          <div>
            <article class="about-copy-card">
              <h2>Why it exists</h2>
              <p>The founder is a working stagehand and the owner-operator behind Deadhang Labor LLC. The idea did not start as a corporate training product. It came from working calls, moving between crews and production environments, and seeing the same gap from both sides: new hands often need practical context long before they need advanced technical theory.</p>
              <p>The goal is to make that context easier to access — what the call may feel like, how departments fit together, what useful preparation looks like, how to communicate when you are unsure, and where a general stagehand's responsibility stops.</p>
              <p>Crew Blueprint is still evolving. Material is being revised as better research, worker feedback, employer expectations, manufacturer documentation, authoritative safety sources, and owner review become available.</p>
            </article>
            <div class="about-principles">
              <div class="about-principle"><strong>Practical before impressive.</strong><span>Prioritize what helps somebody function better on an actual call.</span></div>
              <div class="about-principle"><strong>Clear about limits.</strong><span>The project does not claim to be the authority on every department, specialist trade, venue, employer, or local practice.</span></div>
              <div class="about-principle"><strong>Better through review.</strong><span>Research and experienced-worker feedback are used to improve the material rather than hide uncertainty.</span></div>
            </div>
          </div>
          <div class="about-stage-visual" role="img" aria-label="Stylized temporary festival-stage visual while the new original production image is prepared."></div>
        </div>
        <div class="about-limitations"><h3>What Crew Blueprint does not promise</h3><p>Completing material here does not certify, license, qualify, appoint, or authorize someone for specialized work. Employers, venues, departments, manufacturers, unions, regulators, qualified personnel, and the actual conditions of the job remain controlling where applicable. Hazardous specialist areas stay focused on awareness, recognition, authority boundaries, and when to stop and escalate.</p></div>
      </section>`;
  };

  function tuneFooter(){
    var links = document.querySelectorAll('footer.site a');
    links.forEach(function(a){
      var text = (a.textContent || '').trim().toLowerCase();
      var href = (a.getAttribute('href') || '').toLowerCase();
      if(text === 'curriculum map' || href.indexOf('curriculum-map') !== -1){
        var li = a.closest('li');
        (li || a).remove();
      }
    });
  }

  tuneFooter();
  if(typeof render === 'function') render();
  tuneFooter();
  window.addEventListener('hashchange', function(){ setTimeout(tuneFooter,0); });
})();
