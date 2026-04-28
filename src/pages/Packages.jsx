import { useState, useEffect, useRef } from "react";
 
// ══════════════════════════════════════════════════════════════════════════════
//  PACKAGES DATA — Full detailed itineraries
// ══════════════════════════════════════════════════════════════════════════════
const PACKAGES = [
  // ─── 1. NILE CRUISE LUXOR → ASWAN ────────────────────────────────────────
  {
    id: "cruise-luxor-aswan",
    title: "Nile Cruise: Luxor to Aswan",
    titleAr: "رحلة نيلية: الأقصر إلى أسوان",
    subtitle: "5 Days · 4 Nights · Floating Palace on the Sacred River",
    category: "cruise",
    badge: "Bestseller",
    badgeColor: "#D4A847",
    duration: "5D / 4N",
    price: 650,
    rating: 4.95,
    reviews: 4218,
    difficulty: "Easy",
    groupSize: "2–20",
    heroImg: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1400&q=85",
    cities: ["Luxor", "Esna", "Edfu", "Kom Ombo", "Aswan"],
    tags: ["Nile Cruise", "Temples", "History", "Full Board"],
    includes: [
      "4 nights on 5★ Nile cruise ship (full board)",
      "All shore excursions with certified Egyptologist guide",
      "Entrance fees to all temples listed",
      "Airport/hotel transfers in Luxor & Aswan",
      "Daily breakfast, lunch & dinner on board",
      "Welcome cocktail & farewell dinner",
      "Luggage handling",
      "24/7 onboard cruise manager",
    ],
    excludes: [
      "International/domestic flights",
      "Egypt entry visa ($25)",
      "Personal expenses & gratuities",
      "Optional hot air balloon ($125/person)",
      "Optional Abu Simbel excursion ($80/person)",
      "Alcoholic beverages",
    ],
    highlights: [
      "Karnak Temple — largest religious complex ever built",
      "Valley of the Kings — tombs of Ramesses II & Tutankhamun",
      "Temple of Hatshepsut — Egypt's only female pharaoh",
      "Colossi of Memnon — twin 18m statues at sunrise",
      "Edfu Temple (Horus) — most complete ancient temple",
      "Kom Ombo — dual temple dedicated to Sobek & Haroeris",
      "Philae Temple of Isis — Jewel of the Nile",
      "Aswan High Dam — modern Egypt's greatest feat",
      "Traditional Nubian felucca sunset sail",
    ],
    itinerary: [
      {
        day: 1, title: "Welcome to Luxor — Embarkation Day",
        location: "Luxor",
        icon: "🚢",
        meals: ["Lunch", "Dinner"],
        activities: [
          { time: "10:00 AM", name: "Airport/hotel pickup in Luxor", detail: "Private air-conditioned vehicle will meet you at Luxor International Airport or your hotel. Your Egyptologist guide introduces himself and provides a full briefing on the 5-day program." },
          { time: "12:00 PM", name: "Embarkation on 5★ Nile Cruise", detail: "Board your magnificent floating palace on the Nile. Check into your comfortable cabin with panoramic river views. Enjoy a welcome drink and lunch on the panoramic sun deck as the Nile sparkles before you." },
          { time: "02:30 PM", name: "Luxor Temple & Avenue of Sphinxes", detail: "Walk the legendary 2.7km Avenue of Sphinxes — 1,050 ram-headed sphinxes connecting Karnak to Luxor Temple. Enter Luxor Temple (built by Amenhotep III, 1390 BC) and stand before the towering obelisk of Ramesses II. Your guide reveals how Napoleon's soldiers, seeing this temple, wept at its grandeur. At night, the temple glows golden under floodlights — a jaw-dropping sight." },
          { time: "05:30 PM", name: "Return to cruise — Evening sail", detail: "Return to your ship as the sun melts into the Nile. The cruise begins its gentle southward journey. Enjoy a spectacular dinner buffet on board with live Egyptian music. Captain's welcome reception on the sun deck. Overnight on the Nile." },
        ],
      },
      {
        day: 2, title: "West Bank Wonders — Valley of the Kings",
        location: "Luxor West Bank",
        icon: "⚱️",
        meals: ["Breakfast", "Lunch", "Dinner"],
        optionalExtra: "🎈 Hot Air Balloon at sunrise (+$125) — highly recommended!",
        activities: [
          { time: "05:00 AM", name: "OPTIONAL: Hot Air Balloon over Luxor", detail: "Wake before dawn for an optional once-in-a-lifetime experience. Float 300 metres above the Valley of the Kings as the sun rises over the Theban hills, painting the desert gold. 45-minute flight with champagne breakfast. One of the most spectacular views on earth. Book directly with your cruise manager the evening before." },
          { time: "07:00 AM", name: "Breakfast on board", detail: "Full breakfast buffet on the panoramic restaurant deck. Fuel up — today is the most intensive sightseeing day of the cruise." },
          { time: "08:30 AM", name: "Valley of the Kings", detail: "Cross to the west bank by motorboat. Enter the sacred necropolis of the pharaohs, hidden in the golden cliffs of the Theban mountains. Your Egyptologist guide leads you through 3 royal tombs (included in the ticket). See the astronomically detailed tomb of Ramesses VI with its breathtaking Book of the Underworld ceiling. If you wish, upgrade to enter Tutankhamun's tomb ($25 extra) — the only pharaoh buried with his treasures intact. Discover why Howard Carter described the moment of discovery in 1922 as 'wonderful things'." },
          { time: "10:30 AM", name: "Temple of Hatshepsut (Deir el-Bahari)", detail: "One of Egypt's most architecturally stunning monuments — the mortuary temple of Hatshepsut, Egypt's greatest female pharaoh who ruled for 22 years as a man. Three colonnaded terraces rise dramatically from the desert floor to the cliff face. Marvel at the painted reliefs showing the divine birth of Hatshepsut and her legendary expedition to the Land of Punt. Your guide tells the full story of how Thutmose III attempted to erase her from history." },
          { time: "11:45 AM", name: "Colossi of Memnon", detail: "Stop for photos at the two 18-metre quartzite statues of Amenhotep III — guardians of his destroyed mortuary temple. The ancient Greeks reported that the northern statue emitted a musical sound at dawn (caused by expansion from the morning heat). Scholars, emperors and poets visited for centuries to hear the 'singing Memnon'." },
          { time: "01:00 PM", name: "Lunch on board", detail: "Return to the cruise for a lavish lunch buffet while the ship sails south toward Esna. Rest and enjoy the riverbank scenery — feluccas, palm groves, Nubian villages and ancient cliffs drifting past your cabin window." },
          { time: "04:00 PM", name: "Esna Lock (live experience)", detail: "An unmissable engineering spectacle: your ship enters the ancient Esna Lock, a 10-metre drop in the Nile level managed by a working lock built in 1906. Watch the massive wooden lock gates open and close. Local vendors paddle alongside the ship in small boats, throwing colourful scarves and galabiyyas up to passengers — a unique and chaotic Nile tradition. Sail through Esna's classical Khnum Temple, partially visible from the deck." },
          { time: "07:30 PM", name: "Dinner & evening entertainment", detail: "Dinner buffet with the ship's full menu. This evening features a Galabeya Party — don a traditional Egyptian robe (provided by the ship) and enjoy live music, belly dancing performance and a traditional Tanoura spinning show. Overnight docked near Edfu." },
        ],
      },
      {
        day: 3, title: "Edfu Temple & Kom Ombo at Sunset",
        location: "Edfu & Kom Ombo",
        icon: "🦅",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          { time: "07:00 AM", name: "Breakfast on board", detail: "Early breakfast as the ship docks at Edfu." },
          { time: "08:00 AM", name: "Temple of Horus at Edfu", detail: "The best-preserved ancient temple in all of Egypt — and one of the most overwhelming. Built between 237 BC and 57 BC by the Ptolemaic kings, the Temple of Horus is enormous: 137 metres long, with walls rising 36 metres. Every surface is covered in hieroglyphic reliefs telling the story of Horus defeating his uncle Set. Stand in the hypostyle hall with its 12 massive columns and feel 2,300 years of history pressing down. Your Egyptologist guide decodes the mythological reliefs panel by panel — including the ancient Egyptian equivalent of a Marvel comic: the battle between Horus (falcon-headed god of sky) and Set (god of chaos). Horse-drawn carriage ride through Edfu town to/from the temple." },
          { time: "10:00 AM", name: "Sail south toward Kom Ombo", detail: "Return to the ship as it continues its southern journey. Relax on the sun deck with coffee and watch the Nile landscape transform — the banks grow drier, more Nubian, the feluccas more ornate. Lunch on board as the ship glides past sugar cane fields and riverside villages." },
          { time: "01:00 PM", name: "Lunch on board + afternoon rest", detail: "Full lunch buffet. Free time to swim in the ship's pool, enjoy a treatment in the onboard spa, or simply sit on deck watching the river." },
          { time: "05:00 PM", name: "Kom Ombo Temple at golden hour", detail: "The most dramatically located temple on the Nile — perched on a promontory above the river, lit orange and purple by the setting sun. Kom Ombo is unique in Egypt: a double temple dedicated equally to two gods — Sobek the crocodile god of fertility and Haroeris (Horus the Elder) the falcon god of light. Your guide explains how the two cults operated simultaneously on opposite halves of the building. See the adjacent Crocodile Museum: 22 mummified crocodiles and ancient sacred crocodile pools. Marvel at the medical instruments carved on the walls — forceps, scalpels, stethoscopes — 2,000 years before modern medicine. This is the most photogenic sunset moment of the entire cruise." },
          { time: "07:30 PM", name: "Sail to Aswan — Dinner on board", detail: "The ship continues south under the stars. Dinner buffet as the lights of Aswan appear on the horizon. Evening free for stargazing from the sun deck or relaxing at the bar. Overnight anchored in Aswan." },
        ],
      },
      {
        day: 4, title: "Aswan & The Jewel of the Nile",
        location: "Aswan",
        icon: "⛵",
        meals: ["Breakfast", "Lunch", "Dinner"],
        optionalExtra: "🏛️ Abu Simbel day trip (+$80) — the trip's crown jewel",
        activities: [
          { time: "05:00 AM", name: "OPTIONAL: Abu Simbel excursion", detail: "The greatest optional extension of the entire cruise. A 3.5-hour drive south through the Sahara Desert brings you to the shores of Lake Nasser, where the twin temples of Ramesses II rise from the sandstone cliffs. Abu Simbel is arguably the most awe-inspiring monument in Egypt: four 21-metre statues of Ramesses II guard the entrance; inside, the walls are covered in scenes of the Battle of Kadesh, the greatest military engagement of the ancient world. The second, smaller temple was built for Ramesses' beloved wife Nefertari — only the second time in Egyptian history a temple was dedicated to a living queen. UNESCO moved these temples 64 metres uphill and 300 metres back from the Nile in the 1960s to save them from the rising waters of Lake Nasser — the most expensive archaeological rescue operation in history. Return to Aswan in time for lunch." },
          { time: "07:00 AM", name: "Breakfast on board", detail: "Full breakfast buffet. Those not joining Abu Simbel have a leisurely morning with Nubian coffee on the sun deck." },
          { time: "09:30 AM", name: "Aswan High Dam", detail: "One of the largest dams in the world: 3.83 km long, 111 metres tall, containing 43 million cubic metres of iron, steel and concrete. Built between 1960 and 1970 with Soviet assistance, it tamed the annual Nile floods that had controlled Egyptian agriculture for 7,000 years. Your guide explains both the engineering triumph and the heartbreaking cost: over 100,000 Nubian people displaced, and dozens of ancient monuments submerged beneath Lake Nasser. See the monument to Egyptian-Soviet cooperation on the dam crest. Panoramic views of Lake Nasser stretching 500 km south into Sudan." },
          { time: "10:30 AM", name: "Unfinished Obelisk", detail: "In the granite quarries south of Aswan lies the largest known ancient obelisk ever attempted — 42 metres long, weighing 1,200 tonnes — still attached to its quarry bed. A crack appeared in the granite as it was being cut, and it was abandoned exactly as it was: a perfect snapshot of ancient Egyptian stoneworking technique frozen in time. See the chisel marks, workers' tool impressions and the ochre paint marks that were used to guide the carvers. This is the most revealing insight into how the ancient Egyptians actually worked that exists anywhere in Egypt." },
          { time: "12:00 PM", name: "Philae Temple of Isis", detail: "Board a traditional motorboat to reach the island of Agilika — home to the relocated Philae Temple, the last temple built in the classical Egyptian style. Construction began around 690 BC and the temple was used continuously for over 1,000 years, making it one of the longest-used religious sites in human history. It was the last place in the Roman Empire where the ancient Egyptian religion was practiced, until Emperor Justinian closed it in 550 AD. Your Egyptologist guide tells the love story of Isis and Osiris — the most powerful myth in Egyptian religion. The temple is especially beautiful on water, its reflection doubling the columns and pylons in the green Nile." },
          { time: "02:30 PM", name: "Lunch on board", detail: "Lunch as the ship is docked at Aswan's riverside corniche. Free afternoon to explore the colourful Aswan Souq (spice market), visit the Nubian Museum, or simply relax on board." },
          { time: "05:30 PM", name: "Nubian felucca sunset sail", detail: "The most romantic experience of the cruise: board a traditional wooden felucca sailboat and glide silently around Elephantine Island and Kitchener's Island (Botanical Garden) as the sun sets. Your Nubian captain navigates between the granite boulders, palm trees and the Aga Khan Mausoleum on the west bank. The light over Aswan at sunset — pure gold on pink granite — is incomparable. Hot Nubian tea and fresh fruit served on board." },
          { time: "08:00 PM", name: "Farewell Gala Dinner", detail: "The cruise's highlight evening: a formal farewell dinner with your Egyptologist guide and cruise captain. Traditional Egyptian dishes, live music and dancing. Certificates of cruise completion presented to all guests. Midnight walk on the Aswan corniche optional." },
        ],
      },
      {
        day: 5, title: "Departure from Aswan",
        location: "Aswan",
        icon: "✈️",
        meals: ["Breakfast"],
        activities: [
          { time: "07:00 AM", name: "Breakfast on board", detail: "Final breakfast on your floating palace. Settle any personal accounts at the reception desk. Pack and prepare for disembarkation." },
          { time: "09:00 AM", name: "Disembarkation", detail: "Check out of your cabin. Your guide and driver will be waiting dockside to transfer you to Aswan Airport, train station or your onward hotel. This is when many guests book the optional Abu Simbel fly-in excursion (morning flight from Aswan, 35 minutes) if they haven't done the road trip on Day 4." },
          { time: "11:00 AM", name: "Transfer to Aswan Airport / Station", detail: "Private transfer with your driver. Time for a final cup of Nubian coffee at the airport café before your flight to Cairo or Hurghada." },
        ],
      },
    ],
  },
 
  // ─── 2. NILE CRUISE ASWAN → LUXOR ────────────────────────────────────────
  {
    id: "cruise-aswan-luxor",
    title: "Nile Cruise: Aswan to Luxor",
    titleAr: "رحلة نيلية: أسوان إلى الأقصر",
    subtitle: "4 Days · 3 Nights · Ancient Wonders Downstream",
    category: "cruise",
    badge: "Top Rated",
    badgeColor: "#E63946",
    duration: "4D / 3N",
    price: 550,
    rating: 4.9,
    reviews: 3654,
    difficulty: "Easy",
    groupSize: "2–20",
    heroImg: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1400&q=85",
    cities: ["Aswan", "Kom Ombo", "Edfu", "Esna", "Luxor"],
    tags: ["Nile Cruise", "Abu Simbel", "Nubian Culture", "Full Board"],
    includes: [
      "3 nights on 5★ Nile cruise ship (full board)",
      "Certified Egyptologist guide for all excursions",
      "Philae Temple & High Dam entrance",
      "Kom Ombo & Edfu entrance",
      "Luxor East & West Bank temples",
      "Airport transfers in Aswan & Luxor",
      "All meals on board",
    ],
    excludes: [
      "Domestic/international flights",
      "Egypt entry visa",
      "Abu Simbel excursion (+$80)",
      "Tips and gratuities",
      "Personal expenses",
    ],
    highlights: [
      "Philae Temple — Island of Isis at dawn",
      "Aswan High Dam — Soviet-Egyptian engineering marvel",
      "Unfinished Obelisk — 1,200 tonnes of abandoned ambition",
      "Optional Abu Simbel — Ramesses II's greatest monument",
      "Kom Ombo at sunset — double temple on the river",
      "Edfu Temple of Horus — best preserved in Egypt",
      "Esna Lock — the living lock of the Nile",
      "Valley of the Kings — 63 royal tombs",
      "Karnak Temple — 134 columns, 2,000 years of construction",
    ],
    itinerary: [
      {
        day: 1, title: "Arrival in Aswan — Board Your Nile Palace",
        location: "Aswan",
        icon: "🛬",
        meals: ["Lunch", "Dinner"],
        optionalExtra: "🏛️ Abu Simbel the next morning: book tonight! (+$80)",
        activities: [
          { time: "10:00 AM", name: "Pickup at Aswan Airport / Station / Hotel", detail: "Your guide and driver meet you at your arrival point in Aswan. Private air-conditioned vehicle transfers you through the streets of Egypt's most beautiful city — pink granite everywhere, the Nile sparkling, Nubian music in the air. Briefing on the full 4-day itinerary." },
          { time: "11:30 AM", name: "Philae Temple of Isis", detail: "Before boarding the ship, visit the jewel of the Nile. A short motorboat ride takes you to Agilika Island where Philae Temple sits. Built primarily during the Ptolemaic period (305–30 BC), this was the last ancient Egyptian temple to remain active — it continued functioning as a place of worship until the 6th century AD when Emperor Justinian ordered it closed. The reliefs here are extraordinary: Isis nursing the infant Horus, the resurrection of Osiris, and the myth of creation are all depicted. The light over the water makes for unforgettable photographs." },
          { time: "01:00 PM", name: "Embarkation & Lunch on board", detail: "Board your 5★ cruise ship at Aswan's riverside. Welcome cocktail and lunch buffet served immediately. Settle into your cabin — most feature floor-to-ceiling windows facing the Nile. The ship's amenities include a sun deck with pool, spa, library and panoramic bar." },
          { time: "03:00 PM", name: "Aswan High Dam", detail: "Drive to the High Dam, one of the largest embankment dams in the world. Built between 1960–1970 under President Nasser with Soviet engineering support, it transformed Egypt by providing flood control and electricity. Your guide explains the enormity of the project and its human cost — over 100,000 Nubian people were displaced when Lake Nasser (the world's largest artificial lake, extending 500km) submerged their homeland." },
          { time: "04:30 PM", name: "Unfinished Obelisk in the Granite Quarries", detail: "A 10-minute drive to the ancient quarries where the Aswan granite was cut for Egypt's greatest monuments. The Unfinished Obelisk lies exactly as it was abandoned 3,500 years ago — a 42-metre, 1,200-tonne monolith that cracked during cutting. See the ancient red ochre guidelines drawn by the master stonemasons, the circular hammer-stone indentations, and understand exactly how the ancient Egyptians extracted and shaped stone using only dolerite balls, copper tools and sheer human organisation." },
          { time: "06:00 PM", name: "Return to ship — Nubian felucca sunset optional", detail: "Optional: Instead of returning directly, take a 1-hour felucca sail around Elephantine Island at sunset ($15/person). Highly recommended for the light alone." },
          { time: "08:00 PM", name: "Captain's Welcome Dinner", detail: "Formal welcome dinner on board with Egyptian specialities — fattah, molokhiya, grilled kofta and fresh Nile fish. The cruise manager outlines all optional activities available and helps you plan your days ahead. Overnight in Aswan." },
        ],
      },
      {
         day: 2, title: "Abu Simbel & North to Kom Ombo",
        location: "Abu Simbel → Kom Ombo",
        icon: "🏛️",
        meals: ["Breakfast", "Lunch", "Dinner"],
        optionalExtra: "🌅 Abu Simbel Sound & Light Show (evening, +$45)",
        activities: [
          { time: "04:00 AM", name: "OPTIONAL: Abu Simbel pre-dawn departure", detail: "The most extraordinary optional extension: a 3.5-hour convoy drive across the Sahara Desert, arriving at Abu Simbel as the sun rises over Lake Nasser. The twin temples of Ramesses II materialise from the dawn mist — four 21-metre colossi guarding the entrance. Your Egyptologist guide takes you inside: the hypostyle hall covered floor-to-ceiling in coloured reliefs of the Battle of Kadesh, where Ramesses single-handedly (mythologically) defeated 20,000 Hittites. The second temple, built for Nefertari, is one of only two in Egyptian history dedicated to a living woman. On 22 February and 22 October each year, a solar alignment causes the sun to penetrate 60 metres inside the rock to illuminate the statues of the gods — except Ptah, god of darkness, who remains forever in shadow. Return to Aswan by lunch." },
          { time: "07:00 AM", name: "Breakfast — Ship sails north", detail: "Breakfast on board as the cruise begins its journey northward. For those who went to Abu Simbel, catch up on sleep in your cabin." },
          { time: "01:00 PM", name: "Lunch on board + afternoon leisure", detail: "Lunch buffet as the ship glides past Nubian villages, sugarcane fields, and ancient temples partially visible on the riverbanks. Afternoon free for the pool, spa or sun deck." },
          { time: "05:00 PM", name: "Kom Ombo Temple at sunset", detail: "Disembark at Kom Ombo for the most dramatically beautiful temple visit of the cruise. The double temple sits on a promontory above the Nile, lit by the setting sun in shades of gold and amber. Equal halves dedicated to Sobek (crocodile god) and Haroeris (Horus the Elder). See the famous medical instrument carvings — a 2,000-year-old operating theatre relief showing forceps, scalpels, and surgical sponges. Visit the adjacent Crocodile Museum: 22 mummified sacred crocodiles, some over 4 metres long, discovered in a sacred crocodile pool during excavations." },
          { time: "07:00 PM", name: "Sail north — Egyptian entertainment evening", detail: "Dinner on board as the ship sails toward Edfu. Entertainment: live Egyptian music, whirling dervish Tanoura show, and a traditional Galabeya party — the ship provides traditional robes, and guests and crew dance together. Overnight docked at Edfu." },
        ],
      },
      {
        day: 3, title: "Edfu Temple of Horus & Luxor Approach",
        location: "Edfu → Esna → Luxor",
        icon: "🦅",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          { time: "07:00 AM", name: "Breakfast on board", detail: "Early breakfast as the ship prepares to dock at Edfu." },
          { time: "08:00 AM", name: "Temple of Horus at Edfu", detail: "The most complete ancient temple in Egypt — and arguably the most impressive after the Pyramids. Begun by Ptolemy III in 237 BC and completed 180 years later, it is so well preserved that every detail of how a functioning Egyptian temple operated is visible. Horse-drawn carriage through Edfu's narrow streets to the temple entrance. Pass through the massive 36-metre pylon — the largest in Egypt — into the colonnaded forecourt. Your guide decodes the mythological story told on every surface: the ancient Horus and Set conflict, told in remarkable pictorial narrative. Visit the inner sanctuary where the golden cult statue of Horus was kept. See the nilometer — the ancient Egyptian device for measuring the Nile's annual flood level. The sacred barque shrine where Horus's statue sailed during festivals." },
          { time: "10:00 AM", name: "Sail north — Esna Lock experience", detail: "The ship resumes its journey. Watch the Esna Lock from the deck: your ship enters a narrow stone channel built in 1906 and descends 10 metres as the water level drops. Local merchants in small boats paddle alongside, throwing traditional textiles, scarves and Pharaonic souvenirs up to passengers on deck — a completely spontaneous, joyful piece of living Nile culture. Clap along as other cruise ships pass in the opposite direction. Pass the Khnum Temple at Esna, partially visible from the deck." },
          { time: "01:00 PM", name: "Lunch on board + Luxor approach", detail: "Lunch as the skyline of Luxor appears on the horizon. The twin pylons of Karnak Temple appear on the right bank. Your guide gives a full briefing on tomorrow's West Bank excursion." },
          { time: "05:00 PM", name: "Luxor Temple — evening visit", detail: "Moor in Luxor and walk directly to the Luxor Temple — one of the most beautiful monuments in the world after dark. The Avenue of Sphinxes leads to the first pylon, where two enormous Ramesses II statues and a single pink granite obelisk (its twin is in Place de la Concorde, Paris) stand sentinel. Inside: the birth colonnade of Amenhotep III, the Roman chapel where the legions worshipped their own emperors among the pharaohs, and the extraordinary hypostyle hall where 34 columns crowd in magnificently. After dark, floodlit amber against the dark Nile sky." },
          { time: "07:30 PM", name: "Final evening in Luxor", detail: "Dinner on board. Optional evening visit to the Karnak Sound & Light Show ($25/person) — a 90-minute theatrical light and sound journey through 4,000 years of history in the world's largest temple complex, narrated in your choice of language. Overnight docked in Luxor." },
        ],
      },
      {
        day: 4, title: "Valley of the Kings & Karnak — Grand Finale",
        location: "Luxor",
        icon: "👑",
        meals: ["Breakfast"],
        activities: [
          { time: "06:00 AM", name: "Breakfast on board", detail: "Early breakfast to maximise time at Luxor's astonishing monuments." },
          { time: "07:00 AM", name: "Karnak Temple Complex", detail: "The largest ancient religious complex ever built: 200 acres of temples, chapels, pylons, obelisks, and sacred lakes built over 2,000 years by 30 different pharaohs. Walk the Processional Way of Rams, enter through the first pylon into the Great Hypostyle Hall — 134 columns up to 24 metres tall, covered in hieroglyphs painted in original colours. The Temple of Karnak was the most important temple in Egypt: every pharaoh added to it to demonstrate their piety and power. Your guide explains the political and religious significance of each addition, from Tuthmose I to Ramesses II to the Ptolemaic kings. See the Sacred Lake where the priests performed purification rituals. The Karnak Open Air Museum houses rare original statues and chapels removed for preservation." },
          { time: "09:30 AM", name: "Valley of the Kings", detail: "Cross to the West Bank for the climax of the entire cruise: the Valley of the Kings, the royal necropolis of the New Kingdom pharaohs. 63 tombs cut deep into the golden limestone cliffs, housing the mummified remains and immortal afterlife preparations of Egypt's greatest rulers. Your ticket includes access to 3 tombs (choose with your guide). The tomb of Ramesses VI features a complete Book of the Underworld — the ceiling of the burial chamber is an astronomical map of the sky, with the sun god's journey depicted across it in extraordinary detail. The tomb of Merenptah has a pink granite sarcophagus still in place. Buy a separate ticket ($25) for Tutankhamun's tomb — the only tomb found with its treasures intact, discovered by Howard Carter on 4 November 1922." },
          { time: "11:30 AM", name: "Temple of Hatshepsut", detail: "Egypt's greatest female pharaoh built her mortuary temple against the cliff face at Deir el-Bahari in three magnificent colonnaded terraces. See the relief reliefs showing her divine conception by the god Amun, her famous trading expedition to the Land of Punt (Somalia), and her unprecedented coronation as pharaoh — wearing the double crown and false beard of the kings. Nearby: the Colosssi of Memnon for final photographs." },
          { time: "01:00 PM", name: "Return to ship — Disembarkation", detail: "Return to the cruise for final luggage collection. Check out with the reception. Your guide and private vehicle take you to Luxor Airport, the train station, or your Luxor hotel. Optional extension: stay in Luxor for an extra night and visit the East Bank Luxor Museum (world-class collection of New Kingdom art) in the evening." },
        ],
      },
    ],
  },
 
  // ─── 3. CAIRO + LUXOR + ASWAN + HURGHADA ────────────────────────────────
  {
    id: "cairo-luxor-aswan-hurghada",
    title: "Cairo · Luxor · Aswan · Hurghada",
    titleAr: "القاهرة · الأقصر · أسوان · الغردقة",
    subtitle: "10 Days · 9 Nights · The Complete Egypt Experience",
    category: "multi-city",
    badge: "Most Popular",
    badgeColor: "#52B788",
    duration: "10D / 9N",
    price: 1290,
    rating: 4.9,
    reviews: 2876,
    difficulty: "Easy–Moderate",
    groupSize: "2–16",
    heroImg: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1400&q=85",
    cities: ["Cairo", "Luxor", "Aswan", "Hurghada"],
    tags: ["Pyramids", "Nile Cruise", "Red Sea", "Culture", "Adventure"],
    includes: [
      "9 nights accommodation (5★ hotels + Nile cruise)",
      "Domestic flight Cairo → Luxor",
      "Domestic flight Aswan → Hurghada (or Hurghada → Cairo)",
      "Full board on Nile cruise (Days 4–7)",
      "Bed & Breakfast at Cairo and Hurghada hotels",
      "Private Egyptologist guide throughout",
      "All entrance fees to listed sites",
      "All airport/hotel transfers",
      "Welcome dinner in Cairo",
    ],
    excludes: [
      "International flights to/from Egypt",
      "Egypt entry visa ($25)",
      "Hot air balloon over Luxor (+$125)",
      "Abu Simbel excursion (+$80)",
      "Diving in Hurghada (+$70)",
      "Tips and gratuities",
    ],
    highlights: [
      "Great Pyramids of Giza — last surviving ancient wonder",
      "Grand Egyptian Museum — 100,000+ artifacts",
      "Khan el-Khalili Bazaar — medieval Islamic Cairo",
      "4-night luxury Nile Cruise Luxor to Aswan",
      "Valley of the Kings — Tutankhamun's actual tomb",
      "Karnak Temple — world's largest religious complex",
      "Philae Temple & Abu Simbel option",
      "Red Sea snorkeling on Giftun Island",
      "Desert quad safari at sunset",
    ],
    itinerary: [
      {
        day: 1, title: "Arrival in Cairo — Welcome to the Eternal City",
        location: "Cairo",
        icon: "🏙️",
        meals: ["Welcome Dinner"],
        activities: [
          { time: "Flexible", name: "Airport welcome & hotel transfer", detail: "Your Golden Egypt Tours representative meets you at Cairo International Airport with a name board. Private air-conditioned vehicle takes you to your 5★ hotel in Giza or Zamalek. Check-in handled and welcome drink presented." },
          { time: "Evening", name: "Welcome dinner at rooftop restaurant", detail: "Your Egyptologist guide joins you for a welcome dinner at a rooftop restaurant overlooking Cairo's skyline. Full briefing on the 10-day program, practical tips, and answers to all questions. Traditional Egyptian mezze, grilled meats and fresh juices. Overnight Cairo." },
        ],
      },
      {
        day: 2, title: "Cairo — Pyramids, Sphinx & Grand Egyptian Museum",
        location: "Cairo / Giza",
        icon: "🔺",
        meals: ["Breakfast", "Lunch"],
        activities: [
          { time: "07:30 AM", name: "Breakfast at hotel", detail: "" },
          { time: "08:30 AM", name: "Great Pyramids of Giza", detail: "The most recognised monuments in human history — and infinitely more overwhelming in person. Your guide explains the extraordinary logistics of their construction: 2.3 million stone blocks, some weighing 70 tonnes, fitted to within 0.5mm of precision. Enter the Great Pyramid of Khufu (optional, $35): crawl through the descending passage to the Grand Gallery and King's Chamber, where a plain granite sarcophagus has sat for 4,500 years. View the three major pyramids and three satellite pyramids from the ideal vantage point. Optional camel ride around the complex ($15)." },
          { time: "10:30 AM", name: "The Great Sphinx", detail: "The largest monolith statue on earth: 73.5 metres long, 20 metres tall, carved from a single limestone outcrop. Your guide explains the Sphinx Stele: the dream-story of Thutmose IV, who was promised the throne if he freed the Sphinx from sand. See the Sphinx Temple and Valley Temple — the oldest stone temples in Egypt, built over 4,500 years ago from 200-tonne limestone blocks." },
          { time: "11:30 AM", name: "Grand Egyptian Museum (GEM)", detail: "The world's largest archaeological museum, opened in 2023 next to the Pyramids. Your guide takes you through the epic Great Staircase lined with 87 royal statues, then into the Tutankhamun Galleries: the complete treasure of the boy-king — his solid gold death mask (11 kilos of 22-carat gold), his two nested coffins, his golden throne, his alabaster canopic shrine — all displayed with unprecedented space and lighting. The museum holds over 100,000 artifacts; your guide focuses on the 50 most important pieces and the stories behind them." },
          { time: "01:30 PM", name: "Lunch at traditional Egyptian restaurant", detail: "Try authentic Egyptian food: koshari (Egypt's national dish — rice, lentils, pasta and fried onions), fattah, Egyptian bread fresh from the stone oven, and local soft drinks. Lunch near the Pyramids with direct views." },
          { time: "03:00 PM", name: "Saqqara & Memphis (optional upgrade)", detail: "Optional but highly recommended: drive 30 minutes south to Saqqara to see the Step Pyramid of Djoser (2,650 BC) — the world's first large-scale stone structure, built 150 years before the Great Pyramid. Then Memphis, Egypt's ancient capital: the colossal fallen statue of Ramesses II (10 metres long, still magnificent) and the sphinx of alabaster. Return to Cairo hotel. Overnight Cairo." },
        ],
      },
      {
        day: 3, title: "Islamic Cairo — The Medieval Heart of Egypt",
        location: "Cairo",
        icon: "🕌",
        meals: ["Breakfast"],
        activities: [
          { time: "09:00 AM", name: "Cairo Citadel & Alabaster Mosque", detail: "Perched on a limestone spur above the city, the Citadel was built by Saladin in 1176 to defend Cairo from the Crusaders. Inside: the Mosque of Muhammad Ali (1830–1848), modelled on the Blue Mosque of Istanbul, with an alabaster-clad interior and two spectacular minarets visible from anywhere in Cairo. The Citadel offers the best panoramic view of Cairo, stretching from the desert plateaus of Giza to the minarets of Islamic Cairo and the distant pyramids." },
          { time: "11:00 AM", name: "Khan el-Khalili Bazaar", detail: "Cairo's 14th-century medieval bazaar — still operating exactly as it has for 650 years. Your guide navigates through narrow alleyways packed with spice merchants, jewellery workshops, copper smiths, perfumers, carpet sellers and textile traders. Stop for a traditional Egyptian tea at Fishawi's Café — the oldest café in Cairo, open 24 hours since 1773. Visit the medieval Al-Azhar Mosque (972 AD) — the oldest continuously operating university in the world. Bargaining lesson from your guide: how to negotiate the Egyptian way." },
          { time: "01:30 PM", name: "Coptic Cairo", detail: "In the medieval Christian quarter of Old Cairo, visit the Hanging Church (5th century) — built over the gatehouse of a Roman fortress. The Church of St. Sergius and Bacchus (4th century), where the Holy Family is believed to have sheltered during their flight to Egypt. The Ben Ezra Synagogue (9th century) — where Moses was said to have been found among the bulrushes. Coptic Museum: 16,000 items documenting 2,000 years of Christian Egypt." },
          { time: "04:00 PM", name: "Free afternoon & Egyptian dinner optional", detail: "Free time in Cairo. Your guide recommends specific neighbourhood restaurants for authentic Egyptian cuisine. Tonight's optional Nile dinner cruise ($55) is highly recommended: 3-hour cruise with belly dancing and Tanoura show. Overnight Cairo." },
        ],
      },
      {
        day: 4, title: "Fly Cairo → Luxor — Board the Nile Cruise",
        location: "Cairo → Luxor",
        icon: "✈️",
        meals: ["Breakfast", "Lunch on cruise", "Dinner on cruise"],
        activities: [
          { time: "06:00 AM", name: "Transfer to Cairo Airport", detail: "Early morning pickup for domestic flight to Luxor. 1-hour flight over the Eastern Desert, arriving at Luxor International Airport." },
          { time: "08:30 AM", name: "Arrive Luxor — Karnak Temple", detail: "Immediately to Karnak Temple — the world's largest religious complex, covering 200 acres, built and added to by 30 pharaohs over 2,000 years. Walk the Ram-Headed Sphinx Avenue into the Great Hypostyle Hall: 134 columns, the 12 central ones at 24 metres tall. See the 30-metre Obelisk of Hatshepsut — still bearing its original electrum capping. The Sacred Lake where priests bathed before performing rituals. This is the most overwhelming ancient site in the world after the Pyramids." },
          { time: "11:30 AM", name: "Board Nile Cruise — Luxor Temple", detail: "Board your 5★ Nile cruise ship. Lunch on board, then afternoon visit to Luxor Temple — especially spectacular in the late afternoon when the light turns golden. See the 2.7km Avenue of Sphinxes, the pink granite obelisk of Ramesses II, and the extraordinary Roman chapel built inside the ancient sanctuary." },
          { time: "05:00 PM", name: "Sail south — First night on the Nile", detail: "The cruise begins its journey south as the sun sets over the West Bank cliffs. Dinner on board. Welcome cocktail from the Captain. Overnight sailing." },
        ],
      },
      {
        day: 5, title: "Valley of the Kings — Royal Necropolis",
        location: "Luxor West Bank",
        icon: "⚱️",
        meals: ["Breakfast on cruise", "Lunch on cruise", "Dinner on cruise"],
        optionalExtra: "🎈 Hot Air Balloon at sunrise (+$125) — unmissable",
        activities: [
          { time: "05:30 AM", name: "OPTIONAL: Hot Air Balloon at sunrise", detail: "The single most spectacular experience in Egypt after the Pyramids: drift silently 300 metres above the Valley of the Kings as dawn breaks over the Theban cliffs. 45 minutes of pure golden light. Champagne breakfast on landing." },
          { time: "08:00 AM", name: "Valley of the Kings", detail: "Enter the necropolis of Egypt's greatest pharaohs: 63 tombs cut into the golden limestone. See the ceiling of Ramesses VI (complete astronomical map), the sarcophagus of Merenptah, and the painted corridor of Ramesses IX. Optional Tutankhamun's tomb ($25)." },
          { time: "10:30 AM", name: "Hatshepsut Temple & Colossi of Memnon", detail: "Three colonnaded terraces rising from the desert to the cliff: the mortuary temple of Egypt's female pharaoh. See the painted reliefs of her divine birth and Punt expedition. Stop at the twin 18m Colossi of Memnon for dramatic photographs." },
          { time: "01:00 PM", name: "Lunch & sail south", detail: "Lunch on board as the cruise sails south. Afternoon free on the sun deck." },
          { time: "04:30 PM", name: "Esna Lock", detail: "Watch your ship navigate the 1906 Esna Lock — a theatrical, joyful experience with vendors in small boats alongside." },
          { time: "07:30 PM", name: "Galabeya Party & entertainment", detail: "Traditional costume party on board with live music and dancing. Overnight sailing." },
        ],
      },
      {
        day: 6, title: "Edfu & Kom Ombo — Temples on the Nile",
        location: "Edfu & Kom Ombo",
        icon: "🏛️",
        meals: ["Breakfast on cruise", "Lunch on cruise", "Dinner on cruise"],
        activities: [
          { time: "08:00 AM", name: "Edfu Temple of Horus", detail: "The most complete ancient temple in Egypt: 137 metres long, 36-metre pylons, every surface covered in coloured reliefs. Horse-carriage through Edfu to the temple. Full mythological journey with your Egyptologist." },
          { time: "10:30 AM", name: "Sail south — afternoon leisure", detail: "Relax on the sun deck as the cruise approaches Aswan. Pool, spa treatments, or simply watch the Nubian landscape appear." },
          { time: "05:00 PM", name: "Kom Ombo Temple at sunset", detail: "The double temple on the river at sunset: arguably the most photogenic moment of the entire cruise." },
          { time: "08:00 PM", name: "Sail into Aswan — Dinner on board", detail: "The Aga Khan Mausoleum and the lights of Aswan appear. Dinner on board. Overnight anchored in Aswan." },
        ],
      },
      {
        day: 7, title: "Aswan — Philae, High Dam & Nubian Culture",
        location: "Aswan",
        icon: "⛵",
        meals: ["Breakfast on cruise", "Lunch on cruise", "Farewell Dinner"],
        optionalExtra: "🏛️ Abu Simbel full day (+$80) — the crown jewel of Upper Egypt",
        activities: [
          { time: "05:00 AM", name: "OPTIONAL: Abu Simbel excursion", detail: "The morning convoy to Abu Simbel — 4 colossal Ramesses II statues, the Nefertari temple, the greatest rock-cut monument in the ancient world. Return for lunch." },
          { time: "09:30 AM", name: "Aswan High Dam & Unfinished Obelisk", detail: "The engineering marvel of modern Egypt. Then the quarries: 1,200 tonnes of abandoned ambition, frozen in time." },
          { time: "11:30 AM", name: "Philae Temple of Isis", detail: "Motorboat to the island temple — the last functioning pagan temple in the Roman Empire." },
          { time: "03:00 PM", name: "Nubian felucca sunset sail", detail: "Traditional felucca around Elephantine Island. Nubian tea and fruit. The most peaceful afternoon in Egypt." },
          { time: "07:00 PM", name: "Farewell Gala Dinner on board", detail: "Final dinner on the Nile. Certificates, speeches, and dancing. Overnight in Aswan." },
        ],
      },
      {
        day: 8, title: "Fly Aswan → Hurghada — Red Sea Arrival",
        location: "Aswan → Hurghada",
        icon: "🌊",
        meals: ["Breakfast on cruise"],
        activities: [
          { time: "07:00 AM", name: "Disembark & transfer to Aswan Airport", detail: "Say farewell to the Nile. Domestic flight from Aswan to Hurghada (1h 15min) or overland transfer (6–7 hours through the Eastern Desert — a dramatic journey in itself). Check in to your 5★ Hurghada resort on the Red Sea." },
          { time: "Afternoon", name: "Red Sea orientation & first swim", detail: "Your resort's house reef is immediately accessible. Snorkel directly from the beach: coral gardens, parrotfish, angelfish, and moray eels. Free afternoon to recover from the intensive Nile program with the most turquoise water in the world." },
          { time: "Evening", name: "Seafood dinner at resort & Hurghada corniche", detail: "Fresh Red Sea fish dinner at your resort. Optional evening walk along Hurghada's marina, lined with restaurants, shisha cafés and traditional craft shops." },
        ],
      },
      {
        day: 9, title: "Hurghada — Red Sea Adventures",
         location: "Hurghada",
        icon: "🤿",
        meals: ["Breakfast at resort"],
        activities: [
          { time: "08:30 AM", name: "Snorkeling speedboat to Giftun Island", detail: "Speedboat to Giftun Island National Marine Park — the finest snorkeling in the Northern Red Sea. Two stops at pristine coral reefs: live hard corals, sea turtles, schools of tropical fish in thousands. Seafood BBQ lunch on the beach. Return by 3pm." },
          { time: "Afternoon", name: "Optional: PADI Scuba Diving lesson", detail: "Beginner PADI dive for first-timers ($70): 2-3 hours with a certified instructor, including theory and a 40-minute guided underwater dive. The Red Sea visibility averages 30 metres — extraordinary for a first dive experience." },
          { time: "Afternoon", name: "Optional: Desert Safari & Quad Biking", detail: "Drive into the Eastern Desert for quad biking over golden dunes, camel riding, a Bedouin camp visit, traditional dinner under the stars, and stargazing in one of Egypt's darkest sky areas." },
          { time: "Evening", name: "Free evening at the resort", detail: "Resort dinner. Beach bar. Watch the sunset over the Red Sea Mountains. Overnight Hurghada." },
        ],
      },
      {
        day: 10, title: "Departure from Hurghada",
        location: "Hurghada",
        icon: "✈️",
        meals: ["Breakfast"],
        activities: [
          { time: "Morning", name: "Final morning at the Red Sea", detail: "Last swim in the Red Sea. Breakfast at your leisure." },
          { time: "Flexible", name: "Transfer to Hurghada Airport", detail: "Private transfer to Hurghada International Airport. Fly home direct or connect via Cairo. Your guide provides full assistance with departure formalities." },
        ],
      },
    ],
  },
 
  // ─── 4. CAIRO + ASWAN + LUXOR + SHARM ───────────────────────────────────
  {
    id: "cairo-aswan-luxor-sharm",
    title: "Cairo · Aswan · Luxor · Sharm El Sheikh",
    titleAr: "القاهرة · أسوان · الأقصر · شرم الشيخ",
    subtitle: "12 Days · 11 Nights · Pharaohs, Nile & Sinai",
    category: "multi-city",
    badge: "Premium",
    badgeColor: "#4A9EE8",
    duration: "12D / 11N",
    price: 1650,
    rating: 4.88,
    reviews: 1543,
    difficulty: "Easy–Moderate",
    groupSize: "2–12",
    heroImg: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1400&q=85",
    cities: ["Cairo", "Aswan", "Luxor", "Sharm El Sheikh"],
    tags: ["Pyramids", "Nile Cruise", "Mount Sinai", "Diving", "Culture"],
    includes: [
      "11 nights (5★ hotels & Nile cruise full board)",
      "Domestic flights: Cairo→Aswan, Luxor→Sharm",
      "All excursions with private Egyptologist",
      "All entrance fees",
      "All transfers",
    ],
    excludes: ["International flights", "Visa", "Tips", "Diving courses"],
    highlights: [
      "Pyramids & Grand Egyptian Museum",
      "Abu Simbel temples of Ramesses II",
      "4-night Nile Cruise Aswan to Luxor",
      "Valley of the Kings & Karnak",
      "Ras Mohammed National Park snorkeling",
      "Mount Sinai sunrise trek",
      "Tiran Island diving & snorkeling",
    ],
    itinerary: [
      { day: 1, title: "Arrival Cairo", location: "Cairo", icon: "🏙️", meals: ["Welcome Dinner"], activities: [{ time: "Arrival", name: "Airport pickup & hotel check-in", detail: "Private pickup at Cairo Airport. Welcome dinner with guide. Program briefing." }] },
      { day: 2, title: "Cairo — Pyramids & GEM", location: "Cairo", icon: "🔺", meals: ["Breakfast", "Lunch"], activities: [{ time: "08:30 AM", name: "Giza Plateau & Great Pyramids", detail: "Private tour of the Pyramids of Giza, the Sphinx, and the Valley Temple. Enter the Great Pyramid of Khufu. Visit the Grand Egyptian Museum: full Tutankhamun galleries with the solid gold death mask." }, { time: "02:00 PM", name: "Saqqara & Step Pyramid", detail: "World's first large stone structure (2,650 BC). Memphis ruins and colossal Ramesses II statue." }] },
      { day: 3, title: "Cairo — Islamic & Coptic Heritage", location: "Cairo", icon: "🕌", meals: ["Breakfast"], activities: [{ time: "09:00 AM", name: "Cairo Citadel & Alabaster Mosque", detail: "Panoramic Cairo views from Saladin's 12th-century fortress. Muhammad Ali Mosque with twin minarets." }, { time: "11:30 AM", name: "Khan el-Khalili & Islamic Cairo", detail: "Medieval bazaar, Al-Azhar Mosque (world's oldest university). Tea at 300-year-old Fishawi's Café." }, { time: "03:00 PM", name: "Coptic Cairo", detail: "Hanging Church, Church of St. Sergius, Ben Ezra Synagogue, Coptic Museum." }] },
      { day: 4, title: "Fly to Aswan — Philae & Nile Embarkation", location: "Aswan", icon: "✈️", meals: ["Breakfast", "Lunch on cruise", "Dinner"], activities: [{ time: "07:00 AM", name: "Cairo → Aswan flight", detail: "1-hour domestic flight to Nubia." }, { time: "10:00 AM", name: "Philae Temple & Aswan sites", detail: "High Dam, Unfinished Obelisk, Philae Temple by motorboat." }, { time: "01:30 PM", name: "Nile Cruise embarkation", detail: "Board 5★ cruise ship. Welcome lunch. Afternoon felucca around Elephantine Island at sunset." }] },
      { day: 5, title: "Abu Simbel — Greatest Rock Temple", location: "Abu Simbel", icon: "🏛️", meals: ["Breakfast", "Lunch", "Dinner"], activities: [{ time: "04:00 AM", name: "Pre-dawn convoy to Abu Simbel", detail: "3.5-hour desert drive to Lake Nasser. Arrive at sunrise for the full dramatic effect of the four 21m Ramesses II colossi. Inside: Battle of Kadesh reliefs, solar alignment chambers. Nefertari Temple. Return for lunch on the cruise." }, { time: "06:00 PM", name: "Sail north — Kom Ombo at sunset", detail: "The double temple at its most photogenic." }] },
      { day: 6, title: "Edfu Temple & Sailing North", location: "Edfu", icon: "🦅", meals: ["Breakfast", "Lunch", "Dinner"], activities: [{ time: "08:00 AM", name: "Edfu Temple of Horus", detail: "Egypt's most complete temple — horse carriage through Edfu, full hieroglyphic narrative with guide." }, { time: "04:00 PM", name: "Esna Lock", detail: "Ship navigates the working 1906 lock. Merchants, colour, Nile life." }] },
      { day: 7, title: "Luxor — Valley of the Kings & Karnak", location: "Luxor", icon: "👑", meals: ["Breakfast", "Lunch", "Dinner"], optionalExtra: "🎈 Hot Air Balloon (+$125)", activities: [{ time: "07:00 AM", name: "Valley of the Kings", detail: "3 royal tombs included. Tutankhamun optional ($25). Ramesses VI astronomical ceiling." }, { time: "10:00 AM", name: "Hatshepsut Temple & Colossi", detail: "Three terraced colonnades. Female pharaoh's extraordinary mortuary temple." }, { time: "03:00 PM", name: "Karnak Temple", detail: "200 acres, 134 hypostyle columns, Sacred Lake, Obelisk of Hatshepsut." }, { time: "08:00 PM", name: "Farewell dinner on the Nile", detail: "Gala dinner, Tanoura show, certificates." }] },
      { day: 8, title: "Fly Luxor → Sharm El Sheikh", location: "Sharm El Sheikh", icon: "🌅", meals: ["Breakfast"], activities: [{ time: "08:00 AM", name: "Disembark & Luxor Airport", detail: "Private transfer to Luxor Airport. 1-hour 15-minute domestic flight to Sharm El Sheikh." }, { time: "Afternoon", name: "Resort check-in & first Red Sea swim", detail: "Settle into your Sharm El Sheikh 5★ resort. Snorkel the house reef. Watch the Sinai mountains glow pink at sunset from the beach." }] },
      { day: 9, title: "Ras Mohammed National Park", location: "Sharm El Sheikh", icon: "🤿", meals: ["Breakfast"], activities: [{ time: "08:30 AM", name: "Ras Mohammed yacht cruise", detail: "Luxury yacht to Ras Mohammed National Park — meeting point of the Red Sea and Gulf of Aqaba. Two snorkeling stops at the richest coral reef ecosystem on earth: sharks, turtles, napoleon wrasse, schooling barracuda. BBQ lunch on the boat. Open bar." }, { time: "04:00 PM", name: "Return to resort — free evening", detail: "Naama Bay promenade optional. Seafood dinner." }] },
      { day: 10, title: "Mount Sinai Sunrise Trek", location: "St. Catherine", icon: "⛰️", meals: ["Breakfast"], activities: [{ time: "11:00 PM", name: "Night departure for Mount Sinai", detail: "Midnight coach departure from Sharm to St. Catherine's Monastery (1.5 hours). Meet your Bedouin guide at the trailhead." }, { time: "12:30 AM", name: "Sinai trek by starlight", detail: "2.5-hour ascent by the Camel Path (2,285m). The stars over Sinai are extraordinary — no light pollution for 100km in any direction. At the summit at dawn: 360° views over 5 countries as the Sahara ignites with the first light. Moses received the Ten Commandments here, according to three world religions." }, { time: "07:00 AM", name: "St. Catherine's Monastery", detail: "World's oldest continuously inhabited Christian monastery (6th century AD). Houses the Burning Bush, a library with manuscripts older than most European countries, and thousands of icons. Return to Sharm by 10am." }] },
      { day: 11, title: "Tiran Island & Red Sea Diving", location: "Sharm El Sheikh", icon: "🐠", meals: ["Breakfast"], activities: [{ time: "08:30 AM", name: "Tiran Island diving & snorkeling", detail: "Four legendary dive sites: Jackson Reef, Thomas Reef, Woodhouse Reef and Gordon Reef — a crescent of coral walls dropping to 50m. One of the world's premier dive destinations. Divers get 2 boat dives with full equipment; snorkelers get guided reef tours with gear." }, { time: "04:00 PM", name: "Final afternoon in Sharm", detail: "Free time at resort. Sunset from the beach. Final dinner in Naama Bay." }] },
      { day: 12, title: "Departure", location: "Sharm El Sheikh", icon: "✈️", meals: ["Breakfast"], activities: [{ time: "Morning", name: "Last Red Sea morning", detail: "Final swim. Checkout." }, { time: "Flexible", name: "Transfer to Sharm Airport", detail: "Private transfer. Fly direct home or connect via Cairo." }] },
    ],
  },
 
  // ─── 5. OASES — DAKHLA & KHARGA ─────────────────────────────────────────
  {
    id: "oases-dakhla-kharga",
    title: "Dakhla & Kharga Oases Desert Journey",
    titleAr: "رحلة الواحات: الداخلة والخارجة",
    subtitle: "5 Days · 4 Nights · Lost Kingdoms of the Western Desert",
    category: "desert",
    badge: "Unique",
    badgeColor: "#52B788",
    duration: "5D / 4N",
    price: 580,
    rating: 4.92,
    reviews: 387,
    difficulty: "Moderate",
    groupSize: "2–8",
    heroImg: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1400&q=85",
    cities: ["Cairo", "Kharga", "Dakhla", "Cairo"],
    tags: ["Desert", "Oasis", "Roman Ruins", "Off-the-beaten-path", "Adventure"],
    includes: [
      "4 nights accommodation (eco-lodges & boutique hotels)",
      "Private 4WD expedition vehicle",
      "Expert desert guide throughout",
      "All meals (full board in desert)",
      "All entrance fees",
      "Camping equipment if overnight in desert",
      "Cairo transfers",
    ],
    excludes: ["Domestic flights to/from Cairo (optional)", "Tips", "Personal expenses"],
    highlights: [
      "Temple of Hibis, Kharga — best preserved Ptolemaic temple outside the Nile Valley",
      "Bagawat Necropolis — 4th century Christian burial complex",
      "Medieval Islamic mud-brick city of Al-Qasr",
      "Dakhla's Roman ruins of Deir el-Haggar",
      "Magical sand dune sunset at Mut",
      "Hot springs bathing in the desert",
      "Extraordinary stargazing — zero light pollution",
    ],
    itinerary: [
      {
        day: 1, title: "Cairo → Kharga Oasis — First Desert Night",
        location: "Cairo → Kharga",
        icon: "🏜️",
        meals: ["Lunch", "Dinner"],
        activities: [
          { time: "06:00 AM", name: "Departure from Cairo", detail: "Early departure from Cairo in your private 4WD. Drive through the Nile Valley and then southwest into the Eastern Desert. 9-hour drive with stops for tea and desert photography. The landscape transforms progressively from cultivation to absolute desert." },
          { time: "01:00 PM", name: "Picnic lunch in the desert", detail: "Your guide prepares a traditional Bedouin-style desert lunch with bread baked in the sand, beans, and local vegetables. Rest in the shade of the vehicle." },
          { time: "05:00 PM", name: "Arrive Kharga Oasis", detail: "First sight of the oasis: date palms appearing miraculously from the sand. Check into your eco-lodge. Traditional Kharga dinner: roasted lamb, local rice, fresh dates." },
        ],
      },
      {
        day: 2, title: "Kharga — Roman & Christian Heritage",
        location: "Kharga",
        icon: "🏛️",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          { time: "08:00 AM", name: "Temple of Hibis", detail: "The best-preserved Ptolemaic temple outside the Nile Valley — dedicated to Amun, with reliefs dating from the 6th century BC through the Roman period. See extraordinary painted chambers including the unique depiction of all the major Egyptian deities in one room." },
          { time: "10:00 AM", name: "Bagawat Christian Necropolis", detail: "One of the oldest Christian burial complexes in the world: 263 mudbrick chapels from the 3rd–7th centuries AD, decorated with biblical scenes including Adam and Eve, the Exodus, and Noah's Ark. The desert air has preserved the painted plaster inside the chapels for 1,700 years — astonishing detail still visible." },
          { time: "12:30 PM", name: "Kharga local lunch", detail: "Traditional lunch at a local Kharga family home. Stuffed vine leaves, lentil soup, grilled lamb, local bread, date syrup dessert." },
          { time: "03:00 PM", name: "Qasr el-Ghueita — Roman temple fortress", detail: "A Pharaonic temple enclosed within a massive Roman mud-brick fortress on a rocky outcrop. Extraordinary views over the oasis from the fortress walls." },
          { time: "07:00 PM", name: "Desert stargazing", detail: "Kharga sits in one of the darkest sky zones on earth. With zero light pollution, the Milky Way is a solid white band across the sky. Your guide has a telescope and explains the constellations the ancient Egyptians named." },
        ],
      },
      {
        day: 3, title: "Cross the Desert — Dakhla Oasis",
        location: "Kharga → Dakhla",
        icon: "🌵",
        meals: ["Breakfast", "Lunch in desert", "Dinner"],
        activities: [
          { time: "08:00 AM", name: "Cross the Darb el-Arbain Desert Road", detail: "The ancient Forty-Day Road: the camel caravan route between sub-Saharan Africa and the Nile Valley, used for 2,000 years. 200km of raw Sahara Desert in your 4WD — dunes, rock formations, fossilised marine life visible on the desert surface." },
          { time: "01:00 PM", name: "Desert lunch & hot spring bathing", detail: "Lunch stop at one of the remote desert hot springs (45°C). Bathe in mineral-rich water in the middle of the Sahara — one of the most surreal experiences in Egypt." },
          { time: "04:00 PM", name: "Arrive Dakhla — Al-Qasr medieval city", detail: "Check into your Dakhla eco-lodge, then immediately visit Al-Qasr: a medieval Islamic mud-brick city, still inhabited until 1990, now preserved as a living museum. Narrow covered alleyways, wooden lintels inscribed with Koranic verses, a working Mamluk-era minaret from 1518, traditional bread ovens still functional. The finest medieval Islamic architecture in the Egyptian desert." },
        ],
      },
      {
        day: 4, title: "Dakhla — Roman Temples & Great Sand Dunes",
        location: "Dakhla",
        icon: "🏺",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          { time: "08:30 AM", name: "Deir el-Haggar Roman temple", detail: "A complete Roman-period Kharga temple dedicated to the Theban triad: Amun, Mut and Khonsu. Extraordinary painted reliefs in remarkable preservation — Emperor Nero depicted in traditional pharaonic regalia, making offerings to Egyptian gods." },
          { time: "10:30 AM", name: "Balat — Pharaonic village & Old Kingdom tombs", detail: "The ancient village of Balat preserves mudbrick architecture from the Old Kingdom (2500 BC) and the Islamic period side by side. Nearby mastaba tombs of the Old Kingdom governors of Dakhla contain the oldest painted murals in the Western Desert." },
          { time: "01:30 PM", name: "Lunch & free afternoon at the dunes", detail: "Lunch at your lodge. Afternoon free to walk the edge of the massive sand dune fields south of Mut — extraordinary golden light at 4pm." },
          { time: "05:30 PM", name: "Sand dune sunset", detail: "4WD to the top of the highest accessible dune for the most magnificent sunset in Egypt. The Dakhla depression spreads out below, ringed by the Great Sand Sea, with the last light turning everything amber and rose. Traditional Bedouin tea at the dune summit." },
          { time: "08:00 PM", name: "Dinner under the stars", detail: "Open-air dinner with lanterns, traditional music, and extraordinary night sky." },
        ],
      },
      {
        day: 5, title: "Return to Cairo",
        location: "Dakhla → Cairo",
        icon: "🏙️",
        meals: ["Breakfast", "Lunch"],
        activities: [
          { time: "07:00 AM", name: "Early departure", detail: "Final breakfast, then the long return journey to Cairo via the Nile Valley road, passing the dramatically situated White Monastery and Red Monastery near Sohag." },
          { time: "01:00 PM", name: "Lunch stop at Asyut", detail: "Lunch at a local restaurant in Asyut." },
          { time: "07:00 PM", name: "Arrive Cairo", detail: "Return to your Cairo hotel or airport, depending on your onward flight arrangements." },
        ],
      },
    ],
  },
 
  // ─── 6. CAIRO + ALEXANDRIA 3 DAYS ────────────────────────────────────────
  {
    id: "cairo-alexandria-3days",
    title: "Cairo & Alexandria — 3 Day Classic",
    titleAr: "القاهرة والإسكندرية — ٣ أيام كلاسيكية",
    subtitle: "3 Days · 2 Nights · Pharaohs & Mediterranean",
    category: "short-break",
    badge: "Quick Escape",
    badgeColor: "#4A9EE8",
    duration: "3D / 2N",
    price: 320,
    rating: 4.85,
    reviews: 1243,
    difficulty: "Easy",
    groupSize: "2–12",
    heroImg: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1400&q=85",
    cities: ["Cairo", "Alexandria"],
    tags: ["Pyramids", "Mediterranean", "History", "Culture"],
    includes: ["2 nights 5★ hotel (1 Cairo, 1 Alexandria)", "All transportation", "Private Egyptologist guide", "All entrance fees", "Daily breakfast + 2 lunches"],
    excludes: ["International flights", "Visa", "Dinners (except Day 1 optional)", "Tips"],
    highlights: ["Great Pyramids & Grand Egyptian Museum", "Bibliotheca Alexandrina", "Roman Catacombs of Kom el-Shoqafa", "Qaitbay Citadel on the Mediterranean", "Khan el-Khalili bazaar", "Alexandria seafood on the Corniche"],
    itinerary: [
      {
        day: 1, title: "Cairo — Pyramids, GEM & Medieval City",
        location: "Cairo",
        icon: "🔺",
        meals: ["Breakfast", "Lunch"],
        activities: [
          { time: "08:00 AM", name: "Giza Pyramids, Sphinx & Valley Temple", detail: "The Great Pyramid of Khufu (enter optional, $35), the Pyramid of Khafre (enter included), the smaller Menkaure pyramid. The Great Sphinx — 73.5m long, 4,500 years old. The Valley Temple: where the pharaoh's mummy was prepared. Your guide explains all the unsolved mysteries: how precisely the pyramids were aligned to true north (error of 0.05 degrees), why the three pyramids align with Orion's Belt, and the extraordinary logistics of building in an age without iron tools." },
          { time: "11:00 AM", name: "Grand Egyptian Museum", detail: "The world's largest archaeological museum opened in 2023. Key highlights with your guide: the Tutankhamun galleries (solid gold death mask, two coffins, golden throne, hunting chariot), the 87-statue Royal Staircase, the Room of Secrets (the royal mummies collection in world-class display)." },
          { time: "01:30 PM", name: "Lunch in old Cairo", detail: "Traditional Egyptian lunch: koshari, ful medames, fresh bread, Egyptian salads." },
          { time: "03:00 PM", name: "Khan el-Khalili & Islamic Cairo", detail: "Medieval bazaar with spice markets, copper smiths, jewellery and perfumers. Tea at Fishawi's Café (open since 1773). Al-Azhar Mosque." },
          { time: "06:00 PM", name: "Check in & rest", detail: "Overnight Cairo hotel." },
        ],
      },
      {
        day: 2, title: "Day Trip to Alexandria — Pearl of the Mediterranean",
        location: "Alexandria",
        icon: "🌊",
        meals: ["Breakfast", "Seafood lunch"],
        activities: [
          { time: "07:00 AM", name: "Private car to Alexandria (2.5 hours)", detail: "Early departure through the Delta. Arrive in Alexander the Great's legendary city by 9:30am." },
          { time: "09:30 AM", name: "Catacombs of Kom el-Shoqafa", detail: "The largest Roman burial complex in Egypt, discovered in 1900 when a donkey fell through the ground. Three levels cut 35 metres into the rock, with unique hybrid Greco-Roman-Egyptian decoration: Anubis in Roman armour, sphinxes with Roman soldier shields. The Great Hall of the Catacombs held the sarcophagi of a wealthy Alexandrian family — the reliefs are the most sophisticated fusion of three civilisations on any Egyptian monument." },
          { time: "11:00 AM", name: "Bibliotheca Alexandrina", detail: "The reborn ancient library of Alexandria — one of the most architecturally striking buildings in the Arab world. The tilted disc of the main building, designed by Norwegian firm Snøhetta, slopes toward the Mediterranean and is clad in Aswan granite inscribed with scripts from every human writing system. Inside: 8 million volumes, 4 permanent museums (including the Manuscripts Museum with 10,000 rare Islamic manuscripts), a planetarium and a centre for underwater archaeology documenting ancient Alexandria on the harbour floor." },
          { time: "01:00 PM", name: "Seafood lunch on the Corniche", detail: "Alexandria's greatest pleasure: fresh Red Sea and Mediterranean fish cooked to order at a traditional seafood restaurant on the corniche. Calamari, shrimp, whole sea bass, local bread, tahini, fresh lemon. Watch the Mediterranean waves while you eat." },
          { time: "03:00 PM", name: "Qaitbay Citadel", detail: "Built in 1477 on the exact site of the ancient Pharos Lighthouse (one of the Seven Wonders of the Ancient World) using the lighthouse's own stone. The 30-metre tower stands in the sea on a promontory — on three sides, the Mediterranean. Inside: views over the Eastern Harbour, the fish market below, and Alexandria's skyline." },
          { time: "04:30 PM", name: "Pompey's Pillar & Serapeum", detail: "Egypt's tallest ancient column (30m, red Aswan granite) — actually a monument to Emperor Diocletian from 298 AD, misnamed by Crusaders. On the hill around it: the ruins of the Serapeum, where the original Library of Alexandria stood before it was burned. Two sphinx statues from the Ptolemaic period still guard the site." },
          { time: "06:30 PM", name: "Return to Cairo", detail: "2.5-hour return drive. Arrive Cairo by 9pm." },
        ],
      },
      {
        day: 3, title: "Cairo — Coptic Quarter & Departure",
        location: "Cairo",
        icon: "✝️",
        meals: ["Breakfast"],
        activities: [
          { time: "09:00 AM", name: "Coptic Cairo — The Oldest Quarter", detail: "Old Cairo (Misr el-Qadima) contains the oldest inhabited quarter of any major city in Egypt. Walk through narrow alleys to the Hanging Church (5th century) — built on the gatehouse of the Roman Babylon Fortress, its wooden ceiling shaped like Noah's Ark. Church of St. Sergius (4th century): crypt beneath the altar where the Holy Family rested during their Flight into Egypt. Ben Ezra Synagogue (9th century): where Moses's basket was said to have been found in the bulrushes. The Coptic Museum: 16,000 items from the earliest Christian communities in the world." },
          { time: "11:30 AM", name: "Cairo Citadel & Panoramic View", detail: "Final stop at Saladin's 12th-century fortress for a panoramic farewell to Cairo: the medieval minarets, the Nile, and the distant pyramids all visible simultaneously." },
          { time: "01:00 PM", name: "Transfer to airport", detail: "Transfer to Cairo International Airport for your departure flight." },
        ],
      },
    ],
  },
 
  // ─── 7. FAYOUM 3 DAYS ───────────────────────────────────────────────────
  {
    id: "fayoum-3days",
    title: "Fayoum Oasis — 3 Day Escape",
    titleAr: "واحة الفيوم — رحلة ٣ أيام",
    subtitle: "3 Days · 2 Nights · Prehistoric Wonders & Desert Magic",
    category: "short-break",
    badge: "UNESCO",
    badgeColor: "#52B788",
    duration: "3D / 2N",
    price: 280,
    rating: 4.92,
    reviews: 534,
    difficulty: "Easy–Moderate",
    groupSize: "2–10",
    heroImg: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1400&q=85",
    cities: ["Cairo", "Fayoum"],
    tags: ["UNESCO", "Desert", "Nature", "Flamingos", "Whales", "Fossils"],
    includes: ["2 nights eco-lodge or boutique hotel", "Private 4WD", "Expert naturalist guide", "All meals", "All entrance fees", "Stargazing equipment"],
    excludes: ["International flights", "Personal expenses", "Tips"],
    highlights: ["Wadi El Hitan — prehistoric whale skeletons (UNESCO)", "Lake Qarun flamingos & pelicans", "Magic Lake colour-changing phenomenon", "Roman waterwheels of Fayoum", "White desert formations at Wadi El Rayan", "Extraordinary stargazing"],
    itinerary: [
      {
        day: 1, title: "Cairo → Fayoum — Waterwheels & Lake Qarun",
        location: "Fayoum",
        icon: "🌿",
        meals: ["Lunch", "Dinner"],
        activities: [
          { time: "08:00 AM", name: "Depart Cairo", detail: "1.5-hour drive southwest from Cairo. The landscape transforms from Cairo's urban sprawl to agricultural land and then desert. Cross the Fayoum Depression — an ancient lake bed 45 metres below sea level." },
          { time: "10:00 AM", name: "Fayoum's Roman Waterwheels", detail: "Fayoum has been Egypt's garden since the Middle Kingdom: 214 traditional wooden waterwheels powered by the Nile's gradient have irrigated the oasis for 2,000 years. See the waterwheels at Madinet Madi, still turning today. Visit the nearby Pharaonic temple of Amenemhat III (1830 BC) — one of the few Middle Kingdom temples still standing." },
          { time: "01:00 PM", name: "Lunch at lakeside restaurant", detail: "Fresh fish from Lake Qarun — tilapia, mullet, and bouri grilled over coals. Traditional Egyptian bread, local cheese and fresh-squeezed guava juice." },
          { time: "03:00 PM", name: "Lake Qarun & birdwatching", detail: "Lake Qarun is one of Egypt's most important wetlands: 214 bird species recorded here, including greater flamingos (October–March), white pelicans, herons, and dozens of migratory species crossing between Africa and Europe. Your naturalist guide identifies species by sight and sound. Motorboat trip on the lake to get close to the flamingo flocks." },
          { time: "07:00 PM", name: "Dinner at eco-lodge", detail: "Check into your eco-lodge or boutique hotel in the Tunis Village — a remarkable artists' colony in the desert above Fayoum. Organic Egyptian dinner." },
        ],
      },
      {
        day: 2, title: "Wadi El Hitan UNESCO — The Valley of the Whales",
        location: "Wadi El Hitan",
        icon: "🐋",
        meals: ["Breakfast", "Desert picnic lunch", "Dinner"],
        activities: [
          { time: "07:30 AM", name: "Breakfast & departure", detail: "Early breakfast. Pack for a full day in the desert." },
          { time: "09:00 AM", name: "Wadi El Hitan UNESCO World Heritage Site", detail: "The most extraordinary fossil site on earth: 37 million years ago, this desert was a shallow sea, and the skeletons of some of the largest prehistoric whales (Basilosaurus — up to 18 metres) emerge from the desert sand. UNESCO declared Wadi El Hitan a World Heritage Site in 2005. Your naturalist guide explains the evolutionary story: Basilosaurus still had tiny hind legs — evidence of its land mammal ancestors. Some skeletons still contain their stomach contents: fish and sea turtle bones. Walk among these enormous creatures, lying exactly where they died, in a surreal landscape of white sand, pink limestone and fossil wood. No photograph adequately captures the experience." },
          { time: "12:30 PM", name: "Desert picnic lunch", detail: "Your guide prepares a gourmet desert picnic in the shadow of a fossil whale. Fresh bread from the Cairo baker, grilled chicken, roasted vegetables, and Egyptian sweets." },
          { time: "02:00 PM", name: "Wadi El Rayan — Two desert lakes & waterfall", detail: "Egypt's only natural waterfall: where the upper and lower lakes of Wadi El Rayan connect over a 10-metre cascade. Swim in the lower lake (crystal clear, desert-warm water) surrounded by sand dunes. Spot sand foxes and desert eagles in the afternoon light." },
          { time: "05:30 PM", name: "Sand dune sunset photography", detail: "Your guide drives to the best sunset dune. The desert light at 6pm is extraordinary." },
          { time: "09:00 PM", name: "Stargazing session", detail: "With your eco-lodge guide and telescope: the Milky Way, the Orion Nebula, and the Andromeda Galaxy visible with the naked eye from the Fayoum desert. Ancient Egyptian star maps discussed." },
        ],
      },
      {
        day: 3, title: "Magic Lake & Return to Cairo",
        location: "Fayoum → Cairo",
        icon: "🌈",
        meals: ["Breakfast", "Lunch"],
        activities: [
          { time: "08:00 AM", name: "Magic Lake (Ain el-Siliyin)", detail: "Fayoum's most surreal wonder: a series of spring-fed pools whose colour shifts from turquoise to emerald to deep blue depending on the mineral content and angle of light. Surrounded by white chalk desert formations and crimson sand dunes. Your guide explains the complex geological chemistry that creates the colour-changing effect." },
          { time: "10:30 AM", name: "Karanis — Greco-Roman town", detail: "One of the best-preserved Greco-Roman settlements in Egypt: a complete 3rd-century BC to 5th-century AD town preserved under desert sand. Two Ptolemaic temples, Roman townhouses, a bathhouse and granaries — all still standing. The Karanis Museum nearby houses extraordinary everyday objects found in the town: papyrus letters, wooden tools, glass vessels and children's toys." },
          { time: "01:00 PM", name: "Farewell lunch in Fayoum city", detail: "Traditional Fayoumi lunch: roasted pigeon (the local speciality), molokhiya, fresh bread, and sweet Fayoum mangoes in season." },
          { time: "03:00 PM", name: "Return drive to Cairo", detail: "1.5-hour return to Cairo. Drop-off at your hotel or airport." },
        ],
      },
    ],
  },
 
  // ─── 8. SINAI & DAHAB ───────────────────────────────────────────────────
  {
    id: "sinai-dahab",
    title: "Sinai & Dahab — Desert, Sea & Spirituality",
    titleAr: "سيناء ودهب — صحراء وبحر وروحانية",
    subtitle: "6 Days · 5 Nights · The Sinai Peninsula Complete",
    category: "adventure",
    badge: "Adventure",
    badgeColor: "#E63946",
    duration: "6D / 5N",
    price: 720,
    rating: 4.88,
    reviews: 876,
    difficulty: "Moderate–Challenging",
    groupSize: "2–12",
    heroImg: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1400&q=85",
    cities: ["Sharm El Sheikh", "St. Catherine", "Dahab", "Nuweiba"],
    tags: ["Mount Sinai", "Diving", "Blue Hole", "Bedouin", "Trekking", "Spiritual"],
    includes: ["5 nights accommodation (boutique hotels & Bedouin camp)", "All transfers", "Bedouin guide for Mount Sinai", "All entrance fees", "Daily breakfast + 4 dinners"],
    excludes: ["International flights", "Diving courses", "Tips", "Lunch (most days)"],
    highlights: ["Mount Sinai sunrise — Moses' Mountain", "St. Catherine's Monastery (6th century AD)", "Dahab Blue Hole — legendary dive site", "Coloured Canyon — Sinai's geological marvel", "Bedouin desert camp & camel trek", "Nuweiba beach & night fishing", "Ras Abu Galum — protected snorkeling paradise"],
    itinerary: [
      {
        day: 1, title: "Arrive Sharm El Sheikh — Ras Mohammed",
        location: "Sharm El Sheikh",
        icon: "🏖️",
        meals: ["Dinner"],
        activities: [
          { time: "Arrival", name: "Airport transfer & hotel check-in", detail: "Welcome to the Sinai Peninsula — the meeting point of Africa, Asia and the Arabian Peninsula. Check into your hotel. Evening walk along Naama Bay: restaurants, shisha cafés and the Red Sea corniche." },
          { time: "Afternoon (if early arrival)", name: "Ras Mohammed National Park", detail: "If you arrive by early afternoon, your guide can take you to Ras Mohammed National Park: the tip of the Sinai Peninsula where the Red Sea and Gulf of Aqaba meet. The finest snorkeling in the entire region." },
        ],
      },
      {
        day: 2, title: "Ras Mohammed Yacht & Tiran Island",
        location: "Sharm El Sheikh — Red Sea",
        icon: "⛵",
        meals: ["Breakfast", "BBQ lunch on boat"],
        activities: [
          { time: "08:30 AM", name: "Luxury yacht cruise to Ras Mohammed", detail: "Full day on a luxury yacht to Ras Mohammed National Park and Tiran Island. Two snorkeling stops: Jackson Reef (famous for its wall dropping to 800 metres, patrolled by grey reef sharks and napoleons) and Gordon Reef (enormous Napoleon wrasse, turtles, schools of barracuda). BBQ lunch on the boat. Open bar." },
          { time: "05:00 PM", name: "Return to Sharm", detail: "Sunset on the Red Sea. Dinner free at Naama Bay restaurants." },
        ],
      },
      {
        day: 3, title: "Mount Sinai Night Trek & St. Catherine",
        location: "St. Catherine",
        icon: "⛰️",
        meals: ["Breakfast", "Monastery visit"],
        activities: [
          { time: "11:00 PM", name: "Night departure for Mount Sinai", detail: "Coach from Sharm to St. Catherine (1.5 hours). Arrive at the foot of Gebel Musa (Moses' Mountain) at midnight. Don warm layers: the summit temperature drops to 5°C in winter." },
          { time: "12:30 AM", name: "The Sinai summit trek", detail: "2.5-hour ascent: first by the wide Camel Path to Elijah's Basin (where Elijah heard the still small voice of God, 1 Kings 19), then 750 'Steps of Repentance' carved by a single monk over a lifetime. Arrive summit (2,285m) 90 minutes before dawn. Wrapped in Bedouin blankets, watch the most sacred sunrise in three world religions: the Sinai desert glows orange below, the Gulf of Aqaba glitters to the east, and the Red Sea shimmers to the south." },
          { time: "07:30 AM", name: "St. Catherine's Monastery", detail: "The world's oldest continuously inhabited Christian monastery (founded 565 AD by Emperor Justinian). Houses the Burning Bush (still growing), a library of 4,500 manuscripts (second only to the Vatican), 2,000 icons, and the bones of all deceased monks in the charnel house. The monastery has never been conquered, sacked, or abandoned in 1,500 years." },
          { time: "11:00 AM", name: "Drive to Dahab", detail: "1.5-hour drive through spectacular Sinai mountain scenery to Dahab." },
        ],
      },
      {
        day: 4, title: "Dahab — Blue Hole & Coloured Canyon",
        location: "Dahab",
        icon: "🤿",
        meals: ["Breakfast", "Dinner"],
        activities: [
          { time: "09:00 AM", name: "Dahab Blue Hole snorkeling/diving", detail: "The Blue Hole is one of the most famous dive sites on earth: a 100-metre diameter, 100-metre deep submarine sinkhole connected to the open sea through the 'Arch' at 52 metres depth. Snorkelers can explore the top 5 metres and see enormous napoleon fish, turtles and shoals of tropical fish. Divers (PADI Advanced+) can penetrate deeper. The surrounding reef is pristine and rich." },
          { time: "01:00 PM", name: "Lunch on the beach", detail: "Dahab's legendary beachfront restaurants — cushions on the floor, sea views, fresh fish, and the most relaxed atmosphere in Egypt. Free afternoon for more snorkeling or resting." },
          { time: "04:00 PM", name: "Coloured Canyon", detail: "A 1-hour 4WD drive into the Sinai Desert to the Coloured Canyon: a narrow slot canyon carved by flash floods through multicoloured sandstone and limestone. The canyon walls glow in bands of red, yellow, purple, orange and white. Navigate through the narrow passages (some barely shoulder-width) as the light changes above you. The most visually striking geological formation in the Sinai." },
          { time: "08:00 PM", name: "Dinner at Dahab restaurant", detail: "Fresh Red Sea fish on the beach. Watch the lights of Saudi Arabia across the Gulf of Aqaba." },
        ],
      },
      {
        day: 5, title: "Bedouin Desert Camp & Nuweiba",
        location: "Sinai Desert → Nuweiba",
        icon: "🐪",
        meals: ["Breakfast", "Bedouin dinner"],
        activities: [
          { time: "09:00 AM", name: "Bedouin camel trek & desert immersion", detail: "Ride camels into the Sinai wilderness with your Bedouin guide — a member of one of the ancient Sinai tribes who have lived here for thousands of years. Visit a traditional Bedouin encampment: see how bread is baked in sand, hear stories of desert navigation by stars, and drink sweet Bedouin tea made from fresh desert herbs." },
          { time: "01:00 PM", name: "Wadi Feiran — Oasis of the Prophets", detail: "The largest oasis in the Sinai: lush with palms, tamarisks and running water — the first green seen after the desert. The Israelites rested here during the Exodus according to the Bible (Exodus 17). Your guide shows the early Christian hermit cells cut into the cliff faces." },
          { time: "04:00 PM", name: "Arrive Nuweiba — Gulf of Aqaba", detail: "Check into your Nuweiba beach lodge: simple, atmospheric, directly on the beach facing Jordan and Saudi Arabia across the Gulf. Extraordinary sunset." },
          { time: "07:00 PM", name: "Bedouin stargazing dinner", detail: "Your Bedouin host prepares a complete traditional dinner in the desert behind the lodge: lamb slow-cooked underground (zarb), lentil soup, fresh bread. Stories of Sinai under 10,000 stars." },
        ],
      },
      {
        day: 6, title: "Nuweiba Beach & Departure",
        location: "Nuweiba → Sharm",
        icon: "✈️",
        meals: ["Breakfast"],
        activities: [
          { time: "Morning", name: "Morning snorkeling at Ras Abu Galum", detail: "The most pristine protected marine area in the Sinai: only accessible on foot, by camel, or by boat. No motorised water sports are permitted. The coral reef here has never been damaged and the fish have no fear of humans — extraordinary snorkeling in completely unspoiled water." },
          { time: "12:00 PM", name: "Drive back to Sharm El Sheikh Airport", detail: "3-hour drive through the spectacular Sinai mountains back to Sharm. Transfer to the airport. Fly home or connect via Cairo." },
        ],
      },
    ],
  },
   // ─── 9. CAIRO + LUXOR + ASWAN (5 DAYS) ──────────────────────────────────
  {
    id: "cairo-luxor-aswan-5days",
    title: "Cairo · Luxor · Aswan — 5 Day Sprint",
    titleAr: "القاهرة · الأقصر · أسوان — ٥ أيام سريعة",
    subtitle: "5 Days · 4 Nights · Best of Pharaonic Egypt",
    category: "short-break",
    badge: "Best Value",
    badgeColor: "#D4A847",
    duration: "5D / 4N",
    price: 750,
    rating: 4.87,
    reviews: 2341,
    difficulty: "Easy",
    groupSize: "2–16",
    heroImg: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1400&q=85",
    cities: ["Cairo", "Luxor", "Aswan"],
    tags: ["Pyramids", "Temples", "Abu Simbel", "History", "Culture"],
    includes: ["4 nights 5★ hotels", "Domestic flights: Cairo→Aswan, Luxor→Cairo", "Private Egyptologist guide", "All entrance fees", "All transfers", "Daily breakfast + 3 lunches"],
    excludes: ["International flights", "Visa", "Hot air balloon (+$125)", "Abu Simbel optional (+$80)", "Tips"],
    highlights: ["Great Pyramids & Grand Egyptian Museum", "Abu Simbel option", "Philae Temple by motorboat", "Valley of the Kings", "Karnak Temple", "Felucca sunset sail"],
    itinerary: [
      { day: 1, title: "Cairo — Pyramids & GEM", location: "Cairo", icon: "🔺", meals: ["Breakfast", "Lunch"], activities: [{ time: "08:30 AM", name: "Giza Plateau", detail: "Private tour: Great Pyramid, Sphinx, Valley Temple. Grand Egyptian Museum — full Tutankhamun galleries." }, { time: "03:00 PM", name: "Saqqara & Memphis", detail: "Step Pyramid (2,650 BC), Memphis ruins, colossal Ramesses II." }] },
      { day: 2, title: "Fly Cairo → Aswan — Abu Simbel", location: "Aswan", icon: "✈️", meals: ["Breakfast", "Lunch"], optionalExtra: "🏛️ Abu Simbel (+$80) — strongly recommended", activities: [{ time: "06:00 AM", name: "Cairo → Aswan flight", detail: "1-hour flight." }, { time: "09:30 AM", name: "Aswan sites", detail: "High Dam, Unfinished Obelisk, Philae Temple by motorboat." }, { time: "05:00 PM", name: "Felucca sunset around Elephantine Island", detail: "Traditional sail with Nubian tea." }] },
      { day: 3, title: "Luxor by Sleeper Train or Taxi", location: "Luxor", icon: "🚂", meals: ["Breakfast"], activities: [{ time: "Morning", name: "Travel Aswan → Luxor (3 hours by taxi)", detail: "Scenic road along the East Bank of the Nile, passing Edfu and Kom Ombo." }, { time: "02:00 PM", name: "Luxor Temple & Karnak Temple", detail: "Two of Egypt's greatest monuments in one afternoon." }] },
      { day: 4, title: "Luxor West Bank — Valley of the Kings", location: "Luxor", icon: "⚱️", meals: ["Breakfast", "Lunch"], optionalExtra: "🎈 Hot Air Balloon at dawn (+$125)", activities: [{ time: "07:00 AM", name: "Valley of the Kings", detail: "3 royal tombs. Tutankhamun optional ($25)." }, { time: "10:00 AM", name: "Hatshepsut Temple & Colossi of Memnon", detail: "Three terraced colonnades. Twin guardian statues." }, { time: "01:00 PM", name: "Lunch & free afternoon", detail: "Explore Luxor souq or rest." }] },
      { day: 5, title: "Fly Luxor → Cairo — Departure", location: "Cairo", icon: "✈️", meals: ["Breakfast"], activities: [{ time: "Morning", name: "Luxor Museum (optional)", detail: "World-class New Kingdom art in a small, perfectly curated museum." }, { time: "Flexible", name: "Fly Luxor → Cairo", detail: "1-hour flight. Transfer to international terminal." }] },
    ],
  },
];
 
// ══════════════════════════════════════════════════════════════════════════════
//  CURRENCY
// ══════════════════════════════════════════════════════════════════════════════
const CURRENCIES = {
  USD: { symbol: "$", rate: 1 },
  EUR: { symbol: "€", rate: 0.92 },
  GBP: { symbol: "£", rate: 0.79 },
  EGP: { symbol: "ج.م", rate: 48.5 },
};
 
const CATEGORY_LABELS = {
  all: "All Packages", cruise: "Nile Cruises",
  "multi-city": "Multi-City", "short-break": "Short Breaks",
  desert: "Desert & Oases", adventure: "Adventure",
};
const CATEGORY_ICONS = { all: "✦", cruise: "🚢", "multi-city": "🗺️", "short-break": "⚡", desert: "🏜️", adventure: "🎯" };
 
// ══════════════════════════════════════════════════════════════════════════════
//  SUB-COMPONENTS
// ══════════════════════════════════════════════════════════════════════════════
const Stars = ({ n }) => (
  <span style={{ color: "#C9A84C", fontSize: "0.8rem" }}>
    {"★".repeat(Math.floor(n))}{"☆".repeat(5 - Math.floor(n))}
  </span>
);
 
// ── PACKAGE CARD ──────────────────────────────────────────────────────────────
function PackageCard({ pkg, currency, onOpen }) {
  const [hov, setHov] = useState(false);
  const cur = CURRENCIES[currency] || CURRENCIES.USD;
  const price = Math.round(pkg.price * cur.rate);
 
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => onOpen(pkg)}
      style={{
        background: "#0F0C18",
        border: `1px solid ${hov ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.13)"}`,
        borderRadius: "18px", overflow: "hidden", cursor: "pointer",
        transition: "all 0.35s cubic-bezier(.34,1.56,.64,1)",
        transform: hov ? "translateY(-8px)" : "none",
        boxShadow: hov ? "0 28px 60px rgba(0,0,0,0.6), 0 0 30px rgba(201,168,76,0.15)" : "0 4px 20px rgba(0,0,0,0.3)",
        display: "flex", flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
        <img src={pkg.heroImg} alt={pkg.title} loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease", transform: hov ? "scale(1.08)" : "scale(1)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,12,24,0.92) 0%, rgba(15,12,24,0.1) 55%, transparent 100%)" }} />
        {hov && <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.18), transparent 65%)" }} />}
 
        {/* Badge */}
        <div style={{ position: "absolute", top: "12px", left: "12px", background: pkg.badgeColor + "22", border: `1px solid ${pkg.badgeColor}55`, color: pkg.badgeColor, fontSize: "0.62rem", fontWeight: 800, padding: "4px 12px", borderRadius: "20px", letterSpacing: "1.5px", fontFamily: "'Inter', sans-serif", textTransform: "uppercase" }}>{pkg.badge}</div>
 
        {/* Duration badge */}
        <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(7,5,13,0.82)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", color: "#EDE8D9", fontSize: "0.72rem", padding: "4px 10px", borderRadius: "8px", fontFamily: "'Inter', sans-serif" }}>{pkg.duration}</div>
 
        {/* Cities strip */}
        <div style={{ position: "absolute", bottom: "12px", left: "12px", right: "12px", display: "flex", gap: "5px", flexWrap: "wrap" }}>
          {pkg.cities.slice(0, 4).map((c, i) => (
            <span key={i} style={{ background: "rgba(7,5,13,0.75)", backdropFilter: "blur(6px)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C", fontSize: "0.6rem", padding: "2px 8px", borderRadius: "10px", fontFamily: "'Inter', sans-serif" }}>📍{c}</span>
          ))}
        </div>
      </div>
 
      {/* Body */}
      <div style={{ padding: "16px 18px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.02rem", fontWeight: 700, color: "#EDE8D9", margin: "0 0 4px", lineHeight: 1.3 }}>{pkg.title}</h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.76rem", color: "#7A7264", margin: "0 0 10px", fontStyle: "italic" }}>{pkg.subtitle}</p>
 
        {/* Tags */}
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginBottom: "12px" }}>
          {pkg.tags.slice(0, 4).map((t, i) => (
            <span key={i} style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.15)", color: "#A09880", fontSize: "0.65rem", padding: "2px 8px", borderRadius: "10px", fontFamily: "'Inter', sans-serif" }}>✦ {t}</span>
          ))}
        </div>
 
        {/* Rating */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
          <Stars n={pkg.rating} />
          <span style={{ fontFamily: "'Inter', sans-serif", color: "#C9A84C", fontWeight: 700, fontSize: "0.82rem" }}>{pkg.rating}</span>
          <span style={{ fontFamily: "'Inter', sans-serif", color: "#7A7264", fontSize: "0.75rem" }}>({pkg.reviews.toLocaleString()} reviews)</span>
        </div>
 
        {/* Price + CTA */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(201,168,76,0.08)", paddingTop: "12px", marginTop: "auto" }}>
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", color: "#7A7264", fontSize: "0.65rem", marginBottom: "2px" }}>From</div>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#C9A84C", fontWeight: 900, fontSize: "1.4rem", lineHeight: 1 }}>{cur.symbol}{price.toLocaleString()}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", color: "#7A7264", fontSize: "0.68rem" }}>per person</div>
          </div>
          <button style={{ background: "linear-gradient(135deg, #E8C96D, #C9A84C, #A07830)", color: "#07050D", border: "none", borderRadius: "10px", padding: "10px 20px", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "1px", textTransform: "uppercase", boxShadow: "0 4px 16px rgba(201,168,76,0.35)" }}>
            View Program →
          </button>
        </div>
      </div>
    </div>
  );
}
 
// ── PACKAGE DETAIL MODAL ──────────────────────────────────────────────────────
function PackageDetail({ pkg, currency, onClose, onBook }) {
  const [activeDay, setActiveDay] = useState(0);
  const [activeTab, setActiveTab] = useState("itinerary");
  const cur = CURRENCIES[currency] || CURRENCIES.USD;
  const price = Math.round(pkg.price * cur.rate);
  const scrollRef = useRef(null);
 
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);
 
  const day = pkg.itinerary[activeDay];
 
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 3000, display: "flex", alignItems: "flex-start", justifyContent: "center", background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)", padding: "20px", overflowY: "auto" }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: "#0A0810", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "22px", width: "min(1100px, 98vw)", margin: "auto", boxShadow: "0 40px 100px rgba(0,0,0,0.9)", overflow: "hidden" }}>
 
        {/* HERO HEADER */}
        <div style={{ position: "relative", height: "280px" }}>
          <img src={pkg.heroImg} alt={pkg.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35) saturate(1.1)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,16,1) 0%, rgba(10,8,16,0.3) 50%, transparent 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 60%, rgba(201,168,76,0.08), transparent 55%)" }} />
 
          <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "16px", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", color: "#EDE8D9", borderRadius: "50%", width: "38px", height: "38px", cursor: "pointer", fontSize: "1.1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
 
          <div style={{ position: "absolute", bottom: "24px", left: "28px", right: "120px" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: "8px", flexWrap: "wrap" }}>
              <span style={{ background: pkg.badgeColor + "33", border: `1px solid ${pkg.badgeColor}66`, color: pkg.badgeColor, fontSize: "0.65rem", fontWeight: 700, padding: "3px 12px", borderRadius: "20px", letterSpacing: "2px", fontFamily: "'Inter', sans-serif", textTransform: "uppercase" }}>{pkg.badge}</span>
              <span style={{ background: "rgba(255,255,255,0.1)", color: "#EDE8D9", fontSize: "0.65rem", padding: "3px 12px", borderRadius: "20px", fontFamily: "'Inter', sans-serif" }}>{pkg.duration}</span>
              <span style={{ background: "rgba(255,255,255,0.1)", color: "#EDE8D9", fontSize: "0.65rem", padding: "3px 12px", borderRadius: "20px", fontFamily: "'Inter', sans-serif" }}>👥 {pkg.groupSize} pax</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: "#EDE8D9", margin: "0 0 4px" }}>{pkg.title}</h1>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "#C9A84C", fontSize: "0.88rem", fontStyle: "italic", margin: "0 0 8px" }}>{pkg.subtitle}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Stars n={pkg.rating} />
              <span style={{ fontFamily: "'Inter', sans-serif", color: "#C9A84C", fontWeight: 700, fontSize: "0.85rem" }}>{pkg.rating}</span>
              <span style={{ fontFamily: "'Inter', sans-serif", color: "#7A7264", fontSize: "0.78rem" }}>({pkg.reviews.toLocaleString()} verified reviews)</span>
            </div>
          </div>
 
          {/* Price box */}
          <div style={{ position: "absolute", bottom: "20px", right: "24px", background: "rgba(10,8,16,0.9)", backdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "14px", padding: "14px 18px", textAlign: "center" }}>
            <div style={{ fontFamily: "'Inter', sans-serif", color: "#7A7264", fontSize: "0.62rem", marginBottom: "2px" }}>FROM</div>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#C9A84C", fontWeight: 900, fontSize: "1.6rem", lineHeight: 1 }}>{cur.symbol}{price.toLocaleString()}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", color: "#7A7264", fontSize: "0.65rem", marginBottom: "10px" }}>per person</div>
            <button onClick={() => onBook(pkg)} style={{ background: "linear-gradient(135deg, #E8C96D, #C9A84C)", color: "#07050D", border: "none", borderRadius: "8px", padding: "8px 18px", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "1px", textTransform: "uppercase", whiteSpace: "nowrap" }}>Book Now</button>
          </div>
        </div>
 
        {/* QUICK STATS */}
        <div style={{ display: "flex", background: "#0F0C18", borderBottom: "1px solid rgba(201,168,76,0.1)", overflowX: "auto" }}>
          {[
            ["📅", "Duration", pkg.duration],
            ["🗺️", "Cities", pkg.cities.join(" → ")],
            ["🎯", "Difficulty", pkg.difficulty],
            ["👥", "Group", pkg.groupSize],
            ["⭐", "Rating", `${pkg.rating}/5`],
          ].map(([icon, label, val]) => (
            <div key={label} style={{ flex: 1, minWidth: "120px", padding: "14px 16px", borderRight: "1px solid rgba(201,168,76,0.08)", textAlign: "center" }}>
              <div style={{ fontSize: "1rem", marginBottom: "3px" }}>{icon}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", color: "#7A7264", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "2px" }}>{label}</div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.82rem", color: "#EDE8D9", lineHeight: 1.2 }}>{val}</div>
            </div>
          ))}
        </div>
 
        {/* TABS */}
        <div style={{ display: "flex", borderBottom: "1px solid rgba(201,168,76,0.1)", padding: "0 24px", background: "#0A0810", overflowX: "auto" }}>
          {[["itinerary", "📋 Full Itinerary"], ["includes", "✅ What's Included"], ["highlights", "⭐ Highlights"]].map(([key, label]) => (
            <button key={key} onClick={() => setActiveTab(key)} style={{ background: "none", border: "none", borderBottom: activeTab === key ? "2px solid #C9A84C" : "2px solid transparent", color: activeTab === key ? "#C9A84C" : "#7A7264", padding: "14px 20px", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", letterSpacing: "1px", textTransform: "uppercase", whiteSpace: "nowrap", transition: "all 0.2s", fontWeight: activeTab === key ? 700 : 400 }}>
              {label}
            </button>
          ))}
        </div>
 
        {/* CONTENT */}
        <div style={{ display: "grid", gridTemplateColumns: activeTab === "itinerary" ? "240px 1fr" : "1fr", minHeight: "400px" }}>
 
          {/* Day selector sidebar (itinerary only) */}
          {activeTab === "itinerary" && (
            <div style={{ borderRight: "1px solid rgba(201,168,76,0.1)", padding: "16px 0", overflowY: "auto", maxHeight: "520px" }}>
              {pkg.itinerary.map((d, i) => (
                <div key={i} onClick={() => setActiveDay(i)}
                  style={{ padding: "12px 18px", cursor: "pointer", background: activeDay === i ? "rgba(201,168,76,0.08)" : "transparent", borderLeft: activeDay === i ? "3px solid #C9A84C" : "3px solid transparent", transition: "all 0.2s" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: activeDay === i ? "linear-gradient(135deg, #E8C96D, #C9A84C)" : "rgba(201,168,76,0.1)", border: activeDay === i ? "none" : "1px solid rgba(201,168,76,0.2)", color: activeDay === i ? "#07050D" : "#7A7264", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, flexShrink: 0 }}>
                      {d.day}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "#7A7264", letterSpacing: "1px", textTransform: "uppercase" }}>{d.location}</div>
                      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.82rem", color: activeDay === i ? "#EDE8D9" : "#A09880", fontWeight: 600, lineHeight: 1.2 }}>{d.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
 
          {/* Main content area */}
          <div style={{ padding: "24px 28px", overflowY: "auto", maxHeight: "520px" }}>
 
            {/* ITINERARY TAB */}
            {activeTab === "itinerary" && day && (
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <div style={{ fontSize: "1.8rem" }}>{day.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", color: "#C9A84C", fontSize: "0.7rem", letterSpacing: "3px", textTransform: "uppercase" }}>Day {day.day} — {day.location}</div>
                    <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#EDE8D9", margin: 0 }}>{day.title}</h2>
                  </div>
                </div>
 
                {/* Meals */}
                <div style={{ display: "flex", gap: "6px", marginBottom: "14px", flexWrap: "wrap" }}>
                  {(day.meals || []).map((m, i) => (
                    <span key={i} style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.18)", color: "#C9A84C", fontSize: "0.65rem", padding: "3px 10px", borderRadius: "12px", fontFamily: "'Inter', sans-serif" }}>🍽 {m}</span>
                  ))}
                  {day.optionalExtra && (
                    <span style={{ background: "rgba(82,183,136,0.1)", border: "1px solid rgba(82,183,136,0.3)", color: "#52B788", fontSize: "0.65rem", padding: "3px 10px", borderRadius: "12px", fontFamily: "'Inter', sans-serif" }}>{day.optionalExtra}</span>
                  )}
                </div>
 
                {/* Activities timeline */}
                <div style={{ position: "relative", paddingLeft: "20px" }}>
                  {/* timeline line */}
                  <div style={{ position: "absolute", left: "6px", top: "12px", bottom: "12px", width: "1px", background: "linear-gradient(to bottom, #C9A84C, rgba(201,168,76,0.1))" }} />
 
                  {(day.activities || []).map((act, i) => (
                    <div key={i} style={{ marginBottom: "22px", position: "relative" }}>
                      {/* dot */}
                      <div style={{ position: "absolute", left: "-20px", top: "6px", width: "10px", height: "10px", borderRadius: "50%", background: "#C9A84C", boxShadow: "0 0 8px rgba(201,168,76,0.5)" }} />
 
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "#C9A84C", letterSpacing: "1px", marginBottom: "3px", fontWeight: 600 }}>{act.time}</div>
                      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#EDE8D9", marginBottom: "5px" }}>{act.name}</div>
                      {act.detail && <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#A09880", lineHeight: 1.75, margin: 0 }}>{act.detail}</p>}
                    </div>
                  ))}
                </div>
 
                {/* Day navigation */}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
                  <button onClick={() => setActiveDay(Math.max(0, activeDay - 1))} disabled={activeDay === 0}
                    style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C", padding: "8px 18px", borderRadius: "8px", cursor: activeDay === 0 ? "not-allowed" : "pointer", opacity: activeDay === 0 ? 0.4 : 1, fontFamily: "'Inter', sans-serif", fontSize: "0.78rem" }}>
                    ← Previous Day
                  </button>
                  <span style={{ fontFamily: "'Inter', sans-serif", color: "#7A7264", fontSize: "0.78rem", alignSelf: "center" }}>Day {activeDay + 1} of {pkg.itinerary.length}</span>
                  <button onClick={() => setActiveDay(Math.min(pkg.itinerary.length - 1, activeDay + 1))} disabled={activeDay === pkg.itinerary.length - 1}
                    style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C", padding: "8px 18px", borderRadius: "8px", cursor: activeDay === pkg.itinerary.length - 1 ? "not-allowed" : "pointer", opacity: activeDay === pkg.itinerary.length - 1 ? 0.4 : 1, fontFamily: "'Inter', sans-serif", fontSize: "0.78rem" }}>
                    Next Day →
                  </button>
                </div>
              </div>
            )}
 
            {/* INCLUDES TAB */}
            {activeTab === "includes" && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", color: "#52B788", fontSize: "0.7rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px", fontWeight: 600 }}>✅ INCLUDED</div>
                  {pkg.includes.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                      <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(82,183,136,0.15)", border: "1px solid rgba(82,183,136,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.6rem", color: "#52B788", marginTop: "1px" }}>✓</div>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.84rem", color: "#A09880", lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", color: "#E63946", fontSize: "0.7rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px", fontWeight: 600 }}>✗ NOT INCLUDED</div>
                  {pkg.excludes.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                      <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(230,57,70,0.1)", border: "1px solid rgba(230,57,70,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.6rem", color: "#E63946", marginTop: "1px" }}>✗</div>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.84rem", color: "#7A7264", lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
 
            {/* HIGHLIGHTS TAB */}
            {activeTab === "highlights" && (
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", color: "#C9A84C", fontSize: "0.7rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "18px", fontWeight: 600 }}>PROGRAM HIGHLIGHTS</div>
                <div style={{ columns: 2, gap: "1rem" }}>
                  {pkg.highlights.map((h, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px", breakInside: "avoid" }}>
                      <span style={{ color: "#C9A84C", fontSize: "0.7rem", marginTop: "3px", flexShrink: 0 }}>𓆣</span>
                      <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.92rem", color: "#EDE8D9", lineHeight: 1.5 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
 
        {/* FOOTER CTA */}
        <div style={{ padding: "18px 28px", background: "rgba(15,12,24,0.9)", borderTop: "1px solid rgba(201,168,76,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#C9A84C" }}>{cur.symbol}{price.toLocaleString()} <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#7A7264" }}>per person</span></div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#7A7264" }}>Free cancellation · Instant confirmation · No hidden fees</div>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" style={{ background: "#25D366", color: "#fff", border: "none", borderRadius: "10px", padding: "12px 20px", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.82rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>💬 WhatsApp</a>
            <button onClick={() => onBook(pkg)} style={{ background: "linear-gradient(135deg, #E8C96D, #C9A84C)", color: "#07050D", border: "none", borderRadius: "10px", padding: "12px 28px", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "1.5px", textTransform: "uppercase" }}>Book This Package</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
// ── BOOKING MODAL ─────────────────────────────────────────────────────────────
function BookingModal({ pkg, currency, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", guests: "2", notes: "" });
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const cur = CURRENCIES[currency] || CURRENCIES.USD;
  const price = Math.round((pkg?.price || 0) * cur.rate);
  if (!pkg) return null;
 
  const waMsg = encodeURIComponent(`🏛️ *Package Booking – Golden Egypt Tours*\n\n*Package:* ${pkg.title}\n*Duration:* ${pkg.duration}\n*Date:* ${form.date}\n*Guests:* ${form.guests}\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Phone:* ${form.phone}\n*Total:* ${cur.symbol}${price * parseInt(form.guests || 1)}\n*Notes:* ${form.notes || "None"}`);
 
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", backdropFilter: "blur(10px)", zIndex: 4000, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: "#0F0C18", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "22px", width: "min(500px,95vw)", maxHeight: "90vh", overflow: "auto", boxShadow: "0 40px 100px rgba(0,0,0,0.9)" }}>
        <div style={{ padding: "22px 26px 18px", borderBottom: "1px solid rgba(201,168,76,0.1)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", background: "linear-gradient(135deg, rgba(201,168,76,0.06), transparent)" }}>
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", color: "#C9A84C", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "5px" }}>✦ Book Your Journey</div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#EDE8D9", fontSize: "1.05rem", fontWeight: 700, margin: "0 0 4px" }}>{pkg.title}</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "#7A7264", fontSize: "0.75rem", margin: 0 }}>{pkg.duration} · {pkg.cities.join(" → ")}</p>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#aaa", borderRadius: "8px", width: "32px", height: "32px", cursor: "pointer", fontSize: "16px" }}>✕</button>
        </div>
 
        <div style={{ padding: "22px 26px" }}>
          {step === 3 ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ fontSize: "60px", marginBottom: "14px" }}>✅</div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#C9A84C", fontSize: "1.3rem", marginBottom: "8px" }}>Booking Request Sent!</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", color: "#7A7264", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "20px" }}>Our team will contact you within 2 hours to confirm all details.<br /><strong style={{ color: "#C9A84C" }}>Ref: GET-{Date.now().toString().slice(-6)}</strong></p>
              <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <a href={`https://wa.me/201068257754?text=${waMsg}`} target="_blank" rel="noreferrer" style={{ background: "#25D366", color: "#fff", fontWeight: 700, borderRadius: "10px", padding: "12px 20px", textDecoration: "none", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "6px", fontFamily: "'Inter', sans-serif" }}>💬 Confirm on WhatsApp</a>
                <button onClick={onClose} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "#ccc", borderRadius: "10px", padding: "12px 20px", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}>Close</button>
              </div>
            </div>
          ) : (
            <>
              <div style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "10px", padding: "12px 16px", marginBottom: "18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", color: "#7A7264", fontSize: "0.82rem" }}>📅 {pkg.duration} · 👥 {form.guests} person(s)</span>
                <span style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#C9A84C", fontWeight: 900, fontSize: "1.2rem" }}>{cur.symbol}{(price * parseInt(form.guests || 1)).toLocaleString()}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[
                  { key: "name", label: "Full Name", placeholder: "Your full name", type: "text", col: "1/-1" },
                  { key: "email", label: "Email", placeholder: "your@email.com", type: "email" },
                  { key: "phone", label: "Phone / WhatsApp", placeholder: "+1 234 567", type: "tel" },
                  { key: "date", label: "Travel Start Date", placeholder: "", type: "date" },
                  { key: "guests", label: "Number of Guests", placeholder: "2", type: "number" },
                ].map(f => (
                  <div key={f.key} style={{ gridColumn: f.col || "auto" }}>
                    <label style={{ fontFamily: "'Inter', sans-serif", color: "#7A7264", fontSize: "0.65rem", display: "block", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>{f.label}</label>
                    <input type={f.type} value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} placeholder={f.placeholder}
                      style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "9px", color: "#EDE8D9", padding: "10px 13px", fontSize: "0.88rem", outline: "none", boxSizing: "border-box", fontFamily: "'Playfair Display', Georgia, serif" }} />
                  </div>
                ))}
                <div style={{ gridColumn: "1/-1" }}>
                  <label style={{ fontFamily: "'Inter', sans-serif", color: "#7A7264", fontSize: "0.65rem", display: "block", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>Special Requests</label>
                  <textarea value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} placeholder="Dietary requirements, room preferences, special occasions..." rows={3}
                    style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "9px", color: "#EDE8D9", padding: "10px 13px", fontSize: "0.88rem", outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "'Playfair Display', Georgia, serif" }} />
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", marginTop: "18px" }}>
                <button onClick={() => { setLoading(true); setTimeout(() => { setLoading(false); setStep(3); }, 1800); }}
                  disabled={loading || !form.name || !form.email || !form.date}
                  style={{ flex: 1, background: "linear-gradient(135deg, #E8C96D, #C9A84C)", color: "#07050D", fontWeight: 800, fontSize: "0.9rem", border: "none", borderRadius: "12px", padding: "14px", cursor: loading ? "wait" : "pointer", opacity: (!form.name || !form.email || !form.date) ? 0.5 : 1, fontFamily: "'Inter', sans-serif" }}>
                  {loading ? "⏳ Sending..." : "✈ Confirm Booking"}
                </button>
                <a href={`https://wa.me/201068257754?text=${waMsg}`} target="_blank" rel="noreferrer"
                  style={{ background: "#25D366", color: "#fff", fontWeight: 700, borderRadius: "12px", padding: "14px 18px", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>💬</a>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", color: "#555", fontSize: "0.68rem", textAlign: "center", marginTop: "10px" }}>Free cancellation up to 30 days before departure · No payment until confirmed</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
 
// ══════════════════════════════════════════════════════════════════════════════
//  MAIN PAGE
// ══════════════════════════════════════════════════════════════════════════════
export default function Packages({ currency = "USD" }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [bookingPkg, setBookingPkg] = useState(null);
  const [sortBy, setSortBy] = useState("popular");
 
  const filtered = PACKAGES
    .filter(p => activeCategory === "all" || p.category === activeCategory)
    .filter(p => !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.cities.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())))
    .sort((a, b) => sortBy === "price" ? a.price - b.price : sortBy === "price_desc" ? b.price - a.price : sortBy === "rating" ? b.rating - a.rating : b.reviews - a.reviews);
 
  const handleBook = (pkg) => { setSelectedPkg(null); setBookingPkg(pkg); };
 
  return (
    <div style={{ fontFamily: "'Playfair Display', 'Noto Sans Arabic', Georgia, serif", background: "#07050D", color: "#EDE8D9", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #07050D; }
        ::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.3); border-radius: 3px; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
 
      {/* ── HERO SECTION ── */}
      <div style={{ position: "relative", overflow: "hidden", padding: "120px clamp(1.5rem,5vw,4rem) 80px" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1800&q=85')", backgroundSize: "cover", backgroundPosition: "center 40%", filter: "brightness(0.18) saturate(1.1)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(7,5,13,0.4) 0%, rgba(7,5,13,0.1) 40%, rgba(7,5,13,0.6) 70%, rgba(7,5,13,1) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.08), transparent 60%)" }} />
 
        {/* Floating glyphs */}
        <div style={{ position: "absolute", top: "20%", left: "5%", fontSize: "5rem", opacity: 0.04, animation: "float 7s ease-in-out infinite", color: "#C9A84C" }}>𓆣</div>
        <div style={{ position: "absolute", top: "30%", right: "5%", fontSize: "4rem", opacity: 0.04, animation: "float 9s ease-in-out infinite 2s", color: "#C9A84C" }}>𓂝</div>
 
        <div style={{ position: "relative", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Inter', sans-serif", color: "#C9A84C", fontSize: "0.65rem", letterSpacing: "6px", textTransform: "uppercase", fontWeight: 600, marginBottom: "14px" }}>✦ Golden Egypt Tours ✦</div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.2rem,6vw,4rem)", fontWeight: 900, margin: "0 0 12px", background: "linear-gradient(135deg, #F5E6B8 0%, #E8C96D 35%, #C9A84C 60%, #F5E6B8 100%)", backgroundSize: "200%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Egypt Travel Packages
          </h1>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "clamp(1rem,2vw,1.2rem)", color: "rgba(237,232,217,0.75)", margin: "0 0 30px", lineHeight: 1.6 }}>
            Complete, handcrafted Egypt journeys — every detail planned, every temple covered, every moment unforgettable
          </p>
 
          {/* Search */}
          <div style={{ display: "flex", gap: "10px", maxWidth: "480px", margin: "0 auto" }}>
            <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search packages or destinations..."
              style={{ flex: 1, background: "rgba(7,5,13,0.8)", backdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.22)", borderRadius: "12px", padding: "13px 18px", color: "#EDE8D9", fontSize: "0.9rem", outline: "none", fontFamily: "'Playfair Display', Georgia, serif" }} />
            <button style={{ background: "linear-gradient(135deg, #E8C96D, #C9A84C)", color: "#07050D", border: "none", borderRadius: "12px", padding: "13px 22px", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.82rem" }}>🔍</button>
          </div>
        </div>
      </div>
 
      {/* ── FILTER BAR ── */}
      <div style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(7,5,13,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(201,168,76,0.1)", padding: "0 clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          {/* Category pills */}
          <div style={{ display: "flex", gap: "4px", overflowX: "auto", scrollbarWidth: "none", padding: "10px 0" }}>
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
              <button key={key} onClick={() => setActiveCategory(key)}
                style={{ background: activeCategory === key ? "rgba(201,168,76,0.15)" : "transparent", border: activeCategory === key ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(201,168,76,0.12)", color: activeCategory === key ? "#C9A84C" : "#7A7264", padding: "7px 14px", borderRadius: "20px", cursor: "pointer", whiteSpace: "nowrap", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: activeCategory === key ? 700 : 400, transition: "all 0.2s" }}>
                {CATEGORY_ICONS[key]} {label}
              </button>
            ))}
          </div>
 
          {/* Sort + count */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontFamily: "'Inter', sans-serif", color: "#7A7264", fontSize: "0.78rem" }}><span style={{ color: "#C9A84C", fontWeight: 700 }}>{filtered.length}</span> packages</span>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)", color: "#EDE8D9", borderRadius: "8px", padding: "7px 12px", fontSize: "0.78rem", outline: "none", fontFamily: "'Inter', sans-serif", cursor: "pointer" }}>
              <option value="popular">Most Popular</option>
              <option value="rating">Top Rated</option>
              <option value="price">Price: Low → High</option>
              <option value="price_desc">Price: High → Low</option>
            </select>
          </div>
        </div>
      </div>
 
      {/* ── PACKAGES GRID ── */}
      <section style={{ padding: "3rem clamp(1.5rem,5vw,4rem)", maxWidth: "1400px", margin: "0 auto" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#7A7264" }}>
            <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🔍</div>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.2rem" }}>No packages found.</div>
            <button onClick={() => { setActiveCategory("all"); setSearchQuery(""); }} style={{ marginTop: "12px", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C", borderRadius: "8px", padding: "8px 20px", cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>Clear filters</button>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "22px" }}>
            {filtered.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} currency={currency} onOpen={setSelectedPkg} />
            ))}
          </div>
        )}
      </section>
 
      {/* ── TRUST STRIP ── */}
      <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)", borderBottom: "1px solid rgba(201,168,76,0.1)", padding: "2rem clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
          {[["🛡️", "100% Money-Back Guarantee", "30 days before departure"], ["✈️", "Free Domestic Flights", "Included in most packages"], ["🎓", "Private Egyptologist Guide", "Certified expert for every day"], ["⭐", "4.9 / 5 Average Rating", "From 50,000+ verified travelers"], ["💬", "24/7 WhatsApp Support", "We're always available"]].map(([icon, title, sub]) => (
            <div key={title} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "1.5rem" }}>{icon}</span>
              <div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.9rem", fontWeight: 600, color: "#EDE8D9" }}>{title}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#7A7264" }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
 
      {/* WhatsApp float */}
      <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer"
        style={{ position: "fixed", bottom: "28px", right: "28px", background: "#25D366", color: "#fff", borderRadius: "50px", padding: "12px 20px", textDecoration: "none", fontWeight: 700, fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "8px", zIndex: 999, boxShadow: "0 8px 32px rgba(37,211,102,0.4)", fontFamily: "'Inter', sans-serif" }}>
        💬 <span>Plan My Package</span>
      </a>
 
      {/* Modals */}
       {selectedPkg && <PackageDetail pkg={selectedPkg} currency={currency} onClose={() => setSelectedPkg(null)} onBook={handleBook} />}
      {bookingPkg && <BookingModal pkg={bookingPkg} currency={currency} onClose={() => setBookingPkg(null)} />}
    </div>
  );
}
 