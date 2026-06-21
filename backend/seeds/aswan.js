// seeds/cities/aswan.js

const cityData = {
  name: "Aswan",
  slug: "aswan",
  description:
    "Aswan is one of Egypt's most enchanting cities, nestled along the southern banks of the Nile where the desert meets the river in a breathtaking blend of golden dunes, emerald waters, and ancient wonders. For thousands of years before it ever appeared on a modern map, this stretch of river was already a frontier — the southernmost outpost of the pharaonic world, the gateway through which gold, ivory, ebony, and incense flowed north from the heart of Africa, and the place where Egypt's armies, merchants, and priests all paused before continuing further south or turning back toward the Nile Delta. Granite quarried from Aswan's hills built obelisks and colossal statues that still stand in Luxor, Cairo, and even Rome, carried downriver on barges that floated past the very same boulders travelers photograph today. Once the gateway to sub-Saharan Africa and a vital trade hub for the pharaohs, Aswan carries a rich legacy that spans thousands of years, layered with Nubian kingdoms, Greek and Roman garrisons, and the more recent and equally dramatic story of the Aswan High Dam, which reshaped the entire region and gave rise to the vast inland sea now known as Lake Nasser. From the legendary temples of Abu Simbel to the serene Nubian villages and the magnificent Philae Temple rising from the waters of Lake Nasser, Aswan offers a deeply authentic and unforgettable Egyptian experience — a place where the desert wind, the sound of a felucca's sail filling, and the warm welcome of Nubian hospitality combine into something visitors carry with them long after they leave.",
  country: "Egypt",
  image: "aswan.jpg",
};

const toursData = [
  {
    title: "3-Night Nile Cruise from Aswan to Luxor",
    slug: "3-night-nile-cruise-aswan-luxor",
    description:
      "Embark on one of the world's most legendary journeys — a 3-night cruise along the timeless Nile River from Aswan to Luxor. This is the same stretch of water that carried pharaohs on their state barges, transported granite obelisks downstream to Thebes and Memphis, and witnessed the slow rise and fall of an entire civilization along its banks. Sail past ancient temples, lush riverbanks, and golden desert landscapes while your expert guide brings the stories of the pharaohs to life, weaving together myth, archaeology, and the everyday rhythms of river life that have barely changed in centuries. Along the way you'll visit the temples of Kom Ombo and Edfu, the Valley of the Kings, Karnak, and the Mortuary Temple of Hatshepsut — each one a chapter in an unfolding story that begins in the granite quarries of Aswan and ends amid the colossal halls of ancient Thebes. All the while, you'll enjoy comfortable onboard accommodation, delicious meals served fresh each day, and the quiet pleasure of watching Egypt drift slowly past your cabin window — water buffalo wading in the shallows, children waving from riverside villages, and the sun setting behind palm groves that have lined this river since before the pyramids were built.",
    category: "Tour packages",
    price: {
      original: 509.07,
      discounted: 381.80,
      currency: "USD",
    },
    duration: "4 days",
    language: ["English"],
    rating: {
      score: 7.4,
      reviews: 1613,
    },
    travellers: 20245,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 40,
    availableTimes: ["08:00"],
    meetingPoint: {
      en: "Your hotel lobby in Aswan. The guide will meet you at the agreed time for transfer to the cruise ship.",
    },
    accessibility: {
      en: "This tour involves walking on uneven ancient surfaces and climbing stairs aboard the ship. Not recommended for guests with severe mobility issues.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun cream and hat", "Light layers for evenings on the Nile", "Camera", "Personal medications"],
    },
    importantInfo: {
      en: [
        "Check-in to the cruise ship is on Day 1 after arrival to Aswan.",
        "All cabins are double-occupancy; single supplement available on request.",
        "Meals onboard are full board (breakfast, lunch, and dinner).",
        "Tipping for the crew and guide is customary but not included.",
        "Passport copies are required for all passengers at check-in.",
      ],
    },
    highlights: [
      "3 nights aboard a comfortable Nile cruise ship",
      "Visit the temples of Kom Ombo and Edfu",
      "Explore the Valley of the Kings in Luxor",
      "See Karnak Temple and the Mortuary Temple of Hatshepsut",
      "All meals included onboard",
      "Expert English-speaking guide throughout",
    ],
    includes: ["Accommodation onboard", "All meals", "Guided excursions", "Entrance fees", "English-speaking guide"],
    excludes: ["International flights", "Travel insurance", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Arrival in Aswan & Embarkation",
          description:
            "Your Nile adventure begins today in the golden city of Aswan, where granite hills rise out of the desert and the river runs wide, calm, and impossibly blue against the sand. Your guide will meet you at your hotel in the morning and transfer you to the cruise ship, where you will check in and settle into your cabin — your home for the next three nights, and your private window onto a slowly unfolding panorama of riverbanks, palm groves, and ancient stone. After a welcome lunch onboard, served as the ship still rests at its mooring, the afternoon is spent visiting the majestic Temple of Philae, dedicated to the goddess Isis and perched on an island in the middle of the Nile — accessible by a short motorboat ride that itself feels like crossing into another era. Originally built on a different island entirely and dismantled, block by numbered block, before being reassembled here in a remarkable 20th-century rescue effort, the temple's carved reliefs and towering columns are among the finest surviving examples of ancient Egyptian art, and the story of how this place survived the rising waters of Lake Nasser is almost as compelling as the temple itself. Return to the ship for dinner as it moors at the Aswan dock, with the first evening free to relax on deck and take in the desert sunset over the Nile, the sky turning shades of rose and amber over the silhouettes of distant dunes.",
          steps: [
            { time: "08:00", description: "Hotel pickup by your guide in Aswan." },
            { time: "09:00", description: "Transfer to the Nile cruise ship and check-in to your cabin." },
            { time: "10:00", description: "Welcome briefing by the cruise director; meet your guide and fellow passengers." },
            { time: "13:00", description: "Welcome lunch served onboard." },
            { time: "14:30", description: "Motorboat ride to Philae Island." },
            { time: "15:00", description: "Guided tour of the Temple of Isis at Philae — explore the hypostyle hall, the birth house, and the reliefs of Isis and Osiris." },
            { time: "17:00", description: "Return by motorboat to the cruise ship." },
            { time: "19:00", description: "Dinner onboard. Evening at leisure on the deck." },
          ],
        },
        {
          day: 2,
          title: "Kom Ombo & Edfu — Temples of the Gods",
          description:
            "Rise early as the ship slips its moorings and sets sail northward along the Nile, the engines humming softly beneath you as the city of Aswan slides away behind the wake. The morning brings you to Kom Ombo, where one of Egypt's most unusual temples stands on a hilltop overlooking the river, its golden sandstone glowing in the morning light. The Temple of Kom Ombo is unique in Egypt — a perfectly symmetrical double temple dedicated to two gods: Sobek, the crocodile god of fertility and a creature both feared and revered in antiquity, and Haroeris, the elder form of Horus. Its corridors hold some of ancient Egypt's most intriguing medical instruments, carved in stone — scalpels, forceps, and surgical tools that hint at a sophistication in ancient medicine still being studied today. The adjacent Crocodile Museum displays dozens of genuine ancient mummified crocodiles, offerings to Sobek that were preserved with the same care as royalty. After lunch onboard, the ship continues to Edfu — home to the magnificent Temple of Horus, the best-preserved ancient temple in all of Egypt. Entered through enormous pylon gates adorned with battle scenes celebrating royal triumphs, the inner sanctuary still holds the ancient granite shrine where the statue of Horus once resided, untouched by time in a way that makes the ancient rituals feel almost within reach.",
          steps: [
            { time: "06:00", description: "Ship departs Aswan and sails north along the Nile." },
            { time: "07:00", description: "Breakfast served onboard while the desert landscapes drift past." },
            { time: "09:00", description: "Arrival at Kom Ombo. Horse-drawn carriage or short walk to the temple." },
            { time: "09:30", description: "Guided tour of the Temple of Kom Ombo — explore the twin sanctuaries, the medical instrument carvings, and the Crocodile Museum." },
            { time: "11:30", description: "Return to the ship. Sail onward to Edfu." },
            { time: "13:00", description: "Lunch served onboard." },
            { time: "15:30", description: "Arrival at Edfu. Horse-drawn carriage to the temple entrance." },
            { time: "16:00", description: "Guided tour of the Temple of Horus at Edfu — walk through the towering pylons, the hypostyle hall, the Festival Hall, and the inner sanctuary." },
            { time: "18:00", description: "Return to the ship by carriage." },
            { time: "19:30", description: "Dinner onboard. Optional Egyptian Galabiya party on deck." },
          ],
        },
        {
          day: 3,
          title: "Luxor — Valley of the Kings & the West Bank",
          description:
            "The ship docks in Luxor overnight, its lights reflecting on the dark water beside dozens of other cruise vessels, and the day begins with one of the most anticipated experiences in all of Egypt — a visit to the Valley of the Kings on the West Bank of the Nile. Hidden in the dry, sun-bleached hills across the river from ancient Thebes, this royal burial ground holds the elaborately decorated tombs of pharaohs who ruled Egypt over three millennia ago, their corridors descending deep into the rock toward chambers painted with star-strewn ceilings and processions of gods. Your guide will bring to life the stories behind the painted walls, the Book of the Dead spells meant to guide a pharaoh's soul through the underworld, and the astonishing belief systems of the ancient Egyptians, for whom death was not an ending but a doorway. Nearby, the vast mortuary complex of Deir el-Bahari is home to the spectacular Mortuary Temple of Hatshepsut, built into the dramatic cliffs overlooking the valley in three soaring colonnaded terraces — a tribute to one of Egypt's most powerful and enigmatic rulers, a woman who ruled as pharaoh in her own right and whose monuments still provoke wonder, debate, and admiration thousands of years later.",
          steps: [
            { time: "07:00", description: "Breakfast onboard as the ship arrives in Luxor." },
            { time: "08:30", description: "Disembark and cross the Nile to the West Bank." },
            { time: "09:00", description: "Arrive at the Valley of the Kings. Visit three royal tombs (included in entrance fee; tomb of Tutankhamun at extra cost)." },
            { time: "11:00", description: "Walk to or ride to the Mortuary Temple of Hatshepsut at Deir el-Bahari." },
            { time: "11:30", description: "Guided tour of Hatshepsut's temple — explore the colonnaded terraces, the painted reliefs, and the sacred inner sanctum." },
            { time: "13:00", description: "Return to the ship by road. Lunch served onboard." },
            { time: "15:00", description: "Optional visit to the Colossi of Memnon (two enormous ancient statues beside the road — a quick stop)." },
            { time: "16:30", description: "Return to the ship. Free time to rest or explore Luxor's corniche independently." },
            { time: "19:30", description: "Final dinner onboard." },
          ],
        },
        {
          day: 4,
          title: "Karnak Temple & Departure from Luxor",
          description:
            "Your final morning is devoted to the most extraordinary temple complex ever built — Karnak. A city of temples rather than a single monument, Karnak was added to by generation after generation of pharaohs over nearly 2,000 years, each ruler determined to leave a mark grander than the last, resulting in a vast labyrinth of pylons, courts, obelisks, and the legendary Hypostyle Hall — a forest of 134 towering columns, each decorated from floor to top with intricate hieroglyphics and painted reliefs that once blazed with color under the Egyptian sun. Your guide will walk you through the Avenue of Sphinxes, the Sacred Lake where priests once performed ritual purification, and the inner sanctuaries reserved for only the highest-ranking clergy, piecing together the extraordinary evolution of one of the ancient world's most sacred places — a site that was already over a thousand years old by the time Cleopatra walked its courts. After a final lunch onboard, savored slowly as the realization sets in that this remarkable journey is drawing to a close, you will disembark and be transferred to your hotel or the Luxor train station, carrying with you four days of temples, sunsets, and stories that stretch back to the very beginning of recorded history.",
          steps: [
            { time: "07:00", description: "Breakfast onboard." },
            { time: "08:30", description: "Disembark and transfer to Karnak Temple Complex on the East Bank." },
            { time: "09:00", description: "Guided tour of Karnak — walk through the Avenue of Ram-headed Sphinxes, the Great Hypostyle Hall, the Festival Temple of Thutmose III, the Sacred Lake, and the towering obelisks of Hatshepsut and Thutmose I." },
            { time: "11:30", description: "Return to the ship." },
            { time: "13:00", description: "Final lunch onboard." },
            { time: "14:30", description: "Check out of cabins." },
            { time: "15:00", description: "Transfer to your Luxor hotel or Luxor train station. Tour ends." },
          ],
        },
      ],
    },
  },
  {
    title: "Aswan Dam, Philae Temple & The Unfinished Obelisk Tour",
    slug: "aswan-dam-philae-temple-unfinished-obelisk",
    description:
      "Discover the remarkable layers of Aswan's history on this guided tour covering three of the city's most iconic landmarks, each one revealing a different chapter of the human story written into this stretch of the Nile — engineering ambition, unfinished ancient industry, and devotion to the gods, all within a single, unhurried morning. Begin at the legendary Aswan High Dam, one of the greatest engineering achievements of the modern era and a structure so vast it fundamentally altered the geography, economy, and politics of an entire nation. Then visit the Unfinished Obelisk, still lying in its ancient granite quarry exactly where ancient workers abandoned it more than 3,500 years ago, frozen mid-creation in a way that lays bare the very techniques the pharaohs' stonemasons used to carve and polish solid rock. This single piece of stone, had it been completed, would have been the largest obelisk ever carved — a monument to ambition that never quite made it off the ground. Finally, take a short boat ride to the island of Philae to explore the beautiful Temple of Isis, one of Egypt's most photogenic and well-preserved ancient sanctuaries, rescued from the rising waters of Lake Nasser in one of the great archaeological operations of the 20th century and reassembled here, stone by stone, exactly as it once stood.",
    category: "Day trip",
    price: {
      original: 89.62,
      discounted: 71.70,
      currency: "USD",
    },
    duration: "5 hours",
    language: ["English"],
    rating: {
      score: 8.5,
      reviews: 26,
    },
    travellers: 228,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 15,
    availableTimes: ["08:00", "09:00"],
    meetingPoint: {
      en: "Your hotel lobby in Aswan. The guide will pick you up and take you directly to the first stop.",
    },
    accessibility: {
      en: "The Unfinished Obelisk site involves walking on uneven ground. Philae Temple is accessible by boat and has steps. Not suitable for wheelchairs.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun hat and sunscreen", "Water bottle", "Camera", "Light jacket for the boat ride"],
    },
    importantInfo: {
      en: [
        "Hotel pickup is included within central Aswan. Hotels outside the city center may incur an extra fee.",
        "The boat to Philae Island is shared with other visitors; a private boat can be arranged at extra cost.",
        "Entrance fees to all three sites are included in the tour price.",
        "Wear comfortable, breathable clothing — temperatures in Aswan regularly exceed 35°C.",
      ],
    },
    highlights: [
      "Visit the iconic Aswan High Dam",
      "See the ancient Unfinished Obelisk in its quarry",
      "Boat ride to Philae Island",
      "Explore the stunning Temple of Isis at Philae",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees", "Boat to Philae Island"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Aswan's Icons — Dam, Obelisk & Island Temple",
          description:
            "This half-day tour is one of the most rewarding ways to spend a morning in Aswan, packing in three entirely different layers of history into five focused hours — from 20th-century engineering to 3,500-year-old stoneworking to a temple devoted to one of the most beloved goddesses of the ancient world. You begin at the southern edge of the city with a visit to the Aswan High Dam — a colossal feat of 20th-century engineering that transformed Egypt's relationship with the Nile forever, taming a river whose annual floods had governed the rhythm of Egyptian life since before written history began. Standing on the dam, with the vast expanse of Lake Nasser stretching behind you toward the horizon and the rushing waters of the Nile churning below, the scale of this achievement becomes viscerally real in a way that photographs simply cannot convey. Your guide will explain the dam's construction during the Nasser era, its political significance as a symbol of post-colonial independence, and its dramatic impact on both Egypt's modern economy and the ancient Nubian monuments that had to be relocated — entire temples lifted, cut apart, and moved to higher ground — before the waters rose and swallowed the valley below. From there, you head to one of Aswan's most unexpectedly fascinating sites: the ancient granite quarries where the Unfinished Obelisk lies exactly where it was abandoned, a deep crack running through the stone where the ancient masons' chisels suddenly stopped. Had it been completed and erected, this single piece of stone — still attached to the bedrock from which it was being carved — would have been the largest obelisk in the ancient world, taller even than the famous obelisks that now stand in Luxor, Paris, and Rome. The final stop is Philae Island, reached by a short motorboat crossing across waters that shimmer turquoise in the desert sun, where the Temple of Isis stands in extraordinary beauty against the backdrop of the Nile. Originally located on a different island entirely, the entire temple was dismantled block by block and reassembled here during the 1970s UNESCO rescue operation to save it from the rising waters of Lake Nasser — a feat of preservation almost as impressive as the temple's original construction.",
          steps: [
            { time: "08:00", description: "Hotel pickup from your Aswan accommodation." },
            { time: "08:30", description: "Arrive at the Aswan High Dam. Your guide explains the dam's history, construction, and its transformation of Egypt's Nile relationship. Walk across the dam with views of Lake Nasser on one side and the rushing Nile below." },
            { time: "09:30", description: "Drive to the ancient granite quarries south of Aswan." },
            { time: "10:00", description: "Visit the Unfinished Obelisk — stand beside this 42-meter giant still embedded in the bedrock. Your guide explains why it was abandoned (a crack appeared during carving) and what it reveals about ancient Egyptian quarrying and construction techniques." },
            { time: "11:00", description: "Drive to the Philae Island boat dock." },
            { time: "11:15", description: "Short motorboat crossing to Philae Island." },
            { time: "11:30", description: "Guided tour of the Temple of Isis — explore the great pylon gates, the colonnaded forecourt, the birth house (Mammisi), the hypostyle hall, and the inner sanctuary. Your guide brings to life the legend of Isis, Osiris, and Horus that inspired this temple's creation." },
            { time: "13:00", description: "Motorboat back to the dock. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
    },
  },
  {
    title: "Temple of Philae Sound & Light Show",
    slug: "temple-philae-sound-light-show-aswan",
    description:
      "As night falls over the Nile, the ancient Temple of Philae transforms into a canvas of light and storytelling, shedding its daytime identity as an archaeological monument and becoming something closer to a living stage. On this magical evening experience, you'll take a boat to the island of Philae and witness a spectacular sound and light show that projects dramatic colors onto the temple's ancient walls while a captivating narration recounts the timeless legend of Isis and Osiris — a story of betrayal, death, devotion, and resurrection that lies at the very heart of ancient Egyptian religion and that shaped how an entire civilization understood love, loss, and the afterlife. The columns that stood silent under the desert sun by day suddenly glow amber, then blue, then gold, as the voice of the narrator carries the legend across the water and into the night. It's a deeply atmospheric and unforgettable way to connect with Egypt's mythological past, leaving visitors with a sense of having witnessed something far older and stranger than an ordinary tourist attraction.",
    category: "Performances",
    price: {
      original: 57.40,
      discounted: 45.92,
      currency: "USD",
    },
    duration: "4 hours",
    language: ["English"],
    rating: {
      score: 8.4,
      reviews: 14,
    },
    travellers: 481,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 50,
    availableTimes: ["19:00", "20:00"],
    meetingPoint: {
      en: "Your hotel lobby in Aswan. The guide will collect you and transfer you to the Philae boat dock.",
    },
    accessibility: {
      en: "The show is mostly seated on outdoor benches. Boat crossing required. Uneven surfaces on the island. Not recommended for guests with severe mobility issues.",
    },
    whatToBring: {
      en: ["Light jacket or shawl (evenings on the Nile can be cool)", "Comfortable flat shoes", "Insect repellent", "Camera (no flash during the show)"],
    },
    importantInfo: {
      en: [
        "The show is conducted in English on most nights; check availability for Arabic, French, or German sessions.",
        "The show takes place outdoors; bring a light layer as evenings by the Nile can be cool.",
        "Photography is permitted before and after the show but not during the narration.",
        "The show lasts approximately 45 minutes; total duration includes transfers and the boat crossing.",
      ],
    },
    highlights: [
      "Evening boat ride to Philae Island",
      "Spectacular sound and light show at the Temple of Isis",
      "Dramatic narration of the legend of Isis and Osiris",
      "Stunning night views of the illuminated temple",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Show entrance", "Boat to Philae Island", "Hotel pickup and drop-off"],
    excludes: ["Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "An Evening of Myth & Light at Philae",
          description:
            "As the sun sets over the Sahara and the Nile takes on the deep blue of night, this evening experience offers one of the most atmospheric encounters with ancient Egypt imaginable — a complete departure from the heat and bustle of daytime sightseeing. You'll be collected from your hotel as darkness begins to fall and driven to the boat dock at Shellal, just south of the Aswan High Dam, the desert air finally cooling after the heat of the day. A short motorboat crossing brings you to Philae Island, which by night is transformed into something otherworldly — the temple's columns, pylons, and carved walls lit in shifting shades of amber, blue, and gold, the reliefs of gods and pharaohs suddenly cast in dramatic relief against the darkness. You'll take your seat on the outdoor terraces, the cool night breeze drifting off the lake, and the show begins: a 45-minute narrated journey through the ancient legend of Isis and Osiris, projected through colored lights and a rich dramatic soundtrack that swells and falls with the rhythm of the story. The tale of the god Osiris's death at the hands of his jealous brother Seth, his resurrection through the devoted magic of Isis, and the birth and eventual triumph of their son Horus unfolds across the temple walls in a performance that is genuinely moving, even for visitors who arrived skeptical of sound-and-light shows in general. After the show, you'll have a few quiet moments to linger on the island, the temple now empty of crowds and lit only by the fading glow of the installation, before the boat returns you to the dock and your guide transfers you back to your hotel.",
          steps: [
            { time: "19:00", description: "Hotel pickup from your Aswan accommodation as dusk settles." },
            { time: "19:30", description: "Arrive at the Shellal boat dock. Board the motorboat to Philae Island." },
            { time: "19:45", description: "Arrive on Philae Island. Walk through the illuminated temple grounds to your seats on the outdoor viewing terrace." },
            { time: "20:00", description: "The Sound and Light Show begins — 45 minutes of narrated drama, colored lights, and music telling the legend of Isis and Osiris across the ancient temple walls." },
            { time: "20:45", description: "Show ends. Free time to walk among the illuminated columns and take photographs." },
            { time: "21:15", description: "Board the motorboat back to the dock." },
            { time: "21:30", description: "Transfer back to your hotel. Tour ends." },
          ],
        },
      ],
    },
  },
  {
    title: "Elephantine Island Boat Tour",
    slug: "elephantine-island-boat-tour-aswan",
    description:
      "Escape the city and glide across the calm waters of the Nile on a traditional felucca to Elephantine Island, the largest island in Aswan and one of the longest continuously inhabited places on the planet. This lush, peaceful island has been inhabited since prehistoric times — long before the first pharaoh ever wore a crown — and is packed with history, including ancient ruins, the Aswan Museum, and the famous Nilometer used to measure the Nile's flood levels, a device upon which an entire civilization's tax rates and harvest predictions once depended. Living Nubian villages still occupy parts of the island today, their painted houses and daily rhythms offering a glimpse of a culture that has endured every dynasty, empire, and modern transformation that has swept through this corner of Egypt. The surrounding landscapes of granite boulders, swaying palms, and turquoise water make this one of the most scenic boat trips in all of Egypt, a gentle counterpoint to the grander, more monumental sites nearby.",
    category: "Day trip",
    price: {
      original: 36.32,
      discounted: 29.05,
      currency: "USD",
    },
    duration: "4 hours",
    language: ["English"],
    rating: {
      score: 6.3,
      reviews: 6,
    },
    travellers: 242,
    freeCancellation: true,
    minAge: 3,
    maxGroupSize: 12,
    availableTimes: ["08:00", "10:00", "14:00"],
    meetingPoint: {
      en: "Aswan Corniche felucca dock, near the Mövenpick Resort. Your guide will be waiting with a sign.",
    },
    accessibility: {
      en: "Felucca boarding requires stepping down into a low boat. The island has uneven rocky paths. Not suitable for wheelchairs.",
    },
    whatToBring: {
      en: ["Comfortable flat shoes", "Sun hat and sunscreen", "Water bottle", "Camera", "Small bag — space is limited on a felucca"],
    },
    importantInfo: {
      en: [
        "Hotel pickup is not included; you make your own way to the Corniche dock.",
        "The felucca ride is weather-dependent; in case of strong winds the tour may be modified.",
        "Entrance fees to the Aswan Museum and ancient ruins are included.",
        "Life jackets are provided onboard the felucca.",
      ],
    },
    highlights: [
      "Traditional felucca ride across the Nile",
      "Explore the ancient ruins of Elephantine Island",
      "Visit the Aswan Museum on the island",
      "See the ancient Nilometer",
      "Enjoy stunning Nile views and island scenery",
    ],
    includes: ["Felucca ride", "Guide", "Entrance fees"],
    excludes: ["Hotel pickup", "Meals", "Tips"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Felucca Crossing & Island Exploration",
          description:
            "Elephantine Island sits in the middle of the Nile directly in front of Aswan's corniche and has been continuously inhabited for longer than almost any place on earth, its layers of settlement stretching back to a time before Egypt itself existed as a unified kingdom. Its southern tip contains one of the oldest settlements in Egypt, predating the pharaohs by centuries, and its strategic position made it the ancient border post and trading gateway between Egypt and sub-Saharan Africa — the place where ivory, gold, exotic animals, and enslaved people once passed from one world into another. Today it offers one of Aswan's most enjoyable and peaceful half-day experiences — a gentle felucca crossing, a walk through two surviving Nubian villages whose residents still speak the Nubian language at home, and a visit to the island's museum and ancient sites. The felucca ride itself is the opening pleasure: the silence of the sail catching wind, the proximity to the water close enough to trail a hand across its surface, and the views of Aswan's corniche, the Aga Khan Mausoleum gleaming white on its hilltop, and the great golden sand dunes of the West Bank beyond are already worth the journey before you've even set foot on the island.",
          steps: [
            { time: "08:00", description: "Meet your guide at the Corniche felucca dock. Board the traditional felucca sailboat." },
            { time: "08:15", description: "Sail across the Nile to the northern end of Elephantine Island. Enjoy views of Aswan's waterfront, the Mövenpick hotel on the island, and the desert West Bank." },
            { time: "08:30", description: "Disembark and begin the walking tour. First stop: the ancient ruins of the Temple of Khnum at the southern tip of the island — one of the oldest temple sites in Egypt, dedicated to the ram-headed creator god." },
            { time: "09:15", description: "Visit the Aswan Museum, which houses artifacts discovered on the island including pottery, statues, and objects from the pre-dynastic to Roman periods." },
            { time: "10:00", description: "Walk to the ancient Nilometer — a stone staircase descending into the Nile carved with measurement scales used for millennia to record the river's annual flood levels and predict Egypt's agricultural yield and tax rates." },
            { time: "10:30", description: "Stroll through the living Nubian villages of Siou and Koti on the island — brightly painted houses, narrow lanes, and local residents going about their daily lives offer a genuine glimpse of island culture." },
            { time: "11:30", description: "Return to the northern dock and board the felucca for the crossing back to the Aswan corniche." },
            { time: "12:00", description: "Arrive at the Corniche dock. Tour ends." },
          ],
        },
      ],
    },
  },
  {
    title: "Abu Simbel Day Trip",
    slug: "abu-simbel-day-trip-aswan",
    description:
      "Journey deep into the Egyptian south to witness one of the most awe-inspiring monuments ever built — the twin temples of Abu Simbel, a destination so remote and so monumental that simply reaching it feels like an expedition in its own right. Carved into the mountainside by Ramses II over 3,000 years ago, these colossal temples were built not merely as places of worship but as unmistakable declarations of divine power, designed to be the first and most overwhelming sight that greeted anyone approaching Egypt from the south. They were famously relocated in the 1960s in a UNESCO-led rescue operation considered one of the greatest feats of archaeological engineering in history, lifted in more than 2,000 individual blocks and reassembled on higher ground to save them from the rising waters of Lake Nasser. The Great Temple of Ramses II, guarded by four enormous seated statues each as tall as a six-story building, and the smaller but equally graceful Temple of Nefertari are among the most breathtaking sights in all of Egypt, a destination that rewards the long desert drive many times over the moment the temples first come into view.",
    category: "Day trip",
    price: {
      original: 110.71,
      discounted: 88.57,
      currency: "USD",
    },
    duration: "7-8 hours",
    language: ["English"],
    rating: {
      score: 7.7,
      reviews: 326,
    },
    travellers: 4086,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 15,
    availableTimes: ["04:00"],
    meetingPoint: {
      en: "Your hotel lobby in Aswan. The guide will meet you in the early hours for the drive south to Abu Simbel.",
    },
    accessibility: {
      en: "Abu Simbel involves walking on sand and uneven ground outside the temples, and ducking through low doorways inside. Not suitable for guests with severe mobility issues. The interior chambers can feel enclosed.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun hat and high SPF sunscreen", "Water (plenty — the desert is extreme)", "Light breakfast snacks for the early drive", "Camera", "Warm layer for the pre-dawn departure"],
    },
    importantInfo: {
      en: [
        "Departure is very early — typically between 04:00 and 05:00 — to travel in convoy as required by Egyptian authorities.",
        "The drive from Aswan to Abu Simbel is approximately 3 hours each way through the desert.",
        "Abu Simbel is a UNESCO World Heritage Site; entry is strictly regulated.",
        "The temples align with the sun twice a year (February 22 and October 22) — these dates are busier and prices may vary.",
        "Photography inside the temples is generally not permitted.",
      ],
    },
    highlights: [
      "Visit the legendary Great Temple of Ramses II",
      "Explore the Temple of Nefertari",
      "Learn about the incredible UNESCO relocation project",
      "Admire the four colossal statues at the entrance",
      "Hotel pickup at dawn included",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees", "Transport"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Desert Drive & the Temples of Ramses II",
          description:
            "Abu Simbel is not simply a monument — it is one of the defining experiences of ancient Egypt, and arguably the single most dramatic man-made sight on the African continent. The twin temples carved into the sandstone cliff above what is now Lake Nasser were built by Ramses II at the height of his power in the 13th century BC, designed not only as a place of worship but as an unmistakable declaration of divine kingship visible to all who approached from the south — a message of strength and permanence carved directly into the bones of the earth. When the Aswan High Dam was built and the waters began to rise in the 1960s, the international community mounted the greatest archaeological rescue operation in history: both temples were cut into over 2,000 individual blocks, some weighing up to 30 tons, and reassembled on higher ground, 65 meters above their original position, so precisely that the solar alignment inside the Great Temple — where twice a year the rising sun illuminates the sanctuary's innermost statues in a phenomenon that still draws crowds today — was preserved almost exactly, down to the angle of the light. The day begins long before dawn in Aswan, as the convoy south departs in the cool desert darkness, headlights cutting through a landscape of nothing but sand and stars. The 280-kilometer drive through the Western Desert is itself a remarkable journey — flat, silent, and immense, the kind of emptiness that makes the eventual sight of the temples at the water's edge feel almost like a mirage stepping into solid reality.",
          steps: [
            { time: "04:00", description: "Hotel pickup in Aswan. Transfer to the convoy departure point." },
            { time: "04:30", description: "Convoy departs south along the desert highway toward Abu Simbel. Light snacks available during the drive." },
            { time: "07:30", description: "Arrive at Abu Simbel. First glimpse of the four colossal seated statues of Ramses II guarding the facade of the Great Temple." },
            { time: "08:00", description: "Guided tour begins. Stand before the Great Temple of Ramses II — your guide explains the statues (each 20 meters tall), the solar alignment phenomenon, and the story of the UNESCO rescue operation." },
            { time: "08:30", description: "Enter the Great Temple. Walk through the Hypostyle Hall with its eight Osiris-form pillars bearing the face of Ramses II, into the sanctuary chamber where the four gods — Ramses II, Amun, Ra-Horakhty, and Ptah — sit in eternal darkness." },
            { time: "09:15", description: "Exit the Great Temple and move to the smaller Temple of Nefertari, dedicated to Ramses's beloved queen and the goddess Hathor. Examine the six colossal standing statues at the facade — unusually, Nefertari's statues are the same height as those of the pharaoh." },
            { time: "09:45", description: "Free time at the site. Walk around to see the temples from different angles, sit by the lake, and take photographs of this extraordinary landscape." },
            { time: "10:30", description: "Depart Abu Simbel. Return convoy journey north to Aswan." },
            { time: "13:30", description: "Arrive back in Aswan. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
    },
  },
  {
    title: "2-Day Abu Simbel Tour + Light and Sound Show",
    slug: "2-day-abu-simbel-tour-light-sound-show-aswan",
    description:
      "Experience the full magic of Abu Simbel on this relaxed 2-day tour that lets you avoid the early morning rush entirely, trading the standard 4 a.m. convoy departure for a civilized mid-morning start and a far deeper, more contemplative encounter with one of the ancient world's most overwhelming sights. Arrive in Abu Simbel at your own pace and spend quality time exploring the magnificent temples of Ramses II and Nefertari with a knowledgeable guide, free from the pressure of a ticking clock or a queue of buses waiting outside. As night falls, stay on for the spectacular light and sound show, where the temples are dramatically illuminated and the story of Ramses II — his battles, his queens, his obsession with eternal legacy — unfolds in an unforgettable performance against the very stone he commanded to be carved. Overnight accommodation in Abu Simbel is included, granting you something almost no day-tripper ever gets: a second visit the following morning, when the temples are wrapped in stillness and the desert light turns the sandstone facade to gold.",
    category: "Tour packages",
    price: {
      original: 363.43,
      discounted: null,
      currency: "USD",
    },
    duration: "2 days",
    language: ["English"],
    rating: {
      score: 8.7,
      reviews: 42,
    },
    travellers: 466,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 15,
    availableTimes: ["08:00"],
    meetingPoint: {
      en: "Your hotel lobby in Aswan. The guide will meet you in the morning for the drive to Abu Simbel.",
    },
    accessibility: {
      en: "Involves walking on sand and uneven terrain. Low doorways inside the temples require ducking. Not suitable for guests with severe mobility issues.",
    },
    whatToBring: {
      en: ["Overnight bag with essentials", "Comfortable walking shoes", "Sun protection", "Water", "Camera", "Light evening layer for the sound and light show"],
    },
    importantInfo: {
      en: [
        "This tour travels outside the mandatory convoy hours, allowing a more relaxed pace — ideal for photographers and those who want extra time at the temples.",
        "Overnight accommodation in Abu Simbel is in a comfortable hotel close to the temples.",
        "Breakfast on Day 2 is included; other meals are at your own expense.",
        "Photography is not permitted inside the temples.",
      ],
    },
    highlights: [
      "2-day relaxed visit to Abu Simbel without early wake-up",
      "Guided tour of the temples of Ramses II and Nefertari",
      "Evening light and sound show at Abu Simbel",
      "Overnight accommodation included",
      "Hotel pickup from Aswan included",
    ],
    includes: ["1 night accommodation in Abu Simbel", "Guided tours", "Entrance fees", "Light and sound show", "Transport from Aswan"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Aswan to Abu Simbel — Afternoon Arrival & Temples",
          description:
            "Unlike the standard dawn convoy, this tour departs Aswan mid-morning, transforming the drive into a relaxed desert journey rather than a pre-dawn dash through darkness. By the time you arrive at Abu Simbel in the early afternoon, the day-trip crowds that arrived at dawn have largely departed, the parking lots emptying out as buses head back north, and you'll have the temples in relative peace, the desert quiet settling back over the site. Your guide takes you through both the Great Temple of Ramses II and the Temple of Nefertari at an unhurried pace, explaining not just the monuments themselves but the extraordinary story of how they were saved — and the human drama of the archaeologists, engineers, and workers who disassembled and reassembled them block by block over four years of painstaking labor, racing against a rising waterline that gave no quarter. As evening falls, the site transforms once more: the tourists are gone, the desert silence returns almost completely, and then the sound and light show begins — colors sweeping the ancient stone in slow waves, and the voice of Ramses II, or at least the voice given to him by the show's narration, rolling across the still water of Lake Nasser into the surrounding dark.",
          steps: [
            { time: "08:00", description: "Hotel pickup in Aswan." },
            { time: "08:30", description: "Depart for Abu Simbel by private vehicle. Enjoy the desert highway journey at a relaxed pace." },
            { time: "11:30", description: "Arrive at Abu Simbel. Check in to the hotel and drop off your overnight bag." },
            { time: "12:30", description: "Lunch at your own expense at one of the local restaurants near the site." },
            { time: "14:00", description: "Enter the temple site. Guided tour of the Great Temple of Ramses II — explore the facade statues, the hypostyle hall, the vestibule, and the inner sanctuary." },
            { time: "15:00", description: "Move to the Temple of Nefertari. Guided tour of the exterior colossal figures and the interior painted chambers dedicated to Hathor." },
            { time: "16:00", description: "Free time at the site — walk the full perimeter, photograph the temples from the lakeside, or sit quietly as the light changes on the stone." },
            { time: "17:30", description: "Return to the hotel for dinner at your own expense and rest before the evening show." },
            { time: "20:00", description: "Transfer to the Abu Simbel Sound and Light Show." },
            { time: "20:30", description: "The show begins — dramatic colored lights illuminate the temples as the story of Ramses II's reign, his battle of Kadesh, and his divine legacy unfolds in narration and music." },
            { time: "21:15", description: "Show ends. Return to the hotel for the night." },
          ],
        },
        {
          day: 2,
          title: "Sunrise at Abu Simbel & Return to Aswan",
          description:
            "One of the great privileges of staying overnight at Abu Simbel is the morning — before the convoy from Aswan arrives, rumbling in across the desert in a long line of headlights, the temples belong entirely to you. Rise early and return to the site as the sun climbs above the desert horizon, casting the great statues of Ramses II in long golden light that seems to set the sandstone itself on fire, the shadows stretching dramatically across the facade in a way that no midday photograph can ever capture. This is when photographers and those who simply want to feel the full weight of the place come into their own, standing in near-total silence before monuments built to be seen exactly like this. After breakfast at the hotel, your guide will return you to the temples for any final time before the drive north back to Aswan, the desert highway unspooling behind you as the temples slowly disappear from view, already feeling like something almost too vivid to have been entirely real.",
          steps: [
            { time: "06:00", description: "Optional early morning visit to Abu Simbel before the day-trip crowds arrive. Sunrise light on the temple facade is exceptional for photography." },
            { time: "07:30", description: "Breakfast at the hotel (included)." },
            { time: "09:00", description: "Optional second visit to the temples if desired, or free time in Abu Simbel village." },
            { time: "10:00", description: "Check out of hotel. Depart Abu Simbel for the drive back to Aswan." },
            { time: "13:00", description: "Arrive in Aswan. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
    },
  },
  {
    title: "Transfers in Aswan",
    slug: "transfers-aswan",
    description:
      "Move around Aswan with ease and comfort using our reliable private transfer service, designed for travelers who simply want to get from one point to another without the stress, the haggling, or the uncertainty of navigating an unfamiliar city in an unfamiliar language. A professional chauffeur will meet you at the airport, your hotel, or any address you choose and take you smoothly to your destination, watching for your name on arrival so you never have to search a crowded hall wondering who is there for you. Whether you're heading to the cruise terminal to begin a multi-day Nile journey, checking into a hotel after a long flight, or simply need a reliable pickup point for an early-morning day trip, our transfers ensure you arrive on time, in comfort, and without the stress of navigating unfamiliar roads, haggling with taxi drivers, or worrying about whether you'll make your connection.",
    category: "Transfers",
    price: {
      original: 32.80,
      discounted: null,
      currency: "USD",
    },
    duration: "Varies",
    language: ["English"],
    rating: {
      score: 7.9,
      reviews: 44,
    },
    travellers: 580,
    freeCancellation: true,
    minAge: 0,
    maxGroupSize: 6,
    availableTimes: ["Available 24/7"],
    meetingPoint: {
      en: "Aswan International Airport arrivals hall, or your hotel lobby — whichever you specify at booking.",
    },
    accessibility: {
      en: "Vehicles are air-conditioned private cars or minivans. Please inform us in advance if you require a wheelchair-accessible vehicle.",
    },
    whatToBring: {
      en: ["Your booking confirmation", "Flight or cruise details for timing", "Contact number for the driver"],
    },
    importantInfo: {
      en: [
        "Transfers are private — you will not share the vehicle with other passengers.",
        "The driver will hold a sign with your name at the airport arrivals hall.",
        "Please provide your flight or arrival details at the time of booking to ensure punctual pickup.",
        "Waiting time at the airport is up to 60 minutes after the scheduled landing time.",
        "Additional stops or extended routes may incur extra charges.",
      ],
    },
    highlights: [
      "Private door-to-door transfer service",
      "Professional and punctual chauffeur",
      "Air-conditioned vehicle",
      "Airport, hotel, and custom pickups",
      "Available 24/7",
    ],
    includes: ["Private vehicle", "Professional driver"],
    excludes: ["Tips", "Entrance fees to any attractions"],
    itinerary: null,
  },
  {
    title: "4-Day Lake Nasser Cruise",
    slug: "4-day-lake-nasser-cruise-aswan",
    description:
      "Sail across the vast and serene waters of Lake Nasser on this all-inclusive 4-day cruise, one of the most unique travel experiences in Africa and a journey that feels worlds apart from the busier, more familiar Nile cruise route further north. Lake Nasser, one of the world's largest man-made lakes, stretching for hundreds of kilometers into Sudan, is home to a remarkable collection of ancient temples relocated during the construction of the Aswan High Dam, including Abu Simbel, Wadi el-Seboua, and Amada — monuments that would otherwise have vanished beneath the water forever. With a knowledgeable guide, comfortable cabins, and all meals provided, this cruise offers an intimate and exclusive way to discover monuments that few travelers ever see, sailing through a landscape of stark desert beauty where the silence is broken only by the wake of the ship and, occasionally, the call of a desert bird passing overhead.",
    category: "Tour packages",
    price: {
      original: 1072.26,
      discounted: null,
      currency: "USD",
    },
    duration: "4 days",
    language: ["English"],
    rating: {
      score: 8.2,
      reviews: 21,
    },
    travellers: 134,
    freeCancellation: true,
    minAge: 8,
    maxGroupSize: 30,
    availableTimes: ["09:00"],
    meetingPoint: {
      en: "Aswan High Dam dock. Transfer from your Aswan hotel to the embarkation point is included.",
    },
    accessibility: {
      en: "Lake Nasser cruise ships have stairs between decks. Shore excursions involve walking on sandy and uneven terrain. Not suitable for guests with severe mobility issues.",
    },
    whatToBring: {
      en: ["Light summer clothing for days", "Warmer layer for evenings on the lake", "Comfortable walking shoes", "High SPF sun protection", "Binoculars (optional — excellent for birdwatching on the lake)", "Camera", "Personal medications"],
    },
    importantInfo: {
      en: [
        "All meals are included throughout the cruise.",
        "Entrance fees to all temple sites visited are included.",
        "Lake Nasser cruises carry far fewer passengers than Nile cruises — expect an intimate experience.",
        "The temples on Lake Nasser are among the least visited ancient sites in Egypt; some days you may have them entirely to yourselves.",
        "Tipping for the crew and guide is appreciated but not obligatory.",
      ],
    },
    highlights: [
      "4-day all-inclusive cruise on Lake Nasser",
      "Visit the temples of Abu Simbel, Wadi el-Seboua, and Amada",
      "Comfortable cabin accommodation onboard",
      "All meals included throughout the cruise",
      "Expert guide for all temple visits",
    ],
    includes: ["Accommodation onboard", "All meals", "Guided excursions", "Entrance fees", "English-speaking guide"],
    excludes: ["International flights", "Travel insurance", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Aswan — Embarkation & Kalabasha Temples",
          description:
            "Your Lake Nasser adventure begins at Aswan, where you'll transfer to the embarkation dock and board your intimate cruise ship, noticeably smaller and quieter than the large Nile cruise vessels further north — a hint of the more exclusive journey ahead. After settling into your cabin and a welcome briefing, the ship makes its first stop just south of the High Dam — the Kalabasha complex, home to three remarkable temples gathered on a single promontory above the lake, their relocated stones still bearing the marks of the rescue operation that saved them. The Temple of Kalabasha itself is one of the largest freestanding temples in Nubia, a grand Roman-era monument dedicated to the Nubian god Mandulis, its scale surprising for a site so rarely mentioned outside specialist guidebooks. Beside it, the rock-cut Temple of Beit El-Wali preserves some of the most vivid painted battle reliefs in Egypt, showing Ramses II charging into battle against the Nubians and Libyans in scenes still rich with original color after thousands of years. The elegant kiosk of Kertassi — just a few columns and a cornice, almost fragile in its simplicity — completes the group with unexpected grace, a quiet coda after the grandeur of Kalabasha.",
          steps: [
            { time: "09:00", description: "Hotel pickup from Aswan and transfer to the Lake Nasser cruise dock." },
            { time: "10:00", description: "Embarkation and cabin check-in. Welcome briefing from the cruise director." },
            { time: "12:00", description: "Welcome lunch onboard." },
            { time: "14:00", description: "Short transfer to the Kalabasha temples complex." },
            { time: "14:30", description: "Guided tour of the Temple of Kalabasha — walk through the pylon, the hypostyle hall, and the sanctuary dedicated to the Nubian god Mandulis." },
            { time: "15:30", description: "Visit Beit El-Wali — explore the rock-cut temple's vivid battle reliefs and painted chambers." },
            { time: "16:00", description: "See the Kertassi kiosk — a small but elegant temple fragment overlooking the lake." },
            { time: "17:00", description: "Return to the ship. Sail south across Lake Nasser." },
            { time: "19:30", description: "Dinner onboard. Evening at leisure as the ship sails through the desert night." },
          ],
        },
        {
          day: 2,
          title: "Wadi el-Seboua & Dakka Temples",
          description:
            "Today the ship reaches Wadi el-Seboua — 'Valley of the Lions' — where an avenue of human-headed sphinxes, weathered but still imposing, leads to one of the most remarkable temples on the lake. Built by Ramses II, the temple was later converted into a Christian church in the early centuries AD, and the paintings of saints applied directly over the ancient Egyptian reliefs were partially restored in the 20th century, leaving a ghostly palimpsest of two faiths occupying the same walls — pharaonic gods peeking out from beneath Coptic saints in a visual record of religious transformation spanning thousands of years. Nearby, the Temple of Dakka offers another architectural layer entirely — begun in the Meroitic era by a Nubian king, added to by Ptolemaic pharaohs centuries later, and further extended under the Roman emperor Augustus, making it a genuine palimpsest of cultures and centuries built one atop another. Its well-preserved pylon tower can be climbed for panoramic views across the lake, the water stretching to the horizon in every direction with barely another building in sight.",
          steps: [
            { time: "07:00", description: "Breakfast onboard as the ship reaches Wadi el-Seboua." },
            { time: "08:30", description: "Disembark for the guided tour of Wadi el-Seboua. Walk the sphinx avenue and enter the temple — your guide explains both the original pharaonic design and its later Christian transformation." },
            { time: "10:00", description: "Short walk or transfer to the Temple of Dakka. Explore the temple's multi-era construction and climb the pylon for lake views." },
            { time: "11:30", description: "Return to the ship." },
            { time: "13:00", description: "Lunch onboard. Afternoon sailing across the tranquil lake." },
            { time: "15:30", description: "Optional deck time for relaxation, birdwatching, or reading as the lake's extraordinary desolate beauty passes by." },
            { time: "19:30", description: "Dinner onboard. Sunset over Lake Nasser from the deck." },
          ],
        },
        {
          day: 3,
          title: "Amada & Derr Temples + Abu Simbel",
          description:
            "The third day is the crown of the cruise — the ship reaches the southernmost point of the journey, the site of Abu Simbel, but not before stopping at two more remarkable monuments that most travelers to Egypt never even hear about. The Temple of Amada is the oldest temple on Lake Nasser, built during the reigns of Thutmose III and Amenhotep II in the 15th century BC, and preserves some of the finest and most vividly colored painted reliefs in all of Nubia, the pigments still startlingly bright against the pale sandstone. The nearby rock-cut Temple of Derr, built by Ramses II and dedicated to Ra-Horakhty, completes the morning before the ship makes the short final sail to Abu Simbel, where you'll spend the afternoon exploring both the Great Temple and the Temple of Nefertari with plenty of time and no crowds — a luxury almost unimaginable for a site this famous, made possible only by approaching from the water rather than the desert road.",
          steps: [
            { time: "06:30", description: "Early breakfast as the ship arrives at Amada." },
            { time: "07:30", description: "Guided tour of the Temple of Amada — explore the oldest temple on the lake, its remarkably preserved painted reliefs, and its historical inscriptions covering events from two pharaohs' reigns." },
            { time: "09:00", description: "Short transfer to the rock-cut Temple of Derr. Guided tour of the interior chambers and their reliefs dedicated to Ra-Horakhty." },
            { time: "10:30", description: "Return to the ship. Final sail south to Abu Simbel." },
            { time: "12:00", description: "Arrive at Abu Simbel. Lunch onboard." },
            { time: "14:00", description: "Guided tour of the Great Temple of Ramses II at Abu Simbel — stand before the four colossal statues, enter the hypostyle hall, and reach the inner sanctuary." },
            { time: "15:30", description: "Guided tour of the Temple of Nefertari." },
            { time: "16:30", description: "Free time at Abu Simbel — walk along the lake, photograph the temples, and absorb the atmosphere." },
            { time: "18:00", description: "Return to the ship. Gala dinner onboard." },
          ],
        },
        {
          day: 4,
          title: "Abu Simbel Sound & Light Show & Return",
          description:
            "The final morning belongs to Abu Simbel once more. Before the convoy from Aswan arrives, you'll have the temples in the calm of the early hours — the ideal time to revisit the sanctuaries or simply sit in the presence of the great statues as the desert warms around you, the morning light still soft and forgiving on the carved stone. After breakfast and a last look at this extraordinary place, the ship begins the return journey north across the lake to Aswan, arriving in the afternoon in time for your onward travel arrangements, the temples slowly receding into the haze behind you until they vanish entirely from view, leaving only the memory of four days spent in one of the most remote and rewarding corners of ancient Egypt.",
          steps: [
            { time: "06:30", description: "Optional early morning return visit to Abu Simbel before the day-trip crowds arrive — the best light for photography." },
            { time: "08:00", description: "Breakfast onboard." },
            { time: "09:00", description: "Depart Abu Simbel. The ship sails north back across Lake Nasser toward Aswan." },
            { time: "13:00", description: "Lunch onboard during the return sail." },
            { time: "16:00", description: "Arrive at Aswan dock. Disembarkation and check-out." },
            { time: "16:30", description: "Transfer to your Aswan hotel or the train station. Tour ends." },
          ],
        },
      ],
    },
  },
  {
    title: "Nubian Village Day Trip",
    slug: "nubian-village-day-trip-aswan",
    description:
      "Step away from ancient temples and discover the warm, colorful world of Nubian culture on this authentic day trip, an experience built less around monuments and more around people, color, and a hospitality that visitors often describe as one of the most memorable parts of their entire trip to Egypt. Cross the Nile on a traditional felucca to reach Gharb Soheil, one of the most genuine and welcoming Nubian villages in Egypt, where the homes themselves seem to have been painted with the desert sunset in mind. Here you'll wander through vivid blue and orange painted houses, meet local families who open their courtyards to visitors with genuine warmth rather than rehearsed performance, learn about Nubian traditions that survived displacement, dam construction, and the slow pressures of modernization, taste local food rich with flavors found nowhere else along the Nile, and perhaps visit a Nubian home for tea, sharing a moment of quiet hospitality that says more about this culture than any museum placard ever could. It's a rare and deeply human experience that brings the living culture of southern Egypt to life, a reminder that this region's story didn't end with the pharaohs but continues, vividly, today.",
    category: "Boat tour",
    price: {
      original: 52.72,
      discounted: null,
      currency: "USD",
    },
    duration: "3-4 hours",
    language: ["English"],
    rating: {
      score: 7.4,
      reviews: 41,
    },
    travellers: 508,
    freeCancellation: true,
    minAge: 3,
    maxGroupSize: 12,
    availableTimes: ["09:00", "14:00"],
    meetingPoint: {
      en: "Aswan Corniche felucca dock, near the EgyptAir office. Your guide will be waiting.",
    },
    accessibility: {
      en: "Felucca boarding requires stepping carefully into a low boat. Village paths are unpaved. Not suitable for wheelchairs.",
    },
    whatToBring: {
      en: ["Comfortable flat shoes", "Light, respectful clothing (covering shoulders and knees is appreciated)", "Small amount of local currency for purchases or tips", "Camera — but always ask before photographing residents", "Sun protection"],
    },
    importantInfo: {
      en: [
        "Hotel pickup is not included; make your own way to the Corniche dock.",
        "This is a living village — please be respectful of residents and their privacy.",
        "The guide will translate and facilitate interactions with local families.",
        "Local tea and refreshments may be offered inside a Nubian home — accepting is a gesture of respect.",
        "Small handicrafts and Nubian souvenirs are available for purchase in the village.",
      ],
    },
    highlights: [
      "Felucca ride across the Nile to the Nubian village",
      "Explore the colorful streets of Gharb Soheil",
      "Meet local Nubian families and learn about their traditions",
      "Taste authentic Nubian food and tea",
      "Unique cultural experience away from the tourist trail",
    ],
    includes: ["Felucca ride", "Guide", "Village visit"],
    excludes: ["Hotel pickup", "Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Across the Nile to Gharb Soheil",
          description:
            "The Nubian people are one of the world's oldest civilizations, with a history that predates even the pharaohs, and yet their culture is among the least known to most visitors to Egypt, overshadowed in guidebooks by the more famous monuments their ancestors helped quarry, transport, and sometimes build. The Nubian homeland stretched along the Nile from Aswan deep into what is now Sudan, a kingdom and culture in its own right rather than a mere footnote to Egyptian history, and when the Aswan High Dam flooded the valley in the 1960s, entire communities were relocated — a displacement that Nubians still carry as a collective wound, their ancestral villages now resting silently beneath the waters of Lake Nasser. Today, the villages on the West Bank near Aswan are home to Nubian families who have kept their language, music, architecture, and way of life alive despite everything, and visiting Gharb Soheil is one of the most genuine and moving cultural encounters available to any traveler in Egypt. The experience begins with a felucca crossing of the Nile — a few minutes of silence and wind and water that feels like crossing into a different world entirely. On the far bank, the painted houses of Gharb Soheil rise from the desert edge in blues, yellows, and oranges, decorated with murals of boats, fish, camels, and geometric patterns that carry deep symbolic meaning in Nubian tradition, each color and motif chosen with intention rather than mere decoration.",
          steps: [
            { time: "09:00", description: "Meet your guide at the Corniche felucca dock. Board the traditional felucca and cross the Nile to the West Bank." },
            { time: "09:20", description: "Arrive at the Gharb Soheil landing. Begin the walk into the village." },
            { time: "09:30", description: "Stroll through the painted streets of Gharb Soheil. Your guide explains the symbolism of the house murals, the Nubian architectural tradition of bright colors, and the meaning of the decorative motifs." },
            { time: "10:15", description: "Visit to a Nubian family home — meet your hosts, sit in the traditional courtyard, learn about daily Nubian life, and share tea and perhaps karkadeh (hibiscus drink) with the family." },
            { time: "11:00", description: "Walk to the village's small community spaces — see traditional Nubian crafts, musical instruments, and listen to your guide explain the history of the Nubian displacement and the ongoing effort to preserve Nubian culture." },
            { time: "11:45", description: "Browse the small artisan market for handmade Nubian goods — woven baskets, beaded jewelry, pottery, and spices." },
            { time: "12:15", description: "Return to the felucca landing and sail back to the Aswan Corniche." },
            { time: "12:30", description: "Arrive at the Corniche dock. Tour ends." },
          ],
        },
      ],
    },
  },
  {
    title: "Kalabasha, Beit El-Wali & Kertassi Temples Tour",
    slug: "kalabasha-beit-wali-kertassi-temples-aswan",
    description:
      "Explore three extraordinary temples near Aswan that span different periods of Egyptian history, all relocated to their current site on the shores of Lake Nasser during the UNESCO rescue operation of the 1960s — a trio of monuments that, despite their scale and beauty, remain largely unknown even among seasoned travelers to Egypt. The Temple of Kalabasha is one of the largest freestanding temples in Nubia, built during the Roman era and dedicated to a Nubian solar deity whose worship long outlasted the empire that built his temple. Beit El-Wali is a rock-cut temple from the reign of Ramses II, filled with vivid battle reliefs that still carry their original color in places, depicting campaigns against Nubian and Libyan forces with a vividness rarely matched elsewhere. The small Kertassi kiosk, with its elegant columns standing almost alone against the sky, completes this remarkable trio with a quiet, understated grace that feels like a deliberate counterpoint to the grandeur of its neighbors.",
    category: "Day trip",
    price: {
      original: 73.22,
      discounted: 58.58,
      currency: "USD",
    },
    duration: "4 hours",
    language: ["English"],
    rating: {
      score: 6.8,
      reviews: 5,
    },
    travellers: 56,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 12,
    availableTimes: ["08:00", "10:00"],
    meetingPoint: {
      en: "Aswan High Dam area, south side. Your guide will meet you and arrange the boat across to the temple island.",
    },
    accessibility: {
      en: "The temples are reached by boat. Involves walking on sandy and uneven ground. Beit El-Wali has low doorways. Not suitable for wheelchairs.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun hat and sunscreen", "Water bottle", "Camera"],
    },
    importantInfo: {
      en: [
        "Hotel pickup is not included; travel to the Aswan High Dam area independently.",
        "The temples are on an island in Lake Nasser reached by boat — the boat ride is included.",
        "Entrance fees are included in the tour price.",
        "The temples are rarely crowded — you may have the site almost to yourselves.",
      ],
    },
    highlights: [
      "Visit the grand Roman-era Temple of Kalabasha",
      "Explore the rock-cut Temple of Beit El-Wali with its vivid reliefs",
      "See the elegant Kertassi kiosk on Lake Nasser",
      "Learn about the UNESCO temple relocation project",
      "Boat ride across Lake Nasser included",
    ],
    includes: ["Guide", "Boat ride", "Entrance fees"],
    excludes: ["Hotel pickup", "Meals", "Tips"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Three Temples on the Lake — A Half-Day in Nubia",
          description:
            "This half-day tour visits one of the most concentrated and least-visited groups of ancient temples in Egypt — three structures from three different eras gathered on a single promontory above the waters of Lake Nasser, just south of the Aswan High Dam, a site that feels almost like a private discovery compared to the crowded courts of Karnak or Luxor. Their presence here is itself a story: all three were dismantled and relocated from their original sites in the early 1960s, before the rising waters of the new lake swallowed the Nubian valley forever, erasing villages, farmland, and ancient sites that could not be saved in time. The boat crossing from the dam to the temple island takes only a few minutes, but the approach across the lake — with the great wall of the dam behind you and the open desert stretching in every direction — is a quietly powerful introduction to the landscape of Lake Nasser, a vastness that makes the scale of the relocation effort feel even more astonishing. The Temple of Kalabasha dominates the site: a large, well-preserved Greco-Roman temple dedicated to the Nubian solar deity Mandulis, built in the reign of Augustus and decorated in a style that mixes Egyptian pharaonic convention with Hellenistic detail, a visual record of two civilizations meeting on Nubian soil.",
          steps: [
            { time: "08:00", description: "Meet your guide at the Aswan High Dam south side. Brief orientation before boarding the boat." },
            { time: "08:15", description: "Short boat crossing to the Kalabasha temple island on Lake Nasser." },
            { time: "08:30", description: "Guided tour of the Temple of Kalabasha — enter through the pylon, walk through the open courtyard and hypostyle hall, and reach the inner sanctuary. Your guide explains the Nubian god Mandulis and the temple's unique Greco-Roman building style." },
            { time: "09:30", description: "Move to Beit El-Wali. Enter the rock-cut temple carved in the reign of Ramses II. Examine the dramatically colored battle reliefs in the forecourt — Ramses charging enemy armies in his chariot — and the more intimate painted inner chambers." },
            { time: "10:15", description: "Visit the Kertassi kiosk — a small open-columned structure of great elegance, dedicated to Hathor and Isis, with views across the still waters of the lake." },
            { time: "10:45", description: "Free time on the promontory — walk to the water's edge, photograph the temples from different angles, and absorb the extraordinary silence of this rarely visited corner of Egypt." },
            { time: "11:15", description: "Board the boat for the return crossing." },
            { time: "11:30", description: "Arrive back at the High Dam area. Tour ends." },
          ],
        },
      ],
    },
  },
  {
    title: "Edfu & Kom Ombo Temples Tour from Aswan",
    slug: "edfu-kom-ombo-temples-tour-aswan",
    description:
      "Head north from Aswan on this full-day guided tour to two of the Nile Valley's most impressive ancient temples, both stops you would otherwise only glimpse briefly from the deck of a passing cruise ship, but which here receive the time and attention they truly deserve. At Edfu, you'll discover the magnificent Temple of Horus, dedicated to the falcon-headed god and considered one of the best-preserved temples in Egypt, with towering pylons and richly carved walls that reveal the secrets of ancient Egyptian religion in a level of architectural completeness found almost nowhere else in the country. At Kom Ombo, an extraordinary double temple dedicated to both Sobek the crocodile god and Haroeris the falcon god awaits, its perfectly symmetrical design a rare architectural curiosity, along with a fascinating collection of genuine mummified crocodiles that once terrified and fascinated ancient worshippers in equal measure.",
    category: "Day trip",
    price: {
      original: 118.33,
      discounted: 94.66,
      currency: "USD",
    },
    duration: "10 hours",
    language: ["English"],
    rating: {
      score: 9.3,
      reviews: 3,
    },
    travellers: 67,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 15,
    availableTimes: ["07:00"],
    meetingPoint: {
      en: "Your hotel lobby in Aswan. The guide and vehicle will collect you for the drive north.",
    },
    accessibility: {
      en: "Both temples involve walking on uneven ancient paving. Edfu has a horse-carriage approach. Not suitable for guests with severe mobility issues.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun hat and sunscreen", "Water bottle", "Camera", "Light jacket for the early morning drive"],
    },
    importantInfo: {
      en: [
        "Hotel pickup from central Aswan is included.",
        "The horse-drawn carriage to Edfu Temple is part of the local experience and is included.",
        "Entrance fees to both temples are included.",
        "Lunch is not included — your guide can recommend local restaurants in Edfu or Kom Ombo.",
      ],
    },
    highlights: [
      "Visit the spectacular Temple of Horus at Edfu",
      "Explore the unique double temple at Kom Ombo",
      "See the mummified crocodiles on display",
      "Full-day guided excursion with hotel pickup",
      "Travel along the scenic Nile Valley",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees", "Transport"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Temples of Horus & the Crocodile God",
          description:
            "This full-day tour follows the Nile north from Aswan to two of the river valley's most magnificent ancient temples. Both are regular stops on the Aswan-to-Luxor Nile cruise route, but visiting them by road from Aswan gives you the flexibility to spend more time at each site without the rushing of a ship's schedule, free to linger in a hypostyle hall or examine a particular relief for as long as your curiosity demands. The Temple of Horus at Edfu is arguably the most complete ancient Egyptian temple in existence — so well preserved that its structural logic, from the entrance pylon through the successive courts and halls to the inner sanctuary, can be read almost like an architectural blueprint laid out in stone. Built between 237 and 57 BC in the Ptolemaic period, long after the pharaonic era had ended, it was constructed in the ancient style as a deliberate act of cultural preservation by Greek-descended rulers eager to legitimize their reign in distinctly Egyptian terms. The Temple of Kom Ombo, built on a curve of the Nile with the river visible through its columns, is unique for its perfect bilateral symmetry — two temples in one, dedicated to two gods, with every chamber, corridor, and staircase doubled, a layout that still puzzles and delights visitors trying to work out which half belongs to which deity.",
          steps: [
            { time: "07:00", description: "Hotel pickup in Aswan. Drive north along the Nile Valley road toward Kom Ombo." },
            { time: "08:30", description: "Arrive at Kom Ombo. Walk to the temple entrance with views of the Nile." },
            { time: "09:00", description: "Guided tour of the Temple of Kom Ombo — walk through the twin entrance pylon, explore the dual sanctuaries dedicated to Sobek and Haroeris, examine the carved medical instrument reliefs, and visit the Crocodile Museum displaying genuine ancient mummified crocodiles found at the site." },
            { time: "10:30", description: "Depart Kom Ombo. Continue north to Edfu." },
            { time: "11:30", description: "Arrive in Edfu. Board a traditional horse-drawn carriage for the short ride to the temple entrance — a quintessential Edfu experience." },
            { time: "12:00", description: "Guided tour of the Temple of Horus at Edfu — stand before the towering pylon decorated with reliefs of Ptolemy XII smiting enemies; walk through the open Festival Court; enter the magnificent Hypostyle Hall; proceed through the vestibule into the sanctuary where the original granite shrine of Horus still stands." },
            { time: "13:30", description: "Free time in Edfu. Lunch at your own expense at a local restaurant (your guide will recommend options)." },
            { time: "14:30", description: "Carriage ride back to the vehicle. Depart Edfu for the return journey to Aswan." },
            { time: "17:00", description: "Arrive back in Aswan. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
    },
  },
  {
    title: "Civitatis eSIM Card Egypt",
    slug: "civitatis-esim-card-egypt-aswan",
    description:
      "Stay connected throughout your Egyptian adventure with this convenient eSIM card designed for travelers, taking one more uncertainty off your plate before you even land. Whether you're navigating to the temples of Abu Simbel, sharing photos from the Nile, or looking up information about the monuments you're visiting, this eSIM gives you reliable mobile data access across Egypt without the hassle of finding a local SIM card, queuing at an airport kiosk, or trying to explain your needs to a vendor in a language you may not speak. Available in multiple durations to match the length of your trip, it activates digitally in minutes and keeps you connected from the moment you touch down through your final day exploring Aswan, Luxor, Cairo, or wherever else your Egyptian journey takes you.",
    category: "Additional services",
    price: {
      original: 5.50,
      discounted: null,
      currency: "USD",
    },
    duration: "7-30 days",
    language: ["English"],
    rating: {
      score: 7.7,
      reviews: 107,
    },
    travellers: 2096,
    freeCancellation: false,
    minAge: 0,
    maxGroupSize: null,
    availableTimes: null,
    meetingPoint: null,
    accessibility: null,
    whatToBring: null,
    importantInfo: {
      en: [
        "The eSIM is activated digitally — no physical SIM swap required.",
        "Ensure your phone is unlocked and eSIM-compatible before purchasing.",
        "Available in 7, 15, and 30-day plans.",
        "Works on 4G/LTE networks across Egypt including at all major tourist sites.",
        "Voice calls and SMS are not included.",
      ],
    },
    highlights: [
      "Mobile data coverage across Egypt",
      "No need to find a local SIM card",
      "Available in 7, 15, and 30-day plans",
      "Easy digital activation on your phone",
      "Works at all major Egyptian tourist sites",
    ],
    includes: ["eSIM data plan for selected duration"],
    excludes: ["Voice calls", "SMS"],
    itinerary: null,
  },
  {
    title: "5-Day Cruise on Lake Nasser",
    slug: "5-day-cruise-lake-nasser-aswan",
    description:
      "For those who want to fully immerse themselves in the ancient wonders of Nubia, this 5-day all-inclusive Lake Nasser cruise is the ultimate experience, a slower and far more thorough journey than the standard 4-day version, designed for travelers who would rather linger over every temple than rush between highlights. Sail across one of the world's largest reservoirs and visit a series of extraordinary temples that were rescued from the rising waters decades ago, including the awe-inspiring temples of Abu Simbel, Wadi el-Seboua, Dakka, Maharraqa, and Amada — five distinct chapters of Nubian and pharaonic history laid out along a single waterway. Every day brings a new discovery as your expert guide reveals the stories behind these remarkable monuments, from forgotten Nubian kings to Roman governors to the pharaohs who first commissioned these temples in granite and sandstone meant to outlast empires.",
    category: "Tour packages",
    price: {
      original: 1286.20,
      discounted: null,
      currency: "USD",
    },
    duration: "5 days",
    language: ["English"],
    rating: {
      score: 7.5,
      reviews: 4,
    },
    travellers: 18,
    freeCancellation: true,
    minAge: 8,
    maxGroupSize: 30,
    availableTimes: ["09:00"],
    meetingPoint: {
      en: "Aswan High Dam dock. Transfer from your Aswan hotel is included.",
    },
    accessibility: {
      en: "Cruise ships have stairs between decks. Shore excursions involve walking on sandy and rocky terrain. Not suitable for guests with severe mobility issues.",
    },
    whatToBring: {
      en: ["Light summer clothing", "Warmer layer for evenings", "Walking shoes", "High SPF sunscreen", "Binoculars (optional)", "Camera", "Personal medications"],
    },
    importantInfo: {
      en: [
        "All meals are included throughout the 5-day cruise.",
        "Entrance fees to all sites visited are included.",
        "This is one of the most exclusive cruise experiences in Egypt — passenger numbers are very limited.",
        "Some temple sites on this itinerary are accessible only by Lake Nasser cruise — they cannot be visited any other way.",
      ],
    },
    highlights: [
      "5-day all-inclusive cruise on Lake Nasser",
      "Visit Abu Simbel, Wadi el-Seboua, Dakka, and Amada temples",
      "Comfortable cabin accommodation onboard",
      "All meals and guided excursions included",
      "Exclusive access to rarely visited monuments",
    ],
    includes: ["Accommodation onboard", "All meals", "Guided excursions", "Entrance fees", "English-speaking guide"],
    excludes: ["International flights", "Travel insurance", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Aswan — Embarkation, Kalabasha & Beit El-Wali",
          description:
            "Your five-day Lake Nasser journey begins at the Aswan High Dam dock, where you'll board your intimate cruise ship and settle into your cabin, the gentle rocking of the boat against the dock the first sign that this trip will move at an entirely different pace than the bustling Nile cruises further north. After a welcome lunch, the ship makes its first stop at the Kalabasha complex — three relocated temples gathered on a promontory above the lake's northern shore, survivors of an engineering project that reshaped the entire region. The Temple of Kalabasha, one of the grandest Greco-Roman temples in Nubia, is your main focus, alongside the painted battle reliefs of Beit El-Wali and the elegant columns of the Kertassi kiosk, three very different monuments united only by the fact that all three would now lie underwater had they not been moved.",
          steps: [
            { time: "09:00", description: "Hotel transfer to the Aswan High Dam embarkation dock." },
            { time: "10:00", description: "Board the Lake Nasser cruise ship and check in to your cabin." },
            { time: "12:00", description: "Welcome lunch onboard." },
            { time: "14:00", description: "Short transfer to the Kalabasha temple complex." },
            { time: "14:30", description: "Guided tour of the Temple of Kalabasha, Beit El-Wali, and the Kertassi kiosk." },
            { time: "17:00", description: "Return to ship. Sail south." },
            { time: "19:30", description: "Dinner onboard." },
          ],
        },
        {
          day: 2,
          title: "Wadi el-Seboua, Dakka & Maharraqa",
          description:
            "Today the ship visits three temples in a single remarkable morning — Wadi el-Seboua with its avenue of sphinxes and its extraordinary Christian-over-Egyptian painted overlay, a visual record of religious change spanning centuries; the multi-era Temple of Dakka with its climbable pylon and sweeping lake views; and the small but exceptional Temple of Maharraqa, the southernmost ancient monument relocated for the UNESCO rescue operation, built in the Roman era and noteworthy for its unusual spiral staircase, a rare architectural feature in ancient Egyptian construction that still puzzles visiting architects.",
          steps: [
            { time: "07:00", description: "Breakfast as the ship arrives at Wadi el-Seboua." },
            { time: "08:00", description: "Guided tour of the Temple of Wadi el-Seboua — sphinx avenue, pharaonic and Christian layers." },
            { time: "09:30", description: "Walk to the Temple of Dakka. Guided tour and optional pylon climb for views." },
            { time: "10:30", description: "Visit the Temple of Maharraqa — Roman period, unique spiral staircase." },
            { time: "11:30", description: "Return to ship. Sail south toward Amada." },
            { time: "13:00", description: "Lunch onboard." },
            { time: "15:00", description: "Afternoon at leisure on deck as the lake's immense desert landscape passes." },
            { time: "19:30", description: "Dinner onboard." },
          ],
        },
        {
          day: 3,
          title: "Amada & Derr Temples",
          description:
            "The ship reaches the temples of Amada and Derr — the oldest monuments on the lake, predating even the more famous sites further south. The Temple of Amada, built by Thutmose III and Amenhotep II, preserves the most vividly colored painted reliefs in Nubia, including two historically crucial texts that record actual events from the pharaohs' reigns, inscriptions historians still rely on to reconstruct this period of Egyptian military history. The Temple of Derr, a rock-cut structure from the time of Ramses II, adds another layer of 19th-dynasty grandeur before the afternoon passage toward Abu Simbel, the lake widening around the ship as the desert shoreline grows increasingly remote and untouched.",
          steps: [
            { time: "07:00", description: "Early breakfast as the ship arrives at Amada." },
            { time: "08:00", description: "Guided tour of the Temple of Amada — oldest temple on the lake, exceptional painted reliefs, historical inscriptions." },
            { time: "09:30", description: "Transfer to the Temple of Derr. Guided tour of Ramses II's rock-cut temple dedicated to Ra-Horakhty." },
            { time: "11:00", description: "Return to ship. Sail toward Abu Simbel." },
            { time: "13:00", description: "Lunch onboard." },
            { time: "16:00", description: "Arrive at Abu Simbel." },
            { time: "16:30", description: "First guided visit to the Great Temple of Ramses II and the Temple of Nefertari — the afternoon light is ideal." },
            { time: "18:30", description: "Return to ship. Gala dinner onboard." },
          ],
        },
        {
          day: 4,
          title: "Abu Simbel — Full Day & Sound and Light Show",
          description:
            "An entire day devoted to Abu Simbel — the undisputed highlight of any Lake Nasser cruise, and the reason most passengers chose this itinerary in the first place. The morning visit gives you the temples before the day-trip convoys from Aswan arrive, the site still wrapped in the cool stillness of early desert morning. The afternoon is free to return independently, sit by the lake watching the light shift across the water, or simply remain on the ship enjoying the rare luxury of unhurried time. As night falls, the Abu Simbel Sound and Light Show illuminates the temples in a dramatic performance narrating the story of Ramses II, the colored lights sweeping across a facade you've now had an entire day to come to know intimately.",
          steps: [
            { time: "06:30", description: "Early morning visit to Abu Simbel — the temples are quiet and the light is extraordinary." },
            { time: "08:30", description: "Return to ship for breakfast." },
            { time: "10:00", description: "Optional second visit to the temples or free time on the ship." },
            { time: "13:00", description: "Lunch onboard." },
            { time: "15:00", description: "Afternoon at leisure — return to the temples, explore the village, or relax onboard." },
            { time: "20:00", description: "Abu Simbel Sound and Light Show — dramatic illumination of the temple facade and narration of Ramses II's story." },
            { time: "21:15", description: "Return to ship. Final evening onboard." },
          ],
        },
        {
          day: 5,
          title: "Abu Simbel Sunrise & Return to Aswan",
          description:
            "The final morning offers one last sunrise at Abu Simbel — one of the most moving sights in Egypt — before the ship makes the long return sail north to Aswan, the temples shrinking slowly behind the wake until they disappear into the desert haze entirely. The journey across the lake in reverse offers its own pleasures: the changing light on the water, the desert silence, and the growing anticipation of what comes next in your Egyptian adventure, the five days behind you already settling into the particular kind of memory reserved for journeys that felt, even while happening, slightly larger than ordinary life.",
          steps: [
            { time: "06:00", description: "Optional sunrise visit to Abu Simbel — the last and arguably the most beautiful light of the trip." },
            { time: "08:00", description: "Breakfast onboard." },
            { time: "09:00", description: "Depart Abu Simbel. The ship sails north across Lake Nasser." },
            { time: "13:00", description: "Lunch onboard during the return sail." },
            { time: "17:00", description: "Arrive at Aswan dock. Disembarkation." },
            { time: "17:30", description: "Transfer to your Aswan hotel or train station. Tour ends." },
          ],
        },
      ],
    },
  },
  {
    title: "Aswan Felucca Tour",
    slug: "aswan-felucca-tour",
    description:
      "There is no more peaceful way to experience the Nile than drifting along its waters on a traditional felucca sailboat, a vessel design barely changed since the time of the pharaohs and still, even now, the most natural way to see this stretch of river. On this relaxed one-hour tour, you'll glide past Aswan's most scenic spots — Elephantine Island, the Aga Khan Mausoleum perched on its hilltop like a pale crown against the desert sky, and the desert cliffs of the West Bank — as the warm breeze fills the sails and the timeless sounds of the river surround you: water lapping against the hull, distant calls from riverside villages, and the occasional creak of old wooden rigging that has carried sailors across this same stretch of water for centuries. A simple, beautiful, and deeply memorable experience that asks nothing of you but to sit back and let the Nile do the rest.",
    category: "Boat tour",
    price: {
      original: 16.40,
      discounted: null,
      currency: "USD",
    },
    duration: "1 hour",
    language: ["English"],
    rating: {
      score: 0,
      reviews: 0,
    },
    travellers: 43,
    freeCancellation: true,
    minAge: 3,
    maxGroupSize: 8,
    availableTimes: ["08:00", "10:00", "14:00", "16:00", "17:30"],
    meetingPoint: {
      en: "Aswan Corniche felucca dock, in front of the Sofitel Legend Old Cataract Hotel. Your captain will be waiting by the felucca.",
    },
    accessibility: {
      en: "Boarding the felucca requires stepping down carefully from the dock into a low-seated boat. Not suitable for guests with significant mobility issues. Life jackets available.",
    },
    whatToBring: {
      en: ["Sun hat and sunscreen", "Light jacket for afternoon or evening departures", "Camera", "Water bottle"],
    },
    importantInfo: {
      en: [
        "Hotel pickup is not included; make your own way to the Corniche dock.",
        "Life jackets are provided onboard.",
        "The sunset departure (17:30) is particularly recommended for its golden light on the Nile and the West Bank dunes.",
        "The tour operates in most weather conditions; in case of strong wind the captain will advise.",
      ],
    },
    highlights: [
      "Relaxing felucca ride on the Nile in Aswan",
      "Pass by Elephantine Island and the Aga Khan Mausoleum",
      "Scenic views of the West Bank desert cliffs",
      "Traditional Egyptian sailing experience",
      "Perfect for sunset or morning outings",
    ],
    includes: ["Felucca ride", "Sailor/guide"],
    excludes: ["Hotel pickup", "Tips"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "An Hour on the Nile — Aswan's Most Peaceful Experience",
          description:
            "The felucca — a traditional wooden sailboat with a single lateen sail — is the oldest form of transport on the Nile and one of the most enduring images of Egypt, appearing in tomb paintings thousands of years old in almost exactly the same form it takes today. Aswan is its spiritual home: the river here is broad and calm, free of the busy cargo traffic that dominates stretches further north, and the surrounding landscape — Elephantine Island to the west, the great sand dunes of the West Bank beyond, and the pale desert hills behind the city — is among the most beautiful on the entire Nile, a composition that has drawn painters and photographers for well over a century. This one-hour tour makes no grand promises. It offers the simple, profound pleasure of moving quietly across water in the open air, in a vessel that has not essentially changed in 3,000 years. Your experienced captain will read the wind and navigate you past the most scenic stretches of Aswan's waterfront, pointing out landmarks and offering commentary — or simply letting the silence of the river speak for itself, an option many passengers find they prefer once the sail catches and the city noise finally fades behind them.",
          steps: [
            { time: "17:30", description: "Meet your captain at the Corniche felucca dock. Board the felucca — step down carefully into the low-sided boat and take your seat on the cushioned benches." },
            { time: "17:35", description: "The sail fills and the felucca moves out into the Nile. The sounds of the city fade. Your captain steers south, parallel to the Corniche." },
            { time: "17:45", description: "Pass the southern end of Elephantine Island — your captain explains its history as the oldest inhabited site in Aswan, dating back to predynastic Egypt. Look across to the Nubian villages on the island's western shore." },
            { time: "18:00", description: "The felucca rounds the northern tip of Elephantine and you see the Aga Khan Mausoleum on its hilltop above the West Bank — the marble dome glowing in the late afternoon sun. Your captain shares the story of the Aga Khan III, who fell in love with Aswan and chose to be buried here." },
            { time: "18:15", description: "The boat drifts back south with the current, the great sand dunes of the West Bank catching the last of the golden light. This is the moment most people want to photograph." },
            { time: "18:30", description: "Return to the Corniche dock. Disembark. Tour ends." },
          ],
        },
      ],
    },
  },
  {
    title: "Egypt Tour Package: 8 Days All-Inclusive from Aswan",
    slug: "egypt-tour-package-8-days-all-inclusive-aswan",
    description:
      "Discover the greatest highlights of Egypt from south to north on this comprehensive 8-day all-inclusive tour starting from Aswan, a single seamless journey that traces nearly the entire arc of ancient Egyptian civilization from its southern frontier to the great monuments of Memphis and the Delta. Begin your journey with the legendary temples of Abu Simbel before heading through the Nile Valley to Luxor, ancient Thebes, where temples and tombs are layered more thickly than almost anywhere else on earth, then continuing to Cairo to see the Pyramids of Giza, the Sphinx, and the Grand Egyptian Museum, the final and arguably most overwhelming chapter of any trip through Egypt. Every detail is taken care of — transport, accommodation, meals, guided excursions, and entrance fees are all included for a seamless Egyptian adventure, allowing you to focus entirely on the monuments, the history, and the country itself rather than the logistics of getting from one site to the next. This journey is proudly organized by Aurevian Tours, bringing together eight days of expert guiding, comfortable transport, and seamless logistics across the full sweep of Egypt's ancient and modern landscapes.",
    category: "Tour packages",
    price: {
      original: 1507.87,
      discounted: 1130.90,
      currency: "USD",
    },
    duration: "8 days",
    language: ["English"],
    rating: {
      score: 0,
      reviews: 0,
    },
    travellers: 13,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 16,
    availableTimes: ["08:00"],
    meetingPoint: {
      en: "Your hotel lobby in Aswan on Day 1. The guide will meet you to begin the tour.",
    },
    accessibility: {
      en: "This tour involves significant walking at multiple sites. Some locations have uneven terrain, sand, and stairs. Not suitable for guests with severe mobility issues.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes for all 8 days", "Sun protection throughout", "Light layers for cooler Cairo evenings", "Camera", "Power adapter (Egypt uses Type C/F plugs)", "Personal medications", "Travel insurance documents"],
    },
    importantInfo: {
      en: [
        "All domestic transport is included, including the flight from Luxor to Cairo.",
        "7 nights accommodation is included (2 in Aswan, 2 in Luxor, 3 in Cairo).",
        "All meals are included throughout the 8 days.",
        "International flights to and from Egypt are not included.",
        "Tipping for guides and drivers is customary and greatly appreciated.",
        "A valid passport is required at all sites and for the domestic flight.",
      ],
    },
    highlights: [
      "Visit the temples of Abu Simbel",
      "Explore Luxor's Valley of the Kings and Karnak Temple",
      "See the Pyramids of Giza and the Sphinx",
      "Visit the Grand Egyptian Museum in Cairo",
      "All transport, accommodation, and meals included",
    ],
    includes: [
      "7 nights accommodation",
      "All meals",
      "All transport (including domestic flights)",
      "Guided excursions",
      "Entrance fees",
      "English-speaking guide",
    ],
    excludes: ["International flights to/from Egypt", "Tips", "Personal expenses", "Travel insurance"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Arrival in Aswan & Philae Temple",
          description:
            "Your Egyptian adventure begins in Aswan, Egypt's southernmost major city, where the Nile runs wide and clear between granite boulders and golden desert hills, a far gentler introduction to the country than the noise and density of Cairo would offer. You'll be met at your hotel by your Aurevian Tours guide and given an orientation to the days ahead, a chance to ask questions and settle any nerves before the real journey begins. The afternoon is spent at the Temple of Philae — one of Egypt's most beautiful ancient sanctuaries, perched on an island in the Nile and dedicated to the goddess Isis, a fitting first stop for a trip that will trace this civilization's relationship with its gods all the way north to the pyramids. In the evening, settle into your hotel and enjoy Aswan's warm, relaxed atmosphere, a gentle first night before eight days of temples, tombs, and monuments still to come.",
          steps: [
            { time: "09:00", description: "Meet your guide at your Aswan hotel. Orientation briefing for the full 8-day itinerary." },
            { time: "10:00", description: "Drive to the Shellal boat dock." },
            { time: "10:15", description: "Motorboat to Philae Island." },
            { time: "10:30", description: "Guided tour of the Temple of Isis at Philae — explore the great pylon, the birth house, the colonnaded forecourt, and the inner sanctuary." },
            { time: "12:30", description: "Return to Aswan. Lunch included." },
            { time: "14:00", description: "Free afternoon to explore the Aswan Corniche, the local souk, or rest at the hotel." },
            { time: "19:30", description: "Dinner included." },
          ],
        },
        {
          day: 2,
          title: "Abu Simbel Day Trip",
          description:
            "An early start for the most dramatic day of the tour: the drive south across the desert to Abu Simbel, where the colossal temples of Ramses II and Nefertari await, their statues visible from a remarkable distance against the pale stone of the cliffs. Carved into the mountainside over 3,000 years ago and relocated in the 1960s to save them from Lake Nasser's rising waters, these temples represent one of humanity's greatest achievements in both art and engineering, a double feat separated by three millennia but united in the same determination to defy time itself. Your guide brings their story to life before the return drive to Aswan, the desert highway carrying you back toward the comparative comfort of the city as the sun climbs higher over the dunes.",
          steps: [
            { time: "04:00", description: "Hotel pickup for the pre-dawn convoy departure to Abu Simbel." },
            { time: "07:30", description: "Arrive at Abu Simbel." },
            { time: "08:00", description: "Guided tour of the Great Temple of Ramses II — the colossal facade statues, the hypostyle hall, and the inner sanctuary." },
            { time: "09:15", description: "Guided tour of the Temple of Nefertari." },
            { time: "10:00", description: "Free time at the site. Photography around the temples and lakeside." },
            { time: "10:30", description: "Depart Abu Simbel for the return drive to Aswan." },
            { time: "13:30", description: "Arrive in Aswan. Lunch included." },
            { time: "15:00", description: "Rest of day free in Aswan." },
            { time: "19:30", description: "Dinner included." },
          ],
        },
        {
          day: 3,
          title: "Aswan to Luxor via Kom Ombo & Edfu",
          description:
            "Today you travel north from Aswan to Luxor by road, stopping at two of the Nile Valley's most impressive temples along the way, breaking up the journey with two of ancient Egypt's most remarkable architectural achievements rather than simply watching the desert pass by. At Kom Ombo, the extraordinary double temple dedicated to Sobek and Haroeris stands on a curve of the Nile, its symmetry as striking now as it must have been to ancient worshippers. At Edfu, the magnificent Temple of Horus — the best-preserved ancient temple in Egypt — awaits behind towering pylon gates, a site so intact it feels almost as if its priests might return at any moment. Arrive in Luxor in the late afternoon and check in to your hotel, the ancient city of Thebes spreading out before you on both banks of the river.",
          steps: [
            { time: "07:00", description: "Breakfast at the hotel. Check out." },
            { time: "08:00", description: "Depart Aswan by private vehicle heading north." },
            { time: "09:30", description: "Arrive at Kom Ombo. Guided tour of the double temple and Crocodile Museum." },
            { time: "11:00", description: "Depart for Edfu." },
            { time: "12:00", description: "Arrive at Edfu. Horse-drawn carriage to the temple." },
            { time: "12:30", description: "Guided tour of the Temple of Horus at Edfu." },
            { time: "14:00", description: "Lunch included in Edfu." },
            { time: "15:00", description: "Depart Edfu and continue north to Luxor." },
            { time: "17:30", description: "Arrive in Luxor. Check in to hotel. Dinner included." },
          ],
        },
        {
          day: 4,
          title: "Luxor West Bank — Valley of the Kings & Hatshepsut",
          description:
            "Luxor's West Bank is the ancient burial ground of the pharaohs — a landscape of dry valleys and hidden tombs that remains one of the most extraordinary places on Earth, a place where the dead were given an entire necropolis stretching for miles along the desert edge. Today you'll visit the Valley of the Kings, the Mortuary Temple of Hatshepsut, and the Colossi of Memnon, with your guide unravelling the stories of the rulers buried beneath these hills, their names and deeds carved into walls meant to be read by gods rather than tourists, though the experience of standing before them today feels just as powerful regardless of the original audience.",
          steps: [
            { time: "07:00", description: "Breakfast at the hotel." },
            { time: "08:00", description: "Cross the Nile to the West Bank." },
            { time: "08:30", description: "Arrive at the Valley of the Kings. Visit three royal tombs with your guide." },
            { time: "10:30", description: "Drive to the Mortuary Temple of Hatshepsut at Deir el-Bahari." },
            { time: "11:00", description: "Guided tour of Hatshepsut's temple — the three colonnaded terraces, painted reliefs, and inner sanctum." },
            { time: "12:30", description: "Brief stop at the Colossi of Memnon." },
            { time: "13:00", description: "Return to Luxor. Lunch included." },
            { time: "15:00", description: "Afternoon free in Luxor — walk the East Bank corniche or visit the Luxor souk." },
            { time: "19:30", description: "Dinner included." },
          ],
        },
        {
          day: 5,
          title: "Luxor East Bank — Karnak & Luxor Temple, then Fly to Cairo",
          description:
            "The morning is devoted to Karnak — one of the greatest temple complexes ever built — before a visit to the smaller but magnificent Luxor Temple in the heart of the city, a temple so central to modern Luxor that part of it has, at various points in history, shared its grounds with a mosque, a measure of just how continuously this ground has been considered sacred. In the afternoon, transfer to Luxor Airport for the domestic flight to Cairo, where you'll spend the final three nights of the tour, leaving behind the temple-dense landscape of Upper Egypt for the very different energy of the modern capital.",
          steps: [
            { time: "07:00", description: "Breakfast at the hotel." },
            { time: "08:00", description: "Transfer to Karnak Temple Complex." },
            { time: "08:30", description: "Guided tour of Karnak — the Avenue of Sphinxes, the Great Hypostyle Hall, the Sacred Lake, and the obelisks of Hatshepsut." },
            { time: "11:00", description: "Drive to Luxor Temple in the city center." },
            { time: "11:30", description: "Guided tour of Luxor Temple." },
            { time: "13:00", description: "Return to hotel. Check out. Lunch included." },
            { time: "15:30", description: "Transfer to Luxor Airport." },
            { time: "17:30", description: "Domestic flight to Cairo." },
            { time: "19:00", description: "Arrive in Cairo. Transfer to hotel. Dinner included." },
          ],
        },
        {
          day: 6,
          title: "Pyramids of Giza, Sphinx & Grand Egyptian Museum",
          description:
            "The defining day of any visit to Egypt: the Pyramids of Giza and the Grand Egyptian Museum. Stand before the last surviving wonder of the ancient world, a monument so famous it can feel almost unreal to encounter in person, explore the sphinx with its weathered, enigmatic face, and then spend the afternoon in the world's largest archaeological museum, where Tutankhamun's complete golden treasures are displayed for the first time in their entirety, an assembly of objects so dazzling it has taken an entire purpose-built museum to properly house them.",
          steps: [
            { time: "07:00", description: "Breakfast at the hotel." },
            { time: "08:00", description: "Transfer to the Giza Plateau." },
            { time: "08:30", description: "Guided tour of the Pyramids of Khufu, Khafre, and Menkaure. Visit the Great Sphinx and the Valley Temple." },
            { time: "11:00", description: "Optional camel or horse ride around the plateau (at extra cost)." },
            { time: "12:00", description: "Transfer to the Grand Egyptian Museum." },
            { time: "12:30", description: "Lunch included at the museum's restaurant." },
            { time: "13:30", description: "Guided tour of the Grand Egyptian Museum — the Royal Mummies Hall, the complete Tutankhamun collection, and highlights of the permanent galleries." },
            { time: "16:30", description: "Return to Cairo hotel. Evening free to explore Zamalek or the Khan el-Khalili bazaar." },
            { time: "19:30", description: "Dinner included." },
          ],
        },
        {
          day: 7,
          title: "Cairo — Islamic & Coptic Heritage",
          description:
            "Cairo's historic layers extend far beyond the pharaonic era. Today you'll explore the city's remarkable Islamic and Coptic heritage — from the medieval minarets of Islamic Cairo, where minaret after minaret pierces the skyline above a thousand years of continuous urban life, to the ancient Christian churches of Old Cairo that predate Islam by centuries, hidden away in narrow lanes that feel a world apart from the grand boulevards of the modern city just a few minutes away.",
          steps: [
            { time: "08:00", description: "Breakfast at the hotel." },
            { time: "09:00", description: "Transfer to Islamic Cairo." },
            { time: "09:30", description: "Guided tour of the Citadel of Saladin and the Muhammad Ali Mosque — panoramic views across Cairo from the hilltop fortress." },
            { time: "11:00", description: "Walk through the medieval Khan el-Khalili bazaar and the streets of Islamic Cairo — Al-Muizz Street's historic mosques and monuments." },
            { time: "13:00", description: "Lunch included in a traditional restaurant in Islamic Cairo." },
            { time: "14:30", description: "Transfer to Coptic Cairo (Old Cairo)." },
            { time: "15:00", description: "Guided tour of the Coptic quarter — the Hanging Church (Al-Muallaqah), the Church of St. Sergius, the Ben Ezra Synagogue, and the Coptic Museum." },
            { time: "17:30", description: "Return to hotel. Evening free." },
            { time: "19:30", description: "Dinner included." },
          ],
        },
        {
          day: 8,
          title: "Cairo — Final Morning & Departure",
          description:
            "Your final morning in Egypt is free for any last-minute sightseeing or shopping before your transfer to Cairo International Airport, one last chance to wander a market stall, find a gift for someone back home, or simply sit somewhere quiet and let the trip settle in before the long flight ahead. Your Aurevian Tours guide will accompany you to the airport and assist with check-in, closing the loop on an extraordinary eight-day journey through the greatest civilization the ancient world produced, from the granite quarries of Aswan to the golden treasures of Cairo.",
          steps: [
            { time: "08:00", description: "Breakfast at the hotel." },
            { time: "09:00", description: "Free morning — optional visit to the Egyptian Museum in Tahrir Square (at your own expense), shopping in Zamalek, or relaxing at the hotel." },
            { time: "12:00", description: "Check out of hotel." },
            { time: "13:00", description: "Lunch included." },
            { time: "14:00", description: "Transfer to Cairo International Airport for your departure flight. Tour ends." },
          ],
        },
      ],
    },
  },
];

export { cityData, toursData };