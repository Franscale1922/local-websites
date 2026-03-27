import type { Metadata } from 'next';
import FAQAccordion from '../../components/FAQAccordion';
import SiteFooter from '../../components/SiteFooter';
import SiteNav from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Hot Tub & Spa Wiring | Premier Electrical Services — Skagit County, WA',
  description: 'Licensed hot tub and spa wiring in Skagit, Whatcom, Island, and San Juan counties. GFCI-protected 240V circuits, proper disconnect placement, permitted and inspector-approved. Call (360) 421-5230.',
  alternates: { canonical: '/services/hot-tub-spa-wiring' },
  openGraph: { images: [{ url: '/images/svc-lighting.jpg', width: 1200, height: 630, alt: 'Hot tub and spa electrical wiring by Premier Electrical Services' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function HotTubSpaWiringPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Do I need a permit to wire a hot tub?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — in Washington State, hot tub wiring always requires a permit. The circuit must be GFCI-protected at the panel with a proper disconnect installed within sight of the spa. This is not optional, and it directly affects your homeowner\'s insurance coverage. We handle the permit and inspection.' } },
          { '@type': 'Question', name: 'What kind of circuit does a hot tub need?', acceptedAnswer: { '@type': 'Answer', text: 'Most hot tubs require a dedicated 240V, 50-amp or 60-amp GFCI-protected circuit. The exact requirement depends on the model — we verify against your spa\'s spec sheet before sizing the circuit. Running the wrong amperage is a fire hazard and will void your spa warranty.' } },
          { '@type': 'Question', name: 'How far does the disconnect need to be from the spa?', acceptedAnswer: { '@type': 'Answer', text: 'The NEC requires the disconnect to be within sight of the spa but at least 5 feet away from the water — meaning you must be able to see the disconnect from the tub without crossing the water. We install it in the correct location every time, which is what the inspector will verify.' } },
          { '@type': 'Question', name: 'Can I plug a hot tub into a regular outlet?', acceptedAnswer: { '@type': 'Answer', text: 'Plug-and-play 120V "soft tubs" can use a standard GFCI outlet, but most permanent hot tubs require a hardwired 240V circuit. Using a standard outlet for a 240V spa is dangerous and voids the manufacturer warranty. We verify what your specific unit requires and install it correctly.' } },
          { '@type': 'Question', name: 'How long does hot tub wiring take?', acceptedAnswer: { '@type': 'Answer', text: 'Most hot tub wiring installs take one day. If the run from your panel is long or requires conduit through finished areas, it may take slightly longer. We give you a clear timeline before starting.' } },
          { '@type': 'Question', name: 'Does hot tub wiring affect my homeowner\'s insurance?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — significantly. Many insurers require proof of a permitted, inspector-approved installation before coverage applies to spa-related claims. An unpermitted install on a DIY circuit can result in a denied claim. Our permitted installs come with inspection documentation you can file with your insurer.' } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Hot Tub & Spa Wiring',
        description: 'Licensed hot tub and spa wiring in Skagit, Whatcom, Island, and San Juan counties. GFCI-protected 240V dedicated circuits, disconnect installation, bonding, permitted and inspector-approved.',
        provider: { '@type': 'ElectricalContractor', name: 'Premier Electrical Services', telephone: '+13604215230', url: 'https://premierelectricalsvc.com' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Skagit County, WA' },
          { '@type': 'AdministrativeArea', name: 'Whatcom County, WA' },
          { '@type': 'AdministrativeArea', name: 'Island County, WA' },
          { '@type': 'AdministrativeArea', name: 'San Juan County, WA' },
        ],
        url: 'https://premierelectricalsvc.com/services/hot-tub-spa-wiring',
        serviceType: 'Hot Tub and Spa Wiring',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Get a Hot Tub Wired by a Licensed Electrician',
        description: 'Premier Electrical Services wires hot tubs and spas correctly — GFCI-protected 240V circuit, proper disconnect, bonding, permit, and inspection. Serving Skagit, Whatcom, Island, and San Juan counties.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Call or Submit a Request', text: 'Tell us the brand and model of your spa or hot tub, the approximate distance from the panel to the install location, and whether it\'s a new or existing setup. We respond same day.' },
          { '@type': 'HowToStep', position: 2, name: 'On-Site Assessment & Quote', text: 'We review the spa spec sheet, check your panel capacity, plan the circuit run, and give you a clear quote before any work starts. We also confirm disconnect placement per code.' },
          { '@type': 'HowToStep', position: 3, name: 'Wiring, Permit & Inspection', text: 'We install the dedicated 240V GFCI circuit, mount the disconnect at the correct location, pull the permit, and coordinate the inspection. You get documentation for your insurance records.' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
          { '@type': 'ListItem', position: 3, name: 'Hot Tub & Spa Wiring', item: '/services/hot-tub-spa-wiring' },
        ],
      }) }} />
      <SiteNav alwaysScrolled activePath="/services" />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/svc-lighting.jpg"
          alt="Electrician installing wiring for hot tub and spa in Skagit County backyard"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/services" className="breadcrumb">← All Services</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Hot Tub & Spa Wiring · Licensed & Permitted
          </div>
          <h1>Hot Tub & Spa Wiring. Done Right Before You Fill It.</h1>
          <p className="county-hero-sub">
            A hot tub needs a dedicated 240V GFCI circuit, a properly placed disconnect, and a permit. It&rsquo;s not a DIY job — it&rsquo;s an electrical hazard and an insurance issue if it&rsquo;s done wrong. We do it right, every time.
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
              <h2>A Hot Tub Is Not a Plug-and-Play Project.</h2>
              <p className="service-intro">
                Most permanent hot tubs and spas require a dedicated 240V, 50–60 amp circuit with GFCI protection at the panel. They also require a hardwired disconnect mounted within sight of the tub but at least 5 feet from the water — a code requirement many DIY installs get wrong. Getting this wrong creates a real electrocution risk and invalidates your homeowner&rsquo;s insurance if something goes wrong.
              </p>
              <p className="service-intro">
                We&rsquo;ve wired hot tubs and spas across Skagit, Whatcom, Island, and San Juan counties. We verify your spa&rsquo;s electrical spec sheet, check your panel capacity, plan the circuit run, and install everything to code. Every install is permitted and inspector-approved — which matters when you file a claim.
              </p>
              <p className="service-intro">
                If your panel doesn&rsquo;t have capacity for the additional circuit, we&rsquo;ll tell you upfront and can handle the upgrade at the same time.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>What&rsquo;s Included</h3>
              <ul className="included-list">
                {[
                  'Dedicated 240V 50A or 60A circuit',
                  'GFCI protection at the panel',
                  'Disconnect installation (code-compliant placement)',
                  'Bonding wire connection to spa',
                  'Conduit run — indoor and weatherproof outdoor',
                  'Panel capacity assessment — upgrade if needed',
                  'Permit pulled, inspection scheduled',
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
              { num: '01', icon: '📞', title: 'Call or Submit a Request', desc: 'Tell us your spa model, the distance from your panel, and your planned location. We respond same day.' },
              { num: '02', icon: '📋', title: 'Assessment & Quote', desc: 'We review the spec sheet, check panel capacity, plan the circuit run, and give you a clear number before anything starts.' },
              { num: '03', icon: '✅', title: 'Wire, Permit & Inspect', desc: 'We install the circuit, disconnect, and bonding. Pull the permit. Coordinate inspection. Done right and documented.' },
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
          <h2>What Goes Wrong With DIY Hot Tub Wiring</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { icon: '⚡', title: 'Electrocution Risk', desc: 'Water and electricity are a lethal combination. An improperly wired or unbonded spa is a serious electrocution hazard. This is why permits and inspections exist.' },
              { icon: '🛡️', title: 'Insurance Denial', desc: 'Many carriers deny claims related to spas wired without a permit. A spa fire, electrical damage, or injury on an unpermitted install leaves you without coverage.' },
              { icon: '🔌', title: 'Wrong Circuit Size', desc: 'Running a 50-amp spa on a 30-amp circuit causes nuisance tripping at best and a fire at worst. We verify against your spa\'s spec sheet before sizing anything.' },
              { icon: '📍', title: 'Wrong Disconnect Location', desc: 'Code requires the disconnect within sight but at least 5 feet away from the water. Inspectors fail on this regularly. We know the rule and install it right.' },
              { icon: '⚠️', title: 'No Bonding', desc: 'Most DIY installs skip bonding — a wire connecting the spa shell to the circuit ground. Without it, stray voltage in the water can electrocute anyone in the tub.' },
              { icon: '🏷️', title: 'Warranty Voided', desc: 'Most spa manufacturers require a licensed, permitted installation to maintain the equipment warranty. A DIY circuit install voids that warranty on day one.' },
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
          <h2>Hot Tub Wiring Questions</h2>
          <div style={{ marginTop: '36px', maxWidth: '780px' }}>
            <FAQAccordion faqs={[
              { q: 'Do I need a permit to wire a hot tub?', a: 'Yes — in Washington State, hot tub wiring always requires a permit. The circuit must be GFCI-protected at the panel with a proper disconnect within sight of the spa. This directly affects your homeowner\'s insurance coverage. We handle the permit and inspection.' },
              { q: 'What kind of circuit does a hot tub need?', a: 'Most hot tubs require a dedicated 240V, 50-amp or 60-amp GFCI-protected circuit. The exact requirement depends on your model — we verify against the spa\'s spec sheet before sizing. Running the wrong amperage is a fire hazard and voids your warranty.' },
              { q: 'How far does the disconnect need to be from the spa?', a: 'The NEC requires the disconnect to be within sight of the spa but at least 5 feet from the water. We install it in the correct location every time — which is what the inspector will verify.' },
              { q: 'Can I plug a hot tub into a regular outlet?', a: 'Plug-and-play 120V soft tubs can use a standard GFCI outlet. Most permanent spas require a hardwired 240V circuit. Using a standard outlet for a 240V spa is dangerous and voids the warranty. We verify what your specific unit requires.' },
              { q: 'How long does hot tub wiring take?', a: 'Most installs take one day. If the run from your panel is long or requires conduit through finished areas, it may take slightly longer. We give you a clear timeline before starting.' },
              { q: 'Does hot tub wiring affect my homeowner\'s insurance?', a: 'Yes — many insurers require proof of a permitted, inspector-approved installation for spa-related coverage. An unpermitted install on a DIY circuit can result in a denied claim. Our permitted installs come with inspection documentation you can file with your insurer.' },
            ]} />
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Ready to Wire Your Hot Tub?</h2>
            <p>Free estimate. We pull the permit. Installation done right and documented for your insurance records.</p>
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
