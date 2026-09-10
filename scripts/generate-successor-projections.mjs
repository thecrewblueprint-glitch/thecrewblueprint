import { installRouteAwareExistsSync } from './route-filesystem.mjs';

// Canonical learner route IDs may include a query/hash while still resolving to a
// single materialized HTML shell. Filesystem existence checks must evaluate the
// route path, not the browser-only query/hash portion.
installRouteAwareExistsSync();
await import('./generate-successor-projections-impl.mjs');
