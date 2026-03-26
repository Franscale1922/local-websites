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
      { label: 'Service Area', href: '/service-area' },
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Summit Dental Group, Kalispell, Montana"
            style={{ height: '52px', width: 'auto', display: 'block', marginBottom: '14px', filter: 'brightness(0) invert(1)' }}
          />
          <p className="footer-tagline">
            Veteran-owned dental practice serving Kalispell and the Flathead Valley.
            Accepting TRICARE, ADDP, and most major insurance plans.
          </p>
          <div className="footer-veteran-badge">
            ★ Veteran-Owned & Operated
          </div>
          <div className="footer-socials" style={{ marginTop: '14px' }}>
            {/* Facebook */}
            <a href="https://www.facebook.com/summitdentalgroupmt/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Summit Dental on Facebook">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            {/* Google */}
            <a href="https://g.page/r/CQ2VquKyWsQsEBM/review" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Summit Dental on Google Reviews">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/summitdentalgroupmt/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Summit Dental on Instagram">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com/channel/UC3VM6TKW9jtcZGuPyxv_bBw/featured" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Summit Dental on YouTube">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
            </a>
            {/* Yelp */}
            <a href="https://www.yelp.com/biz/summit-dental-group-kalispell" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Summit Dental on Yelp">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12.27 13.2l-2.43.88c-.48.18-.84-.36-.57-.8l1.33-2.13c.27-.44.9-.33 1.01.16l.23 1.08c.1.47-.18.65-.57.81zM10.5 9.4l-.43-3.77c-.05-.5.49-.82.9-.55l3.18 2.05c.41.26.32.88-.14 1.01l-2.75.77c-.47.13-.72-.03-.76-.51zM9.53 14.37l-3.5 1.71c-.46.22-.93-.22-.77-.71l.96-3.05c.16-.49.76-.59 1.07-.18l2.54 3.05c.13.15.1.36-.3.18zM14.47 9.4l2.55-2.85c.33-.37.86-.2.97.27l.63 3.12c.11.47-.37.83-.81.64l-3.18-1.27c-.44-.17-.49-.55.16-.91zM15.5 14.1l2.97.5c.49.08.69.65.38 1.02l-2.02 2.36c-.31.37-.87.2-.97-.26l-.61-3c-.1-.47.27-.69.25-.62zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
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
              <a href={SITE.phoneTel} style={{ color: 'var(--color-accent)', fontWeight: 700 }}>{SITE.phone}</a>
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
