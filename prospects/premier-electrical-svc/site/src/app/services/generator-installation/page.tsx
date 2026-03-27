import type { Metadata } from 'next';
import FAQAccordion from '../../components/FAQAccordion';
import SiteFooter from '../../components/SiteFooter';
import SiteNav from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Whole-Home Generator Installation | Premier Electrical Services — Skagit County, WA',
  description: 'Standby generator installation for homes and businesses in Skagit, Whatcom, Island, and San Juan counties. Pacific Northwest power outage specialists. Call (360) 421-5230.',
  alternates: { canonical: '/services/generator-installation' },
  openGraph: { images: [{ url: '/images/svc-generator.jpg', width: 1200, height: 630, alt: 'Whole-home generator installation by Premier Electrical Services' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function GeneratorInstallationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What size generator do I need?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on what you want to power. A few critical circuits (heat, refrigerator, lights, well pump) might need 7,500–12,000 watts. Whole-home coverage typically starts at 20KW. We do a load analysis and tell you exactly what you need — and what you don\'t.' } },
          { '@type': 'Question', name: 'What is the difference between a transfer switch and an interlock?', acceptedAnswer: { '@type': 'Answer', text: 'Both prevent backfeed to the utility grid (a safety requirement). An interlock kit is less expensive and works with your existing panel. A transfer switch is a separate subpanel that automatically switches between grid and generator. We\'ll recommend the right option for your situation.' } },
          { '@type': 'Question', name: 'Do I need a permit for generator installation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — in Washington State, generator hookups require an electrical permit. We handle that, schedule the inspection, and make sure everything is done by the book.' } },
          { '@type': 'Question', name: 'Can you connect a generator to natural gas?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. If your home has natural gas service, a permanently-piped connection is the cleanest and most convenient option — no storing fuel, no refilling. We do this connection along with the electrical hookup.' } },
          { '@type': 'Question', name: 'How much does generator installation cost?', acceptedAnswer: { '@type': 'Answer', text: 'The electrical installation for a standby generator typically runs $1,500–$4,000, depending on the panel, existing electrical capacity, the run length to the generator location, and whether gas or propane connection is needed. This doesn\'t include the cost of the generator unit itself. We provide free itemized estimates before any work starts.' } },
          { '@type': 'Question', name: 'How long does a power outage need to be to justify a generator?', acceptedAnswer: { '@type': 'Answer', text: 'In Western Washington, outages from winter storms regularly last 2–7 days in rural Skagit and island areas. If you have a well pump, medical equipment, home-based business, or livestock that depend on power, the answer is straightforward — even one extended outage justifies the investment.' } },
          { '@type': 'Question', name: 'Can a generator power my entire home?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — with the right-sized standby generator (typically 20KW or larger for a modern home) and a proper transfer switch, a generator can power your entire home. If you only want to cover critical circuits, a smaller unit with a manual transfer switch or interlock is a more economical option. We scope it for your specific needs.' } },
          { '@type': 'Question', name: 'What is the difference between a standby and a portable generator?', acceptedAnswer: { '@type': 'Answer', text: 'A standby generator is permanently installed, connects to natural gas or propane, and turns on automatically within seconds of a power outage — no action required from you. A portable generator must be manually started and connected, runs on gasoline or propane, and cannot be permanently connected to your home without a proper transfer switch or interlock. Both have their place — we help you choose.' } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Generator Installation',
        description: 'Standby and portable generator installation for homes and businesses in Skagit, Whatcom, Island, and San Juan counties. Transfer switches, load analysis, permitting, and inspection coordinated.',
        provider: { '@type': 'ElectricalContractor', name: 'Premier Electrical Services', telephone: '+13604215230', url: 'https://premierelectricalsvc.com' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Skagit County, WA' },
          { '@type': 'AdministrativeArea', name: 'Whatcom County, WA' },
          { '@type': 'AdministrativeArea', name: 'Island County, WA' },
          { '@type': 'AdministrativeArea', name: 'San Juan County, WA' },
        ],
        url: 'https://premierelectricalsvc.com/services/generator-installation',
        serviceType: 'Generator Installation',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Get a Generator Installed for Your Home',
        description: 'Premier Electrical Services installs standby and portable generator hookups for Pacific Northwest homeowners in Skagit and surrounding counties.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Call or Submit a Request', text: 'Tell us what you want to power — critical circuits only or whole-home coverage. We respond same day.' },
          { '@type': 'HowToStep', position: 2, name: 'Load Analysis & Free Quote', text: 'We visit your home, assess your panel, and calculate the load you need to cover. We give you a written quote before any work starts.' },
          { '@type': 'HowToStep', position: 3, name: 'Generator Hookup, Permit & Inspection', text: 'We install the transfer switch or interlock, connect the generator, pull the permit, and coordinate the inspection. Done right and by the book.' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
          { '@type': 'ListItem', position: 3, name: 'Generator Installation', item: '/services/generator-installation' },
        ],
      }) }} />
      <SiteNav alwaysScrolled activePath="/services" />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/svc-generator.jpg"
          alt="Standby generator installed at residential home"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/services" className="breadcrumb">← All Services</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Generator Installation · Skagit Valley &amp; Puget Sound
          </div>
          <h1>Whole-Home Generator Installation. Because the Power Goes Out Here.</h1>
          <p className="county-hero-sub">
            Winter storms, grid failures, fallen trees. In Western Washington, power outages aren&apos;t rare — they&apos;re a seasonal reality. A properly installed standby or portable generator means your home keeps running when the neighborhood goes dark.
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
              <h2>When the Power Goes Out, You&apos;ll Be the One with Heat.</h2>
              <p className="service-intro">
                We install both portable generator hookups and permanent standby systems for homes and small businesses throughout Skagit, Whatcom, San Juan, and Island counties. Portable generators need a proper transfer switch or interlock — not an extension cord run through a window. Standby systems turn on automatically within seconds of an outage, without anyone lifting a finger.
              </p>
              <p className="service-intro">
                We size the generator for your actual load — whether that&apos;s just a few critical circuits, the whole house, or a commercial space that can&apos;t afford downtime. We handle the electrical side completely: the transfer switch, the dedicated circuit, the connection to your utility meter, and any panel modifications needed.
              </p>
              <p className="service-intro">
                We&apos;ll also tell you honestly if a generator is overkill for your situation and a battery backup system might serve you better.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>What&apos;s Included</h3>
              <ul className="included-list">
                {[
                  'Whole-home standby generator connections',
                  'Portable generator transfer switch installation',
                  'Manual and automatic interlock kits',
                  'Load analysis — size it right for your home',
                  'Dedicated generator circuits and wiring',
                  'Connection to propane, natural gas, or liquid propane',
                  'Permit pulled, inspection coordinated',
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

      <section className="section section--tinted">
        <div className="container">
          <span className="eyebrow">Why Western Washington Needs This</span>
          <h2>The Pacific Northwest Case for Backup Power</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { icon: '🌧️', title: 'Winter Storms', desc: 'Western Washington averages 10–15 significant windstorms and winter ice events per decade. Power can be out for 2–7 days in rural Skagit and island areas.' },
              { icon: '💧', title: 'Well Pumps & Water', desc: 'Homes on wells lose water pressure within minutes of an outage. A generator keeps your pump — and your toilet — running.' },
              { icon: '🏥', title: 'Medical Equipment', desc: 'CPAP machines, oxygen concentrators, insulin refrigeration. A few hours without power isn\'t an inconvenience — it\'s a medical emergency.' },
              { icon: '💼', title: 'Home-Based Businesses', desc: 'If you work from home, a multi-day outage means lost revenue. A generator is the business continuity plan that actually works.' },
              { icon: '🌡️', title: 'Heat & Comfort', desc: 'In winter, losing your furnace or heat pump for several days isn\'t just uncomfortable — for elderly residents or young children, it\'s dangerous.' },
              { icon: '🔐', title: 'Security & Peace of Mind', desc: 'Garage doors, alarm systems, cameras, and exterior lighting all go dark during a grid outage. A generator keeps your home protected 24/7.' },
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
          <h2>Generator Installation Questions</h2>
          <div style={{ marginTop: '36px', maxWidth: '780px' }}>
            <FAQAccordion faqs={[
              { q: 'What size generator do I need?', a: 'It depends on what you want to power. A few critical circuits (heat, refrigerator, lights, well pump) might need 7,500–12,000 watts. Whole-home coverage typically starts at 20KW. We do a load analysis and tell you exactly what you need — and what you don\'t.' },
              { q: 'What\'s the difference between a transfer switch and an interlock?', a: 'Both prevent backfeed to the utility grid (a safety requirement). An interlock kit is less expensive and works with your existing panel. A transfer switch is a separate subpanel that automatically switches between grid and generator. We\'ll recommend the right option for your situation.' },
              { q: 'Do I need a permit for generator installation?', a: 'Yes — in Washington State, generator hookups require an electrical permit. We handle that, schedule the inspection, and make sure everything is done by the book.' },
              { q: 'Can you connect a generator to natural gas?', a: 'Yes. If your home has natural gas service, a permanently-piped connection is the cleanest and most convenient option — no storing fuel, no refilling. We do this connection along with the electrical hookup.' },
              { q: 'How much does generator installation cost?', a: 'The electrical installation for a standby generator typically runs $1,500–$4,000, depending on panel capacity, the run length to the generator location, and gas/propane connection requirements. This doesn\'t include the cost of the generator unit itself. We provide free itemized estimates.' },
              { q: 'How long does a power outage need to be to justify a generator?', a: 'In Western Washington, outages from winter storms regularly last 2–7 days in rural Skagit and island areas. If you have a well pump, medical equipment, a home-based business, or livestock that depend on power, even one extended outage justifies the investment.' },
              { q: 'Can a generator power my entire home?', a: 'Yes — with the right-sized standby generator (typically 20KW+) and a proper transfer switch. If you only want critical circuits covered, a smaller unit with a manual interlock is a more economical option. We scope it for your actual needs.' },
              { q: 'What\'s the difference between a standby and a portable generator?', a: 'A standby generator is permanently installed, connects to natural gas or propane, and turns on automatically within seconds of an outage — no action required. A portable generator must be manually started and connected, and requires a transfer switch or interlock to safely connect to your home. Both have their place — we help you choose.' },
            ]} />
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Don&apos;t Wait for the Next Outage to Think About This.</h2>
            <p>Free estimate. We size it right, handle the permit, and have you ready before storm season.</p>
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
