import type { Metadata } from 'next';
import FAQAccordion from '../../components/FAQAccordion';
import SiteFooter from '../../components/SiteFooter';
import SiteNav from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Historic & Older Home Rewiring | Premier Electrical Services — Skagit County, WA',
  description: 'Knob-and-tube wiring, aluminum wiring, fuse box replacement for historic and older homes in Skagit, Whatcom, and Island counties. Specialists — not generalists. Call (360) 421-5230.',
  alternates: { canonical: '/services/historic-home-rewiring' },
  openGraph: { images: [{ url: '/images/svc-historic.jpg', width: 1200, height: 630, alt: 'Historic home rewiring by Premier Electrical Services' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function HistoricHomeRewiringPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Is knob-and-tube wiring always dangerous?', acceptedAnswer: { '@type': 'Answer', text: 'Not inherently — undisturbed knob-and-tube in good condition can be low-risk. The problems come when insulation is added over it (trapping heat), when it has been added to by subsequent owners, or when modern loads are run through it. Let us assess yours specifically.' } },
          { '@type': 'Question', name: 'Will you damage my original plaster walls during a rewire?', acceptedAnswer: { '@type': 'Answer', text: 'We work in historic homes regularly and take wall damage seriously. We use low-impact fishing techniques and strategic access points. We cannot promise zero impact on older homes, but we keep it minimal and tell you upfront what to expect.' } },
          { '@type': 'Question', name: 'How long does a full home rewire take?', acceptedAnswer: { '@type': 'Answer', text: 'A full residential rewire typically takes 3–7 days depending on home size and accessibility. We keep power to parts of the house during work where possible.' } },
          { '@type': 'Question', name: 'What is aluminum wiring remediation?', acceptedAnswer: { '@type': 'Answer', text: 'Many homes from the 1960s–70s have aluminum wiring for branch circuits. Aluminum expands and contracts differently than copper, causing loose connections and fire risk. The standard fix is pigtailing — connecting aluminum to short copper leads with rated AlumiConn connectors at every device and outlet. We do this correctly and documentably.' } },
          { '@type': 'Question', name: 'Can I add insulation to walls with knob-and-tube wiring?', acceptedAnswer: { '@type': 'Answer', text: 'No. This is actually a code violation in most jurisdictions — and a documented fire hazard. Knob-and-tube wiring depends on open-air cooling. Adding insulation traps heat and degrades insulation. If you\'re doing an insulation project in an older home, the wiring needs to be addressed first.' } },
          { '@type': 'Question', name: 'How much does a full home rewire cost?', acceptedAnswer: { '@type': 'Answer', text: 'A full rewire of a 1,500 sq ft historic home typically runs $8,000–$20,000 depending on accessibility, the extent of existing wiring, and the panel condition. We give you a detailed written quote before work begins. We can also discuss phased approaches if budget is a consideration.' } },
          { '@type': 'Question', name: 'Does my homeowner\'s insurance require me to rewire?', acceptedAnswer: { '@type': 'Answer', text: 'Many insurers refuse to cover or significantly increase premiums on homes with known knob-and-tube or aluminum wiring issues. Before canceling coverage, they may require a licensed inspection and potentially remediation. We can provide documentation of our work for your insurer.' } },
          { '@type': 'Question', name: 'What is cloth-insulated wiring and is it dangerous?', acceptedAnswer: { '@type': 'Answer', text: 'Cloth-insulated wiring (also called cloth wiring or rubber sheathed wiring) was used from the early 1900s through the 1950s. Over time, the rubber insulation deteriorates, becomes brittle, and can crack — exposing live conductors. It\'s not an immediate fire hazard in all cases, but it should be evaluated by a licensed electrician and addressed before it fails.' } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Historic & Older Home Rewiring',
        description: 'Knob-and-tube wiring replacement, aluminum wiring remediation, and full home rewires for historic and older homes in Skagit, Whatcom, and Island counties. Specialists in complex, older properties other electricians decline.',
        provider: { '@type': 'ElectricalContractor', name: 'Premier Electrical Services', telephone: '+13604215230', url: 'https://premierelectricalsvc.com' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Skagit County, WA' },
          { '@type': 'AdministrativeArea', name: 'Whatcom County, WA' },
          { '@type': 'AdministrativeArea', name: 'Island County, WA' },
          { '@type': 'AdministrativeArea', name: 'San Juan County, WA' },
        ],
        url: 'https://premierelectricalsvc.com/services/historic-home-rewiring',
        serviceType: 'Electrical Rewiring',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Get Knob-and-Tube or Old Wiring Assessed and Replaced',
        description: 'Premier Electrical Services evaluates and rewires historic and older homes in NW Washington — safely, minimally invasively, and with all required permits.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Schedule a Wiring Assessment', text: 'Call or submit a request. Tell us the age of your home and what you know about the wiring. We come out and assess what you actually have — no blanket upsells.' },
          { '@type': 'HowToStep', position: 2, name: 'Receive a Clear Written Plan', text: 'We tell you exactly what is a real hazard, what is safe to leave, and what a phased or full rewire would cost. You decide what makes sense.' },
          { '@type': 'HowToStep', position: 3, name: 'Rewire — Permitted & Inspector-Approved', text: 'We do the work with minimal wall damage where possible, pull the permit, and coordinate the inspection. You get documented, code-compliant wiring.' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
          { '@type': 'ListItem', position: 3, name: 'Historic Home Rewiring', item: '/services/historic-home-rewiring' },
        ],
      }) }} />
      <SiteNav alwaysScrolled activePath="/services" />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/svc-historic.jpg"
          alt="Electrician inspecting old knob-and-tube wiring in historic home"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/services" className="breadcrumb">← All Services</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Historic &amp; Older Homes · Specialists, Not Generalists
          </div>
          <h1>Historic &amp; Older Home Rewiring. The Work Other Electricians Pass On.</h1>
          <p className="county-hero-sub">
            Knob-and-tube wiring. Cloth-insulated wires. Aluminum branch circuits. Fuse boxes from 1952. We specialize in the complex, older, and historic properties that most electricians decline. With nearly 60 years of combined experience, we&apos;ve seen all of it.
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
              <h2>Old Wiring Isn&apos;t Just Inconvenient. It&apos;s a Fire Risk.</h2>
              <p className="service-intro">
                Northwest Washington has tens of thousands of homes built before 1960 — in Anacortes, Bellingham, Sedro-Woolley, Mount Vernon, and throughout the islands. Many of them still have original knob-and-tube wiring, aluminum branch circuits, or outdated cloth-covered wires that were never designed for modern electrical loads.
              </p>
              <p className="service-intro">
                Knob-and-tube wiring isn&apos;t inherently dangerous when left alone — but the moment someone runs new circuits over it, insulates over it, or starts adding modern appliances, the risk rises sharply. Aluminum wiring from the 1960s and &apos;70s is a known fire hazard when connected to devices rated only for copper. We know how each of these systems behaves, what to look for, and how to bring them safely into the modern era.
              </p>
              <p className="service-intro">
                We work on lathe-and-plaster walls, original hardwood floors, and tight crawlspaces. We&apos;re not guessing — we&apos;ve done this work hundreds of times on homes that look just like yours.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>What We Handle</h3>
              <ul className="included-list">
                {[
                  'Full and partial home rewires',
                  'Knob-and-tube replacement',
                  'Aluminum branch circuit remediation (pigtailing)',
                  'Cloth-wiring evaluation and replacement',
                  'Fuse box to modern breaker panel upgrades',
                  'Work in lathe/plaster, original hardwood, tight crawlspaces',
                  'Historic district code compliance coordination',
                  'Permit pulled, inspector-approved, A+ BBB',
                ].map(b => (
                  <li key={b}><span className="included-check">✓</span>{b}</li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-primary" style={{ marginTop: '24px', width: '100%', textAlign: 'center', display: 'block' }}>
                Schedule an Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <span className="eyebrow">Why It Matters</span>
          <h2>The Real Risks of Outdated Wiring</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { icon: '🔥', title: 'Fire Risk', desc: 'Knob-and-tube wiring covered by insulation and aluminum wiring with loose connections are among the leading causes of residential electrical fires.' },
              { icon: '🏦', title: 'Insurance Problems', desc: 'Many home insurers won\'t cover or will charge significantly higher premiums on homes with original knob-and-tube or known aluminum wiring issues.' },
              { icon: '🏷️', title: 'Resale Issues', desc: 'Home inspectors flag old wiring systems. Buyers ask for repairs or credits. A rewire before sale protects your equity.' },
              { icon: '🔌', title: 'Can\'t Support Modern Loads', desc: 'Pre-1960 wiring wasn\'t designed for EV chargers, heat pumps, or even a modern kitchen. Adding circuits on old systems is dangerous without upgrading.' },
              { icon: '📜', title: 'Code Non-Compliance', desc: 'Older wiring systems often don\'t meet current NEC requirements or Washington State amendments. Remodels and additions can trigger a required upgrade.' },
              { icon: '🔎', title: 'Unknown Prior Work', desc: 'Decades of add-ons, DIY work, and unlicensed modifications create hazards that are invisible until they\'re not. We find what others miss.' },
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
          <h2>Historic Home Wiring Questions</h2>
          <div style={{ marginTop: '36px', maxWidth: '780px' }}>
            <FAQAccordion faqs={[
              { q: 'Is knob-and-tube wiring always dangerous?', a: 'Not inherently — undisturbed knob-and-tube in good condition can be low-risk. The problems come when insulation is added over it (trapping heat), when it\'s been added to by subsequent owners, or when modern loads are run through it. Let us assess yours specifically.' },
              { q: 'Will you damage my original plaster walls?', a: 'We work in historic homes regularly and take wall damage seriously. We use low-impact fishing techniques and strategic access points. We can\'t promise zero impact on older homes, but we keep it minimal and tell you upfront what to expect.' },
              { q: 'How long does a full rewire take?', a: 'A full residential rewire typically takes 3–7 days depending on home size and accessibility. We keep power to parts of the house during work where possible.' },
              { q: 'What is aluminum wiring remediation?', a: 'Many homes from the 1960s–70s have aluminum wiring for branch circuits. Aluminum expands and contracts differently than copper, causing loose connections and fire risk. The standard fix is "pigtailing" — connecting aluminum to short copper leads with rated AlumiConn connectors at every device and outlet. We do this correctly and documentably.' },
              { q: 'Can I add insulation to walls with knob-and-tube wiring?', a: 'No — this is a code violation and documented fire hazard. Knob-and-tube wiring depends on open-air cooling. Adding insulation traps heat and degrades the wiring. If you\'re doing an insulation project in an older home, the wiring must be addressed first.' },
              { q: 'How much does a full home rewire cost?', a: 'A full rewire of a 1,500 sq ft historic home typically runs $8,000–$20,000 depending on accessibility, existing wiring, and panel condition. We give you a detailed written quote before work begins and can discuss phased approaches if budget is a consideration.' },
              { q: 'Does my homeowner\'s insurance require me to rewire?', a: 'Many insurers refuse coverage or significantly increase premiums on homes with knob-and-tube or aluminum wiring issues. Before canceling, they may require a licensed inspection and remediation. We provide documentation of all work for your insurer.' },
              { q: 'What is cloth-insulated wiring?', a: 'Cloth-insulated wiring was used from the early 1900s through the 1950s. Over time, the rubber insulation deteriorates, becomes brittle, and can crack — exposing live conductors. It\'s not always an immediate hazard, but it should be evaluated by a licensed electrician and addressed before it fails.' },
            ]} />
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Have an Older Home? Let&apos;s Take a Look.</h2>
            <p>Free assessment. We&apos;ll tell you exactly what you have, what the risks are, and what it would cost to fix it.</p>
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
