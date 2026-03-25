const SITE = {
  name: 'Summit Dental Group',
  phone: '(406) 752-4545',
  phoneTel: 'tel:+14067524545',
  address: '203 Business Center Loop, Suite C, Kalispell, MT 59901',
  year: new Date().getFullYear(),
};

const FOOTER_NAV = [
  {
    heading: 'Services',
    links: [
      { label: 'Dental Implants', href: '/services/dental-implants' },
      { label: 'Emergency Dentistry', href: '/services/emergency-dentistry' },
      { label: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
      { label: 'Sedation & Comfort', href: '/services/sedation-dentistry' },
      { label: 'Teeth Whitening', href: '/services/teeth-whitening' },
      { label: 'Crowns & Bridges', href: '/services/crowns-bridges' },
    ],
  },
  {
    heading: 'Practice',
    links: [
      { label: 'About Dr. Vanzant', href: '/about' },
      { label: 'Veterans & Military', href: '/veterans-military' },
      { label: 'New Patients', href: '/new-patients' },
      { label: 'Before & After Gallery', href: '/smile-gallery' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Contact',
    links: [],
    custom: true,
  },
];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand column */}
        <div>
          <div className="footer-brand-name">Summit Dental Group</div>
          <p className="footer-tagline">
            Veteran-owned dental practice serving Kalispell and the Flathead Valley.
            Accepting TRICARE, ADDP, and most major insurance plans.
          </p>
          <div className="footer-veteran-badge">
            ★ Veteran-Owned & Operated
          </div>
          <div className="footer-socials" style={{ marginTop: '14px' }}>
            {/* Facebook */}
            <a href="https://www.facebook.com/summitdentalmt" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Summit Dental on Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            {/* Google */}
            <a href="https://g.page/summitdentalmt" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Summit Dental on Google">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {FOOTER_NAV[0].links.map(l => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Practice */}
        <div className="footer-col">
          <h4>Practice</h4>
          <ul>
            {FOOTER_NAV[1].links.map(l => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li style={{ lineHeight: 1.5, marginBottom: '12px' }}>
              <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: '2px' }}>Phone</span>
              <a href={SITE.phoneTel} style={{ color: '#e8a96a', fontWeight: 700 }}>{SITE.phone}</a>
            </li>
            <li style={{ lineHeight: 1.5, marginBottom: '12px' }}>
              <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: '2px' }}>Address</span>
              <span style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.7)' }}>203 Business Center Loop, Suite C<br />Kalispell, MT 59901</span>
            </li>
            <li style={{ lineHeight: 1.5 }}>
              <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: '2px' }}>Hours</span>
              <span style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.7)' }}>Tue – Fri: 8:00 AM – 5:00 PM<br />Mon / Sat / Sun: Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {SITE.year} Summit Dental Group. All rights reserved.</span>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}>Serving Kalispell, Whitefish, Columbia Falls & the Flathead Valley</span>
      </div>
    </footer>
  );
}
