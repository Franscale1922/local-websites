import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franchise Digital Marketing Services | FMS Digital',
  description: 'Franchise digital marketing services by FMS Digital help generate leads, grow your brand, and scale your franchise with proven strategies and expert support.',
  openGraph: {
    title: 'Franchise Digital Marketing Services | FMS Digital',
    description: 'FMS Digital helps franchise brands generate leads, grow brand awareness, and scale with proven digital marketing strategies.',
  },
};

const SERVICES = [
  {
    icon: '🎨',
    title: 'Branding That Builds Connection',
    href: '/services/marketing-your-franchise/branding-marketing',
    items: [
      'Logos and brand guides that capture your brand\'s emotional and visual identity',
      'Signage, vehicle wraps, menus, and packaging that turn essentials into brand assets',
      'Social media promotions and digital newsletters to keep your brand fresh',
      'Brochures, sell sheets, PowerPoints, and promotional materials to sell your vision',
    ],
    spotlight: { brand: 'Kids Empire', result: '100+ franchise-unit growth nationwide', href: 'https://www.fmsfranchise.com/our-clients/fmsdigital-portfolio/kids-empire/' },
  },
  {
    icon: '🤝',
    title: 'Turn Connections into Contracts via Tradeshows',
    href: '/services/marketing-your-franchise/branding-marketing',
    items: [
      'Eye-catching booths that draw crowds and reflect your brand identity',
      'Handouts, collateral, and messaging to make your pitch more effective',
      'Staff the booth with pros who know franchising and build lasting relationships',
      'Timely lead follow-up to help convert interest into signed agreements',
    ],
    spotlight: { brand: 'Poke Burri', result: 'Spotlights on Forbes, FOX News, US Weekly & more', href: 'https://www.fmsfranchise.com/our-clients/fmsdigital-portfolio/poke-burri/' },
  },
  {
    icon: '📈',
    title: 'Digital Lead Generation & Growth',
    href: '/fms-digital/lead-generation',
    items: [
      'High-converting websites, microsites, and eCommerce platforms to fuel sales',
      'Targeted videos and print collateral to generate buzz and drive traffic',
      'Social media management, SEO, and digital advertising for national exposure',
      'CRM systems and auto-reply to nurture inbound leads',
      'Ready-to-use tools for your franchisees to drive stronger unit sales',
    ],
    spotlight: { brand: 'Castle Rock Hormone Health', result: 'Rapid and ongoing franchise expansion', href: 'https://www.fmsfranchise.com/our-clients/fmsdigital-portfolio/castle-rock-hormone-health-a-leader-in-the-growing-hormone-optimization-market/' },
  },
];

const WHY_FMS = [
  { icon: '👂', title: 'We Listen First', desc: 'Your goals become ours. We start by understanding your brand\'s story and challenges, then build collateral that fits and converts.' },
  { icon: '🤝', title: 'Real Partners, Not Just Vendors', desc: 'Our in-house team of 20+ marketing experts works side-by-side with you, not handed off to a third party.' },
  { icon: '💬', title: 'Guidance That Feels Personal', desc: 'We don\'t just deliver design collateral and KPI reports. We\'ll take your calls, answer your questions, and provide ongoing support.' },
  { icon: '📊', title: 'Results You Can See', desc: 'We\'ve helped hundreds of brands sell more franchises and grow royalties. Your success is measurable.' },
];

const PROCESS = [
  { num: '01', title: 'We Listen & Audit', desc: 'Free call and a quick digital review. We\'ll uncover what\'s holding you back and what could accelerate growth.' },
  { num: '02', title: 'We Build & Guide', desc: 'We\'ll develop a custom strategy and help execute it. You\'ll receive regular check-ins and transparent updates.' },
  { num: '03', title: 'We Optimize & You Scale', desc: 'More leads, higher conversions, happier franchisees, and growing royalties.' },
];

const DIGITAL_SERVICES_MENU = [
  { label: 'Lead Generation', href: '/fms-digital/lead-generation' },
  { label: 'Branding & Marketing', href: '/fms-digital/franchise-branding-services' },
  { label: 'Website Design', href: '/fms-digital/website-design' },
  { label: 'SEO & Digital Advertising', href: '/services/marketing-your-franchise/seo' },
  { label: 'Social Media', href: '/fms-digital/franchise-social-media-strategy' },
  { label: 'Tradeshows', href: '/fms-digital/franchise-tradeshows-lead-generation' },
  { label: 'Portfolio', href: '/our-clients/fmsdigital-portfolio' },
];

export default function FmsDigitalPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0f2a4a 100%)' }}>
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <span>FMS Digital</span>
          </div>
          <span className="eyebrow" style={{ color: '#38bdf8' }}>DIGITAL MARKETING ARM</span>
          <h1 style={{ color: '#fff' }}>Franchise Digital Marketing Services</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '620px', lineHeight: 1.8 }}>
            Franchise digital marketing is more competitive than ever. You&apos;ve built the foundation for franchising, but today&apos;s digital landscape is crowded and confusing. FMS Digital&apos;s proven, tailored strategies cut through the noise — attracting quality leads, driving royalties, and elevating your brand from local favorite to national powerhouse.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link href="/about-us/contact" style={{ padding: '0.85rem 2rem', background: '#38bdf8', color: '#0a1628', borderRadius: '6px', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.06em', textDecoration: 'none', textTransform: 'uppercase' }}>Talk to a Franchise Expert</Link>
            <Link href="/our-clients/fmsdigital-portfolio" className="btn btn-outline-white">View Portfolio</Link>
          </div>
        </div>
      </div>

      {/* Sub-nav */}
      <section style={{ background: '#0d2137', borderBottom: '1px solid rgba(56,189,248,0.15)', overflowX: 'auto' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0', overflowX: 'auto' }}>
            {DIGITAL_SERVICES_MENU.map(item => (
              <Link key={item.label} href={item.href} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', padding: '1rem 1.25rem', whiteSpace: 'nowrap', display: 'block', borderBottom: '2px solid transparent', transition: 'color 0.2s' }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why FMS */}
      <section style={{ padding: '5rem 0', background: '#f8f8f6' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4a7c59', display: 'block', marginBottom: '0.5rem' }}>WHY FMS DIGITAL</span>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1a3a1c', marginBottom: '0.5rem' }}>We&apos;re Not Just a Vendor — We&apos;re Your Growth Partner</h2>
            <p style={{ fontFamily: 'Source Sans 3, sans-serif', color: '#555', lineHeight: 1.75, maxWidth: '580px', margin: '0 auto', fontSize: '0.95rem' }}>Trusted by hundreds of franchise brands. Our team is built for the unique demands of franchise marketing.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {WHY_FMS.map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', border: '1.5px solid #e0e8e2', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#1a3a1c', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.88rem', color: '#555', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services with spotlights */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4a7c59', display: 'block', marginBottom: '0.5rem' }}>OUR SERVICES</span>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1a3a1c' }}>Services to Grow Your Franchise</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {SERVICES.map((service, i) => (
              <div key={service.title} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '2fr 1fr' : '1fr 2fr', gap: '3rem', alignItems: 'center' }}>
                {i % 2 !== 0 && (
                  <div style={{ background: 'linear-gradient(135deg, #0a1628, #0d2137)', borderRadius: '20px', padding: '2.5rem', color: '#fff' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#38bdf8', marginBottom: '0.75rem' }}>Client Spotlight</div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem' }}>{service.spotlight.brand}</div>
                    <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, marginBottom: '1.25rem' }}>{service.spotlight.result}</p>
                    <a href={service.spotlight.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#38bdf8', textDecoration: 'none' }}>Get the Full Story →</a>
                  </div>
                )}
                <div>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#1a3a1c', marginBottom: '1.25rem' }}>{service.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem' }}>
                    {service.items.map(item => (
                      <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.7rem' }}>
                        <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#2c4a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: '#c8a84b', fontWeight: 900, flexShrink: 0, marginTop: '2px' }}>✓</div>
                        <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.9rem', color: '#444', lineHeight: 1.5 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {i % 2 === 0 && (
                  <div style={{ background: 'linear-gradient(135deg, #0a1628, #0d2137)', borderRadius: '20px', padding: '2.5rem', color: '#fff' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#38bdf8', marginBottom: '0.75rem' }}>Client Spotlight</div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem' }}>{service.spotlight.brand}</div>
                    <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, marginBottom: '1.25rem' }}>{service.spotlight.result}</p>
                    <a href={service.spotlight.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#38bdf8', textDecoration: 'none' }}>Get the Full Story →</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 0', background: '#f8f8f6' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4a7c59', display: 'block', marginBottom: '0.5rem' }}>HOW IT WORKS</span>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1a3a1c' }}>Your Clear Path to Digital Marketing Success</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {PROCESS.map(step => (
              <div key={step.num} style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', border: '1.5px solid #e0e8e2', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, #0a1628, #0d2137)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '1.1rem', color: '#38bdf8', margin: '0 auto 1.25rem' }}>{step.num}</div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#1a3a1c', fontSize: '1rem', marginBottom: '0.6rem' }}>{step.title}</h3>
                <p style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: '0.9rem', color: '#555', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 100%)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#38bdf8', display: 'block', marginBottom: '0.75rem' }}>WONDERING HOW THESE SERVICES CAN WORK FOR YOU?</span>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>Turn Your Digital Presence Into a Lead Machine</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>Proven steps to attract the right prospects, convert interest into qualified leads, and build a digital foundation that supports long-term franchise growth.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about-us/contact" style={{ padding: '1rem 2.5rem', background: '#38bdf8', color: '#0a1628', borderRadius: '6px', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.06em', textDecoration: 'none', textTransform: 'uppercase' }}>Talk to a Franchise Expert</Link>
            <Link href="/our-clients/fmsdigital-portfolio" className="btn btn-outline-white btn-lg">View Portfolio</Link>
          </div>
        </div>
      </section>
    </>
  );
}
