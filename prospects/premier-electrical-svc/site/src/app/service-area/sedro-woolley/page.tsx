import type { Metadata } from 'next';
import SiteFooter from '../../components/SiteFooter';
import SiteNav from '../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Electrician in Sedro-Woolley, WA | Premier Electrical Services',
  description: 'Licensed electricians serving Sedro-Woolley, WA — historic home rewiring, panel upgrades, generator installation, EV charging, and rural property wiring. Award-winning Skagit County contractor. Call (360) 421-5230.',
  alternates: { canonical: '/service-area/sedro-woolley' },
  openGraph: { images: [{ url: '/images/hero-skagit.jpg', width: 1200, height: 630, alt: 'Sedro-Woolley WA — Premier Electrical Services service area' }] },
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';

export default function SedroWoolleyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Service Area', item: '/service-area' },
          { '@type': 'ListItem', position: 3, name: 'Sedro-Woolley', item: '/service-area/sedro-woolley' },
        ],
      }) }} />
      <SiteNav alwaysScrolled activePath="/service-area" />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/hero-skagit.jpg"
          alt="Sedro-Woolley Washington — upper Skagit Valley foothills"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <a href="/service-area" className="breadcrumb">← All Service Areas</a>
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Sedro-Woolley, WA
          </div>
          <h1>Sedro-Woolley Electrician. Old Homes, Rural Properties, Award-Winning Work.</h1>
          <p className="county-hero-sub">
            Sedro-Woolley has some of the oldest homes in Skagit County — and some of the most complex electrical work. Premier Electrical Services specializes in historic rewiring, rural property electrical, and the work that other contractors decline to take on.
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
              <span className="eyebrow">Serving Sedro-Woolley</span>
              <h2>Sedro-Woolley&rsquo;s Old Housing Stock Is Our Specialty.</h2>
              <p className="service-intro">
                Sedro-Woolley was established in the 1880s and its housing stock reflects that history. Many homes in the downtown and surrounding neighborhoods were built in the early 20th century and still have original or partially-updated electrical systems — knob-and-tube wiring, fuse boxes, aluminum wiring from the 1960s and 70s, and decades of layered add-ons by previous owners.
              </p>
              <p className="service-intro">
                We specialize in exactly this work. We assess older systems honestly — not every house needs a full rewire, and we&rsquo;ll tell you what you actually have and what the real risks are. When rewiring is the right answer, we do it cleanly, with minimal wall damage where possible, and with all required permits and inspections.
              </p>
              <p className="service-intro">
                Beyond historic homes, Sedro-Woolley also has significant rural acreage with barns, shops, and agricultural buildings that need proper electrical service. We wire rural properties across the upper Skagit Valley.
              </p>
            </div>
            <div className="service-detail-included">
              <h3>Services in Sedro-Woolley</h3>
              <ul className="included-list">
                {[
                  'Historic & older home rewiring (knob-and-tube)',
                  'Electrical panel upgrades & fuse box replacement',
                  'Generator hookups & transfer switches (rural power)',
                  'Barn, shop & agricultural building wiring',
                  'EV charging station installation',
                  'Hot tub & spa wiring',
                  'Service calls & electrical repairs',
                  'A+ BBB rated, Lic. PREMIES821LL',
                ].map(b => (
                  <li key={b}><span className="included-check">✓</span>{b}</li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-primary" style={{ marginTop: '24px', width: '100%', textAlign: 'center', display: 'block' }}>
                Get a Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="trust-strip">
        {[
          { label: '3× Best of the Best', sub: 'Skagit Valley — 2023 · 2024 · 2025', svg: <svg key="t" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4a2 2 0 01-2-2V5h4"/><path d="M18 9h2a2 2 0 002-2V5h-4"/><path d="M6 5h12v6a6 6 0 01-12 0V5z"/><path d="M12 17v4"/><path d="M8 21h8"/></svg> },
          { label: 'Historic Home Specialists', sub: 'Knob-and-tube, aluminum wiring', svg: <svg key="h" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
          { label: 'Rural Property Experience', sub: 'Barns, shops, ag buildings', svg: <svg key="r" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2"/><path d="M16 7V5a2 2 0 00-4 0v2"/><path d="M8 7V5a2 2 0 00-4 0v2"/></svg> },
          { label: 'Same-Day Response', sub: 'Most service requests', svg: <svg key="s" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
        ].map(t => (
          <div key={t.label} className="trust-strip-item">
            <div className="trust-strip-icon">{t.svg}</div>
            <div className="trust-strip-text"><span>{t.label}</span>{t.sub}</div>
          </div>
        ))}
      </div>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>In Sedro-Woolley? Old Wiring or New Project — We Handle It.</h2>
            <p>Free estimates, honest assessments, and permitted work every time. We don&rsquo;t walk away from the hard jobs.</p>
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
