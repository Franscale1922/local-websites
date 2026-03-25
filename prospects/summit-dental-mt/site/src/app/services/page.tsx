import type { Metadata } from 'next';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Dental Services — General, Cosmetic & Implant Dentistry in Kalispell, MT',
  description: 'Summit Dental Group offers comprehensive dental care including implants, cosmetic dentistry, emergency care, sedation, crowns, whitening, and more in Kalispell, MT.',
};

const SERVICES = [
  {
    category: '🔴 High-Priority',
    items: [
      {
        title: 'Dental Implants',
        desc: 'Permanent tooth replacement that looks, feels, and functions like your natural teeth. Single implants, implant-supported bridges, and full-arch restoration — we handle it all.',
        href: '/services/dental-implants',
        icon: '/icons/icon_dental_implant.png',
      },
      {
        title: 'Emergency Dentistry',
        desc: 'Dental pain, cracked teeth, knocked-out teeth, or sudden swelling — call us immediately. We make every effort to see emergency patients the same day.',
        href: '/services/emergency-dentistry',
        icon: '/icons/icon_emergency_dentistry.png',
      },
      {
        title: 'Cosmetic Dentistry',
        desc: 'Veneers, bonding, complete smile makeovers. Whether you want subtle improvement or a dramatic transformation, we\'ll design a plan that fits your face and your goals.',
        href: '/services/cosmetic-dentistry',
        icon: '/icons/icon_cosmetic_dentistry.png',
      },
    ],
  },
  {
    category: '🟡 Specialty Services',
    items: [
      {
        title: 'Sedation Dentistry',
        desc: 'Oral conscious sedation and nitrous oxide for patients with dental anxiety, sensitive gag reflex, or complex procedures. You deserve a comfortable experience.',
        href: '/services/sedation-dentistry',
        icon: '/icons/icon_sedation_comfort.png',
      },
      {
        title: 'Teeth Whitening',
        desc: 'Professional in-office whitening that delivers results no drugstore kit can match — dramatically whiter teeth in a single visit.',
        href: '/services/teeth-whitening',
        icon: '/icons/icon_teeth_whitening.png',
      },
      {
        title: 'Crowns & Bridges',
        desc: 'Porcelain crowns and fixed bridges to restore damaged or missing teeth. Durable, natural-looking restorations designed to last for years.',
        href: '/services/crowns-bridges',
        icon: '/icons/icon_crowns_bridges.png',
      },
    ],
  },
  {
    category: '🟢 General & Family Dentistry',
    items: [
      {
        title: 'Dental Cleanings & Exams',
        desc: 'Thorough preventive care — professional cleaning, digital X-rays, oral cancer screening, and a full treatment assessment. The foundation of a healthy smile.',
        href: '/services',
        icon: '/icons/icon_dental_cleaning.png',
      },
      {
        title: 'Pediatric & Family Care',
        desc: 'Gentle, patient care for children and adults alike. We\'ll make sure your kids feel welcome and comfortable — building healthy habits from a young age.',
        href: '/services',
        icon: '/icons/icon_family_pediatric.png',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteNav activePath="/services" alwaysScrolled />
      <main>
        <div className="page-hero">
          <span className="eyebrow" style={{ color: '#e8a96a', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: '#e8a96a', display: 'block' }} />
            Our Services
          </span>
          <h1>Comprehensive Dental Care for Every Stage of Life</h1>
          <p>From your child&apos;s first cleaning to full-mouth restoration — all under one roof in Kalispell, MT.</p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Book an Appointment</a>
            <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
          </div>
        </div>

        {SERVICES.map(group => (
          <section key={group.category} className="section">
            <div className="container">
              <div className="services-grid services-grid--3col" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                {group.items.map(s => (
                  <a key={s.title} href={s.href} className="service-card">
                    <div className="service-icon">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.icon} alt={s.title} />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <span className="service-link">Learn more →</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <div className="cta-strip">
          <div className="cta-strip-inner">
            <div className="cta-strip-text">
              <h2>Not Sure What You Need?</h2>
              <p>Start with a new patient exam — we&apos;ll give you a complete picture of your oral health and a plan that fits your goals and budget.</p>
            </div>
            <div className="cta-strip-actions">
              <a href="/contact" className="btn btn-ghost-light">Book a New Patient Exam</a>
              <a href="tel:+14067524545" className="btn btn-ghost-light">Call Us</a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
