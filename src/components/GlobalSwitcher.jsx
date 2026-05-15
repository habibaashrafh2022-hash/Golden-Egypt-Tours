import { useState, useRef, useEffect } from "react";
import { useGlobal, LANGUAGES, CURRENCIES } from "../context/GlobalContext";

// ============================================================
// LANGUAGE SWITCHER
// ============================================================
export function LanguageSwitcher() {
  const { language, setLanguage, currentLang } = useGlobal();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <button onClick={() => setOpen(!open)} style={S.btn} aria-label="Language">
        <span style={{ fontSize: "1.1rem" }}>{currentLang?.flag}</span>
        <span style={S.btnLabel}>{currentLang?.name?.slice(0, 3)}</span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div style={S.dropdown}>
          <div style={S.dropHeader}>🌍 Language</div>
          <div style={S.scrollList}>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { setLanguage(lang.code); setOpen(false); }}
                style={{
                  ...S.dropItem,
                  ...(language === lang.code ? S.activeItem : {}),
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{lang.flag}</span>
                <span style={{ flex: 1 }}>{lang.name}</span>
                {language === lang.code && <span style={S.check}>✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// CURRENCY SWITCHER
// ============================================================
export function CurrencySwitcher() {
  const { currency, setCurrency, currentCurrency, ratesLoading } = useGlobal();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen(!open)}
        style={S.btn}
        disabled={ratesLoading}
        aria-label="Currency"
      >
        <span style={{ fontSize: "1.1rem" }}>{currentCurrency?.flag}</span>
        <span style={S.btnLabel}>
          {currentCurrency?.symbol} {currentCurrency?.code}
        </span>
        {ratesLoading
          ? <span style={S.spinner}>⟳</span>
          : <ChevronIcon open={open} />
        }
      </button>

      {open && (
        <div style={{ ...S.dropdown, minWidth: 230 }}>
          <div style={S.dropHeader}>💱 Currency</div>
          <div style={S.scrollList}>
            {CURRENCIES.map((curr) => (
              <button
                key={curr.code}
                onClick={() => { setCurrency(curr.code); setOpen(false); }}
                style={{
                  ...S.dropItem,
                  ...(currency === curr.code ? S.activeItem : {}),
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{curr.flag}</span>
                <span style={{ flex: 1 }}>
                  {curr.name}
                  <span style={S.currCode}>{curr.symbol} {curr.code}</span>
                </span>
                {currency === curr.code && <span style={S.check}>✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// COMBINED BAR
// ============================================================
export function GlobalSwitcherBar() {
  return (
    <div style={S.bar}>
      <LanguageSwitcher />
      <div style={S.divider} />
      <CurrencySwitcher />
    </div>
  );
}

// ============================================================
// CHEVRON
// ============================================================
function ChevronIcon({ open }) {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s ease", opacity: 0.6 }}>
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

// ============================================================
// STYLES — Luxury Gold Theme
// ============================================================
const S = {
  bar: {
    display:        "flex",
    alignItems:     "center",
    gap:            6,
    padding:        "5px 10px",
    background:     "rgba(201,168,76,0.08)",
    borderRadius:   12,
    backdropFilter: "blur(12px)",
    border:         "1px solid rgba(201,168,76,0.22)",
  },
  divider: {
    width:      1,
    height:     18,
    background: "rgba(201,168,76,0.25)",
  },
  btn: {
    display:    "flex",
    alignItems: "center",
    gap:        6,
    padding:    "5px 9px",
    background: "transparent",
    border:     "none",
    borderRadius: 8,
    cursor:     "pointer",
    color:      "#C9A84C",
    fontSize:   "0.82rem",
    fontWeight: 600,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    transition: "background 0.15s ease",
    letterSpacing: "0.03em",
  },
  btnLabel: {
    maxWidth:     80,
    overflow:     "hidden",
    textOverflow: "ellipsis",
    whiteSpace:   "nowrap",
  },
  dropdown: {
    position:     "absolute",
    top:          "calc(100% + 10px)",
    right:        0,
    minWidth:     200,
    background:   "rgba(10,8,18,0.97)",
    border:       "1px solid rgba(201,168,76,0.22)",
    borderRadius: 16,
    boxShadow:    "0 24px 64px rgba(0,0,0,0.8), 0 0 0 1px rgba(201,168,76,0.08)",
    zIndex:       9999,
    overflow:     "hidden",
    backdropFilter: "blur(20px)",
    animation:    "luxDropDown 0.2s cubic-bezier(0.4,0,0.2,1)",
  },
  dropHeader: {
    padding:       "12px 16px 8px",
    fontSize:      "0.7rem",
    fontWeight:    700,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color:         "rgba(201,168,76,0.5)",
    borderBottom:  "1px solid rgba(201,168,76,0.1)",
    fontFamily:    "'Cinzel', serif",
  },
  scrollList: {
    maxHeight: 300,
    overflowY: "auto",
    padding:   6,
  },
  dropItem: {
    display:      "flex",
    alignItems:   "center",
    gap:          10,
    width:        "100%",
    padding:      "9px 12px",
    background:   "transparent",
    border:       "none",
    borderRadius: 10,
    cursor:       "pointer",
    color:        "rgba(237,232,217,0.75)",
    fontSize:     "0.85rem",
    textAlign:    "left",
    transition:   "all 0.15s ease",
    fontFamily:   "'Plus Jakarta Sans', sans-serif",
  },
  activeItem: {
    background: "rgba(201,168,76,0.12)",
    color:      "#C9A84C",
  },
  check: {
    marginLeft: "auto",
    color:      "#C9A84C",
    fontWeight: 700,
    fontSize:   "0.85rem",
  },
  currCode: {
    display:    "block",
    fontSize:   "0.72rem",
    opacity:    0.45,
    marginTop:  2,
  },
  spinner: {
    display:   "inline-block",
    animation: "spin 1s linear infinite",
    fontSize:  "1rem",
    color:     "#C9A84C",
  },
};