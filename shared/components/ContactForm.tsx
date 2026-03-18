'use client';

import { useState } from 'react';

interface ContactFormProps {
  businessName: string;
  businessEmail?: string;
  businessPhone?: string;
  submitLabel?: string;
  /** Optional: N8N or webhook URL to POST to — falls back to mailto if not set */
  webhookUrl?: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm({
  businessName,
  businessEmail,
  businessPhone,
  submitLabel = 'Send Message',
  webhookUrl,
}: ContactFormProps) {
  const [form, setForm]     = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError]   = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    setError('');

    try {
      if (webhookUrl) {
        const resp = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, businessName, submittedAt: new Date().toISOString() }),
        });
        if (!resp.ok) throw new Error('Server error');
        setStatus('sent');
      } else if (businessEmail) {
        // Fallback: open mailto (no server needed)
        const subject = encodeURIComponent(`Message from ${form.name} via ${businessName} website`);
        const body    = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`);
        window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
        setStatus('sent');
      } else {
        throw new Error('No submission target configured');
      }
    } catch {
      setStatus('error');
      setError('Something went wrong. Please call us directly.');
    }
  }

  if (status === 'sent') {
    return (
      <div className="contact-form__success">
        <div className="contact-form__success-icon">✓</div>
        <h3 className="contact-form__success-title">Message sent!</h3>
        <p className="contact-form__success-text">
          We&apos;ll get back to you as soon as possible.
          {businessPhone && (
            <> Need to reach us faster? Call{' '}
              <a href={`tel:${businessPhone.replace(/\D/g, '')}`}>{businessPhone}</a>.
            </>
          )}
        </p>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label={`Contact ${businessName}`}
    >
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="contact-name" className="contact-form__label">Your Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            className="contact-form__input"
            value={form.name}
            onChange={handleChange}
            placeholder="First and Last"
            required
            autoComplete="name"
          />
        </div>
        <div className="contact-form__field">
          <label htmlFor="contact-email" className="contact-form__label">Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            className="contact-form__input"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-phone" className="contact-form__label">
          Phone <span className="contact-form__optional">(optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          className="contact-form__input"
          value={form.phone}
          onChange={handleChange}
          placeholder="(406) 555-0100"
          autoComplete="tel"
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-message" className="contact-form__label">Message</label>
        <textarea
          id="contact-message"
          name="message"
          className="contact-form__textarea"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us how we can help..."
          rows={5}
          required
        />
      </div>

      {error && <p className="contact-form__error" role="alert">{error}</p>}

      <button
        type="submit"
        className="contact-form__submit"
        disabled={status === 'sending'}
        id="contact-submit-btn"
      >
        {status === 'sending' ? 'Sending...' : submitLabel}
      </button>
    </form>
  );
}
