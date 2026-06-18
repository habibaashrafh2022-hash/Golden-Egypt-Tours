// ============================================================
//  Tour.jsx — Aurevian Tours ✦ Unified Luxury Edition (v2)
//  Layout matches the approved reference design exactly:
//  top trust bar + main nav, breadcrumb, image hero with
//  floating booking widget, segmented tab navigation, overview
//  cards, itinerary timeline + includes/excludes/good-to-know
//  stack, traveller reviews, FAQ accordion, dark CTA band,
//  full footer. Cream/gold palette, Cinzel / Cormorant Garamond /
//  Josefin Sans, shared currency switcher. All on-page copy stays
//  in English — every translation is handled live by the Google
//  Translate engine wired up below. No text is hand-translated.
//  Route: /tour/:tourId  (this single template powers every tour)
// ============================================================

import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getTourById } from "../api/index";
import { useGlobal } from "../context/GlobalContext";

// ─── BRAND CONTACT DETAILS (single source of truth) ───────────
const PHONE_DIGITS = "201068257754";
const PHONE_DISPLAY = "+20 106 825 7754";
const EMAIL = "aureviantours@gmail.com";
const WA_BASE = `https://wa.me/${PHONE_DIGITS}`;

// ─── CURRENCIES (identical list to Home.jsx / CityPage.jsx) ───
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

// ─── LANGUAGES — labels only (just the picker UI), every word
//     of actual page content is translated live by Google
//     Translate, never by a hand-written dictionary. ───────────
const LANGS = [
  {code:"en", label:"English",    flag:"🇬🇧", dir:"ltr", gt:"en"},
  {code:"es", label:"Español",    flag:"🇪🇸", dir:"ltr", gt:"es"},
  {code:"it", label:"Italiano",   flag:"🇮🇹", dir:"ltr", gt:"it"},
  {code:"fr", label:"Français",   flag:"🇫🇷", dir:"ltr", gt:"fr"},
  {code:"de", label:"Deutsch",    flag:"🇩🇪", dir:"ltr", gt:"de"},
  {code:"pt", label:"Português",  flag:"🇵🇹", dir:"ltr", gt:"pt"},
  {code:"zh", label:"中文",        flag:"🇨🇳", dir:"ltr", gt:"zh-CN"},
  {code:"nl", label:"Nederlands", flag:"🇳🇱", dir:"ltr", gt:"nl"},
  {code:"ja", label:"日本語",      flag:"🇯🇵", dir:"ltr", gt:"ja"},
  {code:"ru", label:"Русский",    flag:"🇷🇺", dir:"ltr", gt:"ru"},
  {code:"tr", label:"Türkçe",     flag:"🇹🇷", dir:"ltr", gt:"tr"},
  {code:"ko", label:"한국어",      flag:"🇰🇷", dir:"ltr", gt:"ko"},
  {code:"ar", label:"العربية",    flag:"🇪🇬", dir:"rtl", gt:"ar"},
];

const fmt = (p,cur) => `${CURR[cur]?.s||"$"}${Math.round(p*(CURR[cur]?.r||1)).toLocaleString()}`;

// ─── FALLBACK IMAGES (used whenever a tour record is missing
//     its own gallery, so every tour still renders fully) ──────
const CATEGORY_IMAGES = {
  "Tour packages": [
    "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=80",
    "https://images.unsplash.com/photo-1608037521244-f1c6c7635194?w=1200&q=80",
    "https://images.unsplash.com/photo-1539768942893-daf2293f73e8?w=1200&q=80",
    "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1200&q=80",
    "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80",
    "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1200&q=80",
  ],
  "Guided tours and free tours": [
    "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80",
    "https://images.unsplash.com/photo-1590090304945-8f2a6a3f1e7d?w=1200&q=80",
  ],
  "Day trip": [
    "https://images.unsplash.com/photo-1539768942893-daf2293f73e8?w=1200&q=80",
    "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=80",
  ],
  "default": [
    "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=80",
    "https://images.unsplash.com/photo-1608037521244-f1c6c7635194?w=1200&q=80",
    "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80",
    "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1200&q=80",
  ],
};
const getImages = (tour) => {
  if (tour?.images?.length) return tour.images;
  return CATEGORY_IMAGES[tour?.category] || CATEGORY_IMAGES["default"];
};

// ─── GENERIC FALLBACKS — keep every tour page complete even if
//     a given record hasn't filled in every optional field ─────
const DEFAULT_INCLUDES = ["Private air-conditioned vehicle","Professional licensed guide","Entrance fees to all attractions","Bottled water during the tour","Hotel pickup and drop-off","All taxes and service charges"];
const DEFAULT_EXCLUDES = ["Personal expenses","Tipping (optional)","Beverages during lunch"];
const DEFAULT_GOOD_TO_KNOW = ["Wear comfortable shoes","Bring your passport or ID","Sunscreen, hat and sunglasses recommended","The tour is suitable for all ages","The itinerary can be customized to your needs"];
const DEFAULT_FAQ = [
  {q:"Is this tour suitable for children?", a:"Yes, this tour is family-friendly and suitable for travellers of all ages. Strollers and child seats can be arranged on request."},
  {q:"What should I wear?", a:"Comfortable walking shoes, light breathable clothing, and a hat or sunscreen are recommended, especially during the warmer months."},
  {q:"Can I customize the itinerary?", a:"Absolutely — get in touch with our team before your trip and we'll happily tailor the stops and pace to suit you."},
  {q:"What is the cancellation policy?", a:"Free cancellation is available up to 24 hours before the tour starts for a full refund, no questions asked."},
];
const DEFAULT_REVIEWS = [
  {name:"James Thompson", country:"United Kingdom", flag:"🇬🇧", rating:5, date:"February 2024", text:"The best day tour ever! Our guide was extremely knowledgeable and friendly.", avatar:"👤"},
  {name:"Maria Garcia", country:"Spain", flag:"🇪🇸", rating:5, date:"January 2024", text:"Everything was perfect from pickup to drop-off. Highly recommended!", avatar:"👤"},
  {name:"David Chen", country:"Australia", flag:"🇦🇺", rating:5, date:"April 2024", text:"Fantastic experience! The museum and pyramids were incredible.", avatar:"👤"},
];
const OV_ICON_FALLBACK = [
  {ic:"🚐", l:"Hotel Pickup & Drop-off"},
  {ic:"🏛️", l:"Expert Licensed Guide"},
  {ic:"❄️", l:"Air-Conditioned Vehicle"},
  {ic:"🍽️", l:"Lunch Included"},
  {ic:"🎫", l:"All Entrance Fees Included"},
];

const TABS = [
  {id:"overview",  label:"Overview",       ic:"🧭"},
  {id:"itinerary", label:"Itinerary",      ic:"📅"},
  {id:"includes",  label:"What's Included",ic:"🎁"},
  {id:"goodtoknow",label:"Good to Know",   ic:"ℹ️"},
  {id:"reviews",   label:"Reviews",        ic:"⭐"},
  {id:"faq",       label:"FAQ",            ic:"❓"},
];

// ─── AUREVIAN LOGO — identical to Home.jsx ────────────────────
function AurevianLogo({size=44}){
  return(
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aurPyr" x1="8%" y1="0%" x2="95%" y2="100%">
          <stop offset="0%" stopColor="#7E5A0E"/>
          <stop offset="50%" stopColor="#C9A84C"/>
          <stop offset="100%" stopColor="#F0D78C"/>
        </linearGradient>
        <linearGradient id="aurRing" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8C96D"/>
          <stop offset="100%" stopColor="#8B6010"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="29.5" stroke="url(#aurRing)" strokeWidth="1" opacity="0.5"/>
      <circle cx="32" cy="32" r="25.6" stroke="url(#aurRing)" strokeWidth="0.6" opacity="0.32"/>
      <line x1="11.5" y1="49.5" x2="52.5" y2="49.5" stroke="url(#aurRing)" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      <path d="M32 12.5 L50.5 49 L13.5 49 Z" fill="url(#aurPyr)"/>
      <circle cx="32" cy="34.5" r="6.2" fill="#FBEFC8" opacity="0.95"/>
      <rect x="19.5" y="33.1" width="25" height="2.7" fill="#FBEFC8"/>
      <circle cx="32" cy="12.5" r="1.5" fill="#F7E2A0"/>
    </svg>
  );
}
function BrandMark({size=44, dark}){
  const navigate = useNavigate();
  return(
    <div style={{display:"flex",alignItems:"center",gap:11,cursor:"pointer",flexShrink:0}} onClick={()=>navigate("/")}>
      <AurevianLogo size={size}/>
      <div style={{lineHeight:1}}>
        <div style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(13px,1.6vw,17px)",fontWeight:700,letterSpacing:"0.1em",color:dark?"#FAF6ED":"#231A0E"}}>AUREVIAN</div>
        <div style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(11px,1.3vw,14px)",fontWeight:600,letterSpacing:"0.22em",color:dark?"rgba(250,246,237,.75)":"#8B6010",marginTop:1}}>TOURS</div>
        <div style={{fontSize:"clamp(6px,.8vw,7px)",color:dark?"rgba(250,246,237,.5)":"#9C7A3C",letterSpacing:"0.28em",marginTop:3,fontFamily:"'Josefin Sans',sans-serif",fontWeight:600}}>LUXURY EGYPT JOURNEYS</div>
      </div>
    </div>
  );
}

// ─── LANGUAGE SELECTOR — flips Google Translate only ───────────
function LanguageSelector({visible, onClose, currentLang, onSelect}){
  if(!visible) return null;
  return(
    <div className="tp-lang-pop">
      <div className="tp-lang-pop-h">🌍 Select Language</div>
      <div className="tp-lang-pop-grid">
        {LANGS.map(lang=>(
          <button key={lang.code} className={`lang-btn${currentLang===lang.code?" on":""}`} onClick={()=>{onSelect(lang);onClose();}}>
            <span style={{fontSize:16}}>{lang.flag}</span><span>{lang.label}</span>
          </button>
        ))}
      </div>
      <div className="tp-lang-pop-foot">Powered by Google Translate</div>
    </div>
  );
}

// ─── GLOBAL STYLES ──────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;600;700&display=swap');

:root{
  --g:#C9A84C; --gl:#E8C96D; --gd:rgba(201,168,76,.1); --gb:rgba(193,156,60,.22);
  --bg:#FAF6ED; --bg2:#F3ECD8; --bg3:#EDE3C8;
  --dark:#1C140A; --mid:#6B4E1A; --muted:#9C7A3C;
  --text:#2C1A06; --dim:rgba(44,26,6,.65);
  --card:#FBF7EE; --cardb:#F5EED8;
  --green:#3C9968; --red:#B5453F;
  --header-h:108px;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--text);font-family:'Josefin Sans',sans-serif;overflow-x:hidden;}
button{font-family:inherit;}
::-webkit-scrollbar{width:4px;}
::-webkit-scrollbar-track{background:var(--bg2);}
::-webkit-scrollbar-thumb{background:rgba(193,156,60,.4);border-radius:2px;}

@keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes slideD{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:none}}
@keyframes barFill{from{width:0}}
@keyframes pulse{0%,100%{opacity:.45;transform:scale(.96)}50%{opacity:1;transform:scale(1.04)}}

.gt{background:linear-gradient(135deg,#8B6010 0%,#C9A84C 40%,#E8C96D 65%,#A07828 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.lang-btn{background:rgba(201,168,76,.05);border:1.5px solid rgba(193,156,60,.18);border-radius:10px;padding:8px 10px;cursor:pointer;display:flex;align-items:center;gap:8px;font-size:11px;color:rgba(44,26,6,.65);font-family:'Josefin Sans',sans-serif;font-weight:400;transition:all .15s;text-align:left;}
.lang-btn.on{background:rgba(201,168,76,.18);border-color:rgba(160,120,40,.5);color:#8B6010;font-weight:700;}
.lang-btn:hover{background:rgba(201,168,76,.14);border-color:rgba(160,120,40,.5);}

/* ===== TOP TRUST BAR ===== */
.tp-topbar{position:fixed;top:0;left:0;right:0;z-index:1000;height:38px;background:var(--dark);display:flex;align-items:center;padding:0 clamp(14px,4vw,44px);gap:24px;}
.tp-tb-stat{display:flex;align-items:center;gap:6px;font-family:'Josefin Sans',sans-serif;font-size:10.5px;color:rgba(250,246,237,.78);letter-spacing:.3px;white-space:nowrap;}
.tp-tb-stat b{color:#E8C96D;font-weight:700;}
.tp-tb-right{margin-left:auto;display:flex;align-items:center;gap:16px;}
.tp-tb-item{position:relative;display:flex;align-items:center;gap:6px;font-family:'Josefin Sans',sans-serif;font-size:10.5px;color:rgba(250,246,237,.82);background:none;border:none;cursor:pointer;letter-spacing:.3px;white-space:nowrap;}
.tp-tb-item:hover{color:#E8C96D;}
.tp-tb-sep{width:1px;height:13px;background:rgba(250,246,237,.18);}
.tp-lang-pop,.tp-cur-pop{position:absolute;top:calc(100% + 10px);right:0;background:linear-gradient(145deg,#FAF6ED,#F3ECD8);border:1.5px solid rgba(193,156,60,.35);border-radius:14px;padding:12px;z-index:2000;box-shadow:0 24px 60px rgba(0,0,0,.35);animation:slideD .18s ease;min-width:230px;max-height:360px;overflow-y:auto;}
.tp-lang-pop-h{font-size:9px;color:#A07828;letter-spacing:3px;text-transform:uppercase;margin-bottom:10px;font-weight:700;font-family:'Josefin Sans',sans-serif;padding:0 4px;}
.tp-lang-pop-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;}
.tp-lang-pop-foot{margin-top:10px;padding-top:8px;border-top:1px solid rgba(193,156,60,.18);font-size:8px;letter-spacing:1px;color:#9C7A3C;text-align:center;text-transform:uppercase;}
.tp-cur-pop{min-width:200px;padding:6px;}
.tp-cur-row{padding:9px 14px;cursor:pointer;font-size:11px;color:rgba(44,26,6,.6);font-family:'Josefin Sans',sans-serif;border-radius:8px;transition:background .15s;}
.tp-cur-row:hover{background:rgba(201,168,76,.12);}
.tp-cur-row.on{color:#A07828;font-weight:700;background:rgba(201,168,76,.1);}

/* ===== MAIN NAV ===== */
.tp-nav{position:fixed;top:38px;left:0;right:0;z-index:990;height:70px;display:flex;align-items:center;padding:0 clamp(14px,4vw,44px);gap:30px;background:rgba(250,246,237,.99);backdrop-filter:blur(22px);border-bottom:1px solid rgba(193,156,60,.22);box-shadow:0 4px 24px rgba(180,140,60,.08);}
.tp-brand{display:flex;align-items:center;gap:10px;cursor:pointer;text-decoration:none;}
.tp-brand-txt{display:flex;flex-direction:column;line-height:1.05;}
.tp-brand-name{font-family:'Cinzel',serif;font-size:16px;font-weight:700;letter-spacing:.14em;}
.tp-brand-sub{font-family:'Cinzel',serif;font-size:9px;font-weight:600;letter-spacing:.32em;color:#8B6010;}
.tp-brand-tag{font-family:'Josefin Sans',sans-serif;font-size:6.6px;letter-spacing:.22em;color:#9C7A3C;text-transform:uppercase;margin-top:2px;}
.tp-menu{display:flex;align-items:center;gap:6px;}
.tp-menu-item{position:relative;}
.tp-menu-link{display:flex;align-items:center;gap:4px;background:none;border:none;cursor:pointer;font-family:'Josefin Sans',sans-serif;font-size:12.5px;color:#2C1A06;padding:9px 12px;border-radius:8px;text-decoration:none;transition:all .15s;white-space:nowrap;}
.tp-menu-link:hover{background:rgba(201,168,76,.1);color:#A07828;}
.tp-menu-caret{font-size:8px;opacity:.65;margin-top:1px;}
.tp-menu-drop{position:absolute;top:calc(100% + 6px);left:0;background:linear-gradient(145deg,#FAF6ED,#F3ECD8);border:1.5px solid rgba(193,156,60,.3);border-radius:12px;padding:8px;min-width:190px;box-shadow:0 20px 50px rgba(0,0,0,.16);z-index:1500;animation:slideD .16s ease;}
.tp-menu-drop a{display:block;padding:9px 12px;border-radius:8px;font-family:'Josefin Sans',sans-serif;font-size:12px;color:rgba(44,26,6,.72);text-decoration:none;transition:background .15s;}
.tp-menu-drop a:hover{background:rgba(201,168,76,.12);color:#A07828;}
.tp-nav-acts{margin-left:auto;display:flex;align-items:center;gap:10px;}
.tp-icon-btn{width:38px;height:38px;border-radius:9px;background:rgba(201,168,76,.08);border:1.5px solid rgba(193,156,60,.25);color:#A07828;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:15px;transition:all .2s;}
.tp-icon-btn:hover{background:rgba(201,168,76,.16);}
.btn-gold{background:linear-gradient(135deg,#A07828,#C9A84C,#E8C96D);color:#FAF6ED;border:none;border-radius:10px;padding:12px 24px;cursor:pointer;font-weight:700;font-size:10.5px;letter-spacing:2.2px;text-transform:uppercase;font-family:'Josefin Sans',sans-serif;box-shadow:0 6px 22px rgba(160,120,40,.32);transition:all .25s;white-space:nowrap;}
.btn-gold:hover{box-shadow:0 10px 32px rgba(160,120,40,.5);transform:translateY(-1px);}
.btn-ghost-dark{background:transparent;border:1.5px solid rgba(250,246,237,.35);color:#FAF6ED;border-radius:9px;padding:11px 22px;cursor:pointer;font-size:10px;letter-spacing:2px;text-transform:uppercase;font-family:'Josefin Sans',sans-serif;transition:all .2s;white-space:nowrap;}
.tp-mobile-toggle{display:none;background:rgba(201,168,76,.1);border:1.5px solid rgba(193,156,60,.3);color:#A07828;width:38px;height:38px;border-radius:9px;cursor:pointer;font-size:16px;align-items:center;justify-content:center;}
.tp-mobile-drawer{position:fixed;top:108px;left:0;right:0;bottom:0;background:rgba(250,246,237,.99);backdrop-filter:blur(20px);z-index:985;padding:20px clamp(14px,5vw,32px);overflow-y:auto;animation:slideD .2s ease;}
.tp-mobile-link{display:block;padding:14px 6px;border-bottom:1px solid rgba(193,156,60,.16);font-family:'Cinzel',serif;font-size:14px;color:#2C1A06;text-decoration:none;}

/* ===== BREADCRUMB ===== */
.tp-crumb{margin-top:var(--header-h);padding:11px clamp(14px,4vw,44px);background:rgba(250,246,237,1);border-bottom:1px solid rgba(193,156,60,.16);display:flex;align-items:center;gap:8px;font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:1px;color:#9C7A3C;flex-wrap:wrap;}
.tp-crumb a{color:inherit;text-decoration:none;transition:color .2s;}
.tp-crumb a:hover{color:#A07828;}
.tp-crumb .cur{color:#A07828;font-weight:700;}

/* ===== HERO ===== */
.tp-hero-wrap{padding:30px clamp(14px,4vw,44px) 0;max-width:1440px;margin:0 auto;}
.tp-hero-grid{display:grid;grid-template-columns:1fr 380px;gap:32px;align-items:start;}
.tp-hero-banner{position:relative;border-radius:18px;overflow:hidden;min-height:300px;display:flex;flex-direction:column;justify-content:flex-end;padding:26px 30px;background-size:cover;background-position:center;transition:background-image .6s ease;}
.tp-hero-banner::before{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(20,12,4,.92) 0%,rgba(20,12,4,.62) 45%,rgba(20,12,4,.2) 75%,rgba(20,12,4,.08) 100%);}
.tp-hero-badge{position:relative;z-index:2;align-self:flex-start;background:linear-gradient(135deg,#C9A84C,#E8C96D);color:#2C1A06;font-family:'Josefin Sans',sans-serif;font-size:9.5px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:6px 14px;border-radius:6px;margin-bottom:auto;}
.tp-htitle{position:relative;z-index:2;font-family:'Cinzel',serif;font-size:clamp(26px,3.6vw,42px);font-weight:700;color:#FFF7E0;line-height:1.1;margin-bottom:6px;text-shadow:0 4px 24px rgba(0,0,0,.4);}
.tp-htagline{position:relative;z-index:2;font-family:'Cormorant Garamond',serif;font-size:clamp(14px,1.6vw,18px);color:rgba(250,246,237,.85);font-weight:400;margin-bottom:16px;}
.tp-hfacts{position:relative;z-index:2;display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:14px;}
.tp-hfact{display:flex;align-items:center;gap:6px;font-family:'Josefin Sans',sans-serif;font-size:11.5px;color:rgba(250,246,237,.92);}
.tp-hfact-sep{width:3px;height:3px;border-radius:50%;background:rgba(250,246,237,.45);}
.tp-hrating{position:relative;z-index:2;display:flex;align-items:center;gap:8px;}
.tp-hstars{color:#E8C96D;font-size:14px;letter-spacing:1px;}
.tp-hscore{font-family:'Cinzel',serif;font-size:15px;color:#FFF7E0;font-weight:700;}
.tp-hcount{font-family:'Cormorant Garamond',serif;font-size:13.5px;color:rgba(250,246,237,.72);}

.tp-hero-info{background:var(--card);border:1px solid var(--cardb);border-top:none;border-radius:0 0 18px 18px;padding:22px 30px 26px;margin-top:-1px;}
.tp-hero-desc{font-family:'Cormorant Garamond',serif;font-size:15.5px;color:var(--mid);line-height:1.7;margin-bottom:18px;}
.tp-trustrow{display:flex;flex-wrap:wrap;gap:22px;margin-bottom:20px;}
.tp-trust{display:flex;align-items:center;gap:10px;}
.tp-trust-ic{width:34px;height:34px;border-radius:9px;background:rgba(201,168,76,.12);border:1px solid rgba(193,156,60,.25);display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0;}
.tp-trust-l{font-family:'Josefin Sans',sans-serif;font-size:11px;color:#2C1A06;font-weight:600;line-height:1.3;}
.tp-trust-s{font-family:'Cormorant Garamond',serif;font-size:11.5px;color:#9C7A3C;}
.tp-photostrip{display:grid;grid-template-columns:repeat(6,1fr);gap:8px;}
.tp-pthumb{position:relative;border-radius:9px;overflow:hidden;aspect-ratio:4/3;cursor:pointer;border:2px solid transparent;transition:border-color .2s;}
.tp-pthumb.on{border-color:#C9A84C;}
.tp-pthumb img{width:100%;height:100%;object-fit:cover;display:block;}
.tp-pthumb-more{position:absolute;inset:0;background:rgba(20,12,4,.66);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#FFF7E0;font-family:'Josefin Sans',sans-serif;font-size:9px;letter-spacing:1px;text-transform:uppercase;}
.tp-pthumb-more b{font-size:15px;letter-spacing:0;margin-bottom:1px;}

/* ===== BOOKING WIDGET ===== */
.tp-widget{position:sticky;top:128px;background:var(--card);border:1.5px solid var(--cardb);border-radius:18px;padding:24px;box-shadow:0 20px 56px rgba(150,110,40,.14);}
.tp-wfrom{font-family:'Josefin Sans',sans-serif;font-size:9px;letter-spacing:2.5px;color:#9C7A3C;text-transform:uppercase;font-weight:700;margin-bottom:4px;}
.tp-wprice-row{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;}
.tp-wprice{font-family:'Cinzel',serif;font-size:36px;color:#2C1A06;font-weight:800;}
.tp-wpp{font-family:'Cormorant Garamond',serif;font-size:14px;color:#9C7A3C;}
.tp-wold{font-family:'Cormorant Garamond',serif;font-size:13px;color:#B5453F;text-decoration:line-through;}
.tp-wsave{background:rgba(60,153,104,.12);color:var(--green);font-family:'Josefin Sans',sans-serif;font-size:8px;font-weight:700;letter-spacing:1px;padding:3px 8px;border-radius:5px;text-transform:uppercase;}
.tp-wbest{display:flex;align-items:center;gap:6px;font-family:'Josefin Sans',sans-serif;font-size:10.5px;color:#9C7A3C;margin:8px 0 18px;}
.tp-wdiv{height:1px;background:rgba(193,156,60,.2);margin:0 0 18px;}
.tp-wf{margin-bottom:14px;}
.tp-wfl{font-family:'Josefin Sans',sans-serif;font-size:9.5px;letter-spacing:1.6px;color:#A07828;text-transform:uppercase;margin-bottom:7px;font-weight:700;}
.tp-wfi{width:100%;background:#fff;border:1.5px solid rgba(193,156,60,.28);border-radius:10px;color:#2C1A06;padding:12px 14px;font-family:'Cormorant Garamond',serif;font-size:15px;outline:none;transition:border-color .2s;color-scheme:light;}
.tp-wfi:focus{border-color:rgba(160,120,40,.6);box-shadow:0 0 0 3px rgba(201,168,76,.12);}
.tp-stepper{display:flex;align-items:center;justify-content:space-between;background:#fff;border:1.5px solid rgba(193,156,60,.28);border-radius:10px;padding:6px 8px;}
.tp-stepper-btn{width:32px;height:32px;border-radius:8px;background:rgba(201,168,76,.12);border:1px solid rgba(193,156,60,.3);color:#A07828;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:700;}
.tp-stepper-btn:disabled{opacity:.35;cursor:not-allowed;}
.tp-stepper-val{font-family:'Cormorant Garamond',serif;font-size:15px;color:#2C1A06;}
.tp-bookbtn{width:100%;background:linear-gradient(135deg,#A07828,#C9A84C,#E8C96D);color:#FAF6ED;border:none;border-radius:11px;padding:15px;font-family:'Josefin Sans',sans-serif;font-weight:700;font-size:11px;letter-spacing:2.2px;text-transform:uppercase;cursor:pointer;margin-top:6px;margin-bottom:10px;box-shadow:0 8px 24px rgba(160,120,40,.32);transition:all .25s;}
.tp-bookbtn:hover{box-shadow:0 12px 32px rgba(160,120,40,.46);transform:translateY(-1px);}
.tp-wabtn{width:100%;background:#fff;color:var(--green);border:1.5px solid rgba(60,153,104,.4);border-radius:11px;padding:13px;font-family:'Josefin Sans',sans-serif;font-weight:700;font-size:10.5px;letter-spacing:1.8px;text-transform:uppercase;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;transition:all .2s;}
.tp-wabtn:hover{background:rgba(60,153,104,.08);}
.tp-wsecure{display:flex;align-items:center;justify-content:space-between;margin-top:18px;padding-top:16px;border-top:1px solid rgba(193,156,60,.18);}
.tp-wsecure-l{font-family:'Josefin Sans',sans-serif;font-size:9px;color:#9C7A3C;letter-spacing:.5px;}
.tp-wcards{display:flex;gap:6px;}
.tp-wcards span{font-size:9px;font-family:'Josefin Sans',sans-serif;font-weight:700;background:#fff;border:1px solid rgba(193,156,60,.25);border-radius:4px;padding:3px 6px;color:#6B4E1A;}

/* ===== TABS ===== */
.tp-tabs-wrap{position:sticky;top:var(--header-h);z-index:60;background:var(--bg);padding:18px clamp(14px,4vw,44px) 0;max-width:1440px;margin:0 auto;}
.tp-tabs{display:flex;align-items:center;gap:4px;background:var(--bg2);border-radius:13px;padding:5px;overflow-x:auto;}
.tp-tab{flex:1;display:flex;align-items:center;justify-content:center;gap:7px;background:transparent;border:none;border-radius:9px;color:#8B6010;font-family:'Josefin Sans',sans-serif;font-size:11.5px;font-weight:600;padding:11px 14px;cursor:pointer;white-space:nowrap;transition:all .18s;}
.tp-tab.on{background:#fff;color:#2C1A06;box-shadow:0 4px 14px rgba(150,110,40,.18);}

/* ===== BODY ===== */
.tp-body{display:grid;grid-template-columns:1fr 300px;gap:40px;padding:36px clamp(14px,4vw,44px) 60px;max-width:1440px;margin:0 auto;align-items:start;}
.tp-sec-title{font-family:'Cinzel',serif;font-size:22px;color:#2C1A06;font-weight:700;margin-bottom:14px;}
.tp-sec-head-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:8px;}
.tp-view-all{font-family:'Josefin Sans',sans-serif;font-size:11px;color:#A07828;font-weight:700;letter-spacing:.4px;text-decoration:none;background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:4px;}
.tp-view-all:hover{color:#8B6010;}
.tp-ov-text{font-family:'Cormorant Garamond',serif;font-size:16px;color:var(--mid);line-height:1.8;margin-bottom:24px;}
.tp-ovcards{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:8px;}
.tp-ovcard{flex:1;min-width:140px;background:var(--card);border:1.5px solid var(--cardb);border-radius:13px;padding:16px 14px;text-align:center;transition:all .2s;}
.tp-ovcard:hover{border-color:rgba(160,120,40,.45);box-shadow:0 8px 22px rgba(180,140,60,.1);}
.tp-ovcard-ic{font-size:21px;margin-bottom:8px;}
.tp-ovcard-l{font-family:'Josefin Sans',sans-serif;font-size:11px;color:#2C1A06;line-height:1.35;font-weight:600;}

.tp-section{margin-top:44px;}
.tp-mid-grid{display:grid;grid-template-columns:1.55fr 1fr;gap:32px;align-items:start;}

.tp-itin{display:flex;flex-direction:column;}
.tp-step{display:flex;gap:16px;padding-bottom:26px;position:relative;}
.tp-step-left{display:flex;flex-direction:column;align-items:center;width:42px;flex-shrink:0;}
.tp-step-marker{width:42px;height:42px;border-radius:50%;background:rgba(201,168,76,.12);border:2px solid #C9A84C;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;}
.tp-step-line{width:1px;flex:1;background:linear-gradient(to bottom,rgba(193,156,60,.35),transparent);margin-top:6px;}
.tp-step-cnt{flex:1;display:flex;gap:16px;padding-top:3px;}
.tp-step-txt{flex:1;}
.tp-step-time{font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:1px;color:#A07828;text-transform:uppercase;margin-bottom:5px;font-weight:700;}
.tp-step-title{font-family:'Cinzel',serif;font-size:14.5px;color:#2C1A06;font-weight:600;margin-bottom:6px;}
.tp-step-desc{font-family:'Cormorant Garamond',serif;font-size:15px;color:#6B4E1A;line-height:1.6;}
.tp-step-img{width:88px;height:68px;border-radius:10px;overflow:hidden;flex-shrink:0;}
.tp-step-img img{width:100%;height:100%;object-fit:cover;display:block;}
.tp-notice{display:flex;gap:10px;align-items:flex-start;background:rgba(201,168,76,.1);border:1px solid rgba(193,156,60,.25);border-radius:11px;padding:14px 16px;margin-top:6px;font-family:'Cormorant Garamond',serif;font-size:14px;color:#8B6010;}

.tp-stackcard{background:var(--card);border:1.5px solid var(--cardb);border-radius:15px;padding:20px 22px;margin-bottom:18px;}
.tp-stack-h{font-family:'Cinzel',serif;font-size:14.5px;color:#2C1A06;font-weight:700;margin-bottom:13px;}
.tp-stack-list{display:flex;flex-direction:column;gap:10px;}
.tp-stack-row{display:flex;align-items:flex-start;gap:9px;font-family:'Cormorant Garamond',serif;font-size:14.5px;color:var(--mid);line-height:1.45;}
.tp-stack-ic{flex-shrink:0;font-size:12px;margin-top:2px;}
.tp-stack-ic.ok{color:var(--green);}
.tp-stack-ic.no{color:var(--red);}
.tp-stack-ic.info{color:#A07828;}

.tp-revsum{display:flex;gap:20px;align-items:center;background:var(--card);border:1.5px solid var(--cardb);border-radius:16px;padding:22px;margin-bottom:22px;flex-wrap:wrap;}
.tp-rbig{font-family:'Cinzel',serif;font-size:42px;color:#A07828;font-weight:800;line-height:1;}
.tp-rof{font-family:'Josefin Sans',sans-serif;font-size:9px;letter-spacing:1.5px;color:#9C7A3C;text-transform:uppercase;margin-top:2px;}
.tp-rbig-stars{color:#C9A84C;font-size:14px;letter-spacing:1px;margin-top:6px;}
.tp-rtotal{font-family:'Cormorant Garamond',serif;font-size:12px;color:#9C7A3C;font-style:italic;}
.tp-rbars{flex:1;display:flex;flex-direction:column;gap:8px;min-width:180px;}
.tp-rbar-row{display:flex;align-items:center;gap:10px;}
.tp-rbar-l{font-family:'Josefin Sans',sans-serif;font-size:9px;letter-spacing:.5px;color:#9C7A3C;min-width:96px;}
.tp-rbar-track{flex:1;height:5px;background:rgba(160,120,40,.1);border-radius:3px;overflow:hidden;}
.tp-rbar-fill{height:100%;border-radius:3px;background:linear-gradient(to right,#C9A84C,#E8C96D);animation:barFill 1s ease both;}
.tp-rbar-pct{font-family:'Josefin Sans',sans-serif;font-size:9px;color:#A07828;min-width:30px;text-align:right;}

.tp-revrow{position:relative;display:flex;align-items:stretch;gap:14px;}
.tp-revtrack{flex:1;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;overflow:hidden;}
.tp-revc{background:var(--card);border:1.5px solid var(--cardb);border-radius:14px;padding:18px;}
.tp-rev-head{display:flex;align-items:center;gap:10px;margin-bottom:10px;}
.tp-rev-av{width:38px;height:38px;border-radius:50%;border:1px solid rgba(193,156,60,.3);background:rgba(201,168,76,.12);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;}
.tp-rev-name{font-family:'Cinzel',serif;font-size:11px;color:#2C1A06;font-weight:600;}
.tp-rev-loc{font-family:'Cormorant Garamond',serif;font-size:11.5px;color:#9C7A3C;font-style:italic;}
.tp-rev-stars{color:#C9A84C;font-size:10.5px;letter-spacing:1px;margin-bottom:3px;}
.tp-rev-date{font-family:'Josefin Sans',sans-serif;font-size:8px;color:#9C7A3C;text-transform:uppercase;margin-left:auto;white-space:nowrap;}
.tp-rev-txt{font-family:'Cormorant Garamond',serif;font-size:14px;color:#6B4E1A;line-height:1.55;margin-bottom:12px;}
.tp-rev-photos{display:flex;gap:6px;}
.tp-rev-photo{width:46px;height:36px;border-radius:7px;overflow:hidden;}
.tp-rev-photo img{width:100%;height:100%;object-fit:cover;display:block;}
.tp-rev-arrow{width:34px;height:34px;border-radius:50%;border:1.5px solid rgba(193,156,60,.32);background:#fff;color:#A07828;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;align-self:center;}
.tp-rev-arrow:disabled{opacity:.3;cursor:not-allowed;}

.tp-faqgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;}
.tp-faqitem{background:var(--card);border:1.5px solid var(--cardb);border-radius:13px;overflow:hidden;}
.tp-faqq{width:100%;display:flex;align-items:center;justify-content:space-between;gap:10px;background:none;border:none;padding:16px 18px;cursor:pointer;font-family:'Josefin Sans',sans-serif;font-size:12.5px;color:#2C1A06;font-weight:600;text-align:left;}
.tp-faqchev{font-size:11px;color:#A07828;transition:transform .2s;flex-shrink:0;}
.tp-faqitem.open .tp-faqchev{transform:rotate(180deg);}
.tp-faqa{padding:0 18px;font-family:'Cormorant Garamond',serif;font-size:14px;color:var(--mid);line-height:1.6;max-height:0;overflow:hidden;transition:all .25s ease;}
.tp-faqitem.open .tp-faqa{max-height:220px;padding-bottom:16px;}

/* ===== SIDEBAR ===== */
.tp-side{display:flex;flex-direction:column;gap:18px;position:sticky;top:128px;}
.tp-side-card{background:var(--card);border:1.5px solid var(--cardb);border-radius:15px;padding:20px;}
.tp-side-h{font-family:'Cinzel',serif;font-size:13.5px;color:#2C1A06;font-weight:700;margin-bottom:13px;}
.tp-hl-list{display:flex;flex-direction:column;gap:10px;}
.tp-hl-row{display:flex;align-items:flex-start;gap:9px;font-family:'Cormorant Garamond',serif;font-size:13.5px;color:var(--mid);line-height:1.4;}
.tp-hl-ic{flex-shrink:0;color:#A07828;font-size:11px;margin-top:3px;}
.tp-custom-txt{font-family:'Cormorant Garamond',serif;font-size:13.5px;color:var(--mid);line-height:1.55;margin-bottom:14px;}
.tp-rev-mini{display:flex;align-items:center;gap:12px;margin-bottom:14px;}
.tp-rev-mini-big{font-family:'Cinzel',serif;font-size:30px;color:#A07828;font-weight:800;}
.tp-rev-mini-txt{display:flex;flex-direction:column;}
.tp-rev-mini-l{font-family:'Josefin Sans',sans-serif;font-size:10px;color:#3C9968;font-weight:700;text-transform:uppercase;}
.tp-rev-mini-stars{color:#C9A84C;font-size:11px;}
.tp-rev-mini-cnt{font-family:'Cormorant Garamond',serif;font-size:11px;color:#9C7A3C;}
.tp-mini-quote{background:#fff;border:1px solid var(--cardb);border-radius:11px;padding:13px;margin-bottom:10px;}
.tp-route-map{position:relative;height:140px;border-radius:12px;background:linear-gradient(135deg,#F3ECD8,#E9DEC0);overflow:hidden;margin-bottom:12px;border:1px solid var(--cardb);}
.tp-route-pin{position:absolute;display:flex;align-items:center;gap:4px;font-family:'Josefin Sans',sans-serif;font-size:8.5px;color:#6B4E1A;font-weight:700;background:rgba(255,255,255,.88);border-radius:5px;padding:3px 6px;white-space:nowrap;}
.tp-protect-list{display:flex;flex-direction:column;gap:11px;}
.tp-protect-row{display:flex;align-items:center;gap:9px;font-family:'Cormorant Garamond',serif;font-size:13px;color:var(--mid);}

/* ===== CTA BAND ===== */
.tp-cta{background:var(--dark);padding:46px clamp(14px,4vw,44px);display:flex;align-items:center;justify-content:space-between;gap:30px;flex-wrap:wrap;}
.tp-cta-h{font-family:'Cinzel',serif;font-size:clamp(20px,2.6vw,28px);color:#FFF7E0;font-weight:700;margin-bottom:6px;}
.tp-cta-s{font-family:'Cormorant Garamond',serif;font-size:14.5px;color:rgba(250,246,237,.65);}
.tp-cta-mid{display:flex;gap:30px;flex-wrap:wrap;}
.tp-cta-item{display:flex;align-items:center;gap:9px;}
.tp-cta-ic{font-size:18px;}
.tp-cta-it{display:flex;flex-direction:column;}
.tp-cta-it b{font-family:'Josefin Sans',sans-serif;font-size:11.5px;color:#FFF7E0;font-weight:700;}
.tp-cta-it span{font-family:'Cormorant Garamond',serif;font-size:11.5px;color:rgba(250,246,237,.55);}
.tp-cta-btns{display:flex;gap:10px;}

/* ===== FOOTER ===== */
.tp-footer{background:#15100A;padding:54px clamp(14px,4vw,44px) 0;}
.tp-footer-top{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr 1fr 1.1fr;gap:32px;max-width:1440px;margin:0 auto;padding-bottom:40px;}
.tp-footer-desc{font-family:'Cormorant Garamond',serif;font-size:13.5px;color:rgba(250,246,237,.55);line-height:1.6;margin:14px 0 16px;}
.tp-footer-soc{display:flex;gap:8px;}
.tp-footer-soc a{width:32px;height:32px;border-radius:8px;background:rgba(201,168,76,.12);border:1px solid rgba(193,156,60,.25);display:flex;align-items:center;justify-content:center;font-size:14px;text-decoration:none;color:#E8C96D;}
.tp-footer-h{font-family:'Josefin Sans',sans-serif;font-size:11px;letter-spacing:1.6px;color:#E8C96D;text-transform:uppercase;font-weight:700;margin-bottom:16px;}
.tp-footer-col a,.tp-footer-col .fc-line{display:block;font-family:'Cormorant Garamond',serif;font-size:13.5px;color:rgba(250,246,237,.62);text-decoration:none;margin-bottom:10px;line-height:1.4;}
.tp-footer-col a:hover{color:#E8C96D;}
.tp-footer-wabtn{display:inline-flex;align-items:center;gap:7px;background:#25D366;color:#fff;border-radius:9px;padding:9px 16px;font-family:'Josefin Sans',sans-serif;font-size:10.5px;font-weight:700;text-decoration:none;margin-top:6px;}
.tp-footer-bottom{border-top:1px solid rgba(250,246,237,.1);padding:20px clamp(14px,4vw,44px);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px;max-width:1440px;margin:0 auto;}
.tp-footer-copy{font-family:'Josefin Sans',sans-serif;font-size:10.5px;color:rgba(250,246,237,.45);}
.tp-pay-icons{display:flex;gap:6px;}
.tp-pay-icons span{font-size:9px;font-family:'Josefin Sans',sans-serif;font-weight:700;background:rgba(250,246,237,.08);border-radius:4px;padding:4px 8px;color:rgba(250,246,237,.65);}

.tp-loader{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:var(--bg);gap:18px;}
.tp-loader-hiero{font-size:48px;color:#C9A84C;animation:pulse 1.6s ease-in-out infinite;}
.tp-loader-txt{font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:4px;color:#9C7A3C;text-transform:uppercase;}

@media(max-width:1080px){
  .tp-hero-grid{grid-template-columns:1fr;}
  .tp-widget{position:static;}
  .tp-body{grid-template-columns:1fr;}
  .tp-side{position:static;}
  .tp-mid-grid{grid-template-columns:1fr;}
  .tp-footer-top{grid-template-columns:1fr 1fr 1fr;}
  .dn{display:none!important;}
  .dm{display:flex!important;}
  .tp-mobile-toggle{display:flex!important;}
}
@media(max-width:760px){
  .tp-revtrack{grid-template-columns:1fr;}
  .tp-photostrip{grid-template-columns:repeat(3,1fr);}
  .tp-faqgrid{grid-template-columns:1fr;}
  .tp-footer-top{grid-template-columns:1fr 1fr;}
  .tp-cta{flex-direction:column;align-items:flex-start;}
  .tp-step-cnt{flex-direction:column;}
  .tp-step-img{width:100%;height:120px;}
  .tp-topbar{overflow-x:auto;}
}
`}</style>
);

// ─── BOOKING WIDGET ────────────────────────────────────────────
function BookingWidget({tour, onBook, formatPrice}){
  const navigate = useNavigate();
  const [adults,setAdults] = useState(2);
  const [date,setDate] = useState("");

  const price = tour.price?.discounted || tour.price?.original || 0;
  const originalPrice = tour.price?.original || 0;
  const total = adults * price;
  const savePercent = tour.price?.discounted ? Math.round((1-price/originalPrice)*100) : 0;

  const waMsg = encodeURIComponent(`Hi! I'd like to book "${tour.title}"\nDate: ${date||"TBD"}\nTravellers: ${adults} adult(s)\nTotal: ${formatPrice(total)}`);

  return(
    <div className="tp-widget">
      <div className="tp-wfrom">From</div>
      <div className="tp-wprice-row">
        <span className="tp-wprice">{formatPrice(price)}</span>
        <span className="tp-wpp">/person</span>
        {tour.price?.discounted && <><span className="tp-wold">{formatPrice(originalPrice)}</span><span className="tp-wsave">Save {savePercent}%</span></>}
      </div>
      <div className="tp-wbest"><span>🛡️</span> Best Price Guarantee</div>
      <div className="tp-wdiv"/>
      <div className="tp-wf">
        <div className="tp-wfl">Select Date</div>
        <input type="date" className="tp-wfi" value={date} min={new Date().toISOString().split("T")[0]} onChange={e=>setDate(e.target.value)} placeholder="Select your date"/>
      </div>
      <div className="tp-wf">
        <div className="tp-wfl">Travelers</div>
        <div className="tp-stepper">
          <button className="tp-stepper-btn" onClick={()=>setAdults(a=>Math.max(1,a-1))} disabled={adults<=1}>−</button>
          <span className="tp-stepper-val">{adults} Adult{adults>1?"s":""}</span>
          <button className="tp-stepper-btn" onClick={()=>setAdults(a=>Math.min(20,a+1))}>+</button>
        </div>
      </div>
      <button id="tp-main-book-btn" className="tp-bookbtn" onClick={()=>onBook({adults,date,total})}>Check Availability</button>
      <a href={`${WA_BASE}?text=${waMsg}`} target="_blank" rel="noreferrer" className="tp-wabtn">💬 Book on WhatsApp</a>
      <div className="tp-wsecure">
        <span className="tp-wsecure-l">Secure Payment</span>
        <div className="tp-wcards"><span>VISA</span><span>MC</span><span>PayPal</span></div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════
export default function TourPage(){
  const {tourId} = useParams();
  const navigate = useNavigate();
  const {language:globalLang, currency:globalCur, setLanguage:setGlobalLang, setCurrency:setGlobalCur, formatPrice} = useGlobal();

  const [tour,setTour] = useState(null);
  const [loading,setLoading] = useState(true);
  const [heroImg,setHeroImg] = useState(0);
  const [activeTab,setActiveTab] = useState("overview");
  const [fav,setFav] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const [mMenu,setMMenu] = useState(false);
  const [langOpen,setLangOpen] = useState(false);
  const [curOpen,setCurOpen] = useState(false);
  const [navDrop,setNavDrop] = useState(null);
  const [uiLang,setUiLang] = useState(globalLang||"en");
  const [cur,setCur] = useState(globalCur||"USD");
  const [openFaq,setOpenFaq] = useState(0);
  const [revStart,setRevStart] = useState(0);

  const refOverview = useRef(null);
  const refItinerary = useRef(null);
  const refIncludes = useRef(null);
  const refGoodToKnow = useRef(null);
  const refReviews = useRef(null);
  const refFaq = useRef(null);
  const refMap = {overview:refOverview, itinerary:refItinerary, includes:refIncludes, goodtoknow:refGoodToKnow, reviews:refReviews, faq:refFaq};

  const fmtP = p => formatPrice ? formatPrice(p) : fmt(p,cur);

  // Only Google Translate ever changes on-page wording — there is
  // no manual translation dictionary anywhere in this component.
  const handleLangSelect = useCallback((lang)=>{
    setUiLang(lang.code);
    if(setGlobalLang) setGlobalLang(lang.code);
    document.documentElement.setAttribute("lang",lang.code);
    document.documentElement.setAttribute("dir",lang.dir||"ltr");
    try{
      const selectEl = document.querySelector(".goog-te-combo");
      if(selectEl){
        selectEl.value = lang.gt === "en" ? "" : lang.gt;
        selectEl.dispatchEvent(new Event("change"));
      }
    }catch(e){}
  },[setGlobalLang]);

  const setCurrencyVal = (code)=>{ setCur(code); if(setGlobalCur) setGlobalCur(code); };

  useEffect(()=>{
    if(!document.getElementById("gt-script")){
      window.googleTranslateElementInit=()=>{
        new window.google.translate.TranslateElement({pageLanguage:"en",includedLanguages:"en,fr,es,de,it,pt,ru,zh-CN,ja,nl,tr,ko,ar",autoDisplay:false},"gt-hidden");
      };
      const s=document.createElement("script");
      s.id="gt-script"; s.src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"; s.async=true;
      document.head.appendChild(s);
    }
  },[]);
  useEffect(()=>{ if(globalLang) setUiLang(globalLang); },[globalLang]);
  useEffect(()=>{ if(globalCur) setCur(globalCur); },[globalCur]);

  useEffect(() => {
    setLoading(true);
    getTourById(tourId).then(data=>{setTour(data);setLoading(false);}).catch(()=>setLoading(false));
  }, [tourId]);

  useEffect(() => { window.scrollTo({top:0,behavior:"auto"}); }, [tourId]);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY>20);
      const offset = 200;
      let current = "overview";
      Object.entries(refMap).forEach(([id,ref])=>{
        if(ref.current && ref.current.getBoundingClientRect().top - offset <= 0) current = id;
      });
      setActiveTab(current);
    };
    window.addEventListener("scroll", fn, {passive:true});
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn=(e)=>{
      if(!e.target.closest(".tp-tb-item")) { setLangOpen(false); setCurOpen(false); }
      if(!e.target.closest(".tp-menu-item")) setNavDrop(null);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  useEffect(() => {
    const imgs = getImages(tour);
    if(!imgs?.length) return;
    const id = setInterval(()=>setHeroImg(i=>(i+1)%imgs.length),6000);
    return ()=>clearInterval(id);
  }, [tour]);

  const goTab = (id) => {
    setActiveTab(id);
    setMMenu(false);
    const ref = refMap[id];
    if(ref?.current){
      const y = ref.current.getBoundingClientRect().top + window.scrollY - 168;
      window.scrollTo({top:y, behavior:"smooth"});
    }
  };

  const currentLangObj = LANGS.find(l=>l.code===uiLang) || LANGS[0];

  if(loading) return (
    <div className="tp-loader">
      <GlobalStyles/>
      <div className="tp-loader-hiero">𓂀</div>
      <div className="tp-loader-txt">Loading Experience...</div>
    </div>
  );

  if(!tour) return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"#FAF6ED",gap:20}}>
      <GlobalStyles/>
      <div style={{fontFamily:"'Cinzel',serif",fontSize:52,color:"#C9A84C"}}>𓂀</div>
      <div style={{fontFamily:"'Josefin Sans',sans-serif",fontSize:13,letterSpacing:3,color:"#2C1A06"}}>TOUR NOT FOUND</div>
      <button onClick={()=>navigate("/")} style={{background:"rgba(201,168,76,.1)",border:"1px solid rgba(193,156,60,.3)",color:"#A07828",borderRadius:8,padding:"10px 24px",fontFamily:"'Josefin Sans',sans-serif",fontSize:10,letterSpacing:2,cursor:"pointer",textTransform:"uppercase",fontWeight:700}}>← Return Home</button>
    </div>
  );

  const images = getImages(tour);
  const price = tour.price?.discounted || tour.price?.original || 0;
  const score = tour.rating?.score || 4.9;
  const reviews = tour.rating?.reviews || 0;
  const destination = (typeof tour.city === "object" ? (tour.city?.name || tour.city?.nameAr) : tour.city) || tour.destination || tour.category || "Egypt";

  const includes = tour.includes?.length ? tour.includes : DEFAULT_INCLUDES;
  const excludes = tour.excludes?.length ? tour.excludes : DEFAULT_EXCLUDES;
  const goodToKnow = tour.goodToKnow?.length ? tour.goodToKnow : DEFAULT_GOOD_TO_KNOW;
  const faqs = tour.faq?.length ? tour.faq : DEFAULT_FAQ;
  const reviewList = tour.reviews?.length ? tour.reviews : DEFAULT_REVIEWS;
  const highlights = tour.highlights?.length ? tour.highlights : (tour.itinerary||[]).map(s=>s.title).slice(0,6);
  const ovCards = tour.overviewCards?.length ? tour.overviewCards : OV_ICON_FALLBACK;
  const itinerary = tour.itinerary?.length ? tour.itinerary : [
    {time:"Morning", title:"Hotel Pickup", description:"Your private guide will pick you up from your hotel in a modern, air-conditioned vehicle.", icon:"🚐"},
    {time:"Daytime", title:tour.title, description: tour.description?.slice(0,140)+"...", icon:"📍"},
    {time:"Evening", title:"Return to Hotel", description:"You will be transferred back to your hotel.", icon:"🏨"},
  ];
  const routePoints = tour.routePoints?.length ? tour.routePoints : itinerary.map(s=>s.title).slice(0,3);

  const handleBook = booking => {
    alert(`✦ Booking Received!\n\n${tour.title}\nDate: ${booking.date||"TBD"}\nTravellers: ${booking.adults} adult(s)\nTotal: ${fmtP(booking.total)}`);
  };

  const reviewPages = Math.max(1, reviewList.length - 2);
  const visibleReviews = reviewList.slice(revStart, revStart+3);
  while(visibleReviews.length < 3 && reviewList.length>0){ visibleReviews.push(reviewList[visibleReviews.length % reviewList.length]); }

  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(tour.title+" "+destination)}`;

  return (
    <div style={{background:"var(--bg)",minHeight:"100vh",position:"relative"}}>
      <GlobalStyles/>
      <div id="gt-hidden" style={{display:"none"}}/>

      {/* TOP TRUST BAR */}
      <div className="tp-topbar">
        <span className="tp-tb-stat dn">👥 <b>12,000+</b>&nbsp;Happy Travelers</span>
        <span className="tp-tb-stat dn">🗺️ <b>500+</b>&nbsp;Tours</span>
        <span className="tp-tb-stat">⭐ <b>4.9</b>&nbsp;Rating</span>
        <span className="tp-tb-stat dn">🎧 24/7 Support</span>
        <div className="tp-tb-right">
          <div className="tp-tb-item" onClick={()=>{setLangOpen(v=>!v);setCurOpen(false);}}>
            <span>{currentLangObj.flag}</span><span className="dn">{currentLangObj.label}</span><span style={{fontSize:8}}>▾</span>
            <LanguageSelector visible={langOpen} onClose={()=>setLangOpen(false)} currentLang={uiLang} onSelect={handleLangSelect}/>
          </div>
          <div className="tp-tb-sep dn"/>
          <div className="tp-tb-item dn" onClick={()=>{setCurOpen(v=>!v);setLangOpen(false);}}>
            <span>{CURR[cur]?.s} {cur} ▾</span>
            {curOpen && (
              <div className="tp-cur-pop">
                {Object.entries(CURR).map(([code,{l}])=>(
                  <div key={code} className={`tp-cur-row${cur===code?" on":""}`} onClick={()=>{setCurrencyVal(code);setCurOpen(false);}}>{l}</div>
                ))}
              </div>
            )}
          </div>
          <div className="tp-tb-sep dn"/>
          <a className="tp-tb-item dn" href={`tel:+${PHONE_DIGITS}`}>📞 {PHONE_DISPLAY}</a>
          <div className="tp-tb-sep dn"/>
          <a className="tp-tb-item" href={WA_BASE} target="_blank" rel="noreferrer">💬 <span className="dn">WhatsApp</span></a>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="tp-nav" style={{boxShadow:scrolled?"0 4px 24px rgba(180,140,60,.14)":"none"}}>
        <BrandMark size={38}/>

        <div className="tp-menu dn">
          <Link to="/" className="tp-menu-link">Home</Link>
          <div className="tp-menu-item">
            <button className="tp-menu-link" onClick={()=>setNavDrop(navDrop==="dest"?null:"dest")}>Destinations <span className="tp-menu-caret">▾</span></button>
            {navDrop==="dest" && (
              <div className="tp-menu-drop">
                {["Cairo","Luxor","Aswan","Hurghada","Sharm El Sheikh"].map(d=>(
                  <Link key={d} to={`/destinations/${d.toLowerCase().replace(/ /g,"-")}`}>{d}</Link>
                ))}
              </div>
            )}
          </div>
          <div className="tp-menu-item">
            <button className="tp-menu-link" onClick={()=>setNavDrop(navDrop==="tours"?null:"tours")}>Tours <span className="tp-menu-caret">▾</span></button>
            {navDrop==="tours" && (
              <div className="tp-menu-drop">
                {["Day Tours","Multi-Day Tours","Nile Cruises","Private Tours","Adventure Tours"].map(d=>(
                  <Link key={d} to={`/tours/${d.toLowerCase().replace(/ /g,"-")}`}>{d}</Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/nile-cruises" className="tp-menu-link">Nile Cruises</Link>
          <Link to="/custom-trips" className="tp-menu-link">Custom Trips</Link>
          <Link to="/about" className="tp-menu-link">About Us</Link>
          <Link to="/contact" className="tp-menu-link">Contact</Link>
        </div>

        <div className="tp-nav-acts">
          <button className="tp-icon-btn dn" onClick={()=>setFav(v=>!v)} style={{color:fav?"#B5453F":"#A07828"}}>{fav?"♥":"♡"}</button>
          <button className="tp-icon-btn dn" onClick={()=>navigate("/account")}>👤</button>
          <button className="btn-gold dn" onClick={()=>navigate("/custom-trips")}>Plan My Trip</button>
          <button className="tp-mobile-toggle" onClick={()=>setMMenu(v=>!v)}>{mMenu?"✕":"☰"}</button>
        </div>
      </nav>

      {mMenu && (
        <div className="tp-mobile-drawer">
          <Link className="tp-mobile-link" to="/" onClick={()=>setMMenu(false)}>Home</Link>
          <Link className="tp-mobile-link" to="/destinations" onClick={()=>setMMenu(false)}>Destinations</Link>
          <Link className="tp-mobile-link" to="/tours" onClick={()=>setMMenu(false)}>Tours</Link>
          <Link className="tp-mobile-link" to="/nile-cruises" onClick={()=>setMMenu(false)}>Nile Cruises</Link>
          <Link className="tp-mobile-link" to="/custom-trips" onClick={()=>setMMenu(false)}>Custom Trips</Link>
          <Link className="tp-mobile-link" to="/about" onClick={()=>setMMenu(false)}>About Us</Link>
          <Link className="tp-mobile-link" to="/contact" onClick={()=>setMMenu(false)}>Contact</Link>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",margin:"18px 0"}}>
            {Object.entries(CURR).slice(0,8).map(([code,{s}])=>(
              <button key={code} onClick={()=>{setCurrencyVal(code);}} style={{background:cur===code?"rgba(201,168,76,.2)":"rgba(201,168,76,.06)",border:"1.5px solid rgba(193,156,60,.2)",color:cur===code?"#A07828":"rgba(44,26,6,.55)",borderRadius:7,padding:"6px 12px",cursor:"pointer",fontSize:11,fontFamily:"'Josefin Sans',sans-serif"}}>{s} {code}</button>
            ))}
          </div>
          <a href={`tel:+${PHONE_DIGITS}`} style={{display:"block",fontFamily:"'Cormorant Garamond',serif",fontSize:15,color:"#2C1A06",marginBottom:14}}>📞 {PHONE_DISPLAY}</a>
          <a href={WA_BASE} target="_blank" rel="noreferrer" style={{display:"block",textAlign:"center",background:"#25D366",color:"#fff",borderRadius:10,padding:"13px",textDecoration:"none",fontWeight:700,fontSize:12,fontFamily:"'Josefin Sans',sans-serif"}}>💬 WhatsApp Us</a>
        </div>
      )}

      {/* BREADCRUMB */}
      <div className="tp-crumb">
        <a href="/" onClick={e=>{e.preventDefault();navigate("/")}}>Home</a>
        <span style={{opacity:.4}}>›</span>
        <a href="/tours" onClick={e=>{e.preventDefault();navigate("/tours")}}>Tours</a>
        <span style={{opacity:.4}}>›</span>
        <a href="#" onClick={e=>{e.preventDefault();navigate(-1)}}>{tour.category||"Egypt Tours"}</a>
        <span style={{opacity:.4}}>›</span>
        <span className="cur">{tour.title}</span>
      </div>

      {/* HERO */}
      <div className="tp-hero-wrap">
        <div className="tp-hero-grid">
          <div>
            <div className="tp-hero-banner" style={{backgroundImage:`url(${images[heroImg]})`}}>
              {tour.bestseller!==false && <span className="tp-hero-badge">✦ Bestseller</span>}
              <h1 className="tp-htitle">{tour.title}</h1>
              {tour.subtitle && <p className="tp-htagline">{tour.subtitle}</p>}
              <div className="tp-hfacts">
                <span className="tp-hfact">📋 {tour.tourType||"Full Day Tour"}</span>
                <span className="tp-hfact-sep"/>
                <span className="tp-hfact">⏱ {tour.duration||"8 Hours"}</span>
                <span className="tp-hfact-sep"/>
                <span className="tp-hfact">👤 {tour.groupType||"Private Tour"}</span>
              </div>
              <div className="tp-hrating">
                <span className="tp-hstars">★</span>
                <span className="tp-hscore">{score}</span>
                <span className="tp-hstars">{"★".repeat(Math.min(5,Math.round(score)))}</span>
                <span className="tp-hcount">({reviews?.toLocaleString()} Reviews)</span>
              </div>
            </div>

            <div className="tp-hero-info">
              <p className="tp-hero-desc">{tour.description?.slice(0,180)}{tour.description?.length>180?"...":""}</p>
              <div className="tp-trustrow">
                <div className="tp-trust"><div className="tp-trust-ic">⏱</div><div><div className="tp-trust-l">Free Cancellation</div><div className="tp-trust-s">Up to 24 Hours</div></div></div>
                <div className="tp-trust"><div className="tp-trust-ic">✓</div><div><div className="tp-trust-l">Instant Confirmation</div></div></div>
                <div className="tp-trust"><div className="tp-trust-ic">🛡️</div><div><div className="tp-trust-l">Best Price Guarantee</div></div></div>
                <div className="tp-trust"><div className="tp-trust-ic">👤</div><div><div className="tp-trust-l">Private & Flexible</div></div></div>
              </div>
              <div className="tp-photostrip">
                {images.slice(0,5).map((src,i)=>(
                  <div key={i} className={`tp-pthumb${heroImg===i?" on":""}`} onClick={()=>setHeroImg(i)}>
                    <img src={src} alt={`View ${i+1}`} onError={e=>{e.target.src=`https://placehold.co/200x150/F3ECD8/A07828?text=${i+1}`;}}/>
                  </div>
                ))}
                <div className="tp-pthumb" onClick={()=>setHeroImg(0)}>
                  <img src={images[5]||images[0]} alt="More"/>
                  <div className="tp-pthumb-more"><b>+{Math.max(0,18)}</b>Photos</div>
                </div>
              </div>
            </div>
          </div>

          <aside><BookingWidget tour={tour} onBook={handleBook} formatPrice={fmtP}/></aside>
        </div>
      </div>

      {/* TABS */}
      <div className="tp-tabs-wrap">
        <div className="tp-tabs">
          {TABS.map(tb=>(
            <button key={tb.id} className={`tp-tab${activeTab===tb.id?" on":""}`} onClick={()=>goTab(tb.id)}>
              <span>{tb.ic}</span><span className="dn">{tb.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* BODY */}
      <div className="tp-body">
        <div>
          {/* OVERVIEW */}
          <div ref={refOverview}>
            <h2 className="tp-sec-title">Tour Overview</h2>
            <p className="tp-ov-text">{tour.description}</p>
            <div className="tp-ovcards">
              {ovCards.map((c,i)=>(<div key={i} className="tp-ovcard"><div className="tp-ovcard-ic">{c.ic}</div><div className="tp-ovcard-l">{c.l}</div></div>))}
            </div>
          </div>

          {/* ITINERARY + INCLUDES/EXCLUDES/GOOD TO KNOW */}
          <div className="tp-section tp-mid-grid">
            <div ref={refItinerary}>
              <h2 className="tp-sec-title">Itinerary</h2>
              <div className="tp-itin">
                {itinerary.map((step,i)=>(
                  <div key={i} className="tp-step">
                    <div className="tp-step-left">
                      <div className="tp-step-marker">{step.icon||i+1}</div>
                      {i<itinerary.length-1 && <div className="tp-step-line"/>}
                    </div>
                    <div className="tp-step-cnt">
                      <div className="tp-step-txt">
                        {step.time && <div className="tp-step-time">⏱ {step.time}</div>}
                        <div className="tp-step-title">{step.title}</div>
                        <div className="tp-step-desc">{step.description}</div>
                      </div>
                      <div className="tp-step-img"><img src={step.image||images[i%images.length]} alt={step.title} onError={e=>{e.target.style.display="none";}}/></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tp-notice"><span>ⓘ</span><span>Times are approximate and can be adjusted according to your preference.</span></div>
            </div>

            <div>
              <div ref={refIncludes} className="tp-stackcard">
                <div className="tp-stack-h">What's Included</div>
                <div className="tp-stack-list">
                  {includes.map((inc,i)=>(<div key={i} className="tp-stack-row"><span className="tp-stack-ic ok">✓</span><span>{inc}</span></div>))}
                </div>
              </div>
              {excludes.length>0 && (
                <div className="tp-stackcard">
                  <div className="tp-stack-h">What's Not Included</div>
                  <div className="tp-stack-list">
                    {excludes.map((exc,i)=>(<div key={i} className="tp-stack-row"><span className="tp-stack-ic no">✕</span><span>{exc}</span></div>))}
                  </div>
                </div>
              )}
              <div ref={refGoodToKnow} className="tp-stackcard">
                <div className="tp-stack-h">Good to Know</div>
                <div className="tp-stack-list">
                  {goodToKnow.map((g,i)=>(<div key={i} className="tp-stack-row"><span className="tp-stack-ic info">ⓘ</span><span>{g}</span></div>))}
                </div>
              </div>
            </div>
          </div>

          {/* REVIEWS */}
          <div className="tp-section" ref={refReviews}>
            <div className="tp-sec-head-row">
              <h2 className="tp-sec-title" style={{marginBottom:0}}>What Our Travelers Say</h2>
              <button className="tp-view-all" onClick={()=>goTab("reviews")}>View All Reviews →</button>
            </div>
            <div className="tp-revsum">
              <div style={{textAlign:"center",minWidth:80}}>
                <div className="tp-rbig">{score}</div>
                <div className="tp-rof">out of 5.0</div>
                <div className="tp-rbig-stars">{"★".repeat(Math.min(5,Math.round(score)))}</div>
                <div className="tp-rtotal">{reviews?.toLocaleString()} reviews</div>
              </div>
              <div className="tp-rbars">
                {[{l:"Guide Quality",p:98},{l:"Value for Money",p:94},{l:"Organisation",p:96},{l:"Experience",p:99}].map(b=>(
                  <div key={b.l} className="tp-rbar-row"><span className="tp-rbar-l">{b.l}</span><div className="tp-rbar-track"><div className="tp-rbar-fill" style={{width:`${b.p}%`}}/></div><span className="tp-rbar-pct">{b.p}%</span></div>
                ))}
              </div>
            </div>
            <div className="tp-revrow">
              <button className="tp-rev-arrow" disabled={revStart===0} onClick={()=>setRevStart(s=>Math.max(0,s-1))}>‹</button>
              <div className="tp-revtrack">
                {visibleReviews.map((rev,i)=>(
                  <div key={i} className="tp-revc">
                    <div className="tp-rev-head">
                      <div className="tp-rev-av">{rev.avatar||"👤"}</div>
                      <div>
                        <div className="tp-rev-name">{rev.name}</div>
                        <div className="tp-rev-loc">{rev.flag} {rev.country||rev.location}</div>
                      </div>
                      <div className="tp-rev-date">{rev.date}</div>
                    </div>
                    <div className="tp-rev-stars">{"★".repeat(rev.rating||5)}</div>
                    <div className="tp-rev-txt">{rev.text}</div>
                    <div className="tp-rev-photos">
                      {images.slice(0,3).map((src,j)=>(<div key={j} className="tp-rev-photo"><img src={src} alt=""/></div>))}
                    </div>
                  </div>
                ))}
              </div>
              <button className="tp-rev-arrow" disabled={revStart>=reviewPages-1} onClick={()=>setRevStart(s=>Math.min(reviewPages-1,s+1))}>›</button>
            </div>
          </div>

          {/* FAQ */}
          <div className="tp-section" ref={refFaq}>
            <div className="tp-sec-head-row">
              <h2 className="tp-sec-title" style={{marginBottom:0}}>Frequently Asked Questions</h2>
              <button className="tp-view-all" onClick={()=>goTab("faq")}>View All FAQ →</button>
            </div>
            <div className="tp-faqgrid">
              {faqs.map((f,i)=>(
                <div key={i} className={`tp-faqitem${openFaq===i?" open":""}`}>
                  <button className="tp-faqq" onClick={()=>setOpenFaq(openFaq===i?-1:i)}>
                    <span>{f.q}</span><span className="tp-faqchev">▾</span>
                  </button>
                  <div className="tp-faqa">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="tp-side">
          <div className="tp-side-card">
            <div className="tp-side-h">Tour Highlights</div>
            <div className="tp-hl-list">
              {highlights.map((h,i)=>(<div key={i} className="tp-hl-row"><span className="tp-hl-ic">◆</span><span>{h}</span></div>))}
            </div>
          </div>

          <div className="tp-side-card">
            <div className="tp-side-h">Need a Custom Trip?</div>
            <p className="tp-custom-txt">We can customize this tour to fit your travel style and preferences.</p>
            <button className="btn-gold" style={{width:"100%"}} onClick={()=>navigate("/custom-trips")}>Customize My Trip</button>
          </div>

          <div className="tp-side-card">
            <div className="tp-rev-mini">
              <div className="tp-rev-mini-big">{score}</div>
              <div className="tp-rev-mini-txt">
                <span className="tp-rev-mini-l">Excellent</span>
                <span className="tp-rev-mini-stars">{"★".repeat(Math.min(5,Math.round(score)))}</span>
                <span className="tp-rev-mini-cnt">{reviews?.toLocaleString()} Reviews</span>
              </div>
            </div>
            {reviewList[0] && (
              <div className="tp-mini-quote">
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                  <span style={{fontFamily:"'Cinzel',serif",fontSize:11,fontWeight:700,color:"#2C1A06"}}>{reviewList[0].name}</span>
                  <span style={{fontSize:12}}>{reviewList[0].flag}</span>
                </div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"var(--mid)",lineHeight:1.5}}>{reviewList[0].text}</div>
                <div style={{fontFamily:"'Josefin Sans',sans-serif",fontSize:9,color:"#9C7A3C",marginTop:6,textTransform:"uppercase"}}>{reviewList[0].date}</div>
              </div>
            )}
            <button className="tp-view-all" onClick={()=>goTab("reviews")}>Read all reviews →</button>
          </div>

          <div className="tp-side-card">
            <div className="tp-side-h">Tour Route</div>
            <div className="tp-route-map">
              {routePoints.map((p,i)=>(
                <span key={i} className="tp-route-pin" style={{top:`${18+i*36}%`, left: i%2===0 ? "8%" : "42%"}}>📍 {p}</span>
              ))}
            </div>
            <a href={mapSearchUrl} target="_blank" rel="noreferrer" className="btn-gold" style={{width:"100%",display:"block",textAlign:"center",textDecoration:"none"}}>View Full Map</a>
          </div>

          <div className="tp-side-card">
            <div className="tp-side-h">Your Journey is 100% Protected</div>
            <div className="tp-protect-list">
              <div className="tp-protect-row">✓ Free cancellation up to 24 hours</div>
              <div className="tp-protect-row">✓ No hidden fees</div>
              <div className="tp-protect-row">✓ Secure &amp; trusted booking</div>
            </div>
          </div>
        </aside>
      </div>

      {/* CTA BAND */}
      <div className="tp-cta">
        <div>
          <div className="tp-cta-h">Ready to Explore {destination}?</div>
          <div className="tp-cta-s">Book now and experience the wonders of ancient Egypt.</div>
        </div>
        <div className="tp-cta-mid">
          <div className="tp-cta-item"><span className="tp-cta-ic">🛡️</span><div className="tp-cta-it"><b>Best Price Guarantee</b><span>No hidden fees</span></div></div>
          <div className="tp-cta-item"><span className="tp-cta-ic">📅</span><div className="tp-cta-it"><b>Flexible Booking</b><span>Free cancellation</span></div></div>
          <div className="tp-cta-item"><span className="tp-cta-ic">🎧</span><div className="tp-cta-it"><b>24/7 Support</b><span>We're here to help</span></div></div>
        </div>
        <div className="tp-cta-btns">
          <button className="btn-gold" onClick={()=>{document.getElementById("tp-main-book-btn")?.scrollIntoView({behavior:"smooth",block:"center"});}}>Book Now</button>
          <a className="btn-ghost-dark" href={WA_BASE} target="_blank" rel="noreferrer" style={{textDecoration:"none",display:"inline-block"}}>Contact on WhatsApp</a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="tp-footer">
        <div className="tp-footer-top">
          <div>
            <BrandMark size={36} dark/>
            <p className="tp-footer-desc">We craft luxury journeys across Egypt with passion, expertise and attention to every detail. Your adventure, perfectly curated.</p>
            <div className="tp-footer-soc">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">📘</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">📷</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">▶️</a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer">🎵</a>
              <a href={WA_BASE} target="_blank" rel="noreferrer">💬</a>
            </div>
          </div>
          <div className="tp-footer-col">
            <div className="tp-footer-h">Destinations</div>
            <Link to="/destinations/cairo">Cairo</Link>
            <Link to="/destinations/luxor">Luxor</Link>
            <Link to="/destinations/aswan">Aswan</Link>
            <Link to="/destinations/hurghada">Hurghada</Link>
            <Link to="/destinations/sharm-el-sheikh">Sharm El Sheikh</Link>
            <Link to="/destinations">All Destinations</Link>
          </div>
          <div className="tp-footer-col">
            <div className="tp-footer-h">Tours</div>
            <Link to="/tours/day-tours">Day Tours</Link>
            <Link to="/tours/multi-day-tours">Multi-Day Tours</Link>
            <Link to="/nile-cruises">Nile Cruises</Link>
            <Link to="/tours/private-tours">Private Tours</Link>
            <Link to="/tours/adventure-tours">Adventure Tours</Link>
            <Link to="/tours">All Tours</Link>
          </div>
          <div className="tp-footer-col">
            <div className="tp-footer-h">Company</div>
            <Link to="/about">About Us</Link>
            <Link to="/guides">Our Guides</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/travel-tips">Travel Tips</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="tp-footer-col">
            <div className="tp-footer-h">Support</div>
            <Link to="/faq">FAQ</Link>
            <Link to="/cancellation-policy">Cancellation Policy</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
          <div className="tp-footer-col">
            <div className="tp-footer-h">Contact Us</div>
            <a className="fc-line" href={`tel:+${PHONE_DIGITS}`} style={{display:"block"}}>📞 {PHONE_DISPLAY}</a>
            <a className="fc-line" href={`mailto:${EMAIL}`} style={{display:"block"}}>✉️ {EMAIL}</a>
            <span className="fc-line">📍 Cairo, Egypt</span>
            <a className="tp-footer-wabtn" href={WA_BASE} target="_blank" rel="noreferrer">💬 WhatsApp</a>
          </div>
        </div>
        <div className="tp-footer-bottom">
          <span className="tp-footer-copy">© {new Date().getFullYear()} Aurevian Tours. All Rights Reserved.</span>
          <div className="tp-pay-icons"><span>VISA</span><span>Mastercard</span><span>PayPal</span><span>Apple Pay</span></div>
        </div>
      </footer>
    </div>
  );
}