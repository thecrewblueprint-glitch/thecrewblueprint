// Pure release path policy. No network, filesystem or delivery authority.
export function canonicalReleasePath(value){
 if(typeof value!=='string'||value.length<1||value.length>512||/[^A-Za-z0-9_./ -]/.test(value))throw Error('Invalid release path');
 if(value.split('/').some(s=>!s||s==='.'||s==='..'||s.startsWith('.')||s!==s.trim()||s.endsWith('.')))throw Error('Noncanonical release path');
 return value;
}
export function resolveReleaseReference(base,ref){
 canonicalReleasePath(base);
 if(typeof ref!=='string')throw Error('Invalid release reference');
 const trimmed=ref.trim();
 if(!trimmed||trimmed.startsWith('#'))return null;
 if(/[\u0000-\u001f\u007f\\]/.test(ref))throw Error('Unsafe release reference');
 if(/^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(trimmed)||trimmed.startsWith('//'))return null; // Separate network/behavior gates still required.
 if(/^[A-Za-z][A-Za-z0-9+.-]*:/.test(trimmed))throw Error('Unknown reference scheme');
 const raw=trimmed.split(/[?#]/)[0];
 if(!raw)return null;
 if(/%(?:2f|5c|00|2e|25)/i.test(raw))throw Error('Ambiguous encoded reference');
 const clean=decodeURIComponent(raw);
 const parts=clean.startsWith('/')?[]:base.split('/').slice(0,-1);
 const segments=clean.replace(/^\//,'').split('/');
 for(const p of segments){
  if(p==='.')continue;
  if(p==='..'){if(!parts.length)throw Error('Reference escapes release root');parts.pop();continue}
  if(!p)throw Error('Empty reference segment');
  parts.push(p);
 }
 return canonicalReleasePath(parts.join('/'));
}
export function learnerRoutePath(route){
 if(typeof route!=='string'||/[\u0000-\u001f\u007f]/.test(route))throw Error('Invalid learner route');
 const rel=canonicalReleasePath(route.split(/[?#]/)[0]);
 if(!/^(?:courses|courses-v4)\/[A-Za-z0-9_-]+\.html$/.test(rel))throw Error('Unapproved learner route directory');
 return rel;
}
export function allowedReleaseAsset(rel,explicit){
 canonicalReleasePath(rel);
 return explicit.has(rel)||/^images\/(?:[A-Za-z0-9_ -]+\/)*[A-Za-z0-9_ .-]+\.(?:png|jpg|jpeg|webp|gif)$/i.test(rel);
}
