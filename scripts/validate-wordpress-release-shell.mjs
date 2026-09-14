import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..');
const siteDir=path.join(root,'_site');
async function walk(dir){const out=[];for(const entry of await readdir(dir,{withFileTypes:true})){const full=path.join(dir,entry.name);if(entry.isDirectory())out.push(...await walk(full));else out.push(full)}return out;}
const errors=[];
try{if(!(await stat(path.join(siteDir,'images','crew-blueprint-logo.png'))).isFile())errors.push('Full Crew Blueprint wordmark asset is missing.');}catch{errors.push('Full Crew Blueprint wordmark asset is missing.');}
let checked=0;
for(const file of (await walk(siteDir)).filter(file=>file.endsWith('.html'))){
  const rel=path.relative(siteDir,file).split(path.sep).join('/');
  const html=await readFile(file,'utf8');
  if(!/<html\b/i.test(html)||!/<body\b/i.test(html))continue;
  checked++;
  const headers=(html.match(/data-cbp-global-shell="header"/g)||[]).length;
  const footers=(html.match(/data-cbp-global-shell="footer"/g)||[]).length;
  if(headers!==1)errors.push(`${rel}: global header count is ${headers}`);
  if(footers!==1)errors.push(`${rel}: global footer count is ${footers}`);
  if(!/crew-blueprint-logo\.png/.test(html))errors.push(`${rel}: full wordmark missing`);
  if(!/wordpress-global-shell\.css/.test(html))errors.push(`${rel}: global shell CSS missing`);
  for(const label of ['Home','Start Here','Courses','Field Skills','Context Labs'])if(!html.includes(`>${label}<`))errors.push(`${rel}: primary nav missing ${label}`);
}
if(errors.length){console.error(`WordPress release-shell validation failed with ${errors.length} error(s):`);for(const error of errors)console.error('- '+error);process.exit(1);}
console.log(`WordPress release-shell validation passed for ${checked} release documents.`);
