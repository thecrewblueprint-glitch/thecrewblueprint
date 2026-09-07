/* Clean-sheet learning lab application. Independent from current Crew Blueprint learner routes. */
(function(){
'use strict';
const data=window.CLEAN_SHEET;
const app=document.getElementById('main');
if(!data||!app){return;}

const routeFor=(program,index)=>`#/program/${program}${Number.isInteger(index)?'/'+index:''}`;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const flat=p=>{const out=[];(p.modules||[]).forEach((m,mi)=>(m.lessons||[]).forEach((l,li)=>out.push({...l,module:m.name,moduleIndex:mi,lessonIndex:li})));return out;};
const key=id=>`crew-blueprint-clean-sheet-v1:${id}:lesson`;
const load=id=>Math.max(0,parseInt(localStorage.getItem(key(id))||'0',10)||0);
const save=(id,i)=>localStorage.setItem(key(id),String(i));
const clamp=(n,a,b)=>Math.min(b,Math.max(a,n));

function home(){
 return `
 <section class="wrap hero">
   <div class="kicker">The Crew Blueprint · clean-sheet candidate</div>
   <h1>Learn the work. Find the work. Become the hand people ask for again.</h1>
   <p>This version starts from the problems workers and employers actually describe: first-call confusion, reliability, useful support, field competence, department choice, irregular hiring routes, and figuring out what to learn next.</p>
   <div class="hero-actions"><a class="btn btn-primary" href="#/learn">Start learning</a><a class="btn" href="#/work">I need work</a><a class="btn" href="#/sources">Why this curriculum?</a></div>
   <div class="statement">
     <div class="statement-card"><div class="eyebrow">What this is</div><h2>Training for the job that exists—not a giant catalog of things production people might someday know.</h2><p>The learner path follows the real progression of a new hand: get the call, understand the call, become useful, build ordinary field competence, choose a branch, find more work, and grow deliberately.</p></div>
     <div class="statement-card"><div class="eyebrow">What it refuses to fake</div><div class="proof-list"><div class="proof"><b>01</b><span>An online course is not employer authorization.</span></div><div class="proof"><b>02</b><span>Advanced-sounding content is not automatically useful beginner training.</span></div><div class="proof"><b>03</b><span>One employer, venue or crew does not define the whole industry.</span></div><div class="proof"><b>04</b><span>Changing job-market data belongs in Production Atlas, not frozen lessons.</span></div></div></div>
   </div>
 </section>
 <section class="section"><div class="wrap"><div class="section-head"><div><div class="eyebrow">Pick your situation</div><h2>Start where you actually are.</h2></div><p>You do not need to complete the site in one prescribed order. These are entry points into the same work ecosystem.</p></div>
 <div class="grid">
   <a class="path-card" href="${routeFor('start')}"><div class="eyebrow">I need my first call</div><h3>Start Working</h3><p>What the call is, how to read it, how to arrive ready, how assignments work, and what to notice during your first five calls.</p><span class="card-foot">Open first-call training →</span></a>
   <a class="path-card" href="${routeFor('trusted')}"><div class="eyebrow">I already get calls</div><h3>Become the Hand They Want Back</h3><p>Reliability, state preservation, equipment stewardship, situational awareness, clean handoffs, and the behaviors crews remember.</p><span class="card-foot">Build professional trust →</span></a>
   <a class="path-card" href="${routeFor('departments')}"><div class="eyebrow">I want a specialty</div><h3>Choose a Department</h3><p>Learn how lighting, audio, video/LED, staging/scenic, and performer-support departments actually fit into production before choosing deeper training.</p><span class="card-foot">Explore departments →</span></a>
 </div></div></section>
 <section class="section"><div class="wrap"><div class="section-head"><div><div class="eyebrow">The learning map</div><h2>One job journey, seven decisions.</h2></div><p>The structure is based on employer demand, public worker pain points, Production Atlas industry architecture, and regulatory boundaries—not on the previous course numbering system.</p></div>
 <div class="learning-map">
 ${[['1','Get the call'],['2','Understand the call'],['3','Become useful'],['4','Build field competence'],['5','Choose a department'],['6','Find more work'],['7','Grow deliberately']].map(x=>`<div class="map-step"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}
 </div></div></section>
 <section class="section"><div class="wrap"><div class="section-head"><div><div class="eyebrow">Core programs</div><h2>The complete clean-sheet set.</h2></div></div><div class="grid">${data.order.map(id=>programCard(data.programs[id])).join('')}</div></div></section>`;
}

function programCard(p){
 const count=flat(p).length;
 const progress=clamp(load(p.id),0,Math.max(0,count-1));
 return `<a class="course-card" href="${routeFor(p.id,progress)}"><div class="eyebrow">${esc(p.subtitle)}</div><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="tag-row"><span class="tag">${count} lesson${count===1?'':'s'}</span><span class="tag">${esc(p.audience)}</span></div><span class="card-foot">${progress?'Continue':'Open'} →</span></a>`;
}

function learn(){
 const ids=['start','trusted','field','departments'];
 return `<section class="wrap hero"><div class="kicker">Learn</div><h1>Build the parts of the job that transfer.</h1><p>Start with how calls work and what makes a worker useful. Then practice ordinary field judgment and choose a department based on what the work actually looks like.</p></section><section class="section"><div class="wrap"><div class="grid">${ids.map(id=>programCard(data.programs[id])).join('')}</div></div></section>`;
}

function work(){
 const p=data.programs.work;
 return `<section class="wrap hero"><div class="kicker">Find Work</div><h1>The job market is an ecosystem, not one job board.</h1><p>Learn the durable hiring map here, then use Production Atlas for current employers, IATSE routes, vendors, markets, and opportunities.</p><div class="hero-actions"><a class="btn btn-primary" href="${routeFor('work',load('work'))}">Open Find Work training</a><a class="btn" target="_blank" rel="noopener" href="https://atlas.thecrewblueprint.com/opportunities.html">Open current opportunities ↗</a></div></section><section class="section"><div class="wrap"><div class="dashboard-grid"><div class="intent-card"><div class="intent-num">01</div><div><h3>Learn the employer map</h3><p>Labor providers, IATSE/local routes, venues, rental/production vendors, touring networks, festival/site contractors, and production offices can all be entry doors.</p></div></div><div class="intent-card"><div class="intent-num">02</div><div><h3>Build evidence people can trust</h3><p>Accurate experience, transferable strengths, dependable calls, and professional references beat inflated technical claims.</p></div></div><div class="intent-card"><div class="intent-num">03</div><div><h3>Use live intelligence</h3><p>Production Atlas carries changing employer/opportunity information so the training itself does not go stale every time the market changes.</p></div></div><div class="intent-card"><div class="intent-num">04</div><div><h3>Track your own market</h3><p>Your calls, employers, departments, seasons, feedback, and follow-up results become your strongest local career dataset over time.</p></div></div></div></div></section>`;
}

function grow(){
 const p=data.programs.grow;
 return `<section class="wrap hero"><div class="kicker">Grow</div><h1>Do not climb a fake ladder. Build a career lattice.</h1><p>Live production branches by craft, employer, venue, shop, tour, market, and responsibility. Choose deeper learning when real work, mentors, demand, and qualification requirements justify it.</p><div class="hero-actions"><a class="btn btn-primary" href="${routeFor('grow',load('grow'))}">Open career-growth training</a></div></section><section class="section"><div class="wrap"><div class="section-head"><div><div class="eyebrow">Common responsibility layers</div><h2>Layers recur. Titles do not.</h2></div></div><div class="learning-map">${[['L0','General production support'],['L1','Department support'],['L2','Technician / craft worker'],['L3','Senior / specialist'],['L4','Lead / head / crew chief'],['L5','Design / engineering / management']].map(x=>`<div class="map-step"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}</div></div></section>`;
}

function sources(){
 return `<section class="wrap hero"><div class="kicker">Evidence & source ledger</div><h1>Different evidence answers different questions.</h1><p>Regulations and authoritative technical sources control safety boundaries. Hiring evidence tells us what employers select for. Worker communities tell us where learners struggle. Production Atlas maps the industry and current work ecosystem. None of those evidence classes is allowed to impersonate another.</p></section>
 <section class="section"><div class="wrap">${data.sourceGroups.map(g=>`<div class="statement-card" style="margin-bottom:18px"><div class="eyebrow">${esc(g.type)}</div><h2>${esc(g.use)}</h2><table class="source-table"><thead><tr><th>Source</th><th>Reference</th></tr></thead><tbody>${g.items.map(i=>`<tr><td>${esc(i[0])}</td><td><a href="${i[1]}" target="_blank" rel="noopener">Open source ↗</a></td></tr>`).join('')}</tbody></table></div>`).join('')}</div></section>`;
}

function quizHtml(q,ns){
 if(!q)return'';
 return `<div class="quiz"><h3>Check your understanding</h3><p>${esc(q.question)}</p><div class="options" data-answer="${q.answer}" data-ns="${ns}">${q.options.map((o,i)=>`<button class="opt" type="button" data-i="${i}">${esc(o)}</button>`).join('')}</div><div class="coach"><strong>Why:</strong> ${esc(q.coaching)}</div></div>`;
}

function program(id,index){
 const p=data.programs[id];
 if(!p)return empty('Program not found');
 const lessons=flat(p); if(!lessons.length)return empty('No lessons available');
 index=clamp(Number.isInteger(index)?index:load(id),0,lessons.length-1);save(id,index);
 const active=lessons[index];let cursor=0;
 const side=(p.modules||[]).map(m=>{const links=(m.lessons||[]).map(l=>{const i=cursor++;return `<a class="lesson-link ${i===index?'active':''}" href="${routeFor(id,i)}"><span class="lesson-num">${String(i+1).padStart(2,'0')}</span><span>${esc(l.title)}</span></a>`}).join('');return `<div class="module-head">${esc(m.name)}</div>${links}`}).join('');
 const pct=Math.round(((index+1)/lessons.length)*100);
 return `<div class="course-shell"><aside class="course-side"><div class="side-head"><a href="#/learn">← Learning home</a><h2>${esc(p.title)}</h2><p>${esc(p.audience)}</p></div>${side}</aside><article class="course-main"><div class="crumb">${esc(p.subtitle)} · ${esc(active.module)}</div><h1>${esc(active.title)}</h1><p class="lede">${esc(active.objective)}</p><div class="progress"><span>Lesson ${index+1} of ${lessons.length}</span><div class="track"><div class="fill" style="width:${pct}%"></div></div><span>${pct}%</span></div><div class="lesson-block">${active.body}${quizHtml(active.quiz,`${id}-${index}`)}</div><div class="pager"><a class="btn" ${index===0?'aria-disabled="true" style="visibility:hidden"':`href="${routeFor(id,index-1)}"`}>← Previous</a>${index===lessons.length-1?`<a class="btn btn-primary" href="${id==='work'?'#/work':id==='grow'?'#/grow':'#/learn'}">Finish & return</a>`:`<a class="btn btn-primary" href="${routeFor(id,index+1)}">Next lesson →</a>`}</div></article></div>`;
}

function empty(msg){return `<section class="empty"><h1>${esc(msg)}</h1><p><a class="btn" href="#/home">Return home</a></p></section>`}

function render(){
 const h=(location.hash||'#/home').replace(/^#/,'');const parts=h.split('/').filter(Boolean);let html='';
 if(!parts.length||parts[0]==='home')html=home();
 else if(parts[0]==='learn')html=learn();
 else if(parts[0]==='work')html=work();
 else if(parts[0]==='grow')html=grow();
 else if(parts[0]==='sources')html=sources();
 else if(parts[0]==='program'&&parts[1])html=program(parts[1],parts[2]!==undefined?parseInt(parts[2],10):undefined);
 else html=empty('That lab page does not exist.');
 app.innerHTML=html;window.scrollTo(0,0);requestAnimationFrame(()=>app.focus({preventScroll:true}));
}

document.addEventListener('click',e=>{
 const b=e.target.closest('.opt');if(!b)return;const group=b.closest('.options');if(!group||group.dataset.done==='1')return;group.dataset.done='1';const ans=parseInt(group.dataset.answer,10);const opts=[...group.querySelectorAll('.opt')];opts.forEach((o,i)=>{o.disabled=true;if(i===ans)o.classList.add('correct')});if(parseInt(b.dataset.i,10)!==ans)b.classList.add('wrong');const coach=group.parentElement.querySelector('.coach');if(coach)coach.classList.add('show');
});
window.addEventListener('hashchange',render);render();
})();
