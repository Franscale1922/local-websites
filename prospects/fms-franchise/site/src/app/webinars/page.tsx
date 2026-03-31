import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Webinars — Free Online Franchise Education | FMS',
  description: 'Free franchise webinars from FMS covering franchise development strategy, marketing, sales, operations, and how to franchise your business.',
};

const WEBINARS = [
  {
    title: 'How to Franchise Your Business: The Complete Guide',
    host: 'Chris Conner, FMS President',
    duration: '45 min',
    topics: ['Is your business franchise-ready?', 'The franchise development timeline', 'Costs and investment required', 'How FMS builds franchise systems'],
    url: 'https://www.youtube.com/@franchisemarketingsystems3808',
    badge: 'Most Popular',
    badgeColor: '#c8a84b',
  },
  {
    title: 'Franchise Marketing & Lead Generation Masterclass',
    host: 'FMS Digital Marketing Team',
    duration: '38 min',
    topics: ['Building a franchise recruitment website', 'SEO and organic lead generation', 'Paid advertising for franchise sales', 'CRM and pipeline automation'],
    url: 'https://www.youtube.com/@franchisemarketingsystems3808',
    badge: 'FMS Digital',
    badgeColor: '#38bdf8',
  },
  {
    title: 'Franchise Sales: Closing Deals & Building Your Network',
    host: 'FMS Franchise Sales Team',
    duration: '42 min',
    topics: ['Qualifying franchise buyers effectively', 'The franchise discovery process', 'Common objections and how to handle them', 'Territory structuring for maximum sales'],
    url: 'https://www.youtube.com/@franchisemarketingsystems3808',
    badge: 'Sales Strategy',
    badgeColor: '#4a7c59',
  },
  {
    title: 'Franchise Legal & Compliance: FDD Deep Dive',
    host: 'Chris Conner, FMS President',
    duration: '55 min',
    topics: ['Understanding the FDD structure', 'Registration vs. notice states', 'FTC compliance requirements', 'Working with franchise attorneys'],
    url: 'https://www.youtube.com/@franchisemarketingsystems3808',
    badge: 'Legal',
    badgeColor: '#6366f1',
  },
  {
    title: 'Building Franchisee Support Systems That Scale',
    host: 'FMS Operations Team',
    duration: '40 min',
    topics: ['Operations manual development', 'Training program creation', 'Ongoing franchisee support frameworks', 'Outsourced vs. internal support'],
    url: 'https://www.youtube.com/@franchisemarketingsystems3808',
    badge: 'Operations',
    badgeColor: '#0ea5e9',
  },
  {
    title: 'Franchising FAQs: Your Top 25 Questions Answered',
    host: 'Chris Conner, FMS President',
    duration: '62 min',
    topics: ['Total cost to franchise a business', 'How long does development take?', 'What royalty rate should I charge?', 'When is the right time to franchise?'],
    url: 'https://www.youtube.com/@franchisemarketingsystems3808',
    badge: 'Q&A',
    badgeColor: '#f59e0b',
  },
];

export default function WebinarsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/learn">Learn</Link>
            <span>›</span>
            <span>Webinars</span>
          </div>
          <span className="eyebrow">Free Education</span>
          <h1>Franchise Webinars — Learn from the Experts</h1>
          <p style={{ maxWidth: '680px' }}>
            Free, on-demand webinars from the FMS team covering every aspect of the franchise development journey — from evaluating whether your business is ready to franchise, to marketing, sales, operations, and legal compliance.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="https://www.youtube.com/@franchisemarketingsystems3808" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">▶ Watch on YouTube</a>
            <Link href="/franchise-feasibility-questionnaire" className="btn btn-outline btn-lg">Take the Feasibility Quiz</Link>
          </div>
        </div>
      </div>

      {/* Webinar grid */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">On-Demand Webinars</span>
            <h2>Franchise Education from the FMS Team</h2>
            <div className="divider" />
            <p>Each webinar is free, no-signup-required, and hosted on the FMS YouTube channel. Watch at your own pace, pause, rewind, and share with your team.</p>
          </div>
          <div className="grid-2" style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {WEBINARS.map(w => (
              <div key={w.title} style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                {/* Video placeholder */}
                <div style={{ background: 'linear-gradient(135deg, #1a2c1e, #2d4135)', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '2px solid rgba(255,255,255,0.25)' }}>
                    <div style={{ width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '20px solid #fff', marginLeft: '4px' }} />
                  </div>
                  <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, background: w.badgeColor, padding: '0.2rem 0.6rem', borderRadius: '999px', color: w.badge === 'Most Popular' || w.badge === 'Sales Strategy' ? '#1a1a1a' : '#fff' }}>{w.badge}</span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '0.75rem', right: '0.75rem' }}>
                    <span style={{ fontSize: '0.72rem', background: 'rgba(0,0,0,0.4)', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>⏱ {w.duration}</span>
                  </div>
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <h3 style={{ fontSize: '0.95rem', lineHeight: 1.4 }}>{w.title}</h3>
                  <div style={{ fontSize: '0.78rem', color: '#9ca3af' }}>Hosted by {w.host}</div>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9ca3af', marginBottom: '0.5rem' }}>Topics Covered</div>
                    {w.topics.map(t => (
                      <div key={t} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', padding: '0.3rem 0', fontSize: '0.83rem', color: '#4a5568' }}>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7c59', marginTop: '0.45rem', flexShrink: 0 }} />
                        {t}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
                    <a href={w.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>▶ Watch Free</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow eyebrow-light">YouTube Channel</span>
            <h2 style={{ color: '#fff', marginBottom: '1.25rem' }}>Hundreds More Videos on the FMS YouTube Channel</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              The FMS Franchise Marketing Systems YouTube channel features hundreds of free franchise education videos — covering franchise development strategy, marketing, sales, operations, industry trends, and real franchisee success stories. Subscribe to stay current on everything franchise.
            </p>
            <a href="https://www.youtube.com/@franchisemarketingsystems3808" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Subscribe on YouTube →</a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Have a Real Conversation?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Webinars are a great starting point. A free consultation with an FMS franchise expert is where your specific questions get specific answers.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://info.fmsfranchise.com/freeconsultation" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Schedule Free Consultation</a>
            <Link href="/franchise-feasibility-questionnaire" className="btn btn-outline-white btn-lg">Take Feasibility Quiz</Link>
          </div>
        </div>
      </section>
    </>
  );
}
