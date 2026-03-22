import type { Metadata } from 'next';
import SiteFooter from '../../components/SiteFooter';
import SiteNav from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Electrician in King County, WA | Premier Electrical Services',
  description: 'Licensed electricians serving Seattle, Kirkland, Redmond, Bothell, Kenmore, and select King County projects. Panel upgrades, EV charging, older home rewiring. Call (360) 421-5230.',
  alternates: { canonical: '/service-area/king-county' },
  openGraph: { images: [{ url: '/images/hero-service-area.jpg', width: 1200, height: 630, alt: 'Premier Electrical Services serving King County, WA' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function KingCountyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Service Area', item: '/service-area' },
          { '@type': 'ListItem', position: 3, name: 'King County', item: '/service-area/king-county' },
        ],
      }) }} />
      <SiteNav alwaysScrolled activePath="/service-area" />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/hero-service-area.jpg"
          alt="Pacific Northwest skyline and waterfront — King County service area"
          loading="eager"
          style={{ objectPosition: 'center 60%' }}
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/service-area" className="breadcrumb">← All Service Areas</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            King County, WA
          </div>
          <h1>Electrical Contractors Serving Select King County Projects</h1>
          <p className="county-hero-sub">
            Seattle, Kirkland, Redmond, Bothell, Kenmore — we take select projects throughout King County, particularly complex, specialty, or larger-scope work. Licensed, bonded, A+ BBB.
          </p>
          <div className="county-hero-ctas">
            <a href="/contact" className="btn btn-primary">Get a Free Estimate</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-body">
              <span className="eyebrow">King County Service</span>
              <h2>Specialty Electrical Work in the Greater Seattle Area.</h2>
              <p className="service-intro">
                Premier Electrical Services takes select projects throughout King County — primarily complex, specialty work where our depth of experience makes the difference. We&apos;re based in Mount Vernon and travel to King County for the right jobs, particularly those involving historic homes, significant panel or service upgrades, or commercial electrical buildouts.
              </p>
              <p className="service-intro">
                King County has an enormous inventory of mid-century and older homes — particularly in neighborhoods like Ballard, Fremont, Capitol Hill, and the Eastside communities — where knob-and-tube and early-generation aluminum wiring are common. This is our specialty, and it&apos;s work many local electricians are reluctant to take on.
              </p>
              <p className="service-intro">
                If you&apos;re in King County with a unique electrical project, call us. We&apos;ll tell you honestly whether it&apos;s something we can help with.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>Areas We Serve in King County</h3>
              <ul className="included-list">
                {[
                  'Seattle (select projects)',
                  'Kirkland',
                  'Redmond',
                  'Bothell',
                  'Kenmore',
                  'Bellevue (select projects)',
                  'Shoreline',
                  'Woodinville',
                  'Duvall',
                  'Carnation',
                ].map(b => (
                  <li key={b}><span className="included-check">✓</span>{b}</li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-primary" style={{ marginTop: '24px', width: '100%', textAlign: 'center', display: 'block' }}>
                Get a Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <span className="eyebrow">King County Specialties</span>
          <h2>What We Do Best in the Seattle Area</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { svg: <svg key="h" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><circle cx="12" cy="13" r="3"/><path d="M12 10v-2"/></svg>, title: 'Historic & Older Home Rewiring', desc: 'Seattle\'s craftsman neighborhoods — Ballard, Fremont, Capitol Hill, Queen Anne — have a high concentration of pre-1960 homes with original wiring. Knob-and-tube replacement and aluminum wiring correction are our specialties, and the work many electricians pass on.' },
              { svg: <svg key="p" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="7" y1="6" x2="7" y2="18"/><line x1="12" y1="6" x2="12" y2="18"/><line x1="17" y1="6" x2="17" y2="18"/><line x1="2" y1="11" x2="22" y2="11"/><circle cx="7" cy="8" r="1" fill="currentColor"/><circle cx="12" cy="14" r="1" fill="currentColor"/><circle cx="17" cy="8" r="1" fill="currentColor"/></svg>, title: 'Panel Upgrades', desc: 'From Eastside homes in Kirkland and Redmond to older Seattle properties, we handle panel upgrades of every scale — correctly permitted, utility-coordinated, and inspector-approved.' },
              { svg: <svg key="e" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="15" height="13" rx="2"/><path d="M16 10h2a2 2 0 012 2v3a2 2 0 01-2 2h-2"/><path d="M5 6V4"/><path d="M9 6V4"/><path d="M11 13l-3 5h4l-3 5"/></svg>, title: 'EV Charging', desc: 'King County has one of the highest rates of EV adoption in the state. We install Level 2 home chargers on Eastside properties regularly — permitted, clean, and done right the first time.' },
              { svg: <svg key="c" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>, title: 'Complex & Specialty Projects', desc: 'Got a project other electricians have turned down? That\'s often where we\'re the right call. Complex properties, difficult access, older wiring systems, large commercial scope — these are the jobs we do best.' },
            ].map(w => (
              <div key={w.title} className="why-card">
                <div className="why-number">{w.svg}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="trust-strip">
        {[
          { svg: <svg key="a" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4a2 2 0 01-2-2V5h4"/><path d="M18 9h2a2 2 0 002-2V5h-4"/><path d="M6 5h12v6a6 6 0 01-12 0V5z"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>, label: '3× Best of the Best', sub: 'Skagit Valley — 2023 · 2024 · 2025' },
          { svg: <svg key="b" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>, label: 'A+ BBB Rating', sub: 'Licensed, Bonded & Insured' },
          { svg: <svg key="c" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, label: '60 Yrs Combined Experience', sub: 'Complex & Specialty Work' },
          { svg: <svg key="d" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>, label: 'Call for Availability', sub: 'Select King County projects' },
        ].map(t => (
          <div key={t.label} className="trust-strip-item">
            <div className="trust-strip-icon">{t.svg}</div>
            <div className="trust-strip-text"><span>{t.label}</span>{t.sub}</div>
          </div>
        ))}
      </div>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>King County Project? Let&apos;s Talk.</h2>
            <p>Call us to discuss your project. We&apos;ll tell you straight whether we&apos;re the right fit.</p>
          </div>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-primary">Get a Free Estimate</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
