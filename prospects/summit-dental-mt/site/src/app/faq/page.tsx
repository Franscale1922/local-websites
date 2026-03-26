'use client';
import { useState } from 'react';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

// Note: metadata is exported from faq/metadata.ts (Next.js App Router pattern for client pages)

const FAQS = [
  {
    category: 'Appointments & General',
    items: [
      { q: 'Are you accepting new patients?', a: 'Yes! We welcome new patients of all ages. You can request an appointment online or call us directly at (406) 752-4545. We\'ll do our best to get you in quickly.' },
      { q: 'What are your office hours?', a: 'We\'re open Tuesday through Friday, 8:00 AM to 5:00 PM. We\'re closed Monday, Saturday, and Sunday. For dental emergencies outside of these hours, call and leave a message. We\'ll respond as fast as we can.' },
      { q: 'What should I bring to my first appointment?', a: 'Please bring a valid photo ID, your dental insurance card, a list of current medications, and any previous dental records or X-rays if you have them. Arrive a few minutes early to complete your new patient paperwork.' },
      { q: 'How do I schedule an appointment?', a: 'You can request an appointment using the form on our contact page, or call us directly at (406) 752-4545. We respond to online requests within one business day.' },
      { q: 'How long will my first appointment take?', a: 'Plan for 60–90 minutes for a new patient visit. This allows enough time for a comprehensive exam, X-rays, a professional cleaning, and a full conversation with Dr. Vanzant about your dental health and any concerns you have. We never rush.' },
    ],
  },
  {
    category: 'Insurance & Payment',
    items: [
      { q: 'Do you accept TRICARE dental insurance?', a: 'Yes. We accept TRICARE Active Duty Dental Program (ADDP) via United Concordia, TRICARE Dental Program (TDP) for dependents and non-activated Guard/Reserve, United Concordia (UCCI), and other military-affiliated dental plans. Dr. Vanzant is a veteran and we prioritize making this process easy for military families.' },
      { q: 'What insurance plans do you accept?', a: 'We accept most major dental insurance plans including Delta Dental, Blue Cross/Blue Shield, MetLife, Cigna, Aetna, and all TRICARE/military plans via United Concordia. Call us with your plan name and we\'ll confirm your coverage before your visit.' },
      { q: 'Do you offer financing or payment plans?', a: 'Yes. We accept CareCredit, which offers flexible financing options including interest-free periods. Our team will help you understand your insurance benefits and any out-of-pocket costs before treatment begins. No surprises.' },
      { q: 'What if I don\'t have dental insurance?', a: 'We welcome uninsured patients and will work with you on a payment plan or discuss CareCredit financing. We\'ll provide you with a clear cost estimate before any treatment starts.' },
    ],
  },
  {
    category: 'Emergency Dental Care',
    items: [
      { q: 'What should I do if I have a dental emergency?', a: 'Call us immediately at (406) 752-4545. We make every effort to see emergency patients the same day during office hours. If it\'s after hours, leave a message and we\'ll return your call as quickly as possible. For life-threatening emergencies, call 911 or go to your nearest emergency room.' },
      { q: 'What counts as a dental emergency?', a: 'Dental emergencies include severe tooth pain, a knocked-out tooth, a cracked or broken tooth causing pain, dental abscess (swelling, fever, or pus), a lost crown or filling that\'s causing pain, or significant soft tissue trauma to the mouth. When in doubt, call us. We\'d rather you reach out and it turn out to be non-urgent than suffer unnecessarily.' },
      { q: 'Can you see me the same day for an emergency?', a: 'We try to accommodate every same-day emergency request during office hours. Call us first thing in the morning at (406) 752-4545 and we\'ll do everything we can to get you seen that day.' },
      { q: 'What do I do if a tooth gets knocked out?', a: 'Time is critical. Pick up the tooth by the crown (not the root), rinse it gently without scrubbing, and try to place it back in the socket. If that\'s not possible, keep it moist in milk or between your cheek and gum and call us immediately. A knocked-out tooth has the best chance of being saved within 30–60 minutes.' },
    ],
  },
  {
    category: 'Preventive & Routine Care',
    items: [
      { q: 'How often should I get a dental cleaning and checkup?', a: 'For most patients, we recommend a cleaning and exam every six months. Patients with a history of gum disease, high cavity risk, or certain medical conditions may benefit from more frequent visits. Dr. Vanzant will assess your individual situation and recommend what\'s right for you.' },
      { q: 'How often do I need dental X-rays?', a: 'For new patients, we typically take a full set of X-rays so we have a complete baseline. After that, most patients need bitewing X-rays once a year. We use digital X-rays, which reduce radiation exposure significantly compared to traditional film X-rays.' },
      { q: 'Why do my gums bleed when I brush?', a: 'Bleeding gums are most commonly a sign of gum inflammation (gingivitis) caused by plaque buildup along the gumline. The good news: gingivitis is reversible with a professional cleaning and improved brushing/flossing habits. However, persistent bleeding can also indicate early gum disease, so it\'s worth having it evaluated. Don\'t ignore it.' },
      { q: 'My tooth doesn\'t hurt. Do I still need to fix it?', a: 'Yes, often. Many dental problems — cavities, gum disease, cracked teeth, early infections — are painless in their early stages. Waiting until it hurts typically means more extensive (and expensive) treatment. Catching problems early is always the better outcome for your wallet and your health.' },
    ],
  },
  {
    category: 'Children\'s Dentistry',
    items: [
      { q: 'At what age should my child first see a dentist?', a: 'The American Academy of Pediatric Dentistry recommends a child\'s first dental visit by age 1, or within six months of their first tooth appearing. Early visits help kids get comfortable with the dental environment and allow us to catch any issues before they become problems.' },
      { q: 'Do you see children at Summit Dental?', a: 'Yes — we are a true family practice and see patients of all ages, from toddlers to seniors. We take pride in making kids feel comfortable at the dentist, which sets them up for a lifetime of good oral health.' },
      { q: 'Are baby teeth really that important if they\'re just going to fall out?', a: 'Absolutely. Baby teeth hold space for permanent teeth, affect speech development, and help children chew and eat properly. Untreated cavities in baby teeth can cause pain, infection, and may affect the development of permanent teeth underneath. Taking care of baby teeth matters.' },
    ],
  },
  {
    category: 'Cosmetic & Restorative',
    items: [
      { q: 'What cosmetic dental services do you offer?', a: 'We offer porcelain veneers, dental bonding, professional teeth whitening, composite restorations (tooth-colored fillings), smile makeovers, and more. Schedule a consultation with Dr. Vanzant to discuss your goals. There\'s almost always a path to the smile you want.' },
      { q: 'How long do dental implants last?', a: 'Dental implants are designed to be a permanent solution. With proper oral hygiene and regular dental checkups, implants can last 20+ years, often a lifetime. The crown attached to the implant may eventually need replacement (typically after 15-25 years), but the implant itself is very durable.' },
      { q: 'Does teeth whitening work for everyone?', a: 'Professional whitening is safe and effective for most patients with natural teeth. It works best for extrinsic stains (coffee, tea, red wine, tobacco). Some stains, like those from certain antibiotics or fluorosis, don\'t respond to standard whitening. In these cases, veneers or bonding may be a better option. We\'ll assess your specific situation before recommending treatment.' },
      { q: 'What is the difference between a crown and a veneer?', a: 'A crown covers the entire tooth and is used when a tooth is significantly damaged, decayed, or after a root canal. A veneer covers only the front surface of the tooth and is primarily a cosmetic solution for chips, discoloration, or minor shape issues. Dr. Vanzant will recommend the right option based on your specific situation.' },
    ],
  },
  {
    category: 'Sedation & Comfort',
    items: [
      { q: 'Do you offer sedation for anxious patients?', a: 'Yes. We offer nitrous oxide (laughing gas) and oral conscious sedation for patients who feel anxious, fearful, or have a sensitive gag reflex. You\'ll be comfortable and aware throughout the procedure, just significantly more relaxed. We\'ll discuss all your options before any appointment.' },
      { q: 'Is sedation safe?', a: 'When administered by a trained dental professional, both nitrous oxide and oral conscious sedation are very safe. Dr. Vanzant will review your medical history and any medications before recommending a sedation option. The effects of nitrous oxide wear off within minutes of stopping, and oral sedation typically wears off within a few hours.' },
      { q: 'I\'m extremely nervous about the dentist. What should I do?', a: 'First: you\'re not alone, and there\'s no judgment here. Tell us when you call that you\'re anxious. We\'ll make sure your appointment is slower-paced, explain every step before we do it, and discuss sedation options. Dr. Vanzant\'s team is experienced with anxious patients and genuinely takes pride in turning a dreaded trip into a manageable one.' },
    ],
  },
  {
    category: 'Oral Health at Home',
    items: [
      { q: 'How often should I brush and floss?', a: 'Brush twice a day for two minutes each time — once in the morning and once before bed. Floss at least once a day, ideally before your nighttime brush. The order matters: floss first to loosen debris, then brush and rinse. These habits, combined with regular professional cleanings, are the foundation of good oral health.' },
      { q: 'What\'s the best toothpaste to use?', a: 'Look for an ADA-accepted fluoride toothpaste. Beyond that, the "best" toothpaste depends on your needs: sensitivity formulas for sensitive teeth, whitening formulas if you want to reduce surface stains, or prescription-strength fluoride if you\'re cavity-prone. Ask us at your next visit and we\'ll make a specific recommendation.' },
      { q: 'What causes bad breath, and what can I do about it?', a: 'The most common causes are poor oral hygiene, bacteria on the tongue, dry mouth, gum disease, and certain foods. Brushing your tongue, staying hydrated, and maintaining regular cleanings will address most cases. Persistent bad breath despite good hygiene can sometimes indicate a dental or medical issue — mention it at your next appointment.' },
    ],
  },
];


export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const key = (cat: string, i: number) => `${cat}-${i}`;

  // Flatten all FAQs for schema
  const allFaqsFlat = FAQS.flatMap(group => group.items);

  return (
    <>
      {/* FAQPage JSON-LD Schema — covers all 30 Q&As for AEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: allFaqsFlat.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }) }} />
      <SiteNav activePath="/faq" alwaysScrolled />
      <main>
        <div className="page-hero">
          <span className="eyebrow" style={{ color: 'var(--color-accent)', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: 'var(--color-accent)', display: 'block' }} />
            FAQ
          </span>
          <h1>Your Questions. Plain Answers.</h1>
          <p>No runaround. Can&apos;t find what you need? Just call — we pick up.</p>
          <div className="page-hero-ctas">
            <a href="tel:+14067524545" className="btn btn-primary">Call (406) 752-4545</a>
            <a href="/contact" className="btn btn-ghost-light">Request Appointment</a>
          </div>
        </div>

        <section className="section">
          <div className="container">
            {FAQS.map(group => (
              <div key={group.category} style={{ marginBottom: '56px' }}>
                <h2 style={{ marginBottom: '24px', fontSize: '1.6rem' }}>{group.category}</h2>
                <div className="faq-list">
                  {group.items.map((faq, i) => {
                    const k = key(group.category, i);
                    const isOpen = openFaq === k;
                    return (
                      <div key={k} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                        <button
                          className="faq-trigger"
                          onClick={() => setOpenFaq(isOpen ? null : k)}
                          aria-expanded={isOpen}
                        >
                          <span>{faq.q}</span>
                          <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                        </button>
                        <div className="faq-panel">
                          <p>{faq.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="cta-strip">
          <div className="cta-strip-inner">
            <div className="cta-strip-text">
              <h2>Still Have Questions?</h2>
              <p>Call us. We pick up, and we&apos;re happy to walk through anything before your first visit.</p>
            </div>
            <div className="cta-strip-actions">
              <a href="tel:+14067524545" className="btn btn-primary">Call (406) 752-4545</a>
              <a href="/contact" className="btn btn-white">Book Appointment</a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
