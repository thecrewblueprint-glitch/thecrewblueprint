function advancedCourse(config) {
  return {
    slug: config.slug,
    title: config.title,
    tier: config.tier || 'Advanced Systems Tier · Course 3',
    tierClass: config.tierClass || 'course-tier-advanced',
    status: 'Review Build · Qualified Review Gate',
    packet: config.packet,
    description: config.description,
    boundary: config.boundary,
    modules: [
      {
        name: 'Requirements & Boundaries',
        lessons: [{
          name: config.requirementsTitle,
          objective: config.requirementsObjective,
          blocks: [
            { type: 'callout', paragraphs: [config.progression] },
            { heading: 'Define before selecting equipment', bullets: config.requirements },
            { type: 'authority', paragraphs: [config.requirementsBoundary] }
          ]
        }]
      },
      {
        name: config.architectureModule,
        lessons: [{
          name: config.architectureTitle,
          objective: config.architectureObjective,
          blocks: [
            { type: 'sequence', items: config.layers },
            { heading: 'Architecture questions', bullets: config.architectureQuestions },
            { type: 'stop', paragraphs: [config.architectureStop] }
          ]
        }]
      },
      {
        name: config.interfaceModule,
        lessons: [{
          name: config.interfaceTitle,
          objective: config.interfaceObjective,
          blocks: [
            { type: 'columns', columns: config.interfaceColumns },
            { type: 'callout', paragraphs: [config.interfaceRule] }
          ]
        }]
      },
      {
        name: 'Documentation & Change Control',
        lessons: [{
          name: 'Make the Deployed System Traceable',
          objective: config.documentationObjective,
          blocks: [
            { heading: 'Required artifacts', bullets: config.artifacts },
            { type: 'evidence', paragraphs: ['AVIXA’s documentation and performance-verification work supports a useful principle: define the required deliverables and checks, assign responsibility, record the deployed state, and report discrepancies. Apply that principle without treating an AVIXA document as the only rule for live entertainment.'] },
            { type: 'sequence', items: ['Mark the controlling revision.', 'Record assumptions and owner decisions.', 'Update drawings, schedules, inventories, and configuration records together.', 'Back up recoverable system state where the system supports it.', 'Review every field change for downstream effects.', 'Issue a clear handoff record that another qualified person can follow.'] }
          ]
        }]
      },
      {
        name: 'Commissioning & Verification',
        lessons: [{
          name: config.commissionTitle,
          objective: config.commissionObjective,
          blocks: [
            { type: 'callout', paragraphs: ['Equipment power or first output is not acceptance. Commissioning compares the deployed system with defined requirements, tests expected paths and failure behavior, records results, and closes discrepancies through the correct authority.'] },
            { heading: 'Verification domains', bullets: config.verification },
            { type: 'authority', paragraphs: [config.commissionBoundary] }
          ]
        }]
      },
      {
        name: 'Resilience & Integrated Scenario',
        lessons: [{
          name: config.resilienceTitle,
          objective: config.resilienceObjective,
          blocks: [
            { heading: 'Evaluate the whole system', bullets: config.resilienceCriteria },
            { heading: 'Capstone change', paragraphs: [config.capstone], bullets: config.capstoneTasks },
            { type: 'stop', paragraphs: [config.capstoneStop] }
          ]
        }]
      }
    ],
    quiz: config.quiz,
    practice: {
      heading: 'Portfolio and qualified-review gate',
      paragraphs: [config.practiceStatement],
      checklist: ['Write assumptions and boundaries.', 'Produce the required system artifacts.', 'Identify external authorities and interfaces.', 'Define commissioning criteria before deployment.', 'Diagnose one fault from architecture evidence.', 'Respond to one late change with a traceable decision.', 'Receive review from a qualified practitioner for the actual discipline.']
    },
    sources: config.sources
  };
}

const systemCourses = [
  advancedCourse({
    slug: 'pathway-lighting-03-system-design',
    title: 'Lighting Course 3: Control-System Design',
    packet: 'Research Package 33 — Lighting Course 3: System Design & Optimization',
    description: 'Translate show requirements into a documented lighting-control architecture, commission its data paths, isolate failure domains, and manage change without crossing electrical or rigging authority.',
    boundary: 'This course does not qualify a learner for energized electrical work, venue-infrastructure changes, structural engineering, rigging, or employer appointment as a systems designer. Separate competence and authorization still control those decisions.',
    requirementsTitle: 'Design From Show Requirements',
    requirementsObjective: 'Define creative, operational, venue, device, control, data, resilience, interface, and handoff needs before selecting equipment.',
    progression: '<strong>The mastery shift is from operating or leading an existing rig to defining requirements, designing architecture, documenting interfaces, commissioning the deployed system, and diagnosing it at system scale.</strong>',
    requirements: ['Creative and cueing needs', 'Venue and touring constraints', 'Fixture, device, mode, and control needs', 'Universe, data, and network needs', 'Power and rigging interfaces requiring qualified coordination', 'Fallback and operational-continuity expectations', 'Documentation, backup, labeling, and handoff needs'],
    requirementsBoundary: 'Requirements belong to several authorities. Capture designer intent, production constraints, venue rules, rigging and power interfaces, operator needs, and employer standards without assuming the systems designer may approve them all.',
    architectureModule: 'Protocols & Networked Control',
    architectureTitle: 'Build the Control Path in Layers',
    architectureObjective: 'Map control from operator and show engine through network transport, gateways, device control, and fixture response.',
    layers: ['Operator or control surface', 'Show-control engine and authoritative file', 'Ethernet or data transport', 'Gateways, nodes, and protocol conversion', 'Device-level control, universe, address, and mode', 'Fixture or endpoint response'],
    architectureQuestions: ['How do physical and logical topologies differ?', 'Where do DMX, RDM, and sACN functions enter the path?', 'Which source owns control and priority?', 'How are universes, addresses, and device modes documented?', 'What is one local, segment, universe, network, or control-wide failure domain?', 'When does a dedicated network specialist own the answer?'],
    architectureStop: 'Do not turn a transferable architecture into one console menu tour. Product steps, network configuration, and protocol behavior need current documentation and qualified ownership.',
    interfaceModule: 'Data, Device & Department Interfaces',
    interfaceTitle: 'Control the Boundaries Between Systems',
    interfaceObjective: 'Identify lighting-data, device, power, rigging, production, and operator interfaces that can invalidate the design.',
    interfaceColumns: [
      { heading: 'Inside control architecture', bullets: ['Universe and address plan', 'RDM discovery or management concepts', 'sACN transport', 'Gateway and node roles', 'Show-file and configuration versions', 'Network segmentation and control ownership'] },
      { heading: 'External authority interfaces', bullets: ['Approved power system', 'Rigging and structural plan', 'Creative and programming intent', 'Venue network constraints', 'Safety and access controls', 'Production change approval'] }
    ],
    interfaceRule: 'The system designer must show where lighting responsibility ends and another qualified authority begins. Unnamed interfaces become faults and arguments during commissioning.',
    documentationObjective: 'Create diagrams, schedules, labeling, patch, topology, version, commissioning, and fault records that another qualified technician can use.',
    artifacts: ['System block and control-flow diagram', 'Device and mode schedule', 'Universe and address schedule', 'Network and physical-topology diagram', 'Patch and labeling convention', 'Show-file, backup, and version record', 'Commissioning checklist and discrepancy log'],
    commissionTitle: 'Test the Design Against the Deployed Rig',
    commissionObjective: 'Verify endpoints, patch, modes, transport, control, recovery assumptions, and records before handoff.',
    verification: ['Expected endpoints are present.', 'Address, mode, universe, and patch match records.', 'Control reaches the intended device from the intended source.', 'Network and gateway paths behave as designed.', 'Fallback or recovery assumptions receive a controlled test where appropriate.', 'The deployed show file and documentation match.', 'Discrepancies close or receive an owner and constraint status.'],
    commissionBoundary: 'Electrical, rigging, network, fixture-service, and venue checks require the people who actually hold those responsibilities. Commissioning coordinates their evidence; it does not absorb their authority.',
    resilienceTitle: 'Design for Predictable Failure and Recovery',
    resilienceObjective: 'Compare architectures by failure behavior, service access, diagnostic speed, documentation, operational simplicity, and change tolerance.',
    resilienceCriteria: ['Reliability and predictable failure domains', 'Recoverable show and device configuration', 'Service access and labeling', 'Clear fault isolation', 'Appropriate redundancy', 'Compatibility and spare strategy', 'Operational simplicity', 'Clean touring, venue, and operator handoff'],
    capstone: 'A late production change adds fixtures, changes one position, and requests a second control location. The current network and universe plan has limited headroom.',
    capstoneTasks: ['State missing requirements.', 'Revise the architecture without hiding power or rigging effects.', 'Identify single points of failure.', 'Update patch, topology, device, and version records.', 'Define commissioning checks for the changed paths.', 'Route approvals to the correct authorities.'],
    capstoneStop: 'A clever drawing is not complete when power, rigging, venue, network, operator, or design assumptions remain unapproved.',
    quiz: [
      { question: 'What should a mastery lighting design begin with?', options: ['Favorite console and fixtures', 'Show requirements, constraints, interfaces, and acceptance needs', 'The number of spare universes'], answer: 1, coaching: 'Equipment follows requirements; it does not define them.' },
      { question: 'A fixture has the right address but the wrong device mode. What does this show?', options: ['Address alone does not define the control model', 'The network is definitely down', 'Rigging must move the fixture'], answer: 0, coaching: 'Mode changes channel behavior and must agree with the patch and documentation.' },
      { question: 'Why document physical and logical topology separately?', options: ['They can differ and fail in different ways', 'Only the physical drawing matters', 'To make the packet longer'], answer: 0, coaching: 'A correct cable route does not prove the logical control path, and the reverse also holds.' },
      { question: 'When does the team complete commissioning?', options: ['When fixtures first power on', 'When the team checks defined criteria, closes or controls discrepancies, and matches records to the deployed system', 'After a console backup'], answer: 1, coaching: 'Power is only one state. Commissioning tests the required behavior and evidence.' },
      { question: 'What does this course grant regarding electrical work?', options: ['Entertainment Electrician qualification', 'No electrical authority beyond the learner’s separate qualification', 'Permission to alter venue service'], answer: 1, coaching: 'Lighting-system design and electrical authority remain separate.' }
    ],
    practiceStatement: 'The capstone should produce a complete control package for a bounded show brief. Review needs an experienced lighting systems practitioner plus the responsible power, rigging, venue-network, operator, and design voices for their interfaces.',
    sources: [
      { label: 'ESTA — Published entertainment-control standards', url: 'https://tsp.esta.org/tsp/documents/published_docs.php' },
      { label: 'AVIXA — Documentation requirements for AV systems', url: 'https://www.avixa.org/resources/standards/documentation-requirements-for-audiovisual-systems' },
      { label: 'AVIXA — Systems performance verification', url: 'https://www.avixa.org/resources/standards/av-systems-performance-verification' },
      { label: 'ETCP — Entertainment Electrician certification boundary', url: 'https://etcp.esta.org/certify/certify_electrical.html' }
    ]
  }),
  advancedCourse({
    slug: 'pathway-audio-03-system-design',
    title: 'Audio Course 3: System & Network Architecture',
    packet: 'Research Package 34 — Audio Course 3: System Design & Network Architecture',
    description: 'Turn audience and production requirements into complete signal, loudspeaker, network, RF, documentation, commissioning, and recovery plans.',
    boundary: 'Completion does not appoint the learner as an independent systems engineer, RF coordinator, network engineer, electrician, or qualified rigger. Product, venue, law, employer, and specialist authority remain active.',
    requirementsTitle: 'Start With Listener and Production Objectives',
    requirementsObjective: 'Define audience, venue, source, destination, performance, network, wireless, continuity, and handoff requirements.',
    progression: '<strong>The mastery shift moves beyond one console and one signal path into complete-system reasoning—from listener needs through architecture, transport, RF interfaces, commissioning, and recovery.</strong>',
    requirements: ['Audience geometry and listening areas', 'Sources and every required destination', 'FOH, monitor, broadcast, recording, communications, and assistive feeds', 'Intelligibility, coverage, dynamic-range, and operational goals', 'Venue, environment, schedule, and access constraints', 'Networked-audio and wireless scope', 'Continuity, documentation, measurement, and handoff needs'],
    requirementsBoundary: 'Performance goals must be measurable enough to verify, while acoustic modeling, RF coordination, network engineering, power, and rigging decisions stay with people qualified for their real scope.',
    architectureModule: 'Complete Signal Architecture',
    architectureTitle: 'Map Every Layer and Parallel Destination',
    architectureObjective: 'Trace sources through I/O, transport, mixing, DSP, amplification, loudspeakers, and the acoustic field.',
    layers: ['Sources, microphones, DIs, playback, and wireless inputs', 'Stage I/O and physical patch', 'Transport and network routes', 'Mixing, buses, matrices, and processing', 'System DSP, amplification, and loudspeaker paths', 'Acoustic field and listener'],
    architectureQuestions: ['Which destinations depend on each source?', 'Where do FOH, monitor, record, broadcast, assistive, and intercom paths split?', 'Which clock, network, DSP, or output failure can affect several paths?', 'What are the known-good test points?', 'Which system-performance goals require measurement?', 'Where do power, rigging, and venue infrastructure enter?'],
    architectureStop: 'Do not use a diagram to claim acoustic, RF, network, power, or rigging competence the learner has not demonstrated. The map shows dependencies and ownership.',
    interfaceModule: 'Acoustics, Networks & RF',
    interfaceTitle: 'Coordinate Three Specialist Domains',
    interfaceObjective: 'Connect coverage and acoustic goals with digital-audio networking, wireless paths, and external feeds.',
    interfaceColumns: [
      { heading: 'System-performance view', bullets: ['Audience coverage and level consistency', 'Timing and alignment concepts', 'Room and environmental interaction', 'Headroom and signal integrity', 'Measurement criteria', 'Loudspeaker and processing objectives'] },
      { heading: 'Transport and RF view', bullets: ['Physical versus logical network topology', 'Device discovery, subscriptions, and clock state', 'Addressing, managed switching, multicast, and redundancy awareness', 'RF inventory, scan, coordination, deployment, and monitoring workflow', 'Separation of RF, audio, and network fault domains', 'Specialist escalation'] }
    ],
    interfaceRule: 'The complete system joins several disciplines. The designer must know enough to state requirements, map interfaces, preserve configuration, and call the right specialist—not pretend one role performs all of them.',
    documentationObjective: 'Deliver a block diagram, I/O and route records, network and device inventory, RF handoff, system-processing map, test plan, and change log.',
    artifacts: ['Complete system block diagram', 'Input, output, and destination list', 'Patch, routing, bus, matrix, and processing records', 'Network topology and device inventory', 'RF inventory and coordination handoff', 'Loudspeaker, amplification, and system-processing map', 'Verification criteria, results, change log, and fault record'],
    commissionTitle: 'Verify Performance, Not Only Signal Presence',
    commissionObjective: 'Confirm routes, device state, output zones, performance goals, wireless state, continuity behavior, and documentation.',
    verification: ['Every required source reaches every approved destination.', 'Network devices, routes, clock state, and fallback match the plan.', 'Expected output zones and processing paths respond correctly.', 'The responsible specialist measures coverage and system-performance goals.', 'The team checks wireless links and downstream audio paths separately.', 'The team runs controlled tests of fallback, redundancy, and recovery assumptions.', 'Records reflect the deployed state and open limitations.'],
    commissionBoundary: 'Measurement and commissioning methods must match the product, venue, contract, and responsible specialists. This course teaches the process and evidence architecture, not a universal tuning recipe.',
    resilienceTitle: 'Isolate Failures Across Audio, Network, RF & Output',
    resilienceObjective: 'Use architecture, status, meters, measurements, and known-good points to localize faults without random global changes.',
    resilienceCriteria: ['Performance against listener requirements', 'Signal headroom and integrity', 'Network stability and recoverability', 'RF and audio-domain separation', 'Predictable redundancy', 'Fast fault isolation', 'Maintainable records and labeling', 'Simple operation and clean handoff'],
    capstone: 'A multi-space event needs FOH, monitors, recording, an assistive feed, wireless channels, and a secondary mix location. One network path and one output zone fail during commissioning.',
    capstoneTasks: ['Create the complete block and ownership map.', 'State coverage and verification goals.', 'Separate the two failure domains.', 'Protect working destinations while testing.', 'Define specialist handoffs and recovery steps.', 'Update the final status and records.'],
    capstoneStop: 'Do not solve a local failure by changing a shared clock, route, processing state, or RF plan without understanding every dependent path.',
    quiz: [
      { question: 'What should define an advanced audio system before equipment selection?', options: ['Audience and production requirements', 'The console brand', 'The first available network switch'], answer: 0, coaching: 'Listener, source, destination, venue, performance, and operational needs drive architecture.' },
      { question: 'Why map parallel destinations?', options: ['One source can feed FOH, monitors, record, broadcast, and other paths', 'Only network audio has destinations', 'It removes the need for commissioning'], answer: 0, coaching: 'A change to a shared source or route can affect several owners at once.' },
      { question: 'Stable RF with no console signal points first to what distinction?', options: ['RF link versus receiver-output and downstream audio path', 'Audience coverage versus rigging', 'Power versus color space'], answer: 0, coaching: 'Separate RF and audio domains before changing coordination.' },
      { question: 'What does “audio passes” fail to prove?', options: ['That defined routing, coverage, performance, fallback, and documentation criteria are met', 'That microphones exist', 'That cable has connectors'], answer: 0, coaching: 'Commissioning checks required behavior, not only signal presence.' },
      { question: 'Does this course confer Dante or RF certification?', options: ['Yes', 'Only for small shows', 'No'], answer: 2, coaching: 'External training, tools, experience, and authorization remain separate.' }
    ],
    practiceStatement: 'The portfolio should cover one real or simulated venue brief and receive review from experienced audio systems, network, RF, power, rigging, and venue practitioners for their domains.',
    sources: [
      { label: 'Audinate — Dante training architecture', url: 'https://www.audinate.com/press/audinate-launches-completely-revamped-dante-training-program/' },
      { label: 'Yamaha — Pro audio training support', url: 'https://usa.yamaha.com/products/contents/proaudio/training_support/index.html' },
      { label: 'Shure — Wireless Workbench', url: 'https://www.shure.com/en-US/products/software/wwb' },
      { label: 'AVIXA — Published standards', url: 'https://www.avixa.org/resources/standards/published-standards' },
      { label: 'AVIXA — Systems performance verification', url: 'https://www.avixa.org/resources/standards/av-systems-performance-verification' }
    ]
  }),
  advancedCourse({
    slug: 'pathway-video-03-system-architecture',
    title: 'Video Course 3: Display-System Architecture',
    packet: 'Research Package 35 — Video Course 3: Wall Design & System Architecture',
    description: 'Translate audience and content requirements into display geometry, signal and processor paths, LED data, image criteria, records, commissioning, and recovery.',
    boundary: 'This course does not grant structural, rigging, electrical, advanced calibration, firmware, broadcast, or manufacturer-service authority. Product-specific mechanical procedures remain separate.',
    requirementsTitle: 'Design From Viewing Needs',
    requirementsObjective: 'Define content, audience positions, detail, environment, canvas, camera, and continuity requirements before choosing a display.',
    progression: '<strong>The mastery shift moves from building and leading a wall to translating viewer and content needs into a complete display system that the team can document, test, diagnose, and recover.</strong>',
    requirements: ['Content type and required visible detail', 'Audience positions and viewing distances', 'Ambient-light and environmental conditions', 'Canvas, aspect ratio, native resolution, and segmentation', 'Camera, IMAG, broadcast, confidence, record, and stream interfaces', 'Source, switching, scaling, processing, and LED-control needs', 'Fallback, spares, documentation, and acceptance criteria'],
    requirementsBoundary: 'Viewing and image goals do not settle support, ballast, wind, rigging, power, firmware, calibration, or creative approval. Name those owners at requirements stage.',
    architectureModule: 'Geometry, Signal & Data',
    architectureTitle: 'Join the Physical Wall to the Pixel Canvas',
    architectureObjective: 'Map content through source, switching, scaling, processing, LED data, receiving hardware, physical pixels, and the viewer.',
    layers: ['Content sources, cameras, playback, and media servers', 'Switching, routing, and parallel feeds', 'Scaling, compositing, synchronization, and processor canvas', 'LED data distribution and receiving topology', 'Panel, module, pixel geometry, and physical segmentation', 'Image in the real viewing environment'],
    architectureQuestions: ['How do physical dimensions, pitch, native resolution, and canvas relate?', 'Which input formats, frame rates, color paths, and handshakes matter?', 'Where are processor and data-capacity limits?', 'Which configuration does the team back up and recover?', 'How does a source or processor failure reach the viewer?', 'Which wall changes require structural, power, or product review?'],
    architectureStop: 'Do not generalize one cabinet, lock, receiver card, processor, or calibration workflow across systems. The course architecture transfers; the procedure may not.',
    interfaceModule: 'Image Performance & External Feeds',
    interfaceTitle: 'Measure the System in Its Environment',
    interfaceObjective: 'Define image criteria across display, source, distribution, camera, content, and ambient conditions.',
    interfaceColumns: [
      { heading: 'Image criteria', bullets: ['Display size and viewing need', 'Contrast in the environment', 'Brightness appropriateness', 'Uniformity and color consistency', 'Scaling and content match', 'Camera interaction and flicker awareness'] },
      { heading: 'External interfaces', bullets: ['IMAG and camera feeds', 'Broadcast, record, and stream', 'Confidence and DSM displays', 'Rigging and ground support', 'Production power', 'Content and creative approval'] }
    ],
    interfaceRule: 'Image quality is a system property, not one panel specification. Source, processing, transport, display, environment, and viewer all affect the result.',
    documentationObjective: 'Keep geometry, source routes, processor canvas, LED data, device state, backups, redundancy, and verification results aligned.',
    artifacts: ['System block diagram', 'Source and destination matrix', 'Display geometry and pixel-canvas plan', 'Processor mapping and LED data-flow diagram', 'Device inventory and configuration record', 'Fallback and spare map', 'Commissioning checklist and discrepancy log'],
    commissionTitle: 'Verify the Complete Canvas and Signal Chain',
    commissionObjective: 'Test route, format, mapping, geometry, image criteria, fallback, and documentation against the production brief.',
    verification: ['Correct source reaches each destination.', 'Resolution, frame rate, synchronization, and scaling behave as planned.', 'Canvas mapping has no missing, repeated, reversed, or misordered regions.', 'Physical orientation and geometry match the approved configuration.', 'Image performance meets defined environmental and production criteria.', 'Fallback and backup states work as designed where required.', 'Configuration and records match the deployed system.'],
    commissionBoundary: 'Qualified product, processing, camera, calibration, rigging, power, and structural owners must perform or accept the checks inside their scopes.',
    resilienceTitle: 'Recover Configuration and Isolate the Failed Layer',
    resilienceObjective: 'Classify source, route, processing, transport, LED data, endpoint, physical, power, sync, and environmental faults from the system diagram.',
    resilienceCriteria: ['Simple signal paths', 'Predictable fallback', 'Processor and data headroom', 'Recoverable configuration', 'Spare and service strategy', 'Fast fault isolation', 'Content and display compatibility', 'Documented structural and power interfaces'],
    capstone: 'The requested content canvas changes, production adds a backup source, and a camera reports flicker while one data branch shows intermittent loss.',
    capstoneTasks: ['Recheck viewing and content requirements.', 'Update canvas, route, and processor records.', 'Separate camera, sync, and LED-data symptoms.', 'Protect known-good configuration.', 'Define tests and acceptance owners.', 'Report remaining constraints before show handoff.'],
    capstoneStop: 'Do not hide structural, power, processor-capacity, image, or synchronization limits behind a resized canvas or temporary route.',
    quiz: [
      { question: 'What comes before counting LED panels?', options: ['Viewing, content, environment, canvas, and interface requirements', 'Cart order', 'Lock color'], answer: 0, coaching: 'The display serves a viewing need; available inventory is a constraint, not the starting objective.' },
      { question: 'Why map video signal and LED data separately?', options: ['They are different layers with different failures', 'They always use the same cable', 'Only LED data reaches the viewer'], answer: 0, coaching: 'A correct video source path does not prove processor mapping or receiving-data topology.' },
      { question: 'Is contrast only a panel specification?', options: ['Yes', 'No; source, distribution, display, and environment affect it', 'Only outdoors'], answer: 1, coaching: 'Image performance belongs to the complete installed system.' },
      { question: 'What should a configuration change trigger?', options: ['Updated records, backup, impact review, and new verification', 'Only a new filename', 'No action if the image appears'], answer: 0, coaching: 'A change can affect canvas, data capacity, source routes, redundancy, and support interfaces.' },
      { question: 'Does the course authorize rigging or structural changes?', options: ['Yes', 'Only on ground stacks', 'No'], answer: 2, coaching: 'Support authority remains separate from display-system reasoning.' }
    ],
    practiceStatement: 'The capstone should contain viewing calculations or criteria appropriate to the brief, a geometry and canvas plan, source and data maps, a configuration record, and a verification report reviewed by the relevant video, product, rigging, power, and venue authorities.',
    sources: [
      { label: 'AVIXA — Display Image Size for 2D Content', url: 'https://store.avixa.org/CPBase__item?id=a13f200000C2iQeAAJ' },
      { label: 'AVIXA — Image System Contrast Ratio', url: 'https://www.avixa.org/resources/standards/image-system-contrast-ratio' },
      { label: 'AVIXA — Systems performance verification', url: 'https://www.avixa.org/resources/standards/av-systems-performance-verification' },
      { label: 'AVIXA — Documentation requirements', url: 'https://www.avixa.org/resources/standards/documentation-requirements-for-audiovisual-systems' }
    ]
  }),
  advancedCourse({
    slug: 'pathway-electrics-03-system-load-planning',
    title: 'Electrics Course 3: System & Load-Planning Literacy',
    packet: 'Research Package 36 — Electrics Course 3: System Design & Load Planning',
    description: 'Study professional scope, requirements, documentation, review, verification, and decision boundaries around entertainment power without procedural live-power instruction.',
    boundary: 'This safety-bounded course cannot create electrical qualification, licensure, code authority, employer authorization, ETCP certification, or permission to construct, energize, modify, test, or service a temporary power system.',
    requirementsTitle: 'Put Qualification Inside the Design',
    requirementsObjective: 'Identify legal, employer, venue, code, credential, equipment, and task boundaries before planning work.',
    progression: '<strong>The mastery progression joins awareness, authorized competence, lead accountability, requirements and load literacy, qualified design review, authorized implementation, inspection, controlled energization, and handoff.</strong> Online study covers the decision architecture, not hazardous procedure.',
    requirements: ['Connected equipment and operating demand', 'Source and distribution capacity', 'Protection, grounding, bonding, and environmental requirements', 'Cable and distribution-equipment ratings', 'Generator, venue, department, and critical-load interfaces', 'Adopted code, AHJ, manufacturer, employer, and listing requirements', 'Qualified design, installation, test, energization, and acceptance roles'],
    requirementsBoundary: 'OSHA ties training to risk and distinguishes qualified people for work on or near exposed energized parts. ETCP eligibility also depends on professional experience. Information transfer cannot replace those conditions.',
    architectureModule: 'Planning Lifecycle',
    architectureTitle: 'Map Decisions From Requirement to Handoff',
    architectureObjective: 'Follow a professional power-planning lifecycle without giving unqualified learners installation steps.',
    layers: ['Production requirements and equipment inventory', 'System requirements and source constraints', 'Qualified design and code review', 'Documented distribution and load plan', 'Authorized installation and required inspection or testing', 'Controlled energization, monitoring, shutdown, and handoff'],
    architectureQuestions: ['Which current requirement applies in this jurisdiction and venue?', 'Who is qualified and authorized for each decision and task?', 'Which assumptions need calculation or measurement?', 'What changes invalidate the plan?', 'Which department interfaces affect loads or routes?', 'What evidence is required before energization and use?'],
    architectureStop: 'This architecture never becomes a self-study wiring or live-troubleshooting procedure. When the learner reaches technical execution, the qualified employer or instructor process takes over.',
    interfaceModule: 'Code, Equipment & Authority',
    interfaceTitle: 'Navigate Overlapping Requirements',
    interfaceObjective: 'Distinguish OSHA, adopted electrical code, AHJ, ETCP scope, manufacturer, listing, employer, and venue responsibilities.',
    interfaceColumns: [
      { heading: 'Requirement sources', bullets: ['OSHA workplace rules', 'Adopted NFPA 70 or local electrical code', 'Authority having jurisdiction', 'Equipment listings and labels', 'Manufacturer instructions', 'Entertainment technical standards'] },
      { heading: 'Role sources', bullets: ['Employer qualification and assignment', 'Licensed or venue electrical authority', 'ETCP EE or PPDT competence frameworks', 'Planner or designer within competence', 'Qualified installer or technician', 'Lead, inspector, and handoff authority'] }
    ],
    interfaceRule: 'These sources overlap but are not interchangeable. The professional habit is to verify the current applicable requirement and responsible authority rather than quote one rule as universal.',
    documentationObjective: 'Use equipment and load inventories, diagrams, schedules, identification, review, inspection, change, and authorization records to keep qualified work traceable.',
    artifacts: ['Equipment and load inventory', 'System diagram and distribution schedule', 'Source and constraint record', 'Equipment identification and rating record', 'Qualified review and authorization record', 'Inspection and verification results', 'Change log, fault status, and handoff record'],
    commissionTitle: 'Control Status Through Qualified Verification',
    commissionObjective: 'Identify the process evidence required before installation, energization, use, change, and shutdown transitions.',
    verification: ['Requirements and controlling authority are current.', 'Qualified personnel review and implement the approved plan.', 'Equipment, environment, routing, and protection match assigned use.', 'Required inspections, measurements, and tests are complete.', 'Changes receive review before they alter system assumptions.', 'Energization and operational monitoring follow the responsible procedure.', 'Handoff records state the exact system status and limits.'],
    commissionBoundary: 'Crew Blueprint can teach what evidence should exist. Only the authorized qualified people may perform or accept technical electrical checks in the actual system.',
    resilienceTitle: 'Audit Assumptions and Decision Paths',
    resilienceObjective: 'Find missing inputs, authority conflicts, undocumented change, weak handoff, and fault escalation gaps without accessing energized components.',
    resilienceCriteria: ['Complete requirements', 'Current jurisdiction and venue inputs', 'Qualified role assignment', 'Traceable system and load records', 'Protected critical interfaces', 'Controlled change', 'Clear fault isolation and stop authority', 'Accurate readiness and shutdown records'],
    capstone: 'A department adds equipment, the venue source differs from the advance, and rain threatens an outdoor route shortly before the requested energization time.',
    capstoneTasks: ['Identify changed requirements and affected assumptions.', 'Name the qualified roles and current requirement sources.', 'Hold unsafe or unverified transitions.', 'Update the documentation and approval path.', 'Define the evidence required before release.', 'Communicate exact status to production and departments.'],
    capstoneStop: 'Do not answer the scenario with a connection, meter, protective-device, grounding, or energized-work procedure. The assessed skill is recognizing the missing decision and qualified authority.',
    quiz: [
      { question: 'What can this course safely teach?', options: ['Planning, documentation, review, verification concepts, and authority boundaries', 'How to work exposed energized parts', 'Permission to connect venue service'], answer: 0, coaching: 'Technical execution remains inside qualified practical training and authorization.' },
      { question: 'Why verify the applicable code and AHJ?', options: ['Adopted requirements and authority vary by location and project', 'ETCP replaces all local law', 'Manufacturer instructions replace code'], answer: 0, coaching: 'No single source in the ecosystem erases all others.' },
      { question: 'An undocumented field change affects a load. What is the concern?', options: ['It can invalidate assumptions elsewhere in the system', 'Nothing if equipment stays on', 'Only the filename is wrong'], answer: 0, coaching: 'Planning, capacity, protection, distribution, and handoff can depend on the prior state.' },
      { question: 'Who performs electrical tests on a real system?', options: ['Anyone who passed the quiz', 'People qualified and authorized for the task and conditions', 'The nearest department lead'], answer: 1, coaching: 'Course knowledge does not create task qualification.' },
      { question: 'What does a “ready” status require?', options: ['Connected equipment', 'The required qualified checks and authority release', 'A complete online assessment'], answer: 1, coaching: 'The actual system must pass its required process, not only appear assembled.' }
    ],
    practiceStatement: 'The course uses document and decision scenarios only. Any physical work must occur in an established electrical-training and employer framework with the appropriate qualified instructor, equipment, procedures, and authorization.',
    sources: [
      { label: 'OSHA 1910.332 — Electrical safety training', url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.332' },
      { label: 'ETCP — Entertainment Electrician certification', url: 'https://etcp.esta.org/certify/certify_electrical.html' },
      { label: 'ETCP — Entertainment Electrician examination content', url: 'https://etcp.esta.org/certify/examination_electrical.html' },
      { label: 'ETCP — EE and PPDT scope of work', url: 'https://etcp.esta.org/certify/scopeofwork.html' },
      { label: 'NFPA — NFPA 70 development', url: 'https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70' },
      { label: 'ESTA — Published standards', url: 'https://tsp.esta.org/tsp/documents/published_docs.php' }
    ]
  }),
  advancedCourse({
    slug: 'pathway-staging-carpentry-03-design-coordination',
    title: 'Staging / Carpentry Course 3: Design Coordination',
    packet: 'Research Package 37 — Staging/Carpentry Course 3: Build Design & Automation',
    description: 'Coordinate approved design intent, temporary-structure documents, department interfaces, automation awareness, commissioning, inspection, and controlled change.',
    boundary: 'Completion does not create structural-engineering authority, competent-person status, machinery or automation authorization, rigging qualification, or permission to modify a load-bearing system.',
    requirementsTitle: 'Coordinate Design Without Inventing Authority',
    requirementsObjective: 'Map production intent, approved documents, product systems, specialists, site limits, inspection, and change-control needs.',
    progression: '<strong>The mastery shift moves from executing and leading a build to understanding how teams specify, document, review, integrate, accept, and change it.</strong>',
    requirements: ['Production and design intent', 'Approved drawings, specifications, and manufacturer systems', 'Structural-engineering and rigging interfaces', 'Electrical and automation interfaces', 'Venue, site, ground, access, and environmental constraints', 'Inspection and acceptance responsibilities', 'Revision and field-change process'],
    requirementsBoundary: 'The learner coordinates information and detects when a change affects structural, rigging, electrical, automation, manufacturer, venue, or code assumptions. That recognition does not grant approval authority.',
    architectureModule: 'Temporary-Structure Systems',
    architectureTitle: 'Read the Build as Interacting Requirements',
    architectureObjective: 'Connect intended use, geometry, product or engineered system, support concepts, access, environment, interfaces, and inspection.',
    layers: ['Intended use and production requirement', 'Approved geometry, product, or engineered configuration', 'Support, stability, bracing, and load-path concepts', 'Access, egress, edge, public, and work-zone interfaces', 'Rigging, power, automation, scenic, and technical department interfaces', 'Progressive check, formal acceptance, use, change, and strike'],
    architectureQuestions: ['Which drawing revision governs the field build?', 'What manufacturer or engineering reference applies?', 'Which connection or component is structural or safety-critical?', 'Whose system changes when staging changes?', 'What site or weather condition alters assumptions?', 'Who must inspect and release the system?'],
    architectureStop: 'Load path, bracing, ground condition, hardware substitution, suspended interface, and engineered configuration are not subjects for field invention.',
    interfaceModule: 'Automation & Department Integration',
    interfaceTitle: 'Treat Moving Systems as a Separate Discipline',
    interfaceObjective: 'Recognize mechanical, electrical, control, sensing, guarding, rehearsal, emergency, and authorization interfaces without procedural machine instruction.',
    interfaceColumns: [
      { heading: 'Automation awareness', bullets: ['Changing hazard zones', 'Mechanical and electrical interfaces', 'Control, sensing, and emergency systems', 'Guarding and access', 'Commissioning and rehearsal', 'Authorized operation and fault escalation'] },
      { heading: 'Department dependencies', bullets: ['Rigging and overhead support', 'Lighting and cable paths', 'Audio and stage placement', 'Video and ground or flown display', 'Power and controls', 'Stage management, scenic, venue, and production'] }
    ],
    interfaceRule: 'The useful mastery question is often not “Can staging do this?” but “Whose system and approval basis changes if staging does this?”',
    documentationObjective: 'Keep plans, elevations, sections, details, schedules, instructions, revision marks, interface notes, inspection results, and field changes tied to the approved build.',
    artifacts: ['Plan, elevation, section, and detail set', 'Component and hardware schedule', 'Manufacturer or engineered configuration references', 'Revision and responsibility matrix', 'Department-interface record', 'Progressive check and formal acceptance record', 'Field-change and handoff log'],
    commissionTitle: 'Move From Assembly to Accepted Use',
    commissionObjective: 'Coordinate progressive checks, discrepancy closure, formal inspection, use release, and changed-state review.',
    verification: ['Field build matches the controlling approved information.', 'Required product, component, and interface checks are complete.', 'Incomplete or changed areas stay controlled.', 'Structural, rigging, power, automation, venue, and manufacturer issues reach their owners.', 'The required inspector or authority releases use.', 'Post-acceptance changes trigger review.', 'Strike and closeout preserve equipment-condition records.'],
    commissionBoundary: 'The required legal or technical acceptance role varies by structure, project, venue, jurisdiction, manufacturer, and employer. The crew chief does not automatically become the final authority.',
    resilienceTitle: 'Classify Changes Before Work Continues',
    resilienceObjective: 'Separate approved execution changes from manufacturer alternates, production design changes, engineering changes, and specialist changes.',
    resilienceCriteria: ['Traceable revisions', 'Clear interface ownership', 'Controlled incomplete conditions', 'Verified product compatibility', 'Qualified structural and machinery review', 'Commissioning before occupancy or operation', 'Weather and site-condition response', 'Accurate handoff and change record'],
    capstone: 'Field dimensions differ from the drawing, a scenic element now needs movement, video requests more deck load, and the schedule asks dependent departments to start early.',
    capstoneTasks: ['Identify every affected assumption and department.', 'Separate execution decisions from required approvals.', 'Hold incomplete or unverified use.', 'Update drawings, revisions, responsibility, and status records.', 'Define commissioning and rehearsal needs.', 'Obtain and document release from the correct authorities.'],
    capstoneStop: 'Do not “make it fit” by substituting hardware, changing support, removing protection, altering automation, or accepting load without the required review.',
    quiz: [
      { question: 'What is the Course 3 mastery shift?', options: ['Faster assembly', 'Design coordination, documentation, interfaces, commissioning, and change control', 'Independent structural engineering'], answer: 1, coaching: 'Advanced coordination is broader than hand skill and remains bounded by qualified authority.' },
      { question: 'Why track drawing revisions?', options: ['The field build must remain tied to the controlling approved information', 'Older drawings are easier to read', 'Revision numbers replace inspection'], answer: 0, coaching: 'A mismatched revision can invalidate components, location, interfaces, and acceptance.' },
      { question: 'A scenery change affects a moving system. Who owns the technical automation decision?', options: ['Any staging lead', 'The authorized automation and other affected authorities', 'The person who requested it'], answer: 1, coaching: 'Moving systems join machinery, controls, sensing, and hazard zones and require separate competence.' },
      { question: 'When may dependent equipment load an unverified stage area?', options: ['When the surface appears complete', 'Only after the required release or approved controlled exception', 'After the first department arrives'], answer: 1, coaching: 'Assembly appearance does not prove accepted use.' },
      { question: 'Does this course grant structural-modification authority?', options: ['Yes', 'Only for modular systems', 'No'], answer: 2, coaching: 'Engineering, product, venue, and employer authority remain separate.' }
    ],
    practiceStatement: 'The portfolio should coordinate one approved temporary staging or scenic brief through documents, interfaces, commissioning, and a changed field condition. Review needs the actual structural, rigging, automation, power, venue, manufacturer, and production authorities for their parts.',
    sources: [
      { label: 'ESTA — Published entertainment technology standards', url: 'https://tsp.esta.org/tsp/documents/published_docs.php' },
      { label: 'ESTA — Technical Standards Program', url: 'https://tsp.esta.org/' },
      { label: 'OSHA — Walking-working surfaces', url: 'https://www.osha.gov/walking-working-surfaces' },
      { label: 'OSHA — Safety Management', url: 'https://www.osha.gov/safety-management' }
    ]
  })
];

const powerAwareness = {
  slug: 'production-infrastructure-power-awareness',
  title: 'Production Infrastructure: Power Awareness',
  tier: 'Production Infrastructure · Awareness',
  tierClass: 'course-tier-infrastructure',
  status: 'Review Build · No Electrical Authority',
  packet: 'Research Package 38 — Electrics Department Category: Power Systems for All Departments',
  description: 'Understand production power as shared infrastructure, recognize its parts and warning signs, preserve routes and access, and return every restricted action to qualified electrical personnel.',
  boundary: 'This awareness course authorizes no connection, disconnection, energization, testing, repair, protection change, grounding or bonding decision, service work, generator tie-in, or temporary-distribution design.',
  modules: [
    { name: 'A Shared Infrastructure Branch', lessons: [{ name: 'Electrics Serves Every Department', objective: 'Separate the lighting pathway from the production-power infrastructure that may serve lighting, audio, video, staging, backline, broadcast, vendors, and site operations.', blocks: [
      { type: 'callout', paragraphs: ['<strong>Lighting determines how light is produced and controlled. Electrics determines how production loads receive electrical service within the authorized system.</strong> Some crews combine the functions; others separate them by scale, contract, venue, or role.'] },
      { heading: 'Common consumers', bullets: ['Lighting fixtures and control', 'Audio amplification, processing, consoles, and stage systems', 'LED walls, processors, cameras, playback, and broadcast', 'Backline and instrument equipment', 'Stage machinery and automation interfaces', 'Production offices, vendors, catering, and site systems when assigned'] },
      { type: 'authority', paragraphs: ['Shared infrastructure creates shared dependencies. Each department owns its equipment intent; qualified electrics personnel own or coordinate the approved supply within their scope.'] }
    ] }] },
    { name: 'System Mental Model', lessons: [{ name: 'Trace Source to Department Load', objective: 'Recognize source, distribution, loads, protection, monitoring, shutdown, and strike as one system.', blocks: [
      { type: 'sequence', items: ['Approved source or venue service', 'Service interface and main distribution', 'Portable distribution layers and protection', 'Branch circuits and cable routes', 'Department loads', 'Monitoring and fault response', 'Controlled shutdown, removal, and strike'] },
      { heading: 'Awareness only', bullets: ['Source capacity and interface conditions are not casual choices.', 'Feeder, distro, disconnects, protection, specialized connectors, grounding, and bonding require qualified control.', 'A cable route and protector can affect public access and several departments.', 'One department change can affect the shared plan.'] }
    ] }] },
    { name: 'Recognize and Report', lessons: [{ name: 'Spot Conditions That Need Electrical Authority', objective: 'Identify visible damage, heat, water, access, protection, and route concerns without diagnosing or repairing them.', blocks: [
      { heading: 'Report immediately', bullets: ['Damaged, crushed, cut, exposed, or overheated cable and equipment', 'Water, moisture, rain, condensation, or wet-ground concern', 'Open, missing, defeated, or damaged covers and protective parts', 'Blocked distribution access or ventilation', 'Cable routes exposed to vehicles, doors, sharp edges, public traffic, or other damage', 'Unexpected odor, sound, heat, smoke, trip, loss, or intermittent behavior', 'Unlabeled or unfamiliar equipment and any request outside authorization'] },
      { type: 'stop', paragraphs: ['Do not open equipment, reset protection, tape damage, move live connections, disconnect an unfamiliar load, or decide that a wet or hot condition is acceptable. Secure the area only within your instruction and call the responsible authority.'] }
    ] }] },
    { name: 'Responsibility at the Interface', lessons: [{ name: 'Ask What Service the Department Needs', objective: 'Communicate department requirements without crossing into electrical design or approval.', blocks: [
      { type: 'columns', columns: [
        { heading: 'Department provides', bullets: ['Equipment list and operational need', 'Manufacturer input requirements', 'Location and schedule', 'Criticality and show consequences', 'Department contact and change notice'] },
        { heading: 'Qualified electrics coordinates', bullets: ['Available source and distribution plan', 'Load allocation and approved connections', 'Testing and verification', 'Energization and shutdown sequence', 'Electrical fault response', 'Venue, generator, vendor, and code interfaces'] }
      ] },
      { type: 'callout', paragraphs: ['A department may know exactly what its system needs and still lack authority to choose the source, distribution, protection, or connection method. Clear interface information is the goal.'] }
    ] }] },
    { name: 'Learning Ladder & Boundaries', lessons: [{ name: 'Keep Awareness, Competence, Credentials & Authorization Separate', objective: 'Place this course below portable-power technical work and entertainment-electrical leadership.', blocks: [
      { type: 'sequence', items: ['Power-awareness support', 'Supervised portable-distribution learning', 'Demonstrated portable-power competence', 'Broader entertainment-electrical competence', 'Lead and system authority inside employer and legal scope'] },
      { type: 'evidence', paragraphs: ['ETCP distinguishes Portable Power Distribution Technician from the broader Entertainment Electrician scope and bases credentials on experience. Crew Blueprint does not invent a mandatory credential order or treat online completion as either credential.'] },
      { type: 'authority', paragraphs: ['The next technical step requires formal instruction, supervised practice, employer authorization, current equipment procedures, and any applicable credential or license.'] }
    ] }] }
  ],
  quiz: [
    { question: 'Why is electrics a production-infrastructure branch?', options: ['It may serve loads across many departments', 'It belongs only to lighting', 'Every stagehand may connect it'], answer: 0, coaching: 'Power acts as a shared utility layer even when one department houses the crew organizationally.' },
    { question: 'A department knows its equipment needs. Does that automatically let it choose the power source and connection?', options: ['Yes', 'No; qualified electrics authority still controls the supply plan', 'Only indoors'], answer: 1, coaching: 'Equipment intent and electrical service authority are separate.' },
    { question: 'You find a wet distribution area. What should you do?', options: ['Dry it with a towel', 'Report and hold the affected area under site procedure', 'Reset the breaker'], answer: 1, coaching: 'Do not touch, open, move, or reset electrical equipment outside authorization.' },
    { question: 'What may an awareness learner do with feeder or distro?', options: ['Connect it after the quiz', 'Recognize, preserve access, report conditions, and follow assigned support limits', 'Repair labels'], answer: 1, coaching: 'Recognition and safe support do not equal technical authorization.' },
    { question: 'Does ETCP make PPDT a required prerequisite for every Entertainment Electrician?', options: ['Yes', 'No; Crew Blueprint should not invent that mandatory ladder', 'Only at venues'], answer: 1, coaching: 'The useful model is a competency progression, while credentials and employer paths remain separate.' }
  ],
  practice: { heading: 'Awareness walk-through only', paragraphs: ['Use a de-energized training display or a walk-through led by qualified electrical personnel. The learner identifies system layers, department interfaces, route controls, warning signs, and stop conditions without performing restricted work.'], checklist: ['Name source-to-load layers.', 'Identify the qualified electrical authority.', 'Trace one department requirement to its handoff.', 'Spot route, damage, heat, water, or access concerns.', 'State actions that remain prohibited.', 'Communicate one change through the correct route.'] },
  sources: [
    { label: 'ETCP — EE and PPDT scope of work', url: 'https://etcp.esta.org/certify/scopeofwork.html' },
    { label: 'ETCP — Portable Power Distribution Technician', url: 'https://etcp.esta.org/certify/certify_ppdt.html' },
    { label: 'ETCP — PPDT examination content', url: 'https://etcp.esta.org/certify/examination_ppdt.html' },
    { label: 'OSHA — Subpart S electrical eTool', url: 'https://www.osha.gov/etools/subpart-s' },
    { label: 'OSHA 1910.305 — Wiring methods', url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.305' },
    { label: 'OSHA 1910.306 — Specific-purpose equipment', url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.306' }
  ]
};

const productionBranch = {
  slug: 'production-coordination-career-branch',
  title: 'Production & Coordination Career Branch',
  tier: 'Cross-Functional Career Branch',
  tierClass: 'course-tier-production',
  status: 'Review Build · Track Orientation',
  packet: 'Research Package 39 — Production Department Category: Stage Management & Coordination',
  description: 'Compare stage management, production management, and venue/event operations, then choose a pathway without treating them as one automatic promotion ladder.',
  boundary: 'Cross-functional coordination does not grant structural, rigging, electrical, code, crowd-management, venue, craft, or union authority. Each track coordinates specialists and respects the authority map around the work.',
  modules: [
    { name: 'Three Related Professions', lessons: [{ name: 'Choose a Branch, Not a Universal Promotion', objective: 'Distinguish stage management, production management, and venue/event operations by their primary outcomes.', blocks: [
      { type: 'columns', columns: [
        { heading: 'Stage management', bullets: ['Rehearsal and performance process', 'Cues and show continuity', 'Performer, crew, and backstage communication', 'Production paperwork and change tracking'] },
        { heading: 'Production management', bullets: ['Technical advance and resource plan', 'Labor, equipment, schedule, budget, and vendors', 'Department dependencies', 'Load-in, show, strike, and technical closeout'] },
        { heading: 'Venue/event operations', bullets: ['Client and facility coordination', 'Guest, security, public safety, parking, and building operations', 'Permits, staffing, event plans, estimates, and settlement', 'Venue readiness and post-event reporting'] }
      ] },
      { type: 'callout', paragraphs: ['These functions overlap on small productions and separate on larger ones. Moving from stagehand work into any one of them means building a new discipline, not merely gaining seniority.'] }
    ] }] },
    { name: 'Stage Management Track', lessons: [{ name: 'Protect the Process and Show Continuity', objective: 'Map foundation, assistant, stage-manager, and production-stage-manager competencies without claiming technical-department authority.', blocks: [
      { heading: 'Foundation', bullets: ['Backstage vocabulary and communication chain', 'Rehearsal and performance process', 'Paperwork, standbys, cues, and emergency communication'] },
      { heading: 'Intermediate', bullets: ['ASM-level task ownership', 'Scene and changeover coordination', 'Deck traffic, performer, prop, and costume tracking', 'Reports and department coordination'] },
      { heading: 'Advanced', bullets: ['Rehearsal leadership and production communication architecture', 'Cue systems and show continuity', 'Multiple assistants and decks', 'Disruption and emergency response within role'] },
      { type: 'authority', paragraphs: ['Stage managers coordinate timing, information, people, cues, and continuity. They do not automatically redesign power, rigging, audio, video, scenery, or structural systems.'] }
    ] }] },
    { name: 'Production Management Track', lessons: [{ name: 'Integrate Technical Requirements and Resources', objective: 'Follow the production lifecycle from intent and advance through closeout while preserving department authority.', blocks: [
      { type: 'sequence', items: ['Production intent and client or tour requirement', 'Technical advance and constraint review', 'Labor, equipment, vendor, budget, and schedule plan', 'Department plans and dependency map', 'Load-in coordination and readiness', 'Show operations and change control', 'Strike, restoration, settlement, and post-event record'] },
      { heading: 'Core artifacts', bullets: ['Advance question set', 'Responsibility matrix', 'Critical-path schedule', 'Labor and equipment plan', 'Change and approval log', 'Integrated readiness report', 'Post-event closeout'] },
      { type: 'callout', paragraphs: ['Production managers need enough technical literacy to ask the right question and see a dependency. Department heads retain deeper craft authority inside their systems.'] }
    ] }] },
    { name: 'Venue / Event Operations Track', lessons: [{ name: 'Coordinate the Public-Assembly Environment', objective: 'Integrate client, facility, guest, security, public-safety, staffing, vendor, financial, and venue-readiness needs.', blocks: [
      { heading: 'Operational domains', bullets: ['Client advance and contract or policy requirements', 'Facility capabilities and limits', 'Guest, accessibility, security, public-safety, parking, and building operations', 'Permits, event plans, diagrams, vendor and staffing orders', 'Operations meetings and readiness inspections', 'Estimates, settlement, billing, incident and post-event reports'] },
      { type: 'authority', paragraphs: ['Venue and event management can hold broad operational authority without replacing an AHJ, public-safety agency, qualified technician, engineer, department head, or labor representative.'] }
    ] }] },
    { name: 'Shared Coordination Competencies', lessons: [{ name: 'Build the Skills Every Track Shares', objective: 'Practice accurate communication, documentation, anticipation, status, role boundaries, stakeholder work, and escalation.', blocks: [
      { heading: 'Shared skills', bullets: ['Clear written and verbal communication', 'Accurate status and schedule awareness', 'Document and information control', 'Responsibility and authority mapping', 'Stakeholder and vendor coordination', 'Anticipatory problem solving', 'Safety communication and escalation appropriate to role', 'Coordinating people with deeper craft expertise'] },
      { type: 'practice', heading: 'Track-choice exercise', paragraphs: ['Build three responsibility maps for the same event: one from the stage-management view, one from production management, and one from venue/event operations. Mark where the roles share information and where authority stays separate.'] }
    ] }] },
    { name: 'Integrated Scenario', lessons: [{ name: 'Coordinate Without Becoming Every Expert', objective: 'Route a rehearsal change, technical delay, venue constraint, and public-interface problem through the three tracks and technical authorities.', blocks: [
      { heading: 'Scenario', paragraphs: ['A rehearsal change affects cue timing and backstage traffic. A late video delivery threatens the technical schedule. Venue operations must open a public area on time, while one exit route conflicts with unfinished work.'] },
      { type: 'sequence', items: ['Stage management updates cues, performers, deck traffic, and show paperwork.', 'Production management maps technical dependencies, labor, equipment, and schedule effects.', 'Venue/event operations protects public, facility, staffing, security, and client commitments.', 'Technical leads decide system-specific readiness inside their authority.', 'All three tracks share one visible constraint and escalation record.', 'The assigned event authority makes the integrated hold or release decision.'] },
      { type: 'stop', paragraphs: ['Do not solve coordination pressure by overriding a technical hold, venue rule, public-safety requirement, design authority, or labor function outside the role.'] }
    ] }] }
  ],
  quiz: [
    { question: 'Is stage management simply the senior level of stagehand work?', options: ['Yes', 'No; it is a distinct discipline with its own progression', 'Only on tours'], answer: 1, coaching: 'A stagehand may enter stage management, but that move requires new process, cue, documentation, and communication competence.' },
    { question: 'What does production management primarily integrate?', options: ['Only cues', 'Technical advance, labor, equipment, budget, schedule, vendors, and department dependencies', 'Only guest services'], answer: 1, coaching: 'Production management coordinates technical execution across the production lifecycle.' },
    { question: 'What commonly makes venue/event management broader?', options: ['Client, facility, guest, security, public-safety, permits, staffing, and settlement responsibilities', 'Console programming', 'Rigging calculations'], answer: 0, coaching: 'Venue/event work covers the whole public-assembly operation.' },
    { question: 'Does cross-functional authority equal highest technical expertise?', options: ['Yes', 'No; coordinators rely on department and specialist authority', 'Only in small events'], answer: 1, coaching: 'Integration and craft authority are different responsibility types.' },
    { question: 'How should the branch appear in a career map?', options: ['One required ladder above every department', 'Parallel stage-management, production-management, and venue/event tracks', 'Inside lighting'], answer: 1, coaching: 'The tracks interact but lead to different professional outcomes.' }
  ],
  practice: { heading: 'Choose and test a track', paragraphs: ['Complete a role-shadow, interview, or reviewed event scenario in the selected track. Build artifacts appropriate to that profession and get feedback from someone currently performing the work.'], checklist: ['Choose the intended track and explain why.', 'Build its responsibility map.', 'Create two core artifacts from that track.', 'Identify technical and venue authority boundaries.', 'Run one changed-event scenario.', 'Record reviewer feedback and the next experience step.'] },
  sources: [
    { label: 'Stage Managers’ Association', url: 'https://www.stagemanagers.org/' },
    { label: 'IAVM — Associate Event Production Manager role evidence', url: 'https://member.iavm.org/cv5/cgi-bin/JobBoard.dll/Info?CONTRACTNUM=59021&WRP=JobEdit.htm' },
    { label: 'IAVM — Event Manager role evidence', url: 'https://member.iavm.org/cv5/cgi-bin/JobBoard.dll/Info?CONTRACTNUM=59211&WRP=JobEdit.htm' },
    { label: 'IAVM — Production Manager role evidence', url: 'https://member.iavm.org/cv5/cgi-bin/JobBoard.dll/Info?CONTRACTNUM=59238&WRP=JobEdit.htm' }
  ]
};

export const advancedCourses = [...systemCourses, powerAwareness, productionBranch];
