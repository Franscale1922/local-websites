'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <span className="footer-logo">Summit Dental Group</span>
            <span className="footer-tagline">Kalispell, Montana</span>
            <p>
              Veteran-owned. Community-rooted. Gentle, expert dentistry for the
              whole Flathead Valley — from cleanings to implants, every patient
              feels at home.
            </p>
            <div className="footer-social" aria-label="Social media links">
              <a href="https://www.facebook.com/summitdentalmt" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">f</a>
              <a href="https://www.google.com/maps/place/Summit+Dental+Group" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Google Maps">G</a>
              <a href="https://www.instagram.com/summitdentalmt" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">in</a>
              <a href="https://www.yelp.com/biz/summit-dental-group-kalispell" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Yelp">Y</a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h5>Services</h5>
            <ul className="footer-links" role="list">
              <li><Link href="/services/dental-implants">Dental Implants</Link></li>
              <li><Link href="/services/cosmetic-dentistry">Cosmetic Dentistry</Link></li>
              <li><Link href="/services/emergency-dentistry">Emergency Care</Link></li>
              <li><Link href="/services/teeth-whitening">Teeth Whitening</Link></li>
              <li><Link href="/services/sedation-dentistry">Sedation Dentistry</Link></li>
              <li><Link href="/services/crowns-bridges">Crowns &amp; Bridges</Link></li>
              <li><Link href="/services">All Services</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul className="footer-links" role="list">
              <li><Link href="/about">About Dr. Vanzant</Link></li>
              <li><Link href="/veterans-military">Veterans &amp; Military</Link></li>
              <li><Link href="/new-patients">New Patients</Link></li>
              <li><Link href="/smile-gallery">Before &amp; After</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><a href="https://app.patientpop.com/schedule/practice/summit-dental-group/" target="_blank" rel="noopener noreferrer">Patient Portal ↗</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5>Contact</h5>
            <address className="footer-nap" style={{ fontStyle: 'normal' }}>
              <p>203 Business Center Loop</p>
              <p>Suite C, Kalispell, MT 59901</p>
              <p style={{ marginTop: '0.75rem' }}>
                <a href="tel:+14067524545">(406) 752-4545</a>
              </p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' }}>
                Tue–Fri: 8:00am – 5:00pm<br />
                Mon: Closed<br />
                Sat–Sun: Closed
              </p>
              <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
                ⭐ 4.8 / 5 — 469 Google Reviews
              </p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Summit Dental Group · Dr. Mark A. Vanzant, DMD · USAF (Ret.) · Active Montana Army National Guard
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/accessibility">Accessibility</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
