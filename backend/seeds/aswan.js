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
    minAge: 5,
    maxGroupSize: 40,
    availableTimes: ["08:00"],
    meetingPoint: {
      en: "Your hotel lobby in Aswan. The guide will meet you at the agreed time for transfer to the cruise ship.",
      ar: "بهو فندقك في أسوان. سيلتقي بك المرشد في الوقت المتفق عليه للانتقال إلى السفينة.",
    },
    accessibility: {
      en: "This tour involves walking on uneven ancient surfaces and climbing stairs aboard the ship. Not recommended for guests with severe mobility issues.",
      ar: "تتضمن هذه الجولة المشي على أسطح قديمة غير مستوية وصعود الدرج على متن السفينة. غير مناسبة للأشخاص الذين يعانون من صعوبات حركة شديدة.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun cream and hat", "Light layers for evenings on the Nile", "Camera", "Personal medications"],
      ar: ["حذاء مريح للمشي", "كريم واقٍ من الشمس وقبعة", "ملابس خفيفة للأمسيات على النيل", "كاميرا", "أدوية شخصية"],
    },
    importantInfo: {
      en: [
        "Check-in to the cruise ship is on Day 1 after arrival to Aswan.",
        "All cabins are double-occupancy; single supplement available on request.",
        "Meals onboard are full board (breakfast, lunch, and dinner).",
        "Tipping for the crew and guide is customary but not included.",
        "Passport copies are required for all passengers at check-in.",
      ],
      ar: [
        "تسجيل الوصول إلى السفينة يكون في اليوم الأول بعد الوصول إلى أسوان.",
        "جميع الكبائن مزدوجة؛ تتوفر إضافة فردية عند الطلب.",
        "الوجبات على متن السفينة كاملة (إفطار وغداء وعشاء).",
        "البقشيش للطاقم والمرشد متعارف عليه لكنه غير مدرج في السعر.",
        "تُطلب نسخ جوازات السفر من جميع الركاب عند تسجيل الوصول.",
      ],
    },
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
    itinerary: {
      en: [
        {
          day: 1,
          title: "Arrival in Aswan & Embarkation",
          description:
            "Your Nile adventure begins today in the golden city of Aswan. Your guide will meet you at your hotel in the morning and transfer you to the cruise ship, where you will check in and settle into your cabin. After a welcome lunch onboard, the afternoon is spent visiting the majestic Temple of Philae, dedicated to the goddess Isis and perched on an island in the middle of the Nile — accessible by a short motorboat ride. The temple's carved reliefs and towering columns are among the finest surviving examples of ancient Egyptian art. Return to the ship for dinner as it moors at the Aswan dock, with the first evening free to relax on deck and take in the desert sunset over the Nile.",
          steps: [
            { time: "08:00", description: "Hotel pickup by your guide in Aswan." },
            { time: "09:00", description: "Transfer to the Nile cruise ship and check-in to your cabin." },
            { time: "10:00", description: "Welcome briefing by the cruise director; meet your guide and fellow passengers." },
            { time: "13:00", description: "Welcome lunch served onboard." },
            { time: "14:30", description: "Motorboat ride to Philae Island." },
            { time: "15:00", description: "Guided tour of the Temple of Isis at Philae — explore the hypostyle hall, the birth house, and the reliefs of Isis and Osiris." },
            { time: "17:00", description: "Return by motorboat to the cruise ship." },
            { time: "19:00", description: "Dinner onboard. Evening at leisure on the deck." },
          ],
        },
        {
          day: 2,
          title: "Kom Ombo & Edfu — Temples of the Gods",
          description:
            "Rise early as the ship sets sail northward along the Nile. The morning brings you to Kom Ombo, where one of Egypt's most unusual temples stands on a hilltop overlooking the river. The Temple of Kom Ombo is unique in Egypt — a perfectly symmetrical double temple dedicated to two gods: Sobek, the crocodile god of fertility, and Haroeris, the elder form of Horus. Its corridors hold some of ancient Egypt's most intriguing medical instruments, carved in stone. The adjacent Crocodile Museum displays dozens of genuine ancient mummified crocodiles. After lunch onboard, the ship continues to Edfu — home to the magnificent Temple of Horus, the best-preserved ancient temple in all of Egypt. Entered through enormous pylon gates adorned with battle scenes, the inner sanctuary still holds the ancient granite shrine where the statue of Horus once resided.",
          steps: [
            { time: "06:00", description: "Ship departs Aswan and sails north along the Nile." },
            { time: "07:00", description: "Breakfast served onboard while the desert landscapes drift past." },
            { time: "09:00", description: "Arrival at Kom Ombo. Horse-drawn carriage or short walk to the temple." },
            { time: "09:30", description: "Guided tour of the Temple of Kom Ombo — explore the twin sanctuaries, the medical instrument carvings, and the Crocodile Museum." },
            { time: "11:30", description: "Return to the ship. Sail onward to Edfu." },
            { time: "13:00", description: "Lunch served onboard." },
            { time: "15:30", description: "Arrival at Edfu. Horse-drawn carriage to the temple entrance." },
            { time: "16:00", description: "Guided tour of the Temple of Horus at Edfu — walk through the towering pylons, the hypostyle hall, the Festival Hall, and the inner sanctuary." },
            { time: "18:00", description: "Return to the ship by carriage." },
            { time: "19:30", description: "Dinner onboard. Optional Egyptian Galabiya party on deck." },
          ],
        },
        {
          day: 3,
          title: "Luxor — Valley of the Kings & the West Bank",
          description:
            "The ship docks in Luxor overnight and the day begins with one of the most anticipated experiences in all of Egypt — a visit to the Valley of the Kings on the West Bank of the Nile. Hidden in the dry hills across the river from ancient Thebes, this royal burial ground holds the elaborately decorated tombs of pharaohs who ruled Egypt over three millennia ago. Your guide will bring to life the stories behind the painted walls, the Book of the Dead spells, and the astonishing belief systems of the ancient Egyptians. Nearby, the vast mortuary complex of Deir el-Bahari is home to the spectacular Mortuary Temple of Hatshepsut, built into the dramatic cliffs overlooking the valley — a tribute to one of Egypt's most powerful and enigmatic rulers.",
          steps: [
            { time: "07:00", description: "Breakfast onboard as the ship arrives in Luxor." },
            { time: "08:30", description: "Disembark and cross the Nile to the West Bank." },
            { time: "09:00", description: "Arrive at the Valley of the Kings. Visit three royal tombs (included in entrance fee; tomb of Tutankhamun at extra cost)." },
            { time: "11:00", description: "Walk to or ride to the Mortuary Temple of Hatshepsut at Deir el-Bahari." },
            { time: "11:30", description: "Guided tour of Hatshepsut's temple — explore the colonnaded terraces, the painted reliefs, and the sacred inner sanctum." },
            { time: "13:00", description: "Return to the ship by road. Lunch served onboard." },
            { time: "15:00", description: "Optional visit to the Colossi of Memnon (two enormous ancient statues beside the road — a quick stop)." },
            { time: "16:30", description: "Return to the ship. Free time to rest or explore Luxor's corniche independently." },
            { time: "19:30", description: "Final dinner onboard." },
          ],
        },
        {
          day: 4,
          title: "Karnak Temple & Departure from Luxor",
          description:
            "Your final morning is devoted to the most extraordinary temple complex ever built — Karnak. A city of temples rather than a single monument, Karnak was added to by generation after generation of pharaohs over nearly 2,000 years, resulting in a vast labyrinth of pylons, courts, obelisks, and the legendary Hypostyle Hall — a forest of 134 towering columns, each decorated from floor to top with intricate hieroglyphics and painted reliefs. Your guide will walk you through the Avenue of Sphinxes, the Sacred Lake, and the inner sanctuaries, piecing together the extraordinary evolution of one of the ancient world's most sacred places. After a final lunch onboard, you will disembark and be transferred to your hotel or the Luxor train station.",
          steps: [
            { time: "07:00", description: "Breakfast onboard." },
            { time: "08:30", description: "Disembark and transfer to Karnak Temple Complex on the East Bank." },
            { time: "09:00", description: "Guided tour of Karnak — walk through the Avenue of Ram-headed Sphinxes, the Great Hypostyle Hall, the Festival Temple of Thutmose III, the Sacred Lake, and the towering obelisks of Hatshepsut and Thutmose I." },
            { time: "11:30", description: "Return to the ship." },
            { time: "13:00", description: "Final lunch onboard." },
            { time: "14:30", description: "Check out of cabins." },
            { time: "15:00", description: "Transfer to your Luxor hotel or Luxor train station. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "الوصول إلى أسوان والصعود إلى السفينة",
          description:
            "تبدأ مغامرتك النيلية اليوم في مدينة أسوان الذهبية. سيستقبلك مرشدك في فندقك صباحاً وينقلك إلى السفينة النيلية للتسجيل والاستقرار في كبينتك. بعد غداء الترحيب على متن السفينة، يُقضى بعد الظهر في زيارة معبد فيلة العظيم المكرس للإلهة إيزيس والجالس على جزيرة وسط النيل، ويمكن الوصول إليه بعبّارة صغيرة. تُعد نقوش المعبد البارزة وأعمدته الشامخة من أروع الأمثلة الباقية على الفن المصري القديم. تعود السفينة لترسو في أسوان مع حلول المساء، والمساء الأول متاح للاسترخاء على السطح ومشاهدة غروب الشمس الصحراوي فوق النيل.",
          steps: [
            { time: "08:00", description: "الاستقبال من الفندق بواسطة مرشدك في أسوان." },
            { time: "09:00", description: "الانتقال إلى السفينة النيلية وتسجيل الوصول إلى كبينتك." },
            { time: "10:00", description: "جلسة ترحيبية مع مدير الرحلة؛ التعرف على مرشدك والمسافرين الآخرين." },
            { time: "13:00", description: "غداء الترحيب على متن السفينة." },
            { time: "14:30", description: "جولة بالقارب الصغير إلى جزيرة فيلة." },
            { time: "15:00", description: "جولة مصحوبة بمرشد في معبد إيزيس بفيلة — استكشاف القاعة ذات الأعمدة وبيت الميلاد ونقوش إيزيس وأوزيريس." },
            { time: "17:00", description: "العودة بالقارب إلى السفينة." },
            { time: "19:00", description: "العشاء على متن السفينة. مساء حر على السطح." },
          ],
        },
        {
          day: 2,
          title: "كوم أمبو وإدفو — معابد الآلهة",
          description:
            "استيقظ مبكراً مع انطلاق السفينة شمالاً على طول النيل. يأخذك الصباح إلى كوم أمبو حيث يقف أحد أكثر المعابد فرادة في مصر على تلة تطل على النهر. معبد كوم أمبو فريد من نوعه في مصر — معبد مزدوج متناظر تماماً مكرس لإلهين: سوبك إله التماسيح والخصوبة، وهارويريس الشكل الأكبر لحورس. تضم ممراته بعضاً من أكثر الأدوات الطبية المصرية القديمة إثارة للفضول، منقوشة في الحجر. ويعرض متحف التماسيح المجاور عشرات التماسيح المحنطة الأثرية الحقيقية. بعد الغداء على متن السفينة تواصل طريقها إلى إدفو — موطن معبد حورس الرائع، وهو أفضل المعابد القديمة المحفوظة في مصر كلها.",
          steps: [
            { time: "06:00", description: "تغادر السفينة أسوان وتبحر شمالاً على طول النيل." },
            { time: "07:00", description: "الإفطار على متن السفينة مع تدفق المناظر الصحراوية." },
            { time: "09:00", description: "الوصول إلى كوم أمبو. عربة تجرها خيول أو مشية قصيرة إلى المعبد." },
            { time: "09:30", description: "جولة مصحوبة بمرشد في معبد كوم أمبو — استكشاف الحرمين المزدوجين ونقوش الأدوات الطبية ومتحف التماسيح." },
            { time: "11:30", description: "العودة إلى السفينة. الإبحار نحو إدفو." },
            { time: "13:00", description: "الغداء على متن السفينة." },
            { time: "15:30", description: "الوصول إلى إدفو. عربة تجرها خيول إلى مدخل المعبد." },
            { time: "16:00", description: "جولة مصحوبة بمرشد في معبد حورس بإدفو — المشي عبر الأبراج الشامخة وقاعة الأعمدة وقاعة الأعياد والحرم الداخلي." },
            { time: "18:00", description: "العودة إلى السفينة بالعربة." },
            { time: "19:30", description: "العشاء على متن السفينة. حفلة الجلابية المصرية الاختيارية على السطح." },
          ],
        },
        {
          day: 3,
          title: "الأقصر — وادي الملوك والضفة الغربية",
          description:
            "ترسو السفينة في الأقصر طوال الليل ويبدأ اليوم بواحدة من أكثر التجارب ترقباً في مصر كلها — زيارة وادي الملوك على الضفة الغربية للنيل. تخفي هذه المنطقة الجبلية الجافة في الجهة المقابلة لطيبة القديمة مقابر مزينة بشكل متقن لفراعنة حكموا مصر قبل أكثر من ثلاثة آلاف عام. سيحيي مرشدك قصص الجدران المرسومة وتعاويذ كتاب الموتى وأنظمة المعتقدات المذهلة للمصريين القدماء. وبالقرب يضم مجمع الدير البحري المحفوظ المعبد الجنائزي الرائع لحتشبسوت، المنحوت في الجروف الرائعة المشرفة على الوادي.",
          steps: [
            { time: "07:00", description: "الإفطار على متن السفينة مع وصولها إلى الأقصر." },
            { time: "08:30", description: "النزول من السفينة والعبور إلى الضفة الغربية للنيل." },
            { time: "09:00", description: "الوصول إلى وادي الملوك. زيارة ثلاثة مقابر ملكية (مدرجة في رسم الدخول؛ مقبرة توتنخامون بتكلفة إضافية)." },
            { time: "11:00", description: "المشي أو الانتقال إلى معبد حتشبسوت الجنائزي في الدير البحري." },
            { time: "11:30", description: "جولة مصحوبة بمرشد في معبد حتشبسوت — استكشاف الأروقة المعمدة والنقوش المطلية والحرم الداخلي المقدس." },
            { time: "13:00", description: "العودة إلى السفينة. الغداء على متن السفينة." },
            { time: "15:00", description: "زيارة اختيارية لتمثالي ممنون (تمثالان ضخمان قديمان بجانب الطريق — توقف سريع)." },
            { time: "16:30", description: "العودة إلى السفينة. وقت حر للراحة أو استكشاف كورنيش الأقصر بشكل مستقل." },
            { time: "19:30", description: "العشاء الأخير على متن السفينة." },
          ],
        },
        {
          day: 4,
          title: "معبد الكرنك والمغادرة من الأقصر",
          description:
            "يُكرّس صباحك الأخير لأعظم مجمع معابد بُني على الإطلاق — الكرنك. مدينة من المعابد لا معبد واحد، أضاف إلى الكرنك جيل بعد جيل من الفراعنة على مدى ما يقرب من ألفي عام، مما أفرز متاهة شاسعة من الأبراج والساحات والمسلات وقاعة الأعمدة الأسطورية — غابة من 134 عموداً شامخاً، مزيّن كل منها من الأرض إلى القمة بهيروغليفية معقدة ونقوش ملونة. سيقودك مرشدك عبر طريق أبي الهول وبحيرة السحاب والأحرام الداخلية ليرسم لك التطور الاستثنائي لأحد أقدس الأماكن في العالم القديم.",
          steps: [
            { time: "07:00", description: "الإفطار على متن السفينة." },
            { time: "08:30", description: "النزول من السفينة والانتقال إلى مجمع معابد الكرنك على الضفة الشرقية." },
            { time: "09:00", description: "جولة مصحوبة بمرشد في الكرنك — المشي عبر طريق أبو الهول ذي الرأس الكبشي، وقاعة الأعمدة الكبرى، ومعبد تحتمس الثالث، وبحيرة السحاب، ومسلات حتشبسوت وتحتمس الأول الشامخة." },
            { time: "11:30", description: "العودة إلى السفينة." },
            { time: "13:00", description: "الغداء الأخير على متن السفينة." },
            { time: "14:30", description: "تسجيل المغادرة من الكبائن." },
            { time: "15:00", description: "الانتقال إلى فندقك في الأقصر أو محطة قطار الأقصر. نهاية الجولة." },
          ],
        },
      ],
    },
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
    minAge: 5,
    maxGroupSize: 15,
    availableTimes: ["08:00", "09:00"],
    meetingPoint: {
      en: "Your hotel lobby in Aswan. The guide will pick you up and take you directly to the first stop.",
      ar: "بهو فندقك في أسوان. سيستقبلك المرشد وينقلك مباشرة إلى المحطة الأولى.",
    },
    accessibility: {
      en: "The Unfinished Obelisk site involves walking on uneven ground. Philae Temple is accessible by boat and has steps. Not suitable for wheelchairs.",
      ar: "يتضمن موقع المسلة الناقصة المشي على أرض غير مستوية. يُوصل إلى معبد فيلة بالقارب وبه درج. غير مناسب لكراسي الحركة.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun hat and sunscreen", "Water bottle", "Camera", "Light jacket for the boat ride"],
      ar: ["حذاء مريح للمشي", "قبعة للشمس وكريم واقٍ", "زجاجة ماء", "كاميرا", "جاكيت خفيف لرحلة القارب"],
    },
    importantInfo: {
      en: [
        "Hotel pickup is included within central Aswan. Hotels outside the city center may incur an extra fee.",
        "The boat to Philae Island is shared with other visitors; a private boat can be arranged at extra cost.",
        "Entrance fees to all three sites are included in the tour price.",
        "Wear comfortable, breathable clothing — temperatures in Aswan regularly exceed 35°C.",
      ],
      ar: [
        "الاستقبال من الفندق مشمول في وسط أسوان. قد تترتب رسوم إضافية على الفنادق خارج وسط المدينة.",
        "القارب إلى جزيرة فيلة مشترك مع زوار آخرين؛ يمكن ترتيب قارب خاص بتكلفة إضافية.",
        "رسوم الدخول إلى المواقع الثلاثة مشمولة في سعر الجولة.",
        "ارتدِ ملابس مريحة وخفيفة — تتجاوز درجات الحرارة في أسوان 35 درجة مئوية بشكل منتظم.",
      ],
    },
    highlights: [
      "Visit the iconic Aswan High Dam",
      "See the ancient Unfinished Obelisk in its quarry",
      "Boat ride to Philae Island",
      "Explore the stunning Temple of Isis at Philae",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees", "Boat to Philae Island"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Aswan's Icons — Dam, Obelisk & Island Temple",
          description:
            "This half-day tour is one of the most rewarding ways to spend a morning in Aswan, packing in three entirely different layers of history into five focused hours. You begin at the southern edge of the city with a visit to the Aswan High Dam — a colossal feat of 20th-century engineering that transformed Egypt's relationship with the Nile forever. Standing on the dam, with the vast expanse of Lake Nasser stretching behind you and the rushing waters of the Nile below, the scale of this achievement becomes viscerally real. Your guide will explain the dam's construction during the Nasser era, its political significance, and its dramatic impact on both Egypt's modern economy and the ancient Nubian monuments that had to be relocated before the waters rose. From there, you head to one of Aswan's most unexpectedly fascinating sites: the ancient granite quarries where the Unfinished Obelisk lies exactly where it was abandoned over 3,500 years ago. Had it been completed and erected, this single piece of stone — still attached to the bedrock — would have been the largest obelisk in the ancient world. The final stop is Philae Island, reached by a short motorboat crossing, where the Temple of Isis stands in extraordinary beauty against the backdrop of the Nile. Originally located on a different island, the entire temple was dismantled block by block and reassembled here during the 1970s UNESCO rescue operation to save it from the rising waters of Lake Nasser.",
          steps: [
            { time: "08:00", description: "Hotel pickup from your Aswan accommodation." },
            { time: "08:30", description: "Arrive at the Aswan High Dam. Your guide explains the dam's history, construction, and its transformation of Egypt's Nile relationship. Walk across the dam with views of Lake Nasser on one side and the rushing Nile below." },
            { time: "09:30", description: "Drive to the ancient granite quarries south of Aswan." },
            { time: "10:00", description: "Visit the Unfinished Obelisk — stand beside this 42-meter giant still embedded in the bedrock. Your guide explains why it was abandoned (a crack appeared during carving) and what it reveals about ancient Egyptian quarrying and construction techniques." },
            { time: "11:00", description: "Drive to the Philae Island boat dock." },
            { time: "11:15", description: "Short motorboat crossing to Philae Island." },
            { time: "11:30", description: "Guided tour of the Temple of Isis — explore the great pylon gates, the colonnaded forecourt, the birth house (Mammisi), the hypostyle hall, and the inner sanctuary. Your guide brings to life the legend of Isis, Osiris, and Horus that inspired this temple's creation." },
            { time: "13:00", description: "Motorboat back to the dock. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "أيقونات أسوان — السد والمسلة ومعبد الجزيرة",
          description:
            "هذه الجولة نصف اليوم هي واحدة من أكثر الطرق مكافأةً لقضاء صباح في أسوان، إذ تجمع ثلاث طبقات مختلفة تماماً من التاريخ في خمس ساعات مركّزة. تبدأ عند الطرف الجنوبي من المدينة بزيارة السد العالي الأسواني — الإنجاز الهندسي الهائل للقرن العشرين الذي غيّر إلى الأبد علاقة مصر بالنيل. وأنت تقف فوق السد، مع الامتداد الشاسع لبحيرة ناصر خلفك ومياه النيل الدافقة تحتك، يصبح حجم هذا الإنجاز ملموساً بشكل حقيقي. سيشرح مرشدك بناء السد في عهد ناصر وأهميته السياسية وأثره الدرامي على الاقتصاد المصري الحديث والآثار النوبية القديمة التي كان لا بد من نقلها قبل ارتفاع المياه. ومن هناك تتجه إلى أحد أكثر مواقع أسوان إثارةً للدهشة بشكل غير متوقع: المحاجر الجرانيتية القديمة حيث تستلقي المسلة الناقصة في المكان ذاته الذي هُجرت فيه قبل أكثر من 3500 عام.",
          steps: [
            { time: "08:00", description: "الاستقبال من فندقك في أسوان." },
            { time: "08:30", description: "الوصول إلى السد العالي الأسواني. يشرح مرشدك تاريخ السد وبناءه وكيف غيّر علاقة مصر بالنيل. مشية فوق السد مع إطلالات على بحيرة ناصر من جهة والنيل الدافق من تحت." },
            { time: "09:30", description: "القيادة إلى المحاجر الجرانيتية القديمة جنوب أسوان." },
            { time: "10:00", description: "زيارة المسلة الناقصة — قف بجانب هذا العملاق البالغ 42 متراً ولا يزال منحوتاً في الصخر الأصلي. يشرح مرشدك سبب هجرها (ظهرت شقوق أثناء النحت) وما تكشفه عن تقنيات الحفر والبناء المصرية القديمة." },
            { time: "11:00", description: "القيادة إلى رصيف قوارب جزيرة فيلة." },
            { time: "11:15", description: "عبور قصير بالقارب الصغير إلى جزيرة فيلة." },
            { time: "11:30", description: "جولة مصحوبة بمرشد في معبد إيزيس — استكشاف بوابات الأبراج الكبرى والفناء المعمد وبيت الميلاد (المماسي) وقاعة الأعمدة والحرم الداخلي. يُحيي مرشدك أسطورة إيزيس وأوزيريس وحورس التي ألهمت إنشاء هذا المعبد." },
            { time: "13:00", description: "العودة بالقارب إلى الرصيف. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
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
    minAge: 5,
    maxGroupSize: 50,
    availableTimes: ["19:00", "20:00"],
    meetingPoint: {
      en: "Your hotel lobby in Aswan. The guide will collect you and transfer you to the Philae boat dock.",
      ar: "بهو فندقك في أسوان. سيأتي المرشد لاصطحابك ونقلك إلى رصيف قوارب فيلة.",
    },
    accessibility: {
      en: "The show is mostly seated on outdoor benches. Boat crossing required. Uneven surfaces on the island. Not recommended for guests with severe mobility issues.",
      ar: "العرض يُشاهد بشكل رئيسي جالساً على مقاعد خارجية. يلزم عبور القارب. توجد أسطح غير مستوية على الجزيرة. غير مناسب لمن يعانون من صعوبات حركة شديدة.",
    },
    whatToBring: {
      en: ["Light jacket or shawl (evenings on the Nile can be cool)", "Comfortable flat shoes", "Insect repellent", "Camera (no flash during the show)"],
      ar: ["جاكيت خفيف أو شال (قد تكون أمسيات النيل باردة)", "حذاء مسطح مريح", "طارد للحشرات", "كاميرا (ممنوع الفلاش أثناء العرض)"],
    },
    importantInfo: {
      en: [
        "The show is conducted in English on most nights; check availability for Arabic, French, or German sessions.",
        "The show takes place outdoors; bring a light layer as evenings by the Nile can be cool.",
        "Photography is permitted before and after the show but not during the narration.",
        "The show lasts approximately 45 minutes; total duration includes transfers and the boat crossing.",
      ],
      ar: [
        "يُقدَّم العرض باللغة الإنجليزية في معظم الليالي؛ تحقق من توافر جلسات عربية أو فرنسية أو ألمانية.",
        "يُقام العرض في الهواء الطلق؛ احضر طبقة خفيفة إذ قد تكون الأمسيات على ضفاف النيل باردة.",
        "التصوير مسموح به قبل العرض وبعده لكن ليس أثناء التعليق الصوتي.",
        "يستمر العرض نحو 45 دقيقة؛ المدة الإجمالية تشمل التنقلات وعبور القارب.",
      ],
    },
    highlights: [
      "Evening boat ride to Philae Island",
      "Spectacular sound and light show at the Temple of Isis",
      "Dramatic narration of the legend of Isis and Osiris",
      "Stunning night views of the illuminated temple",
      "Hotel pickup and drop-off included",
    ],
    includes: ["Show entrance", "Boat to Philae Island", "Hotel pickup and drop-off"],
    excludes: ["Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "An Evening of Myth & Light at Philae",
          description:
            "As the sun sets over the Sahara and the Nile takes on the deep blue of night, this evening experience offers one of the most atmospheric encounters with ancient Egypt imaginable. You'll be collected from your hotel as darkness begins to fall and driven to the boat dock at Shellal, just south of the Aswan High Dam. A short motorboat crossing brings you to Philae Island, which by night is transformed into something otherworldly — the temple's columns, pylons, and carved walls lit in shifting shades of amber, blue, and gold. You'll take your seat on the outdoor terraces and the show begins: a 45-minute narrated journey through the ancient legend of Isis and Osiris, projected through colored lights and a rich dramatic soundtrack. The story of the god Osiris's death, his resurrection by the devoted Isis, and the birth and triumph of their son Horus unfolds across the temple walls in a performance that is genuinely moving. After the show, you'll have a few quiet moments to linger on the island before the boat returns you to the dock and your guide transfers you back to your hotel.",
          steps: [
            { time: "19:00", description: "Hotel pickup from your Aswan accommodation as dusk settles." },
            { time: "19:30", description: "Arrive at the Shellal boat dock. Board the motorboat to Philae Island." },
            { time: "19:45", description: "Arrive on Philae Island. Walk through the illuminated temple grounds to your seats on the outdoor viewing terrace." },
            { time: "20:00", description: "The Sound and Light Show begins — 45 minutes of narrated drama, colored lights, and music telling the legend of Isis and Osiris across the ancient temple walls." },
            { time: "20:45", description: "Show ends. Free time to walk among the illuminated columns and take photographs." },
            { time: "21:15", description: "Board the motorboat back to the dock." },
            { time: "21:30", description: "Transfer back to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "أمسية الأسطورة والضوء في فيلة",
          description:
            "مع غروب الشمس فوق الصحراء الكبرى وتحول النيل إلى اللون الأزرق العميق لليل، تقدم هذه التجربة المسائية واحدة من أكثر اللقاءات أجواءً مع مصر القديمة. سيُستقبل منك في فندقك مع بدء حلول الظلام وتُنقل إلى رصيف القوارب في شلال، جنوب السد العالي مباشرةً. يأخذك عبور قصير بالقارب الصغير إلى جزيرة فيلة التي تتحول ليلاً إلى شيء خارج عن عالمنا — أعمدة المعبد وأبراجه وجدرانه المنقوشة تُضاء بألوان متحولة من العنبر والأزرق والذهبي. ستجلس على مدرجات الهواء الطلق ويبدأ العرض: رحلة روائية من 45 دقيقة عبر الأسطورة القديمة لإيزيس وأوزيريس.",
          steps: [
            { time: "19:00", description: "الاستقبال من فندقك في أسوان مع حلول الغسق." },
            { time: "19:30", description: "الوصول إلى رصيف قوارب شلال. الصعود إلى القارب الصغير باتجاه جزيرة فيلة." },
            { time: "19:45", description: "الوصول إلى جزيرة فيلة. المشي عبر أرض المعبد المضيئة إلى مقاعدك على مدرج المشاهدة الخارجي." },
            { time: "20:00", description: "يبدأ عرض الصوت والضوء — 45 دقيقة من الدراما الروائية والأضواء الملونة والموسيقى التي تحكي أسطورة إيزيس وأوزيريس عبر جدران المعبد القديمة." },
            { time: "20:45", description: "ينتهي العرض. وقت حر للتجول بين الأعمدة المضيئة والتقاط الصور." },
            { time: "21:15", description: "الصعود إلى القارب للعودة إلى الرصيف." },
            { time: "21:30", description: "الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
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
    minAge: 3,
    maxGroupSize: 12,
    availableTimes: ["08:00", "10:00", "14:00"],
    meetingPoint: {
      en: "Aswan Corniche felucca dock, near the Mövenpick Resort. Your guide will be waiting with a sign.",
      ar: "رصيف الفلوكة على كورنيش أسوان، بالقرب من منتجع موفنبيك. سيكون مرشدك بانتظارك حاملاً لافتة.",
    },
    accessibility: {
      en: "Felucca boarding requires stepping down into a low boat. The island has uneven rocky paths. Not suitable for wheelchairs.",
      ar: "يتطلب الصعود إلى الفلوكة النزول إلى قارب منخفض. في الجزيرة مسارات صخرية غير مستوية. غير مناسب لكراسي الحركة.",
    },
    whatToBring: {
      en: ["Comfortable flat shoes", "Sun hat and sunscreen", "Water bottle", "Camera", "Small bag — space is limited on a felucca"],
      ar: ["حذاء مسطح مريح", "قبعة للشمس وكريم واقٍ", "زجاجة ماء", "كاميرا", "حقيبة صغيرة — المساح محدود على الفلوكة"],
    },
    importantInfo: {
      en: [
        "Hotel pickup is not included; you make your own way to the Corniche dock.",
        "The felucca ride is weather-dependent; in case of strong winds the tour may be modified.",
        "Entrance fees to the Aswan Museum and ancient ruins are included.",
        "Life jackets are provided onboard the felucca.",
      ],
      ar: [
        "الاستقبال من الفندق غير مشمول؛ تتوجه بنفسك إلى رصيف الكورنيش.",
        "رحلة الفلوكة تعتمد على الطقس؛ في حالة الرياح القوية قد يتم تعديل الجولة.",
        "رسوم الدخول إلى متحف أسوان والآثار القديمة مشمولة.",
        "سترات النجاة متوفرة على متن الفلوكة.",
      ],
    },
    highlights: [
      "Traditional felucca ride across the Nile",
      "Explore the ancient ruins of Elephantine Island",
      "Visit the Aswan Museum on the island",
      "See the ancient Nilometer",
      "Enjoy stunning Nile views and island scenery",
    ],
    includes: ["Felucca ride", "Guide", "Entrance fees"],
    excludes: ["Hotel pickup", "Meals", "Tips"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Felucca Crossing & Island Exploration",
          description:
            "Elephantine Island sits in the middle of the Nile directly in front of Aswan's corniche and has been continuously inhabited for longer than almost any place on earth. Its southern tip contains one of the oldest settlements in Egypt, predating the pharaohs, and its strategic position made it the ancient border post and trading gateway between Egypt and sub-Saharan Africa. Today it offers one of Aswan's most enjoyable and peaceful half-day experiences — a gentle felucca crossing, a walk through two surviving Nubian villages, and a visit to the island's museum and ancient sites. The felucca ride itself is the opening pleasure: the silence of the sail, the proximity to the water, and the views of Aswan's corniche, the Aga Khan Mausoleum on its hilltop, and the great golden sand dunes of the West Bank beyond are already worth the journey.",
          steps: [
            { time: "08:00", description: "Meet your guide at the Corniche felucca dock. Board the traditional felucca sailboat." },
            { time: "08:15", description: "Sail across the Nile to the northern end of Elephantine Island. Enjoy views of Aswan's waterfront, the Mövenpick hotel on the island, and the desert West Bank." },
            { time: "08:30", description: "Disembark and begin the walking tour. First stop: the ancient ruins of the Temple of Khnum at the southern tip of the island — one of the oldest temple sites in Egypt, dedicated to the ram-headed creator god." },
            { time: "09:15", description: "Visit the Aswan Museum, which houses artifacts discovered on the island including pottery, statues, and objects from the pre-dynastic to Roman periods." },
            { time: "10:00", description: "Walk to the ancient Nilometer — a stone staircase descending into the Nile carved with measurement scales used for millennia to record the river's annual flood levels and predict Egypt's agricultural yield and tax rates." },
            { time: "10:30", description: "Stroll through the living Nubian villages of Siou and Koti on the island — brightly painted houses, narrow lanes, and local residents going about their daily lives offer a genuine glimpse of island culture." },
            { time: "11:30", description: "Return to the northern dock and board the felucca for the crossing back to the Aswan corniche." },
            { time: "12:00", description: "Arrive at the Corniche dock. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "عبور الفلوكة واستكشاف الجزيرة",
          description:
            "تقع جزيرة الفيلة في منتصف النيل مباشرةً أمام كورنيش أسوان وقد كانت مأهولة باستمرار لفترة أطول من أي مكان آخر تقريباً على وجه الأرض. يحتوي طرفها الجنوبي على أحد أقدم المستوطنات في مصر، يسبق الفراعنة، وجعل موقعها الاستراتيجي منها المنفذ الحدودي القديم وبوابة التجارة بين مصر وأفريقيا جنوب الصحراء الكبرى. اليوم تقدم الجزيرة واحدة من أكثر تجارب نصف اليوم متعةً وهدوءاً في أسوان — عبور هادئ بالفلوكة ومشية عبر قريتين نوبيتين لا يزالان قائمتين وزيارة لمتحف الجزيرة ومواقعها الأثرية.",
          steps: [
            { time: "08:00", description: "التقاء مرشدك في رصيف الفلوكة على الكورنيش. الصعود إلى قارب الفلوكة الشراعي التقليدي." },
            { time: "08:15", description: "الإبحار عبر النيل إلى الطرف الشمالي لجزيرة الفيلة. الاستمتاع بإطلالات على واجهة أسوان المائية وفندق موفنبيك على الجزيرة وكثبان الضفة الغربية الذهبية." },
            { time: "08:30", description: "النزول والبدء بالجولة السيرية. المحطة الأولى: آثار معبد خنوم القديمة عند الطرف الجنوبي للجزيرة — أحد أقدم مواقع المعابد في مصر، مكرس لإله الخلق ذي الرأس الكبشي." },
            { time: "09:15", description: "زيارة متحف أسوان الذي يضم قطعاً أثرية اكتُشفت على الجزيرة بما فيها الفخار والتماثيل وأشياء من العصر قبل الأسري حتى الحقبة الرومانية." },
            { time: "10:00", description: "المشي إلى مقياس النيل القديم — درج حجري ينزل إلى النيل منقوش بمقاييس القياس التي استُخدمت لآلاف السنين لتسجيل مستويات الفيضان السنوي للنهر والتنبؤ بمحصول مصر الزراعي ومعدلات الضريبة." },
            { time: "10:30", description: "التجول في قريتي سيو وكوتي النوبيتين الحيتين على الجزيرة — بيوت ملونة بألوان زاهية وأزقة ضيقة وسكان محليون في يومياتهم تقدم لمحة حقيقية من ثقافة الجزيرة." },
            { time: "11:30", description: "العودة إلى الرصيف الشمالي والصعود إلى الفلوكة للعبور إلى كورنيش أسوان." },
            { time: "12:00", description: "الوصول إلى رصيف الكورنيش. نهاية الجولة." },
          ],
        },
      ],
    },
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
    minAge: 5,
    maxGroupSize: 15,
    availableTimes: ["04:00"],
    meetingPoint: {
      en: "Your hotel lobby in Aswan. The guide will meet you in the early hours for the drive south to Abu Simbel.",
      ar: "بهو فندقك في أسوان. سيلتقي بك المرشد في الساعات الأولى من الصباح للقيادة جنوباً إلى أبو سمبل.",
    },
    accessibility: {
      en: "Abu Simbel involves walking on sand and uneven ground outside the temples, and ducking through low doorways inside. Not suitable for guests with severe mobility issues. The interior chambers can feel enclosed.",
      ar: "يتضمن أبو سمبل المشي على الرمال والأرض غير المستوية خارج المعابد والانحناء عند المداخل المنخفضة في الداخل. غير مناسب لمن يعانون من صعوبات حركة شديدة. قد تبدو الغرف الداخلية ضيقة.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun hat and high SPF sunscreen", "Water (plenty — the desert is extreme)", "Light breakfast snacks for the early drive", "Camera", "Warm layer for the pre-dawn departure"],
      ar: ["حذاء مريح للمشي", "قبعة للشمس وكريم واقٍ بعامل حماية عالٍ", "ماء (كثير — الصحراء قاسية)", "وجبة خفيفة للفطور في القيادة المبكرة", "كاميرا", "طبقة دافئة للمغادرة قبل الفجر"],
    },
    importantInfo: {
      en: [
        "Departure is very early — typically between 04:00 and 05:00 — to travel in convoy as required by Egyptian authorities.",
        "The drive from Aswan to Abu Simbel is approximately 3 hours each way through the desert.",
        "Abu Simbel is a UNESCO World Heritage Site; entry is strictly regulated.",
        "The temples align with the sun twice a year (February 22 and October 22) — these dates are busier and prices may vary.",
        "Photography inside the temples is generally not permitted.",
      ],
      ar: [
        "المغادرة مبكرة جداً — عادةً بين 04:00 و05:00 — للسفر في قافلة كما تشترط السلطات المصرية.",
        "القيادة من أسوان إلى أبو سمبل تستغرق نحو 3 ساعات في كل اتجاه عبر الصحراء.",
        "أبو سمبل موقع تراث عالمي لليونسكو؛ يُنظَّم الدخول بصرامة.",
        "تتوافق المعابد مع الشمس مرتين في السنة (22 فبراير و22 أكتوبر) — هذه التواريخ أكثر ازدحاماً وقد تتفاوت الأسعار.",
        "التصوير داخل المعابد ممنوع بشكل عام.",
      ],
    },
    highlights: [
      "Visit the legendary Great Temple of Ramses II",
      "Explore the Temple of Nefertari",
      "Learn about the incredible UNESCO relocation project",
      "Admire the four colossal statues at the entrance",
      "Hotel pickup at dawn included",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees", "Transport"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Desert Drive & the Temples of Ramses II",
          description:
            "Abu Simbel is not simply a monument — it is one of the defining experiences of ancient Egypt, and arguably the single most dramatic man-made sight on the African continent. The twin temples carved into the sandstone cliff above what is now Lake Nasser were built by Ramses II at the height of his power in the 13th century BC, designed not only as a place of worship but as an unmistakable declaration of divine kingship visible to all who approached from the south. When the Aswan High Dam was built and the waters began to rise in the 1960s, the international community mounted the greatest archaeological rescue operation in history: both temples were cut into over 2,000 individual blocks and reassembled on higher ground, 65 meters above their original position, so precisely that the solar alignment inside the Great Temple — where twice a year the rising sun illuminates the sanctuary's innermost statues — was preserved almost exactly. The day begins long before dawn in Aswan, as the convoy south departs in the cool desert darkness. The 280-kilometer drive through the Western Desert is itself a remarkable journey — flat, silent, and immense — before the temples appear at the water's edge like a vision.",
          steps: [
            { time: "04:00", description: "Hotel pickup in Aswan. Transfer to the convoy departure point." },
            { time: "04:30", description: "Convoy departs south along the desert highway toward Abu Simbel. Light snacks available during the drive." },
            { time: "07:30", description: "Arrive at Abu Simbel. First glimpse of the four colossal seated statues of Ramses II guarding the facade of the Great Temple." },
            { time: "08:00", description: "Guided tour begins. Stand before the Great Temple of Ramses II — your guide explains the statues (each 20 meters tall), the solar alignment phenomenon, and the story of the UNESCO rescue operation." },
            { time: "08:30", description: "Enter the Great Temple. Walk through the Hypostyle Hall with its eight Osiris-form pillars bearing the face of Ramses II, into the sanctuary chamber where the four gods — Ramses II, Amun, Ra-Horakhty, and Ptah — sit in eternal darkness." },
            { time: "09:15", description: "Exit the Great Temple and move to the smaller Temple of Nefertari, dedicated to Ramses's beloved queen and the goddess Hathor. Examine the six colossal standing statues at the facade — unusually, Nefertari's statues are the same height as those of the pharaoh." },
            { time: "09:45", description: "Free time at the site. Walk around to see the temples from different angles, sit by the lake, and take photographs of this extraordinary landscape." },
            { time: "10:30", description: "Depart Abu Simbel. Return convoy journey north to Aswan." },
            { time: "13:30", description: "Arrive back in Aswan. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "القيادة الصحراوية ومعابد رمسيس الثاني",
          description:
            "أبو سمبل ليست مجرد أثر — إنها واحدة من التجارب المحددة لمصر القديمة، وربما المشهد الأكثر درامية من صنع الإنسان على القارة الأفريقية. المعبدان التوأمان المنحوتان في الجرف الحجري الرملي فوق ما يُعرف اليوم ببحيرة ناصر بناهما رمسيس الثاني في ذروة قوته في القرن الثالث عشر قبل الميلاد، صُمِّما ليس فقط كمكان للعبادة بل كإعلان لا لبس فيه عن الألوهية الملكية مرئياً لكل من يقترب من الجنوب. عندما بُني السد العالي الأسواني وبدأت المياه ترتفع في الستينيات، شنّ المجتمع الدولي أعظم عملية إنقاذ أثري في التاريخ: قُطع كلا المعبدين إلى أكثر من 2000 قطعة منفردة وأُعيد تجميعهما على أرض أعلى، 65 متراً فوق موضعهما الأصلي.",
          steps: [
            { time: "04:00", description: "الاستقبال من الفندق في أسوان. الانتقال إلى نقطة انطلاق القافلة." },
            { time: "04:30", description: "تنطلق القافلة جنوباً على الطريق الصحراوي باتجاه أبو سمبل. وجبات خفيفة متاحة أثناء القيادة." },
            { time: "07:30", description: "الوصول إلى أبو سمبل. أول لمحة للتماثيل الأربعة الجالسة الضخمة لرمسيس الثاني تحرس واجهة المعبد الكبير." },
            { time: "08:00", description: "تبدأ الجولة المصحوبة بمرشد. قف أمام معبد رمسيس الثاني الكبير — يشرح مرشدك التماثيل (يبلغ ارتفاع كل منها 20 متراً) وظاهرة محاذاة الشمس وقصة عملية إنقاذ اليونسكو." },
            { time: "08:30", description: "الدخول إلى المعبد الكبير. المشي عبر قاعة الأعمدة بأعمدتها الثمانية على شكل أوزيريس تحمل وجه رمسيس الثاني، إلى غرفة الحرم الداخلي حيث يجلس الآلهة الأربعة — رمسيس الثاني وآمون ورع-حوراختي وبتاح — في الظلام الأبدي." },
            { time: "09:15", description: "الخروج من المعبد الكبير والانتقال إلى معبد نفرتاري الأصغر، المكرس لملكة رمسيس المحبوبة والإلهة حتحور. فحص التماثيل الستة الجالسة الضخمة على الواجهة — بشكل غير مألوف تماثيل نفرتاري بالارتفاع ذاته لتماثيل الفرعون." },
            { time: "09:45", description: "وقت حر في الموقع. التجول لمشاهدة المعابد من زوايا مختلفة والجلوس بجانب البحيرة والتقاط صور لهذا المشهد الاستثنائي." },
            { time: "10:30", description: "المغادرة من أبو سمبل. رحلة القافلة العائدة شمالاً إلى أسوان." },
            { time: "13:30", description: "الوصول إلى أسوان. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
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
    minAge: 5,
    maxGroupSize: 15,
    availableTimes: ["08:00"],
    meetingPoint: {
      en: "Your hotel lobby in Aswan. The guide will meet you in the morning for the drive to Abu Simbel.",
      ar: "بهو فندقك في أسوان. سيلتقي بك المرشد صباحاً للقيادة إلى أبو سمبل.",
    },
    accessibility: {
      en: "Involves walking on sand and uneven terrain. Low doorways inside the temples require ducking. Not suitable for guests with severe mobility issues.",
      ar: "تتضمن المشي على الرمال والتضاريس الوعرة. المداخل المنخفضة داخل المعابد تستلزم الانحناء. غير مناسبة لمن يعانون من صعوبات حركة شديدة.",
    },
    whatToBring: {
      en: ["Overnight bag with essentials", "Comfortable walking shoes", "Sun protection", "Water", "Camera", "Light evening layer for the sound and light show"],
      ar: ["حقيبة للمبيت بالأساسيات", "حذاء مريح للمشي", "واقٍ من الشمس", "ماء", "كاميرا", "طبقة خفيفة للمساء لعرض الصوت والضوء"],
    },
    importantInfo: {
      en: [
        "This tour travels outside the mandatory convoy hours, allowing a more relaxed pace — ideal for photographers and those who want extra time at the temples.",
        "Overnight accommodation in Abu Simbel is in a comfortable hotel close to the temples.",
        "Breakfast on Day 2 is included; other meals are at your own expense.",
        "Photography is not permitted inside the temples.",
      ],
      ar: [
        "هذه الجولة تسافر خارج ساعات القافلة الإلزامية، مما يتيح وتيرة أكثر راحة — مثالية للمصورين ومن يريدون وقتاً إضافياً في المعابد.",
        "الإقامة الليلية في أبو سمبل في فندق مريح قريب من المعابد.",
        "الإفطار في اليوم الثاني مشمول؛ باقي الوجبات على نفقتك الخاصة.",
        "التصوير غير مسموح به داخل المعابد.",
      ],
    },
    highlights: [
      "2-day relaxed visit to Abu Simbel without early wake-up",
      "Guided tour of the temples of Ramses II and Nefertari",
      "Evening light and sound show at Abu Simbel",
      "Overnight accommodation included",
      "Hotel pickup from Aswan included",
    ],
    includes: ["1 night accommodation in Abu Simbel", "Guided tours", "Entrance fees", "Light and sound show", "Transport from Aswan"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Aswan to Abu Simbel — Afternoon Arrival & Temples",
          description:
            "Unlike the standard dawn convoy, this tour departs Aswan mid-morning, transforming the drive into a relaxed desert journey rather than a pre-dawn dash. By the time you arrive at Abu Simbel in the early afternoon, the day-trip crowds that arrived at dawn have largely departed, and you'll have the temples in relative peace. Your guide takes you through both the Great Temple of Ramses II and the Temple of Nefertari at an unhurried pace, explaining not just the monuments themselves but the extraordinary story of how they were saved — and the human drama of the archaeologists, engineers, and workers who disassembled and reassembled them block by block over four years. As evening falls, the site transforms once more: the tourists are gone, the desert silence returns, and then the sound and light show begins — colors sweeping the ancient stone, and the voice of Ramses II rolling across the water of Lake Nasser.",
          steps: [
            { time: "08:00", description: "Hotel pickup in Aswan." },
            { time: "08:30", description: "Depart for Abu Simbel by private vehicle. Enjoy the desert highway journey at a relaxed pace." },
            { time: "11:30", description: "Arrive at Abu Simbel. Check in to the hotel and drop off your overnight bag." },
            { time: "12:30", description: "Lunch at your own expense at one of the local restaurants near the site." },
            { time: "14:00", description: "Enter the temple site. Guided tour of the Great Temple of Ramses II — explore the facade statues, the hypostyle hall, the vestibule, and the inner sanctuary." },
            { time: "15:00", description: "Move to the Temple of Nefertari. Guided tour of the exterior colossal figures and the interior painted chambers dedicated to Hathor." },
            { time: "16:00", description: "Free time at the site — walk the full perimeter, photograph the temples from the lakeside, or sit quietly as the light changes on the stone." },
            { time: "17:30", description: "Return to the hotel for dinner at your own expense and rest before the evening show." },
            { time: "20:00", description: "Transfer to the Abu Simbel Sound and Light Show." },
            { time: "20:30", description: "The show begins — dramatic colored lights illuminate the temples as the story of Ramses II's reign, his battle of Kadesh, and his divine legacy unfolds in narration and music." },
            { time: "21:15", description: "Show ends. Return to the hotel for the night." },
          ],
        },
        {
          day: 2,
          title: "Sunrise at Abu Simbel & Return to Aswan",
          description:
            "One of the great privileges of staying overnight at Abu Simbel is the morning — before the convoy from Aswan arrives, the temples belong entirely to you. Rise early and return to the site as the sun climbs above the desert horizon, casting the great statues of Ramses II in long golden light. This is when photographers and those who simply want to feel the full weight of the place come into their own. After breakfast at the hotel, your guide will return you to the temples for any final time before the drive north back to Aswan.",
          steps: [
            { time: "06:00", description: "Optional early morning visit to Abu Simbel before the day-trip crowds arrive. Sunrise light on the temple facade is exceptional for photography." },
            { time: "07:30", description: "Breakfast at the hotel (included)." },
            { time: "09:00", description: "Optional second visit to the temples if desired, or free time in Abu Simbel village." },
            { time: "10:00", description: "Check out of hotel. Depart Abu Simbel for the drive back to Aswan." },
            { time: "13:00", description: "Arrive in Aswan. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "من أسوان إلى أبو سمبل — وصول بعد الظهر والمعابد",
          description:
            "بخلاف قافلة الفجر العادية، تغادر هذه الجولة أسوان في منتصف الصباح، مما يحول القيادة إلى رحلة صحراوية مريحة بدلاً من الانطلاق قبل الفجر. بحلول وصولك إلى أبو سمبل في أوائل بعد الظهر، يكون الجزء الأكبر من حشود الرحلات اليومية التي وصلت عند الفجر قد غادر، وستكون المعابد في هدوء نسبي. يأخذك مرشدك عبر معبد رمسيس الثاني الكبير ومعبد نفرتاري بوتيرة غير متسرعة، شارحاً ليس المعالم نفسها فحسب بل القصة الاستثنائية لكيفية إنقاذها والدراما الإنسانية للآثاريين والمهندسين والعمال الذين فككوا وأعادوا تجميعها قطعة قطعة على مدى أربع سنوات.",
          steps: [
            { time: "08:00", description: "الاستقبال من الفندق في أسوان." },
            { time: "08:30", description: "المغادرة إلى أبو سمبل بسيارة خاصة. الاستمتاع برحلة الطريق الصحراوي بوتيرة مريحة." },
            { time: "11:30", description: "الوصول إلى أبو سمبل. تسجيل الوصول في الفندق وإنزال حقيبة المبيت." },
            { time: "12:30", description: "الغداء على نفقتك الخاصة في أحد المطاعم المحلية بالقرب من الموقع." },
            { time: "14:00", description: "الدخول إلى الموقع. جولة مصحوبة بمرشد في معبد رمسيس الثاني الكبير — استكشاف تماثيل الواجهة وقاعة الأعمدة والرواق والحرم الداخلي." },
            { time: "15:00", description: "الانتقال إلى معبد نفرتاري. جولة مصحوبة بمرشد على أشكال التماثيل الضخمة الخارجية والغرف الداخلية المطلية المكرسة لحتحور." },
            { time: "16:00", description: "وقت حر في الموقع — المشي حول المحيط الكامل أو تصوير المعابد من جانب البحيرة أو الجلوس في هدوء مع تغير الضوء على الحجر." },
            { time: "17:30", description: "العودة إلى الفندق للعشاء على نفقتك الخاصة والراحة قبل العرض المسائي." },
            { time: "20:00", description: "الانتقال إلى عرض الصوت والضوء في أبو سمبل." },
            { time: "20:30", description: "يبدأ العرض — أضواء ملونة تضيء المعابد بشكل درامي بينما تتكشف قصة حكم رمسيس الثاني ومعركة قادش وإرثه الإلهي في الرواية والموسيقى." },
            { time: "21:15", description: "ينتهي العرض. العودة إلى الفندق للمبيت." },
          ],
        },
        {
          day: 2,
          title: "شروق الشمس في أبو سمبل والعودة إلى أسوان",
          description:
            "من أكبر امتيازات المبيت في أبو سمبل هو الصباح — قبل وصول القافلة من أسوان، تكون المعابد ملكاً لك وحدك. استيقظ مبكراً وعد إلى الموقع مع صعود الشمس فوق أفق الصحراء، تُلقي بضوئها الذهبي الطويل على تماثيل رمسيس الثاني العظيمة. هذا هو الوقت الذي يستمتع فيه المصورون وأولئك الذين يريدون الشعور بالثقل الكامل للمكان. بعد الإفطار في الفندق سيأخذك مرشدك إلى المعابد لأي وقت أخير قبل القيادة شمالاً إلى أسوان.",
          steps: [
            { time: "06:00", description: "زيارة صباحية اختيارية مبكرة إلى أبو سمبل قبل وصول حشود الرحلات اليومية. ضوء الشروق على واجهة المعبد استثنائي للتصوير." },
            { time: "07:30", description: "الإفطار في الفندق (مشمول)." },
            { time: "09:00", description: "زيارة ثانية اختيارية للمعابد إذا رغبت، أو وقت حر في قرية أبو سمبل." },
            { time: "10:00", description: "تسجيل المغادرة من الفندق. المغادرة من أبو سمبل للقيادة إلى أسوان." },
            { time: "13:00", description: "الوصول إلى أسوان. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
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
    minAge: 0,
    maxGroupSize: 6,
    availableTimes: ["Available 24/7"],
    meetingPoint: {
      en: "Aswan International Airport arrivals hall, or your hotel lobby — whichever you specify at booking.",
      ar: "صالة الوصول في مطار أسوان الدولي، أو بهو فندقك — أيهما تحدده عند الحجز.",
    },
    accessibility: {
      en: "Vehicles are air-conditioned private cars or minivans. Please inform us in advance if you require a wheelchair-accessible vehicle.",
      ar: "المركبات سيارات خاصة أو ميني فان بتكييف هواء. يرجى إخبارنا مسبقاً إذا كنت تحتاج إلى مركبة مخصصة لكراسي الحركة.",
    },
    whatToBring: {
      en: ["Your booking confirmation", "Flight or cruise details for timing", "Contact number for the driver"],
      ar: ["تأكيد حجزك", "تفاصيل الرحلة الجوية أو النيلية للتوقيت", "رقم تواصل مع السائق"],
    },
    importantInfo: {
      en: [
        "Transfers are private — you will not share the vehicle with other passengers.",
        "The driver will hold a sign with your name at the airport arrivals hall.",
        "Please provide your flight or arrival details at the time of booking to ensure punctual pickup.",
        "Waiting time at the airport is up to 60 minutes after the scheduled landing time.",
        "Additional stops or extended routes may incur extra charges.",
      ],
      ar: [
        "خدمة التوصيل خاصة — لن تشارك المركبة مع ركاب آخرين.",
        "سيحمل السائق لافتة باسمك في صالة الوصول بالمطار.",
        "يرجى تقديم تفاصيل رحلتك أو وصولك وقت الحجز لضمان الاستقبال في الوقت المناسب.",
        "وقت الانتظار في المطار يصل إلى 60 دقيقة بعد وقت الهبوط المجدول.",
        "التوقفات الإضافية أو المسارات الممتدة قد تستلزم رسوماً إضافية.",
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
    minAge: 8,
    maxGroupSize: 30,
    availableTimes: ["09:00"],
    meetingPoint: {
      en: "Aswan High Dam dock. Transfer from your Aswan hotel to the embarkation point is included.",
      ar: "رصيف السد العالي الأسواني. الانتقال من فندقك في أسوان إلى نقطة الصعود مشمول.",
    },
    accessibility: {
      en: "Lake Nasser cruise ships have stairs between decks. Shore excursions involve walking on sandy and uneven terrain. Not suitable for guests with severe mobility issues.",
      ar: "سفن رحلات بحيرة ناصر بها درج بين الأسطح. الرحلات البرية تتضمن المشي على تضاريس رملية وغير مستوية. غير مناسبة لمن يعانون من صعوبات حركة شديدة.",
    },
    whatToBring: {
      en: ["Light summer clothing for days", "Warmer layer for evenings on the lake", "Comfortable walking shoes", "High SPF sun protection", "Binoculars (optional — excellent for birdwatching on the lake)", "Camera", "Personal medications"],
      ar: ["ملابس صيفية خفيفة للنهار", "طبقة أدفأ للأمسيات على البحيرة", "حذاء مريح للمشي", "واقٍ من الشمس بعامل حماية عالٍ", "منظار (اختياري — ممتاز لمشاهدة الطيور على البحيرة)", "كاميرا", "أدوية شخصية"],
    },
    importantInfo: {
      en: [
        "All meals are included throughout the cruise.",
        "Entrance fees to all temple sites visited are included.",
        "Lake Nasser cruises carry far fewer passengers than Nile cruises — expect an intimate experience.",
        "The temples on Lake Nasser are among the least visited ancient sites in Egypt; some days you may have them entirely to yourselves.",
        "Tipping for the crew and guide is appreciated but not obligatory.",
      ],
      ar: [
        "جميع الوجبات مشمولة طوال الرحلة البحرية.",
        "رسوم الدخول إلى جميع مواقع المعابد المزارة مشمولة.",
        "رحلات بحيرة ناصر تستقبل عدداً أقل بكثير من الركاب مقارنة برحلات النيل — توقع تجربة حميمة.",
        "معابد بحيرة ناصر من بين أقل المواقع الأثرية زيارةً في مصر؛ في بعض الأيام قد تكون المعابد حكراً لك وحدك.",
        "البقشيش للطاقم والمرشد موضع تقدير لكنه غير إلزامي.",
      ],
    },
    highlights: [
      "4-day all-inclusive cruise on Lake Nasser",
      "Visit the temples of Abu Simbel, Wadi el-Seboua, and Amada",
      "Comfortable cabin accommodation onboard",
      "All meals included throughout the cruise",
      "Expert guide for all temple visits",
    ],
    includes: ["Accommodation onboard", "All meals", "Guided excursions", "Entrance fees", "English-speaking guide"],
    excludes: ["International flights", "Travel insurance", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Aswan — Embarkation & Kalabasha Temples",
          description:
            "Your Lake Nasser adventure begins at Aswan, where you'll transfer to the embarkation dock and board your intimate cruise ship. After settling into your cabin and a welcome briefing, the ship makes its first stop just south of the High Dam — the Kalabasha complex, home to three remarkable temples gathered on a single promontory above the lake. The Temple of Kalabasha itself is one of the largest freestanding temples in Nubia, a grand Roman-era monument dedicated to the Nubian god Mandulis. Beside it, the rock-cut Temple of Beit El-Wali preserves some of the most vivid painted battle reliefs in Egypt, showing Ramses II charging into battle against the Nubians and Libyans. The elegant kiosk of Kertassi — just a few columns and a cornice — completes the group with unexpected grace.",
          steps: [
            { time: "09:00", description: "Hotel pickup from Aswan and transfer to the Lake Nasser cruise dock." },
            { time: "10:00", description: "Embarkation and cabin check-in. Welcome briefing from the cruise director." },
            { time: "12:00", description: "Welcome lunch onboard." },
            { time: "14:00", description: "Short transfer to the Kalabasha temples complex." },
            { time: "14:30", description: "Guided tour of the Temple of Kalabasha — walk through the pylon, the hypostyle hall, and the sanctuary dedicated to the Nubian god Mandulis." },
            { time: "15:30", description: "Visit Beit El-Wali — explore the rock-cut temple's vivid battle reliefs and painted chambers." },
            { time: "16:00", description: "See the Kertassi kiosk — a small but elegant temple fragment overlooking the lake." },
            { time: "17:00", description: "Return to the ship. Sail south across Lake Nasser." },
            { time: "19:30", description: "Dinner onboard. Evening at leisure as the ship sails through the desert night." },
          ],
        },
        {
          day: 2,
          title: "Wadi el-Seboua & Dakka Temples",
          description:
            "Today the ship reaches Wadi el-Seboua — 'Valley of the Lions' — where an avenue of human-headed sphinxes leads to one of the most remarkable temples on the lake. Built by Ramses II, the temple was later converted into a Christian church in the early centuries AD, and the paintings of saints applied over the ancient Egyptian reliefs were partially restored in the 20th century, leaving a ghostly palimpsest of two faiths occupying the same walls. Nearby, the Temple of Dakka offers another architectural layer — begun in the Meroitic era by a Nubian king, added to by Ptolemaic pharaohs, and further extended under Augustus. Its well-preserved pylon tower can be climbed for panoramic views across the lake.",
          steps: [
            { time: "07:00", description: "Breakfast onboard as the ship reaches Wadi el-Seboua." },
            { time: "08:30", description: "Disembark for the guided tour of Wadi el-Seboua. Walk the sphinx avenue and enter the temple — your guide explains both the original pharaonic design and its later Christian transformation." },
            { time: "10:00", description: "Short walk or transfer to the Temple of Dakka. Explore the temple's multi-era construction and climb the pylon for lake views." },
            { time: "11:30", description: "Return to the ship." },
            { time: "13:00", description: "Lunch onboard. Afternoon sailing across the tranquil lake." },
            { time: "15:30", description: "Optional deck time for relaxation, birdwatching, or reading as the lake's extraordinary desolate beauty passes by." },
            { time: "19:30", description: "Dinner onboard. Sunset over Lake Nasser from the deck." },
          ],
        },
        {
          day: 3,
          title: "Amada & Derr Temples + Abu Simbel",
          description:
            "The third day is the crown of the cruise — the ship reaches the southernmost point of the journey, the site of Abu Simbel, but not before stopping at two more remarkable monuments. The Temple of Amada is the oldest temple on Lake Nasser, built during the reigns of Thutmose III and Amenhotep II in the 15th century BC, and preserves some of the finest and most vividly colored painted reliefs in all of Nubia. The nearby rock-cut Temple of Derr, built by Ramses II and dedicated to Ra-Horakhty, completes the morning before the ship makes the short final sail to Abu Simbel, where you'll spend the afternoon exploring both the Great Temple and the Temple of Nefertari with plenty of time and no crowds.",
          steps: [
            { time: "06:30", description: "Early breakfast as the ship arrives at Amada." },
            { time: "07:30", description: "Guided tour of the Temple of Amada — explore the oldest temple on the lake, its remarkably preserved painted reliefs, and its historical inscriptions covering events from two pharaohs' reigns." },
            { time: "09:00", description: "Short transfer to the rock-cut Temple of Derr. Guided tour of the interior chambers and their reliefs dedicated to Ra-Horakhty." },
            { time: "10:30", description: "Return to the ship. Final sail south to Abu Simbel." },
            { time: "12:00", description: "Arrive at Abu Simbel. Lunch onboard." },
            { time: "14:00", description: "Guided tour of the Great Temple of Ramses II at Abu Simbel — stand before the four colossal statues, enter the hypostyle hall, and reach the inner sanctuary." },
            { time: "15:30", description: "Guided tour of the Temple of Nefertari." },
            { time: "16:30", description: "Free time at Abu Simbel — walk along the lake, photograph the temples, and absorb the atmosphere." },
            { time: "18:00", description: "Return to the ship. Gala dinner onboard." },
          ],
        },
        {
          day: 4,
          title: "Abu Simbel Sound & Light Show & Return",
          description:
            "The final morning belongs to Abu Simbel once more. Before the convoy from Aswan arrives, you'll have the temples in the calm of the early hours — the ideal time to revisit the sanctuaries or simply sit in the presence of the great statues as the desert warms around you. After breakfast and a last look at this extraordinary place, the ship begins the return journey north across the lake to Aswan, arriving in the afternoon in time for your onward travel arrangements.",
          steps: [
            { time: "06:30", description: "Optional early morning return visit to Abu Simbel before the day-trip crowds arrive — the best light for photography." },
            { time: "08:00", description: "Breakfast onboard." },
            { time: "09:00", description: "Depart Abu Simbel. The ship sails north back across Lake Nasser toward Aswan." },
            { time: "13:00", description: "Lunch onboard during the return sail." },
            { time: "16:00", description: "Arrive at Aswan dock. Disembarkation and check-out." },
            { time: "16:30", description: "Transfer to your Aswan hotel or the train station. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "أسوان — الصعود ومعابد كلابشة",
          description:
            "تبدأ مغامرة بحيرة ناصر في أسوان حيث ستنتقل إلى رصيف الصعود وتركب سفينتك النيلية الحميمة. بعد الاستقرار في كبينتك وجلسة الترحيب التعريفية، تتوقف السفينة في محطتها الأولى جنوب السد العالي مباشرةً — مجمع كلابشة، موطن ثلاثة معابد رائعة مجمعة على رأس جرف واحد فوق البحيرة. معبد كلابشة نفسه أحد أكبر المعابد المستقلة في النوبة، صرح رروماني ضخم مكرس للإله النوبي ماندوليس.",
          steps: [
            { time: "09:00", description: "الاستقبال من الفندق في أسوان والانتقال إلى رصيف رحلات بحيرة ناصر." },
            { time: "10:00", description: "الصعود إلى السفينة وتسجيل الوصول في الكبينة. جلسة ترحيبية من مدير الرحلة." },
            { time: "12:00", description: "غداء الترحيب على متن السفينة." },
            { time: "14:00", description: "انتقال قصير إلى مجمع معابد كلابشة." },
            { time: "14:30", description: "جولة مصحوبة بمرشد في معبد كلابشة — المشي عبر البرج وقاعة الأعمدة والحرم المكرس للإله النوبي ماندوليس." },
            { time: "15:30", description: "زيارة بيت الولي — استكشاف نقوش المعارك الحية للمعبد المنحوت في الصخر وغرفه المطلية." },
            { time: "16:00", description: "مشاهدة كشك قرتاسي — شظية معبد صغيرة لكن أنيقة تطل على البحيرة." },
            { time: "17:00", description: "العودة إلى السفينة. الإبحار جنوباً عبر بحيرة ناصر." },
            { time: "19:30", description: "العشاء على متن السفينة. مساء حر مع إبحار السفينة في الليل الصحراوي." },
          ],
        },
        {
          day: 2,
          title: "معابد وادي السبوع ودكة",
          description:
            "اليوم تصل السفينة إلى وادي السبوع — 'وادي الأسود' — حيث يقود طريق أبي الهول ذو الرؤوس البشرية إلى أحد أكثر معابد البحيرة لفتاً للنظر. بناه رمسيس الثاني وتحول لاحقاً إلى كنيسة مسيحية في القرون الأولى للميلاد، وطُبقت رسومات القديسين فوق النقوش المصرية القديمة وأُعيد ترميمها جزئياً في القرن العشرين، تاركاً تلاشياً شبحياً لعقيدتين تحتلان الجدران ذاتها.",
          steps: [
            { time: "07:00", description: "الإفطار على متن السفينة مع وصولها إلى وادي السبوع." },
            { time: "08:30", description: "النزول من السفينة للجولة المصحوبة بمرشد في وادي السبوع. المشي في طريق أبي الهول والدخول إلى المعبد — يشرح مرشدك التصميم الفرعوني الأصلي وتحوله المسيحي اللاحق." },
            { time: "10:00", description: "مشية قصيرة أو انتقال إلى معبد دكة. استكشاف البناء متعدد العهود للمعبد والصعود إلى البرج للاطلاع على مناظر البحيرة." },
            { time: "11:30", description: "العودة إلى السفينة." },
            { time: "13:00", description: "الغداء على متن السفينة. الإبحار بعد الظهر عبر البحيرة الهادئة." },
            { time: "15:30", description: "وقت اختياري على السطح للاسترخاء أو مراقبة الطيور أو القراءة مع مرور الجمال القاحل الاستثنائي للبحيرة." },
            { time: "19:30", description: "العشاء على متن السفينة. غروب الشمس فوق بحيرة ناصر من السطح." },
          ],
        },
        {
          day: 3,
          title: "معابد عمادة ودر وأبو سمبل",
          description:
            "اليوم الثالث هو تاج الرحلة البحرية — تصل السفينة إلى النقطة الأكثر جنوبية في الرحلة، موقع أبو سمبل، لكن ليس قبل التوقف عند معلمين رائعين آخرين. معبد عمادة هو أقدم معبد على بحيرة ناصر، بُني في عهد تحتمس الثالث وأمنحوتب الثاني في القرن الخامس عشر قبل الميلاد، ويحفظ بعضاً من أجمل وأكثر النقوش الملونة حيوية في النوبة كلها.",
          steps: [
            { time: "06:30", description: "إفطار مبكر مع وصول السفينة إلى عمادة." },
            { time: "07:30", description: "جولة مصحوبة بمرشد في معبد عمادة — استكشاف أقدم معبد على البحيرة ونقوشه المطلية المحفوظة بشكل رائع وكتاباته التاريخية التي تغطي أحداث حكم فرعونين." },
            { time: "09:00", description: "انتقال قصير إلى معبد دَر المنحوت في الصخر. جولة مصحوبة بمرشد على الغرف الداخلية ونقوشها المكرسة لرع-حوراختي." },
            { time: "10:30", description: "العودة إلى السفينة. الإبحار جنوباً أخيراً إلى أبو سمبل." },
            { time: "12:00", description: "الوصول إلى أبو سمبل. الغداء على متن السفينة." },
            { time: "14:00", description: "جولة مصحوبة بمرشد في معبد رمسيس الثاني الكبير في أبو سمبل — الوقوف أمام التماثيل الأربعة الضخمة والدخول إلى قاعة الأعمدة والوصول إلى الحرم الداخلي." },
            { time: "15:30", description: "جولة مصحوبة بمرشد في معبد نفرتاري." },
            { time: "16:30", description: "وقت حر في أبو سمبل — المشي على طول البحيرة وتصوير المعابد واستيعاب الأجواء." },
            { time: "18:00", description: "العودة إلى السفينة. عشاء الغالا على متن السفينة." },
          ],
        },
        {
          day: 4,
          title: "عرض الصوت والضوء في أبو سمبل والعودة",
          description:
            "الصباح الأخير يعود إلى أبو سمبل مجدداً. قبل وصول القافلة من أسوان ستكون المعابد في هدوء الساعات الأولى — الوقت المثالي لإعادة زيارة الأحرام الداخلية أو مجرد الجلوس في حضرة التماثيل العظيمة مع دفء الصحراء من حولك. بعد الإفطار ونظرة أخيرة على هذا المكان الاستثنائي تبدأ السفينة رحلة العودة شمالاً عبر البحيرة إلى أسوان وصولاً في بعد الظهر.",
          steps: [
            { time: "06:30", description: "زيارة صباحية اختيارية مبكرة لأبو سمبل قبل وصول حشود الرحلات اليومية — أفضل إضاءة للتصوير." },
            { time: "08:00", description: "الإفطار على متن السفينة." },
            { time: "09:00", description: "المغادرة من أبو سمبل. تبحر السفينة شمالاً عودةً عبر بحيرة ناصر نحو أسوان." },
            { time: "13:00", description: "الغداء على متن السفينة أثناء رحلة العودة." },
            { time: "16:00", description: "الوصول إلى رصيف أسوان. تسجيل المغادرة." },
            { time: "16:30", description: "الانتقال إلى فندقك في أسوان أو محطة القطار. نهاية الجولة." },
          ],
        },
      ],
    },
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
    minAge: 3,
    maxGroupSize: 12,
    availableTimes: ["09:00", "14:00"],
    meetingPoint: {
      en: "Aswan Corniche felucca dock, near the EgyptAir office. Your guide will be waiting.",
      ar: "رصيف الفلوكة على كورنيش أسوان، بالقرب من مكتب مصر للطيران. مرشدك بانتظارك.",
    },
    accessibility: {
      en: "Felucca boarding requires stepping carefully into a low boat. Village paths are unpaved. Not suitable for wheelchairs.",
      ar: "يتطلب الصعود إلى الفلوكة الخطو بحذر في قارب منخفض. مسارات القرية غير معبدة. غير مناسب لكراسي الحركة.",
    },
    whatToBring: {
      en: ["Comfortable flat shoes", "Light, respectful clothing (covering shoulders and knees is appreciated)", "Small amount of local currency for purchases or tips", "Camera — but always ask before photographing residents", "Sun protection"],
      ar: ["حذاء مسطح مريح", "ملابس خفيفة ومحتشمة (تغطية الكتفين والركبتين موضع تقدير)", "مبلغ صغير من العملة المحلية للمشتريات أو البقشيش", "كاميرا — لكن استأذن دائماً قبل تصوير السكان", "واقٍ من الشمس"],
    },
    importantInfo: {
      en: [
        "Hotel pickup is not included; make your own way to the Corniche dock.",
        "This is a living village — please be respectful of residents and their privacy.",
        "The guide will translate and facilitate interactions with local families.",
        "Local tea and refreshments may be offered inside a Nubian home — accepting is a gesture of respect.",
        "Small handicrafts and Nubian souvenirs are available for purchase in the village.",
      ],
      ar: [
        "الاستقبال من الفندق غير مشمول؛ توجه بنفسك إلى رصيف الكورنيش.",
        "هذه قرية حية — يرجى احترام السكان وخصوصيتهم.",
        "سيترجم المرشد ويُيسّر التفاعلات مع العائلات المحلية.",
        "قد يُقدَّم لك شاي ومرطبات محلية داخل بيت نوبي — قبولها إيماءة احترام.",
        "الحرف اليدوية الصغيرة والتذكارات النوبية متوفرة للشراء في القرية.",
      ],
    },
    highlights: [
      "Felucca ride across the Nile to the Nubian village",
      "Explore the colorful streets of Gharb Soheil",
      "Meet local Nubian families and learn about their traditions",
      "Taste authentic Nubian food and tea",
      "Unique cultural experience away from the tourist trail",
    ],
    includes: ["Felucca ride", "Guide", "Village visit"],
    excludes: ["Hotel pickup", "Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Across the Nile to Gharb Soheil",
          description:
            "The Nubian people are one of the world's oldest civilizations, with a history that predates even the pharaohs, and yet their culture is among the least known to most visitors to Egypt. The Nubian homeland stretched along the Nile from Aswan deep into what is now Sudan, and when the Aswan High Dam flooded the valley in the 1960s, entire communities were relocated — a displacement that Nubians still carry as a collective wound. Today, the villages on the West Bank near Aswan are home to Nubian families who have kept their language, music, architecture, and way of life alive, and visiting Gharb Soheil is one of the most genuine and moving cultural encounters available to any traveler in Egypt. The experience begins with a felucca crossing of the Nile — a few minutes of silence and wind and water that feels like crossing into a different world. On the far bank, the painted houses of Gharb Soheil rise from the desert edge in blues, yellows, and oranges, decorated with murals of boats, fish, camels, and geometric patterns that carry deep symbolic meaning in Nubian tradition.",
          steps: [
            { time: "09:00", description: "Meet your guide at the Corniche felucca dock. Board the traditional felucca and cross the Nile to the West Bank." },
            { time: "09:20", description: "Arrive at the Gharb Soheil landing. Begin the walk into the village." },
            { time: "09:30", description: "Stroll through the painted streets of Gharb Soheil. Your guide explains the symbolism of the house murals, the Nubian architectural tradition of bright colors, and the meaning of the decorative motifs." },
            { time: "10:15", description: "Visit to a Nubian family home — meet your hosts, sit in the traditional courtyard, learn about daily Nubian life, and share tea and perhaps karkadeh (hibiscus drink) with the family." },
            { time: "11:00", description: "Walk to the village's small community spaces — see traditional Nubian crafts, musical instruments, and listen to your guide explain the history of the Nubian displacement and the ongoing effort to preserve Nubian culture." },
            { time: "11:45", description: "Browse the small artisan market for handmade Nubian goods — woven baskets, beaded jewelry, pottery, and spices." },
            { time: "12:15", description: "Return to the felucca landing and sail back to the Aswan Corniche." },
            { time: "12:30", description: "Arrive at the Corniche dock. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "عبر النيل إلى غرب سهيل",
          description:
            "الشعب النوبي من أقدم الحضارات في العالم بتاريخ يسبق حتى الفراعنة، ومع ذلك ثقافته من بين الأقل معرفةً لدى معظم زوار مصر. امتد الوطن النوبي على طول النيل من أسوان عميقاً داخل ما يُعرف اليوم بالسودان، وعندما أغرق السد العالي الأسواني الوادي في الستينيات، أُعيد توطين مجتمعات بأكملها — تهجير لا يزال النوبيون يحملونه كجرح جماعي. اليوم القرى على الضفة الغربية قرب أسوان موطن لعائلات نوبية أبقت على لغتها وموسيقاها وعمارتها وطريقة حياتها حية، وزيارة غرب سهيل واحدة من أكثر اللقاءات الثقافية صدقاً وتأثيراً المتاحة لأي مسافر في مصر.",
          steps: [
            { time: "09:00", description: "التقاء مرشدك في رصيف الفلوكة على الكورنيش. الصعود إلى الفلوكة التقليدية والعبور إلى الضفة الغربية." },
            { time: "09:20", description: "الوصول إلى رصيف غرب سهيل. البدء بالمشية داخل القرية." },
            { time: "09:30", description: "التجول في شوارع غرب سهيل الملونة. يشرح مرشدك رمزية جداريات البيوت والتقليد المعماري النوبي للألوان الزاهية ومعنى الزخارف التزيينية." },
            { time: "10:15", description: "زيارة بيت عائلة نوبية — اللقاء بالمضيفين والجلوس في الفناء التقليدي والتعرف على الحياة اليومية النوبية وتناول الشاي وربما الكركديه مع العائلة." },
            { time: "11:00", description: "المشي إلى مساحات المجتمع الصغيرة في القرية — مشاهدة الحرف اليدوية النوبية التقليدية والآلات الموسيقية والاستماع إلى مرشدك يشرح تاريخ التهجير النوبي والجهود المستمرة للحفاظ على الثقافة النوبية." },
            { time: "11:45", description: "التجول في السوق الحرفي الصغير للبضائع النوبية المصنوعة يدوياً — سلال منسوجة ومجوهرات من الخرز وخزف وتوابل." },
            { time: "12:15", description: "العودة إلى رصيف الفلوكة والإبحار إلى كورنيش أسوان." },
            { time: "12:30", description: "الوصول إلى رصيف الكورنيش. نهاية الجولة." },
          ],
        },
      ],
    },
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
    minAge: 5,
    maxGroupSize: 12,
    availableTimes: ["08:00", "10:00"],
    meetingPoint: {
      en: "Aswan High Dam area, south side. Your guide will meet you and arrange the boat across to the temple island.",
      ar: "منطقة السد العالي الأسواني، الجهة الجنوبية. سيلتقي بك مرشدك ويرتب القارب للعبور إلى جزيرة المعابد.",
    },
    accessibility: {
      en: "The temples are reached by boat. Involves walking on sandy and uneven ground. Beit El-Wali has low doorways. Not suitable for wheelchairs.",
      ar: "يُوصل إلى المعابد بالقارب. تتضمن المشي على أرض رملية وغير مستوية. في بيت الولي مداخل منخفضة. غير مناسب لكراسي الحركة.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun hat and sunscreen", "Water bottle", "Camera"],
      ar: ["حذاء مريح للمشي", "قبعة للشمس وكريم واقٍ", "زجاجة ماء", "كاميرا"],
    },
    importantInfo: {
      en: [
        "Hotel pickup is not included; travel to the Aswan High Dam area independently.",
        "The temples are on an island in Lake Nasser reached by boat — the boat ride is included.",
        "Entrance fees are included in the tour price.",
        "The temples are rarely crowded — you may have the site almost to yourselves.",
      ],
      ar: [
        "الاستقبال من الفندق غير مشمول؛ توجه بشكل مستقل إلى منطقة السد العالي الأسواني.",
        "المعابد على جزيرة في بحيرة ناصر يُوصل إليها بالقارب — رحلة القارب مشمولة.",
        "رسوم الدخول مشمولة في سعر الجولة.",
        "المعابد نادراً ما تكون مزدحمة — قد تكون الموقع شبه ملك لك وحدك.",
      ],
    },
    highlights: [
      "Visit the grand Roman-era Temple of Kalabasha",
      "Explore the rock-cut Temple of Beit El-Wali with its vivid reliefs",
      "See the elegant Kertassi kiosk on Lake Nasser",
      "Learn about the UNESCO temple relocation project",
      "Boat ride across Lake Nasser included",
    ],
    includes: ["Guide", "Boat ride", "Entrance fees"],
    excludes: ["Hotel pickup", "Meals", "Tips"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Three Temples on the Lake — A Half-Day in Nubia",
          description:
            "This half-day tour visits one of the most concentrated and least-visited groups of ancient temples in Egypt — three structures from three different eras gathered on a single promontory above the waters of Lake Nasser, just south of the Aswan High Dam. Their presence here is itself a story: all three were dismantled and relocated from their original sites in the early 1960s, before the rising waters of the new lake swallowed the Nubian valley forever. The boat crossing from the dam to the temple island takes only a few minutes, but the approach across the lake — with the great wall of the dam behind you and the open desert stretching in every direction — is a quietly powerful introduction to the landscape of Lake Nasser. The Temple of Kalabasha dominates the site: a large, well-preserved Greco-Roman temple dedicated to the Nubian solar deity Mandulis, built in the reign of Augustus and decorated in a style that mixes Egyptian pharaonic convention with Hellenistic detail.",
          steps: [
            { time: "08:00", description: "Meet your guide at the Aswan High Dam south side. Brief orientation before boarding the boat." },
            { time: "08:15", description: "Short boat crossing to the Kalabasha temple island on Lake Nasser." },
            { time: "08:30", description: "Guided tour of the Temple of Kalabasha — enter through the pylon, walk through the open courtyard and hypostyle hall, and reach the inner sanctuary. Your guide explains the Nubian god Mandulis and the temple's unique Greco-Roman building style." },
            { time: "09:30", description: "Move to Beit El-Wali. Enter the rock-cut temple carved in the reign of Ramses II. Examine the dramatically colored battle reliefs in the forecourt — Ramses charging enemy armies in his chariot — and the more intimate painted inner chambers." },
            { time: "10:15", description: "Visit the Kertassi kiosk — a small open-columned structure of great elegance, dedicated to Hathor and Isis, with views across the still waters of the lake." },
            { time: "10:45", description: "Free time on the promontory — walk to the water's edge, photograph the temples from different angles, and absorb the extraordinary silence of this rarely visited corner of Egypt." },
            { time: "11:15", description: "Board the boat for the return crossing." },
            { time: "11:30", description: "Arrive back at the High Dam area. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "ثلاثة معابد على البحيرة — نصف يوم في النوبة",
          description:
            "تزور هذه الجولة نصف اليوم واحدة من أكثر مجموعات المعابد القديمة تركزاً وأقلها زيارةً في مصر — ثلاثة منشآت من ثلاثة عهود مختلفة مجمعة على رأس جرف واحد فوق مياه بحيرة ناصر، جنوب السد العالي الأسواني مباشرةً. وجودها هنا هو نفسه قصة: فُكّكت جميعها وأُعيد تشييدها من مواقعها الأصلية في مطلع الستينيات، قبل أن تبتلع مياه البحيرة الجديدة الوادي النوبي إلى الأبد. عبور القارب من السد إلى جزيرة المعابد لا يأخذ إلا دقائق معدودة، لكن الاقتراب عبر البحيرة — مع الجدار العظيم للسد خلفك والصحراء المفتوحة تمتد في كل الاتجاهات — مقدمة هادئة لكنها قوية لمشهد بحيرة ناصر.",
          steps: [
            { time: "08:00", description: "التقاء مرشدك عند الجهة الجنوبية للسد العالي الأسواني. توجيه موجز قبل الصعود إلى القارب." },
            { time: "08:15", description: "عبور قصير بالقارب إلى جزيرة معبد كلابشة على بحيرة ناصر." },
            { time: "08:30", description: "جولة مصحوبة بمرشد في معبد كلابشة — الدخول عبر البرج والمشي في الفناء المكشوف وقاعة الأعمدة والوصول إلى الحرم الداخلي. يشرح مرشدك الإله النوبي ماندوليس والأسلوب المعماري الفريد لبناء المعبد اليوناني الروماني." },
            { time: "09:30", description: "الانتقال إلى بيت الولي. الدخول إلى المعبد المنحوت في الصخر في عهد رمسيس الثاني. فحص نقوش المعارك الملونة بشكل درامي في الفناء الأمامي — رمسيس يهجم الجيوش المعادية في مركبته — والغرف الداخلية المطلية الأكثر خصوصية." },
            { time: "10:15", description: "زيارة كشك قرتاسي — منشأة أعمدة صغيرة مفتوحة ذات أناقة بالغة، مكرسة لحتحور وإيزيس، مع إطلالات على المياه الهادئة للبحيرة." },
            { time: "10:45", description: "وقت حر على رأس الجرف — المشي إلى حافة الماء وتصوير المعابد من زوايا مختلفة واستيعاب الصمت الاستثنائي لهذا الركن النادر الزيارة من مصر." },
            { time: "11:15", description: "الصعود إلى القارب للعبور العائد." },
            { time: "11:30", description: "الوصول إلى منطقة السد العالي. نهاية الجولة." },
          ],
        },
      ],
    },
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
    minAge: 5,
    maxGroupSize: 15,
    availableTimes: ["07:00"],
    meetingPoint: {
      en: "Your hotel lobby in Aswan. The guide and vehicle will collect you for the drive north.",
      ar: "بهو فندقك في أسوان. سيستقبلك المرشد والسيارة للقيادة شمالاً.",
    },
    accessibility: {
      en: "Both temples involve walking on uneven ancient paving. Edfu has a horse-carriage approach. Not suitable for guests with severe mobility issues.",
      ar: "يتضمن كلا المعبدين المشي على بلاط قديم غير مستوٍ. في إدفو مدخل بعربة تجرها خيول. غير مناسب لمن يعانون من صعوبات حركة شديدة.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun hat and sunscreen", "Water bottle", "Camera", "Light jacket for the early morning drive"],
      ar: ["حذاء مريح للمشي", "قبعة للشمس وكريم واقٍ", "زجاجة ماء", "كاميرا", "جاكيت خفيف للقيادة في الصباح الباكر"],
    },
    importantInfo: {
      en: [
        "Hotel pickup from central Aswan is included.",
        "The horse-drawn carriage to Edfu Temple is part of the local experience and is included.",
        "Entrance fees to both temples are included.",
        "Lunch is not included — your guide can recommend local restaurants in Edfu or Kom Ombo.",
      ],
      ar: [
        "الاستقبال من الفندق في وسط أسوان مشمول.",
        "العربة التي تجرها خيول إلى معبد إدفو جزء من التجربة المحلية ومشمولة.",
        "رسوم الدخول إلى كلا المعبدين مشمولة.",
        "الغداء غير مشمول — يمكن لمرشدك التوصية بمطاعم محلية في إدفو أو كوم أمبو.",
      ],
    },
    highlights: [
      "Visit the spectacular Temple of Horus at Edfu",
      "Explore the unique double temple at Kom Ombo",
      "See the mummified crocodiles on display",
      "Full-day guided excursion with hotel pickup",
      "Travel along the scenic Nile Valley",
    ],
    includes: ["Guide", "Hotel pickup and drop-off", "Entrance fees", "Transport"],
    excludes: ["Meals", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Temples of Horus & the Crocodile God",
          description:
            "This full-day tour follows the Nile north from Aswan to two of the river valley's most magnificent ancient temples. Both are regular stops on the Aswan-to-Luxor Nile cruise route, but visiting them by road from Aswan gives you the flexibility to spend more time at each site without the rushing of a ship's schedule. The Temple of Horus at Edfu is arguably the most complete ancient Egyptian temple in existence — so well preserved that its structural logic, from the entrance pylon through the successive courts and halls to the inner sanctuary, can be read almost like an architectural blueprint. Built between 237 and 57 BC in the Ptolemaic period, long after the pharaonic era had ended, it was constructed in the ancient style as a deliberate act of cultural preservation. The Temple of Kom Ombo, built on a curve of the Nile with the river visible through its columns, is unique for its perfect bilateral symmetry — two temples in one, dedicated to two gods, with every chamber, corridor, and staircase doubled.",
          steps: [
            { time: "07:00", description: "Hotel pickup in Aswan. Drive north along the Nile Valley road toward Kom Ombo." },
            { time: "08:30", description: "Arrive at Kom Ombo. Walk to the temple entrance with views of the Nile." },
            { time: "09:00", description: "Guided tour of the Temple of Kom Ombo — walk through the twin entrance pylon, explore the dual sanctuaries dedicated to Sobek and Haroeris, examine the carved medical instrument reliefs, and visit the Crocodile Museum displaying genuine ancient mummified crocodiles found at the site." },
            { time: "10:30", description: "Depart Kom Ombo. Continue north to Edfu." },
            { time: "11:30", description: "Arrive in Edfu. Board a traditional horse-drawn carriage for the short ride to the temple entrance — a quintessential Edfu experience." },
            { time: "12:00", description: "Guided tour of the Temple of Horus at Edfu — stand before the towering pylon decorated with reliefs of Ptolemy XII smiting enemies; walk through the open Festival Court; enter the magnificent Hypostyle Hall; proceed through the vestibule into the sanctuary where the original granite shrine of Horus still stands." },
            { time: "13:30", description: "Free time in Edfu. Lunch at your own expense at a local restaurant (your guide will recommend options)." },
            { time: "14:30", description: "Carriage ride back to the vehicle. Depart Edfu for the return journey to Aswan." },
            { time: "17:00", description: "Arrive back in Aswan. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "معابد حورس وإله التماسيح",
          description:
            "تتبع هذه الجولة اليومية النيل شمالاً من أسوان إلى اثنين من أكثر المعابد القديمة روعة في وادي النهر. كلاهما محطات منتظمة في مسار الرحلة النيلية من أسوان إلى الأقصر، لكن زيارتهما براً من أسوان تمنحك مرونة قضاء وقت أطول في كل موقع دون استعجال جدول السفينة. معبد حورس في إدفو هو على الأرجح المعبد المصري القديم الأكثر اكتمالاً الموجود — محفوظ بشكل جيد لدرجة يمكن قراءة منطقه المعماري، من برج المدخل عبر الساحات والقاعات المتتالية حتى الحرم الداخلي، كما لو كان مخطط معماري. معبد كوم أمبو، المبني على منحنى النيل مع رؤية النهر من خلال أعمدته، فريد في تناظره الثنائي التام — معبلان في واحد مكرسان لإلهين مع مضاعفة كل غرفة وممر ودرج.",
          steps: [
            { time: "07:00", description: "الاستقبال من الفندق في أسوان. القيادة شمالاً على طريق وادي النيل نحو كوم أمبو." },
            { time: "08:30", description: "الوصول إلى كوم أمبو. المشية إلى مدخل المعبد مع إطلالات على النيل." },
            { time: "09:00", description: "جولة مصحوبة بمرشد في معبد كوم أمبو — المشي عبر برج المدخل المزدوج واستكشاف الحرمين الداخليين المكرسين لسوبك وهارويريس وفحص نقوش الأدوات الطبية المنحوتة وزيارة متحف التماسيح الذي يعرض تماسيح قديمة محنطة حقيقية وُجدت في الموقع." },
            { time: "10:30", description: "المغادرة من كوم أمبو. الاستمرار شمالاً إلى إدفو." },
            { time: "11:30", description: "الوصول إلى إدفو. الصعود إلى عربة تقليدية تجرها خيول للرحلة القصيرة إلى مدخل المعبد — تجربة إدفو بامتياز." },
            { time: "12:00", description: "جولة مصحوبة بمرشد في معبد حورس بإدفو — الوقوف أمام البرج الشامخ المزين بنقوش بطليموس الثاني عشر وهو يدحر الأعداء؛ المشي عبر ساحة الأعياد المكشوفة؛ الدخول إلى قاعة الأعمدة الرائعة؛ المضي عبر الرواق إلى الحرم الداخلي حيث لا يزال ضريح حورس الجرانيتي الأصلي قائماً." },
            { time: "13:30", description: "وقت حر في إدفو. الغداء على نفقتك الخاصة في مطعم محلي (مرشدك سيوصي بخيارات)." },
            { time: "14:30", description: "رحلة العربة عودةً إلى السيارة. المغادرة من إدفو للعودة إلى أسوان." },
            { time: "17:00", description: "الوصول إلى أسوان. الانتقال إلى فندقك. نهاية الجولة." },
          ],
        },
      ],
    },
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
        "Works on 4G/LTE networks across Egypt including at all major tourist sites.",
        "Voice calls and SMS are not included.",
      ],
      ar: [
        "يُفعَّل eSIM رقمياً — لا يلزم تبديل بطاقة SIM فعلية.",
        "تأكد من أن هاتفك غير مقيد ومتوافق مع eSIM قبل الشراء.",
        "متوفر بخطط 7 و15 و30 يوماً.",
        "يعمل على شبكات 4G/LTE في جميع أنحاء مصر بما فيها جميع المواقع السياحية الكبرى.",
        "المكالمات الصوتية والرسائل النصية غير مشمولة.",
      ],
    },
    highlights: [
      "Mobile data coverage across Egypt",
      "No need to find a local SIM card",
      "Available in 7, 15, and 30-day plans",
      "Easy digital activation on your phone",
      "Works at all major Egyptian tourist sites",
    ],
    includes: ["eSIM data plan for selected duration"],
    excludes: ["Voice calls", "SMS"],
    itinerary: null,
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
    minAge: 8,
    maxGroupSize: 30,
    availableTimes: ["09:00"],
    meetingPoint: {
      en: "Aswan High Dam dock. Transfer from your Aswan hotel is included.",
      ar: "رصيف السد العالي الأسواني. الانتقال من فندقك في أسوان مشمول.",
    },
    accessibility: {
      en: "Cruise ships have stairs between decks. Shore excursions involve walking on sandy and rocky terrain. Not suitable for guests with severe mobility issues.",
      ar: "سفن الرحلات بها درج بين الأسطح. الرحلات البرية تتضمن المشي على تضاريس رملية وصخرية. غير مناسبة لمن يعانون من صعوبات حركة شديدة.",
    },
    whatToBring: {
      en: ["Light summer clothing", "Warmer layer for evenings", "Walking shoes", "High SPF sunscreen", "Binoculars (optional)", "Camera", "Personal medications"],
      ar: ["ملابس صيفية خفيفة", "طبقة أدفأ للأمسيات", "حذاء للمشي", "واقٍ من الشمس بعامل حماية عالٍ", "منظار (اختياري)", "كاميرا", "أدوية شخصية"],
    },
    importantInfo: {
      en: [
        "All meals are included throughout the 5-day cruise.",
        "Entrance fees to all sites visited are included.",
        "This is one of the most exclusive cruise experiences in Egypt — passenger numbers are very limited.",
        "Some temple sites on this itinerary are accessible only by Lake Nasser cruise — they cannot be visited any other way.",
      ],
      ar: [
        "جميع الوجبات مشمولة طوال رحلة الـ 5 أيام.",
        "رسوم الدخول إلى جميع المواقع المزارة مشمولة.",
        "هذه واحدة من أكثر تجارب الرحلات البحرية حصريةً في مصر — أعداد الركاب محدودة جداً.",
        "بعض مواقع المعابد في هذا البرنامج لا يمكن الوصول إليها إلا عبر رحلة بحيرة ناصر — لا يمكن زيارتها بأي طريقة أخرى.",
      ],
    },
    highlights: [
      "5-day all-inclusive cruise on Lake Nasser",
      "Visit Abu Simbel, Wadi el-Seboua, Dakka, and Amada temples",
      "Comfortable cabin accommodation onboard",
      "All meals and guided excursions included",
      "Exclusive access to rarely visited monuments",
    ],
    includes: ["Accommodation onboard", "All meals", "Guided excursions", "Entrance fees", "English-speaking guide"],
    excludes: ["International flights", "Travel insurance", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Aswan — Embarkation, Kalabasha & Beit El-Wali",
          description:
            "Your five-day Lake Nasser journey begins at the Aswan High Dam dock, where you'll board your intimate cruise ship and settle into your cabin. After a welcome lunch, the ship makes its first stop at the Kalabasha complex — three relocated temples gathered on a promontory above the lake's northern shore. The Temple of Kalabasha, one of the grandest Greco-Roman temples in Nubia, is your main focus, alongside the painted battle reliefs of Beit El-Wali and the elegant columns of the Kertassi kiosk.",
          steps: [
            { time: "09:00", description: "Hotel transfer to the Aswan High Dam embarkation dock." },
            { time: "10:00", description: "Board the Lake Nasser cruise ship and check in to your cabin." },
            { time: "12:00", description: "Welcome lunch onboard." },
            { time: "14:00", description: "Short transfer to the Kalabasha temple complex." },
            { time: "14:30", description: "Guided tour of the Temple of Kalabasha, Beit El-Wali, and the Kertassi kiosk." },
            { time: "17:00", description: "Return to ship. Sail south." },
            { time: "19:30", description: "Dinner onboard." },
          ],
        },
        {
          day: 2,
          title: "Wadi el-Seboua, Dakka & Maharraqa",
          description:
            "Today the ship visits three temples in a single remarkable morning — Wadi el-Seboua with its avenue of sphinxes and its extraordinary Christian-over-Egyptian painted overlay; the multi-era Temple of Dakka with its climbable pylon and lake views; and the small but exceptional Temple of Maharraqa, the southernmost ancient monument relocated for the UNESCO rescue operation, built in the Roman era and noteworthy for its unusual spiral staircase.",
          steps: [
            { time: "07:00", description: "Breakfast as the ship arrives at Wadi el-Seboua." },
            { time: "08:00", description: "Guided tour of the Temple of Wadi el-Seboua — sphinx avenue, pharaonic and Christian layers." },
            { time: "09:30", description: "Walk to the Temple of Dakka. Guided tour and optional pylon climb for views." },
            { time: "10:30", description: "Visit the Temple of Maharraqa — Roman period, unique spiral staircase." },
            { time: "11:30", description: "Return to ship. Sail south toward Amada." },
            { time: "13:00", description: "Lunch onboard." },
            { time: "15:00", description: "Afternoon at leisure on deck as the lake's immense desert landscape passes." },
            { time: "19:30", description: "Dinner onboard." },
          ],
        },
        {
          day: 3,
          title: "Amada & Derr Temples",
          description:
            "The ship reaches the temples of Amada and Derr — the oldest monuments on the lake. The Temple of Amada, built by Thutmose III and Amenhotep II, preserves the most vividly colored painted reliefs in Nubia, including two historically crucial texts that record actual events from the pharaohs' reigns. The Temple of Derr, a rock-cut structure from the time of Ramses II, adds another layer of 19th-dynasty grandeur before the afternoon passage toward Abu Simbel.",
          steps: [
            { time: "07:00", description: "Early breakfast as the ship arrives at Amada." },
            { time: "08:00", description: "Guided tour of the Temple of Amada — oldest temple on the lake, exceptional painted reliefs, historical inscriptions." },
            { time: "09:30", description: "Transfer to the Temple of Derr. Guided tour of Ramses II's rock-cut temple dedicated to Ra-Horakhty." },
            { time: "11:00", description: "Return to ship. Sail toward Abu Simbel." },
            { time: "13:00", description: "Lunch onboard." },
            { time: "16:00", description: "Arrive at Abu Simbel." },
            { time: "16:30", description: "First guided visit to the Great Temple of Ramses II and the Temple of Nefertari — the afternoon light is ideal." },
            { time: "18:30", description: "Return to ship. Gala dinner onboard." },
          ],
        },
        {
          day: 4,
          title: "Abu Simbel — Full Day & Sound and Light Show",
          description:
            "An entire day devoted to Abu Simbel — the undisputed highlight of any Lake Nasser cruise. The morning visit gives you the temples before the day-trip convoys from Aswan arrive. The afternoon is free to return independently, sit by the lake, or simply remain on the ship. As night falls, the Abu Simbel Sound and Light Show illuminates the temples in a dramatic performance narrating the story of Ramses II.",
          steps: [
            { time: "06:30", description: "Early morning visit to Abu Simbel — the temples are quiet and the light is extraordinary." },
            { time: "08:30", description: "Return to ship for breakfast." },
            { time: "10:00", description: "Optional second visit to the temples or free time on the ship." },
            { time: "13:00", description: "Lunch onboard." },
            { time: "15:00", description: "Afternoon at leisure — return to the temples, explore the village, or relax onboard." },
            { time: "20:00", description: "Abu Simbel Sound and Light Show — dramatic illumination of the temple facade and narration of Ramses II's story." },
            { time: "21:15", description: "Return to ship. Final evening onboard." },
          ],
        },
        {
          day: 5,
          title: "Abu Simbel Sunrise & Return to Aswan",
          description:
            "The final morning offers one last sunrise at Abu Simbel — one of the most moving sights in Egypt — before the ship makes the long return sail north to Aswan. The journey across the lake in reverse offers its own pleasures: the changing light on the water, the desert silence, and the growing anticipation of what comes next in your Egyptian adventure.",
          steps: [
            { time: "06:00", description: "Optional sunrise visit to Abu Simbel — the last and arguably the most beautiful light of the trip." },
            { time: "08:00", description: "Breakfast onboard." },
            { time: "09:00", description: "Depart Abu Simbel. The ship sails north across Lake Nasser." },
            { time: "13:00", description: "Lunch onboard during the return sail." },
            { time: "17:00", description: "Arrive at Aswan dock. Disembarkation." },
            { time: "17:30", description: "Transfer to your Aswan hotel or train station. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "أسوان — الصعود وكلابشة وبيت الولي",
          description:
            "تبدأ رحلتك على بحيرة ناصر الممتدة خمسة أيام عند رصيف السد العالي الأسواني، حيث ستصعد إلى سفينتك النيلية الحميمة وتستقر في كبينتك. بعد غداء الترحيب تتوقف السفينة في محطتها الأولى عند مجمع كلابشة — ثلاثة معابد منقولة مجمعة على رأس جرف فوق الشاطئ الشمالي للبحيرة.",
          steps: [
            { time: "09:00", description: "الانتقال من الفندق إلى رصيف صعود السد العالي الأسواني." },
            { time: "10:00", description: "الصعود إلى سفينة رحلات بحيرة ناصر وتسجيل الوصول في الكبينة." },
            { time: "12:00", description: "غداء الترحيب على متن السفينة." },
            { time: "14:00", description: "انتقال قصير إلى مجمع معابد كلابشة." },
            { time: "14:30", description: "جولة مصحوبة بمرشد في معبد كلابشة وبيت الولي وكشك قرتاسي." },
            { time: "17:00", description: "العودة إلى السفينة. الإبحار جنوباً." },
            { time: "19:30", description: "العشاء على متن السفينة." },
          ],
        },
        {
          day: 2,
          title: "وادي السبوع ودكة ومهرقة",
          description:
            "اليوم تزور السفينة ثلاثة معابد في صباح واحد رائع — وادي السبوع بطريق أبي الهول وطبقته المسيحية فوق المصرية الاستثنائية؛ ومعبد دكة متعدد العهود ببرجه الذي يمكن تسلقه وإطلالاته على البحيرة؛ ومعبد مهرقة الصغير لكن الاستثنائي، أبعد أثر منقول جنوباً في عملية الإنقاذ اليونسكوية، بُني في العصر الروماني ومشهور بدرجه الحلزوني الفريد.",
          steps: [
            { time: "07:00", description: "الإفطار مع وصول السفينة إلى وادي السبوع." },
            { time: "08:00", description: "جولة مصحوبة بمرشد في معبد وادي السبوع — طريق أبي الهول والطبقتان الفرعونية والمسيحية." },
            { time: "09:30", description: "المشية إلى معبد دكة. جولة مصحوبة بمرشد وتسلق البرج الاختياري للإطلالات." },
            { time: "10:30", description: "زيارة معبد مهرقة — العصر الروماني والدرج الحلزوني الفريد." },
            { time: "11:30", description: "العودة إلى السفينة. الإبحار جنوباً نحو عمادة." },
            { time: "13:00", description: "الغداء على متن السفينة." },
            { time: "15:00", description: "بعد الظهر حر على السطح مع مرور المشهد الصحراوي الهائل للبحيرة." },
            { time: "19:30", description: "العشاء على متن السفينة." },
          ],
        },
        {
          day: 3,
          title: "معابد عمادة ودر",
          description:
            "تصل السفينة إلى معابد عمادة ودر — أقدم الآثار على البحيرة. معبد عمادة المبني في عهد تحتمس الثالث وأمنحوتب الثاني يحفظ أكثر النقوش الملونة حيوية في النوبة، بما فيها نصان تاريخيان بالغا الأهمية يسجلان أحداثاً حقيقية من عهود الفراعنة. معبد دَر المنحوت في الصخر من عهد رمسيس الثاني يضيف طبقة من فخامة الأسرة التاسعة عشرة قبل المرور بعد الظهر نحو أبو سمبل.",
          steps: [
            { time: "07:00", description: "إفطار مبكر مع وصول السفينة إلى عمادة." },
            { time: "08:00", description: "جولة مصحوبة بمرشد في معبد عمادة — أقدم معبد على البحيرة، نقوش ملونة استثنائية، كتابات تاريخية." },
            { time: "09:30", description: "الانتقال إلى معبد دَر. جولة مصحوبة بمرشد في معبد رمسيس الثاني المنحوت في الصخر والمكرس لرع-حوراختي." },
            { time: "11:00", description: "العودة إلى السفينة. الإبحار نحو أبو سمبل." },
            { time: "13:00", description: "الغداء على متن السفينة." },
            { time: "16:00", description: "الوصول إلى أبو سمبل." },
            { time: "16:30", description: "أول زيارة مصحوبة بمرشد لمعبد رمسيس الثاني الكبير ومعبد نفرتاري — ضوء بعد الظهر مثالي." },
            { time: "18:30", description: "العودة إلى السفينة. عشاء الغالا على متن السفينة." },
          ],
        },
        {
          day: 4,
          title: "أبو سمبل — يوم كامل وعرض الصوت والضوء",
          description:
            "يوم كامل مكرس لأبو سمبل — أبرز نقطة بلا منازع في أي رحلة على بحيرة ناصر. الزيارة الصباحية تمنحك المعابد قبل وصول قوافل الرحلات اليومية من أسوان. بعد الظهر حر للعودة بشكل مستقل أو الجلوس بجانب البحيرة أو البقاء على السفينة. مع حلول الليل يُضيء عرض الصوت والضوء في أبو سمبل المعابد في عرض درامي يروي قصة رمسيس الثاني.",
          steps: [
            { time: "06:30", description: "زيارة صباحية مبكرة لأبو سمبل — المعابد هادئة والضوء استثنائي." },
            { time: "08:30", description: "العودة إلى السفينة للإفطار." },
            { time: "10:00", description: "زيارة ثانية اختيارية للمعابد أو وقت حر على السفينة." },
            { time: "13:00", description: "الغداء على متن السفينة." },
            { time: "15:00", description: "بعد الظهر حر — العودة إلى المعابد أو استكشاف القرية أو الاسترخاء على متن السفينة." },
            { time: "20:00", description: "عرض الصوت والضوء في أبو سمبل — إضاءة درامية لواجهة المعبد وروايةً لقصة رمسيس الثاني." },
            { time: "21:15", description: "العودة إلى السفينة. المساء الأخير على متن السفينة." },
          ],
        },
        {
          day: 5,
          title: "شروق الشمس في أبو سمبل والعودة إلى أسوان",
          description:
            "يقدم الصباح الأخير شروق شمس أخير في أبو سمبل — من أكثر المشاهد تأثيراً في مصر — قبل أن تشق السفينة طريقها في الإبحار الطويل عائدةً شمالاً إلى أسوان. الرحلة عبر البحيرة في الاتجاه المعاكس تقدم متعتها الخاصة: الضوء المتغير على المياه وصمت الصحراء وتصاعد الترقب لما ينتظرك في مغامرتك المصرية.",
          steps: [
            { time: "06:00", description: "زيارة شروق الشمس الاختيارية لأبو سمبل — الضوء الأخير وربما الأجمل في الرحلة." },
            { time: "08:00", description: "الإفطار على متن السفينة." },
            { time: "09:00", description: "المغادرة من أبو سمبل. تبحر السفينة شمالاً عبر بحيرة ناصر." },
            { time: "13:00", description: "الغداء على متن السفينة أثناء رحلة العودة." },
            { time: "17:00", description: "الوصول إلى رصيف أسوان. تسجيل المغادرة." },
            { time: "17:30", description: "الانتقال إلى فندقك في أسوان أو محطة القطار. نهاية الجولة." },
          ],
        },
      ],
    },
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
    minAge: 3,
    maxGroupSize: 8,
    availableTimes: ["08:00", "10:00", "14:00", "16:00", "17:30"],
    meetingPoint: {
      en: "Aswan Corniche felucca dock, in front of the Sofitel Legend Old Cataract Hotel. Your captain will be waiting by the felucca.",
      ar: "رصيف الفلوكة على كورنيش أسوان، أمام فندق سوفيتيل ليجند أولد كتاراكت. ربان القارب بانتظارك بجانب الفلوكة.",
    },
    accessibility: {
      en: "Boarding the felucca requires stepping down carefully from the dock into a low-seated boat. Not suitable for guests with significant mobility issues. Life jackets available.",
      ar: "يتطلب الصعود إلى الفلوكة النزول بحذر من الرصيف إلى قارب منخفض المقاعد. غير مناسب لمن يعانون من صعوبات حركة كبيرة. سترات النجاة متوفرة.",
    },
    whatToBring: {
      en: ["Sun hat and sunscreen", "Light jacket for afternoon or evening departures", "Camera", "Water bottle"],
      ar: ["قبعة للشمس وكريم واقٍ", "جاكيت خفيف لانطلاقات ما بعد الظهر أو المساء", "كاميرا", "زجاجة ماء"],
    },
    importantInfo: {
      en: [
        "Hotel pickup is not included; make your own way to the Corniche dock.",
        "Life jackets are provided onboard.",
        "The sunset departure (17:30) is particularly recommended for its golden light on the Nile and the West Bank dunes.",
        "The tour operates in most weather conditions; in case of strong wind the captain will advise.",
      ],
      ar: [
        "الاستقبال من الفندق غير مشمول؛ توجه بنفسك إلى رصيف الكورنيش.",
        "سترات النجاة متوفرة على متن القارب.",
        "انطلاق الغروب (17:30) موصى به بشكل خاص لضوئه الذهبي على النيل وكثبان الضفة الغربية.",
        "الجولة تعمل في معظم أحوال الطقس؛ في حالة الرياح القوية سينصحك الربان.",
      ],
    },
    highlights: [
      "Relaxing felucca ride on the Nile in Aswan",
      "Pass by Elephantine Island and the Aga Khan Mausoleum",
      "Scenic views of the West Bank desert cliffs",
      "Traditional Egyptian sailing experience",
      "Perfect for sunset or morning outings",
    ],
    includes: ["Felucca ride", "Sailor/guide"],
    excludes: ["Hotel pickup", "Tips"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "An Hour on the Nile — Aswan's Most Peaceful Experience",
          description:
            "The felucca — a traditional wooden sailboat with a single lateen sail — is the oldest form of transport on the Nile and one of the most enduring images of Egypt. Aswan is its spiritual home: the river here is broad and calm, free of the busy cargo traffic that dominates stretches further north, and the surrounding landscape — Elephantine Island to the west, the great sand dunes of the West Bank beyond, and the pale desert hills behind the city — is among the most beautiful on the entire Nile. This one-hour tour makes no grand promises. It offers the simple, profound pleasure of moving quietly across water in the open air, in a vessel that has not essentially changed in 3,000 years. Your experienced captain will read the wind and navigate you past the most scenic stretches of Aswan's waterfront, pointing out landmarks and offering commentary — or simply letting the silence of the river speak for itself.",
          steps: [
            { time: "17:30", description: "Meet your captain at the Corniche felucca dock. Board the felucca — step down carefully into the low-sided boat and take your seat on the cushioned benches." },
            { time: "17:35", description: "The sail fills and the felucca moves out into the Nile. The sounds of the city fade. Your captain steers south, parallel to the Corniche." },
            { time: "17:45", description: "Pass the southern end of Elephantine Island — your captain explains its history as the oldest inhabited site in Aswan, dating back to predynastic Egypt. Look across to the Nubian villages on the island's western shore." },
            { time: "18:00", description: "The felucca rounds the northern tip of Elephantine and you see the Aga Khan Mausoleum on its hilltop above the West Bank — the marble dome glowing in the late afternoon sun. Your captain shares the story of the Aga Khan III, who fell in love with Aswan and chose to be buried here." },
            { time: "18:15", description: "The boat drifts back south with the current, the great sand dunes of the West Bank catching the last of the golden light. This is the moment most people want to photograph." },
            { time: "18:30", description: "Return to the Corniche dock. Disembark. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "ساعة على النيل — أكثر تجارب أسوان هدوءاً",
          description:
            "الفلوكة — قارب خشبي تقليدي بشراع لاتيني واحد — هي أقدم وسائل النقل على النيل وواحدة من أكثر صور مصر خلوداً في الذاكرة. أسوان هي موطنها الروحي: النهر هنا واسع وهادئ، خالٍ من حركة الشحن الكثيفة التي تسيطر على مقاطع أبعد شمالاً، والمشهد المحيط — جزيرة الفيلة غرباً وكثبان الضفة الغربية الرملية الكبرى خلفها والتلال الصحراوية الشاحبة وراء المدينة — من بين أجمل المشاهد على النيل كله. هذه الجولة الممتدة ساعة واحدة لا تُقدم وعوداً كبرى. تقدم المتعة البسيطة العميقة للتحرك بهدوء عبر المياه في الهواء الطلق، على متن سفينة لم تتغير في جوهرها منذ 3000 عام.",
          steps: [
            { time: "17:30", description: "التقاء ربان قاربك في رصيف الفلوكة على الكورنيش. الصعود إلى الفلوكة — انزل بحذر إلى القارب المنخفض الجوانب وخذ مقعدك على المقاعد المبطنة." },
            { time: "17:35", description: "يمتلئ الشراع وتتحرك الفلوكة إلى النيل. تتلاشى أصوات المدينة. يتجه ربانك جنوباً موازياً للكورنيش." },
            { time: "17:45", description: "المرور بالطرف الجنوبي لجزيرة الفيلة — يشرح ربانك تاريخها كأقدم موقع مأهول في أسوان يعود إلى مصر ما قبل الأسري. انظر إلى القرى النوبية على الشاطئ الغربي للجزيرة." },
            { time: "18:00", description: "تدور الفلوكة عند الطرف الشمالي للفيلة وترى مقبرة الآغا خان على قمة تلتها فوق الضفة الغربية — القبة الرخامية تتوهج في ضوء أواخر بعد الظهر. يشارك ربانك قصة الآغا خان الثالث الذي وقع في حب أسوان واختار أن يُدفن فيها." },
            { time: "18:15", description: "ينجرف القارب جنوباً مع التيار، وكثبان الضفة الغربية تلتقط آخر الضوء الذهبي. هذه هي اللحظة التي يريد معظم الناس تصويرها." },
            { time: "18:30", description: "العودة إلى رصيف الكورنيش. النزول من القارب. نهاية الجولة." },
          ],
        },
      ],
    },
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
    minAge: 5,
    maxGroupSize: 16,
    availableTimes: ["08:00"],
    meetingPoint: {
      en: "Your hotel lobby in Aswan on Day 1. The guide will meet you to begin the tour.",
      ar: "بهو فندقك في أسوان في اليوم الأول. سيلتقي بك المرشد لبدء الجولة.",
    },
    accessibility: {
      en: "This tour involves significant walking at multiple sites. Some locations have uneven terrain, sand, and stairs. Not suitable for guests with severe mobility issues.",
      ar: "تتضمن هذه الجولة مشياً كبيراً في مواقع متعددة. بعض المواقع بها تضاريس غير مستوية ورمال ودرج. غير مناسبة لمن يعانون من صعوبات حركة شديدة.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes for all 8 days", "Sun protection throughout", "Light layers for cooler Cairo evenings", "Camera", "Power adapter (Egypt uses Type C/F plugs)", "Personal medications", "Travel insurance documents"],
      ar: ["حذاء مريح للمشي لكامل الـ 8 أيام", "حماية من الشمس طوال الوقت", "طبقات خفيفة لأمسيات القاهرة الأكثر برودة", "كاميرا", "مهايئ طاقة (مصر تستخدم قوابس من النوع C/F)", "أدوية شخصية", "وثائق تأمين السفر"],
    },
    importantInfo: {
      en: [
        "All domestic transport is included, including the flight from Luxor to Cairo.",
        "7 nights accommodation is included (2 in Aswan, 2 in Luxor, 3 in Cairo).",
        "All meals are included throughout the 8 days.",
        "International flights to and from Egypt are not included.",
        "Tipping for guides and drivers is customary and greatly appreciated.",
        "A valid passport is required at all sites and for the domestic flight.",
      ],
      ar: [
        "جميع وسائل النقل الداخلية مشمولة، بما فيها الرحلة الجوية من الأقصر إلى القاهرة.",
        "إقامة 7 ليالٍ مشمولة (ليلتان في أسوان وليلتان في الأقصر و3 ليالٍ في القاهرة).",
        "جميع الوجبات مشمولة طوال الـ 8 أيام.",
        "الرحلات الجوية الدولية من وإلى مصر غير مشمولة.",
        "البقشيش للمرشدين والسائقين متعارف عليه وموضع تقدير كبير.",
        "جواز سفر ساري المفعول مطلوب في جميع المواقع وللرحلة الداخلية.",
      ],
    },
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
    itinerary: {
      en: [
        {
          day: 1,
          title: "Arrival in Aswan & Philae Temple",
          description:
            "Your Egyptian adventure begins in Aswan, Egypt's southernmost major city, where the Nile runs wide and clear between granite boulders and golden desert hills. You'll be met at your hotel by your guide and given an orientation to the days ahead. The afternoon is spent at the Temple of Philae — one of Egypt's most beautiful ancient sanctuaries, perched on an island in the Nile and dedicated to the goddess Isis. In the evening, settle into your hotel and enjoy Aswan's warm, relaxed atmosphere.",
          steps: [
            { time: "09:00", description: "Meet your guide at your Aswan hotel. Orientation briefing for the full 8-day itinerary." },
            { time: "10:00", description: "Drive to the Shellal boat dock." },
            { time: "10:15", description: "Motorboat to Philae Island." },
            { time: "10:30", description: "Guided tour of the Temple of Isis at Philae — explore the great pylon, the birth house, the colonnaded forecourt, and the inner sanctuary." },
            { time: "12:30", description: "Return to Aswan. Lunch included." },
            { time: "14:00", description: "Free afternoon to explore the Aswan Corniche, the local souk, or rest at the hotel." },
            { time: "19:30", description: "Dinner included." },
          ],
        },
        {
          day: 2,
          title: "Abu Simbel Day Trip",
          description:
            "An early start for the most dramatic day of the tour: the drive south across the desert to Abu Simbel, where the colossal temples of Ramses II and Nefertari await. Carved into the mountainside over 3,000 years ago and relocated in the 1960s to save them from Lake Nasser's rising waters, these temples represent one of humanity's greatest achievements in both art and engineering. Your guide brings their story to life before the return drive to Aswan.",
          steps: [
            { time: "04:00", description: "Hotel pickup for the pre-dawn convoy departure to Abu Simbel." },
            { time: "07:30", description: "Arrive at Abu Simbel." },
            { time: "08:00", description: "Guided tour of the Great Temple of Ramses II — the colossal facade statues, the hypostyle hall, and the inner sanctuary." },
            { time: "09:15", description: "Guided tour of the Temple of Nefertari." },
            { time: "10:00", description: "Free time at the site. Photography around the temples and lakeside." },
            { time: "10:30", description: "Depart Abu Simbel for the return drive to Aswan." },
            { time: "13:30", description: "Arrive in Aswan. Lunch included." },
            { time: "15:00", description: "Rest of day free in Aswan." },
            { time: "19:30", description: "Dinner included." },
          ],
        },
        {
          day: 3,
          title: "Aswan to Luxor via Kom Ombo & Edfu",
          description:
            "Today you travel north from Aswan to Luxor by road, stopping at two of the Nile Valley's most impressive temples along the way. At Kom Ombo, the extraordinary double temple dedicated to Sobek and Haroeris stands on a curve of the Nile. At Edfu, the magnificent Temple of Horus — the best-preserved ancient temple in Egypt — awaits behind towering pylon gates. Arrive in Luxor in the late afternoon and check in to your hotel.",
          steps: [
            { time: "07:00", description: "Breakfast at the hotel. Check out." },
            { time: "08:00", description: "Depart Aswan by private vehicle heading north." },
            { time: "09:30", description: "Arrive at Kom Ombo. Guided tour of the double temple and Crocodile Museum." },
            { time: "11:00", description: "Depart for Edfu." },
            { time: "12:00", description: "Arrive at Edfu. Horse-drawn carriage to the temple." },
            { time: "12:30", description: "Guided tour of the Temple of Horus at Edfu." },
            { time: "14:00", description: "Lunch included in Edfu." },
            { time: "15:00", description: "Depart Edfu and continue north to Luxor." },
            { time: "17:30", description: "Arrive in Luxor. Check in to hotel. Dinner included." },
          ],
        },
        {
          day: 4,
          title: "Luxor West Bank — Valley of the Kings & Hatshepsut",
          description:
            "Luxor's West Bank is the ancient burial ground of the pharaohs — a landscape of dry valleys and hidden tombs that remains one of the most extraordinary places on Earth. Today you'll visit the Valley of the Kings, the Mortuary Temple of Hatshepsut, and the Colossi of Memnon, with your guide unravelling the stories of the rulers buried beneath these hills.",
          steps: [
            { time: "07:00", description: "Breakfast at the hotel." },
            { time: "08:00", description: "Cross the Nile to the West Bank." },
            { time: "08:30", description: "Arrive at the Valley of the Kings. Visit three royal tombs with your guide." },
            { time: "10:30", description: "Drive to the Mortuary Temple of Hatshepsut at Deir el-Bahari." },
            { time: "11:00", description: "Guided tour of Hatshepsut's temple — the three colonnaded terraces, painted reliefs, and inner sanctum." },
            { time: "12:30", description: "Brief stop at the Colossi of Memnon." },
            { time: "13:00", description: "Return to Luxor. Lunch included." },
            { time: "15:00", description: "Afternoon free in Luxor — walk the East Bank corniche or visit the Luxor souk." },
            { time: "19:30", description: "Dinner included." },
          ],
        },
        {
          day: 5,
          title: "Luxor East Bank — Karnak & Luxor Temple, then Fly to Cairo",
          description:
            "The morning is devoted to Karnak — one of the greatest temple complexes ever built — before a visit to the smaller but magnificent Luxor Temple in the heart of the city. In the afternoon, transfer to Luxor Airport for the domestic flight to Cairo, where you'll spend the final three nights of the tour.",
          steps: [
            { time: "07:00", description: "Breakfast at the hotel." },
            { time: "08:00", description: "Transfer to Karnak Temple Complex." },
            { time: "08:30", description: "Guided tour of Karnak — the Avenue of Sphinxes, the Great Hypostyle Hall, the Sacred Lake, and the obelisks of Hatshepsut." },
            { time: "11:00", description: "Drive to Luxor Temple in the city center." },
            { time: "11:30", description: "Guided tour of Luxor Temple." },
            { time: "13:00", description: "Return to hotel. Check out. Lunch included." },
            { time: "15:30", description: "Transfer to Luxor Airport." },
            { time: "17:30", description: "Domestic flight to Cairo." },
            { time: "19:00", description: "Arrive in Cairo. Transfer to hotel. Dinner included." },
          ],
        },
        {
          day: 6,
          title: "Pyramids of Giza, Sphinx & Grand Egyptian Museum",
          description:
            "The defining day of any visit to Egypt: the Pyramids of Giza and the Grand Egyptian Museum. Stand before the last surviving wonder of the ancient world, explore the sphinx, and then spend the afternoon in the world's largest archaeological museum, where Tutankhamun's complete golden treasures are displayed for the first time in their entirety.",
          steps: [
            { time: "07:00", description: "Breakfast at the hotel." },
            { time: "08:00", description: "Transfer to the Giza Plateau." },
            { time: "08:30", description: "Guided tour of the Pyramids of Khufu, Khafre, and Menkaure. Visit the Great Sphinx and the Valley Temple." },
            { time: "11:00", description: "Optional camel or horse ride around the plateau (at extra cost)." },
            { time: "12:00", description: "Transfer to the Grand Egyptian Museum." },
            { time: "12:30", description: "Lunch included at the museum's restaurant." },
            { time: "13:30", description: "Guided tour of the Grand Egyptian Museum — the Royal Mummies Hall, the complete Tutankhamun collection, and highlights of the permanent galleries." },
            { time: "16:30", description: "Return to Cairo hotel. Evening free to explore Zamalek or the Khan el-Khalili bazaar." },
            { time: "19:30", description: "Dinner included." },
          ],
        },
        {
          day: 7,
          title: "Cairo — Islamic & Coptic Heritage",
          description:
            "Cairo's historic layers extend far beyond the pharaonic era. Today you'll explore the city's remarkable Islamic and Coptic heritage — from the medieval minarets of Islamic Cairo to the ancient Christian churches of Old Cairo that predate Islam by centuries.",
          steps: [
            { time: "08:00", description: "Breakfast at the hotel." },
            { time: "09:00", description: "Transfer to Islamic Cairo." },
            { time: "09:30", description: "Guided tour of the Citadel of Saladin and the Muhammad Ali Mosque — panoramic views across Cairo from the hilltop fortress." },
            { time: "11:00", description: "Walk through the medieval Khan el-Khalili bazaar and the streets of Islamic Cairo — Al-Muizz Street's historic mosques and monuments." },
            { time: "13:00", description: "Lunch included in a traditional restaurant in Islamic Cairo." },
            { time: "14:30", description: "Transfer to Coptic Cairo (Old Cairo)." },
            { time: "15:00", description: "Guided tour of the Coptic quarter — the Hanging Church (Al-Muallaqah), the Church of St. Sergius, the Ben Ezra Synagogue, and the Coptic Museum." },
            { time: "17:30", description: "Return to hotel. Evening free." },
            { time: "19:30", description: "Dinner included." },
          ],
        },
        {
          day: 8,
          title: "Cairo — Final Morning & Departure",
          description:
            "Your final morning in Egypt is free for any last-minute sightseeing or shopping before your transfer to Cairo International Airport. Your guide will accompany you to the airport and assist with check-in, closing the loop on an extraordinary eight-day journey through the greatest civilization the ancient world produced.",
          steps: [
            { time: "08:00", description: "Breakfast at the hotel." },
            { time: "09:00", description: "Free morning — optional visit to the Egyptian Museum in Tahrir Square (at your own expense), shopping in Zamalek, or relaxing at the hotel." },
            { time: "12:00", description: "Check out of hotel." },
            { time: "13:00", description: "Lunch included." },
            { time: "14:00", description: "Transfer to Cairo International Airport for your departure flight. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "الوصول إلى أسوان ومعبد فيلة",
          description:
            "تبدأ مغامرتك المصرية في أسوان، أقصى مدن مصر الكبرى جنوباً، حيث يجري النيل واسعاً وصافياً بين صخور الجرانيت والتلال الصحراوية الذهبية. سيستقبلك مرشدك في فندقك ويمنحك توجيهاً للأيام القادمة. يُقضى بعد الظهر في معبد فيلة — أحد أجمل الأحرام المصرية القديمة، جالساً على جزيرة في النيل ومكرساً للإلهة إيزيس.",
          steps: [
            { time: "09:00", description: "التقاء مرشدك في فندقك بأسوان. جلسة توجيه لبرنامج الـ 8 أيام الكامل." },
            { time: "10:00", description: "القيادة إلى رصيف قوارب شلال." },
            { time: "10:15", description: "القارب الصغير إلى جزيرة فيلة." },
            { time: "10:30", description: "جولة مصحوبة بمرشد في معبد إيزيس بفيلة — استكشاف البرج الكبير وبيت الميلاد والفناء المعمد والحرم الداخلي." },
            { time: "12:30", description: "العودة إلى أسوان. الغداء مشمول." },
            { time: "14:00", description: "بعد الظهر حر لاستكشاف كورنيش أسوان أو السوق المحلي أو الراحة في الفندق." },
            { time: "19:30", description: "العشاء مشمول." },
          ],
        },
        {
          day: 2,
          title: "رحلة يوم إلى أبو سمبل",
          description:
            "انطلاق مبكر ليوم الجولة الأكثر درامية: القيادة جنوباً عبر الصحراء إلى أبو سمبل حيث تنتظر المعابد الضخمة لرمسيس الثاني ونفرتاري. منحوتة في الجبل قبل أكثر من 3000 عام ونُقلت في الستينيات لإنقاذها من مياه بحيرة ناصر المتصاعدة، تمثل هذه المعابد أحد أعظم إنجازات الإنسانية في الفن والهندسة على حد سواء.",
          steps: [
            { time: "04:00", description: "الاستقبال من الفندق للمغادرة في قافلة ما قبل الفجر إلى أبو سمبل." },
            { time: "07:30", description: "الوصول إلى أبو سمبل." },
            { time: "08:00", description: "جولة مصحوبة بمرشد في معبد رمسيس الثاني الكبير — تماثيل الواجهة الضخمة وقاعة الأعمدة والحرم الداخلي." },
            { time: "09:15", description: "جولة مصحوبة بمرشد في معبد نفرتاري." },
            { time: "10:00", description: "وقت حر في الموقع. التصوير حول المعابد وجانب البحيرة." },
            { time: "10:30", description: "المغادرة من أبو سمبل للقيادة العائدة إلى أسوان." },
            { time: "13:30", description: "الوصول إلى أسوان. الغداء مشمول." },
            { time: "15:00", description: "بقية اليوم حر في أسوان." },
            { time: "19:30", description: "العشاء مشمول." },
          ],
        },
        {
          day: 3,
          title: "من أسوان إلى الأقصر عبر كوم أمبو وإدفو",
          description:
            "اليوم تسافر شمالاً من أسوان إلى الأقصر براً، متوقفاً عند اثنين من أكثر معابد وادي النيل إثارة للإعجاب على الطريق. في كوم أمبو، يقف المعبد المزدوج الاستثنائي المكرس لسوبك وهارويريس على منحنى النيل. وفي إدفو ينتظرك معبد حورس الرائع — أفضل المعابد القديمة المحفوظة في مصر — خلف بوابات أبراج شامخة.",
          steps: [
            { time: "07:00", description: "الإفطار في الفندق. تسجيل المغادرة." },
            { time: "08:00", description: "المغادرة من أسوان بسيارة خاصة متجهاً شمالاً." },
            { time: "09:30", description: "الوصول إلى كوم أمبو. جولة مصحوبة بمرشد في المعبد المزدوج ومتحف التماسيح." },
            { time: "11:00", description: "المغادرة إلى إدفو." },
            { time: "12:00", description: "الوصول إلى إدفو. عربة تجرها خيول إلى المعبد." },
            { time: "12:30", description: "جولة مصحوبة بمرشد في معبد حورس بإدفو." },
            { time: "14:00", description: "الغداء مشمول في إدفو." },
            { time: "15:00", description: "المغادرة من إدفو والاستمرار شمالاً إلى الأقصر." },
            { time: "17:30", description: "الوصول إلى الأقصر. تسجيل الوصول في الفندق. العشاء مشمول." },
          ],
        },
        {
          day: 4,
          title: "الضفة الغربية للأقصر — وادي الملوك وحتشبسوت",
          description:
            "الضفة الغربية للأقصر هي مقبرة الفراعنة القديمة — مشهد من الوديان الجافة والمقابر المخفية لا يزال واحداً من أكثر الأماكن استثنائية على وجه الأرض. اليوم ستزور وادي الملوك ومعبد حتشبسوت الجنائزي وتمثالي ممنون، مع مرشدك الذي يكشف قصص الحكام المدفونين تحت هذه التلال.",
          steps: [
            { time: "07:00", description: "الإفطار في الفندق." },
            { time: "08:00", description: "العبور إلى الضفة الغربية." },
            { time: "08:30", description: "الوصول إلى وادي الملوك. زيارة ثلاثة مقابر ملكية مع مرشدك." },
            { time: "10:30", description: "القيادة إلى معبد حتشبسوت الجنائزي في الدير البحري." },
            { time: "11:00", description: "جولة مصحوبة بمرشد في معبد حتشبسوت — الأروقة المعمدة الثلاثة والنقوش المطلية والحرم الداخلي." },
            { time: "12:30", description: "توقف قصير عند تمثالي ممنون." },
            { time: "13:00", description: "العودة إلى الأقصر. الغداء مشمول." },
            { time: "15:00", description: "بعد الظهر حر في الأقصر — التجول على كورنيش الضفة الشرقية أو زيارة سوق الأقصر." },
            { time: "19:30", description: "العشاء مشمول." },
          ],
        },
        {
          day: 5,
          title: "الضفة الشرقية للأقصر — الكرنك ومعبد الأقصر ثم السفر إلى القاهرة",
          description:
            "يُكرَّس الصباح للكرنك — أحد أعظم مجمعات المعابد التي بُنيت على الإطلاق — ثم زيارة معبد الأقصر الأصغر حجماً لكن الرائع في قلب المدينة. بعد الظهر الانتقال إلى مطار الأقصر للرحلة الداخلية إلى القاهرة حيث ستقضي الليالي الثلاث الأخيرة من الجولة.",
          steps: [
            { time: "07:00", description: "الإفطار في الفندق." },
            { time: "08:00", description: "الانتقال إلى مجمع معابد الكرنك." },
            { time: "08:30", description: "جولة مصحوبة بمرشد في الكرنك — طريق أبي الهول وقاعة الأعمدة الكبرى وبحيرة السحاب ومسلات حتشبسوت." },
            { time: "11:00", description: "القيادة إلى معبد الأقصر في مركز المدينة." },
            { time: "11:30", description: "جولة مصحوبة بمرشد في معبد الأقصر." },
            { time: "13:00", description: "العودة إلى الفندق. تسجيل المغادرة. الغداء مشمول." },
            { time: "15:30", description: "الانتقال إلى مطار الأقصر." },
            { time: "17:30", description: "الرحلة الداخلية إلى القاهرة." },
            { time: "19:00", description: "الوصول إلى القاهرة. الانتقال إلى الفندق. العشاء مشمول." },
          ],
        },
        {
          day: 6,
          title: "أهرامات الجيزة وأبو الهول والمتحف المصري الكبير",
          description:
            "اليوم الحاسم في أي زيارة لمصر: أهرامات الجيزة والمتحف المصري الكبير. قف أمام آخر عجائب الدنيا السبع الباقية، استكشف أبو الهول، ثم أمضِ بعد الظهر في أكبر متحف أثري في العالم حيث تُعرض كنوز توتنخامون الذهبية الكاملة للمرة الأولى في مجملها.",
          steps: [
            { time: "07:00", description: "الإفطار في الفندق." },
            { time: "08:00", description: "الانتقال إلى هضبة الجيزة." },
            { time: "08:30", description: "جولة مصحوبة بمرشد على أهرامات خوفو وخفرع ومنقرع. زيارة أبو الهول الكبير ومعبد الوادي." },
            { time: "11:00", description: "ركوب جمل أو حصان اختياري حول الهضبة (بتكلفة إضافية)." },
            { time: "12:00", description: "الانتقال إلى المتحف المصري الكبير." },
            { time: "12:30", description: "الغداء مشمول في مطعم المتحف." },
            { time: "13:30", description: "جولة مصحوبة بمرشد في المتحف المصري الكبير — قاعة المومياوات الملكية ومجموعة توتنخامون الكاملة وأبرز المقتنيات الدائمة." },
            { time: "16:30", description: "العودة إلى فندق القاهرة. المساء حر لاستكشاف الزمالك أو خان الخليلي." },
            { time: "19:30", description: "العشاء مشمول." },
          ],
        },
        {
          day: 7,
          title: "القاهرة — التراث الإسلامي والقبطي",
          description:
            "تمتد الطبقات التاريخية للقاهرة إلى ما هو أبعد بكثير من العصر الفرعوني. اليوم ستستكشف التراث الإسلامي والقبطي الرائع للمدينة — من المآذن الوسيطة للقاهرة الإسلامية إلى الكنائس المسيحية القديمة في القاهرة القديمة التي تسبق الإسلام بقرون.",
          steps: [
            { time: "08:00", description: "الإفطار في الفندق." },
            { time: "09:00", description: "الانتقال إلى القاهرة الإسلامية." },
            { time: "09:30", description: "جولة مصحوبة بمرشد في قلعة صلاح الدين ومسجد محمد علي — إطلالات بانورامية على القاهرة من القلعة." },
            { time: "11:00", description: "التجول في سوق خان الخليلي الوسيطي وشوارع القاهرة الإسلامية — مساجد وآثار شارع المعز التاريخية." },
            { time: "13:00", description: "الغداء مشمول في مطعم تقليدي في القاهرة الإسلامية." },
            { time: "14:30", description: "الانتقال إلى القاهرة القبطية (مصر القديمة)." },
            { time: "15:00", description: "جولة مصحوبة بمرشد في الحي القبطي — الكنيسة المعلقة وكنيسة القديس سرجيوس وكنيس بن عزرا والمتحف القبطي." },
            { time: "17:30", description: "العودة إلى الفندق. المساء حر." },
            { time: "19:30", description: "العشاء مشمول." },
          ],
        },
        {
          day: 8,
          title: "القاهرة — الصباح الأخير والمغادرة",
          description:
            "صباحك الأخير في مصر حر لأي زيارة أخيرة أو تسوق قبل انتقالك إلى مطار القاهرة الدولي. سيرافقك مرشدك إلى المطار ويساعدك في الإجراءات، مُغلقاً دائرة رحلة استثنائية من ثمانية أيام عبر أعظم حضارة أنتجها العالم القديم.",
          steps: [
            { time: "08:00", description: "الإفطار في الفندق." },
            { time: "09:00", description: "صباح حر — زيارة اختيارية للمتحف المصري في ميدان التحرير (على نفقتك الخاصة) أو التسوق في الزمالك أو الاسترخاء في الفندق." },
            { time: "12:00", description: "تسجيل المغادرة من الفندق." },
            { time: "13:00", description: "الغداء مشمول." },
            { time: "14:00", description: "الانتقال إلى مطار القاهرة الدولي لرحلتك. نهاية الجولة." },
          ],
        },
      ],
    },
  },
];

export { cityData, toursData };