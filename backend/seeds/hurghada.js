// hurghada_tours_1.js — Tours 1 to 12

const cityData = {
  name: "Hurghada",
  nameAr: "الغردقة",
  slug: "hurghada",
  description:
    "Hurghada is Egypt's premier Red Sea resort city, stretching along a dazzling coastline of crystal-clear turquoise waters, vibrant coral reefs, and golden sandy beaches. Once a quiet fishing village, it has grown into one of the most popular holiday destinations in the Middle East and Africa, drawing millions of visitors each year with its world-class diving, water sports, desert adventures, and year-round sunshine. Whether you're gliding over coral gardens on a snorkeling trip, racing across desert dunes on a quad bike, or sailing to a private island paradise, Hurghada offers an endless variety of experiences for every type of traveler.",
  descriptionAr:
    "الغردقة هي مدينة المنتجعات الأولى على البحر الأحمر في مصر، تمتد على طول ساحل ساحر من المياه الفيروزية الصافية والشعاب المرجانية النابضة بالحياة والشواطئ الرملية الذهبية. كانت في السابق قرية صيد هادئة، وقد نمت لتصبح واحدة من أكثر الوجهات السياحية شعبية في الشرق الأوسط وأفريقيا، تستقطب ملايين الزوار سنوياً بغوصها العالمي المستوى والرياضات المائية ومغامرات الصحراء وأشعة الشمس على مدار العام.",
  country: "Egypt",
  image: "hurghada.jpg",
};

const toursData = [
  // ─── TOUR 1 ───────────────────────────────────────────────────────────────
  {
    title: "Guided Tour of Hurghada",
    titleAr: "جولة مصحوبة بمرشد في الغردقة",
    slug: "guided-tour-hurghada",
    description:
      "Discover the cultural and historical soul of Hurghada beyond its beaches on this engaging guided city tour. Your expert guide will take you through the most significant landmarks of the city, starting with the magnificent Grand Mosque, one of the most striking religious buildings on the Egyptian Red Sea coast. The tour also visits the Coptic Church of Hurghada before exploring the lively local souk and the colorful fishermen's neighborhood.",
    descriptionAr:
      "اكتشف الروح الثقافية والتاريخية للغردقة ما وراء شواطئها في هذه الجولة المدينية المصحوبة بمرشد. سيأخذك مرشدك الخبير عبر أبرز معالم المدينة، بدءاً بالمسجد الكبير الرائع، وتزور الجولة أيضاً الكنيسة القبطية وتستكشف السوق المحلي الحيوي وحي الصيادين الملون.",
    category: "Guided tours and free tours",
    price: { original: 39.00, discounted: 31.20, currency: "USD" },
    duration: "4 hours",
    language: ["English"],
    rating: { score: 8.4, reviews: 65 },
    travellers: 600,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 15,
    availableTimes: ["09:00", "10:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. The guide and vehicle will collect you at the agreed time.",
      ar: "بهو فندقك في الغردقة. سيستقبلك المرشد والسيارة في الوقت المتفق عليه.",
    },
    accessibility: {
      en: "Moderate walking through the souk and around the mosque and church. The fishermen's harbor area has uneven ground.",
      ar: "مشي معتدل عبر السوق وحول المسجد والكنيسة. منطقة ميناء الصيادين فيها أرض غير مستوية.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Modest clothing (shoulders and knees covered for mosque)", "Sun hat and sunscreen", "Camera", "Small local currency for souk shopping"],
      ar: ["حذاء مريح للمشي", "ملابس محتشمة (تغطية الكتفين والركبتين للمسجد)", "قبعة وكريم واقٍ", "كاميرا", "مبلغ صغير بالعملة المحلية"],
    },
    importantInfo: {
      en: [
        "Hotel pickup within central Hurghada is included.",
        "Modest dress is required for the mosque — scarves available at the entrance for women.",
        "Entrance fees are not included.",
        "The local souk is best visited in the morning when vendors are most active.",
      ],
      ar: [
        "الاستقبال من الفندق في وسط الغردقة مشمول.",
        "اللباس المحتشم مطلوب للمسجد — الأوشحة متوفرة عند المدخل للنساء.",
        "رسوم الدخول غير مشمولة.",
        "السوق المحلي يُفضَّل زيارته صباحاً.",
      ],
    },
    highlights: [
      "Visit the spectacular Grand Mosque of Hurghada",
      "Explore the historic Coptic Church",
      "Wander through the local souk and fishermen's area",
      "Learn about Hurghada's transformation from fishing village to resort city",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Transport"],
    excludes: ["Entrance fees", "Meals", "Tips"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Hurghada Beyond the Beach — Culture, Faith & the Old Town",
          description:
            "Most visitors to Hurghada never venture beyond their resort's pool deck, missing the real city entirely. Beneath the international hotel strips, the original Hurghada — El Dahar, the old town — still exists: a working Egyptian city of mosques, markets, Coptic churches, and fishermen's harbors with its own distinct identity. This four-hour tour is a genuine introduction to that city, moving from the Grand Mosque to the ancient Coptic Church, through the local souk, and down to the working fishermen's harbor.",
          steps: [
            { time: "09:00", description: "Hotel pickup. Drive to the El Dahar district — Hurghada's original old town, about 20 minutes from most resort hotels." },
            { time: "09:30", description: "Arrive at the Grand Mosque. Your guide explains the architecture and significance. Remove shoes before entering; headscarves available for women. Walk through the main prayer hall decorated with chandeliers, carved stucco, and geometric tile work." },
            { time: "10:15", description: "Walk to the Coptic Orthodox Church of St. Mary. Your guide explains the 2,000-year history of Coptic Christianity in Egypt — its founding, traditions, and survival." },
            { time: "11:00", description: "Walk into El Dahar souk. Your guide navigates the stalls selling spices, silver jewelry, fabrics, and local produce — the real market of Hurghada's residents." },
            { time: "11:45", description: "Walk to the Dahar fishermen's harbor. Watch the boats unloading their catch and the daily routine of the working harbor that predates the resort city by generations." },
            { time: "12:30", description: "Return transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "الغردقة ما وراء الشاطئ — الثقافة والإيمان والبلدة القديمة",
          description:
            "معظم زوار الغردقة لا يتجاوزون حدود منتجعاتهم مما يعني أنهم يفوّتون المدينة الحقيقية تماماً. تحت شرائط الفنادق الدولية، لا تزال الغردقة الأصلية — الدهار، البلدة القديمة — قائمة: مدينة مصرية حقيقية من المساجد والأسواق والكنائس القبطية وموانئ الصيادين ذات هوية متميزة. هذه الجولة الممتدة أربع ساعات مقدمة حقيقية لتلك المدينة.",
          steps: [
            { time: "09:00", description: "الاستقبال من الفندق. القيادة إلى حي الدهار — البلدة القديمة الأصلية للغردقة، نحو 20 دقيقة من معظم فنادق المنتجعات." },
            { time: "09:30", description: "الوصول إلى المسجد الكبير. يشرح مرشدك معمار المسجد وأهميته. خلع الأحذية قبل الدخول؛ الأوشحة متوفرة للنساء. التجول في قاعة الصلاة الرئيسية المزيّنة بالثريات والجص المنحوت." },
            { time: "10:15", description: "المشية إلى كنيسة السيدة العذراء القبطية الأرثوذكسية. يشرح مرشدك تاريخ المسيحية القبطية في مصر على مدى ألفي عام." },
            { time: "11:00", description: "المشية داخل سوق الدهار. مرشدك يتنقل بين أكشاك البهارات والمجوهرات الفضية والأقمشة والمنتجات المحلية — السوق الحقيقي لسكان الغردقة." },
            { time: "11:45", description: "المشية إلى ميناء صيادي الدهار. مشاهدة القوارب وهي تفرّغ صيدها والروتين اليومي للميناء العامل." },
            { time: "12:30", description: "الانتقال العائد إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 2 ───────────────────────────────────────────────────────────────
  {
    title: "Quad Bike & Dune Buggy Safari",
    titleAr: "سفاري الدراجات الرباعية وعربة الدونباجي",
    slug: "quad-bike-dune-buggy-safari-hurghada",
    description:
      "Tear across the magnificent Egyptian desert on this thrilling quad bike and dune buggy safari from Hurghada. Head out into the vast, sun-scorched landscape beyond the city and race across golden dunes, weaving between rocky outcrops and open desert plains. This action-packed adventure is perfect for those who want a taste of the raw, wild side of Egypt away from the beach.",
    descriptionAr:
      "اندفع عبر الصحراء المصرية الرائعة في هذه السفاري المثيرة بالدراجات الرباعية وعربات الدونباجي من الغردقة. توجه إلى المشهد الواسع المحترق بالشمس خارج المدينة وتسابق عبر الكثبان الذهبية متلوياً بين التكوينات الصخرية والسهول الصحراوية المفتوحة.",
    category: "Adventure and nature",
    price: { original: 39.39, discounted: null, currency: "USD" },
    duration: "4 hours",
    language: ["English"],
    rating: { score: 7.5, reviews: 22 },
    travellers: 219,
    freeCancellation: true,
    minAge: 16,
    maxGroupSize: 20,
    availableTimes: ["09:00", "15:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. The guide and vehicle will collect you and drive you to the desert base camp.",
      ar: "بهو فندقك في الغردقة. سيستقبلك المرشد والسيارة وينقلك إلى معسكر القاعدة الصحراوية.",
    },
    accessibility: {
      en: "Riders must be at least 16 and able to control the vehicle independently. Not suitable for guests with back problems, heart conditions, or pregnancy.",
      ar: "يجب أن يكون السائق 16 عاماً على الأقل وقادراً على التحكم في المركبة. غير مناسب لمن يعانون من مشاكل الظهر أو القلب أو الحوامل.",
    },
    whatToBring: {
      en: ["Closed-toe shoes (mandatory)", "Light comfortable clothing you don't mind getting dusty", "Sunglasses", "Sunscreen", "Water bottle", "Bandana or scarf for desert dust"],
      ar: ["حذاء مغلق الأصابع (إلزامي)", "ملابس خفيفة ومريحة", "نظارة شمسية", "كريم واقٍ", "زجاجة ماء", "بندانا أو وشاح للغبار"],
    },
    importantInfo: {
      en: [
        "No driving licence required — a thorough briefing is provided before departure.",
        "Dune buggies carry two people; quad bikes are single-rider.",
        "The afternoon session (15:00) is recommended for cooler temperatures and golden desert light.",
        "Pregnant women and guests with serious back or heart conditions cannot participate.",
      ],
      ar: [
        "رخصة قيادة غير مطلوبة — تُقدَّم إحاطة شاملة قبل المغادرة.",
        "عربات الدونباجي لشخصين؛ الدراجات الرباعية لشخص واحد.",
        "الجلسة بعد الظهر (15:00) موصى بها لدرجات أبرد وضوء ذهبي صحراوي.",
        "الحوامل ومن يعانون من أمراض خطيرة في الظهر أو القلب لا يمكنهم المشاركة.",
      ],
    },
    highlights: [
      "Exciting quad bike and dune buggy ride in the desert",
      "Race across golden sand dunes outside Hurghada",
      "Suitable for beginners and experienced riders",
      "All safety equipment provided",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Quad bike or dune buggy", "Safety equipment", "Hotel pickup and drop-off", "Guide"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Into the Desert — Dunes, Speed & Open Sky",
          description:
            "The desert begins less than ten minutes from Hurghada's last resort hotel. Beyond the coastal strip, the Eastern Desert stretches west in a vast dramatic landscape of golden sand, dark volcanic rock, and ancient wadis. This four-hour adventure takes you into that landscape on a quad bike or dune buggy, led by an experienced guide. There is something genuinely liberating about speed in a wide-open desert: the dust behind you, the horizon in every direction, and the silence between engine revs that reminds you how far you are from the resort.",
          steps: [
            { time: "09:00", description: "Hotel pickup. Transfer to the desert base camp approximately 15 minutes from the resort strip." },
            { time: "09:20", description: "Arrive at the base camp. Choose your vehicle: quad bike (single rider) or dune buggy (up to two riders). Fit helmet, goggles, and gloves." },
            { time: "09:30", description: "Safety briefing and riding tutorial. Practice on flat ground before the main route begins." },
            { time: "10:00", description: "Desert route begins. Follow the guide across open sandy plains, over dune ridges, and into the wider desert." },
            { time: "10:45", description: "Midpoint stop at a scenic desert viewpoint — panoramic views to the horizon. Rest, water, and photographs." },
            { time: "11:15", description: "Continue the route — the second half is typically more challenging with steeper dune crossings and rockier tracks." },
            { time: "12:00", description: "Return to base camp. Dust off, collect belongings." },
            { time: "12:15", description: "Transfer back to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "إلى الصحراء — الكثبان والسرعة والسماء المفتوحة",
          description:
            "الصحراء تبدأ على بُعد أقل من عشر دقائق من آخر فندق منتجع في الغردقة. خلف الشريط الساحلي تمتد الصحراء الشرقية في مشهد درامي شاسع من الرمال الذهبية والصخور البركانية الداكنة. تأخذك هذه المغامرة الممتدة أربع ساعات إلى ذلك المشهد على دراجة رباعية أو عربة دونباجي.",
          steps: [
            { time: "09:00", description: "الاستقبال من الفندق. الانتقال إلى معسكر القاعدة الصحراوية نحو 15 دقيقة من شريط المنتجعات." },
            { time: "09:20", description: "الوصول. اختيار مركبتك. ارتداء الخوذة والنظارات والقفازات." },
            { time: "09:30", description: "إحاطة السلامة ودرس القيادة. التدرب على الأرض المستوية أولاً." },
            { time: "10:00", description: "يبدأ مسار الصحراء. اتبع المرشد عبر السهول الرملية المفتوحة وفوق قمم الكثبان." },
            { time: "10:45", description: "توقف في منتصف الطريق عند نقطة مشاهدة بانورامية. راحة وماء وتصوير." },
            { time: "11:15", description: "الاستمرار في المسار — النصف الثاني أكثر تحدياً." },
            { time: "12:00", description: "العودة إلى معسكر القاعدة. جمع الأغراض." },
            { time: "12:15", description: "الانتقال العائد إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 3 ───────────────────────────────────────────────────────────────
  {
    title: "Luxor Tour & Valley of the Kings and Queens from Hurghada",
    titleAr: "جولة الأقصر ووادي الملوك والملكات من الغردقة",
    slug: "luxor-valley-kings-queens-tour-hurghada",
    description:
      "Make the most of your time in Hurghada with this extraordinary day trip to the ancient wonders of Luxor. Depart early and travel across the Egyptian landscape to the world's greatest open-air museum, where you'll visit the colossal Karnak Temple, the legendary Valley of the Kings, the Valley of the Queens, the Mortuary Temple of Hatshepsut, and the Colossi of Memnon.",
    descriptionAr:
      "استثمر وقتك في الغردقة مع هذه الرحلة اليومية الاستثنائية إلى عجائب الأقصر القديمة. غادر مبكراً وسافر عبر المشهد المصري إلى أعظم متحف مفتوح في العالم، حيث ستزور معبد الكرنك الهائل ووادي الملوك الأسطوري ووادي الملكات ومعبد حتشبسوت الجنائزي وتمثالي ممنون.",
    category: "Day trip",
    price: { original: 260.03, discounted: 208.03, currency: "USD" },
    duration: "18 hours",
    language: ["English"],
    rating: { score: 7.2, reviews: 31 },
    travellers: 533,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 15,
    availableTimes: ["04:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. The guide will collect you very early for the long drive to Luxor.",
      ar: "بهو فندقك في الغردقة. سيستقبلك المرشد في وقت مبكر جداً للقيادة الطويلة إلى الأقصر.",
    },
    accessibility: {
      en: "Very long day (~18 hours). The Valley of the Kings and Karnak involve extensive walking on uneven terrain. Tombs have low ceilings. Not suitable for guests with severe mobility issues.",
      ar: "يوم طويل جداً (~18 ساعة). يتضمن وادي الملوك والكرنك مشياً واسعاً على تضاريس غير مستوية. المقابر بها أسقف منخفضة. غير مناسب لمن يعانون من صعوبات حركة شديدة.",
    },
    whatToBring: {
      en: ["Very comfortable walking shoes", "Sun hat and high SPF sunscreen", "Plenty of water", "Light snacks for the early drive", "Warm layer for pre-dawn departure", "Camera (no flash in tombs)"],
      ar: ["حذاء مريح جداً للمشي", "قبعة وكريم واقٍ بعامل حماية عالٍ", "ماء وفير", "وجبات خفيفة للقيادة المبكرة", "طبقة دافئة للمغادرة قبل الفجر", "كاميرا (ممنوع الفلاش في المقابر)"],
    },
    importantInfo: {
      en: [
        "Departure is typically between 03:00 and 04:00 to make the most of the day in Luxor.",
        "The drive from Hurghada to Luxor crosses the Eastern Desert — approximately 3.5 to 4 hours each way.",
        "Entry to Tutankhamun's tomb carries an extra fee not included in the tour.",
        "Lunch is included at a local Luxor restaurant.",
        "Photography inside tombs is generally not permitted.",
      ],
      ar: [
        "المغادرة عادةً بين 03:00 و04:00 للاستفادة القصوى من اليوم في الأقصر.",
        "القيادة من الغردقة إلى الأقصر تعبر الصحراء الشرقية — نحو 3.5 إلى 4 ساعات في كل اتجاه.",
        "الدخول إلى مقبرة توتنخامون يستلزم رسماً إضافياً غير مشمول.",
        "الغداء مشمول في مطعم محلي في الأقصر.",
        "التصوير داخل المقابر ممنوع بشكل عام.",
      ],
    },
    highlights: [
      "Full-day trip from Hurghada to Luxor",
      "Visit Karnak Temple and Luxor's West Bank",
      "Explore the Valley of the Kings and Queens",
      "See the Mortuary Temple of Hatshepsut",
      "Admire the Colossi of Memnon",
      "Hotel pickup at dawn included",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees", "Lunch", "Transport"],
    excludes: ["Tutankhamun tomb (extra fee)", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Hurghada to Luxor — Ancient Egypt in a Day",
          description:
            "Luxor is the single greatest concentration of ancient Egyptian monuments on Earth. Getting there from Hurghada means crossing the Eastern Desert — a three-and-a-half-hour drive through sweeping valleys and dark mountains before the Nile Valley opens up ahead, green and sudden and extraordinary. The day covers both banks of the Nile: Karnak Temple on the East Bank, then the Valley of the Kings, Valley of the Queens, and Mortuary Temple of Hatshepsut on the West Bank.",
          steps: [
            { time: "04:00", description: "Hotel pickup in Hurghada. Begin the drive west across the Eastern Desert toward Luxor." },
            { time: "07:30", description: "Arrive in Luxor. First stop: Karnak Temple Complex. Guided tour through the Avenue of Ram-headed Sphinxes, the Great Hypostyle Hall with its 134 towering columns, the Sacred Lake, and the obelisks of Hatshepsut." },
            { time: "09:30", description: "Cross the Nile to the West Bank. Drive to the Valley of the Kings." },
            { time: "10:00", description: "Enter the Valley of the Kings. Visit three royal tombs — your guide explains the paintings, Book of the Dead texts, and the stories of the pharaohs buried here. Optional: Tutankhamun's tomb at extra cost." },
            { time: "11:30", description: "Drive to the Valley of the Queens. Visit the tomb of Queen Nefertari — one of the most beautifully painted tombs in all of Egypt." },
            { time: "12:30", description: "Lunch included at a local Luxor restaurant." },
            { time: "14:00", description: "Drive to the Mortuary Temple of Hatshepsut at Deir el-Bahari. Guided tour of the three colonnaded terraces and painted reliefs." },
            { time: "15:30", description: "Brief stop at the Colossi of Memnon — two enormous ancient seated statues beside the road." },
            { time: "16:00", description: "Depart Luxor for the return drive to Hurghada across the Eastern Desert." },
            { time: "19:30", description: "Arrive back in Hurghada. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "من الغردقة إلى الأقصر — مصر القديمة في يوم واحد",
          description:
            "الأقصر هي أعظم تركيز لآثار مصر القديمة على وجه الأرض. الوصول إليها من الغردقة يعني عبور الصحراء الشرقية: قيادة ثلاث ساعات ونصف قبل أن يتفتح وادي النيل أمامك أخضر ومفاجئ واستثنائي. يغطي اليوم ضفتي النيل: الكرنك على الضفة الشرقية، ثم وادي الملوك والملكات ومعبد حتشبسوت على الضفة الغربية.",
          steps: [
            { time: "04:00", description: "الاستقبال من الفندق في الغردقة. بدء القيادة غرباً عبر الصحراء الشرقية نحو الأقصر." },
            { time: "07:30", description: "الوصول إلى الأقصر. المحطة الأولى: مجمع معبد الكرنك. جولة مصحوبة عبر طريق أبي الهول ذي الرأس الكبشي وقاعة الأعمدة الكبرى بأعمدتها الـ 134 الشامخة." },
            { time: "09:30", description: "العبور إلى الضفة الغربية. القيادة إلى وادي الملوك." },
            { time: "10:00", description: "الدخول إلى وادي الملوك. زيارة ثلاثة مقابر ملكية. اختياري: مقبرة توتنخامون بتكلفة إضافية." },
            { time: "11:30", description: "القيادة إلى وادي الملكات. زيارة مقبرة الملكة نفرتاري — من أجمل المقابر المطلية في مصر." },
            { time: "12:30", description: "الغداء مشمول في مطعم محلي في الأقصر." },
            { time: "14:00", description: "القيادة إلى معبد حتشبسوت الجنائزي في الدير البحري. جولة مصحوبة بمرشد." },
            { time: "15:30", description: "توقف موجز عند تمثالي ممنون — تمثالان ضخمان قديمان بجانب الطريق." },
            { time: "16:00", description: "المغادرة من الأقصر للقيادة العائدة إلى الغردقة." },
            { time: "19:30", description: "الوصول إلى الغردقة. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 4 ───────────────────────────────────────────────────────────────
  {
    title: "Red Sea Beginners Scuba Diving",
    titleAr: "الغوص للمبتدئين في البحر الأحمر",
    slug: "red-sea-beginners-scuba-diving-hurghada",
    description:
      "Plunge into the breathtaking underwater world of the Red Sea on this beginner-friendly scuba diving experience. No prior experience is needed — your certified instructor will give you a thorough briefing and all the basic training you need before you enter the water. Once beneath the surface, you'll glide over spectacular coral reefs teeming with colorful fish, sea turtles, and exotic marine life.",
    descriptionAr:
      "انغمس في العالم المائي الرائع للبحر الأحمر في هذه التجربة الصديقة للمبتدئين في الغوص. لا تحتاج إلى خبرة سابقة — سيعطيك مدربك المعتمد إحاطة شاملة وكل التدريب الأساسي الذي تحتاجه قبل دخول الماء.",
    category: "Adventure and nature",
    price: { original: 53.19, discounted: 42.55, currency: "USD" },
    duration: "7 hours",
    language: ["English"],
    rating: { score: 8.4, reviews: 79 },
    travellers: 831,
    freeCancellation: true,
    minAge: 10,
    maxGroupSize: 8,
    availableTimes: ["08:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Transfer to the marina and dive boat is included.",
      ar: "بهو فندقك في الغردقة. الانتقال إلى المرسى وقارب الغوص مشمول.",
    },
    accessibility: {
      en: "Guests must be comfortable in water. Not suitable for guests with heart conditions, epilepsy, asthma, or pregnancy. Minimum age is 10. Maximum depth is 6 metres under direct instructor supervision.",
      ar: "يجب أن يكون الضيوف مرتاحين في الماء. غير مناسب لمن يعانون من أمراض قلبية أو صرع أو ربو أو الحوامل. الحد الأدنى للعمر 10 سنوات. أقصى عمق 6 أمتار تحت إشراف مباشر.",
    },
    whatToBring: {
      en: ["Swimwear", "Towel", "Reef-safe sunscreen", "Change of clothes", "Any personal medication (inform instructor in advance)"],
      ar: ["ملابس سباحة", "منشفة", "كريم واقٍ صديق للشعاب", "ملابس للتبديل", "أي دواء شخصي (أخبر المدرب مسبقاً)"],
    },
    importantInfo: {
      en: [
        "All diving equipment is provided — wetsuit, mask, fins, BCD, regulator, and tank.",
        "The session includes pool or shallow-water training before open water.",
        "Maximum depth for beginners is 6 metres.",
        "Guests must complete a medical declaration form before diving.",
        "Do not fly within 18 hours of completing a scuba dive.",
      ],
      ar: [
        "جميع معدات الغوص مقدَّمة — بدلة الغطس والقناع والزعانف وسترة التعويم والمنظم والأسطوانة.",
        "تتضمن الجلسة تدريباً في حوض أو مياه ضحلة قبل المياه المفتوحة.",
        "أقصى عمق للمبتدئين هو 6 أمتار.",
        "يجب على الضيوف ملء استمارة إقرار طبي قبل الغوص.",
        "لا تستقلَّ طائرة خلال 18 ساعة من إتمام الغوص.",
      ],
    },
    highlights: [
      "Beginner scuba diving in the Red Sea coral reefs",
      "No prior experience required",
      "Certified instructor throughout the dive",
      "Two underwater dive points",
      "All diving equipment provided",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Diving equipment", "Certified instructor", "Hotel pickup and drop-off", "Refreshments"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Your First Breath Underwater — Red Sea Beginner Dive",
          description:
            "The Red Sea is one of the world's premier diving destinations — warmer, clearer, and more biodiverse than almost any comparable body of water on Earth, with over 1,000 species of fish and visibility often exceeding 30 metres. This experience is designed entirely around your comfort and confidence. The morning starts with a thorough land-based briefing, followed by shallow-water practice, and then two open-water dives on Hurghada's famous reef sites.",
          steps: [
            { time: "08:00", description: "Hotel pickup. Transfer to Hurghada Marina and meet your dive instructor." },
            { time: "08:30", description: "Land briefing at the dive centre — equipment explained, hand signals practiced, ear equalization technique demonstrated." },
            { time: "09:15", description: "Pool or shallow-water practice session. Breathing through the regulator at the surface, then just below. Instructor confirms comfort before open water." },
            { time: "10:00", description: "Board the dive boat. Short sail to the first reef site. Dive plan briefed." },
            { time: "10:30", description: "First dive. Enter the water with the instructor. Descend to the reef — maximum 6 metres. Approximately 30-40 minutes exploring coral and marine life." },
            { time: "11:30", description: "Surface and rest on the boat. Refreshments served. 45-minute surface interval." },
            { time: "12:15", description: "Second dive at a different reef point. By this dive most guests are considerably more relaxed and able to enjoy the experience fully." },
            { time: "13:15", description: "Return to the marina. Rinse equipment, change clothes." },
            { time: "14:00", description: "Transfer back to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "أول نفَس تحت الماء — غوص المبتدئين في البحر الأحمر",
          description:
            "البحر الأحمر واحد من أبرز وجهات الغوص في العالم — أدفأ وأكثر وضوحاً وتنوعاً بيولوجياً من أي مسطح مائي مماثل، بأكثر من 1000 نوع من الأسماك ورؤية تتجاوز 30 متراً. هذه التجربة مصمَّمة كلياً حول راحتك وثقتك.",
          steps: [
            { time: "08:00", description: "الاستقبال من الفندق. الانتقال إلى مرسى الغردقة والتعرف على مدرب الغوص." },
            { time: "08:30", description: "إحاطة برية في مركز الغوص — شرح المعدات وتمرين إشارات اليد وتقنية معادلة الأذن." },
            { time: "09:15", description: "جلسة تدريب في حوض أو مياه ضحلة. التنفس عبر المنظم على السطح ثم أسفله. المدرب يتأكد من الارتياح قبل المياه المفتوحة." },
            { time: "10:00", description: "الصعود إلى قارب الغوص. إبحار قصير إلى موقع الشعاب الأول. شرح خطة الغوص." },
            { time: "10:30", description: "الغوصة الأولى. الدخول إلى الماء مع المدرب. النزول إلى الشعاب — أقصى 6 أمتار. نحو 30-40 دقيقة في استكشاف المرجان والحياة البحرية." },
            { time: "11:30", description: "الصعود إلى السطح والراحة على القارب. تقديم المرطبات. فترة استراحة سطحية 45 دقيقة." },
            { time: "12:15", description: "الغوصة الثانية في نقطة شعاب مختلفة. في هذه الغوصة معظم الضيوف أكثر راحة وقادرون على الاستمتاع الكامل." },
            { time: "13:15", description: "العودة إلى المرسى. شطف المعدات وتغيير الملابس." },
            { time: "14:00", description: "الانتقال العائد إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 5 ───────────────────────────────────────────────────────────────
  {
    title: "Orange Bay Snorkel Tour",
    titleAr: "جولة الغطس في خليج أورانج",
    slug: "orange-bay-snorkel-tour-hurghada",
    description:
      "Escape to one of the Red Sea's most beautiful natural paradises on this full-day boat trip to Orange Bay. Sail south from Hurghada to reach this stunning stretch of pristine coastline, where turquoise waters meet untouched white sand beaches and thriving coral reefs. Strap on your snorkel and fins and dive into a magical underwater world filled with colorful fish and vibrant marine life.",
    descriptionAr:
      "اهرب إلى واحدة من أجمل جنات الطبيعة في البحر الأحمر في هذه الرحلة البحرية اليومية إلى خليج أورانج. أبحر جنوباً من الغردقة للوصول إلى هذا الامتداد الرائع من الساحل البكر، حيث تلتقي المياه الفيروزية بالشواطئ الرملية البيضاء النقية والشعاب المرجانية المزدهرة.",
    category: "Day trip",
    price: { original: 22.00, discounted: null, currency: "USD" },
    duration: "8 hours",
    language: ["English"],
    rating: { score: 9.1, reviews: 45 },
    travellers: 1132,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 30,
    availableTimes: ["08:30"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Transfer to the marina is included.",
      ar: "بهو فندقك في الغردقة. الانتقال إلى المرسى مشمول.",
    },
    accessibility: {
      en: "Snorkeling requires basic comfort in water. Non-swimmers can wear a life jacket and enjoy the reef from the surface. The boat has a ladder for easy water entry and exit.",
      ar: "يتطلب الغطس الارتياح الأساسي في الماء. غير السباحين يمكنهم ارتداء سترة النجاة والاستمتاع بالشعاب من السطح.",
    },
    whatToBring: {
      en: ["Swimwear", "Towel", "Reef-safe sunscreen", "Sun hat", "Light change of clothes", "Waterproof bag for your phone"],
      ar: ["ملابس سباحة", "منشفة", "كريم واقٍ صديق للشعاب", "قبعة للشمس", "ملابس خفيفة للتبديل", "حقيبة مقاومة للماء لهاتفك"],
    },
    importantInfo: {
      en: [
        "Snorkeling equipment (mask, fins, life jacket) is provided onboard.",
        "Orange Bay is a protected area — touching or standing on coral is strictly prohibited.",
        "Meals are not included; bring your own food or purchase snacks onboard.",
        "The boat is shared with other passengers.",
        "Use reef-safe sunscreen to protect the coral ecosystem.",
      ],
      ar: [
        "معدات الغطس (قناع وزعانف وسترة نجاة) مقدَّمة على متن القارب.",
        "خليج أورانج منطقة محمية — لمس الشعاب أو الوقوف عليها محظور صراحةً.",
        "الوجبات غير مشمولة؛ أحضر طعامك أو اشترِ وجبات خفيفة على متن القارب.",
        "القارب مشترك مع ركاب آخرين.",
        "استخدم كريماً واقياً صديقاً للشعاب.",
      ],
    },
    highlights: [
      "Boat trip to the stunning Orange Bay",
      "Snorkeling in pristine coral reefs",
      "Relax on a beautiful white sand beach",
      "Crystal-clear turquoise waters",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Boat trip", "Snorkeling equipment", "Hotel pickup and drop-off"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Orange Bay — White Sand, Coral Gardens & Red Sea Blue",
          description:
            "Orange Bay is one of those rare places where the Red Sea lives up to every photograph — the water genuinely is that colour, the coral genuinely is that healthy, and the beach genuinely is that white. Located south of Hurghada inside a protected marine park, it has largely been spared the anchor damage and overcrowding that have affected reefs closer to the resort strip. The boat journey south takes about an hour and is itself a pleasure — the open Red Sea, Hurghada fading behind you, and the colour of the water beginning to change as the depth drops away beneath the hull.",
          steps: [
            { time: "08:30", description: "Hotel pickup. Transfer to Hurghada Marina." },
            { time: "09:00", description: "Board the boat. Safety and snorkeling orientation from the crew. Equipment distributed." },
            { time: "09:15", description: "Depart the marina. Sail south along the coast toward Orange Bay — approximately 1 hour." },
            { time: "10:15", description: "Arrive at Orange Bay. Drop anchor. Crew briefs on reef rules — no touching coral, no feeding fish, reef-safe sunscreen only." },
            { time: "10:30", description: "First snorkeling session. Explore the coral reef — parrotfish, angelfish, clownfish, moray eels, and sea turtles are commonly spotted." },
            { time: "12:00", description: "Return to boat or beach. Lunch break — bring your own food or purchase snacks onboard. Relax on the beach or deck." },
            { time: "13:30", description: "Second snorkeling session or free beach time." },
            { time: "15:30", description: "Board the boat for the return sail to Hurghada." },
            { time: "16:30", description: "Arrive at Hurghada Marina. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "خليج أورانج — رمال بيضاء وحدائق مرجانية وأزرق البحر الأحمر",
          description:
            "خليج أورانج أحد تلك الأماكن النادرة التي يرقى فيها البحر الأحمر إلى مستوى كل صورة رأيتها عنه. يقع جنوب الغردقة داخل منتزه بحري محمي، وقد نجا إلى حد بعيد من أضرار المرساة والاكتظاظ. رحلة القارب جنوباً تستغرق نحو ساعة وهي بحد ذاتها متعة.",
          steps: [
            { time: "08:30", description: "الاستقبال من الفندق. الانتقال إلى مرسى الغردقة." },
            { time: "09:00", description: "الصعود إلى القارب. إحاطة السلامة والغطس من الطاقم. توزيع المعدات." },
            { time: "09:15", description: "المغادرة من المرسى. الإبحار جنوباً نحو خليج أورانج — نحو ساعة." },
            { time: "10:15", description: "الوصول إلى خليج أورانج. إرساء المرساة. الطاقم يعرّف بقواعد الشعاب." },
            { time: "10:30", description: "جلسة الغطس الأولى. استكشاف الشعاب المرجانية — أسماك الببغاء والملاك وكلوڤر وثعابين البحر والسلاحف تُرصد بشكل شائع." },
            { time: "12:00", description: "العودة إلى القارب أو الشاطئ. استراحة الغداء. الاسترخاء على الشاطئ أو السطح." },
            { time: "13:30", description: "جلسة الغطس الثانية أو وقت حر على الشاطئ." },
            { time: "15:30", description: "الصعود إلى القارب للإبحار العائد إلى الغردقة." },
            { time: "16:30", description: "الوصول إلى مرسى الغردقة. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 6 ───────────────────────────────────────────────────────────────
  {
    title: "Transfers in Hurghada",
    titleAr: "خدمة التوصيل في الغردقة",
    slug: "transfers-hurghada",
    description:
      "Start and end your Hurghada experience with total peace of mind using our reliable private transfer service. Whether you need a smooth airport pickup, a hotel transfer, or a ride to any address in the city, a professional chauffeur will be waiting for you with a clean, air-conditioned vehicle.",
    descriptionAr:
      "ابدأ تجربتك في الغردقة وأنهِها براحة بال تامة باستخدام خدمة النقل الخاصة الموثوقة لدينا. سواء كنت تحتاج إلى استقبال سلس من المطار أو نقل فندقي أو توصيلة إلى أي عنوان في المدينة، سيكون سائق محترف في انتظارك بسيارة نظيفة ومكيفة.",
    category: "Transfers",
    price: { original: 9.45, discounted: null, currency: "USD" },
    duration: "Varies",
    language: ["English"],
    rating: { score: 8.3, reviews: 76 },
    travellers: 2608,
    freeCancellation: true,
    minAge: 0,
    maxGroupSize: 6,
    availableTimes: ["Available 24/7"],
    meetingPoint: {
      en: "Hurghada International Airport arrivals hall, or your hotel lobby — whichever you specify at booking.",
      ar: "صالة الوصول في مطار الغردقة الدولي، أو بهو فندقك — أيهما تحدده عند الحجز.",
    },
    accessibility: {
      en: "Air-conditioned private cars or minivans available. Please inform us in advance if you require a wheelchair-accessible vehicle.",
      ar: "سيارات خاصة أو ميني فان بتكييف هواء متوفرة. يرجى إخبارنا مسبقاً إذا كنت تحتاج إلى مركبة مخصصة لكراسي الحركة.",
    },
    whatToBring: {
      en: ["Your booking confirmation", "Flight details for timing", "Driver's contact number"],
      ar: ["تأكيد حجزك", "تفاصيل الرحلة الجوية للتوقيت", "رقم تواصل مع السائق"],
    },
    importantInfo: {
      en: [
        "Transfers are private — you will not share the vehicle with other passengers.",
        "The driver will hold a sign with your name at the airport arrivals hall.",
        "Please provide your flight details at booking to ensure punctual pickup.",
        "Waiting time at the airport is up to 60 minutes after the scheduled landing time.",
      ],
      ar: [
        "خدمة التوصيل خاصة — لن تشارك المركبة مع ركاب آخرين.",
        "سيحمل السائق لافتة باسمك في صالة الوصول بالمطار.",
        "يرجى تقديم تفاصيل رحلتك وقت الحجز لضمان الاستقبال في الوقت المناسب.",
        "وقت الانتظار في المطار يصل إلى 60 دقيقة بعد وقت الهبوط المجدول.",
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

  // ─── TOUR 7 ───────────────────────────────────────────────────────────────
  {
    title: "Desert Safari & Bedouin Dinner",
    titleAr: "سفاري الصحراء وعشاء البدو",
    slug: "desert-safari-bedouin-dinner-hurghada",
    description:
      "Venture deep into the rugged Egyptian desert on this thrilling off-road safari before settling in for a magical Bedouin evening under the stars. Climb aboard a powerful 4x4 vehicle and race across the golden dunes and rocky desert terrain surrounding Hurghada, stopping at a traditional Bedouin village to learn about the ancient nomadic way of life. As the sun sets, enjoy a camel ride and then gather around a fire for a delicious traditional Bedouin dinner with local music and hospitality.",
    descriptionAr:
      "توجه عميقاً في الصحراء المصرية الوعرة في هذه السفاري المثيرة على الطرق الوعرة قبل الاستقرار لسهرة بدوية سحرية تحت النجوم. اصعد إلى سيارة دفع رباعي قوية وتسابق عبر الكثبان الذهبية والتضاريس الصخرية المحيطة بالغردقة.",
    category: "Day trip",
    price: { original: 53.19, discounted: 42.55, currency: "USD" },
    duration: "6-7 hours",
    language: ["English"],
    rating: { score: 6.7, reviews: 50 },
    travellers: 688,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 20,
    availableTimes: ["15:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Pickup timed for the afternoon to enjoy the desert at its golden best.",
      ar: "بهو فندقك في الغردقة. الاستقبال مُوقَّت لبعد الظهر للاستمتاع بالصحراء في أجمل أوقاتها.",
    },
    accessibility: {
      en: "The 4x4 desert ride is bumpy — not suitable for guests with back problems or pregnancy. The Bedouin village is flat and accessible. The camel ride is optional.",
      ar: "رحلة الدفع الرباعي وعرة وغير مناسبة لمن يعانون من مشاكل في الظهر أو الحوامل. القرية البدوية مستوية. ركوب الجمل اختياري.",
    },
    whatToBring: {
      en: ["Light comfortable clothing", "Warm layer for the evening", "Closed-toe shoes", "Camera", "Sun protection for the afternoon departure"],
      ar: ["ملابس خفيفة ومريحة", "طبقة دافئة للمساء", "حذاء مغلق الأصابع", "كاميرا", "واقٍ من الشمس للمغادرة بعد الظهر"],
    },
    importantInfo: {
      en: [
        "The tour departs in the afternoon to take advantage of the golden desert light and cool evening temperatures.",
        "The Bedouin dinner is vegetarian-friendly — inform the operator of any dietary requirements at booking.",
        "Alcoholic drinks are not served.",
        "Guests with serious back conditions can skip the 4x4 ride and join the group at the Bedouin village.",
      ],
      ar: [
        "الجولة تغادر بعد الظهر للاستفادة من الضوء الذهبي ودرجات الحرارة المسائية المعتدلة.",
        "عشاء البدو يناسب النباتيين؛ أخبر المشغّل بأي متطلبات غذائية وقت الحجز.",
        "المشروبات الكحولية لا تُقدَّم.",
        "من يعانون من حالات خطيرة في الظهر يستطيعون الانضمام للمجموعة في القرية البدوية مباشرةً.",
      ],
    },
    highlights: [
      "Off-road 4x4 desert safari through the dunes",
      "Visit a traditional Bedouin village",
      "Camel ride through the desert",
      "Traditional Bedouin dinner under the stars",
      "Live music and local hospitality",
      "Hotel pickup and drop-off included",
    ],
    includes: ["4x4 vehicle", "Guide", "Camel ride", "Bedouin dinner", "Hotel pickup and drop-off"],
    excludes: ["Tips", "Personal expenses", "Alcoholic drinks"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Dunes, Camels & Stars — A Bedouin Evening in the Desert",
          description:
            "This evening tour is timed deliberately for the afternoon and evening rather than the hot middle of the day. It begins with a 4x4 desert drive of dune crossings and rocky terrain, before reaching a traditional Bedouin camp where tea is waiting, camels are ready, and a family still maintains many of the old ways. As the stars come out — this far from city lights the sky over the desert is extraordinary — a traditional feast is laid out on carpets around the fire with music and warm hospitality.",
          steps: [
            { time: "15:00", description: "Hotel pickup. Drive to the desert departure point east of Hurghada." },
            { time: "15:30", description: "Board the 4x4 vehicles. Begin the off-road desert drive — dune crossings, rocky trails, and open desert plains in golden afternoon light." },
            { time: "16:30", description: "Arrive at the Bedouin village. Met by your hosts with traditional mint tea. Guide introduces the village and its inhabitants." },
            { time: "16:45", description: "Camel ride through the village and surrounding desert — approximately 20-30 minutes." },
            { time: "17:30", description: "Watch the desert sunset from the camp — the rocky hills turn amber and the sky shifts through orange and pink to deep violet." },
            { time: "18:00", description: "Bedouin dinner served around the fire on traditional carpets — bread baked in the embers, grilled meats, salads, dips, rice. Traditional music throughout." },
            { time: "19:30", description: "After dinner stargazing. Guide points out constellations used by Bedouin navigators. Tea and shisha available." },
            { time: "20:30", description: "Return to the vehicles. Transfer back to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "الكثبان والجمال والنجوم — سهرة بدوية في الصحراء",
          description:
            "هذه الجولة المسائية مُوقَّتة عمداً للعصر والمساء بدلاً من منتصف النهار الحار. تبدأ برحلة دفع رباعي صحراوية ثم تصل إلى معسكر بدوي حيث الشاي والجمال وعائلة لا تزال تحافظ على كثير من العادات القديمة. مع ظهور النجوم تُفرش وليمة تقليدية على السجاد حول النار مع الموسيقى والضيافة الدافئة.",
          steps: [
            { time: "15:00", description: "الاستقبال من الفندق. القيادة إلى نقطة انطلاق الصحراء شرق الغردقة." },
            { time: "15:30", description: "الصعود إلى مركبات الدفع الرباعي. بدء القيادة الصحراوية — عبور الكثبان والمسالك الصخرية في الضوء الذهبي لبعد الظهر." },
            { time: "16:30", description: "الوصول إلى القرية البدوية. الاستقبال بالشاي بالنعناع التقليدي. المرشد يعرّف بالقرية وسكانها." },
            { time: "16:45", description: "ركوب الجمال عبر القرية والصحراء — نحو 20-30 دقيقة." },
            { time: "17:30", description: "مشاهدة غروب الصحراء من المعسكر — التلال تتحول عنبراً والسماء تتحول إلى البنفسجي العميق." },
            { time: "18:00", description: "عشاء البدو حول النار — خبز ولحوم مشوية وسلطات وصلصات وأرز. موسيقى تقليدية طوال الوقت." },
            { time: "19:30", description: "بعد العشاء رصد النجوم. شاي وشيشة متوفران." },
            { time: "20:30", description: "العودة إلى السيارات. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 8 ───────────────────────────────────────────────────────────────
  {
    title: "Orange Bay Speedboat Trip",
    titleAr: "رحلة قارب السرعة إلى خليج أورانج",
    slug: "orange-bay-speedboat-trip-hurghada",
    description:
      "Feel the rush of the Red Sea wind on your face as you speed across the water on this exciting speedboat trip to Orange Bay. Race south along the coastline before arriving at one of the most beautiful beach destinations in Egypt, where pristine white sands and crystal-clear waters await. Spend time swimming, sunbathing, and exploring the colorful coral reefs by snorkel.",
    descriptionAr:
      "اشعر بهبوب رياح البحر الأحمر على وجهك وأنت تتسابق عبر الماء في هذه الرحلة المثيرة بقارب السرعة إلى خليج أورانج. اندفع جنوباً على طول الساحل قبل الوصول إلى واحدة من أجمل وجهات الشواطئ في مصر.",
    category: "Day trip",
    price: { original: 88.65, discounted: 75.35, currency: "USD" },
    duration: "5 hours",
    language: ["English"],
    rating: { score: 9.0, reviews: 2 },
    travellers: 54,
    freeCancellation: true,
    minAge: 8,
    maxGroupSize: 12,
    availableTimes: ["09:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Transfer to the marina is included.",
      ar: "بهو فندقك في الغردقة. الانتقال إلى المرسى مشمول.",
    },
    accessibility: {
      en: "Speedboat rides are fast and bumpy — not suitable for guests with back problems, heart conditions, or pregnancy. Guests must be comfortable in water for snorkeling.",
      ar: "رحلات قارب السرعة سريعة ومتقطعة — غير مناسبة لمن يعانون من مشاكل في الظهر أو القلب أو الحوامل.",
    },
    whatToBring: {
      en: ["Swimwear", "Towel", "Reef-safe sunscreen", "Sunglasses (essential at speed)", "Light change of clothes", "Waterproof bag for valuables"],
      ar: ["ملابس سباحة", "منشفة", "كريم واقٍ صديق للشعاب", "نظارة شمسية (ضرورية عند السرعة)", "ملابس خفيفة للتبديل", "حقيبة مقاومة للماء للمقتنيات الثمينة"],
    },
    importantInfo: {
      en: [
        "Snorkeling equipment is provided onboard.",
        "Meals are not included — the trip is approximately 5 hours in total.",
        "Life jackets are mandatory during the speedboat journey.",
        "Confirm at booking whether the speedboat is private or shared with a small group.",
      ],
      ar: [
        "معدات الغطس مقدَّمة على متن القارب.",
        "الوجبات غير مشمولة — الرحلة تستغرق نحو 5 ساعات إجمالاً.",
        "سترات النجاة إلزامية أثناء رحلة قارب السرعة.",
        "تأكد وقت الحجز إذا كان قارب السرعة خاصاً أو مشتركاً مع مجموعة صغيرة.",
      ],
    },
    highlights: [
      "Thrilling speedboat ride to Orange Bay",
      "Swim and snorkel in crystal-clear Red Sea waters",
      "Relax on a beautiful pristine beach",
      "Explore colorful coral reefs",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Speedboat trip", "Snorkeling equipment", "Hotel pickup and drop-off"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Full Speed to Orange Bay",
          description:
            "The speedboat version of the Orange Bay trip trades the leisurely pace of a traditional boat for something altogether more exhilarating. The journey south — which takes about an hour on a regular boat — takes less than 20 minutes by speedboat, cutting across the chop of the open Red Sea with spray flying and the coastline blurring past. At Orange Bay, the day unfolds at a gentler pace — snorkeling, swimming, beach time, and the kind of Red Sea silence that the speedboat ride makes you appreciate all the more.",
          steps: [
            { time: "09:00", description: "Hotel pickup. Transfer to Hurghada Marina." },
            { time: "09:30", description: "Board the speedboat. Safety briefing from the captain — life jackets fitted. Snorkeling equipment distributed." },
            { time: "09:45", description: "Depart at speed south along the coastline. The journey to Orange Bay takes approximately 15-20 minutes." },
            { time: "10:00", description: "Arrive at Orange Bay. Drop anchor. Captain briefs on reef rules and safe snorkeling zones." },
            { time: "10:15", description: "Snorkeling session — enter the water and explore the coral reef." },
            { time: "11:30", description: "Beach time — swim, sunbathe on the white sand, or float in the clear water." },
            { time: "12:30", description: "Second snorkeling session or continued beach relaxation." },
            { time: "13:30", description: "Board the speedboat for the return journey to Hurghada." },
            { time: "13:50", description: "Arrive at Hurghada Marina. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "بأقصى سرعة إلى خليج أورانج",
          description:
            "نسخة قارب السرعة من رحلة خليج أورانج تستبدل الوتيرة الهادئة بشيء أكثر إثارةً. الرحلة جنوباً تستغرق أقل من 20 دقيقة بدلاً من ساعة. في خليج أورانج اليوم يتكشّف بوتيرة أهدأ — غطس وسباحة ووقت على الشاطئ.",
          steps: [
            { time: "09:00", description: "الاستقبال من الفندق. الانتقال إلى مرسى الغردقة." },
            { time: "09:30", description: "الصعود إلى قارب السرعة. إحاطة السلامة من الربان. توزيع معدات الغطس." },
            { time: "09:45", description: "الانطلاق بسرعة جنوباً على طول الساحل. الرحلة تستغرق نحو 15-20 دقيقة." },
            { time: "10:00", description: "الوصول إلى خليج أورانج. إرساء المرساة. الربان يعرّف بقواعد الشعاب." },
            { time: "10:15", description: "جلسة الغطس — الدخول إلى الماء واستكشاف الشعاب المرجانية." },
            { time: "11:30", description: "وقت الشاطئ — السباحة أو الاستلقاء على الرمال البيضاء." },
            { time: "12:30", description: "جلسة الغطس الثانية أو الاسترخاء المستمر على الشاطئ." },
            { time: "13:30", description: "الصعود إلى قارب السرعة للرحلة العائدة." },
            { time: "13:50", description: "الوصول إلى مرسى الغردقة. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 9 ───────────────────────────────────────────────────────────────
  {
    title: "Hurghada Grand Aquarium Trip",
    titleAr: "زيارة أكواريوم الغردقة الكبير",
    slug: "hurghada-grand-aquarium-trip",
    description:
      "Dive into the wonders of the Red Sea without getting wet at the Hurghada Grand Aquarium — the Red Sea in Glass. This world-class aquarium houses over 1,100 marine species native to the Red Sea, including sea turtles, sharks, manta rays, and hundreds of colorful reef fish. Walk through immersive underwater tunnels, watch feeding sessions, and discover the rich biodiversity of Egypt's most treasured sea.",
    descriptionAr:
      "انغمس في عجائب البحر الأحمر دون أن تبتل في أكواريوم الغردقة الكبير — البحر الأحمر في الزجاج. يضم هذا الأكواريوم العالمي أكثر من 1100 نوع بحري أصيل في البحر الأحمر، بما في ذلك السلاحف البحرية والقروش والراي والمئات من أنواع أسماك الشعاب الملونة.",
    category: "Entrance tickets",
    price: { original: 47.28, discounted: null, currency: "USD" },
    duration: "9 hours",
    language: ["English"],
    rating: { score: 0, reviews: 0 },
    travellers: 43,
    freeCancellation: true,
    minAge: 0,
    maxGroupSize: null,
    availableTimes: ["09:00", "10:00", "11:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Transfer to the aquarium is included.",
      ar: "بهو فندقك في الغردقة. الانتقال إلى الأكواريوم مشمول.",
    },
    accessibility: {
      en: "The aquarium is largely wheelchair accessible with ramps throughout. The underwater tunnels are fully flat. Suitable for all ages and abilities.",
      ar: "الأكواريوم في معظمه مناسب للكراسي المتحركة مع منحدرات في جميع أنحائه. الأنفاق مسطحة تماماً. مناسب لجميع الأعمار.",
    },
    whatToBring: {
      en: ["Camera (no flash near sensitive species)", "Light clothing", "Water bottle"],
      ar: ["كاميرا (ممنوع الفلاش بالقرب من الأنواع الحساسة)", "ملابس خفيفة", "زجاجة ماء"],
    },
    importantInfo: {
      en: [
        "Aquarium entrance is included in the tour price.",
        "The aquarium is fully air-conditioned — a welcome respite from the Hurghada heat.",
        "Feeding sessions for sharks and rays take place at scheduled times — ask staff on arrival.",
        "The aquarium includes a café for refreshments.",
      ],
      ar: [
        "رسم دخول الأكواريوم مشمول في سعر الجولة.",
        "الأكواريوم مكيّف بالكامل — راحة مرحَّب بها من حرارة الغردقة.",
        "جلسات إطعام القروش والراي في أوقات محددة — اسأل الموظفين عند الوصول.",
        "يضم الأكواريوم مقهى للمرطبات.",
      ],
    },
    highlights: [
      "Explore the Hurghada Grand Aquarium (Red Sea in Glass)",
      "See sharks, sea turtles, and manta rays",
      "Walk through immersive underwater tunnels",
      "Hundreds of Red Sea marine species on display",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Aquarium entrance", "Hotel pickup and drop-off"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "The Red Sea in Glass — Hurghada Grand Aquarium",
          description:
            "For those who can't dive or snorkel — or simply want to see the Red Sea's marine life up close without the water — the Hurghada Grand Aquarium houses over 1,100 marine species across dozens of tanks. The centrepiece is the underwater tunnel: a long transparent walkway where you stroll through while sharks, rays, sea turtles, and large fish cruise overhead and on both sides. The facility is fully air-conditioned and spacious — a particularly welcome option on the hottest days.",
          steps: [
            { time: "09:00", description: "Hotel pickup. Transfer to the Hurghada Grand Aquarium." },
            { time: "09:30", description: "Arrive at the aquarium. Collect tickets and enter. Begin with the entrance hall overview of the Red Sea species collection." },
            { time: "09:45", description: "Explore the main display halls — coral reef displays, open water pelagic fish section, and specialist tanks featuring lionfish, seahorses, moray eels, octopus, and jellyfish." },
            { time: "11:00", description: "Enter the underwater tunnel. Walk slowly through the transparent passageway as sharks, manta rays, sea turtles, and large reef fish move around and above you." },
            { time: "11:30", description: "Shark and ray feeding session (schedule-dependent — confirm with staff on arrival)." },
            { time: "12:00", description: "Continue exploring remaining displays and the touch pool (if available) where children can handle starfish and sea urchins under supervision." },
            { time: "13:00", description: "Visit the aquarium gift shop. Optional refreshments at the café." },
            { time: "13:30", description: "Transfer back to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "البحر الأحمر في الزجاج — أكواريوم الغردقة الكبير",
          description:
            "لمن لا يستطيع الغوص أو الغطس، يضم الأكواريوم أكثر من 1100 نوع بحري في عشرات الخزانات. تاج المجمع هو النفق تحت الماء — ممر شفاف طويل تمشي فيه بينما تتجول القروش والراي والسلاحف والأسماك الكبيرة فوقك ومن الجانبين. الأكواريوم مكيّف بالكامل وفسيح — خيار مثالي في أشد أيام الصيف حراً.",
          steps: [
            { time: "09:00", description: "الاستقبال من الفندق. الانتقال إلى أكواريوم الغردقة الكبير." },
            { time: "09:30", description: "الوصول. استلام التذاكر والدخول. البدء بنظرة عامة على قاعة المدخل." },
            { time: "09:45", description: "استكشاف قاعات العرض الرئيسية — معارض الشعاب المرجانية وقسم أسماك المياه المفتوحة والخزانات المتخصصة." },
            { time: "11:00", description: "الدخول إلى النفق تحت الماء. المشي ببطء بينما تتحرك القروش والراي والسلاحف والأسماك الكبيرة فوقك ومن الجانبين." },
            { time: "11:30", description: "جلسة إطعام القروش والراي (تعتمد على الجدول — تأكد مع الموظفين)." },
            { time: "12:00", description: "الاستمرار في استكشاف المعارض المتبقية وبركة اللمس (إن توفرت)." },
            { time: "13:00", description: "زيارة محل الهدايا. مرطبات اختيارية في المقهى." },
            { time: "13:30", description: "الانتقال العائد إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 10 ──────────────────────────────────────────────────────────────
  {
    title: "Swim with Dolphins in Hurghada",
    titleAr: "السباحة مع الدلافين في الغردقة",
    slug: "swim-with-dolphins-hurghada",
    description:
      "Create memories that will last a lifetime on this magical boat trip where you'll swim alongside friendly dolphins in the warm waters of the Red Sea. Head out from Hurghada to Dolphin House, a famous snorkeling site known for its resident pod of wild spinner dolphins. The adventure continues with a banana boat ride and more time to snorkel over the vibrant coral reef.",
    descriptionAr:
      "اصنع ذكريات ستدوم مدى الحياة في هذه الرحلة البحرية السحرية حيث ستسبح جانباً لجانب مع الدلافين الودودة في المياه الدافئة للبحر الأحمر. اتجه من الغردقة إلى بيت الدولفين الشهير بقطيعه المقيم من دلافين سبينر البرية.",
    category: "Adventure and nature",
    price: { original: 53.19, discounted: 42.55, currency: "USD" },
    duration: "8 hours",
    language: ["English"],
    rating: { score: 7.6, reviews: 27 },
    travellers: 454,
    freeCancellation: true,
    minAge: 8,
    maxGroupSize: 20,
    availableTimes: ["08:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Transfer to the marina is included.",
      ar: "بهو فندقك في الغردقة. الانتقال إلى المرسى مشمول.",
    },
    accessibility: {
      en: "Guests must be comfortable swimming in open water. Life jackets available. Minimum age is 8 years.",
      ar: "يجب أن يكون الضيوف مرتاحين للسباحة في المياه المفتوحة. سترات النجاة متوفرة. الحد الأدنى للعمر 8 سنوات.",
    },
    whatToBring: {
      en: ["Swimwear", "Towel", "Reef-safe sunscreen", "Change of clothes", "Waterproof camera if possible"],
      ar: ["ملابس سباحة", "منشفة", "كريم واقٍ صديق للشعاب", "ملابس للتبديل", "كاميرا مقاومة للماء إن أمكن"],
    },
    importantInfo: {
      en: [
        "Dolphin sightings are not guaranteed — dolphins are wild animals in their natural habitat.",
        "In practice, the spinner dolphin pod at Dolphin House is present on the vast majority of visits.",
        "Guests must not chase, touch, or feed the dolphins.",
        "Snorkeling equipment and banana boat ride are included.",
        "Light refreshments are provided onboard.",
      ],
      ar: [
        "رؤية الدلافين غير مضمونة — الدلافين حيوانات برية في موطنها الطبيعي.",
        "عملياً، قطيع دلافين سبينر في بيت الدولفين موجود في الغالبية العظمى من الزيارات.",
        "يجب على الضيوف عدم مطاردة الدلافين أو لمسها أو إطعامها.",
        "معدات الغطس وركوبة القارب الموزي مشمولتان.",
        "مرطبات خفيفة تُقدَّم على متن القارب.",
      ],
    },
    highlights: [
      "Swim with wild spinner dolphins at Dolphin House",
      "Snorkel over vibrant coral reefs",
      "Banana boat ride included",
      "Experience dolphins in their natural habitat",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Boat trip", "Snorkeling equipment", "Banana boat ride", "Hotel pickup and drop-off", "Light refreshments"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Dolphin House — Swimming with Wild Spinner Dolphins",
          description:
            "Dolphin House — known locally as Sha'ab El Erg — is a shallow reef site north of Hurghada famous for a resident pod of wild spinner dolphins that has become remarkably comfortable around human swimmers. Unlike dolphin shows or aquarium encounters, these are entirely wild animals in their natural habitat. On most days the dolphins are here, approaching from deeper water and typically circling swimmers, spinning in their characteristic acrobatic twists. It is genuinely one of the most moving wildlife encounters available in Egypt.",
          steps: [
            { time: "08:00", description: "Hotel pickup. Transfer to Hurghada Marina." },
            { time: "08:30", description: "Board the boat. Safety briefing, snorkeling equipment distributed. Guide explains how to behave respectfully around wild dolphins." },
            { time: "09:00", description: "Depart north toward Sha'ab El Erg (Dolphin House) — approximately 45 minutes by boat." },
            { time: "09:45", description: "Arrive at Dolphin House. When the pod is spotted, guests enter the water quietly and without splashing." },
            { time: "10:00", description: "Swimming alongside the dolphins. Guide leads the group slowly alongside the pod. Dolphins typically circle for 20-40 minutes." },
            { time: "10:45", description: "Snorkeling session over the Dolphin House reef — healthy coral and tropical fish." },
            { time: "12:00", description: "Banana boat ride — groups of 4-6 pulled across the water for 15-20 minutes of fun." },
            { time: "12:30", description: "Second snorkeling session or relaxation on the boat deck. Light refreshments served." },
            { time: "14:00", description: "Depart Dolphin House for the return journey to Hurghada." },
            { time: "15:00", description: "Arrive at Hurghada Marina. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "بيت الدولفين — السباحة مع دلافين سبينر البرية",
          description:
            "بيت الدولفين — المعروف محلياً بشعب الإرق — موقع شعاب ضحلة شمال الغردقة مشهور لقطيع مقيم من دلافين سبينر البرية أصبح مرتاحاً للغاية مع السباحين البشر. على عكس عروض الدلافين، هذه حيوانات برية تماماً في موطنها الطبيعي. في معظم الأيام الدلافين هنا، تقترب من المياه الأعمق وتحيط بالسباحين وتدور في تحولاتها الأكروباتية المميزة.",
          steps: [
            { time: "08:00", description: "الاستقبال من الفندق. الانتقال إلى مرسى الغردقة." },
            { time: "08:30", description: "الصعود إلى القارب. إحاطة السلامة وتوزيع معدات الغطس. المرشد يشرح كيفية التصرف باحترام مع الدلافين البرية." },
            { time: "09:00", description: "المغادرة شمالاً نحو شعب الإرق (بيت الدولفين) — نحو 45 دقيقة بالقارب." },
            { time: "09:45", description: "الوصول إلى بيت الدولفين. عند رصد القطيع يدخل الضيوف الماء بهدوء ودون رش." },
            { time: "10:00", description: "السباحة بجانب الدلافين. المرشد يقود المجموعة بطريقة بطيئة وغير مهددة. الدلافين عادةً تحيط بالسباحين لـ 20-40 دقيقة." },
            { time: "10:45", description: "جلسة الغطس على شعاب بيت الدولفين — شعاب صحية وأسماك استوائية." },
            { time: "12:00", description: "ركوبة القارب الموزي — مجموعات من 4-6 لنحو 15-20 دقيقة من المتعة." },
            { time: "12:30", description: "جلسة الغطس الثانية أو الاسترخاء على سطح القارب. تُقدَّم مرطبات خفيفة." },
            { time: "14:00", description: "المغادرة من بيت الدولفين للرحلة العائدة إلى الغردقة." },
            { time: "15:00", description: "الوصول إلى مرسى الغردقة. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 11 ──────────────────────────────────────────────────────────────
  {
    title: "Day Trip to the Pyramids of Giza + Egyptian Museum",
    titleAr: "رحلة يوم إلى أهرامات الجيزة والمتحف المصري",
    slug: "day-trip-pyramids-giza-egyptian-museum-hurghada",
    description:
      "No visit to Egypt is complete without seeing the Pyramids of Giza, and this exciting day trip by plane from Hurghada makes it possible in just one day. Fly to Cairo and spend the day exploring the iconic Pyramids of Giza and the Great Sphinx, followed by a visit to the Grand Egyptian Museum — home to the world's largest collection of ancient Egyptian artifacts including the complete treasures of Tutankhamun.",
    descriptionAr:
      "لا تكتمل زيارة مصر دون رؤية أهرامات الجيزة، وهذه الرحلة اليومية المثيرة بالطائرة من الغردقة تجعل ذلك ممكناً في يوم واحد. اطر إلى القاهرة وأمضِ اليوم في استكشاف أهرامات الجيزة الأيقونية وأبو الهول الكبير والمتحف المصري الكبير.",
    category: "Day trip",
    price: { original: 410.15, discounted: null, currency: "USD" },
    duration: "15 hours",
    language: ["English"],
    rating: { score: 8.0, reviews: 5 },
    travellers: 32,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 12,
    availableTimes: ["05:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada for transfer to Hurghada Airport.",
      ar: "بهو فندقك في الغردقة للانتقال إلى مطار الغردقة.",
    },
    accessibility: {
      en: "The Giza Plateau involves walking on sand and uneven ground. The Grand Egyptian Museum is largely accessible. The flight adds significant comfort over the overland bus alternative.",
      ar: "تتضمن هضبة الجيزة المشي على الرمال. المتحف المصري الكبير في معظمه يمكن الوصول إليه. الرحلة الجوية أكثر راحة بكثير من الأتوبيس البري.",
    },
    whatToBring: {
      en: ["Passport or national ID (required for the flight)", "Comfortable walking shoes", "Sun protection", "Camera", "Light jacket for the Cairo return flight"],
      ar: ["جواز سفر أو بطاقة هوية وطنية (مطلوبة للرحلة)", "حذاء مريح للمشي", "واقٍ من الشمس", "كاميرا", "جاكيت خفيف لرحلة العودة من القاهرة"],
    },
    importantInfo: {
      en: [
        "A valid passport or national ID is required for the domestic flight.",
        "Round-trip flights from Hurghada to Cairo are included.",
        "Lunch is included at a restaurant near the Giza Plateau.",
        "Entry inside the Great Pyramid carries an additional fee not included in the tour.",
      ],
      ar: [
        "جواز سفر ساري أو بطاقة هوية وطنية مطلوبة للرحلة الداخلية.",
        "رحلات ذهاب وإياب من الغردقة إلى القاهرة مشمولة.",
        "الغداء مشمول في مطعم بالقرب من هضبة الجيزة.",
        "الدخول داخل الهرم الأكبر يستلزم رسماً إضافياً غير مشمول.",
      ],
    },
    highlights: [
      "Round-trip flight from Hurghada to Cairo",
      "Visit the iconic Pyramids of Giza and the Great Sphinx",
      "Explore the Grand Egyptian Museum",
      "See Tutankhamun's golden treasures",
      "Expert guide throughout the day",
    ],
    includes: ["Round-trip flight", "Guide", "Entrance fees", "Lunch", "Hotel pickup and drop-off"],
    excludes: ["Entry inside the Great Pyramid (extra fee)", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Hurghada to the Pyramids — Egypt's Greatest Icons by Air",
          description:
            "Flying to Cairo from Hurghada takes less than an hour — which means this day trip gives you a full and unhurried day at the Giza Plateau and the Grand Egyptian Museum rather than spending four or five hours each way on the road. By mid-morning you are standing in front of the Great Pyramid of Khufu, the last surviving Wonder of the Ancient World. The afternoon moves to the Grand Egyptian Museum, where the complete treasures of Tutankhamun — over 5,000 objects — are displayed together for the first time in human history.",
          steps: [
            { time: "05:00", description: "Hotel pickup. Transfer to Hurghada International Airport." },
            { time: "06:00", description: "Check in and board the early morning domestic flight to Cairo." },
            { time: "07:00", description: "Arrive at Cairo Airport. Met by your guide and transferred to the Giza Plateau." },
            { time: "08:00", description: "Arrive at Giza. Guided tour of the Pyramid of Khufu — perimeter walk, construction explanation, and the original entrance passage." },
            { time: "09:00", description: "Visit the Pyramid of Khafre and the Pyramid of Menkaure. Walk to the Great Sphinx and the Valley Temple." },
            { time: "10:30", description: "Panoramic viewpoint stop — all three pyramids visible in a single frame." },
            { time: "11:30", description: "Transfer to the Grand Egyptian Museum." },
            { time: "12:00", description: "Lunch included at the museum restaurant." },
            { time: "13:00", description: "Guided tour of the Grand Egyptian Museum — the Grand Staircase Hall of royal colossi, the complete Tutankhamun galleries, and the Royal Mummies Hall." },
            { time: "16:00", description: "Transfer to Cairo Airport." },
            { time: "17:30", description: "Board the return flight to Hurghada." },
            { time: "18:30", description: "Arrive at Hurghada Airport. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "من الغردقة إلى الأهرامات — أيقونات مصر الكبرى بالجو",
          description:
            "الطيران إلى القاهرة من الغردقة يستغرق أقل من ساعة — مما يعني أن هذه الرحلة تمنحك يوماً كاملاً وغير مستعجل في هضبة الجيزة والمتحف المصري الكبير. بحلول منتصف الصباح أنت تقف أمام هرم خوفو الأكبر، آخر عجائب الدنيا السبع الباقية. بعد الظهر ينتقل إلى المتحف المصري الكبير حيث تُعرض كنوز توتنخامون الكاملة للمرة الأولى في تاريخ البشرية.",
          steps: [
            { time: "05:00", description: "الاستقبال من الفندق. الانتقال إلى مطار الغردقة الدولي." },
            { time: "06:00", description: "تسجيل الوصول والصعود إلى الرحلة الداخلية الصباحية المبكرة إلى القاهرة." },
            { time: "07:00", description: "الوصول إلى مطار القاهرة. استقبال من مرشدك والانتقال إلى هضبة الجيزة." },
            { time: "08:00", description: "الوصول إلى الجيزة. جولة مصحوبة بمرشد في هرم خوفو." },
            { time: "09:00", description: "زيارة هرم خفرع وهرم منقرع. المشية إلى أبو الهول الكبير ومعبد الوادي." },
            { time: "10:30", description: "توقف نقطة المشاهدة البانورامية — الأهرامات الثلاثة في إطار واحد." },
            { time: "11:30", description: "الانتقال إلى المتحف المصري الكبير." },
            { time: "12:00", description: "الغداء مشمول في مطعم المتحف." },
            { time: "13:00", description: "جولة مصحوبة بمرشد في المتحف المصري الكبير — معارض توتنخامون الكاملة وقاعة المومياوات الملكية." },
            { time: "16:00", description: "الانتقال إلى مطار القاهرة." },
            { time: "17:30", description: "الصعود إلى رحلة العودة إلى الغردقة." },
            { time: "18:30", description: "الوصول إلى مطار الغردقة. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 12 ──────────────────────────────────────────────────────────────
  {
    title: "Fly Board in Hurghada",
    titleAr: "الفلايبورد في الغردقة",
    slug: "flyboard-hurghada",
    description:
      "Defy gravity and soar above the Red Sea on an electrifying flyboarding session in Hurghada. Powered by water jets attached to your feet, you'll rise up from the surface of the sea and hover in the air like a superhero, with breathtaking views of the Red Sea and the Hurghada coastline stretching out around you. An experienced instructor will guide you throughout the session, making this adrenaline-pumping water sport accessible even for first-timers.",
    descriptionAr:
      "تحدَّ الجاذبية وحلّق فوق البحر الأحمر في جلسة فلايبورد مثيرة في الغردقة. مدفوعاً بنفاثات مياه مرتبطة بقدميك ستنطلق إلى الأعلى من سطح البحر وتحلق في الهواء كبطل خارق مع مناظر خلابة للبحر الأحمر وساحل الغردقة تمتد حولك.",
    category: "Adventure and nature",
    price: { original: 106.38, discounted: 85.10, currency: "USD" },
    duration: "30 minutes",
    language: ["English"],
    rating: { score: 10.0, reviews: 2 },
    travellers: 8,
    freeCancellation: true,
    minAge: 16,
    maxGroupSize: 4,
    availableTimes: ["10:00", "12:00", "14:00", "16:00"],
    meetingPoint: {
      en: "The flyboard operator's beach station in Hurghada — your booking confirmation will include the exact location.",
      ar: "محطة الشاطئ لمشغّل الفلايبورد في الغردقة — تأكيد حجزك سيتضمن الموقع الدقيق.",
    },
    accessibility: {
      en: "Requires physical fitness and ability to stand and balance. Not suitable for guests with back problems, heart conditions, pregnancy, or those under 16. Maximum weight limit typically applies.",
      ar: "يتطلب لياقة بدنية والقدرة على الوقوف والتوازن. غير مناسب لمن يعانون من مشاكل في الظهر أو القلب أو الحوامل أو من هم دون 16 سنة.",
    },
    whatToBring: {
      en: ["Swimwear", "Towel", "Sunscreen", "Change of clothes", "Waterproof camera if possible"],
      ar: ["ملابس سباحة", "منشفة", "كريم واقٍ من الشمس", "ملابس للتبديل", "كاميرا مقاومة للماء إن أمكن"],
    },
    importantInfo: {
      en: [
        "Hotel pickup is not included — make your own way to the operator's beach station.",
        "The 30-minute session includes instruction and practice time in addition to active flyboarding.",
        "Most first-timers spend their initial attempts falling into the water before finding balance — this is normal and part of the fun.",
        "Safety helmet and vest are provided.",
      ],
      ar: [
        "الاستقبال من الفندق غير مشمول — توجه بنفسك إلى محطة شاطئ المشغّل.",
        "جلسة الـ 30 دقيقة تتضمن وقت التعليمات والتدريب بالإضافة إلى الفلايبورد الفعلي.",
        "معظم المبتدئين يقضون محاولاتهم الأولى في السقوط إلى الماء قبل إيجاد التوازن — هذا طبيعي.",
        "خوذة السلامة وسترة السلامة مقدَّمتان.",
      ],
    },
    highlights: [
      "Thrilling flyboarding experience over the Red Sea",
      "Rise several meters above the water surface",
      "Experienced instructor guides you throughout",
      "Suitable for first-timers",
      "Stunning aerial views of the Red Sea coastline",
    ],
    includes: ["Flyboarding session", "Safety equipment", "Instructor"],
    excludes: ["Hotel pickup", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Above the Red Sea — Your Flyboard Session",
          description:
            "Flyboarding is one of those experiences genuinely difficult to describe: water is pumped at high pressure through a hose attached to a board on your feet, jets point downward, and the thrust lifts you upward. In practice, it takes most people five to fifteen minutes to find basic balance. When it clicks, the sensation is extraordinary — hovering several metres above the Red Sea with the Hurghada coastline in every direction and the realization that you are genuinely flying. The 30-minute session includes briefing and practice time with an instructor beside you throughout.",
          steps: [
            { time: "10:00", description: "Arrive at the operator's beach station. Meet your instructor and complete the safety briefing and consent form." },
            { time: "10:10", description: "Put on the safety vest and helmet. Instructor explains weight distribution, body position, and basic flyboard controls." },
            { time: "10:15", description: "Enter the water. The instructor attaches the flyboard to your feet and you begin in a horizontal floating position." },
            { time: "10:20", description: "First attempts at vertical lift. Instructor controls the power gradually and coaches your body position." },
            { time: "10:30", description: "Progressive flyboarding — as balance improves the instructor increases power and height. Experienced guests can reach several metres above the water." },
            { time: "10:45", description: "Session ends. Remove equipment. Change and dry off." },
            { time: "11:00", description: "Session complete. Make your own way back to your hotel." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "فوق البحر الأحمر — جلسة الفلايبورد الخاصة بك",
          description:
            "الفلايبورد أحد تلك التجارب التي يصعب وصفها: يُضخّ الماء بضغط عالٍ عبر خرطوم مرتبط بلوح في قدميك، والنفاثات تتجه للأسفل، والقوة ترفعك للأعلى. يستغرق معظم الناس بين خمس وخمس عشرة دقيقة لإيجاد التوازن الأساسي. حين ينقر التوازن، الإحساس استثنائي: التحليق عدة أمتار فوق البحر الأحمر مع امتداد ساحل الغردقة في كل اتجاه.",
          steps: [
            { time: "10:00", description: "الوصول إلى محطة شاطئ المشغّل. التعرف على مدربك وإتمام إحاطة السلامة ونموذج الموافقة." },
            { time: "10:10", description: "ارتداء سترة السلامة والخوذة. المدرب يشرح توزيع الوزن ووضع الجسم والتحكم الأساسي." },
            { time: "10:15", description: "الدخول إلى الماء. المدرب يربط الفلايبورد بقدميك وتبدأ في وضع طفو أفقي." },
            { time: "10:20", description: "المحاولات الأولى للرفع العمودي. المدرب يتحكم في الطاقة تدريجياً." },
            { time: "10:30", description: "الفلايبورد التدريجي — مع تحسّن التوازن يزيد المدرب الطاقة والارتفاع." },
            { time: "10:45", description: "تنتهي الجلسة. خلع المعدات. التغيير والتجفف." },
            { time: "11:00", description: "اكتملت الجلسة. العودة إلى فندقك بنفسك." },
          ],
        },
      ],
    },
  },
// hurghada_tours_2.js — Tours 13 to 23

  // ─── TOUR 13 ──────────────────────────────────────────────────────────────
  {
    title: "Civitatis eSIM Card Egypt",
    titleAr: "شريحة eSIM لمصر من Civitatis",
    slug: "civitatis-esim-card-egypt-hurghada",
    description:
      "Stay seamlessly connected throughout your Egyptian holiday with this convenient travel eSIM card. Whether you're sharing stunning Red Sea sunset photos, navigating between Hurghada's resorts, or looking up information about ancient sites, this eSIM gives you reliable mobile data coverage across Egypt without the need to swap physical SIM cards.",
    descriptionAr:
      "ابقَ متصلاً بسلاسة طوال عطلتك المصرية مع بطاقة eSIM السياحية المريحة هذه. سواء كنت تشارك صور غروب البحر الأحمر الرائعة أو تتنقل بين منتجعات الغردقة أو تبحث عن معلومات حول المواقع الأثرية، تمنحك هذه البطاقة تغطية بيانات جوال موثوقة في جميع أنحاء مصر.",
    category: "Additional services",
    price: { original: 5.50, discounted: null, currency: "USD" },
    duration: "7-30 days",
    language: ["English"],
    rating: { score: 7.7, reviews: 89 },
    travellers: 1856,
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
        "Voice calls and SMS are not included.",
      ],
      ar: [
        "يُفعَّل eSIM رقمياً — لا يلزم تبديل بطاقة SIM فعلية.",
        "تأكد من أن هاتفك غير مقيد ومتوافق مع eSIM قبل الشراء.",
        "متوفر بخطط 7 و15 و30 يوماً.",
        "يعمل على شبكات 4G/LTE في جميع أنحاء مصر.",
        "المكالمات الصوتية والرسائل النصية غير مشمولة.",
      ],
    },
    highlights: [
      "Mobile data coverage across Egypt",
      "No physical SIM swap needed",
      "Easy digital activation before arrival",
      "Available in 7, 15, and 30-day plans",
      "Works throughout Hurghada and all Egyptian destinations",
    ],
    includes: ["eSIM data plan for selected duration"],
    excludes: ["Voice calls", "SMS"],
    itinerary: null,
  },

  // ─── TOUR 14 ──────────────────────────────────────────────────────────────
  {
    title: "Horseback Riding in Hurghada",
    titleAr: "ركوب الخيل في الغردقة",
    slug: "horseback-riding-hurghada",
    description:
      "Experience the timeless romance of riding through the Egyptian desert and along the shores of the Red Sea on horseback. This guided ride takes you through stunning desert landscapes and down to the beach, where you'll canter along the water's edge with the Red Sea breeze in your hair and the wide blue sea stretching before you. Suitable for both beginners and experienced riders.",
    descriptionAr:
      "اختبر رومانسية الزمن في ركوب الخيل عبر الصحراء المصرية وعلى طول شواطئ البحر الأحمر. تأخذك هذه الجولة المصحوبة بمرشد عبر مناظر صحراوية خلابة وصولاً إلى الشاطئ، حيث ستركض على طول حافة المياه مع نسيم البحر الأحمر في شعرك.",
    category: "Adventure and nature",
    price: { original: 42.55, discounted: null, currency: "USD" },
    duration: "4 hours",
    language: ["English"],
    rating: { score: 6.5, reviews: 4 },
    travellers: 30,
    freeCancellation: true,
    minAge: 8,
    maxGroupSize: 10,
    availableTimes: ["08:00", "16:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Transfer to the stables is included.",
      ar: "بهو فندقك في الغردقة. الانتقال إلى الاصطبلات مشمول.",
    },
    accessibility: {
      en: "Riders must be able to mount and balance on a horse. Not suitable for guests with serious back conditions or pregnancy. Helmets provided. Beginner-paced horses available.",
      ar: "يجب أن يكون الراكبون قادرين على الركوب والتوازن. غير مناسب لمن يعانون من حالات خطيرة في الظهر أو الحوامل. الخوذات متوفرة.",
    },
    whatToBring: {
      en: ["Long trousers (strongly recommended)", "Closed-toe shoes", "Sun hat", "Sunscreen", "Water bottle"],
      ar: ["بنطلون طويل (موصى به بشدة)", "حذاء مغلق الأصابع", "قبعة للشمس", "كريم واقٍ", "زجاجة ماء"],
    },
    importantInfo: {
      en: [
        "Helmets are provided and mandatory.",
        "Long trousers are strongly recommended to prevent chafing.",
        "The morning session (08:00) avoids the hottest part of the day; the afternoon session (16:00) offers golden sunset light.",
        "Riders are matched to horses based on experience level.",
      ],
      ar: [
        "الخوذات متوفرة وإلزامية.",
        "البنطلون الطويل موصى به بشدة لمنع الاحتكاك.",
        "الجلسة الصباحية (08:00) تتجنب أشد ساعات النهار حراً؛ الجلسة بعد الظهر (16:00) توفر ضوءاً ذهبياً.",
        "يُوفَّق الراكبون مع الخيول بناءً على مستوى خبرتهم.",
      ],
    },
    highlights: [
      "Horseback ride through desert and along the beach",
      "Stunning Red Sea coastal scenery",
      "Suitable for beginners and experienced riders",
      "Professional horse handlers throughout",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Horse", "Guide", "Safety equipment", "Hotel pickup and drop-off"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Desert to Shore — Horseback Riding in Hurghada",
          description:
            "The combination of desert and sea makes Hurghada one of the most atmospheric places in the world for horseback riding. Within minutes of leaving the resort strip the horses are moving through open desert — vast sandy plains, low rocky ridges, and the kind of empty sky that makes you feel very small and very free. The route then descends to the beach where the horses walk and canter along the water's edge with the Red Sea stretching ahead. If the timing is right — and the afternoon session is timed exactly for this — the sunset turns the water gold and the desert cliffs amber.",
          steps: [
            { time: "08:00", description: "Hotel pickup. Transfer to the riding stables on the desert edge, approximately 15-20 minutes from central Hurghada." },
            { time: "08:30", description: "Arrive at the stables. Meet the horses and handlers. Guide assesses your riding experience and matches you to a suitable horse. Helmet fitting and safety briefing." },
            { time: "09:00", description: "Mount up and begin the desert route. First 30-40 minutes through open desert terrain — flat sandy plains giving way to gentle dune ridges." },
            { time: "09:45", description: "The route descends toward the coast. The Red Sea comes into view, the colour changing from pale turquoise to deep blue." },
            { time: "10:00", description: "Beach riding. Horses walk along the shoreline, occasionally cantering on the firmer sand near the waterline." },
            { time: "10:45", description: "Return route through the desert back to the stables." },
            { time: "11:30", description: "Arrive back at stables. Dismount. Water and light refreshments. Photographs with the horses." },
            { time: "12:00", description: "Transfer back to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "من الصحراء إلى الشاطئ — ركوب الخيل في الغردقة",
          description:
            "الجمع بين الصحراء والبحر يجعل الغردقة واحدة من أكثر الأماكن أجواءً في العالم لركوب الخيل. في غضون دقائق من مغادرة شريط المنتجعات الخيول تتحرك عبر صحراء مفتوحة. ثم ينحدر المسار إلى الشاطئ حيث تمشي الخيول وتعدو على طول حافة المياه والبحر الأحمر يمتد أمامك.",
          steps: [
            { time: "08:00", description: "الاستقبال من الفندق. الانتقال إلى الاصطبلات على حافة الصحراء، نحو 15-20 دقيقة من وسط الغردقة." },
            { time: "08:30", description: "الوصول إلى الاصطبلات. التعرف على الخيول والسائسين. المرشد يقيّم خبرتك ويوفّقك مع حصان مناسب. تجهيز الخوذة وإحاطة السلامة." },
            { time: "09:00", description: "الركوب وبدء مسار الصحراء. الـ 30-40 دقيقة الأولى عبر تضاريس صحراوية مفتوحة." },
            { time: "09:45", description: "ينحدر المسار نحو الساحل. البحر الأحمر يظهر أمامك، يتغير لونه من الفيروزي الشاحب إلى الأزرق العميق." },
            { time: "10:00", description: "الركوب على الشاطئ. الخيول تمشي على طول الشاطئ، أحياناً تجتر على الرمال الأكثر صلابة." },
            { time: "10:45", description: "مسار العودة عبر الصحراء إلى الاصطبلات." },
            { time: "11:30", description: "العودة إلى الاصطبلات. النزول عن الخيل. ماء ومرطبات خفيفة. تصوير مع الخيول." },
            { time: "12:00", description: "الانتقال العائد إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 15 ──────────────────────────────────────────────────────────────
  {
    title: "Glass Bottomed Boat Tour",
    titleAr: "جولة القارب ذو القاع الزجاجي",
    slug: "glass-bottom-boat-tour-hurghada",
    description:
      "Peer into the stunning underwater world of the Red Sea without getting wet on this fascinating glass-bottomed boat tour. Glide over the shimmering waters as the transparent hull reveals the breathtaking marine world beneath — colorful coral gardens, schools of tropical fish, and the occasional sea turtle or reef shark passing below. A wonderful experience for the whole family.",
    descriptionAr:
      "تطلع إلى العالم المائي الرائع للبحر الأحمر دون أن تبتل في هذه الجولة الرائعة بالقارب ذي القاع الزجاجي. انزلق فوق المياه المتلألئة بينما يكشف الهيكل الشفاف عن العالم البحري المذهل تحته — حدائق مرجانية ملونة وأسراب أسماك استوائية وسلحفاة بحرية أو سمكة قرش شعاب تمر من الأسفل.",
    category: "Boat tour",
    price: { original: 31.91, discounted: 25.53, currency: "USD" },
    duration: "3 hours",
    language: ["English"],
    rating: { score: 7.6, reviews: 9 },
    travellers: 96,
    freeCancellation: true,
    minAge: 0,
    maxGroupSize: 25,
    availableTimes: ["10:00", "13:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Transfer to the marina is included.",
      ar: "بهو فندقك في الغردقة. الانتقال إلى المرسى مشمول.",
    },
    accessibility: {
      en: "Fully accessible and suitable for all ages including non-swimmers, young children, and elderly guests. No water entry required.",
      ar: "في متناول الجميع ومناسب لجميع الأعمار بما فيهم غير السباحين والأطفال الصغار وكبار السن. لا يلزم الدخول إلى الماء.",
    },
    whatToBring: {
      en: ["Sun hat and sunscreen", "Camera", "Light clothing", "Water bottle"],
      ar: ["قبعة للشمس وكريم واقٍ", "كاميرا", "ملابس خفيفة", "زجاجة ماء"],
    },
    importantInfo: {
      en: [
        "No swimming or snorkeling required — this is a dry viewing experience.",
        "The boat is shared with other passengers.",
        "Best visibility is in the morning when the sun angle best illuminates the reef.",
        "The tour visits two or three reef sites depending on conditions.",
      ],
      ar: [
        "لا يلزم السباحة أو الغطس — هذه تجربة مشاهدة جافة.",
        "القارب مشترك مع ركاب آخرين.",
        "أفضل رؤية في الصباح عندما تضيء زاوية الشمس الشعاب.",
        "الجولة تزور موقعين أو ثلاثة مواقع شعاب حسب الظروف.",
      ],
    },
    highlights: [
      "View Red Sea marine life through the glass bottom",
      "See colorful coral reefs without diving",
      "Spot tropical fish, sea turtles, and reef sharks",
      "Perfect for families and non-swimmers",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Boat tour", "Hotel pickup and drop-off"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "The Reef From Above — Glass Bottom Boat on the Red Sea",
          description:
            "The glass-bottomed boat solves the great problem of the Red Sea: the underwater world here is extraordinary, but not everyone can snorkel or dive, and not everyone wants to get wet. A transparent hull section — essentially a large underwater window in the floor of the vessel — lets you sit and look directly down into the reef as the boat glides slowly above it. The coral formations at these Hurghada reef sites are healthy and colourful, and the fish life is visible in real clarity at distances of just one or two metres.",
          steps: [
            { time: "10:00", description: "Hotel pickup. Transfer to Hurghada Marina." },
            { time: "10:30", description: "Board the glass-bottomed boat. Captain briefs the group on the route. Find a seat around the glass viewing panels in the hull." },
            { time: "10:45", description: "Depart the marina. Short sail to the first reef site — approximately 15-20 minutes." },
            { time: "11:00", description: "Arrive at the first reef. The boat slows and positions over the coral. Begin viewing through the glass — guide points out species as they appear." },
            { time: "11:45", description: "Move to the second reef site. Different coral formations and fish community. Sea turtles and small reef sharks occasionally spotted." },
            { time: "12:15", description: "Optional third reef stop if conditions allow." },
            { time: "12:30", description: "Return sail to the marina." },
            { time: "13:00", description: "Arrive at the marina. Transfer back to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "الشعاب من الأعلى — القارب ذو القاع الزجاجي على البحر الأحمر",
          description:
            "يحل القارب ذو القاع الزجاجي المشكلة الكبرى للبحر الأحمر: العالم تحت الماء استثنائي، لكن ليس الجميع يستطيع الغطس أو الغوص. قسم شفاف في هيكل القارب — نافذة كبيرة تحت الماء في أرضية المركبة — يمكنك من الجلوس والنظر مباشرة إلى الشعاب. الحياة السمكية مرئية بوضوح على مسافات متر أو مترين.",
          steps: [
            { time: "10:00", description: "الاستقبال من الفندق. الانتقال إلى مرسى الغردقة." },
            { time: "10:30", description: "الصعود إلى القارب ذي القاع الزجاجي. الربان يعرّف المجموعة بالمسار. ابحث عن مقعد حول لوحات المشاهدة الزجاجية في الهيكل." },
            { time: "10:45", description: "المغادرة من المرسى. إبحار قصير إلى موقع الشعاب الأول — نحو 15-20 دقيقة." },
            { time: "11:00", description: "الوصول إلى الشعاب الأولى. القارب يبطئ ويتمركز فوق المرجان. بدء المشاهدة عبر الزجاج." },
            { time: "11:45", description: "الانتقال إلى موقع الشعاب الثاني. تكوينات مختلفة. السلاحف وأسماك القرش الصغيرة تُرصد أحياناً." },
            { time: "12:15", description: "توقف اختياري ثالث في الشعاب إذا سمحت الظروف." },
            { time: "12:30", description: "الإبحار العائد إلى المرسى." },
            { time: "13:00", description: "الوصول إلى المرسى. الانتقال العائد إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 16 ──────────────────────────────────────────────────────────────
  {
    title: "Sharm El-Naga Snorkel Trip",
    titleAr: "رحلة الغطس في شرم الناقة",
    slug: "sharm-el-naga-snorkel-trip-hurghada",
    description:
      "Head south to one of the most beautiful and unspoiled snorkeling destinations on the Red Sea coast — Sharm El-Naga. This protected natural bay is renowned for its healthy coral reefs, crystal-clear visibility, and rich marine life including turtles, rays, and dozens of species of colorful reef fish. Spend the day exploring the underwater world at this pristine location, far from the busy resort areas.",
    descriptionAr:
      "توجه جنوباً إلى واحدة من أجمل وأنقى وجهات الغطس على ساحل البحر الأحمر — شرم الناقة. تشتهر هذه الخليج الطبيعية المحمية بشعابها المرجانية الصحية ووضوح مياهها البلوري وحياتها البحرية الغنية التي تشمل السلاحف والراي وعشرات أنواع أسماك الشعاب الملونة.",
    category: "Day trip",
    price: { original: 70.92, discounted: null, currency: "USD" },
    duration: "8 hours",
    language: ["English"],
    rating: { score: 8.0, reviews: 2 },
    travellers: 24,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 15,
    availableTimes: ["08:30"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Transfer to Sharm El-Naga by road is included.",
      ar: "بهو فندقك في الغردقة. الانتقال إلى شرم الناقة براً مشمول.",
    },
    accessibility: {
      en: "Snorkeling requires basic swimming comfort. Life jackets available. Beach entry into the water is gradual. Not suitable for wheelchairs.",
      ar: "يتطلب الغطس الارتياح الأساسي بالسباحة. سترات النجاة متوفرة. الدخول إلى الماء من الشاطئ تدريجي. غير مناسب لكراسي الحركة.",
    },
    whatToBring: {
      en: ["Swimwear", "Towel", "Reef-safe sunscreen (mandatory in the protected area)", "Sun hat", "Lunch or snacks (meals not included)", "Water shoes (optional but useful)"],
      ar: ["ملابس سباحة", "منشفة", "كريم واقٍ صديق للشعاب (إلزامي في المنطقة المحمية)", "قبعة للشمس", "غداء أو وجبات خفيفة (الوجبات غير مشمولة)", "حذاء مائي (اختياري لكن مفيد)"],
    },
    importantInfo: {
      en: [
        "Sharm El-Naga is approximately 30 km south of Hurghada — drive takes about 30-40 minutes.",
        "This is a protected marine reserve — no fishing, no touching coral, reef-safe sunscreen only.",
        "Snorkeling equipment is provided.",
        "Meals are not included — bring food or purchase from the small beachside facility on site.",
        "The site is less crowded than Hurghada's closer reefs, significantly improving the experience quality.",
      ],
      ar: [
        "شرم الناقة على بُعد نحو 30 كم جنوب الغردقة — القيادة تستغرق نحو 30-40 دقيقة.",
        "هذا محمية بحرية محمية — ممنوع الصيد، ممنوع لمس المرجان، كريم واقٍ صديق للشعاب فقط.",
        "معدات الغطس مقدَّمة.",
        "الوجبات غير مشمولة — أحضر طعامك أو اشترِ من المنشأة الصغيرة في الموقع.",
        "الموقع أقل ازدحاماً من شعاب الغردقة الأقرب مما يحسّن جودة التجربة بشكل ملحوظ.",
      ],
    },
    highlights: [
      "Snorkeling at the pristine Sharm El-Naga bay",
      "Healthy coral reefs with exceptional visibility",
      "Spot sea turtles, rays, and tropical fish",
      "Relax on an unspoiled Red Sea beach",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Transport", "Snorkeling equipment", "Hotel pickup and drop-off"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Sharm El-Naga — Egypt's Most Unspoiled Reef Day",
          description:
            "Sharm El-Naga is what much of the Egyptian Red Sea coast looked like before mass tourism arrived. A protected bay with no development on its shoreline inside a marine reserve where fishing and coral collection are banned. The coral is dense, varied, and alive, and the fish population is noticeably greater than at more visited sites. Sea turtles are frequent visitors, as are spotted eagle rays. Visibility regularly exceeds 20 metres, and the shallow reef begins literally at the beach entry.",
          steps: [
            { time: "08:30", description: "Hotel pickup. Drive south along the Red Sea coast road to Sharm El-Naga — approximately 30-40 minutes." },
            { time: "09:15", description: "Arrive at Sharm El-Naga. Collect snorkeling equipment. Brief orientation on the reef layout and protected area rules." },
            { time: "09:30", description: "First snorkeling session. Walk into the water from the beach — the reef begins within a few metres of shore. Guide leads to deeper coral formations where fish life is most concentrated." },
            { time: "11:00", description: "Rest on the beach. Bring your own food or purchase from the small facility on site." },
            { time: "12:00", description: "Second snorkeling session. Guide takes the group to a different area of the reef — the northern section typically has more turtle activity." },
            { time: "13:30", description: "Afternoon beach time. Swim, sunbathe, or explore the shoreline." },
            { time: "15:30", description: "Depart Sharm El-Naga for the return drive to Hurghada." },
            { time: "16:15", description: "Arrive back in Hurghada. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "شرم الناقة — يوم الشعاب المرجانية الأنقى في مصر",
          description:
            "شرم الناقة هو ما كان يبدو عليه كثير من ساحل البحر الأحمر المصري قبل وصول السياحة الجماهيرية. خليج محمي بلا تطوير على شاطئه داخل محمية بحرية. المرجان كثيف ومتنوع وحي، وعدد الأسماك أكبر بشكل ملحوظ. السلاحف البحرية والراي المنقط تُرصد بانتظام. الرؤية تتجاوز 20 متراً.",
          steps: [
            { time: "08:30", description: "الاستقبال من الفندق. القيادة جنوباً على طريق ساحل البحر الأحمر إلى شرم الناقة — نحو 30-40 دقيقة." },
            { time: "09:15", description: "الوصول إلى شرم الناقة. استلام معدات الغطس. توجيه موجز على تخطيط الشعاب وقواعد المنطقة المحمية." },
            { time: "09:30", description: "جلسة الغطس الأولى. الدخول إلى الماء من الشاطئ — تبدأ الشعاب في غضون أمتار قليلة. المرشد يقود إلى تكوينات المرجان الأعمق." },
            { time: "11:00", description: "الراحة على الشاطئ. أحضر طعامك الخاص أو اشترِ من المنشأة الصغيرة في الموقع." },
            { time: "12:00", description: "جلسة الغطس الثانية. المرشد يأخذ المجموعة إلى منطقة مختلفة من الشعاب." },
            { time: "13:30", description: "وقت الشاطئ بعد الظهر. السباحة أو الاستلقاء في الشمس أو استكشاف الشاطئ." },
            { time: "15:30", description: "المغادرة من شرم الناقة للقيادة العائدة إلى الغردقة." },
            { time: "16:15", description: "الوصول إلى الغردقة. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 17 ──────────────────────────────────────────────────────────────
  {
    title: "Desert Quad Tour + Bedouin Dinner",
    titleAr: "جولة الكواد في الصحراء مع عشاء بدوي",
    slug: "desert-quad-tour-bedouin-dinner-hurghada",
    description:
      "Get your adrenaline pumping on this classic desert quad bike adventure followed by an authentic Bedouin evening experience. Ride out into the vast desert surrounding Hurghada on a powerful quad bike, navigating sand dunes, rocky trails, and open desert plains. After the ride, visit a traditional Bedouin village for a camel ride and then settle in for a delicious Bedouin dinner under the stars.",
    descriptionAr:
      "اشحن طاقتك في هذه المغامرة الكلاسيكية بالدراجة الرباعية في الصحراء يليها سهرة بدوية أصيلة. اركب إلى الصحراء الواسعة المحيطة بالغردقة على دراجة رباعية قوية، متنقلاً بين الكثبان الرملية والمسالك الصخرية والسهول الصحراوية المفتوحة.",
    category: "Adventure and nature",
    price: { original: 53.19, discounted: 42.55, currency: "USD" },
    duration: "5 hours",
    language: ["English"],
    rating: { score: 6.2, reviews: 13 },
    travellers: 243,
    freeCancellation: true,
    minAge: 16,
    maxGroupSize: 20,
    availableTimes: ["15:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Pickup timed for the afternoon.",
      ar: "بهو فندقك في الغردقة. الاستقبال مُوقَّت لبعد الظهر.",
    },
    accessibility: {
      en: "Quad bike requires physical fitness and balance. Not suitable for guests with back problems, heart conditions, or pregnancy. Minimum age 16. The Bedouin dinner portion is accessible to all.",
      ar: "الدراجة الرباعية تتطلب لياقة بدنية وتوازناً. غير مناسبة لمن يعانون من مشاكل في الظهر أو القلب أو الحوامل. الحد الأدنى للعمر 16 سنة. جزء العشاء البدوي متاح للجميع.",
    },
    whatToBring: {
      en: ["Closed-toe shoes (mandatory)", "Light comfortable clothing", "Warm layer for the evening", "Sunglasses", "Scarf or bandana for dust", "Camera"],
      ar: ["حذاء مغلق الأصابع (إلزامي)", "ملابس خفيفة ومريحة", "طبقة دافئة للمساء", "نظارة شمسية", "وشاح أو بندانا للغبار", "كاميرا"],
    },
    importantInfo: {
      en: [
        "Minimum age for the quad bike is 16 years.",
        "The Bedouin dinner does not include alcoholic drinks.",
        "Vegetarian options are available at the Bedouin dinner — inform the operator at booking.",
        "The afternoon departure is timed to catch the golden desert light and cool evening temperatures.",
      ],
      ar: [
        "الحد الأدنى للعمر للدراجة الرباعية هو 16 سنة.",
        "عشاء البدو لا يشمل المشروبات الكحولية.",
        "خيارات نباتية متوفرة — أخبر المشغّل وقت الحجز.",
        "المغادرة بعد الظهر مُوقَّتة للاستفادة من الضوء الذهبي الصحراوي ودرجات حرارة المساء المعتدلة.",
      ],
    },
    highlights: [
      "Quad bike ride through the Egyptian desert",
      "Visit a traditional Bedouin village",
      "Camel ride experience",
      "Authentic Bedouin dinner under the stars",
      "Traditional music and shisha",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Quad bike", "Safety equipment", "Camel ride", "Bedouin dinner", "Hotel pickup and drop-off"],
    excludes: ["Tips", "Personal expenses", "Alcoholic drinks"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Quad Bikes, Camels & a Bedouin Feast",
          description:
            "This five-hour tour combines the adrenaline of a quad bike ride with the calm and cultural richness of a genuine Bedouin dinner. The departure is timed for the afternoon because the desert is most beautiful in the last hours of daylight: the dust turns gold, shadows grow long, and the heat of the day has passed. The quad bike section takes the group out across the desert for a 45-minute circuit. The Bedouin camp then offers camels, tea, and a meal being prepared over an open fire.",
          steps: [
            { time: "15:00", description: "Hotel pickup. Transfer to the desert quad bike base." },
            { time: "15:30", description: "Arrive at the base. Choose your quad bike. Helmet, goggles, and gloves provided. Safety briefing and riding tutorial from the guide." },
            { time: "16:00", description: "Quad bike route through the desert — approximately 45 minutes of dune crossings, rocky trails, and open desert plains." },
            { time: "16:45", description: "Return to the base. Transfer by vehicle to the Bedouin camp." },
            { time: "17:15", description: "Arrive at the Bedouin camp. Traditional mint tea served on arrival. Meet the camels." },
            { time: "17:30", description: "Camel ride through the desert — approximately 20-25 minutes. The golden hour light is exceptional for photographs." },
            { time: "18:00", description: "Watch the desert sunset from the camp." },
            { time: "18:30", description: "Bedouin dinner served — bread, grilled meats, rice, salads, dips, and fresh fruit on traditional carpets around the fire. Traditional music throughout." },
            { time: "19:30", description: "After dinner relaxation — shisha available, stargazing with the guide, local music." },
            { time: "20:00", description: "Transfer back to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "دراجات الكواد والجمال وعشاء بدوي",
          description:
            "تجمع هذه الجولة الممتدة خمس ساعات بين إثارة رحلة الدراجة الرباعية وهدوء وثراء ثقافة عشاء بدوي حقيقي. المغادرة مُوقَّتة لبعد الظهر لأن الصحراء في أجمل صورها في الساعات الأخيرة من ضوء النهار.",
          steps: [
            { time: "15:00", description: "الاستقبال من الفندق. الانتقال إلى قاعدة الدراجات الرباعية الصحراوية." },
            { time: "15:30", description: "الوصول إلى القاعدة. اختيار دراجتك الرباعية. الخوذة والنظارات والقفازات مقدَّمة. إحاطة السلامة ودرس القيادة." },
            { time: "16:00", description: "مسار الدراجة الرباعية عبر الصحراء — نحو 45 دقيقة من عبور الكثبان والمسالك الصخرية." },
            { time: "16:45", description: "العودة إلى القاعدة. الانتقال بالسيارة إلى المعسكر البدوي." },
            { time: "17:15", description: "الوصول إلى المعسكر البدوي. تقديم الشاي بالنعناع التقليدي. التعرف على الجمال." },
            { time: "17:30", description: "ركوب الجمال عبر الصحراء — نحو 20-25 دقيقة. ضوء الساعة الذهبية استثنائي للتصوير." },
            { time: "18:00", description: "مشاهدة غروب الصحراء من المعسكر." },
            { time: "18:30", description: "يُقدَّم عشاء البدو — خبز ولحوم مشوية وأرز وسلطات وصلصات وفاكهة طازجة على سجاد تقليدي حول النار. موسيقى تقليدية طوال الوقت." },
            { time: "19:30", description: "استرخاء بعد العشاء — شيشة متوفرة، رصد نجوم مع المرشد، موسيقى محلية." },
            { time: "20:00", description: "الانتقال العائد إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 18 ──────────────────────────────────────────────────────────────
  {
    title: "Turkish Bath in Hurghada",
    titleAr: "الحمام التركي في الغردقة",
    slug: "turkish-bath-hurghada",
    description:
      "Treat yourself to a deeply relaxing traditional Turkish bath experience in Hurghada. Unwind in the warm steam room, enjoy a full body scrub with a traditional kessa mitt, followed by a relaxing foam massage and a soothing full-body oil massage. The perfect way to recover after days of sightseeing, diving, and desert adventures.",
    descriptionAr:
      "دلّل نفسك بتجربة الحمام التركي التقليدي العميق الاسترخاء في الغردقة. استرخِ في غرفة البخار الدافئة واستمتع بتقشير الجسم الكامل بقفاز الكيس التقليدي، يليه تدليك رغوي مريح وتدليك كامل للجسم بالزيت.",
    category: "Entrance tickets",
    price: { original: 53.19, discounted: 42.55, currency: "USD" },
    duration: "3 hours",
    language: ["English"],
    rating: { score: 8.5, reviews: 4 },
    travellers: 41,
    freeCancellation: true,
    minAge: 12,
    maxGroupSize: null,
    availableTimes: ["10:00", "13:00", "16:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Transfer to the hammam is included.",
      ar: "بهو فندقك في الغردقة. الانتقال إلى الحمام مشمول.",
    },
    accessibility: {
      en: "The Turkish bath involves a heated steam room — not suitable for guests with heart conditions, high blood pressure, or pregnancy. Separate facilities for men and women available.",
      ar: "الحمام التركي يتضمن غرفة بخار ساخنة — غير مناسب لمن يعانون من أمراض القلب أو ارتفاع ضغط الدم أو الحوامل. مرافق منفصلة للرجال والنساء متوفرة.",
    },
    whatToBring: {
      en: ["Swimwear or underwear for the scrub session", "Comfortable clothing for afterward", "Any personal toiletries you prefer"],
      ar: ["ملابس سباحة أو ملابس داخلية لجلسة التقشير", "ملابس مريحة للتبديل بعدها", "أدوات الحمام الشخصية التي تفضلها"],
    },
    importantInfo: {
      en: [
        "Men and women are treated in separate areas.",
        "The session includes: steam room, full body scrub, foam massage, and oil massage.",
        "The hammam provides towels, flip-flops, and a robe.",
        "Not suitable for guests with heart conditions, high blood pressure, skin conditions, or pregnancy.",
        "Inform staff of any allergies before the oil massage.",
      ],
      ar: [
        "الرجال والنساء يُعالَجون في مناطق منفصلة.",
        "الجلسة تشمل: غرفة البخار وتقشير الجسم الكامل والتدليك بالرغوة والتدليك بالزيت.",
        "يوفر الحمام المناشف والشباشب والروب.",
        "غير مناسب لمن يعانون من أمراض القلب أو ارتفاع ضغط الدم أو أمراض الجلد أو الحوامل.",
        "أخبر الموظفين بأي حساسيات قبل التدليك بالزيت.",
      ],
    },
    highlights: [
      "Traditional Turkish bath (hammam) experience",
      "Full body scrub with kessa mitt",
      "Relaxing foam massage",
      "Full-body oil massage",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Turkish bath session", "Body scrub", "Foam massage", "Oil massage", "Hotel pickup and drop-off"],
    excludes: ["Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "The Hammam — Steam, Scrub & Total Relaxation",
          description:
            "The Turkish hammam is one of the oldest wellness traditions in the world, still offering something contemporary spa facilities rarely match: genuine physical restoration through heat, water, and skilled hands. You begin in the steam room — heat opens the pores and loosens the muscles within about ten minutes. From the steam room you move to the scrub: a practitioner works over your entire body with a kessa glove, removing the outer layer of dead skin cells. A foam massage follows, then an oil massage. Most guests report feeling several years younger immediately afterwards.",
          steps: [
            { time: "10:00", description: "Hotel pickup. Transfer to the hammam facility." },
            { time: "10:30", description: "Arrive at the hammam. Receive towels, flip-flops, and a robe. Change and store belongings in a locker." },
            { time: "10:45", description: "Steam room session — approximately 15-20 minutes. The heat prepares the skin for the scrub and begins to relax the muscles." },
            { time: "11:10", description: "Full body scrub — practitioner works over your entire body with the kessa mitt. Both sides, arms, legs, back, and neck. Approximately 20-25 minutes." },
            { time: "11:35", description: "Foam massage — practitioner creates a large foam cloud using olive oil soap and applies it in a gentle full-body massage." },
            { time: "12:00", description: "Rinse and rest. Cool water rinse to close the pores, then a rest period with water and mint tea." },
            { time: "12:15", description: "Full body oil massage — 30-40 minutes using scented oil, working from feet to neck. Guests choose the pressure level." },
            { time: "13:00", description: "Session complete. Dress and collect belongings. Transfer back to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "الحمام — البخار والتقشير والاسترخاء التام",
          description:
            "الحمام التركي أحد أقدم تقاليد العافية في العالم، لا يزال يقدم شيئاً نادراً ما تجاريه مرافق السبا الحديثة: استعادة جسدية حقيقية عبر الحرارة والماء والأيدي الماهرة. تبدأ في غرفة البخار — الحرارة تفتح المسام وتفكّك العضلات في غضون عشر دقائق. ثم التقشير بالكيس، فالتدليك بالرغوة، فالتدليك بالزيت.",
          steps: [
            { time: "10:00", description: "الاستقبال من الفندق. الانتقال إلى مرفق الحمام." },
            { time: "10:30", description: "الوصول إلى الحمام. استلام المناشف والشباشب والروب. التغيير وتخزين المتعلقات في الخزانة." },
            { time: "10:45", description: "جلسة غرفة البخار — نحو 15-20 دقيقة. الحرارة تُعدّ الجلد للتقشير وتبدأ في إرخاء العضلات." },
            { time: "11:10", description: "تقشير الجسم الكامل — الممارس يعمل على جسمك كله بقفاز الكيس. الجانبان والذراعان والساقان والظهر والرقبة. نحو 20-25 دقيقة." },
            { time: "11:35", description: "التدليك بالرغوة — الممارس يصنع سحابة رغوة كبيرة بصابون زيت الزيتون ويطبقها في تدليك لطيف." },
            { time: "12:00", description: "الشطف والراحة. شطف بالماء البارد لإغلاق المسام ثم راحة مع ماء وشاي بالنعناع." },
            { time: "12:15", description: "تدليك الجسم الكامل بالزيت — 30-40 دقيقة باستخدام زيت عطري من القدمين إلى الرقبة." },
            { time: "13:00", description: "اكتملت الجلسة. ارتداء الملابس واستلام المتعلقات. الانتقال العائد إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 19 ──────────────────────────────────────────────────────────────
  {
    title: "Great Pyramid of Giza + Grand Egyptian Museum Bus Day Trip",
    titleAr: "رحلة يومية بالأتوبيس إلى هرم الجيزة والمتحف المصري الكبير",
    slug: "pyramid-giza-grand-egyptian-museum-bus-hurghada",
    description:
      "Discover the greatest wonders of ancient and modern Egypt on this full-day bus trip from Hurghada to Cairo. Travel in comfort along the road to Cairo and spend the day at the Great Pyramid of Giza, the last surviving Wonder of the Ancient World, and the Grand Egyptian Museum, the largest archaeological museum on Earth.",
    descriptionAr:
      "اكتشف أعظم عجائب مصر القديمة والحديثة في هذه الرحلة اليومية بالأتوبيس من الغردقة إلى القاهرة. سافر بكل راحة على طريق القاهرة وأمضِ اليوم في هرم الجيزة الأكبر والمتحف المصري الكبير.",
    category: "Day trip",
    price: { original: 180.00, discounted: null, currency: "USD" },
    duration: "18-19 hours",
    language: ["English"],
    rating: { score: 8.0, reviews: 1 },
    travellers: 13,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 20,
    availableTimes: ["03:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada for the very early morning departure.",
      ar: "بهو فندقك في الغردقة للمغادرة في ساعات الصباح الباكرة جداً.",
    },
    accessibility: {
      en: "Extremely long day (18-19 hours). Bus journey each way is approximately 4-5 hours. Giza Plateau involves walking on sand. Not recommended for guests with limited stamina or serious mobility issues.",
      ar: "يوم طويل للغاية (18-19 ساعة). رحلة الأتوبيس في كل اتجاه نحو 4-5 ساعات. هضبة الجيزة تتضمن المشي على الرمال. غير موصى به لمن يعانون من طاقة محدودة أو صعوبات حركة جدية.",
    },
    whatToBring: {
      en: ["Very comfortable clothing for a long day", "Pillow or neck support for the bus", "Snacks and water", "Comfortable walking shoes", "Sun protection", "Camera", "Warm layer for the late-night return"],
      ar: ["ملابس مريحة جداً ليوم طويل", "وسادة أو دعم للرقبة في الأتوبيس", "وجبات خفيفة وماء", "حذاء مريح للمشي", "واقٍ من الشمس", "كاميرا", "طبقة دافئة للعودة ليلاً"],
    },
    importantInfo: {
      en: [
        "This is the bus (overland) version — the flight version is more expensive but saves approximately 7-8 hours of travel time.",
        "Departure is between 03:00 and 04:00 — unavoidable to allow a full day in Cairo.",
        "Entrance fees to Giza and the Grand Egyptian Museum are included.",
        "Entry inside the Great Pyramid is not included and carries an additional fee.",
        "Lunch is included at a restaurant near the Giza Plateau.",
      ],
      ar: [
        "هذه هي النسخة بالأتوبيس (البرية) — نسخة الطائرة أغلى لكنها توفر نحو 7-8 ساعات من وقت السفر.",
        "المغادرة بين 03:00 و04:00 — أمر لا مفر منه للسماح بيوم كامل في القاهرة.",
        "رسوم الدخول إلى الجيزة والمتحف المصري الكبير مشمولة.",
        "الدخول داخل الهرم الأكبر غير مشمول ويستلزم رسماً إضافياً.",
        "الغداء مشمول في مطعم بالقرب من هضبة الجيزة.",
      ],
    },
    highlights: [
      "Full-day bus trip from Hurghada to Cairo",
      "Visit the Great Pyramid of Giza and the Sphinx",
      "Explore the Grand Egyptian Museum",
      "See Tutankhamun's golden treasures",
      "Expert guide throughout the day",
    ],
    includes: ["Bus transport", "Guide", "Entrance fees", "Lunch", "Hotel pickup and drop-off"],
    excludes: ["Entry inside the Great Pyramid (extra fee)", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "The Long Road to the Pyramids — Hurghada to Cairo by Bus",
          description:
            "This is the most demanding day trip available from Hurghada — and for many guests, the most rewarding. The bus crosses the Eastern Desert from the Red Sea coast to the Nile Valley, then continues north to the Giza Plateau — approximately four to five hours each way. The pre-dawn departure is unavoidable if you want a full day at the sites. It should only be undertaken by guests genuinely eager to see the Pyramids and who have the stamina for the journey.",
          steps: [
            { time: "03:00", description: "Hotel pickup. Board the coach for the drive to Cairo." },
            { time: "07:30", description: "Arrive at the Giza Plateau. First view of the pyramids." },
            { time: "08:00", description: "Guided tour of the Pyramids — the Great Pyramid of Khufu, the Pyramid of Khafre, and the Pyramid of Menkaure. Walk to the Great Sphinx and Valley Temple." },
            { time: "10:00", description: "Panoramic viewpoint stop. All three pyramids photographed together." },
            { time: "11:00", description: "Transfer to lunch restaurant near the plateau." },
            { time: "11:30", description: "Lunch included." },
            { time: "13:00", description: "Transfer to the Grand Egyptian Museum." },
            { time: "13:30", description: "Guided tour of the Grand Egyptian Museum — Tutankhamun's complete treasures, the Royal Mummies Hall, and the permanent collection highlights." },
            { time: "16:30", description: "Depart Cairo. Board the coach for the return drive to Hurghada." },
            { time: "21:00", description: "Arrive back in Hurghada. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "الطريق الطويل إلى الأهرامات — من الغردقة إلى القاهرة بالأتوبيس",
          description:
            "هذه أكثر رحلات اليوم تطلباً من الغردقة — ولكثير من الضيوف، الأكثر إثارةً. يقطع الأتوبيس الصحراء الشرقية من ساحل البحر الأحمر إلى وادي النيل ثم يواصل شمالاً إلى هضبة الجيزة، رحلة نحو أربع إلى خمس ساعات في كل اتجاه. ينبغي أن تُقدَم عليها فقط من هم راغبون فعلاً في رؤية الأهرامات.",
          steps: [
            { time: "03:00", description: "الاستقبال من الفندق. الصعود إلى الأتوبيس للقيادة إلى القاهرة." },
            { time: "07:30", description: "الوصول إلى هضبة الجيزة. أول منظر للأهرامات." },
            { time: "08:00", description: "جولة مصحوبة بمرشد في الأهرامات — هرم خوفو الأكبر وهرم خفرع وهرم منقرع. المشية إلى أبو الهول الكبير ومعبد الوادي." },
            { time: "10:00", description: "توقف نقطة المشاهدة البانورامية. تصوير الأهرامات الثلاثة معاً." },
            { time: "11:00", description: "الانتقال إلى مطعم الغداء بالقرب من الهضبة." },
            { time: "11:30", description: "الغداء مشمول." },
            { time: "13:00", description: "الانتقال إلى المتحف المصري الكبير." },
            { time: "13:30", description: "جولة مصحوبة بمرشد في المتحف المصري الكبير — كنوز توتنخامون الكاملة وقاعة المومياوات والمقتنيات الدائمة." },
            { time: "16:30", description: "المغادرة من القاهرة. الصعود إلى الأتوبيس للقيادة العائدة إلى الغردقة." },
            { time: "21:00", description: "الوصول إلى الغردقة. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 20 ──────────────────────────────────────────────────────────────
  {
    title: "Giftun Island Snorkelling Tour",
    titleAr: "جولة الغطس في جزيرة جفتون",
    slug: "giftun-island-snorkelling-hurghada",
    description:
      "Sail to the spectacular Giftun Island, one of the most beautiful and biodiverse marine areas in the entire Red Sea. Giftun Island is part of a protected national park and is home to some of the healthiest coral reefs in Egypt, teeming with sea turtles, colourful reef fish, and other extraordinary marine creatures. Spend the day snorkeling over these pristine reefs and relaxing on the island's stunning beaches.",
    descriptionAr:
      "أبحر إلى جزيرة جفتون الرائعة، إحدى أجمل المناطق البحرية وأكثرها تنوعاً بيولوجياً في البحر الأحمر بأكمله. جزيرة جفتون جزء من حديقة وطنية محمية وتضم بعضاً من أصح الشعاب المرجانية في مصر.",
    category: "Day trip",
    price: { original: 53.19, discounted: 42.55, currency: "USD" },
    duration: "8 hours",
    language: ["English"],
    rating: { score: 10.0, reviews: 45 },
    travellers: 750,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 30,
    availableTimes: ["08:30"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Transfer to the marina is included.",
      ar: "بهو فندقك في الغردقة. الانتقال إلى المرسى مشمول.",
    },
    accessibility: {
      en: "Snorkeling requires basic swimming comfort. Life jackets available. Island beach is accessible from the boat by ladder. Not suitable for wheelchairs.",
      ar: "يتطلب الغطس الارتياح الأساسي بالسباحة. سترات النجاة متوفرة. شاطئ الجزيرة يمكن الوصول إليه من القارب بالسلّم. غير مناسب لكراسي الحركة.",
    },
    whatToBring: {
      en: ["Swimwear", "Towel", "Reef-safe sunscreen (mandatory in the national park)", "Hat", "Light change of clothes", "Snacks (meals not included)"],
      ar: ["ملابس سباحة", "منشفة", "كريم واقٍ صديق للشعاب (إلزامي في المتنزه الوطني)", "قبعة", "ملابس خفيفة للتبديل", "وجبات خفيفة (الوجبات غير مشمولة)"],
    },
    importantInfo: {
      en: [
        "Giftun Island is a protected national park — reef-safe sunscreen is mandatory.",
        "No touching or collecting coral or shells.",
        "Snorkeling equipment is provided onboard.",
        "Meals are not included — bring food or purchase light snacks onboard.",
        "Sea turtles are common at Giftun — do not chase or touch them.",
      ],
      ar: [
        "جزيرة جفتون متنزه وطني محمي — كريم الحماية الصديق للشعاب إلزامي.",
        "ممنوع لمس أو جمع الشعاب المرجانية أو الأصداف.",
        "معدات الغطس مقدَّمة على متن القارب.",
        "الوجبات غير مشمولة — أحضر طعامك أو اشترِ وجبات خفيفة على متن القارب.",
        "السلاحف البحرية شائعة في جفتون — لا تطاردها أو تلمسها.",
      ],
    },
    highlights: [
      "Boat trip to Giftun Island National Park",
      "Snorkel over pristine protected coral reefs",
      "Spot sea turtles and tropical marine life",
      "Relax on Giftun Island's beautiful beaches",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Boat trip", "Snorkeling equipment", "Hotel pickup and drop-off", "Light refreshments"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Giftun Island — The Red Sea at Its Very Best",
          description:
            "Giftun Island National Park is widely regarded as the finest snorkeling destination in the Hurghada region. The protection of national park status has kept the reefs in exceptional health: coral coverage is dense, fish populations are large, and encounters with sea turtles are among the most memorable wildlife experiences on the Egyptian coast. The day is simple: sail to the island, snorkel the northern reef in the morning, lunch break on the boat, snorkel the southern reef in the afternoon, and sail home.",
          steps: [
            { time: "08:30", description: "Hotel pickup. Transfer to Hurghada Marina." },
            { time: "09:00", description: "Board the boat. Safety briefing and snorkeling equipment distribution. Brief on the national park rules." },
            { time: "09:15", description: "Depart the marina. Sail southeast toward Giftun Island — approximately 45-60 minutes." },
            { time: "10:15", description: "Arrive at the first reef site on the north side of Giftun. Anchor. Enter the water." },
            { time: "10:30", description: "First snorkeling session. Guide leads along the coral wall and over the reef table. Sea turtles, parrotfish, Napoleon wrasse, moray eels, and large schools of anthias commonly encountered." },
            { time: "12:00", description: "Break on the boat deck. Light refreshments served. Bring your own lunch." },
            { time: "13:00", description: "Move to the beach side of Giftun Island. Relax on the white sand beach or snorkel the shallow inner reef." },
            { time: "14:30", description: "Second snorkeling session at the southern reef or the channel — different species and coral formations." },
            { time: "16:00", description: "Board the boat for the return sail to Hurghada." },
            { time: "17:00", description: "Arrive at Hurghada Marina. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "جزيرة جفتون — البحر الأحمر في أبهى صوره",
          description:
            "يُعتبر المتنزه الوطني لجزيرة جفتون أفضل وجهة للغطس في منطقة الغردقة. حماية المتنزه الوطني حافظت على الشعاب في حالة استثنائية: تغطية المرجان كثيفة وأعداد الأسماك كبيرة واللقاءات مع السلاحف البحرية من بين أكثر التجارب لا تُنسى على الساحل المصري.",
          steps: [
            { time: "08:30", description: "الاستقبال من الفندق. الانتقال إلى مرسى الغردقة." },
            { time: "09:00", description: "الصعود إلى القارب. إحاطة السلامة وتوزيع معدات الغطس. إحاطة بقواعد المتنزه الوطني." },
            { time: "09:15", description: "المغادرة من المرسى. الإبحار جنوب شرق نحو جزيرة جفتون — نحو 45-60 دقيقة." },
            { time: "10:15", description: "الوصول إلى موقع الشعاب الأول على الجانب الشمالي من جفتون. إرساء المرساة. الدخول إلى الماء." },
            { time: "10:30", description: "جلسة الغطس الأولى. المرشد يقود على طول جدار المرجان. السلاحف البحرية وسمك الببغاء وسمك النابليون وثعابين البحر والأسراب الكبيرة تُرصد عادةً." },
            { time: "12:00", description: "استراحة على سطح القارب. تُقدَّم مرطبات خفيفة. أحضر غداءك الخاص." },
            { time: "13:00", description: "الانتقال إلى جانب الشاطئ من جزيرة جفتون. الاسترخاء على الشاطئ الرملي الأبيض أو الغطس في الشعاب الضحلة الداخلية." },
            { time: "14:30", description: "جلسة الغطس الثانية في الشعاب الجنوبية أو القناة — أنواع وتكوينات مرجانية مختلفة." },
            { time: "16:00", description: "الصعود إلى القارب للإبحار العائد إلى الغردقة." },
            { time: "17:00", description: "الوصول إلى مرسى الغردقة. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 21 ──────────────────────────────────────────────────────────────
  {
    title: "Hurghada Submarine Tour",
    titleAr: "جولة الغواصة في الغردقة",
    slug: "hurghada-submarine-tour",
    description:
      "Descend beneath the surface of the Red Sea without getting wet on this unique submarine tour in Hurghada. Board the famous Sindbad submarine and sink below the waves to explore the incredible underwater world of the Red Sea coast. Through large portholes, you'll be treated to close-up views of brilliant coral formations, lionfish, butterflyfish, scarlet frogfish, and many other extraordinary species.",
    descriptionAr:
      "انزل تحت سطح البحر الأحمر دون أن تبتل في هذه الجولة الفريدة والمثيرة بالغواصة في الغردقة. اصعد على متن غواصة سندباد الشهيرة واغطس تحت الأمواج لاستكشاف العالم المائي الرائع لساحل البحر الأحمر.",
    category: "Boat tour",
    price: { original: 53.19, discounted: 42.55, currency: "USD" },
    duration: "2 hours",
    language: ["English"],
    rating: { score: 8.2, reviews: 35 },
    travellers: 420,
    freeCancellation: true,
    minAge: 0,
    maxGroupSize: 44,
    availableTimes: ["09:00", "11:00", "13:00", "15:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Transfer to the Sindbad submarine station is included.",
      ar: "بهو فندقك في الغردقة. الانتقال إلى محطة غواصة سندباد مشمول.",
    },
    accessibility: {
      en: "The submarine is fully enclosed and air-conditioned. Boarding requires descending a short ladder from the surface boat. Suitable for all ages including young children and non-swimmers. Not suitable for guests with severe claustrophobia.",
      ar: "الغواصة مغلقة بالكامل ومكيفة. الصعود يتطلب النزول على سلّم قصير. مناسبة لجميع الأعمار بما فيهم الأطفال الصغار وغير السباحين. غير مناسبة لمن يعانون من رهاب شديد للأماكن الضيقة.",
    },
    whatToBring: {
      en: ["Camera (no flash near portholes — it reflects)", "Light clothing", "Water bottle"],
      ar: ["كاميرا (ممنوع الفلاش بالقرب من الفتحات — ينعكس)", "ملابس خفيفة", "زجاجة ماء"],
    },
    importantInfo: {
      en: [
        "The Sindbad submarine descends to approximately 22 metres below the surface.",
        "The entire experience is dry — no water entry required.",
        "English audio commentary explains the marine species visible through the portholes.",
        "The submarine holds up to 44 passengers; the underwater experience lasts approximately 45 minutes.",
        "Not suitable for guests with severe claustrophobia.",
      ],
      ar: [
        "تنزل غواصة سندباد إلى عمق نحو 22 متراً تحت السطح.",
        "التجربة بأكملها جافة — لا يلزم الدخول إلى الماء.",
        "التعليق الصوتي المسجّل باللغة الإنجليزية يشرح الأنواع البحرية المرئية عبر الفتحات.",
        "الغواصة تستوعب حتى 44 راكباً؛ التجربة تحت الماء تستمر نحو 45 دقيقة.",
        "غير مناسبة لمن يعانون من رهاب شديد للأماكن الضيقة.",
      ],
    },
    highlights: [
      "Underwater submarine ride along Hurghada's coast",
      "View Red Sea marine life through large portholes",
      "See coral reefs, lionfish, and exotic species",
      "English audio commentary throughout",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Submarine ride", "English audio commentary", "Hotel pickup and drop-off", "Soft drink"],
    excludes: ["Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "22 Metres Down — The Sindbad Submarine Experience",
          description:
            "The Sindbad submarine offers a completely dry, fully climate-controlled encounter with the Red Sea's underwater world at depths that snorkelers and many casual divers never reach — approximately 22 metres, deep enough for the water to take on that extraordinary deep-sea blue. The experience begins with a short boat transfer to the submarine, where passengers descend a ladder and take their seats beside large circular portholes. The English audio commentary begins almost immediately, identifying the species appearing outside the windows.",
          steps: [
            { time: "09:00", description: "Hotel pickup. Transfer to the Sindbad submarine station at the Sindbad resort on the Hurghada waterfront." },
            { time: "09:30", description: "Arrive at the pier. Brief safety orientation. Board the small surface boat for the short transfer to the submarine." },
            { time: "09:45", description: "Arrive at the submarine. Descend the access ladder and take your seat beside a porthole. A soft drink is served." },
            { time: "10:00", description: "The submarine begins its descent to approximately 22 metres. The water outside changes colour as you go deeper." },
            { time: "10:05", description: "Reef-level cruising. The audio commentary begins identifying species: coral formations, lionfish, schools of anthias, butterflyfish, sea turtles, moray eels, and reef sharks." },
            { time: "10:45", description: "The submarine ascends. The water lightens again as you return to the surface." },
            { time: "10:50", description: "Exit the submarine. Board the surface boat back to the pier." },
            { time: "11:00", description: "Transfer back to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "22 متراً تحت السطح — تجربة غواصة سندباد",
          description:
            "تقدم غواصة سندباد لقاءً جافاً تماماً ومكيّف الهواء بالكامل مع العالم تحت الماء للبحر الأحمر على أعماق لا يصلها الغاطسون وكثير من الغائصين غير المتمرسين — نحو 22 متراً، عمق كافٍ ليتخذ الماء ذلك الأزرق العميق الاستثنائي. التعليق الصوتي الإنجليزي يبدأ تحديد الأنواع التي تظهر خارج الفتحات تقريباً فور البدء.",
          steps: [
            { time: "09:00", description: "الاستقبال من الفندق. الانتقال إلى محطة غواصة سندباد في منتجع سندباد على شاطئ الغردقة." },
            { time: "09:30", description: "الوصول إلى الرصيف. توجيه موجز للسلامة. الصعود إلى القارب السطحي الصغير للانتقال القصير إلى الغواصة." },
            { time: "09:45", description: "الوصول إلى الغواصة. النزول عبر سلّم الوصول وأخذ مقعدك بجانب فتحة. يُقدَّم مشروب غازي." },
            { time: "10:00", description: "تبدأ الغواصة نزولها إلى عمق نحو 22 متراً. يتغير لون الماء خارج الفتحات مع العمق." },
            { time: "10:05", description: "الإبحار على مستوى الشعاب. يبدأ التعليق الصوتي في تحديد الأنواع: تكوينات المرجان وأسماك الأسد والأنثياس وأسماك الفراشة والسلاحف وثعابين البحر وأسماك القرش." },
            { time: "10:45", description: "تصعد الغواصة. يتفتح الماء مجدداً مع العودة إلى السطح." },
            { time: "10:50", description: "الخروج من الغواصة. الصعود إلى القارب السطحي للعودة إلى الرصيف." },
            { time: "11:00", description: "الانتقال العائد إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 22 ──────────────────────────────────────────────────────────────
  {
    title: "El Gouna Boat Trip & Water Activities",
    titleAr: "رحلة قارب وأنشطة مائية في الجونة",
    slug: "el-gouna-boat-trip-water-activities-hurghada",
    description:
      "Discover El Gouna, Egypt's most glamorous resort town often called the Venice of Egypt, on this unforgettable boat trip and water activities day from Hurghada. Cruise across the Red Sea to reach El Gouna's stunning lagoons and drop anchor for a full day of fun — snorkel over vibrant coral reefs, try banana boating, go fishing, or hop on a semi-submarine for a peek beneath the waves. A buffet lunch is served onboard.",
    descriptionAr:
      "اكتشف الجونة، أكثر مدن المنتجعات المصرية أناقة والمعروفة بـ 'البندقية المصرية'، في هذه الرحلة البحرية اليومية مع أنشطة مائية من الغردقة. أبحر عبر البحر الأحمر للوصول إلى بحيرات الجونة الرائعة وأرسِ المرساة ليوم كامل من المتعة.",
    category: "Boat tour",
    price: { original: 76.15, discounted: null, currency: "USD" },
    duration: "8 hours 30 minutes",
    language: ["English"],
    rating: { score: 0, reviews: 0 },
    travellers: 9,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 30,
    availableTimes: ["08:30"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Transfer to the marina is included.",
      ar: "بهو فندقك في الغردقة. الانتقال إلى المرسى مشمول.",
    },
    accessibility: {
      en: "The boat is accessible with a ladder. Snorkeling requires basic swimming comfort; life jackets available. Banana boat is optional. Non-swimmers can still enjoy the day onboard.",
      ar: "القارب يمكن الوصول إليه بسلّم. الغطس يتطلب الارتياح الأساسي بالسباحة؛ سترات النجاة متوفرة. القارب الموزي اختياري.",
    },
    whatToBring: {
      en: ["Swimwear", "Towel", "Reef-safe sunscreen", "Hat", "Camera", "Change of clothes"],
      ar: ["ملابس سباحة", "منشفة", "كريم واقٍ صديق للشعاب", "قبعة", "كاميرا", "ملابس للتبديل"],
    },
    importantInfo: {
      en: [
        "Buffet lunch is included onboard.",
        "El Gouna is approximately 30 km north of Hurghada — reachable by boat in about 45 minutes.",
        "Dolphin sightings en route are not guaranteed but are a regular occurrence.",
        "Snorkeling equipment, banana boat ride, and fishing equipment are all included.",
      ],
      ar: [
        "الغداء البوفيه مشمول على متن القارب.",
        "الجونة على بُعد نحو 30 كم شمال الغردقة — يمكن الوصول إليها بالقارب في نحو 45 دقيقة.",
        "رصد الدلافين على الطريق غير مضمون لكنه يحدث بانتظام.",
        "معدات الغطس والقارب الموزي ومعدات الصيد كلها مشمولة.",
      ],
    },
    highlights: [
      "Boat trip to the glamorous El Gouna resort",
      "Snorkeling, banana boating, and fishing",
      "Semi-submarine ride option",
      "Chance to spot wild dolphins en route",
      "Buffet lunch onboard included",
    ],
    includes: ["Boat trip", "Water activities", "Buffet lunch", "Hotel pickup and drop-off"],
    excludes: ["Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "El Gouna by Sea — Water Activities & the Venice of Egypt",
          description:
            "El Gouna is a private city built from scratch on a series of islands and lagoons on the Red Sea coast, 30 kilometres north of Hurghada. Experiencing it from the sea — as this trip does — is the best approach: the lagoon system, the boats, and the waterfront villas are all visible as the tour boat approaches from the south. Anchoring in the clear water off El Gouna gives access to reefs and water activities in a setting noticeably less crowded than Hurghada's main beach areas.",
          steps: [
            { time: "08:30", description: "Hotel pickup. Transfer to Hurghada Marina." },
            { time: "09:00", description: "Board the boat. Safety briefing and equipment overview. Distribute snorkeling gear." },
            { time: "09:15", description: "Depart Hurghada north toward El Gouna. Keep watch for dolphins en route — regularly spotted in the open water." },
            { time: "10:00", description: "Arrive off El Gouna. Drop anchor in the lagoon area." },
            { time: "10:15", description: "First snorkeling session. Enter the water and explore the reef." },
            { time: "11:30", description: "Banana boat ride — groups of 4-6 pulled behind the boat for approximately 15-20 minutes." },
            { time: "12:00", description: "Fishing session — light lines provided; catch and release." },
            { time: "13:00", description: "Buffet lunch served onboard. Relax on the deck." },
            { time: "14:00", description: "Semi-submarine option — partially submerged viewing platform with glass sides for those who prefer not to snorkel." },
            { time: "14:30", description: "Second snorkeling session or free time on the boat." },
            { time: "16:30", description: "Depart El Gouna for the return sail to Hurghada." },
            { time: "17:15", description: "Arrive at Hurghada Marina. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "الجونة من البحر — أنشطة مائية وبندقية مصر",
          description:
            "الجونة مدينة خاصة بُنيت من الصفر على سلسلة من الجزر والبحيرات، 30 كيلومتراً شمال الغردقة. اختبارها من البحر — كما تفعل هذه الرحلة — أفضل الطرق: نظام البحيرة والقوارب والفيلات على الشاطئ كلها مرئية مع اقتراب القارب من الجنوب.",
          steps: [
            { time: "08:30", description: "الاستقبال من الفندق. الانتقال إلى مرسى الغردقة." },
            { time: "09:00", description: "الصعود إلى القارب. إحاطة السلامة ونظرة عامة على المعدات. توزيع معدات الغطس." },
            { time: "09:15", description: "المغادرة من الغردقة شمالاً نحو الجونة. ترقُّب الدلافين على الطريق." },
            { time: "10:00", description: "الوصول قبالة الجونة. إرساء المرساة في منطقة البحيرة." },
            { time: "10:15", description: "جلسة الغطس الأولى. الدخول إلى الماء واستكشاف الشعاب." },
            { time: "11:30", description: "ركوبة القارب الموزي — مجموعات من 4-6 لنحو 15-20 دقيقة." },
            { time: "12:00", description: "جلسة الصيد — أسطر خفيفة مقدَّمة؛ صيد وإطلاق." },
            { time: "13:00", description: "غداء البوفيه يُقدَّم على متن القارب. الاسترخاء على السطح." },
            { time: "14:00", description: "خيار الغواصة شبه المائية — منصة مشاهدة مغمورة جزئياً بجوانب زجاجية لمن يفضل عدم الغطس." },
            { time: "14:30", description: "جلسة الغطس الثانية أو وقت حر على القارب." },
            { time: "16:30", description: "المغادرة من الجونة للإبحار العائد إلى الغردقة." },
            { time: "17:15", description: "الوصول إلى مرسى الغردقة. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 23 ──────────────────────────────────────────────────────────────
  {
    title: "Utopia Island Excursion",
    titleAr: "رحلة جزيرة يوتوبيا",
    slug: "utopia-island-excursion-hurghada",
    description:
      "Spend a dreamy day on Utopia Island, a private paradise island in the Red Sea offering some of the finest snorkeling, swimming, and beach relaxation in the Hurghada region. The island's crystal-clear waters and thriving coral reefs are home to a dazzling variety of tropical fish, rays, and sea turtles, making it one of the most rewarding snorkeling spots on the Egyptian coast.",
    descriptionAr:
      "أمضِ يوماً حالماً في جزيرة يوتوبيا، جزيرة خاصة في البحر الأحمر تقدم بعضاً من أفضل تجارب الغطس والسباحة والاسترخاء على الشاطئ في منطقة الغردقة. مياه الجزيرة الصافية وشعابها المرجانية المزدهرة موطن لمجموعة رائعة من الأسماك الاستوائية والراي والسلاحف البحرية.",
    category: "Day trip",
    price: { original: 64.43, discounted: null, currency: "USD" },
    duration: "8 hours 30 minutes",
    language: ["English"],
    rating: { score: 8.0, reviews: 3 },
    travellers: 159,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 30,
    availableTimes: ["08:30"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Transfer to the marina is included.",
      ar: "بهو فندقك في الغردقة. الانتقال إلى المرسى مشمول.",
    },
    accessibility: {
      en: "Island access by boat with a ladder. Snorkeling requires basic swimming comfort; life jackets available. The island has sandy beaches and flat access areas. Not suitable for wheelchairs.",
      ar: "الوصول إلى الجزيرة بالقارب مع سلّم. الغطس يتطلب الارتياح الأساسي بالسباحة؛ سترات النجاة متوفرة. الجزيرة بها شواطئ رملية ومناطق وصول مستوية. غير مناسبة لكراسي الحركة.",
    },
    whatToBring: {
      en: ["Swimwear", "Towel", "Reef-safe sunscreen", "Hat", "Snacks and water (meals not included)", "Change of clothes"],
      ar: ["ملابس سباحة", "منشفة", "كريم واقٍ صديق للشعاب", "قبعة", "وجبات خفيفة وماء (الوجبات غير مشمولة)", "ملابس للتبديل"],
    },
    importantInfo: {
      en: [
        "Utopia Island is a private island — access is managed and the site is not overcrowded.",
        "Snorkeling equipment is included.",
        "Meals are not included — bring your own food or purchase on the island.",
        "Water sports on the island may be available at extra cost (jet ski, parasailing, etc.).",
        "Sea turtles and rays are frequently sighted in the island's waters.",
      ],
      ar: [
        "جزيرة يوتوبيا جزيرة خاصة — الوصول مُدار والموقع ليس مزدحماً.",
        "معدات الغطس مشمولة.",
        "الوجبات غير مشمولة — أحضر طعامك الخاص أو اشترِ في الجزيرة.",
        "الرياضات المائية في الجزيرة قد تكون متوفرة بتكلفة إضافية (جت سكي، باراسيلنج، إلخ).",
        "السلاحف البحرية والراي تُرصد بشكل متكرر في مياه الجزيرة.",
      ],
    },
    highlights: [
      "Full day on the private Utopia Island",
      "Snorkeling in pristine coral reefs",
      "Spot sea turtles, rays, and tropical fish",
      "Water sports and beach relaxation",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Boat trip", "Island access", "Snorkeling equipment", "Hotel pickup and drop-off"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Utopia Island — A Private Red Sea Paradise",
          description:
            "Utopia Island is a privately managed island that manages something increasingly rare on the Red Sea coast: controlled access and limited numbers, which means the reefs remain in genuinely good condition and the beach never feels overcrowded. The boat journey from Hurghada takes approximately 30-40 minutes, and the island's layout — a crescent of white sand around a protected bay with healthy coral beginning just metres from the shoreline — makes it one of the most immediately accessible snorkeling destinations in the Hurghada area.",
          steps: [
            { time: "08:30", description: "Hotel pickup. Transfer to Hurghada Marina." },
            { time: "09:00", description: "Board the boat. Safety briefing. Distribute snorkeling equipment." },
            { time: "09:15", description: "Depart Hurghada for Utopia Island — approximately 30-40 minutes." },
            { time: "10:00", description: "Arrive at Utopia Island. Disembark and explore the beach. Brief on island rules." },
            { time: "10:15", description: "First snorkeling session. The reef begins immediately offshore — explore the coral, tropical fish, rays, and sea turtles that frequent the island's waters." },
            { time: "12:00", description: "Lunch break on the beach. Bring your own food or purchase on the island." },
            { time: "13:00", description: "Second snorkeling session or free beach time. Optional water sports (at extra cost)." },
            { time: "15:30", description: "Board the boat for the return journey to Hurghada." },
            { time: "16:30", description: "Arrive at Hurghada Marina. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "جزيرة يوتوبيا — جنة خاصة في البحر الأحمر",
          description:
            "جزيرة يوتوبيا جزيرة مُدارة بشكل خاص تحقق شيئاً نادراً بشكل متزايد على ساحل البحر الأحمر: وصول مُتحكَّم به وأعداد محدودة، مما يعني أن الشعاب تبقى في حالة جيدة حقاً والشاطئ لا يبدو مزدحماً. رحلة القارب من الغردقة تستغرق نحو 30-40 دقيقة.",
          steps: [
            { time: "08:30", description: "الاستقبال من الفندق. الانتقال إلى مرسى الغردقة." },
            { time: "09:00", description: "الصعود إلى القارب. إحاطة السلامة. توزيع معدات الغطس." },
            { time: "09:15", description: "المغادرة من الغردقة إلى جزيرة يوتوبيا — نحو 30-40 دقيقة." },
            { time: "10:00", description: "الوصول إلى جزيرة يوتوبيا. النزول واستكشاف الشاطئ. إحاطة بقواعد الجزيرة." },
            { time: "10:15", description: "جلسة الغطس الأولى. تبدأ الشعاب مباشرةً بالقرب من الشاطئ — استكشاف المرجان والأسماك الاستوائية والراي والسلاحف البحرية." },
            { time: "12:00", description: "استراحة الغداء على الشاطئ. أحضر طعامك الخاص أو اشترِ في الجزيرة." },
            { time: "13:00", description: "جلسة الغطس الثانية أو وقت حر على الشاطئ. رياضات مائية اختيارية (بتكلفة إضافية)." },
            { time: "15:30", description: "الصعود إلى القارب للرحلة العائدة إلى الغردقة." },
            { time: "16:30", description: "الوصول إلى مرسى الغردقة. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 24 (Orange Bay Pirate Cruise) ───────────────────────────────────
  {
    title: "Orange Bay Pirate Cruise",
    titleAr: "رحلة القراصنة إلى خليج أورانج",
    slug: "orange-bay-pirate-cruise-hurghada",
    description:
      "Ahoy! Set sail on a swashbuckling pirate cruise from Hurghada to the beautiful Orange Bay for a day of high-seas fun, snorkeling, and Red Sea adventures. Enjoy a lively atmosphere aboard the pirate-themed cruise ship as you sail to one of the most scenic and pristine bays on the Egyptian coast. Once anchored at Orange Bay, jump into the sparkling turquoise water to snorkel over the coral reefs before relaxing on the stunning beach.",
    descriptionAr:
      "أهلاً! أبحر في رحلة قراصنة مغامرة من الغردقة إلى خليج أورانج الجميل ليوم من المتعة والغطس ومغامرات البحر الأحمر. استمتع بالأجواء الحيوية على متن سفينة الرحلة ذات الطابع القرصاني وأنت تبحر إلى واحدة من أجمل الخلجان وأنقاها على الساحل المصري.",
    category: "Boat tour",
    price: { original: 35.00, discounted: null, currency: "USD" },
    duration: "8 hours",
    language: ["English"],
    rating: { score: 8.5, reviews: 18 },
    travellers: 280,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 50,
    availableTimes: ["08:30"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Transfer to the marina is included.",
      ar: "بهو فندقك في الغردقة. الانتقال إلى المرسى مشمول.",
    },
    accessibility: {
      en: "Snorkeling requires basic swimming comfort; life jackets available for non-confident swimmers. The pirate ship is a large vessel with easy boarding. Suitable for families with young children.",
      ar: "يتطلب الغطس الارتياح الأساسي بالسباحة؛ سترات النجاة متوفرة. السفينة القرصانية مركبة كبيرة بصعود سهل. مناسبة للعائلات مع الأطفال الصغار.",
    },
    whatToBring: {
      en: ["Swimwear", "Towel", "Reef-safe sunscreen", "Hat", "Camera", "Light change of clothes"],
      ar: ["ملابس سباحة", "منشفة", "كريم واقٍ صديق للشعاب", "قبعة", "كاميرا", "ملابس خفيفة للتبديل"],
    },
    importantInfo: {
      en: [
        "Snorkeling equipment is provided onboard.",
        "Light refreshments are provided during the cruise.",
        "Meals are not included — bring your own food or purchase onboard.",
        "The pirate cruise is a shared experience with other passengers — ideal for groups and families.",
        "Orange Bay is a protected area — touching or standing on coral is strictly prohibited.",
      ],
      ar: [
        "معدات الغطس مقدَّمة على متن القارب.",
        "مرطبات خفيفة تُقدَّم أثناء الرحلة البحرية.",
        "الوجبات غير مشمولة — أحضر طعامك أو اشترِ على متن القارب.",
        "رحلة القراصنة تجربة مشتركة مع ركاب آخرين — مثالية للمجموعات والعائلات.",
        "خليج أورانج منطقة محمية — لمس الشعاب أو الوقوف عليها محظور صراحةً.",
      ],
    },
    highlights: [
      "Pirate-themed cruise to Orange Bay",
      "Snorkeling over pristine coral reefs",
      "Relax on a beautiful Red Sea beach",
      "Fun atmosphere with entertainment onboard",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Boat trip", "Snorkeling equipment", "Hotel pickup and drop-off", "Light refreshments"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Ahoy! The Orange Bay Pirate Cruise",
          description:
            "The pirate cruise is the most fun-focused boat trip available from Hurghada — a large pirate-themed ship with a lively onboard atmosphere, live entertainment, and the same destination as the standard Orange Bay trips: one of the most beautiful and protected bays on the Egyptian Red Sea coast. It works particularly well for families, groups of friends, and anyone who wants the Orange Bay snorkeling experience with a festive twist. Once anchored, the serious beauty of the place takes over: pristine white sand, turquoise water, and healthy coral just metres from the shore.",
          steps: [
            { time: "08:30", description: "Hotel pickup. Transfer to Hurghada Marina." },
            { time: "09:00", description: "Board the pirate cruise ship. Meet the crew and fellow passengers. Safety briefing. Snorkeling equipment distributed." },
            { time: "09:15", description: "Depart the marina. The pirate ship sails south toward Orange Bay — approximately 1 hour. Entertainment and music onboard during the journey." },
            { time: "10:15", description: "Arrive at Orange Bay. Drop anchor. The crew briefs on the reef rules." },
            { time: "10:30", description: "First snorkeling session. Enter the water and explore the coral reef — parrotfish, angelfish, sea turtles, and moray eels commonly spotted." },
            { time: "12:00", description: "Return to the ship or relax on the beach. Light refreshments served onboard." },
            { time: "13:00", description: "Second snorkeling session or free beach time." },
            { time: "15:00", description: "Board the pirate ship for the return sail to Hurghada." },
            { time: "16:00", description: "Arrive at Hurghada Marina. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "أهلاً! رحلة القراصنة إلى خليج أورانج",
          description:
            "رحلة القراصنة هي أكثر رحلات القوارب تركيزاً على المتعة من الغردقة — سفينة كبيرة ذات طابع قرصاني بأجواء حيوية على متنها وترفيه حي ونفس الوجهة كرحلات خليج أورانج القياسية: واحدة من أجمل الخلجان المحمية على ساحل البحر الأحمر المصري. تعمل بشكل خاص للعائلات ومجموعات الأصدقاء. بمجرد الإرساء يتولى الجمال الحقيقي للمكان: رمال بيضاء بكر ومياه فيروزية ومرجان صحي على بُعد أمتار من الشاطئ.",
          steps: [
            { time: "08:30", description: "الاستقبال من الفندق. الانتقال إلى مرسى الغردقة." },
            { time: "09:00", description: "الصعود إلى سفينة رحلة القراصنة. التعرف على الطاقم والركاب. إحاطة السلامة. توزيع معدات الغطس." },
            { time: "09:15", description: "المغادرة من المرسى. السفينة القرصانية تبحر جنوباً نحو خليج أورانج — نحو ساعة. ترفيه وموسيقى على متنها أثناء الرحلة." },
            { time: "10:15", description: "الوصول إلى خليج أورانج. إرساء المرساة. الطاقم يعرّف بقواعد الشعاب." },
            { time: "10:30", description: "جلسة الغطس الأولى. الدخول إلى الماء واستكشاف الشعاب المرجانية — أسماك الببغاء والملاك والسلاحف البحرية وثعابين البحر تُرصد بشكل شائع." },
            { time: "12:00", description: "العودة إلى السفينة أو الاسترخاء على الشاطئ. تُقدَّم مرطبات خفيفة على متن القارب." },
            { time: "13:00", description: "جلسة الغطس الثانية أو وقت حر على الشاطئ." },
            { time: "15:00", description: "الصعود إلى السفينة القرصانية للإبحار العائد إلى الغردقة." },
            { time: "16:00", description: "الوصول إلى مرسى الغردقة. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 25 (El Gouna City Tour) ─────────────────────────────────────────
  {
    title: "El Gouna City Tour",
    titleAr: "جولة مدينة الجونة",
    slug: "el-gouna-city-tour-hurghada",
    description:
      "Discover El Gouna, one of Egypt's most unique and beautifully designed resort cities, on this dedicated guided city tour from Hurghada. Built across a series of islands and lagoons on the Red Sea coast, El Gouna has its own airport, marina, golf course, and a charming old town. Enjoy a traditional felucca ride through the city's scenic waterways, tour the vibrant downtown and harbor area, and take in the stunning views of the lagoons and Red Sea.",
    descriptionAr:
      "اكتشف الجونة، إحدى أكثر مدن المنتجعات المصرية فرادة وجمالاً في التصميم، في هذه الجولة المدينية المصحوبة بمرشد من الغردقة. مبنية عبر سلسلة من الجزر والبحيرات على ساحل البحر الأحمر، تمتلك الجونة مطارها الخاص ومرساها وملعب غولف وبلدة قديمة ساحرة. استمتع برحلة فلوكة تقليدية عبر الممرات المائية المنظرية للمدينة.",
    category: "Guided tours and free tours",
    price: { original: 55.00, discounted: null, currency: "USD" },
    duration: "6 hours",
    language: ["English"],
    rating: { score: 8.0, reviews: 14 },
    travellers: 175,
    freeCancellation: true,
    minAge: 5,
    maxGroupSize: 15,
    availableTimes: ["09:00", "10:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada. Transport to El Gouna and return is included.",
      ar: "بهو فندقك في الغردقة. الانتقال إلى الجونة والعودة مشمول.",
    },
    accessibility: {
      en: "The city tour involves walking on flat paved streets. The felucca requires stepping carefully into a low boat. Suitable for most guests; not suitable for wheelchairs.",
      ar: "جولة المدينة تتضمن المشي على شوارع مستوية معبدة. الفلوكة تتطلب الخطو بحذر في قارب منخفض. مناسبة لمعظم الضيوف؛ غير مناسبة لكراسي الحركة.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun hat and sunscreen", "Camera", "Small amount of cash for any optional purchases"],
      ar: ["حذاء مريح للمشي", "قبعة للشمس وكريم واقٍ", "كاميرا", "مبلغ صغير من النقد لأي مشتريات اختيارية"],
    },
    importantInfo: {
      en: [
        "Hotel pickup from Hurghada and return transport is included.",
        "The felucca ride through El Gouna's lagoons is included.",
        "Meals are not included — El Gouna has excellent restaurants if you wish to eat there.",
        "El Gouna is approximately 30 km north of Hurghada — the drive takes about 30-40 minutes.",
      ],
      ar: [
        "الاستقبال من الفندق في الغردقة وانتقال العودة مشمول.",
        "جولة الفلوكة عبر بحيرات الجونة مشمولة.",
        "الوجبات غير مشمولة — في الجونة مطاعم ممتازة إذا رغبت في تناول الطعام هناك.",
        "الجونة على بُعد نحو 30 كم شمال الغردقة — القيادة تستغرق نحو 30-40 دقيقة.",
      ],
    },
    highlights: [
      "Guided tour of the unique El Gouna resort city",
      "Traditional felucca ride through the lagoons",
      "Visit the harbor and downtown area",
      "Stunning views of the Red Sea lagoons",
      "Hotel pickup and drop-off from Hurghada included",
    ],
    includes: ["Guide", "Felucca ride", "Transport from Hurghada", "Hotel pickup and drop-off"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "El Gouna — The Venice of Egypt",
          description:
            "El Gouna is one of the most unusual and successfully planned resort cities in the world — a private development built across a series of islands and lagoons on the Red Sea coast, 30 km north of Hurghada, with its own airport, hospital, golf course, and charming walkable downtown. Unlike the resort strip of Hurghada, El Gouna has a genuine sense of place: low-rise architecture in a faux-Mediterranean style, waterway-lined streets, a lively marina, and a population that lives here year-round rather than just passing through. The city tour explores all of this on foot and by felucca, with your guide explaining the city's unusual origin story and the way it has evolved since the early 1990s.",
          steps: [
            { time: "09:00", description: "Hotel pickup in Hurghada. Drive north to El Gouna — approximately 30-40 minutes." },
            { time: "09:45", description: "Arrive in El Gouna. Begin the walking tour of downtown — the central square, the market area, the boutique shops, and the local restaurants lining the waterway." },
            { time: "10:30", description: "Board a traditional felucca for a 45-minute ride through El Gouna's lagoon system. Your guide explains the city's layout as you glide through the waterways, past residential islands and the marina area." },
            { time: "11:15", description: "Arrive at El Gouna's main marina. Walk through the harbor — the yachts, the waterfront restaurants, and the views of the Red Sea stretching south toward Hurghada." },
            { time: "12:00", description: "Free time in El Gouna — optional lunch at one of the marina restaurants (at your own expense), or continue exploring the town independently." },
            { time: "13:30", description: "Depart El Gouna for the return drive to Hurghada." },
            { time: "14:15", description: "Arrive back in Hurghada. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "الجونة — بندقية مصر",
          description:
            "الجونة واحدة من أكثر مدن المنتجعات المخططة غرابة ونجاحاً في العالم — مشروع خاص مبني عبر سلسلة من الجزر والبحيرات على ساحل البحر الأحمر، 30 كم شمال الغردقة، مع مطارها ومستشفاها وملعب غولفها ووسط مدينتها القابل للمشي والمليء بالحياة. على عكس شريط المنتجعات في الغردقة، للجونة شعور حقيقي بالمكان: معمار منخفض الارتفاع، وشوارع مبطّنة بالممرات المائية، ومرسى حيوي، وسكان يعيشون هنا على مدار العام.",
          steps: [
            { time: "09:00", description: "الاستقبال من الفندق في الغردقة. القيادة شمالاً إلى الجونة — نحو 30-40 دقيقة." },
            { time: "09:45", description: "الوصول إلى الجونة. بدء الجولة السيرية في وسط المدينة — الميدان المركزي ومنطقة السوق والمحلات التجارية والمطاعم المحلية على طول الممر المائي." },
            { time: "10:30", description: "الصعود إلى فلوكة تقليدية لجولة مدتها 45 دقيقة عبر نظام بحيرات الجونة. مرشدك يشرح تخطيط المدينة وأنت تنزلق عبر الممرات المائية." },
            { time: "11:15", description: "الوصول إلى مرسى الجونة الرئيسي. المشية عبر الميناء — اليخوت والمطاعم على الواجهة المائية وإطلالات البحر الأحمر الممتدة جنوباً نحو الغردقة." },
            { time: "12:00", description: "وقت حر في الجونة — غداء اختياري في أحد مطاعم المرسى (على نفقتك الخاصة)، أو الاستمرار في استكشاف المدينة بشكل مستقل." },
            { time: "13:30", description: "المغادرة من الجونة للقيادة العائدة إلى الغردقة." },
            { time: "14:15", description: "الوصول إلى الغردقة. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
  },

  // ─── TOUR 26 (Red Sea 8-Day All-Inclusive) ────────────────────────────────
  {
    title: "Red Sea 8-Day All-Inclusive Tour from Hurghada",
    titleAr: "باقة البحر الأحمر 8 أيام شاملة من الغردقة",
    slug: "red-sea-8-day-all-inclusive-tour-hurghada",
    description:
      "Immerse yourself fully in the magic of Hurghada and the Red Sea on this comprehensive 8-day all-inclusive tour package. From exploring the desert on a 4x4 safari and quad bikes to snorkeling over world-class coral reefs, swimming with dolphins, and discovering the city's cultural highlights — this package covers the very best of what Hurghada has to offer. All accommodation, meals, activities, and transfers are included.",
    descriptionAr:
      "انغمس كلياً في سحر الغردقة والبحر الأحمر في هذه الباقة السياحية الشاملة التي تمتد 8 أيام. من استكشاف الصحراء على سيارة 4x4 ودراجات رباعية إلى الغطس على شعاب مرجانية عالمية المستوى والسباحة مع الدلافين واكتشاف معالم المدينة الثقافية — تغطي هذه الباقة أفضل ما تقدمه الغردقة.",
    category: "Tour packages",
    price: { original: 850.00, discounted: null, currency: "USD" },
    duration: "8 days",
    language: ["English"],
    rating: { score: 8.0, reviews: 12 },
    travellers: 95,
    freeCancellation: false,
    minAge: 5,
    maxGroupSize: 16,
    availableTimes: ["08:00"],
    meetingPoint: {
      en: "Your hotel lobby in Hurghada on Day 1. The guide will meet you to begin the tour.",
      ar: "بهو فندقك في الغردقة في اليوم الأول. سيلتقي بك المرشد لبدء الجولة.",
    },
    accessibility: {
      en: "This package includes activities with varying accessibility. The desert safari and quad bikes are not suitable for guests with back problems or pregnancy. The marine activities are generally accessible. Consult at booking for specific requirements.",
      ar: "تشمل هذه الباقة أنشطة بإمكانية وصول متفاوتة. سفاري الصحراء والدراجات الرباعية غير مناسبة لمن يعانون من مشاكل في الظهر أو الحوامل. الأنشطة البحرية في معظمها متاحة.",
    },
    whatToBring: {
      en: ["Comfortable clothing for all 8 days", "Swimwear for daily water activities", "Closed-toe shoes for desert days", "High SPF sunscreen", "Camera", "Personal medications"],
      ar: ["ملابس مريحة لكامل الـ 8 أيام", "ملابس سباحة للأنشطة المائية اليومية", "حذاء مغلق الأصابع لأيام الصحراء", "واقٍ من الشمس بعامل حماية عالٍ", "كاميرا", "أدوية شخصية"],
    },
    importantInfo: {
      en: [
        "7 nights hotel accommodation is included.",
        "All meals (breakfast, lunch, dinner) are included throughout the 8 days.",
        "All activities as per the itinerary are included.",
        "International flights to and from Hurghada are not included.",
        "Tipping for guides and drivers is customary and greatly appreciated.",
        "This package is non-refundable — travel insurance is strongly recommended.",
      ],
      ar: [
        "إقامة 7 ليالٍ في الفندق مشمولة.",
        "جميع الوجبات (إفطار وغداء وعشاء) مشمولة طوال الـ 8 أيام.",
        "جميع الأنشطة وفق البرنامج مشمولة.",
        "الرحلات الجوية الدولية من وإلى الغردقة غير مشمولة.",
        "البقشيش للمرشدين والسائقين متعارف عليه وموضع تقدير كبير.",
        "هذه الباقة غير قابلة للاسترداد — يُوصى بشدة بتأمين السفر.",
      ],
    },
    highlights: [
      "8 days all-inclusive in Hurghada",
      "Desert safari and quad bike adventure",
      "Snorkeling and diving in the Red Sea",
      "Swim with dolphins excursion",
      "Guided city tour of Hurghada",
      "All accommodation and meals included",
    ],
    includes: [
      "7 nights hotel accommodation",
      "All meals (breakfast, lunch, dinner)",
      "All activities as per itinerary",
      "All transport and transfers",
      "English-speaking guide",
    ],
    excludes: ["International flights", "Travel insurance", "Tips", "Personal expenses", "Alcoholic drinks"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Arrival & City Orientation",
          description: "Arrive in Hurghada and settle into your hotel. After a welcome briefing with your guide, spend the afternoon on a guided city tour covering the Grand Mosque, the Coptic Church, El Dahar souk, and the fishermen's harbor.",
          steps: [
            { time: "10:00", description: "Hotel check-in and welcome briefing with your guide for the week ahead." },
            { time: "14:00", description: "Guided city tour — Grand Mosque, Coptic Church, El Dahar souk, and the fishermen's harbor." },
            { time: "17:30", description: "Return to hotel. Free evening." },
            { time: "19:30", description: "Dinner included at the hotel restaurant." },
          ],
        },
        {
          day: 2,
          title: "Giftun Island Snorkeling",
          description: "Full day at Giftun Island National Park — one of the finest snorkeling destinations in the Red Sea. Morning and afternoon snorkeling sessions, beach relaxation, and light refreshments onboard.",
          steps: [
            { time: "07:00", description: "Breakfast at the hotel." },
            { time: "08:30", description: "Transfer to the marina. Board the boat to Giftun Island." },
            { time: "10:30", description: "Arrive at Giftun. First snorkeling session — coral reefs, sea turtles, and tropical fish." },
            { time: "12:30", description: "Lunch included onboard." },
            { time: "14:00", description: "Second snorkeling session and beach relaxation." },
            { time: "17:00", description: "Return to Hurghada Marina. Transfer to hotel." },
            { time: "19:30", description: "Dinner included." },
          ],
        },
        {
          day: 3,
          title: "Desert Safari & Bedouin Evening",
          description: "Afternoon 4x4 desert safari followed by a traditional Bedouin evening with camel ride, sunset, dinner under the stars, and traditional music.",
          steps: [
            { time: "07:00", description: "Breakfast at the hotel." },
            { time: "09:00", description: "Free morning — optional beach time or hotel pool." },
            { time: "15:00", description: "Hotel pickup for the desert safari." },
            { time: "15:30", description: "4x4 off-road drive through the desert dunes." },
            { time: "16:30", description: "Arrive at Bedouin camp. Mint tea, camel ride, desert sunset." },
            { time: "18:30", description: "Bedouin dinner under the stars with traditional music." },
            { time: "20:30", description: "Return to hotel." },
          ],
        },
        {
          day: 4,
          title: "Swim with Dolphins at Dolphin House",
          description: "Full-day boat trip to Dolphin House to swim with wild spinner dolphins, followed by snorkeling over the reef and a banana boat ride.",
          steps: [
            { time: "07:00", description: "Breakfast at the hotel." },
            { time: "08:00", description: "Transfer to the marina." },
            { time: "09:45", description: "Arrive at Dolphin House. Swim with the wild spinner dolphin pod." },
            { time: "10:45", description: "Snorkeling session over the reef." },
            { time: "12:00", description: "Banana boat ride and light refreshments." },
            { time: "14:30", description: "Return to Hurghada. Transfer to hotel." },
            { time: "19:30", description: "Dinner included." },
          ],
        },
        {
          day: 5,
          title: "Beginner Scuba Diving",
          description: "A morning of beginner scuba diving — pool briefing, shallow water practice, and two open-water dives on Hurghada's reef sites with a certified instructor.",
          steps: [
            { time: "07:00", description: "Breakfast at the hotel." },
            { time: "08:00", description: "Transfer to the dive centre. Equipment briefing and pool practice." },
            { time: "10:00", description: "Board the dive boat. First open-water dive on the reef — maximum 6 metres." },
            { time: "11:30", description: "Surface interval with refreshments." },
            { time: "12:15", description: "Second dive at a different reef site." },
            { time: "14:00", description: "Return to the marina. Transfer to hotel." },
            { time: "19:30", description: "Dinner included." },
          ],
        },
        {
          day: 6,
          title: "Quad Bike Safari & Horseback Riding",
          description: "Morning quad bike desert ride followed by an afternoon horseback ride through the desert and along the beach.",
          steps: [
            { time: "07:00", description: "Breakfast at the hotel." },
            { time: "09:00", description: "Transfer to the desert base camp. Quad bike safari — 45-minute desert circuit." },
            { time: "11:00", description: "Return to hotel. Lunch included." },
            { time: "14:00", description: "Transfer to the riding stables. Horseback ride through the desert and along the beach shoreline." },
            { time: "17:00", description: "Return to hotel." },
            { time: "19:30", description: "Dinner included." },
          ],
        },
        {
          day: 7,
          title: "Orange Bay Boat Day",
          description: "Full day boat trip to Orange Bay — snorkeling over the pristine protected reef, relaxing on the white sand beach, and swimming in the turquoise Red Sea.",
          steps: [
            { time: "07:00", description: "Breakfast at the hotel." },
            { time: "08:30", description: "Transfer to the marina. Board the boat to Orange Bay." },
            { time: "10:15", description: "Arrive at Orange Bay. First snorkeling session." },
            { time: "12:00", description: "Beach relaxation. Lunch — bring your own or purchase onboard." },
            { time: "13:30", description: "Second snorkeling session." },
            { time: "15:30", description: "Return to Hurghada Marina. Transfer to hotel." },
            { time: "19:30", description: "Final dinner included. Farewell evening." },
          ],
        },
        {
          day: 8,
          title: "Free Morning & Departure",
          description: "Free final morning in Hurghada — last dip in the sea, a walk along the corniche, or souvenir shopping in El Dahar — before your transfer to Hurghada Airport.",
          steps: [
            { time: "07:00", description: "Breakfast at the hotel." },
            { time: "08:00", description: "Free time — final swim, corniche walk, or shopping." },
            { time: "11:00", description: "Hotel checkout." },
            { time: "12:00", description: "Transfer to Hurghada International Airport. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "الوصول والتعرف على المدينة",
          description: "الوصول إلى الغردقة والاستقرار في الفندق. بعد جلسة ترحيب مع مرشدك، أمضِ بعد الظهر في جولة مدينة مصحوبة بمرشد تشمل المسجد الكبير والكنيسة القبطية وسوق الدهار وميناء الصيادين.",
          steps: [
            { time: "10:00", description: "تسجيل الوصول في الفندق وجلسة الترحيب مع مرشدك للأسبوع القادم." },
            { time: "14:00", description: "جولة المدينة المصحوبة بمرشد — المسجد الكبير والكنيسة القبطية وسوق الدهار وميناء الصيادين." },
            { time: "17:30", description: "العودة إلى الفندق. مساء حر." },
            { time: "19:30", description: "العشاء مشمول في مطعم الفندق." },
          ],
        },
        {
          day: 2,
          title: "غطس جزيرة جفتون",
          description: "يوم كامل في المتنزه الوطني لجزيرة جفتون — واحدة من أفضل وجهات الغطس في البحر الأحمر. جلستا غطس صباحاً وبعد الظهر واسترخاء على الشاطئ.",
          steps: [
            { time: "07:00", description: "الإفطار في الفندق." },
            { time: "08:30", description: "الانتقال إلى المرسى. الصعود إلى القارب إلى جزيرة جفتون." },
            { time: "10:30", description: "الوصول إلى جفتون. جلسة الغطس الأولى — شعاب مرجانية وسلاحف وأسماك استوائية." },
            { time: "12:30", description: "الغداء مشمول على متن القارب." },
            { time: "14:00", description: "جلسة الغطس الثانية والاسترخاء على الشاطئ." },
            { time: "17:00", description: "العودة إلى مرسى الغردقة. الانتقال إلى الفندق." },
            { time: "19:30", description: "العشاء مشمول." },
          ],
        },
        {
          day: 3,
          title: "سفاري الصحراء والسهرة البدوية",
          description: "سفاري صحراء بالدفع الرباعي بعد الظهر تليها سهرة بدوية تقليدية مع ركوب الجمال والغروب والعشاء تحت النجوم والموسيقى التقليدية.",
          steps: [
            { time: "07:00", description: "الإفطار في الفندق." },
            { time: "09:00", description: "وقت حر — وقت على الشاطئ أو حمام السباحة." },
            { time: "15:00", description: "الاستقبال من الفندق لسفاري الصحراء." },
            { time: "15:30", description: "قيادة الدفع الرباعي على الطرق الوعرة عبر كثبان الصحراء." },
            { time: "16:30", description: "الوصول إلى المعسكر البدوي. شاي بالنعناع وركوب الجمال وغروب الصحراء." },
            { time: "18:30", description: "عشاء البدو تحت النجوم مع الموسيقى التقليدية." },
            { time: "20:30", description: "العودة إلى الفندق." },
          ],
        },
        {
          day: 4,
          title: "السباحة مع الدلافين في بيت الدولفين",
          description: "رحلة بحرية يوم كامل إلى بيت الدولفين للسباحة مع دلافين سبينر البرية، تليها جلسة غطس على الشعاب وركوبة القارب الموزي.",
          steps: [
            { time: "07:00", description: "الإفطار في الفندق." },
            { time: "08:00", description: "الانتقال إلى المرسى." },
            { time: "09:45", description: "الوصول إلى بيت الدولفين. السباحة مع قطيع دلافين سبينر البرية." },
            { time: "10:45", description: "جلسة الغطس على الشعاب." },
            { time: "12:00", description: "ركوبة القارب الموزي ومرطبات خفيفة." },
            { time: "14:30", description: "العودة إلى الغردقة. الانتقال إلى الفندق." },
            { time: "19:30", description: "العشاء مشمول." },
          ],
        },
        {
          day: 5,
          title: "الغوص للمبتدئين",
          description: "صباح من الغوص للمبتدئين — إحاطة في الحوض وتدريب في المياه الضحلة وغوصتان في مياه مفتوحة على شعاب الغردقة مع مدرب معتمد.",
          steps: [
            { time: "07:00", description: "الإفطار في الفندق." },
            { time: "08:00", description: "الانتقال إلى مركز الغوص. إحاطة المعدات والتدريب في الحوض." },
            { time: "10:00", description: "الصعود إلى قارب الغوص. الغوصة الأولى في مياه مفتوحة على الشعاب — أقصى 6 أمتار." },
            { time: "11:30", description: "فترة استراحة سطحية مع مرطبات." },
            { time: "12:15", description: "الغوصة الثانية في موقع شعاب مختلف." },
            { time: "14:00", description: "العودة إلى المرسى. الانتقال إلى الفندق." },
            { time: "19:30", description: "العشاء مشمول." },
          ],
        },
        {
          day: 6,
          title: "سفاري الكواد وركوب الخيل",
          description: "جولة دراجة رباعية في الصحراء صباحاً تليها جولة ركوب خيل بعد الظهر عبر الصحراء وعلى طول الشاطئ.",
          steps: [
            { time: "07:00", description: "الإفطار في الفندق." },
            { time: "09:00", description: "الانتقال إلى معسكر القاعدة الصحراوية. جولة الدراجة الرباعية — جولة صحراوية 45 دقيقة." },
            { time: "11:00", description: "العودة إلى الفندق. الغداء مشمول." },
            { time: "14:00", description: "الانتقال إلى الاصطبلات. ركوب الخيل عبر الصحراء وعلى طول الشاطئ." },
            { time: "17:00", description: "العودة إلى الفندق." },
            { time: "19:30", description: "العشاء مشمول." },
          ],
        },
        {
          day: 7,
          title: "يوم قارب خليج أورانج",
          description: "رحلة قارب يوم كامل إلى خليج أورانج — الغطس على الشعاب المحمية البكر والاسترخاء على الشاطئ الرملي الأبيض والسباحة في البحر الأحمر الفيروزي.",
          steps: [
            { time: "07:00", description: "الإفطار في الفندق." },
            { time: "08:30", description: "الانتقال إلى المرسى. الصعود إلى القارب إلى خليج أورانج." },
            { time: "10:15", description: "الوصول إلى خليج أورانج. جلسة الغطس الأولى." },
            { time: "12:00", description: "الاسترخاء على الشاطئ. الغداء — أحضر طعامك أو اشترِ على متن القارب." },
            { time: "13:30", description: "جلسة الغطس الثانية." },
            { time: "15:30", description: "العودة إلى مرسى الغردقة. الانتقال إلى الفندق." },
            { time: "19:30", description: "العشاء الأخير مشمول. مساء وداع." },
          ],
        },
        {
          day: 8,
          title: "صباح حر والمغادرة",
          description: "صباح أخير حر في الغردقة — آخر غطسة في البحر أو مشية على الكورنيش أو تسوق في الدهار — قبل انتقالك إلى مطار الغردقة.",
          steps: [
            { time: "07:00", description: "الإفطار في الفندق." },
            { time: "08:00", description: "وقت حر — آخر سباحة أو مشية على الكورنيش أو تسوق." },
            { time: "11:00", description: "تسجيل المغادرة من الفندق." },
            { time: "12:00", description: "الانتقال إلى مطار الغردقة الدولي. نهاية الجولة." },
          ],
        },
      ],
    },
  },
];

export { cityData, toursData };

