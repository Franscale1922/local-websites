#!/usr/bin/env node
/**
 * generate-voice-brief.js
 * 
 * Auto-generates the Voice Brief for a prospect by feeding:
 * - Google reviews (from google-reviews.json)
 * - Existing website copy (from existing-copy.txt, if available)
 * - Business category and research notes
 * 
 * into Claude API and getting back a structured Voice Brief JSON.
 * 
 * Usage:
 *   node tools/generate-voice-brief.js --slug flathead-fish-seafood
 * 
 * Input:  prospects/[slug]/google-reviews.json
 * Input:  prospects/[slug]/existing-copy.txt  (optional)
 * Output: prospects/[slug]/voice-brief.json
 * Output: Updates the Voice Brief section in prospects/[slug]/research.md
 * 
 * Requirements: npm install @anthropic-ai/sdk
 * Env: ANTHROPIC_API_KEY
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const PROSPECTS_DIR = new URL('../prospects', import.meta.url).pathname;

function getArg(flag) {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : null;
}

const SLUG = getArg('--slug');

if (!SLUG) {
  console.error('Usage: node tools/generate-voice-brief.js --slug [slug]');
  process.exit(1);
}

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('Missing ANTHROPIC_API_KEY. See .env.example');
  process.exit(1);
}

const PROSPECT_DIR = join(PROSPECTS_DIR, SLUG);

function loadReviews() {
  const path = join(PROSPECT_DIR, 'google-reviews.json');
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, 'utf8'));
}

function loadExistingCopy() {
  const path = join(PROSPECT_DIR, 'existing-copy.txt');
  if (!existsSync(path)) return null;
  return readFileSync(path, 'utf8').slice(0, 2000);
}

function loadResearch() {
  const path = join(PROSPECT_DIR, 'research.md');
  if (!existsSync(path)) return null;
  return readFileSync(path, 'utf8');
}

async function generateVoiceBrief() {
  console.log(`\n🎙️  Generating Voice Brief for: ${SLUG}\n`);

  const reviews = loadReviews();
  const existingCopy = loadExistingCopy();
  const research = loadResearch();

  if (!reviews && !existingCopy) {
    console.error('No google-reviews.json or existing-copy.txt found. Run scrape-reviews.js first, or create existing-copy.txt manually.');
    process.exit(1);
  }

  // Build context block
  const contextParts = [];

  if (reviews) {
    contextParts.push(`BUSINESS: ${reviews.name}\nCATEGORY: ${reviews.types?.join(', ')}\nRATING: ${reviews.rating}/5 (${reviews.totalRatings} reviews)`);
    const topReviews = reviews.reviews.slice(0, 8).map((r, i) => `[${i+1}] ${r.rating}★ — "${r.text}"`).join('\n');
    contextParts.push(`GOOGLE REVIEWS (top 8):\n${topReviews}`);
  }

  if (existingCopy) {
    contextParts.push(`EXISTING WEBSITE COPY (scraped):\n${existingCopy}`);
  }

  if (research) {
    // Extract key differentiator sections from research.md
    const diffMatch = research.match(/\*\*Key differentiator:\*\*\s*(.+)/);
    if (diffMatch) contextParts.push(`KEY DIFFERENTIATOR (from research): ${diffMatch[1]}`);
  }

  const context = contextParts.join('\n\n---\n\n');

  const prompt = `You are an expert brand strategist specializing in local business voice and tone.

Analyze this local business data and generate a Voice Brief that will guide website copy creation.

${context}

Based on this research, produce a Voice Brief. Be specific and based on evidence — quote actual review phrases when relevant.

Respond with ONLY valid JSON (no markdown, no explanation):

{
  "toneArchetype": "Warm Neighbor | Rugged Expert | Polished Pro | Playful Local",
  "archetypeReason": "1-2 sentence explanation of why this archetype fits",
  "vibeWords": ["word1", "word2", "word3"],
  "bestCustomerQuote": "The single best quote from their reviews that captures why customers love them",
  "whatOwnerWouldNeverSay": ["phrase1", "phrase2", "phrase3"],
  "keyDifferentiator": "One sentence on what makes this business genuinely different",
  "customerLanguage": ["actual phrases customers use in reviews to describe the business"],
  "ownerPersonality": "2-3 sentence description of the owner's likely personality/approach based on evidence",
  "avoidPhrases": ["generic marketing phrases this brand should never use"],
  "headlineDirection": "1-2 sentences on the ideal headline direction and tone for their website",
  "confidenceScore": 0.0
}

confidenceScore = how confident you are (0–1) based on quality/quantity of evidence available.`;

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const message = await client.messages.create({
    model: 'claude-opus-4-5',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }],
  });

  const responseText = message.content[0].type === 'text' ? message.content[0].text : '';

  let brief;
  try {
    const jsonMatch = responseText.match(/\{[\s\S]+\}/);
    brief = JSON.parse(jsonMatch ? jsonMatch[0] : responseText);
  } catch {
    console.error('Failed to parse JSON from response:\n', responseText);
    process.exit(1);
  }

  // Save voice-brief.json
  const jsonPath = join(PROSPECT_DIR, 'voice-brief.json');
  writeFileSync(jsonPath, JSON.stringify(brief, null, 2));

  // Update research.md Voice Brief section
  if (existsSync(join(PROSPECT_DIR, 'research.md'))) {
    let researchMd = readFileSync(join(PROSPECT_DIR, 'research.md'), 'utf8');

    const voiceBriefSection = `## Voice Brief (auto-generated)
- **Tone Archetype:** ${brief.toneArchetype}
- **Why:** ${brief.archetypeReason}
- **3 vibe words:** ${brief.vibeWords.join(' · ')}
- **Best customer quote:** "${brief.bestCustomerQuote}"
- **What the owner would never say:** ${brief.whatOwnerWouldNeverSay.join(', ')}
- **Key differentiator:** ${brief.keyDifferentiator}
- **Customer language:** ${brief.customerLanguage.slice(0, 4).map(p => `"${p}"`).join(', ')}
- **Owner personality:** ${brief.ownerPersonality}
- **Headline direction:** ${brief.headlineDirection}
- **Confidence score:** ${brief.confidenceScore}`;

    if (researchMd.includes('## Voice Brief')) {
      researchMd = researchMd.replace(/## Voice Brief[\s\S]*?(?=\n##|$)/, voiceBriefSection + '\n');
    } else {
      researchMd += '\n' + voiceBriefSection + '\n';
    }

    writeFileSync(join(PROSPECT_DIR, 'research.md'), researchMd);
    console.log('📝 research.md Voice Brief section updated');
  }

  console.log('✅ Voice Brief generated\n');
  console.log('📋 Result:');
  console.log(`   Archetype: ${brief.toneArchetype}`);
  console.log(`   Vibe: ${brief.vibeWords.join(', ')}`);
  console.log(`   Best quote: "${brief.bestCustomerQuote?.slice(0, 80)}..."`);
  console.log(`   Confidence: ${(brief.confidenceScore * 100).toFixed(0)}%`);
  console.log('');
  console.log(`Next: node tools/generate-copy.js --slug ${SLUG}`);
}

generateVoiceBrief().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
