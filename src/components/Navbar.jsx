import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { GlobalSwitcherBar } from "./GlobalSwitcher";

// ──────────────────────────────────────────
// NAV LINKS
// ──────────────────────────────────────────
const NAV_LINKS = [
  { to: "/",             label: "Home" },
  { to: "/city/cairo",   label: "Cairo" },
  { to: "/city/luxor",   label: "Luxor" },
  { to: "/city/aswan",   label: "Aswan" },
  { to: "/cruises",      label: "Nile Cruises" },
  { to: "/hotels",       label: "Hotels" },
  { to: "/Packages",     label: "Packages" },
];

// ──────────────────────────────────────────
// CSS INJECTION
// ──────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

@keyframes luxDropDown {
  from { opacity: 0; transform: translateY(-8px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
}
@keyframes drawerSlide {
  from { opacity: 0; transform: translateY(-12px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes goldGlow {
  0%,100% { filter: drop-shadow(0 0 6px rgba(201,168,76,0.3)); }
  50%     { filter: drop-shadow(0 0 18px rgba(201,168,76,0.7)); }
}

.nav-link-item:hover {
  color: #C9A84C !important;
}
.nav-link-item:hover .nav-underline {
  width: 80% !important;
}
.drawer-link:hover {
  color: #C9A84C !important;
  padding-left: 8px !important;
}
.hamburger-btn {
  display: none !important;
}
.desktop-menu {
  display: flex !important;
}
@media (max-width: 900px) {
  .hamburger-btn  { display: flex !important; }
  .desktop-menu   { display: none  !important; }
  .switcher-bar   { display: none  !important; }
}
`;

// ──────────────────────────────────────────
// COMPONENT
// ──────────────────────────────────────────
export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [bookOpen,  setBookOpen]  = useState(false);
  const location   = useLocation();
  const navigate   = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  // Close drawer on outside click
  const drawerRef = useRef(null);
  useEffect(() => {
    const onClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  return (
    <>
      <style>{CSS}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position:       "fixed",
        top:            0, left: 0, right: 0,
        height:         scrolled ? 64 : 72,
        zIndex:         1000,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "space-between",
        padding:        "0 clamp(16px, 4vw, 48px)",
        background:     scrolled
          ? "rgba(6,6,6,0.94)"
          : "linear-gradient(to bottom, rgba(6,6,6,0.7), transparent)",
        backdropFilter:       scrolled ? "blur(24px)" : "blur(4px)",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(4px)",
        borderBottom: scrolled
          ? "1px solid rgba(201,168,76,0.18)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.7)" : "none",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}>

        {/* Gold line at bottom when scrolled */}
        {scrolled && (
          <div style={{
            position:   "absolute",
            bottom:     0, left: 0, right: 0,
            height:     1,
            background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), rgba(201,168,76,0.6), rgba(201,168,76,0.4), transparent)",
          }}/>
        )}

        {/* ── LOGO ── */}
        <Link to="/" style={{ display: "flex", gap: 10, alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <div style={{ animation: "goldGlow 4s ease-in-out infinite" }}>
            <svg width="38" height="38" viewBox="0 0 36 36" fill="none">
              <polygon points="18,2 34,32 2,32"  fill="none" stroke="#C9A84C" strokeWidth="1.5"/>
              <polygon points="18,8 28,28 8,28"  fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="0.8"/>
              <circle  cx="18" cy="19" r="2.5"   fill="#C9A84C"/>
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
            <span style={{
              color: "#C9A84C", fontFamily: "'Cinzel', serif",
              fontWeight: 700, fontSize: "clamp(0.75rem, 1.2vw, 0.92rem)",
              letterSpacing: "0.22em",
            }}>GOLDEN EGYPT</span>
            <span style={{
              color: "rgba(246,231,193,0.55)", fontFamily: "'Cinzel', serif",
              fontWeight: 400, fontSize: "clamp(0.55rem, 0.8vw, 0.65rem)",
              letterSpacing: "0.38em",
            }}>TOURS & EXPEDITIONS</span>
          </div>
        </Link>

        {/* ── DESKTOP MENU ── */}
        <div className="desktop-menu" style={{ gap: 4, alignItems: "center" }}>
          {NAV_LINKS.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className="nav-link-item"
                style={{
                  color:          isActive ? "#C9A84C" : "rgba(246,231,193,0.78)",
                  textDecoration: "none",
                  fontFamily:     "'Plus Jakarta Sans', sans-serif",
                  fontSize:       "0.8rem",
                  fontWeight:     isActive ? 600 : 500,
                  letterSpacing:  "0.06em",
                  padding:        "6px 11px",
                  position:       "relative",
                  transition:     "color 0.25s",
                }}
              >
                {label}
                {/* Underline */}
                <span className="nav-underline" style={{
                  position:   "absolute",
                  bottom:     0, left: "50%",
                  transform:  "translateX(-50%)",
                  width:      isActive ? "80%" : 0,
                  height:     1,
                  background: "#C9A84C",
                  transition: "width 0.3s ease",
                  display:    "block",
                  borderRadius: 1,
                }}/>
              </Link>
            );
          })}
        </div>

        {/* ── RIGHT SIDE ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>

          {/* Switcher — desktop only */}
          <div className="switcher-bar">
            <GlobalSwitcherBar />
          </div>

          {/* Book Now — desktop */}
          <button
            className="desktop-menu"
            onClick={() => navigate("/#ai-sec")}
            style={{
              background:    "linear-gradient(135deg, #C9A84C, #E8C96D)",
              color:         "#060606",
              border:        "none",
              borderRadius:  10,
              padding:       "8px 20px",
              cursor:        "pointer",
              fontFamily:    "'Cinzel', serif",
              fontWeight:    700,
              fontSize:      "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              transition:    "all 0.25s",
              boxShadow:     "0 4px 20px rgba(201,168,76,0.35)",
              whiteSpace:    "nowrap",
            }}
          >
            Book Now
          </button>

          {/* Hamburger — mobile */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="menu"
            style={{
              flexDirection: "column",
              gap:           5,
              background:    "rgba(201,168,76,0.08)",
              border:        "1px solid rgba(201,168,76,0.25)",
              borderRadius:  9,
              cursor:        "pointer",
              padding:       "8px 10px",
              transition:    "all 0.2s",
            }}
          >
            <span style={{
              display: "block", width: 22, height: 2,
              background: "#C9A84C", borderRadius: 2,
              transition: "all 0.3s",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}/>
            <span style={{
              display: "block", width: 22, height: 2,
              background: "#C9A84C", borderRadius: 2,
              transition: "all 0.3s",
              opacity: menuOpen ? 0 : 1,
            }}/>
            <span style={{
              display: "block", width: 22, height: 2,
              background: "#C9A84C", borderRadius: 2,
              transition: "all 0.3s",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }}/>
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div
        ref={drawerRef}
        style={{
          position:       "fixed",
          top:            scrolled ? 64 : 72,
          left:           0, right: 0,
          background:     "rgba(6,6,6,0.98)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom:   "1px solid rgba(201,168,76,0.18)",
          zIndex:         999,
          transform:      menuOpen ? "translateY(0)"    : "translateY(-110%)",
          opacity:        menuOpen ? 1                  : 0,
          pointerEvents:  menuOpen ? "auto"             : "none",
          transition:     "all 0.4s cubic-bezier(0.4,0,0.2,1)",
          boxShadow:      "0 20px 60px rgba(0,0,0,0.8)",
        }}
      >
        {/* Gold top line */}
        <div style={{
          height:     2,
          background: "linear-gradient(90deg, transparent, #C9A84C, #E8C96D, #C9A84C, transparent)",
        }}/>

        <div style={{ padding: "20px 28px 28px" }}>
          {/* Links */}
          {NAV_LINKS.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className="drawer-link"
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "space-between",
                  color:          isActive ? "#C9A84C" : "rgba(246,231,193,0.8)",
                  textDecoration: "none",
                  fontFamily:     "'Plus Jakarta Sans', sans-serif",
                  fontSize:       "0.95rem",
                  fontWeight:     isActive ? 600 : 500,
                  padding:        "13px 0",
                  borderBottom:   "1px solid rgba(201,168,76,0.08)",
                  transition:     "all 0.2s ease",
                  letterSpacing:  "0.04em",
                }}
              >
                {label}
                <span style={{ color: "rgba(201,168,76,0.4)", fontSize: "0.8rem" }}>→</span>
              </Link>
            );
          })}

          {/* Switcher in drawer */}
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(201,168,76,0.1)" }}>
            <div style={{
              fontSize: "0.7rem", color: "rgba(201,168,76,0.4)",
              letterSpacing: "0.2em", textTransform: "uppercase",
              fontFamily: "'Cinzel', serif", marginBottom: 12,
            }}>
              Language & Currency
            </div>
            <GlobalSwitcherBar />
          </div>

          {/* Book Now */}
          <button
            onClick={() => { navigate("/"); setMenuOpen(false); }}
            style={{
              marginTop:     16,
              width:         "100%",
              background:    "linear-gradient(135deg, #C9A84C, #E8C96D)",
              color:         "#060606",
              border:        "none",
              borderRadius:  12,
              padding:       "14px",
              cursor:        "pointer",
              fontFamily:    "'Cinzel', serif",
              fontWeight:    700,
              fontSize:      "0.85rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              boxShadow:     "0 6px 28px rgba(201,168,76,0.4)",
            }}
          >
            ✈ Book Your Egypt Journey
          </button>
        </div>
      </div>
    </>
  );
}