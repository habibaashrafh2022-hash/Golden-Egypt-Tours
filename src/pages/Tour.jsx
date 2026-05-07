// ============================================================
//  Tour.jsx — Golden Egypt Tours
//  Ultra-Pro Pharaonic Tour Detail Page
//  Route: /tour/:tourId
//  Data source: API (http://localhost:5000/api)
//  Features: Multi-language, Real Images, API Integration
// ============================================================

import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTourById } from "../api/index";

// ─────────────────────────────────────────────────────────────
//  TRANSLATIONS
// ─────────────────────────────────────────────────────────────
const TRANSLATIONS = {
  en: {
    back: "Back",
    bookNow: "Book Now",
    whatsapp: "WhatsApp",
    fromPrice: "From",
    perPerson: "per person",
    save: "Save",
    selectDate: "Select Travel Date",
    adults: "Adults",
    children: "Children",
    adult: "Adult",
    child: "Child",
    total: "Total",
    bookTour: "✦  Book This Tour Now",
    bookWhatsapp: "💬  Book via WhatsApp",
    securePayment: "Secure Payment",
    freeCancel: "Free Cancel",
    instantConfirm: "Instant Confirm",
    bestPrice: "Best Price",
    overview: "Overview",
    includes: "Includes",
    itinerary: "Itinerary",
    reviews: "Reviews",
    tourHighlights: "Tour Highlights",
    duration: "Duration",
    groupSize: "Group Size",
    difficulty: "Difficulty",
    minAge: "Min. Age",
    allAges: "All ages",
    years: "+ years",
    meetingPoint: "📍 Meeting Point",
    cancellation: "✓ Cancellation Policy",
    whatsIncluded: "What's Included",
    notIncluded: "Not Included",
    detailedItinerary: "Detailed Itinerary",
    outOf: "out of 5.0",
    guideQuality: "Guide Quality",
    valueForMoney: "Value for Money",
    organisation: "Organisation",
    experience: "Experience",
    transport: "Transport",
    topRated: "✦ Top Rated",
    tourNotFound: "TOUR NOT FOUND",
    returnHome: "← Return Home",
    youSave: "You save",
    today: "today",
    moreIn: "More in",
    viewAll: "View All ›",
    youMayLove: "✦ You May Also Love",
    hotelPickup: "Hotel Pickup",
    included: "Included",
    entryTickets: "Entry Tickets",
    languages: "Languages",
    multiDayPackage: "Multi-Day Package",
    dayExperience: "Day Experience",
    egypt: "Egypt",
    maxPeople: "Max",
    people: "people",
    verifiedReviews: "verified reviews",
    privateLuxury: "Private Luxury Experiences",
    whatsappUs: "WhatsApp Us",
    view: "View ›",
    pax: "pax",
    bookNowEmoji: "🎫 Book Now",
    yousave: "🎉 You save $",
  },
  ar: {
    back: "رجوع",
    bookNow: "احجز الآن",
    whatsapp: "واتساب",
    fromPrice: "من",
    perPerson: "لكل شخص",
    save: "وفّر",
    selectDate: "اختر تاريخ السفر",
    adults: "بالغين",
    children: "أطفال",
    adult: "بالغ",
    child: "طفل",
    total: "الإجمالي",
    bookTour: "✦  احجز هذه الجولة الآن",
    bookWhatsapp: "💬  احجز عبر واتساب",
    securePayment: "دفع آمن",
    freeCancel: "إلغاء مجاني",
    instantConfirm: "تأكيد فوري",
    bestPrice: "أفضل سعر",
    overview: "نظرة عامة",
    includes: "يشمل",
    itinerary: "البرنامج",
    reviews: "التقييمات",
    tourHighlights: "أبرز معالم الجولة",
    duration: "المدة",
    groupSize: "حجم المجموعة",
    difficulty: "مستوى الصعوبة",
    minAge: "الحد الأدنى للسن",
    allAges: "جميع الأعمار",
    years: "+ سنوات",
    meetingPoint: "📍 نقطة التجمع",
    cancellation: "✓ سياسة الإلغاء",
    whatsIncluded: "ما يشمله البرنامج",
    notIncluded: "غير مشمول",
    detailedItinerary: "البرنامج التفصيلي",
    outOf: "من 5.0",
    guideQuality: "جودة المرشد",
    valueForMoney: "القيمة مقابل السعر",
    organisation: "التنظيم",
    experience: "التجربة",
    transport: "المواصلات",
    topRated: "✦ الأعلى تقييماً",
    tourNotFound: "الجولة غير موجودة",
    returnHome: "← العودة للرئيسية",
    youSave: "توفّر",
    today: "اليوم",
    moreIn: "المزيد في",
    viewAll: "عرض الكل ›",
    youMayLove: "✦ قد يعجبك أيضاً",
    hotelPickup: "التوصيل من الفندق",
    included: "مشمول",
    entryTickets: "تذاكر الدخول",
    languages: "اللغات",
    multiDayPackage: "باقة متعددة الأيام",
    dayExperience: "تجربة يوم كامل",
    egypt: "مصر",
    maxPeople: "حتى",
    people: "أشخاص",
    verifiedReviews: "تقييم موثق",
    privateLuxury: "تجارب فاخرة خاصة",
    whatsappUs: "تواصل عبر واتساب",
    view: "عرض ›",
    pax: "شخص",
    bookNowEmoji: "🎫 احجز الآن",
    yousave: "🎉 توفّر $",
  },
  fr: {
    back: "Retour",
    bookNow: "Réserver",
    whatsapp: "WhatsApp",
    fromPrice: "À partir de",
    perPerson: "par personne",
    save: "Économisez",
    selectDate: "Choisir la date",
    adults: "Adultes",
    children: "Enfants",
    adult: "Adulte",
    child: "Enfant",
    total: "Total",
    bookTour: "✦  Réserver cette visite",
    bookWhatsapp: "💬  Réserver via WhatsApp",
    securePayment: "Paiement sécurisé",
    freeCancel: "Annulation gratuite",
    instantConfirm: "Confirmation immédiate",
    bestPrice: "Meilleur prix",
    overview: "Aperçu",
    includes: "Inclus",
    itinerary: "Itinéraire",
    reviews: "Avis",
    tourHighlights: "Points forts",
    duration: "Durée",
    groupSize: "Taille du groupe",
    difficulty: "Difficulté",
    minAge: "Âge minimum",
    allAges: "Tous âges",
    years: "+ ans",
    meetingPoint: "📍 Point de rendez-vous",
    cancellation: "✓ Politique d'annulation",
    whatsIncluded: "Ce qui est inclus",
    notIncluded: "Non inclus",
    detailedItinerary: "Itinéraire détaillé",
    outOf: "sur 5.0",
    guideQuality: "Qualité du guide",
    valueForMoney: "Rapport qualité-prix",
    organisation: "Organisation",
    experience: "Expérience",
    transport: "Transport",
    topRated: "✦ Mieux noté",
    tourNotFound: "VISITE INTROUVABLE",
    returnHome: "← Retour à l'accueil",
    youSave: "Vous économisez",
    today: "aujourd'hui",
    moreIn: "Plus à",
    viewAll: "Voir tout ›",
    youMayLove: "✦ Vous aimerez aussi",
    hotelPickup: "Transfert hôtel",
    included: "Inclus",
    entryTickets: "Billets d'entrée",
    languages: "Langues",
    multiDayPackage: "Forfait multi-jours",
    dayExperience: "Excursion d'une journée",
    egypt: "Égypte",
    maxPeople: "Max",
    people: "personnes",
    verifiedReviews: "avis vérifiés",
    privateLuxury: "Expériences privées de luxe",
    whatsappUs: "Contactez-nous",
    view: "Voir ›",
    pax: "pers.",
    bookNowEmoji: "🎫 Réserver",
    yousave: "🎉 Vous économisez $",
  },
  es: {
    back: "Volver",
    bookNow: "Reservar",
    whatsapp: "WhatsApp",
    fromPrice: "Desde",
    perPerson: "por persona",
    save: "Ahorra",
    selectDate: "Seleccionar fecha",
    adults: "Adultos",
    children: "Niños",
    adult: "Adulto",
    child: "Niño",
    total: "Total",
    bookTour: "✦  Reservar este tour",
    bookWhatsapp: "💬  Reservar por WhatsApp",
    securePayment: "Pago seguro",
    freeCancel: "Cancelación gratuita",
    instantConfirm: "Confirmación inmediata",
    bestPrice: "Mejor precio",
    overview: "Resumen",
    includes: "Incluye",
    itinerary: "Itinerario",
    reviews: "Opiniones",
    tourHighlights: "Aspectos destacados",
    duration: "Duración",
    groupSize: "Tamaño del grupo",
    difficulty: "Dificultad",
    minAge: "Edad mínima",
    allAges: "Todas las edades",
    years: "+ años",
    meetingPoint: "📍 Punto de encuentro",
    cancellation: "✓ Política de cancelación",
    whatsIncluded: "Qué está incluido",
    notIncluded: "No incluido",
    detailedItinerary: "Itinerario detallado",
    outOf: "de 5.0",
    guideQuality: "Calidad del guía",
    valueForMoney: "Relación calidad-precio",
    organisation: "Organización",
    experience: "Experiencia",
    transport: "Transporte",
    topRated: "✦ Mejor valorado",
    tourNotFound: "TOUR NO ENCONTRADO",
    returnHome: "← Volver al inicio",
    youSave: "Ahorras",
    today: "hoy",
    moreIn: "Más en",
    viewAll: "Ver todo ›",
    youMayLove: "✦ También te puede gustar",
    hotelPickup: "Recogida en hotel",
    included: "Incluido",
    entryTickets: "Entradas",
    languages: "Idiomas",
    multiDayPackage: "Paquete multi-día",
    dayExperience: "Excursión de un día",
    egypt: "Egipto",
    maxPeople: "Máx.",
    people: "personas",
    verifiedReviews: "opiniones verificadas",
    privateLuxury: "Experiencias privadas de lujo",
    whatsappUs: "Contáctenos",
    view: "Ver ›",
    pax: "pers.",
    bookNowEmoji: "🎫 Reservar",
    yousave: "🎉 Ahorras $",
  },
};
const LANG_FLAGS = { en: "🇬🇧", ar: "🇪🇬", fr: "🇫🇷", es: "🇪🇸" };
const LANG_NAMES = { en: "EN", ar: "عر", fr: "FR", es: "ES" };

// ─────────────────────────────────────────────────────────────
//  FALLBACK IMAGES per category
// ─────────────────────────────────────────────────────────────
const CATEGORY_IMAGES = {
  "Tour packages": [
    "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=80",
    "https://images.unsplash.com/photo-1608037521244-f1c6c7635194?w=1200&q=80",
    "https://images.unsplash.com/photo-1539768942893-daf2293f73e8?w=1200&q=80",
  ],
  "Guided tours and free tours": [
    "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80",
    "https://images.unsplash.com/photo-1590090304945-8f2a6a3f1e7d?w=1200&q=80",
    "https://images.unsplash.com/photo-1600267204070-6b6d1e3d4e51?w=1200&q=80",
  ],
  "Day trip": [
    "https://images.unsplash.com/photo-1539768942893-daf2293f73e8?w=1200&q=80",
    "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=80",
    "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80",
  ],
  "Transfers": [
    "https://images.unsplash.com/photo-1553997993-cc5b36eeb5d3?w=1200&q=80",
    "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80",
    "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=80",
  ],
  "default": [
    "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=80",
    "https://images.unsplash.com/photo-1608037521244-f1c6c7635194?w=1200&q=80",
    "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80",
    "https://images.unsplash.com/photo-1539768942893-daf2293f73e8?w=1200&q=80",
  ],
};

const getImages = (tour) => {
  if (tour?.images?.length) return tour.images;
  return CATEGORY_IMAGES[tour?.category] || CATEGORY_IMAGES["default"];
};

// ─────────────────────────────────────────────────────────────
//  GLOBAL STYLES
// ─────────────────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&display=swap');

    :root {
      --gold:#C9A84C; --gold-light:#E8C96D; --gold-pale:#F5E6B8;
      --gold-dim:rgba(201,168,76,0.12); --gold-dim2:rgba(201,168,76,0.22);
      --gold-border:rgba(201,168,76,0.22);
      --obsidian:#07050D; --deep:#0C0A14; --surface:#121019;
      --surface2:#191624; --surface3:#201D2E;
      --text:#EDE8D9; --text-dim:rgba(237,232,217,0.75); --muted:#7A7264;
      --fd:'Cinzel Decorative',serif; --ft:'Cinzel',serif; --fb:'Cormorant Garamond',Georgia,serif;
    }
    *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{background:var(--obsidian);color:var(--text);font-family:var(--fb);overflow-x:hidden}
    ::-webkit-scrollbar{width:5px}
    ::-webkit-scrollbar-track{background:var(--obsidian)}
    ::-webkit-scrollbar-thumb{background:var(--gold-border);border-radius:3px}
    ::-webkit-scrollbar-thumb:hover{background:var(--gold)}

    .tp-bg{position:fixed;inset:0;pointer-events:none;z-index:0;
      background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Ctext x='8' y='50' font-size='28' fill='rgba(201,168,76,0.025)'%3E𓂀𓃭𓆑%3C/text%3E%3Ctext x='8' y='100' font-size='28' fill='rgba(201,168,76,0.018)'%3E𓇋𓅓𓂋%3C/text%3E%3Ctext x='8' y='148' font-size='28' fill='rgba(201,168,76,0.025)'%3E𓏏𓈖𓃀%3C/text%3E%3C/svg%3E");
      background-size:160px 160px}

    /* LANG SWITCHER */
    .tp-lang{display:flex;gap:4px;align-items:center}
    .tp-lang-btn{background:transparent;border:1px solid transparent;border-radius:5px;
      color:var(--muted);font-family:var(--ft);font-size:9px;letter-spacing:1px;
      padding:5px 8px;cursor:pointer;transition:all .2s;text-transform:uppercase}
    .tp-lang-btn:hover{border-color:var(--gold-border);color:var(--gold)}
    .tp-lang-btn.on{background:var(--gold-dim);border-color:var(--gold-border);color:var(--gold)}

    /* NAVBAR */
    .tp-nav{position:fixed;top:0;left:0;right:0;z-index:990;height:68px;
      display:flex;align-items:center;padding:0 48px;gap:14px;
      background:rgba(7,5,13,0.97);backdrop-filter:blur(24px);
      border-bottom:1px solid var(--gold-border)}
    .tp-nav::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;
      background:linear-gradient(90deg,transparent,var(--gold),var(--gold-light),var(--gold),transparent);opacity:.5}
    .tp-back{display:flex;align-items:center;gap:7px;background:var(--gold-dim);border:1px solid var(--gold-border);color:var(--gold);border-radius:6px;
      padding:8px 16px;font-family:var(--ft);font-size:9px;letter-spacing:2px;
      text-transform:uppercase;cursor:pointer;transition:all .2s;text-decoration:none;white-space:nowrap}
    .tp-back:hover{background:var(--gold-dim2)}
    .tp-brand{font-family:var(--fd);font-size:13px;color:var(--gold);letter-spacing:2px;font-weight:700}
    .tp-brand span{font-family:var(--ft);font-size:9px;color:var(--muted);letter-spacing:3px;margin-left:10px}
    .tp-nav-r{margin-left:auto;display:flex;gap:10px;align-items:center}
    .tp-wa-nav{display:flex;align-items:center;gap:7px;background:#25D366;color:#fff;border:none;border-radius:6px;padding:9px 16px;font-family:var(--ft);font-size:9px;letter-spacing:1.5px;font-weight:700;text-transform:uppercase;cursor:pointer;text-decoration:none;transition:all .2s}
    .tp-wa-nav:hover{background:#1fb558}
    .tp-booknow{background:linear-gradient(135deg,var(--gold),var(--gold-light));color:#0B0900;border:none;border-radius:6px;padding:9px 22px;font-family:var(--ft);font-size:9px;letter-spacing:2px;font-weight:700;text-transform:uppercase;cursor:pointer;box-shadow:0 4px 20px rgba(201,168,76,.3);transition:all .25s}
    .tp-booknow:hover{box-shadow:0 6px 30px rgba(201,168,76,.5);transform:translateY(-1px)}

    /* STICKY BAR */
    .tp-sticky{position:fixed;top:68px;left:0;right:0;z-index:980;height:52px;
      display:flex;align-items:center;gap:18px;padding:0 48px;
      background:rgba(7,5,13,0.96);backdrop-filter:blur(20px);
      border-bottom:1px solid var(--gold-border);
      transform:translateY(-100%);transition:transform .3s ease}
    .tp-sticky.on{transform:translateY(0)}
    .tp-sticky-name{font-family:var(--ft);font-size:12px;color:var(--text);letter-spacing:.5px;
      overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}
    .tp-sticky-price{font-family:var(--fd);font-size:18px;color:var(--gold);font-weight:700;white-space:nowrap}
    .tp-sticky-btn{background:linear-gradient(135deg,var(--gold),var(--gold-light));color:#0B0900;
      border:none;border-radius:6px;padding:8px 20px;font-family:var(--ft);font-size:9px;
      letter-spacing:2px;font-weight:700;cursor:pointer;text-transform:uppercase;white-space:nowrap}

    /* HERO */
    .tp-hero{position:relative;height:100vh;min-height:580px;max-height:860px;
      margin-top:68px;overflow:hidden;display:flex;align-items:flex-end}
    .tp-hero-bg{position:absolute;inset:0;background-size:cover;background-position:center;
      animation:kbz 14s ease-in-out infinite alternate}
    @keyframes kbz{0%{transform:scale(1);filter:brightness(.82)}100%{transform:scale(1.07);filter:brightness(.9)}}
    .tp-hero-grid{position:absolute;inset:0;pointer-events:none;z-index:1;
      background:repeating-linear-gradient(90deg,transparent,transparent 99px,rgba(201,168,76,.04) 99px,rgba(201,168,76,.04) 100px),
                 repeating-linear-gradient(0deg,transparent,transparent 99px,rgba(201,168,76,.04) 99px,rgba(201,168,76,.04) 100px)}
    .tp-hero-ov{position:absolute;inset:0;z-index:2;
      background:linear-gradient(to top,rgba(7,5,13,1) 0%,rgba(7,5,13,.65) 35%,rgba(7,5,13,.1) 70%,transparent 100%),
                 linear-gradient(to right,rgba(7,5,13,.65) 0%,rgba(7,5,13,.15) 45%,transparent 75%)}
    .tp-band{position:absolute;top:28%;left:0;right:0;z-index:3;height:44px;pointer-events:none;
      border-top:1px solid rgba(201,168,76,.15);border-bottom:1px solid rgba(201,168,76,.15);
      background:rgba(7,5,13,.28);display:flex;align-items:center;overflow:hidden}
    .tp-band-txt{font-family:var(--ft);font-size:10px;letter-spacing:7px;
      color:rgba(201,168,76,.4);white-space:nowrap;text-transform:uppercase;
      animation:marquee 28s linear infinite}
    @keyframes marquee{0%{transform:translateX(40vw)}100%{transform:translateX(-100%)}}
    .tp-hero-badges{position:absolute;top:24px;left:48px;z-index:5;display:flex;gap:8px;flex-wrap:wrap}
    .tp-hbadge{background:rgba(7,5,13,.85);backdrop-filter:blur(12px);
      border:1px solid var(--gold-border);border-radius:4px;padding:5px 12px;
      font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--gold);text-transform:uppercase;
      animation:fadeD .5s ease both}
    .tp-hbadge.hot{background:rgba(180,35,35,.8);border-color:rgba(220,60,60,.4);color:#fff}
    .tp-hbadge.new{background:rgba(28,90,55,.8);border-color:rgba(42,160,100,.4);color:#fff}
    @keyframes fadeD{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
    .tp-hero-acts{position:absolute;top:24px;right:48px;z-index:5;display:flex;gap:8px}
    .tp-act{width:38px;height:38px;border-radius:8px;background:rgba(7,5,13,.82);
      backdrop-filter:blur(10px);border:1px solid var(--gold-border);color:var(--gold);
      display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:15px;
      transition:all .2s}
    .tp-act:hover{background:var(--gold-dim2);border-color:var(--gold)}
    .tp-thumbs{position:absolute;bottom:200px;right:28px;z-index:5;display:flex;flex-direction:column;gap:8px}
    .tp-thumb{width:72px;height:52px;border-radius:6px;overflow:hidden;border:2px solid transparent;
      cursor:pointer;opacity:.6;transition:all .25s;flex-shrink:0}
    .tp-thumb img{width:100%;height:100%;object-fit:cover;display:block}
    .tp-thumb:hover,.tp-thumb.on{opacity:1;border-color:var(--gold);box-shadow:0 0 18px rgba(201,168,76,.4)}
    .tp-hero-cnt{position:relative;z-index:4;padding:0 48px 52px;width:100%;max-width:820px;
      animation:fadeU .8s ease both}
    @keyframes fadeU{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
    .tp-hero-ey{font-family:var(--ft);font-size:9px;letter-spacing:5px;color:var(--gold);
      text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:12px}
    .tp-hero-ey::before{content:'';width:30px;height:1px;background:var(--gold)}
    .tp-htitle{font-family:var(--fd);font-size:clamp(28px,4.8vw,62px);font-weight:900;line-height:1.08;
      margin-bottom:10px;
      background:linear-gradient(135deg,#F0DC8A 0%,#C9A84C 35%,#FFE599 65%,#B8902E 100%);
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      filter:drop-shadow(0 3px 24px rgba(201,168,76,.35))}
    .tp-htagline{font-family:var(--fb);font-style:italic;font-size:clamp(16px,2vw,22px);
      color:var(--text-dim);font-weight:300;margin-bottom:22px;letter-spacing:.5px}
    .tp-hmeta{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:22px}
    .tp-hmi{display:flex;align-items:center;gap:6px;font-family:var(--ft);font-size:9px;
      letter-spacing:1.5px;color:var(--text-dim);text-transform:uppercase}
    .tp-hmi .i{font-size:13px}
    .tp-hsep{width:3px;height:3px;border-radius:50%;background:var(--gold-border)}
    .tp-hrating{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
    .tp-hstars{color:var(--gold);font-size:16px;letter-spacing:2px}
    .tp-hscore{font-family:var(--fd);font-size:22px;color:var(--gold);font-weight:700}
    .tp-hcount{font-family:var(--fb);font-size:15px;color:var(--muted)}
    .tp-htop{background:var(--gold-dim);border:1px solid var(--gold-border);border-radius:4px;
      padding:3px 10px;font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--gold);text-transform:uppercase}

    /* BREADCRUMB */
    .tp-crumb{padding:12px 48px;background:var(--surface);border-bottom:1px solid var(--gold-border);
      display:flex;align-items:center;gap:8px;font-family:var(--ft);font-size:9px;
      letter-spacing:1.5px;color:var(--muted);position:relative;z-index:5}
    .tp-crumb a{color:var(--muted);text-decoration:none;transition:color .2s}
    .tp-crumb a:hover{color:var(--gold)}
    .tp-crumb .sep{color:rgba(201,168,76,.25)}
    .tp-crumb .cur{color:var(--gold);max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

    /* QUICK INFO BAR */
    .tp-qbar{display:flex;background:var(--surface2);border-bottom:1px solid var(--gold-border);
      overflow-x:auto;position:relative;z-index:5}
    .tp-qi{flex:1;min-width:130px;padding:18px 18px;display:flex;align-items:center;gap:11px;
      border-right:1px solid var(--gold-border);transition:background .2s}
    .tp-qi:last-child{border-right:none}
    .tp-qi:hover{background:var(--gold-dim)}
    .tp-qi-ic{font-size:20px;flex-shrink:0}
    .tp-qi-l{font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;margin-bottom:3px}
    .tp-qi-v{font-family:var(--fb);font-size:15px;color:var(--text)}

    /* BODY LAYOUT */
    .tp-body{display:grid;grid-template-columns:1fr 380px;gap:48px;
      padding:56px 48px;align-items:start;position:relative;z-index:5;
      max-width:1400px;margin:0 auto}
    @media(max-width:1100px){
      .tp-body{grid-template-columns:1fr;padding:36px 22px}
      .tp-thumbs{display:none}
      .tp-hero-badges,.tp-hero-acts{left:20px;right:20px}
      .tp-hero-cnt{padding:0 22px 48px}
      .tp-crumb,.tp-sticky{padding-left:22px;padding-right:22px}
      .tp-nav{padding:0 20px}
    }

    /* TABS */
    .tp-tabs{display:flex;border-bottom:1px solid var(--gold-border);margin-bottom:36px;overflow-x:auto}
    .tp-tab{background:transparent;border:none;border-bottom:2px solid transparent;
      color:var(--muted);font-family:var(--ft);font-size:9px;letter-spacing:2.5px;
      padding:14px 22px;cursor:pointer;text-transform:uppercase;margin-bottom:-1px;
      transition:all .2s;white-space:nowrap}
    .tp-tab.on{color:var(--gold);border-bottom-color:var(--gold)}
    .tp-tab:hover:not(.on){color:rgba(201,168,76,.7)}
    .tp-panel{display:none;animation:panelIn .35s ease both}
    .tp-panel.on{display:block}
    @keyframes panelIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}

    /* OVERVIEW */
    .tp-main-title{font-family:var(--fd);font-size:clamp(20px,3vw,34px);color:var(--text);
      font-weight:700;line-height:1.2;margin-bottom:18px}
    .tp-rrow{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:28px}
    .tp-stars{color:var(--gold);font-size:17px;letter-spacing:2px}
    .tp-score{font-family:var(--fd);font-size:26px;color:var(--gold);font-weight:700}
    .tp-rcount{font-family:var(--fb);font-size:16px;color:var(--muted)}
    .tp-top-tag{background:var(--gold-dim);border:1px solid var(--gold-border);border-radius:4px;
      padding:4px 12px;font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--gold);text-transform:uppercase}
    .tp-body-txt{font-family:var(--fb);font-size:18px;color:var(--text-dim);line-height:1.85;
      margin-bottom:36px;font-weight:300}
    .tp-body-txt::first-letter{font-size:50px;float:left;line-height:.82;margin:4px 12px 0 0;
      color:var(--gold);font-family:var(--fd);font-weight:700}
    .tp-sec-h{font-family:var(--ft);font-size:10px;letter-spacing:3.5px;color:var(--gold);
      text-transform:uppercase;margin-bottom:18px;display:flex;align-items:center;gap:14px}
    .tp-sec-h::after{content:'';flex:1;height:1px;background:linear-gradient(to right,var(--gold-border),transparent)}
    .tp-hls{margin-bottom:36px}
    .tp-hl{display:flex;align-items:flex-start;gap:13px;padding:12px 0;
      border-bottom:1px solid rgba(201,168,76,.06);transition:all .2s;border-radius:4px}
    .tp-hl:last-child{border-bottom:none}
    .tp-hl:hover{padding-left:6px}
    .tp-hl-ic{color:var(--gold);font-size:11px;margin-top:5px;flex-shrink:0}
    .tp-hl-tx{font-family:var(--fb);font-size:17px;color:var(--text-dim);line-height:1.5}
    .tp-icards{display:grid;grid-template-columns:1fr 1fr;gap:13px;margin-bottom:28px}
    .tp-icard{background:var(--surface2);border:1px solid var(--gold-border);border-radius:10px;
      padding:16px 18px;transition:all .2s}
    .tp-icard:hover{border-color:var(--gold);background:var(--gold-dim)}
    .tp-icard-ic{font-size:20px;margin-bottom:8px}
    .tp-icard-l{font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;margin-bottom:4px}
    .tp-icard-v{font-family:var(--fb);font-size:16px;color:var(--text)}
    .tp-pblock{padding:18px 20px;border-radius:10px;margin-bottom:14px;border:1px solid}
    .tp-pblock.info{background:rgba(201,168,76,.05);border-color:var(--gold-border)}
    .tp-pblock.ok{background:rgba(42,160,100,.06);border-color:rgba(42,160,100,.25)}
    .tp-pblock-l{font-family:var(--ft);font-size:9px;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px}
    .tp-pblock.info .tp-pblock-l{color:var(--gold)}
    .tp-pblock.ok .tp-pblock-l{color:#4CAF82}
    .tp-pblock-t{font-family:var(--fb);font-size:16px;color:var(--text-dim)}

    /* INCLUDES */
    .tp-incgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:32px}
    .tp-inc{display:flex;align-items:center;gap:12px;background:var(--surface2);
      border:1px solid var(--gold-border);border-radius:10px;padding:14px 16px;transition:all .2s}
    .tp-inc:hover{border-color:var(--gold);background:var(--gold-dim)}
    .tp-inc-ic{font-size:20px;flex-shrink:0}
    .tp-inc-l{font-family:var(--ft);font-size:9px;letter-spacing:1px;color:var(--text);text-transform:uppercase}
    .tp-exclist{list-style:none;display:flex;flex-direction:column;gap:10px}
    .tp-exc{display:flex;align-items:flex-start;gap:10px;font-family:var(--fb);font-size:16px;color:var(--muted);line-height:1.5}
    .tp-exc::before{content:'✕';color:rgba(200,70,70,.7);font-size:11px;margin-top:3px;flex-shrink:0}

    /* ITINERARY */
    .tp-itin{display:flex;flex-direction:column}
    .tp-step{display:flex;gap:20px;padding-bottom:32px;position:relative}
    .tp-step:last-child{padding-bottom:0}
    .tp-step:last-child .tp-step-line{display:none}
    .tp-step-left{display:flex;flex-direction:column;align-items:center;width:48px;flex-shrink:0}
    .tp-step-marker{width:48px;height:48px;border-radius:50%;background:var(--gold-dim);
      border:2px solid var(--gold);display:flex;align-items:center;justify-content:center;
      font-size:18px;box-shadow:0 0 20px rgba(201,168,76,.18);transition:all .3s;flex-shrink:0}
    .tp-step:hover .tp-step-marker{background:var(--gold-dim2);box-shadow:0 0 30px rgba(201,168,76,.32)}
    .tp-step-line{width:1px;flex:1;background:linear-gradient(to bottom,var(--gold-border),transparent);margin-top:8px}
    .tp-step-cnt{flex:1;padding-top:8px}
    .tp-step-time{font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:5px}
    .tp-step-title{font-family:var(--ft);font-size:14px;color:var(--text);font-weight:600;letter-spacing:.5px;margin-bottom:8px}
    .tp-step-desc{font-family:var(--fb);font-size:16px;color:var(--text-dim);line-height:1.65;margin-bottom:10px}
    .tp-step-tags{display:flex;gap:6px;flex-wrap:wrap}
    .tp-stag{background:var(--gold-dim);border:1px solid var(--gold-border);border-radius:12px;
      padding:3px 10px;font-family:var(--ft);font-size:7px;letter-spacing:1.5px;
      color:rgba(201,168,76,.85);text-transform:uppercase}

    /* REVIEWS */
    .tp-rev-sum{display:flex;gap:28px;align-items:center;background:var(--surface2);
      border:1px solid var(--gold-border);border-radius:14px;padding:28px;margin-bottom:28px}
    .tp-rbig{font-family:var(--fd);font-size:64px;color:var(--gold);font-weight:700;line-height:1}
    .tp-rof{font-family:var(--ft);font-size:9px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;margin-top:4px}
    .tp-rbig-stars{color:var(--gold);font-size:18px;letter-spacing:2px;margin-top:6px}
    .tp-rtotal{font-family:var(--fb);font-size:14px;color:var(--muted);font-style:italic;margin-top:4px}
    .tp-rbars{flex:1;display:flex;flex-direction:column;gap:9px}
    .tp-rbar-row{display:flex;align-items:center;gap:12px}
    .tp-rbar-l{font-family:var(--ft);font-size:8px;letter-spacing:1px;color:var(--muted);text-transform:uppercase;min-width:92px}
    .tp-rbar-track{flex:1;height:5px;background:rgba(255,255,255,.07);border-radius:3px;overflow:hidden}
    .tp-rbar-fill{height:100%;border-radius:3px;background:linear-gradient(to right,var(--gold),var(--gold-light));transition:width .8s ease}
    .tp-rbar-pct{font-family:var(--ft);font-size:9px;color:var(--gold);min-width:34px;text-align:right}
    .tp-revlist{display:flex;flex-direction:column;gap:16px}
    .tp-revc{background:var(--surface2);border:1px solid var(--gold-border);border-radius:12px;
      padding:22px 24px;background-image:radial-gradient(ellipse at top right,rgba(201,168,76,.05),transparent 60%);
      transition:border-color .2s}
    .tp-revc:hover{border-color:rgba(201,168,76,.4)}
    .tp-rev-head{display:flex;align-items:center;gap:12px;margin-bottom:14px}
    .tp-rev-av{width:42px;height:42px;border-radius:50%;border:1px solid var(--gold-border);
      background:var(--gold-dim);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}
    .tp-rev-name{font-family:var(--ft);font-size:11px;color:var(--text);font-weight:600}
    .tp-rev-loc{font-family:var(--fb);font-size:13px;color:var(--muted);font-style:italic;margin-top:1px}
    .tp-rev-stars{color:var(--gold);font-size:12px;letter-spacing:1px}
    .tp-rev-date{margin-left:auto;font-family:var(--ft);font-size:8px;letter-spacing:1px;color:var(--muted);text-transform:uppercase;white-space:nowrap}
    .tp-rev-txt{font-family:var(--fb);font-size:16px;color:var(--text-dim);line-height:1.7}
    .tp-rev-q{font-size:36px;color:rgba(201,168,76,.2);font-family:Georgia;line-height:1;margin-bottom:8px}

    /* BOOKING WIDGET */
    .tp-widget{position:sticky;top:84px;background:var(--surface);border:1px solid var(--gold-border);
      border-radius:16px;overflow:hidden;
      box-shadow:0 24px 80px rgba(0,0,0,.6),0 0 0 1px rgba(201,168,76,.05);
      background-image:radial-gradient(ellipse at top,rgba(201,168,76,.07),transparent 60%)}
    .tp-wh{background:linear-gradient(135deg,#B8902E 0%,var(--gold) 40%,var(--gold-light) 70%,#C9A84C 100%);
      padding:22px 24px;position:relative;overflow:hidden}
    .tp-wh::before{content:'𓂀';position:absolute;right:-8px;top:-8px;font-size:80px;opacity:.07;color:#0B0900;font-family:serif}
    .tp-wfrom{font-family:var(--ft);font-size:8px;letter-spacing:3px;color:rgba(11,9,0,.6);text-transform:uppercase}
    .tp-wprice{font-family:var(--fd);font-size:46px;color:#0B0900;font-weight:900;line-height:1}
    .tp-wpp{font-family:var(--fb);font-size:14px;color:rgba(11,9,0,.55);margin-top:2px}
    .tp-wold{font-family:var(--fb);font-size:14px;color:rgba(11,9,0,.5);text-decoration:line-through;margin-left:8px}
    .tp-wsave{display:inline-block;background:rgba(11,9,0,.15);border-radius:4px;padding:2px 8px;
      font-family:var(--ft);font-size:8px;letter-spacing:1px;color:rgba(11,9,0,.7);text-transform:uppercase;margin-left:8px}
    .tp-wrating{display:flex;align-items:center;gap:8px;margin-top:10px}
    .tp-wstars{color:rgba(11,9,0,.6);font-size:13px}
    .tp-wrtxt{font-family:var(--ft);font-size:9px;color:rgba(11,9,0,.6);letter-spacing:1px}
    .tp-wb{padding:24px}
    .tp-wf{margin-bottom:14px}
    .tp-wfl{font-family:var(--ft);font-size:8px;letter-spacing:2.5px;color:var(--gold);text-transform:uppercase;margin-bottom:6px}
    .tp-wfi{width:100%;background:rgba(255,255,255,.05);border:1px solid var(--gold-border);
      border-radius:8px;color:var(--text);padding:12px 14px;font-family:var(--fb);font-size:16px;
      outline:none;transition:border-color .2s;color-scheme:dark}
    .tp-wfi:focus{border-color:var(--gold);background:rgba(201,168,76,.04)}
    .tp-wfrow{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .tp-wfs{width:100%;background:rgba(255,255,255,.05);border:1px solid var(--gold-border);
      border-radius:8px;color:var(--text);padding:12px 14px;font-family:var(--fb);font-size:15px;
      cursor:pointer;outline:none;transition:border-color .2s}
    .tp-wfs:focus{border-color:var(--gold)}
    .tp-bk{padding:14px 0;margin:16px 0;border-top:1px solid rgba(201,168,76,.1);border-bottom:1px solid rgba(201,168,76,.1)}
    .tp-bkr{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;
      font-family:var(--fb);font-size:15px;color:var(--muted)}
    .tp-bkr:last-child{margin-bottom:0}
    .tp-bkr.tot{color:var(--text);padding-top:10px;margin-top:6px;border-top:1px solid rgba(201,168,76,.1);
      font-family:var(--ft);font-size:11px;letter-spacing:1px;text-transform:uppercase}
    .tp-bkr.tot .amt{color:var(--gold);font-family:var(--fd);font-size:22px;font-weight:700}
    .tp-bookbtn{width:100%;background:linear-gradient(135deg,var(--gold),var(--gold-light));
      color:#0B0900;border:none;border-radius:8px;padding:17px;font-family:var(--ft);
      font-weight:700;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;cursor:pointer;
      margin-bottom:10px;box-shadow:0 6px 24px rgba(201,168,76,.32);transition:all .3s}
    .tp-bookbtn:hover{box-shadow:0 10px 36px rgba(201,168,76,.55);transform:translateY(-2px)}
    .tp-bookbtn:active{transform:translateY(0)}
    .tp-wabk{width:100%;background:#25D366;color:#fff;border:none;border-radius:8px;padding:14px;
      font-family:var(--ft);font-weight:700;font-size:10px;letter-spacing:2px;text-transform:uppercase;
      cursor:pointer;transition:all .2s;display:block;text-align:center;text-decoration:none}
    .tp-wabk:hover{background:#1fb558}
    .tp-trust{display:flex;gap:0;margin-top:16px;border-top:1px solid rgba(201,168,76,.08);padding-top:16px}
    .tp-trust-i{flex:1;text-align:center;padding:0 5px;border-right:1px solid rgba(201,168,76,.1);
      font-family:var(--ft);font-size:7px;letter-spacing:1px;color:var(--muted);text-transform:uppercase;line-height:1.4}
    .tp-trust-i:last-child{border-right:none}
    .tp-trust-ic{font-size:15px;display:block;margin-bottom:4px;color:var(--gold)}
    .tp-save-pill{display:inline-flex;align-items:center;gap:6px;
      background:rgba(42,160,100,.12);border:1px solid rgba(42,160,100,.25);
      border-radius:20px;padding:5px 14px;margin-bottom:18px;
      font-family:var(--ft);font-size:9px;letter-spacing:1.5px;color:#4CAF82;text-transform:uppercase}

    /* RELATED */
    .tp-related{padding:64px 48px;background:var(--deep);border-top:1px solid var(--gold-border);position:relative;z-index:5}
    .tp-rel-head{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:36px}
    .tp-rel-ey{font-family:var(--ft);font-size:9px;letter-spacing:4px;color:var(--gold);text-transform:uppercase;margin-bottom:8px}
    .tp-rel-title{font-family:var(--fd);font-size:clamp(18px,2.5vw,28px);color:var(--text);font-weight:700}
    .tp-rel-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
    @media(max-width:1100px){.tp-related{padding:48px 22px}}
    @media(max-width:900px){.tp-rel-grid{grid-template-columns:1fr}}
    .tp-rc{background:var(--surface);border:1px solid var(--gold-border);border-radius:12px;
      overflow:hidden;cursor:pointer;transition:all .3s cubic-bezier(.25,.8,.25,1)}
    .tp-rc:hover{transform:translateY(-5px);box-shadow:0 16px 50px rgba(0,0,0,.6);border-color:var(--gold)}
    .tp-rc-img-wrap{position:relative;height:170px;overflow:hidden}
    .tp-rc-img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}
    .tp-rc:hover .tp-rc-img{transform:scale(1.06)}
    .tp-rc-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(7,5,13,.85) 0%,transparent 60%)}
    .tp-rc-body{padding:16px}
    .tp-rc-name{font-family:var(--ft);font-size:12px;color:var(--text);font-weight:600;line-height:1.45;margin-bottom:10px;letter-spacing:.3px}
    .tp-rc-foot{display:flex;align-items:center;justify-content:space-between}
    .tp-rc-price{font-family:var(--fd);font-size:20px;color:var(--gold);font-weight:700}
    .tp-rc-dur{font-family:var(--ft);font-size:8px;letter-spacing:1.5px;color:var(--muted);text-transform:uppercase}
    .tp-rc-stars{color:var(--gold);font-size:11px;margin-top:4px;letter-spacing:1px}
    .tp-rc-btn{background:var(--gold-dim);border:1px solid var(--gold-border);color:var(--gold);
      border-radius:6px;padding:7px 14px;font-family:var(--ft);font-size:8px;letter-spacing:1.5px;
      text-transform:uppercase;cursor:pointer;transition:all .2s}
    .tp-rc-btn:hover{background:var(--gold-dim2)}

    /* FLOATING */
    .tp-wafloat{position:fixed;right:20px;bottom:76px;z-index:900;display:flex;align-items:center;gap:8px;
      background:#25D366;color:#fff;border-radius:30px;padding:11px 18px;text-decoration:none;
      font-family:var(--ft);font-weight:700;font-size:10px;letter-spacing:1px;text-transform:uppercase;
      box-shadow:0 6px 28px rgba(37,211,102,.45);transition:all .25s}
    .tp-wafloat:hover{box-shadow:0 8px 36px rgba(37,211,102,.6);transform:translateY(-2px)}
    .tp-scrolltop{position:fixed;right:20px;bottom:22px;z-index:900;width:40px;height:40px;
      border-radius:8px;background:var(--gold-dim);border:1px solid var(--gold);color:var(--gold);
      cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;transition:all .25s}
    .tp-scrolltop:hover{background:var(--gold-dim2);box-shadow:0 4px 20px rgba(201,168,76,.3)}

    /* LOADING */
    .tp-loader{display:flex;flex-direction:column;align-items:center;justify-content:center;
      height:100vh;background:var(--obsidian);gap:20px}
    .tp-loader-hiero{font-size:48px;animation:pulse 1.5s ease-in-out infinite}
    @keyframes pulse{0%,100%{opacity:.3;transform:scale(.95)}50%{opacity:1;transform:scale(1.05)}}
    .tp-loader-txt{font-family:var(--ft);font-size:10px;letter-spacing:4px;color:var(--muted);text-transform:uppercase}

    /* RTL support */
    [dir="rtl"] .tp-hero-cnt{padding:0 48px 52px}
    [dir="rtl"] .tp-back{flex-direction:row-reverse}
    [dir="rtl"] .tp-nav-r{margin-left:0;margin-right:auto}
    [dir="rtl"] .tp-brand{margin-left:0;margin-right:14px}
  `}</style>
);

// ─────────────────────────────────────────────────────────────
//  BOOKING WIDGET
// ─────────────────────────────────────────────────────────────
function BookingWidget({ tour, onBook, t, lang }) {
  const navigate = useNavigate();
  const [adults,   setAdults]   = useState(2);
  const [children, setChildren] = useState(0);
  const [date,     setDate]     = useState("");

  const price        = tour.price?.discounted || tour.price?.original || 0;
  const originalPrice = tour.price?.original || 0;
  const adultAmt     = adults   * price;
  const childAmt     = children * (price * 0.5);
  const total        = adultAmt + childAmt;
  const savings      = tour.price?.discounted ? (originalPrice - price) * adults : 0;
  const savePercent  = tour.price?.discounted ? Math.round((1 - price / originalPrice) * 100) : 0;

  const tourTitle = lang === "ar" ? (tour.titleAr || tour.title) : tour.title;

  const waMsg = encodeURIComponent(
    `Hi! I'd like to book "${tourTitle}"\nDate: ${date || "TBD"}\nAdults: ${adults}, Children: ${children}\nTotal: $${total.toFixed(0)}`
  );

  return (
    <div className="tp-widget">
      {/* Header */}
      <div className="tp-wh">
        <div className="tp-wfrom">{t.fromPrice}</div>
        <div style={{ display:"flex", alignItems:"baseline", gap:8, flexWrap:"wrap" }}>
          <div className="tp-wprice">${price.toFixed(0)}</div>
          {tour.price?.discounted && <>
            <span className="tp-wold">${originalPrice.toFixed(0)}</span>
            <span className="tp-wsave">{t.save} {savePercent}%</span>
          </>}
        </div>
        <div className="tp-wpp">{t.perPerson}</div>
        <div className="tp-wrating">
          <span className="tp-wstars">{"★".repeat(Math.min(5, Math.floor(tour.rating?.score || 0)))}</span>
          <span className="tp-wrtxt">{tour.rating?.score} · {tour.rating?.reviews?.toLocaleString()} reviews</span>
        </div>
      </div>

      {/* Body */}
      <div className="tp-wb">
        {savings > 0 && (
          <div className="tp-save-pill">{t.yousave}{savings.toFixed(0)} {t.today}</div>
        )}
        <div className="tp-wf">
          <div className="tp-wfl">{t.selectDate}</div>
          <input type="date" className="tp-wfi" value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={e => setDate(e.target.value)} />
        </div>

        <div className="tp-wfrow">
          <div className="tp-wf">
            <div className="tp-wfl">{t.adults}</div>
            <select className="tp-wfs" value={adults} onChange={e => setAdults(+e.target.value)}>
              {[1,2,3,4,5,6,7,8,9,10].map(n => (
                <option key={n} value={n}>{n} {t.adult}{n>1?"s":""}</option>
              ))}
            </select>
          </div>
          <div className="tp-wf">
            <div className="tp-wfl">{t.children}</div>
            <select className="tp-wfs" value={children} onChange={e => setChildren(+e.target.value)}>
              {[0,1,2,3,4,5,6].map(n => (
                <option key={n} value={n}>{n} {n===1 ? t.child : t.children}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Breakdown */}
        <div className="tp-bk">
          <div className="tp-bkr">
            <span>{adults} {t.adult}{adults>1?"s":""} × ${price.toFixed(0)}</span>
            <span>${adultAmt.toFixed(0)}</span>
          </div>
          {children > 0 && (
            <div className="tp-bkr">
              <span>{children} {children===1 ? t.child : t.children} × ${(price*.5).toFixed(0)}</span>
              <span>${childAmt.toFixed(0)}</span>
            </div>
          )}
          <div className="tp-bkr tot">
            <span>{t.total}</span>
            <span className="amt">${total.toFixed(0)}</span>
          </div>
        </div>

        <button id="tp-main-book-btn" className="tp-bookbtn"
          onClick={() => onBook({ adults, children, date, total })}>
          {t.bookTour}
        </button>

        <div style={{ marginBottom: 10 }}>
          <button className="tp-bookbtn"
            onClick={() => navigate(`/booking/${tour._id}`)}>
            {t.bookNowEmoji}
          </button>
        </div>

        <a href={`https://wa.me/201068257754?text=${waMsg}`}
          target="_blank" rel="noreferrer" className="tp-wabk">
          {t.bookWhatsapp}
        </a>

        <div className="tp-trust">
          {[
            ["🔒", t.securePayment],
            ["✓",  t.freeCancel],
            ["⚡", t.instantConfirm],
            ["🏆", t.bestPrice],
          ].map(([ic, label]) => (
            <div key={label} className="tp-trust-i">
              <span className="tp-trust-ic">{ic}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────────────────────
export default function TourPage() {
  const { tourId }  = useParams();
  const navigate    = useNavigate();

  const [tour,     setTour]     = useState(null);
  const [loading,  setLoading]  = useState(true);
  const [heroImg,  setHeroImg]  = useState(0);
  const [tab,      setTab]      = useState("overview");
  const [sticky,   setSticky]   = useState(false);
  const [fav,      setFav]      = useState(false);
  const [lang,     setLang]     = useState("en");

  const t = TRANSLATIONS[lang];
  const isRTL = lang === "ar";

  // Fetch tour from API
  useEffect(() => {
    setLoading(true);
    getTourById(tourId)
      .then(data => { setTour(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [tourId]);

  // Scroll top on mount
  useEffect(() => { window.scrollTo({ top:0, behavior:"auto" }); }, [tourId]);

  // Sticky bar
  useEffect(() => {
    const fn = () => setSticky(window.scrollY > 460);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Auto-cycle images
  useEffect(() => {
    const imgs = getImages(tour);
    if (!imgs?.length) return;
    const id = setInterval(() => setHeroImg(i => (i+1) % imgs.length), 5500);
    return () => clearInterval(id);
  }, [tour]);

  // ── LOADING ──
  if (loading) return (
    <div className="tp-loader">
      <GlobalStyles />
      <div className="tp-loader-hiero">𓂀</div>
      <div className="tp-loader-txt">Loading Experience...</div>
    </div>
  );

  // ── NOT FOUND ──
  if (!tour) return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
      height:"100vh", background:"var(--obsidian)", gap:20 }}>
      <GlobalStyles />
      <div style={{ fontFamily:"var(--fd)", fontSize:52, color:"var(--gold)" }}>𓂀</div>
      <div style={{ fontFamily:"var(--ft)", fontSize:13, letterSpacing:3, color:"var(--text)" }}>{t.tourNotFound}</div>
      <button onClick={() => navigate("/")}
        style={{ background:"var(--gold-dim)", border:"1px solid var(--gold-border)", color:"var(--gold)",
          borderRadius:6, padding:"10px 24px", fontFamily:"var(--ft)", fontSize:10,
          letterSpacing:2, cursor:"pointer", textTransform:"uppercase" }}>
        {t.returnHome}
      </button>
    </div>
  );

  const images     = getImages(tour);
  const price      = tour.price?.discounted || tour.price?.original || 0;
  const score      = tour.rating?.score || 0;
  const reviews    = tour.rating?.reviews || 0;
  const tourTitle  = isRTL ? (tour.titleAr || tour.title) : tour.title;
  const tourDesc   = isRTL ? (tour.descriptionAr || tour.description) : tour.description;

  const handleBook = booking => {
    alert(`✦ Booking Received!\n\n${tourTitle}\nDate: ${booking.date || "TBD"}\nGuests: ${booking.adults} adults, ${booking.children} children\nTotal: $${booking.total.toFixed(0)}\n\nOur team will contact you within 2 hours.`);
  };

  const TABS = [
    { id:"overview",  label: t.overview  },
    { id:"includes",  label: t.includes  },
    { id:"itinerary", label: t.itinerary },
    { id:"reviews",   label: t.reviews   },
  ];

  return (
    <div style={{ background:"var(--obsidian)", minHeight:"100vh", position:"relative" }}
      dir={isRTL ? "rtl" : "ltr"}>
      <GlobalStyles />
      <div className="tp-bg" />

      {/* ── STICKY BAR ── */}
      <div className={`tp-sticky${sticky ? " on" : ""}`}>
        <span className="tp-sticky-name">{tourTitle.length > 55 ? tourTitle.slice(0,55)+"…" : tourTitle}</span>
        <span style={{ color:"var(--gold)", fontSize:12, letterSpacing:2 }}>{"★".repeat(Math.min(5,Math.floor(score)))}</span>
        <span style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)" }}>
          {score} ({reviews?.toLocaleString()})
        </span>
        <span className="tp-sticky-price">{t.fromPrice} ${price.toFixed(0)}</span>
        <button className="tp-sticky-btn" onClick={() => document.getElementById("tp-main-book-btn")?.click()}>
          {t.bookNow} ✦
        </button>
      </div>

      {/* ── NAVBAR ── */}
      <nav className="tp-nav">
        <button className="tp-back" onClick={() => navigate(-1)}>
          ← {t.back}
        </button>
        <span className="tp-brand">GOLDEN <span>Egypt Tours</span></span>
        <div className="tp-nav-r">
          {/* Language Switcher */}
          <div className="tp-lang">
            {Object.keys(TRANSLATIONS).map(l => (
              <button key={l} className={`tp-lang-btn${lang===l?" on":""}`} onClick={() => setLang(l)}>
                {LANG_FLAGS[l]} {LANG_NAMES[l]}
              </button>
            ))}
          </div>
          <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="tp-wa-nav">
            💬 {t.whatsapp}
          </a>
          <button className="tp-booknow" onClick={() => document.getElementById("tp-main-book-btn")?.click()}>
            {t.bookNow}
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="tp-hero">
        <div className="tp-hero-bg" style={{ backgroundImage:`url(${images[heroImg]})` }} />
        <div className="tp-hero-grid" />
        <div className="tp-hero-ov" />

        {/* Scrolling band */}
        <div className="tp-band">
          <span className="tp-band-txt">
            𓂀 &nbsp; {tour.category} &nbsp; 𓃭 &nbsp; Golden Egypt Tours &nbsp; 𓆑 &nbsp;
            {tourTitle} &nbsp; 𓇋 &nbsp; {t.privateLuxury} &nbsp; 𓅓 &nbsp;
            {t.egypt} &nbsp; 𓂀 &nbsp; Golden Egypt Tours &nbsp; 𓃭
          </span>
        </div>

        {/* Badges */}
        <div className="tp-hero-badges">
          {tour.freeCancellation && (
            <span className="tp-hbadge new">{t.freeCancel}</span>
          )}
          {tour.price?.discounted && (
            <span className="tp-hbadge hot">
              {t.save} {Math.round((1 - tour.price.discounted/tour.price.original)*100)}%
            </span>
          )}
          <span className="tp-hbadge">{tour.category}</span>
        </div>

        {/* Actions */}
        <div className="tp-hero-acts">
          <button className="tp-act" title="Share"
            onClick={() => navigator.share?.({ title:tourTitle, url:window.location.href })}>↗</button>
          <button className="tp-act" title={fav?"Saved":"Save"}
            onClick={() => setFav(v=>!v)}
            style={{ color: fav ? "#e55" : "var(--gold)" }}>
            {fav ? "♥" : "♡"}
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="tp-thumbs">
          {images.map((src,i) => (
            <div key={i} className={`tp-thumb${heroImg===i?" on":""}`} onClick={() => setHeroImg(i)}>
              <img src={src} alt={`View ${i+1}`}
                onError={e => { e.target.src=`https://placehold.co/72x52/0C0A14/C9A84C?text=${i+1}`; }} />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="tp-hero-cnt">
          <div className="tp-hero-ey">
            {tour.category} &nbsp;·&nbsp; {t.egypt}
          </div>
          <h1 className="tp-htitle">{tourTitle}</h1>
          <p className="tp-htagline">{tourDesc?.slice(0, 120)}...</p>

          <div className="tp-hmeta">
            {[
              { i:"⏱", t2: tour.duration },
              { i:"👥", t2: `${tour.travellers?.toLocaleString()} ${t.pax}` },
              { i:"🗣️", t2: (tour.language||[]).slice(0,3).join(" · ") },
            ].map((m,idx) => (
              <span key={idx} style={{ display:"flex", alignItems:"center", gap:14 }}>
                <span className="tp-hmi"><span className="i">{m.i}</span> {m.t2}</span>
                {idx < 2 && <span className="tp-hsep" />}
              </span>
            ))}
          </div>

          <div className="tp-hrating">
            <span className="tp-hstars">{"★".repeat(Math.min(5,Math.floor(score)))}</span>
            <span className="tp-hscore">{score}</span>
            <span className="tp-hcount">({reviews?.toLocaleString()} reviews)</span>
            <span className="tp-htop">{t.topRated}</span>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className="tp-crumb">
        <a href="/" onClick={e=>{e.preventDefault();navigate("/")}}>Home</a>
        <span className="sep">›</span>
        <a href="/" onClick={e=>{e.preventDefault();navigate(-1)}}>{tour.category}</a>
        <span className="sep">›</span>
        <span className="cur">{tourTitle}</span>
      </div>

      {/* ── QUICK BAR ── */}
      <div className="tp-qbar">
        {[
          { ic:"⏱",  l: t.duration,      v: tour.duration },
          { ic:"👥",  l: t.groupSize,     v: `${t.maxPeople} ${tour.travellers?.toLocaleString()} ${t.people}` },
          { ic:"🗣️", l: t.languages,      v: (tour.language||[]).slice(0,3).join(" · ") },
          { ic:"🚗",  l: t.hotelPickup,   v: t.included },
          { ic:"🎫",  l: t.entryTickets,  v: t.included },
          { ic:"✓",   l: t.freeCancel,    v: tour.freeCancellation ? "✔" : "✗" },
        ].map(q => (
          <div key={q.l} className="tp-qi">
            <span className="tp-qi-ic">{q.ic}</span>
            <div><div className="tp-qi-l">{q.l}</div><div className="tp-qi-v">{q.v}</div></div>
          </div>
        ))}
      </div>

      {/* ── BODY ── */}
      <div className="tp-body">

        {/* LEFT */}
        <div>
          <h1 className="tp-main-title">{tourTitle}</h1>

          <div className="tp-rrow">
            <span className="tp-stars">{"★".repeat(Math.min(5,Math.floor(score)))}{"☆".repeat(Math.max(0,5-Math.floor(score)))}</span>
            <span className="tp-score">{score}</span>
            <span className="tp-rcount">({reviews?.toLocaleString()} {t.verifiedReviews})</span>
            <span className="tp-top-tag">{t.topRated}</span>
          </div>

          {/* TABS */}
          <div className="tp-tabs">
            {TABS.map(tb => (
              <button key={tb.id} className={`tp-tab${tab===tb.id?" on":""}`} onClick={() => setTab(tb.id)}>
                {tb.label}
              </button>
            ))}
          </div>

          {/* ═══ OVERVIEW ═══ */}
          <div className={`tp-panel${tab==="overview"?" on":""}`}>
            <p className="tp-body-txt">{tourDesc}</p>

            {(tour.highlights||[]).length > 0 && (
              <div className="tp-hls">
                <div className="tp-sec-h">{t.tourHighlights}</div>
                {tour.highlights.map((h,i) => (
                  <div key={i} className="tp-hl">
                    <div className="tp-hl-ic">◆</div>
                    <div className="tp-hl-tx">{h}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="tp-icards">
              {[
                { ic:"⏱",  l: t.duration,   v: tour.duration },
                { ic:"👥",  l: t.groupSize,  v: `${t.maxPeople} ${tour.travellers?.toLocaleString()}` },
                { ic:"🗣️", l: t.languages,   v: (tour.language||[]).join(", ") },
                { ic:"✓",   l: t.freeCancel, v: tour.freeCancellation ? "✔ Yes" : "✗ No" },
              ].map(c => (
                <div key={c.l} className="tp-icard">
                  <div className="tp-icard-ic">{c.ic}</div>
                  <div className="tp-icard-l">{c.l}</div>
                  <div className="tp-icard-v">{c.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ═══ INCLUDES ═══ */}
          <div className={`tp-panel${tab==="includes"?" on":""}`}>
            <div className="tp-sec-h">{t.whatsIncluded}</div>
            <div className="tp-incgrid">
              {(tour.includes||[]).map((inc,i) => (
                <div key={i} className="tp-inc">
                  <span className="tp-inc-ic">✓</span>
                  <span className="tp-inc-l">{inc}</span>
                </div>
              ))}
            </div>

            {(tour.excludes||[]).length > 0 && (
              <>
                <div className="tp-sec-h" style={{ marginTop:32 }}>{t.notIncluded}</div>
                <ul className="tp-exclist">
                  {tour.excludes.map((e,i) => (
                    <li key={i} className="tp-exc">{e}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* ═══ ITINERARY ═══ */}
          <div className={`tp-panel${tab==="itinerary"?" on":""}`}>
            <div className="tp-sec-h">{t.detailedItinerary}</div>
            {(tour.itinerary||[]).length > 0 ? (
              <div className="tp-itin">
                {tour.itinerary.map((step,i) => (
                  <div key={i} className="tp-step">
                    <div className="tp-step-left">
                      <div className="tp-step-marker">{step.icon || i+1}</div>
                      <div className="tp-step-line" />
                    </div>
                    <div className="tp-step-cnt">
                      <div className="tp-step-time">⏱ {step.time}</div>
                      <div className="tp-step-title">{step.title}</div>
                      <div className="tp-step-desc">{step.description}</div>
                      {(step.tags||[]).length > 0 && (
                        <div className="tp-step-tags">
                          {step.tags.map(tg => <span key={tg} className="tp-stag">{tg}</span>)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ fontFamily:"var(--fb)", color:"var(--muted)", fontSize:16, padding:"20px 0" }}>
                {tourDesc}
              </div>
            )}
          </div>

          {/* ═══ REVIEWS ═══ */}
          <div className={`tp-panel${tab==="reviews"?" on":""}`}>
            <div className="tp-rev-sum">
              <div style={{ textAlign:"center", minWidth:96 }}>
                <div className="tp-rbig">{score}</div>
                <div className="tp-rof">{t.outOf}</div>
                <div className="tp-rbig-stars">{"★".repeat(Math.min(5,Math.floor(score)))}</div>
                <div className="tp-rtotal">{reviews?.toLocaleString()} reviews</div>
              </div>
              <div className="tp-rbars">
                {[
                  { l: t.guideQuality,   p:98 },
                  { l: t.valueForMoney,  p:94 },
                  { l: t.organisation,   p:96 },
                  { l: t.experience,     p:99 },
                  { l: t.transport,      p:93 },
                ].map(b => (
                  <div key={b.l} className="tp-rbar-row">
                    <span className="tp-rbar-l">{b.l}</span>
                    <div className="tp-rbar-track">
                      <div className="tp-rbar-fill" style={{ width:`${b.p}%` }} />
                    </div>
                    <span className="tp-rbar-pct">{b.p}%</span>
                  </div>
                ))}
              </div>
            </div>

            {(tour.reviews||[]).length > 0 ? (
              <div className="tp-revlist">
                {tour.reviews.map((rev,i) => (
                  <div key={i} className="tp-revc">
                    <div className="tp-rev-q">"</div>
                    <div className="tp-rev-head">
                      <div className="tp-rev-av">{rev.avatar||"👤"}</div>
                      <div>
                        <div className="tp-rev-name">{rev.name}</div>
                        <div className="tp-rev-loc">{rev.location}</div>
                        <div className="tp-rev-stars">{"★".repeat(rev.rating)}</div>
                      </div>
                      <div className="tp-rev-date">{rev.date}</div>
                    </div>
                    <div className="tp-rev-txt">{rev.text}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ fontFamily:"var(--fb)", color:"var(--muted)", fontSize:16, padding:"20px 0", fontStyle:"italic" }}>
                No reviews yet — be the first to review this tour!
              </div>
            )}
          </div>
        </div>

        {/* RIGHT — BOOKING WIDGET */}
        <aside>
          <BookingWidget tour={tour} onBook={handleBook} t={t} lang={lang} />
        </aside>
      </div>

      {/* ── FLOATING ── */}
      <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="tp-wafloat">
        <span style={{ fontSize:16 }}>💬</span> {t.whatsappUs}
      </a>
      <button className="tp-scrolltop" onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}>▲</button>
    </div>
  );
}
