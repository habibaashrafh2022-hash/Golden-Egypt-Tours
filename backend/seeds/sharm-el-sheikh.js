// seeds/cities/sharm-el-sheikh.js

const cityData = {
  name: "Sharm el Sheikh",
  nameAr: "شرم الشيخ",
  slug: "sharm-el-sheikh",
  description:
    "Sharm el Sheikh is one of Egypt's most iconic and beloved resort destinations, perched dramatically at the southern tip of the Sinai Peninsula where the Gulf of Aqaba meets the Gulf of Suez. Framed by rugged desert mountains on one side and some of the world's most pristine coral reefs on the other, Sharm offers a unique and extraordinary combination of desert adventure, underwater wonder, and luxurious beach relaxation. Whether you're hiking at dawn to catch the sunrise from the sacred summit of Mount Sinai, diving into the legendary blue waters of the Red Sea, or racing across Sinai's golden dunes on a quad bike, Sharm el Sheikh delivers thrilling experiences at every turn.",
  descriptionAr:
    "شرم الشيخ هي واحدة من أكثر وجهات المنتجعات أيقونية ومحبوبة في مصر، تقع بشكل درامي عند الطرف الجنوبي لشبه جزيرة سيناء حيث يلتقي خليج العقبة بخليج السويس. محاطة بجبال صحراوية وعرة من جهة وبعض أكثر الشعاب المرجانية نقاءً في العالم من الجهة الأخرى، تقدم شرم مزيجاً فريداً واستثنائياً من مغامرة الصحراء وعجائب الأعماق والاسترخاء الفاخر على الشاطئ.",
  country: "Egypt",
  image: "sharm-el-sheikh.jpg",
};

const toursData = [
  {
    title: "Mount Sinai Sunrise & Saint Catherine's Monastery Tour",
    titleAr: "جولة شروق الشمس من جبل سيناء ودير سانت كاترين",
    slug: "mount-sinai-sunrise-saint-catherines-monastery-sharm",
    description:
      "Embark on one of the most spiritually profound and physically rewarding journeys in the entire Middle East — a pre-dawn hike to the summit of Mount Sinai to witness a breathtaking sunrise over the Sinai Peninsula. Revered by Jews, Christians, and Muslims alike as the place where Moses received the Ten Commandments from God, Mount Sinai carries an extraordinary weight of history and religious significance. After descending, visit Saint Catherine's Monastery at the mountain's base — the oldest continuously operating Christian monastery in the world, founded in the 6th century AD and home to priceless religious icons and manuscripts.",
    descriptionAr:
      "انطلق في واحدة من أكثر الرحلات روحانيةً ومجزيةً بدنياً في كامل الشرق الأوسط — مشي قبل الفجر إلى قمة جبل سيناء لمشاهدة شروق شمس خلاب فوق شبه جزيرة سيناء. جبل سيناء المبجّل من اليهود والمسيحيين والمسلمين على حد سواء باعتباره المكان الذي تلقّى فيه موسى الوصايا العشر من الله يحمل ثقلاً استثنائياً من التاريخ والأهمية الدينية.",
    category: "Day trip",
    price: {
      original: 32.00,
      discounted: null,
      currency: "USD",
    },
    duration: "15 hours",
    language: ["English"],
    rating: {
      score: 7.2,
      reviews: 48,
    },
    travellers: 559,
    freeCancellation: true,
    highlights: [
      "Pre-dawn hike to the summit of Mount Sinai",
      "Watch a breathtaking sunrise over the Sinai Peninsula",
      "Visit the world's oldest operating Christian monastery",
      "See priceless ancient icons and manuscripts at Saint Catherine's",
      "Hotel pickup at midnight included",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Transport", "Entrance fees"],
    excludes: ["Camel ride up the mountain (optional extra)", "Meals", "Tips"],
  },
  {
    title: "Blue Hole Desert Safari",
    titleAr: "سفاري صحراء البلو هول",
    slug: "blue-hole-desert-safari-sharm",
    description:
      "Combine the best of the Sinai Desert and the Red Sea in one action-packed day on this unforgettable Blue Hole Desert Safari. Your adventure begins in the dramatic desert landscape of the Sinai, where you'll race across golden dunes and rocky terrain on a quad bike before hopping onto a camel for a more traditional desert experience. The day reaches its thrilling climax at the Blue Hole — one of the most famous diving and snorkeling sites in the world, a stunning natural underwater sinkhole off the Dahab coast with extraordinary marine life and coral formations.",
    descriptionAr:
      "اجمع أفضل ما تقدمه صحراء سيناء والبحر الأحمر في يوم واحد حافل بالنشاط في هذه السفاري الذكرى في صحراء البلو هول. تبدأ مغامرتك في المشهد الصحراوي الدرامي لسيناء، حيث ستتسابق عبر الكثبان الذهبية والتضاريس الصخرية على دراجة رباعية قبل أن تركب جملاً لتجربة صحراوية أكثر تقليدية. يبلغ اليوم ذروته المثيرة عند البلو هول.",
    category: "Day trip",
    price: {
      original: 24.00,
      discounted: null,
      currency: "USD",
    },
    duration: "10 hours",
    language: ["English"],
    rating: {
      score: 7.8,
      reviews: 12,
    },
    travellers: 347,
    freeCancellation: true,
    highlights: [
      "Quad bike ride through the Sinai Desert",
      "Camel ride experience",
      "Snorkeling at the world-famous Blue Hole",
      "Visit the scenic Dahab coastline",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Quad bike", "Camel ride", "Snorkeling equipment", "Guide", "Hotel pickup and drop-off"],
    excludes: ["Meals", "Tips", "Personal expenses"],
  },
  {
    title: "Ras Mohamed National Park Snorkelling",
    titleAr: "غطس في محمية رأس محمد الوطنية",
    slug: "ras-mohamed-national-park-snorkelling-sharm",
    description:
      "Discover one of Egypt's most spectacular marine environments on this snorkeling boat trip to Ras Mohamed National Park, located at the very southern tip of the Sinai Peninsula where the Red Sea's two gulfs converge. The park is widely regarded as one of the finest snorkeling and diving destinations in the world, with vertical coral walls plunging into crystal-clear depths, extraordinary biodiversity, and waters teeming with sharks, rays, turtles, and hundreds of species of colorful reef fish. A full-day experience in one of Egypt's most pristine natural treasures.",
    descriptionAr:
      "اكتشف واحدة من أكثر البيئات البحرية في مصر روعةً في هذه الرحلة البحرية للغطس إلى محمية رأس محمد الوطنية، الواقعة عند الطرف الجنوبي تماماً لشبه جزيرة سيناء حيث يلتقي خليجا البحر الأحمر. تُعدّ المحمية على نطاق واسع واحدة من أفضل وجهات الغطس في العالم.",
    category: "Adventure and nature",
    price: {
      original: 28.00,
      discounted: null,
      currency: "USD",
    },
    duration: "8 hours",
    language: ["English"],
    rating: {
      score: 6.7,
      reviews: 20,
    },
    travellers: 379,
    freeCancellation: true,
    highlights: [
      "Boat trip to Ras Mohamed National Park",
      "Snorkeling along spectacular coral walls",
      "Spot sharks, rays, turtles, and reef fish",
      "One of the world's top snorkeling destinations",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Boat trip", "Snorkeling equipment", "Guide", "Hotel pickup and drop-off", "Light lunch"],
    excludes: ["Tips", "Personal expenses"],
  },
  {
    title: "Sinai Desert Quad Tour",
    titleAr: "جولة الكواد في صحراء سيناء",
    slug: "sinai-desert-quad-tour-sharm",
    description:
      "Feel the rush of the Sinai wind on your face as you tear across one of the most dramatic desert landscapes in the Middle East on this thrilling quad bike tour. Leave the beach behind and head into the vast, rugged terrain of the Sinai Desert, navigating golden dunes, rocky mountain passes, and sweeping desert plains on a powerful quad bike. As the sun blazes overhead and the jagged Sinai mountains rise in every direction, this is an exhilarating reminder that Sharm el Sheikh is about far more than just beaches.",
    descriptionAr:
      "اشعر بهبوب رياح سيناء على وجهك وأنت تندفع عبر واحدة من أكثر المناظر الصحراوية درامية في الشرق الأوسط في جولة الدراجة الرباعية المثيرة هذه. اترك الشاطئ خلفك وتوجه إلى التضاريس الواسعة الوعرة لصحراء سيناء، متنقلاً بين الكثبان الذهبية ومعابر الجبال الصخرية والسهول الصحراوية الشاسعة.",
    category: "Adventure and nature",
    price: {
      original: 14.00,
      discounted: null,
      currency: "USD",
    },
    duration: "3 hours",
    language: ["English"],
    rating: {
      score: 7.1,
      reviews: 16,
    },
    travellers: 502,
    freeCancellation: true,
    highlights: [
      "Thrilling quad bike ride through Sinai Desert",
      "Navigate dunes, rocky passes, and desert plains",
      "Dramatic Sinai mountain scenery",
      "Suitable for beginners and experienced riders",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Quad bike", "Safety equipment", "Guide", "Hotel pickup and drop-off"],
    excludes: ["Meals", "Tips", "Personal expenses"],
  },
  {
    title: "Sharm El Sheikh Parasailing",
    titleAr: "الباراسيلينج في شرم الشيخ",
    slug: "parasailing-sharm-el-sheikh",
    description:
      "Soar high above the shimmering Red Sea on a parasailing adventure in Sharm el Sheikh and enjoy one of the most spectacular aerial views in all of Egypt. Strapped safely into a parachute harness and towed by a speedboat, you'll glide up into the sky above the crystal-clear waters of the Gulf of Aqaba, with Sharm's famous beaches, luxury resorts, and the dramatic Sinai mountains stretching out beneath you in every direction. A short but absolutely unforgettable adrenaline rush with breathtaking views.",
    descriptionAr:
      "حلّق عالياً فوق البحر الأحمر المتلألئ في مغامرة باراسيلينج في شرم الشيخ واستمتع بواحدة من أكثر المناظر الجوية إثارة في مصر كلها. مربوطاً بأمان في حزام المظلة ومقطوراً بزورق سريع ستنطلق إلى السماء فوق المياه الصافية لخليج العقبة.",
    category: "Adventure and nature",
    price: {
      original: 52.72,
      discounted: 36.90,
      currency: "USD",
    },
    duration: "10-15 minutes",
    language: ["English"],
    rating: {
      score: 9.0,
      reviews: 2,
    },
    travellers: 66,
    freeCancellation: true,
    highlights: [
      "Parasailing over the Red Sea in Sharm el Sheikh",
      "Aerial views of the Gulf of Aqaba and Sinai mountains",
      "Safe and supervised by experienced operators",
      "Perfect for thrill-seekers and photography",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Parasailing flight", "Safety equipment", "Hotel pickup and drop-off"],
    excludes: ["Tips", "Personal expenses"],
  },
  {
    title: "Day Trip to Petra from Sharm el Sheikh",
    titleAr: "رحلة يوم إلى البتراء من شرم الشيخ",
    slug: "petra-day-trip-sharm-el-sheikh",
    description:
      "Cross the border into Jordan for an extraordinary day trip to Petra, the ancient rose-red city carved into the desert cliffs by the Nabataean people over 2,000 years ago. Walk through the legendary Siq — a narrow winding gorge flanked by towering sandstone walls — before the iconic Treasury (Al-Khazneh) reveals itself in breathtaking fashion at the end of the passage. Explore the vast archaeological city with its carved temples, royal tombs, colonnaded streets, and amphitheatre, accompanied by an expert guide who brings this UNESCO World Heritage Site to life.",
    descriptionAr:
      "اعبر الحدود إلى الأردن في رحلة يوم استثنائية إلى البتراء، المدينة الوردية القديمة المنحوتة في جدران الصحراء الصخرية على يد الأنباط منذ أكثر من 2000 عام. سِر عبر السيق الأسطوري — الوادي الضيق الملتوي المحاط بجدران الحجر الرملي الشاهقة — قبل أن يكشف الخزنة الأيقوني عن نفسه بشكل خلاب في نهاية الممر.",
    category: "Day trip",
    price: {
      original: 527.22,
      discounted: null,
      currency: "USD",
    },
    duration: "21 hours",
    language: ["English"],
    rating: {
      score: 0,
      reviews: 0,
    },
    travellers: 82,
    freeCancellation: true,
    highlights: [
      "Day trip to the ancient city of Petra in Jordan",
      "Walk through the legendary Siq gorge",
      "See the iconic Treasury (Al-Khazneh)",
      "Explore temples, tombs, and ancient streets",
      "Expert guide and all transport included",
    ],
    includes: ["Guide", "Transport to Jordan border", "Entrance fees", "Hotel pickup and drop-off"],
    excludes: ["Jordan visa fees", "Meals", "Tips", "Personal expenses"],
  },
  {
    title: "Transfers in Sharm el Sheikh",
    titleAr: "خدمة التوصيل في شرم الشيخ",
    slug: "transfers-sharm-el-sheikh",
    description:
      "Arrive and depart Sharm el Sheikh with total comfort and peace of mind using our professional private transfer service. A punctual and courteous chauffeur will meet you at the airport, your hotel, or any address you specify and drive you smoothly to your destination in a clean, air-conditioned vehicle. Whether you need a quick transfer between hotels or a reliable airport pickup after a long flight, this door-to-door service is the most convenient way to get around Sharm el Sheikh.",
    descriptionAr:
      "اصل إلى شرم الشيخ وغادرها براحة تامة وطمأنينة باستخدام خدمة النقل الخاصة المهنية لدينا. سائق دقيق ومؤدب سيستقبلك في المطار أو فندقك أو أي عنوان تحدده وسيقودك بسلاسة إلى وجهتك في سيارة نظيفة ومكيفة.",
    category: "Transfers",
    price: {
      original: 18.74,
      discounted: null,
      currency: "USD",
    },
    duration: "Varies",
    language: ["English"],
    rating: {
      score: 8.5,
      reviews: 139,
    },
    travellers: 7778,
    freeCancellation: true,
    highlights: [
      "Private door-to-door transfer service",
      "Professional and punctual chauffeur",
      "Air-conditioned vehicle",
      "Airport, hotel, and custom pickups",
      "Available 24/7",
    ],
    includes: ["Private vehicle", "Professional driver"],
    excludes: ["Tips", "Entrance fees to any attractions"],
  },
  {
    title: "Sharm El-Sheikh Horseback Ride",
    titleAr: "ركوب الخيل في شرم الشيخ",
    slug: "horseback-ride-sharm-el-sheikh",
    description:
      "Explore the extraordinary contrasting landscapes of Sharm el Sheikh on horseback — from the dramatic rocky desert of southern Sinai to the shimmering shores of the Red Sea. This guided riding experience offers a peaceful and uniquely immersive way to take in the wild natural beauty of the region, whether you choose to trot through desert trails with the jagged Sinai mountains as your backdrop or canter along the beach with the turquoise sea on one side and golden sands on the other. Suitable for both beginners and experienced riders.",
    descriptionAr:
      "استكشف المناظر المتباينة الاستثنائية في شرم الشيخ على ظهر حصان — من الصحراء الصخرية الدرامية لجنوب سيناء إلى شواطئ البحر الأحمر المتلألئة. هذه التجربة الموجهة لركوب الخيل تقدم طريقة هادئة وغامرة فريدة للاستمتاع بالجمال الطبيعي الوحشي للمنطقة.",
    category: "Adventure and nature",
    price: {
      original: 13.00,
      discounted: null,
      currency: "USD",
    },
    duration: "1 hour",
    language: ["English"],
    rating: {
      score: 0,
      reviews: 0,
    },
    travellers: 89,
    freeCancellation: true,
    highlights: [
      "Horseback ride through Sinai desert or along the beach",
      "Stunning desert and Red Sea coastal scenery",
      "Suitable for beginners and experienced riders",
      "Professional handlers throughout",
      "Hotel pickup and drop-off available",
    ],
    includes: ["Horse", "Guide", "Safety equipment"],
    excludes: ["Hotel pickup (extra)", "Tips", "Personal expenses"],
  },
  {
    title: "Night Tour of Sharm El-Sheikh",
    titleAr: "جولة ليلية في شرم الشيخ",
    slug: "night-tour-sharm-el-sheikh",
    description:
      "Discover the vibrant and captivating nighttime personality of Sharm el Sheikh on this atmospheric evening city tour. As the sun dips below the Sinai mountains and the resort city comes alive with lights and energy, your guide will lead you through the most interesting and lively areas of Sharm — from the buzzing Old Market (Sharm el Maya) with its colorful shops, street food, and local atmosphere to the glamorous Naama Bay strip with its waterfront promenade, restaurants, and entertainment. A wonderful way to experience the city beyond the hotel pool.",
    descriptionAr:
      "اكتشف الشخصية الليلية النابضة والرائعة لشرم الشيخ في هذه الجولة المسائية الجوية للمدينة. مع غروب الشمس خلف جبال سيناء وإضاءة مدينة المنتجعات بالأنوار والطاقة، سيقودك مرشدك عبر أكثر مناطق شرم إثارة للاهتمام وحيوية.",
    category: "Guided tours and free tours",
    price: {
      original: 38.42,
      discounted: null,
      currency: "USD",
    },
    duration: "6 hours",
    language: ["English"],
    rating: {
      score: 0,
      reviews: 0,
    },
    travellers: 1,
    freeCancellation: true,
    highlights: [
      "Evening tour of Sharm el Sheikh's most vibrant areas",
      "Explore the colorful Old Market (Sharm el Maya)",
      "Walk the Naama Bay waterfront promenade",
      "Experience the city's lively nighttime atmosphere",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Transport"],
    excludes: ["Meals", "Shopping expenses", "Tips"],
  },
  {
    title: "Sinai Desert Day Trip with Dinner & Show",
    titleAr: "رحلة يوم في صحراء سيناء مع العشاء والعرض",
    slug: "sinai-desert-day-trip-dinner-show-sharm",
    description:
      "Experience the full magic of the Sinai Desert on this exciting day trip that combines quad biking or dune buggy riding through dramatic desert landscapes with an unforgettable Bedouin evening of stargazing, traditional entertainment, and a delicious desert dinner. Race across the golden dunes as the sun descends over the mountains, then gather around a Bedouin camp fire as night falls over the Sinai, watching a traditional music and dance show while enjoying authentic food under an impossibly star-filled sky.",
    descriptionAr:
      "اختبر السحر الكامل لصحراء سيناء في هذه الرحلة اليومية المثيرة التي تجمع بين ركوب الدراجة الرباعية أو عربة الكثبان عبر مناظر صحراوية درامية وسهرة بدوية لا تُنسى من رصد النجوم والترفيه التقليدي وعشاء صحراوي لذيذ.",
    category: "Day trip",
    price: {
      original: 78.49,
      discounted: 52.72,
      currency: "USD",
    },
    duration: "6 hours",
    language: ["English"],
    rating: {
      score: 6.1,
      reviews: 21,
    },
    travellers: 321,
    freeCancellation: true,
    highlights: [
      "Quad bike or dune buggy ride through Sinai Desert",
      "Stargazing in the crystal-clear desert sky",
      "Traditional Bedouin dinner under the stars",
      "Live music and dance show at a Bedouin camp",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Quad bike or buggy", "Bedouin dinner", "Show", "Guide", "Hotel pickup and drop-off"],
    excludes: ["Alcoholic drinks", "Tips", "Personal expenses"],
  },
  {
    title: "Beginner's Scuba Diving in the Red Sea",
    titleAr: "الغوص للمبتدئين في البحر الأحمر",
    slug: "beginners-scuba-diving-red-sea-sharm",
    description:
      "Take your first breath underwater in one of the most stunning diving destinations on the planet on this beginner's scuba diving course in the Red Sea at Sharm el Sheikh. No experience is necessary — your PADI-certified instructor will guide you through everything you need to know before you enter the water, from breathing techniques to hand signals and basic safety. Then dive in and experience the extraordinary underwater world of the Red Sea's coral reefs, with their kaleidoscope of colorful fish and breathtaking marine life.",
    descriptionAr:
      "خذ أول نفس تحت الماء في واحدة من أكثر وجهات الغوص روعة على الكوكب في دورة الغوص للمبتدئين هذه في البحر الأحمر في شرم الشيخ. لا تحتاج إلى خبرة — مدربك المعتمد من PADI سيرشدك خلال كل ما تحتاج معرفته قبل دخول الماء.",
    category: "Adventure and nature",
    price: {
      original: 40.00,
      discounted: null,
      currency: "USD",
    },
    duration: "8 hours",
    language: ["English"],
    rating: {
      score: 0,
      reviews: 0,
    },
    travellers: 36,
    freeCancellation: true,
    highlights: [
      "Two beginner scuba dives in the Red Sea",
      "PADI-certified instructor throughout",
      "No prior experience required",
      "All diving equipment provided",
      "One of the world's best beginner diving locations",
    ],
    includes: ["Two dives", "All diving equipment", "PADI-certified instructor", "Hotel pickup and drop-off"],
    excludes: ["Meals", "Tips", "Personal expenses"],
  },
  {
    title: "Civitatis eSIM Card Egypt",
    titleAr: "شريحة eSIM لمصر من Civitatis",
    slug: "civitatis-esim-card-egypt-sharm",
    description:
      "Keep your phone connected throughout your Sharm el Sheikh adventure with this easy-to-activate travel eSIM. Whether you're navigating the resort strips of Naama Bay, looking up dive sites at Ras Mohamed, or sharing photos from the summit of Mount Sinai, this eSIM provides reliable mobile data coverage across Egypt without the hassle of buying and installing a local SIM card. Simply activate digitally before you travel and stay connected from the moment you land.",
    descriptionAr:
      "ابقِ هاتفك متصلاً طوال مغامرتك في شرم الشيخ مع بطاقة eSIM السياحية سهلة التفعيل هذه. سواء كنت تتنقل في شوارع المنتجعات في نعمة باي أو تبحث عن مواقع الغوص في رأس محمد أو تشارك صوراً من قمة جبل سيناء، توفر هذه البطاقة تغطية بيانات جوال موثوقة في جميع أنحاء مصر.",
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
      "Works throughout Sharm el Sheikh and all Egyptian destinations",
    ],
    includes: ["eSIM data plan for selected duration"],
    excludes: ["Voice calls", "SMS"],
  },
  {
    title: "Private Tour to Luxor by Plane from Sharm",
    titleAr: "جولة خاصة إلى الأقصر بالطائرة من شرم",
    slug: "private-tour-luxor-plane-sharm-el-sheikh",
    description:
      "Make the most of your Sharm el Sheikh holiday with this exclusive private day trip by plane to the ancient wonders of Luxor. Fly directly from Sharm to Luxor and spend the day in the company of your own private Egyptologist guide, visiting the colossal Karnak Temple complex, the magnificent Mortuary Temple of Hatshepsut, and the legendary Valley of the Kings where the pharaohs of Egypt's New Kingdom were laid to rest in elaborately decorated rock-cut tombs. All flights and entrance fees are included.",
    descriptionAr:
      "استثمر عطلتك في شرم الشيخ مع هذه الرحلة الخاصة الحصرية بالطائرة إلى عجائب الأقصر القديمة. اطِر مباشرة من شرم إلى الأقصر وأمضِ اليوم برفقة مرشدك الأثري الخاص، زائراً مجمع معبد الكرنك الهائل ومعبد حتشبسوت الجنائزي الرائع ووادي الملوك الأسطوري.",
    category: "Day trip",
    price: {
      original: 503.79,
      discounted: null,
      currency: "USD",
    },
    duration: "17 hours 30 minutes",
    language: ["English"],
    rating: {
      score: 0,
      reviews: 0,
    },
    travellers: 47,
    freeCancellation: true,
    highlights: [
      "Round-trip flight from Sharm to Luxor",
      "Private guided tour of Karnak Temple",
      "Visit the Valley of the Kings",
      "See the Mortuary Temple of Hatshepsut",
      "Fully private experience with personal Egyptologist",
    ],
    includes: ["Round-trip flight", "Private guide", "Entrance fees", "Hotel pickup and drop-off", "Lunch"],
    excludes: ["Tips", "Personal expenses"],
  },
  {
    title: "Snorkelling on Tiran Island",
    titleAr: "الغطس في جزيرة تيران",
    slug: "snorkelling-tiran-island-sharm",
    description:
      "Set sail from Sharm el Sheikh to the wild and beautiful Tiran Island, one of the most celebrated snorkeling and diving destinations in the entire Red Sea. Positioned at the mouth of the Gulf of Aqaba, Tiran Island is surrounded by four major coral reef systems — Jackson, Woodhouse, Thomas, and Gordon — that are home to an extraordinary wealth of marine life. Crystal-clear visibility, dramatic underwater topography, and a dazzling variety of fish, sharks, and sea turtles make Tiran a world-class snorkeling experience.",
    descriptionAr:
      "أبحر من شرم الشيخ إلى جزيرة تيران الجميلة الوحشية، واحدة من أكثر وجهات الغطس والغوص شهرةً في كامل البحر الأحمر. تقع عند مدخل خليج العقبة، وجزيرة تيران محاطة بأربعة أنظمة شعاب مرجانية رئيسية — جاكسون وودهاوس توماس وغوردون — تضم ثروة استثنائية من الحياة البحرية.",
    category: "Boat tour",
    price: {
      original: 28.00,
      discounted: null,
      currency: "USD",
    },
    duration: "8 hours",
    language: ["English"],
    rating: {
      score: 7.1,
      reviews: 13,
    },
    travellers: 364,
    freeCancellation: true,
    highlights: [
      "Boat trip to the world-famous Tiran Island",
      "Snorkel over four major coral reef systems",
      "Spot sharks, sea turtles, and exotic fish",
      "Crystal-clear Red Sea visibility",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Boat trip", "Snorkeling equipment", "Guide", "Hotel pickup and drop-off", "Light lunch"],
    excludes: ["Tips", "Personal expenses"],
  },
  {
    title: "Cairo Day Trip by Plane from Sharm",
    titleAr: "رحلة يوم إلى القاهرة بالطائرة من شرم",
    slug: "cairo-day-trip-plane-sharm-el-sheikh",
    description:
      "Don't leave Egypt without seeing its greatest ancient treasures — join this exciting day trip by plane from Sharm el Sheikh to Cairo. Fly to the Egyptian capital and spend a full day visiting three of the country's most iconic landmarks: the legendary Pyramids of Giza, the awe-inspiring Great Sphinx, and the incredible Grand Egyptian Museum, the world's largest archaeological museum and permanent home of Tutankhamun's golden treasures. A fast, comfortable, and unforgettable way to add Cairo's highlights to your Red Sea holiday.",
    descriptionAr:
      "لا تغادر مصر دون أن ترى أعظم كنوزها القديمة — انضم إلى هذه الرحلة المثيرة بالطائرة من شرم الشيخ إلى القاهرة. اطِر إلى العاصمة المصرية وأمضِ يوماً كاملاً في زيارة ثلاثة من أكثر معالم البلاد أيقونية: أهرامات الجيزة الأسطورية وأبو الهول الكبير المهيب والمتحف المصري الكبير الرائع.",
    category: "Day trip",
    price: {
      original: 406.20,
      discounted: null,
      currency: "USD",
    },
    duration: "13-14 hours",
    language: ["English"],
    rating: {
      score: 0,
      reviews: 0,
    },
    travellers: 3,
    freeCancellation: true,
    highlights: [
      "Round-trip flight from Sharm to Cairo",
      "Visit the Pyramids of Giza and Great Sphinx",
      "Explore the Grand Egyptian Museum",
      "See Tutankhamun's golden treasures",
      "Expert guide and all transport included",
    ],
    includes: ["Round-trip flight", "Guide", "Entrance fees", "Hotel pickup and drop-off", "Lunch"],
    excludes: ["Tips", "Personal expenses"],
  },
  {
    title: "Civitatis Travel Insurance",
    titleAr: "تأمين السفر من Civitatis",
    slug: "civitatis-travel-insurance-sharm",
    description:
      "Travel with complete peace of mind in Sharm el Sheikh and throughout Egypt with Civitatis Travel Insurance. Whether you're diving in the Red Sea, hiking Mount Sinai, or exploring ancient temples, unexpected events can happen at any time. This comprehensive travel insurance covers medical emergencies, trip cancellations, lost luggage, and much more, ensuring that nothing spoils your Egyptian adventure. Available for trips lasting between 3 and 31 days.",
    descriptionAr:
      "سافر براحة بال كاملة في شرم الشيخ وجميع أنحاء مصر مع تأمين سفر Civitatis. سواء كنت تغوص في البحر الأحمر أو تتسلق جبل سيناء أو تستكشف المعابد القديمة، يمكن أن تحدث أحداث غير متوقعة في أي وقت. يغطي هذا التأمين الشامل للسفر الحالات الطارئة الطبية وإلغاء الرحلات والأمتعة المفقودة والمزيد.",
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
      "Comprehensive travel insurance for Egypt trips",
      "Covers medical emergencies, cancellations, and lost luggage",
      "Available for 3 to 31-day trips",
      "Peace of mind for all activities including diving and hiking",
    ],
    includes: ["Travel insurance coverage as per selected plan"],
    excludes: ["Pre-existing medical conditions (check policy)"],
  },
];

export { cityData, toursData };