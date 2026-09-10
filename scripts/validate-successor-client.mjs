import fs from 'node:fs';
import { routeFilesystemPath, installRouteAwareExistsSync } from './route-filesystem.mjs';

installRouteAwareExistsSync();
await import('./validate-successor-client-impl.mjs');

const projection = JSON.parse(fs.readFileSync('data/generated/web-client-projection.json', 'utf8'));
const runtimeCatalog = `${fs.readFileSync('js/ecosystem-courses.js', 'utf8')}\n${fs.readFileSync('js/frontier-expansion.js', 'utf8')}`;
const dynamicMaterialized = (projection.courses || []).filter((course) => {
  const route = String(course.identity?.route_id || '');
  return course.identity?.route_state === 'materialized'
    && routeFilesystemPath(route) === 'courses/ecosystem-course.html'
    && route.includes('?course=');
});

for (const course of dynamicMaterialized) {
  const route = String(course.identity.route_id);
  const slug = new URL(route, 'https://crew-blueprint.invalid/').searchParams.get('course');
  if (!slug || !runtimeCatalog.includes(`'${slug}'`)) {
    throw new Error(`Shared ecosystem route is materialized but its runtime slug is missing: ${course.identity?.canonical_course_id} -> ${route}`);
  }
}

console.log(`${dynamicMaterialized.length} query-backed shared learner routes validated against runtime catalogs.`);
