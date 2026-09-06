function leadCourse(config) {
  const sharedQuiz = [
    {
      question: `What is the defining change when someone becomes the ${config.roleLabel}?`,
      options: ['They may perform every specialist task', `They become accountable for the assigned crew or system outcome within a defined scope`, 'They no longer need to verify other people’s work'],
      answer: 1,
      coaching: 'Lead responsibility expands the span of accountability. It does not erase design, engineering, legal, venue, employer, or specialist authority.'
    },
    config.layerQuestion,
    config.scenarioQuestion,
    {
      question: 'A crew member raises a credible concern while the schedule is slipping. What should the lead do?',
      options: ['Continue until the next planned break', 'Pause the affected work, verify the condition, and escalate when needed', 'Replace the worker without checking the report'],
      answer: 1,
      coaching: 'Safety leadership means responding to the report and confirming controls, even when production pressure is high.'
    },
    {
      question: `What does completing ${config.title} establish?`,
      options: [`Automatic appointment as ${config.roleLabel}`, 'Course knowledge and decision practice within the stated boundaries', 'Every license, certification, and employer authorization connected to the work'],
      answer: 1,
      coaching: 'Course completion stays separate from field experience, appointment, qualification, credentials, and task authorization.'
    }
  ];

  return {
    slug: config.slug,
    title: config.title,
    tier: config.tier || 'Lead Tier',
    tierClass: config.tierClass || 'course-tier-lead',
    status: 'Review Build · Experience Gate',
    packet: config.packet,
    description: config.description,
    boundary: config.boundary,
    modules: [
      {
        name: 'Authority & Scope',
        lessons: [{
          name: config.authorityTitle || 'Map the Responsibility',
          objective: config.authorityObjective,
          blocks: [
            { type: 'callout', paragraphs: [config.coreRule] },
            { type: 'columns', columns: [
              { heading: 'The lead owns', bullets: config.owns },
              { heading: 'The lead does not automatically own', bullets: config.notOwns }
            ] },
            { type: 'authority', paragraphs: [config.authorityNote] }
          ]
        }]
      },
      {
        name: 'Plan the Work',
        lessons: [{
          name: config.planTitle || 'Turn the Approved Plan Into Work',
          objective: config.planObjective,
          blocks: [
            { heading: 'Build the working picture', bullets: config.planInputs },
            { heading: 'Sequence before assigning', type: 'sequence', items: config.sequence },
            { type: 'stop', heading: 'Missing information is a work condition', paragraphs: [config.planStop] }
          ]
        }]
      },
      {
        name: 'Lead the Crew',
        lessons: [{
          name: config.crewTitle || 'Match People to the Work',
          objective: config.crewObjective,
          blocks: [
            { heading: 'Work packages', bullets: config.workPackages },
            { type: 'callout', paragraphs: [config.assignmentRule] },
            { heading: 'Communication loop', bullets: ['Brief the objective, boundary, sequence, hazard controls, stop condition, and expected handoff.', 'Ask the worker to repeat critical parts when the task carries high consequence.', 'Track progress and constraints without taking every task away from the crew.', 'Correct the condition and explain the reason; do not humiliate the worker.', 'Send accurate status upward and dependency information laterally.'] }
          ]
        }]
      },
      {
        name: 'Verify the System',
        lessons: [{
          name: config.verifyTitle || 'Use a Layered Readiness Check',
          objective: config.verifyObjective,
          blocks: [
            { type: 'evidence', paragraphs: [config.verifyModel] },
            { heading: 'Readiness check', bullets: config.verifyChecks },
            { type: 'columns', columns: [
              { heading: 'Accurate status', bullets: ['Ready', 'Ready with a named constraint', 'Waiting on a dependency', 'Blocked', 'Work held for safety or authority'] },
              { heading: 'Weak status', bullets: ['“Probably fine”', '“My part is done”', '“We will fix it during show”', 'Silence about a known workaround', 'Ready without required verification'] }
            ] }
          ]
        }]
      },
      {
        name: 'Adapt & Escalate',
        lessons: [{
          name: config.changeTitle || 'Control Change Without Hiding Risk',
          objective: config.changeObjective,
          blocks: [
            { heading: 'When the work changes', type: 'sequence', items: ['Name what changed and which approved reference no longer matches.', 'Identify affected people, equipment, departments, schedule points, and controls.', 'Decide whether the change stays inside the assigned authority.', 'Pause the affected work when required information, qualification, or control is missing.', 'Get approval from the correct authority and brief the crew again.', 'Verify the changed state and record the new status.'] },
            { heading: 'Course scenarios', bullets: config.changeScenarios },
            { type: 'stop', paragraphs: [config.changeStop] }
          ]
        }]
      }
    ],
    quiz: sharedQuiz,
    practice: {
      heading: 'Experience and review gate',
      paragraphs: [config.practiceStatement],
      checklist: ['Review at least one complete planning package with the appointed department or production authority.', 'Lead a bounded task under observation.', 'Brief crew assignments and authority limits.', 'Use the course verification model on the real system.', 'Handle one change or fault through the correct escalation route.', 'Receive documented feedback from the appointed reviewer.']
    },
    sources: config.sources
  };
}

const departmentLeadCourses = [
  leadCourse({
    slug: 'lead-crew-chief-foundations',
    title: 'Lead / Crew Chief Foundations',
    roleLabel: 'lead or crew chief',
    packet: 'Research Package 24 — Lead / Crew Chief Competency Framework',
    description: 'Move from personal task competence to bounded responsibility for planning, assignments, verification, safety leadership, communication, and crew outcome.',
    boundary: 'A lead has authority only inside the assigned crew, system, or work package. Crew authority, technical authority, design authority, employer authority, union authority, and safety authority may belong to different people.',
    coreRule: '<strong>A lead converts production intent into organized crew action and verifies the assigned outcome.</strong> The transition is not “more years means unlimited authority.” It is a wider span of accountability inside a named scope.',
    owns: ['Understand the assigned outcome', 'Break work into tasks and dependencies', 'Match work to capability and authorization', 'Monitor safety, quality, and progress', 'Verify completion and communicate status', 'Escalate constraints and changes'],
    notOwns: ['Every technical specialty', 'Creative or engineering intent', 'Hiring, discipline, or union functions unless assigned', 'Legal authority created by a title alone', 'Changes outside the work package'],
    authorityNote: 'Name the authority dimensions before work begins. A lighting crew chief may direct hands without becoming the rigger, electrician, designer, steward, or employer representative.',
    authorityObjective: 'Distinguish crew, technical, safety, design, employer, and union authority in a real production structure.',
    planObjective: 'Translate an approved objective into tasks, order, dependencies, resources, and verification points.',
    planInputs: ['Approved plan, plot, drawing, schedule, scope, or work order', 'Crew roster, demonstrated capability, and task authorization', 'Equipment and material availability', 'Department interfaces and venue constraints', 'Hazards and required controls', 'Definition of ready and required signoffs'],
    sequence: ['State the outcome and fixed constraints.', 'List tasks and required skills.', 'Mark dependencies and steps that can run in parallel.', 'Place verification before dependent work.', 'Assign people and resources.', 'Brief the plan and start only when controls and authority are clear.'],
    planStop: 'When the objective, approved reference, qualified personnel, or acceptance authority is missing, the lead raises the gap. A rushed guess is not a plan.',
    crewObjective: 'Assign, communicate, coach, and correct work according to capability, risk, and authorization.',
    workPackages: ['Unload and stage', 'Routine assembly or cable work', 'Specialist setup', 'Inspection or testing', 'Department handoff', 'Strike, inventory, and closeout'],
    assignmentRule: '<strong>Do not assign the hardest task to whoever is standing closest.</strong> Match consequence and complexity to demonstrated competence, then add supervision where the worker is still learning.',
    verifyObjective: 'Confirm that the whole assigned scope meets the approved reference instead of checking only personal work.',
    verifyModel: 'Verification differs by department, but the logic stays stable: compare the built state with an approved reference, use the qualified person for technical checks, resolve or document discrepancies, and report an accurate readiness state.',
    verifyChecks: ['All assignments are complete or visibly tracked.', 'Work matches the plan and current change record.', 'Required inspections and tests have named owners and results.', 'Unresolved faults, workarounds, and access limits are visible.', 'Dependent departments receive a clear handoff.', 'The person with acceptance authority releases the scope.'],
    changeObjective: 'Separate changes the lead may control from changes that need design, production, venue, employer, or specialist approval.',
    changeScenarios: ['A missing part changes the sequence.', 'Production requests a location change.', 'A worker reports damaged equipment.', 'Another department blocks the planned path.', 'The schedule compresses while a required check remains open.'],
    changeStop: 'Strong leadership means controlled adaptation inside authority. It never means improvisation at any cost.',
    layerQuestion: { question: 'A crew chief may assign workers but cannot change the designer’s approved intent. What does this show?', options: ['Leadership authority has separate dimensions', 'The crew chief has no authority', 'Design authority always belongs to the employer'], answer: 0, coaching: 'Crew authority and design authority can sit with different people on the same call.' },
    scenarioQuestion: { question: 'A task requires competence nobody on the current crew has demonstrated. What should the lead do?', options: ['Assign the most confident person', 'Stop that task and obtain qualified help or revise the approved plan', 'Let two beginners do it together'], answer: 1, coaching: 'Delegation includes knowing who should not receive an assignment without training, authorization, or added supervision.' },
    practiceStatement: 'Lead readiness requires consistent technical execution, real load-in/show/load-out experience, accurate reporting, fault recognition, plan literacy, judgment under pressure, and supervised experience directing a bounded task. The course organizes that transition; it does not replace it.',
    sources: [
      { label: 'PRG Crew Portal — Department crew-chief role models', url: 'https://crew.prg.com/en/' },
      { label: 'OSHA — Safety Management: Education and Training', url: 'https://www.osha.gov/safety-management/education-training' },
      { label: 'ETCP — Entertainment Electrician certification', url: 'https://etcp.esta.org/certify/certify_electrical.html', note: 'Credential boundary example.' },
      { label: 'ETCP — Scope of Work', url: 'https://etcp.esta.org/certify/scopeofwork.html' }
    ]
  }),
  leadCourse({
    slug: 'lead-lighting',
    title: 'Lighting Lead: Console & Rig Authority',
    roleLabel: 'lighting lead',
    packet: 'Research Package 25 — Lighting Lead: Console & Rig Authority',
    description: 'Direct implementation of an approved lighting package, protect the show file, verify system layers, and coordinate designers, programmers, electricians, and riggers.',
    boundary: 'The lighting lead owns crew execution and lighting-system readiness within assigned scope. Design changes, qualified electrical work, rigging decisions, and product service remain with their appointed authorities.',
    coreRule: '<strong>The lighting lead turns the approved plot into a functioning, verified lighting system.</strong> That work joins physical placement, power, data, patch, console state, and focus without turning the lead into every specialist touching the rig.',
    owns: ['Interpret the approved lighting package', 'Deploy and brief the lighting crew', 'Protect fixture, data, patch, and show-file integrity', 'Coordinate system checks and fault isolation', 'Report system readiness and constraints'],
    notOwns: ['Creative redesign by default', 'Rigging design or structural approval', 'Electrical work outside qualification', 'Unapproved firmware or manufacturer service', 'Every console programming decision'],
    authorityNote: 'On a small show, one person may fill several functions. Still name the functions: designer, programmer or operator, lighting lead or head electrician, qualified electrical role, and rigger.',
    authorityObjective: 'Map lighting implementation authority across design, console, crew, power, and rigging roles.',
    planObjective: 'Use the plot, fixture schedule, patch, power/data plan, accessories, labor sequence, and department dependencies to organize work.',
    planInputs: ['Current plot and fixture schedule', 'Positions, accessories, mode, address, and patch data', 'Approved power and data paths', 'Authoritative show file and backup process', 'Rigging, staging, video, audio, and venue dependencies', 'Focus, test, and handoff milestones'],
    sequence: ['Confirm the current documents and change state.', 'Break work into stage, prep, hang, cable, address, test, focus, and strike packages.', 'Match tasks to capability and electrical or rigging boundaries.', 'Place patch and system verification before focus or programming dependencies.', 'Protect the authoritative show file and record approved changes.', 'Report system status to production and the operator or designer.'],
    planStop: 'When the plot, mode, patch, power source, rigging interface, or change approval conflicts, stop the affected work and resolve the controlling reference.',
    crewObjective: 'Match lighting tasks to worker competence while preserving separate programming, electrical, rigging, and design roles.',
    workPackages: ['Unload and fixture prep', 'Hang or position under the approved method', 'Power and data runs', 'Address and patch verification', 'Console or operator support', 'Focus support, system check, and strike'],
    assignmentRule: 'A worker who can carry, prep, or cable a fixture is not automatically authorized to change patch, alter electrical distribution, operate a console, focus without direction, or change suspended support.',
    verifyObjective: 'Trace a lighting fault and readiness check across physical, power, data, address, patch, show-file, and programmed-command layers.',
    verifyModel: 'Use a diagnostic ladder: define scope; verify power; check physical and data paths; compare fixture address and mode with patch; verify network or protocol path; confirm console patch; confirm programmed command; isolate fixture fault; escalate electrical, rigging, network, service, or design issues.',
    verifyChecks: ['Fixture and accessory match the plan.', 'The crew confirms position and secondary retention under the approved procedure.', 'Power and data follow the approved plan.', 'Address, mode, universe, and patch agree.', 'The lead names the authoritative show file and backup state.', 'The system test passes, or the lead records and assigns each discrepancy.'],
    changeObjective: 'Protect show state and route changes to the person who owns their creative, electrical, rigging, or configuration effect.',
    changeScenarios: ['A fixture is correct but its mode conflicts with the patch.', 'Someone proposes cleaning up a touring patch.', 'A position conflicts with rigging or scenery.', 'A fixture appears crooked after focus.', 'The only available power path differs from the approved plan.'],
    changeStop: 'Do not solve one symptom by silently changing the authoritative show file, fixture mode, electrical plan, or designer intent.',
    layerQuestion: { question: 'One fixture has power and data, but its physical mode does not match the console patch. Which layer should the lead address?', options: ['Address and configuration agreement', 'Rigging design', 'Audience mix'], answer: 0, coaching: 'The lead isolates the mismatch rather than changing unrelated system layers.' },
    scenarioQuestion: { question: 'A fixture appears crooked after the lighting department focused it. What should a stagehand or lead do?', options: ['Straighten it immediately', 'Confirm intent with the lighting authority before changing it', 'Ask rigging to move the truss'], answer: 1, coaching: 'A focused fixture may look unusual by design. Preserve approved show state until the responsible lighting role directs a change.' },
    practiceStatement: 'The reviewer should be the appointed lighting department head, crew chief, or equivalent for a real or controlled package. Console, electrical, and rigging tasks require their own qualified reviewers.',
    sources: [
      { label: 'PRG Crew Portal — Lighting Crew Chief', url: 'https://crew.prg.com/en/' },
      { label: 'HARMAN — Meet Your Lighting Team', url: 'https://pro.harman.com/insights/harman-pro/meet-your-lighting-team/' },
      { label: 'grandMA3 — Show-file backup', url: 'https://help.malighting.com/grandMA3/2.2/HTML/sfh_backup.html' },
      { label: 'grandMA3 — Patch and fixture setup', url: 'https://help.malighting.com/grandMA3/2.4/HTML/patch.html' },
      { label: 'ETC Eos — About show files', url: 'https://www.etcconnect.com/WebDocs/Controls/EosFamilyOnlineHelp/en/Content/05_Show_Files/About_Show_Files.htm' },
      { label: 'ETCP — Electrical scope of work', url: 'https://etcp.esta.org/certify/scopeofwork.html' }
    ]
  }),
  leadCourse({
    slug: 'lead-audio',
    title: 'Audio Lead: Signal Path & Troubleshooting Authority',
    roleLabel: 'audio lead',
    packet: 'Research Package 26 — Audio Lead: Signal Path & Troubleshooting Authority',
    description: 'Coordinate the audio crew and specialists, map physical and logical signal paths, preserve show state, isolate fault domains, and report readiness.',
    boundary: 'The audio lead coordinates the department but does not automatically replace the FOH engineer, monitor engineer, RF coordinator, audio-network technician, PA systems technician, intercom technician, electrician, or backline technician.',
    coreRule: '<strong>The audio lead owns the complete working picture.</strong> A technician asks where one signal failed. The lead also asks how large the failure domain is, who owns the layer, what else a change could affect, and what production needs to know.',
    owns: ['Map physical, logical, and ownership layers', 'Deploy and coordinate audio work packages', 'Protect routing, scenes, and show-state changes', 'Classify fault scope and direct verification', 'Track specialist handoffs and system readiness'],
    notOwns: ['Every FOH or monitor mix decision', 'Advanced RF coordination by default', 'Network design or switch configuration by default', 'PA alignment or calibration without that role', 'Electrical tasks outside qualification'],
    authorityNote: 'Small shows combine roles; large shows separate them. Name FOH, monitors, RF, system/PA, network, intercom, stage patch, recording, and broadcast ownership before troubleshooting.',
    authorityObjective: 'Separate department coordination from specialist ownership across a modern live-audio system.',
    planObjective: 'Translate the audio system intent into physical build, patch, routing, specialist, test, and handoff work packages.',
    planInputs: ['Input, output, and equipment list', 'Physical patch and stage I/O plan', 'Console, scene, and logical-routing state', 'FOH, monitor, PA, RF, network, intercom, and feed ownership', 'Cable, power, stage, rigging, and venue dependencies', 'Line check, soundcheck, show, and strike milestones'],
    sequence: ['Map sources through every required destination.', 'Separate physical connections from logical routes.', 'Name the owner of each specialist domain.', 'Assign build and test work by competence.', 'Place verification at each handoff.', 'Protect the known-good show state and record changes.'],
    planStop: 'When ownership, patch, show-file authority, RF coordination, network configuration, power, or PA-system responsibility is unclear, resolve it before the crew changes the system.',
    crewObjective: 'Assign stage patch, cable, PA assembly, RF, network, console, intercom, and strike tasks according to actual competence.',
    workPackages: ['Unload and speaker or rack staging', 'Stage patch, microphones, stands, and DIs', 'FOH and monitor worlds', 'RF racks and antenna paths', 'Network endpoints and switches', 'Intercom, recording or broadcast feeds, and strike'],
    assignmentRule: 'A worker who can run XLR and place stands is not automatically qualified to change Dante routes, coordinate RF, tune the PA, alter console routing, or repair equipment.',
    verifyObjective: 'Classify a symptom by scope, layer, and owner before changing the system.',
    verifyModel: 'Map three layers: physical devices and connections; logical patch, buses, matrices, subscriptions, scenes, and output routes; operational ownership across FOH, monitors, RF, PA, network, intercom, and feeds.',
    verifyChecks: ['The crew confirms every expected device and approved power path.', 'Physical patch and logical routing agree.', 'Gain and mute state support useful verification.', 'FOH and monitor paths reach their owners.', 'PA, RF, network, and intercom checks have named results.', 'The lead tracks show state and every temporary diagnostic change.'],
    changeObjective: 'Change one controlled variable where practical, verify the result, restore temporary tests, and hand specialist faults to their owners.',
    changeScenarios: ['RF is stable but receiver audio never reaches the console.', 'One stage box group fails while other inputs remain healthy.', 'A networked endpoint appears but has the wrong subscription.', 'A temporary scene change fixes FOH but disrupts a broadcast feed.', 'A system-wide symptom appears after a patch update.'],
    changeStop: 'Do not change global state to chase a local fault, or silently repair one path by breaking another destination.',
    layerQuestion: { question: 'A wireless receiver shows stable RF, but its console channel has no input. What should the lead separate first?', options: ['RF link from the receiver-audio and console path', 'PA alignment from lighting data', 'Audience response from stage volume'], answer: 0, coaching: 'Stable RF narrows the search but does not prove the receiver output, physical patch, logical patch, gain, or routing.' },
    scenarioQuestion: { question: 'Only one output zone has failed. What is the strongest first classification?', options: ['A system-wide console failure', 'A fault domain local to that output path until evidence expands the scope', 'An RF coordination problem'], answer: 1, coaching: 'Scope the failure before touching global settings.' },
    practiceStatement: 'Review should include the appointed audio lead and, where applicable, the FOH, monitor, RF, network, PA, and intercom owners. One lead observation cannot stand in for every specialist competence.',
    sources: [
      { label: 'PRG Crew Portal — Audio Crew Chief and specialist roles', url: 'https://crew.prg.com/en/' },
      { label: 'Yamaha — Gain staging', url: 'https://hub.yamaha.com/proaudio/livesound/gain-staging/' },
      { label: 'Shure — Wireless Workbench quick start', url: 'https://www.shure.com/en-US/docs/quickstart/WIRELESS-WORKBENCH' },
      { label: 'Audinate — Dante training levels', url: 'https://www.audinate.com/press/audinate-launches-completely-revamped-dante-training-program/' },
      { label: 'OSHA — Safety Management: Education and Training', url: 'https://www.osha.gov/safety-management/education-training' }
    ]
  }),
  leadCourse({
    slug: 'lead-video',
    title: 'Video Lead: Wall Integrity & Display Authority',
    roleLabel: 'video lead',
    packet: 'Research Package 27 — Video Lead: Wall Integrity & Display Authority',
    description: 'Direct an LED/video crew across mechanical, power, data, signal, mapping, and image layers while protecting product procedures and configuration state.',
    boundary: 'The video lead owns technical display integrity within the assigned system. Structural support, rigging, electrical work, advanced calibration, firmware, manufacturer service, and creative approval remain with their responsible authorities.',
    coreRule: '<strong>The video lead protects the wall as both a physical assembly and a display system.</strong> The lead identifies which integrity layer failed before sending workers toward hardware or configuration.',
    owns: ['Interpret the wall and signal plan', 'Brief model-specific handling and build work', 'Coordinate power, data, processor, mapping, and image checks', 'Protect known-good configuration and visual state', 'Assign fault finding and communicate readiness'],
    notOwns: ['Structural engineering or rigging design', 'Electrical authority by title', 'Advanced camera calibration by default', 'Unapproved firmware or receiver-card changes', 'Creative content approval unless assigned'],
    authorityNote: 'A person may lead the video crew while a rigger owns suspension, an electrician owns power, a processor technician owns configuration, and a content or broadcast lead owns source intent.',
    authorityObjective: 'Map video-lead responsibility across mechanical, power, control, signal, image, and structural interfaces.',
    planObjective: 'Turn the approved LED/video package into product-specific build, cable, configuration, QC, and handoff work.',
    planInputs: ['Wall plot, product family, panel orientation, and accessories', 'Approved flown or ground-stack support interface', 'Power and data distribution plan', 'Processor, source, routing, and mapping plan', 'Known-good firmware and configuration state', 'Test content, visual acceptance, service, and handoff process'],
    sequence: ['Confirm the exact panel and support system.', 'Brief product-specific locks, orientation, handling, and stop conditions.', 'Divide mechanical build, power/data, processing, mapping, and QC work.', 'Verify each layer before dependent work.', 'Use known test content for continuity and image checks.', 'Record defects, workarounds, and final handoff status.'],
    planStop: 'Stop for product mismatch, missing support parts, unapproved wall size or height, unclear ballast or wind plan, configuration conflict, or a procedure that does not match the exact system.',
    crewObjective: 'Assign panel handling, locking, cabling, processing, service, mapping, calibration, and QC according to demonstrated competence.',
    workPackages: ['Unload and cart staging', 'Panel handling and model-specific assembly', 'Power and data cabling', 'Processor and control setup', 'Mapping and configuration', 'Module service, visual QC, and strike'],
    assignmentRule: 'A worker who can carry and lock panels under direction is not automatically qualified to change receiver-card files, processor settings, firmware, calibration, or structural support.',
    verifyObjective: 'Use a five-layer check to localize mechanical, power, data/control, video-signal, mapping, and image-state faults.',
    verifyModel: 'First name the layer: mechanical display surface; power; data and control; video signal; image state. Then direct the qualified owner to verify that layer without disturbing known-good parts of the system.',
    verifyChecks: ['The crew confirms product, orientation, accessories, and approved support interface.', 'The crew verifies model-specific connections and locks.', 'Power and data routes match the plan.', 'Processor sees the intended system and mapping.', 'Known test content verifies full-canvas continuity.', 'The lead assigns or reports failed modules, color or brightness mismatches, seams, and limitations.'],
    changeObjective: 'Preserve product procedure and known-good configuration when the wall, source, mapping, module, weather, or support plan changes.',
    changeScenarios: ['A powered cabinet shows no control data.', 'Image appears in the wrong panel order.', 'A replaced module has a color mismatch.', 'Production requests a taller ground stack.', 'Someone proposes a firmware update during show day.'],
    changeStop: 'Do not use a live show system as an experiment. Back up, obtain approval, make one controlled change, verify, and restore temporary test state.',
    layerQuestion: { question: 'The crew confirms wall power and correct mapping, but one replacement module looks different in color. Which layer most likely caused the symptom?', options: ['Image or calibration state', 'Rigging point selection', 'Audience barrier layout'], answer: 0, coaching: 'A visual mismatch after module service points toward image or calibration state, with product-specific recovery and specialist limits.' },
    scenarioQuestion: { question: 'Production asks to increase the height of a ground-stacked wall. What should the video lead do?', options: ['Add panels if enough cable remains', 'Return the configuration change to the approved structural, manufacturer, and production authorities', 'Ask the newest hand to add ballast'], answer: 1, coaching: 'Wall height affects support, ballast, wind, and product limits. Schedule pressure cannot authorize the change.' },
    practiceStatement: 'Review needs an appointed video lead using the exact wall, processor, and support package. Rigging, structural, electrical, calibration, and manufacturer-service decisions require their own competent reviewers.',
    sources: [
      { label: 'PRG Crew Portal — LED/video progression', url: 'https://crew.prg.com/en/' },
      { label: 'ROE Visual — Product and support FAQ', url: 'https://www.roevisual.com/us-en/knowledge-and-support/faq-overview-page' },
      { label: 'ROE Visual — Module calibration recovery', url: 'https://www.roevisual.com/us-en/knowledge-and-support/faq-overview-page/roe-visual-faq.-how-do-i-calibrate-the-panel-after-changing-the-modules' },
      { label: 'NovaStar — LED screen calibration certification', url: 'https://nce.novastar.tech/Certificate/detail.html?catid=1&id=5' },
      { label: 'OSHA — Safety Management: Education and Training', url: 'https://www.osha.gov/safety-management/education-training' }
    ]
  }),
  leadCourse({
    slug: 'lead-staging-carpentry',
    title: 'Staging / Carpentry Lead: Build Authority',
    roleLabel: 'staging or carpentry lead',
    packet: 'Research Package 28 — Staging / Carpentry Lead: Build Authority & Safety Inspection',
    description: 'Direct execution of an approved build, organize labor and material, protect sequence, verify against the reference, and stop changes that enter structural authority.',
    boundary: 'The staging/carpentry lead executes and verifies the approved build within scope. Structural design, load approval, engineering, code interpretation, manufacturer exceptions, ground-bearing decisions, and altered configurations remain with their appointed authorities.',
    coreRule: '<strong>The lead owns execution of the approved build, not free-form structural judgment.</strong> Read the reference, organize the work, verify the components and assembly, and stop when the field state no longer matches.',
    owns: ['Interpret the approved build package', 'Organize labor, material, work zones, and sequence', 'Control incomplete-build access and interfaces', 'Verify visible completion against the plan and product procedure', 'Report ready, constrained, blocked, or held status'],
    notOwns: ['Structural design or load calculations', 'Unapproved changes to engineered layouts', 'Hardware substitutions or field modification', 'Code or occupant-capacity approval', 'Weather thresholds invented on site'],
    authorityNote: 'The lead can identify a structural problem and hold the work without becoming the engineer of record, manufacturer representative, venue authority, or qualified person for every standard.',
    authorityObjective: 'Separate crew-execution decisions from structural, manufacturer, venue, code, and engineering decisions.',
    planObjective: 'Use layouts, drawings, component lists, product instructions, site conditions, and department dependencies to stage the build.',
    planInputs: ['Deck, riser, stair, rail, scenic, and access drawings', 'Exact product families and current manufacturer procedures', 'Hardware and material list', 'Work zones, handling routes, and incomplete-build controls', 'Rigging, lighting, audio, video, backline, FOH, and venue interfaces', 'Outdoor operations and weather plan when applicable'],
    sequence: ['Confirm the approved drawing and product family.', 'Inventory components and flag missing or mismatched parts.', 'Divide logical zones and handling paths.', 'Order support, deck, access, rail, scenic, and dependent work as the plan requires.', 'Place checks before occupancy or equipment loading.', 'Handoff only after discrepancies have owners and status.'],
    planStop: 'Missing drawings, product instructions, required braces, damaged components, changed ground conditions, or a requested layout change require resolution before dependent work continues.',
    crewObjective: 'Assign handling, assembly, hardware, access, verification, and strike work by capability while controlling incomplete areas.',
    workPackages: ['Unload and component staging', 'Base, support, and deck assembly under procedure', 'Stairs, rails, access, and edge controls', 'Scenic or carpentry placement', 'Inspection handoff and dependent department release', 'Strike, inspection, and return'],
    assignmentRule: 'The lead prevents workers from inventing hardware, drilling, cutting, welding, removing braces, or loading incomplete sections because a different part appears to fit.',
    verifyObjective: 'Compare the assembled state with the approved reference and route technical approval to the correct authority.',
    verifyModel: 'Verification means checking the correct product family, visible condition, required components, complete connections, assigned bracing and access elements, controlled work area, and documented handoff. It does not mean inventing structural acceptance criteria.',
    verifyChecks: ['The lead confirms the correct system and configuration.', 'The lead isolates obvious damage or deformation.', 'Required components and hardware match the reference.', 'The crew verifies connections, support, access, rails, and bracing against the approved procedure.', 'The lead controls every incomplete area.', 'The required inspector or authority completes formal acceptance.'],
    changeObjective: 'Respond to altered layouts, damaged parts, weather, ground conditions, and production pressure without improvising structural solutions.',
    changeScenarios: ['A required brace is missing but the deck feels stable.', 'Production wants the stair moved from the drawing.', 'Another department wants to load an unverified section.', 'A bent component is the only spare.', 'An outdoor operations plan reaches a weather trigger.'],
    changeStop: 'Do not continue because the system “feels solid.” Stop at missing components, unapproved substitutions, structural change, unexpected site conditions, or a triggered weather plan.',
    layerQuestion: { question: 'A different hardware item fits the connection but is not listed for the system. What does the lead do?', options: ['Use it only in a low section', 'Stop and obtain the approved component or authority decision', 'Use two of them'], answer: 1, coaching: 'Physical fit does not establish structural suitability or manufacturer approval.' },
    scenarioQuestion: { question: 'Another department wants to place equipment on a deck zone that has not completed its check. What status should the lead give?', options: ['Ready because the deck surface is down', 'Blocked or waiting on verification', 'Ready with no comment'], answer: 1, coaching: 'Dependent work should not load or occupy an incomplete section without the required release.' },
    practiceStatement: 'Review should occur on a real or controlled approved build with the appointed staging lead and the required manufacturer, venue, engineer, inspector, or other authority represented for decisions outside execution scope.',
    sources: [
      { label: 'ESTA — Published technical standards', url: 'https://tsp.esta.org/tsp/documents/published_docs.php' },
      { label: 'ESTA — Rigging Working Group', url: 'https://tsp.esta.org/tsp/working_groups/RIG/rig.html' },
      { label: 'OSHA — Safety Management: Education and Training', url: 'https://www.osha.gov/safety-management/education-training' },
      { label: 'OSHA — Hazard Identification and Assessment', url: 'https://www.osha.gov/safety-management/hazard-identification' }
    ]
  }),
  leadCourse({
    slug: 'lead-rigging',
    title: 'Rigging Lead: Verification & Scope Control',
    roleLabel: 'rigging lead',
    packet: 'Research Package 29 — Rigging Lead: Load Calculations & Safety Verification',
    description: 'Study the leadership, qualification, documentation, verification, communication, and escalation structure around professional entertainment rigging.',
    boundary: 'This decision course does not teach a novice to calculate, select, attach, inspect, or operate an overhead rigging system. It grants no ETCP credential, engineering authority, employer qualification, overhead-work authorization, or competent-person designation.',
    coreRule: '<strong>A rigging lead is accountable for the qualified planning, crew assignment, verification process, communication structure, and movement release inside an authorized scope.</strong> Online reading cannot create the underlying rigging competence.',
    owns: ['Confirm the approved rigging package and responsible roles', 'Assign work only to qualified or supervised people', 'Control communication and work zones', 'Confirm required technical checks are complete', 'Hold movement when information or verification is missing'],
    notOwns: ['Engineering by title alone', 'Unsupervised online qualification', 'Hardware selection or load calculations without competence', 'Venue structural decisions outside authority', 'Movement without the responsible release'],
    authorityNote: 'ETCP targets experienced riggers and uses formal job analysis. Crew Blueprint can teach the reasoning architecture around the work, but practical rigging education, supervised experience, employer authorization, and applicable credentials remain necessary.',
    authorityObjective: 'Explain why rigging leadership requires underlying technical competence and a clearly bounded professional authority map.',
    planObjective: 'Identify the information, qualified roles, constraints, and release points expected in a professional rigging plan.',
    planInputs: ['Approved show and venue drawings', 'Defined suspended loads and intended load path', 'Engineering or manufacturer documents where required', 'Venue limitations and obstructions', 'Qualified personnel, communication plan, and controlled zones', 'Inspection, pre-movement, movement, and handoff authority'],
    sequence: ['Confirm the approved package and revision.', 'Identify each responsible technical and engineering role.', 'Check that the crew matches the required qualifications.', 'Resolve document conflict, missing information, and equipment questions.', 'Confirm communication and controlled areas.', 'Obtain the required pre-movement release; never infer it from schedule.'],
    planStop: 'No approved reference, conflicting load information, missing qualified personnel, questionable equipment, or unclear movement authority means the affected operation pauses.',
    crewObjective: 'Control assignments and communications without turning general stagehand experience into overhead-rigging qualification.',
    workPackages: ['Planning and documentation review', 'Qualified installation tasks', 'Ground support within assigned boundaries', 'Inspection by responsible personnel', 'Communication and controlled-zone management', 'Pre-movement release and post-operation status'],
    assignmentRule: 'Ground support or trainee work stays inside the explicit supervised scope. No one receives a safety-critical rigging task because the schedule is late or the person appears confident.',
    verifyObjective: 'Describe the verification architecture required before an overhead system moves without attempting technical inspection through pictures alone.',
    verifyModel: 'The lead confirms the approved reference exists, designated qualified personnel complete their checks, discrepancies close or remain held, communications and controlled zones are in place, and the responsible authority releases movement.',
    verifyChecks: ['The lead holds the current plan and load information.', 'The lead assigns every required qualified person.', 'Responsible personnel inspect the equipment and assembled system.', 'Responsible authorities resolve discrepancies and document conflicts.', 'Communication, controls, and exclusion areas remain active.', 'The named authority gives movement release.'],
    changeObjective: 'Hold work and route changed loads, documents, locations, equipment condition, venue conflicts, and department requests to the qualified authority.',
    changeScenarios: ['Show weight changes after plan approval.', 'Two documents disagree.', 'A required qualified person is absent.', 'A crew member questions equipment condition.', 'Another department asks to alter a suspended system.'],
    changeStop: 'Schedule pressure never substitutes for load information, qualification, inspection, engineering, communication, or movement authorization.',
    layerQuestion: { question: 'Two approved-looking documents show different load information. What does the rigging lead do?', options: ['Use the lower number', 'Hold the affected work until the controlling authority resolves the conflict', 'Average the numbers'], answer: 1, coaching: 'Document conflict changes the basis of the plan and requires resolution by the responsible authority.' },
    scenarioQuestion: { question: 'Production is late and the person assigned to a critical task lacks the required competence. What is the correct decision?', options: ['Pair them with another novice', 'Hold that task until qualified supervision or personnel are available', 'Proceed slowly'], answer: 1, coaching: 'Qualification and supervision are hard gates in safety-critical overhead work.' },
    practiceStatement: 'This course has no novice physical rigging practical. Review must occur through an established employer, apprenticeship, training provider, or qualified rigging program with the correct equipment, supervision, and competency process.',
    sources: [
      { label: 'ETCP — Arena Rigger examination content', url: 'https://etcp.esta.org/certify/examination_rigger_arena.html' },
      { label: 'ETCP — Theatre Rigger examination content', url: 'https://etcp.esta.org/certify/examination_rigger_theatre.html' },
      { label: 'ETCP — Rigger certification overview', url: 'https://etcp.esta.org/certify/certify_rigger.html' },
      { label: 'ESTA — Rigging Working Group standards', url: 'https://tsp.esta.org/tsp/working_groups/RIG/rig.html' },
      { label: 'OSHA — Hazard Identification and Assessment', url: 'https://www.osha.gov/safety-management/hazard-identification' }
    ]
  }),
  leadCourse({
    slug: 'lead-electrics',
    title: 'Electrics Lead: Power Authority & Compliance',
    roleLabel: 'electrics lead',
    packet: 'Research Package 30 — Electrics Lead: Power Authority & Code Compliance',
    description: 'Coordinate entertainment power work within demonstrated qualification, assign by competence, confirm required checks, and preserve venue, code, and legal authority boundaries.',
    boundary: 'Title alone grants no electrical authority. Local law, venue rules, employer policy, licensure, ETCP scope, equipment listings, and the actual task determine who may install, test, energize, modify, or approve electrical work.',
    coreRule: '<strong>The electrics lead coordinates and verifies the approved power system inside demonstrated qualification.</strong> The role is more than knowing where a cable goes, but it never overrides law, code, venue, manufacturer, or electrical authority.',
    owns: ['Understand the approved power plan within qualified scope', 'Match electrical and support tasks to competence', 'Coordinate installation, protection, access, and department interfaces', 'Confirm required inspection and testing by qualified people', 'Hold unsafe or uncertain systems and report readiness'],
    notOwns: ['Permanent building wiring by default', 'Energized work outside qualification and procedure', 'Bypassing protective devices or grounding', 'Unlisted substitutions or rating exceptions', 'Local code or AHJ decisions by title'],
    authorityNote: 'ETCP separates the broader Entertainment Electrician scope from the narrower Portable Power Distribution Technician scope. A venue electrician, licensed electrician, engineer, employer, or authority having jurisdiction may control additional decisions.',
    authorityObjective: 'Map electrics-lead responsibilities across EE, PPDT, venue, licensed, employer, and inspection authority.',
    planObjective: 'Read power-system intent at a management level and identify the qualified role for each installation, testing, and approval task.',
    planInputs: ['Approved source and distribution hierarchy', 'Intended loads, destinations, and total requirements', 'Portable distribution and cable-management plan', 'Environmental and venue constraints', 'Equipment ratings, listings, instructions, and applicable standards', 'Qualified inspection, testing, energization, and handoff roles'],
    sequence: ['Confirm source, distribution layers, destinations, and current load plan.', 'Identify missing or conflicting requirements.', 'Assign support, installation, testing, and authority tasks by qualification.', 'Coordinate cable routes and department handoffs.', 'Confirm required checks before energization or use.', 'Communicate exact readiness, constraints, and prohibited changes.'],
    planStop: 'Unexpected source limits, changed load, damaged equipment, water exposure, missing qualified people, or pressure to energize before verification require a hold and escalation.',
    crewObjective: 'Separate general-stagehand support, trained electrics work, portable-power work, venue work, licensed work, and other qualified tasks.',
    workPackages: ['Unload and stage approved distribution equipment', 'Cable route and protection support', 'Qualified assembly and connection', 'Measurement and test by authorized people', 'Department load handoffs', 'Energization, monitoring, de-energization, and strike under authority'],
    assignmentRule: 'Electrical work is not casual delegation. The lead identifies who may perform each task under the employer, venue, law, equipment, and qualification framework.',
    verifyObjective: 'Confirm the system matches the approved plan and that qualified people complete required checks before the lead declares readiness.',
    verifyModel: 'Lead verification at this level means checking the plan, equipment suitability, task authority, test ownership, discrepancy closure, and handoff record. It does not provide novice live-power procedure.',
    verifyChecks: ['System matches the current approved plan.', 'Equipment and environment fit the assigned use.', 'Only authorized people perform restricted tasks.', 'Required inspections, measurements, and tests have named results.', 'Code, venue, and source constraints have responsible confirmation.', 'The qualified electrical authority isolates unsafe or uncertain conditions and reports them as visible and tracked.'],
    changeObjective: 'Route load additions, source conflicts, damage, weather or water exposure, and last-minute changes through the qualified electrical authority.',
    changeScenarios: ['A department adds an unplanned load.', 'The venue source differs from the advance.', 'Distribution equipment arrives damaged.', 'Water reaches a cable or connection area.', 'Production requests energization before checks finish.'],
    changeStop: 'Never bypass protection, grounding, ratings, venue controls, inspection, testing, or required qualification to save time.',
    layerQuestion: { question: 'A lighting lead requests an unplanned power load after the team completes the approved plan. What should the electrics lead do?', options: ['Connect it if a receptacle is open', 'Return the change to the qualified load-planning and source authority before connection', 'Split the load across any available cable'], answer: 1, coaching: 'An open connection point does not prove source, distribution, protection, or capacity approval.' },
    scenarioQuestion: { question: 'Production asks the crew to energize before required checks are complete. What status is accurate?', options: ['Ready with a small delay', 'Blocked or work held pending verification', 'Ready because equipment is connected'], answer: 1, coaching: 'Connection does not equal electrical readiness. The required checks are part of the release.' },
    practiceStatement: 'Hands-on review belongs inside qualified entertainment-electrical training and employer procedures. Any real distribution, measurement, energization, or fault work requires the appropriate authorized reviewer and conditions.',
    sources: [
      { label: 'ETCP — EE and PPDT scope of work', url: 'https://etcp.esta.org/certify/scopeofwork.html' },
      { label: 'ETCP — Entertainment Electrician examination content', url: 'https://etcp.esta.org/certify/examination_electrical.html' },
      { label: 'ETCP — PPDT examination content', url: 'https://etcp.esta.org/certify/examination_ppdt.html' },
      { label: 'ETCP — Entertainment Electrician certification', url: 'https://etcp.esta.org/certify/certify_electrical.html' },
      { label: 'OSHA — Safety Management: Education and Training', url: 'https://www.osha.gov/safety-management/education-training' }
    ]
  })
];

const predictiveHazards = {
  slug: 'supervisor-predictive-hazard-recognition',
  title: 'Predictive Hazard Recognition for Supervisors',
  tier: 'Supervisor Tier',
  tierClass: 'course-tier-supervisor',
  status: 'Review Build · Employer Safety Gate',
  packet: 'Research Package 31 — Predictive Hazard Recognition: Supervisor Version',
  description: 'Look forward through the next work state, identify who becomes exposed, verify controls, reassess after change, and turn near misses into corrections.',
  boundary: 'This course is not OSHA certification, employer safety-program compliance, competent-person or qualified-person designation, or authority to supervise technical work outside the learner’s real craft competence.',
  modules: [
    { name: 'Forecast the Next Work State', lessons: [{ name: 'Move From Spotting to Forecasting', objective: 'Describe what will move, change, energize, open, close, become elevated, occupied, or accessible next.', blocks: [
      { type: 'callout', paragraphs: ['A worker may spot a current hazard. A supervisor must also anticipate the hazard created by the <strong>next action, transition, interface, or environmental change</strong>.'] },
      { heading: 'Ask before the next step', bullets: ['What changes next?', 'What temporary or incomplete condition will exist?', 'Which crews enter or leave?', 'What equipment starts moving or receiving power?', 'What public, performer, vendor, or venue interface becomes active?', 'Which control depends on another task staying unchanged?'] },
      { type: 'evidence', paragraphs: ['OSHA treats hazard identification as proactive and ongoing, including reviews before changes to workflows, equipment, materials, or organization.'] }
    ] }] },
    { name: 'Exposure & Priority', lessons: [{ name: 'Identify Who Can Be Affected', objective: 'Map exposure beyond the assigned crew and prioritize conditions by credible consequence and likelihood.', blocks: [
      { type: 'columns', columns: [
        { heading: 'Exposure groups', bullets: ['Assigned crew', 'Adjacent departments', 'Venue staff and vendors', 'Performers and clients', 'Guests and public', 'Emergency and public-safety personnel'] },
        { heading: 'Priority questions', bullets: ['What could happen?', 'How severe could it be?', 'How likely is exposure now?', 'How many people enter the condition?', 'Can the consequence spread across systems?'] }
      ] },
      { type: 'stop', paragraphs: ['Do not turn a simple risk score into permission to ignore a recognized serious condition. Use severity and likelihood to order action, then follow applicable requirements and authority.'] }
    ] }] },
    { name: 'Control Verification', lessons: [{ name: 'Confirm the Control Exists and Works', objective: 'Verify that approved controls are present, understood, usable, and still effective.', blocks: [
      { heading: 'Verification loop', type: 'sequence', items: ['Name the hazard and planned control.', 'Confirm the control is physically present or procedurally active.', 'Confirm affected workers understand it.', 'Observe whether the work uses it correctly.', 'Check for a defeated, degraded, bypassed, or conflicting control.', 'Reassess after the work or environment changes.'] },
      { type: 'callout', paragraphs: ['A note in a plan is not a working control until it exists at the jobsite and affected people can use it.'] }
    ] }] },
    { name: 'Change Management', lessons: [{ name: 'Reassess Every Material Change', objective: 'Trigger a new review when schedule, staffing, equipment, weather, routes, or simultaneous work changes.', blocks: [
      { heading: 'Common triggers', bullets: ['Load-in traffic intersects pedestrian work.', 'Overhead and floor operations begin at the same time.', 'A barrier or cable route moves.', 'Outdoor weather or ground conditions change.', 'Crew size, fatigue, visibility, or capability changes.', 'A nonroutine procedure or new equipment enters the job.', 'Public access begins while production work remains active.'] },
      { type: 'sequence', items: ['Pause the affected transition when needed.', 'Update the exposure picture.', 'Confirm the old control still works.', 'Add or change controls through the responsible authority.', 'Brief affected groups.', 'Verify before resuming.'] }
    ] }] },
    { name: 'Near Misses & Learning', lessons: [{ name: 'Treat Weak Signals as Data', objective: 'Report near misses objectively, look beyond individual blame, and feed corrections into the next plan.', blocks: [
      { heading: 'Ask what allowed the event', bullets: ['Were tools and equipment suitable?', 'Did staffing, fatigue, schedule, or supervision contribute?', 'Was training specific enough?', 'Did the procedure match real work?', 'Did two departments assume the other owned the control?', 'Was a prior warning normalized?'] },
      { type: 'practice', paragraphs: ['Record what happened, the work state, exposure, existing control, contributing conditions, immediate action, and follow-up owner. Communicate the lesson back into planning and briefings.'] },
      { type: 'authority', paragraphs: ['A supervisor can coordinate reporting and corrective action without claiming professional safety credentials or technical authority outside the real role.'] }
    ] }] }
  ],
  quiz: [
    { question: 'What is the core predictive question?', options: ['What is visibly wrong right now?', 'What changes next, who becomes exposed, and will the control still work?', 'Who made the last mistake?'], answer: 1, coaching: 'Supervisor reasoning looks through the next transition, not only at the current snapshot.' },
    { question: 'A barrier must move for equipment access. What should happen before it moves?', options: ['Move it quickly so the gap stays short', 'Assess the new exposure and establish the replacement control', 'Wait until a guest notices'], answer: 1, coaching: 'Temporary removal creates a new work state and can expose crew or public immediately.' },
    { question: 'A control appears in the plan but workers cannot use it in the current layout. Is the hazard controlled?', options: ['Yes, because the plan lists it', 'No; the supervisor must verify an effective usable control', 'Only during load-out'], answer: 1, coaching: 'Controls must exist and work in the actual field state.' },
    { question: 'Why investigate near misses?', options: ['To assign blame before the next shift', 'They reveal system weaknesses before a more serious event', 'Only because insurers require it'], answer: 1, coaching: 'Close calls provide evidence about controls, organization, training, and conditions.' },
    { question: 'What does completing this course grant?', options: ['Competent-person status', 'Knowledge of a supervisor reasoning model', 'Authority over every department'], answer: 1, coaching: 'Designation, qualification, employer training, and craft competence remain separate.' }
  ],
  practice: { heading: 'Evolving-scenario review', paragraphs: ['Use a real or simulated load-in that changes over time. The observer should score prediction, exposure mapping, control verification, communication, and reassessment—not memorized hazard lists.'], checklist: ['Define the next work state.', 'Identify all exposed groups.', 'Prioritize credible severe conditions.', 'Verify controls in the field state.', 'Respond to a change and brief affected people.', 'Document a near miss and corrective owner.'] },
  sources: [
    { label: 'OSHA — Safety Management: Education and Training', url: 'https://www.osha.gov/safety-management/education-training' },
    { label: 'OSHA — Hazard Identification and Assessment', url: 'https://www.osha.gov/safety-management/hazard-identification' },
    { label: 'OSHA — Hazard Prevention and Control', url: 'https://www.osha.gov/safety-management/hazard-prevention' },
    { label: 'OSHA — Safety Management tools', url: 'https://www.osha.gov/safety-management/explore-tools' }
  ]
};

const eventOperations = {
  slug: 'supervisor-event-operations',
  title: 'Event Operations & Production Coordination',
  tier: 'Supervisor Tier',
  tierClass: 'course-tier-supervisor',
  status: 'Review Build · Experience Gate',
  packet: 'Research Package 32 — Event Operations / Supervisor Tier: Production Coordination',
  description: 'Coordinate multiple departments, venue functions, contractors, schedules, clients, public interfaces, and event-wide readiness without replacing technical specialists.',
  boundary: 'Coordination authority does not automatically override rigging, electrical, engineering, manufacturer, venue, code, public-safety, creative, or specialist decisions. A strong supervisor coordinates the people who hold those authorities.',
  modules: [
    { name: 'Role & Authority Map', lessons: [{ name: 'Breadth Is Different From Technical Depth', objective: 'Distinguish department-lead responsibility from event-wide coordination responsibility.', blocks: [
      { type: 'columns', columns: [
        { heading: 'Department lead', bullets: ['One technical department or work package', 'Department crew assignment', 'Technical verification', 'Department safety controls', 'Department readiness status'] },
        { heading: 'Production/event supervisor', bullets: ['Multi-department schedule and dependencies', 'Venue, client, tour, vendor, and public interfaces', 'Resource conflicts and integrated status', 'Change and operational-risk coordination', 'Event-wide readiness and closeout'] }
      ] },
      { type: 'authority', paragraphs: ['Use a federated authority model. The supervisor owns integration and the common operating picture. Department leads and other authorities retain technical decisions inside their competent scope.'] }
    ] }] },
    { name: 'Advance & Integrated Plan', lessons: [{ name: 'Find Conflicts Before Show Day', objective: 'Combine requirements, constraints, resources, and dependencies into one working event plan.', blocks: [
      { heading: 'Advance inputs', bullets: ['Production riders and technical requirements', 'Venue limits, access, CAD or layout information', 'Schedule and critical milestones', 'Labor, equipment, services, contractors, and vendors', 'Security, guest, accessibility, emergency, and weather needs', 'Client, artist, tour, and public-agency interfaces'] },
      { heading: 'Dependency map', type: 'sequence', items: ['Name every critical deliverable.', 'Identify which deliverable must finish before another starts.', 'Mark shared space, labor, equipment, and access conflicts.', 'Assign an owner and required decision authority.', 'Set a visible status and escalation time.', 'Brief the integrated plan to department and venue leads.'] },
      { type: 'stop', paragraphs: ['A requirement without an owner, resource, approval path, or due time has not completed advance—it only appears in writing.'] }
    ] }] },
    { name: 'Event-Day Coordination', lessons: [{ name: 'Maintain One Operational Picture', objective: 'Run briefings, track readiness, coordinate handoffs, and make resource conflicts visible.', blocks: [
      { heading: 'Shared status vocabulary', bullets: ['Ready', 'Ready with a named constraint', 'Waiting on a dependency', 'Blocked', 'Unsafe or work held', 'Changed requirement', 'Escalation required'] },
      { heading: 'Coordination rhythm', bullets: ['Confirm current milestone and critical path.', 'Collect concise status from each lead.', 'Resolve or escalate resource and access conflicts.', 'Protect venue, guest, public-safety, and department interfaces.', 'Communicate schedule effects to client, venue, and production authority.', 'Record material decisions and handoffs.'] },
      { type: 'callout', paragraphs: ['The supervisor asks the technical authority for the decision; they do not produce a rigging calculation, electrical ruling, calibration change, or engineering answer merely because the event needs one quickly.'] }
    ] }] },
    { name: 'Change & Problem Management', lessons: [{ name: 'Track the Effects of Every Change', objective: 'Evaluate timeline, labor, equipment, safety, venue, public, cost, and approval effects before accepting a change.', blocks: [
      { type: 'sequence', items: ['State the requested change and owner.', 'Identify every affected department and public or venue interface.', 'Ask the relevant technical leads for impact and authority requirements.', 'Update schedule, resources, controls, approvals, and cost status.', 'Communicate the decision and revised constraints.', 'Verify the changed state at the next milestone.'] },
      { type: 'stop', paragraphs: ['Do not let one department’s “small change” spread invisibly through rigging, power, staging, access, security, guest flow, weather planning, or the schedule.'] }
    ] }] },
    { name: 'Readiness, Show & Closeout', lessons: [{ name: 'Declare Readiness With Evidence', objective: 'Integrate department and venue status, monitor the event, document exceptions, and close out restoration and learning.', blocks: [
      { heading: 'Integrated readiness review', bullets: ['Department leads report technical readiness and constraints.', 'Venue, security, guest, accessibility, and public-safety interfaces are active.', 'Critical vendors, staffing, equipment, access, and approvals are present.', 'Unresolved risk and workarounds have owners.', 'Hold or go authority is explicit.'] },
      { heading: 'After the event', bullets: ['Track strike and venue restoration.', 'Close equipment, damage, labor, incident, and vendor records.', 'Document changes and why they occurred.', 'Capture near misses, breakdowns, and useful decisions.', 'Assign follow-up instead of storing lessons only in memory.'] },
      { type: 'authority', paragraphs: ['Production/event supervision is a career branch, not the mandatory next rung above every department lead. Some specialists remain department heads; others move into cross-functional work.'] }
    ] }] }
  ],
  quiz: [
    { question: 'What distinguishes an event supervisor from a department lead?', options: ['The supervisor is automatically the senior technical expert', 'The supervisor integrates multiple departments and operational interfaces', 'The supervisor owns every employee'], answer: 1, coaching: 'The role adds breadth and integration, not universal technical authority.' },
    { question: 'Rigging reports a technical hold that affects doors. What should the supervisor do?', options: ['Override the hold to protect the timeline', 'Keep the hold visible, coordinate effects, and rely on the qualified rigging authority for release', 'Ask another department to approve it'], answer: 1, coaching: 'The supervisor owns the integrated response; the technical authority owns the specialist release.' },
    { question: 'A client requests a late layout change. What comes before acceptance?', options: ['A quick verbal yes', 'Cross-department, venue, safety, resource, schedule, cost, and approval impact review', 'Moving furniture before anyone notices'], answer: 1, coaching: 'A layout change can affect many systems and public routes.' },
    { question: 'What does “ready with constraint” accomplish?', options: ['It hides minor problems', 'It communicates usable status while naming a real limit or dependency', 'It means no further work is needed'], answer: 1, coaching: 'Precise status helps other teams plan without assuming full readiness.' },
    { question: 'Is production/event supervision the required next step for every technician?', options: ['Yes', 'No; it is a cross-functional career branch', 'Only in venues'], answer: 1, coaching: 'Technical depth and event-wide coordination are distinct pathways.' }
  ],
  practice: { heading: 'Integrated event scenario', paragraphs: ['Use several department leads, a venue constraint, a client change, a resource conflict, and a new safety condition. Score integration and authority judgment, not craft technique.'], checklist: ['Build dependency map and milestone status.', 'Resolve one resource conflict.', 'Route a technical decision to the right authority.', 'Communicate a delay or constraint.', 'Respond to a changed risk or venue condition.', 'Record readiness and closeout actions.'] },
  sources: [
    { label: 'IAVM — Certificate of Venue Management Studies blueprint', url: 'https://iavm.org/certificate-of-venue-management-studies/job-ready-blueprint/' },
    { label: 'IAVM — Associate Event Production Manager role evidence', url: 'https://member.iavm.org/cv5/cgi-bin/JobBoard.dll/Info?CONTRACTNUM=59021&WRP=JobEdit.htm' },
    { label: 'IAVM — Director of Operations role evidence', url: 'https://member.iavm.org/cv5/cgi-bin/JobBoard.dll/Info?CONTRACTNUM=59217&WRP=JobEdit.htm' },
    { label: 'OSHA — Recommended Practices for Safety and Health Programs', url: 'https://www.osha.gov/safety-management/' }
  ]
};

export const leadCourses = [...departmentLeadCourses, predictiveHazards, eventOperations];
