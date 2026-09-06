/* Clean-sheet candidate curriculum. New structure and wording; existing curriculum is evidence, not template. */
(function(){
'use strict';
const Q=(question,options,answer,coaching)=>({question,options,answer,coaching});
const V=(title,steps)=>`<div class="visual"><div class="visual-title">${title}</div><div class="visual-flow" style="--n:${steps.length}">${steps.map(s=>`<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join('')}</div></div>`;
const R=(text)=>`<div class="retrieval"><strong>Close the page for 20 seconds</strong><p>${text}</p></div>`;
const F=(title,text)=>`<div class="field-note"><strong>${title}</strong><p>${text}</p></div>`;
const B=(text)=>`<div class="boundary"><strong>Boundary</strong><p>${text}</p></div>`;
const S=(title,text,prompt)=>`<div class="scenario"><strong>Call scenario</strong><h3>${title}</h3><p>${text}</p><p><b>Think it through:</b> ${prompt}</p></div>`;
const C=(title,text)=>`<div class="callout"><strong>${title}</strong><p>${text}</p></div>`;
const lesson=(title,objective,body,quiz)=>({title,objective,body,quiz});

const programs={
start:{
  id:'start',title:'Start Working',subtitle:'First-call readiness',description:'Understand what a live-production call is, how to arrive ready, how work flows, and what to do when you are new.',audience:'Brand-new and first-five-call workers',modules:[
    {name:'Before the first assignment',lessons:[
      lesson('What a stagehand job actually is','Replace the vague idea of “working concerts” with a realistic mental model of local production labor.',`
        <h2>You are entering a temporary production system</h2>
        <p>A stagehand call is usually not a single craft performed from start to finish. It is a temporary workforce joining a venue, touring crew, production vendor, promoter, or event team for a specific window of work. On one call you may spend most of the time moving cases and preparing work areas. On another, you may be assigned to one department and stay with that department for the entire load-in.</p>
        <p>The useful beginner question is not “How do I prove I know production?” It is “What is this crew trying to accomplish right now, who owns the part I am touching, and what does useful support look like in this phase?”</p>
        ${V('A typical production day is a sequence, not a pile of tasks',[['Advance','Plans, schedules and responsibilities are established before crew call.'],['Load-in','People, equipment and information move into working position.'],['Build / Check','Departments assemble, verify and prepare systems.'],['Show','The production enters an operating state.'],['Load-out','Systems are released, struck, packed and handed off.']])}
        ${C('The point','You do not need to arrive knowing every department. You do need to understand that the event is already organized before you show up, and your first job is to enter that organization cleanly.')}
        ${R('Explain the difference between “I can physically move this” and “this has been assigned and released for me to move.”')}`,
        Q('What is the strongest first mental model for a new stagehand?',['Prove technical knowledge immediately','Enter an existing production system and learn who owns the work','Find the heaviest task first'],1,'The production already has owners, plans, sequencing, and dependencies.')),
      lesson('Read the call before you leave','Use call information to arrive at the right place, time, role, and state of readiness.',`
        <h2>A call sheet is part of the job</h2>
        <p>Before you travel, pull out the details that change your actions: venue and entrance, report time, department or position, supervisor or check-in point, parking or transit notes, expected clothing, site-required PPE, meal or break information when provided, and anything the employer says to bring.</p>
        <p>Do not treat a screenshot of an address as the entire call. Large venues may have several docks, security entrances, compounds, or crew gates. Festival sites may use credentials and remote parking. A five-minute clarification before travel can prevent being functionally late while standing at the wrong door.</p>
        ${V('Read the call in this order',[['Where','Venue, gate, dock, room or check-in point.'],['When','Report time, not “when the work probably starts.”'],['Who','Employer, lead, department or contact.'],['What','Role, clothing, PPE and call-specific expectations.'],['Change','Updates, weather, parking, credentials or revised instructions.']])}
        ${F('Hiring signal','Current event-tech postings explicitly expect workers to use equipment sheets, schedules, lists, and supervisor information. Reading the call is operational competence, not paperwork trivia.')}
        ${S('The address is correct, the entrance is not','You arrive at a convention center ten minutes early, but the public lobby does not allow crew entry and the dock is on another street.','What information should you have confirmed before travel, and who should receive the update if you are delayed?')}`,
        Q('Which detail is most likely to make a technically “on-time” worker late in practice?',['Not knowing the crew entrance or check-in point','Not owning a console','Not memorizing the venue capacity'],0,'Arrival logistics are part of readiness.')),
      lesson('Arrive ready without buying a costume','Separate employer/site requirements from internet folklore about what every stagehand must own.',`
        <h2>Prepared means appropriate to this call</h2>
        <p>Online stagehand discussions often turn into lists of tools, boots, clothes, and gadgets. Some of that advice is useful, but the employer and site control actual requirements. The right preparation is to follow the call, wear work-appropriate clothing, bring required PPE or employer-provided equipment as directed, and carry only tools you are expected and competent to use.</p>
        <p>Do not mistake personal spending for professional development. A worker with expensive gear who misses instructions is less useful than a worker with the required equipment who listens, stays available, and handles assignments carefully.</p>
        ${C('Practical readiness','Have a way to receive updates, know your transportation plan, bring water/food only as site rules allow, protect yourself from expected weather, and keep required identification or credentials accessible.')}
        ${B('PPE selection is not a universal Crew Blueprint shopping list. OSHA places hazard assessment and PPE selection responsibilities on the employer; site and task conditions determine what is required.')}
        ${R('Name three readiness decisions controlled by the actual employer/site rather than by a generic internet checklist.')}`,
        Q('What is the best definition of “prepared”?',['Owning the most stagehand tools','Meeting the actual call, site and task requirements','Dressing exactly like experienced workers online'],1,'Readiness is call-specific.'))
    ]},
    {name:'Entering the crew',lessons:[
      lesson('Find your lead and stay findable','Understand why assignment ownership and availability matter more than trying to look busy.',`
        <h2>Your lead should not have to hunt for you</h2>
        <p>On a busy load-in, multiple departments may be working within a few feet of each other. That does not make every nearby task yours. Check in, learn who is directing your work, and stay where that team can use you unless you are reassigned or released.</p>
        <p>There will be periods when you are waiting. Waiting is not automatically a break, and it is not permission to wander into another department. A useful standby worker remains aware, keeps routes clear, and can respond when the next task is ready.</p>
        ${V('Assignment loop',[['Check in','Know the person or team directing you.'],['Listen','Get the complete assignment before moving.'],['Work','Stay inside the assigned scope and area.'],['Report','Say what is done, blocked or changed.'],['Stand by','Remain available until reassigned or released.']])}
        ${F('Worker signal','Experienced hands repeatedly describe “disappearing,” wandering, or being absorbed by another crew as a fast way for a new worker to become difficult to manage.')}`,
        Q('Another crew asks you to help while your assigned lead is looking for you. What is the strongest default?',['Switch crews immediately','Stay with your assignment unless properly reassigned or an urgent safety issue requires action','Hide until both crews stop asking'],1,'Assignment ownership keeps the production coordinated.')),
      lesson('Listen → Clarify → Work → Report','Use a short communication loop that prevents avoidable rework.',`
        <h2>Questions are part of the job</h2>
        <p>New workers often think asking a question makes them look inexperienced. In practice, experienced crews repeatedly say the opposite: a short question before an unclear action is easier to manage than a confident mistake that must be undone.</p>
        <p>Listen through the full instruction first. Then clarify the detail that changes what you will do. Repeat back unusual destinations, counts, sides, labels, or release states when that reduces ambiguity. Complete the assigned support. Report back instead of assuming the lead noticed.</p>
        ${V('The communication loop',[['Listen','Let the instruction finish.'],['Clarify','Ask only what changes your action or boundary.'],['Work','Do the assigned support, not an invented upgrade.'],['Report','Done, blocked, damaged, missing, or changed.']])}
        ${S('You recognize the task, but not the hardware','A lead asks you to stage “the short loom” by a rack. You know what a loom is, but there are two similar bundles and only one is labeled.','What is the smallest useful question you can ask before moving anything?')}
        ${R('Say the four-step communication loop from memory and give one example of a useful clarification question.')}`,
        Q('When is a clarification question most useful?',['After you already changed the system','Before an unclear detail changes your action','Only after the call is over'],1,'Clarify before the uncertain action creates rework.')),
      lesson('Own mistakes without turning them into drama','Respond to errors in a way that protects people, equipment, schedule, and trust.',`
        <h2>Fast truth beats slow concealment</h2>
        <p>Production work moves quickly. Misunderstandings and mistakes can happen even to experienced people. What damages trust is hiding a problem, blaming another crew, or continuing after you know the situation is wrong.</p>
        <p>If you make an error, stop the affected action, tell the responsible person what happened, describe the current state accurately, and follow the correction plan you are given. Do not “fix” technical, structural, electrical, or other specialist issues just to avoid admitting the mistake.</p>
        ${C('Useful report','“I moved the wrong labeled case to stage right. It is still closed and undamaged. Where do you want it now?” is more useful than a long explanation about why the labels were confusing.')}
        ${B('If the mistake creates a hazard or crosses into specialist work, the priority is to stop and get the responsible authority—not to preserve your image.')}`,
        Q('What makes an error easier for a lead to manage?',['Accurate early reporting','Quietly hiding it','Making an unrelated coworker responsible'],0,'The crew can respond to a known state.'))
    ]},
    {name:'The first five calls',lessons:[
      lesson('Your first five calls are an observation project','Use early calls to learn patterns rather than trying to collect every technique at once.',`
        <h2>Learn the system before choosing a specialty</h2>
        <p>During your first few calls, pay attention to recurring structure: where crew checks in, how departments are named, who gives assignments, how cases and cable are labeled, what information is repeated, where work waits, how the crew changes from load-in to show state, and how release happens before load-out.</p>
        <p>After each call, write down three things: one term you learned, one workflow pattern you saw twice, and one question to research from a reliable source. This creates a personal map without pretending one venue’s method is universal.</p>
        ${V('Five-call learning cycle',[['Call 1','Who is who?'],['Call 2','How does gear flow?'],['Call 3','How do departments hand off?'],['Call 4','What makes a hand easy to manage?'],['Call 5','Which branch do you want to explore next?']])}
        ${C('Career signal','Community discussions consistently show that new workers are not only asking “how do I do this task?” They are asking “how do I get more work, where do I fit, and what should I learn next?” Your first calls should answer those questions deliberately.')}
        ${R('Name one thing you should observe about people, one about information, and one about equipment flow on your next call.')}`,
        Q('What is a strong goal for the first five calls?',['Master every department','Build a reliable mental model of how work is organized and where you want to learn deeper','Get assigned only technical tasks'],1,'Early calls are for orientation, useful work, and pattern recognition.'))
    ]}
  ]
},
trusted:{
  id:'trusted',title:'Become the Hand They Want Back',subtitle:'Professional trust',description:'The behaviors leads and employers repeatedly reward: reliability, state preservation, stewardship, situational awareness, and clean handoffs.',audience:'New and working general stagehands',modules:[
    {name:'Reliability is a skill',lessons:[
      lesson('Punctuality is production math','Understand why “a few minutes” can affect an entire dependency chain.',`
        <h2>Your time is attached to other people’s time</h2><p>A crew call may be scheduled so local labor is available when trucks arrive, departments need hands, a venue becomes accessible, or a rehearsal window opens. When a worker is late, the effect is not only personal. Someone may have to redistribute crew, delay a handoff, or stop and find a replacement.</p>
        ${C('Professional habit','Plan backward from the report point, not from the venue address. Transportation, parking, credentialing, and walking time are part of the plan.')}
        ${S('Transit delay','Your bus or ride is delayed and you may miss report time by ten minutes.','When should you communicate, what facts should you provide, and what should you avoid promising?')}`,
        Q('Why is punctuality treated as competence in live production?',['Because it protects planned crew dependencies','Because every show starts at sunrise','Because technical skill does not matter'],0,'Reliability affects the whole schedule.')),
      lesson('Readiness means attention, not performance theater','Stay mentally available without inventing work.',`
        <p>A worker can look busy and still be unavailable. Constantly moving, reorganizing gear, or volunteering into other departments can create more coordination work. The stronger behavior is to know the current assignment, observe the immediate work area, protect routes, and stay ready for the next direction.</p>
        ${F('Employer overlap','Current employer descriptions repeatedly combine communication, organization, responsiveness, safety awareness, professionalism, and adaptability. Those are not filler adjectives—they describe how crews experience a worker over the whole call.')}
        ${R('What is the difference between “looking busy” and “being available for the production”?')}`,
        Q('During standby, what is the most useful default?',['Stay findable and attentive','Start modifying nearby setups','Leave the work area without telling anyone'],0,'Standby is an availability state.'))
    ]},
    {name:'Protect the production state',lessons:[
      lesson('Preserve → Verify → Report','Use a default rule that prevents silent changes to another person’s work.',`
        <h2>Temporary does not mean accidental</h2><p>Production environments contain hundreds of intentional temporary states: a case staged for the next department, a cable left with extra service loop, a piece of tape marking a preset, a connector parked for testing, or gear placed out of the way until a lift or rigging move is complete.</p>
        <p>If something seems wrong but changing it is not your assignment, preserve it, verify with the person who owns it, and report the conflict. This protects both the system and your credibility.</p>
        ${V('Preserve → Verify → Report',[['Preserve','Do not silently change the state.'],['Verify','Ask the responsible person what the intended state is.'],['Report','State the conflict, result, or unresolved condition.']])}
        ${S('The “messy” cable','You see an audio cable with extra length near a rack and think you can make the area cleaner by re-routing it.','What could that extra length represent, and what should you do before changing it?')}`,
        Q('What is the purpose of Preserve → Verify → Report?',['To stop silent unassigned changes','To prevent all cleanup','To make every decision slower'],0,'It protects production state while still allowing real conflicts to be resolved.')),
      lesson('Labels are information, not decoration','Treat labels, marks, lists, and case destinations as part of the production system.',`
        <p>Labels can encode department ownership, truck position, stage side, destination, inventory identity, sequence, or configuration. A beginner does not need to know every labeling convention, but should learn to read before moving and to preserve controlled labels.</p>
        ${C('Simple rule','If a mark or label changes where equipment goes, who owns it, or how it will be used next, treat it as production information until the responsible crew says otherwise.')}
        ${B('Do not cover, remove, or alter manufacturer, safety, inspection, load-rating, electrical, or other controlled labels as part of ordinary production marking.')}`,
        Q('An old-looking tape label is on a case. What should you do first?',['Assume it is trash','Read it and verify whether it is still controlling information','Cover it with your own label'],1,'Production labels may remain relevant through strike and return.'))
    ]},
    {name:'Stewardship and handoff',lessons:[
      lesson('Treat equipment like somebody has to use it next','Connect careful handling to reputation, schedule, and cost.',`
        <p>Most equipment on a call belongs to a department, venue, rental vendor, tour, artist, or production company. Even ordinary cases and cable represent someone else’s inventory, prep work, and next task. Careless handling can create damage, missing parts, bad labels, or a troubleshooting problem that appears much later.</p>
        ${F('Worker signal','Touring and local-worker discussions repeatedly remember people who drag, drop, disconnect, misplace, or return gear carelessly. Gear stewardship is one of the clearest ways a new hand becomes trusted—or avoided.')}
        ${C('Three checks','Before moving: correct item and destination. During movement: control and route. After movement: stable placement and clear handoff.')}`,
        Q('Why is equipment care a professional skill rather than just “being nice to gear”?',['It protects inventory, schedule, system state, and other people’s work','It only matters for expensive consoles','It is mostly about appearance'],0,'Stewardship affects the production system.')),
      lesson('Reset the area for the next person','Understand cleanup as a production handoff, not merely removing trash.',`
        <p>A useful reset leaves the area ready for its next controlled state. That may mean debris is removed, tools are returned, aisles remain open, department material is staged where requested, and intentionally placed show or preset items are left alone.</p>
        ${V('A clean handoff',[['Done','What assigned work is complete?'],['Remains','What is intentionally still here or unfinished?'],['Issue','What is damaged, blocked, missing, or unclear?']])}
        ${F('Regulatory anchor','OSHA 1910.22 requires walking-working surfaces to be maintained in orderly, hazard-controlled condition. The learner takeaway is not “be a safety inspector”; it is that housekeeping and usable routes are real work obligations.')}
        ${R('Give a one-sentence “done / remains / issue” handoff for a work area you just reset.')}`,
        Q('What separates a production reset from random cleanup?',['It protects the next work state and reports unresolved conditions','It removes every object from the area','It lets one department reorganize another department'],0,'Reset is a handoff.'))
    ]},
    {name:'Situational awareness',lessons:[
      lesson('Keep a live map of the space','Make awareness a continuous habit rather than a one-time safety lecture.',`
        <p>The conditions around you change during a call. Cases appear in aisles, doors open, carts move, departments begin tests, public areas change state, weather changes outdoor surfaces, and overhead or powered work may create restricted zones.</p>
        <p>Awareness means periodically checking: what is moving, what is blocked, what is newly active, what changed from the original assignment, and where you need to stop or ask rather than continue automatically.</p>
        ${V('The awareness scan',[['People','Where are crew and public?'],['Path','Is the route still usable?'],['State','What equipment is now active or released?'],['Boundary','Did the task become specialist work?'],['Report','Who needs to know the change?']])}
        ${B('This course does not teach operation of powered equipment, rigging, energized electrical work, work at height, structural acceptance, pyro, lasers, or automation. Recognize the boundary and return those tasks to the responsible trained/authorized people.')}`,
        Q('What should happen when the task changes into a specialist or unfamiliar hazard state?',['Continue using the old plan','Stop the affected action and escalate to the responsible authority','Ask another beginner to decide'],1,'Changed scope can change both hazard and authority.'))
    ]}
  ]
},
field:{
  id:'field',title:'Field Skills Studio',subtitle:'Ordinary work, taught as systems',description:'Eight practical studios covering the recurring ground-hand work that makes crews flow. Online learning prepares recognition and judgment; real competence still requires appropriate observed practice.',audience:'General stagehands building useful field competence',modules:[
    {name:'Movement and material flow',lessons:[
      lesson('Cases, carts and dollies','Read the route, load state, destination, and handoff before movement.',`
        <p>Cases and carts are how production systems move through doors, docks, compounds, halls, stages, and trucks. The important beginner skill is not brute force. It is controlled movement inside the planned flow.</p>
        ${V('Before a move',[['Identity','Correct case or cart?'],['Destination','Where does it belong next?'],['Route','Doors, turns, slopes, traffic, thresholds?'],['Control','Can the assigned crew control it smoothly?'],['Handoff','Who owns it at the destination?']])}
        ${C('Field mindset','If the item, route, or required control changes, stop and update the plan rather than forcing the original move.')}
        ${B('Powered material-handling equipment requires separate employer training and authorization. This studio covers ordinary non-powered movement awareness only.')}`,
        Q('What is the strongest reason to know the destination before moving a case?',['The move is part of a larger material-flow plan','It makes the case lighter','It changes the case color'],0,'Movement should support the production flow.')),
      lesson('Team moves','Use shared control and a clear stop condition instead of treating strength as the plan.',`
        <p>Team movement is communication under load. The employer or lead decides whether an item is moved manually, with more people, or with a handling aid. Your role is to understand the destination, route, coordinator, and stop condition.</p>
        ${C('No magic number','There is no universal safe weight or crew count that an online course can assign to every object and route. Shape, grip, stability, visibility, surface, repetition, and handling aids all matter.')}
        ${R('What four facts should a team know before starting an ordinary move?')}`,
        Q('Who decides the handling method for the actual task?',['The real employer/lead under actual conditions','A universal online weight chart','The strongest worker'],0,'The actual task controls the method.'))
    ]},
    {name:'Cable and route stewardship',lessons:[
      lesson('Released cable handling','Handle cable as department-owned material, not as permission to change the technical system.',`
        <p>Stagehands often help deploy, gather, stage, or protect cable. The first question is ownership and release: which department owns the line, and has the responsible person released it for the physical task you were assigned?</p>
        <p>Protect connectors and cable from obvious crushing, uncontrolled dragging, doors, sharp edges, and traffic. Preserve the directed route. Report visible damage or unexpected resistance instead of attempting technical repair or testing.</p>
        ${B('Physical cable handling does not authorize disconnecting, patching, energizing, testing, repair, fiber cleaning, network configuration, or electrical work.')}
        ${S('Strike begins near you','A cable looks unused and several nearby devices are off.','What evidence would actually tell you the line is released for strike?')}`,
        Q('What must be confirmed before gathering a technical cable?',['Department ownership and release','That the cable looks idle','That another stagehand already coiled one'],0,'Appearance does not establish release state.')),
      lesson('Cable routes and protectors','Understand a crossing as a route-management problem, not simply “put a ramp over it.”',`
        <p>Cable protection involves the cable or hose, the protector model, the surface, the approved route, and the people or traffic using the crossing. A general hand can support an assigned route and inspect for obvious gaps or changes, but should not declare a system vehicle-rated or accessibility-compliant from appearance alone.</p>
        ${F('Regulatory anchor','OSHA walking-working-surface and electrical-cord protection requirements reinforce the same learner principle: protect routes from hazards and protect lines from damage.')}
        ${B('Product ratings, accessibility decisions, traffic controls, and technical service separation belong to the responsible lead/site authority and current product documentation.')}`,
        Q('A cable protector rocks after traffic crosses it. What is the right learning-level response?',['Report the changed condition and return it to the responsible lead','Invent a shim','Ignore it until load-out'],0,'Installed conditions can change and require review.'))
    ]},
    {name:'Organization and handoff',lessons:[
      lesson('Boneyards, case lines and staging zones','Organize equipment without destroying access, labels, or department ownership.',`
        <p>A boneyard is useful only if people can still find, access, and move what they need. Follow the assigned zone or case-line plan, keep labels visible where practical, preserve required paths, and avoid unstable improvised storage.</p>
        ${V('Good staging answers four questions',[['Owner','Whose material is this?'],['Next','What will happen to it next?'],['Access','Who still needs to reach it?'],['Route','What must stay open around it?']])}
        ${B('Final truck pack, structural stacking limits, load distribution, and egress acceptance remain controlled decisions.')}`,
        Q('What makes a boneyard useful?',['Gear remains identifiable, accessible and compatible with required routes','Every case is stacked as high as possible','All departments are mixed together'],0,'Organization should reduce future work.')),
      lesson('Tools, labels and temporary marks','Use jobsite tools and marking systems without assuming one universal kit or color code.',`
        <p>Tool expectations vary by employer, local, venue, department, and call. Learn what your actual assignment expects and use only tools you understand and are authorized to use. Temporary production marks are similarly local: their meaning depends on the current production convention.</p>
        ${C('Transferable behavior','Keep tools controlled, return borrowed items, report damage, make deliberate handoffs, and ask before using an unfamiliar tool or performing an unfamiliar task.')}
        ${B('Recognizing a powered, electrical-testing, rigging, cutting, or other specialist tool is not permission to operate it.')}`,
        Q('What does recognizing a tool prove?',['You can identify it, not that you are authorized for every use','You can supervise its use','You can repair it'],0,'Recognition and operational competence are separate.'))
    ]},
    {name:'Stage and site support',lessons:[
      lesson('Soft goods and simple ground-level support','Protect fabric and components while keeping installation authority with the responsible department.',`
        <p>Masking, drape, backdrops, cycs, scrims, pipe-and-drape systems, and similar materials vary widely. A general hand can learn categories, careful handling, staging, and assigned storage methods without pretending there is one universal fold or installation recipe.</p>
        ${C('Useful support','Confirm the item, owner, destination, and assigned handling method. Protect fabric from uncontrolled contamination or crushing and report damage rather than hiding it in storage.')}
        ${B('Overhead attachment, fly systems, powered tracks, structural stability, fire-code acceptance, chemical treatment, and repair remain outside this general studio.')}`,
        Q('What is safe to transfer across soft-goods systems?',['Recognition, careful handling, and asking for the item-specific method','One universal fold','One universal overhead installation method'],0,'Generic training should transfer behaviors, not invent product-specific procedures.')),
      lesson('Dock, ramp and trailer handoff awareness','Recognize where general material movement meets vehicle, dock, loader, and powered-equipment authority.',`
        <p>Docks and trailers compress many hazards and responsibilities into a small space: moving vehicles, powered equipment, dock edges, ramps, cases, loaders, drivers, and crews. Learn who controls the flow, where the pedestrian/work route is, where your handoff point is, and where your authority stops.</p>
        ${V('Dock handoff',[['Flow owner','Who controls truck/dock movement?'],['Route','Where may you move?'],['Case','What is the destination?'],['Handoff','Where does loader/driver authority begin?']])}
        ${B('This course does not authorize forklifts, powered pallet jacks, vehicle operation, dockboard acceptance, cargo securement, or truck-pack design.')}`,
        Q('A case has no destination at the dock. What should happen?',['Stop and clarify the handoff','Guess an open truck position','Leave it in an active route'],0,'Material flow depends on a known destination and owner.')),
      lesson('Work-area reset','Leave ordinary work areas safer and easier for the next crew to use.',`
        <p>Reset is the last field skill because it connects every other one. Remove ordinary debris, return known tools and materials, preserve intentionally staged items, keep required routes usable, and report what you could not resolve.</p>
        ${F('OSHA anchor','General Industry 1910.22 requires clean, orderly walking-working surfaces and correction or guarding of hazardous conditions. Crew Blueprint translates that into a simple worker habit: do not leave avoidable trip, access, or housekeeping problems for the next person.')}
        ${R('Give a “done / remains / issue” handoff for the area after your department finishes.')}`,
        Q('What is the best final check before leaving a reset area?',['Ask whether the next work state is usable and unresolved issues are reported','Move every remaining object','Turn off unfamiliar equipment'],0,'Reset protects the next state without crossing department boundaries.'))
    ]}
  ]
},
departments:{
  id:'departments',title:'Choose a Department',subtitle:'Five starter routes',description:'Learn the system you are supporting before chasing advanced tasks. Each route teaches vocabulary, workflow, ownership, useful beginner support, and realistic next steps.',audience:'Stagehands exploring specialization',modules:[
    {name:'Lighting',lessons:[
      lesson('Read a lighting call as a system','Understand what the lighting department is trying to move from plan to working show state.',`
        <p>Lighting is not “fixtures plus a console.” It is a production branch connecting design intent, fixtures, positions, control/data, power, rigging interfaces, focus, checkout, programming, operation, and strike.</p>
        ${V('Lighting workflow',[['Plan','Plot, fixture list, positions and design intent.'],['Prep','Fixtures, accessories, labels and cases.'],['Install','Positions, cable and assigned support.'],['Check','Power/control/focus verified by responsible technicians.'],['Operate / Strike','Show state, release, removal and return.']])}
        ${F('Production Atlas','Lighting may involve a venue department, local labor, a rental/production vendor, touring crew, shop/prep technicians, electrics, rigging, and a designer or programmer. One badge does not own all decisions.')}`,
        Q('Which description best captures lighting?',['A system with design, equipment, control, power and workflow interfaces','Only hanging fixtures','Only console programming'],0,'The department is a system and a chain of ownership.')),
      lesson('What a new lighting hand should become good at','Focus on support behaviors that make technicians faster without bluffing technical authority.',`
        <p>Useful beginner support includes identifying and staging assigned cases or fixtures, preserving labels, following the directed cable/material flow, keeping the crew supplied, protecting existing system state, and reporting missing, damaged, or mismatched items early.</p>
        ${C('Learn these nouns first','fixture, yoke, clamp, safety attachment, truss/position, loom, data/control, power, address/mode as concepts, focus, patch, dimmer/distro as system terms—not as permission to operate.')}
        ${B('Energized electrical work, temporary-power decisions, rigging, work at height, lift operation, fixture service, focus/programming authority, and system commissioning require separate training/qualification/assignment.')}`,
        Q('What makes a beginner lighting hand useful?',['Accurate assigned support and state preservation','Changing patch to match personal preference','Claiming console skills they do not have'],0,'Support quality is more valuable than premature identity.')),
      lesson('How to grow into lighting','Build competence through shop, prep, supervised field experience, documentation literacy, and role-specific training.',`
        <p>A common growth pattern is to become excellent at ground support, then learn equipment identification and prep, cable/control concepts, documentation, checkout logic, and eventually technical operation under experienced supervision. The actual route varies by employer and market.</p>
        ${C('Good next questions','Can I get shop/prep hours? Can I shadow checkout? Which documentation does this crew use? What training is required before I touch power, lifts, network settings, or console functions?')}
        ${R('List three lighting concepts you can study online and three activities that still require real employer/site training or qualification.')}`,
        Q('What is a strong early lighting growth route?',['Shop/prep + supervised field learning + current documentation','Skip directly to system authority','Memorize one fixture brand only'],0,'Repeated supervised exposure builds transferable competence.'))
    ]},
    {name:'Audio',lessons:[
      lesson('Read an audio call as signal, equipment and people flow','See how stage audio, PA, consoles, communications, RF and power interfaces fit together.',`
        <p>Audio work moves sources and communications through a system toward listeners and production teams. For a new hand, the useful picture is physical and organizational: cases become stage and system positions; lines are deployed and patched; equipment is checked; the department protects show state; strike happens only after release.</p>
        ${V('Audio workflow',[['Prep','Cases, racks, stands, cable and labels.'],['Deploy','PA/stage positions and directed line routes.'],['Connect / Check','Responsible audio technicians establish patch and test state.'],['Show','System remains controlled and show-critical.'],['Release / Strike','Audio releases lines and equipment for removal.']])}`,
        Q('Why is “looks unused” a bad release test for audio equipment?',['The system may still be patched, powered, muted, testing or show-critical','Audio equipment is always loud','Only labels matter'],0,'Visual inactivity does not prove release.')),
      lesson('What a new audio hand should become good at','Support physical flow without turning material handling into technical-system authority.',`
        <p>Become dependable at moving and staging assigned cases, speakers, stands, wedges, and released cable; protecting connectors and grilles; preserving microphones, stage boxes, patch state, and labels; and returning questions to the audio lead.</p>
        ${C('Learn these nouns first','FOH, monitors, PA, stage box, snake/multicore, input/output, patch, line check, RF, comms, amp/rack, networked audio as a concept.')}
        ${B('Console settings, system tuning, amplifier configuration, RF coordination, patch changes, network administration, electrical work, rigging, and final audio acceptance remain with trained/assigned audio and specialist personnel.')}`,
        Q('A microphone is already placed on stage. What is the default?',['Treat the placement as deliberate until audio/stage authority says otherwise','Move it to create more floor space','Unplug it before asking'],0,'Preset and placement are production state.')),
      lesson('How to grow into audio','Use repeated exposure to signal flow, shop prep, stage audio, system checkout, and mentors rather than chasing one software package.',`
        <p>Worker communities consistently recommend learning by being useful around experienced audio people, spending time in rental/shop environments when possible, and gradually connecting physical equipment to signal-flow concepts. Software changes; signal ownership, verification habits, and listening/problem-solving remain transferable.</p>
        ${R('Draw from memory: source → stage I/O → transport/mix → processing/output → loudspeaker/listener. Mark which steps you currently only recognize versus can actually work on under supervision.')}`,
        Q('What is the best early audio learning priority?',['Understand signal flow and become reliable around the department','Memorize every console menu before your first call','Change system EQ to learn faster'],0,'Mental models and supervised experience transfer across products.'))
    ]},
    {name:'Video / LED',lessons:[
      lesson('Read a video/LED call as physical wall + signal system','Separate the display structure from the content and data path that make it work.',`
        <p>Video/LED combines physical display components with signal, processing, data, content, camera, power, and support interfaces. A panel can be physically installed but not correctly mapped; a signal can exist while the display is not mechanically accepted. Treat those as different layers.</p>
        ${V('Video / LED layers',[['Content / Source','Playback, cameras, media or feeds.'],['Processing','Switching, scaling, canvas and routing.'],['Data','Processor-to-display transport and receiving path.'],['Display','Panels/modules and physical geometry.'],['Support','Ground support/rigging, power and venue interfaces.']])}`,
        Q('Why separate the physical wall from the signal path?',['They can be correct or fail independently','They are always the same system layer','Only processors matter'],0,'Video failures and responsibilities live in different layers.')),
      lesson('What a new video hand should become good at','Protect panel identity, orientation, accessories, and build sequence while respecting product-specific mechanics.',`
        <p>Useful beginner support includes moving/staging assigned carts and cases, preserving panel orientation and labels, keeping accessories with the correct system, following the build sequence established by the lead, protecting released cables, and reporting damaged or mismatched components.</p>
        ${C('Learn these nouns first','panel/cabinet/tile, module, pixel pitch, processor, canvas, sending/receiving, fiber/data, signal source, IMAG, projection, camera, ground support versus flown display.')}
        ${B('Structural support, rigging, power, panel-lock procedure, product service, processor configuration, mapping, calibration, firmware, and specialist network work require system-specific training/assignment.')}`,
        Q('Two LED panels look nearly identical but have different labels. What is the strongest default?',['Preserve identity and verify before mixing them','Assume compatibility','Relabel them as one type'],0,'Product family and configuration can differ despite appearance.')),
      lesson('How to grow into video','Build from physical display literacy into signal-flow, processor, playback/camera, and system-support specialties.',`
        <p>Video careers branch quickly: LED tech, projection, camera, playback/media server, switching, broadcast, systems engineering, and shop/prep routes overlap but are not one ladder. Learn the common system picture first, then follow the branch you actually see in your market and employers.</p>
        ${R('Name the five video/LED layers and one career route that could specialize inside each.')}`,
        Q('What does a clean growth plan avoid?',['Assuming every video role is one universal ladder','Learning signal-flow concepts','Getting supervised shop experience'],0,'Video contains several distinct specialties.'))
    ]},
    {name:'Staging / Scenic',lessons:[
      lesson('Read staging and scenic as the physical production environment','Understand how decks, risers, scenery, soft goods, access and technical departments share space.',`
        <p>Staging/scenic work creates or changes the physical environment other departments use. That makes documentation, material identity, build zones, access, interfaces, and final acceptance especially important.</p>
        ${V('Physical production flow',[['Plan','Approved layout, drawings, system/product information.'],['Material','Decks, risers, scenic pieces, soft goods and hardware arrive.'],['Build support','Assigned movement/staging and bounded assembly support.'],['Interface','Lighting, audio, video, rigging, automation and venue needs meet the structure.'],['Accept / Use / Strike','Responsible authority releases use and later strike.']])}`,
        Q('Why does staging/scenic require strong boundary awareness?',['Changes can affect structural, access and other-department assumptions','It uses only lightweight material','No other department depends on it'],0,'Physical environment changes propagate across the event.')),
      lesson('What a new staging/scenic hand should become good at','Become precise with materials, plans, marks, handoffs, and work-area organization.',`
        <p>Learn to identify the actual component or scenic piece, preserve labels/marks, follow the directed material sequence, move/stage items carefully, keep routes usable, and report damaged, mismatched, or unclear parts before they disappear into a build.</p>
        ${C('Learn these nouns first','deck/platform, riser/support, stair/ramp/rail as component families, scenic flat/wagon, soft goods, pipe-and-drape, plan/elevation/detail, mark/spike, build zone, handoff.')}
        ${B('Structural configuration, load capacity, bracing, engineered changes, powered tools/equipment, overhead systems, automation, and public-use acceptance require the responsible trained/qualified authority and exact system process.')}`,
        Q('A component seems to fit but comes from an unidentified system. What should you do?',['Verify compatibility with the responsible lead/system documentation','Use it because dimensions match','Modify it to fit'],0,'Visual fit does not prove system compatibility.')),
      lesson('How to grow into staging/scenic','Choose between staging systems, carpentry/scenic, fabrication, installation, automation-adjacent, and technical-design routes.',`
        <p>Growth may happen in venue crews, staging vendors, scenic shops, fabrication shops, theatres, touring productions, or festival contractors. Shop experience is especially useful because it exposes workers to component identity, prep, inspection, documentation, repair boundaries, and how material is expected to return after a show.</p>
        ${R('Which physical-production branch interests you most: staging systems, scenic/carpentry, shop fabrication, or technical coordination? What evidence would you need before choosing?')}`,
        Q('Why can shop experience be valuable?',['It connects field material to prep, identity, documentation and return state','It automatically grants structural authority','It replaces all site training'],0,'Shop work exposes the lifecycle around field equipment.'))
    ]},
    {name:'Backline / Props / Wardrobe',lessons:[
      lesson('Read performer-facing departments through ownership and chain of custody','Understand why careful state preservation matters around artist gear, props, presets, and wardrobe.',`
        <p>Backline, props, and wardrobe share a critical theme: equipment or items may be personally important, performance-critical, preset for a specific cue, or owned by the artist/tour/department. “Helping” by changing, cleaning, tuning, substituting, or reorganizing without permission can create a show problem.</p>
        ${V('Chain of custody',[['Identify','Whose item is this?'],['State','Preset, packed, in-use, released, damaged?'],['Move / Support','Only the assigned physical task.'],['Handoff','Return to the named person/location/state.']])}`,
        Q('What principle connects backline, props and wardrobe?',['Preserve ownership, preset state and handoff','Everything should be reorganized by size','Any stagehand may adjust items'],0,'Chain of custody and state matter.')),
      lesson('What a new hand should become good at','Practice careful movement, staging, discretion, and accurate handoff.',`
        <p>Useful support is often simple but high-trust: move the correct case or item, keep it protected, stage it where requested, preserve labels and preset state, keep artist/private areas professional, and report damage or uncertainty immediately.</p>
        ${C('Learn these nouns first','backline, riser, stage plot, input list as adjacent information, preset, prop table, run crew, dresser, quick change, wardrobe rack, artist/tour tech, chain of custody.')}
        ${B('Instrument adjustment/tuning, artist-specific setup, prop modification, wardrobe repair/treatment, substitutions, and performance preset decisions stay with the responsible department/tour/artist personnel.')}`,
        Q('You are unsure whether an item is trash or a prop. What is the right default?',['Preserve it and ask the owning department','Discard it during reset','Move it to another department'],0,'Unknown performer-facing items should not be reclassified casually.')),
      lesson('How to grow in performer-support work','Recognize that these careers are relationship-heavy, detail-heavy, and often built through trust.',`
        <p>Backline, props, wardrobe, and run-crew work reward memory, consistency, discretion, organization, and the ability to protect exact show state under time pressure. Growth often comes through repeated calls, rental/provider shops, theatre/touring departments, mentors, and being trusted with more specific responsibility over time.</p>
        ${R('Which matters more here: showing off broad technical knowledge or being exact with ownership, state and handoff? Explain why.')}`,
        Q('What is a strong growth signal in performer-facing departments?',['Being trusted with increasingly specific state-sensitive responsibilities','Changing presets without being asked','Posting backstage details publicly'],0,'Trust grows from consistent state stewardship.'))
    ]}
  ]
},
work:{
  id:'work',title:'Find Work',subtitle:'Employer ecosystem + reputation',description:'Learn where live-production jobs actually come from, how to present yourself, how call-backs happen, and how to use Production Atlas instead of relying on one job board.',audience:'Workers trying to get first or more consistent calls',modules:[
    {name:'Where jobs come from',lessons:[
      lesson('There is no single “stagehand employer”','Map the employer ecosystem so you can search more intelligently.',`
        <p>A festival or concert can involve a labor company, IATSE local, venue production department, staging vendor, lighting/audio/video vendor, touring vendor, backline provider, site-operations contractor, trucking/logistics provider, promoter production office, and specialist contractors—all hiring or sourcing workers differently.</p>
        ${V('Seven common entry doors',[['Labor company','General calls and department labor.'],['IATSE / labor pool','Venue, market or contract-specific work routes.'],['Venue','House production and event-tech roles.'],['Vendor / rental shop','Prep, warehouse and field technician paths.'],['Tour / show unit','Traveling department or production roles.'],['Festival / site contractor','Seasonal site, logistics and operations routes.'],['Production office','Runner, PA, coordination and management routes.']])}
        ${F('Production Atlas','Production Atlas models these branches explicitly and should hold changing employer/opportunity data. Crew Blueprint should teach the map; Atlas should answer “who is hiring where right now?”')}`,
        Q('Why should you search several employer types?',['Live production is an ecosystem with multiple hiring routes','All stagehand jobs are posted by one company','Only touring companies hire beginners'],0,'Multiple organizations may hire for the same event.')),
      lesson('Use Production Atlas as the changing layer','Separate durable career education from current-market lookup.',`
        <p>Employer names, active opportunities, markets, event calendars, and vendor relationships change too quickly to hard-code into a course. Production Atlas exists to handle that volatile layer.</p>
        <p>Use the Atlas to identify employer categories, IATSE locals, production vendors, event markets, and opportunity routes. Then verify the current employer’s own hiring page, local process, or application instructions before acting.</p>
        ${C('Open the live intelligence layer','<a href="https://atlas.thecrewblueprint.com/employers.html" target="_blank" rel="noopener">Production Atlas — Employers</a> · <a href="https://atlas.thecrewblueprint.com/opportunities.html" target="_blank" rel="noopener">Opportunities</a> · <a href="https://atlas.thecrewblueprint.com/iatse.html" target="_blank" rel="noopener">IATSE directory</a>')}`,
        Q('What belongs in a changing market tool rather than a static lesson?',['Current employer/opportunity information','The principle that several employer types exist','The need to verify current instructions'],0,'Volatile facts should stay retrievable and current.'))
    ]},
    {name:'Get selected and called back',lessons:[
      lesson('Build a resume that proves useful work','Translate non-production experience into observable strengths without pretending expertise.',`
        <p>Entry-level employers often value customer service, communication, organization, physical work readiness, technical aptitude, responsiveness, and willingness to learn. If you are new, show evidence from other work: punctual attendance, material handling, warehouse work, hospitality, construction support, driving record where relevant, theatre/school production, team environments, or responsibility for equipment and customers.</p>
        ${C('Do not write “I have no experience” as the headline','Lead with what transfers. Then be accurate about what production experience you actually have.')}
        ${F('Current employer evidence','Encore’s 2026 entry-level event-tech postings explicitly list desire to learn, technical aptitude, communication, team play, organization, safety awareness and professionalism. PRG’s stagehand portal distinguishes true entry-level stagehands from workers with progressively deeper experience.')}`,
        Q('What is a strong beginner resume strategy?',['Show transferable evidence and accurately state production experience','Invent technical credits','Lead with what you cannot do'],0,'Employers can evaluate useful transferable behaviors.')),
      lesson('Reputation is a distributed hiring system','Understand how behavior on one call affects future work across a network.',`
        <p>Live-event labor is relationship-dense. Leads, coworkers, labor coordinators, technicians, vendors, and venues cross paths repeatedly. A worker who is reliable, teachable, easy to find, careful with equipment, and honest about limits can become easier to recommend.</p>
        <p>Networking is not only socializing. It is repeated evidence that other people can trust you to show up and do the work.</p>
        ${C('A simple reputation formula','Show up → listen → complete ordinary work well → communicate → leave the system better documented/organized than you found it → repeat.')}
        ${R('What would a crew chief be able to say about you after one call that would make another crew chief comfortable calling you?')}`,
        Q('What is the most durable networking asset?',['Repeated useful work and professional relationships','Collecting the most phone numbers','Claiming advanced skills early'],0,'Reputation compounds through observed work.')),
      lesson('Availability, transport and seasonality are career skills','Plan for irregular demand instead of assuming every week will look the same.',`
        <p>Stagehand and festival work can be seasonal, event-driven, and variable by market. Workers commonly use multiple legitimate work sources: labor providers, locals, venues, vendors, shops, and direct production relationships. Reliable transportation and the ability to respond to calls can matter as much as a single technical skill.</p>
        ${C('Track your own market','Keep a simple log of employers contacted, calls worked, departments, hours, people you can appropriately follow up with, and slow/peak periods. After several months, your real data becomes more useful than generic career advice.')}
        ${B('This is general career education, not a promise of work volume, earnings, employee/contractor classification, or tax treatment.')}`,
        Q('Why might a worker maintain several legitimate work sources?',['Demand can be seasonal and distributed across employers','One employer always bans outside work','It guarantees income'],0,'The market can be uneven and vendor-mediated.'))
    ]}
  ]
},
grow:{
  id:'grow',title:'Grow Deliberately',subtitle:'Career lattice, not fake ladder',description:'Choose deeper training based on real work, market demand, mentors, employer pathways, and the authority boundaries of the role you want.',audience:'Working stagehands choosing a longer-term direction',modules:[
    {name:'Choose a branch',lessons:[
      lesson('Think lattice, not ladder','Replace the myth of one stagehand-to-supervisor promotion path with a branching career map.',`
        <p>Live production has recurring responsibility layers—new hand, department support, technician, senior/specialist, lead/head, design/engineering/management—but people move laterally between departments, employers, venues, shops, tours, and markets. A lead title in one context does not prove specialist competence in another.</p>
        ${V('A career can branch',[['General support','Learn call flow and reliability.'],['Department support','Build vocabulary and useful bounded support.'],['Technician / craft','Demonstrate role-specific competence.'],['Specialist / senior','Deepen systems, troubleshooting or interfaces.'],['Lead / head','Take appointed people/workflow responsibility.'],['Design / management','Plan, design, engineer or coordinate within role-specific authority.']])}`,
        Q('What is wrong with one universal promotion ladder?',['Real roles branch by department, employer and context','It has too few arrows','Everyone must become a supervisor'],0,'Career progression is not one mandatory sequence.')),
      lesson('Use shops and prep environments strategically','Understand why warehouse/rental/shop work can accelerate learning.',`
        <p>Shops expose workers to equipment identity, prep, documentation, testing boundaries, packaging, inventory, failure reporting, and return state without the same show-time compression. Community advice frequently points new workers toward rental/production shops for exactly this reason.</p>
        ${C('What to look for','A workplace where experienced technicians explain why prep standards exist, where product documentation is available, and where your responsibilities increase only as competence is demonstrated.')}`,
        Q('What can a shop environment teach especially well?',['Equipment lifecycle, prep, identity and return state','Universal authority across all venues','How to ignore documentation'],0,'Shop work connects field use to preparation and maintenance systems.'))
    ]},
    {name:'Training and authority',lessons:[
      lesson('Separate knowledge, competence, qualification and authorization','Avoid the credential confusion that causes unsafe overreach and bad career planning.',`
        <p>Four states are different:</p>
        <ul><li><b>Knowledge:</b> you understand concepts.</li><li><b>Demonstrated competence:</b> you have performed a bounded task under appropriate observation.</li><li><b>Qualification / credential:</b> an external standard, law, employer, or credentialing body may define requirements.</li><li><b>Authorization / appointment:</b> the employer/site/production allows you to perform the real task in that context.</li></ul>
        <p>One state does not automatically create the others.</p>
        ${B('Rigging, energized electrical/temporary power, structural work, powered equipment, work at height, automation, pyro, laser, and similar specialist work require their own training/qualification/authorization context. Crew Blueprint does not confer it.')}`,
        Q('Passing an online quiz proves what?',['Knowledge of the material presented, not automatic field authorization','Universal competence','Employer appointment'],0,'Knowledge is one layer.')),
      lesson('Build a 90-day learning plan from real evidence','Choose the next learning investment based on work you can actually access.',`
        <p>Start with your last several calls. Which department did you enjoy? Where did leads already trust you? Which employers or shops in your market offer supervised exposure? Which skills appear repeatedly in current job descriptions? Which specialist boundaries require formal external training?</p>
        ${V('90-day plan',[['Observe','Review calls, feedback and market opportunities.'],['Choose','Pick one branch and one transferable weakness.'],['Practice','Get supervised, role-appropriate repetition.'],['Document','Record work, training and feedback accurately.'],['Reassess','Use new evidence to choose the next step.']])}
        ${C('Good plan example','“Become dependable on lighting calls, get shop/prep exposure, learn documentation and control-path concepts, and ask the employer what training is required before deeper technical assignments.”')}
        ${R('Write one 90-day goal that names a real work environment, a skill, a person/source of feedback, and an evidence point that will tell you whether to continue.')}`,
        Q('What should drive the next training investment?',['Real work access, market demand, feedback and role requirements','The longest course catalog','Whatever sounds most advanced'],0,'Training is most valuable when it connects to an actual pathway.'))
    ]},
    {name:'Sustain the career',lessons:[
      lesson('Treat the lifestyle as part of career design','Make an informed decision about irregular hours, travel, physical work and personal sustainability.',`
        <p>Worker communities repeatedly discuss long calls, inconsistent sleep, travel, physical strain, seasonal volume, weather exposure, and the difficulty of maintaining normal routines. Those are not side issues. They affect whether a person can stay reliable and healthy enough to build a career.</p>
        <p>Use early experience to learn your limits and preferences. Some workers prefer venue consistency. Others prefer shops, corporate AV, festivals, tours, theatre, or a mix. A sustainable route is better than a glamorous route you cannot maintain.</p>
        ${C('Career question','What schedule, travel level, income variability, physical environment, and social environment can you realistically sustain while still being dependable?')}
        ${B('This course provides general career literacy, not medical advice. Workplace injuries, symptoms, or health concerns should be handled through appropriate adults, workplace procedures, and healthcare resources.')}`,
        Q('Why does lifestyle belong in career training?',['Because schedule and physical reality affect long-term reliability and retention','Because every worker should tour','Because technical skills do not matter'],0,'A career path must be sustainable in real life.'))
    ]}
  ]
}
};

const sourceGroups=[
 {type:'Authoritative safety / regulatory',use:'Controls legal/safety boundaries; never replaced by community opinion.',items:[
  ['OSHA 1910.22 — Walking-Working Surfaces','https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.22'],
  ['OSHA 1910.132 — Personal Protective Equipment','https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.132'],
  ['OSHA 1910.147 — Control of Hazardous Energy','https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147'],
  ['OSHA 1910.176 — Materials Handling and Storage','https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.176'],
  ['OSHA 1910.178 — Powered Industrial Trucks','https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178'],
  ['OSHA 1910 Subpart S — Electrical','https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910SubpartS']
 ]},
 {type:'Industry / employer demand',use:'Shows what current employers value; not universal technical authority.',items:[
  ['PRG Crew Portal — Stagehand and technician role requirements','https://crew.prg.com/en/'],
  ['Encore Global — 2026 entry-level event technician postings','https://jobs.encoreglobal.com/'],
  ['Feld Entertainment — touring stagehand job families','https://jobs.lever.co/feldinc'],
  ['Rhino Staging — stagehand employment/training context','https://www.rhinostaging.com/'],
  ['Crew One — labor/employment route','https://www.crew1.com/careers/join-the-crew']
 ]},
 {type:'Worker / learner demand',use:'Identifies recurring problems, fears, vocabulary and career questions; never used as safety authority.',items:[
  ['Roadmapdev community/client discovery corpus','../../../research/analysis/audience-employer-discovery-synthesis-2026-09-06.md'],
  ['Reddit r/stagehands — first-call and career discussions','https://www.reddit.com/r/stagehands/'],
  ['Reddit r/livesound — local-hand and touring-tech discussions','https://www.reddit.com/r/livesound/'],
  ['Reddit r/techtheatre — beginner crew discussions','https://www.reddit.com/r/techtheatre/']
 ]},
 {type:'Internal industry intelligence',use:'Maps employer/department ecosystem and changing opportunity routes.',items:[
  ['Production Atlas — Production Branches','https://github.com/thecrewblueprint-glitch/festival-atlas/blob/main/data/packages/production-branches.js'],
  ['Production Atlas — Employers','https://atlas.thecrewblueprint.com/employers.html'],
  ['Production Atlas — Opportunities','https://atlas.thecrewblueprint.com/opportunities.html'],
  ['Production Atlas — IATSE directory','https://atlas.thecrewblueprint.com/iatse.html'],
  ['Crew Blueprint — Live Production Role Family Map','../../../research/analysis/live-production-role-family-map-2026-09-06.json']
 ]}
];

window.CLEAN_SHEET={programs,sourceGroups,order:['start','trusted','field','departments','work','grow']};
})();
