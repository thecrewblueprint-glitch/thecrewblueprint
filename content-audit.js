/* Content-audit overlay: restores high-frequency field fundamentals and reframes department learning around assigned tasks. */
(function(){
'use strict';
const D=window.CLEAN_SHEET;if(!D)return;
const Q=(question,options,answer,coaching)=>({question,options,answer,coaching});
const V=(title,steps)=>`<div class="visual"><div class="visual-title">${title}</div><div class="visual-flow" style="--n:${steps.length}">${steps.map(s=>`<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join('')}</div></div>`;
const R=t=>`<div class="retrieval"><strong>Close the page for 20 seconds</strong><p>${t}</p></div>`;
const F=(h,t)=>`<div class="field-note"><strong>${h}</strong><p>${t}</p></div>`;
const B=t=>`<div class="boundary"><strong>Boundary</strong><p>${t}</p></div>`;
const S=(h,t,p)=>`<div class="scenario"><strong>Call scenario</strong><h3>${h}</h3><p>${t}</p><p><b>Think it through:</b> ${p}</p></div>`;
const C=(h,t)=>`<div class="callout"><strong>${h}</strong><p>${t}</p></div>`;
const L=(title,objective,body,quiz)=>({title,objective,body,quiz});

D.programs.field={
 id:'field',title:'Field Skills Studio',subtitle:'The small skills you use all day',description:'Practice the ordinary case, cart, cable, staging, handoff, and housekeeping habits that make a stagehand useful on nearly every call.',audience:'General stagehands and workers building repeatable field habits',modules:[
  {name:'Move cases and carts without creating another problem',lessons:[
   L('Before a case moves','Build a five-second pre-move habit before ordinary case movement.',`
    <h2>The move starts before the wheels turn</h2>
    <p>Road cases are ordinary enough that crews can stop thinking about them. That is exactly why simple mistakes repeat. Before moving an assigned case, identify the destination and route, look at the wheels or casters, notice loose lids or hardware, and check whether people or other work have changed the path.</p>
    ${V('Five-second case check',[['Destination','Know where it is actually going.'],['Route','Look for doors, corners, changes in surface and active work.'],['Case','Notice obvious damage, loose parts or an unstable condition.'],['People','Know who is around the move and whether visibility is limited.'],['State','If anything important is unclear, stop and verify before moving.']])}
    ${F('Why this belongs in fundamentals','A case move is repeated dozens of times on many calls. A tiny habit that prevents one collision, wrong destination, blocked aisle or damaged caster is disproportionately useful.')}
    ${B('Do not move a case that appears unsafe, unstable, damaged, excessively heavy for the available crew, or located inside a controlled work zone until the responsible lead addresses the condition.')}`,
    Q('What should happen before an ordinary assigned case move?',['Start rolling and solve the route as you go','Check destination, route, case condition and nearby activity','Remove every label first'],1,'The basic move begins with orientation, not momentum.')),
   L('Control the case, not just its direction','Recognize why pace, visibility, spacing and momentum matter during ordinary movement.',`
    <p>A road case can be easy to push and still be difficult to stop or place accurately. Keep the move controlled enough that you can respond to a person stepping into the route, a corner, a surface transition or a changed destination. If the case blocks your view or the route becomes crowded, slow down and use the crew communication expected on that call.</p>
    ${C('Useful standard','You should be controlling where the case goes, how fast it gets there, and whether you can stop or reposition it without surprising the people around you.')}
    ${R('Name three things that can change between the moment a case starts moving and the moment it reaches its destination.')}`,
    Q('What is the strongest sign that a case move is controlled?',['The case is moving as fast as possible','The worker can see or coordinate the route and respond to changes','The loudest person is pushing'],1,'Control includes pace, awareness and the ability to respond.')),
   L('Doors, corners and thresholds','Treat transitions as separate moments instead of forcing the same movement through them.',`
    <h2>Transitions deserve a reset</h2>
    <p>Doorways, corners, dock plates, small ramps, floor seams and thresholds can change wheel behavior and visibility. Pause or slow enough to re-read the move. Reposition yourself or get ordinary team help when the case, opening or sightline makes the transition awkward.</p>
    ${C('Beginner mistake','A common failure is committing to the doorway before confirming the case actually fits cleanly, the far side is clear, or the caster orientation is cooperating.')}
    ${B('Steep ramps, dock edges, powered loading equipment and unusual heavy or unstable loads require the actual employer/site procedure and appropriate trained crew. This lesson is about recognizing the transition, not replacing that procedure.')}`,
    Q('Why should a threshold be treated as its own moment?',['It can change wheel behavior, visibility and control','Cases are not allowed through doors','Every threshold requires powered equipment'],0,'Small transitions can change an otherwise easy move.')),
   L('Park and stage cases on purpose','Leave equipment stable, findable and out of the production flow.',`
    <p>Where you leave a case is part of the assignment. A neatly parked case can still be wrong if it blocks an aisle, egress, a doorway, another department’s access, or the next equipment move. Use the destination or staging area given by the crew. Leave the case stable and use brakes or other normal case controls when present and required by the work practice.</p>
    ${V('A good staging spot answers four questions',[['Owned','Is this where the responsible crew wants it?'],['Clear','Does it preserve routes, exits and access?'],['Stable','Will it stay where it was left?'],['Findable','Can the next person identify and retrieve it without guesswork?']])}
    ${S('It is “out of the way”','You park empties against a wall, then discover that wall contains the door another department needs for its next move.','What did “out of the way” fail to account for?')}`,
    Q('What makes a staging location good?',['It merely looks tidy','It matches the production plan while preserving access and stability','It is farthest from the lead'],1,'Staging is production flow, not cosmetic cleanup.')),
   L('Flatbeds and utility carts','Apply the same control habits to common wheeled support equipment.',`
    <p>Flatbeds and carts solve a lot of labor, but only when the load remains stable, the worker can control the route, and the cart does not become a blind moving obstacle. Follow the site’s load limits and ordinary cart rules. Keep the load arranged so it does not shift during routine movement and does not eliminate all useful visibility.</p>
    ${C('When to change the plan','If the load is awkward, unstable, too large to see around, or requires more force than the available person can comfortably control, stop and get the appropriate help or a different movement plan.')}
    ${B('This does not teach freight securement, powered material handling or unusually heavy transport. Those require the responsible employer’s equipment-specific procedures and training.')}`,
    Q('What is a reason to stop before moving a loaded flatbed?',['The load is unstable or destroys useful route visibility','The cart has four wheels','The destination is nearby'],0,'Common equipment still requires a controllable load and route.'))
  ]},
  {name:'Cable is equipment, not spaghetti',lessons:[
   L('Identify before you touch','Separate ordinary cable handling from unauthorized system changes.',`
    <p>Cable work starts with identity and state. Know whether you were assigned to handle that cable, where it belongs, and whether the responsible department has released it for movement. Similar-looking cable can serve very different systems, and physical access is not authorization to disconnect something.</p>
    ${C('Simple rule','Move, coil or sort what has been assigned and released. Unknown connection state is a question, not an invitation to unplug it.')}
    ${B('Do not disconnect, energize, open, repair, alter, or test electrical or production systems outside your assignment and training. Energized electrical work and many system changes belong to qualified or specifically authorized personnel.')}`,
    Q('You are told to clear cable but find one end still connected to an unknown system. What is the strongest default?',['Disconnect it so the area looks clean','Verify release and ownership before changing the connection','Cut the cable free'],1,'Connection state is production information.')),
   L('Over-under: preserve the cable’s natural lay','Understand the purpose of a repeatable coiling method using safe practice material.',`
    <h2>The goal is not a pretty circle</h2>
    <p>For many flexible production cables, crews use an over-under style because it respects the cable’s alternating lay and helps it deploy without accumulating the same twist on every loop. The useful skill is learning to feel when a cable wants to lie naturally instead of forcing every loop in one direction.</p>
    ${V('Practice goal',[['Use safe material','Practice only with de-energized training cable or material approved for practice.'],['Feel the lay','Notice how the cable naturally wants to turn.'],['Keep it relaxed','Do not force tight bends just to make the coil smaller.'],['Deploy cleanly','A good coil should open without becoming a nest of stored twists.']])}
    ${F('Why this matters','Coiling is one of those “basic” skills a stagehand may repeat constantly. Poor handling wastes time at the next deployment and can shorten equipment life.')}
    ${B('Employer and cable-owner practices control the method for specific cable types. Some specialized cable, fiber, multicore assemblies or manufacturer-controlled products have different handling limits.')}`,
    Q('What is the main purpose of a repeatable over-under style?',['Make every coil as tight as possible','Reduce accumulated twist and support clean redeployment','Hide damaged cable'],1,'The method serves cable behavior and the next deployment.')),
   L('Deploy cable without manufacturing knots','Use controlled payout and connector care during ordinary assigned runs.',`
    <p>A good coil can still become a mess if it is thrown, dragged blindly, or pulled through itself. Keep the source organized, pay out deliberately, and protect connectors from impact, contamination and traffic. If the run changes direction or crosses other work, pause long enough to keep the route understandable.</p>
    ${C('Think about the next person','Good cable handling leaves a run that another worker can trace, service and strike without first untangling your decisions.')}
    ${B('Do not improvise routing through electrical enclosures, machinery, overhead structures, doors, vehicle paths or controlled spaces. Follow the responsible department and site controls.')}`,
    Q('What is a useful deployment habit?',['Throw the whole coil toward the destination','Pay out deliberately while protecting connectors and keeping the route understandable','Drag connectors behind the cable'],1,'Controlled payout protects equipment and workflow.')),
   L('Route and protect cable in shared spaces','Recognize ordinary routing conflicts before they become trip, crush or access problems.',`
    <p>Cable routes interact with people, cases, carts, doors and vehicle or equipment movement. Keep assigned routes within the plan given by the department, and flag places where a route is being pinched, crushed, disturbed, walked through or blocked by changing production activity.</p>
    ${V('Read a cable route through four interfaces',[['People','Does foot traffic cross or crowd the route?'],['Movement','Will cases, carts or other equipment cross it?'],['Openings','Do doors, thresholds or access points affect it?'],['Change','Has another department changed the space since the route was placed?']])}
    ${B('Cable protectors, covers, ramps, taping methods and traffic controls must be used according to the site/employer plan. Do not create your own traffic-control or energized-cable solution because a route “looks bad.”')}`,
    Q('What should you do when production activity creates a new conflict with an assigned cable route?',['Silently reroute the system','Flag the conflict to the responsible crew and follow the site plan','Ignore it because the cable was there first'],1,'Changing context should be reported without freelancing a system change.')),
   L('Coil, sort, label and return','Finish cable work so the next deployment starts cleanly.',`
    <p>Strike is not finished when the cable leaves the floor. Keep types, lengths, ownership and destinations organized according to the department’s system. Protect connectors, preserve controlled labels, and report obvious damage instead of burying it inside a case or pile.</p>
    ${C('Good return state','The next worker should be able to identify what the cable is, where it belongs and whether something about its condition needs attention.')}
    ${R('Describe the difference between “the cable is off the floor” and “the cable is actually returned to a usable production state.”')}`,
    Q('What is part of a clean cable return?',['Hiding damaged cable at the bottom','Preserving identity, connector condition and destination','Removing every label'],1,'Return state is part of equipment stewardship.'))
  ]},
  {name:'Load-in, load-out and the stuff nobody owns until somebody does',lessons:[
   L('Empty cases, lids and loose hardware','Give temporary objects a controlled home.',`
    <p>Load-ins produce empties, lids, dollies, hardware containers, packaging and temporary piles. These objects can quickly become obstacles or disappear from the equipment they belong to. Follow the department’s staging system and keep identity attached to the item whenever possible.</p>
    ${C('A useful question','“Where do you want empties for this department?” is often more valuable than inventing a perfect-looking stack in the wrong place.')}
    ${B('Never place objects where they reduce required egress, access to safety equipment, controlled work zones or other site-defined clearances.')}`,
    Q('What is the first question when empties begin accumulating?',['Where does the responsible crew want them staged?','How high can they be stacked?','Can they go in front of any unused door?'],0,'Ownership and destination come before improvisation.')),
   L('Clean handoffs','Report destination, state and exceptions instead of just walking away.',`
    <p>A handoff is complete when the next person has enough information to continue the work. “Done” may not be enough if the destination changed, something is missing, a wheel is damaged, a label does not match, or another crew blocked the route.</p>
    ${V('A useful handoff',[['What','Identify the item or task.'],['Where','State where it ended up.'],['State','Done, waiting, blocked, damaged or incomplete.'],['Exception','Say what changed from the original instruction.']])}
    ${R('Give a one-sentence handoff for a case whose destination changed because the original staging area became blocked.')}`,
    Q('When is “done” not enough?',['When an exception or changed state affects the next person','Always; stagehands must give a speech','Only on show days'],0,'Exceptions belong in the handoff.')),
   L('Ask “what’s next?” without freelancing','Finish, restore and report before inventing another task.',`
    <p>The goal is not to require permission for every breath. It is to keep assignment ownership clear. When a task ends, leave the area and equipment in the expected state, report completion, and get the next assignment. Do not use downtime to “improve” another department’s layout or disconnect gear that appears ready for strike.</p>
    ${C('Professional rhythm','Work → restore the immediate state → report → stand by or receive the next assignment.')}
    ${S('You finish early','Your assigned cases are staged. Ten feet away another department has cable on the floor and nobody is touching it.','What information is missing before you decide that cable needs your help?')}`,
    Q('What should follow completion of an assignment?',['Invent a nearby task','Restore/report and stay available for the next direction','Leave the venue'],1,'Useful initiative stays connected to production ownership.')),
   L('Strike is a release problem, not a speed contest','Use release state, ownership and destination before touching equipment during load-out.',`
    <p>Load-out often moves quickly, which makes basic discipline more important. Presence of an empty case does not mean the equipment is released. Someone carrying similar gear does not mean your item belongs with theirs. Before striking assigned equipment, know that the responsible crew has released it and know where it is supposed to go.</p>
    ${V('Strike check',[['Released','Has the responsible crew released this item or area?'],['Owned','Which department or system owns it?'],['Destination','Case, cart, truck pack or staging area?'],['Condition','Anything damaged, missing or changed to report?']])}
    ${B('Disconnection of energized systems, rigging, structural components, powered equipment and other specialist work stays with the trained/authorized personnel responsible for it.')}`,
    Q('What does an empty case next to installed equipment prove?',['The gear is released','Only that the case is present','The truck pack is complete'],1,'Physical proximity is not release authorization.'))
  ]},
  {name:'Shared field control and stop conditions',lessons:[
   L('Barricades and boundaries mean something','Treat controlled boundaries as production information.',`
    <p>Barricades, cones, tape lines, spotters and site-defined exclusion areas can represent changing work conditions. Do not step through, move or redesign a boundary because it appears inconvenient or empty. Learn who controls the area and follow the actual site instruction.</p>
    ${C('Beginner skill','The useful skill is not knowing how to design every barricade. It is noticing that a boundary exists, keeping it intact, and knowing when to ask who controls it.')}
    ${B('Safety boundaries around overhead work, vehicles, electrical work, structural operations and other hazards remain under the responsible competent/qualified/site authority.')}`,
    Q('A barricade blocks your usual route but nobody is visibly working inside it. What should you assume?',['The barricade is optional','The boundary remains meaningful until the responsible authority changes it','Move it and put it back later'],1,'Visible inactivity does not cancel a controlled boundary.')),
   L('Ratchet straps and tie-downs: know the boundary','Recognize common hardware without treating awareness as load-securement qualification.',`
    <p>Stagehands often encounter ratchet straps and other tie-down hardware on carts, cases and freight. At the general-fundamentals level, the important habits are to notice obvious damage or missing identification, keep hardware with the system it belongs to, and use it only when you are trained, assigned and following the employer/manufacturer procedure for that actual load.</p>
    ${F('Why it is here','This is common field equipment, so a beginner should recognize what it is and know not to improvise with it.')}
    ${B('This course does not teach cargo securement, tension values, load calculations, anchor selection or a procedure for securing heavy freight. Those decisions depend on the actual load, rated equipment, vehicle/system and responsible trained personnel.')}`,
    Q('What is the right takeaway from seeing ratchet straps often on calls?',['Frequent exposure makes anyone qualified to secure any load','Recognize the hardware, inspect/report obvious issues, and use it only within training and assignment','Use any strap that physically reaches'],1,'Common does not mean consequence-free or universally authorized.')),
   L('Awkward loads and team moves','Replace “prove you are strong” with planning and communication.',`
    <p>Stage work includes objects that are bulky, fragile, hard to grip or simply easier to control with more than one person. The professional move is to recognize when the available person cannot comfortably control the object and to ask for the appropriate help or movement plan.</p>
    ${C('The actual goal','Protect the worker, the equipment and the route. Nobody benefits when a simple team move turns into dropped gear or an injury because someone wanted to look capable.')}
    ${B('Employer lifting practices, mechanical assistance and specialized material-handling rules control the actual move. Do not attempt lifts or handling tasks outside your ability, training or assignment.')}`,
    Q('What is a professional response to an awkward load you cannot comfortably control?',['Attempt it alone to prove readiness','Ask for appropriate help or a different movement plan','Drag it by a connector'],1,'Judgment is part of competence.')),
   L('Know the stop conditions','Build a short list of situations where guessing is the wrong skill.',`
    <h2>Strong hands know when not to continue</h2>
    <p>Stop and get the responsible person when the next action depends on information or authority you do not have. Examples include an obviously damaged caster or case, an unstable load, an unknown connected cable, a changed or blocked route, a controlled boundary, unexpected overhead or vehicle activity, missing release state, or a task that has crossed into electrical, rigging, structural, powered-equipment or other specialist work.</p>
    ${V('Stop → Stabilize → Report',[['Stop','Do not deepen the problem.'],['Stabilize','Keep people/equipment in the safest ordinary state you can without crossing your boundary.'],['Report','Give the responsible person the facts you observed.']])}
    ${R('Name four stop conditions from memory and the person or role you would look for on an actual call.')}`,
    Q('What is the common thread among stop conditions?',['The next safe action depends on missing information, authority or appropriate control','The worker is bored','The task will take more than five minutes'],0,'Guessing is weakest when the missing piece controls safety or system state.'))
  ]}
 ]
};

D.programs.departments={
 id:'departments',title:'Department Tasks',subtitle:'Understand the work you are assigned',description:'You may not choose the department on a call. Use these task labs to recognize common support work, vocabulary, handoffs and boundaries in lighting, audio, video/LED, staging/scenic, performer support and rigging interfaces.',audience:'Workers who want to get useful faster inside an assigned department',modules:[
  {name:'Start with the assignment',lessons:[
   L('You may not choose the department','Use department knowledge to orient yourself instead of treating the course like a career selector.',`
    <h2>Assignment first, specialization second</h2>
    <p>Local stagehands are often assigned where the production needs labor. You may request work you want to learn, build a reputation in a craft over time, or eventually specialize—but the immediate call may put you somewhere else.</p>
    <p>This section therefore works like a task reference. Open the department you were assigned to, learn what the common objects and handoffs mean, and understand which actions are ordinary support versus controlled technical work.</p>
    ${V('Department orientation',[['Who','Who is leading or owning this department today?'],['What','What objects and task names recur here?'],['Flow','Where does equipment come from and go next?'],['Boundary','Which actions require authorization, qualification or system-specific knowledge?']])}`,
    Q('What is the purpose of Department Tasks?',['Guarantee the worker can choose assignments','Help a worker understand and support the department they are actually assigned to','Replace department leads'],1,'The section is an orientation and task-depth resource, not an assignment promise.'))
  ]},
  {name:'Lighting',lessons:[
   L('Lighting support tasks','Recognize the ordinary support layer around fixtures, cases, accessories and cable.',`
    <p>Lighting calls can include moving labeled cases, staging fixtures or accessories as directed, handling released cable, organizing empties, preserving fixture/case identity, and helping keep the department’s work area and routes controlled.</p>
    ${C('Useful questions','Which cases go to which position? Which accessories stay with this fixture family? Where does released cable return? Who owns damaged or questionable equipment?')}
    ${B('Energizing, electrical distribution, opening equipment, electrical repair/testing, programming, addressing/configuration and other technical system changes require the actual assignment and appropriate training/qualification.')}`,
    Q('What is appropriate beginner lighting support?',['Move and stage assigned equipment while preserving labels and ownership','Open energized distribution to learn it','Reprogram fixtures without direction'],0,'Support work can be useful without crossing into technical authority.'))
  ]},
  {name:'Audio',lessons:[
   L('Audio support tasks','Recognize common support around cable, stands, cases, stage areas and system ownership.',`
    <p>Audio support often involves careful cable handling, cases, stands, stage boxes or other department-owned equipment moving between truck, stage and storage. Labeling and routing matter because many visually similar lines can serve different destinations.</p>
    ${C('Useful beginner behavior','Preserve labels and connector condition, keep assigned runs understandable, and verify before changing a connection or moving equipment whose state is unclear.')}
    ${B('Patching, system configuration, console operation, powered speaker/system changes, electrical work and troubleshooting beyond assigned support remain with the responsible audio/qualified personnel.')}`,
    Q('What makes audio cable support useful?',['Preserving identity, route and connector condition','Unplugging anything that looks unused','Changing patches for cleanliness'],0,'Audio support depends heavily on preserving system information.'))
  ]},
  {name:'Video / LED',lessons:[
   L('Video and LED support tasks','Treat display equipment as sensitive, ordered production equipment rather than generic cases.',`
    <p>Video and LED departments may rely on panel identity, cases, accessories, signal/power components and precise physical organization. General support can include moving assigned cases, preserving panel or case order, handling released cables/accessories, and keeping protective packaging with the equipment it belongs to.</p>
    ${C('Useful beginner behavior','Ask where panels or cases are staged, how the department is keeping identity/order, and what must remain protected during movement.')}
    ${B('Assembly methods, structural acceptance, energized systems, signal configuration, processing, calibration and repair require department-specific training and authorization.')}`,
    Q('What is a strong general-support habit around LED/video equipment?',['Preserve identity/order and protective handling','Assume all panels are interchangeable','Test energized panels without direction'],0,'Sensitive systems benefit from disciplined logistics before technical work begins.'))
  ]},
  {name:'Staging / scenic',lessons:[
   L('Staging and scenic support tasks','Recognize material flow, hardware control and structural boundaries.',`
    <p>Staging/scenic work may involve decks, legs, rails, stairs, scenic pieces, drape, hardware containers and a large amount of repetitive material movement. General support is strongest when pieces remain identifiable, hardware stays controlled, routes remain clear, and the worker follows the build/strike sequence set by the responsible crew.</p>
    ${C('Useful beginner behavior','Keep like hardware with its system, do not scatter components across the work area, and ask where finished or unused pieces belong.')}
    ${B('Structural assembly/acceptance, fall-protection work, overhead work, machinery and tasks requiring a competent/qualified or specially trained person remain under the actual responsible authority.')}`,
    Q('What helps a staging/scenic crew most at the support level?',['Controlled material and hardware flow','Inventing a new assembly sequence','Removing structural components without release'],0,'Material discipline prevents rework and missing parts.'))
  ]},
  {name:'Performer support / backline',lessons:[
   L('Performer-support and backline tasks','Respect property, settings, identity and handoff boundaries around artist equipment.',`
    <p>Backline, props, wardrobe and other performer-support areas can contain personally owned, rented or carefully configured equipment. General support may involve assigned case movement, stands, carts, labeled accessories and controlled handoffs—but ownership and settings matter more than they might on generic production gear.</p>
    ${C('Useful beginner behavior','Handle only what is assigned, preserve labels and case identity, and ask before adjusting, tuning, powering, reconfiguring or “fixing” artist equipment.')}
    ${B('Instrument setup, tuning, electronics, wardrobe/prop specialty work and artist-specific configuration remain with the responsible technician or authorized person unless you are explicitly trained and assigned.')}`,
    Q('What is the strongest default around unfamiliar artist equipment?',['Adjust it until it looks right','Preserve its state and follow the responsible technician’s direction','Remove labels to make the case cleaner'],1,'Property and configuration boundaries are especially important around performer-support systems.'))
  ]},
  {name:'Rigging interface',lessons:[
   L('Know what rigging work looks like without pretending to be a rigger','Recognize the department, protect its work zones and understand the general-support boundary.',`
    <p>General stagehands may work near riggers, move assigned rigging cases, hand off materials as directed, or work around areas affected by overhead operations. The critical beginner knowledge is recognizing that rigging is specialized work with qualification, planning, inspection and site-specific controls.</p>
    ${C('Useful general-stagehand behavior','Know who controls the area, respect exclusion zones and overhead calls, keep routes clear, and only provide the support the rigging lead or responsible crew assigns.')}
    ${B('This lesson does not teach rigging methods, load calculations, points, knots, hardware selection, climbing, fall protection or overhead installation. Those require appropriate training, qualification and employer/site authorization.')}`,
    Q('What is the right goal for a non-rigger in this lesson?',['Learn enough to perform overhead rigging alone','Recognize the interface and support it without crossing the qualification boundary','Ignore rigging because it is another department'],1,'Awareness improves coordination without pretending to create qualification.'))
  ]}
 ]
};
})();
