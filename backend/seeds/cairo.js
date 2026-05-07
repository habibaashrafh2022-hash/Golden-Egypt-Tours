// seeds/cities/cairo.js

const cityData = {
  name: "Cairo",
  nameAr: "القاهرة",
  slug: "cairo",
  description:
    "Cairo is one of the most captivating and historically rich cities on Earth — a sprawling, energetic metropolis where ancient wonders stand side by side with a vibrant modern city life. Home to over 20 million people, Egypt's capital sits on the banks of the mighty Nile and is overshadowed by the legendary Pyramids of Giza, the last surviving Wonder of the Ancient World. From the labyrinthine alleys of Islamic Cairo and the treasure-filled Egyptian Museum to the bustling Khan el-Khalili bazaar and the breathtaking Saladin Citadel, Cairo is an endless journey of discovery through thousands of years of human civilization.",
  descriptionAr:
    "القاهرة هي واحدة من أكثر مدن الأرض إثارة للاهتمام وثراءً تاريخياً — مدينة ضخمة نابضة بالحياة حيث تقف العجائب القديمة جنباً إلى جنب مع الحياة العصرية الحيوية. تضم أكثر من 20 مليون نسمة، وعاصمة مصر تجلس على ضفاف النيل العظيم وتتوج بأهرامات الجيزة الأسطورية، آخر عجائب الدنيا السبع القديمة الباقية. من الأزقة المتشابكة في القاهرة الإسلامية والمتحف المصري المليء بالكنوز إلى سوق خان الخليلي الصاخب وقلعة صلاح الدين المذهلة، القاهرة رحلة لا تنتهي من الاكتشاف عبر آلاف السنين من الحضارة الإنسانية.",
  country: "Egypt",
  image: "cairo.jpg",
};

// ============================================================
//  TOUR 1: Complete Cairo Tour + Tickets
//  DATA PRESERVED FROM ORIGINAL — restructured to match seed format
// ============================================================

const toursData = [
  {
    title: "Complete Cairo Tour + Tickets",
    titleAr: "الجولة الشاملة في القاهرة مع التذاكر",
    slug: "complete-cairo-tour-tickets",
    description: `Discover the very best of Egypt's magnificent capital on this comprehensive guided day tour of Cairo's most iconic landmarks. Designed to give you the most complete experience of the city in a single day, this tour combines the Islamic heritage of medieval Cairo with the ancient treasures of the Egyptian Museum — all with the comfort of private transport, expert guidance, and all entrance fees included.

Your expert guide will take you to the imposing Saladin Citadel, perched high above the city with panoramic views over Cairo's minarets and the distant Pyramids of Giza. Inside the citadel walls, visit the magnificent Mohamed Ali Mosque, one of the most beautiful mosques in the Middle East, with its stunning Ottoman architecture, alabaster interior, and twin minarets dominating the Cairo skyline.

You'll then descend into the heart of medieval Cairo to wander the labyrinthine lanes of the world-famous Khan el-Khalili bazaar — a sensory explosion of spices, gold, silver, perfumes, and crafts that has operated continuously since 1382. Your guide will show you the authentic corners of this ancient market, far from the tourist traps, and take you for traditional mint tea at the legendary El-Fishawi café.

The tour concludes at the Egyptian Museum of Antiquities in Tahrir Square — home to one of the most extraordinary collections of ancient artifacts ever assembled. Over 120,000 objects spanning 5,000 years of ancient Egyptian civilization fill its halls, including the priceless golden treasures of Tutankhamun: the iconic golden death mask, the royal throne, the golden shrine, and over 5,000 objects buried with the boy king in 1323 BC.`,
    descriptionAr: `اكتشف أفضل ما تقدمه عاصمة مصر الرائعة في هذه الجولة اليومية الشاملة المصحوبة بمرشد لأبرز المعالم الأيقونية في القاهرة. صُممت هذه الجولة لمنحك أكمل تجربة للمدينة في يوم واحد، وتجمع بين التراث الإسلامي لمصر القاهرة الوسيطة وكنوز المتحف المصري القديمة — وكل ذلك بريحة المواصلات الخاصة والإرشاد الخبير وجميع رسوم الدخول المشمولة.

سيأخذك مرشدك الخبير إلى قلعة صلاح الدين الفارعة المرتفعة فوق المدينة بمناظرها البانورامية على مآذن القاهرة وأهرامات الجيزة في الأفق البعيد. داخل أسوار القلعة، قم بزيارة مسجد محمد علي الرائع، أحد أجمل المساجد في الشرق الأوسط.`,
    category: "Guided tours and free tours",
    price: { original: 80.84, discounted: 64.67, currency: "USD" },
    duration: "8 hours",
    language: ["English", "Arabic", "French", "Spanish", "German"],
    rating: { score: 8.7, reviews: 1893 },
    travellers: 20947,
    freeCancellation: true,
    highlights: [
      "Visit the Saladin Citadel — a medieval fortress with breathtaking panoramic views of Cairo",
      "Enter the magnificent Mohamed Ali Mosque with its stunning Ottoman alabaster interior",
      "Explore the labyrinthine lanes of Khan el-Khalili — Cairo's 14th-century bazaar",
      "Sip traditional mint tea at the legendary El-Fishawi café, open for 200+ years",
      "Tour the Egyptian Museum with its 120,000 ancient artifacts",
      "See Tutankhamun's iconic golden death mask and complete royal treasures",
      "Private air-conditioned transport and hotel pickup included",
      "Maximum 15 guests for a personalized experience",
    ],
    includes: [
      "Expert licensed Egyptologist guide (8 hours)",
      "Private air-conditioned vehicle",
      "Hotel pickup and drop-off anywhere in Cairo",
      "Entrance fee to Saladin Citadel",
      "Entrance fee to Mohamed Ali Mosque",
      "Entrance fee to the Egyptian Museum",
      "Traditional mint tea at El-Fishawi café",
      "Bottled water throughout the tour",
      "All taxes and service charges",
    ],
    excludes: [
      "Lunch (approx. 1 hour free time — guide can recommend restaurants)",
      "Tutankhamun Room special ticket (optional extra, ~$20 — your guide will advise)",
      "Personal shopping at Khan el-Khalili",
      "Tips for guide and driver (suggested: $5–10 per person)",
      "Camera fees at some sites (approx. $1–5)",
    ],
  },

  // ============================================================
  //  TOUR 2: Alexandria Day Trip from Cairo
  //  DATA PRESERVED FROM ORIGINAL — restructured to match seed format
  // ============================================================

  {
    title: "Alexandria Day Trip from Cairo",
    titleAr: "رحلة يوم إلى الإسكندرية من القاهرة",
    slug: "alexandria-day-trip-cairo",
    description: `Escape Cairo for a day and travel north to Alexandria — Egypt's legendary Mediterranean city founded by Alexander the Great in 331 BC and once the intellectual and cultural capital of the ancient world. For nearly a thousand years, Alexandria was the greatest city in the Mediterranean: home to the famous Library of Alexandria (the largest library in the ancient world), the Lighthouse of Alexandria (one of the Seven Wonders of the Ancient World), and the Mouseion (the world's first research institution).

Today, Alexandria still carries the echoes of its extraordinary past in its monuments, museums, and atmosphere. This 12-hour day trip from Cairo covers the most important sites in the city and includes a delicious seafood lunch on the Mediterranean coast.

Visit the magnificent Bibliotheca Alexandrina — a stunning modern tribute to the ancient Library of Alexandria, opened in 2002 on the presumed site of the original. Explore the Roman-era Catacombs of Kom el-Shoqafa — one of the Seven Wonders of the Middle Ages, a remarkable underground necropolis where Greek, Roman, and Egyptian artistic styles merge in a unique hybrid. See the imposing Qaitbay Citadel standing guard over the Mediterranean harbour, built in 1477 on the exact site of the ancient Lighthouse. Walk along the scenic Corniche and absorb the unique atmosphere of a city that feels quite unlike anywhere else in Egypt — Mediterranean, cosmopolitan, and hauntingly historical.`,
    descriptionAr: `اهرب من القاهرة ليوم وسافر شمالاً إلى الإسكندرية — مدينة مصر المتوسطية الأسطورية التي أسسها الإسكندر الأكبر عام 331 قبل الميلاد وكانت يوماً العاصمة الفكرية والثقافية للعالم القديم. لما يقرب من ألف عام، كانت الإسكندرية أعظم مدن البحر المتوسط.`,
    category: "Day trip",
    price: { original: 105.44, discounted: 84.35, currency: "USD" },
    duration: "12 hours",
    language: ["English", "Arabic", "French", "Spanish"],
    rating: { score: 8.1, reviews: 574 },
    travellers: 6164,
    freeCancellation: true,
    highlights: [
      "Visit the Bibliotheca Alexandrina — the modern successor to the greatest library in history",
      "Explore the Roman Catacombs of Kom el-Shoqafa — one of the Seven Wonders of the Middle Ages",
      "See the Qaitbay Citadel on the site of the ancient Lighthouse of Alexandria",
      "Walk along Alexandria's scenic Mediterranean Corniche",
      "Enjoy a fresh seafood lunch on the Mediterranean coast",
      "Travel in a private air-conditioned vehicle (2.5 hours each way)",
      "Expert Egyptologist guide throughout",
      "All entrance fees included",
    ],
    includes: [
      "Private air-conditioned transport (Cairo–Alexandria–Cairo)",
      "Expert licensed guide",
      "Hotel pickup and drop-off in Cairo",
      "Entrance fee to Bibliotheca Alexandrina",
      "Entrance fee to Catacombs of Kom el-Shoqafa",
      "Entrance fee to Qaitbay Citadel",
      "Seafood lunch at a recommended restaurant",
      "Bottled water throughout",
      "All taxes and service charges",
    ],
    excludes: [
      "Tips for guide and driver (suggested: $5–10 per person)",
      "Personal expenses and shopping",
      "Optional activities not listed",
      "Alcoholic beverages",
    ],
  },

  // ============================================================
  //  TOUR 3: Pyramids of Giza, Memphis and Saqqara
  //  DATA PRESERVED FROM ORIGINAL — restructured to match seed format
  // ============================================================

  {
    title: "Pyramids of Giza, Memphis and Saqqara",
    titleAr: "أهرامات الجيزة وممفيس وسقارة",
    slug: "pyramids-giza-memphis-saqqara-cairo",
    description: `Journey 5,000 years back in time on this extraordinary tour of three of ancient Egypt's most important archaeological sites — a journey that traces the evolution of pyramid-building from its very first experimental beginnings at Saqqara through to the ultimate perfection of the Great Pyramid of Khufu at Giza.

Begin at the iconic Pyramids of Giza — the only surviving Wonder of the Seven Wonders of the Ancient World, and one of the most recognizable images in all of human history. The Great Pyramid of Khufu, built around 2560 BC, stood as the tallest man-made structure on Earth for an extraordinary 3,800 years. Your expert Egyptologist guide will explain the staggering engineering achievement these monuments represent: how 2.3 million stone blocks averaging 2.5 tonnes were quarried, transported, and assembled with astonishing precision using only copper tools, wooden sledges, and human labour.

Continue to Saqqara — the ancient burial ground of Memphis and the birthplace of pyramid-building. Here you'll find the Step Pyramid of Djoser, built around 2650 BC by the brilliant architect Imhotep. This is the world's first large-scale cut-stone structure — the prototype from which all later pyramids evolved. The surrounding funerary complex is one of the most important archaeological sites in Egypt, with beautifully carved underground chambers, the mysterious Serdab, and mastaba tombs of Old Kingdom nobles decorated with some of the finest relief carvings in Egyptian art.

End your journey at Memphis — the ancient capital of Egypt for over 3,000 years, founded by the legendary first pharaoh Menes around 3100 BC. The open-air museum at Memphis contains the colossal fallen statue of Ramesses II — one of the most impressive sculptures in Egyptian art — and the alabaster sphinx of Memphis.`,
    descriptionAr: `سافر 5000 عام إلى الوراء في الزمن في هذه الجولة الاستثنائية لثلاثة من أهم المواقع الأثرية في مصر القديمة — رحلة تتتبع تطور بناء الأهرامات من بداياتها التجريبية الأولى في سقارة إلى الكمال النهائي للهرم الأكبر لخوفو في الجيزة.`,
    category: "Guided tours and free tours",
    price: { original: 76.15, discounted: null, currency: "USD" },
    duration: "3–8 hours",
    language: ["English", "Arabic", "French", "Spanish", "German", "Italian"],
    rating: { score: 8.5, reviews: 1436 },
    travellers: 17137,
    freeCancellation: true,
    highlights: [
      "Stand before the Great Pyramid of Khufu — the only surviving Wonder of the Ancient World",
      "See the Great Sphinx — the world's largest monolithic statue",
      "Explore the Step Pyramid of Djoser at Saqqara — the world's first stone structure",
      "Visit the ancient capital of Memphis and the colossal statue of Ramesses II",
      "Optional: enter the interior of the Great Pyramid (extra fee ~$20)",
      "Optional: camel ride around the Giza Plateau",
      "Expert Egyptologist guide and private transport included",
      "All entrance fees included",
    ],
    includes: [
      "Expert licensed Egyptologist guide",
      "Private air-conditioned vehicle",
      "Hotel pickup and drop-off in Cairo",
      "Entrance fee to Giza Plateau",
      "Entrance fee to Saqqara",
      "Entrance fee to Memphis Open-Air Museum",
      "Bottled water throughout",
      "All taxes and service charges",
    ],
    excludes: [
      "Entry inside the Great Pyramid (~$20, optional)",
      "Entry inside the Solar Boat Museum at Giza (~$10, optional)",
      "Camel or horse ride (optional, negotiate directly at the site)",
      "Lunch (free time provided — guide recommends local restaurants)",
      "Tips for guide and driver (suggested: $5–10 per person)",
      "Personal expenses",
    ],
  },

  // ============================================================
  //  TOUR 4: Giza Pyramids and Cairo Tour
  // ============================================================

  {
    title: "Giza Pyramids and Cairo Tour",
    titleAr: "جولة أهرامات الجيزة والقاهرة",
    slug: "giza-pyramids-cairo-tour",
    description: "Experience the iconic Pyramids of Giza, the Great Sphinx, the fascinating Khan el-Khalili market, and the Museum of Egyptian Antiquities all in one day. We'll collect you from your hotel and head to the Giza Plateau to encounter the three iconic pyramids of Khufu, Khafre, and Menkaure. Learn all about the history of these ancient monuments from your expert Egyptologist guide. Continue to the legendary Great Sphinx and explore the Valley Temple where the purification of the king's mummy took place. Return to Cairo to browse the stalls of Khan el-Khalili market selling spices, leather, and jewelry. After a traditional lunch, visit the Egyptian Museum in Tahrir Square to see countless artifacts including the treasures of Tutankhamun.",
    descriptionAr: "استمتع بتجربة أهرامات الجيزة وأبو الهول وسوق خان الخليلي والمتحف المصري في يوم واحد. سنصطحبك من فندقك ونتوجه إلى هضبة الجيزة لمشاهدة الأهرامات الثلاثة الشهيرة. تعرف على تاريخ هذه الآثار القديمة من مرشدك الأثري الخبير. ثم توجه إلى سوق خان الخليلي والمتحف المصري لمشاهدة كنوز توت عنخ آمون.",
    category: "Guided tours and free tours",
    price: { original: 89.28, discounted: 71.43, currency: "USD" },
    duration: "8 hours",
    language: ["English", "Arabic", "French", "Italian", "Spanish"],
    rating: { score: 8.9, reviews: 413 },
    travellers: 4446,
    freeCancellation: true,
    highlights: [
      "Visit the three iconic Pyramids of Giza and the Great Sphinx",
      "Explore the Valley Temple where pharaohs were purified",
      "Browse the stalls of Khan el-Khalili bazaar",
      "Enjoy a traditional Egyptian lunch",
      "Tour the Egyptian Museum and see Tutankhamun's treasures",
      "Hotel pickup and drop-off included",
      "Expert English-speaking guide throughout",
    ],
    includes: [
      "Hotel pickup and drop-off",
      "English-speaking guide",
      "Transport by air-conditioned minibus",
      "Admission to the Giza Pyramids archaeological complex",
      "Admission to the Museum of Egyptian Antiquities",
      "Lunch",
    ],
    excludes: [
      "Visit to the inside of the Pyramids (optional extra)",
      "Tips",
      "Personal expenses",
    ],
  },

  // ============================================================
  //  TOUR 5: Grand Egyptian Museum Tour
  // ============================================================

  {
    title: "Grand Egyptian Museum Tour + Tickets + Hotel Transfer",
    titleAr: "جولة المتحف المصري الكبير مع التذاكر والانتقال",
    slug: "grand-egyptian-museum-tour",
    description: "Discover the world's largest archaeological museum on this guided tour of the spectacular Grand Egyptian Museum (GEM) in Giza. Opened in phases alongside the Pyramids, this state-of-the-art museum is the new home of Egypt's greatest treasures, including the complete Tutankhamun collection displayed together for the first time in history. Your expert guide will lead you through the vast galleries — from the colossal statue of Ramesses II that greets visitors in the Grand Hall to the stunning collection of royal mummies, ancient jewelry, and the full golden burial assemblage of the boy king. The museum's architecture alone is worth the visit, with its dramatic alabaster facade and panoramic views of the Pyramids.",
    descriptionAr: "اكتشف أكبر متحف أثري في العالم في هذه الجولة المصحوبة بمرشد للمتحف المصري الكبير في الجيزة. هذا المتحف الحديث هو الموطن الجديد لأعظم كنوز مصر، بما في ذلك مجموعة توت عنخ آمون الكاملة المعروضة معاً لأول مرة في التاريخ. سيقودك مرشدك الخبير عبر القاعات الواسعة من تمثال رمسيس الثاني الضخم إلى المجموعة الكاملة من الدفن الذهبي للملك الصبي.",
    category: "Guided tours and free tours",
    price: { original: 64.61, discounted: null, currency: "USD" },
    duration: "4 hours",
    language: ["English", "Arabic", "French", "Spanish"],
    rating: { score: 8.2, reviews: 392 },
    travellers: 5420,
    freeCancellation: true,
    highlights: [
      "Visit the spectacular Grand Egyptian Museum — the world's largest archaeological museum",
      "See the complete Tutankhamun collection displayed together for the first time",
      "Admire the colossal statue of Ramesses II in the Grand Hall",
      "Explore galleries spanning 5,000 years of Egyptian civilization",
      "Expert Egyptologist guide throughout",
      "Hotel pickup and drop-off included",
    ],
    includes: [
      "Expert licensed guide",
      "Hotel pickup and drop-off",
      "Entrance fee to the Grand Egyptian Museum",
      "Air-conditioned transport",
    ],
    excludes: [
      "Entry to the Royal Mummies Hall (optional extra)",
      "Tips",
      "Personal expenses",
    ],
  },

  // ============================================================
  //  TOUR 6: Islamic Cairo Walking Tour
  // ============================================================

  {
    title: "Islamic Cairo Walking Tour",
    titleAr: "جولة المشي في القاهرة الإسلامية",
    slug: "islamic-cairo-walking-tour",
    description: "Explore the historic heart of medieval Cairo on this immersive walking tour through one of the most fascinating Islamic districts in the world. Islamic Cairo is a UNESCO World Heritage site and a treasure trove of stunning mosques, madrasas, and historic markets. Your guide will lead you through the narrow alleyways to visit the spectacular Al-Hakim Mosque, the magnificent Qalawun Complex with its hospital and madrasa, and the bustling Bab Zuweila gate. The tour culminates at the vibrant Khan el-Khalili bazaar where you can experience the authentic atmosphere of Cairo's oldest marketplace. Learn about the Fatimid, Mamluk, and Ottoman architectural styles that make Islamic Cairo an open-air museum of Islamic civilization.",
    descriptionAr: "استكشف قلب القاهرة التاريخية في هذه الجولة المشي الغامرة عبر واحدة من أكثر المناطق الإسلامية روعة في العالم. القاهرة الإسلامية هي موقع تراث عالمي لليونسكو وكنز من المساجد والمدارس والأسواق التاريخية المذهلة. سيقودك مرشدك عبر الأزقة الضيقة لزيارة مسجد الحاكم بأمر الله الرائع ومجمع قلاوون المهيب وباب زويلة الصاخب.",
    category: "Guided tours and free tours",
    price: { original: 33.00, discounted: 26.40, currency: "USD" },
    duration: "3 hours",
    language: ["English", "Arabic", "French", "Spanish"],
    rating: { score: 8.6, reviews: 65 },
    travellers: 820,
    freeCancellation: true,
    highlights: [
      "Walk through the historic streets of UNESCO-listed Islamic Cairo",
      "Visit the spectacular Al-Hakim Mosque and the Qalawun Complex",
      "Explore Bab Zuweila — one of Cairo's ancient city gates",
      "Wander through the famous Khan el-Khalili bazaar",
      "Learn about Fatimid, Mamluk, and Ottoman architecture",
      "Small group for a personalized experience",
    ],
    includes: [
      "Expert licensed guide",
      "Walking tour of Islamic Cairo",
    ],
    excludes: [
      "Hotel pickup and drop-off (meeting point provided)",
      "Entrance fees to monuments (approx. $5–10 total)",
      "Tips",
      "Personal expenses",
    ],
  },

  // ============================================================
  //  TOUR 7: Nile Dinner Cruise with Show
  // ============================================================

  {
    title: "Nile Dinner Cruise with Show",
    titleAr: "رحلة نيلية مع العشاء والعرض",
    slug: "nile-dinner-cruise-show",
    description: "Experience Cairo's enchanting night-time skyline aboard a elegant Nile cruise ship. As you glide along the legendary river, enjoy a delicious open-buffet dinner featuring a variety of Egyptian and international dishes. The evening comes alive with spectacular live entertainment including a mesmerizing Tanoura dance performance — a whirling Sufi dance tradition — and a thrilling belly dance show. Watch as the lights of Cairo's bridges, towers, and historic buildings reflect off the Nile's surface, creating a magical atmosphere you'll never forget. A perfect introduction to Cairo's vibrant nightlife and a wonderful way to spend your evening in the Egyptian capital.",
    descriptionAr: "استمتع بأفق القاهرة الليلي الساحر على متن سفينة نيلية أنيقة. بينما تنزلق على طول النهر الأسطوري، استمتع بعشاء بوفيه مفتوح لذيذ مع مجموعة متنوعة من الأطباق المصرية والعالمية. تنبض الأمسية بالحياة مع عروض ترفيهية مذهلة تشمل رقصة التنورة الساحرة ورقصة شرقية مثيرة. شاهد أضواء جسور وأبراج القاهرة تنعكس على سطح النيل.",
    category: "Guided tours and free tours",
    price: { original: 48.50, discounted: 38.80, currency: "USD" },
    duration: "3 hours",
    language: ["English", "Arabic"],
    rating: { score: 7.9, reviews: 382 },
    travellers: 8940,
    freeCancellation: true,
    highlights: [
      "Glide along the Nile on a luxurious dinner cruise",
      "Enjoy a delicious open-buffet dinner with Egyptian and international cuisine",
      "Watch a mesmerizing Tanoura whirling dervish dance performance",
      "See a thrilling traditional belly dance show",
      "Admire Cairo's illuminated skyline from the water",
      "Hotel pickup and drop-off included",
    ],
    includes: [
      "Nile cruise",
      "Open-buffet dinner",
      "Live Tanoura and belly dance shows",
      "Hotel pickup and drop-off in Cairo",
    ],
    excludes: [
      "Beverages (soft drinks and alcoholic drinks available for purchase)",
      "Tips",
    ],
  },

  // ============================================================
  //  TOUR 8: Coptic Cairo & Old Cairo Tour
  // ============================================================

  {
    title: "Coptic Cairo & Old Cairo Tour",
    titleAr: "جولة القاهرة القبطية ومصر القديمة",
    slug: "coptic-cairo-old-cairo-tour",
    description: "Explore the most ancient and spiritually rich quarter of Egypt's capital on this half-day guided tour of Coptic Cairo and Old Cairo. This area, one of the oldest inhabited parts of the city, is where different religions and cultures have intersected for over two millennia. Visit the famous Hanging Church (Saint Virgin Mary's Coptic Orthodox Church), built atop the ruins of a Roman fortress and dating back to the 3rd century AD. Explore the Church of Saints Sergius and Bacchus (Abu Serga), traditionally believed to be built on the spot where the Holy Family rested during their flight into Egypt. Visit the Ben Ezra Synagogue, the Coptic Museum with its extraordinary collection of Christian artifacts, and explore the remains of the Roman fortress of Babylon. A fascinating journey through Cairo's multi-religious heritage.",
    descriptionAr: "استكشف أقدم وأغنى حي روحاني في عاصمة مصر في هذه الجولة المصحوبة بمرشد لنصف يوم في القاهرة القبطية ومصر القديمة. هذه المنطقة هي واحدة من أقدم الأجزاء المأهولة في المدينة حيث تتداخل الأديان والثقافات المختلفة منذ أكثر من ألفي عام. زر الكنيسة المعلقة الشهيرة وكنيسة القديسين سرجيوس وباخوس (أبو سرجة) والمتحف القبطي.",
    category: "Guided tours and free tours",
    price: { original: 45.00, discounted: 36.00, currency: "USD" },
    duration: "4 hours",
    language: ["English", "Arabic", "French"],
    rating: { score: 8.3, reviews: 127 },
    travellers: 1840,
    freeCancellation: true,
    highlights: [
      "Visit the Hanging Church — one of the oldest churches in Egypt",
      "Explore the Church of Abu Serga where the Holy Family rested",
      "Discover the Ben Ezra Synagogue and the Coptic Museum",
      "Walk through the ruins of the Roman fortress of Babylon",
      "Learn about Cairo's multi-religious heritage over 2,000 years",
      "Hotel pickup and drop-off included",
    ],
    includes: [
      "Expert licensed guide",
      "Hotel pickup and drop-off",
      "Air-conditioned transport",
      "Entrance fees to all sites",
    ],
    excludes: [
      "Tips",
      "Personal expenses",
    ],
  },

  // ============================================================
  //  TOUR 9: Sound & Light Show at the Pyramids of Giza
  // ============================================================

  {
    title: "Sound & Light Show at the Pyramids of Giza",
    titleAr: "عرض الصوت والضوء في أهرامات الجيزة",
    slug: "sound-light-show-pyramids-giza",
    description: "Experience the Pyramids of Giza in an entirely new light — literally. As darkness falls over the Giza Plateau, the ancient monuments become the backdrop for one of Egypt's most spectacular nighttime experiences. The Sound and Light Show at the Pyramids is a breathtaking multimedia spectacle that narrates the history of ancient Egypt through dramatic lighting projected onto the pyramids and the Sphinx, accompanied by a captivating soundtrack and a narrated story that spans 5,000 years of civilization. The show brings to life the pharaohs, their gods, and the remarkable achievements of one of humanity's greatest civilizations. Choose from multiple language narrations and watch as the desert sky becomes a canvas of ancient stories.",
    descriptionAr: "جرب أهرامات الجيزة في ضوء جديد تماماً — حرفياً. مع حلول الظلام على هضبة الجيزة، تصبح الآثار القديمة خلفية لأكثر تجارب مصر الليلية إثارة. عرض الصوت والضوء في الأهرامات هو مشهد وسائط متعددة يروي تاريخ مصر القديمة من خلال الإضاءة الدرامية المسلطة على الأهرامات وأبو الهول.",
    category: "Performances",
    price: { original: 30.00, discounted: 24.00, currency: "USD" },
    duration: "1.5 hours",
    language: ["English", "Arabic", "French", "Spanish", "German", "Italian"],
    rating: { score: 7.5, reviews: 890 },
    travellers: 15230,
    freeCancellation: true,
    highlights: [
      "Watch the Pyramids and Sphinx illuminated in stunning colors",
      "Listen to the narrated history of ancient Egypt",
      "Choose from multiple language options for narration",
      "A magical nighttime experience at the Giza Plateau",
      "Hotel pickup and drop-off included",
    ],
    includes: [
      "Entry ticket to the Sound & Light Show",
      "Hotel pickup and drop-off",
      "Air-conditioned transport",
    ],
    excludes: [
      "Tips",
      "Personal expenses",
    ],
  },

  // ============================================================
  //  TOUR 10: Cairo Street Food Tour
  // ============================================================

  {
    title: "Cairo Street Food Tour",
    titleAr: "جولة طعام الشارع في القاهرة",
    slug: "cairo-street-food-tour",
    description: "Discover the authentic flavors of Cairo through its vibrant street food culture on this delicious guided tour. Egyptian cuisine is a rich tapestry of Mediterranean, Middle Eastern, and African influences, and nowhere is it more alive than in Cairo's bustling streets and local eateries. Your guide will take you through the city's best food neighborhoods to sample a variety of iconic Egyptian dishes. Taste the national dish koshari — a hearty mix of rice, lentils, pasta, chickpeas, and crispy onions topped with tangy tomato sauce. Try foul and falafel (ta'ameya) from a century-old family recipe, sizzling liver sandwiches from street vendors, and sweet konafa or basbousa for dessert. Wash it all down with traditional sugarcane juice or karkadeh (hibiscus iced tea). A feast for the senses!",
    descriptionAr: "اكتشف النكهات الأصيلة للقاهرة من خلال ثقافة طعام الشارع النابضة بالحياة في هذه الجولة اللذيذة المصحوبة بمرشد. المطبخ المصري هو نسيج غني من التأثيرات المتوسطية والشرق أوسطية والأفريقية. سيأخذك مرشدك عبر أفضل أحياء الطعام في المدينة لتذوق مجموعة متنوعة من الأطباق المصرية الشهيرة مثل الكشري والفلافل والفول والكبد والكنافة.",
    category: "Guided tours and free tours",
    price: { original: 55.00, discounted: 44.00, currency: "USD" },
    duration: "4 hours",
    language: ["English", "Arabic"],
    rating: { score: 8.8, reviews: 89 },
    travellers: 1250,
    freeCancellation: true,
    highlights: [
      "Taste authentic Egyptian street food including koshari, falafel, and foul",
      "Visit local eateries and street vendors beloved by Cairenes",
      "Sample traditional Egyptian sweets like konafa and basbousa",
      "Drink sugarcane juice and karkadeh (hibiscus tea)",
      "Learn about Egyptian culinary history and food culture",
      "Small group experience with a local foodie guide",
    ],
    includes: [
      "Local foodie guide",
      "All food tastings (enough for a full meal)",
      "Soft drinks and traditional beverages",
    ],
    excludes: [
      "Hotel pickup and drop-off (meeting point provided)",
      "Tips",
      "Extra food or drinks beyond the tasting menu",
    ],
  },

  // ============================================================
  //  TOUR 11: Citadel of Saladin & Mohamed Ali Mosque Tour
  // ============================================================

  {
    title: "Citadel of Saladin & Mohamed Ali Mosque Tour",
    titleAr: "جولة قلعة صلاح الدين ومسجد محمد علي",
    slug: "citadel-saladin-mohamed-ali-mosque-tour",
    description: "Discover the medieval grandeur of Islamic Cairo on this focused tour of Cairo's most iconic fortress and its crowning jewel — the magnificent Mohamed Ali Mosque. The Saladin Citadel, built between 1176 and 1183 AD by the legendary Muslim leader Saladin, dominated Cairo's skyline for nearly 700 years and served as the seat of Egyptian government until the 19th century. From its elevated terrace at 75 metres above the city, enjoy spectacular panoramic views of Cairo's ancient mosques and the distant Pyramids. Inside the fortress, visit the Mohamed Ali Mosque — one of the most beautiful mosques in the Middle East, built between 1830 and 1848 in a stunning Ottoman style with an alabaster interior, hanging brass chandeliers, and twin minarets. Also explore the Citadel's courtyards, towers, and the optional Military Museum.",
    descriptionAr: "اكتشف روعة القاهرة الإسلامية في العصور الوسطى في هذه الجولة المتخصصة لأيقونة القاهرة الأكثر شهرة وجوهرتها الرائعة — مسجد محمد علي. قلعة صلاح الدين التي بناها القائد المسلم الأسطوري صلاح الدين بين 1176 و1183 ميلادية هيمنت على أفق القاهرة لما يقرب من 700 عام. من شرفتها المرتفعة 75 متراً فوق المدينة، استمتع بإطلالات بانورامية رائعة.",
    category: "Guided tours and free tours",
    price: { original: 40.00, discounted: 32.00, currency: "USD" },
    duration: "3 hours",
    language: ["English", "Arabic", "French", "Spanish"],
    rating: { score: 8.4, reviews: 215 },
    travellers: 3200,
    freeCancellation: true,
    highlights: [
      "Visit the historic Saladin Citadel — Cairo's medieval fortress",
      "Enjoy panoramic views of Cairo from 75 metres above the city",
      "Tour the magnificent Mohamed Ali Mosque with its alabaster interior",
      "Explore the Citadel's courtyards, towers, and galleries",
      "Learn about Saladin's history and the Ayyubid dynasty",
      "Hotel pickup and drop-off included",
    ],
    includes: [
      "Expert licensed guide",
      "Hotel pickup and drop-off",
      "Entrance fee to Saladin Citadel",
      "Entrance fee to Mohamed Ali Mosque",
      "Air-conditioned transport",
    ],
    excludes: [
      "Entry to the Military Museum (optional)",
      "Tips",
      "Personal expenses",
    ],
  },

  // ============================================================
  //  TOUR 12: White Desert & Bahariya Oasis 2-Day Tour
  // ============================================================

  {
    title: "White Desert & Bahariya Oasis 2-Day Tour from Cairo",
    titleAr: "رحلة يومين إلى الصحراء البيضاء وواحة البحرية من القاهرة",
    slug: "white-desert-bahariya-oasis-2-day-cairo",
    description: "Escape the city for an unforgettable two-day desert adventure from Cairo to the otherworldly landscapes of the White Desert and the lush Bahariya Oasis. Travel deep into the Western Desert to discover one of Egypt's most extraordinary natural wonders — the White Desert, where wind-carved chalk rock formations create a surreal lunar-like landscape of towering white monoliths, giant mushrooms, and sculpted ridges. Camp overnight under a canopy of stars in the heart of the desert, enjoy a Bedouin dinner around a campfire, and wake up to a golden sunrise painting the white rocks in shades of pink and orange. The tour also includes visiting the Black Desert, the Crystal Mountain, and the hot springs of Bahariya Oasis. A truly magical escape.",
    descriptionAr: "اهرب من المدينة في مغامرة صحراوية لا تُنسى لمدة يومين من القاهرة إلى المناظر الطبيعية الخارقة للصحراء البيضاء وواحة البحرية الخصبة. سافر عميقاً في الصحراء الغربية لاكتشاف الصحراء البيضاء حيث تشكل التكوينات الصخرية الطباشيرية المنحوتة بالرياح منظراً طبيعياً سريالياً. خيم تحت السماء المرصعة بالنجوم واستمتع بعشاء بدوي حول نار المخيم.",
    category: "Tour packages",
    price: { original: 185.00, discounted: 148.00, currency: "USD" },
    duration: "2 days",
    language: ["English", "Arabic", "French"],
    rating: { score: 8.6, reviews: 76 },
    travellers: 1450,
    freeCancellation: true,
    highlights: [
      "Explore the surreal White Desert with its chalk rock formations",
      "Camp overnight under the stars in the Western Desert",
      "Visit the Black Desert, Crystal Mountain, and hot springs",
      "Enjoy a Bedouin dinner around a campfire",
      "Witness a spectacular desert sunrise",
      "Visit the lush Bahariya Oasis",
    ],
    includes: [
      "Private air-conditioned transport from Cairo",
      "Expert guide and driver",
      "Overnight camping in the White Desert (tent and sleeping bag)",
      "Dinner and breakfast in the desert",
      "All entrance fees and permits",
    ],
    excludes: [
      "Lunch on both days",
      "Tips",
      "Personal expenses",
      "Sleeping bag (if you prefer your own)",
    ],
  },

  // ============================================================
  //  TOUR 13: Grand Egyptian Museum & Pyramids of Giza Combo
  // ============================================================

  {
    title: "Grand Egyptian Museum & Pyramids of Giza Tour & Tickets",
    titleAr: "المتحف المصري الكبير وأهرامات الجيزة جولة وتذاكر",
    slug: "grand-egyptian-museum-pyramids-giza",
    description: "Combine two of the greatest wonders of Egypt in one expertly guided day — the legendary Pyramids of Giza and the spectacular new Grand Egyptian Museum (GEM). Your journey begins at the Giza Plateau where you'll stand before the last surviving Wonder of the Ancient World. See the three great pyramids, the iconic Sphinx, and the Valley Temple. Then cross the plateau to the Grand Egyptian Museum, the largest archaeological museum on Earth. Marvel at the colossal 3,200-year-old statue of Ramesses II in the Grand Hall, explore the Tutankhamun galleries displaying over 5,000 objects from the boy king's tomb, and discover the breathtaking Royal Mummies Hall. A day of unparalleled ancient wonders.",
    descriptionAr: "اجمع بين أعظم عجيبتي مصر في يوم واحد تحت إشراف خبير — أهرامات الجيزة الأسطورية والمتحف المصري الكبير الجديد المذهل. تبدأ رحلتك في هضبة الجيزة حيث ستقف أمام آخر عجائب العالم القديم الباقية. ثم انتقل إلى المتحف المصري الكبير، أكبر متحف أثري على وجه الأرض. تأمل تمثال رمسيس الثاني الضخم واستكشف قاعات توت عنخ آمون.",
    category: "Guided tours and free tours",
    price: { original: 105.73, discounted: null, currency: "USD" },
    duration: "6 hours",
    language: ["English", "Arabic", "French", "Spanish", "German"],
    rating: { score: 8.8, reviews: 26 },
    travellers: 420,
    freeCancellation: true,
    highlights: [
      "Visit the Pyramids of Giza — the last surviving Wonder of the Ancient World",
      "See the Great Sphinx and Valley Temple at the Giza Plateau",
      "Explore the Grand Egyptian Museum — the world's largest archaeological museum",
      "Marvel at the colossal statue of Ramesses II in the Grand Hall",
      "See the complete Tutankhamun treasure collection",
      "Expert Egyptologist guide throughout",
    ],
    includes: [
      "Expert Egyptologist guide",
      "Hotel pickup and drop-off",
      "Air-conditioned transport",
      "Entrance to Giza Plateau",
      "Entrance to Grand Egyptian Museum",
    ],
    excludes: [
      "Entry inside the Great Pyramid (optional extra)",
      "Entry to the Royal Mummies Hall (optional extra)",
      "Lunch",
      "Tips",
    ],
  },

  // ============================================================
  //  TOUR 14: Day Trip to the Suez Canal from Cairo
  // ============================================================

  {
    title: "Day Trip to the Suez Canal from Cairo",
    titleAr: "رحلة يوم إلى قناة السويس من القاهرة",
    slug: "suez-canal-day-trip-cairo",
    description: "Travel to the crossroads of Europe, Africa, and Asia on this full-day trip from Cairo to the legendary Suez Canal — one of the greatest engineering achievements in modern history. You'll visit the Suez Canal Museum in Port Said to learn about the canal's construction, then head to the waterfront to watch massive container ships from around the world passing through this vital waterway. Continue to the city of Ismailia on the shores of Lake Timsah, a charming city built by the French during the canal's construction. The tour also includes a visit to the War Memorial and the opportunity to walk along the banks of the canal. A fascinating journey into modern Egyptian history and global trade.",
    descriptionAr: "سافر إلى مفترق طرق أوروبا وأفريقيا وآسيا في هذه الرحلة اليومية من القاهرة إلى قناة السويس الأسطورية — أحد أعظم الإنجازات الهندسية في التاريخ الحديث. ستزور متحف قناة السويس في بورسعيد وتشاهد سفن الحاويات العملاقة. تابع إلى مدينة الإسماعيلية على ضفاف بحيرة التمساح.",
    category: "Day trip",
    price: { original: 99.86, discounted: 79.88, currency: "USD" },
    duration: "10 hours",
    language: ["English", "Arabic", "French"],
    rating: { score: 7.2, reviews: 31 },
    travellers: 450,
    freeCancellation: true,
    highlights: [
      "Visit the strategic Suez Canal — one of the world's most important waterways",
      "Watch massive container ships transit the canal from Port Said",
      "Explore the charming city of Ismailia on Lake Timsah",
      "Learn about the canal's construction history at the museum",
      "Hotel pickup and drop-off from Cairo included",
    ],
    includes: [
      "Expert guide",
      "Hotel pickup and drop-off",
      "Air-conditioned transport",
      "Entrance fees to all sites",
      "Lunch at a local restaurant",
    ],
    excludes: [
      "Tips",
      "Personal expenses",
      "Boat ride on the canal (optional extra)",
    ],
  },

  // ============================================================
  //  TOUR 15: Civitatis eSIM Card Egypt
  // ============================================================

  {
    title: "Civitatis eSIM Card Egypt",
    titleAr: "شريحة eSIM لمصر من Civitatis",
    slug: "civitatis-esim-card-egypt-cairo",
    description: "Stay connected throughout your Egyptian adventure with this convenient travel eSIM. Whether you're navigating the streets of Cairo, sharing photos from the Pyramids of Giza, or researching the history of the Egyptian Museum, this eSIM gives you reliable mobile data coverage across all of Egypt. No need to search for a local SIM card or worry about expensive roaming charges — simply activate digitally before you travel and enjoy seamless connectivity from the moment you arrive. Available in multiple durations to match the length of your trip.",
    descriptionAr: "ابقَ متصلاً طوال مغامرتك المصرية مع بطاقة eSIM السياحية المريحة هذه. سواء كنت تتنقل في شوارع القاهرة أو تشارك صوراً من أهرامات الجيزة أو تبحث عن تاريخ المتحف المصري، تمنحك هذه البطاقة تغطية بيانات جوال موثوقة في جميع أنحاء مصر دون الحاجة للبحث عن بطاقة SIM محلية.",
    category: "Additional services",
    price: { original: 5.50, discounted: null, currency: "USD" },
    duration: "7-30 days",
    language: ["English"],
    rating: { score: 7.7, reviews: 107 },
    travellers: 2096,
    freeCancellation: false,
    highlights: [
      "Mobile data coverage across Egypt",
      "No physical SIM swap needed",
      "Easy digital activation before arrival",
      "Available in 7, 15, and 30-day plans",
      "Works in Cairo and all Egyptian destinations",
    ],
    includes: ["eSIM data plan for selected duration"],
    excludes: ["Voice calls", "SMS"],
  },

  // ============================================================
  //  TOUR 16: Civitatis Travel Insurance
  // ============================================================

  {
    title: "Civitatis Travel Insurance",
    titleAr: "تأمين السفر من Civitatis",
    slug: "civitatis-travel-insurance-cairo",
    description: "Travel through Cairo and Egypt with total peace of mind thanks to Civitatis Travel Insurance. Whether you're exploring ancient pyramids, navigating bustling bazaars, or making day trips to Alexandria and the desert, unexpected events can always happen. This comprehensive travel insurance covers medical emergencies, trip cancellations, delayed or lost luggage, and much more — so nothing can spoil your Egyptian adventure. Available for trips lasting between 3 and 31 days.",
    descriptionAr: "سافر عبر القاهرة ومصر براحة بال تامة بفضل تأمين سفر Civitatis. سواء كنت تستكشف الأهرامات القديمة أو تتجول في الأسواق الصاخبة أو تقوم برحلات يومية إلى الإسكندرية والصحراء، يمكن أن تحدث أحداث غير متوقعة دائماً. يغطي هذا التأمين الشامل للسفر الحالات الطارئة الطبية وإلغاء الرحلات والأمتعة المتأخرة أو المفقودة.",
    category: "Additional services",
    price: { original: 11.48, discounted: null, currency: "USD" },
    duration: "3-31 days",
    language: ["English"],
    rating: { score: 8.2, reviews: 3059 },
    travellers: 105388,
    freeCancellation: false,
    highlights: [
      "Comprehensive travel insurance for Cairo and Egypt",
      "Covers medical emergencies and trip cancellations",
      "Available for 3 to 31-day trips",
      "Peace of mind for all sightseeing and day trips",
    ],
    includes: ["Travel insurance coverage as per selected plan"],
    excludes: ["Pre-existing medical conditions (check policy)"],
  },
];

export { cityData, toursData };
