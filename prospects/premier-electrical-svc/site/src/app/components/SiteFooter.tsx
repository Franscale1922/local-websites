const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/premierelectricalsvc',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/premierelectricalsvc',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4.5"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Yelp',
    href: 'https://www.yelp.com/biz/premier-electrical-services-mount-vernon',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.16 12.594l-4.995 1.433c-.96.275-1.755-.675-1.23-1.514l2.724-4.467c.526-.862 1.73-.602 1.886.392l.928 5.223a.64.64 0 0 1-.313.933zM12.16 3.103l-.88 5.164c-.169.99.952 1.621 1.693.951l3.712-3.368c.741-.671.378-1.905-.587-2.063l-3.08-.5a.64.64 0 0 0-.858.816zM3.44 15.315l4.503-2.23c.865-.43.79-1.689-.12-2.01L2.96 9.572c-.91-.32-1.768.555-1.434 1.46l1.07 2.886a.64.64 0 0 0 .844.397zm2.39 5.45l3.814-3.402c.734-.654.397-1.878-.572-2.056l-5.15-.955c-1.002-.186-1.72.889-1.18 1.745l1.922 2.98a.64.64 0 0 0 1.166-.312zm7.304-.492l-.616-5.23c-.118-1.004-1.32-1.355-1.93-.55l-3.161 4.152c-.61.803-.046 1.947.944 1.972l4.005.103a.64.64 0 0 0 .758-.447z"/>
      </svg>
    ),
  },
  {
    label: 'BBB',
    href: 'https://www.bbb.org/us/wa/mount-vernon/profile/electrical-contractors/premier-electrical-services-inc-1296-1000135427',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v2h-2v-2zm0 4h2v6h-2v-6z"/>
      </svg>
    ),
  },
];

interface SiteFooterProps {
  serviceLinks?: { href: string; label: string }[];
  tagline?: string;
}

const DEFAULT_SERVICES = [
  { href: '/services/panel-upgrades', label: 'Panel Upgrades' },
  { href: '/services/ev-charging', label: 'EV Charging' },
  { href: '/services/generator-installation', label: 'Generators' },
  { href: '/services/historic-home-rewiring', label: 'Historic Home Rewiring' },
  { href: '/services/residential-wiring', label: 'Residential Wiring' },
  { href: '/services/commercial-wiring', label: 'Commercial Wiring' },
];

export default function SiteFooter({
  serviceLinks = DEFAULT_SERVICES,
  tagline = 'Licensed, bonded electricians serving Skagit, Whatcom, San Juan, Island, King, and Snohomish counties. A+ BBB Rating. Lic. PREMIES821LL.',
}: SiteFooterProps) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-brand-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Premier Electrical Services" className="footer-logo-img" />
          </div>
          <p className="footer-tagline">{tagline}</p>
          <div className="footer-socials">
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={s.label}
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-col"><h4>Services</h4><ul>
          {serviceLinks.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul></div>
        <div className="footer-col"><h4>Contact</h4><ul>
          <li><a href={PHONE_TEL}>{PHONE}</a></li>
          <li><a href="/contact">Free Estimate</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/recognition">Recognition</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/service-area">Service Area</a></li>
        </ul></div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Premier Electrical Services · All rights reserved</span>
        <span><a href={PHONE_TEL}>{PHONE}</a> · Lic. PREMIES821LL</span>
      </div>
    </footer>
  );
}
