'use client';
import { useState } from 'react';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <>
      <SiteNav activePath="/contact" alwaysScrolled />
      <main>
        <div className="page-hero">
          <span className="eyebrow" style={{ color: '#e8a96a', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: '#e8a96a', display: 'block' }} />
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
                      <div>Tue – Fri: 8:00 AM – 5:00 PM</div>
                      <div style={{ fontSize: '0.85rem', color: '#5a6473', marginTop: '3px' }}>Mon / Sat / Sun: Closed</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-accent)', marginTop: '6px', fontWeight: 600 }}>🦷 Dental emergencies — call anytime</div>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: '24px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 18px rgba(58,80,107,0.12)' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.0!2d-114.3120!3d48.1936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536f7c8f53a5a5a5%3A0x0!2s203+Business+Center+Loop%2C+Kalispell%2C+MT+59901!5e0!3m2!1sen!2sus!4v1710783200000!5m2!1sen!2sus"
                    title="Summit Dental Group — Kalispell MT"
                    width="100%" height="260"
                    style={{ border: 0 }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="contact-form">
                {formSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" style={{ margin: '0 auto 16px' }}><polyline points="20 6 9 17 4 12"/></svg>
                    <h3 style={{ color: 'var(--color-primary)', marginBottom: '10px' }}>Request Received — Thank You!</h3>
                    <p style={{ color: '#5a6473', fontSize: '0.9rem' }}>
                      We&apos;ll call or email you within one business day. For urgent needs, call{' '}
                      <a href="tel:+14067524545" style={{ color: 'var(--color-accent)', fontWeight: 700 }}>(406) 752-4545</a>.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3>Book Your Appointment</h3>
                    <p className="contact-form-sub">We respond within one business day. For same-day needs, please call directly.</p>
                    <form onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="first_name">First Name *</label>
                          <input id="first_name" type="text" required placeholder="Jane" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="last_name">Last Name *</label>
                          <input id="last_name" type="text" required placeholder="Smith" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="phone">Phone *</label>
                          <input id="phone" type="tel" required placeholder="(406) 555-0100" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input id="email" type="email" placeholder="jane@email.com" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="service">Reason for Visit</label>
                        <select id="service">
                          <option value="">Select...</option>
                          <option>New Patient Exam & Cleaning</option>
                          <option>Dental Emergency</option>
                          <option>Dental Implant Consultation</option>
                          <option>Cosmetic / Smile Makeover</option>
                          <option>Sedation Dentistry</option>
                          <option>Teeth Whitening</option>
                          <option>Crown or Bridge</option>
                          <option>Veterans / TRICARE Inquiry</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="insurance">Insurance / Payment</label>
                        <select id="insurance">
                          <option value="">Select...</option>
                          <option>Delta Dental</option>
                          <option>Blue Cross / Blue Shield</option>
                          <option>MetLife</option>
                          <option>Cigna</option>
                          <option>Aetna</option>
                          <option>TRICARE / ADDP</option>
                          <option>United Concordia</option>
                          <option>CareCredit</option>
                          <option>Self-Pay / No Insurance</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Anything else we should know?</label>
                        <textarea id="message" placeholder="Describe your situation, any dental anxiety, or questions about insurance..." />
                      </div>
                      <button type="submit" className="btn btn-primary form-submit">
                        Request Appointment →
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
