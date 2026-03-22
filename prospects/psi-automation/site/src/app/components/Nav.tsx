'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <Link href="/" className="nav-brand">
        <div className="nav-brand-mark">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>
        <div>
          <div className="nav-brand-name">PSI Automation</div>
          <div className="nav-brand-sub">Vane Air Motors</div>
        </div>
      </Link>

      <ul className="nav-links">
        <li><Link href="/products" className={`nav-link${isActive('/products') ? ' nav-link--active' : ''}`}>Products</Link></li>
        <li><Link href="/applications" className={`nav-link${isActive('/applications') ? ' nav-link--active' : ''}`}>Industries</Link></li>
        <li><Link href="/engineering" className={`nav-link${isActive('/engineering') ? ' nav-link--active' : ''}`}>Engineering</Link></li>
        <li><Link href="/custom-solutions" className={`nav-link${isActive('/custom-solutions') ? ' nav-link--active' : ''}`}>Custom Solutions</Link></li>
        <li><Link href="/resources" className={`nav-link${isActive('/resources') ? ' nav-link--active' : ''}`}>Resources</Link></li>
        <li><Link href="/about" className={`nav-link${isActive('/about') ? ' nav-link--active' : ''}`}>About</Link></li>
      </ul>

      <div className="nav-right">
        <a href="tel:8003923602" className="nav-phone">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          800-392-3602
        </a>
        <Link href="/contact" className="nav-cta">Talk to an Engineer</Link>
      </div>
    </nav>
  );
}
