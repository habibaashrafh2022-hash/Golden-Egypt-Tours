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
    minAge: 5,
    maxGroupSize: 15,
    availableTimes: ["08:00", "09:00"],
    meetingPoint: {
      en: "Your hotel lobby in Alexandria, or the Alexandria train station if arriving from Cairo. Your guide will meet you with a sign.",
      ar: "بهو فندقك في الإسكندرية، أو محطة قطار الإسكندرية إذا كنت قادماً من القاهرة. سيلتقي بك مرشدك حاملاً لافتة.",
    },
    accessibility: {
      en: "The Catacombs of Kom el-Shoqafa involve descending a spiral staircase underground — not suitable for guests with claustrophobia or severe mobility issues. The Citadel and Bibliotheca are largely accessible.",
      ar: "تتطمن سراديب كوم الشقافة النزول عبر درج حلزوني تحت الأرض — غير مناسبة لمن يعانون من رهاب الأماكن الضيقة أو صعوبات حركة شديدة. قلعة قايتباي والبيبليوتيكا في معظمها يمكن الوصول إليهما.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Light jacket (the sea breeze can be cool)", "Sun hat and sunscreen", "Camera", "Water bottle"],
      ar: ["حذاء مريح للمشي", "جاكيت خفيف (قد تكون النسيم البحري بارداً)", "قبعة للشمس وكريم واقٍ", "كاميرا", "زجاجة ماء"],
    },
    importantInfo: {
      en: [
        "Hotel or port pickup within Alexandria is included.",
        "Lunch at a traditional Alexandrian seafood restaurant is included.",
        "Entrance fees to all four sites are included.",
        "The Catacombs are underground — those with claustrophobia or knee problems may find the spiral staircase challenging.",
        "The Bibliotheca Alexandrina may be closed on certain national holidays; your guide will advise if alternatives are needed.",
      ],
      ar: [
        "الاستقبال من الفندق أو الميناء داخل الإسكندرية مشمول.",
        "الغداء في مطعم مأكولات بحرية تقليدي إسكندراني مشمول.",
        "رسوم الدخول إلى المواقع الأربعة مشمولة.",
        "السراديب تحت الأرض — من يعانون من رهاب الأماكن الضيقة أو مشاكل في الركبة قد يجدون الدرج الحلزوني صعباً.",
        "قد تكون مكتبة الإسكندرية مغلقة في بعض الأعياد الوطنية؛ مرشدك سينصحك إذا كانت بدائل مطلوبة.",
      ],
    },
    highlights: [
      "Explore the Roman Catacombs of Kom el-Shoqafa",
      "See Pompey's Pillar and the ancient Serapeum site",
      "Visit the magnificent Qaitbay Citadel on the Mediterranean",
      "Tour the stunning modern Bibliotheca Alexandrina",
      "Lunch with traditional Alexandrian seafood included",
    ],
    includes: ["Guide", "Hotel or port pickup and drop-off", "Entrance fees", "Lunch"],
    excludes: ["Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Alexandria — 3,000 Years of History in a Day",
          description:
            "Alexandria is unlike any other city in Egypt. Where Cairo overwhelms with its scale and Cairo overwhelms with its energy, Alexandria seduces — with its sea air, its faded European elegance, its melancholy sense of a great past just out of reach. Founded by Alexander the Great in 331 BC on the narrow strip of land between the Mediterranean and Lake Mareotis, it became within a century the most important city in the world — home to perhaps half a million people, to Cleopatra and Julius Caesar, to the world's first great library, and to a lighthouse visible 50 kilometers out to sea. Almost nothing of that ancient city physically survives above ground. But below the streets, in the museums, and along the seafront, its presence is everywhere. This full-day tour covers four of the city's defining sites, moving through layers of time from the Roman era to the medieval Islamic period to the 21st century, bound together by the sea that has always been Alexandria's defining element.",
          steps: [
            { time: "08:00", description: "Hotel or port pickup. Your guide meets you and gives a brief introduction to Alexandria's history during the drive to the first site." },
            { time: "08:30", description: "Arrive at the Catacombs of Kom el-Shoqafa. Descend the spiral staircase three levels below street level into one of the most remarkable underground spaces in the world. Your guide explains the extraordinary fusion of Egyptian, Greek, and Roman art and religious symbolism covering the tomb chambers — a physical document of Alexandria's multicultural identity." },
            { time: "09:30", description: "Walk to nearby Pompey's Pillar — a 27-meter-tall red granite column, the largest of its kind outside Rome, which once stood within the great Serapeum temple complex. Your guide explains the temple's role as the last home of the Alexandrian library's 'daughter collection' and its destruction in the 4th century AD." },
            { time: "10:00", description: "Transfer to the Qaitbay Citadel on the eastern harbour." },
            { time: "10:30", description: "Enter the Citadel of Qaitbay — the great 15th-century Mamluk fortress built by Sultan Qaitbay on the exact site of the ancient Pharos Lighthouse. Your guide walks you through the towers and ramparts, explaining both the medieval history of the fortress and the legendary ancient lighthouse it replaced. Stand on the seaward walls with the Mediterranean in front of you and understand exactly why Alexander chose this spot to build his city." },
            { time: "12:00", description: "Transfer to a traditional seafood restaurant on the Alexandria waterfront." },
            { time: "12:30", description: "Lunch included — fresh Alexandrian seafood, the city's great culinary tradition, with views across the harbour." },
            { time: "14:00", description: "Transfer to the Bibliotheca Alexandrina on the Corniche." },
            { time: "14:30", description: "Guided tour of the Bibliotheca Alexandrina — the spectacular modern library and cultural centre inaugurated in 2002 and designed by the Norwegian firm Snøhetta to evoke a rising sun tilting over the sea. Your guide takes you through the main reading hall (one of the largest in the world), the Antiquities Museum in the basement (displaying artefacts found during the library's construction), the Manuscript Museum, and the exterior sculpted wall inscribed with scripts from every writing system ever developed." },
            { time: "16:30", description: "Walk along the Corniche — Alexandria's seafront promenade — as the afternoon light softens over the Mediterranean. Your guide points out the historic landmarks of the Eastern Harbour." },
            { time: "17:00", description: "Transfer back to your hotel or port. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "الإسكندرية — 3000 عام من التاريخ في يوم واحد",
          description:
            "الإسكندرية مدينة لا تشبه أي مدينة أخرى في مصر. حيث تطغى القاهرة بحجمها وطاقتها، تُغري الإسكندرية — بهوائها البحري وأناقتها الأوروبية المتلاشية وإحساسها الحزين بماضٍ عظيم يكاد يُلمس. أسسها الإسكندر الأكبر عام 331 قبل الميلاد على الشريط الضيق من الأرض بين البحر المتوسط وبحيرة مريوط، وأصبحت في غضون قرن أهم مدينة في العالم — تضم ربما نصف مليون شخص، وكليوباترا ويوليوس قيصر، وأول مكتبة عظيمة في العالم، ومنارة تُرى على بعد 50 كيلومتراً في البحر. لا يكاد يبقى شيء من تلك المدينة القديمة فوق الأرض. لكن تحت الشوارع وفي المتاحف وعلى الشاطئ، وجودها في كل مكان.",
          steps: [
            { time: "08:00", description: "الاستقبال من الفندق أو الميناء. يلتقي بك مرشدك ويقدم مقدمة موجزة عن تاريخ الإسكندرية أثناء القيادة إلى الموقع الأول." },
            { time: "08:30", description: "الوصول إلى سراديب كوم الشقافة. النزول عبر الدرج الحلزوني ثلاثة طوابق تحت مستوى الشارع إلى واحدة من أكثر الفضاءات تحت الأرض رائعةً في العالم. يشرح مرشدك الدمج الاستثنائي للفن المصري واليوناني والروماني والرمزية الدينية التي تغطي غرف المقبرة — وثيقة مادية للهوية المتعددة الثقافات في الإسكندرية." },
            { time: "09:30", description: "المشية إلى عمود بومبي القريب — عمود جرانيتي أحمر يبلغ ارتفاعه 27 متراً، وهو الأكبر من نوعه خارج روما، كان يقع ضمن مجمع معبد السيرابيوم العظيم. يشرح مرشدك دور المعبد كآخر موطن للمجموعة 'الفرعية' لمكتبة الإسكندرية وتدميره في القرن الرابع الميلادي." },
            { time: "10:00", description: "الانتقال إلى قلعة قايتباي على الميناء الشرقي." },
            { time: "10:30", description: "الدخول إلى قلعة قايتباي — الحصن المملوكي العظيم من القرن الخامس عشر الذي بناه السلطان قايتباي على الموقع الدقيق لمنارة الفاروس القديمة. يأخذك مرشدك عبر الأبراج والأسوار شارحاً تاريخ الحصن الوسيطي والمنارة القديمة التي حلّ محلها. قف على الأسوار المطلة على البحر مع البحر المتوسط أمامك وأدرك تماماً لماذا اختار الإسكندر هذا الموقع لبناء مدينته." },
            { time: "12:00", description: "الانتقال إلى مطعم مأكولات بحرية تقليدي على واجهة الإسكندرية البحرية." },
            { time: "12:30", description: "الغداء مشمول — مأكولات بحرية إسكندرانية طازجة، التقليد الطهوي العظيم للمدينة، مع إطلالات على الميناء." },
            { time: "14:00", description: "الانتقال إلى مكتبة الإسكندرية على الكورنيش." },
            { time: "14:30", description: "جولة مصحوبة بمرشد في مكتبة الإسكندرية — المكتبة الحديثة الرائعة والمركز الثقافي الذي افتُتح عام 2002 وصُمِّم من قبل شركة سنوهيتا النرويجية ليستحضر شمساً شارقة تميل فوق البحر. يأخذك مرشدك عبر قاعة القراءة الرئيسية (من أكبر قاعات القراءة في العالم) ومتحف الآثار في الطابق السفلي والجدار الخارجي المنقوش بخطوط من كل نظام كتابة طُوِّر على الإطلاق." },
            { time: "16:30", description: "المشية على الكورنيش — شارع الإسكندرية على البحر — مع تلطيف ضوء بعد الظهر فوق البحر المتوسط. يشير مرشدك إلى المعالم التاريخية للميناء الشرقي." },
            { time: "17:00", description: "الانتقال إلى فندقك أو الميناء. نهاية الجولة." },
          ],
        },
      ],
    },
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
    minAge: 5,
    maxGroupSize: 12,
    availableTimes: ["06:00"],
    meetingPoint: {
      en: "Your hotel lobby or the Alexandria cruise port. The guide and private vehicle will collect you very early for the drive to Cairo.",
      ar: "بهو فندقك أو ميناء الرحلات البحرية في الإسكندرية. المرشد والسيارة الخاصة سيستقبلانك في وقت مبكر جداً للقيادة إلى القاهرة.",
    },
    accessibility: {
      en: "The Giza Plateau involves walking on sand and uneven ground. The Grand Egyptian Museum is largely accessible. Entry inside the Great Pyramid involves crouching through low passages — not included and not recommended for claustrophobics.",
      ar: "تتضمن هضبة الجيزة المشي على الرمال والأرض غير المستوية. المتحف المصري الكبير في معظمه يمكن الوصول إليه. الدخول داخل الهرم الأكبر يتطلب الانحناء في ممرات منخفضة — غير مشمول وغير موصى به لمن يعانون من رهاب الأماكن الضيقة.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun hat and high SPF sunscreen", "Water (the desert is hot)", "Camera", "Light snacks for the long drive", "Warm layer for the early morning departure"],
      ar: ["حذاء مريح للمشي", "قبعة للشمس وكريم واقٍ بعامل حماية عالٍ", "ماء (الصحراء حارة)", "كاميرا", "وجبات خفيفة للقيادة الطويلة", "طبقة دافئة للمغادرة المبكرة"],
    },
    importantInfo: {
      en: [
        "The drive from Alexandria to Giza is approximately 2.5 hours each way.",
        "Hotel or port pickup is included within Alexandria.",
        "Lunch is included at a restaurant near the Giza Plateau or the Grand Egyptian Museum.",
        "Entry inside the Great Pyramid of Khufu is not included and carries an extra fee at the site.",
        "Camel or horse rides at the plateau are available at extra cost — your guide can assist.",
        "The Grand Egyptian Museum opened in 2023 and is the world's largest archaeological museum.",
      ],
      ar: [
        "القيادة من الإسكندرية إلى الجيزة تستغرق نحو 2.5 ساعة في كل اتجاه.",
        "الاستقبال من الفندق أو الميناء مشمول داخل الإسكندرية.",
        "الغداء مشمول في مطعم بالقرب من هضبة الجيزة أو المتحف المصري الكبير.",
        "الدخول داخل هرم خوفو الأكبر غير مشمول ويستلزم رسماً إضافياً في الموقع.",
        "ركوب الجمال أو الخيول على الهضبة متاح بتكلفة إضافية — مرشدك يمكنه المساعدة.",
        "افتتح المتحف المصري الكبير عام 2023 وهو أكبر متحف أثري في العالم.",
      ],
    },
    highlights: [
      "Private day trip from Alexandria to the Pyramids of Giza",
      "See the three great pyramids and the Great Sphinx",
      "Tour the Grand Egyptian Museum with Tutankhamun's treasures",
      "Expert Egyptologist guide throughout",
      "Hotel or port pickup and drop-off included",
    ],
    includes: ["Guide", "Hotel or port pickup and drop-off", "Private transport", "Entrance fees", "Lunch"],
    excludes: ["Entry inside the Great Pyramid (extra fee)", "Tips", "Personal expenses"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Alexandria to the Pyramids — Egypt's Greatest Day Trip",
          description:
            "This is one of the most dramatic day trips available anywhere in the world: leaving the Mediterranean seafront of Alexandria at dawn and arriving at the last surviving wonder of the ancient world before the morning crowds. The drive south from Alexandria through the green flatlands of the Delta and into the greater Cairo sprawl takes about two and a half hours, and your guide will use the journey to prepare you for what you're about to see — the context, the scale, the history, and the stories that make Giza more than a photograph. The Giza Plateau sits at the edge of the Sahara, and the abruptness of the transition — from city to pyramid in a single step — is one of travel's great shocks. The three pyramids of Khufu, Khafre, and Menkaure were built over a 70-year period in the 26th century BC. The largest, Khufu's Great Pyramid, remained the tallest structure in the world for nearly 4,000 years. In the afternoon, the Grand Egyptian Museum — opened in 2023 after decades of construction — presents the most important collection of ancient Egyptian artefacts ever assembled, including every single object found in Tutankhamun's tomb, displayed together for the first time.",
          steps: [
            { time: "06:00", description: "Hotel or port pickup in Alexandria. Begin the drive south toward Cairo." },
            { time: "08:30", description: "Arrive at the Giza Plateau. First view of the three pyramids from the eastern approach road — your guide pauses here for orientation and photographs." },
            { time: "09:00", description: "Enter the Giza site. Guided tour of the Great Pyramid of Khufu — walk around the base (the perimeter is nearly 1 km), examine the original casing stones near the base, and understand the engineering achievement. Your guide explains the latest theories on construction methods." },
            { time: "10:00", description: "Walk to the Pyramid of Khafre — slightly smaller than Khufu's but appearing taller due to its elevated position; still retains its original limestone casing at the apex." },
            { time: "10:30", description: "Visit the Pyramid of Menkaure and the three smaller Queen's Pyramids alongside it." },
            { time: "11:00", description: "Transfer to the Great Sphinx. Stand before the enigmatic limestone colossus — 73 meters long, carved from a single outcrop of natural rock — and the adjacent Valley Temple of Khafre, one of the oldest stone buildings in the world." },
            { time: "11:45", description: "Optional panoramic viewpoint stop for photographs of all three pyramids in a single frame." },
            { time: "12:30", description: "Lunch included at a restaurant near the plateau." },
            { time: "14:00", description: "Transfer to the Grand Egyptian Museum on the edge of the Giza Plateau." },
            { time: "14:30", description: "Guided tour of the Grand Egyptian Museum — begin in the Grand Staircase Hall lined with colossal royal statues; proceed to the complete Tutankhamun galleries (over 5,000 objects including the golden death mask, the golden throne, the canopic shrine, and the innermost golden coffin); continue through the Royal Mummies Hall and the permanent collection highlights." },
            { time: "17:00", description: "Depart the museum for the return drive to Alexandria." },
            { time: "19:30", description: "Arrive back in Alexandria. Drop-off at your hotel or port. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "من الإسكندرية إلى الأهرامات — أعظم رحلة يوم في مصر",
          description:
            "هذه واحدة من أكثر رحلات اليوم درامية في أي مكان في العالم: مغادرة واجهة الإسكندرية المتوسطية عند الفجر والوصول إلى آخر عجائب الدنيا السبع القديمة الباقية قبل حشود الصباح. القيادة جنوباً من الإسكندرية عبر السهول الخضراء للدلتا ثم امتداد القاهرة الكبرى تستغرق نحو ساعتين ونصف، وسيستخدم مرشدك الرحلة لإعدادك لما ستراه — السياق والحجم والتاريخ والقصص التي تجعل من الجيزة أكثر من صورة. هضبة الجيزة تقع عند حافة الصحراء الكبرى، وحدّة الانتقال — من المدينة إلى الهرم في خطوة واحدة — من أعظم صدمات السفر.",
          steps: [
            { time: "06:00", description: "الاستقبال من الفندق أو الميناء في الإسكندرية. بدء القيادة جنوباً نحو القاهرة." },
            { time: "08:30", description: "الوصول إلى هضبة الجيزة. أول منظر للأهرامات الثلاثة من طريق الاقتراب الشرقي — يتوقف مرشدك هنا للتوجيه والتصوير." },
            { time: "09:00", description: "الدخول إلى موقع الجيزة. جولة مصحوبة بمرشد في هرم خوفو الأكبر — المشي حول القاعدة (المحيط قرابة 1 كم) وفحص أحجار الكسوة الأصلية بالقرب من القاعدة وفهم الإنجاز الهندسي. يشرح مرشدك أحدث النظريات حول أساليب البناء." },
            { time: "10:00", description: "المشية إلى هرم خفرع — أصغر قليلاً من هرم خوفو لكنه يبدو أطول بسبب موقعه المرتفع؛ لا يزال يحتفظ بكسوته الجيرية الأصلية عند القمة." },
            { time: "10:30", description: "زيارة هرم منقرع والأهرامات الثلاثة الصغيرة للملكات بجانبه." },
            { time: "11:00", description: "الانتقال إلى أبو الهول الكبير. الوقوف أمام العملاق الحجري الجيري اللغزي — 73 متراً طولاً، منحوت من بروز صخري طبيعي واحد — ومعبد الوادي المجاور لخفرع، أحد أقدم المباني الحجرية في العالم." },
            { time: "11:45", description: "توقف اختياري عند نقطة المشاهدة البانورامية لتصوير الأهرامات الثلاثة في إطار واحد." },
            { time: "12:30", description: "الغداء مشمول في مطعم بالقرب من الهضبة." },
            { time: "14:00", description: "الانتقال إلى المتحف المصري الكبير على حافة هضبة الجيزة." },
            { time: "14:30", description: "جولة مصحوبة بمرشد في المتحف المصري الكبير — البدء في قاعة الدرج الكبير المصطفة بتماثيل ملكية ضخمة؛ المتابعة إلى معارض توتنخامون الكاملة (أكثر من 5000 قطعة بما فيها القناع الذهبي للموتى والعرش الذهبي وضريح الأواني الكانوبية والتابوت الذهبي الداخلي)؛ المتابعة عبر قاعة المومياوات الملكية وأبرز المقتنيات الدائمة." },
            { time: "17:00", description: "المغادرة من المتحف للقيادة العائدة إلى الإسكندرية." },
            { time: "19:30", description: "الوصول إلى الإسكندرية. الإنزال في فندقك أو الميناء. نهاية الجولة." },
          ],
        },
      ],
    },
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
    minAge: 8,
    maxGroupSize: 10,
    availableTimes: ["08:00"],
    meetingPoint: {
      en: "Your hotel lobby in Alexandria on Day 1. The guide will meet you to begin the tour.",
      ar: "بهو فندقك في الإسكندرية في اليوم الأول. سيلتقي بك المرشد لبدء الجولة.",
    },
    accessibility: {
      en: "This tour involves significant distances by road (Alexandria to Siwa is approximately 560 km). Siwa's desert terrain is not suitable for wheelchairs. The catacombs involve a spiral staircase underground. Not recommended for guests with severe mobility issues.",
      ar: "تتضمن هذه الجولة مسافات كبيرة براً (الإسكندرية إلى سيوة نحو 560 كم). تضاريس صحراء سيوة غير مناسبة لكراسي الحركة. السراديب تتضمن درجاً حلزونياً تحت الأرض. غير موصى بها لمن يعانون من صعوبات حركة شديدة.",
    },
    whatToBring: {
      en: ["Comfortable walking shoes and sandals", "Light summer clothing", "Warmer layer for desert nights (temperatures drop sharply)", "High SPF sunscreen", "Swimwear for the freshwater springs", "Camera", "Personal medications", "Cash (ATMs are limited in Siwa)"],
      ar: ["حذاء مريح للمشي وصندل", "ملابس صيفية خفيفة", "طبقة أدفأ لليالي الصحراء (تنخفض درجات الحرارة بحدة)", "واقٍ من الشمس بعامل حماية عالٍ", "ملابس سباحة لعيون المياه العذبة", "كاميرا", "أدوية شخصية", "نقد (الصرافات الآلية محدودة في سيوة)"],
    },
    importantInfo: {
      en: [
        "4 nights accommodation is included (1 in Alexandria, 3 in Siwa).",
        "Some meals are included — check your booking confirmation for the full meal plan.",
        "The drive from Alexandria to Siwa takes approximately 7-8 hours including stops.",
        "Siwa Oasis is a conservative Berber community — modest dress is appreciated, especially in the town center.",
        "Mobile phone signal is very limited in Siwa; inform family and friends before departing.",
        "The Great Sand Sea excursion in Siwa uses 4WD vehicles due to the terrain.",
      ],
      ar: [
        "إقامة 4 ليالٍ مشمولة (ليلة في الإسكندرية و3 ليالٍ في سيوة).",
        "بعض الوجبات مشمولة — راجع تأكيد حجزك للخطة الغذائية الكاملة.",
        "القيادة من الإسكندرية إلى سيوة تستغرق نحو 7-8 ساعات متضمنةً التوقفات.",
        "واحة سيوة مجتمع بربري محافظ — اللباس المحتشم موضع تقدير خاصةً في وسط المدينة.",
        "إشارة الهاتف المحمول محدودة جداً في سيوة؛ أخبر الأهل والأصدقاء قبل المغادرة.",
        "رحلة البحر الرملي الكبير في سيوة تستخدم مركبات دفع رباعي بسبب التضاريس.",
      ],
    },
    highlights: [
      "Explore Alexandria's catacombs, citadel, and Bibliotheca",
      "Drive across the North African desert to Siwa Oasis",
      "Visit the ancient Oracle Temple of Amun at Siwa",
      "Swim in freshwater springs and explore salt lakes",
      "Journey through the spectacular Great Sand Sea",
    ],
    includes: ["4 nights accommodation", "Private transport", "Guide", "Entrance fees", "Some meals"],
    excludes: ["All meals", "Tips", "Personal expenses", "International flights"],
    itinerary: {
      en: [
        {
          day: 1,
          title: "Alexandria — City of Memory",
          description:
            "Your adventure begins in Alexandria, Egypt's Mediterranean city of layered ghosts. The day covers the city's greatest ancient and modern landmarks — the underground Roman catacombs of Kom el-Shoqafa where Egyptian and Greco-Roman art collide; Pompey's Pillar standing in the ruins of the ancient Serapeum; the Qaitbay Citadel rising above the harbour where the legendary Pharos Lighthouse once stood; and the magnificent modern Bibliotheca Alexandrina. In the evening, settle into your hotel and take a walk along the Corniche as the Mediterranean darkens into night.",
          steps: [
            { time: "08:00", description: "Meet your guide at your Alexandria hotel. Orientation briefing for the 5-day journey." },
            { time: "08:30", description: "Drive to the Catacombs of Kom el-Shoqafa. Descend underground and explore the remarkable fusion of Egyptian and Greco-Roman funerary art." },
            { time: "09:30", description: "Walk to Pompey's Pillar and the ruins of the Serapeum temple complex." },
            { time: "10:15", description: "Transfer to the Qaitbay Citadel. Guided tour of the medieval fortress on the site of the ancient Pharos Lighthouse, with views across the Eastern Harbour." },
            { time: "12:00", description: "Lunch included at a traditional Alexandrian seafood restaurant on the waterfront." },
            { time: "14:00", description: "Visit the Bibliotheca Alexandrina — guided tour of the main reading hall, the Antiquities Museum, and the Manuscript Museum." },
            { time: "16:30", description: "Walk along the Corniche. Check in to your hotel." },
            { time: "19:30", description: "Dinner on your own expense. Evening free to explore the Alexandrian seafront." },
          ],
        },
        {
          day: 2,
          title: "Alexandria to Siwa — Crossing the Western Desert",
          description:
            "Today the journey takes a dramatic turn west, leaving the Mediterranean behind for one of the most extraordinary landscapes on Earth. The drive from Alexandria to Siwa crosses 560 kilometres of the Western Desert — a vast, almost surreally empty plateau broken by occasional oases and the pale shimmer of distant salt flats. The road runs along the Mediterranean coast before turning inland through the ancient caravan routes that once connected Egypt to Libya and sub-Saharan Africa. Siwa Oasis appears like a mirage after hours of desert — a dense green garden of palm trees and olive groves surrounding a glittering salt lake, with the ruins of ancient mud-brick towers rising from the escarpment above. You'll arrive in time to check in to your Siwa ecolodge and watch the desert sunset from its rooftop.",
          steps: [
            { time: "07:00", description: "Breakfast at the Alexandria hotel. Check out." },
            { time: "08:00", description: "Depart Alexandria westward by private vehicle." },
            { time: "10:00", description: "Stop at El Alamein — the site of the decisive World War II battle of 1942. Brief visit to the El Alamein War Cemetery and the El Alamein Museum (entrance at own expense)." },
            { time: "11:30", description: "Continue west through the North African coastal desert. Your guide explains the geography and history of the region." },
            { time: "13:00", description: "Lunch stop at Marsa Matrouh — a small coastal town with a beautiful bay. Lunch on your own expense." },
            { time: "14:30", description: "Turn south from the coast into the interior. The landscape shifts from coastal scrub to open desert plateau." },
            { time: "17:00", description: "Descend from the plateau into the Siwa Depression. First views of the palm gardens, salt lakes, and ancient ruins of Siwa Oasis." },
            { time: "17:30", description: "Arrive in Siwa. Check in to the ecolodge (traditional mud-brick construction)." },
            { time: "19:00", description: "Dinner included at the lodge. Your guide introduces Siwa's history and culture and outlines the days ahead." },
          ],
        },
        {
          day: 3,
          title: "Siwa — The Oracle Temple, Shali Fortress & Cleopatra's Spring",
          description:
            "Siwa's history is as improbable as its location. An oasis in the Libyan Desert, 50 metres below sea level, it has been inhabited since at least the 10th millennium BC, and its Oracle Temple of Amun was one of the most famous in the ancient world — consulted by Croesus of Lydia, Pindar the poet, and, most famously, Alexander the Great himself, who made the desert crossing from Egypt in 331 BC to receive confirmation of his divine status. Today Siwa retains its ancient character in ways few Egyptian sites do: its people speak a distinct Berber language (Siwi), its architecture is still made from karshif (salt rock and mud), and its social customs have changed relatively little over centuries.",
          steps: [
            { time: "08:00", description: "Breakfast at the lodge." },
            { time: "09:00", description: "Walk to the Oracle Temple of Amun (Temple of the Oracle) — explore the ruins of the 26th-dynasty temple where Alexander received his oracle, and the adjacent Temple of Umm Ubayda. Your guide explains Alexander's famous visit and the oracle tradition." },
            { time: "10:30", description: "Climb to the top of the Shali Fortress — the remarkable ruined medieval mud-brick city on a rocky outcrop in the centre of Siwa, offering panoramic views across the entire oasis, the palm gardens, Lake Siwa, and the surrounding desert escarpment." },
            { time: "11:30", description: "Visit Cleopatra's Spring (Ain el-Girara) — a natural freshwater pool bubbling up from underground, famous since antiquity and still in use by locals and visitors. Swimming is permitted." },
            { time: "12:30", description: "Return to the lodge. Lunch included." },
            { time: "14:00", description: "Explore Siwa town on foot — the central square, the market selling Siwan silver jewelry and woven baskets, the traditional mud-brick houses, and the date palm orchards. Your guide introduces you to local artisans." },
            { time: "17:00", description: "Visit Fatnas Island (Fantasy Island) on Lake Siwa — a small palm-fringed island in the salt lake, accessible by causeway, famous for its sunset views." },
            { time: "18:30", description: "Return to the lodge." },
            { time: "19:30", description: "Dinner included." },
          ],
        },
        {
          day: 4,
          title: "Siwa — The Great Sand Sea & Desert Sunset",
          description:
            "The Great Sand Sea is one of the world's largest sand seas — an unbroken ocean of dunes stretching from Egypt deep into Libya, covering an area larger than the entire country of Ireland. A 4WD excursion into its edge is one of the most exhilarating experiences Egypt offers: the scale, the silence, and the extraordinary sculptural forms of the dunes are genuinely unlike anything else on the planet. The afternoon brings a visit to the Mountain of the Dead — a rocky hillside near Siwa town carved with dozens of ancient Pharaonic rock tombs — before the famous Siwa sunset from the top of a sand dune.",
          steps: [
            { time: "08:00", description: "Breakfast at the lodge." },
            { time: "09:00", description: "Depart by 4WD vehicles for the Great Sand Sea." },
            { time: "09:30", description: "Enter the Great Sand Sea. Your driver navigates across the dune landscape — cresting ridges, descending into valleys, pausing at the highest viewpoints for photographs. The silence is total." },
            { time: "11:00", description: "Stop at a freshwater hot spring in the desert — a natural warm pool surrounded by dunes. Swimming possible." },
            { time: "12:00", description: "Picnic lunch in the desert provided by the lodge." },
            { time: "13:30", description: "Return through the dunes to Siwa." },
            { time: "15:00", description: "Visit Jebel al-Mawta (Mountain of the Dead) — a hill riddled with ancient rock-cut tombs from the 26th dynasty and Greco-Roman periods. Visit the painted Tomb of Si-Amun, the finest painted tomb in the Western Desert." },
            { time: "16:30", description: "Drive to a high dune on the desert edge for the famous Siwa sunset — watching the light shift across the palm oasis and salt lake as the sky turns gold and violet is one of the defining travel experiences in Egypt." },
            { time: "18:30", description: "Return to the lodge." },
            { time: "19:30", description: "Dinner included. Final evening in Siwa — optional visit to a local music gathering if available." },
          ],
        },
        {
          day: 5,
          title: "Siwa to Alexandria — Return Journey",
          description:
            "The final day is the long return drive east across the Western Desert to Alexandria. The journey in reverse offers a different perspective — the desert plateau opening back into the Mediterranean coast, and eventually the city skyline of Alexandria rising ahead. Depending on your arrival time, a brief final stroll along the Alexandria Corniche before your transfer to your hotel or onward connection closes the loop on one of Egypt's most remarkable journeys.",
          steps: [
            { time: "07:00", description: "Breakfast at the lodge. Check out." },
            { time: "08:00", description: "Depart Siwa eastward. Final views of the oasis as it recedes into the desert." },
            { time: "10:30", description: "Drive across the Western Desert plateau. Your guide shares reflections on the journey and answers any remaining questions." },
            { time: "13:00", description: "Lunch stop at Marsa Matrouh on the coast. Lunch on your own expense." },
            { time: "14:30", description: "Continue east along the coast toward Alexandria." },
            { time: "15:30", description: "Optional brief stop at El Alamein on the return." },
            { time: "17:00", description: "Arrive in Alexandria. Drop-off at your hotel or Alexandria train station. Tour ends." },
          ],
        },
      ],
      ar: [
        {
          day: 1,
          title: "الإسكندرية — مدينة الذاكرة",
          description:
            "تبدأ مغامرتك في الإسكندرية، مدينة مصر المتوسطية ذات الأشباح الطبقية. يغطي اليوم أعظم معالم المدينة القديمة والحديثة — سراديب الموتى الرومانية تحت الأرض في كوم الشقافة حيث يتصادم الفن المصري واليوناني الروماني؛ وعمود بومبي قائماً في أنقاض السيرابيوم القديم؛ وقلعة قايتباي المرتفعة فوق الميناء حيث وقفت منارة الفاروس الأسطورية؛ ومكتبة الإسكندرية الحديثة الرائعة.",
          steps: [
            { time: "08:00", description: "التقاء مرشدك في فندقك بالإسكندرية. جلسة توجيه لرحلة الـ 5 أيام." },
            { time: "08:30", description: "القيادة إلى سراديب كوم الشقافة. النزول تحت الأرض واستكشاف الدمج الرائع للفن الجنائزي المصري واليوناني الروماني." },
            { time: "09:30", description: "المشية إلى عمود بومبي وأنقاض مجمع معبد السيرابيوم." },
            { time: "10:15", description: "الانتقال إلى قلعة قايتباي. جولة مصحوبة بمرشد في الحصن الوسيطي على موقع منارة الفاروس القديمة مع إطلالات على الميناء الشرقي." },
            { time: "12:00", description: "الغداء مشمول في مطعم مأكولات بحرية تقليدي إسكندراني على الشاطئ." },
            { time: "14:00", description: "زيارة مكتبة الإسكندرية — جولة مصحوبة بمرشد في قاعة القراءة الرئيسية ومتحف الآثار ومتحف المخطوطات." },
            { time: "16:30", description: "المشية على الكورنيش. تسجيل الوصول في الفندق." },
            { time: "19:30", description: "العشاء على نفقتك الخاصة. المساء حر لاستكشاف الشاطئ الإسكندراني." },
          ],
        },
        {
          day: 2,
          title: "من الإسكندرية إلى سيوة — عبور الصحراء الغربية",
          description:
            "اليوم تأخذ الرحلة منعطفاً درامياً غرباً، تاركاً البحر المتوسط وراءك لأحد أكثر المناظر الطبيعية استثنائيةً على وجه الأرض. تقطع القيادة من الإسكندرية إلى سيوة 560 كيلومتراً من الصحراء الغربية — هضبة شاسعة وشبه فارغة بشكل غير حقيقي تتخللها واحات عرضية وتلألؤ شاحب لسبخات ملحية بعيدة. تمتد الطريق على طول الساحل المتوسطي قبل الانعطاف داخلاً عبر طرق القوافل القديمة التي ربطت مصر بليبيا وأفريقيا جنوب الصحراء.",
          steps: [
            { time: "07:00", description: "الإفطار في فندق الإسكندرية. تسجيل المغادرة." },
            { time: "08:00", description: "المغادرة من الإسكندرية غرباً بسيارة خاصة." },
            { time: "10:00", description: "توقف في العلمين — موقع معركة الحرب العالمية الثانية الحاسمة عام 1942. زيارة موجزة لمقبرة العلمين الحربية ومتحف العلمين (الدخول على نفقتك الخاصة)." },
            { time: "11:30", description: "الاستمرار غرباً عبر الصحراء الساحلية الأفريقية الشمالية. يشرح مرشدك جغرافية المنطقة وتاريخها." },
            { time: "13:00", description: "توقف للغداء في مرسى مطروح — مدينة ساحلية صغيرة ذات خليج جميل. الغداء على نفقتك الخاصة." },
            { time: "14:30", description: "الانعطاف جنوباً من الساحل إلى الداخل. يتحول المشهد من شجيرات ساحلية إلى هضبة صحراء مفتوحة." },
            { time: "17:00", description: "النزول من الهضبة إلى منخفض سيوة. أول إطلالة على حدائق النخيل والبحيرات الملحية وآثار واحة سيوة القديمة." },
            { time: "17:30", description: "الوصول إلى سيوة. تسجيل الوصول في الإيكولودج (بناء تقليدي من الطوب الطيني)." },
            { time: "19:00", description: "العشاء مشمول في الإيكولودج. يعرّفك مرشدك على تاريخ سيوة وثقافتها ويستعرض الأيام القادمة." },
          ],
        },
        {
          day: 3,
          title: "سيوة — معبد الأوراكل وقلعة شالي وعين كليوباترا",
          description:
            "تاريخ سيوة مستبعَد كموقعها. واحة في الصحراء الليبية، 50 متراً تحت مستوى سطح البحر، مأهولة منذ ما لا يقل عن الألفية العاشرة قبل الميلاد، وكان معبد أوراكل آمون فيها أحد أشهر المعابد في العالم القديم — استشاره كروسوس ملك ليديا وبيندار الشاعر، والأشهر من بينهم جميعاً الإسكندر الأكبر نفسه الذي قطع الصحراء من مصر عام 331 قبل الميلاد لتلقّي تأكيد مكانته الإلهية.",
          steps: [
            { time: "08:00", description: "الإفطار في الإيكولودج." },
            { time: "09:00", description: "المشية إلى معبد أوراكل آمون — استكشاف أنقاض معبد الأسرة الـ 26 حيث تلقّى الإسكندر أوراكله، ومعبد أم عبيدة المجاور. يشرح مرشدك زيارة الإسكندر الشهيرة وتقليد الأوراكل." },
            { time: "10:30", description: "الصعود إلى قمة قلعة شالي — مدينة وسيطية رائعة مهجورة من الطوب الطيني على نتوء صخري في وسط سيوة، توفر إطلالات بانورامية على الواحة كلها وحدائق النخيل وبحيرة سيوة والمنحدر الصحراوي المحيط." },
            { time: "11:30", description: "زيارة عين كليوباترا (عين الجيرة) — بركة ماء عذب طبيعي تنبثق من تحت الأرض، مشهورة منذ العصور القديمة ولا يزال يستخدمها السكان والزوار. السباحة مسموح بها." },
            { time: "12:30", description: "العودة إلى الإيكولودج. الغداء مشمول." },
            { time: "14:00", description: "استكشاف مدينة سيوة سيراً على الأقدام — الميدان المركزي والسوق التي تبيع مجوهرات الفضة السيوية والسلال المنسوجة والبيوت الطينية التقليدية وبساتين النخيل. مرشدك يعرّفك على حرفيين محليين." },
            { time: "17:00", description: "زيارة جزيرة فطناس (جزيرة الخيال) على بحيرة سيوة — جزيرة صغيرة مزروعة بالنخيل في البحيرة الملحية يمكن الوصول إليها عبر جسر، مشهورة بمناظر الغروب." },
            { time: "18:30", description: "العودة إلى الإيكولودج." },
            { time: "19:30", description: "العشاء مشمول." },
          ],
        },
        {
          day: 4,
          title: "سيوة — البحر الرملي الكبير وغروب الصحراء",
          description:
            "البحر الرملي الكبير أحد أكبر بحار الرمال في العالم — محيط متواصل من الكثبان يمتد من مصر عميقاً داخل ليبيا، يغطي مساحة أكبر من مساحة أيرلندا كلها. رحلة بمركبة دفع رباعي إلى حافته واحدة من أكثر التجارب إثارةً في مصر: الحجم والصمت والأشكال النحتية الاستثنائية للكثبان لا تشبه شيئاً آخر على وجه الكوكب. بعد الظهر يجلب زيارة جبل الموتى — التلة الصخرية بالقرب من مدينة سيوة المنحوتة بعشرات مقابر الصخر الفرعونية — ثم غروب سيوة الشهير من قمة كثيب رملي.",
          steps: [
            { time: "08:00", description: "الإفطار في الإيكولودج." },
            { time: "09:00", description: "المغادرة بمركبات دفع رباعي نحو البحر الرملي الكبير." },
            { time: "09:30", description: "الدخول إلى البحر الرملي الكبير. سائقك يتنقل في مشهد الكثبان — يعلو القمم وينزل إلى الوديان ويتوقف عند أعلى نقاط المشاهدة للتصوير. الصمت تام." },
            { time: "11:00", description: "توقف عند ينبوع ماء ساخن عذب في الصحراء — بركة دافئة طبيعية محاطة بالكثبان. السباحة ممكنة." },
            { time: "12:00", description: "غداء بيكنيك في الصحراء مقدَّم من الإيكولودج." },
            { time: "13:30", description: "العودة عبر الكثبان إلى سيوة." },
            { time: "15:00", description: "زيارة جبل الموتى — تلة مليئة بمقابر صخرية قديمة من الأسرة الـ 26 والحقبة اليونانية الرومانية. زيارة مقبرة سي-آمون المطلية، وهي أجمل مقبرة مطلية في الصحراء الغربية." },
            { time: "16:30", description: "القيادة إلى كثيب عالٍ على حافة الصحراء لغروب سيوة الشهير — مشاهدة الضوء يتحول فوق واحة النخيل والبحيرة الملحية مع تحول السماء إلى الذهبي والبنفسجي من التجارب السفرية المحددة في مصر." },
            { time: "18:30", description: "العودة إلى الإيكولودج." },
            { time: "19:30", description: "العشاء مشمول. المساء الأخير في سيوة — زيارة اختيارية لتجمع موسيقي محلي إن توفّر." },
          ],
        },
        {
          day: 5,
          title: "من سيوة إلى الإسكندرية — رحلة العودة",
          description:
            "اليوم الأخير هو القيادة الطويلة عائدةً شرقاً عبر الصحراء الغربية إلى الإسكندرية. الرحلة بالاتجاه المعاكس تقدم منظوراً مختلفاً — الهضبة الصحراوية تنفتح مجدداً على الساحل المتوسطي وفي النهاية أفق الإسكندرية يطل أمامك. بحسب وقت وصولك، جولة قصيرة أخيرة على كورنيش الإسكندرية قبل انتقالك إلى فندقك أو رحلتك التالية تُغلق دائرة واحدة من أكثر رحلات مصر تميزاً.",
          steps: [
            { time: "07:00", description: "الإفطار في الإيكولودج. تسجيل المغادرة." },
            { time: "08:00", description: "المغادرة من سيوة شرقاً. آخر إطلالة على الواحة وهي تتلاشى في الصحراء." },
            { time: "10:30", description: "القيادة عبر هضبة الصحراء الغربية. يشارك مرشدك تأملاته في الرحلة ويجيب على أي أسئلة متبقية." },
            { time: "13:00", description: "توقف للغداء في مرسى مطروح على الساحل. الغداء على نفقتك الخاصة." },
            { time: "14:30", description: "الاستمرار شرقاً على طول الساحل نحو الإسكندرية." },
            { time: "15:30", description: "توقف موجز اختياري في العلمين في طريق العودة." },
            { time: "17:00", description: "الوصول إلى الإسكندرية. الإنزال في فندقك أو محطة قطار الإسكندرية. نهاية الجولة." },
          ],
        },
      ],
    },
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
        "Note: signal may be limited in remote desert areas such as Siwa Oasis.",
        "Voice calls and SMS are not included.",
      ],
      ar: [
        "يُفعَّل eSIM رقمياً — لا يلزم تبديل بطاقة SIM فعلية.",
        "تأكد من أن هاتفك غير مقيد ومتوافق مع eSIM قبل الشراء.",
        "متوفر بخطط 7 و15 و30 يوماً.",
        "يعمل على شبكات 4G/LTE في جميع أنحاء مصر.",
        "ملاحظة: قد تكون الإشارة محدودة في المناطق الصحراوية النائية مثل واحة سيوة.",
        "المكالمات الصوتية والرسائل النصية غير مشمولة.",
      ],
    },
    highlights: [
      "Mobile data coverage across Egypt",
      "No physical SIM swap needed",
      "Easy digital activation before arrival",
      "Available in 7, 15, and 30-day plans",
      "Works in Alexandria and all Egyptian destinations",
    ],
    includes: ["eSIM data plan for selected duration"],
    excludes: ["Voice calls", "SMS"],
    itinerary: null,
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
    minAge: 0,
    maxGroupSize: null,
    availableTimes: null,
    meetingPoint: null,
    accessibility: null,
    whatToBring: null,
    importantInfo: {
      en: [
        "Coverage is available for trips of 3 to 31 days.",
        "Pre-existing medical conditions may not be covered — review the full policy before purchasing.",
        "This insurance is recommended especially for tours involving remote areas such as the Siwa Desert.",
        "Coverage includes medical emergencies, trip cancellation, and lost or delayed luggage.",
        "Purchase before departure — the policy cannot be activated after travel has begun.",
      ],
      ar: [
        "التغطية متاحة للرحلات من 3 إلى 31 يوماً.",
        "الحالات الطبية السابقة قد لا تكون مشمولة — راجع الوثيقة الكاملة قبل الشراء.",
        "يُوصى بهذا التأمين خاصةً للجولات التي تشمل مناطق نائية مثل صحراء سيوة.",
        "التغطية تشمل الحالات الطارئة الطبية وإلغاء الرحلة والأمتعة المفقودة أو المتأخرة.",
        "اشترِ قبل السفر — لا يمكن تفعيل الوثيقة بعد بدء الرحلة.",
      ],
    },
    highlights: [
      "Comprehensive travel insurance for Alexandria and Egypt",
      "Covers medical emergencies and trip cancellations",
      "Available for 3 to 31-day trips",
      "Peace of mind for all sightseeing and day trips",
    ],
    includes: ["Travel insurance coverage as per selected plan"],
    excludes: ["Pre-existing medical conditions (check policy)"],
    itinerary: null,
  },
];

export { cityData, toursData };