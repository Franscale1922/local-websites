/**
 * PSI Automation Motor Data Scraper
 * Scrapes all motor models from psiautomation.com/motor-select.cfm
 * and their individual spec pages, downloads schematics, and produces:
 *   - site/src/data/motors.ts
 *   - scraper/scraper-audit.json
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const BASE_URL = 'http://www.psiautomation.com';
const SCHEMATICS_DIR = path.join(__dirname, '../site/public/motors/schematics');
const DATA_DIR = path.join(__dirname, '../site/src/data');
const AUDIT_FILE = path.join(__dirname, 'scraper-audit.json');
const MOTORS_TS = path.join(DATA_DIR, 'motors.ts');

// Ensure directories exist
fs.mkdirSync(SCHEMATICS_DIR, { recursive: true });
fs.mkdirSync(DATA_DIR, { recursive: true });

// ── Utility: fetch URL as text ────────────────────────────────────────────────
function fetchText(urlStr) {
  return new Promise((resolve, reject) => {
    const parsed = url.parse(urlStr);
    const client = parsed.protocol === 'https:' ? https : http;
    const req = client.get(urlStr, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchText(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.abort(); reject(new Error('Timeout: ' + urlStr)); });
  });
}

// ── Utility: download binary file ────────────────────────────────────────────
function downloadFile(urlStr, destPath) {
  return new Promise((resolve, reject) => {
    const parsed = url.parse(urlStr);
    const client = parsed.protocol === 'https:' ? https : http;
    const req = client.get(urlStr, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode} for ${urlStr}`));
      }
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(true); });
      file.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.abort(); reject(new Error('Timeout downloading: ' + urlStr)); });
  });
}

// ── Utility: HTML cell text extractor — preserves <br> as \n ─────────────────
function stripTags(html) {
  return html.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').trim();
}

// Extract raw text from a table cell, preserving <br> as newline separators
// This is critical for multi-value cells like "80<br>30<br>60" 
function cellText(html) {
  // Replace <br> variants with newline BEFORE stripping tags
  const withNewlines = html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/font>/gi, '') // remove font closes (values are separated by font tags)
    .replace(/<font[^>]*>/gi, ''); // remove font opens
  return withNewlines
    .replace(/<[^>]+>/g, '') // strip remaining tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\r/g, '') // normalize line endings
    .trim();
}

// ── Utility: parse "value @ rpm" string ────────────────────────────────────
function parseTorqueAtSpeed(str) {
  const clean = str.replace(/\s+/g, ' ').trim();
  const m = clean.match(/([\d.]+)\s*@\s*([\d.]+)/);
  if (m) return { torque: parseFloat(m[1]), speed: parseFloat(m[2]) };
  const num = parseFloat(clean);
  return isNaN(num) ? null : { torque: num, speed: null };
}

// ── Parse motor-select.cfm ─────────────────────────────────────────────────
function parseMotorSelectPage(html) {
  const motors = [];
  
  // Match all model links - two patterns:
  // CDV: /model_specs_cdv.cfm?model=XXX
  // DVA/DV: /model_specs.cfm?horsepower=N&model=XXX
  
  // Relative paths, no leading slash, &amp; entity encoded
  const cdvPattern = /href="model_specs_cdv\.cfm\?model=([^"\s]+)"/gi;
  const dvaPattern = /href="model_specs\.cfm\?horsepower=([\d.]+)&amp;model=([^"\s]+)"/gi;
  
  let m;
  const seen = new Set();
  
  while ((m = cdvPattern.exec(html)) !== null) {
    const model = m[1].trim();
    const key = `CDV:${model}`;
    if (!seen.has(key)) {
      seen.add(key);
      motors.push({
        model,
        series: 'CDV',
        specUrl: `${BASE_URL}/model_specs_cdv.cfm?model=${model}`,
        hp: null,
      });
    }
  }
  
  while ((m = dvaPattern.exec(html)) !== null) {
    const hp = parseFloat(m[1]);
    const model = m[2].trim();
    const key = `${model}:${hp}`;
    if (!seen.has(key)) {
      seen.add(key);
      const series = model.startsWith('DVA') || model.startsWith('DVAR') ? 'DVA' : 'DV';
      motors.push({
        model,
        series,
        specUrl: `${BASE_URL}/model_specs.cfm?horsepower=${hp}&model=${model}`,
        hp,
      });
    }
  }
  
  return motors;
}

// ── Extract table rows as arrays of text ─────────────────────────────────────
function extractTables(html) {
  const tables = [];
  const tableRx = /<table[^>]*>([\s\S]*?)<\/table>/gi;
  let tm;
  while ((tm = tableRx.exec(html)) !== null) {
    const tableHtml = tm[1];
    const rows = [];
    const rowRx = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let rm;
    while ((rm = rowRx.exec(tableHtml)) !== null) {
      const cells = [];
      const cellRx = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi;
      let cm;
      while ((cm = cellRx.exec(rm[1])) !== null) {
        // Use cellText to preserve <br> as newlines (critical for multi-value cells)
        cells.push(cellText(cm[1]));
      }
      if (cells.length > 0) rows.push(cells);
    }
    if (rows.length > 0) tables.push(rows);
  }
  return tables;
}

// ── Extract schematic image from HTML ───────────────────────────────────────
function extractSchematicUrl(html) {
  // Look for img tags that are clearly schematics (not logos/nav)
  const imgRx = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  const skipPatterns = /logo|banner|nav|header|payment|credit|visa|mc|amex|gif\?|spacer/i;
  const schematicPatterns = /\.(gif|jpg|jpeg|png|pdf)$/i;
  
  let m;
  const candidates = [];
  while ((m = imgRx.exec(html)) !== null) {
    const src = m[1];
    if (!skipPatterns.test(src) && schematicPatterns.test(src)) {
      candidates.push(src);
    }
  }
  
  // Also look for PDF links
  const pdfRx = /href=["']([^"']+\.pdf)["']/gi;
  while ((m = pdfRx.exec(html)) !== null) {
    candidates.push(m[1]);
  }
  
  // Return the most likely schematic (first meaningful image)
  return candidates;
}

// ── Parse CDV spec page ──────────────────────────────────────────────────────
function parseCDVSpec(html, motorEntry) {
  const tables = extractTables(html);
  const schematicCandidates = extractSchematicUrl(html);
  
  // CDV tables vary: some have [Model, Spindle, Power, Flow, Stall, TorqueAtMax, Weight]
  // others have [Model, Power, Flow, Stall, TorqueAtMax, Weight] (no Spindle)
  // Find the data table (has "model" and "power" in first row)
  let dataTable = null;
  for (const t of tables) {
    if (t.length > 1 && t[0].some(c => /model/i.test(c))) {
      dataTable = t;
      break;
    }
  }
  
  const result = {
    model: motorEntry.model,
    series: 'CDV',
    hp: null,
    maxSpeed: null,
    stallTorque: null,
    torqueAtMaxHP: null,
    flowScfm: null,
    weight: null,
    variants: [],
    schematicCandidates,
    missingFields: [],
  };
  
  if (!dataTable || dataTable.length < 2) {
    result.missingFields.push('all spec data (no table found)');
    return result;
  }
  
  // Detect column positions dynamically from header row
  const headerRow = dataTable[0].map(h => h.toLowerCase().replace(/\s+/g, ' ').trim());
  const colIdx = {
    model: headerRow.findIndex(h => h.includes('model')),
    spindle: headerRow.findIndex(h => h.includes('spindle')),
    power: headerRow.findIndex(h => h.includes('power')),
    flow: headerRow.findIndex(h => h.includes('flow')),
    stall: headerRow.findIndex(h => h.includes('stall')),
    torqueMax: headerRow.findIndex(h => h.includes('torque at') || (h.includes('torque') && h.includes('max'))),
    weight: headerRow.findIndex(h => h.includes('weight')),
  };
  
  // Fallback: use positional defaults if header detection fails
  if (colIdx.power < 0) colIdx.power = colIdx.spindle >= 0 ? 2 : 1;
  if (colIdx.flow < 0) colIdx.flow = colIdx.power + 1;
  if (colIdx.stall < 0) colIdx.stall = colIdx.flow + 1;
  if (colIdx.torqueMax < 0) colIdx.torqueMax = colIdx.stall + 1;
  if (colIdx.weight < 0) colIdx.weight = colIdx.torqueMax + 1;
  
  // Skip header row, parse data rows
  const dataRows = dataTable.slice(1).filter(r => r.length >= 4);
  
  if (dataRows.length === 0) {
    result.missingFields.push('all spec data (empty table)');
    return result;
  }
  
  // Use first data row for the model's primary specs
  const firstRow = dataRows[0];
  
  // Parse "hp @ rpm" from Power Rating column
  const powerStr = firstRow[colIdx.power] || '';
  const powerMatch = powerStr.match(/([\d.]+)\s*@\s*([\d,]+)/);
  if (powerMatch) {
    result.hp = parseFloat(powerMatch[1]);
    result.maxSpeed = parseFloat(powerMatch[2].replace(',', ''));
  }
  
  // Flow
  result.flowScfm = parseFloat(firstRow[colIdx.flow]) || null;
  
  // Stall torque — in lbf ft
  result.stallTorque = parseFloat(firstRow[colIdx.stall]) || null;
  
  // Torque at max HP
  if (colIdx.torqueMax >= 0) {
    result.torqueAtMaxHP = parseFloat(firstRow[colIdx.torqueMax]) || null;
  }
  
  // Weight
  if (colIdx.weight >= 0 && firstRow[colIdx.weight]) {
    result.weight = `${parseFloat(firstRow[colIdx.weight])} lb`;
  }
  
  // CDV has spindle variants (Keyed / Threaded) when spindle col exists
  for (const row of dataRows) {
    if (row[0]) {
      result.variants.push({
        variant: row[0],
        spindle: colIdx.spindle >= 0 ? (row[colIdx.spindle] || 'N/A') : 'N/A',
      });
    }
  }
  
  // Check missing fields
  if (!result.hp) result.missingFields.push('hp');
  if (!result.maxSpeed) result.missingFields.push('maxSpeed');
  if (!result.stallTorque) result.missingFields.push('stallTorque');
  if (!result.weight) result.missingFields.push('weight');
  
  return result;
}

// ── Parse DVA/DV spec page ────────────────────────────────────────────────────
function parseDVASpec(html, motorEntry) {
  const tables = extractTables(html);
  const schematicCandidates = extractSchematicUrl(html);
  
  const result = {
    model: motorEntry.model,
    series: motorEntry.series,
    hp: motorEntry.hp,
    torqueData: {
      psi30: { stall: null, starting: null, running: null, runningSpeed: null, midRange: null, midRangeSpeed: null, maxSpeed: null },
      psi60: { stall: null, starting: null, running: null, runningSpeed: null, midRange: null, midRangeSpeed: null, maxSpeed: null },
      psi80: { stall: null, starting: null, running: null, runningSpeed: null, midRange: null, midRangeSpeed: null, maxSpeed: null },
    },
    flowScfm: null,
    pressureRange: null,
    weight: null,
    length: null,
    shaftDiameter: null,
    mounting: null,
    reversible: null,
    schematicCandidates,
    missingFields: [],
  };
  
  // Find table with "Stall" and "Torque" in header
  let table1 = null;
  let table2 = null;
  
  for (const t of tables) {
    if (t.length < 2) continue;
    const header = t[0].join(' ').toLowerCase();
    if (header.includes('stall') && header.includes('torque')) {
      table1 = t;
    } else if (header.includes('running') && header.includes('torque')) {
      table2 = t;
    }
  }
  
  // Parse Table 1: Model, Power@rpm, Flow scfm, Pressure Range, Input PSI, Stall Torque, Starting Torque
  if (table1 && table1.length > 1) {
    const dataRow = table1[1];
    if (!dataRow) {
      result.missingFields.push('table1 data');
    } else {
      // Power column: "0.24 @ 20" or similar
      const powerStr = dataRow[1] || '';
      const pm = powerStr.match(/([\d.]+)\s*@\s*([\d,]+)/);
      if (pm) {
        if (!result.hp) result.hp = parseFloat(pm[1]);
        result.maxFreeSpeed = parseFloat(pm[2].replace(',', ''));
      }
      
      // Flow scfm (column 2)
      result.flowScfm = parseFloat(dataRow[2]) || null;
      
      // Pressure range (column 3)
      result.pressureRange = dataRow[3] || null;
      
      // PSI values are in column 4: three values per line (80, 30, 60)
      // Stall torque column 5: three values per line (at 80, 30, 60 psi)
      // Starting torque column 6: three values per line
      
      const parseMultiLine = (str) => {
        if (!str) return [];
        const lines = str.split('\n').map(s => s.trim()).filter(s => s && s !== 'N/A');
        return lines.map(l => parseFloat(l)).filter(n => !isNaN(n));
      };
      
      const psiValues = parseMultiLine(dataRow[4] || '');
      const stallValues = parseMultiLine(dataRow[5] || '');
      const startingValues = parseMultiLine(dataRow[6] || '');
      
      // Map PSI values to their torque data
      // From inspection: order is 80, 30, 60
      const psiOrder = psiValues.length > 0 ? psiValues : [80, 30, 60];
      const psiMap = { 30: 'psi30', 60: 'psi60', 80: 'psi80' };
      
      psiOrder.forEach((psi, i) => {
        const key = psiMap[psi];
        if (key) {
          if (stallValues[i] !== undefined) result.torqueData[key].stall = stallValues[i];
          if (startingValues[i] !== undefined) result.torqueData[key].starting = startingValues[i];
        }
      });
    }
  } else {
    result.missingFields.push('table1 (stall/starting torque)');
  }
  
  // Parse Table 2: High Running Torque, Mid Range Torque, Max Continuous Speed
  // NOTE: Due to malformed HTML (missing </tr> in the original), the data row ends up
  // merged INTO the header row. So table2[0] has: [header0, header1, header2, data0, data1, data2]
  if (table2) {
    const headerRow = table2[0]; // header cells + data cells merged due to missing </tr>
    if (headerRow && headerRow.length >= 4) {
      const parseMultiLineTA = (str) => {
        // "91 @ 8.0\n30 @ 8.0\n66 @ 8.0"
        if (!str) return [];
        const lines = str.split('\n').map(s => s.trim()).filter(Boolean);
        return lines.map(l => {
          const m = l.match(/([\d.]+)\s*@\s*([\d.]+)/);
          return m ? { torque: parseFloat(m[1]), speed: parseFloat(m[2]) } : null;
        }).filter(Boolean);
      };
      
      // Data is at indices 3, 4, 5 (after the 3 header cells)
      const runningData = parseMultiLineTA(headerRow[3] || '');
      const midData = parseMultiLineTA(headerRow[4] || '');
      const maxSpeedData = parseMultiLineTA(headerRow[5] || '');
      
      // If that didn't work, try from table2[1] (some motors may have proper HTML)
      let effectiveRunning = runningData;
      let effectiveMid = midData;
      let effectiveMax = maxSpeedData;
      if (effectiveRunning.length === 0 && table2.length > 1) {
        const dataRow2 = table2[1];
        if (dataRow2) {
          effectiveRunning = parseMultiLineTA(dataRow2[0] || '');
          effectiveMid = parseMultiLineTA(dataRow2[1] || '');
          effectiveMax = parseMultiLineTA(dataRow2[2] || '');
        }
      }
      
      // Order is 80, 30, 60
      const psiOrder = [80, 30, 60];
      const psiMap = { 30: 'psi30', 60: 'psi60', 80: 'psi80' };
      
      psiOrder.forEach((psi, i) => {
        const key = psiMap[psi];
        if (key) {
          if (effectiveRunning[i]) {
            result.torqueData[key].running = effectiveRunning[i].torque;
            result.torqueData[key].runningSpeed = effectiveRunning[i].speed;
          }
          if (effectiveMid[i]) {
            result.torqueData[key].midRange = effectiveMid[i].torque;
            result.torqueData[key].midRangeSpeed = effectiveMid[i].speed;
          }
          if (effectiveMax[i]) {
            result.torqueData[key].maxSpeed = effectiveMax[i].speed;
          }
        }
      });
    }
  } else {
    result.missingFields.push('table2 (running/midrange/max speed)');
  }

  
  // Check for missing required fields
  const psis = ['psi30', 'psi60', 'psi80'];
  for (const psi of psis) {
    const d = result.torqueData[psi];
    if (!d.stall) result.missingFields.push(`${psi}.stall`);
    if (!d.starting) result.missingFields.push(`${psi}.starting`);
    if (!d.running) result.missingFields.push(`${psi}.running`);
    if (!d.maxSpeed) result.missingFields.push(`${psi}.maxSpeed`);
  }
  
  return result;
}

// ── Download schematic and return local path ─────────────────────────────────
async function downloadSchematic(candidates, slug) {
  for (const candidate of candidates) {
    const ext = path.extname(candidate).toLowerCase();
    if (!['.gif', '.jpg', '.jpeg', '.png', '.pdf'].includes(ext)) continue;
    
    const remoteUrl = candidate.startsWith('http') ? candidate : `${BASE_URL}/${candidate.replace(/^\//, '')}`;
    const isPdf = ext === '.pdf';
    const localName = isPdf ? `${slug}-schematic.pdf` : `${slug}-schematic${ext}`;
    const localPath = path.join(SCHEMATICS_DIR, localName);
    const publicPath = `/motors/schematics/${localName}`;
    
    try {
      await downloadFile(remoteUrl, localPath);
      console.log(`  ✅ Downloaded schematic: ${localName}`);
      return { localPath: publicPath, ext, isPdf };
    } catch (err) {
      console.warn(`  ⚠️  Failed to download ${remoteUrl}: ${err.message}`);
    }
  }
  return null;
}

// ── Build model slug ──────────────────────────────────────────────────────────
function buildSlug(model, series, hp) {
  // DVA models have low/high modes indicated by hp param in URL
  return model.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

// ── Determine if DVA motor is low or high mode ──────────────────────────────
function getHPMode(hp, series) {
  if (series !== 'DVA') return null;
  // From the motor-select.cfm: DVA appears with hp=0.25 (DVAR) and 0.75 (low mode) and 2 (high mode)
  if (hp === 0.75 || hp === 0.25) return 'low';
  if (hp === 2) return 'high';
  return null;
}

// ── Format torque for motors.ts ──────────────────────────────────────────────
function formatTorqueForTS(torqueData) {
  const fmt = (v) => v !== null && v !== undefined ? v : 0;
  return {
    psi30: {
      stall: fmt(torqueData.psi30.stall),
      starting: fmt(torqueData.psi30.starting),
      running: fmt(torqueData.psi30.running),
      maxSpeed: fmt(torqueData.psi30.maxSpeed),
    },
    psi60: {
      stall: fmt(torqueData.psi60.stall),
      starting: fmt(torqueData.psi60.starting),
      running: fmt(torqueData.psi60.running),
      maxSpeed: fmt(torqueData.psi60.maxSpeed),
    },
    psi80: {
      stall: fmt(torqueData.psi80.stall),
      starting: fmt(torqueData.psi80.starting),
      running: fmt(torqueData.psi80.running),
      maxSpeed: fmt(torqueData.psi80.maxSpeed),
    },
  };
}

// ── Main orchestration ────────────────────────────────────────────────────────
async function main() {
  console.log('\n🔍 PSI Automation Motor Scraper Starting...\n');
  
  // ── Step 1: Fetch motor list ────────────────────────────────────────────────
  console.log('📋 Fetching motor selection page...');
  let motorSelectHtml;
  try {
    motorSelectHtml = await fetchText(`${BASE_URL}/motor-select.cfm`);
  } catch (err) {
    console.error('❌ Failed to fetch motor-select.cfm:', err.message);
    process.exit(1);
  }
  
  const motorEntries = parseMotorSelectPage(motorSelectHtml);
  console.log(`📊 Found ${motorEntries.length} motor entries on selection page\n`);
  
  // ── Step 2: Fetch each spec page ────────────────────────────────────────────
  const auditRecords = [];
  const finalMotors = [];
  
  // Group DVA motors: same model appears twice (low hp=0.75 and high hp=2)
  // We need to merge them into single entry with hp: { low, high }
  const dvaGroups = {};
  const nonDVAMotors = [];
  
  for (const entry of motorEntries) {
    if (entry.series === 'DVA') {
      const mode = getHPMode(entry.hp, entry.series);
      if (!dvaGroups[entry.model]) dvaGroups[entry.model] = {};
      dvaGroups[entry.model][mode || `hp${entry.hp}`] = entry;
    } else {
      nonDVAMotors.push(entry);
    }
  }
  
  // Build unified list for processing
  const allToProcess = [...nonDVAMotors];
  for (const [model, modes] of Object.entries(dvaGroups)) {
    // Use 'low' entry as primary, merge in 'high'
    const primary = modes.low || modes[Object.keys(modes)[0]];
    primary._dvaHigh = modes.high || null;
    primary._dvaLow = modes.low || null;
    allToProcess.push(primary);
  }
  
  let schematicDownloaded = 0;
  let schematicMissing = [];
  let incompleteData = [];
  
  for (let i = 0; i < allToProcess.length; i++) {
    const entry = allToProcess[i];
    const slug = buildSlug(entry.model, entry.series, entry.hp);
    
    process.stdout.write(`[${i + 1}/${allToProcess.length}] Scraping ${entry.model} (${entry.series})... `);
    
    let specData = null;
    let error = null;
    
    try {
      const html = await fetchText(entry.specUrl);
      
      if (entry.series === 'CDV') {
        specData = parseCDVSpec(html, entry);
      } else {
        specData = parseDVASpec(html, entry);
        
        // If DVA with high mode, also fetch high mode page
        if (entry._dvaHigh) {
          try {
            const highHtml = await fetchText(entry._dvaHigh.specUrl);
            const highSpec = parseDVASpec(highHtml, entry._dvaHigh);
            specData._highModeData = highSpec;
          } catch (e) {
            console.warn(`\n  ⚠️  Failed to fetch high-mode page for ${entry.model}: ${e.message}`);
          }
        }
      }
      
      process.stdout.write('✓\n');
    } catch (err) {
      process.stdout.write(`❌ ERROR: ${err.message}\n`);
      error = err.message;
      specData = { missingFields: ['all (fetch error)'], schematicCandidates: [] };
    }
    
    // ── Download schematic ────────────────────────────────────────────────────
    let schematicResult = null;
    if (specData && specData.schematicCandidates && specData.schematicCandidates.length > 0) {
      schematicResult = await downloadSchematic(specData.schematicCandidates, slug);
    }
    // Also try DVA high mode for schematics
    if (!schematicResult && specData && specData._highModeData && specData._highModeData.schematicCandidates) {
      schematicResult = await downloadSchematic(specData._highModeData.schematicCandidates, slug);
    }
    
    if (schematicResult) {
      schematicDownloaded++;
    } else {
      schematicMissing.push(entry.model);
    }
    
    // ── Build final motor object ──────────────────────────────────────────────
    const isComplete = specData && (!specData.missingFields || specData.missingFields.length === 0);
    if (!isComplete && specData) {
      incompleteData.push({ model: entry.model, missing: specData.missingFields });
    }
    
    // Build the motor data entry
    let motorData = {
      slug,
      model: entry.model,
      series: entry.series,
    };
    
    if (entry.series === 'CDV') {
      motorData.hp = specData ? (specData.hp || entry.hp || 0) : (entry.hp || 0);
      motorData.torque = {
        psi30: { stall: specData?.stallTorque || 0, starting: 0, running: specData?.torqueAtMaxHP || 0, maxSpeed: specData?.maxSpeed || 0 },
        psi60: { stall: 0, starting: 0, running: 0, maxSpeed: 0 },
        psi80: { stall: 0, starting: 0, running: 0, maxSpeed: 0 },
      };
      motorData.airConsumption = specData?.flowScfm ? `${specData.flowScfm} scfm` : 'Contact for specs';
      motorData.weight = specData?.weight || 'Contact for specs';
      motorData.shaftDiameter = 'Contact for specs';
      motorData.mounting = 'Face mount';
      motorData.reversible = true;
    } else {
      // DVA / DV series - has low/high HP modes for DVA
      let hpValue;
      if (entry.series === 'DVA' && entry._dvaLow && entry._dvaHigh) {
        hpValue = { low: entry._dvaLow.hp || 0.75, high: entry._dvaHigh.hp || 2 };
      } else if (entry.series === 'DVA' && entry._dvaLow) {
        hpValue = { low: entry._dvaLow.hp || 0.75, high: null };
      } else {
        hpValue = specData?.hp || entry.hp || 0;
      }
      
      motorData.hp = hpValue;
      
      if (specData && specData.torqueData) {
        motorData.torque = formatTorqueForTS(specData.torqueData);
      } else {
        motorData.torque = {
          psi30: { stall: 0, starting: 0, running: 0, maxSpeed: 0 },
          psi60: { stall: 0, starting: 0, running: 0, maxSpeed: 0 },
          psi80: { stall: 0, starting: 0, running: 0, maxSpeed: 0 },
        };
      }
      
      motorData.airConsumption = specData?.flowScfm ? `${specData.flowScfm} scfm` : 'Contact for specs';
      motorData.weight = specData?.weight || 'Contact for specs';
      motorData.shaftDiameter = 'Contact for specs';
      motorData.mounting = 'SAE flange';
      motorData.reversible = false; // DV/DVA are typically unidirectional
    }
    
    // Schematic paths
    if (schematicResult) {
      if (schematicResult.isPdf) {
        motorData.schematicPdf = schematicResult.localPath;
      } else {
        motorData.schematicImage = schematicResult.localPath;
      }
    } else {
      motorData.schematicImage = '';
    }
    
    // CAD URL from motor-select page (use the 3dpublisher link from the motor entry)
    motorData.cadUrl = `http://productpage.3dpublisher.net/3dproductpage/Qsvalidlogin.asp?guid=1076522027062`;
    
    finalMotors.push(motorData);
    
    // ── Build audit record ────────────────────────────────────────────────────
    auditRecords.push({
      model: entry.model,
      series: entry.series,
      hp: motorData.hp,
      dataComplete: isComplete,
      schematicFound: !!schematicResult,
      schematicPath: schematicResult ? schematicResult.localPath : null,
      missingFields: specData ? specData.missingFields : ['all (fetch error)'],
      error: error || null,
    });
    
    // Rate limit
    await new Promise(r => setTimeout(r, 300));
  }
  
  // ── Step 3: Write audit file ──────────────────────────────────────────────
  const audit = {
    generatedAt: new Date().toISOString(),
    totalMotors: finalMotors.length,
    schematicsDownloaded: schematicDownloaded,
    schematicsMissing: schematicMissing,
    incompleteDataCount: incompleteData.length,
    incompleteData,
    motors: auditRecords,
  };
  
  fs.writeFileSync(AUDIT_FILE, JSON.stringify(audit, null, 2));
  console.log(`\n📄 Audit written to: ${AUDIT_FILE}`);
  
  // ── Step 4: Write motors.ts ───────────────────────────────────────────────
  const tsContent = generateMotorsTS(finalMotors);
  fs.writeFileSync(MOTORS_TS, tsContent);
  console.log(`📁 motors.ts written to: ${MOTORS_TS}`);
  
  // ── Print summary ─────────────────────────────────────────────────────────
  console.log('\n' + '═'.repeat(60));
  console.log(`✅ ${finalMotors.length} motors scraped`);
  console.log(`✅ ${schematicDownloaded} schematics downloaded`);
  
  if (schematicMissing.length > 0) {
    console.log(`⚠️  ${schematicMissing.length} motors missing schematics: ${schematicMissing.join(', ')}`);
  }
  
  if (incompleteData.length > 0) {
    console.log(`⚠️  ${incompleteData.length} motors with incomplete data:`);
    for (const m of incompleteData) {
      console.log(`   - ${m.model}: missing [${m.missing.join(', ')}]`);
    }
  }
  console.log('═'.repeat(60) + '\n');
}

// ── Generate motors.ts content ────────────────────────────────────────────────
function generateMotorsTS(motors) {
  const lines = [
    '// AUTO-GENERATED by scraper/scrape-motors.js',
    `// Generated: ${new Date().toISOString()}`,
    '// Do not edit directly — re-run scraper to update',
    '',
    'export type TorquePoint = {',
    '  stall: number;',
    '  starting: number;',
    '  running: number;',
    '  maxSpeed: number;',
    '};',
    '',
    'export type Motor = {',
    "  slug: string;           // e.g. 'dva-003'",
    "  model: string;          // e.g. 'DVA-003'",
    "  series: 'CDV' | 'DV' | 'DVA';",
    '  hp: number | { low: number; high: number };',
    '  torque: {',
    '    psi30: TorquePoint;',
    '    psi60: TorquePoint;',
    '    psi80: TorquePoint;',
    '  };',
    '  airConsumption: string;',
    '  weight: string;',
    '  shaftDiameter: string;',
    '  mounting: string;',
    '  reversible: boolean;',
    "  schematicImage: string;  // local path: '/motors/schematics/...'",
    '  schematicPdf?: string;',
    '  cadUrl?: string;',
    '};',
    '',
    'export const motors: Motor[] = [',
  ];
  
  for (const m of motors) {
    const hpStr = typeof m.hp === 'object' && m.hp !== null
      ? `{ low: ${m.hp.low || 0}, high: ${m.hp.high || 0} }`
      : String(m.hp || 0);
    
    const fmtPoint = (p) => `{ stall: ${p.stall}, starting: ${p.starting}, running: ${p.running}, maxSpeed: ${p.maxSpeed} }`;
    
    lines.push(`  {`);
    lines.push(`    slug: ${JSON.stringify(m.slug)},`);
    lines.push(`    model: ${JSON.stringify(m.model)},`);
    lines.push(`    series: ${JSON.stringify(m.series)},`);
    lines.push(`    hp: ${hpStr},`);
    lines.push(`    torque: {`);
    lines.push(`      psi30: ${fmtPoint(m.torque.psi30)},`);
    lines.push(`      psi60: ${fmtPoint(m.torque.psi60)},`);
    lines.push(`      psi80: ${fmtPoint(m.torque.psi80)},`);
    lines.push(`    },`);
    lines.push(`    airConsumption: ${JSON.stringify(m.airConsumption)},`);
    lines.push(`    weight: ${JSON.stringify(m.weight)},`);
    lines.push(`    shaftDiameter: ${JSON.stringify(m.shaftDiameter)},`);
    lines.push(`    mounting: ${JSON.stringify(m.mounting)},`);
    lines.push(`    reversible: ${m.reversible},`);
    lines.push(`    schematicImage: ${JSON.stringify(m.schematicImage || '')},`);
    if (m.schematicPdf) lines.push(`    schematicPdf: ${JSON.stringify(m.schematicPdf)},`);
    if (m.cadUrl) lines.push(`    cadUrl: ${JSON.stringify(m.cadUrl)},`);
    lines.push(`  },`);
  }
  
  lines.push('];');
  lines.push('');
  lines.push('// Helper: get motors by series');
  lines.push("export const getMotorsBySeries = (series: Motor['series']) => motors.filter(m => m.series === series);");
  lines.push('');
  lines.push('// Helper: get motor by slug');
  lines.push('export const getMotorBySlug = (slug: string) => motors.find(m => m.slug === slug);');
  lines.push('');
  lines.push('// Helper: get HP as display string');
  lines.push('export const getHPDisplay = (hp: Motor[\'hp\']): string => {');
  lines.push("  if (typeof hp === 'object' && hp !== null) return `${hp.low}–${hp.high} HP`;");
  lines.push('  return `${hp} HP`;');
  lines.push('};');
  lines.push('');
  
  return lines.join('\n');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
