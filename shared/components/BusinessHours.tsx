'use client';

interface HoursSpec {
  /** Full day name, e.g. 'Monday' */
  day: string;
  /** 'Closed' or time like '8:00 AM' */
  open: string;
  /** 'Closed' or time like '6:00 PM' */
  close: string;
}

interface BusinessHoursProps {
  hours: HoursSpec[];
  /** Current time override for testing — defaults to now */
  now?: Date;
  /** Show an open/closed badge — default true */
  showStatus?: boolean;
}

const DAY_ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function parseTime(timeStr: string, referenceDate: Date): Date | null {
  if (timeStr === 'Closed') return null;
  const d = new Date(referenceDate);
  const [time, meridiem] = timeStr.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (meridiem === 'PM' && hours !== 12) hours += 12;
  if (meridiem === 'AM' && hours === 12) hours = 0;
  d.setHours(hours, minutes || 0, 0, 0);
  return d;
}

function isOpenNow(hours: HoursSpec[], now: Date): boolean {
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  const todayHours = hours.find(h => h.day === dayName);
  if (!todayHours || todayHours.open === 'Closed') return false;
  const openTime  = parseTime(todayHours.open, now);
  const closeTime = parseTime(todayHours.close, now);
  if (!openTime || !closeTime) return false;
  return now >= openTime && now < closeTime;
}

function groupConsecutiveDays(hours: HoursSpec[]): Array<{ label: string; open: string; close: string }> {
  const sorted = [...hours].sort(
    (a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day)
  );

  const groups: Array<{ days: string[]; open: string; close: string }> = [];

  for (const h of sorted) {
    const last = groups[groups.length - 1];
    if (last && last.open === h.open && last.close === h.close) {
      last.days.push(h.day);
    } else {
      groups.push({ days: [h.day], open: h.open, close: h.close });
    }
  }

  return groups.map(g => {
    const abbr = (d: string) => d.slice(0, 3);
    const label = g.days.length === 1
      ? abbr(g.days[0])
      : g.days.length === 2
        ? `${abbr(g.days[0])} & ${abbr(g.days[1])}`
        : `${abbr(g.days[0])}–${abbr(g.days[g.days.length - 1])}`;
    return { label, open: g.open, close: g.close };
  });
}

export default function BusinessHours({ hours, now = new Date(), showStatus = true }: BusinessHoursProps) {
  const open = isOpenNow(hours, now);
  const groups = groupConsecutiveDays(hours);
  const todayName = now.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="business-hours" id="hours-section" aria-label="Business hours">
      {showStatus && (
        <div className={`business-hours__status ${open ? 'business-hours__status--open' : 'business-hours__status--closed'}`}>
          <span className="business-hours__dot" aria-hidden="true" />
          <span>{open ? 'Open Now' : 'Closed Now'}</span>
        </div>
      )}

      <dl className="business-hours__grid">
        {groups.map((g, i) => {
          const isTodayGroup = hours
            .filter(h => h.open === g.open && h.close === g.close)
            .some(h => h.day === todayName);

          return (
            <div
              key={i}
              className={`business-hours__row ${isTodayGroup ? 'business-hours__row--today' : ''}`}
              aria-current={isTodayGroup ? 'true' : undefined}
            >
              <dt className="business-hours__day">{g.label}</dt>
              <dd className="business-hours__time">
                {g.open === 'Closed' ? (
                  <span className="business-hours__closed">Closed</span>
                ) : (
                  `${g.open} – ${g.close}`
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
