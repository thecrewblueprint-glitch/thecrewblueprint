/* Context Labs extend the clean-sheet curriculum without changing existing programs. */
(function(){
'use strict';
const D=window.CLEAN_SHEET;if(!D)return;
const Q=(question,options,answer,coaching)=>({question,options,answer,coaching});
const V=(title,steps)=>`<div class="visual"><div class="visual-title">${title}</div><div class="visual-flow" style="--n:${steps.length}">${steps.map(s=>`<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join('')}</div></div>`;
const R=t=>`<div class="retrieval"><strong>Close the page for 20 seconds</strong><p>${t}</p></div>`;
const F=(h,t)=>`<div class="field-note"><strong>${h}</strong><p>${t}</p></div>`;
const B=t=>`<div class="boundary"><strong>Boundary</strong><p>${t}</p></div>`;
const S=(h,t,p)=>`<div class="scenario"><strong>Context lab</strong><h3>${h}</h3><p>${t}</p><p><b>Think it through:</b> ${p}</p></div>`;
const C=(h,t)=>`<div class="callout"><strong>${h}</strong><p>${t}</p></div>`;
const lesson=(title,objective,body,quiz)=>({title,objective,body,quiz});
D.programs.contexts={id:'contexts',title:'Context Labs',subtitle:'Same ecosystem, different operating conditions',description:'Practice reading the environment before applying what you know. Festivals, arenas, venues, ballrooms and shops can use the same production principles with very different logistics and hazard emphasis.',audience:'Anyone who wants judgment that transfers between gigs',modules:[
 {name:'Read the environment first',lessons:[
  lesson('Same process, different shape','Learn to separate durable production logic from local workflow.',`
    <h2>The job repeats patterns without repeating the exact jobsite</h2>
    <p>A touring package can visit five cities and encounter five different docks, rigging conditions, house rules, labor structures, stage dimensions, credential systems, truck approaches, power arrangements and load-out routes. A festival can use many of the same departments but spread them across acres of site with compounds, boneyards, temporary roads and changing weather.</p>
    <p>The transferable skill is not memorizing one crew’s sequence. It is recognizing the same questions in a new environment: who owns the work, what phase are we in, what is moving next, what route is controlled, what changed, which hazards dominate here, and where does my authority stop?</p>
    ${V('Read every new gig through six lenses',[['People','Who owns the work and who directs you?'],['Phase','Advance, load-in, build/check, show, or strike?'],['Flow','Where are trucks, cases, cable, people and information moving?'],['Space','What routes, heights, surfaces and access limits shape the work?'],['Hazard','What conditions matter more here than on the last gig?'],['Authority','Which tasks or zones require a different role, qualification or site permission?']])}
    ${C('The key distinction','A principle may transfer even when a method does not. “Preserve released state before strike” transfers. The exact release phrase, cable route, department lead, or dock sequence may not.')}
    ${R('Name one production principle that should transfer between gigs and one workflow detail you should never assume will transfer.')}`,
    Q('What is the strongest way to approach a new venue or site?',['Apply the last venue’s workflow exactly','Identify the stable production questions, then learn the local answers','Wait until someone corrects every assumption'],1,'Transfer the reasoning framework, not the previous site’s exact method.'))
 ]},
 {name:'Outdoor festival',lessons:[
  lesson('Festival site: the build is larger than the stage','See the event as a coordinated site with many simultaneous production branches.',`
    <p>At a festival, the stage is only one node in a larger temporary city. Site operations may establish roads, fencing, barricade, compounds, credentials, ground protection, signage, waste systems and vendor areas while staging, rigging, power, audio, lighting, video, backline, catering, security, medical, green teams, trucking and production offices build their own connected systems.</p>
    ${V('Festival ecosystem',[['Site / Ops','Access, compounds, site routes, credentials and infrastructure.'],['Stages','Staging, rigging and department builds.'],['Power / Services','Generators, distro zones, lighting, sanitation and support services.'],['Artist / Show','Backline, stage management, hospitality and touring teams.'],['Public / Vendor','Security, concessions, vendors, green team and guest-facing operations.']])}
    ${F('What changes here','Distance, weather, temporary surfaces, vehicles/powered equipment, crane or overhead work, multiple stages, site-wide radio traffic and remote compounds can matter far more than on a small indoor call.')}
    ${B('Crane operations, rigging, powered equipment, temporary power, structural acceptance and emergency/site command remain with the responsible trained/authorized personnel. General training should help you recognize those interfaces, not operate them.')}
    ${S('The boneyard is 200 yards away','Your department wants empties cleared from stage. The direct path is now partially blocked by another vendor’s build and powered equipment is active near the compound.','Which parts of the original movement plan need to be re-verified before you move the cases?')}`,
    Q('Why can festival logistics change an otherwise ordinary case move?',['Distance, route control, surfaces, simultaneous vendors and powered activity can change','Cases become different equipment outdoors','Festival crews never use labels'],0,'The object may be ordinary while the operating context changes the plan.')),
  lesson('Festival handoffs happen between organizations','Learn to recognize when “the crew” is actually several companies sharing one site.',`
    <p>A worker may receive direction from a labor employer while supporting a touring technician whose equipment belongs to a vendor on a stage managed by another production company inside a site controlled by festival operations. That is normal.</p>
    <p>Clean handoffs matter because no single person carries every detail. Use names, departments, stage/zone identifiers, labels, radio channels or other approved production information rather than vague references like “that guy over there.”</p>
    ${C('Useful report','“Lighting stage left has six empty fixture cases ready for the assigned boneyard route; the usual crossing is blocked by site ops. Who controls the alternate route?”')}
    ${R('Describe one handoff where your employer, the equipment owner and the site authority could all be different organizations.')}`,
    Q('What makes cross-company work manageable?',['Clear ownership, location, state and handoff information','Assuming every vest color means the same thing','Ignoring company boundaries'],0,'Shared sites require explicit handoffs.'))
 ]},
 {name:'Arena / dock',lessons:[
  lesson('Arena load-in: compressed flow','Understand why the bowl, dock, truck line and overhead work create a different operating rhythm.',`
    <p>An arena can concentrate many departments into a relatively small footprint. Trucks queue at docks, loaders and hands move equipment into the bowl, riggers may be working overhead, stage systems build from the floor, and audio/video/lighting packages may need access in a specific sequence.</p>
    ${V('Arena flow',[['Truck line','Loads arrive in a controlled order.'],['Dock / Loader','Cases transfer between truck authority and floor movement.'],['Bowl','Departments stage and build in shared space.'],['Overhead interface','Rigging/approved overhead work can restrict areas below.'],['Show state','Access and movement narrow as the room becomes operational.']])}
    ${F('What changes here','Congestion, dock edges, ramps, truck timing, overhead activity, arena-floor routes, dark or transitional show states and fast strike sequencing can dominate the day.')}
    ${B('Overhead rigging, truck loading plans, powered equipment and controlled exclusion zones remain under the actual responsible authority. Follow site/lead controls rather than an online procedure.')}`,
    Q('What is an arena-specific reason to avoid wandering between departments?',['The shared bowl and dock depend on controlled crew/material flow','Arena floors are always empty','Every department has identical equipment'],0,'Compressed spaces magnify coordination problems.')),
  lesson('Load-out is not load-in backwards','See why release order and truck sequence can make strike a different process.',`
    <p>Load-out may happen faster than load-in, but it is not simply the earlier sequence in reverse. Departments release systems at different times. Empty cases return from boneyards. Truck positions and pack order matter. Public areas may still be clearing. Some equipment cannot move until another system is safe and released.</p>
    ${C('Strike question','Before you touch an item, know: is it released, who owns it, where is its case or destination, and what route is active now?')}
    ${S('The case is here before the gear is released','An empty road case returns to the bowl and is parked next to installed equipment.','What does the presence of the empty case prove—and what does it not prove?')}`,
    Q('What does an empty case next to equipment prove?',['Only that the case is present; it does not prove strike release','The equipment is safe to disconnect','The truck is ready'],0,'Physical proximity is not a release signal.'))
 ]},
 {name:'Venue / theatre',lessons:[
  lesson('House systems change the ownership map','Recognize when you are entering a permanent technical environment rather than building everything from zero.',`
    <p>Theatres, clubs, performing-arts centers and other venues may have permanent rigging, power, lighting positions, audio infrastructure, patch systems, stage machinery, house rules and resident staff. A touring package may integrate with those systems rather than replace them.</p>
    ${F('What changes here','House authority, permanent-system rules, historic or delicate spaces, stage machinery, fixed egress, audience turnover and established local procedures may matter more than festival-style site logistics.')}
    ${C('Useful beginner behavior','Learn who the house authority is, which systems are permanent, what the visiting production controls, and what must not be changed without house approval.')}
    ${B('Permanent electrical, rigging, machinery and house-system operation remain under the venue’s and employer’s qualification/authorization rules.')}`,
    Q('Why can a venue technician’s authority matter even when a tour carries its own gear?',['The tour may interface with permanent house systems and rules','Touring crews automatically control the building','Permanent systems are never used'],0,'Visiting production works inside a venue-owned environment.'))
 ]},
 {name:'Corporate / convention',lessons:[
  lesson('Ballrooms and convention centers: precision without the festival footprint','Read a production where client schedules, room turnover, public access and finish quality may dominate.',`
    <p>Corporate and convention work can involve audio, lighting, video, scenic, staging and rigging just like concerts, but the operating priorities may feel different. Rooms may turn quickly between sessions, multiple breakouts may run simultaneously, public areas may remain active, and client-facing finish can matter continuously.</p>
    ${V('What may dominate',[['Schedule','Room turns, rehearsals and session timing.'],['Presentation','Clean appearance, labels, drape and cable management.'],['Public interface','Guests and venue operations may be nearby.'],['Information','Room names, breakout schedules, drawings and run-of-show documents.']])}
    ${F('Transferable principle','Reliability, read-the-call discipline, ownership, clean handoffs and state preservation still apply. The visible priorities and pace simply shift.')}`,
    Q('What changes most in corporate/convention context?',['The emphasis and logistics, not the underlying need for coordination','All safety boundaries disappear','Departments stop interacting'],0,'Context changes what gets emphasized.'))
 ]},
 {name:'Shop / warehouse',lessons:[
  lesson('The show starts before the truck leaves','Understand prep, QC, inventory and return state as part of live production.',`
    <p>A production shop or warehouse reveals the hidden half of the job. Equipment is selected, labeled, prepped, tested by appropriate technicians, packed, dispatched, returned, inspected and reset for the next use. Field mistakes often become shop problems later.</p>
    ${V('Equipment lifecycle',[['Select','Correct system/components chosen.'],['Prep','Labels, accessories and configuration prepared.'],['Dispatch','Packed and handed to transport/field.'],['Use','Deployed and controlled on the event.'],['Return','Inventory, condition and missing/damaged state reconciled.']])}
    ${C('Why this matters to a hand','If you preserve labels, accessories, case identity and damage information in the field, you are supporting the next crew before you ever meet them.')}
    ${B('Powered industrial trucks and specialized shop machinery require employer-provided training/authorization appropriate to the actual equipment and workplace conditions.')}`,
    Q('Why is return state important?',['It affects inventory, repair, prep and the next production','The show is already over so it does not matter','Only managers see returned gear'],0,'Production is a lifecycle, not only the show day.'))
 ]}
]};
if(!D.order.includes('contexts')) D.order.splice(4,0,'contexts');
})();
