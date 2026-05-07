// seeds/cities/luxor.js

const cityData = {
  name: "Luxor",
  nameAr: "الأقصر",
  slug: "luxor",
  description:
    "Luxor is one of the most remarkable open-air museums in the world, home to ancient temples, royal tombs, and timeless monuments that have captivated travelers for centuries. Once the capital of ancient Egypt during the New Kingdom era, this city on the banks of the Nile holds the legacy of pharaohs and gods in every stone. From the towering columns of Karnak Temple to the mysterious Valley of the Kings, Luxor offers an unparalleled journey through thousands of years of history.",
  descriptionAr:
    "الأقصر هي واحدة من أعظم المتاحف المفتوحة في العالم، وتضم معابد أثرية ومقابر ملكية وآثاراً خالدة أبهرت المسافرين عبر القرون. كانت عاصمة مصر القديمة في عهد الدولة الحديثة، وتحمل هذه المدينة الواقعة على ضفاف النيل إرث الفراعنة والآلهة في كل حجر. من الأعمدة الشاهقة لمعبد الكرنك إلى وادي الملوك الغامض، تقدم الأقصر رحلة لا مثيل لها عبر آلاف السنين من التاريخ.",
  country: "Egypt",
  image: "luxor.jpg",
};

const toursData = [
  {
    title: "Valley of the Kings and Queens, Colossi & Hatshepsut Tour",
    titleAr: "جولة وادي الملوك والملكات وتمثالي ممنون ومعبد حتشبسوت",
    slug: "valley-kings-queens-colossi-hatshepsut-luxor",
    description:
      "Step into the heart of ancient Thebes on this unforgettable excursion to the most famous royal necropolis in Egypt. You'll explore the Valley of the Kings, where legendary pharaohs like Tutankhamun, Ramses II, and Seti I were laid to rest in elaborately decorated tombs. The tour also includes a visit to the Valley of the Queens, the majestic Mortuary Temple of Hatshepsut carved into the cliffs, and the iconic Colossi of Memnon standing guard over the West Bank.",
    descriptionAr:
      "انطلق إلى قلب طيبة القديمة في هذه الجولة الاستثنائية إلى أشهر مقبرة ملكية في مصر. ستستكشف وادي الملوك، حيث دُفن فراعنة أسطوريون مثل توت عنخ آمون ورمسيس الثاني وسيتي الأول في مقابر مزخرفة بشكل رائع. تشمل الجولة أيضاً زيارة وادي الملكات ومعبد حتشبسوت الجنائزي المنحوت في الصخور وتمثالي ممنون الشهيرين.",
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
      "Admire the Mortuary Temple of Hatshepsut",
      "Stop at the iconic Colossi of Memnon",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees"],
    excludes: ["Tutankhamun tomb (extra fee ~$16.50)", "Tips", "Personal expenses"],
  },
  {
    title: "Abydos & Dendera Temple Day Trip",
    titleAr: "رحلة يوم إلى معبدي أبيدوس ودندرة",
    slug: "abydos-dendera-temple-day-trip-luxor",
    description:
      "Leave Luxor behind on this fascinating day trip to two of Egypt's most sacred and beautifully preserved ancient temples. Abydos was considered the holiest city in all of Egypt, believed to be the burial place of Osiris himself, and its temple built by Seti I is covered in remarkable reliefs. Dendera is home to the famous Temple of Hathor, one of the best-preserved temples in Egypt, known for its stunning astronomical ceiling and the famous Dendera Zodiac.",
    descriptionAr:
      "غادر الأقصر في هذه الرحلة اليومية الرائعة إلى اثنين من أكثر المعابد القديمة في مصر قدسية وحفظاً. كانت أبيدوس تُعدّ أقدس مدينة في مصر كلها، ويُعتقد أنها موضع دفن أوزيريس نفسه، ومعبدها الذي بناه سيتي الأول مغطى بنقوش بارزة رائعة. أما دندرة فتضم معبد حتحور الشهير، وهو من أفضل المعابد المحفوظة في مصر، ويشتهر بسقفه الفلكي المذهل.",
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
      "Visit the sacred Temple of Seti I in Abydos",
      "Explore the magnificent Temple of Hathor in Dendera",
      "Admire the famous Dendera Zodiac ceiling",
      "Drive along the banks of the Nile",
      "Expert guide throughout the day",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees", "Transport"],
    excludes: ["Meals", "Tips", "Personal expenses"],
  },
  {
    title: "4-Day Nile Cruise from Luxor to Aswan",
    titleAr: "رحلة نيلية 4 أيام من الأقصر إلى أسوان",
    slug: "4-day-nile-cruise-luxor-aswan",
    description:
      "Embark on one of the most iconic journeys in the world — a 4-night cruise down the legendary Nile River from Luxor to Aswan. Sail past golden riverbanks and ancient ruins while visiting some of Egypt's greatest treasures, including the Valley of the Kings, Karnak Temple, the temples of Edfu and Kom Ombo, and the magnificent Philae Temple in Aswan. All meals, guided excursions, and onboard accommodation are included for a seamless Egyptian adventure.",
    descriptionAr:
      "انطلق في واحدة من أكثر الرحلات أيقونية في العالم — رحلة نيلية مدتها 4 ليالٍ على طول نهر النيل الأسطوري من الأقصر إلى أسوان. أبحر بجوار الضفاف الذهبية والآثار القديمة أثناء زيارة بعض أعظم كنوز مصر، بما فيها وادي الملوك ومعبد الكرنك ومعبدا إدفو وكوم أمبو ومعبد فيلة الرائع في أسوان.",
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
      "4 nights aboard a comfortable Nile cruise ship",
      "Visit Valley of the Kings, Karnak, and Luxor temples",
      "Explore the temples of Edfu and Kom Ombo",
      "See the Philae Temple in Aswan",
      "Enjoy a traditional felucca ride on the Nile",
      "All meals included onboard",
    ],
    includes: ["Accommodation onboard", "All meals", "Guided excursions", "Entrance fees", "English-speaking guide"],
    excludes: ["International flights", "Travel insurance", "Tips", "Personal expenses"],
  },
  {
    title: "Valley of the Nobles, Medinet Habu & Deir el-Medina Tour",
    titleAr: "جولة وادي النبلاء ومدينة هابو ودير المدينة",
    slug: "valley-nobles-medinet-habu-deir-medina-luxor",
    description:
      "Discover the lesser-known but equally fascinating side of Luxor's West Bank on this tour of three remarkable ancient sites. The Valley of the Nobles contains some of the most vividly painted tombs in all of Egypt, depicting daily life in ancient times. Medinet Habu is the massive mortuary temple of Ramses III, one of the best-preserved temples on the West Bank. Finally, Deir el-Medina gives a rare look into the lives of the craftsmen who built the royal tombs.",
    descriptionAr:
      "اكتشف الجانب الأقل شهرة والمثير للاهتمام بالقدر نفسه من الضفة الغربية للأقصر في هذه الجولة لثلاثة مواقع أثرية رائعة. يحتوي وادي النبلاء على بعض أكثر المقابر حيوية في الرسم في مصر كلها. أما مدينة هابو فهي المعبد الجنائزي الضخم لرمسيس الثالث، ودير المدينة يمنحك نظرة نادرة على حياة الحرفيين الذين بنوا المقابر الملكية.",
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
      "Explore the vividly painted tombs of the Valley of the Nobles",
      "Visit the grand Mortuary Temple of Ramses III at Medinet Habu",
      "Discover the craftsmen's village of Deir el-Medina",
      "Learn about everyday life in ancient Egypt",
      "Small group experience with an expert guide",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees"],
    excludes: ["Tips", "Personal expenses"],
  },
  {
    title: "Complete Guided Tour of Luxor",
    titleAr: "الجولة الشاملة في الأقصر",
    slug: "complete-guided-tour-luxor",
    description:
      "Experience the very best of Luxor in a single, carefully crafted day. This comprehensive tour takes you to the most iconic landmarks on both the East and West Banks of the Nile. You'll visit the Luxor Temple, the colossal Karnak Temple complex, the Valley of the Kings, the Mortuary Temple of Hatshepsut, and the Colossi of Memnon. With a knowledgeable guide leading the way, every monument comes to life through stories of the ancient world.",
    descriptionAr:
      "اختبر أفضل ما تقدمه الأقصر في يوم واحد محكم التنظيم. تأخذك هذه الجولة الشاملة إلى أبرز المعالم في الضفتين الشرقية والغربية للنيل. ستزور معبد الأقصر ومجمع معبد الكرنك الهائل ووادي الملوك ومعبد حتشبسوت الجنائزي وتمثالي ممنون. بمرشد متمكن يقود الطريق، تحيا كل نصب أثري من خلال قصص العالم القديم.",
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
      "Visit Luxor Temple on the East Bank",
      "Explore the vast Karnak Temple complex",
      "Enter the Valley of the Kings and visit royal tombs",
      "See the Mortuary Temple of Hatshepsut",
      "Admire the Colossi of Memnon",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees", "Transport"],
    excludes: ["Tutankhamun tomb (extra fee)", "Meals", "Tips"],
  },
  {
    title: "Transfers in Luxor",
    titleAr: "خدمة التوصيل في الأقصر",
    slug: "transfers-luxor",
    description:
      "Travel comfortably and safely around Luxor with our private door-to-door transfer service. Whether you need a ride from the airport, your hotel, or any other address, a professional chauffeur will be waiting for you and will take you to your destination quickly and smoothly. Perfect for arrivals, departures, or getting between sites without the hassle of public transport.",
    descriptionAr:
      "تنقل براحة وأمان في جميع أنحاء الأقصر مع خدمة النقل الخاصة من الباب إلى الباب. سواء كنت تحتاج إلى توصيلة من المطار أو فندقك أو أي عنوان آخر، سيكون سائق محترف في انتظارك وسيأخذك إلى وجهتك بسرعة وسلاسة.",
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
      "Professional and punctual chauffeur",
      "Air-conditioned vehicle",
      "Available 24/7",
      "Airport, hotel, and custom pickups",
    ],
    includes: ["Private vehicle", "Professional driver"],
    excludes: ["Tips", "Entrance fees to any attractions"],
  },
  {
    title: "Luxor Hot Air Balloon Ride",
    titleAr: "رحلة المنطاد فوق الأقصر",
    slug: "luxor-hot-air-balloon-ride",
    description:
      "Soar above the ancient wonders of Luxor at sunrise on a breathtaking hot air balloon ride. As you gently float over the West Bank, you'll be treated to sweeping aerial views of the Valley of the Kings, Karnak Temple, the Nile River, and the golden desert stretching out beyond. It's one of the most magical and unforgettable experiences Egypt has to offer, especially as the first light of dawn illuminates the temples below.",
    descriptionAr:
      "حلّق فوق عجائب الأقصر القديمة عند الشروق في رحلة منطاد ساحرة. وأنت تطفو بهدوء فوق الضفة الغربية، ستستمتع بمناظر جوية بانورامية لوادي الملوك ومعبد الكرنك ونهر النيل والصحراء الذهبية الممتدة خلفها. إنها من أكثر التجارب سحراً وخلوداً في الذاكرة التي تقدمها مصر.",
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
      "Sunrise hot air balloon flight over Luxor",
      "Aerial views of the Valley of the Kings",
      "See Karnak Temple and the Nile from above",
      "Experienced and certified balloon pilot",
      "Hotel pickup at dawn included",
    ],
    includes: ["Balloon ride", "Hotel pickup and drop-off", "Certificate of flight"],
    excludes: ["Tips", "Personal expenses"],
  },
  {
    title: "Luxor & Karnak Temples Guided Tour",
    titleAr: "جولة معبد الأقصر والكرنك",
    slug: "luxor-karnak-temples-guided-tour",
    description:
      "Explore two of the most awe-inspiring temples in the ancient world on this evening guided tour. Beginning at the massive Karnak Temple, you'll walk through its famous Hypostyle Hall with its towering 134 columns, and learn the stories of the 67 pharaohs who contributed to its construction over 2,000 years. The tour then continues to the stunning Luxor Temple, connected to Karnak by the 3-kilometer Avenue of the Sphinxes, and beautifully lit up at night.",
    descriptionAr:
      "استكشف اثنين من أكثر المعابد إثارة للإعجاب في العالم القديم في هذه الجولة المسائية المصحوبة بمرشد. ابدأ بمعبد الكرنك الضخم وامشِ عبر قاعة الأعمدة الشهيرة بأعمدتها الـ 134 الشاهقة، وتعرّف على قصص الـ 67 فرعوناً الذين ساهموا في بنائه على مدى أكثر من 2000 عام. ثم تستمر الجولة إلى معبد الأقصر الرائع المضاء ليلاً.",
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
      "Evening visit to Karnak Temple with expert guide",
      "Walk through the iconic Hypostyle Hall",
      "Visit the beautifully lit Luxor Temple at night",
      "Learn about the Avenue of the Sphinxes",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees"],
    excludes: ["Tips", "Personal expenses"],
  },
  {
    title: "Karnak Temple Guided Tour",
    titleAr: "جولة مصحوبة بمرشد في معبد الكرنك",
    slug: "karnak-temple-guided-tour-luxor",
    description:
      "Dedicated entirely to the grandest temple complex in ancient Egypt, this guided tour takes you deep into the world of Karnak. The sanctuary of Amun-Ra was the beating heart of religious life in ancient Thebes, and its sheer scale is staggering — the perimeter stretches for 2,400 meters. Walk through the Great Hypostyle Hall, admire the sacred lake, and discover obelisks and shrines built by some of Egypt's most powerful rulers over two millennia.",
    descriptionAr:
      "مخصصة كلياً لأعظم مجمع معابد في مصر القديمة، تأخذك هذه الجولة المصحوبة بمرشد إلى عمق عالم الكرنك. كان مقدس آمون-رع قلب الحياة الدينية في طيبة القديمة، وحجمه الهائل مذهل — يمتد محيطه 2400 متر. سِر عبر قاعة الأعمدة الكبرى وأعجَب بالبحيرة المقدسة واستكشف المسلات والأضرحة التي بناها بعض أقوى حكام مصر على مدى ألفي عام.",
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
      "Expert guided tour of Karnak Temple",
      "Visit the Great Hypostyle Hall with 134 columns",
      "See the sacred lake of Amun",
      "Admire the ancient obelisks of Hatshepsut and Thutmose I",
      "Learn the full history of the temple's 2,000-year construction",
    ],
    includes: ["Guide", "Entrance fees"],
    excludes: ["Hotel pickup", "Tips", "Personal expenses"],
  },
  {
    title: "Karnak Temple Light & Sound Show",
    titleAr: "عرض الصوت والضوء في معبد الكرنك",
    slug: "karnak-temple-light-sound-show-luxor",
    description:
      "Experience the magic of Karnak after dark with this spectacular light and sound show. As night falls over the ancient temple, dramatic lighting illuminates the towering columns, obelisks, and sacred lake while a captivating narration takes you back thousands of years through the story of ancient Egypt. Walk through the temple complex as the history of Karnak unfolds around you in a truly immersive and unforgettable evening.",
    descriptionAr:
      "اختبر سحر الكرنك بعد حلول الظلام من خلال عرض الصوت والضوء المبهر هذا. مع حلول الليل على المعبد القديم، يُضيء الضوء الدرامي الأعمدة الشاهقة والمسلات والبحيرة المقدسة بينما يأخذك تعليق آسر آلاف السنين إلى الوراء عبر قصة مصر القديمة.",
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
      "Walk through the illuminated temple at night",
      "Dramatic narration telling the story of ancient Egypt",
      "Stunning views of the sacred lake by night",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Show entrance", "Hotel pickup and drop-off"],
    excludes: ["Tips", "Personal expenses"],
  },
  {
    title: "Edfu & Kom Ombo Day Trip from Luxor",
    titleAr: "رحلة يوم إلى إدفو وكوم أمبو من الأقصر",
    slug: "edfu-kom-ombo-day-trip-luxor",
    description:
      "Head south from Luxor on this remarkable day trip to two of Egypt's most impressive ancient temples. At Edfu, you'll visit the Temple of Horus, one of the best-preserved temples in the country, with its towering entrance pylons and intricate wall carvings. Kom Ombo then offers a unique double temple dedicated to both the crocodile god Sobek and the falcon god Horus, and is famous for its remarkable mummified crocodiles on display.",
    descriptionAr:
      "توجه جنوباً من الأقصر في هذه الرحلة اليومية الرائعة إلى اثنين من أكثر المعابد القديمة إثارة للإعجاب في مصر. في إدفو ستزور معبد حورس، وهو من أفضل المعابد المحفوظة في البلاد. أما كوم أمبو فيقدم معبداً مزدوجاً فريداً مكرساً لكلٍّ من إله التماسيح سوبك وإله الصقر حورس.",
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
      "Visit the magnificent Temple of Horus at Edfu",
      "Traditional horse and carriage ride in Edfu",
      "Explore the unique double temple at Kom Ombo",
      "See the mummified crocodiles at Kom Ombo",
      "Full-day guided excursion with hotel pickup",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees", "Horse carriage ride at Edfu"],
    excludes: ["Meals", "Tips", "Personal expenses"],
  },
  {
    title: "Luxor Tour by Horse-Drawn Carriage",
    titleAr: "جولة الأقصر بالعربة الكارو",
    slug: "luxor-tour-horse-drawn-carriage",
    description:
      "Discover the charm of Luxor in the most traditional way possible — aboard a classic horse-drawn carriage. Clip-clop through the city's streets and along the Nile Corniche, passing by the entrance of Luxor Temple and taking in the lively atmosphere of this ancient city in a relaxed and authentic manner. A perfect introduction to Luxor for first-time visitors or a delightful way to see the city from a different perspective.",
    descriptionAr:
      "اكتشف سحر الأقصر بأكثر الطرق التقليدية — على متن عربة الكارو الكلاسيكية. تجوّل في شوارع المدينة وعلى كورنيش النيل مروراً بمدخل معبد الأقصر، واستمتع بالأجواء الحيوية لهذه المدينة العريقة بطريقة مريحة وأصيلة.",
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
      "Scenic horse-drawn carriage ride through Luxor",
      "Pass by Luxor Temple and the Nile Corniche",
      "Experience a traditional mode of Egyptian transport",
      "Relaxed and flexible pace",
    ],
    includes: ["Carriage ride", "English-speaking guide"],
    excludes: ["Hotel pickup", "Tips"],
  },
  {
    title: "Luxor Museum & Museum of Mummification Guided Tour",
    titleAr: "جولة متحف الأقصر ومتحف التحنيط",
    slug: "luxor-museum-mummification-guided-tour",
    description:
      "Dive into Luxor's extraordinary archaeological heritage with this guided tour of two of Egypt's finest museums. The Luxor Museum houses a world-class collection of artifacts from the Theban region, including royal statues, exquisite jewelry, and pieces from Tutankhamun's treasure. The nearby Museum of Mummification offers a fascinating and rare insight into the ancient Egyptian art of preserving the dead, with genuine mummies and tools on display.",
    descriptionAr:
      "انغمس في التراث الأثري الاستثنائي للأقصر بهذه الجولة المصحوبة بمرشد في اثنين من أفضل متاحف مصر. يضم متحف الأقصر مجموعة عالمية المستوى من القطع الأثرية من المنطقة الطيبية. أما متحف التحنيط فيقدم نظرة رائعة ونادرة على فن التحنيط المصري القديم.",
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
      "See royal statues, jewelry, and Tutankhamun artifacts",
      "Explore the unique Museum of Mummification",
      "Learn about ancient Egyptian embalming techniques",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees to both museums"],
    excludes: ["Tips", "Personal expenses"],
  },
  {
    title: "Sunset Felucca Trip to Banana Island",
    titleAr: "رحلة الفلوكة غروب الشمس إلى جزيرة الموز",
    slug: "sunset-felucca-trip-banana-island-luxor",
    description:
      "Unwind on a peaceful felucca sailing trip down the Nile at golden hour. Glide across the calm waters toward Banana Island, a lush and tranquil island famous for its banana plantations, mango trees, and tropical greenery. Upon arrival, you'll stroll through the island's fruit gardens and enjoy the serene surroundings before sailing back to Luxor as the sun dips below the horizon — a perfect, relaxing way to end the day.",
    descriptionAr:
      "استرخِ في رحلة إبحار هادئة بالفلوكة على النيل في الساعة الذهبية. انزلق عبر المياه الهادئة نحو جزيرة الموز، وهي جزيرة خضراء وهادئة مشهورة بمزارع الموز وأشجار المانجو والغطاء النباتي الاستوائي. عند الوصول ستتجول في حدائق الجزيرة وتستمتع بالأجواء الهادئة قبل الإبحار عائداً إلى الأقصر مع غروب الشمس.",
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
      "Sunset felucca ride on the Nile",
      "Visit the lush Banana Island",
      "Walk through tropical fruit plantations",
      "Peaceful and scenic experience away from the crowds",
      "Perfect end-of-day activity",
    ],
    includes: ["Felucca ride", "Guide", "Visit to Banana Island"],
    excludes: ["Hotel pickup", "Tips", "Personal expenses"],
  },
  {
    title: "Egypt Tour Package: 8 Days All-Inclusive from Luxor",
    titleAr: "باقة سياحية مصر 8 أيام شاملة من الأقصر",
    slug: "egypt-tour-package-8-days-all-inclusive-luxor",
    description:
      "See the very best of Egypt in 8 unforgettable all-inclusive days starting from Luxor. This comprehensive tour covers the greatest ancient landmarks in the country, from the colossal temples of Karnak and Hatshepsut in Luxor to the sacred temples of Abu Simbel near Aswan, the Philae Temple, the Aswan High Dam, and the iconic Pyramids of Giza in Cairo. All accommodation, transport, meals, guided excursions, and entrance fees are included.",
    descriptionAr:
      "شاهد أفضل ما تقدمه مصر في 8 أيام شاملة لا تُنسى تبدأ من الأقصر. تغطي هذه الجولة الشاملة أعظم المعالم الأثرية في البلاد، من معابد الكرنك وحتشبسوت الهائلة في الأقصر إلى معابد أبو سمبل المقدسة قرب أسوان ومعبد فيلة والسد العالي والأهرامات الأيقونية في القاهرة.",
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
      "Visit Karnak and Hatshepsut Temples in Luxor",
      "Explore the temples of Abu Simbel",
      "See the Aswan High Dam and Philae Temple",
      "Visit the iconic Pyramids of Giza",
      "All accommodation and meals included",
      "Professional English-speaking guide throughout",
    ],
    includes: [
      "7 nights accommodation",
      "All meals",
      "All transport (including flights)",
      "Guided excursions",
      "Entrance fees",
      "English-speaking guide",
    ],
    excludes: ["International flights to/from Egypt", "Tips", "Personal expenses", "Travel insurance"],
  },
];

export { cityData, toursData };