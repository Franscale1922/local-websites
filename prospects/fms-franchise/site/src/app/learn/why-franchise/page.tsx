import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Franchise Your Business? The Data-Backed Case | FMS',
  description: 'Franchise your business for faster growth, reduced capital requirements, owner-operator motivation, and 3x–6x higher exit multiples. Data from 979+ FMS clients since 2009.',
  alternates: {
    canonical: 'https://www.fmsfranchise.com/learn/why-franchise',
  },
  openGraph: {
    title: 'Why Franchise Your Business? The Data-Backed Case | FMS',
    description: 'The proven reasons to franchise: faster growth, reduced capital requirements, distributed risk, motivated owners, and higher exit multiples. From 979+ FMS clients.',
    url: 'https://www.fmsfranchise.com/learn/why-franchise',
    images: [{ url: '/icons/og-image.png', width: 1200, height: 630, alt: 'Why Franchise Your Business — FMS Guide' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Franchise Your Business? The Data-Driven Case for Franchising',
  description: 'The proven reasons to franchise your business: faster growth, reduced capital requirements, distributed risk, motivated owner-operators, and higher exit multiples. Data from 979+ FMS clients.',
  url: 'https://www.fmsfranchise.com/learn/why-franchise',
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.fmsfranchise.com/#organization',
    name: 'Franchise Marketing Systems',
  },
  author: {
    '@type': 'Organization',
    name: 'Franchise Marketing Systems',
    url: 'https://www.fmsfranchise.com',
  },
  about: { '@type': 'Thing', name: 'Franchising' },
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why should I franchise my business instead of opening more locations myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Franchising lets your business grow using franchisees\u2019 own capital instead of yours. Each franchisee invests their own money to open and operate a location. Your risk is largely limited to the cost of developing the franchise system — typically far less than opening one additional company-owned location — while your brand expands to 25, 50, or 100 locations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much more is a franchise system worth at exit than a single-location business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Franchise systems command 3x–6x EBITDA multiples at exit, compared to lower multiples for single-location businesses. Recurring royalty income is valued similarly to SaaS subscription revenue — predictable and highly attractive to private equity buyers.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is franchising NOT the right choice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Franchising is not the right choice if your business is not consistently profitable (under 12 months of documented profitability), if your operations depend entirely on your personal relationships or skills that cannot be systemized, or if your margins cannot support a 5–7% royalty structure that still lets franchisees earn a solid return.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fmsfranchise.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://www.fmsfranchise.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Why Franchise Your Business?' },
  ],
};

export default function WhyFranchisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/learn">Resources</a><span>›</span>
            <span>Why Franchise Your Business?</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>The Case for Franchising</span>
          <h1>Why Franchise Your Business?</h1>
          <p>For the right business, franchising is the most capital-efficient, risk-distributed path to building a national brand. Here's the honest, data-backed case — including the things most consultants don't tell you.</p>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>

          <h2>The Core Argument: Other People's Capital, Your Brand's Growth</h2>
          <p>Every traditional growth path — opening new corporate locations, raising investment, hiring regional managers — requires the business owner to supply more capital, more personal bandwidth, or both. Franchising breaks this pattern.</p>
          <p>When you franchise, your franchisees invest <em>their own capital</em> to open and operate locations under your brand. Your risk is largely limited to the cost of building the franchise system itself — typically far less than the cost of opening one additional company-owned location.</p>

          <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', margin: '2rem 0', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#1a1a1a', lineHeight: 1.7, margin: 0 }}>
              "Not only do you need far less capital to expand, but your risk is largely limited to the capital you invest in developing your franchise company — an amount that is often less than the cost of opening one additional company-owned location."
            </p>
            <p style={{ fontSize: '0.82rem', color: '#718096', marginTop: '0.75rem', marginBottom: 0 }}>— Mark Siebert, <em>Franchise Your Business</em></p>
          </div>

          <h2>5 Reasons Proven Business Owners Choose Franchising</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', margin: '1.5rem 0' }}>
            {[
              {
                num: '01',
                title: 'Growth Without Personal Burnout',
                body: 'You\'ve hit the ceiling where growth demands more capital and management bandwidth than you have. Franchising lets you expand to 25, 50, or 100 locations without opening each one yourself. Your time moves from operations to oversight.',
              },
              {
                num: '02',
                title: 'The Manager Problem — Solved',
                body: 'Owner-operators outperform hired managers by 10–30% on revenue because their personal capital is at stake. When you franchise, you replace salaried employees (who leave) with invested owners (who protect their investment). The months you\'ve spent training managers only to lose them to competitors — franchising ends that cycle.',
              },
              {
                num: '03',
                title: 'Competitive Defense',
                body: 'In nearly every industry, the business that moves fastest wins the market. If your concept is working locally, someone else is watching. Franchising is the fastest path to capturing market presence before a competitor replicates your model or a national brand enters your territory.',
              },
              {
                num: '04',
                title: 'Exit Valuation — 3x to 6x Higher',
                body: 'Franchise systems command 3x–6x EBITDA multiples versus lower multiples for single-location businesses. Recurring royalty income is valued similarly to SaaS subscription revenue — predictable, scalable, and highly attractive to private equity. FMS has helped 234 brands successfully sell and exit. Franchising isn\'t just a growth strategy — it\'s an exit strategy.',
              },
              {
                num: '05',
                title: 'Legacy and Identity',
                body: 'There\'s an emotional dimension most financial analyses ignore. Seeing your brand name in multiple cities — becoming the founder of something larger than a single location — is one of the most meaningful transitions an entrepreneur makes. You go from business owner to brand builder.',
              },
            ].map(item => (
              <div key={item.num} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', background: '#fff', borderRadius: '14px', padding: '1.75rem', border: '1.5px solid #e2e8f0' }}>
                <div style={{ minWidth: '44px', height: '44px', borderRadius: '10px', background: 'linear-gradient(135deg, #1a3d20, #3cb85e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '0.9rem', color: '#fff', flexShrink: 0 }}>{item.num}</div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>The Financial Math: What a Franchise System Actually Earns</h2>
          <p>Here's a simplified model of what royalty income looks like as your system grows:</p>
          <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ background: '#1a3d20', color: '#fff' }}>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left' }}>Franchisee Count</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left' }}>Avg Annual Royalty/Unit</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left' }}>Annual Royalty Income</th>
                  <th style={{ padding: '0.875rem 1rem', textAlign: 'left' }}>+ Franchise Fees (new units)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { count: '10 franchisees', royalty: '$30,000', income: '$300,000', fees: '+$350,000 (if 10 new)' },
                  { count: '25 franchisees', royalty: '$32,000', income: '$800,000', fees: '+$875,000 (if 25 new)' },
                  { count: '50 franchisees', royalty: '$35,000', income: '$1,750,000', fees: '+$1.75M (if 50 new)' },
                  { count: '100 franchisees', royalty: '$35,000', income: '$3,500,000', fees: '+$3.5M (if 100 new)' },
                ].map((row, i) => (
                  <tr key={row.count} style={{ background: i % 2 === 0 ? '#fff' : '#f7f9f7' }}>
                    <td style={{ padding: '0.875rem 1rem', fontWeight: 700, color: '#1a1a1a', borderBottom: '1px solid #e2e8f0' }}>{row.count}</td>
                    <td style={{ padding: '0.875rem 1rem', color: '#4a5568', borderBottom: '1px solid #e2e8f0' }}>{row.royalty}</td>
                    <td style={{ padding: '0.875rem 1rem', color: '#3cb85e', fontWeight: 700, borderBottom: '1px solid #e2e8f0' }}>{row.income}</td>
                    <td style={{ padding: '0.875rem 1rem', color: '#718096', borderBottom: '1px solid #e2e8f0', fontSize: '0.8rem' }}>{row.fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#718096' }}>Illustrative model. Actual results depend on royalty rate, franchisee sales volume, and system maturity.</p>

          <h2>When Franchising Is NOT the Right Answer</h2>
          <p>Most consultants won't tell you this — but franchising isn't the right move for every business at every stage. You should consider franchising carefully if:</p>
          <ul style={{ lineHeight: 2.2, paddingLeft: '1.5rem', color: '#4a5568' }}>
            <li>Your business model isn't yet consistently profitable (under 12 months of documented profitability)</li>
            <li>Your operations depend entirely on your personal relationships or skills that can't be systemized</li>
            <li>You're not ready to shift from operator to brand manager — the role of a franchisor is fundamentally different</li>
            <li>Your margins can't support the royalty structure prospective franchisees would need to succeed</li>
          </ul>
          <p>At FMS, we conduct a free feasibility assessment for every prospect — and we'll tell you honestly if the timing or model isn't right yet. The 67% of franchisors who fail to sell any units in their first two years often moved forward before the business was actually ready.</p>

          <div style={{ background: '#1a3d20', borderRadius: '16px', padding: '2.5rem', marginTop: '3rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>Is Your Business Franchise-Ready?</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>Take our free 5-minute assessment to find out — and get honest feedback on where you stand before committing to the process.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/feasibility-questionnaire" className="btn btn-gold">Take the Free Assessment</Link>
              <Link href="/learn/how-to-franchise-your-business" className="btn btn-outline-white">Next: How to Franchise →</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
