(()=>{
  'use strict';

  const script=document.currentScript;
  const projectionUrl=script&&script.src
    ? new URL('../data/generated/web-client-projection.json',script.src).href
    : 'data/generated/web-client-projection.json';

  const laneLabels={
    stagehand_generalist:'Stagehand / Generalist',
    lighting:'Lighting',
    audio:'Audio',
    video:'Video / LED',
    staging_scenic:'Staging / Scenic',
    rigging:'Rigging',
    shop_warehouse_logistics:'Shop / Warehouse / Logistics',
    backline:'Backline',
    wardrobe:'Wardrobe',
    production_management:'Production Management',
    stage_management:'Stage Management',
    automation:'Automation',
    production_power:'Production Power / Electrical',
    special_effects:'Special Effects',
    context_labs:'Context Labs',
    career_business_rights:'Career / Business / Rights'
  };

  const escapeLabel=value=>String(value||'').replace(/[_-]+/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
  const laneLabel=id=>laneLabels[id]||escapeLabel(id)||'Cross-lane';
  const unique=values=>[...new Set(values.filter(Boolean))];
  const byTitle=(a,b)=>(a.identity?.title||'').localeCompare(b.identity?.title||'');

  const setStatus=(node,message,isError=false)=>{
    if(!node)return;
    node.replaceChildren();
    const div=document.createElement('div');
    div.className=`graph-status${isError?' is-error':''}`;
    div.setAttribute('role','status');
    div.textContent=message;
    node.appendChild(div);
  };

  const badge=(text,kind='')=>{
    const span=document.createElement('span');
    span.className=`graph-badge${kind?` ${kind}`:''}`;
    span.textContent=text;
    return span;
  };

  const availabilityState=course=>{
    const placement=course.placement||{};
    const identity=course.identity||{};
    if(placement.lane_status==='future'||placement.lane_status==='future_specialist'||String(placement.visibility||'').includes('hidden')){
      return {label:'Mapped for future',kind:'is-future'};
    }
    if(String(placement.visibility||'').includes('owner_review')||['noindex_review','review','draft'].includes(identity.publication_state)){
      return {label:'In review',kind:'is-review'};
    }
    if(placement.public_by_default&&identity.route_state==='materialized'){
      return {label:'Available now',kind:'is-live'};
    }
    if(identity.route_state==='materialized')return {label:'Mapped route',kind:'is-mapped'};
    return {label:'Mapped',kind:'is-mapped'};
  };

  const courseLink=course=>{
    const state=availabilityState(course);
    const route=course.identity?.route_id;
    if(state.kind==='is-live'&&route){
      const a=document.createElement('a');
      a.className='btn graph-card-action';
      a.href=route;
      a.textContent='Open learning item';
      return a;
    }
    const span=document.createElement('span');
    span.className='graph-card-note';
    span.textContent=state.label==='Mapped for future'
      ? 'Preserved in the graph; not exposed as a current learner route.'
      : state.label==='In review'
        ? 'Mapped and retained, but not released as a current learner route.'
        : 'Canonical identity retained; presentation route is not currently public.';
    return span;
  };

  const courseCard=(course,{showLane=false}={})=>{
    const article=document.createElement('article');
    article.className='graph-card';
    const top=document.createElement('div');
    top.className='graph-card-top';
    const status=availabilityState(course);
    top.appendChild(badge(status.label,status.kind));
    if(showLane){
      const lane=course.placement?.career_lane_ids?.[0];
      if(lane)top.appendChild(badge(laneLabel(lane),'is-neutral'));
    }
    article.appendChild(top);

    const h=document.createElement('h3');
    h.textContent=course.identity?.title||course.identity?.canonical_course_id||'Untitled learning item';
    article.appendChild(h);

    const objective=course.learning?.objective;
    if(objective){
      const p=document.createElement('p');
      p.textContent=objective;
      article.appendChild(p);
    }

    const meta=document.createElement('div');
    meta.className='graph-meta';
    const tier=course.placement?.presentation_tier;
    if(tier)meta.appendChild(badge(tier,'is-neutral'));
    const role=course.placement?.node_role;
    if(role)meta.appendChild(badge(escapeLabel(role),'is-neutral'));
    const safety=course.boundary?.safety_criticality;
    if(safety&&safety!=='unknown')meta.appendChild(badge(`${escapeLabel(safety)} safety sensitivity`,'is-neutral'));
    article.appendChild(meta);

    article.appendChild(courseLink(course));
    return article;
  };

  const renderOverview=(node,data)=>{
    const courses=data.courses||[];
    const lanes=unique(courses.flatMap(c=>c.placement?.career_lane_ids||[]).filter(id=>id&&id!=='context_labs'));
    const field=courses.filter(c=>c.placement?.learner_surface==='field');
    const contexts=courses.filter(c=>c.placement?.learner_surface==='contexts');
    const live=courses.filter(c=>availabilityState(c).kind==='is-live');
    const materialized=courses.filter(c=>c.identity?.route_state==='materialized');

    node.replaceChildren();
    const grid=document.createElement('div');
    grid.className='graph-stat-grid';
    [
      [courses.length,'Canonical identities','Preserved in the accepted graph; this is not a command to publish 143 standalone courses.'],
      [lanes.length,'Mapped lanes','Initial, future, specialist, and career-oriented lane identities represented in the graph.'],
      [field.length,'Field Skills','First-class practical skill library, kept separate from the main course catalog.'],
      [contexts.length,'Context nodes','Situation/context learning that can overlay multiple department lanes.'],
      [live.length,'Current public routes','Graph identities currently both public-by-default and backed by a materialized route.'],
      [materialized.length,'Materialized routes','Existing presentation routes, including items still in review or gated.']
    ].forEach(([value,label,help])=>{
      const card=document.createElement('article');
      card.className='graph-stat';
      const strong=document.createElement('strong');strong.textContent=String(value);
      const b=document.createElement('b');b.textContent=label;
      const p=document.createElement('p');p.textContent=help;
      card.append(strong,b,p);grid.appendChild(card);
    });
    node.appendChild(grid);
  };

  const laneRank=lane=>{
    const order=['stagehand_generalist','lighting','audio','video','staging_scenic','rigging','shop_warehouse_logistics','backline','wardrobe','stage_management','production_management','production_power','automation','special_effects'];
    const idx=order.indexOf(lane);
    return idx<0?999:idx;
  };

  const renderLanes=(node,data)=>{
    const courses=data.courses||[];
    const laneMap=new Map();
    courses.forEach(course=>{
      (course.placement?.career_lane_ids||[]).forEach(lane=>{
        if(!lane||lane==='context_labs'||lane==='career_business_rights')return;
        if(!laneMap.has(lane))laneMap.set(lane,[]);
        laneMap.get(lane).push(course);
      });
    });

    node.replaceChildren();
    const grid=document.createElement('div');grid.className='graph-lane-grid';
    [...laneMap.entries()].sort((a,b)=>laneRank(a[0])-laneRank(b[0])||laneLabel(a[0]).localeCompare(laneLabel(b[0]))).forEach(([lane,items])=>{
      const card=document.createElement('article');card.className='graph-lane';
      const entries=items.filter(c=>String(c.placement?.node_role||'').includes('lane_entry'));
      const initial=items.some(c=>c.placement?.lane_status==='initial');
      const future=items.every(c=>['future','future_specialist'].includes(c.placement?.lane_status)||String(c.placement?.visibility||'').includes('hidden'));
      const liveCount=items.filter(c=>availabilityState(c).kind==='is-live').length;

      const top=document.createElement('div');top.className='graph-card-top';
      top.appendChild(badge(initial?'Initial lane':future?'Future lane':'Mapped lane',initial?'is-live':future?'is-future':'is-neutral'));
      top.appendChild(badge(`${items.length} identities`,'is-neutral'));
      card.appendChild(top);
      const h=document.createElement('h3');h.textContent=laneLabel(lane);card.appendChild(h);
      const p=document.createElement('p');
      p.textContent=entries[0]?.learning?.objective||`${liveCount} current public route${liveCount===1?'':'s'}; deeper and historical identities remain visible through graph state rather than being flattened into one list.`;
      card.appendChild(p);

      const sample=document.createElement('div');sample.className='graph-lane-sample';
      items.slice().sort((a,b)=>{
        const ae=String(a.placement?.node_role||'').includes('lane_entry')?-1:0;
        const be=String(b.placement?.node_role||'').includes('lane_entry')?-1:0;
        return ae-be||byTitle(a,b);
      }).slice(0,5).forEach(c=>{
        const item=document.createElement('div');
        item.appendChild(badge(availabilityState(c).label,availabilityState(c).kind));
        const span=document.createElement('span');span.textContent=c.identity?.title||c.identity?.canonical_course_id;item.appendChild(span);
        sample.appendChild(item);
      });
      card.appendChild(sample);

      if(entries[0])card.appendChild(courseLink(entries[0]));
      grid.appendChild(card);
    });
    node.appendChild(grid);
  };

  const renderCourseCollection=(node,courses,emptyMessage,options={})=>{
    node.replaceChildren();
    if(!courses.length){setStatus(node,emptyMessage);return;}
    const grid=document.createElement('div');grid.className='graph-course-grid';
    courses.slice().sort(byTitle).forEach(course=>grid.appendChild(courseCard(course,options)));
    node.appendChild(grid);
  };

  const renderField=(node,data)=>renderCourseCollection(
    node,
    (data.courses||[]).filter(c=>c.placement?.learner_surface==='field'),
    'No Field Skills are present in the generated projection.'
  );

  const renderContexts=(node,data)=>renderCourseCollection(
    node,
    (data.courses||[]).filter(c=>c.placement?.learner_surface==='contexts'),
    'No Context Lab nodes are present in the generated projection.',
    {showLane:true}
  );

  const renderAdvanced=(node,data)=>{
    const courses=(data.courses||[]).filter(c=>c.placement?.learner_surface==='advanced'||String(c.placement?.visibility||'').includes('deep')||String(c.placement?.node_role||'').includes('advanced'));
    renderCourseCollection(node,courses,'No advanced nodes are present in the generated projection.',{showLane:true});
  };

  const renderAtlas=(node)=>{
    setStatus(node,'Production Atlas is not available as a learner tool in the current release.');
  };

  const renderSources=(node,data)=>{
    const sources=(data.sources||[]).slice().sort((a,b)=>(a.source_owner||'').localeCompare(b.source_owner||'')||(a.title||'').localeCompare(b.title||''));
    node.replaceChildren();
    const controls=document.createElement('div');controls.className='graph-source-controls';
    const search=document.createElement('input');search.type='search';search.placeholder='Search source owner, title, type, or jurisdiction';search.setAttribute('aria-label','Search generated source registry');
    const typeSelect=document.createElement('select');typeSelect.setAttribute('aria-label','Filter sources by evidence type');
    const allOption=document.createElement('option');allOption.value='';allOption.textContent='All evidence types';typeSelect.appendChild(allOption);
    unique(sources.map(s=>s.evidence_type)).sort().forEach(type=>{const o=document.createElement('option');o.value=type;o.textContent=escapeLabel(type);typeSelect.appendChild(o);});
    const count=document.createElement('span');count.className='graph-source-count';
    controls.append(search,typeSelect,count);node.appendChild(controls);
    const grid=document.createElement('div');grid.className='graph-source-grid';node.appendChild(grid);

    const draw=()=>{
      const q=search.value.trim().toLowerCase();const type=typeSelect.value;
      const filtered=sources.filter(source=>{
        const hay=[source.source_owner,source.title,source.evidence_type,source.jurisdiction_scope,source.authority_level].filter(Boolean).join(' ').toLowerCase();
        return (!q||hay.includes(q))&&(!type||source.evidence_type===type);
      });
      count.textContent=`${filtered.length} of ${sources.length} public source records`;
      grid.replaceChildren();
      filtered.forEach(source=>{
        const card=document.createElement('article');card.className='graph-source-card';
        const top=document.createElement('div');top.className='graph-card-top';
        if(source.authority_level)top.appendChild(badge(escapeLabel(source.authority_level),'is-neutral'));
        if(source.freshness_class)top.appendChild(badge(escapeLabel(source.freshness_class),'is-neutral'));
        card.appendChild(top);
        const h=document.createElement('h3');h.textContent=source.title||source.source_id;card.appendChild(h);
        const owner=document.createElement('p');owner.className='graph-source-owner';owner.textContent=source.source_owner||'Source owner not labeled';card.appendChild(owner);
        if(source.jurisdiction_scope){const p=document.createElement('p');p.textContent=source.jurisdiction_scope;card.appendChild(p);}
        const meta=document.createElement('div');meta.className='graph-meta';
        if(source.evidence_type)meta.appendChild(badge(escapeLabel(source.evidence_type),'is-neutral'));
        if(source.access_date)meta.appendChild(badge(`Accessed ${source.access_date}`,'is-neutral'));
        card.appendChild(meta);
        if(source.url){const a=document.createElement('a');a.className='graph-source-link';a.href=source.url;a.target='_blank';a.rel='noopener';a.textContent='Open source ↗';card.appendChild(a);}
        grid.appendChild(card);
      });
    };
    search.addEventListener('input',draw);typeSelect.addEventListener('change',draw);draw();
  };

  const renderIntegrity=(node,data)=>{
    node.replaceChildren();
    const list=document.createElement('div');list.className='graph-integrity';
    const items=[
      ['Stagehand is not a universal prerequisite',data.invariants?.stagehand_not_universal_prerequisite===true],
      ['Course completion is not work authorization',data.invariants?.course_completion_not_authorization===true],
      ['Production Atlas owns volatile work data',data.invariants?.production_atlas_owns_volatile_work_data===true],
      ['Canonical identities are retained',data.invariants?.canonical_ids_retained===true]
    ];
    items.forEach(([label,ok])=>{const row=document.createElement('div');row.appendChild(badge(ok?'Protected':'Check required',ok?'is-live':'is-review'));const span=document.createElement('span');span.textContent=label;row.appendChild(span);list.appendChild(row);});
    node.appendChild(list);
  };

  const renderers={
    'successor-overview':renderOverview,
    'successor-lanes':renderLanes,
    'successor-field-skills':renderField,
    'successor-contexts':renderContexts,
    'successor-advanced':renderAdvanced,
    'successor-atlas-links':renderAtlas,
    'successor-sources':renderSources,
    'successor-integrity':renderIntegrity
  };

  const targets=[...document.querySelectorAll('[data-successor-overview],[data-successor-lanes],[data-successor-field-skills],[data-successor-contexts],[data-successor-advanced],[data-successor-atlas-links],[data-successor-sources],[data-successor-integrity]')];
  if(!targets.length)return;
  targets.forEach(node=>setStatus(node,'Loading canonical learning graph…'));

  fetch(projectionUrl,{cache:'no-store'})
    .then(response=>{if(!response.ok)throw new Error(`Projection request failed (${response.status})`);return response.json();})
    .then(data=>{
      targets.forEach(node=>{
        const key=Object.keys(renderers).find(name=>node.hasAttribute(`data-${name}`));
        if(key)renderers[key](node,data);
      });
      document.documentElement.dataset.successorProjection='loaded';
    })
    .catch(error=>{
      console.error('Crew Blueprint successor projection:',error);
      targets.forEach(node=>setStatus(node,'The generated learning graph is unavailable in this build. Existing course routes remain usable.',true));
      document.documentElement.dataset.successorProjection='unavailable';
    });
})();
