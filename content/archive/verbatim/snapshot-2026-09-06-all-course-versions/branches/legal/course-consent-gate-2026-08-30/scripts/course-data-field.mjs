export const fieldCourses = [
  {
    slug: 'field-skill-over-under-cable-coiling',
    title: 'Over-Under Cable Coiling',
    tier: 'Stagehand Field Skills',
    tierClass: 'course-tier-field-skill',
    status: 'Knowledge Build · Practice Gate',
    packet: 'Research Package 46 — Stagehand Field Skills: Over-Under Cable Coiling',
    description: 'Learn the common over-under hand sequence, protect the cable and connectors, and recognize when the technician or manufacturer calls for another method.',
    boundary: 'The responsible technician chooses the method, coil diameter, connector treatment, tie convention, destination, and acceptance standard for the actual cable. This lesson never authorizes disconnection, testing, repair, or handling of live or show-critical lines.',
    modules: [
      {
        name: 'Assignment & Cable Ownership',
        lessons: [{
          name: 'Start With the Assignment',
          objective: 'Confirm cable ownership, release state, handling method, coil size, tie convention, and destination before touching the line.',
          blocks: [
            { type: 'callout', paragraphs: ['Over-under is a common method for many flexible production cables. It is not a universal order for every cable. <strong>The cable owner and the manufacturer control the actual handling method.</strong>'] },
            { heading: 'Ask six questions first', type: 'sequence', items: ['Which cable am I taking in?', 'Which end should come in first?', 'Did the technician disconnect and release the cable for strike?', 'Does this line get a hand coil, figure eight, reel, basket, or another method?', 'What coil size and tie or label convention does this department use?', 'Where does the finished cable go?'] },
            { type: 'authority', heading: 'Do not create your own assignment', paragraphs: ['Do not unplug, repatch, clean, test, de-energize, or move a line because it appears finished. A cable may still carry power, data, audio, control, or a show-critical feed even when nearby equipment looks idle.'] }
          ]
        }]
      },
      {
        name: 'Inspection & Route Control',
        lessons: [{
          name: 'Inspect Before You Coil',
          objective: 'Find visible cable, connector, and route problems, then report them without attempting repair.',
          blocks: [
            { heading: 'Scan the whole assembly', bullets: ['Cuts, crushed or flattened areas, exposed material, severe kinks, heat damage, or contamination.', 'Bent, cracked, wet, dirty, or incomplete connector parts.', 'Damaged strain relief or a missing identification label.', 'A cable trapped under gear, crossing active traffic, or still connected to equipment.'] },
            { type: 'columns', columns: [
              { heading: 'Protect', bullets: ['Connector faces and caps', 'Cable from case wheels and doors', 'People from loose loops and trip hazards'] },
              { heading: 'Report', bullets: ['Visible damage', 'Unclear ownership', 'Route conflict', 'Resistance that feels wrong'] }
            ] },
            { type: 'stop', heading: 'Stop instead of repairing', paragraphs: ['A stagehand reports the condition. Connector work, electrical repair, fiber cleaning, continuity testing, and decisions about continued service belong to the responsible technician.'] }
          ]
        }]
      },
      {
        name: 'The Hand Sequence',
        lessons: [{
          name: 'Form Relaxed Alternating Loops',
          objective: 'Form consistent over and under loops without forcing twist or violating the directed coil diameter.',
          blocks: [
            { type: 'evidence', paragraphs: ['QSC demonstrates a repeatable over-loop and under-loop motion. Hosa explains why it works: repeated over-over loops add twist in one direction, while the under loop counters the twist added by the prior loop.'] },
            { heading: 'Controlled sequence', type: 'sequence', items: ['Hold the receiving end and let the cable relax.', 'Gather a length that matches the technician-directed diameter.', 'Form the first over loop by letting the cable fall into its natural curve.', 'Reverse the working-hand orientation and form the under loop.', 'Continue alternating without twisting the jacket into place.', 'When a loop resists, lower tension and let the cable rotate naturally. If it still resists, stop and ask.'] },
            { type: 'callout', heading: 'What the observer should see', paragraphs: ['The loops stay relaxed and similar in size. The cable does not fight the learner. The connectors remain controlled. A left-handed learner may mirror the motion; the observable skill is the alternating lay, not one required hand.'] }
          ]
        }]
      },
      {
        name: 'Finish & Exceptions',
        lessons: [{
          name: 'Secure, Stage, and Know the Exceptions',
          objective: 'Finish the coil without adding damage and recognize cable families that require another method or tighter control.',
          blocks: [
            { heading: 'Finish the assignment', bullets: ['Keep ends visible or follow the department convention.', 'Use the supplied reusable tie. Never knot the cable around itself.', 'Avoid overtightening the tie or burying a connector where the coil can crush it.', 'Carry and stage the coil at the directed destination with connector faces protected.'] },
            { type: 'columns', columns: [
              { heading: 'Common default', paragraphs: ['Many flexible microphone, signal, and production cables accept a technician-directed over-under coil.'] },
              { heading: 'Ask first', bullets: ['Fiber and optical assemblies', 'Multicore and feeder', 'Cable supplied on a reel or drum', 'Cable with a stated minimum bend diameter', 'Any unfamiliar or unusually stiff assembly'] }
            ] },
            { type: 'stop', heading: 'Cable-specific limits win', paragraphs: ['Neutrik warns that opticalCON assemblies must respect their minimum coiling diameter. Belden documents cable-specific bend limits. Never shrink the coil to make it fit a case when the actual assembly calls for a larger diameter or reel.'] }
          ]
        }]
      },
      {
        name: 'Observed Practice',
        lessons: [{
          name: 'Prepare for Field Observation',
          objective: 'Demonstrate the skill on one named cable while keeping the knowledge result separate from practical acceptance.',
          blocks: [
            { type: 'practice', heading: 'Observer checklist', ordered: true, bullets: ['Learner identifies the cable owner and repeats the handling assignment.', 'Learner confirms release state, method, diameter, tie convention, and destination.', 'Learner inspects the cable and protects both connectors.', 'Learner forms at least six relaxed alternating loops without forced twist or tight kinks.', 'Learner secures and stages the coil as directed.', 'Learner names at least two stop-and-ask conditions.'] },
            { type: 'authority', paragraphs: ['Record <strong>knowledge completed</strong> and <strong>practice observed on the named cable</strong> as separate states. Observation on one microphone cable does not transfer to fiber, feeder, multicore, reel systems, or another department’s handling rules.'] }
          ]
        }]
      }
    ],
    quiz: [
      { question: 'A cable reaches you during strike, but nobody confirmed release. What comes first?', options: ['Begin coiling from the loose end', 'Confirm release and ownership with the responsible technician', 'Unplug it so the aisle stays clear'], answer: 1, coaching: 'Nearby equipment may look idle while the cable still carries power, data, audio, control, or show-critical service.' },
      { question: 'A loop will only hold its shape when you twist the jacket hard. What should you do?', options: ['Force the loop so every coil matches', 'Make the loop smaller', 'Relax the cable and ask whether the method or diameter should change'], answer: 2, coaching: 'Resistance can signal natural lay, stored twist, stiffness, or a cable-specific bend limit. The learner does not force it.' },
      { question: 'Why does over-under help many flexible production cables?', options: ['It alternates the twist placed into successive loops', 'It removes the need for a cable tie', 'It makes every cable fit the same case'], answer: 0, coaching: 'The alternating lay manages accumulated twist and supports cleaner deployment. It does not erase cable-specific rules.' },
      { question: 'A fiber assembly arrives on its original reel. What is the correct default?', options: ['Remove it and hand-coil it over-under', 'Follow the technician and manufacturer handling method', 'Coil it as tightly as possible to save space'], answer: 1, coaching: 'Fiber, reels, multicore, and other sensitive assemblies can require specific bend limits and handling methods.' },
      { question: 'What does a practical observation on one cable prove?', options: ['The learner can handle every cable family', 'The learner demonstrated the named sequence on that identified cable', 'The learner may disconnect any released-looking cable'], answer: 1, coaching: 'The record must name the equipment and conditions. Field authority remains with the department and employer.' }
    ],
    practice: {
      heading: 'Practice state required',
      paragraphs: ['Complete the knowledge lesson first, then practice on a cable selected by the responsible technician. Record the cable family, observer, conditions, and result.'],
      checklist: ['Technician confirms cable and method.', 'Learner completes six controlled alternating loops.', 'Observer checks connector control, relaxed lay, coil diameter, tie, destination, and stop judgment.', 'Employer or department authorization, if any, remains a separate record.']
    },
    sources: [
      { label: 'QSC — Cable coiling training', url: 'https://training.qsc.com/mod/book/tool/print/index.php?id=1715' },
      { label: 'Hosa Technology — How to wrap a cable', url: 'https://hosatech.com/press-release/how-to-wrap-a-cable/' },
      { label: 'Neutrik — opticalCON handling FAQ', url: 'https://www.neutrik.com/en/neutrik/faq/opticalcon' },
      { label: 'Belden — Cable installation and bend awareness', url: 'https://www.belden.com/blog/copper-cable-installation-best-practices-be-aware-of-the-why' }
    ]
  },
  {
    slug: 'field-skill-ratchet-straps',
    title: 'Ratchet Straps Under Direction',
    tier: 'Stagehand Field Skills',
    tierClass: 'course-tier-field-skill',
    status: 'Knowledge Build · Practice Gate',
    packet: 'Research Package 47 — Stagehand Field Skills: Ratchet Straps',
    description: 'Inspect and operate one identified ratchet-strap assembly after the lead selects the strap, anchors, route, edge protection, sequence, and stop point.',
    boundary: 'The responsible lead selects suitability, connection points, route, edge protection, sequence, tension, and final acceptance. This course never permits a cargo strap to serve as lifting, rigging, fall-protection, towing, recovery, or personnel-restraint equipment.',
    modules: [
      {
        name: 'Assembly & Scope',
        lessons: [{
          name: 'Know the Parts and the Limits',
          objective: 'Identify the working assembly and separate operating the mechanism from designing the securement plan.',
          blocks: [
            { type: 'columns', columns: [
              { heading: 'Assembly parts', bullets: ['Fixed and adjustable webbing ends', 'Stitching and identification label', 'End fittings', 'Mandrel or spool', 'Handle, pawl, and release'] },
              { heading: 'Lead decisions', bullets: ['Whether the strap fits the job', 'Both connection points', 'Route and edge protection', 'Tension and order', 'Final inspection and acceptance'] }
            ] },
            { type: 'callout', paragraphs: ['A ratchet strap is a labeled assembly, not generic rope. Working load limit, material, end fitting, construction, and intended use vary. Reading the label helps you identify the item; it does not appoint you to design the system.'] },
            { type: 'stop', paragraphs: ['Never substitute this assembly for a hoist, sling, lanyard, tow strap, recovery device, or personnel restraint. Those uses involve different equipment, forces, standards, and authority.'] }
          ]
        }]
      },
      {
        name: 'Pre-Use Inspection',
        lessons: [{
          name: 'Inspect the Complete Strap',
          objective: 'Run a conservative inspection and remove uncertainty from the immediate task.',
          blocks: [
            { heading: 'Lay out enough to see', bullets: ['The label and rated identification.', 'Webbing for cuts, tears, holes, broken fibers, heavy abrasion, edge wear, crushing, knots, burns, melting, chemicals, or contamination.', 'Stitching for pulls, separation, or visible damage.', 'End fittings for bending, cracks, spread, corrosion, or distortion.', 'The ratchet for bending, cracks, heavy corrosion, jams, missing parts, or failure to lock and release normally.'] },
            { type: 'authority', paragraphs: ['When identity, condition, or compatibility is uncertain, give the strap to the lead and keep it out of the immediate task. Do not cut, sew, knot, relabel, shorten, lubricate, or return damaged gear to service on your own.'] },
            { type: 'evidence', paragraphs: ['For covered commercial-motor-vehicle cargo, 49 CFR 393.104 requires serviceable tiedowns and components, bars knots, requires securement against release, and calls for edge protection where cargo could cut or abrade the tiedown. Other event uses may fall under different rules, but manufacturer limits still control.'] }
          ]
        }]
      },
      {
        name: 'Plan, Attach & Route',
        lessons: [{
          name: 'Repeat the Plan Before You Connect',
          objective: 'Attach only to assigned points and route the webbing exactly as the lead directs.',
          blocks: [
            { heading: 'Lead briefing', type: 'sequence', items: ['Identify the exact strap.', 'Point to both approved connection points.', 'Show the route and webbing orientation.', 'Place the required edge protection.', 'State the tension stop and order relative to other straps.', 'Name the final inspector.'] },
            { heading: 'Route without improvising', bullets: ['Seat end fittings in the manner shown by the lead and manufacturer.', 'Keep webbing flat unless the product instructions state otherwise.', 'Keep it free of knots and unintended twists.', 'Protect it from sharp edges, heat, chemicals, tires, doors, and moving parts.', 'Do not hook to trim, sheet metal, case handles, guardrails, unknown structure, or another strap unless the approved plan calls for it.'] },
            { type: 'stop', paragraphs: ['Stop when the route changes, the edge protection moves, an anchor deforms, the webbing rubs a sharp edge, or the actual setup no longer matches the briefing.'] }
          ]
        }]
      },
      {
        name: 'Thread, Tension & Lock',
        lessons: [{
          name: 'Operate the Exact Mechanism',
          objective: 'Thread, remove slack, tension, and lock one model-specific ratchet while staying clear of pinch and recoil paths.',
          blocks: [
            { type: 'evidence', paragraphs: ['Mechanisms and release designs vary. The reviewing lead must demonstrate the exact strap used in practice. The sequence below gives the control points; the manufacturer’s direction controls hand position and webbing travel.'] },
            { type: 'sequence', items: ['Open the ratchet to the demonstrated loading position.', 'Feed the free end through the mandrel slot in the demonstrated direction.', 'Pull most slack through by hand before moving the handle.', 'Take stable footing and clear everyone from the line of action.', 'Move the handle smoothly and watch the strap, anchors, edge protection, and load.', 'Stop at the lead’s directed point.', 'Close the handle into its locked position and request inspection.'] },
            { type: 'stop', heading: 'Never add unapproved force', paragraphs: ['Do not add a pipe, bar, tool, body weight, or second person to force more tension. Stop if the mechanism binds, will not lock, overfills with webbing, or if any load or structure begins to move or deform.'] }
          ]
        }]
      },
      {
        name: 'Controlled Release & Storage',
        lessons: [{
          name: 'Release Stored Force Safely',
          objective: 'Confirm load stability, control the release, and store or quarantine the strap as directed.',
          blocks: [
            { heading: 'Before release', bullets: ['Confirm the load cannot roll, fall, spring, swing, or shift when force comes off.', 'Clear people from the hardware and cargo travel path.', 'Identify who controls the release and which strap comes off first.', 'Use the model-specific release shown by the lead.'] },
            { type: 'sequence', items: ['Hold the mechanism in the demonstrated control position.', 'Operate the release and open the ratchet fully.', 'Let tension off without placing hands in the spool or pawl area.', 'Remove the webbing and end fittings after the load remains stable.', 'Roll or fold the strap according to company practice.', 'Place rejected gear where the lead directs; do not mix it back into ready stock.'] },
            { type: 'authority', paragraphs: ['A clean release does not equal final acceptance. The responsible lead checks the system before use and controls the unload or release sequence.'] }
          ]
        }]
      }
    ],
    quiz: [
      { question: 'A strap has no readable identification label. What is the strongest response?', options: ['Use it for a light load', 'Ask a coworker to estimate its rating', 'Remove it from the immediate task and give it to the lead'], answer: 2, coaching: 'Uncertain identity or capacity is an escalation condition. The learner does not invent a lower use.' },
      { question: 'Who chooses the anchor points and route?', options: ['The person holding the ratchet', 'The responsible lead', 'Whoever unloaded the strap bin'], answer: 1, coaching: 'Operating the mechanism and designing the securement plan are separate responsibilities.' },
      { question: 'Why pull most slack through before ratcheting?', options: ['To keep excess webbing from binding or overfilling the mechanism', 'To increase the strap rating', 'To eliminate the need for edge protection'], answer: 0, coaching: 'The exact acceptable wrap range is model-specific, but heavy slack should not accumulate on the mandrel.' },
      { question: 'The load begins to shift as you tension. What comes next?', options: ['Add tension quickly to hold it', 'Stop immediately and notify the lead', 'Stand closer so you can steady it'], answer: 1, coaching: 'Movement changes the hazard and can place people in the load or recoil path. The lead must reassess the plan.' },
      { question: 'When may a cargo ratchet strap serve as a lifting sling?', options: ['When the labeled capacity looks high enough', 'When the lift is only a few inches', 'Never on the basis of this course'], answer: 2, coaching: 'Cargo tiedowns and lifting equipment have different intended uses and controls. This course grants no lifting authority.' }
    ],
    practice: {
      heading: 'Practice on one named assembly',
      paragraphs: ['The lead identifies the strap, connection points, route, edge protection, tension stop, and release order. The observer records the exact assembly and training setup.'],
      checklist: ['Complete inspection and label check.', 'Repeat both connection points and route.', 'Thread in the demonstrated direction and remove slack.', 'Tension smoothly to the reviewer’s stop, lock, and request inspection.', 'Release under control and store or quarantine correctly.']
    },
    sources: [
      { label: 'Kinedyne — Cargo securement education', url: 'https://kinedyne.com/201-cargo-securement-education/' },
      { label: 'Kinedyne — Ratchet buckles', url: 'https://kinedyne.com/ratchet-buckles/' },
      { label: 'Kinedyne — Ratchet straps', url: 'https://kinedyne.com/flatbed-trailer-products/ratchet-straps/' },
      { label: '49 CFR 393.104 — Securement devices and systems', url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-I/section-393.104', note: 'Applies within its stated commercial-motor-vehicle scope.' }
    ]
  },
  {
    slug: 'field-skill-flatbed-cargo-securement-support',
    title: 'Flatbed Cargo-Securement Support',
    tier: 'Stagehand Field Skills',
    tierClass: 'course-tier-field-skill',
    status: 'Knowledge Build · Driver Practice Gate',
    packet: 'Research Package 48 — Stagehand Field Skills: Flatbed Cargo-Securement Support',
    description: 'Assist a driver or qualified load lead by recognizing the securement system, following the approved plan, staying clear of stored-force zones, and reporting change.',
    boundary: 'The motor carrier, driver, or qualified load lead owns the securement plan and final acceptance as applicable. Completion is not a CDL, driver qualification, cargo-securement certification, or permission to approve a public-road load.',
    modules: [
      {
        name: 'Authority & Regulatory Scope',
        lessons: [{
          name: 'Helping Is Not Approving',
          objective: 'Separate the helper’s physical assignment from the driver or qualified load lead’s plan and acceptance responsibilities.',
          blocks: [
            { type: 'callout', paragraphs: ['Flatbed securement is a complete restraint system, not a contest to add straps. Cargo position, vehicle structures, anchors, tiedowns, blocking, bracing, dunnage, edge protection, geometry, and inspection work together.'] },
            { type: 'evidence', paragraphs: ['For covered commercial motor vehicles on public roads, federal rules require cargo to remain secured against falling, spilling, blowing, or shifting enough to affect vehicle stability or control. FMCSA states that a driver may rely on others to load and tie down cargo, but the driver still needs familiarity with the method and may need to adjust it. 49 CFR 392.9 also places inspection duties on the driver.'] },
            { type: 'authority', paragraphs: ['Federal CMV rules do not automatically govern every cart, trailer, private-property move, or event load. State rules, vehicle type, cargo, company procedure, and contracts can add or change duties. The learner follows the named authority and does not turn one rule summary into universal legal advice.'] }
          ]
        }]
      },
      {
        name: 'System Recognition',
        lessons: [{
          name: 'Recognize the Parts of the Plan',
          objective: 'Identify common securement components and know which ones require separate instruction.',
          blocks: [
            { type: 'columns', columns: [
              { heading: 'Helper may handle as assigned', bullets: ['Ratchet or winch straps after model instruction', 'Edge protection', 'Directed dunnage, blocking, or chocks', 'Approved anchor points named by the lead', 'Loose tails and final housekeeping'] },
              { heading: 'Separate authority or training', bullets: ['Securement calculations and tiedown count', 'Anchor suitability decisions', 'Chains and binders', 'Tarping with wind or fall exposure', 'Commodity-specific rules', 'Vehicle and load acceptance'] }
            ] },
            { type: 'callout', paragraphs: ['A learner who can run one ratchet strap is not automatically trained on a trailer winch, chain binder, tarp system, or another end fitting. Each mechanism needs its own procedure and review.'] }
          ]
        }]
      },
      {
        name: 'Control & Inspection',
        lessons: [{
          name: 'Establish Control Before You Stage Gear',
          objective: 'Identify the person in charge, immobilize the work area, repeat the plan, and inspect assigned components.',
          blocks: [
            { heading: 'Control questions', type: 'sequence', items: ['Who directs this securement?', 'Is the vehicle immobilized and safe to approach?', 'Where and how will each cargo unit sit?', 'Which tiedown, anchor, protection, and sequence apply to my task?', 'What word or signal stops the operation?', 'Who will control release at destination?'] },
            { heading: 'Conservative inspection', bullets: ['Strap label, webbing, stitching, fittings, ratchet, or winch condition.', 'Visible rail, pocket, deck, anchor, or structure damage.', 'Cracked, crushed, shifted, or wet packaging and dunnage.', 'Unstable footing, slick surfaces, unsecured adjacent cargo, or active vehicle movement.'] },
            { type: 'stop', paragraphs: ['Report uncertainty. Do not downgrade a defect as “probably fine,” change case orientation, move a planned anchor, or replace missing protection without the load lead.'] }
          ]
        }]
      },
      {
        name: 'Stage, Route & Tension',
        lessons: [{
          name: 'Work Outside the Line of Fire',
          objective: 'Follow the route and tension order while staying clear of cargo, hardware, and recoil travel paths.',
          blocks: [
            { heading: 'Helper sequence', type: 'sequence', items: ['Stage hardware where the load lead directs without blocking movement or access.', 'Stay out from under thrown hardware and away from unstable stacks, drop zones, trailer edges, and pinch areas.', 'Install directed dunnage, chocks, tiedowns, and edge protection without changing the plan.', 'Keep webbing free of knots, unintended twists, and unprotected sharp-edge contact.', 'Tension only on the lead’s call and in the assigned order.', 'Watch cargo, packaging, anchors, protection, and nearby crew during every pull.', 'Stop at movement, noise, deformation, loss of footing, or plan mismatch.'] },
            { type: 'stop', heading: 'Climbing is not an improvised shortcut', paragraphs: ['Do not climb cargo or trailer edges unless the employer supplies an authorized access and fall-control method. Tarp work, high access, chain binders, and machinery remain outside this helper lesson without separate training.'] }
          ]
        }]
      },
      {
        name: 'Inspection, Transit & Release',
        lessons: [{
          name: 'Return Acceptance to the Driver',
          objective: 'Clear the work, support final inspection, and release stored force only under the unload plan.',
          blocks: [
            { heading: 'Before movement', bullets: ['Remove tools, loose dunnage, tails, and trip hazards as directed.', 'Report any visible conflict; do not say “looks good” as if that closes the inspection.', 'Give the driver or qualified load lead access to every inspection point.', 'Understand that transit can change tension and cargo position. Required road inspections remain with the driver under the applicable rules.'] },
            { heading: 'At destination', type: 'sequence', items: ['Identify what could move when each device releases.', 'Confirm the unload sequence and stable support.', 'Clear all people from cargo and hardware travel paths.', 'Release only on the named authority’s call.', 'Stop if the load shifted, tension changed, packaging failed, or the unload state differs from the plan.'] },
            { type: 'authority', paragraphs: ['The driver or qualified load lead performs final acceptance. A helper’s completed task proves assignment completion—not that the vehicle may travel.'] }
          ]
        }]
      }
    ],
    quiz: [
      { question: 'What makes flatbed securement different from simply operating a ratchet strap?', options: ['It combines cargo position, vehicle structure, anchors, restraint, protection, and inspection', 'It uses longer webbing', 'It only matters on interstate highways'], answer: 0, coaching: 'The load acts as a system. Strap mechanics cover only one component.' },
      { question: 'The cargo arrives in different packaging than the plan described. What should the helper do?', options: ['Use the same route because the weight looks similar', 'Stop and return the change to the driver or load lead', 'Add one strap without telling anyone'], answer: 1, coaching: 'Changed geometry or packaging can change restraint, protection, and load behavior.' },
      { question: 'Who performs final acceptance for the vehicle load?', options: ['The last helper to tighten a strap', 'The driver, motor carrier, or qualified load lead as applicable', 'Any person who passed the knowledge check'], answer: 1, coaching: 'Physical assistance does not transfer the plan or acceptance responsibility.' },
      { question: 'A tensioned strap’s edge protection begins to slide. What comes next?', options: ['Finish tightening, then fix it', 'Stop and notify the lead', 'Stand against it while another person tensions'], answer: 1, coaching: 'The planned protection no longer controls the contact point. Continuing creates a cutting and line-of-fire hazard.' },
      { question: 'Does this course qualify a learner to calculate aggregate working load limits?', options: ['Yes, after the quiz', 'Only on event trailers', 'No; calculation and approval stay with qualified authority'], answer: 2, coaching: 'The course teaches recognition and safe assistance, not cargo-plan design or approval.' }
    ],
    practice: {
      heading: 'Controlled training-load assist',
      paragraphs: ['Practice on an immobilized training vehicle or fixture with a current driver or qualified cargo-securement lead. Identify the exact devices and keep the exercise within the approved plan.'],
      checklist: ['Name the controlling driver or load lead.', 'Repeat cargo position, anchors, hardware, protection, and sequence.', 'Inspect assigned parts and visible anchor areas.', 'Stage and tension from directed safe zones.', 'Clear the work and return final inspection to the authority.', 'Demonstrate controlled release under the unload plan.']
    },
    sources: [
      { label: 'FMCSA — Cargo securement rules', url: 'https://www.fmcsa.dot.gov/regulations/cargo-securement/cargo-securement-rules' },
      { label: '49 CFR 392.9 — Driver inspection and securement duties', url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-392/subpart-A/section-392.9' },
      { label: '49 CFR 393 Subpart I — Protection against shifting and falling cargo', url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-I' },
      { label: '49 CFR 393.104 — Devices, systems, and tiedowns', url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-I/section-393.104' },
      { label: 'Kinedyne — Cargo securement education', url: 'https://kinedyne.com/201-cargo-securement-education/' }
    ]
  },
  {
    slug: 'field-skill-barricade-setup',
    title: 'Barricade Setup Under Direction',
    tier: 'Stagehand Field Skills',
    tierClass: 'course-tier-field-skill',
    status: 'Knowledge Build · Model Practice Gate',
    packet: 'Research Package 49 — Stagehand Field Skills: Barricade Setup',
    description: 'Identify the barricade family, use the exact manufacturer procedure, protect hands and routes, and preserve the lead’s layout without improvising.',
    boundary: 'The designated barricade, crowd, security, event-operations, or venue lead controls layout, audience orientation, gates, corners, wedges, bracing, public and emergency access, surface acceptance, sequence, and final inspection.',
    modules: [
      {
        name: 'Equipment Family & Authority',
        lessons: [{
          name: '“Barricade” Is Not One Procedure',
          objective: 'Identify the equipment family and require the exact model procedure before physical setup.',
          blocks: [
            { type: 'columns', columns: [
              { heading: 'Common families', bullets: ['Folding pedestrian or bicycle panel', 'Interlocking steel crowd-control panel', 'Concert or front-of-stage barricade', 'Temporary fence panel', 'Vehicle or security barrier'] },
              { heading: 'What can differ', bullets: ['Feet, floor plates, hinges, and braces', 'Hooks, pins, bars, clamps, and locks', 'Audience side and working side', 'Corners, gates, wedges, and step pieces', 'Handling weight and approved use'] }
            ] },
            { type: 'callout', paragraphs: ['A nickname such as “bike rack” or “concert barricade” does not establish the connector, layout, crowd capacity, or setup sequence. Find the model and reviewed instructions.'] },
            { type: 'authority', paragraphs: ['The product manual explains its hardware. The event lead sets the event-specific line, gates, routes, and public interface. Neither source replaces the other.'] }
          ]
        }]
      },
      {
        name: 'Briefing & Inspection',
        lessons: [{
          name: 'Brief Before the First Unit Moves',
          objective: 'Confirm model, handling method, orientation, layout, stop command, and final inspector before unload.',
          blocks: [
            { heading: 'Lead briefing', bullets: ['Exact model and current instructions.', 'Cart restraint, unloading method, crew positions, and lift or machine plan.', 'Audience side, working side, start point, direction, line, corners, gates, and special pieces.', 'Exclusion area while heavy parts open, lower, or connect.', 'Stop command and person who performs final inspection.'] },
            { heading: 'Inspect the cart and first unit', bullets: ['Bent frame, cracked weld, heavy corrosion, missing piece, or damaged foot and floor plate.', 'Missing or bent pin, lock bar, clamp, connector, button stop, fastener, or label.', 'Wet, icy, soft, sloped, contaminated, or uneven surface.', 'People, cables, cases, or vehicles inside the unit’s movement path.'] },
            { type: 'stop', paragraphs: ['Report defects. Do not repair a weld, substitute a bolt, tape over a latch, or make a missing connector “work” with rope, cable ties, or mismatched hardware.'] }
          ]
        }]
      },
      {
        name: 'Handling & Orientation',
        lessons: [{
          name: 'Move and Face the Unit Before Deployment',
          objective: 'Use assigned handling positions, protect pinch zones, and orient the unit before it opens or connects.',
          blocks: [
            { type: 'callout', paragraphs: ['The StageRight CC-500 example weighs 215 pounds. Weight alone does not set a universal crew count. The employer and lead choose a team or mechanical handling plan for the actual unit, route, and surface.'] },
            { heading: 'Handling controls', bullets: ['Use the assigned crew positions, lift points, device, and command words.', 'Keep hands away from hinges, floor-plate edges, joint gaps, connector interfaces, and places another unit can trap them.', 'Clear the travel path before moving.', 'Set the unit down on command; do not catch a falling unit with hands or feet.'] },
            { heading: 'Orient first', paragraphs: ['Confirm the audience face and working side before deployment. Do not open a heavy unit backward and then rotate it through crew, cables, or public space. Align to the lead’s line before connection.'] }
          ]
        }]
      },
      {
        name: 'Deploy & Connect',
        lessons: [{
          name: 'Follow the Exact Model Procedure',
          objective: 'Deploy and connect only the identified model with its specified hardware and close visual verification.',
          blocks: [
            { type: 'evidence', paragraphs: ['For the CC-500 only, StageRight directs users to lift the barrier, slide the upright barrier forward until it stops, lower the step until it rests horizontally and locks, then join units with the model’s lock bars and faspins. Another product requires another sequence.'] },
            { type: 'sequence', items: ['Call out the model and confirm the applicable procedure.', 'Clear the opening, lowering, and connection zones.', 'Deploy under one lead’s commands with hands in reviewed positions.', 'Bring units together without fingers in the joint.', 'Install only the specified connector and approved parts.', 'Confirm pins, bars, locks, stops, and fasteners show full engagement.', 'Hold the lead’s line; stop at any conflict instead of bending around it.'] },
            { type: 'stop', paragraphs: ['Do not copy the CC-500 sequence to a Mojo, Sentinel, temporary fence, folding panel, vehicle barrier, or any unverified system.'] }
          ]
        }]
      },
      {
        name: 'Layout Conflicts, Inspection & Strike',
        lessons: [{
          name: 'Preserve Routes and Control the Release',
          objective: 'Stop at layout conflicts, support final inspection, and reverse the model procedure under one person’s command.',
          blocks: [
            { heading: 'Stop for layout decisions', bullets: ['Slope, curb, drain, doorway, cable route, structure, or uneven ground.', 'Accessible route, emergency exit, fire lane, public path, or security gate conflict.', 'Missing corner, gate, wedge, brace, or model-specific part.', 'Public access before final inspection.', 'Wind load, temporary fence, structural anchor, or vehicle-barrier work.'] },
            { heading: 'Final check', bullets: ['Correct audience orientation.', 'Engaged hardware and complete connections.', 'Approved line, corners, gates, gaps, surface, and routes.', 'No loose parts or unexpected movement.', 'Lead acceptance before public use.'] },
            { type: 'practice', heading: 'Strike', paragraphs: ['Reverse the reviewed model procedure under one lead. Clear the release path, support heavy or moving pieces before locks come free, and control cart loading and restraints.'] }
          ]
        }]
      }
    ],
    quiz: [
      { question: 'You receive a barricade called “bike rack,” but the model is unknown. What comes first?', options: ['Use the connector that fits', 'Identify the family, model, and reviewed procedure', 'Copy the setup from a nearby line'], answer: 1, coaching: 'A nickname does not establish the equipment procedure or event layout.' },
      { question: 'A lock pin is missing. What is the correct response?', options: ['Use a bolt of similar size', 'Secure it with tape', 'Remove the unit from the task or obtain the approved part through the lead'], answer: 2, coaching: 'Substitute hardware has unknown fit and function. The lead and manufacturer procedure control replacement.' },
      { question: 'The planned line reaches an accessible route. Who changes the layout?', options: ['The stagehand closest to the conflict', 'The designated event or barricade lead', 'Anyone who can keep the line straight'], answer: 1, coaching: 'Layout and public-route decisions remain with the designated authority.' },
      { question: 'What does the CC-500 four-step procedure apply to?', options: ['Every concert barricade', 'The CC-500 model used in that manufacturer packet', 'Any panel weighing more than 200 pounds'], answer: 1, coaching: 'Do not generalize product-specific mechanical instructions to another family or model.' },
      { question: 'When does public access begin?', options: ['After the last unit connects', 'After the designated lead completes final inspection and releases the line', 'When the crew moves the transport cart'], answer: 1, coaching: 'Connection alone does not confirm layout, gates, routes, surface, and hardware acceptance.' }
    ],
    practice: {
      heading: 'Model-specific observed setup',
      paragraphs: ['Record the exact model, manual revision or procedure, lead, surface, handling method, and result. A signoff on one model does not cover every barricade family.'],
      checklist: ['Identify family and model.', 'Inspect transport, unit, connectors, and surface.', 'Use assigned handling and hand positions.', 'Orient, deploy, and connect under command.', 'Confirm visible engagement and stop at a planned conflict.', 'Support final inspection and controlled strike.']
    },
    sources: [
      { label: 'StageRight — CC-500 product information packet', url: 'https://performance.stageright.com/wp-content/uploads/sites/2/2015/09/pip-cc500-crowd-control-barricade-20161209.pdf', note: 'Model-specific procedure.' },
      { label: 'StageRight — Steel crowd-control barricade product page', url: 'https://performance.stageright.com/products/accessories/crowd-control-barricades/steel-barricade/' }
    ]
  },
  {
    slug: 'field-skill-cable-ramps-protectors',
    title: 'Cable Ramps & Protectors',
    tier: 'Stagehand Field Skills',
    tierClass: 'course-tier-field-skill',
    status: 'Knowledge Build · Route Practice Gate',
    packet: 'Research Package 50 — Stagehand Field Skills: Cable Ramps and Protectors',
    description: 'Install an assigned cable-protection system along an approved route while preserving cable limits, pedestrian access, traffic controls, and the lead’s final inspection.',
    boundary: 'The department or venue lead controls the route, product family and model, traffic class, channel assignment, service separation, accessible-route solution, surface acceptance, and final inspection. The learner never chooses a vehicle rating or accessibility solution from appearance alone.',
    modules: [
      {
        name: 'Route & Product Selection',
        lessons: [{
          name: 'Confirm the Complete Crossing',
          objective: 'Treat cable protection as a route-and-product decision, not simply placing a rubber cover over a line.',
          blocks: [
            { type: 'callout', paragraphs: ['The correct system depends on the actual cable or hose dimensions, number of channels, connector size, surface, pedestrian or vehicle traffic, accessible-route requirement, weather, and the manufacturer’s limits.'] },
            { type: 'columns', columns: [
              { heading: 'Product families', bullets: ['Drop-over protector', 'Hinged modular protector', 'Low-profile pedestrian protector', 'Accessible crossing with ramps', 'Heavy-duty vehicle crossing', 'Hose bridge'] },
              { heading: 'Lead decisions', bullets: ['Approved route and crossing angle', 'Model and load class', 'Channel and service assignment', 'Vehicle and pedestrian controls', 'Accessible-route solution', 'Final acceptance'] }
            ] },
            { type: 'authority', paragraphs: ['A yellow-and-black cover is not automatically vehicle-rated or accessibility-compliant. Read the exact product documentation and follow the route plan.'] }
          ]
        }]
      },
      {
        name: 'Inspect, Sort & Stage',
        lessons: [{
          name: 'Match Parts Before the Route Opens',
          objective: 'Inspect units and cables, confirm compatible parts, and stage the full line without creating a new obstruction.',
          blocks: [
            { heading: 'Inspect the system', bullets: ['Cracked body, damaged hinge or lid, missing connector, warped base, contamination, or an unreadable model label.', 'Mismatched brands, models, channel sizes, caps, connectors, ramps, or corner pieces.', 'Cable damage, connector size, bend limits, and lines too large for the assigned channel.', 'Surface holes, drains, soft ground, slope, standing water, ice, oil, debris, door swings, and other route conflicts.'] },
            { heading: 'Stage the complete line', type: 'sequence', items: ['Confirm the route endpoints and all crossing pieces.', 'Sort straight units, corners, end caps, side ramps, and accessibility pieces.', 'Keep public and vehicle flow closed or controlled during setup.', 'Lay pieces near their final positions without blocking exits or trapping lines.', 'Stop if the parts do not create the route shown in the briefing.'] },
            { type: 'stop', paragraphs: ['Do not mix pieces because they appear close enough. Connector geometry, lids, load ratings, and ramp transitions can differ even when the color looks the same.'] }
          ]
        }]
      },
      {
        name: 'Connect & Load Channels',
        lessons: [{
          name: 'Build the Line Before Closing It',
          objective: 'Connect compatible units, place the assigned lines without forcing them, and close every section fully.',
          blocks: [
            { type: 'sequence', items: ['Place the first unit at the lead’s start point and orientation.', 'Connect only compatible units with the manufacturer’s connector method.', 'Keep the line seated on the accepted surface and maintain the planned crossing angle.', 'Open lids or channels without placing hands under a dropping lid or between moving sections.', 'Place only assigned cables or hoses in their assigned channels.', 'Preserve connector clearance, bend limits, and service separation.', 'Close or seat every lid, insert, ramp, cap, and connector.', 'Walk the complete line and report gaps, rocking, raised lids, exposed lines, or route drift.'] },
            { type: 'callout', paragraphs: ['Never force a connector, plug, breakout, or bend into a channel. A protector that crushes or sharply bends the service line creates a different failure.'] }
          ]
        }]
      },
      {
        name: 'Pedestrians, Vehicles & Access',
        lessons: [{
          name: 'Protect People as Well as Cable',
          objective: 'Recognize walking-surface, traffic, and accessible-route concerns that require lead review.',
          blocks: [
            { type: 'evidence', paragraphs: ['OSHA requires walking-working surfaces to remain clean, orderly, and free of hazards, and requires cords and cables to receive protection from damage in applicable situations. The ADA Standards govern accessible design where they apply, but one product label does not prove the complete installed route works for every user.'] },
            { heading: 'Inspect the route as a user', bullets: ['Can a pedestrian see and approach the transition?', 'Are side ramps, transitions, width, running surface, and edge conditions complete as designed?', 'Does the route block a door, exit, aisle, fire lane, or public queue?', 'Are vehicle speed, axle load, turning, braking, and crossing direction within the product and event plan?', 'Will weather, dirt, or cable movement create rocking, slipping, or an open lid?'] },
            { type: 'stop', paragraphs: ['The learner does not declare a crossing ADA-compliant, vehicle-rated, or safe for every mobility device. Return those decisions to the venue, event, safety, or accessibility authority named in the plan.'] }
          ]
        }]
      },
      {
        name: 'Final Check, Recheck & Strike',
        lessons: [{
          name: 'Inspect the Installed Route as One System',
          objective: 'Support final acceptance, recheck after change, and strike without damaging live services.',
          blocks: [
            { heading: 'Final line check', bullets: ['Correct route, model, and direction.', 'Compatible connections fully seated.', 'Assigned lines in the correct channels with no crush or tight bend.', 'All lids, ramps, caps, and transitions fully closed.', 'No gaps, rocking, sliding, trip edges, blocked doors, or exposed services.', 'Traffic and public controls remain in place until the lead releases the route.'] },
            { type: 'practice', heading: 'Recheck after change', paragraphs: ['Reinspect after vehicle contact, public use, rain, temperature change, maintenance, cable movement, lid opening, or any report of rocking or slipping. A crossing can change after the first inspection.'] },
            { heading: 'Controlled strike', bullets: ['Confirm that the owning department released the lines and identify any service that must remain live.', 'Close traffic and protect the work area.', 'Open sections under direction and remove lines without pulling connectors or exceeding bend limits.', 'Clean, inspect, sort, and stage units by model and part.', 'Report damage instead of returning it to ready stock.'] }
          ]
        }]
      }
    ],
    quiz: [
      { question: 'What information comes before choosing a cable protector?', options: ['Its color', 'Cable size, route, surface, traffic, access needs, and product limits', 'How many units are closest'], answer: 1, coaching: 'Selection starts with the complete crossing and actual service lines, not appearance.' },
      { question: 'A connector will not fit inside the assigned channel. What should you do?', options: ['Force the lid closed', 'Leave the lid partly open', 'Stop and return the mismatch to the lead'], answer: 2, coaching: 'Crushing a connector or leaving a raised lid defeats both cable protection and route control.' },
      { question: 'When can the learner declare an installed route ADA-compliant?', options: ['When the product page says ADA', 'After adding yellow tape', 'Never on the basis of this lesson alone'], answer: 2, coaching: 'Accessibility depends on the complete installed route and the authority responsible for it.' },
      { question: 'A vehicle crosses the protector and one section starts rocking. What comes next?', options: ['Wait for strike', 'Recheck and notify the lead immediately', 'Add a loose mat underneath'], answer: 1, coaching: 'Traffic can change seating and connections. Unapproved shims can create another hazard.' },
      { question: 'During strike, may you pull a live cable out by its connector?', options: ['Only if the route is busy', 'No; confirm release and handle the line under department direction', 'Yes, if the connector has a cap'], answer: 1, coaching: 'Release state and cable handling remain with the owning department. A protector assignment does not transfer cable authority.' }
    ],
    practice: {
      heading: 'Observed route build',
      paragraphs: ['Use an approved product and controlled training route. Record the model, line sizes, surface, traffic class, access plan, observer, and result.'],
      checklist: ['Confirm route, product, channels, and public controls.', 'Inspect and sort every piece.', 'Connect the line without mismatched parts or gaps.', 'Load assigned services without crush or sharp bend.', 'Close and inspect the full crossing.', 'Respond correctly to a route or access conflict.', 'Recheck and complete controlled strike.']
    },
    sources: [
      { label: 'Checkers — Cable protector buying guide', url: 'https://checkers.justrite.com/buying-guide/cable-protectors' },
      { label: 'Checkers — Accessible cable protectors', url: 'https://checkers.justrite.com/cable-protectors/ada-cable-protectors' },
      { label: '2010 ADA Standards for Accessible Design', url: 'https://www.ada.gov/law-and-regs/design-standards/2010-stds/' },
      { label: 'OSHA 1910.22 — Walking-working surfaces', url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.22' },
      { label: 'OSHA 1910.305 — Wiring methods, components, and equipment', url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.305' }
    ]
  }
];
