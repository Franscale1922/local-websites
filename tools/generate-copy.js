#!/usr/bin/env node
/**
 * generate-copy.js
 * 
 * Uses the Claude API (or OpenAI as fallback) to generate all website copy
 * for a prospect, based on their Voice Brief and existing content.
 * 
 * Usage:
 *   node tools/generate-copy.js --slug flathead-fish-seafood
 * 
 * Input:  prospects/[slug]/research.md  (Voice Brief section)
 * Input:  prospects/[slug]/existing-copy.txt  (scraped from their old site)
 * Output: prospects/[slug]/generated-copy.json
 * 
 * Requirements:
 *   npm install @anthropic-ai/sdk node-fetch commander
 *   Set env: ANTHROPIC_API_KEY or OPENAI_API_KEY
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const PROSPECTS_DIR = new URL('../prospects', import.meta.url).pathname;

// Parse CLI
const slugArg = process.argv.indexOf('--slug');
if (slugArg === -1 || !process.argv[slugArg + 1]) {
  console.error('Usage: node tools/generate-copy.js --slug [business-slug]');
  process.exit(1);
}
const SLUG = process.argv[slugArg + 1];
const PROSPECT_DIR = join(PROSPECTS_DIR, SLUG);

if (!existsSync(PROSPECT_DIR)) {
  console.error(`No prospect folder found at prospects/${SLUG}/`);
  process.exit(1);
}

// Read research.md to extract Voice Brief
function extractVoiceBrief(researchMd) {
  const lines = researchMd.split('\n');
  const brief = {};
  let inBrief = false;

  for (const line of lines) {
    if (line.includes('## Voice Brief')) { inBrief = true; continue; }
    if (inBrief && line.startsWith('## ')) { inBrief = false; continue; }
    if (!inBrief) continue;

    const match = line.match(/\*\*(.+?):\*\*\s*(.+)/);
    if (match) {
      const key = match[1].toLowerCase().replace(/\s+/g, '_');
      brief[key] = match[2].trim();
    }
  }
  return brief;
}

// Read existing copy if available
function getExistingCopy() {
  const copyPath = join(PROSPECT_DIR, 'existing-copy.txt');
  if (existsSync(copyPath)) return readFileSync(copyPath, 'utf8').slice(0, 3000);
  return 'No existing copy available.';
}

// Read business info from research.md
function extractBusinessInfo(researchMd) {
  const info = {};
  const nameMatch = researchMd.match(/\*\*Name:\*\*\s*(.+)/);
  const catMatch = researchMd.match(/\*\*Category:\*\*\s*(.+)/);
  const cityMatch = researchMd.match(/\*\*Location:\*\*.+,\s*([A-Za-z\s]+),\s*MT/);
  if (nameMatch) info.name = nameMatch[1].trim();
  if (catMatch) info.category = catMatch[1].trim();
  if (cityMatch) info.city = cityMatch[1].trim();
  return info;
}

// ─── Writing rules sourced from waypoint-core-system/docs/VOICE_GUIDE.md ────
const WRITING_RULES = `
You are writing website copy for LOCAL business owners — real people, not corporations.
The copy must sound like this specific business owner wrote it, not a marketing agency.

FORBIDDEN WORDS AND PHRASES — never use any of these:
- leverage (as a verb), delve, dive deep, dive into
- cutting edge, game changer, game-changing, next-level
- seamless, synergy, paradigm, tapestry, realm, foster, catalyst
- navigate/navigating, testament, optimize, scale
- passionate, excited, thrilled, pleased to announce, proud to offer
- holistic approach, best-in-class, world-class
- "we are committed to", "dedicated to", "we pride ourselves"
- "contact us today", "don't hesitate to", "we look forward to"
- "your satisfaction is our priority", "quality you can trust"
- "serving the [City] community", "proud to serve"
- "With [X] years of experience" as an opener
- Excessive exclamation points
- Empty superlatives (best, finest, premier, top-rated) without proof

WRITING RULES:
- Short sentences: 8–14 words preferred. Vary rhythm.
- Short paragraphs: 2–3 sentences max
- Active voice only
- Lead with the customer's reality, not the business's credentials
- Specific beats vague: name actual services, actual locations, actual differentiators
- One clear CTA at a time — never two equal-weight actions
- Reading level: 7th grade or lower (not because the audience is unsophisticated — because clear writing moves faster)
- Sound like a person, not a brand
`;

async function generateCopy() {
  const researchPath = join(PROSPECT_DIR, 'research.md');
  if (!existsSync(researchPath)) {
    console.error(`No research.md found in prospects/${SLUG}/`);
    process.exit(1);
  }

  const research = readFileSync(researchPath, 'utf8');
  const brief = extractVoiceBrief(research);
  const existingCopy = getExistingCopy();
  const biz = extractBusinessInfo(research);

  if (!brief.tone_archetype) {
    console.error('Voice Brief not filled out in research.md. Complete the Voice Brief section first.');
    process.exit(1);
  }

  console.log(`\n🤖 Generating copy for: ${biz.name || SLUG}`);
  console.log(`   Tone: ${brief.tone_archetype}`);
  console.log(`   Vibe: ${brief['3_vibe_words'] || brief.vibe_words}`);
  console.log('');

  const prompt = `You are writing website copy for ${biz.name || SLUG}, a ${biz.category || 'local business'} in ${biz.city || 'Montana'}, MT.

VOICE BRIEF:
- Tone Archetype: ${brief.tone_archetype}
- Vibe words: ${brief['3_vibe_words'] || brief.vibe_words}
- Best customer quote: ${brief['what_their_best_customers_say'] || 'Not provided'}
- What the owner would NEVER say: ${brief['what_the_owner_would_never_say'] || 'corporate, generic, sales-y'}
- Key differentiator: ${brief.key_differentiator || 'Not provided'}

EXISTING WEBSITE COPY (for reference — do NOT copy, just understand their world):
${existingCopy}

Write all copy in their authentic voice. It must sound like THEM, not like a marketing agency.
If the tone is "Warm Neighbor" — be welcoming and genuine. 
If "Rugged Expert" — be direct, confident, minimal words.
If "Polished Pro" — be precise and trust-focused.
If "Playful Local" — be fun with insider warmth.

Generate the following. Respond ONLY with valid JSON, no markdown, no explanation:

{
  "heroHeadline": "6–10 words, punchy, their actual voice",
  "heroSubheadline": "1–2 sentences expanding the headline",
  "valueProps": [
    { "title": "Short title", "description": "2 sentences in their voice" },
    { "title": "Short title", "description": "2 sentences in their voice" },
    { "title": "Short title", "description": "2 sentences in their voice" }
  ],
  "aboutTitle": "their about section headline",
  "aboutParagraph1": "3–4 sentences, first person, tells their story authentically",
  "aboutParagraph2": "2–3 sentences, what makes them different, still first person",
  "primaryCTA": "3–5 words button text",
  "secondaryCTA": "3–5 words button text",
  "titleTag": "Business Name | Primary Service | City, MT (under 60 chars)",
  "metaDescription": "150–160 chars, includes primary keyword naturally",
  "footerTagline": "one punchy sentence describing what they do"
}`;

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const message = await client.messages.create({
    model: 'claude-opus-4-5',
    max_tokens: 1024,
    system: WRITING_RULES,
    messages: [{ role: 'user', content: prompt }],
  });

  const responseText = message.content[0].type === 'text' ? message.content[0].text : '';

  // Parse JSON from response
  let copy;
  try {
    const jsonMatch = responseText.match(/\{[\s\S]+\}/);
    copy = JSON.parse(jsonMatch ? jsonMatch[0] : responseText);
  } catch {
    console.error('Failed to parse JSON from AI response. Raw response:');
    console.error(responseText);
    process.exit(1);
  }

  // Save to prospect folder
  const outputPath = join(PROSPECT_DIR, 'generated-copy.json');
  writeFileSync(outputPath, JSON.stringify(copy, null, 2));

  console.log('✅ Copy generated and saved to prospects/' + SLUG + '/generated-copy.json\n');
  console.log('📋 Preview:');
  console.log(`   Hero: "${copy.heroHeadline}"`);
  console.log(`   Subheadline: "${copy.heroSubheadline}"`);
  console.log(`   CTA: "${copy.primaryCTA}"`);
  console.log('');
  console.log('Next step: node tools/apply-copy.js --slug ' + SLUG);
}

generateCopy().catch(console.error);
