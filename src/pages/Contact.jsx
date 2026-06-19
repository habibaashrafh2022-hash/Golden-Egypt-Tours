// ============================================================
//  contact.jsx — Aurevian Tours · Contact Us Page
//  Matches Home.jsx design system exactly:
//    same logo · same fonts · same nav · same footer · same CSS vars
// ============================================================
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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

const DESTINATIONS = ["Cairo","Giza","Luxor","Aswan","Hurghada","Sharm El Sheikh","Alexandria","Fayoum","Marsa Alam","Ain Sokhna","All Egypt"];
const TOUR_TYPES   = ["Day Tours","Multi-Day Tours","Nile Cruises","Private Tours","Adventure Tours","Custom Trip"];

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
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes popIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}

.av-link:hover{color:var(--gd)!important;}
.av-ghost:hover{background:rgba(201,168,76,.12);border-color:rgba(160,120,40,.55)!important;}
.av-gold:hover{box-shadow:0 10px 30px rgba(160,120,40,.45);transform:translateY(-2px);}
.av-footlink:hover{color:var(--gd)!important;}
.av-social:hover{background:rgba(201,168,76,.18)!important;border-color:rgba(193,156,60,.5)!important;}
.av-contact-card:hover{transform:translateY(-4px);box-shadow:0 20px 48px rgba(35,26,14,.14)!important;}

.av-eyebrow{display:block;font-size:10px;color:var(--gd);letter-spacing:4px;text-transform:uppercase;margin-bottom:8px;font-weight:700;font-family:'Josefin Sans',sans-serif;}
.av-title{font-family:'Cinzel',serif;font-size:clamp(22px,3.4vw,38px);font-weight:700;color:var(--ink);line-height:1.2;}
.av-section{padding:clamp(48px,7vw,92px) clamp(16px,4vw,48px);}

.av-inp{width:100%;background:rgba(201,168,76,.05);border:1.5px solid rgba(193,156,60,.25);border-radius:10px;padding:12px 15px;color:#231A0E;font-size:14px;outline:none;font-family:'Cormorant Garamond',serif;transition:border-color .2s,box-shadow .2s;}
.av-inp:focus{border-color:rgba(160,120,40,.65);box-shadow:0 0 0 3px rgba(201,168,76,.1);}
.av-inp::placeholder{color:rgba(35,26,14,.38);font-style:italic;}

.av-footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1.3fr;gap:clamp(24px,4vw,44px);}
@media(max-width:980px){.av-footer-grid{grid-template-columns:1fr 1fr;}}

.av-contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(32px,5vw,72px);align-items:start;}
@media(max-width:860px){.av-contact-grid{grid-template-columns:1fr;}}

.av-cards-row{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1180px;margin:0 auto;}
@media(max-width:700px){.av-cards-row{grid-template-columns:1fr;}}

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
        <linearGradient id="aurPyr3" x1="8%" y1="0%" x2="95%" y2="100%">
          <stop offset="0%" stopColor="#7E5A0E"/>
          <stop offset="50%" stopColor="#C9A84C"/>
          <stop offset="100%" stopColor="#F0D78C"/>
        </linearGradient>
        <linearGradient id="aurRing3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8C96D"/>
          <stop offset="100%" stopColor="#8B6010"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="29.5" stroke="url(#aurRing3)" strokeWidth="1" opacity="0.5"/>
      <circle cx="32" cy="32" r="25.6" stroke="url(#aurRing3)" strokeWidth="0.6" opacity="0.32"/>
      <line x1="11.5" y1="49.5" x2="52.5" y2="49.5" stroke="url(#aurRing3)" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      <path d="M32 12.5 L50.5 49 L13.5 49 Z" fill="url(#aurPyr3)"/>
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

function Nav({ scrolled, mMenu, setMMenu }) {
  const navigate = useNavigate();
  return (
    <nav style={{ position:"sticky", top:0, zIndex:1000, height:80, background: scrolled ? "rgba(250,246,237,.98)" : "rgba(250,246,237,.96)", backdropFilter:"blur(18px)", borderBottom:"1px solid rgba(193,156,60,.18)", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 clamp(14px,4vw,40px)", boxShadow: scrolled ? "0 4px 26px rgba(35,26,14,.1)" : "none", transition:"all .3s ease" }}>
      <BrandMark size={46}/>
      <ul className="dn" style={{ display:"flex", gap:"clamp(14px,2vw,26px)", listStyle:"none", alignItems:"center" }}>
        {NAV_LINKS.map(([label, path]) => (
          <li key={path}>
            <Link to={path} className="av-link" style={{ color: path === "/contact" ? "#A07828" : "rgba(35,26,14,.62)", fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", textDecoration:"none", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>{label}</Link>
          </li>
        ))}
      </ul>
      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
        <a href={waLink()} target="_blank" rel="noreferrer" className="dn av-gold" style={{ background:"#25D366", color:"#fff", border:"none", borderRadius:10, padding:"12px 22px", cursor:"pointer", fontWeight:700, fontSize:11, letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", textDecoration:"none", display:"flex", alignItems:"center", gap:7, transition:"all .2s" }}>💬 WhatsApp</a>
        <button className="dm" style={{ display:"none", background:"rgba(201,168,76,.1)", border:"1.5px solid rgba(193,156,60,.3)", color:"#A07828", width:40, height:40, borderRadius:9, cursor:"pointer", fontSize:17, alignItems:"center", justifyContent:"center" }} onClick={() => setMMenu(!mMenu)}>{mMenu ? "✕" : "☰"}</button>
      </div>
    </nav>
  );
}

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
export default function ContactUs() {
  const navigate = useNavigate();
  const [scrolled, setSc]   = useState(false);
  const [mMenu,    setMMenu] = useState(false);
  const [vis,      setVis]  = useState({});
  const [submitted, setSub] = useState(false);
  const [sending,   setSending] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", phone:"", destination:"", tourType:"", travelers:"2", date:"", message:"" });

  const upd = k => e => setForm(p => ({ ...p, [k]: e.target.value }));
  const ok = form.name && form.email && form.message;

  const waMsg = encodeURIComponent(
    `🏛️ *New Inquiry — Aurevian Tours*\n\n👤 *Name:* ${form.name}\n✉️ *Email:* ${form.email}\n📱 *Phone:* ${form.phone||"—"}\n📍 *Destination:* ${form.destination||"—"}\n🗺️ *Tour Type:* ${form.tourType||"—"}\n👥 *Travelers:* ${form.travelers}\n📅 *Date:* ${form.date||"—"}\n\n📝 *Message:*\n${form.message}\n\nRef: AUR-${Date.now().toString().slice(-6)}`
  );

  const handleSubmit = () => {
    if (!ok) return;
    setSending(true);
    setTimeout(() => { setSending(false); setSub(true); }, 1400);
  };

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

  const inp = { className:"av-inp" };

  return (
    <div style={{ background:"#FAF6ED", color:"#231A0E", minHeight:"100vh", overflowX:"hidden", fontFamily:"'Josefin Sans',sans-serif" }}>
      <style>{CSS}</style>

      <Nav scrolled={scrolled} mMenu={mMenu} setMMenu={setMMenu}/>

      {mMenu && (
        <div style={{ position:"sticky", top:80, zIndex:999, background:"#FAF6ED", borderBottom:"1px solid rgba(193,156,60,.2)", padding:"18px 22px 28px" }}>
          {NAV_LINKS.map(([label, path]) => (
            <Link key={path} to={path} style={{ display:"block", padding:"12px 0", borderBottom:"1px solid rgba(193,156,60,.1)", color: path==="/contact" ? "#A07828" : "rgba(35,26,14,.65)", fontSize:13, letterSpacing:"0.14em", textTransform:"uppercase", textDecoration:"none", fontFamily:"'Josefin Sans',sans-serif" }} onClick={() => setMMenu(false)}>{label}</Link>
          ))}
          <div style={{ marginTop:16, display:"flex", gap:10 }}>
            <a href={`tel:+${PHONE_WA}`} style={{ flex:1, textAlign:"center", background:"rgba(201,168,76,.08)", border:"1px solid rgba(193,156,60,.25)", color:"#A07828", borderRadius:10, padding:"11px", textDecoration:"none", fontSize:12, fontFamily:"'Josefin Sans',sans-serif" }}>📞 Call Us</a>
            <a href={waLink()} target="_blank" rel="noreferrer" style={{ flex:1, textAlign:"center", background:"#25D366", color:"#fff", borderRadius:10, padding:"11px", textDecoration:"none", fontSize:12, fontFamily:"'Josefin Sans',sans-serif" }}>💬 WhatsApp</a>
          </div>
        </div>
      )}

      {/* ══════════ HERO ══════════ */}
      <section style={{ position:"relative", minHeight:"min(52vh,460px)", display:"flex", alignItems:"center", overflow:"hidden" }}>
        <img src="/images/home/cairo.jpeg" alt="Cairo at sunset"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", animation:"heroZoom 24s ease-in-out infinite alternate" }}
          onError={e => e.target.src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1600&q=80"}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(100deg,rgba(17,12,6,.9) 0%,rgba(17,12,6,.65) 45%,rgba(17,12,6,.2) 80%)" }}/>
        <div style={{ position:"relative", zIndex:2, width:"min(640px,92%)", padding:"clamp(52px,9vh,80px) clamp(20px,5vw,56px)" }}>
          <div data-v="hEy" style={{ fontSize:10, color:"#E8C96D", letterSpacing:"0.3em", textTransform:"uppercase", fontWeight:700, marginBottom:16, fontFamily:"'Josefin Sans',sans-serif", ...reveal("hEy") }}>Get In Touch</div>
          <h1 data-v="hT" style={{ fontFamily:"'Cinzel',serif", fontWeight:700, lineHeight:1.12, marginBottom:18, ...reveal("hT", .08) }}>
            <span style={{ display:"block", fontSize:"clamp(28px,5vw,52px)", color:"#FAF6ED" }}>Plan Your</span>
            <span style={{ display:"block", fontSize:"clamp(28px,5vw,52px)", color:"#E8C96D", fontStyle:"italic" }}>Dream Journey</span>
          </h1>
          <p data-v="hP" style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"clamp(14px,1.6vw,17px)", color:"rgba(250,246,237,.78)", lineHeight:1.75, maxWidth:420, ...reveal("hP", .16) }}>
            Our travel experts are ready to craft a luxury Egypt experience tailored to your vision. We respond fast.
          </p>
        </div>
      </section>

      {/* ══════════ CONTACT CARDS ══════════ */}
      <section style={{ padding:"0 clamp(16px,4vw,48px)", position:"relative", zIndex:10, marginTop:-36 }}>
        <div className="av-cards-row">
          {[
            { icon:"📞", label:"Call Us",   value:PHONE_DISPLAY,   sub:"Available 24/7",        href:`tel:+${PHONE_WA}` },
            { icon:"✉️", label:"Email Us",  value:EMAIL,           sub:"Reply within 2 hours",  href:`mailto:${EMAIL}` },
            { icon:"📍", label:"Find Us",   value:"Cairo, Egypt",  sub:"Serving all of Egypt",  href:"#" },
          ].map((c, i) => (
            <a key={i} href={c.href} className="av-contact-card" style={{ background:"#fff", border:"1px solid rgba(35,26,14,.08)", borderRadius:16, padding:"clamp(20px,3vw,28px) 20px", textAlign:"center", textDecoration:"none", display:"block", boxShadow:"0 8px 30px rgba(35,26,14,.1)", transition:"all .3s" }}>
              <div style={{ fontSize:30, marginBottom:12 }}>{c.icon}</div>
              <div style={{ fontSize:10, letterSpacing:"0.2em", color:"#A07828", textTransform:"uppercase", marginBottom:7, fontFamily:"'Josefin Sans',sans-serif", fontWeight:700 }}>{c.label}</div>
              <div style={{ fontFamily:"'Cinzel',serif", fontSize:13, fontWeight:600, color:"#231A0E", marginBottom:5 }}>{c.value}</div>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:12, color:"#9C7A3C" }}>{c.sub}</div>
            </a>
          ))}
        </div>
      </section>

      {/* ══════════ MAIN CONTENT ══════════ */}
      <section className="av-section">
        <div className="av-contact-grid" style={{ maxWidth:1180, margin:"0 auto" }}>

          {/* FORM */}
          <div data-v="form" style={{ ...reveal("form") }}>
            <span className="av-eyebrow">Send a Message</span>
            <h2 className="av-title" style={{ marginBottom:28 }}>Tell Us About<br/><em style={{ fontStyle:"italic", color:"#8B6010" }}>Your Trip</em></h2>

            {submitted ? (
              <div style={{ background:"linear-gradient(135deg,#241A0E,#171009)", borderRadius:18, padding:"clamp(36px,5vw,52px) 32px", textAlign:"center", border:"1px solid rgba(193,156,60,.3)" }}>
                <div style={{ fontSize:54, marginBottom:18 }}>✉️</div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:20, color:"#E8C96D", marginBottom:10 }}>Message Sent!</div>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"rgba(250,246,237,.7)", fontSize:15, lineHeight:1.75, marginBottom:24 }}>
                  Thank you, <strong style={{ color:"#E8C96D" }}>{form.name}</strong>!<br/>We'll be in touch within 2 hours to start crafting your perfect Egypt journey.
                </p>
                <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
                  <a href={waLink(waMsg)} target="_blank" rel="noreferrer" style={{ background:"#25D366", color:"#fff", borderRadius:10, padding:"12px 22px", textDecoration:"none", fontWeight:700, fontSize:12, fontFamily:"'Josefin Sans',sans-serif", display:"flex", alignItems:"center", gap:8 }}>💬 Confirm on WhatsApp</a>
                  <button onClick={() => { setSub(false); setForm({ name:"", email:"", phone:"", destination:"", tourType:"", travelers:"2", date:"", message:"" }); }} style={{ background:"rgba(250,246,237,.08)", border:"1px solid rgba(250,246,237,.2)", color:"rgba(250,246,237,.7)", borderRadius:10, padding:"12px 22px", cursor:"pointer", fontSize:12, fontFamily:"'Josefin Sans',sans-serif" }}>Send Another</button>
                </div>
              </div>
            ) : (
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                <div>
                  <label style={{ fontSize:9, color:"#A07828", letterSpacing:"0.2em", textTransform:"uppercase", display:"block", marginBottom:7, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>Full Name *</label>
                  <input {...inp} type="text" placeholder="Your full name" value={form.name} onChange={upd("name")}/>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                  <div>
                    <label style={{ fontSize:9, color:"#A07828", letterSpacing:"0.2em", textTransform:"uppercase", display:"block", marginBottom:7, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>Email *</label>
                    <input {...inp} type="email" placeholder="your@email.com" value={form.email} onChange={upd("email")}/>
                  </div>
                  <div>
                    <label style={{ fontSize:9, color:"#A07828", letterSpacing:"0.2em", textTransform:"uppercase", display:"block", marginBottom:7, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>WhatsApp / Phone</label>
                    <input {...inp} type="tel" placeholder="+1 234 567 8900" value={form.phone} onChange={upd("phone")}/>
                  </div>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                  <div>
                    <label style={{ fontSize:9, color:"#A07828", letterSpacing:"0.2em", textTransform:"uppercase", display:"block", marginBottom:7, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>Destination</label>
                    <select {...inp} value={form.destination} onChange={upd("destination")} style={{ cursor:"pointer" }}>
                      <option value="">Select…</option>
                      {DESTINATIONS.map(d => <option key={d}>{d}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize:9, color:"#A07828", letterSpacing:"0.2em", textTransform:"uppercase", display:"block", marginBottom:7, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>Tour Type</label>
                    <select {...inp} value={form.tourType} onChange={upd("tourType")} style={{ cursor:"pointer" }}>
                      <option value="">Select…</option>
                      {TOUR_TYPES.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                  <div>
                    <label style={{ fontSize:9, color:"#A07828", letterSpacing:"0.2em", textTransform:"uppercase", display:"block", marginBottom:7, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>Travel Date</label>
                    <input {...inp} type="date" value={form.date} onChange={upd("date")} style={{ colorScheme:"light" }}/>
                  </div>
                  <div>
                    <label style={{ fontSize:9, color:"#A07828", letterSpacing:"0.2em", textTransform:"uppercase", display:"block", marginBottom:7, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>Number of Travelers</label>
                    <input {...inp} type="number" min="1" placeholder="2" value={form.travelers} onChange={upd("travelers")}/>
                  </div>
                </div>
                <div>
                  <label style={{ fontSize:9, color:"#A07828", letterSpacing:"0.2em", textTransform:"uppercase", display:"block", marginBottom:7, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>Your Message *</label>
                  <textarea {...inp} rows={5} placeholder="Tell us your travel dates, group size, budget, special requests…" value={form.message} onChange={upd("message")} style={{ resize:"vertical" }}/>
                </div>
                <button onClick={handleSubmit} disabled={!ok || sending} style={{ background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)", color:"#FAF6ED", border:"none", borderRadius:12, padding:"16px", cursor: (!ok||sending) ? "not-allowed" : "pointer", fontWeight:700, fontSize:12, letterSpacing:"0.18em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", opacity: (!ok||sending) ? .5 : 1, display:"flex", alignItems:"center", justifyContent:"center", gap:10, boxShadow:"0 8px 28px rgba(160,120,40,.3)" }}>
                  {sending ? <><div style={{ width:16, height:16, border:"2px solid rgba(250,246,237,.3)", borderTop:"2px solid #FAF6ED", borderRadius:"50%", animation:"spin .7s linear infinite" }}/>Sending…</> : "✦ Send Message"}
                </button>
                <div style={{ textAlign:"center", fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:12, color:"#9C7A3C" }}>Free cancellation · No charge until confirmed · Reply within 2 hours</div>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <div data-v="side" style={{ ...reveal("side", .1) }}>
            <span className="av-eyebrow">Quick Connect</span>
            <h2 className="av-title" style={{ marginBottom:24 }}>Prefer to<br/><em style={{ fontStyle:"italic", color:"#8B6010" }}>Talk Directly?</em></h2>

            <a href={waLink()} target="_blank" rel="noreferrer" style={{ background:"#25D366", display:"flex", alignItems:"center", gap:14, padding:"18px 22px", textDecoration:"none", borderRadius:12, marginBottom:12, boxShadow:"0 6px 22px rgba(37,211,102,.3)" }}>
              <span style={{ fontSize:28 }}>💬</span>
              <div>
                <div style={{ color:"#fff", fontWeight:700, fontSize:14, fontFamily:"'Josefin Sans',sans-serif" }}>WhatsApp Us</div>
                <div style={{ color:"rgba(255,255,255,.8)", fontSize:12, fontFamily:"'Cormorant Garamond',serif" }}>{PHONE_DISPLAY} — Quick Reply</div>
              </div>
            </a>

            <a href={`tel:+${PHONE_WA}`} style={{ background:"#fff", border:"1px solid rgba(35,26,14,.1)", display:"flex", alignItems:"center", gap:14, padding:"18px 22px", textDecoration:"none", borderRadius:12, marginBottom:28, boxShadow:"0 4px 16px rgba(35,26,14,.06)" }}>
              <span style={{ fontSize:28 }}>📞</span>
              <div>
                <div style={{ color:"#231A0E", fontWeight:700, fontSize:14, fontFamily:"'Josefin Sans',sans-serif" }}>Call Us Directly</div>
                <div style={{ color:"#9C7A3C", fontSize:12, fontFamily:"'Cormorant Garamond',serif" }}>{PHONE_DISPLAY}</div>
              </div>
            </a>

            {/* WHAT TO EXPECT */}
            <div style={{ background:"linear-gradient(135deg,#241A0E,#171009)", borderRadius:16, padding:"clamp(20px,3vw,28px)", marginBottom:20, border:"1px solid rgba(193,156,60,.25)" }}>
              <div style={{ fontSize:10, color:"#E8C96D", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", marginBottom:16 }}>What To Expect</div>
              {[
                ["⚡","Response within 2 hours"],
                ["🎯","Personalized itinerary proposal"],
                ["💰","Transparent pricing, no hidden fees"],
                ["🔄","Free cancellation up to 24 hours"],
                ["🌍","Available in 13 languages"],
                ["🛡️","Licensed & certified guides"],
              ].map(([icon, text]) => (
                <div key={text} style={{ display:"flex", alignItems:"center", gap:11, marginBottom:12 }}>
                  <span style={{ fontSize:15 }}>{icon}</span>
                  <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:13.5, color:"rgba(250,246,237,.78)" }}>{text}</span>
                </div>
              ))}
            </div>

            {/* TOUR TYPES */}
            <div style={{ background:"#fff", border:"1px solid rgba(35,26,14,.08)", borderRadius:14, padding:"clamp(18px,3vw,24px)" }}>
              <div style={{ fontSize:10, color:"#A07828", letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", marginBottom:14 }}>Our Tours</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {TOUR_TYPES.map(t => (
                  <button key={t} onClick={() => navigate("/tours")} style={{ background:"rgba(201,168,76,.07)", border:"1.5px solid rgba(193,156,60,.2)", color:"rgba(35,26,14,.65)", borderRadius:20, padding:"6px 13px", cursor:"pointer", fontSize:11, fontFamily:"'Josefin Sans',sans-serif", transition:"all .2s" }}>{t}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ EMAIL ALTERNATIVE ══════════ */}
      <section style={{ background:"#171009", padding:"clamp(40px,6vw,72px) clamp(16px,4vw,48px)" }}>
        <div style={{ maxWidth:1180, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:28 }}>
          <div>
            <span style={{ fontSize:10, color:"#E8C96D", letterSpacing:"0.3em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", display:"block", marginBottom:10 }}>Prefer Email?</span>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(18px,2.5vw,26px)", fontWeight:700, color:"#FAF6ED", marginBottom:7 }}>Reach Us Directly</div>
            <a href={`mailto:${EMAIL}`} style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"#E8C96D", fontSize:16, textDecoration:"none" }}>{EMAIL}</a>
          </div>
          <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
            <a href={`mailto:${EMAIL}`} style={{ background:"linear-gradient(135deg,#A07828,#C9A84C)", color:"#FAF6ED", borderRadius:10, padding:"13px 28px", textDecoration:"none", fontWeight:700, fontSize:11, letterSpacing:"0.16em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", display:"flex", alignItems:"center", gap:8 }}>✉️ Send Email</a>
            <a href={waLink()} target="_blank" rel="noreferrer" style={{ background:"#25D366", color:"#fff", borderRadius:10, padding:"13px 24px", textDecoration:"none", fontWeight:700, fontSize:11, letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", display:"flex", alignItems:"center", gap:8 }}>💬 WhatsApp</a>
          </div>
        </div>
        <div style={{ maxWidth:1180, margin:"32px auto 0" }}>
          <HieroglyphFrieze tone="dark"/>
        </div>
      </section>

      <Footer/>

      {/* FLOATING BUTTONS */}
      <a href={waLink()} target="_blank" rel="noreferrer" style={{ position:"fixed", bottom:76, right:20, background:"#25D366", color:"#fff", borderRadius:30, padding:"11px 18px", textDecoration:"none", fontWeight:700, fontSize:12, display:"flex", alignItems:"center", gap:8, zIndex:500, boxShadow:"0 6px 24px rgba(37,211,102,.45)", fontFamily:"'Josefin Sans',sans-serif" }}>💬 <span>WhatsApp</span></a>
      <button onClick={() => window.scrollTo({ top:0, behavior:"smooth" })} style={{ position:"fixed", bottom:20, right:20, width:44, height:44, borderRadius:11, background:"rgba(201,168,76,.16)", border:"1.5px solid rgba(193,156,60,.4)", color:"#A07828", fontSize:15, cursor:"pointer", zIndex:500, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 16px rgba(35,26,14,.14)" }}>▲</button>
    </div>
  );
}