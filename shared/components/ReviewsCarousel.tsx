'use client';

import { useState } from 'react';

interface Review {
  author: string;
  rating: number;         // 1–5
  text: string;
  date?: string;
  profilePhoto?: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
  businessRating?: number;
  totalReviews?: number;
  businessName: string;
  googleMapsUrl?: string;
  /** Max chars before the review is truncated — default 220 */
  truncateAt?: number;
}

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <span className="reviews-carousel__stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map(n => (
        <svg
          key={n}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={n <= rating ? '#F59E0B' : 'none'}
          stroke={n <= rating ? '#F59E0B' : '#D1D5DB'}
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

export default function ReviewsCarousel({
  reviews,
  businessRating,
  totalReviews,
  businessName,
  googleMapsUrl,
  truncateAt = 220,
}: ReviewsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const topReviews = reviews.filter(r => r.rating >= 4).slice(0, 8);

  if (topReviews.length === 0) return null;

  function prev() { setCurrent(i => (i === 0 ? topReviews.length - 1 : i - 1)); }
  function next() { setCurrent(i => (i === topReviews.length - 1 ? 0 : i + 1)); }

  const review = topReviews[current];
  const isLong = review.text.length > truncateAt;
  const isOpen  = expanded[current];
  const displayText = isLong && !isOpen ? review.text.slice(0, truncateAt) + '…' : review.text;

  return (
    <section className="reviews-carousel" id="reviews-section" aria-label={`Reviews for ${businessName}`}>
      {/* Summary bar */}
      <div className="reviews-carousel__header">
        <div className="reviews-carousel__aggregate">
          {businessRating && <span className="reviews-carousel__rating">{businessRating.toFixed(1)}</span>}
          {businessRating && <StarRating rating={Math.round(businessRating)} size={20} />}
          {totalReviews && <span className="reviews-carousel__count">{totalReviews.toLocaleString()} reviews</span>}
        </div>
        {googleMapsUrl && (
          <a
            href={googleMapsUrl}
            className="reviews-carousel__cta"
            target="_blank"
            rel="noopener noreferrer"
            id="leave-review-link"
            aria-label="Leave a review on Google"
          >
            Leave a Review ↗
          </a>
        )}
      </div>

      {/* Review card */}
      <div className="reviews-carousel__card" role="region" aria-live="polite" aria-label="Current review">
        <div className="reviews-carousel__reviewer">
          {review.profilePhoto ? (
            <img
              src={review.profilePhoto}
              alt={review.author}
              className="reviews-carousel__avatar"
              width={44}
              height={44}
            />
          ) : (
            <div className="reviews-carousel__avatar reviews-carousel__avatar--initials" aria-hidden="true">
              {review.author.charAt(0)}
            </div>
          )}
          <div>
            <p className="reviews-carousel__author">{review.author}</p>
            {review.date && <p className="reviews-carousel__date">{review.date}</p>}
          </div>
          <div className="reviews-carousel__stars-wrap">
            <StarRating rating={review.rating} />
          </div>
        </div>

        <blockquote className="reviews-carousel__text">
          &ldquo;{displayText}&rdquo;
          {isLong && (
            <button
              className="reviews-carousel__expand"
              onClick={() => setExpanded(prev => ({ ...prev, [current]: !isOpen }))}
              aria-expanded={isOpen}
            >
              {isOpen ? 'Read less' : 'Read more'}
            </button>
          )}
        </blockquote>
      </div>

      {/* Navigation */}
      <div className="reviews-carousel__nav" role="group" aria-label="Review navigation">
        <button
          className="reviews-carousel__btn"
          onClick={prev}
          aria-label="Previous review"
          id="reviews-prev-btn"
        >
          ←
        </button>
        <div className="reviews-carousel__dots" role="tablist" aria-label="Review indicators">
          {topReviews.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Review ${i + 1} of ${topReviews.length}`}
              className={`reviews-carousel__dot ${i === current ? 'reviews-carousel__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              id={`reviews-dot-${i}`}
            />
          ))}
        </div>
        <button
          className="reviews-carousel__btn"
          onClick={next}
          aria-label="Next review"
          id="reviews-next-btn"
        >
          →
        </button>
      </div>
    </section>
  );
}
