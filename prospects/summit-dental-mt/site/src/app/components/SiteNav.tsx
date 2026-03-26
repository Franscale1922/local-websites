'use client';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Veterans', href: '/veterans-military' },
  { label: 'New Patients', href: '/new-patients' },
  { label: 'FAQ', href: '/faq' },
];

const PHONE = '(406) 752-4545';
const PHONE_TEL = 'tel:+14067524545';

interface SiteNavProps {
  activePath?: string;
  alwaysScrolled?: boolean;
}

export default function SiteNav({ activePath, alwaysScrolled = false }: SiteNavProps) {
  const [scrolled, setScrolled] = useState(alwaysScrolled);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (alwaysScrolled) return;
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, [alwaysScrolled]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled || alwaysScrolled ? 'nav--scrolled' : ''}`}>
        {/* LOGO */}
        <a href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Summit Dental Group, Kalispell, Montana"
            style={{ height: '44px', width: 'auto', display: 'block' }}
          />
        </a>

        {/* DESKTOP LINKS */}
        <ul className="nav-links">
          {NAV_LINKS.map(l => (
            <li key={l.label}>
              <a href={l.href} className={activePath === l.href ? 'nav-link--active' : ''}>
                {l.label}
              </a>
            </li>
          ))}
          <li><a href="/contact" className="nav-cta">Book Appointment</a></li>
        </ul>

        {/* MOBILE: Call Now */}
        <a
          href={PHONE_TEL}
          className="btn btn-ghost-copper nav-mobile-cta"
          style={{ fontSize: '0.8rem', padding: '8px 14px' }}
        >
          Call Now
        </a>

        {/* HAMBURGER */}
        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
        <div className="mobile-menu-panel">
          <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close navigation menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="mobile-menu-logo">
            <div className="nav-logo-text">
              <span className="nav-logo-name">Summit Dental Group</span>
              <span className="nav-logo-tagline">Kalispell, Montana</span>
            </div>
          </div>
          <nav className="mobile-menu-links">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className={`mobile-menu-link${activePath === l.href ? ' mobile-menu-link--active' : ''}`}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mobile-menu-ctas">
            <a href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMenuOpen(false)}>
              Book Appointment
            </a>
            <a href={PHONE_TEL} className="btn btn-ghost-light" style={{ width: '100%', justifyContent: 'center' }}>
              Call {PHONE}
            </a>
          </div>
          <div className="mobile-menu-footer">
            <div>Veteran-Owned · TRICARE Accepted</div>
            <div>⭐ 4.8 / 5 | 469 Google Reviews</div>
            <div style={{ marginTop: '6px', opacity: 0.5, fontSize: '0.72rem' }}>203 Business Center Loop, Suite C · Kalispell, MT</div>
          </div>
        </div>
      </div>
    </>
  );
}
