import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Blog — Expert Articles on Franchising Your Business',
  description: 'The FMS Franchise Blog: expert articles on franchise development, franchise sales, franchise marketing, and how to franchise your business. Written by 15-year veterans.',
};

const BLOG_POSTS = [
  { title: 'How to Franchise Your Business in 2025: The Complete Guide', category: 'Franchise Development', date: 'March 2025', slug: 'how-to-franchise-your-business-2025', readTime: '12 min read', excerpt: 'The complete A-Z roadmap for converting a successful business into a scalable franchise system — from feasibility study through your first franchisee closing.' },
  { title: 'The 5 Biggest Mistakes First-Time Franchisors Make (And How to Avoid Them)', category: 'Strategy', date: 'February 2025', slug: 'mistakes-first-time-franchisors', readTime: '8 min read', excerpt: 'After franchising 900+ businesses, we\'ve seen the same five mistakes derail promising concepts. Here\'s what they are and how to avoid them.' },
  { title: 'Franchise vs. Licensing: What\'s the Difference and Which Is Right for Your Business?', category: 'Education', date: 'February 2025', slug: 'franchise-vs-licensing', readTime: '6 min read', excerpt: 'Many business owners confuse franchising with licensing. The legal, financial, and operational differences matter enormously — here\'s a clear breakdown.' },
  { title: 'What Does a Franchise Disclosure Document (FDD) Actually Contain?', category: 'Legal', date: 'January 2025', slug: 'what-is-franchise-disclosure-document', readTime: '10 min read', excerpt: 'All 23 items in a Franchise Disclosure Document explained — what each one is, why it matters, and what buyers are actually looking for when they read it.' },
  { title: 'How Much Does It Cost to Franchise Your Business? A Realistic Breakdown', category: 'Finance', date: 'January 2025', slug: 'cost-to-franchise-business', readTime: '7 min read', excerpt: 'FDD preparation, operations manual development, legal registration, and marketing — here\'s a realistic cost breakdown from a firm that\'s done it 900+ times.' },
  { title: 'The 14 Franchise Registration States: What You Need to Know Before Selling', category: 'Legal', date: 'December 2024', slug: 'franchise-registration-states', readTime: '8 min read', excerpt: 'If you want to sell franchises in California, New York, or 12 other states, you need to register before you can even show a prospect your FDD. Here\'s everything you need to know.' },
  { title: 'Is Your Business Franchise-Ready? 10 Questions to Assess Your Concept', category: 'Assessment', date: 'December 2024', slug: 'is-your-business-franchise-ready', readTime: '5 min read', excerpt: 'The 10 criteria franchise consultants use to evaluate whether a business concept has the right ingredients for successful franchising.' },
  { title: 'Franchise Royalties: How to Structure Them for Long-Term Success', category: 'Finance', date: 'November 2024', slug: 'franchise-royalty-structure', readTime: '9 min read', excerpt: 'Royalty rate, royalty base, minimum royalties, technology fees — how to structure your royalty model to be profitable for you while remaining fair to franchisees.' },
  { title: 'How Long Does It Take to Franchise a Business?', category: 'Franchise Development', date: 'November 2024', slug: 'how-long-to-franchise-business', readTime: '5 min read', excerpt: 'Realistic timelines for every phase of franchise development — from feasibility through your first franchise sale. What affects the timeline and how to move faster.' },
  { title: 'Franchise Operations Manual: What It Must Include', category: 'Operations', date: 'October 2024', slug: 'franchise-operations-manual', readTime: '11 min read', excerpt: 'The 400+ page playbook that lets someone else run your business without you. Here\'s what every operations manual must cover — and what most miss.' },
  { title: 'How Franchise Sales Work: The Full Pipeline Explained', category: 'Franchise Sales', date: 'October 2024', slug: 'how-franchise-sales-work', readTime: '8 min read', excerpt: 'From first inquiry to signed franchise agreement — a step-by-step walkthrough of the franchise sales process, what to expect at each stage, and how to maximize conversion.' },
  { title: 'The Franchise Feasibility Study: Why You Need One Before You Build Anything', category: 'Franchise Development', date: 'September 2024', slug: 'franchise-feasibility-study', readTime: '6 min read', excerpt: 'A feasibility study isn\'t a formality — it\'s an honest assessment of whether your business model has the margins, replicability, and market demand to support franchising.' },
  { title: 'Territory Design for Franchises: How to Map Protected Zones That Sell', category: 'Strategy', date: 'September 2024', slug: 'franchise-territory-design', readTime: '7 min read', excerpt: 'Territory size, exclusivity provisions, and demographic parameters — how to design franchise territories that protect franchisees while maximizing your sellable inventory.' },
  { title: 'Franchise Broker Networks: How to Use Them Without Giving Up Too Much', category: 'Franchise Sales', date: 'August 2024', slug: 'franchise-broker-networks', readTime: '7 min read', excerpt: 'Franchise brokers can accelerate your sales — but they come with referral fees and selection biases. Here\'s how to structure your broker strategy strategically.' },
  { title: 'Home Services Franchises: Why This Category Is Outperforming Every Other Sector', category: 'Industry', date: 'August 2024', slug: 'home-services-franchise-growth', readTime: '6 min read', excerpt: 'Home services franchising has been the highest-growth category for 5 consecutive years. Here\'s what\'s driving demand and which concepts have the best economics.' },
  { title: 'Food & Beverage Franchising in 2025: What\'s Working and What\'s Not', category: 'Industry', date: 'July 2024', slug: 'food-beverage-franchising-2025', readTime: '9 min read', excerpt: 'The food franchise landscape has shifted significantly post-pandemic. Here\'s what format, investment level, and category is showing the strongest franchise sales velocity right now.' },
  { title: 'How to Write a Franchise Disclosure Document (FDD): Item by Item', category: 'Legal', date: 'July 2024', slug: 'how-to-write-franchise-disclosure-document', readTime: '15 min read', excerpt: 'A franchisor\'s guide to the 23 items in an FDD — what each one requires, what goes wrong most often in each item, and how to make yours a sales tool, not just a legal document.' },
  { title: 'Franchisee Training Programs: What the Best Ones Have in Common', category: 'Operations', date: 'June 2024', slug: 'franchisee-training-programs', readTime: '8 min read', excerpt: 'The training program that launches your first franchisee will define your entire system\'s success rate. Here\'s what the best franchise training programs include — and how to build one.' },
  { title: 'Discovery Day: How to Host One That Actually Converts', category: 'Franchise Sales', date: 'June 2024', slug: 'franchise-discovery-day', readTime: '7 min read', excerpt: 'Discovery Day is the final step before a candidate becomes a franchisee. Here\'s how to design, structure, and run a Discovery Day that converts at 40%+ rather than the industry average of 22%.' },
  { title: 'International Franchising: What US Brands Need to Know Before Expanding Abroad', category: 'Strategy', date: 'May 2024', slug: 'international-franchising-us-brands', readTime: '10 min read', excerpt: 'International expansion through master franchise agreements, area development agreements, and direct franchising. What works, what fails, and what FMS has learned from our offices in 4 continents.' },
];

const CATEGORIES = ['All', 'Franchise Development', 'Franchise Sales', 'Finance', 'Legal', 'Strategy', 'Operations', 'Industry', 'Education', 'Assessment'];

export default function BlogPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <span>Blog</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Franchise Blog</span>
          <h1>Expert Insights on Franchising</h1>
          <p>15+ years of franchise consulting experience, distilled into actionable articles. Written by practitioners, not content mills.</p>
        </div>
      </div>

      {/* Posts grid */}
      <section className="section section-alt">
        <div className="container">
          {/* Categories */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {CATEGORIES.map((cat, i) => (
              <div key={cat} style={{ padding: '0.45rem 1rem', borderRadius: '999px', background: i === 0 ? '#1a3d20' : '#fff', color: i === 0 ? '#fff' : '#718096', fontSize: '0.82rem', fontWeight: 700, border: '1.5px solid', borderColor: i === 0 ? '#1a3d20' : '#e2e8f0', cursor: 'pointer', transition: 'all 0.15s' }}>
                {cat}
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1.75rem' }}>
            {BLOG_POSTS.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', transition: 'box-shadow 0.2s, transform 0.2s' }}>
                {/* Green header — title lives here */}
                <div style={{ background: `linear-gradient(135deg, hsl(${130 + (i * 17) % 80}, 42%, 16%), hsl(${140 + (i * 23) % 60}, 52%, 28%))`, padding: '1.75rem 1.75rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '190px' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#e8b736', marginBottom: '0.75rem' }}>{post.category}</div>
                  <h3 style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)', fontWeight: 700, lineHeight: 1.38, color: '#fff', margin: 0, fontFamily: 'Outfit, sans-serif' }}>{post.title}</h3>
                </div>
                {/* Body — excerpt + footer */}
                <div style={{ padding: '1.25rem 1.75rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.7, flex: 1, margin: 0 }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #f0f4f0' }}>
                    <span style={{ fontSize: '0.78rem', color: '#9ca3af', fontWeight: 500 }}>{post.date} · {post.readTime}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#3cb85e' }}>Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Newsletter + tools CTA */}
      <section className="section section-dark">
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow eyebrow-light">Stay Informed</span>
              <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Get New Articles in Your Inbox</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                FMS publishes 2–4 new franchise education articles per month. Join 8,500+ business owners getting expert franchise insights delivered directly.
              </p>
              <form style={{ display: 'flex', gap: '0.75rem' }}>
                <input type="email" placeholder="Your email address" className="form-input" style={{ flex: 1, background: 'rgba(255,255,255,0.18)', border: '1.5px solid rgba(255,255,255,0.45)', color: '#fff', borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.95rem' }} />
                <button type="submit" className="btn btn-gold">Subscribe</button>
              </form>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link href="/franchise-readiness-assessment" style={{ background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(232,183,54,0.5)', borderLeft: '4px solid #e8b736', borderRadius: '14px', padding: '1.4rem 1.5rem', textDecoration: 'none', display: 'block', transition: 'all 0.2s', boxShadow: '0 4px 16px rgba(0,0,0,0.20)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ background: '#e8b736', color: '#1a1a1a', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>Free Tool</span>
                </div>
                <div style={{ fontWeight: 800, color: '#fff', fontSize: '1rem', lineHeight: 1.3, marginBottom: '0.4rem' }}>Take the Franchise Readiness Assessment →</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>Get your personalized readiness score in 5 minutes</div>
              </Link>
              <Link href="/roi-calculator" style={{ background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(232,183,54,0.5)', borderLeft: '4px solid #e8b736', borderRadius: '14px', padding: '1.4rem 1.5rem', textDecoration: 'none', display: 'block', transition: 'all 0.2s', boxShadow: '0 4px 16px rgba(0,0,0,0.20)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ background: '#e8b736', color: '#1a1a1a', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>Free Tool</span>
                </div>
                <div style={{ fontWeight: 800, color: '#fff', fontSize: '1rem', lineHeight: 1.3, marginBottom: '0.4rem' }}>Calculate Your 5-Year Franchise ROI →</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>Model different fee structures and growth scenarios</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
