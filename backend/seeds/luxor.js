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
    itinerary: [
      {
        step: 1,
        time: "07:00",
        title: "Hotel Pickup",
        titleAr: "الاستقبال من الفندق",
        description:
          "Your licensed guide meets you at your hotel lobby in Luxor. You'll board a comfortable, air-conditioned vehicle for the short drive across the Nile to the West Bank — the ancient city of the dead.",
        descriptionAr:
          "يلتقي بك مرشدك المرخص في بهو فندقك في الأقصر. ستستقل مركبة مريحة ومكيفة للتوجه إلى الضفة الغربية — مدينة الأموات القديمة.",
        duration: "20 minutes",
        location: "Your hotel, Luxor East Bank",
      },
      {
        step: 2,
        time: "07:30",
        title: "Colossi of Memnon",
        titleAr: "تمثالا ممنون",
        description:
          "Your first stop is the iconic twin statues of Pharaoh Amenhotep III, each standing 18 meters tall and weighing over 700 tons. These colossal quartzite figures once guarded the entrance to what was the largest mortuary temple ever built in Egypt — now lost to the ages. Your guide explains the legend of the 'singing Memnon,' the mysterious musical sound ancient visitors reported hearing at dawn.",
        descriptionAr:
          "محطتك الأولى هي التمثالان التوأمان الأيقونيان للفرعون أمنحتب الثالث، يبلغ ارتفاع كل منهما 18 متراً ووزنه أكثر من 700 طن. وقفت هذه الأرقام الضخمة من الكوارتزيت يوماً ما حارسةً لمدخل أكبر معبد جنائزي يُبنى في مصر. يشرح مرشدك أسطورة 'ممنون المغني'، الصوت الموسيقي الغامض الذي أفاد الزوار القدماء بسماعه عند الفجر.",
        duration: "20 minutes",
        location: "West Bank, Luxor",
        tips: "Great photo opportunity — the light is perfect in the early morning.",
        tipsAr: "فرصة رائعة للتصوير — الضوء مثالي في الصباح الباكر.",
      },
      {
        step: 3,
        time: "08:00",
        title: "Valley of the Kings",
        titleAr: "وادي الملوك",
        description:
          "Enter the world's most famous royal burial ground, where 63 royal tombs have been discovered cut deep into the limestone cliffs. Your entrance ticket includes access to 3 tombs of your choice (selected based on which are open that day). Your guide will lead you through elaborately painted chambers featuring vivid scenes from the Book of the Dead and the Book of Gates. You'll see the cartouche-covered walls of Ramses tombs and the dramatic descending passages that led to the burial chamber. The tomb of Tutankhamun is available for an additional fee of approximately $16.50.",
        descriptionAr:
          "ادخل إلى أشهر مقبرة ملكية في العالم، حيث اكتُشفت 63 مقبرة ملكية منحوتة في عمق المنحدرات الحجرية. تتضمن بطاقة الدخول الوصول إلى 3 مقابر من اختيارك. سيقودك مرشدك عبر غرف مزينة بلوحات حيوية من كتاب الموتى وكتاب البوابات. ستشاهد الجدران المغطاة بالخرطوش في مقابر رمسيس والممرات النازلة الدرامية.",
        duration: "90 minutes",
        location: "Valley of the Kings, West Bank",
        tips: "Photography is not allowed inside the tombs. Wear comfortable shoes as the passages can be steep. A small flashlight can be helpful.",
        tipsAr: "التصوير غير مسموح داخل المقابر. ارتدِ حذاءً مريحاً فالممرات قد تكون شديدة الانحدار.",
      },
      {
        step: 4,
        time: "09:30",
        title: "Valley of the Queens",
        titleAr: "وادي الملكات",
        description:
          "A short drive south brings you to the Valley of the Queens, where over 90 tombs of queens, princes, and royal family members were carved. The most celebrated tomb here is that of Queen Nefertari, the beloved wife of Ramses II, whose paintings are considered among the finest in all of Egypt. Your guide will explain the symbolism of the vivid hieroglyphic scenes covering the walls and ceilings.",
        descriptionAr:
          "قيادة قصيرة جنوباً تأخذك إلى وادي الملكات، حيث نُحتت أكثر من 90 مقبرة للملكات والأمراء وأفراد الأسرة المالكة. أشهر مقبرة هنا هي مقبرة الملكة نفرتاري، زوجة رمسيس الثاني الحبيبة، التي تُعدّ لوحاتها من أجمل اللوحات في مصر كلها.",
        duration: "45 minutes",
        location: "Valley of the Queens, West Bank",
        tips: "The tomb of Nefertari requires a separate ticket (~$30) and is strictly limited to protect the paintings. Book in advance.",
        tipsAr: "مقبرة نفرتاري تتطلب تذكرة منفصلة وتخضع لقيود صارمة لحماية اللوحات. احجز مسبقاً.",
      },
      {
        step: 5,
        time: "10:30",
        title: "Mortuary Temple of Hatshepsut (Deir el-Bahari)",
        titleAr: "معبد حتشبسوت الجنائزي (الدير البحري)",
        description:
          "One of the most architecturally unique monuments in all of Egypt awaits you at the base of dramatic limestone cliffs. Built for Egypt's most famous female pharaoh, the temple rises in three elegant colonnaded terraces. Your guide walks you through the famous reliefs depicting Hatshepsut's divine birth, her legendary trade expedition to the land of Punt, and her achievements as pharaoh. The temple was deliberately defaced by her successor Thutmose III, making the surviving reliefs all the more remarkable.",
        descriptionAr:
          "أحد أكثر الآثار تميزاً معمارياً في مصر كلها ينتظرك عند قدم المنحدرات الجيرية الدرامية. بُني لأشهر فرعونة في مصر، يرتفع المعبد في ثلاثة أروقة أنيقة. يصطحبك مرشدك عبر النقوش الشهيرة التي تصور الميلاد الإلهي لحتشبسوت ورحلتها التجارية الأسطورية إلى أرض بونت.",
        duration: "45 minutes",
        location: "Deir el-Bahari, West Bank",
        tips: "The site is exposed — bring sunscreen and a hat. The views of the cliffs are spectacular from the upper terrace.",
        tipsAr: "الموقع مكشوف — احضر واقي الشمس والقبعة. المناظر من الرواق العلوي رائعة.",
      },
      {
        step: 6,
        time: "12:00",
        title: "Return Transfer to Hotel",
        titleAr: "العودة إلى الفندق",
        description:
          "Your guide accompanies you back across the Nile to your hotel on the East Bank. Drop-off is at your hotel entrance.",
        descriptionAr:
          "يرافقك مرشدك عائداً عبر النيل إلى فندقك في الضفة الشرقية. التوصيل حتى مدخل الفندق.",
        duration: "30 minutes",
        location: "Luxor East Bank",
      },
    ],
    importantInfo: [
      "Tour starts early to avoid the midday heat in the Valley of the Kings",
      "Dress modestly — shoulders and knees should be covered at all sites",
      "Bring at least 1.5 liters of water per person",
      "Cash needed for optional Tutankhamun tomb entry (~$16.50)",
      "The order of sites may vary depending on crowd levels",
    ],
    importantInfoAr: [
      "تبدأ الجولة مبكراً لتجنب حرارة منتصف النهار في وادي الملوك",
      "ارتدِ ملابس محتشمة — يجب تغطية الكتفين والركبتين في جميع المواقع",
      "أحضر ما لا يقل عن 1.5 لتر من الماء للفرد",
      "النقد ضروري لدخول مقبرة توت عنخ آمون الاختياري (~16.50 دولار)",
      "قد يتغير ترتيب المواقع حسب مستويات الازدحام",
    ],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "الاستقبال من الفندق في أي مكان في مدينة الأقصر",
    },
    accessibility: "Moderate fitness required. Tomb interiors involve uneven steps and low ceilings.",
    accessibilityAr: "يتطلب لياقة بدنية معتدلة. تتضمن المقابر من الداخل درجات غير منتظمة وأسقفاً منخفضة.",
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
    itinerary: [
      {
        step: 1,
        time: "07:00",
        title: "Hotel Pickup in Luxor",
        titleAr: "الاستقبال من الفندق في الأقصر",
        description:
          "Your guide and driver meet you at your hotel. You board a comfortable, air-conditioned vehicle for the approximately 2.5-hour drive north along the Nile Valley to Abydos. Your guide gives you a briefing on the significance of both sites and what to look for during the day.",
        descriptionAr:
          "يلتقي بك مرشدك وسائقك في فندقك. تستقل مركبة مريحة ومكيفة للرحلة الممتدة نحو ساعتين ونصف شمالاً على طول وادي النيل إلى أبيدوس. يعطيك مرشدك موجزاً عن أهمية الموقعين.",
        duration: "2.5 hours driving",
        location: "Luxor to Abydos",
      },
      {
        step: 2,
        time: "09:30",
        title: "Temple of Seti I — Abydos",
        titleAr: "معبد سيتي الأول — أبيدوس",
        description:
          "Arrive at Abydos, one of the most sacred cities in all of ancient Egypt and the mythological burial place of Osiris, god of the afterlife. The Temple of Seti I, begun by Seti I and completed by his son Ramses II, is celebrated for having some of the finest and most beautifully preserved painted reliefs in Egypt. Your guide walks you through the seven sanctuaries dedicated to Osiris, Isis, Horus, Amun, Ra-Horakhty, Ptah, and Seti I himself. You'll discover the famous Abydos King List — a stone panel inscribed with the names of 76 pharaohs — and the enigmatic Osireion, an underground structure built to evoke the tomb of Osiris.",
        descriptionAr:
          "تصل إلى أبيدوس، إحدى أقدس المدن في مصر القديمة كلها والموقع الأسطوري لدفن أوزيريس إله الآخرة. معبد سيتي الأول مشهور بامتلاكه بعضاً من أجمل النقوش الملونة المحفوظة في مصر. يصطحبك مرشدك عبر الأضرحة السبعة وتكتشف قائمة ملوك أبيدوس الشهيرة.",
        duration: "90 minutes",
        location: "Abydos, Sohag Governorate",
        tips: "The painted colors inside the temple are astonishingly vivid — among the best preserved you'll see anywhere in Egypt.",
        tipsAr: "الألوان المطلية داخل المعبد زاهية بشكل مذهل — من بين أفضل المحفوظات في مصر.",
      },
      {
        step: 3,
        time: "11:00",
        title: "Lunch Break",
        titleAr: "استراحة الغداء",
        description:
          "Enjoy a lunch break at a local restaurant near Abydos, or bring your own food. Lunch is not included in the tour price. Your guide can recommend local options.",
        descriptionAr:
          "استمتع باستراحة الغداء في مطعم محلي قرب أبيدوس، أو يمكنك إحضار طعامك. الغداء غير مشمول في سعر الجولة. يمكن لمرشدك أن يوصي بخيارات محلية.",
        duration: "45 minutes",
        location: "Near Abydos",
      },
      {
        step: 4,
        time: "11:45",
        title: "Drive to Dendera",
        titleAr: "القيادة إلى دندرة",
        description:
          "You drive approximately 1 hour south back toward Luxor, stopping at the town of Dendera. Your guide continues the story of ancient Egypt during the drive, connecting the mythology of Osiris at Abydos with the goddess Hathor worshipped at Dendera.",
        descriptionAr:
          "تقود السيارة نحو ساعة جنوباً نحو الأقصر، توقفاً في مدينة دندرة. يواصل مرشدك قصة مصر القديمة خلال الرحلة.",
        duration: "1 hour driving",
        location: "Abydos to Dendera",
      },
      {
        step: 5,
        time: "13:00",
        title: "Temple of Hathor — Dendera",
        titleAr: "معبد حتحور — دندرة",
        description:
          "Arrive at Dendera and enter the Temple of Hathor, one of the best-preserved temples in all of Egypt. Unlike many ancient sites, the roof here is almost entirely intact, creating a spectacular enclosed atmosphere. Your guide explains the mythological role of Hathor — goddess of love, music, and beauty — while leading you through the iconic Hypostyle Hall with its 18 Hathor-headed columns. The highlight of the visit is the famous astronomical ceiling in the Hypostyle Hall, painted with scenes of the sky, zodiac signs, and the goddess Nut stretched across the heavens. You'll also explore the crypts beneath the temple and, if time permits, climb to the roof for panoramic views of the surrounding desert and the Nile valley.",
        descriptionAr:
          "تصل إلى دندرة وتدخل معبد حتحور، أحد أفضل المعابد المحفوظة في مصر كلها. على عكس كثير من المواقع القديمة، السقف هنا محفوظ تقريباً بالكامل. يشرح مرشدك الدور الأسطوري لحتحور — إلهة الحب والموسيقى والجمال. أبرز ما في الزيارة هو السقف الفلكي الشهير في قاعة الأعمدة.",
        duration: "2 hours",
        location: "Dendera, Qena Governorate",
        tips: "The famous Dendera Zodiac displayed here is a replica — the original is in the Louvre in Paris. Don't miss the crypts beneath the temple for remarkable hidden reliefs.",
        tipsAr: "برج الأبراج المعروض هنا نسخة طبق الأصل — الأصل في متحف اللوفر بباريس. لا تفوّت الأقبية تحت المعبد.",
      },
      {
        step: 6,
        time: "15:30",
        title: "Return Drive to Luxor",
        titleAr: "العودة إلى الأقصر",
        description:
          "You begin the approximately 1-hour drive south back to Luxor, arriving at your hotel in the late afternoon.",
        descriptionAr: "تبدأ رحلة العودة نحو ساعة جنوباً إلى الأقصر، تصل إلى فندقك في أواخر العصر.",
        duration: "1 hour driving",
        location: "Dendera to Luxor",
      },
      {
        step: 7,
        time: "16:30",
        title: "Drop-off at Hotel",
        titleAr: "التوصيل إلى الفندق",
        description: "Your driver drops you off at your hotel entrance. End of tour.",
        descriptionAr: "يوصلك سائقك إلى مدخل فندقك. نهاية الجولة.",
        duration: null,
        location: "Your hotel, Luxor",
      },
    ],
    importantInfo: [
      "Long day — wear comfortable walking shoes and light, breathable clothing",
      "Bring plenty of water and snacks for the road",
      "Dress modestly — shoulders and knees covered at both temples",
      "Lunch is not included — bring money or your own food",
      "Abydos is about 2.5 hours from Luxor — a car journey is unavoidable",
    ],
    importantInfoAr: [
      "يوم طويل — ارتدِ حذاءً مريحاً وملابس خفيفة",
      "أحضر كمية وفيرة من الماء والوجبات الخفيفة",
      "ارتدِ ملابس محتشمة في كلا المعبدين",
      "الغداء غير مشمول — أحضر نقوداً أو طعامك",
    ],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "الاستقبال من الفندق في أي مكان في مدينة الأقصر",
    },
    accessibility: "Easy to moderate. Both temples involve walking on flat ground with some steps.",
    accessibilityAr: "سهل إلى معتدل. يتضمن كلا المعبدين المشي على أرض مستوية مع بعض الدرجات.",
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
    itinerary: [
      {
        day: 1,
        title: "Luxor — Embarkation & East Bank Temples",
        titleAr: "الأقصر — الصعود إلى السفينة ومعابد الضفة الشرقية",
        description:
          "Arrive in Luxor and transfer to your Nile cruise ship. After checking into your cabin and enjoying a welcome lunch onboard, your guide leads you to the two greatest temples on the East Bank.",
        descriptionAr:
          "تصل إلى الأقصر وتتوجه إلى سفينة الرحلة النيلية. بعد تسجيل الوصول في كابينتك والاستمتاع بغداء ترحيبي على متن السفينة، يقودك مرشدك إلى أعظم معبدين على الضفة الشرقية.",
        activities: [
          {
            time: "12:00",
            title: "Embarkation & Cabin Check-in",
            titleAr: "الصعود إلى السفينة وتسجيل الوصول",
            description:
              "Board the cruise ship at Luxor dock. Meet your onboard guide and crew. Enjoy a welcome lunch as you settle in.",
            descriptionAr:
              "ارقَ على متن السفينة السياحية في رصيف الأقصر. التقِ بمرشدك ومنسقيك على متن السفينة. استمتع بغداء ترحيبي.",
          },
          {
            time: "14:00",
            title: "Karnak Temple Complex",
            titleAr: "مجمع معبد الكرنك",
            description:
              "Visit the largest religious building ever constructed in human history. Walk through the Avenue of Ram-headed Sphinxes, enter the massive First Pylon, and stand in awe inside the Great Hypostyle Hall — a forest of 134 giant columns, some reaching 23 meters high. Your guide explains how 30 successive pharaohs contributed to this temple over 2,000 years, making it a timeline of ancient Egyptian civilization in stone. Don't miss the Sacred Lake and the ancient obelisks of Hatshepsut and Thutmose I.",
            descriptionAr:
              "زُر أكبر مبنى ديني بُني في تاريخ البشرية. امشِ عبر طريق أبي الهول ذي رأس الكبش، وادخل البوابة الأولى الضخمة، وقف مبهوراً في قاعة الأعمدة العظيمة — غابة من 134 عموداً عملاقاً.",
            duration: "2 hours",
            location: "Karnak Temple, East Bank Luxor",
          },
          {
            time: "17:00",
            title: "Luxor Temple at Dusk",
            titleAr: "معبد الأقصر عند الغسق",
            description:
              "Walk down to Luxor Temple, built primarily by Amenhotep III and Ramses II over 3,000 years ago. See the towering entrance pylon, the seated colossi of Ramses II, and the famous avenue lined with human-headed sphinxes. As the sun sets and the lights come on, the temple takes on a magical golden glow.",
            descriptionAr:
              "تمشي إلى معبد الأقصر الذي بُني أساساً من قِبَل أمنحتب الثالث ورمسيس الثاني قبل أكثر من 3000 عام. شاهد البوابة الشاهقة وتماثيل رمسيس الثاني الجالسة والطريق الشهير المصطف بأبو الهول.",
            duration: "1 hour",
            location: "Luxor Temple, Corniche el-Nil",
          },
          {
            time: "19:30",
            title: "Dinner Onboard & Overnight at Luxor",
            titleAr: "العشاء على متن السفينة والمبيت في الأقصر",
            description:
              "Return to the ship for a three-course dinner. The ship remains moored in Luxor overnight.",
            descriptionAr: "العودة إلى السفينة لتناول عشاء من ثلاثة أطباق. تظل السفينة راسية في الأقصر طوال الليل.",
          },
        ],
        meals: { breakfast: false, lunch: true, dinner: true },
        accommodation: "Onboard Nile cruise ship, Luxor",
      },
      {
        day: 2,
        title: "Luxor West Bank — Valley of the Kings & Hatshepsut",
        titleAr: "الضفة الغربية للأقصر — وادي الملوك وحتشبسوت",
        description:
          "An early morning dedicated entirely to the incredible monuments of Luxor's West Bank — the ancient necropolis of pharaonic Egypt.",
        descriptionAr:
          "صباح مبكر مكرس بالكامل للآثار الرائعة للضفة الغربية للأقصر — المقبرة القديمة لمصر الفرعونية.",
        activities: [
          {
            time: "06:30",
            title: "Breakfast Onboard",
            titleAr: "الفطور على متن السفينة",
            description: "Full buffet breakfast onboard before the day's excursion.",
            descriptionAr: "فطور بوفيه كامل على متن السفينة قبل رحلة اليوم.",
          },
          {
            time: "07:30",
            title: "Colossi of Memnon",
            titleAr: "تمثالا ممنون",
            description:
              "Start with a brief stop at the twin colossi of Amenhotep III — the first thing most visitors see when arriving on the West Bank. Your guide explains their history and the ancient legend of their mysterious 'singing.'",
            descriptionAr:
              "ابدأ بتوقف قصير عند تمثالَي أمنحتب الثالث التوأمين — أول ما يراه معظم الزوار عند الوصول إلى الضفة الغربية.",
            duration: "20 minutes",
          },
          {
            time: "08:00",
            title: "Valley of the Kings",
            titleAr: "وادي الملوك",
            description:
              "Explore the legendary burial ground of Egypt's New Kingdom pharaohs. Your ticket includes entry to 3 tombs. Your guide selects the best combination open on the day — possibly including KV9 (Ramses VI), KV11 (Ramses III), or KV62 (Tutankhamun, for an extra fee). Inside each tomb, see perfectly preserved painted scenes from the Egyptian Book of the Dead, astronomical ceilings, and the sacred texts that guided the pharaoh's journey to the afterlife.",
            descriptionAr:
              "استكشف مكان الدفن الأسطوري لفراعنة الدولة الحديثة في مصر. تشمل بطاقتك دخول 3 مقابر. يختار مرشدك أفضل تشكيلة متاحة في اليوم.",
            duration: "90 minutes",
          },
          {
            time: "09:30",
            title: "Mortuary Temple of Hatshepsut",
            titleAr: "المعبد الجنائزي لحتشبسوت",
            description:
              "Visit the stunning three-tiered temple carved into the cliffs of Deir el-Bahari. Learn how Hatshepsut — Egypt's most successful female ruler — cemented her legacy in stone, and how her stepson Thutmose III attempted to erase her from history after her death.",
            descriptionAr:
              "زُر المعبد الثلاثي المذهل المنحوت في صخور الدير البحري. تعلم كيف رسّخت حتشبسوت — أنجح حاكمة في مصر — إرثها في الحجر.",
            duration: "45 minutes",
          },
          {
            time: "11:00",
            title: "Return to Ship — Sail Toward Edfu",
            titleAr: "العودة إلى السفينة — الإبحار نحو إدفو",
            description:
              "Return to the cruise ship for lunch. The ship casts off and sails south toward Edfu through the afternoon. Enjoy the changing scenery of green fields, palm trees, and mud-brick villages along the Nile banks from your deck.",
            descriptionAr:
              "العودة إلى السفينة السياحية لتناول الغداء. تنطلق السفينة جنوباً نحو إدفو خلال فترة ما بعد الظهر. استمتع بمشاهدة الحقول الخضراء وأشجار النخيل والقرى على طول ضفاف النيل.",
            duration: "Afternoon sailing",
          },
          {
            time: "19:30",
            title: "Dinner Onboard & Overnight Sailing",
            titleAr: "العشاء على متن السفينة والإبحار الليلي",
            description: "Enjoy dinner as the ship sails through the night toward Edfu.",
            descriptionAr: "استمتع بالعشاء بينما تبحر السفينة خلال الليل نحو إدفو.",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "Onboard Nile cruise ship (sailing)",
      },
      {
        day: 3,
        title: "Edfu Temple & Kom Ombo Temple",
        titleAr: "معبد إدفو ومعبد كوم أمبو",
        description:
          "Two remarkable temples in one day — the best-preserved ancient temple in Egypt and one of the most unusual, dedicated to two gods simultaneously.",
        descriptionAr:
          "معبدان رائعان في يوم واحد — أفضل معبد قديم محفوظ في مصر وأحد أكثرها غرابة، مكرّس لإلهين في آنٍ واحد.",
        activities: [
          {
            time: "06:00",
            title: "Breakfast Onboard — Ship Arrives Edfu",
            titleAr: "الفطور على متن السفينة — وصول السفينة إلى إدفو",
            description: "Wake up to find the ship moored at Edfu. Breakfast is served onboard.",
            descriptionAr: "استيقظ لتجد السفينة راسية في إدفو. يُقدَّم الفطور على متن السفينة.",
          },
          {
            time: "07:00",
            title: "Horse Carriage Ride to Edfu Temple",
            titleAr: "ركوب العربة الكارو إلى معبد إدفو",
            description:
              "Board a traditional horse-drawn carriage for the short, atmospheric ride from the dock through the local market streets to the entrance of Edfu Temple — a unique and memorable experience.",
            descriptionAr:
              "اركب عربة كارو تقليدية يجرها حصان للرحلة القصيرة الرائعة من الرصيف عبر شوارع السوق المحلية إلى مدخل معبد إدفو.",
            duration: "15 minutes",
          },
          {
            time: "07:30",
            title: "Temple of Horus at Edfu",
            titleAr: "معبد حورس في إدفو",
            description:
              "Enter the best-preserved ancient temple in Egypt, dedicated to the falcon god Horus. Built during the Ptolemaic period, the temple is extraordinarily complete — its massive pylons, courtyard, hypostyle halls, inner sanctuary, and roof are all largely intact. Your guide narrates the sacred drama inscribed on the walls: the eternal battle between Horus and the god Set, depicted in detailed reliefs. Inside the sanctuary, you'll see the boat shrine used during religious processions and the statue of Horus as a falcon wearing the double crown.",
            descriptionAr:
              "ادخل إلى أفضل معبد قديم محفوظ في مصر، مكرس لإله الصقر حورس. بُني في الحقبة البطلمية، المعبد مكتمل بشكل استثنائي. يروي مرشدك الدراما المقدسة المنقوشة على الجدران: المعركة الأبدية بين حورس والإله ست.",
            duration: "90 minutes",
            location: "Edfu Temple, Aswan Governorate",
            tips: "Look for the famous Horus falcon statue in the inner courtyard — it's one of the most-photographed images in Egypt.",
            tipsAr: "ابحث عن تمثال الصقر حورس الشهير في الفناء الداخلي — إنه من أكثر الصور تصويراً في مصر.",
          },
          {
            time: "09:30",
            title: "Return to Ship — Sail to Kom Ombo",
            titleAr: "العودة إلى السفينة — الإبحار إلى كوم أمبو",
            description:
              "Return by horse carriage to the ship. Enjoy a relaxing morning cruise south along the Nile toward Kom Ombo. Lunch is served onboard.",
            descriptionAr:
              "العودة بالعربة الكارو إلى السفينة. استمتع برحلة صباحية مريحة جنوباً على طول النيل نحو كوم أمبو. يُقدَّم الغداء على متن السفينة.",
            duration: "2 hours sailing",
          },
          {
            time: "14:00",
            title: "Double Temple of Kom Ombo",
            titleAr: "المعبد المزدوج في كوم أمبو",
            description:
              "Arrive at Kom Ombo for one of the most unusual temples in Egypt — uniquely dedicated to two gods side by side: the crocodile god Sobek (god of fertility and water) and Haroeris, the elder form of Horus. The temple's symmetrical design means everything is doubled — two entrances, two hypostyle halls, two sanctuaries. Your guide explains how the ancient Egyptians worshipped both deities simultaneously. Visit the Crocodile Museum within the temple complex to see actual mummified crocodiles preserved for thousands of years. The riverside location with its Nile views is especially beautiful in the afternoon light.",
            descriptionAr:
              "تصل إلى كوم أمبو لمشاهدة أحد أكثر المعابد غرابة في مصر — مكرس بشكل فريد لإلهين جنباً إلى جنب: إله التماسيح سوبك وحورس الكبير. يشرح مرشدك كيف عبد المصريون القدماء كلا الإلهين في آنٍ واحد.",
            duration: "90 minutes",
            location: "Kom Ombo Temple, Aswan Governorate",
            tips: "Visit the Nilometer on the temple grounds — an ancient device used to measure the Nile's flood levels and predict the harvest.",
            tipsAr: "زُر مقياس النيل في ساحة المعبد — جهاز قديم استُخدم لقياس مستويات فيضان النيل.",
          },
          {
            time: "16:00",
            title: "Sail to Aswan — Sunset on the Nile",
            titleAr: "الإبحار إلى أسوان — غروب الشمس على النيل",
            description:
              "Re-board the ship for the final leg of the cruise to Aswan. Relax on the sun deck as the ship passes through stunning Nile scenery, with desert mountains rising on both sides and golden light illuminating the water at sunset.",
            descriptionAr:
              "ارقَ على متن السفينة للمرحلة الأخيرة من الرحلة إلى أسوان. استرخِ على السطح بينما تمر السفينة عبر مشاهد النيل الرائعة.",
            duration: "2 hours sailing",
          },
          {
            time: "19:30",
            title: "Dinner Onboard — Arrive Aswan",
            titleAr: "العشاء على متن السفينة — الوصول إلى أسوان",
            description: "Enjoy dinner as the ship arrives and moors at Aswan. Overnight on the ship.",
            descriptionAr: "استمتع بالعشاء بينما تصل السفينة وترسو في أسوان. المبيت على متن السفينة.",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "Onboard Nile cruise ship, Aswan",
      },
      {
        day: 4,
        title: "Aswan — Philae Temple & Felucca Ride",
        titleAr: "أسوان — معبد فيلة وركوب الفلوكة",
        description:
          "Explore the beautiful city of Aswan, visiting the magical island temple of Philae and experiencing a traditional felucca sailing boat ride among the famous granite islands.",
        descriptionAr:
          "استكشف مدينة أسوان الجميلة، وزُر معبد فيلة الجزيري الساحر واستمتع برحلة الفلوكة التقليدية بين الجزر الغرانيتية الشهيرة.",
        activities: [
          {
            time: "07:00",
            title: "Breakfast Onboard",
            titleAr: "الفطور على متن السفينة",
            description: "Full breakfast onboard. Prepare for a full day in Aswan.",
            descriptionAr: "فطور كامل على متن السفينة. استعد ليوم كامل في أسوان.",
          },
          {
            time: "08:00",
            title: "Philae Temple (Temple of Isis)",
            titleAr: "معبد فيلة (معبد إيزيس)",
            description:
              "Take a short motorboat ride to Agilkia Island, where the magnificent Temple of Isis was relocated stone by stone in the 1970s to save it from the rising waters of Lake Nasser. Dedicated to the goddess Isis and her mythological role in resurrecting her husband Osiris, this temple was one of the last built in the classical Egyptian style and one of the last to remain in active use — Egyptian priests continued worshipping here until the 6th century AD. Your guide walks you through the grand entry colonnade, the Birth House, and the inner sanctuary, explaining the remarkable story of the temple's UNESCO rescue operation.",
            descriptionAr:
              "خذ رحلة قارب بمحرك قصيرة إلى جزيرة أجيلكيا، حيث نُقل معبد إيزيس الرائع حجراً حجراً في السبعينيات لإنقاذه من مياه بحيرة ناصر المتصاعدة. كان هذا المعبد من آخر المعابد التي بُنيت بالأسلوب المصري الكلاسيكي.",
            duration: "90 minutes",
            location: "Agilkia Island, Aswan",
            tips: "The motorboat ride itself is enjoyable and gives beautiful views of the Nile and surrounding islands.",
            tipsAr: "رحلة القارب نفسها ممتعة وتمنحك مناظر جميلة للنيل والجزر المحيطة.",
          },
          {
            time: "10:00",
            title: "Traditional Felucca Ride",
            titleAr: "رحلة الفلوكة التقليدية",
            description:
              "Board a traditional Egyptian felucca — a wooden sailing boat — for a relaxing sail among the granite islands of the Nile at Aswan. Glide past Elephantine Island, the Botanical Gardens Island, and the famous Aga Khan Mausoleum. Your captain navigates the gentle currents using nothing but the sail, and you can trail your hand in the Nile water as the city skyline drifts past. A completely peaceful, unhurried experience.",
            descriptionAr:
              "اركب فلوكة مصرية تقليدية — قارب شراعي خشبي — لرحلة مريحة بين الجزر الغرانيتية للنيل في أسوان. انزلق بجانب جزيرة الفنتين وجزيرة الحديقة النباتية والمقام الشهير لآغا خان.",
            duration: "1 hour",
            location: "Nile River, Aswan",
            tips: "This is one of the most relaxing experiences in all of Egypt. Sit back, watch the desert mountains and the palm trees, and simply enjoy the silence.",
            tipsAr: "هذه واحدة من أكثر التجارب استرخاءً في مصر كلها. استرخِ وشاهد الجبال الصحراوية وأشجار النخيل.",
          },
          {
            time: "11:30",
            title: "Return to Ship — Lunch & Leisure",
            titleAr: "العودة إلى السفينة — الغداء والاستجمام",
            description:
              "Return to the ship for lunch. The afternoon is free — relax on the sun deck, swim in the pool if available, or explore the Aswan corniche independently.",
            descriptionAr:
              "العودة إلى السفينة لتناول الغداء. بعد الظهر حر — استرخِ على السطح أو استكشف كورنيش أسوان بشكل مستقل.",
          },
          {
            time: "19:30",
            title: "Farewell Dinner & Disembarkation Preparation",
            titleAr: "عشاء الوداع والاستعداد للنزول",
            description:
              "Enjoy a special farewell dinner onboard. Your guide provides instructions for disembarkation the following morning.",
            descriptionAr:
              "استمتع بعشاء وداع خاص على متن السفينة. يعطيك مرشدك تعليمات النزول في الصباح التالي.",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "Onboard Nile cruise ship, Aswan",
      },
      {
        day: 5,
        title: "Aswan — Disembarkation",
        titleAr: "أسوان — النزول من السفينة",
        description:
          "Enjoy a final breakfast onboard before disembarking in Aswan. Transfer to Aswan Airport or your next accommodation.",
        descriptionAr:
          "استمتع بفطور أخير على متن السفينة قبل النزول في أسوان. التوصيل إلى مطار أسوان أو إقامتك التالية.",
        activities: [
          {
            time: "07:00",
            title: "Final Breakfast Onboard",
            titleAr: "الفطور الأخير على متن السفينة",
            description: "Enjoy your last breakfast on the cruise ship. Collect your luggage and prepare to disembark.",
            descriptionAr:
              "استمتع بفطورك الأخير على السفينة السياحية. اجمع أمتعتك واستعد للنزول.",
          },
          {
            time: "08:00",
            title: "Disembarkation & Transfer",
            titleAr: "النزول من السفينة والتوصيل",
            description:
              "Disembark the cruise ship at Aswan dock. Your driver provides a transfer to Aswan Airport, the train station, or your next hotel. End of cruise.",
            descriptionAr:
              "انزل من السفينة في رصيف أسوان. يوصلك سائقك إلى مطار أسوان أو محطة القطار أو فندقك التالي. نهاية الرحلة.",
          },
        ],
        meals: { breakfast: true, lunch: false, dinner: false },
        accommodation: null,
      },
    ],
    importantInfo: [
      "Check-in is at 12:00 PM on Day 1. Early arrival may allow boarding but the cabin may not be ready.",
      "Bring lightweight, modest clothing — you'll be visiting temples daily",
      "Tipping for crew and guides is customary and appreciated (~$5–10/day per person)",
      "Pack sunscreen, a hat, and comfortable walking shoes",
      "The cruise sails overnight on Day 2 — you may feel light movement",
    ],
    importantInfoAr: [
      "تسجيل الوصول في الظهر في اليوم الأول. قد يُسمح بالصعود في وقت مبكر لكن الكابينة قد لا تكون جاهزة",
      "أحضر ملابس خفيفة ومحتشمة — ستزور المعابد يومياً",
      "البقشيش للطاقم والمرشدين معتاد ومُقدَّر (~5-10 دولارات يومياً للشخص)",
    ],
    meetingPoint: {
      description: "Luxor cruise ship dock — your guide will meet you on arrival at Luxor",
      descriptionAr: "رصيف السفن السياحية في الأقصر — سيلتقي بك مرشدك عند وصولك إلى الأقصر",
    },
    accessibility: "Suitable for most fitness levels. All excursions involve moderate walking on uneven ancient surfaces.",
    accessibilityAr: "مناسب لمعظم مستويات اللياقة. تتضمن جميع الرحلات مشياً معتدلاً على أسطح قديمة غير منتظمة.",
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
    itinerary: [
      {
        step: 1,
        time: "08:00",
        title: "Hotel Pickup & Transfer to West Bank",
        titleAr: "الاستقبال من الفندق والتوجه إلى الضفة الغربية",
        description:
          "Your guide collects you from your hotel and drives across the Nile to the West Bank. On the way, your guide introduces the difference between this tour and the standard Valley of the Kings route — explaining why the nobles' tombs and workers' village offer a window into daily Egyptian life that the royal tombs cannot.",
        descriptionAr:
          "يأخذك مرشدك من فندقك ويقود عبر النيل إلى الضفة الغربية. في الطريق، يشرح مرشدك الفرق بين هذه الجولة ومسار وادي الملوك القياسي.",
        duration: "30 minutes",
        location: "Luxor East Bank to West Bank",
      },
      {
        step: 2,
        time: "08:30",
        title: "Valley of the Nobles",
        titleAr: "وادي النبلاء",
        description:
          "Enter a world most tourists never see: the tombs of Egypt's high officials, scribes, and nobles who served the pharaohs. Unlike the royal tombs — which focus on religious texts and the afterlife — the nobles' tombs are filled with vivid, colorful paintings of everyday ancient Egyptian life: hunting, fishing, banqueting, farming, music-making, and market scenes. You'll visit 2–3 tombs based on which are open. Notable examples include the Tomb of Nakht (a royal scribe under Thutmose IV) with its beautiful harvest and banquet scenes, the Tomb of Ramose (a governor under Amenhotep III) with spectacular wall carvings transitioning between classic Egyptian and Amarna styles, and the Tomb of Menna, famous for its fishing and fowling scenes of stunning quality.",
        descriptionAr:
          "ادخل إلى عالم لا يراه معظم السياح: مقابر كبار موظفي مصر والكتّاب والنبلاء. على عكس المقابر الملكية، مقابر النبلاء مليئة بلوحات حيوية ملونة للحياة اليومية في مصر القديمة: الصيد والولائم والزراعة والموسيقى.",
        duration: "60 minutes",
        location: "Sheikh Abd el-Qurna, West Bank",
        tips: "These tombs are far less crowded than the Valley of the Kings — you'll often have entire tombs to yourself.",
        tipsAr: "هذه المقابر أقل ازدحاماً بكثير من وادي الملوك — في الغالب ستكون وحدك في كل مقبرة.",
      },
      {
        step: 3,
        time: "09:45",
        title: "Deir el-Medina — The Workers' Village",
        titleAr: "دير المدينة — قرية العمال",
        description:
          "Visit one of the most extraordinary archaeological sites in Egypt: the preserved village of the artisans who spent their lives carving and painting the royal tombs of the Valley of the Kings. Occupied for roughly 500 years during the New Kingdom, the village gives us an unparalleled view into the daily lives, family structures, wages, and social disputes of ordinary ancient Egyptians. Your guide walks you through the excavated house foundations and explains the remarkable papyrus documents discovered here — including the world's earliest recorded labor strike, when workers stopped working because their grain rations were late. The site also contains beautifully decorated workers' tombs that rival the quality of royal burials.",
        descriptionAr:
          "زُر أحد أكثر المواقع الأثرية استثنائية في مصر: القرية المحفوظة للحرفيين الذين أمضوا حياتهم في نحت وتلوين المقابر الملكية في وادي الملوك. تُعطينا القرية نظرة لا مثيل لها في حياة المصريين القدماء اليومية، بما في ذلك أقدم إضراب عن العمل مسجَّل في التاريخ.",
        duration: "45 minutes",
        location: "Deir el-Medina, West Bank",
        tips: "Don't miss the small workers' tombs on the hillside above the village — especially the Tomb of Sennefer and Tomb of Inherkau, which have remarkably colourful paintings.",
        tipsAr: "لا تفوّت المقابر الصغيرة للعمال على التل فوق القرية — لا سيما مقبرة سنفر ومقبرة أنحركاو.",
      },
      {
        step: 4,
        time: "10:45",
        title: "Medinet Habu — Mortuary Temple of Ramses III",
        titleAr: "مدينة هابو — المعبد الجنائزي لرمسيس الثالث",
        description:
          "Your final stop is Medinet Habu, one of the largest and best-preserved mortuary temple complexes on the West Bank. Built by Ramses III in the 12th century BC, the temple is celebrated for the extraordinary scale and detail of its relief carvings. The entrance is through a unique Syrian-style migdol gateway, one of the few of its kind in Egypt. Inside, your guide leads you through the First and Second Pylons, the Peristyle Court, and the inner halls — all covered in dramatic scenes depicting Ramses III's military campaigns against the Sea Peoples, Libya, and Nubia. The colors in parts of the temple are still remarkably vivid.",
        descriptionAr:
          "محطتك الأخيرة هي مدينة هابو، أحد أكبر وأفضل مجمعات المعابد الجنائزية المحفوظة على الضفة الغربية. بُني بواسطة رمسيس الثالث في القرن الثاني عشر قبل الميلاد، المعبد مشهور بالنطاق الاستثنائي وتفاصيل نقوشه البارزة.",
        duration: "45 minutes",
        location: "Medinet Habu, West Bank",
        tips: "Look up at the ceiling of the inner halls — some of the original blue and yellow astronomical paintings survive here.",
        tipsAr: "انظر إلى سقف القاعات الداخلية — بعض الرسوم الفلكية الأصلية باللون الأزرق والأصفر لا تزال موجودة.",
      },
      {
        step: 5,
        time: "11:45",
        title: "Return Transfer to Hotel",
        titleAr: "العودة إلى الفندق",
        description:
          "Your guide escorts you back across the Nile and drops you off at your hotel entrance in Luxor.",
        descriptionAr: "يرافقك مرشدك عائداً عبر النيل ويوصلك إلى مدخل فندقك في الأقصر.",
        duration: "30 minutes",
        location: "Luxor East Bank",
      },
    ],
    importantInfo: [
      "This tour is ideal as a complement to the Valley of the Kings — they cover completely different sites",
      "Dress modestly — cover shoulders and knees at all tombs and temples",
      "Bring water and a hat — the West Bank has limited shade",
      "Photography permitted at most sites (check individual tomb rules on the day)",
    ],
    importantInfoAr: [
      "هذه الجولة مثالية كمكمل لجولة وادي الملوك — تغطيان مواقع مختلفة تماماً",
      "ارتدِ ملابس محتشمة في جميع المقابر والمعابد",
      "أحضر ماءً وقبعةً — الضفة الغربية لها ظل محدود",
    ],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "الاستقبال من الفندق في أي مكان في مدينة الأقصر",
    },
    accessibility: "Easy. Mostly flat walking with some steps at Medinet Habu.",
    accessibilityAr: "سهل. مشي مستوٍ في معظمه مع بعض الدرجات في مدينة هابو.",
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
    itinerary: [
      {
        step: 1,
        time: "07:00",
        title: "Hotel Pickup",
        titleAr: "الاستقبال من الفندق",
        description:
          "Your expert guide meets you at your hotel. The day is structured to visit the West Bank first in the cooler morning hours, and the East Bank temples in the late morning and early afternoon.",
        descriptionAr:
          "يلتقي بك مرشدك الخبير في فندقك. يُنظَّم اليوم لزيارة الضفة الغربية أولاً في ساعات الصباح الأكثر برودة.",
        duration: "15 minutes",
        location: "Your hotel, Luxor",
      },
      {
        step: 2,
        time: "07:15",
        title: "Colossi of Memnon",
        titleAr: "تمثالا ممنون",
        description:
          "Start on the West Bank with a brief stop at the two giant seated statues of Amenhotep III, each 18 meters tall. Your guide explains their history and the ancient legend of the 'Singing Memnon' — the eerie sound ancient visitors described hearing at sunrise.",
        descriptionAr:
          "ابدأ في الضفة الغربية بتوقف قصير عند التمثالين العملاقين الجالسين لأمنحتب الثالث. يشرح مرشدك تاريخهما وأسطورة 'ممنون المغني'.",
        duration: "20 minutes",
        location: "West Bank, Luxor",
      },
      {
        step: 3,
        time: "07:45",
        title: "Valley of the Kings",
        titleAr: "وادي الملوك",
        description:
          "Enter the world-famous royal necropolis and explore 3 tombs of New Kingdom pharaohs. Your guide explains the sacred purpose of each tomb, the meaning of the vivid wall paintings, and the remarkable story of how Howard Carter discovered Tutankhamun's intact tomb in 1922. The optional Tutankhamun tomb (extra ~$16.50) can be added on the day.",
        descriptionAr:
          "ادخل إلى مقبرة الفراعنة العالمية الشهيرة واستكشف 3 مقابر لفراعنة الدولة الحديثة. يشرح مرشدك الغرض المقدس لكل مقبرة وقصة اكتشاف هوارد كارتر لمقبرة توت عنخ آمون.",
        duration: "90 minutes",
        location: "Valley of the Kings, West Bank",
        tips: "No photography inside the tombs. Wear flat shoes with good grip — the tomb passages slope steeply downward.",
        tipsAr: "لا تصوير داخل المقابر. ارتدِ أحذية مسطحة جيدة الإمساك — ممرات المقبرة تنحدر بشدة.",
      },
      {
        step: 4,
        time: "09:30",
        title: "Mortuary Temple of Hatshepsut",
        titleAr: "المعبد الجنائزي لحتشبسوت",
        description:
          "Visit the stunning terraced temple of Egypt's famous female pharaoh, Hatshepsut, set dramatically against towering limestone cliffs. Your guide tells the fascinating story of one of the most powerful rulers in Egyptian history — how she declared herself pharaoh, led trade expeditions to exotic lands, built one of the most beautiful temples in Egypt, and was then erased from history by her successor. The three colonnaded terraces are connected by ramps and decorated with exquisite painted reliefs.",
        descriptionAr:
          "زُر المعبد المدرّج الرائع لحتشبسوت، الفرعونة المصرية الشهيرة، الواقع بشكل درامي أمام المنحدرات الجيرية الشاهقة. يحكي مرشدك القصة الرائعة لواحدة من أقوى الحكام في التاريخ المصري.",
        duration: "45 minutes",
        location: "Deir el-Bahari, West Bank",
      },
      {
        step: 5,
        time: "10:30",
        title: "Karnak Temple Complex",
        titleAr: "مجمع معبد الكرنك",
        description:
          "Cross back to the East Bank and enter Karnak — the largest temple complex ever built. Dedicated primarily to the god Amun, the site covers 2 square kilometers and was expanded by successive pharaohs over 2,000 years. Your guide leads you through the Avenue of Ram-headed Sphinxes at the entrance, the enormous First Pylon, and the Great Hypostyle Hall — an overwhelming forest of 134 massive columns. You'll visit the Sanctuary of Amun, the Sacred Lake (where priests performed ritual purification), and the remaining obelisks of Hatshepsut and Thutmose I. The scale and complexity of Karnak has to be seen to be believed.",
        descriptionAr:
          "عُد إلى الضفة الشرقية وادخل الكرنك — أكبر مجمع معابد بُني على الإطلاق. مكرس أساساً للإله آمون، يغطي الموقع 2 كيلومتر مربع ووسّعه فراعنة متعاقبون على مدى 2000 عام.",
        duration: "2 hours",
        location: "Karnak Temple, East Bank Luxor",
        tips: "The complex is vast — let your guide set the pace. It's easy to get lost without one.",
        tipsAr: "المجمع شاسع — دع مرشدك يحدد الوتيرة. من السهل الضياع بدونه.",
      },
      {
        step: 6,
        time: "13:00",
        title: "Luxor Temple",
        titleAr: "معبد الأقصر",
        description:
          "Walk or drive a short distance south to Luxor Temple, built primarily by Amenhotep III and Ramses II. Unlike Karnak — a complex built over millennia — Luxor Temple has a harmonious and elegant design. Your guide shows you the massive entrance pylon of Ramses II, decorated with scenes from the Battle of Kadesh, the two seated colossi and the remaining obelisk (its twin stands in the Place de la Concorde in Paris), and the elegant colonnaded court of Amenhotep III. Look for the Roman shrine inside the temple and the fascinating small mosque built directly on top of the ancient structure — a reminder of the layers of history embedded in this city.",
        descriptionAr:
          "امشِ أو اقد مسافة قصيرة جنوباً إلى معبد الأقصر، الذي بناه أساساً أمنحتب الثالث ورمسيس الثاني. يُريك مرشدك البوابة الضخمة لرمسيس الثاني والتمثالين الجالسين والمسلة الباقية — نظيرتها تقف في ساحة الكونكورد في باريس.",
        duration: "1 hour",
        location: "Luxor Temple, Corniche el-Nil",
        tips: "If possible, arrange to walk this section — Luxor Temple is a 10-minute walk from Karnak along the Nile Corniche.",
        tipsAr: "إن أمكن، نظّم المشي في هذا القسم — معبد الأقصر على بعد 10 دقائق مشياً من الكرنك.",
      },
      {
        step: 7,
        time: "14:30",
        title: "Drop-off at Hotel",
        titleAr: "التوصيل إلى الفندق",
        description: "Your guide and driver return you to your hotel. End of tour.",
        descriptionAr: "يعيدك مرشدك وسائقك إلى فندقك. نهاية الجولة.",
        duration: null,
        location: "Your hotel, Luxor",
      },
    ],
    importantInfo: [
      "This is the most comprehensive single-day Luxor tour available",
      "Start time is early to make the most of the cooler morning at the Valley of the Kings",
      "Wear comfortable, well-soled walking shoes — you'll cover significant distance",
      "Dress modestly throughout — cover shoulders and knees at all sites",
      "Bring at least 2 liters of water per person and sunscreen",
      "Optional Tutankhamun tomb adds ~$16.50 — bring cash",
    ],
    importantInfoAr: [
      "هذه أشمل جولة يومية واحدة في الأقصر",
      "وقت البداية مبكر للاستفادة من برودة الصباح في وادي الملوك",
      "ارتدِ حذاءً مريحاً — ستقطع مسافة كبيرة",
      "ارتدِ ملابس محتشمة — غطِّ الكتفين والركبتين في جميع المواقع",
    ],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "الاستقبال من الفندق في أي مكان في مدينة الأقصر",
    },
    accessibility: "Moderate fitness required. Long day with significant walking across multiple sites.",
    accessibilityAr: "يتطلب لياقة بدنية معتدلة. يوم طويل مع مشي كبير عبر مواقع متعددة.",
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
    itinerary: [
      {
        step: 1,
        time: "On request",
        title: "Driver Confirmation & Tracking",
        titleAr: "تأكيد السائق والتتبع",
        description:
          "After booking, you receive a confirmation with your driver's name and contact number. On the day of transfer, your driver will contact you 30 minutes before pickup to confirm the arrangement.",
        descriptionAr:
          "بعد الحجز، تتلقى تأكيداً باسم سائقك ورقم اتصاله. في يوم التوصيل، سيتواصل معك سائقك قبل 30 دقيقة من الاستقبال.",
      },
      {
        step: 2,
        time: "As scheduled",
        title: "Pickup at Your Location",
        titleAr: "الاستقبال من موقعك",
        description:
          "Your chauffeur arrives at the agreed location — airport arrivals hall, hotel lobby, cruise ship dock, train station, or any other address in Luxor. For airport pickups, your driver will be waiting in the arrivals hall holding a sign with your name.",
        descriptionAr:
          "يصل سائقك إلى الموقع المتفق عليه — صالة وصول المطار، بهو الفندق، رصيف السفينة، محطة القطار، أو أي عنوان آخر في الأقصر. لاستقبال المطار، سيكون سائقك في انتظارك حاملاً لافتة باسمك.",
        tips: "For airport pickups: your driver monitors the flight and adjusts for delays automatically — no need to contact them if your flight is late.",
        tipsAr: "لاستقبال المطار: يتابع السائق رحلتك تلقائياً ويضبط وقته للتأخيرات — لا حاجة للتواصل معه إذا تأخرت.",
      },
      {
        step: 3,
        time: "In transit",
        title: "Comfortable Transfer in Air-Conditioned Vehicle",
        titleAr: "توصيل مريح في مركبة مكيفة",
        description:
          "Travel in a clean, modern, air-conditioned vehicle. Journey times in Luxor: Airport to city center (~20–30 minutes), East Bank to West Bank (~25 minutes including Nile crossing), Luxor to train station (~10 minutes). For longer transfers such as Luxor to Hurghada (~4 hours) or Luxor to Cairo, larger vehicles and adjusted pricing apply.",
        descriptionAr:
          "سافر في مركبة نظيفة وحديثة ومكيفة. أوقات الرحلة في الأقصر: من المطار إلى وسط المدينة (~20-30 دقيقة)، من الضفة الشرقية إلى الغربية (~25 دقيقة). للتوصيلات الأطول مثل الأقصر إلى الغردقة (~4 ساعات) تنطبق مركبات أكبر وأسعار مختلفة.",
      },
      {
        step: 4,
        time: "On arrival",
        title: "Drop-off at Destination",
        titleAr: "التوصيل إلى وجهتك",
        description:
          "Your driver takes you directly to the entrance of your hotel, cruise ship, or specified address. He assists with luggage if needed.",
        descriptionAr:
          "يأخذك سائقك مباشرةً إلى مدخل فندقك أو سفينتك أو العنوان المحدد. ويساعدك بالأمتعة إذا لزم الأمر.",
      },
    ],
    importantInfo: [
      "Share your full hotel name and address when booking",
      "For airport pickups, include your flight number so the driver tracks it",
      "Transfers are available 24 hours a day, 7 days a week",
      "Child seats available on request at no extra charge",
      "Luggage assistance included",
    ],
    importantInfoAr: [
      "شارك اسم فندقك وعنوانه الكامل عند الحجز",
      "لاستقبال المطار، أدرج رقم رحلتك حتى يتتبعها السائق",
      "التوصيلات متاحة 24 ساعة في اليوم، 7 أيام في الأسبوع",
      "مقاعد الأطفال متوفرة عند الطلب بدون رسوم إضافية",
    ],
    meetingPoint: {
      description: "Driver meets you at your specified pickup location",
      descriptionAr: "السائق يلتقي بك في موقع الاستقبال المحدد",
    },
    accessibility: "Fully accessible. Wheelchair-accessible vehicles available on request.",
    accessibilityAr: "متاح بالكامل. مركبات مجهزة لكراسي العجلات متوفرة عند الطلب.",
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
    itinerary: [
      {
        step: 1,
        time: "04:30",
        title: "Pre-Dawn Hotel Pickup",
        titleAr: "الاستقبال من الفندق قبل الفجر",
        description:
          "Your driver picks you up from your hotel before first light — this very early departure is essential to reach the launch site in time for the sunrise. The drive takes approximately 15–20 minutes to the West Bank launch area. A light snack or hot tea may be offered at the meeting point.",
        descriptionAr:
          "يأخذك سائقك من فندقك قبل ظهور الضوء — هذا المغادرة المبكرة جداً ضرورية للوصول إلى موقع الإطلاق في الوقت المناسب للشروق. يستغرق القيادة نحو 15-20 دقيقة إلى منطقة الإطلاق في الضفة الغربية.",
        duration: "20 minutes driving",
        location: "Your hotel, Luxor",
      },
      {
        step: 2,
        time: "05:00",
        title: "Arrival at Launch Site — Balloon Inflation",
        titleAr: "الوصول إلى موقع الإطلاق — نفخ المنطاد",
        description:
          "Arrive at the West Bank launch field while it's still dark. Watch the spectacular process of inflating the giant hot air balloon using powerful gas burners — in the darkness, the illuminated balloon glows like a lantern against the pre-dawn sky. Your pilot introduces themselves, conducts a safety briefing, and explains what to expect during the flight. You'll be divided into your basket group (baskets typically hold 16–24 passengers, divided into compartments).",
        descriptionAr:
          "تصل إلى حقل الإطلاق في الضفة الغربية بينما لا يزال الوقت مظلماً. شاهد العملية المذهلة لنفخ المنطاد الهوائي العملاق باستخدام موقدات الغاز القوية — في الظلام، يتوهج المنطاد المضاء كلانترن في سماء ما قبل الفجر.",
        duration: "30 minutes",
        location: "West Bank Launch Field, Luxor",
        tips: "Dress in layers — it can be chilly on the ground before sunrise, but comfortable in the air once up.",
        tipsAr: "ارتدِ طبقات من الملابس — يمكن أن يكون الطقس بارداً على الأرض قبل الشروق.",
      },
      {
        step: 3,
        time: "05:30",
        title: "Liftoff — Sunrise Flight Over Luxor",
        titleAr: "الإقلاع — رحلة الشروق فوق الأقصر",
        description:
          "As the first light of dawn appears on the horizon, your balloon lifts gently off the ground. Within minutes you are soaring 300–600 meters above the ancient landscape. Your pilot navigates using the wind, rising and descending to catch different currents and maximize the experience. You'll drift across the West Bank with unobstructed 360-degree views. Landmarks visible from above typically include: the Valley of the Kings — the rocky valleys where the royal tombs are cut into the cliffs; the Mortuary Temple of Hatshepsut — dramatically revealed from the air against its cliff backdrop; Medinet Habu — the vast rectangle of Ramses III's temple; the Colossi of Memnon — the twin statues visible as small figures on the plain; the green Nile valley — a vivid ribbon of green between the yellow desert on both banks; Karnak Temple — the enormous complex on the East Bank visible in the distance; and the Nile River itself — silver in the early morning light, with feluccas beginning to appear on the water.",
        descriptionAr:
          "مع ظهور أولى أضواء الفجر على الأفق، ترتفع المنطاد ببطء عن الأرض. في غضون دقائق ستحلق على ارتفاع 300-600 متر فوق المنظر القديم. يتنقل طيارك باستخدام الريح، ترتفع وتنزل للحصول على تيارات مختلفة. ستنجرف عبر الضفة الغربية مع إطلالات بانورامية 360 درجة غير مقيدة.",
        duration: "45–60 minutes",
        location: "Above West Bank and Nile, Luxor",
        tips: "Bring your camera fully charged. The light changes dramatically every few minutes at sunrise. No need for a zoom lens — the views are incredible at any focal length.",
        tipsAr: "أحضر كاميرتك مشحونة بالكامل. الضوء يتغير بشكل درامي كل دقائق عند الشروق. لا حاجة لعدسة تكبير.",
      },
      {
        step: 4,
        time: "06:30",
        title: "Descent & Landing",
        titleAr: "النزول والهبوط",
        description:
          "Your pilot guides the balloon to a landing spot on the West Bank — typically in one of the agricultural fields. Landing is smooth and controlled. A ground crew chases the balloon throughout the flight and is waiting at the landing point to help passengers disembark safely.",
        descriptionAr:
          "يوجه طيارك المنطاد إلى نقطة هبوط في الضفة الغربية — عادةً في أحد الحقول الزراعية. الهبوط سلس ومتحكم به. فريق أرضي يتابع المنطاد طوال الرحلة وينتظر في نقطة الهبوط.",
        duration: "15 minutes",
        location: "West Bank fields, Luxor",
      },
      {
        step: 5,
        time: "06:45",
        title: "Certificate Presentation",
        titleAr: "تقديم الشهادة",
        description:
          "After landing, your pilot presents each passenger with a commemorative certificate of flight. It's a tradition dating back to the earliest days of hot air ballooning.",
        descriptionAr:
          "بعد الهبوط، يقدم طيارك لكل راكب شهادة تذكارية بالرحلة. إنه تقليد يعود إلى الأيام الأولى للبالون.",
        duration: "10 minutes",
      },
      {
        step: 6,
        time: "07:00",
        title: "Return Transfer to Hotel",
        titleAr: "العودة إلى الفندق",
        description:
          "Your driver takes you back across the Nile to your hotel, arriving in time for a well-earned breakfast.",
        descriptionAr: "يعيدك سائقك عبر النيل إلى فندقك، لتصل في وقت مناسب لفطور مكتسَب بجدارة.",
        duration: "25 minutes",
        location: "West Bank to hotel, Luxor",
      },
    ],
    importantInfo: [
      "Flights are weather-dependent — your guide will contact you the night before to confirm",
      "Minimum age is typically 6 years old; minimum height 1.20m to stand in the basket",
      "Not recommended for pregnant women or people with serious heart or back conditions",
      "Wear closed-toe, flat shoes — no heels",
      "The flight duration is approximately 45–60 minutes; total experience including pickup is about 2 hours",
      "In case of cancellation due to weather, a full refund or reschedule is offered",
    ],
    importantInfoAr: [
      "الرحلات تعتمد على الطقس — سيتواصل مرشدك معك في الليلة السابقة للتأكيد",
      "الحد الأدنى للعمر عادةً 6 سنوات؛ الحد الأدنى للطول 1.20 متر",
      "غير مستحسن للنساء الحوامل أو المصابين بأمراض قلبية أو ظهر خطيرة",
      "ارتدِ أحذية مغلقة الأصابع ومسطحة — لا أحذية ذات كعوب",
    ],
    meetingPoint: {
      description: "Hotel pickup at your accommodation in Luxor — driver arrives before 05:00",
      descriptionAr: "الاستقبال من فندقك في الأقصر — يصل السائق قبل الساعة 5:00 صباحاً",
    },
    accessibility: "Passengers must be able to stand for the duration of the flight and climb in/out of the basket (approximately 1 meter height). Not suitable for wheelchair users.",
    accessibilityAr: "يجب أن يتمكن الركاب من الوقوف طوال مدة الرحلة والصعود والنزول من السلة. غير مناسب لمستخدمي كراسي العجلات.",
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
    itinerary: [
      {
        step: 1,
        time: "16:30",
        title: "Hotel Pickup",
        titleAr: "الاستقبال من الفندق",
        description:
          "Your guide meets you at your hotel in the late afternoon. An evening start avoids the worst of the day's heat and allows you to experience both temples in different light — Karnak in the golden late-afternoon sun, and Luxor Temple dramatically illuminated after dark.",
        descriptionAr:
          "يلتقي بك مرشدك في فندقك في أواخر العصر. البداية المسائية تتجنب أشد حرارة النهار وتتيح لك تجربة كلا المعبدين في أضواء مختلفة.",
        duration: "15 minutes",
        location: "Your hotel, Luxor",
      },
      {
        step: 2,
        time: "17:00",
        title: "Karnak Temple — The World's Largest Religious Complex",
        titleAr: "معبد الكرنك — أكبر مجمع ديني في العالم",
        description:
          "Enter Karnak at the height of the golden hour. Your guide begins at the Avenue of Ram-headed Sphinxes — 40 sphinx statues lining the processional way — and then leads you through the towering First Pylon into the open court. The highlight is the Great Hypostyle Hall: 134 papyrus-shaped columns arranged in 16 rows, with the two central rows reaching 23 meters high. Even standing beside the smallest columns, humans appear miniature. Your guide explains the religious significance of the hall, the symbolism of the hieroglyphic carvings, and how the entire space would have been closed off from public view — only priests and pharaohs entered. You'll continue to the sanctuary of Amun, the obelisks of Hatshepsut and Thutmose I (one still standing at over 29 meters), and walk to the edges of the sacred lake where priests performed ritual bathing before ceremonies.",
        descriptionAr:
          "ادخل الكرنك في أوج ساعة الذهب. يبدأ مرشدك عند طريق أبي الهول ذي رأس الكبش — 40 تمثالاً على طول الطريق الاحتفالي — ثم يقودك عبر البوابة الأولى الشاهقة. الجوهر هو قاعة الأعمدة العظيمة: 134 عموداً على شكل بردي في 16 صفاً.",
        duration: "90 minutes",
        location: "Karnak Temple, East Bank Luxor",
        tips: "Arrive at Karnak in the afternoon rather than morning for dramatically better photographs — the light comes from the west and illuminates the columns from the side.",
        tipsAr: "الوصول إلى الكرنك بعد الظهر بدلاً من الصباح يمنح صوراً أفضل بكثير — الضوء يأتي من الغرب.",
      },
      {
        step: 3,
        time: "18:30",
        title: "Walk the Avenue of the Sphinxes",
        titleAr: "المشي في طريق أبي الهول",
        description:
          "Walk a section of the famous 3-kilometer Avenue of the Sphinxes that connects Karnak to Luxor Temple. This ancient processional road, lined with hundreds of human-headed sphinx statues, was recently excavated and restored and is now open to visitors for the first time in centuries. Walking this road — even a portion of it — gives a powerful sense of the scale and grandeur of ancient Thebes.",
        descriptionAr:
          "امشِ على جزء من طريق أبي الهول الشهير الممتد 3 كيلومترات والذي يربط الكرنك بمعبد الأقصر. هذا الطريق الاحتفالي القديم المصطف بمئات تماثيل أبي الهول تم اكتشافه وترميمه مؤخراً.",
        duration: "20 minutes walking",
        location: "Avenue of the Sphinxes, Luxor",
        tips: "This section of the visit is one of the most photographed in Luxor right now — try to capture the full length of the sphinx-lined street.",
        tipsAr: "هذا القسم من الزيارة هو أحد أكثر الأقسام تصويراً في الأقصر حالياً.",
      },
      {
        step: 4,
        time: "19:00",
        title: "Luxor Temple — After Dark",
        titleAr: "معبد الأقصر — بعد الغروب",
        description:
          "Arrive at Luxor Temple just as night has fully fallen and the floodlights are on. The transformation is remarkable — the honey-colored sandstone glows warmly against the night sky, and the reflections of the illuminated columns shimmer in the air. Your guide walks you through the grand entrance pylon — decorated with a colossal relief of Ramses II at the Battle of Kadesh — past the seated colossi and the lone red granite obelisk (the other stands in Paris). Inside, explore the elegant colonnade of Amenhotep III, the sun court of Ramses II, and the fascinating inner sanctuary where the sacred boat of Amun was kept during the annual Opet festival. Your guide tells the story of the Opet festival — when the statues of Amun, Mut, and Khonsu were carried in procession from Karnak to Luxor Temple amid feasting and celebration. Look also for the Roman shrine and the mosque of Abu Haggag built on top of the ancient structure — extraordinary evidence of the layers of history in this city.",
        descriptionAr:
          "تصل إلى معبد الأقصر بعد حلول الليل تماماً وإضاءة الأضواء الكاشفة. التحول رائع — يتوهج الحجر الرملي بلون العسل في مواجهة السماء الليلية. يصطحبك مرشدك عبر البوابة الكبرى إلى الداخل حيث القاعة الأنيقة لأمنحتب الثالث وفناء رمسيس الثاني.",
        duration: "90 minutes",
        location: "Luxor Temple, Corniche el-Nil",
        tips: "Luxor Temple at night is one of the most beautiful sights in all of Egypt. Take your time in the colonnade — the play of light and shadow on the columns is extraordinary.",
        tipsAr: "معبد الأقصر ليلاً هو أحد أجمل المشاهد في مصر كلها. خذ وقتك في الأروقة.",
      },
      {
        step: 5,
        time: "20:30",
        title: "Drop-off at Hotel",
        titleAr: "التوصيل إلى الفندق",
        description: "Your guide and driver return you to your hotel. End of tour.",
        descriptionAr: "يعيدك مرشدك وسائقك إلى فندقك. نهاية الجولة.",
        duration: "15 minutes",
        location: "Your hotel, Luxor",
      },
    ],
    importantInfo: [
      "Evening timing is ideal for photography and avoiding the heat",
      "Dress modestly — cover shoulders and knees at both temples",
      "Luxor Temple at night is a highlight for photographers — bring your camera",
      "This tour pairs perfectly with a West Bank tour on a different day",
    ],
    importantInfoAr: [
      "التوقيت المسائي مثالي للتصوير وتجنب الحرارة",
      "ارتدِ ملابس محتشمة في كلا المعبدين",
      "معبد الأقصر ليلاً نقطة جذب للمصورين — أحضر كاميرتك",
    ],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "الاستقبال من الفندق في أي مكان في مدينة الأقصر",
    },
    accessibility: "Easy. Both temples are on flat ground. Karnak is large but accessible throughout.",
    accessibilityAr: "سهل. كلا المعبدين على أرض مستوية. الكرنك كبير لكن يمكن الوصول إليه في جميع أنحائه.",
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
    itinerary: [
      {
        step: 1,
        time: "Meet at entrance",
        title: "Meeting at Karnak Temple Main Gate",
        titleAr: "اللقاء عند البوابة الرئيسية لمعبد الكرنك",
        description:
          "Meet your guide at the main entrance of Karnak Temple on the East Bank. (Hotel pickup is not included in this tour — your guide can advise on the best way to get there independently from any hotel in Luxor.)",
        descriptionAr:
          "التقِ بمرشدك عند المدخل الرئيسي لمعبد الكرنك في الضفة الشرقية. (الاستقبال من الفندق غير مشمول في هذه الجولة — يمكن لمرشدك إرشادك لأفضل طريقة للوصول بشكل مستقل.)",
        location: "Karnak Temple Main Entrance, East Bank Luxor",
      },
      {
        step: 2,
        time: "At start",
        title: "Avenue of Ram-Headed Sphinxes & First Pylon",
        titleAr: "طريق أبي الهول ذي رأس الكبش والبوابة الأولى",
        description:
          "Your guide begins at the beginning — the 40-sphinx processional avenue and the colossal First Pylon, the last to be added to Karnak and one of the largest in Egypt. Your guide explains how the temple was built across 2,000 years by 30 successive pharaohs, each adding their own halls, obelisks, and pylons — making Karnak a living record of Egypt's New Kingdom.",
        descriptionAr:
          "يبدأ مرشدك من البداية — طريق أبي الهول المؤلف من 40 تمثالاً والبوابة الأولى الهائلة، آخر ما أُضيف إلى الكرنك وإحدى أكبر البوابات في مصر. يشرح مرشدك كيف بُني المعبد على مدى 2000 عام من قِبَل 30 فرعوناً متعاقباً.",
        duration: "20 minutes",
        location: "Karnak Temple forecourt",
      },
      {
        step: 3,
        time: "In tour",
        title: "Great Hypostyle Hall",
        titleAr: "قاعة الأعمدة العظيمة",
        description:
          "The undeniable centerpiece of any Karnak visit: the Great Hypostyle Hall, covering 5,000 square meters and containing 134 columns in 16 rows. The two central rows of 12 open-papyrus columns reach 23 meters high and 10 meters in circumference. The outer rows of 122 closed-bud columns are 'only' 13 meters high — still taller than most modern buildings. Every surface is carved with hieroglyphic texts and sacred imagery. Your guide points out the differences in artistic style between reliefs carved during the reign of Seti I (delicate and refined) and those of Ramses II (bolder and deeper). Trace the original paint that still survives in sheltered areas near the ceiling.",
        descriptionAr:
          "المحور الذي لا جدال فيه لأي زيارة للكرنك: قاعة الأعمدة العظيمة التي تغطي 5000 متر مربع وتحتوي على 134 عموداً في 16 صفاً. الصفان المركزيان من أعمدة البردي المفتوح يصلان إلى 23 متراً. كل سطح منقوش بنصوص هيروغليفية وصور مقدسة.",
        duration: "30 minutes",
        location: "Great Hypostyle Hall, Karnak",
        tips: "Look for areas where the original red, blue, green, and yellow paint still survives — particularly in the sheltered upper sections of the columns.",
        tipsAr: "ابحث عن المناطق التي لا تزال الألوان الأصلية الحمراء والزرقاء والخضراء والصفراء محفوظة فيها.",
      },
      {
        step: 4,
        time: "In tour",
        title: "Sanctuary of Amun & Obelisks",
        titleAr: "قدس الأقداس لآمون والمسلات",
        description:
          "Move deeper into the temple to reach the oldest and most sacred part: the sanctuary of Amun, where the sacred barque of the god was housed. Nearby, see the famous obelisk of Hatshepsut — one of the tallest surviving obelisks in the world at 29.6 meters — and the base of the second, which Thutmose III attempted to hide behind a wall. Your guide explains the political and religious story behind the obelisks and the complex power struggle between Egypt's two greatest rulers.",
        descriptionAr:
          "تتقدم إلى أعمق وأقدس أجزاء المعبد: قدس الأقداس لآمون حيث كانت مركب الإله المقدسة. بالقرب، شاهد مسلة حتشبسوت الشهيرة — من أطول المسلات الباقية في العالم بارتفاع 29.6 متراً.",
        duration: "20 minutes",
        location: "Inner sanctuary, Karnak",
      },
      {
        step: 5,
        time: "In tour",
        title: "Sacred Lake of Amun",
        titleAr: "البحيرة المقدسة لآمون",
        description:
          "Walk to the edges of the Sacred Lake — a rectangular artificial lake measuring 120 by 77 meters, dug by Thutmose III. Priests used the lake daily for ritual purification before entering the temple, and sacred barque processions took place on its waters during religious festivals. From the lakeside, you also get one of the best wide views of the temple complex as a whole. Your guide points out the famous scarab beetle statue of Amenhotep III on the northwest corner — walking around it seven times is said to bring good luck.",
        descriptionAr:
          "امشِ إلى جوانب البحيرة المقدسة — بحيرة اصطناعية مستطيلة تبلغ 120 في 77 متراً. استخدم الكهنة البحيرة يومياً للتطهير الطقسي. من جانب البحيرة تحصل على أحد أوسع المناظر للمجمع المعبدي. يشير مرشدك إلى تمثال الخنفساء الشهير لأمنحتب الثالث.",
        duration: "20 minutes",
        location: "Sacred Lake, Karnak",
        tips: "Walk around the scarab statue 7 times — it's said to bring good luck, and it's a fun ritual that guides have been performing with visitors for decades.",
        tipsAr: "امشِ حول تمثال الخنفساء 7 مرات — يُقال إنه يجلب الحظ الجيد، وهو طقس ممتع.",
      },
      {
        step: 6,
        time: "End of tour",
        title: "End of Tour at Temple Exit",
        titleAr: "نهاية الجولة عند مخرج المعبد",
        description:
          "Your guide concludes the tour at the temple exit with a summary of what you've seen and recommendations for what to do next in Luxor. You are free to stay and explore independently.",
        descriptionAr:
          "يختتم مرشدك الجولة عند مخرج المعبد مع ملخص لما شاهدته وتوصيات لما يمكن فعله بعد ذلك في الأقصر.",
        location: "Karnak Temple exit",
      },
    ],
    importantInfo: [
      "Hotel pickup is NOT included — you need to make your own way to Karnak Temple",
      "Taxis and tuk-tuks are readily available from any hotel in Luxor to Karnak",
      "Best visited in the morning or late afternoon to avoid the midday heat",
      "Wear comfortable shoes — Karnak is enormous and involves significant walking",
      "Bring water and sunscreen — shade inside the complex is limited",
    ],
    importantInfoAr: [
      "الاستقبال من الفندق غير مشمول — عليك التوجه بنفسك إلى معبد الكرنك",
      "سيارات الأجرة والتوك توك متاحة بسهولة من أي فندق في الأقصر",
      "أفضل وقت للزيارة صباحاً أو في أواخر العصر لتجنب حرارة الظهيرة",
    ],
    meetingPoint: {
      description: "Main entrance of Karnak Temple, East Bank Luxor — look for your guide holding a sign with your name",
      descriptionAr: "المدخل الرئيسي لمعبد الكرنك، الضفة الشرقية للأقصر — ابحث عن مرشدك يحمل لافتة باسمك",
    },
    accessibility: "Easy to moderate. The temple is mostly on flat ground but covers a very large area.",
    accessibilityAr: "سهل إلى معتدل. المعبد في معظمه على أرض مستوية لكنه يغطي مساحة كبيرة جداً.",
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
    itinerary: [
      {
        step: 1,
        time: "19:00",
        title: "Hotel Pickup",
        titleAr: "الاستقبال من الفندق",
        description:
          "Your driver picks you up from your hotel and drives you to Karnak Temple for the evening show.",
        descriptionAr: "يأخذك سائقك من فندقك ويقود إلى معبد الكرنك للعرض المسائي.",
        duration: "20 minutes",
        location: "Your hotel, Luxor",
      },
      {
        step: 2,
        time: "19:30",
        title: "Arrival & Pre-Show",
        titleAr: "الوصول وما قبل العرض",
        description:
          "Arrive at Karnak and enter the temple grounds. In the time before the show begins, you can walk quietly along the entrance sphinxes and take in the atmosphere of the enormous complex at night.",
        descriptionAr:
          "تصل إلى الكرنك وتدخل ساحة المعبد. في الوقت الذي يسبق بدء العرض، يمكنك المشي بهدوء على طول أبي الهول عند المدخل.",
        duration: "20 minutes",
        location: "Karnak Temple, East Bank Luxor",
      },
      {
        step: 3,
        time: "20:00",
        title: "Light & Sound Show Begins",
        titleAr: "بدء عرض الصوت والضوء",
        description:
          "The show begins as you are led through the darkened temple complex in stages, with each area dramatically illuminated as the narration reaches that part of the story. The 45–60 minute show recounts the history of Karnak through the voices of ancient Egyptian gods and pharaohs. Colored lights transform the Hypostyle Hall, obelisks, and Sacred Lake into an otherworldly spectacle. The finale at the Sacred Lake, where the entire temple is reflected in the still water, is particularly dramatic. Shows are performed in multiple languages on different evenings — confirm the English schedule when booking.",
        descriptionAr:
          "يبدأ العرض بينما تُقاد عبر مجمع المعبد المُظلم على مراحل، مع إضاءة كل منطقة بشكل درامي عندما يصل التعليق إلى ذلك الجزء من القصة. يستغرق العرض 45-60 دقيقة ويروي تاريخ الكرنك من خلال أصوات الآلهة والفراعنة المصريين القدماء.",
        duration: "60 minutes",
        location: "Throughout Karnak Temple complex",
        tips: "Bring a light jacket — the temple can feel cool at night even when the day was hot.",
        tipsAr: "أحضر معك سترة خفيفة — يمكن أن يبدو المعبد بارداً في الليل حتى لو كان النهار حاراً.",
      },
      {
        step: 4,
        time: "21:00",
        title: "Return Transfer to Hotel",
        titleAr: "العودة إلى الفندق",
        description: "Your driver returns you to your hotel after the show. End of evening.",
        descriptionAr: "يعيدك سائقك إلى فندقك بعد العرض. نهاية الأمسية.",
        duration: "20 minutes",
        location: "Karnak to your hotel, Luxor",
      },
    ],
    importantInfo: [
      "Show schedule varies by evening and language — confirm English show times when booking",
      "The show runs approximately 45–60 minutes; with travel time the full experience is about 2 hours",
      "Bring a light layer — the temple is exposed and can be cool at night",
      "This experience pairs well with a daytime Karnak guided tour to get the full understanding before the show",
    ],
    importantInfoAr: [
      "جدول العرض يتغير حسب المساء واللغة — تأكد من مواعيد العرض الإنجليزي عند الحجز",
      "يستمر العرض نحو 45-60 دقيقة؛ مع وقت التنقل التجربة الكاملة نحو ساعتين",
      "أحضر طبقة خفيفة — المعبد مكشوف وقد يكون بارداً في الليل",
    ],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "الاستقبال من الفندق في أي مكان في مدينة الأقصر",
    },
    accessibility: "Easy. The show route is on flat ground throughout the temple complex.",
    accessibilityAr: "سهل. مسار العرض على أرض مستوية في جميع أنحاء مجمع المعبد.",
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
    itinerary: [
      {
        step: 1,
        time: "07:00",
        title: "Hotel Pickup in Luxor",
        titleAr: "الاستقبال من الفندق في الأقصر",
        description:
          "Your guide and driver collect you from your hotel for the approximately 2-hour drive south to Edfu along the Nile Valley. The route passes through rural Egyptian countryside, giving you a glimpse of the traditional agricultural life still practiced along the river.",
        descriptionAr:
          "يأخذك مرشدك وسائقك من فندقك لرحلة القيادة الجنوبية التي تستغرق نحو ساعتين إلى إدفو على طول وادي النيل. يمر الطريق عبر الريف المصري.",
        duration: "2 hours driving",
        location: "Luxor to Edfu",
      },
      {
        step: 2,
        time: "09:00",
        title: "Horse Carriage Ride to Edfu Temple",
        titleAr: "ركوب العربة الكارو إلى معبد إدفو",
        description:
          "Arrive in the town of Edfu and board a traditional horse-drawn carriage for the 10-minute ride through the local streets to the temple entrance. This is the traditional and most atmospheric way to arrive at Edfu Temple.",
        descriptionAr:
          "تصل إلى مدينة إدفو وتركب عربة كارو تقليدية يجرها حصان لرحلة 10 دقائق عبر الشوارع المحلية إلى مدخل المعبد.",
        duration: "10 minutes carriage ride",
        location: "Edfu town to Edfu Temple",
        tips: "Enjoy the carriage ride — it's a genuinely traditional experience and gives you a great view of local Edfu life.",
        tipsAr: "استمتع برحلة العربة — إنها تجربة تقليدية حقيقية وتمنحك نظرة رائعة على الحياة المحلية في إدفو.",
      },
      {
        step: 3,
        time: "09:15",
        title: "Temple of Horus at Edfu",
        titleAr: "معبد حورس في إدفو",
        description:
          "Enter the Temple of Horus — built during the Ptolemaic period (237–57 BC) — which is the most completely preserved ancient temple in Egypt. Because it was buried under desert sand for centuries, it escaped much of the damage suffered by older temples. The entrance pylon, at 36 meters high, is one of the tallest in Egypt and is covered in reliefs showing the pharaoh smiting his enemies. Inside the main courtyard, you'll find the famous 'black granite Horus falcon' — one of the most iconic statues in Egypt. Your guide leads you through the Hypostyle Halls and into the inner sanctuary, where the sanctuary barque naos (shrine) still stands — the stone box that would have held the sacred statue of Horus. The walls throughout are covered in reliefs depicting the sacred 'Horus Drama' — the eternal battle between Horus and Set — told in sequential images like an ancient graphic novel.",
        descriptionAr:
          "ادخل معبد حورس — المبني في العصر البطلمي (237-57 قبل الميلاد) — وهو أكمل معبد قديم محفوظ في مصر. البوابة، بارتفاع 36 متراً، من أطول البوابات في مصر. في الفناء الرئيسي تجد 'صقر حورس من الغرانيت الأسود' الشهير. يقودك مرشدك عبر قاعات الأعمدة إلى قدس الأقداس الداخلي.",
        duration: "90 minutes",
        location: "Edfu Temple, Aswan Governorate",
        tips: "Look for the 'sacred drama' reliefs on the outer walls — a sequence of panels telling the story of Horus defeating Set that reads like an ancient comic strip.",
        tipsAr: "ابحث عن نقوش 'الدراما المقدسة' على الجدران الخارجية — سلسلة من اللوحات تروي قصة حورس وست.",
      },
      {
        step: 4,
        time: "10:45",
        title: "Return by Carriage & Drive to Kom Ombo",
        titleAr: "العودة بالعربة والقيادة إلى كوم أمبو",
        description:
          "Return to your vehicle by horse carriage and drive approximately 1 hour further south to Kom Ombo. Lunch stop possible en route — not included in price.",
        descriptionAr:
          "العودة إلى مركبتك بالعربة الكارو والقيادة نحو ساعة إضافية جنوباً إلى كوم أمبو. توقف الغداء ممكن في الطريق — غير مشمول في السعر.",
        duration: "1 hour driving",
        location: "Edfu to Kom Ombo",
      },
      {
        step: 5,
        time: "12:00",
        title: "Double Temple of Kom Ombo",
        titleAr: "المعبد المزدوج في كوم أمبو",
        description:
          "Arrive at Kom Ombo, uniquely situated on a bend in the Nile with the river visible from inside the temple precinct. The temple is dedicated simultaneously to two gods: Sobek (the crocodile-headed god of fertility, water, and the Nile) and Haroeris (Horus the Elder, falcon god of the sky). Everything in the temple is perfectly symmetrical — two entrances, two hypostyle halls, two inner sanctuaries — reflecting the dual nature of the divine presence here. Your guide explains the significance of each deity and the rituals performed in their honor. Visit the Crocodile Museum within the complex to see dozens of actual mummified crocodiles in various sizes — crocodiles were sacred animals worshipped here as manifestations of Sobek. Look also for the ancient medical instruments carved on one of the inner walls — forceps, scalpels, clamps — evidence of the medical school once associated with the temple. The riverside location makes Kom Ombo particularly beautiful in the afternoon light.",
        descriptionAr:
          "تصل إلى كوم أمبو، الواقع بشكل فريد على منعطف في النيل. المعبد مكرس في آنٍ واحد لإلهين: سوبك إله التماسيح ذو الرأس وحورس الكبير. كل شيء في المعبد متماثل تماماً — مدخلان وقاعتا أعمدة وقدسا أقداس داخليان. زُر متحف التماسيح داخل المجمع.",
        duration: "90 minutes",
        location: "Kom Ombo Temple, Aswan Governorate",
        tips: "Look for the carved medical instruments on the inner walls of the temple — these reliefs are a surprising and remarkable glimpse into ancient Egyptian medicine.",
        tipsAr: "ابحث عن أدوات طبية منقوشة على الجدران الداخلية للمعبد — نافذة مدهشة على الطب المصري القديم.",
      },
      {
        step: 6,
        time: "13:30",
        title: "Return Drive to Luxor",
        titleAr: "رحلة العودة إلى الأقصر",
        description:
          "Begin the approximately 2.5-hour drive north back to Luxor, arriving in the late afternoon.",
        descriptionAr: "ابدأ رحلة القيادة شمالاً التي تستغرق نحو 2.5 ساعة إلى الأقصر، تصل في أواخر العصر.",
        duration: "2.5 hours driving",
        location: "Kom Ombo to Luxor",
      },
      {
        step: 7,
        time: "16:30",
        title: "Drop-off at Hotel",
        titleAr: "التوصيل إلى الفندق",
        description: "Your driver drops you off at your hotel entrance. End of day trip.",
        descriptionAr: "يوصلك سائقك إلى مدخل فندقك. نهاية الرحلة اليومية.",
        duration: null,
        location: "Your hotel, Luxor",
      },
    ],
    importantInfo: [
      "Long day with significant driving — bring snacks and entertainment for the road",
      "Lunch is not included — bring money or pack your own food",
      "Dress modestly at both temples — cover shoulders and knees",
      "Bring plenty of water — both sites have limited shade",
      "The horse carriage ride is included and is a standard part of visiting Edfu",
    ],
    importantInfoAr: [
      "يوم طويل مع قيادة كبيرة — أحضر وجبات خفيفة",
      "الغداء غير مشمول — أحضر نقوداً أو طعامك",
      "ارتدِ ملابس محتشمة في كلا المعبدين",
      "أحضر كمية وفيرة من الماء — كلا الموقعين لهما ظل محدود",
    ],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "الاستقبال من الفندق في أي مكان في مدينة الأقصر",
    },
    accessibility: "Moderate. Both temples involve walking on ancient stone floors with some steps.",
    accessibilityAr: "معتدل. يتضمن كلا المعبدين المشي على أرضيات حجرية قديمة مع بعض الدرجات.",
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
    itinerary: [
      {
        step: 1,
        time: "Meeting point",
        title: "Meet Your Carriage at Luxor Temple Square",
        titleAr: "لقاء العربة في ميدان معبد الأقصر",
        description:
          "Meet your English-speaking guide and horse-drawn carriage at the square in front of Luxor Temple. (Hotel pickup is not included — the meeting point is a short walk or taxi ride from any hotel in Luxor.)",
        descriptionAr:
          "التقِ بمرشدك الناطق بالإنجليزية والعربة في الميدان أمام معبد الأقصر. (الاستقبال من الفندق غير مشمول.)",
        location: "Luxor Temple Square, Corniche el-Nil",
      },
      {
        step: 2,
        time: "At start",
        title: "Nile Corniche — Past Luxor Temple",
        titleAr: "كورنيش النيل — بمحاذاة معبد الأقصر",
        description:
          "Your carriage sets off along the famous Nile Corniche road, one of the most scenic urban promenades in Egypt. You pass directly in front of the entrance to Luxor Temple — the grand pylon of Ramses II and the avenue of sphinxes are visible from the carriage. Your guide points out landmarks and shares the history of the Corniche, which follows the route of the ancient processional road used by Egyptians for thousands of years.",
        descriptionAr:
          "تنطلق عربتك على طول طريق كورنيش النيل الشهير، أحد أجمل المنشآت الحضرية في مصر. تمر مباشرة أمام مدخل معبد الأقصر — البوابة الكبرى لرمسيس الثاني وطريق أبي الهول مرئيان من العربة.",
        duration: "20 minutes",
        location: "Nile Corniche, Luxor",
        tips: "The Corniche is especially beautiful in the late afternoon when the light on the Nile turns golden.",
        tipsAr: "الكورنيش جميل بشكل خاص في أواخر العصر عندما يتحول الضوء على النيل إلى الذهبي.",
      },
      {
        step: 3,
        time: "In tour",
        title: "Through the City Streets & Market",
        titleAr: "عبر شوارع المدينة والسوق",
        description:
          "Your driver guides the horse through the backstreets of Luxor — a completely different experience from the tourist strip. Pass by local shops, spice markets, coffee houses, and neighborhood mosques. The rhythm of the horse's hooves, the sounds of the city, and the unhurried pace make this one of the most genuinely atmospheric ways to experience Luxor life.",
        descriptionAr:
          "يقود سائقك الحصان عبر الأزقة الخلفية للأقصر — تجربة مختلفة تماماً عن المنطقة السياحية. مرور بالمحلات المحلية وأسواق التوابل وبيوت القهوة والمساجد. إيقاع حوافر الحصان وأصوات المدينة والوتيرة الهادئة تجعل هذه التجربة من أكثر الطرق تجسيداً لحياة الأقصر.",
        duration: "30 minutes",
        location: "Luxor city streets",
        tips: "This is a great time to buy something from local market stalls — ask your guide to stop if something catches your eye.",
        tipsAr: "هذا وقت رائع لشراء شيء من أكشاك السوق المحلي — اطلب من مرشدك التوقف.",
      },
      {
        step: 4,
        time: "In tour",
        title: "Return Along the Corniche",
        titleAr: "العودة على طول الكورنيش",
        description:
          "Your carriage loops back along the Corniche, giving you a second pass of the Nile views and Luxor Temple exterior. Your guide answers any remaining questions about Luxor and gives recommendations for your stay.",
        descriptionAr:
          "تعود عربتك على طول الكورنيش، مما يمنحك مروراً ثانياً بمناظر النيل وواجهة معبد الأقصر. يجيب مرشدك على أسئلتك المتبقية.",
        duration: "20 minutes",
        location: "Nile Corniche, Luxor",
      },
      {
        step: 5,
        time: "End of tour",
        title: "Drop-off at Luxor Temple Square",
        titleAr: "التوصيل إلى ميدان معبد الأقصر",
        description:
          "The carriage returns you to the meeting point at Luxor Temple Square. You are free to enter Luxor Temple independently or continue exploring the city on foot.",
        descriptionAr:
          "تعود العربة بك إلى نقطة اللقاء في ميدان معبد الأقصر. أنت حر لدخول معبد الأقصر باستقلالية أو مواصلة استكشاف المدينة سيراً.",
        location: "Luxor Temple Square, Corniche el-Nil",
      },
    ],
    importantInfo: [
      "Meet at Luxor Temple Square — hotel pickup is not included",
      "The tour is relaxed and runs at a gentle pace — ideal for families and first-time visitors",
      "Best experienced in the late afternoon or early evening for the best light",
      "Tips for the driver and horse are appreciated and traditional",
    ],
    importantInfoAr: [
      "اللقاء في ميدان معبد الأقصر — الاستقبال من الفندق غير مشمول",
      "الجولة مريحة وتسير بوتيرة هادئة — مثالية للعائلات والزوار لأول مرة",
      "أفضل وقت في أواخر العصر أو المساء الباكر لأفضل ضوء",
    ],
    meetingPoint: {
      description: "Luxor Temple Square, Corniche el-Nil — your guide will be waiting with the carriage",
      descriptionAr: "ميدان معبد الأقصر، كورنيش النيل — مرشدك سينتظر مع العربة",
    },
    accessibility: "Easy. The carriage has steps to board. Not suitable for wheelchair users.",
    accessibilityAr: "سهل. العربة بها درجات للصعود. غير مناسبة لمستخدمي كراسي العجلات.",
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
    itinerary: [
      {
        step: 1,
        time: "09:00",
        title: "Hotel Pickup",
        titleAr: "الاستقبال من الفندق",
        description:
          "Your guide meets you at your hotel and drives you to the Luxor Museum on the Nile Corniche — a short journey from most hotels in central Luxor.",
        descriptionAr:
          "يلتقي بك مرشدك في فندقك ويقودك إلى متحف الأقصر على كورنيش النيل — رحلة قصيرة من معظم فنادق وسط الأقصر.",
        duration: "15 minutes",
        location: "Your hotel, Luxor",
      },
      {
        step: 2,
        time: "09:15",
        title: "Luxor Museum",
        titleAr: "متحف الأقصر",
        description:
          "Enter one of Egypt's finest museums — a purpose-built, thoughtfully designed institution that presents its collection in a way that puts the Cairo Egyptian Museum to shame in terms of lighting, labeling, and layout. The collection focuses exclusively on Theban artifacts and contains some of the most spectacular ancient Egyptian objects anywhere in the world. Key highlights include: the Cache of Luxor — 17 beautifully preserved royal statues discovered in 1989 hidden beneath Luxor Temple's floor, including a stunning alabaster statue of Thutmose III; the Tutankhamun collection — a small but remarkable selection of golden objects and royal equipment from the young king's tomb; the Wall of Akhenaten — reconstructed from thousands of talatat blocks, depicting the heretic pharaoh's new religious order; the royal mummies room — two royal mummies on display (Ahmose I and Ramses I) in a respectfully presented environment; and a superb collection of New Kingdom jewelry, weapons, ushabti figurines, and sacred objects.",
        descriptionAr:
          "ادخل إلى أحد أفضل متاحف مصر — مؤسسة مبنية خصيصاً ومصممة بعناية تعرض مجموعتها بطريقة تُخجل متحف القاهرة من حيث الإضاءة والبطاقات والتخطيط. المجموعة تركز حصرياً على القطع الأثرية الطيبية. تضم قطعاً أساسية مثل مخبأ الأقصر ومجموعة توت عنخ آمون وجدار أخناتون والمومياوات الملكية.",
        duration: "2 hours",
        location: "Luxor Museum, Corniche el-Nil",
        tips: "Luxor Museum is often overlooked by visitors who go straight to the sites — it's a serious mistake. The museum puts the objects in context and makes the temples far more meaningful.",
        tipsAr: "متحف الأقصر يُغفله كثير من الزوار الذين يتوجهون مباشرة إلى المواقع — خطأ جسيم. المتحف يضع القطع في سياقها.",
      },
      {
        step: 3,
        time: "11:30",
        title: "Short Walk to Museum of Mummification",
        titleAr: "مشي قصير إلى متحف التحنيط",
        description:
          "Walk a few minutes along the Corniche from the Luxor Museum to the Museum of Mummification, located near the entrance of Luxor Temple.",
        descriptionAr:
          "امشِ بضع دقائق على الكورنيش من متحف الأقصر إلى متحف التحنيط، الواقع بالقرب من مدخل معبد الأقصر.",
        duration: "5 minutes walking",
        location: "Corniche el-Nil, Luxor",
      },
      {
        step: 4,
        time: "11:45",
        title: "Museum of Mummification",
        titleAr: "متحف التحنيط",
        description:
          "Enter the only museum in Egypt dedicated exclusively to the ancient art and science of mummification. The museum explains the entire mummification process in clear, illustrated stages — from the initial preparation of the body to the wrapping and the placement of amulets. On display are genuine mummified humans, animals (including mummified cats, crocodiles, fish, and a ram), and the actual tools used by ancient Egyptian embalmers: natron (salt), canopic jars, linen wrappings, wooden embalming tables, and metal hooks used to extract the brain through the nasal passage. Your guide provides commentary that is detailed but sensitive, explaining the deeply spiritual and religious motivations behind mummification and the ancient Egyptian concept of the ka (soul) and its need for a preserved physical body.",
        descriptionAr:
          "ادخل المتحف الوحيد في مصر المكرس حصرياً لفن وعلم التحنيط القديم. يشرح المتحف عملية التحنيط الكاملة بمراحل مصورة واضحة. معروضة مومياوات بشرية وحيوانية حقيقية والأدوات الفعلية التي استخدمها المحنطون المصريون القدماء.",
        duration: "1 hour",
        location: "Museum of Mummification, Corniche el-Nil",
        tips: "The museum is small but dense with information. Take your time with each exhibit rather than rushing through.",
        tipsAr: "المتحف صغير لكن مليء بالمعلومات. خذ وقتك مع كل معروضات بدلاً من الاندفاع.",
      },
      {
        step: 5,
        time: "13:00",
        title: "Return Transfer to Hotel",
        titleAr: "العودة إلى الفندق",
        description: "Your guide and driver return you to your hotel. End of tour.",
        descriptionAr: "يعيدك مرشدك وسائقك إلى فندقك. نهاية الجولة.",
        duration: "15 minutes",
        location: "Your hotel, Luxor",
      },
    ],
    importantInfo: [
      "This tour is highly recommended as a first activity in Luxor before visiting the temples",
      "Photography is not permitted inside the Luxor Museum",
      "Both museums are air-conditioned — a welcome relief on hot days",
      "The tour is suitable for children but parental guidance is advised for the mummification museum",
    ],
    importantInfoAr: [
      "تُنصح بشدة بهذه الجولة كأولى نشاطاتك في الأقصر قبل زيارة المعابد",
      "التصوير غير مسموح داخل متحف الأقصر",
      "كلا المتحفين مكيفان — راحة كبيرة في الأيام الحارة",
      "الجولة مناسبة للأطفال لكن يُنصح بتوجيه الوالدين في متحف التحنيط",
    ],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "الاستقبال من الفندق في أي مكان في مدينة الأقصر",
    },
    accessibility: "Easy. Both museums are fully accessible with ramps and elevators.",
    accessibilityAr: "سهل. كلا المتحفين يمكن الوصول إليهما بالكامل بالمنحدرات والمصاعد.",
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
    itinerary: [
      {
        step: 1,
        time: "16:00",
        title: "Board Felucca at Luxor Dock",
        titleAr: "الصعود إلى الفلوكة في رصيف الأقصر",
        description:
          "Meet your guide and captain at the Nile felucca dock in central Luxor (near the Mercure Hotel). Board your traditional wooden sailing felucca — one of the oldest watercraft designs in the world, used on the Nile for thousands of years. Your captain hoists the distinctive lateen sail and you cast off from the bank into the current.",
        descriptionAr:
          "التقِ بمرشدك وربانك عند رصيف الفلوكة في وسط الأقصر. اصعد على متن فلوكتك الشراعية الخشبية التقليدية — أحد أقدم تصاميم القوارب في العالم. يرفع ربانك الشراع ويبتعدون عن الشاطئ.",
        duration: "10 minutes",
        location: "Luxor Nile dock, East Bank",
        tips: "The felucca dock is near the Mercure Hotel on the Corniche — ask any local or hotel concierge for directions.",
        tipsAr: "رصيف الفلوكة قرب فندق ميركيور على الكورنيش — اسأل أي شخص محلي أو موظف الفندق.",
      },
      {
        step: 2,
        time: "16:10",
        title: "Sailing North on the Nile — Golden Hour",
        titleAr: "الإبحار شمالاً على النيل — الساعة الذهبية",
        description:
          "Sail gently northward along the Nile in the late afternoon light. This is the most beautiful time of day on the river — the golden light illuminates the West Bank mountains and the green fellahin fields, while the East Bank skyline and minarets are reflected in the calm water. Your captain uses nothing but the wind to navigate. Sit back, relax, and simply watch the world drift past — a completely unhurried experience that is the antithesis of the intense temple tours.",
        descriptionAr:
          "أبحر بلطف شمالاً على النيل في ضوء أواخر العصر. هذا أجمل وقت من اليوم على النهر — الضوء الذهبي يضيء جبال الضفة الغربية والحقول الخضراء. يستخدم ربانك الريح فقط للتنقل. استرخِ وشاهد العالم يمر.",
        duration: "45 minutes",
        location: "Nile River, north of Luxor",
        tips: "Bring your camera for the light — but also put it down sometimes and just experience being on the Nile.",
        tipsAr: "أحضر كاميرتك — لكن أرحها أحياناً وعش تجربة التواجد على النيل.",
      },
      {
        step: 3,
        time: "17:00",
        title: "Arrive at Banana Island",
        titleAr: "الوصول إلى جزيرة الموز",
        description:
          "Your captain moors the felucca at Banana Island — a small, lush Nile island about 8 kilometers north of central Luxor. The island is a working farm, densely planted with banana palms, mango trees, sugar cane, papyrus, and other tropical plants. Step ashore and walk through the cool green gardens with your guide, who explains the plants and the history of the island. You can sample fruit straight from the trees if in season. The contrast between the lush green island and the surrounding desert and river is remarkably beautiful.",
        descriptionAr:
          "يربط ربانك الفلوكة في جزيرة الموز — جزيرة نيلية صغيرة خضراء على بعد نحو 8 كيلومترات شمال وسط الأقصر. الجزيرة مزرعة عاملة مزروعة كثيفاً بأشجار الموز والمانجو وقصب السكر والبردي. انزل إلى الشاطئ وتجول في الحدائق الخضراء المنعشة.",
        duration: "30 minutes",
        location: "Banana Island, Nile north of Luxor",
        tips: "Try to visit during mango season (May–September) to taste the remarkable local mangoes fresh from the tree.",
        tipsAr: "حاول الزيارة خلال موسم المانجو (مايو–سبتمبر) لتذوق المانجو المحلية الرائعة مباشرة من الشجرة.",
      },
      {
        step: 4,
        time: "17:30",
        title: "Return Sail — Sunset on the Nile",
        titleAr: "رحلة العودة — غروب الشمس على النيل",
        description:
          "Re-board the felucca for the return sail south to Luxor, timed perfectly to coincide with sunset. As the sun descends toward the West Bank hills, the sky turns shades of orange, pink, and purple — one of the most beautiful sunsets in Egypt, framed by the Nile's silver water and the distant mountains. Your captain steers silently using the wind, and the only sounds are the water against the hull and the occasional call to prayer drifting across the river from the city.",
        descriptionAr:
          "ارقَ على متن الفلوكة للعودة جنوباً إلى الأقصر، متزامناً مع غروب الشمس. مع انحدار الشمس نحو تلال الضفة الغربية، تتحول السماء إلى درجات من البرتقالي والوردي والبنفسجي — أحد أجمل غروب الشمس في مصر.",
        duration: "45 minutes",
        location: "Nile River, south toward Luxor",
        tips: "The return sail is the most beautiful part of the whole experience. Put your phone away for at least 10 minutes and simply watch the sunset.",
        tipsAr: "رحلة العودة هي الأجمل في التجربة كلها. أغلق هاتفك لمدة 10 دقائق على الأقل وشاهد الغروب.",
      },
      {
        step: 5,
        time: "18:30",
        title: "Return to Luxor Dock",
        titleAr: "العودة إلى رصيف الأقصر",
        description:
          "The felucca returns to the dock in central Luxor as dusk settles over the city. End of tour.",
        descriptionAr: "تعود الفلوكة إلى الرصيف في وسط الأقصر مع حلول الغسق. نهاية الجولة.",
        duration: null,
        location: "Luxor Nile dock, East Bank",
      },
    ],
    importantInfo: [
      "This tour does not include hotel pickup — you make your own way to the dock",
      "The felucca is open-air — bring a light layer for the evening breeze on the water",
      "This is a sailing trip using wind power — not a motorboat. Journey times may vary slightly",
      "Ideal for families, couples, and anyone wanting a peaceful contrast to the busy temple visits",
      "The experience is entirely peaceful — no loudspeakers, no crowds",
    ],
    importantInfoAr: [
      "هذه الجولة لا تشمل الاستقبال من الفندق — توجه بنفسك إلى الرصيف",
      "الفلوكة في الهواء الطلق — أحضر طبقة خفيفة لنسيم المساء على الماء",
      "هذه رحلة إبحار بقوة الريح — لا قارب بمحرك. قد تتفاوت أوقات الرحلة قليلاً",
    ],
    meetingPoint: {
      description: "Nile felucca dock, Corniche el-Nil, central Luxor (near the Mercure Hotel)",
      descriptionAr: "رصيف فلوكة النيل، كورنيش النيل، وسط الأقصر (بجوار فندق ميركيور)",
    },
    accessibility: "Easy. Requires stepping onto and off the low felucca deck from the dock. Not suitable for wheelchair users.",
    accessibilityAr: "سهل. يتطلب الصعود والنزول من سطح الفلوكة المنخفض. غير مناسب لمستخدمي كراسي العجلات.",
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
    itinerary: [
      {
        day: 1,
        title: "Luxor — Arrival & East Bank Temples",
        titleAr: "الأقصر — الوصول ومعابد الضفة الشرقية",
        description:
          "Arrive in Luxor and check in to your hotel. After lunch, your guide takes you to the two great East Bank temples.",
        descriptionAr:
          "تصل إلى الأقصر وتسجل الوصول في فندقك. بعد الغداء، يأخذك مرشدك إلى معبدَي الضفة الشرقية العظيمين.",
        activities: [
          {
            time: "Morning",
            title: "Arrival in Luxor & Hotel Check-in",
            titleAr: "الوصول إلى الأقصر وتسجيل الوصول في الفندق",
            description:
              "Transfer from Luxor Airport or train station to your hotel. Your guide meets you and gives a briefing on the 8-day itinerary.",
            descriptionAr:
              "الانتقال من مطار الأقصر أو محطة القطار إلى فندقك. يلتقي بك مرشدك ويعطيك موجزاً عن خطة الرحلة لـ 8 أيام.",
          },
          {
            time: "14:00",
            title: "Karnak Temple Complex",
            titleAr: "مجمع معبد الكرنك",
            description:
              "Visit the largest temple complex in the ancient world. Walk through the Great Hypostyle Hall, see the Sacred Lake, and explore two millennia of pharaonic construction in a single site.",
            descriptionAr:
              "زُر أكبر مجمع معابد في العالم القديم. امشِ عبر قاعة الأعمدة العظيمة وشاهد البحيرة المقدسة.",
            duration: "2 hours",
          },
          {
            time: "17:00",
            title: "Luxor Temple at Dusk",
            titleAr: "معبد الأقصر عند الغسق",
            description:
              "Walk to Luxor Temple as the sun sets and the floodlights begin to glow. See the entrance pylon, colossi, and the lone remaining obelisk of Ramses II.",
            descriptionAr:
              "امشِ إلى معبد الأقصر مع غروب الشمس وبدء إضاءة الأضواء الكاشفة. شاهد البوابة والتماثيل والمسلة الباقية لرمسيس الثاني.",
            duration: "1 hour",
          },
        ],
        meals: { breakfast: false, lunch: true, dinner: true },
        accommodation: "4-star hotel, Luxor",
      },
      {
        day: 2,
        title: "Luxor West Bank — Valley of the Kings & More",
        titleAr: "الضفة الغربية للأقصر — وادي الملوك وأكثر",
        description:
          "Full day exploring the remarkable monuments of the West Bank — the ancient necropolis of the New Kingdom pharaohs.",
        descriptionAr:
          "يوم كامل لاستكشاف الآثار الرائعة للضفة الغربية — المقبرة القديمة لفراعنة الدولة الحديثة.",
        activities: [
          {
            time: "07:30",
            title: "Colossi of Memnon",
            titleAr: "تمثالا ممنون",
            description: "Brief stop at the two giant quartzite statues of Amenhotep III.",
            descriptionAr: "توقف قصير عند التمثالين الضخمين من الكوارتزيت لأمنحتب الثالث.",
            duration: "20 minutes",
          },
          {
            time: "08:00",
            title: "Valley of the Kings — 3 Royal Tombs",
            titleAr: "وادي الملوك — 3 مقابر ملكية",
            description:
              "Explore 3 royal tombs of New Kingdom pharaohs, with your guide providing detailed commentary on the paintings, texts, and royal burial rituals.",
            descriptionAr:
              "استكشف 3 مقابر ملكية لفراعنة الدولة الحديثة مع تعليق مفصل من مرشدك على اللوحات والنصوص وطقوس الدفن الملكية.",
            duration: "90 minutes",
          },
          {
            time: "09:45",
            title: "Mortuary Temple of Hatshepsut",
            titleAr: "المعبد الجنائزي لحتشبسوت",
            description:
              "Visit the spectacular terraced temple of Egypt's most famous female pharaoh at Deir el-Bahari.",
            descriptionAr:
              "زُر المعبد المدرّج الرائع لأشهر فرعونة في مصر في الدير البحري.",
            duration: "45 minutes",
          },
          {
            time: "11:00",
            title: "Valley of the Nobles — Selected Tombs",
            titleAr: "وادي النبلاء — مقابر مختارة",
            description:
              "Visit 2 of the famously painted nobles' tombs showing vivid scenes of ancient Egyptian daily life — a contrast to the religious imagery of the royal tombs.",
            descriptionAr:
              "زُر مقبرتين من مقابر النبلاء الملونة الشهيرة التي تصور مشاهد حيوية من الحياة اليومية في مصر القديمة.",
            duration: "45 minutes",
          },
          {
            time: "12:00",
            title: "Medinet Habu",
            titleAr: "مدينة هابو",
            description:
              "Conclude the West Bank morning at the magnificently preserved mortuary temple of Ramses III — one of the largest on the West Bank.",
            descriptionAr:
              "اختم صباح الضفة الغربية في المعبد الجنائزي المحفوظ بشكل رائع لرمسيس الثالث.",
            duration: "45 minutes",
          },
          {
            time: "13:30",
            title: "Return to Hotel — Afternoon Rest",
            titleAr: "العودة إلى الفندق — استراحة بعد الظهر",
            description: "Return to your hotel for lunch and an afternoon rest before the evening flight.",
            descriptionAr: "العودة إلى فندقك للغداء والراحة بعد الظهر قبل رحلة المساء.",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Luxor",
      },
      {
        day: 3,
        title: "Luxor to Aswan — Philae Temple & Felucca",
        titleAr: "الأقصر إلى أسوان — معبد فيلة والفلوكة",
        description:
          "Travel south to Aswan by road or train, visiting the beautiful island temple of Philae and enjoying a felucca sail on the Nile.",
        descriptionAr:
          "السفر جنوباً إلى أسوان براً أو بالقطار، وزيارة معبد فيلة الجزيري الجميل والاستمتاع برحلة الفلوكة على النيل.",
        activities: [
          {
            time: "08:00",
            title: "Transfer to Aswan",
            titleAr: "الانتقال إلى أسوان",
            description:
              "Travel to Aswan by private vehicle or first-class train (approximately 3 hours from Luxor). Check in to your hotel on arrival.",
            descriptionAr:
              "السفر إلى أسوان بمركبة خاصة أو قطار الدرجة الأولى (نحو 3 ساعات من الأقصر). تسجيل الوصول في الفندق عند الوصول.",
            duration: "3 hours travel",
          },
          {
            time: "12:00",
            title: "Lunch & Rest at Hotel",
            titleAr: "الغداء والراحة في الفندق",
            description: "Lunch at the hotel or a local restaurant in Aswan.",
            descriptionAr: "الغداء في الفندق أو مطعم محلي في أسوان.",
          },
          {
            time: "14:00",
            title: "Philae Temple (Temple of Isis)",
            titleAr: "معبد فيلة (معبد إيزيس)",
            description:
              "Take a short motorboat to Agilkia Island to visit the magnificent Temple of Isis, relocated stone by stone in a UNESCO operation to save it from Lake Nasser. One of the last great temples built in the classical Egyptian style.",
            descriptionAr:
              "خذ قارباً بمحرك قصيراً إلى جزيرة أجيلكيا لزيارة معبد إيزيس الرائع، المنقول حجراً حجراً في عملية يونسكو لإنقاذه من بحيرة ناصر.",
            duration: "90 minutes",
          },
          {
            time: "16:30",
            title: "Felucca Ride Among the Islands",
            titleAr: "رحلة الفلوكة بين الجزر",
            description:
              "Enjoy a traditional felucca sailing trip among the granite Nile islands of Aswan — Elephantine Island, Botanical Gardens Island — as the sun sets over the desert and the Nile turns golden.",
            descriptionAr:
              "استمتع برحلة الفلوكة الشراعية التقليدية بين جزر النيل الغرانيتية في أسوان مع غروب الشمس.",
            duration: "1 hour",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Aswan",
      },
      {
        day: 4,
        title: "Aswan — High Dam & Abu Simbel Flight",
        titleAr: "أسوان — السد العالي ورحلة أبو سمبل",
        description:
          "Visit the engineering marvel of the Aswan High Dam in the morning, then fly to the remote temples of Abu Simbel — one of the most dramatic ancient sites in the world.",
        descriptionAr:
          "زُر عجيبة الهندسة السد العالي في أسوان صباحاً، ثم أقلع إلى معابد أبو سمبل النائية — أحد أكثر المواقع القديمة درامية في العالم.",
        activities: [
          {
            time: "08:00",
            title: "Aswan High Dam",
            titleAr: "السد العالي في أسوان",
            description:
              "Visit the Aswan High Dam — completed in 1970 and one of the largest embankment dams in the world. Your guide explains how the dam transformed Egyptian agriculture and economy, and the controversial flooding of Nubia and ancient temples that required the UNESCO rescue operations.",
            descriptionAr:
              "زُر السد العالي في أسوان — المكتمل عام 1970 وأحد أكبر سدود الردم في العالم. يشرح مرشدك كيف حوّل السد الزراعة والاقتصاد المصري.",
            duration: "45 minutes",
          },
          {
            time: "10:00",
            title: "Flight to Abu Simbel",
            titleAr: "الرحلة إلى أبو سمبل",
            description:
              "Board a short 35-minute flight from Aswan Airport to Abu Simbel Airport — the only practical way to reach this remote site near the Sudanese border.",
            descriptionAr:
              "اركب رحلة قصيرة مدتها 35 دقيقة من مطار أسوان إلى مطار أبو سمبل — الطريقة العملية الوحيدة للوصول إلى هذا الموقع النائي.",
            duration: "35 minutes flight",
          },
          {
            time: "11:15",
            title: "Temples of Abu Simbel",
            titleAr: "معابد أبو سمبل",
            description:
              "Arrive at one of the most breathtaking ancient sites in the world: the two rock-cut temples of Ramses II (the Great Temple) and Nefertari (the Small Temple), built around 1264 BC. The Great Temple's facade features four colossal seated statues of Ramses II, each 20 meters tall — among the most imposing ancient monuments anywhere. The interior is aligned so that twice a year (on February 22nd and October 22nd) sunlight penetrates the innermost sanctuary and illuminates the statues of the gods. Like Philae, the temples were relocated stone by stone in the 1960s to save them from Lake Nasser in one of history's greatest engineering feats. Your guide tells the full story of the temples, their rediscovery, and the rescue operation.",
            descriptionAr:
              "تصل إلى أحد أكثر المواقع القديمة إثارة للأنفاس في العالم: معبدا رمسيس الثاني المنحوتان في الصخر (المعبد الكبير) ونفرتاري (المعبد الصغير). واجهة المعبد الكبير تتضمن أربعة تماثيل ضخمة جالسة لرمسيس الثاني، يبلغ ارتفاع كل منها 20 متراً.",
            duration: "2 hours",
            location: "Abu Simbel, Aswan Governorate",
            tips: "The interior of the Great Temple is just as impressive as the facade — don't rush through it. The painted reliefs inside are in extraordinary condition.",
            tipsAr: "الجزء الداخلي من المعبد الكبير رائع بالقدر ذاته — لا تتسرع. النقوش الملونة في الداخل في حالة استثنائية.",
          },
          {
            time: "13:30",
            title: "Return Flight to Aswan",
            titleAr: "رحلة العودة إلى أسوان",
            description: "Board the return flight to Aswan. Afternoon free in Aswan.",
            descriptionAr: "اركب رحلة العودة إلى أسوان. بعد الظهر حر في أسوان.",
            duration: "35 minutes flight",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Aswan",
      },
      {
        day: 5,
        title: "Edfu & Kom Ombo Temples",
        titleAr: "معبدا إدفو وكوم أمبو",
        description:
          "Drive north from Aswan, stopping at the spectacular temples of Kom Ombo and Edfu before arriving in Luxor for the night.",
        descriptionAr:
          "قُد شمالاً من أسوان، توقفاً في معبدَي كوم أمبو وإدفو الرائعين قبل الوصول إلى الأقصر للمبيت.",
        activities: [
          {
            time: "08:00",
            title: "Drive North — Stop at Kom Ombo",
            titleAr: "القيادة شمالاً — توقف في كوم أمبو",
            description:
              "Drive north from Aswan toward Edfu, stopping first at Kom Ombo Temple (approximately 1 hour from Aswan). Visit the unique double temple dedicated to Sobek and Horus, and see the mummified crocodiles in the onsite museum.",
            descriptionAr:
              "قُد شمالاً من أسوان نحو إدفو، توقفاً أولاً في معبد كوم أمبو (نحو ساعة من أسوان). زُر المعبد المزدوج الفريد وشاهد التماسيح المحنطة في المتحف الموجود في الموقع.",
            duration: "90 minutes at Kom Ombo",
          },
          {
            time: "11:00",
            title: "Continue to Edfu",
            titleAr: "المتابعة إلى إدفو",
            description:
              "Continue north to Edfu (approximately 1 hour from Kom Ombo). Arrive by horse carriage to the Temple of Horus — the most completely preserved ancient temple in Egypt.",
            descriptionAr:
              "تابع شمالاً إلى إدفو (نحو ساعة من كوم أمبو). تصل بالعربة الكارو إلى معبد حورس — أكمل معبد قديم محفوظ في مصر.",
            duration: "90 minutes at Edfu",
          },
          {
            time: "13:30",
            title: "Drive to Luxor",
            titleAr: "القيادة إلى الأقصر",
            description:
              "Continue north to Luxor (approximately 2 hours). Check in to your hotel and relax for the evening.",
            descriptionAr:
              "تابع شمالاً إلى الأقصر (نحو ساعتين). تسجل الوصول في فندقك وتستريح مساءً.",
            duration: "2 hours driving",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Luxor",
      },
      {
        day: 6,
        title: "Abydos & Dendera Day Trip from Luxor",
        titleAr: "رحلة يوم إلى أبيدوس ودندرة من الأقصر",
        description:
          "Drive north from Luxor to visit two of Egypt's most sacred and beautifully preserved ancient temples.",
        descriptionAr:
          "قُد شمالاً من الأقصر لزيارة اثنين من أكثر المعابد القديمة في مصر قدسية وحفظاً.",
        activities: [
          {
            time: "07:00",
            title: "Drive to Abydos",
            titleAr: "القيادة إلى أبيدوس",
            description:
              "Drive approximately 2.5 hours north from Luxor to the sacred city of Abydos, the mythological burial place of Osiris.",
            descriptionAr:
              "قُد نحو 2.5 ساعة شمالاً من الأقصر إلى المدينة المقدسة أبيدوس، الموقع الأسطوري لدفن أوزيريس.",
            duration: "2.5 hours driving",
          },
          {
            time: "09:30",
            title: "Temple of Seti I at Abydos",
            titleAr: "معبد سيتي الأول في أبيدوس",
            description:
              "Explore the remarkable Temple of Seti I — home to some of the finest painted reliefs in Egypt — and discover the famous Abydos King List and the mysterious Osireion.",
            descriptionAr:
              "استكشف معبد سيتي الأول الرائع — يضم بعضاً من أجمل النقوش الملونة في مصر — واكتشف قائمة ملوك أبيدوس الشهيرة والأوزيريون الغامض.",
            duration: "90 minutes",
          },
          {
            time: "11:30",
            title: "Drive to Dendera",
            titleAr: "القيادة إلى دندرة",
            description: "Drive approximately 1 hour south to the town of Dendera.",
            descriptionAr: "قُد نحو ساعة جنوباً إلى مدينة دندرة.",
          },
          {
            time: "13:00",
            title: "Temple of Hathor at Dendera",
            titleAr: "معبد حتحور في دندرة",
            description:
              "Visit the famous Temple of Hathor — one of the best-preserved temples in Egypt, with its remarkable intact roof and the celebrated astronomical ceiling with the Dendera Zodiac.",
            descriptionAr:
              "زُر معبد حتحور الشهير — أحد أفضل المعابد المحفوظة في مصر، مع سقفه المحفوظ الرائع وسقفه الفلكي المحتفى به مع برج الأبراج.",
            duration: "2 hours",
          },
          {
            time: "15:30",
            title: "Return to Luxor",
            titleAr: "العودة إلى الأقصر",
            description: "Drive approximately 1 hour south back to Luxor.",
            descriptionAr: "قُد نحو ساعة جنوباً عائداً إلى الأقصر.",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Luxor",
      },
      {
        day: 7,
        title: "Fly to Cairo — Pyramids of Giza",
        titleAr: "الطيران إلى القاهرة — أهرامات الجيزة",
        description:
          "Fly from Luxor to Cairo and visit the last of the Seven Wonders of the Ancient World — the Pyramids of Giza.",
        descriptionAr:
          "أقلع من الأقصر إلى القاهرة وزُر آخر عجائب العالم السبع القديمة الباقية — أهرامات الجيزة.",
        activities: [
          {
            time: "Morning",
            title: "Flight from Luxor to Cairo",
            titleAr: "الرحلة من الأقصر إلى القاهرة",
            description:
              "Fly from Luxor to Cairo (approximately 1 hour). Transfer to your hotel in Cairo.",
            descriptionAr:
              "أقلع من الأقصر إلى القاهرة (نحو ساعة). الانتقال إلى فندقك في القاهرة.",
            duration: "1 hour flight + transfer",
          },
          {
            time: "13:00",
            title: "Pyramids of Giza & Great Sphinx",
            titleAr: "أهرامات الجيزة وأبو الهول العظيم",
            description:
              "After lunch, visit the most iconic monuments in the world: the three Great Pyramids of Giza (Khufu, Khafre, and Menkaure) and the enigmatic Great Sphinx. Your guide gives the full story of how the pyramids were built, their astronomical alignment, and the ongoing archaeological discoveries at the site. Optional: enter the interior of the Great Pyramid of Khufu for an extra fee — a narrow ascending passage leads to the burial chamber.",
            descriptionAr:
              "بعد الغداء، زُر أكثر الآثار أيقونية في العالم: الأهرامات الثلاثة الكبرى في الجيزة (خوفو وخفرع ومنكاورع) وأبو الهول العظيم الغامض. يعطيك مرشدك القصة الكاملة لكيفية بناء الأهرامات.",
            duration: "3 hours",
            location: "Giza Plateau, Cairo",
            tips: "Visit the site in the afternoon to avoid the worst of the morning crowds. The light is also better for photography in the late afternoon.",
            tipsAr: "زُر الموقع بعد الظهر لتجنب أسوأ ازدحام الصباح. الضوء أفضل للتصوير في أواخر العصر.",
          },
          {
            time: "17:00",
            title: "Egyptian Museum (Overview)",
            titleAr: "المتحف المصري (نظرة عامة)",
            description:
              "Brief visit to the Egyptian Museum in Tahrir Square — home to the world's largest collection of ancient Egyptian artifacts, including the complete treasures of Tutankhamun. Given the enormous size of the museum, your guide focuses on the key highlights.",
            descriptionAr:
              "زيارة قصيرة للمتحف المصري في ميدان التحرير — يضم أكبر مجموعة من القطع الأثرية المصرية القديمة في العالم، بما فيها كنوز توت عنخ آمون الكاملة.",
            duration: "2 hours",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Cairo",
      },
      {
        day: 8,
        title: "Cairo — Islamic & Coptic Cairo, Then Departure",
        titleAr: "القاهرة — القاهرة الإسلامية والقبطية ثم المغادرة",
        description:
          "Explore historic Cairo in the morning before your international departure flight.",
        descriptionAr:
          "استكشف القاهرة التاريخية صباحاً قبل رحلتك الدولية للمغادرة.",
        activities: [
          {
            time: "09:00",
            title: "Coptic Cairo — Hanging Church & Ben Ezra Synagogue",
            titleAr: "القاهرة القبطية — الكنيسة المعلقة وكنيس بن عزرا",
            description:
              "Visit Old Cairo's Coptic quarter, including the 4th-century Hanging Church (built over a Roman gatehouse) and the 9th-century Ben Ezra Synagogue — one of the oldest synagogues in the world, said to be built on the site where Moses was found in the Nile.",
            descriptionAr:
              "زُر الحي القبطي في القاهرة القديمة، بما فيه الكنيسة المعلقة من القرن الرابع وكنيس بن عزرا من القرن التاسع.",
            duration: "90 minutes",
          },
          {
            time: "11:00",
            title: "Khan el-Khalili Bazaar",
            titleAr: "سوق خان الخليلي",
            description:
              "Browse the labyrinthine Khan el-Khalili bazaar — one of the oldest and largest souks in the Arab world, established in 1382. A perfect final stop for shopping: papyrus, spices, jewelry, alabaster, textiles, and traditional handicrafts.",
            descriptionAr:
              "تجوّل في سوق خان الخليلي المتشابك — أحد أقدم وأكبر الأسواق في العالم العربي. توقف مثالي للتسوق: بردي وتوابل ومجوهرات ومنسوجات.",
            duration: "1 hour",
          },
          {
            time: "13:00",
            title: "Lunch & Transfer to Cairo Airport",
            titleAr: "الغداء والانتقال إلى مطار القاهرة",
            description:
              "Final lunch in Cairo. Transfer to Cairo International Airport for your departure flight. End of 8-day tour.",
            descriptionAr:
              "الغداء الأخير في القاهرة. الانتقال إلى مطار القاهرة الدولي لرحلة المغادرة. نهاية جولة الـ 8 أيام.",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: false },
        accommodation: null,
      },
    ],
    importantInfo: [
      "International flights to/from Egypt are NOT included — you arrange your own arrival and departure",
      "Internal flights (Aswan–Abu Simbel–Aswan and Luxor–Cairo) are included",
      "All hotels are 4-star and centrally located; upgrades to 5-star available on request",
      "The itinerary order may be adjusted based on flight availability and group needs",
      "A single English-speaking guide accompanies you for the entire 8 days",
      "Tipping for the guide and drivers is appreciated (~$10–15/day for the guide)",
    ],
    importantInfoAr: [
      "الرحلات الدولية من وإلى مصر غير مشمولة — ترتّب وصولك ومغادرتك بنفسك",
      "الرحلات الداخلية (أسوان–أبو سمبل–أسوان والأقصر–القاهرة) مشمولة",
      "جميع الفنادق 4 نجوم وتقع في مواقع مركزية؛ الترقية إلى 5 نجوم متاحة عند الطلب",
      "مرشد واحد ناطق بالإنجليزية يرافقك طوال الـ 8 أيام",
    ],
    meetingPoint: {
      description: "Your guide meets you at Luxor Airport or Luxor Train Station on Day 1",
      descriptionAr: "يلتقي بك مرشدك في مطار الأقصر أو محطة قطار الأقصر في اليوم الأول",
    },
    accessibility: "Moderate fitness required throughout. Abu Simbel involves significant walking on sandy and rocky ground. Most other sites are accessible for those with limited mobility.",
    accessibilityAr: "تتطلب لياقة بدنية معتدلة طوال الرحلة. أبو سمبل يتضمن مشياً كبيراً على أرض رملية وصخرية.",
  },
   {
    title: "Karnak Temple Guided Tour",
    titleAr: "جولة مصحوبة بمرشد في معبد الكرنك",
    slug: "karnak-temple-guided-tour-luxor",
    description:
      "Dedicated entirely to the grandest temple complex in ancient Egypt, this guided tour takes you deep into the world of Karnak. The sanctuary of Amun-Ra was the beating heart of religious life in ancient Thebes, and its sheer scale is staggering — the perimeter stretches for 2,400 metres. Walk through the Great Hypostyle Hall, admire the sacred lake, and discover obelisks and shrines built by some of Egypt's most powerful rulers over two millennia.",
    descriptionAr:
      "مخصصة كلياً لأعظم مجمع معابد في مصر القديمة، تأخذك هذه الجولة المصحوبة بمرشد إلى عمق عالم الكرنك. كان مقدس آمون-رع قلب الحياة الدينية في طيبة القديمة، وحجمه الهائل مذهل — يمتد محيطه 2400 متر.",
    category: "Guided tours and free tours",
    price: {
      original: 17.57,
      discounted: null,
      currency: "USD",
    },
    duration: "2 hours",
    language: ["English"],
    rating: { score: 0, reviews: 0 },
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
    gallery: [
      {
        image: "karnak-first-pylon.jpg",
        caption: "The colossal First Pylon at the entrance to Karnak",
        captionAr: "البوابة الأولى الهائلة عند مدخل الكرنك",
        alt: "Massive unfinished sandstone pylon marking the entrance to Karnak Temple",
        altAr: "بوابة حجرية ضخمة غير مكتملة تُعلم مدخل معبد الكرنك",
      },
      {
        image: "karnak-hypostyle-columns.jpg",
        caption: "The Great Hypostyle Hall — 134 columns covering 5,000 square metres",
        captionAr: "قاعة الأعمدة العظيمة — 134 عموداً تغطي 5000 متر مربع",
        alt: "Forest of giant papyrus-shaped columns in Karnak's Great Hypostyle Hall",
        altAr: "غابة من الأعمدة الضخمة على شكل بردي في قاعة أعمدة الكرنك العظيمة",
      },
      {
        image: "karnak-hatshepsut-obelisk.jpg",
        caption: "The 29.6-metre obelisk of Hatshepsut at Karnak — one of the tallest in the world",
        captionAr: "مسلة حتشبسوت البالغة 29.6 متراً في الكرنك — من أطول المسلات في العالم",
        alt: "Tall pink granite obelisk of Hatshepsut rising above Karnak temple complex",
        altAr: "مسلة غرانيت وردية طويلة لحتشبسوت ترتفع فوق مجمع معبد الكرنك",
      },
      {
        image: "karnak-sacred-lake-reflection.jpg",
        caption: "The Sacred Lake of Amun reflecting the temple columns",
        captionAr: "البحيرة المقدسة لآمون تعكس أعمدة المعبد",
        alt: "Rectangular sacred lake at Karnak with columns and ruins reflected in still water",
        altAr: "البحيرة المقدسة المستطيلة في الكرنك مع انعكاس الأعمدة والأطلال في الماء الهادئ",
      },
      {
        image: "karnak-scarab-statue.jpg",
        caption: "The famous scarab beetle statue of Amenhotep III beside the Sacred Lake",
        captionAr: "تمثال الخنفساء الشهير لأمنحتب الثالث بجانب البحيرة المقدسة",
        alt: "Ancient granite scarab beetle statue on a pedestal beside the Karnak sacred lake",
        altAr: "تمثال خنفساء غراني قديم على قاعدة بجانب البحيرة المقدسة في الكرنك",
      },
    ],
    itinerary: [
      {
        step: 1,
        time: "Meet at entrance",
        duration: "10 minutes",
        type: "transport",
        title: "Meeting at Karnak Temple Main Gate",
        titleAr: "اللقاء عند البوابة الرئيسية لمعبد الكرنك",
        description:
          "Meet your guide at the main entrance of Karnak Temple on the East Bank. Hotel pickup is not included in this tour — make your own way to Karnak. From any hotel in Luxor, a taxi costs approximately 30–50 EGP and takes 10–15 minutes. Tuk-tuks are also available from the Corniche for less.",
        descriptionAr:
          "التقِ بمرشدك عند المدخل الرئيسي لمعبد الكرنك في الضفة الشرقية. الاستقبال من الفندق غير مشمول — توجه بنفسك إلى الكرنك. من أي فندق في الأقصر، تكلفة سيارة الأجرة نحو 30-50 جنيهاً وتستغرق 10-15 دقيقة.",
        historicalContext: null,
        whatToExpect: "Your guide is waiting at the main entrance holding a sign with your name or the tour company name. Buy your entrance ticket at the ticket office just before the gate.",
        whatToExpectAr: "مرشدك ينتظر عند المدخل الرئيسي يحمل لافتة باسمك أو اسم شركة الجولة. اشترِ بطاقة الدخول من مكتب التذاكر قبل البوابة مباشرة.",
        insiderTip: "Arrive 10 minutes early — the entrance area can be confusing with multiple tour groups assembling at the same time.",
        insiderTipAr: "تصل قبل 10 دقائق — منطقة المدخل قد تكون مربكة مع تجمع مجموعات جولات متعددة في نفس الوقت.",
        physicalDifficulty: "easy",
        image: null,
        location: { name: "Main entrance, Karnak Temple, East Bank Luxor", nameAr: "المدخل الرئيسي، معبد الكرنك، الضفة الشرقية للأقصر", coordinates: { lat: 25.7188, lng: 32.6573 } },
        transport: { type: "Self-arranged taxi or tuk-tuk from your hotel", typeAr: "سيارة أجرة أو توك توك تُرتّبها بنفسك من فندقك", details: "~30–50 EGP by taxi, 10–15 minutes", detailsAr: "~30-50 جنيهاً بسيارة الأجرة، 10-15 دقيقة" },
        nearbyFood: null,
      },
      {
        step: 2,
        time: "At start",
        duration: "15 minutes",
        type: "visit",
        title: "Avenue of Ram-Headed Sphinxes & First Pylon",
        titleAr: "طريق أبي الهول ذي رأس الكبش والبوابة الأولى",
        description:
          "Your guide begins at the very beginning — the avenue of 40 ram-headed sphinx statues that lined the ancient processional way from the Nile to the temple entrance. Each ram represents the god Amun, with a small figure of the pharaoh sheltered between the forepaws. At the end of the avenue stands the colossal First Pylon — the last gateway to be added to Karnak and one of the largest in Egypt at 43 metres high, though it was never fully completed. Your guide explains how the temple was built outward from its ancient core over 2,000 years, with each new pharaoh adding another pylon in front of the previous one.",
        descriptionAr:
          "يبدأ مرشدك من البداية — طريق 40 تمثالاً لأبي الهول ذي رأس الكبش. كل كبش يمثل الإله آمون. عند نهاية الطريق تقف البوابة الأولى الهائلة — آخر بوابة أُضيفت إلى الكرنك وإحدى أكبر البوابات في مصر بارتفاع 43 متراً لكنها لم تكتمل قط.",
        historicalContext: "The First Pylon was begun by Nectanebo I in the 4th century BC but was never finished — the construction ramps were still in place when work stopped and were only removed by archaeologists in modern times. The unfinished state of the pylon is actually a fascinating archaeological record of how ancient Egyptian construction worked.",
        historicalContextAr: "بدأ نقتانبو الأول في بناء البوابة الأولى في القرن الرابع قبل الميلاد لكنها لم تكتمل قط — كانت منحدرات البناء لا تزال في مكانها عند توقف العمل ولم يُزلها سوى علماء الآثار في العصر الحديث.",
        whatToExpect: "A 15-minute introduction at the entrance before moving inside. The First Pylon is impressive even unfinished — look at the mud-brick construction ramp still visible on the interior northern face.",
        whatToExpectAr: "مقدمة لمدة 15 دقيقة عند المدخل قبل الدخول إلى الداخل. البوابة الأولى رائعة حتى وهي غير مكتملة.",
        insiderTip: "Look at the interior face of the First Pylon before entering the forecourt — you can see the remains of the ancient mud-brick construction ramp still attached to the wall, a 2,300-year-old building site frozen in time.",
        insiderTipAr: "انظر إلى الوجه الداخلي للبوابة الأولى قبل دخول الفناء — يمكنك رؤية بقايا منحدر البناء القديم من الطوب الطيني لا يزال متصلاً بالجدار، موقع بناء متجمد في الزمن منذ 2300 عام.",
        physicalDifficulty: "easy",
        image: "karnak-ram-sphinxes.jpg",
        location: { name: "Karnak Temple forecourt", nameAr: "فناء معبد الكرنك" },
        transport: null,
        nearbyFood: null,
      },
      {
        step: 3,
        time: "In tour",
        duration: "30 minutes",
        type: "visit",
        title: "Great Hypostyle Hall",
        titleAr: "قاعة الأعمدة العظيمة",
        description:
          "The undeniable centrepiece of Karnak — and arguably the most impressive interior space created by any ancient civilisation. The Great Hypostyle Hall covers 5,000 square metres and contains 134 columns in 16 rows. The two central rows of 12 columns each have open-papyrus capitals and reach 23 metres high with a circumference of 10 metres — wide enough to park three cars side by side. The outer 122 columns have closed-bud capitals and reach a 'mere' 13 metres. Every surface is carved with hieroglyphic texts and sacred imagery. Your guide points out the stylistic differences between reliefs carved during Seti I's reign (delicate, refined sunken relief) and those of Ramses II (bolder, deeper, more dramatic). Original paint still survives in sheltered upper sections — traces of red, blue, yellow, and green pigment on ceilings and column tops 3,300 years old.",
        descriptionAr:
          "المحور الذي لا جدال فيه للكرنك — وربما أكثر المساحات الداخلية إثارة للإعجاب التي أنشأتها أي حضارة قديمة. تغطي قاعة الأعمدة العظيمة 5000 متر مربع وتحتوي على 134 عموداً. الصفان المركزيان من 12 عموداً لكل منهما يصلان إلى 23 متراً. كل سطح منقوش بنصوص هيروغليفية وصور مقدسة. لا يزال الطلاء الأصلي موجوداً في الأقسام العلوية المحمية.",
        historicalContext: "The Hypostyle Hall was built primarily by Seti I and completed by his son Ramses II between approximately 1290–1213 BC. The word 'hypostyle' comes from Greek meaning 'resting on pillars.' The 134 columns represent a primordial papyrus marsh — in Egyptian cosmology, the world emerged from a watery chaos, and the temple recreated this original landscape of creation.",
        historicalContextAr: "بُنيت قاعة الأعمدة أساساً من قِبَل سيتي الأول واكتملت بواسطة ابنه رمسيس الثاني بين عامَي 1290-1213 قبل الميلاد تقريباً. الكلمة 'hypostyle' مشتقة من اليونانية وتعني 'مرتكز على أعمدة'. الـ134 عموداً تمثل مستنقع بردي بدائياً.",
        whatToExpect: "30 minutes of your guide walking you through the hall explaining the history, symbolism, and surviving paint. The hall is large enough that you won't feel crowded even with other tour groups. It can feel slightly dim — your eyes adjust after a minute.",
        whatToExpectAr: "30 دقيقة مع مرشدك يشرح التاريخ والرمزية والطلاء المحفوظ. القاعة كبيرة بما يكفي لألا تشعر بالازدحام. قد تبدو خافتة الإضاءة قليلاً.",
        insiderTip: "Look up in the very centre of the hall between the two tallest rows of columns — this is where shafts of sunlight fall through ancient clerestory windows in the ceiling when the angle is right. Stand there for a few minutes and watch the light shift.",
        insiderTipAr: "انظر إلى الأعلى في وسط القاعة تماماً بين الصفَّين الأطول من الأعمدة — هنا تسقط أشعة الشمس عبر نوافذ علوية قديمة في السقف حين يكون الزاوية مناسبة.",
        physicalDifficulty: "easy",
        image: "karnak-hypostyle-interior.jpg",
        location: { name: "Great Hypostyle Hall, Karnak", nameAr: "قاعة الأعمدة العظيمة، الكرنك" },
        transport: null,
        nearbyFood: null,
      },
      {
        step: 4,
        time: "In tour",
        duration: "20 minutes",
        type: "visit",
        title: "Sanctuary of Amun & the Obelisks",
        titleAr: "قدس الأقداس لآمون والمسلات",
        description:
          "Move deeper into the temple toward its ancient heart — the sanctuary of Amun, where the sacred golden barque of the god was housed and where only the highest priests and the pharaoh could enter. Near the sanctuary stand the two most famous obelisks at Karnak: the surviving obelisk of Hatshepsut at 29.6 metres — one of the tallest standing obelisks in the world, still bearing traces of its original gilded electrum tip — and the fallen base of her second obelisk, which Thutmose III walled up in an attempt to hide her achievement from posterity. The walls between them tell the political story: Hatshepsut's cartouche chiselled out and replaced by that of Thutmose III in many places, then later restored by modern archaeologists.",
        descriptionAr:
          "تتقدم إلى أعمق أجزاء المعبد نحو قلبه القديم — قدس الأقداس لآمون حيث كانت المركب الذهبية المقدسة للإله محفوظة. بالقرب تقف أشهر مسلتين في الكرنك: مسلة حتشبسوت الباقية البالغة 29.6 متراً وقاعدة مسلتها الثانية الساقطة.",
        historicalContext: "Hatshepsut erected two obelisks to celebrate her 16th year of rule — the tallest ever raised in Egypt. Each was cut from a single piece of Aswan granite, transported 200km by boat, and covered at the top with electrum (an alloy of gold and silver) so they would catch the first and last light of day. Thutmose III's attempt to hide them by building walls around them actually preserved the lower sections perfectly.",
        historicalContextAr: "أقامت حتشبسوت مسلتين للاحتفال بسنتها السادسة عشرة من الحكم — أطول المسلات المُقامة في مصر على الإطلاق. كل واحدة قُطعت من قطعة غرانيت واحدة من أسوان ونُقلت 200 كم بالقارب وغُطي قمتها بالإلكتروم.",
        whatToExpect: "20 minutes in the inner temple area. The sanctuary itself is a small dark chamber — your guide explains its religious significance. The obelisks are best photographed from the base looking up.",
        whatToExpectAr: "20 دقيقة في منطقة المعبد الداخلية. قدس الأقداس غرفة صغيرة مظلمة. أفضل تصوير للمسلات من القاعدة نظراً إلى الأعلى.",
        insiderTip: "On the base of Hatshepsut's surviving obelisk, read the inscription she had carved to justify her unprecedented power: 'I have done this with a loving heart for my father Amun.' A deeply personal statement on one of the world's most ambitious monuments.",
        insiderTipAr: "على قاعدة مسلة حتشبسوت الباقية، اقرأ النقش الذي نحتته لتبرير سلطتها غير المسبوقة: 'فعلت هذا بقلب محب لأبي آمون.' تصريح شخصي عميق على أحد أكثر الآثار طموحاً في العالم.",
        physicalDifficulty: "easy",
        image: "karnak-hatshepsut-obelisk-close.jpg",
        location: { name: "Inner sanctuary area, Karnak", nameAr: "منطقة قدس الأقداس، الكرنك" },
        transport: null,
        nearbyFood: null,
      },
      {
        step: 5,
        time: "In tour",
        duration: "20 minutes",
        type: "visit",
        title: "Sacred Lake of Amun",
        titleAr: "البحيرة المقدسة لآمون",
        description:
          "Walk to the edges of the Sacred Lake — a rectangular artificial lake measuring 120 by 77 metres, excavated by Thutmose III around 1450 BC. The lake was used daily by Karnak's priests for ritual purification before entering the temple, and sacred barque processions took place on its waters during religious festivals. From the lakeside you get one of the finest wide-angle views of the entire temple complex. Your guide points out the famous granite scarab beetle statue of Amenhotep III on the northwest corner — walking around it seven times is said to bring good luck and fertility, a tradition that visitors have been performing here for decades.",
        descriptionAr:
          "امشِ إلى جوانب البحيرة المقدسة — بحيرة اصطناعية مستطيلة تبلغ 120×77 متراً، حُفرت بواسطة تحتمس الثالث حوالي عام 1450 قبل الميلاد. استخدمها كهنة الكرنك يومياً للتطهير الطقسي. من جانب البحيرة تحصل على أحد أجمل المناظر الزاوية الواسعة للمجمع كله.",
        historicalContext: "The Sacred Lake was stocked with sacred geese — birds associated with Amun — and was home to the ibis, the sacred bird of Thoth. At night, the priests would keep a 'night watch' around the lake, chanting hymns to maintain the divine order of the universe. The lake has never gone dry in 3,500 years.",
        historicalContextAr: "كانت البحيرة المقدسة مليئة بالأوزات المقدسة — الطيور المرتبطة بآمون — وكانت موطناً لطائر أبو منجل، الطائر المقدس لتحوت. في الليل، كان الكهنة يحرسون البحيرة ويترنمون بالتراتيل.",
        whatToExpect: "A peaceful open area after the enclosed halls. The lake still contains water today. The scarab statue is at the far (northwest) corner. Walking around it 7 times takes about 3 minutes.",
        whatToExpectAr: "منطقة مفتوحة هادئة بعد القاعات المغلقة. البحيرة لا تزال تحتوي على ماء. تمثال الخنفساء في الزاوية الشمالية الغربية.",
        insiderTip: "Sit on the stone steps beside the lake for 5 minutes and simply look at the temple reflected in the water — this is one of the calmest, most beautiful spots in all of Luxor and almost no one pauses long enough to appreciate it.",
        insiderTipAr: "اجلس على الدرجات الحجرية بجانب البحيرة لمدة 5 دقائق وانظر فقط إلى المعبد منعكساً في الماء — إنه من أهدأ وأجمل الأماكن في الأقصر كلها ولا يتوقف أحد بما يكفي لتقديره.",
        physicalDifficulty: "easy",
        image: "karnak-sacred-lake-wide.jpg",
        location: { name: "Sacred Lake, Karnak", nameAr: "البحيرة المقدسة، الكرنك", coordinates: { lat: 25.7183, lng: 32.6578 } },
        transport: null,
        nearbyFood: { name: "Karnak café at site exit", nameAr: "كافيه الكرنك عند مخرج الموقع", description: "Cold drinks and snacks near the exit — a welcome stop after the tour", descriptionAr: "مشروبات باردة ووجبات خفيفة بالقرب من المخرج — توقف ترحيبي بعد الجولة", priceRange: "$" },
      },
      {
        step: 6,
        time: "End of tour",
        duration: null,
        type: "transport",
        title: "End of Tour at Temple Exit",
        titleAr: "نهاية الجولة عند مخرج المعبد",
        description:
          "Your guide concludes the tour at the temple exit with a summary of Karnak's history and recommendations for the rest of your time in Luxor. You are free to stay and explore independently after the guided portion ends — the ticket allows re-entry the same day.",
        descriptionAr:
          "يختتم مرشدك الجولة عند مخرج المعبد مع ملخص لتاريخ الكرنك وتوصيات لبقية وقتك في الأقصر. أنت حر للبقاء والاستكشاف باستقلالية — البطاقة تسمح بإعادة الدخول في نفس اليوم.",
        historicalContext: null,
        whatToExpect: "2-hour tour ends here. Your guide is available for questions. Arrange your own transport back to your hotel — taxis wait outside the main entrance.",
        whatToExpectAr: "الجولة المدتها ساعتان تنتهي هنا. مرشدك متاح للأسئلة. رتّب توصيلك بنفسك — سيارات الأجرة تنتظر خارج المدخل الرئيسي.",
        insiderTip: "After the guided tour ends, walk back through the Hypostyle Hall alone — without the guide's narration you'll notice things you missed. The experience of being alone among those columns, even briefly, is unforgettable.",
        insiderTipAr: "بعد انتهاء الجولة، امشِ وحدك عبر قاعة الأعمدة — بدون شرح المرشد ستلاحظ أشياء فاتتك. تجربة التواجد وحدك بين تلك الأعمدة، ولو للحظة، لا تُنسى.",
        physicalDifficulty: "easy",
        image: null,
        location: { name: "Karnak Temple exit", nameAr: "مخرج معبد الكرنك" },
        transport: { type: "Self-arranged taxi from main entrance", typeAr: "سيارة أجرة تُرتّبها بنفسك من المدخل الرئيسي", details: "Taxis always available outside Karnak. ~30–50 EGP to city centre.", detailsAr: "سيارات الأجرة متاحة دائماً خارج الكرنك. ~30-50 جنيهاً إلى وسط المدينة." },
        nearbyFood: null,
      },
    ],
    importantInfo: [
      "Hotel pickup is NOT included — make your own way to Karnak Temple",
      "Best visited in the morning (before 09:00) or late afternoon (after 16:00) to avoid the midday heat",
      "Wear comfortable shoes — Karnak is enormous",
      "Bring at least 1 litre of water and sunscreen",
      "The temple is open daily from 06:00 to 17:30 (summer) or 18:00 (winter)",
    ],
    importantInfoAr: [
      "الاستقبال من الفندق غير مشمول — توجه بنفسك إلى معبد الكرنك",
      "أفضل وقت للزيارة صباحاً (قبل 9:00) أو بعد الظهر (بعد 16:00) لتجنب حرارة الظهيرة",
      "ارتدِ حذاءً مريحاً — الكرنك شاسع",
      "أحضر لتراً على الأقل من الماء وواقياً من الشمس",
    ],
    meetingPoint: {
      description: "Main entrance of Karnak Temple, East Bank Luxor — look for your guide holding a sign with your name",
      descriptionAr: "المدخل الرئيسي لمعبد الكرنك، الضفة الشرقية للأقصر — ابحث عن مرشدك يحمل لافتة باسمك",
    },
    accessibility: "Easy to moderate. The temple is mostly flat but covers a very large area — expect to walk 2–3 km during a full tour.",
    accessibilityAr: "سهل إلى معتدل. المعبد مستوٍ في معظمه لكنه يغطي مساحة كبيرة جداً — توقع المشي 2-3 كم خلال جولة كاملة.",
  },
 
  // ─────────────────────────────────────────────────────────────────────────
  // 10. Karnak Temple Light & Sound Show
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Karnak Temple Light & Sound Show",
    titleAr: "عرض الصوت والضوء في معبد الكرنك",
    slug: "karnak-temple-light-sound-show-luxor",
    description:
      "Experience the magic of Karnak after dark with this spectacular light and sound show. As night falls over the ancient temple, dramatic lighting illuminates the towering columns, obelisks, and sacred lake while a captivating narration takes you back thousands of years through the story of ancient Egypt. Walk through the temple complex as the history of Karnak unfolds around you in a truly immersive and unforgettable evening.",
    descriptionAr:
      "اختبر سحر الكرنك بعد حلول الظلام من خلال عرض الصوت والضوء المبهر هذا. مع حلول الليل على المعبد القديم، يُضيء الضوء الدرامي الأعمدة الشاهقة والمسلات والبحيرة المقدسة بينما يأخذك تعليق آسر آلاف السنين إلى الوراء.",
    category: "Performances",
    price: {
      original: 56.94,
      discounted: 45.55,
      currency: "USD",
    },
    duration: "3 hours 30 minutes",
    language: ["English"],
    rating: { score: 7.2, reviews: 10 },
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
    gallery: [
      {
        image: "karnak-sound-light-columns.jpg",
        caption: "Karnak's columns dramatically lit in the Light & Sound Show",
        captionAr: "أعمدة الكرنك مضاءة بشكل درامي في عرض الصوت والضوء",
        alt: "Giant Karnak columns illuminated in deep red and gold light at night",
        altAr: "أعمدة الكرنك الضخمة مضاءة بالضوء الأحمر العميق والذهبي ليلاً",
      },
      {
        image: "karnak-sacred-lake-night.jpg",
        caption: "The Sacred Lake reflecting the illuminated temple at night",
        captionAr: "البحيرة المقدسة تعكس المعبد المضاء في الليل",
        alt: "Karnak sacred lake at night with temple columns and obelisk perfectly reflected",
        altAr: "البحيرة المقدسة في الكرنك ليلاً مع انعكاس أعمدة المعبد والمسلة بشكل مثالي",
      },
      {
        image: "karnak-obelisk-lit.jpg",
        caption: "Hatshepsut's obelisk glowing gold in the evening floodlights",
        captionAr: "مسلة حتشبسوت تتوهج ذهبياً في الأضواء الكاشفة المسائية",
        alt: "Tall Hatshepsut obelisk at Karnak lit gold against a dark blue night sky",
        altAr: "مسلة حتشبسوت الطويلة في الكرنك مضاءة باللون الذهبي في مواجهة السماء الزرقاء الداكنة",
      },
      {
        image: "karnak-show-crowd.jpg",
        caption: "Visitors walking through the illuminated Karnak during the show",
        captionAr: "زوار يمشون عبر الكرنك المضاء خلال العرض",
        alt: "Group of visitors silhouetted against illuminated Karnak columns at night",
        altAr: "مجموعة من الزوار في ظلال في مواجهة أعمدة الكرنك المضاءة ليلاً",
      },
    ],
    itinerary: [
      {
        step: 1,
        time: "19:00",
        duration: "20 minutes",
        type: "transport",
        title: "Hotel Pickup",
        titleAr: "الاستقبال من الفندق",
        description:
          "Your driver picks you up from your hotel and drives you to the Karnak Temple entrance for the evening show. Shows are performed on specific evenings in different languages — your booking confirms the English show schedule for the date of your visit.",
        descriptionAr:
          "يأخذك سائقك من فندقك إلى مدخل معبد الكرنك للعرض المسائي. تُقام العروض في مساءات محددة بلغات مختلفة — حجزك يؤكد جدول العرض الإنجليزي لتاريخ زيارتك.",
        historicalContext: null,
        whatToExpect: "20-minute drive. Bring a light layer — the temple feels cool at night even in summer.",
        whatToExpectAr: "20 دقيقة قيادة. أحضر طبقة خفيفة — المعبد يبدو بارداً في الليل حتى في الصيف.",
        insiderTip: "If you've already done the daytime Karnak tour, this show is a completely different experience — seeing the same columns in dramatic lighting with a narrative completely changes how you feel about the place.",
        insiderTipAr: "إن كنت قد أكملت جولة الكرنك النهارية، هذا العرض تجربة مختلفة تماماً — رؤية نفس الأعمدة في إضاءة درامية مع سرد قصصي يغيّر كلياً شعورك تجاه المكان.",
        physicalDifficulty: "easy",
        image: null,
        transport: { type: "Private vehicle included", typeAr: "مركبة خاصة مشمولة", details: "Hotel to Karnak and back", detailsAr: "من الفندق إلى الكرنك والعودة" },
        nearbyFood: null,
      },
      {
        step: 2,
        time: "19:30",
        duration: "20 minutes",
        type: "activity",
        title: "Arrival & Pre-Show at the Entrance",
        titleAr: "الوصول وما قبل العرض عند المدخل",
        description:
          "Arrive at Karnak and collect your show tickets. In the 20 minutes before the show begins, you can walk slowly along the sphinx avenue and take in the atmosphere of the temple at night — the enormous First Pylon illuminated from below, the ram-headed sphinxes casting long shadows, the warm scent of desert stone in the cooling air.",
        descriptionAr:
          "تصل إلى الكرنك وتستلم تذاكر العرض. في 20 دقيقة قبل بدء العرض، يمكنك المشي ببطء على طريق أبي الهول والاستمتاع بأجواء المعبد ليلاً — البوابة الأولى الضخمة مضاءة من الأسفل وأبو الهول يلقي ظلالاً طويلة.",
        historicalContext: null,
        whatToExpect: "Tickets are collected at the entrance kiosk. Groups assemble near the first pylon before being led inside for the show.",
        whatToExpectAr: "تُستلم التذاكر من كشك المدخل. تتجمع المجموعات بالقرب من البوابة الأولى قبل الاقتياد إلى الداخل للعرض.",
        insiderTip: "Get to the front of the group when the show begins — the best positions for the lake finale are on the raised seating area closest to the water.",
        insiderTipAr: "احرص على التواجد في مقدمة المجموعة عند بدء العرض — أفضل مواضع لنهاية البحيرة هي منطقة الجلوس المرتفعة الأقرب إلى الماء.",
        physicalDifficulty: "easy",
        image: null,
        location: { name: "Karnak Temple entrance", nameAr: "مدخل معبد الكرنك" },
        transport: null,
        nearbyFood: null,
      },
      {
        step: 3,
        time: "20:00",
        duration: "60 minutes",
        type: "activity",
        title: "The Light & Sound Show",
        titleAr: "عرض الصوت والضوء",
        description:
          "The show begins as the group is led through the darkened temple complex in stages. At each location, dramatic lighting floods the area — coloured spotlights turning the massive columns from shadow to fire — while a professional narration (in English) tells the story of Karnak through the voices of gods, pharaohs, and priests of ancient Egypt. The narrative covers the founding of the temple by Thutmose I, its expansion by the great pharaohs of the New Kingdom, the religious revolution of Akhenaten, and the final decline of ancient Egyptian religion. The finale takes place at the Sacred Lake: the entire lake area is illuminated, with lights shimmering in the water, and the narration reaches its climax as you sit on tiered seating watching reflections of the temple ripple across the lake's surface. The total show duration is approximately 45–60 minutes.",
        descriptionAr:
          "يبدأ العرض بينما تُقاد المجموعة عبر مجمع المعبد المُظلم على مراحل. في كل موقع، يغمر الضوء الدرامي المنطقة — الأضواء الملونة تحوّل الأعمدة الضخمة من ظل إلى نار — بينما يروي تعليق احترافي قصة الكرنك. النهاية تكون عند البحيرة المقدسة حيث يُضاء المنظر بالكامل وتتتموج انعكاسات المعبد عبر سطح البحيرة.",
        historicalContext: "The Karnak Sound and Light Show was one of the first of its kind in the world when it was inaugurated in 1961, inspired by similar shows at the French chateaux. It was created to bring the temple's history to life for the growing number of international tourists visiting post-revolution Egypt.",
        historicalContextAr: "كان عرض الصوت والضوء في الكرنك من أوائل من نوعه في العالم حين افتُتح عام 1961، مستوحى من عروض مماثلة في القصور الفرنسية.",
        whatToExpect: "You walk slowly through the temple as part of a group, stopping at several key locations. The show is partly standing, partly seated (at the lake finale). Wear comfortable shoes — you'll walk about 1 km. The narration is clear and well-paced.",
        whatToExpectAr: "تمشي ببطء عبر المعبد كجزء من مجموعة، تتوقف في عدة مواقع رئيسية. العرض جزء منه وقوف وجزء جلوس (عند نهاية البحيرة). ارتدِ حذاءً مريحاً.",
        insiderTip: "The most beautiful moment of the entire show is when the Sacred Lake lights turn on for the first time and you see the reflection of the illuminated obelisk perfectly doubled in the still water. Stay at the front-left of the seating area for the best view of this.",
        insiderTipAr: "أجمل لحظة في العرض كله هي حين تُضاء أضواء البحيرة المقدسة لأول مرة وترى انعكاس المسلة المضاءة مضاعفاً بشكل مثالي في الماء الهادئ.",
        physicalDifficulty: "easy",
        image: "karnak-show-lake-finale.jpg",
        location: { name: "Throughout Karnak Temple complex", nameAr: "في جميع أنحاء مجمع معبد الكرنك" },
        transport: null,
        nearbyFood: null,
      },
      {
        step: 4,
        time: "21:00",
        duration: "20 minutes",
        type: "transport",
        title: "Return Transfer to Hotel",
        titleAr: "العودة إلى الفندق",
        description: "Your driver collects you at the temple exit and returns you to your hotel. End of evening.",
        descriptionAr: "سائقك يجمعك عند مخرج المعبد ويعيدك إلى فندقك. نهاية الأمسية.",
        historicalContext: null,
        whatToExpect: "You're back at your hotel by approximately 21:30. A perfect time to find dinner on the Corniche if you haven't eaten.",
        whatToExpectAr: "ستكون في فندقك بحلول الساعة 21:30 تقريباً. وقت مثالي لإيجاد العشاء على الكورنيش.",
        insiderTip: null,
        physicalDifficulty: "easy",
        image: null,
        transport: { type: "Private vehicle included", typeAr: "مركبة خاصة مشمولة", details: "Door-to-door return to hotel", detailsAr: "عودة من الباب إلى الباب إلى الفندق" },
        nearbyFood: { name: "Corniche restaurants", nameAr: "مطاعم الكورنيش", description: "Excellent restaurants open late on the Nile Corniche, 5 minutes from Karnak", descriptionAr: "مطاعم ممتازة مفتوحة حتى متأخر على كورنيش النيل، 5 دقائق من الكرنك", priceRange: "$$" },
      },
    ],
    importantInfo: [
      "Show schedule varies by evening and language — confirm the English show time when booking",
      "Show is approximately 45–60 minutes; total experience including transport is ~2.5 hours",
      "Bring a light jacket or layer — the temple feels cool at night even in summer",
      "The show involves 1 km of walking — wear comfortable shoes",
      "Pairs perfectly with a daytime guided tour of Karnak for full context",
    ],
    importantInfoAr: [
      "جدول العرض يتغير حسب المساء واللغة — تأكد من مواعيد العرض الإنجليزي عند الحجز",
      "العرض نحو 45-60 دقيقة؛ التجربة الكاملة مع التنقل ~2.5 ساعة",
      "أحضر سترة خفيفة — المعبد بارد ليلاً حتى في الصيف",
    ],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "الاستقبال من الفندق في أي مكان في مدينة الأقصر",
    },
    accessibility: "Easy. The show route is entirely on flat ground through the temple complex.",
    accessibilityAr: "سهل. مسار العرض على أرض مستوية بالكامل عبر مجمع المعبد.",
  },
 
  // ─────────────────────────────────────────────────────────────────────────
  // 11. Edfu & Kom Ombo Day Trip from Luxor
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Edfu & Kom Ombo Day Trip from Luxor",
    titleAr: "رحلة يوم إلى إدفو وكوم أمبو من الأقصر",
    slug: "edfu-kom-ombo-day-trip-luxor",
    description:
      "Head south from Luxor on this remarkable day trip to two of Egypt's most impressive ancient temples. At Edfu, you'll visit the Temple of Horus, one of the best-preserved temples in the country. Kom Ombo then offers a unique double temple dedicated to both the crocodile god Sobek and the falcon god Horus, famous for its remarkable mummified crocodiles on display.",
    descriptionAr:
      "توجه جنوباً من الأقصر في هذه الرحلة اليومية الرائعة إلى اثنين من أكثر المعابد القديمة إثارة للإعجاب في مصر.",
    category: "Day trip",
    price: {
      original: 97.24,
      discounted: 77.79,
      currency: "USD",
    },
    duration: "10 hours",
    language: ["English"],
    rating: { score: 7.6, reviews: 28 },
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
    gallery: [
      {
        image: "edfu-entrance-pylon.jpg",
        caption: "The towering 36-metre entrance pylon of Edfu Temple",
        captionAr: "البوابة الشاهقة البالغة 36 متراً لمعبد إدفو",
        alt: "Massive stone entrance pylon of Edfu Temple with carved battle reliefs",
        altAr: "بوابة حجرية ضخمة لمعبد إدفو مع نقوش معارك منحوتة",
      },
      {
        image: "edfu-horus-falcon-statue.jpg",
        caption: "The famous black granite Horus falcon statue in Edfu's inner courtyard",
        captionAr: "تمثال الصقر حورس الغراني الأسود الشهير في الفناء الداخلي لإدفو",
        alt: "Large black granite falcon statue wearing the double crown of Egypt",
        altAr: "تمثال صقر غراني أسود كبير يرتدي التاج المزدوج لمصر",
      },
      {
        image: "edfu-horse-carriage-street.jpg",
        caption: "Traditional horse-drawn carriage through the streets of Edfu",
        captionAr: "عربة كارو تقليدية يجرها حصان عبر شوارع إدفو",
        alt: "Horse and carriage carrying tourists through the narrow market streets of Edfu",
        altAr: "حصان وعربة تحمل سياحاً عبر الشوارع الضيقة في سوق إدفو",
      },
      {
        image: "kom-ombo-double-temple.jpg",
        caption: "The double temple of Kom Ombo on the banks of the Nile",
        captionAr: "المعبد المزدوج في كوم أمبو على ضفاف النيل",
        alt: "Symmetrical double temple of Kom Ombo with Nile river visible behind",
        altAr: "المعبد المزدوج المتماثل في كوم أمبو مع النيل مرئياً في الخلف",
      },
      {
        image: "kom-ombo-mummified-crocodiles.jpg",
        caption: "Ancient mummified crocodiles in the Kom Ombo Crocodile Museum",
        captionAr: "تماسيح محنطة قديمة في متحف تماسيح كوم أمبو",
        alt: "Display of mummified crocodiles of various sizes in the Kom Ombo museum",
        altAr: "عرض تماسيح محنطة بأحجام مختلفة في متحف كوم أمبو",
      },
      {
        image: "kom-ombo-medical-reliefs.jpg",
        caption: "Ancient medical instruments carved on the inner walls of Kom Ombo",
        captionAr: "أدوات طبية قديمة منقوشة على الجدران الداخلية لكوم أمبو",
        alt: "Stone wall relief showing ancient Egyptian surgical instruments including forceps and scalpels",
        altAr: "نقش جداري حجري يصور أدوات جراحية مصرية قديمة بما فيها الملاقط والمشارط",
      },
    ],
    itinerary: [
      {
        step: 1,
        time: "07:00",
        duration: "120 minutes",
        type: "transport",
        title: "Hotel Pickup & Drive to Edfu",
        titleAr: "الاستقبال من الفندق والقيادة إلى إدفو",
        description:
          "Your guide and driver collect you from your hotel for the approximately 2-hour drive south to Edfu along the Nile Valley. The route passes through rural Upper Egypt — green sugarcane fields, small mud-brick villages, and traditional farming life. Your guide uses the drive time to brief you on Edfu Temple and the mythology of Horus.",
        descriptionAr:
          "يأخذك مرشدك وسائقك من فندقك لرحلة القيادة الجنوبية التي تستغرق نحو ساعتين إلى إدفو. يستخدم مرشدك وقت القيادة لإطلاعك على معبد إدفو وأسطورة حورس.",
        historicalContext: "Edfu was known in ancient times as Behdet — the mythological birthplace of Horus. The city was one of the most important religious centres in Upper Egypt, and its location midway between Luxor and Aswan made it a key stop on the ancient trade route along the Nile.",
        historicalContextAr: "عُرفت إدفو في العصور القديمة باسم بهدت — الموطن الأسطوري لحورس. كانت المدينة من أهم المراكز الدينية في صعيد مصر.",
        whatToExpect: "Comfortable 2-hour drive. Bring snacks and water for the road. The drive itself is scenic — the Nile valley narrows as you head south and the desert mountains come closer.",
        whatToExpectAr: "قيادة مريحة لمدة ساعتين. أحضر وجبات خفيفة وماءً للطريق. القيادة نفسها ذات مناظر جميلة.",
        insiderTip: "Watch for the landscape change as you leave Luxor — the valley gradually narrows and the desert escarpment rises higher on both sides. By the time you reach Edfu the landscape is strikingly different from the wide flat plain around Luxor.",
        insiderTipAr: "راقب تغيّر المنظر مع مغادرتك الأقصر — الوادي يضيق تدريجياً ومنحدر الصحراء يرتفع على الجانبين.",
        physicalDifficulty: "easy",
        image: "nile-valley-south.jpg",
        location: { name: "Luxor to Edfu, Aswan Governorate", nameAr: "من الأقصر إلى إدفو، محافظة أسوان" },
        transport: { type: "Private air-conditioned vehicle", typeAr: "مركبة خاصة مكيفة", details: "~2 hours on the main Nile Valley road south", detailsAr: "~ساعتان على الطريق الرئيسي لوادي النيل جنوباً" },
        nearbyFood: null,
      },
      {
        step: 2,
        time: "09:00",
        duration: "10 minutes",
        type: "transport",
        title: "Horse Carriage Ride Through Edfu",
        titleAr: "ركوب العربة الكارو عبر إدفو",
        description:
          "Arrive in Edfu town and board a traditional horse-drawn carriage for the 10-minute ride through the local market streets to the temple entrance. The carriage ride passes through the real, lived-in centre of Edfu — market stalls, schoolchildren, mosques, coffee houses — an unfiltered glimpse of provincial Egyptian life that no air-conditioned vehicle can provide.",
        descriptionAr:
          "تصل إلى مدينة إدفو وتركب عربة كارو تقليدية لرحلة 10 دقائق عبر شوارع السوق المحلية إلى مدخل المعبد. الرحلة تمر عبر وسط إدفو الحي — أكشاك السوق والطلاب والمساجد وبيوت القهوة.",
        historicalContext: null,
        whatToExpect: "A bumpy, lively 10-minute ride in a two-wheeled carriage pulled by a single horse. Very atmospheric and genuinely enjoyable. Your guide rides in a separate carriage or walks alongside.",
        whatToExpectAr: "رحلة نابضة بالحياة لمدة 10 دقائق في عربة ذات عجلتين تجرها حصان واحد. رائعة جداً وممتعة حقاً.",
        insiderTip: "Sit on the left side of the carriage for the best view of the temple as you approach — the top of the enormous pylon becomes visible above the rooftops as you get close.",
        insiderTipAr: "اجلس على الجانب الأيسر من العربة لأفضل منظر للمعبد عند الاقتراب — قمة البوابة الضخمة تصبح مرئية فوق الأسطح.",
        physicalDifficulty: "easy",
        image: "edfu-carriage-ride.jpg",
        transport: { type: "Horse-drawn carriage (included)", typeAr: "عربة كارو يجرها حصان (مشمولة)", details: "Traditional ride through Edfu town centre", detailsAr: "رحلة تقليدية عبر وسط مدينة إدفو" },
        nearbyFood: null,
      },
      {
        step: 3,
        time: "09:15",
        duration: "90 minutes",
        type: "visit",
        title: "Temple of Horus at Edfu",
        titleAr: "معبد حورس في إدفو",
        description:
          "Enter the best-preserved ancient temple in Egypt. Built during the Ptolemaic period between 237 and 57 BC, the Temple of Horus is extraordinary not just for its preservation but for the completeness of its design — the massive entrance pylon (36 metres high), the great courtyard, two hypostyle halls, the inner sanctuary, a roof accessible by staircase, and a surrounding enclosure wall all survive largely intact. Your guide walks you through the 'sacred drama' reliefs on the outer walls — a 17-panel sequence depicting the annual ritual battle between Horus and Set, essentially the world's first sequential narrative art. In the inner courtyard, find the famous black granite falcon statue of Horus wearing the double crown of Egypt — one of the most iconic images in Egyptian art. Inside the sanctuary, the stone naos (barque shrine) still stands — the actual box that housed the sacred statue of Horus during religious ceremonies.",
        descriptionAr:
          "ادخل إلى أفضل معبد قديم محفوظ في مصر. بُني في الحقبة البطلمية بين عامَي 237 و57 قبل الميلاد، المعبد استثنائي ليس فقط في حفظه بل في اكتمال تصميمه. يصطحبك مرشدك عبر نقوش 'الدراما المقدسة' على الجدران الخارجية — سلسلة من 17 لوحة تصور المعركة الطقسية السنوية بين حورس وست.",
        historicalContext: "The Ptolemaic pharaohs — Greek rulers of Egypt following Alexander the Great's conquest — built Edfu Temple entirely in traditional Egyptian style to legitimise their rule in the eyes of the Egyptian people. This makes Edfu one of the most complete examples of classical Egyptian temple design in existence — a deliberate 'perfect copy' created 2,300 years ago.",
        historicalContextAr: "الفراعنة البطلميون — الحكام اليونانيون لمصر بعد فتح الإسكندر الأكبر — بنوا معبد إدفو بالكامل بالأسلوب المصري التقليدي لإضفاء الشرعية على حكمهم. هذا يجعل إدفو من أكمل أمثلة التصميم المعبدي المصري الكلاسيكي — 'نسخة مثالية' متعمدة خُلقت قبل 2300 عام.",
        whatToExpect: "A large, impressive temple with much of its roof intact — dimmer and cooler inside than Luxor and Karnak. Allow 90 minutes. Your guide covers all major areas including the roof if you choose to climb it.",
        whatToExpectAr: "معبد كبير ورائع مع معظم سقفه سليماً — أكثر ظلاماً وبرودة في الداخل من الأقصر والكرنك. خصص 90 دقيقة.",
        insiderTip: "Don't miss the 'sacred drama' panels on the outer enclosure wall — your guide must show these to you. They are the most important narrative reliefs in the temple and are completely ignored by most visitors who only look at the main building.",
        insiderTipAr: "لا تفوّت لوحات 'الدراما المقدسة' على جدار السياج الخارجي — يجب أن يريك مرشدك هذه. إنها أهم النقوش السردية في المعبد ويتجاهلها تماماً معظم الزوار.",
        physicalDifficulty: "easy",
        image: "edfu-sanctuary-interior.jpg",
        location: { name: "Edfu Temple, Aswan Governorate", nameAr: "معبد إدفو، محافظة أسوان", coordinates: { lat: 24.9779, lng: 32.8732 } },
        transport: null,
        nearbyFood: { name: "Local restaurants near Edfu Temple", nameAr: "مطاعم محلية بالقرب من معبد إدفو", description: "Several simple local restaurants near the temple gate — ask your guide for the current best option. Good for a quick lunch before heading to Kom Ombo.", descriptionAr: "عدة مطاعم محلية بسيطة بالقرب من بوابة المعبد. جيدة لغداء سريع قبل التوجه إلى كوم أمبو.", priceRange: "$" },
      },
      {
        step: 4,
        time: "10:45",
        duration: "60 minutes",
        type: "transport",
        title: "Return by Carriage & Drive to Kom Ombo",
        titleAr: "العودة بالعربة والقيادة إلى كوم أمبو",
        description:
          "Return to your vehicle by horse carriage through Edfu's streets and drive approximately 1 hour further south to Kom Ombo. Lunch stop is possible en route — not included in tour price. Your guide continues the story connecting Horus at Edfu to Sobek and Horus at Kom Ombo.",
        descriptionAr:
          "العودة إلى مركبتك بالعربة عبر شوارع إدفو والقيادة نحو ساعة إضافية جنوباً إلى كوم أمبو. توقف الغداء ممكن في الطريق — غير مشمول في السعر.",
        historicalContext: null,
        whatToExpect: "1-hour comfortable drive through increasingly dramatic Nile scenery. Watch for crocodile sightings on the river banks — the population has recovered since the Aswan Dam reduced water fluctuations.",
        whatToExpectAr: "ساعة قيادة مريحة عبر مناظر النيل المتصاعدة الدراما. راقب التماسيح على ضفاف النهر.",
        insiderTip: "Ask your driver to slow down near the river between Edfu and Kom Ombo — this is the most reliable stretch of the Nile for crocodile sightings in Egypt.",
        insiderTipAr: "اطلب من سائقك التباطؤ بالقرب من النهر بين إدفو وكوم أمبو — هذا أكثر امتداد من النيل موثوقية لمشاهدة التماسيح في مصر.",
        physicalDifficulty: "easy",
        image: null,
        transport: { type: "Horse carriage back to vehicle + private vehicle", typeAr: "عربة كارو عائداً إلى المركبة + مركبة خاصة", details: "~1 hour driving south to Kom Ombo", detailsAr: "~ساعة قيادة جنوباً إلى كوم أمبو" },
        nearbyFood: { name: "Restaurant between Edfu and Kom Ombo", nameAr: "مطعم بين إدفو وكوم أمبو", description: "Your guide can arrange a brief lunch stop en route. Simple local food — not included in price.", descriptionAr: "مرشدك يمكنه ترتيب توقف غداء قصير في الطريق. طعام محلي بسيط — غير مشمول في السعر.", priceRange: "$" },
      },
      {
        step: 5,
        time: "12:00",
        duration: "90 minutes",
        type: "visit",
        title: "Double Temple of Kom Ombo",
        titleAr: "المعبد المزدوج في كوم أمبو",
        description:
          "Arrive at Kom Ombo — the only ancient Egyptian temple dedicated simultaneously to two equal gods, creating a perfectly symmetrical design where everything is doubled. The left half is dedicated to Sobek (the crocodile god, representing the power of the Nile and fertility) and the right half to Haroeris (Horus the Elder, the falcon sky god). Your guide walks you through the dual courtyards and sanctuaries, explaining how worshippers of each god would have used their respective half of the temple for ceremonies. Visit the Crocodile Museum inside the complex — actual mummified crocodiles in various sizes preserved for thousands of years, once venerated as living embodiments of Sobek. On one inner wall, your guide points out the remarkable carved medical instruments: forceps, scalpels, bone saws, birthing chairs, and medicine jars — evidence of a medical school once associated with the temple. The riverside setting of Kom Ombo is unique — the Nile is visible from inside the temple precinct, and the afternoon light on the water is exceptionally beautiful.",
        descriptionAr:
          "تصل إلى كوم أمبو — المعبد المصري القديم الوحيد المكرس في آنٍ واحد لإلهين متساويين. النصف الأيسر مكرس لسوبك والنصف الأيمن لحورس الكبير. زُر متحف التماسيح داخل المجمع. على أحد الجدران الداخلية يشير مرشدك إلى الأدوات الطبية المنقوشة الرائعة.",
        historicalContext: "Kom Ombo was built during the Ptolemaic period (180–47 BC) at a bend in the Nile that was historically a gathering point for large crocodile populations, making it the perfect location for a temple to Sobek. The town was also an important staging point for elephant caravans coming from Nubia, used in Ptolemaic military campaigns.",
        historicalContextAr: "بُني كوم أمبو في الحقبة البطلمية (180-47 قبل الميلاد) عند منعطف في النيل كان تاريخياً نقطة تجمع لتجمعات التماسيح الكبيرة. كانت المدينة أيضاً نقطة توقف مهمة لقوافل الفيلة القادمة من النوبة.",
        whatToExpect: "A compact temple with beautiful Nile views. Less overwhelming than Edfu. The Crocodile Museum is a separate small room — fascinating and slightly eerie. The afternoon light here is spectacular.",
        whatToExpectAr: "معبد مضغوط مع مناظر نيلية جميلة. أقل إرهاقاً من إدفو. متحف التماسيح غرفة صغيرة منفصلة — رائع ومثير قليلاً للقلق. الضوء بعد الظهر هنا رائع.",
        insiderTip: "Find the ancient Nilometer inside the temple grounds — a circular stone shaft with carved measurement marks used for 2,000 years to measure the Nile's flood level. This directly determined how much tax farmers would pay each year.",
        insiderTipAr: "ابحث عن مقياس النيل القديم داخل ساحة المعبد — عمود حجري دائري بعلامات قياس منحوتة استُخدم لـ2000 عام لقياس مستوى فيضان النيل.",
        physicalDifficulty: "easy",
        image: "kom-ombo-riverside.jpg",
        location: { name: "Kom Ombo Temple, Aswan Governorate", nameAr: "معبد كوم أمبو، محافظة أسوان", coordinates: { lat: 24.4522, lng: 32.9285 } },
        transport: { type: "5-minute walk from car park along the Nile", typeAr: "5 دقائق مشياً من موقف السيارات على طول النيل", details: "Flat, pleasant riverside walk", detailsAr: "مشية مستوية وممتعة على ضفة النهر" },
        nearbyFood: { name: "Kom Ombo riverside café", nameAr: "كافيه كوم أمبو على الضفة", description: "Simple café with outstanding Nile views beside the temple. Cold drinks and light snacks.", descriptionAr: "كافيه بسيط مع مناظر نيلية رائعة بجانب المعبد. مشروبات باردة ووجبات خفيفة.", priceRange: "$" },
      },
      {
        step: 6,
        time: "13:30",
        duration: "150 minutes",
        type: "transport",
        title: "Return Drive to Luxor",
        titleAr: "رحلة العودة إلى الأقصر",
        description:
          "Begin the approximately 2.5-hour drive north back to Luxor, arriving at your hotel in the late afternoon. Your guide is available for questions and further discussion during the drive.",
        descriptionAr:
          "تبدأ رحلة العودة نحو 2.5 ساعة شمالاً إلى الأقصر، تصل إلى فندقك في أواخر العصر.",
        historicalContext: null,
        whatToExpect: "Long comfortable drive. Back at your hotel by approximately 16:30.",
        whatToExpectAr: "قيادة طويلة مريحة. في فندقك بحلول الساعة 16:30 تقريباً.",
        insiderTip: "Use the drive time to review your photos and ask your guide any questions about what you saw — the drive is long enough for a thorough debrief.",
        insiderTipAr: "استخدم وقت القيادة لمراجعة صورك وطرح أسئلتك على مرشدك — القيادة طويلة بما يكفي لمراجعة شاملة.",
        physicalDifficulty: "easy",
        image: null,
        transport: { type: "Private air-conditioned vehicle north to Luxor", typeAr: "مركبة خاصة مكيفة شمالاً إلى الأقصر", details: "~2.5 hours, door-to-door drop-off at hotel", detailsAr: "~2.5 ساعة، توصيل من الباب إلى الباب حتى الفندق" },
        nearbyFood: null,
      },
    ],
    importantInfo: [
      "Long day with significant driving — bring snacks, water, and entertainment for the road",
      "Lunch is not included — bring cash (~$5–10) or your own food",
      "Dress modestly at both temples — cover shoulders and knees",
      "The horse carriage ride is included and is a standard part of visiting Edfu",
      "Crocodile Museum at Kom Ombo is included in the entrance fee",
    ],
    importantInfoAr: [
      "يوم طويل مع قيادة كبيرة — أحضر وجبات خفيفة وماءً وما يُسلّيك في الطريق",
      "الغداء غير مشمول — أحضر نقوداً (~5-10 دولارات) أو طعامك",
      "ارتدِ ملابس محتشمة في كلا المعبدين",
    ],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "الاستقبال من الفندق في أي مكان في مدينة الأقصر",
    },
    accessibility: "Moderate. Both temples involve walking on ancient stone floors with some steps and ramps.",
    accessibilityAr: "معتدل. يتضمن كلا المعبدين المشي على أرضيات حجرية قديمة مع بعض الدرجات والمنحدرات.",
  },
 
  // ─────────────────────────────────────────────────────────────────────────
  // 12. Luxor Tour by Horse-Drawn Carriage
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Luxor Tour by Horse-Drawn Carriage",
    titleAr: "جولة الأقصر بالعربة الكارو",
    slug: "luxor-tour-horse-drawn-carriage",
    description:
      "Discover the charm of Luxor in the most traditional way possible — aboard a classic horse-drawn carriage. Clip-clop through the city's streets and along the Nile Corniche, passing by the entrance of Luxor Temple and taking in the lively atmosphere of this ancient city in a relaxed and authentic manner.",
    descriptionAr:
      "اكتشف سحر الأقصر بأكثر الطرق التقليدية — على متن عربة الكارو الكلاسيكية. تجوّل في شوارع المدينة وعلى كورنيش النيل مروراً بمدخل معبد الأقصر.",
    category: "Adventure and nature",
    price: {
      original: 17.57,
      discounted: null,
      currency: "USD",
    },
    duration: "1 hour 30 minutes",
    language: ["English"],
    rating: { score: 8.0, reviews: 3 },
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
    gallery: [
      {
        image: "luxor-carriage-corniche.jpg",
        caption: "Horse-drawn carriage along the Nile Corniche in Luxor",
        captionAr: "عربة كارو يجرها حصان على كورنيش النيل في الأقصر",
        alt: "Traditional horse and carriage riding along the Nile Corniche with Luxor Temple visible",
        altAr: "حصان وعربة تقليديان يسيران على كورنيش النيل مع معبد الأقصر مرئياً",
      },
      {
        image: "luxor-temple-entrance-dusk.jpg",
        caption: "The entrance to Luxor Temple seen from the Corniche",
        captionAr: "مدخل معبد الأقصر كما يُرى من الكورنيش",
        alt: "Entrance pylon and obelisk of Luxor Temple viewed from street level on the Corniche",
        altAr: "بوابة ومسلة معبد الأقصر كما تُرى من مستوى الشارع على الكورنيش",
      },
      {
        image: "luxor-market-streets.jpg",
        caption: "The lively market streets of central Luxor",
        captionAr: "شوارع السوق الحيوية في وسط الأقصر",
        alt: "Busy Egyptian market street in Luxor with shops, people, and traditional architecture",
        altAr: "شارع سوق مصري مزدحم في الأقصر مع محلات وناس وعمارة تقليدية",
      },
      {
        image: "luxor-nile-evening.jpg",
        caption: "The Nile at golden hour seen from the Corniche",
        captionAr: "النيل في الساعة الذهبية كما يُرى من الكورنيش",
        alt: "Nile River bathed in golden late-afternoon light with feluccas on the water",
        altAr: "نهر النيل مغمور بالضوء الذهبي لأواخر العصر مع فلوك على الماء",
      },
    ],
    itinerary: [
      {
        step: 1,
        time: "Meet at start",
        duration: "5 minutes",
        type: "transport",
        title: "Meet Your Carriage at Luxor Temple Square",
        titleAr: "لقاء العربة في ميدان معبد الأقصر",
        description:
          "Meet your English-speaking guide and horse-drawn carriage at the square in front of Luxor Temple on the Nile Corniche. Hotel pickup is not included — the meeting point is a short walk, taxi, or tuk-tuk ride from any hotel in central Luxor.",
        descriptionAr:
          "التقِ بمرشدك الناطق بالإنجليزية والعربة في الميدان أمام معبد الأقصر على كورنيش النيل. الاستقبال من الفندق غير مشمول.",
        historicalContext: null,
        whatToExpect: "Your guide is waiting with the carriage at the square. A brief introduction before you board.",
        whatToExpectAr: "مرشدك ينتظر مع العربة في الميدان. مقدمة قصيرة قبل الصعود.",
        insiderTip: "The best time for this tour is late afternoon (16:00–18:00) when the light on the Nile is golden and the Corniche is at its most lively.",
        insiderTipAr: "أفضل وقت لهذه الجولة هو أواخر العصر (16:00-18:00) حين يكون الضوء على النيل ذهبياً والكورنيش في أكثر فترات حيويته.",
        physicalDifficulty: "easy",
        image: null,
        location: { name: "Luxor Temple Square, Corniche el-Nil", nameAr: "ميدان معبد الأقصر، كورنيش النيل" },
        transport: { type: "Self-arranged taxi or tuk-tuk from hotel", typeAr: "سيارة أجرة أو توك توك تُرتّبها بنفسك من الفندق", details: "Meeting point is easily accessible from all central Luxor hotels", detailsAr: "نقطة الالتقاء سهلة الوصول من جميع فنادق وسط الأقصر" },
        nearbyFood: null,
      },
      {
        step: 2,
        time: "At start",
        duration: "20 minutes",
        type: "activity",
        title: "Along the Nile Corniche — Past Luxor Temple",
        titleAr: "على طول كورنيش النيل — بمحاذاة معبد الأقصر",
        description:
          "Your carriage sets off northward along the Nile Corniche — one of the most beautiful urban promenades in Egypt, with the Nile on one side and ancient monuments on the other. You pass directly in front of the entrance to Luxor Temple: the grand entrance pylon of Ramses II, the colossal seated statues, and the lone red granite obelisk that has stood here for over 3,000 years. Your guide explains the history of what you're passing and points out the Avenue of Sphinxes that extends south from the temple entrance.",
        descriptionAr:
          "تنطلق عربتك شمالاً على طول كورنيش النيل — أحد أجمل الكورنيشات الحضرية في مصر. تمر مباشرة أمام مدخل معبد الأقصر: البوابة الكبرى لرمسيس الثاني والتماثيل الجالسة الضخمة والمسلة الحمراء الوحيدة.",
        historicalContext: "The Corniche road follows the route of the ancient processional way used by the Egyptians for thousands of years — priests, merchants, pilgrims, and pharaohs all walked this same stretch of riverbank past Luxor Temple to reach Karnak to the north.",
        historicalContextAr: "طريق الكورنيش يتبع مسار الطريق الاحتفالي القديم الذي استخدمه المصريون لآلاف السنين — الكهنة والتجار والحجاج والفراعنة جميعهم مشوا على امتداد ضفة النهر هذا.",
        whatToExpect: "The carriage moves at a walking pace — fast enough to feel the breeze, slow enough to see everything clearly. Your guide narrates as you go.",
        whatToExpectAr: "العربة تتحرك بوتيرة المشي — سريعة بما يكفي لتشعر بالنسيم، بطيئة بما يكفي لترى كل شيء بوضوح.",
        insiderTip: "Look back over your shoulder as you pass the entrance to Luxor Temple — the angle from the moving carriage gives you a wide view of the full pylon and obelisk together that you can't get standing in front of it.",
        insiderTipAr: "انظر إلى الوراء فوق كتفك بينما تمر أمام مدخل معبد الأقصر — الزاوية من العربة المتحركة تمنحك منظراً واسعاً للبوابة والمسلة معاً.",
        physicalDifficulty: "easy",
        image: "carriage-luxor-temple-passing.jpg",
        location: { name: "Nile Corniche, Luxor", nameAr: "كورنيش النيل، الأقصر" },
        transport: null,
        nearbyFood: null,
      },
      {
        step: 3,
        time: "In tour",
        duration: "30 minutes",
        type: "activity",
        title: "Through the City Backstreets & Market",
        titleAr: "عبر الأزقة الخلفية للمدينة والسوق",
        description:
          "Your carriage turns inland from the Corniche and weaves through the backstreets of central Luxor — a completely different world from the tourist-facing riverfront. You pass local spice shops, fabric merchants, coffee houses (ahwas) where men play backgammon and dominoes, neighbourhood mosques with their calls to prayer, school gates with children streaming out, and fruit and vegetable markets piled high with produce. The sound of horse hooves on cobbled streets, the call to prayer drifting from a minaret, the smell of spices and coffee — this is Luxor as it actually lives, not just as a museum.",
        descriptionAr:
          "تنعطف عربتك داخلاً من الكورنيش وتتلوى عبر الأزقة الخلفية لوسط الأقصر — عالم مختلف تماماً عن الواجهة السياحية. تمر بمحلات التوابل والأقمشة والقهاوي ومساجد الحي ومدارس وأسواق الفاكهة والخضار.",
        historicalContext: "Luxor's modern city is built directly on top of ancient Thebes — walk down any backstreet and you may find ancient column drums used as doorsteps, or medieval Islamic architecture built over pharaonic foundations. The layering of history is visible everywhere.",
        historicalContextAr: "مدينة الأقصر الحديثة مبنية مباشرة على طيبة القديمة — امشِ في أي زقاق خلفي وقد تجد طبلات أعمدة قديمة مستخدمة كدرجات أبواب، أو عمارة إسلامية من العصور الوسطى مبنية على أسس فرعونية.",
        whatToExpect: "The most authentic 30 minutes of any Luxor tour. You'll see real Egyptian life — not the version staged for tourists. Your guide explains what you're seeing as you pass.",
        whatToExpectAr: "أكثر 30 دقيقة أصالة في أي جولة في الأقصر. ستشاهد الحياة المصرية الحقيقية. مرشدك يشرح ما تراه.",
        insiderTip: "Ask your guide to have the carriage slow down when you pass a traditional coffee house (ahwa) — if it's the right time of day, watch the men playing backgammon. It's an intensely local scene that most tourists never see.",
        insiderTipAr: "اطلب من مرشدك إبطاء العربة عند مرورك بقهوة تقليدية — في الوقت المناسب من اليوم، شاهد الرجال يلعبون النرد. مشهد محلي مكثف لا يراه معظم السياح.",
        physicalDifficulty: "easy",
        image: "luxor-backstreets-carriage.jpg",
        location: { name: "Central Luxor backstreets", nameAr: "أزقة وسط الأقصر الخلفية" },
        transport: null,
        nearbyFood: { name: "Local spice and food market", nameAr: "سوق التوابل والمواد الغذائية المحلية", description: "Ask your guide to stop briefly at the spice market — buying a small bag of Egyptian spices is an excellent and very affordable souvenir.", descriptionAr: "اطلب من مرشدك التوقف باختصار في سوق التوابل — شراء كيس صغير من التوابل المصرية تذكار ممتاز ومعقول الثمن جداً.", priceRange: "$" },
      },
      {
        step: 4,
        time: "In tour",
        duration: "20 minutes",
        type: "activity",
        title: "Return Along the Corniche",
        titleAr: "العودة على طول الكورنيش",
        description:
          "Your carriage loops back to the Corniche for the return journey south to the starting point. The second pass along the Nile offers a different view — if you went out in late afternoon, the light will have changed dramatically and the river will be at its most golden. Your guide answers any remaining questions and gives recommendations for the rest of your Luxor visit.",
        descriptionAr:
          "تعود عربتك إلى الكورنيش لرحلة العودة جنوباً إلى نقطة البداية. المرور الثاني على النيل يمنح منظراً مختلفاً. مرشدك يجيب على أسئلتك المتبقية.",
        historicalContext: null,
        whatToExpect: "20-minute return along the Corniche. The feluccas on the Nile are beautiful at this time of day. The carriage returns you to the starting point near Luxor Temple.",
        whatToExpectAr: "20 دقيقة عودة على الكورنيش. الفلوك على النيل جميلة في هذا الوقت من اليوم.",
        insiderTip: "If you're doing this tour at sunset, ask your guide to stop briefly at the Nile bank for a 5-minute break to watch the sun go down over the West Bank hills — one of the classic Luxor moments.",
        insiderTipAr: "إن كنت تقوم بهذه الجولة عند الغروب، اطلب من مرشدك التوقف باختصار على ضفة النيل لمدة 5 دقائق لمشاهدة الشمس تغرب فوق تلال الضفة الغربية.",
        physicalDifficulty: "easy",
        image: "nile-corniche-sunset.jpg",
        location: { name: "Nile Corniche heading south, Luxor", nameAr: "كورنيش النيل متجهاً جنوباً، الأقصر" },
        transport: null,
        nearbyFood: null,
      },
      {
        step: 5,
        time: "End of tour",
        duration: null,
        type: "transport",
        title: "Drop-off at Luxor Temple Square",
        titleAr: "التوصيل إلى ميدان معبد الأقصر",
        description:
          "The carriage returns you to the meeting point at Luxor Temple Square. You are free to enter Luxor Temple independently (entrance fee not included) or continue exploring the Corniche and Luxor town on foot.",
        descriptionAr:
          "تعود العربة بك إلى نقطة الالتقاء في ميدان معبد الأقصر. أنت حر لدخول معبد الأقصر باستقلالية أو مواصلة استكشاف الكورنيش.",
        historicalContext: null,
        whatToExpect: "End of tour at the same point you started. Your guide gives final recommendations.",
        whatToExpectAr: "نهاية الجولة في نفس النقطة التي بدأت منها. مرشدك يعطيك توصياته الأخيرة.",
        insiderTip: "Enter Luxor Temple immediately after the carriage tour while you're already here — the combination of the relaxed carriage ride orientation followed by an independent temple walk is the perfect way to explore the East Bank.",
        insiderTipAr: "ادخل معبد الأقصر فوراً بعد جولة العربة بينما أنت هنا بالفعل — مزيج الجولة الاستكشافية المريحة بالعربة يليها مشية مستقلة في المعبد هي الطريقة المثالية لاستكشاف الضفة الشرقية.",
        physicalDifficulty: "easy",
        image: null,
        location: { name: "Luxor Temple Square, Corniche el-Nil", nameAr: "ميدان معبد الأقصر، كورنيش النيل" },
        transport: null,
        nearbyFood: { name: "Corniche restaurants and cafés", nameAr: "مطاعم وكافيهات الكورنيش", description: "Several good options for dinner or a drink directly beside Luxor Temple", descriptionAr: "عدة خيارات جيدة للعشاء أو المشروب مباشرة بجانب معبد الأقصر", priceRange: "$$" },
      },
    ],
    importantInfo: [
      "Meeting point is Luxor Temple Square — hotel pickup is not included",
      "Best experienced in late afternoon (16:00–18:00) for the best light",
      "Tipping the carriage driver and horse attendant is customary (~20–30 EGP)",
      "The tour can be done in the morning but the evening light is far superior",
    ],
    importantInfoAr: [
      "نقطة الالتقاء ميدان معبد الأقصر — الاستقبال من الفندق غير مشمول",
      "أفضل تجربة في أواخر العصر (16:00-18:00) لأفضل ضوء",
      "البقشيش لسائق العربة ومعالج الحصان معتاد (~20-30 جنيهاً)",
    ],
    meetingPoint: {
      description: "Luxor Temple Square, Corniche el-Nil — your guide and carriage will be waiting at the square",
      descriptionAr: "ميدان معبد الأقصر، كورنيش النيل — مرشدك والعربة ينتظران في الميدان",
    },
    accessibility: "Easy. Boarding the carriage requires stepping up approximately 40cm. Not suitable for wheelchair users.",
    accessibilityAr: "سهل. الصعود إلى العربة يتطلب الخطو لأعلى نحو 40 سم. غير مناسب لمستخدمي كراسي العجلات.",
  },
 
  // ─────────────────────────────────────────────────────────────────────────
  // 13. Luxor Museum & Museum of Mummification Guided Tour
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Luxor Museum & Museum of Mummification Guided Tour",
    titleAr: "جولة متحف الأقصر ومتحف التحنيط",
    slug: "luxor-museum-mummification-guided-tour",
    description:
      "Dive into Luxor's extraordinary archaeological heritage with this guided tour of two of Egypt's finest museums. The Luxor Museum houses a world-class collection of artifacts from the Theban region, including royal statues, exquisite jewelry, and pieces from Tutankhamun's treasure. The nearby Museum of Mummification offers a fascinating insight into the ancient Egyptian art of preserving the dead.",
    descriptionAr:
      "انغمس في التراث الأثري الاستثنائي للأقصر بهذه الجولة المصحوبة بمرشد في اثنين من أفضل متاحف مصر.",
    category: "Guided tours and free tours",
    price: {
      original: 56.94,
      discounted: 45.69,
      currency: "USD",
    },
    duration: "4 hours",
    language: ["English"],
    rating: { score: 8.2, reviews: 18 },
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
    gallery: [
      {
        image: "luxor-museum-exterior.jpg",
        caption: "The purpose-built Luxor Museum on the Nile Corniche",
        captionAr: "متحف الأقصر المبني خصيصاً على كورنيش النيل",
        alt: "Modern Luxor Museum building on the Nile Corniche at sunset",
        altAr: "مبنى متحف الأقصر الحديث على كورنيش النيل عند الغروب",
      },
      {
        image: "luxor-museum-thutmose-statue.jpg",
        caption: "The iconic alabaster statue of Thutmose III from the Luxor cache",
        captionAr: "تمثال أمنحتب الثالث الأيقوني من الألباستر من مخبأ الأقصر",
        alt: "Exquisite alabaster statue of Thutmose III discovered beneath Luxor Temple in 1989",
        altAr: "تمثال ألباستر رائع لتحتمس الثالث اكتُشف تحت معبد الأقصر عام 1989",
      },
      {
        image: "luxor-museum-tutankhamun.jpg",
        caption: "Tutankhamun artifacts on display in the Luxor Museum",
        captionAr: "قطع أثرية لتوت عنخ آمون معروضة في متحف الأقصر",
        alt: "Golden artifacts from Tutankhamun's tomb displayed in the Luxor Museum",
        altAr: "قطع أثرية ذهبية من مقبرة توت عنخ آمون معروضة في متحف الأقصر",
      },
      {
        image: "luxor-museum-royal-mummies.jpg",
        caption: "Royal mummies of Ahmose I and Ramses I displayed in the Luxor Museum",
        captionAr: "مومياوات ملكية لأحمس الأول ورمسيس الأول معروضة في متحف الأقصر",
        alt: "Glass-encased royal mummies displayed respectfully in the Luxor Museum",
        altAr: "مومياوات ملكية محفوظة في أقفاص زجاجية معروضة باحترام في متحف الأقصر",
      },
      {
        image: "mummification-museum-exterior.jpg",
        caption: "The Museum of Mummification on the Luxor Corniche",
        captionAr: "متحف التحنيط على كورنيش الأقصر",
        alt: "Small museum building dedicated to the art of mummification in Luxor",
        altAr: "مبنى متحف صغير مكرس لفن التحنيط في الأقصر",
      },
      {
        image: "mummification-museum-display.jpg",
        caption: "Mummified animals and embalming tools in the Museum of Mummification",
        captionAr: "حيوانات محنطة وأدوات تحنيط في متحف التحنيط",
        alt: "Display of mummified cats, crocodiles and ancient embalming tools in the museum",
        altAr: "عرض قطط وتماسيح محنطة وأدوات تحنيط قديمة في المتحف",
      },
    ],
    itinerary: [
      {
        step: 1,
        time: "09:00",
        duration: "15 minutes",
        type: "transport",
        title: "Hotel Pickup & Drive to Luxor Museum",
        titleAr: "الاستقبال من الفندق والقيادة إلى متحف الأقصر",
        description:
          "Your guide meets you at your hotel and drives you to the Luxor Museum on the Nile Corniche — a short journey from most central Luxor hotels. Your guide recommends visiting the museum before the temples during your stay — understanding the objects in context makes the temple visits far more meaningful.",
        descriptionAr:
          "يلتقي بك مرشدك في فندقك ويقودك إلى متحف الأقصر على كورنيش النيل. مرشدك يوصي بزيارة المتحف قبل المعابد — فهم القطع في سياقها يجعل زيارات المعابد أكثر معنى.",
        historicalContext: null,
        whatToExpect: "10–15 minute drive. Your guide briefs you on the museum's highlights and what to focus on.",
        whatToExpectAr: "10-15 دقيقة قيادة. مرشدك يطلعك على أبرز معروضات المتحف.",
        insiderTip: "This tour is best done on your first or second day in Luxor — the context it provides for the temple sites transforms how you see everything else.",
        insiderTipAr: "هذه الجولة أفضل في أول أو ثاني يوم في الأقصر — السياق الذي توفره يحوّل كيفية رؤيتك لكل شيء آخر.",
        physicalDifficulty: "easy",
        image: null,
        transport: { type: "Private air-conditioned vehicle", typeAr: "مركبة خاصة مكيفة", details: "Hotel to Luxor Museum, Corniche el-Nil", detailsAr: "من الفندق إلى متحف الأقصر، كورنيش النيل" },
        nearbyFood: null,
      },
      {
        step: 2,
        time: "09:15",
        duration: "120 minutes",
        type: "visit",
        title: "Luxor Museum",
        titleAr: "متحف الأقصر",
        description:
          "Enter one of Egypt's finest museums — thoughtfully designed with excellent lighting, bilingual labels, and a layout that tells a coherent story rather than simply displaying objects. The collection focuses exclusively on the Theban region and contains some of the most spectacular ancient Egyptian objects anywhere in the world. Your guide leads you through the key highlights: the Cache of Luxor (17 royal statues discovered in 1989 hidden beneath Luxor Temple's floor, including a stunning alabaster statue of Thutmose III and a painted sandstone head of Amenhotep III); the Tutankhamun section (a carefully selected group of golden objects and royal equipment including a gilded wooden bed, shabtis, and ceremonial weapons); the Wall of Akhenaten (reconstructed from thousands of small talatat blocks, showing the heretic pharaoh worshipping the sun disc Aten in his revolutionary new style); the Royal Mummies room (the mummies of Ahmose I — founder of the New Kingdom — and Ramses I, displayed in a respectfully lit environment); and a superb collection of New Kingdom jewelry, ushabti figurines, sacred objects, and daily life artifacts.",
        descriptionAr:
          "ادخل أحد أفضل متاحف مصر — مصمم بعناية مع إضاءة ممتازة وبطاقات ثنائية اللغة وتخطيط يروي قصة متماسكة. يركز على المنطقة الطيبية ويحتوي على بعض أكثر القطع المصرية القديمة روعة في العالم. يقودك مرشدك عبر: مخبأ الأقصر وقسم توت عنخ آمون وجدار أخناتون وغرفة المومياوات الملكية.",
        historicalContext: "The Luxor Museum was opened in 1975 and was specifically designed to display Theban artifacts in the context of their original site — unlike the Egyptian Museum in Cairo, which is essentially a storage facility. The 1989 discovery of 17 statues hidden beneath Luxor Temple's floor transformed the museum's collection overnight.",
        historicalContextAr: "افتُتح متحف الأقصر عام 1975 وصُمِّم خصيصاً لعرض القطع الطيبية في سياق موقعها الأصلي. اكتشاف 17 تمثالاً مخبّأ تحت أرضية معبد الأقصر عام 1989 حوّل مجموعة المتحف بين عشية وضحاها.",
        whatToExpect: "A 2-hour guided tour of a medium-sized museum. Uncrowded compared to Karnak or the Valley of the Kings. Fully air-conditioned. Photography is NOT permitted inside.",
        whatToExpectAr: "جولة مصحوبة لمدة ساعتين في متحف متوسط الحجم. غير مزدحم مقارنة بالكرنك أو وادي الملوك. مكيف بالكامل. التصوير غير مسموح في الداخل.",
        insiderTip: "Ask your guide to take you to the alabaster Thutmose III statue from the 1989 cache first — the quality of the carving and the preservation of this piece is so extraordinary that everything else in the museum will look impressive by comparison.",
        insiderTipAr: "اطلب من مرشدك اصطحابك أولاً إلى تمثال تحتمس الثالث الألباستري من مخبأ 1989 — جودة النحت والحفظ لهذه القطعة استثنائية لدرجة أن كل شيء آخر في المتحف سيبدو رائعاً بالمقارنة.",
        physicalDifficulty: "easy",
        image: "luxor-museum-hall.jpg",
        location: { name: "Luxor Museum, Corniche el-Nil", nameAr: "متحف الأقصر، كورنيش النيل", coordinates: { lat: 25.7076, lng: 32.6414 } },
        transport: null,
        nearbyFood: { name: "Luxor Museum café", nameAr: "كافيه متحف الأقصر", description: "Small café at the museum entrance with cold drinks and light snacks", descriptionAr: "كافيه صغير عند مدخل المتحف مع مشروبات باردة ووجبات خفيفة", priceRange: "$" },
      },
      {
        step: 3,
        time: "11:30",
        duration: "10 minutes",
        type: "transport",
        title: "Walk to Museum of Mummification",
        titleAr: "المشي إلى متحف التحنيط",
        description:
          "Walk 5 minutes south along the Corniche from the Luxor Museum to the Museum of Mummification, located near the entrance of Luxor Temple. A pleasant riverside walk between the two museums.",
        descriptionAr:
          "امشِ 5 دقائق جنوباً على الكورنيش من متحف الأقصر إلى متحف التحنيط، الواقع بالقرب من مدخل معبد الأقصر. نزهة جانب النهر ممتعة بين المتحفين.",
        historicalContext: null,
        whatToExpect: "A pleasant 5-minute walk along the Nile. The museum is clearly signposted.",
        whatToExpectAr: "نزهة ممتعة لمدة 5 دقائق على طول النيل. المتحف واضح اللافتات.",
        insiderTip: null,
        physicalDifficulty: "easy",
        image: null,
        transport: { type: "5-minute walk along Corniche", typeAr: "5 دقائق مشياً على الكورنيش", details: "Flat, shaded Nile Corniche promenade", detailsAr: "كورنيش النيل المستوي والمظلل" },
        nearbyFood: null,
      },
      {
        step: 4,
        time: "11:45",
        duration: "60 minutes",
        type: "visit",
        title: "Museum of Mummification",
        titleAr: "متحف التحنيط",
        description:
          "Enter the only museum in Egypt dedicated exclusively to the ancient art and science of mummification. Your guide walks you through the complete mummification process in clear stages — from the initial 70-day preparation to the final wrapping and placement of amulets. On display are genuine mummified humans, mummified animals (cats, crocodiles, fish, ibis birds, baboons, and a ram), and the actual tools used by ancient Egyptian embalmers: natron salt used to dry the body, canopic jars for storing the four major organs (liver, lungs, stomach, intestines), fine linen wrappings, wooden embalming beds, and the metal hooks used to extract the brain through the nasal passage. Your guide explains the deeply spiritual motivations behind mummification: the ancient Egyptian belief in the ka (vital essence or soul) which needed a preserved physical body to return to after its journeys in the afterlife, and the ba (personality soul) which flew between the world of the living and the tomb.",
        descriptionAr:
          "ادخل المتحف الوحيد في مصر المكرس حصرياً لفن وعلم التحنيط. يصطحبك مرشدك عبر عملية التحنيط الكاملة. معروضة مومياوات بشرية وحيوانية حقيقية والأدوات الفعلية: ملح النطرون والأواني الكانوبية ولف الكتان وأسرّة التحنيط الخشبية وخطاطيف الدماغ.",
        historicalContext: "The ancient Egyptians believed that the physical body was essential for the afterlife — without a preserved body, the soul could not be reborn. Mummification was therefore not just a practical preservation technique but a deeply religious act connecting the deceased to Osiris, god of the dead and resurrection. The practice continued for over 3,000 years, from the Old Kingdom until the Roman period.",
        historicalContextAr: "اعتقد المصريون القدماء أن الجسد المادي ضروري للحياة الآخرة — بدون جسد محفوظ لا يمكن للروح أن تُولد من جديد. لذا لم يكن التحنيط مجرد تقنية حفظ عملية بل عملاً دينياً عميقاً يربط المتوفى بأوزيريس. استمرت الممارسة أكثر من 3000 عام.",
        whatToExpect: "A small but dense museum that takes about 1 hour with a guide. Content involves human remains — parental discretion advised for young children. Fully air-conditioned. Photography rules vary — ask your guide.",
        whatToExpectAr: "متحف صغير لكن مكثف يستغرق نحو ساعة مع مرشد. المحتوى يتضمن رفات بشرية — يُنصح بتوجيه الوالدين للأطفال الصغار. مكيف بالكامل.",
        insiderTip: "Ask your guide specifically about the mummified animals — the Egyptians mummified millions of animals as religious offerings, creating entire 'animal mummy cemeteries.' The cat mummies here are particularly well-preserved and fascinating.",
        insiderTipAr: "اسأل مرشدك تحديداً عن الحيوانات المحنطة — حنّط المصريون ملايين الحيوانات كقرابين دينية. مومياوات القطط هنا محفوظة بشكل خاص ورائعة.",
        physicalDifficulty: "easy",
        image: "mummification-tools-display.jpg",
        location: { name: "Museum of Mummification, Corniche el-Nil", nameAr: "متحف التحنيط، كورنيش النيل", coordinates: { lat: 25.7008, lng: 32.6390 } },
        transport: null,
        nearbyFood: null,
      },
      {
        step: 5,
        time: "13:00",
        duration: "15 minutes",
        type: "transport",
        title: "Return Transfer to Hotel",
        titleAr: "العودة إلى الفندق",
        description: "Your guide and driver return you to your hotel. End of tour.",
        descriptionAr: "يعيدك مرشدك وسائقك إلى فندقك. نهاية الجولة.",
        historicalContext: null,
        whatToExpect: "Back at your hotel by approximately 13:15 — the whole morning free for other activities in the afternoon.",
        whatToExpectAr: "في فندقك بحلول الساعة 13:15 تقريباً — الصباح كله حر لأنشطة أخرى في فترة بعد الظهر.",
        insiderTip: "Book this tour before your West Bank and temple visits — the museum context transforms everything else you'll see in Luxor.",
        insiderTipAr: "احجز هذه الجولة قبل زياراتك للضفة الغربية والمعابد — سياق المتحف يحوّل كل شيء آخر ستراه في الأقصر.",
        physicalDifficulty: "easy",
        image: null,
        transport: { type: "Private air-conditioned vehicle", typeAr: "مركبة خاصة مكيفة", details: "Door-to-door return to hotel", detailsAr: "عودة من الباب إلى الباب إلى الفندق" },
        nearbyFood: { name: "Corniche restaurants", nameAr: "مطاعم الكورنيش", description: "Several excellent restaurants for lunch directly on the Corniche near Luxor Temple", descriptionAr: "عدة مطاعم ممتازة للغداء مباشرة على الكورنيش بجانب معبد الأقصر", priceRange: "$$" },
      },
    ],
    importantInfo: [
      "Highly recommended as a first activity in Luxor before visiting the temples",
      "Photography is NOT permitted inside the Luxor Museum",
      "Both museums are fully air-conditioned — a welcome relief on hot days",
      "Suitable for children but parental guidance advised for the mummification content",
      "Allow 3–4 hours total for both museums with a guide",
    ],
    importantInfoAr: [
      "يُنصح بشدة كأولى نشاطاتك في الأقصر قبل زيارة المعابد",
      "التصوير غير مسموح داخل متحف الأقصر",
      "كلا المتحفين مكيفان بالكامل — راحة كبيرة في الأيام الحارة",
      "مناسب للأطفال لكن يُنصح بتوجيه الوالدين لمحتوى التحنيط",
    ],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city",
      descriptionAr: "الاستقبال من الفندق في أي مكان في مدينة الأقصر",
    },
    accessibility: "Easy. Both museums are fully accessible with ramps and air conditioning. Flat floors throughout.",
    accessibilityAr: "سهل. كلا المتحفين يمكن الوصول إليهما بالكامل بالمنحدرات والتكييف. أرضيات مستوية في جميع أنحائهما.",
  },
 
  // ─────────────────────────────────────────────────────────────────────────
  // 14. Sunset Felucca Trip to Banana Island
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Sunset Felucca Trip to Banana Island",
    titleAr: "رحلة الفلوكة غروب الشمس إلى جزيرة الموز",
    slug: "sunset-felucca-trip-banana-island-luxor",
    description:
      "Unwind on a peaceful felucca sailing trip down the Nile at golden hour. Glide across the calm waters toward Banana Island, a lush island famous for its banana plantations, mango trees, and tropical greenery. Stroll through the island's fruit gardens before sailing back to Luxor as the sun dips below the horizon.",
    descriptionAr:
      "استرخِ في رحلة إبحار هادئة بالفلوكة على النيل في الساعة الذهبية. انزلق نحو جزيرة الموز، جزيرة خضراء مشهورة بمزارع الموز وأشجار المانجو.",
    category: "Boat tour",
    price: {
      original: 58.58,
      discounted: null,
      currency: "USD",
    },
    duration: "3 hours",
    language: ["English"],
    rating: { score: 10.0, reviews: 2 },
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
    gallery: [
      {
        image: "felucca-nile-luxor.jpg",
        caption: "Traditional felucca sailing on the Nile near Luxor",
        captionAr: "فلوكة تقليدية تبحر على النيل بالقرب من الأقصر",
        alt: "White-sailed wooden felucca gliding across the calm Nile with West Bank visible",
        altAr: "فلوكة خشبية بشراع أبيض تنزلق عبر النيل الهادئ مع الضفة الغربية مرئية",
      },
      {
        image: "banana-island-plantation.jpg",
        caption: "Banana palms and tropical fruit trees on Banana Island",
        captionAr: "نخيل الموز وأشجار الفاكهة الاستوائية في جزيرة الموز",
        alt: "Dense banana palm plantation on Banana Island with large green leaves",
        altAr: "مزرعة كثيفة من نخيل الموز في جزيرة الموز مع أوراق خضراء كبيرة",
      },
      {
        image: "nile-sunset-west-bank.jpg",
        caption: "Sunset over the West Bank hills seen from the Nile",
        captionAr: "غروب الشمس فوق تلال الضفة الغربية كما يُرى من النيل",
        alt: "Orange and pink sunset sky over the West Bank desert hills reflected in the Nile",
        altAr: "سماء غروب برتقالية وزهرية فوق تلال الضفة الغربية الصحراوية منعكسة في النيل",
      },
      {
        image: "felucca-deck-view.jpg",
        caption: "The view from the felucca deck — Luxor skyline and minarets",
        captionAr: "المنظر من سطح الفلوكة — أفق الأقصر والمآذن",
        alt: "View from a felucca sailing toward Banana Island with Luxor city visible",
        altAr: "منظر من فلوكة تبحر نحو جزيرة الموز مع مدينة الأقصر مرئية",
      },
      {
        image: "banana-island-walk.jpg",
        caption: "Walking through the fruit gardens of Banana Island",
        captionAr: "المشي عبر حدائق الفاكهة في جزيرة الموز",
        alt: "Narrow path through dense tropical fruit trees on Banana Island",
        altAr: "ممر ضيق عبر أشجار الفاكهة الاستوائية الكثيفة في جزيرة الموز",
      },
    ],
    itinerary: [
      {
        step: 1,
        time: "16:00",
        duration: "10 minutes",
        type: "transport",
        title: "Board Felucca at Luxor Dock",
        titleAr: "الصعود إلى الفلوكة في رصيف الأقصر",
        description:
          "Meet your guide and captain at the Nile felucca dock in central Luxor, near the Mercure Hotel on the Corniche. Board your traditional wooden sailing felucca — one of the oldest watercraft designs in the world, in continuous use on the Nile for thousands of years. Your captain prepares the lateen sail while you settle onto the cushioned seating.",
        descriptionAr:
          "التقِ بمرشدك وربانك عند رصيف الفلوكة النيلية في وسط الأقصر، بالقرب من فندق ميركيور على الكورنيش. اصعد على متن فلوكتك الشراعية الخشبية التقليدية.",
        historicalContext: "The felucca is one of the oldest boat designs still in active use in the world. Depictions of almost identical lateen-rigged boats appear in ancient Egyptian artwork dating back to 3000 BC. The Nile felucca has barely changed in design in 5,000 years.",
        historicalContextAr: "الفلوكة من أقدم تصاميم القوارب لا تزال قيد الاستخدام في العالم. تظهر صور قوارب شراعية شبه متطابقة في الفن المصري القديم التي يعود تاريخها إلى 3000 قبل الميلاد.",
        whatToExpect: "The dock is busy with felucca captains — your guide takes you directly to your assigned boat. Boarding involves stepping from the dock onto a low wooden deck (~30cm step).",
        whatToExpectAr: "الرصيف مزدحم بربابنة الفلوك — مرشدك يأخذك مباشرة إلى قاربك المخصص. الصعود يتضمن الخطو من الرصيف إلى سطح خشبي منخفض (~30 سم).",
        insiderTip: "The felucca dock is near the Mercure Hotel — if you tell any taxi or tuk-tuk driver 'felucca dock Mercure' they'll know exactly where to take you.",
        insiderTipAr: "رصيف الفلوكة بالقرب من فندق ميركيور — إذا أخبرت أي سائق سيارة أجرة أو توك توك 'رصيف فلوكة ميركيور' سيعرف بالضبط أين يأخذك.",
        physicalDifficulty: "easy",
        image: "felucca-boarding.jpg",
        location: { name: "Nile felucca dock, Corniche el-Nil (near Mercure Hotel), Luxor", nameAr: "رصيف فلوكة النيل، كورنيش النيل (بجوار فندق ميركيور)، الأقصر" },
        transport: { type: "Self-arranged to dock, then felucca from dock", typeAr: "توجه بنفسك إلى الرصيف، ثم فلوكة من الرصيف", details: "Hotel pickup not included — make own way to dock", detailsAr: "الاستقبال من الفندق غير مشمول — توجه بنفسك إلى الرصيف" },
        nearbyFood: null,
      },
      {
        step: 2,
        time: "16:15",
        duration: "45 minutes",
        type: "activity",
        title: "Sailing North on the Nile — Golden Hour",
        titleAr: "الإبحار شمالاً على النيل — الساعة الذهبية",
        description:
          "The captain hoists the sail and you cast off from the dock, heading north along the Nile in the late afternoon light. This is the most beautiful time of day on the river — the low sun turns the water from silver to gold, the West Bank mountains are bathed in warm orange light, and the palm trees on both banks cast long shadows across the fields. The felucca moves using nothing but the wind — no engine, no noise, just the sound of the sail filling with air and the water parting at the bow. Your guide points out landmarks on both banks and explains the significance of the East Bank/West Bank division that has defined life along the Nile for 5,000 years.",
        descriptionAr:
          "يرفع الربان الشراع وتنطلق من الرصيف شمالاً على النيل في ضوء أواخر العصر. هذا أجمل وقت من اليوم على النهر — الشمس المنخفضة تحوّل الماء من الفضي إلى الذهبي. الفلوكة تتحرك بالريح وحدها — لا محرك ولا ضوضاء.",
        historicalContext: "The Nile between Luxor and Banana Island passes through one of the most historically significant stretches of river in the world — the same water that ancient Egyptians used to float their obelisks downriver from the Aswan granite quarries, transport supplies to build the temples, and carry the sacred barques of the gods during religious festivals.",
        historicalContextAr: "النيل بين الأقصر وجزيرة الموز يمر عبر أحد أكثر امتدادات النهر أهمية تاريخية في العالم — نفس الماء الذي استخدمه المصريون القدماء لطفو مسلاتهم وتنقل المركب المقدسة.",
        whatToExpect: "Pure relaxation. Lie or sit on the cushioned deck, let the river breeze wash over you, and watch the landscape pass. Your guide is available for conversation but won't pressure you to engage — this is intentionally a peaceful experience.",
        whatToExpectAr: "استرخاء محض. استلقِ أو اجلس على السطح المبطّن، ودع نسيم النهر يغمرك، وشاهد المنظر يمر. مرشدك متاح للمحادثة لكنه لن يضغط عليك.",
        insiderTip: "Put your phone down for 10 minutes and just watch the river. The felucca's motion, the sound of the water, and the landscape are genuinely therapeutic — this is the calmest hour you'll experience in all of Luxor.",
        insiderTipAr: "ضع هاتفك جانباً لمدة 10 دقائق وشاهد النهر فقط. حركة الفلوكة وصوت الماء والمنظر علاجية حقاً — هذه أهدأ ساعة ستختبرها في الأقصر كله.",
        physicalDifficulty: "easy",
        image: "felucca-golden-hour-nile.jpg",
        location: { name: "Nile River north of Luxor", nameAr: "نهر النيل شمال الأقصر" },
        transport: null,
        nearbyFood: null,
      },
      {
        step: 3,
        time: "17:00",
        duration: "30 minutes",
        type: "visit",
        title: "Arrive at Banana Island",
        titleAr: "الوصول إلى جزيرة الموز",
        description:
          "Your captain moors the felucca at Banana Island — a small, working agricultural island approximately 8 kilometres north of central Luxor. Step ashore and enter a completely different world: a dense, cool, tropical garden of banana palms, mango trees, guava, papyrus reeds, sugar cane, and hibiscus. Your guide walks you through the garden paths, explaining the plants and the island's history as a working farm. In season (May–September), you can taste fresh mangoes directly from the tree — among the sweetest and most flavourful in Egypt. The contrast between the lush green island and the surrounding desert landscape is visually striking and completely peaceful.",
        descriptionAr:
          "يربط ربانك الفلوكة في جزيرة الموز — جزيرة زراعية عاملة صغيرة على بُعد نحو 8 كيلومترات شمال وسط الأقصر. انزل إلى الشاطئ وادخل عالماً مختلفاً تماماً: حديقة استوائية كثيفة وهادئة من نخيل الموز وأشجار المانجو والجوافة وقصب السكر.",
        historicalContext: "Banana Island (also known as El-Qurna Island) has been cultivated for centuries by Nile farmers who used the island's natural protection from annual floods to grow crops that would otherwise be washed away. The island's agricultural tradition represents one of the oldest continuously practiced farming methods in Egypt.",
        historicalContextAr: "زُرعت جزيرة الموز (المعروفة أيضاً بجزيرة القرنة) من قِبَل مزارعي النيل لقرون استخدموا الحماية الطبيعية للجزيرة من الفيضانات السنوية لزراعة المحاصيل.",
        whatToExpect: "30 minutes walking through the island gardens on well-maintained paths. The island is small enough to explore fully. Very peaceful — usually only a handful of visitors at any time.",
        whatToExpectAr: "30 دقيقة مشياً عبر حدائق الجزيرة على ممرات مصانة جيداً. الجزيرة صغيرة بما يكفي لاستكشافها بالكامل. هادئة جداً.",
        insiderTip: "Ask your guide to arrange a fresh mango or banana tasting from the farm — often possible for a small extra payment to the island farmers, and the quality of the fruit grown here is exceptional.",
        insiderTipAr: "اطلب من مرشدك ترتيب تذوق مانجو أو موز طازج من المزرعة — غالباً ممكن مقابل مبلغ إضافي صغير لمزارعي الجزيرة، وجودة الفاكهة المزروعة هنا استثنائية.",
        physicalDifficulty: "easy",
        image: "banana-island-green.jpg",
        location: { name: "Banana Island (El-Qurna Island), Nile north of Luxor", nameAr: "جزيرة الموز (جزيرة القرنة)، النيل شمال الأقصر" },
        transport: null,
        nearbyFood: { name: "Banana Island farm — fresh fruit", nameAr: "مزرعة جزيرة الموز — فاكهة طازجة", description: "Fresh bananas and mangoes sometimes available for tasting directly from the farm — ask your guide", descriptionAr: "موز ومانجو طازج متاح أحياناً للتذوق مباشرة من المزرعة — اسأل مرشدك", priceRange: "$" },
      },
      {
        step: 4,
        time: "17:30",
        duration: "45 minutes",
        type: "activity",
        title: "Return Sail — Sunset on the Nile",
        titleAr: "رحلة العودة — غروب الشمس على النيل",
        description:
          "Re-board the felucca for the return sail south to Luxor, perfectly timed to coincide with the sunset. As the sun descends toward the West Bank hills, the sky transforms through shades of orange, pink, gold, and deep purple — reflected on the surface of the Nile in a constantly shifting mirror of colour. The desert mountains of the West Bank glow amber, the silhouettes of palm trees emerge against the burning sky, and the city of Luxor with its minarets and temple pylons becomes visible ahead. Your captain steers silently, using only the wind. The only sounds are the water against the hull and, if the timing is right, the call to prayer drifting across the river from the city — one of the most quietly moving moments available anywhere in Egypt.",
        descriptionAr:
          "ارقَ على متن الفلوكة للعودة جنوباً إلى الأقصر، متزامناً تماماً مع غروب الشمس. مع انحدار الشمس نحو تلال الضفة الغربية، تتحول السماء عبر درجات من البرتقالي والوردي والذهبي والبنفسجي الغامق — منعكسة على سطح النيل في مرآة متغيرة باستمرار من الألوان.",
        historicalContext: "The sunset over the West Bank of Luxor has been one of the most celebrated natural spectacles in Egypt since antiquity. Ancient Egyptian priests associated the setting sun with Osiris entering the underworld, and the West Bank itself was considered the domain of the dead precisely because it was where the sun disappeared each evening.",
        historicalContextAr: "ظل غروب الشمس فوق الضفة الغربية للأقصر من أكثر المناظر الطبيعية احتفاءً في مصر منذ العصور القديمة. ربط الكهنة المصريون القدماء غروب الشمس بدخول أوزيريس إلى العالم السفلي.",
        whatToExpect: "The most beautiful 45 minutes of the entire Luxor experience for many visitors. The light changes every 2–3 minutes — keep your camera or phone at the ready. The sail back is slightly faster than the outward journey as the wind direction often helps.",
        whatToExpectAr: "أجمل 45 دقيقة في تجربة الأقصر كلها لكثير من الزوار. الضوء يتغير كل 2-3 دقائق. احتفظ بكاميرتك في متناول يدك.",
        insiderTip: "The best photographs on the return sail are taken looking west toward the setting sun with a felucca's sail silhouetted against the sky — ask your guide to help you frame this shot from the right position on the boat.",
        insiderTipAr: "أفضل صور في رحلة العودة تُلتقط نظراً غرباً نحو الشمس الغاربة مع شراع الفلوكة في ظل أمام السماء — اطلب من مرشدك مساعدتك في تأطير هذه اللقطة.",
        physicalDifficulty: "easy",
        image: "felucca-sunset-return.jpg",
        location: { name: "Nile River south toward Luxor", nameAr: "نهر النيل جنوباً نحو الأقصر" },
        transport: null,
        nearbyFood: null,
      },
      {
        step: 5,
        time: "18:30",
        duration: null,
        type: "transport",
        title: "Return to Luxor Dock",
        titleAr: "العودة إلى رصيف الأقصر",
        description:
          "The felucca returns to the dock in central Luxor as dusk settles over the city. The lights on the Corniche and the illuminated entrance of Luxor Temple come on as you moor. End of tour.",
        descriptionAr:
          "تعود الفلوكة إلى الرصيف في وسط الأقصر مع حلول الغسق. أضواء الكورنيش ومدخل معبد الأقصر المضاء تُشعل بينما ترسو. نهاية الجولة.",
        historicalContext: null,
        whatToExpect: "Back at the dock by approximately 18:30–19:00. Luxor Temple is a 2-minute walk from the dock if you want to enter for the evening illumination.",
        whatToExpectAr: "في الرصيف بحلول الساعة 18:30-19:00 تقريباً. معبد الأقصر على بُعد دقيقتين مشياً من الرصيف.",
        insiderTip: "Walk directly to Luxor Temple from the dock after the felucca trip — it's illuminated at night and the combination of a peaceful sunset on the water followed by the floodlit temple is the perfect Luxor evening.",
        insiderTipAr: "امشِ مباشرة إلى معبد الأقصر من الرصيف بعد رحلة الفلوكة — إنه مضاء ليلاً ومزيج الغروب الهادئ على الماء يليه المعبد المضاء هو المساء المثالي في الأقصر.",
        physicalDifficulty: "easy",
        image: null,
        location: { name: "Nile felucca dock, Corniche el-Nil, central Luxor", nameAr: "رصيف فلوكة النيل، كورنيش النيل، وسط الأقصر" },
        transport: null,
        nearbyFood: { name: "Corniche restaurants", nameAr: "مطاعم الكورنيش", description: "Excellent dinner options 2 minutes from the dock on the Corniche, many with Nile views", descriptionAr: "خيارات عشاء ممتازة على بُعد دقيقتين من الرصيف على الكورنيش، كثير منها مع مناظر نيلية", priceRange: "$$" },
      },
    ],
    importantInfo: [
      "Hotel pickup is NOT included — make your own way to the felucca dock near the Mercure Hotel",
      "This is a sailing trip using wind power — journey times may vary slightly",
      "The felucca is open-air — bring a light layer for the evening breeze",
      "Best timed to arrive at the dock at 16:00 for the optimal sunset return",
      "The experience is intentionally slow and peaceful — not suitable for those wanting an active excursion",
    ],
    importantInfoAr: [
      "الاستقبال من الفندق غير مشمول — توجه بنفسك إلى رصيف الفلوكة بالقرب من فندق ميركيور",
      "هذه رحلة إبحار بقوة الريح — قد تتفاوت أوقات الرحلة قليلاً",
      "الفلوكة في الهواء الطلق — أحضر طبقة خفيفة لنسيم المساء",
      "أفضل وقت الوصول إلى الرصيف الساعة 16:00 لغروب الشمس المثالي في العودة",
    ],
    meetingPoint: {
      description: "Nile felucca dock, Corniche el-Nil, central Luxor — near the Mercure Hotel. Look for your guide at the dock.",
      descriptionAr: "رصيف فلوكة النيل، كورنيش النيل، وسط الأقصر — بجوار فندق ميركيور. ابحث عن مرشدك في الرصيف.",
    },
    accessibility: "Easy. Boarding requires stepping from the dock onto a low wooden deck (~30cm). Seated experience throughout. Not suitable for wheelchair users.",
    accessibilityAr: "سهل. الصعود يتطلب الخطو من الرصيف إلى سطح خشبي منخفض (~30 سم). تجربة جلوس طوال الوقت. غير مناسب لمستخدمي كراسي العجلات.",
  },
];

export { cityData, toursData };