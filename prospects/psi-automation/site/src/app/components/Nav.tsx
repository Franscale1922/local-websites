'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motors } from '../../data/motors';

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
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery]           = useState('');
  const pathname  = usePathname();
  const router    = useRouter();
  const inputRef  = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  /* ── scroll ── */
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  /* ── body lock when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── ESC closes both overlays ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMenuOpen(false); setSearchOpen(false); setQuery(''); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  /* ── focus input when search opens ── */
  useEffect(() => {
    if (searchOpen) setTimeout(() => inputRef.current?.focus(), 60);
  }, [searchOpen]);

  /* ── click outside search closes it ── */
  useEffect(() => {
    if (!searchOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false); setQuery('');
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [searchOpen]);

  /* ── live results ── */
  const results = useMemo(() => {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase().replace(/[-\s]/g, '');
    return motors
      .filter(m => m.model.toLowerCase().replace(/[-\s]/g, '').includes(q))
      .slice(0, 8);
  }, [query]);

  const handleResultClick = (slug: string) => {
    router.push(`/products/${slug}`);
    setSearchOpen(false);
    setQuery('');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length === 1) {
      handleResultClick(results[0].slug);
    } else if (query) {
      router.push(`/products?q=${encodeURIComponent(query)}`);
      setSearchOpen(false); setQuery('');
    }
  };

  return (
    <>
      <nav role="navigation" aria-label="Main navigation" className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
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
          {/* ── SEARCH TRIGGER ── */}
          <button
            className="nav-search-btn"
            onClick={() => setSearchOpen(v => !v)}
            aria-label="Search motor models"
            aria-expanded={searchOpen}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <span>Find a motor</span>
          </button>

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

      {/* ── SEARCH DROPDOWN ── */}
      {searchOpen && (
        <div className="nav-search-overlay" ref={searchRef}>
          <form onSubmit={handleSearchSubmit} className="nav-search-form">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0, color:'var(--steel)'}}>
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Type a model number — DVA, DV6-118, DV10..."
              className="nav-search-input"
              autoComplete="off"
              spellCheck={false}
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} className="nav-search-clear" aria-label="Clear">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            )}
          </form>

          {/* Results */}
          {results.length > 0 && (
            <ul className="nav-search-results">
              {results.map(m => (
                <li key={m.slug}>
                  <button
                    type="button"
                    className="nav-search-result"
                    onClick={() => handleResultClick(m.slug)}
                  >
                    <span className={`series-badge series-badge--${m.series.toLowerCase()}`} style={{fontSize:'0.65rem', padding:'2px 7px'}}>{m.series}</span>
                    <span className="nav-search-result-model">{m.model}</span>
                    <span className="nav-search-result-hp">
                      {typeof m.hp === 'number' ? `${m.hp} HP` : `${m.hp.low}–${m.hp.high} HP`}
                      {' · '}
                      {m.torque.psi80.maxSpeed > 0 ? `${m.torque.psi80.maxSpeed.toLocaleString()} RPM max` : ''}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{marginLeft:'auto', flexShrink:0, color:'var(--steel-light)'}}>
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                </li>
              ))}
              {query.length >= 2 && (
                <li>
                  <button
                    type="button"
                    className="nav-search-result nav-search-all"
                    onClick={() => { router.push(`/products?q=${encodeURIComponent(query)}`); setSearchOpen(false); setQuery(''); }}
                  >
                    View all results for &ldquo;{query}&rdquo; →
                  </button>
                </li>
              )}
            </ul>
          )}

          {query.length >= 2 && results.length === 0 && (
            <div className="nav-search-empty">
              <p>No models match &ldquo;{query}&rdquo;. <Link href="/contact" onClick={() => { setSearchOpen(false); setQuery(''); }} style={{color:'var(--crimson)', fontWeight:600}}>Ask an engineer</Link> — we may have a custom option.</p>
            </div>
          )}

          {!query && (
            <div className="nav-search-hint">
              <span>Try: <button type="button" onClick={() => setQuery('DV6')} className="nav-search-suggest">DV6</button></span>
              <span><button type="button" onClick={() => setQuery('DVA')} className="nav-search-suggest">DVA</button></span>
              <span><button type="button" onClick={() => setQuery('DV10')} className="nav-search-suggest">DV10</button></span>
              <span><button type="button" onClick={() => setQuery('CDV')} className="nav-search-suggest">CDV</button></span>
            </div>
          )}
        </div>
      )}

      {/* Search backdrop */}
      {searchOpen && (
        <div
          style={{ position:'fixed', inset:0, zIndex:198, background:'rgba(10,15,30,0.4)', backdropFilter:'blur(2px)' }}
          onClick={() => { setSearchOpen(false); setQuery(''); }}
          aria-hidden="true"
        />
      )}

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
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
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

          {/* Mobile search */}
          <form
            onSubmit={e => { e.preventDefault(); if (query) { router.push(`/products?q=${encodeURIComponent(query)}`); setMenuOpen(false); setQuery(''); } }}
            style={{ margin: '0 0 8px', position: 'relative' }}
          >
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search model number..."
              style={{
                width: '100%', padding: '10px 14px 10px 38px',
                border: '1.5px solid rgba(255,255,255,0.2)',
                borderRadius: '8px', background: 'rgba(255,255,255,0.08)',
                color: 'white', fontSize: '0.9rem', outline: 'none',
              }}
            />
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.2" strokeLinecap="round" style={{position:'absolute', left:'12px', top:'50%', transform:'translateY(-50%)'}}>
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </form>

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
