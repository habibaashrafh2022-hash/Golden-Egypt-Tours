// ============================================================
//  AITripBuilder.jsx — Golden Egypt Tours
//  FIXED: API working · No Arabic · Languages & Currencies clean
// ============================================================
import { useState } from "react";

const QUICK_PROMPTS = [
  { label: "5 Days Cairo & Pyramids",    icon: "🏛️", prompt: "Plan a 5-day luxury trip to Cairo focusing on the Pyramids, Egyptian Museum, and Islamic Cairo with hotel recommendations and daily budget breakdown" },
  { label: "7 Days Nile Cruise",         icon: "⛵", prompt: "Plan a 7-day Nile cruise from Luxor to Aswan including Valley of the Kings, Karnak Temple, Abu Simbel — include cruise ship options and prices" },
  { label: "10 Days Full Egypt",         icon: "🗺️", prompt: "Plan a 10-day complete Egypt tour covering Cairo, Luxor, Aswan, and Hurghada with internal flights, hotels, and tours — include total budget" },
  { label: "Honeymoon in Egypt",         icon: "💍", prompt: "Plan a 7-day romantic honeymoon in Egypt with luxury hotels, private tours, Nile cruise and special experiences for couples with prices" },
  { label: "Family Trip with Kids",      icon: "👨‍👩‍👧‍👦", prompt: "Plan an 8-day family-friendly Egypt trip with activities suitable for children, including pyramids, Luxor, and Red Sea with family hotel packages" },
  { label: "Red Sea Diving Week",        icon: "🤿", prompt: "Plan a 7-day diving and snorkeling trip in Hurghada and Sharm El Sheikh with dive sites, equipment rental, accommodations and total budget" },
  { label: "Budget Egypt 2 Weeks",       icon: "💰", prompt: "Plan a 14-day budget-friendly Egypt trip covering Cairo, Luxor, Aswan, and Dahab with cheapest options — total cost under $1000" },
  { label: "Luxury 5-Star Experience",   icon: "⭐", prompt: "Plan a 10-day ultra-luxury Egypt experience with 5-star hotels, private Egyptologist guides, private Nile cruise, and exclusive experiences with VIP pricing" },
];

const SYSTEM_PROMPT = `You are an expert Egypt travel planner for Golden Egypt Tours, a luxury travel company established in 2009.

When creating itineraries, ALWAYS include:

## 🗓️ DAY-BY-DAY ITINERARY
Format each day clearly:
- Day number and title
- Morning / Afternoon / Evening activities
- Specific sites, monuments, and experiences
- Meal recommendations

## 💰 DETAILED PRICING
Realistic USD prices for:
- Hotel options (Budget / Mid-range / Luxury tiers)
- Tour entrance fees
- Transport costs (domestic flights, trains, taxis)
- Meals budget per day
- Total trip cost estimate (3 tiers)

## 🏨 ACCOMMODATION
For each city recommend:
- Budget option ($30-80/night)
- Mid-range option ($80-200/night)
- Luxury option ($200-500+/night)

## ✈️ PRACTICAL TIPS
- Best time to visit
- What to pack
- Local customs and etiquette
- Visa information

## 📱 BOOKING
End every response with:
"Ready to book? Contact Golden Egypt Tours: WhatsApp +20 106 825 7754 | Email: goldenegypttours26@gmail.com"

Use emojis throughout. Be detailed and professional.
IMPORTANT: Always respond in the same language as the user's message.`;

const CURRENCIES = {
  USD: { s: "$",    r: 1      },
  EUR: { s: "€",    r: 0.92   },
  GBP: { s: "£",    r: 0.79   },
  EGP: { s: "E£",   r: 48.5   },
  SAR: { s: "SR",   r: 3.75   },
  AED: { s: "AED",  r: 3.67   },
  KWD: { s: "KD",   r: 0.31   },
  BRL: { s: "R$",   r: 4.97   },
  JPY: { s: "¥",    r: 149.5  },
  CNY: { s: "¥",    r: 7.24   },
  INR: { s: "₹",    r: 83.1   },
  RUB: { s: "₽",    r: 90.5   },
};

export default function AITripBuilder({ lang = "en", currency = "USD" }) {
  const [input, setInput]       = useState("");
  const [result, setResult]     = useState("");
  const [loading, setLoading]   = useState(false);
  const [phase, setPhase]       = useState("idle");
  const [adults, setAdults]     = useState(2);
  const [children, setChildren] = useState(0);
  const [duration, setDuration] = useState(7);
  const [budget, setBudget]     = useState("standard");
  const [showForm, setShowForm] = useState(false);
  const [copied, setCopied]     = useState(false);
  const [error, setError]       = useState("");

  const fmtPrice = (p) => {
    const c = CURRENCIES[currency] || CURRENCIES.USD;
    return `${c.s}${Math.round(p * c.r).toLocaleString()}`;
  };

  const buildPrompt = () => {
    const budgetMap = {
      budget:   "budget-friendly (under $50/day per person)",
      standard: "mid-range ($100-200/day per person)",
      luxury:   "luxury (over $300/day per person)",
    };
    return `${input}

Trip details:
- Adults: ${adults}
- Children: ${children}
- Duration: ${duration} days
- Budget level: ${budgetMap[budget]}
- Currency preference: ${currency}

Please provide all prices in ${currency} (${CURRENCIES[currency]?.s || "$"}).`;
  };

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setPhase("thinking");
    setResult("");
    setError("");

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 2000,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: buildPrompt() }],
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData?.error?.message || `API Error ${res.status}`);
      }

      const data = await res.json();
      const text = data.content?.map(i => i.text || "").join("\n") || "";

      if (!text) throw new Error("Empty response from API");

      setResult(text);
      setPhase("result");
    } catch (err) {
      setError(err.message || "Connection error. Please try again.");
      setPhase("idle");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleBook = () => {
    const snippet = result.slice(0, 400).replace(/[*#]/g, "").trim();
    const msg = encodeURIComponent(
      `🏛️ *AI Trip Builder Request — Golden Egypt Tours*\n\n*Trip:* ${input}\n*Adults:* ${adults} · *Children:* ${children}\n*Duration:* ${duration} days · *Budget:* ${budget}\n\n---\n${snippet}…\n\nPlease help me book this trip!`
    );
    window.open(`https://wa.me/201068257754?text=${msg}`, "_blank");
  };

  const reset = () => {
    setPhase("idle");
    setResult("");
    setInput("");
    setError("");
  };

  /* ── Styles ── */
  const G = "#C9A84C";
  const GL = "#E8C96D";

  const S = {
    wrap: {
      background: "linear-gradient(145deg,rgba(20,17,30,.97),rgba(5,3,9,.99))",
      border: "1px solid rgba(201,168,76,.2)",
      borderRadius: 22,
      padding: "clamp(1.5rem,4vw,3rem)",
      position: "relative",
      overflow: "hidden",
    },
    eyebrow: {
      fontSize: 10, color: G, letterSpacing: 4,
      textTransform: "uppercase", fontFamily: "'Josefin Sans',sans-serif",
      marginBottom: 8, display: "block", fontWeight: 700,
    },
    title: {
      fontFamily: "'Cinzel',serif",
      fontSize: "clamp(1.3rem,2.5vw,1.9rem)",
      fontWeight: 700, color: G, marginBottom: 4,
    },
    sub: {
      color: "rgba(237,232,217,.45)",
      fontSize: 13, fontFamily: "'Cormorant Garamond',serif",
      fontStyle: "italic", marginBottom: 24,
    },
    quickLabel: {
      fontSize: 9, color: "rgba(201,168,76,.5)", letterSpacing: 3,
      textTransform: "uppercase", fontFamily: "'Josefin Sans',sans-serif",
      marginBottom: 10, display: "block", fontWeight: 700,
    },
    quickGrid: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 },
    quickBtn: {
      background: "rgba(201,168,76,.07)",
      border: "1px solid rgba(201,168,76,.18)",
      borderRadius: 22, padding: "7px 16px",
      color: "rgba(237,232,217,.6)", fontSize: 12,
      cursor: "pointer", fontFamily: "'Josefin Sans',sans-serif",
      display: "flex", alignItems: "center", gap: 6,
      transition: "all .2s",
    },
    formToggle: {
      background: "transparent",
      border: "1px dashed rgba(201,168,76,.25)",
      borderRadius: 8, padding: "7px 16px",
      color: "rgba(201,168,76,.5)", fontSize: 11,
      cursor: "pointer", fontFamily: "'Josefin Sans',sans-serif",
      marginBottom: 14, display: "flex", alignItems: "center", gap: 6,
      transition: "all .2s", letterSpacing: 1,
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(130px,1fr))",
      gap: 12, marginBottom: 16,
      padding: "16px", background: "rgba(201,168,76,.04)",
      borderRadius: 12, border: "1px solid rgba(201,168,76,.1)",
    },
    formLabel: {
      fontSize: 9, color: "rgba(201,168,76,.5)", letterSpacing: 2,
      textTransform: "uppercase", fontFamily: "'Josefin Sans',sans-serif",
      display: "block", marginBottom: 6,
    },
    formInput: {
      width: "100%",
      background: "rgba(201,168,76,.06)",
      border: "1px solid rgba(201,168,76,.2)",
      borderRadius: 8, padding: "8px 12px",
      color: "#EDE8D9", fontSize: 13, outline: "none",
      fontFamily: "'Cormorant Garamond',serif",
      transition: "border-color .2s",
    },
    textarea: {
      width: "100%",
      background: "rgba(201,168,76,.04)",
      border: "1px solid rgba(201,168,76,.22)",
      borderRadius: 13, padding: "15px 17px",
      color: "#EDE8D9", fontSize: 14, outline: "none",
      fontFamily: "'Cormorant Garamond',serif",
      lineHeight: 1.75, resize: "vertical", minHeight: 100,
      transition: "all .25s", colorScheme: "dark",
      marginBottom: 14,
    },
    generateBtn: {
      width: "100%",
      background: `linear-gradient(135deg,${G},${GL})`,
      color: "#050309", border: "none",
      borderRadius: 13, padding: "17px",
      cursor: "pointer", fontWeight: 700,
      fontSize: 13, letterSpacing: 2.5,
      textTransform: "uppercase",
      fontFamily: "'Josefin Sans',sans-serif",
      boxShadow: "0 8px 36px rgba(201,168,76,.4)",
      transition: "all .25s",
      display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
    },
    spinner: {
      width: 18, height: 18,
      border: "2px solid rgba(0,0,0,.2)",
      borderTop: "2px solid #050309",
      borderRadius: "50%",
      animation: "ai-spin .7s linear infinite",
    },
    thinkingBox: {
      display: "flex", alignItems: "center", gap: 14,
      padding: "20px", marginTop: 16,
      background: "rgba(201,168,76,.05)",
      border: "1px solid rgba(201,168,76,.15)",
      borderRadius: 12,
    },
    errorBox: {
      padding: "16px 20px", marginTop: 14,
      background: "rgba(255,60,60,.06)",
      border: "1px solid rgba(255,60,60,.2)",
      borderRadius: 12, color: "#FF8080",
      fontSize: 13, fontFamily: "'Cormorant Garamond',serif",
      lineHeight: 1.7,
    },
    resultBox: {
      marginTop: 20,
      background: "rgba(201,168,76,.03)",
      border: "1px solid rgba(201,168,76,.18)",
      borderRadius: 14, overflow: "hidden",
    },
    resultHeader: {
      display: "flex", alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 18px",
      borderBottom: "1px solid rgba(201,168,76,.12)",
      background: "rgba(201,168,76,.06)",
    },
    resultTitle: {
      color: G, fontSize: 10, letterSpacing: 2,
      textTransform: "uppercase",
      fontFamily: "'Josefin Sans',sans-serif",
      fontWeight: 700,
    },
    resultBody: {
      padding: "clamp(16px,3vw,26px)",
      color: "#EDE8D9", fontSize: "clamp(13px,1.5vw,15px)",
      lineHeight: 1.9, whiteSpace: "pre-wrap",
      maxHeight: 560, overflowY: "auto",
      fontFamily: "'Cormorant Garamond',serif",
    },
    resultFooter: {
      display: "flex", gap: 10, padding: "14px 18px",
      borderTop: "1px solid rgba(201,168,76,.12)",
      flexWrap: "wrap",
    },
    actionBtn: (variant) => ({
      flex: variant === "book" ? 1 : "none",
      background: variant === "book"
        ? "#25D366"
        : variant === "copy"
          ? "rgba(201,168,76,.1)"
          : "rgba(255,255,255,.05)",
      border: variant === "copy"
        ? "1px solid rgba(201,168,76,.25)"
        : variant === "new"
          ? "1px solid rgba(255,255,255,.1)"
          : "none",
      color: variant === "book" ? "#fff" : variant === "copy" ? G : "rgba(237,232,217,.4)",
      borderRadius: 10, padding: "11px 20px",
      cursor: "pointer", fontWeight: 700,
      fontSize: 12, letterSpacing: 1.5,
      textTransform: "uppercase",
      fontFamily: "'Josefin Sans',sans-serif",
      display: "flex", alignItems: "center",
      justifyContent: "center", gap: 8,
      transition: "all .2s",
    }),
  };

  return (
    <div style={S.wrap}>
      <style>{`
        @keyframes ai-spin { to { transform: rotate(360deg); } }
        @keyframes ai-pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        .ai-qbtn:hover { background:rgba(201,168,76,.16)!important; color:#C9A84C!important; border-color:rgba(201,168,76,.4)!important; }
        .ai-ftoggle:hover { background:rgba(201,168,76,.06)!important; color:#C9A84C!important; border-color:rgba(201,168,76,.35)!important; }
        .ai-result-body::-webkit-scrollbar { width: 4px; }
        .ai-result-body::-webkit-scrollbar-track { background: transparent; }
        .ai-result-body::-webkit-scrollbar-thumb { background: rgba(201,168,76,.3); border-radius: 2px; }
        .ai-input:focus { border-color: rgba(201,168,76,.6)!important; box-shadow: 0 0 0 3px rgba(201,168,76,.07)!important; }
        .ai-finput:focus { border-color: rgba(201,168,76,.5)!important; }
        .ai-genbtn:not(:disabled):hover { box-shadow: 0 12px 44px rgba(201,168,76,.55)!important; transform: translateY(-2px)!important; }
        .ai-actbtn:hover { opacity: .85!important; transform: translateY(-1px)!important; }
        /* Animated gold border on wrap */
        .ai-wrap-glow { position:absolute;inset:-1px;border-radius:23px;z-index:-1;background:linear-gradient(135deg,rgba(201,168,76,.4),rgba(201,168,76,.05),rgba(201,168,76,.35),rgba(201,168,76,.04));background-size:400% 400%;animation:ai-bordershift 6s ease infinite; }
        @keyframes ai-bordershift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
      `}</style>

      <div className="ai-wrap-glow" />

      {/* Decorative hieroglyphs */}
      <div style={{position:"absolute",top:16,right:20,fontSize:32,color:"rgba(201,168,76,.04)",fontFamily:"serif",pointerEvents:"none",letterSpacing:8}}>𓂀 𓅓 𓇋</div>
      <div style={{position:"absolute",bottom:14,left:18,fontSize:24,color:"rgba(201,168,76,.03)",fontFamily:"serif",pointerEvents:"none"}}>𓆣 𓂋 𓊃</div>

      {/* Header */}
      <div style={{marginBottom:22,position:"relative"}}>
        <span style={S.eyebrow}>✦ Powered by Claude AI</span>
        <div style={S.title}>🤖 AI Itinerary Builder</div>
        <div style={S.sub}>Describe your dream Egypt trip — get a complete day-by-day plan with real prices</div>
      </div>

      {phase !== "result" && (
        <>
          {/* Quick prompts */}
          <span style={S.quickLabel}>⚡ Quick inspiration</span>
          <div style={S.quickGrid}>
            {QUICK_PROMPTS.map((q, i) => (
              <button
                key={i}
                className="ai-qbtn"
                style={S.quickBtn}
                onClick={() => setInput(q.prompt)}
              >
                {q.icon} {q.label}
              </button>
            ))}
          </div>

          {/* Customize toggle */}
          <button
            className="ai-ftoggle"
            style={S.formToggle}
            onClick={() => setShowForm(!showForm)}
          >
            ⚙️ Customize trip details {showForm ? "▲" : "▼"}
          </button>

          {/* Customize form */}
          {showForm && (
            <div style={S.formGrid}>
              {[
                { label: "Adults", type: "number", val: adults, set: setAdults, min: 1, max: 20 },
                { label: "Children", type: "number", val: children, set: setChildren, min: 0, max: 10 },
                { label: "Days", type: "number", val: duration, set: setDuration, min: 1, max: 30 },
              ].map(({ label, type, val, set, min, max }) => (
                <div key={label}>
                  <label style={S.formLabel}>{label}</label>
                  <input
                    type={type} min={min} max={max} value={val}
                    onChange={e => set(+e.target.value)}
                    className="ai-finput" style={S.formInput}
                  />
                </div>
              ))}
              <div>
                <label style={S.formLabel}>Budget</label>
                <select
                  value={budget}
                  onChange={e => setBudget(e.target.value)}
                  className="ai-finput"
                  style={{ ...S.formInput, cursor: "pointer" }}
                >
                  <option value="budget">Budget</option>
                  <option value="standard">Standard</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
              <div>
                <label style={S.formLabel}>Currency</label>
                <select
                  value={currency}
                  className="ai-finput"
                  style={{ ...S.formInput, cursor: "pointer" }}
                  disabled
                >
                  {Object.keys(CURRENCIES).map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Main textarea */}
          <textarea
            className="ai-input"
            style={S.textarea}
            placeholder={`e.g. 10 days Egypt for 2 people — Cairo pyramids, 4-night Nile cruise Luxor to Aswan, 3 nights Hurghada diving, 4-star hotels, budget $3,500

Or try: Luxury honeymoon 10 nights, private tours, best 5-star hotels on the Nile`}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) handleGenerate(); }}
          />

          {/* Error */}
          {error && (
            <div style={S.errorBox}>
              ⚠️ {error}
              <br/>
              <span style={{fontSize:11,opacity:.7}}>
                For immediate help: WhatsApp +20 106 825 7754
              </span>
            </div>
          )}

          {/* Generate button */}
          <button
            className="ai-genbtn"
            style={{
              ...S.generateBtn,
              opacity: loading || !input.trim() ? 0.5 : 1,
              cursor: loading || !input.trim() ? "not-allowed" : "pointer",
            }}
            onClick={handleGenerate}
            disabled={loading || !input.trim()}
          >
            {loading ? (
              <><div style={S.spinner} /> Crafting your perfect Egypt journey…</>
            ) : (
              "🤖 Build My Itinerary"
            )}
          </button>

          {/* Thinking state below button */}
          {phase === "thinking" && (
            <div style={S.thinkingBox}>
              <div style={S.spinner} />
              <div>
                <div style={{color:G,fontFamily:"'Josefin Sans',sans-serif",fontSize:12,letterSpacing:1,marginBottom:4}}>
                  Building your day-by-day itinerary…
                </div>
                <div style={{color:"rgba(201,168,76,.45)",fontSize:11,fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",animation:"ai-pulse 1.8s ease-in-out infinite"}}>
                  Selecting hotels · Calculating prices · Planning routes
                </div>
              </div>
            </div>
          )}

          {/* Hint */}
          <div style={{textAlign:"center",marginTop:12,fontSize:11,color:"rgba(201,168,76,.3)",fontFamily:"'Josefin Sans',sans-serif",letterSpacing:1}}>
            Press Ctrl+Enter to generate · Powered by Claude Sonnet
          </div>
        </>
      )}

      {/* Result */}
      {phase === "result" && result && (
        <div style={S.resultBox}>
          <div style={S.resultHeader}>
            <span style={S.resultTitle}>
              ✦ Your Egypt Itinerary · {adults + children} Traveler{adults + children !== 1 ? "s" : ""} · {duration} Days
            </span>
            <div style={{display:"flex",gap:8}}>
              <button
                className="ai-actbtn"
                style={S.actionBtn("copy")}
                onClick={handleCopy}
              >
                {copied ? "✓ Copied!" : "📋 Copy"}
              </button>
            </div>
          </div>

          <div className="ai-result-body" style={S.resultBody}>
            {result}
          </div>

          <div style={S.resultFooter}>
            <button
              className="ai-actbtn"
              style={S.actionBtn("book")}
              onClick={handleBook}
            >
              💬 Book This Trip on WhatsApp
            </button>
            <button
              className="ai-actbtn"
              style={S.actionBtn("new")}
              onClick={reset}
            >
              🔄 New Plan
            </button>
          </div>
        </div>
      )}

      {/* Trust footer */}
      <div style={{
        display:"flex",gap:16,justifyContent:"center",
        marginTop:20,flexWrap:"wrap",
        borderTop:"1px solid rgba(201,168,76,.08)",
        paddingTop:16,
      }}>
        {[
          ["🔒","Secure","Bank-grade"],
          ["⚡","Instant","In seconds"],
          ["🌍","12 Languages","Multilingual"],
          ["💯","Free","No cost"],
        ].map(([ic, t, d]) => (
          <div key={t} style={{textAlign:"center",minWidth:72}}>
            <div style={{fontSize:18,marginBottom:3}}>{ic}</div>
            <div style={{fontSize:9,fontWeight:700,color:G,letterSpacing:1,fontFamily:"'Josefin Sans',sans-serif"}}>{t}</div>
            <div style={{fontSize:10,color:"rgba(201,168,76,.35)",fontFamily:"'Cormorant Garamond',serif",marginTop:1}}>{d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}