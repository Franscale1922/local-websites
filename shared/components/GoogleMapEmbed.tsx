'use client';

import { useEffect, useRef } from 'react';

interface GoogleMapEmbedProps {
  /** Business name shown in the map marker */
  businessName: string;
  /** Full street address for geocoding */
  address: string;
  /** Optional: if you have a Place ID, use it for a direct link to the Google listing */
  placeId?: string;
  /** Height of the embed in pixels — default 400 */
  height?: number;
  /** Zoom level 1–20 — default 15 (neighborhood level) */
  zoom?: number;
}

export default function GoogleMapEmbed({
  businessName,
  address,
  placeId,
  height = 400,
  zoom = 15,
}: GoogleMapEmbedProps) {
  const encodedAddress = encodeURIComponent(`${businessName}, ${address}`);
  const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&z=${zoom}&output=embed`;
  const directionsUrl = placeId
    ? `https://www.google.com/maps/place/?q=place_id:${placeId}`
    : `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className="map-embed" id="map-section">
      <iframe
        src={mapSrc}
        width="100%"
        height={height}
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing location of ${businessName}`}
        aria-label={`Google Map showing ${businessName} at ${address}`}
      />
      <a
        href={directionsUrl}
        className="map-embed__directions"
        target="_blank"
        rel="noopener noreferrer"
        id="get-directions-link"
        aria-label={`Get directions to ${businessName}`}
      >
        Get Directions →
      </a>
    </div>
  );
}
