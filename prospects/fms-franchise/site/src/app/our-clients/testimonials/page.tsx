import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchising Testimonials | What Our Clients Have to Say | FMS Franchise',
  description: 'Hear what our clients have to say about our franchise consulting services. Learn how we helped these businesses become successful franchises.',
  openGraph: {
    title: 'Franchising Testimonials | FMS Franchise',
    description: 'Real stories from real business owners who franchised with FMS Franchise Marketing Systems.',
  },
};

const TESTIMONIALS = [
  {
    name: 'Kavish Sharma',
    role: 'Founder, MF Gyros & Burgers',
    brand: 'MF Gyros',
    result: '29 Franchises Sold First Year',
    quote: 'Working with Franchise Marketing Systems helped MF Gyros take the next step from a successful single location into a structured franchise brand. After deciding to explore franchising, I felt confident the FMS team understood the vision for the brand and provided the guidance needed to build the right foundation for expansion.',
    outcomes: [
      'Clear franchise development strategy to support brand growth',
      'Structured systems and marketing assets to attract qualified franchise partners',
      '29 franchises sold in the first year of franchising',
    ],
    industry: 'Food & Beverage',
    color: '#e8b736',
  },
  {
    name: 'Gary & Cathy Trentacosta',
    role: 'Co-Owners, Bagel Hole',
    brand: 'Bagel Hole',
    result: '13 Franchises Sold First Year',
    quote: 'We partnered with Franchise Marketing Systems to structure the Bagel Hole franchise program and create a clear strategy for expansion. The process delivered beyond expectations.',
    outcomes: [
      'Structured franchise program designed for scalable expansion',
      'Strong demand from qualified franchise candidates',
      '13 franchises sold in the first year of franchising',
    ],
    industry: 'Food & Beverage',
    color: '#e8b736',
  },
  {
    name: 'Carl Carlson',
    role: 'Founder, Green Home Solutions',
    brand: 'Green Home Solutions',
    result: 'Smooth & Effective Launch',
    quote: 'Franchise Marketing Systems is fantastic to work with! They helped us with qualifying customers and they were flexible, professional and allowed us to launch effectively.',
    outcomes: [
      'Strong support in qualifying the right franchise candidates',
      'Flexible and professional team that adapted to our needs',
      'Smooth and effective launch process from start to finish',
    ],
    industry: 'Home Services',
    color: '#4a7c59',
  },
  {
    name: 'Nicole Blais',
    role: 'CEO & Founder, Goshenite Seniors Services',
    brand: 'Goshenite Seniors Services',
    result: 'Seamless Franchise Development',
    quote: 'I have been working with Chris and his team over the past year to develop our Franchise Model. Chris is very knowledgeable in the development of Franchise Models. Chris and his entire team have made this process seamless, and continue to offer their expertise whenever needed. Thank you, Chris, for your guidance and support throughout this entire process. In other words, you\'re the BEST!',
    outcomes: [
      'Clear, structured franchise model developed',
      'Ongoing expert support throughout the entire process',
      'Confident expansion into franchise growth mode',
    ],
    industry: 'Health & Wellness',
    color: '#3cb85e',
  },
];

const VIDEO_TESTIMONIALS = [
  {
    brand: 'MF Gyros',
    founder: 'Kavish Sharma',
    description: 'From single location to 29 franchise units in the first year — hear Kavish\'s full story.',
    industry: 'Food & Beverage',
  },
  {
    brand: 'Bagel Hole',
    founder: 'Gary & Cathy Trentacosta',
    description: 'How the co-owners built a structured franchise program and sold 13 units in year one.',
    industry: 'Food & Beverage',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1a3a1c 0%, #2c4a2e 60%, #3a5e3c 100%)', paddingTop: '120px', paddingBottom: '5rem', textAlign: 'center' }}>
        <div className="container">
          <nav style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Home</a>
            <span>›</span>
            <a href="/our-clients" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Our Clients</a>
            <span>›</span>
            <span style={{ color: '#c8a84b' }}>Testimonials</span>
          </nav>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8a84b', display: 'block', marginBottom: '0.75rem' }}>
            REAL STORIES · REAL RESULTS
          </span>
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Franchising Testimonials
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 2rem' }}>
            Hear what our clients have to say about our franchise consulting services. In their own words, they share why they trusted FMS to guide them through one of the most exciting phases of their business growth.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about-us/contact" className="btn btn-gold">Start Your Story</Link>
            <Link href="/our-clients" className="btn btn-outline-white">All Clients</Link>
          </div>
        </div>
      </section>

      {/* Sub-nav */}
      <section style={{ background: '#f8f8f6', borderBottom: '1px solid #e0e8e2' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto' }}>
            {[
              { label: 'Our Clients', href: '/our-clients', active: false },
              { label: 'Case Studies', href: '/case-studies', active: false },
              { label: 'Testimonials', href: '/our-clients/testimonials', active: true },
            ].map(tab => (
              <Link key={tab.label} href={tab.href} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: tab.active ? 700 : 600, fontSize: '0.85rem', color: tab.active ? '#2c4a2e' : '#888', textDecoration: 'none', padding: '1rem 0', borderBottom: tab.active ? '2.5px solid #c8a84b' : '2.5px solid transparent', whiteSpace: 'nowrap', display: 'block' }}>
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: '#fff', padding: '4rem 0 2rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4a7c59', display: 'block', marginBottom: '0.5rem' }}>
            HOW BUSINESS OWNERS TURNED SUCCESSFUL COMPANIES INTO SCALABLE FRANCHISE BRANDS
          </span>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1a3a1c', marginBottom: '1rem' }}>
            Proven Franchise Success Stories from FMS Clients
          </h2>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', color: '#555', lineHeight: 1.8, fontSize: '0.95rem' }}>
            If you&apos;re wondering whether franchising will be worth the investment — here are real business owners who&apos;ve been through it. In their own words, they&apos;ll share why they trusted FMS to guide them step by step through one of the most exciting phases of their business growth.
          </p>
        </div>
      </section>

      {/* Testimonial Cards */}
      <section style={{ background: '#fff', padding: '2rem 0 5rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} style={{ background: i % 2 === 0 ? '#f8f8f6' : '#fff', border: '1.5px solid #e0e8e2', borderRadius: '20px', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0' }}>
                {/* Left panel */}
                <div style={{ background: 'linear-gradient(135deg, #1a3a1c, #2c4a2e)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: t.color, lineHeight: 1 }}>❝</div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#fff', marginTop: '1rem', marginBottom: '0.4rem' }}>{t.name}</div>
                    <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.4 }}>{t.role}</div>
                  </div>
                  <div style={{ marginTop: '2rem' }}>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: t.color, marginBottom: '0.35rem' }}>Result</div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>{t.result}</div>
                    <div style={{ display: 'inline-block', marginTop: '0.75rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: t.color, background: `${t.color}20`, padding: '0.2rem 0.6rem', borderRadius: '10px' }}>{t.industry}</div>
                  </div>
                </div>
                {/* Right panel */}
                <div style={{ padding: '2.5rem' }}>
                  <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '1rem', color: '#2c2c2c', lineHeight: 1.85, fontStyle: 'italic', marginBottom: '2rem', borderLeft: `4px solid ${t.color}`, paddingLeft: '1.25rem' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4a7c59', marginBottom: '0.75rem' }}>Outcomes</div>
                    {t.outcomes.map(o => (
                      <div key={o} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#2c4a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', color: '#c8a84b', fontWeight: 900, flexShrink: 0, marginTop: '1px' }}>✓</div>
                        <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.9rem', color: '#444', lineHeight: 1.5 }}>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials placeholder section */}
      <section style={{ background: '#f8f8f6', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4a7c59', display: 'block', marginBottom: '0.5rem' }}>VIDEO TESTIMONIALS</span>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1a3a1c' }}>Hear It From Our Clients Directly</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {VIDEO_TESTIMONIALS.map(v => (
              <div key={v.brand} style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1.5px solid #e0e8e2', boxShadow: '0 4px 20px rgba(44,74,46,0.08)' }}>
                <div style={{ background: 'linear-gradient(135deg, #1e2d24, #2c4a2e)', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(200,168,75,0.2)', border: '2px solid #c8a84b', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', fontSize: '1.5rem' }}>▶</div>
                    <div style={{ marginTop: '0.75rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>Watch Video</div>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1rem', color: '#1a3a1c', marginBottom: '0.25rem' }}>{v.brand}</div>
                  <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.82rem', color: '#888', marginBottom: '0.75rem' }}>{v.founder}</div>
                  <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.88rem', color: '#555', lineHeight: 1.65 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8a84b', display: 'block', marginBottom: '0.75rem' }}>YOUR STORY STARTS HERE</span>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>Ready to Write Your Franchise Success Story?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>Join 700+ businesses that have franchised with FMS. Free consultation, no hard sell, no obligation.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about-us/contact" className="btn btn-gold btn-lg">Talk to a Franchise Expert</Link>
            <Link href="/franchise-feasibility-questionnaire" className="btn btn-outline-white btn-lg">Take Feasibility Quiz</Link>
          </div>
        </div>
      </section>
    </>
  );
}
