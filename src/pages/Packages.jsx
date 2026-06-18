import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

// ─── CONTACT ────────────────────────────────────────────────────
const PHONE_DISPLAY = "+20 106 825 4454";
const PHONE_WA      = "201068254454";
const EMAIL         = "aureviantours@gmail.com";
const waLink = (msg) => `https://wa.me/${PHONE_WA}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

// ─── CURRENCIES ─────────────────────────────────────────────────
const CURR = {
  USD:{s:"$",  r:1,     l:"USD — US Dollar"},
  EUR:{s:"€",  r:0.92,  l:"EUR — Euro"},
  GBP:{s:"£",  r:0.79,  l:"GBP — British Pound"},
  EGP:{s:"E£", r:48.5,  l:"EGP — Egyptian Pound"},
  SAR:{s:"SR", r:3.75,  l:"SAR — Saudi Riyal"},
  AED:{s:"AED",r:3.67,  l:"AED — UAE Dirham"},
};
const fmt = (p,cur) => `${CURR[cur]?.s||"$"}${Math.round(p*(CURR[cur]?.r||1)).toLocaleString()}`;

// ─── CATEGORY ───────────────────────────────────────────────────
const CAT_LABELS = {
  all:"All Packages", cruise:"Nile Cruises",
  "multi-city":"Multi-City", "short-break":"Short Breaks",
  desert:"Desert & Oases", adventure:"Adventure",
};
const CAT_ICONS = {all:"✦",cruise:"🚢","multi-city":"🗺️","short-break":"⚡",desert:"🏜️",adventure:"🎯"};

// ─── PACKAGES DATA ───────────────────────────────────────────────
const PACKAGES = [
  {
    id:"cruise-luxor-aswan",
    title:"Nile Cruise: Luxor to Aswan",
    subtitle:"5 Days · 4 Nights · Floating Palace on the Sacred River",
    category:"cruise", badge:"Bestseller", badgeColor:"#D4A847",
    duration:"5D / 4N", price:650, rating:4.95, reviews:4218,
    difficulty:"Easy", groupSize:"2–20",
    heroImg:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1400&q=85",
    cities:["Luxor","Esna","Edfu","Kom Ombo","Aswan"],
    tags:["Nile Cruise","Temples","History","Full Board"],
    includes:["4 nights on 5★ Nile cruise ship (full board)","All shore excursions with certified Egyptologist guide","Entrance fees to all temples listed","Airport/hotel transfers in Luxor & Aswan","Daily breakfast, lunch & dinner on board","Welcome cocktail & farewell dinner","24/7 onboard cruise manager"],
    excludes:["International/domestic flights","Egypt entry visa ($25)","Personal expenses & gratuities","Optional hot air balloon ($125/person)","Optional Abu Simbel excursion ($80/person)","Alcoholic beverages"],
    highlights:["Karnak Temple — largest religious complex ever built","Valley of the Kings — tombs of Ramesses II & Tutankhamun","Temple of Hatshepsut — Egypt's only female pharaoh","Colossi of Memnon — twin 18m statues at sunrise","Edfu Temple (Horus) — most complete ancient temple","Kom Ombo — dual temple dedicated to Sobek & Haroeris","Philae Temple of Isis — Jewel of the Nile","Aswan High Dam — modern Egypt's greatest feat","Traditional Nubian felucca sunset sail"],
    itinerary:[
      {day:1,title:"Welcome to Luxor — Embarkation Day",location:"Luxor",icon:"🚢",meals:["Lunch","Dinner"],
       activities:[
         {time:"10:00 AM",name:"Airport/hotel pickup in Luxor",detail:"Private air-conditioned vehicle meets you at Luxor International Airport or your hotel. Your Egyptologist guide introduces himself and provides a full briefing on the 5-day program."},
         {time:"12:00 PM",name:"Embarkation on 5★ Nile Cruise",detail:"Board your floating palace on the Nile. Check into your cabin with panoramic river views. Enjoy a welcome drink and lunch on the panoramic sun deck."},
         {time:"02:30 PM",name:"Luxor Temple & Avenue of Sphinxes",detail:"Walk the legendary 2.7km Avenue of Sphinxes — 1,050 ram-headed sphinxes connecting Karnak to Luxor Temple. Enter Luxor Temple (built by Amenhotep III, 1390 BC) and stand before the towering obelisk of Ramesses II."},
         {time:"05:30 PM",name:"Evening sail",detail:"Return to your ship as the sun melts into the Nile. The cruise begins its gentle southward journey. Enjoy dinner with live Egyptian music. Overnight on the Nile."},
       ]},
      {day:2,title:"West Bank Wonders — Valley of the Kings",location:"Luxor West Bank",icon:"⚱️",meals:["Breakfast","Lunch","Dinner"],optionalExtra:"🎈 Hot Air Balloon at sunrise (+$125) — highly recommended!",
       activities:[
         {time:"05:00 AM",name:"OPTIONAL: Hot Air Balloon over Luxor",detail:"Float 300 metres above the Valley of the Kings as the sun rises over the Theban hills. 45-minute flight. One of the most spectacular views on earth."},
         {time:"08:30 AM",name:"Valley of the Kings",detail:"Enter the sacred necropolis of the pharaohs. Your Egyptologist leads you through 3 royal tombs. See the astronomically detailed tomb of Ramesses VI. Optional Tutankhamun's tomb ($25 extra)."},
         {time:"10:30 AM",name:"Temple of Hatshepsut",detail:"Three colonnaded terraces rise dramatically from the desert floor. Marvel at the painted reliefs showing the divine birth of Hatshepsut and her legendary expedition to Punt."},
         {time:"11:45 AM",name:"Colossi of Memnon",detail:"Two 18-metre quartzite statues of Amenhotep III. The ancient Greeks reported the northern statue emitted a musical sound at dawn — the 'singing Memnon'."},
         {time:"04:00 PM",name:"Esna Lock",detail:"Your ship enters the 1906 Esna Lock — a 10-metre drop in the Nile level. Local vendors paddle alongside throwing colourful scarves and galabiyyas up to passengers."},
         {time:"07:30 PM",name:"Galabeya Party",detail:"Traditional Egyptian robe party with live music, belly dancing and a Tanoura spinning show."},
       ]},
      {day:3,title:"Edfu Temple & Kom Ombo at Sunset",location:"Edfu & Kom Ombo",icon:"🦅",meals:["Breakfast","Lunch","Dinner"],
       activities:[
         {time:"08:00 AM",name:"Temple of Horus at Edfu",detail:"The best-preserved ancient temple in Egypt. 137 metres long, walls rising 36 metres. Horse-drawn carriage through Edfu town. Every surface covered in hieroglyphic reliefs."},
         {time:"05:00 PM",name:"Kom Ombo Temple at golden hour",detail:"Unique double temple dedicated to Sobek and Haroeris, perched on a promontory above the Nile. Crocodile Museum: 22 mummified sacred crocodiles. Medical instruments carved on the walls."},
         {time:"07:30 PM",name:"Sail to Aswan",detail:"The ship continues south under the stars. Dinner on board. Overnight anchored in Aswan."},
       ]},
      {day:4,title:"Aswan & The Jewel of the Nile",location:"Aswan",icon:"⛵",meals:["Breakfast","Lunch","Dinner"],optionalExtra:"🏛️ Abu Simbel day trip (+$80) — the trip's crown jewel",
       activities:[
         {time:"05:00 AM",name:"OPTIONAL: Abu Simbel excursion",detail:"A 3.5-hour drive south through the Sahara brings you to the twin temples of Ramesses II. Four 21-metre statues guard the entrance. UNESCO moved these temples 64 metres uphill in the 1960s to save them from Lake Nasser."},
         {time:"09:30 AM",name:"Aswan High Dam",detail:"One of the largest dams in the world. Built 1960–1970 with Soviet assistance. Panoramic views of Lake Nasser stretching 500km south into Sudan."},
         {time:"10:30 AM",name:"Unfinished Obelisk",detail:"The largest obelisk ever attempted — 42 metres, 1,200 tonnes — still attached to its quarry bed after cracking during cutting. The most revealing insight into ancient Egyptian stoneworking."},
         {time:"12:00 PM",name:"Philae Temple of Isis",detail:"Motorboat to Agilika Island. The last temple built in the classical Egyptian style — used for over 1,000 years, closed by Emperor Justinian in 550 AD. Beautiful on water."},
         {time:"05:30 PM",name:"Nubian felucca sunset sail",detail:"Traditional wooden felucca around Elephantine Island as the sun sets. Hot Nubian tea and fresh fruit on board."},
         {time:"08:00 PM",name:"Farewell Gala Dinner",detail:"Formal farewell dinner with your guide and captain. Egyptian dishes, live music and dancing. Certificates of cruise completion presented."},
       ]},
      {day:5,title:"Departure from Aswan",location:"Aswan",icon:"✈️",meals:["Breakfast"],
       activities:[
         {time:"07:00 AM",name:"Breakfast & check-out",detail:"Final breakfast on your floating palace. Pack and settle any personal accounts."},
         {time:"09:00 AM",name:"Disembarkation & transfer",detail:"Your guide and driver transfer you to Aswan Airport, train station or your onward hotel."},
       ]},
    ],
  },
  {
    id:"cruise-aswan-luxor",
    title:"Nile Cruise: Aswan to Luxor",
    subtitle:"4 Days · 3 Nights · Ancient Wonders Downstream",
    category:"cruise", badge:"Top Rated", badgeColor:"#E63946",
    duration:"4D / 3N", price:550, rating:4.9, reviews:3654,
    difficulty:"Easy", groupSize:"2–20",
    heroImg:"https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1400&q=85",
    cities:["Aswan","Kom Ombo","Edfu","Esna","Luxor"],
    tags:["Nile Cruise","Abu Simbel","Nubian Culture","Full Board"],
    includes:["3 nights on 5★ Nile cruise ship (full board)","Certified Egyptologist guide","Philae Temple & High Dam entrance","Kom Ombo & Edfu entrance","Luxor East & West Bank temples","Airport transfers in Aswan & Luxor","All meals on board"],
    excludes:["Domestic/international flights","Egypt entry visa","Abu Simbel excursion (+$80)","Tips and gratuities","Personal expenses"],
    highlights:["Philae Temple — Island of Isis at dawn","Aswan High Dam — Soviet-Egyptian engineering marvel","Unfinished Obelisk — 1,200 tonnes of abandoned ambition","Optional Abu Simbel — Ramesses II's greatest monument","Kom Ombo at sunset — double temple on the river","Edfu Temple of Horus — best preserved in Egypt","Esna Lock — the living lock of the Nile","Valley of the Kings — 63 royal tombs","Karnak Temple — 134 columns, 2,000 years of construction"],
    itinerary:[
      {day:1,title:"Arrival in Aswan — Board Your Nile Palace",location:"Aswan",icon:"🛬",meals:["Lunch","Dinner"],optionalExtra:"🏛️ Abu Simbel the next morning: book tonight! (+$80)",
       activities:[
         {time:"10:00 AM",name:"Philae Temple of Isis",detail:"A short motorboat ride to Agilika Island. The last ancient Egyptian temple to remain active, closed in the 6th century AD. The light over the water makes for unforgettable photographs."},
         {time:"01:00 PM",name:"Embarkation & Lunch",detail:"Board your 5★ cruise ship. Welcome cocktail and lunch buffet. Settle into your cabin with floor-to-ceiling Nile views."},
         {time:"03:00 PM",name:"Aswan High Dam",detail:"One of the world's largest embankment dams. Built 1960–1970 under Nasser with Soviet engineering. Your guide explains the engineering triumph and its human cost."},
         {time:"04:30 PM",name:"Unfinished Obelisk",detail:"The ancient quarries where Aswan granite was cut. A 42-metre, 1,200-tonne monolith abandoned exactly as it was 3,500 years ago — a perfect snapshot of ancient technique."},
         {time:"08:00 PM",name:"Captain's Welcome Dinner",detail:"Formal welcome dinner with Egyptian specialities. The cruise manager outlines all optional activities."},
       ]},
      {day:2,title:"Abu Simbel & North to Kom Ombo",location:"Abu Simbel → Kom Ombo",icon:"🏛️",meals:["Breakfast","Lunch","Dinner"],
       activities:[
         {time:"04:00 AM",name:"OPTIONAL: Abu Simbel",detail:"3.5-hour convoy across the Sahara. Four 21-metre colossi at sunrise. The second temple built for Nefertari — one of only two in history dedicated to a living woman. UNESCO's greatest rescue operation."},
         {time:"05:00 PM",name:"Kom Ombo Temple at sunset",detail:"Double temple on the Nile at its most photogenic. Sobek the crocodile god and Haroeris the falcon god worshipped side by side. Crocodile Museum: 22 mummified crocodiles."},
         {time:"07:00 PM",name:"Egyptian entertainment evening",detail:"Galabeya party with live music, whirling dervish Tanoura show. Overnight docked at Edfu."},
       ]},
      {day:3,title:"Edfu Temple of Horus & Luxor Approach",location:"Edfu → Esna → Luxor",icon:"🦅",meals:["Breakfast","Lunch","Dinner"],
       activities:[
         {time:"08:00 AM",name:"Temple of Horus at Edfu",detail:"Most complete ancient temple in Egypt. Horse-drawn carriage through Edfu's streets. 36-metre pylon — the largest in Egypt. Inside: the sacred barque shrine and ancient nilometer."},
         {time:"10:00 AM",name:"Esna Lock experience",detail:"Your ship descends 10 metres through the 1906 lock. Local merchants paddle alongside throwing textiles and souvenirs. Pure living Nile culture."},
         {time:"05:00 PM",name:"Luxor Temple — evening visit",detail:"Moor in Luxor. Walk to Luxor Temple — one of the most beautiful monuments in the world after dark, floodlit amber against the dark Nile sky."},
       ]},
      {day:4,title:"Valley of the Kings & Karnak — Grand Finale",location:"Luxor",icon:"👑",meals:["Breakfast"],
       activities:[
         {time:"07:00 AM",name:"Karnak Temple Complex",detail:"200 acres built over 2,000 years by 30 pharaohs. Great Hypostyle Hall: 134 columns up to 24 metres tall. Sacred Lake. Obelisk of Hatshepsut."},
         {time:"09:30 AM",name:"Valley of the Kings",detail:"3 royal tombs included. Optional Tutankhamun's tomb ($25). The astronomical ceiling of Ramesses VI."},
         {time:"11:30 AM",name:"Temple of Hatshepsut & Colossi",detail:"Three terraced colonnades against the cliff face. The twin 18m Colossi of Memnon for final photographs."},
         {time:"01:00 PM",name:"Disembarkation",detail:"Return to the cruise for luggage. Transfer to Luxor Airport, train station or your hotel."},
       ]},
    ],
  },
  {
    id:"cairo-luxor-aswan-hurghada",
    title:"Cairo · Luxor · Aswan · Hurghada",
    subtitle:"10 Days · 9 Nights · The Complete Egypt Experience",
    category:"multi-city", badge:"Most Popular", badgeColor:"#52B788",
    duration:"10D / 9N", price:1290, rating:4.9, reviews:2876,
    difficulty:"Easy–Moderate", groupSize:"2–16",
    heroImg:"https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1400&q=85",
    cities:["Cairo","Luxor","Aswan","Hurghada"],
    tags:["Pyramids","Nile Cruise","Red Sea","Culture","Adventure"],
    includes:["9 nights accommodation (5★ hotels + Nile cruise)","Domestic flight Cairo → Luxor","Domestic flight Aswan → Hurghada","Full board on Nile cruise (Days 4–7)","Bed & Breakfast at Cairo and Hurghada hotels","Private Egyptologist guide throughout","All entrance fees","All airport/hotel transfers","Welcome dinner in Cairo"],
    excludes:["International flights to/from Egypt","Egypt entry visa ($25)","Hot air balloon over Luxor (+$125)","Abu Simbel excursion (+$80)","Diving in Hurghada (+$70)","Tips and gratuities"],
    highlights:["Great Pyramids of Giza — last surviving ancient wonder","Grand Egyptian Museum — 100,000+ artifacts","Khan el-Khalili Bazaar — medieval Islamic Cairo","4-night luxury Nile Cruise Luxor to Aswan","Valley of the Kings — Tutankhamun's actual tomb","Karnak Temple — world's largest religious complex","Philae Temple & Abu Simbel option","Red Sea snorkeling on Giftun Island","Desert quad safari at sunset"],
    itinerary:[
      {day:1,title:"Arrival in Cairo",location:"Cairo",icon:"🏙️",meals:["Welcome Dinner"],activities:[{time:"Arrival",name:"Airport welcome & hotel transfer",detail:"Private pickup at Cairo Airport. Welcome dinner with your Egyptologist guide. Full briefing on the 10-day program."},{time:"Evening",name:"Welcome dinner with guide",detail:"Traditional Egyptian mezze at a rooftop restaurant. Overnight Cairo."}]},
      {day:2,title:"Cairo — Pyramids, Sphinx & Grand Egyptian Museum",location:"Cairo / Giza",icon:"🔺",meals:["Breakfast","Lunch"],activities:[{time:"08:30 AM",name:"Great Pyramids of Giza",detail:"2.3 million stone blocks fitted to within 0.5mm of precision. Optional entry inside the Great Pyramid ($35). The Great Sphinx — 73.5m long, 4,500 years old. Valley Temple — oldest stone temple in Egypt."},{time:"11:00 AM",name:"Grand Egyptian Museum",detail:"The world's largest archaeological museum. Tutankhamun Galleries: solid gold death mask, royal throne, golden shrine. Over 100,000 artifacts."},{time:"01:30 PM",name:"Lunch",detail:"Traditional Egyptian lunch near the Pyramids."},{time:"03:00 PM",name:"Saqqara & Memphis",detail:"Step Pyramid of Djoser (2,650 BC) — world's first large stone structure. Memphis: colossal fallen statue of Ramesses II."}]},
      {day:3,title:"Islamic Cairo",location:"Cairo",icon:"🕌",meals:["Breakfast"],activities:[{time:"09:00 AM",name:"Cairo Citadel & Alabaster Mosque",detail:"Saladin's 1176 fortress with panoramic Cairo views. The Muhammad Ali Mosque — alabaster interior, twin minarets, view to the distant Pyramids."},{time:"11:00 AM",name:"Khan el-Khalili Bazaar",detail:"Cairo's 14th-century bazaar, still operating. Spice merchants, copper smiths, perfumers. Tea at Fishawi's Café — open since 1773."},{time:"03:00 PM",name:"Coptic Cairo",detail:"Hanging Church (5th century), Church of St. Sergius (4th century), Ben Ezra Synagogue (9th century), Coptic Museum."}]},
      {day:4,title:"Fly Cairo → Luxor — Board the Nile Cruise",location:"Cairo → Luxor",icon:"✈️",meals:["Breakfast","Lunch on cruise","Dinner on cruise"],activities:[{time:"06:00 AM",name:"Cairo → Luxor flight",detail:"1-hour flight over the Eastern Desert."},{time:"08:30 AM",name:"Karnak Temple",detail:"World's largest religious complex. Great Hypostyle Hall: 134 columns, the 12 central ones at 24 metres. Sacred Lake. Obelisk of Hatshepsut."},{time:"11:30 AM",name:"Board Nile Cruise",detail:"Lunch on board. Afternoon visit to Luxor Temple. The cruise sails south at sunset."},{time:"05:00 PM",name:"First night on the Nile",detail:"Dinner on board. Welcome cocktail. Overnight sailing."}]},
      {day:5,title:"Valley of the Kings — Royal Necropolis",location:"Luxor West Bank",icon:"⚱️",meals:["Breakfast","Lunch","Dinner"],optionalExtra:"🎈 Hot Air Balloon at sunrise (+$125) — unmissable",activities:[{time:"08:00 AM",name:"Valley of the Kings",detail:"63 tombs cut into the golden limestone. 3 tombs included. Astronomical ceiling of Ramesses VI. Optional Tutankhamun ($25)."},{time:"10:30 AM",name:"Hatshepsut Temple & Colossi",detail:"Three terraced colonnades. Female pharaoh's mortuary temple. Twin 18m Colossi of Memnon."},{time:"04:30 PM",name:"Esna Lock",detail:"Ship navigates the 1906 lock."}]},
      {day:6,title:"Edfu & Kom Ombo",location:"Edfu & Kom Ombo",icon:"🏛️",meals:["Breakfast","Lunch","Dinner"],activities:[{time:"08:00 AM",name:"Edfu Temple of Horus",detail:"Most complete ancient temple in Egypt. Horse-carriage through Edfu. Full mythological journey."},{time:"05:00 PM",name:"Kom Ombo at sunset",detail:"Double temple on the river. Most photogenic moment of the entire cruise."}]},
      {day:7,title:"Aswan — Philae, High Dam & Nubian Culture",location:"Aswan",icon:"⛵",meals:["Breakfast","Lunch","Farewell Dinner"],optionalExtra:"🏛️ Abu Simbel full day (+$80)",activities:[{time:"09:30 AM",name:"High Dam & Unfinished Obelisk",detail:"Engineering marvel. Then the quarries: 1,200 tonnes of abandoned ambition."},{time:"11:30 AM",name:"Philae Temple",detail:"Motorboat to the island temple — last functioning pagan temple in the Roman Empire."},{time:"03:00 PM",name:"Nubian felucca sunset sail",detail:"Traditional felucca around Elephantine Island. Most peaceful afternoon in Egypt."},{time:"07:00 PM",name:"Farewell Gala Dinner",detail:"Final dinner on the Nile. Certificates, speeches and dancing."}]},
      {day:8,title:"Fly Aswan → Hurghada",location:"Aswan → Hurghada",icon:"🌊",meals:["Breakfast"],activities:[{time:"07:00 AM",name:"Disembark & Aswan Airport",detail:"Domestic flight Aswan → Hurghada (1h 15min). Check into your 5★ Red Sea resort."},{time:"Afternoon",name:"First Red Sea swim",detail:"Snorkel the house reef: coral gardens, parrotfish, moray eels."}]},
      {day:9,title:"Hurghada — Red Sea Adventures",location:"Hurghada",icon:"🤿",meals:["Breakfast"],activities:[{time:"08:30 AM",name:"Snorkeling to Giftun Island",detail:"Speedboat to Giftun Island National Marine Park. Two pristine reef stops. Seafood BBQ lunch on the beach."},{time:"Afternoon",name:"Optional: Scuba Diving or Desert Safari",detail:"PADI beginner dive ($70) or quad biking, Bedouin camp, stargazing in the Eastern Desert."}]},
      {day:10,title:"Departure from Hurghada",location:"Hurghada",icon:"✈️",meals:["Breakfast"],activities:[{time:"Morning",name:"Final Red Sea morning",detail:"Last swim. Breakfast at leisure."},{time:"Flexible",name:"Transfer to Airport",detail:"Private transfer to Hurghada International Airport. Fly home or connect via Cairo."}]},
    ],
  },
  {
    id:"cairo-aswan-luxor-sharm",
    title:"Cairo · Aswan · Luxor · Sharm El Sheikh",
    subtitle:"12 Days · 11 Nights · Pharaohs, Nile & Sinai",
    category:"multi-city", badge:"Premium", badgeColor:"#4A9EE8",
    duration:"12D / 11N", price:1650, rating:4.88, reviews:1543,
    difficulty:"Easy–Moderate", groupSize:"2–12",
    heroImg:"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1400&q=85",
    cities:["Cairo","Aswan","Luxor","Sharm El Sheikh"],
    tags:["Pyramids","Nile Cruise","Mount Sinai","Diving","Culture"],
    includes:["11 nights (5★ hotels & Nile cruise full board)","Domestic flights: Cairo→Aswan, Luxor→Sharm","All excursions with private Egyptologist","All entrance fees","All transfers"],
    excludes:["International flights","Visa","Tips","Diving courses"],
    highlights:["Pyramids & Grand Egyptian Museum","Abu Simbel temples of Ramesses II","4-night Nile Cruise Aswan to Luxor","Valley of the Kings & Karnak","Ras Mohammed National Park snorkeling","Mount Sinai sunrise trek","Tiran Island diving & snorkeling"],
    itinerary:[
      {day:1,title:"Arrival Cairo",location:"Cairo",icon:"🏙️",meals:["Welcome Dinner"],activities:[{time:"Arrival",name:"Airport pickup & hotel check-in",detail:"Private pickup. Welcome dinner with guide."}]},
      {day:2,title:"Cairo — Pyramids & GEM",location:"Cairo",icon:"🔺",meals:["Breakfast","Lunch"],activities:[{time:"08:30 AM",name:"Giza Plateau & Great Pyramids",detail:"Private tour: Pyramids, Sphinx, Valley Temple, Grand Egyptian Museum with full Tutankhamun galleries."},{time:"02:00 PM",name:"Saqqara & Step Pyramid",detail:"World's first large stone structure (2,650 BC). Memphis: colossal Ramesses II statue."}]},
      {day:3,title:"Cairo — Islamic & Coptic Heritage",location:"Cairo",icon:"🕌",meals:["Breakfast"],activities:[{time:"09:00 AM",name:"Cairo Citadel & Khan el-Khalili",detail:"Panoramic Cairo from Saladin's fortress. Muhammad Ali Mosque. Medieval bazaar with tea at Fishawi's."},{time:"03:00 PM",name:"Coptic Cairo",detail:"Hanging Church, St. Sergius, Ben Ezra Synagogue, Coptic Museum."}]},
      {day:4,title:"Fly to Aswan — Philae & Embarkation",location:"Aswan",icon:"✈️",meals:["Breakfast","Lunch on cruise","Dinner"],activities:[{time:"07:00 AM",name:"Cairo → Aswan flight",detail:"1-hour domestic flight to Nubia."},{time:"10:00 AM",name:"Aswan sites",detail:"High Dam, Unfinished Obelisk, Philae Temple by motorboat."},{time:"01:30 PM",name:"Nile Cruise embarkation",detail:"Board 5★ cruise ship. Afternoon felucca at sunset."}]},
      {day:5,title:"Abu Simbel — Greatest Rock Temple",location:"Abu Simbel",icon:"🏛️",meals:["Breakfast","Lunch","Dinner"],activities:[{time:"04:00 AM",name:"Pre-dawn convoy to Abu Simbel",detail:"3.5-hour desert drive. Four 21m Ramesses II colossi at sunrise. Battle of Kadesh reliefs. Nefertari Temple. Return for lunch."},{time:"06:00 PM",name:"Kom Ombo at sunset",detail:"Double temple at its most photogenic."}]},
      {day:6,title:"Edfu Temple & Sailing North",location:"Edfu",icon:"🦅",meals:["Breakfast","Lunch","Dinner"],activities:[{time:"08:00 AM",name:"Edfu Temple of Horus",detail:"Egypt's most complete temple. Horse carriage through Edfu."},{time:"04:00 PM",name:"Esna Lock",detail:"Ship navigates the working 1906 lock."}]},
      {day:7,title:"Luxor — Valley of the Kings & Karnak",location:"Luxor",icon:"👑",meals:["Breakfast","Lunch","Dinner"],optionalExtra:"🎈 Hot Air Balloon (+$125)",activities:[{time:"07:00 AM",name:"Valley of the Kings",detail:"3 royal tombs. Tutankhamun optional ($25)."},{time:"10:00 AM",name:"Hatshepsut Temple & Colossi",detail:"Three terraced colonnades. Female pharaoh's extraordinary mortuary temple."},{time:"03:00 PM",name:"Karnak Temple",detail:"200 acres, 134 hypostyle columns, Sacred Lake."},{time:"08:00 PM",name:"Farewell dinner on the Nile",detail:"Gala dinner, Tanoura show, certificates."}]},
      {day:8,title:"Fly Luxor → Sharm El Sheikh",location:"Sharm El Sheikh",icon:"🌅",meals:["Breakfast"],activities:[{time:"08:00 AM",name:"Luxor → Sharm flight",detail:"1h 15m domestic flight."},{time:"Afternoon",name:"Resort check-in & Red Sea swim",detail:"Snorkel the house reef. Watch the Sinai mountains glow pink at sunset."}]},
      {day:9,title:"Ras Mohammed National Park",location:"Sharm El Sheikh",icon:"🤿",meals:["Breakfast"],activities:[{time:"08:30 AM",name:"Ras Mohammed yacht cruise",detail:"Two snorkeling stops: richest coral reef ecosystem on earth. Sharks, turtles, napoleon wrasse, barracuda. BBQ lunch on the boat."}]},
      {day:10,title:"Mount Sinai Sunrise Trek",location:"St. Catherine",icon:"⛰️",meals:["Breakfast"],activities:[{time:"11:00 PM",name:"Night departure for Mount Sinai",detail:"Midnight coach to St. Catherine's Monastery. 2.5-hour ascent by starlight to 2,285m. 360° views over 5 countries at dawn. Moses' Mountain."},{time:"07:00 AM",name:"St. Catherine's Monastery",detail:"World's oldest continuously inhabited Christian monastery (565 AD). The Burning Bush. 4,500 manuscripts."}]},
      {day:11,title:"Tiran Island & Red Sea Diving",location:"Sharm El Sheikh",icon:"🐠",meals:["Breakfast"],activities:[{time:"08:30 AM",name:"Tiran Island diving & snorkeling",detail:"Four legendary dive sites: Jackson, Thomas, Woodhouse and Gordon Reefs. Premier dive destination worldwide."}]},
      {day:12,title:"Departure",location:"Sharm El Sheikh",icon:"✈️",meals:["Breakfast"],activities:[{time:"Morning",name:"Last Red Sea morning & transfer",detail:"Final swim. Transfer to Sharm Airport."}]},
    ],
  },
  {
    id:"oases-dakhla-kharga",
    title:"Dakhla & Kharga Oases Desert Journey",
    subtitle:"5 Days · 4 Nights · Lost Kingdoms of the Western Desert",
    category:"desert", badge:"Unique", badgeColor:"#52B788",
    duration:"5D / 4N", price:580, rating:4.92, reviews:387,
    difficulty:"Moderate", groupSize:"2–8",
    heroImg:"https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1400&q=85",
    cities:["Cairo","Kharga","Dakhla","Cairo"],
    tags:["Desert","Oasis","Roman Ruins","Off-the-beaten-path","Adventure"],
    includes:["4 nights (eco-lodges & boutique hotels)","Private 4WD expedition vehicle","Expert desert guide throughout","All meals (full board in desert)","All entrance fees","Cairo transfers"],
    excludes:["Domestic flights to/from Cairo (optional)","Tips","Personal expenses"],
    highlights:["Temple of Hibis, Kharga — best preserved Ptolemaic temple outside the Nile Valley","Bagawat Necropolis — 4th century Christian burial complex","Medieval Islamic mud-brick city of Al-Qasr","Dakhla's Roman ruins of Deir el-Haggar","Hot springs bathing in the desert","Extraordinary stargazing — zero light pollution"],
    itinerary:[
      {day:1,title:"Cairo → Kharga Oasis",location:"Cairo → Kharga",icon:"🏜️",meals:["Lunch","Dinner"],activities:[{time:"06:00 AM",name:"Departure from Cairo",detail:"9-hour drive through the Eastern Desert. The landscape transforms progressively from cultivation to absolute desert."},{time:"05:00 PM",name:"Arrive Kharga Oasis",detail:"First sight of the oasis: date palms appearing miraculously from the sand. Traditional Kharga dinner: roasted lamb, fresh dates."}]},
      {day:2,title:"Kharga — Roman & Christian Heritage",location:"Kharga",icon:"🏛️",meals:["Breakfast","Lunch","Dinner"],activities:[{time:"08:00 AM",name:"Temple of Hibis",detail:"Best-preserved Ptolemaic temple outside the Nile Valley. Dedicated to Amun, with reliefs from the 6th century BC through the Roman period."},{time:"10:00 AM",name:"Bagawat Christian Necropolis",detail:"263 mudbrick chapels from the 3rd–7th centuries with biblical scenes: Adam and Eve, the Exodus, Noah's Ark. 1,700-year-old paint still visible."},{time:"07:00 PM",name:"Desert stargazing",detail:"Zero light pollution. The Milky Way is a solid white band. Your guide has a telescope."}]},
      {day:3,title:"Cross the Desert — Dakhla Oasis",location:"Kharga → Dakhla",icon:"🌵",meals:["Breakfast","Lunch","Dinner"],activities:[{time:"08:00 AM",name:"Cross the Darb el-Arbain Desert Road",detail:"The ancient Forty-Day Road. 200km of raw Sahara in your 4WD."},{time:"01:00 PM",name:"Desert hot spring bathing",detail:"45°C mineral-rich water in the middle of the Sahara. One of the most surreal experiences in Egypt."},{time:"04:00 PM",name:"Al-Qasr medieval city",detail:"Medieval Islamic mud-brick city preserved as a living museum. Mamluk-era minaret from 1518."}]},
      {day:4,title:"Dakhla — Roman Temples & Great Sand Dunes",location:"Dakhla",icon:"🏺",meals:["Breakfast","Lunch","Dinner"],activities:[{time:"08:30 AM",name:"Deir el-Haggar Roman temple",detail:"Roman-period temple: Emperor Nero in traditional pharaonic regalia offering to Egyptian gods."},{time:"05:30 PM",name:"Sand dune sunset",detail:"4WD to the highest accessible dune. The Dakhla depression ringed by the Great Sand Sea, last light amber and rose."}]},
      {day:5,title:"Return to Cairo",location:"Dakhla → Cairo",icon:"🏙️",meals:["Breakfast","Lunch"],activities:[{time:"07:00 AM",name:"Return drive to Cairo",detail:"Via the Nile Valley road, passing the White Monastery and Red Monastery near Sohag. Arrive Cairo by evening."}]},
    ],
  },
  {
    id:"cairo-alexandria-3days",
    title:"Cairo & Alexandria — 3 Day Classic",
    subtitle:"3 Days · 2 Nights · Pharaohs & Mediterranean",
    category:"short-break", badge:"Quick Escape", badgeColor:"#4A9EE8",
    duration:"3D / 2N", price:320, rating:4.85, reviews:1243,
    difficulty:"Easy", groupSize:"2–12",
    heroImg:"https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1400&q=85",
    cities:["Cairo","Alexandria"],
    tags:["Pyramids","Mediterranean","History","Culture"],
    includes:["2 nights 5★ hotel (1 Cairo, 1 Alexandria)","All transportation","Private Egyptologist guide","All entrance fees","Daily breakfast + 2 lunches"],
    excludes:["International flights","Visa","Dinners (except Day 1 optional)","Tips"],
    highlights:["Great Pyramids & Grand Egyptian Museum","Bibliotheca Alexandrina","Roman Catacombs of Kom el-Shoqafa","Qaitbay Citadel on the Mediterranean","Khan el-Khalili bazaar","Alexandria seafood on the Corniche"],
    itinerary:[
      {day:1,title:"Cairo — Pyramids, GEM & Medieval City",location:"Cairo",icon:"🔺",meals:["Breakfast","Lunch"],activities:[{time:"08:00 AM",name:"Giza Pyramids, Sphinx & Valley Temple",detail:"All three great pyramids, the Great Sphinx, the Valley Temple. Optional entry inside the Great Pyramid ($35)."},{time:"11:00 AM",name:"Grand Egyptian Museum",detail:"Tutankhamun galleries: solid gold death mask, two coffins, golden throne, chariot. Over 100,000 artifacts."},{time:"03:00 PM",name:"Khan el-Khalili & Islamic Cairo",detail:"Medieval bazaar. Tea at Fishawi's Café (open since 1773). Al-Azhar Mosque."}]},
      {day:2,title:"Day Trip to Alexandria",location:"Alexandria",icon:"🌊",meals:["Breakfast","Seafood lunch"],activities:[{time:"07:00 AM",name:"Drive to Alexandria (2.5 hours)",detail:"Early departure. Arrive by 9:30am."},{time:"09:30 AM",name:"Catacombs of Kom el-Shoqafa",detail:"Three levels cut 35 metres into rock. Unique Greco-Roman-Egyptian decoration: Anubis in Roman armour."},{time:"11:00 AM",name:"Bibliotheca Alexandrina",detail:"8 million volumes. Aswan granite clad with scripts from every writing system. Museums and planetarium."},{time:"01:00 PM",name:"Seafood lunch on the Corniche",detail:"Fresh calamari, sea bass, prawns with Mediterranean sea views."},{time:"03:00 PM",name:"Qaitbay Citadel",detail:"Built on the site of the ancient Lighthouse of Alexandria — one of the Seven Wonders."}]},
      {day:3,title:"Cairo — Coptic Quarter & Departure",location:"Cairo",icon:"✝️",meals:["Breakfast"],activities:[{time:"09:00 AM",name:"Coptic Cairo",detail:"Hanging Church (5th century), Church of St. Sergius (4th century), Ben Ezra Synagogue, Coptic Museum."},{time:"11:30 AM",name:"Cairo Citadel panoramic view",detail:"Farewell panorama of Cairo: medieval minarets, the Nile, and the distant pyramids."},{time:"01:00 PM",name:"Transfer to airport",detail:""}]},
    ],
  },
  {
    id:"fayoum-3days",
    title:"Fayoum Oasis — 3 Day Escape",
    subtitle:"3 Days · 2 Nights · Prehistoric Wonders & Desert Magic",
    category:"short-break", badge:"UNESCO", badgeColor:"#52B788",
    duration:"3D / 2N", price:280, rating:4.92, reviews:534,
    difficulty:"Easy–Moderate", groupSize:"2–10",
    heroImg:"https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1400&q=85",
    cities:["Cairo","Fayoum"],
    tags:["UNESCO","Desert","Nature","Flamingos","Whales","Fossils"],
    includes:["2 nights eco-lodge or boutique hotel","Private 4WD","Expert naturalist guide","All meals","All entrance fees","Stargazing equipment"],
    excludes:["International flights","Personal expenses","Tips"],
    highlights:["Wadi El Hitan — prehistoric whale skeletons (UNESCO)","Lake Qarun flamingos & pelicans","Magic Lake colour-changing phenomenon","Roman waterwheels of Fayoum","White desert formations at Wadi El Rayan","Extraordinary stargazing"],
    itinerary:[
      {day:1,title:"Cairo → Fayoum — Waterwheels & Lake Qarun",location:"Fayoum",icon:"🌿",meals:["Lunch","Dinner"],activities:[{time:"08:00 AM",name:"Fayoum's Roman Waterwheels",detail:"214 traditional wooden waterwheels still irrigating the oasis after 2,000 years. Nearby Pharaonic temple of Amenemhat III (1830 BC)."},{time:"03:00 PM",name:"Lake Qarun birdwatching",detail:"214 bird species: greater flamingos, white pelicans, migratory species. Motorboat to get close to the flamingo flocks."}]},
      {day:2,title:"Wadi El Hitan UNESCO — Valley of the Whales",location:"Wadi El Hitan",icon:"🐋",meals:["Breakfast","Desert picnic lunch","Dinner"],activities:[{time:"09:00 AM",name:"Wadi El Hitan UNESCO World Heritage Site",detail:"37 million-year-old Basilosaurus skeletons — prehistoric whales up to 18 metres — emerging from the desert sand. Some still contain stomach contents: fish and sea turtle bones."},{time:"02:00 PM",name:"Wadi El Rayan — desert lakes & waterfall",detail:"Egypt's only natural waterfall. Swim in the lower lake (crystal clear, desert-warm). Spot sand foxes and desert eagles."},{time:"09:00 PM",name:"Stargazing session",detail:"Milky Way, Orion Nebula, Andromeda Galaxy visible with naked eye."}]},
      {day:3,title:"Magic Lake & Return to Cairo",location:"Fayoum → Cairo",icon:"🌈",meals:["Breakfast","Lunch"],activities:[{time:"08:00 AM",name:"Magic Lake",detail:"Spring-fed pools shifting from turquoise to emerald to deep blue depending on minerals and light angle."},{time:"10:30 AM",name:"Karanis — Greco-Roman town",detail:"3rd-century BC to 5th-century AD town preserved under desert sand. Two Ptolemaic temples, Roman townhouses, bathhouse."},{time:"03:00 PM",name:"Return drive to Cairo",detail:"1.5-hour return."}]},
    ],
  },
  {
    id:"sinai-dahab",
    title:"Sinai & Dahab — Desert, Sea & Spirituality",
    subtitle:"6 Days · 5 Nights · The Sinai Peninsula Complete",
    category:"adventure", badge:"Adventure", badgeColor:"#E63946",
    duration:"6D / 5N", price:720, rating:4.88, reviews:876,
    difficulty:"Moderate–Challenging", groupSize:"2–12",
    heroImg:"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1400&q=85",
    cities:["Sharm El Sheikh","St. Catherine","Dahab","Nuweiba"],
    tags:["Mount Sinai","Diving","Blue Hole","Bedouin","Trekking","Spiritual"],
    includes:["5 nights accommodation (boutique hotels & Bedouin camp)","All transfers","Bedouin guide for Mount Sinai","All entrance fees","Daily breakfast + 4 dinners"],
    excludes:["International flights","Diving courses","Tips","Lunch (most days)"],
    highlights:["Mount Sinai sunrise — Moses' Mountain","St. Catherine's Monastery (6th century AD)","Dahab Blue Hole — legendary dive site","Coloured Canyon — Sinai's geological marvel","Bedouin desert camp & camel trek","Nuweiba beach & night fishing","Ras Abu Galum — protected snorkeling paradise"],
    itinerary:[
      {day:1,title:"Arrive Sharm El Sheikh",location:"Sharm El Sheikh",icon:"🏖️",meals:["Dinner"],activities:[{time:"Arrival",name:"Airport transfer & hotel check-in",detail:"Welcome to the Sinai Peninsula. Evening walk along Naama Bay."}]},
      {day:2,title:"Ras Mohammed Yacht & Tiran Island",location:"Sharm El Sheikh",icon:"⛵",meals:["Breakfast","BBQ lunch on boat"],activities:[{time:"08:30 AM",name:"Luxury yacht cruise",detail:"Ras Mohammed National Park and Tiran Island. Jackson Reef: grey reef sharks and napoleons. Gordon Reef: turtles, barracuda. BBQ lunch."}]},
      {day:3,title:"Mount Sinai Night Trek & St. Catherine",location:"St. Catherine",icon:"⛰️",meals:["Breakfast"],activities:[{time:"11:00 PM",name:"Night departure for Mount Sinai",detail:"Coach from Sharm. Arrive at midnight."},{time:"12:30 AM",name:"The Sinai summit trek",detail:"2.5-hour ascent to 2,285m. Arrive summit 90 minutes before dawn. Watch the most sacred sunrise in three world religions."},{time:"07:30 AM",name:"St. Catherine's Monastery",detail:"World's oldest continuously inhabited Christian monastery (565 AD). The Burning Bush. 4,500 manuscripts."}]},
      {day:4,title:"Dahab — Blue Hole & Coloured Canyon",location:"Dahab",icon:"🤿",meals:["Breakfast","Dinner"],activities:[{time:"09:00 AM",name:"Dahab Blue Hole",detail:"100-metre deep submarine sinkhole. Enormous napoleon fish, turtles, tropical fish. PADI Advanced divers can go deeper."},{time:"04:00 PM",name:"Coloured Canyon",detail:"Narrow slot canyon in multicoloured sandstone. Bands of red, yellow, purple, orange and white. Most visually striking geological formation in the Sinai."}]},
      {day:5,title:"Bedouin Desert Camp & Nuweiba",location:"Sinai Desert → Nuweiba",icon:"🐪",meals:["Breakfast","Bedouin dinner"],activities:[{time:"09:00 AM",name:"Bedouin camel trek",detail:"Ride into the Sinai wilderness with a Bedouin guide. Traditional encampment: bread baked in sand, desert navigation stories, Bedouin tea."},{time:"04:00 PM",name:"Arrive Nuweiba",detail:"Beach lodge directly on the Gulf of Aqaba facing Jordan and Saudi Arabia. Extraordinary sunset."},{time:"07:00 PM",name:"Bedouin stargazing dinner",detail:"Lamb slow-cooked underground (zarb), lentil soup, fresh bread. 10,000 stars."}]},
      {day:6,title:"Nuweiba Beach & Departure",location:"Nuweiba → Sharm",icon:"✈️",meals:["Breakfast"],activities:[{time:"Morning",name:"Ras Abu Galum snorkeling",detail:"Most pristine protected marine area in the Sinai. No motorised sports. Completely unspoiled coral."},{time:"12:00 PM",name:"Drive back to Sharm Airport",detail:"3-hour drive through spectacular Sinai mountains."}]},
    ],
  },
  {
    id:"cairo-luxor-aswan-5days",
    title:"Cairo · Luxor · Aswan — 5 Day Sprint",
    subtitle:"5 Days · 4 Nights · Best of Pharaonic Egypt",
    category:"short-break", badge:"Best Value", badgeColor:"#D4A847",
    duration:"5D / 4N", price:750, rating:4.87, reviews:2341,
    difficulty:"Easy", groupSize:"2–16",
    heroImg:"https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1400&q=85",
    cities:["Cairo","Luxor","Aswan"],
    tags:["Pyramids","Temples","Abu Simbel","History","Culture"],
    includes:["4 nights 5★ hotels","Domestic flights: Cairo→Aswan, Luxor→Cairo","Private Egyptologist guide","All entrance fees","All transfers","Daily breakfast + 3 lunches"],
    excludes:["International flights","Visa","Hot air balloon (+$125)","Abu Simbel optional (+$80)","Tips"],
    highlights:["Great Pyramids & Grand Egyptian Museum","Abu Simbel option","Philae Temple by motorboat","Valley of the Kings","Karnak Temple","Felucca sunset sail"],
    itinerary:[
      {day:1,title:"Cairo — Pyramids & GEM",location:"Cairo",icon:"🔺",meals:["Breakfast","Lunch"],activities:[{time:"08:30 AM",name:"Giza Plateau",detail:"Great Pyramid, Sphinx, Valley Temple. Grand Egyptian Museum — full Tutankhamun galleries."},{time:"03:00 PM",name:"Saqqara & Memphis",detail:"Step Pyramid (2,650 BC), Memphis ruins, colossal Ramesses II."}]},
      {day:2,title:"Fly Cairo → Aswan",location:"Aswan",icon:"✈️",meals:["Breakfast","Lunch"],optionalExtra:"🏛️ Abu Simbel (+$80) — strongly recommended",activities:[{time:"06:00 AM",name:"Cairo → Aswan flight",detail:"1-hour flight."},{time:"09:30 AM",name:"Aswan sites",detail:"High Dam, Unfinished Obelisk, Philae Temple by motorboat."},{time:"05:00 PM",name:"Felucca sunset",detail:"Traditional sail with Nubian tea around Elephantine Island."}]},
      {day:3,title:"Aswan → Luxor",location:"Luxor",icon:"🚗",meals:["Breakfast"],activities:[{time:"Morning",name:"Drive Aswan → Luxor (3 hours)",detail:"Scenic road along the East Bank, passing Edfu and Kom Ombo."},{time:"02:00 PM",name:"Luxor Temple & Karnak",detail:"Two of Egypt's greatest monuments in one afternoon."}]},
      {day:4,title:"Luxor West Bank — Valley of the Kings",location:"Luxor",icon:"⚱️",meals:["Breakfast","Lunch"],optionalExtra:"🎈 Hot Air Balloon at dawn (+$125)",activities:[{time:"07:00 AM",name:"Valley of the Kings",detail:"3 royal tombs. Tutankhamun optional ($25)."},{time:"10:00 AM",name:"Hatshepsut Temple & Colossi",detail:"Three terraced colonnades. Twin guardian statues."}]},
      {day:5,title:"Fly Luxor → Cairo — Departure",location:"Cairo",icon:"✈️",meals:["Breakfast"],activities:[{time:"Morning",name:"Luxor Museum (optional)",detail:"World-class New Kingdom art in a perfectly curated museum."},{time:"Flexible",name:"Fly Luxor → Cairo",detail:"1-hour flight. Transfer to international terminal."}]},
    ],
  },
];

// ════════════════════════════════════════════════════════════════
//  CSS
// ════════════════════════════════════════════════════════════════
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&display=swap');
:root{--g:#C9A84C;--gl:#E8C96D;--gd:#8B6010;--bg:#FAF6ED;--cream2:#F3ECD8;--ink:#231A0E;--card:#FFFFFF;--dark:#171009;}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--ink);font-family:'Josefin Sans',sans-serif;}
::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:var(--cream2);}::-webkit-scrollbar-thumb{background:rgba(193,156,60,.45);border-radius:3px;}
@keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes slideD{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes popIn{from{opacity:0;transform:scale(.94)}to{opacity:1;transform:scale(1)}}
@keyframes heroZoom{0%{transform:scale(1)}100%{transform:scale(1.05)}}
.pkcard{transition:transform .4s cubic-bezier(.25,.8,.25,1),box-shadow .4s;}
.pkcard:hover{transform:translateY(-7px);box-shadow:0 28px 60px rgba(35,26,14,.2)!important;}
.pkcard:hover .pkimg{transform:scale(1.07)!important;}
.pkimg{transition:transform .6s ease;}
.pk-chip{background:rgba(201,168,76,.07);border:1px solid rgba(193,156,60,.2);color:rgba(35,26,14,.65);border-radius:14px;padding:4px 11px;font-size:10px;font-family:'Josefin Sans',sans-serif;cursor:default;}
.pk-btn-gold{background:linear-gradient(135deg,#A07828,#C9A84C,#E8C96D);color:#FAF6ED;border:none;border-radius:10px;cursor:pointer;font-family:'Josefin Sans',sans-serif;font-weight:700;letter-spacing:.15em;text-transform:uppercase;transition:all .2s;}
.pk-btn-gold:hover{box-shadow:0 8px 28px rgba(160,120,40,.4);transform:translateY(-2px);}
.pk-eyebrow{font-size:9px;color:var(--gd);letter-spacing:4px;text-transform:uppercase;font-weight:700;font-family:'Josefin Sans',sans-serif;}
.pk-title{font-family:'Cinzel',serif;font-weight:700;color:var(--ink);line-height:1.2;}
.pk-tab{background:none;border:none;border-bottom:2.5px solid transparent;color:rgba(35,26,14,.5);padding:14px 20px;cursor:pointer;font-family:'Josefin Sans',sans-serif;font-size:10px;letter-spacing:.18em;text-transform:uppercase;transition:all .2s;font-weight:600;white-space:nowrap;}
.pk-tab.active{border-bottom-color:var(--g);color:var(--gd);}
.pk-cat{background:transparent;border:1.5px solid rgba(193,156,60,.22);color:rgba(35,26,14,.55);padding:7px 16px;border-radius:22px;cursor:pointer;font-size:10px;letter-spacing:.14em;text-transform:uppercase;font-family:'Josefin Sans',sans-serif;font-weight:700;transition:all .2s;white-space:nowrap;}
.pk-cat.active{background:rgba(201,168,76,.14);border-color:rgba(160,120,40,.55);color:#8B6010;}
.pk-day{padding:11px 18px;cursor:pointer;border-left:3px solid transparent;transition:all .2s;}
.pk-day.active{background:rgba(201,168,76,.07);border-left-color:var(--g);}
.pk-day:hover{background:rgba(201,168,76,.05);}
.inp{background:rgba(201,168,76,.05);border:1.5px solid rgba(193,156,60,.22);border-radius:10px;padding:11px 14px;color:var(--ink);font-size:13px;outline:none;width:100%;font-family:'Cormorant Garamond',serif;}
.inp:focus{border-color:rgba(160,120,40,.65);box-shadow:0 0 0 3px rgba(201,168,76,.1);}
.av-footlink:hover{color:var(--gd)!important;}
@media(max-width:760px){
  .pk-detail-layout{grid-template-columns:1fr!important;}
  .pk-day-sidebar{display:none!important;}
  .pk-grid{grid-template-columns:1fr!important;}
}
@media(max-width:900px){
  .pk-includes-grid{grid-template-columns:1fr!important;}
  .pk-highlights-cols{columns:1!important;}
}
`;

// ════════════════════════════════════════════════════════════════
//  LOGO (same as Home.jsx)
// ════════════════════════════════════════════════════════════════
function AurevianLogo({size=44}){
  return(
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pkPyr" x1="8%" y1="0%" x2="95%" y2="100%">
          <stop offset="0%" stopColor="#7E5A0E"/>
          <stop offset="50%" stopColor="#C9A84C"/>
          <stop offset="100%" stopColor="#F0D78C"/>
        </linearGradient>
        <linearGradient id="pkRing" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8C96D"/>
          <stop offset="100%" stopColor="#8B6010"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="29.5" stroke="url(#pkRing)" strokeWidth="1" opacity="0.5"/>
      <circle cx="32" cy="32" r="25.6" stroke="url(#pkRing)" strokeWidth="0.6" opacity="0.32"/>
      <line x1="11.5" y1="49.5" x2="52.5" y2="49.5" stroke="url(#pkRing)" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      <path d="M32 12.5 L50.5 49 L13.5 49 Z" fill="url(#pkPyr)"/>
      <circle cx="32" cy="34.5" r="6.2" fill="#FBEFC8" opacity="0.95"/>
      <rect x="19.5" y="33.1" width="25" height="2.7" fill="#FBEFC8"/>
      <circle cx="32" cy="12.5" r="1.5" fill="#F7E2A0"/>
    </svg>
  );
}
function BrandMark({size=44,dark}){
  const navigate = useNavigate();
  return(
    <div style={{display:"flex",alignItems:"center",gap:11,cursor:"pointer",flexShrink:0}} onClick={()=>navigate("/")}>
      <AurevianLogo size={size}/>
      <div style={{lineHeight:1}}>
        <div style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(13px,1.6vw,17px)",fontWeight:700,letterSpacing:".1em",color:dark?"#FAF6ED":"#231A0E"}}>AUREVIAN</div>
        <div style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(11px,1.3vw,14px)",fontWeight:600,letterSpacing:".22em",color:dark?"rgba(250,246,237,.75)":"#8B6010",marginTop:1}}>TOURS</div>
        <div style={{fontSize:"clamp(6px,.8vw,7px)",color:dark?"rgba(250,246,237,.5)":"#9C7A3C",letterSpacing:".28em",marginTop:3,fontFamily:"'Josefin Sans',sans-serif",fontWeight:600}}>LUXURY EGYPT JOURNEYS</div>
      </div>
    </div>
  );
}

const Stars = ({n})=><span style={{color:"#C9A84C",letterSpacing:1}}>{"★".repeat(Math.floor(n))}{"☆".repeat(5-Math.floor(n))}</span>;

// ════════════════════════════════════════════════════════════════
//  PACKAGE CARD
// ════════════════════════════════════════════════════════════════
function PackageCard({pkg, cur, onOpen}){
  return(
    <div className="pkcard" onClick={()=>onOpen(pkg)}
      style={{background:"#fff",border:"1px solid rgba(35,26,14,.08)",borderRadius:18,overflow:"hidden",cursor:"pointer",boxShadow:"0 8px 26px rgba(35,26,14,.08)",display:"flex",flexDirection:"column"}}>
      <div style={{position:"relative",height:192,overflow:"hidden",background:"#EDE3C8"}}>
        <img className="pkimg" src={pkg.heroImg} alt={pkg.title} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}
          onError={e=>e.target.src=`https://placehold.co/800x400/EDE3C8/8B6010?text=${encodeURIComponent(pkg.title.slice(0,14))}`}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(20,15,8,.5) 0%,transparent 55%)"}}/>
        <div style={{position:"absolute",top:11,left:11,background:pkg.badgeColor,color:"#fff",fontSize:9,fontWeight:700,padding:"4px 12px",borderRadius:18,textTransform:"uppercase",letterSpacing:".08em",fontFamily:"'Josefin Sans',sans-serif"}}>{pkg.badge}</div>
        <div style={{position:"absolute",top:11,right:11,background:"rgba(250,246,237,.92)",color:"#6B4E1A",fontSize:9,fontWeight:700,padding:"4px 10px",borderRadius:7,fontFamily:"'Josefin Sans',sans-serif"}}>{pkg.duration}</div>
        <div style={{position:"absolute",bottom:10,left:12,display:"flex",gap:5,flexWrap:"wrap"}}>
          {pkg.cities.slice(0,3).map((c,i)=><span key={i} style={{background:"rgba(20,15,8,.7)",color:"rgba(250,246,237,.9)",fontSize:8,padding:"2px 8px",borderRadius:8,fontFamily:"'Josefin Sans',sans-serif"}}>📍{c}</span>)}
        </div>
      </div>
      <div style={{padding:"16px 18px 20px",flex:1,display:"flex",flexDirection:"column"}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:11.5,color:"#9C7A3C",marginBottom:4}}>{pkg.subtitle}</div>
        <div style={{fontFamily:"'Cinzel',serif",fontWeight:700,fontSize:15,color:"#231A0E",marginBottom:8,lineHeight:1.3}}>{pkg.title}</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:10}}>
          {pkg.tags.slice(0,3).map((t,i)=><span key={i} className="pk-chip">{t}</span>)}
        </div>
        <div style={{fontSize:11,color:"#9C7A3C",fontFamily:"'Josefin Sans',sans-serif",marginBottom:12}}><Stars n={pkg.rating}/> {pkg.rating} <span style={{color:"#B8A06A"}}>({pkg.reviews.toLocaleString()})</span></div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid rgba(193,156,60,.12)",paddingTop:12,marginTop:"auto"}}>
          <div>
            <div style={{fontSize:9,color:"#9C7A3C",fontFamily:"'Josefin Sans',sans-serif"}}>From</div>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:20,fontWeight:700,color:"#8B6010"}}>{fmt(pkg.price,cur)}</div>
            <div style={{fontSize:9,color:"#9C7A3C",fontFamily:"'Josefin Sans',sans-serif"}}>per person</div>
          </div>
          <button className="pk-btn-gold" style={{padding:"11px 20px",fontSize:10}}>View Program →</button>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
//  PACKAGE DETAIL MODAL
// ════════════════════════════════════════════════════════════════
function PackageDetail({pkg, cur, onClose, onBook}){
  const [activeDay,setActiveDay] = useState(0);
  const [activeTab,setActiveTab] = useState("itinerary");
  const day = pkg.itinerary[activeDay];
  useEffect(()=>{document.body.style.overflow="hidden";return()=>{document.body.style.overflow="";};},[]);
  return(
    <div onClick={e=>e.target===e.currentTarget&&onClose()} style={{position:"fixed",inset:0,background:"rgba(20,15,8,.72)",backdropFilter:"blur(18px)",zIndex:2000,display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"clamp(10px,3vw,24px)",overflowY:"auto",animation:"fadeIn .22s ease"}}>
      <div onClick={e=>e.stopPropagation()} style={{background:"#FAF6ED",border:"1.5px solid rgba(193,156,60,.35)",borderRadius:22,width:"min(1080px,97vw)",margin:"auto",boxShadow:"0 50px 120px rgba(20,15,8,.45)",overflow:"hidden",animation:"popIn .28s ease"}}>

        {/* hero */}
        <div style={{position:"relative",height:"clamp(180px,28vw,280px)"}}>
          <img src={pkg.heroImg} alt={pkg.title} style={{width:"100%",height:"100%",objectFit:"cover",filter:"brightness(.35)"}}
            onError={e=>e.target.style.display="none"}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(250,246,237,1) 0%,rgba(250,246,237,.2) 55%,transparent 100%)"}}/>
          <button onClick={onClose} style={{position:"absolute",top:14,right:14,width:34,height:34,borderRadius:"50%",background:"rgba(250,246,237,.88)",border:"1.5px solid rgba(193,156,60,.4)",color:"#A07828",fontSize:15,cursor:"pointer"}}>✕</button>
          <div style={{position:"absolute",bottom:"clamp(14px,3vw,26px)",left:"clamp(16px,4vw,28px)",right:130}}>
            <div style={{display:"flex",gap:7,marginBottom:8,flexWrap:"wrap"}}>
              <span style={{background:pkg.badgeColor,color:"#fff",fontSize:9,fontWeight:700,padding:"3px 13px",borderRadius:18,fontFamily:"'Josefin Sans',sans-serif",letterSpacing:".1em"}}>{pkg.badge}</span>
              <span style={{background:"rgba(35,26,14,.1)",color:"#231A0E",fontSize:9,padding:"3px 11px",borderRadius:7,fontFamily:"'Josefin Sans',sans-serif"}}>{pkg.duration}</span>
              <span style={{background:"rgba(35,26,14,.1)",color:"#231A0E",fontSize:9,padding:"3px 11px",borderRadius:7,fontFamily:"'Josefin Sans',sans-serif"}}>👥 {pkg.groupSize}</span>
            </div>
            <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(16px,2.4vw,24px)",fontWeight:700,color:"#231A0E",marginBottom:4}}>{pkg.title}</h2>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:13,color:"#9C7A3C",marginBottom:6}}>{pkg.subtitle}</div>
            <div style={{fontSize:11,color:"#9C7A3C",fontFamily:"'Josefin Sans',sans-serif"}}><Stars n={pkg.rating}/> {pkg.rating} <span style={{color:"#B8A06A"}}>({pkg.reviews.toLocaleString()} reviews)</span></div>
          </div>
          {/* price box */}
          <div style={{position:"absolute",bottom:"clamp(14px,3vw,24px)",right:"clamp(14px,3vw,22px)",background:"rgba(255,252,244,.95)",backdropFilter:"blur(12px)",border:"1.5px solid rgba(193,156,60,.35)",borderRadius:14,padding:"14px 18px",textAlign:"center",minWidth:110}}>
            <div style={{fontSize:8,color:"#9C7A3C",letterSpacing:2,textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",marginBottom:2}}>FROM</div>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:22,fontWeight:700,color:"#8B6010",lineHeight:1}}>{fmt(pkg.price,cur)}</div>
            <div style={{fontSize:8,color:"#9C7A3C",fontFamily:"'Josefin Sans',sans-serif",marginBottom:10}}>per person</div>
            <button className="pk-btn-gold" onClick={()=>onBook(pkg)} style={{width:"100%",padding:"9px",fontSize:9}}>Book Now</button>
          </div>
        </div>

        {/* quick stats */}
        <div style={{display:"flex",background:"#fff",borderBottom:"1px solid rgba(193,156,60,.14)",overflowX:"auto"}}>
          {[["📅","Duration",pkg.duration],["🗺️","Route",pkg.cities.join(" → ")],["🎯","Level",pkg.difficulty],["👥","Group",pkg.groupSize],["⭐","Rating",`${pkg.rating}/5`]].map(([ic,l,v])=>(
            <div key={l} style={{flex:1,minWidth:110,padding:"12px 14px",borderRight:"1px solid rgba(193,156,60,.08)",textAlign:"center"}}>
              <div style={{fontSize:15,marginBottom:3}}>{ic}</div>
              <div style={{fontSize:8,color:"#9C7A3C",letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",marginBottom:2}}>{l}</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:11.5,color:"#231A0E",lineHeight:1.3}}>{v}</div>
            </div>
          ))}
        </div>

        {/* tabs */}
        <div style={{display:"flex",borderBottom:"1px solid rgba(193,156,60,.14)",padding:"0 16px",background:"#FAF6ED",overflowX:"auto"}}>
          {[["itinerary","📋 Full Itinerary"],["includes","✅ What's Included"],["highlights","⭐ Highlights"]].map(([k,lbl])=>(
            <button key={k} className={`pk-tab${activeTab===k?" active":""}`} onClick={()=>setActiveTab(k)}>{lbl}</button>
          ))}
        </div>

        {/* content */}
        <div className="pk-detail-layout" style={{display:"grid",gridTemplateColumns:activeTab==="itinerary"?"clamp(170px,22vw,230px) 1fr":"1fr",minHeight:380}}>

          {/* day sidebar */}
          {activeTab==="itinerary"&&(
            <div className="pk-day-sidebar" style={{borderRight:"1px solid rgba(193,156,60,.12)",background:"#fff",overflowY:"auto",maxHeight:520}}>
              {pkg.itinerary.map((d,i)=>(
                <div key={i} className={`pk-day${activeDay===i?" active":""}`} onClick={()=>setActiveDay(i)}>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <div style={{width:26,height:26,borderRadius:"50%",background:activeDay===i?"linear-gradient(135deg,#A07828,#C9A84C)":"rgba(201,168,76,.1)",border:activeDay===i?"none":"1.5px solid rgba(193,156,60,.25)",color:activeDay===i?"#FAF6ED":"#A07828",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,flexShrink:0}}>{d.day}</div>
                    <div>
                      <div style={{fontSize:8,color:"#9C7A3C",letterSpacing:".1em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif"}}>{d.location}</div>
                      <div style={{fontFamily:"'Cinzel',serif",fontSize:11,color:activeDay===i?"#231A0E":"#9C7A3C",fontWeight:600,lineHeight:1.25}}>{d.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* main area */}
          <div style={{padding:"clamp(16px,3vw,26px)",overflowY:"auto",maxHeight:520}}>

            {/* ITINERARY */}
            {activeTab==="itinerary"&&day&&(
              <div>
                <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
                  <span style={{fontSize:26}}>{day.icon}</span>
                  <div>
                    <div style={{fontSize:9,color:"#A07828",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif"}}>Day {day.day} — {day.location}</div>
                    <h3 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(14px,2vw,18px)",fontWeight:700,color:"#231A0E"}}>{day.title}</h3>
                  </div>
                </div>
                <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}>
                  {(day.meals||[]).map((m,i)=><span key={i} style={{background:"rgba(201,168,76,.09)",border:"1px solid rgba(193,156,60,.2)",color:"#8B6010",fontSize:9,padding:"3px 10px",borderRadius:10,fontFamily:"'Josefin Sans',sans-serif"}}>🍽 {m}</span>)}
                  {day.optionalExtra&&<span style={{background:"rgba(82,183,136,.1)",border:"1px solid rgba(82,183,136,.3)",color:"#1A9E50",fontSize:9,padding:"3px 10px",borderRadius:10,fontFamily:"'Josefin Sans',sans-serif"}}>{day.optionalExtra}</span>}
                </div>
                <div style={{position:"relative",paddingLeft:20}}>
                  <div style={{position:"absolute",left:6,top:12,bottom:12,width:1,background:"linear-gradient(to bottom,rgba(193,156,60,.6),rgba(193,156,60,.08))"}}/>
                  {(day.activities||[]).map((a,i)=>(
                    <div key={i} style={{marginBottom:20,position:"relative"}}>
                      <div style={{position:"absolute",left:-20,top:6,width:10,height:10,borderRadius:"50%",background:"#C9A84C",boxShadow:"0 0 8px rgba(201,168,76,.4)"}}/>
                      <div style={{fontSize:9,color:"#A07828",letterSpacing:".1em",marginBottom:3,fontFamily:"'Josefin Sans',sans-serif",fontWeight:700}}>{a.time}</div>
                      <div style={{fontFamily:"'Cinzel',serif",fontSize:13,fontWeight:700,color:"#231A0E",marginBottom:5}}>{a.name}</div>
                      {a.detail&&<p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:"rgba(35,26,14,.7)",lineHeight:1.8,margin:0}}>{a.detail}</p>}
                    </div>
                  ))}
                </div>
                <div style={{display:"flex",justifyContent:"space-between",marginTop:18,paddingTop:14,borderTop:"1px solid rgba(193,156,60,.12)"}}>
                  <button onClick={()=>setActiveDay(Math.max(0,activeDay-1))} disabled={activeDay===0} style={{background:"rgba(201,168,76,.08)",border:"1.5px solid rgba(193,156,60,.25)",color:"#8B6010",padding:"8px 18px",borderRadius:9,cursor:activeDay===0?"not-allowed":"pointer",opacity:activeDay===0?.4:1,fontFamily:"'Josefin Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:".12em"}}>← Prev</button>
                  <span style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:12,color:"#9C7A3C",alignSelf:"center"}}>Day {activeDay+1} of {pkg.itinerary.length}</span>
                  <button onClick={()=>setActiveDay(Math.min(pkg.itinerary.length-1,activeDay+1))} disabled={activeDay===pkg.itinerary.length-1} style={{background:"rgba(201,168,76,.08)",border:"1.5px solid rgba(193,156,60,.25)",color:"#8B6010",padding:"8px 18px",borderRadius:9,cursor:activeDay===pkg.itinerary.length-1?"not-allowed":"pointer",opacity:activeDay===pkg.itinerary.length-1?.4:1,fontFamily:"'Josefin Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:".12em"}}>Next →</button>
                </div>
              </div>
            )}

            {/* INCLUDES */}
            {activeTab==="includes"&&(
              <div className="pk-includes-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"}}>
                <div>
                  <div style={{fontSize:9,color:"#1A9E50",letterSpacing:"0.24em",textTransform:"uppercase",fontWeight:700,fontFamily:"'Josefin Sans',sans-serif",marginBottom:14}}>✅ INCLUDED</div>
                  {pkg.includes.map((item,i)=>(
                    <div key={i} style={{display:"flex",alignItems:"flex-start",gap:9,marginBottom:10}}>
                      <div style={{width:18,height:18,borderRadius:"50%",background:"rgba(26,158,80,.1)",border:"1px solid rgba(26,158,80,.28)",color:"#1A9E50",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,flexShrink:0,marginTop:1}}>✓</div>
                      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13.5,color:"rgba(35,26,14,.75)",lineHeight:1.6}}>{item}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{fontSize:9,color:"#C0392B",letterSpacing:"0.24em",textTransform:"uppercase",fontWeight:700,fontFamily:"'Josefin Sans',sans-serif",marginBottom:14}}>✗ NOT INCLUDED</div>
                  {pkg.excludes.map((item,i)=>(
                    <div key={i} style={{display:"flex",alignItems:"flex-start",gap:9,marginBottom:10}}>
                      <div style={{width:18,height:18,borderRadius:"50%",background:"rgba(192,57,43,.08)",border:"1px solid rgba(192,57,43,.22)",color:"#C0392B",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,flexShrink:0,marginTop:1}}>✗</div>
                      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13.5,color:"rgba(35,26,14,.55)",lineHeight:1.6}}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* HIGHLIGHTS */}
            {activeTab==="highlights"&&(
              <div>
                <div style={{fontSize:9,color:"#A07828",letterSpacing:"0.25em",textTransform:"uppercase",fontWeight:700,fontFamily:"'Josefin Sans',sans-serif",marginBottom:18}}>PROGRAM HIGHLIGHTS</div>
                <div className="pk-highlights-cols" style={{columns:2,gap:"1.5rem"}}>
                  {pkg.highlights.map((h,i)=>(
                    <div key={i} style={{display:"flex",alignItems:"flex-start",gap:9,marginBottom:13,breakInside:"avoid"}}>
                      <span style={{color:"#C9A84C",fontSize:11,marginTop:2,flexShrink:0}}>✦</span>
                      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"rgba(35,26,14,.8)",lineHeight:1.65}}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* footer CTA */}
        <div style={{padding:"16px 24px",background:"#fff",borderTop:"1px solid rgba(193,156,60,.12)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
          <div>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:20,fontWeight:700,color:"#8B6010"}}>{fmt(pkg.price,cur)} <span style={{fontFamily:"'Josefin Sans',sans-serif",fontSize:10,color:"#9C7A3C"}}>per person</span></div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:12,color:"#9C7A3C"}}>Free cancellation · No hidden fees</div>
          </div>
          <div style={{display:"flex",gap:10}}>
            <a href={waLink()} target="_blank" rel="noreferrer" style={{background:"#25D366",color:"#fff",borderRadius:10,padding:"12px 18px",textDecoration:"none",fontWeight:700,fontSize:12,display:"flex",alignItems:"center",gap:7,fontFamily:"'Josefin Sans',sans-serif"}}>💬 WhatsApp</a>
            <button className="pk-btn-gold" onClick={()=>onBook(pkg)} style={{padding:"12px 26px",fontSize:11}}>✈ Book Package</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
//  BOOKING MODAL (matches Home.jsx BookingModal style)
// ════════════════════════════════════════════════════════════════
function BookingModal({pkg, cur, onClose}){
  const [step,setStep] = useState(1);
  const [busy,setBusy] = useState(false);
  const [f,setF] = useState({name:"",email:"",phone:"",date:"",guests:"2",notes:""});
  if(!pkg) return null;
  const upd = k=>e=>setF(p=>({...p,[k]:e.target.value}));
  const ok = f.name&&f.email&&f.date;
  const total = fmt(pkg.price*parseInt(f.guests||1), cur);
  const waMsg = `🏛️ *New Package Booking — Aurevian Tours*\n\n📋 *${pkg.title}*\n⏱ ${pkg.duration}\n\n👤 *Name:* ${f.name}\n✉️ *Email:* ${f.email}\n📱 *Phone:* ${f.phone}\n📅 *Date:* ${f.date}\n👥 *Guests:* ${f.guests}\n💰 *Total:* ${total}\n📝 *Notes:* ${f.notes||"None"}\n\nRef: AUR-${Date.now().toString().slice(-6)}`;
  const submit = ()=>{setBusy(true);setTimeout(()=>{setBusy(false);setStep(2);},1600);};
  return(
    <div onClick={e=>e.target===e.currentTarget&&onClose()} style={{position:"fixed",inset:0,background:"rgba(20,15,8,.72)",backdropFilter:"blur(18px)",zIndex:3000,display:"flex",alignItems:"center",justifyContent:"center",padding:16,animation:"fadeIn .22s ease"}}>
      <div style={{background:"#FAF6ED",border:"1.5px solid rgba(193,156,60,.35)",borderRadius:22,width:"min(520px,96vw)",maxHeight:"92vh",overflowY:"auto",boxShadow:"0 50px 120px rgba(20,15,8,.45)",animation:"popIn .28s ease"}}>
        <div style={{padding:"20px 24px 16px",borderBottom:"1px solid rgba(193,156,60,.18)",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <div style={{fontSize:9,color:"#A07828",letterSpacing:3,textTransform:"uppercase",marginBottom:5,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Aurevian Tours · Package Booking</div>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:14,fontWeight:700,color:"#231A0E",lineHeight:1.35,maxWidth:360}}>{pkg.title}</div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:12,color:"#9C7A3C",marginTop:3}}>{pkg.duration} · {pkg.cities.join(" → ")}</div>
          </div>
          <button onClick={onClose} style={{background:"rgba(35,26,14,.06)",border:"1px solid rgba(35,26,14,.1)",color:"#9C7A3C",borderRadius:8,width:32,height:32,cursor:"pointer",fontSize:15,flexShrink:0}}>✕</button>
        </div>
        <div style={{padding:"20px 24px"}}>
          {step===2?(
            <div style={{textAlign:"center",padding:"20px 0",animation:"fadeUp .4s ease"}}>
              <div style={{fontSize:54,marginBottom:14}}>✅</div>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:20,color:"#A07828",marginBottom:8}}>Booking Confirmed!</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"#9C7A3C",lineHeight:1.8,marginBottom:22}}>Our team will contact you within 2 hours.<br/>Reference: <strong style={{color:"#A07828"}}>AUR-{Date.now().toString().slice(-6)}</strong></div>
              <div style={{display:"flex",gap:11,justifyContent:"center",flexWrap:"wrap"}}>
                <a href={waLink(waMsg)} target="_blank" rel="noreferrer" style={{background:"#25D366",color:"#fff",borderRadius:11,padding:"12px 22px",textDecoration:"none",fontWeight:700,fontSize:13,display:"flex",alignItems:"center",gap:8,fontFamily:"'Josefin Sans',sans-serif"}}>💬 Confirm on WhatsApp</a>
                <button onClick={onClose} style={{background:"rgba(35,26,14,.06)",border:"1px solid rgba(35,26,14,.1)",color:"#9C7A3C",borderRadius:11,padding:"12px 20px",cursor:"pointer",fontSize:13,fontFamily:"'Josefin Sans',sans-serif"}}>Close</button>
              </div>
            </div>
          ):(
            <>
              <div style={{background:"rgba(201,168,76,.07)",border:"1.5px solid rgba(193,156,60,.22)",borderRadius:11,padding:"11px 15px",marginBottom:18,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontFamily:"'Josefin Sans',sans-serif",color:"rgba(35,26,14,.65)",fontSize:12}}>{pkg.duration} · 👥 {f.guests} person(s)</span>
                <span style={{fontFamily:"'Cinzel',serif",color:"#8B6010",fontWeight:700,fontSize:17}}>{total}</span>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                {[{k:"name",l:"Full Name *",p:"Your full name",t:"text",col:"1/-1"},{k:"email",l:"Email *",p:"your@email.com",t:"email"},{k:"phone",l:"Phone / WhatsApp",p:"+1 234 567",t:"tel"},{k:"date",l:"Travel Start Date *",p:"",t:"date"},{k:"guests",l:"Number of Guests",p:"2",t:"number"}].map(fl=>(
                  <div key={fl.k} style={{gridColumn:fl.col||"auto"}}>
                    <label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:6,fontFamily:"'Josefin Sans',sans-serif",fontWeight:700}}>{fl.l}</label>
                    <input className="inp" type={fl.t} value={f[fl.k]} onChange={upd(fl.k)} placeholder={fl.p}/>
                  </div>
                ))}
                <div style={{gridColumn:"1/-1"}}>
                  <label style={{fontSize:9,color:"#A07828",letterSpacing:2,textTransform:"uppercase",display:"block",marginBottom:6,fontFamily:"'Josefin Sans',sans-serif",fontWeight:700}}>Special Requests</label>
                  <textarea className="inp" value={f.notes} onChange={upd("notes")} rows={2} style={{resize:"none"}} placeholder="Dietary needs, room preferences, special occasions…"/>
                </div>
              </div>
              <div style={{display:"flex",gap:10,marginTop:18}}>
                <button className="pk-btn-gold" onClick={submit} disabled={busy||!ok} style={{flex:1,padding:"14px",fontSize:11,opacity:(!ok||busy)?.45:1,display:"flex",alignItems:"center",justifyContent:"center",gap:9}}>
                  {busy?<><div style={{width:16,height:16,border:"2px solid rgba(250,246,237,.3)",borderTop:"2px solid #FAF6ED",borderRadius:"50%",animation:"spin .7s linear infinite"}}/>Sending…</>:"✈ Confirm Booking"}
                </button>
                <a href={waLink(waMsg)} target="_blank" rel="noreferrer" style={{background:"#25D366",color:"#fff",borderRadius:10,padding:"14px 16px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,textDecoration:"none"}}>💬</a>
              </div>
              <div style={{textAlign:"center",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:12,color:"#9C7A3C",marginTop:10}}>Free cancellation up to 30 days before departure · No charge until confirmed</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
//  MAIN PAGE
// ════════════════════════════════════════════════════════════════
export default function Packages({currency="USD"}){
  const navigate = useNavigate();
  const [cur,setCur] = useState(currency||"USD");
  const [cat,setCat] = useState("all");
  const [q,setQ] = useState("");
  const [sort,setSort] = useState("popular");
  const [selectedPkg,setSelectedPkg] = useState(null);
  const [bookingPkg,setBookingPkg] = useState(null);
  const [scrolled,setSc] = useState(false);

  useEffect(()=>{
    if(!document.getElementById("gt-script-pkg")){
      window.googleTranslateElementInit=()=>{new window.google.translate.TranslateElement({pageLanguage:"en",includedLanguages:"en,ar,fr,es,de,it,pt,ru,zh-CN,ja,nl",autoDisplay:false},"gt-hidden-pkg");};
      const s=document.createElement("script");s.id="gt-script-pkg";s.src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";s.async=true;document.head.appendChild(s);
    }
  },[]);
  useEffect(()=>{const fn=()=>setSc(window.scrollY>10);window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn);},[]);

  const filtered = PACKAGES
    .filter(p=>cat==="all"||p.category===cat)
    .filter(p=>!q||p.title.toLowerCase().includes(q.toLowerCase())||p.cities.some(c=>c.toLowerCase().includes(q.toLowerCase())))
    .sort((a,b)=>sort==="price"?a.price-b.price:sort==="price_desc"?b.price-a.price:sort==="rating"?b.rating-a.rating:b.reviews-a.reviews);

  const handleBook = (pkg)=>{setSelectedPkg(null);setBookingPkg(pkg);};

  return(
    <div style={{background:"#FAF6ED",color:"#231A0E",minHeight:"100vh",overflowX:"hidden",fontFamily:"'Josefin Sans',sans-serif"}}>
      <style>{CSS}</style>
      <div id="gt-hidden-pkg" style={{display:"none"}}/>

      {/* ── NAV ── */}
      <nav style={{position:"sticky",top:0,zIndex:1000,height:72,background:scrolled?"rgba(250,246,237,.98)":"rgba(250,246,237,.96)",backdropFilter:"blur(18px)",borderBottom:"1px solid rgba(193,156,60,.18)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 clamp(14px,4vw,40px)",boxShadow:scrolled?"0 4px 26px rgba(35,26,14,.1)":"none",transition:"all .3s"}}>
        <BrandMark size={42}/>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <select value={cur} onChange={e=>setCur(e.target.value)} style={{background:"rgba(201,168,76,.08)",border:"1.5px solid rgba(193,156,60,.28)",color:"#A07828",borderRadius:8,padding:"6px 11px",fontSize:10,fontFamily:"'Josefin Sans',sans-serif",cursor:"pointer",outline:"none",fontWeight:700}}>
            {Object.entries(CURR).map(([code,{s}])=><option key={code} value={code}>{s} {code}</option>)}
          </select>
          <a href={waLink()} target="_blank" rel="noreferrer" style={{background:"#25D366",color:"#fff",borderRadius:9,padding:"9px 16px",textDecoration:"none",fontWeight:700,fontSize:11,fontFamily:"'Josefin Sans',sans-serif",letterSpacing:".08em"}}>💬 WhatsApp</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{position:"relative",minHeight:"clamp(320px,45vw,480px)",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <img src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1600&q=80" alt="Egypt packages hero"
          style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",filter:"brightness(.28)",animation:"heroZoom 22s ease-in-out infinite alternate"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(100deg,rgba(17,12,6,.9) 0%,rgba(17,12,6,.55) 55%,rgba(17,12,6,.18) 100%),linear-gradient(to top,rgba(17,12,6,.6) 0%,transparent 40%)"}}/>
        {/* decorative hieroglyph glyphs */}
        <span style={{position:"absolute",top:"18%",right:"8%",fontSize:"5rem",opacity:.04,color:"#C9A84C",fontFamily:"serif",pointerEvents:"none"}}>𓆣</span>
        <span style={{position:"absolute",bottom:"20%",right:"15%",fontSize:"3.5rem",opacity:.04,color:"#C9A84C",fontFamily:"serif",pointerEvents:"none"}}>𓂝</span>
        <div style={{position:"relative",zIndex:2,padding:"clamp(48px,8vw,80px) clamp(20px,6vw,60px)",maxWidth:620}}>
          <div style={{fontSize:9,color:"#E8C96D",letterSpacing:".32em",textTransform:"uppercase",fontWeight:700,marginBottom:14,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Aurevian Tours · Luxury Egypt Journeys</div>
          <h1 style={{fontFamily:"'Cinzel',serif",fontWeight:700,fontSize:"clamp(28px,5vw,52px)",color:"#FAF6ED",lineHeight:1.1,marginBottom:14}}>Egypt<br/><span style={{color:"#E8C96D"}}>Travel Packages</span></h1>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:"clamp(14px,1.8vw,18px)",color:"rgba(250,246,237,.72)",lineHeight:1.75,marginBottom:28,maxWidth:480}}>Complete, handcrafted Egypt journeys — every detail planned, every temple covered.</p>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search packages or destinations…"
              style={{flex:1,minWidth:200,background:"rgba(250,246,237,.08)",backdropFilter:"blur(10px)",border:"1.5px solid rgba(250,246,237,.3)",borderRadius:11,padding:"12px 18px",color:"#FAF6ED",fontSize:13,outline:"none",fontFamily:"'Cormorant Garamond',serif"}}/>
            <button className="pk-btn-gold" style={{padding:"12px 22px",fontSize:10}}>🔍 Search</button>
          </div>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <div style={{position:"sticky",top:72,zIndex:900,background:"rgba(250,246,237,.98)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(193,156,60,.16)",padding:"0 clamp(14px,4vw,40px)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
          <div style={{display:"flex",gap:5,overflowX:"auto",scrollbarWidth:"none",padding:"10px 0"}}>
            {Object.entries(CAT_LABELS).map(([k,lbl])=>(
              <button key={k} className={`pk-cat${cat===k?" active":""}`} onClick={()=>setCat(k)}>{CAT_ICONS[k]} {lbl}</button>
            ))}
          </div>
          <div style={{display:"flex",alignItems:"center",gap:10,padding:"10px 0"}}>
            <span style={{fontFamily:"'Josefin Sans',sans-serif",color:"rgba(35,26,14,.5)",fontSize:11}}><b style={{color:"#8B6010"}}>{filtered.length}</b> packages</span>
            <select value={sort} onChange={e=>setSort(e.target.value)} style={{background:"rgba(201,168,76,.06)",border:"1.5px solid rgba(193,156,60,.2)",color:"#231A0E",borderRadius:8,padding:"7px 12px",fontSize:10,fontFamily:"'Josefin Sans',sans-serif",cursor:"pointer",outline:"none"}}>
              <option value="popular">Most Popular</option>
              <option value="rating">Top Rated</option>
              <option value="price">Price: Low → High</option>
              <option value="price_desc">Price: High → Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── GRID ── */}
      <section style={{padding:"clamp(32px,5vw,60px) clamp(16px,4vw,48px)",maxWidth:1360,margin:"0 auto"}}>
        {filtered.length===0?(
          <div style={{textAlign:"center",padding:"80px 0"}}>
            <div style={{fontSize:"2.5rem",marginBottom:12}}>🔍</div>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:18,color:"rgba(35,26,14,.5)",marginBottom:16}}>No packages found</div>
            <button className="pk-btn-gold" onClick={()=>{setCat("all");setQ("");}} style={{padding:"12px 28px",fontSize:11}}>Clear Filters</button>
          </div>
        ):(
          <div className="pk-grid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:22}}>
            {filtered.map(pkg=><PackageCard key={pkg.id} pkg={pkg} cur={cur} onOpen={setSelectedPkg}/>)}
          </div>
        )}
      </section>

      {/* ── TRUST STRIP ── */}
      <div style={{background:"#171009",borderTop:"1px solid rgba(193,156,60,.12)"}}>
        <div style={{maxWidth:1180,margin:"0 auto",padding:"clamp(22px,4vw,38px) clamp(16px,4vw,40px)",display:"flex",justifyContent:"space-around",flexWrap:"wrap",gap:24}}>
          {[["🛡️","Money-Back Guarantee","30 days before departure"],["✈️","Domestic Flights Included","In most packages"],["🎓","Private Egyptologist","Certified expert every day"],["⭐","4.9 / 5 Rating","50,000+ verified travelers"],["💬","24/7 Support",PHONE_DISPLAY]].map(([ic,t,d])=>(
            <div key={t} style={{display:"flex",alignItems:"center",gap:11}}>
              <span style={{fontSize:22}}>{ic}</span>
              <div>
                <div style={{fontFamily:"'Cinzel',serif",fontSize:12,fontWeight:700,color:"#FAF6ED"}}>{t}</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:12,color:"rgba(250,246,237,.55)"}}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MINI FOOTER ── */}
      <footer style={{background:"#FAF6ED",borderTop:"1px solid rgba(193,156,60,.15)",padding:"clamp(22px,4vw,34px) clamp(16px,4vw,40px)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,maxWidth:1180,margin:"0 auto"}}>
          <BrandMark size={40}/>
          <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
            <a href={`tel:+${PHONE_WA}`} style={{color:"#9C7A3C",fontSize:12,textDecoration:"none",fontFamily:"'Cormorant Garamond',serif"}}>📞 {PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} style={{color:"#9C7A3C",fontSize:12,textDecoration:"none",fontFamily:"'Cormorant Garamond',serif"}}>✉ {EMAIL}</a>
            <a href={waLink()} target="_blank" rel="noreferrer" style={{color:"#25D366",fontSize:12,textDecoration:"none",fontFamily:"'Josefin Sans',sans-serif",fontWeight:700}}>💬 WhatsApp</a>
          </div>
          <span style={{color:"rgba(35,26,14,.4)",fontSize:11,fontFamily:"'Josefin Sans',sans-serif"}}>© 2026 Aurevian Tours</span>
        </div>
      </footer>

      {/* ── FLOAT ── */}
      <a href={waLink()} target="_blank" rel="noreferrer" style={{position:"fixed",bottom:76,right:20,background:"#25D366",color:"#fff",borderRadius:30,padding:"11px 18px",textDecoration:"none",fontWeight:700,fontSize:12,display:"flex",alignItems:"center",gap:8,zIndex:500,boxShadow:"0 6px 24px rgba(37,211,102,.45)",fontFamily:"'Josefin Sans',sans-serif"}}>💬 <span>WhatsApp</span></a>
      <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{position:"fixed",bottom:20,right:20,width:44,height:44,borderRadius:11,background:"rgba(201,168,76,.16)",border:"1.5px solid rgba(193,156,60,.4)",color:"#A07828",fontSize:15,cursor:"pointer",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center"}}>▲</button>

      {/* ── MODALS ── */}
      {selectedPkg&&<PackageDetail pkg={selectedPkg} cur={cur} onClose={()=>setSelectedPkg(null)} onBook={handleBook}/>}
      {bookingPkg&&<BookingModal pkg={bookingPkg} cur={cur} onClose={()=>setBookingPkg(null)}/>}
    </div>
  );
}