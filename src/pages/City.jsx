// ============================================================
//  CityPage.jsx — Golden Egypt Tours
//  Route: /city/:cityId
//  Data source: API (http://localhost:5000/api)
// ============================================================

import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getToursByCity, getCityBySlug, getAllCities } from "../api/index";

// ─────────────────────────────────────────────────────────────
//  CITY META  — hero images + accent per city (static)
// ─────────────────────────────────────────────────────────────
const CITY_META = {
  cairo: {
    heroImages: [
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1800&q=90",
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1800&q=90",
      "https://images.unsplash.com/photo-1572977078501-8c8f3e4fdd34?w=1800&q=90",
    ],
    color: "#C9A84C", glyph: "𓂀",
    glyphs: ["𓂀","𓃭","𓆑","𓇋","𓅓","𓂋","𓏏","𓈖"],
    tagline: "Where Eternity Meets the Living City",
    desc: "Capital of 5,000 years of civilization. Home to the last surviving ancient wonder, the legendary Egyptian Museum, and a beating modern metropolis unlike anywhere on earth.",
    highlights: ["Great Pyramids of Giza","Egyptian Museum","Khan el-Khalili","Islamic Cairo","Coptic Quarter","Nile Dinner Cruise"],
  },
  luxor: {
    heroImages: [
      "https://images.unsplash.com/photo-1601921004897-b7d582836990?w=1800&q=90",
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1800&q=90",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1800&q=90",
    ],
    color: "#E8C96D", glyph: "𓏏",
    glyphs: ["𓏏","𓈖","𓃀","𓇯","𓆣","𓋴","𓊃","𓌀"],
    tagline: "The World's Greatest Open-Air Museum",
    desc: "Once the royal capital Thebes — 3,500 years of concentrated wonder. Valley of the Kings, Karnak's colossal columns, and golden hot-air balloons floating at sunrise over the Nile.",
    highlights: ["Valley of the Kings","Karnak Temple","Hot Air Balloon","Hatshepsut Temple","Luxor Temple","Felucca Sunset"],
  },
  aswan: {
    heroImages: [
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1800&q=90",
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1800&q=90",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1800&q=90",
    ],
    color: "#F0A500", glyph: "𓆣",
    glyphs: ["𓆣","𓈖","𓌀","𓍯","𓎛","𓋴","𓊃","𓂀"],
    tagline: "Nubia's Jewel on the Sacred Nile",
    desc: "Egypt's southernmost treasure — slower, dreamier, more exotic. Cobalt-painted Nubian villages, silent feluccas, and the magnificent Abu Simbel temples rising from Lake Nasser.",
    highlights: ["Abu Simbel","Philae Temple","Nubian Village","Felucca Sailing","Elephantine Island","Lake Nasser Sunset"],
  },
  alexandria: {
    heroImages: [
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1800&q=90",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1800&q=90",
      "https://images.unsplash.com/photo-1560275619-4cc5a455b0a6?w=1800&q=90",
    ],
    color: "#6BAADF", glyph: "𓇯",
    glyphs: ["𓇯","𓈖","𓉐","𓊃","𓋴","𓌀","𓍯","𓎛"],
    tagline: "Pearl of the Mediterranean",
    desc: "Alexander's legendary city — where Greek philosophy, Egyptian mystique and Roman grandeur fused into something the world has never seen since.",
    highlights: ["Bibliotheca Alexandrina","Catacombs","Qaitbay Citadel","Montaza Palace","Roman Amphitheatre","Stanley Beach"],
  },
  hurghada: {
    heroImages: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1800&q=90",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1800&q=90",
      "https://images.unsplash.com/photo-1560275619-4cc5a455b0a6?w=1800&q=90",
    ],
    color: "#00C4D4", glyph: "𓋴",
    glyphs: ["𓋴","𓈖","𓌀","𓍯","𓎛","𓏏","𓐍","𓀭"],
    tagline: "Red Sea Paradise",
    desc: "Crystal-clear waters, technicolour coral reefs and year-round sunshine — world-class diving, desert safaris and resort luxury on Egypt's legendary Red Sea riviera.",
    highlights: ["Coral Reef Snorkeling","Island Hopping","Desert Quad Safari","Submarine Tour","Parasailing","Scuba Diving"],
  },
  sharm: {
    heroImages: [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1800&q=90",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1800&q=90",
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1800&q=90",
    ],
    color: "#FF7B6B", glyph: "𓊃",
    glyphs: ["𓊃","𓋴","𓌀","𓍯","𓎛","𓏏","𓐍","𓀭"],
    tagline: "The City of Peace & Adventure",
    desc: "Where the Sinai mountains collide with the Red Sea — world-class diving at Ras Mohammed, the mystical Mount Sinai sunrise, and some of the planet's most impossibly clear waters.",
    highlights: ["Ras Mohammed National Park","Mount Sinai Sunrise","Naama Bay","Tiran Island Diving","Shark Bay","Desert Safari"],
  },
  "sharm-el-sheikh": {
    heroImages: [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1800&q=90",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1800&q=90",
    ],
    color: "#FF7B6B", glyph: "𓊃",
    glyphs: ["𓊃","𓋴","𓌀","𓍯","𓎛","𓏏","𓐍","𓀭"],
    tagline: "The City of Peace & Adventure",
    desc: "Where the Sinai mountains collide with the Red Sea.",
    highlights: ["Ras Mohammed","Mount Sinai","Naama Bay","Diving","Shark Bay","Desert Safari"],
  },
  fayoum: {
    heroImages: [
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1800&q=90",
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1800&q=90",
    ],
    color: "#52C788", glyph: "𓈖",
    glyphs: ["𓈖","𓉐","𓊃","𓋴","𓌀","𓍯","𓎛","𓏏"],
    tagline: "Egypt's Secret Oasis Kingdom",
    desc: "Egypt's most underrated wonder — prehistoric whale fossils rising from desert sand, Roman waterwheels, flamingo lakes, and dunes that glow deep crimson at the golden hour.",
    highlights: ["Wadi El Hitan UNESCO","Lake Qarun","Wadi El Rayan Waterfalls","Roman Waterwheels","Magic Lake","Desert Camping"],
  },
  "marsa-alam": {
    heroImages: [
      "https://images.unsplash.com/photo-1560275619-4cc5a455b0a6?w=1800&q=90",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1800&q=90",
    ],
    color: "#0096C7", glyph: "𓌀",
    glyphs: ["𓌀","𓍯","𓎛","𓏏","𓐍","𓀭","𓁅","𓂸"],
    tagline: "Untouched Red Sea Wilderness",
    desc: "Egypt's last pristine frontier — wild spinner dolphins, dugongs, virgin coral reefs and a sky so full of stars it looks painted.",
    highlights: ["Wild Dolphin Swimming","Dugong Snorkeling","Elphinstone Reef Diving","Desert Stargazing","Wadi el Gemal","Sea Turtle Sanctuary"],
  },
  "port-said": {
    heroImages: [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1800&q=90",
    ],
    color: "#7B8FA1", glyph: "𓍯",
    glyphs: ["𓍯","𓎛","𓏏","𓐍","𓀭","𓁅","𓂸","𓂀"],
    tagline: "Gateway to the Suez Canal",
    desc: "Historic port city at the entrance of the Suez Canal, blending maritime heritage with Mediterranean charm.",
    highlights: ["Suez Canal","Port Said Museum","De Lesseps Monument","Port Fouad","Beaches","Duty Free Shopping"],
  },
};

const DEFAULT_META = {
  heroImages: ["https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1800&q=90"],
  color: "#C9A84C", glyph: "𓂀",
  glyphs: ["𓂀","𓃭","𓆑","𓇋","𓅓","𓂋","𓏏","𓈖"],
  tagline: "Discover Egypt",
  desc: "Explore the wonders of this ancient land.",
  highlights: ["Ancient Temples","Nile River","Desert Safari","Local Culture"],
};

const CATS = [
  { id: "all",                          lbl: "All",          icon: "✦" },
  { id: "Guided tours and free tours",  lbl: "Guided Tours", icon: "🏛️" },
  { id: "Day trip",                     lbl: "Day Trips",    icon: "🗺️" },
  { id: "Tour packages",                lbl: "Packages",     icon: "📦" },
  { id: "Aerial tours",                 lbl: "Aerial",       icon: "🎈" },
  { id: "Boat tour",                    lbl: "Boat Tours",   icon: "⛴" },
  { id: "Adventure and nature",         lbl: "Adventure",    icon: "⚡" },
  { id: "Transfers",                    lbl: "Transfers",    icon: "🚗" },
  { id: "Performances",                 lbl: "Shows",        icon: "🎭" },
];

// ─────────────────────────────────────────────────────────────
//  STYLES
// ─────────────────────────────────────────────────────────────
const G = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&display=swap');
    :root{
      --gold:#C9A84C;--gold-light:#E8C96D;--gold-pale:#F5E6B8;
      --gold-dim:rgba(201,168,76,0.12);--gold-dim2:rgba(201,168,76,0.22);
      --gold-border:rgba(201,168,76,0.22);
      --obsidian:#07050D;--deep:#0C0A14;--surface:#121019;
      --surface2:#191624;--surface3:#201D2E;
      --text:#EDE8D9;--text-dim:rgba(237,232,217,0.75);--muted:#7A7264;
      --fd:'Cinzel Decorative',serif;--ft:'Cinzel',serif;--fb:'Cormorant Garamond',Georgia,serif;
    }
    *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{background:var(--obsidian);color:var(--text);font-family:var(--fb);overflow-x:hidden}
    ::-webkit-scrollbar{width:5px}
    ::-webkit-scrollbar-track{background:var(--obsidian)}
    ::-webkit-scrollbar-thumb{background:var(--gold-border);border-radius:3px}
    ::-webkit-scrollbar-thumb:hover{background:var(--gold)}

    .cp-bg{position:fixed;inset:0;pointer-events:none;z-index:0;
      background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Ctext x='8' y='50' font-size='28' fill='rgba(201,168,76,0.022)'%3E𓂀𓃭𓆑%3C/text%3E%3Ctext x='8' y='100' font-size='28' fill='rgba(201,168,76,0.016)'%3E𓇋𓅓𓂋%3C/text%3E%3Ctext x='8' y='148' font-size='28' fill='rgba(201,168,76,0.022)'%3E𓏏𓈖𓃀%3C/text%3E%3C/svg%3E");
      background-size:160px 160px}

    .cp-nav{position:fixed;top:0;left:0;right:0;z-index:990;height:68px;display:flex;align-items:center;
      padding:0 48px;gap:14px;background:rgba(7,5,13,.97);backdrop-filter:blur(24px);
      border-bottom:1px solid var(--gold-border)}
    .cp-nav::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;
      background:linear-gradient(90deg,transparent,var(--gold),var(--gold-light),var(--gold),transparent);opacity:.5}
    .cp-back{display:flex;align-items:center;gap:7px;background:var(--gold-dim);
      border:1px solid var(--gold-border);color:var(--gold);border-radius:6px;
      padding:8px 16px;font-family:var(--ft);font-size:9px;letter-spacing:2px;
      text-transform:uppercase;cursor:pointer;transition:all .2s;text-decoration:none}
    .cp-back:hover{background:var(--gold-dim2)}
    .cp-brand{font-family:var(--fd);font-size:13px;color:var(--gold);letter-spacing:2px;font-weight:700;text-decoration:none}
    .cp-brand span{font-family:var(--ft);font-size:9px;color:var(--muted);letter-spacing:3px;margin-left:10px}
    .cp-nav-r{margin-left:auto;display:flex;gap:10px;align-items:center}
    .cp-nav-wa{display:flex;align-items:center;gap:7px;background:#25D366;color:#fff;
      border:none;border-radius:6px;padding:9px 16px;font-family:var(--ft);font-size:9px;
      letter-spacing:1.5px;font-weight:700;text-transform:uppercase;cursor:pointer;text-decoration:none;transition:opacity .2s}
    .cp-nav-wa:hover{opacity:.88}
    .cp-nav-tours{background:linear-gradient(135deg,var(--gold),var(--gold-light));color:#0B0900;
      border:none;border-radius:6px;padding:9px 22px;font-family:var(--ft);font-size:9px;
      letter-spacing:2px;font-weight:700;text-transform:uppercase;cursor:pointer;text-decoration:none;
      display:flex;align-items:center;transition:all .25s}
    .cp-nav-tours:hover{box-shadow:0 4px 20px rgba(201,168,76,.35)}

    .cp-sticky{position:fixed;top:68px;left:0;right:0;z-index:980;height:52px;
      display:flex;align-items:center;gap:18px;padding:0 48px;
      background:rgba(7,5,13,.97);backdrop-filter:blur(20px);
      border-bottom:1px solid var(--gold-border);
      transform:translateY(-100%);transition:transform .3s ease}
    .cp-sticky.on{transform:translateY(0)}
    .cp-sticky-name{font-family:var(--ft);font-size:11px;color:var(--text);flex:1}
    .cp-sticky-price{font-family:var(--fd);font-size:18px;color:var(--gold)}
    .cp-sticky-btn{background:linear-gradient(135deg,var(--gold),var(--gold-light));color:#0B0900;
      border:none;border-radius:6px;padding:8px 20px;font-family:var(--ft);font-size:9px;
      letter-spacing:2px;font-weight:700;cursor:pointer;text-transform:uppercase}
      .cp-hero{position:relative;height:100vh;min-height:600px;max-height:900px;
      margin-top:68px;overflow:hidden;display:flex;align-items:flex-end}
    .cp-hero-bg{position:absolute;inset:-6%;background-size:cover;background-position:center;
      transition:opacity 1.2s ease;animation:cp-kbz 16s ease-in-out infinite alternate}
    @keyframes cp-kbz{
      0%{transform:scale(1) translateY(0);filter:brightness(.78)}
      100%{transform:scale(1.09) translateY(-22px);filter:brightness(.88)}}
    .cp-hero-grid{position:absolute;inset:0;z-index:1;pointer-events:none;
      background:repeating-linear-gradient(90deg,transparent,transparent 99px,rgba(201,168,76,.03) 99px,rgba(201,168,76,.03) 100px),
                 repeating-linear-gradient(0deg,transparent,transparent 99px,rgba(201,168,76,.03) 99px,rgba(201,168,76,.03) 100px)}
    .cp-hero-ov{position:absolute;inset:0;z-index:2;
      background:linear-gradient(to top,rgba(7,5,13,1) 0%,rgba(7,5,13,.68) 28%,rgba(7,5,13,.15) 62%,transparent 100%),
                 linear-gradient(to right,rgba(7,5,13,.8) 0%,rgba(7,5,13,.2) 55%,transparent 82%)}
    .cp-glyphs{position:absolute;inset:0;z-index:3;pointer-events:none;overflow:hidden}
    .cp-glyph{position:absolute;animation:cp-gfl 6s ease-in-out infinite;opacity:.07}
    @keyframes cp-gfl{
      0%,100%{transform:translateY(0) rotate(0deg);opacity:.07}
      50%{transform:translateY(-20px) rotate(5deg);opacity:.15}}
    .cp-band{position:absolute;top:30%;left:0;right:0;z-index:4;height:44px;pointer-events:none;
      border-top:1px solid rgba(201,168,76,.12);border-bottom:1px solid rgba(201,168,76,.12);
      background:rgba(7,5,13,.2);display:flex;align-items:center;overflow:hidden}
    .cp-band-txt{font-family:var(--ft);font-size:10px;letter-spacing:7px;
      color:rgba(201,168,76,.32);white-space:nowrap;text-transform:uppercase;
      animation:cp-mq 34s linear infinite}
    @keyframes cp-mq{0%{transform:translateX(60vw)}100%{transform:translateX(-100%)}}
    .cp-pdots{position:absolute;bottom:220px;right:36px;z-index:6;display:flex;flex-direction:column;gap:8px}
    .cp-pdot{width:54px;height:42px;border-radius:6px;overflow:hidden;border:2px solid transparent;
      cursor:pointer;opacity:.55;transition:all .25s}
    .cp-pdot img{width:100%;height:100%;object-fit:cover}
    .cp-pdot.on,.cp-pdot:hover{opacity:1;border-color:var(--gold);box-shadow:0 0 18px rgba(201,168,76,.4)}
    .cp-hero-cnt{position:relative;z-index:5;padding:0 52px 58px;width:100%;
      animation:cp-fu .9s ease both}
    @keyframes cp-fu{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
    .cp-hero-eye{font-family:var(--ft);font-size:9px;letter-spacing:5px;color:var(--gold);
      text-transform:uppercase;margin-bottom:12px;display:flex;align-items:center;gap:14px}
    .cp-hero-eye::before{content:'';width:32px;height:1px;background:var(--gold)}
    .cp-hero-glyph{font-size:74px;line-height:1;margin-bottom:10px;
      animation:cp-gp 3.5s ease-in-out infinite}
    @keyframes cp-gp{
      0%,100%{filter:drop-shadow(0 0 20px var(--ca,#C9A84C))}
      50%{filter:drop-shadow(0 0 58px var(--ca,#C9A84C)) brightness(1.3)}}
    .cp-city-nm{font-family:var(--fd);font-size:clamp(40px,7vw,88px);font-weight:900;line-height:1;
      margin-bottom:6px;
      background:linear-gradient(135deg,#F0DC8A 0%,var(--ca,#C9A84C) 40%,#FFE599 70%,#B8902E 100%);
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      filter:drop-shadow(0 4px 32px rgba(201,168,76,.32))}
    .cp-city-nm-ar{font-family:var(--fb);font-size:20px;color:rgba(237,232,217,.35);
      font-weight:300;margin-bottom:12px;display:block;letter-spacing:8px}
    .cp-city-div{display:flex;align-items:center;gap:16px;margin-bottom:16px}
    .cp-city-div::before{content:'';width:52px;height:2px;
      background:linear-gradient(to right,var(--ca,#C9A84C),transparent);flex-shrink:0}
    .cp-tagline{font-family:var(--fb);font-style:italic;font-size:clamp(16px,2vw,23px);
      color:var(--text-dim);font-weight:300;margin:0}
    .cp-city-desc-txt{font-family:var(--fb);font-size:17px;color:rgba(237,232,217,.56);
      line-height:1.82;max-width:580px;margin-bottom:28px;font-weight:300}
    .cp-stats{display:inline-flex;background:rgba(7,5,13,.78);backdrop-filter:blur(28px);
      border:1px solid rgba(201,168,76,.22);border-radius:14px;overflow:hidden;
      box-shadow:0 10px 50px rgba(0,0,0,.6)}
    .cp-stat{padding:18px 28px;text-align:center;border-right:1px solid rgba(201,168,76,.12);transition:background .2s}
    .cp-stat:last-child{border-right:none}
    .cp-stat:hover{background:rgba(201,168,76,.07)}
    .cp-stat-n{font-family:var(--fd);font-size:21px;font-weight:700;line-height:1;color:var(--ca,var(--gold))}
    .cp-stat-l{font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;margin-top:5px}
    .cp-scrl{position:absolute;bottom:26px;right:44px;z-index:6;
      display:flex;flex-direction:column;align-items:center;gap:5px;
      animation:cp-scrlfl 2s ease-in-out infinite}
    .cp-scrl span{font-family:var(--ft);font-size:8px;letter-spacing:3px;color:rgba(201,168,76,.38);text-transform:uppercase}
    .cp-scrl-ln{width:1px;height:44px;background:linear-gradient(to bottom,transparent,var(--ca,#C9A84C))}
    .cp-scrl-ar{color:var(--ca,#C9A84C);font-size:16px}
    @keyframes cp-scrlfl{0%,100%{transform:translateY(0);opacity:.7}50%{transform:translateY(7px);opacity:1}}

    .cp-city-bar{background:rgba(7,5,13,.97);backdrop-filter:blur(24px);
      border-bottom:1px solid var(--gold-border);position:sticky;top:68px;z-index:100;
      display:flex;overflow-x:auto;scrollbar-width:none}
    .cp-city-bar::-webkit-scrollbar{display:none}
    .cp-city-tab{background:transparent;border:none;border-bottom:2px solid transparent;
      color:var(--muted);font-family:var(--ft);font-size:9px;letter-spacing:2px;
      padding:14px 18px;cursor:pointer;white-space:nowrap;text-transform:uppercase;
      transition:all .2s;flex-shrink:0;text-decoration:none;display:flex;align-items:center;gap:6px}
    .cp-city-tab.on,.cp-city-tab:hover{color:var(--gold)}
    .cp-city-tab.on{background:var(--gold-dim);border-bottom-color:var(--gold)}

    .cp-crumb{padding:12px 48px;background:var(--surface);border-bottom:1px solid var(--gold-border);
      display:flex;align-items:center;gap:8px;font-family:var(--ft);font-size:9px;
      letter-spacing:1.5px;color:var(--muted);position:relative;z-index:5}
    .cp-crumb a{color:var(--muted);text-decoration:none;transition:color .2s}
    .cp-crumb a:hover{color:var(--gold)}
    .cp-crumb .sep{color:rgba(201,168,76,.25)}
    .cp-crumb .cur{color:var(--gold)}

    .cp-hls{padding:14px 48px;background:rgba(12,10,20,.6);border-bottom:1px solid var(--gold-border);
      display:flex;align-items:center;gap:10px;overflow-x:auto;scrollbar-width:none;z-index:5;position:relative}
    .cp-hls::-webkit-scrollbar{display:none}
    .cp-hl-lbl{font-family:var(--ft);font-size:8px;letter-spacing:2.5px;color:var(--muted);
      text-transform:uppercase;white-space:nowrap;flex-shrink:0}
    .cp-hl-pill{background:var(--gold-dim);border:1px solid var(--gold-border);border-radius:20px;
      padding:5px 14px;font-family:var(--ft);font-size:8px;letter-spacing:1.5px;
      color:var(--gold);text-transform:uppercase;white-space:nowrap;flex-shrink:0;
      transition:background .2s;cursor:default}
    .cp-hl-pill:hover{background:var(--gold-dim2)}

    .cp-fb{padding:22px 48px 18px;display:flex;align-items:center;justify-content:space-between;
      flex-wrap:wrap;gap:14px;z-index:5;position:relative;border-bottom:1px solid rgba(201,168,76,.06)}
    .cp-fl{display:flex;gap:8px;flex-wrap:wrap}
    .cp-ftag{background:transparent;border:1px solid rgba(201,168,76,.15);color:var(--muted);
      font-family:var(--ft);font-size:8px;letter-spacing:2px;text-transform:uppercase;
      border-radius:6px;padding:8px 16px;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:7px}
    .cp-ftag:hover{border-color:var(--gold-border);color:var(--text-dim)}
    .cp-ftag.on{background:var(--gold-dim);border-color:var(--gold);color:var(--gold);
      box-shadow:0 0 20px rgba(201,168,76,.12)}
    .cp-ftag .fc{font-family:var(--ft);font-size:7px;background:rgba(255,255,255,.05);border-radius:8px;padding:1px 6px}
    .cp-ftag.on .fc{background:rgba(201,168,76,.2);color:var(--gold)}
    .cp-fr{display:flex;align-items:center;gap:12px}
    .cp-sort{background:var(--surface2);border:1px solid var(--gold-border);color:var(--text-dim);
      font-family:var(--ft);font-size:9px;letter-spacing:1px;border-radius:6px;
      padding:9px 14px;cursor:pointer;outline:none}
    .cp-sort option{background:var(--surface2)}
    .cp-rc{font-family:var(--ft);font-size:9px;letter-spacing:2px;color:var(--muted);text-transform:uppercase}
    .cp-rc strong{color:var(--gold)}

    .cp-sh{display:flex;align-items:center;gap:16px;margin-bottom:24px}
    .cp-sh-lbl{font-family:var(--ft);font-size:10px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;white-space:nowrap}
    .cp-sh-ln{flex:1;height:1px;background:linear-gradient(to right,var(--gold-border),transparent)}
    .cp-sh-cnt{font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--muted)}

    .cp-bs-sec{padding:32px 48px 0;position:relative;z-index:5}
    .cp-grid-sec{padding:28px 48px 56px;position:relative;z-index:5}
    .cp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:22px}

    .cp-card{background:var(--surface2);border:1px solid var(--gold-border);border-radius:14px;
      overflow:hidden;cursor:pointer;display:flex;flex-direction:column;
      transition:transform .32s cubic-bezier(.25,.8,.25,1),box-shadow .32s,border-color .32s;
      animation:cp-ci .5s ease both}
    .cp-card:hover{transform:translateY(-7px);border-color:rgba(201,168,76,.48);
      box-shadow:0 28px 72px rgba(0,0,0,.65),0 0 0 1px rgba(201,168,76,.35)}
    @keyframes cp-ci{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
    .cp-cimg{position:relative;height:210px;overflow:hidden;flex-shrink:0}
    .cp-cimg img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s ease}
    .cp-card:hover .cp-cimg img{transform:scale(1.07)}
    .cp-cimg-ov{position:absolute;inset:0;
      background:linear-gradient(to top,rgba(7,5,13,.92) 0%,rgba(7,5,13,.22) 58%,transparent 100%)}
    .cp-cdur{position:absolute;bottom:12px;left:12px;background:rgba(7,5,13,.82);
      backdrop-filter:blur(10px);border:1px solid rgba(201,168,76,.2);border-radius:5px;
      padding:4px 11px;font-family:var(--ft);font-size:7px;letter-spacing:1.5px;
      color:rgba(237,232,217,.8);text-transform:uppercase}
    .cp-ccat{position:absolute;top:12px;left:12px;background:rgba(201,168,76,.9);color:#07050D;
      border-radius:4px;padding:4px 11px;font-family:var(--ft);font-size:7px;letter-spacing:2px;text-transform:uppercase;font-weight:700}
    .cp-cdisc{position:absolute;top:12px;right:12px;background:rgba(200,50,50,.85);color:#fff;
      border-radius:4px;padding:4px 9px;font-family:var(--ft);font-size:7px;letter-spacing:1.5px;font-weight:700}
    .cp-cbody{padding:18px 20px 20px;flex:1;display:flex;flex-direction:column;gap:11px}
    .cp-ctitle{font-family:var(--fd);font-size:15px;color:var(--text);font-weight:700;line-height:1.35;
      display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
    .cp-cdesc{font-family:var(--fb);font-size:15px;color:var(--muted);line-height:1.6;flex:1;
      display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
    .cp-crat{display:flex;align-items:center;gap:8px}
    .cp-cstars{color:var(--gold);font-size:12px;letter-spacing:1px}
    .cp-cscore{font-family:var(--fd);font-size:15px;color:var(--gold);font-weight:700}
    .cp-crevs{font-family:var(--fb);font-size:13px;color:var(--muted)}
    .cp-cfoot{display:flex;align-items:flex-end;justify-content:space-between;
      border-top:1px solid rgba(201,168,76,.08);padding-top:14px;margin-top:auto}
    .cp-cfrom{font-family:var(--ft);font-size:7px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;margin-bottom:3px}
    .cp-cprow{display:flex;align-items:baseline;gap:5px}
    .cp-corig{font-family:var(--fb);font-size:14px;color:rgba(122,114,100,.6);text-decoration:line-through}
    .cp-cpamt{font-family:var(--fd);font-size:26px;color:var(--gold);font-weight:700;line-height:1;
      text-shadow:0 0 24px rgba(201,168,76,.4)}
    .cp-cpper{font-family:var(--ft);font-size:8px;color:var(--muted);letter-spacing:1px}
    .cp-cbtn{background:linear-gradient(135deg,var(--gold),var(--gold-light));color:#0B0900;
      border:none;border-radius:7px;padding:10px 22px;font-family:var(--ft);font-size:8px;
      letter-spacing:2px;font-weight:700;text-transform:uppercase;cursor:pointer;
      box-shadow:0 4px 18px rgba(201,168,76,.28);transition:all .25s}
    .cp-cbtn:hover{box-shadow:0 6px 28px rgba(201,168,76,.5);transform:translateY(-1px)}

    .cp-empty{grid-column:1/-1;text-align:center;padding:80px 0}
    .cp-empty-ic{font-size:56px;margin-bottom:16px;opacity:.35}
    .cp-empty-t{font-family:var(--ft);font-size:11px;letter-spacing:3px;color:var(--muted);text-transform:uppercase}

    .cp-others{background:rgba(12,10,20,.7);border-top:1px solid var(--gold-border);
      padding:40px 48px 52px;position:relative;z-index:5}
    .cp-og{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:14px}
    .cp-oc{position:relative;border-radius:12px;overflow:hidden;height:120px;cursor:pointer;
      border:1px solid rgba(201,168,76,.15);transition:all .28s;display:block;text-decoration:none}
    .cp-oc:hover{transform:translateY(-5px);box-shadow:0 18px 50px rgba(0,0,0,.6),0 0 0 1px rgba(201,168,76,.35)}
    .cp-oc img{width:100%;height:100%;object-fit:cover;transition:transform .4s}
    .cp-oc:hover img{transform:scale(1.07)}
    .cp-oc-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(7,5,13,.88),rgba(7,5,13,.1) 65%,transparent)}
    .cp-oc-c{position:absolute;bottom:10px;left:12px}
    .cp-oc-g{font-size:18px;line-height:1;margin-bottom:2px}
    .cp-oc-n{font-family:var(--fd);font-size:13px;font-weight:700}
    .cp-wa{position:fixed;bottom:28px;right:28px;z-index:900;display:flex;align-items:center;gap:8px;
      background:#25D366;color:#fff;border-radius:50px;padding:12px 20px;text-decoration:none;
      font-family:var(--ft);font-size:9px;letter-spacing:1.5px;font-weight:700;
      box-shadow:0 8px 32px rgba(37,211,102,.4);text-transform:uppercase}
    .cp-wa:hover{background:#1fbd5c}
    .cp-top{position:fixed;bottom:28px;left:28px;z-index:900;width:42px;height:42px;
      border-radius:8px;background:var(--gold-dim2);border:1px solid var(--gold-border);
      color:var(--gold);cursor:pointer;font-size:13px;transition:all .2s;
      display:flex;align-items:center;justify-content:center}
    .cp-top:hover{border-color:var(--gold)}

    .cp-mbg{position:fixed;inset:0;background:rgba(0,0,0,.88);backdrop-filter:blur(12px);
      z-index:2000;display:flex;align-items:center;justify-content:center;padding:20px;
      animation:cp-fi .2s ease}
    @keyframes cp-fi{from{opacity:0}to{opacity:1}}
    .cp-m{background:linear-gradient(145deg,var(--deep),var(--obsidian));
      border:1px solid var(--gold-border);border-radius:20px;width:min(520px,96vw);
      max-height:92vh;overflow-y:auto;
      box-shadow:0 48px 120px rgba(0,0,0,.9),0 0 60px rgba(201,168,76,.1);
      animation:cp-mi .3s ease}
    @keyframes cp-mi{from{opacity:0;transform:scale(.94) translateY(24px)}to{opacity:1;transform:none}}
    .cp-mhd{padding:24px 28px 18px;border-bottom:1px solid var(--gold-border);
      display:flex;justify-content:space-between;align-items:flex-start}
    .cp-mtag{font-family:var(--ft);font-size:8px;letter-spacing:2.5px;color:var(--gold);text-transform:uppercase;margin-bottom:7px}
    .cp-mtit{font-family:var(--fd);font-size:16px;color:var(--text);line-height:1.4;max-width:380px}
    .cp-mcl{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);
      color:var(--muted);border-radius:8px;width:34px;height:34px;cursor:pointer;font-size:15px;
      display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s}
    .cp-mcl:hover{border-color:rgba(201,168,76,.3);color:var(--text)}
    .cp-mb{padding:24px 28px}
    .cp-psum{background:var(--gold-dim);border:1px solid var(--gold-border);border-radius:10px;
      padding:14px 18px;margin-bottom:20px;display:flex;justify-content:space-between;align-items:center}
    .cp-psum-l{font-family:var(--ft);font-size:9px;letter-spacing:1.5px;color:var(--muted)}
    .cp-psum-r{font-family:var(--fd);font-size:22px;color:var(--gold)}
    .cp-fg{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .cp-f{display:flex;flex-direction:column;gap:5px}
    .cp-f.full{grid-column:1/-1}
    .cp-f label{font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--muted);text-transform:uppercase}
    .cp-f input,.cp-f textarea{background:var(--surface2);border:1px solid var(--gold-border);
      border-radius:9px;color:var(--text);padding:11px 14px;font-family:var(--fb);font-size:15px;
      outline:none;transition:border-color .2s;width:100%}
    .cp-f input:focus,.cp-f textarea:focus{border-color:var(--gold)}
    .cp-mbtns{display:flex;gap:10px;margin-top:20px}
    .cp-msub{flex:1;background:linear-gradient(135deg,var(--gold),var(--gold-light));color:#0B0900;
      border:none;border-radius:10px;padding:14px;font-family:var(--ft);font-size:9px;
      letter-spacing:2px;font-weight:700;cursor:pointer;text-transform:uppercase;transition:all .25s}
    .cp-msub:disabled{opacity:.4;cursor:not-allowed}
    .cp-mwa{background:#25D366;color:#fff;border:none;border-radius:10px;padding:14px 18px;
      cursor:pointer;font-size:20px;transition:opacity .2s;text-decoration:none;
      display:flex;align-items:center;justify-content:center}
    .cp-mwa:hover{opacity:.88}
    .cp-mnote{font-family:var(--fb);font-size:13px;color:var(--muted);text-align:center;margin-top:10px;font-style:italic}
    .cp-msuc{text-align:center;padding:20px 0}
    .cp-msuc-ic{font-size:64px;margin-bottom:14px}
    .cp-msuc-t{font-family:var(--fd);font-size:20px;color:var(--gold);margin-bottom:8px}
    .cp-msuc-s{font-family:var(--fb);font-size:16px;color:var(--text-dim);line-height:1.7;margin-bottom:24px}
    .cp-msuc-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}

    .cp-load{background:var(--obsidian);min-height:100vh;display:flex;align-items:center;justify-content:center}

    @media(max-width:920px){
      .cp-hero-cnt,.cp-crumb,.cp-hls,.cp-fb,.cp-bs-sec,.cp-grid-sec,.cp-others{padding-left:20px;padding-right:20px}
      .cp-nav{padding:0 20px}
      .cp-city-nm{font-size:clamp(34px,11vw,64px)}
      .cp-pdots{display:none}
      .cp-stats{flex-wrap:wrap}
    }
  `}</style>
);

// ─────────────────────────────────────────────────────────────
//  BOOKING MODAL
// ─────────────────────────────────────────────────────────────
function BookingModal({ tour, cityName, onClose }) {
  const [f, setF] = useState({ name: "", email: "", phone: "", date: "", guests: "2", notes: "" });
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const price = tour?.price?.discounted ?? tour?.price?.original ?? 0;
  const total = price * parseInt(f.guests || 1);
  const waMsg = encodeURIComponent(
    `🏛️ *Booking Request – Golden Egypt Tours*\n\n*Tour:* ${tour?.title}\n*City:* ${cityName}\n` +
    `*Date:* ${f.date}\n*Guests:* ${f.guests}\n*Name:* ${f.name}\n*Email:* ${f.email}\n` +
    `*Phone:* ${f.phone || "N/A"}\n*Total:* $${total}\n*Notes:* ${f.notes || "None"}`
  );

  const submit = async () => {
    setBusy(true);
    try {
      await fetch("/api/bookings", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tourId: tour._id, tourName: tour.title, cityName, ...f, total }),
      });
    } catch (_) {}
    finally { setBusy(false); setSent(true); }
  };

  if (!tour) return null;
  const ok = f.name && f.email && f.date;

  return (
    <div className="cp-mbg" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="cp-m">
        <div className="cp-mhd">
          <div>
            <div className="cp-mtag">✦ {cityName} · ⏱ {tour.duration}</div>
            <div className="cp-mtit">{tour.title}</div>
          </div>
          <button className="cp-mcl" onClick={onClose}>✕</button>
        </div>
        <div className="cp-mb">
          {sent ? (
            <div className="cp-msuc">
              <div className="cp-msuc-ic">✅</div>
              <div className="cp-msuc-t">Booking Confirmed!</div>
              <div className="cp-msuc-s">
                Our team will contact you within 2 hours.<br />
                Reference: GET-{Date.now().toString().slice(-6)}
              </div>
              <div className="cp-msuc-btns">
                <a href={`https://wa.me/201068257754?text=${waMsg}`}
                  target="_blank" rel="noreferrer" className="cp-mwa"
                  style={{ padding: "12px 20px", fontSize: 13, borderRadius: 10, fontFamily: "var(--ft)", letterSpacing: 1.5, fontWeight: 700, textTransform: "uppercase" }}>
                  💬 Confirm on WhatsApp
                </a>
                <button className="cp-msub" style={{ flex: "none", padding: "12px 20px" }} onClick={onClose}>Close</button>
              </div>
            </div>
          ) : (
            <>
              <div className="cp-psum">
                <div>
                  <div className="cp-psum-l">⏱ {tour.duration} · {f.guests} person(s)</div>
                  <div style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--muted)", marginTop: 2 }}>
                    ${price} × {f.guests} = <strong style={{ color: "var(--gold)" }}>${total}</strong>
                  </div>
                </div>
                <div className="cp-psum-r">${total}</div>
              </div>
              <div className="cp-fg">
                {[
                  { k: "name",   l: "Full Name",       p: "Your full name",    t: "text"   },
                  { k: "email",  l: "Email Address",   p: "email@example.com", t: "email"  },
                  { k: "phone",  l: "Phone / WhatsApp",p: "+20 xxx xxx xxxx",  t: "tel"    },
                  { k: "date",   l: "Tour Date",       p: "",                  t: "date"   },
                  { k: "guests", l: "Guests",          p: "2",                 t: "number" },
                ].map(fi => (
                  <div key={fi.k} className={`cp-f${fi.k === "name" ? " full" : ""}`}>
                    <label>{fi.l}</label>
                    <input type={fi.t} value={f[fi.k]} placeholder={fi.p || ""}
                      min={fi.k === "guests" ? 1 : undefined}
                      onChange={e => setF(p => ({ ...p, [fi.k]: e.target.value }))} />
                  </div>
                ))}
                <div className="cp-f full">
                  <label>Special Requests</label>
                  <textarea rows={2} value={f.notes} style={{ resize: "none" }}
                    placeholder="Dietary requirements, accessibility needs…"
                    onChange={e => setF(p => ({ ...p, notes: e.target.value }))} />
                </div>
              </div>
              <div className="cp-mbtns">
                <button className="cp-msub" disabled={busy || !ok} onClick={submit}>
                  {busy ? "⏳ Sending…" : "✈ Confirm Booking"}
                </button>
                <a href={`https://wa.me/201068257754?text=${waMsg}`}
                  target="_blank" rel="noreferrer" className="cp-mwa">💬</a>
              </div>
              <div className="cp-mnote">Free cancellation up to 24 hours · No charge until confirmed</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
// ─────────────────────────────────────────────────────────────
//  TOUR CARD
// ─────────────────────────────────────────────────────────────
function TourCard({ tour, index, onBook, onView }) {
  const price    = tour.price?.discounted ?? tour.price?.original ?? 0;
  const orig     = tour.price?.original;
  const disc     = orig && tour.price?.discounted ? Math.round((1 - tour.price.discounted / orig) * 100) : 0;
  const img      = tour.images?.[0] || `https://placehold.co/600x210/0C0A14/C9A84C?text=${encodeURIComponent((tour.title || "Tour").slice(0, 16))}`;
  const score    = tour.rating?.score || 0;
  const reviews  = tour.rating?.reviews || 0;

  return (
    <div className="cp-card" style={{ animationDelay: `${index * 0.07}s` }} onClick={() => onView(tour._id)}>
      <div className="cp-cimg">
        <img src={img} alt={tour.title}
          onError={e => { e.target.src = `https://placehold.co/600x210/0C0A14/C9A84C?text=${encodeURIComponent((tour.title || "Tour").slice(0, 16))}`; }} />
        <div className="cp-cimg-ov" />
        {tour.category && <div className="cp-ccat">{tour.category}</div>}
        {disc > 0 && <div className="cp-cdisc">-{disc}%</div>}
        {tour.duration && <div className="cp-cdur">⏱ {tour.duration}</div>}
      </div>
      <div className="cp-cbody">
        <div className="cp-ctitle">{tour.title}</div>
        <div className="cp-cdesc">{tour.description}</div>
        {score > 0 && (
          <div className="cp-crat">
            <span className="cp-cstars">{"★".repeat(Math.min(5, Math.floor(score / 2)))}</span>
            <span className="cp-cscore">{score.toFixed(1)}</span>
            <span className="cp-crevs">({reviews.toLocaleString()} reviews)</span>
          </div>
        )}
        <div className="cp-cfoot">
          <div>
            <div className="cp-cfrom">From</div>
            <div className="cp-cprow">
              {orig && tour.price?.discounted && <span className="cp-corig">${orig}</span>}
              <span className="cp-cpamt">${price}</span>
              <span className="cp-cpper">/person</span>
            </div>
          </div>
          <button className="cp-cbtn" onClick={e => { e.stopPropagation(); onBook(tour); }}>
            Book Now →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  MAIN PAGE
// ─────────────────────────────────────────────────────────────
export default function CityPage() {
  const { cityId } = useParams();
  const navigate   = useNavigate();

  const [city, setCity]       = useState(null);
  const [tours, setTours]     = useState([]);
  const [allCities, setAll]   = useState([]);
  const [loading, setLoad]    = useState(true);
  const [heroIdx, setHero]    = useState(0);
  const [cat, setCat]         = useState("all");
  const [sort, setSort]       = useState("popular");
  const [bookTour, setBook]   = useState(null);
  const [sticky, setSticky]   = useState(false);

  const meta = CITY_META[cityId] || DEFAULT_META;

  // ── Fetch data from API ──
  useEffect(() => {
    setLoad(true);
    window.scrollTo({ top: 0 });
    setCat("all");
    setHero(0);

    const fetchData = async () => {
      try {
        const [cityData, toursData, citiesData] = await Promise.all([
          getCityBySlug(cityId),
          getToursByCity(cityId),
          getAllCities(),
        ]);
        setCity(cityData || { slug: cityId, name: cityId });
        setTours(Array.isArray(toursData) ? toursData : []);
        setAll(Array.isArray(citiesData) ? citiesData : []);
      } catch (e) {
        console.error("CityPage fetch error:", e);
        setTours([]);
        setAll([]);
      } finally {
        setLoad(false);
      }
    };

    fetchData();
  }, [cityId]);

  // ── Hero auto-rotate ──
  useEffect(() => {
    const t = setInterval(() => setHero(i => (i + 1) % meta.heroImages.length), 6000);
    return () => clearInterval(t);
  }, [meta.heroImages.length]);

  // ── Sticky nav ──
  useEffect(() => {
    const fn = () => setSticky(window.scrollY > 430);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // ── CSS accent color ──
  useEffect(() => {
    document.documentElement.style.setProperty("--ca", meta.color);
    return () => document.documentElement.style.removeProperty("--ca");
  }, [meta.color]);

  // ── Filter & sort tours ──
  const filtered = useCallback(() => {
    let l = [...tours];
    if (cat !== "all") l = l.filter(t => t.category === cat);
    if (sort === "price_asc")  l.sort((a, b) => (a.price?.discounted ?? a.price?.original ?? 0) - (b.price?.discounted ?? b.price?.original ?? 0));
    if (sort === "price_desc") l.sort((a, b) => (b.price?.discounted ?? b.price?.original ?? 0) - (a.price?.discounted ?? a.price?.original ?? 0));
    if (sort === "rating")     l.sort((a, b) => (b.rating?.score || 0) - (a.rating?.score || 0));
    if (sort === "popular")    l.sort((a, b) => (b.rating?.reviews || 0) - (a.rating?.reviews || 0));
    return l;
  }, [tours, cat, sort])();

  const counts = CATS.reduce((a, c) => {
    a[c.id] = c.id === "all" ? tours.length : tours.filter(t => t.category === c.id).length;
    return a;
  }, {});

  const cityName = city?.name || cityId;
  const minPrice = tours.length
    ? Math.min(...tours.map(t => t.price?.discounted ?? t.price?.original ?? 9999))
    : 0;
  const band = `${meta.glyph}  ${cityName.toUpperCase()}  ✦  GOLDEN EGYPT TOURS  ✦  DISCOVER EGYPT  ✦  `.repeat(7);

  if (loading) return (
    <><G /><div className="cp-load">
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 58, marginBottom: 20, color: "var(--gold)", filter: "drop-shadow(0 0 32px #C9A84C)" }}>𓂀</div>
        <div style={{ fontFamily: "var(--ft)", fontSize: 10, letterSpacing: 4, color: "var(--gold)", textTransform: "uppercase" }}>Loading…</div>
      </div>
    </div></>
  );

  return (
    <>
      <G />
      <div className="cp-bg" />

      {/* NAV */}
      <nav className="cp-nav">
        <button className="cp-back" onClick={() => navigate(-1)}>← Back</button>
        <Link to="/" className="cp-brand">Golden Egypt Tours<span>Est. 2024</span></Link>
        <div className="cp-nav-r">
          <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="cp-nav-wa">💬 WhatsApp</a>
          <Link to="/tours" className="cp-nav-tours">All Tours</Link>
        </div>
      </nav>

      {/* STICKY */}
      <div className={`cp-sticky${sticky ? " on" : ""}`}>
        <span className="cp-sticky-name">{cityName} — {filtered.length} Experiences</span>
        <span className="cp-sticky-price">{minPrice > 0 ? `From $${minPrice}` : ""}</span>
        <button className="cp-sticky-btn"
          onClick={() => document.getElementById("cp-grid")?.scrollIntoView({ behavior: "smooth" })}>
          Explore Tours
        </button>
      </div>
      {/* HERO */}
      <section className="cp-hero">
        {meta.heroImages.map((src, i) => (
          <div key={i} className="cp-hero-bg"
            style={{ backgroundImage: `url(${src})`, opacity: i === heroIdx ? 1 : 0, position: "absolute", inset: "-6%", transition: "opacity 1.2s ease" }} />
        ))}
        <div className="cp-hero-grid" />
        <div className="cp-hero-ov" />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, background: `radial-gradient(ellipse at 0% 85%, ${meta.color}18, transparent 65%)` }} />

        <div className="cp-glyphs">
          {meta.glyphs.map((g, i) => (
            <span key={i} className="cp-glyph" style={{
              color: meta.color, top: `${10 + (i * 11) % 76}%`, left: `${5 + (i * 13) % 89}%`,
              fontSize: 18 + (i % 4) * 14, animationDelay: `${i * 0.7}s`, animationDuration: `${5 + i % 4}s`,
            }}>{g}</span>
          ))}
        </div>

        <div className="cp-band"><span className="cp-band-txt">{band}</span></div>

        <div className="cp-pdots">
          {meta.heroImages.map((src, i) => (
            <div key={i} className={`cp-pdot${heroIdx === i ? " on" : ""}`} onClick={() => setHero(i)}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>

        <div className="cp-hero-cnt">
          <div className="cp-hero-eye">{meta.glyph} Destination Guide</div>
          <div className="cp-hero-glyph" style={{ color: meta.color }}>{meta.glyph}</div>
          <h1 className="cp-city-nm">{cityName}</h1>
          <span className="cp-city-nm-ar">{city?.nameAr || meta.glyphs.slice(0, 6).join("  ")}</span>
          <div className="cp-city-div">
            <p className="cp-tagline">{meta.tagline}</p>
          </div>
          <p className="cp-city-desc-txt">{city?.description || meta.desc}</p>
          <div className="cp-stats">
            {[
              { n: `${tours.length}+`,  l: "Tours Available" },
              { n: "5,000+",            l: "Happy Travelers" },
              { n: "4.9 ★",             l: "Avg Rating"      },
              { n: minPrice > 0 ? `From $${minPrice}` : "—", l: "Lowest Price" },
            ].map((s, i) => (
              <div key={i} className="cp-stat">
                <div className="cp-stat-n">{s.n}</div>
                <div className="cp-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="cp-scrl">
          <span>Scroll</span>
          <div className="cp-scrl-ln" />
          <span className="cp-scrl-ar">↓</span>
        </div>
      </section>

      {/* CITY BAR */}
      <div className="cp-city-bar">
        {allCities.map(c => {
          const cm  = CITY_META[c.slug] || DEFAULT_META;
          const isActive = c.slug === cityId;
          return (
            <Link key={c._id} to={`/city/${c.slug}`}
              className={`cp-city-tab${isActive ? " on" : ""}`}
              style={isActive ? { borderBottomColor: cm.color, color: cm.color, background: `${cm.color}14` } : {}}>
              {cm.glyph} {c.name}
            </Link>
          );
        })}
      </div>

      {/* BREADCRUMB */}
      <div className="cp-crumb">
        <Link to="/">Home</Link><span className="sep">›</span>
        <Link to="/tours">Tours</Link><span className="sep">›</span>
        <span className="cur">{cityName}</span>
      </div>

      {/* HIGHLIGHTS */}
      <div className="cp-hls">
        <span className="cp-hl-lbl">✦ Must-See</span>
        {meta.highlights.map(h => <span key={h} className="cp-hl-pill">{h}</span>)}
      </div>

      {/* FILTER BAR */}
      <div className="cp-fb" id="cp-grid">
        <div className="cp-fl">
          {CATS.filter(c => c.id === "all" || counts[c.id] > 0).map(c => (
            <button key={c.id} className={`cp-ftag${cat === c.id ? " on" : ""}`} onClick={() => setCat(c.id)}>
              {c.icon} {c.lbl}
              <span className="fc">{counts[c.id] || 0}</span>
            </button>
          ))}
        </div>
        <div className="cp-fr">
          <span className="cp-rc"><strong>{filtered.length}</strong> experiences</span>
          <select className="cp-sort" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="popular">Most Popular</option>
            <option value="rating">Top Rated</option>
            <option value="price_asc">Price: Low → High</option>
            <option value="price_desc">Price: High → Low</option>
          </select>
        </div>
      </div>

      {/* TOUR GRID */}
      <div className="cp-grid-sec">
        <div className="cp-grid">
          {filtered.length === 0
            ? <div className="cp-empty">
                <div className="cp-empty-ic">𓂀</div>
                <div className="cp-empty-t">No experiences in this category</div>
              </div>
            : filtered.map((t, i) => (
                <TourCard key={t._id} tour={t} index={i}
                  onBook={setBook} onView={id => navigate(`/tour/${id}`)} />
              ))
          }
        </div>
      </div>

      {/* OTHER CITIES */}
      {allCities.filter(c => c.slug !== cityId).length > 0 && (
        <div className="cp-others">
          <div className="cp-sh">
            <span className="cp-sh-lbl">✦ More of Egypt</span>
            <div className="cp-sh-ln" />
          </div>
          <div className="cp-og">
            {allCities.filter(c => c.slug !== cityId).map(c => {
              const cm = CITY_META[c.slug] || DEFAULT_META;
              return (
                <Link key={c._id} to={`/city/${c.slug}`} className="cp-oc">
                  <img
                    src={cm.heroImages?.[0] || `https://placehold.co/200x120/0C0A14/C9A84C?text=${c.name}`}
                    alt={c.name}
                    onError={e => { e.target.src = `https://placehold.co/200x120/0C0A14/C9A84C?text=${c.name}`; }} />
                  <div className="cp-oc-ov" />
                  <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 0% 100%,${cm.color}22,transparent 65%)` }} />
                  <div className="cp-oc-c">
                    <div className="cp-oc-g">{cm.glyph}</div>
                    <div className="cp-oc-n" style={{ color: cm.color }}>{c.name}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* FLOATING BUTTONS */}
      <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="cp-wa">💬 WhatsApp Us</a>
      <button className="cp-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>▲</button>

      {/* BOOKING MODAL */}
      {bookTour && <BookingModal tour={bookTour} cityName={cityName} onClose={() => setBook(null)} />}
    </>
  );
}