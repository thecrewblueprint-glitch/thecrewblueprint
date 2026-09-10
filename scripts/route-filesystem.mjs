import fs from 'node:fs';

const rawExistsSync = fs.existsSync.bind(fs);
let installed = false;

export function routeFilesystemPath(value) {
  return typeof value === 'string' ? value.split(/[?#]/, 1)[0] : value;
}

export function installRouteAwareExistsSync() {
  if (installed) return;
  fs.existsSync = (value) => rawExistsSync(routeFilesystemPath(value));
  installed = true;
}
