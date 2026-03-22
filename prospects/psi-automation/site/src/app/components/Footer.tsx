import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-brand-name">PSI Automation</div>
          <div className="footer-brand-sub">Motion Control Technology</div>
          <p className="footer-tagline">
            Custom vane air motors engineered for the environments where electric motors fail.
            35+ years manufacturing in Sandpoint, Idaho.
          </p>
          <a href="tel:8003923602" className="footer-phone">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            800-392-3602 (Toll Free)
          </a>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li><Link href="/products">Vane Air Motors</Link></li>
            <li><Link href="/products/control-systems">Control Systems</Link></li>
            <li><Link href="/products/safety-silencers">Safety Silencers</Link></li>
            <li><Link href="/custom-solutions">Custom Solutions</Link></li>
            <li><Link href="/engineering">Size Your Motor</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Industries</h4>
          <ul>
            <li><Link href="/applications/aerospace">Aerospace</Link></li>
            <li><Link href="/applications/automotive">Automotive</Link></li>
            <li><Link href="/applications/chemical">Chemical</Link></li>
            <li><Link href="/applications/mining">Mining</Link></li>
            <li><Link href="/applications/petroleum">Petroleum</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About PSI</Link></li>
            <li><Link href="/resources">Technical Resources</Link></li>
            <li><Link href="/resources/why-air-motors">Why Air Motors?</Link></li>
            <li><Link href="/contact">Contact / RFQ</Link></li>
            <li>
              <a href="mailto:sales@psiautomation.com">sales@psiautomation.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} PSI Automation — Pneumatic Systems, Inc. · Sandpoint, ID 83864</span>
        <span>
          <a href="tel:8003923602" style={{color:'rgba(255,255,255,0.4)'}}>800-392-3602</a>
          {' · '}
          <a href="mailto:sales@psiautomation.com" style={{color:'rgba(255,255,255,0.4)'}}>sales@psiautomation.com</a>
        </span>
      </div>
    </footer>
  );
}
