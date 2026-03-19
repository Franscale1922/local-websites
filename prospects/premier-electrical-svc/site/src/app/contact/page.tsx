import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Free Estimate | Premier Electrical Services — Mount Vernon, WA',
  description: 'Get a free electrical estimate in Skagit, Whatcom, Island, San Juan, King, or Snohomish County. Call (360) 421-5230 or submit a request. Same-day response on most requests.',
};

const PHONE = '(360) 421-5230';
const PHONE_TEL = 'tel:+13604215230';
const SERVICE_TYPES = [
  'Panel Upgrade',
  'EV Charging Station',
  'Generator Installation',
  'Historic / Older Home Rewire',
  'Commercial Wiring',
  'Lighting (Indoor / Outdoor)',
  'Outbuilding / Shop / Barn Wiring',
  'Hot Tub / Spa Wiring',
  'Service Call / Troubleshooting',
  'New Construction / Remodel',
  'Other',
];

export default function ContactPage() {
  return (
    <main>
      <nav className="nav nav--scrolled">
        <a href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Premier Electrical Services" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/service-area">Service Area</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact" className="nav-cta nav-cta--active">Get a Free Estimate</a></li>
        </ul>
        <a href={PHONE_TEL} className="btn btn-ghost-gold nav-mobile-cta" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>Call Now</a>
      </nav>

      <section className="page-hero">
        <div className="container">
          <div className="page-hero-icon">📞</div>
          <h1>Get a Free Estimate</h1>
          <p className="page-hero-sub">
            Tell us what you need. We respond same day on most requests. If it&apos;s urgent, call — we pick up.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 style={{ marginBottom: '32px' }}>Reach Us Directly</h2>
              <div className="contact-detail">
                <div className="contact-detail-icon">📞</div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Phone</div>
                  <div className="contact-detail-value"><a href={PHONE_TEL}>{PHONE}</a></div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Mailing Address</div>
                  <div className="contact-detail-value">1500 East College Way Ste A PMB 291<br />Mount Vernon, WA 98273</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">🗺️</div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Service Area</div>
                  <div className="contact-detail-value">Skagit · Whatcom · San Juan · Island · King · Snohomish Counties</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">⏱</div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Response Time</div>
                  <div className="contact-detail-value">Same day on most requests. Urgent? Call directly.</div>
                </div>
              </div>
              <div className="license-badge" style={{ marginTop: '24px' }}>
                <span className="check">✓</span> Lic. PREMIES821LL · Licensed, Bonded &amp; Insured · A+ BBB
              </div>

              <div style={{ marginTop: '40px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d341076.54706738576!2d-122.64133373671978!3d48.27244854254849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5484b6b027cfe07f%3A0xe24eba44eab793c2!2sMount%20Vernon%2C%20WA%2098273!5e0!3m2!1sen!2sus!4v1710783200000!5m2!1sen!2sus"
                  title="Premier Electrical Services — Mount Vernon, WA"
                  width="100%"
                  height="260"
                  style={{ borderRadius: '10px', border: 'none' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="contact-form">
              <h2 style={{ marginBottom: '6px' }}>Submit a Request</h2>
              <p className="contact-form-sub" style={{ marginBottom: '28px' }}>Tell us what you need. We&apos;ll get back to you fast — usually same day.</p>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name</label>
                    <input id="contact-name" type="text" placeholder="Jane Smith" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input id="contact-phone" type="tel" placeholder="(360) 555-0100" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input id="contact-email" type="email" placeholder="you@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-service">What do you need?</label>
                  <select id="contact-service" required>
                    <option value="">Select a service type...</option>
                    {SERVICE_TYPES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Tell us more (optional)</label>
                  <textarea id="contact-message" placeholder="Brief description of your project or issue..." />
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  Send My Request →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Premier Electrical Services" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">Licensed, bonded electricians serving Skagit, Whatcom, San Juan, Island, King, and Snohomish counties. A+ BBB Rating. Lic. PREMIES821LL.</p>
          </div>
          <div className="footer-col"><h4>Services</h4><ul>
            <li><a href="/services/panel-upgrades">Panel Upgrades</a></li>
            <li><a href="/services/ev-charging">EV Charging</a></li>
            <li><a href="/services/generator-installation">Generators</a></li>
            <li><a href="/services/historic-home-rewiring">Historic Home Rewiring</a></li>
          </ul></div>
          <div className="footer-col"><h4>Quick Links</h4><ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/service-area">Service Area</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul></div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Premier Electrical Services</span>
          <span><a href={PHONE_TEL}>{PHONE}</a> · Lic. PREMIES821LL</span>
        </div>
      </footer>
    </main>
  );
}
