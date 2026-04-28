import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import AITripBuilder from "../components/AITripBuilder";

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────
const T = {
  en: { dir:"ltr", bookNow:"Book Now", chatWA:"WhatsApp", search:"Search",
    hero:{ tag:"Award-Winning Egypt Specialists", title:"Golden Egypt Tours", sub:"Discover Egypt Like Never Before", dest:"Where are you going?", checkin:"Check-in", checkout:"Check-out", guests:"Guests", adults:"Adults", children:"Children" },
    trending:{ title:"Trending Destinations", all:"View All" },
    hotels:{ title:"Featured Hotels", all:"View All", night:"/ night" },
    cruises:{ title:"Nile Cruises", all:"View All", night:"/ night" },
    ai:{ title:"AI Trip Builder", sub:"Your perfect Egypt itinerary in seconds", ph:"e.g. 10 days Egypt — Cairo, Luxor & Red Sea", gen:"Generate", chips:["5 days Cairo","Nile Cruise","Honeymoon Package"] },
    why:{ title:"Why Golden Egypt Tours?", sub:"Trusted by 50,000+ travellers worldwide" },
    tests:{ title:"Travellers Love Egypt", sub:"Real stories · Real adventures" },
    nl:{ title:"Get Exclusive Egypt Deals", sub:"Join 200,000+ travellers. Unsubscribe anytime.", ph:"Your email address", cta:"Subscribe" },
    nav:["Home","Tours","Nile Cruises","Hotels","About","Contact"],
  },
  ar: { dir:"rtl", bookNow:"احجز الآن", chatWA:"واتساب",search:"بحث",
    hero:{ tag:"متخصصون رقم 1 في سياحة مصر", title:"جولدن إيجيبت تورز", sub:"اكتشف مصر كما لم تراها من قبل", dest:"أين تريد الذهاب؟", checkin:"تاريخ الوصول", checkout:"تاريخ المغادرة", guests:"الضيوف", adults:"البالغون", children:"الأطفال" },
    trending:{ title:"الوجهات الأكثر طلباً", all:"عرض الكل" },
    hotels:{ title:"الفنادق المميزة", all:"عرض الكل", night:"/ ليلة" },
    cruises:{ title:"رحلات النيل", all:"عرض الكل", night:"/ ليلة" },
    ai:{ title:"منشئ الرحلات بالذكاء الاصطناعي", sub:"رحلتك المثالية في مصر خلال ثوانٍ", ph:"مثال: 10 أيام في القاهرة والأقصر والبحر الأحمر", gen:"توليد", chips:["5 أيام القاهرة","رحلة نيل","شهر العسل"] },
    why:{ title:"لماذا جولدن إيجيبت تورز؟", sub:"ثقة أكثر من 50,000 مسافر حول العالم" },
    tests:{ title:"المسافرون يعشقون مصر", sub:"قصص حقيقية · مغامرات حقيقية" },
    nl:{ title:"احصل على عروض مصر الحصرية", sub:"انضم لأكثر من 200,000 مسافر.", ph:"بريدك الإلكتروني", cta:"اشترك" },
    nav:["الرئيسية","الجولات","رحلات النيل","الفنادق","من نحن","تواصل"],
  },
};

const CURRENCIES = {
  USD:{ symbol:"$", rate:1, label:"USD ($)" },
  EUR:{ symbol:"€", rate:0.92, label:"EUR (€)" },
  GBP:{ symbol:"£", rate:0.79, label:"GBP (£)" },
  EGP:{ symbol:"ج.م", rate:48.5, label:"EGP (ج.م)" },
};

const LANG_MAP = { en:"EN", ar:"عر", es:"ES", de:"DE", fr:"FR", ru:"RU", it:"IT" };

const DESTS = [
  { id:"cairo",      name:"Cairo",         nameAr:"القاهرة",   img:"/images/home/cairo.jpeg", color:"#C9A84C", tag:"Capital", tours:12 },
  { id:"luxor",      name:"Luxor",         nameAr:"الأقصر",    img:"/images/home/luxor.jpeg", color:"#E8C96D", tag:"Ancient", tours:18 },
  { id:"aswan",      name:"Aswan",         nameAr:"أسوان",     img:"/images/home/aswan.jpeg", color:"#FFE599", tag:"Scenic", tours:10 },
  { id:"hurghada",   name:"Hurghada",      nameAr:"الغردقة",   img:"/images/home/hurghada.jpeg", color:"#25D366", tag:"Beach", tours:14 },
  { id:"sharm",      name:"Sharm El Sheikh",nameAr:"شرم الشيخ",img:"/images/home/sharm.jpeg", color:"#1E90FF", tag:"Resort", tours:16 },
  { id:"alexandria", name:"Alexandria",    nameAr:"الإسكندرية",img:"/images/home/alex.jpeg", color:"#FF6B6B", tag:"Coast", tours:9 },
  { id:"fayoum",     name:"Fayoum",        nameAr:"الفيوم",    img:"/images/home/fayoum.jpeg", color:"#A0DE78", tag:"Nature", tours:7 },
  { id:"marsa-alam", name:"Marsa Alam",    nameAr:"مرسى علم",  img:"/images/home/Marsa.jpeg", color:"#00D4FF", tag:"Diving", tours:11 },
  { id:"giza",       name:"Giza",          nameAr:"الجيزة",    img:"/images/home/giza.jpeg", color:"#FFD700", tag:"Pyramids", tours:8 },
  { id:"ain-sokhna", name:"Ain Sokhna",    nameAr:"العين السخنة",img:"/images/home/sokhna.jpeg", color:"#FF8C00", tag:"Gateway", tours:6 },
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
  { name:"Sarah Mitchell",  country:"🇺🇸 New York",   rating:5, img:"https://i.pravatar.cc/80?img=1",  text:"The AI itinerary was perfect — 12 days, every detail handled. Cairo to Aswan felt magical." },
  { name:"Carlos Ruiz",     country:"🇪🇸 Barcelona",  rating:5, img:"https://i.pravatar.cc/80?img=3",  text:"El crucero por el Nilo fue absolutamente mágico. Nuestro guía conocía cada templo perfectamente." },
  { name:"Amélie Fontaine", country:"🇫🇷 Paris",      rating:5, img:"https://i.pravatar.cc/80?img=5",  text:"Service impeccable du début à la fin. Tout était parfait!" },
  { name:"Klaus Weber",     country:"🇩🇪 Berlin",     rating:5, img:"https://i.pravatar.cc/80?img=12", text:"Perfekt organisiert! Die Nilkreuzfahrt war spektakulär." },
  { name:"Yuki Tanaka",     country:"🇯🇵 Tokyo",      rating:5, img:"https://i.pravatar.cc/80?img=9",  text:"Everything exceeded expectations. Valley of the Kings at sunrise was spiritual." },
  { name:"Olga Sorokina",   country:"🇷🇺 Moscow",     rating:5, img:"https://i.pravatar.cc/80?img=7",  text:"Невероятное путешествие! Все организовано идеально!" },
];

const WHY = [
  { icon:"🏆", title:"Award-Winning",    desc:"Voted #1 Egypt Specialist by Travellers Choice — 5 years running" },
  { icon:"🤖", title:"AI-Powered",       desc:"Our proprietary AI builds your personalised Egypt itinerary in seconds" },
  { icon:"🔒", title:"100% Secure",      desc:"Bank-grade encryption · Free cancellation · Full money-back guarantee" },
  { icon:"🌍", title:"Global Reach",     desc:"Serving 90+ countries in 9 languages with 24/7 expert support" },
  { icon:"⭐", title:"50,000+ Reviews",  desc:"Average 4.9/5 across TripAdvisor, Google & Trustpilot globally" },
  { icon:"🎯", title:"Tailor-Made",      desc:"Every itinerary crafted by licensed PhD Egyptologist guides" },
];

const fmt = (p, cur) => `${CURRENCIES[cur].symbol}${Math.round(p * CURRENCIES[cur].rate).toLocaleString()}`;
const Stars = ({ n }) => <span style={{ color:"#D4AF37", letterSpacing:"1px" }}>{"★".repeat(n)}{"☆".repeat(5-n)}</span>;

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
  html { scroll-behavior:smooth; }
  body { background:var(--obsidian); color:var(--text); font-family:'Josefin Sans','Noto Sans Arabic',sans-serif; overflow-x:hidden; }
  
  @keyframes fadeUp   { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:none} }
  @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
  @keyframes kbzoom   { 0%{transform:scale(1)} 100%{transform:scale(1.08)} }
  @keyframes pulse    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.7;transform:scale(.97)} }

  .hero-bg { animation: kbzoom 18s ease-in-out infinite alternate; }
  .gold-text {
    background: linear-gradient(135deg, #F0DC8A 0%, #C9A84C 40%, #FFE599 70%, #B8902E 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  
  .dest-card:hover .dest-img { transform:scale(1.08); }
  .card-hov:hover { transform:translateY(-6px); }
  .book-btn:hover { box-shadow:0 8px 28px rgba(201,168,76,.5) !important; transform:scale(1.03); }
`;

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
  const [email, setEmail]       = useState("");
  const [subDone, setSubDone]   = useState(false);
  const [heroImg, setHeroImg]   = useState(0);
  const [visible, setVisible]   = useState({});

  const t = T[lang] || T.en;
  const isRTL = t.dir === "rtl";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.dataset.reveal]: true }));
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const HERO_IMGS = [
    "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1800&q=85",
    "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1800&q=85",
  ];

  useEffect(() => {
    const id = setInterval(() => setHeroImg(i => (i+1) % HERO_IMGS.length), 5000);
    return () => clearInterval(id);
  }, []);

  const rv = (key) => ({
    "data-reveal": key,
    style: { opacity: visible[key] ? 1 : 0, transform: visible[key] ? "none" : "translateY(28px)", transition: "opacity .7s ease, transform .7s ease" },
  });

  return (
    <div style={{ background:"#080603", color:"#F0E4C4", minHeight:"100vh", direction:t.dir, overflowX:"hidden", fontFamily:"'Josefin Sans','Noto Sans Arabic',sans-serif" }}>
      <style>{CSS}</style>

      {/* NAVBAR */}
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
          }}>𓂀</div>
          <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(13px,2vw,16px)", fontWeight:700, color:"#C9A84C", letterSpacing:2 }}>GOLDEN EGYPT</div>
            <div style={{ fontSize:"clamp(7px,1vw,9px)", color:"rgba(201,168,76,.5)", letterSpacing:3 }}>TOURS & EXPEDITIONS</div>
          </div>
        </div>

        {/* Right Controls */}
        <div style={{ display:"flex", alignItems:"center", gap:8, flexShrink:0 }}>
          <Link to="/booking/1" style={{ textDecoration: "none" }}>
            <button className="book-btn" style={{ 
              background:"linear-gradient(135deg,#C9A84C,#E8C96D)", 
              color:"#080603", 
              border:"none", 
              borderRadius:8, 
              padding:"9px 20px", 
              cursor:"pointer", 
              fontWeight:700, 
              fontSize:11, 
              letterSpacing:2,
              textTransform:"uppercase",
              boxShadow:"0 4px 20px rgba(201,168,76,.3)",
              transition:"all .3s ease"
            }}>
              {t.bookNow}
            </button>
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{ position:"relative", height:"100vh", minHeight:600, maxHeight:920, overflow:"hidden", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", marginTop:66 }}>
        {HERO_IMGS.map((img, i) => (
          <div key={i} className={i===heroImg ? "hero-bg" : ""} style={{
            position:"absolute", inset:0,
            backgroundImage:`url(${img})`,
            backgroundSize:"cover", backgroundPosition:"center 40%",
            opacity: i===heroImg ? 1 : 0,
            transition:"opacity 1.4s ease",
          }} />
        ))}

        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(8,6,3,.55) 0%, rgba(8,6,3,.1) 35%, rgba(8,6,3,.75) 80%, rgba(8,6,3,1) 100%)" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, rgba(8,6,3,.5) 0%, transparent 60%)" }} />

        {/* Hero Content */}
        <div style={{ position:"relative", zIndex:4, textAlign:"center", padding:"0 clamp(16px,5vw,60px)", width:"100%", maxWidth:900 }}>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(36px,7.5vw,88px)", fontWeight:900, lineHeight:1.0, marginBottom:14, color:"#fff", textShadow:"0 4px 32px rgba(0,0,0,.5)" }}>
            <span className="gold-text">{t.hero.title}</span>
          </h1>

          <p style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", fontSize:"clamp(16px,2.5vw,26px)", color:"rgba(240,228,196,.75)", marginBottom:32, fontWeight:400, letterSpacing:.5 }}>
            {t.hero.sub}
          </p>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section style={{ padding:"clamp(48px,8vw,96px) clamp(16px,5vw,48px)" }}>
        <div {...rv("dests-head")} style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"clamp(24px,4vw,40px)", ...rv("dests-head").style }}>
          <div>
            <div style={{ fontSize:10, color:"#C9A84C", letterSpacing:4, textTransform:"uppercase", marginBottom:8, fontWeight:700 }}>✦ Explore Egypt</div>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(26px,4vw,44px)", fontWeight:900, color:"#F0E4C4" }}>{t.trending.title}</h2>
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:20 }}>
          {DESTS.map((d, i) => (
            <Link to={`/city/${d.id}`} key={d.id} style={{ textDecoration:"none", color:"white", background:"#111", padding:10, borderRadius:10, transition:"0.3s" }}>
              <img src={d.img} style={{ width:"100%", height:140, objectFit:"cover", borderRadius:10 }} alt={d.name} />
              <h3 style={{ marginTop:10, marginBottom:5 }}>{d.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign:"center", padding:20, background:"#111", marginTop:40 }}>
        © 2026 Golden Egypt Tours — All Rights Reserved
      </footer>
    </div>
  );
}
