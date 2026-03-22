import type { Metadata } from 'next';
import SiteFooter from '../../components/SiteFooter';
import SiteNav from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Electrician on Whidbey & Camano Island | Premier Electrical Services',
  description: 'Licensed electricians serving Oak Harbor, Camano Island, Coupeville, Langley, and all of Island County. Panel upgrades, EV charging, older home wiring. Call (360) 421-5230.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function IslandCountyPage() {
  return (
    <main>
      <SiteNav alwaysScrolled activePath="/service-area" />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/hero-island.jpg"
          alt="Deception Pass Bridge spanning the gorge between Whidbey Island and the mainland"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/service-area" className="breadcrumb">← All Service Areas</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Island County, WA
          </div>
          <h1>Electrical Contractors Serving Whidbey &amp; Camano Island</h1>
          <p className="county-hero-sub">
            Oak Harbor, Camano Island, Coupeville, Langley, Freeland. We serve Island County homeowners and businesses — licensed, bonded, A+ BBB.
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
              <span className="eyebrow">Island County Service</span>
              <h2>Island Living Has Different Electrical Challenges. We Know Them.</h2>
              <p className="service-intro">
                Homes on Whidbey and Camano Island often face challenges that mainland properties don&apos;t — aging housing stock, older electrical infrastructure, well pumps that make generator hookups critical, and extended outages when storms roll through. We serve Island County regularly and understand the specific needs of island properties.
              </p>
              <p className="service-intro">
                From Oak Harbor to Coupeville to Langley, we handle panel upgrades, historic home rewires, EV charger installations, and generator hookups. If you&apos;re on a well, a generator transfer switch is especially important — and we install those correctly.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>Cities We Serve</h3>
              <ul className="included-list">
                {['Oak Harbor', 'Camano Island', 'Coupeville', 'Langley', 'Freeland', 'Greenbank', 'Clinton', 'Bayview Corner', 'Stanwood (Snohomish border)'].map(b => (
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
          <span className="eyebrow">Island County Specialties</span>
          <h2>Services Most Requested on Whidbey &amp; Camano</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="7" width="22" height="11" rx="2"/><path d="M5 7V5a1 1 0 011-1h3a1 1 0 011 1v2"/><path d="M19 7V5a1 1 0 00-1-1h-3a1 1 0 00-1 1v2"/><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 10v-3"/><path d="M12 14v3"/></svg>, title: 'Generator Hookups', desc: "Island properties lose power more often than mainland ones — and if you're on a well, that means no water too. A properly installed transfer switch protects your home and keeps your well pump running when the grid goes down." },
              { svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><circle cx="12" cy="13" r="3"/><path d="M12 10v-2"/></svg>, title: 'Historic Home Rewiring', desc: 'Whidbey Island has a high density of pre-1960 homes, many with original wiring systems. Coupeville, Langley, and South Whidbey properties frequently need full or partial rewires. This is work we do often and do well.' },
              { svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="7" y1="6" x2="7" y2="18"/><line x1="12" y1="6" x2="12" y2="18"/><line x1="17" y1="6" x2="17" y2="18"/><line x1="2" y1="11" x2="22" y2="11"/><circle cx="7" cy="8" r="1" fill="currentColor"/><circle cx="12" cy="14" r="1" fill="currentColor"/><circle cx="17" cy="8" r="1" fill="currentColor"/></svg>, title: 'Panel Upgrades', desc: 'Older Island County homes regularly need panel upgrades — both to accommodate modern loads and because original panels are no longer insurable. We handle permits and utility coordination with PUD 1 of Island County.' },
              { svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="15" height="13" rx="2"/><path d="M16 10h2a2 2 0 012 2v3a2 2 0 01-2 2h-2"/><path d="M5 6V4"/><path d="M9 6V4"/><path d="M11 13l-3 5h4l-3 5"/></svg>, title: 'EV Charging', desc: 'Ferry commuters and Whidbey Island residents are adopting EVs at a high rate. We install Level 2 home chargers throughout Island County — permitted, inspected, and installed correctly the first time.' },
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

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>On the Island? We Come to You.</h2>
            <p>Free estimates, same-day response on most requests. Licensed, bonded, A+ BBB.</p>
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
