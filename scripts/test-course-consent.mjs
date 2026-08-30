import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const runtime = await readFile(path.join(rootDir, 'js', 'course-consent.js'), 'utf8');

class MockClassList {
  constructor() {
    this.values = new Set();
  }

  add(value) {
    this.values.add(value);
  }

  remove(value) {
    this.values.delete(value);
  }

  contains(value) {
    return this.values.has(value);
  }
}

class MockElement {
  constructor(document, tagName) {
    this.document = document;
    this.tagName = tagName;
    this.children = [];
    this.classList = new MockClassList();
    this.attributes = new Map();
    this.listeners = new Map();
    this.inert = false;
    this.checked = false;
    this.disabled = false;
    this.removed = false;
    this.nodes = new Map();
  }

  set className(value) {
    this._className = value;
  }

  get className() {
    return this._className || '';
  }

  set innerHTML(value) {
    this._innerHTML = value;
    if (!this.className.includes('cb-consent-backdrop')) return;
    const terms = new MockElement(this.document, 'input');
    const safety = new MockElement(this.document, 'input');
    const submit = new MockElement(this.document, 'button');
    submit.disabled = true;
    this.nodes.set('#cb-consent-terms', terms);
    this.nodes.set('#cb-consent-safety', safety);
    this.nodes.set('.cb-consent-submit', submit);
  }

  get innerHTML() {
    return this._innerHTML || '';
  }

  appendChild(element) {
    this.children.push(element);
    element.parent = this;
    return element;
  }

  addEventListener(type, listener) {
    if (!this.listeners.has(type)) this.listeners.set(type, []);
    this.listeners.get(type).push(listener);
  }

  trigger(type, event = {}) {
    for (const listener of this.listeners.get(type) || []) listener(event);
  }

  querySelector(selector) {
    return this.nodes.get(selector) || null;
  }

  querySelectorAll() {
    return [...this.nodes.values()].filter((element) => !element.disabled);
  }

  setAttribute(name, value) {
    this.attributes.set(name, String(value));
  }

  getAttribute(name) {
    return this.attributes.has(name) ? this.attributes.get(name) : null;
  }

  removeAttribute(name) {
    this.attributes.delete(name);
  }

  remove() {
    this.removed = true;
    if (this.parent) this.parent.children = this.parent.children.filter((child) => child !== this);
  }

  focus() {
    this.document.activeElement = this;
  }
}

function runConsent(initialRecord) {
  let storedValue = initialRecord;
  const document = {
    currentScript: { src: 'https://example.test/thecrewblueprint/js/course-consent.js' },
    activeElement: null,
    dispatched: [],
    createElement(tagName) {
      return new MockElement(document, tagName);
    },
    dispatchEvent(event) {
      this.dispatched.push(event);
    }
  };
  document.body = new MockElement(document, 'body');
  document.activeElement = new MockElement(document, 'main');
  document.body.appendChild(document.activeElement);

  const localStorage = {
    getItem() {
      return storedValue;
    },
    setItem(key, value) {
      assert.equal(key, 'cbCourseConsent.v1');
      storedValue = value;
    }
  };

  class CustomEvent {
    constructor(type, options) {
      this.type = type;
      this.detail = options.detail;
    }
  }

  const window = {
    location: {
      href: 'https://example.test/thecrewblueprint/courses/stagehand-fundamentals.html',
      pathname: '/thecrewblueprint/courses/stagehand-fundamentals.html'
    },
    localStorage
  };

  vm.runInNewContext(runtime, {
    Array,
    Boolean,
    CustomEvent,
    Date,
    JSON,
    URL,
    document,
    window
  });

  return { document, getStoredValue: () => storedValue };
}

const fresh = runConsent(null);
assert.equal(fresh.document.body.children.length, 2, 'missing record should show the gate');
assert.equal(fresh.document.body.classList.contains('cb-consent-open'), true);
const backdrop = fresh.document.body.children[1];
const terms = backdrop.querySelector('#cb-consent-terms');
const safety = backdrop.querySelector('#cb-consent-safety');
const submit = backdrop.querySelector('.cb-consent-submit');
assert.equal(terms.checked, false, 'terms checkbox must start unchecked');
assert.equal(safety.checked, false, 'safety checkbox must start unchecked');
assert.equal(submit.disabled, true, 'entry button must start disabled');

terms.checked = true;
terms.trigger('change');
assert.equal(submit.disabled, true, 'one acknowledgment must not unlock the course');
safety.checked = true;
safety.trigger('change');
assert.equal(submit.disabled, false, 'both acknowledgments should unlock the entry button');
submit.trigger('click');
assert.equal(fresh.document.body.children.length, 1, 'accepted gate should be removed');
assert.equal(fresh.document.body.classList.contains('cb-consent-open'), false);
const savedRecord = JSON.parse(fresh.getStoredValue());
assert.equal(savedRecord.version, '2026-08-30');
assert.equal(savedRecord.termsAccepted, true);
assert.equal(savedRecord.safetyLimitsAccepted, true);
assert.match(savedRecord.acceptedAt, /^\d{4}-\d{2}-\d{2}T/);

const current = runConsent(JSON.stringify(savedRecord));
assert.equal(current.document.body.children.length, 1, 'current acceptance should suppress the gate');

const stale = runConsent(JSON.stringify({ ...savedRecord, version: '2026-08-16' }));
assert.equal(stale.document.body.children.length, 2, 'stale acceptance should show the gate again');

const malformed = runConsent('{not-json');
assert.equal(malformed.document.body.children.length, 2, 'invalid storage should fail safely to the gate');

console.log('Course-consent runtime tests passed.');
console.log('- dual unchecked acknowledgment enforced');
console.log('- acceptance record version and timestamp stored locally');
console.log('- current, stale, and malformed record behavior verified');
