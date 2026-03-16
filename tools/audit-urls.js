#!/usr/bin/env node
/**
 * audit-urls.js
 * Batch website quality checker for prospect URLs.
 * 
 * Usage: node tools/audit-urls.js
 * Input: Edit the URLS array below, or pipe from a CSV.
 * Output: Prints a scored audit table to console.
 * 
 * Requirements: npm install node-fetch
 */

import fetch from 'node-fetch';

// ─── CONFIGURE YOUR BATCH HERE ───────────────────────────────────────────────
const URLS = [
  // Add prospect URLs here, e.g.:
  // 'https://example-business.com',
  // 'https://another-business.net',
];

const PAGESPEED_API_KEY = process.env.PAGESPEED_API_KEY || '';
// Get a free key at: https://developers.google.com/speed/docs/insights/v5/get-started
// ─────────────────────────────────────────────────────────────────────────────

async function checkSSL(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', timeout: 5000 });
    return url.startsWith('https://') && res.ok;
  } catch {
    return false;
  }
}

async function checkPageSpeed(url) {
  if (!PAGESPEED_API_KEY) {
    return { mobile: 'N/A (no API key)', desktop: 'N/A' };
  }
  try {
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&key=${PAGESPEED_API_KEY}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    const score = Math.round(data?.lighthouseResult?.categories?.performance?.score * 100);
    return { mobile: score };
  } catch {
    return { mobile: 'Error' };
  }
}

async function checkWayback(url) {
  try {
    const domain = new URL(url).hostname;
    const apiUrl = `https://archive.org/wayback/available?url=${domain}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    const timestamp = data?.archived_snapshots?.closest?.timestamp;
    if (!timestamp) return 'No archive found';
    const year = parseInt(timestamp.substring(0, 4));
    const age = new Date().getFullYear() - year;
    return `~${year} (${age}+ yrs ago)`;
  } catch {
    return 'Error';
  }
}

function qualifies(ssl, mobileScore, lastSeen) {
  const noSSL = !ssl;
  const slowMobile = typeof mobileScore === 'number' && mobileScore < 65;
  const oldSite = typeof lastSeen === 'string' && lastSeen.includes('yrs') && parseInt(lastSeen.match(/(\d+)\+/)?.[1]) >= 3;
  return noSSL || slowMobile || oldSite;
}

async function auditAll() {
  if (URLS.length === 0) {
    console.log('No URLs configured. Edit the URLS array in tools/audit-urls.js');
    return;
  }

  console.log('\n🔍 Website Quality Audit\n');
  console.log('─'.repeat(80));
  console.log(`${'URL'.padEnd(40)} ${'SSL'.padEnd(5)} ${'Mobile'.padEnd(8)} ${'Last Design'.padEnd(16)} ${'Qualify?'}`);
  console.log('─'.repeat(80));

  for (const url of URLS) {
    const [ssl, pagespeed, wayback] = await Promise.all([
      checkSSL(url),
      checkPageSpeed(url),
      checkWayback(url),
    ]);

    const shortUrl = url.replace(/^https?:\/\//, '').substring(0, 38);
    const sslStr = ssl ? '✅' : '❌';
    const mobileStr = String(pagespeed.mobile).padEnd(8);
    const waybackStr = String(wayback).padEnd(16);
    const qualStr = qualifies(ssl, pagespeed.mobile, wayback) ? '⭐ YES' : 'no';

    console.log(`${shortUrl.padEnd(40)} ${sslStr.padEnd(5)} ${mobileStr} ${waybackStr} ${qualStr}`);
  }

  console.log('─'.repeat(80));
  console.log('\n✅ = has SSL  ❌ = no SSL  ⭐ = qualifies for build queue\n');
}

auditAll();
