import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(timer); return 100; }
        return p + 2;
      });
    }, 40);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => onComplete?.(), 600);
    }
    if (progress > 30) setPhase(1);
    if (progress > 65) setPhase(2);
  }, [progress]);

  const glyphs = ["𓂀","𓅓","𓇋","𓆣","𓂋","𓃭","𓊃","𓌀","𓏏","𓈖"];

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "#060606",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      opacity: progress >= 100 ? 0 : 1,
      transition: "opacity 0.6s ease",
      pointerEvents: progress >= 100 ? "none" : "all",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital@1&display=swap');
        @keyframes glyphFloat {
          0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.04; }
          50% { transform: translateY(-20px) rotate(5deg); opacity: 0.09; }
        }
        @keyframes goldPulse {
          0%,100% { filter: drop-shadow(0 0 12px rgba(201,168,76,0.4)); }
          50% { filter: drop-shadow(0 0 40px rgba(201,168,76,0.9)) brightness(1.3); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerBar {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
        @keyframes rotateSlow {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Background hieroglyphs */}
      {glyphs.map((g, i) => (
        <div key={i} style={{
          position: "absolute",
          fontSize: `${28 + i * 6}px`,
          color: "rgba(201,168,76,0.05)",
          fontFamily: "serif",
          left: `${(i * 11) % 90 + 3}%`,
          top:  `${(i * 17) % 80 + 5}%`,
          animation: `glyphFloat ${4 + i * 0.6}s ease-in-out infinite`,
          animationDelay: `${i * 0.4}s`,
          pointerEvents: "none",
        }}>{g}</div>
      ))}

      {/* Outer ring */}
      <div style={{
        width: 120, height: 120,
        border: "1px solid rgba(201,168,76,0.15)",
        borderTop: "1px solid rgba(201,168,76,0.6)",
        borderRadius: "50%",
        position: "absolute",
        animation: "rotateSlow 3s linear infinite",
      }}/>
      <div style={{
        width: 90, height: 90,
        border: "1px solid rgba(201,168,76,0.08)",
        borderBottom: "1px solid rgba(201,168,76,0.4)",
        borderRadius: "50%",
        position: "absolute",
        animation: "rotateSlow 2s linear infinite reverse",
      }}/>

      {/* Eye of Ra */}
      <div style={{
        fontSize: 48,
        color: "#C9A84C",
        fontFamily: "serif",
        animation: "goldPulse 2.5s ease-in-out infinite",
        marginBottom: 0,
        position: "relative", zIndex: 2,
      }}>𓂀</div>

      {/* Brand name */}
      <div style={{
        marginTop: 28,
        fontFamily: "'Cinzel', serif",
        fontSize: 13,
        fontWeight: 700,
        color: "#C9A84C",
        letterSpacing: "0.4em",
        textTransform: "uppercase",
        animation: "fadeSlideUp 0.8s ease 0.2s both",
      }}>GOLDEN EGYPT</div>

      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: "italic",
        fontSize: 12,
        color: "rgba(201,168,76,0.45)",
        letterSpacing: "0.25em",
        marginTop: 6,
        animation: "fadeSlideUp 0.8s ease 0.4s both",
      }}>Tours & Expeditions</div>

      {/* Progress bar */}
      <div style={{
        marginTop: 40,
        width: 220,
        height: 2,
        background: "rgba(201,168,76,0.1)",
        borderRadius: 2,
        overflow: "hidden",
        animation: "fadeSlideUp 0.8s ease 0.5s both",
      }}>
        <div style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #8B6810, #C9A84C, #E8C96D, #C9A84C)",
          backgroundSize: "200% 100%",
          animation: "shimmerBar 1.5s linear infinite",
          borderRadius: 2,
          transition: "width 0.1s linear",
        }}/>
      </div>

      {/* Phase text */}
      <div style={{
        marginTop: 16,
        fontSize: 9,
        color: "rgba(201,168,76,0.35)",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        fontFamily: "'Cinzel', serif",
        animation: "fadeSlideUp 0.8s ease 0.6s both",
        minHeight: 14,
      }}>
        {phase === 0 && "Preparing your journey…"}
        {phase === 1 && "Loading Egypt's wonders…"}
        {phase === 2 && "Almost ready…"}
      </div>
    </div>
  );
}