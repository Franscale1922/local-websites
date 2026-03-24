'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  {
    label: 'How We Help',
    href: '/services',
    dropdown: [
      { label: 'Franchise Development', href: '/services/franchise-development' },
      { label: 'Franchise Sales', href: '/services/franchise-sales' },
      { label: 'Management & Support', href: '/services/management-support' },
      { label: 'Franchise Business Plan', href: '/services/franchise-business-plan' },
      { label: 'Efficiency Audit', href: '/services/efficiency-audit' },
      { label: 'Digital Marketing', href: '/services/digital-marketing',
        sub: [
          { label: 'Lead Generation', href: '/services/digital-marketing/lead-generation' },
          { label: 'Branding & Marketing', href: '/services/digital-marketing/branding-marketing' },
        ]
      },
    ],
  },
  {
    label: "Industries We've Franchised",
    href: '/industries',
    dropdown: [
      { label: 'Food & Beverage', href: '/industries/food-beverage' },
      { label: 'Health & Beauty', href: '/industries/health-beauty' },
      { label: 'Children', href: '/industries/children' },
      { label: 'Retail', href: '/industries/retail' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Home Services', href: '/industries/home-services' },
      { label: 'Education', href: '/industries/education' },
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Home-Based', href: '/industries/home-based' },
    ],
  },
  {
    label: 'Resources',
    href: '/learn',
    dropdown: [
      { label: 'What is Franchising?', href: '/learn/what-is-franchising' },
      { label: 'Why Franchise?', href: '/learn/why-franchise' },
      { label: 'How to Franchise Your Business', href: '/learn/how-to-franchise-your-business' },
      { label: 'Franchise Industry Facts', href: '/learn/franchise-industry-facts' },
      { label: 'State Guidelines', href: '/learn/state-guidelines' },
      { label: 'Franchise FAQs', href: '/learn/faq' },
    ],
  },
  {
    label: 'Success Stories',
    href: '/our-clients',
    dropdown: [
      { label: 'Client Portfolio', href: '/our-clients' },
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    dropdown: [
      { label: 'About FMS', href: '/about' },
      { label: 'Meet the Team', href: '/team' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  { label: 'Blog', href: '/blog' },
];

interface SiteNavProps {
  alwaysScrolled?: boolean;
}

export default function SiteNav({ alwaysScrolled = false }: SiteNavProps) {
  const [scrolled, setScrolled] = useState(alwaysScrolled);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (alwaysScrolled) return;
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll(); // set correct initial state immediately
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysScrolled]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setMenuOpen(false); setOpenDropdown(null); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => { setMenuOpen(false); setOpenDropdown(null); }, [pathname]);

  // Always dark bg — avoids white-on-white issues when nav is over page content
  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
    background: '#1a3d20',
    boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.25)' : 'none',
  };

  return (
    <>
      {/* Top info bar */}
      <div style={{ background: '#0d2410', padding: '0.4rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1001 }}>
        <span className="top-bar-tagline">Turning Businesses Into Scalable Franchise Systems</span>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="tel:8006100292" style={{ color: '#e8b736', fontWeight: 700 }}>800-610-0292</a>
          <a href="mailto:info@FranchiseMarketingSystems.com" className="top-bar-email" style={{ color: 'rgba(255,255,255,0.7)' }}>info@FranchiseMarketingSystems.com</a>
        </div>
      </div>

      <nav style={{ ...navStyle, top: '30px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.5rem', color: '#3cb85e', letterSpacing: '-0.02em' }}>FMS</span>
            <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Franchise</span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  style={{
                    padding: '0.5rem 0.85rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: pathname === item.href ? '#e8b736' : 'rgba(255,255,255,0.9)',
                    display: 'flex', alignItems: 'center', gap: '0.25rem',
                    transition: 'color 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.label}
                  {item.dropdown && <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>▾</span>}
                </Link>
                {item.dropdown && openDropdown === item.label && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: '#1a3d20',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    padding: '0.5rem',
                    minWidth: '220px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    zIndex: 999,
                  }}>
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        style={{
                          display: 'block',
                          padding: '0.6rem 1rem',
                          fontSize: '0.85rem',
                          color: 'rgba(255,255,255,0.85)',
                          borderRadius: '6px',
                          fontWeight: 500,
                          transition: 'all 0.15s',
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(60,184,94,0.15)'; (e.currentTarget as HTMLElement).style.color = '#3cb85e'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = ''; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'; }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="desktop-nav">
            <Link href="/feasibility-questionnaire" className="btn btn-gold btn-sm">
              Is My Business Ready?
            </Link>
            <Link href="/contact" className="btn btn-outline-white btn-sm">
              Talk to a Consultant
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="hamburger-btn"
            style={{ width: '44px', height: '44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px', background: 'transparent', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
          >
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile panel backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
          zIndex: 998, opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.3s',
        }}
      />

      {/* Mobile panel */}
      <div style={{
        position: 'fixed',
        top: 0, right: 0,
        width: 'min(88vw, 360px)',
        height: '100vh',
        background: '#1a3d20',
        zIndex: 999,
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        overflowY: 'auto',
        padding: '5rem 0 2rem',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Close button */}
        <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: 'rgba(255,255,255,0.7)', fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>

        {/* Logo in panel */}
        <div style={{ padding: '0 1.5rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.75rem', color: '#3cb85e' }}>FMS</span>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: '0.1rem' }}>Franchise Marketing Systems</div>
        </div>

        {/* Mobile links */}
        <div style={{ padding: '1rem 0', flex: 1 }}>
          {NAV_ITEMS.map((item, i) => (
            <div key={item.label}>
              <Link
                href={item.href}
                style={{
                  display: 'block',
                  padding: '0.9rem 1.5rem',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: pathname === item.href ? '#e8b736' : '#fff',
                  fontFamily: 'Outfit, sans-serif',
                  transition: 'color 0.2s',
                  transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
                }}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <div style={{ paddingLeft: '1rem', background: 'rgba(0,0,0,0.15)' }}>
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      style={{ display: 'block', padding: '0.6rem 1.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}
                    >
                      → {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Panel CTAs */}
        <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Link href="/feasibility-questionnaire" className="btn btn-gold" style={{ justifyContent: 'center', width: '100%' }}>
            Is My Business Ready?
          </Link>
          <Link href="/contact" className="btn btn-outline-white" style={{ justifyContent: 'center', width: '100%' }}>
            Talk to a Consultant
          </Link>
          <a href="tel:8006100292" style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            📞 800-610-0292
          </a>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 1025px) {
          .hamburger-btn { display: none !important; }
        }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
        }
        @media (max-width: 600px) {
          .top-bar-email { display: none !important; }
          .top-bar-tagline { display: none !important; }
        }
      `}</style>
    </>
  );
}
