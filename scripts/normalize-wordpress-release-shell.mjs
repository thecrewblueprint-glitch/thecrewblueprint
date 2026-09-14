import { readFile, writeFile, readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..');
const siteDir=path.join(root,'_site');
const cssRel='css/wordpress-global-shell.css';
const jsRel='js/wordpress-global-shell.js';
const manifestRel='data/generated/wordpress-shell-normalization.json';

async function walk(dir){const out=[];for(const entry of await readdir(dir,{withFileTypes:true})){const full=path.join(dir,entry.name);if(entry.isDirectory())out.push(...await walk(full));else out.push(full);}return out;}
const sha=value=>crypto.createHash('sha256').update(value).digest('hex');
const extractMain=html=>(html.match(/<main\b[\s\S]*?<\/main>/i)||[''])[0];
const prefixFor=source=>{const dir=path.posix.dirname(source);return dir==='.'?'':'../'.repeat(dir.split('/').length);};

function header(prefix){return `<header class="topbar cbp-global-header" data-cbp-global-shell="header">
  <div class="shell topbar-inner cbp-global-header-inner">
    <a class="brand cbp-global-brand" href="${prefix}index.html" aria-label="The Crew Blueprint home"><img class="cbp-global-logo" src="${prefix}images/crew-blueprint-logo.png" alt="The Crew Blueprint"></a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="cbp-global-nav">Menu</button>
    <nav class="nav cbp-global-nav" id="cbp-global-nav" aria-label="Primary"><a href="${prefix}index.html">Home</a><a href="${prefix}start.html">Start Here</a><a href="${prefix}learn.html">Courses</a><a href="${prefix}field.html">Field Skills</a><a href="${prefix}contexts.html">Context Labs</a><div id="clerk-auth-slot" class="clerk-auth-slot"></div></nav>
  </div>
</header>`;}

function footer(prefix){return `<footer class="footer cbp-global-footer" data-cbp-global-shell="footer">
  <div class="shell footer-layout cbp-global-footer-layout">
    <div class="footer-primary"><a class="brand footer-brand cbp-global-brand" href="${prefix}index.html" aria-label="The Crew Blueprint home"><img class="cbp-global-logo cbp-global-logo-footer" src="${prefix}images/crew-blueprint-logo.png" alt="The Crew Blueprint"></a><nav class="footer-nav" aria-label="Footer navigation"><a href="${prefix}index.html">Home</a><a href="${prefix}learn.html">Courses</a><a href="${prefix}contact.html">Contact</a></nav></div>
    <div class="footer-boundary"><strong>Learning boundary:</strong> online course completion does not create employer authorization, certification, licensing, union status, or permission to perform controlled or safety-critical work. Employer/site rules, qualified-person requirements, applicable regulation, manufacturer instructions, and task-specific authorization remain controlling.</div>
    <div class="footer-legal"><nav aria-label="Legal"><a href="${prefix}privacy-policy.html">Privacy</a><a href="${prefix}terms-and-conditions.html">Terms</a><a href="${prefix}accessibility-statement.html">Accessibility</a><a href="${prefix}cookies-notice.html">Cookies</a><a href="${prefix}limitation-of-liability.html">Liability</a><a href="${prefix}affiliate-disclosure.html">Affiliate Disclosure</a></nav><div>© 2026 The Crew Blueprint</div></div>
  </div>
</footer>`;}

const globalCss=`/* WordPress release-shell normalization. Learner/page <main> content is intentionally untouched. */
:root{--cbp-shell-max:1180px;--cbp-shell-pad:clamp(18px,3vw,34px);--cbp-shell-panel:#11151a;--cbp-shell-line:#2a3139;--cbp-shell-text:#f2f4f7;--cbp-shell-muted:#a9b1ba;--cbp-shell-gold:#f3bd31}
.cbp-global-header,.cbp-global-footer{box-sizing:border-box;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.cbp-global-header *,.cbp-global-footer *{box-sizing:border-box}.cbp-global-header{position:relative;z-index:50;background:rgba(9,11,14,.96);border-bottom:1px solid var(--cbp-shell-line);backdrop-filter:blur(14px)}.cbp-global-header .shell,.cbp-global-footer .shell{width:min(var(--cbp-shell-max),calc(100% - (2 * var(--cbp-shell-pad))));margin-inline:auto}.cbp-global-header-inner{min-height:74px;display:flex;align-items:center;gap:24px}.cbp-global-brand{display:inline-flex;align-items:center;flex:0 0 auto;text-decoration:none}.cbp-global-logo{display:block;width:auto;height:46px;max-width:min(320px,48vw);object-fit:contain}.cbp-global-nav{margin-left:auto;display:flex;align-items:center;gap:6px;flex-wrap:wrap}.cbp-global-nav>a,.cbp-global-nav .clerk-auth-slot>a{color:var(--cbp-shell-muted);text-decoration:none;font-weight:700;font-size:.92rem;padding:10px 11px;border-radius:8px}.cbp-global-nav>a:hover,.cbp-global-nav>a:focus-visible,.cbp-global-nav .clerk-auth-slot>a:hover,.cbp-global-nav .clerk-auth-slot>a:focus-visible{color:var(--cbp-shell-text);background:#171c22;outline:none}.cbp-global-nav .clerk-auth-slot{margin-left:6px;display:flex;align-items:center;gap:8px}.cbp-global-nav .clerk-auth-slot .btn-nav-signup{color:#111;background:var(--cbp-shell-gold)}.cbp-global-nav .clerk-auth-slot .btn-nav-signup:hover,.cbp-global-nav .clerk-auth-slot .btn-nav-signup:focus-visible{color:#111;background:#ffd35a}.cbp-global-header .nav-toggle{display:none;margin-left:auto;border:1px solid var(--cbp-shell-line);background:#151a20;color:var(--cbp-shell-text);border-radius:8px;padding:9px 12px;font:inherit;font-weight:700}.cbp-global-footer{margin-top:clamp(48px,7vw,96px);background:#080a0d;border-top:1px solid var(--cbp-shell-line);color:var(--cbp-shell-muted)}.cbp-global-footer-layout{padding-block:34px;display:grid;gap:22px}.cbp-global-footer .footer-primary,.cbp-global-footer .footer-legal{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap}.cbp-global-footer .cbp-global-logo-footer{height:40px}.cbp-global-footer nav{display:flex;gap:8px 16px;flex-wrap:wrap}.cbp-global-footer a{color:var(--cbp-shell-muted);text-decoration:none}.cbp-global-footer a:hover,.cbp-global-footer a:focus-visible{color:var(--cbp-shell-text);text-decoration:underline;text-underline-offset:3px}.cbp-global-footer .footer-boundary{padding:16px 18px;border:1px solid var(--cbp-shell-line);border-radius:10px;background:var(--cbp-shell-panel);line-height:1.6;font-size:.9rem}.cbp-global-footer .footer-boundary strong{color:var(--cbp-shell-gold)}
@media(max-width:900px){.cbp-global-header .nav-toggle{display:inline-flex}.cbp-global-nav{display:none;position:absolute;left:var(--cbp-shell-pad);right:var(--cbp-shell-pad);top:68px;margin:0;padding:12px;background:#0e1217;border:1px solid var(--cbp-shell-line);border-radius:10px;box-shadow:0 18px 40px rgba(0,0,0,.4)}.cbp-global-nav.open{display:grid}.cbp-global-nav>a,.cbp-global-nav .clerk-auth-slot>a{width:100%}.cbp-global-nav .clerk-auth-slot{margin:4px 0 0;display:grid}.cbp-global-logo{height:42px;max-width:58vw}}
@media(max-width:520px){.cbp-global-header-inner{min-height:66px}.cbp-global-logo{height:36px;max-width:64vw}.cbp-global-footer .footer-primary,.cbp-global-footer .footer-legal{align-items:flex-start;flex-direction:column}.cbp-global-footer nav{flex-direction:column}}
`;

const globalJs=`(()=>{
  const nav=document.querySelector('.cbp-global-nav');
  const toggle=document.querySelector('.cbp-global-header .nav-toggle');
  if(toggle&&nav&&!toggle.dataset.cbpShellBound){
    toggle.dataset.cbpShellBound='true';
    toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  }
  const slot=document.getElementById('clerk-auth-slot');
  if(!slot)return;
  const cfg=window.CBP_CONFIG||{};
  const siteBase=cfg.siteBase||'/';
  const signUpUrl=cfg.signUpUrl||(siteBase+'create-account/');
  const signInUrl=cfg.signInUrl||siteBase;
  const afterSignOutUrl=cfg.afterSignOutUrl||siteBase;
  const publishable=cfg.clerkPublishableKey||'';
  const uiUrl=cfg.clerkUiUrl||'';
  const jsUrl=cfg.clerkJsUrl||'';
  let loadPromise=null;
  const hasSessionCookie=()=>document.cookie.split(';').some(part=>part.trim().startsWith('__session='));
  function signedOut(){slot.innerHTML='<a href="#" data-cbp-global-signin class="btn-nav btn-nav-signin">Sign In</a><a href="'+signUpUrl+'" class="btn-nav btn-nav-signup">Create Account</a>';const link=slot.querySelector('[data-cbp-global-signin]');if(link)link.addEventListener('click',e=>{e.preventDefault();openSignIn();});}
  function loadScript(src,marker,key){return new Promise((resolve,reject)=>{if(!src){reject(new Error('missing '+marker));return;}const existing=document.querySelector('script['+marker+']');if(existing){if((marker==='data-cbp-clerk-ui'&&window.__internal_ClerkUICtor)||(marker==='data-cbp-clerk-js'&&window.Clerk)){resolve();return;}existing.addEventListener('load',resolve,{once:true});existing.addEventListener('error',reject,{once:true});return;}const script=document.createElement('script');script.src=src;script.defer=true;script.crossOrigin='anonymous';script.setAttribute(marker,'true');if(key)script.setAttribute('data-clerk-publishable-key',key);script.onload=resolve;script.onerror=reject;document.head.appendChild(script);});}
  async function ensureClerk(){if(window.Clerk&&window.Clerk.loaded)return true;if(loadPromise)return loadPromise;loadPromise=(async()=>{try{if(!publishable||!uiUrl||!jsUrl)return false;if(!window.__internal_ClerkUICtor)await loadScript(uiUrl,'data-cbp-clerk-ui');if(!window.Clerk)await loadScript(jsUrl,'data-cbp-clerk-js',publishable);if(!window.Clerk)return false;await window.Clerk.load({ui:{ClerkUI:window.__internal_ClerkUICtor},signInUrl,signUpUrl,signInFallbackRedirectUrl:siteBase,signUpFallbackRedirectUrl:siteBase,afterSignOutUrl});return true;}catch(error){console.error('Crew Blueprint Clerk shell failed to initialize',error);loadPromise=null;return false;}})();return loadPromise;}
  async function openSignIn(){if(!await ensureClerk())return;if(typeof window.Clerk.openSignIn==='function')window.Clerk.openSignIn({withSignUp:false,transferable:false,signUpUrl});}
  function render(){if(!window.Clerk||!window.Clerk.isSignedIn){signedOut();return;}slot.innerHTML='<a href="'+(cfg.coursesUrl||siteBase+'courses/')+'" class="btn-nav btn-nav-dashboard">Courses</a><div id="cbp-global-user-button"></div>';const mount=document.getElementById('cbp-global-user-button');if(mount&&typeof window.Clerk.mountUserButton==='function')window.Clerk.mountUserButton(mount);}
  window.addEventListener('load',async()=>{signedOut();if(!cfg.serverAuthenticated&&!hasSessionCookie())return;if(await ensureClerk()){render();window.Clerk.addListener(render);}});
  signedOut();
})();
`;

try{if(!(await stat(path.join(siteDir,'images','crew-blueprint-logo.png'))).isFile())throw new Error();}catch{throw new Error('Missing required full wordmark: _site/images/crew-blueprint-logo.png');}
await mkdir(path.join(siteDir,'css'),{recursive:true});
await mkdir(path.join(siteDir,'js'),{recursive:true});
await writeFile(path.join(siteDir,cssRel),globalCss,'utf8');
await writeFile(path.join(siteDir,jsRel),globalJs,'utf8');

const records=[];
const failures=[];
for(const file of (await walk(siteDir)).filter(file=>file.endsWith('.html'))){
  const source=path.relative(siteDir,file).split(path.sep).join('/');
  let html=await readFile(file,'utf8');
  if(!/<html\b/i.test(html)||!/<body\b/i.test(html)||!/<\/body>/i.test(html))continue;
  const beforeMain=extractMain(html);
  const prefix=prefixFor(source);
  if(!html.includes('wordpress-global-shell.css'))html=html.replace(/<\/head>/i,`  <link rel="stylesheet" href="${prefix}${cssRel}?v=20260914-2">\n</head>`);
  html=/<header\b[\s\S]*?<\/header>/i.test(html)?html.replace(/<header\b[\s\S]*?<\/header>/i,header(prefix)):html.replace(/<body\b[^>]*>/i,m=>m+'\n'+header(prefix));
  html=/<footer\b[\s\S]*?<\/footer>/i.test(html)?html.replace(/<footer\b[\s\S]*?<\/footer>/i,footer(prefix)):html.replace(/<\/body>/i,footer(prefix)+'\n</body>');
  const hasBlueprintRuntime=/\bblueprint-v4\.js\b/i.test(html);
  if(!hasBlueprintRuntime&&!html.includes('wordpress-global-shell.js'))html=html.replace(/<\/body>/i,`  <script src="${prefix}${jsRel}?v=20260914-2"></script>\n</body>`);
  const afterMain=extractMain(html);
  if(beforeMain!==afterMain)failures.push(`${source}: <main> changed during shell normalization`);
  const hc=(html.match(/data-cbp-global-shell="header"/g)||[]).length;
  const fc=(html.match(/data-cbp-global-shell="footer"/g)||[]).length;
  const lc=(html.match(/crew-blueprint-logo\.png/g)||[]).length;
  const runtimeCount=(html.match(/(?:blueprint-v4|wordpress-global-shell)\.js/g)||[]).length;
  if(hc!==1)failures.push(`${source}: expected one global header, found ${hc}`);
  if(fc!==1)failures.push(`${source}: expected one global footer, found ${fc}`);
  if(lc<2)failures.push(`${source}: expected header/footer wordmark references`);
  if(runtimeCount<1)failures.push(`${source}: no shell runtime present`);
  await writeFile(file,html,'utf8');
  records.push({source,main_sha256:sha(afterMain),header_count:hc,footer_count:fc,logo_refs:lc,shell_runtime:hasBlueprintRuntime?'blueprint-v4':'wordpress-global-shell'});
}
await mkdir(path.join(siteDir,'data','generated'),{recursive:true});
await writeFile(path.join(siteDir,manifestRel),JSON.stringify({version:'2026-09-14.2',documents:records.length,content_main_preserved:failures.every(item=>!item.includes('<main>')),records},null,2)+'\n','utf8');
if(failures.length){console.error(`WordPress shell normalization failed with ${failures.length} error(s):`);for(const failure of failures)console.error('- '+failure);process.exit(1);}
console.log(`Normalized ${records.length} WordPress release documents without changing <main> content.`);
