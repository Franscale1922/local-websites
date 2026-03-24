'use client';
import Link from 'next/link';


const FOOTER_SERVICES = [
  { label: 'Franchise Development', href: '/services/franchise-development' },
  { label: 'Franchise Sales', href: '/services/franchise-sales' },
  { label: 'Management & Support', href: '/services/management-support' },
  { label: 'Franchise Business Plan', href: '/services/franchise-business-plan' },
  { label: 'Efficiency Audit', href: '/services/efficiency-audit' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
];

const FOOTER_INDUSTRIES = [
  { label: 'Food & Beverage', href: '/industries/food-beverage' },
  { label: 'Health & Beauty', href: '/industries/health-beauty' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Home Services', href: '/industries/home-services' },
  { label: 'Retail', href: '/industries/retail' },
  { label: 'Education', href: '/industries/education' },
];

const FOOTER_COMPANY = [
  { label: 'About FMS', href: '/about' },
  { label: 'Meet the Team', href: '/team' },
  { label: 'Our Clients', href: '/our-clients' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
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

export default function Footer() {
  return (
    <footer style={{ background: '#0d2410', color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif' }}>
      {/* Main footer grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2.5rem 2rem', marginBottom: '3rem' }}>

          {/* Brand column */}
          <div className="footer-brand" style={{ gridColumn: 'span 2' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '2rem', color: '#3cb85e' }}>FMS</span>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>Franchise Marketing Systems</div>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, maxWidth: '280px', marginBottom: '1.25rem' }}>
              Turning Businesses Into Scalable Franchise Systems since 2009. 900+ brands franchised across 7 global offices.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                { label: 'Twitter/X', href: 'https://twitter.com/FranchiseMkting', icon: '𝕏' },
                { label: 'Facebook', href: 'https://www.facebook.com/FranchiseMarketingSystems', icon: 'f' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/company/fmsfranchise/', icon: 'in' },
                { label: 'YouTube', href: 'https://www.youtube.com/@franchisemarketingsystems3808', icon: '▶' },
                { label: 'Instagram', href: 'https://www.instagram.com/franchisemarketingsystems', icon: '◎' },
              ].map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: 700, transition: 'all 0.2s' }}>
                  {s.icon}
                </a>
              ))}
            </div>
            <div style={{ fontSize: '0.88rem' }}>
              <a href="tel:8006100292" style={{ display: 'block', color: '#e8b736', fontWeight: 700, marginBottom: '0.25rem' }}>📞 800-610-0292</a>
              <a href="mailto:info@FranchiseMarketingSystems.com" style={{ color: 'rgba(255,255,255,0.6)' }}>info@FranchiseMarketingSystems.com</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {FOOTER_SERVICES.map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#3cb85e'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Industries</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {FOOTER_INDUSTRIES.map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#3cb85e'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {FOOTER_COMPANY.map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#3cb85e'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', marginBottom: '2rem' }}>
          <h4 style={{ color: '#e8b736', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Our Global Offices</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
            {OFFICES.map(o => (
              <div key={o.city}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: '0.2rem' }}>{o.city}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{o.address}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mobile-stack" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} Franchise Marketing Systems LLC. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>Terms</Link>
            <Link href="/sitemap.xml" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
