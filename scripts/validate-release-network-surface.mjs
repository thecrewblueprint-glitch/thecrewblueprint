import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..','_site');
const errors=[];

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
      {label:'stylesheet/preload',re:/<link\b[^>]*\bhref=["'](https?:\/\/[^"']+)["'][^>]*>/gi},
      {label:'embedded media',re:/<(?:img|iframe|audio|video|source)\b[^>]*\bsrc=["'](https?:\/\/[^"']+)["'][^>]*>/gi}
    ];
    for(const {label,re} of checks){
      for(const match of html.matchAll(re)){
        errors.push(`${name}: automatic external ${label} request -> ${match[1]}`);
      }
    }
  }
  if(file.endsWith('.css')){
    const css=await readFile(file,'utf8');
    for(const match of css.matchAll(/(?:@import\s+(?:url\()?["']?|url\(\s*["']?)(https?:\/\/[^"')\s;]+)/gi)){
      errors.push(`${name}: automatic external CSS request -> ${match[1]}`);
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
  console.log('- ordinary outbound source/reference links are not treated as automatic network requests');
}
