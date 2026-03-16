#!/usr/bin/env node
/**
 * apply-copy.js
 * 
 * Reads a prospect's generated-copy.json and patches it into the
 * appropriate template's SITE config object, creating a ready-to-review
 * customized site in prospects/[slug]/site/.
 * 
 * Usage:
 *   node tools/apply-copy.js --slug flathead-fish-seafood --template restaurant
 * 
 * Input:  prospects/[slug]/generated-copy.json
 * Input:  prospects/[slug]/research.md  (for business info: phone, address, hours)
 * Output: prospects/[slug]/site/  (copied + patched template, ready to run)
 * 
 * Requirements: npm install commander fs-extra
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, cpSync } from 'fs';
import { join } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const PROSPECTS_DIR = join(ROOT, 'prospects');
const TEMPLATES_DIR = join(ROOT, 'templates');

// Parse CLI args
function getArg(flag) {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : null;
}

const SLUG = getArg('--slug');
const TEMPLATE = getArg('--template') || 'restaurant';

if (!SLUG) {
  console.error('Usage: node tools/apply-copy.js --slug [slug] --template [template-name]');
  process.exit(1);
}

const PROSPECT_DIR = join(PROSPECTS_DIR, SLUG);
const TEMPLATE_DIR = join(TEMPLATES_DIR, TEMPLATE);
const SITE_DIR = join(PROSPECT_DIR, 'site');

// Extract business facts from research.md
function extractFacts(researchMd) {
  const get = (label) => {
    const match = researchMd.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)`));
    return match ? match[1].trim() : '';
  };
  return {
    name: get('Name'),
    phone: get('Phone'),
    email: get('Email'),
    address: get('Location'),
    hours: (() => {
      const hoursMatch = researchMd.match(/\*\*Hours:\*\*\s*(.+)/);
      return hoursMatch ? hoursMatch[1].trim() : 'Call for hours';
    })(),
  };
}

function run() {
  // Validate inputs
  if (!existsSync(PROSPECT_DIR)) {
    console.error(`No prospect folder found: prospects/${SLUG}/`);
    process.exit(1);
  }
  if (!existsSync(TEMPLATE_DIR)) {
    console.error(`No template found: templates/${TEMPLATE}/`);
    console.error(`Available templates: outdoor-adventure, restaurant, lodging, professional-services, retail-boutique, auto-services`);
    process.exit(1);
  }

  const copyPath = join(PROSPECT_DIR, 'generated-copy.json');
  const researchPath = join(PROSPECT_DIR, 'research.md');

  if (!existsSync(copyPath)) {
    console.error(`No generated-copy.json found. Run first: node tools/generate-copy.js --slug ${SLUG}`);
    process.exit(1);
  }
  if (!existsSync(researchPath)) {
    console.error(`No research.md found in prospects/${SLUG}/`);
    process.exit(1);
  }

  const copy = JSON.parse(readFileSync(copyPath, 'utf8'));
  const research = readFileSync(researchPath, 'utf8');
  const facts = extractFacts(research);

  console.log(`\n📁 Copying template (${TEMPLATE}) → prospects/${SLUG}/site/`);

  // Copy template to site dir (overwrite if exists)
  if (existsSync(SITE_DIR)) {
    console.log('   Site dir exists — overwriting...');
  }
  cpSync(TEMPLATE_DIR, SITE_DIR, { recursive: true });

  console.log('✅ Template copied');
  console.log('📝 Patching SITE config with generated copy...');

  // Read page.tsx from the copied site
  const pagePath = join(SITE_DIR, 'src', 'app', 'page.tsx');
  if (!existsSync(pagePath)) {
    console.error(`No page.tsx found at ${pagePath}`);
    process.exit(1);
  }

  let pageContent = readFileSync(pagePath, 'utf8');

  // Apply patches by finding the SITE object and replacing key values
  // We replace line-by-line string matches within the SITE config block
  const patches = {
    // Hero
    heroH1: copy.heroHeadline,
    heroSub: copy.heroSubheadline,
    heroCTA1: copy.primaryCTA,
    heroCTA2: copy.secondaryCTA,

    // About
    aboutTitle: copy.aboutTitle,
    aboutP1: copy.aboutParagraph1,
    aboutP2: copy.aboutParagraph2,

    // Footer
    footerTagline: copy.footerTagline,

    // Business facts
    phone: facts.phone,
    email: facts.email,
    address: facts.address,
  };

  // Replace string values in the SITE config object
  for (const [key, value] of Object.entries(patches)) {
    if (!value) continue;
    // Match: key: 'old value', and replace the old value with the new one
    const regex = new RegExp(`(\\b${key}:\\s*['"\`])([^'"\`]*)(['"\`])`, 'g');
    pageContent = pageContent.replace(regex, `$1${value.replace(/'/g, "\\'")}$3`);
  }

  // Apply value props (more complex — replace the valueProps array)
  if (copy.valueProps && copy.valueProps.length === 3) {
    const vpBlock = `valueProps: [
    {
      icon: '✓',
      title: '${copy.valueProps[0].title}',
      desc: '${copy.valueProps[0].description.replace(/'/g, "\\'")}',
    },
    {
      icon: '✓',
      title: '${copy.valueProps[1].title}',
      desc: '${copy.valueProps[1].description.replace(/'/g, "\\'")}',
    },
    {
      icon: '✓',
      title: '${copy.valueProps[2].title}',
      desc: '${copy.valueProps[2].description.replace(/'/g, "\\'")}',
    },
  ],`;

    // Find and replace the valueProps block
    const vpRegex = /valueProps:\s*\[[\s\S]*?\],/;
    if (vpRegex.test(pageContent)) {
      pageContent = pageContent.replace(vpRegex, vpBlock);
    }
  }

  writeFileSync(pagePath, pageContent);

  // Also update layout.tsx metadata
  const layoutPath = join(SITE_DIR, 'src', 'app', 'layout.tsx');
  if (existsSync(layoutPath)) {
    let layout = readFileSync(layoutPath, 'utf8');
    if (facts.name) {
      layout = layout.replace(/(name:\s*['"])([^'"]*)(["'])/, `$1${facts.name}$3`);
    }
    if (copy.metaDescription) {
      layout = layout.replace(/(description:\s*['"])([^'"]*)(["'])/, `$1${copy.metaDescription.replace(/'/g, "\\'")}$3`);
    }
    if (copy.titleTag) {
      layout = layout.replace(/title:\s*`[^`]*`/, `title: \`${copy.titleTag}\``);
    }
    writeFileSync(layoutPath, layout);
  }

  console.log('✅ Copy applied to site\n');
  console.log('📋 What was patched:');
  console.log(`   Hero: "${copy.heroHeadline}"`);
  console.log(`   About: "${copy.aboutTitle}"`);
  console.log(`   CTA: "${copy.primaryCTA}"`);
  console.log(`   Phone: ${facts.phone}`);
  console.log('');
  console.log('🔍 Next steps:');
  console.log(`   1. cd prospects/${SLUG}/site && npm install && npm run dev`);
  console.log('   2. Review at localhost:3000 — adjust copy/colors as needed');
  console.log(`   3. node tools/deploy-demo.js --slug ${SLUG}`);
}

run();
