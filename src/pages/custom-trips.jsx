// ============================================================
//  custom-trips.jsx — Aurevian Tours · Custom Trips Page
//  Landing page showcasing the custom trip experience → /ai
// ============================================================
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SHARED_CSS, Nav, MobileMenu, Footer, FloatingButtons,
  HieroglyphFrieze, waLink, useGoogleTranslate,
} from "./SharedLayout";

const PROCESS = [
  { step:"01", icon:"💬", title:"Tell Us Your Vision", desc:"Share your dream — destinations, interests, travel dates, group size, and budget. Use our AI builder or talk to our team directly." },
  { step:"02", icon:"🤖", title:"AI + Expert Planning", desc:"Our AI Trip Builder instantly drafts a full itinerary with real prices. Our human experts then refine it to perfection." },
  { step:"03", icon:"✏️", title:"Refine Together", desc:"We tweak every detail until the itinerary feels exactly right — day by day, hotel by hotel, experience by experience." },
  { step:"04", icon:"✅", title:"Confirm & Relax", desc:"Book with confidence. We handle everything — guides, hotels, transport, tickets, transfers. You just show up and enjoy." },
];

const CUSTOMIZABLE = [
  { icon:"🏨", title:"Accommodation", items:["Budget guesthouses","Boutique hotels","5-star luxury resorts","Nile-view suites","Desert eco-lodges"] },
  { icon:"🚗", title:"Transport", items:["Private air-conditioned car","Luxury minibus","Nile cruise cabin","Domestic flights","Felucca sailboat"] },
  { icon:"🪪", title:"Your Guide", items:["Language of your choice","Egyptologist PhD guides","Female guides available","Photography-focused guide","Adventure sport guides"] },
  { icon:"🍽️", title:"Dining", items:["Local street food tours","Fine Nile-view dining","Cooking classes","Dietary requirements","Private rooftop dinners"] },
  { icon:"📸", title:"Experiences", items:["Sunrise at the Pyramids","Hot air balloon ride","Diving & snorkeling","Desert safari overnight","Private museum access"] },
  { icon:"⏱️", title:"Pace & Timing", items:["Slow & unhurried travel","Early access to sites","Skip-the-crowd entry","Flexible daily schedule","Rest days included"] },
];

const SAMPLE_TRIPS = [
  { title:"The Classic Egypt", duration:"10 Days", cities:"Cairo · Luxor · Aswan", price:"From $1,290", badge:"Most Popular", color:"#C9A84C", desc:"The perfect introduction to Egypt — pyramids, Nile cruise, and temples.", img:"https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600&q=80" },
  { title:"Honeymoon Egypt", duration:"10 Nights", cities:"Cairo · Nile Cruise · Hurghada", price:"From $1,490", badge:"Romantic", color:"#E91E8C", desc:"Candlelit dinners, private sunrise at Giza, and Red Sea relaxation.", img:"https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80" },
  { title:"Family Adventure", duration:"14 Days", cities:"Cairo · Luxor · Sharm", price:"From $2,200", badge:"Family", color:"#3E7CB8", desc:"Kids-friendly pacing, interactive guides, and beach time at the end.", img:"https://images.unsplash.com/photo-1553697388-94e804e2f0f6?w=600&q=80" },
  { title:"Sinai & Red Sea", duration:"6 Days", cities:"Sharm · Dahab · Sinai", price:"From $720", badge:"Adventure", color:"#E63946", desc:"Desert trekking, world-class diving, and a sunrise hike up Mount Sinai.", img:"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80" },
  { title:"Desert Explorer", duration:"8 Days", cities:"Cairo · Siwa · White Desert", price:"From $890", badge:"Off-Beat", color:"#FF9800", desc:"Egypt beyond the pyramids — oases, dunes, and unforgettable starry nights.", img:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80" },
  { title:"Nile Cruise Only", duration:"5 Days", cities:"Luxor → Aswan", price:"From $650", badge:"Bestseller", color:"#52B788", desc:"A floating palace on the Nile — temples, sunsets, and total relaxation.", img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80" },
];

const WHY_CUSTOM = [
  { icon:"✂️", title:"100% Tailored to You", desc:"No two custom trips are the same. Every detail is designed around your preferences, not a generic template." },
  { icon:"⏰", title:"Your Own Schedule", desc:"Start early, sleep in, linger at a temple — your itinerary runs at your pace, not a group's." },
  { icon:"👥", title:"Private All the Way", desc:"Your own guide, your own vehicle, your own experience. No strangers, no compromises." },
  { icon:"💰", title:"Best Value, Always", desc:"We cut out middlemen and work directly with top suppliers. Custom doesn't mean expensive." },
];

export default function CustomTrips() {
  const navigate  = useNavigate();
  const [scrolled, setSc]    = useState(false);
  const [mMenu,    setMMenu] = useState(false);
  const [vis,      setVis]   = useState({});
  const langProps = useGoogleTranslate();

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

  return (
    <div style={{ background:"#FAF6ED", color:"#231A0E", minHeight:"100vh", overflowX:"hidden", fontFamily:"'Josefin Sans',sans-serif" }}>
      <style>{SHARED_CSS + `
        .av-sample-card{transition:transform .4s cubic-bezier(.25,.8,.25,1),box-shadow .4s;}
        .av-sample-card:hover{transform:translateY(-8px);box-shadow:0 28px 60px rgba(35,26,14,.2)!important;}
        .av-sample-card:hover .av-si{transform:scale(1.08);}
        .av-si{transition:transform .6s ease;}
        .av-custom-item{transition:transform .3s,box-shadow .3s;}
        .av-custom-item:hover{transform:translateY(-4px);box-shadow:0 18px 44px rgba(35,26,14,.12)!important;}
      `}</style>
      <div id="gt-hidden" style={{ display:"none" }}/>

      <Nav scrolled={scrolled} mMenu={mMenu} setMMenu={setMMenu} activePath="/ai" langProps={langProps}/>
      <MobileMenu open={mMenu} setMMenu={setMMenu} activePath="/ai" langProps={langProps}/>

      {/* HERO */}
      <section style={{ position:"relative", minHeight:"min(82vh,740px)", display:"flex", alignItems:"center", overflow:"hidden" }}>
        <img src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1600&q=80" alt="Custom Egypt Journey"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", animation:"heroZoom 24s ease-in-out infinite alternate" }}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(105deg,rgba(17,12,6,.92) 0%,rgba(17,12,6,.7) 40%,rgba(17,12,6,.22) 75%)" }}/>
        <div style={{ position:"relative", zIndex:2, width:"min(660px,92%)", padding:"clamp(60px,10vh,100px) clamp(20px,5vw,56px)" }}>
          <div data-v="hEy" style={{ display:"inline-flex", alignItems:"center", gap:9, background:"rgba(201,168,76,.1)", border:"1.5px solid rgba(193,156,60,.3)", borderRadius:30, padding:"7px 18px", marginBottom:22, ...reveal("hEy") }}>
            <span style={{ fontSize:14 }}>✂️</span>
            <span style={{ fontSize:10, color:"#E8C96D", letterSpacing:"0.28em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>Fully Customized</span>
          </div>
          <h1 data-v="hT" style={{ fontFamily:"'Cinzel',serif", fontWeight:700, lineHeight:1.1, marginBottom:18, ...reveal("hT",.08) }}>
            <span style={{ display:"block", fontSize:"clamp(30px,5vw,56px)", color:"#FAF6ED" }}>Your Egypt,</span>
            <span style={{ display:"block", fontSize:"clamp(30px,5vw,56px)", color:"#E8C96D", fontStyle:"italic" }}>Your Way.</span>
          </h1>
          <p data-v="hP" style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"clamp(14px,1.6vw,18px)", color:"rgba(250,246,237,.78)", lineHeight:1.75, marginBottom:32, maxWidth:460, ...reveal("hP",.16) }}>
            Private guides. Tailor-made itineraries. Hand-picked hotels. One-of-a-kind experiences — crafted entirely around you.
          </p>
          <div data-v="hB" style={{ display:"flex", gap:13, flexWrap:"wrap", ...reveal("hB",.24) }}>
            <button onClick={() => navigate("/ai")} style={{ background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)", color:"#1B130A", border:"none", borderRadius:10, padding:"15px 30px", cursor:"pointer", fontWeight:700, fontSize:12, letterSpacing:"0.16em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", boxShadow:"0 8px 28px rgba(160,120,40,.4)", display:"flex", alignItems:"center", gap:8 }}>
              🤖 Build with AI
            </button>
            <a href={waLink("I want to plan a custom Egypt trip")} target="_blank" rel="noreferrer" style={{ background:"#25D366", color:"#fff", borderRadius:10, padding:"15px 24px", textDecoration:"none", fontWeight:700, fontSize:12, letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", display:"flex", alignItems:"center", gap:8 }}>
              💬 Talk to an Expert
            </a>
          </div>
          <div data-v="hStats" style={{ display:"flex", gap:28, marginTop:36, flexWrap:"wrap", ...reveal("hStats",.32) }}>
            {[["12,000+","Happy Travelers"],["100%","Private Tours"],["13","Languages"],["24/7","Support"]].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:20, fontWeight:700, color:"#E8C96D" }}>{n}</div>
                <div style={{ fontSize:10, color:"rgba(250,246,237,.55)", letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CUSTOM */}
      <section style={{ background:"var(--cream2)", padding:"clamp(48px,7vw,80px) clamp(16px,4vw,48px)" }}>
        <div style={{ maxWidth:1180, margin:"0 auto" }}>
          <div data-v="why" style={{ textAlign:"center", marginBottom:"clamp(28px,4vw,48px)", ...reveal("why") }}>
            <span className="av-eyebrow">Why Go Custom?</span>
            <h2 className="av-title">The Private Tour <em style={{ fontStyle:"italic", color:"#8B6010" }}>Advantage</em></h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:20 }}>
            {WHY_CUSTOM.map((w, i) => (
              <div key={i} data-v={`wh${i}`} className="av-custom-item" style={{ background:"#fff", borderRadius:16, border:"1px solid rgba(35,26,14,.08)", padding:"clamp(20px,3vw,28px)", boxShadow:"0 6px 20px rgba(35,26,14,.06)", ...reveal(`wh${i}`,i*.06) }}>
                <div style={{ fontSize:30, marginBottom:14 }}>{w.icon}</div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:14, fontWeight:700, color:"#231A0E", marginBottom:9 }}>{w.title}</div>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:14, color:"rgba(35,26,14,.65)", lineHeight:1.75 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="av-section">
        <div style={{ maxWidth:1180, margin:"0 auto" }}>
          <div data-v="proc" style={{ textAlign:"center", marginBottom:"clamp(28px,4vw,52px)", ...reveal("proc") }}>
            <span className="av-eyebrow">The Process</span>
            <h2 className="av-title">How Custom Trips Work</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:20, position:"relative" }}>
            {PROCESS.map((p, i) => (
              <div key={i} data-v={`pr${i}`} style={{ textAlign:"center", ...reveal(`pr${i}`,i*.1) }}>
                <div style={{ width:56, height:56, background:"linear-gradient(135deg,#A07828,#C9A84C)", borderRadius:"50%", margin:"0 auto 16px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, boxShadow:"0 8px 24px rgba(160,120,40,.3)", position:"relative" }}>
                  {p.icon}
                  <div style={{ position:"absolute", top:-4, right:-4, width:22, height:22, background:"#FAF6ED", border:"2px solid #C9A84C", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, fontWeight:700, color:"#8B6010", fontFamily:"'Josefin Sans',sans-serif" }}>{p.step}</div>
                </div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:14, fontWeight:700, color:"#231A0E", marginBottom:10 }}>{p.title}</div>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:13.5, color:"rgba(35,26,14,.65)", lineHeight:1.75, maxWidth:220, margin:"0 auto" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI BUILDER CTA */}
      <section style={{ background:"linear-gradient(170deg,#fffdf6,#fbf3da)", padding:"clamp(48px,7vw,80px) clamp(16px,4vw,48px)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:5, background:"linear-gradient(90deg,#8B6010,#E8C96D 35%,#8B6010 65%,#E8C96D)" }}/>
        <div style={{ maxWidth:900, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"center" }}>
          <div data-v="ai" style={{ ...reveal("ai") }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:9, background:"rgba(201,168,76,.1)", border:"1.5px solid rgba(193,156,60,.3)", borderRadius:30, padding:"7px 18px", marginBottom:18 }}>
              <span style={{ fontSize:14 }}>🤖</span>
              <span style={{ fontSize:10, color:"#A07828", letterSpacing:"0.28em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>AI-Powered</span>
              <span style={{ background:"linear-gradient(135deg,#A07828,#C9A84C)", color:"#FAF6ED", borderRadius:18, padding:"2px 9px", fontSize:8, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>NEW</span>
            </div>
            <h2 className="av-title" style={{ marginBottom:14 }}>Build Your Trip<br/>with <em style={{ fontStyle:"italic", color:"#8B6010" }}>AI in Seconds</em></h2>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:15, color:"#9C7A3C", lineHeight:1.8, marginBottom:24 }}>
              Describe your dream Egypt journey and get a complete day-by-day itinerary with real hotel names, accurate prices, and transport details — instantly.
            </p>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <button onClick={() => navigate("/ai")} style={{ background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)", color:"#1B130A", border:"none", borderRadius:10, padding:"14px 28px", cursor:"pointer", fontWeight:700, fontSize:12, letterSpacing:"0.16em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", boxShadow:"0 8px 28px rgba(160,120,40,.35)", display:"flex", alignItems:"center", gap:8 }}>✦ Try AI Trip Builder</button>
              <a href={waLink("I want a custom Egypt itinerary")} target="_blank" rel="noreferrer" style={{ background:"#25D366", color:"#fff", borderRadius:10, padding:"14px 22px", textDecoration:"none", fontWeight:700, fontSize:12, letterSpacing:"0.1em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", display:"flex", alignItems:"center", gap:8 }}>💬 WhatsApp Us</a>
            </div>
          </div>
          <div data-v="aiR" style={{ ...reveal("aiR",.12) }}>
            <div style={{ background:"rgba(255,255,255,.7)", border:"1.5px solid rgba(193,156,60,.3)", borderRadius:18, padding:24 }}>
              <div style={{ fontSize:10, color:"#A07828", letterSpacing:"0.24em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", marginBottom:14 }}>✦ What you get instantly</div>
              {[["📅","Complete day-by-day schedule"],["🏨","Real hotel names & categories"],["💰","Accurate price breakdown"],["🗺️","Transport between cities"],["🍽️","Dining recommendations"],["📋","Practical travel tips"],["🌍","Available in 13 languages"],["💯","Completely free to use"]].map(([ic,t]) => (
                <div key={t} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                  <span style={{ fontSize:14, flexShrink:0 }}>{ic}</span>
                  <span style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:12, color:"#231A0E" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S CUSTOMIZABLE */}
      <section style={{ background:"var(--cream2)", padding:"clamp(48px,7vw,80px) clamp(16px,4vw,48px)" }}>
        <div style={{ maxWidth:1180, margin:"0 auto" }}>
          <div data-v="cust" style={{ textAlign:"center", marginBottom:"clamp(28px,4vw,48px)", ...reveal("cust") }}>
            <span className="av-eyebrow">Full Control</span>
            <h2 className="av-title">Everything is <em style={{ fontStyle:"italic", color:"#8B6010" }}>Customizable</em></h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:18 }}>
            {CUSTOMIZABLE.map((c, i) => (
              <div key={i} data-v={`cu${i}`} className="av-custom-item" style={{ background:"#fff", borderRadius:14, border:"1px solid rgba(35,26,14,.08)", padding:"22px 20px", boxShadow:"0 6px 20px rgba(35,26,14,.06)", ...reveal(`cu${i}`,i*.06) }}>
                <div style={{ fontSize:26, marginBottom:10 }}>{c.icon}</div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:13, fontWeight:700, color:"#231A0E", marginBottom:12 }}>{c.title}</div>
                <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                  {c.items.map(item => (
                    <div key={item} style={{ display:"flex", alignItems:"center", gap:7, fontFamily:"'Cormorant Garamond',serif", fontSize:13, color:"rgba(35,26,14,.68)" }}>
                      <span style={{ color:"#C9A84C", fontSize:10 }}>✦</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE TRIPS */}
      <section className="av-section">
        <div style={{ maxWidth:1180, margin:"0 auto" }}>
          <div data-v="samp" style={{ textAlign:"center", marginBottom:"clamp(28px,4vw,48px)", ...reveal("samp") }}>
            <span className="av-eyebrow">Inspiration</span>
            <h2 className="av-title">Popular Custom <em style={{ fontStyle:"italic", color:"#8B6010" }}>Itineraries</em></h2>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"#9C7A3C", fontSize:15, marginTop:10 }}>Use these as a starting point — we'll customize every detail for you.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:20 }}>
            {SAMPLE_TRIPS.map((t, i) => (
              <div key={i} data-v={`st${i}`} className="av-sample-card" style={{ borderRadius:18, overflow:"hidden", background:"#fff", border:"1px solid rgba(35,26,14,.08)", boxShadow:"0 8px 26px rgba(35,26,14,.08)", cursor:"pointer", ...reveal(`st${i}`,i*.07) }} onClick={() => navigate("/ai")}>
                <div style={{ position:"relative", height:168, overflow:"hidden", background:"#EDE3C8" }}>
                  <img className="av-si" src={t.img} alt={t.title} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} onError={e => e.target.src="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600&q=80"}/>
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(20,15,8,.55) 0%,transparent 55%)" }}/>
                  <div style={{ position:"absolute", top:11, left:11, background:t.color, color:"#fff", fontSize:9, fontWeight:700, padding:"4px 11px", borderRadius:18, textTransform:"uppercase", letterSpacing:"0.08em", fontFamily:"'Josefin Sans',sans-serif" }}>{t.badge}</div>
                  <div style={{ position:"absolute", top:11, right:11, background:"rgba(250,246,237,.92)", color:"#6B4E1A", fontSize:9, fontWeight:700, padding:"4px 10px", borderRadius:7, fontFamily:"'Josefin Sans',sans-serif" }}>{t.duration}</div>
                </div>
                <div style={{ padding:"16px 18px 20px" }}>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:11, color:"#9C7A3C", marginBottom:4 }}>📍 {t.cities}</div>
                  <div style={{ fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:15, color:"#231A0E", marginBottom:7 }}>{t.title}</div>
                  <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:13, color:"rgba(35,26,14,.65)", lineHeight:1.65, marginBottom:14 }}>{t.desc}</p>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <span style={{ fontFamily:"'Cinzel',serif", fontSize:16, fontWeight:700, color:"#8B6010" }}>{t.price}</span>
                    <span style={{ fontSize:11, color:"#A07828", fontFamily:"'Josefin Sans',sans-serif", fontWeight:700 }}>Customize →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:40 }}>
            <button onClick={() => navigate("/ai")} style={{ background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)", color:"#FAF6ED", border:"none", borderRadius:11, padding:"15px 40px", cursor:"pointer", fontWeight:700, fontSize:12, letterSpacing:"0.18em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", boxShadow:"0 8px 28px rgba(160,120,40,.32)" }}>✦ Build Your Custom Trip</button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background:"#171009", padding:"clamp(52px,7vw,88px) clamp(16px,4vw,48px)", textAlign:"center" }}>
        <div style={{ maxWidth:680, margin:"0 auto" }}>
          <HieroglyphFrieze tone="dark"/>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(22px,3vw,34px)", fontWeight:700, color:"#FAF6ED", margin:"28px 0 14px" }}>
            Ready to Plan Your<br/><em style={{ color:"#E8C96D" }}>Perfect Egypt Journey?</em>
          </h2>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"rgba(250,246,237,.6)", fontSize:15, marginBottom:36, lineHeight:1.75 }}>
            Use our AI Trip Builder for an instant itinerary, or talk to our experts directly. Either way, we'll design the trip of a lifetime — just for you.
          </p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <button onClick={() => navigate("/ai")} style={{ background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)", color:"#1B130A", border:"none", borderRadius:10, padding:"15px 32px", cursor:"pointer", fontWeight:700, fontSize:12, letterSpacing:"0.16em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", boxShadow:"0 8px 28px rgba(160,120,40,.4)", display:"flex", alignItems:"center", gap:9 }}>🤖 Try AI Builder</button>
            <a href={waLink("I want to plan a custom Egypt trip")} target="_blank" rel="noreferrer" style={{ background:"#25D366", color:"#fff", borderRadius:10, padding:"15px 26px", textDecoration:"none", fontWeight:700, fontSize:12, letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", display:"flex", alignItems:"center", gap:8 }}>💬 WhatsApp Expert</a>
            <button onClick={() => navigate("/contact")} style={{ background:"rgba(201,168,76,.1)", border:"1.5px solid rgba(193,156,60,.3)", color:"#E8C96D", borderRadius:10, padding:"15px 24px", cursor:"pointer", fontWeight:700, fontSize:12, letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif" }}>Contact Us →</button>
          </div>
        </div>
      </section>

      <Footer/>
      <FloatingButtons/>
    </div>
  );
}
