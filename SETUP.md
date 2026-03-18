# SETUP.md — Getting Started on a New Machine

> Run through this once per machine. After setup, everything is automated.
> Order matters — APIs build on each other.

---

## Prerequisites

```bash
# Node.js 18+ required
node --version   # should show v18.x or higher
# If not: https://nodejs.org/en/download

# Install project dependencies (from repo root)
npm install
```

---

## Step 1 — Copy the environment file

```bash
cp .env.example .env
# Then fill in each value below as you acquire the keys
```

---

## Step 2 — Google Cloud APIs

**One project, four APIs. All covered by the $200/month free credit.**

### 2a. Go to Google Cloud Console
→ [console.cloud.google.com](https://console.cloud.google.com)

- Create a project called `local-websites` (or use existing)
- Enable billing (required for APIs — credit covers all usage at our scale)

### 2b. Enable these four APIs
→ APIs & Services → Library → search each name → Enable:

| API Name | Used by |
|---|---|
| Places API (New) | `discover-leads.js` |
| PageSpeed Insights API | `audit-urls.js` |
| Google Sheets API | `export-leads.js` |
| Maps JavaScript API | Template map embeds |

### 2c. Create an API Key
→ APIs & Services → Credentials → Create Credentials → API Key

```bash
# Add to .env:
GOOGLE_PLACES_API_KEY=AIzaXXXXXXXXX
GOOGLE_PAGESPEED_API_KEY=AIzaXXXXXXXXX   # same key works if all APIs are on one project
```

> **Restrict the key:** API Key → Edit → API Restrictions → select the 4 APIs above

### 2d. Create a Service Account (for Google Sheets)
→ APIs & Services → Credentials → Create Credentials → Service Account

- Name: `local-websites-sheets`
- Click through → Keys tab → Add Key → JSON
- Save the JSON file to: `credentials/service-account.json`

```bash
# Add to .env:
GOOGLE_SERVICE_ACCOUNT_KEY=./credentials/service-account.json
GOOGLE_SERVICE_ACCOUNT_EMAIL=local-websites-sheets@your-project.iam.gserviceaccount.com
```

→ Open the [Google Sheet](https://docs.google.com/spreadsheets/d/1IYmFkLbhNKqLLbBc4rbh16JrY6Js_-LKMUEaejq9-pw)
→ Share → paste `client_email` from the JSON → Editor → Send

---

## Step 3 — Anthropic (Claude API)

→ [console.anthropic.com](https://console.anthropic.com)
→ API Keys → Create Key

```bash
ANTHROPIC_API_KEY=sk-ant-XXXXXXXXXX
```

Used by: `generate-voice-brief.js`, `generate-copy.js`, `digital-audit.js`

---

## Step 4 — Brave Search API

→ [api.search.brave.com](https://api.search.brave.com)
→ Sign up → Create Subscription → free tier: 2,000 queries/month

```bash
BRAVE_SEARCH_API_KEY=BSAxxxxxxxxxx
```

Used by: `digital-audit.js` (forensic business & owner research)

---

## Step 5 — Vercel (demo hosting)

→ [vercel.com](https://vercel.com) → Sign in with GitHub account

```bash
npm install -g vercel
vercel login    # authenticate via browser
```

→ [vercel.com/account/tokens](https://vercel.com/account/tokens) → Create Token

```bash
VERCEL_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxx
```

Used by: `deploy-demo.js`

---

## Step 6 — Resend (email sending)

→ [resend.com](https://resend.com) → Sign up (free: 100 emails/day)
→ Add & verify your sending domain
→ API Keys → Create API Key

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx
EMAIL_FROM=kelsey@yourdomain.com
EMAIL_REPLY_TO=kelsey@yourdomain.com
```

Used by: `send-email.js`

---

## Step 7 — Jina.ai (web scraping & reading)

→ [jina.ai](https://jina.ai) → Sign up → API Keys

```bash
JINA_API_KEY=jina_xxxxxxxxxx
```

Optional — works without a key on free tier (rate limited). Key gives higher limits.

Used by: `scrape-existing-site.js`, `digital-audit.js`

---

## Step 8 — Google Sheet CRM (already pre-configured)

```bash
GOOGLE_SHEET_ID=1IYmFkLbhNKqLLbBc4rbh16JrY6Js_-LKMUEaejq9-pw
```

Already in `.env.example`. Just add the service account access (Step 2d above).

---

## Verify Setup

```bash
# Check which environment variables are set:
npm run status

# Run a test audit on a single URL:
npm run audit:url -- --url https://flatheadfishandseafood.com

# Try the full sweep on a small category:
npm run discover:outdoor
```

---

## Add to a New Machine

```bash
git clone https://github.com/Franscale1922/local-websites.git
cd local-websites
npm install
# Then follow Steps 1-8 above to create your .env file
# The credentials/ JSON file must be copied manually (never in git)
```

---

## Approximate Monthly API Costs

| Service | Free Tier | Expected Usage | Cost |
|---|---|---|---|
| Google Cloud APIs | $200 credit/mo | ~$10-30/mo | $0 (covered) |
| Anthropic Claude | Pay as you go | ~$5-15/mo | ~$5-15 |
| Brave Search | 2,000 calls/mo free | ~500/mo | $0 |
| Vercel | Unlimited hobby | N/A | $0 |
| Resend | 100 emails/day free | ~50/day | $0 |
| Jina.ai | Free tier | Low | $0 |

**Total expected: $5–15/month** until you push to serious volume.
