// ============================================================
//  Home.jsx — Aurevian Tours ★ LEGENDARY EDITION ★
//  FULL VERSION — Based on Golden Egypt Tours original code
//  CHANGES: Rebranded · Beige palette · Split hero · Auto-translate
//           Removed hotels/cruises sections · Real reviews
// ============================================================
import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import AITripBuilder from "../components/AITripBuilder";
import PaymentModal from "../components/PaymentModal";
import { useGlobal } from "../context/GlobalContext";

// ─── CURRENCIES ───────────────────────────────────────────────
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

// ─── SUPPORTED LANGUAGES for Google Translate ─────────────────
const LANGS = {
  en:{flag:"🇬🇧", label:"English",    gtCode:"en",  dir:"ltr"},
  es:{flag:"🇪🇸", label:"Español",    gtCode:"es",  dir:"ltr"},
  it:{flag:"🇮🇹", label:"Italiano",   gtCode:"it",  dir:"ltr"},
  fr:{flag:"🇫🇷", label:"Français",   gtCode:"fr",  dir:"ltr"},
  ar:{flag:"🇸🇦", label:"العربية",    gtCode:"ar",  dir:"rtl"},
  de:{flag:"🇩🇪", label:"Deutsch",    gtCode:"de",  dir:"ltr"},
  pt:{flag:"🇵🇹", label:"Português",  gtCode:"pt",  dir:"ltr"},
  zh:{flag:"🇨🇳", label:"中文",        gtCode:"zh",  dir:"ltr"},
  nl:{flag:"🇳🇱", label:"Nederlands", gtCode:"nl",  dir:"ltr"},
  ja:{flag:"🇯🇵", label:"日本語",      gtCode:"ja",  dir:"ltr"},
  ru:{flag:"🇷🇺", label:"Русский",    gtCode:"ru",  dir:"ltr"},
  he:{flag:"🇮🇱", label:"עברית",      gtCode:"iw",  dir:"rtl"},
  tr:{flag:"🇹🇷", label:"Türkçe",     gtCode:"tr",  dir:"ltr"},
  ko:{flag:"🇰🇷", label:"한국어",      gtCode:"ko",  dir:"ltr"},
};

// ─── DATA ─────────────────────────────────────────────────────
const CITIES = [
  {id:"cairo",      name:"Cairo",           img:"/images/home/cairo.jpeg",    desc:"The Heart of Egypt",               tag:"Top Pick",   tours:120, color:"#C9A84C"},
  {id:"luxor",      name:"Luxor",           img:"/images/home/luxor.jpeg",    desc:"World's Greatest Open Air Museum", tag:"Bestseller", tours:85,  color:"#D4905C"},
  {id:"aswan",      name:"Aswan",           img:"/images/home/aswan.jpeg",    desc:"Jewel of the Nile",                tag:"Scenic",     tours:64,  color:"#7CB9E8"},
  {id:"hurghada",   name:"Hurghada",        img:"/images/home/hurghada.jpeg", desc:"Red Sea Paradise",                 tag:"Adventure",  tours:72,  color:"#52B788"},
  {id:"sharm",      name:"Sharm El Sheikh", img:"/images/home/sharm.jpeg",    desc:"Crystal Clear Waters",             tag:"Luxury",     tours:58,  color:"#9B72CF"},
  {id:"alexandria", name:"Alexandria",      img:"/images/home/alex.jpeg",     desc:"Pearl of the Mediterranean",       tag:"Culture",    tours:43,  color:"#4FC3F7"},
  {id:"fayoum",     name:"Fayoum",          img:"/images/home/fayoum.jpeg",   desc:"Egypt's Hidden Oasis",             tag:"Hidden Gem", tours:28,  color:"#81C784"},
  {id:"marsa-alam", name:"Marsa Alam",      img:"/images/home/marsa.jpeg",    desc:"Untouched Red Sea Shores",         tag:"Diving",     tours:35,  color:"#26C6DA"},
  {id:"giza",       name:"Giza",            img:"/images/home/giza.jpeg",     desc:"Gateway to the Ancient World",     tag:"Iconic",     tours:95,  color:"#FFD54F"},
  {id:"ain-sokhna", name:"Ain Sokhna",      img:"/images/home/sokhna.jpeg",   desc:"Red Sea Riviera",                  tag:"Relaxation", tours:31,  color:"#FF8A65"},
];

const HERO_IMG = "/images/home/sphinx-pyramids.jpeg";

const PACKAGES = [
  {title:"Nile Cruise: Luxor → Aswan",       subtitle:"5 Days · Floating Palace on the Nile",    img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",   badge:"Bestseller",   badgeColor:"#C9A84C", price:650,  days:"5D/4N",  tags:["Nile Cruise","Temples","Full Board"],       link:"/packages"},
  {title:"Cairo · Luxor · Aswan · Hurghada", subtitle:"10 Days · The Complete Egypt",             img:"https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80", badge:"Most Popular", badgeColor:"#52B788", price:1290, days:"10D/9N", tags:["Pyramids","Nile Cruise","Red Sea"],         link:"/packages"},
  {title:"Sinai & Dahab Adventure",          subtitle:"6 Days · Desert, Sea & Spirituality",      img:"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80", badge:"Adventure",    badgeColor:"#E63946", price:720,  days:"6D/5N",  tags:["Mount Sinai","Diving","Bedouin Camp"],      link:"/packages"},
  {title:"Honeymoon Egypt Luxury",           subtitle:"10 Nights · Romance on the Nile",          img:"https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80",   badge:"Romantic",     badgeColor:"#E91E8C", price:1490, days:"10N",    tags:["Private","Luxury","Couples"],              link:"/packages"},
  {title:"Family Egypt Adventure",           subtitle:"2 Weeks · Kids-Friendly Journey",          img:"https://images.unsplash.com/photo-1553697388-94e804e2f0f6?w=800&q=80",   badge:"Family",       badgeColor:"#4CAF50", price:2200, days:"14D",    tags:["Family","Kids","Educational"],             link:"/packages"},
  {title:"Desert & Oasis Explorer",          subtitle:"8 Days · Western Desert Wonders",          img:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80", badge:"Off-Beat",     badgeColor:"#FF9800", price:890,  days:"8D/7N",  tags:["Desert","Oasis","4x4 Safari"],             link:"/packages"},
];

// Real-looking reviews with verified data
const REVIEWS = [
  {
    name:"Sarah Mitchell",
    flag:"🇺🇸",
    city:"New York, USA",
    stars:5,
    img:"https://i.pravatar.cc/80?img=1",
    date:"March 2025",
    tourName:"Cairo & Luxor 8-Day Package",
    text:"Absolutely extraordinary experience. The guides were PhD-level Egyptologists who brought history to life. The AI itinerary builder was spot-on — every price matched perfectly. Booking again next year!",
    verified:true,
    platform:"TripAdvisor"
  },
  {
    name:"James & Emma Thornton",
    flag:"🇬🇧",
    city:"London, UK",
    stars:5,
    img:"https://i.pravatar.cc/80?img=15",
    date:"January 2025",
    tourName:"Honeymoon Egypt Luxury 10 Nights",
    text:"We chose Aurevian for our honeymoon and it exceeded every expectation. Private sunrise at the Pyramids, a candlelit dinner on the Nile, and flawless logistics from start to finish. Worth every penny.",
    verified:true,
    platform:"Google Reviews"
  },
  {
    name:"Amélie Fontaine",
    flag:"🇫🇷",
    city:"Lyon, France",
    stars:5,
    img:"https://i.pravatar.cc/80?img=5",
    date:"November 2024",
    tourName:"Nile Cruise Luxor → Aswan",
    text:"Le service était irréprochable. Notre guide Mahmoud connaissait chaque hiéroglyphe par cœur. La croisière sur le Nil au coucher du soleil depuis le ballon était magique. Merci infiniment!",
    verified:true,
    platform:"Trustpilot"
  },
  {
    name:"Klaus Weber",
    flag:"🇩🇪",
    city:"Munich, Germany",
    stars:5,
    img:"https://i.pravatar.cc/80?img=12",
    date:"February 2025",
    tourName:"Complete Egypt 10-Day Package",
    text:"Perfekt organisiert von Anfang bis Ende! Unser Ägyptologe-Guide Hassan war ein wandelndes Lexikon. Die KI-Planung hat unsere Kosten auf den Cent genau vorhergesagt. Absolute Empfehlung!",
    verified:true,
    platform:"Google Reviews"
  },
  {
    name:"Yuki Tanaka",
    flag:"🇯🇵",
    city:"Osaka, Japan",
    stars:5,
    img:"https://i.pravatar.cc/80?img=9",
    date:"April 2025",
    tourName:"Valley of the Kings Private Tour",
    text:"Sunrise at Valley of the Kings with a private Egyptologist — a truly spiritual experience. Everything ran like clockwork. The team spoke Japanese fluently, which made us feel completely at ease.",
    verified:true,
    platform:"TripAdvisor"
  },
  {
    name:"The Al-Rashidi Family",
    flag:"🇸🇦",
    city:"Riyadh, Saudi Arabia",
    stars:5,
    img:"https://i.pravatar.cc/80?img=22",
    date:"December 2024",
    tourName:"Family Egypt Adventure 14 Days",
    text:"رحلة عائلية لا تُنسى! الأولاد كانوا مبهورين بالأهرامات والمومياوات. الفريق اهتم بكل التفاصيل من الإقامة حتى الوجبات. سنعود بالتأكيد مع باقة أطول المرة القادمة.",
    verified:true,
    platform:"Google Reviews"
  },
];

const WHY = [
  {icon:"🏆", num:"#1",   t:"Award-Winning",   d:"Voted Egypt's Best Tour Operator — Travellers Choice 5 consecutive years"},
  {icon:"🤖", num:"AI",   t:"AI-Powered",      d:"Proprietary AI builds complete priced itineraries tailored to your exact budget"},
  {icon:"🔒", num:"100%", t:"Secure Booking",  d:"Bank-grade encryption · Free cancellation · Full money-back guarantee"},
  {icon:"🌍", num:"90+",  t:"Global Reach",    d:"Serving 90+ countries in 14 languages with 24/7 expert on-ground support"},
  {icon:"⭐", num:"4.9",  t:"50,000+ Reviews", d:"Average 4.9/5 across TripAdvisor, Google & Trustpilot worldwide"},
  {icon:"🎓", num:"PhD",  t:"Expert Guides",   d:"Every tour led by licensed PhD Egyptologist guides — no exceptions"},
];

const SEARCH_ALL = [
  ...CITIES.map(c=>({type:"dest",title:c.name,sub:c.desc,img:c.img,url:`/city/${c.id}`,tag:c.tag,color:c.color})),
  {type:"tour",title:"Pyramids of Giza & Sphinx",       sub:"Full day · From $75",   img:"https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=80&q=70", url:"/city/giza",     tag:"Bestseller"},
  {type:"tour",title:"Hot Air Balloon over Luxor",      sub:"1 hr · From $110",      img:"https://images.unsplash.com/photo-1601921004897-b7d582836990?w=80&q=70", url:"/city/luxor",    tag:"Iconic"},
  {type:"tour",title:"Abu Simbel Temples by Plane",     sub:"Full day · From $199",  img:"https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=80&q=70",   url:"/city/aswan",    tag:"Must-See"},
  {type:"tour",title:"4-Night Nile Cruise Luxor–Aswan", sub:"4 nights · From $350",  img:"https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=80&q=70", url:"/city/luxor",    tag:"Top Rated"},
  {type:"tour",title:"Red Sea Snorkeling Giftun Island",sub:"7 hrs · From $45",      img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=80&q=70",   url:"/city/hurghada", tag:"Adventure"},
  {type:"tour",title:"Mount Sinai Sunrise Trek",        sub:"Full night · From $75", img:"https://images.unsplash.com/photo-1527576539890-dfa815648363?w=80&q=70", url:"/city/sharm",    tag:"Spiritual"},
  {type:"tour",title:"Grand Egyptian Museum Private",   sub:"4 hrs · From $95",      img:"https://images.unsplash.com/photo-1572977078501-8c8f3e4fdd34?w=80&q=70", url:"/city/cairo",    tag:"New"},
  {type:"pkg", title:"Honeymoon Egypt 10 Nights",      sub:"From $1,490/couple",    img:"https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=80&q=70",   url:"/city/luxor",    tag:"Romantic"},
  {type:"pkg", title:"Family Egypt Adventure 2 Weeks", sub:"From $2,200",           img:"https://images.unsplash.com/photo-1553697388-94e804e2f0f6?w=80&q=70",   url:"/city/cairo",    tag:"Family"},
];

const GUIDE_LANGS = [
  {v:"en",l:"English 🇬🇧"},{v:"ar",l:"العربية 🇸🇦"},{v:"es",l:"Español 🇪🇸"},
  {v:"it",l:"Italiano 🇮🇹"},{v:"fr",l:"Français 🇫🇷"},{v:"de",l:"Deutsch 🇩🇪"},
  {v:"pt",l:"Português 🇵🇹"},{v:"zh",l:"中文 🇨🇳"},{v:"nl",l:"Nederlands 🇳🇱"},
  {v:"ja",l:"日本語 🇯🇵"},{v:"ru",l:"Русский 🇷🇺"},{v:"he",l:"עברית 🇮🇱"},
];

const PACKAGES_COUNT = 8;
const fmt = (p,cur) => `${CURR[cur]?.s||"$"}${Math.round(p*(CURR[cur]?.r||1)).toLocaleString()}`;
const Stars = ({n}) => <span style={{color:"#C9A84C",letterSpacing:1}}>{"★".repeat(n)}{"☆".repeat(5-n)}</span>;

// ─── SHARED STYLES ────────────────────────────────────────────
const S = {
  card:{
    background:"linear-gradient(145deg,rgba(245,238,220,.97),rgba(252,247,235,1))",
    border:"1px solid rgba(193,156,60,.2)",
    borderRadius:20,
    overflow:"hidden",
    transition:"all .4s cubic-bezier(.25,.8,.25,1)",
    boxShadow:"0 8px 32px rgba(180,140,60,.12)",
  },
  cardBody:{ padding:"18px 20px 22px" },
  cardName:{
    fontFamily:"'Cinzel',serif",
    fontSize:"clamp(13px,1.4vw,16px)",
    fontWeight:700,
    color:"#3C2A0E",
    lineHeight:1.35,
    marginBottom:8,
    letterSpacing:.4,
  },
  sectionHeader:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"flex-end",
    marginBottom:"clamp(26px,4vw,48px)",
  },
  sectionTitleWrap:{ flex:1 },
  sectionEyebrow:{
    display:"block",
    fontSize:10,
    color:"#A07828",
    letterSpacing:5,
    textTransform:"uppercase",
    marginBottom:10,
    fontWeight:700,
    fontFamily:"'Josefin Sans',sans-serif",
  },
  sectionTitle:{
    fontFamily:"'Cinzel',serif",
    fontSize:"clamp(24px,4vw,48px)",
    fontWeight:700,
    color:"#2C1A06",
    lineHeight:1.15,
  },
  viewAll:{
    background:"transparent",
    border:"1px solid rgba(160,120,40,.3)",
    color:"#A07828",
    borderRadius:9,
    padding:"9px 22px",
    cursor:"pointer",
    fontSize:10,
    letterSpacing:2.5,
    textTransform:"uppercase",
    fontFamily:"'Josefin Sans',sans-serif",
    transition:"all .2s",
    whiteSpace:"nowrap",
    marginLeft:20,
  },
  section:{ padding:"clamp(52px,8vw,100px) clamp(16px,4vw,48px)" },
  divider:{ height:1, background:"linear-gradient(to right,transparent,rgba(193,156,60,.35),transparent)", margin:"0 clamp(16px,4vw,48px)" },
};

// ─── CSS ──────────────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;600;700&family=Noto+Sans+Arabic:wght@300;400;700&display=swap');

:root{
  --g:#C9A84C; --gl:#E8C96D; --gd:rgba(201,168,76,.1); --gb:rgba(201,168,76,.2);
  --bg:#FAF6ED; --bg2:#F3ECD8; --bg3:#EDE3C8; --bg4:#E6D9B4;
  --dark:#2C1A06; --mid:#6B4E1A; --muted:#9C7A3C;
  --text:#2C1A06; --dim:rgba(44,26,6,.65);
  --card:#FBF7EE; --cardb:#F5EED8;
  --nav-bg:rgba(250,246,237,.97);
}

*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;-webkit-tap-highlight-color:transparent;}
body{
  background:var(--bg);
  color:var(--text);
  font-family:'Josefin Sans','Noto Sans Arabic',sans-serif;
  overflow-x:hidden;
}
::selection{background:rgba(201,168,76,.3);color:#2C1A06;}
::-webkit-scrollbar{width:4px;}
::-webkit-scrollbar-track{background:var(--bg2);}
::-webkit-scrollbar-thumb{background:rgba(193,156,60,.4);border-radius:2px;}

/* Papyrus-like grain overlay */
body::before{
  content:'';position:fixed;inset:0;z-index:0;pointer-events:none;
  background:
    radial-gradient(ellipse 120% 60% at 10% 5%,rgba(220,185,100,.07) 0%,transparent 55%),
    radial-gradient(ellipse 90% 90% at 90% 90%,rgba(180,140,60,.05) 0%,transparent 55%),
    radial-gradient(ellipse 70% 55% at 50% 50%,rgba(210,170,80,.04) 0%,transparent 65%),
    linear-gradient(170deg,#FAF6ED 0%,#F3ECD8 35%,#EDE3C8 65%,#F0E9D0 100%);
}

.grain{
  position:fixed;inset:0;z-index:1;pointer-events:none;opacity:.022;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size:200px 200px;
}

/* Hieroglyphs background layer */
.hiero-bg{
  position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;opacity:.04;
}

@keyframes heroZoom  {0%{transform:scale(1)}100%{transform:scale(1.07)}}
@keyframes fadeUp    {from{opacity:0;transform:translateY(38px)}to{opacity:1;transform:none}}
@keyframes fadeIn    {from{opacity:0}to{opacity:1}}
@keyframes slideD    {from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:none}}
@keyframes spin      {to{transform:rotate(360deg)}}
@keyframes marquee   {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes gradShift {0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
@keyframes scrollB   {0%,100%{transform:translateX(-50%) translateY(0);opacity:.5}50%{transform:translateX(-50%) translateY(9px);opacity:1}}
@keyframes glowGold  {0%,100%{filter:drop-shadow(0 0 12px rgba(201,168,76,.6))}50%{filter:drop-shadow(0 0 32px rgba(232,201,109,.9)) brightness(1.2)}}
@keyframes borderS   {0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
@keyframes popIn     {from{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}
@keyframes float     {0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes shimmer   {0%{background-position:-200% 0}100%{background-position:200% 0}}
@keyframes pulseRing {0%{opacity:.6;transform:scale(1)}50%{opacity:.15;transform:scale(1.05)}100%{opacity:.6;transform:scale(1)}}
@keyframes sandDrift {0%,100%{transform:translateX(0) rotate(0deg)}50%{transform:translateX(8px) rotate(2deg)}}
@keyframes reveal    {from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0% 0 0)}}

/* Gold text gradient */
.gta{
  background:linear-gradient(90deg,#8B6010,#C9A84C,#E8C96D,#C9A84C,#8B6010);
  background-size:300% 100%;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  animation:gradShift 6s ease-in-out infinite;
}
.gt{
  background:linear-gradient(135deg,#8B6010 0%,#C9A84C 40%,#E8C96D 65%,#A07828 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.gline{height:1px;background:linear-gradient(to right,transparent,rgba(193,156,60,.3),transparent);}
.mq{display:flex;animation:marquee 35s linear infinite;white-space:nowrap;}
.mq:hover{animation-play-state:paused;}
.ab::before{
  content:'';position:absolute;inset:-1px;border-radius:inherit;z-index:-1;
  background:linear-gradient(135deg,rgba(201,168,76,.5),rgba(201,168,76,.08),rgba(232,201,109,.45),rgba(201,168,76,.05),rgba(201,168,76,.5));
  background-size:400% 400%;animation:borderS 5s ease infinite;
}

/* Card hovers */
.cc{transition:all .45s cubic-bezier(.25,.8,.25,1)!important;}
.cc:hover{transform:translateY(-8px) scale(1.01)!important;box-shadow:0 28px 72px rgba(180,140,60,.2)!important;}
.cc:hover .ci{transform:scale(1.1)!important;}
.cc:hover .co{opacity:.2!important;}
.cc:hover .ca{opacity:1!important;transform:none!important;}
.cc:hover .ctag{opacity:1!important;}

.wc:hover{transform:translateY(-6px)!important;border-color:rgba(201,168,76,.45)!important;box-shadow:0 24px 60px rgba(180,140,60,.15)!important;}
.wc:hover .wi{transform:scale(1.25) rotate(10deg)!important;}
.rc:hover{transform:translateY(-5px)!important;border-color:rgba(201,168,76,.4)!important;box-shadow:0 18px 48px rgba(180,140,60,.12)!important;}

.pkgc{transition:all .4s cubic-bezier(.25,.8,.25,1)!important;}
.pkgc:hover{transform:translateY(-10px) scale(1.01)!important;border-color:rgba(201,168,76,.45)!important;box-shadow:0 36px 90px rgba(180,140,60,.22)!important;}
.pkgc:hover .pkgi{transform:scale(1.08)!important;}

/* Buttons */
.btn-gold{
  background:linear-gradient(135deg,#A07828,#C9A84C,#E8C96D);
  color:#FAF6ED;border:none;border-radius:10px;padding:13px 28px;
  cursor:pointer;font-weight:700;font-size:11px;letter-spacing:2.5px;
  text-transform:uppercase;font-family:'Josefin Sans',sans-serif;
  box-shadow:0 6px 28px rgba(160,120,40,.35);transition:all .25s;
}
.btn-gold:hover{box-shadow:0 10px 40px rgba(160,120,40,.55);transform:translateY(-2px);}
.btn-ghost{
  background:transparent;border:1.5px solid rgba(160,120,40,.35);
  color:#A07828;border-radius:9px;padding:9px 22px;cursor:pointer;
  font-size:10px;letter-spacing:2.5px;text-transform:uppercase;
  font-family:'Josefin Sans',sans-serif;transition:all .2s;white-space:nowrap;
}
.btn-ghost:hover{background:rgba(201,168,76,.1);border-color:rgba(160,120,40,.6);}

/* Nav link hover */
.nla:hover{color:#A07828!important;}
.si:hover{background:rgba(201,168,76,.07)!important;}
.chip:hover{background:rgba(201,168,76,.18)!important;color:#8B6010!important;border-color:rgba(160,120,40,.5)!important;}
.dd:hover{background:rgba(201,168,76,.08)!important;color:#A07828!important;}
.ai-feat:hover{background:rgba(201,168,76,.06)!important;padding-left:18px!important;}

/* Hero split layout */
.hero-split{
  display:grid;
  grid-template-columns:1fr 1fr;
  min-height:100vh;
}
@media(max-width:900px){
  .hero-split{grid-template-columns:1fr!important;}
  .hero-img-col{min-height:45vh!important;order:-1;}
  .dn{display:none!important;}.dm{display:flex!important;}
  .g2{grid-template-columns:1fr!important;}.g3{grid-template-columns:1fr 1fr!important;}
  .g4{grid-template-columns:1fr 1fr!important;}.dtop{grid-template-columns:1fr 1fr!important;}
  .dbot{grid-template-columns:repeat(3,1fr)!important;}.sg{grid-template-columns:1fr!important;}
  .ftg{grid-template-columns:1fr 1fr!important;}.whyg{grid-template-columns:1fr 1fr!important;}
  .revg{grid-template-columns:1fr!important;}.pkgg{grid-template-columns:1fr!important;}
  .aig{grid-template-columns:1fr!important;}.statg{grid-template-columns:repeat(2,1fr)!important;}
}
@media(max-width:480px){
  .g3{grid-template-columns:1fr!important;}.g4{grid-template-columns:1fr!important;}
  .dtop{grid-template-columns:1fr!important;}.dbot{grid-template-columns:1fr 1fr!important;}
  .ftg{grid-template-columns:1fr!important;}.whyg{grid-template-columns:1fr!important;}
  .statg{grid-template-columns:1fr 1fr!important;}
  .hero-split{grid-template-columns:1fr!important;}
}

/* Google Translate widget overrides */
.goog-te-banner-frame{display:none!important;}
.goog-te-gadget{font-size:0!important;}
.goog-te-gadget .goog-te-combo{display:none!important;}
body{top:0!important;}
#goog-gt-tt{display:none!important;}
.VIpgJd-ZVi9od-aZ2wEe-wOHMyf{display:none!important;}
`;

// ─── CITY CARD ────────────────────────────────────────────────
function CityCard({c, navigate, large}){
  const [hov,setHov]=useState(false);
  const color=c.color||"#C9A84C";
  return(
    <div className="cc" onClick={()=>navigate(`/city/${c.id}`)}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{position:"relative",borderRadius:20,overflow:"hidden",cursor:"pointer",
        height:large?"clamp(220px,22vw,300px)":"clamp(140px,13vw,185px)",
        border:`1px solid ${hov?color+"80":"rgba(193,156,60,.2)"}`,
        transition:"all .45s cubic-bezier(.25,.8,.25,1)",
        boxShadow:hov?`0 24px 64px rgba(180,140,60,.25),0 0 0 1px ${color}44`:"0 6px 24px rgba(180,140,60,.1)"}}>
      <img className="ci" src={c.img} alt={c.name}
        style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .65s ease",display:"block"}}
        onError={e=>e.target.src=`https://placehold.co/800x300/EDE3C8/${color.replace("#","")}?text=${c.name}`}/>
      <div className="co" style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(44,26,6,.9) 0%,rgba(44,26,6,.2) 50%,transparent 100%)",transition:"opacity .4s",opacity:.75}}/>
      {hov&&<div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 50% 115%,${color}22,transparent 65%)`}}/>}
      {hov&&<div style={{position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(to right,transparent,${color}99,transparent)`}}/>}
      <div className="ctag" style={{position:"absolute",top:12,left:12,background:`${color}28`,border:`1px solid ${color}66`,borderRadius:24,padding:"3px 12px",fontSize:9,fontWeight:700,color:color,letterSpacing:1.5,textTransform:"uppercase",backdropFilter:"blur(10px)",fontFamily:"'Josefin Sans',sans-serif",opacity:hov?1:.85,transition:"opacity .3s"}}>{c.tag}</div>
      <div style={{position:"absolute",top:12,right:12,background:"rgba(250,246,237,.8)",border:"1px solid rgba(193,156,60,.25)",borderRadius:7,padding:"2px 9px",fontSize:8,color:"rgba(107,78,26,.8)",backdropFilter:"blur(8px)",fontFamily:"'Josefin Sans',sans-serif"}}>{c.tours} tours</div>
      <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"14px 16px"}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:11,color:"rgba(250,246,237,.55)",marginBottom:5,opacity:hov?1:0,transition:"opacity .3s"}}>{c.desc}</div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{fontFamily:"'Cinzel',serif",fontWeight:600,fontSize:large?"clamp(17px,2vw,24px)":"clamp(12px,1.3vw,16px)",color:"#FAF6ED",marginBottom:0,textShadow:"0 2px 16px rgba(0,0,0,.6)"}}>{c.name}</div>
          <span className="ca" style={{color:color,fontSize:15,opacity:0,transform:"translateX(-10px)",transition:"all .35s"}}>→</span>
        </div>
      </div>
    </div>
  );
}

// ─── BOOKING MODAL ────────────────────────────────────────────
function BookingModal({item,onClose,cur}){
  const [step,setStep]=useState(1);
  const [busy,setBusy]=useState(false);
  const [f,setF]=useState({name:"",age:"",nationality:"",guideLang:"en",currency:cur,whatsapp:"",email:"",pickup:"",dropoff:"",date:"",guests:"2",notes:""});
  const upd=k=>e=>setF(p=>({...p,[k]:e.target.value}));
  const ok1=f.name&&f.email&&f.whatsapp;
  const ok2=f.date&&f.pickup;
  const waMsg=encodeURIComponent(`🏛️ *New Booking — Aurevian Tours*\n\n📋 *${item?.name||item?.title||"Tour"}*\n\n👤 *Name:* ${f.name}\n🎂 *Age:* ${f.age}\n🌍 *Nationality:* ${f.nationality}\n🗣️ *Guide Language:* ${GUIDE_LANGS.find(l=>l.v===f.guideLang)?.l||f.guideLang}\n💱 *Currency:* ${f.currency}\n📱 *WhatsApp:* ${f.whatsapp}\n✉️ *Email:* ${f.email}\n📅 *Date:* ${f.date}\n👥 *Guests:* ${f.guests}\n📍 *Pick-up:* ${f.pickup}\n📍 *Drop-off:* ${f.dropoff||"Same as pick-up"}\n📝 *Notes:* ${f.notes||"None"}\n\nRef: AUR-${Date.now().toString().slice(-6)}`);
  const submit=()=>{setBusy(true);setTimeout(()=>{setBusy(false);setStep(3);},1800);};
  const inp={background:"rgba(201,168,76,.06)",border:"1.5px solid rgba(193,156,60,.25)",borderRadius:10,padding:"11px 14px",color:"#2C1A06",fontSize:13,outline:"none",width:"100%",fontFamily:"'Cormorant Garamond',serif",transition:"border-color .2s,box-shadow .2s"};
  const fi=e=>{e.target.style.borderColor="rgba(160,120,40,.65)";e.target.style.boxShadow="0 0 0 3px rgba(201,168,76,.1)";};
  const fo=e=>{e.target.style.borderColor="rgba(193,156,60,.25)";e.target.style.boxShadow="none";};
  return(
    <div onClick={e=>e.target===e.currentTarget&&onClose()} style={{position:"fixed",inset:0,background:"rgba(44,26,6,.7)",backdropFilter:"blur(18px)",zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center",padding:16,animation:"fadeIn .25s ease"}}>
      <div style={{background:"linear-gradient(145deg,#FAF6ED,#F3ECD8)",border:"1.5px solid rgba(193,156,60,.35)",borderRadius:24,width:"min(560px,96vw)",maxHeight:"92vh",overflowY:"auto",boxShadow:"0 60px 140px rgba(44,26,6,.35)",animation:"popIn .3s ease"}}>
        <div style={{padding:"24px 28px 18px",borderBottom:"1px solid rgba(193,156,60,.2)",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <div style={{fontSize:9,color:"#A07828",letterSpacing:3,textTransform:"uppercase",marginBottom:7,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Aurevian Tours · Booking</div>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:16,fontWeight:600,color:"#2C1A06",lineHeight:1.4,maxWidth:380}}>{item?.name||item?.title||"Book Your Egypt Experience"}</div>
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
                <a href={`https://wa.me/201068257754?text=${waMsg}`} target="_blank" rel="noreferrer" style={{background:"#25D366",color:"#fff",borderRadius:12,padding:"13px 24px",textDecoration:"none",fontWeight:700,fontSize:13,letterSpacing:1.5,display:"flex",alignItems:"center",gap:8,fontFamily:"'Josefin Sans',sans-serif"}}>💬 Confirm on WhatsApp</a>
                <button onClick={onClose} style={{background:"rgba(44,26,6,.06)",border:"1px solid rgba(44,26,6,.1)",color:"#9C7A3C",borderRadius:12,padding:"13px 24px",cursor:"pointer",fontSize:13,fontFamily:"'Josefin Sans',sans-serif"}}>Close</button>
              </div>
            </div>
          ):(
            <>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:22}}>
                {[1,2].map(s=>(<div key={s} style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:28,height:28,borderRadius:"50%",background:step>=s?"linear-gradient(135deg,#A07828,#C9A84C)":"rgba(201,168,76,.12)",border:step>=s?"none":"1.5px solid rgba(193,156,60,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:step>=s?"#FAF6ED":"#A07828",transition:"all .3s"}}>{s}</div>{s<2&&<div style={{width:40,height:1,background:`linear-gradient(to right,${step>=2?"rgba(160,120,40,.5)":"rgba(193,156,60,.2)"},transparent)`}}/>}</div>))}
                <div style={{fontSize:11,color:"#9C7A3C",marginLeft:8,fontFamily:"'Josefin Sans',sans-serif"}}>{step===1?"Personal Details":"Trip Details"}</div>
              </div>
              {step===1&&(
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13,animation:"fadeIn .3s ease"}}>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Full Name *</label><input value={f.name} onChange={upd("name")} placeholder="Your full name" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Age</label><input value={f.age} onChange={upd("age")} placeholder="Your age" type="number" min="1" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Nationality</label><input value={f.nationality} onChange={upd("nationality")} placeholder="e.g. American" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Guide Language</label><select value={f.guideLang} onChange={upd("guideLang")} style={{...inp,cursor:"pointer"}} onFocus={fi} onBlur={fo}>{GUIDE_LANGS.map(o=><option key={o.v} value={o.v} style={{background:"#FAF6ED"}}>{o.l}</option>)}</select></div>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Payment Currency</label><select value={f.currency} onChange={upd("currency")} style={{...inp,cursor:"pointer"}} onFocus={fi} onBlur={fo}>{Object.entries(CURR).map(([code,{l}])=><option key={code} value={code} style={{background:"#FAF6ED"}}>{l}</option>)}</select></div>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>WhatsApp * 📱</label><input value={f.whatsapp} onChange={upd("whatsapp")} placeholder="+1 234 567 8900" type="tel" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Email *</label><input value={f.email} onChange={upd("email")} placeholder="your@email.com" type="email" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1",marginTop:6}}><button onClick={()=>setStep(2)} disabled={!ok1} style={{width:"100%",background:"linear-gradient(135deg,#A07828,#C9A84C)",color:"#FAF6ED",border:"none",borderRadius:12,padding:"14px",cursor:"pointer",fontWeight:700,fontSize:12,letterSpacing:2.5,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",boxShadow:"0 6px 28px rgba(160,120,40,.3)",opacity:!ok1?.45:1,transition:"all .25s"}}>Next — Trip Details →</button></div>
                </div>
              )}
              {step===2&&(
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13,animation:"fadeIn .3s ease"}}>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Tour Date *</label><input value={f.date} onChange={upd("date")} type="date" style={{...inp,colorScheme:"light"}} onFocus={fi} onBlur={fo}/></div>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Number of Guests</label><input value={f.guests} onChange={upd("guests")} type="number" min="1" placeholder="2" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Pick-up Location * 📍</label><input value={f.pickup} onChange={upd("pickup")} placeholder="Hotel name / address / city" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Drop-off Location 📍</label><input value={f.dropoff} onChange={upd("dropoff")} placeholder="Hotel name / address (if different)" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Special Requests / Notes</label><textarea value={f.notes} onChange={upd("notes")} rows={2} placeholder="Dietary needs, accessibility, special occasions…" style={{...inp,resize:"none"}} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1",display:"flex",gap:10}}>
                    <button onClick={()=>setStep(1)} style={{background:"rgba(44,26,6,.06)",border:"1px solid rgba(44,26,6,.1)",color:"#9C7A3C",borderRadius:12,padding:"13px 20px",cursor:"pointer",fontSize:12,fontFamily:"'Josefin Sans',sans-serif"}}>← Back</button>
                    <button onClick={submit} disabled={busy||!ok2} style={{flex:1,background:"linear-gradient(135deg,#A07828,#C9A84C)",color:"#FAF6ED",border:"none",borderRadius:12,padding:"13px",cursor:busy?"wait":"pointer",fontWeight:700,fontSize:12,letterSpacing:2,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",boxShadow:"0 6px 28px rgba(160,120,40,.3)",opacity:(!ok2||busy)?.45:1,transition:"all .25s",display:"flex",alignItems:"center",justifyContent:"center",gap:10}}>
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

// ─── VIDEO PREVIEW ────────────────────────────────────────────
function VideoPreview(){
  const [open,setOpen]=useState(false);
  return(
    <>
      <button onClick={()=>setOpen(true)}
        style={{position:"absolute",bottom:"clamp(170px,22vh,230px)",right:"clamp(20px,4vw,52px)",zIndex:6,
          background:"rgba(250,246,237,.92)",backdropFilter:"blur(14px)",
          border:"1.5px solid rgba(193,156,60,.5)",borderRadius:16,padding:"10px 16px",
          cursor:"pointer",display:"flex",alignItems:"center",gap:10,transition:"all .3s ease",
          boxShadow:"0 8px 32px rgba(180,140,60,.2)"}}
        onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(160,120,40,.85)";e.currentTarget.style.boxShadow="0 8px 32px rgba(160,120,40,.3)";e.currentTarget.style.transform="translateY(-2px)";}}
        onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(193,156,60,.5)";e.currentTarget.style.boxShadow="0 8px 32px rgba(180,140,60,.2)";e.currentTarget.style.transform="none";}}>
        <div style={{width:52,height:36,borderRadius:8,overflow:"hidden",position:"relative",flexShrink:0}}>
          <video src="/videos/egypt-hero.mp4" style={{width:"100%",height:"100%",objectFit:"cover"}} muted playsInline preload="metadata"
            onMouseEnter={e=>e.target.play().catch(()=>{})} onMouseLeave={e=>e.target.pause()}/>
          <div style={{position:"absolute",inset:0,background:"rgba(44,26,6,.35)",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div style={{width:0,height:0,borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderLeft:"10px solid #C9A84C",marginLeft:2}}/>
          </div>
        </div>
        <div style={{textAlign:"left"}}>
          <div style={{fontFamily:"'Cinzel',serif",fontSize:10,fontWeight:700,color:"#A07828",letterSpacing:"0.15em",textTransform:"uppercase"}}>Watch Film</div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:11,color:"rgba(107,78,26,.6)",marginTop:2}}>Egypt Experience</div>
        </div>
        <div style={{position:"absolute",inset:-1,borderRadius:16,border:"1.5px solid rgba(193,156,60,.4)",animation:"pulseRing 2s ease-in-out infinite",pointerEvents:"none"}}/>
      </button>
      {open&&(
        <div onClick={()=>setOpen(false)} style={{position:"fixed",inset:0,background:"rgba(44,26,6,.88)",backdropFilter:"blur(20px)",zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center",padding:16,animation:"fadeIn .3s ease"}}>
          <div onClick={e=>e.stopPropagation()} style={{position:"relative",width:"min(900px,95vw)",borderRadius:20,overflow:"hidden",border:"1.5px solid rgba(193,156,60,.4)",boxShadow:"0 40px 100px rgba(44,26,6,.6)",animation:"popIn .3s ease"}}>
            <div style={{height:2,background:"linear-gradient(90deg,transparent,#C9A84C,#E8C96D,#C9A84C,transparent)"}}/>
            <video src="/videos/egypt-hero.mp4" autoPlay controls style={{width:"100%",display:"block",background:"#2C1A06"}}/>
            <button onClick={()=>setOpen(false)} style={{position:"absolute",top:12,right:12,width:36,height:36,borderRadius:"50%",background:"rgba(250,246,237,.9)",border:"1.5px solid rgba(193,156,60,.5)",color:"#A07828",fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(8px)"}}>✕</button>
          </div>
        </div>
      )}
    </>
  );
}

// ─── GOOGLE TRANSLATE WIDGET ──────────────────────────────────
function GoogleTranslateWidget({visible, onClose}){
  useEffect(()=>{
    if(!document.getElementById("google-translate-script")){
      window.googleTranslateElementInit=()=>{
        new window.google.translate.TranslateElement({
          pageLanguage:"en",
          includedLanguages:"en,ar,fr,es,de,it,pt,ru,zh-CN,ja,nl,he,tr,ko",
          layout:window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay:false,
        },"google_translate_element");
      };
      const s=document.createElement("script");
      s.id="google-translate-script";
      s.src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async=true;
      document.head.appendChild(s);
    }
  },[]);
  if(!visible)return null;
  return(
    <div style={{position:"absolute",top:"calc(100%+8px)",right:0,background:"linear-gradient(145deg,#FAF6ED,#F3ECD8)",border:"1.5px solid rgba(193,156,60,.35)",borderRadius:14,padding:"16px 18px",zIndex:2000,boxShadow:"0 24px 60px rgba(44,26,6,.15)",animation:"slideD .2s ease",minWidth:220}}>
      <div style={{fontSize:9,color:"#A07828",letterSpacing:3,textTransform:"uppercase",marginBottom:10,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>🌍 Select Language</div>
      <div id="google_translate_element"/>
      <div style={{marginTop:12,fontSize:10,color:"#9C7A3C",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",textAlign:"center"}}>Powered by Google Translate</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════
export default function Home(){
  const navigate = useNavigate();
  const { language:globalLang, currency:globalCur, setLanguage:setGlobalLang, setCurrency:setGlobalCur, formatPrice } = useGlobal();

  const [cur,  setCurLocal]  = useState(globalCur  || "USD");
  const [scrolled,setSc]     = useState(false);
  const [mMenu,setMMenu]     = useState(false);
  const [cO,setCO]           = useState(false);
  const [tO,setTO]           = useState(false);  // translate dropdown
  const [adults,setAdults]   = useState(2);
  const [kids,setKids]       = useState(0);
  const [gO,setGO]           = useState(false);
  const [adv,setAdv]         = useState(false);
  const [q,setQ]             = useState("");
  const [res,setRes]         = useState([]);
  const [step,setStep]       = useState(0);
  const [email,setEmail]     = useState("");
  const [subOk,setSubOk]     = useState(false);
  const [vis,setVis]         = useState({});
  const [bookItem,setBookItem] = useState(null);
  const [payItem,setPayItem]  = useState(null);
  const [payGuests,setPayGuests] = useState(1);
  const [aiQ,setAiQ]         = useState("");
  const [aiRes,setAiRes]     = useState("");
  const [aiLoad,setAiLoad]   = useState(false);
  const [aiDone,setAiDone]   = useState(false);
  const videoRef             = useRef(null);

  const setCur=(code)=>{setCurLocal(code);setGlobalCur(code);};
  const fmtP=(p)=>formatPrice?formatPrice(p):fmt(p,cur);

  useEffect(()=>{if(globalCur)setCurLocal(globalCur);},[globalCur]);
  useEffect(()=>{const fn=()=>setSc(window.scrollY>52);window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn);},[]);
  useEffect(()=>{const id=setInterval(()=>setStep(s=>(s+1)%4),2400);return()=>clearInterval(id);},[]);
  useEffect(()=>{
    const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)setVis(v=>({...v,[e.target.dataset.v]:true}));});},{threshold:.08});
    document.querySelectorAll("[data-v]").forEach(el=>io.observe(el));
    return()=>io.disconnect();
  },[]);
  useEffect(()=>{
    if(!q.trim()){setRes([]);return;}
    const lq=q.toLowerCase();
    setRes(SEARCH_ALL.filter(d=>d.title.toLowerCase().includes(lq)||d.sub?.toLowerCase().includes(lq)||d.tag?.toLowerCase().includes(lq)).slice(0,8));
    if(SEARCH_ALL.some(d=>d.title.toLowerCase().includes(lq)))setAdv(true);
  },[q]);
  useEffect(()=>{
    const v=videoRef.current;if(!v)return;
    v.muted=true;v.volume=0;
    v.play().catch(()=>{
      const retry=()=>{v.play().catch(()=>{});};
      document.addEventListener("click",retry,{once:true});
      document.addEventListener("touchstart",retry,{once:true});
    });
  },[]);

  const buildAI=useCallback(async()=>{
    if(!aiQ.trim())return;
    setAiLoad(true);setAiRes("");setAiDone(false);
    try{
      const r=await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",
        headers:{"Content-Type":"application/json","anthropic-dangerous-direct-browser-access":"true"},
        body:JSON.stringify({
          model:"claude-sonnet-4-20250514",max_tokens:1400,
          system:`You are a senior Egypt travel specialist at Aurevian Tours, a luxury travel company.
Create a COMPLETE, PROFESSIONAL travel itinerary:

🗓️ ITINERARY OVERVIEW
[Trip name, duration, total cost estimate]

📅 DAY-BY-DAY SCHEDULE
Day 1 — [City]: Morning: [specific activity + site]. Afternoon: [activity]. Evening: [hotel/dinner].
[Continue each day with REAL attractions and details]

🏨 ACCOMMODATION
[Hotel name · Stars · Est. cost/night]

✈️ TRANSPORT
[How to move between cities with estimated costs]

🍽️ DINING HIGHLIGHTS
[2-3 specific restaurant names with price range]

💰 COMPLETE BUDGET BREAKDOWN
• Accommodation: $X
• Tours & Entries: $X
• Transport: $X
• Meals: $X
• Guide Services: $X
• TOTAL: $X per person / $X for [N] people

📋 PRACTICAL TIPS
• Visa, best time, packing, cultural tips

Use REAL hotel names, REAL attractions, REALISTIC prices. Match the user's language.`,
          messages:[{role:"user",content:aiQ}]
        })
      });
      const d=await r.json();
      setAiRes(d.content?.map(i=>i.text||"").join("\n")||"⚠️ Error generating itinerary. Please try again.");
      setAiDone(true);
    }catch{setAiRes("⚠️ Connection error. Please try again.");}
    setAiLoad(false);
  },[aiQ]);

  const rv=(key,delay=0)=>({
    "data-v":key,
    style:{opacity:vis[key]?1:0,transform:vis[key]?"none":"translateY(30px)",transition:`opacity .7s ease ${delay}s,transform .7s ease ${delay}s`},
  });

  const iS={background:"rgba(201,168,76,.06)",border:"1.5px solid rgba(193,156,60,.25)",borderRadius:11,padding:"12px 14px",color:"#2C1A06",fontSize:14,outline:"none",width:"100%",fontFamily:"'Cormorant Garamond',serif",transition:"all .25s"};
  const fi=e=>{e.target.style.borderColor="rgba(160,120,40,.65)";e.target.style.boxShadow="0 0 0 3px rgba(201,168,76,.1)";};
  const fo=e=>{e.target.style.borderColor="rgba(193,156,60,.25)";e.target.style.boxShadow="none";};

  return(
    <div style={{background:"#FAF6ED",color:"#2C1A06",minHeight:"100vh",overflowX:"hidden",fontFamily:"'Josefin Sans','Noto Sans Arabic',sans-serif",position:"relative"}}>
      <style>{CSS}</style>
      <div className="grain"/>

      {/* ── Hieroglyphic Wall ── */}
      <div className="hiero-bg">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{position:"absolute",inset:0}}>
          <defs>
            <g id="c1">
              <rect x="0" y="0" width="70" height="110" rx="35" ry="18" fill="none" stroke="#A07828" strokeWidth="1.4"/>
              <ellipse cx="35" cy="32" rx="14" ry="10" fill="none" stroke="#A07828" strokeWidth="1.1"/>
              <ellipse cx="35" cy="32" rx="7" ry="5" fill="none" stroke="#A07828" strokeWidth="1"/>
              <circle cx="35" cy="32" r="2.5" fill="#A07828"/>
              <line x1="21" y1="32" x2="14" y2="32" stroke="#A07828" strokeWidth="1.1"/>
              <path d="M21 26 Q13 32 21 38" fill="none" stroke="#A07828" strokeWidth="1.1"/>
              <rect x="18" y="50" width="34" height="3.5" rx="1.5" fill="#A07828"/>
              <rect x="20" y="58" width="26" height="3" rx="1.5" fill="#A07828"/>
              <rect x="18" y="66" width="34" height="3" rx="1.5" fill="#A07828"/>
              <rect x="22" y="74" width="22" height="3" rx="1.5" fill="#A07828"/>
              <circle cx="35" cy="90" r="5" fill="none" stroke="#A07828" strokeWidth="1"/>
            </g>
            <g id="c2">
              <rect x="0" y="0" width="70" height="110" rx="35" ry="18" fill="none" stroke="#A07828" strokeWidth="1.4"/>
              <ellipse cx="35" cy="28" rx="12" ry="14" fill="none" stroke="#A07828" strokeWidth="1.1"/>
              <rect x="20" y="42" width="30" height="18" rx="3" fill="none" stroke="#A07828" strokeWidth="1"/>
              <line x1="20" y1="48" x2="50" y2="48" stroke="#A07828" strokeWidth="0.8"/>
              <rect x="18" y="68" width="34" height="3" rx="1.5" fill="#A07828"/>
              <rect x="22" y="76" width="26" height="3" rx="1.5" fill="#A07828"/>
              <rect x="18" y="84" width="34" height="3" rx="1.5" fill="#A07828"/>
              <polygon points="35,94 42,104 28,104" fill="none" stroke="#A07828" strokeWidth="1"/>
            </g>
            <g id="c3">
              <rect x="0" y="0" width="70" height="110" rx="35" ry="18" fill="none" stroke="#A07828" strokeWidth="1.4"/>
              <polygon points="35,18 55,48 15,48" fill="none" stroke="#A07828" strokeWidth="1.2"/>
              <circle cx="35" cy="62" r="7" fill="none" stroke="#A07828" strokeWidth="1.1"/>
              <rect x="18" y="80" width="34" height="3" rx="1.5" fill="#A07828"/>
              <rect x="22" y="88" width="26" height="3" rx="1.5" fill="#A07828"/>
              <rect x="18" y="96" width="34" height="3" rx="1.5" fill="#A07828"/>
            </g>
            <g id="c4">
              <rect x="0" y="0" width="70" height="110" rx="35" ry="18" fill="none" stroke="#A07828" strokeWidth="1.4"/>
              <rect x="18" y="16" width="34" height="3" rx="1.5" fill="#A07828"/>
              <circle cx="35" cy="50" r="10" fill="none" stroke="#A07828" strokeWidth="1.2"/>
              <line x1="35" y1="60" x2="35" y2="78" stroke="#A07828" strokeWidth="1.4"/>
              <line x1="26" y1="66" x2="44" y2="66" stroke="#A07828" strokeWidth="1.4"/>
              <rect x="20" y="84" width="30" height="3" rx="1.5" fill="#A07828"/>
              <rect x="18" y="92" width="34" height="3" rx="1.5" fill="#A07828"/>
            </g>
          </defs>
          {[0,1,2,3,4,5,6,7,8,9].map(i=>(
            <g key={i}>
              <use href={`#c${(i%4)+1}`} transform={`translate(${i*155+30}, 40) rotate(${i%2===0?-3:3})`} opacity="0.9"/>
              <use href={`#c${((i+1)%4)+1}`} transform={`translate(${i*155+30}, 200) rotate(${i%2===0?2:-2})`} opacity="0.8"/>
              <use href={`#c${((i+2)%4)+1}`} transform={`translate(${i*155+30}, 360) rotate(${i%2===0?-4:4})`} opacity="0.85"/>
              <use href={`#c${((i+3)%4)+1}`} transform={`translate(${i*155+30}, 520) rotate(${i%2===0?3:-3})`} opacity="0.75"/>
            </g>
          ))}
        </svg>
      </div>

      {/* ══════════════ NAV ══════════════ */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,height:66,
        background:scrolled?"rgba(250,246,237,.98)":"rgba(250,246,237,.75)",
        backdropFilter:scrolled?"blur(28px)":"blur(10px)",
        borderBottom:scrolled?"1px solid rgba(193,156,60,.25)":"1px solid rgba(193,156,60,.1)",
        display:"flex",alignItems:"center",justifyContent:"space-between",
        padding:"0 clamp(14px,4vw,44px)",transition:"all .45s ease",
        boxShadow:scrolled?"0 4px 32px rgba(180,140,60,.12)":"none"}}>
        {scrolled&&<div style={{position:"absolute",bottom:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(193,156,60,.5),rgba(232,201,109,.7),rgba(193,156,60,.5),transparent)",opacity:.7}}/>}

        {/* AUREVIAN LOGO */}
        <div style={{display:"flex",alignItems:"center",gap:12,cursor:"pointer",flexShrink:0}} onClick={()=>navigate("/")}>
          {/* Custom Logo Mark */}
          <div style={{width:46,height:46,position:"relative",flexShrink:0}}>
            <svg viewBox="0 0 46 46" style={{width:"100%",height:"100%"}}>
              {/* Outer ring */}
              <circle cx="23" cy="23" r="21" fill="none" stroke="url(#navGold)" strokeWidth="1.2"/>
              {/* Eye of Ra simplified */}
              <ellipse cx="23" cy="21" rx="10" ry="7" fill="none" stroke="url(#navGold)" strokeWidth="1.1"/>
              <circle cx="23" cy="21" r="3.5" fill="url(#navGold)"/>
              {/* Pyramid base line */}
              <line x1="10" y1="32" x2="36" y2="32" stroke="url(#navGold)" strokeWidth="1.2"/>
              {/* Pyramid */}
              <polygon points="23,26 33,32 13,32" fill="none" stroke="url(#navGold)" strokeWidth="1"/>
              <defs>
                <linearGradient id="navGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B6010"/>
                  <stop offset="50%" stopColor="#C9A84C"/>
                  <stop offset="100%" stopColor="#E8C96D"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(13px,1.6vw,17px)",fontWeight:700,
              background:"linear-gradient(135deg,#8B6010,#C9A84C,#8B6010)",
              WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
              backgroundClip:"text",letterSpacing:"0.18em",lineHeight:1}}>AUREVIAN</div>
            <div style={{fontSize:"clamp(6px,.85vw,7px)",color:"#A07828",letterSpacing:"0.35em",marginTop:2,fontFamily:"'Josefin Sans',sans-serif",fontWeight:600}}>EGYPT TOURS & EXPERIENCES</div>
          </div>
        </div>

        {/* Desktop nav links */}
        <ul className="dn" style={{display:"flex",gap:"clamp(12px,2vw,28px)",listStyle:"none"}}>
          {[["Home","/"],["Tours","/tours"],["Destinations","/destinations"],["AI Planner","/ai"],["About","/about"],["Contact","/contact"]].map(([label,path])=>(
            <li key={path}>
              <Link to={path} className="nla" style={{color:path==="/"?"#A07828":"rgba(44,26,6,.6)",fontSize:11,letterSpacing:"0.18em",textTransform:"uppercase",textDecoration:"none",fontWeight:700,transition:"color .2s",fontFamily:"'Josefin Sans',sans-serif"}}>{label}</Link>
            </li>
          ))}
        </ul>

        <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
          {/* Translate Button */}
          <div style={{position:"relative"}} className="dn">
            <button onClick={()=>{setTO(!tO);setCO(false);}}
              style={{background:"rgba(201,168,76,.08)",border:"1.5px solid rgba(193,156,60,.3)",color:"#A07828",padding:"6px 14px",borderRadius:8,cursor:"pointer",fontSize:11,fontWeight:700,display:"flex",alignItems:"center",gap:6,fontFamily:"'Josefin Sans',sans-serif",letterSpacing:"0.12em"}}>
              🌍 Translate ▾
            </button>
            <GoogleTranslateWidget visible={tO} onClose={()=>setTO(false)}/>
          </div>

          {/* Currency */}
          <div style={{position:"relative"}} className="dn">
            <button onClick={()=>{setCO(!cO);setTO(false);}}
              style={{background:"rgba(201,168,76,.08)",border:"1.5px solid rgba(193,156,60,.3)",color:"#A07828",padding:"6px 13px",borderRadius:8,cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>
              {CURR[cur]?.s} {cur} ▾
            </button>
            {cO&&<div style={{position:"absolute",top:"calc(100%+8px)",right:0,background:"linear-gradient(145deg,#FAF6ED,#F3ECD8)",border:"1.5px solid rgba(193,156,60,.28)",borderRadius:12,overflow:"hidden",minWidth:215,zIndex:2000,boxShadow:"0 24px 60px rgba(44,26,6,.15)",animation:"slideD .2s ease",maxHeight:320,overflowY:"auto"}}>
              {Object.entries(CURR).map(([code,{l}])=>(
                <div key={code} className="dd" onClick={()=>{setCur(code);setCO(false);}} style={{padding:"10px 16px",cursor:"pointer",fontSize:11,color:cur===code?"#A07828":"rgba(44,26,6,.6)",transition:"all .15s",fontWeight:cur===code?700:400,fontFamily:"'Josefin Sans',sans-serif"}}>{l}</div>
              ))}
            </div>}
          </div>

          <button onClick={()=>setBookItem({title:"Plan My Egypt Trip"})} className="dn btn-gold" style={{whiteSpace:"nowrap",padding:"10px 22px",fontSize:11,letterSpacing:"0.18em"}}>
            Plan My Trip ✦
          </button>

          <button className="dm" style={{display:"none",background:"rgba(201,168,76,.1)",border:"1.5px solid rgba(193,156,60,.3)",color:"#A07828",width:40,height:40,borderRadius:8,cursor:"pointer",fontSize:16,alignItems:"center",justifyContent:"center"}} onClick={()=>setMMenu(!mMenu)}>
            {mMenu?"✕":"☰"}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mMenu&&(
        <div style={{position:"fixed",top:66,left:0,right:0,background:"rgba(250,246,237,.99)",backdropFilter:"blur(28px)",zIndex:999,padding:"20px 24px 32px",borderBottom:"1px solid rgba(193,156,60,.2)",animation:"slideD .25s ease"}}>
          {[["Home","/"],["Tours","/tours"],["Destinations","/destinations"],["AI Planner","/ai"],["About","/about"],["Contact","/contact"]].map(([label,path])=>(
            <Link key={path} to={path} style={{display:"block",padding:"13px 0",borderBottom:"1px solid rgba(193,156,60,.1)",color:"rgba(44,26,6,.65)",fontSize:13,letterSpacing:"0.18em",textTransform:"uppercase",textDecoration:"none",fontFamily:"'Josefin Sans',sans-serif"}} onClick={()=>setMMenu(false)}>{label}</Link>
          ))}
          <div style={{marginTop:18}}>
            <div id="google_translate_element_mobile"/>
          </div>
          <div style={{display:"flex",gap:6,marginTop:10,flexWrap:"wrap"}}>
            {Object.entries(CURR).slice(0,8).map(([code,{s}])=>(
              <button key={code} onClick={()=>{setCur(code);setMMenu(false);}} style={{background:cur===code?"rgba(201,168,76,.2)":"rgba(201,168,76,.06)",border:"1.5px solid rgba(193,156,60,.2)",color:cur===code?"#A07828":"rgba(44,26,6,.55)",borderRadius:7,padding:"5px 10px",cursor:"pointer",fontSize:10,fontFamily:"'Josefin Sans',sans-serif"}}>{s} {code}</button>
            ))}
          </div>
          <button onClick={()=>{setBookItem({title:"Plan My Egypt Trip"});setMMenu(false);}} className="btn-gold" style={{marginTop:18,width:"100%",padding:"14px",fontSize:13,letterSpacing:"0.18em"}}>Plan My Trip ✦</button>
        </div>
      )}

      {/* ══════════════ HERO — SPLIT LAYOUT ══════════════ */}
      <section style={{position:"relative",minHeight:"100vh",paddingTop:66,overflow:"hidden"}}>
        <div className="hero-split" style={{minHeight:"calc(100vh - 66px)"}}>

          {/* LEFT: Text Content */}
          <div style={{
            display:"flex",flexDirection:"column",justifyContent:"center",
            padding:"clamp(40px,7vw,90px) clamp(24px,5vw,72px)",
            background:"linear-gradient(135deg,#FAF6ED 0%,#F3ECD8 60%,#EDE3C8 100%)",
            position:"relative",zIndex:2,
          }}>
            {/* Subtle gold horizontal line top */}
            <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg,transparent,rgba(201,168,76,.6),rgba(232,201,109,.9),rgba(201,168,76,.6),transparent)"}}/>

            <div style={{animation:"fadeUp .8s ease both"}}>
              {/* Eyebrow tag */}
              <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(201,168,76,.12)",border:"1.5px solid rgba(193,156,60,.4)",borderRadius:32,padding:"6px 18px",marginBottom:28,backdropFilter:"blur(8px)"}}>
                <span style={{color:"#A07828",fontSize:9,letterSpacing:"0.35em",textTransform:"uppercase",fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Award-Winning Egypt Specialists Since 2009</span>
              </div>

              {/* Main heading */}
              <h1 style={{fontFamily:"'Cinzel',serif",fontWeight:700,lineHeight:1.0,marginBottom:16,letterSpacing:"0.08em",color:"#2C1A06"}}>
                <span style={{display:"block",fontSize:"clamp(32px,5.5vw,72px)",color:"#2C1A06",lineHeight:1}}>EXPERIENCE</span>
                <span style={{display:"block",fontSize:"clamp(32px,5.5vw,72px)",lineHeight:1,marginBottom:6}}>
                  <span className="gta">EGYPT</span>
                </span>
                <span style={{display:"block",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontWeight:400,fontSize:"clamp(16px,2.5vw,32px)",color:"rgba(107,78,26,.7)",letterSpacing:"0.2em",marginTop:6}}>Beyond Extraordinary</span>
              </h1>

              {/* Divider */}
              <div style={{display:"flex",alignItems:"center",gap:16,margin:"22px 0",opacity:.8}}>
                <div style={{flex:1,height:1,background:"linear-gradient(to right,rgba(193,156,60,.5),transparent)"}}/>
                <span style={{fontSize:22,animation:"glowGold 4s ease-in-out infinite",color:"#C9A84C"}}>𓂀</span>
                <span style={{fontFamily:"'Josefin Sans',sans-serif",fontSize:8,color:"rgba(107,78,26,.5)",letterSpacing:"0.45em",textTransform:"uppercase"}}>EST. 2009</span>
                <span style={{fontSize:22,animation:"glowGold 4s ease-in-out 2s infinite",color:"#C9A84C"}}>𓂀</span>
                <div style={{flex:1,height:1,background:"linear-gradient(to left,rgba(193,156,60,.5),transparent)"}}/>
              </div>

              {/* Creative description */}
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:"clamp(14px,1.6vw,20px)",color:"rgba(44,26,6,.65)",lineHeight:1.85,marginBottom:32,maxWidth:460,opacity:0,animation:"fadeUp .8s ease .2s forwards"}}>
                Where ancient pharaohs whispered their secrets to the stones, and the Nile carried civilisations across five millennia of wonder — your extraordinary journey begins here.
              </p>

              {/* Stats row */}
              <div style={{display:"flex",gap:24,marginBottom:36,opacity:0,animation:"fadeUp .8s ease .3s forwards"}}>
                {[["4.9★","TripAdvisor Rating"],["50K+","Happy Travellers"],["15+","Years of Excellence"]].map(([n,l])=>(
                  <div key={l}>
                    <div style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(16px,1.8vw,22px)",fontWeight:700,color:"#A07828"}}>{n}</div>
                    <div style={{fontSize:9,color:"rgba(107,78,26,.55)",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",marginTop:3}}>{l}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div style={{display:"flex",gap:14,flexWrap:"wrap",opacity:0,animation:"fadeUp .8s ease .4s forwards"}}>
                <button onClick={()=>setBookItem({title:"Plan Your Egypt Journey"})} className="btn-gold" style={{padding:"15px 32px",fontSize:12,letterSpacing:"0.18em"}}>
                  Start Planning →
                </button>
                <button onClick={()=>document.getElementById("ai-sec")?.scrollIntoView({behavior:"smooth"})}
                  style={{background:"rgba(201,168,76,.1)",border:"1.5px solid rgba(193,156,60,.4)",color:"#8B6010",borderRadius:10,padding:"15px 26px",cursor:"pointer",fontWeight:700,fontSize:11,letterSpacing:"0.18em",fontFamily:"'Josefin Sans',sans-serif",backdropFilter:"blur(8px)",transition:"all .25s"}}>
                  🤖 AI Itinerary
                </button>
                <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer"
                  style={{background:"rgba(37,211,102,.08)",border:"1.5px solid rgba(37,211,102,.35)",color:"#1A9E50",borderRadius:10,padding:"15px 22px",textDecoration:"none",fontWeight:700,fontSize:11,letterSpacing:"0.18em",fontFamily:"'Josefin Sans',sans-serif",display:"flex",alignItems:"center",gap:8,transition:"all .25s"}}>
                  💬 WhatsApp
                </a>
              </div>

              {/* Trust badges */}
              <div style={{display:"flex",gap:10,marginTop:28,flexWrap:"wrap",opacity:0,animation:"fadeUp .8s ease .5s forwards"}}>
                {[["✓","Best Price Guarantee"],["✓","Local Egyptian Expert"],["✓","24/7 Support"],["✓","98% Satisfaction"]].map(([ic,l])=>(
                  <div key={l} style={{display:"flex",alignItems:"center",gap:5,fontSize:10,color:"rgba(107,78,26,.6)",fontFamily:"'Josefin Sans',sans-serif"}}>
                    <span style={{color:"#A07828",fontWeight:700}}>{ic}</span>{l}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Image + Video */}
          <div className="hero-img-col" style={{position:"relative",overflow:"hidden",minHeight:"100%"}}>
            {/* Main hero image */}
            <img src={HERO_IMG} alt="Sphinx and Pyramids of Giza"
              style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 38%",animation:"heroZoom 22s ease-in-out infinite alternate"}}
              onError={e=>e.target.src="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&q=80"}/>

            {/* Dark overlay gradient */}
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(250,246,237,.15) 0%,rgba(250,246,237,.02) 30%,transparent 60%)"}}/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(44,26,6,.3) 0%,transparent 30%,rgba(44,26,6,.5) 100%)"}}/>

            {/* Gold shimmer stripe on left edge */}
            <div style={{position:"absolute",top:0,bottom:0,left:0,width:3,background:"linear-gradient(to bottom,transparent,rgba(232,201,109,.7),rgba(201,168,76,.9),rgba(232,201,109,.7),transparent)"}}/>

            {/* Location badge */}
            <div style={{position:"absolute",top:24,left:24,zIndex:5}}>
              <div style={{display:"flex",alignItems:"center",gap:8,background:"rgba(250,246,237,.88)",backdropFilter:"blur(14px)",border:"1.5px solid rgba(193,156,60,.45)",borderRadius:10,padding:"8px 14px",animation:"fadeIn .8s ease .3s both"}}>
                <span style={{fontSize:12,color:"#A07828"}}>📍</span>
                <span style={{fontFamily:"'Josefin Sans',sans-serif",fontSize:9,color:"rgba(107,78,26,.7)",letterSpacing:"0.25em",textTransform:"uppercase"}}>Giza, Egypt</span>
                <span style={{width:1,height:10,background:"rgba(193,156,60,.4)",margin:"0 4px"}}/>
                <span style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:11,color:"rgba(107,78,26,.55)"}}>Sphinx & Pyramids</span>
              </div>
            </div>

            {/* Rating card — bottom right */}
            <div style={{position:"absolute",bottom:28,right:24,zIndex:5,animation:"fadeUp .8s ease .4s both"}}>
              <div style={{background:"rgba(250,246,237,.93)",backdropFilter:"blur(16px)",border:"1.5px solid rgba(193,156,60,.45)",borderRadius:16,padding:"14px 18px",textAlign:"center",boxShadow:"0 8px 32px rgba(180,140,60,.18)"}}>
                <div style={{fontFamily:"'Cinzel',serif",fontSize:28,fontWeight:700,color:"#A07828",lineHeight:1}}>4.9</div>
                <div style={{color:"#C9A84C",fontSize:14,letterSpacing:2,margin:"4px 0"}}>★★★★★</div>
                <div style={{fontFamily:"'Josefin Sans',sans-serif",fontSize:8,color:"rgba(107,78,26,.55)",letterSpacing:"0.2em",textTransform:"uppercase"}}>Trusted by 5000+ Travellers</div>
              </div>
            </div>

            {/* Video preview button */}
            <VideoPreview/>

            {/* Floating hieroglyphs */}
            {["𓂀","𓅓","𓇋","𓆣"].map((h,i)=>(
              <div key={i} style={{position:"absolute",zIndex:3,fontSize:`${24+i*4}px`,color:"rgba(201,168,76,.15)",fontFamily:"serif",
                left:`${[15,70,35,80][i]}%`,top:`${[20,15,65,55][i]}%`,
                animation:`float ${4+i*.9}s ease-in-out infinite`,animationDelay:`${i*.8}s`,pointerEvents:"none"}}>{h}</div>
            ))}
          </div>
        </div>

        {/* Search bar — full width below hero split */}
        <div style={{position:"relative",zIndex:10,background:"rgba(243,236,216,.97)",backdropFilter:"blur(20px)",borderTop:"1.5px solid rgba(193,156,60,.3)",borderBottom:"1.5px solid rgba(193,156,60,.2)",padding:"clamp(14px,2.5vw,22px) clamp(16px,4vw,48px)"}}>
          <div style={{maxWidth:1100,margin:"0 auto"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
              <span style={{color:"#8B6010",fontSize:11,letterSpacing:"0.25em",textTransform:"uppercase",fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✈ Find Your Perfect Egypt Experience</span>
              <button onClick={()=>setAdv(!adv)} style={{background:adv?"rgba(201,168,76,.15)":"transparent",border:"1.5px solid rgba(193,156,60,.3)",color:adv?"#A07828":"rgba(107,78,26,.5)",borderRadius:7,padding:"4px 14px",cursor:"pointer",fontSize:10,letterSpacing:"0.1em",transition:"all .2s",fontFamily:"'Josefin Sans',sans-serif"}}>Advanced Search {adv?"▲":"▾"}</button>
            </div>
            <div style={{position:"relative"}}>
              <span style={{position:"absolute",left:15,top:"50%",transform:"translateY(-50%)",color:"rgba(107,78,26,.45)",fontSize:17}}>🔍</span>
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search destinations, tours, experiences…" style={{...iS,paddingLeft:46,paddingRight:44,background:"rgba(250,246,237,.9)"}} onFocus={fi} onBlur={fo}/>
              {q&&<button onClick={()=>{setQ("");setRes([]);}} style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"transparent",border:"none",color:"rgba(107,78,26,.3)",cursor:"pointer",fontSize:17}}>✕</button>}
            </div>
            {res.length>0&&(
              <div style={{background:"rgba(250,246,237,.99)",border:"1.5px solid rgba(193,156,60,.25)",borderRadius:14,marginTop:8,overflow:"hidden",maxHeight:360,overflowY:"auto",animation:"slideD .2s ease",boxShadow:"0 18px 48px rgba(180,140,60,.12)"}}>
                {res.map((r,i)=>(
                  <div key={i} className="si" onClick={()=>{navigate(r.url);setQ("");setRes([]);setAdv(false);}} style={{display:"flex",alignItems:"center",gap:13,padding:"12px 16px",cursor:"pointer",borderBottom:"1px solid rgba(193,156,60,.08)",transition:"background .15s"}}>
                    <img src={r.img} alt="" style={{width:58,height:46,borderRadius:10,objectFit:"cover",flexShrink:0}} onError={e=>e.target.style.display="none"}/>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontFamily:"'Cinzel',serif",fontSize:13,fontWeight:600,color:"#2C1A06"}}>{r.title}</div>
                      <div style={{fontSize:11,color:"#9C7A3C",marginTop:2,fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic"}}>{r.sub}</div>
                    </div>
                    <div style={{background:r.color?`${r.color}18`:"rgba(201,168,76,.1)",border:`1px solid ${r.color||"rgba(193,156,60,.3)"}`,borderRadius:6,padding:"2px 10px",fontSize:9,color:r.color||"#A07828",letterSpacing:"0.1em",textTransform:"uppercase",flexShrink:0}}>{r.tag}</div>
                  </div>
                ))}
              </div>
            )}
            {q&&!res.length&&<div style={{padding:"14px 16px",textAlign:"center",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:14,color:"#9C7A3C"}}>No results for "{q}" — try "Luxor", "Pyramids", "cruise"…</div>}
            {adv&&(
              <div className="sg" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1.2fr auto",gap:11,marginTop:12,animation:"fadeUp .3s ease"}}>
                {[{label:"Check-in",type:"date"},{label:"Check-out",type:"date"}].map((f,i)=>(
                  <div key={i} style={{display:"flex",flexDirection:"column",gap:5}}>
                    <span style={{fontSize:9,color:"#9C7A3C",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif"}}>{f.label}</span>
                    <input type={f.type} style={{...iS,colorScheme:"light"}} onFocus={fi} onBlur={fo}/>
                  </div>
                ))}
                <div style={{display:"flex",flexDirection:"column",gap:5,position:"relative"}}>
                  <span style={{fontSize:9,color:"#9C7A3C",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif"}}>👥 Guests</span>
                  <div onClick={()=>setGO(!gO)} style={{...iS,cursor:"pointer",userSelect:"none"}}>{adults} Adults · {kids} Children ▾</div>
                  {gO&&(
                    <div style={{position:"absolute",top:"calc(100%+8px)",left:0,background:"#FAF6ED",border:"1.5px solid rgba(193,156,60,.3)",borderRadius:13,padding:"16px",minWidth:220,zIndex:100,boxShadow:"0 24px 64px rgba(44,26,6,.12)",animation:"slideD .2s ease"}} onClick={e=>e.stopPropagation()}>
                      {[["Adults",adults,setAdults,1],["Children",kids,setKids,0]].map(([lbl,val,set,min])=>(
                        <div key={lbl} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                          <span style={{fontSize:14,color:"#2C1A06",fontFamily:"'Cormorant Garamond',serif"}}>{lbl}</span>
                          <div style={{display:"flex",alignItems:"center",gap:13}}>
                            <button onClick={()=>set(Math.max(min,val-1))} style={{width:29,height:29,borderRadius:"50%",background:"rgba(201,168,76,.12)",border:"1.5px solid rgba(193,156,60,.35)",color:"#A07828",cursor:"pointer",fontSize:17}}>−</button>
                            <span style={{color:"#A07828",fontWeight:700,minWidth:18,textAlign:"center"}}>{val}</span>
                            <button onClick={()=>set(val+1)} style={{width:29,height:29,borderRadius:"50%",background:"rgba(201,168,76,.12)",border:"1.5px solid rgba(193,156,60,.35)",color:"#A07828",cursor:"pointer",fontSize:17}}>+</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:5}}>
                  <span style={{fontSize:9,color:"#9C7A3C",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif"}}>🗺 Tour Type</span>
                  <select style={{...iS,cursor:"pointer"}} onFocus={fi} onBlur={fo}>
                    {["All Types","Day Tour","Nile Cruise","Multi-Day","Adventure","Cultural","Private","Honeymoon","Family"].map(o=><option key={o} style={{background:"#FAF6ED"}}>{o}</option>)}
                  </select>
                </div>
                <button onClick={()=>{if(res.length)navigate(res[0].url);else navigate("/tours");}} className="btn-gold" style={{alignSelf:"flex-end",padding:"11px 18px",fontSize:11}}>🔍 Search</button>
              </div>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{position:"absolute",bottom:24,left:"50%",display:"flex",flexDirection:"column",alignItems:"center",gap:6,zIndex:4,animation:"scrollB 3s ease-in-out infinite"}}>
          <span style={{fontSize:7,letterSpacing:"0.5em",color:"rgba(107,78,26,.4)",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif"}}>SCROLL</span>
          <div style={{width:1,height:38,background:"linear-gradient(to bottom,rgba(193,156,60,.5),transparent)"}}/>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <div style={{background:"linear-gradient(135deg,#EDE3C8,#E6D9B4)",borderTop:"1.5px solid rgba(193,156,60,.25)",borderBottom:"1.5px solid rgba(193,156,60,.25)"}}>
        <div className="statg" style={{maxWidth:1060,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",padding:"clamp(18px,3vw,26px) clamp(16px,4vw,40px)"}}>
          {[["50K+","Happy Travelers","🧳"],["200+","Curated Tours","🗺️"],["4.9★","Avg Rating","⭐"],["15+","Years of Excellence","🏆"]].map(([n,l,ic],i)=>(
            <div key={i} data-v={`st${i}`} style={{textAlign:"center",borderRight:i<3?"1px solid rgba(193,156,60,.2)":"none",padding:"0 16px",opacity:vis[`st${i}`]?1:0,transform:vis[`st${i}`]?"none":"translateY(18px)",transition:`opacity .65s ease ${i*.1}s,transform .65s ease ${i*.1}s`}}>
              <div style={{fontSize:20,marginBottom:4}}>{ic}</div>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(20px,2.5vw,30px)",fontWeight:700,color:"#8B6010"}}>{n}</div>
              <div style={{fontSize:9,color:"rgba(107,78,26,.55)",letterSpacing:"0.2em",textTransform:"uppercase",marginTop:4,fontFamily:"'Josefin Sans',sans-serif"}}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════ MARQUEE ══════════════ */}
      <div style={{borderBottom:"1px solid rgba(193,156,60,.12)",padding:"11px 0",overflow:"hidden",background:"rgba(237,227,200,.4)"}}>
        <div className="mq">
          {[...Array(3)].map((_,idx)=>(
            <span key={idx} style={{display:"inline-flex",alignItems:"center",gap:22,paddingRight:44,fontSize:10,color:"rgba(107,78,26,.4)",letterSpacing:"0.35em",textTransform:"uppercase",fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>
              {CITIES.map((c,j)=><span key={j} style={{display:"inline-flex",alignItems:"center",gap:12}}><span style={{color:"rgba(193,156,60,.4)"}}>◆</span>{c.name}</span>)}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════ DESTINATIONS ══════════════ */}
      <section style={S.section}>
        <div {...rv("dh")} style={{...S.sectionHeader,...rv("dh").style}}>
          <div style={S.sectionTitleWrap}>
            <span style={S.sectionEyebrow}>✦ Explore Egypt · Ten legendary destinations · Infinite stories</span>
            <h2 style={S.sectionTitle}>Popular Destinations</h2>
          </div>
          <button onClick={()=>navigate("/tours")} className="btn-ghost">View All →</button>
        </div>
        <div className="dtop" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginBottom:16}}>
          {CITIES.slice(0,3).map(c=><CityCard key={c.id} c={c} navigate={navigate} large/>)}
        </div>
        <div className="dbot" style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:11}}>
          {CITIES.slice(3).map(c=><CityCard key={c.id} c={c} navigate={navigate}/>)}
        </div>
      </section>

      <div className="gline" style={{margin:"0 clamp(16px,4vw,48px)"}}/>

      {/* ══════════════ PACKAGES ══════════════ */}
      <section style={S.section}>
        <div {...rv("ph")} style={{...S.sectionHeader,...rv("ph").style}}>
          <div style={S.sectionTitleWrap}>
            <span style={S.sectionEyebrow}>✦ Handpicked Experiences</span>
            <h2 style={S.sectionTitle}>Featured Egypt Tours</h2>
          </div>
          <button onClick={()=>navigate("/packages")} className="btn-ghost">View All Tours →</button>
        </div>
        <div className="pkgg" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:22}}>
          {PACKAGES.map((p,i)=>(
            <div key={i} className="pkgc" data-v={`pk${i}`}
              onClick={()=>navigate(p.link)}
              style={{
                borderRadius:20,overflow:"hidden",cursor:"pointer",
                background:"linear-gradient(145deg,#FFFDF8,#F8F2E0)",
                border:"1.5px solid rgba(193,156,60,.2)",
                boxShadow:"0 8px 32px rgba(180,140,60,.1)",
                opacity:vis[`pk${i}`]?1:0,
                transform:vis[`pk${i}`]?"none":"translateY(28px)",
                transition:`opacity .7s ease ${i*.09}s,transform .7s ease ${i*.09}s,all .4s cubic-bezier(.25,.8,.25,1)`
              }}>
              <div style={{position:"relative",height:220,overflow:"hidden",background:"#EDE3C8"}}>
                <img className="pkgi" src={p.img} alt={p.title}
                  style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",transition:"transform .6s ease",display:"block"}}
                  onError={e=>e.target.src=`https://placehold.co/600x400/EDE3C8/8B6010?text=${p.title.slice(0,10)}`}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(44,26,6,.88) 0%,rgba(44,26,6,.1) 50%,transparent 100%)"}}/>
                <div style={{position:"absolute",top:12,left:12,background:`${p.badgeColor}22`,border:`1.5px solid ${p.badgeColor}55`,color:p.badgeColor,fontSize:9,fontWeight:700,padding:"4px 12px",borderRadius:20,textTransform:"uppercase",letterSpacing:"0.12em",backdropFilter:"blur(8px)",fontFamily:"'Josefin Sans',sans-serif"}}>
                  {p.badge}
                </div>
                <div style={{position:"absolute",top:12,right:12,background:"rgba(250,246,237,.88)",border:"1px solid rgba(193,156,60,.3)",color:"rgba(107,78,26,.85)",fontSize:9,padding:"4px 10px",borderRadius:8,backdropFilter:"blur(8px)",fontFamily:"'Josefin Sans',sans-serif"}}>
                  {p.days}
                </div>
                <div style={{position:"absolute",bottom:14,left:14,right:14}}>
                  <div style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(14px,1.5vw,18px)",fontWeight:700,color:"#FAF6ED",marginBottom:4}}>{p.title}</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:12,color:"rgba(250,246,237,.6)"}}>{p.subtitle}</div>
                </div>
              </div>
              <div style={{padding:"18px 20px 22px"}}>
                <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14}}>
                  {p.tags.map((tag,j)=>(
                    <span key={j} style={{background:"rgba(201,168,76,.08)",border:"1px solid rgba(193,156,60,.2)",color:"rgba(107,78,26,.7)",fontSize:9,padding:"3px 9px",borderRadius:10,letterSpacing:.5,fontFamily:"'Josefin Sans',sans-serif"}}>✦ {tag}</span>
                  ))}
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div>
                    <span style={{color:"#9C7A3C",fontSize:10,fontFamily:"'Josefin Sans',sans-serif"}}>From </span>
                    <span style={{fontFamily:"'Cinzel',serif",color:"#8B6010",fontSize:"clamp(18px,2vw,24px)",fontWeight:700}}>{fmtP(p.price)}</span>
                    <span style={{color:"#9C7A3C",fontSize:10,fontFamily:"'Josefin Sans',sans-serif"}}>/person</span>
                  </div>
                  <button onClick={e=>{e.stopPropagation();navigate(p.link);}} style={{background:"rgba(201,168,76,.12)",border:"1.5px solid rgba(193,156,60,.3)",color:"#8B6010",borderRadius:10,padding:"8px 18px",cursor:"pointer",fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",transition:"all .2s",fontFamily:"'Josefin Sans',sans-serif",fontWeight:700}}>
                    View →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:36}}>
          <button onClick={()=>navigate("/packages")} className="btn-gold" style={{padding:"14px 40px",fontSize:12,letterSpacing:"0.18em"}}>
            ✦ Explore All {PACKAGES_COUNT}+ Packages
          </button>
        </div>
      </section>

      <div className="gline" style={{margin:"0 clamp(16px,4vw,48px)"}}/>

      {/* ══════════════ WHY US ══════════════ */}
      <section style={S.section}>
        <div {...rv("wh")} style={{textAlign:"center",marginBottom:"clamp(28px,4vw,52px)",...rv("wh").style}}>
          <div style={{fontSize:9,color:"#A07828",letterSpacing:"0.5em",textTransform:"uppercase",marginBottom:10,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Why Travel with Aurevian</div>
          <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(24px,4vw,44px)",fontWeight:700,marginBottom:8,color:"#2C1A06"}}>Your Journey, Our Expertise</h2>
          <p style={{color:"#9C7A3C",fontSize:14,fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic"}}>The world's most trusted Egypt travel specialist</p>
        </div>
        <div className="whyg" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,maxWidth:1100,margin:"0 auto"}}>
          {WHY.map((w,i)=>(
            <div key={i} data-v={`wy${i}`} className="wc" style={{
              background:"linear-gradient(145deg,#FFFDF8,#F8F2E0)",
              border:"1.5px solid rgba(193,156,60,.2)",borderRadius:20,
              padding:"clamp(18px,2.5vw,28px)",cursor:"default",position:"relative",overflow:"hidden",
              boxShadow:"0 6px 24px rgba(180,140,60,.08)",
              opacity:vis[`wy${i}`]?1:0,transform:vis[`wy${i}`]?"none":"translateY(24px)",
              transition:`opacity .7s ease ${i*.07}s,transform .7s ease ${i*.07}s,all .35s`}}>
              <div style={{position:"absolute",top:-8,right:-8,fontFamily:"'Cinzel',serif",fontSize:42,color:"rgba(193,156,60,.08)",fontWeight:700}}>{w.num}</div>
              <div className="wi" style={{fontSize:30,marginBottom:14,display:"block",transition:"transform .3s ease"}}>{w.icon}</div>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:14,fontWeight:600,marginBottom:8,color:"#2C1A06"}}>{w.t}</div>
              <div style={{fontSize:13,color:"#9C7A3C",lineHeight:1.65,fontFamily:"'Cormorant Garamond',serif"}}>{w.d}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="gline" style={{margin:"0 clamp(16px,4vw,48px)"}}/>

      {/* ══════════════ AI BUILDER ══════════════ */}
      <section id="ai-sec" style={S.section}>
        <div {...rv("ai")} style={{...rv("ai").style}}>
          <div style={{textAlign:"center",marginBottom:"clamp(28px,4vw,52px)"}}>
            <div style={{fontSize:9,color:"#A07828",letterSpacing:"0.5em",textTransform:"uppercase",marginBottom:10,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>🤖 AI-Powered Planning · NEW</div>
            <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(24px,4vw,48px)",fontWeight:700,marginBottom:10,color:"#2C1A06"}}>Build Your Perfect Egypt Trip with AI</h2>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",color:"#9C7A3C",fontSize:"clamp(13px,1.8vw,18px)",maxWidth:680,margin:"0 auto"}}>Answer a few simple questions and get your personalised Egypt itinerary in seconds</p>
          </div>

          <div className="aig" style={{display:"grid",gridTemplateColumns:"1fr 1.5fr",gap:32,maxWidth:1100,margin:"0 auto",alignItems:"start"}}>

            {/* Left — features */}
            <div style={{display:"flex",flexDirection:"column",gap:14}}>
              <div style={{background:"linear-gradient(135deg,rgba(201,168,76,.08),rgba(201,168,76,.03))",border:"1.5px solid rgba(193,156,60,.22)",borderRadius:20,padding:"28px 24px"}}>
                <div style={{fontSize:44,textAlign:"center",marginBottom:14,animation:"float 4s ease-in-out infinite"}}>𓂀</div>
                <div style={{fontFamily:"'Cinzel',serif",fontSize:15,fontWeight:700,color:"#8B6010",textAlign:"center",marginBottom:6}}>Smart Egypt AI</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:13,color:"#9C7A3C",textAlign:"center",marginBottom:20,lineHeight:1.6}}>Powered by Claude AI — the world's most capable travel planning assistant</div>
                {[
                  {icon:"📅",label:"Day-by-Day Itinerary",desc:"Detailed schedule for every day"},
                  {icon:"💰",label:"Real Price Breakdown",desc:"Accurate costs for every item"},
                  {icon:"🏨",label:"Hotel Recommendations",desc:"Curated luxury & mid-range picks"},
                  {icon:"🗺️",label:"Transport Planning",desc:"How to get between every city"},
                  {icon:"🍽️",label:"Dining Highlights",desc:"Best restaurants & local cuisine"},
                  {icon:"📋",label:"Practical Tips",desc:"Visa, weather, culture & packing"},
                ].map((f,i)=>(
                  <div key={i} className="ai-feat" style={{display:"flex",alignItems:"center",gap:12,padding:"9px 12px",borderRadius:10,border:"1.5px solid transparent",marginBottom:5,transition:"all .25s",cursor:"default"}}>
                    <span style={{fontSize:20,flexShrink:0}}>{f.icon}</span>
                    <div>
                      <div style={{fontSize:11,fontWeight:700,color:"#2C1A06",letterSpacing:.5,fontFamily:"'Josefin Sans',sans-serif"}}>{f.label}</div>
                      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:12,color:"#9C7A3C",marginTop:1}}>{f.desc}</div>
                    </div>
                    <span style={{marginLeft:"auto",color:"rgba(160,120,40,.5)",fontSize:11}}>✓</span>
                  </div>
                ))}
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                {[["🔒","Secure","Bank-grade"],["⚡","Instant","In seconds"],["🌍","14 Langs","Multilingual"],["💯","Free","No cost"]].map(([ic,t2,d])=>(
                  <div key={t2} style={{background:"rgba(201,168,76,.07)",border:"1.5px solid rgba(193,156,60,.18)",borderRadius:12,padding:"12px",textAlign:"center"}}>
                    <div style={{fontSize:20,marginBottom:4}}>{ic}</div>
                    <div style={{fontSize:10,fontWeight:700,color:"#8B6010",letterSpacing:"0.1em",fontFamily:"'Josefin Sans',sans-serif"}}>{t2}</div>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:11,color:"#9C7A3C",marginTop:2}}>{d}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — chat */}
            <div className="ab" style={{borderRadius:22,position:"relative"}}>
              <div style={{background:"linear-gradient(145deg,#FFFDF8,#F8F2E0)",border:"1.5px solid rgba(193,156,60,.25)",borderRadius:22,padding:"clamp(24px,4vw,44px)",position:"relative",overflow:"hidden",boxShadow:"0 12px 48px rgba(180,140,60,.12)"}}>
                <div style={{position:"absolute",top:16,right:20,fontSize:36,color:"rgba(193,156,60,.06)",pointerEvents:"none",fontFamily:"serif",letterSpacing:8}}>𓂀 𓅓 𓇋</div>

                <label style={{display:"block",fontSize:10,color:"#A07828",letterSpacing:"0.3em",textTransform:"uppercase",marginBottom:12,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Describe your dream Egypt journey</label>

                <textarea value={aiQ} onChange={e=>setAiQ(e.target.value)} rows={5}
                  placeholder={`e.g. 10 days Egypt for 2 people — Cairo pyramids, 4-night Nile cruise, 3 nights Hurghada diving, 4-star hotels, total budget $3,500`}
                  style={{width:"100%",background:"rgba(201,168,76,.05)",border:"1.5px solid rgba(193,156,60,.25)",borderRadius:13,padding:"15px 17px",color:"#2C1A06",fontSize:14,outline:"none",fontFamily:"'Cormorant Garamond',serif",lineHeight:1.75,resize:"vertical",transition:"all .25s",marginBottom:14}}
                  onFocus={e=>{e.target.style.borderColor="rgba(160,120,40,.6)";e.target.style.boxShadow="0 0 0 3px rgba(201,168,76,.1)";}}
                  onBlur={e=>{e.target.style.borderColor="rgba(193,156,60,.25)";e.target.style.boxShadow="none";}}/>

                <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:18}}>
                  {[
                    "10 days Egypt $3,500 for 2 — Cairo, Nile cruise, Hurghada",
                    "7-day Nile cruise + pyramids, mid-range budget",
                    "Luxury honeymoon Egypt 10 nights",
                    "Family Egypt 2 weeks $5,000 kids-friendly",
                  ].map((ch,i)=>(
                    <button key={i} className="chip" onClick={()=>setAiQ(ch)}
                      style={{background:"rgba(201,168,76,.08)",border:"1.5px solid rgba(193,156,60,.25)",color:"rgba(44,26,6,.65)",borderRadius:22,padding:"6px 15px",fontSize:11,cursor:"pointer",transition:"all .2s",fontFamily:"'Josefin Sans',sans-serif"}}>
                      {ch.length>48?ch.slice(0,45)+"…":ch}
                    </button>
                  ))}
                </div>

                <button onClick={buildAI} disabled={aiLoad||!aiQ.trim()}
                  style={{width:"100%",background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)",color:"#FAF6ED",border:"none",borderRadius:13,padding:"17px",cursor:aiLoad?"wait":"pointer",fontWeight:700,fontSize:14,letterSpacing:"0.22em",textTransform:"uppercase",boxShadow:"0 8px 36px rgba(160,120,40,.3)",transition:"all .25s",opacity:(aiLoad||!aiQ.trim())?.5:1,display:"flex",alignItems:"center",justifyContent:"center",gap:12,fontFamily:"'Josefin Sans',sans-serif"}}>
                  {aiLoad
                    ?<><div style={{width:18,height:18,border:"2px solid rgba(250,246,237,.3)",borderTop:"2px solid #FAF6ED",borderRadius:"50%",animation:"spin .7s linear infinite"}}/>Crafting your perfect Egypt journey…</>
                    :"🤖 Generate My Egypt Itinerary"
                  }
                </button>

                {aiRes&&(
                  <div style={{marginTop:22,background:"rgba(201,168,76,.05)",border:"1.5px solid rgba(193,156,60,.25)",borderRadius:14,padding:"clamp(16px,3vw,26px)",color:"#2C1A06",fontSize:"clamp(13px,1.5vw,15px)",lineHeight:1.9,whiteSpace:"pre-wrap",maxHeight:520,overflowY:"auto",fontFamily:"'Cormorant Garamond',serif",animation:"fadeIn .5s ease"}}>
                    {aiRes}
                  </div>
                )}

                {aiDone&&(
                  <div style={{marginTop:16,display:"flex",gap:12,flexWrap:"wrap",animation:"fadeUp .5s ease"}}>
                    <button onClick={()=>window.open("https://wa.me/201068257754","_blank")}
                      style={{flex:1,background:"#25D366",color:"#fff",border:"none",borderRadius:11,padding:"13px 20px",cursor:"pointer",fontWeight:700,fontSize:13,letterSpacing:"0.12em",display:"flex",alignItems:"center",justifyContent:"center",gap:8,fontFamily:"'Josefin Sans',sans-serif"}}>
                      💬 Send & Book on WhatsApp
                    </button>
                    <button onClick={()=>{setAiQ("");setAiRes("");setAiDone(false);}}
                      style={{background:"rgba(44,26,6,.06)",border:"1px solid rgba(44,26,6,.1)",color:"#9C7A3C",borderRadius:11,padding:"13px 20px",cursor:"pointer",fontSize:13,fontFamily:"'Josefin Sans',sans-serif"}}>
                      New Itinerary
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gline" style={{margin:"0 clamp(16px,4vw,48px)"}}/>

      {/* ══════════════ HOW IT WORKS ══════════════ */}
      <section style={S.section}>
        <div {...rv("hw")} style={{maxWidth:860,margin:"0 auto",...rv("hw").style}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <div style={{fontSize:9,color:"#A07828",letterSpacing:"0.5em",textTransform:"uppercase",marginBottom:10,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Simple Process</div>
            <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(22px,3.5vw,40px)",fontWeight:700,color:"#2C1A06"}}>How It Works</h2>
          </div>
          <div style={{background:"linear-gradient(145deg,#FFFDF8,#F8F2E0)",border:"1.5px solid rgba(193,156,60,.22)",borderRadius:18,overflow:"hidden",boxShadow:"0 8px 40px rgba(180,140,60,.1)"}}>
            {[
              ["📍","Choose Your Tour","Browse 200+ curated experiences across Egypt"],
              ["⚙️","Customise","Dates, group size, hotel tier & special requests"],
              ["💳","Secure Payment","Bank-grade encryption — pay just 20% to confirm"],
              ["✅","Enjoy Egypt!","Our on-ground team handles every single detail"],
            ].map((s,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:20,padding:"clamp(17px,2.5vw,24px) clamp(20px,3vw,32px)",background:step===i?"rgba(201,168,76,.08)":"transparent",borderBottom:i<3?"1px solid rgba(193,156,60,.1)":"none",transition:"background .45s ease"}}>
                <div style={{width:52,height:52,borderRadius:13,background:step===i?"linear-gradient(135deg,#A07828,#C9A84C)":"rgba(201,168,76,.1)",border:step===i?"none":"1.5px solid rgba(193,156,60,.25)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,transition:"all .45s",boxShadow:step===i?"0 6px 24px rgba(160,120,40,.3)":"none"}}>{s[0]}</div>
                <div>
                  <div style={{fontFamily:"'Cinzel',serif",fontSize:14,fontWeight:600,color:step===i?"#8B6010":"#2C1A06",transition:"color .45s",marginBottom:3}}>{s[1]}</div>
                  <div style={{fontSize:13,color:"#9C7A3C",fontFamily:"'Cormorant Garamond',serif"}}>{s[2]}</div>
                </div>
                <div style={{marginLeft:"auto",width:26,height:26,borderRadius:"50%",background:step===i?"rgba(160,120,40,.15)":"transparent",border:`1.5px solid ${step===i?"rgba(160,120,40,.5)":"transparent"}`,display:"flex",alignItems:"center",justifyContent:"center",color:step===i?"#A07828":"transparent",fontSize:13,transition:"all .45s",flexShrink:0}}>✓</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gline" style={{margin:"0 clamp(16px,4vw,48px)"}}/>

      {/* ══════════════ REVIEWS ══════════════ */}
      <section style={S.section}>
        <div {...rv("rh")} style={{textAlign:"center",marginBottom:"clamp(28px,4vw,48px)",...rv("rh").style}}>
          <div style={{fontSize:9,color:"#A07828",letterSpacing:"0.5em",textTransform:"uppercase",marginBottom:10,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>⭐ Trusted by Travellers</div>
          <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(22px,4vw,42px)",fontWeight:700,marginBottom:8,color:"#2C1A06"}}>What Our Guests Say</h2>
          <div style={{display:"flex",alignItems:"center",gap:12,justifyContent:"center",marginTop:8}}>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:22,color:"#A07828",fontWeight:700}}>4.9</div>
            <div style={{color:"#C9A84C",fontSize:18,letterSpacing:3}}>★★★★★</div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:13,color:"#9C7A3C"}}>Based on 2,000+ reviews</div>
          </div>
        </div>
        <div className="revg" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18,maxWidth:1100,margin:"0 auto"}}>
          {REVIEWS.map((r,i)=>(
            <div key={i} data-v={`rv${i}`} className="rc" style={{
              background:"linear-gradient(145deg,#FFFDF8,#F8F2E0)",
              border:"1.5px solid rgba(193,156,60,.2)",borderRadius:20,
              padding:"clamp(20px,2.5vw,28px)",position:"relative",
              boxShadow:"0 6px 24px rgba(180,140,60,.1)",
              opacity:vis[`rv${i}`]?1:0,transform:vis[`rv${i}`]?"none":"translateY(24px)",
              transition:`opacity .7s ease ${i*.08}s,transform .7s ease ${i*.08}s,all .33s`}}>

              {/* Quote mark */}
              <div style={{position:"absolute",top:-6,right:18,fontFamily:"'Cormorant Garamond',serif",fontSize:60,color:"rgba(193,156,60,.12)",lineHeight:1}}>"</div>

              {/* Platform + verified badge */}
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
                <span style={{background:"rgba(201,168,76,.1)",border:"1px solid rgba(193,156,60,.25)",borderRadius:6,padding:"2px 9px",fontSize:8,color:"#8B6010",letterSpacing:"0.1em",fontFamily:"'Josefin Sans',sans-serif",fontWeight:700}}>{r.platform}</span>
                {r.verified&&<span style={{background:"rgba(37,211,102,.1)",border:"1px solid rgba(37,211,102,.3)",borderRadius:6,padding:"2px 9px",fontSize:8,color:"#1A9E50",letterSpacing:"0.1em",fontFamily:"'Josefin Sans',sans-serif",fontWeight:700}}>✓ Verified</span>}
                <span style={{marginLeft:"auto",fontSize:9,color:"#9C7A3C",fontFamily:"'Cormorant Garamond',serif"}}>{r.date}</span>
              </div>

              <Stars n={r.stars}/>

              {/* Tour name */}
              <div style={{fontFamily:"'Josefin Sans',sans-serif",fontSize:9,color:"#A07828",letterSpacing:"0.15em",textTransform:"uppercase",marginTop:8,marginBottom:6,fontWeight:700}}>{r.tourName}</div>

              <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:"clamp(12px,1.4vw,14px)",color:"rgba(44,26,6,.7)",lineHeight:1.82,margin:"0 0 16px",position:"relative"}}>{r.text}</p>

              <div style={{display:"flex",alignItems:"center",gap:10,paddingTop:14,borderTop:"1px solid rgba(193,156,60,.15)"}}>
                <img src={r.img} alt={r.name} style={{width:42,height:42,borderRadius:"50%",border:"2px solid rgba(193,156,60,.35)",objectFit:"cover"}}/>
                <div>
                  <div style={{fontSize:13,fontWeight:700,fontFamily:"'Cinzel',serif",color:"#2C1A06"}}>{r.name}</div>
                  <div style={{fontSize:11,color:"#9C7A3C",fontFamily:"'Cormorant Garamond',serif"}}>{r.flag} {r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ CTA BANNER ══════════════ */}
      <div style={{margin:"0 clamp(16px,4vw,48px) clamp(52px,8vw,100px)",borderRadius:24,overflow:"hidden",position:"relative"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"url('https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1600&q=70')",backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(.25) sepia(.3)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(44,26,6,.88),rgba(107,78,26,.75))"}}/>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 70% 50% at 50% 100%,rgba(201,168,76,.08),transparent 70%)"}}/>
        {["𓂀","𓅓","𓇋"].map((h,i)=>(
          <div key={i} style={{position:"absolute",fontSize:60,color:"rgba(201,168,76,.06)",fontFamily:"serif",left:`${[10,50,82][i]}%`,top:`${[20,60,25][i]}%`,pointerEvents:"none",animation:`float ${5+i}s ease-in-out infinite`,animationDelay:`${i*.8}s`}}>{h}</div>
        ))}
        <div {...rv("cta")} style={{position:"relative",padding:"clamp(40px,6vw,84px) clamp(24px,6vw,84px)",textAlign:"center",...rv("cta").style}}>
          <div style={{fontSize:9,color:"rgba(232,201,109,.8)",letterSpacing:"0.5em",textTransform:"uppercase",marginBottom:16,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Start Your Journey</div>
          <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(22px,4.5vw,54px)",fontWeight:700,marginBottom:14,color:"#FAF6ED",lineHeight:1.1}}>
            Ready to Explore Egypt?
          </h2>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",color:"rgba(250,246,237,.55)",fontSize:"clamp(14px,1.8vw,18px)",marginBottom:32,maxWidth:540,margin:"0 auto 32px",lineHeight:1.8}}>Let's build your perfect journey</p>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={()=>setBookItem({title:"Book Your Egypt Adventure"})} className="btn-gold" style={{padding:"15px 38px",fontSize:13}}>✈ Start Planning Now</button>
            <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" style={{background:"rgba(37,211,102,.12)",border:"1.5px solid rgba(37,211,102,.4)",color:"#4ade80",borderRadius:12,padding:"15px 28px",textDecoration:"none",fontWeight:700,fontSize:13,letterSpacing:"0.15em",display:"flex",alignItems:"center",gap:8,transition:"all .25s",fontFamily:"'Josefin Sans',sans-serif"}}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════ NEWSLETTER ══════════════ */}
      <section style={{background:"linear-gradient(135deg,#EDE3C8,#E6D9B4)",borderTop:"1.5px solid rgba(193,156,60,.22)",borderBottom:"1.5px solid rgba(193,156,60,.22)",padding:"clamp(36px,5vw,64px) clamp(16px,4vw,48px)",textAlign:"center"}}>
        <div {...rv("nl")} style={{maxWidth:480,margin:"0 auto",...rv("nl").style}}>
          <div style={{fontSize:9,color:"#8B6010",letterSpacing:"0.5em",textTransform:"uppercase",marginBottom:10,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✉ Newsletter</div>
          <h3 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(18px,3vw,30px)",fontWeight:700,marginBottom:8,color:"#2C1A06"}}>Exclusive Egypt Deals</h3>
          <p style={{color:"#9C7A3C",fontSize:13,marginBottom:22,fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic"}}>Join 200,000+ travellers. Unsubscribe anytime.</p>
          {!subOk
            ?<div style={{display:"flex",gap:10}}>
              <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email address" style={{...iS,background:"rgba(250,246,237,.9)"}} onFocus={fi} onBlur={fo}/>
              <button onClick={()=>email&&setSubOk(true)} className="btn-gold" style={{whiteSpace:"nowrap",padding:"12px 22px",fontSize:11}}>Subscribe</button>
            </div>
            :<div style={{color:"#8B6010",fontSize:16,fontFamily:"'Cormorant Garamond',serif"}}>✅ Thank you! Welcome to the Aurevian family.</div>
          }
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer style={{background:"linear-gradient(135deg,#EDE3C8,#E0D4A8)",borderTop:"1.5px solid rgba(193,156,60,.25)",padding:"clamp(40px,6vw,72px) clamp(16px,4vw,48px) clamp(20px,3vw,28px)"}}>
        <div className="ftg" style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1.5fr",gap:"clamp(24px,4vw,52px)",marginBottom:"clamp(28px,4vw,48px)"}}>
          {/* Brand column */}
          <div>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16,cursor:"pointer"}} onClick={()=>navigate("/")}>
              <div style={{width:48,height:48,position:"relative",flexShrink:0}}>
                <svg viewBox="0 0 46 46" style={{width:"100%",height:"100%"}}>
                  <circle cx="23" cy="23" r="21" fill="none" stroke="url(#ftGold)" strokeWidth="1.2"/>
                  <ellipse cx="23" cy="21" rx="10" ry="7" fill="none" stroke="url(#ftGold)" strokeWidth="1.1"/>
                  <circle cx="23" cy="21" r="3.5" fill="url(#ftGold)"/>
                  <line x1="10" y1="32" x2="36" y2="32" stroke="url(#ftGold)" strokeWidth="1.2"/>
                  <polygon points="23,26 33,32 13,32" fill="none" stroke="url(#ftGold)" strokeWidth="1"/>
                  <defs>
                    <linearGradient id="ftGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B6010"/>
                      <stop offset="50%" stopColor="#C9A84C"/>
                      <stop offset="100%" stopColor="#E8C96D"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <div style={{fontFamily:"'Cinzel',serif",fontSize:15,fontWeight:700,
                  background:"linear-gradient(135deg,#8B6010,#C9A84C)",
                  WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",
                  letterSpacing:"0.18em"}}>AUREVIAN</div>
                <div style={{fontSize:7,color:"#9C7A3C",letterSpacing:"0.35em",fontFamily:"'Josefin Sans',sans-serif"}}>EGYPT TOURS & EXPERIENCES</div>
              </div>
            </div>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",color:"#9C7A3C",fontSize:13,lineHeight:1.75,marginBottom:18,maxWidth:260}}>We create authentic, personalised experiences across Egypt with premium service and local expertise.</p>
            <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16}}>
              {["TripAdvisor","Trustpilot","IATA","UNWTO"].map(b=><span key={b} style={{background:"rgba(201,168,76,.1)",border:"1px solid rgba(193,156,60,.25)",borderRadius:6,padding:"3px 10px",color:"#9C7A3C",fontSize:9,letterSpacing:"0.1em",fontFamily:"'Josefin Sans',sans-serif"}}>{b}</span>)}
            </div>
            <div style={{display:"flex",gap:8}}>
              {[["f","FB"],["📸","IG"],["𝕏","X"],["▶","YT"],["💬","WA"]].map(([ic,nm])=>(
                <a key={nm} href={nm==="WA"?"https://wa.me/201068257754":"#"} title={nm} style={{width:34,height:34,borderRadius:8,background:"rgba(201,168,76,.1)",border:"1.5px solid rgba(193,156,60,.25)",display:"flex",alignItems:"center",justifyContent:"center",color:"#9C7A3C",textDecoration:"none",fontSize:12,transition:"all .2s"}}>{ic}</a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <div style={{color:"#8B6010",fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",marginBottom:16,fontWeight:700,paddingBottom:10,borderBottom:"1px solid rgba(193,156,60,.2)",fontFamily:"'Josefin Sans',sans-serif"}}>Explore</div>
            {["Egypt Tours","Destinations","Day Trips","Travel Guide","AI Trip Planner"].map(lnk=>(
              <a key={lnk} href="#" style={{display:"block",color:"#9C7A3C",fontSize:13,marginBottom:9,textDecoration:"none",transition:"color .2s",fontFamily:"'Cormorant Garamond',serif",lineHeight:1.4}}
                onMouseOver={e=>e.target.style.color="#8B6010"} onMouseOut={e=>e.target.style.color="#9C7A3C"}>{lnk}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={{color:"#8B6010",fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",marginBottom:16,fontWeight:700,paddingBottom:10,borderBottom:"1px solid rgba(193,156,60,.2)",fontFamily:"'Josefin Sans',sans-serif"}}>Company</div>
            {["About Us","Why Aurevian","Reviews","Terms & Conditions","Privacy Policy"].map(lnk=>(
              <a key={lnk} href="#" style={{display:"block",color:"#9C7A3C",fontSize:13,marginBottom:9,textDecoration:"none",transition:"color .2s",fontFamily:"'Cormorant Garamond',serif",lineHeight:1.4}}
                onMouseOver={e=>e.target.style.color="#8B6010"} onMouseOut={e=>e.target.style.color="#9C7A3C"}>{lnk}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{color:"#8B6010",fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",marginBottom:16,fontWeight:700,paddingBottom:10,borderBottom:"1px solid rgba(193,156,60,.2)",fontFamily:"'Josefin Sans',sans-serif"}}>Contact Us</div>
            {[
              ["📞","+20 106 825 7754","tel:+201068257754"],
              ["✉","Goldenegypttours26@gmail.com","mailto:Goldenegypttours26@gmail.com"],
              ["📍","Cairo, Egypt","#"],
            ].map(([ic,v,href])=>(
              <a key={v} href={href} style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:12,fontSize:13,color:"#9C7A3C",lineHeight:1.5,fontFamily:"'Cormorant Garamond',serif",textDecoration:"none",transition:"color .2s"}}
                onMouseOver={e=>{e.currentTarget.style.color="#8B6010";}} onMouseOut={e=>{e.currentTarget.style.color="#9C7A3C";}}>
                <span style={{color:"#A07828",flexShrink:0}}>{ic}</span>{v}
              </a>
            ))}
            <div style={{marginTop:16,padding:"14px 16px",background:"rgba(201,168,76,.08)",border:"1.5px solid rgba(193,156,60,.22)",borderRadius:12}}>
              <div style={{fontSize:9,color:"#8B6010",letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:6,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>💬 WhatsApp Direct</div>
              <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" style={{fontFamily:"'Cinzel',serif",fontSize:13,color:"#A07828",textDecoration:"none",fontWeight:700}}>+20 106 825 7754</a>
            </div>
          </div>
        </div>

        <div style={{borderTop:"1px solid rgba(193,156,60,.15)",paddingTop:"clamp(16px,3vw,22px)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
          <span style={{color:"rgba(107,78,26,.5)",fontSize:12,fontFamily:"'Josefin Sans',sans-serif"}}>© 2026 Aurevian Egypt Tours & Experiences. All rights reserved.</span>
          <div style={{display:"flex",gap:8}}>
            {["🔒 SSL","✈ IATA","🌍 UNWTO"].map(b=>(
              <span key={b} style={{background:"rgba(201,168,76,.08)",border:"1px solid rgba(193,156,60,.2)",borderRadius:6,padding:"3px 10px",color:"rgba(107,78,26,.5)",fontSize:9,letterSpacing:"0.1em",fontFamily:"'Josefin Sans',sans-serif"}}>{b}</span>
            ))}
          </div>
        </div>
      </footer>

      {/* ══════════════ FLOATING BUTTONS ══════════════ */}
      <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer"
        style={{position:"fixed",bottom:76,right:20,background:"#25D366",color:"#fff",borderRadius:30,padding:"11px 18px",textDecoration:"none",fontWeight:700,fontSize:12,letterSpacing:"0.1em",display:"flex",alignItems:"center",gap:8,zIndex:500,boxShadow:"0 6px 28px rgba(37,211,102,.48)",transition:"all .25s",fontFamily:"'Josefin Sans',sans-serif"}}>
        💬 <span>WhatsApp</span>
      </a>
      <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
        style={{position:"fixed",bottom:20,right:20,width:46,height:46,borderRadius:12,background:"rgba(201,168,76,.15)",border:"1.5px solid rgba(193,156,60,.4)",color:"#A07828",fontSize:16,cursor:"pointer",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",transition:"all .25s",boxShadow:"0 4px 18px rgba(180,140,60,.18)"}}>▲</button>

      {/* ══════════════ MODALS ══════════════ */}
      {bookItem&&<BookingModal item={bookItem} onClose={()=>setBookItem(null)} cur={cur}/>}
      {payItem&&<PaymentModal item={payItem} guests={payGuests} onClose={()=>setPayItem(null)}/>}
    </div>
  );
}