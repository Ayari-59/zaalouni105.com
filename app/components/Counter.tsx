"use client";

import { useEffect, useState } from "react";

// 10 mai 2026, fin de match à Radès (~18 h 45 heure tunisienne, UTC+1) —
// repère symbolique de la 105e minute.
const GOAL_TS = Date.parse("2026-05-10T17:45:00Z");

function elapsed(now: number) {
  const s = Math.max(0, Math.floor((now - GOAL_TS) / 1000));
  return {
    jours: Math.floor(s / 86400),
    heures: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    secondes: s % 60,
  };
}

export default function Counter() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const d = now === null ? null : elapsed(now);
  const cells: Array<{ value: string; label: string }> = [
    { value: d ? String(d.jours) : "—", label: "jours" },
    { value: d ? String(d.heures).padStart(2, "0") : "—", label: "heures" },
    { value: d ? String(d.minutes).padStart(2, "0") : "—", label: "minutes" },
    { value: d ? String(d.secondes).padStart(2, "0") : "—", label: "secondes" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {cells.map((c) => (
        <div
          key={c.label}
          className="rounded-2xl border border-white/10 bg-coal px-4 py-6 text-center"
        >
          <div className="font-display text-4xl text-cream tabular-nums sm:text-5xl">
            {c.value}
          </div>
          <div className="mt-2 text-xs uppercase tracking-[0.25em] text-faded">
            {c.label}
          </div>
        </div>
      ))}
    </div>
  );
}
