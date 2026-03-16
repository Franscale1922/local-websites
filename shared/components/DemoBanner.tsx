/**
 * DemoBanner — Shared component added to all demo sites
 * 
 * This sticky banner sits at the top of every deployed demo and turns
 * the demo itself into a conversion tool. The prospect sees their new site
 * AND an immediate offer to buy it.
 * 
 * Usage: Add to layout.tsx in any template before deploying a demo:
 * 
 *   import DemoBanner from '@/components/DemoBanner';
 *   // In your layout body:
 *   <DemoBanner />
 * 
 * Configure the DEMO_CONFIG object in the layout or pass as props.
 */

'use client';

import { useState } from 'react';

interface DemoBannerProps {
  businessName?: string;
  offerPrice?: string;
  contactEmail?: string;
  contactPhone?: string;
  demoNote?: string;
}

export default function DemoBanner({
  businessName = 'Your Business',
  offerPrice = '$1,500',
  contactEmail = 'kelsey@yourdomain.com',
  contactPhone = '(406) 555-0100',
  demoNote = 'This is a custom demo built specifically for your business.',
}: DemoBannerProps) {
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
      }}
    >
      {/* Collapsed bar */}
      <div
        style={{
          background: '#0f2a4a',
          color: '#fff',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          fontSize: '13px',
          flexWrap: 'wrap',
          borderBottom: '2px solid #2e7dbd',
          boxShadow: '0 2px 16px rgba(0,0,0,0.25)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span
            style={{
              background: '#2e7dbd',
              color: '#fff',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '3px 10px',
              borderRadius: '100px',
            }}
          >
            Demo Site
          </span>
          <span style={{ color: 'rgba(255,255,255,0.9)' }}>
            This website was built for <strong>{businessName}</strong>. Want to own it?
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: '#2e7dbd',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '8px 16px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.04em',
            }}
          >
            {expanded ? 'Close ✕' : 'See the Offer →'}
          </button>
          <button
            onClick={() => setDismissed(true)}
            title="Dismiss"
            style={{
              background: 'transparent',
              color: 'rgba(255,255,255,0.5)',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              padding: '4px 6px',
              lineHeight: 1,
            }}
            aria-label="Dismiss banner"
          >
            ×
          </button>
        </div>
      </div>

      {/* Expanded offer panel */}
      {expanded && (
        <div
          style={{
            background: '#fff',
            borderBottom: '1px solid #e8e8e8',
            padding: '24px 32px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          }}
        >
          <div>
            <p style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>{demoNote}</p>
            <p style={{ fontSize: '14px', color: '#333', lineHeight: 1.6, marginBottom: '16px' }}>
              All content, copy, colors, and contact info are customized for{' '}
              <strong>{businessName}</strong>. If you'd like to purchase it, I can have it live
              on your domain within a week.
            </p>
            <ul
              style={{
                paddingLeft: '18px',
                fontSize: '13px',
                color: '#444',
                lineHeight: 2,
                marginBottom: '0',
              }}
            >
              <li>Flat fee: <strong style={{ color: '#0f2a4a' }}>{offerPrice}</strong> — one time, no monthly fees</li>
              <li>Mobile-optimized, fast-loading, SEO-ready</li>
              <li>Transferred to your domain &amp; hosting</li>
              <li>I walk you through making updates</li>
            </ul>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <a
              href={`mailto:${contactEmail}?subject=Interested in the ${businessName} demo&body=Hi, I saw the demo site for ${businessName} and I'd like to learn more.`}
              style={{
                display: 'block',
                background: '#2e7dbd',
                color: '#fff',
                borderRadius: '6px',
                padding: '13px 24px',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              → Email to Get Started
            </a>
            <a
              href={`tel:${contactPhone}`}
              style={{
                display: 'block',
                background: '#0f2a4a',
                color: '#fff',
                borderRadius: '6px',
                padding: '13px 24px',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              → Call {contactPhone}
            </a>
            <p style={{ fontSize: '11px', color: '#999', textAlign: 'center' }}>
              Questions? Just reach out. No pressure.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
