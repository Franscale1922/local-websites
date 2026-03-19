/**
 * SHARED NAV COMPONENT
 * Used in layout.tsx to provide consistent multi-page navigation.
 * Replace NAV_LINKS and business info for each prospect.
 */
'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Service Area', href: '/service-area' },
  { label: 'FAQ', href: '/faq' },
];

const BUSINESS_NAME = '[Business Name]';
const PHONE = '(XXX) XXX-XXXX';
const PHONE_TEL = 'tel:+1XXXXXXXXXX';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="/" className="nav-logo" aria-label={`${BUSINESS_NAME} — Home`}>
        <div className="nav-logo-icon">⚡</div>
        {BUSINESS_NAME}
      </a>
      <ul className="nav-links">
        {NAV_LINKS.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className={pathname === l.href ? 'nav-link--active' : ''}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href="/contact" className="nav-cta">Get a Free Estimate</a>
        </li>
      </ul>
      <a href={PHONE_TEL} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>
        Call Now
      </a>
    </nav>
  );
}
