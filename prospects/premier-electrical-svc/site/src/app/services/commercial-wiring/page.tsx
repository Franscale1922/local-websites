import type { Metadata } from 'next';
import FAQAccordion from '../../components/FAQAccordion';
import SiteFooter from '../../components/SiteFooter';
import SiteNav from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Commercial Electrical Services | Premier Electrical Services — Skagit County, WA',
  description: 'Commercial wiring, tenant improvements, code compliance, and commercial electrical systems in Skagit, Whatcom, Snohomish, and King counties. Licensed commercial electricians. Call (360) 421-5230.',
  alternates: { canonical: '/services/commercial-wiring' },
  openGraph: { images: [{ url: '/images/svc-commercial.jpg', width: 1200, height: 630, alt: 'Commercial electrical wiring by Premier Electrical Services' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function CommercialWiringPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Do you work directly with general contractors?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — frequently. We coordinate scheduling with your GC, pull the electrical permit before rough-in begins, and communicate proactively so we do not create bottlenecks on your timeline. We\'ve worked on restaurant buildouts, office TIs, retail spaces, daycares, and more.' } },
          { '@type': 'Question', name: 'Do you handle commercial permits?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We pull all required electrical permits for commercial work in Skagit, Whatcom, and Snohomish counties. We schedule the inspection and ensure the work is properly documented — you do not have to manage that process.' } },
          { '@type': 'Question', name: 'What types of commercial projects do you take on?', acceptedAnswer: { '@type': 'Answer', text: 'Tenant improvements, new construction, restaurant wiring (including hood suppression tie-ins), retail lighting, office builds, daycares, and light industrial. We work cleanly, on schedule, and alongside GCs without creating friction on the jobsite.' } },
          { '@type': 'Question', name: 'Do you provide quotes for commercial work?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — free estimates on commercial projects. We walk the space, understand the scope, and give you a clear number before any work starts. For GC work, we can provide bid documents as needed.' } },
          { '@type': 'Question', name: 'What counties and areas do you cover for commercial work?', acceptedAnswer: { '@type': 'Answer', text: 'Our primary commercial service area is Skagit, Whatcom, and Snohomish counties, with occasional work in King County for larger projects. Within those areas, we serve businesses of all sizes from main street retail in Mount Vernon and Burlington to commercial corridors in Bellingham and Marysville.' } },
          { '@type': 'Question', name: 'How do you handle commercial projects on a tight construction schedule?', acceptedAnswer: { '@type': 'Answer', text: 'We\'ve worked on enough TI buildouts to know that showing up late or causing delays damages the entire project. We confirm your schedule in advance, pull permits before rough-in begins, and communicate proactively with your GC about any issues. If something changes on our end, you hear from us before it becomes a problem.' } },
          { '@type': 'Question', name: 'Do you wire fire suppression systems?', acceptedAnswer: { '@type': 'Answer', text: 'We provide the electrical tie-in for fire suppression systems in commercial kitchens and other applications. The suppression system itself is typically installed by a licensed fire suppression contractor — we coordinate with that contractor for the electrical connection, interlock wiring, and related work.' } },
          { '@type': 'Question', name: 'Can you provide electrical bid documents for a commercial project?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — we can provide formatted bid documentation for commercial projects where that is required. If you\'re a GC putting Together a bid package or a property owner going through a formal comparison process, let us know when you request the estimate.' } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Commercial Electrical Services',
        description: 'Commercial wiring, tenant improvements, new construction, restaurant wiring, and code compliance across Skagit, Whatcom, Snohomish, and King counties. Licensed commercial electricians.',
        provider: { '@type': 'ElectricalContractor', name: 'Premier Electrical Services', telephone: '+13604215230', url: 'https://premierelectricalsvc.com' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Skagit County, WA' },
          { '@type': 'AdministrativeArea', name: 'Whatcom County, WA' },
          { '@type': 'AdministrativeArea', name: 'Snohomish County, WA' },
          { '@type': 'AdministrativeArea', name: 'King County, WA' },
        ],
        url: 'https://premierelectricalsvc.com/services/commercial-wiring',
        serviceType: 'Commercial Electrical Wiring',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
          { '@type': 'ListItem', position: 3, name: 'Commercial Wiring', item: '/services/commercial-wiring' },
        ],
      }) }} />
      <SiteNav alwaysScrolled activePath="/services" />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/svc-commercial.jpg"
          alt="Commercial electrical wiring installation"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/services" className="breadcrumb">← All Services</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Commercial Electrical · Skagit, Whatcom &amp; Snohomish
          </div>
          <h1>Commercial Electrical Services. Code-Compliant and Done on Schedule.</h1>
          <p className="county-hero-sub">
            Restaurants, daycares, retail buildouts, offices, and multi-tenant commercial spaces. We&apos;ve wired them all across Skagit, Whatcom, and Snohomish counties. Licensed commercial work — not residential thinking applied to commercial problems.
          </p>
          <div className="county-hero-ctas">
            <a href="/contact" className="btn btn-primary">Request a Commercial Quote</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-body">
              <span className="eyebrow">The Service</span>
              <h2>Commercial Electrical Isn&apos;t Just Residential at Scale.</h2>
              <p className="service-intro">
                Commercial properties have different wiring requirements, different load profiles, and different code implications than residential. We work directly with property owners, general contractors, and tenants on new buildouts, tenant improvements, and ongoing maintenance.
              </p>
              <p className="service-intro">
                From Mount Vernon to Everett, we&apos;ve handled the electrical on restaurants (hood exhaust tie-ins, commercial refrigeration, dishwasher circuits), daycares (GFCI compliance, arc-fault coverage), office remodels (panel additions, data and communications rough-in), and retail spaces (exterior signage power, track lighting, POS outlet placement).
              </p>
              <p className="service-intro">
                We coordinate with your GC and your local AHJ (Authority Having Jurisdiction), pull the required permits, and deliver a finished package that passes inspection. No re-dos.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>What We Handle</h3>
              <ul className="included-list">
                {[
                  'New commercial construction wiring',
                  'Tenant improvement electrical (TI buildouts)',
                  'Restaurant and food service wiring',
                  'Retail lighting, signage power, POS circuits',
                  'Office electrical remodels',
                  'Fire suppression system wiring',
                  'Exterior security and parking lot lighting',
                  'Panel upgrades and subpanels for commercial spaces',
                ].map(b => (
                  <li key={b}><span className="included-check">✓</span>{b}</li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-primary" style={{ marginTop: '24px', width: '100%', textAlign: 'center', display: 'block' }}>
                Request a Commercial Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <span className="eyebrow">Industries We Serve</span>
          <h2>We Know Your Industry&apos;s Electrical Requirements.</h2>
          <div className="why-grid" style={{ marginTop: '40px' }}>
            {[
              { icon: '🍽️', title: 'Restaurants & Food Service', desc: 'Hood suppression tie-ins, commercial refrigeration, dishwashers, separate circuits for cooking equipment. We know the health department requirements.' },
              { icon: '🏥', title: 'Daycares & Healthcare', desc: 'GFCI and AFCI requirements are more extensive in childcare and healthcare settings. We stay current on NEC and state amendments.' },
              { icon: '🏬', title: 'Retail & Storefront', desc: 'Track lighting, exterior signage, interior feature lighting, accessible outlet placement, and POS-ready circuits throughout.' },
              { icon: '🏗️', title: 'GC & Tenant Improvements', desc: 'We work cleanly alongside general contractors on TI buildouts. Coordinated scheduling, clear communication, permits in order before rough-in starts.' },
              { icon: '🏢', title: 'Offices & Professional Spaces', desc: 'Data room power, dedicated circuits for server equipment, structured wiring rough-in, and clean lighting grids that your team actually wants to work in.' },
              { icon: '🔒', title: 'Security & Access Systems', desc: 'Exterior camera wiring, card-reader rough-in, emergency lighting, exit sign circuits — we coordinate with your security contractor so it all lines up.' },
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
          <h2>Commercial Electrical Questions</h2>
          <div style={{ marginTop: '36px', maxWidth: '780px' }}>
            <FAQAccordion faqs={[
              { q: 'Do you work directly with general contractors?', a: 'Yes — frequently. We coordinate scheduling with your GC, pull the electrical permit before rough-in begins, and communicate proactively so we don\'t create bottlenecks on your timeline. We\'ve worked on restaurant buildouts, office TIs, retail spaces, daycares, and more.' },
              { q: 'Do you handle commercial permits?', a: 'Yes. We pull all required electrical permits for commercial work in Skagit, Whatcom, and Snohomish counties. We schedule the inspection and ensure the work is properly documented — you don\'t have to manage that process.' },
              { q: 'What types of commercial projects do you take on?', a: 'Tenant improvements, new construction, restaurant wiring (including hood suppression tie-ins), retail lighting, office builds, daycares, and light industrial. We work cleanly, on schedule, and alongside GCs without friction.' },
              { q: 'Do you provide quotes for commercial work?', a: 'Yes — free estimates on commercial projects. We walk the space, understand the scope, and give you a clear number before any work starts. For GC work, we can provide bid documents as needed.' },
              { q: 'What counties do you cover for commercial work?', a: 'Our primary commercial service area is Skagit, Whatcom, and Snohomish counties, with occasional King County work. We serve businesses along every major corridor, from downtown Mount Vernon and Burlington to commercial areas in Bellingham and Marysville.' },
              { q: 'How do you handle tight construction schedules?', a: 'We show up when we say we will, pull permits before rough-in begins, and communicate proactively with your GC. If something changes, you hear from us before it becomes a problem on your timeline.' },
              { q: 'Do you wire fire suppression systems?', a: 'We provide the electrical tie-in for fire suppression systems in commercial kitchens and other applications. The suppression system itself is installed by a licensed fire suppression contractor — we coordinate the electrical connection, interlock wiring, and related work.' },
              { q: 'Can you provide electrical bid documents?', a: 'Yes — we can provide formatted bid documentation for commercial projects where that is required. If you\'re going through a formal bid comparison process, just let us know when you request the estimate.' },
            ]} />
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Need a Commercial Electrical Contractor?</h2>
            <p>Licensed, bonded, and experienced across Skagit, Whatcom, and Snohomish counties. Let&apos;s talk about your project.</p>
          </div>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-primary">Request a Commercial Quote</a>
            <a href={PHONE_TEL} className="btn btn-ghost-light">Call {PHONE}</a>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
