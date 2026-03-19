# LLM Research Prompt Template

> **Purpose:** Generate this prompt for each new build and run it in ChatGPT, Claude, Perplexity, and Gemini before any code is written.
> Agent: fill in the bracketed fields, then present the completed prompt to the user to copy.

---

## How to Use

1. Agent fills in `[INDUSTRY]`, `[BUSINESS_TYPE]`, `[LOCATION]`, `[PROSPECT_NAME]`
2. Agent presents the completed prompt to the user
3. User pastes the prompt into ChatGPT, Claude, Perplexity, and Gemini
4. User pastes all 4 responses into `prospects/[slug]/llm-research.md`
5. Agent reads the file and produces a synthesis before Phase 2 begins

---

## The Prompt (fill in and present to user)

```
I'm building a professional website for [PROSPECT_NAME], a [BUSINESS_TYPE] serving [LOCATION]. 

Before I design and build the site, I need world-class research on what makes the best websites in this industry perform. Please give me a comprehensive analysis covering:

**1. Structural & Page Architecture**
- What pages do the top-performing [BUSINESS_TYPE] websites have?
- What is the ideal homepage section order for maximum conversion?
- Are there industry-specific pages that top sites include that average sites skip?

**2. Design & Visual Patterns**
- What visual design patterns are consistent across award-winning [INDUSTRY] websites?
- What color palettes, typography choices, and layout styles dominate the top sites?
- What imagery (photos, videos, illustrations) do the best sites use and how?
- What makes the best sites feel premium vs. generic?

**3. Conversion & UX**
- What CTAs, contact options, and lead capture mechanisms perform best in [INDUSTRY]?
- What trust signals are most important to this audience (licenses, awards, reviews, etc.)?
- What do visitors in [INDUSTRY] specifically need to see before they call or submit a form?
- What friction points cause visitors to leave [INDUSTRY] sites without converting?

**4. Content & Copy**
- What tone/voice do the highest-rated [INDUSTRY] businesses use on their websites?
- What specific content sections (e.g. "Why Us", "Our Process", "Service Area") consistently appear on top sites?
- What are the most effective headline formulas for [BUSINESS_TYPE] homepage heroes?

**5. Competitive Intelligence**
- Name 3–5 specific [BUSINESS_TYPE] websites that you consider best-in-class, and briefly explain why each one is exceptional.
- What do most [BUSINESS_TYPE] websites get wrong or miss entirely?
- What would make a [BUSINESS_TYPE] website in [LOCATION] immediately stand out from local competitors?

**6. SEO & Local Search**
- What page structure and content signals help [BUSINESS_TYPE] websites rank locally?
- What service-specific and location-specific pages do successful sites typically build out?
- What schema markup types are most important for [BUSINESS_TYPE]?

Please be specific, cite real examples where possible, and don't give generic web design advice — I need [INDUSTRY]-specific intelligence.
```

---

## Output File: `prospects/[slug]/llm-research.md`

The user should paste each model's full response under these headers:

```markdown
# LLM Research: [Prospect Name]
## Industry: [Business Type] | Location: [Location]

---

## ChatGPT Response
[paste here]

---

## Claude Response
[paste here]

---

## Perplexity Response
[paste here]

---

## Gemini Response
[paste here]

---

## Agent Synthesis
[Agent fills this in after reading all 4 responses]

### Must-Have Sections (consensus across models)
- 

### Design Patterns to Replicate
-

### Trust Signals for This Industry
-

### Competitor Weaknesses to Exploit
-

### Recommended Page Structure
- /
- /services
- /services/[slug]
- /about
- /service-area
- /contact
- /faq
- [additional pages flagged by research]
```
