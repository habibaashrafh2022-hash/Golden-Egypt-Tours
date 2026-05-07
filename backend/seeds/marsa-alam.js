// seeds/cities/marsa-alam.js

const cityData = {
  name: "Marsa Alam",
  nameAr: "مرسى علم",
  slug: "marsa-alam",
  description:
    "Marsa Alam is one of Egypt's best-kept secrets — a pristine and largely unspoiled stretch of the Red Sea coast that offers some of the finest diving, snorkeling, and wildlife encounters in the world. Located about 200 kilometers south of Hurghada, this laid-back coastal town feels a world away from the crowded resorts of the north, attracting travelers who seek raw natural beauty, extraordinary marine life, and genuine tranquility. The waters here are home to spinner dolphins, dugongs, sea turtles, hammerhead sharks, and spectacular coral reefs at legendary sites like Elphinstone Reef and Sataya Dolphin House. Inland, the vast Eastern Desert stretches to the horizon, dotted with ancient Pharaonic gold mines, Bedouin villages, and dramatic desert scenery.",
  descriptionAr:
    "مرسى علم هي واحدة من أفضل أسرار مصر — امتداد بكر وغير مدنّس إلى حد بعيد من ساحل البحر الأحمر يقدم بعضاً من أفضل تجارب الغوص والغطس ومشاهدة الحياة البرية في العالم. تقع على بُعد حوالي 200 كيلومتر جنوب الغردقة، وتبدو هذه المدينة الساحلية الهادئة بعيدة كل البعد عن منتجعات الشمال المزدحمة، وتستقطب المسافرين الباحثين عن جمال طبيعي خام وحياة بحرية استثنائية وهدوء حقيقي.",
  country: "Egypt",
  image: "marsa-alam.jpg",
};

const toursData = [
  {
    title: "Snorkel Sharm El Luli & Wadi El Qulaan",
    titleAr: "غطس في شرم اللولي ووادي القلعان",
    slug: "snorkel-sharm-luli-wadi-qulaan-marsa-alam",
    description:
      "Spend a magical morning snorkeling at two of the most beautiful and biodiverse marine sites on the Red Sea coast near Marsa Alam. Sharm El Luli is a breathtaking natural bay with crystal-clear turquoise waters, a powder-white sandy beach, and thriving coral reefs teeming with colorful marine life. Wadi El Qulaan is part of a protected national park with pristine underwater ecosystems, sea turtles, and spectacular reef fish. Together, they offer a truly unforgettable Red Sea snorkeling experience in some of Egypt's most unspoiled natural environments.",
    descriptionAr:
      "أمضِ صباحاً ساحراً في الغطس في اثنين من أكثر المواقع البحرية جمالاً وتنوعاً بيولوجياً على ساحل البحر الأحمر بالقرب من مرسى علم. شرم اللولي خليج طبيعي رائع بمياه فيروزية صافية وشاطئ رملي أبيض ناعم وشعاب مرجانية مزدهرة مليئة بالحياة البحرية الملونة. ووادي القلعان جزء من حديقة وطنية محمية بنظم بيئية مائية بكر وسلاحف بحرية وأسماك شعاب رائعة.",
    category: "Adventure and nature",
    price: {
      original: 35.00,
      discounted: null,
      currency: "USD",
    },
    duration: "4 hours",
    language: ["English"],
    rating: {
      score: 8.2,
      reviews: 24,
    },
    travellers: 312,
    freeCancellation: true,
    highlights: [
      "Snorkeling at the stunning Sharm El Luli bay",
      "Explore Wadi El Qulaan National Park waters",
      "See sea turtles, colorful fish, and coral reefs",
      "Two of Marsa Alam's most pristine snorkeling spots",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Boat trip", "Snorkeling equipment", "Guide", "Hotel pickup and drop-off"],
    excludes: ["Meals", "Tips", "Personal expenses"],
  },
  {
    title: "Snorkeling in Marsa Mubarak",
    titleAr: "الغطس في مرسى مبارك",
    slug: "snorkeling-marsa-mubarak-marsa-alam",
    description:
      "Discover the extraordinary marine beauty of Marsa Mubarak — one of the most beautiful and protected bays on Egypt's Red Sea coastline — on this full-day snorkeling boat trip from Marsa Alam. Known locally as Turtle Bay, Marsa Mubarak is a legendary spot for encounters with wild sea turtles that feed on the seagrass beds just below the surface, as well as a rich variety of reef fish and coral formations. You'll have two dedicated snorkeling sessions to explore this remarkable underwater world, with a delicious buffet lunch served on board between dives.",
    descriptionAr:
      "اكتشف الجمال البحري الاستثنائي لمرسى مبارك — إحدى أجمل الخلجان وأكثرها حماية على ساحل البحر الأحمر المصري — في هذه الرحلة البحرية اليومية للغطس من مرسى علم. المعروف محلياً بخليج السلاحف، مرسى مبارك موقع أسطوري للقاء السلاحف البحرية البرية التي تتغذى على أعشاب البحر تحت السطح مباشرة.",
    category: "Boat tour",
    price: {
      original: 42.00,
      discounted: null,
      currency: "USD",
    },
    duration: "8 hours",
    language: ["English"],
    rating: {
      score: 8.0,
      reviews: 31,
    },
    travellers: 428,
    freeCancellation: true,
    highlights: [
      "Two snorkeling sessions in Marsa Mubarak (Turtle Bay)",
      "Swim alongside wild sea turtles",
      "Explore pristine protected coral reefs",
      "Buffet lunch with Egyptian dishes served on board",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Boat trip", "Snorkeling equipment", "Buffet lunch", "Hotel pickup and drop-off"],
    excludes: ["Wetsuit rental", "Tips", "Personal expenses"],
  },
  {
    title: "Snorkeling in Qulaan Islands",
    titleAr: "الغطس في جزر القلعان",
    slug: "snorkeling-qulaan-islands-marsa-alam",
    description:
      "Sail south to the remote and spectacular Qulaan Islands for a full-day snorkeling adventure in one of the most unspoiled marine environments on the entire Red Sea coast. Located within the protected Wadi El Gemal National Park near Hamata, the Qulaan Archipelago is surrounded by pristine coral reefs, crystal-clear waters, and a rich diversity of marine life including reef sharks, dolphins, sea turtles, and hundreds of species of fish. You'll snorkel at multiple reef points and stop on one of the islands to walk its white sandy beaches and explore its lush flora and fauna.",
    descriptionAr:
      "أبحر جنوباً إلى جزر القلعان النائية الرائعة في مغامرة غطس يومية في واحدة من أكثر البيئات البحرية نقاءً على ساحل البحر الأحمر بأكمله. تقع داخل محمية وادي الجمال الوطنية المحمية بالقرب من حماطة، وتحيط بأرخبيل القلعان شعاب مرجانية بكر ومياه صافية بلورياً وتنوع غني من الحياة البحرية.",
    category: "Boat tour",
    price: {
      original: 55.00,
      discounted: null,
      currency: "USD",
    },
    duration: "9 hours",
    language: ["English"],
    rating: {
      score: 8.5,
      reviews: 18,
    },
    travellers: 196,
    freeCancellation: true,
    highlights: [
      "Boat trip to the remote Qulaan Islands",
      "Snorkel at multiple pristine reef points",
      "Explore the island's beaches and wildlife",
      "Spot dolphins, sea turtles, and reef sharks",
      "Buffet lunch on board included",
    ],
    includes: ["Boat trip", "Snorkeling equipment", "Buffet lunch", "Hotel pickup and drop-off"],
    excludes: ["Tips", "Personal expenses"],
  },
  {
    title: "Red Sea Egyptian Boat Tour",
    titleAr: "جولة القارب المصري في البحر الأحمر",
    slug: "red-sea-egyptian-boat-tour-marsa-alam",
    description:
      "Step aboard the Nefertari — a stunning Egyptian-themed boat decorated like the interior of an ancient pharaonic tomb — for a unique and magical day on the Red Sea. The boat's lower observation deck sits three meters below the waterline, offering panoramic window views of the coral reef, sea turtles, stingrays, dolphins, and if you're very lucky, the elusive dugong (sea cow) that inhabits these protected waters. Sail to Marsa Mubarak, one of the most beautiful bays in Egypt, for snorkeling sessions, and enjoy a delicious on-board lunch on this extraordinary floating museum experience.",
    descriptionAr:
      "اصعد على متن نفرتاري — قارب مصري الطابع الرائع مزيّن كأنك داخل مقبرة فرعونية قديمة — ليوم فريد وساحر على البحر الأحمر. تقع منصة المراقبة السفلية للقارب ثلاثة أمتار تحت خط الماء، وتقدم مناظر بانورامية من النوافذ للشعاب المرجانية وسلاحف البحر والراي والدلافين، وإذا كنت محظوظاً جداً، أطواق البحر (بقرة البحر) الذي يسكن هذه المياه المحمية.",
    category: "Boat tour",
    price: {
      original: 48.00,
      discounted: null,
      currency: "USD",
    },
    duration: "7 hours",
    language: ["English"],
    rating: {
      score: 8.3,
      reviews: 27,
    },
    travellers: 345,
    freeCancellation: true,
    highlights: [
      "Sail aboard the unique Egyptian-themed Nefertari boat",
      "Observe marine life through underwater panoramic windows",
      "Chance to spot dugongs, dolphins, and sea turtles",
      "Snorkeling at Marsa Mubarak bay",
      "On-board lunch included",
    ],
    includes: ["Boat trip", "Underwater observation deck", "Snorkeling equipment", "Lunch", "Hotel pickup and drop-off"],
    excludes: ["Tips", "Personal expenses"],
  },
  {
    title: "Desert Quad Tour + Camel Ride + Dinner & Show",
    titleAr: "جولة الكواد في الصحراء مع ركوب الجمل والعشاء والعرض",
    slug: "desert-quad-camel-ride-dinner-show-marsa-alam",
    description:
      "Experience the wild and dramatic Eastern Desert of Marsa Alam at its most magical on this unforgettable sunset desert adventure. Race across the golden dunes on a powerful quad bike for 40 minutes, weaving through the desert terrain until you reach a traditional Bedouin village where you'll sip sweet Bedouin tea and learn about desert life. As the sun sets spectacularly over the dunes, hop onto a camel and ride through the cooling desert before gathering around a camp fire for a lively traditional show and a delicious Bedouin dinner under a vast, star-filled sky.",
    descriptionAr:
      "اختبر صحراء الشرق الوحشية والدرامية في مرسى علم في أكثر لحظاتها سحراً في هذه المغامرة الصحراوية الذكرى عند الغروب. تسابق عبر الكثبان الذهبية على دراجة رباعية قوية لمدة 40 دقيقة متنقلاً عبر التضاريس الصحراوية حتى تصل إلى قرية بدوية تقليدية حيث ستحتسي الشاي البدوي الحلو وتتعلم عن حياة الصحراء.",
    category: "Day trip",
    price: {
      original: 55.00,
      discounted: null,
      currency: "USD",
    },
    duration: "7 hours",
    language: ["English"],
    rating: {
      score: 7.8,
      reviews: 19,
    },
    travellers: 267,
    freeCancellation: true,
    highlights: [
      "40-minute quad bike ride through desert dunes",
      "Visit a traditional Bedouin village",
      "Camel ride at sunset",
      "Traditional Bedouin dinner under the stars",
      "Live music and dance show",
    ],
    includes: ["Quad bike", "Camel ride", "Bedouin dinner", "Show", "Hotel pickup and drop-off"],
    excludes: ["Alcoholic drinks", "Tips", "Personal expenses"],
  },
  {
    title: "Quad Tour + Camel Ride + Snorkeling in the Red Sea",
    titleAr: "جولة الكواد مع ركوب الجمل والغطس في البحر الأحمر",
    slug: "quad-camel-ride-snorkeling-red-sea-marsa-alam",
    description:
      "Combine the best of land and sea in one incredible action-packed day in Marsa Alam on this desert and sea adventure. Begin by racing across the Saharan dunes on a quad bike for an hour, covering 25-30 kilometers of dramatic desert terrain before reaching a Bedouin village where you'll share tea with local inhabitants and learn about their ancient desert traditions. Then hop onto a camel for a peaceful 15-minute ride through the sand before jumping on a bus to the coast for a refreshing snorkeling session in the crystal-clear waters of the Red Sea.",
    descriptionAr:
      "اجمع أفضل ما تقدمه البرية والبحر في يوم واحد حافل بالنشاط في مرسى علم في مغامرة الصحراء والبحر هذه. ابدأ بالتسابق عبر كثبان الصحراء الكبرى على دراجة رباعية لمدة ساعة، مغطياً 25-30 كيلومتراً من التضاريس الصحراوية الدرامية قبل الوصول إلى قرية بدوية حيث ستشارك الشاي مع السكان المحليين.",
    category: "Adventure and nature",
    price: {
      original: 45.00,
      discounted: null,
      currency: "USD",
    },
    duration: "3 hours",
    language: ["English"],
    rating: {
      score: 7.9,
      reviews: 15,
    },
    travellers: 189,
    freeCancellation: true,
    highlights: [
      "1-hour quad bike ride through Saharan desert",
      "Visit a traditional Bedouin village for tea",
      "15-minute camel ride through the dunes",
      "Snorkeling session in the Red Sea",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Quad bike", "Camel ride", "Snorkeling equipment", "Guide", "Hotel pickup and drop-off"],
    excludes: ["Meals", "Tips", "Personal expenses"],
  },
  {
    title: "Red Sea Beginners Scuba Diving",
    titleAr: "الغوص للمبتدئين في البحر الأحمر",
    slug: "red-sea-beginners-scuba-diving-marsa-alam",
    description:
      "Discover the incredible underwater world of Marsa Alam's Red Sea on this beginner-friendly scuba diving experience that requires absolutely no prior experience. Your certified dive instructor will walk you through all the essential safety techniques and basic diving skills on dry land before accompanying you into the water for dives at two of the best spots along Marsa Alam's stunning coastline. With its pristine coral reefs, extraordinary visibility, and a remarkable variety of marine life, the Red Sea at Marsa Alam is one of the most rewarding places on Earth for a first dive.",
    descriptionAr:
      "اكتشف العالم المائي الرائع للبحر الأحمر في مرسى علم في هذه التجربة الصديقة للمبتدئين في الغوص والتي لا تتطلب أي خبرة سابقة على الإطلاق. سيرشدك مدربك المعتمد خلال جميع تقنيات السلامة الأساسية ومهارات الغوص الأولية على اليابسة قبل مرافقتك إلى الماء للغوص في موقعين من أفضل النقاط على طول الساحل الرائع لمرسى علم.",
    category: "Adventure and nature",
    price: {
      original: 65.00,
      discounted: null,
      currency: "USD",
    },
    duration: "6 hours",
    language: ["English"],
    rating: {
      score: 8.6,
      reviews: 22,
    },
    travellers: 198,
    freeCancellation: true,
    highlights: [
      "Two beginner scuba dives in Marsa Alam's Red Sea",
      "Certified dive instructor throughout",
      "No prior experience required",
      "World-class coral reefs and marine life",
      "All diving equipment provided",
    ],
    includes: ["Two dives", "All diving equipment", "Certified instructor", "Hotel pickup and drop-off"],
    excludes: ["Meals", "Tips", "Personal expenses"],
  },
  {
    title: "Civitatis eSIM Card Egypt",
    titleAr: "شريحة eSIM لمصر من Civitatis",
    slug: "civitatis-esim-card-egypt-marsa-alam",
    description:
      "Stay connected throughout your Marsa Alam adventure with this practical travel eSIM. Whether you're sharing photos from Sataya Dolphin House, navigating to remote dive sites, or looking up information about the Red Sea marine life, this eSIM gives you reliable mobile data coverage across Egypt without the hassle of finding a local SIM card. Simply activate digitally before you travel and enjoy seamless connectivity from the moment you land.",
    descriptionAr:
      "ابقَ متصلاً طوال مغامرتك في مرسى علم مع بطاقة eSIM السياحية العملية هذه. سواء كنت تشارك صوراً من شعاب الساتايا لبيت الدولفين أو تتنقل إلى مواقع الغوص النائية أو تبحث عن معلومات حول الحياة البحرية للبحر الأحمر، تمنحك هذه البطاقة تغطية بيانات جوال موثوقة في جميع أنحاء مصر.",
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
    highlights: [
      "Mobile data coverage across Egypt",
      "No physical SIM swap needed",
      "Easy digital activation before arrival",
      "Available in 7, 15, and 30-day plans",
      "Works in Marsa Alam and all Egyptian destinations",
    ],
    includes: ["eSIM data plan for selected duration"],
    excludes: ["Voice calls", "SMS"],
  },
  {
    title: "Red Sea Semi-Submarine Tour",
    titleAr: "جولة الغواصة شبه الغاطسة في البحر الأحمر",
    slug: "red-sea-semi-submarine-tour-marsa-alam",
    description:
      "Explore the magical underwater world of the Red Sea without getting wet on this fascinating semi-submarine tour from Marsa Alam. Board the specially designed vessel and descend to the lower observation deck, where large panoramic windows give you unobstructed views of the spectacular coral reefs, tropical fish, rays, and sea turtles gliding through the crystal-clear water beneath you. The semi-submarine sails along the most beautiful and biodiverse stretch of Marsa Alam's coast, offering a unique and accessible way for all ages to experience the Red Sea's extraordinary marine treasures.",
    descriptionAr:
      "استكشف العالم المائي السحري للبحر الأحمر دون أن تبتل في هذه الجولة الرائعة بالغواصة شبه الغاطسة من مرسى علم. اصعد على متن السفينة المصممة خصيصاً وانزل إلى منصة المراقبة السفلية، حيث تمنحك النوافذ البانورامية الكبيرة مناظر غير محجوبة للشعاب المرجانية الرائعة وأسماك المناطق الاستوائية والراي وسلاحف البحر.",
    category: "Boat tour",
    price: {
      original: 38.00,
      discounted: null,
      currency: "USD",
    },
    duration: "3 hours",
    language: ["English"],
    rating: {
      score: 7.9,
      reviews: 14,
    },
    travellers: 163,
    freeCancellation: true,
    highlights: [
      "Semi-submarine ride along Marsa Alam's coast",
      "Panoramic underwater views without diving",
      "See coral reefs, fish, rays, and sea turtles",
      "Suitable for all ages including non-swimmers",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Semi-submarine ride", "Hotel pickup and drop-off"],
    excludes: ["Meals", "Tips", "Personal expenses"],
  },
  {
    title: "Day Trip to Luxor from Marsa Alam",
    titleAr: "رحلة يوم إلى الأقصر من مرسى علم",
    slug: "day-trip-luxor-marsa-alam",
    description:
      "Venture inland from the Red Sea coast on this extraordinary day trip to Luxor, one of the greatest ancient cities in the world. The journey by minibus takes approximately five hours each way, but the remarkable experiences that await make every minute worthwhile. Your expert Egyptologist guide will take you to the Valley of the Kings to explore three elaborately decorated royal tombs, the stunning cliff-carved Mortuary Temple of Hatshepsut, and the towering Colossi of Memnon. For those with energy to spare, an optional afternoon boat trip on the Nile can be arranged.",
    descriptionAr:
      "توجه إلى الداخل من ساحل البحر الأحمر في هذه الرحلة اليومية الاستثنائية إلى الأقصر، إحدى أعظم المدن القديمة في العالم. تستغرق الرحلة بالميني باص حوالي خمس ساعات في كل اتجاه، لكن التجارب الرائعة التي تنتظرك تجعل كل دقيقة تستحق. سيأخذك مرشدك الأثري الخبير إلى وادي الملوك لاستكشاف ثلاثة مقابر ملكية مزخرفة بشكل رائع.",
    category: "Day trip",
    price: {
      original: 95.00,
      discounted: null,
      currency: "USD",
    },
    duration: "11 hours",
    language: ["English"],
    rating: {
      score: 8.4,
      reviews: 67,
    },
    travellers: 712,
    freeCancellation: true,
    highlights: [
      "Visit the Valley of the Kings and three royal tombs",
      "See the Mortuary Temple of Hatshepsut",
      "Admire the Colossi of Memnon",
      "Expert Egyptologist guide throughout",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Transport", "Entrance fees", "Lunch"],
    excludes: ["Tutankhamun tomb (extra fee)", "Tips", "Personal expenses"],
  },
  {
    title: "Civitatis Travel Insurance",
    titleAr: "تأمين السفر من Civitatis",
    slug: "civitatis-travel-insurance-marsa-alam",
    description:
      "Explore Marsa Alam's wild reefs and desert landscapes with complete peace of mind thanks to Civitatis Travel Insurance. Whether you're diving at Elphinstone Reef, snorkeling with dolphins at Sataya, or trekking through the Eastern Desert, this comprehensive travel insurance covers medical emergencies, trip cancellations, lost luggage, and much more. Available for trips lasting between 3 and 31 days, it's the smart traveler's essential companion for any Egyptian adventure.",
    descriptionAr:
      "استكشف الشعاب الوحشية والمناظر الصحراوية في مرسى علم براحة بال كاملة بفضل تأمين سفر Civitatis. سواء كنت تغوص في شعاب إلفنستون أو تسبح مع الدلافين في الساتايا أو تتنزه في صحراء الشرق، يغطي هذا التأمين الشامل للسفر الحالات الطارئة الطبية وإلغاء الرحلات والأمتعة المفقودة والمزيد.",
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
    highlights: [
      "Comprehensive travel insurance for Marsa Alam and Egypt",
      "Covers medical emergencies and trip cancellations",
      "Available for 3 to 31-day trips",
      "Peace of mind for diving, snorkeling, and desert activities",
    ],
    includes: ["Travel insurance coverage as per selected plan"],
    excludes: ["Pre-existing medical conditions (check policy)"],
  },
  {
    title: "Sataya Reef Boat Trip + Snorkeling with Dolphins",
    titleAr: "رحلة شعاب الساتايا مع الغطس مع الدلافين",
    slug: "sataya-reef-boat-trip-snorkeling-dolphins-marsa-alam",
    description:
      "Embark on one of the most extraordinary wildlife encounters available anywhere in Egypt on this full-day boat trip to Sataya Reef, also known as Dolphin House — a legendary Red Sea marine reserve that is home to a permanent resident pod of Red Sea spinner dolphins. Sail south from Marsa Alam to reach this remote and pristine reef, then slip into the warm turquoise water for a two-hour snorkeling session alongside these incredible and playful animals as they spin, leap, and glide through the water around you in their natural habitat. A truly life-changing experience.",
    descriptionAr:
      "انطلق في واحدة من أكثر مواجهات الحياة البرية استثنائية في مصر بأكملها في هذه الرحلة البحرية اليومية إلى شعاب الساتايا، المعروفة أيضاً بـ 'بيت الدولفين' — محمية بحرية أسطورية في البحر الأحمر موطنها قطيع دائم من دلافين سبينر البحر الأحمر. أبحر جنوباً من مرسى علم للوصول إلى هذا الشعاب النائية البكر.",
    category: "Boat tour",
    price: {
      original: 75.00,
      discounted: null,
      currency: "USD",
    },
    duration: "9 hours",
    language: ["English"],
    rating: {
      score: 9.1,
      reviews: 38,
    },
    travellers: 487,
    freeCancellation: true,
    highlights: [
      "Boat trip to the legendary Sataya Dolphin House reef",
      "2-hour snorkeling session with wild spinner dolphins",
      "Explore hidden caves and tunnels around the reef",
      "Buffet lunch with fresh fruit and drinks included",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Boat trip", "Snorkeling equipment", "Buffet lunch and drinks", "Guide", "Hotel pickup and drop-off"],
    excludes: ["Airport pickup (extra fee)", "Tips", "Personal expenses"],
  },
  {
    title: "Desert Camel Ride in Marsa Alam",
    titleAr: "ركوب الجمل في صحراء مرسى علم",
    slug: "desert-camel-ride-marsa-alam",
    description:
      "Experience one of the most iconic and timeless ways to explore the Egyptian desert on this relaxed camel ride through the dunes surrounding Marsa Alam. Suitable for adults and children alike, this gentle one-hour adventure takes you away from the coast and into the vast, sun-baked expanse of the Eastern Desert, riding these extraordinary desert animals through golden sand dunes and among scattered acacia trees. Your instructor will show you how to mount and guide your camel, and will share fascinating facts about the role these animals have played throughout Egypt's long history.",
    descriptionAr:
      "اختبر واحدة من أكثر الطرق أيقونية وخالدة لاستكشاف الصحراء المصرية في هذه الجولة الهادئة لركوب الجمل عبر الكثبان المحيطة بمرسى علم. مناسبة للبالغين والأطفال على حد سواء، تأخذك هذه المغامرة اللطيفة لمدة ساعة بعيداً عن الساحل إلى المساحة الشاسعة المحروقة بالشمس لصحراء الشرق، راكباً هذه الحيوانات الصحراوية الاستثنائية.",
    category: "Adventure and nature",
    price: {
      original: 22.00,
      discounted: null,
      currency: "USD",
    },
    duration: "2 hours",
    language: ["English"],
    rating: {
      score: 7.5,
      reviews: 11,
    },
    travellers: 145,
    freeCancellation: true,
    highlights: [
      "One-hour camel ride through desert dunes",
      "Suitable for adults and children",
      "Scenic Eastern Desert landscape",
      "Learn about camels' role in Egyptian history",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Camel ride", "Instructor", "Tea/coffee", "Hotel pickup and drop-off"],
    excludes: ["Tips", "Personal expenses"],
  },
  {
    title: "Desert Quad Tour in Marsa Alam",
    titleAr: "جولة الكواد في صحراء مرسى علم",
    slug: "desert-quad-tour-marsa-alam",
    description:
      "Tear through the dramatic Eastern Desert surrounding Marsa Alam on an exhilarating quad bike safari. Navigate golden sand dunes, rocky desert tracks, and open desert plains as the rugged landscape of southern Egypt's interior stretches out endlessly before you. The tour includes a stop at a traditional Bedouin village where you'll be welcomed with sweet desert tea and given an insight into the remarkable lives of the nomadic people who have called this harsh but beautiful landscape home for generations. A thrilling and authentic desert adventure.",
    descriptionAr:
      "اندفع عبر صحراء الشرق الدرامية المحيطة بمرسى علم في سفاري دراجة رباعية مبهجة. تنقّل بين الكثبان الرملية الذهبية والمسالك الصحراوية الصخرية والسهول الصحراوية المفتوحة بينما يمتد المشهد الوعر لداخل جنوب مصر أمامك إلى ما لا نهاية.",
    category: "Adventure and nature",
    price: {
      original: 35.00,
      discounted: null,
      currency: "USD",
    },
    duration: "3 hours",
    language: ["English"],
    rating: {
      score: 7.6,
      reviews: 9,
    },
    travellers: 124,
    freeCancellation: true,
    highlights: [
      "Quad bike ride through Eastern Desert dunes",
      "Visit a traditional Bedouin village",
      "Enjoy sweet Bedouin tea with local hosts",
      "Dramatic desert scenery of southern Egypt",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Quad bike", "Safety equipment", "Guide", "Bedouin tea", "Hotel pickup and drop-off"],
    excludes: ["Meals", "Tips", "Personal expenses"],
  },
];

export { cityData, toursData };