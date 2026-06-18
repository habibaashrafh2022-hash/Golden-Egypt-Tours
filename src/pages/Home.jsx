// ============================================================
//  Home.jsx — Aurevian Tours ★ REDESIGNED EDITION ★
//  Matches the new reference layout:
//    dark utility bar · clean two-tier nav · cinematic hero
//    with floating search card · horizontal destination / tour
//    / review carousels · redesigned AI itinerary builder ·
//    dark stats + newsletter band · full footer
//  Fully responsive — identical structure on mobile & desktop.
// ============================================================
import { useState, useEffect, useRef, useCallback, forwardRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import AITripBuilder from "../components/AITripBuilder";
import PaymentModal from "../components/PaymentModal";
import { useGlobal } from "../context/GlobalContext";

// ─── CONTACT ───────────────────────────────────────────────────
const PHONE_DISPLAY = "+20 106 825 4454";
const PHONE_WA      = "201068254454";
const EMAIL         = "aureviantours@gmail.com";
const waLink = (msg) => `https://wa.me/${PHONE_WA}${msg ? `?text=${msg}` : ""}`;

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

// ─── LANGUAGES ─────────────────────────────────────────────────
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
  {code:"ar", label:"العربية",    flag:"🇪🇬", dir:"rtl"},
];

// ─── DESTINATIONS (kept exactly as in the original project) ───
const CITIES = [
  {id:"cairo",      name:"Cairo",           img:"/images/home/cairo.jpeg",    desc:"The Heart of Egypt",               tag:"Top Pick",   tours:120, color:"#C9A84C", icon:"🏛", rating:4.9, reviews:2456, price:25},
  {id:"luxor",      name:"Luxor",           img:"/images/home/luxor.jpeg",    desc:"World's Greatest Open Air Museum", tag:"Bestseller", tours:85,  color:"#D4905C", icon:"🏺", rating:4.9, reviews:1892, price:35},
  {id:"aswan",      name:"Aswan",           img:"/images/home/aswan.jpeg",    desc:"Jewel of the Nile",                tag:"Scenic",     tours:64,  color:"#7CB9E8", icon:"🌅", rating:4.8, reviews:1245, price:30},
  {id:"hurghada",   name:"Hurghada",        img:"/images/home/hurghada.jpeg", desc:"Red Sea Paradise",                 tag:"Adventure",  tours:72,  color:"#52B788", icon:"🌊", rating:4.7, reviews:982,  price:28},
  {id:"sharm",      name:"Sharm El Sheikh", img:"/images/home/sharm.jpeg",    desc:"Crystal Clear Waters",             tag:"Luxury",     tours:58,  color:"#9B72CF", icon:"🤿", rating:4.7, reviews:876,  price:32},
  {id:"alexandria", name:"Alexandria",      img:"/images/home/alex.jpeg",     desc:"Pearl of the Mediterranean",       tag:"Culture",    tours:43,  color:"#4FC3F7", icon:"📚", rating:4.6, reviews:654,  price:27},
  {id:"fayoum",     name:"Fayoum",          img:"/images/home/fayoum.jpeg",   desc:"Egypt's Hidden Oasis",             tag:"Hidden Gem", tours:28,  color:"#81C784", icon:"🏜", rating:4.6, reviews:412,  price:22},
  {id:"marsa-alam", name:"Marsa Alam",      img:"/images/home/marsa.jpeg",    desc:"Untouched Red Sea Shores",         tag:"Diving",     tours:35,  color:"#26C6DA", icon:"🐠", rating:4.8, reviews:389,  price:40},
  {id:"giza",       name:"Giza",            img:"/images/home/giza.jpeg",     desc:"Gateway to the Ancient World",     tag:"Iconic",     tours:95,  color:"#FFD54F", icon:"🔺", rating:4.9, reviews:3120, price:20},
  {id:"ain-sokhna", name:"Ain Sokhna",      img:"/images/home/sokhna.jpeg",   desc:"Red Sea Riviera",                  tag:"Relaxation", tours:31,  color:"#FF8A65", icon:"🌴", rating:4.5, reviews:298,  price:18},
];

const HERO_IMG = "/images/home/sphinx-pyramids.jpeg";
const CTA_IMG  = CITIES.find(c=>c.id==="aswan")?.img || HERO_IMG;

// ─── FEATURED TOURS ─────────────────────────────────────────────
const PACKAGES = [
  {title:"Nile Cruise: Luxor → Aswan",       subtitle:"5 Days · Floating Palace on the Nile",    img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",   badge:"Bestseller",   badgeColor:"#D98A3D", price:650,  days:"5D/4N",  rating:4.9, reviews:890,  link:"/packages"},
  {title:"Cairo · Luxor · Aswan · Hurghada", subtitle:"10 Days · The Complete Egypt",             img:"https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80", badge:"Most Popular", badgeColor:"#52B788", price:1290, days:"10D/9N", rating:4.9, reviews:1240, link:"/packages"},
  {title:"Sinai & Dahab Adventure",          subtitle:"6 Days · Desert, Sea & Spirituality",      img:"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80", badge:"Adventure",    badgeColor:"#E63946", price:720,  days:"6D/5N",  rating:4.8, reviews:520,  link:"/packages"},
  {title:"Honeymoon Egypt Luxury",           subtitle:"10 Nights · Romance on the Nile",          img:"https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80",   badge:"Romantic",     badgeColor:"#E91E8C", price:1490, days:"10N",    rating:5.0, reviews:310,  link:"/packages"},
  {title:"Family Egypt Adventure",           subtitle:"2 Weeks · Kids-Friendly Journey",          img:"https://images.unsplash.com/photo-1553697388-94e804e2f0f6?w=800&q=80",   badge:"Family",       badgeColor:"#3E7CB8", price:2200, days:"14D",    rating:4.8, reviews:275,  link:"/packages"},
  {title:"Desert & Oasis Explorer",          subtitle:"8 Days · Western Desert Wonders",          img:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80", badge:"Off-Beat",     badgeColor:"#FF9800", price:890,  days:"8D/7N",  rating:4.7, reviews:180,  link:"/packages"},
];

// ─── REVIEWS ────────────────────────────────────────────────────
const REVIEWS = [
  {name:"Sarah Mitchell",        flag:"🇺🇸", city:"New York, USA",       stars:5, img:"https://i.pravatar.cc/80?img=1",  date:"March 2025",    tourName:"Cairo & Luxor 8-Day Package",      text:"Absolutely extraordinary experience. The guides were PhD-level Egyptologists who brought history to life. The AI itinerary builder was spot-on — every price matched perfectly. Booking again next year!", verified:true, platform:"TripAdvisor", photos:[CITIES[0].img,CITIES[1].img,CITIES[8].img]},
  {name:"James & Emma Thornton", flag:"🇬🇧", city:"London, UK",          stars:5, img:"https://i.pravatar.cc/80?img=15", date:"January 2025",  tourName:"Honeymoon Egypt Luxury 10 Nights", text:"We chose Aurevian for our honeymoon and it exceeded every expectation. Private sunrise at the Pyramids, a candlelit dinner on the Nile, and flawless logistics from start to finish. Worth every penny.", verified:true, platform:"Google Reviews", photos:[CITIES[1].img,CITIES[2].img,CITIES[4].img]},
  {name:"Amélie Fontaine",       flag:"🇫🇷", city:"Lyon, France",        stars:5, img:"https://i.pravatar.cc/80?img=5",  date:"November 2024", tourName:"Nile Cruise Luxor → Aswan",        text:"Le service était irréprochable. Notre guide connaissait chaque hiéroglyphe par cœur. La croisière sur le Nil au coucher du soleil était magique. Merci infiniment !", verified:true, platform:"Trustpilot", photos:[CITIES[1].img,CITIES[2].img]},
  {name:"Klaus Weber",           flag:"🇩🇪", city:"Munich, Germany",     stars:5, img:"https://i.pravatar.cc/80?img=12", date:"February 2025", tourName:"Complete Egypt 10-Day Package",     text:"Perfekt organisiert von Anfang bis Ende! Unser Guide war ein wandelndes Lexikon. Die KI-Planung hat unsere Kosten auf den Cent genau vorhergesagt. Absolute Empfehlung!", verified:true, platform:"Google Reviews", photos:[CITIES[0].img,CITIES[1].img,CITIES[3].img]},
  {name:"Yuki Tanaka",           flag:"🇯🇵", city:"Osaka, Japan",        stars:5, img:"https://i.pravatar.cc/80?img=9",  date:"April 2025",    tourName:"Valley of the Kings Private Tour", text:"Sunrise at the Valley of the Kings with a private Egyptologist — a truly spiritual experience. Everything ran like clockwork and the team made us feel completely at ease.", verified:true, platform:"TripAdvisor", photos:[CITIES[1].img]},
  {name:"The Al-Rashidi Family", flag:"🇸🇦", city:"Riyadh, Saudi Arabia",stars:5, img:"https://i.pravatar.cc/80?img=22", date:"December 2024", tourName:"Family Egypt Adventure 14 Days",   text:"An unforgettable family trip! The children were amazed by the pyramids and mummies. The team handled every detail — we will definitely return for a longer package next time.", verified:true, platform:"Google Reviews", photos:[CITIES[0].img,CITIES[8].img,CITIES[3].img]},
];

// ─── TRUST STRIP (under hero search) ───────────────────────────
const TRUST_STRIP = [
  {icon:"🛡️", t:"Licensed Tour Guides",    d:"Expert & Certified"},
  {icon:"⭐", t:"Best Price Guarantee",    d:"No Hidden Fees"},
  {icon:"↩️", t:"Free Cancellation",       d:"Up to 24 Hours"},
  {icon:"🕐", t:"24/7 Customer Support",   d:"We're Here to Help"},
];

// ─── WHY AUREVIAN (5 inline items) ──────────────────────────────
const WHY_US = [
  {icon:"💎", t:"Handpicked Experiences", d:"Carefully selected for the best moments"},
  {icon:"🪪", t:"Expert Local Guides",     d:"Professional, friendly and passionate"},
  {icon:"👑", t:"Premium Service",         d:"Comfort, safety and luxury in every detail"},
  {icon:"✂️", t:"Tailor Made Trips",       d:"Custom itineraries just for you"},
  {icon:"🤝", t:"Trusted by Thousands",    d:"12,000+ happy travelers and growing"},
];

// ─── STATS ───────────────────────────────────────────────────────
const STAT_TOP  = [["👥","12,000+ Happy Travelers"],["🎫","500+ Tours"],["⭐","4.9 Rating"],["🕐","24/7 Support"]];
const STAT_MAIN = [["👥","12,000+","Happy Travelers"],["🎫","500+","Tours & Experiences"],["📍","50+","Destinations"],["⭐","4.9/5","Average Rating"],["🏆","8+","Years of Excellence"]];

// ─── SEARCH DATA ─────────────────────────────────────────────────
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
  {v:"en",l:"English 🇬🇧"},{v:"ar",l:"Arabic 🇸🇦"},{v:"es",l:"Español 🇪🇸"},
  {v:"it",l:"Italiano 🇮🇹"},{v:"fr",l:"Français 🇫🇷"},{v:"de",l:"Deutsch 🇩🇪"},
  {v:"pt",l:"Português 🇵🇹"},{v:"zh",l:"Chinese 🇨🇳"},{v:"nl",l:"Nederlands 🇳🇱"},
  {v:"ja",l:"Japanese 🇯🇵"},{v:"ru",l:"Русский 🇷🇺"},{v:"he",l:"Hebrew 🇮🇱"},
];

const TOUR_TYPES = ["All Categories","Day Tour","Nile Cruise","Multi-Day","Adventure","Cultural","Private","Honeymoon","Family"];

// ─── NAV / FOOTER STRUCTURE ──────────────────────────────────────
const NAV_LINKS = [
  ["Home","/"],
  ["Tours","/tours"],
  ["Nile Cruises","/packages"],
  ["Custom Trips","/ai"],
  ["About Us","/about"],
  ["Contact","/contact"],
];
const FOOTER_DEST    = [...CITIES.slice(0,5).map(c=>[c.name,`/city/${c.id}`]), ["All Destinations","/tours"]];
const FOOTER_TOURS   = [["Day Tours","/tours"],["Multi-Day Tours","/packages"],["Nile Cruises","/packages"],["Private Tours","/tours"],["Adventure Tours","/tours"],["All Tours","/tours"]];
const FOOTER_COMPANY = [["About Us","/about"],["Our Guides","/about"],["Travel Tips","/about"],["Blog","/about"],["Careers","/contact"],["Contact Us","/contact"]];
const FOOTER_SUPPORT = [["FAQ","/contact"],["Cancellation Policy","/contact"],["Privacy Policy","/contact"],["Terms & Conditions","/contact"]];

const PACKAGES_COUNT = 8;
const fmt = (p,cur) => `${CURR[cur]?.s||"$"}${Math.round(p*(CURR[cur]?.r||1)).toLocaleString()}`;
const Stars = ({n}) => <span style={{color:"#C9A84C",letterSpacing:1}}>{"★".repeat(Math.round(n))}{"☆".repeat(5-Math.round(n))}</span>;

// ════════════════════════════════════════════════════════════════
//  CSS
// ════════════════════════════════════════════════════════════════
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&display=swap');

:root{
  --g:#C9A84C; --gl:#E8C96D; --gd:#8B6010;
  --bg:#FAF6ED; --cream2:#F3ECD8;
  --ink:#231A0E; --dim:rgba(35,26,14,.62); --dim2:rgba(35,26,14,.45);
  --card:#FFFFFF; --cardb:rgba(35,26,14,.08);
  --dark:#171009; --dark2:#241A0E;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;-webkit-tap-highlight-color:transparent;}
body{background:var(--bg);color:var(--ink);font-family:'Josefin Sans',sans-serif;overflow-x:hidden;}
::selection{background:rgba(201,168,76,.3);}
::-webkit-scrollbar{width:5px;}
::-webkit-scrollbar-track{background:var(--cream2);}
::-webkit-scrollbar-thumb{background:rgba(193,156,60,.45);border-radius:3px;}

@keyframes fadeUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes slideD{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:none}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes popIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
@keyframes heroZoom{0%{transform:scale(1)}100%{transform:scale(1.06)}}
@keyframes pulseRing{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:.15;transform:scale(1.06)}}

.av-link:hover{color:var(--gd)!important;}
.av-ghost:hover{background:rgba(201,168,76,.12);border-color:rgba(160,120,40,.55)!important;}
.av-gold:hover{box-shadow:0 10px 30px rgba(160,120,40,.45);transform:translateY(-2px);}
.av-arrow:hover{background:rgba(201,168,76,.18)!important;border-color:rgba(160,120,40,.5)!important;}
.av-iconbtn:hover{background:rgba(201,168,76,.14)!important;}
.av-navdd:hover{background:rgba(201,168,76,.1)!important;color:var(--gd)!important;}
.av-chip:hover{background:rgba(201,168,76,.16)!important;border-color:rgba(160,120,40,.5)!important;}
.av-footlink:hover{color:var(--gd)!important;}
.av-social:hover{background:rgba(201,168,76,.18)!important;border-color:rgba(193,156,60,.5)!important;}

.av-city-card{transition:transform .4s cubic-bezier(.25,.8,.25,1),box-shadow .4s;}
.av-city-card:hover{transform:translateY(-7px);box-shadow:0 28px 60px rgba(35,26,14,.22);}
.av-city-card:hover .av-city-img{transform:scale(1.08);}
.av-tour-card{transition:transform .4s cubic-bezier(.25,.8,.25,1),box-shadow .4s;}
.av-tour-card:hover{transform:translateY(-8px);box-shadow:0 28px 60px rgba(35,26,14,.18);}
.av-tour-card:hover .av-tour-img{transform:scale(1.07);}
.av-review-card{transition:transform .35s,box-shadow .35s;}
.av-review-card:hover{transform:translateY(-5px);box-shadow:0 20px 48px rgba(35,26,14,.14);}
.av-gallery-item{transition:transform .4s;overflow:hidden;}
.av-gallery-item:hover img{transform:scale(1.12);}
.av-gallery-item img{transition:transform .5s;}

.av-img{transition:transform .6s ease;}

.av-section{padding:clamp(48px,7vw,92px) clamp(16px,4vw,48px);}
.av-eyebrow{display:block;font-size:10px;color:var(--gd);letter-spacing:4px;text-transform:uppercase;margin-bottom:8px;font-weight:700;font-family:'Josefin Sans',sans-serif;}
.av-title{font-family:'Cinzel',serif;font-size:clamp(22px,3.4vw,38px);font-weight:700;color:var(--ink);line-height:1.2;}

.av-scrollrow{display:flex;gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:6px;scrollbar-width:none;}
.av-scrollrow::-webkit-scrollbar{display:none;}
.av-scrollrow > *{scroll-snap-align:start;flex-shrink:0;}

.av-search-card{display:flex;align-items:center;}
.av-search-field{flex:1;min-width:140px;padding:6px 18px;border-right:1px solid rgba(35,26,14,.1);display:flex;align-items:center;gap:10px;}
.av-search-field:last-of-type{border-right:none;}
.av-search-field input,.av-search-field select{background:transparent;border:none;outline:none;font-family:'Cormorant Garamond',serif;font-size:14px;color:var(--ink);width:100%;cursor:pointer;}
.av-search-field input::placeholder{color:rgba(35,26,14,.4);font-style:italic;}

.av-why-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;}
.av-trust-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;}
.av-stats-row{display:grid;grid-template-columns:repeat(5,1fr);}
.av-footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1.3fr;gap:clamp(24px,4vw,44px);}
.av-dest-top{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}

@media(max-width:980px){
  .av-footer-grid{grid-template-columns:1fr 1fr;}
}
@media(max-width:900px){
  .dn{display:none!important;}
  .dm{display:flex!important;}
  .av-why-grid{grid-template-columns:repeat(2,1fr);}
  .av-trust-grid{grid-template-columns:repeat(2,1fr);}
  .av-stats-row{grid-template-columns:repeat(3,1fr);}
  .av-search-card{flex-direction:column;align-items:stretch;}
  .av-search-field{border-right:none;border-bottom:1px solid rgba(35,26,14,.1);padding:13px 4px;width:100%;}
  .av-search-field:last-of-type{border-bottom:none;}
}
@media(max-width:640px){
  .av-why-grid{grid-template-columns:1fr 1fr;}
  .av-trust-grid{grid-template-columns:1fr 1fr;}
  .av-stats-row{grid-template-columns:1fr 1fr;}
  .av-footer-grid{grid-template-columns:1fr 1fr;}
}
`;

// ════════════════════════════════════════════════════════════════
//  LOGO
// ════════════════════════════════════════════════════════════════
function AurevianLogo({size=44}){
  return(
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lgA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B6010"/>
          <stop offset="45%" stopColor="#C9A84C"/>
          <stop offset="100%" stopColor="#E8C96D"/>
        </linearGradient>
        <linearGradient id="lgRiver" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7CB9E8" stopOpacity="0.9"/>
          <stop offset="50%" stopColor="#4FC3F7" stopOpacity="1"/>
          <stop offset="100%" stopColor="#7CB9E8" stopOpacity="0.5"/>
        </linearGradient>
      </defs>
      <polygon points="28,2 46,10 54,28 46,46 28,54 10,46 2,28 10,10" fill="none" stroke="url(#lgA)" strokeWidth="1.2" opacity="0.7"/>
      <line x1="11" y1="44" x2="28" y2="10" stroke="url(#lgA)" strokeWidth="3.2" strokeLinecap="round"/>
      <line x1="45" y1="44" x2="28" y2="10" stroke="url(#lgA)" strokeWidth="3.2" strokeLinecap="round"/>
      <path d="M17 32 Q20 29 23 32 Q26 35 29 32 Q32 29 35 32 Q38 35 39 32" stroke="url(#lgRiver)" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.95"/>
      <polyline points="21,44 28,36 35,44" fill="none" stroke="url(#lgA)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      <circle cx="28" cy="10" r="2.2" fill="url(#lgA)" opacity="0.9"/>
      <circle cx="22" cy="19" r="1.1" fill="url(#lgA)" opacity="0.4"/>
      <circle cx="34" cy="19" r="1.1" fill="url(#lgA)" opacity="0.4"/>
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

// ════════════════════════════════════════════════════════════════
//  SCROLL ROW (shared horizontal carousel)
// ════════════════════════════════════════════════════════════════
const ScrollRow = forwardRef(function ScrollRow({children, className=""}, ref){
  return <div className={`av-scrollrow ${className}`} ref={ref}>{children}</div>;
});

function SectionHead({eyebrow, title, onViewAll, viewAllLabel="View All", scrollRef}){
  const scroll = (dir) => {
    if(!scrollRef?.current) return;
    const card = scrollRef.current.firstElementChild;
    const w = card ? card.getBoundingClientRect().width + 18 : 300;
    scrollRef.current.scrollBy({left: dir*w*2, behavior:"smooth"});
  };
  return(
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:14,marginBottom:"clamp(22px,3vw,38px)"}}>
      <div>
        <span className="av-eyebrow">{eyebrow}</span>
        <h2 className="av-title">{title}</h2>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        {onViewAll && <button onClick={onViewAll} className="av-ghost" style={{background:"transparent",border:"1.5px solid rgba(160,120,40,.35)",color:"#8B6010",borderRadius:9,padding:"9px 20px",cursor:"pointer",fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",fontWeight:700,whiteSpace:"nowrap",transition:"all .2s"}}>{viewAllLabel} →</button>}
        {scrollRef && <div style={{display:"flex",gap:7}}>
          <button onClick={()=>scroll(-1)} className="av-arrow" style={{width:36,height:36,borderRadius:"50%",border:"1.5px solid rgba(193,156,60,.3)",background:"rgba(201,168,76,.06)",color:"#8B6010",cursor:"pointer",fontSize:15,transition:"all .2s"}}>‹</button>
          <button onClick={()=>scroll(1)} className="av-arrow" style={{width:36,height:36,borderRadius:"50%",border:"1.5px solid rgba(193,156,60,.3)",background:"rgba(201,168,76,.06)",color:"#8B6010",cursor:"pointer",fontSize:15,transition:"all .2s"}}>›</button>
        </div>}
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
//  CITY CARD
// ════════════════════════════════════════════════════════════════
function CityCard({c, navigate, fmtP}){
  return(
    <div className="av-city-card" onClick={()=>navigate(`/city/${c.id}`)}
      style={{position:"relative",width:"clamp(208px,22vw,256px)",height:264,borderRadius:18,overflow:"hidden",cursor:"pointer",
        border:"1px solid rgba(35,26,14,.08)",boxShadow:"0 8px 26px rgba(35,26,14,.1)",background:"#000"}}>
      <img className="av-city-img av-img" src={c.img} alt={c.name}
        style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}
        onError={e=>e.target.src=`https://placehold.co/420x520/EDE3C8/8B6010?text=${encodeURIComponent(c.name)}`}/>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(20,15,8,.92) 0%,rgba(20,15,8,.25) 48%,rgba(20,15,8,.05) 70%)"}}/>
      <div style={{position:"absolute",top:12,left:12,width:34,height:34,borderRadius:"50%",background:"rgba(250,246,237,.92)",border:`1.5px solid ${c.color}88`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>{c.icon}</div>
      <div style={{position:"absolute",top:14,right:12,background:"rgba(250,246,237,.88)",borderRadius:7,padding:"3px 10px",fontSize:9,fontWeight:700,color:"#6B4E1A",fontFamily:"'Josefin Sans',sans-serif"}}>{c.tours}+ Tours</div>
      <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"14px 16px"}}>
        <div style={{fontFamily:"'Cinzel',serif",fontWeight:700,fontSize:18,color:"#FAF6ED",marginBottom:5,textShadow:"0 2px 10px rgba(0,0,0,.5)"}}>{c.name}</div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontSize:11,color:"rgba(250,246,237,.8)",fontFamily:"'Josefin Sans',sans-serif"}}>★ {c.rating} <span style={{color:"rgba(250,246,237,.55)"}}>({c.reviews.toLocaleString()})</span></span>
          <span style={{fontFamily:"'Cinzel',serif",fontSize:13,fontWeight:700,color:"#E8C96D"}}>From {fmtP(c.price)}</span>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
//  TOUR / PACKAGE CARD
// ════════════════════════════════════════════════════════════════
function TourCard({p, navigate, fmtP, onBook}){
  return(
    <div className="av-tour-card" style={{width:"clamp(252px,26vw,300px)",borderRadius:18,overflow:"hidden",background:"#fff",border:"1px solid rgba(35,26,14,.08)",boxShadow:"0 8px 26px rgba(35,26,14,.08)"}}>
      <div onClick={()=>navigate(p.link)} style={{position:"relative",height:178,overflow:"hidden",cursor:"pointer",background:"#EDE3C8"}}>
        <img className="av-tour-img av-img" src={p.img} alt={p.title} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}
          onError={e=>e.target.src=`https://placehold.co/600x400/EDE3C8/8B6010?text=${encodeURIComponent(p.title.slice(0,12))}`}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(20,15,8,.45) 0%,transparent 55%)"}}/>
        <div style={{position:"absolute",top:11,left:11,background:p.badgeColor,color:"#fff",fontSize:9,fontWeight:700,padding:"4px 11px",borderRadius:18,textTransform:"uppercase",letterSpacing:"0.08em",fontFamily:"'Josefin Sans',sans-serif"}}>{p.badge}</div>
        <div style={{position:"absolute",top:11,right:11,background:"rgba(250,246,237,.92)",color:"#6B4E1A",fontSize:9,fontWeight:700,padding:"4px 10px",borderRadius:7,fontFamily:"'Josefin Sans',sans-serif"}}>{p.days}</div>
      </div>
      <div style={{padding:"16px 18px 20px"}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:12,color:"#9C7A3C",marginBottom:4}}>{p.subtitle}</div>
        <div onClick={()=>navigate(p.link)} style={{fontFamily:"'Cinzel',serif",fontWeight:700,fontSize:15,color:"#231A0E",marginBottom:7,cursor:"pointer",lineHeight:1.35}}>{p.title}</div>
        <div style={{fontSize:11,color:"#9C7A3C",fontFamily:"'Josefin Sans',sans-serif",marginBottom:12}}>★ {p.rating} <span style={{color:"#B8A06A"}}>({p.reviews})</span></div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:6}}>
          <div>
            <span style={{fontSize:10,color:"#9C7A3C",fontFamily:"'Josefin Sans',sans-serif"}}>From </span>
            <span style={{fontFamily:"'Cinzel',serif",fontSize:19,fontWeight:700,color:"#8B6010"}}>{fmtP(p.price)}</span>
            <span style={{fontSize:10,color:"#9C7A3C",fontFamily:"'Josefin Sans',sans-serif"}}> /person</span>
          </div>
        </div>
        <div style={{fontSize:10,color:"#1A9E50",fontFamily:"'Josefin Sans',sans-serif",marginBottom:13,fontWeight:600}}>✓ Free Cancellation</div>
        <button onClick={()=>onBook(p)} style={{width:"100%",background:"linear-gradient(135deg,#A07828,#C9A84C)",color:"#FAF6ED",border:"none",borderRadius:10,padding:"12px",cursor:"pointer",fontWeight:700,fontSize:11,letterSpacing:"0.16em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",boxShadow:"0 5px 18px rgba(160,120,40,.3)"}}>Book Now</button>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
//  REVIEW CARD
// ════════════════════════════════════════════════════════════════
function ReviewCard({r}){
  return(
    <div className="av-review-card" style={{width:"clamp(270px,28vw,330px)",background:"#fff",border:"1px solid rgba(35,26,14,.08)",borderRadius:18,padding:"22px 22px 20px",boxShadow:"0 8px 26px rgba(35,26,14,.08)"}}>
      <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:11,flexWrap:"wrap"}}>
        <span style={{background:"rgba(201,168,76,.12)",border:"1px solid rgba(193,156,60,.3)",borderRadius:6,padding:"2px 9px",fontSize:8,color:"#8B6010",fontWeight:700,letterSpacing:"0.08em",fontFamily:"'Josefin Sans',sans-serif"}}>{r.platform}</span>
        {r.verified && <span style={{background:"rgba(37,211,102,.12)",border:"1px solid rgba(37,211,102,.3)",borderRadius:6,padding:"2px 9px",fontSize:8,color:"#1A9E50",fontWeight:700,letterSpacing:"0.08em",fontFamily:"'Josefin Sans',sans-serif"}}>✓ Verified</span>}
        <span style={{marginLeft:"auto",fontSize:9,color:"#9C7A3C",fontFamily:"'Cormorant Garamond',serif"}}>{r.date}</span>
      </div>
      <Stars n={r.stars}/>
      <div style={{fontSize:9,color:"#8B6010",letterSpacing:"0.08em",textTransform:"uppercase",marginTop:9,marginBottom:7,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>{r.tourName}</div>
      <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:13.5,color:"rgba(35,26,14,.72)",lineHeight:1.75,marginBottom:14}}>{r.text}</p>
      <div style={{display:"flex",gap:6,marginBottom:14}}>
        {r.photos.map((ph,i)=><img key={i} src={ph} alt="" style={{width:44,height:44,borderRadius:9,objectFit:"cover"}} onError={e=>e.target.style.display="none"}/>)}
      </div>
      <div style={{display:"flex",alignItems:"center",gap:10,paddingTop:13,borderTop:"1px solid rgba(193,156,60,.15)"}}>
        <img src={r.img} alt={r.name} style={{width:38,height:38,borderRadius:"50%",border:"2px solid rgba(193,156,60,.35)",objectFit:"cover"}}/>
        <div>
          <div style={{fontSize:12.5,fontWeight:700,fontFamily:"'Cinzel',serif",color:"#231A0E"}}>{r.name}</div>
          <div style={{fontSize:10.5,color:"#9C7A3C",fontFamily:"'Cormorant Garamond',serif"}}>{r.flag} {r.city}</div>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
//  BOOKING MODAL
// ════════════════════════════════════════════════════════════════
function BookingModal({item,onClose,cur}){
  const [step,setStep]=useState(1);
  const [busy,setBusy]=useState(false);
  const [f,setF]=useState({name:"",age:"",nationality:"",guideLang:"en",currency:cur,whatsapp:"",email:"",pickup:"",dropoff:"",date:"",guests:"2",notes:""});
  const upd=k=>e=>setF(p=>({...p,[k]:e.target.value}));
  const ok1=f.name&&f.email&&f.whatsapp;
  const ok2=f.date&&f.pickup;
  const waMsg=encodeURIComponent(`🏛️ *New Booking — Aurevian Tours*\n\n📋 *${item?.name||item?.title||"Tour"}*\n\n👤 *Name:* ${f.name}\n🎂 *Age:* ${f.age}\n🌍 *Nationality:* ${f.nationality}\n🗣️ *Guide Language:* ${GUIDE_LANGS.find(l=>l.v===f.guideLang)?.l||f.guideLang}\n💱 *Currency:* ${f.currency}\n📱 *WhatsApp:* ${f.whatsapp}\n✉️ *Email:* ${f.email}\n📅 *Date:* ${f.date}\n👥 *Guests:* ${f.guests}\n📍 *Pick-up:* ${f.pickup}\n📍 *Drop-off:* ${f.dropoff||"Same as pick-up"}\n📝 *Notes:* ${f.notes||"None"}\n\nRef: AUR-${Date.now().toString().slice(-6)}`);
  const submit=()=>{setBusy(true);setTimeout(()=>{setBusy(false);setStep(3);},1500);};
  const inp={background:"rgba(201,168,76,.06)",border:"1.5px solid rgba(193,156,60,.25)",borderRadius:10,padding:"11px 14px",color:"#231A0E",fontSize:13,outline:"none",width:"100%",fontFamily:"'Cormorant Garamond',serif"};
  const fi=e=>{e.target.style.borderColor="rgba(160,120,40,.65)";e.target.style.boxShadow="0 0 0 3px rgba(201,168,76,.1)";};
  const fo=e=>{e.target.style.borderColor="rgba(193,156,60,.25)";e.target.style.boxShadow="none";};
  return(
    <div onClick={e=>e.target===e.currentTarget&&onClose()} style={{position:"fixed",inset:0,background:"rgba(20,15,8,.7)",backdropFilter:"blur(16px)",zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center",padding:16,animation:"fadeIn .25s ease"}}>
      <div style={{background:"#FAF6ED",border:"1.5px solid rgba(193,156,60,.35)",borderRadius:22,width:"min(560px,96vw)",maxHeight:"92vh",overflowY:"auto",boxShadow:"0 50px 120px rgba(20,15,8,.4)",animation:"popIn .3s ease"}}>
        <div style={{padding:"22px 26px 16px",borderBottom:"1px solid rgba(193,156,60,.2)",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <div style={{fontSize:9,color:"#A07828",letterSpacing:3,textTransform:"uppercase",marginBottom:6,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Aurevian Tours · Booking</div>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:15,fontWeight:600,color:"#231A0E",lineHeight:1.4,maxWidth:380}}>{item?.name||item?.title||"Book Your Egypt Experience"}</div>
          </div>
          <button onClick={onClose} style={{background:"rgba(35,26,14,.06)",border:"1px solid rgba(35,26,14,.1)",color:"#9C7A3C",borderRadius:8,width:32,height:32,cursor:"pointer",fontSize:15}}>✕</button>
        </div>
        <div style={{padding:"22px 26px"}}>
          {step===3?(
            <div style={{textAlign:"center",padding:"20px 0",animation:"fadeUp .4s ease"}}>
              <div style={{fontSize:58,marginBottom:14}}>✅</div>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:20,color:"#A07828",marginBottom:9}}>Booking Confirmed!</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"#9C7A3C",lineHeight:1.8,marginBottom:24}}>Our team will contact you within 2 hours.<br/>Reference: <strong style={{color:"#A07828"}}>AUR-{Date.now().toString().slice(-6)}</strong></div>
              <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
                <a href={waLink(waMsg)} target="_blank" rel="noreferrer" style={{background:"#25D366",color:"#fff",borderRadius:12,padding:"12px 22px",textDecoration:"none",fontWeight:700,fontSize:13,display:"flex",alignItems:"center",gap:8,fontFamily:"'Josefin Sans',sans-serif"}}>💬 Confirm on WhatsApp</a>
                <button onClick={onClose} style={{background:"rgba(35,26,14,.06)",border:"1px solid rgba(35,26,14,.1)",color:"#9C7A3C",borderRadius:12,padding:"12px 22px",cursor:"pointer",fontSize:13,fontFamily:"'Josefin Sans',sans-serif"}}>Close</button>
              </div>
            </div>
          ):(
            <>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:20}}>
                {[1,2].map(s=>(<div key={s} style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:26,height:26,borderRadius:"50%",background:step>=s?"linear-gradient(135deg,#A07828,#C9A84C)":"rgba(201,168,76,.12)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:step>=s?"#FAF6ED":"#A07828"}}>{s}</div>{s<2&&<div style={{width:36,height:1,background:"rgba(193,156,60,.3)"}}/>}</div>))}
                <div style={{fontSize:11,color:"#9C7A3C",marginLeft:8,fontFamily:"'Josefin Sans',sans-serif"}}>{step===1?"Personal Details":"Trip Details"}</div>
              </div>
              {step===1&&(
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13}}>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Full Name *</label><input value={f.name} onChange={upd("name")} placeholder="Your full name" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Age</label><input value={f.age} onChange={upd("age")} placeholder="Your age" type="number" min="1" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Nationality</label><input value={f.nationality} onChange={upd("nationality")} placeholder="e.g. American" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Guide Language</label><select value={f.guideLang} onChange={upd("guideLang")} style={{...inp,cursor:"pointer"}} onFocus={fi} onBlur={fo}>{GUIDE_LANGS.map(o=><option key={o.v} value={o.v}>{o.l}</option>)}</select></div>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Payment Currency</label><select value={f.currency} onChange={upd("currency")} style={{...inp,cursor:"pointer"}} onFocus={fi} onBlur={fo}>{Object.entries(CURR).map(([code,{l}])=><option key={code} value={code}>{l}</option>)}</select></div>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>WhatsApp * 📱</label><input value={f.whatsapp} onChange={upd("whatsapp")} placeholder="+1 234 567 8900" type="tel" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Email *</label><input value={f.email} onChange={upd("email")} placeholder="your@email.com" type="email" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1",marginTop:5}}><button onClick={()=>setStep(2)} disabled={!ok1} style={{width:"100%",background:"linear-gradient(135deg,#A07828,#C9A84C)",color:"#FAF6ED",border:"none",borderRadius:12,padding:"14px",cursor:"pointer",fontWeight:700,fontSize:12,letterSpacing:2.5,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",opacity:!ok1?.45:1}}>Next — Trip Details →</button></div>
                </div>
              )}
              {step===2&&(
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13}}>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Tour Date *</label><input value={f.date} onChange={upd("date")} type="date" style={{...inp,colorScheme:"light"}} onFocus={fi} onBlur={fo}/></div>
                  <div><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Number of Guests</label><input value={f.guests} onChange={upd("guests")} type="number" min="1" placeholder="2" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Pick-up Location * 📍</label><input value={f.pickup} onChange={upd("pickup")} placeholder="Hotel name / address / city" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Drop-off Location 📍</label><input value={f.dropoff} onChange={upd("dropoff")} placeholder="Hotel name / address (if different)" style={inp} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1"}}><label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Special Requests / Notes</label><textarea value={f.notes} onChange={upd("notes")} rows={2} placeholder="Dietary needs, accessibility, special occasions…" style={{...inp,resize:"none"}} onFocus={fi} onBlur={fo}/></div>
                  <div style={{gridColumn:"1/-1",display:"flex",gap:10}}>
                    <button onClick={()=>setStep(1)} style={{background:"rgba(35,26,14,.06)",border:"1px solid rgba(35,26,14,.1)",color:"#9C7A3C",borderRadius:12,padding:"13px 20px",cursor:"pointer",fontSize:12,fontFamily:"'Josefin Sans',sans-serif"}}>← Back</button>
                    <button onClick={submit} disabled={busy||!ok2} style={{flex:1,background:"linear-gradient(135deg,#A07828,#C9A84C)",color:"#FAF6ED",border:"none",borderRadius:12,padding:"13px",cursor:busy?"wait":"pointer",fontWeight:700,fontSize:12,letterSpacing:2,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",opacity:(!ok2||busy)?.45:1,display:"flex",alignItems:"center",justifyContent:"center",gap:10}}>
                      {busy?<><div style={{width:16,height:16,border:"2px solid rgba(255,255,255,.3)",borderTop:"2px solid #FAF6ED",borderRadius:"50%",animation:"spin .7s linear infinite"}}/>Sending…</>:"✈ Confirm Booking"}
                    </button>
                    <a href={waLink(waMsg)} target="_blank" rel="noreferrer" style={{background:"#25D366",color:"#fff",borderRadius:12,padding:"13px 18px",cursor:"pointer",fontSize:20,textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center"}}>💬</a>
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

// ════════════════════════════════════════════════════════════════
//  VIDEO MODAL
// ════════════════════════════════════════════════════════════════
function VideoModal({onClose}){
  return(
    <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(15,11,6,.9)",backdropFilter:"blur(18px)",zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center",padding:16,animation:"fadeIn .25s ease"}}>
      <div onClick={e=>e.stopPropagation()} style={{position:"relative",width:"min(900px,95vw)",borderRadius:18,overflow:"hidden",border:"1.5px solid rgba(193,156,60,.4)",boxShadow:"0 40px 100px rgba(0,0,0,.6)",animation:"popIn .3s ease"}}>
        <div style={{height:2,background:"linear-gradient(90deg,transparent,#C9A84C,#E8C96D,#C9A84C,transparent)"}}/>
        <video src="/videos/egypt-hero.mp4" autoPlay controls style={{width:"100%",display:"block",background:"#171009"}}/>
        <button onClick={onClose} style={{position:"absolute",top:12,right:12,width:34,height:34,borderRadius:"50%",background:"rgba(250,246,237,.92)",border:"1.5px solid rgba(193,156,60,.5)",color:"#A07828",fontSize:15,cursor:"pointer"}}>✕</button>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
//  LANGUAGE DROPDOWN (top utility bar / nav)
// ════════════════════════════════════════════════════════════════
function LangDropdown({current,onSelect,open,setOpen,small}){
  return(
    <div style={{position:"relative"}} className="av-langdd">
      <button onClick={()=>setOpen(!open)} className="av-iconbtn" style={{background:"rgba(201,168,76,.08)",border:"1px solid rgba(193,156,60,.28)",color:small?"rgba(250,246,237,.85)":"#A07828",padding:small?"3px 10px":"7px 13px",borderRadius:7,cursor:"pointer",fontSize:small?10:11,fontWeight:600,fontFamily:"'Josefin Sans',sans-serif",display:"flex",alignItems:"center",gap:5,whiteSpace:"nowrap"}}>
        <span>{current.flag}</span><span>{current.label}</span><span style={{fontSize:8,opacity:.7}}>▾</span>
      </button>
      {open&&(
        <div style={{position:"absolute",top:"calc(100% + 8px)",right:0,background:"#FAF6ED",border:"1.5px solid rgba(193,156,60,.3)",borderRadius:14,padding:10,zIndex:2500,minWidth:200,maxHeight:300,overflowY:"auto",boxShadow:"0 24px 56px rgba(20,15,8,.2)",animation:"slideD .18s ease",display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>
          {LANGS.map(l=>(
            <button key={l.code} className="av-navdd" onClick={()=>{onSelect(l);setOpen(false);}}
              style={{background:current.code===l.code?"rgba(201,168,76,.16)":"transparent",border:"none",borderRadius:8,padding:"7px 8px",cursor:"pointer",fontSize:11,color:current.code===l.code?"#8B6010":"#3a2c16",fontFamily:"'Josefin Sans',sans-serif",display:"flex",alignItems:"center",gap:6,textAlign:"left",fontWeight:current.code===l.code?700:400}}>
              <span>{l.flag}</span><span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ════════════════════════════════════════════════════════════════
export default function Home(){
  const navigate = useNavigate();
  const { language:globalLang, currency:globalCur, setLanguage:setGlobalLang, setCurrency:setGlobalCur, formatPrice } = useGlobal();

  const [cur,setCurLocal]       = useState(globalCur || "USD");
  const [uiLang,setUiLang]      = useState(LANGS[0]);
  const [scrolled,setSc]        = useState(false);
  const [mMenu,setMMenu]        = useState(false);
  const [cO,setCO]              = useState(false);
  const [langOpen,setLangOpen]  = useState(false);
  const [destOpen,setDestOpen]  = useState(false);
  const [adults,setAdults]      = useState(2);
  const [kids,setKids]          = useState(0);
  const [gO,setGO]              = useState(false);
  const [q,setQ]                = useState("");
  const [res,setRes]            = useState([]);
  const [email,setEmail]        = useState("");
  const [subOk,setSubOk]        = useState(false);
  const [vis,setVis]            = useState({});
  const [bookItem,setBookItem]  = useState(null);
  const [payItem,setPayItem]    = useState(null);
  const [payGuests,setPayGuests]= useState(1);
  const [videoOpen,setVideoOpen]= useState(false);
  const [aiQ,setAiQ]            = useState("");
  const [aiRes,setAiRes]        = useState("");
  const [aiLoad,setAiLoad]      = useState(false);
  const [aiDone,setAiDone]      = useState(false);

  const destRef  = useRef(null);
  const tourRef  = useRef(null);
  const revRef   = useRef(null);

  const setCur = (code) => { setCurLocal(code); setGlobalCur(code); };
  const fmtP = (p) => formatPrice ? formatPrice(p) : fmt(p,cur);

  const handleLangSelect = useCallback((lang) => {
    setUiLang(lang);
    if(setGlobalLang) setGlobalLang(lang.code);
    document.documentElement.setAttribute("lang", lang.code);
    document.documentElement.setAttribute("dir", lang.dir || "ltr");
    if(window.i18n && window.i18n.changeLanguage){ window.i18n.changeLanguage(lang.code); }
    if(window.google && window.google.translate){
      try{
        const selectEl = document.querySelector(".goog-te-combo");
        if(selectEl){ selectEl.value = lang.code; selectEl.dispatchEvent(new Event("change")); }
      }catch(e){}
    }
  }, [setGlobalLang]);

  // Google Translate engine (silent / hidden widget drives all translation)
  useEffect(()=>{
    if(!document.getElementById("gt-script")){
      window.googleTranslateElementInit=()=>{
        new window.google.translate.TranslateElement({
          pageLanguage:"en",
          includedLanguages:"en,ar,fr,es,de,it,pt,ru,zh-CN,ja,nl,he,tr,ko",
          autoDisplay:false,
        },"gt-hidden");
      };
      const s=document.createElement("script");
      s.id="gt-script";
      s.src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async=true;
      document.head.appendChild(s);
    }
  },[]);

  useEffect(()=>{if(globalCur)setCurLocal(globalCur);},[globalCur]);
  useEffect(()=>{const fn=()=>setSc(window.scrollY>10);window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn);},[]);
  useEffect(()=>{
    const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)setVis(v=>({...v,[e.target.dataset.v]:true}));});},{threshold:.08});
    document.querySelectorAll("[data-v]").forEach(el=>io.observe(el));
    return()=>io.disconnect();
  },[]);
  useEffect(()=>{
    if(!q.trim()){setRes([]);return;}
    const lq=q.toLowerCase();
    setRes(SEARCH_ALL.filter(d=>d.title.toLowerCase().includes(lq)||d.sub?.toLowerCase().includes(lq)||d.tag?.toLowerCase().includes(lq)).slice(0,7));
  },[q]);
  useEffect(()=>{
    const fn=(e)=>{
      if(!e.target.closest(".av-langdd")) setLangOpen(false);
      if(!e.target.closest(".av-curdd"))  setCO(false);
      if(!e.target.closest(".av-destdd")) setDestOpen(false);
      if(!e.target.closest(".av-travelersdd")) setGO(false);
    };
    document.addEventListener("mousedown",fn);
    return()=>document.removeEventListener("mousedown",fn);
  },[]);

  const buildAI=useCallback(async()=>{
    if(!aiQ.trim())return;
    setAiLoad(true);setAiRes("");setAiDone(false);
    try{
      const r=await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",
        headers:{"Content-Type":"application/json","anthropic-dangerous-direct-browser-access":"true"},
        body:JSON.stringify({
          model:"claude-sonnet-4-6",max_tokens:1400,
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

  const reveal=(key,delay=0)=>({opacity:vis[key]?1:0,transform:vis[key]?"none":"translateY(26px)",transition:`opacity .7s ease ${delay}s,transform .7s ease ${delay}s`});

  return(
    <div style={{background:"#FAF6ED",color:"#231A0E",minHeight:"100vh",overflowX:"hidden",fontFamily:"'Josefin Sans',sans-serif"}}>
      <style>{CSS}</style>
      <div id="gt-hidden" style={{display:"none"}}/>

      {/* ══════════════ TOP UTILITY BAR ══════════════ */}
      <div className="dn" style={{background:"#171009",height:38,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 clamp(16px,4vw,40px)",fontSize:11,color:"rgba(250,246,237,.78)",fontFamily:"'Josefin Sans',sans-serif"}}>
        <div style={{display:"flex",gap:22,alignItems:"center"}}>
          {STAT_TOP.map(([ic,t],i)=><span key={i} style={{display:"flex",alignItems:"center",gap:6,whiteSpace:"nowrap"}}><span>{ic}</span>{t}</span>)}
        </div>
        <div style={{display:"flex",gap:16,alignItems:"center"}}>
          <LangDropdown current={uiLang} onSelect={handleLangSelect} open={langOpen} setOpen={setLangOpen} small/>
          <div className="av-curdd" style={{position:"relative"}}>
            <button onClick={()=>setCO(!cO)} style={{background:"rgba(201,168,76,.08)",border:"1px solid rgba(193,156,60,.28)",color:"rgba(250,246,237,.85)",padding:"3px 10px",borderRadius:7,cursor:"pointer",fontSize:10,fontWeight:600,fontFamily:"'Josefin Sans',sans-serif"}}>{CURR[cur]?.s} {cur} ▾</button>
            {cO&&<div style={{position:"absolute",top:"calc(100% + 8px)",right:0,background:"#FAF6ED",border:"1.5px solid rgba(193,156,60,.3)",borderRadius:12,overflow:"hidden",minWidth:210,zIndex:2500,boxShadow:"0 24px 56px rgba(20,15,8,.2)",animation:"slideD .18s ease",maxHeight:300,overflowY:"auto"}}>
              {Object.entries(CURR).map(([code,{l}])=>(
                <div key={code} className="av-navdd" onClick={()=>{setCur(code);setCO(false);}} style={{padding:"9px 16px",cursor:"pointer",fontSize:11,color:cur===code?"#8B6010":"#3a2c16",fontWeight:cur===code?700:400,fontFamily:"'Josefin Sans',sans-serif"}}>{l}</div>
              ))}
            </div>}
          </div>
          <a href={`tel:+${PHONE_WA}`} style={{color:"rgba(250,246,237,.85)",textDecoration:"none",display:"flex",alignItems:"center",gap:6,whiteSpace:"nowrap"}}>📞 {PHONE_DISPLAY}</a>
          <a href={waLink()} target="_blank" rel="noreferrer" style={{color:"#5fe08a",textDecoration:"none",display:"flex",alignItems:"center",gap:6,fontWeight:600,whiteSpace:"nowrap"}}>💬 WhatsApp</a>
        </div>
      </div>

      {/* ══════════════ NAV ══════════════ */}
      <nav style={{position:"sticky",top:0,zIndex:1000,height:80,background:scrolled?"rgba(250,246,237,.98)":"rgba(250,246,237,.96)",backdropFilter:"blur(18px)",borderBottom:"1px solid rgba(193,156,60,.18)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 clamp(14px,4vw,40px)",boxShadow:scrolled?"0 4px 26px rgba(35,26,14,.1)":"none",transition:"all .3s ease"}}>
        <BrandMark size={46}/>

        <ul className="dn" style={{display:"flex",gap:"clamp(14px,2vw,26px)",listStyle:"none",alignItems:"center"}}>
          <li><Link to="/" className="av-link" style={{color:"#A07828",fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",textDecoration:"none",fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>Home</Link></li>
          <li className="av-destdd" style={{position:"relative"}}>
            <button onClick={()=>setDestOpen(!destOpen)} className="av-link" style={{background:"none",border:"none",color:"rgba(35,26,14,.62)",fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",fontWeight:700,fontFamily:"'Josefin Sans',sans-serif",cursor:"pointer",display:"flex",alignItems:"center",gap:4}}>Destinations <span style={{fontSize:8}}>▾</span></button>
            {destOpen&&(
              <div style={{position:"absolute",top:"calc(100% + 14px)",left:"50%",transform:"translateX(-50%)",background:"#FAF6ED",border:"1.5px solid rgba(193,156,60,.3)",borderRadius:14,padding:12,zIndex:2000,minWidth:320,boxShadow:"0 24px 56px rgba(20,15,8,.16)",animation:"slideD .18s ease",display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}}>
                {CITIES.map(c=>(
                  <Link key={c.id} to={`/city/${c.id}`} onClick={()=>setDestOpen(false)} className="av-navdd" style={{display:"flex",alignItems:"center",gap:8,padding:"8px 10px",borderRadius:8,textDecoration:"none",color:"#3a2c16",fontSize:12.5,fontFamily:"'Cormorant Garamond',serif"}}>
                    <span>{c.icon}</span>{c.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
          {NAV_LINKS.slice(1).map(([label,path])=>(
            <li key={path}><Link to={path} className="av-link" style={{color:"rgba(35,26,14,.62)",fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",textDecoration:"none",fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>{label}</Link></li>
          ))}
        </ul>

        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <button title="Wishlist" className="dn av-iconbtn" style={{background:"rgba(201,168,76,.08)",border:"1px solid rgba(193,156,60,.25)",width:38,height:38,borderRadius:9,cursor:"pointer",fontSize:15,color:"#A07828",alignItems:"center",justifyContent:"center",display:"flex"}}>♡</button>
          <button title="My Account" className="dn av-iconbtn" style={{background:"rgba(201,168,76,.08)",border:"1px solid rgba(193,156,60,.25)",width:38,height:38,borderRadius:9,cursor:"pointer",fontSize:15,color:"#A07828",alignItems:"center",justifyContent:"center",display:"flex"}}>⚇</button>
          <button onClick={()=>setBookItem({title:"Plan My Egypt Trip"})} className="dn av-gold" style={{background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)",color:"#FAF6ED",border:"none",borderRadius:10,padding:"12px 24px",cursor:"pointer",fontWeight:700,fontSize:11,letterSpacing:"0.16em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",boxShadow:"0 6px 22px rgba(160,120,40,.32)",whiteSpace:"nowrap",transition:"all .2s"}}>Plan My Trip</button>
          <button className="dm" style={{display:"none",background:"rgba(201,168,76,.1)",border:"1.5px solid rgba(193,156,60,.3)",color:"#A07828",width:40,height:40,borderRadius:9,cursor:"pointer",fontSize:17,alignItems:"center",justifyContent:"center"}} onClick={()=>setMMenu(!mMenu)}>{mMenu?"✕":"☰"}</button>
        </div>
      </nav>

      {/* ══════════════ MOBILE DRAWER ══════════════ */}
      {mMenu&&(
        <div style={{position:"sticky",top:80,zIndex:999,background:"#FAF6ED",borderBottom:"1px solid rgba(193,156,60,.2)",padding:"18px 22px 28px",animation:"slideD .22s ease"}}>
          {NAV_LINKS.map(([label,path])=>(
            <Link key={path} to={path} style={{display:"block",padding:"12px 0",borderBottom:"1px solid rgba(193,156,60,.1)",color:"rgba(35,26,14,.65)",fontSize:13,letterSpacing:"0.14em",textTransform:"uppercase",textDecoration:"none",fontFamily:"'Josefin Sans',sans-serif"}} onClick={()=>setMMenu(false)}>{label}</Link>
          ))}
          <div style={{marginTop:16,marginBottom:8}}>
            <div style={{fontSize:9,color:"#A07828",letterSpacing:3,textTransform:"uppercase",marginBottom:9,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>🌍 Language</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {LANGS.map(l=>(
                <button key={l.code} onClick={()=>{handleLangSelect(l);}} style={{background:uiLang.code===l.code?"rgba(201,168,76,.2)":"rgba(201,168,76,.06)",border:"1.5px solid rgba(193,156,60,.2)",color:uiLang.code===l.code?"#A07828":"rgba(35,26,14,.55)",borderRadius:7,padding:"5px 10px",cursor:"pointer",fontSize:11,fontFamily:"'Josefin Sans',sans-serif"}}>{l.flag} {l.label}</button>
              ))}
            </div>
          </div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:10,marginBottom:16}}>
            {Object.entries(CURR).slice(0,8).map(([code,{s}])=>(
              <button key={code} onClick={()=>setCur(code)} style={{background:cur===code?"rgba(201,168,76,.2)":"rgba(201,168,76,.06)",border:"1.5px solid rgba(193,156,60,.2)",color:cur===code?"#A07828":"rgba(35,26,14,.55)",borderRadius:7,padding:"5px 10px",cursor:"pointer",fontSize:10,fontFamily:"'Josefin Sans',sans-serif"}}>{s} {code}</button>
            ))}
          </div>
          <div style={{display:"flex",gap:10,marginBottom:16}}>
            <a href={`tel:+${PHONE_WA}`} style={{flex:1,textAlign:"center",background:"rgba(201,168,76,.08)",border:"1px solid rgba(193,156,60,.25)",color:"#A07828",borderRadius:10,padding:"11px",textDecoration:"none",fontSize:12,fontFamily:"'Josefin Sans',sans-serif"}}>📞 Call Us</a>
            <a href={waLink()} target="_blank" rel="noreferrer" style={{flex:1,textAlign:"center",background:"#25D366",color:"#fff",borderRadius:10,padding:"11px",textDecoration:"none",fontSize:12,fontFamily:"'Josefin Sans',sans-serif"}}>💬 WhatsApp</a>
          </div>
          <button onClick={()=>{setVideoOpen(true);setMMenu(false);}} style={{width:"100%",background:"rgba(35,26,14,.06)",border:"1px solid rgba(35,26,14,.12)",color:"#3a2c16",borderRadius:11,padding:"12px",cursor:"pointer",fontSize:12,fontFamily:"'Josefin Sans',sans-serif",marginBottom:10}}>▶ Watch Video</button>
          <button onClick={()=>{setBookItem({title:"Plan My Egypt Trip"});setMMenu(false);}} style={{width:"100%",background:"linear-gradient(135deg,#A07828,#C9A84C)",color:"#FAF6ED",border:"none",borderRadius:11,padding:"14px",cursor:"pointer",fontWeight:700,fontSize:13,letterSpacing:"0.16em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif"}}>Plan My Trip ✦</button>
        </div>
      )}

      {/* ══════════════ HERO ══════════════ */}
      <section style={{position:"relative",minHeight:"min(86vh,760px)",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <img src={HERO_IMG} alt="Sphinx and Pyramids of Giza at sunset"
          style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",animation:"heroZoom 24s ease-in-out infinite alternate"}}
          onError={e=>e.target.src="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1600&q=80"}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(100deg,rgba(17,12,6,.86) 0%,rgba(17,12,6,.6) 38%,rgba(17,12,6,.18) 68%,rgba(17,12,6,.05) 100%),linear-gradient(to top,rgba(17,12,6,.55) 0%,transparent 35%)"}}/>

        <div style={{position:"relative",zIndex:2,width:"min(620px,92%)",padding:"clamp(60px,10vh,90px) clamp(20px,5vw,56px) clamp(74px,9vh,96px)"}}>
          <div data-v="hEy" style={{display:"inline-block",fontSize:10,color:"#E8C96D",letterSpacing:"0.3em",textTransform:"uppercase",fontWeight:700,marginBottom:18,fontFamily:"'Josefin Sans',sans-serif",...reveal("hEy")}}>Luxury Journeys Through Timeless Egypt</div>
          <h1 data-v="hT" style={{fontFamily:"'Cinzel',serif",fontWeight:700,lineHeight:1.08,marginBottom:18,...reveal("hT",.08)}}>
            <span style={{display:"block",fontSize:"clamp(34px,5.2vw,58px)",color:"#FAF6ED"}}>Egypt,</span>
            <span style={{display:"block",fontSize:"clamp(34px,5.2vw,58px)",color:"#E8C96D"}}>Curated Beautifully.</span>
          </h1>
          <p data-v="hP" style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:"clamp(14px,1.6vw,18px)",color:"rgba(250,246,237,.78)",lineHeight:1.75,marginBottom:30,maxWidth:440,...reveal("hP",.16)}}>
            Private tours. Expert guides. Unforgettable memories. Designed just for you.
          </p>
          <div data-v="hB" style={{display:"flex",gap:13,flexWrap:"wrap",...reveal("hB",.24)}}>
            <button onClick={()=>navigate("/tours")} style={{background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)",color:"#1B130A",border:"none",borderRadius:10,padding:"15px 28px",cursor:"pointer",fontWeight:700,fontSize:12,letterSpacing:"0.16em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",boxShadow:"0 8px 28px rgba(160,120,40,.4)"}}>Explore Tours</button>
            <button onClick={()=>setBookItem({title:"Plan My Egypt Trip"})} style={{background:"rgba(250,246,237,.08)",border:"1.5px solid rgba(250,246,237,.55)",color:"#FAF6ED",borderRadius:10,padding:"15px 26px",cursor:"pointer",fontWeight:700,fontSize:12,letterSpacing:"0.16em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",backdropFilter:"blur(6px)"}}>Plan My Trip</button>
            <button onClick={()=>setVideoOpen(true)} style={{background:"rgba(250,246,237,.1)",border:"1.5px solid rgba(250,246,237,.35)",color:"#FAF6ED",borderRadius:10,padding:"15px 22px",cursor:"pointer",fontWeight:700,fontSize:12,letterSpacing:"0.12em",fontFamily:"'Josefin Sans',sans-serif",display:"flex",alignItems:"center",gap:9,backdropFilter:"blur(6px)",position:"relative"}}>
              <span style={{width:22,height:22,borderRadius:"50%",background:"#E8C96D",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:"#1B130A"}}>▶</span>
              Watch Video
              <span style={{position:"absolute",inset:-1,borderRadius:10,border:"1.5px solid rgba(232,201,109,.5)",animation:"pulseRing 2.2s ease-in-out infinite",pointerEvents:"none"}}/>
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════ FLOATING SEARCH CARD ══════════════ */}
      <div style={{padding:"0 clamp(16px,4vw,48px)",position:"relative",zIndex:20,marginTop:"clamp(-48px,-5vw,-30px)"}}>
        <div style={{maxWidth:1180,margin:"0 auto",position:"relative"}}>
          <div className="av-search-card" style={{background:"#fff",borderRadius:18,boxShadow:"0 26px 60px rgba(20,15,8,.18)",padding:"10px 22px"}}>
            <div className="av-search-field">
              <span style={{fontSize:15,color:"#A07828"}}>📍</span>
              <div style={{width:"100%"}}>
                <div style={{fontSize:9,color:"#9C7A3C",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:2}}>Where to?</div>
                <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search destination"/>
              </div>
            </div>
            <div className="av-search-field">
              <span style={{fontSize:15,color:"#A07828"}}>▦</span>
              <div style={{width:"100%"}}>
                <div style={{fontSize:9,color:"#9C7A3C",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:2}}>Tour Type</div>
                <select defaultValue={TOUR_TYPES[0]}>{TOUR_TYPES.map(t=><option key={t}>{t}</option>)}</select>
              </div>
            </div>
            <div className="av-search-field">
              <span style={{fontSize:15,color:"#A07828"}}>📅</span>
              <div style={{width:"100%"}}>
                <div style={{fontSize:9,color:"#9C7A3C",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:2}}>Travel Date</div>
                <input type="date" style={{colorScheme:"light"}}/>
              </div>
            </div>
            <div className="av-search-field av-travelersdd" style={{position:"relative",cursor:"pointer"}} onClick={()=>setGO(!gO)}>
              <span style={{fontSize:15,color:"#A07828"}}>👥</span>
              <div style={{width:"100%"}}>
                <div style={{fontSize:9,color:"#9C7A3C",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:2}}>Travelers</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14}}>{adults} Adults · {kids} Children</div>
              </div>
              {gO&&(
                <div onClick={e=>e.stopPropagation()} style={{position:"absolute",top:"calc(100% + 12px)",left:0,background:"#FAF6ED",border:"1.5px solid rgba(193,156,60,.3)",borderRadius:13,padding:16,minWidth:220,zIndex:100,boxShadow:"0 24px 60px rgba(20,15,8,.16)",animation:"slideD .18s ease"}}>
                  {[["Adults",adults,setAdults,1],["Children",kids,setKids,0]].map(([lbl,val,set,min])=>(
                    <div key={lbl} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:13}}>
                      <span style={{fontSize:14,color:"#231A0E",fontFamily:"'Cormorant Garamond',serif"}}>{lbl}</span>
                      <div style={{display:"flex",alignItems:"center",gap:12}}>
                        <button onClick={()=>set(Math.max(min,val-1))} style={{width:27,height:27,borderRadius:"50%",background:"rgba(201,168,76,.12)",border:"1.5px solid rgba(193,156,60,.35)",color:"#A07828",cursor:"pointer",fontSize:16}}>−</button>
                        <span style={{color:"#A07828",fontWeight:700,minWidth:16,textAlign:"center"}}>{val}</span>
                        <button onClick={()=>set(val+1)} style={{width:27,height:27,borderRadius:"50%",background:"rgba(201,168,76,.12)",border:"1.5px solid rgba(193,156,60,.35)",color:"#A07828",cursor:"pointer",fontSize:16}}>+</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button onClick={()=>{ if(res.length) navigate(res[0].url); else navigate("/tours"); }} style={{background:"linear-gradient(135deg,#A07828,#C9A84C)",color:"#FAF6ED",border:"none",borderRadius:11,padding:"13px 26px",cursor:"pointer",fontWeight:700,fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",margin:"6px 0 6px 8px",whiteSpace:"nowrap",boxShadow:"0 6px 20px rgba(160,120,40,.3)"}}>Search Tours</button>
          </div>
          {res.length>0&&(
            <div style={{background:"#fff",border:"1px solid rgba(193,156,60,.2)",borderRadius:14,marginTop:8,overflow:"hidden",maxHeight:330,overflowY:"auto",boxShadow:"0 18px 48px rgba(20,15,8,.12)",animation:"slideD .18s ease"}}>
              {res.map((r,i)=>(
                <div key={i} onClick={()=>{navigate(r.url);setQ("");setRes([]);}} style={{display:"flex",alignItems:"center",gap:13,padding:"11px 16px",cursor:"pointer",borderBottom:"1px solid rgba(193,156,60,.08)"}}>
                  <img src={r.img} alt="" style={{width:54,height:42,borderRadius:9,objectFit:"cover",flexShrink:0}} onError={e=>e.target.style.display="none"}/>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontFamily:"'Cinzel',serif",fontSize:13,fontWeight:600,color:"#231A0E"}}>{r.title}</div>
                    <div style={{fontSize:11,color:"#9C7A3C",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic"}}>{r.sub}</div>
                  </div>
                  <div style={{background:r.color?`${r.color}18`:"rgba(201,168,76,.1)",border:`1px solid ${r.color||"rgba(193,156,60,.3)"}`,borderRadius:6,padding:"2px 10px",fontSize:9,color:r.color||"#A07828",textTransform:"uppercase",flexShrink:0}}>{r.tag}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ══════════════ TRUST STRIP ══════════════ */}
      <section style={{padding:"clamp(34px,5vw,52px) clamp(16px,4vw,48px) clamp(16px,3vw,24px)"}}>
        <div className="av-trust-grid" style={{maxWidth:1180,margin:"0 auto"}}>
          {TRUST_STRIP.map((t,i)=>(
            <div key={i} data-v={`tr${i}`} style={{display:"flex",alignItems:"center",gap:12,padding:"6px 4px",...reveal(`tr${i}`,i*.06)}}>
              <span style={{fontSize:24,flexShrink:0}}>{t.icon}</span>
              <div>
                <div style={{fontFamily:"'Cinzel',serif",fontSize:12.5,fontWeight:700,color:"#231A0E"}}>{t.t}</div>
                <div style={{fontSize:11.5,color:"#9C7A3C",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic"}}>{t.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ DESTINATIONS ══════════════ */}
      <section className="av-section">
        <SectionHead eyebrow="Popular Destinations" title="Explore Egypt's Most Iconic Destinations" onViewAll={()=>navigate("/tours")} viewAllLabel="View All Destinations" scrollRef={destRef}/>
        <ScrollRow ref={destRef}>
          {CITIES.map(c=><CityCard key={c.id} c={c} navigate={navigate} fmtP={fmtP}/>)}
        </ScrollRow>
      </section>

      {/* ══════════════ WHY US ══════════════ */}
      <section style={{padding:"0 clamp(16px,4vw,48px) clamp(48px,7vw,80px)"}}>
        <div data-v="why" style={{textAlign:"center",marginBottom:30,...reveal("why")}}>
          <span className="av-eyebrow">Why Travelers Choose Aurevian</span>
        </div>
        <div className="av-why-grid" style={{maxWidth:1180,margin:"0 auto"}}>
          {WHY_US.map((w,i)=>(
            <div key={i} data-v={`wy${i}`} style={{background:"#fff",border:"1px solid rgba(35,26,14,.08)",borderRadius:16,padding:"20px 16px",textAlign:"center",boxShadow:"0 6px 20px rgba(35,26,14,.06)",...reveal(`wy${i}`,i*.06)}}>
              <div style={{fontSize:26,marginBottom:10}}>{w.icon}</div>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:13,fontWeight:700,color:"#231A0E",marginBottom:5}}>{w.t}</div>
              <div style={{fontSize:11.5,color:"#9C7A3C",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",lineHeight:1.5}}>{w.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ FEATURED TOURS ══════════════ */}
      <section className="av-section" style={{background:"var(--cream2)"}}>
        <SectionHead eyebrow="Featured Tours" title="Most Loved Experiences" onViewAll={()=>navigate("/packages")} viewAllLabel="View All Tours" scrollRef={tourRef}/>
        <ScrollRow ref={tourRef}>
          {PACKAGES.map((p,i)=><TourCard key={i} p={p} navigate={navigate} fmtP={fmtP} onBook={setBookItem}/>)}
        </ScrollRow>
        <div style={{textAlign:"center",marginTop:34}}>
          <button onClick={()=>navigate("/packages")} style={{background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)",color:"#FAF6ED",border:"none",borderRadius:11,padding:"14px 36px",cursor:"pointer",fontWeight:700,fontSize:12,letterSpacing:"0.16em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",boxShadow:"0 8px 26px rgba(160,120,40,.32)"}}>✦ Explore All {PACKAGES_COUNT}+ Packages</button>
        </div>
      </section>

      {/* ══════════════ CTA BANNER ══════════════ */}
      <div style={{margin:"clamp(48px,7vw,80px) clamp(16px,4vw,48px)",borderRadius:22,overflow:"hidden",position:"relative"}}>
        <img src={CTA_IMG} alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}} onError={e=>e.target.style.display="none"}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(115deg,rgba(17,12,6,.92) 0%,rgba(17,12,6,.74) 45%,rgba(17,12,6,.55) 100%)"}}/>
        <div data-v="cta" style={{position:"relative",padding:"clamp(36px,5vw,60px) clamp(22px,5vw,56px)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:28,...reveal("cta")}}>
          <div style={{maxWidth:420}}>
            <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(22px,3.2vw,34px)",fontWeight:700,color:"#FAF6ED",lineHeight:1.25,marginBottom:10}}>Create Your Dream<br/>Egypt Journey</h2>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",color:"rgba(250,246,237,.65)",fontSize:14,marginBottom:22,lineHeight:1.7}}>Tell us what you love and we'll craft a custom itinerary just for you.</p>
            <button onClick={()=>setBookItem({title:"Plan My Custom Trip"})} style={{background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)",color:"#1B130A",border:"none",borderRadius:10,padding:"14px 30px",cursor:"pointer",fontWeight:700,fontSize:12,letterSpacing:"0.16em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif"}}>Plan My Custom Trip</button>
          </div>
          <div style={{display:"flex",gap:30,flexWrap:"wrap"}}>
            {[["⚙️","100% Customizable","Your trip, your way"],["🧭","Expert Travel Planners","Personalized service"],["🛡️","Best Price Guarantee","Unbeatable prices"]].map(([ic,t,d])=>(
              <div key={t} style={{display:"flex",alignItems:"center",gap:10,maxWidth:170}}>
                <span style={{fontSize:22}}>{ic}</span>
                <div>
                  <div style={{fontSize:12,fontWeight:700,color:"#FAF6ED",fontFamily:"'Josefin Sans',sans-serif"}}>{t}</div>
                  <div style={{fontSize:11,color:"rgba(250,246,237,.6)",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic"}}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════ AI TRIP BUILDER ══════════════ */}
      <section id="ai-sec" className="av-section">
        <div data-v="ai" style={{textAlign:"center",marginBottom:"clamp(28px,4vw,44px)",...reveal("ai")}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:9,background:"rgba(201,168,76,.1)",border:"1.5px solid rgba(193,156,60,.3)",borderRadius:30,padding:"7px 20px",marginBottom:16}}>
            <span style={{fontSize:16}}>🤖</span>
            <span style={{fontSize:10,color:"#A07828",letterSpacing:"0.3em",textTransform:"uppercase",fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>AI-Powered Planning</span>
            <span style={{background:"linear-gradient(135deg,#A07828,#C9A84C)",color:"#FAF6ED",borderRadius:18,padding:"2px 9px",fontSize:8,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>NEW</span>
          </div>
          <h2 className="av-title">Build Your Perfect Egypt Trip with AI</h2>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",color:"#9C7A3C",fontSize:"clamp(13px,1.7vw,16px)",maxWidth:600,margin:"10px auto 0"}}>Describe your dream journey — get a complete, priced itinerary in seconds.</p>
        </div>

        <div className="av-dest-top" style={{gridTemplateColumns:"1fr 1.5fr",gap:28,maxWidth:1100,margin:"0 auto",alignItems:"start"}}>
          <div>
            <div style={{background:"#fff",border:"1px solid rgba(35,26,14,.08)",borderRadius:16,padding:18,display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {[["📅","Day-by-Day"],["💰","Real Prices"],["🏨","Hotels"],["🗺️","Transport"],["🍽️","Dining"],["📋","Tips"]].map(([ic,t])=>(
                <div key={t} className="av-chip" style={{display:"flex",alignItems:"center",gap:8,background:"rgba(201,168,76,.05)",border:"1px solid rgba(193,156,60,.18)",borderRadius:10,padding:"10px 11px",transition:"all .2s"}}>
                  <span style={{fontSize:16}}>{ic}</span><span style={{fontSize:11,fontWeight:600,color:"#231A0E",fontFamily:"'Josefin Sans',sans-serif"}}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:10}}>
              {[["🔒","Secure"],["⚡","Instant"],["🌍","13 Langs"],["💯","Free"]].map(([ic,t])=>(
                <div key={t} style={{background:"rgba(201,168,76,.05)",border:"1px solid rgba(193,156,60,.16)",borderRadius:10,padding:"10px",textAlign:"center"}}>
                  <div style={{fontSize:15}}>{ic}</div>
                  <div style={{fontSize:10,fontWeight:700,color:"#8B6010",fontFamily:"'Josefin Sans',sans-serif",marginTop:2}}>{t}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{background:"#fff",border:"1px solid rgba(35,26,14,.08)",borderRadius:18,padding:"clamp(20px,3vw,30px)",boxShadow:"0 10px 36px rgba(35,26,14,.1)"}}>
            <label style={{display:"block",fontSize:10,color:"#A07828",letterSpacing:"0.25em",textTransform:"uppercase",marginBottom:11,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Describe your dream Egypt journey</label>
            <textarea value={aiQ} onChange={e=>setAiQ(e.target.value)} rows={5}
              placeholder="e.g. 10 days Egypt for 2 people — Cairo pyramids, 4-night Nile cruise, 3 nights Hurghada diving, 4-star hotels, total budget $3,500"
              style={{width:"100%",background:"rgba(201,168,76,.05)",border:"1.5px solid rgba(193,156,60,.22)",borderRadius:12,padding:"14px 16px",color:"#231A0E",fontSize:14,outline:"none",fontFamily:"'Cormorant Garamond',serif",lineHeight:1.7,resize:"vertical",marginBottom:13}}/>
            <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16}}>
              {["10 days Egypt $3,500 for 2 — Cairo, Nile cruise, Hurghada","7-day Nile cruise + pyramids, mid-range","Luxury honeymoon Egypt 10 nights","Family Egypt 2 weeks $5,000 kids-friendly"].map((ch,i)=>(
                <button key={i} className="av-chip" onClick={()=>setAiQ(ch)} style={{background:"rgba(201,168,76,.07)",border:"1.5px solid rgba(193,156,60,.22)",color:"rgba(35,26,14,.65)",borderRadius:20,padding:"6px 14px",fontSize:11,cursor:"pointer",fontFamily:"'Josefin Sans',sans-serif",transition:"all .2s"}}>{ch.length>40?ch.slice(0,38)+"…":ch}</button>
              ))}
            </div>
            <button onClick={buildAI} disabled={aiLoad||!aiQ.trim()} style={{width:"100%",background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)",color:"#FAF6ED",border:"none",borderRadius:12,padding:"16px",cursor:aiLoad?"wait":"pointer",fontWeight:700,fontSize:13,letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",opacity:(aiLoad||!aiQ.trim())?.5:1,display:"flex",alignItems:"center",justifyContent:"center",gap:11,boxShadow:"0 8px 30px rgba(160,120,40,.28)"}}>
              {aiLoad?<><div style={{width:17,height:17,border:"2px solid rgba(250,246,237,.3)",borderTop:"2px solid #FAF6ED",borderRadius:"50%",animation:"spin .7s linear infinite"}}/>Crafting your perfect itinerary…</>:"🤖 Generate My Egypt Itinerary"}
            </button>
            {aiRes&&(
              <div style={{marginTop:18,background:"rgba(201,168,76,.05)",border:"1.5px solid rgba(193,156,60,.2)",borderRadius:13,padding:"clamp(15px,3vw,22px)",color:"#231A0E",fontSize:14,lineHeight:1.85,whiteSpace:"pre-wrap",maxHeight:480,overflowY:"auto",fontFamily:"'Cormorant Garamond',serif",animation:"fadeIn .4s ease"}}>{aiRes}</div>
            )}
            {aiDone&&(
              <div style={{marginTop:14,display:"flex",gap:11,flexWrap:"wrap"}}>
                <button onClick={()=>window.open(waLink(),"_blank")} style={{flex:1,background:"#25D366",color:"#fff",border:"none",borderRadius:10,padding:"13px 18px",cursor:"pointer",fontWeight:700,fontSize:13,fontFamily:"'Josefin Sans',sans-serif",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>💬 Send & Book on WhatsApp</button>
                <button onClick={()=>{setAiQ("");setAiRes("");setAiDone(false);}} style={{background:"rgba(35,26,14,.06)",border:"1px solid rgba(35,26,14,.1)",color:"#9C7A3C",borderRadius:10,padding:"13px 18px",cursor:"pointer",fontSize:13,fontFamily:"'Josefin Sans',sans-serif"}}>New Itinerary</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════ REVIEWS ══════════════ */}
      <section className="av-section" style={{background:"var(--cream2)"}}>
        <SectionHead eyebrow="Traveler Reviews" title="What Our Travelers Say" onViewAll={()=>navigate("/contact")} viewAllLabel="View All Reviews" scrollRef={revRef}/>
        <div data-v="revstars" style={{display:"flex",alignItems:"center",gap:11,marginBottom:22,...reveal("revstars")}}>
          <span style={{fontFamily:"'Cinzel',serif",fontSize:20,color:"#A07828",fontWeight:700}}>4.9</span>
          <Stars n={5}/>
          <span style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:13,color:"#9C7A3C"}}>Based on 2,000+ reviews</span>
        </div>
        <ScrollRow ref={revRef}>
          {REVIEWS.map((r,i)=><ReviewCard key={i} r={r}/>)}
        </ScrollRow>
      </section>

      {/* ══════════════ GALLERY ══════════════ */}
      <section className="av-section">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:26,flexWrap:"wrap",gap:10}}>
          <div>
            <span className="av-eyebrow">Discover Egypt</span>
            <h2 className="av-title">Through Our Lens</h2>
          </div>
          <a href="#" style={{color:"#9C7A3C",fontSize:12,textDecoration:"none",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic"}}>Follow our journey 📷</a>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))",gap:10}}>
          {CITIES.map(c=>(
            <div key={c.id} className="av-gallery-item" onClick={()=>navigate(`/city/${c.id}`)} style={{position:"relative",borderRadius:12,aspectRatio:"1",cursor:"pointer"}}>
              <img src={c.img} alt={c.name} style={{width:"100%",height:"100%",objectFit:"cover",display:"block",borderRadius:12}} onError={e=>e.target.src=`https://placehold.co/300x300/EDE3C8/8B6010?text=${encodeURIComponent(c.name)}`}/>
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(17,12,6,.55),transparent 55%)",borderRadius:12}}/>
              <span style={{position:"absolute",bottom:8,left:10,color:"#FAF6ED",fontSize:11,fontFamily:"'Cinzel',serif",fontWeight:600,textShadow:"0 2px 8px rgba(0,0,0,.5)"}}>{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ DARK STATS + NEWSLETTER ══════════════ */}
      <section style={{background:"#171009"}}>
        <div className="av-stats-row" style={{maxWidth:1180,margin:"0 auto",padding:"clamp(26px,4vw,38px) clamp(16px,4vw,40px)",borderBottom:"1px solid rgba(193,156,60,.16)"}}>
          {STAT_MAIN.map(([ic,n,l],i)=>(
            <div key={i} data-v={`sm${i}`} style={{textAlign:"center",borderRight:i<STAT_MAIN.length-1?"1px solid rgba(193,156,60,.14)":"none",padding:"0 10px",...reveal(`sm${i}`,i*.06)}}>
              <div style={{fontSize:20,marginBottom:5}}>{ic}</div>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(18px,2.2vw,26px)",fontWeight:700,color:"#E8C96D"}}>{n}</div>
              <div style={{fontSize:10,color:"rgba(250,246,237,.55)",letterSpacing:"0.12em",textTransform:"uppercase",marginTop:4,fontFamily:"'Josefin Sans',sans-serif"}}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{maxWidth:1180,margin:"0 auto",padding:"clamp(26px,4vw,40px) clamp(16px,4vw,40px)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:22}}>
          <div style={{maxWidth:420}}>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:18,fontWeight:700,color:"#FAF6ED",marginBottom:5}}>Get Exclusive Travel Offers</div>
            <div style={{fontSize:12.5,color:"rgba(250,246,237,.55)",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",marginBottom:14}}>Subscribe and save on your next adventure.</div>
            {!subOk?(
              <div style={{display:"flex",gap:9,flexWrap:"wrap"}}>
                <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email" style={{background:"rgba(250,246,237,.08)",border:"1.5px solid rgba(193,156,60,.3)",borderRadius:9,padding:"11px 15px",color:"#FAF6ED",fontSize:13,outline:"none",minWidth:200,fontFamily:"'Cormorant Garamond',serif"}}/>
                <button onClick={()=>email&&setSubOk(true)} style={{background:"linear-gradient(135deg,#A07828,#C9A84C)",color:"#FAF6ED",border:"none",borderRadius:9,padding:"11px 22px",cursor:"pointer",fontWeight:700,fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif"}}>Subscribe</button>
              </div>
            ):(<div style={{color:"#E8C96D",fontSize:14,fontFamily:"'Cormorant Garamond',serif"}}>✅ Thank you! Welcome to the Aurevian family.</div>)}
          </div>
          <div style={{display:"flex",alignItems:"center",gap:14}}>
            <span style={{fontSize:11,color:"rgba(250,246,237,.55)",fontFamily:"'Josefin Sans',sans-serif",letterSpacing:"0.1em"}}>FOLLOW US</span>
            <div style={{display:"flex",gap:8}}>
              {[["f","Facebook"],["📸","Instagram"],["▶","YouTube"],["♪","TikTok"],["💬","WhatsApp"]].map(([ic,nm])=>(
                <a key={nm} href={nm==="WhatsApp"?waLink():"#"} target={nm==="WhatsApp"?"_blank":undefined} rel="noreferrer" title={nm} className="av-social" style={{width:34,height:34,borderRadius:9,background:"rgba(250,246,237,.08)",border:"1.5px solid rgba(193,156,60,.25)",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(250,246,237,.75)",textDecoration:"none",fontSize:13,transition:"all .2s"}}>{ic}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer style={{background:"#FBF8F0",padding:"clamp(40px,6vw,68px) clamp(16px,4vw,48px) clamp(20px,3vw,26px)"}}>
        <div className="av-footer-grid" style={{marginBottom:"clamp(28px,4vw,44px)"}}>
          <div>
            <div style={{marginBottom:15}}><BrandMark size={48}/></div>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",color:"#9C7A3C",fontSize:13,lineHeight:1.75,marginBottom:16,maxWidth:260}}>We craft luxury journeys across Egypt with passion, expertise and attention to every detail. Your adventure, perfectly curated.</p>
            <div style={{display:"flex",gap:8}}>
              {[["f","Facebook"],["📸","Instagram"],["▶","YouTube"],["♪","TikTok"],["💬","WhatsApp"]].map(([ic,nm])=>(
                <a key={nm} href={nm==="WhatsApp"?waLink():"#"} target={nm==="WhatsApp"?"_blank":undefined} rel="noreferrer" title={nm} className="av-social" style={{width:33,height:33,borderRadius:8,background:"rgba(201,168,76,.1)",border:"1.5px solid rgba(193,156,60,.25)",display:"flex",alignItems:"center",justifyContent:"center",color:"#9C7A3C",textDecoration:"none",fontSize:12,transition:"all .2s"}}>{ic}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{color:"#8B6010",fontSize:9,letterSpacing:"0.25em",textTransform:"uppercase",marginBottom:15,fontWeight:700,paddingBottom:9,borderBottom:"1px solid rgba(193,156,60,.2)",fontFamily:"'Josefin Sans',sans-serif"}}>Destinations</div>
            {FOOTER_DEST.map(([lbl,path])=>(
              <Link key={lbl} to={path} className="av-footlink" style={{display:"block",color:"#9C7A3C",fontSize:13,marginBottom:9,textDecoration:"none",fontFamily:"'Cormorant Garamond',serif"}}>{lbl}</Link>
            ))}
          </div>
          <div>
            <div style={{color:"#8B6010",fontSize:9,letterSpacing:"0.25em",textTransform:"uppercase",marginBottom:15,fontWeight:700,paddingBottom:9,borderBottom:"1px solid rgba(193,156,60,.2)",fontFamily:"'Josefin Sans',sans-serif"}}>Tours</div>
            {FOOTER_TOURS.map(([lbl,path])=>(
              <Link key={lbl} to={path} className="av-footlink" style={{display:"block",color:"#9C7A3C",fontSize:13,marginBottom:9,textDecoration:"none",fontFamily:"'Cormorant Garamond',serif"}}>{lbl}</Link>
            ))}
          </div>
          <div>
            <div style={{color:"#8B6010",fontSize:9,letterSpacing:"0.25em",textTransform:"uppercase",marginBottom:15,fontWeight:700,paddingBottom:9,borderBottom:"1px solid rgba(193,156,60,.2)",fontFamily:"'Josefin Sans',sans-serif"}}>Company</div>
            {FOOTER_COMPANY.map(([lbl,path])=>(
              <Link key={lbl} to={path} className="av-footlink" style={{display:"block",color:"#9C7A3C",fontSize:13,marginBottom:9,textDecoration:"none",fontFamily:"'Cormorant Garamond',serif"}}>{lbl}</Link>
            ))}
            <div style={{color:"#8B6010",fontSize:9,letterSpacing:"0.25em",textTransform:"uppercase",margin:"16px 0 15px",fontWeight:700,paddingBottom:9,borderBottom:"1px solid rgba(193,156,60,.2)",fontFamily:"'Josefin Sans',sans-serif"}}>Support</div>
            {FOOTER_SUPPORT.map(([lbl,path])=>(
              <Link key={lbl} to={path} className="av-footlink" style={{display:"block",color:"#9C7A3C",fontSize:13,marginBottom:9,textDecoration:"none",fontFamily:"'Cormorant Garamond',serif"}}>{lbl}</Link>
            ))}
          </div>
          <div>
            <div style={{color:"#8B6010",fontSize:9,letterSpacing:"0.25em",textTransform:"uppercase",marginBottom:15,fontWeight:700,paddingBottom:9,borderBottom:"1px solid rgba(193,156,60,.2)",fontFamily:"'Josefin Sans',sans-serif"}}>Contact Us</div>
            <a href={`tel:+${PHONE_WA}`} style={{display:"flex",gap:9,marginBottom:11,fontSize:13,color:"#9C7A3C",fontFamily:"'Cormorant Garamond',serif",textDecoration:"none"}}><span style={{color:"#A07828"}}>📞</span>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} style={{display:"flex",gap:9,marginBottom:11,fontSize:13,color:"#9C7A3C",fontFamily:"'Cormorant Garamond',serif",textDecoration:"none"}}><span style={{color:"#A07828"}}>✉</span>{EMAIL}</a>
            <div style={{display:"flex",gap:9,marginBottom:14,fontSize:13,color:"#9C7A3C",fontFamily:"'Cormorant Garamond',serif"}}><span style={{color:"#A07828"}}>📍</span>Cairo, Egypt</div>
            <a href={waLink()} target="_blank" rel="noreferrer" style={{display:"block",background:"#25D366",color:"#fff",textAlign:"center",borderRadius:10,padding:"11px",textDecoration:"none",fontSize:12,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>💬 WhatsApp Us</a>
          </div>
        </div>
        <div style={{borderTop:"1px solid rgba(193,156,60,.15)",paddingTop:"clamp(16px,3vw,20px)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
          <span style={{color:"rgba(35,26,14,.5)",fontSize:12,fontFamily:"'Josefin Sans',sans-serif"}}>© 2026 Aurevian Tours. All rights reserved.</span>
          <div style={{display:"flex",gap:8}}>
            {["VISA","Mastercard","PayPal","Apple Pay"].map(b=>(
              <span key={b} style={{background:"rgba(201,168,76,.08)",border:"1px solid rgba(193,156,60,.2)",borderRadius:6,padding:"3px 10px",color:"rgba(35,26,14,.5)",fontSize:9,letterSpacing:"0.06em",fontFamily:"'Josefin Sans',sans-serif"}}>{b}</span>
            ))}
          </div>
        </div>
      </footer>

      {/* ══════════════ FLOATING BUTTONS ══════════════ */}
      <a href={waLink()} target="_blank" rel="noreferrer" style={{position:"fixed",bottom:76,right:20,background:"#25D366",color:"#fff",borderRadius:30,padding:"11px 18px",textDecoration:"none",fontWeight:700,fontSize:12,display:"flex",alignItems:"center",gap:8,zIndex:500,boxShadow:"0 6px 24px rgba(37,211,102,.45)",fontFamily:"'Josefin Sans',sans-serif"}}>💬 <span>WhatsApp</span></a>
      <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{position:"fixed",bottom:20,right:20,width:44,height:44,borderRadius:11,background:"rgba(201,168,76,.16)",border:"1.5px solid rgba(193,156,60,.4)",color:"#A07828",fontSize:15,cursor:"pointer",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(35,26,14,.14)"}}>▲</button>

      {/* ══════════════ MODALS ══════════════ */}
      {bookItem&&<BookingModal item={bookItem} onClose={()=>setBookItem(null)} cur={cur}/>}
      {payItem&&<PaymentModal item={payItem} guests={payGuests} onClose={()=>setPayItem(null)}/>}
      {videoOpen&&<VideoModal onClose={()=>setVideoOpen(false)}/>}
    </div>
  );
}