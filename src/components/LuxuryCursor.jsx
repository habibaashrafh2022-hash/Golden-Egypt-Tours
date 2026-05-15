import { useEffect, useRef } from "react";

export default function LuxuryCursor() {
  const dot    = useRef(null);
  const ring   = useRef(null);
  const spotlight = useRef(null);
  const pos    = useRef({ x: 0, y: 0 });
  const ring_pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };

      // Dot — instant
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top  = e.clientY + "px";
      }

      // Spotlight
      if (spotlight.current) {
        spotlight.current.style.left = e.clientX + "px";
        spotlight.current.style.top  = e.clientY + "px";
      }
    };

    // Ring — smooth lag
    const animate = () => {
      ring_pos.current.x += (pos.current.x - ring_pos.current.x) * 0.12;
      ring_pos.current.y += (pos.current.y - ring_pos.current.y) * 0.12;
      if (ring.current) {
        ring.current.style.left = ring_pos.current.x + "px";
        ring.current.style.top  = ring_pos.current.y + "px";
      }
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);

    // Hover effects
    const onEnter = () => {
      if (dot.current)  dot.current.style.transform  = "translate(-50%,-50%) scale(2.5)";
      if (ring.current) ring.current.style.transform = "translate(-50%,-50%) scale(1.6)";
      if (ring.current) ring.current.style.borderColor = "rgba(201,168,76,0.9)";
    };
    const onLeave = () => {
      if (dot.current)  dot.current.style.transform  = "translate(-50%,-50%) scale(1)";
      if (ring.current) ring.current.style.transform = "translate(-50%,-50%) scale(1)";
      if (ring.current) ring.current.style.borderColor = "rgba(201,168,76,0.5)";
    };

    const clickables = () => document.querySelectorAll("a,button,[role=button],[style*=cursor]");
    const attach = () => clickables().forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    attach();
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.body.style.cursor = "";
      observer.disconnect();
    };
  }, []);

  // Only on desktop
  if (window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* Spotlight */}
      <div ref={spotlight} style={{
        position: "fixed", pointerEvents: "none", zIndex: 9990,
        width: 320, height: 320,
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
        transition: "opacity 0.3s",
      }}/>

      {/* Ring */}
      <div ref={ring} style={{
        position: "fixed", pointerEvents: "none", zIndex: 9998,
        width: 36, height: 36,
        borderRadius: "50%",
        border: "1px solid rgba(201,168,76,0.5)",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.2s ease, border-color 0.2s ease",
      }}/>

      {/* Dot */}
      <div ref={dot} style={{
        position: "fixed", pointerEvents: "none", zIndex: 9999,
        width: 6, height: 6,
        borderRadius: "50%",
        background: "#C9A84C",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.15s ease",
        boxShadow: "0 0 10px rgba(201,168,76,0.8)",
      }}/>
    </>
  );
}