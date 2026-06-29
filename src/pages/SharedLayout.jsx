// ============================================================
//  SharedLayout.jsx — Aurevian Tours
//  Shared Nav + Footer + Language Switcher (static i18n) + CSS
//  Import this in FAQ, CancellationPolicy, Terms, CustomTrips
// ============================================================
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";

export const PHONE_DISPLAY = "+20 106 825 7754";
export const PHONE_WA      = "201068257754";
export const EMAIL         = "aureviantours@gmail.com";
export const waLink = (msg) =>
  `https://wa.me/${PHONE_WA}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

// Each entry: [translationKey, path]
export const NAV_LINKS = [
  ["home",        "/"],
  ["tours",       "/tours"],
  ["nileCruises", "/nile-cruises"],
  ["customTrips", "/custom-trips"],
  ["about",       "/about"],
  ["contact",     "/contact"],
];

const FOOTER_DEST    = [["Cairo","/city/cairo"],["Luxor","/city/luxor"],["Aswan","/city/aswan"],["Hurghada","/city/hurghada"],["Sharm El Sheikh","/city/sharm"],["allDestinations","/tours"]];
const FOOTER_TOURS   = [["dayTours","/tours"],["multiDayTours","/packages"],["nileCruises","/nile-cruises"],["privateTours","/tours"],["adventureTours","/tours"],["allTours","/tours"]];
const FOOTER_COMPANY = [["aboutUs","/about"],["ourGuides","/about"],["travelTips","/about"],["blog","/blog"],["careers","/careers"],["contactUs","/contact"]];
const FOOTER_SUPPORT = [["faq","/faq"],["cancellationPolicy","/cancellation-policy"],["privacyPolicy","/privacy"],["terms","/terms"]];
// FOOTER_DEST city names are kept untranslated by design — proper place
// names are conventionally shown in their international tourism form.

// Only the 7 core languages we actually maintain translations for.
export const LANGS = [
  {code:"en",label:"English",   flag:"🇬🇧"},
  {code:"es",label:"Español",   flag:"🇪🇸"},
  {code:"pt",label:"Português", flag:"🇵🇹"},
  {code:"it",label:"Italiano",  flag:"🇮🇹"},
  {code:"de",label:"Deutsch",   flag:"🇩🇪"},
  {code:"fr",label:"Français",  flag:"🇫🇷"},
  {code:"ru",label:"Русский",   flag:"🇷🇺"},
];

// ─── SHARED CSS ─────────────────────────────────────────────
export const SHARED_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&display=swap');
:root{
  --g:#C9A84C;--gl:#E8C96D;--gd:#8B6010;
  --bg:#FAF6ED;--cream2:#F3ECD8;
  --ink:#231A0E;--dim:rgba(35,26,14,.62);
  --card:#FFFFFF;--dark:#171009;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--ink);font-family:'Josefin Sans',sans-serif;overflow-x:hidden;}
::selection{background:rgba(201,168,76,.3);}
::-webkit-scrollbar{width:5px;}
::-webkit-scrollbar-track{background:var(--cream2);}
::-webkit-scrollbar-thumb{background:rgba(193,156,60,.45);border-radius:3px;}

@keyframes fadeUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@keyframes heroZoom{0%{transform:scale(1)}100%{transform:scale(1.06)}}
@keyframes slideD{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:none}}

.av-link:hover{color:var(--gd)!important;}
.av-gold:hover{box-shadow:0 10px 30px rgba(160,120,40,.45);transform:translateY(-2px);}
.av-footlink:hover{color:var(--gd)!important;}
.av-social:hover{background:rgba(201,168,76,.18)!important;}
.av-navdd:hover{background:rgba(201,168,76,.1)!important;color:var(--gd)!important;}

.av-eyebrow{display:block;font-size:10px;color:var(--gd);letter-spacing:4px;text-transform:uppercase;margin-bottom:8px;font-weight:700;font-family:'Josefin Sans',sans-serif;}
.av-title{font-family:'Cinzel',serif;font-size:clamp(22px,3.4vw,38px);font-weight:700;color:var(--ink);line-height:1.2;}
.av-section{padding:clamp(48px,7vw,92px) clamp(16px,4vw,48px);}

.av-footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1.3fr;gap:clamp(24px,4vw,44px);}
@media(max-width:980px){.av-footer-grid{grid-template-columns:1fr 1fr;}}

.dn{display:flex!important;}
.dm{display:none!important;}
@media(max-width:900px){.dn{display:none!important;}.dm{display:flex!important;}}

.av-frieze{display:flex;align-items:center;justify-content:center;gap:clamp(14px,3vw,28px);padding:8px 10px;}
.av-frieze::before,.av-frieze::after{content:"";flex:1 1 auto;height:1px;max-width:160px;background:linear-gradient(90deg,transparent,rgba(193,156,60,.6),transparent);}
.av-frieze.dark::before,.av-frieze.dark::after{background:linear-gradient(90deg,transparent,rgba(232,201,109,.45),transparent);}

/* Google Translate bar */
.goog-te-banner-frame{display:none!important;}
body{top:0!important;}
.goog-te-gadget{font-size:0!important;}
.goog-te-gadget .goog-te-combo{display:none;}
#gt-hidden{display:none!important;}
`;

// ─── LOGO ────────────────────────────────────────────────────
export function AurevianLogo({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="slPyr" x1="8%" y1="0%" x2="95%" y2="100%">
          <stop offset="0%" stopColor="#7E5A0E"/><stop offset="50%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#F0D78C"/>
        </linearGradient>
        <linearGradient id="slRing" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8C96D"/><stop offset="100%" stopColor="#8B6010"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="29.5" stroke="url(#slRing)" strokeWidth="1" opacity="0.5"/>
      <circle cx="32" cy="32" r="25.6" stroke="url(#slRing)" strokeWidth="0.6" opacity="0.32"/>
      <line x1="11.5" y1="49.5" x2="52.5" y2="49.5" stroke="url(#slRing)" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      <path d="M32 12.5 L50.5 49 L13.5 49 Z" fill="url(#slPyr)"/>
      <circle cx="32" cy="34.5" r="6.2" fill="#FBEFC8" opacity="0.95"/>
      <rect x="19.5" y="33.1" width="25" height="2.7" fill="#FBEFC8"/>
      <circle cx="32" cy="12.5" r="1.5" fill="#F7E2A0"/>
    </svg>
  );
}

export function BrandMark({ size = 44, dark }) {
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

// ─── LANGUAGE SWITCHER HOOK ──────────────────────────────────
// Renamed conceptually (kept the same export name + return shape
// on purpose) — this used to drive Google Translate, which Google
// discontinued for commercial sites in 2019. It now drives our own
// static translation dictionary instead. No code in any page that
// calls useGoogleTranslate() needs to change.
export function useGoogleTranslate() {
  const { language, setLanguage } = useGlobal();
  const [open, setOpen] = useState(false);
  const lang = LANGS.find(l => l.code === language) || LANGS[0];

  const changeLang = (l) => {
    setLanguage(l.code);
    setOpen(false);
    document.documentElement.setAttribute("lang", l.code);
    document.documentElement.setAttribute("dir", "ltr"); // none of the 7 core languages are RTL
  };

  return { lang, open, setOpen, changeLang };
}

// ─── LANG DROPDOWN ──────────────────────────────────────────
export function LangDropdown({ lang, open, setOpen, changeLang, dark }) {
  return (
    <div style={{ position:"relative" }}>
      <button onClick={() => setOpen(!open)} style={{ background: dark ? "rgba(201,168,76,.12)" : "rgba(201,168,76,.08)", border:"1px solid rgba(193,156,60,.28)", color: dark ? "rgba(250,246,237,.85)" : "#A07828", padding:"5px 12px", borderRadius:7, cursor:"pointer", fontSize:11, fontWeight:600, fontFamily:"'Josefin Sans',sans-serif", display:"flex", alignItems:"center", gap:6, whiteSpace:"nowrap" }}>
        <span>{lang.flag}</span><span>{lang.label}</span><span style={{ fontSize:8, opacity:.7 }}>▾</span>
      </button>
      {open && (
        <div style={{ position:"absolute", top:"calc(100% + 8px)", right:0, background:"#FAF6ED", border:"1.5px solid rgba(193,156,60,.3)", borderRadius:14, padding:10, zIndex:3000, minWidth:200, maxHeight:300, overflowY:"auto", boxShadow:"0 24px 56px rgba(20,15,8,.2)", animation:"slideD .18s ease", display:"grid", gridTemplateColumns:"1fr 1fr", gap:5 }}>
          {LANGS.map(l => (
            <button key={l.code} className="av-navdd" onClick={() => changeLang(l)} style={{ background: lang.code === l.code ? "rgba(201,168,76,.16)" : "transparent", border:"none", borderRadius:8, padding:"7px 8px", cursor:"pointer", fontSize:11, color: lang.code === l.code ? "#8B6010" : "#3a2c16", fontFamily:"'Josefin Sans',sans-serif", display:"flex", alignItems:"center", gap:6, fontWeight: lang.code === l.code ? 700 : 400 }}>
              <span>{l.flag}</span><span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── NAV ────────────────────────────────────────────────────
export function Nav({ scrolled, mMenu, setMMenu, activePath, langProps }) {
  const navigate = useNavigate();
  const { t } = useGlobal();
  const { lang, open, setOpen, changeLang } = langProps;
  return (
    <nav style={{ position:"sticky", top:0, zIndex:1000, height:80, background: scrolled ? "rgba(250,246,237,.98)" : "rgba(250,246,237,.96)", backdropFilter:"blur(18px)", borderBottom:"1px solid rgba(193,156,60,.18)", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 clamp(14px,4vw,40px)", boxShadow: scrolled ? "0 4px 26px rgba(35,26,14,.1)" : "none", transition:"all .3s ease" }}>
      <BrandMark size={46}/>
      <ul className="dn" style={{ display:"flex", gap:"clamp(14px,2vw,26px)", listStyle:"none", alignItems:"center" }}>
        {NAV_LINKS.map(([key, path]) => (
          <li key={path}>
            <Link to={path} className="av-link" style={{ color: path === activePath ? "#A07828" : "rgba(35,26,14,.62)", fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", textDecoration:"none", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>{t(`common.nav.${key}`)}</Link>
          </li>
        ))}
      </ul>
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <div className="dn"><LangDropdown lang={lang} open={open} setOpen={setOpen} changeLang={changeLang}/></div>
        <button onClick={() => navigate("/contact")} className="dn av-gold" style={{ background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)", color:"#FAF6ED", border:"none", borderRadius:10, padding:"11px 22px", cursor:"pointer", fontWeight:700, fontSize:11, letterSpacing:"0.16em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", whiteSpace:"nowrap", transition:"all .2s" }}>{t("common.planTrip")}</button>
        <button className="dm" style={{ display:"none", background:"rgba(201,168,76,.1)", border:"1.5px solid rgba(193,156,60,.3)", color:"#A07828", width:40, height:40, borderRadius:9, cursor:"pointer", fontSize:17, alignItems:"center", justifyContent:"center" }} onClick={() => setMMenu(!mMenu)}>{mMenu ? "✕" : "☰"}</button>
      </div>
    </nav>
  );
}

// ─── MOBILE MENU ────────────────────────────────────────────
export function MobileMenu({ open, setMMenu, activePath, langProps }) {
  const { t } = useGlobal();
  const { lang, changeLang } = langProps;
  if (!open) return null;
  return (
    <div style={{ position:"sticky", top:80, zIndex:999, background:"#FAF6ED", borderBottom:"1px solid rgba(193,156,60,.2)", padding:"18px 22px 28px", animation:"slideD .22s ease" }}>
      {NAV_LINKS.map(([key, path]) => (
        <Link key={path} to={path} style={{ display:"block", padding:"12px 0", borderBottom:"1px solid rgba(193,156,60,.1)", color: path === activePath ? "#A07828" : "rgba(35,26,14,.65)", fontSize:13, letterSpacing:"0.14em", textTransform:"uppercase", textDecoration:"none", fontFamily:"'Josefin Sans',sans-serif" }} onClick={() => setMMenu(false)}>{t(`common.nav.${key}`)}</Link>
      ))}
      <div style={{ marginTop:16, marginBottom:10 }}>
        <div style={{ fontSize:9, color:"#A07828", letterSpacing:3, textTransform:"uppercase", marginBottom:9, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>🌍 {t("common.language")}</div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
          {LANGS.map(l => (
            <button key={l.code} onClick={() => changeLang(l)} style={{ background: lang.code === l.code ? "rgba(201,168,76,.2)" : "rgba(201,168,76,.06)", border:"1.5px solid rgba(193,156,60,.2)", color: lang.code === l.code ? "#A07828" : "rgba(35,26,14,.55)", borderRadius:7, padding:"5px 10px", cursor:"pointer", fontSize:11, fontFamily:"'Josefin Sans',sans-serif" }}>{l.flag} {l.label}</button>
          ))}
        </div>
      </div>
      <div style={{ display:"flex", gap:10, marginTop:14 }}>
        <a href={`tel:+${PHONE_WA}`} style={{ flex:1, textAlign:"center", background:"rgba(201,168,76,.08)", border:"1px solid rgba(193,156,60,.25)", color:"#A07828", borderRadius:10, padding:"11px", textDecoration:"none", fontSize:12, fontFamily:"'Josefin Sans',sans-serif" }}>📞 {t("common.callUs")}</a>
        <a href={waLink()} target="_blank" rel="noreferrer" style={{ flex:1, textAlign:"center", background:"#25D366", color:"#fff", borderRadius:10, padding:"11px", textDecoration:"none", fontSize:12, fontFamily:"'Josefin Sans',sans-serif" }}>💬 {t("common.whatsapp")}</a>
      </div>
    </div>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────
export function Footer() {
  const { t } = useGlobal();
  return (
    <footer style={{ background:"#FBF8F0", padding:"clamp(40px,6vw,68px) clamp(16px,4vw,48px) clamp(20px,3vw,26px)" }}>
      <div className="av-footer-grid" style={{ marginBottom:"clamp(28px,4vw,44px)" }}>
        <div>
          <div style={{ marginBottom:15 }}><BrandMark size={48}/></div>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"#9C7A3C", fontSize:13, lineHeight:1.75, marginBottom:16, maxWidth:260 }}>{t("common.footer.tagline")}</p>
          <div style={{ display:"flex", gap:8 }}>
            {[["f","Facebook"],["📸","Instagram"],["▶","YouTube"],["♪","TikTok"],["💬","WhatsApp"]].map(([ic,nm]) => (
              <a key={nm} href={nm==="WhatsApp"?waLink():"#"} target={nm==="WhatsApp"?"_blank":undefined} rel="noreferrer" title={nm} className="av-social" style={{ width:33, height:33, borderRadius:8, background:"rgba(201,168,76,.1)", border:"1.5px solid rgba(193,156,60,.25)", display:"flex", alignItems:"center", justifyContent:"center", color:"#9C7A3C", textDecoration:"none", fontSize:12, transition:"all .2s" }}>{ic}</a>
            ))}
          </div>
        </div>
        {[["destinations",FOOTER_DEST,false],["tours",FOOTER_TOURS,true]].map(([titleKey,links,translateLabels]) => (
          <div key={titleKey}>
            <div style={{ color:"#8B6010", fontSize:9, letterSpacing:"0.25em", textTransform:"uppercase", marginBottom:15, fontWeight:700, paddingBottom:9, borderBottom:"1px solid rgba(193,156,60,.2)", fontFamily:"'Josefin Sans',sans-serif" }}>{t(`common.footer.${titleKey}`)}</div>
            {links.map(([lbl,path]) => <Link key={lbl} to={path} className="av-footlink" style={{ display:"block", color:"#9C7A3C", fontSize:13, marginBottom:9, textDecoration:"none", fontFamily:"'Cormorant Garamond',serif" }}>{translateLabels ? t(`common.footer.${lbl}`) : lbl}</Link>)}
          </div>
        ))}
        <div>
          <div style={{ color:"#8B6010", fontSize:9, letterSpacing:"0.25em", textTransform:"uppercase", marginBottom:15, fontWeight:700, paddingBottom:9, borderBottom:"1px solid rgba(193,156,60,.2)", fontFamily:"'Josefin Sans',sans-serif" }}>{t("common.footer.company")}</div>
          {FOOTER_COMPANY.map(([lbl,path]) => <Link key={lbl} to={path} className="av-footlink" style={{ display:"block", color:"#9C7A3C", fontSize:13, marginBottom:9, textDecoration:"none", fontFamily:"'Cormorant Garamond',serif" }}>{t(`common.footer.${lbl}`)}</Link>)}
          <div style={{ color:"#8B6010", fontSize:9, letterSpacing:"0.25em", textTransform:"uppercase", margin:"16px 0 15px", fontWeight:700, paddingBottom:9, borderBottom:"1px solid rgba(193,156,60,.2)", fontFamily:"'Josefin Sans',sans-serif" }}>{t("common.footer.support")}</div>
          {FOOTER_SUPPORT.map(([lbl,path]) => <Link key={lbl} to={path} className="av-footlink" style={{ display:"block", color:"#9C7A3C", fontSize:13, marginBottom:9, textDecoration:"none", fontFamily:"'Cormorant Garamond',serif" }}>{t(`common.footer.${lbl}`)}</Link>)}
        </div>
        <div>
          <div style={{ color:"#8B6010", fontSize:9, letterSpacing:"0.25em", textTransform:"uppercase", marginBottom:15, fontWeight:700, paddingBottom:9, borderBottom:"1px solid rgba(193,156,60,.2)", fontFamily:"'Josefin Sans',sans-serif" }}>{t("common.footer.contactUs")}</div>
          <a href={`tel:+${PHONE_WA}`} style={{ display:"flex", gap:9, marginBottom:11, fontSize:13, color:"#9C7A3C", fontFamily:"'Cormorant Garamond',serif", textDecoration:"none" }}><span style={{ color:"#A07828" }}>📞</span>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`} style={{ display:"flex", gap:9, marginBottom:11, fontSize:13, color:"#9C7A3C", fontFamily:"'Cormorant Garamond',serif", textDecoration:"none" }}><span style={{ color:"#A07828" }}>✉</span>{EMAIL}</a>
          <div style={{ display:"flex", gap:9, marginBottom:14, fontSize:13, color:"#9C7A3C", fontFamily:"'Cormorant Garamond',serif" }}><span style={{ color:"#A07828" }}>📍</span>Cairo, Egypt</div>
          <a href={waLink()} target="_blank" rel="noreferrer" style={{ display:"block", background:"#25D366", color:"#fff", textAlign:"center", borderRadius:10, padding:"11px", textDecoration:"none", fontSize:12, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>💬 {t("common.footer.whatsappUs")}</a>
        </div>
      </div>
      <div style={{ borderTop:"1px solid rgba(193,156,60,.15)", paddingTop:20, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
        <span style={{ color:"rgba(35,26,14,.5)", fontSize:12, fontFamily:"'Josefin Sans',sans-serif" }}>{t("common.footer.rights")}</span>
        <div style={{ display:"flex", gap:8 }}>
          {["VISA","Mastercard","PayPal","Apple Pay"].map(b => <span key={b} style={{ background:"rgba(201,168,76,.08)", border:"1px solid rgba(193,156,60,.2)", borderRadius:6, padding:"3px 10px", color:"rgba(35,26,14,.5)", fontSize:9, fontFamily:"'Josefin Sans',sans-serif" }}>{b}</span>)}
        </div>
      </div>
    </footer>
  );
}

// ─── FLOATING BUTTONS ───────────────────────────────────────
export function FloatingButtons() {
  return (
    <>
      <a href={waLink()} target="_blank" rel="noreferrer" style={{ position:"fixed", bottom:76, right:20, background:"#25D366", color:"#fff", borderRadius:30, padding:"11px 18px", textDecoration:"none", fontWeight:700, fontSize:12, display:"flex", alignItems:"center", gap:8, zIndex:500, boxShadow:"0 6px 24px rgba(37,211,102,.45)", fontFamily:"'Josefin Sans',sans-serif" }}>💬 <span>WhatsApp</span></a>
      <button onClick={() => window.scrollTo({ top:0, behavior:"smooth" })} style={{ position:"fixed", bottom:20, right:20, width:44, height:44, borderRadius:11, background:"rgba(201,168,76,.16)", border:"1.5px solid rgba(193,156,60,.4)", color:"#A07828", fontSize:15, cursor:"pointer", zIndex:500, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 16px rgba(35,26,14,.14)" }}>▲</button>
    </>
  );
}

// ─── GLYPH / FRIEZE ─────────────────────────────────────────
function Glyph({ type, size=17, color="#A07828" }) {
  const p = { width:size, height:size, viewBox:"0 0 24 24", fill:"none" };
  if (type==="ankh")  return <svg {...p}><circle cx="12" cy="6.4" r="4.1" stroke={color} strokeWidth="1.5"/><line x1="12" y1="10.3" x2="12" y2="21.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="5.8" y1="14.4" x2="18.2" y2="14.4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></svg>;
  if (type==="sun")   return <svg {...p}><circle cx="12" cy="12" r="4.3" stroke={color} strokeWidth="1.5"/>{[0,45,90,135,180,225,270,315].map(a=><line key={a} x1={12+Math.cos(a*Math.PI/180)*7} y1={12+Math.sin(a*Math.PI/180)*7} x2={12+Math.cos(a*Math.PI/180)*9.6} y2={12+Math.sin(a*Math.PI/180)*9.6} stroke={color} strokeWidth="1.3" strokeLinecap="round"/>)}</svg>;
  if (type==="lotus") return <svg {...p}><path d="M12 20.5C12 20.5 5 16.2 5 10.3C5 7 7.6 5 9.9 6.7C11.1 7.6 12 9.5 12 11.5C12 9.5 12.9 7.6 14.1 6.7C16.4 5 19 7 19 10.3C19 16.2 12 20.5 12 20.5Z" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/></svg>;
  return null;
}
export function HieroglyphFrieze({ tone="light" }) {
  const color = tone==="dark" ? "#E8C96D" : "#A07828";
  return (
    <div className={`av-frieze ${tone}`}>
      {["ankh","sun","lotus","sun","ankh"].map((g,i) => <Glyph key={i} type={g} color={color} size={tone==="dark"?15:17}/>)}
    </div>
  );
}