'use client';
import { useEffect, useRef, useState } from 'react';

interface Stat {
  raw: number;       // numeric value to count to
  display: string;   // formatted display (e.g. "11,340")
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { raw: 979,    display: '979',    suffix: '+', label: 'Brands Franchised' },
  { raw: 11340,  display: '11,340', suffix: '',  label: 'Franchises Sold' },
  { raw: 234,    display: '234',    suffix: '',  label: 'Successful Exits' },
  { raw: 67,     display: '67',     suffix: '',  label: 'Expert Consultants' },
];

function useCountUp(target: number, duration = 1800, triggered: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, triggered]);
  return count;
}

function StatItem({ stat, triggered }: { stat: Stat; triggered: boolean }) {
  const count = useCountUp(stat.raw, 1800, triggered);
  const formatted = count >= stat.raw
    ? stat.display
    : count.toLocaleString();

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="stat-number">{formatted}{stat.suffix}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
      {STATS.map(s => <StatItem key={s.label} stat={s} triggered={triggered} />)}
    </div>
  );
}
