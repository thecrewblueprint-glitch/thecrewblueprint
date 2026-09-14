import { readFile, writeFile, copyFile, stat, rm } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..');
const outRoot=path.join(root,'_wordpress');
const pluginDir=path.join(outRoot,'the-crew-blueprint');
const entry=path.join(pluginDir,'the-crew-blueprint.php');
const runtimeSource=path.join(root,'wordpress','plugin-src','cbp-shell-runtime.php');
const runtimeTarget=path.join(pluginDir,'cbp-shell-runtime.php');
const zipPath=path.join(outRoot,'the-crew-blueprint-production.zip');
const manifestPath=path.join(outRoot,'the-crew-blueprint-production.manifest.json');

for(const file of [entry,runtimeSource]){
  try{if(!(await stat(file)).isFile())throw new Error();}catch{throw new Error(`Required WordPress runtime file missing: ${path.relative(root,file)}`);}
}

await copyFile(runtimeSource,runtimeTarget);
let php=await readFile(entry,'utf8');
const includeLine="\nrequire_once CBP_PLUGIN_DIR . 'cbp-shell-runtime.php';\n";
if(!php.includes("cbp-shell-runtime.php")){
  php=php.replace(/\s*$/,'')+includeLine;
  await writeFile(entry,php,'utf8');
}

const lintRuntime=spawnSync('php',['-l',runtimeTarget],{encoding:'utf8'});
if(lintRuntime.status!==0)throw new Error('Dynamic shell runtime PHP lint failed: '+(lintRuntime.stderr||lintRuntime.stdout||''));
const lintEntry=spawnSync('php',['-l',entry],{encoding:'utf8'});
if(lintEntry.status!==0)throw new Error('WordPress plugin PHP lint failed after shell injection: '+(lintEntry.stderr||lintEntry.stdout||''));

await rm(zipPath,{force:true});
const zip=spawnSync('zip',['-qr',path.basename(zipPath),'the-crew-blueprint'],{cwd:outRoot,encoding:'utf8'});
if(zip.status!==0)throw new Error('WordPress package re-zip failed: '+(zip.stderr||zip.stdout||''));

const bytes=await readFile(zipPath);
const sha256=crypto.createHash('sha256').update(bytes).digest('hex');
let manifest={};
try{manifest=JSON.parse(await readFile(manifestPath,'utf8'));}catch{}
manifest.zip_sha256=sha256;
manifest.zip_bytes=bytes.length;
manifest.dynamic_shell_runtime='cbp-shell-runtime.php';
manifest.dynamic_create_account_global_shell=true;
manifest.permalink_release_diagnostic=true;
await writeFile(manifestPath,JSON.stringify(manifest,null,2)+'\n','utf8');

console.log('Dynamic WordPress shell runtime injected.');
console.log('- existing Clerk/adult eligibility implementation preserved');
console.log('- create-account route receives global header/logo/footer');
console.log('- plain-permalink admin diagnostic enabled');
console.log('- ZIP SHA-256: '+sha256);
