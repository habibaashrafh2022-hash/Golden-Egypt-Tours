// ============================================================
//  Tour.jsx — Aurevian Tours ✦ Unified Luxury Edition
//  Matches Home.jsx / CityPage.jsx design system: cream/gold
//  palette, Cinzel / Cormorant Garamond / Josefin Sans, shared
//  language + currency switcher (Google Translate engine).
//  Route: /tour/:tourId
// ============================================================

import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getTourById } from "../api/index";
import { useGlobal } from "../context/GlobalContext";

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

// ─── LANGUAGES (identical list — Google Translate engine) ─────
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

// ─── FALLBACK IMAGES ───────────────────────────────────────────
const CATEGORY_IMAGES = {
  "Tour packages": [
    "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=80",
    "https://images.unsplash.com/photo-1608037521244-f1c6c7635194?w=1200&q=80",
    "https://images.unsplash.com/photo-1539768942893-daf2293f73e8?w=1200&q=80",
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
  ],
};
const getImages = (tour) => {
  if (tour?.images?.length) return tour.images;
  return CATEGORY_IMAGES[tour?.category] || CATEGORY_IMAGES["default"];
};

// ─── AUREVIAN LOGO — identical to Home.jsx ────────────────────
function AurevianLogo({size=46, animate=false}){
  return(
    <svg width={size} height={size} viewBox="0 0 56 56" className="logo-A" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lgA3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B6010"/><stop offset="45%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8C96D"/>
        </linearGradient>
        <linearGradient id="lgRiver3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7CB9E8" stopOpacity="0.9"/><stop offset="50%" stopColor="#4FC3F7" stopOpacity="1"/><stop offset="100%" stopColor="#7CB9E8" stopOpacity="0.5"/>
        </linearGradient>
      </defs>
      <polygon points="28,2 46,10 54,28 46,46 28,54 10,46 2,28 10,10" fill="none" stroke="url(#lgA3)" strokeWidth="1.2" opacity="0.7"/>
      <line x1="11" y1="44" x2="28" y2="10" stroke="url(#lgA3)" strokeWidth="3.2" strokeLinecap="round"/>
      <line x1="45" y1="44" x2="28" y2="10" stroke="url(#lgA3)" strokeWidth="3.2" strokeLinecap="round"/>
      <path className={animate?"logo-river":""} d="M17 32 Q20 29 23 32 Q26 35 29 32 Q32 29 35 32 Q38 35 39 32" stroke="url(#lgRiver3)" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.95"/>
      <polyline points="21,44 28,36 35,44" fill="none" stroke="url(#lgA3)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      <circle cx="28" cy="10" r="2.2" fill="url(#lgA3)" opacity="0.9"/>
      <circle cx="22" cy="19" r="1.1" fill="url(#lgA3)" opacity="0.4"/>
      <circle cx="34" cy="19" r="1.1" fill="url(#lgA3)" opacity="0.4"/>
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
const GlobalStyles = () => (
  <style>{`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;600;700&display=swap');

:root{
  --g:#C9A84C; --gl:#E8C96D; --gd:rgba(201,168,76,.1); --gb:rgba(193,156,60,.22);
  --bg:#FAF6ED; --bg2:#F3ECD8; --bg3:#EDE3C8;
  --dark:#2C1A06; --mid:#6B4E1A; --muted:#9C7A3C;
  --text:#2C1A06; --dim:rgba(44,26,6,.65);
  --card:#FBF7EE; --cardb:#F5EED8;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--text);font-family:'Josefin Sans',sans-serif;overflow-x:hidden;}
::-webkit-scrollbar{width:4px;}
::-webkit-scrollbar-track{background:var(--bg2);}
::-webkit-scrollbar-thumb{background:rgba(193,156,60,.4);border-radius:2px;}

@keyframes heroZoom{0%{transform:scale(1)}100%{transform:scale(1.08)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes slideD{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:none}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes marquee{0%{transform:translateX(40vw)}100%{transform:translateX(-100%)}}
@keyframes gradShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
@keyframes glowGold{0%,100%{filter:drop-shadow(0 0 14px rgba(201,168,76,.55))}50%{filter:drop-shadow(0 0 34px rgba(232,201,109,.85)) brightness(1.18)}}
@keyframes popIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
@keyframes pulse{0%,100%{opacity:.45;transform:scale(.96)}50%{opacity:1;transform:scale(1.04)}}
@keyframes barFill{from{width:0}}

.gta{background:linear-gradient(90deg,#8B6010,#C9A84C,#E8C96D,#C9A84C,#8B6010);background-size:300% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:gradShift 6s ease-in-out infinite;}
.gt{background:linear-gradient(135deg,#8B6010 0%,#C9A84C 40%,#E8C96D 65%,#A07828 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.gline{height:1px;background:linear-gradient(to right,transparent,rgba(193,156,60,.3),transparent);}
.lang-btn:hover{background:rgba(201,168,76,.12)!important;border-color:rgba(160,120,40,.5)!important;}
.btn-gold{background:linear-gradient(135deg,#A07828,#C9A84C,#E8C96D);color:#FAF6ED;border:none;border-radius:10px;padding:13px 28px;cursor:pointer;font-weight:700;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;font-family:'Josefin Sans',sans-serif;box-shadow:0 6px 28px rgba(160,120,40,.35);transition:all .25s;}
.btn-gold:hover{box-shadow:0 10px 40px rgba(160,120,40,.55);transform:translateY(-2px);}
.btn-ghost{background:transparent;border:1.5px solid rgba(160,120,40,.35);color:#A07828;border-radius:9px;padding:9px 22px;cursor:pointer;font-size:10px;letter-spacing:2.5px;text-transform:uppercase;font-family:'Josefin Sans',sans-serif;transition:all .2s;white-space:nowrap;}
.btn-ghost:hover{background:rgba(201,168,76,.1);border-color:rgba(160,120,40,.6);}
.dd:hover{background:rgba(201,168,76,.08)!important;color:#A07828!important;}

.tp-bg{position:fixed;inset:0;pointer-events:none;z-index:0;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Ctext x='8' y='50' font-size='28' fill='rgba(201,168,76,0.05)'%3E𓂀𓃭𓆑%3C/text%3E%3Ctext x='8' y='100' font-size='28' fill='rgba(201,168,76,0.035)'%3E𓇋𓅓𓂋%3C/text%3E%3Ctext x='8' y='148' font-size='28' fill='rgba(201,168,76,0.05)'%3E𓏏𓈖𓃀%3C/text%3E%3C/svg%3E");
  background-size:160px 160px;}

.tp-nav{position:fixed;top:0;left:0;right:0;z-index:990;height:66px;display:flex;align-items:center;padding:0 clamp(14px,4vw,44px);gap:10px;background:rgba(250,246,237,.98);backdrop-filter:blur(28px);border-bottom:1px solid rgba(193,156,60,.25);box-shadow:0 4px 32px rgba(180,140,60,.1);}
.tp-nav::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(193,156,60,.5),rgba(232,201,109,.7),rgba(193,156,60,.5),transparent);opacity:.7;}
.tp-back{display:flex;align-items:center;gap:7px;background:rgba(201,168,76,.08);border:1.5px solid rgba(193,156,60,.3);color:#A07828;border-radius:8px;padding:8px 16px;font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:all .2s;text-decoration:none;white-space:nowrap;font-weight:700;}
.tp-back:hover{background:rgba(201,168,76,.16);}
.tp-sw-btn{background:rgba(201,168,76,.08);border:1.5px solid rgba(193,156,60,.3);color:#A07828;padding:6px 13px;border-radius:8px;cursor:pointer;font-size:11px;font-weight:700;font-family:'Josefin Sans',sans-serif;display:flex;align-items:center;gap:6px;letter-spacing:.1em;}
.tp-sw-drop{position:absolute;top:calc(100% + 8px);right:0;background:linear-gradient(145deg,#FAF6ED,#F3ECD8);border:1.5px solid rgba(193,156,60,.28);border-radius:12px;overflow:hidden;min-width:200px;z-index:2000;box-shadow:0 24px 60px rgba(44,26,6,.15);animation:slideD .2s ease;max-height:320px;overflow-y:auto;}

.tp-sticky{position:fixed;top:66px;left:0;right:0;z-index:980;height:52px;display:flex;align-items:center;gap:16px;padding:0 clamp(14px,4vw,44px);background:rgba(250,246,237,.98);backdrop-filter:blur(20px);border-bottom:1px solid rgba(193,156,60,.25);transform:translateY(-100%);transition:transform .3s ease;pointer-events:none;}
.tp-sticky.on{transform:translateY(0);pointer-events:all;}
.tp-sticky-name{font-family:'Cinzel',serif;font-size:12px;color:#2C1A06;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.tp-sticky-price{font-family:'Cinzel',serif;font-size:18px;color:#A07828;font-weight:700;white-space:nowrap;}
.tp-sticky-btn{background:linear-gradient(135deg,#A07828,#C9A84C);color:#FAF6ED;border:none;border-radius:8px;padding:9px 20px;font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:2px;font-weight:700;cursor:pointer;text-transform:uppercase;white-space:nowrap;}

.tp-hero{position:relative;height:100vh;min-height:560px;max-height:860px;margin-top:66px;overflow:hidden;display:flex;align-items:flex-end;}
.tp-hero-bg{position:absolute;inset:0;background-size:cover;background-position:center;animation:heroZoom 16s ease-in-out infinite alternate;}
.tp-hero-ov{position:absolute;inset:0;z-index:2;background:linear-gradient(to top,rgba(44,26,6,.92) 0%,rgba(44,26,6,.55) 35%,rgba(44,26,6,.12) 70%,transparent 100%),linear-gradient(to right,rgba(44,26,6,.5) 0%,rgba(44,26,6,.1) 45%,transparent 75%);}
.tp-hero-edge{position:absolute;top:0;bottom:0;right:0;width:3px;z-index:3;background:linear-gradient(to bottom,transparent,rgba(232,201,109,.9),rgba(201,168,76,1),rgba(232,201,109,.9),transparent);}
.tp-band{position:absolute;top:26%;left:0;right:0;z-index:3;height:42px;pointer-events:none;border-top:1px solid rgba(232,201,109,.18);border-bottom:1px solid rgba(232,201,109,.18);background:rgba(44,26,6,.18);display:flex;align-items:center;overflow:hidden;}
.tp-band-txt{font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:7px;color:rgba(232,201,109,.55);white-space:nowrap;text-transform:uppercase;animation:marquee 30s linear infinite;}
.tp-hero-badges{position:absolute;top:22px;left:clamp(14px,4vw,44px);z-index:5;display:flex;gap:8px;flex-wrap:wrap;}
.tp-hbadge{background:rgba(250,246,237,.9);backdrop-filter:blur(12px);border:1px solid rgba(193,156,60,.4);border-radius:6px;padding:5px 12px;font-family:'Josefin Sans',sans-serif;font-size:8px;letter-spacing:2px;color:#A07828;text-transform:uppercase;font-weight:700;}
.tp-hbadge.hot{background:rgba(190,55,55,.88);border-color:rgba(220,60,60,.4);color:#fff;}
.tp-hbadge.new{background:rgba(82,183,136,.85);border-color:rgba(82,183,136,.4);color:#fff;}
.tp-hero-acts{position:absolute;top:22px;right:clamp(14px,4vw,44px);z-index:5;display:flex;gap:8px;}
.tp-act{width:38px;height:38px;border-radius:8px;background:rgba(250,246,237,.9);backdrop-filter:blur(10px);border:1px solid rgba(193,156,60,.4);color:#A07828;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:15px;transition:all .2s;}
.tp-act:hover{background:rgba(250,246,237,1);}
.tp-thumbs{position:absolute;bottom:198px;right:28px;z-index:5;display:flex;flex-direction:column;gap:8px;}
.tp-thumb{width:70px;height:50px;border-radius:8px;overflow:hidden;border:2px solid transparent;cursor:pointer;opacity:.55;transition:all .25s;}
.tp-thumb img{width:100%;height:100%;object-fit:cover;display:block;}
.tp-thumb:hover,.tp-thumb.on{opacity:1;border-color:#C9A84C;box-shadow:0 0 20px rgba(201,168,76,.45);}
.tp-hero-cnt{position:relative;z-index:4;padding:0 clamp(14px,4vw,44px) 48px;width:100%;max-width:820px;animation:fadeUp .85s ease both;}
.tp-hero-ey{font-family:'Josefin Sans',sans-serif;font-size:9px;letter-spacing:5px;color:#E8C96D;text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:12px;}
.tp-hero-ey::before{content:'';width:30px;height:1px;background:#E8C96D;}
.tp-htitle{font-family:'Cinzel',serif;font-size:clamp(28px,4.8vw,60px);font-weight:700;line-height:1.08;margin-bottom:10px;background:linear-gradient(135deg,#F0DC8A 0%,#E8C96D 35%,#FFF1B8 65%,#C9A84C 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;filter:drop-shadow(0 3px 24px rgba(201,168,76,.35));}
.tp-htagline{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:clamp(15px,2vw,21px);color:rgba(250,246,237,.78);font-weight:300;margin-bottom:20px;letter-spacing:.4px;}
.tp-hmeta{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:20px;}
.tp-hmi{display:flex;align-items:center;gap:6px;font-family:'Josefin Sans',sans-serif;font-size:9.5px;letter-spacing:1.5px;color:rgba(250,246,237,.7);text-transform:uppercase;}
.tp-hsep{width:3px;height:3px;border-radius:50%;background:rgba(232,201,109,.4);}
.tp-hrating{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
.tp-hstars{color:#E8C96D;font-size:16px;letter-spacing:2px;}
.tp-hscore{font-family:'Cinzel',serif;font-size:21px;color:#E8C96D;font-weight:700;}
.tp-hcount{font-family:'Cormorant Garamond',serif;font-size:14px;color:rgba(250,246,237,.6);}
.tp-htop{background:rgba(201,168,76,.2);border:1px solid rgba(232,201,109,.5);border-radius:4px;padding:3px 10px;font-family:'Josefin Sans',sans-serif;font-size:8px;letter-spacing:2px;color:#FFE9A8;text-transform:uppercase;}

.tp-crumb{padding:12px clamp(14px,4vw,44px);background:rgba(243,236,216,.6);border-bottom:1px solid rgba(193,156,60,.15);display:flex;align-items:center;gap:8px;font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:1.2px;color:#9C7A3C;position:relative;z-index:5;}
.tp-crumb a{color:inherit;text-decoration:none;transition:color .2s;}
.tp-crumb a:hover{color:#A07828;}
.tp-crumb .cur{color:#A07828;font-weight:700;max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}

.tp-qbar{display:flex;background:rgba(237,227,200,.5);border-bottom:1px solid rgba(193,156,60,.2);overflow-x:auto;position:relative;z-index:5;}
.tp-qi{flex:1;min-width:130px;padding:18px;display:flex;align-items:center;gap:11px;border-right:1px solid rgba(193,156,60,.18);transition:background .2s;}
.tp-qi:last-child{border-right:none;}
.tp-qi:hover{background:rgba(201,168,76,.08);}
.tp-qi-ic{font-size:20px;flex-shrink:0;}
.tp-qi-l{font-family:'Josefin Sans',sans-serif;font-size:8px;letter-spacing:2px;color:#9C7A3C;text-transform:uppercase;margin-bottom:3px;}
.tp-qi-v{font-family:'Cormorant Garamond',serif;font-size:15px;color:#2C1A06;}

.tp-body{display:grid;grid-template-columns:1fr 380px;gap:48px;padding:52px clamp(14px,4vw,44px);align-items:start;position:relative;z-index:5;max-width:1380px;margin:0 auto;}
.tp-tabs{display:flex;border-bottom:1px solid rgba(193,156,60,.22);margin-bottom:32px;overflow-x:auto;}
.tp-tab{background:transparent;border:none;border-bottom:2px solid transparent;color:#9C7A3C;font-family:'Josefin Sans',sans-serif;font-size:9.5px;letter-spacing:2.5px;padding:13px 20px;cursor:pointer;text-transform:uppercase;margin-bottom:-1px;transition:all .2s;white-space:nowrap;font-weight:600;}
.tp-tab.on{color:#A07828;border-bottom-color:#A07828;}
.tp-panel{display:none;animation:fadeUp .35s ease both;}
.tp-panel.on{display:block;}
.tp-main-title{font-family:'Cinzel',serif;font-size:clamp(20px,3vw,32px);color:#2C1A06;font-weight:700;line-height:1.25;margin-bottom:16px;}
.tp-rrow{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:26px;}
.tp-stars{color:#C9A84C;font-size:16px;letter-spacing:2px;}
.tp-score{font-family:'Cinzel',serif;font-size:24px;color:#A07828;font-weight:700;}
.tp-rcount{font-family:'Cormorant Garamond',serif;font-size:15px;color:#9C7A3C;}
.tp-top-tag{background:rgba(201,168,76,.12);border:1px solid rgba(193,156,60,.3);border-radius:4px;padding:4px 12px;font-family:'Josefin Sans',sans-serif;font-size:8px;letter-spacing:2px;color:#A07828;text-transform:uppercase;font-weight:700;}
.tp-body-txt{font-family:'Cormorant Garamond',serif;font-size:17px;color:#6B4E1A;line-height:1.85;margin-bottom:32px;font-weight:400;}
.tp-sec-h{font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:3.5px;color:#A07828;text-transform:uppercase;margin-bottom:18px;display:flex;align-items:center;gap:14px;font-weight:700;}
.tp-sec-h::after{content:'';flex:1;height:1px;background:linear-gradient(to right,rgba(193,156,60,.3),transparent);}
.tp-hls{margin-bottom:32px;}
.tp-hl{display:flex;align-items:flex-start;gap:13px;padding:11px 0;border-bottom:1px solid rgba(193,156,60,.1);transition:all .2s;}
.tp-hl-ic{color:#A07828;font-size:10px;margin-top:5px;flex-shrink:0;}
.tp-hl-tx{font-family:'Cormorant Garamond',serif;font-size:16px;color:#6B4E1A;line-height:1.5;}
.tp-icards{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;}
.tp-icard{background:linear-gradient(145deg,#FFFDF8,#F8F2E0);border:1.5px solid rgba(193,156,60,.22);border-radius:12px;padding:16px 18px;transition:all .2s;}
.tp-icard:hover{border-color:rgba(160,120,40,.5);box-shadow:0 8px 24px rgba(180,140,60,.1);}
.tp-icard-ic{font-size:19px;margin-bottom:8px;}
.tp-icard-l{font-family:'Josefin Sans',sans-serif;font-size:8px;letter-spacing:2px;color:#9C7A3C;text-transform:uppercase;margin-bottom:4px;}
.tp-icard-v{font-family:'Cormorant Garamond',serif;font-size:16px;color:#2C1A06;}
.tp-incgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:30px;}
.tp-inc{display:flex;align-items:center;gap:12px;background:linear-gradient(145deg,#FFFDF8,#F8F2E0);border:1.5px solid rgba(193,156,60,.22);border-radius:11px;padding:13px 16px;transition:all .2s;}
.tp-inc:hover{border-color:rgba(160,120,40,.5);}
.tp-inc-ic{font-size:18px;flex-shrink:0;color:#52B788;}
.tp-inc-l{font-family:'Josefin Sans',sans-serif;font-size:12.5px;color:#2C1A06;}
.tp-exclist{list-style:none;display:flex;flex-direction:column;gap:9px;}
.tp-exc{display:flex;align-items:flex-start;gap:10px;font-family:'Cormorant Garamond',serif;font-size:15px;color:#9C7A3C;line-height:1.5;}
.tp-exc::before{content:'✕';color:rgba(190,70,70,.65);font-size:11px;margin-top:3px;flex-shrink:0;}

.tp-itin{display:flex;flex-direction:column;}
.tp-step{display:flex;gap:18px;padding-bottom:30px;position:relative;}
.tp-step-left{display:flex;flex-direction:column;align-items:center;width:46px;flex-shrink:0;}
.tp-step-marker{width:46px;height:46px;border-radius:50%;background:rgba(201,168,76,.12);border:2px solid #C9A84C;display:flex;align-items:center;justify-content:center;font-size:17px;box-shadow:0 0 18px rgba(201,168,76,.18);flex-shrink:0;}
.tp-step-line{width:1px;flex:1;background:linear-gradient(to bottom,rgba(193,156,60,.35),transparent);margin-top:8px;}
.tp-step-cnt{flex:1;padding-top:6px;}
.tp-step-time{font-family:'Josefin Sans',sans-serif;font-size:8px;letter-spacing:2px;color:#A07828;text-transform:uppercase;margin-bottom:5px;font-weight:700;}
.tp-step-title{font-family:'Cinzel',serif;font-size:14px;color:#2C1A06;font-weight:600;letter-spacing:.4px;margin-bottom:7px;}
.tp-step-desc{font-family:'Cormorant Garamond',serif;font-size:15.5px;color:#6B4E1A;line-height:1.65;margin-bottom:10px;}
.tp-step-tags{display:flex;gap:6px;flex-wrap:wrap;}
.tp-stag{background:rgba(201,168,76,.1);border:1px solid rgba(193,156,60,.28);border-radius:12px;padding:3px 10px;font-family:'Josefin Sans',sans-serif;font-size:7px;letter-spacing:1.5px;color:#8B6010;text-transform:uppercase;}

.tp-rev-sum{display:flex;gap:26px;align-items:center;background:linear-gradient(145deg,#FFFDF8,#F8F2E0);border:1.5px solid rgba(193,156,60,.22);border-radius:16px;padding:26px;margin-bottom:26px;flex-wrap:wrap;}
.tp-rbig{font-family:'Cinzel',serif;font-size:58px;color:#A07828;font-weight:700;line-height:1;}
.tp-rof{font-family:'Josefin Sans',sans-serif;font-size:9px;letter-spacing:2px;color:#9C7A3C;text-transform:uppercase;margin-top:4px;}
.tp-rbig-stars{color:#C9A84C;font-size:17px;letter-spacing:2px;margin-top:6px;}
.tp-rtotal{font-family:'Cormorant Garamond',serif;font-size:13px;color:#9C7A3C;font-style:italic;margin-top:4px;}
.tp-rbars{flex:1;display:flex;flex-direction:column;gap:9px;min-width:200px;}
.tp-rbar-row{display:flex;align-items:center;gap:12px;}
.tp-rbar-l{font-family:'Josefin Sans',sans-serif;font-size:8px;letter-spacing:1px;color:#9C7A3C;text-transform:uppercase;min-width:92px;}
.tp-rbar-track{flex:1;height:5px;background:rgba(160,120,40,.1);border-radius:3px;overflow:hidden;}
.tp-rbar-fill{height:100%;border-radius:3px;background:linear-gradient(to right,#C9A84C,#E8C96D);animation:barFill 1s ease both;}
.tp-rbar-pct{font-family:'Josefin Sans',sans-serif;font-size:9px;color:#A07828;min-width:34px;text-align:right;}
.tp-revlist{display:flex;flex-direction:column;gap:15px;}
.tp-revc{background:linear-gradient(145deg,#FFFDF8,#F8F2E0);border:1.5px solid rgba(193,156,60,.22);border-radius:14px;padding:22px 24px;transition:border-color .2s;}
.tp-revc:hover{border-color:rgba(160,120,40,.45);}
.tp-rev-head{display:flex;align-items:center;gap:12px;margin-bottom:13px;}
.tp-rev-av{width:42px;height:42px;border-radius:50%;border:1px solid rgba(193,156,60,.3);background:rgba(201,168,76,.1);display:flex;align-items:center;justify-content:center;font-size:19px;flex-shrink:0;}
.tp-rev-name{font-family:'Cinzel',serif;font-size:11px;color:#2C1A06;font-weight:600;}
.tp-rev-loc{font-family:'Cormorant Garamond',serif;font-size:13px;color:#9C7A3C;font-style:italic;margin-top:1px;}
.tp-rev-stars{color:#C9A84C;font-size:12px;letter-spacing:1px;}
.tp-rev-date{margin-left:auto;font-family:'Josefin Sans',sans-serif;font-size:8px;letter-spacing:1px;color:#9C7A3C;text-transform:uppercase;white-space:nowrap;}
.tp-rev-txt{font-family:'Cormorant Garamond',serif;font-size:15.5px;color:#6B4E1A;line-height:1.7;}
.tp-rev-q{font-size:34px;color:rgba(193,156,60,.25);font-family:Georgia;line-height:1;margin-bottom:6px;}

.tp-widget{position:sticky;top:84px;background:linear-gradient(145deg,#FFFDF8,#F8F2E0);border:1.5px solid rgba(193,156,60,.28);border-radius:18px;overflow:hidden;box-shadow:0 24px 64px rgba(180,140,60,.16);}
.tp-wh{background:linear-gradient(135deg,#A07828 0%,#C9A84C 40%,#E8C96D 70%,#C9A84C 100%);padding:22px 24px;position:relative;overflow:hidden;}
.tp-wfrom{font-family:'Josefin Sans',sans-serif;font-size:8px;letter-spacing:3px;color:rgba(44,26,6,.6);text-transform:uppercase;font-weight:700;}
.tp-wprice{font-family:'Cinzel',serif;font-size:44px;color:#2C1A06;font-weight:900;line-height:1;}
.tp-wpp{font-family:'Cormorant Garamond',serif;font-size:14px;color:rgba(44,26,6,.55);margin-top:2px;}
.tp-wold{font-family:'Cormorant Garamond',serif;font-size:14px;color:rgba(44,26,6,.45);text-decoration:line-through;margin-left:8px;}
.tp-wsave{display:inline-block;background:rgba(44,26,6,.14);border-radius:4px;padding:2px 8px;font-family:'Josefin Sans',sans-serif;font-size:8px;letter-spacing:1px;color:rgba(44,26,6,.7);text-transform:uppercase;margin-left:8px;}
.tp-wrating{display:flex;align-items:center;gap:8px;margin-top:10px;}
.tp-wstars{color:rgba(44,26,6,.55);font-size:13px;}
.tp-wrtxt{font-family:'Josefin Sans',sans-serif;font-size:9px;color:rgba(44,26,6,.6);letter-spacing:1px;}
.tp-wb{padding:24px;}
.tp-wf{margin-bottom:14px;}
.tp-wfl{font-family:'Josefin Sans',sans-serif;font-size:8px;letter-spacing:2.5px;color:#A07828;text-transform:uppercase;margin-bottom:6px;font-weight:700;}
.tp-wfi{width:100%;background:rgba(201,168,76,.06);border:1.5px solid rgba(193,156,60,.25);border-radius:9px;color:#2C1A06;padding:12px 14px;font-family:'Cormorant Garamond',serif;font-size:15px;outline:none;transition:border-color .2s;color-scheme:light;}
.tp-wfi:focus{border-color:rgba(160,120,40,.6);box-shadow:0 0 0 3px rgba(201,168,76,.1);}
.tp-wfrow{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.tp-wfs{width:100%;background:rgba(201,168,76,.06);border:1.5px solid rgba(193,156,60,.25);border-radius:9px;color:#2C1A06;padding:12px 14px;font-family:'Cormorant Garamond',serif;font-size:14.5px;cursor:pointer;outline:none;transition:border-color .2s;}
.tp-bk{padding:14px 0;margin:16px 0;border-top:1px solid rgba(193,156,60,.18);border-bottom:1px solid rgba(193,156,60,.18);}
.tp-bkr{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;font-family:'Cormorant Garamond',serif;font-size:14.5px;color:#9C7A3C;}
.tp-bkr.tot{color:#2C1A06;padding-top:10px;margin-top:6px;border-top:1px solid rgba(193,156,60,.18);font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:1px;text-transform:uppercase;font-weight:700;}
.tp-bkr.tot .amt{color:#A07828;font-family:'Cinzel',serif;font-size:21px;font-weight:700;}
.tp-bookbtn{width:100%;background:linear-gradient(135deg,#A07828,#C9A84C,#E8C96D);color:#FAF6ED;border:none;border-radius:10px;padding:16px;font-family:'Josefin Sans',sans-serif;font-weight:700;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;cursor:pointer;margin-bottom:10px;box-shadow:0 6px 24px rgba(160,120,40,.32);transition:all .3s;}
.tp-bookbtn:hover{box-shadow:0 10px 36px rgba(160,120,40,.5);transform:translateY(-2px);}
.tp-wabk{width:100%;background:#25D366;color:#fff;border:none;border-radius:10px;padding:13px;font-family:'Josefin Sans',sans-serif;font-weight:700;font-size:10px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:all .2s;display:block;text-align:center;text-decoration:none;}
.tp-wabk:hover{background:#1fb558;}
.tp-trust{display:flex;gap:0;margin-top:16px;border-top:1px solid rgba(193,156,60,.16);padding-top:16px;}
.tp-trust-i{flex:1;text-align:center;padding:0 5px;border-right:1px solid rgba(193,156,60,.16);font-family:'Josefin Sans',sans-serif;font-size:7px;letter-spacing:1px;color:#9C7A3C;text-transform:uppercase;line-height:1.4;}
.tp-trust-i:last-child{border-right:none;}
.tp-trust-ic{font-size:15px;display:block;margin-bottom:4px;color:#A07828;}
.tp-save-pill{display:inline-flex;align-items:center;gap:6px;background:rgba(82,183,136,.12);border:1px solid rgba(82,183,136,.3);border-radius:20px;padding:5px 14px;margin-bottom:18px;font-family:'Josefin Sans',sans-serif;font-size:9px;letter-spacing:1.5px;color:#3C9968;text-transform:uppercase;font-weight:700;}

.tp-wafloat{position:fixed;right:20px;bottom:76px;z-index:900;display:flex;align-items:center;gap:8px;background:#25D366;color:#fff;border-radius:30px;padding:11px 18px;text-decoration:none;font-family:'Josefin Sans',sans-serif;font-weight:700;font-size:11px;letter-spacing:.1em;text-transform:uppercase;box-shadow:0 6px 28px rgba(37,211,102,.45);transition:all .25s;}
.tp-scrolltop{position:fixed;right:20px;bottom:20px;z-index:900;width:46px;height:46px;border-radius:12px;background:rgba(201,168,76,.15);border:1.5px solid rgba(193,156,60,.4);color:#A07828;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;transition:all .25s;box-shadow:0 4px 18px rgba(180,140,60,.18);}

.tp-loader{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:var(--bg);gap:18px;}
.tp-loader-hiero{font-size:48px;color:#C9A84C;animation:pulse 1.6s ease-in-out infinite;}
.tp-loader-txt{font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:4px;color:#9C7A3C;text-transform:uppercase;}

@media(max-width:1080px){
  .tp-body{grid-template-columns:1fr;padding:36px 22px;}
  .tp-thumbs{display:none;}
  .tp-hero-cnt{padding:0 22px 44px;}
  .tp-crumb,.tp-sticky{padding-left:22px;padding-right:22px;}
  .tp-nav{padding:0 18px;}
  .dn{display:none!important;}
  .dm{display:flex!important;}
}
@media(max-width:640px){
  .tp-incgrid{grid-template-columns:1fr;}
  .tp-icards{grid-template-columns:1fr;}
}
`}</style>
);

// ─── BOOKING WIDGET ────────────────────────────────────────────
function BookingWidget({tour, onBook, formatPrice}){
  const navigate = useNavigate();
  const [adults,setAdults] = useState(2);
  const [children,setChildren] = useState(0);
  const [date,setDate] = useState("");

  const price = tour.price?.discounted || tour.price?.original || 0;
  const originalPrice = tour.price?.original || 0;
  const adultAmt = adults * price;
  const childAmt = children * (price*0.5);
  const total = adultAmt + childAmt;
  const savings = tour.price?.discounted ? (originalPrice-price)*adults : 0;
  const savePercent = tour.price?.discounted ? Math.round((1-price/originalPrice)*100) : 0;

  const waMsg = encodeURIComponent(`Hi! I'd like to book "${tour.title}"\nDate: ${date||"TBD"}\nAdults: ${adults}, Children: ${children}\nTotal: ${formatPrice(total)}`);

  return(
    <div className="tp-widget">
      <div className="tp-wh">
        <div className="tp-wfrom">From</div>
        <div style={{display:"flex",alignItems:"baseline",gap:8,flexWrap:"wrap"}}>
          <div className="tp-wprice">{formatPrice(price)}</div>
          {tour.price?.discounted && <><span className="tp-wold">{formatPrice(originalPrice)}</span><span className="tp-wsave">Save {savePercent}%</span></>}
        </div>
        <div className="tp-wpp">per person</div>
        <div className="tp-wrating">
          <span className="tp-wstars">{"★".repeat(Math.min(5,Math.floor(tour.rating?.score||0)))}</span>
          <span className="tp-wrtxt">{tour.rating?.score} · {tour.rating?.reviews?.toLocaleString()} reviews</span>
        </div>
      </div>
      <div className="tp-wb">
        {savings>0 && <div className="tp-save-pill">🎉 You save {formatPrice(savings)} today</div>}
        <div className="tp-wf">
          <div className="tp-wfl">Select Travel Date</div>
          <input type="date" className="tp-wfi" value={date} min={new Date().toISOString().split("T")[0]} onChange={e=>setDate(e.target.value)}/>
        </div>
        <div className="tp-wfrow">
          <div className="tp-wf">
            <div className="tp-wfl">Adults</div>
            <select className="tp-wfs" value={adults} onChange={e=>setAdults(+e.target.value)}>
              {[1,2,3,4,5,6,7,8,9,10].map(n=><option key={n} value={n}>{n} Adult{n>1?"s":""}</option>)}
            </select>
          </div>
          <div className="tp-wf">
            <div className="tp-wfl">Children</div>
            <select className="tp-wfs" value={children} onChange={e=>setChildren(+e.target.value)}>
              {[0,1,2,3,4,5,6].map(n=><option key={n} value={n}>{n} Child{n!==1?"ren":""}</option>)}
            </select>
          </div>
        </div>
        <div className="tp-bk">
          <div className="tp-bkr"><span>{adults} Adult{adults>1?"s":""} × {formatPrice(price)}</span><span>{formatPrice(adultAmt)}</span></div>
          {children>0 && <div className="tp-bkr"><span>{children} Child{children!==1?"ren":""} × {formatPrice(price*.5)}</span><span>{formatPrice(childAmt)}</span></div>}
          <div className="tp-bkr tot"><span>Total</span><span className="amt">{formatPrice(total)}</span></div>
        </div>
        <button id="tp-main-book-btn" className="tp-bookbtn" onClick={()=>onBook({adults,children,date,total})}>✦ Book This Tour Now</button>
        <div style={{marginBottom:10}}>
          <button className="tp-bookbtn" onClick={()=>navigate(`/booking/${tour._id}`)}>🎫 Book Now</button>
        </div>
        <a href={`https://wa.me/201068257754?text=${waMsg}`} target="_blank" rel="noreferrer" className="tp-wabk">💬 Book via WhatsApp</a>
        <div className="tp-trust">
          {[["🔒","Secure Payment"],["✓","Free Cancel"],["⚡","Instant Confirm"],["🏆","Best Price"]].map(([ic,label])=>(
            <div key={label} className="tp-trust-i"><span className="tp-trust-ic">{ic}</span>{label}</div>
          ))}
        </div>
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
  const [tab,setTab] = useState("overview");
  const [sticky,setSticky] = useState(false);
  const [fav,setFav] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const [mMenu,setMMenu] = useState(false);
  const [langOpen,setLangOpen] = useState(false);
  const [curOpen,setCurOpen] = useState(false);
  const [uiLang,setUiLang] = useState(globalLang||"en");
  const [cur,setCur] = useState(globalCur||"USD");

  const fmtP = p => formatPrice ? formatPrice(p) : fmt(p,cur);

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
    setLoading(true);
    getTourById(tourId).then(data=>{setTour(data);setLoading(false);}).catch(()=>setLoading(false));
  }, [tourId]);

  useEffect(() => { window.scrollTo({top:0,behavior:"auto"}); }, [tourId]);

  useEffect(() => {
    const fn = () => { setSticky(window.scrollY>460); setScrolled(window.scrollY>52); };
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

  useEffect(() => {
    const imgs = getImages(tour);
    if(!imgs?.length) return;
    const id = setInterval(()=>setHeroImg(i=>(i+1)%imgs.length),5500);
    return ()=>clearInterval(id);
  }, [tour]);

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
  const score = tour.rating?.score || 0;
  const reviews = tour.rating?.reviews || 0;

  const handleBook = booking => {
    alert(`✦ Booking Received!\n\n${tour.title}\nDate: ${booking.date||"TBD"}\nGuests: ${booking.adults} adults, ${booking.children} children\nTotal: ${fmtP(booking.total)}`);
  };

  const TABS = [
    {id:"overview", label:"Overview"},
    {id:"includes", label:"Includes"},
    {id:"itinerary", label:"Itinerary"},
    {id:"reviews", label:"Reviews"},
  ];

  return (
    <div style={{background:"#FAF6ED",minHeight:"100vh",position:"relative"}}>
      <GlobalStyles/>
      <div className="tp-bg"/>
      <div id="gt-hidden" style={{display:"none"}}/>

      {/* STICKY BAR */}
      <div className={`tp-sticky${sticky?" on":""}`}>
        <span className="tp-sticky-name">{tour.title.length>55?tour.title.slice(0,55)+"…":tour.title}</span>
        <span style={{color:"#C9A84C",fontSize:12,letterSpacing:2}}>{"★".repeat(Math.min(5,Math.floor(score)))}</span>
        <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"#9C7A3C"}}>{score} ({reviews?.toLocaleString()})</span>
        <span className="tp-sticky-price">From {fmtP(price)}</span>
        <button className="tp-sticky-btn" onClick={()=>document.getElementById("tp-main-book-btn")?.click()}>Book Now ✦</button>
      </div>

      {/* NAVBAR */}
      <nav className="tp-nav" style={{background:scrolled?"rgba(250,246,237,.98)":"rgba(250,246,237,.9)"}}>
        <button className="tp-back" onClick={()=>navigate(-1)}>← Back</button>
        <div style={{display:"flex",alignItems:"center",gap:9,cursor:"pointer"}} onClick={()=>navigate("/")}>
          <AurevianLogo size={36}/>
          <span style={{fontFamily:"'Cinzel',serif",fontSize:13,fontWeight:700,background:"linear-gradient(135deg,#8B6010,#C9A84C,#8B6010)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"0.16em"}}>AUREVIAN</span>
        </div>
        <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:8}}>
          <div className="lang-dd" style={{position:"relative"}}>
            <button onClick={()=>{setLangOpen(!langOpen);setCurOpen(false);}} className="tp-sw-btn">
              <span style={{fontSize:14}}>{currentLangObj.flag}</span><span className="dn">{currentLangObj.label}</span><span style={{fontSize:9,opacity:.7}}>▾</span>
            </button>
            <LanguageSelector visible={langOpen} onClose={()=>setLangOpen(false)} currentLang={uiLang} onSelect={handleLangSelect}/>
          </div>
          <div className="cur-dd dn" style={{position:"relative"}}>
            <button onClick={()=>{setCurOpen(!curOpen);setLangOpen(false);}} className="tp-sw-btn">{CURR[cur]?.s} {cur} ▾</button>
            {curOpen&&<div className="tp-sw-drop">
              {Object.entries(CURR).map(([code,{l}])=>(
                <div key={code} className="dd" onClick={()=>{setCurrencyVal(code);setCurOpen(false);}} style={{padding:"10px 16px",cursor:"pointer",fontSize:11,color:cur===code?"#A07828":"rgba(44,26,6,.6)",fontWeight:cur===code?700:400,fontFamily:"'Josefin Sans',sans-serif"}}>{l}</div>
              ))}
            </div>}
          </div>
          <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="btn-ghost dn" style={{textDecoration:"none",display:"flex",alignItems:"center"}}>💬 WhatsApp</a>
          <button className="btn-gold" onClick={()=>document.getElementById("tp-main-book-btn")?.click()}>Book Now</button>
          <button className="dm" style={{display:"none",background:"rgba(201,168,76,.1)",border:"1.5px solid rgba(193,156,60,.3)",color:"#A07828",width:38,height:38,borderRadius:8,cursor:"pointer",fontSize:15,alignItems:"center",justifyContent:"center"}} onClick={()=>setMMenu(!mMenu)}>{mMenu?"✕":"☰"}</button>
        </div>
      </nav>

      {mMenu&&(
        <div style={{position:"fixed",top:66,left:0,right:0,background:"rgba(250,246,237,.99)",backdropFilter:"blur(28px)",zIndex:999,padding:"18px 22px 26px",borderBottom:"1px solid rgba(193,156,60,.2)",animation:"slideD .25s ease"}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
            <span style={{fontFamily:"'Josefin Sans',sans-serif",fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",fontWeight:700}}>💱 Currency</span>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:16}}>
            {Object.entries(CURR).slice(0,8).map(([code,{s}])=>(
              <button key={code} onClick={()=>{setCurrencyVal(code);setMMenu(false);}} style={{background:cur===code?"rgba(201,168,76,.2)":"rgba(201,168,76,.06)",border:"1.5px solid rgba(193,156,60,.2)",color:cur===code?"#A07828":"rgba(44,26,6,.55)",borderRadius:7,padding:"5px 10px",cursor:"pointer",fontSize:10,fontFamily:"'Josefin Sans',sans-serif"}}>{s} {code}</button>
            ))}
          </div>
          <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" style={{display:"block",textAlign:"center",background:"#25D366",color:"#fff",borderRadius:10,padding:"13px",textDecoration:"none",fontWeight:700,fontSize:12,fontFamily:"'Josefin Sans',sans-serif"}}>💬 WhatsApp Us</a>
        </div>
      )}

      {/* HERO */}
      <section className="tp-hero">
        <div className="tp-hero-bg" style={{backgroundImage:`url(${images[heroImg]})`}}/>
        <div className="tp-hero-ov"/>
        <div className="tp-hero-edge"/>
        <div className="tp-band"><span className="tp-band-txt">𓂀 &nbsp; {tour.category} &nbsp; 𓃭 &nbsp; Aurevian Tours &nbsp; 𓆑 &nbsp; {tour.title} &nbsp; 𓇋</span></div>
        <div className="tp-hero-badges">
          {tour.freeCancellation && <span className="tp-hbadge new">Free Cancel</span>}
          {tour.price?.discounted && <span className="tp-hbadge hot">Save {Math.round((1-tour.price.discounted/tour.price.original)*100)}%</span>}
          <span className="tp-hbadge">{tour.category}</span>
        </div>
        <div className="tp-hero-acts">
          <button className="tp-act" onClick={()=>navigator.share?.({title:tour.title,url:window.location.href})}>↗</button>
          <button className="tp-act" onClick={()=>setFav(v=>!v)} style={{color:fav?"#c0504a":"#A07828"}}>{fav?"♥":"♡"}</button>
        </div>
        <div className="tp-thumbs">
          {images.map((src,i)=>(
            <div key={i} className={`tp-thumb${heroImg===i?" on":""}`} onClick={()=>setHeroImg(i)}>
              <img src={src} alt={`View ${i+1}`} onError={e=>{e.target.src=`https://placehold.co/70x50/F3ECD8/A07828?text=${i+1}`;}}/>
            </div>
          ))}
        </div>
        <div className="tp-hero-cnt">
          <div className="tp-hero-ey">{tour.category} &nbsp;·&nbsp; Egypt</div>
          <h1 className="tp-htitle">{tour.title}</h1>
          <p className="tp-htagline">{tour.description?.slice(0,120)}...</p>
          <div className="tp-hmeta">
            {[{i:"⏱",t2:tour.duration},{i:"👥",t2:`${tour.travellers?.toLocaleString()} pax`},{i:"🗣️",t2:(tour.language||[]).slice(0,3).join(" · ")}].map((m,idx)=>(
              <span key={idx} style={{display:"flex",alignItems:"center",gap:14}}>
                <span className="tp-hmi"><span>{m.i}</span> {m.t2}</span>
                {idx<2 && <span className="tp-hsep"/>}
              </span>
            ))}
          </div>
          <div className="tp-hrating">
            <span className="tp-hstars">{"★".repeat(Math.min(5,Math.floor(score)))}</span>
            <span className="tp-hscore">{score}</span>
            <span className="tp-hcount">({reviews?.toLocaleString()} reviews)</span>
            <span className="tp-htop">✦ Top Rated</span>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="tp-crumb">
        <a href="/" onClick={e=>{e.preventDefault();navigate("/")}}>Home</a>
        <span style={{opacity:.4}}>›</span>
        <a href="/" onClick={e=>{e.preventDefault();navigate(-1)}}>{tour.category}</a>
        <span style={{opacity:.4}}>›</span>
        <span className="cur">{tour.title}</span>
      </div>

      {/* QUICK BAR */}
      <div className="tp-qbar">
        {[
          {ic:"⏱",l:"Duration",v:tour.duration},
          {ic:"👥",l:"Group Size",v:`Max ${tour.travellers?.toLocaleString()} people`},
          {ic:"🗣️",l:"Languages",v:(tour.language||[]).slice(0,3).join(" · ")},
          {ic:"🚗",l:"Hotel Pickup",v:"Included"},
          {ic:"🎫",l:"Entry Tickets",v:"Included"},
          {ic:"✓",l:"Free Cancel",v:tour.freeCancellation?"✔":"✗"},
        ].map(q=>(
          <div key={q.l} className="tp-qi"><span className="tp-qi-ic">{q.ic}</span><div><div className="tp-qi-l">{q.l}</div><div className="tp-qi-v">{q.v}</div></div></div>
        ))}
      </div>

      {/* BODY */}
      <div className="tp-body">
        <div>
          <h1 className="tp-main-title">{tour.title}</h1>
          <div className="tp-rrow">
            <span className="tp-stars">{"★".repeat(Math.min(5,Math.floor(score)))}{"☆".repeat(Math.max(0,5-Math.floor(score)))}</span>
            <span className="tp-score">{score}</span>
            <span className="tp-rcount">({reviews?.toLocaleString()} verified reviews)</span>
            <span className="tp-top-tag">✦ Top Rated</span>
          </div>

          <div className="tp-tabs">
            {TABS.map(tb=>(<button key={tb.id} className={`tp-tab${tab===tb.id?" on":""}`} onClick={()=>setTab(tb.id)}>{tb.label}</button>))}
          </div>

          {/* OVERVIEW */}
          <div className={`tp-panel${tab==="overview"?" on":""}`}>
            <p className="tp-body-txt">{tour.description}</p>
            {(tour.highlights||[]).length>0 && (
              <div className="tp-hls">
                <div className="tp-sec-h">Tour Highlights</div>
                {tour.highlights.map((h,i)=>(<div key={i} className="tp-hl"><div className="tp-hl-ic">◆</div><div className="tp-hl-tx">{h}</div></div>))}
              </div>
            )}
            <div className="tp-icards">
              {[
                {ic:"⏱",l:"Duration",v:tour.duration},
                {ic:"👥",l:"Group Size",v:`Max ${tour.travellers?.toLocaleString()}`},
                {ic:"🗣️",l:"Languages",v:(tour.language||[]).join(", ")},
                {ic:"✓",l:"Free Cancel",v:tour.freeCancellation?"✔ Yes":"✗ No"},
              ].map(c=>(<div key={c.l} className="tp-icard"><div className="tp-icard-ic">{c.ic}</div><div className="tp-icard-l">{c.l}</div><div className="tp-icard-v">{c.v}</div></div>))}
            </div>
          </div>

          {/* INCLUDES */}
          <div className={`tp-panel${tab==="includes"?" on":""}`}>
            <div className="tp-sec-h">What's Included</div>
            <div className="tp-incgrid">
              {(tour.includes||[]).map((inc,i)=>(<div key={i} className="tp-inc"><span className="tp-inc-ic">✓</span><span className="tp-inc-l">{inc}</span></div>))}
            </div>
            {(tour.excludes||[]).length>0 && (
              <>
                <div className="tp-sec-h" style={{marginTop:30}}>Not Included</div>
                <ul className="tp-exclist">{tour.excludes.map((e,i)=><li key={i} className="tp-exc">{e}</li>)}</ul>
              </>
            )}
          </div>

          {/* ITINERARY */}
          <div className={`tp-panel${tab==="itinerary"?" on":""}`}>
            <div className="tp-sec-h">Detailed Itinerary</div>
            {(tour.itinerary||[]).length>0 ? (
              <div className="tp-itin">
                {tour.itinerary.map((step,i)=>(
                  <div key={i} className="tp-step">
                    <div className="tp-step-left"><div className="tp-step-marker">{step.icon||i+1}</div><div className="tp-step-line"/></div>
                    <div className="tp-step-cnt">
                      <div className="tp-step-time">⏱ {step.time}</div>
                      <div className="tp-step-title">{step.title}</div>
                      <div className="tp-step-desc">{step.description}</div>
                      {(step.tags||[]).length>0 && <div className="tp-step-tags">{step.tags.map(tg=><span key={tg} className="tp-stag">{tg}</span>)}</div>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (<div style={{fontFamily:"'Cormorant Garamond',serif",color:"#9C7A3C",fontSize:16,padding:"20px 0"}}>{tour.description}</div>)}
          </div>

          {/* REVIEWS */}
          <div className={`tp-panel${tab==="reviews"?" on":""}`}>
            <div className="tp-rev-sum">
              <div style={{textAlign:"center",minWidth:96}}>
                <div className="tp-rbig">{score}</div>
                <div className="tp-rof">out of 5.0</div>
                <div className="tp-rbig-stars">{"★".repeat(Math.min(5,Math.floor(score)))}</div>
                <div className="tp-rtotal">{reviews?.toLocaleString()} reviews</div>
              </div>
              <div className="tp-rbars">
                {[{l:"Guide Quality",p:98},{l:"Value for Money",p:94},{l:"Organisation",p:96},{l:"Experience",p:99},{l:"Transport",p:93}].map(b=>(
                  <div key={b.l} className="tp-rbar-row"><span className="tp-rbar-l">{b.l}</span><div className="tp-rbar-track"><div className="tp-rbar-fill" style={{width:`${b.p}%`}}/></div><span className="tp-rbar-pct">{b.p}%</span></div>
                ))}
              </div>
            </div>
            {(tour.reviews||[]).length>0 ? (
              <div className="tp-revlist">
                {tour.reviews.map((rev,i)=>(
                  <div key={i} className="tp-revc">
                    <div className="tp-rev-q">"</div>
                    <div className="tp-rev-head">
                      <div className="tp-rev-av">{rev.avatar||"👤"}</div>
                      <div><div className="tp-rev-name">{rev.name}</div><div className="tp-rev-loc">{rev.location}</div><div className="tp-rev-stars">{"★".repeat(rev.rating)}</div></div>
                      <div className="tp-rev-date">{rev.date}</div>
                    </div>
                    <div className="tp-rev-txt">{rev.text}</div>
                  </div>
                ))}
              </div>
            ) : (<div style={{fontFamily:"'Cormorant Garamond',serif",color:"#9C7A3C",fontSize:16,padding:"20px 0",fontStyle:"italic"}}>No reviews yet — be the first to review this tour!</div>)}
          </div>
        </div>

        <aside><BookingWidget tour={tour} onBook={handleBook} formatPrice={fmtP}/></aside>
      </div>

      {/* FLOATING */}
      <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="tp-wafloat"><span style={{fontSize:16}}>💬</span> WhatsApp Us</a>
      <button className="tp-scrolltop" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>▲</button>
    </div>
  );
}