'use client';
import Link from 'next/link';
import Image from 'next/image';

const SOCIAL = [
  { label: 'Facebook', href: 'https://www.facebook.com/FranchiseMarketingSystems', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
  )},
  { label: 'Twitter/X', href: 'https://twitter.com/FranchiseMkting', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  )},
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/fmsfranchise/', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
  )},
  { label: 'YouTube', href: 'https://www.youtube.com/@franchisemarketingsystems3808', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#2d4135"/></svg>
  )},
  { label: 'Instagram', href: 'https://www.instagram.com/franchisemarketingsystems', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  )},
];

const SERVICES_COL = [
  { label: 'Franchise Development', href: '/services/franchise-development' },
  { label: 'Franchise Sales', href: '/services/franchise-sales' },
  { label: 'Management & Support', href: '/services/management-support' },
  { label: 'Franchise Business Plan', href: '/services/franchise-business-plans' },
  { label: 'Efficiency Audit', href: '/services/efficiency-audit' },
  { label: 'FMS Digital', href: '/fms-digital' },
  { label: 'FMS Sourcing', href: 'https://www.fmssourcing.com/', external: true },
];

const LEARN_COL = [
  { label: 'What is Franchising?', href: '/learn/what-is-franchising' },
  { label: 'Why Franchising?', href: '/learn/why-franchising' },
  { label: 'Industry Facts', href: '/learn/industry-facts' },
  { label: 'Franchise FAQs', href: '/learn/faqs' },
  { label: 'State Guidelines', href: '/learn/resources/state-guidelines' },
  { label: 'ROI Calculator', href: '/roi-calculator' },
  { label: 'Franchise Feasibility', href: '/franchise-feasibility-questionnaire' },
];

const ABOUT_COL = [
  { label: 'About FMS', href: '/about-us' },
  { label: 'Leadership', href: '/about-us/leadership' },
  { label: 'Meet the Team', href: '/meet-the-team' },
  { label: 'Our Clients', href: '/our-clients' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/about-us/blog' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/about-us/contact' },
  { label: 'Events', href: '/event' },
  { label: 'Locations', href: '/locations' },
];

const OFFICES = [
  { city: 'Atlanta, GA (HQ)', address: '6110 McFarland Station Dr, Unit 105\nAlpharetta, GA 30004' },
  { city: 'Boston, MA', address: '400 Tradecenter Drive, Suite 5900\nWoburn, MA 01801' },
  { city: 'Miami, FL', address: '713 Shotgun Road\nSunrise, FL 33326' },
  { city: 'Toronto, ON (Canada)', address: '85 N Park Rd #612\nVaughan, ON L4J 0H9' },
  { city: 'Ho Chi Minh City (Asia)', address: '41-43 Tran Cao Van Street\nDistrict 3, HCMC, Vietnam' },
  { city: 'Abuja (Africa)', address: '1473 Inner Block St, CBD\nAbuja 900103' },
  { city: 'Barbados (Caribbean)', address: 'Lot 2 Lower Silver Hill\nChrist Church, Barbados' },
];

const linkStyle = {
  fontSize: '0.88rem',
  color: 'rgba(255,255,255,0.65)',
  fontFamily: 'Source Sans 3, sans-serif',
  display: 'block',
  paddingBottom: '0.5rem',
  transition: 'color 0.2s',
  lineHeight: 1.4,
};

export default function Footer() {
  return (
    <footer style={{ background: '#1a2c1e', color: 'rgba(255,255,255,0.75)', fontFamily: 'Source Sans 3, sans-serif' }}>

      {/* ── Top footer rows ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.2fr', gap: '2.5rem 2rem', marginBottom: '3rem' }}>

          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Image
                src="/fms-logo.svg"
                alt="FMS Franchise Marketing Systems"
                width={160}
                height={45}
                style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
                unoptimized
              />
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', maxWidth: '280px', marginBottom: '1.25rem' }}>
              Turning Businesses Into Scalable Franchise Systems since 2009. 1,579+ brands developed across 7 global offices.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.65rem', marginBottom: '1.5rem' }}>
              {SOCIAL.map(s => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{ width: '36px', height: '36px', borderRadius: '6px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.background = '#35a84a'; el.style.color = '#fff'; }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'rgba(255,255,255,0.08)'; el.style.color = 'rgba(255,255,255,0.7)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div style={{ fontSize: '0.88rem' }}>
              <a href="tel:8006100292" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#eebc4a', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', marginBottom: '0.4rem' }}>
                📞 800-610-0292
              </a>
              <a href="mailto:info@FranchiseMarketingSystems.com" style={{ color: 'rgba(255,255,255,0.55)' }}>
                info@FranchiseMarketingSystems.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {SERVICES_COL.map(l => (
                <li key={l.href}>
                  {('external' in l && l.external) ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" style={linkStyle}
                      onMouseEnter={e => (e.currentTarget.style.color = '#35a84a')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                    >{l.label}</a>
                  ) : (
                    <Link href={l.href} style={linkStyle}
                      onMouseEnter={e => (e.currentTarget.style.color = '#35a84a')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                    >{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Learn</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {LEARN_COL.map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={linkStyle}
                    onMouseEnter={e => (e.currentTarget.style.color = '#35a84a')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About / Company */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {ABOUT_COL.map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={linkStyle}
                    onMouseEnter={e => (e.currentTarget.style.color = '#35a84a')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Global Offices ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', marginBottom: '2rem' }}>
          <h4 style={{ color: '#eebc4a', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Our Global Offices</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))', gap: '1.25rem' }}>
            {OFFICES.map(o => (
              <div key={o.city}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'Montserrat, sans-serif', marginBottom: '0.2rem' }}>{o.city}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.55, whiteSpace: 'pre-line' }}>{o.address}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
            Copyright © {new Date().getFullYear()} FMS Franchise | All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <Link href="/terms-conditions" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>Terms & Conditions</Link>
            <Link href="/privacy-policy" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>Privacy Policy</Link>
            <Link href="/sitemap" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>Sitemap</Link>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/franchise-feasibility-questionnaire" className="btn btn-gold btn-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem' }}>GET STARTED &gt;</Link>
            <Link href="/refer-a-client" className="btn btn-outline-white btn-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem' }}>REFER A CLIENT</Link>
          </div>
        </div>
      </div>

      {/* Responsive footer grid */}
      <style jsx global>{`
        @media (max-width: 900px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
          footer > div > div:last-child { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  );
}
