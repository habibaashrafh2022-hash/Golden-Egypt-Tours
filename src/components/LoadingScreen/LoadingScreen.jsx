import { useState, useEffect } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 15 + 10; // سريع جدًا

        if (next >= 100) {
          clearInterval(interval);

          setExit(true);

          setTimeout(() => {
            onComplete?.();
          }, 300);

          return 100;
        }

        return next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`lux-loader ${exit ? "exit" : ""}`}>
      <div className="lux-content">
        <h1 className="lux-title">AUREVIAN</h1>
        <p className="lux-sub">LUXURY TRAVEL EXPERIENCE</p>

        <div className="lux-bar">
          <div
            className="lux-fill"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}