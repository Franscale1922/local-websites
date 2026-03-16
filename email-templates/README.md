# Email Templates

Three professional HTML email templates for the 3-touch cold outreach sequence.

## Files

| File | Send When | Subject Line |
|---|---|---|
| `email-1-hook.html` | Day 0 | `A new website for [Business Name]` |
| `email-2-followup.html` | Day 4 (no reply) | `Just following up — [Business Name]` |
| `email-3-closer.html` | Day 10 (no reply) | `Last note about [Business Name]'s site` |

---

## Personalization Variables

Replace all `{{VARIABLE}}` tokens before sending. These are the tokens used across all three templates:

| Variable | Example | Source |
|---|---|---|
| `{{FIRST_NAME}}` | Kelly | Clay / Apollo enrichment |
| `{{BUSINESS_NAME}}` | Flathead Fish & Seafood | Apify scrape |
| `{{DEMO_LINK}}` | https://flathead-fish-demo.vercel.app | deploy-demo.js output |
| `{{PRICE}}` | $1,500 | Your offer tier choice |
| `{{GENUINE_OBSERVATION}}` | "Your 4.8★ rating with 180+ reviews tells me people love the experience" | Manual — write per prospect |
| `{{CATEGORY}}` | seafood | Apify scrape |
| `{{REGION}}` | Flathead Valley | Target geography |
| `{{BUSY_INDUSTRY_ACKNOWLEDGMENT}}` | "running a restaurant doesn't leave much inbox time" | Per category |
| `{{YOUR_NAME}}` | Kelsey Stuart | Your info |
| `{{YOUR_TITLE}}` | Web Designer | Your info |
| `{{YOUR_EMAIL}}` | kelsey@yourdomain.com | Your info |
| `{{YOUR_PHONE}}` | (406) 555-0100 | Your info |
| `{{YOUR_CITY}}` | Whitefish | Your info |

---

## Using with N8N + Resend

1. In N8N, load the HTML file content
2. Use a "Set" node to replace all `{{VARIABLE}}` tokens with data from your Google Sheet row
3. Use the Resend node to send with:
   - `from`: Your verified Resend domain email
   - `to`: Owner email from Apollo
   - `reply_to`: Your personal email (so replies go to you, not Resend)
   - `subject`: Personalized subject line
   - `html`: The template with all variables replaced

## Preview Locally

Open any `.html` file directly in a browser to see exactly how it renders.

For email client testing, use [Litmus](https://litmus.com) or [Mailtrap](https://mailtrap.io).

---

## `{{GENUINE_OBSERVATION}}` Guide

This is the most important variable. It must be specific and true. Generic = ignored.

**Bad:** "I noticed your business has great reviews"
**Good:** "Your response to a negative review from 2022 — where you personally called the customer to resolve it — showed up on the first page of Google. That kind of character stands out."

**Bad:** "Your website could be improved"
**Good:** "Your fish catalog is served as a PDF download — which means anyone on a phone can't actually browse what you carry"

**Sources to find genuine observations:**
- Google reviews (especially 1-star reviews they handled well)
- Their Facebook/Instagram posts
- Something specific about their product/service mix that's unusual
- A specific operational detail visible from their current site

---

## Busy Industry Acknowledgments (by category)

| Category | Use this line |
|---|---|
| Restaurant | "running a restaurant kitchen doesn't leave much inbox time" |
| Dental | "keeping a practice running doesn't leave a lot of time for email" |
| Lodging | "managing bookings and guests during peak season is a full-time job" |
| Auto shop | "a busy shop floor doesn't leave much time at a desk" |
| Retail | "being on the floor all day makes email easy to fall behind on" |
| Outdoor guide | "taking groups out every day doesn't leave much downtime for email" |
