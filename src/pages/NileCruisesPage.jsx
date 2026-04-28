// ============================================================
//  src/pages/NileCruisesPage.jsx
//  ضيف في:  src/pages/NileCruisesPage.jsx
//  Route:   /nile-cruises
// ============================================================

import { useState } from "react";
import { useNavigate } from "react-router-dom";
// ─────────────────────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────────────────────
const TIERS = [
  {
    id: "standard",
    label: "Standard",
    labelAr: "ستاندرد",
    tagline: "Comfort on the Sacred Nile",
    icon: "⛵",
    color: "#C9A84C",
    priceFrom: 299,
    hero: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=85",
    features: ["Air-conditioned cabins","Daily buffet meals","Egyptologist guide","Sun deck","Evening entertainment"],
    ships: [
      {
        name: "MS Nile Premium",
        img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=500&q=80",
        stars: 3,
        desc: "A well-maintained 3-star vessel offering comfortable cabins and traditional Egyptian hospitality on the Nile.",
      },
      {
        name: "MS Royal Lotus",
        img: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=500&q=80",
        stars: 3,
        desc: "Classic Nile cruiser with panoramic sun deck, friendly crew and authentic local cuisine.",
      },
    ],
    itineraries: [
      {
        id: "std-lux-asw",
        title: "Luxor to Aswan — 4 Days / 3 Nights",
        direction: "Luxor → Aswan",
        duration: "4 days",
        price: 299,
        img: "https://images.unsplash.com/photo-1601921004897-b7d582836990?w=500&q=80",
        days: [
          { day: 1, title: "Luxor East Bank", time: "Morning", activities: ["Karnak Temple Complex — the greatest temple ever built", "Luxor Temple illuminated at night", "Board your cruise ship, welcome dinner"] },
          { day: 2, title: "Luxor West Bank", time: "Full Day", activities: ["Valley of the Kings — enter 3 royal tombs", "Temple of Hatshepsut carved into the cliff", "Colossi of Memnon standing guard", "Sail south towards Esna"] },
          { day: 3, title: "Edfu & Kom Ombo", time: "Full Day", activities: ["Edfu — best-preserved temple in Egypt dedicated to Horus", "Kom Ombo — unique double temple of Sobek & Horus", "Sail to Aswan overnight"] },
          { day: 4, title: "Aswan", time: "Morning", activities: ["Aswan High Dam panoramic view", "Philae Temple of Isis by motorboat", "Unfinished Obelisk", "Disembark & transfer to hotel"] },
        ],
      },
      {
        id: "std-asw-lux",
        title: "Aswan to Luxor — 5 Days / 4 Nights",
        direction: "Aswan → Luxor",
        duration: "5 days",
        price: 349,
        img: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=500&q=80",
        days: [
          { day: 1, title: "Aswan", time: "Afternoon", activities: ["Board ship in Aswan", "Philae Temple of Isis — island temple by motorboat", "Welcome cocktails and orientation dinner"] },
          { day: 2, title: "Abu Simbel (Optional)", time: "Early Morning", activities: ["Optional excursion to Abu Simbel temples of Ramesses II", "Return to ship", "Sail north past Nubian villages"] },
          { day: 3, title: "Kom Ombo & Edfu", time: "Full Day", activities: ["Kom Ombo Temple at sunrise — magical light on the reliefs", "Edfu Temple of Horus — Egypt's best-preserved ancient temple", "Sail to Luxor overnight"] },
          { day: 4, title: "Luxor West Bank", time: "Full Day", activities: ["Valley of the Kings — 3 tombs including Tutankhamun", "Hatshepsut's mortuary temple", "Colossi of Memnon", "Traditional Egyptian dinner on board"] },
          { day: 5, title: "Luxor East Bank", time: "Morning", activities: ["Karnak Temple — walk between 134 colossal columns", "Luxor Temple", "Disembark and transfer"] },
        ],
      },
    ],
  },
  {
    id: "luxury",
    label: "Luxury",
    labelAr: "لاكشري",
    tagline: "Timeless Elegance on the Nile",
    icon: "🛳️",
    color: "#E8C96D",
    priceFrom: 699,
    hero: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85",
    features: ["Deluxe & suite cabins","Gourmet à la carte dining","Private Egyptologist","Spa & wellness","Sundeck with pool","Butler service"],
    ships: [
      {
        name: "Mövenpick Royal Lily",
        img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&q=80",
        stars: 5,
        desc: "One of the Nile's most celebrated vessels — Swiss precision meets Egyptian grandeur. The Royal Lily features elegant suites, an outdoor pool, spa and exceptional cuisine.",
      },
      {
        name: "Steigenberger Minerva",
        img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&q=80",
        stars: 5,
        desc: "The Minerva combines European luxury with authentic Nile romance. Private balcony cabins, award-winning restaurant and a dedicated Egyptologist make this an unforgettable journey.",
      },
    ],
    itineraries: [
      {
        id: "lux-lux-asw",
        title: "Luxor to Aswan — 5 Days / 4 Nights",
        direction: "Luxor → Aswan",
        duration: "5 days",
        price: 699,
        img: "https://images.unsplash.com/photo-1601921004897-b7d582836990?w=500&q=80",
        days: [
          { day: 1, title: "Luxor — Arrival & East Bank", time: "Afternoon", activities: ["Private airport transfer to your 5-star ship", "Welcome Champagne reception on the sun deck", "Sunset visit to Luxor Temple with private guide", "Gourmet welcome dinner with Egyptologist presentation"] },
          { day: 2, title: "Luxor West Bank — The Royal Tombs", time: "Full Day", activities: ["Exclusive early-access to Valley of the Kings before crowds", "Private tomb of Seti I (special permit)", "Temple of Hatshepsut — dawn light on the cliffs", "Colossi of Memnon & alabaster workshops", "Afternoon spa treatment while sailing south"] },
          { day: 3, title: "Karnak & Esna", time: "Full Day", activities: ["Karnak Temple Complex — private evening torchlit tour", "Sound & Light Show exclusive VIP seating", "Esna lock passage — fascinating engineering spectacle", "Chef's table dinner with wine pairing"] },
          { day: 4, title: "Edfu & Kom Ombo", time: "Full Day", activities: ["Edfu Temple of Horus at sunrise — completely deserted", "Private felucca sailing experience on the Nile", "Kom Ombo at sunset — dramatic light on twin temples", "Nubian musician performance on the sun deck"] },
          { day: 5, title: "Aswan — Farewell", time: "Morning", activities: ["Philae Temple of Isis — private motorboat transfer", "Aswan High Dam & panoramic Lake Nasser views", "Optional hot air balloon sunrise (additional cost)", "Farewell brunch and disembarkation"] },
        ],
      },
      {
        id: "lux-asw-lux",
        title: "Aswan to Luxor — 7 Days / 6 Nights",
        direction: "Aswan → Luxor",
        duration: "7 days",
        price: 999,
        img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=500&q=80",
        days: [
          { day: 1, title: "Aswan Embarkation", time: "Afternoon", activities: ["Private transfer to ship from Aswan Airport", "Champagne welcome & cabin orientation", "Nubian village visit by private felucca", "Sunset dinner on the sun deck — views of Elephantine Island"] },
          { day: 2, title: "Abu Simbel by Private Charter", time: "Full Day", activities: ["Private flight to Abu Simbel temples (included)", "Private guided tour before public groups arrive", "Great Temple of Ramesses II & Temple of Nefertari", "Return flight and afternoon at leisure on ship"] },
          { day: 3, title: "Aswan Temples & Nubia", time: "Full Day", activities: ["Philae Temple — private motorboat at dawn", "Kitchener's Island Botanical Garden", "Nubian Museum — world-class collection", "Private dinner in a Nubian home (special experience)"] },
          { day: 4, title: "Kom Ombo & Sailing", time: "Full Day", activities: ["Kom Ombo at sunrise — completely private", "Crocodile mummies in the on-site museum", "Afternoon sailing past sugar cane fields", "Cooking class with the ship's chef"] },
          { day: 5, title: "Edfu", time: "Morning", activities: ["Edfu Temple by horse-drawn carriage (traditional style)", "Complete temple complex with private Egyptologist", "Afternoon pool & spa on the sun deck", "Wine & cheese evening event"] },
          { day: 6, title: "Luxor West Bank", time: "Full Day", activities: ["Valley of the Kings — 4 tombs including private access", "KV5 tomb of the sons of Ramesses (special permit)", "Medinet Habu mortuary temple — rarely visited", "Sunset felucca on the Nile"] },
          { day: 7, title: "Luxor East Bank & Farewell", time: "Morning", activities: ["Karnak Temple private dawn visit", "Luxor Museum — finest collection of New Kingdom art", "Farewell Champagne brunch", "Private transfer to Luxor Airport"] },
        ],
      },
    ],
  },
  {
    id: "superior",
    label: "Superior",
    labelAr: "سوبيريور",
    tagline: "The Ultimate Nile Dahabiya Experience",
    icon: "⚓",
    color: "#F5E6B8",
    priceFrom: 1499,
    hero: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=85",
    features: ["Private Dahabiya sailing vessel","All meals & premium drinks","Dedicated private Egyptologist","Maximum 12 guests only","Hot air balloon included","Total exclusivity"],
    ships: [
      {
        name: "Dahabiya Nour El Nil",
        img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=500&q=80",
        stars: 5,
        desc: "A handcrafted wooden dahabiya — the traditional Egyptian sailing boat favored by Victorian explorers. Maximum 8 cabins, total privacy, gourmet chef, and the most authentic Nile experience possible.",
      },
      {
        name: "Dahabiya Assouan",
        img: "https://images.unsplash.com/photo-1560275619-4cc5a455b0a6?w=500&q=80",
        stars: 5,
        desc: "An architectural masterpiece on water. Assouan carries just 10 guests through the most intimate stretches of the Nile, stopping at hidden temples inaccessible to larger ships.",
      },
    ],
    itineraries: [
      {
        id: "sup-lux-asw",
        title: "Luxor to Aswan — 8 Days / 7 Nights",
        direction: "Luxor → Aswan",
        duration: "8 days",
        price: 1499,
        img: "https://images.unsplash.com/photo-1601921004897-b7d582836990?w=500&q=80",
        days: [
          { day: 1, title: "Luxor — Private Embarkation", time: "Afternoon", activities: ["Private helicopter transfer from Luxor Airport to dahabiya", "Vintage Champagne welcome as the dahabiya sets sail", "Sunset viewing of Karnak from the water — impossible perspective", "Private Egyptologist welcome dinner presentation"] },
          { day: 2, title: "Luxor West Bank — Exclusive Access", time: "Full Day", activities: ["Valley of the Kings — private opening before any other visitors", "Seti I's tomb with special permit — most painted tomb in Egypt", "Nefertari's tomb (QV66) — $50 surcharge, worth every cent", "Afternoon anchored at Banana Island — private swimming"] },
          { day: 3, title: "Esna & Hidden Temples", time: "Full Day", activities: ["Temple of Khnum at Esna — recently fully restored and stunning", "Stop at isolated riverside villages inaccessible to large ships", "Private cooking class on deck — learn ancient Egyptian recipes", "Night moored at a deserted stretch of Nile — absolute silence"] },
          { day: 4, title: "Edfu — Dawn Arrival", time: "Full Day", activities: ["Arrive at Edfu before any other boats — completely alone", "Private 2-hour Edfu temple tour with torchlight exploration", "Horseback riding through surrounding villages", "Traditional Bedouin tent lunch on the riverbank"] },
          { day: 5, title: "Gebel Silsila — The Forgotten Quarry", time: "Full Day", activities: ["Gebel Silsila rock-cut shrines — almost never visited", "Swim in the Nile at a pristine private sandbank", "Sunset champagne on deck sailing south to Kom Ombo", "Stars over the Nile — astronomer presentation on deck"] },
          { day: 6, title: "Kom Ombo & Nubian Villages", time: "Full Day", activities: ["Kom Ombo temple at absolute dawn — just your group", "Visit a Nubian village accessible only by small boat", "Traditional Nubian lunch with a local family", "Evening Nubian music and storytelling on deck"] },
          { day: 7, title: "Aswan — City of the Sun", time: "Full Day", activities: ["Philae Temple — private morning visit by motorboat", "Aswan Botanical Garden on Kitchener's Island", "Nubian Museum private after-hours visit", "Final sunset felucca sailing around Elephantine Island"] },
          { day: 8, title: "Abu Simbel & Farewell", time: "Full Day", activities: ["Private charter flight to Abu Simbel (included in price)", "Temple of Ramesses II & Nefertari with no other tourists", "Return flight and farewell lunch on the dahabiya", "Private transfer to Aswan Airport with Egyptologist escort"] },
        ],
      },
      {
        id: "sup-asw-lux",
        title: "Aswan to Luxor — 10 Days / 9 Nights",
        direction: "Aswan → Luxor",
        duration: "10 days",
        price: 1899,
        img: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=500&q=80",
        days: [
          { day: 1,  title: "Aswan — The Gateway to Nubia", time: "Afternoon", activities: ["Private jet transfer to dahabiya (charter available)", "Champagne & Egyptian mezze welcome", "Sunset on the first cataract of the Nile", "Private Egyptologist dinner lecture on Nubian history"] },
          { day: 2,  title: "Abu Simbel — The Wonder", time: "Full Day",  activities: ["Dawn helicopter to Abu Simbel — see temples from the air", "3 hours at Abu Simbel with no other visitors present", "Return helicopter over Lake Nasser", "Afternoon at leisure — spa & pool deck"] },
          { day: 3,  title: "Aswan Temples & Nubia", time: "Full Day",  activities: ["Philae Temple private dawn motorboat visit", "Ancient granite quarries — see the Unfinished Obelisk", "Private Nubian village with homestay lunch", "Evening star-gazing — zero light pollution"] },
          { day: 4,  title: "Sailing North — Nubian Heartland", time: "Full Day",  activities: ["Pass through the most beautiful stretch of the Nile", "Swim at a pristine private sandbank", "Sketch & watercolour session inspired by the scenery", "Nubian musician sunset performance"] },
          { day: 5,  title: "Kom Ombo — Temple of Two Gods", time: "Full Day",  activities: ["Arrive at dawn — completely deserted", "Crocodile mummies private viewing", "Kayaking on the Nile at this iconic stretch", "Bedouin camp dinner on the west bank desert"] },
          { day: 6,  title: "Edfu — Egypt's Most Complete Temple", time: "Full Day",  activities: ["Edfu at sunrise from a privileged river perspective", "2-hour private torchlit temple exploration", "Horse-drawn carriage through Edfu market", "Afternoon anchored for open Nile swimming"] },
          { day: 7,  title: "Esna — The Forgotten Gem", time: "Full Day",  activities: ["Temple of Khnum — newest fully restored temple in Egypt", "Watch the dahabiya navigate the Esna lock", "Cooking class on deck with the ship's Egyptian chef", "Evening moored at a silent west bank field"] },
          { day: 8,  title: "Luxor West Bank", time: "Full Day",  activities: ["Valley of the Kings — 4 tombs, private opening", "KV5 special permit (largest tomb in Egypt)", "Medinet Habu — extraordinary painted battle reliefs", "Private sunset on the west bank dunes"] },
          { day: 9,  title: "Luxor East Bank", time: "Full Day",  activities: ["Karnak Temple — private dawn visit through all sanctuaries", "Luxor Museum private after-hours access", "Farewell gala dinner on deck — full Champagne service", "Egyptian musicians and folkloric entertainment"] },
          { day: 10, title: "Final Morning & Departure", time: "Morning", activities: ["Optional sunrise hot air balloon over Luxor (included)", "Farewell breakfast on the dahabiya", "Private transfer to Luxor Airport", "Egyptologist escort to departure gate"] },
        ],
      },
    ],
  },
];
// ─────────────────────────────────────────────────────────────
//  STARS
// ─────────────────────────────────────────────────────────────
function Stars({ n, color = "#C9A84C", size = 13 }) {
  return (
    <span style={{ color, fontSize: size, letterSpacing: 1 }}>
      {"★".repeat(n)}{"☆".repeat(5 - n)}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
//  ITINERARY MODAL
// ─────────────────────────────────────────────────────────────
function ItineraryModal({ itin, tier, onClose, onBook }) {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <>
      <style>{`
        @keyframes nc-in { from{opacity:0;transform:translateY(28px) scale(.97)} to{opacity:1;transform:none} }
        .nc-day-btn:hover { background:rgba(201,168,76,0.1) !important; }
        .nc-book-btn:hover { box-shadow:0 8px 32px rgba(201,168,76,0.5) !important; transform:translateY(-1px) !important; }
        .nc-modal-scroll::-webkit-scrollbar { width:4px }
        .nc-modal-scroll::-webkit-scrollbar-thumb { background:rgba(201,168,76,0.3);border-radius:2px }
      `}</style>
      <div onClick={e => e.target === e.currentTarget && onClose()} style={{ position:"fixed",inset:0,background:"rgba(0,0,0,0.92)",backdropFilter:"blur(14px)",zIndex:3000,display:"flex",alignItems:"center",justifyContent:"center",padding:16 }}>
        <div className="nc-modal-scroll" style={{ background:"linear-gradient(145deg,#0C0A14,#07050D)",border:`1px solid ${tier.color}44`,borderRadius:22,width:"min(740px,96vw)",maxHeight:"90vh",overflowY:"auto",boxShadow:`0 50px 120px rgba(0,0,0,0.95),0 0 80px ${tier.color}18`,animation:"nc-in .35s ease" }}>
          {/* Header */}
          <div style={{ position:"sticky",top:0,background:"linear-gradient(145deg,#0C0A14,#07050D)",zIndex:10,padding:"22px 26px 16px",borderBottom:`1px solid ${tier.color}18` }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start" }}>
              <div>
                <div style={{ color:tier.color,fontSize:9,fontFamily:"'Cinzel',serif",letterSpacing:3,textTransform:"uppercase",marginBottom:6 }}>{tier.icon} {tier.label} Cruise · {itin.direction}</div>
                <div style={{ color:"#EDE8D9",fontSize:18,fontFamily:"'Cinzel Decorative',serif",fontWeight:700,lineHeight:1.3 }}>{itin.title}</div>
                <div style={{ display:"flex",gap:12,marginTop:6,flexWrap:"wrap" }}>
                  <span style={{ color:"#9A7B3C",fontSize:12,fontFamily:"'Cinzel',serif" }}>⏱ {itin.duration}</span>
                  <span style={{ color:tier.color,fontSize:12,fontFamily:"'Cinzel Decorative',serif",fontWeight:700 }}>From ${itin.price} / person</span>
                </div>
              </div>
              <button onClick={onClose} style={{ background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"#7A7264",borderRadius:8,width:34,height:34,cursor:"pointer",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>✕</button>
            </div>
          </div>

          <div style={{ padding:"24px 26px" }}>
            {/* Day selector */}
            <div style={{ display:"flex",gap:6,overflowX:"auto",paddingBottom:12,marginBottom:20,scrollbarWidth:"none" }}>
              {itin.days.map((d, i) => (
                <button key={i} className="nc-day-btn" onClick={() => setActiveDay(i)}
                  style={{ flexShrink:0,background:activeDay===i?`${tier.color}18`:"rgba(255,255,255,0.03)",border:`1px solid ${activeDay===i?tier.color:"rgba(201,168,76,0.12)"}`,borderRadius:10,padding:"8px 14px",cursor:"pointer",transition:"all .2s" }}>
                  <div style={{ fontFamily:"'Cinzel',serif",fontSize:8,letterSpacing:2,color:activeDay===i?tier.color:"#7A7264",textTransform:"uppercase" }}>Day {d.day}</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:13,color:activeDay===i?"#EDE8D9":"#9A7B3C",marginTop:2,whiteSpace:"nowrap" }}>{d.title}</div>
                </button>
              ))}
            </div>

            {/* Active day */}
            {(() => {
              const d = itin.days[activeDay];
              return (
                <div style={{ background:`${tier.color}06`,border:`1px solid ${tier.color}18`,borderRadius:16,padding:"22px 24px",marginBottom:24,animation:"nc-in .3s ease" }}>
                  <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:16 }}>
                    <div style={{ width:48,height:48,borderRadius:"50%",background:`${tier.color}18`,border:`2px solid ${tier.color}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Cinzel Decorative',serif",fontSize:16,color:tier.color,fontWeight:700,flexShrink:0 }}>{d.day}</div>
                    <div>
                      <div style={{ color:"#EDE8D9",fontFamily:"'Cinzel Decorative',serif",fontSize:17,fontWeight:700 }}>{d.title}</div>
                      <div style={{ color:"#9A7B3C",fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:2,textTransform:"uppercase",marginTop:2 }}>⏰ {d.time}</div>
                    </div>
                  </div>
                  <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                    {d.activities.map((act, i) => (
                      <div key={i} style={{ display:"flex",gap:12,alignItems:"flex-start" }}>
                        <div style={{ width:6,height:6,borderRadius:"50%",background:tier.color,marginTop:8,flexShrink:0 }} />
                        <div style={{ color:"rgba(237,232,217,0.82)",fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:16,lineHeight:1.6 }}>{act}</div>
                      </div>
                    ))}
                  </div>
                  {/* Nav */}
                  <div style={{ display:"flex",justifyContent:"space-between",marginTop:18 }}>
                    <button onClick={() => setActiveDay(Math.max(0,activeDay-1))} disabled={activeDay===0} style={{ background:"transparent",border:`1px solid ${activeDay===0?"rgba(255,255,255,0.06)":tier.color+"44"}`,color:activeDay===0?"#3A2A10":tier.color,borderRadius:8,padding:"7px 16px",cursor:activeDay===0?"default":"pointer",fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:2,textTransform:"uppercase",opacity:activeDay===0?0.4:1 }}>← Prev Day</button>
                    <button onClick={() => setActiveDay(Math.min(itin.days.length-1,activeDay+1))} disabled={activeDay===itin.days.length-1} style={{ background:activeDay===itin.days.length-1?"transparent":`${tier.color}18`,border:`1px solid ${activeDay===itin.days.length-1?"rgba(255,255,255,0.06)":tier.color+"44"}`,color:activeDay===itin.days.length-1?"#3A2A10":tier.color,borderRadius:8,padding:"7px 16px",cursor:activeDay===itin.days.length-1?"default":"pointer",fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:2,textTransform:"uppercase",opacity:activeDay===itin.days.length-1?0.4:1 }}>Next Day →</button>
                  </div>
                </div>
              );
            })()}

            {/* Book button */}
            <div style={{ display:"flex",gap:10 }}>
              <button className="nc-book-btn" onClick={() => onBook(itin, tier)}
                style={{ flex:1,background:`linear-gradient(135deg,${tier.color},#8B6914)`,color:"#0A0704",border:"none",borderRadius:12,padding:"15px",fontFamily:"'Cinzel',serif",fontSize:10,letterSpacing:2.5,fontWeight:700,textTransform:"uppercase",cursor:"pointer",boxShadow:`0 6px 24px ${tier.color}44`,transition:"all .25s" }}>
                ✈ Book This Cruise — From ${itin.price}/person
              </button>
              <a href={`https://wa.me/201068257754?text=${encodeURIComponent(`🛳️ Nile Cruise Inquiry\n\nCruise: ${itin.title}\nTier: ${tier.label}\nPrice: From $${itin.price}/person\nDuration: ${itin.duration}\n\nPlease send me availability and booking details.`)}`}
                target="_blank" rel="noreferrer"
                style={{ background:"#25D366",color:"#fff",borderRadius:12,padding:"15px 18px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,textDecoration:"none",boxShadow:"0 4px 16px rgba(37,211,102,0.3)" }}>
                💬
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// ─────────────────────────────────────────────────────────────
//  BOOKING MODAL
// ─────────────────────────────────────────────────────────────
function CruiseBookingModal({ itin, tier, onClose }) {
  const [form, setForm] = useState({ name:"", email:"", phone:"", date:"", adults:"2", children:"0", notes:"" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const total = itin.price * parseInt(form.adults||1) + Math.round(itin.price*0.5) * parseInt(form.children||0);
  const waMsg = encodeURIComponent(`🛳️ *Nile Cruise Booking — Golden Egypt Tours*\n\n*Cruise:* ${itin.title}\n*Tier:* ${tier.label}\n*Date:* ${form.date}\n*Travelers:* ${form.adults} Adults, ${form.children} Children\n*Total:* $${total}\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Phone:* ${form.phone}\n*Notes:* ${form.notes||"None"}`);
  const submit = async () => {
    setLoading(true);
    try { await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"cruise",...itin,...form,total,tier:tier.label})}); } catch(_){}
    setLoading(false); setSent(true);
  };
  return (
    <div onClick={e=>e.target===e.currentTarget&&onClose()} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.9)",backdropFilter:"blur(12px)",zIndex:4000,display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
      <div style={{background:"linear-gradient(145deg,#0C0A14,#07050D)",border:`1px solid ${tier.color}44`,borderRadius:20,width:"min(500px,96vw)",maxHeight:"90vh",overflowY:"auto",boxShadow:`0 40px 100px rgba(0,0,0,0.9)`}}>
        <div style={{padding:"20px 24px 14px",borderBottom:`1px solid ${tier.color}18`,display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <div style={{color:tier.color,fontSize:8,fontFamily:"'Cinzel',serif",letterSpacing:3,textTransform:"uppercase",marginBottom:5}}>{tier.icon} {tier.label} Cruise Booking</div>
            <div style={{color:"#EDE8D9",fontSize:15,fontFamily:"'Cinzel Decorative',serif",fontWeight:700,lineHeight:1.3,maxWidth:340}}>{itin.title}</div>
          </div>
          <button onClick={onClose} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"#7A7264",borderRadius:8,width:32,height:32,cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
        </div>
        <div style={{padding:"20px 24px"}}>
          {sent ? (
            <div style={{textAlign:"center",padding:"10px 0 16px"}}>
              <div style={{fontSize:56,marginBottom:12}}>🎉</div>
              <div style={{color:tier.color,fontFamily:"'Cinzel Decorative',serif",fontSize:18,marginBottom:8}}>Booking Sent!</div>
              <div style={{color:"rgba(237,232,217,0.7)",fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:15,lineHeight:1.7,marginBottom:20}}>Our Nile cruise specialist will contact you within 2 hours.</div>
              <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
                <a href={`https://wa.me/201068257754?text=${waMsg}`} target="_blank" rel="noreferrer" style={{background:"#25D366",color:"#fff",borderRadius:10,padding:"10px 18px",textDecoration:"none",fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:1.5,fontWeight:700,textTransform:"uppercase"}}>💬 WhatsApp</a>
                <button onClick={onClose} style={{background:"rgba(201,168,76,0.1)",border:`1px solid ${tier.color}33`,color:tier.color,borderRadius:10,padding:"10px 18px",cursor:"pointer",fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:1.5}}>Close</button>
              </div>
            </div>
          ) : (
            <>
              <div style={{background:`${tier.color}08`,border:`1px solid ${tier.color}18`,borderRadius:10,padding:"12px 16px",marginBottom:16,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{color:"#9A7B3C",fontSize:12,fontFamily:"'Cinzel',serif"}}>⏱ {itin.duration}</div>
                <div style={{color:tier.color,fontFamily:"'Cinzel Decorative',serif",fontSize:20,fontWeight:700}}>${total}</div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                {[{k:"name",l:"Full Name",t:"text",col:"1/-1"},{k:"email",l:"Email",t:"email"},{k:"phone",l:"Phone/WhatsApp",t:"tel"},{k:"date",l:"Start Date",t:"date"},{k:"adults",l:"Adults",t:"number"},{k:"children",l:"Children",t:"number"}].map(f=>(
                  <div key={f.k} style={{gridColumn:f.col||"auto"}}>
                    <label style={{display:"block",color:"#9A7B3C",fontSize:8,fontFamily:"'Cinzel',serif",letterSpacing:2,textTransform:"uppercase",marginBottom:4}}>{f.l}</label>
                    <input type={f.t} value={form[f.k]} min={f.k==="adults"?1:0} onChange={e=>setForm(p=>({...p,[f.k]:e.target.value}))} style={{width:"100%",background:"rgba(255,255,255,0.03)",border:`1px solid ${tier.color}22`,borderRadius:8,color:"#EDE8D9",padding:"10px 12px",fontSize:14,fontFamily:"'Cormorant Garamond',Georgia,serif",outline:"none"}}/>
                  </div>
                ))}
                <div style={{gridColumn:"1/-1"}}>
                  <label style={{display:"block",color:"#9A7B3C",fontSize:8,fontFamily:"'Cinzel',serif",letterSpacing:2,textTransform:"uppercase",marginBottom:4}}>Special Requests</label>
                  <textarea rows={2} value={form.notes} onChange={e=>setForm(p=>({...p,notes:e.target.value}))} placeholder="Dietary needs, anniversary, accessibility..." style={{width:"100%",background:"rgba(255,255,255,0.03)",border:`1px solid ${tier.color}22`,borderRadius:8,color:"#EDE8D9",padding:"10px 12px",fontSize:14,fontFamily:"'Cormorant Garamond',Georgia,serif",outline:"none",resize:"none"}}/>
                </div>
              </div>
              <div style={{display:"flex",gap:10,marginTop:16}}>
                <button disabled={loading||!form.name||!form.email||!form.date} onClick={submit} style={{flex:1,background:`linear-gradient(135deg,${tier.color},#8B6914)`,color:"#0A0704",border:"none",borderRadius:10,padding:"13px",fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:2,fontWeight:700,textTransform:"uppercase",cursor:(!form.name||!form.email||!form.date)?"not-allowed":"pointer",opacity:(!form.name||!form.email||!form.date)?0.4:1}}>
                  {loading?"⏳ Sending...":"✈ Confirm Booking"}
                </button>
                <a href={`https://wa.me/201068257754?text=${waMsg}`} target="_blank" rel="noreferrer" style={{background:"#25D366",color:"#fff",borderRadius:10,padding:"13px 16px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,textDecoration:"none"}}>💬</a>
              </div>
              <p style={{color:"#7A7264",fontSize:11,textAlign:"center",marginTop:10,fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic"}}>Free cancellation up to 48 hours · No charge until confirmed</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  MAIN PAGE
// ─────────────────────────────────────────────────────────────
export default function NileCruisesPage() {
  const [activeTier,  setActiveTier]  = useState(null);
  const [activeItin,  setActiveItin]  = useState(null);
  const [bookItin,    setBookItin]    = useState(null);
  const [bookTier,    setBookTier]    = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={{ background:"#07050D",minHeight:"100vh",color:"#EDE8D9",fontFamily:"'Cormorant Garamond',Georgia,serif",overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap');
        @keyframes nc-hero-kbz { 0%{transform:scale(1);filter:brightness(.6)} 100%{transform:scale(1.06);filter:brightness(.72)} }
        @keyframes nc-fadein { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        @keyframes nc-glyph { 0%,100%{opacity:.05;transform:translateY(0)} 50%{opacity:.12;transform:translateY(-14px)} }
        @keyframes nc-scan { 0%{transform:translateX(-100%)} 100%{transform:translateX(100vw)} }
        @keyframes nc-spin { to{transform:rotate(360deg)} }
        .nc-tier:hover .nc-tier-img { transform:scale(1.06) !important; }
        .nc-itin:hover { transform:translateY(-5px) !important; box-shadow:0 20px 60px rgba(0,0,0,0.6) !important; }
        .nc-ship:hover { border-color:rgba(201,168,76,0.4) !important; }
        ::-webkit-scrollbar{width:5px} ::-webkit-scrollbar-track{background:#07050D} ::-webkit-scrollbar-thumb{background:rgba(201,168,76,0.2);border-radius:3px}
      `}</style>

      {/* ── HERO ── */}
      <div style={{ position:"relative",height:"70vh",minHeight:480,overflow:"hidden",display:"flex",alignItems:"flex-end" }}>
        <div style={{ position:"absolute",inset:"-5%",backgroundImage:"url(https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1800&q=90)",backgroundSize:"cover",backgroundPosition:"center",animation:"nc-hero-kbz 18s ease-in-out infinite alternate" }} />
        <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,rgba(7,5,13,1) 0%,rgba(7,5,13,.6) 35%,rgba(7,5,13,.1) 70%,transparent 100%)" }} />
        <div style={{ position:"absolute",inset:0,background:"radial-gradient(ellipse at 30% 80%,rgba(201,168,76,0.1),transparent 65%)" }} />
        {/* Hieroglyph particles */}
        {["𓂀","𓃭","𓆑","𓇋","𓅓","𓏏","𓈖","𓆣"].map((g,i)=>(
          <span key={i} style={{ position:"absolute",color:"#C9A84C",fontSize:18+(i%4)*10,top:`${10+(i*11)%75}%`,left:`${5+(i*13)%90}%`,animation:`nc-glyph ${4+i%4}s ease-in-out infinite`,animationDelay:`${i*0.6}s`,pointerEvents:"none",userSelect:"none" }}>{g}</span>
        ))}
        {/* Scan line */}
        <div style={{ position:"absolute",top:"40%",left:0,height:1,width:"100%",background:"linear-gradient(to right,transparent,rgba(201,168,76,0.4),transparent)",animation:"nc-scan 4s ease-in-out infinite",pointerEvents:"none" }} />
        <div style={{ position:"relative",zIndex:2,padding:"0 48px 52px",animation:"nc-fadein .9s ease" }}>
          <div style={{ color:"#C9A84C",fontSize:9,fontFamily:"'Cinzel',serif",letterSpacing:5,textTransform:"uppercase",marginBottom:10,display:"flex",alignItems:"center",gap:12 }}>
            <span style={{ width:32,height:1,background:"#C9A84C",display:"inline-block" }} />
            Golden Egypt Tours · Nile Cruises
          </div>
          <h1 style={{ fontFamily:"'Cinzel Decorative',serif",fontSize:"clamp(36px,6vw,72px)",fontWeight:900,lineHeight:1.05,margin:"0 0 10px",background:"linear-gradient(135deg,#F0DC8A,#C9A84C,#FFE599,#B8902E)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
            Sail the Sacred Nile
          </h1>
          <p style={{ color:"rgba(237,232,217,0.65)",fontSize:"clamp(15px,2vw,19px)",fontWeight:300,fontStyle:"italic",maxWidth:520,lineHeight:1.8,margin:"0 0 24px" }}>
            Three thousand years of history drifting past your cabin window. Choose your level of luxury.
          </p>
          <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
            {["Luxor → Aswan","Aswan → Luxor","Abu Simbel included","Private Dahabiya available"].map(b=>(
              <span key={b} style={{ background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.25)",borderRadius:20,padding:"5px 14px",color:"#C9A84C",fontSize:11,fontFamily:"'Cinzel',serif",letterSpacing:0.5 }}>✓ {b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── TIER SELECTOR HEADLINE ── */}
      <div style={{ textAlign:"center",padding:"52px 32px 40px" }}>
        <div style={{ color:"#C9A84C",fontSize:9,fontFamily:"'Cinzel',serif",letterSpacing:5,textTransform:"uppercase",marginBottom:10 }}>✦ Choose Your Experience</div>
        <h2 style={{ fontFamily:"'Cinzel Decorative',serif",fontSize:"clamp(24px,4vw,40px)",color:"#EDE8D9",margin:"0 0 10px" }}>Three Levels of Nile Luxury</h2>
        <p style={{ color:"#9A7B3C",fontSize:16,fontWeight:300,fontStyle:"italic",maxWidth:500,margin:"0 auto" }}>From comfortable classics to private sailing dahabiyas — every journey is extraordinary</p>
        <div style={{ height:1,background:"linear-gradient(to right,transparent,rgba(201,168,76,0.3),transparent)",maxWidth:400,margin:"24px auto 0" }} />
      </div>

      {/* ── TIER CARDS ── */}
      {!activeTier && (
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:24,padding:"0 32px 56px",maxWidth:1400,margin:"0 auto" }}>
          {TIERS.map((tier,i) => (
            <div key={tier.id} className="nc-tier"
              onMouseEnter={() => setHoveredCard(tier.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveTier(tier)}
              style={{ background:"rgba(18,14,22,0.9)",border:`1px solid ${hoveredCard===tier.id?tier.color+"66":tier.color+"22"}`,borderRadius:18,overflow:"hidden",cursor:"pointer",transition:"all .35s cubic-bezier(.25,.8,.25,1)",transform:hoveredCard===tier.id?"translateY(-8px)":"none",boxShadow:hoveredCard===tier.id?`0 32px 80px rgba(0,0,0,0.7),0 0 0 1px ${tier.color}44`:"0 8px 32px rgba(0,0,0,0.4)",animation:`nc-fadein .6s ease both`,animationDelay:`${i*0.15}s` }}>
              {/* Image */}
              <div style={{ position:"relative",height:220,overflow:"hidden" }}>
                <img className="nc-tier-img" src={tier.hero} alt={tier.label} style={{ width:"100%",height:"100%",objectFit:"cover",transition:"transform .5s ease" }} onError={e=>{e.target.src=`https://placehold.co/800x220/0C0A14/C9A84C?text=${tier.label}`}} />
                <div style={{ position:"absolute",inset:0,background:`linear-gradient(to top,rgba(7,5,13,.95) 0%,rgba(7,5,13,.3) 55%,transparent 100%)` }} />
                <div style={{ position:"absolute",inset:0,background:`radial-gradient(ellipse at 0% 100%,${tier.color}22,transparent 65%)` }} />
                <div style={{ position:"absolute",top:16,right:16,background:"rgba(7,5,13,0.8)",backdropFilter:"blur(10px)",border:`1px solid ${tier.color}33`,borderRadius:8,padding:"6px 14px",fontFamily:"'Cinzel Decorative',serif",color:tier.color,fontSize:18 }}>{tier.icon}</div>
                <div style={{ position:"absolute",bottom:16,left:18 }}>
                  <div style={{ fontFamily:"'Cinzel Decorative',serif",fontSize:26,fontWeight:900,color:tier.color,lineHeight:1,textShadow:`0 0 30px ${tier.color}88` }}>{tier.label}</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:14,color:"rgba(237,232,217,0.65)",fontStyle:"italic",marginTop:3 }}>{tier.tagline}</div>
                </div>
              </div>
              {/* Body */}
              <div style={{ padding:"20px 22px 24px" }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:16 }}>
                  <div>
                    <div style={{ color:"#9A7B3C",fontSize:9,fontFamily:"'Cinzel',serif",letterSpacing:2,textTransform:"uppercase" }}>Starting from</div>
                    <div style={{ fontFamily:"'Cinzel Decorative',serif",fontSize:28,color:tier.color,fontWeight:700,lineHeight:1 }}>${tier.priceFrom}<span style={{ fontSize:12,color:"#9A7B3C",fontFamily:"'Cinzel',serif" }}> /person</span></div>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    <div style={{ color:"#9A7B3C",fontSize:9,fontFamily:"'Cinzel',serif",letterSpacing:1,textTransform:"uppercase" }}>Itineraries</div>
                    <div style={{ fontFamily:"'Cinzel Decorative',serif",fontSize:22,color:"#EDE8D9" }}>{tier.itineraries.length}</div>
                  </div>
                </div>
                {/* Features */}
                <div style={{ display:"flex",flexDirection:"column",gap:7,marginBottom:20 }}>
                  {tier.features.map(f=>(
                    <div key={f} style={{ display:"flex",alignItems:"center",gap:10 }}>
                      <div style={{ width:5,height:5,borderRadius:"50%",background:tier.color,flexShrink:0 }} />
                      <span style={{ color:"rgba(237,232,217,0.75)",fontSize:14 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button style={{ width:"100%",background:`linear-gradient(135deg,${tier.color},#8B6914)`,color:"#0A0704",border:"none",borderRadius:10,padding:"12px",fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:2.5,fontWeight:700,textTransform:"uppercase",cursor:"pointer",boxShadow:`0 4px 20px ${tier.color}33`,transition:"all .25s" }}>
                  Explore {tier.label} Cruises →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── TIER DETAIL VIEW ── */}
      {activeTier && (
        <div style={{ maxWidth:1400,margin:"0 auto",padding:"0 32px 60px",animation:"nc-fadein .5s ease" }}>
          {/* Back + tier header */}
          <div style={{ display:"flex",alignItems:"center",gap:16,marginBottom:32,paddingTop:8,flexWrap:"wrap" }}>
            <button onClick={() => setActiveTier(null)} style={{ background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)",color:"#C9A84C",borderRadius:8,padding:"8px 16px",cursor:"pointer",fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:2,textTransform:"uppercase",transition:"all .2s" }}>← All Tiers</button>
            <div style={{ display:"flex",gap:8 }}>
              {TIERS.map(t=>(
                <button key={t.id} onClick={()=>setActiveTier(t)} style={{ background:t.id===activeTier.id?`${t.color}18`:"transparent",border:`1px solid ${t.id===activeTier.id?t.color:t.color+"33"}`,color:t.id===activeTier.id?t.color:"#9A7B3C",borderRadius:8,padding:"7px 16px",cursor:"pointer",fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:1.5,textTransform:"uppercase",transition:"all .2s" }}>{t.icon} {t.label}</button>
              ))}
            </div>
          </div>

          {/* Tier hero banner */}
          <div style={{ position:"relative",borderRadius:20,overflow:"hidden",height:260,marginBottom:40 }}>
            <img src={activeTier.hero} alt={activeTier.label} style={{ width:"100%",height:"100%",objectFit:"cover" }} onError={e=>{e.target.src=`https://placehold.co/1400x260/0C0A14/C9A84C?text=${activeTier.label}`}} />
            <div style={{ position:"absolute",inset:0,background:`linear-gradient(to right,rgba(7,5,13,.9) 0%,rgba(7,5,13,.4) 60%,transparent 100%)` }} />
            <div style={{ position:"absolute",bottom:32,left:36 }}>
              <div style={{ fontFamily:"'Cinzel Decorative',serif",fontSize:"clamp(28px,4vw,52px)",fontWeight:900,color:activeTier.color,textShadow:`0 0 40px ${activeTier.color}88`,lineHeight:1 }}>{activeTier.icon} {activeTier.label} Cruises</div>
              <div style={{ color:"rgba(237,232,217,0.65)",fontSize:16,fontStyle:"italic",marginTop:6 }}>{activeTier.tagline}</div>
              <div style={{ fontFamily:"'Cinzel Decorative',serif",fontSize:22,color:activeTier.color,marginTop:8 }}>From ${activeTier.priceFrom} / person</div>
            </div>
          </div>

          {/* Ships */}
          <div style={{ marginBottom:44 }}>
            <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:20 }}>
              <span style={{ color:activeTier.color,fontFamily:"'Cinzel',serif",fontSize:10,letterSpacing:3,textTransform:"uppercase" }}>✦ Featured Ships</span>
              <div style={{ flex:1,height:1,background:`linear-gradient(to right,${activeTier.color}30,transparent)` }} />
            </div>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:16 }}>
              {activeTier.ships.map((ship,i)=>(
                <div key={i} className="nc-ship" style={{ background:"rgba(18,14,22,0.9)",border:`1px solid ${activeTier.color}18`,borderRadius:14,overflow:"hidden",transition:"border-color .25s" }}>
                  <img src={ship.img} alt={ship.name} style={{ width:"100%",height:160,objectFit:"cover" }} onError={e=>{e.target.src=`https://placehold.co/280x160/0C0A14/C9A84C?text=${ship.name}`}} />
                  <div style={{ padding:"14px 16px" }}>
                    <div style={{ fontFamily:"'Cinzel Decorative',serif",fontSize:15,color:"#EDE8D9",fontWeight:700,marginBottom:4 }}>{ship.name}</div>
                    <Stars n={ship.stars} color={activeTier.color} size={12} />
                    <p style={{ color:"#9A7B3C",fontSize:14,lineHeight:1.65,marginTop:8,fontWeight:300 }}>{ship.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Itineraries */}
          <div>
            <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:20 }}>
              <span style={{ color:activeTier.color,fontFamily:"'Cinzel',serif",fontSize:10,letterSpacing:3,textTransform:"uppercase" }}>✦ Available Itineraries</span>
              <div style={{ flex:1,height:1,background:`linear-gradient(to right,${activeTier.color}30,transparent)` }} />
            </div>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:20 }}>
              {activeTier.itineraries.map((itin,i)=>(
                <div key={itin.id} className="nc-itin" style={{ background:"rgba(18,14,22,0.9)",border:`1px solid ${activeTier.color}22`,borderRadius:16,overflow:"hidden",transition:"all .3s",cursor:"pointer",animation:`nc-fadein .5s ease both`,animationDelay:`${i*0.1}s` }} onClick={()=>setActiveItin({itin,tier:activeTier})}>
                  <div style={{ position:"relative",height:180,overflow:"hidden" }}>
                    <img src={itin.img} alt={itin.title} style={{ width:"100%",height:"100%",objectFit:"cover",transition:"transform .5s" }} onError={e=>{e.target.src=`https://placehold.co/320x180/0C0A14/C9A84C?text=Cruise`}} />
                    <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,rgba(7,5,13,.92),transparent 60%)" }} />
                    <div style={{ position:"absolute",top:12,left:12,background:"rgba(7,5,13,0.8)",backdropFilter:"blur(8px)",border:`1px solid ${activeTier.color}33`,borderRadius:6,padding:"4px 12px",fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:1.5,color:activeTier.color,textTransform:"uppercase" }}>{itin.direction}</div>
                    <div style={{ position:"absolute",bottom:12,left:12,right:12,display:"flex",justifyContent:"space-between",alignItems:"flex-end" }}>
                      <div style={{ fontFamily:"'Cinzel',serif",fontSize:9,color:"rgba(237,232,217,0.7)",letterSpacing:1,textTransform:"uppercase" }}>⏱ {itin.duration}</div>
                      <div style={{ fontFamily:"'Cinzel Decorative',serif",fontSize:18,color:activeTier.color,fontWeight:700 }}>${itin.price}</div>
                    </div>
                  </div>
                  <div style={{ padding:"16px 18px 18px" }}>
                    <div style={{ fontFamily:"'Cinzel Decorative',serif",fontSize:15,color:"#EDE8D9",fontWeight:700,lineHeight:1.3,marginBottom:10 }}>{itin.title}</div>
                    <div style={{ display:"flex",flexDirection:"column",gap:6,marginBottom:14 }}>
                      {itin.days.slice(0,3).map((d,j)=>(
                        <div key={j} style={{ display:"flex",gap:10,alignItems:"flex-start" }}>
                          <span style={{ color:activeTier.color,fontSize:10,fontFamily:"'Cinzel',serif",minWidth:40,flexShrink:0 }}>Day {d.day}</span>
                          <span style={{ color:"#9A7B3C",fontSize:14 }}>{d.title}</span>
                        </div>
                      ))}
                      {itin.days.length > 3 && <div style={{ color:"#5A4A30",fontSize:12,fontFamily:"'Cinzel',serif",letterSpacing:1 }}>+{itin.days.length-3} more days...</div>}
                    </div>
                    <div style={{ display:"flex",gap:8 }}>
                      <button onClick={e=>{e.stopPropagation();setActiveItin({itin,tier:activeTier})}} style={{ flex:1,background:`${activeTier.color}14`,border:`1px solid ${activeTier.color}33`,color:activeTier.color,borderRadius:8,padding:"9px",fontFamily:"'Cinzel',serif",fontSize:8,letterSpacing:2,cursor:"pointer",textTransform:"uppercase",transition:"all .2s" }}>View Full Program</button>
                      <button onClick={e=>{e.stopPropagation();setBookItin(itin);setBookTier(activeTier)}} style={{ flex:1,background:`linear-gradient(135deg,${activeTier.color},#8B6914)`,color:"#0A0704",border:"none",borderRadius:8,padding:"9px",fontFamily:"'Cinzel',serif",fontSize:8,letterSpacing:2,cursor:"pointer",textTransform:"uppercase",fontWeight:700 }}>Book Now →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── CTA BANNER ── */}
      {!activeTier && (
        <div style={{ background:"linear-gradient(135deg,rgba(201,168,76,0.08),rgba(139,105,20,0.05))",border:"1px solid rgba(201,168,76,0.15)",borderRadius:20,margin:"0 32px 56px",padding:"clamp(2rem,5vw,3.5rem)",textAlign:"center",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",inset:0,backgroundImage:"url(https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=40)",backgroundSize:"cover",backgroundPosition:"center",opacity:0.04 }} />
          <div style={{ position:"relative" }}>
            <div style={{ fontSize:40,marginBottom:10 }}>𓂀</div>
            <h3 style={{ fontFamily:"'Cinzel Decorative',serif",fontSize:"clamp(20px,3vw,32px)",color:"#C9A84C",marginBottom:8 }}>Not Sure Which Cruise?</h3>
            <p style={{ color:"#9A7B3C",fontSize:16,marginBottom:24,fontWeight:300,fontStyle:"italic" }}>Our Nile specialists will find the perfect cruise for your dates and budget</p>
            <div style={{ display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap" }}>
              <a href="https://wa.me/201068257754?text=Hello!%20I'd%20like%20help%20choosing%20the%20right%20Nile%20cruise%20for%20my%20trip." target="_blank" rel="noreferrer"
                style={{ background:"#25D366",color:"#fff",borderRadius:10,padding:"12px 24px",textDecoration:"none",fontFamily:"'Cinzel',serif",fontSize:10,letterSpacing:2,fontWeight:700,textTransform:"uppercase",display:"flex",alignItems:"center",gap:8,boxShadow:"0 4px 20px rgba(37,211,102,0.35)" }}>
                💬 WhatsApp Our Cruise Experts
              </a>
              <a href="mailto:goldenegypttours26@gmail.com?subject=Nile Cruise Inquiry"
                style={{ background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.25)",color:"#C9A84C",borderRadius:10,padding:"12px 24px",textDecoration:"none",fontFamily:"'Cinzel',serif",fontSize:10,letterSpacing:2,fontWeight:700,textTransform:"uppercase" }}>
                📧 Email Us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp float */}
      <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer"
        style={{ position:"fixed",bottom:28,right:28,background:"#25D366",color:"#fff",borderRadius:50,padding:"12px 20px",textDecoration:"none",fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:1.5,fontWeight:700,display:"flex",alignItems:"center",gap:8,zIndex:500,boxShadow:"0 8px 32px rgba(37,211,102,0.4)",textTransform:"uppercase" }}>
        💬 Chat with us
      </a>

      {/* Itinerary Modal */}
      {activeItin && (
        <ItineraryModal itin={activeItin.itin} tier={activeItin.tier}
          onClose={() => setActiveItin(null)}
          onBook={(itin,tier) => { setBookItin(itin); setBookTier(tier); setActiveItin(null); }} />
      )}

      {/* Booking Modal */}
      {bookItin && bookTier && (
        <CruiseBookingModal itin={bookItin} tier={bookTier} onClose={() => { setBookItin(null); setBookTier(null); }} />
      )}
    </div>
  );
}