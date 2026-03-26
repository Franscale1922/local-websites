'use client';
import Link from 'next/link';

export default function MobileSticky() {
  return (
    <div className="mobile-sticky-bar" role="complementary" aria-label="Quick contact actions">
      <div className="mobile-sticky-inner">
        <a
          href="tel:+14067524545"
          className="btn btn-navy"
          aria-label="Call Summit Dental Group"
        >
          📞 Call Now
        </a>
        <Link
          href="/contact#appointment"
          className="btn btn-primary"
          aria-label="Book an appointment"
        >
          📅 Book Now
        </Link>
      </div>
    </div>
  );
}
