#!/usr/bin/env node
/**
 * package-site.js
 *
 * Packages a completed prospect site into a clean, developer-ready deliverable.
 * Supports three delivery modes:
 *
 *   --mode vercel-link   Just outputs the existing Vercel URL (for self-managed or retainer)
 *   --mode zip           Zips the Next.js source project for handoff to a developer
 *   --mode static        Runs `next build` + `next export`, zips static HTML/CSS/JS
 *                        (for shared hosting like Bluehost, SiteGround, cPanel)
 *
 * Usage:
 *   node tools/package-site.js --slug flathead-fish-seafood --mode zip
 *   node tools/package-site.js --slug flathead-fish-seafood --mode static
 *   node tools/package-site.js --slug flathead-fish-seafood --mode vercel-link
 *
 * Output:
 *   prospects/[slug]/deliverable/[slug]-source.zip         (--mode zip)
 *   prospects/[slug]/deliverable/[slug]-static.zip         (--mode static)
 *   prospects/[slug]/deliverable/DEVELOPER-HANDOFF.md      (always)
 *   prospects/[slug]/deliverable/CLIENT-INSTRUCTIONS.md    (always)
 */

import { execSync } from 'child_process';
import { createWriteStream, existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, basename } from 'path';
import { createGzip } from 'zlib';

const PROSPECTS_DIR = new URL('../prospects', import.meta.url).pathname;

function getArg(flag) {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : null;
}

const SLUG = getArg('--slug');
const MODE = getArg('--mode') || 'zip';

if (!SLUG) {
  console.error('Usage: node tools/package-site.js --slug [slug] --mode [vercel-link|zip|static]');
  process.exit(1);
}

const PROSPECT_DIR = join(PROSPECTS_DIR, SLUG);
const SITE_DIR = join(PROSPECT_DIR, 'site');
const DELIVER_DIR = join(PROSPECT_DIR, 'deliverable');

if (!existsSync(SITE_DIR)) {
  console.error(`No site found at prospects/${SLUG}/site/. Run apply-copy.js first.`);
  process.exit(1);
}

mkdirSync(DELIVER_DIR, { recursive: true });

// ─── Read research.md for business details ────────────────────────────────────

function readResearch() {
  const path = join(PROSPECT_DIR, 'research.md');
  if (!existsSync(path)) return {};
  const md = readFileSync(path, 'utf8');
  const name    = md.match(/\*\*Name:\*\*\s*(.+)/)?.[1]?.trim() || 'Business';
  const domain  = md.match(/\*\*Website:\*\*\s*(.+)/)?.[1]?.trim() || 'TBD';
  const demoUrl = md.match(/## Demo URL\s*\n(.+)/)?.[1]?.trim() || null;
  return { name, domain, demoUrl };
}

// ─── Generate developer handoff README ───────────────────────────────────────

function buildDeveloperHandoff({ businessName, mode, demoUrl }) {
  return `# Developer Handoff — ${businessName}

## What is this?

This is a custom website built for **${businessName}**, delivered as a Next.js project.
It was designed and developed by the sender. Your job is to deploy it to production.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Vanilla CSS (no Tailwind, no class libraries) |
| Fonts | Google Fonts (loaded via \`next/font/google\`) |
| Images | Next.js \`<Image>\` optimization |
| Deployment | Optimized for Vercel (also works on Netlify, Railway) |

---

## Files Included

\`\`\`
${SLUG}-${mode === 'static' ? 'static' : 'source'}.zip
├── src/
│   └── app/
│       ├── page.tsx          ← All site content (SITE config object at top of file)
│       ├── layout.tsx        ← Metadata, JSON-LD schema, Google Analytics
│       └── globals.css       ← All styles
├── public/                   ← Static assets (images, favicon)
├── package.json
├── next.config.mjs
└── tsconfig.json
\`\`\`

---

## To Edit Business Info

Open \`src/app/page.tsx\`. At the top of the file is a \`SITE\` config object.
All business details are set there — don't hunt through the JSX:

\`\`\`typescript
const SITE = {
  name: "Business Name",
  phone: "(406) 555-0100",
  email: "hello@example.com",
  address: "123 Main St, City, MT 12345",
  hours: "Mon–Fri 9am–5pm",
  // ... etc
};
\`\`\`

---

## Deployment (Vercel — recommended, free Hobby tier works)

\`\`\`bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy (from the unzipped folder)
cd ${SLUG}-source
npm install
vercel --prod
\`\`\`

Then in Vercel settings, add the client's custom domain.

---

## Deployment (Netlify)

1. Drag the unzipped folder into [netlify.com/drop](https://app.netlify.com/drop)
2. Or push to a GitHub repo and connect via Netlify dashboard
3. Set build command: \`npm run build\`
4. Set publish directory: \`.next\`

---

## Deployment (Static Hosting — cPanel, Bluehost, SiteGround)

${mode === 'static'
  ? `✅ A fully static build is included (\`${SLUG}-static.zip\`).

Extract the zip and upload the contents of the \`out/\` folder to your \`public_html\` directory via FTP or cPanel File Manager.

Note: Some Next.js features (image optimization, server-side rendering) are disabled in static export. All content on this site is static-compatible.`
  : `To deploy to traditional shared hosting (cPanel/FTP):

1. Run the package script in static mode to get a static export:
   \`node tools/package-site.js --slug ${SLUG} --mode static\`

2. Upload the contents of the generated \`out/\` folder to \`public_html\` via FTP.

Or use Vercel/Netlify (both free) — they handle Next.js natively with zero configuration.`}

---

## DNS Setup (when migrating the domain)

In the client's domain registrar (GoDaddy, Namecheap, etc.) — add:

| Type | Host | Value |
|---|---|---|
| A | @ | 76.76.21.21 *(Vercel)* |
| CNAME | www | cname.vercel-dns.com *(Vercel)* |

Allow 5–30 minutes for propagation. Verify at [dnschecker.org](https://dnschecker.org).

---

## Google Services Setup

After DNS is live:

1. **Search Console:** [search.google.com/search-console](https://search.google.com/search-console)
   - Add property → URL prefix → verify via HTML meta tag in \`layout.tsx\`
   - Submit \`sitemap.xml\` (auto-generated by Next.js at \`/sitemap.xml\`)

2. **Analytics:** The GA4 Measurement ID slot is in \`layout.tsx\`
   - Replace \`G-XXXXXXXXXX\` with the client's real ID if they have one
   - Or create a new GA4 property and drop the ID in

---

## Questions?

Contact the designer who sent this package.
${demoUrl ? `\n**Live Demo:** ${demoUrl}` : ''}
`;
}

// ─── Generate client-facing instructions ─────────────────────────────────────

function buildClientInstructions({ businessName, demoUrl }) {
  return `# ${businessName} — New Website

## What's happening next

Your new website is packaged and ready. Here are your options:

---

### Option A — We deploy it (easiest)
If you'd like us to handle the technical transfer:
1. We need login access to your domain registrar (GoDaddy, Namecheap, etc.)
2. We'll do the DNS switchover and have your new site live within a day
3. We'll set up Google Search Console and Analytics

### Option B — Your current web team deploys it
Forward the \`DEVELOPER-HANDOFF.md\` file and the zip to your developer or hosting company.
Everything they need to get it live is in that document.

### Option C — You host yourself (free on Vercel)
1. Create a free account at [vercel.com](https://vercel.com)
2. Upload the project zip via the Vercel dashboard
3. Add your domain in Vercel's domain settings
4. Done — free hosting, automatic SSL, automatic updates

---

## What you can update yourself

The file called \`page.tsx\` controls all the text on the site.
At the top is a simple list — phone number, hours, address, tagline.
Change those, save, redeploy (or ask your developer to).

---

## Your demo site
${demoUrl ? demoUrl : 'See the link your designer sent.'}

---

Questions? Just reply to the email this came with.
`;
}

// ─── Mode: vercel-link ────────────────────────────────────────────────────────

function handleVercelLinkMode(research) {
  if (!research.demoUrl) {
    console.error('No demo URL found in research.md. Run deploy-demo.js first.');
    process.exit(1);
  }
  console.log(`\n✅ Vercel URL: ${research.demoUrl}`);
  console.log('   Share this link directly with the client or their web team.\n');
}

// ─── Mode: zip (source) ───────────────────────────────────────────────────────

function handleZipMode(slug, businessName) {
  console.log('\n📦 Creating source zip...');
  const zipName = `${slug}-source.zip`;
  const zipPath = join(DELIVER_DIR, zipName);

  // Use system zip (macOS/Linux standard)
  execSync(
    `cd "${SITE_DIR}" && zip -r "${zipPath}" . -x "node_modules/*" -x ".next/*" -x ".vercel/*" -x "*.log"`,
    { stdio: 'pipe' }
  );

  const sizeMB = (execSync(`du -sh "${zipPath}"`).toString().split('\t')[0]);
  console.log(`   ✓ ${zipName} created (${sizeMB})`);
}

// ─── Mode: static ────────────────────────────────────────────────────────────

function handleStaticMode(slug, siteDir) {
  console.log('\n🏗️  Building static export...');

  // Patch next.config.mjs to add output: 'export' temporarily
  const configPath = join(siteDir, 'next.config.mjs');
  const originalConfig = readFileSync(configPath, 'utf8');

  if (!originalConfig.includes("output: 'export'")) {
    const patched = originalConfig.replace(
      'const nextConfig = {',
      "const nextConfig = {\n  output: 'export',"
    );
    writeFileSync(configPath, patched);
    console.log('   Patched next.config.mjs for static export');
  }

  try {
    console.log('   Running npm install...');
    execSync('npm install', { cwd: siteDir, stdio: 'pipe' });
    console.log('   Running next build...');
    execSync('npm run build', { cwd: siteDir, stdio: 'pipe' });
    console.log('   ✓ Static build complete → out/ directory');
  } catch (e) {
    // Restore config before failing
    writeFileSync(configPath, originalConfig);
    console.error('   Build failed:', e.message);
    process.exit(1);
  }

  // Restore config
  writeFileSync(configPath, originalConfig);

  // Zip the out/ directory
  console.log('   Creating static zip...');
  const zipName = `${slug}-static.zip`;
  const zipPath = join(DELIVER_DIR, zipName);
  const outDir = join(siteDir, 'out');

  execSync(`cd "${outDir}" && zip -r "${zipPath}" .`, { stdio: 'pipe' });
  const sizeMB = execSync(`du -sh "${zipPath}"`).toString().split('\t')[0];
  console.log(`   ✓ ${zipName} created (${sizeMB})`);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  const research = readResearch();
  const businessName = research.name;
  console.log(`\n📦 Packaging: ${businessName} [mode: ${MODE}]`);

  // Write support docs for all modes
  const devHandoff = buildDeveloperHandoff({ businessName, mode: MODE, demoUrl: research.demoUrl });
  const clientDoc  = buildClientInstructions({ businessName, demoUrl: research.demoUrl });

  writeFileSync(join(DELIVER_DIR, 'DEVELOPER-HANDOFF.md'), devHandoff);
  writeFileSync(join(DELIVER_DIR, 'CLIENT-INSTRUCTIONS.md'), clientDoc);
  console.log('   ✓ DEVELOPER-HANDOFF.md');
  console.log('   ✓ CLIENT-INSTRUCTIONS.md');

  if (MODE === 'vercel-link') {
    handleVercelLinkMode(research);
  } else if (MODE === 'zip') {
    handleZipMode(SLUG, businessName);
  } else if (MODE === 'static') {
    handleStaticMode(SLUG, SITE_DIR);
  } else {
    console.error(`Unknown mode: ${MODE}. Use: vercel-link | zip | static`);
    process.exit(1);
  }

  console.log(`\n✅ Deliverable ready at: prospects/${SLUG}/deliverable/`);
  console.log(`   DEVELOPER-HANDOFF.md  ← for their web team`);
  console.log(`   CLIENT-INSTRUCTIONS.md ← for the owner`);
  if (MODE !== 'vercel-link') {
    console.log(`   ${SLUG}-${MODE === 'static' ? 'static' : 'source'}.zip ← the site files`);
  }
}

run().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
