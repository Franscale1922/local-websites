#!/usr/bin/env node
/**
 * deploy-demo.js
 * 
 * Deploys a prospect's demo site to Vercel and writes the URL back
 * to the prospect's research.md and (optionally) a Google Sheet.
 * 
 * Usage:
 *   node tools/deploy-demo.js --slug flathead-fish-seafood
 * 
 * Requirements: vercel CLI installed globally (npm i -g vercel)
 *               VERCEL_TOKEN env variable set
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const PROSPECTS_DIR = join(ROOT, 'prospects');

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

function run() {
  if (!existsSync(SITE_DIR)) {
    console.error(`No site found at prospects/${SLUG}/site/ — run apply-copy.js first`);
    process.exit(1);
  }

  const projectName = `${SLUG}-demo`;
  console.log(`\n🚀 Deploying ${projectName} to Vercel...`);

  let deployUrl;
  try {
    const output = execSync(
      `vercel --prod --yes --name ${projectName} --token ${process.env.VERCEL_TOKEN || ''}`,
      { cwd: SITE_DIR, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }
    );

    // Extract URL from Vercel output
    const urlMatch = output.match(/https:\/\/[^\s]+\.vercel\.app/);
    if (!urlMatch) throw new Error('Could not parse deploy URL from Vercel output');
    deployUrl = urlMatch[0];

  } catch (err) {
    console.error('Vercel deploy failed:', err.message);
    console.error('Make sure: vercel CLI installed + VERCEL_TOKEN env set + site builds cleanly');
    process.exit(1);
  }

  console.log(`✅ Deployed: ${deployUrl}\n`);

  // Write URL back to research.md
  if (existsSync(RESEARCH_PATH)) {
    let research = readFileSync(RESEARCH_PATH, 'utf8');

    if (research.includes('Demo URL:')) {
      research = research.replace(/Demo URL:\s*.+/, `Demo URL: ${deployUrl}`);
    } else {
      research += `\n## Deploy\n- **Demo URL:** ${deployUrl}\n- **Deployed:** ${new Date().toISOString().split('T')[0]}\n`;
    }

    writeFileSync(RESEARCH_PATH, research);
    console.log('📝 research.md updated with demo URL');
  }

  console.log('\n📧 Ready to send outreach email.');
  console.log(`   Demo link: ${deployUrl}`);
  console.log('   Next step: Add to Google Sheet + trigger N8N email sequence\n');
}

run();
