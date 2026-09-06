/* Crew Blueprint vNext Owner Review — additive lesson-shell adapter for accepted v2. */
(function () {
  'use strict';

  const ROOT = '#/owner-review-vnext';
  const LEGACY = '#/owner-review-legacy';
  const META = {
    'stagehand-fundamentals': ['Stagehand Fundamentals','Foundation · vNext review','The full 34-lesson foundation, strengthened with retrieval, transfer, and a cumulative check.','34 lessons + cumulative check'],
    'field-skills': ['Field Skills Library','Practical work · vNext review','Eighteen current field skills organized as one coherent practice library with clear in-person gates.','18 skills · grouped learning path'],
    'pathway-lighting-01-support': ['Supporting a Lighting Hang','Lighting · Course 1 · vNext review','Learn to read the lighting department, follow its workflow, contribute useful assigned support, and protect specialist boundaries.','Department starter'],
    'pathway-video-01-support': ['Supporting an LED Video Wall Build','Video / LED · Course 1 · vNext review','Build the vocabulary and system awareness needed to support an LED crew without confusing physical support with technical authority.','Department starter'],
    'pathway-audio-01-support': ['Supporting an Audio Load-In','Audio · Course 1 · vNext review','Understand the physical and information flow of an audio load-in, what useful support looks like, and where technical control stays with audio.','Department starter'],
    'pathway-staging-carpentry-01-support': ['Supporting Staging & Carpentry','Staging & Carpentry · Course 1 · vNext review','Recognize staging and scenic workflow, material flow, documentation, directed support, and the boundary around structural decisions.','Department starter'],
    'pathway-backline-props-wardrobe-01-support': ['Supporting Backline, Props & Wardrobe','Backline / Props / Wardrobe · Course 1 · vNext review','Learn how performer-facing and department-owned gear moves through a call and how to make careful handoffs without freelancing.','Department starter']
  };

  const DEPT = {
    'pathway-lighting-01-support': {
      family:'lighting',
      sees:['fixture and case flow','truss or position labels','lighting cable and control paths','focus and checkout activity','lighting, electrics, rigging, lift, and venue interfaces'],
      useful:'Move and stage assigned material, preserve labels and existing setup, keep routes usable, support the lead’s sequence, and report anything that does not match the briefing.',
      authority:'Fixture position, focus, patch, control configuration, power, rigging, lift operation, troubleshooting, and final lighting acceptance remain with the people assigned and qualified for those decisions.'
    },
    'pathway-video-01-support': {
      family:'video / LED',
      sees:['LED carts, cabinets, processors, and accessories','panel or tile orientation and labeling','power and data paths','ground-support or flown-display interfaces','video, rigging, power, content, and camera dependencies'],
      useful:'Protect cabinet and accessory identity, stage material in build order, handle released components carefully, preserve cable and data organization, and return unclear conditions to the video lead.',
      authority:'Structural support, rigging, power, processor configuration, mapping, calibration, firmware, troubleshooting, and final display acceptance remain specialist or department responsibilities.'
    },
    'pathway-audio-01-support': {
      family:'audio',
      sees:['speaker, sub, monitor, rack, console, and microphone cases','stage and system cable paths','PA and monitor positions','patch, test, tuning, and RF activity','audio, rigging, power, stage, broadcast, and venue interfaces'],
      useful:'Move and stage assigned equipment, protect grilles, connectors, and labels, handle released cable along the directed route, keep the crew supplied, and report state changes instead of repatching or guessing.',
      authority:'Console settings, patch, system tuning, amplifier configuration, RF coordination, powered system changes, rigging, and final audio acceptance stay with the audio department and other responsible specialists.'
    },
    'pathway-staging-carpentry-01-support': {
      family:'staging & carpentry',
      sees:['decks, risers, scenic pieces, soft goods, pipe-and-drape, carts, and hardware','plans, marks, labels, and build zones','material staging and reset flow','structural, rigging, automation, venue, and department interfaces'],
      useful:'Identify and stage the correct material, preserve plan and mark information, support directed movement or assembly only within the assignment, keep the work area organized, and report mismatch or damage early.',
      authority:'Structural configuration, load capacity, bracing, engineered changes, overhead systems, automation, public-use acceptance, and final structural decisions remain outside a general stagehand starter course.'
    },
    'pathway-backline-props-wardrobe-01-support': {
      family:'backline / props / wardrobe',
      sees:['instrument and amplifier cases','stands, stools, risers, props, costume racks, hampers, and performer-specific packages','labels, presets, quick-change or stage destinations','artist, tech, stage-management, audio, scenic, and wardrobe interfaces'],
      useful:'Read labels before moving anything, confirm ownership and destination, protect performer-specific settings and presets, move assigned gear carefully, and complete a clean handoff to the owning department.',
      authority:'Instrument setup, tuning, performer preferences, repair, prop approval, costume alteration, show-critical preset changes, and other department-specific decisions stay with the responsible technician or department.'
    }
  };

  const FIELD_GROUPS = [
    ['Movement & Material Flow',['field-skill-move-road-case-with-partner','field-skill-team-lift-carry-set-down','field-skill-cart-dolly-hand-truck-movement','field-skill-scenery-flat-wagon-movement','field-skill-dock-ramp-trailer-handoff-awareness']],
    ['Cable & Route Care',['field-skill-over-under-cable-coiling','field-skill-cable-deployment-gathering','field-skill-cable-ramps-protectors']],
    ['Organization, Tools & Handoffs',['field-skill-case-boneyard-organization','field-skill-work-area-reset-handoff','field-skill-basic-stagehand-tool-handling','field-skill-jobsite-tape-label-marking']],
    ['Directed Site & Staging Support',['field-skill-ground-level-soft-goods','field-skill-pipe-and-drape-support','field-skill-riser-deck-component-support','field-skill-barricade-setup','field-skill-ratchet-straps','field-skill-flatbed-cargo-securement-support']]
  ];
  const AWARENESS_ONLY = new Set(['field-skill-pipe-and-drape-support','field-skill-riser-deck-component-support','field-skill-barricade-setup','field-skill-ratchet-straps','field-skill-flatbed-cargo-securement-support','field-skill-dock-ramp-trailer-handoff-awareness']);
  const originalOwnerReview = typeof ownerReviewQueueView === 'function' ? ownerReviewQueueView : null;
  let currentCourse = null;
  let activeLesson = 0;

  function clamp(n,min,max){return Math.max(min,Math.min(max,n));}
  function key(slug){return 'cb-vnext-last:'+slug;}
  function load(slug){try{return Number(localStorage.getItem(key(slug))||0);}catch(_){return 0;}}
  function save(slug,i){try{localStorage.setItem(key(slug),String(i));}catch(_){}}
  function list(items){return '<ul class="cb-list">'+(items||[]).map(x=>'<li>'+x+'</li>').join('')+'</ul>';}
  function paras(items){return (items||[]).map(x=>'<p>'+x+'</p>').join('');}
  function slug(value){return String(value||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}
  function retrieval(text){return '<div class="vnext-retrieval"><div class="vnext-retrieval-kicker">One-minute retrieval</div><p>'+text+'</p><p class="vnext-retrieval-note">Answer from memory before moving on. If it feels fuzzy, scan the lesson once more.</p></div>';}
  function scenario(title,body,q){return '<div class="vnext-scenario"><div class="vnext-retrieval-kicker">Applied scenario</div><h3>'+title+'</h3><p>'+body+'</p><p><strong>Decide:</strong> '+q+'</p></div>';}
  function block(b){
    if(typeof tcRenderBlock==='function') return tcRenderBlock(b);
    return '<div class="card">'+(b&&b.heading?'<h3>'+b.heading+'</h3>':'')+paras(b&&b.paragraphs)+list(b&&(b.bullets||b.items))+'</div>';
  }
  function quiz(q,i,ns){
    if(typeof tcRenderQuizQuestion==='function') return tcRenderQuizQuestion(q,i,ns);
    const opts=(q.options||[]).map((o,oi)=>'<button class="opt" type="button" data-c="'+(oi===q.answer?'1':'0')+'">'+o+'</button>').join('');
    return '<div class="quiz-block"><p class="quiz-q">'+(i+1)+'. '+q.question+'</p><div class="options" data-q="'+ns+'-q'+i+'">'+opts+'</div><div class="coach" id="'+ns+'-q'+i+'c"><strong class="answer-result"></strong><span><strong>Why:</strong> '+(q.coaching||'')+'</span></div></div>';
  }

  function landing(){
    const cards=Object.keys(META).map(s=>{
      const m=META[s];
      return '<a class="public-course-card vnext-review-card" onclick="location.hash=\''+ROOT+'/'+s+'\'"><span class="eyebrow">'+m[1]+'</span><h3>'+m[0]+'</h3><p>'+m[2]+'</p><span class="status">'+m[3]+' →</span></a>';
    }).join('');
    return '<section class="wrap catalog-hero vnext-owner-hero"><div class="client-kicker">Owner Review · vNext Courses</div><h1>Review the training as a learner would experience it.</h1><p class="client-intro">These are candidate vNext learning experiences built on the accepted v2 shell. Public course routes are unchanged. Review here is about instructional depth, pacing, sequencing, retention, and whether a learner can build a useful mental model away from the jobsite.</p><div class="vnext-review-principles"><span>One lesson at a time</span><span>Short retrieval checks</span><span>Applied scenarios</span><span>Existing evidence retained</span><span>Hazardous work stays boundary-focused</span></div></section><section class="wrap public-catalog vnext-owner-catalog"><div class="public-catalog-group"><div class="public-catalog-group-head"><div><div class="client-kicker">Candidate learner catalog</div><h2>vNext Courses</h2></div><p>Six major courses plus the Field Skills library. Nothing here is promoted to the public catalog by opening it.</p></div><div class="public-course-grid">'+cards+'</div></div><div class="vnext-legacy-link"><a onclick="location.hash=\''+LEGACY+'\'">Open the legacy research / advanced Owner Review queue →</a></div></section>';
  }

  function fundamentals(){
    const sections=[];
    if(typeof SF_PARTS!=='undefined'&&typeof SF_MODULES!=='undefined'){
      SF_PARTS.forEach(part=>{
        const lessons=[];
        part.moduleNumbers.forEach(mn=>{
          const mod=SF_MODULES[mn]; if(!mod)return;
          (mod.lessons||[]).forEach(ls=>lessons.push({name:ls.name,objective:ls.obj||'Explain the lesson in your own words and connect it to a real call.',rule:mod.rule||'Use the lesson to improve judgment, communication, and role clarity on the real call.',body:(ls.content||'')+retrieval('Without looking back, explain the main decision or behavior in this lesson. Then name one situation where you would ask or report instead of guessing.')}));
        });
        sections.push({name:'Part '+part.num+' — '+part.title,lessons});
      });
    }
    const qs=[
      {question:'An assignment is almost clear, but one detail changes what you would touch. What is the strongest first move?',options:['Guess from the nearby crew','Ask one short clarifying question before acting','Wait silently until someone notices'],answer:1,coaching:'Clarification is part of useful work and prevents rework.'},
      {question:'You find equipment already placed and connected by another department. What is the default mental model?',options:['Preserve the state, verify before changing it, and report conflicts','Improve the setup if you see a faster way','Move it aside until someone asks for it'],answer:0,coaching:'Preserve → Verify → Report protects department ownership and production state.'},
      {question:'What does finishing an online lesson prove?',options:['You are authorized for every related field task','You understand the material presented; practical competence and authorization remain separate','You may supervise another worker'],answer:1,coaching:'Knowledge, observed practice, authorization, and external qualification are separate states.'},
      {question:'Which behavior is most useful across departments?',options:['Trying to look technically advanced','Staying findable, listening, clarifying, completing assigned support, and reporting back','Changing the system before asking'],answer:1,coaching:'Reliable execution and communication transfer across employers and departments.'},
      {question:'A task changes into powered, electrical, rigging, structural, or other specialist work. What changes?',options:['Nothing if the schedule is late','The boundary changes; stop and return the task to the responsible authority','The fastest worker decides'],answer:1,coaching:'Changed scope can change both hazard and authority.'}
    ];
    sections.push({name:'Retention & Next Steps',lessons:[{name:'Cumulative Check & Where to Go Next',objective:'Retrieve the core operating patterns from memory and choose the next appropriate learning path.',rule:'The goal is not perfect recall of every sentence. Recognize the situation, use the right operating pattern, and know when another person or source controls the answer.',body:'<div class="card"><h3>The operating patterns to keep</h3>'+list(['<strong>Listen → Clarify → Execute assigned support → Report back.</strong>','<strong>Preserve → Verify → Report.</strong>','Read the call and current production state before acting.','Treat reliability, equipment stewardship, and clean handoffs as real job competence.','Keep knowledge, physical competence, employer authorization, and specialist qualification separate.'])+'</div><div class="vnext-quiz-stack">'+qs.map((q,i)=>quiz(q,i,'vnext-fund')).join('')+'</div>'+scenario('First-call transfer','You arrive at a venue you have never worked. The crew is moving quickly, department cases are mixed near the dock, and you are assigned to a lead you have not met.','What information do you need first, what should you preserve, and what would a clean report-back sound like after your first assignment?')+'<div class="card"><h3>Choose the next layer</h3><p>Move into Field Skills for ordinary ground-hand work, or choose one department Course 1 for vocabulary and workflow awareness. Neither route replaces employer instruction on the actual equipment and site.</p></div>'}]});
    return {slug:'stagehand-fundamentals',title:META['stagehand-fundamentals'][0],eyebrow:META['stagehand-fundamentals'][1],description:META['stagehand-fundamentals'][2],boundary:'This course prepares a learner to understand the call and make better decisions. It does not certify, qualify, appoint, or authorize specialized work.',sections};
  }

  function intro(slugName){
    const c=DEPT[slugName]; if(!c)return[];
    return [
      {name:'Read the '+c.family+' department on a real call',objective:'Build a mental model of the '+c.family+' workflow before trying to memorize individual tasks.',rule:'Know who owns the system, what phase the crew is in, and what the current production state is before acting.',body:'<div class="card"><h3>What you are likely to see</h3>'+list(c.sees)+'</div><div class="card"><h3>Read the flow, not just the objects</h3><p>A useful beginner does not need every model number. Ask what is arriving, where it is going, who owns it, what must happen before the next crew can work, and which parts are already set, connected, tested, or show-critical.</p></div>'+retrieval('Describe this department as a flow of people, information, equipment, and handoffs—not just a list of gear.')},
      {name:'What useful support actually looks like',objective:'Translate department awareness into observable beginner behavior without bluffing technical identity.',rule:'Useful support is accurate, controlled, findable, and easy for the lead to verify.',body:'<div class="card"><h3>Useful support</h3><p>'+c.useful+'</p></div><div class="card"><h3>The four-step loop</h3>'+list(['Listen to the whole assignment.','Clarify the part that changes your action or boundary.','Execute only the assigned support.','Report completion, damage, mismatch, or anything unresolved.'])+'</div>'+scenario('The assignment sounds familiar','A lead gives you an assignment you have done for another employer, but the equipment and layout are different.','What carries over from experience, and what must you verify before acting?')},
      {name:'Preserve the system before trying to improve it',objective:'Recognize existing production state and avoid creating rework through unrequested changes.',rule:'Preserve → Verify → Report.',body:'<div class="card"><h3>Why this matters</h3><p>Live production is full of deliberate temporary states. A cable may be routed for a reason, a case may be staged for the next build step, a preset may look unfinished, and a label may carry information you do not yet understand.</p></div><div class="card"><h3>Authority boundary</h3><p>'+c.authority+'</p></div>'+retrieval('Name two things that could look wrong or unfinished but should be preserved until the responsible person confirms a change.')}
    ];
  }

  function department(slugName){
    const c=typeof TIERED_COURSES!=='undefined'?TIERED_COURSES[slugName]:null;
    const m=META[slugName]; if(!c||!m)return null;
    const sections=[{name:'Start With the Department',lessons:intro(slugName)}];
    (c.modules||[]).forEach(mod=>sections.push({name:mod.name,lessons:(mod.lessons||[]).map(ls=>({name:ls.name,objective:ls.objective||'Understand the concept and use it to make better support decisions.',rule:c.boundary||'Stay inside the assigned support role and return specialist decisions to the responsible department.',body:(ls.blocks||[]).map(block).join('')+retrieval('Explain this lesson in your own words. What would you recognize, what would you verify, and what would you report rather than change on your own?')}))}));
    if(c.quiz&&c.quiz.length) sections.push({name:'Check Understanding',lessons:[{name:'Department Scenario Check',objective:'Retrieve the department boundaries and workflow without relying on the lesson text.',rule:'A knowledge check tests understanding and judgment. It does not prove physical competence or employer authorization.',body:'<div class="vnext-quiz-stack">'+c.quiz.map((q,i)=>quiz(q,i,'vnext-'+slug(slugName))).join('')+'</div>'+scenario('Changed-condition check','Halfway through an assigned support task, the equipment, route, or production state no longer matches what the lead described.','What should stop, what information should you protect, and who needs the update before work continues?')} ]});
    sections.push({name:'Field Transfer',lessons:[{name:'What the online course can—and cannot—finish',objective:'Connect knowledge to supervised real-world learning without treating online completion as job authorization.',rule:'Prepared for practice ≠ observed practice ≠ employer authorization ≠ external qualification.',body:'<div class="card"><h3>Use this course before the call</h3><p>You should now be better able to recognize the department, follow its workflow, understand the language around your assignment, protect the current system state, and know which questions matter.</p></div><div class="card"><h3>Finish the learning on real equipment</h3><p>The actual employer, lead, manufacturer, venue, and qualified personnel control hands-on methods and authorization. Use relevant Field Skills for ordinary ground tasks, then learn exact equipment and local procedure under responsible in-person direction.</p></div>'+retrieval('State three things you can now understand remotely and three things that still require the real employer, equipment, or qualified person.')} ]});
    return {slug:slugName,title:m[0],eyebrow:m[1],description:m[2],boundary:c.boundary||'Department support awareness does not grant specialist technical authority.',sections};
  }

  function awareness(skill,c){
    const mods=c.modules||[]; const first=mods[0]&&mods[0].lessons&&mods[0].lessons[0]; const last=mods[mods.length-1]&&mods[mods.length-1].lessons&&mods[mods.length-1].lessons[mods[mods.length-1].lessons.length-1];
    let safe=[];
    if(first) safe=safe.concat((first.blocks||[]).filter(b=>b.type!=='sequence'&&b.type!=='demo'&&b.type!=='html').map(block));
    if(last&&last!==first) safe=safe.concat((last.blocks||[]).filter(b=>b.type==='authority'||b.type==='stop'||b.type==='callout').map(block));
    return '<div class="card"><h3>Recognition and scope</h3><p>'+(c.description||'')+'</p></div>'+safe.join('')+'<div class="vnext-awareness-boundary"><div class="vnext-retrieval-kicker">In-person gate</div><p>This vNext lesson intentionally does not reproduce a hazardous or model-specific operating sequence. The responsible employer or lead and current manufacturer procedure control the real setup, force, hardware, traffic, structural, vehicle, or stored-energy decisions for this task.</p></div>'+retrieval('What can a general stagehand recognize or support here, and which decision must return to the responsible authority?');
  }

  function fieldSkills(){
    const sections=[];
    FIELD_GROUPS.forEach(g=>{
      const lessons=[];
      g[1].forEach(skill=>{
        const c=typeof TIERED_COURSES!=='undefined'?TIERED_COURSES[skill]:null; if(!c)return;
        if(AWARENESS_ONLY.has(skill)){
          lessons.push({name:c.title,objective:'Recognize the task, its ownership, common changed conditions, and where online learning stops.',rule:c.boundary||'Follow the named authority and actual equipment or site process.',body:awareness(skill,c)}); return;
        }
        (c.modules||[]).forEach(mod=>(mod.lessons||[]).forEach(ls=>lessons.push({name:c.title+' · '+ls.name,objective:ls.objective||c.description||'Understand the assigned Field Skill and its decision boundaries.',rule:c.boundary||'Use the actual employer, equipment, and site method for hands-on work.',body:'<div class="vnext-skill-label">'+c.title+' · '+mod.name+'</div>'+(ls.blocks||[]).map(block).join('')+retrieval('Explain the transferable work pattern, then name one changed condition that should stop the task or trigger clarification.')})));
        if(c.quiz&&c.quiz.length) lessons.push({name:c.title+' · Knowledge Check',objective:'Check recognition, judgment, and escalation decisions for this Field Skill.',rule:'Passing the knowledge check does not establish hands-on competence or standing employer authorization.',body:'<div class="vnext-quiz-stack">'+c.quiz.map((q,i)=>quiz(q,i,'vnext-'+slug(skill))).join('')+'</div>'});
      });
      sections.push({name:g[0],lessons});
    });
    sections.push({name:'Practice & Transfer',lessons:[{name:'How to use Field Skills without turning them into fake certification',objective:'Keep online preparation, observed practice, authorization, and specialist qualification as separate learning states.',rule:'The online library prepares decisions and vocabulary; the workplace controls actual method and authorization.',body:'<div class="card"><h3>Four separate states</h3>'+list(['<strong>Knowledge completed:</strong> the learner understood the online material.','<strong>Prepared for practice:</strong> the learner knows what to look for and what questions to ask.','<strong>Observed practice:</strong> a named person observed a named task on named equipment and conditions.','<strong>Employer authorized / externally qualified:</strong> a separate decision or credential outside this library.'])+'</div>'+scenario('Same skill, different call','You practiced an ordinary task on one employer’s equipment. On the next call the hardware, route, crew size, or site conditions are different.','What knowledge transfers, and what must be re-established before touching the new setup?')} ]});
    return {slug:'field-skills',title:META['field-skills'][0],eyebrow:META['field-skills'][1],description:META['field-skills'][2],boundary:'Field Skills teach recognition, communication, ordinary bounded support, and practice preparation. They do not create universal methods, specialist authority, or employer authorization.',sections};
  }

  function build(slugName){if(slugName==='stagehand-fundamentals')return fundamentals();if(slugName==='field-skills')return fieldSkills();return department(slugName);}
  function flat(course){const out=[];(course.sections||[]).forEach((s,si)=>(s.lessons||[]).forEach((l,li)=>out.push(Object.assign({},l,{sectionName:s.name,sectionIndex:si,lessonIndex:li}))));return out;}

  function courseView(course,index){
    const all=flat(course); if(!all.length)return '<section class="wrap legal-hero"><h1>'+course.title+'</h1><p>No vNext lessons are available yet.</p></section>';
    index=clamp(index,0,all.length-1); const a=all[index]; let cursor=0;
    const side=(course.sections||[]).map(s=>{const start=cursor;const links=(s.lessons||[]).map(l=>{const i=cursor++;return '<a class="les '+(i===index?'active':'')+'" onclick="vnextSetLesson('+i+')"><span class="vnext-lesson-num">'+String(i+1).padStart(2,'0')+'</span>'+l.name+'</a>';}).join('');const open=index>=start&&index<cursor;return '<div class="sf-module '+(open?'open':'')+'"><div class="sf-module-head" onclick="vnextToggleSection(this)"><span>'+s.name+'</span><span class="sf-count">'+s.lessons.length+'<span class="sf-caret">›</span></span></div><div class="sf-module-lessons">'+links+'</div></div>';}).join('');
    const pct=Math.round(((index+1)/all.length)*100);
    return '<div class="wrap course-shell vnext-shell"><button type="button" class="sf-toggle-btn" id="vnextToggleBtn" onclick="vnextToggleSide()"><span>Course Contents — '+a.sectionName+'</span><span class="sf-caret">›</span></button><aside class="course-side sf-side" id="vnextSide"><div class="vnext-side-head"><a onclick="location.hash=\''+ROOT+'\'">← vNext Courses</a><span>'+course.eyebrow+'</span></div>'+side+'</aside><div class="course-main"><div class="vnext-review-banner"><strong>Owner Review · vNext candidate</strong><span>Public course routes are unchanged.</span></div><div class="sf-crumb">'+course.eyebrow+' · '+a.sectionName+'</div><h2>'+a.name+'</h2><div class="progress-plate"><span>Lesson '+(index+1)+' of '+all.length+'</span><div class="bar-track"><div class="bar-fill" style="width:'+pct+'%"></div></div><span>'+pct+'%</span></div><p id="lessonBody">'+(a.objective||course.description)+'</p><div class="rule-plate"><div class="rule-kicker">Lesson boundary / rule</div><p>'+(a.rule||course.boundary)+'</p></div><div class="sf-lesson-body vnext-lesson-body">'+(a.body||'')+'</div><div class="vnext-course-boundary"><strong>Course boundary:</strong> '+course.boundary+'</div><div class="sf-pager"><button type="button" class="btn btn-ghost" onclick="vnextSetLesson('+(index-1)+')" '+(index===0?'disabled':'')+'>← Previous Lesson</button><button type="button" class="btn btn-primary" onclick="vnextSetLesson('+(index+1)+')" '+(index===all.length-1?'disabled':'')+'>'+(index===all.length-1?'Review Complete':'Next Lesson →')+'</button></div></div></div>';
  }

  function route(){
    const h=location.hash||''; const app=document.getElementById('app'); if(!app)return false;
    if(h===ROOT){currentCourse=null;app.innerHTML=landing();window.scrollTo({top:0,behavior:'instant'});return true;}
    if(h===LEGACY){currentCourse=null;app.innerHTML=originalOwnerReview?originalOwnerReview():'<section class="wrap legal-hero"><h1>Legacy Owner Review</h1><p>No legacy queue is available.</p></section>';window.scrollTo({top:0,behavior:'instant'});return true;}
    if(h.indexOf(ROOT+'/')===0){const s=h.slice((ROOT+'/').length).split('?')[0];currentCourse=build(s);if(!currentCourse){app.innerHTML='<section class="wrap legal-hero"><h1>vNext course not found</h1><p><a onclick="location.hash=\''+ROOT+'\'">← Back to vNext Courses</a></p></section>';return true;}activeLesson=clamp(load(s),0,Math.max(0,flat(currentCourse).length-1));app.innerHTML=courseView(currentCourse,activeLesson);window.scrollTo({top:0,behavior:'instant'});return true;}
    return false;
  }

  window.vnextSetLesson=function(i){if(!currentCourse)return;const total=flat(currentCourse).length;if(i<0||i>=total)return;activeLesson=i;save(currentCourse.slug,i);const app=document.getElementById('app');if(app)app.innerHTML=courseView(currentCourse,i);window.scrollTo({top:0,behavior:'instant'});};
  window.vnextToggleSide=function(){const s=document.getElementById('vnextSide'),b=document.getElementById('vnextToggleBtn');if(s)s.classList.toggle('mobile-open');if(b)b.classList.toggle('open');};
  window.vnextToggleSection=function(head){const m=head&&head.closest('.sf-module');if(m)m.classList.toggle('open');};

  if(originalOwnerReview) ownerReviewQueueView=landing;

  document.addEventListener('click',function(e){
    const b=e.target.closest('.vnext-shell .options .opt'); if(!b||b.disabled)return; const g=b.closest('.options'); if(!g)return; const opts=Array.from(g.querySelectorAll('.opt')); const correct=opts.find(o=>o.dataset.c==='1');
    opts.forEach(o=>{o.disabled=true;if(o.dataset.c==='1')o.classList.add('correct');}); if(b.dataset.c!=='1')b.classList.add('incorrect'); const c=document.getElementById(g.dataset.q+'c'); if(c){const r=c.querySelector('.answer-result');if(r)r.textContent=b.dataset.c==='1'?'Correct. ':'Not quite. Correct answer: '+(correct?correct.textContent:'')+'. ';c.classList.add('show');}
  });
  window.addEventListener('hashchange',function(){setTimeout(route,0);});
  if((location.hash||'')==='#/owner-review-queue'&&typeof render==='function')render();else route();
})();
