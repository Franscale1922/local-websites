/**
 * FAQ PAGE
 * /faq
 *
 * Full FAQ page with interactive accordion, organized by category.
 * Replace all [PLACEHOLDERS] with real content.
 */
'use client';
import { useState } from 'react';

export const dynamic = 'force-static';

const FAQ_CATEGORIES: { category: string; faqs: { q: string; a: string }[] }[] = [
  {
    category: 'Getting Started',
    faqs: [
      {
        q: 'Do you offer free estimates?',
        a: '[Answer — yes/no/under what conditions, and what the process looks like.]',
      },
      {
        q: 'How quickly can you come out?',
        a: '[Answer — typical availability, urgency policy, how to reach you fast.]',
      },
    ],
  },
  {
    category: 'Services',
    faqs: [
      {
        q: '[Service-specific question 1?]',
        a: '[Answer specific to this business and its services.]',
      },
      {
        q: '[Service-specific question 2?]',
        a: '[Answer.]',
      },
      {
        q: '[Service-specific question 3?]',
        a: '[Answer.]',
      },
    ],
  },
  {
    category: 'Licensing & Trust',
    faqs: [
      {
        q: 'Are you licensed, bonded, and insured?',
        a: '[Yes, with specifics — license number, what bonded/insured means for the customer.]',
      },
      {
        q: '[Trust-related question?]',
        a: '[Answer building confidence.]',
      },
    ],
  },
  {
    category: 'Pricing',
    faqs: [
      {
        q: 'How do you price your [services]?',
        a: '[Transparent answer about pricing approach — per job, per hour, free estimates, etc.]',
      },
      {
        q: 'Are there hidden fees?',
        a: '[Clear answer — what they quote is what you pay, etc.]',
      },
    ],
  },
];

const PHONE = '(XXX) XXX-XXXX';
const PHONE_TEL = 'tel:+1XXXXXXXXXX';

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  function toggle(key: string) {
    setOpenItem(prev => prev === key ? null : key);
  }

  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">FAQs</span>
          <h1>Common Questions.</h1>
          <p className="page-hero-sub">Straight answers. No runaround.</p>
        </div>
      </section>

      {/* FAQ ACCORDION BY CATEGORY */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.category} className="faq-category">
              <h2 className="faq-category-title">{cat.category}</h2>
              <div className="faq-list">
                {cat.faqs.map((faq, i) => {
                  const key = `${cat.category}-${i}`;
                  const isOpen = openItem === key;
                  return (
                    <div key={key} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                      <button
                        className="faq-trigger"
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        id={`faq-trigger-${key}`}
                        aria-controls={`faq-panel-${key}`}
                      >
                        <span>{faq.q}</span>
                        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                      </button>
                      <div
                        className="faq-panel"
                        id={`faq-panel-${key}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${key}`}
                      >
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="faq-footer">
            <p>Still have a question?</p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
              <a href={PHONE_TEL} className="btn btn-primary">Call {PHONE}</a>
              <a href="/contact" className="btn btn-secondary">Send a Message</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
