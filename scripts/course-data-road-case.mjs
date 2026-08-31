export const roadCaseCourse = {
  slug: 'field-skill-move-road-case-with-partner',
  title: 'Move a Road Case With a Partner',
  tier: 'Stagehand Field Skills',
  tierClass: 'course-tier-field-skill',
  status: 'Explain · Show · Practice Gate',
  packet: 'Research Package 52 — Move a Road Case With a Partner',
  description: 'Inspect the case and route, agree on the move, travel at walking speed, reset at every transition, and park the case under control.',
  boundary: 'The lead, venue, employer, route, case design, and actual conditions control the crew size, travel orientation, hand positions, ramp plan, and final parking method. This lesson explains a transferable flat-floor movement pattern. It does not qualify anyone to improvise on ramps, docks, lifts, stairs, vehicle paths, or public routes.',
  modules: [
    {
      name: 'Explain the Move',
      lessons: [{
        name: 'Inspect, Plan, and Set the Case',
        objective: 'Check the case and route, then agree on destination, roles, pace, transitions, and one stop word before movement starts.',
        blocks: [
          { type: 'demo', heading: 'See the setup before the wheels move', paragraphs: ['Read the sequence once, then follow the visual control points from left to right. Use the exact case and route during the in-field demonstration.'], steps: [
            { heading: 'Case', text: 'Check casters, brakes, handles, latches, lids, balance, stacking, and destination label.' },
            { heading: 'Route', text: 'Look for people, cables, doors, corners, thresholds, ramps, slopes, edges, and the parking location.' },
            { heading: 'Plan', text: 'Name the destination, who controls movement, who watches the far side, the pace, and the stop word.' },
            { heading: 'Set', text: 'Release only the assigned brakes. Use clear control points and keep feet outside the wheel path.' }
          ] },
          { type: 'stop', heading: 'Do not force a bad setup', bullets: ['A caster, brake, handle, latch, lid, drawer, or door does not work normally.', 'The case leans, racks, carries an unstable load, or sits badly in stacking features.', 'You cannot see the route or do not know the destination.', 'The crew cannot start, steer, stop, or park the case smoothly.'] }
        ]
      }]
    },
    {
      name: 'Show the Move',
      lessons: [{
        name: 'Start Together, Walk, and Communicate',
        objective: 'Apply force smoothly, walk the case with clear sightlines, and stop immediately when either partner calls the agreed word.',
        blocks: [
          { type: 'demo', heading: 'Watch the complete flat-floor sequence', steps: [
            { heading: 'Call it', text: 'One person calls the start. Both movers confirm they are ready.' },
            { heading: 'Start smooth', text: 'Build force together. Do not jerk the case or sprint to break a caster loose.' },
            { heading: 'Walk', text: 'Move no faster than walking speed. Keep the far side and travel path under observation.' },
            { heading: 'Stop', text: 'Either person can call the agreed word. The case stops immediately and stays stopped until both understand the next move.' }
          ] },
          { type: 'callout', heading: 'Push where conditions allow', paragraphs: ['Start from a controlled push when the case, route, and assignment allow it. Pull only when the route, door, alignment, case design, or lead requires it. Do not turn a general ergonomic preference into an absolute road-case rule.'] },
          { type: 'authority', heading: 'Use the actual case', paragraphs: ['Road cases use different caster layouts. Identify the actual fixed, swivel, braked-swivel, or total-lock arrangement before deciding which end steers. One end does not always lead on every case.'] }
        ]
      }]
    },
    {
      name: 'Reset at Transitions',
      lessons: [{
        name: 'Doors, Corners, Thresholds, and Slopes',
        objective: 'Treat every changed condition as a new movement and stop when the original plan no longer controls the case.',
        blocks: [
          { type: 'html', html: '<figure class="course-training-visual"><img src="../images/course-visuals/road-case-turn-threshold.jpg" alt="Two stagehands keep their hands high on a road case while controlling a turn and crossing a doorway threshold together."><figcaption>Visual sequence: slow before the turn, keep hands and feet clear, then cross the threshold squarely. AI-generated training visual; the actual case, route, and lead control the move.</figcaption></figure>' },
          { type: 'demo', heading: 'Wrong move / controlled move', steps: [
            { heading: 'Blind corner', text: 'Wrong: keep rolling. Controlled: stop, clear the far side, call the turn, then move.' },
            { heading: 'Door', text: 'Wrong: one person fights the door and case. Controlled: assign one person to the door and one to the case.' },
            { heading: 'Threshold', text: 'Wrong: ram it. Controlled: stop, square the approach, clear hands and feet, and get help if control drops.' },
            { heading: 'Ramp or slope', text: 'Wrong: continue the flat-floor move. Controlled: stop and get the assigned crew or mechanical plan.' }
          ] },
          { type: 'stop', heading: 'Stop the move when', bullets: ['Communication breaks down.', 'A caster binds, lifts, turns sideways, or leaves the usable surface.', 'The case accelerates beyond the crew’s control.', 'Hands, feet, another worker, or equipment enter a pinch or crush path.', 'The route includes an unplanned ramp, slope, stair, lift, dock edge, vehicle path, public crossing, or overhead restriction.'] },
          { type: 'callout', heading: 'Protect hands, feet, and the body', paragraphs: ['Keep fingers out from between cases, wheel pockets, walls, doorframes, and closing gaps. Keep feet out from under casters and outside the travel path. Do not try to catch a tipping or runaway heavy case with your body.'] }
        ]
      }]
    },
    {
      name: 'Park and Practice',
      lessons: [{
        name: 'Park, Report, and Ask for the Demonstration',
        objective: 'Place the case where directed, secure it with the provided method, report the move, and repeat the sequence under observation.',
        blocks: [
          { type: 'html', html: '<figure class="course-training-visual"><img src="../images/course-visuals/road-case-park-brake.jpg" alt="Two standing stagehands stabilize a parked road case while one engages a caster brake with the toe of a work shoe."><figcaption>Parking sequence: stop fully, stabilize the case, then use the provided parking control without putting hands near the casters. AI-generated training visual; verify the actual brake and parking method before use.</figcaption></figure>' },
          { type: 'sequence', items: ['Stop at the assigned location.', 'Square the case with the staging or truck-pack plan.', 'Set the approved brake, chock, or other provided parking control.', 'Keep aisles, exits, doors, work paths, and access routes clear.', 'Tell the lead the move is complete and report any defect or route problem.'] },
          { type: 'authority', paragraphs: ['Record the case, route, surface, transitions, partner, observer, and result. Passing this observation does not create standing employer authorization for other cases or routes.'] }
        ]
      }]
    }
  ],
  quiz: [
    { question: 'The case blocks your view of the travel path. What comes first?', options: ['Move faster so the route clears sooner', 'Use a partner position or route plan that restores a clear sightline', 'Pull it backward without stopping'], answer: 1, coaching: 'Do not move blind. Stop and arrange the crew or route so someone can see and control the obstructed side.' },
    { question: 'What changes when you reach a door, threshold, blind corner, or ramp?', options: ['Nothing if the case already has momentum', 'The faster mover takes over', 'Stop and treat the transition as a new movement'], answer: 2, coaching: 'Changed conditions can change force, sightlines, clearance, hand position, and crew needs.' },
    { question: 'A caster binds and the case will not steer smoothly. What should you do?', options: ['Force it until the caster breaks free', 'Stop, secure the case, and report the problem', 'Kick the caster while your partner keeps pushing'], answer: 1, coaching: 'A binding caster can signal damage, obstruction, overload, or a changed control condition. Do not force it.' },
    { question: 'Who can call the agreed stop word?', options: ['Only the stronger mover', 'Either partner', 'Only the department head'], answer: 1, coaching: 'Either mover can stop the case. Movement resumes only after both understand the next action.' },
    { question: 'What does completing the observed practice prove?', options: ['The learner may move any road case on any route', 'The learner demonstrated the named sequence on the recorded case and route', 'The learner may improvise a ramp plan'], answer: 1, coaching: 'The observation records one case, route, crew, conditions, and result. Authorization and changed conditions remain separate.' }
  ],
  practice: {
    heading: 'Observed partner move',
    paragraphs: ['Use one lead-approved case and a controlled route with a flat floor, turn, doorway or marked opening, threshold, parking location, and a separate discussion of slope conditions.'],
    checklist: ['Inspect case and route.', 'Agree on roles and stop word.', 'Move at walking speed under control.', 'Reset at each transition.', 'Protect hands and feet.', 'Park and report.', 'Explain the sequence back to the observer.']
  },
  sources: [
    { label: 'OSHA — Pushing, Pulling and Carrying', url: 'https://www.osha.gov/etools/electrical-contractors/materials-handling/pushing' },
    { label: 'HSE — Handling roll cages and other heavy wheeled units', url: 'https://www.hse.gov.uk/food/safety-hazards/roll-cages-wheeled-racks.htm' },
    { label: 'HSE — Push/pull risk factors', url: 'https://www.hse.gov.uk/msd/pushpull/risks.htm' },
    { label: 'CCOHS — Pushing and Pulling Handcarts', url: 'https://www.ccohs.ca/oshanswers/ergonomics/push2.html' },
    { label: 'IATSE Local 15 — Equipment study guide', url: 'https://ia15.org/docs/entry-study-guide/equipment-2/' },
    { label: 'Penn Elcom — Road-case casters and wheels', url: 'https://www.penn-elcom.com/us/flight-case-hardware/castors-wheels?view_all=true' }
  ]
};
