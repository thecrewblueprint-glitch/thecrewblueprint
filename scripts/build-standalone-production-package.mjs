import { cp, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const wordpressRoot = path.join(root, '_wordpress', 'the-crew-blueprint');
const templateRoot = path.join(root, 'deployment', 'standalone');
const outRoot = path.join(root, '_standalone');
const appDir = path.join(outRoot, 'the-crew-blueprint');
const zipPath = path.join(outRoot, 'the-crew-blueprint-standalone-production.zip');
const manifestPath = path.join(outRoot, 'the-crew-blueprint-standalone-production.manifest.json');

async function exists(file) {
  try { await stat(file); return true; } catch { return false; }
}

if (!await exists(wordpressRoot)) {
  const build = spawnSync(process.execPath, [path.join(scriptDir, 'build-wordpress-production-package.mjs')], { cwd: root, stdio: 'inherit' });
  if (build.status !== 0) process.exit(build.status ?? 1);
}

await rm(outRoot, { recursive: true, force: true });
await mkdir(appDir, { recursive: true });

// Reuse the already-validated generated frontend/content projection, not the WordPress runtime.
await cp(path.join(wordpressRoot, 'assets'), path.join(appDir, 'assets'), { recursive: true });
await cp(path.join(wordpressRoot, 'content'), path.join(appDir, 'content'), { recursive: true });
await mkdir(path.join(appDir, 'config'), { recursive: true });
await cp(path.join(wordpressRoot, 'config', 'routes.php'), path.join(appDir, 'config', 'routes.php'));
await cp(templateRoot, appDir, { recursive: true, force: true });

const routesText = await readFile(path.join(wordpressRoot, 'config', 'routes.php'), 'utf8');
const publicRouteCount = (routesText.match(/'path'\s*=>/g) || []).length;
const protectedRouteCount = (routesText.match(/'slug'\s*=>/g) || []).length;

const zip = spawnSync('zip', ['-qr', zipPath, 'the-crew-blueprint'], { cwd: outRoot, stdio: 'inherit' });
if (zip.status !== 0) throw new Error('Could not build standalone ZIP.');

const bytes = await readFile(zipPath);
const manifest = {
  package: 'the-crew-blueprint-standalone-production',
  runtime: 'standalone-php-apache',
  minimum_php: '8.1',
  source_runtime_projection: 'wordpress-production-generated-content-only',
  public_route_count: publicRouteCount,
  protected_route_count: protectedRouteCount,
  public_reference_delivery: 'metadata_only_via_sources_page',
  raw_dob_retained: false,
  paid_content_included: false,
  production_atlas_included: false,
  content_storage: 'PHP guarded return payloads; protected course bodies are denied from direct web access and served only after server-side Clerk authorization',
  generated_at: new Date().toISOString(),
  zip_sha256: crypto.createHash('sha256').update(bytes).digest('hex'),
  zip_bytes: bytes.length
};
await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(JSON.stringify(manifest, null, 2));
