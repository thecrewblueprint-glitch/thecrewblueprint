(()=>{
  const nav=document.querySelector('.nav'),toggle=document.querySelector('.nav-toggle');
  if(toggle&&nav){
    toggle.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(open));
    });
  }

  const courseRoot=document.querySelector('[data-course]');
  if(courseRoot){
    const existing=[...document.querySelectorAll('link[rel="stylesheet"]')].some(link=>link.href.includes('course-dashboard-v4.css'));
    if(!existing){
      const link=document.createElement('link');
      link.rel='stylesheet';
      const script=document.currentScript;
      link.href=script&&script.src?new URL('../css/course-dashboard-v4.css?v=20260909-1',script.src).href:'../css/course-dashboard-v4.css?v=20260909-1';
      document.head.appendChild(link);
    }
  }

  const assessmentBanks={
    'crew-ready':{
      title:'Crew Ready assessment',
      questions:[
        {prompt:'You receive an unfamiliar assignment. Which information is most important to confirm before committing to the work?',choices:['Only how fast the task should be done','Task, expected result, boundary, and handoff','Whether another worker has done it before','Which tool is closest'],answer:1},
        {prompt:'A lead asks for status while two cases are held because their labels do not match the pack list. What is the strongest response?',choices:['Almost done','There is a problem with some cases','Stage-right case line is clear; two cases are held for label mismatch and need lead confirmation','I think the labels are probably wrong'],answer:2},
        {prompt:'What is the best response when unfamiliar equipment appears damaged or behaves unexpectedly?',choices:['Repair it before anyone notices','Force it gently to see whether it frees up','Stop and route the condition to the responsible person','Move it out of sight and continue'],answer:2},
        {prompt:'Which statement best describes the boundary between helping and taking authority?',choices:['Understanding a task gives permission to perform it','Watching an experienced worker is equivalent to authorization','Support should stay inside the role assigned by the responsible person, especially around controlled work','General stagehands should attempt any task if the schedule is tight'],answer:2},
        {prompt:'When is a physical task actually closed out?',choices:['As soon as the object has been moved','When the task state, unresolved problems, organization, and handoff are clear to the next responsible person','When the worker leaves the area','When the shift ends'],answer:1}
      ]
    },
    'systems-thinking':{
      title:'Systems Thinking assessment',
      questions:[
        {prompt:'You are clearing a work area and a labeled cable trunk is in the way. You do not know whether another department is still using it. What is the best next move?',choices:['Shift it just far enough to make room, but leave the label visible','Identify what it belongs to and confirm it can be moved before changing its position','Move it with the rest of the nearby cable because keeping the area clear is your assignment','Leave it exactly where it is and keep working around it without telling anyone'],answer:1},
        {prompt:'A case label says stage left, but a nearby worker says it should go stage right. You do not know whether the destination changed. What should you do?',choices:['Follow the nearby worker because they may have newer information','Pause the move, keep the label intact, and confirm the destination with the responsible person','Take it to a neutral staging area and let the next crew decide','Change the label to stage right so the case matches the new direction'],answer:1},
        {prompt:'The plan shows one route, but the installed cable or path in front of you is different. You are not assigned to reroute it. What is the strongest response?',choices:['Follow the plan and move the cable into the shown route','Assume the field condition is newer and ignore the plan','Describe the mismatch and get clarification before making a change that could affect the system','Ask a nearby worker which one looks right and use that answer'],answer:2},
        {prompt:'Something stops working after nearby work, but you do not know the cause. Which report gives the responsible technician the most useful information?',choices:['The line stopped after we moved things over here, so it is probably a bad cable','Something is wrong on this side; can someone check it?','This stopped working after that nearby change; this is what I can still see working, and I have not changed anything else','I reseated what I could reach and it still is not back'],answer:2},
        {prompt:'You understand what a system is doing and can see where a problem may be. What does that understanding allow you to do?',choices:['Make the change yourself if it looks low-risk','Take over troubleshooting until the assigned technician returns','Follow your assigned role more intelligently, protect the work, and escalate without assuming authority you were not given','Tell the lead the likely cause so the change can be approved without checking'],answer:2}
      ]
    },
    'shop-logistics':{
      title:'Shop, Warehouse & Logistics assessment',
      questions:[
        {prompt:'What question best captures equipment custody?',choices:['Who touched it first?','Who had it, who has it now, and who needs it next?','How heavy is the case?','How quickly can it be moved?'],answer:1},
        {prompt:'Two similar cases have different labels and destinations. What should happen first?',choices:['Move both to the nearest open space','Remove the labels because they conflict','Read the available identification and route uncertainty to the responsible person','Assume they are interchangeable'],answer:2},
        {prompt:'What is the purpose of prep/QC at foundation level?',choices:['Encourage improvised repairs','Find readiness problems early and route discrepancies appropriately','Teach every worker to service technical equipment','Eliminate the need for manufacturer procedures'],answer:1},
        {prompt:'Why are aisles, passageways, and storage arrangements part of the work system?',choices:['They only affect appearance','They affect access, flow, trip hazards, and storage stability','They matter only when inspectors are present','They are the responsibility of drivers only'],answer:1},
        {prompt:'Which action best represents a clean return/closeout?',choices:['Mix unresolved items into ready inventory','Hide damage to keep the return moving','Preserve identity, condition, accessories, discrepancies, and destination through the final handoff','Leave missing items for the next shift to discover'],answer:2}
      ]
    },
    'department-explorer':{
      title:'Department Explorer assessment',
      questions:[
        {prompt:'You are new to live production and do not yet know which department fits you. What is the best way to use Department Explorer?',choices:['Choose whichever job title sounds most advanced','Compare the work, problems, and responsibilities in each area, then choose what you want to learn and support next','Treat the departments as interchangeable because the same crew habits apply everywhere','Skip support-level learning and start with whichever advanced system seems most interesting'],answer:1},
        {prompt:'Which kind of work most directly points toward the lighting department?',choices:['Microphones, consoles, loudspeakers, and listening','Fixtures, positions, lighting data/control, and the look of the show','LED processing, switching, cameras, and playback','Decks, platforms, scenery, and physical build systems'],answer:1},
        {prompt:'A learner is most interested in microphones, signal paths, consoles, PA systems, and isolating why something cannot be heard. Which department is the closest match?',choices:['Audio','Staging / scenic','Video / LED','Shop / logistics'],answer:0},
        {prompt:'A learner wants to understand LED panels, processors, video signal paths, switching, playback, and cameras. Which department is the closest match?',choices:['Video / LED / AV','Lighting','Staging / scenic','Shop / logistics'],answer:0},
        {prompt:'What does passing Department Explorer establish?',choices:['That you are ready to lead the department you selected','That you are authorized to work in any technical department','That you understand the basic differences well enough to choose what to learn next; field experience, practical competence, and authorization remain separate','That the foundation is equivalent to technician-level department training'],answer:2}
      ]
    }
  };

  const STORAGE_KEY='crewBlueprint.v4.learningState.v2';
  let store={};
  try{store=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')||{};}catch(e){store={};}
  const persist=()=>{try{localStorage.setItem(STORAGE_KEY,JSON.stringify(store));}catch(e){}};

  document.querySelectorAll('[data-course]').forEach(course=>{
    const id=course.dataset.course;
    const lessonList=course.querySelector('.lesson-list');
    if(!lessonList)return;
    const lessons=[...lessonList.querySelectorAll(':scope > .lesson')];
    if(!lessons.length)return;

    lessons.forEach(lesson=>lesson.querySelectorAll('.checkpoint').forEach(node=>node.remove()));
    lessonList.classList.add('is-dashboard');

    const state=store[id]&&typeof store[id]==='object'?store[id]:{};
    state.completedLessons=Array.isArray(state.completedLessons)?state.completedLessons:[];
    state.assessment=state.assessment&&typeof state.assessment==='object'?state.assessment:{passed:false,bestScore:0,attempts:0};
    state.active=typeof state.active==='string'||Number.isInteger(state.active)?state.active:0;
    store[id]=state;

    const completedSet=new Set(state.completedLessons.filter(n=>Number.isInteger(n)&&n>=0&&n<lessons.length));
    const lessonNames=lessons.map((lesson,index)=>{
      const heading=lesson.querySelector('h2');
      const raw=heading?heading.textContent.trim():`Lesson ${index+1}`;
      return raw.replace(/^\d+[.)]?\s*/,'')||`Lesson ${index+1}`;
    });

    const toolbar=document.createElement('div');
    toolbar.className='course-dashboard-toolbar';
    toolbar.setAttribute('aria-label','Course navigation');
    toolbar.innerHTML='<div class="course-dashboard-toolbar-top"><div class="course-dashboard-toolbar-title"><strong>Course lessons</strong><span>Move between lessons, then complete the course assessment after the lesson set.</span></div><label class="lesson-jump"><span>Jump to</span><select aria-label="Jump to lesson"></select></label></div><div class="lesson-tabs" role="tablist" aria-label="Lessons"></div>';
    lessonList.insertBefore(toolbar,lessonList.firstChild);
    const tabList=toolbar.querySelector('.lesson-tabs');
    const select=toolbar.querySelector('select');

    const assessmentData=assessmentBanks[id]||null;
    let assessmentPanel=null;
    if(assessmentData){
      assessmentPanel=document.createElement('article');
      assessmentPanel.className='lesson course-assessment';
      assessmentPanel.dataset.assessmentPanel='true';
      assessmentPanel.hidden=true;
      const intro=document.createElement('div');
      intro.className='assessment-intro';
      intro.innerHTML=`<span class="tag">Course assessment</span><h2>${assessmentData.title}</h2><p>This assessment comes after the lesson set so you have to retrieve the ideas without the lesson text sitting beside the question. You can retry it. Passing is 80%.</p><div class="assessment-meta"><span class="pill">${assessmentData.questions.length} questions</span><span class="pill">80% to pass</span><span class="pill">Retry allowed</span></div>`;
      assessmentPanel.appendChild(intro);
      const form=document.createElement('form');
      form.className='assessment-form';
      form.noValidate=true;
      assessmentData.questions.forEach((question,qIndex)=>{
        const field=document.createElement('fieldset');
        field.className='assessment-question';
        const legend=document.createElement('legend');
        legend.textContent=`${qIndex+1}. ${question.prompt}`;
        field.appendChild(legend);
        const options=document.createElement('div');
        options.className='assessment-options';
        question.choices.forEach((choice,cIndex)=>{
          const label=document.createElement('label');
          label.className='assessment-option';
          const input=document.createElement('input');
          input.type='radio';
          input.name=`q${qIndex}`;
          input.value=String(cIndex);
          const span=document.createElement('span');
          span.textContent=choice;
          label.append(input,span);
          options.appendChild(label);
        });
        field.appendChild(options);
        form.appendChild(field);
      });
      const result=document.createElement('div');
      result.className='assessment-result';
      result.setAttribute('role','status');
      result.setAttribute('aria-live','polite');
      const actions=document.createElement('div');
      actions.className='assessment-actions';
      actions.innerHTML='<button class="btn primary" type="submit">Submit assessment</button><button class="btn" type="button" data-review-lessons>Review lessons</button>';
      const status=document.createElement('div');
      status.className='assessment-status';
      form.append(result,actions,status);
      assessmentPanel.appendChild(form);
      lessonList.appendChild(assessmentPanel);

      form.addEventListener('submit',event=>{
        event.preventDefault();
        const answers=assessmentData.questions.map((question,qIndex)=>{
          const checked=form.querySelector(`input[name="q${qIndex}"]:checked`);
          return checked?Number(checked.value):null;
        });
        if(answers.some(value=>value===null)){
          result.className='assessment-result is-visible is-retry';
          result.textContent='Answer every question before submitting.';
          return;
        }
        let correct=0;
        answers.forEach((value,qIndex)=>{if(value===assessmentData.questions[qIndex].answer)correct++;});
        const pct=Math.round(correct/assessmentData.questions.length*100);
        state.assessment.attempts=(Number(state.assessment.attempts)||0)+1;
        state.assessment.bestScore=Math.max(Number(state.assessment.bestScore)||0,pct);
        if(pct>=80)state.assessment.passed=true;
        persist();
        if(state.assessment.passed){
          result.className='assessment-result is-visible is-pass';
          result.textContent=`Passed: ${correct} of ${assessmentData.questions.length} correct (${pct}%). The course is complete.`;
        }else{
          result.className='assessment-result is-visible is-retry';
          result.textContent=`${correct} of ${assessmentData.questions.length} correct (${pct}%). Review the lessons, then retry when you are ready.`;
        }
        render();
      });
      form.querySelector('[data-review-lessons]').addEventListener('click',()=>activate(Math.max(0,lessons.length-1),true));
    }

    const panels=[...lessons];
    panels.forEach((lesson,index)=>{
      lesson.id=`${id}-lesson-${index+1}`;
      lesson.setAttribute('role','tabpanel');
      lesson.setAttribute('aria-labelledby',`${id}-tab-${index+1}`);
      const actions=document.createElement('div');
      actions.className='lesson-actions';
      const prev=document.createElement('button');
      prev.type='button';prev.className='btn lesson-prev';prev.textContent='← Previous';
      const complete=document.createElement('button');
      complete.type='button';complete.className='btn primary lesson-complete';complete.dataset.completeLesson=String(index);
      const next=document.createElement('button');
      next.type='button';next.className='btn lesson-next';next.textContent=index===lessons.length-1&&assessmentData?'Start Assessment →':'Next →';
      if(index===0)prev.disabled=true;
      prev.addEventListener('click',()=>activate(index-1,true));
      complete.addEventListener('click',()=>{
        completedSet.add(index);
        state.completedLessons=[...completedSet].sort((a,b)=>a-b);
        persist();
        render();
      });
      next.addEventListener('click',()=>{
        if(index<lessons.length-1)activate(index+1,true);
        else if(assessmentData){
          if(completedSet.size===lessons.length)activate('assessment',true);
          else{
            const firstIncomplete=panels.findIndex((_,i)=>!completedSet.has(i));
            activate(firstIncomplete<0?index:firstIncomplete,true);
          }
        }
      });
      actions.append(prev,complete,next);
      lesson.appendChild(actions);
    });

    const tabs=[];
    const options=[];
    lessonNames.forEach((name,index)=>{
      const tab=document.createElement('button');
      tab.type='button';tab.className='lesson-tab';tab.id=`${id}-tab-${index+1}`;tab.setAttribute('role','tab');tab.setAttribute('aria-controls',`${id}-lesson-${index+1}`);tab.dataset.target=String(index);tab.textContent=`${index+1}. ${name}`;
      tab.addEventListener('click',()=>activate(index,true));
      tab.addEventListener('keydown',event=>{
        if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
        event.preventDefault();
        let target=index;
        if(event.key==='ArrowLeft')target=Math.max(0,index-1);
        if(event.key==='ArrowRight')target=Math.min(lessons.length-1,index+1);
        if(event.key==='Home')target=0;
        if(event.key==='End')target=lessons.length-1;
        tabs[target].focus();
        activate(target,false);
      });
      tabList.appendChild(tab);tabs.push(tab);
      const option=document.createElement('option');option.value=String(index);option.textContent=`${index+1}. ${name}`;select.appendChild(option);options.push(option);
    });

    let assessmentTab=null,assessmentOption=null;
    if(assessmentData&&assessmentPanel){
      assessmentPanel.id=`${id}-assessment`;
      assessmentPanel.setAttribute('role','tabpanel');
      assessmentPanel.setAttribute('aria-labelledby',`${id}-tab-assessment`);
      assessmentTab=document.createElement('button');
      assessmentTab.type='button';assessmentTab.className='lesson-tab is-assessment';assessmentTab.id=`${id}-tab-assessment`;assessmentTab.setAttribute('role','tab');assessmentTab.setAttribute('aria-controls',assessmentPanel.id);assessmentTab.dataset.target='assessment';assessmentTab.textContent='Assessment';
      assessmentTab.addEventListener('click',()=>{if(completedSet.size===lessons.length)activate('assessment',true);});
      tabList.appendChild(assessmentTab);
      assessmentOption=document.createElement('option');assessmentOption.value='assessment';assessmentOption.textContent='Course assessment';select.appendChild(assessmentOption);
    }

    select.addEventListener('change',()=>{
      const value=select.value;
      if(value==='assessment'){
        if(completedSet.size===lessons.length)activate('assessment',true);
        else{select.value=String(typeof state.active==='number'?state.active:0);}
      }else activate(Number(value),true);
    });

    const sidebar=course.querySelector('.course-sidebar');
    const progressBar=sidebar?sidebar.querySelector('.progress span'):null;
    const progressLabel=sidebar?sidebar.querySelector('.progress-label'):null;
    let statusBlock=null;
    if(progressLabel){
      statusBlock=document.createElement('div');
      statusBlock.className='course-progress-status';
      progressLabel.insertAdjacentElement('afterend',statusBlock);
    }
    const sidebarNext=sidebar?sidebar.querySelector('.card:first-child a.btn'):null;
    const nextHref=sidebarNext?sidebarNext.getAttribute('href'):null;
    const nextLinks=nextHref?[...document.querySelectorAll('a')].filter(a=>a.getAttribute('href')===nextHref):[];
    nextLinks.forEach(link=>link.addEventListener('click',event=>{if(!state.assessment.passed){event.preventDefault();}}));

    function activate(target,scroll){
      if(target==='assessment'){
        if(!assessmentPanel||completedSet.size!==lessons.length)return;
        panels.forEach(panel=>{panel.hidden=true;panel.classList.remove('is-active');});
        assessmentPanel.hidden=false;assessmentPanel.classList.add('is-active');
        state.active='assessment';
      }else{
        const index=Math.max(0,Math.min(lessons.length-1,Number(target)||0));
        panels.forEach((panel,i)=>{panel.hidden=i!==index;panel.classList.toggle('is-active',i===index);});
        if(assessmentPanel){assessmentPanel.hidden=true;assessmentPanel.classList.remove('is-active');}
        state.active=index;
      }
      persist();
      render();
      if(scroll)toolbar.scrollIntoView({behavior:'smooth',block:'start'});
    }

    function render(){
      const lessonDone=completedSet.size;
      const lessonsPct=lessons.length?Math.round(lessonDone/lessons.length*100):0;
      if(progressBar)progressBar.style.width=lessonsPct+'%';
      if(progressLabel)progressLabel.textContent=`${lessonDone} of ${lessons.length} lessons complete · ${lessonsPct}%`;
      tabs.forEach((tab,index)=>{
        tab.classList.toggle('is-complete',completedSet.has(index));
        const selected=state.active===index;
        tab.setAttribute('aria-selected',String(selected));
        tab.tabIndex=selected?0:-1;
      });
      panels.forEach((panel,index)=>{
        const button=panel.querySelector('[data-complete-lesson]');
        if(button){
          const done=completedSet.has(index);
          button.classList.toggle('is-complete',done);
          button.classList.toggle('primary',!done);
          button.textContent=done?'Lesson Complete ✓':'Complete Lesson';
        }
        const next=panel.querySelector('.lesson-next');
        if(next&&index===lessons.length-1&&assessmentData){
          next.textContent=completedSet.size===lessons.length?'Start Assessment →':'Complete all lessons for assessment';
          next.disabled=completedSet.size!==lessons.length;
        }
      });
      const unlocked=completedSet.size===lessons.length;
      if(assessmentTab){
        assessmentTab.setAttribute('aria-disabled',String(!unlocked));
        assessmentTab.disabled=!unlocked;
        assessmentTab.classList.toggle('is-complete',!!state.assessment.passed);
        const selected=state.active==='assessment';
        assessmentTab.setAttribute('aria-selected',String(selected));
        assessmentTab.tabIndex=selected?0:-1;
      }
      if(assessmentOption)assessmentOption.disabled=!unlocked;
      select.value=state.active==='assessment'&&unlocked?'assessment':String(typeof state.active==='number'?state.active:0);
      if(statusBlock){
        const attempts=Number(state.assessment.attempts)||0;
        const best=Number(state.assessment.bestScore)||0;
        if(state.assessment.passed){
          statusBlock.innerHTML=`<span>Assessment</span><strong class="is-passed">Passed · best score ${best}% · course complete</strong>`;
        }else if(unlocked){
          statusBlock.innerHTML=`<span>Assessment</span><strong class="is-ready">Ready${attempts?` · best score ${best}%`:''}</strong>`;
        }else{
          statusBlock.innerHTML='<span>Assessment</span><strong>Unlocks after all lessons are complete</strong>';
        }
      }
      nextLinks.forEach(link=>{
        const allowed=!!state.assessment.passed;
        link.classList.toggle('is-disabled',!allowed);
        link.setAttribute('aria-disabled',String(!allowed));
        if(!allowed)link.setAttribute('title','Complete the lessons and pass the course assessment first.');
        else link.removeAttribute('title');
      });
      if(assessmentPanel){
        const status=assessmentPanel.querySelector('.assessment-status');
        if(status){
          const attempts=Number(state.assessment.attempts)||0;
          const best=Number(state.assessment.bestScore)||0;
          status.textContent=attempts?`Attempts: ${attempts} · Best score: ${best}%${state.assessment.passed?' · Passed':''}`:'No attempts yet.';
        }
      }
    }

    if(state.active==='assessment'&&completedSet.size!==lessons.length)state.active=Math.max(0,panels.findIndex((_,i)=>!completedSet.has(i)));
    activate(state.active,false);
  });

  document.querySelectorAll('[data-premium-lock]').forEach(btn=>btn.addEventListener('click',e=>{
    if(btn.getAttribute('href')==='#'){
      e.preventDefault();
      const gate=document.querySelector('#purchase-gate');
      if(gate)gate.scrollIntoView({behavior:'smooth',block:'center'});
    }
  }));
})();

(()=>{
  const clerkSiteBase=window.location.pathname.startsWith('/thecrewblueprint/')?'/thecrewblueprint/':'/';

  const AGE_GATE_VERSION='2026-09-10.1';
  const AGE_GATE_PENDING_KEY='crewBlueprint.pendingBirthDate';

  function ageCutoffDate(){
    const today=new Date();
    return new Date(today.getFullYear()-18,today.getMonth(),today.getDate());
  }

  function parseBirthDate(value){
    if(!/^\d{4}-\d{2}-\d{2}$/.test(String(value||'')))return null;
    const date=new Date(value+'T00:00:00');
    return Number.isNaN(date.getTime())?null:date;
  }

  function isAdultBirthDate(value){
    const dob=parseBirthDate(value);
    if(!dob)return false;
    return dob<=ageCutoffDate();
  }

  function pendingBirthDate(){
    try{return window.sessionStorage.getItem(AGE_GATE_PENDING_KEY)||'';}catch(e){return '';}
  }

  function savePendingBirthDate(value){
    try{window.sessionStorage.setItem(AGE_GATE_PENDING_KEY,value);}catch(e){}
  }

  function clearPendingBirthDate(){
    try{window.sessionStorage.removeItem(AGE_GATE_PENDING_KEY);}catch(e){}
  }

  function storedBirthDate(){
    return String(window.Clerk?.user?.unsafeMetadata?.birthDate||'');
  }

  function openAgeGate(intent){
    return new Promise(resolve=>{
      const existing=document.querySelector('.age-gate-backdrop');
      if(existing)existing.remove();

      const backdrop=document.createElement('div');
      backdrop.className='age-gate-backdrop';
      backdrop.innerHTML='<section class="age-gate-dialog" role="dialog" aria-modal="true" aria-labelledby="age-gate-title">'
        +'<span class="tag">18+ account access</span>'
        +'<h2 id="age-gate-title">Enter your date of birth</h2>'
        +'<p>Accounts and full course access are limited to people age 18 or older. Your date of birth is required for account eligibility.</p>'
        +'<label class="age-gate-label" for="age-gate-dob">Date of birth</label>'
        +'<input id="age-gate-dob" class="age-gate-input" type="date" autocomplete="bday" required>'
        +'<p class="age-gate-error" role="alert" hidden></p>'
        +'<div class="age-gate-actions"><button type="button" class="btn" data-age-cancel>Cancel</button><button type="button" class="btn primary" data-age-continue>Continue</button></div>'
        +'<p class="age-gate-note">If the date entered shows you are under 18, account creation and full course access will remain locked.</p>'
        +'</section>';
      document.body.appendChild(backdrop);
      document.body.classList.add('age-gate-open');

      const input=backdrop.querySelector('#age-gate-dob');
      const error=backdrop.querySelector('.age-gate-error');
      const close=result=>{
        backdrop.remove();
        document.body.classList.remove('age-gate-open');
        resolve(result);
      };
      backdrop.querySelector('[data-age-cancel]').addEventListener('click',()=>close(null));
      backdrop.querySelector('[data-age-continue]').addEventListener('click',()=>{
        const value=input.value;
        const dob=parseBirthDate(value);
        if(!dob){
          error.textContent='Enter a valid date of birth.';
          error.hidden=false;
          return;
        }
        if(dob>new Date()){
          error.textContent='Date of birth cannot be in the future.';
          error.hidden=false;
          return;
        }
        if(!isAdultBirthDate(value)){
          error.textContent='Accounts and full course access are limited to people age 18 or older.';
          error.hidden=false;
          input.setAttribute('aria-invalid','true');
          return;
        }
        savePendingBirthDate(value);
        close(value);
      });
      input.focus();
    });
  }

  async function persistBirthDateIfNeeded(value){
    const user=window.Clerk?.user;
    if(!user||!value||storedBirthDate())return;
    try{
      await user.updateMetadata({unsafeMetadata:{
        birthDate:value,
        ageGateVersion:AGE_GATE_VERSION,
        ageGateConfirmedAt:new Date().toISOString()
      }});
    }catch(e){
      console.error('Could not persist birthday to Clerk staging metadata',e);
    }
  }

  async function ensureSignedInAgeEligibility(){
    if(!window.Clerk?.isSignedIn||!window.Clerk?.user)return false;
    let dob=storedBirthDate()||pendingBirthDate();
    if(!dob){
      dob=await openAgeGate('profile');
      if(!dob)return false;
    }
    if(!isAdultBirthDate(dob)){
      clearPendingBirthDate();
      try{await window.Clerk.signOut();}catch(e){}
      return false;
    }
    await persistBirthDateIfNeeded(dob);
    clearPendingBirthDate();
    return true;
  }

  async function openClerkAfterAgeGate(action){
    const dob=await openAgeGate(action);
    if(!dob||!window.Clerk)return;
    if(action==='openSignUp'&&typeof window.Clerk.openSignUp==='function'){
      window.Clerk.openSignUp({unsafeMetadata:{
        birthDate:dob,
        ageGateVersion:AGE_GATE_VERSION,
        ageGateConfirmedAt:new Date().toISOString()
      }});
      return;
    }
    if(action==='openSignIn'&&typeof window.Clerk.openSignIn==='function'){
      window.Clerk.openSignIn();
    }
  }

  function bindClerkAction(id,action){
    const node=document.getElementById(id);
    if(!node||node.dataset.clerkBound==='true')return;
    node.dataset.clerkBound='true';
    node.addEventListener('click',e=>{
      e.preventDefault();
      openClerkAfterAgeGate(action);
    });
  }

  function bindMemberActions(){
    document.querySelectorAll('[data-member-sign-in]').forEach(node=>{
      if(node.dataset.memberBound==='true')return;
      node.dataset.memberBound='true';
      node.addEventListener('click',e=>{
        e.preventDefault();
        openClerkAfterAgeGate('openSignIn');
      });
    });
    document.querySelectorAll('[data-member-sign-up]').forEach(node=>{
      if(node.dataset.memberBound==='true')return;
      node.dataset.memberBound='true';
      node.addEventListener('click',e=>{
        e.preventDefault();
        openClerkAfterAgeGate('openSignUp');
      });
    });
  }

  function renderMemberAccess(state){
    const signedIn=state==='ready'&&window.Clerk&&window.Clerk.isSignedIn;
    document.querySelectorAll('[data-member-full]').forEach(node=>{node.hidden=!signedIn;});
    document.querySelectorAll('[data-member-sample]').forEach(node=>{node.hidden=!!signedIn;});
    document.querySelectorAll('[data-member-state]').forEach(node=>{
      node.textContent=signedIn?'Signed in · full free library':'Preview · sign in for the full free library';
    });
    if(!signedIn)bindMemberActions();
  }

  function renderAdvancedGate(state){
    const root=document.querySelector('[data-advanced-gate]');
    if(!root)return;

    const checking=root.querySelector('[data-advanced-checking]');
    const signedOut=root.querySelector('[data-advanced-signed-out]');
    const signedIn=root.querySelector('[data-advanced-signed-in]');
    const unavailable=root.querySelector('[data-advanced-unavailable]');

    [checking,signedOut,signedIn,unavailable].forEach(node=>{if(node)node.hidden=true;});

    if(state==='unavailable'||!window.Clerk){
      if(unavailable)unavailable.hidden=false;
      return;
    }

    if(window.Clerk.isSignedIn){
      if(signedIn)signedIn.hidden=false;
    }else{
      if(signedOut)signedOut.hidden=false;
      bindClerkAction('advanced-sign-in','openSignIn');
      bindClerkAction('advanced-sign-up','openSignUp');
    }
  }

  async function renderClerkAuth(){
    const slot=document.getElementById('clerk-auth-slot');
    if(!slot||!window.Clerk){
      renderAdvancedGate('unavailable');
      renderMemberAccess('unavailable');
      return;
    }
    if(window.Clerk.isSignedIn){
      const eligible=await ensureSignedInAgeEligibility();
      if(!eligible){
        slot.innerHTML='<span class="auth-status">18+ account verification required</span>';
        renderAdvancedGate('unavailable');
        renderMemberAccess('unavailable');
        return;
      }
      slot.innerHTML='<div id="clerk-user-button"></div>';
      window.Clerk.mountUserButton(document.getElementById('clerk-user-button'));
    }else{
      slot.innerHTML='<a href="#" id="clerk-sign-in">Sign In</a><a href="#" id="clerk-sign-up" class="work">Create Account</a>';
      bindClerkAction('clerk-sign-in','openSignIn');
      bindClerkAction('clerk-sign-up','openSignUp');
    }
    renderAdvancedGate('ready');
    renderMemberAccess('ready');
  }

  window.addEventListener('load',async()=>{
    if(!window.Clerk){
      renderAdvancedGate('unavailable');
      renderMemberAccess('unavailable');
      return;
    }
    try{
      await window.Clerk.load({ui:{ClerkUI:window.__internal_ClerkUICtor},signInUrl:clerkSiteBase,signUpUrl:clerkSiteBase,signInFallbackRedirectUrl:clerkSiteBase,signUpFallbackRedirectUrl:clerkSiteBase,afterSignOutUrl:clerkSiteBase});
      await renderClerkAuth();
      window.Clerk.addListener(()=>{renderClerkAuth();});
    }catch(e){
      console.error('Clerk failed to load',e);
      renderAdvancedGate('unavailable');
      renderMemberAccess('unavailable');
    }
  });
})();
