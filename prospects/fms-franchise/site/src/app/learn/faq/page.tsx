import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise FAQs — 25 Questions Answered Honestly | FMS',
  description: 'The 25 most common questions business owners ask about franchising — answered honestly by FMS franchise consultants with 15+ years of experience and 979 brands franchised.',
  alternates: {
    canonical: 'https://www.fmsfranchise.com/learn/faq',
  },
  openGraph: {
    title: 'Franchise FAQs — 25 Questions Answered Honestly | FMS',
    description: 'Questions about franchising your business? FMS answers the 25 most common franchise questions honestly — including costs, timelines, risks, and what makes a business franchise-ready.',
    url: 'https://www.fmsfranchise.com/learn/faq',
    images: [{ url: '/icons/og-image.png', width: 1200, height: 630, alt: 'Franchise FAQs — FMS Franchise Marketing Systems' }],
  },
};

const FAQS = [
  {
    category: 'Is My Business Ready?',
    questions: [
      {
        q: 'How do I know if my business is ready to franchise?',
        a: 'The core indicators: 12–24 months of consistent, documented profitability; operations that function when you\'re not physically present; a model someone else can learn in 2–4 weeks; and enough unit-level margin that a franchisee can pay a 5–7% royalty and still earn a solid return. FMS offers a free feasibility assessment that evaluates your specific business against these criteria honestly — including telling you if the timing isn\'t right yet.',
      },
      {
        q: 'Do I need multiple locations before I can franchise?',
        a: 'No. While having 2–3 locations helps demonstrate replicability, many successful franchise systems launched from a single, exceptionally well-documented operation. FRANdata reports the average emerging franchisor enters the market with 3 company-owned units. What matters more than location count is documentation quality, profitability consistency, and whether your operating system can be taught.',
      },
      {
        q: 'My business is unique — can it really be franchised?',
        a: 'This is the most common objection we hear, and it\'s almost always incorrect. What feels unique to you is usually a combination of brand, systems, and culture — all of which can be documented and taught. The fear is usually that your business success is tied to YOU personally. A good operations manual and training program is specifically designed to replace that dependency with a system anyone can follow.',
      },
      {
        q: 'What revenue does my business need to franchise?',
        a: 'You don\'t need to hit a specific revenue threshold, but your business needs to be profitable enough that a franchisee can pay royalties (typically 5–7% of gross sales) and still earn a meaningful return on their investment. A business generating $500K–$1M in revenue with 15–20% EBITDA margins is a typical starting point, but the unit economics matter more than the absolute revenue number.',
      },
    ],
  },
  {
    category: 'Cost & Investment',
    questions: [
      {
        q: 'How much does it cost to franchise my business?',
        a: 'Realistic total investment for a full-service franchise development program runs $48,500–$160,000 for the first year, depending on the scope of services, the complexity of your operations, and how many state registrations you need. This covers: feasibility analysis, operations manual, training program, FDD preparation (with attorney coordination), franchise sales support, and marketing setup. The industry has enormous pricing variation — some firms charge $15K for templates; comprehensive programs range from $50K to $150K. FMS is transparent about pricing in our first conversation.',
      },
      {
        q: 'How long until I make money from my franchise system?',
        a: 'Most franchise consultants who are honest with you will say the same thing: 2–3 years to break even on your system investment is a realistic expectation. Year one is typically development and your first 1–3 sales. Year two, royalties start accumulating. Year three you begin to cover development costs. By year 4–5, a well-run system with 15–25 units can generate meaningful royalty income exceeding the original investment. Franchising is a marathon, not a sprint.',
      },
      {
        q: 'What do I charge franchisees?',
        a: 'Franchise fees (the initial one-time payment) typically range from $20,000 to $50,000 depending on industry and brand strength. Royalties are typically 4–9% of gross sales, charged weekly or monthly. Your royalty rate needs to be calibrated so franchisees remain profitable after paying it — if the royalty makes unit economics unworkable, you\'ll either lose franchisees or never sell any. FMS helps clients model the right structure during the feasibility phase.',
      },
      {
        q: 'Can I finance the development costs?',
        a: 'Some franchisors-in-development use SBA loans, business lines of credit, or investment from early franchisees (collecting franchise fees before the full system is built) to fund development costs. FMS also offers phased arrangements in some cases. The most important point: don\'t fund franchise development with capital you need to run your existing business — they need to be separate.',
      },
    ],
  },
  {
    category: 'Control & Brand Protection',
    questions: [
      {
        q: 'Will I lose control of my brand if I franchise?',
        a: 'This is the #1 fear — and it\'s also the biggest misconception. Franchising actually gives you MORE legal control over your brand than almost any other expansion model. Your Franchise Agreement and FDD specify enforceable brand standards, operating procedures, and quality requirements that franchisees agree to as a condition of using your brand. Franchisees who violate standards can lose their franchise rights. Compare this to licensing, where your control is much more limited.',
      },
      {
        q: 'What happens if a franchisee damages my brand?',
        a: 'Your franchise agreement includes termination rights for brand violations. You\'ll have a Quality Assurance process (inspections, mystery shops, training refreshers) that catches problems early. You\'ll also want employment practices liability insurance and an experienced franchise attorney who understands your enforcement rights. The most important brand protection is franchisee selection — choosing the right people from the start is more effective than enforcement after the fact.',
      },
      {
        q: 'Can I choose who becomes a franchisee?',
        a: 'Yes — and you should be selective. Franchisors have broad discretion to approve or deny franchise candidates. Your franchisee profile (developed during the feasibility phase) defines the financial qualifications, experience backgrounds, and personal characteristics you\'re looking for. You\'re not obligated to sell to anyone who applies. The 67% of franchisors who fail to sell a unit in year one often skipped this step and tried to sell to anyone willing to buy.',
      },
    ],
  },
  {
    category: 'The Development Process',
    questions: [
      {
        q: 'How long does it take to franchise my business?',
        a: 'From start (feasibility study) to FDD completion typically takes 4–6 months. From FDD completion to your first signed franchisee usually takes another 3–9 months, depending on your market, pricing, and sales effort. Total time from decision to first franchise opened: 12–24 months is typical for a well-run process. Working with an experienced franchise development firm can compress this timeline significantly.',
      },
      {
        q: 'Do I need a franchise attorney?',
        a: 'Yes — unequivocally. The FDD is a legal document with federal compliance requirements and significant liability exposure if done incorrectly. There is no legitimate path to franchising that doesn\'t involve a qualified franchise attorney. FMS coordinates with franchise attorneys but does not replace them — our consultants handle the operational, strategic, and sales work while attorneys handle legal compliance.',
      },
      {
        q: 'What\'s the difference between a franchise consultant and a franchise attorney?',
        a: 'Franchise attorneys handle legal compliance: drafting and filing the FDD, franchise agreement, state registrations, and legal review. Franchise consultants handle everything else: feasibility analysis, operations manual development, training program design, franchisee profile development, territory strategy, franchise sales, and marketing. Both are necessary for a successful franchise launch. Be wary of any firm that claims to do everything "in-house" without involving a licensed attorney.',
      },
      {
        q: 'What is an operations manual and do I really need one?',
        a: 'An operations manual is a complete documentation of how your business runs — from opening procedures to customer service standards to supplier relationships. It typically runs 200–400+ pages for a mature franchise system. You absolutely need one. Without it, you cannot consistently train franchisees, you cannot enforce brand standards, and you have no legal protection if a franchisee claims you didn\'t give them what they needed to succeed. It\'s also required as an exhibit to the FDD.',
      },
    ],
  },
  {
    category: 'Working With FMS',
    questions: [
      {
        q: 'What makes FMS different from other franchise consultants?',
        a: 'Three things: 1) We handle development, sales, AND marketing under one roof — most firms do one or two but not all three. 2) Our scale (979 brands franchised, 67 consultants, 7 offices) gives us a depth of industry experience and a franchise sales network that smaller firms can\'t match. 3) Our review portfolio — 250+ verified 5-star reviews across Trustpilot, Alignable, Clutch, BBB, and Google — is the strongest in the franchise consulting industry. We also price transparently and will tell you honestly if your business isn\'t ready.',
      },
      {
        q: 'How does the FMS engagement typically work?',
        a: 'It starts with a free feasibility consultation — no obligation, no high-pressure close. If we both determine franchising is right for your business, we outline a phased development program. You work with a dedicated senior consultant throughout, not a junior analyst. We stay engaged through your first franchise sales and beyond with ongoing support.',
      },
      {
        q: 'Do you work with businesses outside the U.S.?',
        a: 'Yes. FMS has offices in Canada, Vietnam, Nigeria, and Barbados. We\'ve helped businesses franchise internationally and have experience navigating both U.S. expansion for international brands and international expansion for U.S. brands. International franchise law has significant variation — partner selection and legal coordination are even more important in cross-border scenarios.',
      },
      {
        q: 'What if I go through the process and can\'t sell any franchises?',
        a: 'This is a real risk and worth addressing directly. The 67% of franchisors who don\'t sell a single unit in year one typically made one or more of these mistakes: rushed to market before their system was ready, priced their franchise incorrectly, selected the wrong territory strategy, or tried to manage franchise sales themselves without support. FMS\'s franchise sales team actively works to prevent all four. But no consulting firm can guarantee franchise sales — and anyone who does is not being honest with you.',
      },
    ],
  },
  {
    category: 'Franchising vs. Alternatives',
    questions: [
      {
        q: 'What is the difference between franchising and licensing?',
        a: 'Franchising and licensing both allow third parties to use your brand and system, but they are legally and operationally very different. A franchise relationship grants the franchisee a comprehensive business system — brand, operations, training, support, and ongoing relationship — and is governed by the FTC Franchise Rule, which requires an FDD, registration in many states, and mandatory disclosure periods. Licensing grants permission to use intellectual property (a trademark, a process, a product) without the comprehensive system or the legal requirements. Franchising gives you far more control over brand standards and quality. Licensing is simpler but provides less protection.',
      },
      {
        q: 'What are the biggest risks of franchising and how do I avoid them?',
        a: 'The four most common failure modes for new franchisors are: 1) Going to market underprepared — building a franchise system before the core business is truly replicable results in struggling franchisees and brand damage. 2) Wrong franchisee selection — selling to anyone willing to buy destroys your system\'s reputation faster than anything else. 3) Undercapitalizing franchise development — building a franchise system is a multi-hundred-thousand dollar investment; treating it as a side project guarantees mediocre results. 4) Not having an active franchise sales program — creating an FDD and waiting for buyers to find you does not work. FMS addresses all four by combining honest feasibility assessment, structured development, and an active in-house franchise sales team.',
      },
      {
        q: 'Can I do this myself without a franchise consultant?',
        a: 'Legally, yes. Practically, it depends on your background. Most first-time franchisors who attempt to self-develop underestimate three things: the complexity of the FDD (which requires a franchise attorney regardless), the operational work involved in building a trainable system from scratch, and the challenge of finding and closing qualified franchisees. Self-developed systems typically take 30–50% longer to reach their first sale. The ROI calculation usually favors hiring experienced help — the additional capital invested in a full-service firm like FMS is typically recovered in 2–4 fewer months to first franchise fee.',
      },
    ],
  },
];

export default function FranchiseFaqPage() {
  // Build FAQPage schema from FAQS data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.flatMap(cat =>
      cat.questions.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/learn">Resources</a><span>›</span>
            <span>Franchise FAQs</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Common Questions</span>
          <h1>Franchise FAQs</h1>
          <p>25 questions we hear constantly from business owners exploring franchising — answered honestly, based on 15+ years of experience and 979 brands launched.</p>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '860px' }}>

          {/* Quick nav */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {FAQS.map(cat => (
              <a key={cat.category} href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} style={{
                background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '999px', padding: '0.4rem 1rem',
                fontSize: '0.82rem', fontWeight: 700, color: '#1a3d20', textDecoration: 'none', transition: 'all 0.2s',
              }}>
                {cat.category}
              </a>
            ))}
          </div>

          {FAQS.map(cat => (
            <div key={cat.category} id={cat.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')} style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '2px solid #e2e8f0' }}>
                {cat.category}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {cat.questions.map(item => (
                  <div key={item.q} style={{ background: '#fff', borderRadius: '14px', padding: '1.75rem 2rem', border: '1.5px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.875rem', lineHeight: 1.5, display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ color: '#3cb85e', fontWeight: 900, flexShrink: 0, marginTop: '0.05rem' }}>Q.</span>
                      {item.q}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.8, margin: 0, paddingLeft: '1.5rem', borderLeft: '3px solid #e2e8f0' }}>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ background: '#1a3d20', borderRadius: '16px', padding: '2.5rem', marginTop: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Still Have Questions?</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>Talk to an FMS consultant. Free, no obligation, no hard sell. We'll answer your specific questions and give you an honest read on whether franchising is the right next move for your business.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-gold">Book a Free 30-Min Call</Link>
              <Link href="/feasibility-questionnaire" className="btn btn-outline-white">Take the Readiness Assessment</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
