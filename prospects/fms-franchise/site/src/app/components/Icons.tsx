/**
 * FMS Icon System
 *
 * Professional SVG line icons designed for the FMS franchise site.
 * Target audience: Gen X SMB business owners (38–58), experienced operators
 * who value credibility, proven expertise, and professional consulting aesthetics.
 *
 * Style: Clean 2px stroke, rounded linecap, no fill by default.
 * Color: Inherits from parent (use className or color prop to control).
 * Size: Use width/height props (default 24×24).
 */

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

const defaults = (props: IconProps) => ({
  width: props.size ?? 24,
  height: props.size ?? 24,
  fill: 'none',
  stroke: props.color ?? 'currentColor',
  strokeWidth: props.strokeWidth ?? 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: props.className,
});

// ── Business / Finance ────────────────────────────────────────────────────────

/** Dollar sign / revenue */
export function IconRevenue(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" />
    </svg>
  );
}

/** Bar chart / growth */
export function IconGrowth(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

/** Shield / protection / brand control */
export function IconShield(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

/** Award / recognition / proven */
export function IconAward(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

/** Trending up / ROI / exit value */
export function IconTrendingUp(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

/** Briefcase / business */
export function IconBriefcase(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

/** Layers / systems / operations */
export function IconLayers(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

/** Users / team / franchisees */
export function IconUsers(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

/** Map pin / territory / location */
export function IconMapPin(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/** Clock / timeline / speed */
export function IconClock(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

/** Check circle / verified */
export function IconCheckCircle(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

/** Star / excellence / reviews */
export function IconStar(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/** Document / FDD / contract */
export function IconDocument(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

/** Route / path / process */
export function IconRoute(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  );
}

/** Settings / operations / systems */
export function IconSettings(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

/** Phone / call / contact */
export function IconPhone(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/** Mail / email */
export function IconMail(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

/** Globe / international / scale */
export function IconGlobe(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

/** Calendar / scheduling / timeline */
export function IconCalendar(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

/** Book / education / learn */
export function IconBook(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

/** Lightbulb / insight / strategy */
export function IconLightbulb(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  );
}

/** Key / unlock / access / unlock growth */
export function IconKey(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

/** Lock / compliance / protection */
export function IconLock(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

/** Handshake-style: two overlapping circles / partnership */
export function IconHandshake(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

/** Target / goal / franchise sales */
export function IconTarget(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

/** Repeat / recurring / recurring royalties */
export function IconRepeat(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

/** Search / analysis / research */
export function IconSearch(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

/** Zap / speed / efficiency */
export function IconZap(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

/** Building / company / location */
export function IconBuilding(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="14" rx="1" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <path d="M9 11h1m4 0h1m-6 4h1m4 0h1" />
    </svg>
  );
}

/** Network / multi-unit / scale */
export function IconNetwork(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <line x1="12" y1="7" x2="5" y2="17" />
      <line x1="12" y1="7" x2="19" y2="17" />
      <line x1="7" y1="19" x2="17" y2="19" />
    </svg>
  );
}

/** Arrow right / next / CTA */
export function IconArrowRight(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/** Check / completed */
export function IconCheck(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/** Warning / alert / important */
export function IconAlertTriangle(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

/** Info */
export function IconInfo(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

/** Download / resource / checklist */
export function IconDownload(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

/** Calculator / ROI */
export function IconCalculator(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="8" y2="10" strokeWidth={3} />
      <line x1="12" y1="10" x2="12" y2="10" strokeWidth={3} />
      <line x1="16" y1="10" x2="16" y2="10" strokeWidth={3} />
      <line x1="8" y1="14" x2="8" y2="14" strokeWidth={3} />
      <line x1="12" y1="14" x2="12" y2="14" strokeWidth={3} />
      <line x1="16" y1="14" x2="16" y2="14" strokeWidth={3} />
      <line x1="8" y1="18" x2="12" y2="18" />
      <line x1="16" y1="18" x2="16" y2="18" strokeWidth={3} />
    </svg>
  );
}

/** Megaphone / marketing / franchise sales */
export function IconMegaphone(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  );
}

/** Heart / passion / community */
export function IconHeart(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

/** School / education / learning */
export function IconGradCap(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

/** Clipboard / checklist / assessment */
export function IconClipboard(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="13" y2="16" />
    </svg>
  );
}

/** Pie chart / market share / industry facts */
export function IconPieChart(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

/** Car / automotive / vehicle */
export function IconCar(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2" />
      <circle cx="9" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

/** Home / property / real estate */
export function IconHome(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

/** Activity / pulse / healthcare */
export function IconActivity(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

/** Package / product / retail */
export function IconPackage(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

/** Smile / child / kid */
export function IconSmile(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={3} />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={3} />
    </svg>
  );
}

/** Compass / direction / navigation */
export function IconCompass(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

/** External link */
export function IconExternalLink(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 0 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/** MessageSquare / testimonial / quote */
export function IconMessageSquare(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

/** Wrench / operations / support */
export function IconTool(props: IconProps) {
  const d = defaults(props);
  return (
    <svg {...d} viewBox="0 0 24 24">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
