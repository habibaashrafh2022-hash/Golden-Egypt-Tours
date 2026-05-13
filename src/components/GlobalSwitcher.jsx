import { useState, useRef, useEffect } from "react";
import { useGlobal, LANGUAGES, CURRENCIES } from "../context/GlobalContext";

// ============================================================
// LANGUAGE SWITCHER COMPONENT
// ============================================================
export function LanguageSwitcher({ variant = "dropdown" }) {
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
      <button
        onClick={() => setOpen(!open)}
        style={styles.switcherBtn}
        aria-label="Select Language"
      >
        <span style={{ fontSize: "1.2rem" }}>{currentLang?.flag}</span>
        <span style={styles.switcherLabel}>{currentLang?.name}</span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div style={styles.dropdown}>
          <div style={styles.dropdownHeader}>🌍 Language</div>
          <div style={styles.scrollList}>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                style={{
                  ...styles.dropdownItem,
                  ...(language === lang.code ? styles.activeItem : {}),
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{lang.flag}</span>
                <span>{lang.name}</span>
                {language === lang.code && <span style={styles.checkmark}>✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// CURRENCY SWITCHER COMPONENT
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
        style={styles.switcherBtn}
        aria-label="Select Currency"
        disabled={ratesLoading}
      >
        <span style={{ fontSize: "1.2rem" }}>{currentCurrency?.flag}</span>
        <span style={styles.switcherLabel}>
          {currentCurrency?.symbol} {currentCurrency?.code}
        </span>
        {ratesLoading ? (
          <span style={styles.spinner}>⟳</span>
        ) : (
          <ChevronIcon open={open} />
        )}
      </button>

      {open && (
        <div style={{ ...styles.dropdown, minWidth: "220px" }}>
          <div style={styles.dropdownHeader}>💱 Currency</div>
          <div style={styles.scrollList}>
            {CURRENCIES.map((curr) => (
              <button
                key={curr.code}
                onClick={() => {
                  setCurrency(curr.code);
                  setOpen(false);
                }}
                style={{
                  ...styles.dropdownItem,
                  ...(currency === curr.code ? styles.activeItem : {}),
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{curr.flag}</span>
                <span style={{ flex: 1 }}>
                  {curr.name}
                  <span style={styles.currencyCode}>
                    {curr.symbol} {curr.code}
                  </span>
                </span>
                {currency === curr.code && (
                  <span style={styles.checkmark}>✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// COMBINED SWITCHER (Language + Currency in one bar)
// ============================================================
export function GlobalSwitcherBar() {
  return (
    <div style={styles.bar}>
      <LanguageSwitcher />
      <div style={styles.divider} />
      <CurrencySwitcher />
    </div>
  );
}

// ============================================================
// HELPER: Chevron Icon
// ============================================================
function ChevronIcon({ open }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.2s ease",
        opacity: 0.6,
      }}
    >
      <path
        d="M2 4l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ============================================================
// STYLES
// ============================================================
const styles = {
  bar: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "6px 12px",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  divider: {
    width: "1px",
    height: "20px",
    background: "rgba(255,255,255,0.2)",
  },
  switcherBtn: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 10px",
    background: "transparent",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    color: "inherit",
    fontSize: "0.9rem",
    fontWeight: 500,
    transition: "background 0.15s ease",
  },
  switcherLabel: {
    maxWidth: "90px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  dropdown: {
    position: "absolute",
    top: "calc(100% + 8px)",
    right: 0,
    minWidth: "190px",
    background: "#1a1a2e",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "14px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
    zIndex: 9999,
    overflow: "hidden",
    animation: "fadeDown 0.15s ease",
  },
  dropdownHeader: {
    padding: "12px 16px 8px",
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    opacity: 0.5,
    color: "#fff",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  scrollList: {
    maxHeight: "320px",
    overflowY: "auto",
    padding: "6px",
  },
  dropdownItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    padding: "9px 12px",
    background: "transparent",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#e8e8f0",
    fontSize: "0.88rem",
    textAlign: "left",
    transition: "background 0.12s ease",
  },
  activeItem: {
    background: "rgba(99,102,241,0.25)",
    color: "#a5b4fc",
  },
  checkmark: {
    marginLeft: "auto",
    color: "#818cf8",
    fontWeight: 700,
    fontSize: "0.9rem",
  },
  currencyCode: {
    display: "block",
    fontSize: "0.75rem",
    opacity: 0.5,
    marginTop: "1px",
  },
  spinner: {
    display: "inline-block",
    animation: "spin 1s linear infinite",
    fontSize: "1rem",
  },
};