// ============================================================
//  ai.jsx — Aurevian Tours · AI Trip Builder Page
//  Full-page AI itinerary builder — same design as Home.jsx
//  Route: /ai
// ============================================================
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  SHARED_CSS, Nav, MobileMenu, Footer, FloatingButtons,
  HieroglyphFrieze, waLink, useGoogleTranslate, PHONE_WA,
} from "./SharedLayout";

// ─── QUICK PROMPT CHIPS ─────────────────────────────────────
const CHIPS = [
  "10 days Egypt for 2, Cairo + Nile cruise + Hurghada, budget $3,500",
  "7-day Nile cruise Luxor to Aswan, 4-star, 2 adults",
  "Luxury honeymoon Egypt 10 nights, private tours, $5,000",
  "Family Egypt 2 weeks, 2 adults + 2 kids, $6,000 total",
  "5-day Cairo & Giza private tour, 5-star hotels",
  "Adventure Egypt: Sinai trek + Red Sea diving, 8 days",
  "Budget Egypt trip 10 days, solo traveler, $1,200",
  "Egypt photography tour 12 days, sunrise at Pyramids, Valley of Kings",
];

const FEATURES = [
  { icon:"📅", label:"Day-by-Day Plan",      desc:"Complete daily schedule with timings" },
  { icon:"💰", label:"Real Prices",           desc:"Accurate cost breakdown per category" },
  { icon:"🏨", label:"Hotel Recommendations", desc:"Real hotel names & star ratings" },
  { icon:"🗺️", label:"Transport Details",     desc:"How to get between cities & sites" },
  { icon:"🍽️", label:"Dining Tips",           desc:"Restaurant recommendations & cuisine" },
  { icon:"📋", label:"Practical Tips",        desc:"Visa, packing, weather & culture" },
  { icon:"🌍", label:"13 Languages",          desc:"Get your itinerary in any language" },
  { icon:"💯", label:"Completely Free",       desc:"No sign-up, no credit card needed" },
];

const SAMPLE_ITINERARIES = [
  {
    label: "Cairo & Nile Cruise — 10 Days",
    prompt: "10 days Egypt for 2 people. Cairo 3 nights (Pyramids, Sphinx, Egyptian Museum, Khan el-Khalili), then fly to Luxor for 4-night Nile cruise to Aswan (Karnak, Valley of Kings, Edfu, Kom Ombo, Philae), then 3 nights Hurghada for Red Sea relaxation. 4-star hotels, budget $3,500 for 2 people.",
  },
  {
    label: "Honeymoon — 10 Nights Luxury",
    prompt: "Luxury honeymoon in Egypt for 2, 10 nights. Private sunrise at Pyramids of Giza, 5-star Cairo hotel, private Nile cruise (suite), candlelit dinner on the Nile, Abu Simbel day trip, finish with 3 nights luxury Red Sea resort in Hurghada. Budget $5,000 for 2.",
  },
  {
    label: "Family Adventure — 14 Days",
    prompt: "Family Egypt trip 14 days, 2 adults and 2 children aged 8 and 12. Kid-friendly pace. Cairo (Pyramids, mummies at the museum), train to Luxor (Valley of Kings, hot air balloon optional), 4-night Nile cruise, end with 4 nights Sharm El Sheikh beach. Total budget $6,000.",
  },
];

// ─── EXTRA CSS ───────────────────────────────────────────────
const PAGE_CSS = `
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@keyframes pulseRing{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:.15;transform:scale(1.07)}}
@keyframes typing{0%,80%,100%{opacity:0}40%{opacity:1}}

.av-ai-textarea{
  width:100%;
  background:rgba(255,253,246,.95);
  border:1.5px solid rgba(193,156,60,.3);
  border-radius:14px;
  padding:16px 18px;
  color:#231A0E;
  font-size:15px;
  outline:none;
  font-family:'Cormorant Garamond',serif;
  line-height:1.75;
  resize:vertical;
  min-height:120px;
  transition:border-color .2s,box-shadow .2s;
}
.av-ai-textarea:focus{
  border-color:rgba(160,120,40,.65);
  box-shadow:0 0 0 3px rgba(201,168,76,.1);
}
.av-ai-textarea::placeholder{color:rgba(35,26,14,.38);font-style:italic;}

.av-chip-btn{
  background:rgba(201,168,76,.08);
  border:1.5px solid rgba(193,156,60,.22);
  border-radius:20px;
  padding:7px 14px;
  cursor:pointer;
  font-size:11px;
  color:rgba(35,26,14,.72);
  font-family:'Josefin Sans',sans-serif;
  transition:all .2s;
  white-space:nowrap;
  text-align:left;
}
.av-chip-btn:hover{background:rgba(201,168,76,.18);border-color:rgba(160,120,40,.45);color:#231A0E;}
.av-chip-btn.active{background:rgba(201,168,76,.2);border-color:#A07828;color:#8B6010;font-weight:700;}

.av-result-box{
  background:rgba(255,253,246,.95);
  border:1.5px solid rgba(193,156,60,.28);
  border-radius:14px;
  padding:clamp(18px,3vw,28px);
  font-family:'Cormorant Garamond',serif;
  font-size:15px;
  color:#231A0E;
  line-height:1.9;
  white-space:pre-wrap;
  max-height:600px;
  overflow-y:auto;
  animation:fadeIn .4s ease;
  scroll-behavior:smooth;
}
.av-result-box::-webkit-scrollbar{width:4px;}
.av-result-box::-webkit-scrollbar-thumb{background:rgba(193,156,60,.4);border-radius:2px;}

.av-history-item{
  background:#fff;
  border:1px solid rgba(35,26,14,.08);
  border-radius:12px;
  padding:14px 16px;
  cursor:pointer;
  transition:all .2s;
  border-left:3px solid transparent;
}
.av-history-item:hover{border-left-color:#C9A84C;background:rgba(201,168,76,.04);}
.av-history-item.active{border-left-color:#A07828;background:rgba(201,168,76,.08);}
`;

// ─── MAIN COMPONENT ──────────────────────────────────────────
export default function AITripBuilderPage() {
  const navigate  = useNavigate();
  const langProps = useGoogleTranslate();
  const [scrolled,  setSc]      = useState(false);
  const [mMenu,     setMMenu]   = useState(false);
  const [query,     setQuery]   = useState("");
  const [result,    setResult]  = useState("");
  const [loading,   setLoading] = useState(false);
  const [done,      setDone]    = useState(false);
  const [history,   setHistory] = useState([]);
  const [activeH,   setActiveH] = useState(null);
  const [charCount, setChar]    = useState(0);
  const [vis,       setVis]     = useState({});

  useEffect(() => {
    const fn = () => setSc(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setVis(v => ({ ...v, [e.target.dataset.v]: true })); });
    }, { threshold:.08 });
    document.querySelectorAll("[data-v]").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const reveal = (key, delay=0) => ({
    opacity: vis[key] ? 1 : 0,
    transform: vis[key] ? "none" : "translateY(26px)",
    transition: `opacity .7s ease ${delay}s, transform .7s ease ${delay}s`,
  });

  const handleQuery = (q) => { setQuery(q); setChar(q.length); };

  const buildItinerary = useCallback(async () => {
    if (!query.trim() || loading) return;
    setLoading(true);
    setResult("");
    setDone(false);

    const SYSTEM = `You are a senior Egypt travel specialist at Aurevian Tours, a luxury Cairo-based travel company. Create a COMPLETE, PROFESSIONAL, detailed travel itinerary.

FORMAT your response exactly like this:

✦ TRIP OVERVIEW
[Trip name] · [Duration] · [Group size]
Estimated Total: $X per person / $X total

━━━━━━━━━━━━━━━━━━━━━━━━━
📅 DAY-BY-DAY ITINERARY
━━━━━━━━━━━━━━━━━━━━━━━━━

Day 1 — [City]: [Day Title]
🌅 Morning: [Specific activity, site name, duration]
☀️ Afternoon: [Specific activity, site name, duration]  
🌙 Evening: [Hotel check-in or dinner at specific restaurant]
🏨 Hotel: [Real hotel name · Stars · Est. $X/night]

[Continue for ALL days with same format]

━━━━━━━━━━━━━━━━━━━━━━━━━
🏨 ACCOMMODATION SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━
[City]: [Hotel Name] · [Stars] · Est. $X/night

━━━━━━━━━━━━━━━━━━━━━━━━━
✈️ TRANSPORT
━━━━━━━━━━━━━━━━━━━━━━━━━
[How to move between cities with options and estimated costs]

━━━━━━━━━━━━━━━━━━━━━━━━━
🍽️ DINING HIGHLIGHTS
━━━━━━━━━━━━━━━━━━━━━━━━━
[3-5 specific restaurant names with location and price range]

━━━━━━━━━━━━━━━━━━━━━━━━━
💰 COMPLETE BUDGET BREAKDOWN
━━━━━━━━━━━━━━━━━━━━━━━━━
• Accommodation: $X
• Domestic Flights/Transport: $X
• Tour Guides & Private Car: $X
• Site Entry Tickets: $X
• Meals (estimate): $X
• Miscellaneous/Tips: $X
──────────────────────────
• TOTAL: $X per person
• TOTAL: $X for [N] people

━━━━━━━━━━━━━━━━━━━━━━━━━
📋 PRACTICAL TIPS
━━━━━━━━━━━━━━━━━━━━━━━━━
• Visa: [specific info]
• Best time to visit: [month range]
• What to pack: [key items]
• Cultural tips: [key advice]
• Currency: [EGP info]

Use REAL hotel names. Use REALISTIC prices. Be specific and detailed. Match the user's language if not English.`;

    try {
      const res = await fetch("https://golden-egypt-tours-production.up.railway.app/api/ai/trip-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          system: SYSTEM,
          query,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "AI service error");
      }

      const text = data.text ||
        data.content?.map(i => i.text || "").join("\n") ||
        "⚠️ Could not generate itinerary. Please try again.";

      setResult(text);
      setDone(true);
      setHistory(prev => [{
        id: Date.now(),
        query: query.length > 60 ? query.slice(0, 58) + "…" : query,
        result: text,
        time: new Date().toLocaleTimeString([], { hour:"2-digit", minute:"2-digit" }),
      }, ...prev.slice(0, 9)]);
      setActiveH(null);

    } catch (err) {
      setResult(`⚠️ ${err.message || "Connection error. Please check your internet connection and try again."}`);
      setDone(false);
    }
    setLoading(false);
  }, [query, loading]);

  const loadHistory = (item) => {
    setQuery(item.query);
    setResult(item.result);
    setDone(true);
    setActiveH(item.id);
  };

  const reset = () => {
    setQuery("");
    setResult("");
    setDone(false);
    setActiveH(null);
    setChar(0);
  };

  const waMsg = `I'd like to book the following Egypt trip:\n\n${query}\n\nPlease send me a quote and availability.`;

  return (
    <div style={{ background:"#FAF6ED", color:"#231A0E", minHeight:"100vh", overflowX:"hidden", fontFamily:"'Josefin Sans',sans-serif" }}>
      <style>{SHARED_CSS + PAGE_CSS}</style>
      <div id="gt-hidden" style={{ display:"none" }}/>

      <Nav scrolled={scrolled} mMenu={mMenu} setMMenu={setMMenu} activePath="/ai" langProps={langProps}/>
      <MobileMenu open={mMenu} setMMenu={setMMenu} activePath="/ai" langProps={langProps}/>

      {/* ══════════ HERO ══════════ */}
      <section style={{ background:"linear-gradient(135deg,#171009 0%,#1e1508 55%,#171009 100%)", padding:"clamp(52px,9vw,88px) clamp(20px,5vw,56px)", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:.07, backgroundImage:"repeating-linear-gradient(45deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)", backgroundSize:"20px 20px" }}/>
        <div style={{ position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:9, background:"rgba(201,168,76,.1)", border:"1.5px solid rgba(193,156,60,.3)", borderRadius:30, padding:"7px 20px", marginBottom:20 }}>
            <span style={{ fontSize:16 }}>🤖</span>
            <span style={{ fontSize:10, color:"#E8C96D", letterSpacing:"0.3em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>AI-Powered Planning</span>
            <span style={{ background:"linear-gradient(135deg,#A07828,#C9A84C)", color:"#FAF6ED", borderRadius:18, padding:"2px 10px", fontSize:8, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>FREE</span>
          </div>
          <h1 style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(28px,5vw,52px)", fontWeight:700, color:"#FAF6ED", lineHeight:1.12, marginBottom:16 }}>
            Build Your Perfect<br/><span style={{ color:"#E8C96D", fontStyle:"italic" }}>Egypt Trip with AI</span>
          </h1>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"clamp(14px,1.7vw,18px)", color:"rgba(250,246,237,.72)", maxWidth:560, margin:"0 auto 32px", lineHeight:1.75 }}>
            Describe your dream journey — get a complete day-by-day itinerary with real hotels, accurate prices, and expert tips in seconds.
          </p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            {[["⚡","Instant"],["💰","Real Prices"],["🌍","13 Languages"],["💯","100% Free"]].map(([ic,l]) => (
              <div key={l} style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(201,168,76,.08)", border:"1px solid rgba(193,156,60,.2)", borderRadius:20, padding:"6px 14px" }}>
                <span style={{ fontSize:13 }}>{ic}</span>
                <span style={{ fontSize:10, color:"rgba(250,246,237,.75)", letterSpacing:"0.1em", fontFamily:"'Josefin Sans',sans-serif", fontWeight:600 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ MAIN BUILDER ══════════ */}
      <section style={{ padding:"clamp(40px,6vw,72px) clamp(16px,4vw,48px)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 320px", gap:32, alignItems:"start" }}>

          {/* LEFT — BUILDER */}
          <div>
            {/* SCROLL CARD */}
            <div style={{ background:"linear-gradient(170deg,#fffdf6,#fbf3da)", border:"1.5px solid rgba(193,156,60,.4)", borderRadius:22, padding:"clamp(22px,4vw,36px)", boxShadow:"0 26px 64px rgba(35,26,14,.14)", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:5, background:"linear-gradient(90deg,#8B6010,#E8C96D 35%,#8B6010 65%,#E8C96D)", opacity:.85 }}/>

              <label style={{ display:"block", fontSize:10, color:"#A07828", letterSpacing:"0.25em", textTransform:"uppercase", marginBottom:13, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>
                ✦ Describe your dream Egypt journey
              </label>

              <textarea
                className="av-ai-textarea"
                value={query}
                onChange={e => handleQuery(e.target.value)}
                onKeyDown={e => { if (e.key==="Enter" && e.ctrlKey) buildItinerary(); }}
                rows={5}
                placeholder="e.g. 10 days Egypt for 2 people — Cairo pyramids, 4-night Nile cruise Luxor to Aswan, 3 nights Hurghada diving, 4-star hotels, budget $3,500 total"
              />
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14, marginTop:4 }}>
                <span style={{ fontSize:10, color:"rgba(35,26,14,.35)", fontFamily:"'Josefin Sans',sans-serif" }}>{charCount} chars · Ctrl+Enter to generate</span>
                {query && <button onClick={reset} style={{ background:"none", border:"none", color:"#9C7A3C", cursor:"pointer", fontSize:11, fontFamily:"'Josefin Sans',sans-serif" }}>✕ Clear</button>}
              </div>

              {/* QUICK CHIPS */}
              <div style={{ marginBottom:18 }}>
                <div style={{ fontSize:9, color:"#A07828", letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", marginBottom:10 }}>Quick Start</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
                  {CHIPS.map((ch, i) => (
                    <button key={i} className={`av-chip-btn ${query === ch ? "active" : ""}`} onClick={() => handleQuery(ch)}>
                      {ch.length > 46 ? ch.slice(0,44)+"…" : ch}
                    </button>
                  ))}
                </div>
              </div>

              {/* GENERATE BUTTON */}
              <button
                onClick={buildItinerary}
                disabled={loading || !query.trim()}
                style={{ width:"100%", background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)", color:"#FAF6ED", border:"none", borderRadius:13, padding:"16px", cursor: (loading||!query.trim()) ? "not-allowed" : "pointer", fontWeight:700, fontSize:12, letterSpacing:"0.18em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", opacity:(loading||!query.trim()) ? .5 : 1, display:"flex", alignItems:"center", justifyContent:"center", gap:12, boxShadow:"0 8px 30px rgba(160,120,40,.3)", transition:"all .2s", position:"relative" }}
              >
                {loading ? (
                  <>
                    <div style={{ width:18, height:18, border:"2px solid rgba(250,246,237,.3)", borderTop:"2px solid #FAF6ED", borderRadius:"50%", animation:"spin .7s linear infinite" }}/>
                    Crafting your itinerary…
                  </>
                ) : (
                  <>✦ Generate My Egypt Itinerary</>
                )}
                {!loading && !query.trim() && (
                  <span style={{ position:"absolute", inset:0, borderRadius:13, border:"1.5px solid rgba(232,201,109,.4)", animation:"pulseRing 2.2s ease-in-out infinite", pointerEvents:"none" }}/>
                )}
              </button>
            </div>

            {/* RESULT */}
            {(result || loading) && (
              <div style={{ marginTop:24 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
                  <div style={{ fontSize:10, color:"#A07828", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>
                    {loading ? "⏳ Generating…" : "✦ Your Itinerary"}
                  </div>
                  {done && (
                    <div style={{ display:"flex", gap:8 }}>
                      <button onClick={() => { navigator.clipboard?.writeText(result); }} style={{ background:"rgba(201,168,76,.1)", border:"1px solid rgba(193,156,60,.25)", color:"#8B6010", borderRadius:7, padding:"5px 12px", cursor:"pointer", fontSize:10, fontFamily:"'Josefin Sans',sans-serif", fontWeight:600 }}>📋 Copy</button>
                      <button onClick={reset} style={{ background:"rgba(35,26,14,.06)", border:"1px solid rgba(35,26,14,.1)", color:"#9C7A3C", borderRadius:7, padding:"5px 12px", cursor:"pointer", fontSize:10, fontFamily:"'Josefin Sans',sans-serif" }}>New Trip</button>
                    </div>
                  )}
                </div>

                {loading && !result && (
                  <div style={{ background:"linear-gradient(170deg,#fffdf6,#fbf3da)", border:"1.5px solid rgba(193,156,60,.28)", borderRadius:14, padding:"36px", textAlign:"center" }}>
                    <div style={{ width:36, height:36, border:"3px solid rgba(193,156,60,.2)", borderTop:"3px solid #C9A84C", borderRadius:"50%", animation:"spin .8s linear infinite", margin:"0 auto 16px" }}/>
                    <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"#9C7A3C", fontSize:15 }}>Our AI specialist is crafting your perfect Egypt itinerary…</p>
                  </div>
                )}

                {result && <div className="av-result-box">{result}</div>}

                {done && (
                  <div style={{ marginTop:16, display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                    <a href={waLink(waMsg)} target="_blank" rel="noreferrer" style={{ background:"#25D366", color:"#fff", borderRadius:11, padding:"14px 20px", textDecoration:"none", fontWeight:700, fontSize:12, fontFamily:"'Josefin Sans',sans-serif", display:"flex", alignItems:"center", justifyContent:"center", gap:9, boxShadow:"0 6px 22px rgba(37,211,102,.3)" }}>
                      💬 Book This Trip on WhatsApp
                    </a>
                    <button onClick={() => navigate("/contact")} style={{ background:"linear-gradient(135deg,#A07828,#C9A84C)", color:"#FAF6ED", border:"none", borderRadius:11, padding:"14px 20px", cursor:"pointer", fontWeight:700, fontSize:12, fontFamily:"'Josefin Sans',sans-serif", display:"flex", alignItems:"center", justifyContent:"center", gap:9 }}>
                      ✉️ Send Us This Itinerary
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* SAMPLE ITINERARIES */}
            {!result && !loading && (
              <div style={{ marginTop:32 }}>
                <div style={{ fontSize:10, color:"#A07828", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", marginBottom:14 }}>✦ Try a Sample Itinerary</div>
                <div style={{ display:"grid", gap:12 }}>
                  {SAMPLE_ITINERARIES.map((s, i) => (
                    <div key={i} className="av-history-item" onClick={() => handleQuery(s.prompt)} style={{ cursor:"pointer" }}>
                      <div style={{ fontFamily:"'Cinzel',serif", fontSize:13, fontWeight:600, color:"#231A0E", marginBottom:4 }}>{s.label}</div>
                      <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:12, color:"#9C7A3C", lineHeight:1.6 }}>{s.prompt.slice(0,120)}…</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — SIDEBAR */}
          <div style={{ display:"flex", flexDirection:"column", gap:18 }}>

            {/* WHAT YOU GET */}
            <div style={{ background:"#fff", border:"1px solid rgba(35,26,14,.08)", borderRadius:16, overflow:"hidden", boxShadow:"0 6px 20px rgba(35,26,14,.06)" }}>
              <div style={{ background:"linear-gradient(135deg,#241A0E,#171009)", padding:"16px 18px", borderBottom:"1px solid rgba(193,156,60,.2)" }}>
                <div style={{ fontSize:10, color:"#E8C96D", letterSpacing:"0.22em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>✦ What You Get</div>
              </div>
              <div style={{ padding:"18px" }}>
                {FEATURES.map((f, i) => (
                  <div key={i} style={{ display:"flex", gap:12, alignItems:"flex-start", marginBottom: i<FEATURES.length-1 ? 14 : 0 }}>
                    <span style={{ fontSize:18, flexShrink:0 }}>{f.icon}</span>
                    <div>
                      <div style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:11, fontWeight:700, color:"#231A0E", marginBottom:2 }}>{f.label}</div>
                      <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:12, color:"#9C7A3C" }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HISTORY */}
            {history.length > 0 && (
              <div style={{ background:"#fff", border:"1px solid rgba(35,26,14,.08)", borderRadius:16, overflow:"hidden", boxShadow:"0 6px 20px rgba(35,26,14,.06)" }}>
                <div style={{ background:"rgba(201,168,76,.06)", padding:"14px 18px", borderBottom:"1px solid rgba(193,156,60,.15)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div style={{ fontSize:10, color:"#A07828", letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>Recent</div>
                  <button onClick={() => setHistory([])} style={{ background:"none", border:"none", color:"#9C7A3C", cursor:"pointer", fontSize:10, fontFamily:"'Josefin Sans',sans-serif" }}>Clear</button>
                </div>
                <div style={{ padding:"10px 12px", display:"flex", flexDirection:"column", gap:6 }}>
                  {history.map(h => (
                    <div key={h.id} className={`av-history-item ${activeH===h.id?"active":""}`} onClick={() => loadHistory(h)}>
                      <div style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:11, color:"#231A0E", fontWeight:600, marginBottom:2 }}>{h.query}</div>
                      <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:11, color:"#9C7A3C" }}>{h.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BOOK WITH EXPERT */}
            <div style={{ background:"linear-gradient(135deg,#241A0E,#171009)", border:"1px solid rgba(193,156,60,.25)", borderRadius:16, padding:"22px 18px", textAlign:"center" }}>
              <div style={{ fontSize:28, marginBottom:12 }}>🧭</div>
              <div style={{ fontFamily:"'Cinzel',serif", fontSize:14, fontWeight:700, color:"#FAF6ED", marginBottom:8 }}>Prefer a Human Expert?</div>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"rgba(250,246,237,.6)", fontSize:12, lineHeight:1.7, marginBottom:16 }}>Talk directly with our Egypt specialists. We respond within 2 hours.</p>
              <a href={waLink()} target="_blank" rel="noreferrer" style={{ display:"block", background:"#25D366", color:"#fff", borderRadius:10, padding:"11px", textDecoration:"none", fontWeight:700, fontSize:12, fontFamily:"'Josefin Sans',sans-serif", marginBottom:8 }}>💬 WhatsApp Us</a>
              <button onClick={() => navigate("/contact")} style={{ display:"block", width:"100%", background:"rgba(201,168,76,.1)", border:"1.5px solid rgba(193,156,60,.25)", color:"#E8C96D", borderRadius:10, padding:"11px", cursor:"pointer", fontSize:12, fontFamily:"'Josefin Sans',sans-serif", fontWeight:600 }}>Contact Form →</button>
            </div>

            {/* TRUST */}
            <div style={{ background:"rgba(201,168,76,.06)", border:"1px solid rgba(193,156,60,.18)", borderRadius:14, padding:"18px" }}>
              {[["🔒","Secure & Private","Your data is never shared"],["⚡","Instant Results","Get your itinerary in seconds"],["🌍","13 Languages","Works in any language"],["💯","No Sign-Up","Free, always"]].map(([ic,t,d]) => (
                <div key={t} style={{ display:"flex", gap:10, alignItems:"center", marginBottom:12 }}>
                  <span style={{ fontSize:16 }}>{ic}</span>
                  <div>
                    <div style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:10, fontWeight:700, color:"#231A0E" }}>{t}</div>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:11, color:"#9C7A3C" }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FEATURES GRID ══════════ */}
      <section style={{ background:"var(--cream2)", padding:"clamp(48px,7vw,80px) clamp(16px,4vw,48px)" }}>
        <div style={{ maxWidth:1180, margin:"0 auto" }}>
          <div data-v="feat" style={{ textAlign:"center", marginBottom:"clamp(28px,4vw,48px)", ...reveal("feat") }}>
            <span className="av-eyebrow">How It Works</span>
            <h2 className="av-title">AI Planning, <em style={{ fontStyle:"italic", color:"#8B6010" }}>Human Expertise</em></h2>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"#9C7A3C", fontSize:15, marginTop:10, maxWidth:560, margin:"10px auto 0" }}>Our AI is trained on thousands of Egypt itineraries and priced by our local experts.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))", gap:18 }}>
            {[
              { step:"01", icon:"✍️", title:"Describe Your Trip", desc:"Tell the AI your dates, destinations, group, budget, and interests — in any language." },
              { step:"02", icon:"🤖", title:"AI Generates Itinerary", desc:"In seconds, you get a complete day-by-day plan with real hotels and accurate prices." },
              { step:"03", icon:"✏️", title:"Refine & Adjust", desc:"Not quite right? Edit your prompt and regenerate — it's instant and free." },
              { step:"04", icon:"💬", title:"Book with Our Team", desc:"Send your itinerary to us on WhatsApp and we'll confirm everything within 2 hours." },
            ].map((s, i) => (
              <div key={i} data-v={`hw${i}`} style={{ background:"#fff", borderRadius:14, border:"1px solid rgba(35,26,14,.08)", padding:"24px 20px", boxShadow:"0 6px 20px rgba(35,26,14,.06)", ...reveal(`hw${i}`, i*.08) }}>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:26, fontWeight:700, color:"rgba(193,156,60,.22)", marginBottom:10 }}>{s.step}</div>
                <div style={{ fontSize:24, marginBottom:10 }}>{s.icon}</div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:13, fontWeight:700, color:"#231A0E", marginBottom:8 }}>{s.title}</div>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:13.5, color:"rgba(35,26,14,.65)", lineHeight:1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA BAND ══════════ */}
      <section style={{ background:"#171009", padding:"clamp(40px,6vw,64px) clamp(16px,4vw,48px)" }}>
        <div style={{ maxWidth:860, margin:"0 auto", textAlign:"center" }}>
          <HieroglyphFrieze tone="dark"/>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(20px,3vw,30px)", fontWeight:700, color:"#FAF6ED", margin:"24px 0 10px" }}>
            Ready to Plan Your <em style={{ color:"#E8C96D" }}>Egypt Adventure?</em>
          </h2>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"rgba(250,246,237,.6)", fontSize:14, marginBottom:28 }}>
            Start with the AI builder above, or talk to our experts — either way, we'll make it perfect.
          </p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <button onClick={() => window.scrollTo({ top:0, behavior:"smooth" })} style={{ background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)", color:"#1B130A", border:"none", borderRadius:10, padding:"13px 28px", cursor:"pointer", fontWeight:700, fontSize:12, letterSpacing:"0.16em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", boxShadow:"0 8px 28px rgba(160,120,40,.35)" }}>✦ Build My Trip</button>
            <a href={waLink()} target="_blank" rel="noreferrer" style={{ background:"#25D366", color:"#fff", borderRadius:10, padding:"13px 24px", textDecoration:"none", fontWeight:700, fontSize:12, letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif" }}>💬 WhatsApp Expert</a>
            <button onClick={() => navigate("/tours")} style={{ background:"rgba(201,168,76,.1)", border:"1.5px solid rgba(193,156,60,.3)", color:"#E8C96D", borderRadius:10, padding:"13px 22px", cursor:"pointer", fontWeight:700, fontSize:12, letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif" }}>Browse Tours →</button>
          </div>
        </div>
      </section>

      <Footer/>
      <FloatingButtons/>
    </div>
  );
}