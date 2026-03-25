'use client';
import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function toggleFaq(i: number) {
    setOpenFaq(prev => prev === i ? null : i);
  }

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}>
          <button
            className="faq-trigger"
            onClick={() => toggleFaq(i)}
            aria-expanded={openFaq === i}
            id={`faq-trigger-${i}`}
            aria-controls={`faq-panel-${i}`}
          >
            <span>{faq.q}</span>
            <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
          </button>
          <div
            className="faq-panel"
            id={`faq-panel-${i}`}
            role="region"
            aria-labelledby={`faq-trigger-${i}`}
          >
            <p>{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
