import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import AITripBuilder from "../components/AITripBuilder";
// ─── CURRENCIES ───────────────────────────────────────────────
const CURR = {
  USD:{s:"$",    r:1,      l:"USD — US Dollar"},
  EUR:{s:"€",    r:0.92,   l:"EUR — Euro"},
  GBP:{s:"£",    r:0.79,   l:"GBP — British Pound"},
  EGP:{s:"ج.م", r:48.5,   l:"EGP — Egyptian Pound"},
  BRL:{s:"R$",  r:4.97,   l:"BRL — Brazilian Real"},
  MXN:{s:"MX$", r:17.1,   l:"MXN — Mexican Peso"},
  CNY:{s:"¥",    r:7.24,   l:"CNY — Chinese Yuan"},
  JPY:{s:"¥",    r:149.5,  l:"JPY — Japanese Yen"},
  RUB:{s:"₽",    r:90.5,   l:"RUB — Russian Ruble"},
  KWD:{s:"د.ك", r:0.31,   l:"KWD — Kuwaiti Dinar"},
  SAR:{s:"﷼",   r:3.75,   l:"SAR — Saudi Riyal"},
};

// ─── LANGUAGES ────────────────────────────────────────────────
const LANGS = {
  en:{flag:"🇬🇧",label:"English",   dir:"ltr"},
  es:{flag:"🇪🇸",label:"Español",   dir:"ltr"},
  it:{flag:"🇮🇹",label:"Italiano",  dir:"ltr"},
  fr:{flag:"🇫🇷",label:"Français",  dir:"ltr"},
  ar:{flag:"🇪🇬",label:"العربية",   dir:"rtl"},
  de:{flag:"🇩🇪",label:"Deutsch",   dir:"ltr"},
  pt:{flag:"🇵🇹",label:"Português", dir:"ltr"},
  zh:{flag:"🇨🇳",label:"中文",       dir:"ltr"},
  nl:{flag:"🇳🇱",label:"Nederlands",dir:"ltr"},
  ja:{flag:"🇯🇵",label:"日本語",     dir:"ltr"},
  ru:{flag:"🇷🇺",label:"Русский",   dir:"ltr"},
};

// ─── TRANSLATIONS ─────────────────────────────────────────────
const TR = {
  en:{
    nav:{home:"Home",tours:"Tours",cruises:"Nile Cruises",hotels:"Hotels",about:"About",contact:"Contact"},
    heroTag:"Award-Winning Egypt Specialists Since 2009",
    title:"GOLDEN EGYPT", sub:"Tours & Expeditions",
    desc:"Five millennia of wonder — one extraordinary journey",
    searchPh:"Search destinations, tours, experiences…",
    adv:"Advanced Search", checkin:"Check-in", checkout:"Check-out",
    guests:"Guests", adults:"Adults", children:"Children",
    tourType:"Tour Type", searchBtn:"Search Egypt",
    destTitle:"Explore Egypt", destSub:"Ten legendary destinations · Infinite stories",
    viewAll:"View All", hotelsT:"Luxury Hotels", cruisesT:"Nile Cruises",
    perNight:"/ night", aiTitle:"AI Itinerary Builder",
    aiSub:"Describe your dream Egypt trip — get a complete day-by-day itinerary with real prices",
    aiLabel:"✦ Describe your dream Egypt journey",
    aiBtn:"Build My Itinerary →", aiThink:"Crafting your perfect Egypt journey…",
    aiSend:"💬 Send & Book on WhatsApp", aiNew:"New Itinerary",
    whyTitle:"Why Golden Egypt Tours", whySub:"The world's most trusted Egypt specialist",
    revTitle:"50,000+ Happy Travellers", revSub:"Real stories from real adventurers",
    ctaTitle:"Ready for an Unforgettable Adventure?",
    ctaDesc:"Let our expert Egyptologists craft your perfect personalised journey",
    bookNow:"Book Now", whatsapp:"WhatsApp",
    nlTitle:"Exclusive Egypt Deals", nlSub:"Join 200,000+ travellers. Unsubscribe anytime.",
    nlPh:"Your email address", nlBtn:"Subscribe",
    footerTag:"Egypt's premier luxury travel platform — crafting extraordinary journeys since 2009.",
  },
  ar:{
    nav:{home:"الرئيسية",tours:"الجولات",cruises:"رحلات النيل",hotels:"الفنادق",about:"من نحن",contact:"تواصل"},
    heroTag:"متخصصون رقم 1 في سياحة مصر منذ 2009",
    title:"جولدن إيجيبت", sub:"تورز وإكسبيديشنز",
    desc:"خمسة آلاف عام من العجائب — رحلة واحدة استثنائية",
    searchPh:"ابحث عن وجهات وجولات وتجارب…",
    adv:"بحث متقدم", checkin:"الوصول", checkout:"المغادرة",
    guests:"الضيوف", adults:"بالغين", children:"أطفال",
    tourType:"نوع الجولة", searchBtn:"ابحث في مصر",
    destTitle:"استكشف مصر", destSub:"عشر وجهات أسطورية · قصص لا حصر لها",
    viewAll:"عرض الكل", hotelsT:"الفنادق الفاخرة", cruisesT:"رحلات النيل",
    perNight:"/ ليلة", aiTitle:"منشئ الرحلات بالذكاء الاصطناعي",
    aiSub:"صف رحلتك المثالية في مصر — احصل على برنامج يومي كامل بأسعار حقيقية",
    aiLabel:"✦ أخبرنا عن رحلة مصر التي تحلم بها",
    aiBtn:"ابنِ رحلتي ←", aiThink:"جاري تصميم رحلتك المثالية…",
    aiSend:"💬 أرسل واحجز عبر واتساب", aiNew:"رحلة جديدة",
    whyTitle:"لماذا جولدن إيجيبت تورز", whySub:"المتخصص الأكثر موثوقية في سياحة مصر عالمياً",
    revTitle:"+50,000 مسافر سعيد", revSub:"قصص حقيقية من مغامرين حقيقيين",
    ctaTitle:"مستعد لمغامرة لا تُنسى؟",
    ctaDesc:"دع خبراؤنا في علم المصريات يصمموا رحلتك المثالية",
    bookNow:"احجز الآن", whatsapp:"واتساب",
    nlTitle:"عروض مصر الحصرية", nlSub:"انضم لأكثر من 200,000 مسافر.",
    nlPh:"بريدك الإلكتروني", nlBtn:"اشترك",
    footerTag:"منصة سياحة مصر الفاخرة — نصنع رحلات استثنائية منذ 2009.",
  },
  es:{
    nav:{home:"Inicio",tours:"Tours",cruises:"Cruceros Nilo",hotels:"Hoteles",about:"Nosotros",contact:"Contacto"},
    heroTag:"Especialistas N°1 en Egipto desde 2009",
    title:"GOLDEN EGYPT", sub:"Tours & Expeditions",
    desc:"Cinco milenios de maravillas — un viaje extraordinario",
    searchPh:"Buscar destinos, tours, experiencias…",
    adv:"Búsqueda Avanzada", checkin:"Llegada", checkout:"Salida",
    guests:"Huéspedes", adults:"Adultos", children:"Niños",
    tourType:"Tipo de Tour", searchBtn:"Buscar Egipto",
    destTitle:"Explorar Egipto", destSub:"Diez destinos legendarios · Historias infinitas",
    viewAll:"Ver Todo", hotelsT:"Hoteles de Lujo", cruisesT:"Cruceros por el Nilo",
    perNight:"/ noche", aiTitle:"Constructor de Viajes IA",
    aiSub:"Describe tu viaje soñado — obtén un itinerario completo con precios reales",
    aiLabel:"✦ Cuéntanos tu viaje soñado a Egipto",
    aiBtn:"Crear Mi Itinerario →", aiThink:"Creando tu itinerario perfecto…",
    aiSend:"💬 Enviar y Reservar por WhatsApp", aiNew:"Nuevo Itinerario",
    whyTitle:"¿Por qué Golden Egypt Tours?", whySub:"El especialista más confiable de Egipto en el mundo",
    revTitle:"50.000+ Viajeros Felices", revSub:"Historias reales de aventureros reales",
    ctaTitle:"¿Listo para una Aventura Inolvidable?",
    ctaDesc:"Nuestros expertos en Egiptología crean tu viaje perfecto",
    bookNow:"Reservar Ahora", whatsapp:"WhatsApp",
    nlTitle:"Ofertas Exclusivas de Egipto", nlSub:"Únete a 200.000+ viajeros.",
    nlPh:"Tu correo electrónico", nlBtn:"Suscribirse",
    footerTag:"La plataforma de viajes de lujo de Egipto — viajes extraordinarios desde 2009.",
  },
  de:{
    nav:{home:"Startseite",tours:"Touren",cruises:"Nilkreuzfahrten",hotels:"Hotels",about:"Über Uns",contact:"Kontakt"},
    heroTag:"Ägyptens führende Reisespezialisten seit 2009",
    title:"GOLDEN EGYPT", sub:"Tours & Expeditions",
    desc:"Fünf Jahrtausende Wunder — eine außergewöhnliche Reise",
    searchPh:"Ziele, Touren, Erlebnisse suchen…",
    adv:"Erweiterte Suche", checkin:"Check-in", checkout:"Check-out",
    guests:"Gäste", adults:"Erwachsene", children:"Kinder",
    tourType:"Tourtyp", searchBtn:"Ägypten Suchen",
    destTitle:"Ägypten Entdecken", destSub:"Zehn legendäre Ziele · Unendliche Geschichten",
    viewAll:"Alle anzeigen", hotelsT:"Luxushotels", cruisesT:"Nilkreuzfahrten",
    perNight:"/ Nacht", aiTitle:"KI-Reiseplaner",
    aiSub:"Beschreibe deine Traumreise — erhalte ein vollständiges Itinerar mit echten Preisen",
    aiLabel:"✦ Beschreibe deine Traumreise nach Ägypten",
    aiBtn:"Mein Itinerar Erstellen →", aiThink:"Dein perfektes Ägypten-Itinerar wird erstellt…",
    aiSend:"💬 Senden & Buchen per WhatsApp", aiNew:"Neues Itinerar",
    whyTitle:"Warum Golden Egypt Tours?", whySub:"Der vertrauenswürdigste Ägypten-Spezialist weltweit",
    revTitle:"50.000+ zufriedene Reisende", revSub:"Echte Geschichten echter Abenteurer",
    ctaTitle:"Bereit für ein unvergessliches Abenteuer?",
    ctaDesc:"Unsere Ägyptologen-Experten gestalten Ihre perfekte Reise",
    bookNow:"Jetzt Buchen", whatsapp:"WhatsApp",
    nlTitle:"Exklusive Ägypten-Angebote", nlSub:"Schließe dich 200.000+ Reisenden an.",
    nlPh:"Deine E-Mail", nlBtn:"Abonnieren",
    footerTag:"Ägyptens führende Luxusreiseplattform — außergewöhnliche Reisen seit 2009.",
  },
  fr:{
    nav:{home:"Accueil",tours:"Tours",cruises:"Croisières Nil",hotels:"Hôtels",about:"À Propos",contact:"Contact"},
    heroTag:"Spécialistes N°1 de l'Égypte depuis 2009",
    title:"GOLDEN EGYPT", sub:"Tours & Expéditions",
    desc:"Cinq millénaires de merveilles — un voyage extraordinaire",
    searchPh:"Rechercher destinations, tours, expériences…",
    adv:"Recherche Avancée", checkin:"Arrivée", checkout:"Départ",
    guests:"Voyageurs", adults:"Adultes", children:"Enfants",
    tourType:"Type de Tour", searchBtn:"Rechercher Égypte",
    destTitle:"Explorer l'Égypte", destSub:"Dix destinations légendaires · Des histoires infinies",
    viewAll:"Voir Tout", hotelsT:"Hôtels de Luxe", cruisesT:"Croisières sur le Nil",
    perNight:"/ nuit", aiTitle:"Créateur d'Itinéraire IA",
    aiSub:"Décrivez votre voyage de rêve — obtenez un itinéraire complet avec prix réels",
    aiLabel:"✦ Décrivez votre voyage de rêve en Égypte",
    aiBtn:"Créer Mon Itinéraire →", aiThink:"Création de votre itinéraire parfait…",
    aiSend:"💬 Envoyer & Réserver par WhatsApp", aiNew:"Nouvel Itinéraire",
    whyTitle:"Pourquoi Golden Egypt Tours ?", whySub:"Le spécialiste le plus fiable de l'Égypte au monde",
    revTitle:"50 000+ Voyageurs Heureux", revSub:"Vraies histoires de vrais aventuriers",
    ctaTitle:"Prêt pour une Aventure Inoubliable ?",
    ctaDesc:"Nos experts égyptologues créent votre voyage parfait",
    bookNow:"Réserver", whatsapp:"WhatsApp",
    nlTitle:"Offres Exclusives Égypte", nlSub:"Rejoignez 200 000+ voyageurs.",
    nlPh:"Votre e-mail", nlBtn:"S'abonner",
    footerTag:"La plateforme de voyages de luxe en Égypte — des voyages extraordinaires depuis 2009.",
  },
  it:{
    nav:{home:"Home",tours:"Tour",cruises:"Crociere Nilo",hotels:"Hotel",about:"Chi Siamo",contact:"Contatti"},
    heroTag:"Specialisti N°1 in Egitto dal 2009",
    title:"GOLDEN EGYPT", sub:"Tours & Expeditions",
    desc:"Cinque millenni di meraviglie — un viaggio straordinario",
    searchPh:"Cerca destinazioni, tour, esperienze…",
    adv:"Ricerca Avanzata", checkin:"Check-in", checkout:"Check-out",
    guests:"Ospiti", adults:"Adulti", children:"Bambini",
    tourType:"Tipo di Tour", searchBtn:"Cerca Egitto",
    destTitle:"Esplora l'Egitto", destSub:"Dieci destinazioni leggendarie · Storie infinite",
    viewAll:"Vedi Tutto", hotelsT:"Hotel di Lusso", cruisesT:"Crociere sul Nilo",
    perNight:"/ notte", aiTitle:"Creatore Itinerario IA",
    aiSub:"Descrivi il tuo viaggio dei sogni — ottieni un itinerario completo con prezzi reali",
    aiLabel:"✦ Descrivi il tuo viaggio dei sogni in Egitto",
    aiBtn:"Crea Il Mio Itinerario →", aiThink:"Creazione del tuo itinerario perfetto…",
    aiSend:"💬 Invia e Prenota su WhatsApp", aiNew:"Nuovo Itinerario",
    whyTitle:"Perché Golden Egypt Tours?", whySub:"Lo specialista più affidabile dell'Egitto nel mondo",
    revTitle:"50.000+ Viaggiatori Felici", revSub:"Storie vere da veri avventurieri",
    ctaTitle:"Pronto per un'Avventura Indimenticabile?",
    ctaDesc:"I nostri esperti egittologi creano il tuo viaggio perfetto",
    bookNow:"Prenota Ora", whatsapp:"WhatsApp",
    nlTitle:"Offerte Esclusive Egitto", nlSub:"Unisciti a 200.000+ viaggiatori.",
    nlPh:"La tua email", nlBtn:"Iscriviti",
    footerTag:"La piattaforma di viaggi di lusso in Egitto — viaggi straordinari dal 2009.",
  },
  pt:{
    nav:{home:"Início",tours:"Tours",cruises:"Cruzeiros Nilo",hotels:"Hotéis",about:"Sobre Nós",contact:"Contato"},
    heroTag:"Especialistas N°1 no Egito desde 2009",
    title:"GOLDEN EGYPT", sub:"Tours & Expeditions",
    desc:"Cinco milênios de maravilhas — uma jornada extraordinária",
    searchPh:"Pesquisar destinos, tours, experiências…",
    adv:"Pesquisa Avançada", checkin:"Check-in", checkout:"Check-out",
    guests:"Hóspedes", adults:"Adultos", children:"Crianças",
    tourType:"Tipo de Tour", searchBtn:"Pesquisar Egito",
    destTitle:"Explorar o Egito", destSub:"Dez destinos lendários · Histórias infinitas",
    viewAll:"Ver Tudo", hotelsT:"Hotéis de Luxo", cruisesT:"Cruzeiros no Nilo",
    perNight:"/ noite", aiTitle:"Criador de Itinerário IA",
    aiSub:"Descreva sua viagem dos sonhos — obtenha um itinerário completo com preços reais",
    aiLabel:"✦ Conte-nos sobre sua viagem dos sonhos no Egito",
    aiBtn:"Criar Meu Itinerário →", aiThink:"Criando seu itinerário perfeito…",
    aiSend:"💬 Enviar e Reservar pelo WhatsApp", aiNew:"Novo Itinerário",
    whyTitle:"Por que Golden Egypt Tours?", whySub:"O especialista mais confiável do Egito no mundo",
    revTitle:"50.000+ Viajantes Felizes", revSub:"Histórias reais de aventureiros reais",
    ctaTitle:"Pronto para uma Aventura Inesquecível?",
    ctaDesc:"Nossos especialistas em Egiptologia criam sua viagem perfeita",
    bookNow:"Reservar Agora", whatsapp:"WhatsApp",
    nlTitle:"Ofertas Exclusivas do Egito", nlSub:"Junte-se a 200.000+ viajantes.",
    nlPh:"Seu endereço de e-mail", nlBtn:"Inscrever-se",
    footerTag:"A plataforma de viagens de luxo do Egito — viagens extraordinárias desde 2009.",
  },
  ru:{
    nav:{home:"Главная",tours:"Туры",cruises:"Нил Круизы",hotels:"Отели",about:"О Нас",contact:"Контакты"},
    heroTag:"Специалисты №1 по Египту с 2009 года",
    title:"GOLDEN EGYPT", sub:"Туры и Экспедиции",
    desc:"Пять тысячелетий чудес — одно удивительное путешествие",
    searchPh:"Поиск направлений, туров, впечатлений…",
    adv:"Расширенный Поиск", checkin:"Заезд", checkout:"Выезд",
    guests:"Гости", adults:"Взрослые", children:"Дети",
    tourType:"Тип Тура", searchBtn:"Поиск Египет",
    destTitle:"Исследуйте Египет", destSub:"Десять легендарных направлений · Бесконечные истории",
    viewAll:"Смотреть всё", hotelsT:"Роскошные Отели", cruisesT:"Круизы по Нилу",
    perNight:"/ ночь", aiTitle:"ИИ Планировщик Путешествий",
    aiSub:"Опишите вашу мечту — получите полный маршрут с реальными ценами",
    aiLabel:"✦ Расскажите нам о вашем мечтаемом путешествии в Египет",
    aiBtn:"Создать Мой Маршрут →", aiThink:"Создаём ваш идеальный маршрут…",
    aiSend:"💬 Отправить и Забронировать в WhatsApp", aiNew:"Новый Маршрут",
    whyTitle:"Почему Golden Egypt Tours?", whySub:"Самый надёжный специалист по Египту в мире",
    revTitle:"50 000+ Довольных Путешественников", revSub:"Настоящие истории настоящих искателей приключений",
    ctaTitle:"Готовы к Незабываемому Приключению?",
    ctaDesc:"Наши эксперты-египтологи создадут ваше идеальное путешествие",
    bookNow:"Забронировать", whatsapp:"WhatsApp",
    nlTitle:"Эксклюзивные Предложения Египта", nlSub:"Присоединитесь к 200 000+ путешественников.",
    nlPh:"Ваш адрес электронной почты", nlBtn:"Подписаться",
    footerTag:"Ведущая платформа роскошных путешествий в Египет — с 2009 года.",
  },
  zh:{
    nav:{home:"首页",tours:"旅游",cruises:"尼罗河游轮",hotels:"酒店",about:"关于我们",contact:"联系"},
    heroTag:"2009年以来埃及专业旅行社第一名",
    title:"黄金埃及", sub:"旅游与探险",
    desc:"五千年奇迹 — 一次非凡的旅程",
    searchPh:"搜索目的地、旅游、体验…",
    adv:"高级搜索", checkin:"入住", checkout:"退房",
    guests:"客人", adults:"成人", children:"儿童",
    tourType:"旅游类型", searchBtn:"搜索埃及",
    destTitle:"探索埃及", destSub:"十个传奇目的地 · 无限故事",
    viewAll:"查看全部", hotelsT:"豪华酒店", cruisesT:"尼罗河游轮",
    perNight:"/ 晚", aiTitle:"AI行程规划师",
    aiSub:"描述您的梦想埃及之旅 — 获得完整的每日行程和真实价格",
    aiLabel:"✦ 告诉我们您梦想的埃及之旅",
    aiBtn:"制定我的行程 →", aiThink:"正在制定您的完美行程…",
    aiSend:"💬 发送并通过WhatsApp预订", aiNew:"新行程",
    whyTitle:"为什么选择黄金埃及旅游？", whySub:"全球最值得信赖的埃及旅游专家",
    revTitle:"50,000+ 满意旅客", revSub:"真实旅行者的真实故事",
    ctaTitle:"准备好难忘的冒险了吗？",
    ctaDesc:"让我们的埃及学专家为您打造完美旅程",
    bookNow:"立即预订", whatsapp:"WhatsApp",
    nlTitle:"埃及独家优惠", nlSub:"加入200,000+旅客。",
    nlPh:"您的电子邮件地址", nlBtn:"订阅",
    footerTag:"埃及顶级豪华旅游平台 — 自2009年以来打造非凡旅程。",
  },
  nl:{
    nav:{home:"Home",tours:"Tours",cruises:"Nijlcruises",hotels:"Hotels",about:"Over Ons",contact:"Contact"},
    heroTag:"Egypte Specialisten N°1 sinds 2009",
    title:"GOLDEN EGYPT", sub:"Tours & Expeditions",
    desc:"Vijf millennia van wonderen — één buitengewone reis",
    searchPh:"Zoek bestemmingen, tours, ervaringen…",
    adv:"Geavanceerd Zoeken", checkin:"Check-in", checkout:"Check-out",
    guests:"Gasten", adults:"Volwassenen", children:"Kinderen",
    tourType:"Tourtype", searchBtn:"Egypte Zoeken",
    destTitle:"Egypte Verkennen", destSub:"Tien legendarische bestemmingen · Oneindige verhalen",
    viewAll:"Alles Bekijken", hotelsT:"Luxe Hotels", cruisesT:"Nijlcruises",
    perNight:"/ nacht", aiTitle:"AI Reisplanner",
    aiSub:"Beschrijf uw droomreis — ontvang een volledig dag-voor-dag itinerair met echte prijzen",
    aiLabel:"✦ Vertel ons over uw droomreis naar Egypte",
    aiBtn:"Maak Mijn Reisplan →", aiThink:"Uw perfecte reisplan wordt gemaakt…",
    aiSend:"💬 Versturen & Boeken via WhatsApp", aiNew:"Nieuw Reisplan",
    whyTitle:"Waarom Golden Egypt Tours?", whySub:"De meest betrouwbare Egypte-specialist ter wereld",
    revTitle:"50.000+ Blije Reizigers", revSub:"Echte verhalen van echte avonturiers",
    ctaTitle:"Klaar voor een Onvergetelijk Avontuur?",
    ctaDesc:"Onze Egyptoloog-experts creëren uw perfecte reis",
    bookNow:"Nu Boeken", whatsapp:"WhatsApp",
    nlTitle:"Exclusieve Egypte Deals", nlSub:"Sluit je aan bij 200.000+ reizigers.",
    nlPh:"Uw e-mailadres", nlBtn:"Abonneren",
    footerTag:"Egypte's toonaangevende luxe reisplatform — buitengewone reizen sinds 2009.",
  },
  ja:{
    nav:{home:"ホーム",tours:"ツアー",cruises:"ナイル川クルーズ",hotels:"ホテル",about:"会社情報",contact:"お問合せ"},
    heroTag:"2009年以来エジプト専門旅行社第1位",
    title:"ゴールデンエジプト", sub:"ツアー＆エクスペディション",
    desc:"五千年の驚異 — 一つの特別な旅",
    searchPh:"目的地、ツアー、体験を検索…",
    adv:"詳細検索", checkin:"チェックイン", checkout:"チェックアウト",
    guests:"ゲスト", adults:"大人", children:"子供",
    tourType:"ツアータイプ", searchBtn:"エジプトを検索",
    destTitle:"エジプトを探索", destSub:"10の伝説の目的地 · 無限の物語",
    viewAll:"すべて見る", hotelsT:"ラグジュアリーホテル", cruisesT:"ナイル川クルーズ",
    perNight:"/ 泊", aiTitle:"AIイティネラリービルダー",
    aiSub:"夢のエジプト旅行を説明してください — 実際の価格付きの完全な日程表を取得",
    aiLabel:"✦ エジプトへの夢の旅について教えてください",
    aiBtn:"旅程を作成 →", aiThink:"完璧な旅程を作成中…",
    aiSend:"💬 WhatsAppで送信・予約", aiNew:"新しい旅程",
    whyTitle:"なぜゴールデンエジプトツアーズ？", whySub:"世界で最も信頼されるエジプト専門家",
    revTitle:"50,000人以上の満足旅行者", revSub:"本物の旅行者の本物の物語",
    ctaTitle:"忘れられない冒険の準備はできていますか？",
    ctaDesc:"エジプト学の専門家があなたの完璧な旅を作ります",
    bookNow:"今すぐ予約", whatsapp:"WhatsApp",
    nlTitle:"エジプト限定特典", nlSub:"200,000人以上の旅行者に参加。",
    nlPh:"メールアドレス", nlBtn:"登録",
    footerTag:"エジプトのプレミアムラグジュアリー旅行プラットフォーム — 2009年から特別な旅を。",
  },
};

// ─── DATA ─────────────────────────────────────────────────────
const CITIES = [
  { id:"cairo",      name:"Cairo",         nameAr:"القاهرة",   img:"/images/home/cairo.jpeg"},
  { id:"luxor",      name:"Luxor",         nameAr:"الأقصر",    img:"/images/home/luxor.jpeg"},
  { id:"aswan",      name:"Aswan",         nameAr:"أسوان",     img:"/images/home/aswan.jpeg"},
  { id:"hurghada",   name:"Hurghada",      nameAr:"الغردقة",   img:"/images/home/hurghada.jpeg"},
  { id:"sharm",      name:"Sharm El Sheikh",nameAr:"شرم الشيخ",img:"/images/home/sharm.jpeg"},
  { id:"alexandria", name:"Alexandria",    nameAr:"الإسكندرية",img:"/images/home/alex.jpeg"},
  { id:"fayoum",     name:"Fayoum",        nameAr:"الفيوم",    img:"/images/home/fayoum.jpeg"},
  { id:"marsa-alam", name:"Marsa Alam",    nameAr:"مرسى علم",  img:"/images/home/Marsa.jpeg"},
  { id:"giza",       name:"Giza",          nameAr:"الجيزة",    img:"/images/home/giza.jpeg"},
  { id:"ain-sokhna", name:"Ain Sokhna",    nameAr:"العين السخنة",img:"/images/home/sokhna.jpeg"},
];

const HERO = [
  {img:"https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1920&q=90", loc:"Giza, Egypt"},
  {img:"https://images.unsplash.com/photo-1601921004897-b7d582836990?w=1920&q=90", loc:"Luxor, Egypt"},
  {img:"https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1920&q=90",   loc:"Aswan, Egypt"},
  {img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=90",   loc:"Hurghada, Egypt"},
  {img:"https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1920&q=90",loc:"Cairo, Egypt"},
];

const HOTELS = [
  {name:"Marriott Mena House",     city:"Giza",  stars:5, price:150, img:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=85"},
  {name:"Four Seasons Nile Plaza", city:"Cairo", stars:5, price:220, img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=85"},
  {name:"Sofitel Winter Palace",   city:"Luxor", stars:5, price:95,  img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=85"},
  {name:"Rixos Premium Seagate",   city:"Sharm", stars:5, price:180, img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=85"},
];

const CRUISES = [
  {name:"Sanctuary Sun Boat IV",  stars:5, price:480, route:"Luxor → Aswan", img:"https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=600&q=85"},
  {name:"Oberoi Philae Luxury",   stars:5, price:520, route:"Aswan → Luxor", img:"https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=85"},
  {name:"Mövenpick Royal Lily",   stars:5, price:350, route:"Luxor ↔ Aswan", img:"https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=85"},
  {name:"Steigenberger Minerva",  stars:4, price:290, route:"Aswan → Luxor", img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=85"},
];

const REVIEWS = [
  {name:"Sarah Mitchell",  flag:"🇺🇸", city:"New York",  stars:5, img:"https://i.pravatar.cc/80?img=1",  text:"The AI builder created a perfect 12-day itinerary with exact prices. Every detail was handled flawlessly. Absolutely life-changing!"},
  {name:"Carlos Ruiz",     flag:"🇪🇸", city:"Barcelona", stars:5, img:"https://i.pravatar.cc/80?img=3",  text:"El crucero por el Nilo fue mágico. El AI planificó todo con precios exactos. Servicio impecable de principio a fin."},
  {name:"Amélie Fontaine", flag:"🇫🇷", city:"Paris",     stars:5, img:"https://i.pravatar.cc/80?img=5",  text:"Service exceptionnel. L'IA a créé un itinéraire de 10 jours parfait avec budget précis. Vue depuis le ballon inoubliable!"},
  {name:"Klaus Weber",     flag:"🇩🇪", city:"Berlin",    stars:5, img:"https://i.pravatar.cc/80?img=12", text:"Perfekt organisiert! Nilkreuzfahrt war unvergesslich. Der KI-Planer erstellte einen maßgeschneiderten Plan mit exakten Preisen."},
  {name:"Yuki Tanaka",     flag:"🇯🇵", city:"Tokyo",     stars:5, img:"https://i.pravatar.cc/80?img=9",  text:"Everything exceeded expectations. Valley of the Kings at sunrise was spiritual. AI itinerary matched our budget perfectly!"},
  {name:"Olga Sorokina",   flag:"🇷🇺", city:"Moscow",    stars:5, img:"https://i.pravatar.cc/80?img=7",  text:"Незабываемое путешествие! ИИ создал идеальный маршрут с точными ценами. Закат над Нилом был просто невероятным!"},
];

const WHY = [
  {icon:"🏆", num:"#1",   t:"Award-Winning",   d:"Voted Egypt's #1 Tour Operator by Travellers Choice — 5 consecutive years"},
  {icon:"🤖", num:"AI",   t:"AI-Powered",       d:"Proprietary AI builds complete priced itineraries tailored to your exact budget"},
  {icon:"🔒", num:"100%", t:"Secure Booking",   d:"Bank-grade encryption · Free cancellation · Full money-back guarantee"},
  {icon:"🌍", num:"90+",  t:"Global Reach",     d:"Serving 90+ countries in 11 languages with 24/7 expert on-ground support"},
  {icon:"⭐", num:"4.9",  t:"50,000+ Reviews",  d:"Average 4.9/5 across TripAdvisor, Google & Trustpilot worldwide"},
  {icon:"🎯", num:"PhD",  t:"Expert Guides",    d:"Every itinerary crafted by licensed PhD Egyptologist guides exclusively"},
];

const SEARCH_ALL = [
  ...CITIES.map(c=>({type:"dest",title:c.name,sub:c.desc,img:c.img,url:`/city/${c.id}`,tag:c.tag,color:c.color})),
  {type:"tour",title:"Pyramids of Giza & Sphinx",         sub:"Full day · From $75",   img:"https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=80&q=70", url:"/city/giza",     tag:"Bestseller"},
  {type:"tour",title:"Hot Air Balloon over Luxor",        sub:"1 hr · From $110",      img:"https://images.unsplash.com/photo-1601921004897-b7d582836990?w=80&q=70", url:"/city/luxor",    tag:"Iconic"},
  {type:"tour",title:"Abu Simbel Temples by Plane",       sub:"Full day · From $199",  img:"https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=80&q=70",   url:"/city/aswan",    tag:"Must-See"},
  {type:"tour",title:"4-Night Nile Cruise Luxor–Aswan",   sub:"4 nights · From $350",  img:"https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=80&q=70", url:"/city/luxor",    tag:"Top Rated"},
  {type:"tour",title:"Red Sea Snorkeling Giftun Island",  sub:"7 hrs · From $45",      img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=80&q=70",   url:"/city/hurghada", tag:"Adventure"},
  {type:"tour",title:"Mount Sinai Sunrise Trek",          sub:"Full night · From $75", img:"https://images.unsplash.com/photo-1527576539890-dfa815648363?w=80&q=70", url:"/city/sharm",    tag:"Spiritual"},
  {type:"tour",title:"Grand Egyptian Museum Private",     sub:"4 hrs · From $95",      img:"https://images.unsplash.com/photo-1572977078501-8c8f3e4fdd34?w=80&q=70", url:"/city/cairo",    tag:"New"},
  {type:"pkg", title:"Honeymoon Egypt 10 Nights",        sub:"From $1,490/couple",    img:"https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=80&q=70",   url:"/city/luxor",    tag:"Romantic"},
  {type:"pkg", title:"Family Egypt Adventure 2 Weeks",   sub:"From $2,200",           img:"https://images.unsplash.com/photo-1553697388-94e804e2f0f6?w=80&q=70",   url:"/city/cairo",    tag:"Family"},
];

const GUIDE_LANGS = [
  {v:"en",l:"English 🇬🇧"},{v:"ar",l:"العربية 🇪🇬"},{v:"es",l:"Español 🇪🇸"},
  {v:"it",l:"Italiano 🇮🇹"},{v:"fr",l:"Français 🇫🇷"},{v:"de",l:"Deutsch 🇩🇪"},
  {v:"pt",l:"Português 🇵🇹"},{v:"zh",l:"中文 🇨🇳"},{v:"nl",l:"Nederlands 🇳🇱"},
  {v:"ja",l:"日本語 🇯🇵"},{v:"ru",l:"Русский 🇷🇺"},
];

const fmt = (p,cur) => `${CURR[cur]?.s||"$"}${Math.round(p*(CURR[cur]?.r||1)).toLocaleString()}`;
const Stars = ({n}) => <span style={{color:"#D4AF37",letterSpacing:1}}>{"★".repeat(n)}{"☆".repeat(5-n)}</span>;

// ─── CSS ──────────────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;600;700&family=Noto+Sans+Arabic:wght@300;400;700&display=swap');

:root{
  --g:#C9A84C; --gl:#E8C96D; --gd:rgba(201,168,76,.1); --gb:rgba(201,168,76,.2);
  --obs:#050309; --s1:#0C0A14; --s2:#14111E; --s3:#1C1829;
  --text:#EDE8D9; --dim:rgba(237,232,217,.65); --muted:#6B5E4A;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;-webkit-tap-highlight-color:transparent;}
body{background:var(--obs);color:var(--text);font-family:'Josefin Sans','Noto Sans Arabic',sans-serif;overflow-x:hidden;}
::selection{background:rgba(201,168,76,.3);color:#fff;}
::-webkit-scrollbar{width:3px;}
::-webkit-scrollbar-track{background:var(--obs);}
::-webkit-scrollbar-thumb{background:var(--gb);border-radius:2px;}

/* LUXURY BG */
body::before{
  content:'';position:fixed;inset:0;z-index:0;pointer-events:none;
  background:
    radial-gradient(ellipse 100% 55% at 5% 10%,rgba(180,130,18,.07) 0%,transparent 55%),
    radial-gradient(ellipse 80% 80% at 95% 85%,rgba(100,60,8,.06) 0%,transparent 55%),
    radial-gradient(ellipse 60% 45% at 50% 50%,rgba(201,168,76,.03) 0%,transparent 65%),
    linear-gradient(175deg,#050309 0%,#0A0716 38%,#060410 65%,#08051A 100%);
}
body::after{
  content:'';position:fixed;inset:0;z-index:0;pointer-events:none;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Ctext x='14' y='72' font-size='40' fill='rgba(201,168,76,.013)'%3E𓂀 𓅓%3C/text%3E%3Ctext x='14' y='140' font-size='32' fill='rgba(201,168,76,.009)'%3E𓇋 𓏏 𓈖 𓆣%3C/text%3E%3Ctext x='14' y='214' font-size='40' fill='rgba(201,168,76,.013)'%3E𓂋 𓃭 𓊃%3C/text%3E%3C/svg%3E");
  background-size:260px 260px;
}

/* ANIMATIONS */
@keyframes heroZoom  {0%{transform:scale(1)} 100%{transform:scale(1.09)}}
@keyframes fadeUp    {from{opacity:0;transform:translateY(38px)} to{opacity:1;transform:none}}
@keyframes fadeIn    {from{opacity:0} to{opacity:1}}
@keyframes slideD    {from{opacity:0;transform:translateY(-14px)} to{opacity:1;transform:none}}
@keyframes spin      {to{transform:rotate(360deg)}}
@keyframes marquee   {0%{transform:translateX(0)} 100%{transform:translateX(-50%)}}
@keyframes gradShift {0%,100%{background-position:0% 50%} 50%{background-position:100% 50%}}
@keyframes scrollB   {0%,100%{transform:translateX(-50%) translateY(0);opacity:.5} 50%{transform:translateX(-50%) translateY(9px);opacity:1}}
@keyframes glowP     {0%,100%{filter:drop-shadow(0 0 16px var(--g))} 50%{filter:drop-shadow(0 0 44px var(--gl)) brightness(1.3)}}
@keyframes borderS   {0%,100%{background-position:0% 50%} 50%{background-position:100% 50%}}
@keyframes popIn     {from{opacity:0;transform:scale(.82)} to{opacity:1;transform:scale(1)}}
@keyframes float     {0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)}}
/* GOLD TEXT */
.gta{
  background:linear-gradient(90deg,#F2E070,#C9A84C,#FFE980,#8B6810,#E8C96D,#C9A84C,#F2E070);
  background-size:400% 100%;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  animation:gradShift 5s ease-in-out infinite;
}
.gt{
  background:linear-gradient(135deg,#F2E07A 0%,#C9A84C 38%,#FFE980 65%,#A07828 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.gline{height:1px;background:linear-gradient(to right,transparent,rgba(201,168,76,.4),transparent);}

/* MARQUEE */
.mq{display:flex;animation:marquee 30s linear infinite;white-space:nowrap;}
.mq:hover{animation-play-state:paused;}

/* ANIMATED BORDER */
.ab::before{
  content:'';position:absolute;inset:-1px;border-radius:inherit;z-index:-1;
  background:linear-gradient(135deg,rgba(201,168,76,.6),rgba(201,168,76,.08),rgba(232,201,109,.5),rgba(201,168,76,.05),rgba(201,168,76,.6));
  background-size:400% 400%;animation:borderS 5s ease infinite;
}

/* HOVER */
.cc:hover{transform:translateY(-8px) scale(1.01)!important;}
.cc:hover .ci{transform:scale(1.1)!important;}
.cc:hover .co{opacity:.3!important;}
.cc:hover .ca{opacity:1!important;transform:none!important;}
.hc:hover{transform:translateY(-7px)!important;border-color:rgba(201,168,76,.5)!important;box-shadow:0 28px 70px rgba(0,0,0,.6)!important;}
.hc:hover img{transform:scale(1.08)!important;}
.wc:hover{transform:translateY(-6px)!important;border-color:rgba(201,168,76,.5)!important;}
.wc:hover .wi{transform:scale(1.25) rotate(10deg)!important;}
.rc:hover{transform:translateY(-5px)!important;border-color:rgba(201,168,76,.4)!important;}
.nla:hover{color:var(--g)!important;}
.si:hover{background:rgba(201,168,76,.08)!important;}
.chip:hover{background:rgba(201,168,76,.2)!important;color:var(--g)!important;border-color:rgba(201,168,76,.5)!important;}
.dd:hover{background:rgba(201,168,76,.08)!important;color:var(--g)!important;}

/* MOBILE */
@media(max-width:768px){
  .dn{display:none!important;}
  .dm{display:flex!important;}
  .g2{grid-template-columns:1fr!important;}
  .g3{grid-template-columns:1fr 1fr!important;}
  .g4{grid-template-columns:1fr 1fr!important;}
  .dtop{grid-template-columns:1fr 1fr!important;}
  .dbot{grid-template-columns:repeat(3,1fr)!important;}
  .sg{grid-template-columns:1fr!important;}
  .ftg{grid-template-columns:1fr 1fr!important;}
  .whyg{grid-template-columns:1fr 1fr!important;}
  .revg{grid-template-columns:1fr!important;}
}
@media(max-width:480px){
  .g3{grid-template-columns:1fr!important;}
  .g4{grid-template-columns:1fr!important;}
  .dtop{grid-template-columns:1fr!important;}
  .dbot{grid-template-columns:1fr 1fr!important;}
  .ftg{grid-template-columns:1fr!important;}
  .whyg{grid-template-columns:1fr!important;}
}
`;

// ─── CITY CARD ────────────────────────────────────────────────
function CityCard({c,navigate,large}){
  const [hov,setHov]=useState(false);
  const color = c.color || "#C9A84C";
  return(
    <div className="cc" onClick={()=>navigate(`/city/${c.id}`)}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{position:"relative",borderRadius:20,overflow:"hidden",cursor:"pointer",
        height:large?"clamp(220px,22vw,300px)":"clamp(140px,13vw,180px)",
        border:`1px solid ${hov?color+"70":"rgba(201,168,76,.15)"}`,
        transition:"all .45s cubic-bezier(.25,.8,.25,1)",
        boxShadow:hov?`0 24px 64px rgba(0,0,0,.7),0 0 0 1px ${color}33`:"0 6px 24px rgba(0,0,0,.4)"}}>
      <img className="ci" src={c.img} alt={c.name}
        style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .65s ease",display:"block"}}
        onError={e=>e.target.src=`https://placehold.co/800x300/0C0A14/${color.replace("#","")}?text=${c.name}`}/>
      <div className="co" style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(5,3,9,.96) 0%,rgba(5,3,9,.3) 50%,transparent 100%)",transition:"opacity .4s",opacity:.85}}/>
      {hov&&<div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 50% 110%,${color}28,transparent 65%)`}}/>}
      {hov&&<div style={{position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(to right,transparent,${color}88,transparent)`}}/>}
      <div style={{position:"absolute",top:12,left:12,background:`${color}1E`,border:`1px solid ${color}55`,borderRadius:24,padding:"3px 12px",fontSize:9,fontWeight:700,color:color,letterSpacing:1.5,textTransform:"uppercase",backdropFilter:"blur(10px)",fontFamily:"'Josefin Sans',sans-serif"}}>{c.tag}</div>
      <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"14px 16px"}}>
        <div style={{fontFamily:"'Cinzel',serif",fontWeight:600,fontSize:large?"clamp(17px,2vw,24px)":"clamp(12px,1.3vw,16px)",color:"#fff",marginBottom:4,textShadow:"0 2px 16px rgba(0,0,0,.9)"}}>{c.name}</div>
        {large&&<div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:12,color:"rgba(237,232,217,.5)",marginBottom:8,opacity:hov?1:0,transition:"opacity .3s"}}>{c.desc}</div>}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <span style={{fontSize:large?10:8,color:color,letterSpacing:2,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>{c.tours} tours</span>
          <span className="ca" style={{color:color,fontSize:15,opacity:0,transform:"translateX(-10px)",transition:"all .35s"}}>→</span>
        </div>
      </div>
    </div>
  );
}

// ─── BOOKING MODAL ────────────────────────────────────────────
function BookingModal({item,onClose,cur,lang}){
  const t=TR[lang]||TR.en;
  const [step,setStep]=useState(1);
  const [busy,setBusy]=useState(false);
  const [f,setF]=useState({name:"",age:"",nationality:"",guideLang:"en",currency:cur,whatsapp:"",email:"",pickup:"",dropoff:"",date:"",guests:"2",notes:""});
  const upd=k=>e=>setF(p=>({...p,[k]:e.target.value}));
  const ok1=f.name&&f.email&&f.whatsapp;
  const ok2=f.date&&f.pickup;
  const waMsg=encodeURIComponent(`🏛️ *New Booking — Golden Egypt Tours*\n\n📋 *${item?.name||item?.title||"Tour"}*\n\n👤 *Name:* ${f.name}\n🎂 *Age:* ${f.age}\n🌍 *Nationality:* ${f.nationality}\n🗣️ *Guide Language:* ${GUIDE_LANGS.find(l=>l.v===f.guideLang)?.l||f.guideLang}\n💱 *Currency:* ${f.currency}\n📱 *WhatsApp:* ${f.whatsapp}\n✉️ *Email:* ${f.email}\n📅 *Date:* ${f.date}\n👥 *Guests:* ${f.guests}\n📍 *Pick-up:* ${f.pickup}\n📍 *Drop-off:* ${f.dropoff||"Same as pick-up"}\n📝 *Notes:* ${f.notes||"None"}\n\nRef: GET-${Date.now().toString().slice(-6)}`);
  const submit=()=>{setBusy(true);setTimeout(()=>{setBusy(false);setStep(3);},1800);};
  const inp={background:"rgba(201,168,76,.05)",border:"1px solid rgba(201,168,76,.2)",borderRadius:10,padding:"11px 14px",color:"var(--text)",fontSize:13,outline:"none",width:"100%",fontFamily:"'Cormorant Garamond',serif",transition:"border-color .2s,box-shadow .2s"};
  const fi=e=>{e.target.style.borderColor="rgba(201,168,76,.65)";e.target.style.boxShadow="0 0 0 3px rgba(201,168,76,.08)";};
  const fo=e=>{e.target.style.borderColor="rgba(201,168,76,.2)";e.target.style.boxShadow="none";};
  return(
    <div onClick={e=>e.target===e.currentTarget&&onClose()} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.92)",backdropFilter:"blur(18px)",zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center",padding:16,animation:"fadeIn .25s ease"}}>
      <div style={{background:"linear-gradient(145deg,#14111E,#050309)",border:"1px solid rgba(201,168,76,.28)",borderRadius:24,width:"min(560px,96vw)",maxHeight:"92vh",overflowY:"auto",boxShadow:"0 60px 140px rgba(0,0,0,.95),0 0 0 1px rgba(201,168,76,.1)",animation:"popIn .3s ease"}}>
        <div style={{padding:"24px 28px 18px",borderBottom:"1px solid rgba(201,168,76,.15)",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <div style={{fontSize:9,color:"var(--g)",letterSpacing:3,textTransform:"uppercase",marginBottom:7,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Golden Egypt Tours · Booking</div>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:16,fontWeight:600,color:"var(--text)",lineHeight:1.4,maxWidth:380}}>{item?.name||item?.title||"Book Your Egypt Experience"}</div>
          </div>
          <button onClick={onClose} style={{background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.08)",color:"var(--muted)",borderRadius:8,width:34,height:34,cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
        </div>
        <div style={{padding:"24px 28px"}}>
          {step===3?(
            <div style={{textAlign:"center",padding:"24px 0",animation:"fadeUp .4s ease"}}>
              <div style={{fontSize:64,marginBottom:16,animation:"popIn .5s ease"}}>✅</div>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:22,color:"var(--g)",marginBottom:10}}>Booking Confirmed!</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:15,color:"var(--muted)",lineHeight:1.8,marginBottom:28}}>Our team will contact you within 2 hours.<br/>Reference: <strong style={{color:"var(--g)"}}>GET-{Date.now().toString().slice(-6)}</strong></div>
              <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
                <a href={`https://wa.me/201068257754?text=${waMsg}`} target="_blank" rel="noreferrer" style={{background:"#25D366",color:"#fff",borderRadius:12,padding:"13px 24px",textDecoration:"none",fontWeight:700,fontSize:13,letterSpacing:1.5,display:"flex",alignItems:"center",gap:8,fontFamily:"'Josefin Sans',sans-serif"}}>💬 Confirm on WhatsApp</a>
                <button onClick={onClose} style={{background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.1)",color:"var(--muted)",borderRadius:12,padding:"13px 24px",cursor:"pointer",fontSize:13,fontFamily:"'Josefin Sans',sans-serif"}}>Close</button>
              </div>
            </div>
          ):(
            <>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:22}}>
                {[1,2].map(s=>(
                  <div key={s} style={{display:"flex",alignItems:"center",gap:8}}>
                    <div style={{width:28,height:28,borderRadius:"50%",background:step>=s?"linear-gradient(135deg,var(--g),var(--gl))":"rgba(201,168,76,.1)",border:step>=s?"none":"1px solid rgba(201,168,76,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:step>=s?"#050309":"var(--g)",transition:"all .3s"}}>{s}</div>
                    {s<2&&<div style={{width:40,height:1,background:`linear-gradient(to right,${step>=2?"rgba(201,168,76,.5)":"rgba(201,168,76,.15)"},transparent)`}}/>}
                  </div>
                ))}
                <div style={{fontSize:11,color:"var(--muted)",marginLeft:8,fontFamily:"'Josefin Sans',sans-serif"}}>{step===1?"Personal Details":"Trip Details"}</div>
              </div>
              {step===1&&(
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13,animation:"fadeIn .3s ease"}}>
                  <div style={{gridColumn:"1/-1"}}>
                    <label style={{fontSize:9,color:"var(--g)",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Full Name *</label>
                    <input value={f.name} onChange={upd("name")} placeholder="Your full name" style={inp} onFocus={fi} onBlur={fo}/>
                  </div>
                  <div>
                    <label style={{fontSize:9,color:"var(--g)",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Age</label>
                    <input value={f.age} onChange={upd("age")} placeholder="Your age" type="number" min="1" style={inp} onFocus={fi} onBlur={fo}/>
                  </div>
                  <div>
                    <label style={{fontSize:9,color:"var(--g)",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Nationality</label>
                    <input value={f.nationality} onChange={upd("nationality")} placeholder="e.g. American" style={inp} onFocus={fi} onBlur={fo}/>
                  </div>
                  <div style={{gridColumn:"1/-1"}}>
                    <label style={{fontSize:9,color:"var(--g)",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Guide Language *</label>
                    <select value={f.guideLang} onChange={upd("guideLang")} style={{...inp,cursor:"pointer"}} onFocus={fi} onBlur={fo}>
                      {GUIDE_LANGS.map(o=><option key={o.v} value={o.v} style={{background:"#14111E"}}>{o.l}</option>)}
                    </select>
                  </div>
                  <div style={{gridColumn:"1/-1"}}>
                    <label style={{fontSize:9,color:"var(--g)",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Payment Currency</label>
                    <select value={f.currency} onChange={upd("currency")} style={{...inp,cursor:"pointer"}} onFocus={fi} onBlur={fo}>
                      {Object.entries(CURR).map(([code,{l}])=><option key={code} value={code} style={{background:"#14111E"}}>{l}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{fontSize:9,color:"var(--g)",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>WhatsApp * 📱</label>
                    <input value={f.whatsapp} onChange={upd("whatsapp")} placeholder="+1 234 567 8900" type="tel" style={inp} onFocus={fi} onBlur={fo}/>
                  </div>
                  <div>
                    <label style={{fontSize:9,color:"var(--g)",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Email *</label>
                    <input value={f.email} onChange={upd("email")} placeholder="your@email.com" type="email" style={inp} onFocus={fi} onBlur={fo}/>
                  </div>
                  <div style={{gridColumn:"1/-1",marginTop:6}}>
                    <button onClick={()=>setStep(2)} disabled={!ok1} style={{width:"100%",background:"linear-gradient(135deg,var(--g),var(--gl))",color:"#050309",border:"none",borderRadius:12,padding:"14px",cursor:"pointer",fontWeight:700,fontSize:12,letterSpacing:2.5,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",boxShadow:"0 6px 28px rgba(201,168,76,.4)",opacity:!ok1?.45:1,transition:"all .25s"}}>
                      Next — Trip Details →
                    </button>
                  </div>
                </div>
              )}
              {step===2&&(
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13,animation:"fadeIn .3s ease"}}>
                  <div>
                    <label style={{fontSize:9,color:"var(--g)",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Tour Date *</label>
                    <input value={f.date} onChange={upd("date")} type="date" style={{...inp,colorScheme:"dark"}} onFocus={fi} onBlur={fo}/>
                  </div>
                  <div>
                    <label style={{fontSize:9,color:"var(--g)",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Number of Guests</label>
                    <input value={f.guests} onChange={upd("guests")} type="number" min="1" placeholder="2" style={inp} onFocus={fi} onBlur={fo}/>
                  </div>
                  <div style={{gridColumn:"1/-1"}}>
                    <label style={{fontSize:9,color:"var(--g)",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Pick-up Location * 📍</label>
                    <input value={f.pickup} onChange={upd("pickup")} placeholder="Hotel name / address / city" style={inp} onFocus={fi} onBlur={fo}/>
                  </div>
                  <div style={{gridColumn:"1/-1"}}>
                    <label style={{fontSize:9,color:"var(--g)",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Drop-off Location 📍</label>
                    <input value={f.dropoff} onChange={upd("dropoff")} placeholder="Hotel name / address (if different)" style={inp} onFocus={fi} onBlur={fo}/>
                  </div>
                  <div style={{gridColumn:"1/-1"}}>
                    <label style={{fontSize:9,color:"var(--g)",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:7,fontFamily:"'Josefin Sans',sans-serif"}}>Special Requests / Notes</label>
                    <textarea value={f.notes} onChange={upd("notes")} rows={2} placeholder="Dietary needs, accessibility, special occasions…" style={{...inp,resize:"none"}} onFocus={fi} onBlur={fo}/>
                  </div>
                  <div style={{gridColumn:"1/-1",display:"flex",gap:10}}>
                    <button onClick={()=>setStep(1)} style={{background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.1)",color:"var(--muted)",borderRadius:12,padding:"13px 20px",cursor:"pointer",fontSize:12,fontFamily:"'Josefin Sans',sans-serif"}}>← Back</button>
                    <button onClick={submit} disabled={busy||!ok2} style={{flex:1,background:"linear-gradient(135deg,var(--g),var(--gl))",color:"#050309",border:"none",borderRadius:12,padding:"13px",cursor:busy?"wait":"pointer",fontWeight:700,fontSize:12,letterSpacing:2,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",boxShadow:"0 6px 28px rgba(201,168,76,.4)",opacity:(!ok2||busy)?.45:1,transition:"all .25s",display:"flex",alignItems:"center",justifyContent:"center",gap:10}}>
                      {busy?<><div style={{width:16,height:16,border:"2px solid rgba(0,0,0,.2)",borderTop:"2px solid #050309",borderRadius:"50%",animation:"spin .7s linear infinite"}}/>Sending…</>:"✈ Confirm Booking"}
                    </button>
                    <a href={`https://wa.me/201068257754?text=${waMsg}`} target="_blank" rel="noreferrer" style={{background:"#25D366",color:"#fff",border:"none",borderRadius:12,padding:"13px 18px",cursor:"pointer",fontSize:20,textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center"}}>💬</a>
                  </div>
                  <div style={{gridColumn:"1/-1",textAlign:"center",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:12,color:"var(--muted)"}}>Free cancellation up to 24 hours before · No charge until confirmed</div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
// ─── MAIN ─────────────────────────────────────────────────────
export default function Home(){
  const navigate=useNavigate();
  const [lang,setLang]=useState("en");
  const [cur,setCur]=useState("USD");
  const [scrolled,setSc]=useState(false);
  const [mMenu,setMMenu]=useState(false);
  const [lO,setLO]=useState(false);
  const [cO,setCO]=useState(false);
  const [slide,setSlide]=useState(0);
  const [adults,setAdults]=useState(2);
  const [kids,setKids]=useState(0);
  const [gO,setGO]=useState(false);
  const [adv,setAdv]=useState(false);
  const [q,setQ]=useState("");
  const [res,setRes]=useState([]);
  const [step,setStep]=useState(0);
  const [email,setEmail]=useState("");
  const [subOk,setSubOk]=useState(false);
  const [vis,setVis]=useState({});
  const [bookItem,setBookItem]=useState(null);
  const [aiQ,setAiQ]=useState("");
  const [aiRes,setAiRes]=useState("");
  const [aiLoad,setAiLoad]=useState(false);
  const [aiDone,setAiDone]=useState(false);

  const t=TR[lang]||TR.en;
  const isRTL=LANGS[lang]?.dir==="rtl";
const [currency, setCurrency] = useState("USD");
const PACKAGES_COUNT = 8;
const S = {
  divider: {
    height: 1,
    background: "rgba(255,255,255,0.1)",
    margin: "50px 0"
  },
  section: {
    padding: "60px 40px"
  }
};
const formatPrice = (price, currency) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "USD",
    maximumFractionDigits: 0,
  }).format(price);
};
  useEffect(()=>{const fn=()=>setSc(window.scrollY>52);window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn);},[]);
  useEffect(()=>{const id=setInterval(()=>setStep(s=>(s+1)%4),2400);return()=>clearInterval(id);},[]);
  useEffect(()=>{const id=setInterval(()=>setSlide(i=>(i+1)%HERO.length),5500);return()=>clearInterval(id);},[]);
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

  const buildAI=useCallback(async()=>{
    if(!aiQ.trim())return;
    setAiLoad(true);setAiRes("");setAiDone(false);
    try{
      const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1200,system:`You are a senior Egypt travel specialist at Golden Egypt Tours, a luxury travel company.
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

Use REAL hotel names, REAL attractions, REALISTIC prices. Match the user's language.`,messages:[{role:"user",content:aiQ}]})});
      const d=await r.json();
      setAiRes(d.content?.map(i=>i.text||"").join("\n")||"⚠️ Error");
      setAiDone(true);
    }catch{setAiRes("⚠️ Connection error. Please try again.");}
    setAiLoad(false);
  },[aiQ]);

  const rv=(key,delay=0)=>({
    "data-v":key,
    style:{opacity:vis[key]?1:0,transform:vis[key]?"none":"translateY(30px)",transition:`opacity .7s ease ${delay}s,transform .7s ease ${delay}s`},
  });

  const iS={background:"rgba(201,168,76,.05)",border:"1px solid rgba(201,168,76,.2)",borderRadius:11,padding:"12px 14px",color:"var(--text)",fontSize:14,outline:"none",width:"100%",fontFamily:"'Cormorant Garamond',serif",transition:"all .25s"};
  const fi=e=>{e.target.style.borderColor="rgba(201,168,76,.65)";e.target.style.boxShadow="0 0 0 3px rgba(201,168,76,.08)";};
  const fo=e=>{e.target.style.borderColor="rgba(201,168,76,.2)";e.target.style.boxShadow="none";};

  return(
    <div style={{background:"#050309",color:"#EDE8D9",minHeight:"100vh",overflowX:"hidden",direction:isRTL?"rtl":"ltr",fontFamily:"'Josefin Sans','Noto Sans Arabic',sans-serif",position:"relative"}}>
      <style>{CSS}</style>

      {/* ══ NAV ══ */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,height:66,background:scrolled?"rgba(5,3,9,.97)":"rgba(5,3,9,.4)",backdropFilter:scrolled?"blur(28px)":"blur(8px)",borderBottom:scrolled?"1px solid rgba(201,168,76,.2)":"none",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 clamp(14px,4vw,44px)",transition:"all .45s ease"}}>
        {scrolled&&<div style={{position:"absolute",bottom:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,var(--g),var(--gl),var(--g),transparent)",opacity:.55}}/>}

        {/* Logo */}
        <div style={{display:"flex",alignItems:"center",gap:12,cursor:"pointer",flexShrink:0}} onClick={()=>navigate("/")}>
          <div style={{width:44,height:44,borderRadius:"50%",background:"linear-gradient(135deg,#C9A84C,#8B6914)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,boxShadow:"0 0 28px rgba(201,168,76,.45)",animation:"glowP 4s ease-in-out infinite"}}>𓂀</div>
          <div>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(11px,1.5vw,14px)",fontWeight:700,color:"var(--g)",letterSpacing:3,lineHeight:1}}>GOLDEN EGYPT</div>
            <div style={{fontSize:"clamp(6px,.9vw,8px)",color:"rgba(201,168,76,.42)",letterSpacing:4,marginTop:2}}>TOURS & EXPEDITIONS</div>
          </div>
        </div>

        {/* Desktop nav — working routes */}
        <ul className="dn" style={{display:"flex",gap:"clamp(12px,2vw,26px)",listStyle:"none"}}>
          <li><Link to="/"        className="nla" style={{color:"var(--g)",  fontSize:11,letterSpacing:2,textTransform:"uppercase",textDecoration:"none",fontWeight:700,transition:"color .2s"}}>{t.nav.home}</Link></li>
          <li><Link to="/tours"   className="nla" style={{color:"var(--dim)",fontSize:11,letterSpacing:2,textTransform:"uppercase",textDecoration:"none",transition:"color .2s"}}>{t.nav.tours}</Link></li>
          <li><Link to="/cruises" className="nla" style={{color:"var(--dim)",fontSize:11,letterSpacing:2,textTransform:"uppercase",textDecoration:"none",transition:"color .2s"}}>{t.nav.cruises}</Link></li>
          <li><Link to="/hotels"  className="nla" style={{color:"var(--dim)",fontSize:11,letterSpacing:2,textTransform:"uppercase",textDecoration:"none",transition:"color .2s"}}>{t.nav.hotels}</Link></li>
          <li><Link to="/about"   className="nla" style={{color:"var(--dim)",fontSize:11,letterSpacing:2,textTransform:"uppercase",textDecoration:"none",transition:"color .2s"}}>{t.nav.about}</Link></li>
          <li><Link to="/contact" className="nla" style={{color:"var(--dim)",fontSize:11,letterSpacing:2,textTransform:"uppercase",textDecoration:"none",transition:"color .2s"}}>{t.nav.contact}</Link></li>
        </ul>

        {/* Right controls */}
        <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
          {/* Language */}
          <div style={{position:"relative"}} className="dn">
            <button onClick={()=>{setLO(!lO);setCO(false);}} style={{background:"rgba(201,168,76,.08)",border:"1px solid rgba(201,168,76,.25)",color:"var(--g)",padding:"6px 13px",borderRadius:8,cursor:"pointer",fontSize:11,fontWeight:700,display:"flex",alignItems:"center",gap:6}}>
              {LANGS[lang]?.flag} {LANGS[lang]?.label?.slice(0,3)} ▾
            </button>
            {lO&&<div style={{position:"absolute",top:"calc(100%+8px)",right:0,background:"#14111E",border:"1px solid rgba(201,168,76,.22)",borderRadius:12,overflow:"hidden",minWidth:185,zIndex:2000,boxShadow:"0 24px 60px rgba(0,0,0,.8)",animation:"slideD .2s ease",maxHeight:340,overflowY:"auto"}}>
              {Object.entries(LANGS).map(([code,info])=>(
                <div key={code} className="dd" onClick={()=>{setLang(code);setLO(false);}} style={{padding:"10px 16px",cursor:"pointer",fontSize:12,color:lang===code?"var(--g)":"var(--dim)",transition:"all .15s",display:"flex",alignItems:"center",gap:8}}>
                  {info.flag} {info.label}
                </div>
              ))}
            </div>}
          </div>

          {/* Currency */}
          <div style={{position:"relative"}} className="dn">
            <button onClick={()=>{setCO(!cO);setLO(false);}} style={{background:"rgba(201,168,76,.08)",border:"1px solid rgba(201,168,76,.25)",color:"var(--g)",padding:"6px 13px",borderRadius:8,cursor:"pointer",fontSize:11,fontWeight:700}}>
              {CURR[cur]?.s} {cur} ▾
            </button>
            {cO&&<div style={{position:"absolute",top:"calc(100%+8px)",right:0,background:"#14111E",border:"1px solid rgba(201,168,76,.22)",borderRadius:12,overflow:"hidden",minWidth:215,zIndex:2000,boxShadow:"0 24px 60px rgba(0,0,0,.8)",animation:"slideD .2s ease",maxHeight:320,overflowY:"auto"}}>
              {Object.entries(CURR).map(([code,{l}])=>(
                <div key={code} className="dd" onClick={()=>{setCur(code);setCO(false);}} style={{padding:"10px 16px",cursor:"pointer",fontSize:11,color:cur===code?"var(--g)":"var(--dim)",transition:"all .15s"}}>
                  {l}
                </div>
              ))}
            </div>}
          </div>

          <button onClick={()=>setBookItem({title:"General Enquiry"})} className="dn" style={{background:"linear-gradient(135deg,var(--g),var(--gl))",color:"#050309",border:"none",borderRadius:9,padding:"9px 20px",cursor:"pointer",fontWeight:700,fontSize:11,letterSpacing:2,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",boxShadow:"0 4px 20px rgba(201,168,76,.42)",transition:"all .25s",whiteSpace:"nowrap"}}>
            {t.bookNow}
          </button>
          {/* Mobile btn */}
          <button className="dm" style={{display:"none",background:"rgba(201,168,76,.1)",border:"1px solid rgba(201,168,76,.25)",color:"var(--g)",width:40,height:40,borderRadius:8,cursor:"pointer",fontSize:16,alignItems:"center",justifyContent:"center"}} onClick={()=>setMMenu(!mMenu)}>
            {mMenu?"✕":"☰"}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mMenu&&(
        <div style={{position:"fixed",top:66,left:0,right:0,background:"rgba(5,3,9,.98)",backdropFilter:"blur(28px)",zIndex:999,padding:"20px 24px 32px",borderBottom:"1px solid rgba(201,168,76,.18)",animation:"slideD .25s ease"}}>
          {[["home","/"],["tours","/tours"],["cruises","/cruises"],["hotels","/hotels"],["about","/about"],["contact","/contact"]].map(([k,path])=>(
            <Link key={k} to={path} style={{display:"block",padding:"13px 0",borderBottom:"1px solid rgba(201,168,76,.07)",color:"var(--dim)",fontSize:13,letterSpacing:2,textTransform:"uppercase",textDecoration:"none"}} onClick={()=>setMMenu(false)}>{t.nav[k]}</Link>
          ))}
          <div style={{display:"flex",gap:7,marginTop:18,flexWrap:"wrap"}}>
            {Object.entries(LANGS).map(([code,info])=>(
              <button key={code} onClick={()=>{setLang(code);setMMenu(false);}} style={{background:lang===code?"rgba(201,168,76,.2)":"rgba(201,168,76,.06)",border:"1px solid rgba(201,168,76,.2)",color:lang===code?"var(--g)":"var(--dim)",borderRadius:8,padding:"6px 12px",cursor:"pointer",fontSize:11}}>{info.flag}</button>
            ))}
          </div>
          <button onClick={()=>{setBookItem({title:"General Enquiry"});setMMenu(false);}} style={{marginTop:18,width:"100%",background:"linear-gradient(135deg,var(--g),var(--gl))",color:"#050309",border:"none",borderRadius:11,padding:"14px",cursor:"pointer",fontWeight:700,fontSize:13,letterSpacing:2,fontFamily:"'Josefin Sans',sans-serif"}}>{t.bookNow}</button>
        </div>
      )}

      {/* ══ HERO ══ */}
      <section style={{position:"relative",height:"100vh",minHeight:640,maxHeight:1000,overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        {HERO.map((sl,i)=>(
          <div key={i} style={{position:"absolute",inset:0,backgroundImage:`url(${sl.img})`,backgroundSize:"cover",backgroundPosition:"center 38%",opacity:i===slide?1:0,transition:"opacity 1.8s ease",animation:i===slide?"heroZoom 22s ease-in-out infinite alternate":"none"}}/>
        ))}
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(5,3,9,.58) 0%,rgba(5,3,9,.08) 28%,rgba(5,3,9,.7) 72%,rgba(5,3,9,1) 100%)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(5,3,9,.5) 0%,transparent 60%)"}}/>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 70% 55% at 50% 105%,rgba(201,168,76,.09),transparent 70%)"}}/>

        {/* Location badge */}
        <div style={{position:"absolute",bottom:"clamp(150px,20vh,200px)",left:"clamp(20px,5vw,56px)",zIndex:5}} key={slide}>
          <div style={{display:"flex",alignItems:"center",gap:8,background:"rgba(5,3,9,.7)",backdropFilter:"blur(12px)",border:"1px solid rgba(201,168,76,.2)",borderRadius:10,padding:"7px 14px",animation:"fadeIn .8s ease"}}>
            <span style={{fontSize:12,color:"var(--g)"}}>📍</span>
            <span style={{fontFamily:"'Josefin Sans',sans-serif",fontSize:10,color:"rgba(237,232,217,.6)",letterSpacing:2,textTransform:"uppercase"}}>{HERO[slide].loc}</span>
          </div>
        </div>

        {/* Slide dots */}
        <div style={{position:"absolute",bottom:"clamp(140px,18vh,185px)",left:"50%",transform:"translateX(-50%)",display:"flex",gap:8,zIndex:5}}>
          {HERO.map((_,i)=><button key={i} onClick={()=>setSlide(i)} style={{width:i===slide?32:8,height:8,borderRadius:4,background:i===slide?"var(--g)":"rgba(255,255,255,.25)",border:"none",cursor:"pointer",padding:0,transition:"all .45s ease"}}/>)}
        </div>

        {/* Content */}
        <div style={{position:"relative",zIndex:4,textAlign:"center",padding:"0 clamp(16px,5vw,64px)",width:"100%",maxWidth:980,animation:"fadeUp .9s ease both"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(201,168,76,.1)",border:"1px solid rgba(201,168,76,.38)",borderRadius:32,padding:"7px 20px",marginBottom:26,backdropFilter:"blur(14px)"}}>
            <span style={{color:"var(--g)",fontSize:10,letterSpacing:3.5,textTransform:"uppercase",fontWeight:700}}>✦ {t.heroTag}</span>
          </div>
          <h1 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(36px,8.5vw,108px)",fontWeight:700,lineHeight:.9,marginBottom:10,letterSpacing:"clamp(4px,1.2vw,12px)",color:"#fff",textShadow:"0 4px 40px rgba(0,0,0,.7)"}}>
            <span className="gta">{t.title}</span>
          </h1>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:"clamp(15px,2.2vw,26px)",color:"rgba(201,168,76,.68)",letterSpacing:4,marginBottom:12}}>{t.sub}</div>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:"clamp(14px,1.8vw,21px)",color:"rgba(237,232,217,.58)",marginBottom:38,lineHeight:1.65,opacity:0,animation:"fadeUp .9s ease .22s forwards"}}>{t.desc}</p>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:20,marginBottom:38,opacity:0,animation:"fadeUp .9s ease .32s forwards"}}>
            <div style={{width:"clamp(40px,7vw,110px)",height:1,background:"linear-gradient(to right,transparent,rgba(201,168,76,.65))"}}/>
            <span style={{color:"var(--g)",fontSize:"clamp(20px,2.5vw,30px)",animation:"glowP 4s ease-in-out infinite"}}>𓂀</span>
            <span style={{fontFamily:"'Cinzel',serif",fontSize:9,color:"rgba(201,168,76,.5)",letterSpacing:5,textTransform:"uppercase"}}>EST. 2009</span>
            <span style={{color:"var(--g)",fontSize:"clamp(20px,2.5vw,30px)",animation:"glowP 4s ease-in-out 2s infinite"}}>𓂀</span>
            <div style={{width:"clamp(40px,7vw,110px)",height:1,background:"linear-gradient(to left,transparent,rgba(201,168,76,.65))"}}/>
          </div>
        </div>

        {/* ── SEARCH BOX ── */}
        <div style={{position:"relative",zIndex:5,width:"min(940px,94vw)",opacity:0,animation:"fadeUp .9s ease .4s forwards"}}>
          <div style={{background:"rgba(5,3,9,.87)",backdropFilter:"blur(30px)",border:"1px solid rgba(201,168,76,.3)",borderRadius:24,padding:"clamp(16px,3vw,26px)",boxShadow:"0 36px 100px rgba(0,0,0,.72),inset 0 1px 0 rgba(201,168,76,.18)"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:15}}>
              <span style={{color:"var(--g)",fontSize:11,letterSpacing:3,textTransform:"uppercase",fontWeight:700}}>✈ Find Your Perfect Egypt Experience</span>
              <button onClick={()=>setAdv(!adv)} style={{background:adv?"rgba(201,168,76,.15)":"transparent",border:"1px solid rgba(201,168,76,.25)",color:adv?"var(--g)":"rgba(201,168,76,.5)",borderRadius:7,padding:"4px 14px",cursor:"pointer",fontSize:10,letterSpacing:1,transition:"all .2s"}}>
                {t.adv} {adv?"▲":"▾"}
              </button>
            </div>

            {/* Main search input */}
            <div style={{position:"relative",marginBottom:14}}>
              <span style={{position:"absolute",left:15,top:"50%",transform:"translateY(-50%)",color:"rgba(201,168,76,.45)",fontSize:17}}>🔍</span>
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder={t.searchPh}
                style={{...iS,paddingLeft:46,paddingRight:44,fontSize:15}}
                onFocus={fi} onBlur={fo}/>
              {q&&<button onClick={()=>{setQ("");setRes([]);}} style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"transparent",border:"none",color:"rgba(237,232,217,.3)",cursor:"pointer",fontSize:17}}>✕</button>}
            </div>

            {/* Search results dropdown */}
            {res.length>0&&(
              <div style={{background:"rgba(11,9,20,.98)",border:"1px solid rgba(201,168,76,.22)",borderRadius:14,marginBottom:14,overflow:"hidden",maxHeight:360,overflowY:"auto",animation:"slideD .2s ease"}}>
                {res.map((r,i)=>(
                  <div key={i} className="si" onClick={()=>{navigate(r.url);setQ("");setRes([]);setAdv(false);}}
                    style={{display:"flex",alignItems:"center",gap:13,padding:"12px 16px",cursor:"pointer",borderBottom:"1px solid rgba(201,168,76,.06)",transition:"background .15s"}}>
                    <img src={r.img} alt="" style={{width:58,height:46,borderRadius:10,objectFit:"cover",flexShrink:0}} onError={e=>e.target.style.display="none"}/>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontFamily:"'Cinzel',serif",fontSize:13,fontWeight:600,color:"var(--text)"}}>{r.title}</div>
                      <div style={{fontSize:11,color:"var(--muted)",marginTop:2,fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic"}}>{r.sub}</div>
                    </div>
                    <div style={{background:r.color?`${r.color}18`:"rgba(201,168,76,.1)",border:`1px solid ${r.color||"rgba(201,168,76,.22)"}`,borderRadius:6,padding:"2px 10px",fontSize:9,color:r.color||"var(--g)",letterSpacing:1,textTransform:"uppercase",flexShrink:0,fontFamily:"'Josefin Sans',sans-serif"}}>{r.tag}</div>
                  </div>
                ))}
              </div>
            )}
            {q&&!res.length&&(
              <div style={{padding:"14px 16px",textAlign:"center",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:14,color:"var(--muted)"}}>
                No results for "{q}" — try "Luxor", "Pyramids", "cruise"…
              </div>
            )}

            {/* Advanced fields */}
            {adv&&(
              <div className="sg" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1.2fr auto",gap:11,animation:"fadeUp .3s ease"}}>
                {[{label:t.checkin,type:"date"},{label:t.checkout,type:"date"}].map((f,i)=>(
                  <div key={i} style={{display:"flex",flexDirection:"column",gap:5}}>
                    <span style={{fontSize:9,color:"var(--muted)",letterSpacing:2,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif"}}>{f.label}</span>
                    <input type={f.type} style={{...iS,colorScheme:"dark"}} onFocus={fi} onBlur={fo}/>
                  </div>
                ))}
                <div style={{display:"flex",flexDirection:"column",gap:5,position:"relative"}}>
                  <span style={{fontSize:9,color:"var(--muted)",letterSpacing:2,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif"}}>👥 {t.guests}</span>
                  <div onClick={()=>setGO(!gO)} style={{...iS,cursor:"pointer",userSelect:"none"}}>{adults} {t.adults} · {kids} {t.children} ▾</div>
                  {gO&&(
                    <div style={{position:"absolute",top:"calc(100%+8px)",left:0,background:"#14111E",border:"1px solid rgba(201,168,76,.22)",borderRadius:13,padding:"16px",minWidth:220,zIndex:100,boxShadow:"0 24px 64px rgba(0,0,0,.78)",animation:"slideD .2s ease"}} onClick={e=>e.stopPropagation()}>
                      {[[t.adults,adults,setAdults,1],[t.children,kids,setKids,0]].map(([lbl,val,set,min])=>(
                        <div key={lbl} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                          <span style={{fontSize:14,color:"var(--text)",fontFamily:"'Cormorant Garamond',serif"}}>{lbl}</span>
                          <div style={{display:"flex",alignItems:"center",gap:13}}>
                            <button onClick={()=>set(Math.max(min,val-1))} style={{width:29,height:29,borderRadius:"50%",background:"rgba(201,168,76,.12)",border:"1px solid rgba(201,168,76,.3)",color:"var(--g)",cursor:"pointer",fontSize:17}}>−</button>
                            <span style={{color:"var(--g)",fontWeight:700,minWidth:18,textAlign:"center"}}>{val}</span>
                            <button onClick={()=>set(val+1)} style={{width:29,height:29,borderRadius:"50%",background:"rgba(201,168,76,.12)",border:"1px solid rgba(201,168,76,.3)",color:"var(--g)",cursor:"pointer",fontSize:17}}>+</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:5}}>
                  <span style={{fontSize:9,color:"var(--muted)",letterSpacing:2,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif"}}>🗺 {t.tourType}</span>
                  <select style={{...iS,cursor:"pointer"}}>
                    {["All Types","Day Tour","Nile Cruise","Multi-Day","Adventure","Cultural","Private"].map(o=><option key={o} style={{background:"#14111E"}}>{o}</option>)}
                  </select>
                </div>
                <button onClick={()=>{if(res.length)navigate(res[0].url);}} style={{background:"linear-gradient(135deg,var(--g),var(--gl))",color:"#050309",border:"none",borderRadius:11,padding:"11px 20px",cursor:"pointer",fontWeight:700,fontSize:11,letterSpacing:2,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",boxShadow:"0 6px 26px rgba(201,168,76,.42)",whiteSpace:"nowrap",alignSelf:"flex-end",transition:"all .25s"}}>
                  🔍 {t.searchBtn}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{position:"absolute",bottom:24,left:"50%",display:"flex",flexDirection:"column",alignItems:"center",gap:6,zIndex:4,animation:"scrollB 3s ease-in-out infinite"}}>
          <span style={{fontSize:8,letterSpacing:5,color:"rgba(201,168,76,.42)",textTransform:"uppercase"}}>SCROLL</span>
          <div style={{width:1,height:38,background:"linear-gradient(to bottom,rgba(201,168,76,.5),transparent)"}}/>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <div style={{background:"rgba(19,16,29,.9)",backdropFilter:"blur(18px)",borderTop:"1px solid rgba(201,168,76,.16)",borderBottom:"1px solid rgba(201,168,76,.16)"}}>
        <div style={{maxWidth:1060,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",padding:"clamp(18px,3vw,26px) clamp(16px,4vw,40px)"}}>
          {[["50K+","Happy Travelers"],["200+","Curated Tours"],["4.9★","Avg Rating"],["15+","Years of Excellence"]].map(([n,l],i)=>(
            <div key={i} data-v={`st${i}`} style={{textAlign:"center",borderRight:i<3?"1px solid rgba(201,168,76,.1)":"none",padding:"0 16px",opacity:vis[`st${i}`]?1:0,transform:vis[`st${i}`]?"none":"translateY(18px)",transition:`opacity .65s ease ${i*.1}s,transform .65s ease ${i*.1}s`}}>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(20px,2.5vw,30px)",fontWeight:700,color:"var(--g)"}}>{n}</div>
              <div style={{fontSize:9,color:"rgba(201,168,76,.45)",letterSpacing:2,textTransform:"uppercase",marginTop:4,fontFamily:"'Josefin Sans',sans-serif"}}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ MARQUEE ══ */}
      <div style={{borderBottom:"1px solid rgba(201,168,76,.07)",padding:"11px 0",overflow:"hidden",background:"rgba(5,3,9,.3)"}}>
        <div className="mq">
          {[...Array(3)].map((_,idx)=>(
            <span key={idx} style={{display:"inline-flex",alignItems:"center",gap:22,paddingRight:44,fontSize:10,color:"rgba(201,168,76,.35)",letterSpacing:3.5,textTransform:"uppercase",fontWeight:700}}>
              {CITIES.map((c,j)=><span key={j} style={{display:"inline-flex",alignItems:"center",gap:12}}><span style={{color:"rgba(201,168,76,.22)"}}>◆</span>{c.name}</span>)}
            </span>
          ))}
        </div>
      </div>
      {/* ══ DESTINATIONS ══ */}
      <section style={{padding:"clamp(52px,8vw,100px) clamp(16px,4vw,48px)"}}>
        <div {...rv("dh")} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"clamp(26px,4vw,44px)",...rv("dh").style}}>
          <div>
            <div style={{fontSize:10,color:"var(--g)",letterSpacing:5,textTransform:"uppercase",marginBottom:9,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Explore Egypt</div>
            <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(24px,4vw,46px)",fontWeight:700}}>{t.destTitle}</h2>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",color:"var(--muted)",fontSize:15,marginTop:7}}>{t.destSub}</p>
          </div>
          <button onClick={()=>navigate("/tours")} style={{background:"transparent",border:"1px solid rgba(201,168,76,.3)",color:"var(--g)",borderRadius:9,padding:"9px 22px",cursor:"pointer",fontSize:10,letterSpacing:2.5,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",transition:"all .2s",whiteSpace:"nowrap"}}>
            {t.viewAll} →
          </button>
        </div>
        <div className="dtop" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginBottom:16}}>
          {CITIES.slice(0,3).map(c=><CityCard key={c.id} c={c} navigate={navigate} large/>)}
        </div>
        <div className="dbot" style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:11}}>
          {CITIES.slice(3).map(c=><CityCard key={c.id} c={c} navigate={navigate}/>)}
        </div>
      </section>

      <div className="gline" style={{margin:"0 clamp(16px,4vw,48px)"}}/>
{/* ── PACKAGES SECTION ── */}
<div style={S.divider} />

<section style={S.section}>
  <div style={S.sectionHeader}>
    <div style={S.sectionTitleWrap}>
      <span style={S.sectionEyebrow}>✦ Complete Journeys</span>

      <h2
        style={{
          ...S.sectionTitle,
          fontFamily: "'Playfair Display', serif",
          background: "linear-gradient(90deg,#E8C96D,#C9A84C,#A07830)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "1px"
        }}
      >
        🗺️ Egypt Travel Packages
      </h2>
    </div>

    <button
      style={{
        ...S.viewAll,
        background: "rgba(201,168,76,0.08)",
        border: "1px solid rgba(201,168,76,0.2)",
        backdropFilter: "blur(10px)",
        transition: "0.3s ease"
      }}
      onClick={() => navigate("/packages")}
      onMouseEnter={(e) =>
        (e.target.style.background = "rgba(201,168,76,0.18)")
      }
      onMouseLeave={(e) =>
        (e.target.style.background = "rgba(201,168,76,0.08)")
      }
    >
      View All →
    </button>
  </div>

  {/* CARDS GRID */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "18px"
    }}
  >
    {[
      {
        title: "Nile Cruise: Luxor → Aswan",
        subtitle: "5 Days · Floating Palace on the Nile",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
        badge: "Bestseller",
        badgeColor: "#D4A847",
        price: 650,
        days: "5D/4N",
        tags: ["Nile Cruise", "Temples", "Full Board"],
        link: "/packages"
      },
      {
        title: "Cairo · Luxor · Aswan · Hurghada",
        subtitle: "10 Days · The Complete Egypt",
        img: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80",
        badge: "Most Popular",
        badgeColor: "#52B788",
        price: 1290,
        days: "10D/9N",
        tags: ["Pyramids", "Nile Cruise", "Red Sea"],
        link: "/packages"
      },
      {
        title: "Sinai & Dahab Adventure",
        subtitle: "6 Days · Desert, Sea & Spirituality",
        img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
        badge: "Adventure",
        badgeColor: "#E63946",
        price: 720,
        days: "6D/5N",
        tags: ["Mount Sinai", "Diving", "Bedouin"],
        link: "/packages"
      }
    ].map((p, i) => (
      <div
        key={i}
        className="card-hover"
        style={{
          ...S.card,
          cursor: "pointer",
          transition: "all 0.4s ease",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          overflow: "hidden"
        }}
        onClick={() => navigate(p.link)}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
          e.currentTarget.style.boxShadow =
            "0 25px 60px rgba(0,0,0,0.55)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0px)";
          e.currentTarget.style.boxShadow =
            "0 10px 25px rgba(0,0,0,0.3)";
        }}
      >

        {/* IMAGE FIXED */}
        <div
          style={{
            position: "relative",
            height: "220px",
            overflow: "hidden",
            background: "#0E0B07"
          }}
        >
          <img
            src={p.img}
            alt={p.title}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              transform: "scale(1.05)",
              transition: "transform 0.6s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.15)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onError={(e) =>
              (e.target.src = `https://placehold.co/600x400/110E08/C9A84C?text=${p.title.slice(
                0,
                12
              )}`)
            }
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(7,5,13,0.85), transparent 60%)"
            }}
          />

          {/* BADGE */}
          <div
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              background: p.badgeColor + "22",
              border: `1px solid ${p.badgeColor}55`,
              color: p.badgeColor,
              fontSize: "0.6rem",
              fontWeight: 700,
              padding: "3px 10px",
              borderRadius: "20px",
              textTransform: "uppercase",
              letterSpacing: "1.2px"
            }}
          >
            {p.badge}
          </div>

          {/* DAYS */}
          <div
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              background: "rgba(7,5,13,0.75)",
              color: "#EDE8D9",
              fontSize: "0.65rem",
              padding: "3px 8px",
              borderRadius: "6px"
            }}
          >
            {p.days}
          </div>
        </div>

        {/* CONTENT */}
        <div style={S.cardBody}>
          <div
            style={{
              ...S.cardName,
              fontFamily: "'Playfair Display', serif",
              fontSize: "1rem",
              letterSpacing: "0.5px"
            }}
          >
            {p.title}
          </div>

          <div
            style={{
              fontSize: "0.72rem",
              color: "#7A7264",
              marginBottom: "8px",
              fontStyle: "italic"
            }}
          >
            {p.subtitle}
          </div>

          {/* TAGS */}
          <div
            style={{
              display: "flex",
              gap: "4px",
              flexWrap: "wrap",
              marginBottom: "10px"
            }}
          >
            {p.tags.map((t, j) => (
              <span
                key={j}
                style={{
                  background: "rgba(201,168,76,0.07)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  color: "#A09880",
                  fontSize: "0.62rem",
                  padding: "2px 7px",
                  borderRadius: "8px"
                }}
              >
                ✦ {t}
              </span>
            ))}
          </div>

          {/* PRICE */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <span style={{ color: "#7A7264", fontSize: "0.62rem" }}>
                From{" "}
              </span>

              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#C9A84C",
                  fontSize: "1.1rem",
                  fontWeight: 900
                }}
              >
                {formatPrice(p.price, currency)}
              </span>

              <span style={{ color: "#7A7264", fontSize: "0.7rem" }}>
                /person
              </span>
            </div>

            <span style={{ color: "#C9A84C", fontSize: "0.75rem" }}>
              View →
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* CTA */}
  <div style={{ textAlign: "center", marginTop: "2rem" }}>
    <button
      className="book-btn"
      onClick={() => navigate("/packages")}
      style={{
        background:
          "linear-gradient(135deg,#E8C96D,#C9A84C,#A07830)",
        color: "#07050D",
        border: "none",
        borderRadius: "12px",
        padding: "13px 36px",
        cursor: "pointer",
        fontWeight: 700,
        fontSize: "0.85rem",
        letterSpacing: "2px",
        textTransform: "uppercase",
        boxShadow: "0 10px 30px rgba(201,168,76,0.35)",
        transition: "0.3s ease"
      }}
      onMouseEnter={(e) =>
        (e.target.style.transform = "scale(1.05)")
      }
      onMouseLeave={(e) =>
        (e.target.style.transform = "scale(1)")
      }
    >
      ✦ Explore All {PACKAGES_COUNT}+ Packages
    </button>
  </div>
</section>

<div className="gold-line" style={{ margin: "0 clamp(16px,5vw,48px)" }} />
      {/* ══ HOTELS + CRUISES ══ */}
      <section style={{padding:"clamp(52px,8vw,100px) clamp(16px,4vw,48px)"}}>
        <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(28px,5vw,64px)"}}>

          {/* Hotels */}
          <div {...rv("ht")} style={{...rv("ht").style}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:24}}>
              <div>
                <div style={{fontSize:9,color:"var(--g)",letterSpacing:4,textTransform:"uppercase",marginBottom:6,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>𓇳 Accommodation</div>
                <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(18px,2.2vw,30px)",fontWeight:700}}>🏨 {t.hotelsT}</h2>
              </div>
              <button style={{background:"none",border:"none",color:"var(--g)",cursor:"pointer",fontSize:10,letterSpacing:2,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif"}}>{t.viewAll} →</button>
            </div>
            <div className="g4" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
              {HOTELS.map((h,i)=>(
                <div key={i} className="hc" style={{background:"rgba(19,16,29,.85)",border:"1px solid rgba(201,168,76,.14)",borderRadius:18,overflow:"hidden",cursor:"pointer",transition:"all .38s ease",boxShadow:"0 6px 26px rgba(0,0,0,.45)"}}>
                  <div style={{position:"relative",height:120,overflow:"hidden"}}>
                    <img src={h.img} alt={h.name} style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .55s ease"}} onError={e=>e.target.src=`https://placehold.co/400x120/14111E/C9A84C?text=${h.name.slice(0,8)}`}/>
                    <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(5,3,9,.88),transparent 55%)"}}/>
                    <div style={{position:"absolute",bottom:9,left:11,right:11,display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
                      <span style={{background:"rgba(201,168,76,.9)",color:"#050309",fontSize:8,fontWeight:800,padding:"2px 8px",borderRadius:10,letterSpacing:1,fontFamily:"'Josefin Sans',sans-serif"}}>{h.city}</span>
                      <Stars n={h.stars}/>
                    </div>
                  </div>
                  <div style={{padding:"11px 14px 14px"}}>
                    <div style={{fontFamily:"'Cinzel',serif",fontSize:12,fontWeight:600,marginBottom:6,lineHeight:1.3}}>{h.name}</div>
                    <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:19,fontWeight:700,color:"var(--g)"}}>{fmt(h.price,cur)}</span>
                      <span style={{fontSize:10,color:"var(--muted)"}}>{t.perNight}</span>
                    </div>
                    <button onClick={()=>setBookItem(h)} style={{width:"100%",background:"rgba(201,168,76,.1)",border:"1px solid rgba(201,168,76,.22)",color:"var(--g)",borderRadius:8,padding:"7px",cursor:"pointer",fontSize:10,letterSpacing:1.5,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",transition:"all .2s"}}>
                      Book →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cruises */}
          <div {...rv("cr")} style={{...rv("cr").style}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:24}}>
              <div>
                <div style={{fontSize:9,color:"var(--g)",letterSpacing:4,textTransform:"uppercase",marginBottom:6,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>⛴ River Journeys</div>
                <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(18px,2.2vw,30px)",fontWeight:700}}>🚢 {t.cruisesT}</h2>
              </div>
              <button style={{background:"none",border:"none",color:"var(--g)",cursor:"pointer",fontSize:10,letterSpacing:2,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif"}}>{t.viewAll} →</button>
            </div>
            <div className="g4" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
              {CRUISES.map((cr,i)=>(
                <div key={i} className="hc" style={{background:"rgba(19,16,29,.85)",border:"1px solid rgba(201,168,76,.14)",borderRadius:18,overflow:"hidden",cursor:"pointer",transition:"all .38s ease",boxShadow:"0 6px 26px rgba(0,0,0,.45)"}}>
                  <div style={{position:"relative",height:120,overflow:"hidden"}}>
                    <img src={cr.img} alt={cr.name} style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .55s ease"}} onError={e=>e.target.src=`https://placehold.co/400x120/14111E/C9A84C?text=${cr.name.slice(0,8)}`}/>
                    <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(5,3,9,.88),transparent 55%)"}}/>
                    <div style={{position:"absolute",top:8,left:10,background:"rgba(201,168,76,.15)",border:"1px solid rgba(201,168,76,.3)",borderRadius:6,padding:"2px 9px",fontSize:8,color:"var(--g)",letterSpacing:1,fontFamily:"'Josefin Sans',sans-serif"}}>{cr.route}</div>
                    <div style={{position:"absolute",bottom:9,right:11}}><Stars n={cr.stars}/></div>
                  </div>
                  <div style={{padding:"11px 14px 14px"}}>
                    <div style={{fontFamily:"'Cinzel',serif",fontSize:12,fontWeight:600,marginBottom:6,lineHeight:1.3}}>{cr.name}</div>
                    <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:19,fontWeight:700,color:"var(--g)"}}>{fmt(cr.price,cur)}</span>
                      <span style={{fontSize:10,color:"var(--muted)"}}>{t.perNight}</span>
                    </div>
                    <button onClick={()=>setBookItem(cr)} style={{width:"100%",background:"rgba(201,168,76,.1)",border:"1px solid rgba(201,168,76,.22)",color:"var(--g)",borderRadius:8,padding:"7px",cursor:"pointer",fontSize:10,letterSpacing:1.5,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",transition:"all .2s"}}>
                      Book →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gline" style={{margin:"0 clamp(16px,4vw,48px)"}}/>

      {/* ══ AI BUILDER ══ */}
      <section style={{padding:"clamp(52px,8vw,100px) clamp(16px,4vw,48px)"}}>
        <div {...rv("ai")} style={{...rv("ai").style}}>
          <div style={{textAlign:"center",marginBottom:"clamp(28px,4vw,52px)"}}>
            <div style={{fontSize:9,color:"var(--g)",letterSpacing:5,textTransform:"uppercase",marginBottom:10,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>🤖 AI-Powered Planning</div>
            <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(24px,4vw,48px)",fontWeight:700,marginBottom:10}}>{t.aiTitle}</h2>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",color:"var(--muted)",fontSize:"clamp(13px,1.8vw,18px)",maxWidth:680,margin:"0 auto"}}>{t.aiSub}</p>
          </div>

          {/* Luxury animated border card */}
          <div className="ab" style={{maxWidth:920,margin:"0 auto",borderRadius:22,position:"relative"}}>
            <div style={{background:"linear-gradient(145deg,rgba(20,17,30,.99),rgba(5,3,9,.99))",borderRadius:22,padding:"clamp(24px,4vw,44px)",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:20,right:24,fontSize:38,color:"rgba(201,168,76,.04)",pointerEvents:"none",fontFamily:"serif",letterSpacing:8}}>𓂀 𓅓 𓇋</div>
              <div style={{position:"absolute",bottom:16,left:20,fontSize:28,color:"rgba(201,168,76,.025)",pointerEvents:"none",fontFamily:"serif"}}>𓆣 𓂋 𓊃 𓌀</div>

              <label style={{display:"block",fontSize:10,color:"var(--g)",letterSpacing:3,textTransform:"uppercase",marginBottom:12,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>{t.aiLabel}</label>

              <textarea value={aiQ} onChange={e=>setAiQ(e.target.value)} rows={4}
                placeholder={`e.g. 10 days Egypt for 2 people — Cairo pyramids, 4-night Nile cruise, 3 nights Hurghada diving, 4-star hotels, total budget $3,500`}
                style={{width:"100%",background:"rgba(201,168,76,.04)",border:"1px solid rgba(201,168,76,.22)",borderRadius:13,padding:"15px 17px",color:"var(--text)",fontSize:14,outline:"none",fontFamily:"'Cormorant Garamond',serif",lineHeight:1.75,resize:"vertical",transition:"all .25s",colorScheme:"dark",marginBottom:14}}
                onFocus={e=>{e.target.style.borderColor="rgba(201,168,76,.58)";e.target.style.boxShadow="0 0 0 3px rgba(201,168,76,.07)";}}
                onBlur={e=>{e.target.style.borderColor="rgba(201,168,76,.22)";e.target.style.boxShadow="none";}}/>

              {/* Quick chips */}
              <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:18}}>
                {[
                  "10 days Egypt $3,500 for 2 — Cairo, Nile cruise, Hurghada",
                  "7-day Nile cruise + pyramids, mid-range budget",
                  "Luxury honeymoon Egypt 10 nights",
                  "Family Egypt 2 weeks $5,000 kids-friendly",
                  "رحلة 10 أيام مصر لشخصين، أهرامات ورحلة نيلية، ميزانية 3500 دولار",
                ].map((ch,i)=>(
                  <button key={i} className="chip" onClick={()=>setAiQ(ch)} style={{background:"rgba(201,168,76,.07)",border:"1px solid rgba(201,168,76,.2)",color:"var(--dim)",borderRadius:22,padding:"6px 15px",fontSize:11,cursor:"pointer",transition:"all .2s",fontFamily:"'Josefin Sans',sans-serif"}}>
                    {ch.length>48?ch.slice(0,45)+"…":ch}
                  </button>
                ))}
              </div>

              <button onClick={buildAI} disabled={aiLoad||!aiQ.trim()} style={{width:"100%",background:"linear-gradient(135deg,var(--g),var(--gl))",color:"#050309",border:"none",borderRadius:13,padding:"17px",cursor:aiLoad?"wait":"pointer",fontWeight:700,fontSize:14,letterSpacing:3,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",boxShadow:"0 8px 36px rgba(201,168,76,.45)",transition:"all .25s",opacity:(aiLoad||!aiQ.trim())?.5:1,display:"flex",alignItems:"center",justifyContent:"center",gap:12}}>
                {aiLoad?<><div style={{width:18,height:18,border:"2px solid rgba(0,0,0,.2)",borderTop:"2px solid #050309",borderRadius:"50%",animation:"spin .7s linear infinite"}}/>{t.aiThink}</>:`🤖 ${t.aiBtn}`}
              </button>

              {aiRes&&(
                <div style={{marginTop:22,background:"rgba(201,168,76,.04)",border:"1px solid rgba(201,168,76,.2)",borderRadius:14,padding:"clamp(16px,3vw,26px)",color:"var(--text)",fontSize:"clamp(13px,1.5vw,15px)",lineHeight:1.9,whiteSpace:"pre-wrap",maxHeight:520,overflowY:"auto",fontFamily:"'Cormorant Garamond',serif",animation:"fadeIn .5s ease"}}>
                  {aiRes}
                </div>
              )}

              {aiDone&&(
                <div style={{marginTop:16,display:"flex",gap:12,flexWrap:"wrap",animation:"fadeUp .5s ease"}}>
                  <button onClick={()=>window.open("https://wa.me/201068257754","_blank")} style={{flex:1,background:"#25D366",color:"#fff",border:"none",borderRadius:11,padding:"13px 20px",cursor:"pointer",fontWeight:700,fontSize:13,letterSpacing:1.5,fontFamily:"'Josefin Sans',sans-serif",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
                    {t.aiSend}
                  </button>
                  <button onClick={()=>{setAiQ("");setAiRes("");setAiDone(false);}} style={{background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.1)",color:"var(--muted)",borderRadius:11,padding:"13px 20px",cursor:"pointer",fontSize:13,fontFamily:"'Josefin Sans',sans-serif"}}>
                    {t.aiNew}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="gline" style={{margin:"0 clamp(16px,4vw,48px)"}}/>

      {/* ══ HOW IT WORKS ══ */}
      <section style={{padding:"clamp(52px,8vw,100px) clamp(16px,4vw,48px)"}}>
        <div {...rv("hw")} style={{maxWidth:860,margin:"0 auto",...rv("hw").style}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <div style={{fontSize:9,color:"var(--g)",letterSpacing:5,textTransform:"uppercase",marginBottom:10,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Simple Process</div>
            <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(22px,3.5vw,40px)",fontWeight:700}}>⚙️ How It Works</h2>
          </div>
          <div style={{background:"rgba(19,16,29,.7)",border:"1px solid rgba(201,168,76,.15)",borderRadius:18,overflow:"hidden"}}>
            {[["📍","Choose Your Tour","Browse 200+ curated experiences across Egypt"],["⚙️","Customise","Dates, group size, hotel tier & special requests"],["💳","Secure Payment","Bank-grade encryption — pay just 20% to confirm"],["✅","Enjoy Egypt!","Our on-ground team handles every single detail"]].map((s,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:20,padding:"clamp(17px,2.5vw,24px) clamp(20px,3vw,32px)",background:step===i?"rgba(201,168,76,.07)":"transparent",borderBottom:i<3?"1px solid rgba(201,168,76,.07)":"none",transition:"background .45s ease"}}>
                <div style={{width:52,height:52,borderRadius:13,background:step===i?"linear-gradient(135deg,var(--g),var(--gl))":"rgba(201,168,76,.1)",border:step===i?"none":"1px solid rgba(201,168,76,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,transition:"all .45s",boxShadow:step===i?"0 6px 24px rgba(201,168,76,.4)":"none"}}>{s[0]}</div>
                <div>
                  <div style={{fontFamily:"'Cinzel',serif",fontSize:14,fontWeight:600,color:step===i?"var(--g)":"var(--text)",transition:"color .45s",marginBottom:3}}>{s[1]}</div>
                  <div style={{fontSize:13,color:"var(--muted)",fontFamily:"'Cormorant Garamond',serif"}}>{s[2]}</div>
                </div>
                <div style={{marginLeft:"auto",width:26,height:26,borderRadius:"50%",background:step===i?"rgba(201,168,76,.18)":"transparent",border:`1px solid ${step===i?"rgba(201,168,76,.5)":"transparent"}`,display:"flex",alignItems:"center",justifyContent:"center",color:step===i?"var(--g)":"transparent",fontSize:13,transition:"all .45s",flexShrink:0}}>✓</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gline" style={{margin:"0 clamp(16px,4vw,48px)"}}/>

      {/* ══ WHY US ══ */}
      <section style={{padding:"clamp(52px,8vw,100px) clamp(16px,4vw,48px)"}}>
        <div {...rv("wh")} style={{textAlign:"center",marginBottom:"clamp(28px,4vw,52px)",...rv("wh").style}}>
          <div style={{fontSize:9,color:"var(--g)",letterSpacing:5,textTransform:"uppercase",marginBottom:10,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Our Promise</div>
          <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(24px,4vw,44px)",fontWeight:700,marginBottom:8}}>{t.whyTitle}</h2>
          <p style={{color:"var(--muted)",fontSize:14,fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic"}}>{t.whySub}</p>
        </div>
        <div className="whyg" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,maxWidth:1100,margin:"0 auto"}}>
          {WHY.map((w,i)=>(
            <div key={i} data-v={`wy${i}`} className="wc" style={{background:"rgba(19,16,29,.75)",border:"1px solid rgba(201,168,76,.13)",borderRadius:17,padding:"clamp(18px,2.5vw,28px)",transition:"all .35s ease",cursor:"default",position:"relative",overflow:"hidden",opacity:vis[`wy${i}`]?1:0,transform:vis[`wy${i}`]?"none":"translateY(24px)",transitionDelay:`${i*.07}s`}}>
              <div style={{position:"absolute",top:-10,right:-10,fontFamily:"'Cinzel',serif",fontSize:42,color:"rgba(201,168,76,.05)",fontWeight:700}}>{w.num}</div>
              <div className="wi" style={{fontSize:30,marginBottom:14,display:"block",transition:"transform .3s ease"}}>{w.icon}</div>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:14,fontWeight:600,marginBottom:8}}>{w.t}</div>
              <div style={{fontSize:13,color:"var(--muted)",lineHeight:1.65,fontFamily:"'Cormorant Garamond',serif"}}>{w.d}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="gline" style={{margin:"0 clamp(16px,4vw,48px)"}}/>
      {/* ══ REVIEWS ══ */}
      <section style={{padding:"clamp(52px,8vw,100px) clamp(16px,4vw,48px)"}}>
        <div {...rv("rh")} style={{textAlign:"center",marginBottom:"clamp(28px,4vw,48px)",...rv("rh").style}}>
          <div style={{fontSize:9,color:"var(--g)",letterSpacing:5,textTransform:"uppercase",marginBottom:10,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>⭐ Testimonials</div>
          <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(22px,4vw,42px)",fontWeight:700,marginBottom:8}}>{t.revTitle}</h2>
          <p style={{color:"var(--muted)",fontSize:13,fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic"}}>{t.revSub}</p>
        </div>
        <div className="revg" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:15,maxWidth:1100,margin:"0 auto"}}>
          {REVIEWS.map((r,i)=>(
            <div key={i} data-v={`rv${i}`} className="rc" style={{background:"rgba(19,16,29,.75)",border:"1px solid rgba(201,168,76,.1)",borderRadius:16,padding:"clamp(16px,2.5vw,24px)",position:"relative",transition:"all .33s ease",opacity:vis[`rv${i}`]?1:0,transform:vis[`rv${i}`]?"none":"translateY(24px)",transitionDelay:`${i*.08}s`}}>
              <div style={{position:"absolute",top:-8,right:18,fontFamily:"'Cormorant Garamond',serif",fontSize:56,color:"rgba(201,168,76,.09)",lineHeight:1}}>"</div>
              <Stars n={r.stars}/>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:"clamp(12px,1.4vw,14px)",color:"var(--dim)",lineHeight:1.78,margin:"10px 0 14px",position:"relative"}}>{r.text}</p>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <img src={r.img} alt={r.name} style={{width:40,height:40,borderRadius:"50%",border:"2px solid rgba(201,168,76,.3)",objectFit:"cover"}}/>
                <div>
                  <div style={{fontSize:13,fontWeight:700,fontFamily:"'Cormorant Garamond',serif"}}>{r.name}</div>
                  <div style={{fontSize:11,color:"var(--muted)"}}>{r.flag} {r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <div style={{margin:"0 clamp(16px,4vw,48px) clamp(52px,8vw,100px)",borderRadius:22,overflow:"hidden",position:"relative"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"url('https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1600&q=70')",backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(.22)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(5,3,9,.92),rgba(19,16,29,.85))"}}/>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 70% 50% at 50% 100%,rgba(201,168,76,.07),transparent 70%)"}}/>
        <div {...rv("cta")} style={{position:"relative",padding:"clamp(40px,6vw,84px) clamp(24px,6vw,84px)",textAlign:"center",...rv("cta").style}}>
          <div style={{fontSize:9,color:"var(--g)",letterSpacing:5,textTransform:"uppercase",marginBottom:16,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Start Your Journey</div>
          <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(22px,4.5vw,54px)",fontWeight:700,marginBottom:14,color:"#fff",lineHeight:1.1}}>
            {t.ctaTitle.split(" ").slice(0,3).join(" ")} <span className="gt">{t.ctaTitle.split(" ").slice(3,5).join(" ")}</span><br/>
            {t.ctaTitle.split(" ").slice(5).join(" ")}
          </h2>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",color:"rgba(237,232,217,.5)",fontSize:"clamp(14px,1.8vw,18px)",marginBottom:32,maxWidth:540,margin:"0 auto 32px",lineHeight:1.8}}>{t.ctaDesc}</p>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={()=>setBookItem({title:"Book Your Egypt Adventure"})} style={{background:"linear-gradient(135deg,var(--g),var(--gl))",color:"#050309",border:"none",borderRadius:12,padding:"15px 38px",cursor:"pointer",fontWeight:700,fontSize:13,letterSpacing:2.5,fontFamily:"'Josefin Sans',sans-serif",boxShadow:"0 8px 36px rgba(201,168,76,.45)",transition:"all .25s"}}>
              ✈ {t.bookNow}
            </button>
            <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" style={{background:"rgba(37,211,102,.12)",border:"1px solid rgba(37,211,102,.4)",color:"#25D366",borderRadius:12,padding:"15px 28px",textDecoration:"none",fontWeight:700,fontSize:13,letterSpacing:1.5,fontFamily:"'Josefin Sans',sans-serif",display:"flex",alignItems:"center",gap:8,transition:"all .25s"}}>
              💬 {t.whatsapp}
            </a>
          </div>
        </div>
      </div>

      {/* ══ NEWSLETTER ══ */}
      <section style={{background:"rgba(19,16,29,.6)",borderTop:"1px solid rgba(201,168,76,.1)",borderBottom:"1px solid rgba(201,168,76,.1)",padding:"clamp(36px,5vw,64px) clamp(16px,4vw,48px)",textAlign:"center"}}>
        <div {...rv("nl")} style={{maxWidth:480,margin:"0 auto",...rv("nl").style}}>
          <div style={{fontSize:9,color:"var(--g)",letterSpacing:5,textTransform:"uppercase",marginBottom:10,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✉ Newsletter</div>
          <h3 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(18px,3vw,30px)",fontWeight:700,marginBottom:8}}>{t.nlTitle}</h3>
          <p style={{color:"var(--muted)",fontSize:13,marginBottom:22,fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic"}}>{t.nlSub}</p>
          {!subOk
            ?<div style={{display:"flex",gap:10}}>
               <input value={email} onChange={e=>setEmail(e.target.value)} placeholder={t.nlPh} style={iS} onFocus={fi} onBlur={fo}/>
               <button onClick={()=>email&&setSubOk(true)} style={{background:"linear-gradient(135deg,var(--g),var(--gl))",color:"#050309",border:"none",borderRadius:10,padding:"12px 22px",cursor:"pointer",fontWeight:700,fontSize:11,letterSpacing:1.5,fontFamily:"'Josefin Sans',sans-serif",whiteSpace:"nowrap"}}>{t.nlBtn}</button>
             </div>
            :<div style={{color:"var(--g)",fontSize:16,fontFamily:"'Cormorant Garamond',serif"}}>✅ Thank you! Welcome to the Golden Egypt family.</div>
          }
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{background:"#040208",borderTop:"1px solid rgba(201,168,76,.12)",padding:"clamp(40px,6vw,72px) clamp(16px,4vw,48px) clamp(20px,3vw,28px)"}}>
        <div className="ftg" style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1.5fr",gap:"clamp(24px,4vw,52px)",marginBottom:"clamp(28px,4vw,48px)"}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16,cursor:"pointer"}} onClick={()=>navigate("/")}>
              <div style={{width:46,height:46,borderRadius:"50%",background:"linear-gradient(135deg,var(--g),#8B6914)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>𓂀</div>
              <div>
                <div style={{fontFamily:"'Cinzel',serif",fontSize:14,fontWeight:700,color:"var(--g)",letterSpacing:3}}>GOLDEN EGYPT</div>
                <div style={{fontSize:8,color:"rgba(201,168,76,.4)",letterSpacing:4}}>TOURS & EXPEDITIONS</div>
              </div>
            </div>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",color:"var(--muted)",fontSize:13,lineHeight:1.75,marginBottom:18,maxWidth:250}}>{t.footerTag}</p>
            <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16}}>
              {["TripAdvisor","Trustpilot","IATA","UNWTO"].map(b=><span key={b} style={{background:"rgba(201,168,76,.07)",border:"1px solid rgba(201,168,76,.14)",borderRadius:6,padding:"3px 10px",color:"var(--muted)",fontSize:9,letterSpacing:1}}>{b}</span>)}
            </div>
            <div style={{display:"flex",gap:8}}>
              {[["f","FB"],["📸","IG"],["𝕏","X"],["▶","YT"]].map(([ic,nm])=><a key={nm} href="#" title={nm} style={{width:34,height:34,borderRadius:8,background:"rgba(201,168,76,.07)",border:"1px solid rgba(201,168,76,.14)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--muted)",textDecoration:"none",fontSize:12,transition:"all .2s"}}>{ic}</a>)}
            </div>
          </div>
          {[
            {t:"Destinations",l:["Cairo & Giza","Luxor","Aswan","Hurghada","Sharm El Sheikh","Alexandria","Fayoum","Marsa Alam"]},
            {t:"Travel Types", l:["Day Tours","Multi-Day Packages","Nile Cruises","Private Tours","Honeymoon","Family Trips","AI-Planned"]},
          ].map(col=>(
            <div key={col.t}>
              <div style={{color:"var(--g)",fontSize:9,letterSpacing:3,textTransform:"uppercase",marginBottom:16,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif",paddingBottom:10,borderBottom:"1px solid rgba(201,168,76,.1)"}}>{col.t}</div>
              {col.l.map(lnk=><a key={lnk} href="#" style={{display:"block",color:"var(--muted)",fontSize:13,marginBottom:9,textDecoration:"none",transition:"color .2s",fontFamily:"'Cormorant Garamond',serif",lineHeight:1.4}} onMouseOver={e=>e.target.style.color="var(--g)"} onMouseOut={e=>e.target.style.color="var(--muted)"}>{lnk}</a>)}
            </div>
          ))}
          <div>
            <div style={{color:"var(--g)",fontSize:9,letterSpacing:3,textTransform:"uppercase",marginBottom:16,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif",paddingBottom:10,borderBottom:"1px solid rgba(201,168,76,.1)"}}>Contact</div>
            {[["✉","Goldenegypttours26@gmail.com"],["📞","+20 106 825 7754"],["📍","Cairo, Egypt"]].map(([ic,v])=>(
              <div key={v} style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:12,fontSize:13,color:"var(--muted)",lineHeight:1.5,fontFamily:"'Cormorant Garamond',serif"}}>
                <span style={{color:"var(--g)",flexShrink:0}}>{ic}</span>{v}
              </div>
            ))}
            <div style={{marginTop:14}}>
              <div style={{color:"var(--g)",fontSize:9,letterSpacing:2,textTransform:"uppercase",marginBottom:10,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>Legal</div>
              {["Privacy Policy","Terms of Service","Cookie Policy","FAQ"].map(l=><a key={l} href="#" style={{display:"block",color:"var(--muted)",fontSize:12,marginBottom:8,textDecoration:"none",transition:"color .2s",fontFamily:"'Cormorant Garamond',serif"}} onMouseOver={e=>e.target.style.color="var(--g)"} onMouseOut={e=>e.target.style.color="var(--muted)"}>{l}</a>)}
            </div>
          </div>
        </div>
        <div style={{borderTop:"1px solid rgba(201,168,76,.07)",paddingTop:"clamp(16px,3vw,22px)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
          <span style={{color:"#3A2A1A",fontSize:12}}>© 2026 Golden Egypt Tours & Expeditions. All rights reserved.</span>
          <div style={{display:"flex",gap:8}}>
            {["🔒 SSL","✈ IATA","🌍 UNWTO"].map(b=><span key={b} style={{background:"rgba(201,168,76,.05)",border:"1px solid rgba(201,168,76,.1)",borderRadius:6,padding:"3px 10px",color:"#4A3A2A",fontSize:9,letterSpacing:1}}>{b}</span>)}
          </div>
        </div>
      </footer>

      {/* ══ FLOATING ══ */}
      <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" style={{position:"fixed",bottom:76,right:20,background:"#25D366",color:"#fff",borderRadius:30,padding:"11px 18px",textDecoration:"none",fontWeight:700,fontSize:12,letterSpacing:1,display:"flex",alignItems:"center",gap:8,zIndex:500,boxShadow:"0 6px 28px rgba(37,211,102,.48)",transition:"all .25s",fontFamily:"'Josefin Sans',sans-serif"}}>
        💬 <span>{t.whatsapp}</span>
      </a>
      <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{position:"fixed",bottom:20,right:20,width:46,height:46,borderRadius:12,background:"rgba(201,168,76,.12)",border:"1px solid rgba(201,168,76,.3)",color:"var(--g)",fontSize:16,cursor:"pointer",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",transition:"all .25s",boxShadow:"0 4px 18px rgba(0,0,0,.45)"}}>▲</button>

      {/* ══ BOOKING MODAL ══ */}
      {bookItem&&<BookingModal item={bookItem} onClose={()=>setBookItem(null)} cur={cur} lang={lang}/>}
    </div>
  );
}
