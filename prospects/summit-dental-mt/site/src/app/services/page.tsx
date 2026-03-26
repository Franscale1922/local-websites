import type { Metadata } from 'next';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Dental Services: General, Cosmetic & Implant Dentistry in Kalispell, MT',
  description: 'Summit Dental Group offers comprehensive dental care including implants, cosmetic dentistry, emergency care, sedation, crowns, whitening, and more in Kalispell, MT.',
};

const SERVICES = [
  {
    category: 'High-Priority Services',
    items: [
      {
        title: 'Dental Implants',
        desc: 'Permanent tooth replacement that looks, feels, and functions like your natural teeth. Single implants, implant-supported bridges, and full-arch restoration. We handle it all.',
        href: '/services/dental-implants',
        icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C9 2 7 4 7 7c0 2 1 3.5 2 4.5L8 20c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2l-1-8.5c1-1 2-2.5 2-4.5 0-3-2-5-5-5z"/></svg>,
      },
      {
        title: 'Emergency Dentistry',
        desc: 'Dental pain, cracked teeth, knocked-out teeth, or sudden swelling? Call us immediately. We make every effort to see emergency patients the same day.',
        href: '/services/emergency-dentistry',
        icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
      },
      {
        title: 'Cosmetic Dentistry',
        desc: 'Veneers, bonding, complete smile makeovers. Whether you want subtle improvement or a dramatic transformation, we\'ll design a plan that fits your face and your goals.',
        href: '/services/cosmetic-dentistry',
        icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 13s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
      },
    ],
  },
  {
    category: 'Specialty Services',
    items: [
      {
        title: 'Sedation Dentistry',
        desc: 'Oral conscious sedation and nitrous oxide for patients with dental anxiety, sensitive gag reflex, or complex procedures. You deserve a comfortable experience.',
        href: '/services/sedation-dentistry',
        icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
      },
      {
        title: 'Teeth Whitening',
        desc: 'Professional in-office whitening that delivers results no drugstore kit can match: dramatically whiter teeth in a single visit.',
        href: '/services/teeth-whitening',
        icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
      },
      {
        title: 'Crowns & Bridges',
        desc: 'Porcelain crowns and fixed bridges to restore damaged or missing teeth. Durable, natural-looking restorations designed to last for years.',
        href: '/services/crowns-bridges',
        icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      },
    ],
  },
  {
    category: 'General & Family Dentistry',
    items: [
      {
        title: 'Dental Cleanings & Exams',
        desc: 'Thorough preventive care: professional cleaning, digital X-rays, oral cancer screening, and a full treatment assessment. The foundation of a healthy smile.',
        href: '/services',
        icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
      },
      {
        title: 'Pediatric & Family Care',
        desc: 'Gentle, patient care for children and adults alike. We\'ll make sure your kids feel welcome and comfortable, building healthy habits from a young age.',
        href: '/services',
        icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
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
          <p>From your child&apos;s first cleaning to full-mouth restoration, all under one roof in Kalispell, MT.</p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Book an Appointment</a>
            <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
          </div>
        </div>

        {SERVICES.map(group => (
          <section key={group.category} className="section">
            <div className="container">
              <div className="services-grid services-grid--3col">
                {group.items.map(s => (
                  <a key={s.title} href={s.href} className="service-card">
                    <div className="service-icon">
                      {s.icon}
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
              <p>Start with a new patient exam. We&apos;ll give you a complete picture of your oral health and a plan that fits your goals and budget.</p>
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
