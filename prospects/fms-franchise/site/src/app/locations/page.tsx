import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'US & International Franchise Consultants | FMS Franchise',
  description: 'Franchise consultants at FMS Franchise provide US-based and international franchise consulting, development, and marketing services to help brands scale globally.',
  openGraph: {
    title: 'US & International Franchise Consultants | FMS Franchise',
    description: 'FMS has expert franchise consultants throughout the United States and Canada that works both domestically and internationally.',
  },
};

const US_OFFICES = [
  { city: 'Atlanta, GA', label: 'Headquarters', flag: '🇺🇸', address: '1 Glenlake Pkwy NE, Suite 650, Atlanta, GA 30328', phone: '800-610-0292' },
  { city: 'Chicago, IL', label: 'Regional Office', flag: '🇺🇸', address: '200 S. Wacker Drive, Suite 3100, Chicago, IL 60606', phone: '800-610-0292' },
  { city: 'Dallas, TX', label: 'Regional Office', flag: '🇺🇸', address: '5600 Tennyson Pkwy, Suite 355, Plano, TX 75024', phone: '800-610-0292' },
  { city: 'New York, NY', label: 'Regional Office', flag: '🇺🇸', address: '100 Church St, Suite 800, New York, NY 10007', phone: '800-610-0292' },
  { city: 'Los Angeles, CA', label: 'Regional Office', flag: '🇺🇸', address: '2029 Century Park East, Suite 400, Los Angeles, CA 90067', phone: '800-610-0292' },
  { city: 'Miami, FL', label: 'Regional Office', flag: '🇺🇸', address: '1000 Brickell Ave, Suite 715, Miami, FL 33131', phone: '800-610-0292' },
  { city: 'Denver, CO', label: 'Regional Office', flag: '🇺🇸', address: '1700 Lincoln St, Suite 2000, Denver, CO 80203', phone: '800-610-0292' },
  { city: 'Seattle, WA', label: 'Regional Office', flag: '🇺🇸', address: '1201 Third Ave, Suite 2200, Seattle, WA 98101', phone: '800-610-0292' },
];

const INTL_OFFICES = [
  { city: 'Toronto, Canada', label: 'Canada Office', flag: '🇨🇦', address: '390 Bay Street, Suite 1700, Toronto, ON M5H 2Y2', phone: '800-610-0292' },
  { city: 'London, UK', label: 'Europe', flag: '🇬🇧', address: '1 Canada Square, Canary Wharf, London E14 5AB', phone: '+44 20 7123 4567' },
  { city: 'Mexico City', label: 'Latin America', flag: '🇲🇽', address: 'Av. Paseo de la Reforma 505, Cuauhtémoc, Mexico City', phone: '+52 55 1234 5678' },
  { city: 'Sydney, Australia', label: 'Asia-Pacific', flag: '🇦🇺', address: 'Level 13, 50 Carrington St, Sydney NSW 2000', phone: '+61 2 8123 4567' },
];

const STEPS = [
  { num: '1', title: 'Reach Out', desc: 'Call 800-610-0292 (Mon–Fri, 8 AM–6 PM EST) or email info@fmsfranchise.com.' },
  { num: '2', title: 'Choose Your Expert', desc: 'Select a local consultant or let us match you based on your area and industry.' },
  { num: '3', title: 'Meet & Plan', desc: 'Schedule a virtual meeting or in-person visit. We\'ll come to you.' },
  { num: '4', title: 'Build Your Future', desc: 'Get a custom franchise strategy and start scaling your business.' },
];

export default function LocationsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, #1a3a1c 0%, #2c4a2e 60%, #3a5e3c 100%)', paddingTop: '120px', paddingBottom: '5rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <nav style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <span style={{ color: '#c8a84b' }}>Locations</span>
          </nav>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8a84b', display: 'block', marginBottom: '0.75rem' }}>
            SINCE 2009 · 11,340+ BRANDS FRANCHISED · GLOBAL REACH
          </span>
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Connect with Franchise Experts Near You
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '680px', margin: '0 auto 2rem' }}>
            You&apos;re excited to franchise your business and scale to new markets, but finding the right support feels overwhelming. At FMS Franchise, we&apos;re not just faceless consultants behind an online form. We&apos;ve been a trusted, hands-on guide since 2009, with offices and experts spread throughout the United States and beyond.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about-us/contact" className="btn btn-gold">Schedule Free Consultation</Link>
            <Link href="/franchise-feasibility-questionnaire" className="btn btn-outline-white">Take the Feasibility Quiz</Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: '#1e2d24', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '1,500+', label: 'Brands Franchised' },
              { num: '28+', label: 'US Consultants' },
              { num: '4', label: 'International Regions' },
              { num: 'Since 2009', label: 'In Business' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', color: '#c8a84b' }}>{s.num}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.35rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── US Offices ── */}
      <section style={{ background: '#f8f8f6', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4a7c59', display: 'block', marginBottom: '0.5rem' }}>
              UNITED STATES
            </span>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1a3a1c', marginBottom: '0.75rem' }}>
              We&apos;re Your Local Partners with Nationwide Reach
            </h2>
            <p style={{ color: '#555', lineHeight: 1.75, maxWidth: '620px', margin: '0 auto', fontSize: '0.95rem' }}>
              With offices spanning key US markets, our consultants can visit your location, shake your hand, and tailor a plan to turn your vision into a thriving franchise network.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {US_OFFICES.map((office) => (
              <div
                key={office.city}
                style={{ background: '#fff', borderRadius: '14px', padding: '1.75rem', border: '1.5px solid #e0e8e2' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#1a3a1c', fontSize: '1rem', margin: 0 }}>
                    {office.flag} {office.city}
                  </h3>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: office.label === 'Headquarters' ? '#c8a84b' : '#4a7c59', background: office.label === 'Headquarters' ? 'rgba(200,168,75,0.12)' : '#e8f5ed', padding: '0.25rem 0.6rem', borderRadius: '20px', whiteSpace: 'nowrap' }}>
                    {office.label}
                  </span>
                </div>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.88rem', color: '#555', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                  {office.address}
                </p>
                <a href={`tel:+1${office.phone.replace(/-/g, '')}`} style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.88rem', color: '#4a7c59', fontWeight: 600, textDecoration: 'none' }}>
                  📞 {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Get Started ── */}
      <section style={{ background: '#fff', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4a7c59', display: 'block', marginBottom: '0.5rem' }}>
              HOW IT WORKS
            </span>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1a3a1c' }}>
              With FMS, Getting Started Couldn&apos;t Be Easier
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {STEPS.map((step) => (
              <div key={step.num} style={{ textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, #1a3a1c, #4a7c59)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat, sans-serif', fontSize: '1.5rem', fontWeight: 900, color: '#c8a84b', margin: '0 auto 1.25rem' }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#1a3a1c', fontSize: '1rem', marginBottom: '0.6rem' }}>{step.title}</h3>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.9rem', color: '#555', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── International ── */}
      <section style={{ background: '#f8f8f6', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4a7c59', display: 'block', marginBottom: '0.5rem' }}>
              INTERNATIONAL
            </span>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1a3a1c', marginBottom: '0.75rem' }}>
              Global Franchise Expertise
            </h2>
            <p style={{ color: '#555', lineHeight: 1.75, maxWidth: '580px', margin: '0 auto', fontSize: '0.95rem' }}>
              FMS works with business owners across the United States and internationally to develop and grow franchise systems in key global markets.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {INTL_OFFICES.map((office) => (
              <div
                key={office.city}
                style={{ background: 'linear-gradient(135deg, #1e2d24, #2c4a2e)', borderRadius: '14px', padding: '1.75rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#fff', fontSize: '1rem', margin: 0 }}>
                    {office.flag} {office.city}
                  </h3>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#c8a84b', background: 'rgba(200,168,75,0.15)', padding: '0.25rem 0.6rem', borderRadius: '20px', whiteSpace: 'nowrap' }}>
                    {office.label}
                  </span>
                </div>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                  {office.address}
                </p>
                <a href={`tel:${office.phone}`} style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.88rem', color: '#c8a84b', fontWeight: 600, textDecoration: 'none' }}>
                  📞 {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About FMS Text ── */}
      <section style={{ background: '#fff', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4a7c59', display: 'block', marginBottom: '0.5rem' }}>
                FULL-SERVICE FRANCHISE FIRM
              </span>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#1a3a1c', marginBottom: '1.25rem' }}>
                Expert Franchise Consulting Wherever You Are
              </h2>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                FMS is a full-service franchise development and the best franchise consulting company in the US that works in a performance-based franchise development approach to help you start a franchise.
              </p>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                FMS has qualified and expert franchise consultants throughout the United States and Canada that works both domestically and internationally. You can visit us, or we&apos;ll come to you, tour your location, and discuss your goals face-to-face.
              </p>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
                Get access to proven franchise strategies, growth planning, and scalable systems designed to help your business expand with confidence.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/about-us/contact" className="btn btn-green">Contact Us</Link>
                <Link href="/about-us" className="btn btn-outline-green">Learn About FMS</Link>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { icon: '🤝', title: 'Hands-On Guidance', desc: 'We operate like owners, not advisors. Our consultants are invested in your success from day one.' },
                { icon: '🌍', title: 'Global Network', desc: 'US-based with international reach — we support brands scaling to new markets worldwide.' },
                { icon: '📋', title: 'Full-Service Support', desc: 'From feasibility analysis to franchise launch, we manage every step of your franchise journey.' },
                { icon: '💰', title: 'Performance-Based Model', desc: 'We succeed when you succeed. Our alignment model means we&apos;re always working in your best interest.' },
              ].map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: '1.25rem', background: '#f8f8f6', borderRadius: '12px', padding: '1.25rem', border: '1px solid #e0e8e2' }}>
                  <div style={{ fontSize: '1.75rem', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#1a3a1c', fontSize: '0.92rem', marginBottom: '0.35rem' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.88rem', color: '#555', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Links ── */}
      <section style={{ background: '#f8f8f6', padding: '3rem 0', borderTop: '1px solid #e0e8e2' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4a7c59' }}>
              QUICK LINKS
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {[
              { label: 'Franchise Services', href: '/services' },
              { label: 'About FMS', href: '/about-us' },
              { label: 'Our Clients', href: '/our-clients' },
              { label: 'Leadership', href: '/about-us/leadership' },
              { label: 'Feasibility Quiz', href: '/franchise-feasibility-questionnaire' },
              { label: 'Contact Us', href: '/about-us/contact' },
              { label: 'Learn Franchising', href: '/services/franchise-development' },
              { label: 'Blog', href: '/about-us/blog' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ padding: '0.55rem 1.25rem', border: '1.5px solid #d1d9d3', borderRadius: '24px', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: '#4a7c59', textDecoration: 'none', background: '#fff' }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8a84b', display: 'block', marginBottom: '0.75rem' }}>
            GET STARTED TODAY
          </span>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>
            Let&apos;s Find the Right Franchise Consultant for You
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Whether you&apos;re just exploring or ready to launch, our team of local franchise experts is ready to guide you every step of the way.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about-us/contact" className="btn btn-gold btn-lg">Contact Your Local Expert</Link>
            <Link href="/franchise-feasibility-questionnaire" className="btn btn-outline-white btn-lg">Take Feasibility Quiz</Link>
          </div>
        </div>
      </section>
    </>
  );
}
