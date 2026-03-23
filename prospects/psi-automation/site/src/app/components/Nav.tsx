'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/applications' },
  { label: 'Engineering', href: '/engineering' },
  { label: 'Custom Solutions', href: '/custom-solutions' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
];

const PHONE = '800-392-3602';
const PHONE_TEL = 'tel:8003923602';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        {/* BRAND / LOGO */}
        <Link href="/" className="nav-brand">
          <img
            src="/psi-logo.png"
            alt="PSI Automation — Vane Air Motors"
            style={{ height: '72px', width: 'auto', display: 'block' }}
          />
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="nav-links">
          {NAV_LINKS.map(l => (
            <li key={l.label}>
              <Link
                href={l.href}
                className={`nav-link${isActive(l.href) ? ' nav-link--active' : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* DESKTOP RIGHT */}
        <div className="nav-right">
          <a href={PHONE_TEL} className="nav-phone">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            {PHONE}
          </a>
          <Link href="/contact" className="nav-cta">Talk to an Engineer</Link>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          className={`psi-hamburger${menuOpen ? ' psi-hamburger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="psi-mobile-menu"
        >
          <span className="psi-hamburger-bar" />
          <span className="psi-hamburger-bar" />
          <span className="psi-hamburger-bar" />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        id="psi-mobile-menu"
        className={`psi-mobile-menu${menuOpen ? ' psi-mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Backdrop */}
        <div
          className="psi-mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div className="psi-mobile-panel">
          {/* Close button */}
          <button
            className="psi-mobile-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Brand inside panel */}
          <div className="psi-mobile-brand">
            <img
              src="/psi-logo.png"
              alt="PSI Automation"
              style={{ height: '44px', width: 'auto', filter: 'brightness(0) invert(1)' }}
            />
          </div>

          {/* Nav Links */}
          <nav className="psi-mobile-links">
            {NAV_LINKS.map((l, i) => (
              <Link
                key={l.label}
                href={l.href}
                className={`psi-mobile-link${isActive(l.href) ? ' psi-mobile-link--active' : ''}`}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="psi-mobile-ctas">
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => setMenuOpen(false)}
            >
              Talk to an Engineer
            </Link>
            <a
              href={PHONE_TEL}
              className="btn btn-ghost"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Call {PHONE}
            </a>
          </div>

          {/* Footer info */}
          <div className="psi-mobile-footer">
            <div>Vane Air Motors · ¼ to 70 HP</div>
            <div>Sandpoint, Idaho · ISO Compliance</div>
          </div>
        </div>
      </div>
    </>
  );
}
