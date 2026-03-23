# Prospect Research File
# FMS Franchise Marketing Systems — Stage 1 Demo Research

---

## Business Overview

- **Name:** Franchise Marketing Systems (FMS Franchise)
- **Slug:** fms-franchise
- **Category:** professional-services (B2B franchise consulting)
- **Template:** (to be selected after research — professional-services base)
- **Location:** 6110 McFarland Station Dr, Unit 105, Alpharetta, GA 30004 (HQ)
- **Website:** https://www.fmsfranchise.com
- **Phone:** (800) 610-0292 / (866) 341-6372
- **Email:** info@FranchiseMarketingSystems.com
- **Google Place ID:** (to be confirmed)
- **Google Rating:** (to be confirmed — need to pull reviews)
- **Business Hours:** Mon–Fri (to be confirmed)
- **Tagline:** "Turning Businesses Into Scalable Franchise Systems"

---

## Owner / Leadership Information

- **Founder:** Chris Conner (appears in YouTube video on homepage)
- **Owner Role/Title:** Founder / President
- **Owner LinkedIn:** (to be confirmed)
- **Time in Business:** Founded 2009 (15+ years)
- **Team Size:** 67 franchise consultants (in-house)
- **Key differentiator:** The only full-service franchise consulting agency offering both development AND outsourced marketing/sales support under one roof — not just a broker.

---

## Website Quality Audit

- **Audit Score:** (pending automated audit)
- **Load Speed (Mobile):** Moderate — WordPress/Elementor, multiple heavy embeds
- **Mobile Usability:** Fair — standard WordPress theme, not fully optimized
- **Design Age:** Looks like ~2019–2021 design, with some newer content added 2025–2026
- **Biggest Problem:** Outdated visual design, confusing navigation (dual "About"/"About Us" URLs), no strong visual hierarchy, generic layout
- **Specific Pain Points:**
  - Navigation has duplicate "About" and "About Us" routes (both return same page)
  - Elementor-based — heavy page builder markup, slow loads
  - No clear visual identity — green/gold color scheme is generic, not premium
  - Blog/Learn content is buried under inconsistent URL structure
  - Video content is powerful but poorly surfaced (some pages have 0 video, others have 2)
  - "Our Clients" page lists logos but is not compelling visually
  - Feasibility questionnaire is a buried CTA — should be front and center
  - Footer has a generic "START A FRANCHISE TODAY" section that feels disconnected
  - No dedicated Team/Staff page (404 at /about-us/our-team/)
  - Site uses a mix of self-hosted MP4s and YouTube embeds inconsistently

---

## Discovery Notes

FMS is a sophisticated B2B consulting firm that has been operating since 2009. The brand is well-established with 900+ brands franchised and 67 in-house team members. The site has aged — it has the bones of a high-authority brand but the visual presentation doesn't match the premium positioning they deserve. The company's value proposition (full-service, A-Z franchise consulting + outsourced sales) is extremely strong but buried in walls of text. This is a perfect candidate for a site that *honors the existing content, messaging, and authority signals* while delivering a modern, conversion-focused design.

Key insight: Chris Conner appears to be the primary thought leader/face of the brand (appears in homepage YouTube video). The YouTube channel is active: `https://www.youtube.com/@franchisemarketingsystems3808`

---

## Existing Site Architecture

- **Current site type:** Multi-page (WordPress / Elementor)
- **Number of pages:** 25+ confirmed pages, likely 50+ total including blog posts/case studies
- **Demo architecture required:** Multi-page (matching existing structure)

### Full Navigation Structure (confirmed from source)

**Top Bar:** 800-610-0292 | info@FranchiseMarketingSystems.com | Social icons (Twitter, Facebook, LinkedIn, YouTube, Instagram)

**Primary Nav:**

```
Services ▼
  ├── Franchise Development         /services/franchise-development/
  ├── Franchise Sales               /services/franchise-sales/
  ├── Management & Support          /services/management-support/
  ├── Franchise Business Plan       /services/franchise-business-plans/
  ├── Efficiency Audit              /services/efficiency-audit/
  └── Digital Marketing ▼           /services/marketing-your-franchise/
        ├── Lead Generation         /services/marketing-your-franchise/lead-generation/
        ├── Branding & Marketing    /services/marketing-your-franchise/branding-marketing/
        └── Website Design          /services/marketing-your-franchise/website-design/ (inferred)

Industries ▼
  ├── Health & Beauty
  ├── Children
  ├── Food & Beverage
  ├── Retail
  ├── Real Estate
  ├── Services
  ├── Automotive
  ├── Home-Based Franchises
  ├── Education
  └── Healthcare

Learn ▼
  ├── What is Franchising           /learn/what-is-franchising/
  ├── Why Franchise                 /learn/why-franchise/ (inferred)
  ├── Industry Facts                /learn/franchise-industry-facts/ (inferred)
  ├── How to Franchise              /learn/how-to-guides/how-to-franchise-your-business/
  ├── State Guidelines              /learn/resources/state-guidelines/ (inferred)
  ├── Resources                     /learn/resources/
  └── Franchise FAQs               /learn/franchise-faq/ (404 — needs verification)

About ▼
  ├── About FMS                     /about/ (also /about-us/)
  ├── Our Team                      /about-us/our-team/ (404 — page missing)  ← GAP
  ├── Careers                       (unknown URL)
  └── Contact Us                    /about-us/contact/

Blog                                /about-us/blog/
Case Studies / Portfolio            /category/portfolio/
```

**CTAs in Nav:**
- "FRANCHISE MY BUSINESS" button → https://info.fmsfranchise.com/freeconsultation (external Calendly/HubSpot)

---

## Site Inventory

### Page Inventory

| URL / Route | Page Title / H1 | Notes |
|---|---|---|
| `/` | FRANCHISE YOUR BUSINESS | Hero + stats + client logos + blog posts + consultation CTA |
| `/about/` (also `/about-us/`) | FRANCHISE YOUR BUSINESS THE RIGHT WAY | About FMS, approach (A-Z), 4 service pillars |
| `/services/` | Customized Franchise Services for Success | Services overview — 15+ service sub-items |
| `/services/franchise-development/` | Franchise Development | Deep content page, steps, FAQ, **VIDEO** |
| `/services/franchise-sales/` | Expert Franchise Sales Company in USA | Multi-section sales process page |
| `/services/management-support/` | Management & Support | Deep content, **2 VIDEOS** |
| `/services/franchise-business-plans/` | Franchise Business Plan | (to verify content) |
| `/services/efficiency-audit/` | Efficiency Audit | (to verify content) |
| `/services/marketing-your-franchise/` | Digital Marketing Solutions for Franchising | 6 sub-services |
| `/services/marketing-your-franchise/branding-marketing/` | Franchise Branding and Marketing | Deep content |
| `/services/marketing-your-franchise/lead-generation/` | Lead Generation | (to verify) |
| `/industries/` | Franchise Your Business for Different Industries | 10 industries |
| `/our-clients/` | EXPLORE OUR FRANCHISE CLIENTS | Logo grid / client gallery |
| `/category/portfolio/` | Franchise Case Studies | 12+ individual case study posts |
| `/learn/` | Learn About Franchising | Hub page with 8 sub-sections |
| `/learn/what-is-franchising/` | What is Franchising? | Educational long-form content |
| `/learn/how-to-guides/how-to-franchise-your-business/` | How to Start a Franchise | Detailed guide |
| `/learn/resources/` | Resources for Franchising | State guidelines, tools |
| `/franchise-your-business/` | Ready to Franchise Your Business? | Dedicated conversion page |
| `/feasibility-questionnaire/` | FREE Franchise Feasibility Questionnaire | Lead magnet form |
| `/franchise-consulting/` | Franchise Consulting – Franchise Management | Blog-style content page |
| `/about-us/contact/` (also `/contact/`) | Contact Our Expert Franchise Consultants | Form + 7 global office locations |
| `/about-us/blog/` | Blog | (to verify full listing) |

### Global Office Locations (from Contact page)
1. **Atlanta, GA (HQ):** 6110 McFarland Station Dr, Unit 105, Alpharetta, GA 30004
2. **Boston, MA:** 400 Tradecenter Drive, Suite 5900, Woburn, MA 01801
3. **Miami, FL:** 713 Shotgun Road, Sunrise, FL 33326
4. **Toronto, ON (Canada):** 85 N Park Rd #612, Vaughan, ON L4J 0H9
5. **Ho Chi Minh City (FMS Asia):** 41-43 Tran Cao Van Street, District 3, HCMC, Vietnam
6. **Abuja (FMS Africa):** 1473 Inner Block St, Central Business District, Abuja 900103
7. **Barbados (FMS Caribbean):** Lot 2 Lower Silver Hill, Christ Church, Barbados 15010

---

## CTAs & Forms

| CTA Text | Where it appears | Action | URL/number |
|---|---|---|---|
| FRANCHISE MY BUSINESS | Nav button (primary) | External form/booking | https://info.fmsfranchise.com/freeconsultation |
| REQUEST A FREE CONSULTATION | Homepage, most pages | Elementor popup (form) | #popup trigger |
| FRANCHISE FEASIBILITY QUESTIONNAIRE | Nav, About, Services | Internal page | /feasibility-questionnaire/ |
| LEARN MORE ABOUT FRANCHISING YOUR BUSINESS | About page | Internal link | /learn/how-to-guides/how-to-franchise-your-business/ |
| CALL US TODAY | Multiple pages | Phone | 866-341-6372 |
| Contact Us | Footer, About | Internal page | /about-us/contact/ |
| Subscribe to Our Blog | Footer (every page) | Newsletter signup | (form) |

---

## Video Content Inventory

| Page | Video Type | URL / ID | Description |
|---|---|---|---|
| Homepage `/` | YouTube embed | `https://www.youtube.com/watch?v=SWM3XFxTNcs` | "How to Franchise Your Business" — Chris Conner |
| About `/about/` | Self-hosted MP4 | `https://www.fmsfranchise.com/wp-content/uploads/2024/07/video1125056416.mp4` | Brand intro/overview video |
| Franchise Development | Self-hosted MP4 | `https://www.fmsfranchise.com/wp-content/uploads/2026/03/FMS_Video-1-2025_1080x1080_V2.mp4` | Strategic franchise development overview |
| Management & Support | Self-hosted MP4 | `https://www.fmsfranchise.com/wp-content/uploads/2026/03/FMS_Video-3-2025_1080x1080_V2-hevcmp4.mp4` | Franchise management systems overview |
| Management & Support | Self-hosted MP4 | `https://www.fmsfranchise.com/wp-content/uploads/2026/03/18-hevcmp4.mp4` | Additional support/operations video |
| YouTube Channel | External | `https://www.youtube.com/@franchisemarketingsystems3808` | FMS YouTube channel — many more educational videos |

---

## Third-Party Integrations

| Integration | Type | Where on site | Embed code / URL / ID |
|---|---|---|---|
| YouTube | Video embed | Homepage + other pages | Channel: @franchisemarketingsystems3808 |
| Elementor Popup | Form/CTA | Sitewide (popup trigger) | elementor-action:action=popup:open (id: 15111) |
| External Consultation Form | Lead capture | Nav CTA | https://info.fmsfranchise.com/freeconsultation |
| Self-hosted video (.mp4) | Video player | About, Services pages | /wp-content/uploads/ |
| Contact form | Lead capture | /about-us/contact/ | Standard WP contact form |
| Newsletter/blog subscription | Email capture | Footer every page | (WP plugin) |

---

## Social Profiles Linked on Site

- **Twitter:** found — https://twitter.com/FranchiseMkting
- **Facebook:** found — https://www.facebook.com/FranchiseMarketingSystems
- **LinkedIn:** found — https://www.linkedin.com/company/fmsfranchise/
- **YouTube:** found — https://www.youtube.com/@franchisemarketingsystems3808
- **Instagram:** found — https://www.instagram.com/franchisemarketingsystems

---

## Brand Elements Observed

- **Primary color (nav/header):** Dark forest green — approx `#2b4b2e` or `#1e3d22`
- **Accent/brand green:** Bright vibrant green — approx `#3eb05d` or `#44c068`
- **CTA/button color:** Gold/yellow — approx `#e9b736` or `#f0c040`
- **Text/dark:** Near-black — `#1a1a1a` or `#222222`
- **Background:** White `#ffffff`
- **Fonts in use:** Sans-serif stack (appears to be system/generic — no premium typeface identified)
- **Logo:** "FMS" in bold green text, "FRANCHISE MARKETING SYSTEMS" underneath in smaller text. Wordmark style. Also a secondary "logo-foo.png" used in footer (likely footer variant).
- **Logo URL:** https://www.fmsfranchise.com/wp-content/uploads/2021/08/FMS-logo.png
- **Existing trust badges:** "67 Team Members," "900+ Brands Franchised," "2009 Founded," "A-Z Approach" — used as stat callouts on About page

---

## Key Stats / Social Proof

| Stat | Value | Source |
|---|---|---|
| Brands franchised | 900+ (also referenced as "almost 1,000") | About page, homepage |
| Franchises sold | (number not captured — TBD) | Homepage stat block |
| Brands that have exited via franchising | (number not captured — TBD) | Homepage stat block |
| Team members | 67 | Multiple pages |
| Founded | 2009 | About page |
| Office locations | 7 global | Contact page |

---

## LLM Research Results

<!-- Phase 1.5 — Paste each model's full response below. Do not skip. -->
<!-- Prompt template: .agent/llm-research-prompt.md -->
<!-- Output file: prospects/fms-franchise/llm-research.md -->

### ChatGPT Response
(pending)

### Claude Response
(pending)

### Perplexity Response
(pending)

### Gemini Response
(pending)

---

## LLM Research Synthesis

<!-- To be completed after LLM research is received -->

### Must-Have Sections (consensus)
- (pending LLM research)

### Design Patterns to Replicate
- (pending LLM research)

### Industry-Specific Trust Signals
- (pending LLM research)

### Competitor Weaknesses to Exploit
- (pending LLM research)

### Confirmed Page Structure
Working page list based on existing site (to be refined by LLM research):
- `/` — Homepage
- `/about/` — About FMS
- `/services/` — Services overview
- `/services/franchise-development/` — Franchise Development
- `/services/franchise-sales/` — Franchise Sales
- `/services/management-support/` — Management & Support
- `/services/franchise-business-plans/` — Business Plans
- `/services/efficiency-audit/` — Efficiency Audit
- `/services/marketing-your-franchise/` — Digital Marketing
- `/services/marketing-your-franchise/branding-marketing/` — Branding
- `/services/marketing-your-franchise/lead-generation/` — Lead Generation
- `/industries/` — Industries overview
- `/our-clients/` — Our Clients
- `/case-studies/` — Case Studies (mapped from /category/portfolio/)
- `/learn/` — Learning Hub / Resources
- `/feasibility-questionnaire/` — Franchise Feasibility Questionnaire
- `/contact/` — Contact

---

## Digital Audit (auto-generated)

- **Owner Name:** Chris Conner (confirmed from YouTube video)
- **Facebook:** Found — https://www.facebook.com/FranchiseMarketingSystems
- **Instagram:** Found — https://www.instagram.com/franchisemarketingsystems
- **LinkedIn:** Found — https://www.linkedin.com/company/fmsfranchise/
- **YouTube:** Found — https://www.youtube.com/@franchisemarketingsystems3808 (active channel)
- **Twitter:** Found — https://twitter.com/FranchiseMkting
- **Articles found:** Multiple blog articles at /about-us/blog/ and /category/portfolio/
- **Social presence:** Active across all major platforms
- **Primary channel:** YouTube (educational content), LinkedIn (B2B)
- **Key personality clue:** Chris Conner presents as a franchise educator and thought leader
- **Website hook:** "Turning Businesses Into Scalable Franchise Systems"

---

## Voice Brief (auto-generated)

- **Tone Archetype:** Polished Pro / Expert Authority
- **Why:** B2B consulting firm targeting serious business owners — needs to convey deep expertise, reliability, and results without being stuffy
- **3 vibe words:** Expert • Systematic • Trusted
- **Best customer messaging:** "FMS has helped over 1,000 brands grow through franchising"
- **What FMS would never say:** "We'll get to it eventually" — they lead with structure and process
- **Key differentiator:** A-Z full-service (development + sales + marketing + management) under one roof
- **Customer language:** Business owners looking to "scale," "expand," "franchise," "grow without debt," "exit through franchising"
- **Headline direction:** Results-focused, authority-driven, process-oriented

---

## Demo URL

(pending deployment)

---

## Outreach Log

| Date | Email # | Channel | Status | Notes |
|---|---|---|---|---|
| | 1 | Resend | | |

- **Reply received:** N/A — this is a CLIENT build (not outreach)
- **CRM status:** CONVERTED

---

## Sale / Delivery

- **Agreed price:** (TBD)
- **Sale date:** (TBD)
- **Delivery pathway:** Stage 1 Demo → Stage 2 Client Intake
- **Domain registrar:** (TBD)
- **Domain transfer complete:** No
- **Google Search Console set up:** No
- **Google Analytics set up:** No
- **Handoff doc sent:** No
