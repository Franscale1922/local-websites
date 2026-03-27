import type { Metadata } from 'next';
import FAQAccordion from '../../components/FAQAccordion';
import SiteFooter from '../../components/SiteFooter';
import SiteNav from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Electrical Repairs & Service Calls | Premier Electrical Services — Skagit County, WA',
  description: 'Electrical troubleshooting, repairs, and service calls across Skagit, Whatcom, Island, and San Juan counties. Tripped breakers, mystery outages, suspect work. Call (360) 421-5230.',
  alternates: { canonical: '/services/service-calls' },
  openGraph: { images: [{ url: '/images/svc-service-calls.jpg', width: 1200, height: 630, alt: 'Electrical repair and service call by Premier Electrical Services' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function ServiceCallsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How quickly can you get to me for a service call?', acceptedAnswer: { '@type': 'Answer', text: 'Most service calls are scheduled same day or next day. If you\'re dealing with a safety issue — burning smell, sparking outlets, a breaker that won\'t reset — call us directly at (360) 421-5230 and we\'ll prioritize accordingly.' } },
          { '@type': 'Question', name: 'What does a service call cost?', acceptedAnswer: { '@type': 'Answer', text: 'Our service calls start with a diagnostic visit. We\'ll tell you what we find and what it will cost to fix before any work begins. No surprises, no hourly billing that keeps running while you sit and wait.' } },
          { '@type': 'Question', name: 'Will you touch work left behind by a previous electrician?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — that\'s actually one of the most common calls we get. We assess the previous work, tell you honestly what\'s wrong (and what\'s fine), and fix what needs fixing. We don\'t throw everything out if it doesn\'t need to be replaced.' } },
          { '@type': 'Question', name: 'Do you work on rental properties and investment homes?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work with landlords, property managers, and real estate investors across Skagit and Whatcom counties. We understand the need for turnaround speed, written documentation, and communication that helps you manage from a distance.' } },
          { '@type': 'Question', name: 'What should I do if I smell burning from an outlet or panel?', acceptedAnswer: { '@type': 'Answer', text: 'Turn off the circuit at the breaker if you can safely do so. Do not use the outlet. If the smell is strong or persistent, or if you see scorch marks or smoke, leave the home and call 911. Then call us. Burning smells from electrical components indicate a serious issue and should never be ignored.' } },
          { '@type': 'Question', name: 'Why does my breaker keep tripping?', acceptedAnswer: { '@type': 'Answer', text: 'A breaker that repeatedly trips is telling you something. Common causes include an overloaded circuit (too many appliances on one circuit), a short circuit (usually from a wiring fault or damaged device), or a ground fault. Some older breakers also fail progressively. We diagnose the cause and tell you exactly what needs to happen.' } },
          { '@type': 'Question', name: 'Why won\'t my GFCI outlet reset?', acceptedAnswer: { '@type': 'Answer', text: 'A GFCI outlet that won\'t reset usually means it has tripped in response to a real fault on the circuit — or it has failed. Try pressing the reset button firmly. If it won\'t reset, check if there are other GFCI outlets on the same circuit that may have tripped first. If nothing works, the outlet or wiring needs service. Call us.' } },
          { '@type': 'Question', name: 'Do you handle electrical work for home sales and real estate transactions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — this is a significant part of our service call work. Home inspectors frequently flag electrical issues during the sale process. We respond quickly, provide written documentation of work performed, and coordinate with your agent or escrow timeline if needed.' } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Electrical Service Calls & Repairs',
        description: 'Electrical troubleshooting, repairs, and same-day service calls in Skagit, Whatcom, Island, and San Juan counties. Tripped breakers, mystery outages, suspect prior work, and GFCI issues diagnosed and fixed.',
        provider: { '@type': 'ElectricalContractor', name: 'Premier Electrical Services', telephone: '+13604215230', url: 'https://premierelectricalsvc.com' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Skagit County, WA' },
          { '@type': 'AdministrativeArea', name: 'Whatcom County, WA' },
          { '@type': 'AdministrativeArea', name: 'Island County, WA' },
          { '@type': 'AdministrativeArea', name: 'San Juan County, WA' },
        ],
        url: 'https://premierelectricalsvc.com/services/service-calls',
        serviceType: 'Electrical Repair and Service Call',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
          { '@type': 'ListItem', position: 3, name: 'Service Calls & Repairs', item: '/services/service-calls' },
        ],
      }) }} />
      <SiteNav alwaysScrolled activePath="/services" />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/svc-service-calls.jpg"
          alt="Electrician troubleshooting electrical fault"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/services" className="breadcrumb">← All Services</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Service Calls &amp; Repairs · Same-Day Response
          </div>
          <h1>Electrical Repairs &amp; Service Calls. We Find the Problem, Fix It, and Tell You What Happened.</h1>
          <p className="county-hero-sub">
            Tripped breakers that won&apos;t reset. Outlets that stopped working. Lights that flicker. Questionable work left behind by a previous contractor. We troubleshoot the problem and fix it — same day on most service calls.
          </p>
          <div className="county-hero-ctas">
            <a href="/contact" className="btn btn-primary">Schedule a Service Call</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-body">
              <span className="eyebrow">What We Fix</span>
              <h2>If Something Feels Off, It Probably Is.</h2>
              <p className="service-intro">
                Electrical problems don&apos;t always announce themselves loudly. Sometimes it&apos;s a breaker that trips under no obvious load. Sometimes it&apos;s a dedicated circuit that worked yesterday and doesn&apos;t today. Sometimes it&apos;s an outlet that was wired backward by someone three owners ago and you&apos;re only finding out now when you plug in a surge protector and it throws a fault.
              </p>
              <p className="service-intro">
                We&apos;ve seen — and fixed — all of it. We bring the right diagnostic tools, we don&apos;t guess, and we explain what we find in plain language before we do any work. If it&apos;s a quick fix, you pay for a service call. If it&apos;s something larger, we quote it before we start.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>Common Service Calls</h3>
              <ul className="included-list">
                {[
                  'Tripped breakers — reset & diagnose',
                  'Dead outlets, switches, or circuits',
                  'Flickering or buzzing lights',
                  'Burning smell from outlet or panel',
                  'GFCI outlet trips (bathroom, kitchen, exterior)',
                  'Suspect or sloppy prior contractor work',
                  'Pre-purchase electrical evaluations',
                  'Weird readings on EV chargers or appliances',
                ].map(b => (
                  <li key={b}><span className="included-check">✓</span>{b}</li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-primary" style={{ marginTop: '24px', width: '100%', textAlign: 'center', display: 'block' }}>
                Schedule a Service Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <span className="eyebrow">Warning Signs</span>
          <h2>When to Call Right Away</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { icon: '🔥', title: 'Burning Smell or Visible Scorch Marks', desc: 'This is a fire hazard. Stop using the outlet or switch immediately. Don\'t wait. Call us now.' },
              { icon: '⚡', title: 'Breaker That Won\'t Reset', desc: 'A breaker that trips immediately when you reset it means either the circuit is overloaded or there\'s a fault somewhere in the wiring. Either way, it needs diagnosis.' },
              { icon: '💡', title: 'Lights Dim When Appliances Run', desc: 'This typically means an inadequate panel, a loose neutral, or a shared circuit that\'s overloaded. Worth a call — it usually points to a fixable problem.' },
              { icon: '🌡️', title: 'Hot Outlets or Faceplates', desc: 'Outlets shouldn\'t feel warm. If they do, that\'s current leaking somewhere. Don\'t use the outlet. Get it looked at.' },
              { icon: '💦', title: 'GFCI That Keeps Tripping', desc: 'A GFCI outlet that won\'t stay reset usually means moisture intrusion or a wiring fault downstream. Don\'t keep resetting it — find out why.' },
              { icon: '🔍', title: 'Suspect Prior Electrical Work', desc: 'Bought a house with questionable wiring? We evaluate prior work, identify hazards, and document what needs to be fixed — no upsell, straight answers.' },
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
          <h2>Service Call Questions</h2>
          <div style={{ marginTop: '36px', maxWidth: '780px' }}>
            <FAQAccordion faqs={[
              { q: 'How quickly can you get to me for a service call?', a: 'Most service calls are scheduled same day or next day. If you\'re dealing with a safety issue — burning smell, sparking outlets, a breaker that won\'t reset — call us directly at (360) 421-5230 and we\'ll prioritize.' },
              { q: 'What does a service call cost?', a: 'Our service calls start with a diagnostic visit. We\'ll tell you what we find and what it will cost to fix before any work begins. No surprises, no hourly billing that keeps running while you wait.' },
              { q: 'Will you touch work left behind by a previous electrician?', a: 'Yes — that\'s one of the most common calls we get. We assess the previous work honestly, tell you what\'s wrong and what\'s fine, and fix what needs fixing. We don\'t replace everything if it doesn\'t need it.' },
              { q: 'Do you work on rental properties and investment homes?', a: 'Yes. We work with landlords, property managers, and investors across Skagit and Whatcom counties. We understand the need for turnaround speed, written documentation, and remote communication.' },
              { q: 'What should I do if I smell burning from an outlet or panel?', a: 'Turn off the circuit if you can safely do so. Do not use the outlet. If the smell is strong, persistent, or accompanied by scorch marks, leave the home and call 911. Then call us. Electrical burning smells indicate a serious issue that should never be ignored.' },
              { q: 'Why does my breaker keep tripping?', a: 'A repeatedly-tripping breaker is telling you something. Common causes: overloaded circuit (too many appliances), a short circuit (wiring fault or damaged device), or a ground fault. Some aging breakers also fail progressively. We diagnose the cause and tell you exactly what needs to happen.' },
              { q: 'Why won\'t my GFCI outlet reset?', a: 'A GFCI outlet that won\'t reset usually means it tripped in response to a real fault on the circuit — or it has failed. Try pressing the reset button firmly. If it still won\'t reset, check if there\'s another GFCI upstream on the same circuit. If nothing works, call us.' },
              { q: 'Do you handle electrical repairs for home sales?', a: 'Yes — home inspector findings are a significant part of our service call work. We respond quickly, provide written documentation of the work performed, and coordinate with your agent or escrow timeline as needed.' },
            ]} />
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Something Doesn&apos;t Seem Right?</h2>
            <p>Call us. We respond same day on most service calls. We pick up the phone.</p>
          </div>
          <div className="cta-strip-actions">
            <a href={PHONE_TEL} className="btn btn-primary">Call {PHONE}</a>
            <a href="/contact" className="btn btn-ghost-light">Send a Message</a>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
