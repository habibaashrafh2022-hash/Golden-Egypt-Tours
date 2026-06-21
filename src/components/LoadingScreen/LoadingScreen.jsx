import { useState, useEffect } from "react";
import "./LoadingScreen.css";

// ─── Aurevian Pyramid Logo (same as Home.jsx) ─────────────
function AurevianLogo() {
  return (
    <svg className="lux-logo-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ldPyr" x1="8%" y1="0%" x2="95%" y2="100%">
          <stop offset="0%"   stopColor="#7E5A0E"/>
          <stop offset="50%"  stopColor="#C9A84C"/>
          <stop offset="100%" stopColor="#F0D78C"/>
        </linearGradient>
        <linearGradient id="ldRing" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#E8C96D"/>
          <stop offset="100%" stopColor="#8B6010"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="29.5" stroke="url(#ldRing)" strokeWidth="1"   opacity="0.5"/>
      <circle cx="32" cy="32" r="25.6" stroke="url(#ldRing)" strokeWidth="0.6" opacity="0.32"/>
      <line x1="11.5" y1="49.5" x2="52.5" y2="49.5" stroke="url(#ldRing)" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      <path d="M32 12.5 L50.5 49 L13.5 49 Z" fill="url(#ldPyr)"/>
      <circle cx="32" cy="34.5" r="6.2" fill="#FBEFC8" opacity="0.95"/>
      <rect x="19.5" y="33.1" width="25" height="2.7" fill="#FBEFC8"/>
      <circle cx="32" cy="12.5" r="1.5" fill="#F7E2A0"/>
    </svg>
  );
}

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [exit,     setExit]     = useState(false);

  useEffect(() => {
    // سريع: ينتهي في ~600ms
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 22 + 14;
        if (next >= 100) {
          clearInterval(interval);
          setExit(true);
          setTimeout(() => onComplete?.(), 320);
          return 100;
        }
        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`lux-loader ${exit ? "exit" : ""}`}>
      {/* Sweep line */}
      <div className="lux-sweep"/>

      {/* Corner ornaments */}
      <div className="lux-corner tl"/>
      <div className="lux-corner tr"/>
      <div className="lux-corner bl"/>
      <div className="lux-corner br"/>

      {/* Main content */}
      <div className="lux-content">
        {/* Logo */}
        <div className="lux-logo-wrap">
          <AurevianLogo/>
        </div>

        {/* Hieroglyph divider */}
        <div className="lux-frieze">
          <span className="lux-glyph">☥ ☀ ☥</span>
        </div>

        {/* Brand */}
        <h1 className="lux-title">AUREVIAN</h1>
        <p className="lux-tours">TOURS</p>
        <p className="lux-sub">Luxury Egypt Journeys</p>

        {/* Progress */}
        <div className="lux-bar-wrap">
          <div className="lux-bar">
            <div
              className="lux-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
        <p className="lux-percent">{Math.min(Math.round(progress), 100)}%</p>
      </div>
    </div>
  );
}