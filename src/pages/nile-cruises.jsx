// ============================================================
//  nile-cruises.jsx — Aurevian Tours · Nile Cruises
//  Real tours from Civitatis Egypt — with direct booking links
//  Route: /nile-cruises
// ============================================================
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SHARED_CSS, Nav, MobileMenu, Footer, FloatingButtons,
  HieroglyphFrieze, waLink, useGoogleTranslate,
} from "./SharedLayout";

// ─── REAL CIVITATIS CRUISES ──────────────────────────────────
const CRUISES = [
  {
    id: "luxor-aswan-4d",
    title: "4-Day Nile Cruise — Luxor to Aswan",
    subtitle: "The most iconic Egypt experience",
    nights: "4 Nights · 5 Days",
    route: "Luxor → Esna → Edfu → Kom Ombo → Aswan",
    from: "Luxor",
    priceOriginal: 550.18,
    price: 412.63,
    discount: 25,
    rating: 7.8,
    reviews: 1763,
    travelers: 21100,
    badge: "Bestseller",
    badgeColor: "#52B788",
    cancellation: "Free cancellation up to 48h before",
    pickup: "Hotel pickup included",
    img: "https://www.civitatis.com/f/egipto/luxor/crucero-nilo-4-noches-luxor-asuan-589x392.jpg",
    civitatis: "https://www.civitatis.com/en/luxor/nile-cruise-luxor-aswan/",
    ships5star: ["MS Pioneer II","MS Mirage","MS Nile Delta","Miss Egypt","Beaurivage II","Grand Princess","Voyager","MS Grand Princess"],
    ships5premium: ["MS Nile Dolfine","MS Zeina","Royal Esadora","MS Tuya","Royal Princess","Crown Jewel","MS Liberty","MS Nile Marquiz"],
    itinerary: [
      { day:"Day 1", title:"Welcome to Luxor", icon:"✈️", desc:"Pickup at Luxor airport, train station, or hotel. Transfer to your luxury cruise ship. Board and settle into your cabin. Full board begins." },
      { day:"Day 2", title:"Luxor East & West Banks", icon:"🏛", desc:"Breakfast then Luxor Temple & Karnak Temple (connected by the Avenue of Sphinxes). Afternoon: Valley of the Kings (3 tombs), Hatshepsut Temple, Colossi of Memnon. Sail toward Edfu overnight." },
      { day:"Day 3", title:"Edfu & Kom Ombo", icon:"🐊", desc:"Horse-drawn carriage tour of Edfu, then the magnificent Temple of Horus. Sail to Kom Ombo at sunset — the stunning double temple dedicated to Sobek and Horus." },
      { day:"Day 4", title:"Aswan Wonders", icon:"🌅", desc:"Arrive in Aswan. Visit Philae Temple (island of Isis), the Unfinished Obelisk, and the High Dam. Optional: felucca ride around Elephantine Island. Dinner on board." },
      { day:"Day 5", title:"Departure", icon:"🛫", desc:"Breakfast and check-out. Transfer to Aswan airport, hotel, or train station. Optional: Abu Simbel day trip (extra cost)." },
    ],
    includes: ["Full board (breakfast, lunch, dinner)","All shore excursions","Licensed Egyptologist guide","Entrance fees to listed sites","Airport/hotel/station transfers","Air-conditioned transport"],
    notIncludes: ["Entrance to Tutankhamun's tomb (extra)","Abu Simbel trip (optional add-on)","Personal expenses & tips","Travel insurance"],
  },
  {
    id: "aswan-luxor-3n",
    title: "3-Night Nile Cruise — Aswan to Luxor",
    subtitle: "Sail from Nubia to ancient Thebes",
    nights: "3 Nights · 4 Days",
    route: "Aswan → Kom Ombo → Edfu → Esna → Luxor",
    from: "Aswan",
    priceOriginal: 509.51,
    price: 382.14,
    discount: 25,
    rating: 7.4,
    reviews: 1607,
    travelers: 20146,
    badge: "Most Popular",
    badgeColor: "#C9A84C",
    cancellation: "Free cancellation up to 48h before",
    pickup: "Hotel pickup included",
    img: "https://www.civitatis.com/f/egipto/asuan/crucero-nilo-3-noches-asuan-luxor-589x392.jpg",
    civitatis: "https://www.civitatis.com/en/aswan/3-night-cruise-aswan-luxor/",
    ships5star: ["MS Pioneer II","MS Mirage","MS Nile Delta","Miss Egypt","Beaurivage II","Grand Princess","Voyager","MS Grand Princess"],
    ships5premium: ["Royal Esadora","MS Zeina","MS Nile Dolfine","MS Tuya","Royal Princess","Crown Jewel","MS Liberty","MS Nile Marquiz"],
    itinerary: [
      { day:"Day 1", title:"Arrival in Aswan + Philae Temple", icon:"🏛", desc:"Pickup at Aswan airport, hotel, or train station. Board your Nile riverboat. Visit Philae Temple — island of the goddess Isis, rescued from the rising Nile waters. Welcome perfumery visit." },
      { day:"Day 2", title:"Aswan → Kom Ombo → Edfu", icon:"🌅", desc:"Optional morning trip to Abu Simbel (highly recommended). Lunch on board, then sail to Kom Ombo Temple at sunset — breathtaking. Continue to Edfu for dinner and overnight." },
      { day:"Day 3", title:"Edfu → Esna → Luxor", icon:"🐴", desc:"Horse-drawn carriage through Edfu to the Temple of Horus. Sail through the Esna lock (a 10m boat 'elevator'). Arrive Luxor — visit Luxor Temple and Karnak Temple. Dinner docked in Luxor." },
      { day:"Day 4", title:"Luxor West Bank & Departure", icon:"⚰️", desc:"Valley of the Kings (3 tombs), Hatshepsut Temple, Colossi of Memnon. Local alabaster & crafts store. Tour ends ~4:30pm. Transfer to airport, station, or hotel." },
    ],
    includes: ["Full board on board","All shore excursions","Licensed guide","Entrance fees","Hotel/airport transfers","Air-conditioned transport"],
    notIncludes: ["Abu Simbel (optional, extra cost)","Single room supplement","Personal expenses","Travel insurance"],
  },
  {
    id: "cairo-dinner-cruise",
    title: "Nile Dinner Cruise with Show — Cairo",
    subtitle: "5-star floating palace, belly dance & live music",
    nights: "2 Hours Evening",
    route: "Cairo · Nile River",
    from: "Cairo",
    priceOriginal: null,
    price: 49,
    discount: null,
    rating: 8.2,
    reviews: 3200,
    travelers: 45000,
    badge: "Evening Experience",
    badgeColor: "#9B72CF",
    cancellation: "Free cancellation up to 48h before",
    pickup: "Hotel pickup included",
    img: "https://www.civitatis.com/f/egipto/el-cairo/crucero-cena-show-nilo-cairo-589x392.jpg",
    civitatis: "https://www.civitatis.com/en/cairo/nile-cruise-dinner-show/",
    ships5star: ["Nile Maxim (awarded Best Boat on the Nile)","Nile Pharaohs"],
    ships5premium: [],
    itinerary: [
      { day:"7:30 PM", title:"Hotel Pickup", icon:"🚗", desc:"Private pickup from your Cairo hotel in an air-conditioned vehicle." },
      { day:"8:00 PM", title:"Board the 5-Star Nile Maxim", icon:"🚢", desc:"Embark on the award-winning Nile Maxim — consistently rated best boat on the Nile — or the Nile Pharaohs." },
      { day:"8:30 PM", title:"Dinner on the Nile", icon:"🍽️", desc:"Traditional Egyptian dinner: salad buffet, choice of two main dishes (Egyptian & international), and dessert. Non-alcoholic drinks included." },
      { day:"9:00 PM", title:"Live Entertainment", icon:"💃", desc:"Spectacular show: belly dancing, whirling dervishes (Tanoura), folk dancing, and live music. Cairo glittering at night all around you." },
      { day:"10:30 PM", title:"Return", icon:"🏨", desc:"Return transfer to your hotel in Cairo." },
    ],
    includes: ["Return hotel transfer","2-hour Nile cruise","Traditional Egyptian dinner","Belly dance & Tanoura show","Non-alcoholic beverages"],
    notIncludes: ["Alcoholic drinks (available on board)","Tips","Personal expenses"],
  },
  {
    id: "egypt-8day",
    title: "Best of Egypt — 8-Day All-Inclusive Tour",
    subtitle: "Cairo + Nile Cruise + All temples — everything included",
    nights: "8 Days / 7 Nights",
    route: "Cairo → Luxor → Nile Cruise → Aswan → Cairo",
    from: "Cairo",
    priceOriginal: null,
    price: 1290,
    discount: null,
    rating: 8.5,
    reviews: 4100,
    travelers: 62000,
    badge: "Complete Package",
    badgeColor: "#E63946",
    cancellation: "Free cancellation available",
    pickup: "All transfers included",
    img: "https://www.civitatis.com/f/egipto/el-cairo/tour-egipto-8-dias-589x392.jpg",
    civitatis: "https://www.civitatis.com/en/cairo/best-of-egypt-8-day/",
    ships5star: ["MS Pioneer II","MS Mirage","MS Nile Admiral","Miss Egypt","Beaurivage II","Grand Princess","MS Jasimn"],
    ships5premium: [],
    itinerary: [
      { day:"Days 1–2", title:"Cairo — Pyramids & Museum", icon:"🔺", desc:"Pyramids of Giza & Sphinx, Grand Egyptian Museum (500,000+ artifacts including Tutankhamun's treasures). Hotel: Pyramids Park Resort Cairo or similar." },
      { day:"Day 3", title:"Cairo City Tour", icon:"🕌", desc:"Citadel & Alabaster Mosque, Khan el-Khalili bazaar, Coptic neighborhood. Full day exploring the living city." },
      { day:"Days 4–7", title:"Nile Cruise — Luxor to Aswan", icon:"🚢", desc:"Fly to Luxor. Board luxury cruise. Valley of the Kings, Karnak, Edfu, Kom Ombo, Philae. Full board on board throughout." },
      { day:"Day 8", title:"Return to Cairo", icon:"✈️", desc:"Fly back to Cairo. Transfer to international airport for departure." },
    ],
    includes: ["Visa fees","Regional flights (Cairo–Luxor & Aswan–Cairo)","All transport (AC)","Hotels (breakfast)","Full board on cruise","All guides","All excursions","All entrance fees (except Great Pyramid of Cheops interior)"],
    notIncludes: ["International flights","Great Pyramid of Cheops interior","Personal expenses","Tips"],
  },
];

const CATEGORIES = [
  { id:"all",      label:"All Cruises",  icon:"🚢" },
  { id:"multi",    label:"Multi-Day",    icon:"🗓️" },
  { id:"evening",  label:"Evening",      icon:"🌙" },
  { id:"package",  label:"Full Package", icon:"✈️" },
];

const catMap = { "luxor-aswan-4d":"multi","aswan-luxor-3n":"multi","cairo-dinner-cruise":"evening","egypt-8day":"package" };

const PAGE_CSS = `
@keyframes heroZoom{0%{transform:scale(1)}100%{transform:scale(1.06)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@keyframes spin{to{transform:rotate(360deg)}}

.av-cc:hover{transform:translateY(-8px);box-shadow:0 32px 64px rgba(35,26,14,.2)!important;}
.av-cc{transition:transform .4s cubic-bezier(.25,.8,.25,1),box-shadow .4s;}
.av-cc:hover .av-ci{transform:scale(1.07);}
.av-ci{transition:transform .6s ease;}

.av-tab{background:none;border:none;cursor:pointer;padding:11px clamp(10px,2vw,22px);font-size:11px;letter-spacing:.13em;text-transform:uppercase;font-weight:700;font-family:'Josefin Sans',sans-serif;border-bottom:2px solid transparent;white-space:nowrap;transition:color .2s;display:inline-flex;align-items:center;gap:6px;margin-bottom:-2px;}
.av-tab.on{color:#A07828;border-bottom-color:#A07828;}
.av-tab:not(.on){color:rgba(35,26,14,.5);}

.av-modal-overlay{position:fixed;inset:0;background:rgba(15,11,6,.78);backdrop-filter:blur(16px);z-index:2000;display:flex;align-items:center;justify-content:center;padding:16px;animation:fadeUp .2s ease;}
.av-modal{background:#FAF6ED;border:1.5px solid rgba(193,156,60,.35);border-radius:22px;width:min(760px,96vw);max-height:92vh;overflow-y:auto;box-shadow:0 50px 120px rgba(20,15,8,.4);}
.av-modal::-webkit-scrollbar{width:4px;}
.av-modal::-webkit-scrollbar-thumb{background:rgba(193,156,60,.4);border-radius:2px;}

.av-inc{display:flex;align-items:flex-start;gap:8px;margin-bottom:7px;font-family:'Cormorant Garamond',serif;font-size:14px;color:rgba(35,26,14,.72);line-height:1.5;}
.av-inc.yes::before{content:"✓";color:#52B788;font-weight:700;flex-shrink:0;margin-top:1px;}
.av-inc.no::before{content:"✗";color:#E63946;font-weight:700;flex-shrink:0;margin-top:1px;}
`;

function Stars({ rating }) {
  const n = Math.round(rating / 2);
  return <span style={{ color:"#C9A84C", letterSpacing:1 }}>{"★".repeat(n)}{"☆".repeat(5-n)}</span>;
}

function CruiseCard({ c, onView }) {
  return (
    <div className="av-cc" style={{ borderRadius:20, overflow:"hidden", background:"#fff", border:"1px solid rgba(35,26,14,.08)", boxShadow:"0 8px 28px rgba(35,26,14,.08)" }}>
      {/* IMAGE */}
      <div style={{ position:"relative", height:210, overflow:"hidden", background:"#EDE3C8", cursor:"pointer" }} onClick={() => onView(c)}>
        <img className="av-ci" src={c.img} alt={c.title} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
          onError={e => e.target.src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(20,15,8,.6) 0%,transparent 55%)" }}/>
        <div style={{ position:"absolute", top:12, left:12, background:c.badgeColor, color:"#fff", fontSize:9, fontWeight:700, padding:"4px 12px", borderRadius:18, textTransform:"uppercase", letterSpacing:"0.08em", fontFamily:"'Josefin Sans',sans-serif" }}>{c.badge}</div>
        {c.discount && <div style={{ position:"absolute", top:12, right:12, background:"#E63946", color:"#fff", fontSize:10, fontWeight:700, padding:"4px 10px", borderRadius:7, fontFamily:"'Josefin Sans',sans-serif" }}>-{c.discount}%</div>}
        <div style={{ position:"absolute", bottom:12, left:12, right:12, display:"flex", justifyContent:"space-between", alignItems:"flex-end" }}>
          <div style={{ fontFamily:"'Cinzel',serif", fontSize:11, fontWeight:700, color:"rgba(250,246,237,.85)" }}>{c.nights}</div>
          <div style={{ fontSize:11, color:"rgba(250,246,237,.75)", fontFamily:"'Josefin Sans',sans-serif" }}>📍 {c.from}</div>
        </div>
      </div>
      {/* BODY */}
      <div style={{ padding:"18px 20px 22px" }}>
        <h3 onClick={() => onView(c)} style={{ fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:15, color:"#231A0E", marginBottom:5, cursor:"pointer", lineHeight:1.35 }}>{c.title}</h3>
        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:13, color:"#9C7A3C", marginBottom:10 }}>{c.subtitle}</div>
        <div style={{ fontSize:11, color:"#8B6010", fontFamily:"'Josefin Sans',sans-serif", marginBottom:12 }}>📍 {c.route}</div>

        {/* RATINGS */}
        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
          <span style={{ background:"linear-gradient(135deg,#A07828,#C9A84C)", color:"#FAF6ED", borderRadius:6, padding:"3px 9px", fontSize:12, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>{c.rating}</span>
          <Stars rating={c.rating}/>
          <span style={{ fontSize:11, color:"#9C7A3C", fontFamily:"'Josefin Sans',sans-serif" }}>({c.reviews.toLocaleString()}) · {c.travelers.toLocaleString()} travelers</span>
        </div>

        {/* BADGES */}
        <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:14 }}>
          <span style={{ background:"rgba(82,183,136,.1)", border:"1px solid rgba(82,183,136,.3)", color:"#3a9e6e", borderRadius:6, padding:"3px 9px", fontSize:10, fontFamily:"'Josefin Sans',sans-serif", fontWeight:600 }}>✓ {c.cancellation}</span>
          <span style={{ background:"rgba(201,168,76,.08)", border:"1px solid rgba(193,156,60,.25)", color:"#8B6010", borderRadius:6, padding:"3px 9px", fontSize:10, fontFamily:"'Josefin Sans',sans-serif", fontWeight:600 }}>🏨 {c.pickup}</span>
        </div>

        {/* PRICE + CTA */}
        <div style={{ borderTop:"1px solid rgba(193,156,60,.12)", paddingTop:14, display:"flex", justifyContent:"space-between", alignItems:"flex-end" }}>
          <div>
            {c.priceOriginal && <div style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:11, color:"#9C7A3C", textDecoration:"line-through" }}>US$ {c.priceOriginal.toFixed(2)}</div>}
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:22, fontWeight:700, color:"#8B6010" }}>US$ {c.price.toFixed(2)}</div>
            <div style={{ fontSize:10, color:"#9C7A3C", fontFamily:"'Josefin Sans',sans-serif" }}>per person</div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            <a href={c.civitatis} target="_blank" rel="noreferrer" style={{ background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)", color:"#1B130A", border:"none", borderRadius:10, padding:"11px 20px", cursor:"pointer", fontWeight:700, fontSize:11, letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", boxShadow:"0 5px 18px rgba(160,120,40,.3)", textDecoration:"none", display:"block", textAlign:"center" }}>Book on Civitatis</a>
            <button onClick={() => onView(c)} style={{ background:"transparent", border:"1.5px solid rgba(160,120,40,.3)", color:"#8B6010", borderRadius:10, padding:"8px 16px", cursor:"pointer", fontSize:11, letterSpacing:"0.1em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif" }}>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── DETAIL MODAL ─────────────────────────────────────────────
function DetailModal({ cruise, onClose }) {
  if (!cruise) return null;
  return (
    <div className="av-modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="av-modal">
        {/* HEADER */}
        <div style={{ position:"relative", height:230, overflow:"hidden" }}>
          <img src={cruise.img} alt={cruise.title} style={{ width:"100%", height:"100%", objectFit:"cover" }}
            onError={e => e.target.src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"}/>
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(20,15,8,.75) 0%,rgba(20,15,8,.1) 60%)" }}/>
          <button onClick={onClose} style={{ position:"absolute", top:14, right:14, background:"rgba(250,246,237,.92)", border:"none", borderRadius:8, width:34, height:34, cursor:"pointer", fontSize:16, color:"#8B6010" }}>✕</button>
          <div style={{ position:"absolute", bottom:16, left:20, right:20 }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
              <span style={{ background:"linear-gradient(135deg,#A07828,#C9A84C)", color:"#FAF6ED", borderRadius:6, padding:"3px 9px", fontSize:13, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>{cruise.rating}</span>
              <Stars rating={cruise.rating}/>
              <span style={{ fontSize:11, color:"rgba(250,246,237,.8)", fontFamily:"'Josefin Sans',sans-serif" }}>{cruise.reviews.toLocaleString()} reviews · {cruise.travelers.toLocaleString()} travelers</span>
            </div>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:20, fontWeight:700, color:"#FAF6ED", lineHeight:1.3 }}>{cruise.title}</div>
          </div>
        </div>

        {/* BODY */}
        <div style={{ padding:"24px 28px 28px" }}>
          {/* INFO CHIPS */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, marginBottom:22 }}>
            {[["⏱️","Duration",cruise.nights],["📍","Route",cruise.route],["🚢","Ships",cruise.ships5star[0]+" or similar"]].map(([ic,l,v]) => (
              <div key={l} style={{ background:"rgba(201,168,76,.06)", border:"1px solid rgba(193,156,60,.18)", borderRadius:10, padding:"12px 14px" }}>
                <div style={{ fontSize:9, color:"#A07828", letterSpacing:"0.15em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", fontWeight:700, marginBottom:4 }}>{ic} {l}</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:13, color:"#231A0E", lineHeight:1.4 }}>{v}</div>
              </div>
            ))}
          </div>

          {/* SHIP CATEGORIES */}
          {cruise.ships5premium.length > 0 && (
            <div style={{ background:"rgba(201,168,76,.06)", border:"1px solid rgba(193,156,60,.2)", borderRadius:12, padding:"16px 18px", marginBottom:22 }}>
              <div style={{ fontSize:10, color:"#A07828", letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", marginBottom:10 }}>🚢 Ship Categories</div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                <div>
                  <div style={{ fontSize:11, fontWeight:700, color:"#231A0E", fontFamily:"'Josefin Sans',sans-serif", marginBottom:5 }}>5★ Standard</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:12.5, color:"rgba(35,26,14,.65)", lineHeight:1.6 }}>{cruise.ships5star.slice(0,4).join(", ")} or similar</div>
                </div>
                <div>
                  <div style={{ fontSize:11, fontWeight:700, color:"#A07828", fontFamily:"'Josefin Sans',sans-serif", marginBottom:5 }}>5★ Premium</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:12.5, color:"rgba(35,26,14,.65)", lineHeight:1.6 }}>{cruise.ships5premium.slice(0,4).join(", ")} or similar</div>
                </div>
              </div>
              <div style={{ fontSize:11, fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"#9C7A3C", marginTop:8 }}>* Specific boat assigned 1 week before departure</div>
            </div>
          )}

          {/* ITINERARY */}
          <div style={{ marginBottom:22 }}>
            <div style={{ fontSize:10, color:"#A07828", letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", marginBottom:14 }}>📅 Itinerary</div>
            {cruise.itinerary.map((day, i) => (
              <div key={i} style={{ display:"flex", gap:14, marginBottom:14 }}>
                <div style={{ width:40, height:40, background:"linear-gradient(135deg,#A07828,#C9A84C)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0 }}>{day.icon}</div>
                <div>
                  <div style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:10, fontWeight:700, color:"#A07828", letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:2 }}>{day.day} — {day.title}</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:13.5, color:"rgba(35,26,14,.72)", lineHeight:1.75 }}>{day.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* INCLUDES / EXCLUDES */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, marginBottom:24 }}>
            <div>
              <div style={{ fontSize:10, color:"#52B788", letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", marginBottom:10 }}>✓ Included</div>
              {cruise.includes.map((inc,i) => <div key={i} className="av-inc yes">{inc}</div>)}
            </div>
            <div>
              <div style={{ fontSize:10, color:"#E63946", letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", marginBottom:10 }}>✗ Not Included</div>
              {cruise.notIncludes.map((exc,i) => <div key={i} className="av-inc no">{exc}</div>)}
            </div>
          </div>

          {/* CANCELLATION */}
          <div style={{ background:"rgba(82,183,136,.08)", border:"1px solid rgba(82,183,136,.25)", borderRadius:10, padding:"12px 16px", marginBottom:20 }}>
            <span style={{ fontSize:12, color:"#3a9e6e", fontFamily:"'Josefin Sans',sans-serif", fontWeight:700 }}>✓ {cruise.cancellation}</span>
          </div>

          {/* CTA */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:14 }}>
            <div>
              {cruise.priceOriginal && <div style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:12, color:"#9C7A3C", textDecoration:"line-through" }}>US$ {cruise.priceOriginal.toFixed(2)}</div>}
              <div style={{ fontFamily:"'Cinzel',serif", fontSize:28, fontWeight:700, color:"#8B6010" }}>US$ {cruise.price.toFixed(2)}</div>
              <div style={{ fontSize:11, color:"#9C7A3C", fontFamily:"'Josefin Sans',sans-serif" }}>per person · via Civitatis</div>
            </div>
            <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
              <a href={cruise.civitatis} target="_blank" rel="noreferrer" style={{ background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)", color:"#1B130A", borderRadius:11, padding:"13px 24px", textDecoration:"none", fontWeight:700, fontSize:12, letterSpacing:"0.14em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", boxShadow:"0 6px 22px rgba(160,120,40,.3)" }}>Book on Civitatis →</a>
              <a href={waLink(`I'm interested in: ${cruise.title}`)} target="_blank" rel="noreferrer" style={{ background:"#25D366", color:"#fff", borderRadius:11, padding:"13px 18px", textDecoration:"none", fontWeight:700, fontSize:12, fontFamily:"'Josefin Sans',sans-serif", display:"flex", alignItems:"center", gap:7 }}>💬 Ask Us</a>
            </div>
          </div>

          <div style={{ marginTop:14, textAlign:"center", fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:12, color:"#9C7A3C" }}>
            Powered by <strong>Civitatis</strong> — secure booking, instant confirmation, free cancellation
          </div>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════
//  MAIN PAGE
// ════════════════════════════════════════════════════════════
export default function NileCruises() {
  const navigate = useNavigate();
  const langProps = useGoogleTranslate();
  const [scrolled, setSc]   = useState(false);
  const [mMenu,    setMMenu]= useState(false);
  const [cat,      setCat]  = useState("all");
  const [detail,   setDetail]= useState(null);
  const [vis,      setVis]  = useState({});

  useEffect(() => {
    const fn = () => setSc(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setVis(v => ({ ...v, [e.target.dataset.v]: true })); });
    }, { threshold:.08 });
    document.querySelectorAll("[data-v]").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const reveal = (key, delay=0) => ({
    opacity: vis[key] ? 1 : 0,
    transform: vis[key] ? "none" : "translateY(26px)",
    transition: `opacity .7s ease ${delay}s, transform .7s ease ${delay}s`,
  });

  const filtered = cat === "all" ? CRUISES : CRUISES.filter(c => catMap[c.id] === cat);

  const totalReviews = CRUISES.reduce((a,c) => a+c.reviews, 0);
  const totalTravelers = CRUISES.reduce((a,c) => a+c.travelers, 0);

  return (
    <div style={{ background:"#FAF6ED", color:"#231A0E", minHeight:"100vh", overflowX:"hidden", fontFamily:"'Josefin Sans',sans-serif" }}>
      <style>{SHARED_CSS + PAGE_CSS}</style>
      <div id="gt-hidden" style={{ display:"none" }}/>

      <Nav scrolled={scrolled} mMenu={mMenu} setMMenu={setMMenu} activePath="/nile-cruises" langProps={langProps}/>
      <MobileMenu open={mMenu} setMMenu={setMMenu} activePath="/nile-cruises" langProps={langProps}/>

      {/* ══════════ HERO ══════════ */}
      <section style={{ position:"relative", minHeight:"min(72vh,640px)", display:"flex", alignItems:"center", overflow:"hidden" }}>
        <img src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1600&q=80" alt="Nile Cruise"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", animation:"heroZoom 24s ease-in-out infinite alternate" }}
          onError={e => e.target.src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=80"}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(105deg,rgba(17,12,6,.92) 0%,rgba(17,12,6,.62) 45%,rgba(17,12,6,.18) 80%)" }}/>
        <div style={{ position:"relative", zIndex:2, width:"min(640px,92%)", padding:"clamp(60px,10vh,96px) clamp(20px,5vw,56px)" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(201,168,76,.1)", border:"1px solid rgba(193,156,60,.3)", borderRadius:20, padding:"6px 16px", marginBottom:18 }}>
            <span style={{ fontSize:12, color:"#E8C96D", fontFamily:"'Josefin Sans',sans-serif", fontWeight:700, letterSpacing:"0.1em", fontSize:10, textTransform:"uppercase" }}>Powered by Civitatis</span>
          </div>
          <h1 style={{ fontFamily:"'Cinzel',serif", fontWeight:700, lineHeight:1.1, marginBottom:18, fontSize:"clamp(30px,5.5vw,56px)" }}>
            <span style={{ display:"block", color:"#FAF6ED" }}>Nile Cruises,</span>
            <span style={{ display:"block", color:"#E8C96D", fontStyle:"italic" }}>Perfectly Curated.</span>
          </h1>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"clamp(14px,1.7vw,18px)", color:"rgba(250,246,237,.78)", lineHeight:1.75, marginBottom:32, maxWidth:460 }}>
            Handpicked Nile cruise experiences from Civitatis — verified reviews, instant booking, free cancellation.
          </p>
          <div style={{ display:"flex", gap:13, flexWrap:"wrap" }}>
            <button onClick={() => document.getElementById("cruises")?.scrollIntoView({ behavior:"smooth" })} style={{ background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)", color:"#1B130A", border:"none", borderRadius:10, padding:"14px 28px", cursor:"pointer", fontWeight:700, fontSize:12, letterSpacing:"0.16em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", boxShadow:"0 8px 28px rgba(160,120,40,.4)" }}>See All Cruises</button>
            <a href={waLink("I want help choosing a Nile cruise")} target="_blank" rel="noreferrer" style={{ background:"rgba(250,246,237,.08)", border:"1.5px solid rgba(250,246,237,.55)", color:"#FAF6ED", borderRadius:10, padding:"14px 22px", textDecoration:"none", fontWeight:700, fontSize:12, letterSpacing:"0.14em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", backdropFilter:"blur(6px)" }}>💬 Ask an Expert</a>
          </div>
          {/* STATS */}
          <div style={{ display:"flex", gap:24, marginTop:36, flexWrap:"wrap" }}>
            {[[`${totalTravelers.toLocaleString()}+`,"Travelers"],[`${totalReviews.toLocaleString()}+`,"Reviews"],["Free","Cancellation"],["48h","Refund Policy"]].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:17, fontWeight:700, color:"#E8C96D" }}>{n}</div>
                <div style={{ fontSize:10, color:"rgba(250,246,237,.55)", letterSpacing:"0.1em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FILTER TABS ══════════ */}
      <div style={{ background:"#fff", borderBottom:"2px solid rgba(193,156,60,.15)", position:"sticky", top:80, zIndex:50 }}>
        <div style={{ maxWidth:1180, margin:"0 auto", padding:"0 clamp(16px,4vw,48px)", display:"flex", gap:0, overflowX:"auto" }}>
          {CATEGORIES.map(c => (
            <button key={c.id} className={`av-tab ${cat===c.id?"on":""}`} onClick={() => setCat(c.id)}>
              <span>{c.icon}</span><span>{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ══════════ CRUISES GRID ══════════ */}
      <section id="cruises" className="av-section">
        <div style={{ maxWidth:1180, margin:"0 auto" }}>
          <div style={{ marginBottom:"clamp(18px,3vw,30px)" }}>
            <span className="av-eyebrow">Nile Cruises — via Civitatis</span>
            <h2 className="av-title">{filtered.length} Cruise{filtered.length!==1?"s":""} Available</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(310px,1fr))", gap:24 }}>
            {filtered.map((c, i) => (
              <div key={c.id} data-v={`c${i}`} style={{ ...reveal(`c${i}`, i*.08) }}>
                <CruiseCard c={c} onView={setDetail}/>
              </div>
            ))}
          </div>

          {/* CIVITATIS CREDIT */}
          <div style={{ marginTop:36, textAlign:"center", padding:"20px", background:"rgba(201,168,76,.05)", border:"1px solid rgba(193,156,60,.15)", borderRadius:14 }}>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:14, color:"#9C7A3C" }}>
              All cruises are offered in partnership with <strong style={{ color:"#A07828" }}>Civitatis</strong> — {totalTravelers.toLocaleString()}+ travelers, verified reviews, secure payment, instant confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ WHY BOOK WITH US ══════════ */}
      <section style={{ background:"var(--cream2)", padding:"clamp(48px,7vw,80px) clamp(16px,4vw,48px)" }}>
        <div style={{ maxWidth:1180, margin:"0 auto" }}>
          <div data-v="why" style={{ textAlign:"center", marginBottom:"clamp(28px,4vw,48px)", ...reveal("why") }}>
            <span className="av-eyebrow">Why Book Through Us</span>
            <h2 className="av-title">Aurevian + Civitatis = <em style={{ fontStyle:"italic", color:"#8B6010" }}>Best of Both</em></h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:18 }}>
            {[
              { icon:"✅", title:"Verified Real Reviews", desc:`${totalReviews.toLocaleString()}+ genuine reviews from real travelers — no fake ratings.` },
              { icon:"🔄", title:"Free Cancellation", desc:"Cancel up to 48 hours before the cruise with a full refund. No questions asked." },
              { icon:"💳", title:"Secure Online Booking", desc:"Book directly on Civitatis — encrypted payment, instant confirmation email." },
              { icon:"🪪", title:"Licensed Egyptologist Guides", desc:"Every cruise includes a certified, professional guide fluent in multiple languages." },
              { icon:"🍽️", title:"Full Board Included", desc:"All meals (breakfast, lunch, dinner) are included in your cruise fare." },
              { icon:"💬", title:"Expert Support from Us", desc:"Questions before or during your trip? WhatsApp Aurevian Tours 24/7 for personal advice." },
            ].map((w, i) => (
              <div key={i} data-v={`wh${i}`} style={{ background:"#fff", borderRadius:14, border:"1px solid rgba(35,26,14,.08)", padding:"22px 20px", boxShadow:"0 6px 20px rgba(35,26,14,.06)", ...reveal(`wh${i}`, i*.07) }}>
                <div style={{ fontSize:26, marginBottom:12 }}>{w.icon}</div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:13, fontWeight:700, color:"#231A0E", marginBottom:8 }}>{w.title}</div>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:13.5, color:"rgba(35,26,14,.65)", lineHeight:1.75 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section style={{ background:"#171009", padding:"clamp(52px,7vw,88px) clamp(16px,4vw,48px)", textAlign:"center" }}>
        <div style={{ maxWidth:700, margin:"0 auto" }}>
          <HieroglyphFrieze tone="dark"/>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(22px,3vw,32px)", fontWeight:700, color:"#FAF6ED", margin:"28px 0 14px" }}>
            Not Sure Which Cruise to Choose?
          </h2>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"rgba(250,246,237,.6)", fontSize:15, marginBottom:32, lineHeight:1.75 }}>
            Our Egypt specialists will help you pick the perfect cruise based on your dates, budget, and travel style — completely free.
          </p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <a href={waLink("I need help choosing a Nile cruise")} target="_blank" rel="noreferrer" style={{ background:"#25D366", color:"#fff", borderRadius:10, padding:"14px 28px", textDecoration:"none", fontWeight:700, fontSize:12, letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif" }}>💬 WhatsApp Expert</a>
            <button onClick={() => navigate("/ai")} style={{ background:"linear-gradient(135deg,#A07828,#C9A84C)", color:"#FAF6ED", border:"none", borderRadius:10, padding:"14px 26px", cursor:"pointer", fontWeight:700, fontSize:12, letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif" }}>🤖 AI Trip Builder</button>
            <button onClick={() => navigate("/contact")} style={{ background:"rgba(201,168,76,.1)", border:"1.5px solid rgba(193,156,60,.3)", color:"#E8C96D", borderRadius:10, padding:"14px 22px", cursor:"pointer", fontWeight:700, fontSize:12, letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif" }}>Contact Us →</button>
          </div>
        </div>
      </section>

      <Footer/>
      <FloatingButtons/>

      {/* MODAL */}
      {detail && <DetailModal cruise={detail} onClose={() => setDetail(null)}/>}
    </div>
  );
}