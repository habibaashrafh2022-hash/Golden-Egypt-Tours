// ============================================================
//  about.jsx — Aurevian Tours · About Us Page
//  Matches Home.jsx design system exactly:
//    same logo · same fonts · same nav · same footer · same CSS vars
// ============================================================
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";

// ─── CONSTANTS (mirrored from Home.jsx) ────────────────────
const PHONE_DISPLAY = "+20 106 825 4454";
const PHONE_WA      = "201068254454";
const EMAIL         = "aureviantours@gmail.com";
const waLink = (msg) => `https://wa.me/${PHONE_WA}${msg ? `?text=${msg}` : ""}`;

const NAV_LINKS = [
  ["Home",        "/"],
  ["Tours",       "/tours"],
  ["Nile Cruises","/packages"],
  ["Custom Trips","/ai"],
  ["About Us",    "/about"],
  ["Contact",     "/contact"],
];

const FOOTER_DEST    = [["Cairo","/city/cairo"],["Luxor","/city/luxor"],["Aswan","/city/aswan"],["Hurghada","/city/hurghada"],["Sharm El Sheikh","/city/sharm"],["All Destinations","/tours"]];
const FOOTER_TOURS   = [["Day Tours","/tours"],["Multi-Day Tours","/packages"],["Nile Cruises","/packages"],["Private Tours","/tours"],["Adventure Tours","/tours"],["All Tours","/tours"]];
const FOOTER_COMPANY = [["About Us","/about"],["Our Guides","/about"],["Travel Tips","/about"],["Blog","/about"],["Careers","/contact"],["Contact Us","/contact"]];
const FOOTER_SUPPORT = [["FAQ","/contact"],["Cancellation Policy","/contact"],["Privacy Policy","/contact"],["Terms & Conditions","/contact"]];

// ─── DATA ──────────────────────────────────────────────────
const STATS = [
  { icon:"👥", value:"12,000+", label:"Happy Travelers" },
  { icon:"⭐", value:"500+",    label:"5-Star Reviews"  },
  { icon:"🪪", value:"49+",     label:"Expert Guides"   },
  { icon:"📍", value:"10",      label:"Iconic Destinations" },
];

const VALUES = [
  { icon:"💎", title:"Handpicked Experiences",  desc:"Every tour is carefully curated to offer the finest glimpse into Egypt's timeless wonders — nothing generic, nothing rushed." },
  { icon:"🪪", title:"Expert Local Guides",      desc:"Our certified, passionate guides bring history to life. Professional, friendly, and genuinely in love with Egypt." },
  { icon:"👑", title:"Premium Service",          desc:"From first inquiry to safe return home, we treat every traveler with the luxury and care they deserve." },
  { icon:"✂️", title:"Tailor Made Trips",        desc:"No two journeys are alike. We design every itinerary around your dreams, your pace, and your preferences." },
  { icon:"🤝", title:"Trusted by Thousands",     desc:"12,000+ happy travelers and growing — our reputation is built entirely on unforgettable experiences." },
  { icon:"🛡️", title:"Best Price Guarantee",    desc:"Transparent pricing, no hidden fees. If you find it cheaper elsewhere, we'll match it — guaranteed." },
];

const DESTINATIONS = [
  { id:"cairo",      name:"Cairo",           icon:"🏛", tag:"Top Pick",   tours:120, color:"#C9A84C" },
  { id:"giza",       name:"Giza",            icon:"🔺", tag:"Iconic",     tours:95,  color:"#FFD54F" },
  { id:"luxor",      name:"Luxor",           icon:"🏺", tag:"Bestseller", tours:85,  color:"#D4905C" },
  { id:"aswan",      name:"Aswan",           icon:"🌅", tag:"Scenic",     tours:64,  color:"#7CB9E8" },
  { id:"hurghada",   name:"Hurghada",        icon:"🌊", tag:"Adventure",  tours:72,  color:"#52B788" },
  { id:"sharm",      name:"Sharm El Sheikh", icon:"🤿", tag:"Luxury",     tours:58,  color:"#9B72CF" },
  { id:"alexandria", name:"Alexandria",      icon:"📚", tag:"Culture",    tours:43,  color:"#4FC3F7" },
  { id:"fayoum",     name:"Fayoum",          icon:"🏜", tag:"Hidden Gem", tours:28,  color:"#81C784" },
  { id:"marsa-alam", name:"Marsa Alam",      icon:"🐠", tag:"Diving",     tours:35,  color:"#26C6DA" },
  { id:"ain-sokhna", name:"Ain Sokhna",      icon:"🌴", tag:"Relaxation", tours:31,  color:"#FF8A65" },
];

const TEAM = [
  { name:"Ahmed Hassan",   role:"Founder & CEO",        icon:"👤", note:"Egyptologist & luxury travel pioneer" },
  { name:"Sara El-Masry",  role:"Head of Operations",   icon:"👤", note:"10+ years in premium tour logistics"  },
  { name:"Omar Farouk",    role:"Senior Tour Guide",    icon:"👤", note:"PhD in Ancient Egyptian History"      },
  { name:"Nada Khalil",    role:"Customer Experience",  icon:"👤", note:"Multilingual · speaks 6 languages"    },
];

const WHY_TRUST = [
  { icon:"🛡️", t:"Licensed Guides",      d:"Govt. Certified" },
  { icon:"⭐",  t:"Best Price",           d:"No Hidden Fees"  },
  { icon:"↩️",  t:"Free Cancellation",   d:"Up to 24 Hours"  },
  { icon:"📞",  t:"24/7 Support",        d:"Always Here"     },
];

// ─── CSS (same design tokens as Home.jsx) ──────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&display=swap');

:root{
  --g:#C9A84C; --gl:#E8C96D; --gd:#8B6010;
  --bg:#FAF6ED; --cream2:#F3ECD8;
  --ink:#231A0E; --dim:rgba(35,26,14,.62);
  --card:#FFFFFF; --cardb:rgba(35,26,14,.08);
  --dark:#171009; --dark2:#241A0E;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--ink);font-family:'Josefin Sans',sans-serif;overflow-x:hidden;}
::selection{background:rgba(201,168,76,.3);}
::-webkit-scrollbar{width:5px;}
::-webkit-scrollbar-track{background:var(--cream2);}
::-webkit-scrollbar-thumb{background:rgba(193,156,60,.45);border-radius:3px;}

@keyframes fadeUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes heroZoom{0%{transform:scale(1)}100%{transform:scale(1.06)}}

.av-link:hover{color:var(--gd)!important;}
.av-ghost:hover{background:rgba(201,168,76,.12);border-color:rgba(160,120,40,.55)!important;}
.av-gold:hover{box-shadow:0 10px 30px rgba(160,120,40,.45);transform:translateY(-2px);}
.av-footlink:hover{color:var(--gd)!important;}
.av-social:hover{background:rgba(201,168,76,.18)!important;border-color:rgba(193,156,60,.5)!important;}
.av-val-card:hover{transform:translateY(-5px);box-shadow:0 22px 50px rgba(35,26,14,.13)!important;}
.av-dest-chip:hover{background:rgba(201,168,76,.18)!important;border-color:rgba(160,120,40,.5)!important;transform:translateY(-2px);}
.av-team-card:hover{transform:translateY(-6px);box-shadow:0 24px 56px rgba(35,26,14,.14)!important;}

.av-eyebrow{display:block;font-size:10px;color:var(--gd);letter-spacing:4px;text-transform:uppercase;margin-bottom:8px;font-weight:700;font-family:'Josefin Sans',sans-serif;}
.av-title{font-family:'Cinzel',serif;font-size:clamp(22px,3.4vw,38px);font-weight:700;color:var(--ink);line-height:1.2;}

.av-section{padding:clamp(48px,7vw,92px) clamp(16px,4vw,48px);}

.av-footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1.3fr;gap:clamp(24px,4vw,44px);}
@media(max-width:980px){.av-footer-grid{grid-template-columns:1fr 1fr;}}

.av-val-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
@media(max-width:900px){.av-val-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:560px){.av-val-grid{grid-template-columns:1fr;}}

.av-team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
@media(max-width:900px){.av-team-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:480px){.av-team-grid{grid-template-columns:1fr 1fr;}}

.av-why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
@media(max-width:900px){.av-why-grid{grid-template-columns:repeat(2,1fr);}}

.dn{display:flex!important;}
.dm{display:none!important;}
@media(max-width:900px){.dn{display:none!important;}.dm{display:flex!important;}}

.av-frieze{display:flex;align-items:center;justify-content:center;gap:clamp(14px,3vw,28px);padding:6px 10px;}
.av-frieze::before,.av-frieze::after{content:"";flex:1 1 auto;height:1px;max-width:160px;background:linear-gradient(90deg,transparent,rgba(193,156,60,.6),transparent);}
.av-frieze.dark::before,.av-frieze.dark::after{background:linear-gradient(90deg,transparent,rgba(232,201,109,.45),transparent);}
`;

// ─── LOGO (identical to Home.jsx) ──────────────────────────
function AurevianLogo({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aurPyr2" x1="8%" y1="0%" x2="95%" y2="100%">
          <stop offset="0%" stopColor="#7E5A0E"/>
          <stop offset="50%" stopColor="#C9A84C"/>
          <stop offset="100%" stopColor="#F0D78C"/>
        </linearGradient>
        <linearGradient id="aurRing2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8C96D"/>
          <stop offset="100%" stopColor="#8B6010"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="29.5" stroke="url(#aurRing2)" strokeWidth="1" opacity="0.5"/>
      <circle cx="32" cy="32" r="25.6" stroke="url(#aurRing2)" strokeWidth="0.6" opacity="0.32"/>
      <line x1="11.5" y1="49.5" x2="52.5" y2="49.5" stroke="url(#aurRing2)" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      <path d="M32 12.5 L50.5 49 L13.5 49 Z" fill="url(#aurPyr2)"/>
      <circle cx="32" cy="34.5" r="6.2" fill="#FBEFC8" opacity="0.95"/>
      <rect x="19.5" y="33.1" width="25" height="2.7" fill="#FBEFC8"/>
      <circle cx="32" cy="12.5" r="1.5" fill="#F7E2A0"/>
    </svg>
  );
}

function BrandMark({ size = 44, dark }) {
  const navigate = useNavigate();
  return (
    <div style={{ display:"flex", alignItems:"center", gap:11, cursor:"pointer", flexShrink:0 }} onClick={() => navigate("/")}>
      <AurevianLogo size={size}/>
      <div style={{ lineHeight:1 }}>
        <div style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(13px,1.6vw,17px)", fontWeight:700, letterSpacing:"0.1em", color: dark ? "#FAF6ED" : "#231A0E" }}>AUREVIAN</div>
        <div style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(11px,1.3vw,14px)", fontWeight:600, letterSpacing:"0.22em", color: dark ? "rgba(250,246,237,.75)" : "#8B6010", marginTop:1 }}>TOURS</div>
        <div style={{ fontSize:"clamp(6px,.8vw,7px)", color: dark ? "rgba(250,246,237,.5)" : "#9C7A3C", letterSpacing:"0.28em", marginTop:3, fontFamily:"'Josefin Sans',sans-serif", fontWeight:600 }}>LUXURY EGYPT JOURNEYS</div>
      </div>
    </div>
  );
}

function Glyph({ type, size = 17, color = "#A07828" }) {
  const p = { width:size, height:size, viewBox:"0 0 24 24", fill:"none" };
  if (type === "ankh") return <svg {...p}><circle cx="12" cy="6.4" r="4.1" stroke={color} strokeWidth="1.5"/><line x1="12" y1="10.3" x2="12" y2="21.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="5.8" y1="14.4" x2="18.2" y2="14.4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></svg>;
  if (type === "sun") return <svg {...p}><circle cx="12" cy="12" r="4.3" stroke={color} strokeWidth="1.5"/>{[0,45,90,135,180,225,270,315].map(a => <line key={a} x1={12+Math.cos(a*Math.PI/180)*7} y1={12+Math.sin(a*Math.PI/180)*7} x2={12+Math.cos(a*Math.PI/180)*9.6} y2={12+Math.sin(a*Math.PI/180)*9.6} stroke={color} strokeWidth="1.3" strokeLinecap="round"/>)}</svg>;
  if (type === "lotus") return <svg {...p}><path d="M12 20.5C12 20.5 5 16.2 5 10.3C5 7 7.6 5 9.9 6.7C11.1 7.6 12 9.5 12 11.5C12 9.5 12.9 7.6 14.1 6.7C16.4 5 19 7 19 10.3C19 16.2 12 20.5 12 20.5Z" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/></svg>;
  return null;
}

function HieroglyphFrieze({ tone = "light" }) {
  const color = tone === "dark" ? "#E8C96D" : "#A07828";
  return (
    <div className={`av-frieze ${tone}`}>
      {["ankh","sun","lotus","sun","ankh"].map((g,i) => <Glyph key={i} type={g} color={color} size={tone==="dark"?15:17}/>)}
    </div>
  );
}

// ─── NAV (identical structure to Home.jsx) ─────────────────
function Nav({ scrolled, mMenu, setMMenu }) {
  const navigate = useNavigate();
  return (
    <nav style={{ position:"sticky", top:0, zIndex:1000, height:80, background: scrolled ? "rgba(250,246,237,.98)" : "rgba(250,246,237,.96)", backdropFilter:"blur(18px)", borderBottom:"1px solid rgba(193,156,60,.18)", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 clamp(14px,4vw,40px)", boxShadow: scrolled ? "0 4px 26px rgba(35,26,14,.1)" : "none", transition:"all .3s ease" }}>
      <BrandMark size={46}/>
      <ul className="dn" style={{ display:"flex", gap:"clamp(14px,2vw,26px)", listStyle:"none", alignItems:"center" }}>
        {NAV_LINKS.map(([label, path]) => (
          <li key={path}>
            <Link to={path} className="av-link" style={{ color: path === "/about" ? "#A07828" : "rgba(35,26,14,.62)", fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", textDecoration:"none", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>{label}</Link>
          </li>
        ))}
      </ul>
      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
        <button onClick={() => navigate("/contact")} className="dn av-gold" style={{ background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)", color:"#FAF6ED", border:"none", borderRadius:10, padding:"12px 24px", cursor:"pointer", fontWeight:700, fontSize:11, letterSpacing:"0.16em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", boxShadow:"0 6px 22px rgba(160,120,40,.32)", whiteSpace:"nowrap", transition:"all .2s" }}>Contact Us</button>
        <button className="dm" style={{ display:"none", background:"rgba(201,168,76,.1)", border:"1.5px solid rgba(193,156,60,.3)", color:"#A07828", width:40, height:40, borderRadius:9, cursor:"pointer", fontSize:17, alignItems:"center", justifyContent:"center" }} onClick={() => setMMenu(!mMenu)}>{mMenu ? "✕" : "☰"}</button>
      </div>
    </nav>
  );
}

// ─── FOOTER (identical to Home.jsx) ────────────────────────
function Footer() {
  return (
    <footer style={{ background:"#FBF8F0", padding:"clamp(40px,6vw,68px) clamp(16px,4vw,48px) clamp(20px,3vw,26px)" }}>
      <div className="av-footer-grid" style={{ marginBottom:"clamp(28px,4vw,44px)" }}>
        <div>
          <div style={{ marginBottom:15 }}><BrandMark size={48}/></div>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"#9C7A3C", fontSize:13, lineHeight:1.75, marginBottom:16, maxWidth:260 }}>We craft luxury journeys across Egypt with passion, expertise and attention to every detail. Your adventure, perfectly curated.</p>
          <div style={{ display:"flex", gap:8 }}>
            {[["f","Facebook"],["📸","Instagram"],["▶","YouTube"],["♪","TikTok"],["💬","WhatsApp"]].map(([ic,nm]) => (
              <a key={nm} href={nm==="WhatsApp" ? waLink() : "#"} target={nm==="WhatsApp"?"_blank":undefined} rel="noreferrer" title={nm} className="av-social" style={{ width:33, height:33, borderRadius:8, background:"rgba(201,168,76,.1)", border:"1.5px solid rgba(193,156,60,.25)", display:"flex", alignItems:"center", justifyContent:"center", color:"#9C7A3C", textDecoration:"none", fontSize:12, transition:"all .2s" }}>{ic}</a>
            ))}
          </div>
        </div>
        {[["Destinations", FOOTER_DEST],["Tours", FOOTER_TOURS]].map(([title, links]) => (
          <div key={title}>
            <div style={{ color:"#8B6010", fontSize:9, letterSpacing:"0.25em", textTransform:"uppercase", marginBottom:15, fontWeight:700, paddingBottom:9, borderBottom:"1px solid rgba(193,156,60,.2)", fontFamily:"'Josefin Sans',sans-serif" }}>{title}</div>
            {links.map(([lbl, path]) => <Link key={lbl} to={path} className="av-footlink" style={{ display:"block", color:"#9C7A3C", fontSize:13, marginBottom:9, textDecoration:"none", fontFamily:"'Cormorant Garamond',serif" }}>{lbl}</Link>)}
          </div>
        ))}
        <div>
          <div style={{ color:"#8B6010", fontSize:9, letterSpacing:"0.25em", textTransform:"uppercase", marginBottom:15, fontWeight:700, paddingBottom:9, borderBottom:"1px solid rgba(193,156,60,.2)", fontFamily:"'Josefin Sans',sans-serif" }}>Company</div>
          {FOOTER_COMPANY.map(([lbl, path]) => <Link key={lbl} to={path} className="av-footlink" style={{ display:"block", color:"#9C7A3C", fontSize:13, marginBottom:9, textDecoration:"none", fontFamily:"'Cormorant Garamond',serif" }}>{lbl}</Link>)}
          <div style={{ color:"#8B6010", fontSize:9, letterSpacing:"0.25em", textTransform:"uppercase", margin:"16px 0 15px", fontWeight:700, paddingBottom:9, borderBottom:"1px solid rgba(193,156,60,.2)", fontFamily:"'Josefin Sans',sans-serif" }}>Support</div>
          {FOOTER_SUPPORT.map(([lbl, path]) => <Link key={lbl} to={path} className="av-footlink" style={{ display:"block", color:"#9C7A3C", fontSize:13, marginBottom:9, textDecoration:"none", fontFamily:"'Cormorant Garamond',serif" }}>{lbl}</Link>)}
        </div>
        <div>
          <div style={{ color:"#8B6010", fontSize:9, letterSpacing:"0.25em", textTransform:"uppercase", marginBottom:15, fontWeight:700, paddingBottom:9, borderBottom:"1px solid rgba(193,156,60,.2)", fontFamily:"'Josefin Sans',sans-serif" }}>Contact Us</div>
          <a href={`tel:+${PHONE_WA}`} style={{ display:"flex", gap:9, marginBottom:11, fontSize:13, color:"#9C7A3C", fontFamily:"'Cormorant Garamond',serif", textDecoration:"none" }}><span style={{ color:"#A07828" }}>📞</span>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`} style={{ display:"flex", gap:9, marginBottom:11, fontSize:13, color:"#9C7A3C", fontFamily:"'Cormorant Garamond',serif", textDecoration:"none" }}><span style={{ color:"#A07828" }}>✉</span>{EMAIL}</a>
          <div style={{ display:"flex", gap:9, marginBottom:14, fontSize:13, color:"#9C7A3C", fontFamily:"'Cormorant Garamond',serif" }}><span style={{ color:"#A07828" }}>📍</span>Cairo, Egypt</div>
          <a href={waLink()} target="_blank" rel="noreferrer" style={{ display:"block", background:"#25D366", color:"#fff", textAlign:"center", borderRadius:10, padding:"11px", textDecoration:"none", fontSize:12, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>💬 WhatsApp Us</a>
        </div>
      </div>
      <div style={{ borderTop:"1px solid rgba(193,156,60,.15)", paddingTop:"clamp(16px,3vw,20px)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
        <span style={{ color:"rgba(35,26,14,.5)", fontSize:12, fontFamily:"'Josefin Sans',sans-serif" }}>© 2026 Aurevian Tours. All rights reserved.</span>
        <div style={{ display:"flex", gap:8 }}>
          {["VISA","Mastercard","PayPal","Apple Pay"].map(b => <span key={b} style={{ background:"rgba(201,168,76,.08)", border:"1px solid rgba(193,156,60,.2)", borderRadius:6, padding:"3px 10px", color:"rgba(35,26,14,.5)", fontSize:9, fontFamily:"'Josefin Sans',sans-serif" }}>{b}</span>)}
        </div>
      </div>
    </footer>
  );
}

// ════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ════════════════════════════════════════════════════════════
export default function AboutUs() {
  const navigate   = useNavigate();
  const [scrolled, setSc]   = useState(false);
  const [mMenu,    setMMenu] = useState(false);
  const [activeTab, setTab]  = useState("story");
  const [vis,      setVis]  = useState({});

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

  const reveal = (key, delay = 0) => ({
    opacity: vis[key] ? 1 : 0,
    transform: vis[key] ? "none" : "translateY(26px)",
    transition: `opacity .7s ease ${delay}s, transform .7s ease ${delay}s`,
  });

  const TABS = ["story", "mission", "team"];

  return (
    <div style={{ background:"#FAF6ED", color:"#231A0E", minHeight:"100vh", overflowX:"hidden", fontFamily:"'Josefin Sans',sans-serif" }}>
      <style>{CSS}</style>

      <Nav scrolled={scrolled} mMenu={mMenu} setMMenu={setMMenu}/>

      {/* MOBILE MENU */}
      {mMenu && (
        <div style={{ position:"sticky", top:80, zIndex:999, background:"#FAF6ED", borderBottom:"1px solid rgba(193,156,60,.2)", padding:"18px 22px 28px" }}>
          {NAV_LINKS.map(([label, path]) => (
            <Link key={path} to={path} style={{ display:"block", padding:"12px 0", borderBottom:"1px solid rgba(193,156,60,.1)", color: path==="/about" ? "#A07828" : "rgba(35,26,14,.65)", fontSize:13, letterSpacing:"0.14em", textTransform:"uppercase", textDecoration:"none", fontFamily:"'Josefin Sans',sans-serif" }} onClick={() => setMMenu(false)}>{label}</Link>
          ))}
        </div>
      )}

      {/* ══════════ HERO ══════════ */}
      <section style={{ position:"relative", minHeight:"min(58vh,520px)", display:"flex", alignItems:"center", overflow:"hidden" }}>
        <img src="/images/home/hero.jpeg" alt="Egypt Pyramids"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", animation:"heroZoom 24s ease-in-out infinite alternate" }}
          onError={e => e.target.src="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1600&q=80"}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(100deg,rgba(17,12,6,.88) 0%,rgba(17,12,6,.65) 45%,rgba(17,12,6,.22) 80%)" }}/>
        <div style={{ position:"relative", zIndex:2, width:"min(640px,92%)", padding:"clamp(60px,10vh,90px) clamp(20px,5vw,56px)" }}>
          <div data-v="hEy" style={{ fontSize:10, color:"#E8C96D", letterSpacing:"0.3em", textTransform:"uppercase", fontWeight:700, marginBottom:16, fontFamily:"'Josefin Sans',sans-serif", ...reveal("hEy") }}>Our Story</div>
          <h1 data-v="hT" style={{ fontFamily:"'Cinzel',serif", fontWeight:700, lineHeight:1.12, marginBottom:18, ...reveal("hT", .08) }}>
            <span style={{ display:"block", fontSize:"clamp(30px,5vw,54px)", color:"#FAF6ED" }}>Crafting Egypt's</span>
            <span style={{ display:"block", fontSize:"clamp(30px,5vw,54px)", color:"#E8C96D", fontStyle:"italic" }}>Most Unforgettable</span>
            <span style={{ display:"block", fontSize:"clamp(30px,5vw,54px)", color:"#FAF6ED" }}>Journeys.</span>
          </h1>
          <p data-v="hP" style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"clamp(14px,1.6vw,17px)", color:"rgba(250,246,237,.78)", lineHeight:1.75, marginBottom:30, maxWidth:440, ...reveal("hP", .16) }}>
            Born from a passion for Egypt and a belief that every traveler deserves a journey beyond expectations.
          </p>
          <div data-v="hB" style={{ display:"flex", gap:13, flexWrap:"wrap", ...reveal("hB", .24) }}>
            <button onClick={() => navigate("/tours")} style={{ background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)", color:"#1B130A", border:"none", borderRadius:10, padding:"14px 28px", cursor:"pointer", fontWeight:700, fontSize:11, letterSpacing:"0.16em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", boxShadow:"0 8px 28px rgba(160,120,40,.4)" }}>Explore Our Tours</button>
            <button onClick={() => navigate("/contact")} style={{ background:"rgba(250,246,237,.08)", border:"1.5px solid rgba(250,246,237,.55)", color:"#FAF6ED", borderRadius:10, padding:"14px 26px", cursor:"pointer", fontWeight:700, fontSize:11, letterSpacing:"0.16em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", backdropFilter:"blur(6px)" }}>Contact Us</button>
          </div>
        </div>
      </section>

      {/* ══════════ STATS BAR ══════════ */}
      <div style={{ background:"linear-gradient(135deg,#A07828,#C9A84C)", padding:"clamp(20px,3vw,28px) clamp(16px,4vw,48px)" }}>
        <div style={{ maxWidth:1180, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)", textAlign:"center" }}>
          {STATS.map((s, i) => (
            <div key={i} data-v={`st${i}`} style={{ ...reveal(`st${i}`, i*.06), borderRight: i<3 ? "1px solid rgba(255,255,255,.25)" : "none", padding:"0 12px" }}>
              <div style={{ fontSize:24, marginBottom:5 }}>{s.icon}</div>
              <div style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(20px,3vw,32px)", fontWeight:700, color:"#FAF6ED" }}>{s.value}</div>
              <div style={{ fontSize:10, color:"rgba(250,246,237,.75)", letterSpacing:"0.12em", textTransform:"uppercase", marginTop:3, fontFamily:"'Josefin Sans',sans-serif" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ TABS ══════════ */}
      <section className="av-section">
        <div style={{ maxWidth:1180, margin:"0 auto" }}>

          {/* Tab buttons */}
          <div style={{ display:"flex", borderBottom:"2px solid rgba(193,156,60,.2)", marginBottom:"clamp(32px,4vw,52px)", gap:0, overflowX:"auto" }}>
            {[["story","Our Story"],["mission","Our Mission"],["team","Meet the Team"]].map(([key, label]) => (
              <button key={key} onClick={() => setTab(key)} style={{ background:"none", border:"none", borderBottom: activeTab===key ? "2px solid #A07828" : "2px solid transparent", marginBottom:-2, padding:"14px clamp(18px,3vw,36px)", cursor:"pointer", fontSize:11, letterSpacing:"0.18em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", color: activeTab===key ? "#A07828" : "rgba(35,26,14,.5)", whiteSpace:"nowrap", transition:"color .2s" }}>{label}</button>
            ))}
          </div>

          {/* ── STORY TAB ── */}
          {activeTab === "story" && (
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(32px,5vw,72px)", alignItems:"start" }} data-v="stab">
              <div style={{ ...reveal("stab") }}>
                <span className="av-eyebrow">How We Started</span>
                <h2 className="av-title" style={{ marginBottom:24 }}>A New Chapter in<br/><em style={{ fontStyle:"italic", color:"#8B6010" }}>Egyptian Tourism</em></h2>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, color:"rgba(35,26,14,.7)", lineHeight:1.85, marginBottom:16 }}>
                  Aurevian Tours was founded with one simple belief: Egypt deserves to be <em>experienced</em> — not just visited. This ancient land holds more wonder than any rushed itinerary can capture, and we set out to change that.
                </p>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, color:"rgba(35,26,14,.7)", lineHeight:1.85, marginBottom:16 }}>
                  As a newly established company, we bring fresh eyes and uncompromising standards to Egyptian luxury travel. We are not bound by old habits — we are free to design every journey the way it should be: personal, unhurried, and extraordinary.
                </p>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, color:"rgba(35,26,14,.7)", lineHeight:1.85, marginBottom:28 }}>
                  Based in Cairo, we cover all 10 of Egypt's most iconic destinations — from the mystique of the Pyramids of Giza to the colorful reefs of Marsa Alam.
                </p>
                <button onClick={() => navigate("/tours")} style={{ background:"linear-gradient(135deg,#A07828,#C9A84C)", color:"#FAF6ED", border:"none", borderRadius:10, padding:"13px 28px", cursor:"pointer", fontWeight:700, fontSize:11, letterSpacing:"0.16em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", boxShadow:"0 6px 22px rgba(160,120,40,.3)" }}>Explore Our Tours →</button>
              </div>
              <div style={{ ...reveal("stab", .12) }}>
                <div style={{ background:"linear-gradient(135deg,#241A0E,#171009)", borderRadius:18, padding:"clamp(24px,4vw,40px)", border:"1px solid rgba(193,156,60,.3)" }}>
                  <div style={{ fontSize:9, color:"#E8C96D", letterSpacing:"0.28em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", marginBottom:20 }}>✦ Our 10 Destinations</div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
                    {DESTINATIONS.map(d => (
                      <button key={d.id} className="av-dest-chip" onClick={() => navigate(`/city/${d.id}`)} style={{ background:"rgba(201,168,76,.1)", border:`1px solid ${d.color}44`, borderRadius:20, padding:"7px 14px", cursor:"pointer", display:"flex", alignItems:"center", gap:7, transition:"all .2s", textDecoration:"none" }}>
                        <span style={{ fontSize:14 }}>{d.icon}</span>
                        <span style={{ fontFamily:"'Cinzel',serif", fontSize:11, fontWeight:600, color:"#FAF6ED" }}>{d.name}</span>
                        <span style={{ fontSize:9, color:"#E8C96D", fontFamily:"'Josefin Sans',sans-serif" }}>{d.tours}+</span>
                      </button>
                    ))}
                  </div>
                  <div style={{ marginTop:24, paddingTop:20, borderTop:"1px solid rgba(193,156,60,.2)" }}>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"rgba(250,246,237,.6)", fontSize:13, lineHeight:1.7 }}>
                      "We craft luxury journeys across Egypt with passion, expertise and attention to every detail. Your adventure, perfectly curated."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── MISSION TAB ── */}
          {activeTab === "mission" && (
            <div data-v="mtab">
              <div style={{ textAlign:"center", marginBottom:"clamp(28px,4vw,48px)", ...reveal("mtab") }}>
                <span className="av-eyebrow">What Drives Us</span>
                <h2 className="av-title" style={{ marginBottom:12 }}>Luxury Travel with <em style={{ fontStyle:"italic", color:"#8B6010" }}>Purpose</em></h2>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"#9C7A3C", fontSize:16, maxWidth:560, margin:"0 auto" }}>
                  Our mission is to craft luxury journeys across Egypt with passion, expertise, and attention to every detail.
                </p>
              </div>
              <div className="av-val-grid">
                {VALUES.map((v, i) => (
                  <div key={i} data-v={`vl${i}`} className="av-val-card" style={{ background:"#fff", border:"1px solid rgba(35,26,14,.08)", borderRadius:16, padding:"clamp(20px,3vw,28px)", boxShadow:"0 8px 26px rgba(35,26,14,.07)", transition:"all .3s", ...reveal(`vl${i}`, i*.06) }}>
                    <div style={{ fontSize:28, marginBottom:13 }}>{v.icon}</div>
                    <div style={{ fontFamily:"'Cinzel',serif", fontSize:14, fontWeight:700, color:"#231A0E", marginBottom:9 }}>{v.title}</div>
                    <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:14, color:"rgba(35,26,14,.65)", lineHeight:1.75 }}>{v.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:40, background:"linear-gradient(135deg,#241A0E,#171009)", borderRadius:18, padding:"clamp(28px,4vw,44px)", textAlign:"center", border:"1px solid rgba(193,156,60,.3)" }}>
                <span style={{ fontSize:10, color:"#E8C96D", letterSpacing:"0.3em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", display:"block", marginBottom:14 }}>Our Promise</span>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"clamp(16px,2vw,22px)", color:"#FAF6ED", lineHeight:1.65, maxWidth:600, margin:"0 auto 24px" }}>
                  "Licensed tour guides. Best price guarantee. Free cancellation. 24/7 customer support — we are always there to help."
                </p>
                <div style={{ display:"flex", justifyContent:"center", gap:clamp(24, "3vw", 40) }}>
                  {WHY_TRUST.map((w, i) => (
                    <div key={i} style={{ textAlign:"center" }}>
                      <div style={{ fontSize:22, marginBottom:6 }}>{w.icon}</div>
                      <div style={{ fontSize:11, fontWeight:700, color:"#E8C96D", fontFamily:"'Josefin Sans',sans-serif" }}>{w.t}</div>
                      <div style={{ fontSize:10, color:"rgba(250,246,237,.55)", fontFamily:"'Cormorant Garamond',serif" }}>{w.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── TEAM TAB ── */}
          {activeTab === "team" && (
            <div data-v="ttab">
              <div style={{ textAlign:"center", marginBottom:"clamp(28px,4vw,48px)", ...reveal("ttab") }}>
                <span className="av-eyebrow">The People Behind the Magic</span>
                <h2 className="av-title" style={{ marginBottom:12 }}>Meet Our <em style={{ fontStyle:"italic", color:"#8B6010" }}>Team</em></h2>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"#9C7A3C", fontSize:16, maxWidth:520, margin:"0 auto" }}>
                  Our guides are certified, passionate, and deeply knowledgeable — professional, friendly, and genuinely in love with Egypt.
                </p>
              </div>
              <div className="av-team-grid">
                {TEAM.map((m, i) => (
                  <div key={i} data-v={`tm${i}`} className="av-team-card" style={{ background:"#fff", border:"1px solid rgba(35,26,14,.08)", borderRadius:16, padding:"clamp(24px,3vw,32px) 20px", textAlign:"center", boxShadow:"0 8px 26px rgba(35,26,14,.07)", transition:"all .3s", ...reveal(`tm${i}`, i*.08) }}>
                    <div style={{ width:72, height:72, background:"linear-gradient(135deg,#A07828,#C9A84C)", borderRadius:"50%", margin:"0 auto 16px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:30, boxShadow:"0 8px 24px rgba(160,120,40,.3)" }}>👤</div>
                    <div style={{ fontFamily:"'Cinzel',serif", fontSize:14, fontWeight:700, color:"#231A0E", marginBottom:5 }}>{m.name}</div>
                    <div style={{ fontSize:10, letterSpacing:"0.15em", color:"#A07828", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", marginBottom:10 }}>{m.role}</div>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:13, color:"rgba(35,26,14,.55)", lineHeight:1.6 }}>{m.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══════════ WHY CHOOSE AUREVIAN ══════════ */}
      <section style={{ background:"#171009", padding:"clamp(52px,7vw,88px) clamp(16px,4vw,48px)" }}>
        <div style={{ maxWidth:1180, margin:"0 auto", textAlign:"center" }}>
          <span style={{ fontSize:10, color:"#E8C96D", letterSpacing:"0.3em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", display:"block", marginBottom:10 }}>Why Travelers Choose Aurevian</span>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(22px,3.4vw,36px)", fontWeight:700, color:"#FAF6ED", marginBottom:48 }}>The Aurevian <em style={{ color:"#E8C96D", fontStyle:"italic" }}>Difference</em></h2>
          <div className="av-why-grid" style={{ maxWidth:900, margin:"0 auto 52px" }}>
            {WHY_TRUST.map((w, i) => (
              <div key={i} data-v={`wt${i}`} style={{ textAlign:"center", ...reveal(`wt${i}`, i*.06) }}>
                <div style={{ fontSize:34, marginBottom:12 }}>{w.icon}</div>
                <div style={{ fontSize:13, fontWeight:700, color:"#FAF6ED", fontFamily:"'Josefin Sans',sans-serif", marginBottom:4 }}>{w.t}</div>
                <div style={{ fontSize:11, color:"#E8C96D", fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic" }}>{w.d}</div>
              </div>
            ))}
          </div>
          <HieroglyphFrieze tone="dark"/>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section style={{ padding:"clamp(52px,7vw,88px) clamp(16px,4vw,48px)", textAlign:"center", background:"var(--cream2)" }}>
        <div data-v="cta" style={{ maxWidth:640, margin:"0 auto", ...reveal("cta") }}>
          <span className="av-eyebrow" style={{ textAlign:"center", display:"block" }}>Ready to Explore?</span>
          <h2 className="av-title" style={{ marginBottom:16, textAlign:"center" }}>Your Egypt Adventure <em style={{ fontStyle:"italic", color:"#8B6010" }}>Awaits</em></h2>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"#9C7A3C", fontSize:16, marginBottom:32, lineHeight:1.7 }}>
            Let us design the journey of a lifetime — just for you.
          </p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <button onClick={() => navigate("/ai")} style={{ background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)", color:"#1B130A", border:"none", borderRadius:10, padding:"15px 32px", cursor:"pointer", fontWeight:700, fontSize:11, letterSpacing:"0.16em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", boxShadow:"0 8px 28px rgba(160,120,40,.35)" }}>✦ Plan My Trip</button>
            <button onClick={() => navigate("/tours")} className="av-ghost" style={{ background:"transparent", border:"1.5px solid rgba(160,120,40,.4)", color:"#8B6010", borderRadius:10, padding:"15px 28px", cursor:"pointer", fontWeight:700, fontSize:11, letterSpacing:"0.16em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", transition:"all .2s" }}>Explore Tours</button>
            <a href={waLink()} target="_blank" rel="noreferrer" style={{ background:"#25D366", color:"#fff", borderRadius:10, padding:"15px 24px", textDecoration:"none", fontWeight:700, fontSize:11, letterSpacing:"0.1em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", display:"flex", alignItems:"center", gap:8 }}>💬 WhatsApp Us</a>
          </div>
        </div>
      </section>

      <Footer/>

      {/* FLOATING BUTTONS */}
      <a href={waLink()} target="_blank" rel="noreferrer" style={{ position:"fixed", bottom:76, right:20, background:"#25D366", color:"#fff", borderRadius:30, padding:"11px 18px", textDecoration:"none", fontWeight:700, fontSize:12, display:"flex", alignItems:"center", gap:8, zIndex:500, boxShadow:"0 6px 24px rgba(37,211,102,.45)", fontFamily:"'Josefin Sans',sans-serif" }}>💬 <span>WhatsApp</span></a>
      <button onClick={() => window.scrollTo({ top:0, behavior:"smooth" })} style={{ position:"fixed", bottom:20, right:20, width:44, height:44, borderRadius:11, background:"rgba(201,168,76,.16)", border:"1.5px solid rgba(193,156,60,.4)", color:"#A07828", fontSize:15, cursor:"pointer", zIndex:500, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 16px rgba(35,26,14,.14)" }}>▲</button>
    </div>
  );
}