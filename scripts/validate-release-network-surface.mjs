import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..','_site');
const errors=[];
const allowedDynamicOrigins=new Set(['https://pleased-camel-3432.clerk.accounts.dev']);

async function walk(dir){
  const out=[];
  for(const entry of await readdir(dir,{withFileTypes:true})){
    const full=path.join(dir,entry.name);
    if(entry.isDirectory())out.push(...await walk(full));
    else out.push(full);
  }
  return out;
}

function rel(file){return path.relative(root,file).split(path.sep).join('/');}

const files=await walk(root);
for(const file of files){
  const name=rel(file);
  if(file.endsWith('.html')){
    const html=await readFile(file,'utf8');
    const checks=[
      {label:'script',re:/<script\b[^>]*\bsrc=["'](https?:\/\/[^"']+)["'][^>]*>/gi},
      {label:'embedded media',re:/<(?:img|iframe|audio|video|source)\b[^>]*\bsrc=["'](https?:\/\/[^"']+)["'][^>]*>/gi}
    ];
    for(const {label,re} of checks){
      for(const match of html.matchAll(re)){
        errors.push(`${name}: automatic external ${label} request -> ${match[1]}`);
      }
    }
    for(const match of html.matchAll(/<link\b[^>]*>/gi)){
      const tag=match[0];
      const href=tag.match(/\bhref=["'](https?:\/\/[^"']+)["']/i)?.[1];
      const rel=tag.match(/\brel=["']([^"']+)["']/i)?.[1]?.toLowerCase()||'';
      if(href&&/(?:^|\s)(?:stylesheet|preload|modulepreload|preconnect|dns-prefetch)(?:\s|$)/.test(rel)){
        errors.push(`${name}: automatic external link resource (${rel||'unknown rel'}) -> ${href}`);
      }
    }
  }
  if(file.endsWith('.css')){
    const css=await readFile(file,'utf8');
    for(const match of css.matchAll(/(?:@import\s+(?:url\()?["']?|url\(\s*["']?)(https?:\/\/[^"')\s;]+)/gi)){
      errors.push(`${name}: automatic external CSS request -> ${match[1]}`);
    }
  }
  if(file.endsWith('.js')){
    const js=await readFile(file,'utf8');
    const dynamicRequestPatterns=[
      /fetch\(\s*["'](https?:\/\/[^"']+)["']/gi,
      /navigator\.sendBeacon\(\s*["'](https?:\/\/[^"']+)["']/gi,
      /\.open\(\s*["'][A-Z]+["']\s*,\s*["'](https?:\/\/[^"']+)["']/gi,
      /import\(\s*["'](https?:\/\/[^"']+)["']\s*\)/gi
    ];
    for(const pattern of dynamicRequestPatterns){
      for(const match of js.matchAll(pattern)){
        let origin='';
        try{origin=new URL(match[1]).origin;}catch{continue;}
        if(origin==='https://thecrewblueprint.com')continue;
        if(allowedDynamicOrigins.has(origin)&&['js/blueprint-v4.js','js/course-consent.js'].includes(name))continue;
        errors.push(`${name}: unexpected automatic JavaScript request -> ${match[1]}`);
      }
    }
  }
}

if(errors.length){
  console.error(`Release network-surface validation failed with ${errors.length} automatic third-party request(s):`);
  for(const error of errors)console.error('- '+error);
  console.error('Production release policy: public/free artifact should not contact third parties automatically. Authentication providers may load only when the user initiates authentication or an existing authenticated session must be restored.');
  process.exitCode=1;
}else{
  console.log('Release network-surface validation passed.');
  console.log('- no automatic third-party scripts, stylesheets, fonts, images, frames, audio, or video in the free release artifact');
  console.log('- passive evidence/reference URLs embedded as data are allowed; only automatic browser requests are blocked');
}
