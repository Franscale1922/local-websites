import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Dental Services in Kalispell, MT | Summit Dental Group',
  description:
    'Summit Dental Group offers 15+ dental services in Kalispell, MT — implants, cosmetic, emergency, sedation, whitening, crowns, and more. One team, every need, every age.',
};

const services = [
  {
    icon: '/icons/dental-implant.png',
    label: 'Dental Implants',
    symptom: 'Replace Missing Teeth',
    desc: 'Permanent implants that look, feel, and function like natural teeth. The gold standard for tooth replacement.',
    href: '/services/dental-implants',
    badge: 'High-Intent',
  },
  {
    icon: '/icons/emergency-dentistry.png',
    label: 'Emergency Dentistry',
    symptom: 'Dental Emergency? We\'re Here.',
    desc: 'Same-day appointments for toothaches, broken teeth, knocked-out teeth, and dental trauma.',
    href: '/services/emergency-dentistry',
    badge: 'Same-Day',
  },
  {
    icon: '/icons/cosmetic-dentistry.png',
    label: 'Cosmetic Dentistry',
    symptom: 'Transform Your Smile',
    desc: 'Veneers, Invisalign, bonding, and full smile makeovers. Confidence you can feel.',
    href: '/services/cosmetic-dentistry',
    badge: null,
  },
  {
    icon: '/icons/sedation-comfort.png',
    label: 'Sedation Dentistry',
    symptom: 'Nervous About Dentistry?',
    desc: 'Nitrous oxide and oral sedation for anxious patients. We go at your pace — always.',
    href: '/services/sedation-dentistry',
    badge: null,
  },
  {
    icon: '/icons/teeth-whitening.png',
    label: 'Teeth Whitening',
    symptom: 'Whiter Smile, Fast',
    desc: 'Professional whitening with results no over-the-counter product can match.',
    href: '/services/teeth-whitening',
    badge: null,
  },
  {
    icon: '/icons/crowns-bridges.png',
    label: 'Crowns & Bridges',
    symptom: 'Fix a Broken Tooth',
    desc: 'Custom crowns and bridges that restore strength and your natural smile line.',
    href: '/services/crowns-bridges',
    badge: null,
  },
  {
    icon: '/icons/dental-cleaning.png',
    label: 'General Dentistry',
    symptom: 'Cleanings, Exams & More',
    desc: 'Preventive care, fillings, root canals, extractions, and periodontal therapy — the foundation of a healthy mouth.',
    href: '/services',
    badge: null,
  },
  {
    icon: '/icons/family-pediatric.png',
    label: 'Family & Pediatric Dentistry',
    symptom: 'Care for Every Age',
    desc: 'From first teeth to lifetime smiles — gentle, thorough care for patients of every age.',
    href: '/services',
    badge: null,
  },
  {
    icon: '/icons/veteran-military.png',
    label: 'Veterans & Military',
    symptom: 'TRICARE & ADDP Accepted',
    desc: 'Veteran-owned practice. We accept TRICARE and ADDP, and handle the paperwork for you.',
    href: '/veterans-military',
    badge: 'Veteran-Owned',
  },
];

const allServices = [
  'Dental Implants', 'All-on-4 Implants', 'Porcelain Veneers', 'Teeth Whitening',
  'Invisalign / Clear Aligners', 'Cosmetic Bonding', 'Smile Makeovers',
  'Crowns & Bridges', 'Root Canal Therapy', 'Tooth Extractions',
  'Dentures & Partials', 'Dental Cleanings & Exams', 'Tooth-Colored Fillings',
  'Gum Disease / Periodontal Therapy', 'TMJ / Jaw Pain Treatment',
  'Laser Dentistry', 'Botox for Bruxism', 'Oral Cancer Screenings',
  'Fluoride Treatments', 'Nitrous Oxide Sedation', 'Oral Conscious Sedation',
  'Emergency Dental Care', 'Sports Mouthguards', 'Night Guards',
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="services-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Services</span>
          </nav>
          <h1 id="services-heading">Dental Services in Kalispell, MT</h1>
          <p>
            General, cosmetic, restorative, sedation, and emergency dentistry — all
            under one roof in Kalispell's Summit Dental Group. 15+ services for every age.
          </p>
        </div>
      </section>

      <section className="section section-cream" aria-labelledby="main-services-heading">
        <div className="container">
          <div className="section-header">
            <span className="overline">Find Your Care</span>
            <h2 id="main-services-heading">What brings you in today?</h2>
            <p>Select your concern and we'll guide you to the right solution.</p>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <div key={s.href + s.label} className="service-card">
                {s.badge && (
                  <span style={{
                    display: 'inline-block',
                    background: s.badge === 'Same-Day' ? 'var(--emergency-bg)' : s.badge === 'Veteran-Owned' ? 'var(--navy)' : 'var(--teal-light)',
                    color: s.badge === 'Same-Day' ? 'var(--emergency)' : s.badge === 'Veteran-Owned' ? 'var(--teal)' : 'var(--teal-dark)',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    marginBottom: '0.75rem',
                    letterSpacing: '0.05em',
                  }}>
                    {s.badge}
                  </span>
                )}
                <div className="service-card-icon" aria-hidden="true">
                  <Image src={s.icon} alt="" width={80} height={80} />
                </div>
                <h3>{s.symptom}</h3>
                <p>{s.desc}</p>
                <Link href={s.href}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="all-services-heading">
        <div className="container container-sm">
          <div className="section-header">
            <span className="overline">Full Service List</span>
            <h2 id="all-services-heading">Everything we offer</h2>
            <p>
              Summit Dental Group is your comprehensive Flathead Valley dental home —
              no referrals needed for most cases.
            </p>
          </div>
          <div className="insurance-grid" role="list" aria-label="All dental services offered">
            {allServices.map(s => (
              <span key={s} className="insurance-badge" role="listitem">{s}</span>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/contact#appointment" className="btn btn-primary btn-lg">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-cta" aria-labelledby="services-cta-heading">
        <div className="container">
          <h2 id="services-cta-heading">Not sure which service is right for you?</h2>
          <p>Call us — we'll help you figure it out before you even book.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact#appointment" className="btn btn-white btn-lg">📅 Request Appointment</Link>
            <a href="tel:+14067524545" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.4)' }}>
              📞 (406) 752-4545
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
