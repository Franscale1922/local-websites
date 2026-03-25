import type { Metadata } from 'next';
import Link from 'next/link';
import { IconClipboard, IconSearch, IconHandshake, IconTrendingUp, IconMail, IconTarget } from '../../../components/Icons';

export const metadata: Metadata = {
  title: 'Franchise Lead Generation — Attract Qualified Franchise Buyers',
  description: 'FMS drives qualified franchise buyer leads through portal advertising, paid search, SEO, and broker network activation. 11,340 franchises sold.',
};

export default function LeadGenerationPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/services">Services</a><span>›</span>
            <a href="/services/digital-marketing">Digital Marketing</a><span>›</span>
            <span>Lead Generation</span>
          </div>
          <span className="eyebrow" style={{ color: '#e8b736' }}>Service</span>
          <h1>Franchise Lead Generation</h1>
          <p>Not all leads are created equal. Our franchise lead generation programs are built to attract serious, financially qualified buyers — not tire-kickers filling out forms.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get Free Consultation</Link>
            <Link href="/contact" className="btn btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </div>

      <section className="section section-alt">
        <div className="container">
          <div className="grid-3" style={{ display: 'grid', gap: '2rem' }}>
            {[
              { title: 'Franchise Portal Advertising', desc: 'Active management of your listings on Franchise Direct, Franchise Gator, Entrepreneur.com, FranchiseOpportunities.com, and 12+ other portals with category leadership bidding strategy.', icon: <IconClipboard size={28} color="#3cb85e" /> },
              { title: 'Paid Search (Google / Meta)', desc: 'Targeted campaigns reaching business owners actively searching for franchise opportunities in your industry and investment level. Full funnel from awareness to consultation booking.', icon: <IconSearch size={28} color="#3cb85e" /> },
              { title: 'Broker Network Activation', desc: 'Active outreach and relationship management with 3,000+ franchise brokers who represent qualified buyers. We position your franchise as a first-call recommendation.', icon: <IconHandshake size={28} color="#3cb85e" /> },
              { title: 'SEO for Franchise Terms', desc: '"[Industry] franchise opportunity," "[City] franchise for sale," and 50+ related long-tail terms — organic traffic that converts at 3x the rate of paid leads.', icon: <IconTrendingUp size={28} color="#3cb85e" /> },
              { title: 'Email Lead Nurture', desc: 'Automated multi-touch email sequences that keep qualified leads engaged during the 90–180 day consideration window between inquiry and signed agreement.', icon: <IconMail size={28} color="#3cb85e" /> },
              { title: 'Lead Scoring & CRM', desc: "Every inquiry scored against your franchisee profile criteria — financial qualifications, territory fit, motivation indicators — before it hits your sales team's queue.", icon: <IconTarget size={28} color="#3cb85e" /> },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(60,184,94,0.12), 0 1px 4px rgba(60,184,94,0.08)' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'linear-gradient(135deg, #f0faf3, #e2f5e8)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Fill Your Franchise Pipeline?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>Book a free consultation and get a custom lead generation strategy for your franchise concept.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Book Free Consultation</Link>
            <Link href="/contact" className="btn btn-outline-white btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
