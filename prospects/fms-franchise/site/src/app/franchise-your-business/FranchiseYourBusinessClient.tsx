'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FranchiseYourBusinessClient() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const clients = [
    'Stella\'s Ice Cream', 'Chaiiwala of London', 'Oggi\'s Brewhouse',
    'Impresa Modular Home Building', 'Kelly\'s Ice Cream', 'Spartan Floor Coatings',
    'Culver\'s', 'Mr. Jim\'s Pizza', 'Poke House', 'Royal Pet Bakery & Grooming',
    'ActionCOACH', 'Soccer Post', 'MF Gyros', 'Bagel Hole', 'Green Home Solutions',
    'Anytime Fitness', 'Restoration 1', 'Smash My Trash', 'Two Men and a Truck',
    'Hungry Howie\'s Pizza',
  ];

  return (
    <main>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #2c4a2e 0%, #1a3a1c 100%)',
        color: '#fff',
        padding: '80px 0 60px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }} className="fyb-hero-grid">

            {/* Left: Copy */}
            <div>
              <p style={{
                color: '#c8a84b',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}>FREE CONSULTATION</p>
              <h1 style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(32px, 4vw, 52px)',
                lineHeight: 1.15,
                marginBottom: '24px',
              }}>
                Turn your successful business into a thriving franchise brand.
              </h1>
              <p style={{
                fontFamily: '\'Source Sans 3\', sans-serif',
                fontSize: '18px',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '32px',
              }}>
                Our franchise consultants specialize in helping business owners like you:
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}>
                {[
                  'Expand nationwide with proven franchise systems',
                  'Collect ongoing royalty revenue',
                  'Increase business valuation and long-term exit potential',
                  'Attract investors and grow faster, with less risk',
                ].map((item, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontFamily: '\'Source Sans 3\', sans-serif',
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.9)',
                  }}>
                    <span style={{
                      display: 'flex',
                      width: '22px',
                      height: '22px',
                      background: '#c8a84b',
                      borderRadius: '50%',
                      flexShrink: 0,
                      marginTop: '2px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#1a3a1c',
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{
                fontFamily: '\'Source Sans 3\', sans-serif',
                fontSize: '17px',
                color: 'rgba(255,255,255,0.8)',
                fontStyle: 'italic',
              }}>
                We'll show you exactly how to turn your business into a franchise and how fast you can start seeing returns.
              </p>
            </div>

            {/* Right: Form */}
            <div id="form" style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '40px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#2c4a2e', marginBottom: '12px' }}>
                    Thank You!
                  </h3>
                  <p style={{ fontFamily: '\'Source Sans 3\', sans-serif', color: '#555' }}>
                    A franchise consultant will be in touch shortly to discuss your free consultation.
                  </p>
                </div>
              ) : (
                <>
                  <h2 style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: '22px',
                    color: '#2c4a2e',
                    marginBottom: '8px',
                  }}>Discover what&#39;s possible for your brand.</h2>
                  <p style={{
                    fontFamily: '\'Source Sans 3\', sans-serif',
                    fontSize: '15px',
                    color: '#666',
                    marginBottom: '24px',
                  }}>Get your free franchise consultation today.</p>
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="fyb-name-row">
                      <div>
                        <label style={labelStyle}>First Name *</label>
                        <input
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          style={inputStyle}
                          placeholder="Jane"
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Last Name *</label>
                        <input
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          style={inputStyle}
                          placeholder="Smith"
                        />
                      </div>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="jane@yourbusiness.com"
                      />
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                      <label style={labelStyle}>Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                      <label style={labelStyle}>Business Name</label>
                      <input
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Your Business Name"
                      />
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                      <label style={labelStyle}>Tell us about your business</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        style={{ ...inputStyle, resize: 'vertical' }}
                        placeholder="Brief description of your business and goals..."
                      />
                    </div>
                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        background: '#c8a84b',
                        color: '#1a3a1c',
                        border: 'none',
                        padding: '16px',
                        borderRadius: '6px',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 700,
                        fontSize: '16px',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#b8962f')}
                      onMouseLeave={e => (e.currentTarget.style.background = '#c8a84b')}
                    >
                      Schedule My Free Consultation
                    </button>
                    <p style={{
                      fontFamily: '\'Source Sans 3\', sans-serif',
                      fontSize: '13px',
                      color: '#999',
                      marginTop: '12px',
                      textAlign: 'center',
                    }}>
                      Or call us at{' '}
                      <a href="tel:+18006100292" style={{ color: '#2c4a2e', fontWeight: 600 }}>800-610-0292</a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof — Results that speak ── */}
      <section style={{ padding: '64px 0', background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4a7c59', marginBottom: '12px', textAlign: 'center' }}>REAL CLIENT RESULTS</p>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(22px, 3vw, 34px)', color: '#1a3a1c', textAlign: 'center', marginBottom: '48px', lineHeight: 1.25 }}>
            What happens when the right business meets the right system.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '32px' }}>
            {[
              {
                badge: '29 franchises sold — year one',
                name: 'Kavish Sharma',
                title: 'Founder, MF Gyros & Burgers',
                quote: 'Working with Franchise Marketing Systems helped MF Gyros take the next step from a successful single location into a structured franchise brand. The FMS team understood our vision and built the foundation we needed for real expansion.',
                outcomes: ['Clear franchise development strategy', 'Marketing assets to attract qualified partners', '29 franchises sold in the first year'],
              },
              {
                badge: '13 franchises sold — year one',
                name: 'Gary & Cathy Trentacosta',
                title: 'Co-Owners, Bagel Hole',
                quote: 'FMS structured our entire franchise program and gave us a clear strategy for expansion. The demand from qualified candidates exceeded our expectations.',
                outcomes: ['Structured program built for scalable growth', 'Strong demand from qualified candidates', '13 franchises sold in the first year'],
              },
            ].map((item, i) => (
              <div key={i} style={{ background: '#f8f8f6', borderRadius: '12px', padding: '36px', border: '1.5px solid #e8e8e4' }}>
                <div style={{ background: '#35a84a', color: '#fff', fontSize: '12px', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', padding: '4px 14px', borderRadius: '3px', display: 'inline-block', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                  {item.badge}
                </div>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '24px' }}>
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: '16px', marginBottom: '20px' }}>
                  {item.outcomes.map((o, j) => (
                    <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '8px', fontSize: '14px', color: '#333' }}>
                      <span style={{ color: '#35a84a', fontWeight: 900, flexShrink: 0 }}>✓</span>
                      {o}
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#2c4a2e', fontSize: '14px', marginBottom: '2px' }}>{item.name}</p>
                <p style={{ fontSize: '12px', color: '#4a7c59', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Objection Handling — Is this right for you? ── */}
      <section style={{ padding: '64px 0', background: '#f8f8f6' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4a7c59', marginBottom: '12px', textAlign: 'center' }}>BEFORE YOU CALL</p>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(22px, 3vw, 32px)', color: '#1a3a1c', textAlign: 'center', marginBottom: '16px', lineHeight: 1.25 }}>
            We understand why you might hesitate.
          </h2>
          <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '17px', color: '#555', textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px', lineHeight: 1.75 }}>
            Every business owner considering franchising carries the same three fears. Here&apos;s how FMS addresses them directly.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                fear: '"What if I lose control of my brand?"',
                answer: 'Franchising actually gives you more legal control over your brand than any other model. Your Franchise Agreement and FDD specify enforceable brand standards. Franchisees who violate them can lose their franchise rights. FMS builds your quality assurance process into the program from day one.',
              },
              {
                fear: '"What if I pay for development and never sell a single franchise?"',
                answer: 'This is a real risk — and we address it head-on. 67% of franchisors who fail to sell in year one tried to manage franchise sales themselves. FMS includes an active in-house franchise sales team in your engagement. We don\'t just build the system. We help you sell it.',
              },
              {
                fear: '"What if my business isn\'t ready yet?"',
                answer: 'We\'ll tell you honestly. Our free feasibility consultation is a genuine assessment — we evaluate your unit economics, replicability, and documentation quality. If you\'re not ready, we\'ll tell you what needs to change and when to come back. No hard sell.',
              },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '10px', padding: '28px 32px', border: '1.5px solid #e8e8e4', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', alignItems: 'start' }} className="fyb-objection-row">
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '16px', color: '#2c4a2e', lineHeight: 1.4, margin: 0, fontStyle: 'italic' }}>{item.fear}</p>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7, margin: 0 }}>{item.answer}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="#form" style={{ display: 'inline-block', background: '#2c4a2e', color: '#fff', padding: '16px 48px', borderRadius: '6px', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '15px', letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none' }}>
              Schedule My Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Client Work Showcase */}
      <section style={{ padding: '80px 0', background: '#f8f8f6' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <p style={sectionLabelStyle}>OUR CLIENT WORK</p>
          <h2 style={{ ...sectionHeadingStyle, marginBottom: '16px' }}>
            Over 700 Brands. One Proven System.
          </h2>
          <p style={{
            fontFamily: '\'Source Sans 3\', sans-serif',
            fontSize: '18px',
            color: '#555',
            maxWidth: '700px',
            marginBottom: '48px',
            lineHeight: 1.7,
          }}>
            Franchise Marketing Systems has taken over 700 businesses and helped them grow through franchising across every industry.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '12px',
          }}>
            {clients.map((client, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #e8e8e8',
                borderRadius: '8px',
                padding: '16px 20px',
                fontFamily: '\'Source Sans 3\', sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: '#333',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span style={{ width: '8px', height: '8px', background: '#4a7c59', borderRadius: '50%', flexShrink: 0 }} />
                {client}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Link href="/our-clients" style={{
              display: 'inline-block',
              background: '#2c4a2e',
              color: '#fff',
              padding: '14px 36px',
              borderRadius: '6px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}>
              See All Our Clients
            </Link>
          </div>
        </div>
      </section>

      {/* Business Case for Franchising */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '40px',
          }} className="fyb-biz-case">

            <div>
              <div style={{
                width: '56px',
                height: '56px',
                background: '#f0f7f1',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                marginBottom: '20px',
              }}>💼</div>
              <h3 style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                color: '#1a3a1c',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '12px',
              }}>THE BUSINESS CASE FOR FRANCHISING</h3>
              <p style={{ fontFamily: '\'Source Sans 3\', sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>
                Most small to mid-sized businesses don&apos;t have the money to open up 1 or 2 more locations with their own capital, let alone open up hundreds. Franchising provides the necessary cash flow for quicker expansion.
              </p>
            </div>
            <div>
              <div style={{
                width: '56px',
                height: '56px',
                background: '#f0f7f1',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                marginBottom: '20px',
              }}>🤝</div>
              <h3 style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                color: '#1a3a1c',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '12px',
              }}>YOU GET OWNER OPERATORS</h3>
              <p style={{ fontFamily: '\'Source Sans 3\', sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>
                Franchisees invest their own time and capital into the franchise, and are involved in the day-to-day operations.
              </p>
            </div>
            <div>
              <div style={{
                width: '56px',
                height: '56px',
                background: '#f0f7f1',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                marginBottom: '20px',
              }}>🚀</div>
              <h3 style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                color: '#1a3a1c',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '12px',
              }}>YOU GET RAPID GROWTH</h3>
              <p style={{ fontFamily: '\'Source Sans 3\', sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>
                Time is one thing we can&apos;t buy. Franchising gives you the ability to capture market share incredibly fast!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Success CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #2c4a2e 0%, #1a3a1c 100%)',
        padding: '80px 0',
        color: '#fff',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(26px, 4vw, 40px)',
            marginBottom: '20px',
          }}>EMBRACE LONG-TERM SUCCESS</h2>
          <p style={{
            fontFamily: '\'Source Sans 3\', sans-serif',
            fontSize: '18px',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '40px',
          }}>
            It&apos;s time to make a choice that will benefit your business for years to come. By choosing to grow with franchising, you&apos;ll be able to expand quickly, access capital, and work with owner-operators who are invested in your success. Don&apos;t miss out on this opportunity.
          </p>
          <a href="#form" style={{
            display: 'inline-block',
            background: '#c8a84b',
            color: '#1a3a1c',
            padding: '18px 48px',
            borderRadius: '6px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}>
            Schedule Consultation
          </a>
        </div>
      </section>

      {/* Start Today Section */}
      <section style={{ padding: '80px 0', background: '#f8f8f6' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={sectionLabelStyle}>START YOUR FRANCHISE TODAY</p>
          <h2 style={{ ...sectionHeadingStyle, maxWidth: '800px', margin: '0 auto 24px' }}>
            Get access to proven franchise strategies, growth planning, and scalable systems designed to help your business expand with confidence.
          </h2>
          <p style={{
            fontFamily: '\'Source Sans 3\', sans-serif',
            fontSize: '17px',
            color: '#555',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}>
            FMS is a full-service franchise development and the best franchise consulting company in the US that works in a performance-based franchise development approach to help you start a franchise. FMS has qualified and expert franchise consultants throughout the United States and Canada that works both domestically and internationally.{' '}
            <Link href="/about-us" style={{ color: '#2c4a2e', fontWeight: 600 }}>Learn more</Link>
          </p>
        </div>
      </section>
      {/* ── Mobile responsive overrides for inline grids ── */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .fyb-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .fyb-hero-grid > div:last-child { order: -1; }
          .fyb-objection-row { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .fyb-biz-case { grid-template-columns: 1fr !important; }
          .fyb-name-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 600,
  fontSize: '13px',
  color: '#444',
  marginBottom: '6px',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  border: '1.5px solid #ddd',
  borderRadius: '6px',
  fontFamily: '\'Source Sans 3\', sans-serif',
  fontSize: '15px',
  color: '#333',
  outline: 'none',
  boxSizing: 'border-box',
};

const sectionLabelStyle: React.CSSProperties = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 700,
  fontSize: '13px',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color: '#4a7c59',
  marginBottom: '12px',
};

const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 800,
  fontSize: 'clamp(28px, 3.5vw, 44px)',
  color: '#1a3a1c',
  lineHeight: 1.2,
  marginBottom: '24px',
};
