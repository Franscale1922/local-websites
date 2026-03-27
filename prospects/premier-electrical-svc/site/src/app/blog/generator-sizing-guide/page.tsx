import type { Metadata } from 'next';
import FAQAccordion from '../../components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Generator Sizing Guide for the Pacific Northwest | Premier Electrical Services',
  description: 'How to figure out what size generator your home actually needs — essential circuits vs. whole-home coverage — and the right way to connect it safely. Licensed electricians in Skagit & Whatcom County.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function GeneratorSizingGuidePost() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Generator Sizing Guide for the Pacific Northwest',
        description: 'How to figure out what size generator your home actually needs and the right way to connect it safely.',
        author: { '@type': 'Organization', name: 'Premier Electrical Services' },
        publisher: { '@type': 'Organization', name: 'Premier Electrical Services', url: 'https://premierelectricalsvc.com' },
        datePublished: '2025-03-01',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://premierelectricalsvc.com/blog/generator-sizing-guide' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What size generator do I need for my home?', acceptedAnswer: { '@type': 'Answer', text: 'For critical circuits only (refrigerator, heat, well pump, some lighting), 7,500–12,000 watts is usually sufficient. For whole-home coverage with central HVAC, 20–22kW is the standard starting point. We do a load calculation for your specific home before recommending any size.' } },
          { '@type': 'Question', name: 'What is the difference between a portable and standby generator?', acceptedAnswer: { '@type': 'Answer', text: 'A standby generator is permanently installed, connected to natural gas or propane, and starts automatically within seconds of an outage. A portable generator runs on gasoline, must be manually started, and needs a transfer switch or interlock to connect properly. Both require professional electrical installation for safe connection to your home.' } },
          { '@type': 'Question', name: 'Can I plug a generator directly into my home\'s wiring?', acceptedAnswer: { '@type': 'Answer', text: 'No — this is extremely dangerous and illegal. Connecting a generator without a transfer switch sends power back into the utility grid, which can electrocute utility workers. It also creates a serious fire hazard in your home. All generator connections require a properly installed manual transfer switch or automatic transfer switch.' } },
          { '@type': 'Question', name: 'Do generators require a permit in Washington State?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Generator installations — standby or portable transfer switch — require an electrical permit. We pull the permit, schedule the inspection, and make sure everything passes. This protects your insurance coverage and satisfies utility requirements.' } },
        ],
      }) }} />

      <nav className="nav nav--scrolled">
        <a href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Premier Electrical Services" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/recognition">Recognition</a></li>
          <li><a href="/service-area">Service Area</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/blog" className="nav-link--active">Blog</a></li>
          <li><a href="/contact" className="nav-cta">Get a Free Estimate</a></li>
        </ul>
        <a href={PHONE_TEL} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>Call Now</a>
      </nav>

      <section className="services-page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-generator.jpg" alt="Standby generator installation in Skagit County" className="services-page-hero-bg" />
        <div className="services-page-hero-overlay" />
        <div className="services-page-hero-content">
          <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Backup Power</span>
          <h1>Generator Sizing Guide for the Pacific Northwest.</h1>
          <p style={{ maxWidth: '560px', marginBottom: '28px', color: 'rgba(255,255,255,0.88)' }}>
            How to size a generator for your actual needs — and how to connect it safely.
          </p>
        </div>
      </section>

      <div style={{ background: '#F7F8FA', padding: '12px 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="container" style={{ display: 'flex', gap: '8px', fontSize: '0.8rem', color: '#888', flexWrap: 'wrap' }}>
          <a href="/blog" style={{ color: '#888', textDecoration: 'none' }}>← All Guides</a>
          <span>·</span>
          <span>Backup Power</span>
          <span>·</span>
          <span>March 2025 · 7 min read</span>
        </div>
      </div>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.75', color: '#333', marginBottom: '32px' }}>
          Power outages in Skagit and Whatcom counties are a fact of life — the combination of Pacific storms, aging grid infrastructure, and rural service areas means most residents experience multi-hour outages regularly. A properly sized, correctly installed generator is one of the highest-value home improvements you can make in this region. Here&apos;s how to think about sizing yours.
        </p>

        <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>Start With What You Actually Need to Power</h2>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          The single biggest mistake people make in generator sizing is trying to power everything. Run the numbers on what actually matters during an outage and the right generator size usually becomes clear.
        </p>

        <h3 style={{ marginTop: '32px', marginBottom: '12px', fontSize: '1.1rem' }}>Critical Loads (7,500 – 12,000 Watts)</h3>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '12px' }}>
          If your goal is safety, food preservation, and basic comfort:
        </p>
        <ul style={{ lineHeight: '1.9', color: '#444', paddingLeft: '24px', marginBottom: '24px' }}>
          <li>Refrigerator and freezer (~1,200W combined)</li>
          <li>Gas furnace blower motor (~800W)</li>
          <li>Well pump if on well water (~1,500–2,000W)</li>
          <li>Basic lighting and phone charging (~500W)</li>
          <li>Sump pump if applicable (~1,500W)</li>
          <li>One TV and wifi router (~300W)</li>
        </ul>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          Total: roughly 5,000–7,000 running watts, with higher momentary surge requirements when compressors and motors start. A 7,500W–10,000W portable generator handles this comfortably.
        </p>

        <h3 style={{ marginTop: '32px', marginBottom: '12px', fontSize: '1.1rem' }}>Whole-Home Coverage (20kW+)</h3>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          If you want to run your home normally during an outage — central HVAC, electric ranges, hot water heater, EV charging — you&apos;re into standby generator territory. For a typical 1,800–2,500 sq ft home with central HVAC, 20–22kW is the standard starting recommendation. Homes with electric heat, large shops, or all-electric appliances may need 26kW or more.
        </p>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          We do a full load calculation before recommending a standby generator. Oversizing wastes money on install and fuel. Undersizing means the generator trips under load.
        </p>

        <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>Portable vs. Standby: The Real Difference</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
          <div style={{ background: '#F7F8FA', borderRadius: '8px', padding: '24px' }}>
            <strong style={{ display: 'block', marginBottom: '12px' }}>Portable Generator</strong>
            <ul style={{ lineHeight: '1.8', color: '#444', paddingLeft: '18px', margin: 0, fontSize: '0.92rem' }}>
              <li>Runs on gasoline</li>
              <li>Must be started manually</li>
              <li>You have to be home</li>
              <li>Requires fuel storage</li>
              <li>Lower upfront cost</li>
              <li>Still needs a transfer switch</li>
            </ul>
          </div>
          <div style={{ background: '#F7F8FA', borderRadius: '8px', padding: '24px' }}>
            <strong style={{ display: 'block', marginBottom: '12px' }}>Standby Generator</strong>
            <ul style={{ lineHeight: '1.8', color: '#444', paddingLeft: '18px', margin: 0, fontSize: '0.92rem' }}>
              <li>Runs on natural gas or propane</li>
              <li>Starts automatically</li>
              <li>Works when you&apos;re away</li>
              <li>No fuel storage needed</li>
              <li>Higher upfront cost</li>
              <li>Requires ATS installation</li>
            </ul>
          </div>
        </div>

        <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>The Critical Safety Issue: Transfer Switches</h2>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          No generator — portable or standby — should ever be connected to your home without a proper transfer switch or interlock. Connecting a generator to your home&apos;s wiring without isolation sends power backwards into the utility grid. This is called backfeed, and it can electrocute utility workers who are trying to restore power in your neighborhood. It also creates a serious fire hazard in your own home.
        </p>
        <p style={{ lineHeight: '1.75', color: '#444', marginBottom: '24px' }}>
          We install manual transfer switches for portable generators and automatic transfer switches (ATS) for standby units. This is not optional — it&apos;s code requirement, and it&apos;s for worker safety.
        </p>

        <div style={{ background: 'var(--color-primary)', borderRadius: '12px', padding: '40px', margin: '56px 0', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '12px' }}>Ready to Get a Generator Installed?</h2>
          <p style={{ color: 'rgba(255,255,255,0.78)', marginBottom: '28px', lineHeight: '1.6' }}>
            We size it right, install it right, pull the permit, and coordinate the inspection. Free estimate on every project.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href={PHONE_TEL} className="btn btn-primary">Call {PHONE}</a>
            <a href="/contact" className="btn btn-ghost-light">Get a Free Estimate</a>
          </div>
        </div>

        <h2 style={{ marginTop: '48px', marginBottom: '24px' }}>Generator Questions</h2>
        <FAQAccordion faqs={[
          { q: 'What size generator do I need for my home?', a: 'For critical circuits only (refrigerator, heat, well pump, lighting), 7,500–12,000 watts is usually sufficient. For whole-home coverage with central HVAC, 20–22kW is the standard starting point. We do a load calculation for your specific home before recommending any size.' },
          { q: 'What is the difference between a portable and standby generator?', a: 'A standby generator is permanently installed, connected to natural gas or propane, and starts automatically within seconds of an outage. A portable generator runs on gasoline, must be started manually, and needs a transfer switch to connect safely to your home.' },
          { q: 'Can I plug a generator directly into my home\'s wiring?', a: 'No — this is extremely dangerous and illegal. Connecting without a transfer switch sends power back into the grid, which can electrocute utility workers. All generator connections require a properly installed manual transfer switch or automatic transfer switch.' },
          { q: 'Do generators require a permit in Washington State?', a: 'Yes. Generator installations require an electrical permit. We pull it, schedule the inspection, and make sure everything passes. This protects your insurance and satisfies utility requirements.' },
        ]} />

        <div style={{ marginTop: '48px', padding: '24px 0', borderTop: '1px solid rgba(0,0,0,0.09)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', fontSize: '0.88rem' }}>
          <a href="/blog" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>← Back to All Guides</a>
          <a href="/services/generator-installation" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>Generator Installation Service →</a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Premier Electrical Services" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">Licensed, bonded electricians in Skagit, Whatcom &amp; surrounding counties. A+ BBB Rating. Lic. PREMIES821LL.</p>
          </div>
          <div className="footer-col"><h4>Services</h4><ul>
            <li><a href="/services/generator-installation">Generators</a></li>
            <li><a href="/services/panel-upgrades">Panel Upgrades</a></li>
            <li><a href="/services/ev-charging">EV Charging</a></li>
          </ul></div>
          <div className="footer-col"><h4>Resources</h4><ul>
            <li><a href="/blog">Electrical Guides</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Free Estimate</a></li>
          </ul></div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Premier Electrical Services</span>
          <span><a href={PHONE_TEL}>{PHONE}</a> · Lic. PREMIES821LL</span>
        </div>
      </footer>
    </main>
  );
}
