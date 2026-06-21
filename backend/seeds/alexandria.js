// seeds/cities/alexandria.js

const cityData = {
  name: "Alexandria",
  slug: "alexandria",
  description:
    "Alexandria is Egypt's magnificent Mediterranean jewel — a city of extraordinary layered history, intellectual legacy, and timeless coastal beauty, utterly unlike anywhere else in the country. Founded by Alexander the Great in 331 BC on a narrow strip of land between the sea and Lake Mareotis, it swiftly became one of the greatest cities of the ancient world, home to the legendary Library of Alexandria, one of the largest repositories of knowledge ever assembled and a magnet for scholars, mathematicians, and philosophers from across the Mediterranean, and the Pharos Lighthouse, one of the Seven Wonders of the Ancient World, whose light is said to have been visible from fifty kilometers out at sea. Cleopatra ruled from here, Julius Caesar walked its harbor, and for a time it was arguably the most important city anywhere on earth, a position that has left it with a melancholic, faded grandeur unlike Cairo's relentless modern energy. Today, Alexandria enchants visitors with its elegant seafront Corniche curving along the Mediterranean, its fascinating blend of Greco-Roman, Egyptian, and Ottoman heritage layered into a single streetscape, its world-class museums housing artifacts pulled from both land and sea, and its wonderfully relaxed Mediterranean atmosphere — sea breezes, seafood restaurants, and a slower, more contemplative pace — that sets it apart from every other city in Egypt.",
  country: "Egypt",
  image: "alexandria.jpg",
};

const toursData = [
  {
    title: "Guided Tour of Alexandria",
    slug: "guided-tour-alexandria",
    description:
      "Discover the extraordinary layered history of Alexandria — Egypt's Mediterranean queen — on this comprehensive guided tour of the city's most remarkable landmarks, a single day that somehow manages to move convincingly through more than two thousand years of continuous history. Your expert guide will take you through thousands of years of history, beginning at the eerie and fascinating Catacombs of Kom el-Shoqafa, a sprawling Roman-era underground necropolis where Egyptian and Greco-Roman artistic styles merge in an extraordinary fusion, ancient gods rendered in distinctly classical poses on the same walls where Egyptian funerary symbolism still holds court. Nearby, you'll see Pompey's Pillar, one of the last remaining vestiges of the ancient Serapeum temple, a single towering column standing in quiet defiance over ruins that once housed one of the most important religious complexes in the ancient Mediterranean world. The tour continues to the iconic Qaitbay Citadel, a magnificent 15th-century fortress built on the very spot where the legendary Pharos Lighthouse once stood, its stones reportedly recycled from the lighthouse's own collapsed remains, before finishing at the stunning modern Bibliotheca Alexandrina — a spectacular tribute to the ancient Library of Alexandria that manages to feel both monumental and deeply personal, as if the city had simply refused to let its greatest loss stay lost.",
    category: "Guided tours and free tours",
    price: {
      original: 72.84,
      discounted: 58.27,
      currency: "USD",
    },
    duration: "8 hours",
    language: ["English"],
    rating: {
      score: 8.9,
      reviews: 412,
    },
    travellers: 5823,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 15,
    availableTimes: ["08:00", "09:00"],
    meetingPoint: {
      en: "Your hotel lobby in Alexandria, or the Alexandria train station if arriving from Cairo. Your guide will meet you with a sign.",
    },
    accessibility: {
      en: "The Catacombs of Kom el-Shoqafa involve descending a spiral staircase underground — not suitable for guests with claustrophobia or severe mobility issues. The Citadel and Bibliotheca are largely accessible.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Light jacket (the sea breeze can be cool)", "Sun hat and sunscreen", "Camera", "Water bottle"],
    },
    importantInfo: {
      en: [
        "Hotel or port pickup within Alexandria is included.",
        "Lunch at a traditional Alexandrian seafood restaurant is included.",
        "Entrance fees to all four sites are included.",
        "The Catacombs are underground — those with claustrophobia or knee problems may find the spiral staircase challenging.",
        "The Bibliotheca Alexandrina may be closed on certain national holidays; your guide will advise if alternatives are needed.",
      ],
    },
    highlights: [
      "Explore the Roman Catacombs of Kom el-Shoqafa",
      "See Pompey's Pillar and the ancient Serapeum site",
      "Visit the magnificent Qaitbay Citadel on the Mediterranean",
      "Tour the stunning modern Bibliotheca Alexandrina",
      "Lunch with traditional Alexandrian seafood included",
    ],
    includes: ["Guide", "Hotel or port pickup and drop-off", "Entrance fees", "Lunch"],
    excludes: ["Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Alexandria — 3,000 Years of History in a Day",
          description:
            "Alexandria is unlike any other city in Egypt. Where Cairo overwhelms with its scale and its energy, Alexandria seduces — with its sea air, its faded European elegance, its melancholy sense of a great past just out of reach, glimpsed in cracked Belle Époque facades and the salt-worn stone of its harbor walls. Founded by Alexander the Great in 331 BC on the narrow strip of land between the Mediterranean and Lake Mareotis, it became within a century the most important city in the world — home to perhaps half a million people, to Cleopatra and Julius Caesar, to the world's first great library, and to a lighthouse visible 50 kilometers out to sea. Almost nothing of that ancient city physically survives above ground; centuries of earthquakes, fires, and rising sea levels swallowed most of it, including entire sections of the old royal quarter, which now lie beneath the harbor itself. But below the streets, in the museums, and along the seafront, its presence is everywhere. This full-day tour covers four of the city's defining sites, moving through layers of time from the Roman era to the medieval Islamic period to the 21st century, bound together by the sea that has always been Alexandria's defining element.",
          steps: [
            { time: "08:00", description: "Hotel or port pickup. Your guide meets you and gives a brief introduction to Alexandria's history during the drive to the first site." },
            { time: "08:30", description: "Arrive at the Catacombs of Kom el-Shoqafa. Descend the spiral staircase three levels below street level into one of the most remarkable underground spaces in the world. Your guide explains the extraordinary fusion of Egyptian, Greek, and Roman art and religious symbolism covering the tomb chambers — a physical document of Alexandria's multicultural identity." },
            { time: "09:30", description: "Walk to nearby Pompey's Pillar — a 27-meter-tall red granite column, the largest of its kind outside Rome, which once stood within the great Serapeum temple complex. Your guide explains the temple's role as the last home of the Alexandrian library's 'daughter collection' and its destruction in the 4th century AD." },
            { time: "10:00", description: "Transfer to the Qaitbay Citadel on the eastern harbour." },
            { time: "10:30", description: "Enter the Citadel of Qaitbay — the great 15th-century Mamluk fortress built by Sultan Qaitbay on the exact site of the ancient Pharos Lighthouse. Your guide walks you through the towers and ramparts, explaining both the medieval history of the fortress and the legendary ancient lighthouse it replaced. Stand on the seaward walls with the Mediterranean in front of you and understand exactly why Alexander chose this spot to build his city." },
            { time: "12:00", description: "Transfer to a traditional seafood restaurant on the Alexandria waterfront." },
            { time: "12:30", description: "Lunch included — fresh Alexandrian seafood, the city's great culinary tradition, with views across the harbour." },
            { time: "14:00", description: "Transfer to the Bibliotheca Alexandrina on the Corniche." },
            { time: "14:30", description: "Guided tour of the Bibliotheca Alexandrina — the spectacular modern library and cultural centre inaugurated in 2002 and designed by the Norwegian firm Snøhetta to evoke a rising sun tilting over the sea. Your guide takes you through the main reading hall (one of the largest in the world), the Antiquities Museum in the basement (displaying artefacts found during the library's construction), the Manuscript Museum, and the exterior sculpted wall inscribed with scripts from every writing system ever developed." },
            { time: "16:30", description: "Walk along the Corniche — Alexandria's seafront promenade — as the afternoon light softens over the Mediterranean. Your guide points out the historic landmarks of the Eastern Harbour." },
            { time: "17:00", description: "Transfer back to your hotel or port. Tour ends." },
          ],
        },
      ],
    },
  },
  {
    title: "Pyramids of Giza & Grand Egyptian Museum from Alexandria",
    slug: "pyramids-giza-grand-egyptian-museum-alexandria",
    description:
      "Make the most of your time in Alexandria with this unforgettable day trip to the two greatest wonders of ancient and modern Egypt — the Pyramids of Giza and the Grand Egyptian Museum, a single long day that bridges the Mediterranean coast and the edge of the Sahara. Travel by private vehicle from Alexandria to Cairo, where your expert Egyptologist guide will lead you around the legendary Giza Plateau to see the three great pyramids of Khufu, Khafre, and Menkaure and the iconic Great Sphinx, monuments so often photographed that nothing quite prepares visitors for how they actually feel standing directly beneath one. Then head to the Grand Egyptian Museum, the world's largest archaeological museum, to see the complete golden treasures of Tutankhamun displayed for the first time in their entirety, more than five thousand individual objects assembled together in one place after a century scattered across storerooms, smaller galleries, and the occasional traveling exhibition abroad.",
    category: "Day trip",
    price: {
      original: 140.32,
      discounted: 112.26,
      currency: "USD",
    },
    duration: "12 hours",
    language: ["English"],
    rating: {
      score: 8.7,
      reviews: 156,
    },
    travellers: 1842,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 12,
    availableTimes: ["06:00"],
    meetingPoint: {
      en: "Your hotel lobby or the Alexandria cruise port. The guide and private vehicle will collect you very early for the drive to Cairo.",
    },
    accessibility: {
      en: "The Giza Plateau involves walking on sand and uneven ground. The Grand Egyptian Museum is largely accessible. Entry inside the Great Pyramid involves crouching through low passages — not included and not recommended for claustrophobics.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun hat and high SPF sunscreen", "Water (the desert is hot)", "Camera", "Light snacks for the long drive", "Warm layer for the early morning departure"],
    },
    importantInfo: {
      en: [
        "The drive from Alexandria to Giza is approximately 2.5 hours each way.",
        "Hotel or port pickup is included within Alexandria.",
        "Lunch is included at a restaurant near the Giza Plateau or the Grand Egyptian Museum.",
        "Entry inside the Great Pyramid of Khufu is not included and carries an extra fee at the site.",
        "Camel or horse rides at the plateau are available at extra cost — your guide can assist.",
        "The Grand Egyptian Museum opened in 2023 and is the world's largest archaeological museum.",
      ],
    },
    highlights: [
      "Private day trip from Alexandria to the Pyramids of Giza",
      "See the three great pyramids and the Great Sphinx",
      "Tour the Grand Egyptian Museum with Tutankhamun's treasures",
      "Expert Egyptologist guide throughout",
      "Hotel or port pickup and drop-off included",
    ],
    includes: ["Guide", "Hotel or port pickup and drop-off", "Private transport", "Entrance fees", "Lunch"],
    excludes: ["Entry inside the Great Pyramid (extra fee)", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Alexandria to the Pyramids — Egypt's Greatest Day Trip",
          description:
            "This is one of the most dramatic day trips available anywhere in the world: leaving the Mediterranean seafront of Alexandria at dawn and arriving at the last surviving wonder of the ancient world before the morning crowds. The drive south from Alexandria through the green flatlands of the Delta and into the greater Cairo sprawl takes about two and a half hours, and your guide will use the journey to prepare you for what you're about to see — the context, the scale, the history, and the stories that make Giza more than a photograph. The Giza Plateau sits at the edge of the Sahara, and the abruptness of the transition — from city to pyramid in a single step — is one of travel's great shocks. The three pyramids of Khufu, Khafre, and Menkaure were built over a 70-year period in the 26th century BC. The largest, Khufu's Great Pyramid, remained the tallest structure in the world for nearly 4,000 years. In the afternoon, the Grand Egyptian Museum — opened in 2023 after decades of construction — presents the most important collection of ancient Egyptian artefacts ever assembled, including every single object found in Tutankhamun's tomb, displayed together for the first time.",
          steps: [
            { time: "06:00", description: "Hotel or port pickup in Alexandria. Begin the drive south toward Cairo." },
            { time: "08:30", description: "Arrive at the Giza Plateau. First view of the three pyramids from the eastern approach road — your guide pauses here for orientation and photographs." },
            { time: "09:00", description: "Enter the Giza site. Guided tour of the Great Pyramid of Khufu — walk around the base (the perimeter is nearly 1 km), examine the original casing stones near the base, and understand the engineering achievement. Your guide explains the latest theories on construction methods." },
            { time: "10:00", description: "Walk to the Pyramid of Khafre — slightly smaller than Khufu's but appearing taller due to its elevated position; still retains its original limestone casing at the apex." },
            { time: "10:30", description: "Visit the Pyramid of Menkaure and the three smaller Queen's Pyramids alongside it." },
            { time: "11:00", description: "Transfer to the Great Sphinx. Stand before the enigmatic limestone colossus — 73 meters long, carved from a single outcrop of natural rock — and the adjacent Valley Temple of Khafre, one of the oldest stone buildings in the world." },
            { time: "11:45", description: "Optional panoramic viewpoint stop for photographs of all three pyramids in a single frame." },
            { time: "12:30", description: "Lunch included at a restaurant near the plateau." },
            { time: "14:00", description: "Transfer to the Grand Egyptian Museum on the edge of the Giza Plateau." },
            { time: "14:30", description: "Guided tour of the Grand Egyptian Museum — begin in the Grand Staircase Hall lined with colossal royal statues; proceed to the complete Tutankhamun galleries (over 5,000 objects including the golden death mask, the golden throne, the canopic shrine, and the innermost golden coffin); continue through the Royal Mummies Hall and the permanent collection highlights." },
            { time: "17:00", description: "Depart the museum for the return drive to Alexandria." },
            { time: "19:30", description: "Arrive back in Alexandria. Drop-off at your hotel or port. Tour ends." },
          ],
        },
      ],
    },
  },
  {
    title: "5-Day Alexandria & Siwa Desert Tour",
    slug: "5-day-alexandria-siwa-desert-tour",
    description:
      "Embark on one of Egypt's most unique and rewarding multi-day adventures on this 5-day tour that combines the Mediterranean heritage of Alexandria with the remote, magical isolation of the Siwa Oasis deep in the Western Desert, two halves of Egypt that few travelers ever manage to see on the same trip. After exploring Alexandria's catacombs, citadel, and library, you'll drive west across the dramatic North African desert to reach Siwa — one of Egypt's most isolated and atmospheric oases, where a centuries-old Berber culture survives among the ruins of the Oracle Temple of Amun, freshwater springs that have drawn visitors since antiquity, and the breathtaking Great Sand Sea, an unbroken ocean of dunes larger than entire countries. A truly extraordinary journey off the beaten path, organized by Aurevian Tours for travelers who want to see a side of Egypt that exists well beyond the usual Nile Valley itinerary.",
    category: "Tour packages",
    price: {
      original: 659.85,
      discounted: null,
      currency: "USD",
    },
    duration: "5 days",
    language: ["English"],
    rating: {
      score: 7.1,
      reviews: 7,
    },
    travellers: 177,
    freeCancellation: true,
    minAge: 8,
    maxGroupSize: 10,
    availableTimes: ["08:00"],
    meetingPoint: {
      en: "Your hotel lobby in Alexandria on Day 1. The guide will meet you to begin the tour.",
    },
    accessibility: {
      en: "This tour involves significant distances by road (Alexandria to Siwa is approximately 560 km). Siwa's desert terrain is not suitable for wheelchairs. The catacombs involve a spiral staircase underground. Not recommended for guests with severe mobility issues.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes and sandals", "Light summer clothing", "Warmer layer for desert nights (temperatures drop sharply)", "High SPF sunscreen", "Swimwear for the freshwater springs", "Camera", "Personal medications", "Cash (ATMs are limited in Siwa)"],
    },
    importantInfo: {
      en: [
        "4 nights accommodation is included (1 in Alexandria, 3 in Siwa).",
        "Some meals are included — check your booking confirmation for the full meal plan.",
        "The drive from Alexandria to Siwa takes approximately 7-8 hours including stops.",
        "Siwa Oasis is a conservative Berber community — modest dress is appreciated, especially in the town center.",
        "Mobile phone signal is very limited in Siwa; inform family and friends before departing.",
        "The Great Sand Sea excursion in Siwa uses 4WD vehicles due to the terrain.",
      ],
    },
    highlights: [
      "Explore Alexandria's catacombs, citadel, and Bibliotheca",
      "Drive across the North African desert to Siwa Oasis",
      "Visit the ancient Oracle Temple of Amun at Siwa",
      "Swim in freshwater springs and explore salt lakes",
      "Journey through the spectacular Great Sand Sea",
    ],
    includes: ["4 nights accommodation", "Private transport", "Guide", "Entrance fees", "Some meals"],
    excludes: ["All meals", "Tips", "Personal expenses", "International flights"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Alexandria — City of Memory",
          description:
            "Your adventure begins in Alexandria, Egypt's Mediterranean city of layered ghosts. The day covers the city's greatest ancient and modern landmarks — the underground Roman catacombs of Kom el-Shoqafa where Egyptian and Greco-Roman art collide; Pompey's Pillar standing in the ruins of the ancient Serapeum; the Qaitbay Citadel rising above the harbour where the legendary Pharos Lighthouse once stood; and the magnificent modern Bibliotheca Alexandrina. In the evening, settle into your hotel and take a walk along the Corniche as the Mediterranean darkens into night, the warm desert air finally yielding to a cooler sea breeze.",
          steps: [
            { time: "08:00", description: "Meet your guide at your Alexandria hotel. Orientation briefing for the 5-day journey." },
            { time: "08:30", description: "Drive to the Catacombs of Kom el-Shoqafa. Descend underground and explore the remarkable fusion of Egyptian and Greco-Roman funerary art." },
            { time: "09:30", description: "Walk to Pompey's Pillar and the ruins of the Serapeum temple complex." },
            { time: "10:15", description: "Transfer to the Qaitbay Citadel. Guided tour of the medieval fortress on the site of the ancient Pharos Lighthouse, with views across the Eastern Harbour." },
            { time: "12:00", description: "Lunch included at a traditional Alexandrian seafood restaurant on the waterfront." },
            { time: "14:00", description: "Visit the Bibliotheca Alexandrina — guided tour of the main reading hall, the Antiquities Museum, and the Manuscript Museum." },
            { time: "16:30", description: "Walk along the Corniche. Check in to your hotel." },
            { time: "19:30", description: "Dinner on your own expense. Evening free to explore the Alexandrian seafront." },
          ],
        },
        {
          day: 2,
          title: "Alexandria to Siwa — Crossing the Western Desert",
          description:
            "Today the journey takes a dramatic turn west, leaving the Mediterranean behind for one of the most extraordinary landscapes on Earth. The drive from Alexandria to Siwa crosses 560 kilometres of the Western Desert — a vast, almost surreally empty plateau broken by occasional oases and the pale shimmer of distant salt flats. The road runs along the Mediterranean coast before turning inland through the ancient caravan routes that once connected Egypt to Libya and sub-Saharan Africa, the same dusty corridors that have carried traders, pilgrims, and armies for thousands of years. Siwa Oasis appears like a mirage after hours of desert — a dense green garden of palm trees and olive groves surrounding a glittering salt lake, with the ruins of ancient mud-brick towers rising from the escarpment above, the whole scene almost disorienting in its sudden burst of color after so much pale, empty sand. You'll arrive in time to check in to your Siwa ecolodge and watch the desert sunset from its rooftop, the day's long drive already beginning to feel like a worthwhile trade for the view.",
          steps: [
            { time: "07:00", description: "Breakfast at the Alexandria hotel. Check out." },
            { time: "08:00", description: "Depart Alexandria westward by private vehicle." },
            { time: "10:00", description: "Stop at El Alamein — the site of the decisive World War II battle of 1942. Brief visit to the El Alamein War Cemetery and the El Alamein Museum (entrance at own expense)." },
            { time: "11:30", description: "Continue west through the North African coastal desert. Your guide explains the geography and history of the region." },
            { time: "13:00", description: "Lunch stop at Marsa Matrouh — a small coastal town with a beautiful bay. Lunch on your own expense." },
            { time: "14:30", description: "Turn south from the coast into the interior. The landscape shifts from coastal scrub to open desert plateau." },
            { time: "17:00", description: "Descend from the plateau into the Siwa Depression. First views of the palm gardens, salt lakes, and ancient ruins of Siwa Oasis." },
            { time: "17:30", description: "Arrive in Siwa. Check in to the ecolodge (traditional mud-brick construction)." },
            { time: "19:00", description: "Dinner included at the lodge. Your guide introduces Siwa's history and culture and outlines the days ahead." },
          ],
        },
        {
          day: 3,
          title: "Siwa — The Oracle Temple, Shali Fortress & Cleopatra's Spring",
          description:
            "Siwa's history is as improbable as its location. An oasis in the Libyan Desert, 50 metres below sea level, it has been inhabited since at least the 10th millennium BC, and its Oracle Temple of Amun was one of the most famous in the ancient world — consulted by Croesus of Lydia, Pindar the poet, and, most famously, Alexander the Great himself, who made the desert crossing from Egypt in 331 BC to receive confirmation of his divine status, a journey of remarkable hardship undertaken specifically to hear what this remote temple's priests would tell him. Today Siwa retains its ancient character in ways few Egyptian sites do: its people speak a distinct Berber language (Siwi), its architecture is still made from karshif (salt rock and mud), and its social customs have changed relatively little over centuries, giving the whole oasis a sense of having quietly slipped outside the usual flow of modern Egyptian life.",
          steps: [
            { time: "08:00", description: "Breakfast at the lodge." },
            { time: "09:00", description: "Walk to the Oracle Temple of Amun (Temple of the Oracle) — explore the ruins of the 26th-dynasty temple where Alexander received his oracle, and the adjacent Temple of Umm Ubayda. Your guide explains Alexander's famous visit and the oracle tradition." },
            { time: "10:30", description: "Climb to the top of the Shali Fortress — the remarkable ruined medieval mud-brick city on a rocky outcrop in the centre of Siwa, offering panoramic views across the entire oasis, the palm gardens, Lake Siwa, and the surrounding desert escarpment." },
            { time: "11:30", description: "Visit Cleopatra's Spring (Ain el-Girara) — a natural freshwater pool bubbling up from underground, famous since antiquity and still in use by locals and visitors. Swimming is permitted." },
            { time: "12:30", description: "Return to the lodge. Lunch included." },
            { time: "14:00", description: "Explore Siwa town on foot — the central square, the market selling Siwan silver jewelry and woven baskets, the traditional mud-brick houses, and the date palm orchards. Your guide introduces you to local artisans." },
            { time: "17:00", description: "Visit Fatnas Island (Fantasy Island) on Lake Siwa — a small palm-fringed island in the salt lake, accessible by causeway, famous for its sunset views." },
            { time: "18:30", description: "Return to the lodge." },
            { time: "19:30", description: "Dinner included." },
          ],
        },
        {
          day: 4,
          title: "Siwa — The Great Sand Sea & Desert Sunset",
          description:
            "The Great Sand Sea is one of the world's largest sand seas — an unbroken ocean of dunes stretching from Egypt deep into Libya, covering an area larger than the entire country of Ireland. A 4WD excursion into its edge is one of the most exhilarating experiences Egypt offers: the scale, the silence, and the extraordinary sculptural forms of the dunes are genuinely unlike anything else on the planet, the landscape shifting from soft golden curves to razor-sharp ridges depending entirely on the angle of the light. The afternoon brings a visit to the Mountain of the Dead — a rocky hillside near Siwa town carved with dozens of ancient Pharaonic rock tombs — before the famous Siwa sunset from the top of a sand dune, an experience regularly described by travelers as one of the most beautiful sights anywhere in Egypt.",
          steps: [
            { time: "08:00", description: "Breakfast at the lodge." },
            { time: "09:00", description: "Depart by 4WD vehicles for the Great Sand Sea." },
            { time: "09:30", description: "Enter the Great Sand Sea. Your driver navigates across the dune landscape — cresting ridges, descending into valleys, pausing at the highest viewpoints for photographs. The silence is total." },
            { time: "11:00", description: "Stop at a freshwater hot spring in the desert — a natural warm pool surrounded by dunes. Swimming possible." },
            { time: "12:00", description: "Picnic lunch in the desert provided by the lodge." },
            { time: "13:30", description: "Return through the dunes to Siwa." },
            { time: "15:00", description: "Visit Jebel al-Mawta (Mountain of the Dead) — a hill riddled with ancient rock-cut tombs from the 26th dynasty and Greco-Roman periods. Visit the painted Tomb of Si-Amun, the finest painted tomb in the Western Desert." },
            { time: "16:30", description: "Drive to a high dune on the desert edge for the famous Siwa sunset — watching the light shift across the palm oasis and salt lake as the sky turns gold and violet is one of the defining travel experiences in Egypt." },
            { time: "18:30", description: "Return to the lodge." },
            { time: "19:30", description: "Dinner included. Final evening in Siwa — optional visit to a local music gathering if available." },
          ],
        },
        {
          day: 5,
          title: "Siwa to Alexandria — Return Journey",
          description:
            "The final day is the long return drive east across the Western Desert to Alexandria. The journey in reverse offers a different perspective — the desert plateau opening back into the Mediterranean coast, and eventually the city skyline of Alexandria rising ahead, a welcome and slightly disorienting return to green fields and sea air after several days surrounded by sand. Depending on your arrival time, a brief final stroll along the Alexandria Corniche before your transfer to your hotel or onward connection closes the loop on one of Egypt's most remarkable journeys.",
          steps: [
            { time: "07:00", description: "Breakfast at the lodge. Check out." },
            { time: "08:00", description: "Depart Siwa eastward. Final views of the oasis as it recedes into the desert." },
            { time: "10:30", description: "Drive across the Western Desert plateau. Your guide shares reflections on the journey and answers any remaining questions." },
            { time: "13:00", description: "Lunch stop at Marsa Matrouh on the coast. Lunch on your own expense." },
            { time: "14:30", description: "Continue east along the coast toward Alexandria." },
            { time: "15:30", description: "Optional brief stop at El Alamein on the return." },
            { time: "17:00", description: "Arrive in Alexandria. Drop-off at your hotel or Alexandria train station. Tour ends." },
          ],
        },
      ],
    },
  },
  {
    title: "Civitatis eSIM Card Egypt",
    slug: "civitatis-esim-card-egypt-alexandria",
    description:
      "Stay connected throughout your Alexandria and Egypt adventure with this convenient travel eSIM, a small piece of preparation that pays off the moment you land. Whether you're navigating the streets of Alexandria's ancient neighborhoods, researching the city's fascinating history on the spot, or sharing photos from the Qaitbay Citadel with the Mediterranean Sea as a backdrop, this eSIM gives you reliable mobile data coverage across all of Egypt without the hassle of hunting down a local vendor in an unfamiliar city. No need to search for a local SIM card — simply activate digitally before you travel and enjoy seamless connectivity from the moment you arrive, all the way through any side trips to the desert, the Delta, or the capital that your Egyptian itinerary happens to include.",
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
        "Works on 4G/LTE networks across Egypt.",
        "Note: signal may be limited in remote desert areas such as Siwa Oasis.",
        "Voice calls and SMS are not included.",
      ],
    },
    highlights: [
      "Mobile data coverage across Egypt",
      "No physical SIM swap needed",
      "Easy digital activation before arrival",
      "Available in 7, 15, and 30-day plans",
      "Works in Alexandria and all Egyptian destinations",
    ],
    includes: ["eSIM data plan for selected duration"],
    excludes: ["Voice calls", "SMS"],
    itinerary: null,
  },
  {
    title: "Civitatis Travel Insurance",
    slug: "civitatis-travel-insurance-alexandria",
    description:
      "Travel through Alexandria and Egypt with total peace of mind thanks to Civitatis Travel Insurance, a quiet layer of protection running underneath every catacomb visit, desert crossing, and coastal excursion on your itinerary. Whether you're exploring ancient catacombs, sailing to coastal fortresses, or making day trips to Cairo and the Pyramids, unexpected events can always happen, and the gap between a minor inconvenience and a genuinely ruined trip often comes down to whether you were covered in advance. This comprehensive travel insurance covers medical emergencies, trip cancellations, delayed or lost luggage, and much more — so nothing can spoil your Egyptian adventure, whether you stay along the Mediterranean coast or venture far out into the Western Desert. Available for trips lasting between 3 and 31 days, flexible enough to match whatever combination of Alexandria's seafront and Egypt's wider attractions your trip ends up covering.",
    category: "Additional services",
    price: {
      original: 11.48,
      discounted: null,
      currency: "USD",
    },
    duration: "3-31 days",
    language: ["English"],
    rating: {
      score: 8.2,
      reviews: 3059,
    },
    travellers: 105388,
    freeCancellation: false,
    minAge: 0,
    maxGroupSize: null,
    availableTimes: null,
    meetingPoint: null,
    accessibility: null,
    whatToBring: null,
    importantInfo: {
      en: [
        "Coverage is available for trips of 3 to 31 days.",
        "Pre-existing medical conditions may not be covered — review the full policy before purchasing.",
        "This insurance is recommended especially for tours involving remote areas such as the Siwa Desert.",
        "Coverage includes medical emergencies, trip cancellation, and lost or delayed luggage.",
        "Purchase before departure — the policy cannot be activated after travel has begun.",
      ],
    },
    highlights: [
      "Comprehensive travel insurance for Alexandria and Egypt",
      "Covers medical emergencies and trip cancellations",
      "Available for 3 to 31-day trips",
      "Peace of mind for all sightseeing and day trips",
    ],
    includes: ["Travel insurance coverage as per selected plan"],
    excludes: ["Pre-existing medical conditions (check policy)"],
    itinerary: null,
  },
];

export { cityData, toursData };