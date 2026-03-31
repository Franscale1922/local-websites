# GBP Post Helper

A generic, config-driven tool for posting job photos to Google Business Profile.

## Setup (per client deployment)

### 1. Configure the client
Edit `client.config.ts` with the client's business details — service types, cities, review URLs, and brand color.

### 2. Set environment variables
Copy `.env.example` → `.env.local` and fill in:
- `GOOGLE_CLIENT_ID` + `GOOGLE_CLIENT_SECRET` (from Google Cloud Console)
- `NEXTAUTH_SECRET` (run: `openssl rand -base64 32`)
- `BLOB_READ_WRITE_TOKEN` (from Vercel dashboard → Storage → Blob)
- `OPENAI_API_KEY`

### 3. Google Cloud Setup (one-time per deployment)
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (e.g. "GBP Post Helper - Premier Electrical")
3. Enable **Google Business Profile API**
4. Create **OAuth 2.0 credentials** → Web Application
5. Add authorized redirect URI: `https://your-domain.com/api/auth/callback/google`
6. Copy Client ID + Secret → `.env.local`

### 4. GBP API Access
The Business Profile API requires approval for non-personal use.
Submit your app at: https://developers.google.com/my-business/content/prereqs

### 5. Run locally
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deploying for a Client
1. Fork or copy this project
2. Swap `client.config.ts`
3. Deploy to Vercel with new env vars
4. Give client the URL to bookmark on their phone

## Tech Stack
- Next.js 14 (App Router)
- NextAuth.js (Google OAuth)
- Vercel Blob (photo hosting)
- OpenAI GPT-4o-mini (description generation)
- Google Business Profile API v4
