// seeds/cities/aswan.js

const cityData = {
  name: "Aswan",
  nameAr: "أسوان",
  slug: "aswan",
  description:
    "Aswan is one of Egypt's most enchanting cities, nestled along the southern banks of the Nile where the desert meets the river in a breathtaking blend of golden dunes, emerald waters, and ancient wonders. Once the gateway to sub-Saharan Africa and a vital trade hub for the pharaohs, Aswan carries a rich legacy that spans thousands of years. From the legendary temples of Abu Simbel to the serene Nubian villages and the magnificent Philae Temple rising from the waters of Lake Nasser, Aswan offers a deeply authentic and unforgettable Egyptian experience.",
  descriptionAr:
    "أسوان هي واحدة من أكثر مدن مصر سحراً، تقع على الضفة الجنوبية للنيل حيث يلتقي الصحراء بالنهر في مزيج مذهل من الكثبان الذهبية والمياه الزمردية والعجائب القديمة. كانت بوابة مصر نحو أفريقيا جنوب الصحراء ومحوراً تجارياً حيوياً للفراعنة، وتحمل أسوان إرثاً غنياً يمتد لآلاف السنين. من معابد أبو سمبل الأسطورية إلى القرى النوبية الهادئة ومعبد فيلة الرائع المرتفع من مياه بحيرة ناصر، تقدم أسوان تجربة مصرية أصيلة لا تُنسى.",
  country: "Egypt",
  image: "aswan.jpg",
};

const toursData = [
  {
    title: "3-Night Nile Cruise from Aswan to Luxor",
    titleAr: "رحلة نيلية 3 ليالي من أسوان إلى الأقصر",
    slug: "3-night-nile-cruise-aswan-luxor",
    description:
      "Embark on one of the world's most legendary journeys — a 3-night cruise along the timeless Nile River from Aswan to Luxor. Sail past ancient temples, lush riverbanks, and golden desert landscapes while your expert guide brings the stories of the pharaohs to life. Along the way you'll visit the temples of Kom Ombo and Edfu, the Valley of the Kings, Karnak, and the Mortuary Temple of Hatshepsut — all while enjoying comfortable onboard accommodation and delicious meals every day.",
    descriptionAr:
      "انطلق في واحدة من أكثر الرحلات أسطورية في العالم — رحلة نيلية مدتها 3 ليالٍ على طول نهر النيل الخالد من أسوان إلى الأقصر. أبحر بجوار المعابد القديمة والضفاف الخضراء والمناظر الصحراوية الذهبية بينما يُحيي مرشدك الخبير قصص الفراعنة. على طول الطريق ستزور معبدي كوم أمبو وإدفو ووادي الملوك والكرنك ومعبد حتشبسوت الجنائزي.",
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
  },
  {
    title: "Aswan Dam, Philae Temple & The Unfinished Obelisk Tour",
    titleAr: "جولة السد العالي ومعبد فيلة والمسلة الناقصة",
    slug: "aswan-dam-philae-temple-unfinished-obelisk",
    description:
      "Discover the remarkable layers of Aswan's history on this guided tour covering three of the city's most iconic landmarks. Begin at the legendary Aswan High Dam, one of the greatest engineering achievements of the modern era. Then visit the Unfinished Obelisk still lying in its ancient granite quarry, which would have been the largest obelisk ever carved. Finally, take a short boat ride to the island of Philae to explore the beautiful Temple of Isis, one of Egypt's most photogenic and well-preserved ancient sanctuaries.",
    descriptionAr:
      "اكتشف الطبقات الرائعة من تاريخ أسوان في هذه الجولة المصحوبة بمرشد التي تغطي ثلاثة من أبرز معالم المدينة. ابدأ بالسد العالي الأسواني الأسطوري، أحد أعظم الإنجازات الهندسية في العصر الحديث. ثم زر المسلة الناقصة لا تزال مستلقية في المحجر الجرانيتي القديم. أخيراً استقل قارباً قصيراً إلى جزيرة فيلة لاستكشاف معبد إيزيس الجميل.",
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
    highlights: [
      "Visit the iconic Aswan High Dam",
      "See the ancient Unfinished Obelisk in its quarry",
      "Boat ride to Philae Island",
      "Explore the stunning Temple of Isis at Philae",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees", "Boat to Philae Island"],
    excludes: ["Meals", "Tips", "Personal expenses"],
  },
  {
    title: "Temple of Philae Sound & Light Show",
    titleAr: "عرض الصوت والضوء في معبد فيلة",
    slug: "temple-philae-sound-light-show-aswan",
    description:
      "As night falls over the Nile, the ancient Temple of Philae transforms into a canvas of light and storytelling. On this magical evening experience, you'll take a boat to the island of Philae and witness a spectacular sound and light show that projects dramatic colors onto the temple's ancient walls while a captivating narration recounts the timeless legend of Isis and Osiris. It's a deeply atmospheric and unforgettable way to connect with Egypt's mythological past.",
    descriptionAr:
      "مع حلول الليل على النيل، يتحول معبد فيلة القديم إلى لوحة من الضوء والحكايات. في هذه التجربة المسائية الساحرة ستستقل قارباً إلى جزيرة فيلة وتشهد عرضاً مبهراً للصوت والضوء يُسقط ألواناً درامية على جدران المعبد القديمة بينما تستعيد رواية آسرة أسطورة إيزيس وأوزيريس الخالدة.",
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
    highlights: [
      "Evening boat ride to Philae Island",
      "Spectacular sound and light show at the Temple of Isis",
      "Dramatic narration of the legend of Isis and Osiris",
      "Stunning night views of the illuminated temple",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Show entrance", "Boat to Philae Island", "Hotel pickup and drop-off"],
    excludes: ["Tips", "Personal expenses"],
  },
  {
    title: "Elephantine Island Boat Tour",
    titleAr: "جولة قارب إلى جزيرة الفيلة",
    slug: "elephantine-island-boat-tour-aswan",
    description:
      "Escape the city and glide across the calm waters of the Nile on a traditional felucca to Elephantine Island, the largest island in Aswan. This lush, peaceful island has been inhabited since prehistoric times and is packed with history, including ancient ruins, the Aswan Museum, and the famous Nilometer used to measure the Nile's flood levels. The surrounding landscapes of granite boulders, swaying palms, and turquoise water make this one of the most scenic boat trips in all of Egypt.",
    descriptionAr:
      "اهرب من المدينة وانزلق عبر المياه الهادئة للنيل على فلوكة تقليدية إلى جزيرة الفيلة، أكبر جزيرة في أسوان. هذه الجزيرة الخضراء الهادئة مأهولة منذ عصور ما قبل التاريخ ومليئة بالتاريخ، بما في ذلك الآثار القديمة ومتحف أسوان ومقياس النيل الشهير المستخدم لقياس مستويات فيضان النيل.",
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
    highlights: [
      "Traditional felucca ride across the Nile",
      "Explore the ancient ruins of Elephantine Island",
      "Visit the Aswan Museum on the island",
      "See the ancient Nilometer",
      "Enjoy stunning Nile views and island scenery",
    ],
    includes: ["Felucca ride", "Guide", "Entrance fees"],
    excludes: ["Hotel pickup", "Meals", "Tips"],
  },
  {
    title: "Abu Simbel Day Trip",
    titleAr: "رحلة يوم إلى أبو سمبل",
    slug: "abu-simbel-day-trip-aswan",
    description:
      "Journey deep into the Egyptian south to witness one of the most awe-inspiring monuments ever built — the twin temples of Abu Simbel. Carved into the mountainside by Ramses II over 3,000 years ago, these colossal temples were famously relocated in the 1960s to save them from the rising waters of Lake Nasser. The Great Temple of Ramses II, guarded by four enormous seated statues, and the smaller Temple of Nefertari are among the most breathtaking sights in all of Egypt.",
    descriptionAr:
      "سافر عميقاً في الجنوب المصري لتشهد واحداً من أكثر الآثار إثارة للإعجاب على الإطلاق — معبدا أبو سمبل التوأمان. نُحتا في الجبل بأمر رمسيس الثاني منذ أكثر من 3000 عام، وقد أُعيد تشييد هذين المعبدين الهائلين في الستينيات لإنقاذهما من مياه بحيرة ناصر المتصاعدة. معبد رمسيس الثاني العظيم الذي يحرسه أربعة تماثيل جالسة ضخمة ومعبد نفرتاري الأصغر من أكثر المناظر خلاباً في مصر كلها.",
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
    highlights: [
      "Visit the legendary Great Temple of Ramses II",
      "Explore the Temple of Nefertari",
      "Learn about the incredible UNESCO relocation project",
      "Admire the four colossal statues at the entrance",
      "Hotel pickup at dawn included",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees", "Transport"],
    excludes: ["Meals", "Tips", "Personal expenses"],
  },
  {
    title: "2-Day Abu Simbel Tour + Light and Sound Show",
    titleAr: "جولة أبو سمبل يومان مع عرض الصوت والضوء",
    slug: "2-day-abu-simbel-tour-light-sound-show-aswan",
    description:
      "Experience the full magic of Abu Simbel on this relaxed 2-day tour that lets you avoid the early morning rush. Arrive in Abu Simbel at your own pace and spend quality time exploring the magnificent temples of Ramses II and Nefertari with a knowledgeable guide. As night falls, stay on for the spectacular light and sound show, where the temples are dramatically illuminated and the story of Ramses II unfolds in an unforgettable performance. Overnight accommodation in Abu Simbel is included.",
    descriptionAr:
      "اختبر السحر الكامل لأبو سمبل في هذه الجولة المريحة التي تمتد يومين وتتيح لك تجنب ازدحام الصباح الباكر. اصل إلى أبو سمبل بوتيرتك الخاصة وأمضِ وقتاً نوعياً في استكشاف معبدي رمسيس الثاني ونفرتاري الرائعين مع مرشد متمكن. مع حلول الليل ابقَ لحضور عرض الصوت والضوء المذهل حيث تُضاء المعابد بشكل درامي وتتكشف قصة رمسيس الثاني في عرض لا يُنسى.",
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
    highlights: [
      "2-day relaxed visit to Abu Simbel without early wake-up",
      "Guided tour of the temples of Ramses II and Nefertari",
      "Evening light and sound show at Abu Simbel",
      "Overnight accommodation included",
      "Hotel pickup from Aswan included",
    ],
    includes: ["1 night accommodation in Abu Simbel", "Guided tours", "Entrance fees", "Light and sound show", "Transport from Aswan"],
    excludes: ["Meals", "Tips", "Personal expenses"],
  },
  {
    title: "Transfers in Aswan",
    titleAr: "خدمة التوصيل في أسوان",
    slug: "transfers-aswan",
    description:
      "Move around Aswan with ease and comfort using our reliable private transfer service. A professional chauffeur will meet you at the airport, your hotel, or any address you choose and take you smoothly to your destination. Whether you're heading to the cruise terminal, a hotel, or a day trip pickup point, our transfers ensure you arrive on time without the stress of navigating unfamiliar roads.",
    descriptionAr:
      "تنقل في أسوان بسهولة وراحة باستخدام خدمة النقل الخاصة الموثوقة لدينا. سيستقبلك سائق محترف في المطار أو فندقك أو أي عنوان تختاره وسيأخذك بسلاسة إلى وجهتك. سواء كنت متجهاً إلى رصيف الرحلات النيلية أو فندق أو نقطة التقاط رحلة يومية، تضمن خدمة التوصيل وصولك في الوقت المناسب.",
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
    title: "4-Day Lake Nasser Cruise",
    titleAr: "رحلة بحرية 4 أيام على بحيرة ناصر",
    slug: "4-day-lake-nasser-cruise-aswan",
    description:
      "Sail across the vast and serene waters of Lake Nasser on this all-inclusive 4-day cruise, one of the most unique travel experiences in Africa. Lake Nasser, one of the world's largest man-made lakes, is home to a remarkable collection of ancient temples relocated during the construction of the Aswan High Dam, including Abu Simbel, Wadi el-Seboua, and Amada. With a knowledgeable guide, comfortable cabins, and all meals provided, this cruise offers an intimate and exclusive way to discover monuments that few travelers ever see.",
    descriptionAr:
      "أبحر عبر المياه الشاسعة والهادئة لبحيرة ناصر في هذه الرحلة البحرية الشاملة التي تمتد 4 أيام، وهي من أكثر تجارب السفر فرادة في أفريقيا. بحيرة ناصر، إحدى أكبر البحيرات الاصطناعية في العالم، تضم مجموعة رائعة من المعابد القديمة التي أُعيد تشييدها خلال بناء السد العالي، بما فيها أبو سمبل ووادي السبوع وعمادة.",
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
    highlights: [
      "4-day all-inclusive cruise on Lake Nasser",
      "Visit the temples of Abu Simbel, Wadi el-Seboua, and Amada",
      "Comfortable cabin accommodation onboard",
      "All meals included throughout the cruise",
      "Expert guide for all temple visits",
    ],
    includes: ["Accommodation onboard", "All meals", "Guided excursions", "Entrance fees", "English-speaking guide"],
    excludes: ["International flights", "Travel insurance", "Tips", "Personal expenses"],
  },
  {
    title: "Nubian Village Day Trip",
    titleAr: "رحلة يوم إلى القرية النوبية",
    slug: "nubian-village-day-trip-aswan",
    description:
      "Step away from ancient temples and discover the warm, colorful world of Nubian culture on this authentic day trip. Cross the Nile on a traditional felucca to reach Gharb Soheil, one of the most genuine and welcoming Nubian villages in Egypt. Here you'll wander through vivid blue and orange painted houses, meet local families, learn about Nubian traditions, taste local food, and perhaps visit a Nubian home for tea. It's a rare and deeply human experience that brings the living culture of southern Egypt to life.",
    descriptionAr:
      "ابتعد عن المعابد القديمة واكتشف العالم الدافئ الملون للثقافة النوبية في هذه الرحلة اليومية الأصيلة. اعبر النيل على فلوكة تقليدية للوصول إلى غرب سهيل، إحدى أكثر القرى النوبية أصالة وترحيباً في مصر. هنا ستتجول بين البيوت الملونة باللون الأزرق والبرتقالي وتلتقي بالعائلات المحلية وتتعرف على التقاليد النوبية.",
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
    highlights: [
      "Felucca ride across the Nile to the Nubian village",
      "Explore the colorful streets of Gharb Soheil",
      "Meet local Nubian families and learn about their traditions",
      "Taste authentic Nubian food and tea",
      "Unique cultural experience away from the tourist trail",
    ],
    includes: ["Felucca ride", "Guide", "Village visit"],
    excludes: ["Hotel pickup", "Meals", "Tips", "Personal expenses"],
  },
  {
    title: "Kalabasha, Beit El-Wali & Kertassi Temples Tour",
    titleAr: "جولة معابد كلابشة وبيت الولي وقرتاسي",
    slug: "kalabasha-beit-wali-kertassi-temples-aswan",
    description:
      "Explore three extraordinary temples near Aswan that span different periods of Egyptian history, all relocated to their current site on the shores of Lake Nasser during the UNESCO rescue operation of the 1960s. The Temple of Kalabasha is one of the largest freestanding temples in Nubia, built during the Roman era. Beit El-Wali is a rock-cut temple from the reign of Ramses II, filled with vivid battle reliefs. The small Kertassi kiosk, with its elegant columns, completes this remarkable trio.",
    descriptionAr:
      "استكشف ثلاثة معابد استثنائية بالقرب من أسوان تمتد عبر فترات مختلفة من التاريخ المصري، أُعيد تشييدها جميعاً في موقعها الحالي على ضفاف بحيرة ناصر خلال عملية الإنقاذ التي أشرفت عليها اليونسكو في الستينيات. معبد كلابشة هو أحد أكبر المعابد المستقلة في النوبة، بُني في العصر الروماني. بيت الولي معبد منحوت في الصخر من عهد رمسيس الثاني. وكشك قرتاسي الصغير بأعمدته الأنيقة يكمل هذا الثلاثي الرائع.",
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
    highlights: [
      "Visit the grand Roman-era Temple of Kalabasha",
      "Explore the rock-cut Temple of Beit El-Wali with its vivid reliefs",
      "See the elegant Kertassi kiosk on Lake Nasser",
      "Learn about the UNESCO temple relocation project",
      "Boat ride across Lake Nasser included",
    ],
    includes: ["Guide", "Boat ride", "Entrance fees"],
    excludes: ["Hotel pickup", "Meals", "Tips"],
  },
  {
    title: "Edfu & Kom Ombo Temples Tour from Aswan",
    titleAr: "جولة معبدي إدفو وكوم أمبو من أسوان",
    slug: "edfu-kom-ombo-temples-tour-aswan",
    description:
      "Head north from Aswan on this full-day guided tour to two of the Nile Valley's most impressive ancient temples. At Edfu, you'll discover the magnificent Temple of Horus, dedicated to the falcon-headed god and considered one of the best-preserved temples in Egypt, with towering pylons and richly carved walls that reveal the secrets of ancient Egyptian religion. At Kom Ombo, an extraordinary double temple dedicated to both Sobek the crocodile god and Haroeris the falcon god awaits, along with a fascinating collection of genuine mummified crocodiles.",
    descriptionAr:
      "توجه شمالاً من أسوان في هذه الجولة اليومية المصحوبة بمرشد إلى اثنين من أكثر المعابد القديمة إثارة للإعجاب في وادي النيل. في إدفو ستكتشف معبد حورس الرائع المكرس لإله الصقر والمعتبر أحد أفضل المعابد المحفوظة في مصر. وفي كوم أمبو ينتظرك معبد مزدوج استثنائي مكرس لكلٍّ من سوبك إله التماسيح وهارويريس إله الصقر.",
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
    highlights: [
      "Visit the spectacular Temple of Horus at Edfu",
      "Explore the unique double temple at Kom Ombo",
      "See the mummified crocodiles on display",
      "Full-day guided excursion with hotel pickup",
      "Travel along the scenic Nile Valley",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees", "Transport"],
    excludes: ["Meals", "Tips", "Personal expenses"],
  },
  {
    title: "Civitatis eSIM Card Egypt",
    titleAr: "شريحة eSIM لمصر من Civitatis",
    slug: "civitatis-esim-card-egypt-aswan",
    description:
      "Stay connected throughout your Egyptian adventure with this convenient eSIM card designed for travelers. Whether you're navigating to the temples of Abu Simbel, sharing photos from the Nile, or looking up information about the monuments you're visiting, this eSIM gives you reliable mobile data access across Egypt without the hassle of finding a local SIM card. Available in multiple durations to match the length of your trip.",
    descriptionAr:
      "ابقَ متصلاً طوال مغامرتك المصرية مع بطاقة eSIM المريحة هذه المصممة للمسافرين. سواء كنت تتنقل إلى معابد أبو سمبل أو تشارك الصور من النيل أو تبحث عن معلومات حول الآثار التي تزورها، تمنحك هذه البطاقة إمكانية الوصول إلى بيانات الجوال في جميع أنحاء مصر.",
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
      "No need to find a local SIM card",
      "Available in 7, 15, and 30-day plans",
      "Easy digital activation on your phone",
      "Works at all major Egyptian tourist sites",
    ],
    includes: ["eSIM data plan for selected duration"],
    excludes: ["Voice calls", "SMS"],
  },
  {
    title: "5-Day Cruise on Lake Nasser",
    titleAr: "رحلة بحرية 5 أيام على بحيرة ناصر",
    slug: "5-day-cruise-lake-nasser-aswan",
    description:
      "For those who want to fully immerse themselves in the ancient wonders of Nubia, this 5-day all-inclusive Lake Nasser cruise is the ultimate experience. Sail across one of the world's largest reservoirs and visit a series of extraordinary temples that were rescued from the rising waters decades ago, including the awe-inspiring temples of Abu Simbel, Wadi el-Seboua, Dakka, Maharraqa, and Amada. Every day brings a new discovery as your expert guide reveals the stories behind these remarkable monuments.",
    descriptionAr:
      "لمن يريد الانغماس الكامل في عجائب النوبة القديمة، تُعدّ رحلة بحيرة ناصر الشاملة التي تمتد 5 أيام التجربة المثلى. أبحر عبر إحدى أكبر الخزانات المائية في العالم وزر سلسلة من المعابد الاستثنائية التي أُنقذت من المياه المتصاعدة منذ عقود، بما فيها معابد أبو سمبل ووادي السبوع ودكة ومهرقة وعمادة.",
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
    highlights: [
      "5-day all-inclusive cruise on Lake Nasser",
      "Visit Abu Simbel, Wadi el-Seboua, Dakka, and Amada temples",
      "Comfortable cabin accommodation onboard",
      "All meals and guided excursions included",
      "Exclusive access to rarely visited monuments",
    ],
    includes: ["Accommodation onboard", "All meals", "Guided excursions", "Entrance fees", "English-speaking guide"],
    excludes: ["International flights", "Travel insurance", "Tips", "Personal expenses"],
  },
  {
    title: "Aswan Felucca Tour",
    titleAr: "جولة الفلوكة في أسوان",
    slug: "aswan-felucca-tour",
    description:
      "There is no more peaceful way to experience the Nile than drifting along its waters on a traditional felucca sailboat. On this relaxed one-hour tour, you'll glide past Aswan's most scenic spots — Elephantine Island, the Aga Khan Mausoleum perched on its hilltop, and the desert cliffs of the West Bank — as the warm breeze fills the sails and the timeless sounds of the river surround you. A simple, beautiful, and deeply memorable experience.",
    descriptionAr:
      "لا توجد طريقة أكثر هدوءاً لتجربة النيل من الانجراف على مياهه على متن فلوكة شراعية تقليدية. في هذه الجولة المريحة التي تمتد ساعة واحدة ستنزلق بجوار أجمل مناطق أسوان — جزيرة الفيلة ومقبرة الآغا خان على قمة التلة والمنحدرات الصحراوية على الضفة الغربية.",
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
    highlights: [
      "Relaxing felucca ride on the Nile in Aswan",
      "Pass by Elephantine Island and the Aga Khan Mausoleum",
      "Scenic views of the West Bank desert cliffs",
      "Traditional Egyptian sailing experience",
      "Perfect for sunset or morning outings",
    ],
    includes: ["Felucca ride", "Sailor/guide"],
    excludes: ["Hotel pickup", "Tips"],
  },
  {
    title: "Egypt Tour Package: 8 Days All-Inclusive from Aswan",
    titleAr: "باقة سياحية مصر 8 أيام شاملة من أسوان",
    slug: "egypt-tour-package-8-days-all-inclusive-aswan",
    description:
      "Discover the greatest highlights of Egypt from south to north on this comprehensive 8-day all-inclusive tour starting from Aswan. Begin your journey with the legendary temples of Abu Simbel before heading through the Nile Valley to Luxor, then continuing to Cairo to see the Pyramids of Giza, the Sphinx, and the Grand Egyptian Museum. Every detail is taken care of — transport, accommodation, meals, guided excursions, and entrance fees are all included for a seamless Egyptian adventure.",
    descriptionAr:
      "اكتشف أبرز معالم مصر من الجنوب إلى الشمال في هذه الجولة الشاملة التي تمتد 8 أيام وتبدأ من أسوان. ابدأ رحلتك بمعابد أبو سمبل الأسطورية قبل التوجه عبر وادي النيل إلى الأقصر ثم المضي إلى القاهرة لرؤية أهرامات الجيزة وأبو الهول والمتحف المصري الكبير. كل التفاصيل مُعتنى بها.",
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
  },
];

export { cityData, toursData };