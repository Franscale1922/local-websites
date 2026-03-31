import type { Metadata } from 'next';
import Link from 'next/link';

// Blog post content database — matches slugs from blog index
const POSTS: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  sections: { heading: string; body: string }[];
  relatedSlugs: string[];
}> = {
  'how-to-franchise-your-business-2025': {
    title: 'How to Franchise Your Business in 2025: The Complete Guide',
    category: 'Franchise Development',
    date: 'March 2025',
    readTime: '12 min read',
    author: 'Chris Conner, President — FMS Franchise',
    excerpt: 'The complete A-Z roadmap for converting a successful business into a scalable franchise system — from feasibility study through your first franchisee closing.',
    sections: [
      {
        heading: 'Is Your Business Franchise-Ready?',
        body: `Before investing in franchise development, you need to honestly assess whether your business model is strong enough to replicate. The core requirements: proven profitability across at least 2 locations for 2+ years, a systemizable operation that can be documented and taught, a differentiated brand with protectable intellectual property, and the capital to fund FDD preparation, operations manual development, and initial marketing. If these foundations are in place, franchising offers an extraordinary path to scale without proportional capital risk.`,
      },
      {
        heading: 'The Franchise Development Process',
        body: `Modern franchise development follows a structured path. First comes the feasibility analysis — assessing your concept's replicability, unit economics, market demand, and competitive positioning. Then legal documentation: your Franchise Disclosure Document (FDD) must comply with FTC requirements and, in 14 states, requires pre-sale registration. Simultaneously, you'll develop your operations manual — the document that captures every aspect of running your business — and your franchisee training program. Most franchise development projects take 6–12 months from engagement to first franchise sale.`,
      },
      {
        heading: 'Structuring Your Franchise System',
        body: `Key structural decisions include territory design (protected zones that give franchisees sufficient market without cannibalizing each other), royalty structure (typically 4–8% of gross sales plus a marketing fund contribution), initial franchise fee ($25K–$50K for most service concepts, higher for retail/food), and franchisee selection criteria. Each decision has downstream effects on your system's performance and salability. Getting structure right at the outset is far cheaper than redesigning after your first 10 franchisees.`,
      },
      {
        heading: 'Franchise Sales Strategy',
        body: `Once your FDD is registered and your infrastructure is ready, franchise sales begins. Effective franchise sales combines digital lead generation (franchise portals, SEO, paid media), PR and brand building, franchise broker relationships, and a structured discovery process culminating in a Discovery Day at your location. Industry average close rates from initial inquiry to signed agreement run 1–3%; FMS clients typically achieve 3–6% through strong qualification and a compelling discovery process.`,
      },
      {
        heading: 'Common Mistakes to Avoid',
        body: `The most common franchise development mistakes: launching before the model is sufficiently proven, underpricing the franchise fee (it sets the market's perception of your brand's value), inadequate franchisee support systems, overly complex territory structures, and selecting franchisees for capital rather than fit. Each mistake is recoverable, but some are expensive. Working with experienced franchise development counsel from the outset is the highest-leverage investment you can make.`,
      },
    ],
    relatedSlugs: ['mistakes-first-time-franchisors', 'what-is-franchise-disclosure-document', 'cost-to-franchise-business'],
  },
  'mistakes-first-time-franchisors': {
    title: 'The 5 Biggest Mistakes First-Time Franchisors Make (And How to Avoid Them)',
    category: 'Strategy',
    date: 'February 2025',
    readTime: '8 min read',
    author: 'FMS Franchise Consulting Team',
    excerpt: 'After franchising 900+ businesses, we\'ve seen the same five mistakes derail promising concepts. Here\'s what they are and how to avoid them.',
    sections: [
      {
        heading: 'Mistake #1: Franchising Too Early',
        body: `The most common mistake is rushing to franchise before the business model is truly proven. A single successful location is not enough. The franchise system amplifies whatever is in your model — both its strengths and its weaknesses. Ideally, you should have 2–3 profitable locations running for at least two years before franchising, ideally in different markets that demonstrate the model's portability. "A 75% solution when franchised becomes a 50% solution" is a common saying among experienced franchise developers — and it's accurate.`,
      },
      {
        heading: 'Mistake #2: Underinvesting in Operations Documentation',
        body: `Your operations manual is what makes your business replicable. First-time franchisors frequently underestimate what it takes to document a business well enough that a third party can run it successfully without constant hand-holding. Award-winning operations manuals typically run 300–500+ pages and cover not just the "what" of each process but the "why" — the principles that let franchisees make good decisions in situations the manual doesn't explicitly address.`,
      },
      {
        heading: 'Mistake #3: Selecting Franchisees for Capital, Not Fit',
        body: `The desperate-to-sell early franchisor approves anyone who can write a check. This rarely ends well. Your first 5–10 franchisees set the culture and operational norms of your system — they become your reference cases for future prospects. A poorly-performing early franchisee is a drag on every future franchisee you try to recruit. Invest in a rigorous franchisee selection process: structured interviews, validation calls with your existing operators, and honest profiling of who succeeds in your concept.`,
      },
      {
        heading: 'Mistake #4: Inadequate Field Support Systems',
        body: `Many first-time franchisors focus intensely on selling franchises but underinvest in supporting them. The result: high early franchisee failure rates, poor validation, and a word-of-mouth reputation that kills future sales. Build your support infrastructure before you sell: a training program that can be delivered consistently, a field operations consultant model, a technology platform for communication and performance monitoring, and regular peer networking among franchisees.`,
      },
      {
        heading: 'Mistake #5: Pricing the Franchise Fee Wrong',
        body: `Initial franchise fees are often set based on gut feel rather than market benchmarking or a genuine analysis of what it costs to bring a franchisee to opening. Too low sends the wrong signal about your brand's value; too high creates an affordability barrier for your optimal candidate profile. Royalty structures matter equally — setting them too low means inadequate support funding as you scale; too high makes unit economics unworkable. Both should be modeled carefully before your FDD is filed.`,
      },
    ],
    relatedSlugs: ['how-to-franchise-your-business-2025', 'cost-to-franchise-business', 'franchise-royalty-structure'],
  },
  'what-is-franchise-disclosure-document': {
    title: 'What Does a Franchise Disclosure Document (FDD) Actually Contain?',
    category: 'Legal',
    date: 'January 2025',
    readTime: '10 min read',
    author: 'FMS Legal & Development Team',
    excerpt: 'All 23 items in a Franchise Disclosure Document explained — what each one is, why it matters, and what buyers are actually looking for when they read it.',
    sections: [
      {
        heading: 'What Is an FDD?',
        body: `A Franchise Disclosure Document (FDD) is a legal document that federal law requires franchisors to provide to prospective franchisees at least 14 days before any franchise agreement is signed or any money changes hands. Governed by the FTC's Franchise Rule, the FDD contains 23 standardized items covering everything about the franchisor's history, financials, obligations, and system performance. It's designed to give prospects everything they need to make an informed investment decision.`,
      },
      {
        heading: 'The 23 Items of the FDD',
        body: `Items 1–4 cover the franchisor's background, business experience, and litigation/bankruptcy history. Items 5–7 detail all fees — initial franchise fee, royalties, marketing fund, technology fees, and other ongoing charges. Items 8–9 address restrictions on what franchisees must purchase and from whom. Items 10–12 cover financing, franchisee obligations, and territory rights. Item 19 — the Financial Performance Representation — is often the most scrutinized item: it's where franchisors can (optionally) give actual or projected financial performance data. Item 20 lists all existing and former franchisees. Item 21 includes the franchisor's audited financial statements.`,
      },
      {
        heading: 'What Smart Buyers Look For',
        body: `Experienced franchise buyers focus intensely on Item 19 (financial performance), Item 20 (franchisee contact list — to call for validation), Item 21 (franchisor financial health), and Items 20's system growth/contraction data. A shrinking franchisee count, a high number of terminations or non-renewals, or audited financials showing franchisor losses are all red flags. Conversely, consistent system growth, strong Item 19 representations, and high franchisee satisfaction are powerful conversion drivers.`,
      },
      {
        heading: 'State Registration Requirements',
        body: `In 14 "registration states" (including California, New York, Maryland, Illinois, and others), franchisors must register their FDD with the state before offering or selling franchises. Registration review typically takes 45–120 days depending on the state and examiner workload. This is a critical planning consideration — you cannot offer franchises in California until your registration is complete, regardless of how many interested California prospects you've generated.`,
      },
    ],
    relatedSlugs: ['how-to-write-franchise-disclosure-document', 'franchise-registration-states', 'cost-to-franchise-business'],
  },
  'cost-to-franchise-business': {
    title: 'How Much Does It Cost to Franchise Your Business? A Realistic Breakdown',
    category: 'Finance',
    date: 'January 2025',
    readTime: '7 min read',
    author: 'FMS Franchise Consulting Team',
    excerpt: 'FDD preparation, operations manual development, legal registration, and marketing — here\'s a realistic cost breakdown from a firm that\'s done it 900+ times.',
    sections: [
      {
        heading: 'The Core Development Costs',
        body: `Franchising is a significant investment, and the costs vary considerably based on your concept's complexity and the scope of support you need. The core costs include: legal fees for FDD preparation ($15,000–$35,000 with experienced franchise attorneys), state registration fees ($1,500–$5,000 per registration state), operations manual development ($8,000–$25,000 depending on scope), and initial training program design ($5,000–$15,000). Most first-time franchisors should budget $50,000–$100,000 for initial franchise development before their first franchise sale.`,
      },
      {
        heading: 'Ongoing Operational Costs',
        body: `Beyond initial development, you need infrastructure to support franchisees. Plan for: a franchise sales and marketing budget ($2,000–$10,000/month on lead generation), franchise consultant or internal sales personnel compensation, technology platform costs (franchise management software, intranet, training platforms), and field operations support as you add franchisees. The first 3–5 franchisees are often the hardest financially — royalty income doesn't yet cover support costs, and you're still building out your systems.`,
      },
      {
        heading: 'Funding Options for Franchise Development',
        body: `Franchise development can be self-funded if you have the capital, but there are alternatives. Some franchise development companies (including FMS) offer performance-based models that reduce upfront costs in exchange for a portion of initial fees. SBA loans can fund franchise development costs. Some franchisors fund development by pre-selling a few franchise agreements at a discounted "founding franchisee" rate before all documentation is complete (subject to legal requirements). Each approach has tradeoffs — a franchise attorney should review any creative funding structure before you proceed.`,
      },
    ],
    relatedSlugs: ['how-to-franchise-your-business-2025', 'franchise-royalty-structure', 'mistakes-first-time-franchisors'],
  },
  'franchise-discovery-day-guide-for-franchisors': {
    title: 'Franchise Discovery Day Guide for Franchisors',
    category: 'Franchise Development',
    date: 'March 2026',
    readTime: '10 min read',
    author: 'Chris Conner, President — FMS Franchise',
    excerpt: 'You can generate all leads, host calls, and send all the documents you want – but none of that determines whether someone should represent your brand for the next 10 or 20 years. That decision often comes down to one pivotal moment: the franchise discovery day.',
    sections: [
      {
        heading: 'Why the Franchise Discovery Day Matters More Than Most Owners Realize',
        body: `This experience is typically the final stage before awarding a franchise. By the time a candidate is invited, they should already be financially qualified, educated on the opportunity, and serious about moving forward. This is not an introduction. It is a confirmation. From the franchisor's perspective, discovery day serves three core purposes: validate cultural fit, confirm operational alignment, and assess long-term commitment. From the candidate's perspective, it answers a deeper question: "Can I see myself building my future inside this brand?" A poorly structured discovery day can create confusion, pressure, or false expectations, while a well-executed one reinforces professionalism, stability, and vision.`,
      },
      {
        heading: 'Pre-Discovery Day Preparation That Sets the Tone',
        body: `Success begins long before the candidate walks into your office. By the time someone attends your franchise discovery day, they should be 70 to 80 percent ready to invest — confirm their financial capacity, target territory, timeline, and understanding of the franchise model. Professionalism reduces anxiety: send a structured discovery day packet that includes a full agenda and timeline, dress code guidance, location details, leadership bios, materials to review in advance, and an outline of post-event next steps. Your leadership team must also walk in unified — everyone should understand who is attending, their background, any objections previously raised, and their investment timeline.`,
      },
      {
        heading: 'The Discovery Day Agenda: What to Include',
        body: `Follow a narrative arc, moving from connection to validation to clarity. Start with a warm welcome and brand introduction — this moment is about rapport, not revenue. Follow with authentic leadership introductions sharing each leader's background and commitment to franchisee success. Provide a brand and market overview covering origin story, core values, competitive advantages, and growth vision. Then go deep into the business model: daily operational responsibilities, revenue drivers, cost structure, staffing, technology, and performance metrics. Demonstrate support systems through actual tools rather than descriptions. Whenever possible, include facility or operating location tours. Include existing franchisee validation through live Q&A, pre-recorded testimonials, or scheduled calls.`,
      },
      {
        heading: 'After Discovery Day: Evaluation and Follow-Up',
        body: `Discovery day is not a contract-signing event, but a milestone in a compliant franchise development process. After the event, your team should assess cultural fit, coachability, operational capability, financial readiness, and enthusiasm. Follow up within 24 to 48 hours and ask: "How are you feeling after discovery day? Do you have final questions? Does this align with your long-term goals?" This reinforces support without pressure. For many franchisors, this is where deals either solidify or stall. Structured follow-up improves conversion while maintaining professionalism. Discovery day should feel like a natural next step in a structured process. When built correctly, both sides leave with clarity — which protects the brand and gives the franchisee confidence.`,
      },
    ],
    relatedSlugs: ['how-to-franchise-your-business-in-europe-successfully', 'franchise-territory-mapping-best-practices-for-2025', 'franchisee-onboarding-process-guide-for-growing-franchisors'],
  },
  'how-to-franchise-your-business-in-europe-successfully': {
    title: 'How to Franchise Your Business in Europe Successfully',
    category: 'International',
    date: 'March 2026',
    readTime: '11 min read',
    author: 'Chris Conner, President — FMS Franchise',
    excerpt: 'If you are considering international expansion, franchising your business in Europe can be one of the most strategic moves you ever make — allowing you to scale without the capital burden of company-owned expansion while maintaining brand integrity.',
    sections: [
      {
        heading: 'Why Europe Is a Strategic Move for Franchise Growth',
        body: `Europe is not a single market — it is a collection of distinct economies, each with its own consumer behavior, legal framework, and business culture. According to the European Franchise Federation, franchising accounts for thousands of brands and hundreds of thousands of franchisees across member countries. For established business owners in North America, this presents three advantages: strong investor familiarity with franchising, established franchise exhibitions and recruitment channels, and consumers comfortable with structured branded systems. Rather than asking whether Europe is attractive, the better question is whether your business is ready for structured international replication.`,
      },
      {
        heading: 'Understanding Franchise Laws in Europe',
        body: `There is no unified EU-wide franchise law. Each country regulates franchising independently, meaning the legal framework must be evaluated on a country-by-country basis. France requires pre-contract disclosure under Loi Doubin regulations. Italy mandates disclosure documentation and franchise agreements written in Italian. Spain requires franchisors to register with a national franchise registry. Belgium enforces strict pre-contract information rules. Germany relies on commercial and competition law principles. Many European countries require a disclosure document similar to a U.S. FDD, but the structure and requirements vary. Using a single document across multiple markets rarely works without significant legal adaptation.`,
      },
      {
        heading: 'Choosing Your Market Entry Structure',
        body: `International growth is not one-size-fits-all. A master franchise for Europe allows a local partner to develop and sub-franchise within a country, reducing your operational burden but requiring careful partner selection. Area development agreements provide more oversight but often require more direct involvement. Joint ventures are effective for highly regulated or operationally complex concepts. For many business owners, the challenge is determining which model aligns with their appetite for involvement and financial risk — this is where strategy matters more than enthusiasm. "International expansion only works when structure leads the vision. Growth without structure creates exposure — you need it to create enterprise value." — Chris Conner.`,
      },
      {
        heading: 'Operational Adaptation and Building European Partnerships',
        body: `Entering Europe requires thoughtful adjustments across operations, pricing, and the customer experience. Consumer behavior varies significantly: in Spain, dinner frequently starts around 9 or 10 PM; in Germany and the Netherlands, sustainability and responsible sourcing carry significantly more weight. Many European markets also have mandatory paid vacation, maximum weekly working hour limits, and strong termination protections. Franchise recruitment typically occurs through regional exhibitions, local brokers and consultants, investor networks, and country-specific portals. European investors look carefully at brand maturity, unit economics, leadership credibility, support systems, and long-term commitment. A misaligned partner can stall expansion for years; a qualified partner can significantly accelerate enterprise value.`,
      },
    ],
    relatedSlugs: ['franchise-discovery-day-guide-for-franchisors', 'franchise-territory-mapping-best-practices-for-2025', 'how-to-franchise-your-business-2025'],
  },
  'franchise-territory-mapping-best-practices-for-2025': {
    title: 'Franchise Territory Mapping Best Practices for 2025',
    category: 'Strategy',
    date: 'February 2026',
    readTime: '9 min read',
    author: 'Chris Conner, President — FMS Franchise',
    excerpt: 'Most entrepreneurs who consider franchising feel hesitation at first around territory planning. But when owners understand how territory planning actually works, the fear begins to settle. Here are the best practices that matter most in 2025.',
    sections: [
      {
        heading: 'Why Territory Mapping Is Central to Franchise Success',
        body: `When a business shifts from a single-location mindset to a franchise model, territory planning becomes a central part of its expansion strategy. Territory mapping is precisely what keeps the system balanced — it shapes how fast a brand can grow, where it can expand, and how franchisees will operate day to day. Franchisees should know exactly where they can operate and where to focus their marketing. This leads to fewer disputes, smoother operations, and clearer expectations, while protecting the value of each franchise territory. Early decisions about boundaries can influence a brand for years, sometimes decades. Once territories are sold, it becomes difficult to adjust them without friction.`,
      },
      {
        heading: 'Data-Driven Territory Decisions',
        body: `Data has become the backbone of franchise territory mapping. In 2025, successful mapping depends on datasets that reveal how people live, earn, and spend — far beyond simple population numbers or zip codes. Consumer behavior trends highlight areas where interest in a service is growing. Demographic segments show where a brand's core customer lives. Competitive density helps identify whether a market is too crowded or ready for something new. Territory mapping software is now a necessity, not a nice-to-have. These platforms allow franchisors to draw territories based on demographic thresholds, identify ideal expansion markets, track franchisee performance inside each boundary, spot trends that influence future development, and reduce human error during territory allocation.`,
      },
      {
        heading: 'Market Saturation, Franchisee Feedback, and Flexible Models',
        body: `Before assigning new territories, franchisors must study competitor locations, population growth patterns, average household income, traffic counts, and local demand trends. These indicators help determine whether a territory is scalable. Franchisees bring real-world intelligence that software cannot capture — they live in the community and understand how customers behave at different times of year. The best franchise systems maintain open conversations with franchisees and request feedback before adjusting boundaries. Flexible territory models that take demand, travel behavior, and performance trends into account allow franchisors to adapt without breaking commitments.`,
      },
      {
        heading: 'Common Mistakes and the Role of Consulting',
        body: `Even strong brands can run into problems with territory mapping. Common mistakes include overcrowding in strong markets (creating competition between franchisees), under-utilizing mapping software despite investing in it, ignoring franchisee feedback, and not revisiting territory models regularly as markets change. "We have seen brands with incredible potential lose momentum simply because their territories were defined too quickly or without the right data. When we help a client map their franchise territory, we focus on protecting both growth and relationships. It creates a system that lasts." — Chris Conner, President of FMS Franchise. Expert consulting support helps business owners avoid expensive mistakes and stay focused on long-term growth.`,
      },
    ],
    relatedSlugs: ['franchise-discovery-day-guide-for-franchisors', 'how-to-franchise-your-business-in-europe-successfully', 'franchise-registration-states'],
  },
  'franchisee-onboarding-process-guide-for-growing-franchisors': {
    title: 'Franchisee Onboarding Process Guide for Growing Franchisors',
    category: 'Operations',
    date: 'February 2026',
    readTime: '9 min read',
    author: 'FMS Franchise Consulting Team',
    excerpt: 'When a franchise agreement is signed, most new franchisees feel two emotions at once: excitement and uncertainty. A structured onboarding process is what bridges that gap — turning signed agreements into successful, confident operators.',
    sections: [
      {
        heading: 'Why Franchisee Onboarding Determines Long-Term System Success',
        body: `When a franchise agreement is signed, most new franchisees feel excitement and uncertainty simultaneously. They believe in the brand, have invested capital, and committed to opening a location. But questions start almost immediately: How long will this take? What does the franchisor actually provide? Who guides me through this? The onboarding process is what answers those questions — and how well you answer them shapes the franchisee's entire relationship with your brand. Strong onboarding produces franchisees who open faster, operate more profitably, and become stronger advocates for your system. Poor onboarding produces franchisees who struggle, underperform, and create drag on your brand's validation.`,
      },
      {
        heading: 'The Core Phases of Franchisee Onboarding',
        body: `A strong onboarding process moves through several distinct phases. First comes pre-opening preparation: legal and financial setup, site selection (if applicable), vendor account establishment, and initial supply ordering. Then comes initial training — the intensive period where new franchisees learn operations, customer service standards, marketing systems, and brand culture. This should combine classroom instruction, hands-on at a training location, and digital learning modules. Opening support follows: your field operations team should be on-site for the first days of operation, providing real-time coaching. Post-opening follow-up — structured check-ins at 30, 60, and 90 days — helps franchisees course-correct early before small issues become major problems.`,
      },
      {
        heading: 'Technology and Systems for Onboarding Excellence',
        body: `The strongest franchise systems use technology to make onboarding consistent and scalable. Learning management systems (LMS) allow franchisees to complete training modules on their own schedule before and after in-person training. Franchise management software centralizes communication, document delivery, task tracking, and performance monitoring. Intranet portals give franchisees 24/7 access to operations manuals, marketing materials, vendor contacts, and support resources. As your system grows, these tools become the difference between a support team that scales and one that drowns under growing franchisee volume.`,
      },
      {
        heading: 'Setting Franchisees Up for Long-Term Success',
        body: `Onboarding is not a one-time event — it transitions into an ongoing support relationship. The best systems build peer learning into the model: franchisee advisory councils, peer mentoring programs, and regional networking events help franchisees learn from each other rather than leaning entirely on the franchisor. Annual performance reviews and territory business planning sessions keep franchisees growing intentionally. The metrics that matter most in the first year are time-to-first-revenue, gross sales trajectory, customer satisfaction scores, and compliance with operational standards. Franchisors who monitor these proactively — rather than reactively — build systems that compound value over time.`,
      },
    ],
    relatedSlugs: ['franchise-discovery-day-guide-for-franchisors', 'mistakes-first-time-franchisors', 'franchise-territory-mapping-best-practices-for-2025'],
  },
};

// Fallback for slugs not explicitly in our content DB
function getGenericPost(slug: string) {
  // Format slug to title
  const title = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title,
    category: 'Franchise Education',
    date: '2025',
    readTime: '8 min read',
    author: 'FMS Franchise Consulting Team',
    excerpt: `Expert franchise education from FMS Franchise — 25+ years of experience franchising 900+ brands across every industry.`,
    sections: [
      {
        heading: 'Expert Franchise Insights from FMS',
        body: `Franchise Marketing Systems (FMS) has been helping business owners build franchise systems since 1998. With 900+ brands franchised and a 67-person team of franchise consultants, attorneys, designers, and marketers, we offer the most comprehensive franchise development service in the industry. Our blog covers every aspect of franchising — from concept assessment through franchise sales and franchisee support.`,
      },
      {
        heading: 'Continue Your Franchise Education',
        body: `Explore our full library of franchise how-to guides, industry reports, and educational resources. Or, if you're ready to take the next step, schedule a free consultation with an FMS franchise strategist to discuss whether and how to franchise your business.`,
      },
    ],
    relatedSlugs: ['how-to-franchise-your-business-2025', 'mistakes-first-time-franchisors', 'cost-to-franchise-business'],
  };
}

const ALL_POST_SLUGS = Object.keys(POSTS);

// Related post preview data
const POST_PREVIEWS: Record<string, { title: string; category: string; href: string }> = {
  'how-to-franchise-your-business-2025': { title: 'How to Franchise Your Business in 2025', category: 'Franchise Development', href: '/blog/how-to-franchise-your-business-2025' },
  'mistakes-first-time-franchisors': { title: 'The 5 Biggest Mistakes First-Time Franchisors Make', category: 'Strategy', href: '/blog/mistakes-first-time-franchisors' },
  'what-is-franchise-disclosure-document': { title: 'What Is a Franchise Disclosure Document?', category: 'Legal', href: '/blog/what-is-franchise-disclosure-document' },
  'cost-to-franchise-business': { title: 'How Much Does It Cost to Franchise?', category: 'Finance', href: '/blog/cost-to-franchise-business' },
  'franchise-royalty-structure': { title: 'Franchise Royalties: How to Structure Them', category: 'Finance', href: '/blog/franchise-royalty-structure' },
  'how-to-write-franchise-disclosure-document': { title: 'How to Write an FDD: Item by Item', category: 'Legal', href: '/blog/how-to-write-franchise-disclosure-document' },
  'franchise-registration-states': { title: 'The 14 Franchise Registration States', category: 'Legal', href: '/blog/franchise-registration-states' },
  'franchise-discovery-day-guide-for-franchisors': { title: 'Franchise Discovery Day Guide for Franchisors', category: 'Franchise Development', href: '/blog/franchise-discovery-day-guide-for-franchisors' },
  'how-to-franchise-your-business-in-europe-successfully': { title: 'How to Franchise Your Business in Europe Successfully', category: 'International', href: '/blog/how-to-franchise-your-business-in-europe-successfully' },
  'franchise-territory-mapping-best-practices-for-2025': { title: 'Franchise Territory Mapping Best Practices for 2025', category: 'Strategy', href: '/blog/franchise-territory-mapping-best-practices-for-2025' },
  'franchisee-onboarding-process-guide-for-growing-franchisors': { title: 'Franchisee Onboarding Process Guide for Growing Franchisors', category: 'Operations', href: '/blog/franchisee-onboarding-process-guide-for-growing-franchisors' },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = POSTS[params.slug] || getGenericPost(params.slug);
  return {
    title: `${post.title} | FMS Franchise Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug] || getGenericPost(params.slug);
  const relatedPosts = post.relatedSlugs
    .filter((s) => POST_PREVIEWS[s])
    .map((s) => POST_PREVIEWS[s]);

  return (
    <>
      {/* ── Hero ── */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/blog">Blog</a><span>›</span>
            <span>{post.category}</span>
          </div>
          <span className="eyebrow" style={{ color: '#eebc4a' }}>{post.category}</span>
          <h1 style={{ maxWidth: '800px' }}>{post.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem' }}>By {post.author}</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.88rem' }}>•</span>
            <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem' }}>{post.date}</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.88rem' }}>•</span>
            <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem' }}>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* ── Article Content ── */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr clamp(280px, 28%, 340px)', gap: '3.5rem', alignItems: 'start' }}>
            {/* Main article */}
            <article>
              {/* Lead excerpt */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '1.75rem 2rem', borderLeft: '5px solid #35a84a', marginBottom: '2.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <p style={{ fontSize: '1.05rem', color: '#2d4135', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
                  {post.excerpt}
                </p>
              </div>

              {/* Sections */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                {post.sections.map((section, i) => (
                  <div key={i} style={{ marginBottom: i < post.sections.length - 1 ? '2.5rem' : 0 }}>
                    <h2 style={{ fontSize: '1.35rem', color: '#2d4135', marginBottom: '1rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                      {section.heading}
                    </h2>
                    {i < post.sections.length - 1 && <div className="divider" style={{ marginBottom: '1.25rem' }} />}
                    <p style={{ color: '#4a5568', lineHeight: 1.85, margin: 0, fontSize: '0.97rem' }}>
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Author bio */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', marginTop: '2rem', border: '1.5px solid #e2e8f0', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #35a84a, #2d4135)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 900 }}>FMS</span>
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#2d4135', marginBottom: '0.35rem', fontFamily: 'Montserrat, sans-serif' }}>{post.author}</div>
                  <p style={{ color: '#4a5568', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
                    FMS Franchise Marketing Systems has been helping business owners build franchise systems since 1998. With 900+ brands franchised across every industry, our consultants bring real-world expertise to every engagement.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: '130px' }}>
              {/* CTA box */}
              <div style={{ background: 'linear-gradient(135deg, #2d4135, #1a2c1e)', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem', color: '#fff' }}>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.75rem', fontFamily: 'Montserrat, sans-serif' }}>
                  Ready to franchise your business?
                </div>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  Talk to a franchise strategist. Free, no-obligation consultation.
                </p>
                <Link href="https://info.fmsfranchise.com/freeconsultation" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', textAlign: 'center', display: 'block' }}>
                  Get Free Consultation
                </Link>
                <a href="tel:8006100292" style={{ display: 'block', textAlign: 'center', color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', marginTop: '0.75rem' }}>
                  📞 800-610-0292
                </a>
              </div>

              {/* Free tools */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '1.5rem', border: '1.5px solid #e2e8f0', marginBottom: '1.5rem' }}>
                <div style={{ fontWeight: 800, color: '#2d4135', marginBottom: '1rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.95rem' }}>Free Tools</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <Link href="/franchise-readiness-assessment" style={{ background: '#f7f7f7', borderRadius: '10px', padding: '0.85rem 1rem', textDecoration: 'none', borderLeft: '4px solid #35a84a', display: 'block' }}>
                    <div style={{ fontWeight: 700, color: '#2d4135', fontSize: '0.88rem', marginBottom: '0.2rem' }}>Readiness Assessment</div>
                    <div style={{ color: '#718096', fontSize: '0.8rem' }}>Get your franchise readiness score →</div>
                  </Link>
                  <Link href="/roi-calculator" style={{ background: '#f7f7f7', borderRadius: '10px', padding: '0.85rem 1rem', textDecoration: 'none', borderLeft: '4px solid #eebc4a', display: 'block' }}>
                    <div style={{ fontWeight: 700, color: '#2d4135', fontSize: '0.88rem', marginBottom: '0.2rem' }}>ROI Calculator</div>
                    <div style={{ color: '#718096', fontSize: '0.8rem' }}>Model your franchise revenue →</div>
                  </Link>
                  <Link href="/franchise-feasibility-questionnaire" style={{ background: '#f7f7f7', borderRadius: '10px', padding: '0.85rem 1rem', textDecoration: 'none', borderLeft: '4px solid #35a84a', display: 'block' }}>
                    <div style={{ fontWeight: 700, color: '#2d4135', fontSize: '0.88rem', marginBottom: '0.2rem' }}>Feasibility Questionnaire</div>
                    <div style={{ color: '#718096', fontSize: '0.8rem' }}>Is your business franchise-ready? →</div>
                  </Link>
                </div>
              </div>

              {/* Key stats */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '1.5rem', border: '1.5px solid #e2e8f0' }}>
                <div style={{ fontWeight: 800, color: '#2d4135', marginBottom: '1rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.95rem' }}>FMS by the Numbers</div>
                {[
                  { num: '900+', label: 'Brands Franchised' },
                  { num: '25+', label: 'Years Experience' },
                  { num: '67', label: 'Team Members' },
                  { num: '20+', label: 'Consultants' },
                ].map((s) => (
                  <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid #f0f0f0' }}>
                    <span style={{ fontSize: '0.85rem', color: '#4a5568' }}>{s.label}</span>
                    <span style={{ fontWeight: 800, color: '#35a84a', fontFamily: 'Montserrat, sans-serif', fontSize: '1.1rem' }}>{s.num}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related Posts ── */}
      {relatedPosts.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Continue Reading</span>
              <h2>Related Franchise Articles</h2>
            </div>
            <div className="grid-3" style={{ gap: '1.5rem' }}>
              {relatedPosts.slice(0, 3).map((related) => (
                <Link key={related.href} href={related.href} style={{ textDecoration: 'none', background: '#fff', borderRadius: '14px', overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'block', transition: 'box-shadow 0.2s' }}>
                  <div style={{ background: 'linear-gradient(135deg, #2d4135, #1a3d20)', padding: '1.5rem', minHeight: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <div style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#eebc4a', marginBottom: '0.5rem' }}>{related.category}</div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem', lineHeight: 1.4, fontFamily: 'Montserrat, sans-serif' }}>{related.title}</div>
                  </div>
                  <div style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#35a84a' }}>Read Article →</span>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/blog" className="btn btn-outline">View All Articles</Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <span className="eyebrow eyebrow-gold">Take the Next Step</span>
          <h2>Ready to Franchise Your Business?</h2>
          <p>Join 900+ brands that have trusted FMS to build their franchise systems. Schedule your free, no-obligation consultation with an FMS franchise strategist today.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.75rem' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" className="btn btn-gold btn-lg">Get Free Consultation</Link>
            <a href="tel:8006100292" className="btn btn-outline-white">Call 800-610-0292</a>
          </div>
        </div>
      </section>
    </>
  );
}

// Generate static params for known slugs (SSG for known posts)
export function generateStaticParams() {
  return ALL_POST_SLUGS.map((slug) => ({ slug }));
}
