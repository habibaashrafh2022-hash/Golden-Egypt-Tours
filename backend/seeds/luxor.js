// seeds/cities/luxor.js
// Aurevian Tours — Luxor City & Tours Data
// All translations handled automatically via Google Translate widget.
// No manual Arabic fields. Descriptions are narrative-style for maximum engagement.

const cityData = {
  name: "Luxor",
  slug: "luxor",
  description:
    "There is a moment — it arrives without warning, usually just after dawn, when the air still carries the cool breath of the Nile and the limestone cliffs to the west have not yet turned gold — when you understand, viscerally and without need for explanation, why ancient Egyptians believed this city was the centre of the universe. Luxor is not simply a collection of ruins. It is the most remarkable open-air museum on earth, a place where the boundary between the living present and the three-thousand-year-old past dissolves entirely, where the columns of temples built by pharaohs whose names were old when Rome was young still cast shadows across the same soil, the same river, the same desert sky.\n\nKnown in antiquity as Waset — and to the Greeks as Thebes, the city of a hundred gates celebrated by Homer — Luxor served for more than five centuries as the religious and political heart of ancient Egypt at the absolute apex of its power, the New Kingdom era from roughly 1550 to 1070 BC, when Egypt's empire stretched from the Sudan to Syria and its pharaohs commanded the richest civilization on earth. A city of perhaps 100,000 inhabitants at its height, surrounded by the greatest concentration of ancient monuments ever assembled in a single location, Luxor was above all a city of the gods — dominated by the vast temple complexes dedicated to Amun-Ra, the king of the gods, whose priests eventually became so powerful they rivalled the pharaohs themselves.\n\nThe genius of Luxor lies in its fundamental duality, a division that gives the city its unique character even today. The East Bank, where the living city of Luxor thrives along the Nile Corniche with its hotels and markets and minarets and the scent of cardamom drifting from riverside cafés, is home to the two great temples of Karnak and Luxor — monuments to the living power of the gods, places of ceremony and ritual and communal worship. The West Bank, reached by a short ferry crossing of the Nile into a landscape that turns ochre and then terracotta as you move away from the river's green edge, was the ancient city of the dead — the Theban Necropolis — a vast, silent world of royal tombs and mortuary temples carved into and built beneath the dramatic limestone cliffs of the Theban Mountain, the peak of which, shaped like a natural pyramid, the Egyptians believed was watched over by the cobra goddess Meretseger, She Who Loves Silence.\n\nHere, in the Valley of the Kings, 63 royal tombs have been discovered cut deep into the desert bedrock — secret, silent chambers decorated with extraordinary paintings and hieroglyphic texts that were intended to guide the pharaoh's soul through the dangerous journey of the underworld and deliver it safely to resurrection at dawn. The tomb of Tutankhamun, discovered intact by Howard Carter on November 4, 1922, in what remains the most dramatic archaeological discovery in history, was the first in this valley to survive virtually untouched by ancient robbers. But even stripped of their treasures — every other tomb in the valley was robbed in antiquity — the painted chambers of Ramses VI, Seti I, Ramses III, and dozens more remain among the most extraordinary human-made spaces in existence.\n\nAnd yet the Valley of the Kings is only the beginning. The West Bank also holds the Valley of the Queens, where royal wives and children were laid to rest in tombs whose paintings rival anything in the kings' valley for artistry and colour — above all the tomb of Nefertari, the beloved principal wife of Ramses II, whose perfectly preserved paintings of the queen moving through the afterlife in flowing white linen robes are considered the finest examples of ancient Egyptian art anywhere on earth. Then there is Deir el-Bahari, where the three-tiered mortuary temple of Hatshepsut — Egypt's greatest female pharaoh, who ruled for more than twenty years in full pharaonic regalia including the ceremonial false beard — is set with breathtaking architectural drama against the sheer three-hundred-metre limestone cliffs, its pale colonnaded terraces glowing in the morning light. And Medinet Habu, the massive mortuary temple of Ramses III, its exterior walls covered in metres-high reliefs of the pharaoh's campaigns against the mysterious Sea Peoples of the Bronze Age, still retaining traces of brilliant colour after three thousand years. And the Valley of the Nobles, where the painted tombs of scribes and officials and viziers offer something the royal tombs cannot — a window into everyday life, showing banquets and harvests and fishing trips and music and dancing and market scenes with the immediacy and humanity of paintings made by people who loved life and wanted the memory of it to survive forever.\n\nAbove it all, accessible now by a short drive from the ferry dock, the Theban Mountain rises into the desert sky, its peak watching over both the living city and the city of the dead as it has for five thousand years, indifferent to the passage of dynasties and empires, waiting simply for the next morning light to turn its limestone face from purple shadow to gold.",
  country: "Egypt",
  image: "luxor.jpeg",
};

const toursData = [

  // ─────────────────────────────────────────────────────────────────────────
  // 1. Valley of the Kings and Queens, Colossi & Hatshepsut Tour
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Valley of the Kings and Queens, Colossi & Hatshepsut Tour",
    images: ["/images/tours/westsolo.jpeg"],
    slug: "valley-kings-queens-colossi-hatshepsut-luxor",
    description:
      "Before the sun has had time to climb above the East Bank hills, before the tourist coaches have gathered at the ferry dock and the Valley of the Kings begins to fill with the day's visitors, there is an hour on the West Bank that belongs only to those who have risen early enough to claim it. The limestone cliffs are still purple-grey in the pre-dawn shadow. The air smells of dew and dust and the indefinable mineral scent of ancient stone. A hawk circles high over the Valley — exactly as it did when the priests of Amun carried the body of Ramses the Great through these same passes three thousand years ago — and for a moment, standing at the entrance to the most famous necropolis in human history, time does something extraordinary. It folds.\n\nThis tour takes you to the four defining monuments of Luxor's West Bank in a single expertly paced morning: the Colossi of Memnon, the Valley of the Kings, the Valley of the Queens, and the Mortuary Temple of Hatshepsut at Deir el-Bahari. Together they represent the full span of royal funerary tradition in ancient Thebes — from the enormous guardian statues that once watched over a mortuary temple now entirely vanished, to the elaborately painted underground chambers where the greatest pharaohs in history were laid to rest, to the most architecturally refined building of the New Kingdom, carved with staggering precision into the face of a three-hundred-metre cliff.\n\nYour Aurevian Tours licensed guide — a professional Egyptologist who has spent years studying these sites not just from books but from the inside — does not simply point at hieroglyphs and recite names and dates. They bring the ancient world to life the way a great novelist brings characters off the page: with context, with personality, with the strange and human details that make the past feel genuinely inhabited. You will learn why Ramses VI had his tomb built directly over Tutankhamun's, accidentally preserving the boy king's burial for three thousand years. You will see the actual cartouche of Seti I scratched over an earlier name on a tomb wall, a three-thousand-year-old act of political self-promotion. You will stand in the tomb of Queen Nefertari — if you choose to purchase the supplementary ticket — and look at paintings of a woman who was so beloved by the greatest pharaoh in history that he called her The One for Whom the Sun Rises, and you will understand, in that painted chamber with its extraordinary colours and its profound stillness, exactly why the ancient Egyptians believed that beauty was a form of immortality.\n\nThis is the essential West Bank experience, expertly delivered. Four of the most important archaeological sites in the world, covered in a single morning that you will remember for the rest of your life.",
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
      "Visit the Valley of the Kings and explore 3 royal tombs with your licensed Egyptologist guide",
      "See the Valley of the Queens and the world-famous tomb of Nefertari (optional extra ticket)",
      "Admire the Mortuary Temple of Hatshepsut — one of the most architecturally perfect buildings of the ancient world",
      "Stop at the iconic Colossi of Memnon — twin quartzite statues 18 metres tall and 3,200 years old",
      "Early morning timing to beat the heat and the crowds in the Valley of the Kings",
      "Hotel pickup and drop-off included throughout",
    ],
    includes: [
      "Licensed Egyptologist guide",
      "Hotel pickup and drop-off",
      "All entrance fees to included sites",
      "Air-conditioned private vehicle",
      "Bottled water",
    ],
    excludes: [
      "Tutankhamun tomb — optional extra ~$16.50, payable on the day",
      "Nefertari tomb — optional extra ~$30.00, payable on the day",
      "Gratuities for guide and driver",
      "Personal expenses",
      "Lunch",
    ],
    itinerary: [
      {
        step: 1,
        time: "07:00",
        title: "Hotel Pickup — The Day Begins Before the Heat",
        description:
          "Your Aurevian Tours licensed guide appears at your hotel lobby precisely at seven o'clock — unhurried, knowledgeable, carrying nothing more than a small bag and what seems like an inexhaustible supply of fascinating historical knowledge. You board a clean, air-conditioned vehicle and set off through the quiet early-morning streets of Luxor toward the Nile crossing. As the city slides past the window — the minaret of a mosque catching the first slant of morning light, a man on a bicycle crossing the Corniche with a tray of bread balanced improbably on his head, a pair of egrets standing absolutely still in the shallows of the river — your guide begins to set the scene for what the West Bank of Luxor actually is: not just a collection of tourist sites but an entire ancient city of the dead, the Theban Necropolis, where the rulers of Egypt's New Kingdom — the wealthiest and most powerful civilisation the ancient world had yet produced — prepared their souls for eternity across a span of five centuries. By the time the ferry has crossed the Nile and the vehicle has begun its drive through the West Bank's agricultural fringe toward the desert hills, you already understand that this is not going to be an ordinary morning.",
        duration: "20 minutes",
        location: "Your hotel, Luxor East Bank",
      },
      {
        step: 2,
        time: "07:30",
        title: "Colossi of Memnon — Guardians of a Vanished World",
        description:
          "The road opens suddenly and there they are: two vast seated figures rising from the flat West Bank plain without preamble or announcement, as if they had always simply been there and the entire modern landscape — the asphalt road, the electricity pylons, the tourist bus reversing noisily in the car park — had simply arranged itself around them as an afterthought. Each statue is 18 metres tall. Each was quarried from a single block of quartzite sandstone and transported more than 700 kilometres from the area near modern Cairo by a process that archaeologists still do not entirely understand. Each weighs over 700 tonnes. They have been sitting here, facing east across the Nile toward the rising sun, for more than 3,200 years. And they were already ancient, already legendary, when the Romans came to Egypt and added their own graffiti to their feet.\n\nThey are the Colossi of Memnon — the two remaining statues of the pharaoh Amenhotep III that once guarded the entrance pylon of his mortuary temple, a structure so vast that it would have dwarfed even the great temple at Karnak had it survived. It did not survive. Millennia of Nile flooding gradually dismantled it, and later rulers systematically plundered its stone for their own building projects, until nothing remained except these two extraordinary sentinels standing watch over an absence. Your guide explains the statue's layered identity: named by the Greeks after the Trojan War hero Memnon, a son of the dawn goddess Aurora, because the northern statue — cracked by a long-ago earthquake — used to emit a musical sound at sunrise, caused by the rapid evaporation of dew from the fissure in the stone as the morning sun struck it. The Roman emperor Septimius Severus had the crack repaired around 199 AD, and the statue has been silent ever since. Pilgrims had been coming from across the ancient world to hear it sing. They wrote their names on the legs. Their graffiti are still there.",
        duration: "20 minutes",
        location: "West Bank plain, Luxor",
        tips:
          "The morning light from the east falls directly onto the faces of the statues in the early hours — by mid-morning the light has moved around and the quality of photographs deteriorates rapidly. Arrive early and take your time.",
      },
      {
        step: 3,
        time: "08:00",
        title: "Valley of the Kings — Where Pharaohs Went to Become Gods",
        description:
          "The road rises into the desert hills, the green Nile Valley disappearing behind you as you enter a world of bare limestone and silence and a sky so blue it looks painted. Then the valley opens — a narrow, hidden cleft in the Theban Mountain, its floor dotted with ticket booths and a small electric train and the mouths of tombs cut into the rock at irregular intervals along the cliff faces — and you have arrived at what is, without any serious competition, the most famous burial ground in human history. The Valley of the Kings. Sixty-three royal tombs discovered here so far, and archaeologists believe there may be more that remain hidden.\n\nThe choice of this remote desert valley for royal burial was deliberate and profound. On one side of the mountain, visible from the valley floor, is the West Bank necropolis and the Nile and the living city of Thebes. On the other side, hidden from view, are the temples of Karnak and Luxor. The pharaoh buried here lay at the exact symbolic intersection of two worlds. The tomb was his passage between them. The paintings and texts on the walls — drawn from the Book of the Dead, the Book of Gates, the Book of Caverns, the Amduat, the Book of the Earth — were not decorations. They were operational documents: a complete technical manual for navigating the twelve hours of the night, defeating the monsters and obstacles of the underworld, and arriving safely at the moment of resurrection when the sun rose again at dawn.\n\nYour entrance ticket gives access to three tombs of your choice. Your guide selects the optimal combination based on which are open that day and what will give the richest and most varied experience. The possibilities include: KV9 — the double tomb of Ramses V and Ramses VI, whose astronomical ceiling is one of the most spectacular painted surfaces in Egypt, a full map of the night sky dotted with gods and stars and the complete text of the Book of Gates; KV11 — the vast tomb of Ramses III, with extraordinary painted side chambers showing the pharaoh playing the harp and rooms full of carefully depicted everyday objects, food, and musical instruments; KV14 — the tomb of the female pharaoh Tausret, with its deep descending corridors and unusually intact sarcophagus; and KV17 — the tomb of Seti I, generally considered the finest tomb ever discovered in the valley, though its opening to the public is limited.\n\nThe scale of the interiors is always a surprise. The corridors descend steeply into the rock — sometimes for a hundred metres or more — through antechambers and side rooms and descending ramps, the walls covered from floor to ceiling with painted figures so perfectly preserved that the pigments still glow with the vivid, mineral-rich colours of Egyptian earth: ochre and red, turquoise and cobalt blue, white and jet black. Your guide reads specific passages from the walls, translating the hieroglyphs in real time, and the effect — standing in a painted chamber cut from living rock, three thousand years old, hearing the actual words that the priests of Amun recited at the pharaoh's burial — is unlike anything else on earth.",
        duration: "90 minutes",
        location: "Valley of the Kings, West Bank",
        tips:
          "Photography is strictly prohibited inside all tombs — guards enforce this rigorously, and cameras or phones used inside will be confiscated. Wear flat shoes with good grip: the tomb passages descend at steep angles and the polished stone floors can be unexpectedly slippery. Bring a small torch if you have one — the lighting in some chambers is inadequate for reading the finer detail of the hieroglyphs. The tomb of Tutankhamun (KV62) costs an additional $16.50 and your guide can advise on the day whether the queue justifies the extra fee.",
      },
      {
        step: 4,
        time: "09:30",
        title: "Valley of the Queens — The Tomb of Nefertari",
        description:
          "A short drive south along the base of the Theban cliffs brings you to a quieter valley, less frequented than its famous neighbour to the north, where more than ninety tombs of queens, princes, and senior members of the royal family were carved during the New Kingdom period. The Valley of the Queens. This is, in some ways, the most emotionally affecting site on the entire West Bank — not for its scale, which is more intimate than the kings' valley, but for the extraordinary quality of what it contains.\n\nThe tomb of Queen Nefertari — principal wife of Ramses II and unquestionably the most beloved royal woman of the New Kingdom, perhaps of all ancient Egyptian history — is the crown jewel, and it is an experience that requires its own separate ticket and its own act of preparation. Ramses II called her the One for Whom the Sun Rises. He built her a temple at Abu Simbel that was not a lesser satellite of his own but an equal monument, dedicated to her and to the goddess Hathor, the only time in Egyptian history that a pharaoh built a great temple for his queen as her equal. When she died, he had her tomb decorated by the finest artists in Egypt with what are now universally acknowledged to be the most beautiful paintings in the entire ancient world.\n\nThe colours alone are a revelation: not the slightly faded, dust-softened tones of most ancient Egyptian painting, but pigments of extraordinary saturation and clarity — the deep sky blue of the goddess Isis's headdress, the vivid turquoise of Nefertari's beaded collar, the warm gold of the gods' skin, the brilliant white of her linen robes — all of it perfectly preserved by the controlled humidity of the closed tomb for more than three thousand years. The figures are graceful and expressive in a way that most Egyptian art is not: Nefertari moves through the afterlife with a dancer's ease, her body fluid and proportioned, her face serene and individual, her eyes — painted with that characteristic Egyptian kohl line extending to the temple — conveying a particular personality, a sense of a specific person rather than a generic royal type. Standing before these paintings, your guide is very quiet. Some places don't need narration.",
        duration: "45 minutes",
        location: "Valley of the Queens, West Bank",
        tips:
          "The tomb of Nefertari requires a separate supplementary ticket of approximately $30, payable on the day. Visitor numbers are strictly limited each day to protect the irreplaceable paintings from humidity damage, so if this is a priority — and it should be — your guide will advise booking the supplementary ticket in advance. Entry is time-limited. The experience is absolutely worth every penny of the extra cost.",
      },
      {
        step: 5,
        time: "10:30",
        title: "Mortuary Temple of Hatshepsut — Architecture as Autobiography",
        description:
          "You come around a bend in the road and it simply appears, and for a moment you cannot quite process what you are seeing. A vast, pale limestone colonnade rising in three elegant terraces against the sheer face of a three-hundred-metre cliff, as if someone had decided to make a building out of mathematics and set it against the most dramatic natural backdrop available. The Mortuary Temple of Hatshepsut at Deir el-Bahari — Djeser-Djeseru, the Holy of Holies — is one of the most extraordinary buildings in the ancient world, and it is in extraordinarily good condition for something that is three thousand four hundred years old.\n\nHatshepsut was the daughter of Thutmose I and the wife of Thutmose II, and when her husband died and left as heir only a young stepson — the future Thutmose III, then perhaps five years old — she served initially as regent. Then, somewhere around the seventh year of the young king's reign, she did something that had rarely been done before and would not be done again for a thousand years: she assumed the full titles and regalia of pharaoh, including the double crown and the ceremonial false beard, and ruled Egypt not as a regent but as a king in her own right, for more than twenty years. Her reign was, by any measure, a success. She launched trading expeditions to the mysterious land of Punt — possibly modern Somalia or Eritrea — and brought back living incense trees, gold, ivory, and exotic animals. She built more than any pharaoh since the pyramid builders. She filled Egypt's temples with monuments and obelisks and decorated them with reliefs of exceptional quality.\n\nAnd she built this temple. Your Aurevian Tours guide walks you through its three elegant colonnaded terraces connected by ramps, past the reliefs of her divine birth — in which the god Amun appears in disguise to her mother and conceives her, establishing her divine right to rule — and the famous Punt reliefs, where the expedition to that mysterious southern land is depicted in glorious, specific, observed detail: the Queen of Punt with her distinctive figure, the exotic trees being dug from the earth, the piles of myrrh and gold weighed and loaded onto ships. But then your guide shows you something else: the systematic, methodical erasure. After Hatshepsut's death, her stepson Thutmose III — finally in sole possession of the throne she had shared with him — spent years having her image chiselled out of every relief, her cartouches cut away, her name replaced with the names of her father or her stepson. An attempt to erase her from history entirely. It failed. Three thousand four hundred years later, we stand in her temple looking at what could not be destroyed — the geometry of the building itself, the perfection of its proportions, the breathtaking site it occupies against those extraordinary cliffs — and her name, restored now by Egyptologists who reconstructed it from the fragments left behind, is known by every schoolchild in the world.",
        duration: "45 minutes",
        location: "Deir el-Bahari, West Bank",
        tips:
          "The site is completely exposed to the sun and has almost no shade — bring a hat with a brim, apply sunscreen before you arrive, and carry your own water. The upper terrace offers panoramic views across the Nile Valley to the East Bank that are genuinely spectacular, with the green strip of the valley and the silver ribbon of the river visible against the desert beyond.",
      },
      {
        step: 6,
        time: "12:00",
        title: "Return to the East Bank — The Morning Absorbed",
        description:
          "Your guide accompanies you back through the West Bank, past the agricultural fields where farmers still work the same soil that fed the workers who built the tombs you have just visited, across the Nile by ferry or road bridge, and back to your hotel on the East Bank. You arrive in time for lunch, carrying with you a morning's worth of images and impressions that will take several hours at least to begin to sort. This is, without exception, how everyone feels after a morning in the Valley of the Kings. It is simply a great deal of human history to absorb before noon.",
        duration: "30 minutes",
        location: "Luxor East Bank — your hotel",
      },
    ],
    importantInfo: [
      "The tour begins at 07:00 specifically to reach the Valley of the Kings before the midday heat, which regularly exceeds 40°C in summer — the early start is not optional, it is essential",
      "Dress modestly throughout: shoulders and knees must be covered at all tombs and temples without exception",
      "Bring a minimum of 1.5 litres of water per person — more in summer months. The West Bank has very limited shade",
      "The optional Tutankhamun tomb (~$16.50) and Nefertari tomb (~$30.00) require cash — bring both just in case",
      "The exact sequence of sites may vary on the day depending on crowd levels and tomb availability",
      "Closed-toe shoes with flat, grippy soles are strongly recommended for the steep tomb interiors",
    ],
    meetingPoint: {
      description:
        "Hotel pickup anywhere in Luxor city and surrounding areas — your Aurevian Tours guide comes directly to your hotel lobby",
    },
    accessibility:
      "Moderate fitness required. Tomb interiors involve steep, uneven stone steps and low ceilings. The Hatshepsut Temple involves flat ramp walking. The Colossi of Memnon involve standing on flat open ground.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. Abydos & Dendera Temple Day Trip
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Abydos & Dendera Temple Day Trip",
    images: ["/images/tours/dendera.jpeg"],
    slug: "abydos-dendera-temple-day-trip-luxor",
    description:
      "Most visitors to Luxor spend their days absorbed in the Valley of the Kings and Karnak, and they are right to do so — these are extraordinary places. But there are travellers — a smaller, more curious group — who have read a little more widely, or who have returned for a second visit, or who simply sense that the story of ancient Egypt is more complex and more surprising than the standard itinerary reveals, and for these travellers the road north from Luxor into the sugarcane fields of Upper Egypt leads to two of the most astonishing temples in the entire country.\n\nAbydos was, for the ancient Egyptians, the most sacred city in the world. Not Thebes with its great temples of Amun. Not Memphis with its pyramids. Abydos — a city in the desert 150 kilometres north of Luxor, visited today by relatively few tourists, known in antiquity not merely as a religious centre but as the literal burial place of Osiris, the lord of the dead, the god who died and was resurrected and who thereby guaranteed the same possibility to every human soul. The head of Osiris, according to the most important strand of Egyptian religious belief, was buried at Abydos. This made the city the holiest pilgrimage destination in ancient Egypt for three thousand years. Every Egyptian who could possibly arrange it wanted to be buried as close to Abydos as possible, or at least to have a memorial stele erected there. To die was to go to Osiris, and Osiris was at Abydos.\n\nThe Temple of Seti I — built around 1280 BC and considered by many Egyptologists to be the finest painted temple in Egypt — is the defining monument of this sacred city, and the experience of walking through its seven parallel sanctuaries in the company of your Aurevian Tours guide, watching the extraordinary painted reliefs emerge from the shadows in colours that seem impossible for something three thousand years old, is one that visitors consistently describe as their single favourite experience in all of Egypt. The ochres and turquoises and golds and whites are not merely well-preserved. They are, in the sheltered inner chambers, as vivid and saturated as the day the ancient painters put them on the stone. This is not an exaggeration. It is simply true, and it is astonishing.\n\nDendera, an hour south of Abydos and an hour north of Luxor, offers a completely different but equally overwhelming experience. The Temple of Hathor here — one of the best-preserved temples in all of Egypt, built primarily in the Ptolemaic and early Roman period — is celebrated above all for its astronomical ceiling: a vast painted sky covering the Hypostyle Hall, depicting the constellations, zodiac signs, planets, and the goddess Nut stretched across the heavens in vivid blue and gold pigment, still intact after two thousand years. But Dendera is full of extraordinary details beyond the famous ceiling: the intact stone roof, the underground crypts covered in secret relief carvings, the rooftop shrines, and the famous Dendera Zodiac — a sophisticated star map that has fascinated scientists and Egyptologists and mystics in roughly equal measure for two centuries.\n\nThese two temples, visited together on a full day guided by an Aurevian Tours Egyptologist, offer a perspective on ancient Egyptian religion and art that is simply not available anywhere else, and they are consistently among the most profound experiences we offer.",
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
      "Visit the Temple of Seti I at Abydos — finest painted reliefs in all of Egypt, colours undimmed after 3,200 years",
      "Discover the Osireion — an underground cenotaph of Osiris, half-flooded and hauntingly atmospheric",
      "See the Abydos King List — 76 royal cartouches inscribed in sequence from the first pharaoh to Seti I",
      "Explore the great Temple of Hathor at Dendera, one of the best-preserved temples in Egypt",
      "Study the famous Dendera astronomical ceiling — a 2,000-year-old map of the night sky",
      "Descend into the temple's secret underground crypts",
    ],
    includes: [
      "Licensed Egyptologist guide for the full day",
      "Hotel pickup and drop-off",
      "All entrance fees",
      "Air-conditioned private vehicle throughout",
      "Bottled water",
    ],
    excludes: [
      "Meals — lunch not included (~$5–10 at local restaurants)",
      "Gratuities for guide and driver",
      "Personal expenses",
    ],
    itinerary: [
      {
        step: 1,
        time: "07:00",
        title: "Hotel Pickup — Heading North into Upper Egypt",
        description:
          "Your Aurevian Tours guide and driver collect you from your hotel as the city of Luxor is still waking up — the bread sellers cycling along the Corniche, the tea houses opening their shutters, the first feluccas of the morning being untied from their moorings. You board a comfortable, air-conditioned vehicle and set off north along the Nile Valley road, leaving the urban sprawl of Luxor behind within minutes and entering an agricultural landscape that has changed relatively little in its essentials for five thousand years: green sugarcane fields stretching to the desert edge on both sides, date palms lining the irrigation canals, mud-brick villages clustered at the water's edge, and above it all the vast, flat, blue Egyptian sky.\n\nThe drive to Abydos takes approximately two and a half hours — long enough to become properly relaxed, to let the rhythm of the landscape settle you into a different pace, to receive your guide's briefing on the extraordinary history of the place you are heading toward. Your guide explains the mythology of Osiris: the story of the god who was murdered by his jealous brother Set, dismembered and scattered across Egypt, then painstakingly reassembled by his devoted wife Isis, who breathed life back into him long enough to conceive their son Horus before Osiris descended to rule the kingdom of the dead. Abydos is where the head was found and reburied. This is why the most sacred pilgrimage a devout ancient Egyptian could make, in a country full of sacred places, was a journey to Abydos.",
        duration: "2.5 hours driving",
        location: "Luxor to Abydos via Nile Valley road",
      },
      {
        step: 2,
        time: "09:30",
        title: "Temple of Seti I — The Most Beautiful Painted Temple in Egypt",
        description:
          "The village of Abydos gives no particular indication, from the road, that it sits beside one of the most extraordinary buildings in the world. The temple's modest entrance pylons are visible over the low buildings of the modern town, but nothing prepares you for the interior. You step through the outer court — partially ruined, its columns broken but still massive — through the façade of the temple with its seven doorways (one for each of the seven sanctuary chapels within), and then you are inside, and the light changes, and you stop walking.\n\nThe paintings. The paintings are the reason people come to Abydos and find themselves unable to leave. In the innermost sanctuaries — the chapels dedicated to Osiris, Isis, Horus, Amun-Ra, Ra-Horakhty, Ptah, and Seti I himself, a configuration of seven parallel sanctuaries found nowhere else in Egypt — the colours are of a saturation and clarity that seems to belong to a different category of experience from other ancient paintings. They are not merely well-preserved. They are vivid. The ochre-gold of the gods' skin, the turquoise blue of the headdresses and collars, the rich dark red of the hieroglyphic cartouches, the brilliant white of the pleated linen garments — all of it sharp-edged, precise, and luminous in the carefully controlled interior light. Your guide moves from chamber to chamber, reading the texts, identifying the gods, explaining the ritual purpose of each scene: here Seti I makes offerings to Osiris; here Isis performs the rites of resurrection over her husband's body; here the young Ramses II — who completed the temple after his father's death — has his name inserted into reliefs that were already finished, the ancient equivalent of adding his name to someone else's masterpiece.\n\nThe Abydos King List is one of the most important historical documents to survive from the ancient world: a stone panel inscribed with the cartouches of seventy-six pharaohs in chronological sequence from the legendary first pharaoh Menes to Seti I himself, covering three thousand years of Egyptian kingship in a single wall. It was the means by which Seti I legitimised his own rule by connecting himself to an unbroken chain of divine authority stretching back to the creation of the world. Your guide explains why certain kings are conspicuously absent — Hatshepsut, Akhenaten, Tutankhamun, Ay, and Horemheb are all omitted, their reigns too controversial or disputed to include in a document of dynastic legitimacy.\n\nBefore you leave Abydos, your guide takes you to the Osireion — a structure that has puzzled Egyptologists since its discovery and that defies easy explanation even now. Buried underground behind and below the main temple, built in the granite-block architectural style of the Old Kingdom though constructed in the New Kingdom, it consists of a large central hall surrounded by a canal of water with a central island platform — a symbolic representation of the primordial mound of creation rising from the waters of chaos, with the tomb of Osiris at its centre. The Osireion is partially flooded today, its massive granite blocks rising from dark water, the whole space lit in a way that makes it feel genuinely ancient and genuinely mysterious in a way that most ancient sites, however impressive, do not quite manage.",
        duration: "90 minutes",
        location: "Temple of Seti I, Abydos, Sohag Governorate",
        tips:
          "Allow your eyes to adjust to the light in each sanctuary before moving on — the finest details of the paintings are only visible once you have spent a minute or two in each chamber. Ask your guide specifically to show you the section of the outer hall where the colours have been deliberately protected from light — the comparison between the exposed and unexposed sections is dramatic and illuminating.",
      },
      {
        step: 3,
        time: "11:00",
        title: "Lunch Near Abydos",
        description:
          "A natural pause in the day — the morning has been dense with history and beauty and the particular mental effort of genuinely paying attention, and an hour at a local restaurant near Abydos allows everything to settle. Your guide can recommend the best local options; the typical Upper Egyptian lunch of grilled kofta, fresh flatbread, ful mudammas, and local salads accompanied by a glass of intensely sweet tea is both satisfying and exactly right for the context. Lunch is not included in the tour price, but you will find that the food here costs a fraction of what you would pay in a tourist restaurant in Luxor and tastes considerably better.",
        duration: "45 minutes",
        location: "Local restaurant near Abydos",
      },
      {
        step: 4,
        time: "11:45",
        title: "Drive South Toward Dendera",
        description:
          "The drive from Abydos back south toward Luxor, with a stop at Dendera roughly halfway, takes approximately an hour. The Nile Valley road runs close to the river for much of the route — you catch glimpses of the water through the trees, silver and wide and completely unimpressed by the ancient civilisations that have lined its banks for five thousand years. Your guide uses the journey to transition your thinking from the Osirian mythology of Abydos to the quite different religious world of Dendera, where the reigning deity is not the god of the dead but the goddess Hathor — the goddess of love and beauty and music and motherhood and joy and intoxication and the protection of women in childbirth and the welcome of the dead into the afterlife and, in the Ptolemaic theological system centred on this temple, the consort of Horus and the embodiment of the eye of Ra. The Egyptians were not uncomfortable with complexity in their gods. Hathor was many things. She was also, your guide mentions, depicted in her terrifying aspect as the lioness goddess Sekhmet, and the story of how Ra sent her to destroy humanity and then had to trick her into stopping by flooding the earth with beer dyed red so she thought it was blood and drank until she passed out is one of the stranger and more genuinely funny passages in all of ancient religious literature.",
        duration: "1 hour driving",
        location: "Abydos to Dendera via Nile Valley road",
      },
      {
        step: 5,
        time: "13:00",
        title: "Temple of Hathor at Dendera — The Intact Masterpiece",
        description:
          "The Temple of Hathor at Dendera is the best-preserved large temple in Egypt — a statement that requires a moment's consideration, because Egypt has a great many exceptionally well-preserved ancient temples, and the bar is high. What makes Dendera exceptional is not simply the quality of its reliefs, though these are extraordinary, but its structural completeness. The great Hypostyle Hall, the second Hypostyle Hall, the vestibule, the inner sanctuaries, the surrounding enclosure wall, and — most unusually — the roof, almost entirely intact, all survive in a condition that allows you to experience the temple as something approaching its ancient totality. You are not looking at ruins. You are walking through a building.\n\nBuilt primarily during the Ptolemaic period (the last three centuries BC) and the early Roman period, Dendera is superficially Egyptian in style while being simultaneously a product of a world that had been profoundly changed by Alexander the Great's conquest and the subsequent blending of Egyptian and Greek intellectual traditions. The astronomical ceiling in the Hypostyle Hall is the most immediate and famous expression of this synthesis: a vast painted sky covering the entire ceiling of the hall, depicting the 36 Decans (ten-day periods of the Egyptian calendar), the signs of the zodiac in their Babylonian/Greek forms adopted into the Egyptian tradition, the planets, the phases of the moon, the goddess Nut arched across the heavens with the stars emerging from her body, and the sun barque of Ra making its daily journey from east to west. The dominant colour is deep lapis blue — the blue of the Egyptian night sky as imagined from the inside of a temple. The gold and the reds and the white figures against that blue ceiling create an effect that is almost disorienting in its beauty.\n\nYour guide takes you beyond the famous ceiling to the aspects of Dendera that most visitors miss: the underground crypts — long, low stone passages running beneath the temple floor, accessible through trapdoors in the sanctuary floor, their walls covered in intricate and technically perfect reliefs that were carved in almost total darkness and were never intended to be seen. These crypts held the temple's most sacred objects: the images of the gods used in ceremonies, the ritual equipment, the documents of the temple's foundation. The reliefs on the crypt walls include some of the most technically accomplished carving in Egypt, and they were made by artists working in a space barely large enough to move in, lit only by oil lamps, for an audience of the gods. And then, the roof: up a steep stone staircase through the darkness, emerging suddenly into the blazing Nile Valley light with the surrounding desert and the green valley and the distant thread of the river spread out in every direction. The roof-top shrines used for the New Year Festival — when the statue of Hathor was brought up from the inner sanctuary and exposed to the direct rays of the sun to revitalise her divine power — are here, decorated with reliefs of the ceremony that brought new life to the gods every year.",
        duration: "2 hours",
        location: "Temple of Hathor, Dendera, Qena Governorate",
        tips:
          "The famous Dendera Zodiac displayed inside the temple is a high-quality cast reproduction — the original was removed by French archaeologists in 1821 and is now displayed in the Louvre in Paris. This is worth knowing before you visit. The crypts beneath the temple are narrow and low-ceilinged — if you are claustrophobic, discuss with your guide before descending.",
      },
      {
        step: 6,
        time: "15:00",
        title: "Return Drive to Luxor",
        description:
          "The drive south back to Luxor takes approximately one hour along the Nile Valley road — a quieter journey than the morning's, the day's temples turning over slowly in the mind, the landscape outside the window familiar now from the morning and somehow more domestic for it. You arrive at your hotel in the mid-afternoon with time to rest before the evening.",
        duration: "1 hour driving",
        location: "Dendera to Luxor",
      },
      {
        step: 7,
        time: "16:00",
        title: "Drop-off at Hotel",
        description:
          "Your driver delivers you to your hotel entrance. Your Aurevian Tours guide departs with personalised recommendations for your remaining time in Luxor based on what you have seen today and what, in their experience, would complement it best. End of tour.",
        duration: null,
        location: "Your hotel, Luxor",
      },
    ],
    importantInfo: [
      "This is a long and rewarding day — approximately ten hours in total. Wear comfortable shoes you can walk in for extended periods",
      "Bring sufficient water for the road: at least 1.5 litres per person, more in summer",
      "Dress modestly at both temples — shoulders and knees covered throughout",
      "Lunch is not included in the tour price. Bring cash (~$5–15) or your own food for the midday break",
      "The drive to Abydos is approximately 2.5 hours each way — bring a book, music, or simply enjoy the landscape",
      "Sunscreen and a hat are essential — both temples have limited shade in their outer areas",
    ],
    meetingPoint: {
      description: "Hotel pickup anywhere in Luxor city — your Aurevian Tours guide comes directly to you",
    },
    accessibility:
      "Easy to moderate. Both temples involve walking on mostly flat ground with some steps. The Dendera crypts require crouching and are not suitable for those with mobility limitations.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. 4-Day Nile Cruise from Luxor to Aswan
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "4-Day Nile Cruise from Luxor to Aswan",
    images: ["/images/tours/cruise.jpeg"],
    slug: "4-day-nile-cruise-luxor-aswan",
    description:
      "There is a particular quality of light on the Nile in the late afternoon, somewhere between Edfu and Kom Ombo, when the sun has dropped to about twenty degrees above the western horizon and the river turns from silver to hammered gold and the palm trees on both banks cast shadows that stretch all the way to the water's edge. You are sitting on the upper deck of your cruise ship in a comfortable chair, a glass of something cold in your hand, the engines a distant vibration far below you, and the ancient landscape of Upper Egypt is drifting past at a pace that seems to have been specifically calibrated to allow you to see it properly — not so fast that the details blur, not so slow that you become impatient, but exactly at the speed that a river has always moved through a desert valley, carrying everything along with it.\n\nThe four-night Nile cruise from Luxor to Aswan is, by any measure, one of the great journeys of the world. Not merely because of the monuments it visits — though these include some of the finest ancient temples on earth — but because of the mode of travel itself. The Nile between Luxor and Aswan is the same river that has connected these same cities for five thousand years. The temples that line its banks were built by rulers who used exactly this stretch of water as their highway: Ramses II sailing from his capital to his building projects, priests transporting the sacred statues of the gods during festival processions, traders carrying grain and stone and gold between the cities of Upper Egypt. When your ship sails past a bend in the river and the Temple of Horus at Edfu appears on the bank above its landing stage, you are seeing it from exactly the same angle and distance that ancient visitors saw it, arriving from exactly the same direction.\n\nOver four nights aboard a comfortable, fully equipped Nile cruiser with spacious cabins, attentive service, and all meals included, your Aurevian Tours guide leads you through the complete sequence of monuments between Luxor and Aswan: the Karnak and Luxor temples on the first evening, the Valley of the Kings and the Mortuary Temple of Hatshepsut on the second morning, the Temple of Horus at Edfu with its extraordinary sacred drama reliefs on the third morning, the unique double temple of Sobek and Horus at Kom Ombo in the afternoon, and the magical island temple of Isis at Philae in Aswan on the final day — with a traditional felucca sailing excursion among the granite islands thrown in as an unhurried coda. The cruise is the most graceful possible way to travel through ancient Egypt. The river takes you. The temples appear. The evenings are spent on deck watching the stars appear over the desert. It is exactly as good as it sounds.",
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
      "4 nights aboard a comfortable air-conditioned Nile cruise ship with spacious cabins and attentive crew",
      "Visit Karnak and Luxor temples on Day 1 in the golden late afternoon",
      "Full morning in the Valley of the Kings with your licensed Egyptologist guide",
      "Arrive at Edfu Temple by traditional horse-drawn carriage through the local market streets",
      "Explore the unique dual-deity Temple of Sobek and Horus at Kom Ombo",
      "Motorboat ride to the island temple of Philae and felucca sail among Aswan's granite islands",
      "All meals (full board) throughout the cruise — breakfast, lunch, and dinner every day",
    ],
    includes: [
      "4 nights accommodation in private cabin aboard Nile cruise ship",
      "All meals throughout — full board from Day 1 lunch to Day 5 breakfast",
      "All guided excursions with licensed Egyptologist",
      "All entrance fees to every included site",
      "Airport/station transfer on arrival and departure",
      "Horse carriage ride at Edfu (included in Day 3 excursion)",
      "Motorboat transfer to Philae Island",
    ],
    excludes: [
      "International flights to and from Egypt",
      "Travel insurance — strongly recommended",
      "Gratuities (~$5–10 per person per day, distributed among guide, driver, and ship crew)",
      "Personal expenses including laundry and minibar",
      "Optional tomb entries — Tutankhamun tomb (~$16.50)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Luxor — Embarkation & the Two Great East Bank Temples",
        description:
          "Your Nile journey begins with check-in aboard your cruise ship at the Luxor dock, a welcome lunch as you settle into your cabin, and an afternoon tour of Karnak and Luxor — the two greatest temples on the East Bank, seen in the extraordinary golden light of the late afternoon.",
        activities: [
          {
            time: "12:00",
            title: "Embarkation — Boarding Your Home on the Nile",
            description:
              "Transfer to the cruise ship dock in Luxor, where your Aurevian Tours guide is waiting to welcome you aboard and introduce you to the ship's crew. Your cabin is ready — typically a double room with a picture window or balcony looking out over the river, with air conditioning, private bathroom, and all the basic comforts you need for four very full days. After a welcome lunch onboard, your guide gathers everyone for a brief orientation: what you will see over the next four days, the rhythm of the cruise, practical information about meals and excursion schedules, and an introduction to the history of the Nile Valley you are about to sail.",
            duration: "90 minutes",
            location: "Cruise ship dock, Luxor East Bank",
          },
          {
            time: "14:00",
            title: "Karnak Temple — The Largest Religious Complex Ever Built",
            description:
              "The perimeter wall at Karnak encloses 2 square kilometres — large enough to contain ten average European cathedrals. The complex was built over more than 2,000 years by at least 30 successive pharaohs, each adding to what their predecessors had created, so that walking through Karnak today is less like visiting a single building and more like walking through the entire history of ancient Egyptian architecture compressed into a single site. Your guide leads you in from the riverside quay — the ancient Nile-side dock where the sacred barques arrived during the Opet Festival processions — through the Avenue of Ram-headed Sphinxes, each sheltering a small figure of the pharaoh between its forepaws, representing the king under the protection of Amun-Ra. Beyond the First Pylon — the last and largest gateway to be built at Karnak, begun by Nectanebo I in the 4th century BC and never quite finished, still showing its ancient mud-brick construction ramp on the interior face — lies the open forecourt and then the Great Hypostyle Hall. Nothing completely prepares you for it. One hundred and thirty-four columns in sixteen rows, covering 5,000 square metres, the two central rows of twelve columns each reaching 23 metres high. Your guide stands in the centre of this column forest and lets you simply look for a moment before beginning to speak.",
            duration: "2 hours",
            location: "Karnak Temple Complex, East Bank Luxor",
          },
          {
            time: "17:00",
            title: "Luxor Temple — Honey-Coloured Stone at Dusk",
            description:
              "A fifteen-minute walk south along the Nile Corniche brings you to Luxor Temple, built primarily by Amenhotep III around 1390 BC and enlarged by Ramses II a century later — a temple of more intimate proportions than Karnak but of extraordinary elegance, its honey-coloured sandstone warm in the late afternoon light. Your guide explains the temple's original purpose — not as a general house of worship but as the specific destination of the annual Opet Festival, when the statues of Amun, Mut, and Khonsu were carried in procession from Karnak Temple to Luxor over a period of approximately three weeks, with the pharaoh performing secret rituals in the inner sanctuary that renewed his divine power for another year. As the sun descends and the floodlights begin to come on, the temple's massive entrance pylon — decorated with an enormous painted relief of Ramses II at the Battle of Kadesh — takes on a depth and warmth that daytime photographs never quite capture. The lone red granite obelisk (its partner has stood in the Place de la Concorde in Paris since 1836) catches the last of the sun and glows. This is one of the finest architectural moments in Egypt, and you are experiencing it at exactly the right time of day.",
            duration: "1 hour",
            location: "Luxor Temple, Corniche el-Nil",
          },
          {
            time: "19:30",
            title: "Dinner Onboard — The First Night at Moorings",
            description:
              "Return to the ship for a three-course dinner prepared by the ship's kitchen — typically a combination of Egyptian and international dishes, well-executed and plentiful. The ship remains moored in Luxor overnight, and the deck is a pleasant place to spend the evening watching the lights of the city reflected in the river below.",
          },
        ],
        meals: { breakfast: false, lunch: true, dinner: true },
        accommodation: "Onboard Nile cruise ship, moored at Luxor",
      },
      {
        day: 2,
        title: "Luxor West Bank — Valley of the Kings, Hatshepsut & the Colossi",
        description:
          "An early morning dedicated entirely to the Theban Necropolis — the ancient city of the dead that fills the West Bank of Luxor with royal tombs, mortuary temples, and the accumulated funerary ambition of five centuries of New Kingdom pharaohs.",
        activities: [
          {
            time: "06:30",
            title: "Breakfast Onboard",
            description:
              "Full buffet breakfast served early onboard to allow time for the West Bank excursion before the midday heat becomes serious. Coffee, fresh bread, local cheeses, eggs, fruit, and the Egyptian breakfast staples of ful and falafel.",
          },
          {
            time: "07:30",
            title: "Colossi of Memnon — The Singing Statues",
            description:
              "The crossing to the West Bank by minibus or taxi brings you first to the two enormous quartzite statues of Amenhotep III, standing 18 metres tall on the edge of the flat West Bank plain. Your guide explains their history: once the guardians of the largest mortuary temple ever built in Egypt — now entirely vanished except for these two sentinels — they became famous in antiquity when the northern statue began emitting a mysterious musical sound at sunrise each morning, caused by the thermal expansion of a crack created by an ancient earthquake. Pilgrims came from across the Roman Empire to hear the statue sing, and their graffiti — carved into the statue's legs in Latin and Greek — are still visible today. The Roman emperor Septimius Severus had the crack repaired out of piety, ending the singing forever.",
            duration: "20 minutes",
          },
          {
            time: "08:00",
            title: "Valley of the Kings — Three Royal Tombs",
            description:
              "The drive into the desert hills and the arrival at the Valley of the Kings is an experience that the photographs and documentaries have prepared you for but not, ultimately, adequately. Your guide selects the best three tombs open that day and leads you through each one in turn: the steep descending corridors, the antechambers and side rooms, the burial hall with its great stone sarcophagus still in place, and the walls — always the walls — covered from floor to ceiling with painted texts and images whose purpose was not aesthetic but operational, a complete technical instruction manual for the soul navigating the underworld. Your guide reads selected passages in translation and explains the mythological logic behind each scene: what the hybrid creature with the human body and the crocodile head represents, why the pharaoh's name is inside a cartouche on every available surface, what it means that the goddess Nut is depicted stretched across the ceiling of the burial chamber, swallowing the sun in the evening and giving birth to it again at dawn.",
            duration: "90 minutes",
          },
          {
            time: "09:30",
            title: "Mortuary Temple of Hatshepsut at Deir el-Bahari",
            description:
              "The drive along the base of the Theban cliffs brings you to Deir el-Bahari and the Mortuary Temple of Hatshepsut — a building of such architectural purity that it seems less like a product of the ancient world than a statement of some timeless mathematical principle about the relationship between a building and its landscape. Three elegant colonnaded terraces rising in perfect horizontal lines against the sheer vertical face of a three-hundred-metre limestone cliff. Your guide tells Hatshepsut's story: how she ruled Egypt as pharaoh for more than twenty years in full royal regalia including the ceremonial false beard, how she launched trading expeditions to the mysterious land of Punt and filled Egypt's temples with extraordinary new buildings and obelisks, how her stepson Thutmose III spent years after her death systematically erasing her image from every temple and monument in the country — and how completely he failed, because the building itself survived him by three thousand years.",
            duration: "45 minutes",
          },
          {
            time: "11:00",
            title: "Return to Ship — Cast Off Toward Edfu",
            description:
              "Return to the cruise ship for lunch. As you eat, the ship casts off its moorings and the engines begin their low thrum beneath your feet, and the dock and the East Bank of Luxor begin to slide gently backward as the ship turns its prow south. This is the moment the cruise properly begins. The afternoon is free — the sun deck beckons, the river stretches ahead, and the landscape changes slowly and beautifully as the ship moves through the afternoon. Green fields and palm groves and the occasional silhouette of a village on the bank. The odd felucca sailing past in the opposite direction. A fisherman standing completely still in a small wooden boat in the shallows. The same river, the same valley, seen through eyes now full of the morning's temples.",
            duration: "Afternoon sailing south",
          },
          {
            time: "19:30",
            title: "Dinner Onboard — Sailing Through the Evening",
            description:
              "Dinner served as the ship continues its overnight sail toward Edfu, the stars over the desert extraordinary in the absence of city light pollution.",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "Onboard Nile cruise ship, sailing south",
      },
      {
        day: 3,
        title: "Edfu Temple & Kom Ombo — Two Perfect Temples in One Day",
        description:
          "Two completely different but equally extraordinary temples, visited on the same day as the ship makes its way south toward Aswan — the best-preserved ancient temple in Egypt followed by the only temple in the ancient world simultaneously dedicated to two equal gods.",
        activities: [
          {
            time: "06:00",
            title: "Breakfast Onboard — Ship Arrives Edfu",
            description:
              "Wake to find the ship moored at Edfu's landing stage, the town's early-morning sounds drifting across the water. Breakfast is served onboard before the excursion.",
          },
          {
            time: "07:00",
            title: "Horse Carriage Through Edfu's Streets to the Temple",
            description:
              "This is the Aurevian Tours way to arrive at Edfu: not by tourist coach from the dock, but by traditional horse-drawn carriage through the actual streets of the town, clip-clopping past the local coffee houses and spice sellers and school children, the enormous pylon of the Temple of Horus gradually revealing itself above the rooftops as you approach. The carriage ride takes ten minutes and is one of the genuinely memorable small pleasures of the entire cruise.",
            duration: "10 minutes",
          },
          {
            time: "07:30",
            title: "Temple of Horus at Edfu — The Best-Preserved Temple in Egypt",
            description:
              "The Temple of Horus at Edfu is the best-preserved ancient temple in Egypt — a claim that your guide explains is not simply a matter of the quality of the stone or the shelter provided by desert sand during the centuries when the temple was buried and forgotten, though both of these played their role. It is preserved because it was built relatively late — the Ptolemaic period, between 237 and 57 BC — and because its design, while following ancient Egyptian conventions in every detail, reflects a level of systematic completeness that earlier temples did not always achieve. The 36-metre entrance pylons are intact. The great courtyard is intact. Both hypostyle halls are intact. The inner sanctuary, with its original stone naos — the barque shrine that housed the sacred statue of Horus during ceremonies — is intact. Even the surrounding enclosure wall is largely intact. You are walking through a complete ancient temple, not a magnificent ruin, and the distinction matters enormously to the experience.\n\nYour guide leads you to the feature that most visitors miss entirely: the Sacred Drama, a sequence of seventeen carved panels on the outer enclosure wall depicting the annual ritual battle between Horus and Set — the mythological conflict between order and chaos, light and darkness, legitimate rule and usurpation — enacted in sequential images that read like the world's oldest graphic novel. The story has a beginning, a middle, a climax in which Horus harpoons Set in the form of a hippopotamus, and a resolution in which the gods celebrate the victory of cosmic order. In the inner courtyard, find the famous black granite Horus falcon: life-size, perfectly carved, wearing the double crown of Egypt, standing guard over the sanctuary with the absolute self-possession of a god who has always known he would win.",
            duration: "90 minutes",
            location: "Edfu Temple, Aswan Governorate",
            tips:
              "The Sacred Drama reliefs on the outer enclosure wall are not on the standard tour route for most operators — ask your guide specifically to include them. They are the most important and interesting narrative reliefs in the entire temple and almost no one sees them.",
          },
          {
            time: "09:30",
            title: "Return to Ship — Morning Sail to Kom Ombo",
            description:
              "Return by horse carriage to the dock and back aboard the ship for a relaxed late morning as the vessel continues south along the Nile toward Kom Ombo. Lunch is served onboard as the river curves through increasingly dramatic desert scenery — the limestone cliffs higher and more imposing here than upstream, the occasional Nubian-style house appearing on the bank with its colourful decorations.",
            duration: "2–3 hours sailing",
          },
          {
            time: "14:00",
            title: "Double Temple of Kom Ombo — Two Gods, One Perfect Symmetry",
            description:
              "Kom Ombo is unique in the entire corpus of ancient Egyptian religious architecture: the only temple ever built simultaneously to two equal and co-dominant deities, its design a perfect bilateral symmetry that reflects the dual nature of its divine occupants. The right half of the temple belongs to Sobek — the crocodile-headed god of fertility, water, and the generative power of the Nile, worshipped here since the earliest periods of Egyptian history when this stretch of the river was thick with sacred crocodiles. The left half belongs to Haroeris, the Elder Horus — the falcon-headed sky god in his ancient, pre-dynastic form, here manifesting as the Lord of the Two Lands and the protector of the pharaoh. Everything is doubled: two entrance courts, two hypostyle halls, two inner sanctuaries, two complete sets of ritual spaces. The ancient priests of Sobek used the right side; the priests of Horus used the left. Neither tradition subordinated the other.\n\nYour guide takes you beyond the main temple structure to three extraordinary supplementary features. The Crocodile Museum, housed in one of the temple's ancillary structures, displays dozens of mummified crocodiles found in a cache beneath the temple — some wrapped in linen like royal mummies, some preserved simply by the desiccating desert climate, ranging in size from hatchlings to adults. They were sacred animals, living embodiments of Sobek, maintained in pools attached to the temple and mummified after death as offerings to the god. On one of the inner temple walls, look for the famous medical instruments: a carved panel depicting forceps, scalpels, bone saws, birthing chairs, medicine jars, and other surgical tools — evidence of a medical school once associated with this temple, where priests who were also physicians practised a form of medicine that combined religious ritual with genuine empirical knowledge. And find the ancient Nilometer — a circular stone shaft with carefully inscribed measurement marks, used for two thousand years to measure the annual Nile flood and calculate the agricultural taxes farmers would owe based on how much the river rose.",
            duration: "90 minutes",
            location: "Kom Ombo Temple, Aswan Governorate",
            tips:
              "The medical instruments on the inner wall are one of the most fascinating and frequently overlooked details in Egyptian temple architecture — most visitors walk straight past them. Your guide will point them out specifically, but keep your eyes open on the way to the inner sanctuary.",
          },
          {
            time: "16:00",
            title: "Final Sail to Aswan — Sunset on the Nile",
            description:
              "The last leg of the cruise: re-board the ship for the two-hour sail south to Aswan as the sun descends toward the desert horizon. The landscape has changed noticeably since Luxor — the cliffs are higher and more dramatic, the desert closer to the river's edge, the Nubian cultural influence visible in the architecture of the villages on the bank. This is one of the most beautiful stretches of the entire Nile Valley, and the sunset light on the water and the desert is extraordinary.",
            duration: "2 hours sailing",
          },
          {
            time: "19:30",
            title: "Dinner Onboard — Arrive at Aswan",
            description: "Dinner served as the ship arrives and moors at Aswan for the remaining nights of the cruise.",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "Onboard Nile cruise ship, moored at Aswan",
      },
      {
        day: 4,
        title: "Aswan — Philae Temple Island & Felucca Among the Granite Islands",
        description:
          "Aswan is the most beautiful city on the Egyptian Nile — a claim that requires some qualification, since Luxor and Cairo both have their passionate advocates, but that almost everyone who has visited all three eventually makes. The granite outcroppings that break the river into channels here create a landscape of extraordinary visual complexity, the dark grey rock and the brilliant blue water and the vivid green date palms combining in a way that is genuinely, unmistakably beautiful. The ancient Egyptians came here for the granite — the hardest, most durable stone available in Egypt, used for the obelisks and colossal statues that defined the aesthetic of their civilisation. The Nubians who lived here built with it differently, in smaller, more intimate structures that expressed a different relationship with the same material. And the island of Philae, in the reservoir created by the first Aswan Dam, holds a temple that was the last built in the classical Egyptian style and the last to remain in active use — a place where the ancient religion survived, just barely, until the 6th century AD, making it the final outpost of a tradition three thousand years old.",
        activities: [
          {
            time: "07:00",
            title: "Breakfast Onboard",
            description:
              "Full breakfast onboard. This is the final full day of the cruise, and it is a gentler day than the previous three — two carefully chosen experiences rather than a full itinerary of monuments, allowing the week's history to settle and some genuine relaxation to occur.",
          },
          {
            time: "08:00",
            title: "Motorboat to Philae — The Temple That Moved Itself",
            description:
              "A short drive from the dock to the motorboat landing at Shellal, where small wooden motorboats shuttle visitors across the reservoir to Agilkia Island. The boat ride itself is pleasant — the water here is deep and calm, the surrounding granite islands dark against the blue sky, the occasional ibis standing on a rock. And then Agilkia Island appears, and on it the Temple of Isis — and the story your guide is about to tell you is one of the most extraordinary in the history of archaeological preservation.\n\nThe original Philae Island, where the temple had stood since the 4th century BC, was gradually submerged after the construction of the first Aswan Dam in 1902, and was completely drowned when the High Dam was completed in 1970 and Lake Nasser rose. In one of UNESCO's greatest rescue operations — a massive international engineering and archaeological effort lasting from 1972 to 1980 — the entire temple complex was dismantled stone by stone, each block numbered and catalogued, transported by barge to the adjacent higher island of Agilkia (which was reshaped to match the topography of the original Philae), and painstakingly reconstructed in exactly its original configuration. The temple you are walking through is the original temple. Every stone is in its original position. The UNESCO team simply moved the island.\n\nDedicated to the goddess Isis in her role as the devoted wife who resurrects her murdered husband Osiris and the protective mother who raises their son Horus to avenge his father, Philae was one of the last functioning temples of the old religion. Egyptian priests continued to worship here, performing the ancient rituals that had been performed for three thousand years, until a Byzantine emperor ordered the temple closed in 535 AD — making Philae the absolute last place in the world where the ancient Egyptian religion was publicly practised. Your guide leads you through the processional entry colonnade, the great first pylon, the Birth House where the birth of Horus was ritually re-enacted each year to renew the divine kingship, and the inner sanctuary where the most sacred image of Isis was kept.",
            duration: "90 minutes",
            location: "Agilkia Island, Aswan Reservoir",
            tips:
              "The motorboat ride to Philae passes through a landscape of extraordinary dark granite islands and blue water — sit on the outside if possible and enjoy the fifteen-minute crossing.",
          },
          {
            time: "10:00",
            title: "Felucca Sailing Among the Granite Islands",
            description:
              "Board a traditional wooden felucca at the Aswan dock — a sailing craft whose triangular lateen sail and curved wooden hull have remained essentially unchanged since the pharaonic period — for an hour of completely unhurried sailing among the granite islands of the Nile at Aswan. There is no engine. There is no itinerary. The captain reads the wind and the current, adjusts the sail with a casual expertise that comes from decades on this river, and the felucca glides silently between the islands in whatever direction the breeze dictates.\n\nYou drift past Elephantine Island — the oldest continuously inhabited site in Aswan, home to an ancient settlement that predates the pyramids, named for the elephant-tusk ivory that was traded here — and the Botanical Gardens Island, a colonial-era creation now home to an extraordinary collection of tropical plants from across the former British Empire. On the hill above the city, the white dome of the Aga Khan Mausoleum catches the sun. Somewhere below the water, the original Philae Island lies submerged beneath the reservoir. The only sounds are the sail filling with wind and the water parting at the bow.",
            duration: "1 hour",
            location: "Nile River, Aswan",
            tips:
              "This is genuinely one of the most relaxing experiences in Egypt. It is worth putting the phone away for at least part of the sail and simply watching the landscape.",
          },
          {
            time: "11:30",
            title: "Return to Ship — Free Afternoon",
            description:
              "Return to the ship for lunch. The afternoon is unscheduled — the first genuinely free time of the cruise, and a welcome gift. The sun deck is pleasant in the Aswan afternoon, which is warm without the oppressive heat of midsummer. Independent exploration of the Aswan Corniche is also possible — a twenty-minute walk from the dock leads you to the main market street, the local spice and craft shops, and the handful of excellent waterfront restaurants.",
          },
          {
            time: "19:30",
            title: "Farewell Dinner — The Last Evening on the River",
            description:
              "The crew typically marks the final evening with something slightly more special than a regular dinner — a particular effort with the menu, perhaps some music. Your guide collects any remaining questions about tomorrow's disembarkation and gives recommendations for anyone planning to continue from Aswan to Abu Simbel or elsewhere.",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "Onboard Nile cruise ship, moored at Aswan",
      },
      {
        day: 5,
        title: "Aswan — Disembarkation & Departure",
        description:
          "A final breakfast onboard before the cruise ends and you transfer to Aswan Airport, the train station, or your next accommodation.",
        activities: [
          {
            time: "07:00",
            title: "Final Breakfast Onboard",
            description:
              "Last breakfast on the cruise ship. Collect your luggage from the cabin, say your farewells to the crew, and prepare to disembark. This is the quiet, bittersweet end of a journey that most travellers, at this point, are already planning to repeat.",
          },
          {
            time: "08:00",
            title: "Disembarkation & Transfer",
            description:
              "Disembark at Aswan dock. Your Aurevian Tours driver provides a transfer to Aswan Airport, the train station, or your next accommodation. End of cruise. The Nile continues south behind you, unchanged and unhurried, carrying the same water it has always carried toward the sea.",
          },
        ],
        meals: { breakfast: true, lunch: false, dinner: false },
        accommodation: null,
      },
    ],
    importantInfo: [
      "Cabin check-in begins at 12:00 on Day 1. Earlier arrivals are welcome to board and use common areas, but cabins may not be ready until noon",
      "Pack lightweight, modest clothing — you will be visiting temples on most days and shoulders and knees must be covered",
      "Tipping for crew and guide is expected and appreciated: approximately $5–10 per person per day, distributed at your discretion",
      "The ship sails overnight on Day 2 — some gentle movement and engine vibration is normal and most guests find it sleep-inducing rather than disruptive",
      "All dietary requirements can be accommodated — inform Aurevian Tours at time of booking",
      "Sunscreen and a wide-brimmed hat are essential for all excursions",
    ],
    meetingPoint: {
      description:
        "Your Aurevian Tours guide meets you at Luxor Airport or Luxor Train Station on Day 1 and accompanies you to the cruise ship dock",
    },
    accessibility:
      "The cruise ship is fully accessible. All shore excursions involve moderate walking on ancient stone surfaces with some steps and uneven terrain. Fully accessible alternatives can often be arranged — please advise at booking.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. Valley of the Nobles, Medinet Habu & Deir el-Medina Tour
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Valley of the Nobles, Medinet Habu & Deir el-Medina Tour",
    images: ["/images/tours/habu.jpeg"],
    slug: "valley-nobles-medinet-habu-deir-medina-luxor",
    description:
      "Everyone goes to the Valley of the Kings. It is the obvious place, the famous place, and it absolutely deserves its fame — the royal tombs are extraordinary and no one should leave Luxor without visiting them. But there is another West Bank, one that most tourists never find, and it is in some ways more moving and more human than the valley of the pharaohs. This is the tour that takes you there.\n\nThe Valley of the Nobles is a hillside cemetery containing the painted tombs of the men who actually ran ancient Egypt while the pharaohs received the glory: the scribes and viziers and tax inspectors and army commanders and priests and overseers who made the empire function day by day, and who painted their own tombs not with the sacred texts of the Book of the Dead that filled the royal chambers but with images of their own lives as they had actually lived them. You see men fishing in the papyrus marshes and women picking grapes from trellised vines and musicians playing at banquets and servants grinding grain and craftsmen hammering copper and market traders arguing over prices. These people loved life enormously and they wanted to remember it in detail. The result is a collection of paintings that functions as the most complete visual record of daily life in the ancient world — and that is also, in chambers where you often stand almost alone while the Valley of the Kings fills up with visitors, profoundly intimate and moving.\n\nDeir el-Medina is something else again: a village. A real, excavated, documented ancient village where the artists and craftsmen who spent their working lives building and painting the royal tombs in the Valley of the Kings lived for approximately five hundred years, from around 1550 to 1070 BC. Their houses have been excavated. Their working rosters and legal disputes and love letters and shopping lists survive in the thousands of papyrus documents discovered here. Their own tombs — which they built and decorated for themselves with the same skill they applied to the royal commissions — are above the village on the hillside, and they are extraordinary. And then there is Medinet Habu: the mortuary temple of Ramses III, one of the largest and most visually overwhelming buildings on the entire West Bank, its exterior walls covered in enormous military reliefs still carrying traces of their original brilliant colour after three thousand years.\n\nThis is the West Bank that most visitors never see. It is the one our guides are most passionate about showing.",
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
      "Vividly painted nobles' tombs showing banquets, harvests, hunting, and daily life — far fewer crowds than the Valley of the Kings",
      "The mortuary temple of Ramses III at Medinet Habu — one of the best-preserved temples on the West Bank with enormous military reliefs",
      "Deir el-Medina — the ancient craftsmen's village, including the world's earliest recorded labour strike",
      "The workers' own beautifully decorated tombs on the hillside above the village",
      "Expert Aurevian Tours Egyptologist guide throughout",
      "Hotel pickup and drop-off included",
    ],
    includes: [
      "Licensed Egyptologist guide",
      "Hotel pickup and drop-off",
      "All entrance fees",
      "Air-conditioned private vehicle",
    ],
    excludes: [
      "Gratuities for guide and driver",
      "Personal expenses",
    ],
    itinerary: [
      {
        step: 1,
        time: "08:00",
        title: "Hotel Pickup — Introduction to the Other West Bank",
        description:
          "Your Aurevian Tours guide collects you from your hotel and crosses the Nile toward the West Bank, using the thirty-minute journey to explain what makes this particular tour different from the standard Valley of the Kings experience. The royal tombs, your guide notes, are overwhelmingly concerned with what happens after death: the journey through the underworld, the judgment of the soul, the eventual resurrection. They tell us an enormous amount about what ancient Egyptians believed, but relatively little about how they actually lived. The sites you are visiting today provide the opposite perspective. The nobles' tombs are full of life — feasts and music and farming and fishing and all the textures of ordinary existence that the aristocracy of New Kingdom Egypt wanted to carry with them into eternity. Deir el-Medina gives us something rarer still: the lives of working people, preserved in documentary detail that modern historians of ancient life would give anything to have for other civilisations. These are real people. They had names and wages and disputes with their employers and complicated family situations. One of them wrote what is generally acknowledged to be the first recorded love poem in human history.",
        duration: "30 minutes",
        location: "Luxor East Bank to West Bank",
      },
      {
        step: 2,
        time: "08:30",
        title: "Valley of the Nobles — The Painted Lives of Ancient Egypt",
        description:
          "The hillside of Sheikh Abd el-Qurna on the West Bank contains more than four hundred tombs of New Kingdom officials, nobles, and high priests — though only a small number are open to visitors at any given time. Your guide selects two or three tombs based on current accessibility and what will provide the most vivid and varied picture of noble life in the 18th Dynasty.\n\nThe Tomb of Nakht — a royal scribe and astronomer under Thutmose IV, a man of modest rank but exceptional taste in tomb decoration — is one of the most celebrated small tombs in Egypt. The main chamber is covered with paintings of striking quality and freshness: three female musicians playing the lute, double flute, and harp at a banquet, depicted with a freedom of line and an individuality of facial expression rarely seen in more formal Egyptian art; hunting scenes in the papyrus marshes showing Nakht with his family in a boat, throwing a throwstick at birds rising from the reeds; agricultural scenes of workers harvesting grain and treading grapes with a joy that looks entirely genuine. Nakht himself appears throughout, presiding over his afterlife estate with the satisfied air of a man who has arranged things exactly as he would have wished.\n\nThe Tomb of Ramose — vizier under both Amenhotep III and the heretic king Akhenaten — is technically unfinished but historically extraordinary, because it was begun in the conventional style of the 18th Dynasty and then left incomplete when its owner converted to Akhenaten's new sun-worship religion and relocated to the new capital at Amarna. In the left wall, the carvings are in the conservative, elegant style of Amenhotep III's reign — perfectly proportioned figures in the classic Egyptian canon, executed with extraordinary skill. In the right wall, the style has suddenly, dramatically changed: the elongated, expressive, naturalistic figures of the Amarna style appear, showing Akhenaten and Nefertiti at a window of appearances. Two artistic worlds, in a single chamber. Your guide explains the historical upheaval that produced this remarkable document.\n\nThe Tomb of Menna — field inspector under Thutmose IV, responsible for surveying and recording agricultural land — is celebrated for its detailed, specific, observed scenes of farming life: workers measuring and harvesting grain, a scribe recording the figures, women gathering wheat into bundles, children gleaning the leftover grain from the field after the harvest is done. In one of the most human details in all of ancient Egyptian art, two small girls sit on the edge of the field having a private conversation while the grown-ups work around them. Three thousand years old and still completely recognisable.",
        duration: "60 minutes",
        location: "Sheikh Abd el-Qurna, West Bank Luxor",
        tips:
          "These tombs are almost always significantly less crowded than the Valley of the Kings — it is entirely normal to spend twenty minutes in a tomb with only your guide and no other visitors. The paintings here are in some ways more immediately affecting than the royal tombs precisely because they show people living recognisably human lives rather than performing mythological rituals.",
      },
      {
        step: 3,
        time: "09:45",
        title: "Deir el-Medina — The Village That Built the Valley of the Kings",
        description:
          "The road from the nobles' hill down into the valley at the base of the Theban cliffs leads to one of the most extraordinary archaeological sites in Egypt — a site that is also, in the peculiar way of Egyptology, almost entirely unknown outside the academic world. Deir el-Medina: the village of the craftsmen.\n\nFor approximately five hundred years during the New Kingdom, from roughly 1550 to 1070 BC, a specialised community of artists, sculptors, painters, draftsmen, and labourers lived in this walled village at the entrance to a hidden valley, isolated from the rest of the world, working in strict secrecy on the royal tombs in the Valley of the Kings. They were not slaves. They were skilled state employees, paid in grain and oil and fish and vegetables delivered by government courier on a regular schedule — the ancient equivalent of a salary. They had contracts, grievance procedures, a local court that adjudicated disputes, priests, schools for their children, and their own elaborate system of social ranks within the community. And they were obsessively documented. The mass of papyrus texts discovered here — work rosters, court records, letters, literary texts, medical prescriptions, dream interpretation manuals, and a great deal of personal correspondence — makes this the best-documented community in the entire ancient world.\n\nThe most famous document from Deir el-Medina records an event in the 29th year of Ramses III's reign: the grain rations that were the workers' wages had not been delivered for two months, and the men laid down their tools, walked out of the valley, and sat down outside the mortuary temple of Thutmose III in protest until their wages were paid. They sent formal written complaints to the vizier. They repeated the action several times over the following weeks as ration deliveries continued to be erratic. This is the world's earliest recorded labour strike, and your guide tells it with the pleasure of someone who finds it genuinely delightful that ancient Egyptian tomb workers knew how to organise.\n\nThe village itself — its mud-brick house foundations neatly excavated and labelled — can be walked in about twenty minutes. But the workers' tombs on the hillside above are worth every minute of the steep climb: small pyramid-topped private tombs decorated by the same hands that painted the Valley of the Kings' royal chambers, with similar skill but greater personal expression. The Tomb of Sennefer is covered in extraordinary painted grapevines on the ceiling — a sensory memory of the shade and abundance the owner loved in life. The Tomb of Inherkau shows the tomb owner in vivid domestic scenes alongside mythological images of startling imagination. These are the finest privately decorated tombs in Luxor, and you will almost certainly have them entirely to yourself.",
        duration: "45 minutes",
        location: "Deir el-Medina, West Bank Luxor",
        tips:
          "The workers' tombs on the hillside above the village require a short, moderately steep climb. The view of the Nile Valley from the hilltop is excellent and worth the effort even apart from the tombs themselves.",
      },
      {
        step: 4,
        time: "10:45",
        title: "Medinet Habu — The Temple That Documents a War",
        description:
          "The mortuary temple of Ramses III at Medinet Habu is one of the most visually overwhelming monuments on the entire West Bank, and it is consistently undervisited — which means you will often encounter it in a state of near-solitude that its scale seems to demand. The outer walls rise to enormous height, the exterior surfaces covered in reliefs of extraordinary scale and detail depicting the pharaoh's military campaigns: the great naval battle against the Sea Peoples — Bronze Age raiders from the Mediterranean whose identity remains one of Egyptology's most contested questions — depicted in a sequence of panels so large and detailed that they function as a genuine historical document of ancient warfare; the land battles against the Libyans; the triumphant return with prisoners and severed hands counted and piled before the pharaoh to be tallied by scribes.\n\nYour guide explains the context: Ramses III (not to be confused with the far more famous Ramses II) ruled at a moment of civilisational crisis, the period around 1175 BC when the Bronze Age was collapsing across the entire eastern Mediterranean — the Mycenaean civilisation falling, the Hittite Empire disintegrating, Cyprus and the Levantine cities burning — and Egypt under near-simultaneous attack by land and sea from multiple directions simultaneously. The reliefs at Medinet Habu are the primary source for what happened at this extraordinary historical moment. They show the Egyptian navy engaging the Sea Peoples' ships in a battle in the mouths of the Nile — the first naval battle to be depicted in human history — with the chaos and violence of the engagement captured in images of astonishing specificity.\n\nThe entrance to the temple is through a unique Syrian-style migdol gateway — a fortified tower whose form was borrowed from the Syrian fortress architecture the Egyptians encountered during their Levantine campaigns, decorated with scenes of Ramses III in his private harem rooms above and used as a viewing tower for the pharaoh to watch the ceremonial life of his mortuary city below. Inside, the temple's inner halls retain traces of their original painted astronomical ceilings — blue and yellow celestial scenes on the ceiling of the second hypostyle hall that are among the best-preserved painted ceilings on the entire West Bank.",
        duration: "45 minutes",
        location: "Medinet Habu, West Bank Luxor",
        tips:
          "Look up at the ceilings in the inner halls — the original painted astronomical decoration survives better here than in almost any other temple on the West Bank, and almost no one thinks to look up.",
      },
      {
        step: 5,
        time: "11:45",
        title: "Return to the East Bank",
        description:
          "Your guide accompanies you back across the Nile to your hotel, arriving in time for lunch. A morning spent with the real people of ancient Thebes — the artists and officials and workers who made the pharaonic world function — rather than only with its most spectacular monuments.",
        duration: "30 minutes",
        location: "Your hotel, Luxor East Bank",
      },
    ],
    importantInfo: [
      "This tour pairs perfectly with the Valley of the Kings tour — they cover completely non-overlapping sites and together give a far richer picture of the West Bank than either provides alone",
      "Photography is permitted at most sites on this tour — ask your guide for specific rules at each location",
      "Dress modestly throughout — cover shoulders and knees at all tombs and temples",
      "The workers' tombs at Deir el-Medina involve a steep hillside walk — comfortable shoes with good grip are strongly recommended",
      "Best suited to visitors who want to go beyond the standard tourist circuit and engage more deeply with ancient Egyptian history",
    ],
    meetingPoint: {
      description:
        "Hotel pickup anywhere in Luxor city — your Aurevian Tours guide comes directly to your hotel",
    },
    accessibility:
      "Easy to moderate. Medinet Habu and the main Deir el-Medina site are flat and accessible. The workers' tombs on the hillside above the village involve a steep, uneven climb of approximately 5 minutes.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 5. Complete Guided Tour of Luxor
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Complete Guided Tour of Luxor",
    images: ["/images/tours/completo.jpeg"],
    slug: "complete-guided-tour-luxor",
    description:
      "If you have one day in Luxor — a single day to absorb a city that was the centre of the ancient world for five hundred years — this is the tour Aurevian Tours has designed for you. It is, without qualification, the most comprehensive single-day Luxor experience available: five of the most important archaeological sites in the world, visited in the optimal sequence, in the company of an expert licensed Egyptologist guide, with hotel pickup and drop-off and all entrance fees included.\n\nThe day begins on the West Bank in the cool of the early morning, when the Valley of the Kings receives visitors in the best possible conditions — the air still fresh, the light raking across the desert hills in long shadows, the crowd density a fraction of what it becomes by ten o'clock. From the Colossi of Memnon — two ancient guardians standing in the plain, watching the sunrise over the Nile for three thousand years — to the Valley of the Kings, where the pharaohs of Egypt's most powerful era were laid to rest in elaborately painted underground chambers cut deep into the limestone, to the Mortuary Temple of Hatshepsut at Deir el-Bahari, one of the most architecturally extraordinary buildings of the ancient world. Then the crossing back to the East Bank and the afternoon with the greatest temple complex ever built by human hands — Karnak, whose Great Hypostyle Hall alone covers 5,000 square metres of ancient stonework — followed by Luxor Temple in the early evening, one of the finest architectural compositions in Egypt, glowing warm gold in the late light.\n\nThrough all of it, your Aurevian Tours guide provides not a scripted commentary but a genuine engagement with the history — stopping where something is particularly interesting, adjusting the pace to your group, answering questions with the depth of knowledge that comes from years of professional Egyptological study and thousands of hours spent in these specific places. By the time you are delivered back to your hotel in the early afternoon, carrying a full morning's worth of royal tombs and a full afternoon's worth of temple columns, you will have the kind of day in Luxor that most visitors, looking back, describe simply as one of the best days of their lives.",
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
      "Colossi of Memnon — the twin giants of the West Bank plain",
      "Valley of the Kings — three royal tombs with your licensed Egyptologist guide",
      "Mortuary Temple of Hatshepsut — architectural masterpiece at Deir el-Bahari",
      "Karnak Temple Complex — the largest religious building in human history, 134 columns in the Great Hypostyle Hall",
      "Luxor Temple — one of Egypt's finest architectural compositions, beautiful in the late afternoon light",
      "Hotel pickup and drop-off and all entrance fees included",
    ],
    includes: [
      "Licensed Egyptologist guide for the full day",
      "Hotel pickup and drop-off",
      "All entrance fees to all five sites",
      "Air-conditioned private vehicle throughout",
      "Bottled water",
    ],
    excludes: [
      "Optional Tutankhamun tomb entry (~$16.50, payable on the day)",
      "Meals — lunch is not included",
      "Gratuities for guide and driver",
      "Personal expenses",
    ],
    itinerary: [
      {
        step: 1,
        time: "07:00",
        title: "Hotel Pickup — The Logic of the Day",
        description:
          "Your Aurevian Tours Egyptologist guide arrives at your hotel at precisely seven o'clock. The early start is not arbitrary — the Valley of the Kings in the early morning is a fundamentally different experience from the Valley of the Kings at midday, and the difference is not merely one of temperature. The quality of the light, the absence of large tour groups, the relative stillness of the desert valley before the day's visitors arrive in force: all of these things matter to the quality of the experience. In the vehicle on the way to the Nile crossing, your guide gives a brief orientation to the day's structure and what you are about to see, setting the historical context for the West Bank sites — the ancient Theban Necropolis, the city of the dead that mirrored the city of the living across the river — so that when you arrive at the Colossi, you understand what you are looking at and not simply that it is large and old.",
        duration: "20 minutes",
        location: "Your hotel, Luxor",
      },
      {
        step: 2,
        time: "07:20",
        title: "Colossi of Memnon",
        description:
          "Two enormous quartzite statues, each 18 metres tall and carved from a single block of stone transported 700 kilometres from the quarries near modern Cairo. They have stood here for 3,200 years, watching the sun rise over the Nile in the same direction every morning, and they are — despite everything you have read about them, despite the tourist car park beside them and the electricity pylons visible in the background — still extraordinary objects. Your guide explains their original context: they once flanked the entrance pylon of the mortuary temple of Amenhotep III, a structure so large that if it had survived it would have been the largest ancient building in Egypt. It did not survive — the Nile floods dismantled it slowly over millennia, and subsequent pharaohs took its stone for their own projects — leaving only these two statues as the memorial of something that has otherwise completely vanished. The Roman visitors who named them after the Trojan War hero Memnon were connecting them to an older grief, a son calling to his mother at dawn.",
        duration: "20 minutes",
        location: "West Bank plain, Luxor",
      },
      {
        step: 3,
        time: "07:45",
        title: "Valley of the Kings — Three Tombs, Three Worlds",
        description:
          "The approach to the Valley of the Kings through the desert hills — the green Nile Valley disappearing behind you, the limestone cliffs closing in on both sides, the temperature already rising despite the early hour — is designed by geography to create a sense of crossing a threshold into a different realm, and it works. You enter the valley and the context changes entirely. The painted chambers that receive you — three of the sixty-three tombs discovered here, selected by your guide for the richest combination of artistic quality and historical significance — are not ruins in any ordinary sense. They are complete rooms, decorated with the full artistic vocabulary of the New Kingdom at its height, whose purpose was to ensure that the person buried here would survive death and achieve resurrection as the morning sun achieves resurrection every day at dawn. Your guide moves through each tomb with the ease of someone who has been here many hundreds of times but has never lost their enthusiasm for what is here — reading the hieroglyphs directly from the walls, explaining the mythological logic behind each image, pointing out the specific details (a painter's error corrected in a hurry, a later king's cartouche painted over the tomb's original owner, a section of wall where the plastering fell away in antiquity and was repaired by ancient restorers) that make these chambers feel genuinely inhabited by real history rather than simply impressive.",
        duration: "90 minutes",
        location: "Valley of the Kings, West Bank Luxor",
        tips:
          "Photography is prohibited inside all tombs without exception. Flat, closed-toe shoes with a non-slip sole are strongly recommended — the descending corridors are steep and smooth. The optional Tutankhamun tomb (KV62) adds approximately $16.50 and your guide will advise on the day whether the queue is reasonable.",
      },
      {
        step: 4,
        time: "09:30",
        title: "Mortuary Temple of Hatshepsut — Beauty as a Political Act",
        description:
          "The Mortuary Temple of Hatshepsut at Deir el-Bahari — built around 1470 BC, a building of such architectural refinement that it was already being consciously imitated by later builders before Hatshepsut had been dead a century — is the finest building of the New Kingdom period, and the story your guide tells in front of it is one of the most compelling in all of ancient history. A woman who assumed the full titles and regalia of pharaoh and ruled Egypt more successfully than most of the men who preceded and followed her. A builder whose ambition and taste were exceptional even by Egyptian standards. And then a deliberate, systematic effort by her successor to erase her completely from history: images chiselled out, cartouches obliterated, statues smashed and buried in a pit — an ancient attempt at damnation of memory that failed completely, because the building itself survived. You cannot erase a building. The temple at Deir el-Bahari is still here, three thousand four hundred years later, and Hatshepsut's name is known by everyone.",
        duration: "45 minutes",
        location: "Deir el-Bahari, West Bank Luxor",
      },
      {
        step: 5,
        time: "10:30",
        title: "Karnak Temple — Two Thousand Years of Building",
        description:
          "Karnak is not a temple. It is a city of temples — a walled enclosure of 2 square kilometres containing the accumulated religious ambition of thirty successive pharaohs over two millennia of continuous construction, each ruler adding to what existed, expanding the perimeter, building a new pylon, commissioning new statues and obelisks, until the complex became so vast and so layered with history that walking through it is less like visiting a monument and more like reading a civilisation. Your guide does not attempt to show you all of it. What they do instead is take you through the essential sequence — Avenue of Sphinxes, First Pylon, Great Court, Great Hypostyle Hall — while providing the historical narrative that makes the individual elements cohere into a single story: how the Hypostyle Hall was begun by Ramses I, continued by Seti I with reliefs of extraordinary delicacy in the northern half, and completed by Ramses II with reliefs of somewhat greater boldness (and rather more modest artistic quality) in the southern half; how Hatshepsut had two enormous obelisks erected in the heart of the complex and then watched her stepson have them walled up to hide them during his reign; how the Sacred Lake was used by the priests for daily ritual purification and the sacred barque processions on festival days; how the scarab statue of Amenhotep III on the northwest corner of the lake, if you walk around it seven times, is said to bring good luck — a piece of tourist folklore that has been faithfully repeated for at least a century, though its ancient origins are considerably obscure.",
        duration: "2 hours",
        location: "Karnak Temple Complex, East Bank Luxor",
        tips:
          "Karnak covers an enormous area and it is genuinely easy to get disoriented without a guide. Trust your Aurevian Tours Egyptologist to manage the route and the timing — they know exactly how long each section takes and where the light is best for photographs at different times of day.",
      },
      {
        step: 6,
        time: "13:00",
        title: "Luxor Temple — The Ceremony of Evening",
        description:
          "A short drive or leisurely walk along the Nile Corniche brings you to Luxor Temple, the second great East Bank monument and in some ways the more elegantly proportioned of the two. Built primarily by Amenhotep III — whose architectural taste was the finest of any New Kingdom pharaoh — and expanded by Ramses II with the addition of a new entrance pylon and courtyard, the temple is most beautiful in the afternoon light, when the honey-coloured sandstone takes on a warmth and depth that photographs taken in the harsh midday sun never quite capture. Your guide shows you the entrance pylon of Ramses II, the surviving red granite obelisk (its partner in Paris is actually the better-preserved of the two, your guide notes with the mild irony of an Egyptologist who has accepted this minor national indignity), and the elegant colonnade of Amenhotep III — fourteen papyrus-bud columns in perfect alignment, the most refined piece of New Kingdom stone craftsmanship in Luxor. Look also for the Roman shrine, built inside the temple during the Roman period and still retaining traces of its painted decoration, and the Abu Haggag mosque, perched directly on top of the ancient structure at a level that corresponds to the ancient city's accumulated debris — a visible record of how deep history is buried at Luxor.",
        duration: "1 hour",
        location: "Luxor Temple, Corniche el-Nil",
        tips:
          "Luxor Temple is most beautiful in the late afternoon light, when the sandstone glows warmly and the shadows of the columns stretch across the courts. If possible, arrange your schedule to arrive here between 13:00 and 15:00 to experience it in these conditions.",
      },
      {
        step: 7,
        time: "14:30",
        title: "Drop-off at Hotel — The Day Absorbed",
        description:
          "Your guide and driver return you to your hotel. The day began with statues watching the sunrise and ends with columns glowing in the afternoon. In between: five of the most extraordinary monuments in human history, seen in the company of someone who can explain not just what they are but why they matter. End of tour.",
        duration: null,
        location: "Your hotel, Luxor",
      },
    ],
    importantInfo: [
      "This tour is the most comprehensive single-day Luxor experience available — it is genuinely full and demanding. Pace yourself and stay hydrated throughout",
      "The 07:00 start time is essential — do not request a later start as it compromises the Valley of the Kings experience significantly",
      "Wear well-soled, comfortable walking shoes — you will walk 4–5 kilometres across multiple sites",
      "Dress modestly throughout: shoulders and knees covered at all times",
      "Bring a minimum of 2 litres of water per person",
      "Optional Tutankhamun tomb entry (~$16.50) requires cash — bring it just in case",
      "Lunch is not included — your guide can recommend excellent options near Karnak Temple for the midday break",
    ],
    meetingPoint: {
      description:
        "Hotel pickup anywhere in Luxor city and surrounding areas — your Aurevian Tours guide comes directly to your hotel",
    },
    accessibility:
      "Moderate fitness required. Long day with significant walking across varied terrain. Valley of the Kings interiors involve steep, uneven stone passages. All other sites are relatively flat with some steps.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 6. Transfers in Luxor
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Transfers in Luxor",
    images: ["/images/tours/calesa.jpeg"],
    slug: "transfers-luxor",
    description:
      "Arriving in an unfamiliar city after a long flight, or navigating between a cruise ship dock and an airport on the final morning of a holiday, or simply needing a reliable, comfortable ride between your hotel and the West Bank ferry — these are the moments when the quality of your ground transport becomes surprisingly important. Aurevian Tours provides private, professional door-to-door transfer service throughout Luxor and the surrounding area, available around the clock seven days a week, with clean air-conditioned vehicles, licensed and experienced drivers, and meet-and-greet service with a name sign at airports, train stations, and cruise ship docks.\n\nThe drivers who work with Aurevian Tours are not simply chauffeurs. They are people who have spent years moving visitors through Luxor with patience and good humour, who know the city's rhythms and the traffic patterns and the fastest routes at different times of day, and who understand that when you step off a plane after ten hours of travel the last thing you need is confusion or negotiation or the mild anxiety of wondering whether the unofficial taxi tout who approached you in arrivals is actually going to take you where you want to go. Your Aurevian Tours driver will be there with your name on a sign. The vehicle will be exactly what was booked. The journey will be exactly as long as it should be. You will arrive exactly where you are supposed to be.",
    category: "Transfers",
    price: {
      original: 19.33,
      discounted: null,
      currency: "USD",
    },
    duration: "Varies by journey",
    language: ["English"],
    rating: {
      score: 7.9,
      reviews: 98,
    },
    travellers: 1393,
    freeCancellation: true,
    highlights: [
      "Private door-to-door service between any two points in Luxor",
      "Professional, licensed, punctual driver — always with a name sign at airports and stations",
      "Modern, clean, air-conditioned vehicles for all journey types and group sizes",
      "Available 24 hours a day, 7 days a week, including late nights and early mornings",
      "Flight tracking for airport transfers — your driver adjusts automatically for delays",
      "WhatsApp communication with your driver available throughout",
    ],
    includes: [
      "Private air-conditioned vehicle appropriate for your group size",
      "Professional licensed driver",
      "Meet and greet with name sign at airports, stations, and cruise docks",
      "Assistance with luggage",
      "Bottled water on board",
    ],
    excludes: [
      "Gratuities for driver (customary but not mandatory)",
      "Entrance fees to any attraction",
      "Waiting time beyond 60 minutes for delayed arrivals not tracked in advance",
    ],
    itinerary: [
      {
        step: 1,
        time: "On request",
        title: "Booking Confirmation & Driver Assignment",
        description:
          "Once your transfer is booked, you receive a confirmation message from Aurevian Tours containing your driver's name, a photograph, and a direct WhatsApp number for communication. On the day of your transfer, your driver contacts you via WhatsApp approximately 30 minutes before the scheduled pickup time to confirm the arrangement and let you know they are on their way. If any change to the pickup location or timing is needed, this is the channel to use — direct, simple, and immediate.",
      },
      {
        step: 2,
        time: "As scheduled",
        title: "Pickup at Your Location — The Driver Comes to You",
        description:
          "Your driver arrives at the agreed location and waits for you. At Luxor International Airport, they meet you in the arrivals hall with a sign bearing your name, positioned clearly visible from the exit of the customs and immigration area. For flights, your driver monitors the incoming flight in real time using the flight number you have provided, and adjusts their arrival at the airport automatically if the flight is delayed — there is no need to contact them if your flight is running late; they are already tracking it. At hotels, the driver meets you in the lobby. At cruise ship docks, they wait on the quayside. At the train station, they meet you in the main concourse. The system is designed so that you never have to worry about whether your driver knows you are there.",
        tips:
          "For airport pickups at Luxor International: after collecting your luggage and passing through customs, look for the name board as you exit into the arrivals hall. Your driver will be in the front row of the waiting area. If for any reason you cannot find them, call or WhatsApp the number in your confirmation — they will locate you within minutes.",
      },
      {
        step: 3,
        time: "In transit",
        title: "Your Journey — Comfortable, Direct, and Stress-Free",
        description:
          "The vehicle is clean, air-conditioned, and appropriate for your group size: a saloon car for one to three passengers and moderate luggage, a minivan for larger groups or extensive baggage. Bottled water is provided. The driver speaks sufficient English to communicate clearly and can answer basic questions about the city if you are curious, but equally comfortable with complete silence if what you need after a long journey is simply to stare out the window in peace.\n\nTypical journey times for common Luxor transfers: Luxor Airport to the city centre (East Bank hotels), approximately 20–30 minutes depending on traffic. East Bank hotel to the West Bank ferry or road bridge, approximately 15–25 minutes. Luxor train station to city centre, approximately 10 minutes. Cruise ship dock to airport or train station, approximately 20–30 minutes.\n\nFor longer transfers — Luxor to Hurghada (approximately 4 hours over the mountain road through the Eastern Desert), Luxor to Cairo by road (approximately 9 hours), Luxor to Aswan (approximately 3 hours) — larger and more comfortable vehicles are available and pricing is adjusted accordingly. Multi-stop itineraries, waiting service for day trips, and dedicated vehicle hire for the duration of a stay are all available — ask Aurevian Tours at time of booking.",
      },
      {
        step: 4,
        time: "On arrival",
        title: "Drop-off — Directly to the Door",
        description:
          "Your driver delivers you to the entrance of your hotel, the specific terminal of your airport, the platform level of the train station, or whichever address you have specified. Luggage assistance is included — you do not need to manage heavy bags alone. If you are checking into a hotel and the driver needs to wait a moment for the check-in process to be completed, they will do so without complaint or impatience. The transfer ends when you are where you need to be, not when the vehicle arrives at the general vicinity.",
      },
    ],
    importantInfo: [
      "Always provide your full hotel name, precise address, and the correct spelling of your name at the time of booking",
      "For airport pickups, always provide your complete flight number including airline code so the driver can track the arrival",
      "Transfers are available 24 hours a day, 7 days a week — there is no unsociable hours surcharge for very early morning or late night pickups",
      "Child safety seats are available at no additional charge — please specify the age and weight of children when booking",
      "Wheelchair-accessible vehicles are available on request — please specify at the time of booking",
      "For very early morning pickups (before 05:00), the driver will arrive quietly and will not use the hotel's main entrance bell if you have advised them the hotel is sleeping",
    ],
    meetingPoint: {
      description:
        "Driver meets you at your specified pickup location with a clearly visible name sign. For airports: the arrivals hall exit. For hotels: the lobby entrance. For cruise docks: the quayside.",
    },
    accessibility:
      "Fully accessible standard service. Wheelchair-accessible vehicles available on request at time of booking — please specify the type of wheelchair and any specific vehicle requirements.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 7. Luxor Hot Air Balloon Ride
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Luxor Hot Air Balloon Ride",
    images: ["/images/tours/balloon.jpeg"],
    slug: "luxor-hot-air-balloon-ride",
    description:
      "Before the sun has risen, while the sky above the West Bank is still the deep blue-black of late night and the desert is completely silent, something extraordinary happens in a field near the base of the Theban cliffs. A great canvas envelope, laid flat on the grass, begins to fill with hot air from a roaring propane burner, and as the gas pours in and the envelope swells and lifts, the wicker basket beneath it rises from the horizontal to the vertical, and suddenly you are standing in a balloon basket that is straining to lift off the ground, and the horizon to the east is showing its first thin line of grey light, and the limestone cliffs to the west are beginning to separate themselves from the darkness, and your pilot is checking his altimeter with the calm focus of someone who has done this many hundreds of times and knows exactly what is about to happen.\n\nWhat is about to happen is one of the finest experiences available anywhere in Egypt: a sunrise hot air balloon flight over the Theban Necropolis, drifting silently at three hundred to six hundred metres above the most extraordinary concentration of ancient monuments on earth. From this altitude, the geography of ancient Thebes becomes suddenly legible in a way it never quite is from the ground. The green Nile Valley, precisely bounded on both sides by the desert edge, shows you exactly why the ancient Egyptians divided their world as they did — the East Bank for the living, facing the rising sun, and the West Bank for the dead, facing the sunset, with the river between them serving as the boundary between two realms. The Valley of the Kings is visible below as the distinctive shape of the valley system in the limestone, the dark mouths of its tombs invisible from above but their location made identifiable by the topography your guide explained yesterday. The Mortuary Temple of Hatshepsut appears against the cliff face as if it had grown there. The green fields and the palm trees and the grey morning river, the first feluccas of the day casting off from their moorings, the distant minarets of Luxor beginning to catch the first colour of the dawn — all of it spread out beneath you in a silence broken only by the occasional roar of the burners and the soft rush of wind past the envelope.\n\nThis is one of Aurevian Tours' most popular experiences, and it is booked early. The CAA-certified pilots who fly these balloons have unimpeachable safety records and a genuine passion for what they do. The flight itself lasts forty-five to sixty minutes. The photographs are extraordinary. The memory is permanent.",
    category: "Aerial tours",
    price: {
      original: 132.20,
      discounted: 105.76,
      currency: "USD",
    },
    duration: "2 hours total",
    language: ["English"],
    rating: {
      score: 7.7,
      reviews: 142,
    },
    travellers: 2251,
    freeCancellation: true,
    highlights: [
      "Sunrise hot air balloon flight over the Valley of the Kings and the Theban Necropolis",
      "360-degree aerial views of both Nile Banks, the Valley of the Kings, Hatshepsut Temple, Karnak, and the desert",
      "CAA-certified, experienced balloon pilot with outstanding safety record",
      "Pre-dawn hotel pickup included — no need to arrange your own transport",
      "Commemorative flight certificate presented after landing",
      "Total experience approximately 2.5 hours including transport",
    ],
    includes: [
      "Pre-dawn hotel pickup and drop-off",
      "Balloon flight of 45–60 minutes",
      "Commemorative flight certificate",
      "Bottled water at the launch site",
    ],
    excludes: [
      "Gratuities for pilot and ground crew",
      "Personal expenses",
    ],
    itinerary: [
      {
        step: 1,
        time: "04:30",
        title: "Pre-Dawn Hotel Pickup — The World Before Sunrise",
        description:
          "Your driver arrives at your hotel in the dark — the Luxor streets are quiet at this hour, the Nile reflecting a last handful of stars, the call to prayer still an hour away. You board the vehicle and cross the Nile to the West Bank while the sky remains deep blue-black overhead. The pre-dawn timing is not a marketing affectation but a practical necessity: the balloon must be launched before the winds pick up with the sun's heating of the desert air, and the pilots work in the narrow window of still air that exists in the half hour before dawn. The drive takes approximately fifteen minutes, during which the first suggestion of grey appears on the eastern horizon. By the time you reach the launch field, that grey is beginning to colour itself faintly pink.",
        duration: "20 minutes driving",
        location: "Your hotel to West Bank launch field, Luxor",
      },
      {
        step: 2,
        time: "05:00",
        title: "Balloon Inflation — The Giant Wakes",
        description:
          "The launch field on the West Bank is typically a flat agricultural area between the monuments, and arriving there in the pre-dawn darkness is itself a memorable experience — the silhouettes of half a dozen balloon envelopes laid flat on the grass, the roar of propane burners suddenly illuminating the darkness with intense orange light, the enormous coloured envelopes beginning to swell and lift as the hot air pours in. Your pilot introduces themselves and gives a full, clear safety briefing: how to stand in the basket during flight (feet apart, back against the padded wall, hands on the overhead rope handles), what to expect during the burner firings (loud, warm, a slight upward surge), how the landing is managed (the pilot controls descent by releasing hot air through a valve; the landing is generally smooth and the ground crew is waiting where you land to assist). The basket for your flight typically accommodates sixteen to twenty-four passengers divided into separate compartments, each compartment holding four to six people. As the briefing ends, the balloon is upright, glowing from within with the light of the last burner firing, a great lamp against the purple pre-dawn sky. The pilot checks his instruments one final time. The ground crew holds the basket steady. And then he nods.",
        duration: "30 minutes",
        location: "West Bank launch field, Luxor",
        tips:
          "The inflation process, lit by the propane burners in the pre-dawn darkness, is one of the most dramatic visual spectacles of the entire experience. Get your camera ready before the burner ignites for the first time — the light on the inflating envelope is extraordinary and very brief.",
      },
      {
        step: 3,
        time: "05:30",
        title: "Liftoff — Into the Sunrise",
        description:
          "The basket lifts from the ground with a smoothness that surprises almost everyone on their first flight — not a lurch or a swing but a gradual, almost imperceptible separation from the earth, until suddenly the ground is several metres below and receding at a steady, unhurried rate and the entire landscape is opening up around you. The pilot works the burner controls to manage your ascent, and within three or four minutes you are above the rooftops of the West Bank villages, and then above the date palms, and then above the first line of the desert cliffs, and then at two hundred metres, three hundred, four hundred, rising into the cold still air of the pre-dawn West Bank.\n\nBelow you: the Nile Valley laid out in its entirety, the green strip of irrigated land bounded precisely on both sides by the desert edge, the silver thread of the river catching the first light. To the east, Karnak Temple is a rectangle of darker darkness in the city grid, its enormous first pylon and the Sacred Lake identifiable even from this height. To the west, the limestone cliffs of the Theban Mountain are beginning to separate from the darkness as the light strengthens, and the distinctive valley system of the Valley of the Kings is visible in the topography below the cliff line. The Mortuary Temple of Hatshepsut is a pale horizontal band against the cliff face. The Colossi of Memnon are two small upright shapes in the flat agricultural plain. And directly below you, if your balloon has drifted over the necropolis, the ancient desert surface of the West Bank, mapped and studied and excavated for two centuries, is completely silent and completely still.\n\nThe sun itself rises about thirty minutes into the flight. If you are lucky with your position in the sky, you will see it lift above the eastern horizon in one of the most spectacular views available to a balloon passenger anywhere in the world: the first edge of the disc appearing over the desert hills to the east, the entire Nile Valley suddenly catching light from one end to the other, the long shadows of the monuments stretching westward across the sand, the river turning from silver to gold in an instant. It takes approximately three seconds from the first appearance of the sun to the moment when its lower edge clears the horizon. Everyone on the balloon is watching. No one speaks.",
        duration: "45–60 minutes",
        location: "Above the Theban Necropolis and Nile Valley, Luxor",
        tips:
          "Charge your phone or camera fully the night before — there is no charging on the balloon. A wide-angle lens or a modern smartphone camera captures the landscape well; there is no need for a zoom lens. The light changes continuously and rapidly from about fifteen minutes before sunrise onward — do not put the camera away until you are back on the ground.",
      },
      {
        step: 4,
        time: "06:30",
        title: "Descent & Landing — Returning to Earth",
        description:
          "The pilot chooses the landing site based on wind direction and the available flat ground below — typically an agricultural field in the West Bank, between the desert edge and the river. The descent is gradual and controlled: the pilot releases hot air through the valve at the top of the envelope, the balloon sinks steadily, and the ground crew that has been tracking the balloon in vehicles throughout the flight is already waiting at the landing point when the basket touches down. The touchdown is almost always smooth — a gentle brush of the basket base on the ground, a slight lean, and then stillness. The crew holds the basket steady as passengers step out one by one, and the deflated envelope settles slowly to the ground around the basket in a great billow of colour.",
        duration: "15 minutes",
        location: "Agricultural fields, West Bank Luxor",
      },
      {
        step: 5,
        time: "06:45",
        title: "Certificate Presentation — A Tradition as Old as Ballooning",
        description:
          "After landing, your pilot presents each passenger with a commemorative certificate of flight, signed and dated — a tradition that dates to the earliest days of hot air ballooning, begun by the Montgolfier brothers after their first passenger flight in 1783 and maintained by balloon pilots around the world ever since. The certificate is a small thing, but it marks a morning that most people who experience it describe as genuinely unlike anything else they have done.",
        duration: "10 minutes",
      },
      {
        step: 6,
        time: "07:00",
        title: "Return to Hotel — Breakfast Well-Earned",
        description:
          "Your driver takes you back across the Nile to your hotel on the East Bank, arriving in time for a hotel breakfast — which, after a sunrise spent six hundred metres above the Valley of the Kings, seems entirely the appropriate way to start a day in Luxor.",
        duration: "25 minutes driving",
        location: "West Bank to your hotel, Luxor",
      },
    ],
    importantInfo: [
      "Flights are entirely weather-dependent and may be cancelled at short notice — your Aurevian Tours contact will reach you the evening before to confirm whether the flight is proceeding",
      "In the event of weather cancellation, a full refund or a free reschedule to another available date is offered automatically — no questions asked",
      "Minimum age is typically 6 years; minimum height approximately 1.20 metres to stand safely in the basket",
      "Not recommended for pregnant women or individuals with serious cardiac, back, or knee conditions",
      "Wear flat, closed-toe shoes — heels and sandals are not permitted in the basket",
      "Dress in layers: the pre-dawn launch site can be surprisingly cold even in summer, and the flight at altitude is cooler than the ground temperature",
    ],
    meetingPoint: {
      description:
        "Hotel pickup from your Luxor accommodation — your driver arrives at 04:30. Do not go to the balloon company yourself; your Aurevian Tours driver will take you directly to the launch site.",
    },
    accessibility:
      "Passengers must be able to stand for the duration of the flight (45–60 minutes) and step into and out of the basket, which requires stepping over a side approximately 90 cm high. The experience is not suitable for wheelchair users. If you have any mobility concerns, please discuss with Aurevian Tours before booking.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 8. Luxor & Karnak Temples Evening Guided Tour
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Luxor & Karnak Temples Guided Tour",
    images: ["/images/tours/east.jpeg"],
    slug: "luxor-karnak-temples-guided-tour",
    description:
      "There is a particular misconception about Karnak Temple that your Aurevian Tours guide has heard from visitors many hundreds of times: that because it is very large and very old and very important, it ought to be impressive. And it is — overwhelmingly so. But the specific quality of that impressiveness changes dramatically depending on the time of day you visit it. Karnak at midday, in the blunt white light of the Egyptian sun, is a spectacular ruin. Karnak in the golden hour of late afternoon, when the low western sun enters the temple from behind and falls directly on the faces of the 134 columns of the Great Hypostyle Hall, illuminating the carved hieroglyphs in sharp relief and filling the shadows between the columns with deep amber darkness — this is something of a completely different order. This is when Karnak is at its most overwhelming, its most beautiful, its most genuinely awe-inspiring in the oldest and purest sense of that word.\n\nThis tour is timed specifically to visit Karnak in the late afternoon and Luxor Temple after dark — two of the finest windows in which these two temples can possibly be experienced. From the evening light on Karnak's columns to the walk along the recently excavated Avenue of the Sphinxes, to the arrival at the fully illuminated Luxor Temple when night has fallen and the floodlights have transformed the honey-coloured sandstone into something glowing and golden against the deep blue Egyptian night sky — the sequence is carefully designed to give you the maximum possible beauty from two monuments that are extraordinary under any conditions but transcendent in these specific ones. Your Aurevian Tours Egyptologist guide accompanies you throughout, providing the historical and mythological narrative that turns a walk through beautiful ancient architecture into a genuine understanding of what you are seeing and why it was built.",
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
      "Karnak Temple in the golden afternoon light — the finest time of day to visit the Great Hypostyle Hall",
      "Walk the newly excavated and restored 3-kilometre Avenue of the Sphinxes between Karnak and Luxor Temple",
      "Luxor Temple fully illuminated after dark — one of the most beautiful sights in Egypt",
      "Expert Aurevian Tours Egyptologist guide throughout the full evening",
      "Hotel pickup and drop-off included",
    ],
    includes: [
      "Licensed Egyptologist guide",
      "Hotel pickup and drop-off",
      "All entrance fees",
      "Air-conditioned private vehicle",
    ],
    excludes: [
      "Gratuities for guide and driver",
      "Personal expenses",
    ],
    itinerary: [
      {
        step: 1,
        time: "16:30",
        title: "Hotel Pickup — Evening Begins",
        description:
          "Your Aurevian Tours guide arrives at your hotel as the afternoon heat is beginning to soften into the early evening. The day's worst temperature has passed. The light is beginning its slow descent toward gold. This is precisely the right moment to be heading to Karnak, and your guide knows it — they have timed afternoon visits to this temple across many seasons and have learned exactly when the light in the Great Hypostyle Hall reaches its optimum quality. In the vehicle on the way to the temple, your guide provides a brief historical context for the East Bank temples — their relationship to the West Bank necropolis, the religious function of Karnak as the home of Amun-Ra, and the way the annual Opet Festival created the ancient connection between Karnak and Luxor Temple that the Avenue of Sphinxes embodies in stone.",
        duration: "20 minutes",
        location: "Your hotel, Luxor",
      },
      {
        step: 2,
        time: "17:00",
        title: "Karnak Temple — The Golden Hour in the Forest of Columns",
        description:
          "You arrive at Karnak as the sun is at approximately thirty degrees above the western horizon — the point at which it has descended far enough to enter the temple's east-west axis and begin to fall directly on the interior. The ram-headed sphinx avenue at the entrance glows warm amber in the slanting light. The First Pylon casts a shadow that stretches back toward the ticket office. And inside the Great Hypostyle Hall, what happens to the light among those 134 columns must be seen to be properly understood.\n\nThe columns are enormous — the twelve tallest reaching 23 metres, wider at the top than most dining tables, their entire surface covered in carved hieroglyphs and religious scenes. When the late afternoon sun enters from the west, it strikes the faces of the columns at a low angle that throws every carved line into sharp relief — the hieroglyphs leap out from the stone surface with a three-dimensionality they lack in direct overhead light. The shadows between the columns are deep pools of darkness. The sunlit faces of the stone are almost luminous. And through the gaps between the columns, in the clerestory windows above the central aisle, bars of golden light fall diagonally to the floor and move slowly across the ancient pavement as the sun descends.\n\nYour guide moves through the hall at a pace that allows genuine observation, not the hurried march of a group trying to cover a checklist. They point out the differences in artistic style between the north half of the hall — decorated by Seti I in a refined, technically masterful sunken relief of exceptional delicacy — and the south half, decorated by Ramses II in a bolder raised relief of rather less subtle execution, the ancient equivalent of a renovation that was finished by a less talented hand. They take you to the Sacred Lake, where the reflection of the temple in the evening water is one of the most beautiful views in Luxor. They show you the obelisk of Hatshepsut — 29.6 metres of pink Aswan granite, still bearing traces of the original electrum cap that once caught the first rays of sunrise — and the base of its twin, which Thutmose III walled up so completely that it wasn't discovered until the 19th century AD.",
        duration: "90 minutes",
        location: "Karnak Temple Complex, East Bank Luxor",
        tips:
          "The afternoon light falls from the west, which means it falls on the faces of the columns and into the temple interior rather than behind them. Photographs taken here between 17:00 and 18:30 are dramatically more beautiful than those taken in the morning. If photography matters to you, this is the reason to take this tour rather than a morning visit.",
      },
      {
        step: 3,
        time: "18:30",
        title: "The Avenue of the Sphinxes — Walking the Ancient Processional Road",
        description:
          "The Avenue of the Sphinxes is one of the most significant recent developments in Luxor's archaeological landscape: a three-kilometre processional road lined with hundreds of sphinx statues that connected Karnak Temple to Luxor Temple, excavated and fully restored after decades of work and opened to its full extent only in 2021. Your guide leads you along a section of this extraordinary ancient road as dusk settles over the city — the sphinx statues, newly cleaned and properly set in their ancient pedestacles, casting long shadows in the last of the daylight, Luxor Temple visible ahead at the end of the straight boulevard.\n\nThis road was one of the most important ceremonial spaces in the ancient world. The annual Opet Festival — one of the great religious celebrations of the New Kingdom, lasting up to twenty-seven days — was centred on the procession of the statues of Amun, Mut, and Khonsu from their home at Karnak along this road to Luxor Temple, where secret rituals renewed the pharaoh's divine power for another year. Priests would have lined both sides of the road. Crowds of worshippers would have gathered at the sphinx statues. Musicians and dancers would have accompanied the sacred barques. Walking this road today, in the warm evening air with the sphinx statues beside you and the temple ahead, you feel the residual weight of all those ancient festivals, all those years of ceremony and celebration, compressed into the stone of the road beneath your feet.",
        duration: "20 minutes walking",
        location: "Avenue of the Sphinxes, between Karnak and Luxor Temple",
      },
      {
        step: 4,
        time: "19:00",
        title: "Luxor Temple After Dark — The Most Beautiful Sight in Luxor",
        description:
          "Night has fully fallen as you arrive at Luxor Temple, and the transformation from the daytime version of this monument is complete and remarkable. The floodlights that illuminate the temple do something that daylight cannot quite do: they isolate the ancient stone against the darkness, removing the background of modern Luxor and the busy Corniche road and the tourist shops, leaving only the temple itself — burning gold against a sky the deep blue-black of the Egyptian night, every surface precise and lit and ancient and absolutely itself.\n\nThe entrance pylon of Ramses II — decorated with a colossal painted relief of the pharaoh in his chariot at the Battle of Kadesh, the great toe of the Syrian king reaching nearly to the sky — is overwhelming in the floodlight, its scale made more apparent by the darkness around it. The seated colossi flanking the entrance glow warm amber. The lone red granite obelisk catches the light on its hieroglyphed surface and seems almost to vibrate with it. Your guide leads you through the entrance and into the elegant forecourt of Ramses II — the columns here slightly less refined than Amenhotep III's great colonnade beyond, the pharaoh having added his own court to an already existing temple with a slight heaviness of touch that his guide very gently points out — and then into the colonnade of Amenhotep III: fourteen enormous papyrus-bud columns in a precise double row, the finest stonework in Luxor, glowing in the carefully directed floodlights with a warmth and depth that makes the Hypostyle Hall at Karnak feel almost harsh by comparison.\n\nIn the deeper interior, your guide shows you the Roman shrine — built when the temple was repurposed as a Roman military cult centre in the 3rd century AD, its painted walls still showing faint traces of the imperial cult imagery placed directly over the ancient Egyptian decoration — and the Abu Haggag mosque, perched on top of the ancient structure at a level that corresponds to the medieval city's accumulated street level, still in active use today, its minaret rising above the ancient pylon against the night sky. It is a layering of history so dense and so complete that you need to stand still for a moment and simply let it settle.",
        duration: "90 minutes",
        location: "Luxor Temple, Corniche el-Nil",
        tips:
          "The colonnade of Amenhotep III in the evening floodlight is, in the considered opinion of most of the Aurevian Tours guides who have led this tour many hundreds of times, the single most beautiful architectural experience in Luxor. Allow yourself to stand in it for several minutes without taking photographs. Some things need to be simply seen.",
      },
      {
        step: 5,
        time: "20:30",
        title: "Return to Hotel",
        description:
          "Your guide and driver return you to your hotel as the Luxor Corniche settles into its evening rhythm — the feluccas still on the river, the restaurants busy, the lights of the West Bank visible across the water. End of tour.",
        duration: "15 minutes",
        location: "Your hotel, Luxor",
      },
    ],
    importantInfo: [
      "Evening timing is ideal for photography at both temples — the light conditions between 17:00 and 20:00 are dramatically better for photographs than midday",
      "Dress modestly at both temples — cover shoulders and knees throughout",
      "Luxor Temple at night is particularly worth experiencing in its own right, distinct from a daytime visit — if you have seen it in the day, this evening tour will show you something genuinely different",
      "Bring a light layer for the evening — Luxor Temple is on the Nile Corniche and the evening river breeze can be cooler than expected",
      "This tour pairs perfectly with a West Bank morning tour (Valley of the Kings or nobles' tombs) earlier the same day",
    ],
    meetingPoint: {
      description:
        "Hotel pickup anywhere in Luxor city — your Aurevian Tours guide comes directly to your hotel",
    },
    accessibility:
      "Easy. Both temples are on largely flat ground with some shallow steps. Karnak covers a very large area but all the route taken on this tour is accessible. Fully suitable for most mobility levels.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 9. Karnak Temple Guided Tour
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Karnak Temple Guided Tour",
    images: ["/images/tours/karnak.jpeg"],
    slug: "karnak-temple-guided-tour-luxor",
    description:
      "Karnak is not a temple you visit. Karnak is a place you enter and then, having entered it, you understand for the first time what it means for a civilisation to express its religious convictions in stone over a period of two thousand years. The numbers are given in every guidebook and are worth repeating, not because statistics convey the experience but because they frame it: the perimeter wall encloses 2 square kilometres. The Great Hypostyle Hall alone covers 5,000 square metres and contains 134 columns, the twelve tallest reaching 23 metres — taller than a six-storey building, each column wide enough to park a small car on top of it. Thirty successive pharaohs added to the complex over twenty centuries, each building a new pylon in front of the previous one, the whole ensemble growing outward from its ancient core like the rings of a tree, each layer representing a different period of Egyptian history and a different artistic sensibility. The site is, by a very considerable margin, the largest religious complex ever built by any human civilisation.\n\nBut statistics cannot convey what an hour inside the Great Hypostyle Hall with a genuine expert feels like — the way your sense of scale recalibrates as you walk deeper into the forest of columns, the light filtering down from the clerestory windows in bars of gold, the carved surfaces of the stone walls and columns dense with hieroglyphic texts and images of gods and pharaohs that have been waiting patiently for three thousand years to be read and understood. This two-hour guided tour is dedicated entirely to Karnak — not rushing through it en route to somewhere else but spending the time properly, covering the Great Hypostyle Hall, the Sanctuary of Amun, the Sacred Lake, and the obelisks of Hatshepsut with the depth and detail that the greatest temple in human history deserves.\n\nNote that hotel pickup is not included in this tour — it is designed as a standalone temple visit rather than a half-day excursion, and participants make their own way to the entrance and depart independently. Your Aurevian Tours guide meets you at the gate.",
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
      "Dedicated 2-hour expert-guided tour of the world's largest ancient religious complex",
      "The Great Hypostyle Hall — 134 columns, 5,000 square metres, the most overwhelming interior space in the ancient world",
      "Sacred Lake and the legendary scarab beetle statue of Amenhotep III",
      "Obelisks of Hatshepsut — one of the tallest surviving obelisks in the world at 29.6 metres",
      "Full 2,000-year construction history explained in real time at the relevant monuments",
    ],
    includes: [
      "Licensed Egyptologist guide for 2 hours",
      "Entrance fees to Karnak Temple",
    ],
    excludes: [
      "Hotel pickup — participants make their own way to the temple entrance",
      "Gratuities for guide",
      "Personal expenses",
    ],
    itinerary: [
      {
        step: 1,
        time: "Meet at entrance",
        title: "Meeting at Karnak's Main Gate",
        description:
          "Your Aurevian Tours Egyptologist guide meets you at the main entrance to Karnak Temple on the East Bank — easily reached from any Luxor hotel by a ten-minute taxi ride (approximately 30–50 Egyptian pounds), by bicycle along the Corniche if your hotel is north of the centre, or on foot from the most central East Bank hotels. The guide will be waiting at the ticket booths holding a sign with your name. After collecting your tickets and entering through the pylon, the guide begins with a standing orientation at the entrance: a brief overview of what Karnak is, how it grew, what the two-hour tour will cover, and — importantly — what you should NOT try to see, because Karnak is large enough that attempting to cover it all in two hours would mean seeing none of it properly.",
        location: "Main entrance, Karnak Temple, East Bank Luxor",
        tips:
          "From any East Bank hotel, tell the taxi driver 'Karnak Temple' — every driver in Luxor knows it. The fare should be approximately 30–50 Egyptian pounds for a short ride. Tuk-tuks are available along the Corniche for slightly less.",
      },
      {
        step: 2,
        time: "At start",
        title: "Avenue of Ram-Headed Sphinxes & the First Pylon",
        description:
          "The processional avenue that leads to Karnak's main entrance was once lined with over 1,000 sphinx statues — human-headed sphinxes on the section nearest Luxor Temple, ram-headed sphinxes (rams being sacred to Amun) on the Karnak end, each sheltering a small standing figure of the pharaoh between their forepaws, symbolising the king under the divine protection of Amun-Ra. Of the original ram-headed sphinxes on the Karnak stretch, forty survive in reasonable condition and have recently been cleaned and repositioned in their ancient alignment.\n\nAt the end of the avenue, the First Pylon confronts you. At 43 metres high and 113 metres wide, it is the last and largest gateway to be added to Karnak — begun by Nectanebo I in the 4th century BC and never quite completed, a fact that has inadvertently left behind one of the most revealing pieces of evidence about ancient Egyptian construction techniques: the interior face of the pylon still shows the ancient mud-brick ramp used to raise the stone blocks into position, 2,300 years old and as clear as if the workers had just gone home for the weekend. Your guide explains the logic of the temple's growth outward: each new pharaoh added a new pylon in front of the existing one, pushing the ceremonial entrance further and further from the original ancient core. The result is that walking from the First Pylon toward the innermost sanctuary is a journey backward in time — the further in you go, the older the architecture becomes.",
        duration: "20 minutes",
        location: "Entrance forecourt, Karnak Temple",
      },
      {
        step: 3,
        time: "In tour",
        title: "The Great Hypostyle Hall — The Most Overwhelming Interior Space in the Ancient World",
        description:
          "Nothing you have read about the Great Hypostyle Hall of Karnak — not the statistics, not the photographs, not the superlatives accumulated by archaeologists and travel writers over two centuries — quite prepares you for the actual experience of standing in it. The hall covers 5,000 square metres and contains 134 columns in sixteen rows. The two central rows of twelve open-papyrus capitals columns reach 23 metres high, with a girth of 10 metres — so wide that if you hugged one (which is not permitted, but bear with the thought experiment), you would need seven or eight additional people linking hands around you before the circle was complete. The outer 122 columns with their closed-bud papyrus capitals are a comparatively modest 13 metres — still substantially taller than any four-storey building you have ever stood inside.\n\nEvery surface — columns, walls, floor-to-ceiling bands of wall space between the columns, the carved bases of the columns — is covered in hieroglyphic texts and relief images of extraordinary density and skill. Your guide stands in the centre aisle and reads selected passages: a dedication text in which Seti I describes the purpose of the hall; a military victory text in which Ramses II records a battle that your guide notes was actually something closer to a strategic draw, the peace treaty with the Hittites being Egypt's first treaty of political equality with a foreign power and Ramses' spin-doctoring of the outcome being one of the earliest examples of royal propaganda in human history. On the north wall, the guide points out the subtle difference in artistic style between the Seti I reliefs — deeply, finely cut, the lines precise and elegant, the figures correctly proportioned — and the Ramses II reliefs, which are broader and bolder in execution, the result of a reign in which quantity of monument production was prioritised over the refinement that characterised his father's work. Look up to the sheltered areas where the clerestory windows shade the upper sections of the columns: traces of the original paint — red, blue, yellow, white — survive here, still vivid enough to give a real sense of what the hall looked like when it was new, every surface blazing with colour.",
        duration: "30 minutes",
        location: "Great Hypostyle Hall, Karnak Temple",
        tips:
          "The original paint on the upper sections of the columns is best visible in the northern half of the hall, in the areas where the clerestory windows shade the stone from direct sunlight. Ask your guide specifically to take you to the best surviving examples — they know exactly where to look.",
      },
      {
        step: 4,
        time: "In tour",
        title: "Sanctuary of Amun, the Obelisks & Hatshepsut's Political Legacy",
        description:
          "Moving deeper into the temple toward its original ancient core — past the Middle Kingdom court, through the inner hypostyle halls built by Thutmose I and his successors, the architecture growing simpler and older and more powerful as you go — you reach the area of the obelisks and the ancient sanctuary of Amun. The surviving obelisk of Hatshepsut rises 29.6 metres into the desert sky, its surface covered in hieroglyphic texts recording Hatshepsut's commission of the obelisks and her theological justifications for the unprecedented act of a female ruler ordering the most prestigious monument type available. The obelisk would originally have been capped with an electrum tip — an alloy of gold and silver — that caught the first rays of sunrise each morning. Traces of the electrum surface were detected by modern analysis of the stone. The text on the obelisk specifically mentions the electrum cap: Hatshepsut was thinking very carefully about how her monuments would interact with the light.\n\nNearby, the base of the second obelisk shows where Thutmose III had it walled up during his reign — encasing it in a tight masonry casing that covered the stone completely and hid it from view while also, incidentally, protecting it from weathering. When the casing was removed in the 19th century, the obelisk within was found to be in perfect condition. Your guide explains the entire political drama: Hatshepsut's obelisks were commissioned while Thutmose III was co-ruler but effectively sidelined; after her death, his long campaign to erase her from history included dismantling her statues, filling her cartouches, and covering her monuments — but he never quite destroyed anything completely, perhaps from a residual religious reluctance to damage what the gods had accepted.",
        duration: "20 minutes",
        location: "Inner sanctuary area and obelisk court, Karnak Temple",
      },
      {
        step: 5,
        time: "In tour",
        title: "The Sacred Lake — Karnak's Hidden Heart",
        description:
          "The Sacred Lake of Karnak is one of the finest spots in all of Luxor for simply sitting and looking, and your guide allows time for exactly that. The lake — an artificial rectangular basin measuring 120 by 77 metres, excavated by Thutmose III around 1450 BC — was used daily by the temple priests for ritual purification before entering the sanctuary, and for the sacred barque processions during religious festivals when the golden boats carrying the divine statues would be rowed across its surface. Around the edges of the lake, the ancient stone quays and stairways are still intact. In the still water, the reflections of the temple's columns and pylons create a doubled image of the ancient complex that is one of the most beautiful and tranquil views in Luxor.\n\nOn the northwest corner of the lake, the famous granite scarab beetle statue of Amenhotep III stands on its ancient pedestal. The scarab (Khepri) was the god of transformation, resurrection, and the morning sun — the scarab that rolls its ball of dung across the ground became a metaphor for the sun rolling across the sky, and the beetle was one of the most powerful protective symbols in Egyptian religious iconography. Walking around this statue seven times is a custom that has been performed by tourists, guides, tour leaders, archaeologists, priests, and everyone else who comes to Karnak for at least a century. Your guide does not know the ancient origin of the seven-circuits tradition — it may be relatively modern — but they do it anyway, because some things at Karnak have been done for so long that the doing of them feels like its own kind of continuity with the past.",
        duration: "20 minutes",
        location: "Sacred Lake, Karnak Temple",
        tips:
          "The stone steps beside the Sacred Lake's west edge offer the best view of both the lake and the temple reflected in it. Sit here for five minutes without a phone. It is the calmest place in Karnak and one of the most beautiful spots in Luxor.",
      },
      {
        step: 6,
        time: "End of tour",
        title: "End of Tour — The Temple Is Yours",
        description:
          "Your guide concludes the tour at the Sacred Lake or the temple exit — whichever you prefer — with a summary of what you have seen and personalised recommendations for the rest of your time in Luxor. Your ticket allows unlimited re-entry on the same day, which means that after the guided tour you are free to return to any part of the complex you want to see again on your own, armed now with the context and knowledge to understand what you are looking at. The Great Hypostyle Hall is always worth a second visit.",
        location: "Sacred Lake or temple exit, Karnak Temple",
      },
    ],
    importantInfo: [
      "Hotel pickup is NOT included — make your own way to the Karnak Temple main entrance and meet your guide there",
      "Best visited in the early morning (before 09:00) or late afternoon (after 16:00) to avoid the worst of the midday heat and the largest tour groups",
      "The temple is open daily from approximately 06:00 to 17:30 in summer and 18:00 in winter",
      "Wear comfortable shoes with flat soles — Karnak covers 2 square kilometres and you will walk the equivalent of a small park",
      "Bring at least 1 litre of water and apply sunscreen before entering — the temple has limited shade",
      "Your entrance ticket allows unlimited same-day re-entry — take advantage of this to return independently after the tour",
    ],
    meetingPoint: {
      description:
        "Main entrance of Karnak Temple, East Bank Luxor. Your Aurevian Tours guide will be waiting at the ticket booths with a sign bearing your name.",
    },
    accessibility:
      "Easy to moderate. The temple complex is mostly flat throughout. The total walking distance for the full guided tour is approximately 2.5–3 kilometres. No significant steps or uneven terrain on the standard tour route.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 10. Karnak Temple Light & Sound Show
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Karnak Temple Light & Sound Show",
    images: ["/images/tours/sound.jpeg"],
    slug: "karnak-temple-light-sound-show-luxor",
    description:
      "By the time darkness has fully fallen over the East Bank of Luxor, the Karnak Temple complex — empty now of its daytime visitors, the tourist buses departed, the souvenir sellers packed up and gone — enters a different kind of life. The night guards walk their quiet rounds. Bats emerge from the crevices in the ancient stone and flicker through the dark air above the Sacred Lake. And then, precisely on schedule, the lighting begins.\n\nThe Karnak Sound and Light Show is one of the most atmospheric evening experiences in Egypt — not a conventional theatrical performance with actors and sets but a walk through the actual ancient temple at night, conducted in stages as dramatic coloured lighting transforms each area and a professional narration carries the audience back through three thousand years of history in the voices of the gods and pharaohs who built this place. The audience moves in groups from the entrance avenue of ram-headed sphinxes through the First Pylon, through the Great Hypostyle Hall, through the inner courts and sanctuaries, until the final act reaches the Sacred Lake and the entire illuminated complex is revealed in one sweeping view, its columns and obelisks and pylon faces glowing in blues and golds and ambers against the black Egyptian sky, perfectly reflected in the still water of the lake below.\n\nThe narration — spoken in English in the version Aurevian Tours includes in this booking — is a genuine literary work: poetic without being precious, historically informed without being dry, deeply attentive to the specific quality of experiencing these ancient spaces in darkness and dramatic light. The voice of Amun describes the building of his temple across two millennia. The voice of Ramses II recounts his military campaigns in the language of a king who has never doubted his own greatness. The voice of Thutmose III explains the logic of erasure and memory that makes the Hatshepsut story so compelling. And then the Sacred Lake finale arrives, and the narration reaches its climax, and the lighting shifts to encompass the entire complex in one last illumination, and the crowd sitting in the tiered seats at the water's edge is, for a moment, quietly unified in the experience of being very small and very temporary in the presence of something very large and very ancient.",
    category: "Performances",
    price: {
      original: 56.94,
      discounted: 45.55,
      currency: "USD",
    },
    duration: "3 hours 30 minutes total",
    language: ["English"],
    rating: {
      score: 7.2,
      reviews: 10,
    },
    travellers: 195,
    freeCancellation: true,
    highlights: [
      "Walk through the fully illuminated Karnak Temple complex at night in dramatic coloured lighting",
      "Professional English-language narration telling the history of Karnak through the voices of its gods and pharaohs",
      "Breathtaking Sacred Lake finale — the entire lit complex reflected in the still water",
      "A completely different perspective on Karnak from the daytime visit — the scale is even more apparent in the darkness",
      "Hotel pickup and drop-off included",
    ],
    includes: [
      "Show entrance ticket",
      "Hotel pickup and drop-off",
    ],
    excludes: [
      "Gratuities for driver",
      "Personal expenses",
    ],
    itinerary: [
      {
        step: 1,
        time: "19:00",
        title: "Hotel Pickup — Into the Luxor Evening",
        description:
          "Your Aurevian Tours driver collects you from your hotel as the evening Corniche comes to life — the feluccas moored along the bank, the restaurants filling up, the Luxor Temple floodlights beginning to glow at the far end of the waterfront boulevard. The drive to Karnak takes approximately fifteen minutes. Your driver will be waiting at the temple exit to collect you at the show's conclusion and return you to your hotel — you do not need to arrange your own transport at any point.",
        duration: "20 minutes driving",
        location: "Your hotel, Luxor",
      },
      {
        step: 2,
        time: "19:30",
        title: "Arrival & Pre-Show — Karnak After Dark",
        description:
          "Arrive at Karnak in the twenty minutes before the show begins — a window that is worth using well. The complex in the pre-show period is lit by ordinary ambient lighting, and walking quietly along the sphinx avenue and standing before the First Pylon in the near-darkness, with the enormous gateway visible only as a deeper darkness against the deep blue sky, is an experience quite unlike the daytime visit. The scale of the architecture is, paradoxically, more legible at night than in daylight — something about the darkness stripping away the modern context and returning the building to its own proportion. The warm desert air carries the faint mineral scent of ancient stone. The bats trace quick arcs above the sphinx statues. The show has not yet begun, but Karnak is already working.",
        duration: "20 minutes",
        location: "Karnak Temple entrance, East Bank Luxor",
      },
      {
        step: 3,
        time: "20:00",
        title: "The Light & Sound Show — Three Thousand Years in One Hour",
        description:
          "The show begins without announcement: a sudden, precise burst of coloured light on the sphinx avenue, and the narration begins. What follows is approximately sixty minutes of carefully choreographed movement through the ancient complex, the audience led stage by stage through the temple while the lighting and narration evolve around them.\n\nThe ram-headed sphinxes, lit from below in deep gold, seem to materialise from the darkness. The First Pylon, suddenly blazing in blue-white light, reveals a height and mass that the daytime visit alone never quite communicates. The Great Hypostyle Hall — this is the single finest moment of the entire show — receives the lighting treatment that its scale and its carved surfaces deserve: the 134 columns lit individually in shifting blues and ambers and golds, the clerestory windows above glowing as if from within, the hieroglyphic surfaces of the stone transformed by the raking light into precise, readable text. The narration during this section slows, as if the producers understood that the audience needs time to simply look.\n\nThe progression continues through the inner courts — the obelisks of Hatshepsut catching the light on their gilded (not quite, but in the lighting they seem to be) surfaces, the sanctuary of Amun dark and mysterious as it should be, the ancient lake approaches growing larger ahead. And then the finale: tiered seating at the edge of the Sacred Lake, the audience seated and facing the water, and the lighting of the full complex revealed all at once in one sweeping illumination — columns, pylons, obelisks, the temple rising from the ancient stone floor in a blaze of warm gold — all of it perfectly, tremblingly, reflected in the still black surface of the water below. The narration at this moment becomes briefly, unmistakably, poetic. The music rises. The lights hold. Then the slow fade to darkness, and the show is over, and people blink and look at each other, and begin, slowly, to applaud.",
        duration: "60 minutes",
        location: "Throughout the Karnak Temple complex",
        tips:
          "For the Sacred Lake finale, arrive at the seating area early and position yourself in the front row, as close to the water's edge as possible on the left-hand side. This gives the best view of both the temple reflection and the full sweep of the illuminated complex. Bring a light jacket or layer — the temple is open to the sky and the evening breeze off the Nile can make the air surprisingly cool even in summer.",
      },
      {
        step: 4,
        time: "21:00",
        title: "Return to Hotel",
        description:
          "Your driver is waiting at the temple exit at the show's conclusion and takes you directly back to your hotel. End of evening. The Nile continues flowing past the Karnak quay in the darkness, as it has been doing since before the first stone of the temple was laid.",
        duration: "20 minutes driving",
        location: "Karnak Temple to your hotel, Luxor",
      },
    ],
    importantInfo: [
      "The show runs in different languages on different evenings — confirm that the English-language show falls on your preferred date when booking with Aurevian Tours",
      "The show runs for approximately 60 minutes; the total experience including transport is approximately 2.5 hours",
      "Bring a light layer or jacket — the open-air temple can be cool at night even in summer",
      "The show pairs extremely well with a daytime guided tour of Karnak — experiencing the same space in two completely different conditions is one of the finest ways to understand a monument",
      "Seats at the Sacred Lake finale are unreserved — arrive at the seating area a few minutes before the finale for the best positions",
    ],
    meetingPoint: {
      description:
        "Hotel pickup anywhere in Luxor city — your Aurevian Tours driver comes directly to your hotel at 19:00",
    },
    accessibility:
      "Easy. The show route follows flat ground throughout the temple complex. The walking distance is approximately 700 metres. Fully suitable for most mobility levels.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 11. Edfu & Kom Ombo Day Trip from Luxor
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Edfu & Kom Ombo Day Trip from Luxor",
    images: ["/images/tours/edfu.jpeg"],
    slug: "edfu-kom-ombo-day-trip-luxor",
    description:
      "South of Luxor, the Nile Valley narrows and the desert presses closer to the river on both sides, and the landscape takes on a drama and austerity that the more domesticated scenery around Luxor does not quite prepare you for. The cliffs are higher. The fields thinner. The horizon more immediate. And on the banks of this changing river, at Edfu and at Kom Ombo, two temples survive in a state of preservation that goes beyond what is normal for three-thousand-year-old buildings and enters the territory of the genuinely extraordinary.\n\nEdfu is the best-preserved ancient temple in Egypt — a claim that has been made so many times in so many travel guides that it has perhaps lost its power to surprise, but which deserves a moment's reflection on what it actually means. The temple is not a magnificent ruin. It is not a haunting fragment. It is a building, whole and complete, with its entrance pylons intact, its great courtyard intact, its two hypostyle halls intact, its inner sanctuary intact, the massive stone naos that once housed the sacred statue of Horus still standing in the innermost chamber exactly where the ancient priests placed it. The surrounding enclosure wall is largely intact. The temple was buried by desert sand for centuries — which is what preserved it — and the modern town of Edfu was built on top of the accumulated debris, so that the temple's roof level corresponds roughly to the present-day street level. When archaeologists excavated it in the 19th century, the buildings of the town had to be demolished to reveal the temple below.\n\nKom Ombo is something else entirely — not the best-preserved but the most unusual. It is the only ancient Egyptian temple simultaneously dedicated to two co-equal deities, and its perfectly symmetrical bilateral design is a unique architectural expression of that theological arrangement. Two entrance halls, two hypostyle halls, two inner sanctuaries, two of everything, all arranged with a geometric precision that reflects the absolute equality of Sobek the crocodile god and Haroeris the elder Horus in this particular sacred space. The temple also offers, on its inner walls, the most detailed carved medical instruments in ancient Egypt — a panel of forceps, scalpels, bone saws, and birthing chairs that constitutes evidence of a functioning medical school once attached to this religious complex — and its Crocodile Museum displays dozens of actual mummified crocodiles that were sacred animals in the ancient cult of Sobek.\n\nThe Aurevian Tours day trip combines both temples with a traditional horse carriage ride through the streets of Edfu town, hotel pickup and drop-off, expert Egyptologist guide throughout, and all entrance fees. A full and rewarding day in Upper Egypt.",
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
      "Temple of Horus at Edfu — the best-preserved ancient temple in Egypt, its complete architecture intact after 2,000 years",
      "Traditional horse-drawn carriage ride through Edfu's local market streets — the classic way to arrive",
      "Temple of Sobek and Horus at Kom Ombo — the only dual-deity temple in the ancient world",
      "Kom Ombo Crocodile Museum — dozens of mummified sacred crocodiles",
      "Ancient medical instruments carved on the temple walls — evidence of a 2,000-year-old medical school",
      "Expert Aurevian Tours Egyptologist guide for the full day",
    ],
    includes: [
      "Licensed Egyptologist guide for the full day",
      "Hotel pickup and drop-off",
      "All entrance fees",
      "Horse carriage ride at Edfu (both ways)",
      "Air-conditioned private vehicle",
      "Bottled water",
    ],
    excludes: [
      "Meals — lunch not included (~$5–10 at local restaurants)",
      "Gratuities for guide, driver, and carriage driver",
      "Personal expenses",
    ],
    itinerary: [
      {
        step: 1,
        time: "07:00",
        title: "Hotel Pickup & Drive South Through Upper Egypt",
        description:
          "Your Aurevian Tours guide and driver collect you from your hotel in the early morning Luxor light and set off south along the Nile Valley road. The landscape changes noticeably within the first thirty minutes: the broad, populated valley around Luxor narrows, the fields become thinner strips of green between the road and the desert edge, and the quality of the light in the Upper Egyptian morning — clearer, more intense than further north — gives the whole landscape a sharp, cinematic quality that is easy to photograph and impossible to forget.\n\nThe drive to Edfu takes approximately two hours, during which your guide provides a detailed introduction to the theology and mythology of Horus — the falcon-headed sky god, son of Osiris and Isis, the divine prototype of the legitimate pharaoh, the eternal adversary of Set in the cosmic battle between order and chaos that Egyptian religious thinking used to explain the constant effort required to maintain civilisation against the ever-present threat of disorder. The Temple of Horus at Edfu, your guide explains, was not built in the pharaonic era but in the Ptolemaic period — the last three centuries BC, when Egypt was ruled by the descendants of one of Alexander the Great's generals. The Ptolemaic kings were Greeks who ruled as pharaohs, built in the ancient Egyptian style, worshipped the Egyptian gods, and were accepted by the Egyptian priesthood as legitimate successors to the pharaonic line. The result was an extraordinary series of temples — Edfu, Dendera, Kom Ombo, Philae — built in meticulous adherence to ancient Egyptian religious tradition by rulers who had been schooled in Greek philosophy.",
        duration: "2 hours driving",
        location: "Luxor to Edfu, Upper Egypt",
      },
      {
        step: 2,
        time: "09:00",
        title: "Horse Carriage Through Edfu — The Classic Arrival",
        description:
          "The vehicle stops at the edge of Edfu town and you transfer to a traditional horse-drawn carriage — a calèche, the same transport that has carried visitors to this temple for generations, through streets that have not changed fundamentally in their character for decades. The carriage clip-clops past the local coffee houses where men are playing backgammon and drinking glass after glass of sweet tea, past the fragrant spice sellers with their mountains of cumin and coriander and dried hibiscus, past the neighbourhood mosque whose courtyard is full of pigeons, past the high-school students on bicycles who glance at you with the mild curiosity of people who see tourists every day but have not quite grown tired of them. And gradually, over the rooftops, the enormous pylon of the Temple of Horus appears — first the very top, then more, then the whole vast gateway, growing larger as you approach until you round the final corner and it is directly in front of you, filling the street, and you understand for the first time exactly how large it is.",
        duration: "10 minutes",
        location: "Edfu town to Temple of Horus entrance",
        tips:
          "Sit on the left side of the carriage for the best unobstructed view of the temple pylon as you approach along the final stretch of the approach road.",
      },
      {
        step: 3,
        time: "09:15",
        title: "Temple of Horus at Edfu — Egypt's Most Complete Ancient Temple",
        description:
          "You enter through the gate in the enclosure wall and the full scale of the temple reveals itself: the 36-metre entrance pylons towering above, their surfaces covered in enormous relief images of Ptolemy XII smiting his enemies in the traditional pharaonic gesture of royal power, with the god Horus in his falcon form receiving the dedication on the left face and Hathor on the right. The great courtyard beyond the pylons is enclosed on three sides by colonnades of 32 columns, their capitals carved in the composite floral style of the Ptolemaic period — acanthus leaves, papyrus buds, and other plant forms combined in a lush, almost baroque elaboration of the classical Egyptian capital. In the centre of the south colonnade, the granite statue of a giant Horus falcon — one of the most iconic images in Egyptian art — stands in the open air, wearing the double crown of Upper and Lower Egypt, regarding the visitors with the absolute self-possession of a deity who has always known exactly who he is.\n\nYour guide leads you through the first hypostyle hall — its ceiling intact, the light filtering in through the clerestory windows above the columns and falling in precise bars on the ancient stone floor — and the second, smaller hypostyle hall, and then into the succession of vestibules that lead to the inner sanctuary. The original stone naos — the barque shrine, the box of pink Aswan granite that housed the sacred golden statue of Horus during the temple's active centuries — still stands in the innermost room, exactly where the ancient priests placed it when the temple was dedicated in 57 BC. This is one of the most extraordinary survivals from the ancient world: the actual container that held the most sacred object in this temple, still in its original position, after two thousand years.\n\nAnd then your guide takes you outside, around the enclosure wall, to the feature that most visitors never find: the Sacred Drama. A sequence of seventeen carved panels on the outer face of the enclosure wall — the interior of the enclosure, running all the way around the outside of the temple building — depicting the annual ritual re-enactment of the battle between Horus and Set in sequential images that tell a complete story from beginning to end. Horus and Set fight. Their followers fight around them. Horus strikes Set with the harpoon repeatedly. The gods judge the conflict and declare Horus victorious. The defeated Set, in the form of a hippopotamus, is cut up and distributed to the four winds. Order is restored. The universe survives for another year. Seventeen panels. The world's first sequential narrative art.",
        duration: "90 minutes",
        location: "Temple of Horus, Edfu",
        tips:
          "The Sacred Drama reliefs on the outer enclosure wall are the most important and most commonly missed feature of Edfu Temple. Insist that your guide includes them — they take approximately fifteen minutes to walk through and are far more interesting than many parts of the main temple building.",
      },
      {
        step: 4,
        time: "10:45",
        title: "Return by Carriage & Drive to Kom Ombo",
        description:
          "The carriage takes you back through Edfu's streets to the vehicle — the journey back feels different from the arrival, the town already familiar, the temple now behind you and in some sense already becoming a memory. The drive north to Kom Ombo takes approximately one hour. A lunch break is possible en route if desired, though this is not included in the tour price. Your guide continues the day's narrative, transitioning from the Horus mythology of Edfu to the Sobek theology of Kom Ombo and explaining why a town on a particular bend of the Nile might have developed a crocodile cult — the animals were numerous here, the river was wide and full, the agricultural life of the community depended on the Nile's behaviour in ways that made the crocodile both terrifying and worthy of propitiation.",
        duration: "1 hour driving",
        location: "Edfu to Kom Ombo",
      },
      {
        step: 5,
        time: "12:00",
        title: "Temple of Sobek & Horus at Kom Ombo — Two Gods, Perfect Symmetry",
        description:
          "Kom Ombo sits on a curve of the Nile with the river visible from within the temple precinct — the only ancient Egyptian temple with this feature — and the setting gives the whole complex a quality of openness and lightness that Edfu, buried in its town, does not have. The river is there, just below the terrace wall: wide and green, with the desert hills rising on the far bank and a few feluccas crossing in the afternoon wind.\n\nThe temple itself is the most unusual in Egypt: dedicated simultaneously and equally to two completely different gods, its design a perfect bilateral symmetry that gives each deity exactly half of every architectural element. The left half (as you enter from the front) belongs to Haroeris — Horus the Elder, the ancient falcon god in his primordial form. The right half belongs to Sobek — the crocodile-headed god of the Nile, fertility, military power, and watery creation, whose sacred animals lived in a pool attached to the temple and were mummified after death as offerings to the god. Two entrance halls, two hypostyle halls, two vestibules, two inner sanctuaries: everything doubled with the precision of a mirror.\n\nYour guide takes you through the main building — explaining the symmetry and how the ancient priests of each deity used their respective half of the shared space — and then to three features that make Kom Ombo uniquely fascinating. The Crocodile Museum: dozens of mummified crocodiles in a former chapel, ranging from hatchlings to animals nearly three metres long, some wrapped in linen with the careful attention usually reserved for royal mummies, others preserved simply by the desiccating desert climate for two thousand years. The ancient medical instruments: on one of the inner walls, a carved panel depicting forceps, scalpels, bone saws, birthing chairs, medicine jars, and other surgical tools — conclusive evidence of a medical school once operating in the precincts of this temple, where priestly physicians practised a medicine that combined religious ritual with genuine empirical observation. And the ancient Nilometer: a circular stone shaft descending to the level of the Nile, its inner walls marked with measurement inscriptions that recorded the annual flood height and were used for two thousand years to calculate agricultural taxes — a direct, physical connection between the divine order of the temple above and the practical management of the Nile's behaviour below.",
        duration: "90 minutes",
        location: "Temple of Sobek and Horus, Kom Ombo",
        tips:
          "The medical instruments panel is on one of the inner walls of the main temple building — your guide will show you exactly where it is. It is easy to walk straight past without noticing. Once pointed out, it is one of the most surprising and memorable details in any Egyptian temple.",
      },
      {
        step: 6,
        time: "13:30",
        title: "Return Drive to Luxor",
        description:
          "The road north from Kom Ombo back to Luxor follows the Nile for much of its length, the river visible to the west in occasional glittering stretches between the fields and the date palms. The approximately two-and-a-half-hour drive gives time for the day's temples to settle and for your guide's narrative — if you want it — to continue with broader questions about ancient Egyptian civilisation, or for a silence that is equally welcome after an intensely full day. You arrive back at your hotel in the late afternoon, in time for a rest and the long Luxor evening.",
        duration: "2.5 hours driving",
        location: "Kom Ombo to Luxor",
      },
      {
        step: 7,
        time: "16:30",
        title: "Drop-off at Hotel",
        description:
          "Your driver delivers you to your hotel entrance. End of day trip. The temples of Horus and of Sobek and Haroeris remain on the river behind you, as they have remained for two thousand years, watching the Nile flow past toward Cairo and the sea.",
        duration: null,
        location: "Your hotel, Luxor",
      },
    ],
    importantInfo: [
      "Long day with significant driving — bring snacks, a book, and headphones for the road sections",
      "Lunch is not included — bring cash (~$5–15) or your own food",
      "Dress modestly throughout — cover shoulders and knees at both temples",
      "Bring a minimum of 2 litres of water — both sites have limited shade and the Upper Egyptian sun is intense",
      "The horse carriage at Edfu is included and is the traditional and most atmospheric way to arrive at the temple — it is not optional",
      "If you experience any difficulty with the carriage for mobility reasons, an alternative by vehicle can be arranged — advise Aurevian Tours at time of booking",
    ],
    meetingPoint: {
      description:
        "Hotel pickup anywhere in Luxor city — your Aurevian Tours guide and driver come directly to your hotel at 07:00",
    },
    accessibility:
      "Moderate. Both temples involve walking on ancient stone floors with some steps and ramps. The horse carriage requires stepping up approximately 50cm. The Kom Ombo Crocodile Museum entrance involves two steps.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 12. Luxor Tour by Horse-Drawn Carriage
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Luxor Tour by Horse-Drawn Carriage",
    images: ["/images/tours/calesa.jpeg"],
    slug: "luxor-tour-horse-drawn-carriage",
    description:
      "Not every experience in Luxor needs to be about entering a tomb or standing before a temple and trying to grasp the scale of ancient Egyptian ambition. Sometimes the finest way to understand a city is simply to move through it at the speed at which its own life moves — slowly, at the pace of a horse on cobbled streets, through the backstreets and the market quarters and along the riverfront where the feluccas are moored and the Nile Corniche catches the late afternoon light.\n\nThis horse-drawn carriage tour of Luxor is exactly that: a relaxed, unhurried, genuinely pleasurable way to experience the city as a living place rather than exclusively as an open-air museum. The route takes you along the stunning Nile Corniche — past the entrance to Luxor Temple with its great pylon and lone granite obelisk — through the real backstreets of central Luxor where the local market life is entirely unaffected by tourism, and back along the waterfront as the afternoon turns golden and the first feluccas begin their evening sail. Your English-speaking guide provides the human and historical context that makes the city's layered identity legible: why this particular district was built where it was, what the mosque visible through the archway over there is and why its courtyard has those ancient column fragments in it, what the man on the rooftop is doing with those pigeons, how the city's street level has changed across thousands of years of accumulation.\n\nThis tour is the perfect introduction to Luxor for first-time visitors who want to feel the city before they begin visiting its monuments. It is equally perfect for second-time visitors who have done all the temples and want to see Luxor as it actually lives, away from the tourist circuit. And it is particularly good for families with young children, for whom a bouncing carriage through busy streets is genuinely exciting in a way that walking through temple chambers may not yet be.",
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
      "Scenic horse-drawn carriage ride through central Luxor at the perfect unhurried pace",
      "Pass directly in front of Luxor Temple on the Nile Corniche",
      "Experience the real backstreets, markets, and daily life of the city",
      "The most relaxed and personal way to begin or end a day in Luxor",
      "English-speaking guide throughout",
      "Suitable for all ages including young children",
    ],
    includes: [
      "Horse-drawn carriage for the full route",
      "English-speaking guide",
    ],
    excludes: [
      "Hotel pickup — meet at Luxor Temple Square",
      "Gratuities for guide and carriage driver",
      "Entrance fees to Luxor Temple if you choose to enter independently after the tour",
    ],
    itinerary: [
      {
        step: 1,
        time: "Meeting point",
        title: "Meet Your Carriage at Luxor Temple Square",
        description:
          "The meeting point is the square directly in front of Luxor Temple — the open space where the Corniche road widens and the great entrance pylon of Ramses II dominates the skyline. Your English-speaking guide and carriage are waiting here. Hotel pickup is not included in this tour, but the meeting point is easily reached from any East Bank hotel by a short taxi ride (approximately 20–40 Egyptian pounds) or a pleasant walk along the Corniche from centrally located hotels. The best time for this tour is late afternoon, between about 15:00 and 18:00, when the light on the Nile Corniche is at its most beautiful and the city is at its most animated.",
        location: "Luxor Temple Square, Corniche el-Nil, East Bank",
      },
      {
        step: 2,
        time: "At start",
        title: "North Along the Corniche — Past Luxor Temple in Motion",
        description:
          "Your carriage sets off northward along the Nile Corniche, the river immediately to your left, the ancient city rising on your right. You pass directly along the frontage of Luxor Temple — the entrance pylon of Ramses II at its most dramatic from this moving angle, the colossal seated statues glimpsed between the legs of passing pedestrians, the single red granite obelisk (its twin has been in Paris since 1836, and your guide mentions this with the practised equanimity of an Egyptologist who has made his peace with it) catching the afternoon light. The Avenue of Sphinxes, recently excavated and fully restored, extends south from the temple entrance along what was once the ancient processional road to Karnak — your guide explains its history and the Opet Festival that it commemorated, briefly and vividly, as the carriage continues north.\n\nThe Nile on your left is doing what the Nile always does: being the Nile, wide and unhurried and ancient and completely self-contained. A felucca with its white sail is crossing from the East Bank to the West Bank, using the wind rather than an engine, as felucca sailors have used the wind on this river for five thousand years. Egrets stand in the shallows of the bank at the edge of the city's irrigation channels. The call to prayer from a nearby mosque and the sound of the horse's hooves on the road surface and the distant sound of river traffic create, together, a soundscape that is specific to Luxor and to no other place in the world.",
        duration: "20 minutes",
        location: "Nile Corniche, heading north from Luxor Temple",
        tips:
          "Look back over your shoulder as you pull away from Luxor Temple — the receding view of the full entrance pylon and obelisk from a moving carriage gives a perspective on the monument's scale and setting that is difficult to achieve when standing directly in front of it.",
      },
      {
        step: 3,
        time: "In tour",
        title: "Into the Backstreets — The Real City",
        description:
          "The carriage turns inland from the Corniche at a junction your guide chooses based on the day's market activity and traffic, and you enter immediately and completely into a different Luxor. The tourist-facing riverfront disappears within a block. The streets narrow. The sound of the hooves changes as the surface changes from asphalt to something rougher and older. And on both sides, the city lives its actual life: the old man repairing shoes in the doorway of his tiny workshop; the women buying vegetables from a cart at the corner; the smell of bread baking from a bakery whose oven goes down through the floor into a cellar below street level; the stack of copper pots outside a metalworker's shop; the chess game in progress between two elderly men on plastic chairs outside a café from which a radio is playing Egyptian folk music at medium volume.\n\nYour guide narrates the neighbourhood as you pass through it — its history, its social character, the way its street plan reflects the accumulated decisions of centuries of urban growth on top of the ancient city below. Beneath many of these streets, your guide notes, the strata of ancient Luxor are only a few metres down — potsherds from the New Kingdom turn up in construction excavations with reliable frequency, and the odd papyrus fragment or ushabti figurine still surfaces in the markets from time to time. The city is built on itself, layer upon layer, the modern living on top of the ancient as cities always have.",
        duration: "30 minutes",
        location: "Central Luxor backstreets and market quarter",
        tips:
          "If the carriage passes the local spice market, ask your guide to stop for five minutes. A small bag of Egyptian cumin, dried hibiscus (karkadé), or mixed spices costs almost nothing, smells extraordinary, and makes an excellent souvenir that is both genuinely local and entirely practical.",
      },
      {
        step: 4,
        time: "In tour",
        title: "Back to the Corniche — The River in the Late Light",
        description:
          "The carriage loops back to the Nile Corniche for the southward return leg, and the quality of the light has changed in the forty minutes since you left it. The sun is lower, the shadows longer, the river surface catching the light at a different angle and turning it from silver to something closer to brass. The feluccas are more numerous now — the late afternoon is peak sailing time on the Luxor stretch of the river — and their white triangular sails move across the water in the unhurried way of things that have been doing exactly this for millennia. Your guide answers any remaining questions about the city, recommends specific restaurants or evening activities based on your interests, and gives their own assessment of what to prioritise if you have limited time remaining in Luxor.",
        duration: "20 minutes",
        location: "Nile Corniche, heading south toward Luxor Temple",
      },
      {
        step: 5,
        time: "End of tour",
        title: "Return to Luxor Temple Square",
        description:
          "The carriage returns you to the starting point at Luxor Temple Square. From here you can enter Luxor Temple independently using your own ticket (entrance fee not included in this tour), continue along the Corniche on foot in either direction, find a riverside café for tea as the sun goes down, or simply stand for a moment outside the temple entrance in the early evening light and watch the world go by. End of tour.",
        location: "Luxor Temple Square, Corniche el-Nil",
      },
    ],
    importantInfo: [
      "Hotel pickup is NOT included — make your own way to Luxor Temple Square on the Corniche",
      "The best time for this tour is late afternoon (15:00–18:00) — the light is beautiful and the city is at its most active",
      "Tipping the carriage driver is customary — approximately 20–30 Egyptian pounds is appropriate for a tip",
      "Suitable for all ages; young children particularly enjoy the carriage experience",
      "The tour does not include entry to Luxor Temple — if you wish to visit independently after the tour, purchase your ticket separately at the entrance",
    ],
    meetingPoint: {
      description:
        "Luxor Temple Square, Corniche el-Nil, East Bank Luxor — your Aurevian Tours guide and carriage are waiting at the square in front of the temple entrance",
    },
    accessibility:
      "Easy. Boarding the carriage requires stepping up approximately 40cm from ground level. Not suitable for wheelchair users. All ages welcome.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 13. Luxor Museum & Museum of Mummification Guided Tour
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Luxor Museum & Museum of Mummification Guided Tour",
    images: ["/images/tours/museum.jpeg"],
    slug: "luxor-museum-mummification-guided-tour",
    description:
      "Every visitor to Luxor eventually reaches a moment in the Valley of the Kings or inside Karnak Temple where they want to know more — where the scale and complexity of what they are looking at exceeds what any amount of reading in advance has quite prepared them for, and where the particular pleasure of understanding is complicated by the gap between what they are seeing and what they actually know. The Aurevian Tours museum tour exists for exactly this moment — or, better still, for the moment before it: experienced early in a Luxor visit, before the temples and tombs, these two museums provide exactly the context that transforms a walk through an ancient monument from an impressive sensory experience into a genuine act of understanding.\n\nThe Luxor Museum, opened in 1975 and consistently rated by Egyptologists as one of the finest museums in Egypt, is small enough to be navigable in two hours and rich enough to repay a lifetime of careful attention. Its collection focuses exclusively on the Theban region — the monuments and burials and daily life objects of the city and its surrounding area — and it is displayed with a care and intelligence that puts most larger national museums to shame. The 1989 Cache of Luxor, a collection of seventeen royal statues discovered beneath the floor of Luxor Temple by workers digging a drainage channel, includes pieces of breathtaking quality: an alabaster figure of Thutmose III in a striding pose that is one of the finest surviving royal statues in Egypt, and a painted sandstone head of Amenhotep III of extraordinary beauty and individuality. The royal mummies of Ahmose I — founder of the New Kingdom and the pharaoh who expelled the Hyksos from Egypt after a century of foreign rule — and Ramses I are displayed in a separate, climate-controlled gallery with the quiet dignity they deserve.\n\nThe Museum of Mummification, a five-minute walk along the Corniche and a much smaller institution, is the only museum in Egypt dedicated exclusively to the ancient practice of preserving the dead — and it is extraordinary. Actual mummified humans, actual mummified sacred animals (cats, crocodiles, ibises, fish, a ram, a baboon), actual embalming tools, actual canopic jars with their preserved organs: a complete, tactile record of the most distinctive and technically sophisticated funerary tradition in human history, explained by your Aurevian Tours guide with a clarity and a human weight that no display label can quite replicate.",
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
      "Expert-guided tour of the world-class Luxor Museum — one of the finest archaeological museums in Egypt",
      "The 1989 Cache — seventeen royal statues including the sublime alabaster Thutmose III",
      "Royal mummies of Ahmose I (founder of the New Kingdom) and Ramses I displayed with dignity",
      "The Wall of Akhenaten — reconstructed from thousands of talatat blocks, showing the heretic pharaoh in his revolutionary new artistic style",
      "Museum of Mummification — the only museum in Egypt dedicated exclusively to the art and science of preserving the dead",
      "Hotel pickup and drop-off included",
    ],
    includes: [
      "Licensed Egyptologist guide for the full 4-hour tour",
      "Hotel pickup and drop-off",
      "Entrance fees to both museums",
    ],
    excludes: [
      "Gratuities for guide and driver",
      "Personal expenses",
    ],
    itinerary: [
      {
        step: 1,
        time: "09:00",
        title: "Hotel Pickup & Drive to the Luxor Museum",
        description:
          "Your Aurevian Tours guide arrives at your hotel and provides, during the short drive to the museum on the Nile Corniche, a brief introduction to what you are about to see and why it matters. The guide's standard recommendation — which they have been giving for years to visitors at every stage of their Egypt itinerary — is this: visit the Luxor Museum before the temples, if you possibly can. Not because the temples are not extraordinary on their own terms, but because the objects in the museum — the statues and golden artifacts and painted pottery and inscribed papyrus fragments — create a human scale and an individual specificity that the massive architecture of the temple complexes, by their very grandeur, sometimes overwhelms. After spending two hours in the Luxor Museum, you will walk into Karnak Temple and Luxor Temple with a richer and more particular understanding of what you are looking at.",
        duration: "15 minutes driving",
        location: "Your hotel to Luxor Museum, Corniche el-Nil",
      },
      {
        step: 2,
        time: "09:15",
        title: "The Luxor Museum — Thebes in Close-Up",
        description:
          "The Luxor Museum's interior is a model of what archaeological display can be: generous spacing between objects, excellent bilingual labels, carefully calibrated lighting that shows each piece at its best without overwhelming it, and a layout that moves the visitor through the collection in a coherent historical sequence. Your guide moves through the galleries with the ease of someone who knows the collection intimately, stopping at specific objects to tell their full stories.\n\nThe Cache of Luxor gallery displays the seventeen statues recovered from beneath Luxor Temple's floor in 1989 in such a state of preservation that they appear to have been made recently — the alabaster surfaces polished, the painted details intact, the workmanship of extraordinary refinement. The standing figure of Thutmose III in alabaster is the guide's favourite piece in the museum and possibly their favourite object in all of Luxor: the pharaoh striding forward in the canonical pose, his face individualized with a specificity that suggests a portrait, his linen kilt carved with a delicacy that makes the hard stone seem soft. The painted sandstone head of Amenhotep III nearby is equally extraordinary — the king's features resolved into an individual face of great beauty and considerable psychological complexity, his eyes heavy-lidded and direct, his slight smile carrying an expression that has provoked more speculation from Egyptologists over the decades than almost any other ancient face.\n\nThe Tutankhamun section gathers a small but carefully chosen group of golden objects from the young king's tomb: not the great treasures (which are in Cairo's Egyptian Museum), but objects chosen for what they reveal about the period and the person — a gilded ceremonial bed, weapons of extraordinary workmanship, shabtis inscribed with the cartouche that was still changing in the brief years of his reign. The Wall of Akhenaten gallery presents one of the most fascinating objects in Egyptology: a complete wall reconstruction assembled from thousands of small talatat blocks — the small standard-size sandstone blocks used in Akhenaten's rapid construction programme at Karnak — that were dismantled and reused by his successors but preserved by the compression of the later masonry around them. The reconstructed wall shows Akhenaten in his revolutionary Amarna style, offering to the Aten sun-disc, the elongated figure and fluid lines of the new aesthetic completely at odds with the formal conventions of every Egyptian artistic tradition before or since.\n\nThe Royal Mummies room is separate and requires its own reflective pause. The mummies of Ahmose I — the pharaoh who reunified Egypt and expelled the Hyksos dynasty after a century of foreign rule, founding the New Kingdom and the most powerful phase of Egyptian civilisation — and Ramses I — grandfather of Ramses II, founder of the 19th Dynasty, the pharaoh whose mummy was sold by antiquities dealers in the 19th century and ended up in a private museum in Canada before being repatriated to Egypt in 2003 — are displayed with the quiet respect that two of history's most significant rulers deserve.",
        duration: "2 hours",
        location: "Luxor Museum, Corniche el-Nil, East Bank Luxor",
        tips:
          "Photography is strictly prohibited inside the Luxor Museum — the ban is enforced by the room attendants. Ask your guide to take you to the alabaster Thutmose III statue first and to spend sufficient time there before moving on — it sets the tone for the entire collection.",
      },
      {
        step: 3,
        time: "11:30",
        title: "Walk to the Museum of Mummification",
        description:
          "A five-minute walk south along the Nile Corniche from the Luxor Museum brings you to the Museum of Mummification, situated near the entrance of Luxor Temple. The Corniche walk itself is pleasant — the river visible to your right, the entrance to Luxor Temple visible ahead, the midday light beginning to intensify on the sandstone surfaces of the ancient pylon. Your guide provides a brief introduction to the history and theology of mummification as you walk, explaining why the ancient Egyptians went to such extraordinary lengths to preserve the physical body: the belief in the ka — the vital essence, the animating force — that continued to exist after death and needed a recognisable physical form to return to during its journeys in the afterlife. Destroy the body, destroy the ka. Preserve the body perfectly, and the ka could come and go for eternity.",
        duration: "5 minutes walking",
        location: "Corniche el-Nil between the two museums",
      },
      {
        step: 4,
        time: "11:45",
        title: "Museum of Mummification — The Science and Art of Eternal Preservation",
        description:
          "The Museum of Mummification is small — four main galleries — but extraordinarily concentrated. Your guide takes you through the complete mummification process in careful sequence, using the displayed objects to illustrate each stage: the initial embalming, during which the body was washed with Nile water and palm wine; the removal of the internal organs through a cut in the left side of the abdomen, each organ cleaned and wrapped and placed in a separate canopic jar (liver in the human-headed jar of Imsety, lungs in the baboon-headed jar of Hapy, stomach in the jackal-headed jar of Duamutef, intestines in the falcon-headed jar of Qebehsenuef); the extraction of the brain through the nasal passage using a metal hook, the brain being the one organ considered unimportant enough to discard; the packing of the body cavity with natron salt and the immersion of the whole body in natron for forty days, drying it completely; the anointing of the preserved body with resins and oils; the wrapping in hundreds of metres of fine linen bandages with specific amulets — the heart scarab, the djed pillar, the eye of Horus — placed at precise points between the layers; and finally the Opening of the Mouth ceremony, performed by the priests to restore the mummy's ability to breathe and speak and eat in the afterlife.\n\nOn display in the galleries: human mummies in various states of preservation and unwrapping, their features sometimes startlingly clear after thousands of years; mummified sacred animals — a cat with its bandages intact, an ibis in its cartonnage case, a crocodile of considerable size, a fish, what appears to be a small baboon — the complete menagerie of Egyptian sacred animal practice; the actual bronze and wooden tools used by ancient embalmers; canopic jars of alabaster and limestone; mummy masks of gilded cartonnage; the elaborate inner coffins whose painted surfaces were themselves considered a form of protection for the mummy within.",
        duration: "1 hour",
        location: "Museum of Mummification, Corniche el-Nil near Luxor Temple",
        tips:
          "The mummified sacred animals are particularly fascinating and often receive less attention than the human mummies — take time with each species and ask your guide to explain the religious significance of each animal's mummification. The crocodile especially warrants a pause.",
      },
      {
        step: 5,
        time: "13:00",
        title: "Return to Hotel",
        description:
          "Your guide and driver return you to your hotel. End of museum tour. The afternoon is your own — and if you are visiting the temples later today or tomorrow, you will find that everything you have seen this morning has already changed the way you look at them.",
        duration: "15 minutes",
        location: "Your hotel, Luxor",
      },
    ],
    importantInfo: [
      "This tour is strongly recommended as the first experience of a Luxor visit — before any temple visits — to provide the context that enriches everything that follows",
      "Photography is NOT permitted inside the Luxor Museum — this is strictly enforced",
      "Both museums are fully air-conditioned — a significant relief on hot days in Luxor",
      "The mummification content is educational and presented respectfully, but parents should use their own judgment about appropriateness for young children",
      "Allow the full four hours for both museums — rushing the Luxor Museum in particular would be a significant loss",
    ],
    meetingPoint: {
      description:
        "Hotel pickup anywhere in Luxor city — your Aurevian Tours guide comes directly to your hotel",
    },
    accessibility:
      "Easy. Both museums are fully accessible with ramp access and flat floors throughout. Fully air-conditioned. No steps between the main galleries in either museum.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 14. Sunset Felucca Trip to Banana Island
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Sunset Felucca Trip to Banana Island",
    images: ["/images/tours/faluca.jpeg"],
    slug: "sunset-felucca-trip-banana-island-luxor",
    description:
      "There is an argument — and the Aurevian Tours guides who have been leading this trip for years would make it without hesitation — that the most purely pleasurable experience available in Luxor has nothing to do with ancient monuments at all. It is this: an afternoon on a wooden felucca on the Nile, sailing north from the city through the golden hour, arriving at a lush tropical island where the banana palms lean over the water and the air smells of fruit and warm earth, and then sailing south again as the sun goes down behind the West Bank hills and the sky turns orange and then pink and then the deep indigo-blue of an Egyptian twilight.\n\nThe felucca — a traditional Nile sailing boat with a triangular lateen sail mounted on a tilted mast — is one of the oldest boat designs in the world, in continuous use on the Nile since at least the pharaonic period. It has no engine. It has no schedule. It goes where the wind and the current take it, at the speed that the river sets, and the captain reads these forces and adjusts the sail with an ease that makes the whole act of navigation seem almost unconscious. Being on a felucca is an experience of time that is almost impossible to replicate in any other context: the ordinary rhythms of daily life simply stop, replaced by the rhythm of the water and the wind and the slow turning of the light.\n\nBanana Island — a small, lush, working agricultural island approximately eight kilometres north of central Luxor — is the destination, and it is chosen for this trip not because it is a tourist attraction but because it is genuinely beautiful: a pocket of dense tropical vegetation in the middle of the desert river, its banana palms and mango trees and guava and papyrus reeds creating a cool, green, fragrant world completely unlike the stone and sand and ancient limestone of the monuments. In season — May through September — the mango trees produce fruit of extraordinary quality. The island is still farmed by local families. The boats that service it tie up to the same wooden dock they have been using for generations. Nothing about it has been arranged for tourists. It simply is what it is, and what it is, is exactly right.",
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
      "Traditional felucca sailing on the Nile at golden hour — the most peaceful experience in Luxor",
      "Visit to the lush, working tropical Banana Island — banana palms, mango trees, guava and papyrus",
      "Breathtaking sunset over the West Bank desert hills on the return sail",
      "Fresh mangoes from the tree in season (May–September)",
      "No engine, no schedule, no crowds — the Nile at its most ancient and elemental",
    ],
    includes: [
      "Felucca sailing both ways (north to the island and south back to Luxor)",
      "English-speaking guide",
      "Visit to Banana Island including garden walk",
    ],
    excludes: [
      "Hotel pickup — meet at the felucca dock",
      "Gratuities for guide and captain",
      "Personal expenses",
    ],
    itinerary: [
      {
        step: 1,
        time: "16:00",
        title: "Board the Felucca at the Luxor Dock",
        description:
          "The felucca dock in central Luxor — near the Mercure Hotel on the Corniche, identifiable by the row of colourfully painted wooden boats moored along the bank — is where your Aurevian Tours guide and captain are waiting. Your felucca is a traditional wooden boat: comfortable cushioned seating around the perimeter of the open deck, a canvas awning for shade, the tall mast carrying its triangular sail overhead. The captain unties the mooring, the sail fills, and without any particular ceremony or announcement the boat moves away from the bank and you are on the Nile.",
        duration: "10 minutes boarding",
        location: "Felucca dock, Corniche el-Nil, central Luxor East Bank",
        tips:
          "The dock is located near the Mercure Hotel on the Luxor Corniche. Tell any taxi driver 'felucca dock near the Mercure Hotel' and they will know exactly where to go. The fare from most central Luxor hotels should be approximately 20–40 Egyptian pounds.",
      },
      {
        step: 2,
        time: "16:15",
        title: "Sailing North — The Nile in Its Own Time",
        description:
          "The sail fills with the afternoon wind from the south and the boat moves north along the East Bank, the city of Luxor sliding past on the right side: the hotels and restaurants of the Corniche, the spires of the mosques, the minarets, the modern water tower that your guide identifies as one of the few genuinely ugly structures in Luxor and moves on from quickly. Then the city recedes and the riverbanks become agricultural — the green fields running down to the water's edge, the palm trees along the irrigation channels, the occasional small boat tied up in the reeds. The West Bank is visible across the river: the desert hills, the limestone cliffs, the distant shapes that you know now to be the locations of the Valley of the Kings and Hatshepsut Temple and Medinet Habu, all of them settling into the afternoon light at an angle that makes them look simultaneously more ancient and more natural than they did when you were standing in front of them.\n\nYour guide explains the ancient geography as you sail: the East Bank for the living, the West Bank for the dead — but not in a macabre way. The division was practical and cosmological simultaneously, the rising sun on the east side representing birth and life, the setting sun on the west representing the journey into darkness that preceded the next morning's resurrection. The Nile between them was the boundary and the highway, the axis of the entire civilisation. You are on that axis now, on that same river, and the feeling of having arrived at something essential is not, in this particular context, an illusion.",
        duration: "45 minutes sailing north",
        location: "Nile River, heading north from Luxor",
        tips:
          "Put the phone away for at least ten minutes of this section. The quality of the experience — the sound of the water, the smell of the river, the movement of the light — is genuinely restorative, and documentation and experience are not the same thing.",
      },
      {
        step: 3,
        time: "17:00",
        title: "Banana Island — A Green World in the Middle of the Desert River",
        description:
          "The captain steers the felucca toward the island's dock and ties up at the wooden landing stage. You step ashore and the temperature drops immediately by several degrees — the dense canopy of banana palms and mango trees creates a microclimate of shade and moisture that feels dramatically different from the sun-baked riverbanks. The island is genuinely agricultural, still farmed by the families who have worked it for generations, and your guide leads you along the paths through the gardens at the unhurried pace that the island itself seems to impose.\n\nThe banana palms are the dominant feature — enormous plants whose leaves cast wide pools of shade on the path below — but the island grows much more: mango trees whose fruit, in season, falls to the ground in such quantities that the path is fragrant with it; guava trees with their distinctive peeling bark; papyrus reeds along the water's edge, the same plant from which the ancient Egyptians made their writing material; hibiscus plants with flowers of vivid red and purple; sugar cane in the sunnier parts of the garden. If you visit between May and September, your guide will find ripe mangoes for you from the trees — the varieties grown here are among the finest in Egypt, intensely sweet and fragrant, completely unlike the mangoes available in European or American supermarkets.",
        duration: "30 minutes",
        location: "Banana Island, Nile north of Luxor",
        tips:
          "Visit between May and September for fresh mangoes from the tree — this is the single best reason to time this tour during those months. Outside this season the island is still beautiful, but the mangoes are the particular glory of a summer visit.",
      },
      {
        step: 4,
        time: "17:30",
        title: "Return Sail — Sunset on the River",
        description:
          "Re-board the felucca for the return sail south to Luxor, and this is the moment the entire trip has been building toward: the sun is now approximately thirty degrees above the West Bank horizon and descending. The light on the river is no longer the bright silver of afternoon but a deepening gold that seems to come from within the water rather than from above it. The desert hills on the West Bank are turning amber. The palm trees on both banks are darkening against the luminous sky. And the sun itself is moving — not fast, but measurably, visibly, with a speed you can actually perceive once you have been watching for a few minutes.\n\nThe captain adjusts the sail for the southward run and the felucca moves back the way it came, the wind now slightly on the beam. The city of Luxor appears ahead — first the minarets, then the Corniche hotels, then the temple entrance visible through the trees. And as you watch, over the course of thirty minutes, the sun reaches the West Bank hills and begins its descent behind them: first touching the ridge line, then half-hidden, then the last sliver, then gone — and the sky above the point of its disappearance blazes in orange and pink and gold and then, very quickly, softens to the deep indigo of an Egyptian twilight. The feluccas are lit from below by the reflected sky on the water. The first stars appear. The call to prayer begins from somewhere in the city ahead. And the Nile, which has seen every sunset for five thousand years and more, continues flowing south toward Cairo and the sea, exactly as it has always done, indifferent to the beauty and entirely responsible for it.",
        duration: "45 minutes sailing south",
        location: "Nile River, heading south toward Luxor",
        tips:
          "The return sail is the most beautiful part of the entire experience. Face west and watch the sunset progress from beginning to end without looking away. The light changes every two minutes. You will be grateful you watched it all.",
      },
      {
        step: 5,
        time: "18:30",
        title: "Return to Luxor Dock",
        description:
          "The felucca returns to the Corniche dock as dusk fully settles over the city and the Luxor Temple floodlights — visible from the deck, two minutes' walk south along the Corniche — begin to glow gold against the darkening sky. The evening is yours. End of tour.",
        duration: null,
        location: "Felucca dock, Corniche el-Nil, central Luxor",
      },
    ],
    importantInfo: [
      "Hotel pickup is NOT included — make your own way to the felucca dock near the Mercure Hotel on the Corniche",
      "The felucca uses wind power only — journey times may vary slightly depending on wind conditions",
      "Bring a light jacket or layer for the boat — the evening breeze on the water can be cooler than expected",
      "The optimal departure time is 16:00 — earlier departures miss the golden sunset light on the return; later departures risk arriving after dark",
      "This is a deliberately unhurried experience. It is not for people in a hurry. It is for people who want to spend three hours on the world's most famous river as the sun goes down.",
    ],
    meetingPoint: {
      description:
        "Felucca dock on the Nile Corniche, central Luxor East Bank, near the Mercure Hotel. Your Aurevian Tours guide and captain will be at the boat.",
    },
    accessibility:
      "Easy. Boarding requires stepping from the dock onto the boat deck, approximately 30cm. Seated throughout the sailing sections. Standing on uneven ground during the island garden walk. Not suitable for wheelchair users.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 15. Egypt Tour Package: 8 Days All-Inclusive from Luxor
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Egypt Tour Package: 8 Days All-Inclusive from Luxor",
    images: ["/images/tours/cruise.jpeg"],
    slug: "egypt-tour-package-8-days-all-inclusive-luxor",
    description:
      "Eight days. Two great river cities. The Valley of the Kings and the Great Pyramids of Giza. The Temple of Horus at Edfu and the temples of Abu Simbel at the edge of Sudan. The island of Philae and the island of Elephantine and Coptic Cairo and the Khan el-Khalili bazaar. All of it in the company of a single Aurevian Tours Egyptologist guide who is with you for every minute of every day, answering every question, navigating every transition, and providing the continuous historical narrative that turns a sequence of impressive ancient sites into a coherent story about one of the most extraordinary civilisations in human history.\n\nThis eight-day all-inclusive itinerary is Aurevian Tours' most comprehensive Egypt offering, designed for visitors who want to see everything essential in a single, expertly managed journey without the logistical complexity of arranging individual tours, internal transport, hotel bookings, and entrance fees independently. Everything is included: seven nights of 4-star accommodation in Luxor, Aswan, and Cairo, all meals from Day 1 lunch to Day 8 lunch, a private air-conditioned vehicle throughout, internal flights from Aswan to Abu Simbel and return and from Luxor to Cairo, all guided excursions, and all entrance fees for every site on the itinerary. The only things you need to arrange for yourself are the international flights to and from Egypt and whatever personal spending you choose to do along the way.\n\nThe itinerary is designed to follow a logical south-to-north progression that mirrors both the historical development of Egyptian civilisation and the physical geography of the Nile Valley. You begin in Luxor — the great city of the New Kingdom, where the concentration of monuments is densest and the contextual groundwork is richest — and move south to Aswan and Abu Simbel before returning north through the temples of Edfu and Kom Ombo and Dendera and Abydos to Luxor again, and finally flying north to Cairo for the Pyramids and the Egyptian Museum and the layered urban history of the capital. By the time you reach the Great Pyramid of Khufu on Day 7, you will have already spent six days immersed in the civilisation that built it, and the experience of standing before it will be correspondingly transformed.",
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
      "Single expert Aurevian Tours Egyptologist guide for the full 8 days — complete continuity of narrative throughout",
      "Valley of the Kings, Karnak, Hatshepsut Temple, and the full West Bank of Luxor",
      "Temples of Edfu and Kom Ombo between Luxor and Aswan",
      "Philae Temple on its reservoir island and traditional felucca sailing in Aswan",
      "Flight to Abu Simbel — Ramses II's greatest monument, relocated by UNESCO in the 1970s",
      "Pyramids of Giza, Great Sphinx, and Egyptian Museum in Cairo",
      "Islamic and Coptic Cairo — the Hanging Church, Ben Ezra Synagogue, and Khan el-Khalili bazaar",
      "All 4-star accommodation, all meals, all internal flights, all entrance fees included",
    ],
    includes: [
      "7 nights accommodation in 4-star hotels in Luxor (2 nights), Aswan (2 nights), and Cairo (3 nights) — or along the itinerary as adjusted",
      "All meals from Day 1 lunch to Day 8 lunch — full board throughout",
      "Private air-conditioned vehicle and licensed driver for all ground transfers",
      "Internal flights: Aswan to Abu Simbel and return; Luxor to Cairo",
      "All guided excursions with a single Egyptologist guide for all 8 days",
      "All entrance fees to every site on the itinerary",
    ],
    excludes: [
      "International flights to and from Egypt",
      "Travel insurance — strongly recommended and available through Aurevian Tours on request",
      "Gratuities (~$10–15 per day for your guide, $3–5 per day for drivers)",
      "Personal expenses and shopping",
      "Optional tomb extras (Tutankhamun tomb ~$16.50, Nefertari tomb ~$30.00)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Luxor — Arrival, East Bank Temples in the Golden Hour",
        description:
          "You arrive in Luxor and your Aurevian Tours guide meets you and transfers you to your 4-star hotel, before leading you through the two great East Bank temples in the golden late afternoon light — the ideal introduction to what the next eight days will contain.",
        activities: [
          {
            time: "Morning/Midday",
            title: "Arrival in Luxor & Hotel Check-in",
            description:
              "Your Aurevian Tours guide meets you at Luxor International Airport or Luxor Train Station with a sign bearing your name and transfers you to your 4-star hotel. After check-in, a welcome lunch is arranged at the hotel or a nearby recommended restaurant, and your guide conducts a full orientation briefing for the entire eight-day itinerary: the sequence of sites, the daily rhythm, practical information about packing for different contexts, and the opportunity to ask any questions before the journey proper begins.",
          },
          {
            time: "14:00",
            title: "Karnak Temple Complex — The World's Greatest Religious Building",
            description:
              "Your first experience of ancient Egypt begins at the most appropriate possible starting point: Karnak, the largest religious complex ever built, dedicated primarily to the god Amun-Ra and expanded by thirty successive pharaohs across two thousand years of continuous construction. Your guide takes you through the ram-headed sphinx avenue, the Great Hypostyle Hall with its 134 towering columns, the sanctuary of Amun, the Sacred Lake, and the obelisks of Hatshepsut — using the two hours not just to show you what exists but to establish the interpretive framework that will carry you through the entire eight-day journey: the relationship between the pharaoh and the gods, the function of temples in Egyptian religious life, the meaning of the hieroglyphic writing on every surface, and the historical timeline that connects everything you will see from today through to Cairo on Day 7.",
            duration: "2 hours",
          },
          {
            time: "17:00",
            title: "Luxor Temple at Dusk",
            description:
              "Walk south along the Nile Corniche to Luxor Temple — or take the newly excavated Avenue of the Sphinxes, whose three-kilometre processional road once connected the two temples and which your guide uses to introduce the concept of the Opet Festival, the great annual religious ceremony that gave this road its ancient purpose. Luxor Temple in the late afternoon light is one of the finest architectural experiences in Egypt: the honey-coloured sandstone warm and dimensional in the slanting western sun, the entrance pylon of Ramses II monumental and the lone red granite obelisk glowing against the first blue of the evening sky.",
            duration: "1 hour",
          },
        ],
        meals: { breakfast: false, lunch: true, dinner: true },
        accommodation: "4-star hotel, Luxor East Bank",
      },
      {
        day: 2,
        title: "Luxor West Bank — Five Sites, Five Thousand Years",
        description:
          "A full day on the West Bank of Luxor — the ancient Theban Necropolis — covering the Colossi of Memnon, the Valley of the Kings, the Mortuary Temple of Hatshepsut, the Valley of the Nobles, and Medinet Habu: the complete essential West Bank in a single expertly paced day.",
        activities: [
          {
            time: "07:30",
            title: "Colossi of Memnon & Valley of the Kings",
            description:
              "Begin with the twin quartzite colossi of Amenhotep III — 18 metres tall, 700 tonnes each, guarding the ghost of a vanished mortuary temple — before entering the Valley of the Kings for three royal tombs selected by your guide for the richest combination of artistic quality and historical significance. The names on the door — Ramses VI, Ramses III, Seti I — are some of the most famous in the ancient world, and your guide reads the painted walls of their burial chambers with the fluency of someone who has spent years learning to see these extraordinary spaces as the ancient priests saw them: not as decoration but as operational sacred text.",
            duration: "2 hours 30 minutes",
          },
          {
            time: "10:00",
            title: "Mortuary Temple of Hatshepsut at Deir el-Bahari",
            description:
              "The three-tiered terraced temple of Egypt's most successful female pharaoh, set against the sheer face of the Theban cliff at Deir el-Bahari — one of the most architecturally refined buildings of the ancient world and the site of one of Egyptology's most dramatic biographical discoveries: the systematic attempt by Hatshepsut's stepson to erase her from history, and the equally systematic failure of that attempt.",
            duration: "45 minutes",
          },
          {
            time: "11:30",
            title: "Valley of the Nobles",
            description:
              "Two of the famed painted tombs of New Kingdom officials — the Tomb of Nakht with its extraordinary musicians and harvest scenes, and the Tomb of Menna or Ramose — providing the human and quotidian perspective on ancient life that the royal tombs, with their focus on the sacred and the divine, necessarily cannot offer. These are the tombs of the people who made the pharaonic world function, and they painted their walls with the life they had actually lived.",
            duration: "45 minutes",
          },
          {
            time: "12:30",
            title: "Medinet Habu — The Temple of Military Glory",
            description:
              "The mortuary temple of Ramses III — covered in some of the largest and most dramatic military reliefs in Egypt, depicting the pharaoh's campaigns against the Sea Peoples, the Libyans, and the Nubians in images that are simultaneously propaganda, historical document, and genuinely impressive art. Your guide explains the historical context: the Bronze Age collapse of the 12th century BC, the mysterious Sea Peoples, and the extraordinary fact that Egypt — almost alone among the great civilisations of the ancient Mediterranean — survived this catastrophe intact.",
            duration: "45 minutes",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Luxor East Bank",
      },
      {
        day: 3,
        title: "Luxor to Aswan — Philae Temple & the Granite Islands",
        description:
          "Travel south to Aswan — Egypt's most beautifully situated city, where the Nile breaks around islands of dark granite and the desert comes closest to the river's edge — for the island temple of Isis at Philae and an evening felucca sail.",
        activities: [
          {
            time: "08:00",
            title: "Travel to Aswan by Train or Private Vehicle",
            description:
              "Travel south from Luxor to Aswan — approximately three hours by first-class train or slightly longer by private vehicle, depending on the day's arrangements. Your guide travels with you throughout, using the journey to introduce Aswan's history and cultural geography: the granite that supplied the obelisks and statues of the entire New Kingdom, the ancient trade route to sub-Saharan Africa that made Aswan the wealthiest city in the south, the Nubian cultural identity that gives the city and its surroundings a character distinctly different from Luxor.",
            duration: "3 hours",
          },
          {
            time: "14:00",
            title: "Philae Temple — The Last Outpost of the Ancient Religion",
            description:
              "A motorboat ride to Agilkia Island in the Aswan reservoir, where the Temple of Isis stands on its UNESCO-relocated site — the original island having been submerged by the first Aswan Dam and the temple rescued by one of the great engineering operations of the 20th century. Your guide explains both the ancient significance of Philae — the last temple in the ancient world to remain in active use, its priests continuing the old rituals until 535 AD — and the extraordinary modern story of its rescue, which involved dismantling and moving an entire temple complex stone by stone to preserve it from the rising waters.",
            duration: "90 minutes",
          },
          {
            time: "16:30",
            title: "Evening Felucca Sail — Aswan's Granite Islands",
            description:
              "A traditional felucca sail among the granite islands of the Nile at Aswan as the sun descends over the desert. Elephantine Island, the Botanical Gardens Island, the Aga Khan Mausoleum on its hilltop — all drifting past in the golden light as your captain uses nothing but the Nile wind to navigate. One of the most peaceful hours available anywhere in Egypt.",
            duration: "1 hour",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Aswan",
      },
      {
        day: 4,
        title: "Aswan High Dam & Abu Simbel — Egypt's Most Remote Monuments",
        description:
          "A morning visit to the Aswan High Dam — the great engineering project that transformed Egyptian agriculture and created Lake Nasser — followed by a flight to the temples of Abu Simbel, Ramses II's greatest monument and UNESCO's greatest rescue operation, near the border with Sudan.",
        activities: [
          {
            time: "08:00",
            title: "Aswan High Dam — The Engineering of a Country",
            description:
              "The Aswan High Dam, completed in 1970 with Soviet technical assistance after the political drama of the Suez Crisis made Western support unavailable, is one of the defining facts of modern Egypt: it eliminated the annual Nile flood that had regulated Egyptian agriculture for five thousand years, enabled year-round irrigation and three harvests annually on some agricultural land, provided electricity to the national grid, and created Lake Nasser — one of the largest artificial lakes in the world, stretching 500 kilometres south into Sudan. It also drowned twenty-four temples and the entire homeland of the Nubian people, whose communities were relocated to new settlements that have never fully replaced what was lost. Your guide presents both sides of this complex legacy with the even-handedness it requires.",
            duration: "45 minutes",
          },
          {
            time: "10:00",
            title: "Flight to Abu Simbel",
            description:
              "A 35-minute flight from Aswan Airport south to Abu Simbel Airport, a small facility built specifically to service the tourist trade to the temples. The flight over the desert and Lake Nasser offers aerial views of the landscape's extraordinary emptiness and scale.",
            duration: "35 minutes",
          },
          {
            time: "11:15",
            title: "Temples of Abu Simbel — Ramses II at the Edge of the World",
            description:
              "Abu Simbel is the furthest south that the concentrated ambition of the New Kingdom pharaohs took its monumental form, and the temples of Ramses II and Nefertari here are among the most extraordinary things in Egypt. The Great Temple of Ramses II — four colossal seated statues of the pharaoh, each 20 metres tall, carved from the living cliff face and looking south into Nubia with the implacable authority of a ruler who wanted his subjects to understand exactly whom they served — and the smaller Temple of Nefertari, built for Ramses' principal wife in the image of the goddess Hathor, were cut from the solid rock of the cliff face during the reign of Ramses II in the 13th century BC.\n\nBoth temples were rescued from the rising waters of Lake Nasser in one of the most audacious engineering operations of the 20th century: between 1964 and 1968, in a UNESCO-coordinated international project, the entire cliff face containing both temples was cut into some 1,036 blocks averaging 20 tonnes each, the blocks were transported up the cliff and reassembled on higher ground in their original spatial relationship to each other, and the cliff face was reconstructed around them. The astronomiual alignment of the Great Temple was preserved with remarkable precision: twice a year, on the 22nd of February and the 22nd of October, the rising sun penetrates 60 metres into the innermost sanctuary and illuminates the four seated deities on the back wall — Ptah, Amun-Ra, Ramses II himself, and Ra-Horakhty — with the single exception of Ptah, the god of darkness, who remains in shadow.",
            duration: "2 hours",
          },
          {
            time: "13:30",
            title: "Return Flight to Aswan",
            description:
              "Return flight to Aswan. Free afternoon in Aswan — the Corniche, the local market, or simply the hotel terrace above the river.",
            duration: "35 minutes",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Aswan",
      },
      {
        day: 5,
        title: "Edfu & Kom Ombo — The Drive North Through Ancient Temples",
        description:
          "Drive north from Aswan, stopping at the unique double temple of Kom Ombo and the perfectly preserved Temple of Horus at Edfu, before arriving in Luxor for the final Luxor night.",
        activities: [
          {
            time: "08:00",
            title: "Drive North — First Stop: Kom Ombo",
            description:
              "An hour's drive north from Aswan brings you to Kom Ombo, uniquely situated on a Nile bend with the river visible from within the temple precinct. The only dual-deity temple in the ancient world — dedicated simultaneously to Sobek the crocodile god and Haroeris the elder Horus, with perfectly symmetrical bilateral architecture reflecting their co-equal status — plus its Crocodile Museum of mummified sacred animals and its extraordinary carved medical instruments panel, which constitutes the most detailed evidence of ancient Egyptian medical practice surviving anywhere.",
            duration: "90 minutes at Kom Ombo",
          },
          {
            time: "11:00",
            title: "Continue North — Temple of Horus at Edfu",
            description:
              "A further hour north to Edfu, arriving — in the Aurevian Tours tradition — by traditional horse-drawn carriage through the local market streets rather than by tourist coach from the dock. The Temple of Horus: the best-preserved ancient temple in Egypt, its architecture complete, its Sacred Drama reliefs on the outer enclosure wall showing the world's earliest sequential narrative art, its original stone naos still standing in the innermost sanctuary after two thousand years.",
            duration: "90 minutes at Edfu",
          },
          {
            time: "13:30",
            title: "Drive North to Luxor",
            description:
              "A further two hours north along the Nile Valley road back to Luxor, arriving in the mid-afternoon for a final evening in the city of the pharaohs.",
            duration: "2 hours driving",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Luxor",
      },
      {
        day: 6,
        title: "Abydos & Dendera — Egypt's Most Sacred and Most Intact",
        description:
          "A long day trip north from Luxor to two of Egypt's most extraordinary temples — the sacred city of Abydos with the finest painted reliefs in Egypt, and the intact masterpiece of Dendera with its famous astronomical ceiling.",
        activities: [
          {
            time: "07:00",
            title: "Drive North to Abydos",
            description:
              "The 2.5-hour drive north through the sugarcane fields of Upper Egypt gives your guide time to prepare you for Abydos — the holiest city in ancient Egypt, the mythological burial place of the head of Osiris, and the site of the Temple of Seti I with its extraordinary painted reliefs.",
            duration: "2.5 hours driving",
          },
          {
            time: "09:30",
            title: "Temple of Seti I at Abydos — The Finest Paintings in Egypt",
            description:
              "The seven parallel sanctuaries of the Temple of Seti I, each dedicated to a different deity, contain the finest, most vividly coloured, and best-preserved painted reliefs in all of Egypt. The ochres and turquoises and golds are not merely well-preserved but luminous — as vivid after 3,200 years as the day the ancient painters applied them. The Abydos King List, the mysterious underground Osireion, and the theological complexity of a site where Osiris himself was believed to be buried: an experience that most visitors to Egypt never have and never forget once they do.",
            duration: "90 minutes",
          },
          {
            time: "13:00",
            title: "Temple of Hathor at Dendera — The Intact Masterpiece",
            description:
              "One hour south to Dendera for the best-preserved large temple in Egypt: its roof intact, its astronomical ceiling magnificent, its underground crypts covered in extraordinary secret reliefs, its rooftop shrines overlooking the Nile Valley in every direction. The synthesis of Egyptian and Greek-Ptolemaic theological tradition that produced Dendera is one of the most fascinating intellectual chapters in the entire history of ancient religion, and your guide navigates it with the expertise of someone who has studied it deeply.",
            duration: "2 hours",
          },
          {
            time: "15:00",
            title: "Return to Luxor",
            description: "One hour south back to Luxor for the final Luxor evening.",
            duration: "1 hour driving",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Luxor",
      },
      {
        day: 7,
        title: "Fly to Cairo — The Pyramids & the Egyptian Museum",
        description:
          "Fly north to Cairo for the final phase of the journey: the last of the Seven Wonders of the Ancient World still standing, and the largest collection of ancient Egyptian artifacts in the world.",
        activities: [
          {
            time: "Morning",
            title: "Flight from Luxor to Cairo",
            description:
              "A one-hour flight from Luxor to Cairo International Airport, with private vehicle transfer to your 4-star hotel in the Giza area. By now you have spent six days immersed in the monuments and history of Upper Egypt, and you arrive in Cairo with a depth of contextual knowledge that will transform the experience of the most famous monuments in the country.",
            duration: "1 hour flight",
          },
          {
            time: "13:00",
            title: "Pyramids of Giza & Great Sphinx — The Last Wonder",
            description:
              "The Great Pyramid of Khufu was built around 2560 BC — approximately 1,000 years before the temples of the New Kingdom that you have been visiting all week, a fact that your guide uses to give scale to the entire history you have absorbed. Three pyramids — Khufu, Khafre, Menkaure — and the Great Sphinx, which has guarded the plateau for 4,500 years: the most recognisable monuments in human history, and still the most overwhelming when seen in person. Your guide explains the complete construction story with the nuance and accuracy that the latest archaeological research supports, the astronomical alignments, the ongoing excavations that continue to reveal new information, and the particular achievement that the pyramid represents: not merely an enormous stone building but a precise and complex machine for the transformation of a mortal king into an eternal god.",
            duration: "3 hours",
          },
          {
            time: "17:00",
            title: "Egyptian Museum — The World's Greatest Collection",
            description:
              "The Egyptian Museum in Tahrir Square holds the largest collection of ancient Egyptian artifacts in the world, including the complete treasures of Tutankhamun's intact tomb — the golden funerary mask, the solid gold inner coffin, the gilded throne, the alabaster canopic shrine, the extraordinary array of jewelry and ritual objects that Howard Carter spent ten years conserving and cataloguing after their discovery in 1922. Your guide knows this collection as well as they know Luxor's temples, and the two hours spent here are as rich and specific as any of the previous six days.",
            duration: "2 hours",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: true },
        accommodation: "4-star hotel, Cairo (Giza area)",
      },
      {
        day: 8,
        title: "Cairo — Coptic & Islamic History, Then Departure",
        description:
          "A morning in historic Cairo exploring the Coptic and Islamic layers of the city — the Hanging Church, the Ben Ezra Synagogue, the Khan el-Khalili bazaar — before transfer to Cairo Airport for international departure.",
        activities: [
          {
            time: "09:00",
            title: "Coptic Cairo — The Christian Layer of the Ancient City",
            description:
              "Old Cairo's Coptic quarter preserves the Christian history of Egypt in some of the most remarkable early church buildings outside of the Holy Land. The Hanging Church — officially the Saint Virgin Mary's Coptic Orthodox Church — was built in the 4th century AD on top of a Roman gatehouse, its nave suspended over the ancient gateway on stone beams, its interior decorated with medieval icons and Coptic carvings of extraordinary delicacy. The Ben Ezra Synagogue nearby, one of the oldest Jewish places of worship in the world, is the site where the famous Cairo Geniza was discovered in 1896 — a cache of 300,000 manuscript fragments that provided an unparalleled record of medieval Jewish, Islamic, and Christian life in Egypt. Your guide explains the extraordinary interfaith history of this small neighbourhood, where mosque, church, and synagogue have stood side by side for centuries.",
            duration: "90 minutes",
          },
          {
            time: "11:00",
            title: "Khan el-Khalili — Cairo's Great Medieval Bazaar",
            description:
              "The Khan el-Khalili, established in 1382 by the Mamluk emir Jarkas el-Khalili, is one of the oldest and largest bazaars in the Arab world — a labyrinthine market quarter of narrow covered lanes and small shops selling papyrus, spices, silver jewelry, cotton and linen goods, glass, copper and brasswork, carved wood, and the full range of Egyptian traditional crafts. Your guide knows the market well enough to take you to the workshops rather than the tourist shops, and can advise on what constitutes good quality and fair pricing in each category.",
            duration: "1 hour",
          },
          {
            time: "13:00",
            title: "Final Lunch & Transfer to Cairo Airport",
            description:
              "A final lunch in Cairo — your guide's restaurant recommendation, somewhere with actual food rather than tourist food — followed by private vehicle transfer to Cairo International Airport. Your Aurevian Tours guide stays with you until the airport drop-off and says their farewell at the departures entrance. Eight days of ancient and medieval and modern Egypt have come to an end. The journey home begins. The journey back, most people who take this tour report, begins to be planned on the flight.",
          },
        ],
        meals: { breakfast: true, lunch: true, dinner: false },
        accommodation: null,
      },
    ],
    importantInfo: [
      "International flights to and from Egypt are NOT included — arrange your own arrival at Luxor Airport or Luxor Train Station for Day 1",
      "Internal flights (Aswan to Abu Simbel return and Luxor to Cairo) are INCLUDED and arranged by Aurevian Tours",
      "All hotels are 4-star and centrally located in their respective cities. 5-star upgrades are available at additional cost — ask when booking",
      "A single Aurevian Tours Egyptologist guide accompanies you for the full 8 days — this continuity of narrative is one of the package's most significant advantages",
      "Tipping is customary and appreciated throughout: approximately $10–15 per day for your guide, $3–5 per day for drivers",
      "Optional tomb entries not included in the standard price: Tutankhamun's tomb (~$16.50) and Nefertari's tomb (~$30.00) — bring cash for these if desired",
      "Travellers with specific dietary requirements should advise Aurevian Tours at time of booking — all requirements can be accommodated",
    ],
    meetingPoint: {
      description:
        "Your Aurevian Tours Egyptologist guide meets you at Luxor International Airport or Luxor Train Station on Day 1 with a sign bearing your name.",
    },
    accessibility:
      "Moderate fitness required throughout. Abu Simbel involves walking on sandy and rocky desert ground. The Valley of the Kings involves steep, uneven stone corridors. All other sites range from easy flat ground to moderate walking with some steps. Visitors with mobility limitations should contact Aurevian Tours before booking to discuss specific adaptations.",
  },
];

export { cityData, toursData };