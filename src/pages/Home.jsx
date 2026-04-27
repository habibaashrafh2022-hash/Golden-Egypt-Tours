import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AITripBuilder from "../components/AITripBuilder";
// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const T = {
  en: { dir:"ltr", bookNow:"Book Now", chatWA:"WhatsApp", search:"Search",
    hero:{ tag:"Award-Winning Egypt Specialists", title:"Golden Egypt Tours", sub:"Discover Egypt Like Never Before", dest:"Where are you going?", checkin:"Check-in", checkout:"Check-out", guests:"Guests", adults:"Adults", children:"Children", adv:"Advanced Search" },
    trending:{ title:"Trending Destinations", all:"View All" },
    hotels:{ title:"Featured Hotels", all:"View All", night:"/ night" },
    cruises:{ title:"Nile Cruises", all:"View All", night:"/ night" },
    ai:{ title:"AI Trip Builder", sub:"Your perfect Egypt itinerary in seconds", ph:"e.g. 10 days Egypt — Cairo, Luxor & Red Sea", gen:"Generate", chips:["5 days Cairo","Nile Cruise","Honeymoon Egypt","Family Adventure"] },
    why:{ title:"Why Golden Egypt Tours?", sub:"Trusted by 50,000+ travellers worldwide" },
    tests:{ title:"Travellers Love Egypt", sub:"Real stories · Real adventures" },
    nl:{ title:"Get Exclusive Egypt Deals", sub:"Join 200,000+ travellers. Unsubscribe anytime.", ph:"Your email address", cta:"Subscribe" },
    nav:["Home","Tours","Nile Cruises","Hotels","About","Contact"],
  },
  ar: { dir:"rtl", bookNow:"احجز الآن", chatWA:"واتساب",search:"بحث",
    hero:{ tag:"متخصصون رقم 1 في سياحة مصر", title:"جولدن إيجيبت تورز", sub:"اكتشف مصر كما لم تراها من قبل", dest:"أين تريد الذهاب؟", checkin:"تسجيل الدخول", checkout:"المغادرة", guests:"الضيوف", adults:"بالغين", children:"أطفال", adv:"بحث متقدم" },
    trending:{ title:"الوجهات الأكثر طلباً", all:"عرض الكل" },
    hotels:{ title:"الفنادق المميزة", all:"عرض الكل", night:"/ ليلة" },
    cruises:{ title:"رحلات النيل", all:"عرض الكل", night:"/ ليلة" },
    ai:{ title:"منشئ الرحلات بالذكاء الاصطناعي", sub:"رحلتك المثالية في مصر خلال ثوانٍ", ph:"مثال: 10 أيام في القاهرة والأقصر والبحر الأحمر", gen:"إنشاء", chips:["5 أيام القاهرة","رحلة نيلية","شهر عسل","رحلة عائلية"] },
    why:{ title:"لماذا جولدن إيجيبت تورز؟", sub:"ثقة أكثر من 50,000 مسافر حول العالم" },
    tests:{ title:"المسافرون يعشقون مصر", sub:"قصص حقيقية · مغامرات حقيقية" },
    nl:{ title:"احصل على عروض مصر الحصرية", sub:"انضم لأكثر من 200,000 مسافر.", ph:"بريدك الإلكتروني", cta:"اشترك" },
    nav:["الرئيسية","الجولات","رحلات النيل","الفنادق","من نحن","تواصل"],
  },
  es: { dir:"ltr", bookNow:"Reservar", chatWA:"WhatsApp", search:"Buscar",
    hero:{ tag:"Especialistas #1 en Egipto", title:"Golden Egypt Tours", sub:"Descubre Egipto como nunca antes", dest:"¿A dónde vas?", checkin:"Llegada", checkout:"Salida", guests:"Huéspedes", adults:"Adultos", children:"Niños", adv:"Búsqueda Avanzada" },
    trending:{ title:"Destinos Populares", all:"Ver Todo" },
    hotels:{ title:"Hoteles Destacados", all:"Ver Todo", night:"/ noche" },
    cruises:{ title:"Cruceros por el Nilo", all:"Ver Todo", night:"/ noche" },
    ai:{ title:"Constructor de Viajes IA", sub:"Tu itinerario perfecto en segundos", ph:"Ej: 10 días El Cairo, Luxor y Mar Rojo", gen:"Generar", chips:["5 días El Cairo","Crucero del Nilo","Luna de miel","Familia"] },
    why:{ title:"¿Por qué Golden Egypt Tours?", sub:"Confianza de 50.000+ viajeros" },
    tests:{ title:"Los Viajeros Aman Egipto", sub:"Historias reales · Aventuras reales" },
    nl:{ title:"Ofertas Exclusivas de Egipto", sub:"Únete a 200.000+ viajeros.", ph:"Tu correo electrónico", cta:"Suscribirse" },
    nav:["Inicio","Tours","Cruceros Nilo","Hoteles","Nosotros","Contacto"],
  },
  de: { dir:"ltr", bookNow:"Jetzt Buchen", chatWA:"WhatsApp", search:"Suchen",
    hero:{ tag:"Ägyptens führende Reisespezialisten", title:"Golden Egypt Tours", sub:"Entdecke Ägypten wie nie zuvor", dest:"Wohin reist du?", checkin:"Check-in", checkout:"Check-out", guests:"Gäste", adults:"Erwachsene", children:"Kinder", adv:"Erweiterte Suche" },
    trending:{ title:"Beliebte Reiseziele", all:"Alle anzeigen" },
    hotels:{ title:"Ausgewählte Hotels", all:"Alle anzeigen", night:"/ Nacht" },
    cruises:{ title:"Nilkreuzfahrten", all:"Alle anzeigen", night:"/ Nacht" },
    ai:{ title:"KI-Reiseplaner", sub:"Dein perfektes Ägypten-Itinerar in Sekunden", ph:"z.B. 10 Tage Kairo, Luxor & Rotes Meer", gen:"Erstellen", chips:["5 Tage Kairo","Nilkreuzfahrt","Hochzeitsreise","Familie"] },
    why:{ title:"Warum Golden Egypt Tours?", sub:"Vertrauen von 50.000+ Reisenden" },
    tests:{ title:"Reisende lieben Ägypten", sub:"Echte Geschichten · Echte Abenteuer" },
    nl:{ title:"Exklusive Ägypten-Angebote", sub:"Schließe dich 200.000+ Reisenden an.", ph:"Deine E-Mail", cta:"Abonnieren" },
    nav:["Startseite","Touren","Nilkreuzfahrten","Hotels","Über Uns","Kontakt"],
  },
  fr: { dir:"ltr", bookNow:"Réserver", chatWA:"WhatsApp", search:"Chercher",
    hero:{ tag:"Spécialistes N°1 de l'Égypte", title:"Golden Egypt Tours", sub:"Découvrez l'Égypte comme jamais", dest:"Où allez-vous ?", checkin:"Arrivée", checkout:"Départ", guests:"Voyageurs", adults:"Adultes", children:"Enfants", adv:"Recherche Avancée" },
    trending:{ title:"Destinations Tendance", all:"Voir Tout" },
    hotels:{ title:"Hôtels en Vedette", all:"Voir Tout", night:"/ nuit" },
    cruises:{ title:"Croisières sur le Nil", all:"Voir Tout", night:"/ nuit" },
    ai:{ title:"Créateur de Voyage IA", sub:"Votre itinéraire parfait en secondes", ph:"Ex: 10 jours Le Caire, Louxor & Mer Rouge", gen:"Générer", chips:["5 jours Le Caire","Croisière Nil","Lune de miel","Famille"] },
    why:{ title:"Pourquoi Golden Egypt Tours ?", sub:"Confiance de 50 000+ voyageurs" },
    tests:{ title:"Les Voyageurs Aiment l'Égypte", sub:"Vraies histoires · Vraies aventures" },
    nl:{ title:"Offres Exclusives Égypte", sub:"Rejoignez 200 000+ voyageurs.", ph:"Votre e-mail", cta:"S'abonner" },
    nav:["Accueil","Tours","Croisières Nil","Hôtels","À Propos","Contact"],
  },
  ru: { dir:"ltr", bookNow:"Забронировать", chatWA:"WhatsApp", search:"Поиск",
    hero:{ tag:"Специалисты №1 по Египту", title:"Golden Egypt Tours", sub:"Откройте Египет как никогда прежде", dest:"Куда вы едете?", checkin:"Заезд", checkout:"Выезд", guests:"Гости", adults:"Взрослые", children:"Дети", adv:"Расширенный поиск" },
    trending:{ title:"Популярные направления", all:"Смотреть все" },
    hotels:{ title:"Рекомендуемые отели", all:"Смотреть все", night:"/ ночь" },
    cruises:{ title:"Круизы по Нилу", all:"Смотреть все", night:"/ ночь" },
    ai:{ title:"ИИ-планировщик путешествий", sub:"Ваш идеальный маршрут за секунды", ph:"Напр: 10 дней Каир, Луксор и Красное море", gen:"Создать", chips:["5 дней Каир","Круиз по Нилу","Медовый месяц","Семья"] },
    why:{ title:"Почему Golden Egypt Tours?", sub:"Доверие 50 000+ путешественников" },
    tests:{ title:"Путешественники любят Египет", sub:"Реальные истории · Настоящие приключения" },
    nl:{ title:"Эксклюзивные предложения", sub:"Присоединитесь к 200 000+ путешественников.", ph:"Ваш email", cta:"Подписаться" },
    nav:["Главная","Туры","Круизы Нил","Отели","О Нас","Контакты"],
  },
  it: { dir:"ltr", bookNow:"Prenota Ora", chatWA:"WhatsApp", search:"Cerca",
    hero:{ tag:"Specialisti N°1 in Egitto", title:"Golden Egypt Tours", sub:"Scopri l'Egitto come mai prima", dest:"Dove vai?", checkin:"Check-in", checkout:"Check-out", guests:"Ospiti", adults:"Adulti", children:"Bambini", adv:"Ricerca Avanzata" },
    trending:{ title:"Destinazioni di Tendenza", all:"Vedi Tutto" },
    hotels:{ title:"Hotel in Evidenza", all:"Vedi Tutto", night:"/ notte" },
    cruises:{ title:"Crociere sul Nilo", all:"Vedi Tutto", night:"/ notte" },
    ai:{ title:"Costruttore Viaggi AI", sub:"Il tuo itinerario perfetto in secondi", ph:"Es: 10 giorni Il Cairo, Luxor e Mar Rosso", gen:"Genera", chips:["5 giorni Il Cairo","Crociera Nilo","Luna di miele","Famiglia"] },
    why:{ title:"Perché Golden Egypt Tours?", sub:"Fiducia di 50.000+ viaggiatori" },
    tests:{ title:"I Viaggiatori Amano l'Egitto", sub:"Storie vere · Avventure reali" },
    nl:{ title:"Offerte Esclusive Egitto", sub:"Unisciti a 200.000+ viaggiatori.", ph:"La tua email", cta:"Iscriviti" },
    nav:["Home","Tour","Crociere Nilo","Hotel","Chi Siamo","Contatti"],
  },
};

const CURRENCIES = {
  USD:{ symbol:"$", rate:1, label:"USD ($)" },
  EUR:{ symbol:"€", rate:0.92, label:"EUR (€)" },
  GBP:{ symbol:"£", rate:0.79, label:"GBP (£)" },
  EGP:{ symbol:"ج.م", rate:48.5, label:"EGP (ج.م)" },
  RUB:{ symbol:"₽", rate:90.5, label:"RUB (₽)" },
  SAR:{ symbol:"﷼", rate:3.75, label:"SAR (﷼)" },
  PLN:{ symbol:"zł", rate:4.02, label:"PLN (zł)" },
};

const LANG_MAP = { en:"EN", ar:"عر", es:"ES", de:"DE", fr:"FR", ru:"RU", it:"IT" };
// ─── DESTINATIONS ─────────────────────────────────────────────────────────────
const DESTS = [
  { id:"cairo",      name:"Cairo",         nameAr:"القاهرة",   img:"https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=85", tours:120, tag:"Ancient Wonder",  color:"#D4AF37" },
  { id:"luxor",      name:"Luxor",         nameAr:"الأقصر",    img:"https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=85", tours:80,  tag:"Open Air Museum", color:"#E8C547" },
  { id:"aswan",      name:"Aswan",         nameAr:"أسوان",     img:"https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=85", tours:60,  tag:"Nubian Gem",      color:"#F0A500" },
  { id:"hurghada",   name:"Hurghada",      nameAr:"الغردقة",   img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=85", tours:110, tag:"Red Sea",          color:"#00C9E8" },
  { id:"sharm",      name:"Sharm El Sheikh",nameAr:"شرم الشيخ",img:"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=85", tours:130, tag:"Sinai Paradise",   color:"#FF6B6B" },
  { id:"alexandria", name:"Alexandria",    nameAr:"الإسكندرية",img:"https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=85", tours:70,  tag:"Mediterranean",   color:"#4A9EE8" },
  { id:"fayoum",     name:"Fayoum",        nameAr:"الفيوم",    img:"https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&q=85", tours:50,  tag:"Secret Oasis",    color:"#52B788" },
  { id:"marsa-alam", name:"Marsa Alam",    nameAr:"مرسى علم",  img:"https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=85", tours:40,  tag:"Untouched",       color:"#0096C7" },
  { id:"giza",       name:"Giza",          nameAr:"الجيزة",    img:"https://images.unsplash.com/photo-1553697388-94e804e2f0f6?w=800&q=85", tours:95,  tag:"The Pyramids",    color:"#C8A951" },
  { id:"ain-sokhna", name:"Ain Sokhna",    nameAr:"العين السخنة",img:"https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=85", tours:40, tag:"Weekend Escape",  color:"#CD853F" },
];

const HOTELS = [
  { name:"Marriott Mena House",     stars:5, price:150, city:"Giza",     img:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80" },
  { name:"Four Seasons Nile Plaza", stars:5, price:220, city:"Cairo",    img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80" },
  { name:"Sofitel Winter Palace",   stars:5, price:95,  city:"Luxor",    img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80" },
  { name:"Rixos Premium Seagate",   stars:5, price:180, city:"Sharm",    img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80" },
];

const CRUISES = [
  { name:"Sanctuary Sun Boat IV",   stars:5, price:480, img:"https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=400&q=80" },
  { name:"Mövenpick Royal Lily",    stars:5, price:350, img:"https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&q=80" },
  { name:"Oberoi Philae Luxury",    stars:5, price:520, img:"https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&q=80" },
  { name:"Steigenberger Minerva",   stars:4, price:290, img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80" },
];

const REVIEWS = [
  { name:"Sarah Mitchell",  country:"🇺🇸 New York",   rating:5, img:"https://i.pravatar.cc/80?img=1",  text:"The AI itinerary was perfect — 12 days, every detail handled. Cairo to Aswan felt like a dream. Golden Egypt Tours is the real deal." },
  { name:"Carlos Ruiz",     country:"🇪🇸 Barcelona",  rating:5, img:"https://i.pravatar.cc/80?img=3",  text:"El crucero por el Nilo fue absolutamente mágico. Nuestro guía conocía cada templo como la palma de su mano. 100% lo recomendaría." },
  { name:"Amélie Fontaine", country:"🇫🇷 Paris",      rating:5, img:"https://i.pravatar.cc/80?img=5",  text:"Service impeccable du début à la fin. La Vue sur les Pyramides depuis le balcon était inoubliable. Merci pour ce voyage parfait!" },
  { name:"Klaus Weber",     country:"🇩🇪 Berlin",     rating:5, img:"https://i.pravatar.cc/80?img=12", text:"Perfekt organisiert! Die Nilkreuzfahrt übertraf alle Erwartungen. Sehr professionelle Guides und wunderschöne Hotels." },
  { name:"Yuki Tanaka",     country:"🇯🇵 Tokyo",      rating:5, img:"https://i.pravatar.cc/80?img=9",  text:"Everything exceeded expectations. The Valley of the Kings at sunrise was spiritual. A trip I will never forget in my entire life." },
  { name:"Olga Sorokina",   country:"🇷🇺 Moscow",     rating:5, img:"https://i.pravatar.cc/80?img=7",  text:"Невероятное путешествие! Всё было организовано идеально. Особенно впечатлил закат над Нилом. Рекомендую всем!" },
];

const WHY = [
  { icon:"🏆", title:"Award-Winning",    desc:"Voted #1 Egypt Specialist by Travellers Choice — 5 years running" },
  { icon:"🤖", title:"AI-Powered",       desc:"Our proprietary AI builds your personalised Egypt itinerary in seconds" },
  { icon:"🔒", title:"100% Secure",      desc:"Bank-grade encryption · Free cancellation · Full money-back guarantee" },
  { icon:"🌍", title:"Global Reach",     desc:"Serving 90+ countries in 9 languages with 24/7 expert support" },
  { icon:"⭐", title:"50,000+ Reviews",  desc:"Average 4.9/5 across TripAdvisor, Google & Trustpilot globally" },
  { icon:"🎯", title:"Tailor-Made",      desc:"Every itinerary crafted by licensed PhD Egyptologist guides" },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const fmt = (p, cur) => `${CURRENCIES[cur].symbol}${Math.round(p * CURRENCIES[cur].rate).toLocaleString()}`;
const Stars = ({ n }) => <span style={{ color:"#D4AF37", letterSpacing:"1px" }}>{"★".repeat(n)}{"☆".repeat(5-n)}</span>;

// ─── GLOBAL CSS ───────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Josefin+Sans:wght@300;400;600;700&family=Noto+Sans+Arabic:wght@300;400;700&display=swap');

  :root {
    --gold: #C9A84C;
    --gold-light: #E8C96D;
    --gold-pale: rgba(201,168,76,0.12);
    --gold-border: rgba(201,168,76,0.22);
    --obsidian: #080603;
    --surface: #110E08;
    --surface2: #1A1610;
    --text: #F0E4C4;
    --muted: #8A7A5A;
  }

  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior:smooth; -webkit-tap-highlight-color:transparent; }
  body { background:var(--obsidian); color:var(--text); font-family:'Josefin Sans','Noto Sans Arabic',sans-serif; overflow-x:hidden; }
  ::selection { background:rgba(201,168,76,0.3); color:#fff; }
  ::-webkit-scrollbar { width:4px; }
  ::-webkit-scrollbar-track { background:var(--obsidian); }
  ::-webkit-scrollbar-thumb { background:var(--gold-border); border-radius:2px; }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp   { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:none} }
  @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
  @keyframes slideLeft{ from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:none} }
  @keyframes kbzoom   { 0%{transform:scale(1)} 100%{transform:scale(1.08)} }
  @keyframes float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  @keyframes spin     { to{transform:rotate(360deg)} }
  @keyframes shimmer  { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
  @keyframes pulse    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.7;transform:scale(.97)} }
  @keyframes marquee  { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  @keyframes gradMove { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
  @keyframes borderPulse { 0%,100%{box-shadow:0 0 0 0 rgba(201,168,76,0)} 50%{box-shadow:0 0 0 6px rgba(201,168,76,.15)} }
  @keyframes slideDown{ from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:none} }
  @keyframes countUp  { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }

  /* ── HERO BACKGROUND ── */
  .hero-bg { animation: kbzoom 18s ease-in-out infinite alternate; }

  /* ── GOLD TEXT GRADIENT ── */
  .gold-text {
    background: linear-gradient(135deg, #F0DC8A 0%, #C9A84C 40%, #FFE599 70%, #B8902E 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .gold-text-anim {
    background: linear-gradient(90deg, #E8C96D, #C9A84C, #FFE599, #8B6914, #E8C96D);
    background-size: 300% 100%;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    animation: gradMove 4s ease-in-out infinite;
  }
  /* ── HIEROGLYPH WATERMARK ── */
  .hiero-bg {
    position:fixed; inset:0; pointer-events:none; z-index:0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Ctext x='10' y='60' font-size='32' fill='rgba(201,168,76,0.018)'%3E𓂀 𓅓%3C/text%3E%3Ctext x='10' y='120' font-size='28' fill='rgba(201,168,76,0.014)'%3E𓇋 𓏏 𓈖%3C/text%3E%3Ctext x='10' y='185' font-size='32' fill='rgba(201,168,76,0.018)'%3E𓆣 𓂋 𓃭%3C/text%3E%3C/svg%3E");
    background-size: 200px 200px;
  }

  /* ── MARQUEE ── */
  .marquee-inner { display:flex; animation:marquee 28s linear infinite; white-space:nowrap; }
  .marquee-inner:hover { animation-play-state:paused; }

  /* ── HOVER EFFECTS ── */
  .dest-card:hover .dest-img { transform:scale(1.08); }
  .dest-card:hover .dest-overlay { opacity:.5; }
  .dest-card:hover .dest-arrow { opacity:1; transform:translateX(0); }
  .card-hov:hover { transform:translateY(-6px); border-color:rgba(201,168,76,.4) !important; box-shadow:0 20px 50px rgba(0,0,0,.5) !important; }
  .nav-link:hover { color:var(--gold) !important; }
  .drop-item:hover { background:rgba(201,168,76,.08) !important; color:var(--gold) !important; }
  .chip-btn:hover { background:rgba(201,168,76,.18) !important; color:var(--gold) !important; }
  .wa-float:hover { transform:scale(1.05); box-shadow:0 8px 32px rgba(37,211,102,.6) !important; }
  .scroll-top:hover { background:rgba(201,168,76,.25) !important; }
  .hero-search-btn:hover { box-shadow:0 8px 32px rgba(201,168,76,.6) !important; transform:translateY(-1px); }
  .book-btn:hover { box-shadow:0 8px 28px rgba(201,168,76,.5) !important; transform:scale(1.03); }
  .review-card:hover { border-color:rgba(201,168,76,.35) !important; transform:translateY(-4px); }
  .why-card:hover { border-color:rgba(201,168,76,.4) !important; transform:translateY(-4px); background:rgba(26,22,16,.95) !important; }
  .why-card:hover .why-icon { transform:scale(1.15) rotate(5deg); }

  /* ── DIVIDER LINE ── */
  .gold-line { height:1px; background:linear-gradient(to right, transparent, rgba(201,168,76,.35), transparent); }

  /* ── MOBILE ── */
  @media (max-width: 768px) {
    .desktop-only { display:none !important; }
    .mobile-menu { display:flex !important; }
  }
  @media (min-width: 769px) {
    .mobile-only { display:none !important; }
  }
  @media (max-width: 480px) {
    .search-grid { grid-template-columns: 1fr !important; }
    .search-grid > *:last-child { grid-column: 1; }
    .dest-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .cards-grid-2 { grid-template-columns: 1fr !important; }
    .why-grid { grid-template-columns: 1fr 1fr !important; }
    .reviews-grid { grid-template-columns: 1fr !important; }
    .footer-grid { grid-template-columns: 1fr 1fr !important; }
  }
  @media (max-width: 768px) and (min-width: 481px) {
    .dest-grid { grid-template-columns: repeat(3, 1fr) !important; }
    .cards-grid-2 { grid-template-columns: 1fr 1fr !important; }
    .why-grid { grid-template-columns: 1fr 1fr !important; }
    .reviews-grid { grid-template-columns: 1fr 1fr !important; }
    .search-grid { grid-template-columns: 1fr 1fr !important; }
    .search-grid > *:last-child { grid-column: 1 / -1; }
  }
`;

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Home() {
  const navigate = useNavigate();
  const [lang, setLang]         = useState("en");
  const [cur, setCur]           = useState("USD");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMMenu]  = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [curOpen, setCurOpen]   = useState(false);
  const [adults, setAdults]     = useState(2);
  const [children, setChildren] = useState(0);
  const [gOpen, setGOpen]       = useState(false);
  const [aiInput, setAiInput]   = useState("");
  const [aiResult, setAiResult] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [email, setEmail]       = useState("");
  const [subDone, setSubDone]   = useState(false);
  const [activeStep, setStep]   = useState(0);
  const [heroImg, setHeroImg]   = useState(0);
  const [visible, setVisible]   = useState({});
  const observerRef             = useRef({});

  const t = T[lang] || T.en;
  const isRTL = t.dir === "rtl";

  // ── Scroll ──
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // ── Auto step ──
  useEffect(() => {
    const id = setInterval(() => setStep(s => (s+1)%4), 2200);
    return () => clearInterval(id);
  }, []);

  // ── Hero slideshow ──
  const HERO_IMGS = [
    "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1800&q=85",
    "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1800&q=85",
   
  ];
  useEffect(() => {
    const id = setInterval(() => setHeroImg(i => (i+1) % HERO_IMGS.length), 5000);
    return () => clearInterval(id);
  }, []);

  // ── Intersection observer for reveal animations ──
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.dataset.reveal]: true }));
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ── AI handler ──
  const handleAI = useCallback(async () => {
    if (!aiInput.trim()) return;
    setAiLoading(true); setAiResult("");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514", max_tokens:1000,
          system:`You are an expert Egypt travel planner for Golden Egypt Tours, a luxury company. 
Create a vivid, exciting day-by-day itinerary. Include top sights, hotel suggestions, dining tips, practical advice. Max 380 words. Use emojis. Match the user's language.`,
          messages:[{ role:"user", content:aiInput }],
        }),
      });
      const d = await res.json();
      setAiResult(d.content?.map(i => i.text||"").join("\n") || "No result");
    } catch { setAiResult("⚠️ Connection error. Please try again."); }
    setAiLoading(false);
  }, [aiInput]);

  const rv = (key) => ({
    "data-reveal": key,
    style: { opacity: visible[key] ? 1 : 0, transform: visible[key] ? "none" : "translateY(28px)", transition: "opacity .7s ease, transform .7s ease" },
  });
  
  // ─── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <div style={{ background:"#080603", color:"#F0E4C4", minHeight:"100vh", direction:t.dir, overflowX:"hidden", fontFamily:"'Josefin Sans','Noto Sans Arabic',sans-serif" }}>
      <style>{CSS}</style>
      <div className="hiero-bg" />

      {/* ════════════════════════════════════════════════════════
          NAVBAR
      ════════════════════════════════════════════════════════ */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:1000,
        height:66,
        background: scrolled ? "rgba(8,6,3,0.97)" : "rgba(0,0,0,0.35)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(4px)",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.18)" : "none",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 clamp(16px,4vw,40px)",
        transition:"all .4s ease",
      }}>
        {/* Logo */}
        <div style={{ display:"flex", alignItems:"center", gap:12, cursor:"pointer", flexShrink:0 }} onClick={() => navigate("/")}>
          <div style={{
            width:44, height:44, borderRadius:"50%",
            background:"linear-gradient(135deg,#C9A84C,#8B6914)",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:20, boxShadow:"0 0 20px rgba(201,168,76,.4)",
            flexShrink:0,
          }}>𓂀</div>
          <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(13px,2vw,16px)", fontWeight:700, color:"#C9A84C", letterSpacing:2 }}>GOLDEN EGYPT</div>
            <div style={{ fontSize:"clamp(7px,1vw,9px)", color:"rgba(201,168,76,.5)", letterSpacing:3 }}>TOURS & EXPEDITIONS</div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="desktop-only" style={{ display:"flex", gap:"clamp(14px,2vw,28px)", listStyle:"none", margin:0 }}>
          {t.nav.map((v,i) => (
            <li key={i}>
              <a className="nav-link" style={{ color:"rgba(240,228,196,.75)", fontSize:11, letterSpacing:2, textTransform:"uppercase", textDecoration:"none", cursor:"pointer", transition:"color .2s", fontWeight:600 }}>
                {v}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div style={{ display:"flex", alignItems:"center", gap:8, flexShrink:0 }}>
          {/* Lang */}
          <div style={{ position:"relative" }} className="desktop-only">
            <button onClick={() => { setLangOpen(!langOpen); setCurOpen(false); }}
              style={{ background:"rgba(201,168,76,.08)", border:"1px solid rgba(201,168,76,.25)", color:"#C9A84C", padding:"6px 12px", borderRadius:6, cursor:"pointer", fontSize:11, letterSpacing:1, fontFamily:"'Josefin Sans',sans-serif", fontWeight:600 }}>
              {LANG_MAP[lang]} ▾
            </button>
            {langOpen && (
              <div style={{ position:"absolute", top:"calc(100%+8px)", right:0, background:"#1A1610", border:"1px solid rgba(201,168,76,.2)", borderRadius:10, overflow:"hidden", minWidth:130, zIndex:2000, boxShadow:"0 16px 48px rgba(0,0,0,.6)", animation:"slideDown .2s ease" }}>
                {Object.entries(LANG_MAP).map(([code, label]) => (
                  <div key={code} className="drop-item"
                    style={{ padding:"9px 16px", cursor:"pointer", fontSize:12, color: lang===code ? "#C9A84C" : "rgba(240,228,196,.7)", transition:"all .15s", fontFamily:"'Josefin Sans',sans-serif" }}
                    onClick={() => { setLang(code); setLangOpen(false); }}>
                    {label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Currency */}
          <div style={{ position:"relative" }} className="desktop-only">
            <button onClick={() => { setCurOpen(!curOpen); setLangOpen(false); }}
              style={{ background:"rgba(201,168,76,.08)", border:"1px solid rgba(201,168,76,.25)", color:"#C9A84C", padding:"6px 12px", borderRadius:6, cursor:"pointer", fontSize:11, letterSpacing:1, fontFamily:"'Josefin Sans',sans-serif", fontWeight:600 }}>
              {cur} ▾
            </button>
            {curOpen && (
              <div style={{ position:"absolute", top:"calc(100%+8px)", right:0, background:"#1A1610", border:"1px solid rgba(201,168,76,.2)", borderRadius:10, overflow:"hidden", minWidth:130, zIndex:2000, boxShadow:"0 16px 48px rgba(0,0,0,.6)", animation:"slideDown .2s ease" }}>
                {Object.entries(CURRENCIES).map(([code, { label }]) => (
                  <div key={code} className="drop-item"
                    style={{ padding:"9px 16px", cursor:"pointer", fontSize:11, color: cur===code ? "#C9A84C" : "rgba(240,228,196,.7)", transition:"all .15s", fontFamily:"'Josefin Sans',sans-serif" }}
                    onClick={() => { setCur(code); setCurOpen(false); }}>
                    {label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="book-btn desktop-only" onClick={() => {}}
            style={{ background:"linear-gradient(135deg,#C9A84C,#E8C96D)", color:"#080603", border:"none", borderRadius:8, padding:"9px 20px", cursor:"pointer", fontWeight:700, fontSize:11, letterSpacing:2, textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", boxShadow:"0 4px 18px rgba(201,168,76,.35)", transition:"all .25s", whiteSpace:"nowrap" }}>
            {t.bookNow}
          </button>

          {/* Mobile hamburger */}
          <button className="mobile-only" onClick={() => setMMenu(!mobileMenu)}
            style={{ background:"rgba(201,168,76,.1)", border:"1px solid rgba(201,168,76,.25)", color:"#C9A84C", width:40, height:40, borderRadius:8, cursor:"pointer", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center" }}>
            {mobileMenu ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenu && (
        <div style={{ position:"fixed", top:66, left:0, right:0, background:"rgba(8,6,3,.98)", backdropFilter:"blur(20px)", zIndex:999, padding:"20px 24px 32px", borderBottom:"1px solid rgba(201,168,76,.2)", animation:"slideDown .25s ease" }}>
          {t.nav.map((v,i) => (
            <div key={i} style={{ padding:"14px 0", borderBottom:"1px solid rgba(201,168,76,.08)", color:"rgba(240,228,196,.8)", fontSize:13, letterSpacing:2, textTransform:"uppercase", cursor:"pointer" }} onClick={() => setMMenu(false)}>{v}</div>
          ))}
          <div style={{ display:"flex", gap:10, marginTop:20, flexWrap:"wrap" }}>
            {Object.entries(LANG_MAP).slice(0,5).map(([code,label]) => (
              <button key={code} onClick={() => { setLang(code); setMMenu(false); }}
                style={{ background: lang===code ? "rgba(201,168,76,.2)" : "rgba(201,168,76,.06)", border:"1px solid rgba(201,168,76,.2)", color: lang===code ? "#C9A84C" : "rgba(240,228,196,.6)", borderRadius:6, padding:"6px 12px", cursor:"pointer", fontSize:11, fontFamily:"'Josefin Sans',sans-serif" }}>
                {label}
              </button>
            ))}
          </div>
          <button style={{ marginTop:20, width:"100%", background:"linear-gradient(135deg,#C9A84C,#E8C96D)", color:"#080603", border:"none", borderRadius:10, padding:"13px", cursor:"pointer", fontWeight:700, fontSize:13, letterSpacing:2, fontFamily:"'Josefin Sans',sans-serif" }}>
            {t.bookNow}
          </button>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════ */}
      <section style={{ position:"relative", height:"100vh", minHeight:600, maxHeight:920, overflow:"hidden", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>

        {/* Slideshow BG */}
        {HERO_IMGS.map((img, i) => (
          <div key={i} className={i===heroImg ? "hero-bg" : ""} style={{
            position:"absolute", inset:0,
            backgroundImage:`url(${img})`,
            backgroundSize:"cover", backgroundPosition:"center 40%",
            opacity: i===heroImg ? 1 : 0,
            transition:"opacity 1.4s ease",
          }} />
        ))}

        {/* Gradient overlays */}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(8,6,3,.55) 0%, rgba(8,6,3,.1) 35%, rgba(8,6,3,.75) 80%, rgba(8,6,3,1) 100%)" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, rgba(8,6,3,.5) 0%, transparent 60%)" }} />

        {/* Slide dots */}
        <div style={{ position:"absolute", bottom:"clamp(110px,18vh,160px)", left:"50%", transform:"translateX(-50%)", display:"flex", gap:8, zIndex:5 }}>
          {HERO_IMGS.map((_,i) => (
            <button key={i} onClick={() => setHeroImg(i)} style={{
              width: i===heroImg ? 28 : 8, height:8,
              borderRadius:4, background: i===heroImg ? "#C9A84C" : "rgba(255,255,255,.3)",
              border:"none", cursor:"pointer", transition:"all .4s ease", padding:0,
            }} />
          ))}
        </div>

        {/* HERO CONTENT */}
        <div style={{ position:"relative", zIndex:4, textAlign:"center", padding:"0 clamp(16px,5vw,60px)", width:"100%", maxWidth:900, animation:"fadeUp .9s ease both" }}>

          {/* Tag pill */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(201,168,76,.12)", border:"1px solid rgba(201,168,76,.35)", borderRadius:30, padding:"7px 18px", marginBottom:20, backdropFilter:"blur(10px)" }}>
            <span style={{ color:"#C9A84C", fontSize:10, letterSpacing:3, textTransform:"uppercase", fontWeight:700 }}>✦ {t.hero.tag}</span>
          </div>

          {/* Main title */}
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(36px,7.5vw,88px)", fontWeight:900, lineHeight:1.0, marginBottom:14, color:"#fff", textShadow:"0 4px 32px rgba(0,0,0,.6)" }}>
            <span className="gold-text-anim">{t.hero.title}</span>
          </h1>

          {/* Subtitle */}
          <p style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", fontSize:"clamp(16px,2.5vw,26px)", color:"rgba(240,228,196,.75)", marginBottom:32, fontWeight:400, letterSpacing:.5, animation:"fadeUp .9s ease .2s both", opacity:0 }}>
            {t.hero.sub}
          </p>

          {/* Divider ornament */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:14, marginBottom:36, animation:"fadeUp .9s ease .3s both", opacity:0 }}>
            <div style={{ width:"clamp(40px,6vw,80px)", height:1, background:"linear-gradient(to right,transparent,rgba(201,168,76,.6))" }} />
            <span style={{ fontSize:18, color:"#C9A84C", opacity:.8 }}>𓇛</span>
            <span style={{ fontSize:22, color:"#C9A84C" }}>◆</span>
            <span style={{ fontSize:18, color:"#C9A84C", opacity:.8 }}>𓇛</span>
            <div style={{ width:"clamp(40px,6vw,80px)", height:1, background:"linear-gradient(to left,transparent,rgba(201,168,76,.6))" }} />
          </div>
        </div>
        {/* ── SEARCH BOX ── */}
        <div style={{
          position:"relative", zIndex:5,
          background:"rgba(8,6,3,.82)", backdropFilter:"blur(24px)",
          border:"1px solid rgba(201,168,76,.25)", borderRadius:18,
          padding:"clamp(16px,3vw,24px)", width:"min(900px,94vw)",
          boxShadow:"0 24px 80px rgba(0,0,0,.65), inset 0 1px 0 rgba(201,168,76,.12)",
          animation:"fadeUp .9s ease .35s both", opacity:0,
        }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
            <span style={{ color:"#C9A84C", fontSize:11, letterSpacing:2.5, textTransform:"uppercase", fontWeight:700 }}>✈ {t.hero.search === "Search" ? "Find Your Perfect Trip" : t.hero.search}</span>
            <button style={{ background:"transparent", border:"1px solid rgba(201,168,76,.2)", color:"rgba(201,168,76,.7)", borderRadius:6, padding:"4px 12px", cursor:"pointer", fontSize:10, letterSpacing:1 }}>{t.hero.adv} ▾</button>
          </div>

          <div className="search-grid" style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1.2fr auto", gap:10, alignItems:"end" }}>
            {/* Destination */}
            <div style={{ display:"flex", flexDirection:"column", gap:5 }}>
              <span style={{ fontSize:9, color:"#8A7A5A", letterSpacing:2, textTransform:"uppercase" }}>📍 {t.hero.dest}</span>
              <input placeholder={t.hero.dest} style={{ background:"rgba(201,168,76,.05)", border:"1px solid rgba(201,168,76,.18)", borderRadius:9, padding:"11px 14px", color:"#F0E4C4", fontSize:14, outline:"none", fontFamily:"'Playfair Display',serif", width:"100%", transition:"border-color .2s" }} onFocus={e=>e.target.style.borderColor="rgba(201,168,76,.5)"} onBlur={e=>e.target.style.borderColor="rgba(201,168,76,.18)"} />
            </div>
            {/* Checkin */}
            <div style={{ display:"flex", flexDirection:"column", gap:5 }}>
              <span style={{ fontSize:9, color:"#8A7A5A", letterSpacing:2, textTransform:"uppercase" }}>📅 {t.hero.checkin}</span>
              <input type="date" style={{ background:"rgba(201,168,76,.05)", border:"1px solid rgba(201,168,76,.18)", borderRadius:9, padding:"11px 14px", color:"#F0E4C4", fontSize:13, outline:"none", width:"100%", colorScheme:"dark", transition:"border-color .2s" }} onFocus={e=>e.target.style.borderColor="rgba(201,168,76,.5)"} onBlur={e=>e.target.style.borderColor="rgba(201,168,76,.18)"} />
            </div>
            {/* Checkout */}
            <div style={{ display:"flex", flexDirection:"column", gap:5 }}>
              <span style={{ fontSize:9, color:"#8A7A5A", letterSpacing:2, textTransform:"uppercase" }}>📅 {t.hero.checkout}</span>
              <input type="date" style={{ background:"rgba(201,168,76,.05)", border:"1px solid rgba(201,168,76,.18)", borderRadius:9, padding:"11px 14px", color:"#F0E4C4", fontSize:13, outline:"none", width:"100%", colorScheme:"dark", transition:"border-color .2s" }} onFocus={e=>e.target.style.borderColor="rgba(201,168,76,.5)"} onBlur={e=>e.target.style.borderColor="rgba(201,168,76,.18)"} />
            </div>
            {/* Guests */}
            <div style={{ display:"flex", flexDirection:"column", gap:5, position:"relative" }}>
              <span style={{ fontSize:9, color:"#8A7A5A", letterSpacing:2, textTransform:"uppercase" }}>👥 {t.hero.guests}</span>
              <div onClick={() => setGOpen(!gOpen)} style={{ background:"rgba(201,168,76,.05)", border:"1px solid rgba(201,168,76,.18)", borderRadius:9, padding:"11px 14px", color:"#F0E4C4", fontSize:13, cursor:"pointer", userSelect:"none" }}>
                {adults} {t.hero.adults} · {children} {t.hero.children} ▾
              </div>
              {gOpen && (
                <div style={{ position:"absolute", bottom:"calc(100%+8px)", left:0, background:"#1A1610", border:"1px solid rgba(201,168,76,.22)", borderRadius:12, padding:"16px", minWidth:220, zIndex:100, boxShadow:"0 16px 48px rgba(0,0,0,.7)", animation:"slideDown .2s ease" }} onClick={e=>e.stopPropagation()}>
                  {[[t.hero.adults, adults, setAdults, 1],[t.hero.children, children, setChildren, 0]].map(([label, val, set, min]) => (
                    <div key={label} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                      <span style={{ color:"#F0E4C4", fontSize:13 }}>{label}</span>
                      <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                        <button onClick={()=>set(Math.max(min,val-1))} style={{ width:28, height:28, borderRadius:"50%", background:"rgba(201,168,76,.12)", border:"1px solid rgba(201,168,76,.3)", color:"#C9A84C", cursor:"pointer", fontSize:15, lineHeight:1 }}>−</button>
                        <span style={{ color:"#C9A84C", fontWeight:700, minWidth:16, textAlign:"center" }}>{val}</span>
                        <button onClick={()=>set(val+1)} style={{ width:28, height:28, borderRadius:"50%", background:"rgba(201,168,76,.12)", border:"1px solid rgba(201,168,76,.3)", color:"#C9A84C", cursor:"pointer", fontSize:15, lineHeight:1 }}>+</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Search btn */}
            <button className="hero-search-btn" style={{ background:"linear-gradient(135deg,#C9A84C,#E8C96D)", color:"#080603", border:"none", borderRadius:10, padding:"12px 24px", cursor:"pointer", fontWeight:700, fontSize:11, letterSpacing:2, textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", boxShadow:"0 6px 24px rgba(201,168,76,.4)", transition:"all .25s", whiteSpace:"nowrap" }}>
              🔍 {t.hero.search}
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position:"absolute", bottom:24, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6, zIndex:4, animation:"float 2.5s ease-in-out infinite", opacity:.6 }}>
          <span style={{ fontSize:8, letterSpacing:4, color:"rgba(201,168,76,.6)", textTransform:"uppercase" }}>SCROLL</span>
          <div style={{ width:1, height:36, background:"linear-gradient(to bottom,rgba(201,168,76,.5),transparent)" }} />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STATS BAR — Live Numbers
      ════════════════════════════════════════════════════════ */}
      <div style={{ background:"rgba(26,22,16,.85)", backdropFilter:"blur(16px)", borderTop:"1px solid rgba(201,168,76,.15)", borderBottom:"1px solid rgba(201,168,76,.15)", padding:"clamp(18px,4vw,28px) clamp(16px,5vw,60px)" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:0, maxWidth:960, margin:"0 auto" }}>
          {[["50K+","Happy Travelers","𓀀"],["200+","Curated Tours","𓇳"],["4.9★","Average Rating","𓂀"],["15+","Years of Excellence","𓏏"]].map(([num,label,glyph],i) => (
            <div key={i} {...rv(`stat${i}`)} style={{ ...rv(`stat${i}`).style, textAlign:"center", borderRight: i<3 ? "1px solid rgba(201,168,76,.1)" : "none", padding:"0 20px" }}>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, color:"#C9A84C", fontWeight:900, lineHeight:1, marginBottom:4 }}>{num}</div>
              <div style={{ fontSize:10, color:"rgba(201,168,76,.5)", letterSpacing:2, textTransform:"uppercase" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          MARQUEE STRIP
      ════════════════════════════════════════════════════════ */}
      <div style={{ borderBottom:"1px solid rgba(201,168,76,.1)", padding:"14px 0", background:"rgba(8,6,3,.5)", overflow:"hidden" }}>
        <div className="marquee-inner">
          {[...Array(3)].map((_,idx) => (
            <span key={idx} style={{ display:"inline-flex", alignItems:"center", gap:24, paddingRight:48, fontSize:11, color:"rgba(201,168,76,.45)", letterSpacing:3, textTransform:"uppercase", whiteSpace:"nowrap", fontWeight:600 }}>
              {["Cairo","Luxor","Aswan","Hurghada","Sharm El Sheikh","Alexandria","Fayoum","Marsa Alam","Giza"].map((c,j) => (
                <span key={j} style={{ display:"inline-flex", alignItems:"center", gap:12 }}>
                  <span style={{ color:"#C9A84C", opacity:.4 }}>◆</span>
                  <span>{c}</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      {/* ════════════════════════════════════════════════════════
          TRENDING DESTINATIONS
      ════════════════════════════════════════════════════════ */}
      <section style={{ padding:"clamp(48px,8vw,96px) clamp(16px,5vw,48px)" }}>
        <div {...rv("dests-head")} style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"clamp(24px,4vw,40px)", ...rv("dests-head").style }}>
          <div>
            <div style={{ fontSize:10, color:"#C9A84C", letterSpacing:4, textTransform:"uppercase", marginBottom:8, fontWeight:700 }}>✦ Explore Egypt</div>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(26px,4vw,44px)", fontWeight:900, color:"#F0E4C4" }}>{t.trending.title}</h2>
          </div>
          <button onClick={() => navigate("/tours")} style={{ background:"transparent", border:"1px solid rgba(201,168,76,.3)", color:"#C9A84C", borderRadius:8, padding:"9px 20px", cursor:"pointer", fontSize:10, letterSpacing:2, textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", transition:"all .2s", whiteSpace:"nowrap" }}>
            {t.trending.all} →
          </button>
        </div>

        {/* Featured 3 + Grid */}
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
          {/* Top 3 large */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
            {DESTS.slice(0,3).map((d,i) => (
              <DestCard key={d.id} d={d} navigate={navigate} delay={i*0.1} large />
            ))}
          </div>
          {/* Bottom 7 smaller */}
          <div className="dest-grid" style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:12 }}>
            {DESTS.slice(3).map((d,i) => (
              <DestCard key={d.id} d={d} navigate={navigate} delay={(i+3)*0.07} />
            ))}
          </div>
        </div>
      </section>

      <div className="gold-line" style={{ margin:"0 clamp(16px,5vw,48px)" }} />

      {/* ════════════════════════════════════════════════════════
          HOTELS + CRUISES
      ════════════════════════════════════════════════════════ */}
      <section style={{ padding:"clamp(48px,8vw,96px) clamp(16px,5vw,48px)" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(24px,5vw,60px)" }}>
          {/* Hotels */}
          <div {...rv("hotels")}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:24, ...rv("hotels").style }}>
              <div>
                <div style={{ fontSize:10, color:"#C9A84C", letterSpacing:4, textTransform:"uppercase", marginBottom:6, fontWeight:700 }}>𓇳 Accommodation</div>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(20px,2.5vw,30px)", fontWeight:900 }}>🏨 {t.hotels.title}</h2>
              </div>
              <button style={{ background:"transparent", border:"none", color:"#C9A84C", cursor:"pointer", fontSize:10, letterSpacing:2, textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif" }}>{t.hotels.all} →</button>
            </div>
            <div className="cards-grid-2" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
              {HOTELS.map((h,i) => (
                <div key={i} className="card-hov" style={{ background:"rgba(26,22,16,.7)", border:"1px solid rgba(201,168,76,.12)", borderRadius:14, overflow:"hidden", cursor:"pointer", transition:"all .3s ease", boxShadow:"0 4px 20px rgba(0,0,0,.3)" }}>
                  <div style={{ position:"relative", height:120, overflow:"hidden" }}>
                    <img src={h.img} alt={h.name} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform .5s ease" }} onMouseOver={e=>e.target.style.transform="scale(1.07)"} onMouseOut={e=>e.target.style.transform="scale(1)"}
                      onError={e => e.target.src=`https://placehold.co/400x120/110E08/C9A84C?text=${h.name.slice(0,12)}`} />
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(8,6,3,.8),transparent)" }} />
                    <div style={{ position:"absolute", bottom:8, left:10, right:10, display:"flex", justifyContent:"space-between", alignItems:"flex-end" }}>
                      <div style={{ background:"rgba(201,168,76,.9)", color:"#080603", fontSize:8, fontWeight:800, padding:"2px 8px", borderRadius:10, letterSpacing:1 }}>{h.city}</div>
                      <Stars n={h.stars} />
                    </div>
                  </div>
                  <div style={{ padding:"12px 14px" }}>
                    <div style={{ fontSize:12, fontWeight:700, color:"#F0E4C4", marginBottom:6, lineHeight:1.3 }}>{h.name}</div>
                    <div style={{ display:"flex", alignItems:"baseline", gap:4 }}>
                      <span style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:900, color:"#C9A84C" }}>{fmt(h.price,cur)}</span>
                      <span style={{ fontSize:10, color:"#8A7A5A" }}>{t.hotels.night}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cruises */}
          <div {...rv("cruises")}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:24, ...rv("cruises").style }}>
              <div>
                <div style={{ fontSize:10, color:"#C9A84C", letterSpacing:4, textTransform:"uppercase", marginBottom:6, fontWeight:700 }}>⛴ River Journeys</div>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(20px,2.5vw,30px)", fontWeight:900 }}>🚢 {t.cruises.title}</h2>
              </div>
              <button style={{ background:"transparent", border:"none", color:"#C9A84C", cursor:"pointer", fontSize:10, letterSpacing:2, textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif" }}>{t.cruises.all} →</button>
            </div>
            <div className="cards-grid-2" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
              {CRUISES.map((c,i) => (
                <div key={i} className="card-hov" style={{ background:"rgba(26,22,16,.7)", border:"1px solid rgba(201,168,76,.12)", borderRadius:14, overflow:"hidden", cursor:"pointer", transition:"all .3s ease", boxShadow:"0 4px 20px rgba(0,0,0,.3)" }}>
                  <div style={{ position:"relative", height:120, overflow:"hidden" }}>
                    <img src={c.img} alt={c.name} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform .5s ease" }} onMouseOver={e=>e.target.style.transform="scale(1.07)"} onMouseOut={e=>e.target.style.transform="scale(1)"}
                      onError={e => e.target.src=`https://placehold.co/400x120/110E08/C9A84C?text=${c.name.slice(0,12)}`} />
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(8,6,3,.8),transparent)" }} />
                    <div style={{ position:"absolute", top:8, right:8, background:"rgba(26,22,16,.85)", border:"1px solid rgba(201,168,76,.3)", borderRadius:6, padding:"3px 9px", fontSize:8, color:"#C9A84C", letterSpacing:1 }}>LUXURY</div>
                  </div>
                  <div style={{ padding:"12px 14px" }}>
                    <div style={{ fontSize:12, fontWeight:700, color:"#F0E4C4", marginBottom:4, lineHeight:1.3 }}>{c.name}</div>
                    <Stars n={c.stars} />
                    <div style={{ display:"flex", alignItems:"baseline", gap:4, marginTop:4 }}>
                      <span style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:900, color:"#C9A84C" }}>{fmt(c.price,cur)}</span>
                      <span style={{ fontSize:10, color:"#8A7A5A" }}>{t.cruises.night}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line" style={{ margin:"0 clamp(16px,5vw,48px)" }} />

      {/* ════════════════════════════════════════════════════════
          AI TRIP BUILDER + HOW IT WORKS
      ════════════════════════════════════════════════════════ */}
      <section style={{ padding:"clamp(48px,8vw,96px) clamp(16px,5vw,48px)" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1.1fr .9fr", gap:"clamp(24px,5vw,56px)", alignItems:"start" }}>

          {/* AI Builder */}
          <div {...rv("ai")} style={{ background:"linear-gradient(135deg,rgba(26,22,16,.9),rgba(8,6,3,.95))", border:"1px solid rgba(201,168,76,.22)", borderRadius:20, padding:"clamp(20px,4vw,36px)", position:"relative", overflow:"hidden", ...rv("ai").style }}>
            {/* decorative gradient blob */}
            <div style={{ position:"absolute", top:-40, right:-40, width:200, height:200, background:"radial-gradient(circle,rgba(201,168,76,.12),transparent)", borderRadius:"50%", pointerEvents:"none" }} />
            <div style={{ position:"absolute", bottom:-20, left:-20, width:140, height:140, background:"radial-gradient(circle,rgba(201,168,76,.06),transparent)", borderRadius:"50%", pointerEvents:"none" }} />

            <div style={{ position:"relative" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:6 }}>
                <div style={{ width:38, height:38, borderRadius:10, background:"linear-gradient(135deg,rgba(201,168,76,.2),rgba(201,168,76,.06))", border:"1px solid rgba(201,168,76,.3)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>🤖</div>
                <div>
                  <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(18px,2.5vw,26px)", fontWeight:900, color:"#F0E4C4" }}>{t.ai.title}</h3>
                  <div style={{ fontSize:11, color:"#8A7A5A", marginTop:2 }}>{t.ai.sub}</div>
                </div>
              </div>

              <div style={{ marginBottom:14 }}>
                <div style={{ display:"flex", gap:8, marginBottom:10 }}>
                  <input value={aiInput} onChange={e=>setAiInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleAI()}
                    placeholder={t.ai.ph}
                    style={{ flex:1, background:"rgba(201,168,76,.05)", border:"1px solid rgba(201,168,76,.2)", borderRadius:10, padding:"12px 16px", color:"#F0E4C4", fontSize:13, outline:"none", fontFamily:"'Playfair Display',serif", transition:"border-color .2s" }}
                    onFocus={e=>e.target.style.borderColor="rgba(201,168,76,.5)"} onBlur={e=>e.target.style.borderColor="rgba(201,168,76,.2)"} />
                  <button onClick={handleAI} disabled={aiLoading} style={{ background:"linear-gradient(135deg,#C9A84C,#E8C96D)", color:"#080603", border:"none", borderRadius:10, padding:"12px 20px", cursor:aiLoading?"wait":"pointer", fontWeight:700, fontSize:11, letterSpacing:1.5, fontFamily:"'Josefin Sans',sans-serif", opacity:aiLoading?.6:1, transition:"opacity .2s", whiteSpace:"nowrap" }}>
                    {aiLoading ? <div style={{ width:16, height:16, border:"2px solid rgba(0,0,0,.3)", borderTop:"2px solid #080603", borderRadius:"50%", animation:"spin .7s linear infinite" }} /> : t.ai.gen}
                  </button>
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
                  {t.ai.chips.map((c,i) => (
                    <button key={i} className="chip-btn" onClick={()=>setAiInput(c)}
                      style={{ background:"rgba(201,168,76,.07)", border:"1px solid rgba(201,168,76,.2)", color:"rgba(240,228,196,.7)", borderRadius:20, padding:"5px 13px", fontSize:11, cursor:"pointer", transition:"all .2s", fontFamily:"'Josefin Sans',sans-serif" }}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {aiLoading && (
                <div style={{ display:"flex", alignItems:"center", gap:10, color:"#C9A84C", padding:"8px 0" }}>
                  <div style={{ width:20, height:20, border:"2px solid rgba(201,168,76,.2)", borderTop:"2px solid #C9A84C", borderRadius:"50%", animation:"spin .7s linear infinite" }} />
                  <span style={{ fontSize:13 }}>Building your dream itinerary…</span>
                </div>
              )}
              {aiResult && !aiLoading && (
                <div style={{ background:"rgba(201,168,76,.04)", border:"1px solid rgba(201,168,76,.18)", borderRadius:12, padding:"16px 18px", color:"#F0E4C4", fontSize:13, lineHeight:1.75, whiteSpace:"pre-wrap", maxHeight:300, overflowY:"auto", animation:"fadeIn .4s ease" }}>
                  {aiResult}
                </div>
              )}
            </div>
          </div>

          {/* HOW IT WORKS */}
          <div {...rv("how")} style={{ ...rv("how").style }}>
            <div style={{ fontSize:10, color:"#C9A84C", letterSpacing:4, textTransform:"uppercase", marginBottom:8, fontWeight:700 }}>𓂝 Simple Process</div>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(20px,2.5vw,32px)", fontWeight:900, marginBottom:28 }}>⚙️ How It Works</h2>

            {[["📍","Choose Your Tour","Browse our curated selection"],["⚙️","Customise","Dates, group size & options"],["💳","Secure Payment","Bank-grade encryption"],["✅","Enjoy Egypt!","We handle every detail"]].map((s,i) => (
              <div key={i} style={{ display:"flex", gap:16, marginBottom:20, padding:"16px", borderRadius:12, background:activeStep===i?"rgba(201,168,76,.07)":"transparent", border:`1px solid ${activeStep===i?"rgba(201,168,76,.3)":"rgba(201,168,76,.06)"}`, transition:"all .4s ease" }}>
                <div style={{ width:48, height:48, borderRadius:12, background:activeStep===i?"linear-gradient(135deg,#C9A84C,#E8C96D)":"rgba(201,168,76,.1)", border:activeStep===i?"none":"1px solid rgba(201,168,76,.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0, transition:"all .4s", boxShadow:activeStep===i?"0 6px 24px rgba(201,168,76,.4)":"none" }}>
                  {s[0]}
                </div>
                <div>
                  <div style={{ fontSize:12, fontWeight:700, color:activeStep===i?"#C9A84C":"#F0E4C4", letterSpacing:.5, marginBottom:3, transition:"color .4s" }}>{s[1]}</div>
                  <div style={{ fontSize:12, color:"#8A7A5A", lineHeight:1.5 }}>{s[2]}</div>
                </div>
              </div>
            ))}

            {/* Stats row */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, marginTop:8 }}>
              {[["50K+","Travelers"],["15+","Years"],["4.9★","Rating"]].map(([n,l],i) => (
                <div key={i} style={{ background:"rgba(26,22,16,.8)", border:"1px solid rgba(201,168,76,.12)", borderRadius:10, padding:"14px 10px", textAlign:"center" }}>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:900, color:"#C9A84C" }}>{n}</div>
                  <div style={{ fontSize:9, color:"#8A7A5A", letterSpacing:2, textTransform:"uppercase", marginTop:3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line" style={{ margin:"0 clamp(16px,5vw,48px)" }} />
      {/* ════════════════════════════════════════════════════════
          WHY US
      ════════════════════════════════════════════════════════ */}
      <section style={{ padding:"clamp(48px,8vw,96px) clamp(16px,5vw,48px)" }}>
        <div {...rv("why-head")} style={{ textAlign:"center", marginBottom:"clamp(28px,5vw,52px)", ...rv("why-head").style }}>
          <div style={{ fontSize:10, color:"#C9A84C", letterSpacing:4, textTransform:"uppercase", marginBottom:10, fontWeight:700 }}>✦ Our Promise</div>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(26px,4vw,44px)", fontWeight:900, marginBottom:10 }}>{t.why.title}</h2>
          <p style={{ color:"#8A7A5A", fontSize:14 }}>{t.why.sub}</p>
        </div>

        <div className="why-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16, maxWidth:1100, margin:"0 auto" }}>
          {WHY.map((w,i) => (
            <div key={i} {...rv(`why${i}`)} className="why-card" style={{ background:"rgba(26,22,16,.7)", border:"1px solid rgba(201,168,76,.12)", borderRadius:16, padding:"clamp(18px,3vw,28px)", transition:"all .35s ease", cursor:"default", ...rv(`why${i}`).style }}>
              <div className="why-icon" style={{ fontSize:32, marginBottom:14, display:"block", transition:"transform .3s ease" }}>{w.icon}</div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:16, fontWeight:700, color:"#F0E4C4", marginBottom:8 }}>{w.title}</div>
              <div style={{ fontSize:13, color:"#8A7A5A", lineHeight:1.6 }}>{w.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-line" style={{ margin:"0 clamp(16px,5vw,48px)" }} />

      {/* ════════════════════════════════════════════════════════
          REVIEWS
      ════════════════════════════════════════════════════════ */}
      <section style={{ padding:"clamp(48px,8vw,96px) clamp(16px,5vw,48px)" }}>
        <div {...rv("rev-head")} style={{ textAlign:"center", marginBottom:"clamp(28px,5vw,48px)", ...rv("rev-head").style }}>
          <div style={{ fontSize:10, color:"#C9A84C", letterSpacing:4, textTransform:"uppercase", marginBottom:10, fontWeight:700 }}>⭐ Testimonials</div>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(24px,4vw,42px)", fontWeight:900, marginBottom:8 }}>{t.tests.title}</h2>
          <p style={{ color:"#8A7A5A", fontSize:13 }}>{t.tests.sub}</p>
        </div>

        <div className="reviews-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16, maxWidth:1100, margin:"0 auto" }}>
          {REVIEWS.map((r,i) => (
            <div key={i} {...rv(`rev${i}`)} className="review-card" style={{ background:"rgba(26,22,16,.7)", border:"1px solid rgba(201,168,76,.1)", borderRadius:16, padding:"clamp(16px,3vw,24px)", position:"relative", transition:"all .3s ease", ...rv(`rev${i}`).style }}>
              {/* Quote mark */}
              <div style={{ position:"absolute", top:-8, right:20, fontFamily:"'Playfair Display',serif", fontSize:56, color:"rgba(201,168,76,.12)", lineHeight:1 }}>"</div>
              <Stars n={r.rating} />
              <p style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", fontSize:"clamp(12px,1.5vw,14px)", color:"rgba(240,228,196,.7)", lineHeight:1.7, margin:"12px 0", position:"relative" }}>{r.text}</p>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <img src={r.img} alt={r.name} style={{ width:40, height:40, borderRadius:"50%", border:"2px solid rgba(201,168,76,.3)", objectFit:"cover" }} />
                <div>
                  <div style={{ fontSize:13, fontWeight:700, color:"#F0E4C4" }}>{r.name}</div>
                  <div style={{ fontSize:11, color:"#8A7A5A" }}>{r.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════════════ */}
      <div style={{ margin:"0 clamp(16px,5vw,48px) clamp(48px,8vw,96px)", borderRadius:20, overflow:"hidden", position:"relative" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"url('https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1600&q=70')", backgroundSize:"cover", backgroundPosition:"center", filter:"brightness(.3) saturate(.7)" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(8,6,3,.88),rgba(26,22,16,.75))" }} />
        <div {...rv("cta")} style={{ position:"relative", padding:"clamp(36px,6vw,72px) clamp(24px,6vw,80px)", textAlign:"center", ...rv("cta").style }}>
          <div style={{ fontSize:10, color:"#C9A84C", letterSpacing:4, textTransform:"uppercase", marginBottom:14, fontWeight:700 }}>✦ Start Your Journey</div>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(24px,4vw,48px)", fontWeight:900, marginBottom:12, color:"#fff" }}>
            Ready for an <span className="gold-text">Unforgettable</span> Egyptian Adventure?
          </h2>
          <p style={{ color:"rgba(240,228,196,.6)", fontSize:"clamp(13px,1.8vw,16px)", marginBottom:32, maxWidth:600, margin:"0 auto 32px", lineHeight:1.7, fontFamily:"'Playfair Display',serif", fontStyle:"italic" }}>
            Our expert Egyptologists will craft your perfect personalised journey — every detail, every moment, perfectly handled.
          </p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <button className="book-btn" style={{ background:"linear-gradient(135deg,#C9A84C,#E8C96D)", color:"#080603", border:"none", borderRadius:12, padding:"15px 36px", cursor:"pointer", fontWeight:700, fontSize:13, letterSpacing:2, fontFamily:"'Josefin Sans',sans-serif", boxShadow:"0 8px 32px rgba(201,168,76,.4)", transition:"all .25s" }}>
              ✈ {t.bookNow}
            </button>
            <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer"
              style={{ background:"rgba(37,211,102,.12)", border:"1px solid rgba(37,211,102,.4)", color:"#25D366", borderRadius:12, padding:"15px 28px", cursor:"pointer", fontWeight:700, fontSize:13, letterSpacing:1.5, fontFamily:"'Josefin Sans',sans-serif", textDecoration:"none", display:"flex", alignItems:"center", gap:8, transition:"all .25s" }}>
              💬 {t.chatWA}
            </a>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          NEWSLETTER
      ════════════════════════════════════════════════════════ */}
      <section style={{ background:"rgba(17,14,8,.6)", borderTop:"1px solid rgba(201,168,76,.1)", borderBottom:"1px solid rgba(201,168,76,.1)", padding:"clamp(36px,6vw,64px) clamp(16px,5vw,48px)", textAlign:"center" }}>
        <div {...rv("nl")} style={{ maxWidth:520, margin:"0 auto", ...rv("nl").style }}>
          <div style={{ fontSize:10, color:"#C9A84C", letterSpacing:4, textTransform:"uppercase", marginBottom:10, fontWeight:700 }}>✉ Newsletter</div>
          <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(20px,3vw,32px)", fontWeight:900, marginBottom:8 }}>{t.nl.title}</h3>
          <p style={{ color:"#8A7A5A", fontSize:13, marginBottom:22 }}>{t.nl.sub}</p>
          {!subDone ? (
            <div style={{ display:"flex", gap:10, maxWidth:440, margin:"0 auto" }}>
              <input value={email} onChange={e=>setEmail(e.target.value)} placeholder={t.nl.ph}
                style={{ flex:1, background:"rgba(26,22,16,.8)", border:"1px solid rgba(201,168,76,.2)", borderRadius:10, padding:"12px 16px", color:"#F0E4C4", fontSize:13, outline:"none", fontFamily:"'Playfair Display',serif", transition:"border-color .2s" }}
                onFocus={e=>e.target.style.borderColor="rgba(201,168,76,.5)"} onBlur={e=>e.target.style.borderColor="rgba(201,168,76,.2)"} />
              <button onClick={() => email && setSubDone(true)}
                style={{ background:"linear-gradient(135deg,#C9A84C,#E8C96D)", color:"#080603", border:"none", borderRadius:10, padding:"12px 22px", cursor:"pointer", fontWeight:700, fontSize:11, letterSpacing:1.5, fontFamily:"'Josefin Sans',sans-serif", whiteSpace:"nowrap" }}>
                {t.nl.cta}
              </button>
            </div>
          ) : (
            <div style={{ color:"#C9A84C", fontSize:16, animation:"fadeIn .4s ease" }}>✅ Thank you! Welcome to the Golden Egypt family.</div>
          )}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════════════ */}
      <footer style={{ background:"#060402", borderTop:"1px solid rgba(201,168,76,.12)", padding:"clamp(40px,6vw,72px) clamp(16px,5vw,48px) clamp(20px,4vw,32px)" }}>
        <div className="footer-grid" style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1.5fr", gap:"clamp(24px,4vw,48px)", marginBottom:"clamp(28px,4vw,48px)" }}>
          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
              <div style={{ width:46, height:46, borderRadius:"50%", background:"linear-gradient(135deg,#C9A84C,#8B6914)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>𓂀</div>
              <div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:15, fontWeight:700, color:"#C9A84C", letterSpacing:2 }}>GOLDEN EGYPT</div>
                <div style={{ fontSize:8, color:"rgba(201,168,76,.4)", letterSpacing:3 }}>TOURS & EXPEDITIONS</div>
              </div>
            </div>
            <p style={{ color:"#8A7A5A", fontSize:13, lineHeight:1.7, marginBottom:20, maxWidth:280, fontFamily:"'Playfair Display',serif", fontStyle:"italic" }}>
              Egypt's premier luxury travel platform — crafting extraordinary journeys since 2009.
            </p>
            {/* Trust badges */}
            <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:18 }}>
              {["TripAdvisor","Trustpilot","IATA","UNWTO"].map(b => (
                <span key={b} style={{ background:"rgba(201,168,76,.07)", border:"1px solid rgba(201,168,76,.15)", borderRadius:6, padding:"3px 10px", color:"#8A7A5A", fontSize:9, letterSpacing:1 }}>{b}</span>
              ))}
            </div>
            {/* Socials */}
            <div style={{ display:"flex", gap:8 }}>
              {[["f","Facebook"],["in","Instagram"],["𝕏","X"],["▶","YouTube"]].map(([ic,name]) => (
                <a key={name} href="#" title={name} style={{ width:34, height:34, borderRadius:8, background:"rgba(201,168,76,.07)", border:"1px solid rgba(201,168,76,.15)", display:"flex", alignItems:"center", justifyContent:"center", color:"#8A7A5A", textDecoration:"none", fontSize:12, transition:"all .2s" }}>
                  {ic}
                </a>
              ))}
            </div>
          </div>

          {[
            { title:"Destinations", links:["Cairo & Giza","Luxor","Aswan","Hurghada","Sharm El Sheikh","Alexandria","Fayoum","Marsa Alam"] },
            { title:"Travel Types", links:["Day Tours","Multi-Day Packages","Nile Cruises","Private Tours","Honeymoon","Family Trips","Group Tours"] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ color:"#C9A84C", fontSize:10, letterSpacing:3, textTransform:"uppercase", marginBottom:16, fontWeight:700, paddingBottom:10, borderBottom:"1px solid rgba(201,168,76,.1)" }}>{col.title}</div>
              {col.links.map(link => (
                <a key={link} href="#" style={{ display:"block", color:"#8A7A5A", fontSize:13, marginBottom:10, textDecoration:"none", transition:"color .2s", lineHeight:1.4 }}
                  onMouseOver={e=>e.target.style.color="#C9A84C"} onMouseOut={e=>e.target.style.color="#8A7A5A"}>
                  {link}
                </a>
              ))}
            </div>
          ))}

          {/* Contact */}
          <div>
            <div style={{ color:"#C9A84C", fontSize:10, letterSpacing:3, textTransform:"uppercase", marginBottom:16, fontWeight:700, paddingBottom:10, borderBottom:"1px solid rgba(201,168,76,.1)" }}>Contact</div>
            {[["✉","Goldenegypttours26@gmail.com"],["📞","+20 106 825 7754"],["📍","Cairo, Egypt"]].map(([ic,val]) => (
              <div key={val} style={{ display:"flex", alignItems:"flex-start", gap:10, marginBottom:12, fontSize:13, color:"#8A7A5A", lineHeight:1.5 }}>
                <span style={{ color:"#C9A84C", flexShrink:0 }}>{ic}</span>{val}
              </div>
            ))}
            <div style={{ marginTop:16 }}>
              <div style={{ color:"#C9A84C", fontSize:10, letterSpacing:2, textTransform:"uppercase", marginBottom:10, fontWeight:700 }}>Legal</div>
              {["Privacy Policy","Terms of Service","Cookie Policy","FAQ"].map(l => (
                <a key={l} href="#" style={{ display:"block", color:"#8A7A5A", fontSize:12, marginBottom:8, textDecoration:"none", transition:"color .2s" }}
                  onMouseOver={e=>e.target.style.color="#C9A84C"} onMouseOut={e=>e.target.style.color="#8A7A5A"}>
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:"1px solid rgba(201,168,76,.08)", paddingTop:"clamp(16px,3vw,24px)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
          <span style={{ color:"#4A3A2A", fontSize:12 }}>© 2026 Golden Egypt Tours & Expeditions. All rights reserved.</span>
          <div style={{ display:"flex", gap:8 }}>
            {["🔒 SSL SECURED","✈ IATA MEMBER","🌍 UNWTO"].map(b => (
              <span key={b} style={{ background:"rgba(201,168,76,.06)", border:"1px solid rgba(201,168,76,.12)", borderRadius:6, padding:"3px 10px", color:"#6A5A3A", fontSize:9, letterSpacing:1 }}>{b}</span>
            ))}
          </div>
        </div>
      </footer>
      {/* ════════════════════════════════════════════════════════
          FLOATING BUTTONS
      ════════════════════════════════════════════════════════ */}
      <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="wa-float"
        style={{ position:"fixed", bottom:80, right:20, background:"#25D366", color:"#fff", borderRadius:30, padding:"11px 18px", textDecoration:"none", fontWeight:700, fontSize:12, letterSpacing:1, display:"flex", alignItems:"center", gap:8, zIndex:500, boxShadow:"0 6px 28px rgba(37,211,102,.45)", transition:"all .25s", fontFamily:"'Josefin Sans',sans-serif" }}>
        💬 <span>{t.chatWA}</span>
      </a>

      <button className="scroll-top" onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
        style={{ position:"fixed", bottom:22, right:20, width:46, height:46, borderRadius:12, background:"rgba(201,168,76,.12)", border:"1px solid rgba(201,168,76,.3)", color:"#C9A84C", fontSize:16, cursor:"pointer", zIndex:500, display:"flex", alignItems:"center", justifyContent:"center", transition:"all .25s", boxShadow:"0 4px 16px rgba(0,0,0,.4)" }}>
        ▲
      </button>
    </div>
  );
}

// ─── DEST CARD SUB-COMPONENT ──────────────────────────────────────────────────
function DestCard({ d, navigate, delay, large }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="dest-card"
      onClick={() => navigate(`/city/${d.id}`)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position:"relative", borderRadius:14, overflow:"hidden",
        height: large ? "clamp(200px,22vw,300px)" : "clamp(120px,14vw,170px)",
        cursor:"pointer",
        border:`1px solid ${hov ? d.color+"66" : "rgba(201,168,76,.12)"}`,
        transition:"all .4s ease",
        transform: hov ? "translateY(-5px)" : "none",
        boxShadow: hov ? `0 20px 50px rgba(0,0,0,.55), 0 0 0 1px ${d.color}33` : "0 4px 16px rgba(0,0,0,.3)",
        animationDelay:`${delay}s`,
      }}
    >
      <img
        src={d.img} alt={d.name}
        className="dest-img"
        style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform .55s ease", transform: hov ? "scale(1.08)" : "scale(1)" }}
        onError={e => e.target.src=`https://placehold.co/400x200/110E08/${d.color.replace('#','')}?text=${d.name}`}
      />

      {/* Gradient */}
      <div className="dest-overlay" style={{ position:"absolute", inset:0, background:`linear-gradient(to top, rgba(8,6,3,.92) 0%, rgba(8,6,3,.2) 55%, transparent 100%)`, transition:"opacity .4s", opacity:.75 }} />

      {/* Gold shimmer on hover */}
      {hov && <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse at 50% 100%, ${d.color}1A, transparent 70%)` }} />}

      {/* Tag */}
      <div style={{ position:"absolute", top:10, left:10, background:`${d.color}22`, border:`1px solid ${d.color}55`, borderRadius:20, padding:"3px 10px", fontSize:8, fontWeight:700, color:d.color, letterSpacing:1.5, textTransform:"uppercase", backdropFilter:"blur(8px)" }}>
        {d.tag}
      </div>

      {/* Content */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"12px 14px" }}>
        <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize: large ? "clamp(16px,2vw,22px)" : "clamp(11px,1.4vw,14px)", color:"#fff", marginBottom:3, textShadow:"0 2px 10px rgba(0,0,0,.8)" }}>{d.name}</div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ fontSize: large ? 10 : 8, color: d.color, letterSpacing:1, fontWeight:700 }}>{d.tours} tours</div>
          <div className="dest-arrow" style={{ color: d.color, fontSize:14, opacity:0, transform:"translateX(-8px)", transition:"all .3s" }}>→</div>
        </div>
      </div>
    </div>
  );
}