import type { Metadata } from 'next';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Request an Appointment | Summit Dental Group Kalispell, MT',
  description: 'Book an appointment with Summit Dental Group in Kalispell, MT. Call (406) 752-4545 or fill out our online form. Most insurance accepted. Same-day emergency care available.',
};

export default function ContactPage() {
  return (
    <>
      <SiteNav activePath="/contact" alwaysScrolled />
      <main>
        <div className="page-hero">
          <span className="eyebrow" style={{ color: 'var(--color-accent)', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: 'var(--color-accent)', display: 'block' }} />
            Get in Touch
          </span>
          <h1>Request an Appointment</h1>
          <p>Call us, come in, or fill out the form below. We respond within one business day.</p>
        </div>

        <section className="section" style={{ background: '#F5F3EF' }}>
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Visit Us in Kalispell</h3>
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z"/></svg>
                  </div>
                  <div>
                    <div className="contact-detail-label">Phone</div>
                    <div className="contact-detail-value"><a href="tel:+14067524545">(406) 752-4545</a></div>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="contact-detail-label">Address</div>
                    <div className="contact-detail-value">203 Business Center Loop, Suite C<br />Kalispell, MT 59901</div>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <div className="contact-detail-label">Office Hours</div>
                    <div className="contact-detail-value" style={{ display: 'block' }}>
                      <div>Tue &ndash; Fri: 8:00 AM &ndash; 5:00 PM</div>
                      <div style={{ fontSize: '0.85rem', color: '#5a6473', marginTop: '3px' }}>Mon / Sat / Sun: Closed</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-accent)', marginTop: '6px', fontWeight: 600 }}>Dental emergencies: call anytime</div>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: '24px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 18px rgba(58,80,107,0.12)' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.0!2d-114.3120!3d48.1936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536f7c8f53a5a5a5%3A0x0!2s203+Business+Center+Loop%2C+Kalispell%2C+MT+59901!5e0!3m2!1sen!2sus!4v1710783200000!5m2!1sen!2sus"
                    title="Summit Dental Group: Kalispell MT"
                    width="100%" height="260"
                    style={{ border: 0 }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
