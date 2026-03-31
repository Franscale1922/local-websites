'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

/* ── Exact FMS nav structure from fmsfranchise.com ── */
const NAV = [
  {
    label: 'Services',
    href: 'https://www.fmsfranchise.com/services/',
    cols: 2,
    groups: [
      {
        items: [
          { label: 'Franchise Development', href: '/services/franchise-development' },
          { label: 'Franchise Sales', href: '/services/franchise-sales' },
          { label: 'Management & Support', href: '/services/management-support' },
          { label: 'FMS Sourcing', href: 'https://www.fmssourcing.com/', external: true },
          { label: 'Franchise Funding Solutions', href: 'https://franchisefundingsolutions.com/', external: true },
          { label: 'Franchise Business Plan', href: '/services/franchise-business-plans' },
          { label: 'Efficiency Audit', href: '/services/efficiency-audit' },
          { label: 'Franchise Bookkeeping Support', href: '/services/franchise-bookkeeping-support' },
          { label: 'Franchise Territory Mapping', href: '/services/franchise-territory-mapping' },
          { label: 'Outsourced Franchise Support', href: '/outsourced-franchise-support-services' },
        ],
      },
      {
        heading: 'Industries',
        parentHref: '/industries',
        items: [
          { label: 'Health & Beauty', href: '/industries/health-beauty' },
          { label: 'Children', href: '/industries/children' },
          { label: 'Food & Beverage', href: '/industries/food-beverage' },
          { label: 'Retail', href: '/industries/retail' },
          { label: 'Real Estate', href: '/industries/real-estate' },
          { label: 'Services', href: '/industries/services' },
          { label: 'Automotive', href: '/industries/automotive' },
          { label: 'Home-based Franchises', href: '/industries/home-based-franchises' },
          { label: 'Education', href: '/industries/education' },
          { label: 'Healthcare', href: '/industries/healthcare' },
        ],
      },
    ],
  },
  {
    label: 'Learn',
    href: '/learn',
    cols: 1,
    groups: [
      {
        items: [
          { label: 'Webinar', href: '/webinars' },
          { label: 'What is Franchising?', href: '/learn/what-is-franchising' },
          { label: 'Why Franchising?', href: '/learn/why-franchising' },
          { label: 'Industry Facts', href: '/learn/industry-facts' },
          { label: 'How-to Guides', href: '/learn/how-to-guides' },
          { label: 'Resources', href: '/learn/resources' },
          { label: 'FAQs', href: '/learn/faqs' },
          { label: 'Franchise Your Business ROI Calculator', href: '/roi-calculator' },
          { label: 'Franchising Guidelines', href: '/learn/resources/franchising-guidelines' },
          { label: 'State Guidelines', href: '/learn/resources/state-guidelines' },
          { label: 'Franchise Feasibility Questionnaire', href: '/franchise-feasibility-questionnaire' },
        ],
      },
    ],
  },
  {
    label: 'FMS Digital',
    href: '/fms-digital',
    cols: 1,
    groups: [
      {
        items: [
          { label: 'Overview', href: '/fms-digital' },
          { label: 'Lead Generation', href: '/fms-digital/lead-generation' },
          { label: 'Branding & Marketing', href: '/fms-digital/franchise-branding-services' },
          { label: 'Website Design', href: '/fms-digital/website-design' },
          { label: 'Success Stories', href: '/fms-digital/franchise-success-stories' },
          { label: 'SEO and Digital Advertising', href: '/services/marketing-your-franchise/seo' },
          { label: 'Social Media', href: '/fms-digital/franchise-social-media-strategy' },
          { label: 'Tradeshows', href: '/fms-digital/franchise-tradeshows-lead-generation' },
          { label: 'Portfolio', href: '/our-clients/fmsdigital-portfolio' },
        ],
      },
    ],
  },
  {
    label: 'Clients',
    href: '/our-clients',
    cols: 1,
    groups: [
      {
        items: [
          { label: 'Our Clients', href: '/our-clients' },
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Testimonials', href: '/our-clients/testimonials' },
        ],
      },
    ],
  },
  {
    label: 'About',
    href: '/about-us',
    cols: 1,
    groups: [
      {
        items: [
          { label: 'Contact', href: '/about-us/contact' },
          { label: 'Company', href: '/about-us' },
          { label: 'Leadership', href: '/about-us/leadership' },
          { label: 'Our team', href: '/meet-the-team' },
          { label: 'Events', href: '/event' },
          { label: 'Blog', href: '/about-us/blog' },
          { label: 'News', href: '/news' },
          { label: 'Press & Media Coverage', href: '/insights-on-franchise-marketing-systems-press' },
        ],
      },
    ],
  },
  { label: 'Locations', href: '/locations', cols: 0, groups: [] },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openNav, setOpenNav] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMenuOpen(false); setOpenNav(null); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => { setMenuOpen(false); setOpenNav(null); }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenNav(label);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenNav(null), 120);
  };

  return (
    <>
      {/* ── Top bar ── */}
      <div style={{
        background: '#1a2c1e',
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1001,
        height: '38px', display: 'flex', alignItems: 'center',
        padding: '0 1.5rem', justifyContent: 'space-between',
        fontSize: '0.82rem',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', fontWeight: 500 }}>
          Turning Businesses Into Scalable Franchise Systems
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a href="tel:8006100292" style={{ color: '#eebc4a', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.82rem' }}>
            800-610-0292
          </a>
          <Link
            href="/franchise-your-business"
            style={{
              background: '#eebc4a', color: '#2d4135', fontFamily: 'Montserrat, sans-serif',
              fontWeight: 800, fontSize: '0.72rem', padding: '0.28rem 0.85rem',
              borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.06em',
            }}
          >
            Franchise My Business
          </Link>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          background: '#2d4135',
          position: 'fixed', top: '38px', left: 0, right: 0, zIndex: 1000,
          height: '75px', display: 'flex', alignItems: 'center',
          boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.3)' : 'none',
          transition: 'box-shadow 0.3s',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Image
              src="/fms-logo.svg"
              alt="FMS Franchise Marketing Systems"
              width={180}
              height={50}
              style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop nav links */}
          <div className="fms-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0', height: '100%' }}>
            {NAV.map((item) => (
              <div
                key={item.label}
                style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
                onMouseEnter={() => item.groups.length > 0 && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  style={{
                    padding: '0 0.9rem',
                    height: '100%', display: 'flex', alignItems: 'center', gap: '0.25rem',
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.84rem',
                    color: pathname?.startsWith(item.href) && item.href !== '/' ? '#eebc4a' : 'rgba(255,255,255,0.92)',
                    transition: 'color 0.2s',
                    whiteSpace: 'nowrap',
                    borderBottom: pathname?.startsWith(item.href) && item.href !== '/' ? '3px solid #eebc4a' : '3px solid transparent',
                  }}
                >
                  {item.label}
                  {item.groups.length > 0 && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true" style={{ opacity: 0.65, marginTop: '1px' }}>
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.groups.length > 0 && openNav === item.label && (
                  <div
                    style={{
                      position: 'absolute', top: '100%', left: 0,
                      background: '#2d4135', border: '1px solid rgba(255,255,255,0.1)',
                      borderTop: '2px solid #35a84a',
                      borderRadius: '0 0 8px 8px',
                      padding: '0.75rem 0',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
                      zIndex: 999, minWidth: '200px',
                      display: item.cols > 1 ? 'flex' : 'block',
                      gap: item.cols > 1 ? '0' : undefined,
                    }}
                  >
                    {item.groups.map((group, gi) => (
                      <div key={gi} style={{
                        minWidth: item.cols > 1 ? '220px' : '220px',
                        borderLeft: gi > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                        padding: '0.25rem 0',
                      }}>
                        {group.heading && (
                          <div style={{ padding: '0.35rem 1.1rem 0.35rem', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#eebc4a', fontFamily: 'Montserrat, sans-serif' }}>
                            {group.parentHref ? (
                              <Link href={group.parentHref} style={{ color: '#eebc4a' }}>{group.heading}</Link>
                            ) : group.heading}
                          </div>
                        )}
                        {group.items.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            target={'external' in sub && sub.external ? '_blank' : undefined}
                            rel={'external' in sub && sub.external ? 'noopener noreferrer' : undefined}
                            style={{
                              display: 'block', padding: '0.5rem 1.1rem',
                              fontSize: '0.84rem', color: 'rgba(255,255,255,0.82)',
                              fontFamily: 'Source Sans 3, sans-serif', fontWeight: 400,
                              transition: 'all 0.15s', lineHeight: 1.3,
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.background = 'rgba(53,168,74,0.15)';
                              (e.currentTarget as HTMLElement).style.color = '#fff';
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.background = '';
                              (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.82)';
                            }}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="fms-hamburger"
            style={{ display: 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px', width: '44px', height: '44px' }}
          >
            <span style={{ width: '24px', height: '2px', background: '#fff', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none', display: 'block' }} />
            <span style={{ width: '24px', height: '2px', background: '#fff', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1, display: 'block' }} />
            <span style={{ width: '24px', height: '2px', background: '#fff', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none', display: 'block' }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile backdrop ── */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
          zIndex: 998, opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.3s',
        }}
      />

      {/* ── Mobile panel ── */}
      <div style={{
        position: 'fixed', top: 0, right: 0,
        width: 'min(88vw, 340px)', height: '100vh',
        background: '#2d4135', zIndex: 999,
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        overflowY: 'auto', padding: '5rem 0 2rem',
        display: 'flex', flexDirection: 'column',
      }}>
        <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'rgba(255,255,255,0.7)', fontSize: '1.4rem', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}>✕</button>

        <div style={{ padding: '0 1.25rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '0.5rem' }}>
          <Image
            src="/fms-logo.svg"
            alt="FMS Franchise"
            width={140} height={40}
            style={{ height: '34px', width: 'auto' }}
            unoptimized
          />
        </div>

        <div style={{ flex: 1 }}>
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '0.9rem 1.25rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Home</Link>

          {NAV.map((item) => {
            const isOpen = openMobile === item.label;
            if (!item.groups.length) {
              return (
                <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '0.9rem 1.25rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>{item.label}</Link>
              );
            }
            return (
              <div key={item.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <button
                  onClick={() => setOpenMobile(isOpen ? null : item.label)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0.9rem 1.25rem', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: isOpen ? '#eebc4a' : '#fff' }}
                >
                  {item.label}
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden style={{ transition: 'transform 0.25s', transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                    <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                <div style={{ maxHeight: isOpen ? '600px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease', background: 'rgba(0,0,0,0.15)' }}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '0.6rem 1.25rem 0.6rem 1.75rem', fontSize: '0.85rem', color: '#eebc4a', fontWeight: 700, fontFamily: 'Montserrat, sans-serif' }}>
                    View All {item.label} →
                  </Link>
                  {item.groups.flatMap(g => g.items).map((sub) => (
                    <Link key={sub.href} href={sub.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '0.55rem 1.25rem 0.55rem 1.75rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', fontFamily: 'Source Sans 3, sans-serif' }}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ padding: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Link href="/franchise-your-business" className="btn btn-gold" style={{ justifyContent: 'center', textAlign: 'center' }} onClick={() => setMenuOpen(false)}>
            Franchise My Business
          </Link>
          <a href="tel:8006100292" style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '0.25rem' }}>📞 800-610-0292</a>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 1025px) { .fms-hamburger { display: none !important; } }
        @media (max-width: 1024px) { .fms-desktop-nav { display: none !important; } .fms-hamburger { display: flex !important; } }
        @media (max-width: 600px) { .fms-topbar-tagline { display: none !important; } }
      `}</style>
    </>
  );
}
