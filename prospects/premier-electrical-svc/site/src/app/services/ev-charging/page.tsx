import type { Metadata } from 'next';
import FAQAccordion from '../../components/FAQAccordion';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'EV Charging Station Installation | Premier Electrical Services — Skagit & Puget Sound, WA',
  description: 'Level 2 EV charger installation in Skagit, Whatcom, Snohomish, and King counties. Tesla Wall Connector, JuiceBox, ChargePoint. Permitted & code-compliant. Call (360) 421-5230.',
  alternates: { canonical: '/services/ev-charging' },
  openGraph: { images: [{ url: '/images/svc-ev-charging.jpg', width: 1200, height: 630, alt: 'EV charging station installation by Premier Electrical Services' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function EVChargingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How much does EV charger installation cost?', acceptedAnswer: { '@type': 'Answer', text: 'Most Level 2 home charger installs run $400–$1,200 for labor depending on run distance, permit requirements, and panel capacity. The charger itself costs extra depending on the brand. We give you a full cost picture before starting.' } },
          { '@type': 'Question', name: 'Do I need to upgrade my panel for an EV charger?', acceptedAnswer: { '@type': 'Answer', text: 'Not always. If your panel has available capacity (most 200A panels do), we can add a dedicated circuit without upgrading. If you have an older 100A panel or it\'s already near capacity, we\'ll let you know and can handle the upgrade at the same time.' } },
          { '@type': 'Question', name: 'Do I need a permit for EV charger installation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — in Washington State, Level 2 charger installations require a permit. We handle that for you. It ensures the install is safe and protects your homeowner\'s insurance.' } },
          { '@type': 'Question', name: 'How long does EV charger installation take?', acceptedAnswer: { '@type': 'Answer', text: 'Most residential installs take 2–4 hours. If a panel upgrade is needed, plan a full day.' } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Get an EV Charger Installed at Home',
        description: 'Premier Electrical Services installs Level 2 EV chargers in Skagit, Whatcom, Snohomish, and King counties.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Call or Submit a Request', text: 'Tell us your EV make, garage setup, and whether you already have a charger in mind. We respond same day.' },
          { '@type': 'HowToStep', position: 2, name: 'Free On-Site Assessment', text: 'We look at your panel, the run distance to your garage or parking spot, and give you a clear quote. No vague ranges.' },
          { '@type': 'HowToStep', position: 3, name: 'Install, Permit & Inspect', text: 'We install the charger, pull the permit, and coordinate the inspection. Done in a day on most homes.' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
          { '@type': 'ListItem', position: 3, name: 'EV Charging', item: '/services/ev-charging' },
        ],
      }) }} />

      <nav className="nav nav--scrolled">
        <a href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Premier Electrical Services" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="/services" className="nav-link--active">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/service-area">Service Area</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact" className="nav-cta">Get a Free Estimate</a></li>
        </ul>
        <a href={PHONE_TEL} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>Call Now</a>
      </nav>

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/svc-ev-charging.jpg"
          alt="EV charging station installed in residential garage"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/services" className="breadcrumb">← All Services</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            EV Charging · Permitted &amp; Code-Compliant
          </div>
          <h1>EV Charging Station Installation. Permitted, Clean, and Ready to Charge.</h1>
          <p className="county-hero-sub">
            Washington ranks among the top EV markets in the country. We install Level 2 home charging stations across Skagit, Whatcom, Snohomish, and King counties — the right way, the first time.
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
              <span className="eyebrow">The Service</span>
              <h2>Charge Faster. Pay Less. Do It Right.</h2>
              <p className="service-intro">
                A standard 120V outlet adds about 4–5 miles of range per hour. A Level 2 charger adds 25–30 miles per hour — meaning a full overnight charge instead of plugging in for two days. Most EV owners make the switch within the first few months.
              </p>
              <p className="service-intro">
                We install Tesla Wall Connectors, JuiceBox units, ChargePoint Home Flex, and other Level 2 chargers in residential garages, carports, and commercial parking structures. Every install is permitted, inspected, and code-compliant. We don&apos;t cut corners behind your walls.
              </p>
              <p className="service-intro">
                If your existing panel doesn&apos;t have enough capacity, we&apos;ll tell you upfront and can handle the upgrade at the same time. No surprises.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>What&apos;s Included</h3>
              <ul className="included-list">
                {[
                  'Tesla Wall Connector installs',
                  'JuiceBox, ChargePoint, Clipper Creek installs',
                  'Dedicated 50A or 60A NEMA 14-50 circuits',
                  'Conduit runs (indoor & outdoor/weatherproof)',
                  'Panel capacity check — upgrade if needed',
                  'Permit pulled, inspection scheduled',
                  'Clean, professional finish — no exposed wiring',
                  'A+ BBB rated, Lic. PREMIES821LL',
                ].map(b => (
                  <li key={b}><span className="included-check">✓</span>{b}</li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-primary" style={{ marginTop: '24px', width: '100%', textAlign: 'center', display: 'block' }}>
                Schedule This Service
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <span className="eyebrow">How It Works</span>
          <h2 style={{ color: '#fff', marginBottom: '10px' }}>Simple Process. No Guesswork.</h2>
          <div className="process-grid">
            {[
              { num: '01', icon: '📞', title: 'Call or Submit a Request', desc: 'Tell us your EV make, garage setup, and whether you already have a charger in mind. We respond same day.' },
              { num: '02', icon: '📋', title: 'Free On-Site Assessment', desc: 'We look at your panel, the run distance to your garage or parking spot, and give you a clear quote. No vague ranges.' },
              { num: '03', icon: '✅', title: 'Install, Permit & Inspect', desc: 'We install the charger, pull the permit, and coordinate the inspection. Done in a day on most homes.' },
            ].map((step, i, arr) => (
              <div key={step.num} className="process-step">
                {i < arr.length - 1 && <div className="process-connector" />}
                <div className="process-icon-wrap"><div className="process-icon">{step.icon}</div></div>
                <div className="process-num">{step.num}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <span className="eyebrow">Why It Matters</span>
          <h2>Six Reasons to Make the Switch to Level 2 Charging</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { icon: '⚡', title: 'Speed — 6× Faster Than a Standard Outlet', desc: 'A 120V outlet adds 4–5 miles of range per hour. A Level 2 charger adds 25–30 miles per hour. You wake up to a full charge every morning instead of half a battery.' },
              { icon: '💸', title: 'Lower Cost Per Mile', desc: 'Charging at off-peak rates overnight is dramatically cheaper than gasoline — and cheaper than Level 3 public charging. Your home charger pays for itself quickly.' },
              { icon: '🏠', title: 'Convenience You\'ll Actually Use', desc: 'Never search for a public charger again. Plug in when you get home — like a phone — and leave every morning full. It changes how you think about owning an EV.' },
              { icon: '📈', title: 'Home Value', desc: 'A permitted, professionally installed EV charger is a real estate asset. Buyers actively look for it, and appraisers support it. It\'s a feature, not a cost.' },
              { icon: '🛡️', title: 'Safe, Code-Compliant Install', desc: 'DIY EV charger installs are a common cause of electrical fires. A permitted, inspector-approved installation protects your home, your car, and your insurance coverage.' },
              { icon: '🚗', title: 'Works With Any EV or PHEV', desc: 'Whether you drive a Tesla, Rivian, Ford F-150 Lightning, or a plug-in hybrid Prius, a Level 2 charger charges them all. It\'s EV-agnostic and future-ready.' },
            ].map(w => (
              <div key={w.title} className="why-card">
                <div className="why-number">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Frequently Asked</span>
          <h2>EV Charger Questions</h2>
          <div style={{ marginTop: '36px', maxWidth: '780px' }}>
            <FAQAccordion faqs={[
              { q: 'How much does EV charger installation cost?', a: 'Most Level 2 home charger installs run $400–$1,200 for labor depending on run distance, permit requirements, and panel capacity. The charger itself costs extra depending on the brand. We give you a full cost picture before starting.' },
              { q: 'Do I need to upgrade my panel for an EV charger?', a: 'Not always. If your panel has available capacity (most 200A panels do), we can add a dedicated circuit without upgrading. If you have an older 100A panel or it\'s already near capacity, we\'ll let you know and can handle the upgrade at the same time.' },
              { q: 'Do I need a permit for EV charger installation?', a: 'Yes — in Washington State, Level 2 charger installations require a permit. We handle that for you. It ensures the install is safe and protects your homeowner\'s insurance.' },
              { q: 'How long does installation take?', a: 'Most residential installs take 2–4 hours. If a panel upgrade is needed, plan a full day.' },
            ]} />
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Ready to Charge at Home?</h2>
            <p>Free estimate. We handle the permit. Installed and inspected in a day on most homes.</p>
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
