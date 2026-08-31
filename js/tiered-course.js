(function () {
  'use strict';

  const dataElement = document.getElementById('courseData');
  if (!dataElement) return;

  const course = JSON.parse(dataElement.textContent);
  const sidebar = document.getElementById('sidebar');
  const mobileSelect = document.getElementById('mobileSelect');
  const lessonContent = document.getElementById('lessonContent');
  const objective = document.getElementById('objective');
  const footerNav = document.getElementById('footerNav');
  const lessons = [];

  course.modules.forEach((module, moduleIndex) => {
    module.lessons.forEach((lesson, lessonIndex) => {
      lessons.push({
        ...lesson,
        id: `${moduleIndex + 1}.${lessonIndex + 1}`,
        moduleName: module.name,
        moduleIndex
      });
    });
  });

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function paragraphList(items) {
    return (items || []).map((item) => `<p>${item}</p>`).join('');
  }

  function bulletList(items, ordered, className) {
    if (!items || !items.length) return '';
    const tag = ordered ? 'ol' : 'ul';
    return `<${tag}${className ? ` class="${className}"` : ''}>${items.map((item) => `<li>${item}</li>`).join('')}</${tag}>`;
  }

  function renderBlocks(blocks) {
    return (blocks || []).map((block) => {
      const heading = block.heading ? `<h3>${block.heading}</h3>` : '';
      if (block.type === 'callout') return `<div class="explainer">${heading}${paragraphList(block.paragraphs)}${bulletList(block.bullets)}</div>`;
      if (block.type === 'authority') return `<div class="authority">${heading}${paragraphList(block.paragraphs)}${bulletList(block.bullets)}</div>`;
      if (block.type === 'stop') return `<div class="stop-box">${heading}${paragraphList(block.paragraphs)}${bulletList(block.bullets)}</div>`;
      if (block.type === 'practice') return `<div class="practice-box">${heading}${paragraphList(block.paragraphs)}${bulletList(block.bullets, Boolean(block.ordered), block.ordered ? 'sequence' : '')}</div>`;
      if (block.type === 'evidence') return `<div class="evidence-box">${heading}${paragraphList(block.paragraphs)}${bulletList(block.bullets)}</div>`;
      if (block.type === 'demo') {
        return `<div class="demo-box">${heading}${paragraphList(block.paragraphs)}<div class="demo-steps">${(block.steps || []).map((step, index) => `<div class="demo-step"><span class="demo-step-number">${index + 1}</span><strong>${step.heading}</strong><span>${step.text}</span></div>`).join('')}</div></div>`;
      }
      if (block.type === 'html') return block.html || '';
      if (block.type === 'sequence') return `${heading}${paragraphList(block.paragraphs)}${bulletList(block.items, true, 'sequence')}`;
      if (block.type === 'columns') {
        return `${heading}<div class="${block.columns.length === 3 ? 'three-grid' : 'split-grid'}">${block.columns.map((column) => `<div class="split-col"><h4>${column.heading}</h4>${paragraphList(column.paragraphs)}${bulletList(column.bullets)}</div>`).join('')}</div>`;
      }
      return `${heading}${paragraphList(block.paragraphs)}${bulletList(block.bullets, Boolean(block.ordered))}`;
    }).join('');
  }

  function renderLesson(lesson) {
    return `<article><h2>${lesson.name}</h2>${renderBlocks(lesson.blocks)}</article>`;
  }

  function renderQuiz() {
    return `<article><h2>Knowledge Check</h2><p>Choose the strongest response in each situation. These questions measure course understanding; they do not record field qualification.</p>${course.quiz.map((question, index) => {
      const qid = `q${index + 1}`;
      return `<div class="quiz-block"><p class="quiz-q">${index + 1}. ${question.question}</p><div class="options" data-q="${qid}">${question.options.map((option, optionIndex) => `<button class="opt" type="button" data-c="${optionIndex === question.answer ? '1' : '0'}">${option}</button>`).join('')}</div><div class="coach" id="${qid}c" role="status" aria-live="polite"><strong class="answer-result"></strong><span><strong>Why:</strong> ${question.coaching}</span></div></div>`;
    }).join('')}</article>`;
  }

  function renderSources() {
    const practice = course.practice
      ? `<div class="practice-box"><h3>${course.practice.heading}</h3>${paragraphList(course.practice.paragraphs)}${bulletList(course.practice.checklist)}</div>`
      : '';
    return `<article><h2>Practice Gate &amp; Sources</h2>${practice}<div class="authority"><h3>Course boundary</h3><p>${course.boundary}</p></div><h3>Source lineage</h3><p>This review build traces to <strong>${course.packet}</strong>. Confirm current manufacturer, employer, venue, legal, and production requirements before real work.</p><ul class="source-list">${course.sources.map((source) => `<li><a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>${source.note ? ` — ${source.note}` : ''}</li>`).join('')}</ul></article>`;
  }

  function getCurrentId() {
    const hash = window.location.hash.replace('#lesson-', '');
    if (lessons.some((lesson) => lesson.id === hash)) return hash;
    if (hash === 'quiz' || hash === 'sources') return hash;
    return lessons[0].id;
  }

  function navigationItems() {
    const items = lessons.map((lesson) => ({ id: lesson.id, name: lesson.name, moduleName: lesson.moduleName, type: 'lesson' }));
    if (!course.inlineAssessment) {
      items.push(
        { id: 'quiz', name: 'Knowledge Check', moduleName: 'Assessment', type: 'quiz' },
        { id: 'sources', name: 'Practice Gate & Sources', moduleName: 'Assessment', type: 'sources' }
      );
    }
    return items;
  }

  function buildSidebar(currentId) {
    sidebar.innerHTML = '';
    mobileSelect.innerHTML = '';
    course.modules.forEach((module, moduleIndex) => {
      const moduleLessons = lessons.filter((lesson) => lesson.moduleIndex === moduleIndex);
      const moduleHeader = document.createElement('div');
      moduleHeader.className = `mod${moduleLessons.some((lesson) => lesson.id === currentId) ? ' active' : ''}`;
      moduleHeader.innerHTML = `<span class="num">${moduleIndex + 1}</span><div><div class="module-title">${module.name}</div><div class="module-count">${moduleLessons.length} lesson${moduleLessons.length === 1 ? '' : 's'}</div></div>`;
      sidebar.appendChild(moduleHeader);
      const sub = document.createElement('div');
      sub.className = 'sub';
      moduleLessons.forEach((lesson) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `lesson-link${lesson.id === currentId ? ' active' : ''}`;
        button.textContent = lesson.name;
        button.addEventListener('click', () => render(lesson.id));
        sub.appendChild(button);
        const option = document.createElement('option');
        option.value = lesson.id;
        option.textContent = `${module.name} > ${lesson.name}`;
        mobileSelect.appendChild(option);
      });
      sidebar.appendChild(sub);
    });

    if (!course.inlineAssessment) {
    const assessmentHeader = document.createElement('div');
    assessmentHeader.className = `mod${currentId === 'quiz' || currentId === 'sources' ? ' active' : ''}`;
    assessmentHeader.innerHTML = `<span class="num">${course.modules.length + 1}</span><div><div class="module-title">Assessment &amp; Evidence</div><div class="module-count">2 lessons</div></div>`;
    sidebar.appendChild(assessmentHeader);
    const assessmentSub = document.createElement('div');
    assessmentSub.className = 'sub';
    [['quiz', 'Knowledge Check'], ['sources', 'Practice Gate & Sources']].forEach(([id, label]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `lesson-link${id === currentId ? ' active' : ''}`;
      button.textContent = label;
      button.addEventListener('click', () => render(id));
      assessmentSub.appendChild(button);
      const option = document.createElement('option');
      option.value = id;
      option.textContent = `Assessment & Evidence > ${label}`;
      mobileSelect.appendChild(option);
    });
    sidebar.appendChild(assessmentSub);
    }
    mobileSelect.value = currentId;
  }

  function renderFooter(currentId) {
    const items = navigationItems();
    const index = items.findIndex((item) => item.id === currentId);
    footerNav.innerHTML = '';
    if (index > 0) {
      const previous = items[index - 1];
      const link = document.createElement('a');
      link.href = `#lesson-${previous.id}`;
      link.className = 'footer-nav-card';
      link.innerHTML = `<span class="label">← Previous</span><h3>${previous.name}</h3>`;
      link.addEventListener('click', (event) => { event.preventDefault(); render(previous.id); });
      footerNav.appendChild(link);
    }
    if (index < items.length - 1) {
      const next = items[index + 1];
      const link = document.createElement('a');
      link.href = `#lesson-${next.id}`;
      link.className = 'footer-nav-card next';
      link.innerHTML = `<span class="label">Next →</span><h3>${next.name}</h3>`;
      link.addEventListener('click', (event) => { event.preventDefault(); render(next.id); });
      footerNav.appendChild(link);
    }
  }

  function render(id, pushHash = true) {
    const item = navigationItems().find((candidate) => candidate.id === id) || navigationItems()[0];
    if (item.type === 'quiz') {
      objective.textContent = 'Use authority, sequence, verification, and stop-work judgment to select each answer.';
      lessonContent.innerHTML = renderQuiz();
    } else if (item.type === 'sources') {
      objective.textContent = 'Keep learning completion, observed practice, and jobsite authorization as separate states.';
      lessonContent.innerHTML = renderSources();
    } else {
      const lesson = lessons.find((candidate) => candidate.id === item.id);
      objective.textContent = lesson.objective;
      lessonContent.innerHTML = renderLesson(lesson);
    }

    const items = navigationItems();
    const index = items.findIndex((candidate) => candidate.id === item.id);
    const percent = Math.round(((index + 1) / items.length) * 100);
    document.getElementById('progtext').textContent = `Lesson ${index + 1} of ${items.length}`;
    document.getElementById('pcttext').textContent = `${percent}%`;
    document.getElementById('progbar').style.width = `${percent}%`;
    buildSidebar(item.id);
    renderFooter(item.id);
    if (pushHash) window.history.replaceState(null, '', `#lesson-${item.id}`);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  document.title = `${course.title} | The Crew Blueprint`;
  document.getElementById('topTitle').textContent = `${course.tier} · ${course.title}`;
  document.getElementById('courseHero').innerHTML = `<div class="tier-row"><span class="tier-pill">${escapeHtml(course.tier)}</span><span class="tier-pill status">${escapeHtml(course.status)}</span></div><h1>${escapeHtml(course.title)}</h1><p class="lead">${escapeHtml(course.description)}</p><div class="authority"><strong>Authority rule:</strong> ${course.boundary}</div>`;

  mobileSelect.addEventListener('change', (event) => render(event.target.value));
  lessonContent.addEventListener('click', (event) => {
    const button = event.target.closest('.opt');
    if (!button || button.disabled) return;
    const group = button.closest('.options');
    let correctOption;
    [...group.children].forEach((option) => {
      option.disabled = true;
      if (option.dataset.c === '1') {
        option.classList.add('correct');
        correctOption = option;
      }
    });
    if (button.dataset.c !== '1') button.classList.add('incorrect');
    const coaching = document.getElementById(`${group.dataset.q}c`);
    if (coaching) {
      const result = coaching.querySelector('.answer-result');
      result.textContent = button.dataset.c === '1'
        ? 'Correct. '
        : `Not quite. Correct answer: ${correctOption.textContent}. `;
      coaching.classList.add('show');
    }
  });

  render(getCurrentId(), false);
}());
