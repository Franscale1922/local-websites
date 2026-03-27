#!/usr/bin/env node
/**
 * deploy-demo.js
 * 
 * Deploys a prospect's demo site to Vercel via REST API and writes the URL
 * back to the prospect's research.md.
 * 
 * Usage:
 *   node tools/deploy-demo.js --slug premier-electrical-svc
 * 
 * Requirements: VERCEL_TOKEN set in this file (fallback) or shell environment
 *               GitHub repo must be connected (repoId set below)
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const PROSPECTS_DIR = join(ROOT, 'prospects');

// Token loaded from environment variable (add to ~/.zshrc: export VERCEL_TOKEN="your-token")
const TOKEN = process.env.VERCEL_TOKEN;
if (!TOKEN) {
  console.error('❌ VERCEL_TOKEN env variable is not set.');
  console.error('   Add to ~/.zshrc: export VERCEL_TOKEN="vcp_..."');
  process.exit(1);
}

// GitHub repo info
const GITHUB_REPO = 'Franscale1922/local-websites';
const GITHUB_REPO_ID = 1183717641;
const GIT_BRANCH = 'main';

function getArg(flag) {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : null;
}

const SLUG = getArg('--slug');
if (!SLUG) {
  console.error('Usage: node tools/deploy-demo.js --slug [slug]');
  process.exit(1);
}

const SITE_DIR = join(PROSPECTS_DIR, SLUG, 'site');
const RESEARCH_PATH = join(PROSPECTS_DIR, SLUG, 'research.md');

async function vercelApi(method, path, body) {
  const res = await fetch(`https://api.vercel.com${path}`, {
    method,
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

async function waitForReady(deployId, maxWait = 300000) {
  const start = Date.now();
  while (Date.now() - start < maxWait) {
    await new Promise(r => setTimeout(r, 8000));
    const d = await vercelApi('GET', `/v13/deployments/${deployId}`);
    const status = d.status || d.readyState;
    process.stdout.write(`\r  ${status}...`);
    if (status === 'READY') return d;
    if (status === 'ERROR' || status === 'CANCELED') throw new Error(`Build ${status}: ${JSON.stringify(d.errorMessage || '')}`);
  }
  throw new Error('Timed out waiting for deployment to complete');
}

async function run() {
  if (!existsSync(SITE_DIR)) {
    console.error(`No site found at prospects/${SLUG}/site/`);
    process.exit(1);
  }

  const projectName = `${SLUG}-demo`;
  console.log(`\n🚀 Deploying ${projectName} to Vercel (REST API)...`);

  // Trigger deployment
  const deploy = await vercelApi('POST', '/v13/deployments', {
    name: projectName,
    gitSource: {
      type: 'github',
      repo: GITHUB_REPO,
      repoId: GITHUB_REPO_ID,
      ref: GIT_BRANCH,
    },
    projectSettings: {
      rootDirectory: `prospects/${SLUG}/site`,
      framework: 'nextjs',
      buildCommand: 'npm run build',
      installCommand: 'npm install',
    },
  });

  if (deploy.error) {
    console.error('Vercel API error:', deploy.error.message);
    process.exit(1);
  }

  const deployId = deploy.id;
  console.log(`  Deploy ID: ${deployId}`);
  console.log(`  Building`, { end: '' });

  // Wait for build
  const ready = await waitForReady(deployId);
  const deployUrl = `https://${ready.url}`;
  const stableUrl = `https://${projectName}.vercel.app`;

  console.log(`\n\n✅ Deployed!`);
  console.log(`  Unique URL:  ${deployUrl}`);
  console.log(`  Stable URL:  ${stableUrl}`);

  // Write URL back to research.md
  if (existsSync(RESEARCH_PATH)) {
    let research = readFileSync(RESEARCH_PATH, 'utf8');
    if (research.includes('Demo URL:')) {
      research = research.replace(/Demo URL:\s*.+/, `Demo URL: ${stableUrl}`);
    } else {
      research += `\n## Deploy\n- **Demo URL:** ${stableUrl}\n- **Deployed:** ${new Date().toISOString().split('T')[0]}\n`;
    }
    writeFileSync(RESEARCH_PATH, research);
    console.log('📝 research.md updated');
  }

  console.log('\n📧 Ready to send outreach email.');
  console.log(`   Demo link: ${stableUrl}\n`);
}

run().catch(err => {
  console.error('\n❌ Deploy failed:', err.message);
  process.exit(1);
});
