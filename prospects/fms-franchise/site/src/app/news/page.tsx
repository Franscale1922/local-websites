import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FMS Franchise News — Industry Updates & Company Announcements',
  description: 'The latest news from FMS Franchise Marketing Systems — new brand launches, industry trends, company growth updates, and franchise market insights.',
};

const NEWS_ITEMS = [
  {
    category: 'Company News',
    date: 'March 2025',
    title: 'FMS Franchise Surpasses 900 Brands Franchised Milestone',
    excerpt: 'Franchise Marketing Systems has officially guided over 900 business concepts through the franchise development process, solidifying its position as one of the most active franchise development firms in North America.',
    href: '/blog',
  },
  {
    category: 'Industry Report',
    date: 'February 2025',
    title: 'Franchise Industry Reaches $850B Economic Output in 2024',
    excerpt: 'The International Franchise Association reports that franchising contributed $850 billion to U.S. economic output in 2024, with service franchises leading growth across all categories.',
    href: '/learn/industry-facts',
  },
  {
    category: 'FMS Digital',
    date: 'January 2025',
    title: 'FMS Digital Launches Generative Engine Optimization (GEO) Service for Franchise Brands',
    excerpt: 'FMS Digital is now offering GEO services designed to position franchise brands for visibility in AI-powered search results including Google AI Overviews and ChatGPT citations.',
    href: '/services/marketing-your-franchise/seo',
  },
  {
    category: 'Team Growth',
    date: 'January 2025',
    title: 'FMS Grows to 67-Person Team with New Consultant Hires',
    excerpt: 'FMS Franchise has expanded its consulting team to 67 professionals, including new franchise development consultants, marketing specialists, and support staff to serve a growing client roster.',
    href: '/meet-the-team',
  },
  {
    category: 'Industry Trends',
    date: 'December 2024',
    title: 'Home Services Franchises Set Record Growth for 5th Consecutive Year',
    excerpt: 'Home-based and home services franchise categories continue to outpace all other segments, driven by aging housing stock, dual-income households, and rising demand for professional service providers.',
    href: '/industries/home-services',
  },
  {
    category: 'Partner News',
    date: 'November 2024',
    title: 'FMS Sourcing Expands Global Vendor Network for Franchise Supply Chain Support',
    excerpt: 'FMS Sourcing, the supply chain arm of the FMS family, has expanded its global vendor network to support franchise systems operating in 15+ countries.',
    href: 'https://www.fmssourcing.com/',
  },
];

const CATEGORIES = ['All', 'Company News', 'Industry Report', 'FMS Digital', 'Team Growth', 'Industry Trends'];

export default function NewsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/about-us">About</a><span>›</span>
            <span>News</span>
          </div>
          <span className="eyebrow" style={{ color: '#eebc4a' }}>Latest Updates</span>
          <h1>FMS Franchise News &amp; Announcements</h1>
          <p>Stay current with FMS company news, franchise industry trends, new service launches, and market insights from our team of franchise development experts.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            <Link href="/blog" className="btn btn-gold btn-lg">Read Our Blog</Link>
            <Link href="/about-us" className="btn btn-outline-white">About FMS</Link>
          </div>
        </div>
      </div>

      {/* ── News Feed ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Recent News</span>
            <h2>What's Happening at FMS</h2>
          </div>

          {/* Category pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem', justifyContent: 'center' }}>
            {CATEGORIES.map((cat, i) => (
              <div key={cat} style={{ padding: '0.45rem 1rem', borderRadius: '999px', background: i === 0 ? '#1a3d20' : '#fff', color: i === 0 ? '#fff' : '#718096', fontSize: '0.82rem', fontWeight: 700, border: '1.5px solid', borderColor: i === 0 ? '#1a3d20' : '#e2e8f0', cursor: 'pointer' }}>
                {cat}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {NEWS_ITEMS.map((item, i) => (
              <Link key={i} href={item.href} style={{ textDecoration: 'none', background: '#fff', borderRadius: '16px', padding: '2rem 2.5rem', border: '1.5px solid #e2e8f0', display: 'flex', gap: '2rem', alignItems: 'flex-start', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', transition: 'box-shadow 0.2s' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ background: '#f0fdf4', color: '#35a84a', fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.2rem 0.65rem', borderRadius: '999px', border: '1.5px solid #35a84a' }}>
                      {item.category}
                    </span>
                    <span style={{ color: '#9ca3af', fontSize: '0.82rem' }}>{item.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', color: '#2d4135', marginBottom: '0.6rem', lineHeight: 1.4 }}>{item.title}</h3>
                  <p style={{ color: '#4a5568', lineHeight: 1.7, fontSize: '0.93rem', margin: 0 }}>{item.excerpt}</p>
                </div>
                <div style={{ flexShrink: 0, fontWeight: 700, color: '#35a84a', fontSize: '1.2rem' }}>→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Press Section ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Media Inquiries</span>
              <h2>Press &amp; Media Coverage</h2>
              <div className="divider" />
              <p style={{ lineHeight: 1.8, color: '#4a5568', marginBottom: '1.25rem' }}>
                FMS Franchise team members are available for expert commentary on franchise industry trends, franchise development best practices, and franchise marketing strategy.
              </p>
              <p style={{ lineHeight: 1.8, color: '#4a5568', marginBottom: '1.75rem' }}>
                For press inquiries, interview requests, or media resources, please contact our communications team at <a href="mailto:info@fmsfranchise.com" style={{ color: '#35a84a', fontWeight: 700 }}>info@fmsfranchise.com</a>.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/insights-on-franchise-marketing-systems-press" className="btn btn-gold">View Press Coverage</Link>
                <Link href="/about-us/contact" className="btn btn-outline">Media Contact</Link>
              </div>
            </div>
            <div className="grid-2" style={{ gap: '1rem' }}>
              {[
                { icon: '📰', label: 'Entrepreneur Magazine' },
                { icon: '📺', label: 'Fox Business' },
                { icon: '📻', label: 'Franchise Times' },
                { icon: '🏆', label: 'Franchise Update Media' },
              ].map((outlet) => (
                <div key={outlet.label} className="card" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{outlet.icon}</div>
                  <div style={{ fontWeight: 700, color: '#2d4135', fontSize: '0.88rem' }}>{outlet.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <span className="eyebrow eyebrow-gold">Stay in the Loop</span>
          <h2>Get Franchise Insights Delivered</h2>
          <p>Subscribe to the FMS blog for franchise education, strategy articles, and industry news — 2–4 posts per month, written by active franchise consultants.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.75rem' }}>
            <Link href="/blog" className="btn btn-gold btn-lg">Explore the Blog</Link>
            <Link href="https://info.fmsfranchise.com/freeconsultation" className="btn btn-outline-white">Free Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
