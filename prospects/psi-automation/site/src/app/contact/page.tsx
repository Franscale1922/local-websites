/**
 * CONTACT PAGE
 * /contact
 *
 * Standalone contact page — form, phone, address, map.
 * Replace all [PLACEHOLDERS] with real content.
 */

export const metadata = {
  title: 'Contact | Get a Free Estimate — [Business Name]',
  description: 'Contact [Business Name] for a free estimate. [Phone]. Serving [area]. We respond same day.',
};

const CONTACT = {
  phone: '(XXX) XXX-XXXX',
  phoneTel: 'tel:+1XXXXXXXXXX',
  email: 'info@businessdomain.com',
  address: '123 Main St, City, ST XXXXX',
  mapEmbed: 'https://maps.google.com/maps?q=CITY+STATE&output=embed',
  license: 'Lic. XXXXXXXXXX',
  serviceArea: '[Service area description — e.g. "Serving Skagit, Whatcom, and Island counties."]',
};

const SERVICE_TYPES = [
  'Select a service type...',
  '[Service Type 1]',
  '[Service Type 2]',
  '[Service Type 3]',
  'Other',
];

export default function ContactPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact Us</span>
          <h1>Get a Free Estimate</h1>
          <p className="page-hero-sub">
            We respond same day on most requests. Prefer to call? We pick up.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="section" style={{ background: '#F7F8FA' }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Reach Us Directly</h2>
              <div className="contact-detail">
                <div className="contact-detail-icon">📞</div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Phone</div>
                  <div className="contact-detail-value">
                    <a href={CONTACT.phoneTel}>{CONTACT.phone}</a>
                  </div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">✉️</div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Email</div>
                  <div className="contact-detail-value">
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Address</div>
                  <div className="contact-detail-value">{CONTACT.address}</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">🗺️</div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Service Area</div>
                  <div className="contact-detail-value">{CONTACT.serviceArea}</div>
                </div>
              </div>
              <div className="license-badge">
                <span className="check">✓</span> {CONTACT.license} — Licensed, Bonded & Insured
              </div>
              <div className="area-map" style={{ marginTop: '32px', height: '260px' }}>
                <iframe
                  src={CONTACT.mapEmbed}
                  title="[Business Name] location"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="contact-form">
              <h2>Tell Us What You Need</h2>
              <p className="contact-form-sub">We&apos;ll get back to you fast — usually same day.</p>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name</label>
                    <input id="contact-name" type="text" placeholder="Jane Smith" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input id="contact-phone" type="tel" placeholder="(XXX) XXX-XXXX" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input id="contact-email" type="email" placeholder="you@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-service">What do you need?</label>
                  <select id="contact-service" required>
                    {SERVICE_TYPES.map((s) => (
                      <option key={s} value={s === 'Select a service type...' ? '' : s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Tell us more (optional)</label>
                  <textarea
                    id="contact-message"
                    placeholder="Brief description of your project or issue..."
                  />
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  Send My Request →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
