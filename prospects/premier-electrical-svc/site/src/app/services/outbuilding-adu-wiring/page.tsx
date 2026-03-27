import type { Metadata } from 'next';
import FAQAccordion from '../../components/FAQAccordion';
import SiteFooter from '../../components/SiteFooter';
import SiteNav from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Outbuilding & ADU Wiring | Premier Electrical Services — Skagit County, WA',
  description: 'Electrical wiring for detached garages, shops, barns, ADUs, and accessory structures in Skagit, Whatcom, Island, and San Juan counties. Subpanel installation, permitting, and inspection. Call (360) 421-5230.',
  alternates: { canonical: '/services/outbuilding-adu-wiring' },
  openGraph: { images: [{ url: '/images/svc-lighting.jpg', width: 1200, height: 630, alt: 'Outbuilding and ADU electrical wiring by Premier Electrical Services' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function OutbuildingADUWiringPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Can you run power to a detached garage or shop?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — this is one of our most common calls. We run a feeder from your main panel to a subpanel in the outbuilding, then wire it for whatever your space needs: lights, outlets, 240V outlets for welders or compressors, or EV chargers. A permit is required and we handle it.' } },
          { '@type': 'Question', name: 'Do I need a subpanel in my detached garage?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Any detached structure that is fed from the main panel requires its own disconnect and subpanel at the outbuilding. This is a code requirement, not optional. We size it correctly for your current needs and with room to grow.' } },
          { '@type': 'Question', name: 'Can you wire an ADU or accessory dwelling unit?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. ADUs are increasingly common throughout Skagit and Whatcom counties. They need their own electrical service, often with a separate meter or at minimum a dedicated subpanel. We work with the utility, the building department, and your GC to get it done correctly.' } },
          { '@type': 'Question', name: 'How much does it cost to run power to an outbuilding?', acceptedAnswer: { '@type': 'Answer', text: 'It depends heavily on the distance between your main panel and the outbuilding, whether the run is overhead or underground, and what you want to power inside. A simple 60-amp feed to a garage 50 feet away might run $1,500–$3,000. Longer runs or larger panels cost more. We provide a free, itemized quote.' } },
          { '@type': 'Question', name: 'Do you wire barns and agricultural buildings?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Rural Skagit and Whatcom county properties are a significant part of our work. We wire barns, equipment sheds, greenhouses, irrigation control panels, and other ag structures. These jobs often involve longer overhead or underground runs and larger panels for high-load farm equipment.' } },
          { '@type': 'Question', name: 'Is overhead or underground wiring better for an outbuilding?', acceptedAnswer: { '@type': 'Answer', text: 'Both work, and the right choice depends on your property. Underground runs are cleaner and less exposed to storm damage — but require trenching and are more expensive. Overhead runs are faster and cheaper but more exposed. We assess your property and give you an honest recommendation.' } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Outbuilding & ADU Electrical Wiring',
        description: 'Electrical wiring for detached garages, shops, barns, ADUs, and accessory structures in Skagit, Whatcom, Island, and San Juan counties. Subpanel installation, overhead and underground feed, permitting, and inspection.',
        provider: { '@type': 'ElectricalContractor', name: 'Premier Electrical Services', telephone: '+13604215230', url: 'https://premierelectricalsvc.com' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Skagit County, WA' },
          { '@type': 'AdministrativeArea', name: 'Whatcom County, WA' },
          { '@type': 'AdministrativeArea', name: 'Island County, WA' },
          { '@type': 'AdministrativeArea', name: 'San Juan County, WA' },
        ],
        url: 'https://premierelectricalsvc.com/services/outbuilding-adu-wiring',
        serviceType: 'Outbuilding and ADU Electrical Wiring',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Get Electrical Power Run to a Detached Garage, Shop, Barn, or ADU',
        description: 'Premier Electrical Services runs subpanel feeds to detached structures throughout Skagit and surrounding counties — overhead or underground, permitted and inspector-approved.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Call or Submit a Request', text: 'Tell us about the outbuilding — type, distance from the main panel, and what you want to power inside. We respond same day.' },
          { '@type': 'HowToStep', position: 2, name: 'Site Assessment & Quote', text: 'We assess the panel, the run path, and your power requirements. We recommend overhead or underground based on your property and give you a clear written quote.' },
          { '@type': 'HowToStep', position: 3, name: 'Subpanel Install, Permit & Inspection', text: 'We run the feed, install the subpanel, and wire the interior for your needs. We pull the permit and coordinate the inspection. Your outbuilding is ready to use.' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
          { '@type': 'ListItem', position: 3, name: 'Outbuilding & ADU Wiring', item: '/services/outbuilding-adu-wiring' },
        ],
      }) }} />
      <SiteNav alwaysScrolled activePath="/services" />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/svc-lighting.jpg"
          alt="Electrician installing subpanel in detached garage workshop in Skagit County"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/services" className="breadcrumb">← All Services</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Outbuildings & ADUs · Garages, Shops, Barns, Guest Houses
          </div>
          <h1>Outbuilding & ADU Wiring. Power That Actually Works.</h1>
          <p className="county-hero-sub">
            Detached garages, shops, barns, greenhouses, and ADUs all need their own electrical service. We run subpanel feeds — overhead or underground — to structures across rural and residential Skagit, Whatcom, Island, and San Juan counties.
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
              <h2>Every Detached Structure Needs Its Own Panel.</h2>
              <p className="service-intro">
                Any detached outbuilding fed from your main panel requires a subpanel at the structure — not a long extension cord, and not a feed from a single outlet. This is a code requirement and exists because a detached structure needs its own disconnect and over-current protection. We size the subpanel for your current needs and leave room to add circuits later.
              </p>
              <p className="service-intro">
                We handle the full scope: the feeder cable run (overhead or underground), the subpanel at the outbuilding, and the interior wiring for lighting, outlets, 240V equipment circuits, and EV chargers. Whether it&rsquo;s a simple two-circuit garage or a fully-wired shop with 240V welding circuits, we scope it correctly and build it to last.
              </p>
              <p className="service-intro">
                For ADUs and guest houses, we coordinate with the utility, the building department, and your GC. We know the WA State requirements for accessory dwelling units and work within them from the start.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>What We Handle</h3>
              <ul className="included-list">
                {[
                  'Detached garage and workshop wiring',
                  'Shop electrical (240V, heavy equipment circuits)',
                  'Barn and agricultural building electrical',
                  'ADU and accessory dwelling unit service',
                  'Greenhouse and irrigation electrical',
                  'Subpanel installation at the outbuilding',
                  'Overhead or underground feeder runs',
                  'Permit pulled, inspection coordinated, A+ BBB',
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
              { num: '01', icon: '📞', title: 'Call or Submit a Request', desc: 'Tell us the structure type, its distance from the main panel, and what you need to power. We respond same day.' },
              { num: '02', icon: '📋', title: 'Site Assessment & Quote', desc: 'We assess the panel and run path, recommend overhead or underground, and give you a written quote. No vague ranges.' },
              { num: '03', icon: '✅', title: 'Install, Permit & Inspect', desc: 'We run the feed, install the subpanel, wire the interior circuits, pull the permit, and schedule the inspection.' },
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
          <span className="eyebrow">What We Wire</span>
          <h2>Every Kind of Structure on Your Property</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { icon: '🔧', title: 'Shops & Workshops', desc: 'Welder outlets, compressor circuits, bright overhead lighting, plenty of dedicated 120V outlets. We size the subpanel so you can run everything at once.' },
              { icon: '🚗', title: 'Detached Garages', desc: 'Lighting, outlets, EV charger circuit, possibly a 240V outlet for tools. We wire it for how you actually use the space — not just two circuits and a prayer.' },
              { icon: '🌾', title: 'Barns & Ag Buildings', desc: 'Overhead and underground feeds, irrigation control panels, lighting, livestock waterer circuits, and whatever else your operation needs. We know rural Skagit properties.' },
              { icon: '🏡', title: 'ADUs & Guest Houses', desc: 'A separate dwelling needs a separate service or a properly sized subpanel. We coordinate with the utility and building department so it passes every inspection.' },
              { icon: '🌱', title: 'Greenhouses', desc: 'Grow light circuits, climate control, irrigation automation. Greenhouses have high electrical loads — we size and wire them for what you\'re actually growing.' },
              { icon: '⚡', title: 'EV Charging in Outbuildings', desc: 'Planning to charge your EV in the garage or shop? We add the dedicated 240V circuit at the same time we wire the subpanel — one trip, one permit, one inspection.' },
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
          <h2>Outbuilding & ADU Wiring Questions</h2>
          <div style={{ marginTop: '36px', maxWidth: '780px' }}>
            <FAQAccordion faqs={[
              { q: 'Can you run power to a detached garage or shop?', a: 'Yes — this is one of our most common calls. We run a feeder from your main panel to a subpanel in the outbuilding, then wire it for whatever your space needs: lights, outlets, 240V outlets for welders or compressors, or EV chargers. A permit is required and we handle it.' },
              { q: 'Do I need a subpanel in my detached garage?', a: 'Yes. Any detached structure that is fed from the main panel requires its own disconnect and subpanel at the outbuilding. This is a code requirement, not optional. We size it correctly for your current needs and with room to grow.' },
              { q: 'Can you wire an ADU or accessory dwelling unit?', a: 'Yes. ADUs are increasingly common throughout Skagit and Whatcom counties. They need their own electrical service, often with a separate meter or at minimum a dedicated subpanel. We work with the utility, the building department, and your GC to get it done correctly.' },
              { q: 'How much does it cost to run power to an outbuilding?', a: 'It depends heavily on the distance between your main panel and the outbuilding, whether the run is overhead or underground, and what you want to power inside. A simple 60-amp feed to a garage 50 feet away might run $1,500–$3,000. Longer runs or larger panels cost more. We provide a free, itemized quote.' },
              { q: 'Do you wire barns and agricultural buildings?', a: 'Yes. Rural Skagit and Whatcom county properties are a significant part of our work. We wire barns, equipment sheds, greenhouses, irrigation control panels, and other ag structures, including longer overhead or underground runs and larger panels for high-load farm equipment.' },
              { q: 'Is overhead or underground wiring better for an outbuilding?', a: 'Both work. Underground runs are cleaner and less exposed to storm damage — but require trenching and cost more. Overhead runs are faster and less expensive but more exposed. We assess your property and give you an honest recommendation.' },
            ]} />
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Have a Structure That Needs Power?</h2>
            <p>Free estimate. We scope it right, pull the permit, and wire it to last — regardless of how remote your property is.</p>
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
