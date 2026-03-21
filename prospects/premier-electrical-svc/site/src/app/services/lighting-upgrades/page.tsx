import type { Metadata } from 'next';
import FAQAccordion from '../../components/FAQAccordion';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Lighting & Outbuilding Wiring | Premier Electrical Services — Skagit County, WA',
  description: 'Indoor and outdoor lighting, landscape lighting, detached garages, shops, ADUs, barns, and hot tub wiring in Skagit and surrounding counties. Call (360) 421-5230.',
  alternates: { canonical: '/services/lighting-upgrades' },
  openGraph: { images: [{ url: '/images/svc-lighting.jpg', width: 1200, height: 630, alt: 'Lighting and outbuilding wiring by Premier Electrical Services' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function LightingUpgradesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Can you wire a detached garage or shop from my main panel?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run a subpanel feed from your main panel to the outbuilding, install a properly-sized subpanel inside, and wire it for whatever you need — outlets, lighting, 240V tools. A permit is required for this work and we handle it.' } },
          { '@type': 'Question', name: 'Do I need a permit for a hot tub or spa?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — hot tub wiring always requires a permit in Washington State. The circuit must be GFCI-protected at the panel, with proper disconnect placement and bonding. We do this by the book, which matters for both safety and your homeowner\'s insurance.' } },
          { '@type': 'Question', name: 'What kind of outdoor lighting can you install?', acceptedAnswer: { '@type': 'Answer', text: 'We install landscape lighting low-voltage systems, line-voltage path and accent lighting, exterior security lighting with motion sensors, and dusk-to-dawn exterior fixtures. We can also wire for outdoor outlets, exterior fans, and porch fixtures.' } },
          { '@type': 'Question', name: 'Can you wire a barn or agricultural outbuilding?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We\'ve wired barns, shops, greenhouses, and agricultural buildings across Skagit and Whatcom counties. This often involves running overhead or underground service from the main panel to a subpanel in the building, then wiring for lighting, outlets, and any 240V equipment.' } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
          { '@type': 'ListItem', position: 3, name: 'Lighting & Outbuildings', item: '/services/lighting-upgrades' },
        ],
      }) }} />

      <nav className="nav nav--scrolled">
        <a href="/" className="nav-logo"><img src="/logo.svg" alt="Premier Electrical Services" className="nav-logo-img" /></a>
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
          src="/images/svc-lighting.jpg"
          alt="Modern interior lighting installation in home"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/services" className="breadcrumb">← All Services</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Lighting &amp; Outbuildings · Indoor, Outdoor &amp; Specialty
          </div>
          <h1>Lighting, Outbuildings and Specialty Wiring. If It Needs Power, We Run It.</h1>
          <p className="county-hero-sub">
            Detached garages. Shops. Barns. ADUs. Hot tubs. Landscape lighting. Security lighting. If it needs power and it&apos;s on your property, we can wire it — correctly, with permits when required, and code-compliant every time.
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
              <h2>Whatever&apos;s on Your Property, We Can Power It.</h2>
              <p className="service-intro">
                Lighting and specialty wiring covers a wide range — and we do all of it in Skagit, Whatcom, San Juan, and Island counties. Interior lighting upgrades: recessed cans, under-cabinet LED, dimmer conversions, and ceiling fan installs. Exterior work: security lights, pathway and landscape lighting, coach lights, and motion sensors.
              </p>
              <p className="service-intro">
                Outbuildings are a specialty of ours. Rural Skagit County has thousands of properties with detached garages, workshops, barns, and agricultural buildings that need dedicated electrical service — properly subpaneled, with enough capacity for a welder, compressor, or grow lights. We know these jobs and we approach them correctly.
              </p>
              <p className="service-intro">
                Hot tub and spa wiring is another common call. A hot tub needs a dedicated 240V GFCI circuit installed correctly — not a DIY job, and not something to have an unlicensed handyman tackle. We do it right.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>What We Handle</h3>
              <ul className="included-list">
                {[
                  'Indoor lighting upgrades (recessed, dimmer, fan)',
                  'Exterior security and landscape lighting',
                  'Detached garage and workshop wiring',
                  'Barn and agricultural building electrical',
                  'ADU and accessory structure power',
                  'Hot tub and spa wiring (240V GFCI)',
                  'Subpanel installation for outbuildings',
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
          <span className="eyebrow">Why It Matters</span>
          <h2>Six Ways Good Electrical Work Transforms a Property</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { icon: '💡', title: 'Lighting Changes Everything', desc: 'The right lighting makes a home feel bigger, safer, and more livable. Recessed cans, dimmers, and under-cabinet LED aren\'t luxuries — they change how you experience your own space.' },
              { icon: '🔐', title: 'Security You Can Count On', desc: 'Motion-triggered exterior lighting and properly wired security cameras are proven deterrents. We wire your exterior so your lighting actually works when it\'s needed.' },
              { icon: '🏡', title: 'Outbuildings Add Real Value', desc: 'A properly wired shop, barn, or garage makes your property more functional and more valuable. Without power, those buildings underperform. With it, they become assets.' },
              { icon: '🛁', title: 'Hot Tubs Done Right', desc: 'A hot tub on a DIY or undersized circuit is a fire hazard and an insurance problem. A properly permitted 240V GFCI circuit done by a licensed electrician is the only safe way to do it.' },
              { icon: '🌿', title: 'Landscape Lighting Extends Your Outdoor Space', desc: 'Well-designed outdoor lighting extends the usable hours of your yard and patio. Low-voltage landscape systems, line-voltage accents, and path lights — we do all of it cleanly.' },
              { icon: '🏗️', title: 'ADU & Accessory Structures', desc: 'Adding a guest house, ADU, or accessory structure? It needs its own electrical service fed correctly from the main panel. We do this regularly across Skagit and Whatcom counties.' },
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

      <section className="section section--tinted">
        <div className="container">
          <span className="eyebrow">Frequently Asked</span>
          <h2>Lighting &amp; Outbuilding Questions</h2>
          <div style={{ marginTop: '36px', maxWidth: '780px' }}>
            <FAQAccordion faqs={[
              { q: 'Can you wire a detached garage or shop from my main panel?', a: 'Yes. We run a subpanel feed from your main panel to the outbuilding, install a properly-sized subpanel inside, and wire it for whatever you need — outlets, lighting, 240V tools. A permit is required for this work and we handle it.' },
              { q: 'Do I need a permit for a hot tub or spa?', a: 'Yes — hot tub wiring always requires a permit in Washington State. The circuit must be GFCI-protected at the panel, with proper disconnect placement and bonding. We do this by the book, which matters for both safety and your homeowner\'s insurance.' },
              { q: 'What kind of outdoor lighting can you install?', a: 'We install landscape lighting low-voltage systems, line-voltage path and accent lighting, exterior security lighting with motion sensors, and dusk-to-dawn exterior fixtures. We can also wire for outdoor outlets, exterior fans, and porch fixtures.' },
              { q: 'Can you wire a barn or agricultural outbuilding?', a: 'Yes. We\'ve wired barns, shops, greenhouses, and agricultural buildings across Skagit and Whatcom counties. This often involves running overhead or underground service from the main panel to a subpanel in the building, then wiring for lighting, outlets, and any 240V equipment.' },
            ]} />
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Have a Project in Mind?</h2>
            <p>Whether it&apos;s a barn subpanel or a hot tub circuit, we give you a clear quote before any work starts.</p>
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
