import { useState } from "react";
import { startPaymobPayment } from "../utils/paymob";
import { calculatePrice, getGroupDiscount } from "../utils/pricing";
import { useGlobal } from "../context/GlobalContext";

export default function PaymentModal({ item, guests = 1, onClose }) {
  const { currency, exchangeRates, formatPrice } = useGlobal();

  const pricing = calculatePrice(item?.price || 0, guests, exchangeRates, currency);

  const [step,    setStep]    = useState(1); // 1=summary, 2=billing, 3=payment, 4=done
  const [loading, setLoading] = useState(false);
  const [iframeURL, setIframeURL] = useState("");
  const [error,   setError]   = useState("");

  const [billing, setBilling] = useState({
    firstName: "", lastName: "", email: "",
    phone: "", country: "", city: "",
  });

  const upd = (k) => (e) => setBilling(p => ({ ...p, [k]: e.target.value }));

  const handlePay = async () => {
    setLoading(true);
    setError("");
    await startPaymobPayment({
      amountUSD: pricing.totalUSD,
      billing,
      onSuccess: (url) => {
        setIframeURL(url);
        setStep(3);
        setLoading(false);
      },
      onError: (msg) => {
        setError(msg);
        setLoading(false);
      },
    });
  };

  const inp = {
    width: "100%", background: "rgba(201,168,76,0.05)",
    border: "1px solid rgba(201,168,76,0.2)", borderRadius: 10,
    padding: "11px 14px", color: "#EDE8D9", fontSize: 13,
    outline: "none", fontFamily: "'Cormorant Garamond', serif",
  };

  return (
    <div onClick={e => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed", inset: 0, zIndex: 3000,
        background: "rgba(0,0,0,0.92)", backdropFilter: "blur(20px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 16,
      }}>
      <div style={{
        background: "linear-gradient(145deg,#14111E,#050309)",
        border: "1px solid rgba(201,168,76,0.25)", borderRadius: 24,
        width: "min(580px,96vw)", maxHeight: "92vh", overflowY: "auto",
        boxShadow: "0 60px 140px rgba(0,0,0,0.95)",
      }}>
        {/* Gold top line */}
        <div style={{ height: 2, background: "linear-gradient(90deg,transparent,#C9A84C,#E8C96D,#C9A84C,transparent)" }}/>

        {/* Header */}
        <div style={{ padding: "22px 28px 16px", borderBottom: "1px solid rgba(201,168,76,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 9, color: "#C9A84C", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "'Cinzel',serif", marginBottom: 6 }}>
              ✦ Secure Payment
            </div>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 15, fontWeight: 700, color: "#EDE8D9" }}>
              {item?.name || item?.title || "Book Your Tour"}
            </div>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#6B5E4A", borderRadius: 8, width: 34, height: 34, cursor: "pointer", fontSize: 16 }}>✕</button>
        </div>

        <div style={{ padding: "24px 28px" }}>

          {/* ── STEP 1: Price Summary ── */}
          {step === 1 && (
            <div>
              {/* Guests + Pricing */}
              <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: 16, padding: 20, marginBottom: 20 }}>
                <div style={{ fontSize: 9, color: "#C9A84C", letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "'Cinzel',serif", marginBottom: 14 }}>Price Breakdown</div>

                {/* Group tiers */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 18 }}>
                  {[1,2,3,4].map(n => {
                    const g = getGroupDiscount(n);
                    const isSelected = guests === n || (n === 4 && guests >= 4);
                    return (
                      <div key={n} style={{
                        background: isSelected ? "rgba(201,168,76,0.15)" : "rgba(201,168,76,0.04)",
                        border: `1px solid ${isSelected ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.1)"}`,
                        borderRadius: 10, padding: "10px 12px",
                      }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: isSelected ? "#C9A84C" : "#6B5E4A", fontFamily: "'Cinzel',serif" }}>
                          {n === 4 ? "4+ People" : `${n} ${n === 1 ? "Person" : "People"}`}
                        </div>
                        <div style={{ fontSize: 11, color: "#EDE8D9", marginTop: 3, fontFamily: "'Cormorant Garamond',serif" }}>
                          {g.badge
                            ? <span style={{ color: "#52B788" }}>✦ {g.badge}</span>
                            : "Standard price"
                          }
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Total */}
                <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 12, color: "#6B5E4A", fontFamily: "'Cormorant Garamond',serif" }}>Base price / person</span>
                    <span style={{ fontSize: 12, color: "#EDE8D9" }}>{formatPrice(pricing.basePrice)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 12, color: "#6B5E4A", fontFamily: "'Cormorant Garamond',serif" }}>Guests</span>
                    <span style={{ fontSize: 12, color: "#EDE8D9" }}>× {guests}</span>
                  </div>
                  {pricing.discount > 0 && (
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ fontSize: 12, color: "#52B788" }}>Group discount</span>
                      <span style={{ fontSize: 12, color: "#52B788" }}>- {pricing.discount * 100}%</span>
                    </div>
                  )}
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(201,168,76,0.15)" }}>
                    <span style={{ fontFamily: "'Cinzel',serif", fontSize: 13, fontWeight: 700, color: "#C9A84C" }}>Total</span>
                    <span style={{ fontFamily: "'Cinzel',serif", fontSize: 20, fontWeight: 700, color: "#C9A84C" }}>{formatPrice(pricing.totalUSD)}</span>
                  </div>
                </div>
              </div>

              {/* Payment options */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <button onClick={() => setStep(2)} style={{
                  background: "linear-gradient(135deg,#C9A84C,#E8C96D)",
                  color: "#050309", border: "none", borderRadius: 12,
                  padding: "14px", cursor: "pointer", fontWeight: 700,
                  fontSize: 12, letterSpacing: "0.15em", fontFamily: "'Cinzel',serif",
                  boxShadow: "0 6px 28px rgba(201,168,76,0.4)",
                }}>
                  💳 Pay Online
                </button>
                <a href={`https://wa.me/201068257754?text=${encodeURIComponent(`Hi! I want to book: ${item?.name || item?.title}\nGuests: ${guests}\nTotal: $${pricing.totalUSD.toFixed(2)}`)}`}
                  target="_blank" rel="noreferrer"
                  style={{
                    background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.35)",
                    color: "#25D366", borderRadius: 12, padding: "14px",
                    textDecoration: "none", fontWeight: 700, fontSize: 12,
                    letterSpacing: "0.15em", fontFamily: "'Cinzel',serif",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  }}>
                  💬 WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* ── STEP 2: Billing Details ── */}
          {step === 2 && (
            <div>
              <div style={{ fontSize: 9, color: "#C9A84C", letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "'Cinzel',serif", marginBottom: 18 }}>Billing Details</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { k: "firstName", label: "First Name *", ph: "John" },
                  { k: "lastName",  label: "Last Name *",  ph: "Smith" },
                  { k: "email",     label: "Email *",      ph: "john@email.com", col: "1/-1" },
                  { k: "phone",     label: "Phone *",      ph: "+20 100 000 0000" },
                  { k: "country",   label: "Country",      ph: "Egypt" },
                  { k: "city",      label: "City",         ph: "Cairo" },
                ].map(f => (
                  <div key={f.k} style={{ gridColumn: f.col || "auto" }}>
                    <label style={{ fontSize: 9, color: "#C9A84C", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 7, fontFamily: "'Cinzel',serif" }}>{f.label}</label>
                    <input value={billing[f.k]} onChange={upd(f.k)} placeholder={f.ph} style={inp}
                      onFocus={e => e.target.style.borderColor = "rgba(201,168,76,0.6)"}
                      onBlur={e  => e.target.style.borderColor = "rgba(201,168,76,0.2)"}
                    />
                  </div>
                ))}
              </div>

              {error && (
                <div style={{ marginTop: 14, padding: "10px 14px", background: "rgba(231,76,60,0.1)", border: "1px solid rgba(231,76,60,0.3)", borderRadius: 10, color: "#e74c3c", fontSize: 12 }}>
                  ⚠️ {error}
                </div>
              )}

              <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
                <button onClick={() => setStep(1)} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#6B5E4A", borderRadius: 12, padding: "13px 20px", cursor: "pointer", fontSize: 12, fontFamily: "'Cinzel',serif" }}>← Back</button>
                <button onClick={handlePay} disabled={loading || !billing.firstName || !billing.email || !billing.phone} style={{
                  flex: 1, background: "linear-gradient(135deg,#C9A84C,#E8C96D)",
                  color: "#050309", border: "none", borderRadius: 12, padding: "13px",
                  cursor: loading ? "wait" : "pointer", fontWeight: 700, fontSize: 12,
                  letterSpacing: "0.15em", fontFamily: "'Cinzel',serif",
                  opacity: (!billing.firstName || !billing.email || !billing.phone) ? 0.5 : 1,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                }}>
                  {loading
                    ? <><div style={{ width: 16, height: 16, border: "2px solid rgba(0,0,0,0.2)", borderTop: "2px solid #050309", borderRadius: "50%", animation: "spin .7s linear infinite" }}/> Processing…</>
                    : "💳 Proceed to Payment"
                  }
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 3: Payment iFrame ── */}
          {step === 3 && iframeURL && (
            <div>
              <div style={{ fontSize: 9, color: "#C9A84C", letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "'Cinzel',serif", marginBottom: 14, textAlign: "center" }}>
                🔒 Secure Payment — Powered by Paymob
              </div>
              <iframe
                src={iframeURL}
                style={{ width: "100%", height: 500, border: "none", borderRadius: 12 }}
                title="Paymob Payment"
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}