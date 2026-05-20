// ============================================================
//  CityPage.jsx — Golden Egypt Tours  ✦  REDESIGNED
//  Route: /city/:cityId
// ============================================================

import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getToursByCity, getCityBySlug, getAllCities } from "../api/index";

// ─────────────────────────────────────────────────────────────
//  I18N — Labels
// ─────────────────────────────────────────────────────────────
const I18N = {
  en: {
    dir: "ltr", back: "Back", allTours: "All Tours", whatsapp: "WhatsApp",
    from: "From", perPerson: "/ person", bookNow: "Book Now", viewDetails: "View Details",
    filterAll: "All", sortPopular: "Most Popular", sortRating: "Top Rated",
    sortLow: "Price ↑", sortHigh: "Price ↓",
    experiences: "experiences", mustSee: "Must-See Highlights",
    noTours: "No experiences in this category yet.",
    moreEgypt: "Discover More of Egypt",
    contactUs: "Contact Us", contactSub: "Our Egypt specialists are ready 24/7",
    yourName: "Your Name", yourEmail: "Email Address", yourPhone: "WhatsApp / Phone",
    travelDate: "Travel Date", guests: "No. of Guests", message: "Your Message",
    sendRequest: "Send Request", orWhatsapp: "or chat on WhatsApp",
    footerTagline: "Crafting legendary Egypt journeys since 2024.",
    quickLinks: "Quick Links", destinations: "Destinations", legal: "Legal",
    privacy: "Privacy Policy", terms: "Terms & Conditions",
    rights: "All rights reserved.",
    freeCancellation: "Free Cancellation", instantConfirm: "Instant Confirmation",
    loading: "Loading…", reviews: "reviews", rating: "Rating",
    duration: "Duration", availability: "Available daily",
    scrollDown: "Scroll to explore",
    cats: {
      all: "All",
      "Guided tours and free tours": "Guided Tours",
      "Day trip": "Day Trips",
      "Tour packages": "Packages",
      "Aerial tours": "Aerial",
      "Boat tour": "Boat Tours",
      "Adventure and nature": "Adventure",
      Transfers: "Transfers",
      Performances: "Shows",
    },
  },
  ar: {
    dir: "rtl", back: "رجوع", allTours: "كل الجولات", whatsapp: "واتساب",
    from: "من", perPerson: "/ شخص", bookNow: "احجز الآن", viewDetails: "عرض التفاصيل",
    filterAll: "الكل", sortPopular: "الأكثر شعبية", sortRating: "الأعلى تقييماً",
    sortLow: "السعر ↑", sortHigh: "السعر ↓",
    experiences: "تجربة", mustSee: "أبرز المعالم",
    noTours: "لا توجد تجارب في هذه الفئة حتى الآن.",
    moreEgypt: "اكتشف المزيد من مصر",
    contactUs: "تواصل معنا", contactSub: "متخصصو مصر لدينا متاحون على مدار الساعة",
    yourName: "الاسم", yourEmail: "البريد الإلكتروني", yourPhone: "واتساب / هاتف",
    travelDate: "تاريخ السفر", guests: "عدد الأشخاص", message: "رسالتك",
    sendRequest: "إرسال الطلب", orWhatsapp: "أو تحدث عبر واتساب",
    footerTagline: "نصنع رحلات مصرية أسطورية منذ 2024.",
    quickLinks: "روابط سريعة", destinations: "الوجهات", legal: "قانوني",
    privacy: "سياسة الخصوصية", terms: "الشروط والأحكام",
    rights: "جميع الحقوق محفوظة.",
    freeCancellation: "إلغاء مجاني", instantConfirm: "تأكيد فوري",
    loading: "جاري التحميل…", reviews: "تقييم", rating: "التقييم",
    duration: "المدة", availability: "متاح يومياً",
    scrollDown: "مرر للاستكشاف",
    cats: {
      all: "الكل",
      "Guided tours and free tours": "جولات مرشدة",
      "Day trip": "رحلات يومية",
      "Tour packages": "باقات",
      "Aerial tours": "جولات جوية",
      "Boat tour": "جولات بحرية",
      "Adventure and nature": "مغامرة",
      Transfers: "نقل",
      Performances: "عروض",
    },
  },
  fr: {
    dir: "ltr", back: "Retour", allTours: "Tous les tours", whatsapp: "WhatsApp",
    from: "À partir de", perPerson: "/ pers.", bookNow: "Réserver", viewDetails: "Voir les détails",
    filterAll: "Tous", sortPopular: "Plus populaires", sortRating: "Mieux notés",
    sortLow: "Prix ↑", sortHigh: "Prix ↓",
    experiences: "expériences", mustSee: "À ne pas manquer",
    noTours: "Aucune expérience dans cette catégorie.",
    moreEgypt: "Découvrir plus d'Égypte",
    contactUs: "Contactez-nous", contactSub: "Nos spécialistes Égypte sont disponibles 24h/24",
    yourName: "Votre nom", yourEmail: "Adresse e-mail", yourPhone: "WhatsApp / Téléphone",
    travelDate: "Date de voyage", guests: "Nombre de personnes", message: "Votre message",
    sendRequest: "Envoyer", orWhatsapp: "ou discuter sur WhatsApp",
    footerTagline: "Des voyages légendaires en Égypte depuis 2024.",
    quickLinks: "Liens rapides", destinations: "Destinations", legal: "Mentions légales",
    privacy: "Politique de confidentialité", terms: "Conditions générales",
    rights: "Tous droits réservés.",
    freeCancellation: "Annulation gratuite", instantConfirm: "Confirmation immédiate",
    loading: "Chargement…", reviews: "avis", rating: "Note",
    duration: "Durée", availability: "Disponible tous les jours",
    scrollDown: "Défiler pour explorer",
    cats: {
      all: "Tous",
      "Guided tours and free tours": "Visites guidées",
      "Day trip": "Excursions",
      "Tour packages": "Forfaits",
      "Aerial tours": "Aérien",
      "Boat tour": "Croisières",
      "Adventure and nature": "Aventure",
      Transfers: "Transferts",
      Performances: "Spectacles",
    },
  },
  de: {
    dir: "ltr", back: "Zurück", allTours: "Alle Touren", whatsapp: "WhatsApp",
    from: "Ab", perPerson: "/ Person", bookNow: "Buchen", viewDetails: "Details",
    filterAll: "Alle", sortPopular: "Beliebteste", sortRating: "Bestbewertet",
    sortLow: "Preis ↑", sortHigh: "Preis ↓",
    experiences: "Erlebnisse", mustSee: "Must-See Highlights",
    noTours: "Keine Erlebnisse in dieser Kategorie.",
    moreEgypt: "Mehr von Ägypten entdecken",
    contactUs: "Kontakt", contactSub: "Unsere Ägypten-Spezialisten helfen 24/7",
    yourName: "Ihr Name", yourEmail: "E-Mail-Adresse", yourPhone: "WhatsApp / Telefon",
    travelDate: "Reisedatum", guests: "Anzahl Gäste", message: "Ihre Nachricht",
    sendRequest: "Anfrage senden", orWhatsapp: "oder per WhatsApp",
    footerTagline: "Legendäre Ägypten-Reisen seit 2024.",
    quickLinks: "Schnelllinks", destinations: "Reiseziele", legal: "Rechtliches",
    privacy: "Datenschutz", terms: "AGB",
    rights: "Alle Rechte vorbehalten.",
    freeCancellation: "Kostenlose Stornierung", instantConfirm: "Sofortbestätigung",
    loading: "Laden…", reviews: "Bewertungen", rating: "Bewertung",
    duration: "Dauer", availability: "Täglich verfügbar",
    scrollDown: "Scrollen zum Erkunden",
    cats: {
      all: "Alle",
      "Guided tours and free tours": "Geführte Touren",
      "Day trip": "Tagesausflüge",
      "Tour packages": "Pakete",
      "Aerial tours": "Lufttouren",
      "Boat tour": "Bootstouren",
      "Adventure and nature": "Abenteuer",
      Transfers: "Transfers",
      Performances: "Shows",
    },
  },
  es: {
    dir: "ltr", back: "Volver", allTours: "Todos los tours", whatsapp: "WhatsApp",
    from: "Desde", perPerson: "/ persona", bookNow: "Reservar", viewDetails: "Ver detalles",
    filterAll: "Todos", sortPopular: "Más populares", sortRating: "Mejor valorados",
    sortLow: "Precio ↑", sortHigh: "Precio ↓",
    experiences: "experiencias", mustSee: "Lo imprescindible",
    noTours: "No hay experiencias en esta categoría.",
    moreEgypt: "Descubre más de Egipto",
    contactUs: "Contáctanos", contactSub: "Nuestros especialistas en Egipto están disponibles 24/7",
    yourName: "Tu nombre", yourEmail: "Correo electrónico", yourPhone: "WhatsApp / Teléfono",
    travelDate: "Fecha de viaje", guests: "N.º de personas", message: "Tu mensaje",
    sendRequest: "Enviar solicitud", orWhatsapp: "o chatea por WhatsApp",
    footerTagline: "Viajes legendarios por Egipto desde 2024.",
    quickLinks: "Enlaces rápidos", destinations: "Destinos", legal: "Legal",
    privacy: "Política de privacidad", terms: "Términos y condiciones",
    rights: "Todos los derechos reservados.",
    freeCancellation: "Cancelación gratuita", instantConfirm: "Confirmación inmediata",
    loading: "Cargando…", reviews: "reseñas", rating: "Valoración",
    duration: "Duración", availability: "Disponible a diario",
    scrollDown: "Desplázate para explorar",
    cats: {
      all: "Todos",
      "Guided tours and free tours": "Tours guiados",
      "Day trip": "Excursiones",
      "Tour packages": "Paquetes",
      "Aerial tours": "Aéreos",
      "Boat tour": "Tours en barco",
      "Adventure and nature": "Aventura",
      Transfers: "Traslados",
      Performances: "Espectáculos",
    },
  },
  it: {
    dir: "ltr", back: "Indietro", allTours: "Tutti i tour", whatsapp: "WhatsApp",
    from: "Da", perPerson: "/ persona", bookNow: "Prenota", viewDetails: "Dettagli",
    filterAll: "Tutti", sortPopular: "Più popolari", sortRating: "Meglio valutati",
    sortLow: "Prezzo ↑", sortHigh: "Prezzo ↓",
    experiences: "esperienze", mustSee: "Da non perdere",
    noTours: "Nessuna esperienza in questa categoria.",
    moreEgypt: "Scopri ancora l'Egitto",
    contactUs: "Contattaci", contactSub: "I nostri specialisti Egitto sono disponibili 24/7",
    yourName: "Il tuo nome", yourEmail: "Email", yourPhone: "WhatsApp / Telefono",
    travelDate: "Data di viaggio", guests: "N. di persone", message: "Il tuo messaggio",
    sendRequest: "Invia richiesta", orWhatsapp: "o chatta su WhatsApp",
    footerTagline: "Viaggi leggendari in Egitto dal 2024.",
    quickLinks: "Link rapidi", destinations: "Destinazioni", legal: "Note legali",
    privacy: "Privacy", terms: "Termini e condizioni",
    rights: "Tutti i diritti riservati.",
    freeCancellation: "Cancellazione gratuita", instantConfirm: "Conferma immediata",
    loading: "Caricamento…", reviews: "recensioni", rating: "Valutazione",
    duration: "Durata", availability: "Disponibile ogni giorno",
    scrollDown: "Scorri per esplorare",
    cats: {
      all: "Tutti",
      "Guided tours and free tours": "Tour guidati",
      "Day trip": "Escursioni",
      "Tour packages": "Pacchetti",
      "Aerial tours": "Aereo",
      "Boat tour": "Tour in barca",
      "Adventure and nature": "Avventura",
      Transfers: "Trasferimenti",
      Performances: "Spettacoli",
    },
  },
};

// ─────────────────────────────────────────────────────────────
//  CURRENCIES
// ─────────────────────────────────────────────────────────────
const CURRENCIES = {
  USD: { symbol: "$",  rate: 1,     label: "US Dollar" },
  EUR: { symbol: "€",  rate: 0.92,  label: "Euro" },
  GBP: { symbol: "£",  rate: 0.79,  label: "British Pound" },
  EGP: { symbol: "E£", rate: 49.5,  label: "Egyptian Pound" },
  SAR: { symbol: "﷼",  rate: 3.75,  label: "Saudi Riyal" },
  AED: { symbol: "د.إ",rate: 3.67,  label: "UAE Dirham" },
};

const LANGUAGES = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "ar", flag: "🇪🇬", label: "عر" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
  { code: "de", flag: "🇩🇪", label: "DE" },
  { code: "es", flag: "🇪🇸", label: "ES" },
  { code: "it", flag: "🇮🇹", label: "IT" },
];

// ─────────────────────────────────────────────────────────────
//  CITY META
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
    country: "Egypt", continent: "Africa & Middle East",
  },
  luxor: {
    heroImages: [
      "https://images.unsplash.com/photo-1601921004897-b7d582836990?w=1800&q=90",
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1800&q=90",
    ],
    color: "#E8C96D", glyph: "𓏏",
    glyphs: ["𓏏","𓈖","𓃀","𓇯","𓆣","𓋴","𓊃","𓌀"],
    tagline: "The World's Greatest Open-Air Museum",
    desc: "Once the royal capital Thebes — 3,500 years of concentrated wonder. Valley of the Kings, Karnak's colossal columns, and golden hot-air balloons at sunrise.",
    highlights: ["Valley of the Kings","Karnak Temple","Hot Air Balloon","Hatshepsut Temple","Luxor Temple","Felucca Sunset"],
    country: "Egypt", continent: "Africa & Middle East",
  },
  aswan: {
    heroImages: [
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1800&q=90",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1800&q=90",
    ],
    color: "#F0A500", glyph: "𓆣",
    glyphs: ["𓆣","𓈖","𓌀","𓍯","𓎛","𓋴","𓊃","𓂀"],
    tagline: "Nubia's Jewel on the Sacred Nile",
    desc: "Egypt's southernmost treasure — cobalt Nubian villages, silent feluccas, and the magnificent Abu Simbel temples.",
    highlights: ["Abu Simbel","Philae Temple","Nubian Village","Felucca Sailing","Elephantine Island","Lake Nasser Sunset"],
    country: "Egypt", continent: "Africa & Middle East",
  },
  alexandria: {
    heroImages: [
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1800&q=90",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1800&q=90",
    ],
    color: "#6BAADF", glyph: "𓇯",
    glyphs: ["𓇯","𓈖","𓉐","𓊃","𓋴","𓌀","𓍯","𓎛"],
    tagline: "Pearl of the Mediterranean",
    desc: "Alexander's legendary city — where Greek philosophy, Egyptian mystique and Roman grandeur fused into something unforgettable.",
    highlights: ["Bibliotheca Alexandrina","Catacombs","Qaitbay Citadel","Montaza Palace","Roman Amphitheatre","Stanley Beach"],
    country: "Egypt", continent: "Mediterranean",
  },
  hurghada: {
    heroImages: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1800&q=90",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1800&q=90",
    ],
    color: "#00C4D4", glyph: "𓋴",
    glyphs: ["𓋴","𓈖","𓌀","𓍯","𓎛","𓏏","𓐍","𓀭"],
    tagline: "Red Sea Paradise",
    desc: "Crystal-clear waters, technicolour coral reefs and year-round sunshine — world-class diving and resort luxury.",
    highlights: ["Coral Reef Snorkeling","Island Hopping","Desert Quad Safari","Submarine Tour","Parasailing","Scuba Diving"],
    country: "Egypt", continent: "Red Sea",
  },
  "sharm-el-sheikh": {
    heroImages: [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1800&q=90",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1800&q=90",
    ],
    color: "#FF7B6B", glyph: "𓊃",
    glyphs: ["𓊃","𓋴","𓌀","𓍯","𓎛","𓏏","𓐍","𓀭"],
    tagline: "The City of Peace & Adventure",
    desc: "Where the Sinai mountains collide with the Red Sea — world-class diving, mystic Mount Sinai sunrise.",
    highlights: ["Ras Mohammed National Park","Mount Sinai Sunrise","Naama Bay","Tiran Island Diving","Shark Bay","Desert Safari"],
    country: "Egypt", continent: "Sinai",
  },
  "marsa-alam": {
    heroImages: [
      "https://images.unsplash.com/photo-1560275619-4cc5a455b0a6?w=1800&q=90",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1800&q=90",
    ],
    color: "#0096C7", glyph: "𓌀",
    glyphs: ["𓌀","𓍯","𓎛","𓏏","𓐍","𓀭","𓁅","𓂸"],
    tagline: "Untouched Red Sea Wilderness",
    desc: "Wild spinner dolphins, dugongs, virgin coral reefs and a sky so full of stars it looks painted.",
    highlights: ["Wild Dolphin Swimming","Dugong Snorkeling","Elphinstone Reef","Desert Stargazing","Wadi el Gemal","Sea Turtles"],
    country: "Egypt", continent: "Red Sea",
  },
};

const DEFAULT_META = {
  heroImages: ["https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1800&q=90"],
  color: "#C9A84C", glyph: "𓂀",
  glyphs: ["𓂀","𓃭","𓆑","𓇋","𓅓","𓂋","𓏏","𓈖"],
  tagline: "Discover Egypt", desc: "Explore the wonders of this ancient land.",
  highlights: ["Ancient Temples","Nile River","Desert Safari","Local Culture"],
  country: "Egypt", continent: "Africa",
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

const CAT_ICONS = {
  all: "✦",
  "Guided tours and free tours": "🏛️",
  "Day trip": "🗺️",
  "Tour packages": "📦",
  "Aerial tours": "🎈",
  "Boat tour": "⛴",
  "Adventure and nature": "⚡",
  Transfers: "🚗",
  Performances: "🎭",
};

// ─────────────────────────────────────────────────────────────
//  GLOBAL STYLES
// ─────────────────────────────────────────────────────────────
const Styles = ({ color = "#C9A84C" }) => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap');

    :root {
      --gold: ${color};
      --gold-rgb: 201,168,76;
      --gold-light: color-mix(in srgb, ${color} 70%, #fff);
      --gold-dim: rgba(201,168,76,0.10);
      --gold-dim2: rgba(201,168,76,0.20);
      --gold-border: rgba(201,168,76,0.22);
      --obsidian: #06040C;
      --deep: #0A0812;
      --surface: #0E0C1A;
      --surface2: #141222;
      --surface3: #1A1830;
      --text: #F0EBE0;
      --text-dim: rgba(240,235,224,0.72);
      --muted: #6E6860;
      --fd: 'Cinzel Decorative', serif;
      --ft: 'Cinzel', serif;
      --fb: 'Cormorant Garamond', Georgia, serif;
      --fi: 'Inter', sans-serif;
    }

    *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
    html { scroll-behavior: smooth; font-size: 16px; }
    body { background: var(--obsidian); color: var(--text); font-family: var(--fi); overflow-x: hidden; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--obsidian); }
    ::-webkit-scrollbar-thumb { background: var(--gold-border); border-radius: 2px; }

    /* ── HIEROGLYPHIC BACKGROUND ── */
    .cp-bg-glyphs {
      position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden;
    }
    .cp-bg-glyph {
      position: absolute; font-size: 20px; color: var(--gold); opacity: 0.03;
      animation: cpGlyphFloat 8s ease-in-out infinite;
      user-select: none;
    }
    @keyframes cpGlyphFloat {
      0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.03; }
      50% { transform: translateY(-18px) rotate(4deg); opacity: 0.065; }
    }

    /* ── NAV ── */
    .cp-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 990;
      height: 66px; display: flex; align-items: center; gap: 12px;
      padding: 0 44px;
      background: rgba(6,4,12,0.96); backdrop-filter: blur(24px) saturate(1.4);
      border-bottom: 1px solid var(--gold-border);
    }
    .cp-nav::after {
      content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg, transparent 0%, var(--gold) 30%, var(--gold-light) 50%, var(--gold) 70%, transparent 100%);
      opacity: 0.4;
    }
    .cp-nav-back {
      display: flex; align-items: center; gap: 6px; padding: 7px 14px;
      background: var(--gold-dim); border: 1px solid var(--gold-border); border-radius: 6px;
      color: var(--gold); font-family: var(--ft); font-size: 8.5px; letter-spacing: 2px;
      text-transform: uppercase; cursor: pointer; text-decoration: none; transition: all .2s;
      white-space: nowrap; flex-shrink: 0;
    }
    .cp-nav-back:hover { background: var(--gold-dim2); }
    .cp-nav-logo {
      font-family: var(--fd); font-size: 12px; color: var(--gold); letter-spacing: 2px;
      font-weight: 700; text-decoration: none; white-space: nowrap;
    }
    .cp-nav-logo em { font-style: normal; color: rgba(240,235,224,0.5); font-size: 9px; letter-spacing: 3px; margin-left: 8px; font-family: var(--ft); }
    .cp-nav-center { flex: 1; display: flex; justify-content: center; }
    .cp-nav-r { display: flex; align-items: center; gap: 8px; }

    /* Language / Currency Switchers */
    .cp-switcher {
      position: relative; display: flex; align-items: center;
    }
    .cp-sw-btn {
      display: flex; align-items: center; gap: 5px; padding: 7px 12px;
      background: var(--surface2); border: 1px solid var(--gold-border); border-radius: 6px;
      color: var(--text-dim); font-family: var(--fi); font-size: 12px; font-weight: 500;
      cursor: pointer; transition: all .2s; white-space: nowrap;
    }
    .cp-sw-btn:hover { border-color: var(--gold); color: var(--text); }
    .cp-sw-btn .arrow { font-size: 8px; margin-left: 2px; opacity: 0.6; transition: transform .2s; }
    .cp-sw-btn.open .arrow { transform: rotate(180deg); }
    .cp-sw-drop {
      position: absolute; top: calc(100% + 6px); right: 0; z-index: 200; min-width: 140px;
      background: var(--surface2); border: 1px solid var(--gold-border); border-radius: 10px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.7); overflow: hidden;
      animation: cpDropIn .18s ease;
    }
    @keyframes cpDropIn { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:none; } }
    .cp-sw-opt {
      display: flex; align-items: center; gap: 10px; padding: 10px 14px;
      font-family: var(--fi); font-size: 12px; color: var(--text-dim);
      cursor: pointer; transition: background .15s; border-bottom: 1px solid rgba(255,255,255,0.04);
    }
    .cp-sw-opt:last-child { border-bottom: none; }
    .cp-sw-opt:hover, .cp-sw-opt.active { background: var(--gold-dim); color: var(--gold); }
    .cp-nav-wa {
      display: flex; align-items: center; gap: 6px; padding: 8px 14px;
      background: #25D366; color: #fff; border: none; border-radius: 6px;
      font-family: var(--fi); font-size: 12px; font-weight: 600; cursor: pointer;
      text-decoration: none; transition: opacity .2s; white-space: nowrap;
    }
    .cp-nav-wa:hover { opacity: 0.88; }
    .cp-nav-tours {
      display: flex; align-items: center; gap: 6px; padding: 8px 18px;
      background: linear-gradient(135deg, var(--gold), var(--gold-light));
      color: #080600; border: none; border-radius: 6px;
      font-family: var(--ft); font-size: 8.5px; letter-spacing: 2px; font-weight: 700;
      text-transform: uppercase; cursor: pointer; text-decoration: none; transition: all .2s;
    }
    .cp-nav-tours:hover { box-shadow: 0 4px 20px rgba(var(--gold-rgb),0.35); }

    /* ── STICKY MINI BAR ── */
    .cp-sticky {
      position: fixed; top: 66px; left: 0; right: 0; z-index: 980; height: 50px;
      display: flex; align-items: center; gap: 16px; padding: 0 44px;
      background: rgba(6,4,12,0.97); backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--gold-border);
      transform: translateY(-100%); transition: transform .28s ease; pointer-events: none;
    }
    .cp-sticky.visible { transform: translateY(0); pointer-events: all; }
    .cp-sticky-name { font-family: var(--ft); font-size: 11px; color: var(--text); flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .cp-sticky-price { font-family: var(--fd); font-size: 17px; color: var(--gold); font-weight: 700; white-space: nowrap; }
    .cp-sticky-cta {
      background: linear-gradient(135deg, var(--gold), var(--gold-light)); color: #080600;
      border: none; border-radius: 6px; padding: 8px 18px;
      font-family: var(--ft); font-size: 8.5px; letter-spacing: 2px; font-weight: 700;
      text-transform: uppercase; cursor: pointer;
    }

    /* ── HERO ── */
    .cp-hero {
      position: relative; height: 100vh; min-height: 620px; max-height: 940px;
      margin-top: 66px; overflow: hidden; display: flex; align-items: flex-end;
    }
    .cp-hero-slide {
      position: absolute; inset: -6%; background-size: cover; background-position: center;
      transition: opacity 1.4s ease;
      animation: cpKenBurns 18s ease-in-out infinite alternate;
    }
    @keyframes cpKenBurns {
      0% { transform: scale(1) translateY(0); filter: brightness(0.75) saturate(1.1); }
      100% { transform: scale(1.08) translateY(-20px); filter: brightness(0.88) saturate(1.2); }
    }
    .cp-hero-overlay {
      position: absolute; inset: 0; z-index: 2;
      background:
        linear-gradient(to top, rgba(6,4,12,1) 0%, rgba(6,4,12,.72) 30%, rgba(6,4,12,.18) 65%, transparent 100%),
        linear-gradient(to right, rgba(6,4,12,.8) 0%, rgba(6,4,12,.25) 52%, transparent 80%);
    }
    .cp-hero-color-glow {
      position: absolute; inset: 0; z-index: 3; pointer-events: none;
      background: radial-gradient(ellipse at 0% 90%, rgba(var(--gold-rgb),0.12), transparent 60%);
    }
    .cp-hero-grid {
      position: absolute; inset: 0; z-index: 3; pointer-events: none;
      background:
        repeating-linear-gradient(90deg, transparent, transparent 119px, rgba(var(--gold-rgb),0.025) 119px, rgba(var(--gold-rgb),0.025) 120px),
        repeating-linear-gradient(0deg,   transparent, transparent 119px, rgba(var(--gold-rgb),0.025) 119px, rgba(var(--gold-rgb),0.025) 120px);
    }
    /* Marquee band */
    .cp-hero-band {
      position: absolute; top: 32%; left: 0; right: 0; z-index: 4; pointer-events: none;
      height: 42px; overflow: hidden;
      border-top: 1px solid rgba(var(--gold-rgb),0.14);
      border-bottom: 1px solid rgba(var(--gold-rgb),0.14);
      background: rgba(6,4,12,0.22); display: flex; align-items: center;
    }
    .cp-hero-band-txt {
      font-family: var(--ft); font-size: 9.5px; letter-spacing: 7px;
      color: rgba(var(--gold-rgb),0.35); white-space: nowrap; text-transform: uppercase;
      animation: cpMarquee 38s linear infinite;
    }
    @keyframes cpMarquee { 0%{transform:translateX(50vw)} 100%{transform:translateX(-100%)} }

    /* Breadcrumb trail (top left inside hero) */
    .cp-hero-trail {
      position: absolute; top: 22px; left: 44px; z-index: 6;
      display: flex; align-items: center; gap: 8px;
      font-family: var(--fi); font-size: 11px; color: rgba(240,235,224,0.5);
    }
    .cp-hero-trail a { color: inherit; text-decoration: none; }
    .cp-hero-trail a:hover { color: var(--gold); }
    .cp-hero-trail .sep { opacity: 0.4; }
    .cp-hero-trail .cur { color: var(--gold); }

    /* Thumbnail dots */
    .cp-hero-thumbs {
      position: absolute; bottom: 200px; right: 32px; z-index: 6;
      display: flex; flex-direction: column; gap: 8px;
    }
    .cp-hero-thumb {
      width: 60px; height: 44px; border-radius: 6px; overflow: hidden;
      border: 2px solid transparent; opacity: 0.5; cursor: pointer;
      transition: all .25s;
    }
    .cp-hero-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .cp-hero-thumb:hover, .cp-hero-thumb.active { opacity: 1; border-color: var(--gold); box-shadow: 0 0 20px rgba(var(--gold-rgb),0.4); }

    /* Hero content */
    .cp-hero-content {
      position: relative; z-index: 5; padding: 0 44px 56px; width: 100%; max-width: 860px;
      animation: cpFadeUp .9s ease both;
    }
    @keyframes cpFadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:none; } }
    .cp-hero-eyebrow {
      display: flex; align-items: center; gap: 12px;
      font-family: var(--ft); font-size: 9px; letter-spacing: 5px;
      color: var(--gold); text-transform: uppercase; margin-bottom: 14px;
    }
    .cp-hero-eyebrow::before { content:''; width: 30px; height: 1px; background: var(--gold); flex-shrink: 0; }
    .cp-hero-glyph {
      font-size: 72px; line-height: 1; margin-bottom: 8px; color: var(--gold);
      filter: drop-shadow(0 0 28px rgba(var(--gold-rgb),0.5));
      animation: cpGlyphPulse 3.5s ease-in-out infinite;
    }
    @keyframes cpGlyphPulse {
      0%,100% { filter: drop-shadow(0 0 22px rgba(var(--gold-rgb),0.4)); }
      50% { filter: drop-shadow(0 0 52px rgba(var(--gold-rgb),0.75)) brightness(1.25); }
    }
    .cp-hero-city {
      font-family: var(--fd); font-size: clamp(42px, 7.5vw, 96px);
      font-weight: 900; line-height: 0.95; margin-bottom: 8px;
      background: linear-gradient(135deg, #F2DC8C 0%, var(--gold) 38%, #FFEA9A 65%, #B8902E 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      filter: drop-shadow(0 4px 36px rgba(var(--gold-rgb),0.3));
    }
    .cp-hero-subtitle {
      font-family: var(--fb); font-style: italic; font-size: clamp(16px, 2vw, 24px);
      color: var(--text-dim); font-weight: 300; margin-bottom: 24px; letter-spacing: 0.5px;
      max-width: 640px; line-height: 1.5;
    }
    /* Pill badges */
    .cp-hero-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
    .cp-hero-pill {
      display: flex; align-items: center; gap: 7px; padding: 6px 14px;
      background: rgba(6,4,12,0.72); backdrop-filter: blur(12px);
      border: 1px solid var(--gold-border); border-radius: 20px;
      font-family: var(--fi); font-size: 11px; color: var(--text-dim);
    }
    .cp-hero-pill strong { color: var(--gold); font-weight: 600; }
    /* Stats row */
    .cp-hero-stats {
      display: inline-flex; background: rgba(6,4,12,0.82); backdrop-filter: blur(28px);
      border: 1px solid var(--gold-border); border-radius: 14px; overflow: hidden;
    }
    .cp-hero-stat {
      padding: 16px 26px; text-align: center;
      border-right: 1px solid rgba(var(--gold-rgb),0.1);
      transition: background .2s;
    }
    .cp-hero-stat:last-child { border-right: none; }
    .cp-hero-stat:hover { background: rgba(var(--gold-rgb),0.08); }
    .cp-hero-stat-n { font-family: var(--fd); font-size: 22px; font-weight: 700; color: var(--gold); line-height: 1; }
    .cp-hero-stat-l { font-family: var(--fi); font-size: 9.5px; color: var(--muted); margin-top: 4px; text-transform: uppercase; letter-spacing: 1.5px; }

    /* Scroll indicator */
    .cp-scroll-hint {
      position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 6;
      display: flex; flex-direction: column; align-items: center; gap: 5px;
      animation: cpScrollBounce 2s ease-in-out infinite; opacity: 0.55;
    }
    .cp-scroll-hint span { font-family: var(--fi); font-size: 9px; letter-spacing: 3px; color: var(--gold); text-transform: uppercase; }
    .cp-scroll-hint-line { width: 1px; height: 40px; background: linear-gradient(to bottom, transparent, var(--gold)); }
    @keyframes cpScrollBounce { 0%,100%{transform:translateX(-50%) translateY(0);} 50%{transform:translateX(-50%) translateY(7px);} }

    /* ── CITY TABS BAR ── */
    .cp-city-bar {
      position: sticky; top: 66px; z-index: 100;
      background: rgba(6,4,12,0.97); backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--gold-border);
      display: flex; overflow-x: auto; scrollbar-width: none;
    }
    .cp-city-bar::-webkit-scrollbar { display: none; }
    .cp-city-tab {
      flex-shrink: 0; display: flex; align-items: center; gap: 6px;
      padding: 13px 18px; border-bottom: 2px solid transparent;
      color: var(--muted); font-family: var(--fi); font-size: 12px; font-weight: 500;
      cursor: pointer; text-decoration: none; transition: all .2s; white-space: nowrap;
    }
    .cp-city-tab:hover { color: var(--text-dim); }
    .cp-city-tab.active { color: var(--gold); background: rgba(var(--gold-rgb),0.06); }

    /* ── HIGHLIGHTS STRIP ── */
    .cp-highlights {
      padding: 14px 44px;
      background: rgba(10,8,18,0.9); border-bottom: 1px solid var(--gold-border);
      display: flex; align-items: center; gap: 10px; overflow-x: auto; scrollbar-width: none;
    }
    .cp-highlights::-webkit-scrollbar { display: none; }
    .cp-hl-label { font-family: var(--fi); font-size: 9.5px; letter-spacing: 2px; color: var(--muted); text-transform: uppercase; white-space: nowrap; flex-shrink: 0; }
    .cp-hl-pill {
      flex-shrink: 0; padding: 5px 14px; border-radius: 20px;
      background: var(--gold-dim); border: 1px solid var(--gold-border);
      font-family: var(--fi); font-size: 11px; color: rgba(var(--gold-rgb),0.9);
      white-space: nowrap; cursor: default; transition: background .2s;
    }
    .cp-hl-pill:hover { background: var(--gold-dim2); }

    /* ── FILTER BAR ── */
    .cp-filter-bar {
      padding: 18px 44px 16px;
      display: flex; align-items: center; justify-content: space-between;
      flex-wrap: wrap; gap: 12px; border-bottom: 1px solid rgba(var(--gold-rgb),0.06);
      position: relative; z-index: 5;
    }
    .cp-filter-pills { display: flex; gap: 7px; flex-wrap: wrap; }
    .cp-filter-pill {
      display: flex; align-items: center; gap: 6px; padding: 7px 15px;
      background: transparent; border: 1px solid rgba(var(--gold-rgb),0.15);
      border-radius: 8px; color: var(--muted); font-family: var(--fi); font-size: 12px;
      cursor: pointer; transition: all .2s;
    }
    .cp-filter-pill:hover { border-color: var(--gold-border); color: var(--text-dim); }
    .cp-filter-pill.active {
      background: var(--gold-dim); border-color: var(--gold); color: var(--gold);
      box-shadow: 0 0 18px rgba(var(--gold-rgb),0.1);
    }
    .cp-filter-pill-count {
      font-size: 9px; padding: 1px 6px; border-radius: 8px;
      background: rgba(255,255,255,0.05);
    }
    .cp-filter-pill.active .cp-filter-pill-count { background: rgba(var(--gold-rgb),0.2); }
    .cp-filter-right { display: flex; align-items: center; gap: 10px; }
    .cp-result-count { font-family: var(--fi); font-size: 11.5px; color: var(--muted); }
    .cp-result-count strong { color: var(--gold); font-weight: 600; }
    .cp-sort-select {
      background: var(--surface2); border: 1px solid var(--gold-border); border-radius: 7px;
      color: var(--text-dim); font-family: var(--fi); font-size: 12px;
      padding: 8px 12px; cursor: pointer; outline: none;
    }
    .cp-sort-select option { background: var(--surface2); }

    /* ── TOUR GRID ── */
    .cp-grid-section { padding: 28px 44px 56px; position: relative; z-index: 5; }
    .cp-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 22px; }

    /* ── CREATIVE CARDS ── */
    .cp-card {
      position: relative; border-radius: 16px; overflow: hidden;
      background: var(--surface2); border: 1px solid var(--gold-border);
      cursor: pointer; display: flex; flex-direction: column;
      transition: transform .32s cubic-bezier(.25,.8,.25,1), box-shadow .32s, border-color .32s;
      animation: cpCardIn .48s ease both;
    }
    @keyframes cpCardIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:none; } }
    .cp-card:hover {
      transform: translateY(-8px);
      border-color: rgba(var(--gold-rgb),0.5);
      box-shadow: 0 32px 80px rgba(0,0,0,.7), 0 0 0 1px rgba(var(--gold-rgb),0.3);
    }

    /* Card image zone */
    .cp-card-img-wrap {
      position: relative; height: 218px; flex-shrink: 0; overflow: hidden;
    }
    .cp-card-img {
      width: 100%; height: 100%; object-fit: cover; display: block;
      transition: transform .52s ease;
    }
    .cp-card:hover .cp-card-img { transform: scale(1.06); }
    .cp-card-img-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(6,4,12,.96) 0%, rgba(6,4,12,.3) 52%, transparent 100%);
    }
    .cp-card-img-color {
      position: absolute; inset: 0; pointer-events: none;
    }

    /* Card category badge */
    .cp-card-cat {
      position: absolute; top: 12px; left: 12px; z-index: 2;
      padding: 4px 10px; border-radius: 4px;
      background: rgba(var(--gold-rgb),0.9); color: #060400;
      font-family: var(--fi); font-size: 9.5px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 1.5px;
    }
    /* Discount badge */
    .cp-card-disc {
      position: absolute; top: 12px; right: 12px; z-index: 2;
      padding: 4px 9px; border-radius: 4px;
      background: rgba(210,55,55,0.9); color: #fff;
      font-family: var(--fi); font-size: 10px; font-weight: 700;
    }
    /* Duration chip */
    .cp-card-dur {
      position: absolute; bottom: 12px; left: 12px; z-index: 2;
      padding: 4px 10px; border-radius: 20px;
      background: rgba(6,4,12,0.82); backdrop-filter: blur(10px);
      border: 1px solid rgba(var(--gold-rgb),0.22);
      font-family: var(--fi); font-size: 10px; color: rgba(240,235,224,0.8);
    }
    /* Free cancellation */
    .cp-card-fc {
      position: absolute; bottom: 12px; right: 12px; z-index: 2;
      padding: 4px 10px; border-radius: 20px;
      background: rgba(30,110,65,0.85); backdrop-filter: blur(10px);
      font-family: var(--fi); font-size: 9.5px; color: #6DF5A2; font-weight: 600;
    }

    /* Card glyph watermark */
    .cp-card-glyph {
      position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%);
      font-size: 52px; opacity: 0.06; z-index: 1; pointer-events: none;
      transition: opacity .3s;
    }
    .cp-card:hover .cp-card-glyph { opacity: 0.14; }

    /* Card body */
    .cp-card-body { padding: 18px 20px 20px; flex: 1; display: flex; flex-direction: column; gap: 10px; }
    .cp-card-title {
      font-family: var(--fd); font-size: 14.5px; color: var(--text); font-weight: 700;
      line-height: 1.35; display: -webkit-box; -webkit-line-clamp: 2;
      -webkit-box-orient: vertical; overflow: hidden;
    }
    .cp-card-desc {
      font-family: var(--fb); font-size: 14.5px; color: var(--muted); line-height: 1.6; flex: 1;
      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
    }
    /* Rating */
    .cp-card-rating { display: flex; align-items: center; gap: 7px; }
    .cp-card-stars { color: var(--gold); font-size: 11px; letter-spacing: 1px; }
    .cp-card-score { font-family: var(--fd); font-size: 14px; color: var(--gold); font-weight: 700; }
    .cp-card-revs { font-family: var(--fi); font-size: 11.5px; color: var(--muted); }

    /* Card footer */
    .cp-card-footer {
      display: flex; align-items: flex-end; justify-content: space-between;
      border-top: 1px solid rgba(var(--gold-rgb),0.08); padding-top: 14px; margin-top: auto;
    }
    .cp-card-price-from { font-family: var(--fi); font-size: 9px; text-transform: uppercase; letter-spacing: 2px; color: var(--muted); margin-bottom: 3px; }
    .cp-card-price-row { display: flex; align-items: baseline; gap: 5px; }
    .cp-card-price-orig { font-family: var(--fi); font-size: 12px; color: rgba(110,104,96,0.6); text-decoration: line-through; }
    .cp-card-price-amt { font-family: var(--fd); font-size: 26px; color: var(--gold); font-weight: 700; line-height: 1; }
    .cp-card-price-per { font-family: var(--fi); font-size: 10px; color: var(--muted); }
    .cp-card-btn {
      padding: 9px 18px; border-radius: 8px;
      background: linear-gradient(135deg, var(--gold), var(--gold-light)); color: #060400;
      border: none; font-family: var(--ft); font-size: 8px; letter-spacing: 2px; font-weight: 700;
      text-transform: uppercase; cursor: pointer;
      box-shadow: 0 4px 16px rgba(var(--gold-rgb),0.25); transition: all .22s;
    }
    .cp-card-btn:hover { box-shadow: 0 6px 24px rgba(var(--gold-rgb),0.45); transform: translateY(-1px); }

    /* ── EMPTY STATE ── */
    .cp-empty { grid-column: 1/-1; text-align: center; padding: 80px 0; }
    .cp-empty-glyph { font-size: 56px; opacity: 0.25; margin-bottom: 16px; }
    .cp-empty-txt { font-family: var(--fi); font-size: 13px; color: var(--muted); letter-spacing: 1.5px; }

    /* ── OTHER CITIES ── */
    .cp-cities-section { background: rgba(10,8,18,0.8); border-top: 1px solid var(--gold-border); padding: 44px 44px 56px; position: relative; z-index: 5; }
    .cp-section-header { display: flex; align-items: center; gap: 16px; margin-bottom: 28px; }
    .cp-section-title { font-family: var(--ft); font-size: 10px; letter-spacing: 4px; color: var(--gold); text-transform: uppercase; white-space: nowrap; }
    .cp-section-line { flex: 1; height: 1px; background: linear-gradient(to right, var(--gold-border), transparent); }
    .cp-cities-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 14px; }
    .cp-city-card {
      position: relative; border-radius: 12px; overflow: hidden; height: 130px;
      border: 1px solid rgba(var(--gold-rgb),0.15); text-decoration: none; display: block;
      transition: all .28s; cursor: pointer;
    }
    .cp-city-card:hover { transform: translateY(-5px); box-shadow: 0 20px 52px rgba(0,0,0,.6), 0 0 0 1px rgba(var(--gold-rgb),0.35); }
    .cp-city-card img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
    .cp-city-card:hover img { transform: scale(1.07); }
    .cp-city-card-ov { position: absolute; inset: 0; background: linear-gradient(to top, rgba(6,4,12,.9), rgba(6,4,12,.15) 65%, transparent); }
    .cp-city-card-info { position: absolute; bottom: 10px; left: 14px; }
    .cp-city-card-glyph { font-size: 20px; line-height: 1; margin-bottom: 2px; }
    .cp-city-card-name { font-family: var(--fd); font-size: 14px; font-weight: 700; }

    /* ── CONTACT SECTION ── */
    .cp-contact-section {
      padding: 72px 44px; background: var(--surface); border-top: 1px solid var(--gold-border);
      position: relative; z-index: 5; overflow: hidden;
    }
    .cp-contact-deco {
      position: absolute; font-size: 320px; color: var(--gold); opacity: 0.025;
      top: 50%; left: 50%; transform: translate(-50%, -50%);
      pointer-events: none; font-family: serif; line-height: 1; user-select: none;
    }
    .cp-contact-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.2fr; gap: 72px; align-items: start; }
    .cp-contact-left {}
    .cp-contact-tag { font-family: var(--ft); font-size: 9px; letter-spacing: 5px; color: var(--gold); text-transform: uppercase; margin-bottom: 16px; display: flex; align-items: center; gap: 12px; }
    .cp-contact-tag::before { content:''; width: 28px; height: 1px; background: var(--gold); }
    .cp-contact-title { font-family: var(--fd); font-size: clamp(28px, 3.5vw, 48px); color: var(--text); font-weight: 700; line-height: 1.15; margin-bottom: 18px; }
    .cp-contact-sub { font-family: var(--fb); font-size: 18px; color: var(--text-dim); font-weight: 300; line-height: 1.7; margin-bottom: 36px; }
    .cp-contact-infos { display: flex; flex-direction: column; gap: 18px; }
    .cp-contact-info { display: flex; align-items: flex-start; gap: 14px; }
    .cp-contact-info-icon {
      width: 42px; height: 42px; border-radius: 10px; flex-shrink: 0;
      background: var(--gold-dim); border: 1px solid var(--gold-border);
      display: flex; align-items: center; justify-content: center; font-size: 18px;
    }
    .cp-contact-info-txt { flex: 1; }
    .cp-contact-info-label { font-family: var(--fi); font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px; }
    .cp-contact-info-val { font-family: var(--fi); font-size: 15px; color: var(--text); font-weight: 500; }
    .cp-contact-info-sub { font-family: var(--fi); font-size: 12px; color: var(--muted); margin-top: 2px; }

    /* Contact Form */
    .cp-contact-form { background: var(--surface2); border: 1px solid var(--gold-border); border-radius: 18px; padding: 36px; }
    .cp-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
    .cp-form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
    .cp-form-group.half { margin-bottom: 0; }
    .cp-form-label { font-family: var(--fi); font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: 2px; }
    .cp-form-input, .cp-form-textarea, .cp-form-select {
      background: rgba(255,255,255,0.04); border: 1px solid var(--gold-border); border-radius: 9px;
      color: var(--text); padding: 12px 14px; font-family: var(--fi); font-size: 14px;
      outline: none; transition: border-color .2s; width: 100%;
    }
    .cp-form-input:focus, .cp-form-textarea:focus, .cp-form-select:focus { border-color: var(--gold); background: rgba(var(--gold-rgb),0.04); }
    .cp-form-textarea { resize: vertical; min-height: 100px; }
    .cp-form-select option { background: var(--surface2); }
    .cp-form-actions { display: flex; gap: 10px; margin-top: 20px; }
    .cp-form-submit {
      flex: 1; padding: 14px;
      background: linear-gradient(135deg, var(--gold), var(--gold-light)); color: #060400;
      border: none; border-radius: 10px; font-family: var(--ft); font-size: 9.5px;
      letter-spacing: 2.5px; font-weight: 700; text-transform: uppercase; cursor: pointer;
      transition: all .25s; box-shadow: 0 6px 22px rgba(var(--gold-rgb),0.28);
    }
    .cp-form-submit:hover { box-shadow: 0 8px 32px rgba(var(--gold-rgb),0.5); transform: translateY(-1px); }
    .cp-form-submit:disabled { opacity: 0.45; cursor: not-allowed; transform: none; }
    .cp-form-wa {
      display: flex; align-items: center; justify-content: center; gap: 7px;
      padding: 14px 20px; background: #25D366; color: #fff; border: none; border-radius: 10px;
      font-family: var(--fi); font-size: 13px; font-weight: 700; cursor: pointer;
      text-decoration: none; transition: opacity .2s;
    }
    .cp-form-wa:hover { opacity: 0.88; }
    .cp-form-note { font-family: var(--fi); font-size: 11px; color: var(--muted); text-align: center; margin-top: 12px; font-style: italic; }
    .cp-form-success { text-align: center; padding: 32px 0; }
    .cp-form-success-icon { font-size: 56px; margin-bottom: 12px; }
    .cp-form-success-title { font-family: var(--fd); font-size: 20px; color: var(--gold); margin-bottom: 8px; }
    .cp-form-success-sub { font-family: var(--fi); font-size: 14px; color: var(--text-dim); }

    /* ── FOOTER ── */
    .cp-footer { background: var(--deep); border-top: 1px solid var(--gold-border); padding: 56px 44px 32px; position: relative; z-index: 5; overflow: hidden; }
    .cp-footer-deco { position: absolute; bottom: 0; right: 0; font-size: 200px; color: var(--gold); opacity: 0.03; line-height: 1; pointer-events: none; user-select: none; font-family: serif; }
    .cp-footer-top { display: grid; grid-template-columns: 1.8fr repeat(3, 1fr); gap: 52px; margin-bottom: 48px; }
    .cp-footer-brand { }
    .cp-footer-logo { font-family: var(--fd); font-size: 16px; color: var(--gold); font-weight: 700; letter-spacing: 2px; margin-bottom: 14px; }
    .cp-footer-tagline { font-family: var(--fb); font-style: italic; font-size: 16px; color: var(--text-dim); font-weight: 300; line-height: 1.7; margin-bottom: 20px; }
    .cp-footer-socials { display: flex; gap: 8px; }
    .cp-footer-social {
      width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center;
      justify-content: center; background: var(--surface2); border: 1px solid var(--gold-border);
      color: var(--muted); font-size: 15px; text-decoration: none; transition: all .2s;
    }
    .cp-footer-social:hover { border-color: var(--gold); color: var(--gold); }
    .cp-footer-col-title { font-family: var(--ft); font-size: 8.5px; letter-spacing: 3px; color: var(--gold); text-transform: uppercase; margin-bottom: 18px; }
    .cp-footer-links { display: flex; flex-direction: column; gap: 10px; }
    .cp-footer-link { font-family: var(--fi); font-size: 13px; color: var(--muted); text-decoration: none; transition: color .2s; }
    .cp-footer-link:hover { color: var(--gold); }
    .cp-footer-bottom { border-top: 1px solid rgba(var(--gold-rgb),0.08); padding-top: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; }
    .cp-footer-copy { font-family: var(--fi); font-size: 11px; color: var(--muted); }
    .cp-footer-copy strong { color: var(--gold); }
    .cp-footer-glyphs { font-size: 20px; opacity: 0.4; letter-spacing: 6px; }
    .cp-footer-trust { display: flex; gap: 14px; }
    .cp-footer-trust-item { display: flex; align-items: center; gap: 5px; font-family: var(--fi); font-size: 10.5px; color: var(--muted); }
    .cp-footer-trust-item span { color: var(--gold); }

    /* ── FLOATING ACTIONS ── */
    .cp-float-wa {
      position: fixed; bottom: 28px; right: 28px; z-index: 900;
      display: flex; align-items: center; gap: 8px; padding: 12px 20px;
      background: #25D366; color: #fff; border-radius: 50px; text-decoration: none;
      font-family: var(--fi); font-size: 12px; font-weight: 700;
      box-shadow: 0 8px 32px rgba(37,211,102,.4); transition: all .2s; text-transform: uppercase; letter-spacing: 1px;
    }
    .cp-float-wa:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(37,211,102,.55); }
    .cp-float-top {
      position: fixed; bottom: 28px; left: 28px; z-index: 900; width: 42px; height: 42px;
      border-radius: 10px; background: var(--gold-dim2); border: 1px solid var(--gold-border);
      color: var(--gold); cursor: pointer; font-size: 14px; display: flex; align-items: center;
      justify-content: center; transition: all .2s;
    }
    .cp-float-top:hover { background: var(--gold-dim); border-color: var(--gold); }

    /* ── BOOKING MODAL ── */
    .cp-modal-bg {
      position: fixed; inset: 0; background: rgba(0,0,0,.88); backdrop-filter: blur(14px);
      z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 20px;
      animation: cpFadeIn .2s ease;
    }
    @keyframes cpFadeIn { from{opacity:0}to{opacity:1} }
    .cp-modal {
      background: linear-gradient(145deg, var(--deep), var(--obsidian));
      border: 1px solid var(--gold-border); border-radius: 20px;
      width: min(540px, 96vw); max-height: 92vh; overflow-y: auto;
      box-shadow: 0 48px 120px rgba(0,0,0,.9), 0 0 60px rgba(var(--gold-rgb),0.08);
      animation: cpModalIn .3s ease;
    }
    @keyframes cpModalIn { from{opacity:0;transform:scale(.94) translateY(22px)}to{opacity:1;transform:none} }
    .cp-modal-head { padding: 24px 28px 18px; border-bottom: 1px solid var(--gold-border); display: flex; justify-content: space-between; align-items: flex-start; }
    .cp-modal-tag { font-family: var(--fi); font-size: 9px; letter-spacing: 2.5px; color: var(--gold); text-transform: uppercase; margin-bottom: 6px; }
    .cp-modal-title { font-family: var(--fd); font-size: 16px; color: var(--text); line-height: 1.35; max-width: 380px; }
    .cp-modal-close {
      width: 34px; height: 34px; border-radius: 8px; background: rgba(255,255,255,.05);
      border: 1px solid rgba(255,255,255,.08); color: var(--muted); cursor: pointer; font-size: 15px;
      display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all .2s;
    }
    .cp-modal-close:hover { border-color: rgba(var(--gold-rgb),0.3); color: var(--text); }
    .cp-modal-body { padding: 24px 28px; }
    .cp-modal-price-bar {
      background: var(--gold-dim); border: 1px solid var(--gold-border); border-radius: 10px;
      padding: 14px 18px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;
    }
    .cp-modal-price-bar .label { font-family: var(--fi); font-size: 11px; color: var(--muted); margin-bottom: 4px; }
    .cp-modal-price-bar .price { font-family: var(--fd); font-size: 26px; color: var(--gold); font-weight: 700; }
    .cp-modal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .cp-modal-field { display: flex; flex-direction: column; gap: 5px; }
    .cp-modal-field.full { grid-column: 1/-1; }
    .cp-modal-field label { font-family: var(--fi); font-size: 9.5px; color: var(--muted); text-transform: uppercase; letter-spacing: 2px; }
    .cp-modal-field input, .cp-modal-field textarea {
      background: var(--surface2); border: 1px solid var(--gold-border); border-radius: 9px;
      color: var(--text); padding: 11px 14px; font-family: var(--fi); font-size: 14px;
      outline: none; transition: border-color .2s; width: 100%;
    }
    .cp-modal-field input:focus, .cp-modal-field textarea:focus { border-color: var(--gold); }
    .cp-modal-actions { display: flex; gap: 10px; margin-top: 20px; }
    .cp-modal-submit {
      flex: 1; padding: 14px; background: linear-gradient(135deg, var(--gold), var(--gold-light));
      color: #060400; border: none; border-radius: 10px;
      font-family: var(--ft); font-size: 9.5px; letter-spacing: 2px; font-weight: 700;
      text-transform: uppercase; cursor: pointer; transition: all .25s;
    }
    .cp-modal-submit:disabled { opacity: 0.45; cursor: not-allowed; }
    .cp-modal-wa {
      display: flex; align-items: center; justify-content: center;
      padding: 14px 18px; background: #25D366; color: #fff;
      border: none; border-radius: 10px; font-size: 20px; cursor: pointer;
      text-decoration: none; transition: opacity .2s;
    }
    .cp-modal-wa:hover { opacity: 0.88; }
    .cp-modal-note { font-family: var(--fi); font-size: 11px; color: var(--muted); text-align: center; margin-top: 10px; font-style: italic; }
    .cp-modal-success { text-align: center; padding: 24px 0; }
    .cp-modal-success-icon { font-size: 60px; margin-bottom: 14px; }
    .cp-modal-success-title { font-family: var(--fd); font-size: 20px; color: var(--gold); margin-bottom: 8px; }
    .cp-modal-success-sub { font-family: var(--fi); font-size: 14px; color: var(--text-dim); line-height: 1.7; margin-bottom: 22px; }

    /* ── LOADING ── */
    .cp-loader {
      min-height: 100vh; background: var(--obsidian);
      display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 18px;
    }
    .cp-loader-glyph { font-size: 52px; color: var(--gold); filter: drop-shadow(0 0 32px rgba(var(--gold-rgb),0.7)); animation: cpGlyphPulse 1.8s ease-in-out infinite; }
    .cp-loader-txt { font-family: var(--ft); font-size: 10px; letter-spacing: 4px; color: var(--muted); text-transform: uppercase; }

    /* ── RESPONSIVE ── */
    @media (max-width: 980px) {
      .cp-nav { padding: 0 18px; gap: 8px; }
      .cp-nav-logo em { display: none; }
      .cp-hero-content, .cp-highlights, .cp-filter-bar, .cp-grid-section, .cp-cities-section, .cp-contact-section, .cp-footer { padding-left: 18px; padding-right: 18px; }
      .cp-contact-inner { grid-template-columns: 1fr; gap: 36px; }
      .cp-footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
      .cp-hero-thumbs { display: none; }
      .cp-hero-city { font-size: clamp(34px, 11vw, 64px); }
    }
    @media (max-width: 640px) {
      .cp-footer-top { grid-template-columns: 1fr; }
      .cp-form-row { grid-template-columns: 1fr; }
      .cp-hero-stats { flex-wrap: wrap; }
      .cp-filter-bar { flex-direction: column; align-items: flex-start; }
    }
  `}</style>
);

// ─────────────────────────────────────────────────────────────
//  BOOKING MODAL
// ─────────────────────────────────────────────────────────────
function BookingModal({ tour, cityName, onClose, t, formatPrice }) {
  const [f, setF] = useState({ name:"", email:"", phone:"", date:"", guests:"2", notes:"" });
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const price = tour?.price?.discounted ?? tour?.price?.original ?? 0;
  const total = price * parseInt(f.guests || 1);
  const waMsg = encodeURIComponent(
    `🏛️ *Booking – Golden Egypt Tours*\n\n*Tour:* ${tour?.title}\n*City:* ${cityName}\n*Date:* ${f.date}\n*Guests:* ${f.guests}\n*Name:* ${f.name}\n*Email:* ${f.email}\n*Phone:* ${f.phone||"N/A"}\n*Total:* ${formatPrice(total)}`
  );

  const submit = async () => {
    setBusy(true);
    try {
      await fetch("/api/bookings", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ tourId:tour._id, tourName:tour.title, cityName, ...f, total }),
      });
    } catch(_) {}
    finally { setBusy(false); setSent(true); }
  };

  if (!tour) return null;
  const ok = f.name && f.email && f.date;

  return (
    <div className="cp-modal-bg" onClick={e => e.target===e.currentTarget && onClose()}>
      <div className="cp-modal">
        <div className="cp-modal-head">
          <div>
            <div className="cp-modal-tag">✦ {cityName} · ⏱ {tour.duration}</div>
            <div className="cp-modal-title">{tour.title}</div>
          </div>
          <button className="cp-modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="cp-modal-body">
          {sent ? (
            <div className="cp-modal-success">
              <div className="cp-modal-success-icon">✅</div>
              <div className="cp-modal-success-title">{t.instantConfirm}!</div>
              <div className="cp-modal-success-sub">
                Our team will contact you within 2 hours.<br/>
                Ref: GET-{Date.now().toString().slice(-6)}
              </div>
              <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
                <a href={`https://wa.me/201068257754?text=${waMsg}`} target="_blank" rel="noreferrer" className="cp-modal-wa" style={{borderRadius:10,padding:"12px 20px",fontSize:13,fontFamily:"var(--fi)",fontWeight:700}}>💬 Confirm on WhatsApp</a>
                <button className="cp-modal-submit" style={{flex:"none",padding:"12px 20px"}} onClick={onClose}>Close</button>
              </div>
            </div>
          ) : (
            <>
              <div className="cp-modal-price-bar">
                <div>
                  <div className="label">⏱ {tour.duration} · {f.guests} guest(s)</div>
                  <div style={{fontFamily:"var(--fi)",fontSize:13,color:"var(--muted)",marginTop:3}}>
                    {formatPrice(price)} × {f.guests} = <strong style={{color:"var(--gold)"}}>{formatPrice(total)}</strong>
                  </div>
                </div>
                <div className="price">{formatPrice(total)}</div>
              </div>
              <div className="cp-modal-grid">
                <div className="cp-modal-field full">
                  <label>{t.yourName}</label>
                  <input type="text" value={f.name} placeholder="Your full name" onChange={e=>setF(p=>({...p,name:e.target.value}))} />
                </div>
                <div className="cp-modal-field">
                  <label>{t.yourEmail}</label>
                  <input type="email" value={f.email} placeholder="email@example.com" onChange={e=>setF(p=>({...p,email:e.target.value}))} />
                </div>
                <div className="cp-modal-field">
                  <label>{t.yourPhone}</label>
                  <input type="tel" value={f.phone} placeholder="+20 xxx xxx" onChange={e=>setF(p=>({...p,phone:e.target.value}))} />
                </div>
                <div className="cp-modal-field">
                  <label>{t.travelDate}</label>
                  <input type="date" value={f.date} min={new Date().toISOString().split("T")[0]} onChange={e=>setF(p=>({...p,date:e.target.value}))} />
                </div>
                <div className="cp-modal-field">
                  <label>{t.guests}</label>
                  <input type="number" value={f.guests} min="1" max="50" onChange={e=>setF(p=>({...p,guests:e.target.value}))} />
                </div>
                <div className="cp-modal-field full">
                  <label>{t.message}</label>
                  <textarea rows={2} value={f.notes} placeholder="Any special requests…" style={{resize:"none"}} onChange={e=>setF(p=>({...p,notes:e.target.value}))} />
                </div>
              </div>
              <div className="cp-modal-actions">
                <button className="cp-modal-submit" disabled={busy||!ok} onClick={submit}>
                  {busy ? "⏳ Sending…" : `✈ ${t.sendRequest}`}
                </button>
                <a href={`https://wa.me/201068257754?text=${waMsg}`} target="_blank" rel="noreferrer" className="cp-modal-wa">💬</a>
              </div>
              <div className="cp-modal-note">{t.freeCancellation} · No charge until confirmed</div>
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
function TourCard({ tour, index, meta, onBook, onView, t, formatPrice }) {
  const price   = tour.price?.discounted ?? tour.price?.original ?? 0;
  const orig    = tour.price?.original;
  const disc    = orig && tour.price?.discounted ? Math.round((1 - tour.price.discounted/orig)*100) : 0;
  const img     = tour.images?.[0] || `https://placehold.co/600x218/0A0812/C9A84C?text=${encodeURIComponent((tour.title||"Tour").slice(0,14))}`;
  const score   = tour.rating?.score || 0;
  const reviews = tour.rating?.reviews || 0;

  return (
    <div className="cp-card" style={{animationDelay:`${index*0.065}s`}} onClick={()=>onView(tour._id)}>
      <div className="cp-card-img-wrap">
        <img className="cp-card-img" src={img} alt={tour.title}
          onError={e=>{e.target.src=`https://placehold.co/600x218/0A0812/C9A84C?text=Tour`;}} />
        <div className="cp-card-img-overlay" />
        <div className="cp-card-img-color" style={{background:`radial-gradient(ellipse at 0% 100%,${meta.color}18,transparent 65%)`}} />
        {tour.category && <div className="cp-card-cat">{tour.category.split(" ")[0]}</div>}
        {disc>0 && <div className="cp-card-disc">-{disc}%</div>}
        {tour.duration && <div className="cp-card-dur">⏱ {tour.duration}</div>}
        {tour.freeCancellation && <div className="cp-card-fc">✓ {t.freeCancellation}</div>}
        <div className="cp-card-glyph">{meta.glyph}</div>
      </div>
      <div className="cp-card-body">
        <div className="cp-card-title">{tour.title}</div>
        <div className="cp-card-desc">{tour.description}</div>
        {score>0 && (
          <div className="cp-card-rating">
            <span className="cp-card-stars">{"★".repeat(Math.min(5,Math.floor(score/2)))}</span>
            <span className="cp-card-score">{score.toFixed(1)}</span>
            <span className="cp-card-revs">({reviews.toLocaleString()} {t.reviews})</span>
          </div>
        )}
        <div className="cp-card-footer">
          <div>
            <div className="cp-card-price-from">{t.from}</div>
            <div className="cp-card-price-row">
              {orig && tour.price?.discounted && <span className="cp-card-price-orig">{formatPrice(orig)}</span>}
              <span className="cp-card-price-amt">{formatPrice(price)}</span>
              <span className="cp-card-price-per">{t.perPerson}</span>
            </div>
          </div>
          <button className="cp-card-btn" onClick={e=>{e.stopPropagation();onBook(tour);}}>
            {t.bookNow}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  CONTACT SECTION
// ─────────────────────────────────────────────────────────────
function ContactSection({ t, cityName, meta }) {
  const [f, setF] = useState({name:"",email:"",phone:"",date:"",guests:"2",msg:""});
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const waMsg = encodeURIComponent(`Hi! I'm interested in tours in ${cityName}.\n\nName: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nDate: ${f.date}\nGuests: ${f.guests}\n\n${f.msg}`);

  const submit = async () => {
    setBusy(true);
    try {
      await fetch("/api/contact", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({...f, city:cityName}),
      });
    } catch(_) {}
    finally { setBusy(false); setSent(true); }
  };
  const ok = f.name && f.email;

  return (
    <section className="cp-contact-section" id="cp-contact">
      <div className="cp-contact-deco">𓂀</div>
      <div className="cp-contact-inner">
        <div className="cp-contact-left">
          <div className="cp-contact-tag">{meta.glyph} {t.contactUs}</div>
          <h2 className="cp-contact-title">{t.contactUs}</h2>
          <p className="cp-contact-sub">{t.contactSub}</p>
          <div className="cp-contact-infos">
            {[
              {icon:"📞", label:"Phone & WhatsApp", val:"+20 106 825 7754", sub:"Available 24/7"},
              {icon:"📧", label:"Email", val:"hello@goldenegypttours.com", sub:"Reply within 2 hours"},
              {icon:"📍", label:"Office", val:"Cairo, Egypt", sub:"Serving all destinations"},
              {icon:"🕐", label:"Response Time", val:"Under 2 hours", sub:"We never miss a message"},
            ].map(info => (
              <div key={info.label} className="cp-contact-info">
                <div className="cp-contact-info-icon">{info.icon}</div>
                <div className="cp-contact-info-txt">
                  <div className="cp-contact-info-label">{info.label}</div>
                  <div className="cp-contact-info-val">{info.val}</div>
                  <div className="cp-contact-info-sub">{info.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cp-contact-form">
          {sent ? (
            <div className="cp-form-success">
              <div className="cp-form-success-icon">🏛️</div>
              <div className="cp-form-success-title">Message Sent!</div>
              <div className="cp-form-success-sub">Our Egypt specialists will reply within 2 hours.</div>
            </div>
          ) : (
            <>
              <div className="cp-form-row">
                <div className="cp-form-group half">
                  <label className="cp-form-label">{t.yourName}</label>
                  <input className="cp-form-input" type="text" placeholder="Your name" value={f.name} onChange={e=>setF(p=>({...p,name:e.target.value}))} />
                </div>
                <div className="cp-form-group half">
                  <label className="cp-form-label">{t.yourEmail}</label>
                  <input className="cp-form-input" type="email" placeholder="email@example.com" value={f.email} onChange={e=>setF(p=>({...p,email:e.target.value}))} />
                </div>
              </div>
              <div className="cp-form-row">
                <div className="cp-form-group half">
                  <label className="cp-form-label">{t.yourPhone}</label>
                  <input className="cp-form-input" type="tel" placeholder="+20 xxx xxx xxxx" value={f.phone} onChange={e=>setF(p=>({...p,phone:e.target.value}))} />
                </div>
                <div className="cp-form-group half">
                  <label className="cp-form-label">{t.travelDate}</label>
                  <input className="cp-form-input" type="date" value={f.date} min={new Date().toISOString().split("T")[0]} onChange={e=>setF(p=>({...p,date:e.target.value}))} />
                </div>
              </div>
              <div className="cp-form-group">
                <label className="cp-form-label">{t.guests}</label>
                <select className="cp-form-select" value={f.guests} onChange={e=>setF(p=>({...p,guests:e.target.value}))}>
                  {[1,2,3,4,5,6,7,8,9,"10+"].map(n=><option key={n} value={n}>{n} {n===1?"person":"people"}</option>)}
                </select>
              </div>
              <div className="cp-form-group">
                <label className="cp-form-label">{t.message}</label>
                <textarea className="cp-form-textarea" placeholder="Tell us about your dream Egypt trip…" value={f.msg} onChange={e=>setF(p=>({...p,msg:e.target.value}))} />
              </div>
              <div className="cp-form-actions">
                <button className="cp-form-submit" disabled={busy||!ok} onClick={submit}>
                  {busy ? "⏳ Sending…" : t.sendRequest}
                </button>
                <a href={`https://wa.me/201068257754?text=${waMsg}`} target="_blank" rel="noreferrer" className="cp-form-wa">💬</a>
              </div>
              <div className="cp-form-note">{t.freeCancellation} · {t.instantConfirm}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  FOOTER
// ─────────────────────────────────────────────────────────────
function Footer({ t, allCities, meta }) {
  const DEST_LINKS = allCities.slice(0,7).map(c=>({label:c.name, href:`/city/${c.slug}`}));
  const QUICK_LINKS = [
    {label:"Home", href:"/"}, {label:"All Tours", href:"/tours"},
    {label:"About Us", href:"/about"}, {label:"Blog", href:"/blog"},
    {label:"Contact", href:"#cp-contact"},
  ];
  return (
    <footer className="cp-footer">
      <div className="cp-footer-deco">𓂀</div>
      <div className="cp-footer-top">
        <div className="cp-footer-brand">
          <div className="cp-footer-logo">GOLDEN EGYPT TOURS</div>
          <p className="cp-footer-tagline">{t.footerTagline}</p>
          <div className="cp-footer-socials">
            {[["fb","f"],["tw","𝕏"],["ig","◉"],["yt","▶"]].map(([k,icon])=>(
              <a key={k} href="#" className="cp-footer-social">{icon}</a>
            ))}
          </div>
        </div>
        <div>
          <div className="cp-footer-col-title">{t.quickLinks}</div>
          <div className="cp-footer-links">
            {QUICK_LINKS.map(l=><a key={l.label} href={l.href} className="cp-footer-link">{l.label}</a>)}
          </div>
        </div>
        <div>
          <div className="cp-footer-col-title">{t.destinations}</div>
          <div className="cp-footer-links">
            {DEST_LINKS.map(l=><a key={l.label} href={l.href} className="cp-footer-link">{l.label}</a>)}
          </div>
        </div>
        <div>
          <div className="cp-footer-col-title">{t.legal}</div>
          <div className="cp-footer-links">
            <a href="/privacy" className="cp-footer-link">{t.privacy}</a>
            <a href="/terms" className="cp-footer-link">{t.terms}</a>
          </div>
          <div style={{marginTop:24}}>
            <div className="cp-footer-col-title">Contact</div>
            <div className="cp-footer-links">
              <span className="cp-footer-link">+20 106 825 7754</span>
              <span className="cp-footer-link">hello@goldenegypttours.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="cp-footer-bottom">
        <div className="cp-footer-copy">© 2024 <strong>Golden Egypt Tours</strong>. {t.rights}</div>
        <div className="cp-footer-glyphs">{meta.glyphs.slice(0,6).join(" ")}</div>
        <div className="cp-footer-trust">
          {[["✓",t.freeCancellation],["⚡",t.instantConfirm],["🔒","Secure Payments"]].map(([ic,lbl])=>(
            <div key={lbl} className="cp-footer-trust-item"><span>{ic}</span> {lbl}</div>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────
//  MAIN — CityPage
// ─────────────────────────────────────────────────────────────
export default function CityPage() {
  const { cityId } = useParams();
  const navigate   = useNavigate();

  const [city,     setCity]    = useState(null);
  const [tours,    setTours]   = useState([]);
  const [allCities,setAll]     = useState([]);
  const [loading,  setLoad]    = useState(true);
  const [heroIdx,  setHeroIdx] = useState(0);
  const [cat,      setCat]     = useState("all");
  const [sort,     setSort]    = useState("popular");
  const [bookTour, setBook]    = useState(null);
  const [sticky,   setSticky]  = useState(false);

  // i18n + currency
  const [lang, setLang]       = useState("en");
  const [currency, setCur]    = useState("USD");
  const [langOpen, setLangOpen] = useState(false);
  const [curOpen,  setCurOpen]  = useState(false);

  const meta      = CITY_META[cityId] || DEFAULT_META;
  const t         = I18N[lang] || I18N.en;
  const isRTL     = t.dir === "rtl";
  const curData   = CURRENCIES[currency];
  const formatPrice = (usd) => `${curData.symbol}${Math.round(usd * curData.rate).toLocaleString()}`;

  // Fetch
  useEffect(() => {
    setLoad(true); window.scrollTo({top:0}); setCat("all"); setHeroIdx(0);
    Promise.all([getCityBySlug(cityId), getToursByCity(cityId), getAllCities()])
      .then(([cityData, toursData, citiesData]) => {
        setCity(cityData || {slug:cityId, name:cityId});
        setTours(Array.isArray(toursData) ? toursData : []);
        setAll(Array.isArray(citiesData) ? citiesData : []);
      })
      .catch(() => { setTours([]); setAll([]); })
      .finally(() => setLoad(false));
  }, [cityId]);

  // Hero auto-rotate
  useEffect(() => {
    const id = setInterval(() => setHeroIdx(i => (i+1) % meta.heroImages.length), 6500);
    return () => clearInterval(id);
  }, [meta.heroImages.length]);

  // Sticky
  useEffect(() => {
    const fn = () => setSticky(window.scrollY > 460);
    window.addEventListener("scroll", fn, {passive:true});
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // CSS accent var
  useEffect(() => {
    document.documentElement.style.setProperty("--gold", meta.color);
    document.documentElement.style.setProperty("--gold-rgb", meta.color === "#C9A84C" ? "201,168,76" : "201,168,76");
    return () => {};
  }, [meta.color]);

  // Close dropdowns on outside click
  useEffect(() => {
    const fn = () => { setLangOpen(false); setCurOpen(false); };
    document.addEventListener("click", fn);
    return () => document.removeEventListener("click", fn);
  }, []);

  // Filter & sort
  const filtered = useCallback(() => {
    let l = [...tours];
    if (cat !== "all") l = l.filter(t => t.category === cat);
    if (sort === "price_asc")  l.sort((a,b)=>(a.price?.discounted??a.price?.original??0)-(b.price?.discounted??b.price?.original??0));
    if (sort === "price_desc") l.sort((a,b)=>(b.price?.discounted??b.price?.original??0)-(a.price?.discounted??a.price?.original??0));
    if (sort === "rating")     l.sort((a,b)=>(b.rating?.score||0)-(a.rating?.score||0));
    if (sort === "popular")    l.sort((a,b)=>(b.rating?.reviews||0)-(a.rating?.reviews||0));
    return l;
  }, [tours, cat, sort])();

  const counts = CATS.reduce((a,c) => {
    a[c] = c==="all" ? tours.length : tours.filter(t=>t.category===c).length;
    return a;
  }, {});

  const cityName  = city?.name || cityId;
  const minPrice  = tours.length ? Math.min(...tours.map(t=>t.price?.discounted??t.price?.original??9999)) : 0;
  const bandTxt   = `${meta.glyph}  ${cityName.toUpperCase()}  ✦  GOLDEN EGYPT TOURS  ✦  DISCOVER EGYPT  ✦  `.repeat(6);

  if (loading) return (
    <div className="cp-loader" style={{background:"var(--obsidian,#06040C)"}}>
      <Styles color={meta.color} />
      <div className="cp-loader-glyph">{meta.glyph}</div>
      <div className="cp-loader-txt">Loading…</div>
    </div>
  );

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{position:"relative",minHeight:"100vh",background:"var(--obsidian)"}}>
      <Styles color={meta.color} />

      {/* BG GLYPHS */}
      <div className="cp-bg-glyphs">
        {meta.glyphs.map((g,i) => (
          <span key={i} className="cp-bg-glyph" style={{
            top:`${8+(i*13)%78}%`, left:`${4+(i*17)%92}%`,
            fontSize: 18+(i%4)*10, animationDelay:`${i*0.8}s`, animationDuration:`${7+i%5}s`,
          }}>{g}</span>
        ))}
      </div>

      {/* ── NAVBAR ── */}
      <nav className="cp-nav">
        <button className="cp-nav-back" onClick={()=>navigate(-1)}>← {t.back}</button>
        <Link to="/" className="cp-nav-logo">GOLDEN EGYPT<em>Est. 2024</em></Link>

        <div className="cp-nav-center" />

        <div className="cp-nav-r">
          {/* Language switcher */}
          <div className="cp-switcher" onClick={e=>e.stopPropagation()}>
            <button className={`cp-sw-btn${langOpen?" open":""}`} onClick={()=>{setLangOpen(v=>!v);setCurOpen(false);}}>
              {LANGUAGES.find(l=>l.code===lang)?.flag} {LANGUAGES.find(l=>l.code===lang)?.label}
              <span className="arrow">▼</span>
            </button>
            {langOpen && (
              <div className="cp-sw-drop">
                {LANGUAGES.map(l => (
                  <div key={l.code} className={`cp-sw-opt${lang===l.code?" active":""}`}
                    onClick={()=>{setLang(l.code);setLangOpen(false);}}>
                    <span>{l.flag}</span> {l.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Currency switcher */}
          <div className="cp-switcher" onClick={e=>e.stopPropagation()}>
            <button className={`cp-sw-btn${curOpen?" open":""}`} onClick={()=>{setCurOpen(v=>!v);setLangOpen(false);}}>
              {currency} <span className="arrow">▼</span>
            </button>
            {curOpen && (
              <div className="cp-sw-drop" style={{minWidth:180}}>
                {Object.entries(CURRENCIES).map(([code,data]) => (
                  <div key={code} className={`cp-sw-opt${currency===code?" active":""}`}
                    onClick={()=>{setCur(code);setCurOpen(false);}}>
                    <strong style={{minWidth:36,color:"var(--gold)"}}>{data.symbol}</strong> {data.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="cp-nav-wa">💬 {t.whatsapp}</a>
          <Link to="/tours" className="cp-nav-tours">{t.allTours}</Link>
        </div>
      </nav>

      {/* ── STICKY MINI BAR ── */}
      <div className={`cp-sticky${sticky?" visible":""}`}>
        <span className="cp-sticky-name">{cityName} — {filtered.length} {t.experiences}</span>
        <span className="cp-sticky-price">{minPrice>0 ? `${t.from} ${formatPrice(minPrice)}` : ""}</span>
        <button className="cp-sticky-cta" onClick={()=>document.getElementById("cp-grid")?.scrollIntoView({behavior:"smooth"})}>
          Explore Tours
        </button>
      </div>

      {/* ── HERO ── */}
      <section className="cp-hero">
        {meta.heroImages.map((src,i) => (
          <div key={i} className="cp-hero-slide" style={{
            backgroundImage:`url(${src})`, opacity: i===heroIdx ? 1 : 0,
            position:"absolute", inset:"-6%", backgroundSize:"cover", backgroundPosition:"center",
          }} />
        ))}
        <div className="cp-hero-overlay" />
        <div className="cp-hero-color-glow" />
        <div className="cp-hero-grid" />

        {/* Marquee */}
        <div className="cp-hero-band"><span className="cp-hero-band-txt">{bandTxt}</span></div>

        {/* Breadcrumb in hero */}
        <div className="cp-hero-trail">
          <Link to="/">Home</Link><span className="sep">›</span>
          <Link to="/tours">Tours</Link><span className="sep">›</span>
          <span className="cur">{cityName}</span>
        </div>

        {/* Thumbnails */}
        <div className="cp-hero-thumbs">
          {meta.heroImages.map((src,i) => (
            <div key={i} className={`cp-hero-thumb${heroIdx===i?" active":""}`} onClick={()=>setHeroIdx(i)}>
              <img src={src} alt={`View ${i+1}`} />
            </div>
          ))}
        </div>

        {/* Hero content */}
        <div className="cp-hero-content">
          <div className="cp-hero-eyebrow">{meta.glyph} Destination Guide</div>
          <div className="cp-hero-glyph" style={{color:meta.color}}>{meta.glyph}</div>
          <h1 className="cp-hero-city">{cityName}</h1>
          <p className="cp-hero-subtitle">{meta.tagline}</p>

          {/* Pills */}
          <div className="cp-hero-pills">
            <div className="cp-hero-pill">🌍 {meta.country} · {meta.continent}</div>
            {minPrice>0 && <div className="cp-hero-pill">{t.from} <strong>{formatPrice(minPrice)}</strong></div>}
            <div className="cp-hero-pill">✓ {t.freeCancellation}</div>
            <div className="cp-hero-pill">⚡ {t.instantConfirm}</div>
          </div>

          {/* Stats */}
          <div className="cp-hero-stats">
            {[
              {n:`${tours.length}+`, l:t.experiences},
              {n:"5,000+", l:"Happy Travelers"},
              {n:"4.9 ★", l:t.rating},
              {n:minPrice>0?formatPrice(minPrice):"—", l:`${t.from} Price`},
            ].map((s,i) => (
              <div key={i} className="cp-hero-stat">
                <div className="cp-hero-stat-n">{s.n}</div>
                <div className="cp-hero-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="cp-scroll-hint">
          <span>{t.scrollDown}</span>
          <div className="cp-scroll-hint-line" />
        </div>
      </section>

      {/* ── CITY TABS ── */}
      <nav className="cp-city-bar">
        {allCities.map(c => {
          const cm = CITY_META[c.slug] || DEFAULT_META;
          const isActive = c.slug === cityId;
          return (
            <Link key={c._id} to={`/city/${c.slug}`}
              className={`cp-city-tab${isActive?" active":""}`}
              style={isActive ? {borderBottomColor:cm.color, color:cm.color, background:`${cm.color}10`} : {}}>
              {cm.glyph} {c.name}
            </Link>
          );
        })}
      </nav>

      {/* ── HIGHLIGHTS ── */}
      <div className="cp-highlights">
        <span className="cp-hl-label">✦ {t.mustSee}</span>
        {meta.highlights.map(h => <span key={h} className="cp-hl-pill">{h}</span>)}
      </div>

      {/* ── FILTER BAR ── */}
      <div className="cp-filter-bar" id="cp-grid">
        <div className="cp-filter-pills">
          {CATS.filter(c => c==="all" || counts[c]>0).map(c => (
            <button key={c} className={`cp-filter-pill${cat===c?" active":""}`} onClick={()=>setCat(c)}>
              <span>{CAT_ICONS[c]}</span>
              {t.cats[c] || c}
              <span className="cp-filter-pill-count">{counts[c]||0}</span>
            </button>
          ))}
        </div>
        <div className="cp-filter-right">
          <span className="cp-result-count"><strong>{filtered.length}</strong> {t.experiences}</span>
          <select className="cp-sort-select" value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="popular">{t.sortPopular}</option>
            <option value="rating">{t.sortRating}</option>
            <option value="price_asc">{t.sortLow}</option>
            <option value="price_desc">{t.sortHigh}</option>
          </select>
        </div>
      </div>

      {/* ── TOUR GRID ── */}
      <div className="cp-grid-section">
        <div className="cp-grid">
          {filtered.length===0
            ? <div className="cp-empty">
                <div className="cp-empty-glyph">{meta.glyph}</div>
                <div className="cp-empty-txt">{t.noTours}</div>
              </div>
            : filtered.map((tour,i) => (
                <TourCard key={tour._id} tour={tour} index={i} meta={meta}
                  onBook={setBook} onView={id=>navigate(`/tour/${id}`)}
                  t={t} formatPrice={formatPrice} />
              ))
          }
        </div>
      </div>

      {/* ── OTHER CITIES ── */}
      {allCities.filter(c=>c.slug!==cityId).length>0 && (
        <section className="cp-cities-section">
          <div className="cp-section-header">
            <span className="cp-section-title">✦ {t.moreEgypt}</span>
            <div className="cp-section-line" />
          </div>
          <div className="cp-cities-grid">
            {allCities.filter(c=>c.slug!==cityId).map(c => {
              const cm = CITY_META[c.slug] || DEFAULT_META;
              return (
                <Link key={c._id} to={`/city/${c.slug}`} className="cp-city-card">
                  <img src={cm.heroImages?.[0]||`https://placehold.co/200x130/0A0812/C9A84C?text=${c.name}`} alt={c.name}
                    onError={e=>{e.target.src=`https://placehold.co/200x130/0A0812/C9A84C?text=${c.name}`;}} />
                  <div className="cp-city-card-ov" />
                  <div style={{position:"absolute",inset:0,background:`radial-gradient(circle at 0% 100%,${cm.color}22,transparent 65%)`}} />
                  <div className="cp-city-card-info">
                    <div className="cp-city-card-glyph">{cm.glyph}</div>
                    <div className="cp-city-card-name" style={{color:cm.color}}>{c.name}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* ── CONTACT ── */}
      <ContactSection t={t} cityName={cityName} meta={meta} />

      {/* ── FOOTER ── */}
      <Footer t={t} allCities={allCities} meta={meta} />

      {/* ── FLOATING ACTIONS ── */}
      <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="cp-float-wa">
        💬 {t.whatsapp}
      </a>
      <button className="cp-float-top" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>▲</button>

      {/* ── BOOKING MODAL ── */}
      {bookTour && (
        <BookingModal tour={bookTour} cityName={cityName} onClose={()=>setBook(null)}
          t={t} formatPrice={formatPrice} />
      )}
    </div>
  );
}