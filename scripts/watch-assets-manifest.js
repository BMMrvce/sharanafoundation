#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

const workspaceRoot = process.cwd();
const publicAssets = path.join(workspaceRoot, 'public', 'assets');
const watchDirs = ['herosection', 'gallery'].map((d) => path.join(publicAssets, d));
let timeout = null;

function regen() {
  exec('node scripts/generate-assets-manifest.js', { cwd: workspaceRoot }, (err, stdout, stderr) => {
    if (err) console.error('regenerate error', err);
    if (stdout) console.log(stdout.trim());
    if (stderr) console.error(stderr.trim());
  });
}

console.log('Watching asset folders for changes:', watchDirs.join(', '));

for (const dir of watchDirs) {
  try {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.watch(dir, { recursive: false }, (eventType, filename) => {
      if (!filename) return;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        console.log(`Change detected in ${dir}: ${filename} (${eventType}) — regenerating manifests`);
        regen();
      }, 150);
    });
  } catch (err) {
    console.error('watch failed for', dir, err);
  }
}

// Also watch top-level assets folder in case new subfolders are created
fs.watch(publicAssets, { recursive: false }, () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    console.log('Change detected in assets root — regenerating manifests');
    regen();
  }, 150);
});
