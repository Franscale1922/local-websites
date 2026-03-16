#!/usr/bin/env node
/**
 * scrape-reviews.js
 * 
 * Pulls Google Places reviews for a business using the Places API.
 * Output saved to prospects/[slug]/google-reviews.json
 * 
 * Usage:
 *   node tools/scrape-reviews.js --slug flathead-fish-seafood --place-id "ChIJXXXXXXXXXXXX"
 * 
 * How to find a Place ID:
 *   1. Search the business on Google Maps
 *   2. Copy the URL — the CID or place_id is embedded
 *   3. Or use: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
 * 
 * Requirements: npm install node-fetch
 * Env: GOOGLE_PLACES_API_KEY
 */

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const PROSPECTS_DIR = new URL('../prospects', import.meta.url).pathname;

function getArg(flag) {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : null;
}

const SLUG = getArg('--slug');
const PLACE_ID = getArg('--place-id');
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

if (!SLUG || !PLACE_ID) {
  console.error('Usage: node tools/scrape-reviews.js --slug [slug] --place-id [GooglePlaceID]');
  process.exit(1);
}

if (!API_KEY) {
  console.error('Missing GOOGLE_PLACES_API_KEY environment variable. See .env.example');
  process.exit(1);
}

async function fetchPlaceDetails() {
  const fields = [
    'name', 'formatted_address', 'formatted_phone_number',
    'website', 'rating', 'user_ratings_total',
    'reviews', 'opening_hours', 'types'
  ].join(',');

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=${fields}&key=${API_KEY}`;

  const resp = await fetch(url);
  const data = await resp.json();

  if (data.status !== 'OK') {
    throw new Error(`Places API error: ${data.status} — ${data.error_message || 'Unknown error'}`);
  }

  return data.result;
}

async function run() {
  console.log(`\n📍 Fetching Google Places data for: ${SLUG}`);

  const place = await fetchPlaceDetails();

  const output = {
    fetchedAt: new Date().toISOString(),
    placeId: PLACE_ID,
    name: place.name,
    address: place.formatted_address,
    phone: place.formatted_phone_number,
    website: place.website,
    rating: place.rating,
    totalRatings: place.user_ratings_total,
    types: place.types,
    hours: place.opening_hours?.weekday_text || [],
    reviews: (place.reviews || []).map(r => ({
      author: r.author_name,
      rating: r.rating,
      text: r.text,
      time: new Date(r.time * 1000).toISOString().split('T')[0],
      relativeTime: r.relative_time_description,
      language: r.language,
    })),
  };

  // Sort reviews by rating descending, then by length (longer reviews are more useful)
  output.reviews.sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
    return b.text.length - a.text.length;
  });

  const PROSPECT_DIR = join(PROSPECTS_DIR, SLUG);
  if (!existsSync(PROSPECT_DIR)) mkdirSync(PROSPECT_DIR, { recursive: true });

  const outputPath = join(PROSPECT_DIR, 'google-reviews.json');
  writeFileSync(outputPath, JSON.stringify(output, null, 2));

  console.log(`✅ Saved ${output.reviews.length} reviews to prospects/${SLUG}/google-reviews.json`);
  console.log(`   Rating: ${output.rating} (${output.totalRatings} total)`);
  console.log(`   Top review: "${output.reviews[0]?.text.slice(0, 80)}..."`);
  console.log('');
  console.log(`Next: node tools/generate-voice-brief.js --slug ${SLUG}`);
}

run().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
