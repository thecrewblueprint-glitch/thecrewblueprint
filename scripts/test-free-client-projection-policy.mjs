import test from 'node:test';
import assert from 'node:assert/strict';
import {projectFreeClient,verifyFreeClient} from './free-client-projection-policy.mjs';
const course=(id,state)=>({identity:{canonical_course_id:id,route_id:'courses/'+id+'.html',route_state:'materialized'},access:{delivery_state:state},evidence:{source_ids:[id+'-source']},private_field:'synthetic'});
const fixture=()=>({courses:[course('free','free_public'),course('reference','public_reference'),course('locked','locked')],sources:['free','reference','locked'].map(x=>({source_id:x+'-source',title:'Synthetic '+x,private_field:'synthetic'}))});
test('exact projection passes and removes locked source/course',()=>{const s=fixture(),f=projectFreeClient(s);assert.equal(verifyFreeClient(s,f),true);assert.equal(f.courses.length,2);assert.equal(f.sources.length,2);assert.equal(JSON.stringify(f).includes('private_field'),false)});
for(const [name,mutate] of [
 ['extra top-level field',f=>f.private_notes='synthetic'],
 ['extra nested field',f=>f.courses[0].identity.private_notes='synthetic'],
 ['extra source field',f=>f.sources[0].private_notes='synthetic'],
 ['changed route',f=>f.courses[0].identity.route_id='courses/locked.html'],
 ['changed source URL',f=>f.sources[0].url='https://example.invalid/other'],
 ['changed access state',f=>f.courses[0].access.delivery_state='locked'],
 ['unknown course',f=>f.courses.push(course('unregistered','free_public'))],
 ['duplicate course',f=>f.courses.push(f.courses[0])],
 ['duplicate source',f=>f.sources.push(f.sources[0])],
 ['missing course',f=>f.courses.pop()],
 ['missing source',f=>f.sources.pop()],
 ['atlas unlocked',f=>f.atlas_access.learner_tool_available=true],
 ['changed identity',f=>f.courses[0].identity.canonical_course_id='unknown']
])test(name,()=>{const s=fixture(),f=projectFreeClient(s);mutate(f);assert.throws(()=>verifyFreeClient(s,f))});
test('duplicate canonical identities rejected',()=>{const s=fixture();s.courses.push(s.courses[0]);assert.throws(()=>projectFreeClient(s))});
test('duplicate canonical sources rejected',()=>{const s=fixture();s.sources.push(s.sources[0]);assert.throws(()=>projectFreeClient(s))});
test('missing canonical sources denied',()=>{const s=fixture();delete s.sources;assert.throws(()=>projectFreeClient(s))});
test('all public scope cannot certify separation',()=>{const s=fixture();s.courses.pop();assert.throws(()=>verifyFreeClient(s,projectFreeClient(s)))});
