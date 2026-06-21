// ============================================================
//  CityPage.jsx — Aurevian Tours ✦ Editorial Luxury Edition
//  Rebuilt to match the approved reference layout 1:1 (utility
//  bar, hero + floating stats card, about+video+why-visit,
//  top attractions, gallery, featured tours, CTA, footer).
//  Same data system applies to EVERY city in CITY_META — not
//  just one. All UI copy is English only; translation is
//  handled entirely by the Google Translate widget (no
//  hard-coded language strings anywhere in this file).
//  Route: /city/:cityId
// ============================================================

import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getToursByCity, getCityBySlug, getAllCities } from "../api/index";
import { useGlobal } from "../context/GlobalContext";

// ─── CURRENCIES ────────────────────────────────────────────────
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

// ─── LANGUAGES (Google Translate drives every translation — ────
// ─── no manual / hard-coded strings for any language) ──────────
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

const fmt = (p,cur) => `${CURR[cur]?.s||"$"}${Math.round(p*(CURR[cur]?.r||1)).toLocaleString()}`;

// ─── GLOBAL BRAND STATS (utility bar — identical on every page) ─
const BRAND_STATS = [
  {ic:"trophy", val:"12,000+", label:"Happy Travelers"},
  {ic:"ticket", val:"500+",    label:"Tours"},
  {ic:"star",   val:"4.9",     label:"Rating"},
  {ic:"clock",  val:"24/7",    label:"Support"},
];

// ─── REAL IMAGE LIBRARY ─────────────────────────────────────────
// High-quality Unsplash images per city. When you upload your own
// photos, replace these URLs with your local paths. The fallback
// chain: CITY_IMAGES → local /images/... path → branded placeholder.
const CITY_IMAGES = {
  cairo:{
    hero:"https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1800&q=90",
    attractions:[
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=640&q=85",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=640&q=85",
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=640&q=85",
      "https://images.unsplash.com/photo-1601296235943-f35c7be37685?w=640&q=85",
      "https://images.unsplash.com/photo-1630495556496-e6db4c99dbd1?w=640&q=85",
      "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?w=640&q=85",
    ],
    gallery:[
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=900&q=85",
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=900&q=85",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=900&q=85",
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=900&q=85",
      "https://images.unsplash.com/photo-1601296235943-f35c7be37685?w=900&q=85",
      "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?w=900&q=85",
    ],
  },
  luxor:{
    hero:"https://images.unsplash.com/photo-1590422749897-47726d2b5fb5?w=1800&q=90",
    attractions:[
      "https://images.unsplash.com/photo-1590422749897-47726d2b5fb5?w=640&q=85",
      "https://images.unsplash.com/photo-1558959357-5bc0e8219490?w=640&q=85",
      "https://images.unsplash.com/photo-1596627116790-af6f46dddbf9?w=640&q=85",
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=640&q=85",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=640&q=85",
      "https://images.unsplash.com/photo-1596627116790-af6f46dddbf9?w=640&q=85",
    ],
    gallery:[
      "https://images.unsplash.com/photo-1590422749897-47726d2b5fb5?w=900&q=85",
      "https://images.unsplash.com/photo-1558959357-5bc0e8219490?w=900&q=85",
      "https://images.unsplash.com/photo-1596627116790-af6f46dddbf9?w=900&q=85",
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=900&q=85",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=900&q=85",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900&q=85",
    ],
  },
  aswan:{
    hero:"https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=1800&q=90",
    attractions:[
      "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=640&q=85",
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=640&q=85",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=640&q=85",
      "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?w=640&q=85",
      "https://images.unsplash.com/photo-1601296235943-f35c7be37685?w=640&q=85",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=640&q=85",
    ],
    gallery:[
      "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=900&q=85",
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=900&q=85",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=900&q=85",
      "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?w=900&q=85",
      "https://images.unsplash.com/photo-1601296235943-f35c7be37685?w=900&q=85",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900&q=85",
    ],
  },
  alexandria:{
    hero:"https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1800&q=90",
    attractions:[
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=640&q=85",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=640&q=85",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=640&q=85",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=640&q=85",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=640&q=85",
      "https://images.unsplash.com/photo-1596627116790-af6f46dddbf9?w=640&q=85",
    ],
    gallery:[
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=900&q=85",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=900&q=85",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=900&q=85",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=900&q=85",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900&q=85",
      "https://images.unsplash.com/photo-1596627116790-af6f46dddbf9?w=900&q=85",
    ],
  },
  hurghada:{
    hero:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1800&q=90",
    attractions:[
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=640&q=85",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=640&q=85",
      "https://images.unsplash.com/photo-1560275619-4cc5a455b0a6?w=640&q=85",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=640&q=85",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=640&q=85",
      "https://images.unsplash.com/photo-1596627116790-af6f46dddbf9?w=640&q=85",
    ],
    gallery:[
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=85",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=900&q=85",
      "https://images.unsplash.com/photo-1560275619-4cc5a455b0a6?w=900&q=85",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=900&q=85",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=900&q=85",
      "https://images.unsplash.com/photo-1596627116790-af6f46dddbf9?w=900&q=85",
    ],
  },
  "sharm-el-sheikh":{
    hero:"https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1800&q=90",
    attractions:[
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=640&q=85",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=640&q=85",
      "https://images.unsplash.com/photo-1560275619-4cc5a455b0a6?w=640&q=85",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=640&q=85",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=640&q=85",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=640&q=85",
    ],
    gallery:[
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=900&q=85",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=900&q=85",
      "https://images.unsplash.com/photo-1560275619-4cc5a455b0a6?w=900&q=85",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=900&q=85",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=85",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900&q=85",
    ],
  },
  "marsa-alam":{
    hero:"https://images.unsplash.com/photo-1560275619-4cc5a455b0a6?w=1800&q=90",
    attractions:[
      "https://images.unsplash.com/photo-1560275619-4cc5a455b0a6?w=640&q=85",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=640&q=85",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=640&q=85",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=640&q=85",
      "https://images.unsplash.com/photo-1596627116790-af6f46dddbf9?w=640&q=85",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=640&q=85",
    ],
    gallery:[
      "https://images.unsplash.com/photo-1560275619-4cc5a455b0a6?w=900&q=85",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=900&q=85",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=85",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900&q=85",
      "https://images.unsplash.com/photo-1596627116790-af6f46dddbf9?w=900&q=85",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=900&q=85",
    ],
  },
};

const heroPath  = slug => CITY_IMAGES[slug]?.hero    || `/images/cities/${slug}-hero.jpg`;
const attPath   = (slug,n) => CITY_IMAGES[slug]?.attractions?.[n-1] || `/images/attractions/${slug}/${n}.jpg`;
const galPath   = (slug,n) => CITY_IMAGES[slug]?.gallery?.[n-1]     || `/images/gallery/${slug}/${n}.jpg`;
const videoPath = slug => `/videos/cities/${slug}.mp4`;
const placeholder = (text,bg="F3ECD8",fg="A07828") => `https://placehold.co/640x480/${bg}/${fg}?text=${encodeURIComponent(text)}`;

// ─── CITY META — one record per governorate, all on the same ───
// ─── system. Add a new city by adding one object here. ─────────
const CITY_META = {
  cairo: {
    slug:"cairo", color:"#C9A84C", glyph:"𓂀",
    country:"Egypt", continent:"Africa & Middle East",
    tagline:"5,000 Years of Civilization in One City",
    titleLines:["Cairo,","Where Ancient Meets","Eternal"],
    heroDesc:"Capital of 5,000 years of civilization. Walk from the last surviving ancient wonder into a beating modern metropolis unlike anywhere else on earth.",
    stats:{attractions:25, rating:4.8, bestTime:"Oct – Apr", avgStay:"3 – 5 Days", fallbackTours:150},
    about:{
      heading:"The Beating Heart of Egypt",
      paragraphs:[
        "Capital of 5,000 years of civilization. Home to the last surviving ancient wonder, the legendary Egyptian Museum, and a beating modern metropolis unlike anywhere on earth.",
        "From the silence of the pyramids at dawn to the colour of Khan el-Khalili at dusk, Cairo holds every chapter of Egyptian history within a single skyline.",
      ],
      videoDuration:"01:35",
      whyVisit:["The last surviving Ancient Wonder","World-class Egyptian Museum","Legendary Khan el-Khalili bazaar","Islamic & Coptic heritage trails","Sunset dinner cruises on the Nile"],
      whyVisitFooter:"Perfect for first-time visitors & history lovers",
    },
    attractions:[
      {name:"Great Pyramids of Giza", desc:"The last surviving wonder of the ancient world."},
      {name:"Egyptian Museum", desc:"Treasures of Tutankhamun and 5,000 years of history."},
      {name:"Khan el-Khalili", desc:"Cairo's legendary medieval bazaar and souks."},
      {name:"Islamic Cairo", desc:"Centuries of minarets, mosques and madrasas."},
      {name:"Coptic Quarter", desc:"Ancient churches in the heart of Old Cairo."},
      {name:"Nile Dinner Cruise", desc:"Dinner, music and dance on the river by night."},
    ],
  },

  luxor: {
    slug:"luxor", color:"#D4905C", glyph:"𓏏",
    country:"Egypt", continent:"Africa & Middle East",
    tagline:"The World's Greatest Open-Air Museum",
    titleLines:["Luxor,","Where History","Comes Alive"],
    heroDesc:"Step into the ancient capital of Thebes and explore magnificent temples, royal tombs, and timeless wonders that shaped civilizations.",
    stats:{attractions:18, rating:4.9, bestTime:"Oct – Apr", avgStay:"2 – 4 Days", fallbackTours:120},
    about:{
      heading:"The Ancient Heart of Egypt",
      paragraphs:[
        "Luxor is home to one of the greatest concentrations of ancient monuments in the world. Walk through the Valley of the Kings, stand in awe of Karnak Temple, and admire sunset on the Nile.",
        "Every stone tells a story. Every temple holds a mystery. Luxor is Egypt at its most magnificent.",
      ],
      videoDuration:"01:25",
      whyVisit:["Ancient temples & tombs","UNESCO World Heritage Sites","Breathtaking Nile views","Hot air balloon adventures","Rich culture & local experiences"],
      whyVisitFooter:"Perfect for history lovers & luxury travelers",
    },
    attractions:[
      {name:"Karnak Temple", desc:"The largest ancient religious complex."},
      {name:"Valley of the Kings", desc:"Explore the royal pharaohs' tombs."},
      {name:"Luxor Temple", desc:"A stunning temple in the heart of the city."},
      {name:"Hatshepsut Temple", desc:"The magnificent temple of the queen."},
      {name:"Colossi of Memnon", desc:"Two massive statues guarding the west bank."},
      {name:"Medinet Habu", desc:"A well-preserved ancient mortuary temple."},
    ],
  },

  aswan: {
    slug:"aswan", color:"#7CB9E8", glyph:"𓆣",
    country:"Egypt", continent:"Africa & Middle East",
    tagline:"Nubia's Jewel on the Sacred Nile",
    titleLines:["Aswan,","Where the Nile","Runs Golden"],
    heroDesc:"Egypt's southernmost treasure — cobalt Nubian villages, silent feluccas on the river, and the magnificent temples of Abu Simbel.",
    stats:{attractions:14, rating:4.8, bestTime:"Nov – Mar", avgStay:"1 – 3 Days", fallbackTours:60},
    about:{
      heading:"Where the Desert Meets the River",
      paragraphs:[
        "Aswan moves at the pace of the Nile itself. Sail past granite boulders on a felucca, wander through colourful Nubian villages, and stand before the colossal statues of Abu Simbel.",
        "Quieter and more intimate than Cairo or Luxor, Aswan rewards travellers who want to feel Egypt's soul rather than just see it.",
      ],
      videoDuration:"01:18",
      whyVisit:["The colossal temples of Abu Simbel","Sacred Philae Temple on its island","Colourful Nubian villages","Timeless felucca sailing","Sunset over Lake Nasser"],
      whyVisitFooter:"Perfect for a slower, soulful pace of travel",
    },
    attractions:[
      {name:"Abu Simbel", desc:"Ramses II's colossal rock-cut temples."},
      {name:"Philae Temple", desc:"A sacred island temple to Isis."},
      {name:"Nubian Village", desc:"Colourful homes and warm hospitality."},
      {name:"Felucca Sailing", desc:"Silent sails on the timeless Nile."},
      {name:"Elephantine Island", desc:"Ruins and riverside village life."},
      {name:"Lake Nasser Sunset", desc:"Golden light over Egypt's great lake."},
    ],
  },

  alexandria: {
    slug:"alexandria", color:"#4FC3F7", glyph:"𓇯",
    country:"Egypt", continent:"Mediterranean",
    tagline:"Pearl of the Mediterranean",
    titleLines:["Alexandria,","Where Empires","Met the Sea"],
    heroDesc:"Alexander's legendary city, where Greek philosophy, Egyptian mystique and Roman grandeur fused into something unforgettable on the coast.",
    stats:{attractions:16, rating:4.6, bestTime:"Apr – Jun, Sep – Oct", avgStay:"1 – 2 Days", fallbackTours:40},
    about:{
      heading:"A Different Side of Egypt",
      paragraphs:[
        "Cooled by Mediterranean breezes, Alexandria feels worlds away from the desert south. Wander the corniche, descend into ancient catacombs, and lose yourself in one of the world's great libraries.",
        "Founded by Alexander the Great, this is Egypt's most cosmopolitan city — a perfect coastal pairing for any Cairo itinerary.",
      ],
      videoDuration:"01:10",
      whyVisit:["The legendary Bibliotheca Alexandrina","Eerie underground catacombs","The seafront Qaitbay Citadel","Royal gardens of Montaza Palace","A breezy Mediterranean corniche"],
      whyVisitFooter:"Perfect for a relaxed coastal day trip",
    },
    attractions:[
      {name:"Bibliotheca Alexandrina", desc:"A modern tribute to the ancient great library."},
      {name:"Catacombs", desc:"Vast underground Roman tombs."},
      {name:"Qaitbay Citadel", desc:"A 15th-century fortress on the harbour."},
      {name:"Montaza Palace", desc:"Royal gardens overlooking the sea."},
      {name:"Roman Amphitheatre", desc:"Egypt's only surviving Roman theatre."},
      {name:"Stanley Beach", desc:"Iconic bridges over a popular city beach."},
    ],
  },

  hurghada: {
    slug:"hurghada", color:"#52B788", glyph:"𓋴",
    country:"Egypt", continent:"Red Sea",
    tagline:"Red Sea Paradise",
    titleLines:["Hurghada,","Where the Sea","Turns Turquoise"],
    heroDesc:"Crystal-clear waters, technicolour coral reefs and year-round sunshine — world-class diving paired with resort-style luxury on the Red Sea.",
    stats:{attractions:10, rating:4.7, bestTime:"Mar – May, Sep – Nov", avgStay:"4 – 7 Days", fallbackTours:90},
    about:{
      heading:"Egypt's Red Sea Playground",
      paragraphs:[
        "Hurghada trades temples for turquoise. Glide over coral gardens, swim with dolphins, and spend evenings on sun-drenched beaches looking out over the Red Sea.",
        "With direct access to some of the world's best dive sites, it's the perfect place to slow down after exploring ancient Egypt.",
      ],
      videoDuration:"01:05",
      whyVisit:["Technicolour coral reef snorkeling","Island-hopping boat trips","Desert quad biking at sunset","Submarine tours beneath the reef","World-class scuba diving"],
      whyVisitFooter:"Perfect for beach lovers & divers",
    },
    attractions:[
      {name:"Coral Reef Snorkeling", desc:"Technicolour reefs just offshore."},
      {name:"Island Hopping", desc:"Boat trips to pristine sandy islands."},
      {name:"Desert Quad Safari", desc:"Sunset rides through the eastern desert."},
      {name:"Submarine Tour", desc:"See the reef without getting wet."},
      {name:"Parasailing", desc:"Bird's-eye views of the coastline."},
      {name:"Scuba Diving", desc:"World-class dive sites for every level."},
    ],
  },

  "sharm-el-sheikh": {
    slug:"sharm-el-sheikh", color:"#9B72CF", glyph:"𓊃",
    country:"Egypt", continent:"Sinai",
    tagline:"The City of Peace & Adventure",
    titleLines:["Sharm El Sheikh,","Where Mountains","Meet the Sea"],
    heroDesc:"Where the Sinai mountains collide with the Red Sea — legendary diving, golden beaches, and a mystic sunrise atop Mount Sinai.",
    stats:{attractions:12, rating:4.7, bestTime:"Mar – May, Sep – Nov", avgStay:"4 – 7 Days", fallbackTours:95},
    about:{
      heading:"Sinai's Diving Capital",
      paragraphs:[
        "Sharm El Sheikh pairs some of the planet's finest diving with the dramatic desert mountains of the Sinai Peninsula.",
        "Spend your days beneath the waves at Ras Mohammed and your nights along the lively shores of Naama Bay.",
      ],
      videoDuration:"01:12",
      whyVisit:["Ras Mohammed National Park","A sunrise hike up Mount Sinai","Lively Naama Bay nightlife","Diving at Tiran Island","Desert safaris into the Sinai"],
      whyVisitFooter:"Perfect for divers & adventure seekers",
    },
    attractions:[
      {name:"Ras Mohammed National Park", desc:"Egypt's first protected marine park."},
      {name:"Mount Sinai Sunrise", desc:"A sacred sunrise hike for all levels."},
      {name:"Naama Bay", desc:"Sharm's lively beachfront promenade."},
      {name:"Tiran Island Diving", desc:"Dramatic reef walls and strong currents."},
      {name:"Shark Bay", desc:"Easy shore snorkeling in calm waters."},
      {name:"Desert Safari", desc:"4x4 adventures into the Sinai interior."},
    ],
  },

  "marsa-alam": {
    slug:"marsa-alam", color:"#26C6DA", glyph:"𓌀",
    country:"Egypt", continent:"Red Sea",
    tagline:"Untouched Red Sea Wilderness",
    titleLines:["Marsa Alam,","Where the Wild","Red Sea Begins"],
    heroDesc:"Wild spinner dolphins, gentle dugongs, virgin coral reefs and a sky so full of stars it looks painted — Egypt's last untouched coastline.",
    stats:{attractions:9, rating:4.8, bestTime:"Mar – May, Sep – Nov", avgStay:"4 – 6 Days", fallbackTours:35},
    about:{
      heading:"Egypt's Last Wild Coast",
      paragraphs:[
        "Far from the crowds, Marsa Alam offers some of the Red Sea's most pristine reefs and most intimate wildlife encounters.",
        "Swim alongside wild dolphins, snorkel with gentle dugongs, and fall asleep under desert skies untouched by city lights.",
      ],
      videoDuration:"01:08",
      whyVisit:["Swimming with wild spinner dolphins","Snorkeling alongside gentle dugongs","Untouched Elphinstone Reef","Stargazing under desert skies","Exploring Wadi el Gemal National Park"],
      whyVisitFooter:"Perfect for wildlife lovers & divers",
    },
    attractions:[
      {name:"Wild Dolphin Swimming", desc:"Spinner dolphins in their natural pod."},
      {name:"Dugong Snorkeling", desc:"Gentle giants of the sea grass beds."},
      {name:"Elphinstone Reef", desc:"A world-famous wall dive."},
      {name:"Desert Stargazing", desc:"Some of Egypt's darkest night skies."},
      {name:"Wadi el Gemal", desc:"A protected desert & coastal park."},
      {name:"Sea Turtles", desc:"Shallow lagoons rich with marine life."},
    ],
  },
};

const DEFAULT_META = {
  slug:"egypt", color:"#C9A84C", glyph:"𓂀",
  country:"Egypt", continent:"Africa",
  tagline:"Discover Egypt",
  titleLines:["Discover","Timeless","Egypt"],
  heroDesc:"Explore the wonders of this ancient land, from desert temples to the banks of the eternal Nile.",
  stats:{attractions:8, rating:4.7, bestTime:"Oct – Apr", avgStay:"2 – 4 Days", fallbackTours:30},
  about:{
    heading:"A Land of Timeless Wonder",
    paragraphs:[
      "Every region of Egypt holds its own chapter of a 5,000-year story — temples, deserts, rivers and reefs woven into one unforgettable journey.",
      "Let our local specialists craft an itinerary built entirely around what you came here to feel.",
    ],
    videoDuration:"01:15",
    whyVisit:["Ancient temples & monuments","The eternal Nile River","Vast desert landscapes","Rich, living local culture"],
    whyVisitFooter:"Perfect for first-time visitors to Egypt",
  },
  attractions:[
    {name:"Ancient Temples", desc:"Monuments that have stood for millennia."},
    {name:"Nile River", desc:"The lifeline of Egypt, then and now."},
    {name:"Desert Safari", desc:"Golden dunes beyond the cities."},
    {name:"Local Culture", desc:"Markets, music and Egyptian hospitality."},
  ],
};

const getMeta = slug => CITY_META[slug] || {...DEFAULT_META, slug};

// ─── BADGE SYSTEM for tour cards (cosmetic variety, matches the ─
// ─── reference design's coloured corner tags) ───────────────────
const BADGES = [
  {label:"Bestseller", bg:"linear-gradient(135deg,#C9A84C,#A07828)"},
  {label:"Popular",    bg:"linear-gradient(135deg,#52B788,#2F8F63)"},
  {label:"Luxury",     bg:"linear-gradient(135deg,#3A2A12,#2C1A06)"},
  {label:"Adventure",  bg:"linear-gradient(135deg,#C0405A,#9A2E45)"},
  {label:"Family",     bg:"linear-gradient(135deg,#4F86C6,#3A6BA8)"},
];
const badgeFor = (tour, i) => {
  const c = (tour.category||"").toLowerCase();
  if(c.includes("boat")) return BADGES[2];
  if(c.includes("adventure")) return BADGES[3];
  if(c.includes("day trip")) return BADGES[1];
  if(c.includes("aerial")) return BADGES[0];
  if(c.includes("performance")||c.includes("transfer")) return BADGES[4];
  return BADGES[i % BADGES.length];
};

// ─── TOUR CATEGORY LABELS — used to group the full tour list ────
// ─── into organized, named rows (no "view all" page needed) ────
const CAT_META = {
  "Guided tours and free tours": {icon:"🏛️", label:"Guided & Walking Tours"},
  "Day trip":                    {icon:"🗺️", label:"Day Trips"},
  "Tour packages":                {icon:"📦", label:"Multi-Day Packages"},
  "Aerial tours":                  {icon:"🎈", label:"Aerial Experiences"},
  "Boat tour":                      {icon:"⛴", label:"Nile & Boat Tours"},
  "Adventure and nature":            {icon:"⚡", label:"Adventure & Nature"},
  "Transfers":                        {icon:"🚗", label:"Transfers"},
  "Performances":                      {icon:"🎭", label:"Shows & Performances"},
};
const catMetaFor = cat => CAT_META[cat] || {icon:"✦", label:cat||"More Experiences"};

// ─── ICONS — tiny inline SVGs, no external icon dependency ──────
const Ic = {
  trophy:p=>(<svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 4h10v4a5 5 0 0 1-10 0V4Z"/><path d="M7 5H4a1 1 0 0 0-1 1 4 4 0 0 0 4 4"/><path d="M17 5h3a1 1 0 0 1 1 1 4 4 0 0 1-4 4"/><path d="M12 13v4M9 20h6M10 17h4v3h-4z"/></svg>),
  ticket:p=>(<svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z"/><path d="M10 6v12" strokeDasharray="2 2"/></svg>),
  star:p=>(<svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="currentColor"><path d="M12 2l3.1 6.6 7.2.9-5.4 5 1.5 7.2L12 18l-6.4 3.7 1.5-7.2-5.4-5 7.2-.9L12 2Z"/></svg>),
  clock:p=>(<svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>),
  phone:p=>(<svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="currentColor"><path d="M6.6 2.7 4 5.3c-.7 4 5.6 14.3 11.3 14.5l2.6-2.5-3.6-3.4-1.7 1c-1.7-.8-3.5-2.7-4.2-4.4l1-1.7L6 2.7Z"/></svg>),
  whatsapp:p=>(<svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="currentColor"><path d="M17.4 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1-.5-2.4-1.5-3.3-3-.2-.3-.1-.5.1-.7.3-.3.6-.7.8-1 .1-.2.1-.5 0-.7-.1-.2-.7-1.7-.9-2-.2-.4-.4-.4-.7-.4h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3 4.8 4.2 2.9 1.2 2.9.8 3.4.7.5 0 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.5Z"/><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z" fillOpacity=".15"/><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z" fill="none" stroke="currentColor" strokeWidth="0"/></svg>),
  heart:p=>(<svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20s-7-4.4-9.3-8.8C1.2 8 2.6 5 5.7 4.5c1.9-.3 3.6.6 4.7 2.2 1.1-1.6 2.8-2.5 4.7-2.2 3.1.5 4.5 3.5 3 6.7C19 15.6 12 20 12 20Z"/></svg>),
  user:p=>(<svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.6 3-6 7-6s7 2.4 7 6"/></svg>),
  chevL:p=>(<svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 5l-7 7 7 7"/></svg>),
  chevR:p=>(<svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>),
  chevD:p=>(<svg viewBox="0 0 24 24" width={p.s||10} height={p.s||10} fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 8l7 7 7-7"/></svg>),
  play:p=>(<svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill="currentColor"><path d="M8 5.5v13l11-6.5-11-6.5Z"/></svg>),
  check:p=>(<svg viewBox="0 0 24 24" width={p.s||13} height={p.s||13} fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M4 12.5l5 5L20 6"/></svg>),
  arrow:p=>(<svg viewBox="0 0 24 24" width={p.s||13} height={p.s||13} fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>),
  briefcase:p=>(<svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>),
  landmark:p=>(<svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 21h18M5 21V10M19 21V10M3 10l9-6 9 6M9 21v-7M15 21v-7"/></svg>),
  calendar:p=>(<svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>),
  shield:p=>(<svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l8 3v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6l8-3Z"/><path d="M9 12l2.2 2.2L15.5 9.5"/></svg>),
  compass:p=>(<svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M14.5 9.5 13 13l-3.5 1.5L11 11l3.5-1.5Z"/></svg>),
  team:p=>(<svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="8" cy="9" r="3"/><circle cx="17" cy="9" r="3"/><path d="M2 20c0-3 2.5-5 6-5s6 2 6 5M11 20c0-2.7 2.2-4.5 6-4.5s6.5 1.8 6.5 4.5"/></svg>),
  pin:p=>(<svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.3"/></svg>),
  mail:p=>(<svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 6l9 7 9-7"/></svg>),
  fb:p=>(<svg viewBox="0 0 24 24" width={p.s||15} height={p.s||15} fill="currentColor"><path d="M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V11H8v3h2.5v7H14v-7h2.3l.4-3H14V9.4c0-.3.2-.4.4-.4Z"/></svg>),
  ig:p=>(<svg viewBox="0 0 24 24" width={p.s||15} height={p.s||15} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>),
  yt:p=>(<svg viewBox="0 0 24 24" width={p.s||15} height={p.s||15} fill="currentColor"><rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="M10.5 9.5v5l4.3-2.5-4.3-2.5Z"/></svg>),
  tiktok:p=>(<svg viewBox="0 0 24 24" width={p.s||15} height={p.s||15} fill="currentColor"><path d="M14 3c.4 2 1.9 3.4 4 3.6v2.7c-1.5 0-2.9-.4-4-1.2v6.4A4.5 4.5 0 1 1 9.5 10v2.7a1.8 1.8 0 1 0 1.8 1.8V3H14Z"/></svg>),
};

// ─── LOGO ────────────────────────────────────────────────────
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

function Stars({score=4.8, size=11}){
  const full = Math.round(score);
  return <span style={{color:"#C9A84C",fontSize:size,letterSpacing:1}}>{"★".repeat(Math.min(5,full))}{"☆".repeat(Math.max(0,5-full))}</span>;
}

// ─── LANGUAGE / CURRENCY DROPDOWNS (shared, Google-Translate-driven) ─
function LanguageDropdown({visible, onClose, currentLang, onSelect}){
  if(!visible) return null;
  return(
    <div className="dropP">
      <div className="dropLabel">🌍 Select Language</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
        {LANGS.map(lang=>(
          <button key={lang.code} className={`langBtn${currentLang===lang.code?" active":""}`} onClick={()=>{onSelect(lang.code, lang.dir);onClose();}}>
            <span style={{fontSize:15}}>{lang.flag}</span><span>{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
function CurrencyDropdown({visible, current, onSelect}){
  if(!visible) return null;
  return(
    <div className="dropP" style={{minWidth:200,maxHeight:300,overflowY:"auto"}}>
      {Object.entries(CURR).map(([code,{l}])=>(
        <div key={code} className={`curRow${current===code?" active":""}`} onClick={()=>onSelect(code)}>{l}</div>
      ))}
    </div>
  );
}

// ─── GLOBAL STYLES ──────────────────────────────────────────────
const Styles = ({color="#C9A84C"}) => (
  <style>{`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;600;700&display=swap');

:root{
  --bg:#FAF6ED; --bg2:#F3ECD8; --bg3:#EDE3C8;
  --dark:#2C1A06; --mid:#6B4E1A; --muted:#9C7A3C;
  --card:#FFFDF8; --cardb:#F0E6CC;
  --gold:#C9A84C; --gold-d:#A07828; --gold-dd:#8B6010; --gold-l:#E8C96D;
  --bar:#171107;
  --accent:${color}; --accent-dim:${color}26;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;-webkit-tap-highlight-color:transparent;}
body{background:var(--bg);color:var(--dark);font-family:'Josefin Sans',sans-serif;overflow-x:hidden;}
::selection{background:rgba(201,168,76,.3);color:#2C1A06;}
::-webkit-scrollbar{width:5px;height:5px;}
::-webkit-scrollbar-track{background:var(--bg2);}
::-webkit-scrollbar-thumb{background:rgba(193,156,60,.4);border-radius:3px;}
a{color:inherit;}
button{font-family:inherit;}

@keyframes heroZoom{0%{transform:scale(1)}100%{transform:scale(1.06)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes slideD{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:none}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(201,168,76,.45)}50%{box-shadow:0 0 0 10px rgba(201,168,76,0)}}

.gt{background:linear-gradient(135deg,#8B6010 0%,#C9A84C 45%,#E8C96D 70%,#A07828 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.gline{height:1px;background:linear-gradient(to right,transparent,rgba(193,156,60,.35),transparent);}

/* ── UTILITY BAR ── */
.cp-bar{background:var(--bar);color:#D8C29A;height:38px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(14px,4vw,40px);font-family:'Josefin Sans',sans-serif;font-size:11.5px;position:relative;z-index:1100;}
.cp-bar-stats{display:flex;gap:clamp(10px,2vw,22px);align-items:center;overflow:hidden;}
.cp-bar-stat{display:flex;align-items:center;gap:6px;white-space:nowrap;color:#C9A84C;}
.cp-bar-stat b{color:#F3ECD8;font-weight:600;}
.cp-bar-right{display:flex;align-items:center;gap:clamp(8px,1.6vw,16px);}
.cp-bar-sw{display:flex;align-items:center;gap:5px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:4px 9px;cursor:pointer;color:#E9DCBC;white-space:nowrap;}
.cp-bar-sw:hover{background:rgba(255,255,255,.1);}
.cp-bar-tel{display:flex;align-items:center;gap:6px;color:#E9DCBC;white-space:nowrap;}
.cp-bar-wa{display:flex;align-items:center;gap:6px;background:#25D366;color:#08210F;border-radius:6px;padding:4px 11px;text-decoration:none;font-weight:700;white-space:nowrap;}

/* ── MAIN NAV ── */
.cp-nav{position:sticky;top:0;left:0;right:0;z-index:1050;height:68px;background:rgba(250,246,237,.98);backdrop-filter:blur(20px);border-bottom:1px solid rgba(193,156,60,.22);display:flex;align-items:center;justify-content:space-between;padding:0 clamp(14px,4vw,40px);}
.cp-logo-wrap{display:flex;align-items:center;gap:11px;cursor:pointer;flex-shrink:0;}
.cp-logo-name{font-family:'Cinzel',serif;font-size:15px;font-weight:700;letter-spacing:.18em;background:linear-gradient(135deg,#8B6010,#C9A84C);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.cp-logo-sub{font-size:7px;color:#9C7A3C;letter-spacing:.32em;font-family:'Josefin Sans',sans-serif;}
.cp-navlinks{display:flex;align-items:center;gap:clamp(10px,1.8vw,26px);list-style:none;}
.cp-navlink{font-size:11.5px;letter-spacing:.05em;color:rgba(44,26,6,.68);text-decoration:none;font-weight:600;display:flex;align-items:center;gap:4px;white-space:nowrap;cursor:pointer;}
.cp-navlink:hover{color:var(--gold-d);}
.cp-navright{display:flex;align-items:center;gap:clamp(6px,1.2vw,14px);flex-shrink:0;}
.cp-icbtn{width:36px;height:36px;border-radius:9px;display:flex;align-items:center;justify-content:center;background:rgba(201,168,76,.07);border:1px solid rgba(193,156,60,.22);color:#8B6010;cursor:pointer;text-decoration:none;}
.cp-icbtn:hover{background:rgba(201,168,76,.16);}
.cp-trip-btn{background:linear-gradient(135deg,#A07828,#C9A84C,#E8C96D);color:#FAF6ED;border:none;border-radius:9px;padding:11px 22px;cursor:pointer;font-weight:700;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;text-decoration:none;box-shadow:0 5px 22px rgba(160,120,40,.35);transition:all .2s;white-space:nowrap;}
.cp-trip-btn:hover{box-shadow:0 8px 30px rgba(160,120,40,.5);transform:translateY(-1px);}
.cp-burger{display:none;width:38px;height:38px;border-radius:9px;border:1px solid rgba(193,156,60,.3);background:rgba(201,168,76,.07);align-items:center;justify-content:center;cursor:pointer;flex-direction:column;gap:4px;}
.cp-burger span{width:16px;height:1.6px;background:#8B6010;display:block;}

/* dropdown shared */
.dropP{position:absolute;top:calc(100% + 8px);right:0;background:linear-gradient(145deg,#FAF6ED,#F3ECD8);border:1.5px solid rgba(193,156,60,.3);border-radius:14px;padding:12px;z-index:1200;box-shadow:0 22px 56px rgba(44,26,6,.18);animation:slideD .18s ease;min-width:210px;}
.dropLabel{font-size:9px;color:#A07828;letter-spacing:.2em;text-transform:uppercase;margin-bottom:9px;font-weight:700;padding:0 4px;}
.langBtn{background:rgba(201,168,76,.05);border:1.4px solid rgba(193,156,60,.16);border-radius:9px;padding:8px 9px;cursor:pointer;display:flex;align-items:center;gap:7px;font-size:11px;color:rgba(44,26,6,.65);font-weight:400;text-align:left;}
.langBtn.active{background:rgba(201,168,76,.18);border-color:rgba(160,120,40,.5);color:#8B6010;font-weight:700;}
.langBtn:hover{background:rgba(201,168,76,.12);}
.curRow{padding:9px 10px;border-radius:8px;cursor:pointer;font-size:11.5px;color:rgba(44,26,6,.62);}
.curRow:hover{background:rgba(201,168,76,.1);}
.curRow.active{color:#A07828;font-weight:700;background:rgba(201,168,76,.12);}

/* destinations mega dropdown */
.cp-destdrop{position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%);background:linear-gradient(145deg,#FAF6ED,#F3ECD8);border:1.5px solid rgba(193,156,60,.28);border-radius:16px;padding:14px;display:grid;grid-template-columns:repeat(3,minmax(140px,1fr));gap:6px;z-index:1200;box-shadow:0 24px 60px rgba(44,26,6,.18);animation:slideD .18s ease;min-width:380px;}
.cp-destitem{display:flex;align-items:center;gap:8px;padding:9px 11px;border-radius:9px;text-decoration:none;color:#6B4E1A;font-size:12px;font-weight:600;}
.cp-destitem:hover{background:rgba(201,168,76,.12);color:#8B6010;}

/* mobile menu */
.cp-mmenu{position:fixed;inset:0;background:rgba(250,246,237,.99);backdrop-filter:blur(10px);z-index:2500;display:flex;flex-direction:column;padding:24px;animation:fadeIn .2s ease;overflow-y:auto;}
.cp-mmenu a, .cp-mmenu button.cp-mlink{font-family:'Cinzel',serif;font-size:19px;color:#2C1A06;text-decoration:none;padding:14px 0;border-bottom:1px solid rgba(193,156,60,.18);background:none;border-left:none;border-right:none;border-top:none;text-align:left;cursor:pointer;}

/* ── BREADCRUMB ── */
.cp-crumb{padding:13px clamp(14px,4vw,40px);background:rgba(243,236,216,.55);border-bottom:1px solid rgba(193,156,60,.14);display:flex;align-items:center;gap:7px;font-size:11px;color:#9C7A3C;}
.cp-crumb a{text-decoration:none;color:inherit;}
.cp-crumb a:hover{color:#A07828;}
.cp-crumb .cur{color:#A07828;font-weight:700;}

/* ── HERO ── */
.ch-wrap{position:relative;width:100%;min-height:clamp(440px,72vh,640px);overflow:hidden;display:flex;align-items:flex-start;}
.ch-bg{position:absolute;inset:-4%;background-size:cover;background-position:center;animation:heroZoom 16s ease-in-out infinite alternate;}
.ch-overlay{position:absolute;inset:0;background:linear-gradient(100deg,rgba(20,12,4,.86) 0%,rgba(20,12,4,.62) 32%,rgba(20,12,4,.22) 58%,rgba(20,12,4,.08) 100%),linear-gradient(to top,rgba(10,6,2,.35) 0%,transparent 35%);}
.ch-content{position:relative;z-index:3;width:min(620px,92%);padding:clamp(46px,8vh,72px) clamp(18px,5vw,44px) clamp(80px,10vh,96px);}
.ch-tagline{font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:600;font-size:clamp(14px,1.6vw,18px);color:var(--gold-l);margin-bottom:14px;}
.ch-title{font-family:'Cinzel',serif;font-weight:700;font-size:clamp(32px,5.2vw,58px);line-height:1.08;color:#FAF6ED;margin-bottom:16px;}
.ch-title .accent{background:linear-gradient(135deg,var(--gold-l),var(--gold),var(--gold-d));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.ch-desc{font-family:'Josefin Sans',sans-serif;font-size:clamp(12.5px,1.3vw,14.5px);color:rgba(250,246,237,.82);line-height:1.7;max-width:440px;margin-bottom:26px;}
.ch-btns{display:flex;gap:13px;flex-wrap:wrap;}
.ch-btn-gold{background:linear-gradient(135deg,#A07828,#C9A84C,#E8C96D);color:#2C1A06;border:none;border-radius:9px;padding:13px 24px;cursor:pointer;font-weight:700;font-size:11px;letter-spacing:.14em;text-transform:uppercase;box-shadow:0 8px 28px rgba(0,0,0,.25);text-decoration:none;display:inline-flex;align-items:center;}
.ch-btn-ghost{background:rgba(250,246,237,.08);border:1.4px solid rgba(250,246,237,.55);color:#FAF6ED;border-radius:9px;padding:13px 24px;cursor:pointer;font-weight:700;font-size:11px;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;display:inline-flex;align-items:center;}
.ch-btn-ghost:hover{background:rgba(250,246,237,.16);}

/* ── FLOATING STATS CARD ── */
.cp-statswrap{position:relative;z-index:6;margin:0 clamp(14px,4vw,40px);margin-top:-58px;}
.cp-statscard{background:var(--card);border:1.4px solid var(--cardb);border-radius:18px;box-shadow:0 22px 60px rgba(120,90,30,.16);padding:clamp(14px,2vw,20px) clamp(16px,3vw,30px);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px;}
.cp-stat-it{display:flex;align-items:center;gap:11px;flex:1;min-width:120px;}
.cp-stat-ic{width:36px;height:36px;border-radius:10px;background:var(--accent-dim);color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.cp-stat-val{font-family:'Cinzel',serif;font-size:18px;font-weight:700;color:#2C1A06;line-height:1.1;}
.cp-stat-lbl{font-size:10px;color:#9C7A3C;font-family:'Josefin Sans',sans-serif;margin-top:1px;}
.cp-stat-div{width:1px;align-self:stretch;background:rgba(193,156,60,.2);display:none;}

/* ── SECTION HEADERS ── */
.cp-sec{padding:54px clamp(14px,4vw,40px);}
.cp-sec-eyebrow{font-size:10px;color:#A07828;letter-spacing:.28em;text-transform:uppercase;font-weight:700;margin-bottom:8px;}
.cp-sec-head{display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:26px;}
.cp-sec-title{font-family:'Cinzel',serif;font-size:clamp(22px,2.6vw,32px);font-weight:700;color:#2C1A06;}
.cp-sec-link{display:flex;align-items:center;gap:10px;}
.cp-sec-link a{font-size:11.5px;color:#A07828;font-weight:700;letter-spacing:.05em;text-decoration:none;white-space:nowrap;}
.cp-arrowbtn{width:30px;height:30px;border-radius:8px;border:1.4px solid rgba(193,156,60,.35);background:rgba(201,168,76,.06);color:#A07828;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;}
.cp-arrowbtn:hover{background:rgba(201,168,76,.16);}

/* ── ABOUT / VIDEO / WHY-VISIT ── */
.cp-about-grid{display:grid;grid-template-columns:1fr 1.25fr .82fr;gap:26px;align-items:stretch;}
.cp-about-text p{font-family:'Cormorant Garamond',serif;font-size:14.5px;color:#6B4E1A;line-height:1.85;margin-bottom:14px;}
.cp-about-title{font-family:'Cinzel',serif;font-size:clamp(20px,2.4vw,28px);font-weight:700;color:#2C1A06;line-height:1.25;margin-bottom:16px;}
.cp-about-btn{background:transparent;border:1.4px solid rgba(160,120,40,.45);color:#A07828;border-radius:9px;padding:11px 20px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;cursor:pointer;margin-top:6px;text-decoration:none;display:inline-flex;}
.cp-about-btn:hover{background:rgba(201,168,76,.1);}
.cp-video{position:relative;border-radius:18px;overflow:hidden;min-height:280px;background:#1a1208;cursor:pointer;}
.cp-video img,.cp-video video{width:100%;height:100%;object-fit:cover;display:block;position:absolute;inset:0;}
.cp-video-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(20,12,4,.85) 0%,rgba(20,12,4,.1) 55%,transparent 100%);}
.cp-video-play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:62px;height:62px;border-radius:50%;background:rgba(250,246,237,.92);display:flex;align-items:center;justify-content:center;color:#A07828;animation:pulse 2.4s infinite;}
.cp-video-cap{position:absolute;bottom:16px;left:18px;color:#FAF6ED;}
.cp-video-cap b{font-family:'Cinzel',serif;font-size:14px;display:block;}
.cp-video-cap span{font-size:11px;color:rgba(250,246,237,.75);}
.cp-video-dur{position:absolute;bottom:16px;right:16px;background:rgba(20,12,4,.55);color:#FAF6ED;font-size:11px;padding:4px 10px;border-radius:6px;}
.cp-why{background:rgba(201,168,76,.07);border:1.4px solid rgba(193,156,60,.22);border-radius:18px;padding:22px;display:flex;flex-direction:column;}
.cp-why-title{font-family:'Cinzel',serif;font-size:15px;font-weight:700;color:#2C1A06;margin-bottom:14px;}
.cp-why-item{display:flex;align-items:flex-start;gap:9px;margin-bottom:11px;font-size:12.5px;color:#6B4E1A;line-height:1.5;}
.cp-why-check{width:17px;height:17px;border-radius:50%;background:rgba(82,183,136,.18);color:#2F8F63;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;}
.cp-why-foot{margin-top:auto;padding-top:14px;border-top:1px solid rgba(193,156,60,.2);font-family:'Cormorant Garamond',serif;font-style:italic;font-size:12.5px;color:#9C7A3C;line-height:1.6;}

/* ── GALLERY — bento mosaic (creative, no "view all" needed) ── */
.cp-gal-row{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:118px;gap:12px;}
.cp-gal-it{position:relative;border-radius:14px;overflow:hidden;cursor:pointer;}
.cp-gal-it:nth-child(1){grid-column:1/3;grid-row:1/3;}
.cp-gal-it:nth-child(2){grid-column:3/4;grid-row:1/2;}
.cp-gal-it:nth-child(3){grid-column:4/5;grid-row:1/2;}
.cp-gal-it:nth-child(4){grid-column:3/4;grid-row:2/3;}
.cp-gal-it:nth-child(5){grid-column:4/5;grid-row:2/3;}
.cp-gal-it:nth-child(6){grid-column:1/5;grid-row:3/4;}
.cp-gal-it img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s ease;}
.cp-gal-it:hover img{transform:scale(1.08);}
.cp-gal-it::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(20,12,4,.22),transparent 45%);pointer-events:none;}

/* ── TOURS ── */
.cp-tour-row{display:grid;grid-template-columns:repeat(5,1fr);gap:18px;}
.cp-card{position:relative;border-radius:16px;overflow:hidden;background:var(--card);border:1.4px solid var(--cardb);cursor:pointer;display:flex;flex-direction:column;box-shadow:0 6px 24px rgba(180,140,60,.08);transition:all .3s ease;}
.cp-card:hover{transform:translateY(-5px);box-shadow:0 22px 50px rgba(180,140,60,.2);border-color:rgba(193,156,60,.45);}
.cp-card-imgwrap{position:relative;height:140px;flex-shrink:0;overflow:hidden;background:var(--bg3);}
.cp-card-img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s ease;}
.cp-card:hover .cp-card-img{transform:scale(1.07);}
.cp-card-badge{position:absolute;top:10px;left:10px;z-index:2;padding:4px 10px;border-radius:6px;color:#FAF6ED;font-size:8.5px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;}
.cp-card-body{padding:13px 15px 15px;flex:1;display:flex;flex-direction:column;gap:7px;}
.cp-card-title{font-family:'Cinzel',serif;font-size:13px;color:#2C1A06;font-weight:700;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:34px;}
.cp-card-meta{display:flex;align-items:center;gap:7px;font-size:10.5px;color:#9C7A3C;}
.cp-card-rating{display:flex;align-items:center;gap:5px;font-size:10.5px;color:#9C7A3C;}
.cp-card-score{font-weight:700;color:#A07828;}
.cp-card-foot{margin-top:auto;border-top:1px solid rgba(193,156,60,.16);padding-top:10px;}
.cp-card-from{font-size:8px;text-transform:uppercase;letter-spacing:.14em;color:#9C7A3C;margin-bottom:2px;}
.cp-card-amt{font-family:'Cinzel',serif;font-size:18px;color:#8B6010;font-weight:700;}
.cp-card-per{font-size:9.5px;color:#9C7A3C;}
.cp-card-fc{font-size:10px;color:#2F8F63;display:flex;align-items:center;gap:4px;margin-bottom:8px;}
.cp-card-btn{width:100%;padding:9px;border-radius:8px;background:linear-gradient(135deg,#A07828,#C9A84C);color:#FAF6ED;border:none;font-size:9.5px;letter-spacing:.12em;font-weight:700;text-transform:uppercase;cursor:pointer;margin-top:8px;}
.cp-card-btn:hover{box-shadow:0 6px 20px rgba(160,120,40,.4);}
.cp-cat-title{display:flex;align-items:center;gap:9px;font-family:'Cinzel',serif;font-size:16px;font-weight:700;color:#2C1A06;}
.cp-cat-ic{font-size:17px;}
.cp-cat-count{font-family:'Josefin Sans',sans-serif;font-size:10px;font-weight:700;color:#A07828;background:rgba(201,168,76,.14);border-radius:20px;padding:2px 9px;}

/* ── HORIZONTAL SCROLL (mobile fallback for grids) ── */
.cp-scrollx{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;-ms-overflow-style:none;scrollbar-width:none;padding-bottom:4px;}
.cp-scrollx::-webkit-scrollbar{display:none;}
.cp-scrollx > *{scroll-snap-align:start;flex-shrink:0;}

/* ── CTA BANNER ── */
.cp-cta{background:linear-gradient(120deg,#171107,#241906 60%,#171107);padding:34px clamp(16px,4vw,40px);display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;}
.cp-cta-title{font-family:'Cinzel',serif;font-size:clamp(19px,2.2vw,26px);color:#FAF6ED;font-weight:700;margin-bottom:5px;}
.cp-cta-sub{font-size:12px;color:rgba(250,246,237,.55);font-family:'Cormorant Garamond',serif;font-style:italic;}
.cp-cta-feats{display:flex;gap:22px;flex-wrap:wrap;}
.cp-cta-feat{display:flex;align-items:center;gap:9px;}
.cp-cta-feat-ic{width:34px;height:34px;border-radius:9px;background:rgba(201,168,76,.14);color:var(--gold-l);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.cp-cta-feat b{font-size:11.5px;color:#F3ECD8;display:block;font-weight:700;}
.cp-cta-feat span{font-size:9.5px;color:rgba(250,246,237,.5);}
.cp-cta-btns{display:flex;gap:10px;flex-wrap:wrap;}
.cp-cta-wa{background:transparent;border:1.4px solid rgba(250,246,237,.3);color:#F3ECD8;border-radius:9px;padding:11px 18px;font-size:10.5px;font-weight:700;letter-spacing:.08em;text-decoration:none;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;}
.cp-cta-wa:hover{background:rgba(250,246,237,.08);}

/* ── FOOTER ── */
.cp-footer{background:linear-gradient(135deg,#EDE3C8,#E0D4A8);border-top:1.4px solid rgba(193,156,60,.25);padding:clamp(40px,5vw,60px) clamp(16px,4vw,40px) 0;}
.cp-ftop{display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr 1.3fr;gap:clamp(16px,2.6vw,30px);padding-bottom:34px;}
.cp-fhead{color:#8B6010;font-size:9px;letter-spacing:.24em;text-transform:uppercase;margin-bottom:15px;font-weight:700;padding-bottom:9px;border-bottom:1px solid rgba(193,156,60,.22);}
.cp-flink{display:block;color:#7A5B22;font-size:12.5px;margin-bottom:9px;text-decoration:none;font-family:'Cormorant Garamond',serif;}
.cp-flink:hover{color:#8B6010;}
.cp-fsocial{display:flex;gap:8px;margin-top:14px;}
.cp-fsoc-ic{width:32px;height:32px;border-radius:8px;background:rgba(201,168,76,.14);border:1px solid rgba(193,156,60,.25);color:#8B6010;display:flex;align-items:center;justify-content:center;text-decoration:none;}
.cp-fcontact-row{display:flex;align-items:flex-start;gap:9px;margin-bottom:11px;font-size:12px;color:#7A5B22;font-family:'Cormorant Garamond',serif;text-decoration:none;}
.cp-fwa-btn{margin-top:10px;background:linear-gradient(135deg,#A07828,#C9A84C);color:#FAF6ED;border-radius:9px;padding:10px 16px;font-size:10.5px;font-weight:700;letter-spacing:.08em;text-decoration:none;display:inline-flex;align-items:center;gap:7px;}
.cp-fbottom{border-top:1px solid rgba(193,156,60,.2);padding:18px 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;font-size:11.5px;color:rgba(107,78,26,.6);}
.cp-pay{display:flex;gap:8px;align-items:center;}
.cp-pay img{height:16px;opacity:.7;}

/* ── FLOATING ── */
.cp-float-wa{position:fixed;bottom:74px;right:18px;background:#25D366;color:#fff;border-radius:30px;padding:11px 17px;text-decoration:none;font-weight:700;font-size:12px;display:flex;align-items:center;gap:8px;z-index:500;box-shadow:0 6px 26px rgba(37,211,102,.45);}
.cp-float-top{position:fixed;bottom:18px;right:18px;width:42px;height:42px;border-radius:11px;background:rgba(201,168,76,.16);border:1.4px solid rgba(193,156,60,.4);color:#A07828;cursor:pointer;z-index:500;display:flex;align-items:center;justify-content:center;}

/* ── LOADER ── */
.cp-loader{min-height:100vh;background:var(--bg);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;}
.cp-loader-glyph{font-size:48px;color:#C9A84C;animation:pulse 1.6s infinite;}
.cp-loader-txt{font-size:10px;letter-spacing:.3em;color:#9C7A3C;text-transform:uppercase;}

/* ── RESPONSIVE — same system, fewer columns, never a different layout language ── */
@media(max-width:1180px){
  .cp-about-grid{grid-template-columns:1fr 1fr;}
  .cp-why{grid-column:1/-1;}
  .cp-gal-row{grid-template-columns:repeat(4,1fr);}
  .cp-tour-row{grid-template-columns:repeat(3,1fr);}
  .cp-ftop{grid-template-columns:2fr 1fr 1fr 1fr;}
  .cp-ftop > div:nth-child(5){grid-column:1/3;}
  .cp-ftop > div:nth-child(6){grid-column:3/5;}
}
@media(max-width:900px){
  .cp-navlinks,.cp-trip-btn,.cp-bar .full{display:none;}
  .cp-burger{display:flex;}
  .cp-stat-div{display:none;}
  .cp-about-grid{grid-template-columns:1fr;}
  /* Mobile: vertical stack — no horizontal "view all" scrolling, same as Home.jsx */
  .cp-gal-row{display:flex;flex-direction:column;grid-template-columns:none;height:auto;gap:14px;}
  .cp-gal-it{width:100% !important;height:200px !important;grid-column:auto !important;grid-row:auto !important;}
  .cp-tour-row{display:flex;flex-direction:column;grid-template-columns:none;gap:14px;}
  .cp-tour-row > *{width:100%;min-width:0;}
  .cp-arrowbtn{display:none;}
  .cp-ftop{grid-template-columns:1fr 1fr;gap:28px;}
  .cp-ftop > div:nth-child(1){grid-column:1/-1;}
  .cp-ftop > div:nth-child(5){grid-column:1/2;}
  .cp-ftop > div:nth-child(6){grid-column:2/3;}
  .cp-cta{justify-content:center;text-align:center;}
  .cp-cta-feats{justify-content:center;}
}
@media(max-width:560px){
  .cp-bar-stats{gap:10px;}
  .cp-bar-stat span:not(.ic){display:none;}
  .cp-statscard{flex-direction:column;align-items:flex-start;}
  .cp-stat-it{width:100%;}
  .ch-content{padding:36px 16px 70px;}
  .cp-ftop{grid-template-columns:1fr;}
  .cp-ftop > div{grid-column:1/-1!important;}
}
/* ── BOOKING MODAL ── */
.cp-modal-bg{position:fixed;inset:0;background:rgba(44,26,6,.72);backdrop-filter:blur(18px);z-index:3000;display:flex;align-items:center;justify-content:center;padding:16px;animation:fadeIn .22s ease;}
.cp-modal{background:linear-gradient(145deg,#FAF6ED,#F3ECD8);border:1.5px solid rgba(193,156,60,.35);border-radius:22px;width:min(520px,96vw);max-height:92vh;overflow-y:auto;box-shadow:0 60px 140px rgba(44,26,6,.35);animation:slideD .28s ease;}
.cp-modal-head{padding:22px 26px 16px;border-bottom:1px solid rgba(193,156,60,.18);display:flex;justify-content:space-between;align-items:flex-start;}
.cp-modal-body{padding:22px 26px 26px;}
.cp-minp{background:rgba(201,168,76,.06);border:1.5px solid rgba(193,156,60,.25);border-radius:10px;padding:11px 13px;color:#2C1A06;font-size:13px;outline:none;width:100%;font-family:'Cormorant Garamond',serif;transition:border-color .2s,box-shadow .2s;}
.cp-minp:focus{border-color:rgba(160,120,40,.65);box-shadow:0 0 0 3px rgba(201,168,76,.1);}
.cp-mlabel{font-size:9px;color:#A07828;letter-spacing:.18em;text-transform:uppercase;display:block;margin-bottom:6px;font-weight:700;font-family:'Josefin Sans',sans-serif;}
.cp-mstep{width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;transition:all .25s;}
.cp-mstep.done{background:linear-gradient(135deg,#A07828,#C9A84C);color:#FAF6ED;}
.cp-mstep.pending{background:rgba(201,168,76,.12);border:1.4px solid rgba(193,156,60,.3);color:#A07828;}

/* ── RTL SUPPORT (Arabic) ── */
[dir="rtl"] .cp-bar{flex-direction:row-reverse;}
[dir="rtl"] .cp-bar-stats{flex-direction:row-reverse;}
[dir="rtl"] .cp-bar-right{flex-direction:row-reverse;}
[dir="rtl"] .cp-nav{flex-direction:row-reverse;}
[dir="rtl"] .cp-navlinks{flex-direction:row-reverse;}
[dir="rtl"] .cp-navright{flex-direction:row-reverse;}
[dir="rtl"] .cp-logo-wrap{flex-direction:row-reverse;}
[dir="rtl"] .cp-logo-name,[dir="rtl"] .cp-logo-sub{text-align:right;}
[dir="rtl"] .cp-crumb{flex-direction:row-reverse;}
[dir="rtl"] .ch-content{padding-left:clamp(14px,4vw,44px);padding-right:clamp(14px,4vw,44px);}
[dir="rtl"] .ch-overlay{background:linear-gradient(280deg,rgba(20,12,4,.86) 0%,rgba(20,12,4,.62) 32%,rgba(20,12,4,.22) 58%,rgba(20,12,4,.08) 100%),linear-gradient(to top,rgba(10,6,2,.35) 0%,transparent 35%);}
[dir="rtl"] .ch-title,[dir="rtl"] .ch-tagline,[dir="rtl"] .ch-desc{text-align:right;}
[dir="rtl"] .ch-btns{flex-direction:row-reverse;justify-content:flex-end;}
[dir="rtl"] .cp-statscard{flex-direction:row-reverse;}
[dir="rtl"] .cp-stat-it{flex-direction:row-reverse;}
[dir="rtl"] .cp-about-text p,[dir="rtl"] .cp-about-title{text-align:right;}
[dir="rtl"] .cp-why-item{flex-direction:row-reverse;}
[dir="rtl"] .cp-sec-head{flex-direction:row-reverse;}
[dir="rtl"] .cp-sec-link{flex-direction:row-reverse;}
[dir="rtl"] .cp-att-desc{flex-direction:row-reverse;}
[dir="rtl"] .cp-card-body{text-align:right;}
[dir="rtl"] .cp-card-badge{left:auto;right:10px;}
[dir="rtl"] .cp-card-foot{flex-direction:row-reverse;}
[dir="rtl"] .cp-cat-title{flex-direction:row-reverse;}
[dir="rtl"] .cp-cta{flex-direction:row-reverse;}
[dir="rtl"] .cp-cta-feat{flex-direction:row-reverse;}
[dir="rtl"] .cp-ftop{direction:rtl;}
[dir="rtl"] .cp-fcontact-row{flex-direction:row-reverse;}
[dir="rtl"] .cp-float-wa{right:auto;left:18px;}
[dir="rtl"] .cp-float-top{right:auto;left:18px;}
[dir="rtl"] .dropP{right:auto;left:0;}
[dir="rtl"] .cp-mmenu a,[dir="rtl"] .cp-mmenu button{text-align:right;}
[dir="rtl"] .cp-destdrop{left:auto;right:50%;transform:translateX(50%);}
[dir="rtl"] .cp-modal-head,[dir="rtl"] .cp-modal-body{direction:rtl;text-align:right;}
[dir="rtl"] .cp-minp{text-align:right;}
`}</style>
  );


// ─── TOP UTILITY BAR ─────────────────────────────────────────
function TopBar({uiLang, cur, langOpen, curOpen, setLangOpen, setCurOpen, onLangSelect, onCurSelect, currentLangObj}){
  return(
    <div className="cp-bar">
      <div className="cp-bar-stats">
        {BRAND_STATS.map(s=>(
          <span key={s.label} className="cp-bar-stat"><Ic.star s={11}/><b>{s.val}</b><span className="full">{s.label}</span></span>
        ))}
      </div>
      <div className="cp-bar-right">
        <div style={{position:"relative"}} className="lang-dd">
          <div className="cp-bar-sw" onClick={()=>{setLangOpen(!langOpen);setCurOpen(false);}}>
            <span>{currentLangObj.flag}</span><span className="full">{currentLangObj.label}</span><Ic.chevD/>
          </div>
          <LanguageDropdown visible={langOpen} onClose={()=>setLangOpen(false)} currentLang={uiLang} onSelect={onLangSelect}/>
        </div>
        <div style={{position:"relative"}} className="cur-dd">
          <div className="cp-bar-sw" onClick={()=>{setCurOpen(!curOpen);setLangOpen(false);}}>
            <span>{CURR[cur]?.s} {cur}</span><Ic.chevD/>
          </div>
          <CurrencyDropdown visible={curOpen} current={cur} onSelect={onCurSelect}/>
        </div>
        <span className="cp-bar-tel full"><Ic.phone s={12}/>+20 106 825 7754</span>
        <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="cp-bar-wa"><Ic.whatsapp s={12}/><span className="full">WhatsApp</span></a>
      </div>
    </div>
  );
}

// ─── MAIN NAV ───────────────────────────────────────────────
const NAV_ITEMS = [
  {label:"Home", to:"/"},
  {label:"Destinations", dest:true},
  {label:"Tours", to:"/tours"},
  {label:"Nile Cruises", to:"/tours?category=Boat%20tour"},
  {label:"Custom Trips", to:"/ai"},
  {label:"About Us", to:"/about"},
  {label:"Contact", to:"/contact"},
];

function MainNav({navigate, allCities, mMenu, setMMenu}){
  const [destOpen, setDestOpen] = useState(false);
  return(
    <nav className="cp-nav">
      <BrandMark size={42}/>

      <ul className="cp-navlinks">
        {NAV_ITEMS.map(item=>(
          item.dest ? (
            <li key={item.label} style={{position:"relative"}} onMouseEnter={()=>setDestOpen(true)} onMouseLeave={()=>setDestOpen(false)}>
              <span className="cp-navlink">{item.label} <Ic.chevD/></span>
              {destOpen && (
                <div className="cp-destdrop">
                  {allCities.map(c=>(
                    <Link key={c._id||c.slug} to={`/city/${c.slug}`} className="cp-destitem">{(CITY_META[c.slug]||DEFAULT_META).glyph} {c.name}</Link>
                  ))}
                </div>
              )}
            </li>
          ) : (
            <li key={item.label}><Link to={item.to} className="cp-navlink">{item.label}</Link></li>
          )
        ))}
      </ul>

      <div className="cp-navright">
        <Link to="/wishlist" className="cp-icbtn"><Ic.heart/></Link>
        <Link to="/account" className="cp-icbtn"><Ic.user/></Link>
        <Link to="/contact" className="cp-trip-btn">Plan My Trip</Link>
        <button className="cp-burger" onClick={()=>setMMenu(true)}><span/><span/><span/></button>
      </div>

      {mMenu && (
        <div className="cp-mmenu">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <BrandMark size={38}/>
            <button onClick={()=>setMMenu(false)} style={{background:"none",border:"none",fontSize:22,color:"#2C1A06",cursor:"pointer"}}>✕</button>
          </div>
          {NAV_ITEMS.map(item=> item.dest ? null : (
            <Link key={item.label} to={item.to} onClick={()=>setMMenu(false)}>{item.label}</Link>
          ))}
          <div style={{fontFamily:"'Josefin Sans',sans-serif",fontSize:10,letterSpacing:".2em",color:"#A07828",textTransform:"uppercase",margin:"18px 0 6px",fontWeight:700}}>Destinations</div>
          {allCities.map(c=>(
            <Link key={c._id||c.slug} to={`/city/${c.slug}`} onClick={()=>setMMenu(false)} style={{fontSize:15}}>{(CITY_META[c.slug]||DEFAULT_META).glyph} {c.name}</Link>
          ))}
          <Link to="/contact" onClick={()=>setMMenu(false)} className="cp-trip-btn" style={{textAlign:"center",marginTop:20}}>Plan My Trip</Link>
        </div>
      )}
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────
function Hero({meta, cityName, heroSrc, onHeroError, scrollToTours}){
  return(
    <section className="ch-wrap">
      <div className="ch-bg" style={{backgroundImage:`url(${heroSrc})`}}/>
      <img src={heroSrc} alt="" style={{display:"none"}} onError={onHeroError}/>
      <div className="ch-overlay"/>
      <div className="ch-content">
        <div style={{animation:"fadeUp .7s ease both"}}>
          <div className="ch-tagline">{meta.tagline}</div>
          <h1 className="ch-title">
            {meta.titleLines.map((line,i)=>(
              <span key={i} style={{display:"block"}} className={i===meta.titleLines.length-1?"accent":""}>{line}</span>
            ))}
          </h1>
          <p className="ch-desc">{meta.heroDesc}</p>
          <div className="ch-btns">
            <button className="ch-btn-gold" onClick={scrollToTours}>Explore Tours in {cityName}</button>
            <a href="#cp-gallery" className="ch-btn-ghost">Gallery</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FLOATING STATS CARD ──────────────────────────────────────
function StatsCard({meta, tourCount}){
  const items = [
    {ic:"briefcase", val:`${tourCount}+`, lbl:`Tours`},
    {ic:"star",       val:`${meta.stats.rating}`, lbl:"Traveler Rating", stars:true},
    {ic:"calendar",   val:meta.stats.bestTime, lbl:"Best Time to Visit"},
    {ic:"clock",      val:meta.stats.avgStay, lbl:"Average Stay"},
  ];
  return(
    <div className="cp-statswrap">
      <div className="cp-statscard">
        {items.map((it,i)=>(
          <div key={it.lbl} style={{display:"flex",alignItems:"center",gap:14,flex:1,minWidth:120}}>
            <div className="cp-stat-it">
              <div className="cp-stat-ic">Ic[it.ic] s={17}/</div>
              <div>
                <div className="cp-stat-val">{it.val}</div>
                <div className="cp-stat-lbl">{it.lbl}</div>
                {it.stars && <Stars score={meta.stats.rating} size={11}/>}
              </div>
            </div>
            {i<items.length-1 && <div className="cp-stat-div" style={{display:i<items.length-1?undefined:"none"}}/>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── ABOUT + VIDEO + WHY VISIT ─────────────────────────────────
function AboutSection({meta, cityName}){
  const [playing, setPlaying] = useState(false);
  const posterSrc = heroPath(meta.slug);
  const [poster, setPoster] = useState(posterSrc);

  return(
    <section className="cp-sec" id="cp-about">
      <div className="cp-sec-eyebrow">About {cityName}</div>
      <div className="cp-about-grid">
        <div className="cp-about-text">
          <h2 className="cp-about-title">{meta.about.heading}</h2>
          {meta.about.paragraphs.map((p,i)=><p key={i}>{p}</p>)}
          <button className="cp-about-btn" onClick={()=>document.getElementById("cp-about")?.scrollIntoView({behavior:"smooth"})}>Discover More About {cityName}</button>
        </div>

        <div className="cp-video" onClick={()=>setPlaying(true)}>
          {playing ? (
            <video src={videoPath(meta.slug)} poster={poster} controls autoPlay onError={e=>{e.target.poster=placeholder(`${cityName} Video`);}} />
          ) : (
            <>
              <img src={poster} alt={`Experience ${cityName}`} onError={()=>setPoster(placeholder(`Experience ${cityName}`))}/>
              <div className="cp-video-ov"/>
              <div className="cp-video-play"><Ic.play s={22}/></div>
              <div className="cp-video-cap"><b>Experience {cityName}</b><span>Watch the video</span></div>
              <div className="cp-video-dur">{meta.about.videoDuration}</div>
            </>
          )}
        </div>

        <div className="cp-why">
          <div className="cp-why-title">Why Visit {cityName}?</div>
          {meta.about.whyVisit.map(item=>(
            <div key={item} className="cp-why-item">
              <span className="cp-why-check"><Ic.check/></span>{item}
            </div>
          ))}
          <div className="cp-why-foot">{meta.about.whyVisitFooter}</div>
        </div>
      </div>
    </section>
  );
}

// (Removed: Top Attractions section, per request — no longer used anywhere on the page.)

// ─── GALLERY ────────────────────────────────────────────────
function GallerySection({meta, cityName}){
  return(
    <section className="cp-sec" id="cp-gallery" style={{paddingTop:8}}>
      <div className="cp-sec-eyebrow">Explore {cityName} Gallery</div>
      <div className="cp-sec-title" style={{marginBottom:22}}>Breathtaking Views of {cityName}</div>
      <div className="cp-gal-row">
        {[1,2,3,4,5,6].map(n=>{
          const src = galPath(meta.slug, n);
          return(
            <div key={n} className="cp-gal-it">
              <img src={src} alt={`${cityName} ${n}`} onError={e=>{e.target.src=placeholder(`${cityName} ${n}`);}}/>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── TOUR CARD ──────────────────────────────────────────────
function TourCard({tour, index, formatPrice, navigate}){
  const price = tour.price?.discounted ?? tour.price?.original ?? 0;
  const score = tour.rating?.score || 0;
  const reviews = tour.rating?.reviews || 0;
  const img = tour.image || tour.images?.[0] || placeholder((tour.title||"Tour").slice(0,16));
  const badge = badgeFor(tour, index);
  return(
    <div className="cp-card" onClick={()=>navigate(`/tour/${tour._id}`)}>
      <div className="cp-card-imgwrap">
        <img className="cp-card-img" src={img} alt={tour.title} onError={e=>{e.target.src=placeholder("Tour");}}/>
        <div className="cp-card-badge" style={{background:badge.bg}}>{badge.label}</div>
      </div>
      <div className="cp-card-body">
        <div className="cp-card-title">{tour.title}</div>
        <div className="cp-card-meta"><Ic.clock s={11}/>{tour.duration||"Full Day"}</div>
        {score>0 && <div className="cp-card-rating"><Stars score={score/2} size={10}/><span className="cp-card-score">{score.toFixed(1)}</span>({reviews.toLocaleString()})</div>}
        <div className="cp-card-foot">
          {tour.freeCancellation && <div className="cp-card-fc"><Ic.check s={11}/>Free Cancellation</div>}
          <div className="cp-card-from">From</div>
          <span className="cp-card-amt">{formatPrice(price)}</span><span className="cp-card-per"> / person</span>
          <button className="cp-card-btn" onClick={e=>{e.stopPropagation();navigate(`/booking/${tour._id}`);}}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

// ─── FEATURED TOURS — grouped by category, fully shown ────────
// ─── (no "View All" link — everything lives on this page) ─────
function TourCategoryRow({category, list, formatPrice, navigate}){
  const rowRef = useRef(null);
  const scroll = dir => rowRef.current?.scrollBy({left: dir*280, behavior:"smooth"});
  const cm = catMetaFor(category);
  return(
    <div style={{marginBottom:32}}>
      <div className="cp-sec-head" style={{marginBottom:16}}>
        <div className="cp-cat-title"><span className="cp-cat-ic">{cm.icon}</span>{cm.label}<span className="cp-cat-count">{list.length}</span></div>
        {list.length>3 && (
          <div className="cp-sec-link">
            <button className="cp-arrowbtn" onClick={()=>scroll(-1)}><Ic.chevL/></button>
            <button className="cp-arrowbtn" onClick={()=>scroll(1)}><Ic.chevR/></button>
          </div>
        )}
      </div>
      <div className="cp-tour-row" ref={rowRef}>
        {list.map((t,i)=><TourCard key={t._id} tour={t} index={i} formatPrice={formatPrice} navigate={navigate}/>)}
      </div>
    </div>
  );
}

function ToursSection({tours, cityName, formatPrice, navigate}){
  const groups = [];
  const seen = {};
  tours.forEach(t=>{
    const cat = t.category || "More Experiences";
    if(!seen[cat]){ seen[cat]=[]; groups.push([cat, seen[cat]]); }
    seen[cat].push(t);
  });
  groups.sort((a,b)=>b[1].length-a[1].length);

  return(
    <section className="cp-sec" id="cp-tours" style={{paddingTop:8}}>
      <div className="cp-sec-eyebrow">Featured Tours in {cityName}</div>
      <div className="cp-sec-title" style={{marginBottom:26}}>Handpicked Experiences Just for You</div>
      {groups.length===0 ? (
        <div style={{textAlign:"center",padding:"50px 0",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",color:"#9C7A3C"}}>New experiences in {cityName} are being added soon.</div>
      ) : (
        groups.map(([cat, list])=><TourCategoryRow key={cat} category={cat} list={list} formatPrice={formatPrice} navigate={navigate}/>)
      )}
    </section>
  );
}

// ─── CTA BANNER ─────────────────────────────────────────────
function CTABanner({cityName}){
  const feats = [
    {ic:"compass", b:"100% Customizable", s:"Your trip, your way"},
    {ic:"team",    b:"Expert Travel Planners", s:"24/7 Support"},
    {ic:"shield",  b:"Best Price Guarantee", s:"No hidden fees"},
  ];
  return(
    <div className="cp-cta">
      <div>
        <div className="cp-cta-title">Ready to Explore {cityName}?</div>
        <div className="cp-cta-sub">Let our travel experts craft your perfect journey.</div>
      </div>
      <div className="cp-cta-feats">
        {feats.map(f=>(
          <div key={f.b} className="cp-cta-feat">
            <div className="cp-cta-feat-ic">Ic[f.ic] s={18}/</div>
            <div><b>{f.b}</b><span>{f.s}</span></div>
          </div>
        ))}
      </div>
      <div className="cp-cta-btns">
        <Link to="/contact" className="cp-trip-btn">Plan My Trip</Link>
        <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="cp-cta-wa"><Ic.whatsapp s={14}/>Contact Us on WhatsApp</a>
      </div>
    </div>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────
function Footer({allCities, navigate}){
  const year = new Date().getFullYear();
  return(
    <footer className="cp-footer">
      <div className="cp-ftop">
        <div>
          <div style={{marginBottom:14}}><BrandMark size={44}/></div>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",color:"#7A5B22",fontSize:13,lineHeight:1.75,marginBottom:14,maxWidth:260}}>We craft luxury journeys across Egypt with passion, expertise and attention to every detail.</p>
          <div className="cp-fsocial">
            <a className="cp-fsoc-ic" href="#" aria-label="Facebook"><Ic.fb/></a>
            <a className="cp-fsoc-ic" href="#" aria-label="Instagram"><Ic.ig/></a>
            <a className="cp-fsoc-ic" href="#" aria-label="YouTube"><Ic.yt/></a>
            <a className="cp-fsoc-ic" href="#" aria-label="TikTok"><Ic.tiktok/></a>
          </div>
        </div>
        <div>
          <div className="cp-fhead">Destinations</div>
          {allCities.slice(0,6).map(c=><Link key={c._id||c.slug} to={`/city/${c.slug}`} className="cp-flink">{c.name}</Link>)}
          <Link to="/destinations" className="cp-flink" style={{color:"#A07828",fontWeight:700}}>All Destinations</Link>
        </div>
        <div>
          <div className="cp-fhead">Tours</div>
          {[["Day Tours","/tours?category=Day%20trip"],["Multi-Day Tours","/tours?category=Tour%20packages"],["Nile Cruises","/tours?category=Boat%20tour"],["Private Tours","/tours"],["Adventure Tours","/tours?category=Adventure%20and%20nature"],["All Tours","/tours"]].map(([l,h])=><Link key={l} to={h} className="cp-flink">{l}</Link>)}
        </div>
        <div>
          <div className="cp-fhead">Company</div>
          {[["About Us","/about"],["Our Guides","/guides"],["Reviews","/reviews"],["Blog","/blog"],["Travel Tips","/blog"],["Contact Us","/contact"]].map(([l,h])=><Link key={l} to={h} className="cp-flink">{l}</Link>)}
        </div>
        <div>
          <div className="cp-fhead">Support</div>
          {[["FAQ","/faq"],["Cancellation Policy","/policies/cancellation"],["Privacy Policy","/policies/privacy"],["Terms & Conditions","/policies/terms"]].map(([l,h])=><Link key={l} to={h} className="cp-flink">{l}</Link>)}
        </div>
        <div>
          <div className="cp-fhead">Contact Us</div>
          <a href="tel:+201068257754" className="cp-fcontact-row"><Ic.phone s={13}/>+20 106 825 7754</a>
          <a href="mailto:aureviantours@gmail.com" className="cp-fcontact-row"><Ic.mail s={13}/>aureviantours@gmail.com</a>
          <div className="cp-fcontact-row"><Ic.pin s={13}/>Cairo, Egypt</div>
          <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="cp-fwa-btn"><Ic.whatsapp s={13}/>WhatsApp Us</a>
        </div>
      </div>
      <div className="cp-fbottom">
        <span>© {year} Aurevian Tours. All Rights Reserved.</span>
        <div className="cp-pay">
          {["VISA","Mastercard","PayPal","Apple Pay"].map(p=><span key={p} style={{fontSize:10,letterSpacing:".05em",border:"1px solid rgba(193,156,60,.3)",borderRadius:5,padding:"3px 8px",color:"rgba(107,78,26,.6)"}}>{p}</span>)}
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
  const [mMenu,setMMenu] = useState(false);
  const [langOpen,setLangOpen] = useState(false);
  const [curOpen,setCurOpen] = useState(false);
  const [uiLang,setUiLang] = useState(globalLang||"en");
  const [cur,setCur] = useState(globalCur||"USD");
  const [heroSrc,setHeroSrc] = useState("");

  const meta = getMeta(cityId);
  const fmtP = p => formatPrice ? formatPrice(p) : fmt(p,cur);

  // ── shared language switcher logic — drives Google Translate, ──
  // ── never substitutes manually-written strings ──────────────────
  const triggerGoogleTranslate = useCallback((code, attempt=0) => {
    const selectEl = document.querySelector(".goog-te-combo");
    if(selectEl){
      selectEl.value = code;
      selectEl.dispatchEvent(new Event("change"));
      return;
    }
    // Widget script may still be loading on the very first click —
    // retry briefly instead of silently failing.
    if(attempt < 15){
      setTimeout(() => triggerGoogleTranslate(code, attempt+1), 200);
    }
  }, []);

  const handleLangSelect = useCallback((code,dir)=>{
    setUiLang(code);
    if(setGlobalLang) setGlobalLang(code);
    document.documentElement.setAttribute("lang",code);
    document.documentElement.setAttribute("dir",dir||"ltr");
    if(window.i18n && window.i18n.changeLanguage) window.i18n.changeLanguage(code);
    triggerGoogleTranslate(code);
  },[setGlobalLang, triggerGoogleTranslate]);

  const setCurrencyVal = (code)=>{ setCur(code); setCurOpen(false); if(setGlobalCur) setGlobalCur(code); };

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
    setLoading(true); window.scrollTo({top:0});
    setHeroSrc(heroPath(cityId));
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
    const fn=(e)=>{
      if(!e.target.closest(".lang-dd")) setLangOpen(false);
      if(!e.target.closest(".cur-dd")) setCurOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  useEffect(()=>{ document.body.style.overflow = mMenu ? "hidden" : ""; },[mMenu]);

  const cityName = city?.name || (cityId||"").split("-").map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(" ");
  const currentLangObj = LANGS.find(l=>l.code===uiLang) || LANGS[0];
  const tourCount = tours.length>0 ? tours.length : meta.stats.fallbackTours;

  const scrollToTours = ()=> document.getElementById("cp-tours")?.scrollIntoView({behavior:"smooth"});

  if (loading) return (
    <div className="cp-loader">
      <Styles color={meta.color}/>
      <div className="cp-loader-glyph">{meta.glyph}</div>
      <div className="cp-loader-txt">Loading…</div>
    </div>
  );

  return (
    <div style={{position:"relative",minHeight:"100vh",background:"var(--bg)",fontFamily:"'Josefin Sans',sans-serif"}}>
      <Styles color={meta.color}/>
      <div id="gt-hidden" style={{display:"none"}}/>

      <TopBar
        uiLang={uiLang} cur={cur} langOpen={langOpen} curOpen={curOpen}
        setLangOpen={setLangOpen} setCurOpen={setCurOpen}
        onLangSelect={handleLangSelect} onCurSelect={setCurrencyVal}
        currentLangObj={currentLangObj}
      />
      <MainNav navigate={navigate} allCities={allCities} mMenu={mMenu} setMMenu={setMMenu}/>

      <div className="cp-crumb">
        <Link to="/">Home</Link><span style={{opacity:.4}}>›</span>
        <Link to="/destinations">Destinations</Link><span style={{opacity:.4}}>›</span>
        <span className="cur">{cityName}</span>
      </div>

      <Hero meta={meta} cityName={cityName} heroSrc={heroSrc}
        onHeroError={()=>setHeroSrc(placeholder(`${cityName}`,"3A2A12","E8C96D"))}
        scrollToTours={scrollToTours}/>

      <StatsCard meta={meta} tourCount={tourCount}/>

      <AboutSection meta={meta} cityName={cityName}/>
      <GallerySection meta={meta} cityName={cityName}/>
      <ToursSection tours={tours} cityName={cityName} formatPrice={fmtP} navigate={navigate}/>

      <CTABanner cityName={cityName}/>
      <Footer allCities={allCities} navigate={navigate}/>

      <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="cp-float-wa"><Ic.whatsapp s={16}/> <span>WhatsApp</span></a>
      <button className="cp-float-top" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>▲</button>
    </div>
  );
}