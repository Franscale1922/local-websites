#!/usr/bin/env node
/**
 * run-pipeline.js
 *
 * Master orchestration script. Runs the full prospect pipeline for a slug,
 * from initial research through demo deployment, in the right order.
 * Skips steps that have already been completed.
 *
 * Usage:
 *   node tools/run-pipeline.js --slug flathead-fish-seafood
 *   node tools/run-pipeline.js --slug flathead-fish-seafood --from copy   # resume from step
 *   node tools/run-pipeline.js --slug flathead-fish-seafood --dry-run      # show plan only
 *
 * Steps (in order):
 *   1. digital-audit    — forensic web research
 *   2. scrape           — scrape existing site copy
 *   3. reviews          — pull Google reviews
 *   4. voice            — generate voice brief
 *   5. copy             — generate website copy
 *   6. apply            — apply copy to template
 *   7. deploy           — deploy demo to Vercel
 *   8. crm              — update Google Sheet status
 */

import { execSync } from 'child_process';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

const PROSPECTS_DIR = new URL('../prospects', import.meta.url).pathname;

function getArg(flag) {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : null;
}

const SLUG      = getArg('--slug');
const FROM_STEP = getArg('--from');
const DRY_RUN   = process.argv.includes('--dry-run');

if (!SLUG) {
  console.error('Usage: node tools/run-pipeline.js --slug [slug]');
  process.exit(1);
}

const PROSPECT_DIR = join(PROSPECTS_DIR, SLUG);
if (!existsSync(PROSPECT_DIR)) {
  console.error(`No prospect folder: prospects/${SLUG}/`);
  console.error('Create it first: mkdir -p prospects/[slug] && cp templates/research-template.md prospects/[slug]/research.md');
  process.exit(1);
}

// ─── Step definitions ─────────────────────────────────────────────────────────

function hasFile(...paths) {
  return paths.some(p => existsSync(join(PROSPECT_DIR, p)));
}

function readResearch() {
  const p = join(PROSPECT_DIR, 'research.md');
  return existsSync(p) ? readFileSync(p, 'utf8') : '';
}

function getField(md, key) {
  const m = md.match(new RegExp(`\\*\\*${key}:\\*\\*\\s*(.+)`));
  return m ? m[1].trim() : null;
}

const research = readResearch();
const businessName = getField(research, 'Name')     || SLUG;
const websiteUrl   = getField(research, 'Website')  || null;
const placeId      = getField(research, 'Google Place ID') || null;
const city         = getField(research, 'Location')?.split(',')[1]?.trim() || '';
const template     = getField(research, 'Template') || null;

const STEPS = [
  {
    id: 'digital-audit',
    label: 'Forensic web research (digital-audit.js)',
    done: () => hasFile('digital-audit.json'),
    run: () => `node tools/digital-audit.js --slug ${SLUG} --business "${businessName}" --city "${city}"`,
    requires: businessName !== SLUG,
    requiresMsg: 'Fill in "**Name:**" in research.md first',
  },
  {
    id: 'scrape',
    label: 'Scrape existing site copy (scrape-existing-site.js)',
    done: () => hasFile('existing-copy.txt'),
    run: () => websiteUrl ? `node tools/scrape-existing-site.js --slug ${SLUG} --url ${websiteUrl}` : null,
    requires: !!websiteUrl,
    requiresMsg: 'Fill in "**Website:**" in research.md first',
  },
  {
    id: 'reviews',
    label: 'Pull Google reviews (scrape-reviews.js)',
    done: () => hasFile('google-reviews.json'),
    run: () => placeId && placeId !== 'ChIJXXXXXXXXXXXX' ? `node tools/scrape-reviews.js --slug ${SLUG} --place-id "${placeId}"` : null,
    requires: !!placeId && placeId !== 'ChIJXXXXXXXXXXXX',
    requiresMsg: 'Fill in "**Google Place ID:**" in research.md first',
  },
  {
    id: 'voice',
    label: 'Generate Voice Brief (generate-voice-brief.js)',
    done: () => hasFile('voice-brief.json'),
    run: () => `node tools/generate-voice-brief.js --slug ${SLUG}`,
    requires: hasFile('google-reviews.json') || hasFile('existing-copy.txt'),
    requiresMsg: 'Run scrape or reviews step first',
  },
  {
    id: 'copy',
    label: 'Generate website copy (generate-copy.js)',
    done: () => hasFile('generated-copy.json'),
    run: () => `node tools/generate-copy.js --slug ${SLUG}`,
    requires: hasFile('voice-brief.json'),
    requiresMsg: 'Run voice step first',
  },
  {
    id: 'apply',
    label: 'Apply copy to template (apply-copy.js)',
    done: () => hasFile('site/src/app/page.tsx'),
    run: () => template ? `node tools/apply-copy.js --slug ${SLUG} --template ${template}` : null,
    requires: !!template && hasFile('generated-copy.json'),
    requiresMsg: 'Fill in "**Template:**" in research.md and run copy step first',
  },
  {
    id: 'deploy',
    label: 'Deploy demo to Vercel (deploy-demo.js)',
    done: () => {
      const md = readResearch();
      return md.includes('## Demo URL') && !md.includes('(pending deployment)');
    },
    run: () => `node tools/deploy-demo.js --slug ${SLUG}`,
    requires: hasFile('site/src/app/page.tsx') && !!process.env.VERCEL_TOKEN,
    requiresMsg: !process.env.VERCEL_TOKEN ? 'Set VERCEL_TOKEN in .env' : 'Run apply step first',
  },
  {
    id: 'crm',
    label: 'Update CRM status (update-crm.js)',
    done: () => false, // always run
    run: () => `node tools/update-crm.js --slug ${SLUG} --status SCORED`,
    requires: !!process.env.GOOGLE_SHEET_ID,
    requiresMsg: 'Set GOOGLE_SHEET_ID in .env',
  },
];

// ─── Run ──────────────────────────────────────────────────────────────────────

function run() {
  console.log(`\n🚀 Pipeline: ${businessName} (${SLUG})\n`);

  let skipping = !!FROM_STEP;
  let ranCount = 0;
  let blockedAt = null;

  for (const step of STEPS) {
    // Handle --from flag
    if (skipping && step.id === FROM_STEP) skipping = false;
    if (skipping) {
      console.log(`   [skip]    ${step.label}`);
      continue;
    }

    // Already done?
    if (step.done()) {
      console.log(`   [✓ done]  ${step.label}`);
      continue;
    }

    // Missing requirements?
    if (!step.requires) {
      console.log(`   [⚠ block] ${step.label}`);
      console.log(`             → ${step.requiresMsg}`);
      if (!blockedAt) blockedAt = step.id;
      continue;
    }

    // Command not defined (optional step)?
    const cmd = step.run();
    if (!cmd) {
      console.log(`   [skip]    ${step.label} — not applicable`);
      continue;
    }

    console.log(`\n   ▶ ${step.label}`);
    console.log(`     $ ${cmd}\n`);

    if (!DRY_RUN) {
      try {
        execSync(cmd, { stdio: 'inherit', cwd: process.cwd() });
        ranCount++;
      } catch (e) {
        console.error(`\n   ❌ Step failed: ${step.id}`);
        console.error('   Fix the error above and re-run to resume from this step:');
        console.error(`   node tools/run-pipeline.js --slug ${SLUG} --from ${step.id}`);
        process.exit(1);
      }
    } else {
      console.log(`     [dry-run — not executed]`);
      ranCount++;
    }
  }

  console.log('\n' + '─'.repeat(60));
  if (DRY_RUN) {
    console.log(`📋 Dry run complete. ${ranCount} steps would run.`);
  } else {
    console.log(`✅ Pipeline complete. ${ranCount} steps ran.`);
  }
  if (blockedAt) {
    console.log(`\n⚠️  Blocked at: ${blockedAt}`);
    console.log('   Fill in research.md and re-run to continue.');
  }
}

run();
