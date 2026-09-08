(()=>{const nav=document.querySelector('.nav'),toggle=document.querySelector('.nav-toggle');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}document.querySelectorAll('[data-course]').forEach(course=>{const id=course.dataset.course;const boxes=[...course.querySelectorAll('[data-progress-item]')];const bar=course.querySelector('.progress span');const label=course.querySelector('.progress-label');let saved={};try{saved=JSON.parse(localStorage.getItem('crewBlueprint.v4.progress')||'{}');}catch(e){}function render(){let done=0;boxes.forEach((box,i)=>{const key=id+':'+i;box.checked=!!saved[key];if(box.checked)done++;});const pct=boxes.length?Math.round(done/boxes.length*100):0;if(bar)bar.style.width=pct+'%';if(label)label.textContent=done+' of '+boxes.length+' lessons marked complete · '+pct+'%';}boxes.forEach((box,i)=>box.addEventListener('change',()=>{saved[id+':'+i]=box.checked;try{localStorage.setItem('crewBlueprint.v4.progress',JSON.stringify(saved));}catch(e){}render();}));render();});document.querySelectorAll('[data-premium-lock]').forEach(btn=>btn.addEventListener('click',e=>{if(btn.getAttribute('href')==='#'){e.preventDefault();const gate=document.querySelector('#purchase-gate');if(gate)gate.scrollIntoView({behavior:'smooth',block:'center'});}}));})();
(()=>{
  function renderClerkAuth(){
    const slot=document.getElementById('clerk-auth-slot');
    if(!slot||!window.Clerk)return;
    if(window.Clerk.isSignedIn){
      slot.innerHTML='<div id="clerk-user-button"></div>';
      window.Clerk.mountUserButton(document.getElementById('clerk-user-button'));
    }else{
      slot.innerHTML='<a href="#" id="clerk-sign-in">Sign In</a><a href="#" id="clerk-sign-up" class="work">Create Account</a>';
      const signIn=document.getElementById('clerk-sign-in');
      const signUp=document.getElementById('clerk-sign-up');
      if(signIn)signIn.addEventListener('click',e=>{e.preventDefault();window.Clerk.openSignIn();});
      if(signUp)signUp.addEventListener('click',e=>{e.preventDefault();window.Clerk.openSignUp();});
    }
  }
  window.addEventListener('load',async()=>{
    if(!window.Clerk)return;
    try{
      await window.Clerk.load({ui:{ClerkUI:window.__internal_ClerkUICtor},signInUrl:'/',signUpUrl:'/',signInFallbackRedirectUrl:'/',signUpFallbackRedirectUrl:'/'});
      renderClerkAuth();
      window.Clerk.addListener(()=>renderClerkAuth());
    }catch(e){
      console.error('Clerk failed to load',e);
    }
  });
})();