// seeds/cities/alexandria.js

const cityData = {
  name: "Alexandria",
  nameAr: "الإسكندرية",
  slug: "alexandria",
  description:
    "Alexandria is Egypt's magnificent Mediterranean jewel — a city of extraordinary layered history, intellectual legacy, and timeless coastal beauty. Founded by Alexander the Great in 331 BC, it swiftly became one of the greatest cities of the ancient world, home to the legendary Library of Alexandria, one of the largest repositories of knowledge ever assembled, and the Pharos Lighthouse, one of the Seven Wonders of the Ancient World. Today, Alexandria enchants visitors with its elegant seafront Corniche, its fascinating blend of Greco-Roman, Egyptian, and Ottoman heritage, its world-class museums, and its wonderfully relaxed Mediterranean atmosphere that sets it apart from every other city in Egypt.",
  descriptionAr:
    "الإسكندرية هي جوهرة مصر المتوسطية الرائعة — مدينة ذات تاريخ طبقي استثنائي وإرث فكري وجمال ساحلي خالد. أسسها الإسكندر الأكبر عام 331 قبل الميلاد، وسرعان ما أصبحت واحدة من أعظم مدن العالم القديم، وكانت موطناً لمكتبة الإسكندرية الأسطورية، إحدى أكبر مستودعات المعرفة التي جُمعت على الإطلاق، ومنارة الإسكندرية، إحدى عجائب الدنيا السبع القديمة. اليوم تبهر الإسكندرية الزوار بكورنيشها الأنيق على البحر ومزيجها الرائع من التراث اليوناني الروماني والمصري والعثماني.",
  country: "Egypt",
  image: "alexandria.jpg",
};

const toursData = [
  {
    title: "Guided Tour of Alexandria",
    titleAr: "جولة مصحوبة بمرشد في الإسكندرية",
    slug: "guided-tour-alexandria",
    description:
      "Discover the extraordinary layered history of Alexandria — Egypt's Mediterranean queen — on this comprehensive guided tour of the city's most remarkable landmarks. Your expert guide will take you through thousands of years of history, beginning at the eerie and fascinating Catacombs of Kom el-Shoqafa, a sprawling Roman-era underground necropolis where Egyptian and Greco-Roman artistic styles merge in an extraordinary fusion. Nearby, you'll see Pompey's Pillar, one of the last remaining vestiges of the ancient Serapeum temple. The tour continues to the iconic Qaitbay Citadel, a magnificent 15th-century fortress built on the very spot where the legendary Pharos Lighthouse once stood, before finishing at the stunning modern Bibliotheca Alexandrina — a spectacular tribute to the ancient Library of Alexandria.",
    descriptionAr:
      "اكتشف التاريخ الطبقي الاستثنائي للإسكندرية — ملكة مصر المتوسطية — في هذه الجولة المصحوبة بمرشد الشاملة لأبرز المعالم الرائعة في المدينة. سيأخذك مرشدك الخبير عبر آلاف السنين من التاريخ، بدءاً من سراديب الموتى الغريبة والرائعة في كوم الشقافة، وهي مقبرة رومانية ضخمة تحت الأرض حيث تتمازج الأساليب الفنية المصرية واليونانية الرومانية في مزيج استثنائي. وبالقرب ستشاهد عمود بومبي، أحد آخر بقايا معبد السيرابيوم القديم.",
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
    highlights: [
      "Explore the Roman Catacombs of Kom el-Shoqafa",
      "See Pompey's Pillar and the ancient Serapeum site",
      "Visit the magnificent Qaitbay Citadel on the Mediterranean",
      "Tour the stunning modern Bibliotheca Alexandrina",
      "Lunch with traditional Alexandrian seafood included",
    ],
    includes: ["Guide", "Hotel or port pickup and drop-off", "Entrance fees", "Lunch"],
    excludes: ["Tips", "Personal expenses"],
  },
  {
    title: "Pyramids of Giza & Grand Egyptian Museum from Alexandria",
    titleAr: "أهرامات الجيزة والمتحف المصري الكبير من الإسكندرية",
    slug: "pyramids-giza-grand-egyptian-museum-alexandria",
    description:
      "Make the most of your time in Alexandria with this unforgettable day trip to the two greatest wonders of ancient and modern Egypt — the Pyramids of Giza and the Grand Egyptian Museum. Travel by private vehicle from Alexandria to Cairo, where your expert Egyptologist guide will lead you around the legendary Giza Plateau to see the three great pyramids of Khufu, Khafre, and Menkaure and the iconic Great Sphinx. Then head to the Grand Egyptian Museum, the world's largest archaeological museum, to see the complete golden treasures of Tutankhamun displayed for the first time in their entirety.",
    descriptionAr:
      "استثمر وقتك في الإسكندرية في هذه الرحلة اليومية الذكرى إلى عجيبتين عظيمتين من مصر القديمة والحديثة — أهرامات الجيزة والمتحف المصري الكبير. سافر بسيارة خاصة من الإسكندرية إلى القاهرة، حيث سيقودك مرشدك الأثري الخبير حول هضبة الجيزة الأسطورية لمشاهدة الأهرامات الثلاثة العظيمة لخوفو وخفرع ومنقرع وأبو الهول الكبير الأيقوني.",
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
    highlights: [
      "Private day trip from Alexandria to the Pyramids of Giza",
      "See the three great pyramids and the Great Sphinx",
      "Tour the Grand Egyptian Museum with Tutankhamun's treasures",
      "Expert Egyptologist guide throughout",
      "Hotel or port pickup and drop-off included",
    ],
    includes: ["Guide", "Hotel or port pickup and drop-off", "Private transport", "Entrance fees", "Lunch"],
    excludes: ["Entry inside the Great Pyramid (extra fee)", "Tips", "Personal expenses"],
  },
  {
    title: "5-Day Alexandria & Siwa Desert Tour",
    titleAr: "جولة 5 أيام في الإسكندرية وصحراء سيوة",
    slug: "5-day-alexandria-siwa-desert-tour",
    description:
      "Embark on one of Egypt's most unique and rewarding multi-day adventures on this 5-day tour that combines the Mediterranean heritage of Alexandria with the remote, magical isolation of the Siwa Oasis deep in the Western Desert. After exploring Alexandria's catacombs, citadel, and library, you'll drive west across the dramatic North African desert to reach Siwa — one of Egypt's most isolated and atmospheric oases, where a centuries-old Berber culture survives among the ruins of the Oracle Temple of Amun, freshwater springs, and the breathtaking Great Sand Sea. A truly extraordinary journey off the beaten path.",
    descriptionAr:
      "انطلق في واحدة من أكثر المغامرات متعددة الأيام تميزاً وإثارةً في مصر في هذه الجولة التي تمتد 5 أيام والتي تجمع بين التراث المتوسطي للإسكندرية والعزلة النائية الساحرة لواحة سيوة في أعماق الصحراء الغربية. بعد استكشاف سراديب الإسكندرية وقلعتها ومكتبتها ستقود غرباً عبر الصحراء الأفريقية الشمالية الرائعة للوصول إلى سيوة.",
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
    highlights: [
      "Explore Alexandria's catacombs, citadel, and Bibliotheca",
      "Drive across the North African desert to Siwa Oasis",
      "Visit the ancient Oracle Temple of Amun at Siwa",
      "Swim in freshwater springs and explore salt lakes",
      "Journey through the spectacular Great Sand Sea",
    ],
    includes: ["4 nights accommodation", "Private transport", "Guide", "Entrance fees", "Some meals"],
    excludes: ["All meals", "Tips", "Personal expenses", "International flights"],
  },
  {
    title: "Civitatis eSIM Card Egypt",
    titleAr: "شريحة eSIM لمصر من Civitatis",
    slug: "civitatis-esim-card-egypt-alexandria",
    description:
      "Stay connected throughout your Alexandria and Egypt adventure with this convenient travel eSIM. Whether you're navigating the streets of Alexandria's ancient neighborhoods, researching the city's fascinating history, or sharing photos from the Qaitbay Citadel with the Mediterranean Sea as a backdrop, this eSIM gives you reliable mobile data coverage across all of Egypt. No need to search for a local SIM card — simply activate digitally before you travel and enjoy seamless connectivity from the moment you arrive.",
    descriptionAr:
      "ابقَ متصلاً طوال مغامرتك في الإسكندرية ومصر مع بطاقة eSIM السياحية المريحة هذه. سواء كنت تتنقل في شوارع أحياء الإسكندرية القديمة أو تبحث عن تاريخ المدينة الرائع أو تشارك صوراً من قلعة قايتباي مع خلفية البحر المتوسط، تمنحك هذه البطاقة تغطية بيانات جوال موثوقة في جميع أنحاء مصر.",
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
      "Works in Alexandria and all Egyptian destinations",
    ],
    includes: ["eSIM data plan for selected duration"],
    excludes: ["Voice calls", "SMS"],
  },
  {
    title: "Civitatis Travel Insurance",
    titleAr: "تأمين السفر من Civitatis",
    slug: "civitatis-travel-insurance-alexandria",
    description:
      "Travel through Alexandria and Egypt with total peace of mind thanks to Civitatis Travel Insurance. Whether you're exploring ancient catacombs, sailing to coastal fortresses, or making day trips to Cairo and the Pyramids, unexpected events can always happen. This comprehensive travel insurance covers medical emergencies, trip cancellations, delayed or lost luggage, and much more — so nothing can spoil your Egyptian adventure. Available for trips lasting between 3 and 31 days.",
    descriptionAr:
      "سافر عبر الإسكندرية ومصر براحة بال تامة بفضل تأمين سفر Civitatis. سواء كنت تستكشف السراديب القديمة أو تبحر إلى القلاع الساحلية أو تقوم برحلات يوم إلى القاهرة والأهرامات، يمكن أن تحدث أحداث غير متوقعة دائماً. يغطي هذا التأمين الشامل للسفر الحالات الطارئة الطبية وإلغاء الرحلات والأمتعة المتأخرة أو المفقودة والمزيد.",
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
      "Comprehensive travel insurance for Alexandria and Egypt",
      "Covers medical emergencies and trip cancellations",
      "Available for 3 to 31-day trips",
      "Peace of mind for all sightseeing and day trips",
    ],
    includes: ["Travel insurance coverage as per selected plan"],
    excludes: ["Pre-existing medical conditions (check policy)"],
  },
];

export { cityData, toursData };