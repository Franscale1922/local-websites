import type { Metadata } from 'next';
import SiteFooter from '../components/SiteFooter';
import SiteNav from '../components/SiteNav';

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
      <SiteNav alwaysScrolled />

      <section className="county-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="county-hero-bg"
          src="/images/hero-contact.jpg"
          alt="Premier Electrical Services owner at work van in Pacific Northwest neighborhood"
          loading="eager"
        />
        <div className="county-hero-overlay" />
        <div className="county-hero-content">
          <div className="county-hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z"/></svg>
            Free Estimates · Same-Day Response
          </div>
          <h1>Get a Free Estimate</h1>
          <p className="county-hero-sub">
            Tell us what you need. We respond same day on most requests. If it&apos;s urgent, call — we pick up.
          </p>
          <div className="county-hero-ctas">
            <a href={PHONE_TEL} className="btn btn-primary">Call {PHONE}</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 style={{ marginBottom: '32px' }}>Reach Us Directly</h2>
              <div className="contact-detail">
                <div className="contact-detail-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z"/></svg></div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Phone</div>
                  <div className="contact-detail-value"><a href={PHONE_TEL}>{PHONE}</a></div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Mailing Address</div>
                  <div className="contact-detail-value">1500 East College Way Ste A PMB 291<br />Mount Vernon, WA 98273</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg></div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Service Area</div>
                  <div className="contact-detail-value">Skagit · Whatcom · San Juan · Island · King · Snohomish Counties</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
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

      <SiteFooter />
    </main>
  );
}
