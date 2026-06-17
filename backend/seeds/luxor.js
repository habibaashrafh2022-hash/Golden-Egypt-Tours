// seeds/cities/luxor.js

const cityData = {
  name: "Luxor",
  nameAr: "",
  slug: "luxor",
  description:
    "Luxor is one of the most remarkable open-air museums in the world, home to ancient temples, royal tombs, and timeless monuments that have captivated travelers for centuries. Once the capital of ancient Egypt during the New Kingdom era, this city on the banks of the Nile holds the legacy of pharaohs and gods in every stone. From the towering columns of Karnak Temple to the mysterious Valley of the Kings, Luxor offers an unparalleled journey through thousands of years of history. Known in antiquity as Thebes, Luxor was the religious and political heart of Egypt at the height of its power — a city of 100,000 people surrounded by the greatest concentration of ancient monuments on earth. Today, the East Bank is home to the living city and its two great temples, while the West Bank remains a vast necropolis of royal tombs, mortuary temples, and workers' villages frozen in time.",
  descriptionAr: "",
  country: "Egypt",
  image: "luxor.jpeg",
};

const toursData = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. Valley of the Kings and Queens, Colossi & Hatshepsut Tour
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Valley of the Kings and Queens, Colossi & Hatshepsut Tour",
    titleAr: "",
  images: ["/images/tours/westsolo.jpeg"],
    slug: "valley-kings-queens-colossi-hatshepsut-luxor",
    description:
      "Step into the heart of ancient Thebes on this unforgettable excursion to the most famous royal necropolis in Egypt. You'll explore the Valley of the Kings, where legendary pharaohs like Tutankhamun, Ramses II, and Seti I were laid to rest in elaborately decorated tombs carved deep into the limestone cliffs. The tour also includes a visit to the Valley of the Queens, the majestic Mortuary Temple of Hatshepsut dramatically carved into the cliff face at Deir el-Bahari, and the iconic Colossi of Memnon — two enormous quartzite statues standing sentinel over the West Bank plain. With an expert licensed guide leading the way, every tomb and temple comes alive with the stories of gods, pharaohs, and the ancient Egyptian vision of the afterlife. This is the essential West Bank experience, covering four of the most important archaeological sites in the world in a single morning.",
    descriptionAr: "",
    category: "Day trip",
    price: {
      original: 87.87,
      discounted: 70.29,
      currency: "USD",
    },
    duration: "6 hours",
    language: ["English"],
    rating: {
      score: 7.6,
      reviews: 138,
    },
    travellers: 1469,
    freeCancellation: true,
    highlights: [
      "Visit the Valley of the Kings and explore 3 royal tombs",
      "See the Valley of the Queens and its ancient burial chambers",
      "Admire the Mortuary Temple of Hatshepsut at Deir el-Bahari",
      "Stop at the iconic Colossi of Memnon — 18-metre statues of Amenhotep III",
      "Licensed expert guide throughout",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Licensed guide", "Hotel pickup and drop-off", "Entrance fees", "Air-conditioned vehicle"],
    excludes: ["Tutankhamun tomb (extra fee ~$16.50)", "Tips", "Personal expenses", "Lunch"],
    itinerary: [
      {
        step: 1,
        time: "07:00",
        title: "Hotel Pickup",
        titleAr: "",
        description:
          "Your licensed guide meets you at your hotel lobby in Luxor. You'll board a comfortable, air-conditioned vehicle for the short drive across the Nile to the West Bank — the ancient city of the dead that stretches beneath the dramatic limestone cliffs. Your guide gives a brief orientation on what to expect and the best strategies for enjoying each site.",
        descriptionAr: "",
        duration: "20 minutes",
        location: "Your hotel, Luxor East Bank",
      },
      {
        step: 2,
        time: "07:30",
        title: "Colossi of Memnon",
        titleAr: "",
        description:
          "Your first stop is the iconic twin statues of Pharaoh Amenhotep III, each standing 18 metres tall and weighing over 700 tons. These colossal quartzite figures once guarded the entrance to what was the largest mortuary temple ever built in Egypt — now almost entirely lost to millennia of Nile floods and stone robbing. Your guide explains the fascinating legend of the 'Singing Memnon': for centuries, ancient visitors reported hearing a mysterious musical sound emanating from the statues at dawn — caused, scientists now believe, by the evaporation of dew from cracks in the stone as the morning sun warmed them.",
        descriptionAr: "",
        duration: "20 minutes",
        location: "West Bank, Luxor",
        tips: "Perfect photo opportunity — the early morning light falls directly on the statues from the east and the colours are stunning.",
        tipsAr: "",
      },
      {
        step: 3,
        time: "08:00",
        title: "Valley of the Kings",
        titleAr: "",
        description:
          "Enter the world's most famous royal burial ground — a remote desert valley where 63 royal tombs have been discovered cut deep into the limestone cliffs. Your entrance ticket includes access to 3 tombs of your choice, selected based on which are open that day. Your guide leads you through elaborately painted chambers featuring vivid scenes from the Book of the Dead, the Book of Gates, the Book of Caverns, and the Amduat — the sacred texts that guided the pharaoh's soul through the 12 hours of the night toward resurrection at dawn. You'll see cartouche-covered walls blazing with colour, dramatic descending corridors that plunge deep into the rock, and the massive stone sarcophagi that once held Egypt's greatest rulers. Tombs you may visit include KV9 (Ramses VI) with its stunning astronomical ceiling, KV11 (Ramses III) with its extraordinary painted side chambers, and KV17 (Seti I) — if open — considered the most beautiful tomb ever found. The tomb of Tutankhamun (KV62) is available for an additional fee.",
        descriptionAr: "",
        duration: "90 minutes",
        location: "Valley of the Kings, West Bank",
        tips: "Photography is not allowed inside the tombs. Wear comfortable shoes — the passages slope steeply downward and can be slippery. A small flashlight is helpful for reading the hieroglyphs in darker corners.",
        tipsAr: "",
      },
      {
        step: 4,
        time: "09:30",
        title: "Valley of the Queens",
        titleAr: "",
        description:
          "A short drive south brings you to the Valley of the Queens, where over 90 tombs of queens, princes, and senior royal family members were carved. The most celebrated tomb here is that of Queen Nefertari — the beloved principal wife of Ramses II — whose paintings are considered among the finest examples of ancient Egyptian art in existence. The colours are extraordinarily vivid, the figures graceful and expressive, and the hieroglyphic texts perfectly preserved. Your guide explains the deep symbolism of each painted scene as Nefertari moves through the afterlife, protected by the gods and ultimately united with Osiris.",
        descriptionAr: "",
        duration: "45 minutes",
        location: "Valley of the Queens, West Bank",
        tips: "The tomb of Nefertari requires a separate ticket (~$30) and visitor numbers are strictly limited each day to protect the paintings. Book in advance if this is a priority.",
        tipsAr: "",
      },
      {
        step: 5,
        time: "10:30",
        title: "Mortuary Temple of Hatshepsut (Deir el-Bahari)",
        titleAr: "",
        description:
          "One of the most architecturally extraordinary monuments in all of Egypt awaits you at the base of dramatic 300-metre limestone cliffs. Built for Egypt's most famous and successful female pharaoh, the temple rises in three elegant colonnaded terraces connected by ramps, its pale limestone gleaming against the tawny cliff face. Your guide walks you through the famous painted reliefs depicting Hatshepsut's divine birth (the god Amun appearing to her mother), her legendary trade expedition to the mysterious land of Punt — complete with images of exotic animals, incense trees, and the Queen of Punt — and her achievements as pharaoh. The temple was deliberately defaced after Hatshepsut's death by her stepson Thutmose III, who had her cartouches chiselled out and her images hacked away in an attempt to erase her from history — making the surviving reliefs all the more remarkable.",
        descriptionAr: "",
        duration: "45 minutes",
        location: "Deir el-Bahari, West Bank",
        tips: "The site is fully exposed to the sun — bring sunscreen and a wide-brimmed hat. The views from the upper terrace looking across the Nile to the East Bank are spectacular.",
        tipsAr: "",
      },
      {
        step: 6,
        time: "12:00",
        title: "Return Transfer to Hotel",
        titleAr: "",
        description:
          "Your guide accompanies you back across the Nile to your hotel on the East Bank, arriving in time for lunch and the rest of your afternoon. Drop-off is at your hotel entrance.",
        descriptionAr: "",
        duration: "30 minutes",
        location: "Luxor East Bank",
      },
    ],
    importantInfo: [
      "Tour starts early to avoid the intense midday heat in the Valley of the Kings",
      "Dress modestly — shoulders and knees must be covered at all sites",
      "Bring at least 1.5 litres of water per person",
      "Cash needed for the optional Tutankhamun tomb entry (~$16.50)",
      "The order of sites may vary depending on crowd levels on the day",
      "Sunscreen and a hat are strongly recommended",
    ],
    importantInfoAr: [],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city — your guide comes to you",
      descriptionAr: "",
    },
    accessibility: "Moderate fitness required. Tomb interiors involve steep uneven steps and low ceilings. The Hatshepsut Temple involves a walk on a flat ramp.",
    accessibilityAr: "",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. Abydos & Dendera Temple Day Trip
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Abydos & Dendera Temple Day Trip",
    titleAr: "",
    images: ["/images/tours/dendera.jpeg"],
    slug: "abydos-dendera-temple-day-trip-luxor",
    description:
      "Leave Luxor behind on this fascinating full-day excursion to two of Egypt's most sacred and beautifully preserved ancient temples — both rarely visited and utterly extraordinary. Abydos was considered the holiest city in all of ancient Egypt, the mythological burial place of Osiris himself, and its temple built by Seti I contains some of the finest and most vibrantly coloured reliefs found anywhere in the country. Dendera is home to the famous Temple of Hathor — one of the best-preserved temples in Egypt — celebrated for its breathtaking astronomical ceiling, perfectly intact roof, and the famous Dendera Zodiac. Together, these two temples offer a completely different perspective on ancient Egyptian religion and art from the more visited sites around Luxor itself.",
    descriptionAr: "",
    category: "Day trip",
    price: {
      original: 121.84,
      discounted: 97.47,
      currency: "USD",
    },
    duration: "10 hours",
    language: ["English"],
    rating: {
      score: 7.7,
      reviews: 99,
    },
    travellers: 720,
    freeCancellation: true,
    highlights: [
      "Visit the sacred Temple of Seti I in Abydos — finest painted reliefs in Egypt",
      "Discover the mysterious Osireion — the underground cenotaph of Osiris",
      "See the famous Abydos King List — 76 pharaohs carved in stone",
      "Explore the magnificent Temple of Hathor at Dendera",
      "Admire the celebrated Dendera astronomical ceiling",
      "Expert guide throughout the full day",
    ],
    includes: ["Licensed guide", "Hotel pickup and drop-off", "Entrance fees", "Air-conditioned transport"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: [
      {
        step: 1,
        time: "07:00",
        title: "Hotel Pickup in Luxor",
        titleAr: "",
        description:
          "Your guide and driver meet you at your hotel. You board a comfortable, air-conditioned vehicle for the approximately 2.5-hour drive north along the Nile Valley to Abydos, passing through the rural sugarcane fields and villages of Upper Egypt. Your guide uses the journey to brief you on the history of Abydos and the cult of Osiris — one of the most important religious traditions in all of ancient Egypt.",
        descriptionAr: "",
        duration: "2.5 hours driving",
        location: "Luxor to Abydos",
      },
      {
        step: 2,
        time: "09:30",
        title: "Temple of Seti I — Abydos",
        titleAr: "",
        description:
          "Arrive at Abydos — one of the oldest and most sacred cities in the ancient world, in continuous religious use for over 3,000 years. The Temple of Seti I, begun by Seti I and completed by his son Ramses II around 1279 BC, is celebrated worldwide for having some of the finest, most delicate, and best-preserved painted reliefs in all of Egypt. The colours — ochre, turquoise, gold, white — are extraordinarily vivid after more than 3,000 years. Your guide walks you through the temple's unique seven parallel sanctuaries, each dedicated to a different deity: Osiris, Isis, Horus, Amun-Ra, Ra-Horakhty, Ptah, and Seti I himself — a configuration found nowhere else in Egypt. You'll discover the famous Abydos King List — a stone panel inscribed with the cartouches of 76 pharaohs in sequence, from Menes (the first pharaoh) to Seti I — and the enigmatic Osireion, an underground structure built in the style of the Old Kingdom to evoke the mythological tomb of Osiris, now partially flooded and hauntingly atmospheric.",
        descriptionAr: "",
        duration: "90 minutes",
        location: "Abydos, Sohag Governorate",
        tips: "The painted colours inside are astonishingly vivid — among the very best preserved in Egypt. Take time in each sanctuary to let your eyes adjust to the light.",
        tipsAr: "",
      },
      {
        step: 3,
        time: "11:00",
        title: "Lunch Break",
        titleAr: "",
        description:
          "Enjoy a lunch break at a local restaurant near Abydos. Lunch is not included in the tour price, but your guide can recommend the best local options. Typical meals include grilled chicken, kofta, fresh bread, and local salads.",
        descriptionAr: "",
        duration: "45 minutes",
        location: "Near Abydos",
      },
      {
        step: 4,
        time: "11:45",
        title: "Drive to Dendera",
        titleAr: "",
        description:
          "You drive approximately 1 hour south back toward Luxor, stopping at the town of Dendera near Qena. Your guide continues the story of ancient Egyptian religion during the drive, connecting the Osiris mythology of Abydos with the goddess Hathor worshipped at Dendera — and explaining how the two temples, though built centuries apart, represent the complementary poles of the Egyptian religious universe.",
        descriptionAr: "",
        duration: "1 hour driving",
        location: "Abydos to Dendera",
      },
      {
        step: 5,
        time: "13:00",
        title: "Temple of Hathor — Dendera",
        titleAr: "",
        description:
          "Arrive at Dendera and enter the Temple of Hathor — one of the best-preserved temples in all of Egypt, built primarily during the Ptolemaic and early Roman periods (1st century BC to 1st century AD). Unlike most ancient Egyptian temples where the roof has long since collapsed, the roof at Dendera is almost entirely intact, creating a spectacular enclosed atmosphere of filtered light and shadow. Your guide explains the mythological role of Hathor — goddess of love, music, beauty, motherhood, and joy — while leading you through the iconic Hypostyle Hall with its 18 towering Hathor-headed columns. The highlight of the visit is the famous astronomical ceiling in the Hypostyle Hall: painted scenes of the sky, constellations, zodiac signs, and the goddess Nut stretched across the heavens in vivid blue, gold, and red pigments. You'll also explore the crypts beneath the temple — dark stone passages where the temple's most sacred objects were stored and covered in extraordinary secret reliefs — and climb to the roof for panoramic views of the surrounding desert and the Nile valley stretching north and south.",
        descriptionAr: "",
        duration: "2 hours",
        location: "Dendera, Qena Governorate",
        tips: "The famous Dendera Zodiac displayed here is a high-quality replica — the original was removed by French archaeologists in 1821 and is now in the Louvre in Paris. Don't miss the crypts beneath the temple — the reliefs there are extraordinary and rarely seen by casual visitors.",
        tipsAr: "",
      },
      {
        step: 6,
        time: "15:30",
        title: "Return Drive to Luxor",
        titleAr: "",
        description:
          "You begin the approximately 1-hour drive south back to Luxor along the Nile Valley, arriving at your hotel in the late afternoon with the day's extraordinary temples fresh in your mind.",
        descriptionAr: "",
        duration: "1 hour driving",
        location: "Dendera to Luxor",
      },
      {
        step: 7,
        time: "16:30",
        title: "Drop-off at Hotel",
        titleAr: "",
        description: "Your driver drops you off at your hotel entrance. End of tour.",
        descriptionAr: "",
        duration: null,
        location: "Your hotel, Luxor",
      },
    ],
    importantInfo: [
      "Long day — wear comfortable walking shoes and light, breathable clothing",
      "Bring plenty of water and snacks for the road",
      "Dress modestly — shoulders and knees covered at both temples",
      "Lunch is not included — bring money (~$5–10) or your own food",
      "Abydos is about 2.5 hours from Luxor — an early start is essential",
    ],
    importantInfoAr: [],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "",
    },
    accessibility: "Easy to moderate. Both temples involve walking on mostly flat ground with some steps.",
    accessibilityAr: "",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. 4-Day Nile Cruise from Luxor to Aswan
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "4-Day Nile Cruise from Luxor to Aswan",
    titleAr: "",
  images: ["/images/tours/cruise.jpeg"],
    slug: "4-day-nile-cruise-luxor-aswan",
    description:
      "Embark on one of the most iconic journeys in the world — a 4-night cruise along the legendary Nile River from Luxor to Aswan aboard a comfortable cruise ship. Sail past golden riverbanks, palm-fringed villages, and ancient ruins while visiting some of Egypt's greatest treasures: the Valley of the Kings, Karnak Temple, the perfectly preserved Temple of Horus at Edfu, the unique double temple of Kom Ombo, and the magnificent Philae Temple on its island in the Aswan reservoir. Enjoy a traditional felucca sailing boat ride among Aswan's granite islands. All meals, guided excursions, and onboard accommodation are included, making this the most seamless and rewarding way to experience the heart of ancient Egypt.",
    descriptionAr: "",
    category: "Tour packages",
    price: {
      original: 562.37,
      discounted: 421.78,
      currency: "USD",
    },
    duration: "5 days",
    language: ["English"],
    rating: {
      score: 7.8,
      reviews: 1740,
    },
    travellers: 20884,
    freeCancellation: true,
    highlights: [
      "4 nights aboard a comfortable air-conditioned Nile cruise ship",
      "Visit Valley of the Kings, Karnak, and Luxor temples",
      "Explore the perfectly preserved Temple of Horus at Edfu",
      "See the unique double temple of Kom Ombo",
      "Visit the magical island temple of Philae in Aswan",
      "Enjoy a traditional felucca sailing ride",
      "All meals included onboard",
    ],
    includes: ["Accommodation onboard", "All meals (full board)", "Guided excursions", "Entrance fees", "English-speaking guide", "Airport/station transfers"],
    excludes: ["International flights", "Travel insurance", "Tips (~$5–10/day)", "Personal expenses", "Optional tomb entries"],
    itinerary: [
      {
        day: 1,
        title: "Luxor — Embarkation & East Bank Temples",
        titleAr: "",
        description:
          "Arrive in Luxor and transfer to your Nile cruise ship. After checking into your cabin and enjoying a welcome lunch onboard, your guide leads you to the two greatest temples on the East Bank — Karnak and Luxor — as the afternoon light turns golden.",
        descriptionAr: "",
        activities: [
          {
            time: "12:00",
            title: "Embarkation & Cabin Check-in",
            titleAr: "",
            description:
              "Board the cruise ship at Luxor dock. Meet your onboard guide and crew. Enjoy a welcome lunch as you settle into your cabin and familiarise yourself with the ship.",
            descriptionAr: "",
          },
          {
            time: "14:00",
            title: "Karnak Temple Complex",
            titleAr: "",
            description:
              "Visit the largest religious building ever constructed in human history — a complex covering 2 square kilometres, built and expanded by 30 successive pharaohs over 2,000 years. Walk through the Avenue of Ram-headed Sphinxes, pass through the colossal First Pylon, and stand in awe inside the Great Hypostyle Hall: a forest of 134 giant papyrus-shaped columns, some reaching 23 metres high. Your guide explains how each pharaoh added to the complex, making Karnak a living timeline of Egyptian civilisation. Don't miss the Sacred Lake, the obelisks of Hatshepsut and Thutmose I, and the inner sanctuary of Amun.",
            descriptionAr: "",
            duration: "2 hours",
            location: "Karnak Temple, East Bank Luxor",
          },
          {
            time: "17:00",
            title: "Luxor Temple at Dusk",
            titleAr: "",
            description:
              "Walk south to Luxor Temple, built primarily by Amenhotep III and Ramses II. As the sun sets and the floodlights begin to glow, the honey-coloured sandstone takes on a magical warmth. See the towering entrance pylon of Ramses II — decorated with scenes from the Battle of Kadesh — the seated colossi, and the lone red granite obelisk (its twin has stood in the Place de la Concorde in Paris since 1836). Look inside for the Roman shrine and the medieval mosque built directly on top of the ancient structure.",
            descriptionAr: "",
            duration: "1 hour",
            location: "Luxor Temple, Corniche el-Nil",
          },
          {
            time: "19:30",
            title: "Dinner Onboard & Overnight at Luxor",
            titleAr: "",
            description:
              "Return to the ship for a three-course dinner. The ship remains moored in Luxor overnight.",
            descriptionAr: "",
          },
        ],
        meals: { breakfast: false, lunch: true, dinner: true },
        accommodation: "Onboard Nile cruise ship, Luxor",
      },
      {
        day: 2,
        title: "Luxor West Bank — Valley of the Kings & Hatshepsut",
        titleAr: "",
        description:
          "An early morning dedicated entirely to the incredible monuments of Luxor's West Bank — the ancient necropolis of pharaonic Egypt, where the greatest rulers in history were laid to rest.",
        descriptionAr: "",
        activities: [
          {
            time: "06:30",
            title: "Breakfast Onboard",
            titleAr: "",
            description: "Full buffet breakfast onboard before the day's excursion.",
            descriptionAr: "",
          },
          {
            time: "07:30",
            title: "Colossi of Memnon",
            titleAr: "",
            description:
              "Start with a brief stop at the twin colossi of Amenhotep III — two 18-metre quartzite statues that once guarded the entrance to the largest mortuary temple ever built in Egypt. Your guide explains their history and the ancient legend of their mysterious 'singing' at sunrise.",
            descriptionAr: "",
            duration: "20 minutes",
          },
          {
            time: "08:00",
            title: "Valley of the Kings",
            titleAr: "",
            description:
              "Explore the legendary burial ground of Egypt's New Kingdom pharaohs. Your ticket includes entry to 3 tombs. Your guide selects the best combination open on the day — possibly including KV9 (Ramses VI) with its stunning astronomical ceiling, KV11 (Ramses III) with extraordinary painted side chambers, or KV62 (Tutankhamun, for an extra fee). Inside each tomb, see perfectly preserved painted scenes from the sacred texts that guided the pharaoh's soul through the underworld.",
            descriptionAr: "",
            duration: "90 minutes",
          },
          {
            time: "09:30",
            title: "Mortuary Temple of Hatshepsut",
            titleAr: "",
            description:
              "Visit the stunning three-tiered temple carved into the cliffs of Deir el-Bahari — one of the most architecturally elegant buildings in the ancient world. Learn how Hatshepsut — Egypt's most successful female ruler, who reigned for over 20 years — cemented her legacy in stone, and how her stepson Thutmose III spent years attempting to erase her from history after her death.",
            descriptionAr: "",
            duration: "45 minutes",
          },
          {
            time: "11:00",
            title: "Return to Ship — Sail Toward Edfu",
            titleAr: "",
            description:
              "Return to the cruise ship for lunch. The ship casts off and begins its sail south toward Edfu through the afternoon. Relax on the sun deck and watch the changing scenery of green fields, date palm groves, and mud-brick villages drifting past.",
            descriptionAr: "",
            duration: "Afternoon sailing",
          },
          {
            time: "19:30",
            title: "Dinner Onboard & Overnight Sailing",
            titleAr: "",
            description: "Enjoy dinner as the ship sails through the evening toward Edfu.",
            descriptionAr: "",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "Onboard Nile cruise ship (sailing)",
      },
      {
        day: 3,
        title: "Edfu Temple & Kom Ombo Temple",
        titleAr: "",
        description:
          "Two remarkable temples in one day — the best-preserved ancient temple in Egypt and one of the most unusual, uniquely dedicated to two gods simultaneously.",
        descriptionAr: "",
        activities: [
          {
            time: "06:00",
            title: "Breakfast Onboard — Ship Arrives Edfu",
            titleAr: "",
            description: "Wake up to find the ship moored at Edfu. Breakfast served onboard.",
            descriptionAr: "",
          },
          {
            time: "07:00",
            title: "Horse Carriage Ride to Edfu Temple",
            titleAr: "",
            description:
              "Board a traditional horse-drawn carriage for the short, atmospheric ride from the dock through Edfu's local market streets to the entrance of the temple — a genuinely memorable experience that has been part of visiting Edfu for generations.",
            descriptionAr: "",
            duration: "15 minutes",
          },
          {
            time: "07:30",
            title: "Temple of Horus at Edfu",
            titleAr: "",
            description:
              "Enter the best-preserved ancient temple in Egypt, dedicated to the falcon god Horus and built during the Ptolemaic period (237–57 BC). The temple is extraordinarily complete — its massive 36-metre entrance pylons, great courtyard, two hypostyle halls, inner sanctuary, and surrounding enclosure wall all survive largely intact. Your guide narrates the famous 'sacred drama' reliefs on the outer walls — 17 panels depicting the annual ritual battle between Horus and Set in sequential images, the world's first narrative comic strip. Inside the inner sanctuary, the original stone naos (barque shrine) still stands — the box that housed the sacred statue of Horus during religious ceremonies. Find the famous black granite Horus falcon statue in the inner courtyard.",
            descriptionAr: "",
            duration: "90 minutes",
            location: "Edfu Temple, Aswan Governorate",
            tips: "Look for the sacred drama reliefs on the outer enclosure wall — most visitors miss these but they are the most important narrative reliefs in the entire temple.",
            tipsAr: "",
          },
          {
            time: "09:30",
            title: "Return to Ship — Sail to Kom Ombo",
            titleAr: "",
            description:
              "Return by horse carriage to the ship. Enjoy a relaxing morning cruise south along the Nile toward Kom Ombo. Lunch is served onboard.",
            descriptionAr: "",
            duration: "2 hours sailing",
          },
          {
            time: "14:00",
            title: "Double Temple of Kom Ombo",
            titleAr: "",
            description:
              "Arrive at Kom Ombo — the only ancient Egyptian temple dedicated simultaneously to two equal gods: the crocodile god Sobek (god of fertility, water, and the Nile) and Haroeris, the elder form of Horus (falcon god of the sky). The temple's perfectly symmetrical design means everything is doubled — two entrances, two hypostyle halls, two inner sanctuaries, two of everything — reflecting the dual divine presence. Your guide explains how worshippers of each deity used their respective half of the temple. Visit the Crocodile Museum within the complex to see dozens of actual mummified crocodiles preserved for thousands of years. Look for the extraordinary ancient medical instruments carved on one inner wall — forceps, scalpels, bone saws, birthing chairs — evidence of a medical school once attached to the temple. The riverside setting with its Nile views is especially beautiful in the afternoon light.",
            descriptionAr: "",
            duration: "90 minutes",
            location: "Kom Ombo Temple, Aswan Governorate",
            tips: "Don't miss the ancient Nilometer on the temple grounds — a circular stone shaft with measurement marks, used for 2,000 years to measure the Nile's annual flood and calculate farmers' taxes.",
            tipsAr: "",
          },
          {
            time: "16:00",
            title: "Sail to Aswan — Sunset on the Nile",
            titleAr: "",
            description:
              "Re-board the ship for the final leg of the cruise to Aswan. Relax on the sun deck as the ship passes through stunning scenery — desert mountains rising on both sides, golden light on the water, and feluccas appearing on the river as evening approaches.",
            descriptionAr: "",
            duration: "2 hours sailing",
          },
          {
            time: "19:30",
            title: "Dinner Onboard — Arrive Aswan",
            titleAr: "",
            description: "Enjoy dinner as the ship arrives and moors at Aswan for the night.",
            descriptionAr: "",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "Onboard Nile cruise ship, Aswan",
      },
      {
        day: 4,
        title: "Aswan — Philae Temple & Felucca Ride",
        titleAr: "",
        description:
          "Explore the beautiful city of Aswan — Egypt's southernmost major city, where the desert meets the Nile at its most dramatic — visiting the magical island temple of Philae and experiencing a traditional felucca sailing boat ride among the famous granite islands.",
        descriptionAr: "",
        activities: [
          {
            time: "07:00",
            title: "Breakfast Onboard",
            titleAr: "",
            description: "Full breakfast onboard. Prepare for a full day in Aswan.",
            descriptionAr: "",
          },
          {
            time: "08:00",
            title: "Philae Temple (Temple of Isis)",
            titleAr: "",
            description:
              "Take a short motorboat ride to Agilkia Island, where the magnificent Temple of Isis was relocated stone by stone in the 1970s to save it from the rising waters of Lake Nasser in one of UNESCO's greatest engineering rescues. Dedicated to the goddess Isis and her mythological role in resurrecting her husband Osiris, this was one of the last temples built in the classical Egyptian style and one of the last to remain in active use — Egyptian priests continued worshipping here until the 6th century AD, making it the final outpost of the old religion. Your guide walks you through the grand entry colonnade, the Birth House, and the inner sanctuary, explaining the remarkable story of the UNESCO relocation operation.",
            descriptionAr: "",
            duration: "90 minutes",
            location: "Agilkia Island, Aswan",
            tips: "The motorboat ride to the island is itself enjoyable — beautiful views of the Nile and surrounding granite islands.",
            tipsAr: "",
          },
          {
            time: "10:00",
            title: "Traditional Felucca Ride",
            titleAr: "",
            description:
              "Board a traditional Egyptian felucca — a wooden sailing boat whose design has barely changed in 5,000 years — for a peaceful sail among the granite islands of the Nile at Aswan. Glide past Elephantine Island, the Botanical Gardens Island, and the Aga Khan Mausoleum on its hilltop. Your captain navigates using nothing but the wind and sail. Trail your hand in the Nile water as the city skyline drifts past. A completely unhurried, meditative experience.",
            descriptionAr: "",
            duration: "1 hour",
            location: "Nile River, Aswan",
            tips: "One of the most genuinely relaxing experiences in all of Egypt. Put your phone away for at least 10 minutes and simply watch the river.",
            tipsAr: "",
          },
          {
            time: "11:30",
            title: "Return to Ship — Lunch & Leisure",
            titleAr: "",
            description:
              "Return to the ship for lunch. The afternoon is free — relax on the sun deck, swim in the onboard pool if available, or explore the Aswan Corniche independently.",
            descriptionAr: "",
          },
          {
            time: "19:30",
            title: "Farewell Dinner & Disembarkation Preparation",
            titleAr: "",
            description:
              "Enjoy a special farewell dinner onboard. Your guide provides instructions for disembarkation the following morning.",
            descriptionAr: "",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "Onboard Nile cruise ship, Aswan",
      },
      {
        day: 5,
        title: "Aswan — Disembarkation",
        titleAr: "",
        description:
          "Enjoy a final breakfast onboard before disembarking in Aswan. Transfer to Aswan Airport, the train station, or your next accommodation.",
        descriptionAr: "",
        activities: [
          {
            time: "07:00",
            title: "Final Breakfast Onboard",
            titleAr: "",
            description: "Enjoy your last breakfast on the cruise ship. Collect your luggage and prepare to disembark.",
            descriptionAr: "",
          },
          {
            time: "08:00",
            title: "Disembarkation & Transfer",
            titleAr: "",
            description:
              "Disembark the cruise ship at Aswan dock. Your driver provides a transfer to Aswan Airport, the train station, or your next hotel. End of cruise.",
            descriptionAr: "",
          },
        ],
        meals: { breakfast: true, lunch: false, dinner: false },
        accommodation: null,
      },
    ],
    importantInfo: [
      "Check-in is at 12:00 PM on Day 1. Early arrival may allow boarding but the cabin may not be ready",
      "Bring lightweight, modest clothing — you'll be visiting temples daily",
      "Tipping for crew and guides is customary (~$5–10/day per person)",
      "Pack sunscreen, a hat, and comfortable walking shoes",
      "The cruise sails overnight on Day 2 — you may feel gentle movement",
    ],
    importantInfoAr: [],
    meetingPoint: {
      description: "Luxor cruise ship dock — your Aurevian Tours guide will meet you on arrival at Luxor",
      descriptionAr: "",
    },
    accessibility: "Suitable for most fitness levels. All excursions involve moderate walking on uneven ancient surfaces.",
    accessibilityAr: "",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. Valley of the Nobles, Medinet Habu & Deir el-Medina Tour
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Valley of the Nobles, Medinet Habu & Deir el-Medina Tour",
    titleAr: "",
   images: ["/images/tours/habu.jpeg"],
    slug: "valley-nobles-medinet-habu-deir-medina-luxor",
    description:
      "Discover the lesser-known but equally fascinating side of Luxor's West Bank on this tour of three remarkable ancient sites that most tourists never see. The Valley of the Nobles contains some of the most vividly painted and humanly relatable tombs in all of Egypt — showing daily life, feasting, hunting, music, and farming rather than religious texts. Medinet Habu is the massive mortuary temple of Ramses III, arguably the best-preserved temple on the entire West Bank, covered in extraordinary military reliefs. And Deir el-Medina gives a rare and deeply moving glimpse into the lives of the ordinary craftsmen and artists who spent their careers building and decorating the royal tombs in the Valley of the Kings — the workers who made all the rest of it possible.",
    descriptionAr: "",
    category: "Guided tours and free tours",
    price: {
      original: 82.01,
      discounted: 65.61,
      currency: "USD",
    },
    duration: "4 hours",
    language: ["English"],
    rating: {
      score: 7.9,
      reviews: 34,
    },
    travellers: 289,
    freeCancellation: true,
    highlights: [
      "Explore the vividly painted daily-life tombs of the Valley of the Nobles",
      "Visit the grand Mortuary Temple of Ramses III at Medinet Habu",
      "Discover the ancient craftsmen's village of Deir el-Medina",
      "Learn about the world's earliest recorded labour strike",
      "Far fewer crowds than the Valley of the Kings",
      "Expert guide throughout",
    ],
    includes: ["Licensed guide", "Hotel pickup and drop-off", "Entrance fees"],
    excludes: ["Tips", "Personal expenses"],
    itinerary: [
      {
        step: 1,
        time: "08:00",
        title: "Hotel Pickup & Transfer to West Bank",
        titleAr: "",
        description:
          "Your guide collects you from your hotel and crosses the Nile to the West Bank. On the way, your guide explains what makes this tour different from the standard Valley of the Kings route — the nobles' tombs and workers' village offer a window into everyday ancient Egyptian life that the royal tombs, with their focus on religious texts and the afterlife, cannot provide.",
        descriptionAr: "",
        duration: "30 minutes",
        location: "Luxor East Bank to West Bank",
      },
      {
        step: 2,
        time: "08:30",
        title: "Valley of the Nobles",
        titleAr: "",
        description:
          "Enter a world most tourists never see: the tombs of Egypt's high officials, scribes, viziers, and nobles who served the pharaohs during the New Kingdom. Unlike the royal tombs — which focus almost exclusively on religious texts and the journey through the underworld — the nobles' tombs are filled with vivid, colourful, joyous paintings of everyday ancient Egyptian life: hunting in the marshes, fishing in the Nile, elaborate banquets with musicians and dancers, agricultural scenes of harvest and ploughing, craftsmen at work in their workshops, and lively market scenes. You'll visit 2–3 tombs based on which are open. Notable examples include: the Tomb of Nakht (a royal scribe under Thutmose IV) — famous for its exquisite hunting and harvest scenes and a renowned painting of three female musicians; the Tomb of Ramose (governor under Amenhotep III) — with spectacular carvings showing the transition between classical Egyptian art and Amarna-period style in a single chamber; and the Tomb of Menna (a field inspector under Thutmose IV) — celebrated for its detailed agricultural and fowling scenes of exceptional quality and colour.",
        descriptionAr: "",
        duration: "60 minutes",
        location: "Sheikh Abd el-Qurna, West Bank",
        tips: "These tombs are far less crowded than the Valley of the Kings — you'll often have entire tombs almost entirely to yourself. The paintings here are in some ways more immediate and moving than the royal tombs because they show real people living real lives.",
        tipsAr: "",
      },
      {
        step: 3,
        time: "09:45",
        title: "Deir el-Medina — The Workers' Village",
        titleAr: "",
        description:
          "Visit one of the most extraordinary archaeological sites in Egypt: the remarkably preserved village of the artisans who spent their entire working lives carving and painting the royal tombs in the Valley of the Kings. Occupied continuously for roughly 500 years during the New Kingdom (approximately 1550–1070 BC), the village has been excavated to reveal house foundations, communal areas, a well, a temple, and the workers' own tombs — giving us an unparalleled documentary record of ordinary ancient Egyptian life. Your guide explains the remarkable papyrus documents discovered here, including work rosters, legal disputes, love poems, and most fascinatingly — the world's earliest recorded labour strike, when workers stopped work in the 29th year of Ramses III's reign because their grain rations had not been delivered for two months, marching to the nearby mortuary temples to demand payment. The workers' own tombs on the hillside above the village are beautifully decorated and rival royal burials in their artistry.",
        descriptionAr: "",
        duration: "45 minutes",
        location: "Deir el-Medina, West Bank",
        tips: "Don't miss the small workers' tombs on the hillside above the village — especially the Tomb of Sennefer and the Tomb of Inherkau, which have remarkably colourful and expressive paintings that feel very personal and intimate.",
        tipsAr: "",
      },
      {
        step: 4,
        time: "10:45",
        title: "Medinet Habu — Mortuary Temple of Ramses III",
        titleAr: "",
        description:
          "Your final stop is Medinet Habu — one of the largest, best-preserved, and most visually dramatic mortuary temple complexes on the West Bank. Built by Ramses III in the 12th century BC, the temple is celebrated for the extraordinary scale and vivid detail of its relief carvings, many of which still retain traces of their original paint. The entrance is through a unique Syrian-style migdol gateway — a fortified tower resembling a Syrian fortress, one of the only structures of its kind in Egypt — decorated with scenes of Ramses III's private life in the harem rooms above. Inside, your guide leads you through the First and Second Pylons, the grand Peristyle Court, and the inner halls — all covered in dramatic scenes of Ramses III's military campaigns against the Sea Peoples (mysterious Bronze Age raiders from the Mediterranean), the Libyans, and the Nubians. The calendar of religious festivals inscribed on the inner walls is the most complete ancient Egyptian festival calendar ever discovered.",
        descriptionAr: "",
        duration: "45 minutes",
        location: "Medinet Habu, West Bank",
        tips: "Look up at the ceilings of the inner halls — some of the original blue and yellow astronomical paintings survive here, among the best-preserved painted ceilings on the West Bank.",
        tipsAr: "",
      },
      {
        step: 5,
        time: "11:45",
        title: "Return Transfer to Hotel",
        titleAr: "",
        description:
          "Your guide escorts you back across the Nile and drops you off at your hotel entrance in Luxor.",
        descriptionAr: "",
        duration: "30 minutes",
        location: "Luxor East Bank",
      },
    ],
    importantInfo: [
      "This tour is the perfect complement to the Valley of the Kings — they cover completely different sites and perspectives",
      "Dress modestly — cover shoulders and knees at all tombs and temples",
      "Bring water and a hat — the West Bank has limited shade",
      "Photography is permitted at most sites (check individual tomb rules on the day)",
      "Ideal for second-time visitors or anyone wanting to go deeper than the standard tourist circuit",
    ],
    importantInfoAr: [],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "",
    },
    accessibility: "Easy. Mostly flat walking with some steps at Medinet Habu. The nobles' tombs involve a gentle hillside walk.",
    accessibilityAr: "",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 5. Complete Guided Tour of Luxor
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Complete Guided Tour of Luxor",
    titleAr: "",
    images: ["/images/tours/completo.jpeg"],
    slug: "complete-guided-tour-luxor",
    description:
      "Experience the very best of Luxor in a single carefully crafted day — the most comprehensive one-day tour available anywhere in the city. This tour takes you to the five most iconic landmarks on both the East and West Banks of the Nile: the Colossi of Memnon, the Valley of the Kings, the Mortuary Temple of Hatshepsut, the vast Karnak Temple complex, and Luxor Temple. With a knowledgeable licensed guide leading the way throughout, every monument comes alive through the stories of the ancient world — from the ritual burial of pharaohs in the Valley of the Kings to the 2,000-year construction history of Karnak and the breathtaking night illumination of Luxor Temple. This is Aurevian Tours' flagship Luxor experience.",
    descriptionAr: "",
    category: "Guided tours and free tours",
    price: {
      original: 121.84,
      discounted: 97.47,
      currency: "USD",
    },
    duration: "7 hours 30 minutes",
    language: ["English"],
    rating: {
      score: 8.6,
      reviews: 211,
    },
    travellers: 2279,
    freeCancellation: true,
    highlights: [
      "Visit Luxor Temple on the East Bank — beautifully lit in the early afternoon",
      "Explore the vast Karnak Temple complex — largest religious building in history",
      "Enter the Valley of the Kings and visit 3 royal tombs",
      "See the Mortuary Temple of Hatshepsut at Deir el-Bahari",
      "Admire the iconic Colossi of Memnon",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Licensed guide", "Hotel pickup and drop-off", "Entrance fees", "Air-conditioned transport"],
    excludes: ["Tutankhamun tomb (extra ~$16.50)", "Meals", "Tips", "Personal expenses"],
    itinerary: [
      {
        step: 1,
        time: "07:00",
        title: "Hotel Pickup",
        titleAr: "",
        description:
          "Your expert licensed guide meets you at your hotel. The day is carefully structured to visit the West Bank sites first in the cooler morning hours — when the Valley of the Kings is at its best — and the great East Bank temples in the late morning and early afternoon.",
        descriptionAr: "",
        duration: "15 minutes",
        location: "Your hotel, Luxor",
      },
      {
        step: 2,
        time: "07:15",
        title: "Colossi of Memnon",
        titleAr: "",
        description:
          "Start on the West Bank with a brief stop at the two giant seated statues of Amenhotep III, each 18 metres tall and carved from a single block of quartzite transported 700 kilometres from near Cairo. Your guide explains their history and the ancient legend of the 'Singing Memnon' — the eerie musical sound ancient visitors described hearing at sunrise, which drew tourists from across the Roman Empire.",
        descriptionAr: "",
        duration: "20 minutes",
        location: "West Bank, Luxor",
      },
      {
        step: 3,
        time: "07:45",
        title: "Valley of the Kings",
        titleAr: "",
        description:
          "Enter the world-famous royal necropolis and explore 3 tombs of New Kingdom pharaohs. Your guide explains the sacred purpose of each tomb, the meaning of the vivid wall paintings from the Book of the Dead and other sacred texts, and the remarkable story of how British archaeologist Howard Carter discovered the intact tomb of Tutankhamun in 1922 — the last great archaeological discovery in the Valley. The optional Tutankhamun tomb (extra ~$16.50) can be added on the day.",
        descriptionAr: "",
        duration: "90 minutes",
        location: "Valley of the Kings, West Bank",
        tips: "No photography inside the tombs. Wear flat shoes with good grip — the tomb passages slope steeply downward and can be slippery.",
        tipsAr: "",
      },
      {
        step: 4,
        time: "09:30",
        title: "Mortuary Temple of Hatshepsut",
        titleAr: "",
        description:
          "Visit the stunning three-tiered terraced temple of Egypt's most famous female pharaoh, set dramatically against the towering 300-metre limestone cliffs of Deir el-Bahari. Your guide tells the extraordinary story of Hatshepsut — how she assumed the full title of pharaoh, dressed in male regalia including the false beard, led successful military campaigns and trade expeditions, built some of the most beautiful monuments in Egypt, and was then systematically erased from history by her stepson Thutmose III after her death — only for her identity to be rediscovered by modern Egyptologists in the 19th century.",
        descriptionAr: "",
        duration: "45 minutes",
        location: "Deir el-Bahari, West Bank",
      },
      {
        step: 5,
        time: "10:30",
        title: "Karnak Temple Complex",
        titleAr: "",
        description:
          "Cross back to the East Bank and enter Karnak — the largest temple complex ever constructed, dedicated primarily to the god Amun-Ra. The site covers 2 square kilometres and was expanded by 30 successive pharaohs over 2,000 years, making it a physical timeline of Egyptian civilisation. Your guide leads you through the Avenue of Ram-headed Sphinxes at the entrance, the enormous First Pylon, and the overwhelming Great Hypostyle Hall — 134 massive columns in 16 rows, the two tallest reaching 23 metres. You'll visit the Sanctuary of Amun, the Sacred Lake where priests performed ritual purification, the scarab statue of Amenhotep III (walk around it seven times for good luck), and the surviving obelisks of Hatshepsut and Thutmose I — one still standing at over 29 metres, still bearing traces of its original gilded electrum cap.",
        descriptionAr: "",
        duration: "2 hours",
        location: "Karnak Temple, East Bank Luxor",
        tips: "Karnak is vast — let your guide set the pace. It's very easy to get lost or miss the key highlights without expert guidance.",
        tipsAr: "",
      },
      {
        step: 6,
        time: "13:00",
        title: "Luxor Temple",
        titleAr: "",
        description:
          "Walk or drive a short distance south along the Nile Corniche to Luxor Temple — built primarily by Amenhotep III and Ramses II with a harmonious, elegant design that contrasts with the sprawling complexity of Karnak. Your guide shows you the massive entrance pylon of Ramses II decorated with scenes from the Battle of Kadesh, the two seated colossi and the remaining red granite obelisk, and the elegant colonnade court of Amenhotep III. Look for the Roman shrine inside the temple and the remarkable Abu Haggag mosque — built directly on top of the ancient structure in medieval times and still in active use today — a testament to the extraordinary layers of history embedded in this city.",
        descriptionAr: "",
        duration: "1 hour",
        location: "Luxor Temple, Corniche el-Nil",
        tips: "If possible, walk this section from Karnak along the Nile Corniche — Luxor Temple is only a 15-minute walk and the riverfront is beautiful.",
        tipsAr: "",
      },
      {
        step: 7,
        time: "14:30",
        title: "Drop-off at Hotel",
        titleAr: "",
        description: "Your guide and driver return you to your hotel. End of tour.",
        descriptionAr: "",
        duration: null,
        location: "Your hotel, Luxor",
      },
    ],
    importantInfo: [
      "This is the most comprehensive single-day Luxor tour available",
      "Start time is early to make the most of the cooler morning in the Valley of the Kings",
      "Wear comfortable, well-soled walking shoes — you'll cover 4–5 kilometres",
      "Dress modestly throughout — cover shoulders and knees at all sites",
      "Bring at least 2 litres of water per person and sunscreen",
      "Optional Tutankhamun tomb adds ~$16.50 — bring cash",
    ],
    importantInfoAr: [],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "",
    },
    accessibility: "Moderate fitness required. Long day with significant walking across multiple sites.",
    accessibilityAr: "",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 6. Transfers in Luxor
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Transfers in Luxor",
    titleAr: "",
   images: ["/images/tours/calesa.jpeg"],
    slug: "transfers-luxor",
    description:
      "Travel comfortably and safely around Luxor with our private door-to-door transfer service. Whether you need a ride from the airport, your hotel, the cruise ship dock, or any other address, a professional Aurevian Tours chauffeur will be waiting for you and will take you to your destination quickly and smoothly. Available 24 hours a day, 7 days a week — for arrivals, departures, inter-city transfers, or simply getting between sites without the hassle of negotiating local taxis.",
    descriptionAr: "",
    category: "Transfers",
    price: {
      original: 19.33,
      discounted: null,
      currency: "USD",
    },
    duration: "Varies",
    language: ["English"],
    rating: {
      score: 7.9,
      reviews: 98,
    },
    travellers: 1393,
    freeCancellation: true,
    highlights: [
      "Private door-to-door service",
      "Professional, punctual, and licensed chauffeur",
      "Modern air-conditioned vehicles",
      "Available 24/7 including overnight arrivals",
      "Airport, hotel, station, and cruise dock pickups",
      "Flight tracking for airport transfers",
    ],
    includes: ["Private air-conditioned vehicle", "Professional licensed driver", "Meet and greet with name sign"],
    excludes: ["Tips", "Entrance fees to any attractions"],
    itinerary: [
      {
        step: 1,
        time: "On request",
        title: "Booking Confirmation & Driver Assignment",
        titleAr: "",
        description:
          "After booking, you receive a confirmation with your driver's name, photo, and contact number. On the day of transfer, your driver contacts you 30 minutes before pickup to confirm the arrangement and provide real-time location updates.",
        descriptionAr: "",
      },
      {
        step: 2,
        time: "As scheduled",
        title: "Pickup at Your Location",
        titleAr: "",
        description:
          "Your chauffeur arrives at the agreed location — airport arrivals hall, hotel lobby, cruise ship dock, train station, or any private address in Luxor. For airport pickups, your driver monitors the flight in real time and adjusts automatically for delays — no need to contact them if your flight is late. They will be waiting in the arrivals hall holding a sign with your name.",
        descriptionAr: "",
        tips: "For airport pickups: your driver monitors the flight and adjusts for delays automatically. No need to contact them if your flight is running late.",
        tipsAr: "",
      },
      {
        step: 3,
        time: "In transit",
        title: "Comfortable Transfer in Air-Conditioned Vehicle",
        titleAr: "",
        description:
          "Travel in a clean, modern, air-conditioned vehicle with bottled water provided. Typical journey times in Luxor: Airport to city centre (~20–30 minutes), East Bank to West Bank (~25 minutes including Nile crossing), Luxor train station to city centre (~10 minutes). For longer transfers — Luxor to Hurghada (~4 hours), Luxor to Cairo by road (~9 hours) — larger vehicles and adjusted pricing apply. Ask about multi-stop transfers.",
        descriptionAr: "",
      },
      {
        step: 4,
        time: "On arrival",
        title: "Drop-off at Destination",
        titleAr: "",
        description:
          "Your driver takes you directly to the entrance of your hotel, cruise ship, airport terminal, or specified address. He assists with luggage if needed and can wait while you check in.",
        descriptionAr: "",
      },
    ],
    importantInfo: [
      "Share your full hotel name and address when booking",
      "For airport pickups, include your flight number so the driver tracks it",
      "Transfers available 24 hours a day, 7 days a week",
      "Child seats available on request at no extra charge",
      "Luggage assistance included",
      "WhatsApp communication available with your driver",
    ],
    importantInfoAr: [],
    meetingPoint: {
      description: "Driver meets you at your specified pickup location with a name sign",
      descriptionAr: "",
    },
    accessibility: "Fully accessible. Wheelchair-accessible vehicles available on request — please specify when booking.",
    accessibilityAr: "",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 7. Luxor Hot Air Balloon Ride
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Luxor Hot Air Balloon Ride",
    titleAr: "",
    images: ["/images/tours/balloon.jpeg"],
    slug: "luxor-hot-air-balloon-ride",
    description:
      "Soar above the ancient wonders of Luxor at sunrise on a breathtaking hot air balloon ride — one of the most magical and sought-after experiences in all of Egypt. As you gently float 300–600 metres above the West Bank at dawn, you'll be treated to sweeping 360-degree aerial views of the Valley of the Kings, the Mortuary Temple of Hatshepsut, Medinet Habu, the Colossi of Memnon, and the great Karnak Temple complex on the East Bank — with the silver ribbon of the Nile threading through the green valley between the golden desert on both sides. The first light of dawn transforming the ancient landscape below is a sight that stays with you forever. Flown by CAA-certified pilots with an outstanding safety record.",
    descriptionAr: "",
    category: "Aerial tours",
    price: {
      original: 132.20,
      discounted: 105.76,
      currency: "USD",
    },
    duration: "2 hours",
    language: ["English"],
    rating: {
      score: 7.7,
      reviews: 142,
    },
    travellers: 2251,
    freeCancellation: true,
    highlights: [
      "Sunrise hot air balloon flight over Luxor — one of Egypt's most iconic experiences",
      "Aerial views of the Valley of the Kings and Hatshepsut Temple",
      "See Karnak Temple and the Nile from above",
      "CAA-certified and experienced balloon pilot",
      "Pre-dawn hotel pickup included",
      "Commemorative flight certificate presented after landing",
    ],
    includes: ["Balloon ride (45–60 minutes)", "Pre-dawn hotel pickup and drop-off", "Certificate of flight", "Bottled water"],
    excludes: ["Tips", "Personal expenses"],
    itinerary: [
      {
        step: 1,
        time: "04:30",
        title: "Pre-Dawn Hotel Pickup",
        titleAr: "",
        description:
          "Your driver picks you up from your hotel in the dark, well before first light — this very early departure is essential to reach the West Bank launch site in time to inflate the balloon before the dawn winds arrive. The drive takes approximately 15–20 minutes. A hot drink may be provided at the launch site on arrival.",
        descriptionAr: "",
        duration: "20 minutes driving",
        location: "Your hotel, Luxor",
      },
      {
        step: 2,
        time: "05:00",
        title: "Arrival at Launch Site — Balloon Inflation",
        titleAr: "",
        description:
          "Arrive at the West Bank launch field while it's still dark. Watch the spectacular process of inflating the giant hot air balloon using powerful propane gas burners — in the darkness, the illuminated balloon glows like a lantern against the pre-dawn sky, warming it from within. Your pilot gives a full safety briefing explaining what to expect during the flight, how to stand safely in the basket, and the landing procedure. Baskets typically hold 16–24 passengers divided into separate compartments.",
        descriptionAr: "",
        duration: "30 minutes",
        location: "West Bank Launch Field, Luxor",
        tips: "Dress in layers — it can be surprisingly cold on the ground before sunrise at 500 metres above sea level, but comfortable in the air once airborne. Wear flat, closed-toe shoes.",
        tipsAr: "",
      },
      {
        step: 3,
        time: "05:30",
        title: "Liftoff — Sunrise Flight Over Luxor",
        titleAr: "",
        description:
          "As the very first light of dawn appears on the eastern horizon, your balloon lifts gently off the ground with a roar of the burners. Within minutes you are floating silently 300–600 metres above the ancient landscape. Your pilot navigates by rising and descending to catch different wind currents, drifting across the West Bank with unobstructed 360-degree views. Landmarks visible from above typically include: the Valley of the Kings — the rocky valleys where the royal tombs are hidden in the cliffs below, invisible from the air but made identifiable by the valley's shape; the Mortuary Temple of Hatshepsut — dramatically revealed from above against its cliff backdrop; Medinet Habu — the vast rectangle of Ramses III's mortuary temple; the Colossi of Memnon — the twin statues visible as small figures on the plain far below; the vivid green Nile Valley — a ribbon of green against the yellow desert on both sides; and Karnak Temple — the enormous complex on the East Bank, its pylons visible in the distance as the light strengthens.",
        descriptionAr: "",
        duration: "45–60 minutes",
        location: "Above West Bank and Nile, Luxor",
        tips: "Bring your camera fully charged — the light changes dramatically every few minutes at sunrise and every shot is different. A wide-angle lens or phone camera captures the landscape beautifully. No need for zoom.",
        tipsAr: "",
      },
      {
        step: 4,
        time: "06:30",
        title: "Descent & Landing",
        titleAr: "",
        description:
          "Your pilot guides the balloon to a landing spot on the West Bank — typically in one of the agricultural fields between the monuments. Landing is smooth and controlled, with a ground crew that has been following the balloon throughout the flight in vehicles and is waiting at the landing point to help passengers disembark safely.",
        descriptionAr: "",
        duration: "15 minutes",
        location: "West Bank fields, Luxor",
      },
      {
        step: 5,
        time: "06:45",
        title: "Certificate Presentation",
        titleAr: "",
        description:
          "After landing, your pilot presents each passenger with a commemorative certificate of flight — a tradition dating back to the earliest days of hot air ballooning, started by the Montgolfier brothers in 18th-century France.",
        descriptionAr: "",
        duration: "10 minutes",
      },
      {
        step: 6,
        time: "07:00",
        title: "Return Transfer to Hotel",
        titleAr: "",
        description:
          "Your driver takes you back across the Nile to your hotel, arriving in time for a well-earned breakfast and the rest of your day.",
        descriptionAr: "",
        duration: "25 minutes",
        location: "West Bank to hotel, Luxor",
      },
    ],
    importantInfo: [
      "Flights are entirely weather-dependent — your guide will contact you the evening before to confirm",
      "Minimum age is typically 6 years old; minimum height 1.20m to stand safely in the basket",
      "Not recommended for pregnant women or people with serious heart, back, or knee conditions",
      "Wear flat, closed-toe shoes — no heels or sandals",
      "In case of cancellation due to weather, a full refund or free reschedule is offered",
      "The total experience including pickup is approximately 2.5 hours",
    ],
    importantInfoAr: [],
    meetingPoint: {
      description: "Hotel pickup at your accommodation in Luxor — driver arrives before 04:45",
      descriptionAr: "",
    },
    accessibility: "Passengers must be able to stand for the duration of the flight and step in/out of the basket (approximately 1 metre height). Not suitable for wheelchair users.",
    accessibilityAr: "",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 8. Luxor & Karnak Temples Evening Guided Tour
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Luxor & Karnak Temples Guided Tour",
    titleAr: "",
   images: ["/images/tours/east.jpeg"],
    slug: "luxor-karnak-temples-guided-tour",
    description:
      "Explore two of the most awe-inspiring temples in the ancient world on this specially timed evening guided tour — designed to avoid the midday heat and experience both temples in the most beautiful light of the day. Beginning at the massive Karnak Temple in the golden late afternoon, you'll walk through its famous Great Hypostyle Hall with its 134 towering columns, and learn the stories of the 30 pharaohs who contributed to its construction over 2,000 years. The tour then walks the newly excavated Avenue of the Sphinxes — open to visitors again for the first time in centuries — before arriving at the illuminated Luxor Temple after dark, one of the most beautiful sights in all of Egypt.",
    descriptionAr: "",
    category: "Guided tours and free tours",
    price: {
      original: 65.61,
      discounted: 52.48,
      currency: "USD",
    },
    duration: "4 hours",
    language: ["English"],
    rating: {
      score: 7.8,
      reviews: 62,
    },
    travellers: 883,
    freeCancellation: true,
    highlights: [
      "Evening visit to Karnak Temple — stunning golden hour light on the columns",
      "Walk through the iconic Great Hypostyle Hall with 134 giant columns",
      "Walk the newly restored 3km Avenue of the Sphinxes",
      "Visit the beautifully illuminated Luxor Temple after dark",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Licensed guide", "Hotel pickup and drop-off", "Entrance fees"],
    excludes: ["Tips", "Personal expenses"],
    itinerary: [
      {
        step: 1,
        time: "16:30",
        title: "Hotel Pickup",
        titleAr: "",
        description:
          "Your guide meets you at your hotel in the late afternoon. An evening start avoids the worst of the day's heat and allows you to experience Karnak in the golden late-afternoon light — when the honey-coloured columns glow warmly and the shadows of the columns stretch dramatically across the courtyards — and then Luxor Temple illuminated after dark.",
        descriptionAr: "",
        duration: "15 minutes",
        location: "Your hotel, Luxor",
      },
      {
        step: 2,
        time: "17:00",
        title: "Karnak Temple — The World's Largest Religious Complex",
        titleAr: "",
        description:
          "Enter Karnak at the height of the golden hour, when the late western sun streams directly through the temple's east-west axis, illuminating the columns from the side and creating extraordinary contrasts of light and shadow. Your guide begins at the Avenue of Ram-headed Sphinxes — 40 sphinx statues, each sheltering a small figure of Amenhotep III between their forepaws — and leads you through the towering First Pylon into the open forecourt. The centrepiece is the Great Hypostyle Hall: 134 papyrus-shaped columns in 16 rows, covering 5,000 square metres. The two central rows of 12 open-papyrus columns reach 23 metres high with a circumference of 10 metres — wide enough to park three cars side by side. Your guide explains the religious significance of the hall, the differences in artistic style between the reliefs of Seti I (delicate and refined) and Ramses II (bolder and deeper), and traces the original paint still surviving in sheltered upper sections — red, blue, yellow, and green pigments over 3,300 years old. You'll also visit the inner sanctuary of Amun, the great obelisk of Hatshepsut (29.6 metres, one of the world's tallest surviving obelisks), and the Sacred Lake.",
        descriptionAr: "",
        duration: "90 minutes",
        location: "Karnak Temple, East Bank Luxor",
        tips: "Arriving at Karnak in the late afternoon gives dramatically better photographs than morning visits — the light comes from the west and falls on the faces of the columns rather than behind them.",
        tipsAr: "",
      },
      {
        step: 3,
        time: "18:30",
        title: "Walk the Avenue of the Sphinxes",
        titleAr: "",
        description:
          "Walk a section of the famous 3-kilometre Avenue of the Sphinxes that connects Karnak to Luxor Temple — a processional road lined with hundreds of human-headed sphinx statues that was recently excavated and fully restored after centuries underground. This ancient road was used for the annual Opet Festival, when the sacred statues of Amun, Mut, and Khonsu were carried in procession from Karnak to Luxor Temple amid feasting, music, and celebration. Walking this road in the evening light — even a portion of it — gives a powerful sense of the scale and grandeur of ancient Thebes at its height.",
        descriptionAr: "",
        duration: "20 minutes walking",
        location: "Avenue of the Sphinxes, Luxor",
        tips: "One of the most photographed locations in Luxor right now — try to capture the full length of the sphinx-lined street with Luxor Temple visible in the distance.",
        tipsAr: "",
      },
      {
        step: 4,
        time: "19:00",
        title: "Luxor Temple — After Dark",
        titleAr: "",
        description:
          "Arrive at Luxor Temple as night has fully fallen and the floodlights are blazing. The transformation from daytime to night is remarkable — the honey-coloured sandstone glows a deep warm gold against the black sky, and the massive columns cast long dramatic shadows. Your guide walks you through the grand entrance pylon — decorated with a colossal relief of Ramses II at the Battle of Kadesh — past the seated colossi and the lone red granite obelisk (its pair has stood in Paris since 1836). Inside, explore the elegant colonnade of Amenhotep III — 14 enormous papyrus-bud columns perfectly aligned — the open sun court of Ramses II, and the inner sanctuary where the sacred boat of Amun was kept during the Opet Festival. Look also for the remarkable Roman shrine built inside the temple during the Roman period, and the Abu Haggag mosque perched directly on top of the ancient structure — still in active use today.",
        descriptionAr: "",
        duration: "90 minutes",
        location: "Luxor Temple, Corniche el-Nil",
        tips: "Luxor Temple at night is one of the most beautiful sights in all of Egypt. Take your time in the colonnade of Amenhotep III — the interplay of light, shadow, and scale on those columns is extraordinary.",
        tipsAr: "",
      },
      {
        step: 5,
        time: "20:30",
        title: "Drop-off at Hotel",
        titleAr: "",
        description: "Your guide and driver return you to your hotel. End of tour.",
        descriptionAr: "",
        duration: "15 minutes",
        location: "Your hotel, Luxor",
      },
    ],
    importantInfo: [
      "Evening timing is ideal for photography and avoiding the heat",
      "Dress modestly — cover shoulders and knees at both temples",
      "Luxor Temple at night is exceptional for photographers — bring your camera",
      "This tour pairs perfectly with a West Bank tour on a different day",
    ],
    importantInfoAr: [],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "",
    },
    accessibility: "Easy. Both temples are on flat ground. Karnak is large but fully accessible throughout.",
    accessibilityAr: "",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 9. Karnak Temple Guided Tour
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Karnak Temple Guided Tour",
    titleAr: "",
   images: ["/images/tours/karnak.jpeg"],
    slug: "karnak-temple-guided-tour-luxor",
    description:
      "Dedicated entirely to the grandest temple complex in ancient Egypt — and arguably the most impressive ancient building anywhere in the world — this guided tour takes you deep into the extraordinary world of Karnak. The sanctuary of Amun-Ra was the beating heart of religious and political life in ancient Thebes for over 2,000 years, and its sheer scale is overwhelming: the perimeter wall stretches 2,400 metres, the Great Hypostyle Hall alone covers 5,000 square metres, and the tallest columns reach 23 metres high. Walk through the columned halls, admire the Sacred Lake, and discover the obelisks, shrines, and sacred spaces built by some of Egypt's most powerful rulers over two millennia of continuous construction.",
    descriptionAr: "",
    category: "Guided tours and free tours",
    price: {
      original: 17.57,
      discounted: null,
      currency: "USD",
    },
    duration: "2 hours",
    language: ["English"],
    rating: {
      score: 0,
      reviews: 0,
    },
    travellers: 57,
    freeCancellation: true,
    highlights: [
      "Expert guided tour of the world's largest religious complex",
      "Walk through the Great Hypostyle Hall — 134 columns covering 5,000 square metres",
      "See the Sacred Lake and the famous scarab beetle statue",
      "Admire the 29.6-metre obelisk of Hatshepsut — one of the tallest in the world",
      "Learn the full 2,000-year construction history of Karnak",
    ],
    includes: ["Licensed guide", "Entrance fees"],
    excludes: ["Hotel pickup (not included — meet at temple)", "Tips", "Personal expenses"],
    itinerary: [
      {
        step: 1,
        time: "Meet at entrance",
        title: "Meeting at Karnak Temple Main Gate",
        titleAr: "",
        description:
          "Meet your guide at the main entrance of Karnak Temple on the East Bank. Hotel pickup is not included in this tour — make your own way to Karnak. From any hotel in Luxor, a taxi costs approximately 30–50 EGP and takes 10–15 minutes. Tuk-tuks are also available from the Corniche for less. Your guide will be waiting at the entrance holding a sign with your name.",
        descriptionAr: "",
        location: "Main entrance, Karnak Temple, East Bank Luxor",
      },
      {
        step: 2,
        time: "At start",
        title: "Avenue of Ram-Headed Sphinxes & First Pylon",
        titleAr: "",
        description:
          "Your guide begins at the very beginning — the processional avenue of 40 ram-headed sphinx statues, each sheltering a small figure of the pharaoh between their forepaws, representing Amun's protection of the king. At the end stands the colossal First Pylon — at 43 metres high, the last and largest gateway to be added to Karnak, begun by Nectanebo I in the 4th century BC but never completed. You can still see the ancient mud-brick construction ramp attached to its interior face — a 2,300-year-old building site frozen in time. Your guide explains how the temple grew outward from its ancient core over 2,000 years, each pharaoh adding a new pylon in front of the previous one.",
        descriptionAr: "",
        duration: "20 minutes",
        location: "Karnak Temple forecourt",
      },
      {
        step: 3,
        time: "In tour",
        title: "Great Hypostyle Hall",
        titleAr: "",
        description:
          "The undeniable centrepiece of Karnak — and arguably the most impressive interior space created by any ancient civilisation. The Great Hypostyle Hall covers 5,000 square metres and contains 134 columns in 16 rows. The two central rows of 12 open-papyrus columns reach 23 metres high with a circumference of 10 metres. The outer 122 closed-bud columns are 'only' 13 metres — still taller than most four-storey buildings. Every surface is carved with hieroglyphic texts and sacred imagery. Your guide points out the differences in artistic style between reliefs carved during Seti I's reign (delicate, refined, sunken relief with great artistry) and those of Ramses II (bolder, deeper, more dramatic but less refined). Look for original paint still surviving in sheltered upper sections — traces of red, blue, yellow, and green on ceilings and column tops after 3,300 years.",
        descriptionAr: "",
        duration: "30 minutes",
        location: "Great Hypostyle Hall, Karnak",
        tips: "Look for areas where the original paint still survives — particularly in sheltered upper sections between the tallest columns where the light from the clerestory windows falls. The effect when a shaft of sunlight hits these sections is extraordinary.",
        tipsAr: "",
      },
      {
        step: 4,
        time: "In tour",
        title: "Sanctuary of Amun & the Obelisks",
        titleAr: "",
        description:
          "Move deeper into the temple toward its ancient heart — the sanctuary of Amun, where only the pharaoh and the highest priests could enter, and where the sacred golden barque of Amun was kept for the annual Opet Festival procession. Nearby stand the two most famous obelisks at Karnak: the surviving obelisk of Hatshepsut at 29.6 metres — still bearing traces of its original electrum (gold-silver alloy) cap that would have caught the first rays of sunrise — and the base of her second obelisk, which Thutmose III had walled up to hide her achievement. Your guide tells the extraordinary political story of this power struggle, and points out where Hatshepsut's cartouches were chiselled out and replaced by Thutmose III's name — a 3,200-year-old damnatio memoriae.",
        descriptionAr: "",
        duration: "20 minutes",
        location: "Inner sanctuary area, Karnak",
      },
      {
        step: 5,
        time: "In tour",
        title: "Sacred Lake of Amun",
        titleAr: "",
        description:
          "Walk to the edges of the Sacred Lake — a rectangular artificial lake measuring 120 by 77 metres, excavated by Thutmose III around 1450 BC. Priests used the lake daily for ritual purification before entering the temple, and sacred barque processions moved across its waters during religious festivals. From the lakeside, you get one of the finest wide-angle views of the entire Karnak complex. Your guide points out the famous granite scarab beetle statue of Amenhotep III on the northwest corner — walking around it seven times is said to bring good luck and fertility, a ritual visitors have been performing here for decades.",
        descriptionAr: "",
        duration: "20 minutes",
        location: "Sacred Lake, Karnak",
        tips: "Sit on the stone steps beside the lake for 5 minutes and simply look at the temple reflected in the water — this is one of the calmest, most beautiful spots in all of Luxor and almost no one pauses long enough to appreciate it.",
        tipsAr: "",
      },
      {
        step: 6,
        time: "End of tour",
        title: "End of Tour at Temple Exit",
        titleAr: "",
        description:
          "Your guide concludes the tour at the temple exit with a summary of Karnak's history and recommendations for the rest of your time in Luxor. You are free to stay and explore the complex independently — your ticket allows unlimited re-entry the same day.",
        descriptionAr: "",
        location: "Karnak Temple exit",
      },
    ],
    importantInfo: [
      "Hotel pickup is NOT included — make your own way to Karnak Temple entrance",
      "Best visited in the morning (before 09:00) or late afternoon (after 16:00) to avoid the midday heat",
      "Wear comfortable shoes — Karnak covers 2 square kilometres",
      "Bring at least 1 litre of water and sunscreen",
      "The temple is open daily 06:00–17:30 (summer) or 18:00 (winter)",
    ],
    importantInfoAr: [],
    meetingPoint: {
      description: "Main entrance of Karnak Temple, East Bank Luxor — your guide will be waiting with a name sign",
      descriptionAr: "",
    },
    accessibility: "Easy to moderate. The temple is mostly flat but covers a very large area — expect to walk 2–3 km during a full tour.",
    accessibilityAr: "",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 10. Karnak Temple Light & Sound Show
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Karnak Temple Light & Sound Show",
    titleAr: "",
   images: ["/images/tours/sound.jpeg"],
    slug: "karnak-temple-light-sound-show-luxor",
    description:
      "Experience the ancient world come to life at Karnak after dark with this spectacular light and sound show — one of the most atmospheric evening experiences in Egypt. As night falls over the temple, dramatic coloured lighting illuminates the towering columns, obelisks, and Sacred Lake while a professional narration carries you back thousands of years through the story of ancient Egypt — told through the voices of its gods and pharaohs. You walk through the temple complex in stages, with each area dramatically revealed by light as the narrative reaches it, culminating in a breathtaking finale at the Sacred Lake where the entire illuminated temple is reflected in the still water.",
    descriptionAr: "",
    category: "Performances",
    price: {
      original: 56.94,
      discounted: 45.55,
      currency: "USD",
    },
    duration: "3 hours 30 minutes",
    language: ["English"],
    rating: {
      score: 7.2,
      reviews: 10,
    },
    travellers: 195,
    freeCancellation: true,
    highlights: [
      "Spectacular light and sound show at Karnak Temple",
      "Walk through the illuminated temple in stages at night",
      "Dramatic professional narration telling the story of ancient Egypt",
      "Breathtaking Sacred Lake finale — temple reflected in still water",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Show entrance ticket", "Hotel pickup and drop-off"],
    excludes: ["Tips", "Personal expenses"],
    itinerary: [
      {
        step: 1,
        time: "19:00",
        title: "Hotel Pickup",
        titleAr: "",
        description:
          "Your driver picks you up from your hotel and drives you to Karnak Temple for the evening show. Bring a light jacket — the temple can feel surprisingly cool after dark even in summer.",
        descriptionAr: "",
        duration: "20 minutes",
        location: "Your hotel, Luxor",
      },
      {
        step: 2,
        time: "19:30",
        title: "Arrival & Pre-Show",
        titleAr: "",
        description:
          "Arrive at Karnak and collect your show tickets. In the 20 minutes before the show begins, walk quietly along the entrance sphinx avenue and take in the atmosphere of the enormous complex at night — the colossal First Pylon illuminated from below, the ram-headed sphinxes casting long shadows, the warm scent of ancient stone in the cooling desert air.",
        descriptionAr: "",
        duration: "20 minutes",
        location: "Karnak Temple, East Bank Luxor",
      },
      {
        step: 3,
        time: "20:00",
        title: "Light & Sound Show",
        titleAr: "",
        description:
          "The show begins as the group is led through the darkened temple in stages, with each area dramatically illuminated as the narration reaches that part of the story. Coloured spotlights transform the massive columns from shadow to fire, the obelisks glow gold against the deep blue sky, and the narration — delivered in rich, professional English — tells the full story of Karnak through the voices of Amun, Isis, Ramses II, and the priests of ancient Thebes. The narrative covers the founding of the temple by Thutmose I, its expansion across 2,000 years, the religious revolution of Akhenaten, and the final decline of the old religion. The 45–60 minute show reaches its climax at the Sacred Lake, where tiered seating faces the water and the entire illuminated temple complex — columns, obelisks, and pylons — is perfectly reflected in the still surface. One of the most visually dramatic moments available anywhere in Egypt.",
        descriptionAr: "",
        duration: "60 minutes",
        location: "Throughout Karnak Temple complex",
        tips: "Bring a light jacket or layer — the temple feels cool at night even when the day was very hot. Get to the front-left of the Sacred Lake seating area for the best view of the finale.",
        tipsAr: "",
      },
      {
        step: 4,
        time: "21:00",
        title: "Return Transfer to Hotel",
        titleAr: "",
        description: "Your driver collects you at the temple exit and returns you to your hotel. End of evening.",
        descriptionAr: "",
        duration: "20 minutes",
        location: "Karnak to your hotel, Luxor",
      },
    ],
    importantInfo: [
      "Show schedule varies by evening and language — confirm the English show time when booking",
      "The show runs approximately 45–60 minutes; total experience including transport is about 2.5 hours",
      "Bring a light layer — the temple is exposed and can be cool at night",
      "Pairs perfectly with a daytime Karnak guided tour earlier in the day",
    ],
    importantInfoAr: [],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "",
    },
    accessibility: "Easy. The show route is on flat ground throughout the temple complex.",
    accessibilityAr: "",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 11. Edfu & Kom Ombo Day Trip from Luxor
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Edfu & Kom Ombo Day Trip from Luxor",
    titleAr: "",
    images: ["/images/tours/edfu.jpeg"],
    slug: "edfu-kom-ombo-day-trip-luxor",
    description:
      "Head south from Luxor on this remarkable full-day excursion to two of Egypt's most impressive and best-preserved ancient temples. At Edfu — arriving in style on a traditional horse-drawn carriage through the local streets — you'll visit the Temple of Horus, the most completely preserved ancient temple in Egypt, with its towering 36-metre entrance pylons, extraordinary intact interior, and famous black granite Horus falcon. Kom Ombo then offers a completely unique experience: the only ancient Egyptian temple simultaneously dedicated to two gods, with a perfectly symmetrical dual design, mummified crocodiles in the onsite museum, and an extraordinary riverside setting on a Nile bend.",
    descriptionAr: "",
    category: "Day trip",
    price: {
      original: 97.24,
      discounted: 77.79,
      currency: "USD",
    },
    duration: "10 hours",
    language: ["English"],
    rating: {
      score: 7.6,
      reviews: 28,
    },
    travellers: 286,
    freeCancellation: true,
    highlights: [
      "Visit the magnificent Temple of Horus at Edfu — most preserved temple in Egypt",
      "Atmospheric horse-drawn carriage ride through Edfu's market streets",
      "Explore the unique double temple of Kom Ombo dedicated to two gods",
      "See actual mummified crocodiles in the Kom Ombo Crocodile Museum",
      "Discover ancient medical instruments carved on the temple walls",
      "Full-day guided excursion with hotel pickup",
    ],
    includes: ["Licensed guide", "Hotel pickup and drop-off", "Entrance fees", "Horse carriage ride at Edfu", "Air-conditioned transport"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: [
      {
        step: 1,
        time: "07:00",
        title: "Hotel Pickup & Drive to Edfu",
        titleAr: "",
        description:
          "Your guide and driver collect you from your hotel for the approximately 2-hour drive south to Edfu along the Nile Valley. The route passes through rural Upper Egypt — green sugarcane fields, date palm groves, small mud-brick villages — giving you a glimpse of the agricultural life still practiced along the river much as it has been for thousands of years. Your guide uses the journey to brief you on the mythology of Horus and the history of Edfu Temple.",
        descriptionAr: "",
        duration: "2 hours driving",
        location: "Luxor to Edfu",
      },
      {
        step: 2,
        time: "09:00",
        title: "Horse Carriage Ride Through Edfu",
        titleAr: "",
        description:
          "Arrive in Edfu and board a traditional horse-drawn carriage for the 10-minute ride through the local market streets to the temple entrance. This is the traditional and most atmospheric way to arrive at Edfu — passing local spice shops, coffee houses, schoolchildren, and neighbourhood mosques, with the top of the temple's enormous pylon gradually appearing above the rooftops as you approach.",
        descriptionAr: "",
        duration: "10 minutes",
        location: "Edfu town to Edfu Temple",
        tips: "Sit on the left side of the carriage for the best view of the temple as you approach.",
        tipsAr: "",
      },
      {
        step: 3,
        time: "09:15",
        title: "Temple of Horus at Edfu",
        titleAr: "",
        description:
          "Enter the best-preserved ancient temple in Egypt. Built during the Ptolemaic period (237–57 BC), the Temple of Horus is extraordinary not just for its preservation — it was buried under desert sand for centuries, which protected it from damage — but for the completeness of its design. The massive 36-metre entrance pylon, the great courtyard, two hypostyle halls, the inner sanctuary, and the surrounding enclosure wall all survive largely intact. Your guide walks you through the famous 'sacred drama' reliefs on the outer enclosure wall — 17 sequential panels depicting the annual ritual battle between Horus and Set, essentially the world's first narrative sequential art, like an ancient graphic novel. In the inner courtyard, find the celebrated black granite Horus falcon statue — one of the most iconic images in Egyptian art. Inside the sanctuary, the original stone naos (barque shrine) still stands in place — the actual stone box that housed the sacred statue of Horus during ceremonies.",
        descriptionAr: "",
        duration: "90 minutes",
        location: "Edfu Temple, Aswan Governorate",
        tips: "Don't miss the sacred drama panels on the outer enclosure wall — most visitors only see the main building and miss these extraordinary narrative reliefs entirely. Ask your guide specifically to include them.",
        tipsAr: "",
      },
      {
        step: 4,
        time: "10:45",
        title: "Return by Carriage & Drive to Kom Ombo",
        titleAr: "",
        description:
          "Return to your vehicle by horse carriage and drive approximately 1 hour further south to Kom Ombo. A brief lunch stop is possible en route (not included in price). Your guide continues the story of ancient Egyptian religion, connecting the Horus mythology of Edfu to the dual-deity worship at Kom Ombo.",
        descriptionAr: "",
        duration: "1 hour driving",
        location: "Edfu to Kom Ombo",
      },
      {
        step: 5,
        time: "12:00",
        title: "Double Temple of Kom Ombo",
        titleAr: "",
        description:
          "Arrive at Kom Ombo, uniquely situated on a bend in the Nile where the river is visible from inside the temple precinct — the only ancient Egyptian temple with this feature. The temple is dedicated simultaneously and equally to two gods: Sobek (the crocodile-headed god of fertility, water, and the Nile) on the left, and Haroeris (Horus the Elder, falcon god of the sky) on the right. Everything in the temple is perfectly symmetrical — two entrances, two hypostyle halls, two inner sanctuaries, two of everything — reflecting the dual divine presence with architectural precision found nowhere else. Your guide explains how worshippers of each deity used their respective half. Visit the Crocodile Museum inside the complex — dozens of actual mummified crocodiles preserved for thousands of years, once venerated as living embodiments of Sobek. On one inner wall, find the remarkable carved medical instruments: forceps, scalpels, bone saws, birthing chairs, and medicine jars — evidence of a medical school once associated with this temple. Also seek out the ancient Nilometer — a circular stone shaft with measurement marks used for 2,000 years to predict the Nile flood.",
        descriptionAr: "",
        duration: "90 minutes",
        location: "Kom Ombo Temple, Aswan Governorate",
        tips: "The medical instruments carved on the inner walls are one of the most surprising and fascinating details in any Egyptian temple — don't leave without finding them.",
        tipsAr: "",
      },
      {
        step: 6,
        time: "13:30",
        title: "Return Drive to Luxor",
        titleAr: "",
        description:
          "Begin the approximately 2.5-hour drive north back to Luxor, arriving at your hotel in the late afternoon.",
        descriptionAr: "",
        duration: "2.5 hours driving",
        location: "Kom Ombo to Luxor",
      },
      {
        step: 7,
        time: "16:30",
        title: "Drop-off at Hotel",
        titleAr: "",
        description: "Your driver drops you off at your hotel entrance. End of day trip.",
        descriptionAr: "",
        duration: null,
        location: "Your hotel, Luxor",
      },
    ],
    importantInfo: [
      "Long day with significant driving — bring snacks, water, and entertainment for the road",
      "Lunch is not included — bring cash (~$5–10) or your own food",
      "Dress modestly at both temples — cover shoulders and knees",
      "Bring plenty of water — both sites have limited shade",
      "The horse carriage ride is included and is the traditional way to reach Edfu Temple",
    ],
    importantInfoAr: [],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "",
    },
    accessibility: "Moderate. Both temples involve walking on ancient stone floors with some steps and ramps.",
    accessibilityAr: "",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 12. Luxor Tour by Horse-Drawn Carriage
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Luxor Tour by Horse-Drawn Carriage",
    titleAr: "",
    images: ["/images/tours/calesa.jpeg"],
    slug: "luxor-tour-horse-drawn-carriage",
    description:
      "Discover the charm and character of Luxor in the most traditional and unhurried way possible — aboard a classic horse-drawn carriage clip-clopping through the city's streets. This relaxed tour takes you along the stunning Nile Corniche past the entrance of Luxor Temple, through the real backstreets and market quarters of the city, and back along the river as the afternoon light turns golden. A perfect introduction to Luxor for first-time visitors, a wonderful experience for families with children, and a genuinely different perspective on the city for those who have done all the temples and want to experience Luxor as a living place rather than just a museum.",
    descriptionAr: "",
    category: "Adventure and nature",
    price: {
      original: 17.57,
      discounted: null,
      currency: "USD",
    },
    duration: "1 hour 30 minutes",
    language: ["English"],
    rating: {
      score: 8.0,
      reviews: 3,
    },
    travellers: 29,
    freeCancellation: true,
    highlights: [
      "Scenic horse-drawn carriage ride through Luxor city",
      "Pass by Luxor Temple and the Nile Corniche",
      "Experience the real backstreets, markets, and local life of Luxor",
      "Relaxed pace with an English-speaking guide",
      "Perfect for families and first-time visitors",
    ],
    includes: ["Carriage ride", "English-speaking guide"],
    excludes: ["Hotel pickup (meet at Luxor Temple Square)", "Tips"],
    itinerary: [
      {
        step: 1,
        time: "Meeting point",
        title: "Meet Your Carriage at Luxor Temple Square",
        titleAr: "",
        description:
          "Meet your English-speaking guide and horse-drawn carriage at the square in front of Luxor Temple on the Nile Corniche. Hotel pickup is not included — the meeting point is easily accessible by short taxi or tuk-tuk ride from any hotel in central Luxor. The best time for this tour is late afternoon (16:00–18:00) when the Corniche light is golden and the city is most alive.",
        descriptionAr: "",
        location: "Luxor Temple Square, Corniche el-Nil",
      },
      {
        step: 2,
        time: "At start",
        title: "Nile Corniche — Past Luxor Temple",
        titleAr: "",
        description:
          "Your carriage sets off northward along the Nile Corniche — one of the most beautiful urban promenades in Egypt, with the river on one side and ancient monuments on the other. You pass directly in front of the entrance to Luxor Temple: the grand entrance pylon of Ramses II, the colossal seated statues, and the lone red granite obelisk. Your guide explains the history of what you're passing and points out the recently excavated Avenue of the Sphinxes extending south from the temple.",
        descriptionAr: "",
        duration: "20 minutes",
        location: "Nile Corniche, Luxor",
        tips: "Look back over your shoulder as you pass Luxor Temple — the moving angle from the carriage gives a wide view of the full pylon and obelisk together that you can't get standing directly in front of it.",
        tipsAr: "",
      },
      {
        step: 3,
        time: "In tour",
        title: "Through the City Backstreets & Market",
        titleAr: "",
        description:
          "Your carriage turns inland from the Corniche and weaves through the backstreets of central Luxor — a completely different world from the tourist-facing riverfront. You pass local spice shops with their mountains of coloured powders, fabric merchants, traditional coffee houses (ahwas) where men play backgammon and dominoes, neighbourhood mosques, fruit and vegetable markets piled high with produce. The sound of horse hooves on cobbled streets, the call to prayer drifting from a minaret, the smell of spices and fresh bread — this is Luxor as it actually lives, not just as an open-air museum. Your guide explains the history of the city's backstreets, many of which are built directly on top of the ancient city of Thebes.",
        descriptionAr: "",
        duration: "30 minutes",
        location: "Central Luxor backstreets",
        tips: "Ask your guide to stop briefly at the local spice market — buying a small bag of Egyptian spices (cumin, coriander, dried hibiscus) is an excellent and very affordable souvenir.",
        tipsAr: "",
      },
      {
        step: 4,
        time: "In tour",
        title: "Return Along the Corniche",
        titleAr: "",
        description:
          "Your carriage loops back to the Corniche for the return journey south to the starting point. The second pass along the Nile offers different light — if you started in late afternoon, the river will now be golden and the feluccas on the water at their most picturesque. Your guide answers any remaining questions and gives personalised recommendations for the rest of your Luxor visit.",
        descriptionAr: "",
        duration: "20 minutes",
        location: "Nile Corniche, Luxor",
      },
      {
        step: 5,
        time: "End of tour",
        title: "Drop-off at Luxor Temple Square",
        titleAr: "",
        description:
          "The carriage returns you to the starting point at Luxor Temple Square. You are free to enter Luxor Temple independently (entrance fee not included) or continue exploring the Corniche and city on foot.",
        descriptionAr: "",
        location: "Luxor Temple Square, Corniche el-Nil",
      },
    ],
    importantInfo: [
      "Meet at Luxor Temple Square — hotel pickup is not included",
      "Best time is late afternoon (16:00–18:00) for the best light and atmosphere",
      "Tips for the carriage driver are customary (~20–30 EGP)",
      "Suitable for all ages including young children",
    ],
    importantInfoAr: [],
    meetingPoint: {
      description: "Luxor Temple Square, Corniche el-Nil — your guide and carriage will be waiting at the square",
      descriptionAr: "",
    },
    accessibility: "Easy. Boarding requires stepping up approximately 40cm. Not suitable for wheelchair users.",
    accessibilityAr: "",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 13. Luxor Museum & Museum of Mummification Guided Tour
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Luxor Museum & Museum of Mummification Guided Tour",
    titleAr: "",
   images: ["/images/tours/museum.jpeg"],
    slug: "luxor-museum-mummification-guided-tour",
    description:
      "Dive into Luxor's extraordinary archaeological heritage with this guided tour of two of Egypt's finest and most rewarding museums. The Luxor Museum houses a world-class collection of Theban artifacts — including royal statues of breathtaking quality, golden objects from Tutankhamun's tomb, a reconstructed wall of Akhenaten, and two royal mummies — displayed in a beautifully designed space that puts most national museums to shame. The nearby Museum of Mummification is the only museum in Egypt dedicated exclusively to the ancient art and science of preserving the dead, with genuine mummies, embalming tools, and canopic equipment on display. Best visited before the temples to give everything else you see in Luxor its full context.",
    descriptionAr: "",
    category: "Guided tours and free tours",
    price: {
      original: 56.94,
      discounted: 45.69,
      currency: "USD",
    },
    duration: "4 hours",
    language: ["English"],
    rating: {
      score: 8.2,
      reviews: 18,
    },
    travellers: 151,
    freeCancellation: true,
    highlights: [
      "Guided tour of the world-class Luxor Museum",
      "See royal statues, Tutankhamun artifacts, and the Wall of Akhenaten",
      "View the royal mummies of Ahmose I and Ramses I",
      "Explore the unique Museum of Mummification",
      "Learn the full process of ancient Egyptian embalming",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Licensed guide", "Hotel pickup and drop-off", "Entrance fees to both museums"],
    excludes: ["Tips", "Personal expenses"],
    itinerary: [
      {
        step: 1,
        time: "09:00",
        title: "Hotel Pickup & Drive to Luxor Museum",
        titleAr: "",
        description:
          "Your guide meets you at your hotel and drives you to the Luxor Museum on the Nile Corniche — a short journey from most central Luxor hotels. Your guide strongly recommends visiting the museum before the temples during your stay: the objects, their history, and their context transform how you understand everything else you'll see in Luxor.",
        descriptionAr: "",
        duration: "15 minutes",
        location: "Your hotel, Luxor",
      },
      {
        step: 2,
        time: "09:15",
        title: "Luxor Museum",
        titleAr: "",
        description:
          "Enter one of Egypt's finest museums — a purpose-built institution opened in 1975 and thoughtfully designed with excellent lighting, bilingual labels, and a layout that tells a coherent narrative rather than simply storing objects. The collection focuses exclusively on the Theban region. Key highlights your guide covers include: the Cache of Luxor — 17 beautifully preserved royal statues discovered in 1989 hidden beneath Luxor Temple's floor, including a sublime alabaster statue of Thutmose III and a painted sandstone head of Amenhotep III; the Tutankhamun section — a carefully chosen group of golden objects including a gilded wooden bed, ceremonial weapons, and shabtis from the young king's tomb; the Wall of Akhenaten — reconstructed from thousands of small talatat blocks, showing the 'heretic pharaoh' worshipping the sun disc Aten in his revolutionary new artistic style; the Royal Mummies room — the mummies of Ahmose I (founder of the New Kingdom) and Ramses I (founder of the 19th Dynasty) displayed respectfully in a climate-controlled environment; and a superb collection of New Kingdom jewelry, ushabti figurines, ritual objects, and daily life artifacts.",
        descriptionAr: "",
        duration: "2 hours",
        location: "Luxor Museum, Corniche el-Nil",
        tips: "Photography is NOT permitted inside the Luxor Museum. Ask your guide to take you to the alabaster Thutmose III statue from the 1989 cache first — the quality is extraordinary and sets the tone for everything that follows.",
        tipsAr: "",
      },
      {
        step: 3,
        time: "11:30",
        title: "Walk to Museum of Mummification",
        titleAr: "",
        description:
          "Walk 5 minutes south along the Corniche from the Luxor Museum to the Museum of Mummification, pleasantly located near the entrance of Luxor Temple.",
        descriptionAr: "",
        duration: "5 minutes walking",
        location: "Corniche el-Nil, Luxor",
      },
      {
        step: 4,
        time: "11:45",
        title: "Museum of Mummification",
        titleAr: "",
        description:
          "Enter the only museum in Egypt dedicated exclusively to the ancient art and science of mummification. Your guide explains the complete mummification process in clear stages: the 70-day preparation period, the removal of organs into canopic jars (liver, lungs, stomach, intestines), the brain extraction through the nasal passage with a metal hook, the drying of the body with natron salt for 40 days, the wrapping in hundreds of metres of fine linen with amulets placed between the layers, and the final rituals including the Opening of the Mouth ceremony. On display are genuine mummified humans, mummified animals (cats, crocodiles, fish, ibis birds, baboons, and a ram), and the actual tools used by ancient embalmers. Your guide explains the deeply spiritual motivations behind mummification — the ancient Egyptian belief in the ka (vital essence) which needed a preserved physical body to return to after its journeys in the afterlife.",
        descriptionAr: "",
        duration: "1 hour",
        location: "Museum of Mummification, Corniche el-Nil",
        tips: "The museum is small but extraordinarily dense with information — take your time at each exhibit rather than rushing through. The mummified animals are particularly fascinating.",
        tipsAr: "",
      },
      {
        step: 5,
        time: "13:00",
        title: "Return Transfer to Hotel",
        titleAr: "",
        description: "Your guide and driver return you to your hotel. End of tour.",
        descriptionAr: "",
        duration: "15 minutes",
        location: "Your hotel, Luxor",
      },
    ],
    importantInfo: [
      "Highly recommended as your first activity in Luxor before visiting any temples",
      "Photography is NOT permitted inside the Luxor Museum",
      "Both museums are fully air-conditioned — a welcome relief on hot days",
      "Suitable for children but parental guidance advised for the mummification content",
      "Allow 3–4 hours total for both museums with a guide",
    ],
    importantInfoAr: [],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "",
    },
    accessibility: "Easy. Both museums are fully accessible with ramps and air conditioning. Flat floors throughout.",
    accessibilityAr: "",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 14. Sunset Felucca Trip to Banana Island
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Sunset Felucca Trip to Banana Island",
    titleAr: "",
   images: ["/images/tours/faluca.jpeg"],
    slug: "sunset-felucca-trip-banana-island-luxor",
    description:
      "Unwind completely on a peaceful felucca sailing trip along the Nile at golden hour — the perfect antidote to a day of intense temple touring. Glide silently across the calm river toward Banana Island, a lush and tranquil working agricultural island approximately 8 kilometres north of Luxor, famous for its banana plantations, mango trees, guava, papyrus reeds, and tropical greenery. Stroll through the island's cool fruit gardens before sailing back to Luxor as the sun descends behind the West Bank hills — the sky turning orange, pink, and deep purple above the ancient mountains. One of the most peaceful and memorable evenings available anywhere in Egypt.",
    descriptionAr: "",
    category: "Boat tour",
    price: {
      original: 58.58,
      discounted: null,
      currency: "USD",
    },
    duration: "3 hours",
    language: ["English"],
    rating: {
      score: 10.0,
      reviews: 2,
    },
    travellers: 23,
    freeCancellation: true,
    highlights: [
      "Sunset felucca sailing on the Nile — completely peaceful and unhurried",
      "Visit the lush tropical Banana Island",
      "Walk through working banana and mango plantations",
      "Breathtaking sunset over the West Bank hills on the return",
      "Perfect end-of-day activity after temple touring",
    ],
    includes: ["Felucca ride (both ways)", "English-speaking guide", "Visit to Banana Island"],
    excludes: ["Hotel pickup (meet at dock)", "Tips", "Personal expenses"],
    itinerary: [
      {
        step: 1,
        time: "16:00",
        title: "Board Felucca at Luxor Dock",
        titleAr: "",
        description:
          "Meet your guide and captain at the Nile felucca dock in central Luxor, near the Mercure Hotel on the Corniche. Board your traditional wooden sailing felucca — a watercraft whose design has barely changed in 5,000 years, used on the Nile since the time of the pharaohs. Your captain hoists the distinctive lateen sail and you cast off from the bank into the current as the afternoon light begins to turn golden.",
        descriptionAr: "",
        duration: "10 minutes",
        location: "Luxor Nile dock, East Bank",
        tips: "The felucca dock is near the Mercure Hotel on the Corniche — tell any taxi driver 'felucca dock near Mercure' and they'll know exactly where to go.",
        tipsAr: "",
      },
      {
        step: 2,
        time: "16:15",
        title: "Sailing North — Golden Hour on the Nile",
        titleAr: "",
        description:
          "Sail gently northward along the Nile in the late afternoon light — the most beautiful time of day on the river. The low sun turns the water from silver to gold, the West Bank mountains are bathed in warm amber light, and the palm trees on both banks cast long shadows across the green fields. Your captain uses nothing but the wind and sail to navigate — no engine, no noise, just the sound of the sail filling with air and the water parting softly at the bow. Your guide points out landmarks on both banks and explains the significance of the ancient East Bank / West Bank division — the living city on one side, the city of the dead on the other — that has defined the geography of this area for 5,000 years.",
        descriptionAr: "",
        duration: "45 minutes",
        location: "Nile River north of Luxor",
        tips: "Put your phone down for at least 10 minutes and simply experience being on the Nile. The motion of the felucca, the sound of the water, and the landscape are genuinely therapeutic.",
        tipsAr: "",
      },
      {
        step: 3,
        time: "17:00",
        title: "Arrive at Banana Island",
        titleAr: "",
        description:
          "Your captain moors the felucca at Banana Island — a small, lush working agricultural island about 8 kilometres north of central Luxor. Step ashore and enter a completely different world: a dense, cool, tropical garden of banana palms, mango trees, guava, papyrus reeds, sugar cane, and hibiscus flowers. The contrast between the vivid green island and the surrounding desert and river is visually striking. Your guide walks you through the garden paths, explaining the plants and the island's history as a working Nile farm. In season (May–September) you may be able to taste fresh mangoes directly from the tree — among the most flavourful in Egypt.",
        descriptionAr: "",
        duration: "30 minutes",
        location: "Banana Island, Nile north of Luxor",
        tips: "Try to visit during mango season (May–September) to taste fresh local mangoes from the tree — the quality is exceptional.",
        tipsAr: "",
      },
      {
        step: 4,
        time: "17:30",
        title: "Return Sail — Sunset on the Nile",
        titleAr: "",
        description:
          "Re-board the felucca for the return sail south to Luxor, perfectly timed to coincide with sunset. As the sun descends toward the West Bank hills, the sky transforms through shades of orange, pink, gold, and deep purple — all of it reflected on the surface of the Nile in a constantly shifting mirror of colour. The silhouettes of palm trees emerge against the burning sky, the minarets of Luxor city appear ahead, and the ancient desert mountains glow amber in the last light. Your captain steers silently using the wind. The only sounds are the water against the hull and, if the timing is right, the call to prayer drifting across the river from the city — one of the most quietly moving moments available anywhere in Egypt.",
        descriptionAr: "",
        duration: "45 minutes",
        location: "Nile River south toward Luxor",
        tips: "The return sail is the most beautiful part of the entire experience. Sit facing west and just watch the sky — the light changes every two minutes.",
        tipsAr: "",
      },
      {
        step: 5,
        time: "18:30",
        title: "Return to Luxor Dock",
        titleAr: "",
        description:
          "The felucca returns to the dock in central Luxor as dusk settles over the city. The lights of the Corniche come on and the entrance of Luxor Temple — just a 2-minute walk away — begins to glow in the floodlights. End of tour.",
        descriptionAr: "",
        duration: null,
        location: "Luxor Nile dock, East Bank",
      },
    ],
    importantInfo: [
      "Hotel pickup is NOT included — make your own way to the felucca dock near the Mercure Hotel",
      "This is a sailing trip using wind power — journey times may vary slightly with wind conditions",
      "The felucca is open-air — bring a light layer for the evening breeze on the water",
      "Best timed to arrive at the dock at 16:00 for the optimal sunset on the return",
      "Completely peaceful experience — no loudspeakers, no crowds, no rush",
    ],
    importantInfoAr: [],
    meetingPoint: {
      description: "Nile felucca dock, Corniche el-Nil, central Luxor — near the Mercure Hotel",
      descriptionAr: "",
    },
    accessibility: "Easy. Boarding requires stepping onto a low wooden deck from the dock (~30cm). Seated throughout. Not suitable for wheelchair users.",
    accessibilityAr: "",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 15. Egypt Tour Package: 8 Days All-Inclusive from Luxor
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Egypt Tour Package: 8 Days All-Inclusive from Luxor",
    titleAr: "",
   images: ["/images/tours/cruise.jpeg"],
    slug: "egypt-tour-package-8-days-all-inclusive-luxor",
    description:
      "Experience the very best of Egypt in 8 unforgettable all-inclusive days — Aurevian Tours' most comprehensive Egypt itinerary, starting from Luxor and ending in Cairo. This extraordinary journey covers the greatest ancient landmarks in the country: the colossal temple complexes of Karnak and Hatshepsut in Luxor, the Valley of the Kings, the temples of Edfu and Kom Ombo, the magical island temple of Philae in Aswan, the remote and breathtaking temples of Abu Simbel near the Sudanese border, and the iconic Pyramids of Giza and Great Sphinx in Cairo. All 4-star accommodation, internal transport and flights, all meals, guided excursions, and entrance fees are included — everything taken care of, so you can focus entirely on the experience.",
    descriptionAr: "",
    category: "Tour packages",
    price: {
      original: 1663.30,
      discounted: 1247.48,
      currency: "USD",
    },
    duration: "8 days",
    language: ["English"],
    rating: {
      score: 8.7,
      reviews: 3,
    },
    travellers: 35,
    freeCancellation: true,
    highlights: [
      "Visit Karnak, Valley of the Kings, and Hatshepsut Temple in Luxor",
      "Explore the perfectly preserved temples of Edfu and Kom Ombo",
      "See the magical Philae Temple island in Aswan",
      "Fly to the remote temples of Abu Simbel — Ramses II's greatest monument",
      "Visit the iconic Pyramids of Giza and Great Sphinx",
      "Explore Islamic and Coptic Cairo",
      "All accommodation, meals, and transport included",
      "Single expert English-speaking guide for the full 8 days",
    ],
    includes: [
      "7 nights 4-star accommodation",
      "All meals (full board throughout)",
      "All transport (private vehicle + internal flights)",
      "All guided excursions",
      "All entrance fees",
      "Single English-speaking guide for 8 days",
    ],
    excludes: ["International flights to/from Egypt", "Tips (~$10–15/day for guide)", "Personal expenses", "Travel insurance"],
    itinerary: [
      {
        day: 1,
        title: "Luxor — Arrival & East Bank Temples",
        titleAr: "",
        description:
          "Arrive in Luxor and transfer to your hotel. After lunch, your Aurevian Tours guide takes you to the two great East Bank temples in the golden afternoon light.",
        descriptionAr: "",
        activities: [
          {
            time: "Morning",
            title: "Arrival in Luxor & Hotel Check-in",
            titleAr: "",
            description:
              "Transfer from Luxor Airport or train station to your 4-star hotel. Your guide meets you and gives a full briefing on the 8-day itinerary, answering any questions.",
            descriptionAr: "",
          },
          {
            time: "14:00",
            title: "Karnak Temple Complex",
            titleAr: "",
            description:
              "Visit the largest temple complex in the ancient world. Walk through the Great Hypostyle Hall, see the Sacred Lake and obelisks of Hatshepsut, and explore two millennia of pharaonic construction in a single site.",
            descriptionAr: "",
            duration: "2 hours",
          },
          {
            time: "17:00",
            title: "Luxor Temple at Dusk",
            titleAr: "",
            description:
              "Walk to Luxor Temple as the sun sets and the floodlights begin to glow, seeing the entrance pylon of Ramses II, the seated colossi, and the lone remaining obelisk.",
            descriptionAr: "",
            duration: "1 hour",
          },
        ],
        meals: { breakfast: false, lunch: true, dinner: true },
        accommodation: "4-star hotel, Luxor",
      },
      {
        day: 2,
        title: "Luxor West Bank — Valley of the Kings & More",
        titleAr: "",
        description:
          "Full day exploring the West Bank — the ancient necropolis of the New Kingdom pharaohs — covering five major sites.",
        descriptionAr: "",
        activities: [
          {
            time: "07:30",
            title: "Colossi of Memnon",
            titleAr: "",
            description: "Brief stop at the two giant quartzite statues of Amenhotep III — 18 metres tall, over 700 tonnes each.",
            descriptionAr: "",
            duration: "20 minutes",
          },
          {
            time: "08:00",
            title: "Valley of the Kings — 3 Royal Tombs",
            titleAr: "",
            description:
              "Explore 3 royal tombs with detailed commentary on the paintings, sacred texts, and burial rituals of New Kingdom pharaohs.",
            descriptionAr: "",
            duration: "90 minutes",
          },
          {
            time: "09:45",
            title: "Mortuary Temple of Hatshepsut",
            titleAr: "",
            description:
              "Visit the spectacular three-tiered terraced temple of Egypt's most famous female pharaoh at Deir el-Bahari.",
            descriptionAr: "",
            duration: "45 minutes",
          },
          {
            time: "11:00",
            title: "Valley of the Nobles — Selected Tombs",
            titleAr: "",
            description:
              "Visit 2 of the famously painted nobles' tombs showing vivid scenes of ancient Egyptian daily life.",
            descriptionAr: "",
            duration: "45 minutes",
          },
          {
            time: "12:00",
            title: "Medinet Habu",
            titleAr: "",
            description:
              "Conclude at the magnificently preserved mortuary temple of Ramses III — covered in extraordinary military reliefs.",
            descriptionAr: "",
            duration: "45 minutes",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Luxor",
      },
      {
        day: 3,
        title: "Luxor to Aswan — Philae Temple & Felucca",
        titleAr: "",
        description:
          "Travel south to Aswan — Egypt's most beautiful city — visiting the island temple of Philae and enjoying a felucca sail among the granite islands.",
        descriptionAr: "",
        activities: [
          {
            time: "08:00",
            title: "Transfer to Aswan",
            titleAr: "",
            description: "Travel to Aswan by private vehicle or first-class train (~3 hours). Check in to hotel on arrival.",
            descriptionAr: "",
            duration: "3 hours travel",
          },
          {
            time: "14:00",
            title: "Philae Temple (Temple of Isis)",
            titleAr: "",
            description:
              "Take a motorboat to Agilkia Island to visit the magnificent Temple of Isis, relocated stone by stone in the 1970s UNESCO rescue operation.",
            descriptionAr: "",
            duration: "90 minutes",
          },
          {
            time: "16:30",
            title: "Felucca Ride Among the Islands",
            titleAr: "",
            description:
              "Traditional felucca sailing among Aswan's granite Nile islands as the sun sets over the desert.",
            descriptionAr: "",
            duration: "1 hour",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Aswan",
      },
      {
        day: 4,
        title: "Aswan — High Dam & Abu Simbel Flight",
        titleAr: "",
        description:
          "Visit the Aswan High Dam in the morning, then fly to the extraordinary temples of Abu Simbel — Ramses II's greatest monument, relocated to save it from Lake Nasser.",
        descriptionAr: "",
        activities: [
          {
            time: "08:00",
            title: "Aswan High Dam",
            titleAr: "",
            description:
              "Visit the Aswan High Dam — completed in 1970, one of the largest embankment dams in the world. Your guide explains how it transformed Egyptian agriculture and created Lake Nasser.",
            descriptionAr: "",
            duration: "45 minutes",
          },
          {
            time: "10:00",
            title: "Flight to Abu Simbel",
            titleAr: "",
            description: "Short 35-minute flight from Aswan to Abu Simbel Airport.",
            descriptionAr: "",
            duration: "35 minutes flight",
          },
          {
            time: "11:15",
            title: "Temples of Abu Simbel",
            titleAr: "",
            description:
              "Visit Ramses II's Great Temple — with its four 20-metre colossal seated statues — and the smaller Temple of Nefertari. Both were cut from the cliff and relocated stone by stone in one of history's greatest engineering feats. The Great Temple's interior is aligned so sunlight penetrates the innermost sanctuary twice a year (February 22 and October 22), illuminating the statues of the gods.",
            descriptionAr: "",
            duration: "2 hours",
          },
          {
            time: "13:30",
            title: "Return Flight to Aswan",
            titleAr: "",
            description: "Return flight to Aswan. Afternoon free.",
            descriptionAr: "",
            duration: "35 minutes flight",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Aswan",
      },
      {
        day: 5,
        title: "Edfu & Kom Ombo Temples",
        titleAr: "",
        description:
          "Drive north from Aswan, stopping at Kom Ombo and Edfu before arriving in Luxor for the night.",
        descriptionAr: "",
        activities: [
          {
            time: "08:00",
            title: "Drive North — Stop at Kom Ombo",
            titleAr: "",
            description:
              "Drive north from Aswan to Kom Ombo (~1 hour). Visit the unique dual temple of Sobek and Horus and see the mummified crocodiles.",
            descriptionAr: "",
            duration: "90 minutes at Kom Ombo",
          },
          {
            time: "11:00",
            title: "Continue to Edfu",
            titleAr: "",
            description:
              "Continue north to Edfu (~1 hour). Arrive by horse carriage to the Temple of Horus — the best-preserved ancient temple in Egypt.",
            descriptionAr: "",
            duration: "90 minutes at Edfu",
          },
          {
            time: "13:30",
            title: "Drive to Luxor",
            titleAr: "",
            description: "Continue north to Luxor (~2 hours). Check in and relax for the evening.",
            descriptionAr: "",
            duration: "2 hours driving",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Luxor",
      },
      {
        day: 6,
        title: "Abydos & Dendera Day Trip from Luxor",
        titleAr: "",
        description:
          "Drive north from Luxor to visit two of Egypt's most sacred and least-visited temples.",
        descriptionAr: "",
        activities: [
          {
            time: "07:00",
            title: "Drive to Abydos",
            titleAr: "",
            description: "Drive ~2.5 hours north to the sacred city of Abydos — mythological burial place of Osiris.",
            descriptionAr: "",
            duration: "2.5 hours driving",
          },
          {
            time: "09:30",
            title: "Temple of Seti I at Abydos",
            titleAr: "",
            description:
              "Explore Seti I's temple — home to the finest painted reliefs in Egypt — and discover the Abydos King List and the mysterious Osireion.",
            descriptionAr: "",
            duration: "90 minutes",
          },
          {
            time: "13:00",
            title: "Temple of Hathor at Dendera",
            titleAr: "",
            description:
              "Visit the famous Temple of Hathor — one of the best-preserved temples in Egypt, with intact roof and celebrated astronomical ceiling.",
            descriptionAr: "",
            duration: "2 hours",
          },
          {
            time: "15:30",
            title: "Return to Luxor",
            titleAr: "",
            description: "Drive ~1 hour south back to Luxor.",
            descriptionAr: "",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Luxor",
      },
      {
        day: 7,
        title: "Fly to Cairo — Pyramids of Giza",
        titleAr: "",
        description:
          "Fly from Luxor to Cairo and visit the last of the Seven Wonders of the Ancient World still standing.",
        descriptionAr: "",
        activities: [
          {
            time: "Morning",
            title: "Flight from Luxor to Cairo",
            titleAr: "",
            description: "Fly from Luxor to Cairo (~1 hour). Transfer to hotel.",
            descriptionAr: "",
            duration: "1 hour flight",
          },
          {
            time: "13:00",
            title: "Pyramids of Giza & Great Sphinx",
            titleAr: "",
            description:
              "Visit the three Great Pyramids of Giza (Khufu, Khafre, Menkaure) and the enigmatic Great Sphinx. Your guide explains the full construction story, astronomical alignment, and ongoing archaeological discoveries. Optional: enter the Great Pyramid of Khufu for an extra fee.",
            descriptionAr: "",
            duration: "3 hours",
          },
          {
            time: "17:00",
            title: "Egyptian Museum",
            titleAr: "",
            description:
              "Brief guided visit to the Egyptian Museum in Tahrir Square — the world's largest collection of ancient Egyptian artifacts, including the complete treasures of Tutankhamun.",
            descriptionAr: "",
            duration: "2 hours",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Cairo",
      },
      {
        day: 8,
        title: "Cairo — Islamic & Coptic Cairo, Then Departure",
        titleAr: "",
        description:
          "Explore historic Cairo before your international departure flight.",
        descriptionAr: "",
        activities: [
          {
            time: "09:00",
            title: "Coptic Cairo — Hanging Church & Ben Ezra Synagogue",
            titleAr: "",
            description:
              "Visit Old Cairo's Coptic quarter, including the 4th-century Hanging Church built over a Roman gatehouse, and the 9th-century Ben Ezra Synagogue — one of the oldest in the world, said to be built on the site where Moses was found in the Nile.",
            descriptionAr: "",
            duration: "90 minutes",
          },
          {
            time: "11:00",
            title: "Khan el-Khalili Bazaar",
            titleAr: "",
            description:
              "Browse the labyrinthine Khan el-Khalili bazaar — one of the oldest and largest souks in the Arab world, established in 1382. Final shopping for papyrus, spices, jewelry, and traditional handicrafts.",
            descriptionAr: "",
            duration: "1 hour",
          },
          {
            time: "13:00",
            title: "Lunch & Transfer to Cairo Airport",
            titleAr: "",
            description: "Final lunch in Cairo. Transfer to Cairo International Airport. End of 8-day tour.",
            descriptionAr: "",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: false },
        accommodation: null,
      },
    ],
    importantInfo: [
      "International flights to/from Egypt are NOT included — arrange your own arrival and departure",
      "Internal flights (Aswan–Abu Simbel–Aswan and Luxor–Cairo) are included",
      "All hotels are 4-star and centrally located; 5-star upgrades available on request",
      "A single English-speaking guide accompanies you for the full 8 days",
      "Tipping is customary (~$10–15/day for the guide, ~$3–5/day for drivers)",
    ],
    importantInfoAr: [],
    meetingPoint: {
      description: "Your Aurevian Tours guide meets you at Luxor Airport or Luxor Train Station on Day 1",
      descriptionAr: "",
    },
    accessibility: "Moderate fitness required throughout. Abu Simbel involves walking on sandy and rocky ground.",
    accessibilityAr: "",
  },
];

export { cityData, toursData };