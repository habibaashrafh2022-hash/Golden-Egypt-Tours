import { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = [
    'Unveiling Ancient Wonders…',
    'Preparing Your Luxury Journey…',
    'Welcome to Golden Egypt…',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(timer); return 100; }
        return p + Math.random() * 4 + 1.5;
      });
    }, 40);

    const phaseTimer = setInterval(() => {
      setPhase((p) => Math.min(p + 1, phases.length - 1));
    }, 700);

    return () => { clearInterval(timer); clearInterval(phaseTimer); };
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-inner">
        {/* Logo / Eye of Ra */}
        <div className="loading-emblem">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="38" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="4 3"/>
            <path d="M20 40 Q40 18 60 40 Q40 62 20 40Z" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5"/>
            <circle cx="40" cy="40" r="8" fill="url(#goldGrad)"/>
            <circle cx="40" cy="40" r="3" fill="#0a0a0a"/>
            <path d="M35 52 L40 60 L45 52" stroke="url(#goldGrad)" strokeWidth="1" fill="none"/>
            <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="80" y2="80">
                <stop offset="0%" stopColor="#fcd34d"/>
                <stop offset="50%" stopColor="#d4a843"/>
                <stop offset="100%" stopColor="#92660a"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="loading-brand">
          <span className="loading-brand-line">GOLDEN</span>
          <span className="loading-brand-main">EGYPT TOURS</span>
        </div>

        <div className="loading-phase">{phases[phase]}</div>

        <div className="loading-bar-track">
          <div
            className="loading-bar-fill"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <div className="loading-percent">{Math.min(Math.round(progress), 100)}%</div>
      </div>

      {/* Gold particles */}
      {[...Array(12)].map((_, i) => (
        <div key={i} className="loading-particle" style={{
          '--i': i,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        }}/>
      ))}
    </div>
  );
}
