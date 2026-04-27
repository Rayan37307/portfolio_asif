"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string; // ISO date string
}

function getTimeRemaining(target: string) {
  const total = new Date(target).getTime() - Date.now();
  if (total <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [time, setTime] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hrs", value: time.hours },
    { label: "Min", value: time.minutes },
    { label: "Sec", value: time.seconds },
  ];

  return (
    <div className="flex items-center gap-2 md:gap-3">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-2 md:gap-3">
          <div className="countdown-unit">
            <span className="countdown-number">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="countdown-label">{unit.label}</span>
          </div>
          {i < units.length - 1 && (
            <span className="text-blue-400/50 font-bold text-lg mt-[-1rem]">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
