import { useState, useEffect } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = [
    "Unveiling Ancient Wonders…",
    "Mapping the Nile Journey…",
    "Preparing Luxury Experience…",
    "Welcome to Golden Egypt Tours",
  ];

  useEffect(() => {
    let mounted = true;

    // smooth progress (cinematic feel)
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 2.5 + 0.8;

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            if (mounted) onComplete?.();
          }, 800);

          return 100;
        }

        return next;
      });
    }, 50);

    // phase switch
    const phaseTimer = setInterval(() => {
      setPhase((p) => (p < phases.length - 1 ? p + 1 : p));
    }, 1200);

    // safety fallback (important!)
    const forceExit = setTimeout(() => {
      onComplete?.();
    }, 8000);

    return () => {
      mounted = false;
      clearInterval(interval);
      clearInterval(phaseTimer);
      clearTimeout(forceExit);
    };
  }, [onComplete]);

  return (
    <div className="lux-loader">
      {/* background cinematic layers */}
      <div className="lux-bg" />
      <div className="lux-overlay" />

      {/* floating particles */}
      <div className="lux-particles">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* center content */}
      <div className="lux-content">
        {/* emblem */}
        <div className="lux-emblem">
          <svg width="90" height="90" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="#c9a84c"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />
            <circle cx="40" cy="40" r="6" fill="#c9a84c" />
          </svg>
        </div>

        {/* brand */}
        <h1 className="lux-title">GOLDEN EGYPT</h1>
        <p className="lux-sub">LUXURY TRAVEL EXPERIENCE</p>

        {/* phase */}
        <div className="lux-phase">{phases[phase]}</div>

        {/* progress bar */}
        <div className="lux-bar">
          <div
            className="lux-fill"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <div className="lux-percent">
          {Math.round(Math.min(progress, 100))}%
        </div>
      </div>
    </div>
  );
}