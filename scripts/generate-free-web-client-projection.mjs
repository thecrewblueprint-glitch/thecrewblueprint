import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { projectFreeClient, verifyFreeClient } from './free-client-projection-policy.mjs';

const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..');
const sourcePath=path.join(root,'data','generated','web-client-projection.json');
const targetPath=path.join(root,'data','generated','free-web-client-projection.json');

const source=JSON.parse(await readFile(sourcePath,'utf8'));
const output=projectFreeClient(source);
verifyFreeClient(source,output);

await writeFile(targetPath,JSON.stringify(output,null,2)+'\n','utf8');
console.log(`Generated minimal free client projection with ${output.courses.length} free/reference identities and ${output.sources.length} relevant public source records.`);
