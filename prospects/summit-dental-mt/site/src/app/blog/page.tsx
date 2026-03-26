'use client';
import { useState } from 'react';
import { ARTICLES, CATEGORIES, type Article } from './articles';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

// Metadata is handled in blog/metadata.ts (pattern for client pages)

function ArticleCard({ article }: { article: Article }) {
  const dateFormatted = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <a
      href={`/blog/${article.slug}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--color-surface)',
        border: '1.5px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'var(--shadow-lg)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
      }}
    >
      {/* Category + read time header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 20px 12px',
        borderBottom: '1px solid var(--color-border)',
        background: 'rgba(var(--color-primary-rgb, 58,80,107),0.04)',
      }}>
        <span style={{
          background: 'var(--color-accent)',
          color: '#fff',
          fontSize: '0.7rem',
          fontWeight: 700,
          padding: '3px 10px',
          borderRadius: '100px',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          whiteSpace: 'nowrap',
        }}>{article.category}</span>
        <span style={{ fontSize: '0.75rem', color: 'var(--color-neutral-mid)', whiteSpace: 'nowrap' }}>
          {article.readTime} min read
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h3 style={{ fontSize: '1.05rem', lineHeight: 1.4, color: 'var(--color-text)', margin: 0 }}>
          {article.title}
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-neutral-mid)', lineHeight: 1.65, margin: 0, flex: 1 }}>
          {article.excerpt}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-neutral-mid)' }}>{dateFormatted}</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 700 }}>Read Article →</span>
        </div>
      </div>
    </a>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? ARTICLES
    : ARTICLES.filter(a => a.categorySlug === activeCategory);

  // Sort newest first
  const sorted = [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <SiteNav activePath="/blog" alwaysScrolled />
      <main>
        <div className="page-hero">
          <span className="eyebrow" style={{ color: 'var(--color-accent)', justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '2px', background: 'var(--color-accent)', display: 'block' }} />
            Blog & Resources
          </span>
          <h1>Dental Health Insights from Kalispell, MT</h1>
          <p>
            Honest, straightforward articles from Dr. Mark Vanzant, DMD — written for Flathead Valley patients
            who want real answers about their dental health, not marketing copy.
          </p>
          <div className="page-hero-ctas">
            <a href="/contact" className="btn btn-primary">Book an Appointment</a>
            <a href="tel:+14067524545" className="btn btn-ghost-light">Call (406) 752-4545</a>
          </div>
        </div>

        <section className="section">
          <div className="container">
            {/* Category filter */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px',
            }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '100px',
                    border: activeCategory === cat.slug
                      ? '2px solid var(--color-accent)'
                      : '1.5px solid var(--color-border)',
                    background: activeCategory === cat.slug ? 'var(--color-accent)' : 'transparent',
                    color: activeCategory === cat.slug ? '#fff' : 'var(--color-text)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Article grid */}
            {sorted.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '24px',
              }}>
                {sorted.map(article => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--color-neutral-mid)', textAlign: 'center', padding: '60px 0' }}>
                No articles in this category yet.
              </p>
            )}

            {/* Author note */}
            <div style={{
              marginTop: '56px',
              padding: '28px 32px',
              background: 'var(--color-surface)',
              border: '1.5px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              gap: '20px',
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'var(--color-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, fontSize: '1.4rem', color: 'var(--color-accent)',
              }}>★</div>
              <div>
                <p style={{ margin: '0 0 4px', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.9rem' }}>
                  Dr. Mark A. Vanzant, DMD
                </p>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--color-neutral-mid)', lineHeight: 1.6 }}>
                  Owner of Summit Dental Group in Kalispell, MT. USAF veteran, three combat deployments,
                  Montana Army National Guard. All articles reflect his direct clinical experience and honest
                  perspective — not generic dental marketing content.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="cta-strip">
          <div className="cta-strip-inner">
            <div className="cta-strip-text">
              <h2>Have a Question Not Covered Here?</h2>
              <p>Call us or browse our FAQ. We give straight answers — in person, over the phone, and online.</p>
            </div>
            <div className="cta-strip-actions">
              <a href="tel:+14067524545" className="btn btn-primary">Call (406) 752-4545</a>
              <a href="/faq" className="btn btn-white">Browse All FAQs →</a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
