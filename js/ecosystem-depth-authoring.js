(() => {
  const eco = window.CBPEcosystem;
  if (!eco || !Array.isArray(eco.courses)) return;

  const VERSION = '2026-08-31.1';

  const PLAYBOOKS = {
    'D-SHF': {
      name: 'stagehand field workflow',
      purpose: 'turn an assignment into a safe, observable work cycle: confirm the task, identify the department owner, move through the assigned work, report exceptions, and hand the area or item back cleanly',
      failure: 'an instruction, route, owner, condition, or release state becomes unclear',
      handoff: 'pause the affected task, preserve the current state, and report what changed to the lead or department owner rather than improvising authority',
      visual: ['annotated field-workflow map', 'assignment-to-report-back decision flow', 'jobsite handoff example']
    },
    'D-SHP': {
      name: 'rental-shop and warehouse workflow',
      purpose: 'keep equipment identity, condition, location, paperwork state, and responsibility synchronized from receiving through prep, staging, dispatch, return, and quarantine',
      failure: 'the physical item no longer matches its label, paperwork, condition status, or assigned location',
      handoff: 'stop the affected movement or prep step, segregate or mark the discrepancy under shop policy, and route it to the responsible shop lead; powered-equipment operation remains employer-trained and authorized work',
      visual: ['shop lifecycle map', 'inventory/condition-state flow', 'staging and exception-handoff example']
    },
    'D-LTG': {
      name: 'lighting system workflow',
      purpose: 'connect fixture, power-boundary, data/control, documentation, show-file, and handoff concepts so a learner can reason about where information and responsibility move through a lighting system',
      failure: 'fixture identity, addressing, control path, documentation, or authority state does not agree with the expected system map',
      handoff: 'preserve the known-good state and escalate to the assigned lighting lead or qualified specialist; this course does not authorize energized electrical work, high access, rigging, laser operation, or live-network changes',
      visual: ['lighting system one-line', 'control/data relationship diagram', 'show-file/document handoff example']
    },
    'D-AUD': {
      name: 'audio system workflow',
      purpose: 'follow a signal conceptually from source through patching, console processing/routing, distribution, loudspeaker or destination systems, networking, RF, and communications interfaces',
      failure: 'the expected source, destination, clock/reference, routing, or ownership state cannot be confirmed',
      handoff: 'hold the current state and report the symptom and last verified point to the assigned audio lead; system tuning, high-output deployment, RF coordination, live-network administration, rigging, and electrical work remain role-controlled',
      visual: ['audio signal-flow map', 'console/routing relationship diagram', 'fault-isolation handoff example']
    },
    'D-VID': {
      name: 'video, LED, projection, and broadcast workflow',
      purpose: 'connect source, transport, processing, display, camera, playback, timing/reference, network, and documentation concepts without confusing systems literacy with specialist operation',
      failure: 'format, timing, destination, processor state, content version, physical display state, or responsibility boundary is inconsistent',
      handoff: 'preserve the current routing/content state and report the last verified stage to the assigned video lead; rigging, high access, temporary power, live switching, network administration, and model-specific service remain externally controlled',
      visual: ['video signal-chain diagram', 'processor/display relationship map', 'content/routing handoff example']
    },
    'D-STG': {
      name: 'staging and scenic workflow',
      purpose: 'read component identity, drawings, labels, material state, deck/scenic interfaces, movement cues, and shop-to-show handoffs while separating support work from structural acceptance',
      failure: 'a component, drawing revision, fit, movement path, finish, or acceptance state does not match the assigned plan',
      handoff: 'stop the affected support task and escalate the discrepancy to the scenic/staging lead; structural engineering, powered machinery, rigging, powered-tool authorization, and final acceptance remain qualified-role work',
      visual: ['scenic/staging component map', 'drawing-to-build workflow', 'movement/acceptance handoff example']
    },
    'D-RIG': {
      name: 'rigging body-of-knowledge awareness',
      purpose: 'recognize rigging roles, vocabulary, documentation, engineering interfaces, inspection/rescue responsibilities, and qualification boundaries without teaching physical rigging procedures',
      failure: 'load information, documentation, inspection state, role qualification, or engineered instruction is missing, contradictory, or outside the learner’s assigned scope',
      handoff: 'do not perform or direct the physical rigging task; route the issue to the qualified rigger, engineer, employer, venue, or other controlling authority',
      visual: ['rigging role-and-document map', 'engineering/approval interface diagram', 'qualification/escalation decision flow']
    },
    'D-ELC': {
      name: 'temporary production power body-of-knowledge awareness',
      purpose: 'recognize electrical roles, conceptual distribution architecture, documentation, protective-system vocabulary, and acceptance boundaries without teaching energized work',
      failure: 'system identity, documentation, protective state, qualification, or acceptance responsibility is unknown or contradictory',
      handoff: 'do not energize, alter, test, repair, or accept the system; escalate to the qualified electrical authority designated by the employer, venue, or jurisdiction',
      visual: ['conceptual power-system map', 'role/authority decision flow', 'documentation and acceptance interface']
    },
    'D-BKL': {
      name: 'backline workflow',
      purpose: 'coordinate instrument-system identity, stage placement, changeovers, labeling, artist-tech communication, and support handoffs without claiming instrument-tech authority',
      failure: 'instrument identity, artist setting, connection ownership, changeover state, or requested adjustment is unclear',
      handoff: 'preserve the artist/tech state and escalate to the assigned backline or artist technician; tuning, repair, internal service, and artist-specific configuration remain specialist work',
      visual: ['backline stage-interface map', 'changeover state flow', 'artist-tech handoff example']
    },
    'D-PRP': {
      name: 'props workflow',
      purpose: 'track ordinary props through identification, preset, handoff, run position, return, reset, and storage while preserving special-prop boundaries',
      failure: 'a prop is missing, damaged, misidentified, in the wrong preset state, or has a hazard/specialty characteristic outside ordinary run support',
      handoff: 'stop the affected handoff and notify the props lead; hazardous, weapon-like, chemical, pyrotechnic, modified, or otherwise special props remain qualified/specialist-controlled',
      visual: ['prop lifecycle map', 'preset/return tracking flow', 'exception-handoff example']
    },
    'D-WRD': {
      name: 'wardrobe workflow',
      purpose: 'track garments and accessories through identification, preset, change support, worn/dirty/repair states, return, and reset while protecting privacy and role boundaries',
      failure: 'an item, change cue, condition state, fit concern, care instruction, or privacy boundary is uncertain',
      handoff: 'preserve the item and performer’s privacy, then escalate to the wardrobe lead; alterations, chemical treatment, specialty cleaning, repair, and construction remain assigned wardrobe work',
      visual: ['wardrobe lifecycle map', 'change/preset state flow', 'condition/privacy handoff example']
    },
    'D-CLD': {
      name: 'crew leadership workflow',
      purpose: 'translate production requirements into bounded assignments, communication loops, labor awareness, escalation paths, and closeout without confusing coordination with technical authorization',
      failure: 'scope, staffing, priority, timing, authority, or a technical acceptance decision is unclear',
      handoff: 'clarify ownership, document the issue, and escalate technical/legal/safety decisions to the proper authority instead of using supervisory position as substitute qualification',
      visual: ['crew command map', 'assignment/escalation flow', 'labor handoff example']
    },
    'D-SMG': {
      name: 'stage-management workflow',
      purpose: 'coordinate show information, schedules, documentation, communication, cue context, changes, and performer/department interfaces through controlled information flow',
      failure: 'a cue, schedule, version, contact path, readiness state, or authority boundary is ambiguous',
      handoff: 'freeze the ambiguous information path, identify the controlling document/person, and resolve the discrepancy before representing the state as confirmed',
      visual: ['stage-management information map', 'cue/change communication flow', 'show-document handoff example']
    },
    'D-PMG': {
      name: 'production-management workflow',
      purpose: 'coordinate advance information, responsibilities, labor, vendors, schedules, budgets, changes, venue interfaces, risk ownership, and closeout through documented management controls',
      failure: 'scope, responsibility, cost, schedule, vendor commitment, approval, or technical acceptance state lacks a clear owner',
      handoff: 'record the open issue, assign or identify the decision owner, and escalate legal, engineering, safety, financial-signing, or specialist technical decisions rather than assuming authority from the PM role',
      visual: ['production responsibility map', 'advance/change-control flow', 'closeout decision example']
    },
    'D-VEN': {
      name: 'venue operations workflow',
      purpose: 'coordinate house rules, access, schedules, departments, public interfaces, emergency pathways, client needs, and visiting-production responsibilities',
      failure: 'house policy, access, emergency responsibility, technical ownership, public-route condition, or visiting-production expectation conflicts or is unclear',
      handoff: 'preserve venue/production boundaries and resolve the issue through the designated house and production contacts before proceeding',
      visual: ['venue responsibility map', 'house/visitor interface flow', 'emergency/escalation contact example']
    },
    'D-SHC': {
      name: 'show-control systems literacy',
      purpose: 'understand how cues, triggers, time references, device states, show files, backups, change control, and operator responsibilities interact across integrated systems',
      failure: 'trigger source, timing reference, destination state, show-file version, interlock, or change approval cannot be confirmed',
      handoff: 'do not improvise live control or bypass safety logic; preserve the system state and escalate to the appointed show-control/system operator or engineer',
      visual: ['show-control architecture map', 'trigger/timecode flow', 'change-control decision example']
    },
    'D-AUT': {
      name: 'automation interface awareness',
      purpose: 'recognize automation roles, show-file/programming context, machinery states, exclusion concepts, interlocks, communications, and change-control boundaries without teaching operation',
      failure: 'machine state, programmed state, interlock, exclusion zone, cue ownership, or operator authority is uncertain',
      handoff: 'do not operate, program, bypass, reset, or maintain machinery; maintain separation and notify the appointed automation operator/technician or controlling safety authority',
      visual: ['automation role/state map', 'cue-to-machine conceptual flow', 'exclusion/interlock escalation example']
    },
    'D-CAM': {
      name: 'camera and broadcast engineering workflow',
      purpose: 'connect camera chain, image controls, tally/comms, reference/timing, transport, routing, monitoring, documentation, and engineering roles',
      failure: 'camera identity, reference, return/tally, route, image-control ownership, or engineering state is unclear',
      handoff: 'report the last verified signal/reference state to the appointed camera/broadcast engineer; live switching, shading, network administration, rigging, and specialist service remain role-controlled',
      visual: ['camera-chain map', 'reference/tally/comms relationship', 'engineering handoff example']
    },
    'D-RF': {
      name: 'RF coordination systems literacy',
      purpose: 'recognize spectrum use, device classes, interference relationships, coordination workflow, documentation, monitoring, and regulatory/role boundaries',
      failure: 'frequency assignment, device identity, coordination ownership, interference source, or regulatory applicability is uncertain',
      handoff: 'do not claim coordinator or regulatory authority; preserve the observed data and escalate to the appointed RF coordinator or responsible licensee/authority',
      visual: ['RF coordination workflow map', 'spectrum/device relationship diagram', 'interference escalation example']
    },
    'D-SFX': {
      name: 'special systems interface awareness',
      purpose: 'recognize when lasers, flame, pyrotechnics, cryogenic effects, atmospheric systems, performer-flying, or other specialty systems introduce distinct operators, controls, permits, exclusion zones, and authorities',
      failure: 'a specialty-system state, operator, permit/approval, exclusion boundary, or interface responsibility is not explicit',
      handoff: 'do not operate, modify, test, bypass, or direct the specialty system; clear the interface and notify the qualified operator or controlling authority',
      visual: ['special-systems role map', 'permit/authority interface flow', 'exclusion/handoff example']
    },
    'D-CAR': {
      name: 'career and employment workflow',
      purpose: 'translate work history, skills, records, labor-market structures, hiring documents, union/credential pathways, and professional development into verifiable career decisions',
      failure: 'a credential, worker-status claim, hiring requirement, compensation term, or experience record is assumed rather than verified',
      handoff: 'verify the controlling employer, union, credential body, tax/legal authority, or written agreement before treating a career or classification assumption as fact',
      visual: ['career-path map', 'credential/status distinction flow', 'records-to-opportunity example']
    },
    'D-SEC': {
      name: 'sector-transfer overlay',
      purpose: 'apply canonical production skills to a specific environment while identifying what changes in access, schedule, audience/public interface, venue rules, weather, scale, or technical workflow',
      failure: 'a learner carries a habit from one sector into another without checking the local venue, employer, production, or jurisdictional rules',
      handoff: 'identify the local controlling rule and responsible lead before transferring a procedure or assumption across sectors',
      visual: ['sector-difference map', 'transfer-check decision flow', 'local-rule handoff example']
    }
  };

  const TOPIC_RULES = [
    [/chain of command|role|responsibil|authority/i, 'Map who owns the decision, who supplies information, who performs the work, and who accepts the result. Job title alone does not transfer technical, legal, or safety authority.'],
    [/handoff|report|communication|readback|brief/i, 'Treat the handoff as a state transfer: identify the item/system, state what is complete, name any exception, and confirm who now owns the next decision.'],
    [/inventory|label|asset|barcode|tracking|case/i, 'Identity control links the physical item to its record. A mismatch between label, contents, condition, or location is an exception to resolve rather than something to silently normalize.'],
    [/receiv|return|dispatch|prep|pull|staging|warehouse|shop/i, 'Use a lifecycle view: incoming state, verification, preparation, staging, release, return, discrepancy handling, and final disposition each need a clear record and owner.'],
    [/dock|truck|load|cargo|ramp/i, 'Separate pedestrian/support awareness from driver, powered-equipment, load-plan, and securement authority. Confirm the movement zone and assigned handoff before entering or changing the flow.'],
    [/photometr|color|vision|source engine|fixture science|optical/i, 'Use the concept to explain what the fixture is intended to produce or communicate, while keeping measurement, calibration, internal service, and hazardous optical work inside the appropriate specialist role.'],
    [/fixture|luminaire|lamp|led engine/i, 'Identify the fixture by function, major external interfaces, mode/context, and documentation—not by appearance alone. Model-specific internals and service procedures remain manufacturer/qualified-tech territory.'],
    [/electrical|power|connector|voltage|current|ground|protect/i, 'Keep conceptual electrical literacy separate from energized work. The learner should recognize system purpose, labels, documentation, and stop/escalate conditions without making live connections or acceptance decisions.'],
    [/dmx|rdm|sacn|art-net|rdmnet|node|universe|address/i, 'Think in layers: control data has a source, addressing/identity model, transport path, node/interface, and destination. A data-path problem should be described by the last verified layer before any live configuration change is attempted.'],
    [/console|show file|cue|tracking|preset|group|playback|patch/i, 'Separate data structure from operator authority. Patch, groups/presets, cue relationships, tracking, playback, versions, and backups are conceptual objects whose live editing remains assigned to the show operator.'],
    [/gdtf|mvr|plot|lightwright|previs|documentation|drawing|schedule|one-line/i, 'Documentation is a coordination interface, not decoration. Read title/revision/scope, identify what system state the document represents, and resolve conflicts before treating it as current.'],
    [/signal flow|source|destination|patch/i, 'Trace identity and direction through defined stages. At each stage, distinguish the signal or item itself from the equipment, route, operator, and documentation that describe it.'],
    [/microphone|mic|di|input|source/i, 'Classify the source and its intended destination before discussing handling or routing. Source identity, ownership, connector/interface, and level/context are separate questions.'],
    [/bus|matrix|mix|console architecture|routing/i, 'Use buses, matrices, channels, outputs, and processing blocks as a logical routing model. Live changes belong to the appointed console/system operator.'],
    [/acoustic|coverage|frequency|wavelength|phase|polarity|measurement|pa/i, 'Connect the physical concept to observed system behavior without turning the lesson into deployment or tuning instructions. Measurement and high-output system decisions remain qualified-role work.'],
    [/clock|aes67|dante|network|multicast|qos|ptp|ip/i, 'Treat networked media as endpoints, flows, timing/reference, transport, and managed infrastructure. Describe the dependency and last known-good state; do not turn conceptual literacy into switch or live-network administration authority.'],
    [/rf|spectrum|frequency|wireless|interference/i, 'Separate device operation from spectrum coordination. Record device identity, assigned information, observed interference, and responsible coordinator instead of inventing a frequency plan.'],
    [/intercom|comms|partyline|matrix comm/i, 'Communication systems have stations/endpoints, channels or keys, routing, power/network dependencies, and user roles. Troubleshooting starts by stating which communication path is expected and what is actually observed.'],
    [/led|panel|tile|cabinet|processor|receiver card/i, 'Separate physical display hardware from processing/configuration. Identify component role, orientation/identity, signal/power interfaces, and acceptance owner; rigging, power, and model-specific service remain external.'],
    [/sdi|hdmi|format|resolution|frame|transport|reference|genlock/i, 'Describe the signal by source, format/timing, transport, processing stage, and destination. A compatible connector does not prove compatible signal state.'],
    [/switch|scale|screen management|processor|routing/i, 'Processing changes the relationship between sources, canvases, outputs, and destinations. Preserve version/routing state and escalate live changes to the assigned operator.'],
    [/projector|projection|throw|lens|screen|blend|geometry/i, 'Use projection concepts to reason about source, lens/throw relationship, surface, image geometry, environment, and processing. High access, rigging, power, laser-source service, and model-specific alignment remain controlled.'],
    [/camera|tally|return|shader|ccu|broadcast/i, 'Map the camera chain from camera/head through control/reference, transport, routing, monitoring, and program interfaces. Operator, shading, switching, and engineering authority remain assigned roles.'],
    [/media server|playback|codec|graphics|key.?fill|timeline|content/i, 'Treat media as versioned assets with timing, format, canvas/output, and destination requirements. Live cueing, show-control programming, and proprietary configuration remain operator-controlled.'],
    [/av.?over.?ip|st 2110|network video/i, 'Model the system as senders/receivers or flows, timing, bandwidth, multicast/QoS concepts, redundancy, and managed infrastructure. Commissioning and live network changes remain specialist-controlled.'],
    [/material|finish|fabricat|scenic/i, 'Relate material identity and finish state to the drawing/specification and assigned handling workflow. Fabrication, chemical use, powered tools, structural decisions, and repairs remain separately authorized.'],
    [/platform|deck|riser|stage component/i, 'Recognize component identity, intended interface, documentation, visible condition, and acceptance owner. Support literacy does not grant structural assembly or acceptance authority.'],
    [/movement|changeover|wagon|deck workflow/i, 'Plan conceptually around start state, path, destination, cue/permission, communication, and end-state confirmation. Powered movement and machinery require separate authorization.'],
    [/automation|machinery|interlock|exclusion/i, 'Treat machine state, operator role, programmed state, safety controls, and exclusion areas as distinct. The learner does not operate, reset, bypass, program, or maintain machinery.'],
    [/rigging|hoist|load|point|bridle|motor/i, 'Use vocabulary only to understand documents, roles, and questions. Do not convert terminology into physical rigging instruction, load calculation authority, or qualification.'],
    [/engineering|calculation|structural|acceptance/i, 'Engineering/acceptance documents define decisions that belong to qualified authorities. The learner should know how to recognize the document and escalate conflicts, not reproduce the engineering judgment.'],
    [/rescue|inspection/i, 'Recognize that inspection and rescue responsibilities require role-specific plans, competence, equipment, and employer/site controls. This lesson covers interfaces and escalation, not procedures.'],
    [/instrument|backline|amp|keyboard|drum|guitar/i, 'Track instrument-system identity, stage location, artist/tech ownership, changeover state, and support interfaces. Settings, tuning, service, and repair remain with the appropriate artist/backline technician.'],
    [/prop|preset|run table/i, 'Maintain identity and state from preset through use, return, reset, and storage. Special or hazardous characteristics change the authority path and require the responsible props/safety lead.'],
    [/wardrobe|garment|costume|change|laundry/i, 'Track item identity, performer assignment, preset/change state, condition, privacy, and return state. Care labels and wardrobe authority control treatment or repair decisions.'],
    [/labor|staff|crew call|headcount/i, 'Treat labor as a planned resource with role, call window, dependency, supervision, change, and actual-hours records. Staffing does not automatically grant technical qualification.'],
    [/advance|vendor|budget|scope|schedule|milestone|closeout|change log/i, 'Use a management-control loop: establish the baseline, name the owner, record assumptions, capture changes, resolve approvals, and reconcile the final state.'],
    [/cue|timecode|trigger|show control/i, 'Distinguish cue intent, trigger source, timing/reference, receiving device, operator state, and change approval. Integrated behavior is not safe to infer from one subsystem alone.'],
    [/venue|house|client|public|guest/i, 'Identify which rule or responsibility belongs to the house, visiting production, client, contractor, or public-facing operation, then use the designated contact path when they conflict.'],
    [/emergency|egress|accessib|route|ada/i, 'Preserve designated emergency and accessible pathways, report obstructions or conflicts, and defer compliance/acceptance decisions to the responsible venue/employer authority.'],
    [/heat|weather|wind|lightning|outdoor/i, 'Treat changing conditions as a trigger to consult the employer/site plan and responsible authority. Do not invent universal thresholds or continue because a prior condition was acceptable.'],
    [/credential|union|hiring|resume|career|record|1099|employee|contractor/i, 'Separate evidence of experience, employer classification, union status, credentials, licenses, and authorization. Each has a different issuer and legal or organizational meaning.'],
    [/laser|pyro|flame|cryo|special effect|performer flying/i, 'Recognize the specialist system, operator, exclusion/permit interface, and stop/escalate boundary. No operation, testing, bypass, or setup procedure is taught here.']
  ];

  function playbook(course) {
    return PLAYBOOKS[course.domain] || PLAYBOOKS['D-SHF'];
  }

  function topicGuidance(course, topic, index) {
    const p = playbook(course);
    const hit = TOPIC_RULES.find(([re]) => re.test(topic));
    const core = hit ? hit[1] : `Place “${topic}” inside the ${p.name} system: identify what it represents, what information or physical state it depends on, and which role owns the next decision.`;
    const relation = index % 3 === 0
      ? `Connect it to the upstream input and downstream handoff instead of memorizing it as an isolated term.`
      : index % 3 === 1
        ? `Use documentation, labels, observed state, and the assigned chain of command to verify it before acting on an assumption.`
        : `When the expected state and observed state diverge, describe the mismatch precisely and preserve the last known-good state.`;
    return `${core} ${relation} Course boundary: ${p.handoff}`;
  }

  function objectives(course) {
    const p = playbook(course);
    const t = course.topics || [];
    return [
      `Explain how ${t[0] || 'the first course concept'} and ${t[1] || 'the next course concept'} fit inside the ${p.name} system.`,
      `Trace a realistic workflow across ${t[2] || 'an upstream state'}, ${t[3] || 'a working state'}, and ${t[4] || 'a downstream handoff'} without skipping ownership or verification.`,
      `Recognize a mismatch involving ${t[5] || 'system state'} and state what evidence should be preserved before escalation.`,
      `Distinguish course knowledge from employer appointment, legal authority, technical qualification, certification, or final acceptance: ${course.boundary}`
    ];
  }

  function scenario(course) {
    const p = playbook(course);
    const t = course.topics || [];
    const a = t[Math.min(2, t.length - 1)] || 'the expected system state';
    const b = t[Math.min(5, t.length - 1)] || 'the downstream handoff';
    return `During a live production workflow, the expected state for ${a} does not agree with the information or condition you can verify at ${b}. ${p.failure}. Do not “fix” the ambiguity by assumption. Identify the last verified state, preserve the affected configuration/item/work area, and use the assigned handoff: ${p.handoff}`;
  }

  function claims(course) {
    const p = playbook(course);
    const t = course.topics || [];
    return [
      { id: 'system', classification: 'crew_blueprint_framework', text: `${course.title} is taught as a connected workflow rather than a vocabulary list: ${p.purpose}.` },
      { id: 'verification', classification: 'crew_blueprint_framework', text: `For ${t[0] || 'the course system'}, the learner should distinguish documented/verified state from assumption and identify the role that owns the next decision.` },
      { id: 'failure', classification: 'crew_blueprint_framework', text: `A mismatch involving ${t[3] || 'system state'} is a reason to preserve the last known-good state and escalate, not evidence that the learner should extend authority.` },
      { id: 'boundary', classification: 'safety_boundary', text: course.boundary }
    ];
  }

  function quiz(course) {
    const p = playbook(course);
    const t = course.topics || [];
    const A = t[0] || 'the first system concept';
    const B = t[2] || 'the workflow state';
    const C = t[4] || 'the downstream interface';
    const D = t[6] || 'the later workflow state';
    return [
      {
        text: `When reasoning about ${A}, what is the strongest Crew Blueprint approach?`,
        options: [
          `Identify its role in the system, verify the relevant state/documentation, and name who owns the next decision.`,
          `Treat the term as proof that you are authorized to perform every task associated with it.`,
          `Ignore upstream and downstream dependencies if the equipment or paperwork looks familiar.`,
          `Replace employer or venue procedure with the course description.`
        ],
        answer: 0,
        rationale: `${A} is useful only when placed inside a verified workflow and authority model. ${p.handoff}`
      },
      {
        text: `The expected state for ${B} conflicts with what you can verify. What should happen first?`,
        options: [
          `Preserve the last known-good state, describe the mismatch, and use the assigned escalation path.`,
          `Change the system until the result looks plausible.`,
          `Assume the newest-looking label, file, or setup is authoritative.`,
          `Continue so the schedule is not delayed, then mention it afterward.`
        ],
        answer: 0,
        rationale: `Mismatch handling is part of professional system literacy. The course teaches evidence, state preservation, and handoff—not improvisation.`
      },
      {
        text: `Why does this course connect ${C} with ${D}?`,
        options: [
          `Because production systems are interdependent; a downstream state can depend on upstream identity, routing, documentation, timing, or acceptance.`,
          `Because every worker has authority over both topics after reading the course.`,
          `Because the two topics always use identical procedures across employers and products.`,
          `Because documentation and role ownership are unnecessary once the relationship is understood.`
        ],
        answer: 0,
        rationale: `The connection is a reasoning model. Exact procedures and authority still depend on the employer, venue, product, qualified role, or controlling rule.`
      },
      {
        text: `Which statement best describes the authority boundary for ${course.title}?`,
        options: [
          course.boundary,
          `Passing the quiz grants independent jobsite authority for the entire domain.`,
          `Course completion replaces employer training, appointment, certification, licensure, or qualified-person requirements.`,
          `A learner may bypass a responsible lead whenever they understand the underlying theory.`
        ],
        answer: 0,
        rationale: `The stated boundary is part of the competency. Knowledge, observed practice, employer authorization, external certification, and legal authority are separate evidence states.`
      },
      {
        text: `A lead asks for a status update involving ${A}. Which response demonstrates the intended professional standard?`,
        options: [
          `State what is verified, what remains uncertain, any exception you observed, and who currently owns the next action.`,
          `Report the expected result as complete even if you did not verify it.`,
          `Give a broad technical explanation instead of answering the actual state question.`,
          `Take over the next specialist step so the handoff is unnecessary.`
        ],
        answer: 0,
        rationale: `A useful handoff separates known state from assumption and preserves ownership. ${p.handoff}`
      }
    ];
  }

  function mediaPlan(course) {
    const p = playbook(course);
    const t = course.topics || [];
    const slug = course.id.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
    return [
      {
        mediaId: `MP-${slug}-01`,
        type: 'diagram',
        title: `${course.title}: system map`,
        purpose: `Show how ${t.slice(0, 4).join(', ')} relate without implying operational authority.`,
        textFallback: `Text-only flow describing the relationship among ${t.slice(0, 4).join(', ')} and the responsible handoff points.`,
        status: 'planned_owner_review',
        safetyCritical: ['D-RIG','D-ELC','D-AUT','D-SFX'].includes(course.domain)
      },
      {
        mediaId: `MP-${slug}-02`,
        type: 'decision_flow',
        title: `${course.title}: verify / stop / escalate`,
        purpose: `Visualize the decision path when ${p.failure}.`,
        textFallback: `Verify the expected state; if evidence agrees, continue only within assignment; if evidence conflicts or authority is unclear, preserve state and escalate through the assigned lead.`,
        status: 'planned_owner_review',
        safetyCritical: true
      },
      {
        mediaId: `MP-${slug}-03`,
        type: 'annotated_example',
        title: `${course.title}: field or document interface`,
        purpose: `Provide a rights-cleared example for ${t.slice(-3).join(', ')} with labels that distinguish observation from acceptance/authorization.`,
        textFallback: `Annotated-example description identifying the observed elements, the information each carries, and which decisions remain with the responsible role.`,
        status: 'planned_rights_and_practitioner_review',
        safetyCritical: ['D-RIG','D-ELC','D-STG','D-AUT','D-SFX','D-SHP'].includes(course.domain)
      }
    ];
  }

  const enriched = [];
  for (const course of eco.courses) {
    if (course.maturity && course.maturity !== 'research_foundation') continue;
    const details = (course.topics || []).map((topic, index) => topicGuidance(course, topic, index));
    course.objectives = objectives(course);
    course.details = details;
    course.scenario = scenario(course);
    course.quiz = quiz(course);
    course.claims = claims(course);
    course.mediaPlan = mediaPlan(course);
    course.sourceData = 'ecosystem-depth-authoring.js';
    course.maturity = 'authored_depth_v1';
    course.authoringVersion = VERSION;
    course.reviewState = 'research_backed_practitioner_and_learner_review_pending';
    enriched.push(course.id);
  }

  window.CBPDepthAuthoring = Object.freeze({
    version: VERSION,
    enrichedCount: enriched.length,
    enrichedCourseIds: Object.freeze(enriched.slice()),
    plannedMediaBriefs: enriched.length * 3,
    note: 'Depth-v1 authoring adds course-specific objectives, topic explanations, failure scenarios, assessments, claim checkpoints, and planned media briefs. It does not represent practitioner review, learner validation, employer authorization, certification, licensure, or completed rights-cleared media.'
  });
})();
