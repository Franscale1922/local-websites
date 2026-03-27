'use client';
import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Formspree endpoint — replace YOUR_FORM_ID with the real Formspree ID
      // or swap this URL for any form backend (Netlify Forms, Make, etc.)
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setFormState('success');
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json?.errors?.[0]?.message || 'Something went wrong. Please call us directly.');
        setFormState('error');
      }
    } catch {
      setErrorMsg('Network error. Please call us at (406) 752-4545.');
      setFormState('error');
    }
  }

  if (formState === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '48px 0' }}>
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" style={{ margin: '0 auto 20px', display: 'block' }}>
          <circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" />
        </svg>
        <h3 style={{ color: 'var(--color-primary)', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>Request Received — Thank You!</h3>
        <p style={{ color: 'var(--color-neutral-mid)', fontSize: '0.9rem', marginBottom: '20px' }}>
          We&apos;ll call or email you within one business day. For urgent needs, call{' '}
          <a href="tel:+14067524545" style={{ color: 'var(--color-accent)', fontWeight: 700 }}>(406) 752-4545</a>.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="btn btn-secondary"
          style={{ fontSize: '0.85rem' }}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <>
      <h3>Book Your Appointment</h3>
      <p className="contact-form-sub">We respond within one business day. For same-day needs, please call directly.</p>

      {formState === 'error' && (
        <div style={{
          background: '#fff5f5', border: '1.5px solid #fca5a5',
          borderRadius: 'var(--radius-sm)', padding: '12px 16px',
          marginBottom: '16px', fontSize: '0.85rem', color: '#b91c1c',
        }}>
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first_name">First Name *</label>
            <input id="first_name" name="first_name" type="text" required placeholder="Jane" />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name *</label>
            <input id="last_name" name="last_name" type="text" required placeholder="Smith" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input id="phone" name="phone" type="tel" required placeholder="(406) 555-0100" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="jane@email.com" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="service">Reason for Visit</label>
          <select id="service" name="service">
            <option value="">Select...</option>
            <option>New Patient Exam &amp; Cleaning</option>
            <option>Dental Emergency</option>
            <option>Dental Implant Consultation</option>
            <option>Cosmetic / Smile Makeover</option>
            <option>Sedation Dentistry</option>
            <option>Teeth Whitening</option>
            <option>Crown or Bridge</option>
            <option>Veterans &amp; Military Inquiry</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="insurance">Insurance / Payment</label>
          <select id="insurance" name="insurance">
            <option value="">Select...</option>
            <option>Delta Dental</option>
            <option>Blue Cross / Blue Shield</option>
            <option>MetLife</option>
            <option>Cigna</option>
            <option>Aetna</option>

            <option>CareCredit</option>
            <option>Self-Pay / No Insurance</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Anything else we should know?</label>
          <textarea id="message" name="message" placeholder="Describe your situation, any dental anxiety, or questions about insurance..." />
        </div>
        <button type="submit" className="btn btn-primary form-submit" disabled={formState === 'submitting'}>
          {formState === 'submitting' ? 'Sending…' : 'Request Appointment →'}
        </button>
      </form>
    </>
  );
}
