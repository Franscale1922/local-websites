/**
 * SERVICE AREA PAGE
 * /service-area
 *
 * Full service area page — counties, cities, map, local SEO.
 * Replace all [PLACEHOLDERS] with real content.
 */

export const metadata = {
  title: 'Service Area | [Business Name] — [Region/State]',
  description: '[Business Name] serves [list of counties/cities]. Licensed [service type] for [area]. Call (XXX) XXX-XXXX.',
};

const PHONE = '(XXX) XXX-XXXX';
const PHONE_TEL = 'tel:+1XXXXXXXXXX';

const COUNTIES = [
  { name: '[County 1]', cities: ['[City A]', '[City B]', '[City C]'] },
  { name: '[County 2]', cities: ['[City A]', '[City B]'] },
  { name: '[County 3]', cities: ['[City A]', '[City B]', '[City C]', '[City D]'] },
];

const MAP_EMBED = 'https://maps.google.com/maps?q=CITY+STATE&output=embed';

export default function ServiceAreaPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Service Area</span>
          <h1>[Area Headline — e.g. "From Bellingham to Seattle. We Cover the Region."]</h1>
          <p className="page-hero-sub">
            [One sentence — where you&apos;re based and the geography you cover.]
          </p>
        </div>
      </section>

      {/* MAP + COUNTY LIST */}
      <section className="section">
        <div className="container">
          <div className="area-grid">
            <div>
              <h2 style={{ marginBottom: '24px' }}>Counties We Serve</h2>
              {COUNTIES.map((county) => (
                <div key={county.name} className="county-block">
                  <div className="county-item">
                    <div className="county-dot" />
                    <strong>{county.name}</strong>
                  </div>
                  <div className="county-cities">
                    {county.cities.join(' · ')}
                  </div>
                </div>
              ))}
              <div style={{ marginTop: '32px' }}>
                <a href="/contact" className="btn btn-primary">Schedule Service</a>
              </div>
            </div>
            <div className="area-map">
              <iframe
                src={MAP_EMBED}
                title="[Business Name] service area map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NOT SURE IF WE SERVE YOUR AREA */}
      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-text">
            <h2>Not Sure if We Cover Your Area?</h2>
            <p>Call us — if we can get to you, we will. We&apos;re based in [city] and travel throughout [region].</p>
          </div>
          <div className="cta-strip-actions">
            <a href={PHONE_TEL} className="btn btn-primary">Call {PHONE}</a>
            <a href="/contact" className="btn btn-ghost-light">Send a Message</a>
          </div>
        </div>
      </div>
    </main>
  );
}
