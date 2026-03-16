# Playbook: Outreach Campaign

The cold email sequence for the "I already built your new website — want to buy it?" offer.

---

## The Concept

Unlike a normal cold pitch, we lead with the proof. The demo site is already live when we send email #1. We're not selling a promise — we're selling something they can click on right now.

This completely changes the dynamic. The recipient isn't evaluating a vendor pitch. They're deciding whether to adopt something that already exists and already looks good.

---

## Finding Owner Contact Info

| Tool | What It Does |
|---|---|
| **Apollo.io** | Find owner/decision-maker email by business domain |
| **Clay** | Enrich prospect data — pull LinkedIn, job title, direct email |
| **LinkedIn** | Manual lookup for owner name and email |
| **Their own website** | Check the Contact page — many small business owners list their direct email |
| **Google Business Profile** | Message button (secondary channel) |

**Priority:** Get the owner's direct email. Not info@, not contact@. The person who owns the business and would write the check.

---

## 3-Touch Email Sequence

### Email 1 — The Hook (Day 1)

**Subject:** I built [Business Name] a new website

```
Hi [First Name],

I was looking up [Business Name] and took a look at your website.

Honest take — it doesn't show off what you've built.

So I went ahead and built you a new one:

👉 [DEMO LINK]

It's live right now. Take 2 minutes to look around. No strings attached.

If you like it — or want to tweak anything until it's perfect — I can hand it over to you for a flat $[PRICE]. I'll transfer it to your domain within 24 hours.

Worth a look?

— [Your Name]
[Your Phone]
```

**Notes:**
- Keep it short. Under 150 words.
- One link, one CTA.
- Do NOT over-explain the offer in email 1. The demo does the selling.

---

### Email 2 — The Follow-Up (Day 4)

**Subject:** Re: The new [Business Name] site

```
Hi [First Name],

Just checking in — did you get a chance to look at the demo?

👉 [DEMO LINK]

It's ready to go live on your domain whenever you're ready. The whole transfer takes less than a day.

Happy to hop on a quick call if you have questions, or just reply here.

— [Your Name]
```

---

### Email 3 — The Closer (Day 10)

**Subject:** Last note on [Business Name]

```
Hi [First Name],

I don't want to clutter your inbox, so this'll be my last message.

The demo is still up: [DEMO LINK]

If the timing isn't right, completely understand — running [Business Name] is a full-time job. But if you ever want to revisit, you know where to find me.

Either way — [GENUINE SPECIFIC OBSERVATION about their business]. Good luck with it.

— [Your Name]
```

**Notes:**
- The last line should be specific and genuine. Not generic. Reference something real — a great review you read, a menu item, their location, something.
- This is the relationship-building email even if they don't buy.

---

## Personalization Variables

Fill these in from `prospects/[business-slug]/research.md`:

| Variable | Source |
|---|---|
| `[First Name]` | LinkedIn, Google, their website |
| `[Business Name]` | Google Maps / Apify data |
| `[DEMO LINK]` | Vercel preview URL (set at deploy step) |
| `[PRICE]` | Tier match: Starter $1,500 / Pro $2,800 / Premium $5,000+ |
| `[GENUINE SPECIFIC OBSERVATION]` | A review mention, a unique feature, their history |

---

## Automation with N8N

Set up an N8N workflow for each prospect batch:

1. **Trigger:** New row added to prospect spreadsheet (Google Sheets)
2. **Day 0:** Send Email 1 via Gmail/Resend
3. **Day 4:** Check if replied → if NO, send Email 2
4. **Day 10:** Check if replied → if NO, send Email 3
5. **Log all activity** back to the spreadsheet

---

## Pricing & Offer Structure

| Tier | Site | Price |
|---|---|---|
| **Starter** | 5-page, standard template, 1 revision round | $1,500 |
| **Professional** | 8-page, custom design, booking or contact forms | $2,800 |
| **Premium** | Full custom, e-commerce, reservations, 3 revision rounds | $5,000+ |
| **Monthly Retainer** | Hosting, maintenance, minor updates | $150–$300/mo |

**Default offer in Email 1:** Match to the site complexity you built.
- Used a template with minor customization → Starter ($1,500)
- Invested real hours in a custom design → Professional ($2,800)

**Upsell path:** Once they buy, offer the monthly retainer for peace of mind.

---

## Tracking

Maintain a Google Sheet with columns:

| Column | Notes |
|---|---|
| Business Name | |
| Owner Name | |
| Owner Email | |
| Demo URL | |
| Offer Price | |
| Email 1 Sent | Date |
| Email 1 Opened | Y/N (use tracking pixel) |
| Email 2 Sent | Date |
| Email 3 Sent | Date |
| Reply Received | Y/N + date |
| Outcome | Sold / Passed / Follow Up Later |
| Revenue | |

---

## What to Do When They Reply

**"How much does it cost?"**
→ Send the price directly. Don't upsell before they've decided. "It's $[PRICE] flat. I'll transfer everything to your domain within 24 hours of payment."

**"Can we make changes?"**
→ "Absolutely. That's actually part of the deal — [N] round(s) of revisions included. What would you change?"

**"Who are you? / How did you find us?"**
→ "I'm [Name], a web designer based in [Location]. I was looking for local businesses to feature, found yours, and thought you deserved a better online presence. So I built one."

**"Not interested."**
→ "Totally get it — no worries. If anything changes or you know someone else who could use it, I'm easy to reach." Then archive.

**No reply after Email 3:**
→ Archive. Move on. Volume is the strategy — not every prospect will convert.
