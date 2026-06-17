// ============================================================
//  CityPage.jsx — Aurevian Tours ✦ Unified Luxury Edition
//  Matches Home.jsx design system: cream/gold palette, Cinzel /
//  Cormorant Garamond / Josefin Sans, shared language + currency
//  switcher (Google Translate engine), no hard-coded Arabic.
//  Route: /city/:cityId
// ============================================================

import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getToursByCity, getCityBySlug, getAllCities } from "../api/index";
import { useGlobal } from "../context/GlobalContext";

// ─── CURRENCIES (identical list to Home.jsx) ──────────────────
const CURR = {
  USD:{s:"$",    r:1,      l:"USD — US Dollar"},
  EUR:{s:"€",    r:0.92,   l:"EUR — Euro"},
  GBP:{s:"£",    r:0.79,   l:"GBP — British Pound"},
  EGP:{s:"E£",   r:48.5,   l:"EGP — Egyptian Pound"},
  BRL:{s:"R$",   r:4.97,   l:"BRL — Brazilian Real"},
  MXN:{s:"MX$",  r:17.1,   l:"MXN — Mexican Peso"},
  CNY:{s:"¥",    r:7.24,   l:"CNY — Chinese Yuan"},
  JPY:{s:"¥",    r:149.5,  l:"JPY — Japanese Yen"},
  RUB:{s:"₽",    r:90.5,   l:"RUB — Russian Ruble"},
  KWD:{s:"KD",   r:0.31,   l:"KWD — Kuwaiti Dinar"},
  SAR:{s:"SR",   r:3.75,   l:"SAR — Saudi Riyal"},
  AED:{s:"AED",  r:3.67,   l:"AED — UAE Dirham"},
  INR:{s:"₹",    r:83.1,   l:"INR — Indian Rupee"},
  ILS:{s:"₪",    r:3.7,    l:"ILS — Israeli Shekel"},
  TRY:{s:"₺",    r:32.1,   l:"TRY — Turkish Lira"},
  CAD:{s:"C$",   r:1.36,   l:"CAD — Canadian Dollar"},
};

// ─── LANGUAGES (identical list to Home.jsx — Google Translate) ─
const LANGS = [
  {code:"en", label:"English",    flag:"🇬🇧", dir:"ltr"},
  {code:"es", label:"Español",    flag:"🇪🇸", dir:"ltr"},
  {code:"it", label:"Italiano",   flag:"🇮🇹", dir:"ltr"},
  {code:"fr", label:"Français",   flag:"🇫🇷", dir:"ltr"},
  {code:"de", label:"Deutsch",    flag:"🇩🇪", dir:"ltr"},
  {code:"pt", label:"Português",  flag:"🇵🇹", dir:"ltr"},
  {code:"zh", label:"中文",        flag:"🇨🇳", dir:"ltr"},
  {code:"nl", label:"Nederlands", flag:"🇳🇱", dir:"ltr"},
  {code:"ja", label:"日本語",      flag:"🇯🇵", dir:"ltr"},
  {code:"ru", label:"Русский",    flag:"🇷🇺", dir:"ltr"},
  {code:"tr", label:"Türkçe",     flag:"🇹🇷", dir:"ltr"},
  {code:"ko", label:"한국어",      flag:"🇰🇷", dir:"ltr"},
];

const fmt = (p,cur) => `${CURR[cur]?.s||"$"}${Math.round(p*(CURR[cur]?.r||1)).toLocaleString()}`;

// ─── CITY META — colors mirrored from Home.jsx's destination tiles ─
const CITY_META = {
  cairo: {
    heroImages: [
      "/images/cities/cairo-hero.jpeg",
    
    ],
    color: "#C9A84C",
    glyph: "𓂀",
    glyphs: ["𓂀","𓃭","𓆑","𓇋","𓅓","𓂋","𓏏","𓈖"],
    tagline: "Where Eternity Meets the Living City",
    desc: "Capital of 5,000 years of civilization. Home to the last surviving ancient wonder, the legendary Egyptian Museum, and a beating modern metropolis unlike anywhere on earth.",
    highlights: ["Great Pyramids of Giza","Egyptian Museum","Khan el-Khalili","Islamic Cairo","Coptic Quarter","Nile Dinner Cruise"],
    country: "Egypt",
    continent: "Africa & Middle East",
  },

  luxor: {
    heroImages: [
      "/images/cities/luxor-hero.jpeg",
      
    ],
    color: "#D4905C",
    glyph: "𓏏",
    glyphs: ["𓏏","𓈖","𓃀","𓇯","𓆣","𓋴","𓊃","𓌀"],
    tagline: "The World's Greatest Open-Air Museum",
    desc: "Once the royal capital Thebes — 3,500 years of concentrated wonder. Valley of the Kings, Karnak's colossal columns, and golden hot-air balloons at sunrise.",
    highlights: ["Valley of the Kings","Karnak Temple","Hot Air Balloon","Hatshepsut Temple","Luxor Temple","Felucca Sunset"],
    country: "Egypt",
    continent: "Africa & Middle East",
  },

  aswan: {
    heroImages: [
      "/images/cities/aswan-hero.jpeg",
      
    ],
    color: "#7CB9E8",
    glyph: "𓆣",
    glyphs: ["𓆣","𓈖","𓌀","𓍯","𓎛","𓋴","𓊃","𓂀"],
    tagline: "Nubia's Jewel on the Sacred Nile",
    desc: "Egypt's southernmost treasure — cobalt Nubian villages, silent feluccas, and the magnificent Abu Simbel temples.",
    highlights: ["Abu Simbel","Philae Temple","Nubian Village","Felucca Sailing","Elephantine Island","Lake Nasser Sunset"],
    country: "Egypt",
    continent: "Africa & Middle East",
  },

  alexandria: {
    heroImages: [
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1800&q=90",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1800&q=90",
    ],
    color:"#4FC3F7", glyph:"𓇯",
    glyphs:["𓇯","𓈖","𓉐","𓊃","𓋴","𓌀","𓍯","𓎛"],
    tagline:"Pearl of the Mediterranean",
    desc:"Alexander's legendary city — where Greek philosophy, Egyptian mystique and Roman grandeur fused into something unforgettable.",
    highlights:["Bibliotheca Alexandrina","Catacombs","Qaitbay Citadel","Montaza Palace","Roman Amphitheatre","Stanley Beach"],
    country:"Egypt", continent:"Mediterranean",
  },
  hurghada: {
    heroImages: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1800&q=90",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1800&q=90",
    ],
    color:"#52B788", glyph:"𓋴",
    glyphs:["𓋴","𓈖","𓌀","𓍯","𓎛","𓏏","𓐍","𓀭"],
    tagline:"Red Sea Paradise",
    desc:"Crystal-clear waters, technicolour coral reefs and year-round sunshine — world-class diving and resort luxury.",
    highlights:["Coral Reef Snorkeling","Island Hopping","Desert Quad Safari","Submarine Tour","Parasailing","Scuba Diving"],
    country:"Egypt", continent:"Red Sea",
  },
  "sharm-el-sheikh": {
    heroImages: [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1800&q=90",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1800&q=90",
    ],
    color:"#9B72CF", glyph:"𓊃",
    glyphs:["𓊃","𓋴","𓌀","𓍯","𓎛","𓏏","𓐍","𓀭"],
    tagline:"The City of Peace & Adventure",
    desc:"Where the Sinai mountains collide with the Red Sea — world-class diving, mystic Mount Sinai sunrise.",
    highlights:["Ras Mohammed National Park","Mount Sinai Sunrise","Naama Bay","Tiran Island Diving","Shark Bay","Desert Safari"],
    country:"Egypt", continent:"Sinai",
  },
  "marsa-alam": {
    heroImages: [
      "https://images.unsplash.com/photo-1560275619-4cc5a455b0a6?w=1800&q=90",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1800&q=90",
    ],
    color:"#26C6DA", glyph:"𓌀",
    glyphs:["𓌀","𓍯","𓎛","𓏏","𓐍","𓀭","𓁅","𓂸"],
    tagline:"Untouched Red Sea Wilderness",
    desc:"Wild spinner dolphins, dugongs, virgin coral reefs and a sky so full of stars it looks painted.",
    highlights:["Wild Dolphin Swimming","Dugong Snorkeling","Elphinstone Reef","Desert Stargazing","Wadi el Gemal","Sea Turtles"],
    country:"Egypt", continent:"Red Sea",
  },
};

const DEFAULT_META = {
  heroImages:["https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1800&q=90"],
  color:"#C9A84C", glyph:"𓂀",
  glyphs:["𓂀","𓃭","𓆑","𓇋","𓅓","𓂋","𓏏","𓈖"],
  tagline:"Discover Egypt", desc:"Explore the wonders of this ancient land.",
  highlights:["Ancient Temples","Nile River","Desert Safari","Local Culture"],
  country:"Egypt", continent:"Africa",
};

const CATS = [
  "all",
  "Guided tours and free tours",
  "Day trip",
  "Tour packages",
  "Aerial tours",
  "Boat tour",
  "Adventure and nature",
  "Transfers",
  "Performances",
];

const CAT_LABELS = {
  all:"All", "Guided tours and free tours":"Guided Tours", "Day trip":"Day Trips",
  "Tour packages":"Packages", "Aerial tours":"Aerial", "Boat tour":"Boat Tours",
  "Adventure and nature":"Adventure", Transfers:"Transfers", Performances:"Shows",
};

const CAT_ICONS = {
  all:"✦", "Guided tours and free tours":"🏛️", "Day trip":"🗺️",
  "Tour packages":"📦", "Aerial tours":"🎈", "Boat tour":"⛴",
  "Adventure and nature":"⚡", Transfers:"🚗", Performances:"🎭",
};

// ─── AUREVIAN LOGO — identical to Home.jsx ────────────────────
function AurevianLogo({size=46, animate=false}){
  return(
    <svg width={size} height={size} viewBox="0 0 56 56" className="logo-A" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lgA2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B6010"/><stop offset="45%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8C96D"/>
        </linearGradient>
        <linearGradient id="lgRiver2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7CB9E8" stopOpacity="0.9"/><stop offset="50%" stopColor="#4FC3F7" stopOpacity="1"/><stop offset="100%" stopColor="#7CB9E8" stopOpacity="0.5"/>
        </linearGradient>
      </defs>
      <polygon points="28,2 46,10 54,28 46,46 28,54 10,46 2,28 10,10" fill="none" stroke="url(#lgA2)" strokeWidth="1.2" opacity="0.7"/>
      <line x1="11" y1="44" x2="28" y2="10" stroke="url(#lgA2)" strokeWidth="3.2" strokeLinecap="round"/>
      <line x1="45" y1="44" x2="28" y2="10" stroke="url(#lgA2)" strokeWidth="3.2" strokeLinecap="round"/>
      <path className={animate?"logo-river":""} d="M17 32 Q20 29 23 32 Q26 35 29 32 Q32 29 35 32 Q38 35 39 32" stroke="url(#lgRiver2)" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.95"/>
      <polyline points="21,44 28,36 35,44" fill="none" stroke="url(#lgA2)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      <circle cx="28" cy="10" r="2.2" fill="url(#lgA2)" opacity="0.9"/>
      <circle cx="22" cy="19" r="1.1" fill="url(#lgA2)" opacity="0.4"/>
      <circle cx="34" cy="19" r="1.1" fill="url(#lgA2)" opacity="0.4"/>
    </svg>
  );
}

// ─── LANGUAGE SELECTOR — identical UI/behaviour to Home.jsx ──
function LanguageSelector({visible, onClose, currentLang, onSelect}){
  if(!visible) return null;
  return(
    <div style={{
      position:"absolute",top:"calc(100% + 8px)",right:0,
      background:"linear-gradient(145deg,#FAF6ED,#F3ECD8)",
      border:"1.5px solid rgba(193,156,60,.35)",borderRadius:16,
      padding:"12px",zIndex:2000,
      boxShadow:"0 24px 60px rgba(44,26,6,.15)",
      animation:"slideD .2s ease",
      minWidth:220,maxHeight:360,overflowY:"auto",
    }}>
      <div style={{fontSize:9,color:"#A07828",letterSpacing:3,textTransform:"uppercase",marginBottom:10,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif",padding:"0 4px"}}>🌍 Select Language</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
        {LANGS.map(lang=>(
          <button key={lang.code} className="lang-btn" onClick={()=>{onSelect(lang.code, lang.dir);onClose();}}
            style={{
              background:currentLang===lang.code?"rgba(201,168,76,.18)":"rgba(201,168,76,.05)",
              border:`1.5px solid ${currentLang===lang.code?"rgba(160,120,40,.5)":"rgba(193,156,60,.18)"}`,
              borderRadius:10,padding:"8px 10px",cursor:"pointer",
              display:"flex",alignItems:"center",gap:8,
              fontSize:11,color:currentLang===lang.code?"#8B6010":"rgba(44,26,6,.65)",
              fontFamily:"'Josefin Sans',sans-serif",fontWeight:currentLang===lang.code?700:400,
              transition:"all .15s",textAlign:"left",
            }}>
            <span style={{fontSize:16}}>{lang.flag}</span><span>{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── GLOBAL STYLES — same design tokens / fonts / motion as Home ─
const Styles = ({color="#C9A84C"}) => (
  <style>{`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;600;700&display=swap');

:root{
  --g:#C9A84C; --gl:#E8C96D; --gd:rgba(201,168,76,.1); --gb:rgba(193,156,60,.22);
  --bg:#FAF6ED; --bg2:#F3ECD8; --bg3:#EDE3C8; --bg4:#E6D9B4;
  --dark:#2C1A06; --mid:#6B4E1A; --muted:#9C7A3C;
  --text:#2C1A06; --dim:rgba(44,26,6,.65);
  --card:#FBF7EE; --cardb:#F5EED8;
  --accent:${color}; --accent-dim:${color}1f;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;-webkit-tap-highlight-color:transparent;}
body{background:var(--bg);color:var(--text);font-family:'Josefin Sans',sans-serif;overflow-x:hidden;}
::selection{background:rgba(201,168,76,.3);color:#2C1A06;}
::-webkit-scrollbar{width:4px;}
::-webkit-scrollbar-track{background:var(--bg2);}
::-webkit-scrollbar-thumb{background:rgba(193,156,60,.4);border-radius:2px;}

@keyframes heroZoom{0%{transform:scale(1)}100%{transform:scale(1.07)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes slideD{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:none}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes gradShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
@keyframes scrollB{0%,100%{transform:translateX(-50%) translateY(0);opacity:.5}50%{transform:translateX(-50%) translateY(9px);opacity:1}}
@keyframes glowGold{0%,100%{filter:drop-shadow(0 0 12px rgba(201,168,76,.6))}50%{filter:drop-shadow(0 0 32px rgba(232,201,109,.9)) brightness(1.2)}}
@keyframes borderS{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
@keyframes popIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes pulseRing{0%{opacity:.6;transform:scale(1)}50%{opacity:.15;transform:scale(1.05)}100%{opacity:.6;transform:scale(1)}}
@keyframes particleDrift{0%{opacity:0;transform:translateY(10px)}20%{opacity:1}80%{opacity:.6}100%{opacity:0;transform:translateY(-80px) translateX(20px)}}
@keyframes logoGlow{0%,100%{filter:drop-shadow(0 0 6px rgba(201,168,76,.4))}50%{filter:drop-shadow(0 0 18px rgba(232,201,109,.7))}}
@keyframes riverFlow{0%{stroke-dashoffset:120}100%{stroke-dashoffset:0}}
@keyframes glyphFloat{0%,100%{transform:translateY(0) rotate(0deg);opacity:.045}50%{transform:translateY(-16px) rotate(4deg);opacity:.09}}
@keyframes barFill{from{width:0}}

.gta{background:linear-gradient(90deg,#8B6010,#C9A84C,#E8C96D,#C9A84C,#8B6010);background-size:300% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:gradShift 6s ease-in-out infinite;}
.gt{background:linear-gradient(135deg,#8B6010 0%,#C9A84C 40%,#E8C96D 65%,#A07828 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.gline{height:1px;background:linear-gradient(to right,transparent,rgba(193,156,60,.3),transparent);}
.mq{display:flex;animation:marquee 32s linear infinite;white-space:nowrap;}
.mq:hover{animation-play-state:paused;}
.ab{position:relative;}
.ab::before{content:'';position:absolute;inset:-1px;border-radius:inherit;z-index:-1;background:linear-gradient(135deg,rgba(201,168,76,.5),rgba(201,168,76,.08),rgba(232,201,109,.45),rgba(201,168,76,.05),rgba(201,168,76,.5));background-size:400% 400%;animation:borderS 5s ease infinite;}
.lang-btn:hover{background:rgba(201,168,76,.12)!important;border-color:rgba(160,120,40,.5)!important;}
.btn-gold{background:linear-gradient(135deg,#A07828,#C9A84C,#E8C96D);color:#FAF6ED;border:none;border-radius:10px;padding:13px 28px;cursor:pointer;font-weight:700;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;font-family:'Josefin Sans',sans-serif;box-shadow:0 6px 28px rgba(160,120,40,.35);transition:all .25s;}
.btn-gold:hover{box-shadow:0 10px 40px rgba(160,120,40,.55);transform:translateY(-2px);}
.btn-ghost{background:transparent;border:1.5px solid rgba(160,120,40,.35);color:#A07828;border-radius:9px;padding:9px 22px;cursor:pointer;font-size:10px;letter-spacing:2.5px;text-transform:uppercase;font-family:'Josefin Sans',sans-serif;transition:all .2s;white-space:nowrap;}
.btn-ghost:hover{background:rgba(201,168,76,.1);border-color:rgba(160,120,40,.6);}
.nla:hover{color:#A07828!important;}
.dd:hover{background:rgba(201,168,76,.08)!important;color:#A07828!important;}

/* grain + hieroglyph backdrop */
.cp-glyphs{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;}
.cp-glyph{position:absolute;color:var(--accent);animation:glyphFloat 9s ease-in-out infinite;user-select:none;font-family:serif;}

/* ── NAV (mirrors Home.jsx exactly) ── */
.cp-nav{position:fixed;top:0;left:0;right:0;zIndex:1000;z-index:1000;height:66px;background:rgba(250,246,237,.98);backdrop-filter:blur(28px);border-bottom:1px solid rgba(193,156,60,.25);display:flex;align-items:center;justify-content:space-between;padding:0 clamp(14px,4vw,44px);box-shadow:0 4px 32px rgba(180,140,60,.12);}
.cp-nav::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(193,156,60,.5),rgba(232,201,109,.7),rgba(193,156,60,.5),transparent);opacity:.7;}
.cp-back{display:flex;align-items:center;gap:7px;background:rgba(201,168,76,.08);border:1.5px solid rgba(193,156,60,.3);color:#A07828;border-radius:8px;padding:8px 16px;font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:all .2s;text-decoration:none;white-space:nowrap;font-weight:700;}
.cp-back:hover{background:rgba(201,168,76,.16);}
.cp-sw-btn{background:rgba(201,168,76,.08);border:1.5px solid rgba(193,156,60,.3);color:#A07828;padding:6px 13px;border-radius:8px;cursor:pointer;font-size:11px;font-weight:700;font-family:'Josefin Sans',sans-serif;display:flex;align-items:center;gap:6px;letter-spacing:.1em;}
.cp-sw-drop{position:absolute;top:calc(100% + 8px);right:0;background:linear-gradient(145deg,#FAF6ED,#F3ECD8);border:1.5px solid rgba(193,156,60,.28);border-radius:12px;overflow:hidden;min-width:200px;z-index:2000;box-shadow:0 24px 60px rgba(44,26,6,.15);animation:slideD .2s ease;max-height:320px;overflow-y:auto;}

/* ── STICKY MINI BAR ── */
.cp-sticky{position:fixed;top:66px;left:0;right:0;z-index:980;height:50px;display:flex;align-items:center;gap:16px;padding:0 clamp(14px,4vw,44px);background:rgba(250,246,237,.98);backdrop-filter:blur(20px);border-bottom:1px solid rgba(193,156,60,.25);transform:translateY(-100%);transition:transform .28s ease;pointer-events:none;}
.cp-sticky.visible{transform:translateY(0);pointer-events:all;}
.cp-sticky-name{font-family:'Cinzel',serif;font-size:12px;color:#2C1A06;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.cp-sticky-price{font-family:'Cinzel',serif;font-size:17px;color:#A07828;font-weight:700;white-space:nowrap;}

/* ── HERO ── */
.ch-wrap{position:relative;width:100%;min-height:100vh;overflow:hidden;display:flex;align-items:center;}
.ch-slide{position:absolute;inset:-6%;background-size:cover;background-position:center;animation:heroZoom 20s ease-in-out infinite alternate;transition:opacity 1.2s ease;}
.ch-overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(250,246,237,.97) 0%,rgba(250,246,237,.85) 38%,rgba(250,246,237,.28) 64%,rgba(250,246,237,.05) 100%),linear-gradient(to bottom,rgba(44,26,6,.45) 0%,transparent 26%,rgba(44,26,6,.35) 100%);}
.ch-glow{position:absolute;inset:0;z-index:1;pointer-events:none;background:radial-gradient(ellipse 60% 50% at 95% 70%,var(--accent-dim),transparent 65%);}
.ch-edge{position:absolute;top:0;bottom:0;right:0;width:3px;z-index:3;background:linear-gradient(to bottom,transparent,rgba(232,201,109,.9),rgba(201,168,76,1),rgba(232,201,109,.9),transparent);}
.ch-content{position:relative;z-index:4;width:min(620px,58%);padding:clamp(78px,10vh,118px) clamp(24px,5vw,72px) clamp(40px,6vh,72px);}
.ch-badges{position:absolute;right:clamp(16px,4vw,48px);top:50%;transform:translateY(-50%);z-index:5;display:flex;flex-direction:column;gap:14px;align-items:flex-end;}
.ch-stat{background:rgba(250,246,237,.93);backdrop-filter:blur(16px);border:1.5px solid rgba(193,156,60,.45);border-radius:16px;padding:14px 20px;text-align:center;box-shadow:0 8px 32px rgba(180,140,60,.18);animation:fadeUp .8s ease both;min-width:120px;}
.ch-particle{position:absolute;width:4px;height:4px;border-radius:50%;background:var(--accent);opacity:.6;animation:particleDrift 6s ease-in-out infinite;z-index:3;pointer-events:none;}
.ch-band{position:absolute;top:30%;left:0;right:0;z-index:2;height:40px;overflow:hidden;border-top:1px solid rgba(193,156,60,.22);border-bottom:1px solid rgba(193,156,60,.22);background:rgba(250,246,237,.35);display:flex;align-items:center;pointer-events:none;}
.ch-band-txt{font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:7px;color:rgba(160,120,40,.45);white-space:nowrap;text-transform:uppercase;animation:marquee 30s linear infinite;}
.ch-thumbs{display:flex;flex-direction:column;gap:8px;}
.ch-thumb{width:58px;height:42px;border-radius:8px;overflow:hidden;border:2px solid transparent;opacity:.55;cursor:pointer;transition:all .25s;}
.ch-thumb img{width:100%;height:100%;object-fit:cover;display:block;}
.ch-thumb:hover,.ch-thumb.active{opacity:1;border-color:var(--accent);box-shadow:0 0 20px var(--accent-dim);}
.ch-scroll{position:absolute;bottom:24px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:6px;z-index:4;animation:scrollB 3s ease-in-out infinite;}

/* ── BREADCRUMB / TABS / HIGHLIGHTS ── */
.cp-crumb{padding:13px clamp(14px,4vw,44px);background:rgba(243,236,216,.6);border-bottom:1px solid rgba(193,156,60,.15);display:flex;align-items:center;gap:8px;font-family:'Josefin Sans',sans-serif;font-size:11px;letter-spacing:1px;color:#9C7A3C;position:relative;z-index:5;}
.cp-crumb a{color:inherit;text-decoration:none;transition:color .2s;}
.cp-crumb a:hover{color:#A07828;}
.cp-crumb .cur{color:#A07828;font-weight:700;}
.cp-tabs{position:sticky;top:66px;z-index:200;background:rgba(250,246,237,.97);backdrop-filter:blur(20px);border-bottom:1px solid rgba(193,156,60,.22);display:flex;overflow-x:auto;scrollbar-width:none;}
.cp-tabs::-webkit-scrollbar{display:none;}
.cp-tab{flex-shrink:0;display:flex;align-items:center;gap:6px;padding:13px 18px;border-bottom:2px solid transparent;color:#9C7A3C;font-family:'Josefin Sans',sans-serif;font-size:12px;font-weight:500;cursor:pointer;text-decoration:none;transition:all .2s;white-space:nowrap;}
.cp-tab:hover{color:#6B4E1A;}
.cp-tab.active{color:#A07828;background:rgba(201,168,76,.08);border-bottom-color:#A07828;font-weight:700;}
.cp-highlights{padding:14px clamp(14px,4vw,44px);background:rgba(237,227,200,.45);border-bottom:1px solid rgba(193,156,60,.2);display:flex;align-items:center;gap:10px;overflow-x:auto;scrollbar-width:none;}
.cp-highlights::-webkit-scrollbar{display:none;}
.cp-hl-label{font-family:'Josefin Sans',sans-serif;font-size:9.5px;letter-spacing:2px;color:#9C7A3C;text-transform:uppercase;white-space:nowrap;flex-shrink:0;font-weight:700;}
.cp-hl-pill{flex-shrink:0;padding:6px 15px;border-radius:20px;background:rgba(201,168,76,.1);border:1px solid rgba(193,156,60,.28);font-family:'Josefin Sans',sans-serif;font-size:11px;color:#8B6010;white-space:nowrap;transition:background .2s;}
.cp-hl-pill:hover{background:rgba(201,168,76,.2);}

/* ── FILTER BAR ── */
.cp-filter-bar{padding:20px clamp(14px,4vw,44px) 16px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;}
.cp-filter-pills{display:flex;gap:7px;flex-wrap:wrap;}
.cp-fpill{display:flex;align-items:center;gap:6px;padding:8px 15px;background:rgba(201,168,76,.05);border:1.5px solid rgba(193,156,60,.22);border-radius:20px;color:#9C7A3C;font-family:'Josefin Sans',sans-serif;font-size:11.5px;cursor:pointer;transition:all .2s;}
.cp-fpill:hover{border-color:rgba(160,120,40,.5);color:#6B4E1A;}
.cp-fpill.active{background:rgba(201,168,76,.18);border-color:rgba(160,120,40,.55);color:#8B6010;font-weight:700;box-shadow:0 4px 18px rgba(180,140,60,.12);}
.cp-fcount{font-size:9px;padding:1px 6px;border-radius:8px;background:rgba(160,120,40,.12);}
.cp-result{font-family:'Josefin Sans',sans-serif;font-size:11.5px;color:#9C7A3C;}
.cp-result strong{color:#A07828;font-weight:700;}
.cp-sort{background:rgba(201,168,76,.06);border:1.5px solid rgba(193,156,60,.28);border-radius:9px;color:#6B4E1A;font-family:'Josefin Sans',sans-serif;font-size:12px;padding:8px 12px;cursor:pointer;outline:none;}
.cp-sort option{background:#FAF6ED;}

/* ── TOUR CARDS ── */
.cp-grid-section{padding:30px clamp(14px,4vw,44px) 60px;}
.cp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:22px;}
.cp-card{position:relative;border-radius:18px;overflow:hidden;background:linear-gradient(145deg,#FFFDF8,#F8F2E0);border:1.5px solid rgba(193,156,60,.22);cursor:pointer;display:flex;flex-direction:column;box-shadow:0 8px 32px rgba(180,140,60,.1);transition:all .4s cubic-bezier(.25,.8,.25,1);animation:fadeUp .55s ease both;}
.cp-card:hover{transform:translateY(-8px);border-color:rgba(193,156,60,.5);box-shadow:0 32px 76px rgba(180,140,60,.22);}
.cp-card-imgwrap{position:relative;height:212px;flex-shrink:0;overflow:hidden;background:#EDE3C8;}
.cp-card-img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .55s ease;}
.cp-card:hover .cp-card-img{transform:scale(1.07);}
.cp-card-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(44,26,6,.88) 0%,rgba(44,26,6,.12) 55%,transparent 100%);}
.cp-card-cat{position:absolute;top:12px;left:12px;z-index:2;padding:4px 12px;border-radius:20px;background:var(--accent-dim);border:1px solid var(--accent);backdrop-filter:blur(8px);color:#FAF6ED;font-family:'Josefin Sans',sans-serif;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1.3px;}
.cp-card-disc{position:absolute;top:12px;right:12px;z-index:2;padding:4px 10px;border-radius:6px;background:rgba(190,55,55,.92);color:#fff;font-family:'Josefin Sans',sans-serif;font-size:10px;font-weight:700;}
.cp-card-dur{position:absolute;bottom:12px;left:12px;z-index:2;padding:4px 11px;border-radius:20px;background:rgba(44,26,6,.62);backdrop-filter:blur(8px);font-family:'Josefin Sans',sans-serif;font-size:10px;color:#FAF6ED;}
.cp-card-fc{position:absolute;bottom:12px;right:12px;z-index:2;padding:4px 11px;border-radius:20px;background:rgba(82,183,136,.85);backdrop-filter:blur(8px);font-family:'Josefin Sans',sans-serif;font-size:9.5px;color:#fff;font-weight:700;}
.cp-card-glyph{position:absolute;bottom:6px;left:50%;transform:translateX(-50%);font-size:50px;color:#FAF6ED;opacity:.1;z-index:1;pointer-events:none;transition:opacity .3s;}
.cp-card:hover .cp-card-glyph{opacity:.22;}
.cp-card-body{padding:18px 20px 20px;flex:1;display:flex;flex-direction:column;gap:9px;}
.cp-card-title{font-family:'Cinzel',serif;font-size:14.5px;color:#2C1A06;font-weight:700;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.cp-card-desc{font-family:'Cormorant Garamond',serif;font-size:14px;color:#9C7A3C;line-height:1.6;flex:1;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.cp-card-rating{display:flex;align-items:center;gap:7px;}
.cp-card-stars{color:#C9A84C;font-size:11px;letter-spacing:1px;}
.cp-card-score{font-family:'Cinzel',serif;font-size:13px;color:#A07828;font-weight:700;}
.cp-card-revs{font-family:'Josefin Sans',sans-serif;font-size:11px;color:#9C7A3C;}
.cp-card-foot{display:flex;align-items:flex-end;justify-content:space-between;border-top:1px solid rgba(193,156,60,.16);padding-top:14px;margin-top:auto;}
.cp-card-from{font-family:'Josefin Sans',sans-serif;font-size:9px;text-transform:uppercase;letter-spacing:2px;color:#9C7A3C;margin-bottom:3px;}
.cp-card-price-row{display:flex;align-items:baseline;gap:5px;}
.cp-card-orig{font-family:'Josefin Sans',sans-serif;font-size:12px;color:rgba(107,78,26,.45);text-decoration:line-through;}
.cp-card-amt{font-family:'Cinzel',serif;font-size:24px;color:#8B6010;font-weight:700;line-height:1;}
.cp-card-per{font-family:'Josefin Sans',sans-serif;font-size:10px;color:#9C7A3C;}
.cp-card-btn{padding:9px 18px;border-radius:9px;background:linear-gradient(135deg,#A07828,#C9A84C,#E8C96D);color:#FAF6ED;border:none;font-family:'Josefin Sans',sans-serif;font-size:9.5px;letter-spacing:1.8px;font-weight:700;text-transform:uppercase;cursor:pointer;box-shadow:0 4px 16px rgba(160,120,40,.3);transition:all .22s;}
.cp-card-btn:hover{box-shadow:0 6px 24px rgba(160,120,40,.5);transform:translateY(-1px);}
.cp-empty{grid-column:1/-1;text-align:center;padding:80px 0;}
.cp-empty-glyph{font-size:52px;opacity:.25;margin-bottom:16px;color:#A07828;}
.cp-empty-txt{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:15px;color:#9C7A3C;}

/* ── OTHER DESTINATIONS (matches Home.jsx CityCard) ── */
.cp-othercities{padding:48px clamp(14px,4vw,44px) 60px;background:linear-gradient(135deg,#EDE3C8,#E6D9B4);border-top:1.5px solid rgba(193,156,60,.25);border-bottom:1.5px solid rgba(193,156,60,.25);}
.cp-cc{position:relative;border-radius:20px;overflow:hidden;cursor:pointer;height:clamp(150px,15vw,190px);border:1px solid rgba(193,156,60,.25);transition:all .45s cubic-bezier(.25,.8,.25,1);box-shadow:0 6px 24px rgba(180,140,60,.1);}
.cp-cc:hover{transform:translateY(-7px);box-shadow:0 24px 60px rgba(180,140,60,.24);}
.cp-cc img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s ease;}
.cp-cc:hover img{transform:scale(1.1);}
.cp-cc-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(44,26,6,.9) 0%,rgba(44,26,6,.18) 55%,transparent 100%);}
.cp-cc-info{position:absolute;bottom:0;left:0;right:0;padding:13px 15px;}

/* ── CONTACT ── */
.cp-contact{padding:72px clamp(14px,4vw,44px);background:var(--bg);position:relative;overflow:hidden;}
.cp-contact-deco{position:absolute;font-size:300px;color:var(--accent);opacity:.04;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;font-family:serif;line-height:1;user-select:none;}
.cp-contact-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1.2fr;gap:60px;align-items:start;position:relative;z-index:2;}
.cp-cinfo{display:flex;align-items:flex-start;gap:14px;margin-bottom:18px;}
.cp-cinfo-ic{width:42px;height:42px;border-radius:10px;flex-shrink:0;background:rgba(201,168,76,.1);border:1px solid rgba(193,156,60,.28);display:flex;align-items:center;justify-content:center;font-size:18px;}
.cp-form-input,.cp-form-textarea,.cp-form-select{background:rgba(201,168,76,.06);border:1.5px solid rgba(193,156,60,.25);border-radius:11px;padding:12px 14px;color:#2C1A06;font-size:14px;outline:none;width:100%;font-family:'Cormorant Garamond',serif;transition:all .25s;}
.cp-form-input:focus,.cp-form-textarea:focus,.cp-form-select:focus{border-color:rgba(160,120,40,.65);box-shadow:0 0 0 3px rgba(201,168,76,.1);}

/* ── FOOTER (mirrors Home.jsx) ── */
.cp-footer{background:linear-gradient(135deg,#EDE3C8,#E0D4A8);border-top:1.5px solid rgba(193,156,60,.25);padding:clamp(40px,6vw,72px) clamp(16px,4vw,48px) clamp(20px,3vw,28px);}
.cp-flink{display:block;color:#9C7A3C;font-size:13px;margin-bottom:9px;text-decoration:none;transition:color .2s;font-family:'Cormorant Garamond',serif;}
.cp-flink:hover{color:#8B6010;}

/* ── BOOKING MODAL (mirrors Home.jsx BookingModal) ── */
.cp-modal-bg{position:fixed;inset:0;background:rgba(44,26,6,.7);backdrop-filter:blur(18px);z-index:2000;display:flex;align-items:center;justify-content:center;padding:16px;animation:fadeIn .25s ease;}
.cp-modal{background:linear-gradient(145deg,#FAF6ED,#F3ECD8);border:1.5px solid rgba(193,156,60,.35);border-radius:24px;width:min(560px,96vw);max-height:92vh;overflow-y:auto;box-shadow:0 60px 140px rgba(44,26,6,.35);animation:popIn .3s ease;}

/* ── FLOATING ── */
.cp-float-wa{position:fixed;bottom:76px;right:20px;background:#25D366;color:#fff;border-radius:30px;padding:11px 18px;text-decoration:none;font-weight:700;font-size:12px;letter-spacing:.1em;display:flex;align-items:center;gap:8px;z-index:500;box-shadow:0 6px 28px rgba(37,211,102,.48);transition:all .25s;font-family:'Josefin Sans',sans-serif;}
.cp-float-top{position:fixed;bottom:20px;right:20px;width:46px;height:46px;border-radius:12px;background:rgba(201,168,76,.15);border:1.5px solid rgba(193,156,60,.4);color:#A07828;font-size:16px;cursor:pointer;z-index:500;display:flex;align-items:center;justify-content:center;transition:all .25s;box-shadow:0 4px 18px rgba(180,140,60,.18);}

/* ── LOADER ── */
.cp-loader{min-height:100vh;background:var(--bg);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:18px;}
.cp-loader-glyph{font-size:52px;color:#C9A84C;filter:drop-shadow(0 0 24px rgba(201,168,76,.4));animation:glowGold 1.8s ease-in-out infinite;}
.cp-loader-txt{font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:4px;color:#9C7A3C;text-transform:uppercase;}

/* ── RESPONSIVE ── */
@media(max-width:980px){
  .ch-content{width:100%;padding:78px 20px 200px;}
  .ch-badges{right:16px;top:auto;bottom:100px;transform:none;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;gap:10px;}
  .ch-stat{min-width:96px;padding:10px 14px;}
  .ch-thumbs{display:none;}
  .cp-contact-inner{grid-template-columns:1fr;gap:36px;}
  .cp-ftop{grid-template-columns:1fr 1fr!important;}
}
@media(max-width:640px){
  .ch-content{padding:70px 16px 180px;}
  .cp-ftop{grid-template-columns:1fr!important;}
  .cp-filter-bar{flex-direction:column;align-items:flex-start;}
}
`}</style>
);

// ─── TOUR CARD ─────────────────────────────────────────────────
function TourCard({tour, index, meta, onBook, onView, formatPrice}){
  const price = tour.price?.discounted ?? tour.price?.original ?? 0;
  const orig  = tour.price?.original;
  const disc  = orig && tour.price?.discounted ? Math.round((1-tour.price.discounted/orig)*100) : 0;
 const img =
  tour.image ||
  tour.images?.[0] ||
  `https://placehold.co/600x212/F3ECD8/A07828?text=${encodeURIComponent((tour.title||"Tour").slice(0,14))}`;
  const score = tour.rating?.score || 0;
  const reviews = tour.rating?.reviews || 0;

  return(
    <div className="cp-card" style={{animationDelay:`${index*0.06}s`}} onClick={()=>onView(tour._id)}>
      <div className="cp-card-imgwrap">
        <img className="cp-card-img" src={img} alt={tour.title} onError={e=>{e.target.src=`https://placehold.co/600x212/F3ECD8/A07828?text=Tour`;}}/>
        <div className="cp-card-ov"/>
        {tour.category && <div className="cp-card-cat" style={{background:`${meta.color}cc`,borderColor:meta.color}}>{tour.category.split(" ")[0]}</div>}
        {disc>0 && <div className="cp-card-disc">-{disc}%</div>}
        {tour.duration && <div className="cp-card-dur">⏱ {tour.duration}</div>}
        {tour.freeCancellation && <div className="cp-card-fc">✓ Free Cancel</div>}
        <div className="cp-card-glyph">{meta.glyph}</div>
      </div>
      <div className="cp-card-body">
        <div className="cp-card-title">{tour.title}</div>
        <div className="cp-card-desc">{tour.description}</div>
        {score>0 && (
          <div className="cp-card-rating">
            <span className="cp-card-stars">{"★".repeat(Math.min(5,Math.floor(score/2)))}</span>
            <span className="cp-card-score">{score.toFixed(1)}</span>
            <span className="cp-card-revs">({reviews.toLocaleString()} reviews)</span>
          </div>
        )}
        <div className="cp-card-foot">
          <div>
            <div className="cp-card-from">From</div>
            <div className="cp-card-price-row">
              {orig && tour.price?.discounted && <span className="cp-card-orig">{formatPrice(orig)}</span>}
              <span className="cp-card-amt">{formatPrice(price)}</span>
              <span className="cp-card-per">/ person</span>
            </div>
          </div>
          <button className="cp-card-btn" onClick={e=>{e.stopPropagation();onBook(tour);}}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

// ─── BOOKING MODAL (light, two-step — same pattern as Home.jsx) ─
function BookingModal({tour, cityName, onClose, formatPrice}){
  const [step,setStep] = useState(1);
  const [busy,setBusy] = useState(false);
  const [f,setF] = useState({name:"",email:"",whatsapp:"",date:"",guests:"2",pickup:"",notes:""});
  const upd = k => e => setF(p=>({...p,[k]:e.target.value}));
  const price = tour?.price?.discounted ?? tour?.price?.original ?? 0;
  const total = price * parseInt(f.guests||1);
  const ok1 = f.name && f.email && f.whatsapp;
  const ok2 = f.date && f.pickup;

  const waMsg = encodeURIComponent(`🏛️ *New Booking — Aurevian Tours*\n\n📋 *${tour?.title||"Tour"}*\n📍 *City:* ${cityName}\n\n👤 *Name:* ${f.name}\n📱 *WhatsApp:* ${f.whatsapp}\n✉️ *Email:* ${f.email}\n📅 *Date:* ${f.date}\n👥 *Guests:* ${f.guests}\n📍 *Pick-up:* ${f.pickup}\n📝 *Notes:* ${f.notes||"None"}\n💰 *Total:* ${formatPrice(total)}\n\nRef: AUR-${Date.now().toString().slice(-6)}`);

  const submit = () => { setBusy(true); setTimeout(()=>{setBusy(false);setStep(3);},1500); };
  const inp = {background:"rgba(201,168,76,.06)",border:"1.5px solid rgba(193,156,60,.25)",borderRadius:10,padding:"11px 14px",color:"#2C1A06",fontSize:13,outline:"none",width:"100%",fontFamily:"'Cormorant Garamond',serif",transition:"border-color .2s,box-shadow .2s"};
  const fi = e=>{e.target.style.borderColor="rgba(160,120,40,.65)";e.target.style.boxShadow="0 0 0 3px rgba(201,168,76,.1)";};
  const fo = e=>{e.target.style.borderColor="rgba(193,156,60,.25)";e.target.style.boxShadow="none";};

  if(!tour) return null;

  return(
    <div className="cp-modal-bg" onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div className="cp-modal">
        <div style={{padding:"24px 28px 18px",borderBottom:"1px solid rgba(193,156,60,.2)",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <div style={{fontSize:9,color:"#A07828",letterSpacing:3,textTransform:"uppercase",marginBottom:7,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Aurevian Tours · {cityName}</div>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:16,fontWeight:600,color:"#2C1A06",lineHeight:1.4,maxWidth:380}}>{tour.title}</div>
          </div>
          <button onClick={onClose} style={{background:"rgba(44,26,6,.06)",border:"1px solid rgba(44,26,6,.1)",color:"#9C7A3C",borderRadius:8,width:34,height:34,cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
        </div>
        <div style={{padding:"24px 28px"}}>
          {step===3?(
            <div style={{textAlign:"center",padding:"24px 0",animation:"fadeUp .4s ease"}}>
              <div style={{fontSize:64,marginBottom:16,animation:"popIn .5s ease"}}>✅</div>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:22,color:"#A07828",marginBottom:10}}>Booking Confirmed!</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:15,color:"#9C7A3C",lineHeight:1.8,marginBottom:28}}>Our team will contact you within 2 hours.<br/>Reference: <strong style={{color:"#A07828"}}>AUR-{Date.now().toString().slice(-6)}</strong></div>
              <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
                <a href={`https://wa.me/201068257754?text=${waMsg}`} target="_blank" rel="noreferrer" style={{background:"#25D366",color:"#fff",borderRadius:12,padding:"13px 24px",textDecoration:"none",fontWeight:700,fontSize:13,display:"flex",alignItems:"center",gap:8,fontFamily:"'Josefin Sans',sans-serif"}}>💬 Confirm on WhatsApp</a>
                <button onClick={onClose} style={{background:"rgba(44,26,6,.06)",border:"1px solid rgba(44,26,6,.1)",color:"#9C7A3C",borderRadius:12,padding:"13px 24px",cursor:"pointer",fontSize:13,fontFamily:"'Josefin Sans',sans-serif"}}>Close</button>
              </div>
            </div>
          ):(
            <>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:22}}>
                {[1,2].map(s=>(<div key={s} style={{display:"flex",alignItems:"center",gap:8}}>
                  <div style={{width:28,height:28,borderRadius:"50%",background:step>=s?"linear-gradient(135deg,#A07828,#C9A84C)":"rgba(201,168,76,.12)",border:step>=s?"none":"1.5px solid rgba(193,156,60,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:step>=s?"#FAF6ED":"#A07828",transition:"all .3s"}}>{s}</div>
                  {s<2&&<div style={{width:40,height:1,background:`linear-gradient(to right,${step>=2?"rgba(160,120,40,.5)":"rgba(193,156,60,.2)"},transparent)`}}/>}
                </div>))}
                <div style={{fontSize:11,color:"#9C7A3C",marginLeft:8,fontFamily:"'Josefin Sans',sans-serif"}}>{step===1?"Personal Details":"Trip Details"}</div>
              </div>
              {step===1&&(
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13,animation:"fadeIn .3s ease"}}>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Full Name *</label><input value={f.name} onChange={upd("name")} placeholder="Your full name" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Email *</label><input value={f.email} onChange={upd("email")} placeholder="your@email.com" type="email" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>WhatsApp * 📱</label><input value={f.whatsapp} onChange={upd("whatsapp")} placeholder="+1 234 567 8900" type="tel" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1",marginTop:6}}><button onClick={()=>setStep(2)} disabled={!ok1} style={{width:"100%",background:"linear-gradient(135deg,#A07828,#C9A84C)",color:"#FAF6ED",border:"none",borderRadius:12,padding:14,cursor:"pointer",fontWeight:700,fontSize:12,letterSpacing:2.5,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",boxShadow:"0 6px 28px rgba(160,120,40,.3)",opacity:!ok1?.45:1,transition:"all .25s"}}>Next — Trip Details →</button></div>
                </div>
              )}
              {step===2&&(
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13,animation:"fadeIn .3s ease"}}>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Tour Date *</label><input value={f.date} onChange={upd("date")} type="date" style={{...inp,colorScheme:"light"}} onFocus={fi} onBlur={fo}/></div>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Guests</label><input value={f.guests} onChange={upd("guests")} type="number" min="1" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Pick-up Location * 📍</label><input value={f.pickup} onChange={upd("pickup")} placeholder="Hotel name / address" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Notes</label><textarea value={f.notes} onChange={upd("notes")} rows={2} placeholder="Special requests…" style={{...inp,resize:"none"}} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1",background:"rgba(201,168,76,.08)",border:"1px solid rgba(193,156,60,.2)",borderRadius:10,padding:"10px 14px",fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"#6B4E1A",display:"flex",justifyContent:"space-between"}}><span>{f.guests} × {formatPrice(price)}</span><strong style={{color:"#A07828"}}>{formatPrice(total)}</strong></div>
                  <div style={{gridColumn:"1/-1",display:"flex",gap:10}}>
                    <button onClick={()=>setStep(1)} style={{background:"rgba(44,26,6,.06)",border:"1px solid rgba(44,26,6,.1)",color:"#9C7A3C",borderRadius:12,padding:"13px 20px",cursor:"pointer",fontSize:12,fontFamily:"'Josefin Sans',sans-serif"}}>← Back</button>
                    <button onClick={submit} disabled={busy||!ok2} style={{flex:1,background:"linear-gradient(135deg,#A07828,#C9A84C)",color:"#FAF6ED",border:"none",borderRadius:12,padding:13,cursor:busy?"wait":"pointer",fontWeight:700,fontSize:12,letterSpacing:2,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",boxShadow:"0 6px 28px rgba(160,120,40,.3)",opacity:(!ok2||busy)?.45:1,display:"flex",alignItems:"center",justifyContent:"center",gap:10}}>
                      {busy?<><div style={{width:16,height:16,border:"2px solid rgba(255,255,255,.3)",borderTop:"2px solid #FAF6ED",borderRadius:"50%",animation:"spin .7s linear infinite"}}/>Sending…</>:"✈ Confirm Booking"}
                    </button>
                    <a href={`https://wa.me/201068257754?text=${waMsg}`} target="_blank" rel="noreferrer" style={{background:"#25D366",color:"#fff",border:"none",borderRadius:12,padding:"13px 18px",cursor:"pointer",fontSize:20,textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center"}}>💬</a>
                  </div>
                  <div style={{gridColumn:"1/-1",textAlign:"center",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:12,color:"#9C7A3C"}}>Free cancellation up to 24 hours before · No charge until confirmed</div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── CONTACT SECTION ─────────────────────────────────────────
function ContactSection({cityName, meta}){
  const [f,setF] = useState({name:"",email:"",phone:"",date:"",guests:"2",msg:""});
  const [sent,setSent] = useState(false);
  const [busy,setBusy] = useState(false);
  const waMsg = encodeURIComponent(`Hi! I'm interested in tours in ${cityName}.\n\nName: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nDate: ${f.date}\nGuests: ${f.guests}\n\n${f.msg}`);
  const submit = () => { setBusy(true); setTimeout(()=>{setBusy(false);setSent(true);},1200); };
  const ok = f.name && f.email;

  return(
    <section className="cp-contact" id="cp-contact">
      <div className="cp-contact-deco">{meta.glyph}</div>
      <div className="cp-contact-inner">
        <div>
          <div style={{display:"flex",alignItems:"center",gap:12,fontSize:9,color:"#A07828",letterSpacing:5,textTransform:"uppercase",marginBottom:16,fontFamily:"'Josefin Sans',sans-serif",fontWeight:700}}><span style={{width:28,height:1,background:"#A07828"}}/>{meta.glyph} Contact Us</div>
          <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(26px,3.5vw,44px)",fontWeight:700,color:"#2C1A06",lineHeight:1.15,marginBottom:16}}>Plan Your {cityName} Journey</h2>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:17,color:"#9C7A3C",lineHeight:1.75,marginBottom:32}}>Our Egypt specialists are ready 24/7 to craft your perfect trip.</p>
          <div>
            {[
              {ic:"📞",label:"Phone & WhatsApp",val:"+20 106 825 7754",sub:"Available 24/7"},
              {ic:"📧",label:"Email",val:"Goldenegypttours26@gmail.com",sub:"Reply within 2 hours"},
              {ic:"📍",label:"Office",val:"Cairo, Egypt",sub:`Serving ${cityName} & beyond`},
            ].map(info=>(
              <div key={info.label} className="cp-cinfo">
                <div className="cp-cinfo-ic">{info.ic}</div>
                <div>
                  <div style={{fontFamily:"'Josefin Sans',sans-serif",fontSize:10,color:"#9C7A3C",textTransform:"uppercase",letterSpacing:2,marginBottom:4}}>{info.label}</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,color:"#2C1A06",fontWeight:600}}>{info.val}</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:12,color:"#9C7A3C",marginTop:2}}>{info.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ab" style={{borderRadius:20}}>
          <div style={{background:"linear-gradient(145deg,#FFFDF8,#F8F2E0)",border:"1.5px solid rgba(193,156,60,.25)",borderRadius:20,padding:32,boxShadow:"0 12px 48px rgba(180,140,60,.1)"}}>
            {sent?(
              <div style={{textAlign:"center",padding:"32px 0"}}>
                <div style={{fontSize:52,marginBottom:12}}>🏛️</div>
                <div style={{fontFamily:"'Cinzel',serif",fontSize:20,color:"#A07828",marginBottom:8}}>Message Sent!</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"#9C7A3C"}}>Our Egypt specialists will reply within 2 hours.</div>
              </div>
            ):(
              <>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:6,fontFamily:"'Josefin Sans',sans-serif"}}>Your Name</label><input className="cp-form-input" placeholder="Your name" value={f.name} onChange={e=>setF(p=>({...p,name:e.target.value}))}/></div>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:6,fontFamily:"'Josefin Sans',sans-serif"}}>Email</label><input className="cp-form-input" type="email" placeholder="email@example.com" value={f.email} onChange={e=>setF(p=>({...p,email:e.target.value}))}/></div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:6,fontFamily:"'Josefin Sans',sans-serif"}}>WhatsApp / Phone</label><input className="cp-form-input" type="tel" placeholder="+20 xxx xxx xxxx" value={f.phone} onChange={e=>setF(p=>({...p,phone:e.target.value}))}/></div>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:6,fontFamily:"'Josefin Sans',sans-serif"}}>Travel Date</label><input className="cp-form-input" type="date" value={f.date} min={new Date().toISOString().split("T")[0]} onChange={e=>setF(p=>({...p,date:e.target.value}))} style={{colorScheme:"light"}}/></div>
                </div>
                <div style={{marginBottom:14}}>
                  <label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:6,fontFamily:"'Josefin Sans',sans-serif"}}>Number of Guests</label>
                  <select className="cp-form-select" value={f.guests} onChange={e=>setF(p=>({...p,guests:e.target.value}))}>
                    {[1,2,3,4,5,6,7,8,"9+"].map(n=><option key={n} value={n}>{n} {n===1?"person":"people"}</option>)}
                  </select>
                </div>
                <div style={{marginBottom:14}}>
                  <label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:6,fontFamily:"'Josefin Sans',sans-serif"}}>Your Message</label>
                  <textarea className="cp-form-textarea" rows={3} placeholder={`Tell us about your dream ${cityName} trip…`} value={f.msg} onChange={e=>setF(p=>({...p,msg:e.target.value}))} style={{resize:"vertical"}}/>
                </div>
                <div style={{display:"flex",gap:10}}>
                  <button onClick={submit} disabled={busy||!ok} style={{flex:1,background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)",color:"#FAF6ED",border:"none",borderRadius:11,padding:14,fontFamily:"'Josefin Sans',sans-serif",fontWeight:700,fontSize:11,letterSpacing:2,textTransform:"uppercase",cursor:"pointer",boxShadow:"0 6px 24px rgba(160,120,40,.3)",opacity:(busy||!ok)?.5:1}}>{busy?"Sending…":"Send Request"}</button>
                  <a href={`https://wa.me/201068257754?text=${waMsg}`} target="_blank" rel="noreferrer" style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"14px 20px",background:"#25D366",color:"#fff",borderRadius:11,textDecoration:"none",fontSize:18}}>💬</a>
                </div>
                <div style={{textAlign:"center",marginTop:12,fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:11.5,color:"#9C7A3C"}}>Free cancellation · Instant confirmation</div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER (mirrors Home.jsx exactly) ──────────────────────
function Footer({allCities, meta, navigate}){
  return(
    <footer className="cp-footer">
      <div className="cp-ftop" style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1.5fr",gap:"clamp(24px,4vw,52px)",marginBottom:"clamp(28px,4vw,48px)"}}>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16,cursor:"pointer"}} onClick={()=>navigate("/")}>
            <AurevianLogo size={48}/>
            <div>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:15,fontWeight:700,background:"linear-gradient(135deg,#8B6010,#C9A84C)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"0.18em"}}>AUREVIAN</div>
              <div style={{fontSize:7,color:"#9C7A3C",letterSpacing:"0.35em",fontFamily:"'Josefin Sans',sans-serif"}}>EGYPT TOURS & EXPERIENCES</div>
            </div>
          </div>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",color:"#9C7A3C",fontSize:13,lineHeight:1.75,marginBottom:18,maxWidth:260}}>We create authentic, personalised experiences across Egypt with premium service and local expertise.</p>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            {["TripAdvisor","Trustpilot","IATA","UNWTO"].map(b=><span key={b} style={{background:"rgba(201,168,76,.1)",border:"1px solid rgba(193,156,60,.25)",borderRadius:6,padding:"3px 10px",color:"#9C7A3C",fontSize:9,letterSpacing:"0.1em",fontFamily:"'Josefin Sans',sans-serif"}}>{b}</span>)}
          </div>
        </div>
        <div>
          <div style={{color:"#8B6010",fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",marginBottom:16,fontWeight:700,paddingBottom:10,borderBottom:"1px solid rgba(193,156,60,.2)",fontFamily:"'Josefin Sans',sans-serif"}}>Explore</div>
          {[["Home","/"],["All Tours","/tours"],["Destinations","/destinations"],["AI Trip Planner","/ai"]].map(([l,h])=>(
            <Link key={l} to={h} className="cp-flink">{l}</Link>
          ))}
        </div>
        <div>
          <div style={{color:"#8B6010",fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",marginBottom:16,fontWeight:700,paddingBottom:10,borderBottom:"1px solid rgba(193,156,60,.2)",fontFamily:"'Josefin Sans',sans-serif"}}>Destinations</div>
          {allCities.slice(0,6).map(c=>(
            <Link key={c._id} to={`/city/${c.slug}`} className="cp-flink">{c.name}</Link>
          ))}
        </div>
        <div>
          <div style={{color:"#8B6010",fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",marginBottom:16,fontWeight:700,paddingBottom:10,borderBottom:"1px solid rgba(193,156,60,.2)",fontFamily:"'Josefin Sans',sans-serif"}}>Contact Us</div>
          {[["📞","+20 106 825 7754","tel:+201068257754"],["✉","Goldenegypttours26@gmail.com","mailto:Goldenegypttours26@gmail.com"],["📍","Cairo, Egypt","#"]].map(([ic,v,href])=>(
            <a key={v} href={href} style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:12,fontSize:13,color:"#9C7A3C",lineHeight:1.5,fontFamily:"'Cormorant Garamond',serif",textDecoration:"none"}}><span style={{color:"#A07828",flexShrink:0}}>{ic}</span>{v}</a>
          ))}
          <div style={{marginTop:16,padding:"14px 16px",background:"rgba(201,168,76,.08)",border:"1.5px solid rgba(193,156,60,.22)",borderRadius:12}}>
            <div style={{fontSize:9,color:"#8B6010",letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:6,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>💬 WhatsApp Direct</div>
            <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" style={{fontFamily:"'Cinzel',serif",fontSize:13,color:"#A07828",textDecoration:"none",fontWeight:700}}>+20 106 825 7754</a>
          </div>
        </div>
      </div>
      <div style={{borderTop:"1px solid rgba(193,156,60,.15)",paddingTop:"clamp(16px,3vw,22px)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
        <span style={{color:"rgba(107,78,26,.5)",fontSize:12,fontFamily:"'Josefin Sans',sans-serif"}}>© 2026 Aurevian Egypt Tours & Experiences. All rights reserved.</span>
        <div style={{fontSize:20,opacity:.4,letterSpacing:6}}>{meta.glyphs.slice(0,6).join(" ")}</div>
        <div style={{display:"flex",gap:8}}>
          {["🔒 SSL","✈ IATA","🌍 UNWTO"].map(b=>(<span key={b} style={{background:"rgba(201,168,76,.08)",border:"1px solid rgba(193,156,60,.2)",borderRadius:6,padding:"3px 10px",color:"rgba(107,78,26,.5)",fontSize:9,letterSpacing:"0.1em",fontFamily:"'Josefin Sans',sans-serif"}}>{b}</span>))}
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════
//  MAIN — CityPage
// ═══════════════════════════════════════════════════════════════
export default function CityPage() {
  const {cityId} = useParams();
  const navigate  = useNavigate();
  const {language:globalLang, currency:globalCur, setLanguage:setGlobalLang, setCurrency:setGlobalCur, formatPrice} = useGlobal();

  const [city,setCity] = useState(null);
  const [tours,setTours] = useState([]);
  const [allCities,setAllCities] = useState([]);
  const [loading,setLoading] = useState(true);
  const [heroIdx,setHeroIdx] = useState(0);
  const [cat,setCat] = useState("all");
  const [sort,setSort] = useState("popular");
  const [bookTour,setBookTour] = useState(null);
  const [sticky,setSticky] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const [mMenu,setMMenu] = useState(false);
  const [langOpen,setLangOpen] = useState(false);
  const [curOpen,setCurOpen] = useState(false);
  const [uiLang,setUiLang] = useState(globalLang||"en");
  const [cur,setCur] = useState(globalCur||"USD");

  const meta = CITY_META[cityId] || DEFAULT_META;
  const fmtP = p => formatPrice ? formatPrice(p) : fmt(p,cur);

  // ── shared language switcher logic (identical to Home.jsx) ──
  const handleLangSelect = useCallback((code,dir)=>{
    setUiLang(code);
    if(setGlobalLang) setGlobalLang(code);
    document.documentElement.setAttribute("lang",code);
    document.documentElement.setAttribute("dir",dir||"ltr");
    if(window.i18n && window.i18n.changeLanguage) window.i18n.changeLanguage(code);
    if(window.google && window.google.translate){
      try{
        const selectEl = document.querySelector(".goog-te-combo");
        if(selectEl){selectEl.value=code;selectEl.dispatchEvent(new Event("change"));}
      }catch(e){}
    }
  },[setGlobalLang]);

  const setCurrencyVal = (code)=>{ setCur(code); if(setGlobalCur) setGlobalCur(code); };

  useEffect(()=>{
    if(!document.getElementById("gt-script")){
      window.googleTranslateElementInit=()=>{
        new window.google.translate.TranslateElement({pageLanguage:"en",includedLanguages:"en,fr,es,de,it,pt,ru,zh-CN,ja,nl,tr,ko",autoDisplay:false},"gt-hidden");
      };
      const s=document.createElement("script");
      s.id="gt-script"; s.src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"; s.async=true;
      document.head.appendChild(s);
    }
  },[]);

  useEffect(()=>{ if(globalLang) setUiLang(globalLang); },[globalLang]);
  useEffect(()=>{ if(globalCur) setCur(globalCur); },[globalCur]);

  useEffect(() => {
    setLoading(true); window.scrollTo({top:0}); setCat("all"); setHeroIdx(0);
    Promise.all([getCityBySlug(cityId), getToursByCity(cityId), getAllCities()])
      .then(([cityData, toursData, citiesData]) => {
        setCity(cityData || {slug:cityId, name:cityId});
        setTours(Array.isArray(toursData) ? toursData : []);
        setAllCities(Array.isArray(citiesData) ? citiesData : []);
      })
      .catch(() => { setTours([]); setAllCities([]); })
      .finally(() => setLoading(false));
  }, [cityId]);

  useEffect(() => {
    const id = setInterval(() => setHeroIdx(i => (i+1) % meta.heroImages.length), 6500);
    return () => clearInterval(id);
  }, [meta.heroImages.length]);

  useEffect(() => {
    const fn = () => { setSticky(window.scrollY > 460); setScrolled(window.scrollY > 52); };
    window.addEventListener("scroll", fn, {passive:true});
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn=(e)=>{
      if(!e.target.closest(".lang-dd")) setLangOpen(false);
      if(!e.target.closest(".cur-dd")) setCurOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const filtered = useCallback(() => {
    let l = [...tours];
    if (cat !== "all") l = l.filter(t => t.category === cat);
    if (sort === "price_asc")  l.sort((a,b)=>(a.price?.discounted??a.price?.original??0)-(b.price?.discounted??b.price?.original??0));
    if (sort === "price_desc") l.sort((a,b)=>(b.price?.discounted??b.price?.original??0)-(a.price?.discounted??a.price?.original??0));
    if (sort === "rating")     l.sort((a,b)=>(b.rating?.score||0)-(a.rating?.score||0));
    if (sort === "popular")    l.sort((a,b)=>(b.rating?.reviews||0)-(a.rating?.reviews||0));
    return l;
  }, [tours, cat, sort])();

  const counts = CATS.reduce((a,c) => { a[c] = c==="all" ? tours.length : tours.filter(t=>t.category===c).length; return a; }, {});
  const cityName = city?.name || cityId;
  const minPrice = tours.length ? Math.min(...tours.map(t=>t.price?.discounted??t.price?.original??9999)) : 0;
  const bandTxt = `${meta.glyph}  ${cityName.toUpperCase()}  ✦  AUREVIAN TOURS  ✦  DISCOVER EGYPT  ✦  `.repeat(6);
  const currentLangObj = LANGS.find(l=>l.code===uiLang) || LANGS[0];

  if (loading) return (
    <div className="cp-loader">
      <Styles color={meta.color}/>
      <div className="cp-loader-glyph">{meta.glyph}</div>
      <div className="cp-loader-txt">Loading…</div>
    </div>
  );

  return (
    <div style={{position:"relative",minHeight:"100vh",background:"#FAF6ED",fontFamily:"'Josefin Sans',sans-serif"}}>
      <Styles color={meta.color}/>
      <div id="gt-hidden" style={{display:"none"}}/>

      <div className="cp-glyphs">
        {meta.glyphs.map((g,i)=>(
          <span key={i} className="cp-glyph" style={{top:`${8+(i*13)%78}%`,left:`${4+(i*17)%92}%`,fontSize:18+(i%4)*10,animationDelay:`${i*0.8}s`,animationDuration:`${7+i%5}s`}}>{g}</span>
        ))}
      </div>

      {/* ── NAV ── */}
      <nav className="cp-nav" style={{background:scrolled?"rgba(250,246,237,.98)":"rgba(250,246,237,.9)"}}>
        <button className="cp-back" onClick={()=>navigate(-1)}>← Back</button>
        <div className="logo-wrap" style={{display:"flex",alignItems:"center",gap:11,cursor:"pointer",flexShrink:0,marginLeft:6}} onClick={()=>navigate("/")}>
          <AurevianLogo size={40}/>
          <div className="dn" style={{display:"none"}}>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:14,fontWeight:700,background:"linear-gradient(135deg,#8B6010,#C9A84C,#8B6010)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"0.18em"}}>AUREVIAN</div>
          </div>
        </div>
        <ul style={{display:"flex",gap:"clamp(10px,2vw,24px)",listStyle:"none",marginLeft:"auto",marginRight:16}} className="dn">
          {[["Home","/"],["Tours","/tours"],["Destinations","/destinations"],["AI Planner","/ai"],["About","/about"],["Contact","/contact"]].map(([label,path])=>(
            <li key={path}><Link to={path} className="nla" style={{color:"rgba(44,26,6,.6)",fontSize:11,letterSpacing:"0.18em",textTransform:"uppercase",textDecoration:"none",fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>{label}</Link></li>
          ))}
        </ul>
        <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
          <div className="lang-dd" style={{position:"relative"}}>
            <button onClick={()=>{setLangOpen(!langOpen);setCurOpen(false);}} className="cp-sw-btn">
              <span style={{fontSize:14}}>{currentLangObj.flag}</span><span className="dn" style={{display:"inline"}}>{currentLangObj.label}</span><span style={{fontSize:9,opacity:.7}}>▾</span>
            </button>
            <LanguageSelector visible={langOpen} onClose={()=>setLangOpen(false)} currentLang={uiLang} onSelect={handleLangSelect}/>
          </div>
          <div className="cur-dd" style={{position:"relative"}}>
            <button onClick={()=>{setCurOpen(!curOpen);setLangOpen(false);}} className="cp-sw-btn">{CURR[cur]?.s} {cur} ▾</button>
            {curOpen&&<div className="cp-sw-drop">
              {Object.entries(CURR).map(([code,{l}])=>(
                <div key={code} className="dd" onClick={()=>{setCurrencyVal(code);setCurOpen(false);}} style={{padding:"10px 16px",cursor:"pointer",fontSize:11,color:cur===code?"#A07828":"rgba(44,26,6,.6)",fontWeight:cur===code?700:400,fontFamily:"'Josefin Sans',sans-serif"}}>{l}</div>
              ))}
            </div>}
          </div>
          <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="btn-ghost dn" style={{textDecoration:"none",display:"flex",alignItems:"center"}}>💬 WhatsApp</a>
          <Link to="/tours" className="btn-gold" style={{textDecoration:"none",whiteSpace:"nowrap"}}>All Tours</Link>
          <button style={{display:"none"}} className="dm" onClick={()=>setMMenu(!mMenu)}>{mMenu?"✕":"☰"}</button>
        </div>
      </nav>

      {/* ── STICKY MINI BAR ── */}
      <div className={`cp-sticky${sticky?" visible":""}`}>
        <span className="cp-sticky-name">{cityName} — {filtered.length} experiences</span>
        <span className="cp-sticky-price">{minPrice>0?`From ${fmtP(minPrice)}`:""}</span>
        <button className="btn-gold" style={{padding:"8px 18px",fontSize:10}} onClick={()=>document.getElementById("cp-grid")?.scrollIntoView({behavior:"smooth"})}>Explore Tours</button>
      </div>

      {/* ── HERO ── */}
      <section style={{position:"relative",paddingTop:66}}>
        <div className="ch-wrap">
          {meta.heroImages.map((src,i)=>(
            <div key={i} className="ch-slide" style={{backgroundImage:`url(${src})`,opacity:i===heroIdx?1:0}}/>
          ))}
          <div className="ch-overlay"/>
          <div className="ch-glow"/>
          <div className="ch-edge"/>
          <div className="ch-band"><span className="ch-band-txt">{bandTxt}</span></div>

          {[15,32,55,72,88].map((left,i)=>(
            <div key={i} className="ch-particle" style={{left:`${left}%`,bottom:"22%",animationDelay:`${i*1.2}s`,animationDuration:`${5+i}s`}}/>
          ))}

          <div className="ch-content">
            <div style={{animation:"fadeUp .8s ease both"}}>
              <div style={{display:"flex",alignItems:"center",gap:8,fontFamily:"'Josefin Sans',sans-serif",fontSize:11,marginBottom:18,color:"#9C7A3C"}}>
                <Link to="/" style={{color:"inherit",textDecoration:"none"}}>Home</Link><span style={{opacity:.4}}>›</span>
                <Link to="/tours" style={{color:"inherit",textDecoration:"none"}}>Tours</Link><span style={{opacity:.4}}>›</span>
                <span style={{color:"#A07828",fontWeight:700}}>{cityName}</span>
              </div>

              <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(201,168,76,.12)",border:"1.5px solid rgba(193,156,60,.4)",borderRadius:32,padding:"6px 18px",marginBottom:22}}>
                <span style={{color:"#A07828",fontSize:9,letterSpacing:"0.35em",textTransform:"uppercase",fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ {meta.glyph} Destination Guide</span>
              </div>

              <div style={{fontSize:46,marginBottom:8,color:meta.color,filter:`drop-shadow(0 0 24px ${meta.color}66)`,animation:"glowGold 4s ease-in-out infinite"}}>{meta.glyph}</div>
              <h1 className="gta" style={{fontFamily:"'Cinzel',serif",fontWeight:700,fontSize:"clamp(34px,6vw,76px)",lineHeight:1,marginBottom:10}}>{cityName}</h1>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontWeight:400,fontSize:"clamp(15px,2vw,22px)",color:"rgba(107,78,26,.75)",marginBottom:24,maxWidth:480}}>{meta.tagline}</p>

              <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:28}}>
                <div style={{display:"flex",alignItems:"center",gap:7,padding:"6px 14px",background:"rgba(250,246,237,.7)",border:"1px solid rgba(193,156,60,.3)",borderRadius:20,fontSize:11,color:"#6B4E1A",fontFamily:"'Josefin Sans',sans-serif"}}>🌍 {meta.country} · {meta.continent}</div>
                {minPrice>0 && <div style={{display:"flex",alignItems:"center",gap:7,padding:"6px 14px",background:"rgba(250,246,237,.7)",border:"1px solid rgba(193,156,60,.3)",borderRadius:20,fontSize:11,color:"#6B4E1A",fontFamily:"'Josefin Sans',sans-serif"}}>From <strong style={{color:"#A07828"}}>{fmtP(minPrice)}</strong></div>}
                <div style={{display:"flex",alignItems:"center",gap:7,padding:"6px 14px",background:"rgba(250,246,237,.7)",border:"1px solid rgba(193,156,60,.3)",borderRadius:20,fontSize:11,color:"#6B4E1A",fontFamily:"'Josefin Sans',sans-serif"}}>✓ Free Cancellation</div>
              </div>

              <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
                <button onClick={()=>document.getElementById("cp-grid")?.scrollIntoView({behavior:"smooth"})} className="btn-gold">Explore Tours →</button>
                <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" style={{background:"rgba(37,211,102,.08)",border:"1.5px solid rgba(37,211,102,.35)",color:"#1A9E50",borderRadius:10,padding:"13px 22px",textDecoration:"none",fontWeight:700,fontSize:11,letterSpacing:"0.18em",fontFamily:"'Josefin Sans',sans-serif",display:"flex",alignItems:"center",gap:8}}>💬 WhatsApp</a>
              </div>
            </div>
          </div>

          <div className="ch-badges">
            <div className="ch-stat" style={{animationDelay:".3s"}}>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:26,fontWeight:700,color:"#A07828",lineHeight:1}}>{tours.length}+</div>
              <div style={{fontFamily:"'Josefin Sans',sans-serif",fontSize:8,color:"rgba(107,78,26,.55)",letterSpacing:"0.2em",textTransform:"uppercase",marginTop:4}}>Experiences</div>
            </div>
            <div className="ch-stat" style={{animationDelay:".4s"}}>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:24,fontWeight:700,color:"#A07828",lineHeight:1}}>4.9</div>
              <div style={{color:"#C9A84C",fontSize:12,letterSpacing:2,margin:"3px 0"}}>★★★★★</div>
              <div style={{fontFamily:"'Josefin Sans',sans-serif",fontSize:8,color:"rgba(107,78,26,.55)",letterSpacing:"0.2em",textTransform:"uppercase"}}>5,000+ Travellers</div>
            </div>
            <div className="ch-thumbs">
              {meta.heroImages.map((src,i)=>(
                <div key={i} className={`ch-thumb${heroIdx===i?" active":""}`} onClick={()=>setHeroIdx(i)}><img src={src} alt={`View ${i+1}`}/></div>
              ))}
            </div>
          </div>

          {meta.glyphs.slice(0,4).map((h,i)=>(
            <div key={i} style={{position:"absolute",zIndex:3,fontSize:`${22+i*4}px`,color:`${meta.color}22`,fontFamily:"serif",left:`${[62,78,70,85][i]}%`,top:`${[25,18,62,50][i]}%`,animation:`float ${4+i*.9}s ease-in-out infinite`,animationDelay:`${i*.8}s`,pointerEvents:"none"}}>{h}</div>
          ))}

          <div className="ch-scroll">
            <span style={{fontSize:7,letterSpacing:"0.5em",color:"rgba(107,78,26,.4)",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif"}}>SCROLL</span>
            <div style={{width:1,height:38,background:"linear-gradient(to bottom,rgba(193,156,60,.5),transparent)"}}/>
          </div>
        </div>
      </section>

      {/* ── CITY TABS ── */}
      <nav className="cp-tabs">
        {allCities.map(c=>{
          const cm = CITY_META[c.slug] || DEFAULT_META;
          const isActive = c.slug === cityId;
          return <Link key={c._id} to={`/city/${c.slug}`} className={`cp-tab${isActive?" active":""}`} style={isActive?{color:cm.color,borderBottomColor:cm.color}:{}}>{cm.glyph} {c.name}</Link>;
        })}
      </nav>

      {/* ── HIGHLIGHTS ── */}
      <div className="cp-highlights">
        <span className="cp-hl-label">✦ Must-See Highlights</span>
        {meta.highlights.map(h=><span key={h} className="cp-hl-pill">{h}</span>)}
      </div>

      {/* ── FILTER BAR ── */}
      <div className="cp-filter-bar" id="cp-grid">
        <div className="cp-filter-pills">
          {CATS.filter(c=>c==="all"||counts[c]>0).map(c=>(
            <button key={c} className={`cp-fpill${cat===c?" active":""}`} onClick={()=>setCat(c)}>
              <span>{CAT_ICONS[c]}</span>{CAT_LABELS[c]||c}<span className="cp-fcount">{counts[c]||0}</span>
            </button>
          ))}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <span className="cp-result"><strong>{filtered.length}</strong> experiences</span>
          <select className="cp-sort" value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="popular">Most Popular</option>
            <option value="rating">Top Rated</option>
            <option value="price_asc">Price ↑</option>
            <option value="price_desc">Price ↓</option>
          </select>
        </div>
      </div>

      {/* ── TOUR GRID ── */}
      <div className="cp-grid-section">
        <div className="cp-grid">
          {filtered.length===0
            ? <div className="cp-empty"><div className="cp-empty-glyph">{meta.glyph}</div><div className="cp-empty-txt">No experiences in this category yet.</div></div>
            : filtered.map((tour,i)=>(
                <TourCard key={tour._id} tour={tour} index={i} meta={meta} onBook={setBookTour} onView={id=>navigate(`/tour/${id}`)} formatPrice={fmtP}/>
              ))
          }
        </div>
      </div>

      {/* ── OTHER DESTINATIONS ── */}
      {allCities.filter(c=>c.slug!==cityId).length>0 && (
        <section className="cp-othercities">
          <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:28}}>
            <span style={{fontFamily:"'Josefin Sans',sans-serif",fontSize:10,letterSpacing:4,color:"#A07828",textTransform:"uppercase",fontWeight:700,whiteSpace:"nowrap"}}>✦ Discover More of Egypt</span>
            <div className="gline" style={{flex:1}}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(170px,1fr))",gap:14}}>
            {allCities.filter(c=>c.slug!==cityId).map(c=>{
              const cm = CITY_META[c.slug] || DEFAULT_META;
              return(
                <Link key={c._id} to={`/city/${c.slug}`} className="cp-cc">
                  <img src={cm.heroImages?.[0]||`https://placehold.co/200x130/F3ECD8/A07828?text=${c.name}`} alt={c.name} onError={e=>{e.target.src=`https://placehold.co/200x130/F3ECD8/A07828?text=${c.name}`;}}/>
                  <div className="cp-cc-ov"/>
                  <div style={{position:"absolute",inset:0,background:`radial-gradient(circle at 0% 100%,${cm.color}33,transparent 65%)`}}/>
                  <div className="cp-cc-info">
                    <div style={{fontSize:20,lineHeight:1,marginBottom:2,color:"#FAF6ED"}}>{cm.glyph}</div>
                    <div style={{fontFamily:"'Cinzel',serif",fontSize:14,fontWeight:700,color:"#FAF6ED",textShadow:"0 2px 12px rgba(0,0,0,.5)"}}>{c.name}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* ── CONTACT ── */}
      <ContactSection cityName={cityName} meta={meta}/>

      {/* ── FOOTER ── */}
      <Footer allCities={allCities} meta={meta} navigate={navigate}/>

      {/* ── FLOATING ── */}
      <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="cp-float-wa">💬 <span>WhatsApp</span></a>
      <button className="cp-float-top" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>▲</button>

      {/* ── BOOKING MODAL ── */}
      {bookTour && <BookingModal tour={bookTour} cityName={cityName} onClose={()=>setBookTour(null)} formatPrice={fmtP}/>}
    </div>
  );
}