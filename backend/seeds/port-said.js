// seeds/cities/port-said.js

const cityData = {
  name: "Port Said",
  nameAr: "بورسعيد",
  slug: "port-said",
  description:
    "Port Said is one of Egypt's most strategically significant and historically fascinating cities, perched at the northern entrance of the legendary Suez Canal where the Mediterranean Sea meets one of the world's most important waterways. Founded in 1859 during the construction of the canal, Port Said grew rapidly into a thriving cosmopolitan port city with a rich multicultural heritage reflected in its distinctive architecture, wide tree-lined boulevards, and elegant colonial-era buildings. Today it offers visitors a unique window into a pivotal chapter of modern history — the canal that transformed global trade — as well as a relaxed Mediterranean atmosphere, fresh seafood, and easy access to Cairo and Alexandria.",
  descriptionAr:
    "بورسعيد هي واحدة من أكثر مدن مصر أهمية استراتيجية وأكثرها رواية تاريخياً، تقع عند المدخل الشمالي لقناة السويس الأسطورية حيث يلتقي البحر المتوسط بواحد من أهم الممرات المائية في العالم. أُسست عام 1859 خلال إنشاء القناة، ونمت بورسعيد بسرعة لتصبح مدينة ميناء متعددة الثقافات مزدهرة بتراث متعدد الجنسيات ينعكس في عمارتها المميزة وشوارعها العريضة المظللة بالأشجار ومبانيها الأنيقة من الحقبة الاستعمارية.",
  country: "Egypt",
  image: "port-said.jpg",
};

const toursData = [
  {
    title: "Cairo & Giza Pyramids Full Day Trip from Port Said",
    titleAr: "رحلة يوم كامل إلى القاهرة وأهرامات الجيزة من بورسعيد",
    slug: "cairo-giza-pyramids-day-trip-port-said",
    description:
      "Make the most of your time in Port Said with this outstanding full-day excursion to Cairo and the legendary Pyramids of Giza. Travel by private vehicle to the Egyptian capital and spend the day in the company of an expert Egyptologist guide, beginning with the awe-inspiring Giza Plateau where the three great pyramids of Khufu, Khafre, and Menkaure have dominated the desert skyline for over 4,500 years. Visit the enigmatic Great Sphinx before heading to the world-renowned Egyptian Museum of Antiquities in Tahrir Square with its extraordinary collection of royal mummies, ancient statues, and Tutankhamun's legendary golden treasures. The day ends with a visit to the atmospheric Coptic neighborhood and the famous Hanging Church.",
    descriptionAr:
      "استثمر وقتك في بورسعيد مع هذه الرحلة اليومية الممتازة إلى القاهرة وأهرامات الجيزة الأسطورية. سافر بسيارة خاصة إلى العاصمة المصرية وأمضِ اليوم برفقة مرشد أثري خبير، بدءاً بهضبة الجيزة المهيبة حيث تهيمن الأهرامات الثلاثة العظيمة لخوفو وخفرع ومنقرع على أفق الصحراء منذ أكثر من 4500 عام. زر أبو الهول الكبير الغامض قبل التوجه إلى المتحف المصري الشهير عالمياً في ميدان التحرير.",
    category: "Day trip",
    price: {
      original: 93.28,
      discounted: 74.62,
      currency: "USD",
    },
    duration: "13 hours",
    language: ["English"],
    rating: {
      score: 8.3,
      reviews: 8,
    },
    travellers: 87,
    freeCancellation: true,
    highlights: [
      "Full-day trip from Port Said to the Pyramids of Giza",
      "Visit the Great Sphinx and all three pyramids",
      "Tour the Egyptian Museum with Tutankhamun's treasures",
      "Explore the Coptic neighborhood and Hanging Church",
      "Hotel or port pickup and drop-off included",
    ],
    includes: ["Guide", "Hotel or port pickup and drop-off", "Private transport", "Entrance fees", "Lunch"],
    excludes: ["Entry inside the Great Pyramid (extra fee)", "Tips", "Personal expenses"],
  },
  {
    title: "Civitatis eSIM Card Egypt",
    titleAr: "شريحة eSIM لمصر من Civitatis",
    slug: "civitatis-esim-card-egypt-port-said",
    description:
      "Stay connected throughout your Port Said and Egypt adventure with this easy-to-use travel eSIM. Whether you're watching giant container ships pass through the Suez Canal, exploring Port Said's historic streets, or making day trips to Cairo and Alexandria, this eSIM gives you reliable mobile data coverage across all of Egypt. No need to buy or swap a local SIM card — simply activate digitally before your trip and enjoy seamless connectivity from the moment you arrive.",
    descriptionAr:
      "ابقَ متصلاً طوال مغامرتك في بورسعيد ومصر مع بطاقة eSIM السياحية سهلة الاستخدام هذه. سواء كنت تشاهد السفن الضخمة تعبر قناة السويس أو تستكشف شوارع بورسعيد التاريخية أو تقوم برحلات يوم إلى القاهرة والإسكندرية، تمنحك هذه البطاقة تغطية بيانات جوال موثوقة في جميع أنحاء مصر.",
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
      "Works in Port Said and all Egyptian destinations",
    ],
    includes: ["eSIM data plan for selected duration"],
    excludes: ["Voice calls", "SMS"],
  },
  {
    title: "Civitatis Travel Insurance",
    titleAr: "تأمين السفر من Civitatis",
    slug: "civitatis-travel-insurance-port-said",
    description:
      "Explore Port Said and travel throughout Egypt with complete peace of mind thanks to Civitatis Travel Insurance. Whether you're making day trips to the Pyramids of Giza, watching ships navigate the Suez Canal, or traveling between Egypt's cities, unexpected situations can always arise. This comprehensive travel insurance covers medical emergencies, trip cancellations, lost or delayed luggage, and much more — ensuring that nothing disrupts your Egyptian journey. Available for trips lasting between 3 and 31 days.",
    descriptionAr:
      "استكشف بورسعيد وسافر في جميع أنحاء مصر براحة بال كاملة بفضل تأمين سفر Civitatis. سواء كنت تقوم برحلات يومية إلى أهرامات الجيزة أو تشاهد السفن تبحر في قناة السويس أو تتنقل بين مدن مصر، يمكن أن تنشأ مواقف غير متوقعة دائماً. يغطي هذا التأمين الشامل للسفر الحالات الطارئة الطبية وإلغاء الرحلات والأمتعة المفقودة أو المتأخرة والمزيد.",
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
      "Comprehensive travel insurance for Port Said and Egypt",
      "Covers medical emergencies and trip cancellations",
      "Available for 3 to 31-day trips",
      "Peace of mind for all activities and day trips",
    ],
    includes: ["Travel insurance coverage as per selected plan"],
    excludes: ["Pre-existing medical conditions (check policy)"],
  },
];

export { cityData, toursData };