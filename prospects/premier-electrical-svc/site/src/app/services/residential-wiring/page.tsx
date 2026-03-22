import type { Metadata } from 'next';
import FAQAccordion from '../../components/FAQAccordion';
import SiteFooter from '../../components/SiteFooter';
import SiteNav from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Residential Electrical Wiring | Premier Electrical Services — Skagit County, WA',
  description: 'New construction wiring, complete home rewires, remodel rough-in and trim-out across Skagit, Whatcom, Island, and San Juan counties. Nearly 60 years of combined experience. Call (360) 421-5230.',
  alternates: { canonical: '/services/residential-wiring' },
  openGraph: { images: [{ url: '/images/svc-residential.jpg', width: 1200, height: 630, alt: 'Residential electrical wiring by Premier Electrical Services' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function ResidentialWiringPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Do you work with general contractors on new construction?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — frequently. We work alongside GCs on new builds across Skagit, Whatcom, and Snohomish counties. We pull the electrical permit, coordinate with the inspector, and show up on schedule for rough-in and trim-out. We communicate directly with your GC so nothing falls through the cracks.' } },
          { '@type': 'Question', name: 'How much does a full home rewire cost?', acceptedAnswer: { '@type': 'Answer', text: 'Full rewires vary widely depending on home size, existing wiring type, and accessibility. A 1,500 sq ft home might run $8,000–$18,000. We give you a detailed quote before any work starts — no vague ranges, no hidden add-ons.' } },
          { '@type': 'Question', name: 'Do you handle the permit for a remodel?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. In Washington State, most electrical work on a remodel requires a permit. We pull it, schedule the inspection, and make sure the work passes. You do not have to navigate the permitting process yourself.' } },
          { '@type': 'Question', name: 'Can you work in an occupied home during a remodel?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We are used to working in occupied homes and take extra care to minimize disruption. We cover floors, contain dust where possible, and we tell you upfront which circuits will be off and for how long.' } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
          { '@type': 'ListItem', position: 3, name: 'Residential Wiring', item: '/services/residential-wiring' },
        ],
      }) }} />
      <SiteNav alwaysScrolled activePath="/services" />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/svc-residential.jpg"
          alt="Electrician wiring a new residential home"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/services" className="breadcrumb">← All Services</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Residential Wiring · New Construction &amp; Rewires
          </div>
          <h1>Residential Electrical Wiring. Built Right, From the Ground Up.</h1>
          <p className="county-hero-sub">
            New construction, remodels, complete rewires, rough-in, and trim-out. Nearly 60 years of combined experience means we&apos;ve built them and rewired them — we know how they&apos;re supposed to work.
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
              <h2>From Rough-In to Trim-Out. We Do It All.</h2>
              <p className="service-intro">
                Residential wiring covers the full lifecycle of a home&apos;s electrical system. Whether you&apos;re building new, adding square footage, or gutting a home to the studs and starting over, we handle the entire electrical scope — new service entrance, panel, all branch circuits, outlets, switches, fixtures, and the final inspection.
              </p>
              <p className="service-intro">
                We serve general contractors and homeowners alike across Skagit, Whatcom, San Juan, Island, King, and Snohomish counties. We&apos;re reliable on schedule, clean in our work, and we communicate clearly with your GC if you have one. Permits are pulled before rough-in. Inspections are coordinated and passed — not just hoped for.
              </p>
              <p className="service-intro">
                For remodels, we&apos;re used to working in occupied homes. We minimize mess, we protect your floors and walls, and we tell you upfront what to expect when we open walls. No surprises.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>What&apos;s Included</h3>
              <ul className="included-list">
                {[
                  'New construction wiring — ground up',
                  'Remodel and addition rough-in',
                  'Complete home rewires',
                  'Trim-out — outlets, switches, fixtures',
                  'Service entrance and main panel installation',
                  'Bathroom, kitchen, and outdoor GFCI circuits',
                  'Low-voltage rough-in (data, coax, doorbell)',
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

      <section className="section section--tinted">
        <div className="container">
          <span className="eyebrow">Why It Matters</span>
          <h2>Residential Wiring Done Right the First Time.</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { icon: '🏗️', title: 'New Construction', desc: 'We work directly with your builder or GC. Rough-in is scheduled before drywall. We show up on time, work clean, and pass inspection without re-dos.' },
              { icon: '🔧', title: 'Remodels & Additions', desc: 'Kitchen remodel? Master bath addition? Home office build-out? We integrate new circuits cleanly into your existing system and pull the required permits.' },
              { icon: '🏠', title: 'Complete Rewires', desc: 'Sometimes the right answer is starting over. Whether it\'s aluminum wiring, knob-and-tube, or just decades of amateur work, we\'ll give you a solid electrical system from panel to outlets.' },
              { icon: '✅', title: 'Permitted & Inspected', desc: 'Every residential wiring job we do is permitted and inspector-approved. That protects your homeowner\'s insurance, your resale value, and your family.' },
              { icon: '📐', title: 'Built to Current Code', desc: 'Washington State adopts NEC updates regularly. We wire to the current code — not whatever the original builder used 30 years ago. Your inspector agrees.' },
              { icon: '🤝', title: 'GC-Friendly Scheduling', desc: 'We coordinate directly with your general contractor. Clear timelines, no-surprises communication, and we don\'t create delays on your build schedule.' },
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
          <h2>Residential Wiring Questions</h2>
          <div style={{ marginTop: '36px', maxWidth: '780px' }}>
            <FAQAccordion faqs={[
              { q: 'Do you work with general contractors on new construction?', a: 'Yes — frequently. We work alongside GCs on new builds across Skagit, Whatcom, and Snohomish counties. We pull the electrical permit, coordinate with the inspector, and show up on schedule for rough-in and trim-out. We communicate directly with your GC so nothing falls through the cracks.' },
              { q: 'How much does a full home rewire cost?', a: 'Full rewires vary widely depending on home size, existing wiring type, and accessibility. A 1,500 sq ft home might run $8,000–$18,000. We give you a detailed quote before any work starts — no vague ranges, no hidden add-ons.' },
              { q: 'Do you handle the permit for a remodel?', a: 'Yes. In Washington State, most electrical work on a remodel requires a permit. We pull it, schedule the inspection, and make sure the work passes. You don\'t have to navigate the permitting process yourself.' },
              { q: 'Can you work in an occupied home during a remodel?', a: 'Yes. We\'re used to working in occupied homes and take extra care to minimize disruption. We cover floors, contain dust where possible, and we tell you upfront which circuits will be off and for how long.' },
            ]} />
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Starting a Build or Remodel?</h2>
            <p>Free estimate. We pull the permit. We pass the inspection. Let&apos;s talk about your project.</p>
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
