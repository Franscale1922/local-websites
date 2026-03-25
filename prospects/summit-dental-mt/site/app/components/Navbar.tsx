'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/veterans-military', label: 'Veterans & Military' },
  { href: '/new-patients', label: 'New Patients' },
  { href: '/smile-gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className="site-nav" role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo" aria-label="Summit Dental Group — Home">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="40" height="40" rx="8" fill="#1B3A5C"/>
              <path d="M8 30 L14 14 L20 22 L26 14 L32 30 Z" fill="none" stroke="#2AAFCA" strokeWidth="2.5" strokeLinejoin="round"/>
              <path d="M14 30 Q17 24 20 26 Q23 28 26 30" fill="none" stroke="#2AAFCA" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="20" cy="27" r="1.5" fill="#C87941"/>
            </svg>
            <div className="nav-logo-text">
              <span className="nav-logo-main">Summit Dental</span>
              <span className="nav-logo-sub">Group · Kalispell, MT</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="nav-links" role="list">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="nav-cta">
            <a
              href="tel:+14067524545"
              className="btn btn-secondary btn-sm"
              aria-label="Call Summit Dental Group"
            >
              📞 (406) 752-4545
            </a>
            <Link href="/contact#appointment" className="btn btn-primary btn-sm">
              Book Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Backdrop */}
      <div
        className={`nav-backdrop${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        style={{ display: 'block' }}
      />

      {/* Mobile Nav Panel */}
      <div
        id="mobile-nav-panel"
        className={`nav-panel${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="nav-panel-header">
          <span className="nav-panel-logo">Summit Dental Group</span>
          <button
            className="nav-panel-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        <ul className="nav-panel-links" role="list">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-panel-ctas">
          <a
            href="tel:+14067524545"
            className="btn btn-white"
            aria-label="Call Summit Dental Group"
          >
            📞 Call (406) 752-4545
          </a>
          <Link href="/contact#appointment" className="btn btn-primary">
            📅 Book Appointment
          </Link>
        </div>

        <div className="nav-panel-footer">
          <p>203 Business Center Loop, Suite C</p>
          <p>Kalispell, MT 59901</p>
          <p style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.4)' }}>
            Veteran-Owned · TRICARE Accepted
          </p>
        </div>
      </div>
    </>
  );
}
