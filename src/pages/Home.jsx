import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
const TRANSLATIONS = {
  en: {
    dir: "ltr",
    nav: { home: "Home", tours: "Tours", cruises: "Nile Cruises", hotels: "Hotels", about: "About Us", contact: "Contact" },
    hero: { title: "Golden Egypt Tours", subtitle: "Discover Egypt Like Never Before", tagline: "Where Legends Are Born", search: "Search", destination: "Where are you going?", checkin: "Check-in", checkout: "Check-out", guests: "Guests", adults: "Adults", children: "Children", advanced: "Advanced Search" },
    trending: { title: "Trending Destinations", viewAll: "View All" },
    hotels: { title: "Featured Hotels", viewAll: "View All", perNight: "/ night" },
    cruises: { title: "Nile Cruises", viewAll: "View All", perNight: "/ night" },
    ai: { title: "AI Trip Builder", subtitle: "Plan your perfect trip in seconds", placeholder: "e.g. Plan a 5-day trip to Luxor and Aswan", generate: "Generate Trip", thinking: "Creating your dream itinerary...", chips: ["5 days in Cairo", "Family trip to Egypt", "Nile Cruise Aswan to Luxor", "Honeymoon in Egypt"] },
    booking: { title: "How It Works", steps: ["Choose Tour", "Customize", "Payment", "Confirmation"], descs: ["Select your destination", "Dates, people & options", "Secure payment", "Enjoy your trip!"] },
    why: { title: "Why Golden Egypt Tours?", subtitle: "The world's leading Egypt specialist since 1995", cards: [{ icon: "🏆", t: "Award-Winning Service", d: "Voted #1 Egypt Tour Operator by Travellers' Choice 5 years running" }, { icon: "🛡️", t: "100% Secure Booking", d: "Bank-grade encryption and full money-back guarantee on all bookings" }, { icon: "🌍", t: "Global Reach", d: "Serving travelers from 90+ countries in 9 languages" }, { icon: "🤖", t: "AI-Powered Planning", d: "Proprietary AI builds your personalised Egypt itinerary in seconds" }, { icon: "⭐", t: "50,000+ Reviews", d: "Average 4.9/5 stars across TripAdvisor, Google, and Trustpilot" }, { icon: "🎯", t: "Tailor-Made Tours", d: "Every itinerary hand-crafted by our expert Egyptologist guides" }] },
    testimonials: { title: "Travellers Love Egypt", subtitle: "Real stories from real adventurers" },
    newsletter: { title: "Get Exclusive Egypt Deals", subtitle: "Join 200,000+ travellers. Unsubscribe anytime.", placeholder: "Your email address", cta: "Subscribe" },
    footer: { company: "Golden Egypt Tours", tagline: "Discover Egypt Like Never Before", links: { tours: "Tours", cruises: "Nile Cruises", hotels: "Hotels", about: "About Us", contact: "Contact", privacy: "Privacy Policy", terms: "Terms of Service", faq: "FAQ" }, contact: "Contact", rights: "© 2026 Golden Egypt Tours. All rights reserved." },
    bookNow: "Book Now",
    chatWA: "Chat on WhatsApp",
    selectDates: "Select Your Dates",
  },
  ar: {
    dir: "rtl",
    nav: { home: "الرئيسية", tours: "الجولات", cruises: "رحلات النيل", hotels: "الفنادق", about: "من نحن", contact: "تواصل معنا" },
    hero: { title: "جولدن إيجيبت تورز", subtitle: "اكتشف مصر كما لم تراها من قبل", tagline: "حيث تولد الأساطير", search: "بحث", destination: "أين تريد الذهاب؟", checkin: "تسجيل الدخول", checkout: "تسجيل الخروج", guests: "الضيوف", adults: "بالغين", children: "أطفال", advanced: "بحث متقدم" },
    trending: { title: "الوجهات الأكثر طلباً", viewAll: "عرض الكل" },
    hotels: { title: "الفنادق المميزة", viewAll: "عرض الكل", perNight: "/ ليلة" },
    cruises: { title: "رحلات النيل", viewAll: "عرض الكل", perNight: "/ ليلة" },
    ai: { title: "منشئ الرحلات بالذكاء الاصطناعي", subtitle: "خطط لرحلتك المثالية في ثوانٍ", placeholder: "مثال: خطط لرحلة 5 أيام إلى الأقصر وأسوان", generate: "إنشاء الرحلة", thinking: "جاري إنشاء رحلة أحلامك...", chips: ["5 أيام في القاهرة", "رحلة عائلية لمصر", "رحلة نيلية من أسوان للأقصر", "شهر عسل في مصر"] },
    booking: { title: "كيف يعمل النظام", steps: ["اختر الجولة", "خصص رحلتك", "الدفع", "التأكيد"], descs: ["اختر وجهتك", "التواريخ والأشخاص والخيارات", "دفع آمن", "استمتع برحلتك!"] },
    why: { title: "لماذا جولدن إيجيبت تورز؟", subtitle: "الشركة الأولى عالمياً لسياحة مصر منذ عام 1995", cards: [{ icon: "🏆", t: "خدمة حائزة على جوائز", d: "صوّت لها المسافرون كأفضل شركة سياحة في مصر لـ5 سنوات متتالية" }, { icon: "🛡️", t: "حجز آمن 100%", d: "تشفير مصرفي وضمان استرداد كامل للمبلغ" }, { icon: "🌍", t: "وصول عالمي", d: "نخدم المسافرين من 90+ دولة بـ9 لغات" }, { icon: "🤖", t: "تخطيط بالذكاء الاصطناعي", d: "الذكاء الاصطناعي يبني رحلتك الشخصية في ثوانٍ" }, { icon: "⭐", t: "+50,000 تقييم", d: "متوسط 4.9/5 نجوم عبر جميع المنصات" }, { icon: "🎯", t: "جولات مخصصة", d: "كل رحلة مصممة يدوياً بواسطة مرشدينا المتخصصين في علم المصريات" }] },
    testimonials: { title: "المسافرون يعشقون مصر", subtitle: "قصص حقيقية من مغامرين حقيقيين" },
    newsletter: { title: "احصل على عروض مصر الحصرية", subtitle: "انضم لأكثر من 200,000 مسافر. يمكنك إلغاء الاشتراك في أي وقت.", placeholder: "بريدك الإلكتروني", cta: "اشترك" },
    footer: { company: "جولدن إيجيبت تورز", tagline: "اكتشف مصر كما لم تراها من قبل", links: { tours: "الجولات", cruises: "رحلات النيل", hotels: "الفنادق", about: "من نحن", contact: "تواصل معنا", privacy: "سياسة الخصوصية", terms: "شروط الخدمة", faq: "الأسئلة الشائعة" }, contact: "تواصل معنا", rights: "© 2026 جولدن إيجيبت تورز. جميع الحقوق محفوظة." },
    bookNow: "احجز الآن",
    chatWA: "تواصل عبر واتساب",
    selectDates: "اختر تواريخك",
  },
  es: {
    dir: "ltr",
    nav: { home: "Inicio", tours: "Tours", cruises: "Cruceros por el Nilo", hotels: "Hoteles", about: "Sobre Nosotros", contact: "Contacto" },
    hero: { title: "Golden Egypt Tours", subtitle: "Descubre Egipto como nunca antes", tagline: "Donde Nacen las Leyendas", search: "Buscar", destination: "¿A dónde vas?", checkin: "Check-in", checkout: "Check-out", guests: "Huéspedes", adults: "Adultos", children: "Niños", advanced: "Búsqueda Avanzada" },
    trending: { title: "Destinos Populares", viewAll: "Ver Todo" },
    hotels: { title: "Hoteles Destacados", viewAll: "Ver Todo", perNight: "/ noche" },
    cruises: { title: "Cruceros por el Nilo", viewAll: "Ver Todo", perNight: "/ noche" },
    ai: { title: "Constructor de Viajes con IA", subtitle: "Planifica tu viaje perfecto en segundos", placeholder: "Ej: Planifica un viaje de 5 días a Luxor y Asuán", generate: "Generar Viaje", thinking: "Creando tu itinerario soñado...", chips: ["5 días en El Cairo", "Viaje familiar a Egipto", "Crucero del Nilo", "Luna de miel en Egipto"] },
    booking: { title: "Cómo Funciona", steps: ["Elige el Tour", "Personaliza", "Pago", "Confirmación"], descs: ["Selecciona tu destino", "Fechas, personas y opciones", "Pago seguro", "¡Disfruta tu viaje!"] },
    why: { title: "¿Por qué Golden Egypt Tours?", subtitle: "El especialista líder mundial en Egipto desde 1995", cards: [{ icon: "🏆", t: "Servicio Premiado", d: "Votado operador #1 de tours en Egipto 5 años consecutivos" }, { icon: "🛡️", t: "Reserva 100% Segura", d: "Cifrado bancario y garantía de devolución total" }, { icon: "🌍", t: "Alcance Global", d: "Atendemos viajeros de 90+ países en 9 idiomas" }, { icon: "🤖", t: "Planificación con IA", d: "IA propietaria construye tu itinerario personalizado en segundos" }, { icon: "⭐", t: "+50,000 Reseñas", d: "Promedio 4.9/5 estrellas en todas las plataformas" }, { icon: "🎯", t: "Tours a Medida", d: "Cada itinerario elaborado por nuestros guías expertos en Egiptología" }] },
    testimonials: { title: "Los Viajeros Aman Egipto", subtitle: "Historias reales de aventureros reales" },
    newsletter: { title: "Obtén Ofertas Exclusivas de Egipto", subtitle: "Únete a 200,000+ viajeros. Cancela cuando quieras.", placeholder: "Tu correo electrónico", cta: "Suscribirse" },
    footer: { company: "Golden Egypt Tours", tagline: "Descubre Egipto como nunca antes", links: { tours: "Tours", cruises: "Cruceros por el Nilo", hotels: "Hoteles", about: "Sobre Nosotros", contact: "Contacto", privacy: "Política de Privacidad", terms: "Términos de Servicio", faq: "FAQ" }, contact: "Contacto", rights: "© 2026 Golden Egypt Tours. Todos los derechos reservados." },
    bookNow: "Reservar Ahora",
    chatWA: "Chatear en WhatsApp",
    selectDates: "Seleccionar Fechas",
  },
  fr: {
    dir: "ltr",
    nav: { home: "Accueil", tours: "Tours", cruises: "Croisières sur le Nil", hotels: "Hôtels", about: "À Propos", contact: "Contact" },
    hero: { title: "Golden Egypt Tours", subtitle: "Découvrez l'Égypte comme jamais", tagline: "Là où naissent les légendes", search: "Rechercher", destination: "Où allez-vous ?", checkin: "Arrivée", checkout: "Départ", guests: "Voyageurs", adults: "Adultes", children: "Enfants", advanced: "Recherche Avancée" },
    trending: { title: "Destinations Tendance", viewAll: "Voir Tout" },
    hotels: { title: "Hôtels en Vedette", viewAll: "Voir Tout", perNight: "/ nuit" },
    cruises: { title: "Croisières sur le Nil", viewAll: "Voir Tout", perNight: "/ nuit" },
    ai: { title: "Créateur de Voyage IA", subtitle: "Planifiez votre voyage parfait en secondes", placeholder: "Ex: Planifiez un voyage de 5 jours à Louxor et Assouan", generate: "Générer le Voyage", thinking: "Création de votre itinéraire de rêve...", chips: ["5 jours au Caire", "Voyage en famille en Égypte", "Croisière sur le Nil", "Lune de miel en Égypte"] },
    booking: { title: "Comment ça marche", steps: ["Choisir le Tour", "Personnaliser", "Paiement", "Confirmation"], descs: ["Sélectionnez votre destination", "Dates, personnes et options", "Paiement sécurisé", "Profitez de votre voyage!"] },
    why: { title: "Pourquoi Golden Egypt Tours ?", subtitle: "Le spécialiste mondial de l'Égypte depuis 1995", cards: [{ icon: "🏆", t: "Service Primé", d: "Élu opérateur de tours n°1 en Égypte 5 années de suite" }, { icon: "🛡️", t: "Réservation 100% Sécurisée", d: "Chiffrement bancaire et garantie de remboursement total" }, { icon: "🌍", t: "Portée Mondiale", d: "Nous servons des voyageurs de 90+ pays en 9 langues" }, { icon: "🤖", t: "Planification par IA", d: "L'IA construit votre itinéraire personnalisé en secondes" }, { icon: "⭐", t: "+50 000 Avis", d: "Moyenne 4,9/5 étoiles sur toutes les plateformes" }, { icon: "🎯", t: "Tours Sur Mesure", d: "Chaque itinéraire élaboré par nos guides égyptologues experts" }] },
    testimonials: { title: "Les Voyageurs Aiment l'Égypte", subtitle: "Vraies histoires de vrais aventuriers" },
    newsletter: { title: "Obtenez des Offres Exclusives sur l'Égypte", subtitle: "Rejoignez 200 000+ voyageurs. Désinscription à tout moment.", placeholder: "Votre adresse e-mail", cta: "S'abonner" },
    footer: { company: "Golden Egypt Tours", tagline: "Découvrez l'Égypte comme jamais", links: { tours: "Tours", cruises: "Croisières", hotels: "Hôtels", about: "À Propos", contact: "Contact", privacy: "Politique de Confidentialité", terms: "Conditions d'Utilisation", faq: "FAQ" }, contact: "Contact", rights: "© 2026 Golden Egypt Tours. Tous droits réservés." },
    bookNow: "Réserver Maintenant",
    chatWA: "Discuter sur WhatsApp",
    selectDates: "Sélectionner les Dates",
  },
  it: {
    dir: "ltr",
    nav: { home: "Home", tours: "Tour", cruises: "Crociere sul Nilo", hotels: "Hotel", about: "Chi Siamo", contact: "Contatti" },
    hero: { title: "Golden Egypt Tours", subtitle: "Scopri l'Egitto come mai prima", tagline: "Dove nascono le leggende", search: "Cerca", destination: "Dove vai?", checkin: "Check-in", checkout: "Check-out", guests: "Ospiti", adults: "Adulti", children: "Bambini", advanced: "Ricerca Avanzata" },
    trending: { title: "Destinazioni di Tendenza", viewAll: "Vedi Tutto" },
    hotels: { title: "Hotel in Evidenza", viewAll: "Vedi Tutto", perNight: "/ notte" },
    cruises: { title: "Crociere sul Nilo", viewAll: "Vedi Tutto", perNight: "/ notte" },
    ai: { title: "Costruttore di Viaggi AI", subtitle: "Pianifica il tuo viaggio perfetto in secondi", placeholder: "Es: Pianifica un viaggio di 5 giorni a Luxor e Assuan", generate: "Genera Viaggio", thinking: "Creando il tuo itinerario dei sogni...", chips: ["5 giorni al Cairo", "Viaggio in famiglia in Egitto", "Crociera sul Nilo", "Luna di miele in Egitto"] },
    booking: { title: "Come Funziona", steps: ["Scegli il Tour", "Personalizza", "Pagamento", "Conferma"], descs: ["Seleziona la tua destinazione", "Date, persone e opzioni", "Pagamento sicuro", "Goditi il tuo viaggio!"] },
    why: { title: "Perché Golden Egypt Tours?", subtitle: "Lo specialista leader mondiale dell'Egitto dal 1995", cards: [{ icon: "🏆", t: "Servizio Premiato", d: "Eletto operatore n°1 di tour in Egitto per 5 anni consecutivi" }, { icon: "🛡️", t: "Prenotazione 100% Sicura", d: "Crittografia bancaria e garanzia di rimborso totale" }, { icon: "🌍", t: "Portata Globale", d: "Serviamo viaggiatori da 90+ paesi in 9 lingue" }, { icon: "🤖", t: "Pianificazione AI", d: "L'AI costruisce il tuo itinerario personalizzato in secondi" }, { icon: "⭐", t: "+50.000 Recensioni", d: "Media 4,9/5 stelle su tutte le piattaforme" }, { icon: "🎯", t: "Tour su Misura", d: "Ogni itinerario elaborato dai nostri guide esperti di egittologia" }] },
    testimonials: { title: "I Viaggiatori Amano l'Egitto", subtitle: "Storie vere da veri avventurieri" },
    newsletter: { title: "Ottieni Offerte Esclusive sull'Egitto", subtitle: "Unisciti a 200.000+ viaggiatori. Annulla quando vuoi.", placeholder: "Il tuo indirizzo email", cta: "Iscriviti" },
    footer: { company: "Golden Egypt Tours", tagline: "Scopri l'Egitto come mai prima", links: { tours: "Tour", cruises: "Crociere", hotels: "Hotel", about: "Chi Siamo", contact: "Contatti", privacy: "Privacy Policy", terms: "Termini di Servizio", faq: "FAQ" }, contact: "Contatti", rights: "© 2026 Golden Egypt Tours. Tutti i diritti riservati." },
    bookNow: "Prenota Ora",
    chatWA: "Chatta su WhatsApp",
    selectDates: "Seleziona le Date",
  },
  de: {
    dir: "ltr",
    nav: { home: "Startseite", tours: "Touren", cruises: "Nilkreuzfahrten", hotels: "Hotels", about: "Über Uns", contact: "Kontakt" },
    hero: { title: "Golden Egypt Tours", subtitle: "Entdecke Ägypten wie nie zuvor", tagline: "Wo Legenden geboren werden", search: "Suchen", destination: "Wohin reist du?", checkin: "Check-in", checkout: "Check-out", guests: "Gäste", adults: "Erwachsene", children: "Kinder", advanced: "Erweiterte Suche" },
    trending: { title: "Trendige Reiseziele", viewAll: "Alle anzeigen" },
    hotels: { title: "Ausgewählte Hotels", viewAll: "Alle anzeigen", perNight: "/ Nacht" },
    cruises: { title: "Nilkreuzfahrten", viewAll: "Alle anzeigen", perNight: "/ Nacht" },
    ai: { title: "KI-Reiseplaner", subtitle: "Plane deine perfekte Reise in Sekunden", placeholder: "z.B. Plane eine 5-tägige Reise nach Luxor und Assuan", generate: "Reise erstellen", thinking: "Dein Traumitinerar wird erstellt...", chips: ["5 Tage in Kairo", "Familienreise nach Ägypten", "Nilkreuzfahrt", "Hochzeitsreise in Ägypten"] },
    booking: { title: "So funktioniert es", steps: ["Tour wählen", "Anpassen", "Zahlung", "Bestätigung"], descs: ["Wähle dein Ziel", "Datum, Personen & Optionen", "Sichere Zahlung", "Genieße deine Reise!"] },
    why: { title: "Warum Golden Egypt Tours?", subtitle: "Der weltweit führende Ägypten-Spezialist seit 1995", cards: [{ icon: "🏆", t: "Preisgekrönter Service", d: "5 Jahre in Folge als bester Ägypten-Touroperator gewählt" }, { icon: "🛡️", t: "100% sichere Buchung", d: "Bankverschlüsselung und vollständige Geld-zurück-Garantie" }, { icon: "🌍", t: "Globale Reichweite", d: "Wir betreuen Reisende aus 90+ Ländern in 9 Sprachen" }, { icon: "🤖", t: "KI-gestützte Planung", d: "KI erstellt dein personalisiertes Ägypten-Itinerar in Sekunden" }, { icon: "⭐", t: "+50.000 Bewertungen", d: "Durchschnittlich 4,9/5 Sterne auf allen Plattformen" }, { icon: "🎯", t: "Maßgeschneiderte Touren", d: "Jedes Itinerar von unseren Ägyptologen-Experten erstellt" }] },
    testimonials: { title: "Reisende lieben Ägypten", subtitle: "Echte Geschichten echter Abenteurer" },
    newsletter: { title: "Exklusive Ägypten-Angebote erhalten", subtitle: "Schließe dich 200.000+ Reisenden an. Jederzeit kündbar.", placeholder: "Deine E-Mail-Adresse", cta: "Abonnieren" },
    footer: { company: "Golden Egypt Tours", tagline: "Entdecke Ägypten wie nie zuvor", links: { tours: "Touren", cruises: "Nilkreuzfahrten", hotels: "Hotels", about: "Über Uns", contact: "Kontakt", privacy: "Datenschutz", terms: "Nutzungsbedingungen", faq: "FAQ" }, contact: "Kontakt", rights: "© 2026 Golden Egypt Tours. Alle Rechte vorbehalten." },
    bookNow: "Jetzt Buchen",
    chatWA: "WhatsApp-Chat",
    selectDates: "Reisedaten wählen",
  },
  pt: {
    dir: "ltr",
    nav: { home: "Início", tours: "Tours", cruises: "Cruzeiros no Nilo", hotels: "Hotéis", about: "Sobre Nós", contact: "Contato" },
    hero: { title: "Golden Egypt Tours", subtitle: "Descubra o Egito como nunca antes", tagline: "Onde as Lendas Nascem", search: "Buscar", destination: "Para onde você vai?", checkin: "Check-in", checkout: "Check-out", guests: "Hóspedes", adults: "Adultos", children: "Crianças", advanced: "Pesquisa Avançada" },
    trending: { title: "Destinos em Alta", viewAll: "Ver Tudo" },
    hotels: { title: "Hotéis em Destaque", viewAll: "Ver Tudo", perNight: "/ noite" },
    cruises: { title: "Cruzeiros no Nilo", viewAll: "Ver Tudo", perNight: "/ noite" },
    ai: { title: "Construtor de Viagens com IA", subtitle: "Planeje sua viagem perfeita em segundos", placeholder: "Ex: Planeje uma viagem de 5 dias a Luxor e Assuão", generate: "Gerar Viagem", thinking: "Criando seu roteiro dos sonhos...", chips: ["5 dias no Cairo", "Viagem em família ao Egito", "Cruzeiro no Nilo", "Lua de mel no Egito"] },
    booking: { title: "Como Funciona", steps: ["Escolher Tour", "Personalizar", "Pagamento", "Confirmação"], descs: ["Selecione seu destino", "Datas, pessoas e opções", "Pagamento seguro", "Curta sua viagem!"] },
    why: { title: "Por que Golden Egypt Tours?", subtitle: "O especialista líder mundial em Egito desde 1995", cards: [{ icon: "🏆", t: "Serviço Premiado", d: "Eleito operador nº1 de tours no Egito por 5 anos consecutivos" }, { icon: "🛡️", t: "Reserva 100% Segura", d: "Criptografia bancária e garantia de reembolso total" }, { icon: "🌍", t: "Alcance Global", d: "Atendemos viajantes de 90+ países em 9 idiomas" }, { icon: "🤖", t: "Planejamento com IA", d: "IA proprietária cria seu roteiro personalizado em segundos" }, { icon: "⭐", t: "+50.000 Avaliações", d: "Média de 4,9/5 estrelas em todas as plataformas" }, { icon: "🎯", t: "Tours Personalizados", d: "Cada itinerário elaborado por nossos guias especialistas em Egiptologia" }] },
    testimonials: { title: "Viajantes Amam o Egito", subtitle: "Histórias reais de aventureiros reais" },
    newsletter: { title: "Receba Ofertas Exclusivas do Egito", subtitle: "Junte-se a 200.000+ viajantes. Cancele quando quiser.", placeholder: "Seu endereço de e-mail", cta: "Inscrever-se" },
    footer: { company: "Golden Egypt Tours", tagline: "Descubra o Egito como nunca antes", links: { tours: "Tours", cruises: "Cruzeiros", hotels: "Hotéis", about: "Sobre Nós", contact: "Contato", privacy: "Política de Privacidade", terms: "Termos de Serviço", faq: "FAQ" }, contact: "Contato", rights: "© 2026 Golden Egypt Tours. Todos os direitos reservados." },
    bookNow: "Reservar Agora",
    chatWA: "Conversar no WhatsApp",
    selectDates: "Selecionar Datas",
  },
  ru: {
    dir: "ltr",
    nav: { home: "Главная", tours: "Туры", cruises: "Круизы по Нилу", hotels: "Отели", about: "О Нас", contact: "Контакты" },
    hero: { title: "Golden Egypt Tours", subtitle: "Откройте Египет как никогда прежде", tagline: "Там, где рождаются легенды", search: "Поиск", destination: "Куда вы едете?", checkin: "Заезд", checkout: "Выезд", guests: "Гости", adults: "Взрослые", children: "Дети", advanced: "Расширенный поиск" },
    trending: { title: "Популярные направления", viewAll: "Смотреть все" },
    hotels: { title: "Рекомендуемые отели", viewAll: "Смотреть все", perNight: "/ ночь" },
    cruises: { title: "Круизы по Нилу", viewAll: "Смотреть все", perNight: "/ ночь" },
    ai: { title: "ИИ-конструктор путешествий", subtitle: "Спланируйте идеальное путешествие за секунды", placeholder: "Напр: Спланируйте 5-дневную поездку в Луксор и Асуан", generate: "Создать маршрут", thinking: "Создаём маршрут вашей мечты...", chips: ["5 дней в Каире", "Семейная поездка в Египет", "Круиз по Нилу", "Медовый месяц в Египте"] },
    booking: { title: "Как это работает", steps: ["Выбрать тур", "Настроить", "Оплата", "Подтверждение"], descs: ["Выберите направление", "Даты, люди и опции", "Безопасная оплата", "Наслаждайтесь поездкой!"] },
    why: { title: "Почему Golden Egypt Tours?", subtitle: "Ведущий мировой специалист по Египту с 1995 года", cards: [{ icon: "🏆", t: "Отмеченный наградами сервис", d: "Признан лучшим туроператором по Египту 5 лет подряд" }, { icon: "🛡️", t: "100% безопасное бронирование", d: "Банковское шифрование и полная гарантия возврата средств" }, { icon: "🌍", t: "Глобальный охват", d: "Обслуживаем путешественников из 90+ стран на 9 языках" }, { icon: "🤖", t: "Планирование с ИИ", d: "ИИ строит персонализированный маршрут по Египту за секунды" }, { icon: "⭐", t: "+50 000 отзывов", d: "Средний рейтинг 4,9/5 на всех платформах" }, { icon: "🎯", t: "Туры на заказ", d: "Каждый маршрут разработан нашими экспертами-египтологами" }] },
    testimonials: { title: "Путешественники любят Египет", subtitle: "Настоящие истории настоящих искателей приключений" },
    newsletter: { title: "Получите эксклюзивные предложения по Египту", subtitle: "Присоединитесь к 200 000+ путешественников. Отписаться можно в любое время.", placeholder: "Ваш адрес электронной почты", cta: "Подписаться" },
    footer: { company: "Golden Egypt Tours", tagline: "Откройте Египет как никогда прежде", links: { tours: "Туры", cruises: "Круизы по Нилу", hotels: "Отели", about: "О Нас", contact: "Контакты", privacy: "Политика конфиденциальности", terms: "Условия использования", faq: "FAQ" }, contact: "Контакты", rights: "© 2026 Golden Egypt Tours. Все права защищены." },
    bookNow: "Забронировать",
    chatWA: "Чат в WhatsApp",
    selectDates: "Выбрать даты",
  },
  pl: {
    dir: "ltr",
    nav: { home: "Strona Główna", tours: "Wycieczki", cruises: "Rejsy po Nilu", hotels: "Hotele", about: "O Nas", contact: "Kontakt" },
    hero: { title: "Golden Egypt Tours", subtitle: "Odkryj Egipt jak nigdy dotąd", tagline: "Gdzie rodzą się legendy", search: "Szukaj", destination: "Dokąd jedziesz?", checkin: "Przyjazd", checkout: "Wyjazd", guests: "Goście", adults: "Dorośli", children: "Dzieci", advanced: "Wyszukiwanie zaawansowane" },
    trending: { title: "Popularne Destynacje", viewAll: "Zobacz Wszystko" },
    hotels: { title: "Polecane Hotele", viewAll: "Zobacz Wszystko", perNight: "/ noc" },
    cruises: { title: "Rejsy po Nilu", viewAll: "Zobacz Wszystko", perNight: "/ noc" },
    ai: { title: "Kreator Podróży AI", subtitle: "Zaplanuj idealną podróż w kilka sekund", placeholder: "Np: Zaplanuj 5-dniową podróż do Luksoru i Asuanu", generate: "Utwórz Trasę", thinking: "Tworzenie trasy marzeń...", chips: ["5 dni w Kairze", "Wycieczka rodzinna do Egiptu", "Rejs po Nilu", "Miesiąc miodowy w Egipcie"] },
    booking: { title: "Jak to działa", steps: ["Wybierz wycieczkę", "Dostosuj", "Płatność", "Potwierdzenie"], descs: ["Wybierz swój cel podróży", "Daty, osoby i opcje", "Bezpieczna płatność", "Ciesz się podróżą!"] },
    why: { title: "Dlaczego Golden Egypt Tours?", subtitle: "Wiodący światowy specjalista ds. Egiptu od 1995 roku", cards: [{ icon: "🏆", t: "Nagradzana obsługa", d: "Wybrany operatorem nr 1 wycieczek do Egiptu przez 5 kolejnych lat" }, { icon: "🛡️", t: "100% bezpieczna rezerwacja", d: "Szyfrowanie bankowe i pełna gwarancja zwrotu pieniędzy" }, { icon: "🌍", t: "Globalny zasięg", d: "Obsługujemy podróżników z 90+ krajów w 9 językach" }, { icon: "🤖", t: "Planowanie z AI", d: "AI tworzy spersonalizowany itinerar po Egipcie w sekundy" }, { icon: "⭐", t: "+50 000 opinii", d: "Średnia 4,9/5 gwiazdek na wszystkich platformach" }, { icon: "🎯", t: "Wycieczki szyte na miarę", d: "Każdy itinerar opracowany przez naszych ekspertów egiptozjologów" }] },
    testimonials: { title: "Podróżnicy kochają Egipt", subtitle: "Prawdziwe historie prawdziwych podróżników" },
    newsletter: { title: "Otrzymaj ekskluzywne oferty z Egiptu", subtitle: "Dołącz do 200 000+ podróżników. Wypisz się w dowolnym momencie.", placeholder: "Twój adres e-mail", cta: "Subskrybuj" },
    footer: { company: "Golden Egypt Tours", tagline: "Odkryj Egipt jak nigdy dotąd", links: { tours: "Wycieczki", cruises: "Rejsy po Nilu", hotels: "Hotele", about: "O Nas", contact: "Kontakt", privacy: "Polityka Prywatności", terms: "Warunki Usługi", faq: "FAQ" }, contact: "Kontakt", rights: "© 2026 Golden Egypt Tours. Wszelkie prawa zastrzeżone." },
    bookNow: "Zarezerwuj Teraz",
    chatWA: "Czat na WhatsApp",
    selectDates: "Wybierz Daty",
  },
};
// ─── CURRENCY CONFIG ─────────────────────────────────────────────────────────
const CURRENCIES = {
  USD: { symbol: "$", rate: 1, label: "USD ($)" },
  EUR: { symbol: "€", rate: 0.92, label: "EUR (€)" },
  GBP: { symbol: "£", rate: 0.79, label: "GBP (£)" },
  EGP: { symbol: "ج.م", rate: 48.5, label: "EGP (ج.م)" },
  PLN: { symbol: "zł", rate: 4.02, label: "PLN (zł)" },
  RUB: { symbol: "₽", rate: 90.5, label: "RUB (₽)" },
  MXN: { symbol: "MX$", rate: 17.1, label: "MXN (MX$)" },
  BRL: { symbol: "R$", rate: 4.97, label: "BRL (R$)" },
};

const LANG_LABELS = {
  en: "English", ar: "العربية", es: "Español", fr: "Français",
  it: "Italiano", de: "Deutsch", pt: "Português", ru: "Русский", pl: "Polski",
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const DESTINATIONS = [
  {
    name: "Cairo",
    img: "/images/home/cairo.jpeg",
    link: "/city/cairo",
    tours: 120,
    rating: 4.8,
    tag: "Top Destination",
    description: "Pyramids, Nile Cruises & Ancient Egypt"
  },
  {
    name: "Giza",
    img: "/images/home/giza.jpeg",
    link: "/city/giza",
    tours: 95,
    rating: 4.7,
    tag: "Must See",
    description: "Great Pyramids & Sphinx"
  },
  {
    name: "Luxor",
    img: "/images/home/luxor.jpeg",
    link: "/city/luxor",
    tours: 80,
    rating: 4.9,
    tag: "Historical Gem",
    description: "Valley of Kings & Temples"
  },
  {
    name: "Aswan",
    img: "/images/home/aswan.jpeg",
    link: "/city/aswan",
    tours: 60,
    rating: 4.8,
    tag: "Relax",
    description: "Nile Beauty & Nubian Culture"
  },
  {
    name: "Hurghada",
    img: "/images/home/hurghada.jpeg",
    link: "/city/hurghada",
    tours: 110,
    rating: 4.6,
    tag: "Beach",
    description: "Red Sea & Diving Paradise"
  },
  {
    name: "Siwa",
    img: "/images/home/siwa.jpeg",
    link: "/city/siwa",
    tours: 35,
    rating: 4.7,
    tag: "Adventure",
    description: "Oasis & Desert Experience"
  },
  {
    name: "Alexandria",
    img: "/images/home/alex.jpeg",
    link: "/city/alexandria",
    tours: 70,
    rating: 4.6,
    tag: "Coastal",
    description: "Mediterranean vibes & History"
  },
  {
    name: "Sharm El Sheikh",
    img: "/images/home/sharm.jpeg",
    link: "/city/sharm",
    tours: 130,
    rating: 4.9,
    tag: "Luxury",
    description: "Resorts & Coral Reefs"
  },
  {
    name: "Fayoum",
    img: "/images/home/fayoum.jpeg",
    link: "/city/fayoum",
    tours: 50,
    rating: 4.5,
    tag: "Nature",
    description: "Lakes & Waterfalls"
  },
  {
    name: "Ain Sokhna",
    img: "/images/home/sokhna.jpeg",
    link: "/city/sokhna",
    tours: 40,
    rating: 4.4,
    tag: "Quick Escape",
    description: "Near Cairo Beaches"
  }
];

const HOTELS = [
  { name: "Hilton Cairo Nile", stars: 4, price: 120, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&q=80" },
  { name: "Steigenberger Luxor", stars: 5, price: 95, img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300&q=80" },
  { name: "Marriott Mena House", stars: 5, price: 150, img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&q=80" },
  { name: "Rixos Sharm Premium", stars: 5, price: 180, img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=300&q=80" },
];

const CRUISES = [
  { name: "Luxury Nile Cruise", stars: 5, price: 200, img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=80" },
  { name: "Mövenpick Royal Lily", stars: 4, price: 250, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80" },
  { name: "Steigenberger Minerva", stars: 5, price: 220, img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&q=80" },
  { name: "Sonesta Star Goddess", stars: 5, price: 270, img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=300&q=80" },
];

const TESTIMONIALS = [
  { name: "Sarah M.", country: "🇺🇸 USA", text: "Absolutely breathtaking! The AI planner built a perfect 10-day itinerary and everything ran flawlessly. The guides were incredibly knowledgeable.", rating: 5, img: "https://i.pravatar.cc/80?img=1" },
  { name: "Carlos R.", country: "🇪🇸 Spain", text: "Mejor experiencia de viaje de mi vida. El crucero por el Nilo fue mágico y la atención al cliente fue impecable en todo momento.", rating: 5, img: "https://i.pravatar.cc/80?img=3" },
  { name: "Marie D.", country: "🇫🇷 France", text: "Service exceptionnel du début à la fin. L'application multilingue m'a vraiment aidée à planifier sans stress. Je recommande vivement!", rating: 5, img: "https://i.pravatar.cc/80?img=5" },
  { name: "Olga V.", country: "🇷🇺 Russia", text: "Незабываемое путешествие! Всё было организовано идеально. Особенно понравился умный планировщик маршрутов.", rating: 5, img: "https://i.pravatar.cc/80?img=9" },
  { name: "Marco B.", country: "🇮🇹 Italy", text: "Viaggio straordinario! Il costruttore AI ha creato un itinerario personalizzato perfetto. I templi di Luxor mi hanno lasciato senza parole.", rating: 5, img: "https://i.pravatar.cc/80?img=7" },
  { name: "Piotr K.", country: "🇵🇱 Poland", text: "Niesamowita wycieczka! Wszystko zorganizowane perfekcyjnie. Rejs po Nilu był absolutnie magiczny. Gorąco polecam!", rating: 5, img: "https://i.pravatar.cc/80?img=11" },
];
// ─── HELPERS ─────────────────────────────────────────────────────────────────
const formatPrice = (usdPrice, currency) => {
  const { symbol, rate } = CURRENCIES[currency];
  const val = Math.round(usdPrice * rate);
  return `${symbol}${val.toLocaleString()}`;
};

const Stars = ({ count, max = 5 }) => (
  <span style={{ color: "#D4A847", fontSize: "0.75rem", letterSpacing: "1px" }}>
    {"★".repeat(count)}{"☆".repeat(max - count)}
  </span>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Home() {
  const [lang, setLang] = useState("en");
  const [currency, setCurrency] = useState("USD");
  const [langOpen, setLangOpen] = useState(false);
  const [currOpen, setCurrOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [guestOpen, setGuestOpen] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [aiResult, setAiResult] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [emailVal, setEmailVal] = useState("");
  const [subDone, setSubDone] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const heroRef = useRef(null);
const navigate = useNavigate();
  const t = TRANSLATIONS[lang];
  const isRTL = t.dir === "rtl";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Booking step auto-advance demo
  useEffect(() => {
    const id = setInterval(() => setActiveStep(s => (s + 1) % 4), 2000);
    return () => clearInterval(id);
  }, []);

  const handleAI = async () => {
    if (!aiInput.trim()) return;
    setAiLoading(true);
    setAiResult("");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `You are an expert Egypt travel planner for Golden Egypt Tours, a luxury travel company. 
Create a detailed, exciting travel itinerary based on the user's request. 
Include: day-by-day schedule, top attractions, hotel recommendations, dining tips, and practical advice.
Keep it concise but enticing (max 400 words). Use emojis for visual appeal. 
Respond in the same language as the user's message.`,
          messages: [{ role: "user", content: aiInput }],
        }),
      });
      const data = await res.json();
      const text = data.content?.map(i => i.text || "").join("\n") || "No result";
      setAiResult(text);
    } catch (e) {
      setAiResult("⚠️ Connection error. Please try again.");
    }
    setAiLoading(false);
  };
  // ── STYLES ──
  const S = {
    root: {
      fontFamily: "'Cormorant Garamond', 'Noto Sans Arabic', Georgia, serif",
      background: "#0A0704",
      color: "#F5E6C8",
      minHeight: "100vh",
      direction: t.dir,
      position: "relative",
      overflowX: "hidden",
    },
    // Hieroglyphic watermark overlay
    pharaohBg: {
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(180,130,20,0.04) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 20%, rgba(180,130,20,0.03) 0%, transparent 50%)`,
      pointerEvents: "none", zIndex: 0,
    },
    // NAVBAR
    nav: {
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(10,7,4,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(212,168,71,0.15)" : "none",
      transition: "all 0.4s ease",
      padding: "0 clamp(1rem,4vw,3rem)",
      height: "70px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    },
    logo: {
      display: "flex", alignItems: "center", gap: "10px",
      textDecoration: "none",
    },
    logoSymbol: {
      width: "42px", height: "42px",
      background: "linear-gradient(135deg, #D4A847, #8B6914)",
      borderRadius: "50%",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: "1.3rem",
      boxShadow: "0 0 20px rgba(212,168,71,0.4)",
    },
    logoText: {
      display: "flex", flexDirection: "column", lineHeight: 1.1,
    },
    logoMain: {
      fontSize: "1.1rem", fontWeight: 700, color: "#D4A847",
      letterSpacing: "2px", textTransform: "uppercase",
    },
    logoSub: {
      fontSize: "0.6rem", color: "#9A7B3C", letterSpacing: "3px",
      textTransform: "uppercase",
    },
    navLinks: {
      display: "flex", gap: "clamp(0.8rem,2vw,1.8rem)",
      listStyle: "none", margin: 0, padding: 0,
    },
    navLink: {
      color: "#C8B89A", fontSize: "0.85rem", letterSpacing: "1.5px",
      textTransform: "uppercase", textDecoration: "none", cursor: "pointer",
      transition: "color 0.2s",
      fontFamily: "'Josefin Sans', sans-serif",
    },
    navRight: {
      display: "flex", alignItems: "center", gap: "10px",
    },
    dropdown: {
      position: "relative",
    },
    dropBtn: {
      background: "rgba(212,168,71,0.1)",
      border: "1px solid rgba(212,168,71,0.3)",
      color: "#D4A847", padding: "6px 12px",
      borderRadius: "6px", cursor: "pointer",
      fontSize: "0.78rem", letterSpacing: "1px",
      display: "flex", alignItems: "center", gap: "6px",
      fontFamily: "'Josefin Sans', sans-serif",
    },
    dropMenu: {
      position: "absolute", top: "calc(100% + 8px)",
      [isRTL ? "left" : "right"]: 0,
      background: "#1A1208",
      border: "1px solid rgba(212,168,71,0.2)",
      borderRadius: "8px", overflow: "hidden",
      minWidth: "140px", zIndex: 2000,
      boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
    },
    dropItem: {
      padding: "10px 16px", cursor: "pointer",
      fontSize: "0.82rem", color: "#C8B89A",
      transition: "background 0.15s",
      fontFamily: "'Josefin Sans', sans-serif",
    },
    bookNowBtn: {
      background: "linear-gradient(135deg, #D4A847, #8B6914)",
      color: "#0A0704", border: "none",
      padding: "8px 20px", borderRadius: "8px",
      cursor: "pointer", fontWeight: 700,
      fontSize: "0.82rem", letterSpacing: "1.5px",
      textTransform: "uppercase",
      boxShadow: "0 4px 15px rgba(212,168,71,0.3)",
      transition: "transform 0.2s, box-shadow 0.2s",
      fontFamily: "'Josefin Sans', sans-serif",
    },
    // ── HERO ──
    hero: {
      position: "relative",
      height: "100vh", minHeight: "700px",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      overflow: "hidden",
    },
    heroBg: {
      position: "absolute", inset: 0,
      backgroundImage: "url('https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1800&q=85')",
      backgroundSize: "cover", backgroundPosition: "center 40%",
      filter: "brightness(0.35) saturate(0.8)",
    },
    heroOverlay: {
      position: "absolute", inset: 0,
      background: "linear-gradient(to bottom, rgba(10,7,4,0.2) 0%, rgba(10,7,4,0.05) 40%, rgba(10,7,4,0.7) 75%, rgba(10,7,4,1) 100%)",
    },
    heroGoldBeam: {
      position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
      width: "3px", height: "40%",
      background: "linear-gradient(to bottom, transparent, rgba(212,168,71,0.6), transparent)",
      pointerEvents: "none",
    },
    // Ankh ornament
    ankh: {
      position: "absolute", top: "15%",
      fontSize: "clamp(3rem,8vw,6rem)",
      opacity: 0.08, pointerEvents: "none",
      animation: "float 6s ease-in-out infinite",
    },
    heroContent: {
      position: "relative", zIndex: 10,
      textAlign: "center",
      padding: "0 1rem",
      marginBottom: "2rem",
    },
    heroEyeOfRa: {
      fontSize: "2.5rem", marginBottom: "0.5rem",
      filter: "drop-shadow(0 0 20px rgba(212,168,71,0.8))",
      animation: "pulse 3s ease-in-out infinite",
    },
    heroTagline: {
      fontSize: "clamp(0.7rem,1.5vw,0.9rem)",
      letterSpacing: "clamp(4px,1vw,8px)",
      color: "#D4A847", textTransform: "uppercase",
      fontFamily: "'Josefin Sans', sans-serif",
      marginBottom: "1rem",
    },
    heroTitle: {
      fontSize: "clamp(2.5rem,7vw,5.5rem)",
      fontWeight: 700, lineHeight: 1.05,
      color: "#F5E6C8",
      textShadow: "0 0 60px rgba(212,168,71,0.3)",
      marginBottom: "0.5rem",
      letterSpacing: isRTL ? "0" : "1px",
    },
    heroSubtitle: {
      fontSize: "clamp(1rem,2.5vw,1.4rem)",
      color: "#D4A847", fontStyle: "italic",
      marginBottom: "0.5rem",
    },
    heroOrnaLine: {
      display: "flex", alignItems: "center", justifyContent: "center",
      gap: "12px", margin: "1rem auto",
      color: "#D4A847", opacity: 0.7,
    },
    ornaLine: { height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #D4A847)" },

    // ── SEARCH BOX ──
    searchBox: {
      position: "relative", zIndex: 10,
      background: "rgba(10,7,4,0.85)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(212,168,71,0.25)",
      borderRadius: "16px",
      padding: "clamp(1rem,3vw,1.5rem)",
      width: "min(900px, 94vw)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,168,71,0.1)",
    },
    searchHeader: {
      display: "flex", justifyContent: "space-between", alignItems: "center",
      marginBottom: "1rem",
    },
    searchTitle: {
      color: "#D4A847", fontSize: "0.85rem", letterSpacing: "2px",
      textTransform: "uppercase", fontFamily: "'Josefin Sans', sans-serif",
      display: "flex", alignItems: "center", gap: "8px",
    },
    searchGrid: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1.2fr auto",
      gap: "8px", alignItems: "end",
    },
    searchField: {
      display: "flex", flexDirection: "column", gap: "4px",
    },
    searchLabel: {
      fontSize: "0.65rem", color: "#9A7B3C", letterSpacing: "1.5px",
      textTransform: "uppercase", fontFamily: "'Josefin Sans', sans-serif",
    },
    searchInput: {
      background: "rgba(212,168,71,0.06)",
      border: "1px solid rgba(212,168,71,0.2)",
      borderRadius: "8px", padding: "10px 14px",
      color: "#F5E6C8", fontSize: "0.9rem",
      outline: "none", width: "100%",
      fontFamily: "'Cormorant Garamond', Georgia, serif",
    },
    guestSelector: {
      background: "rgba(212,168,71,0.06)",
      border: "1px solid rgba(212,168,71,0.2)",
      borderRadius: "8px", padding: "10px 14px",
      cursor: "pointer", position: "relative",
      color: "#F5E6C8", fontSize: "0.9rem",
      fontFamily: "'Cormorant Garamond', Georgia, serif",
    },
    guestPopup: {
      position: "absolute", bottom: "calc(100% + 8px)",
      [isRTL ? "right" : "left"]: 0,
      background: "#1A1208",
      border: "1px solid rgba(212,168,71,0.2)",
      borderRadius: "10px", padding: "1rem",
      minWidth: "220px", zIndex: 100,
      boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
    },
    guestRow: {
      display: "flex", justifyContent: "space-between", alignItems: "center",
      marginBottom: "10px",
    },
    counterBtn: {
      width: "28px", height: "28px", borderRadius: "50%",
      background: "rgba(212,168,71,0.15)",
      border: "1px solid rgba(212,168,71,0.3)",
      color: "#D4A847", cursor: "pointer", fontSize: "1rem",
      display: "flex", alignItems: "center", justifyContent: "center",
    },
    searchBtn: {
      background: "linear-gradient(135deg, #D4A847, #8B6914)",
      color: "#0A0704", border: "none",
      borderRadius: "10px", padding: "12px 28px",
      cursor: "pointer", fontWeight: 700,
      fontSize: "0.9rem", letterSpacing: "2px",
      textTransform: "uppercase",
      display: "flex", alignItems: "center", gap: "8px",
      boxShadow: "0 4px 20px rgba(212,168,71,0.35)",
      transition: "transform 0.15s",
      fontFamily: "'Josefin Sans', sans-serif",
      whiteSpace: "nowrap",
    },
    // ── SECTIONS ──
    section: {
      padding: "clamp(3rem,8vw,6rem) clamp(1rem,5vw,4rem)",
      position: "relative", zIndex: 1,
    },
    sectionHeader: {
      display: "flex", justifyContent: "space-between", alignItems: "flex-end",
      marginBottom: "2rem",
    },
    sectionTitleWrap: { display: "flex", flexDirection: "column", gap: "4px" },
    sectionEyebrow: {
      fontSize: "0.65rem", color: "#D4A847", letterSpacing: "4px",
      textTransform: "uppercase", fontFamily: "'Josefin Sans', sans-serif",
    },
    sectionTitle: {
      fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 700, color: "#F5E6C8",
    },
    viewAll: {
      fontSize: "0.78rem", color: "#D4A847", letterSpacing: "2px",
      textTransform: "uppercase", cursor: "pointer",
      fontFamily: "'Josefin Sans', sans-serif",
      background: "none", border: "none",
      display: "flex", alignItems: "center", gap: "6px",
    },
    divider: {
      height: "1px",
      background: "linear-gradient(to right, transparent, rgba(212,168,71,0.3), transparent)",
      margin: "0 clamp(1rem,5vw,4rem)",
    },

    // ── DESTINATIONS ──
    destGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "10px",
    },
    destCard: {
      position: "relative", borderRadius: "12px", overflow: "hidden",
      aspectRatio: "3/4", cursor: "pointer",
      border: "1px solid rgba(212,168,71,0.15)",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    destImg: { width: "100%", height: "100%", objectFit: "cover" },
    destOverlay: {
      position: "absolute", inset: 0,
      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
    },
    destLabel: {
      position: "absolute", bottom: "10px", left: 0, right: 0,
      textAlign: "center", fontSize: "0.85rem", fontWeight: 600,
      color: "#F5E6C8",
    },
    destTag: {
      position: "absolute", top: "8px", left: "8px",
      background: "rgba(212,168,71,0.2)",
      border: "1px solid rgba(212,168,71,0.4)",
      color: "#D4A847", fontSize: "0.6rem", padding: "2px 8px",
      borderRadius: "20px", letterSpacing: "1px",
      fontFamily: "'Josefin Sans', sans-serif",
    },

    // ── CARDS GRID ──
    cardsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "16px",
    },
    card: {
      background: "rgba(26,18,8,0.8)",
      border: "1px solid rgba(212,168,71,0.15)",
      borderRadius: "14px", overflow: "hidden",
      cursor: "pointer",
      transition: "transform 0.3s, border-color 0.3s",
    },
    cardImg: { width: "100%", height: "160px", objectFit: "cover" },
    cardBody: { padding: "14px" },
    cardName: { fontSize: "0.95rem", fontWeight: 600, color: "#F5E6C8", marginBottom: "4px" },
    cardPrice: { fontSize: "1.1rem", fontWeight: 700, color: "#D4A847" },

    // ── AI BUILDER ──
    aiSection: {
      background: "linear-gradient(135deg, rgba(26,18,8,0.9), rgba(10,7,4,0.9))",
      border: "1px solid rgba(212,168,71,0.2)",
      borderRadius: "20px", padding: "clamp(1.5rem,4vw,3rem)",
      position: "relative", overflow: "hidden",
    },
    aiDecor: {
      position: "absolute", top: "-30px", right: "-30px",
      width: "150px", height: "150px",
      background: "radial-gradient(circle, rgba(212,168,71,0.15), transparent)",
      borderRadius: "50%", pointerEvents: "none",
    },
    aiTitle: {
      fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 700,
      color: "#D4A847", marginBottom: "6px",
      display: "flex", alignItems: "center", gap: "10px",
    },
    aiSubtitle: { color: "#9A7B3C", fontSize: "0.9rem", marginBottom: "1.5rem" },
    aiInputWrap: {
      display: "flex", gap: "10px", marginBottom: "1rem",
    },
    aiInput: {
      flex: 1,
      background: "rgba(212,168,71,0.06)",
      border: "1px solid rgba(212,168,71,0.25)",
      borderRadius: "10px", padding: "14px 18px",
      color: "#F5E6C8", fontSize: "0.95rem",
      outline: "none",
      fontFamily: "'Cormorant Garamond', Georgia, serif",
    },
    aiBtn: {
      background: "linear-gradient(135deg, #D4A847, #8B6914)",
      color: "#0A0704", border: "none",
      borderRadius: "10px", padding: "14px 24px",
      cursor: "pointer", fontWeight: 700,
      fontSize: "0.85rem", letterSpacing: "1.5px",
      textTransform: "uppercase", whiteSpace: "nowrap",
      transition: "opacity 0.2s",
      fontFamily: "'Josefin Sans', sans-serif",
    },
    aiChips: {
      display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "1rem",
    },
    aiChip: {
      background: "rgba(212,168,71,0.08)",
      border: "1px solid rgba(212,168,71,0.2)",
      borderRadius: "20px", padding: "6px 14px",
      color: "#C8B89A", fontSize: "0.8rem",
      cursor: "pointer", transition: "all 0.2s",
      fontFamily: "'Josefin Sans', sans-serif",
    },
    aiResult: {
      background: "rgba(212,168,71,0.05)",
      border: "1px solid rgba(212,168,71,0.2)",
      borderRadius: "12px", padding: "1.5rem",
      color: "#F5E6C8", fontSize: "0.92rem", lineHeight: 1.7,
      whiteSpace: "pre-wrap",
      marginTop: "1rem",
      maxHeight: "350px", overflowY: "auto",
    },
    aiLoading: {
      display: "flex", alignItems: "center", gap: "12px",
      color: "#D4A847", padding: "1rem",
    },
    spinner: {
      width: "24px", height: "24px",
      border: "2px solid rgba(212,168,71,0.2)",
      borderTop: "2px solid #D4A847",
      borderRadius: "50%",
      animation: "spin 0.8s linear infinite",
    },
    // ── HOW IT WORKS ──
    stepsWrap: {
      display: "flex", gap: "0", alignItems: "stretch",
      background: "rgba(26,18,8,0.6)",
      border: "1px solid rgba(212,168,71,0.15)",
      borderRadius: "16px", overflow: "hidden",
    },
    step: {
      flex: 1, padding: "2rem 1.5rem",
      textAlign: "center", position: "relative",
      transition: "background 0.3s",
      borderRight: "1px solid rgba(212,168,71,0.1)",
    },
    stepActive: {
      background: "rgba(212,168,71,0.08)",
    },
    stepNum: {
      width: "48px", height: "48px", borderRadius: "50%",
      display: "flex", alignItems: "center", justifyContent: "center",
      margin: "0 auto 1rem",
      fontSize: "1.1rem", fontWeight: 700,
      transition: "all 0.3s",
    },
    stepNumActive: {
      background: "linear-gradient(135deg, #D4A847, #8B6914)",
      color: "#0A0704",
      boxShadow: "0 0 20px rgba(212,168,71,0.4)",
    },
    stepNumInactive: {
      background: "rgba(212,168,71,0.1)",
      border: "1px solid rgba(212,168,71,0.2)",
      color: "#9A7B3C",
    },

    // ── WHY US ──
    whyGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "16px",
    },
    whyCard: {
      background: "rgba(26,18,8,0.7)",
      border: "1px solid rgba(212,168,71,0.15)",
      borderRadius: "14px", padding: "1.8rem",
      transition: "border-color 0.3s, transform 0.3s",
    },
    whyIcon: { fontSize: "2rem", marginBottom: "1rem" },
    whyTitle: { fontSize: "1rem", fontWeight: 700, color: "#F5E6C8", marginBottom: "6px" },
    whyDesc: { fontSize: "0.85rem", color: "#9A7B3C", lineHeight: 1.6 },

    // ── TESTIMONIALS ──
    testimonialsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "16px",
    },
    testCard: {
      background: "rgba(26,18,8,0.7)",
      border: "1px solid rgba(212,168,71,0.12)",
      borderRadius: "14px", padding: "1.5rem",
      position: "relative",
    },
    testQuote: {
      position: "absolute", top: "-10px", [isRTL ? "left" : "right"]: "20px",
      fontSize: "4rem", color: "rgba(212,168,71,0.2)",
      fontFamily: "Georgia, serif", lineHeight: 1,
    },
    testText: { fontSize: "0.88rem", color: "#C8B89A", lineHeight: 1.7, marginBottom: "1rem", fontStyle: "italic" },
    testAuthor: { display: "flex", alignItems: "center", gap: "10px" },
    testAvatar: { width: "40px", height: "40px", borderRadius: "50%", border: "2px solid rgba(212,168,71,0.3)" },
    testName: { fontSize: "0.85rem", fontWeight: 600, color: "#F5E6C8" },
    testCountry: { fontSize: "0.75rem", color: "#9A7B3C" },

    // ── NEWSLETTER ──
    newsletterSection: {
      background: "linear-gradient(135deg, rgba(212,168,71,0.08), rgba(139,105,20,0.05))",
      border: "1px solid rgba(212,168,71,0.2)",
      borderRadius: "20px",
      padding: "clamp(2rem,5vw,4rem)",
      textAlign: "center",
      margin: "0 clamp(1rem,5vw,4rem) 4rem",
      position: "relative", overflow: "hidden",
    },
    nlBg: {
      position: "absolute", inset: 0,
      backgroundImage: "url('https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&q=50')",
      backgroundSize: "cover", backgroundPosition: "center",
      opacity: 0.05, pointerEvents: "none",
    },
    nlTitle: {
      fontSize: "clamp(1.5rem,3vw,2.5rem)", fontWeight: 700,
      color: "#D4A847", marginBottom: "6px",
    },
    nlSubtitle: { color: "#9A7B3C", marginBottom: "1.5rem", fontSize: "0.9rem" },
    nlForm: {
      display: "flex", gap: "10px", maxWidth: "480px",
      margin: "0 auto",
    },
    nlInput: {
      flex: 1, background: "rgba(10,7,4,0.8)",
      border: "1px solid rgba(212,168,71,0.25)",
      borderRadius: "10px", padding: "12px 18px",
      color: "#F5E6C8", fontSize: "0.9rem", outline: "none",
      fontFamily: "'Cormorant Garamond', Georgia, serif",
    },
    nlBtn: {
      background: "linear-gradient(135deg, #D4A847, #8B6914)",
      color: "#0A0704", border: "none", borderRadius: "10px",
      padding: "12px 24px", cursor: "pointer",
      fontWeight: 700, fontSize: "0.82rem", letterSpacing: "1.5px",
      textTransform: "uppercase", whiteSpace: "nowrap",
      fontFamily: "'Josefin Sans', sans-serif",
    },

    // ── FOOTER ──
    footer: {
      background: "#050402",
      borderTop: "1px solid rgba(212,168,71,0.15)",
      padding: "4rem clamp(1rem,5vw,4rem) 2rem",
    },
    footerGrid: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
      gap: "3rem",
      marginBottom: "3rem",
    },
    footerLogo: { marginBottom: "1rem" },
    footerTagline: { color: "#9A7B3C", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1.5rem" },
    footerSocials: { display: "flex", gap: "10px" },
    socialBtn: {
      width: "36px", height: "36px", borderRadius: "8px",
      background: "rgba(212,168,71,0.1)",
      border: "1px solid rgba(212,168,71,0.2)",
      display: "flex", alignItems: "center", justifyContent: "center",
      cursor: "pointer", fontSize: "0.9rem",
      transition: "background 0.2s",
    },
    footerColTitle: {
      color: "#D4A847", fontSize: "0.75rem", letterSpacing: "3px",
      textTransform: "uppercase", marginBottom: "1.2rem",
      fontFamily: "'Josefin Sans', sans-serif",
    },
    footerLinks: { listStyle: "none", padding: 0, margin: 0 },
    footerLink: {
      color: "#9A7B3C", fontSize: "0.85rem", marginBottom: "10px",
      cursor: "pointer", transition: "color 0.2s", display: "block",
    },
    footerContact: { display: "flex", flexDirection: "column", gap: "12px" },
    footerContactItem: {
      display: "flex", alignItems: "center", gap: "10px",
      color: "#9A7B3C", fontSize: "0.85rem",
    },
    footerBottom: {
      borderTop: "1px solid rgba(212,168,71,0.1)",
      paddingTop: "1.5rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    },
    footerRights: { color: "#5A4A30", fontSize: "0.78rem" },
    footerBadges: { display: "flex", gap: "8px" },
    badge: {
      background: "rgba(212,168,71,0.08)",
      border: "1px solid rgba(212,168,71,0.15)",
      borderRadius: "6px", padding: "4px 10px",
      color: "#9A7B3C", fontSize: "0.65rem", letterSpacing: "1px",
      fontFamily: "'Josefin Sans', sans-serif",
    },
    // WhatsApp
    waBtn: {
      position: "fixed", bottom: "30px",
      [isRTL ? "left" : "right"]: "30px",
      background: "#25D366",
      border: "none", borderRadius: "50px",
      padding: "12px 18px", cursor: "pointer",
      display: "flex", alignItems: "center", gap: "8px",
      color: "#fff", fontWeight: 600, fontSize: "0.82rem",
      boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
      zIndex: 999, letterSpacing: "0.5px",
      fontFamily: "'Josefin Sans', sans-serif",
    },
    scrollTop: {
      position: "fixed", bottom: "90px",
      [isRTL ? "left" : "right"]: "30px",
      background: "rgba(212,168,71,0.15)",
      border: "1px solid rgba(212,168,71,0.3)",
      borderRadius: "50%", width: "42px", height: "42px",
      cursor: "pointer", color: "#D4A847", fontSize: "1.2rem",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 999,
    },
  };

  return (
    <div style={S.root}>
      {/* Global CSS animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Josefin+Sans:wght@300;400;600;700&family=Noto+Sans+Arabic:wght@400;700&display=swap');
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
        @keyframes spin { to{transform:rotate(360deg)} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .dest-card:hover { transform: scale(1.04) !important; box-shadow: 0 12px 40px rgba(212,168,71,0.2) !important; }
        .card-hover:hover { transform: translateY(-4px) !important; border-color: rgba(212,168,71,0.35) !important; }
        .why-card:hover { border-color: rgba(212,168,71,0.35) !important; transform: translateY(-3px) !important; }
        .nav-link:hover { color: #D4A847 !important; }
        .drop-item:hover { background: rgba(212,168,71,0.08) !important; color: #D4A847 !important; }
        .book-btn:hover { transform: scale(1.04) !important; box-shadow: 0 6px 25px rgba(212,168,71,0.45) !important; }
        .ai-chip:hover { background: rgba(212,168,71,0.15) !important; color: #D4A847 !important; }
        .footer-link:hover { color: #D4A847 !important; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0A0704; }
        ::-webkit-scrollbar-thumb { background: #3A2A10; border-radius: 3px; }
      `}</style>

      <div style={S.pharaohBg} />

      {/* ── NAVBAR ── */}
      <nav style={S.nav}>
        <div style={S.logo}>
          <div style={S.logoSymbol}>𓂀</div>
          <div style={S.logoText}>
            <span style={S.logoMain}>Golden</span>
            <span style={S.logoSub}>Egypt Tours</span>
          </div>
        </div>

        <ul style={S.navLinks}>
          {Object.entries(t.nav).map(([k, v]) => (
            <li key={k}><a className="nav-link" style={S.navLink}>{v}</a></li>
          ))}
        </ul>

        <div style={S.navRight}>
          {/* Language */}
          <div style={S.dropdown}>
            <button style={S.dropBtn} onClick={() => { setLangOpen(!langOpen); setCurrOpen(false); }}>
              🌐 {LANG_LABELS[lang]} ▾
            </button>
            {langOpen && (
              <div style={S.dropMenu}>
                {Object.entries(LANG_LABELS).map(([code, label]) => (
                  <div key={code} className="drop-item" style={{ ...S.dropItem, color: lang === code ? "#D4A847" : "#C8B89A" }}
                    onClick={() => { setLang(code); setLangOpen(false); }}>
                    {label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Currency */}
          <div style={S.dropdown}>
            <button style={S.dropBtn} onClick={() => { setCurrOpen(!currOpen); setLangOpen(false); }}>
              💱 {currency} ▾
            </button>
            {currOpen && (
              <div style={S.dropMenu}>
                {Object.entries(CURRENCIES).map(([code, { label }]) => (
                  <div key={code} className="drop-item" style={{ ...S.dropItem, color: currency === code ? "#D4A847" : "#C8B89A" }}
                    onClick={() => { setCurrency(code); setCurrOpen(false); }}>
                    {label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="book-btn" style={S.bookNowBtn}>{t.bookNow}</button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={S.hero} ref={heroRef}>
        <div style={S.heroBg} />
        <div style={S.heroOverlay} />
        <div style={S.heroGoldBeam} />
        <div style={{ ...S.ankh, left: "8%" }}>𓂀</div>
        <div style={{ ...S.ankh, right: "8%", animationDelay: "2s" }}>𓁹</div>

        <div style={S.heroContent}>
          <div style={S.heroEyeOfRa}>𓂀</div>
          <p style={S.heroTagline}>{t.hero.tagline}</p>
          <h1 style={S.heroTitle}>{t.hero.title}</h1>
          <p style={S.heroSubtitle}>{t.hero.subtitle}</p>
          <div style={S.heroOrnaLine}>
            <div style={S.ornaLine} />
            <span style={{ fontSize: "1.2rem" }}>𓆣</span>
            <div style={{ ...S.ornaLine, background: "linear-gradient(to left, transparent, #D4A847)" }} />
          </div>
        </div>

        {/* SEARCH */}
        <div style={S.searchBox}>
          <div style={S.searchHeader}>
            <span style={S.searchTitle}>✈ {t.hero.search === "Search" ? "Find Your Perfect Trip" : t.hero.search}</span>
            <button style={{ ...S.viewAll, fontSize: "0.72rem" }}>{t.hero.advanced} ▾</button>
          </div>
          <div style={S.searchGrid}>
            <div style={S.searchField}>
              <span style={S.searchLabel}>📍 {t.hero.destination}</span>
              <input style={S.searchInput} placeholder={t.hero.destination} />
            </div>
            <div style={S.searchField}>
              <span style={S.searchLabel}>📅 {t.hero.checkin}</span>
              <input type="date" style={S.searchInput} />
            </div>
            <div style={S.searchField}>
              <span style={S.searchLabel}>📅 {t.hero.checkout}</span>
              <input type="date" style={S.searchInput} />
            </div>
            <div style={S.searchField}>
              <span style={S.searchLabel}>👥 {t.hero.guests}</span>
              <div style={S.guestSelector} onClick={() => setGuestOpen(!guestOpen)}>
                {adults} {t.hero.adults} · {children} {t.hero.children} ▾
                {guestOpen && (
                  <div style={S.guestPopup} onClick={e => e.stopPropagation()}>
                    <div style={S.guestRow}>
                      <span style={{ color: "#F5E6C8", fontSize: "0.9rem" }}>{t.hero.adults}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <button style={S.counterBtn} onClick={() => setAdults(Math.max(1, adults - 1))}>−</button>
                        <span style={{ color: "#D4A847", minWidth: "16px", textAlign: "center" }}>{adults}</span>
                        <button style={S.counterBtn} onClick={() => setAdults(adults + 1)}>+</button>
                      </div>
                    </div>
                    <div style={S.guestRow}>
                      <span style={{ color: "#F5E6C8", fontSize: "0.9rem" }}>{t.hero.children}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <button style={S.counterBtn} onClick={() => setChildren(Math.max(0, children - 1))}>−</button>
                        <span style={{ color: "#D4A847", minWidth: "16px", textAlign: "center" }}>{children}</span>
                        <button style={S.counterBtn} onClick={() => setChildren(children + 1)}>+</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button className="book-btn" style={S.searchBtn}>🔍 {t.hero.search}</button>
          </div>
        </div>
      </section>
      {/* ── TRENDING DESTINATIONS ── */}
<div style={S.divider} />
<section style={S.section}>
  <div style={S.sectionHeader}>
    <div style={S.sectionTitleWrap}>
      <span style={S.sectionEyebrow}>✦ Explore</span>
      <h2 style={S.sectionTitle}>{t.trending.title}</h2>
    </div>
    <button style={S.viewAll}>{t.trending.viewAll} →</button>
  </div>

  <div style={S.destGrid}>
    {DESTINATIONS.map((d, i) => (
      <div
        key={i}
        className="dest-card"
        style={{ ...S.destCard, cursor: "pointer" }}
        onClick={() => navigate(d.link)}       // ← السطر المهم
      >
        <img
          src={d.img}
          alt={d.name}
          style={S.destImg}
          loading="lazy"
          onError={e => {
            e.target.src = `https://placehold.co/200x280/1A1208/D4A847?text=${encodeURIComponent(d.name)}`;
          }}
        />
        <div style={S.destOverlay} />
        <div style={S.destTag}>{d.tag}</div>
        <div style={S.destLabel}>
          <div style={{ fontWeight: 700, marginBottom: 2 }}>{d.name}</div>
          <div style={{ fontSize: "0.7rem", color: "rgba(245,230,200,0.65)", fontFamily: "'Josefin Sans', sans-serif", letterSpacing: "0.5px" }}>
            {d.tours} tours · ★ {d.rating}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
      {/* ── HOTELS + CRUISES ── */}
      <div style={S.divider} />
      <section style={{ ...S.section, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
        {/* Hotels */}
        <div>
          <div style={S.sectionHeader}>
            <div style={S.sectionTitleWrap}>
              <span style={S.sectionEyebrow}>𓇳 Accommodation</span>
              <h2 style={{ ...S.sectionTitle, fontSize: "clamp(1.2rem,2vw,1.7rem)" }}>🏨 {t.hotels.title}</h2>
            </div>
            <button style={S.viewAll}>{t.hotels.viewAll} →</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {HOTELS.map((h, i) => (
              <div key={i} className="card-hover" style={S.card}>
                <img src={h.img} alt={h.name} style={S.cardImg} loading="lazy" />
                <div style={S.cardBody}>
                  <div style={S.cardName}>{h.name}</div>
                  <Stars count={h.stars} />
                  <div style={S.cardPrice}>{formatPrice(h.price, currency)}<span style={{ color: "#9A7B3C", fontSize: "0.75rem" }}> {t.hotels.perNight}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Cruises */}
        <div>
          <div style={S.sectionHeader}>
            <div style={S.sectionTitleWrap}>
              <span style={S.sectionEyebrow}>𓋹 River</span>
              <h2 style={{ ...S.sectionTitle, fontSize: "clamp(1.2rem,2vw,1.7rem)" }}>🚢 {t.cruises.title}</h2>
            </div>
            <button style={S.viewAll}>{t.cruises.viewAll} →</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {CRUISES.map((c, i) => (
              <div key={i} className="card-hover" style={S.card}>
                <img src={c.img} alt={c.name} style={S.cardImg} loading="lazy" />
                <div style={S.cardBody}>
                  <div style={S.cardName}>{c.name}</div>
                  <Stars count={c.stars} />
                  <div style={S.cardPrice}>{formatPrice(c.price, currency)}<span style={{ color: "#9A7B3C", fontSize: "0.75rem" }}> {t.cruises.perNight}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI TRIP BUILDER ── */}
      <div style={S.divider} />
      <section style={S.section}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>
          <div style={S.aiSection}>
            <div style={S.aiDecor} />
            <div style={S.aiTitle}>✨ {t.ai.title}</div>
            <div style={S.aiSubtitle}>{t.ai.subtitle}</div>
            <div style={S.aiInputWrap}>
              <input
                style={S.aiInput}
                placeholder={t.ai.placeholder}
                value={aiInput}
                onChange={e => setAiInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleAI()}
              />
              <button style={{ ...S.aiBtn, opacity: aiLoading ? 0.6 : 1 }} onClick={handleAI} disabled={aiLoading}>
                {aiLoading ? "..." : t.ai.generate}
              </button>
            </div>
            <div style={S.aiChips}>
              {t.ai.chips.map((c, i) => (
                <span key={i} className="ai-chip" style={S.aiChip} onClick={() => setAiInput(c)}>{c}</span>
              ))}
            </div>
            {aiLoading && (
              <div style={S.aiLoading}>
                <div style={S.spinner} />
                <span>{t.ai.thinking}</span>
              </div>
            )}
            {aiResult && !aiLoading && (
              <div style={S.aiResult}>{aiResult}</div>
            )}
          </div>

          {/* HOW IT WORKS */}
          <div>
            <div style={S.sectionTitleWrap}>
              <span style={S.sectionEyebrow}>𓂝 Process</span>
              <h2 style={{ ...S.sectionTitle, marginBottom: "1.5rem" }}>⚙️ {t.booking.title}</h2>
            </div>
            <div style={S.stepsWrap}>
              {t.booking.steps.map((step, i) => {
                const icons = ["🗺️", "⚙️", "💳", "✅"];
                return (
                  <div key={i} style={{ ...S.step, ...(activeStep === i ? S.stepActive : {}), borderRight: i < 3 ? "1px solid rgba(212,168,71,0.1)" : "none" }}>
                    <div style={{ ...S.stepNum, ...(activeStep === i ? S.stepNumActive : S.stepNumInactive) }}>
                      {icons[i]}
                    </div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600, color: activeStep === i ? "#D4A847" : "#F5E6C8", marginBottom: "6px" }}>{step}</div>
                    <div style={{ fontSize: "0.75rem", color: "#9A7B3C" }}>{t.booking.descs[i]}</div>
                  </div>
                );
              })}
            </div>
            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px", marginTop: "1.5rem" }}>
              {[["50K+", "Happy Travelers"], ["15+", "Years Experience"], ["200+", "Destinations"]].map(([num, label], i) => (
                <div key={i} style={{ background: "rgba(26,18,8,0.7)", border: "1px solid rgba(212,168,71,0.15)", borderRadius: "12px", padding: "1.2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "#D4A847" }}>{num}</div>
                  <div style={{ fontSize: "0.72rem", color: "#9A7B3C", letterSpacing: "1px", fontFamily: "'Josefin Sans', sans-serif", textTransform: "uppercase" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <div style={S.divider} />
      <section style={{ ...S.section, background: "linear-gradient(to bottom, transparent, rgba(26,18,8,0.4), transparent)" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={S.sectionEyebrow}>𓆣 Excellence</span>
          <h2 style={{ ...S.sectionTitle, fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>{t.why.title}</h2>
          <p style={{ color: "#9A7B3C", marginTop: "6px", fontSize: "0.95rem" }}>{t.why.subtitle}</p>
        </div>
        <div style={S.whyGrid}>
          {t.why.cards.map((c, i) => (
            <div key={i} className="why-card" style={S.whyCard}>
              <div style={S.whyIcon}>{c.icon}</div>
              <div style={S.whyTitle}>{c.t}</div>
              <div style={S.whyDesc}>{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <div style={S.divider} />
      <section style={S.section}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span style={S.sectionEyebrow}>𓁹 Reviews</span>
          <h2 style={{ ...S.sectionTitle, fontSize: "clamp(1.5rem,3vw,2.2rem)" }}>{t.testimonials.title}</h2>
          <p style={{ color: "#9A7B3C", marginTop: "6px", fontSize: "0.9rem" }}>{t.testimonials.subtitle}</p>
        </div>
        <div style={S.testimonialsGrid}>
          {TESTIMONIALS.map((r, i) => (
            <div key={i} style={S.testCard}>
              <div style={S.testQuote}>"</div>
              <Stars count={r.rating} />
              <p style={S.testText}>{r.text}</p>
              <div style={S.testAuthor}>
                <img src={r.img} alt={r.name} style={S.testAvatar} />
                <div>
                  <div style={S.testName}>{r.name}</div>
                  <div style={S.testCountry}>{r.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <div style={S.newsletterSection}>
        <div style={S.nlBg} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>𓂀</div>
          <h2 style={S.nlTitle}>{t.newsletter.title}</h2>
          <p style={S.nlSubtitle}>{t.newsletter.subtitle}</p>
          {!subDone ? (
            <div style={S.nlForm}>
              <input style={S.nlInput} placeholder={t.newsletter.placeholder}
                value={emailVal} onChange={e => setEmailVal(e.target.value)} />
              <button style={S.nlBtn} onClick={() => emailVal && setSubDone(true)}>{t.newsletter.cta}</button>
            </div>
          ) : (
            <div style={{ color: "#D4A847", fontSize: "1rem" }}>✅ Thank you for subscribing!</div>
          )}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={S.footer}>
        <div style={S.footerGrid}>
          <div>
            <div style={{ ...S.logo, ...S.footerLogo }}>
              <div style={S.logoSymbol}>𓂀</div>
              <div style={S.logoText}>
                <span style={S.logoMain}>Golden</span>
                <span style={S.logoSub}>Egypt Tours</span>
              </div>
            </div>
            <p style={S.footerTagline}>{t.footer.tagline}</p>
            <div style={S.footerSocials}>
              {["📘", "📸", "🎵", "▶️"].map((icon, i) => (
                <div key={i} className="why-card" style={S.socialBtn}>{icon}</div>
              ))}
            </div>
          </div>
          <div>
            <div style={S.footerColTitle}>Quick Links</div>
            <ul style={S.footerLinks}>
              {Object.entries(t.footer.links).slice(0, 4).map(([k, v]) => (
                <li key={k}><a className="footer-link" style={S.footerLink}>{v}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div style={S.footerColTitle}>Legal</div>
            <ul style={S.footerLinks}>
              {Object.entries(t.footer.links).slice(4).map(([k, v]) => (
                <li key={k}><a className="footer-link" style={S.footerLink}>{v}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div style={S.footerColTitle}>{t.footer.contact}</div>
            <div style={S.footerContact}>
              <div style={S.footerContactItem}><span>✉️</span> Goldenegypttours26@gmail.com</div>
              <div style={S.footerContactItem}><span>📱</span> +20 106 825 7754</div>
              <div style={S.footerContactItem}><span>📍</span> Cairo, Egypt</div>
              <div style={{ marginTop: "0.5rem", display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {["TripAdvisor", "Trustpilot", "ISO 9001"].map((b, i) => (
                  <span key={i} style={S.badge}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={S.footerBottom}>
          <span style={S.footerRights}>{t.footer.rights}</span>
          <div style={S.footerBadges}>
            <span style={S.badge}>🔒 SSL SECURED</span>
            <span style={S.badge}>✈️ IATA MEMBER</span>
            <span style={S.badge}>🌍 UNWTO</span>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <button style={S.waBtn} onClick={() => window.open("https://wa.me/201068257754", "_blank")}>
        💬 {t.chatWA}
      </button>

      {/* Scroll to top */}
      <button style={S.scrollTop} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
    </div>
  );
}