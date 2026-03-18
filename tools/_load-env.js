/**
 * _load-env.js — zero-dependency .env loader
 * Uses only Node.js built-ins (fs, path, url).
 * Imported via: node --import=./tools/_load-env.js tools/whatever.js
 */
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
const envPath    = resolve(__dirname, '../.env');

try {
  const lines = readFileSync(envPath, 'utf8').split('\n');
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key   = line.slice(0, eq).trim();
    const value = line.slice(eq + 1).trim();
    // Don't overwrite values already set in the shell environment
    if (key && !Object.prototype.hasOwnProperty.call(process.env, key)) {
      process.env[key] = value;
    }
  }
} catch {
  // No .env file found — that's fine, using system env vars
}
