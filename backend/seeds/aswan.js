// seeds/cities/aswan.js

const cityData = {
  name: "Aswan",
  slug: "aswan",
  description:
    "Aswan is one of Egypt's most enchanting cities, nestled along the southern banks of the Nile where the desert meets the river in a breathtaking blend of golden dunes, emerald waters, and ancient wonders. For thousands of years before it ever appeared on a modern map, this stretch of river was already a frontier — the southernmost outpost of the pharaonic world, the gateway through which gold, ivory, ebony, and incense flowed north from the heart of Africa, and the place where Egypt's armies, merchants, and priests all paused before continuing further south or turning back toward the Nile Delta. Granite quarried from Aswan's hills built obelisks and colossal statues that still stand in Luxor, Cairo, and even Rome, carried downriver on barges that floated past the very same boulders travelers photograph today. Once the gateway to sub-Saharan Africa and a vital trade hub for the pharaohs, Aswan carries a rich legacy that spans thousands of years, layered with Nubian kingdoms, Greek and Roman garrisons, and the more recent and equally dramatic story of the Aswan High Dam, which reshaped the entire region and gave rise to the vast inland sea now known as Lake Nasser. From the legendary temples of Abu Simbel to the serene Nubian villages and the magnificent Philae Temple rising from the waters of Lake Nasser, Aswan offers a deeply authentic and unforgettable Egyptian experience — a place where the desert wind, the sound of a felucca's sail filling, and the warm welcome of Nubian hospitality combine into something visitors carry with them long after they leave.",
  country: "Egypt",
  image: "aswan.jpg",
};

const toursData = [
  {
    title: "3-Night Nile Cruise from Aswan to Luxor",
    slug: "3-night-nile-cruise-aswan-luxor",
    description:
      "Embark on one of the world's most legendary journeys — a 3-night cruise along the timeless Nile River from Aswan to Luxor. This is the same stretch of water that carried pharaohs on their state barges, transported granite obelisks downstream to Thebes and Memphis, and witnessed the slow rise and fall of an entire civilization along its banks. Sail past ancient temples, lush riverbanks, and golden desert landscapes while your expert guide brings the stories of the pharaohs to life, weaving together myth, archaeology, and the everyday rhythms of river life that have barely changed in centuries. Along the way you'll visit the temples of Kom Ombo and Edfu, the Valley of the Kings, Karnak, and the Mortuary Temple of Hatshepsut — each one a chapter in an unfolding story that begins in the granite quarries of Aswan and ends amid the colossal halls of ancient Thebes. All the while, you'll enjoy comfortable onboard accommodation, delicious meals served fresh each day, and the quiet pleasure of watching Egypt drift slowly past your cabin window — water buffalo wading in the shallows, children waving from riverside villages, and the sun setting behind palm groves that have lined this river since before the pyramids were built.",
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
      es: "El lobby de su hotel en Asuán. El guía se reunirá con usted a la hora acordada para el traslado al barco de crucero.",
      pt: "O lobby do seu hotel em Assuão. O guia irá encontrá-lo no horário acordado para o traslado até o navio de cruzeiro.",
      it: "La hall del vostro hotel ad Assuan. La guida vi incontrerà all'ora concordata per il trasferimento alla nave da crociera.",
      fr: "Le hall de votre hôtel à Assouan. Le guide vous rejoindra à l'heure convenue pour le transfert vers le bateau de croisière.",
      ru: "Лобби вашего отеля в Асуане. Гид встретит вас в назначенное время для трансфера на круизное судно.",
      de: "Die Lobby Ihres Hotels in Assuan. Der Reiseleiter trifft Sie zur vereinbarten Zeit für den Transfer zum Kreuzfahrtschiff."
    },
    accessibility: {
      en: "This tour involves walking on uneven ancient surfaces and climbing stairs aboard the ship. Not recommended for guests with severe mobility issues.",
      es: "Este tour implica caminar sobre superficies antiguas irregulares y subir escaleras a bordo del barco. No se recomienda para huéspedes con problemas graves de movilidad.",
      pt: "Este tour envolve caminhar sobre superfícies antigas irregulares e subir escadas a bordo do navio. Não recomendado para hóspedes com problemas graves de mobilidade.",
      it: "Questo tour prevede di camminare su superfici antiche irregolari e di salire scale a bordo della nave. Non consigliato per ospiti con gravi problemi di mobilità.",
      fr: "Cette excursion implique de marcher sur des surfaces antiques irrégulières et de monter des escaliers à bord du bateau. Non recommandée pour les personnes ayant de graves problèmes de mobilité.",
      ru: "Этот тур предполагает ходьбу по неровным древним поверхностям и подъём по лестницам на борту судна. Не рекомендуется гостям с серьёзными проблемами с подвижностью.",
      de: "Diese Tour beinhaltet das Gehen auf unebenen antiken Oberflächen und das Steigen von Treppen an Bord des Schiffes. Nicht empfehlenswert für Gäste mit starken Mobilitätseinschränkungen."
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun cream and hat", "Light layers for evenings on the Nile", "Camera", "Personal medications"],
      es: [
        "Zapatos cómodos para caminar",
        "Crema solar y sombrero",
        "Capas ligeras para las noches en el Nilo",
        "Cámara",
        "Medicamentos personales"
      ],
      pt: [
        "Sapatos confortáveis para caminhar",
        "Protetor solar e chapéu",
        "Camadas leves para as noites no Nilo",
        "Câmera fotográfica",
        "Medicamentos pessoais"
      ],
      it: [
        "Scarpe comode da camminata",
        "Crema solare e cappello",
        "Strati leggeri per le serate sul Nilo",
        "Macchina fotografica",
        "Farmaci personali"
      ],
      fr: [
        "Chaussures de marche confortables",
        "Crème solaire et chapeau",
        "Couches légères pour les soirées sur le Nil",
        "Appareil photo",
        "Médicaments personnels"
      ],
      ru: [
        "Удобная обувь для ходьбы",
        "Крем от солнца и шляпа",
        "Лёгкая одежда слоями для вечеров на Ниле",
        "Фотоаппарат",
        "Личные медикаменты"
      ],
      de: [
        "Bequeme Wanderschuhe",
        "Sonnencreme und Hut",
        "Leichte Kleidungsschichten für die Abende am Nil",
        "Kamera",
        "Persönliche Medikamente"
      ]
    },
    importantInfo: {
      en: [
        "Check-in to the cruise ship is on Day 1 after arrival to Aswan.",
        "All cabins are double-occupancy; single supplement available on request.",
        "Meals onboard are full board (breakfast, lunch, and dinner).",
        "Tipping for the crew and guide is customary but not included.",
        "Passport copies are required for all passengers at check-in.",
      ],
      es: [
        "El check-in en el barco de crucero es el día 1 después de la llegada a Asuán.",
        "Todos los camarotes son de ocupación doble; suplemento individual disponible a solicitud.",
        "Las comidas a bordo son en pensión completa (desayuno, almuerzo y cena).",
        "Las propinas para la tripulación y el guía son habituales pero no están incluidas.",
        "Se requieren copias del pasaporte de todos los pasajeros en el check-in."
      ],
      pt: [
        "O check-in no navio de cruzeiro é no dia 1, após a chegada a Assuão.",
        "Todas as cabines são de ocupação dupla; suplemento individual disponível sob solicitação.",
        "As refeições a bordo são em pensão completa (café da manhã, almoço e jantar).",
        "As gorjetas para a tripulação e o guia são costumeiras, mas não estão incluídas.",
        "Cópias do passaporte são exigidas de todos os passageiros no check-in."
      ],
      it: [
        "Il check-in sulla nave da crociera avviene il giorno 1, dopo l'arrivo ad Assuan.",
        "Tutte le cabine sono a doppia occupazione; supplemento singola disponibile su richiesta.",
        "I pasti a bordo sono in pensione completa (colazione, pranzo e cena).",
        "Le mance per l'equipaggio e la guida sono consuetudine ma non incluse.",
        "Sono richieste copie del passaporto per tutti i passeggeri al check-in."
      ],
      fr: [
        "L'enregistrement à bord du bateau de croisière se fait le jour 1, après l'arrivée à Assouan.",
        "Toutes les cabines sont en occupation double ; supplément single disponible sur demande.",
        "Les repas à bord sont en pension complète (petit-déjeuner, déjeuner et dîner).",
        "Les pourboires pour l'équipage et le guide sont d'usage mais ne sont pas inclus.",
        "Des copies de passeport sont requises pour tous les passagers lors de l'enregistrement."
      ],
      ru: [
        "Регистрация на круизном судне проходит в 1-й день после прибытия в Асуан.",
        "Все каюты рассчитаны на двух человек; одноместное размещение доступно по запросу за дополнительную плату.",
        "Питание на борту включает полный пансион (завтрак, обед и ужин).",
        "Чаевые экипажу и гиду являются обычной практикой, но не включены в стоимость.",
        "При регистрации все пассажиры должны предоставить копии паспортов."
      ],
      de: [
        "Der Check-in auf dem Kreuzfahrtschiff erfolgt am 1. Tag nach der Ankunft in Assuan.",
        "Alle Kabinen sind für Doppelbelegung ausgelegt; ein Einzelzimmerzuschlag ist auf Anfrage erhältlich.",
        "Die Mahlzeiten an Bord erfolgen in Vollpension (Frühstück, Mittag- und Abendessen).",
        "Trinkgelder für Crew und Reiseleiter sind üblich, aber nicht inbegriffen.",
        "Beim Check-in sind Passkopien aller Passagiere erforderlich."
      ]
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
            "Your Nile adventure begins today in the golden city of Aswan, where granite hills rise out of the desert and the river runs wide, calm, and impossibly blue against the sand. Your guide will meet you at your hotel in the morning and transfer you to the cruise ship, where you will check in and settle into your cabin — your home for the next three nights, and your private window onto a slowly unfolding panorama of riverbanks, palm groves, and ancient stone. After a welcome lunch onboard, served as the ship still rests at its mooring, the afternoon is spent visiting the majestic Temple of Philae, dedicated to the goddess Isis and perched on an island in the middle of the Nile — accessible by a short motorboat ride that itself feels like crossing into another era. Originally built on a different island entirely and dismantled, block by numbered block, before being reassembled here in a remarkable 20th-century rescue effort, the temple's carved reliefs and towering columns are among the finest surviving examples of ancient Egyptian art, and the story of how this place survived the rising waters of Lake Nasser is almost as compelling as the temple itself. Return to the ship for dinner as it moors at the Aswan dock, with the first evening free to relax on deck and take in the desert sunset over the Nile, the sky turning shades of rose and amber over the silhouettes of distant dunes.",
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
            "Rise early as the ship slips its moorings and sets sail northward along the Nile, the engines humming softly beneath you as the city of Aswan slides away behind the wake. The morning brings you to Kom Ombo, where one of Egypt's most unusual temples stands on a hilltop overlooking the river, its golden sandstone glowing in the morning light. The Temple of Kom Ombo is unique in Egypt — a perfectly symmetrical double temple dedicated to two gods: Sobek, the crocodile god of fertility and a creature both feared and revered in antiquity, and Haroeris, the elder form of Horus. Its corridors hold some of ancient Egypt's most intriguing medical instruments, carved in stone — scalpels, forceps, and surgical tools that hint at a sophistication in ancient medicine still being studied today. The adjacent Crocodile Museum displays dozens of genuine ancient mummified crocodiles, offerings to Sobek that were preserved with the same care as royalty. After lunch onboard, the ship continues to Edfu — home to the magnificent Temple of Horus, the best-preserved ancient temple in all of Egypt. Entered through enormous pylon gates adorned with battle scenes celebrating royal triumphs, the inner sanctuary still holds the ancient granite shrine where the statue of Horus once resided, untouched by time in a way that makes the ancient rituals feel almost within reach.",
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
            "The ship docks in Luxor overnight, its lights reflecting on the dark water beside dozens of other cruise vessels, and the day begins with one of the most anticipated experiences in all of Egypt — a visit to the Valley of the Kings on the West Bank of the Nile. Hidden in the dry, sun-bleached hills across the river from ancient Thebes, this royal burial ground holds the elaborately decorated tombs of pharaohs who ruled Egypt over three millennia ago, their corridors descending deep into the rock toward chambers painted with star-strewn ceilings and processions of gods. Your guide will bring to life the stories behind the painted walls, the Book of the Dead spells meant to guide a pharaoh's soul through the underworld, and the astonishing belief systems of the ancient Egyptians, for whom death was not an ending but a doorway. Nearby, the vast mortuary complex of Deir el-Bahari is home to the spectacular Mortuary Temple of Hatshepsut, built into the dramatic cliffs overlooking the valley in three soaring colonnaded terraces — a tribute to one of Egypt's most powerful and enigmatic rulers, a woman who ruled as pharaoh in her own right and whose monuments still provoke wonder, debate, and admiration thousands of years later.",
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
            "Your final morning is devoted to the most extraordinary temple complex ever built — Karnak. A city of temples rather than a single monument, Karnak was added to by generation after generation of pharaohs over nearly 2,000 years, each ruler determined to leave a mark grander than the last, resulting in a vast labyrinth of pylons, courts, obelisks, and the legendary Hypostyle Hall — a forest of 134 towering columns, each decorated from floor to top with intricate hieroglyphics and painted reliefs that once blazed with color under the Egyptian sun. Your guide will walk you through the Avenue of Sphinxes, the Sacred Lake where priests once performed ritual purification, and the inner sanctuaries reserved for only the highest-ranking clergy, piecing together the extraordinary evolution of one of the ancient world's most sacred places — a site that was already over a thousand years old by the time Cleopatra walked its courts. After a final lunch onboard, savored slowly as the realization sets in that this remarkable journey is drawing to a close, you will disembark and be transferred to your hotel or the Luxor train station, carrying with you four days of temples, sunsets, and stories that stretch back to the very beginning of recorded history.",
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
      es: [{
        day: 1,
        title: "Llegada a Asuán y embarque",
        description: "Su aventura por el Nilo comienza hoy en la dorada ciudad de Asuán, donde colinas de granito se elevan sobre el desierto y el río fluye ancho, tranquilo y de un azul imposible contra la arena. Su guía se reunirá con usted en su hotel por la mañana y lo trasladará al barco de crucero, donde hará el check-in y se instalará en su camarote, su hogar durante las próximas tres noches y su ventana privada hacia un panorama que se despliega lentamente de orillas, palmerales y piedra antigua. Tras un almuerzo de bienvenida a bordo, servido mientras el barco aún descansa en su amarre, la tarde se dedica a visitar el majestuoso Templo de Filé, dedicado a la diosa Isis y situado en una isla en medio del Nilo, accesible mediante un breve paseo en lancha que parece, en sí mismo, un viaje a otra época. Construido originalmente en una isla completamente distinta y desmontado bloque por bloque numerado antes de ser reensamblado aquí en un extraordinario esfuerzo de rescate del siglo XX, los relieves esculpidos y las imponentes columnas del templo son de los mejores ejemplos que se conservan del arte egipcio antiguo, y la historia de cómo este lugar sobrevivió a las aguas crecientes del lago Nasser es casi tan fascinante como el propio templo. Regreso al barco para la cena mientras este amarra en el muelle de Asuán, con la primera noche libre para relajarse en la cubierta y contemplar el atardecer del desierto sobre el Nilo, mientras el cielo se tiñe de tonos rosados y ámbar sobre las siluetas de dunas lejanas.",

        steps: [{
          time: "08:00",
          description: "Recogida en el hotel por su guía en Asuán."
        }, {
          time: "09:00",
          description: "Traslado al barco de crucero por el Nilo y check-in en su camarote."
        }, {
          time: "10:00",
          description: "Sesión informativa de bienvenida por el director del crucero; conozca a su guía y a los demás pasajeros."
        }, {
          time: "13:00",
          description: "Almuerzo de bienvenida servido a bordo."
        }, {
          time: "14:30",
          description: "Paseo en lancha a la isla de Filé."
        }, {
          time: "15:00",
          description: "Visita guiada al Templo de Isis en Filé: explore la sala hipóstila, la casa del nacimiento y los relieves de Isis y Osiris."
        }, {
          time: "17:00",
          description: "Regreso en lancha al barco de crucero."
        }, {
          time: "19:00",
          description: "Cena a bordo. Noche libre."
        }]
      }, {
        day: 2,
        title: "Kom Ombo y Edfu: templos de los dioses",
        description: "Despierte temprano mientras el barco suelta sus amarras y pone rumbo al norte por el Nilo, con los motores zumbando suavemente bajo usted mientras la ciudad de Asuán se aleja tras la estela. La mañana le lleva a Kom Ombo, donde uno de los templos más singulares de Egipto se alza sobre una colina con vistas al río, su arenisca dorada resplandeciendo con la luz matutina. El Templo de Kom Ombo es único en Egipto: un templo doble perfectamente simétrico dedicado a dos dioses, Sobek, el dios cocodrilo de la fertilidad, una criatura tanto temida como venerada en la antigüedad, y Haroeris, la forma anciana de Horus. Sus pasillos conservan algunos de los instrumentos médicos más intrigantes del antiguo Egipto, tallados en piedra: bisturíes, fórceps y herramientas quirúrgicas que insinúan una sofisticación de la medicina antigua que todavía hoy se estudia. El Museo del Cocodrilo, contiguo al templo, exhibe docenas de auténticos cocodrilos momificados de la antigüedad, ofrendas a Sobek que fueron preservadas con el mismo cuidado que la realeza. Tras el almuerzo a bordo, el barco continúa hacia Edfu, hogar del magnífico Templo de Horus, el templo antiguo mejor conservado de todo Egipto. Se accede a través de enormes pilonos decorados con escenas de batalla que celebran triunfos reales, y el santuario interior todavía conserva el antiguo altar de granito donde una vez residió la estatua de Horus, intacto por el tiempo de una manera que hace que los antiguos rituales parezcan casi al alcance de la mano.",

        steps: [{
          time: "06:00",
          description: "El barco sale de Asuán y navega hacia el norte por el Nilo."
        }, {
          time: "07:00",
          description: "Desayuno servido a bordo mientras los paisajes del desierto pasan ante usted."
        }, {
          time: "09:00",
          description: "Llegada a Kom Ombo. Carruaje de caballos o breve paseo hasta el templo."
        }, {
          time: "09:30",
          description: "Visita guiada al Templo de Kom Ombo: explore los santuarios gemelos, los relieves con instrumentos médicos y el Museo del Cocodrilo."
        }, {
          time: "11:30",
          description: "Regreso al barco. Continúa la navegación hacia Edfu."
        }, {
          time: "13:00",
          description: "Almuerzo servido a bordo."
        }, {
          time: "15:30",
          description: "Llegada a Edfu. Carruaje de caballos hasta la entrada del templo."
        }, {
          time: "16:00",
          description: "Visita guiada al Templo de Horus en Edfu: recorra los imponentes pilonos, la sala hipóstila, el Salón de los Festivales y el santuario interior."
        }, {
          time: "18:00",
          description: "Regreso al barco en carruaje."
        }, {
          time: "19:30",
          description: "Cena a bordo. Fiesta opcional de galabiya egipcia en cubierta."
        }]
      }, {
        day: 3,
        title: "Luxor: Valle de los Reyes y la Orilla Oeste",
        description: "El barco atraca en Luxor durante la noche, con sus luces reflejándose en el agua oscura junto a docenas de otros barcos de crucero, y el día comienza con una de las experiencias más esperadas de todo Egipto: una visita al Valle de los Reyes, en la Orilla Oeste del Nilo. Escondido entre colinas secas y blanqueadas por el sol al otro lado del río desde la antigua Tebas, este cementerio real conserva las tumbas elaboradamente decoradas de faraones que gobernaron Egipto hace más de tres milenios, cuyos pasillos descienden profundamente en la roca hacia cámaras pintadas con techos cubiertos de estrellas y procesiones de dioses. Su guía dará vida a las historias detrás de los muros pintados, a los hechizos del Libro de los Muertos destinados a guiar el alma de un faraón a través del inframundo, y al asombroso sistema de creencias de los antiguos egipcios, para quienes la muerte no era un final sino una puerta. Cerca de allí, el vasto complejo funerario de Deir el-Bahari alberga el espectacular Templo Funerario de Hatshepsut, construido en los dramáticos acantilados que dominan el valle en tres elevadas terrazas con columnatas: un tributo a una de las gobernantes más poderosas y enigmáticas de Egipto, una mujer que reinó como faraón por derecho propio y cuyos monumentos todavía provocan asombro, debate y admiración miles de años después.",

        steps: [{
          time: "07:00",
          description: "Desayuno a bordo mientras el barco llega a Luxor."
        }, {
          time: "08:30",
          description: "Desembarque y cruce del Nilo hacia la Orilla Oeste."
        }, {
          time: "09:00",
          description: "Llegada al Valle de los Reyes. Visite tres tumbas reales (incluidas en la entrada; la tumba de Tutankamón tiene costo adicional)."
        }, {
          time: "11:00",
          description: "Caminata o traslado al Templo Funerario de Hatshepsut en Deir el-Bahari."
        }, {
          time: "11:30",
          description: "Visita guiada al templo de Hatshepsut: explore las terrazas con columnatas, los relieves pintados y el santuario interior sagrado."
        }, {
          time: "13:00",
          description: "Regreso al barco por carretera. Almuerzo servido a bordo."
        }, {
          time: "15:00",
          description: "Visita opcional a los Colosos de Memnón (dos enormes estatuas antiguas junto a la carretera; una parada breve)."
        }, {
          time: "16:30",
          description: "Regreso al barco. Tiempo libre para descansar o explorar la corniche de Luxor de manera independiente."
        }, {
          time: "19:30",
          description: "Última cena a bordo."
        }]
      }, {
        day: 4,
        title: "Templo de Karnak y salida desde Luxor",
        description: "Su última mañana está dedicada al complejo de templos más extraordinario jamás construido: Karnak. Más una ciudad de templos que un único monumento, Karnak fue ampliado por generación tras generación de faraones durante casi 2,000 años, cada gobernante decidido a dejar una huella más grandiosa que la anterior, dando lugar a un vasto laberinto de pilonos, patios, obeliscos y la legendaria Sala Hipóstila: un bosque de 134 imponentes columnas, cada una decorada de arriba abajo con intrincados jeroglíficos y relieves pintados que una vez resplandecieron de color bajo el sol egipcio. Su guía le llevará por la Avenida de las Esfinges, el Lago Sagrado donde los sacerdotes realizaban antiguamente rituales de purificación, y los santuarios interiores reservados solo para el clero de más alto rango, reconstruyendo la extraordinaria evolución de uno de los lugares más sagrados del mundo antiguo, un sitio que ya tenía más de mil años de antigüedad cuando Cleopatra recorrió sus patios. Tras un último almuerzo a bordo, disfrutado despacio mientras se asienta la idea de que este notable viaje está llegando a su fin, desembarcará y será trasladado a su hotel o a la estación de tren de Luxor, llevándose consigo cuatro días de templos, atardeceres e historias que se remontan al propio inicio de la historia escrita.",

        steps: [{
          time: "07:00",
          description: "Desayuno a bordo."
        }, {
          time: "08:30",
          description: "Desembarque y traslado al complejo del Templo de Karnak en la Orilla Este."
        }, {
          time: "09:00",
          description: "Visita guiada a Karnak: recorra la Avenida de las Esfinges con cabeza de carnero, la Gran Sala Hipóstila, el Templo de Festivales de Tutmosis III, el Lago Sagrado y los imponentes obeliscos de Hatshepsut y Tutmosis I."
        }, {
          time: "11:30",
          description: "Regreso al barco."
        }, {
          time: "13:00",
          description: "Último almuerzo a bordo."
        }, {
          time: "14:30",
          description: "Salida de los camarotes."
        }, {
          time: "15:00",
          description: "Traslado a su hotel en Luxor o a la estación de tren de Luxor. Fin del tour."
        }]
      }],
      pt: [{
        day: 1,
        title: "Chegada a Assuão e embarque",
        description: "Sua aventura pelo Nilo começa hoje na dourada cidade de Assuão, onde colinas de granito se erguem do deserto e o rio corre largo, calmo e de um azul quase impossível contra a areia. Seu guia irá encontrá-lo no hotel pela manhã e levá-lo até o navio de cruzeiro, onde você fará o check-in e se acomodará em sua cabine — seu lar pelas próximas três noites, e sua janela privada para um panorama que se revela lentamente, com margens de rio, palmeirais e pedra antiga. Depois de um almoço de boas-vindas a bordo, servido enquanto o navio ainda repousa em sua amarração, a tarde é dedicada à visita ao majestoso Templo de File, dedicado à deusa Ísis e situado em uma ilha no meio do Nilo — acessível por um breve passeio de barco a motor que, por si só, parece uma travessia para outra época. Originalmente construído em uma ilha completamente diferente e desmontado, bloco por bloco numerado, antes de ser remontado aqui em um notável esforço de resgate do século XX, os relevos esculpidos e as colunas imponentes do templo estão entre os melhores exemplos sobreviventes da arte egípcia antiga, e a história de como este lugar sobreviveu às águas crescentes do Lago Nasser é quase tão fascinante quanto o próprio templo. Retorno ao navio para o jantar enquanto ele ancora no cais de Assuão, com a primeira noite livre para relaxar no deck e contemplar o pôr do sol do deserto sobre o Nilo, o céu tingindo-se de tons de rosa e âmbar sobre as silhuetas de dunas distantes.",

        steps: [{
          time: "08:00",
          description: "Busca no hotel pelo seu guia em Assuão."
        }, {
          time: "09:00",
          description: "Traslado até o navio de cruzeiro pelo Nilo e check-in na sua cabine."
        }, {
          time: "10:00",
          description: "Briefing de boas-vindas pelo diretor do cruzeiro; conheça seu guia e os demais passageiros."
        }, {
          time: "13:00",
          description: "Almoço de boas-vindas servido a bordo."
        }, {
          time: "14:30",
          description: "Passeio de barco a motor até a Ilha de File."
        }, {
          time: "15:00",
          description: "Tour guiado pelo Templo de Ísis em File — explore o salão hipostilo, a casa do nascimento e os relevos de Ísis e Osíris."
        }, {
          time: "17:00",
          description: "Retorno de barco a motor ao navio de cruzeiro."
        }, {
          time: "19:00",
          description: "Jantar a bordo. Noite livre no deck."
        }]
      }, {
        day: 2,
        title: "Kom Ombo e Edfu — Templos dos Deuses",
        description: "Desperte cedo enquanto o navio solta suas amarras e segue rumo ao norte pelo Nilo, os motores zunindo suavemente enquanto a cidade de Assuão desaparece atrás do rastro de espuma. A manhã o leva a Kom Ombo, onde um dos templos mais singulares do Egito se ergue sobre uma colina com vista para o rio, seu arenito dourado brilhando à luz da manhã. O Templo de Kom Ombo é único no Egito — um templo duplo perfeitamente simétrico dedicado a dois deuses: Sobek, o deus crocodilo da fertilidade, uma criatura tão temida quanto venerada na antiguidade, e Haroéris, a forma mais antiga de Hórus. Seus corredores guardam alguns dos instrumentos médicos mais intrigantes do Egito antigo, esculpidos em pedra — bisturis, fórceps e ferramentas cirúrgicas que sugerem uma sofisticação da medicina antiga ainda estudada hoje. O Museu dos Crocodilos, ao lado, exibe dezenas de autênticos crocodilos mumificados da antiguidade, oferendas a Sobek que foram preservadas com o mesmo cuidado dado à realeza. Após o almoço a bordo, o navio segue para Edfu — lar do magnífico Templo de Hórus, o templo antigo mais bem preservado de todo o Egito. Acessado por enormes portões em forma de pilone adornados com cenas de batalha que celebram triunfos reais, o santuário interior ainda guarda o antigo altar de granito onde a estátua de Hórus um dia residiu, intocado pelo tempo de uma forma que faz os antigos rituais parecerem quase ao alcance da mão.",

        steps: [{
          time: "06:00",
          description: "O navio deixa Assuão e navega para o norte pelo Nilo."
        }, {
          time: "07:00",
          description: "Café da manhã servido a bordo enquanto as paisagens do deserto passam."
        }, {
          time: "09:00",
          description: "Chegada a Kom Ombo. Carruagem puxada por cavalos ou breve caminhada até o templo."
        }, {
          time: "09:30",
          description: "Tour guiado pelo Templo de Kom Ombo — explore os santuários gêmeos, os relevos com instrumentos médicos e o Museu dos Crocodilos."
        }, {
          time: "11:30",
          description: "Retorno ao navio. Continuação da navegação até Edfu."
        }, {
          time: "13:00",
          description: "Almoço servido a bordo."
        }, {
          time: "15:30",
          description: "Chegada a Edfu. Carruagem puxada por cavalos até a entrada do templo."
        }, {
          time: "16:00",
          description: "Tour guiado pelo Templo de Hórus em Edfu — caminhe pelos imponentes pilones, o salão hipostilo, o Salão dos Festivais e o santuário interior."
        }, {
          time: "18:00",
          description: "Retorno ao navio de carruagem."
        }, {
          time: "19:30",
          description: "Jantar a bordo. Festa opcional de galabiya egípcia no deck."
        }]
      }, {
        day: 3,
        title: "Luxor — Vale dos Reis e a Margem Ocidental",
        description: "O navio ancora em Luxor durante a noite, com suas luzes refletidas na água escura junto a dezenas de outras embarcações de cruzeiro, e o dia começa com uma das experiências mais aguardadas de todo o Egito — uma visita ao Vale dos Reis, na Margem Ocidental do Nilo. Escondido em colinas secas e clareadas pelo sol, do outro lado do rio em relação à antiga Tebas, este cemitério real abriga as tumbas elaboradamente decoradas de faraós que governaram o Egito há mais de três milênios, com corredores que descem profundamente na rocha até câmaras pintadas com tetos estrelados e procissões de deuses. Seu guia dará vida às histórias por trás das paredes pintadas, aos feitiços do Livro dos Mortos destinados a guiar a alma de um faraó pelo submundo, e ao surpreendente sistema de crenças dos antigos egípcios, para quem a morte não era um fim, mas uma porta. Próximo dali, o vasto complexo funerário de Deir el-Bahari abriga o espetacular Templo Funerário de Hatshepsut, construído nos dramáticos penhascos que dominam o vale em três terraços com colunatas — um tributo a uma das governantes mais poderosas e enigmáticas do Egito, uma mulher que reinou como faraó por direito próprio e cujos monumentos ainda provocam admiração, debate e fascínio milhares de anos depois.",

        steps: [{
          time: "07:00",
          description: "Café da manhã a bordo enquanto o navio chega a Luxor."
        }, {
          time: "08:30",
          description: "Desembarque e travessia do Nilo até a Margem Ocidental."
        }, {
          time: "09:00",
          description: "Chegada ao Vale dos Reis. Visite três tumbas reais (incluídas na entrada; a tumba de Tutancâmon tem custo extra)."
        }, {
          time: "11:00",
          description: "Caminhada ou traslado até o Templo Funerário de Hatshepsut em Deir el-Bahari."
        }, {
          time: "11:30",
          description: "Tour guiado pelo templo de Hatshepsut — explore os terraços com colunatas, os relevos pintados e o santuário interior sagrado."
        }, {
          time: "13:00",
          description: "Retorno ao navio por terra. Almoço servido a bordo."
        }, {
          time: "15:00",
          description: "Visita opcional aos Colossos de Memnon (duas enormes estátuas antigas junto à estrada — uma parada rápida)."
        }, {
          time: "16:30",
          description: "Retorno ao navio. Tempo livre para descansar ou explorar a orla de Luxor por conta própria."
        }, {
          time: "19:30",
          description: "Último jantar a bordo."
        }]
      }, {
        day: 4,
        title: "Templo de Karnak e partida de Luxor",
        description: "Sua última manhã é dedicada ao mais extraordinário complexo de templos já construído — Karnak. Mais uma cidade de templos do que um único monumento, Karnak foi ampliado geração após geração de faraós por quase 2.000 anos, cada governante determinado a deixar uma marca mais grandiosa do que a anterior, resultando em um vasto labirinto de pilones, pátios, obeliscos e o legendário Salão Hipostilo — uma floresta de 134 colunas imponentes, cada uma decorada do chão ao topo com hieróglifos intricados e relevos pintados que um dia brilharam de cor sob o sol egípcio. Seu guia o conduzirá pela Avenida das Esfinges, o Lago Sagrado onde os sacerdotes antigamente realizavam rituais de purificação, e os santuários internos reservados apenas ao clero de mais alta hierarquia, reconstituindo a extraordinária evolução de um dos lugares mais sagrados do mundo antigo — um local que já tinha mais de mil anos quando Cleópatra caminhou por seus pátios. Depois de um último almoço a bordo, saboreado lentamente enquanto a percepção de que esta notável jornada está chegando ao fim se instala, você desembarcará e será transferido para seu hotel ou para a estação de trem de Luxor, levando consigo quatro dias de templos, pores do sol e histórias que remontam ao próprio início da história registrada.",

        steps: [{
          time: "07:00",
          description: "Café da manhã a bordo."
        }, {
          time: "08:30",
          description: "Desembarque e traslado até o Complexo do Templo de Karnak, na Margem Oriental."
        }, {
          time: "09:00",
          description: "Tour guiado por Karnak — caminhe pela Avenida das Esfinges com cabeça de carneiro, o Grande Salão Hipostilo, o Templo de Festivais de Tutmés III, o Lago Sagrado e os imponentes obeliscos de Hatshepsut e Tutmés I."
        }, {
          time: "11:30",
          description: "Retorno ao navio."
        }, {
          time: "13:00",
          description: "Último almoço a bordo."
        }, {
          time: "14:30",
          description: "Check-out das cabines."
        }, {
          time: "15:00",
          description: "Traslado até seu hotel em Luxor ou até a estação de trem de Luxor. Fim do tour."
        }]
      }],
      it: [{
        day: 1,
        title: "Arrivo ad Assuan e imbarco",
        description: "La vostra avventura sul Nilo inizia oggi nella dorata città di Assuan, dove le colline di granito emergono dal deserto e il fiume scorre ampio, calmo e di un blu quasi irreale contro la sabbia. La vostra guida vi incontrerà in hotel al mattino e vi accompagnerà alla nave da crociera, dove effettuerete il check-in e vi sistemerete nella vostra cabina — la vostra casa per le prossime tre notti, e la vostra finestra privata su un panorama che si svela lentamente, fatto di rive, palmeti e pietra antica. Dopo un pranzo di benvenuto a bordo, servito mentre la nave riposa ancora all'attracco, il pomeriggio è dedicato alla visita del maestoso Tempio di File, dedicato alla dea Iside e situato su un'isola in mezzo al Nilo — accessibile con una breve traversata in motoscafo che sembra essa stessa un viaggio in un'altra epoca. Originariamente costruito su un'isola completamente diversa e smontato blocco per blocco numerato prima di essere riassemblato qui in un notevole intervento di salvataggio del XX secolo, i rilievi scolpiti e le imponenti colonne del tempio sono tra i più bei esempi superstiti dell'arte egizia antica, e la storia di come questo luogo sia sopravvissuto alle acque crescenti del Lago Nasser è quasi affascinante quanto il tempio stesso. Ritorno alla nave per la cena mentre questa si ormeggia al molo di Assuan, con la prima serata libera per rilassarsi sul ponte e godersi il tramonto del deserto sul Nilo, mentre il cielo si tinge di rosa e ambra sopra le sagome di dune lontane.",

        steps: [{
          time: "08:00",
          description: "Ritiro in hotel da parte della guida ad Assuan."
        }, {
          time: "09:00",
          description: "Trasferimento alla nave da crociera sul Nilo e check-in in cabina."
        }, {
          time: "10:00",
          description: "Briefing di benvenuto a cura del direttore di crociera; incontro con la guida e gli altri passeggeri."
        }, {
          time: "13:00",
          description: "Pranzo di benvenuto servito a bordo."
        }, {
          time: "14:30",
          description: "Traversata in motoscafo verso l'isola di File."
        }, {
          time: "15:00",
          description: "Visita guidata al Tempio di Iside a File — esplorate la sala ipostila, la casa della nascita e i rilievi di Iside e Osiride."
        }, {
          time: "17:00",
          description: "Ritorno in motoscafo alla nave da crociera."
        }, {
          time: "19:00",
          description: "Cena a bordo. Serata libera sul ponte."
        }]
      }, {
        day: 2,
        title: "Kom Ombo ed Edfu — Templi degli dèi",
        description: "Svegliatevi presto mentre la nave scioglie gli ormeggi e fa rotta verso nord lungo il Nilo, i motori che ronzano dolcemente sotto di voi mentre la città di Assuan scivola via dietro la scia. La mattinata vi porta a Kom Ombo, dove uno dei templi più singolari d'Egitto si erge su una collina che domina il fiume, la sua arenaria dorata che brilla nella luce del mattino. Il Tempio di Kom Ombo è unico in Egitto — un tempio doppio perfettamente simmetrico dedicato a due divinità: Sobek, il dio coccodrillo della fertilità, una creatura tanto temuta quanto venerata nell'antichità, e Haroeris, la forma più antica di Horus. I suoi corridoi custodiscono alcuni degli strumenti medici più intriganti dell'antico Egitto, scolpiti nella pietra — bisturi, pinze e strumenti chirurgici che lasciano intuire una sofisticazione della medicina antica ancora oggi oggetto di studio. Il Museo dei Coccodrilli, adiacente, espone decine di autentici coccodrilli mummificati dell'antichità, offerte a Sobek conservate con la stessa cura riservata alla famiglia reale. Dopo il pranzo a bordo, la nave prosegue verso Edfu — dimora del magnifico Tempio di Horus, il tempio antico meglio conservato di tutto l'Egitto. Si entra attraverso enormi piloni decorati con scene di battaglia che celebrano i trionfi reali, e il santuario interno custodisce ancora l'antico altare di granito dove un tempo risiedeva la statua di Horus, intatto dal tempo in un modo che rende gli antichi rituali quasi tangibili.",

        steps: [{
          time: "06:00",
          description: "La nave parte da Assuan e naviga verso nord lungo il Nilo."
        }, {
          time: "07:00",
          description: "Colazione servita a bordo mentre i paesaggi del deserto scorrono fuori."
        }, {
          time: "09:00",
          description: "Arrivo a Kom Ombo. Carrozza a cavalli o breve passeggiata verso il tempio."
        }, {
          time: "09:30",
          description: "Visita guidata al Tempio di Kom Ombo — esplorate i santuari gemelli, i rilievi con gli strumenti medici e il Museo dei Coccodrilli."
        }, {
          time: "11:30",
          description: "Ritorno alla nave. Si prosegue la navigazione verso Edfu."
        }, {
          time: "13:00",
          description: "Pranzo servito a bordo."
        }, {
          time: "15:30",
          description: "Arrivo a Edfu. Carrozza a cavalli verso l'ingresso del tempio."
        }, {
          time: "16:00",
          description: "Visita guidata al Tempio di Horus a Edfu — camminate tra gli imponenti piloni, la sala ipostila, la Sala dei Festival e il santuario interno."
        }, {
          time: "18:00",
          description: "Ritorno alla nave in carrozza."
        }, {
          time: "19:30",
          description: "Cena a bordo. Festa opzionale in galabeya egiziana sul ponte."
        }]
      }, {
        day: 3,
        title: "Luxor — Valle dei Re e la Riva Occidentale",
        description: "La nave attracca a Luxor durante la notte, con le sue luci che si riflettono sull'acqua scura accanto a decine di altre imbarcazioni da crociera, e la giornata inizia con una delle esperienze più attese di tutto l'Egitto — una visita alla Valle dei Re, sulla Riva Occidentale del Nilo. Nascosta tra colline aride e sbiancate dal sole, dall'altra parte del fiume rispetto all'antica Tebe, questa necropoli reale custodisce le tombe elaboratamente decorate dei faraoni che governarono l'Egitto oltre tre millenni fa, i cui corridoi scendono in profondità nella roccia verso camere dipinte con soffitti costellati di stelle e processioni di divinità. La vostra guida darà vita alle storie dietro le pareti dipinte, agli incantesimi del Libro dei Morti pensati per guidare l'anima di un faraone attraverso l'oltretomba, e al sorprendente sistema di credenze degli antichi egizi, per i quali la morte non era una fine ma una porta. Nelle vicinanze, il vasto complesso funerario di Deir el-Bahari ospita lo spettacolare Tempio Funerario di Hatshepsut, costruito tra le drammatiche scogliere che dominano la valle in tre slanciate terrazze colonnate — un tributo a una delle sovrane più potenti ed enigmatiche dell'Egitto, una donna che regnò come faraone a pieno titolo e i cui monumenti suscitano ancora stupore, dibattito e ammirazione migliaia di anni dopo.",

        steps: [{
          time: "07:00",
          description: "Colazione a bordo mentre la nave arriva a Luxor."
        }, {
          time: "08:30",
          description: "Sbarco e traversata del Nilo verso la Riva Occidentale."
        }, {
          time: "09:00",
          description: "Arrivo alla Valle dei Re. Visita di tre tombe reali (incluse nel biglietto d'ingresso; la tomba di Tutankhamon ha un costo extra)."
        }, {
          time: "11:00",
          description: "Camminata o trasferimento al Tempio Funerario di Hatshepsut a Deir el-Bahari."
        }, {
          time: "11:30",
          description: "Visita guidata al tempio di Hatshepsut — esplorate le terrazze colonnate, i rilievi dipinti e il sacro santuario interno."
        }, {
          time: "13:00",
          description: "Ritorno alla nave su strada. Pranzo servito a bordo."
        }, {
          time: "15:00",
          description: "Visita opzionale ai Colossi di Memnone (due enormi statue antiche lungo la strada — una breve sosta)."
        }, {
          time: "16:30",
          description: "Ritorno alla nave. Tempo libero per riposare o esplorare il lungo Nilo di Luxor in autonomia."
        }, {
          time: "19:30",
          description: "Ultima cena a bordo."
        }]
      }, {
        day: 4,
        title: "Tempio di Karnak e partenza da Luxor",
        description: "L'ultima mattinata è dedicata al complesso templare più straordinario mai costruito — Karnak. Più una città di templi che un singolo monumento, Karnak fu ampliato generazione dopo generazione di faraoni per quasi 2.000 anni, ciascun sovrano determinato a lasciare un segno più grandioso del precedente, dando origine a un vasto labirinto di piloni, cortili, obelischi e la leggendaria Sala Ipostila — una foresta di 134 imponenti colonne, ciascuna decorata dal pavimento alla cima con intricati ieroglifici e rilievi dipinti che un tempo brillavano di colore sotto il sole egiziano. La vostra guida vi condurrà lungo il Viale delle Sfingi, il Lago Sacro dove i sacerdoti compivano un tempo riti di purificazione, e i santuari interni riservati solo al clero di più alto rango, ricostruendo l'straordinaria evoluzione di uno dei luoghi più sacri del mondo antico — un sito che aveva già più di mille anni quando Cleopatra ne attraversava i cortili. Dopo un ultimo pranzo a bordo, gustato lentamente mentre si fa strada la consapevolezza che questo straordinario viaggio sta per concludersi, sbarcherete e sarete trasferiti al vostro hotel o alla stazione ferroviaria di Luxor, portando con voi quattro giorni di templi, tramonti e storie che risalgono agli albori stessi della storia scritta.",

        steps: [{
          time: "07:00",
          description: "Colazione a bordo."
        }, {
          time: "08:30",
          description: "Sbarco e trasferimento al complesso del Tempio di Karnak, sulla Riva Orientale."
        }, {
          time: "09:00",
          description: "Visita guidata a Karnak — camminate lungo il Viale delle Sfingi ariete, la Grande Sala Ipostila, il Tempio dei Festival di Thutmose III, il Lago Sacro e gli imponenti obelischi di Hatshepsut e Thutmose I."
        }, {
          time: "11:30",
          description: "Ritorno alla nave."
        }, {
          time: "13:00",
          description: "Ultimo pranzo a bordo."
        }, {
          time: "14:30",
          description: "Check-out dalle cabine."
        }, {
          time: "15:00",
          description: "Trasferimento al vostro hotel di Luxor o alla stazione ferroviaria di Luxor. Fine del tour."
        }]
      }],
      fr: [{
        day: 1,
        title: "Arrivée à Assouan et embarquement",
        description: "Votre aventure sur le Nil commence aujourd'hui dans la ville dorée d'Assouan, où des collines de granit s'élèvent du désert et où le fleuve s'étend, large, calme et d'un bleu presque irréel contre le sable. Votre guide vous rejoindra à votre hôtel le matin et vous conduira jusqu'au bateau de croisière, où vous effectuerez l'enregistrement et vous installerez dans votre cabine — votre foyer pour les trois prochaines nuits, et votre fenêtre privée sur un panorama qui se dévoile lentement, fait de rives, de palmeraies et de pierre ancienne. Après un déjeuner de bienvenue à bord, servi alors que le bateau est encore à quai, l'après-midi est consacré à la visite du majestueux temple de Philae, dédié à la déesse Isis et perché sur une île au milieu du Nil — accessible par une courte traversée en bateau à moteur qui semble elle-même un voyage vers une autre époque. Construit à l'origine sur une île entièrement différente puis démonté, bloc numéroté par bloc numéroté, avant d'être réassemblé ici lors d'une remarquable opération de sauvetage au XXe siècle, les reliefs sculptés et les colonnes imposantes du temple comptent parmi les plus beaux exemples survivants de l'art égyptien antique, et l'histoire de la façon dont ce lieu a survécu à la montée des eaux du lac Nasser est presque aussi fascinante que le temple lui-même. Retour au bateau pour le dîner alors qu'il s'amarre au quai d'Assouan, avec la première soirée libre pour se détendre sur le pont et profiter du coucher de soleil du désert sur le Nil, le ciel se teintant de roses et d'ambre au-dessus des silhouettes de dunes lointaines.",

        steps: [{
          time: "08:00",
          description: "Prise en charge à l'hôtel par votre guide à Assouan."
        }, {
          time: "09:00",
          description: "Transfert vers le bateau de croisière sur le Nil et enregistrement dans votre cabine."
        }, {
          time: "10:00",
          description: "Briefing de bienvenue par le directeur de croisière ; rencontre avec votre guide et les autres passagers."
        }, {
          time: "13:00",
          description: "Déjeuner de bienvenue servi à bord."
        }, {
          time: "14:30",
          description: "Traversée en bateau à moteur vers l'île de Philae."
        }, {
          time: "15:00",
          description: "Visite guidée du temple d'Isis à Philae — explorez la salle hypostyle, le mammisi (maison de naissance) et les reliefs d'Isis et d'Osiris."
        }, {
          time: "17:00",
          description: "Retour en bateau à moteur vers le bateau de croisière."
        }, {
          time: "19:00",
          description: "Dîner à bord. Soirée libre sur le pont."
        }]
      }, {
        day: 2,
        title: "Kom Ombo et Edfou — Temples des dieux",
        description: "Réveillez-vous tôt tandis que le bateau largue ses amarres et met le cap au nord le long du Nil, les moteurs ronronnant doucement sous vous alors que la ville d'Assouan s'éloigne dans le sillage. La matinée vous conduit à Kom Ombo, où l'un des temples les plus singuliers d'Égypte se dresse sur une colline surplombant le fleuve, son grès doré rayonnant à la lumière du matin. Le temple de Kom Ombo est unique en Égypte — un double temple parfaitement symétrique dédié à deux dieux : Sobek, le dieu crocodile de la fertilité, une créature à la fois craint et vénérée dans l'Antiquité, et Haroëris, la forme aînée d'Horus. Ses couloirs renferment certains des instruments médicaux les plus intrigants de l'Égypte ancienne, sculptés dans la pierre — scalpels, pinces et outils chirurgicaux qui laissent deviner une sophistication de la médecine antique encore étudiée aujourd'hui. Le musée des crocodiles attenant expose des dizaines d'authentiques crocodiles momifiés de l'Antiquité, des offrandes à Sobek préservées avec autant de soin que la royauté. Après le déjeuner à bord, le bateau poursuit vers Edfou — qui abrite le magnifique temple d'Horus, le temple antique le mieux conservé de toute l'Égypte. On y entre par d'immenses pylônes ornés de scènes de bataille célébrant les triomphes royaux, et le sanctuaire intérieur conserve encore l'ancien autel de granit où résidait jadis la statue d'Horus, intact par le temps d'une manière qui rend les rituels anciens presque palpables.",

        steps: [{
          time: "06:00",
          description: "Le bateau quitte Assouan et navigue vers le nord le long du Nil."
        }, {
          time: "07:00",
          description: "Petit-déjeuner servi à bord tandis que les paysages désertiques défilent."
        }, {
          time: "09:00",
          description: "Arrivée à Kom Ombo. Calèche ou courte marche jusqu'au temple."
        }, {
          time: "09:30",
          description: "Visite guidée du temple de Kom Ombo — explorez les sanctuaires jumeaux, les reliefs représentant des instruments médicaux et le musée des crocodiles."
        }, {
          time: "11:30",
          description: "Retour au bateau. Poursuite de la navigation vers Edfou."
        }, {
          time: "13:00",
          description: "Déjeuner servi à bord."
        }, {
          time: "15:30",
          description: "Arrivée à Edfou. Calèche jusqu'à l'entrée du temple."
        }, {
          time: "16:00",
          description: "Visite guidée du temple d'Horus à Edfou — parcourez les imposants pylônes, la salle hypostyle, la salle des fêtes et le sanctuaire intérieur."
        }, {
          time: "18:00",
          description: "Retour au bateau en calèche."
        }, {
          time: "19:30",
          description: "Dîner à bord. Soirée galabiya égyptienne optionnelle sur le pont."
        }]
      }, {
        day: 3,
        title: "Louxor — Vallée des Rois et rive ouest",
        description: "Le bateau accoste à Louxor pendant la nuit, ses lumières se reflétant sur l'eau sombre à côté de dizaines d'autres bateaux de croisière, et la journée débute avec l'une des expériences les plus attendues de toute l'Égypte — une visite de la Vallée des Rois, sur la rive ouest du Nil. Cachée dans des collines sèches et blanchies par le soleil, en face de l'antique Thèbes, cette nécropole royale renferme les tombes richement décorées de pharaons ayant régné sur l'Égypte il y a plus de trois millénaires, leurs couloirs descendant profondément dans la roche vers des chambres peintes de plafonds étoilés et de processions de divinités. Votre guide fera revivre les histoires derrière les murs peints, les formules du Livre des Morts destinées à guider l'âme d'un pharaon à travers l'au-delà, et l'étonnant système de croyances des anciens Égyptiens, pour qui la mort n'était pas une fin mais une porte. Tout proche, le vaste complexe funéraire de Deir el-Bahari abrite le spectaculaire temple funéraire d'Hatchepsout, construit dans les falaises spectaculaires surplombant la vallée en trois terrasses à colonnades — un hommage à l'une des souveraines les plus puissantes et énigmatiques d'Égypte, une femme qui régna en tant que pharaon à part entière et dont les monuments suscitent encore émerveillement, débat et admiration des milliers d'années plus tard.",

        steps: [{
          time: "07:00",
          description: "Petit-déjeuner à bord à l'arrivée du bateau à Louxor."
        }, {
          time: "08:30",
          description: "Débarquement et traversée du Nil vers la rive ouest."
        }, {
          time: "09:00",
          description: "Arrivée à la Vallée des Rois. Visite de trois tombes royales (incluses dans le billet d'entrée ; la tombe de Toutânkhamon est en supplément)."
        }, {
          time: "11:00",
          description: "Marche ou trajet jusqu'au temple funéraire d'Hatchepsout à Deir el-Bahari."
        }, {
          time: "11:30",
          description: "Visite guidée du temple d'Hatchepsout — explorez les terrasses à colonnades, les reliefs peints et le sanctuaire intérieur sacré."
        }, {
          time: "13:00",
          description: "Retour au bateau par la route. Déjeuner servi à bord."
        }, {
          time: "15:00",
          description: "Visite optionnelle des colosses de Memnon (deux immenses statues antiques au bord de la route — un arrêt rapide)."
        }, {
          time: "16:30",
          description: "Retour au bateau. Temps libre pour se reposer ou explorer la corniche de Louxor en toute indépendance."
        }, {
          time: "19:30",
          description: "Dernier dîner à bord."
        }]
      }, {
        day: 4,
        title: "Temple de Karnak et départ de Louxor",
        description: "Votre dernière matinée est consacrée au plus extraordinaire complexe de temples jamais construit — Karnak. Davantage une ville de temples qu'un monument unique, Karnak a été agrandi génération après génération de pharaons pendant près de 2 000 ans, chaque souverain déterminé à laisser une empreinte plus grandiose que la précédente, donnant naissance à un vaste labyrinthe de pylônes, de cours, d'obélisques et à la légendaire salle hypostyle — une forêt de 134 colonnes imposantes, chacune décorée du sol au sommet d'hiéroglyphes complexes et de reliefs peints qui resplendissaient autrefois de couleurs sous le soleil égyptien. Votre guide vous fera traverser l'allée des sphinx, le lac sacré où les prêtres effectuaient autrefois des rituels de purification, et les sanctuaires intérieurs réservés au clergé le plus haut placé, reconstituant l'extraordinaire évolution de l'un des lieux les plus sacrés du monde antique — un site qui avait déjà plus de mille ans lorsque Cléopâtre en parcourait les cours. Après un dernier déjeuner à bord, savouré lentement tandis que s'installe la prise de conscience que ce remarquable voyage touche à sa fin, vous débarquerez et serez transféré à votre hôtel ou à la gare de Louxor, emportant avec vous quatre jours de temples, de couchers de soleil et d'histoires qui remontent aux tout débuts de l'histoire écrite.",

        steps: [{
          time: "07:00",
          description: "Petit-déjeuner à bord."
        }, {
          time: "08:30",
          description: "Débarquement et transfert vers le complexe du temple de Karnak, sur la rive est."
        }, {
          time: "09:00",
          description: "Visite guidée de Karnak — parcourez l'allée des sphinx à tête de bélier, la grande salle hypostyle, le temple des fêtes de Thoutmôsis III, le lac sacré et les imposants obélisques d'Hatchepsout et de Thoutmôsis I."
        }, {
          time: "11:30",
          description: "Retour au bateau."
        }, {
          time: "13:00",
          description: "Dernier déjeuner à bord."
        }, {
          time: "14:30",
          description: "Départ des cabines."
        }, {
          time: "15:00",
          description: "Transfert vers votre hôtel à Louxor ou vers la gare de Louxor. Fin de l'excursion."
        }]
      }],
      ru: [{
        day: 1,
        title: "Прибытие в Асуан и посадка на судно",
        description: "Ваше путешествие по Нилу начинается сегодня в золотом городе Асуан, где гранитные холмы поднимаются из пустыни, а река течёт широко, спокойно и невероятно синеет на фоне песка. Утром гид встретит вас в отеле и доставит на круизное судно, где вы пройдёте регистрацию и расположитесь в своей каюте — вашем доме на следующие три ночи и личном окне в медленно разворачивающуюся панораму берегов, пальмовых рощ и древнего камня. После приветственного обеда на борту, который подают, пока судно ещё стоит у причала, день посвящён посещению величественного храма Филе, посвящённого богине Исиде и расположенного на острове посреди Нила — добраться до которого можно на коротком моторном катере, само пересечение которого ощущается как переход в другую эпоху. Изначально построенный на совершенно другом острове и разобранный, блок за пронумерованным блоком, прежде чем быть вновь собранным здесь в ходе впечатляющей спасательной операции XX века, резные рельефы и величественные колонны храма входят в число лучших сохранившихся образцов древнеегипетского искусства, а история о том, как это место выжило под наступающими водами озера Насер, почти столь же увлекательна, как и сам храм. Возвращение на судно к ужину, пока оно становится на якорь у причала Асуана, а первый вечер свободен — можно отдохнуть на палубе и насладиться закатом над пустыней и Нилом, когда небо окрашивается в розовые и янтарные оттенки над силуэтами далёких дюн.",

        steps: [{
          time: "08:00",
          description: "Встреча с гидом в отеле в Асуане."
        }, {
          time: "09:00",
          description: "Трансфер на круизное судно по Нилу и регистрация в каюте."
        }, {
          time: "10:00",
          description: "Приветственный инструктаж от директора круиза; знакомство с гидом и другими пассажирами."
        }, {
          time: "13:00",
          description: "Приветственный обед на борту."
        }, {
          time: "14:30",
          description: "Поездка на моторном катере на остров Филе."
        }, {
          time: "15:00",
          description: "Экскурсия с гидом по храму Исиды в Филе — гипостильный зал, дом рождения и рельефы Исиды и Осириса."
        }, {
          time: "17:00",
          description: "Возвращение на моторном катере на круизное судно."
        }, {
          time: "19:00",
          description: "Ужин на борту. Свободный вечер на палубе."
        }]
      }, {
        day: 2,
        title: "Ком-Омбо и Эдфу — храмы богов",
        description: "Проснитесь рано утром, когда судно отдаёт швартовы и направляется на север вдоль Нила, а моторы тихо гудят под вами, пока город Асуан исчезает за кормой. Утро приведёт вас в Ком-Омбо, где один из самых необычных храмов Египта стоит на холме над рекой, а его золотистый песчаник сияет в утреннем свете. Храм Ком-Омбо уникален для Египта — это идеально симметричный двойной храм, посвящённый двум богам: Себеку, богу-крокодилу плодородия, существу, которое в древности одновременно боялись и почитали, и Хароерису, древней форме Хора. В его коридорах хранятся самые любопытные медицинские инструменты Древнего Египта, вырезанные на камне — скальпели, щипцы и хирургические инструменты, намекающие на уровень развития древней медицины, который до сих пор изучается. Соседний Музей крокодилов демонстрирует десятки настоящих мумифицированных крокодилов древности — приношений Себеку, сохранённых с той же заботой, что и царские особы. После обеда на борту судно продолжает путь в Эдфу — где находится величественный храм Хора, лучше всего сохранившийся древний храм во всём Египте. Вход в него ведёт через огромные пилоны, украшенные сценами битв, воспевающими царские триумфы, а внутреннее святилище до сих пор хранит древний гранитный алтарь, где когда-то находилась статуя Хора, нетронутую временем настолько, что древние ритуалы кажутся почти осязаемыми.",

        steps: [{
          time: "06:00",
          description: "Судно отправляется из Асуана и плывёт на север по Нилу."
        }, {
          time: "07:00",
          description: "Завтрак на борту, пока за бортом проплывают пустынные пейзажи."
        }, {
          time: "09:00",
          description: "Прибытие в Ком-Омбо. Поездка в конной повозке или короткая прогулка до храма."
        }, {
          time: "09:30",
          description: "Экскурсия с гидом по храму Ком-Омбо — парные святилища, рельефы с медицинскими инструментами и Музей крокодилов."
        }, {
          time: "11:30",
          description: "Возвращение на судно. Продолжение плавания в направлении Эдфу."
        }, {
          time: "13:00",
          description: "Обед на борту."
        }, {
          time: "15:30",
          description: "Прибытие в Эдфу. Поездка в конной повозке до входа в храм."
        }, {
          time: "16:00",
          description: "Экскурсия с гидом по храму Хора в Эдфу — величественные пилоны, гипостильный зал, праздничный зал и внутреннее святилище."
        }, {
          time: "18:00",
          description: "Возвращение на судно в конной повозке."
        }, {
          time: "19:30",
          description: "Ужин на борту. Дополнительно — вечеринка в египетских галабиях на палубе."
        }]
      }, {
        day: 3,
        title: "Луксор — Долина царей и Западный берег",
        description: "Судно встаёт на ночную стоянку в Луксоре, его огни отражаются в тёмной воде рядом с десятками других круизных судов, и день начинается с одного из самых ожидаемых впечатлений во всём Египте — посещения Долины царей на Западном берегу Нила. Скрытая в сухих, выжженных солнцем холмах на другом берегу реки от древних Фив, эта царская усыпальница хранит изысканно украшенные гробницы фараонов, правивших Египтом более трёх тысячелетий назад, чьи коридоры уходят глубоко в скалу к камерам, расписанным звёздными потолками и шествиями богов. Ваш гид оживит истории, скрытые за расписными стенами, заклинания «Книги мёртвых», призванные провести душу фараона через загробный мир, и удивительную систему верований древних египтян, для которых смерть была не концом, а порогом. Рядом расположен огромный погребальный комплекс Дейр-эль-Бахри, где находится впечатляющий храм царицы Хатшепсут, встроенный в драматичные скалы, возвышающиеся над долиной, в виде трёх устремлённых вверх террас с колоннадами — памятник одной из самых могущественных и загадочных правительниц Египта, женщины, правившей как полноправный фараон, чьи памятники до сих пор вызывают удивление, споры и восхищение спустя тысячи лет.",

        steps: [{
          time: "07:00",
          description: "Завтрак на борту во время прибытия судна в Луксор."
        }, {
          time: "08:30",
          description: "Высадка и переправа через Нил на Западный берег."
        }, {
          time: "09:00",
          description: "Прибытие в Долину царей. Посещение трёх царских гробниц (входит в стоимость билета; гробница Тутанхамона — за дополнительную плату)."
        }, {
          time: "11:00",
          description: "Прогулка или поездка к храму царицы Хатшепсут в Дейр-эль-Бахри."
        }, {
          time: "11:30",
          description: "Экскурсия с гидом по храму Хатшепсут — террасы с колоннадами, расписные рельефы и священное внутреннее святилище."
        }, {
          time: "13:00",
          description: "Возвращение на судно по дороге. Обед на борту."
        }, {
          time: "15:00",
          description: "Дополнительное посещение колоссов Мемнона (две огромные древние статуи у дороги — короткая остановка)."
        }, {
          time: "16:30",
          description: "Возвращение на судно. Свободное время для отдыха или самостоятельной прогулки по набережной Луксора."
        }, {
          time: "19:30",
          description: "Последний ужин на борту."
        }]
      }, {
        day: 4,
        title: "Карнакский храм и отъезд из Луксора",
        description: "Ваше последнее утро посвящено самому грандиозному храмовому комплексу из когда-либо построенных — Карнаку. Это скорее город храмов, чем единый памятник: Карнак достраивался поколение за поколением фараонов на протяжении почти 2000 лет, и каждый правитель стремился оставить след более грандиозный, чем предыдущий, в результате чего возник огромный лабиринт пилонов, дворов, обелисков и легендарный гипостильный зал — лес из 134 величественных колонн, каждая из которых от пола до самого верха покрыта замысловатыми иероглифами и расписными рельефами, которые когда-то пылали красками под египетским солнцем. Ваш гид проведёт вас по аллее сфинксов, священному озеру, где когда-то жрецы совершали ритуальные очищения, и внутренним святилищам, доступным только высшему духовенству, восстанавливая удивительную историю развития одного из самых священных мест древнего мира — места, которому было уже более тысячи лет, когда по его дворам ходила Клеопатра. После последнего обеда на борту, который вы будете медленно смаковать, осознавая, что это удивительное путешествие подходит к концу, вы сойдёте с судна и будете доставлены в свой отель или на железнодорожную станцию Луксора, забрав с собой четыре дня храмов, закатов и историй, восходящих к самому началу письменной истории.",

        steps: [{
          time: "07:00",
          description: "Завтрак на борту."
        }, {
          time: "08:30",
          description: "Высадка и трансфер к комплексу Карнакского храма на Восточном берегу."
        }, {
          time: "09:00",
          description: "Экскурсия с гидом по Карнаку — аллея сфинксов с головами баранов, Большой гипостильный зал, праздничный храм Тутмоса III, священное озеро и величественные обелиски Хатшепсут и Тутмоса I."
        }, {
          time: "11:30",
          description: "Возвращение на судно."
        }, {
          time: "13:00",
          description: "Последний обед на борту."
        }, {
          time: "14:30",
          description: "Освобождение кают."
        }, {
          time: "15:00",
          description: "Трансфер в ваш отель в Луксоре или на железнодорожную станцию Луксора. Окончание тура."
        }]
      }],
      de: [{
        day: 1,
        title: "Ankunft in Assuan & Einschiffung",
        description: "Ihr Nilabenteuer beginnt heute in der goldenen Stadt Assuan, wo sich Granithügel aus der Wüste erheben und der Fluss breit, ruhig und in einem fast unwirklichen Blau gegen den Sand fließt. Ihr Reiseleiter trifft Sie morgens in Ihrem Hotel und bringt Sie zum Kreuzfahrtschiff, wo Sie einchecken und sich in Ihrer Kabine einrichten — Ihrem Zuhause für die nächsten drei Nächte und Ihrem privaten Fenster zu einem sich langsam entfaltenden Panorama aus Flussufern, Palmenhainen und uraltem Gestein. Nach einem Begrüßungsmittagessen an Bord, das serviert wird, während das Schiff noch am Anleger liegt, widmet sich der Nachmittag dem Besuch des majestätischen Tempels von Philae, der der Göttin Isis gewidmet ist und auf einer Insel mitten im Nil liegt — erreichbar mit einer kurzen Motorbootfahrt, die sich selbst wie eine Reise in eine andere Epoche anfühlt. Ursprünglich auf einer völlig anderen Insel errichtet und Block für nummerierten Block abgebaut, bevor er hier im Rahmen einer bemerkenswerten Rettungsaktion des 20. Jahrhunderts wieder zusammengesetzt wurde, gehören die geschnitzten Reliefs und die hoch aufragenden Säulen des Tempels zu den schönsten erhaltenen Beispielen altägyptischer Kunst, und die Geschichte, wie dieser Ort die steigenden Wasser des Nassersees überstanden hat, ist fast so faszinierend wie der Tempel selbst. Rückkehr zum Schiff zum Abendessen, während es am Kai von Assuan anlegt, mit dem ersten freien Abend, um auf dem Deck zu entspannen und den Wüstensonnenuntergang über dem Nil zu genießen, während sich der Himmel über den Silhouetten ferner Dünen in Rosé- und Bernsteintöne verfärbt.",

        steps: [{
          time: "08:00",
          description: "Abholung vom Hotel durch Ihren Reiseleiter in Assuan."
        }, {
          time: "09:00",
          description: "Transfer zum Nilkreuzfahrtschiff und Check-in in Ihrer Kabine."
        }, {
          time: "10:00",
          description: "Begrüßungsbriefing durch den Kreuzfahrtdirektor; Treffen mit Ihrem Reiseleiter und den anderen Passagieren."
        }, {
          time: "13:00",
          description: "Begrüßungsmittagessen an Bord."
        }, {
          time: "14:30",
          description: "Motorbootfahrt zur Insel Philae."
        }, {
          time: "15:00",
          description: "Geführte Tour durch den Isis-Tempel auf Philae — erkunden Sie den Säulensaal, das Geburtshaus und die Reliefs von Isis und Osiris."
        }, {
          time: "17:00",
          description: "Rückfahrt mit dem Motorboot zum Kreuzfahrtschiff."
        }, {
          time: "19:00",
          description: "Abendessen an Bord. Freier Abend auf dem Deck."
        }]
      }, {
        day: 2,
        title: "Kom Ombo & Edfu — Tempel der Götter",
        description: "Wachen Sie früh auf, während das Schiff die Leinen löst und nordwärts den Nil hinauf in See sticht, die Motoren summen sanft unter Ihnen, während die Stadt Assuan im Kielwasser verschwindet. Der Morgen bringt Sie nach Kom Ombo, wo einer der ungewöhnlichsten Tempel Ägyptens auf einem Hügel mit Blick auf den Fluss steht, sein goldener Sandstein glüht im Morgenlicht. Der Tempel von Kom Ombo ist einzigartig in Ägypten — ein perfekt symmetrischer Doppeltempel, der zwei Göttern gewidmet ist: Sobek, dem Krokodilgott der Fruchtbarkeit, einem Wesen, das in der Antike gleichermaßen gefürchtet wie verehrt wurde, und Haroeris, der älteren Form des Horus. Seine Gänge bewahren einige der faszinierendsten medizinischen Instrumente des alten Ägypten, in Stein gemeißelt — Skalpelle, Pinzetten und chirurgische Werkzeuge, die auf eine Raffinesse der antiken Medizin hindeuten, die bis heute erforscht wird. Das angrenzende Krokodilmuseum zeigt Dutzende echter mumifizierter Krokodile aus der Antike, Opfergaben an Sobek, die mit der gleichen Sorgfalt konserviert wurden wie königliche Personen. Nach dem Mittagessen an Bord fährt das Schiff weiter nach Edfu — der Heimat des prächtigen Horus-Tempels, des am besten erhaltenen antiken Tempels in ganz Ägypten. Der Zugang erfolgt durch riesige Pylontore, geschmückt mit Schlachtszenen, die königliche Triumphe feiern, und das innere Heiligtum bewahrt noch immer den antiken Granitschrein, in dem einst die Statue des Horus stand, unberührt von der Zeit auf eine Weise, die die alten Rituale fast greifbar erscheinen lässt.",

        steps: [{
          time: "06:00",
          description: "Das Schiff verlässt Assuan und fährt nordwärts den Nil hinauf."
        }, {
          time: "07:00",
          description: "Frühstück an Bord, während die Wüstenlandschaften vorbeiziehen."
        }, {
          time: "09:00",
          description: "Ankunft in Kom Ombo. Pferdekutsche oder kurzer Spaziergang zum Tempel."
        }, {
          time: "09:30",
          description: "Geführte Tour durch den Tempel von Kom Ombo — erkunden Sie die Zwillingsheiligtümer, die Reliefs mit medizinischen Instrumenten und das Krokodilmuseum."
        }, {
          time: "11:30",
          description: "Rückkehr zum Schiff. Weiterfahrt nach Edfu."
        }, {
          time: "13:00",
          description: "Mittagessen an Bord."
        }, {
          time: "15:30",
          description: "Ankunft in Edfu. Pferdekutsche zum Tempeleingang."
        }, {
          time: "16:00",
          description: "Geführte Tour durch den Horus-Tempel in Edfu — gehen Sie durch die hoch aufragenden Pylone, den Säulensaal, die Festhalle und das innere Heiligtum."
        }, {
          time: "18:00",
          description: "Rückkehr zum Schiff mit der Kutsche."
        }, {
          time: "19:30",
          description: "Abendessen an Bord. Optionale ägyptische Galabiya-Party auf dem Deck."
        }]
      }, {
        day: 3,
        title: "Luxor — Tal der Könige & das Westufer",
        description: "Das Schiff legt über Nacht in Luxor an, seine Lichter spiegeln sich im dunklen Wasser neben Dutzenden anderer Kreuzfahrtschiffe, und der Tag beginnt mit einem der meist erwarteten Erlebnisse in ganz Ägypten — einem Besuch des Tals der Könige am Westufer des Nils. Verborgen in trockenen, sonnengebleichten Hügeln gegenüber dem alten Theben, bewahrt diese königliche Begräbnisstätte die kunstvoll verzierten Gräber von Pharaonen, die Ägypten vor mehr als drei Jahrtausenden regierten, deren Gänge tief in den Fels hinabführen zu Kammern mit sternenübersäten Decken und Götterprozessionen. Ihr Reiseleiter wird die Geschichten hinter den bemalten Wänden zum Leben erwecken, die Sprüche aus dem Totenbuch, die die Seele eines Pharaos durch die Unterwelt führen sollten, und das erstaunliche Glaubenssystem der alten Ägypter, für die der Tod kein Ende, sondern eine Tür war. In der Nähe befindet sich der weitläufige Totenkomplex von Deir el-Bahari mit dem spektakulären Totentempel der Hatschepsut, erbaut in den dramatischen Klippen mit Blick auf das Tal, mit drei aufstrebenden Säulenterrassen — eine Hommage an eine der mächtigsten und rätselhaftesten Herrscherinnen Ägyptens, eine Frau, die als rechtmäßiger Pharao regierte und deren Monumente noch Tausende von Jahren später Staunen, Diskussionen und Bewunderung hervorrufen.",

        steps: [{
          time: "07:00",
          description: "Frühstück an Bord bei der Ankunft des Schiffes in Luxor."
        }, {
          time: "08:30",
          description: "Von Bord gehen und Überfahrt über den Nil zum Westufer."
        }, {
          time: "09:00",
          description: "Ankunft im Tal der Könige. Besichtigung von drei königlichen Gräbern (im Eintrittspreis enthalten; das Grab von Tutanchamun kostet einen Aufpreis)."
        }, {
          time: "11:00",
          description: "Spaziergang oder Fahrt zum Totentempel der Hatschepsut in Deir el-Bahari."
        }, {
          time: "11:30",
          description: "Geführte Tour durch den Tempel der Hatschepsut — erkunden Sie die Säulenterrassen, die bemalten Reliefs und das heilige innere Sanktuarium."
        }, {
          time: "13:00",
          description: "Rückkehr zum Schiff über die Straße. Mittagessen an Bord."
        }, {
          time: "15:00",
          description: "Optionaler Besuch der Memnonkolosse (zwei riesige antike Statuen am Straßenrand — ein kurzer Stopp)."
        }, {
          time: "16:30",
          description: "Rückkehr zum Schiff. Freizeit zum Entspannen oder um die Promenade von Luxor selbstständig zu erkunden."
        }, {
          time: "19:30",
          description: "Letztes Abendessen an Bord."
        }]
      }, {
        day: 4,
        title: "Karnak-Tempel & Abreise aus Luxor",
        description: "Ihr letzter Morgen ist dem außergewöhnlichsten je errichteten Tempelkomplex gewidmet — Karnak. Eher eine Stadt aus Tempeln als ein einzelnes Monument, wurde Karnak über fast 2.000 Jahre hinweg von Generation zu Generation von Pharaonen erweitert, wobei jeder Herrscher entschlossen war, ein noch grandioseres Zeichen zu hinterlassen als der vorherige — das Ergebnis ist ein riesiges Labyrinth aus Pylonen, Höfen, Obelisken und der legendären Säulenhalle (Hypostyl) — ein Wald aus 134 hoch aufragenden Säulen, jede vom Boden bis zur Spitze mit kunstvollen Hieroglyphen und bemalten Reliefs verziert, die einst unter der ägyptischen Sonne in leuchtenden Farben erstrahlten. Ihr Reiseleiter führt Sie durch die Sphinxallee, den Heiligen See, an dem Priester einst rituelle Reinigungen vornahmen, und die inneren Heiligtümer, die nur dem höchstrangigen Klerus vorbehalten waren, und setzt die außergewöhnliche Entwicklung eines der heiligsten Orte der antiken Welt zu einem Gesamtbild zusammen — eine Stätte, die bereits über tausend Jahre alt war, als Kleopatra durch ihre Höfe schritt. Nach einem letzten Mittagessen an Bord, das Sie langsam genießen, während sich die Erkenntnis einstellt, dass diese bemerkenswerte Reise sich dem Ende zuneigt, gehen Sie von Bord und werden zu Ihrem Hotel oder zum Bahnhof von Luxor gebracht — im Gepäck vier Tage voller Tempel, Sonnenuntergänge und Geschichten, die bis an den Anfang der schriftlich überlieferten Geschichte zurückreichen.",

        steps: [{
          time: "07:00",
          description: "Frühstück an Bord."
        }, {
          time: "08:30",
          description: "Von Bord gehen und Transfer zum Karnak-Tempelkomplex am Ostufer."
        }, {
          time: "09:00",
          description: "Geführte Tour durch Karnak — gehen Sie durch die Allee der widderköpfigen Sphingen, die Große Säulenhalle, den Festtempel von Thutmosis III., den Heiligen See und die hoch aufragenden Obelisken von Hatschepsut und Thutmosis I."
        }, {
          time: "11:30",
          description: "Rückkehr zum Schiff."
        }, {
          time: "13:00",
          description: "Letztes Mittagessen an Bord."
        }, {
          time: "14:30",
          description: "Auschecken aus den Kabinen."
        }, {
          time: "15:00",
          description: "Transfer zu Ihrem Hotel in Luxor oder zum Bahnhof von Luxor. Ende der Tour."
        }]
      }]
    },
  },
  {
    title: "Aswan Dam, Philae Temple & The Unfinished Obelisk Tour",
    slug: "aswan-dam-philae-temple-unfinished-obelisk",
    description:
      "Discover the remarkable layers of Aswan's history on this guided tour covering three of the city's most iconic landmarks, each one revealing a different chapter of the human story written into this stretch of the Nile — engineering ambition, unfinished ancient industry, and devotion to the gods, all within a single, unhurried morning. Begin at the legendary Aswan High Dam, one of the greatest engineering achievements of the modern era and a structure so vast it fundamentally altered the geography, economy, and politics of an entire nation. Then visit the Unfinished Obelisk, still lying in its ancient granite quarry exactly where ancient workers abandoned it more than 3,500 years ago, frozen mid-creation in a way that lays bare the very techniques the pharaohs' stonemasons used to carve and polish solid rock. This single piece of stone, had it been completed, would have been the largest obelisk ever carved — a monument to ambition that never quite made it off the ground. Finally, take a short boat ride to the island of Philae to explore the beautiful Temple of Isis, one of Egypt's most photogenic and well-preserved ancient sanctuaries, rescued from the rising waters of Lake Nasser in one of the great archaeological operations of the 20th century and reassembled here, stone by stone, exactly as it once stood.",
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
      es: "El lobby de su hotel en Asuán. El guía lo recogerá y lo llevará directamente a la primera parada.",
      pt: "O lobby do seu hotel em Assuão. O guia irá buscá-lo e levá-lo diretamente à primeira parada.",
      it: "La hall del vostro hotel ad Assuan. La guida vi verrà a prendere e vi porterà direttamente alla prima tappa.",
      fr: "Le hall de votre hôtel à Assouan. Le guide viendra vous chercher et vous emmènera directement au premier arrêt.",
      ru: "Лобби вашего отеля в Асуане. Гид встретит вас и отвезёт прямо к первой остановке.",
      de: "Die Lobby Ihres Hotels in Assuan. Der Reiseleiter holt Sie ab und bringt Sie direkt zum ersten Stopp."
    },
    accessibility: {
      en: "The Unfinished Obelisk site involves walking on uneven ground. Philae Temple is accessible by boat and has steps. Not suitable for wheelchairs.",
      es: "El sitio del Obelisco Inacabado implica caminar sobre terreno irregular. El Templo de Filé es accesible en barco y tiene escalones. No es adecuado para sillas de ruedas.",
      pt: "O local do Obelisco Inacabado envolve caminhar em terreno irregular. O Templo de File é acessível por barco e tem escadas. Não é adequado para cadeiras de rodas.",
      it: "Il sito dell'Obelisco Incompiuto prevede di camminare su terreno irregolare. Il Tempio di File è accessibile in barca e presenta dei gradini. Non adatto alle sedie a rotelle.",
      fr: "Le site de l'Obélisque inachevé implique de marcher sur un terrain irrégulier. Le temple de Philae est accessible en bateau et comporte des marches. Ne convient pas aux fauteuils roulants.",
      ru: "Посещение Недостроенного обелиска предполагает ходьбу по неровной местности. Храм Филе доступен на лодке, есть ступени. Не подходит для инвалидных колясок.",
      de: "Der unvollendete Obelisk erfordert das Gehen auf unebenem Gelände. Der Philae-Tempel ist mit dem Boot erreichbar und hat Stufen. Nicht geeignet für Rollstuhlfahrer."
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun hat and sunscreen", "Water bottle", "Camera", "Light jacket for the boat ride"],
      es: [
        "Zapatos cómodos para caminar",
        "Sombrero y protector solar",
        "Botella de agua",
        "Cámara",
        "Chaqueta ligera para el paseo en barco"
      ],
      pt: [
        "Sapatos confortáveis para caminhar",
        "Chapéu e protetor solar",
        "Garrafa de água",
        "Câmera fotográfica",
        "Jaqueta leve para o passeio de barco"
      ],
      it: [
        "Scarpe comode da camminata",
        "Cappello e crema solare",
        "Bottiglia d'acqua",
        "Macchina fotografica",
        "Giacca leggera per il giro in barca"
      ],
      fr: [
        "Chaussures de marche confortables",
        "Chapeau et crème solaire",
        "Bouteille d'eau",
        "Appareil photo",
        "Veste légère pour la traversée en bateau"
      ],
      ru: [
        "Удобная обувь для ходьбы",
        "Шляпа от солнца и солнцезащитный крем",
        "Бутылка воды",
        "Фотоаппарат",
        "Лёгкая куртка для поездки на лодке"
      ],
      de: [
        "Bequeme Wanderschuhe",
        "Sonnenhut und Sonnenschutz",
        "Wasserflasche",
        "Kamera",
        "Leichte Jacke für die Bootsfahrt"
      ]
    },
    importantInfo: {
      en: [
        "Hotel pickup is included within central Aswan. Hotels outside the city center may incur an extra fee.",
        "The boat to Philae Island is shared with other visitors; a private boat can be arranged at extra cost.",
        "Entrance fees to all three sites are included in the tour price.",
        "Wear comfortable, breathable clothing — temperatures in Aswan regularly exceed 35°C.",
      ],
      es: [
        "La recogida en el hotel está incluida dentro del centro de Asuán. Los hoteles fuera del centro de la ciudad pueden tener un cargo adicional.",
        "El barco a la isla de Filé se comparte con otros visitantes; se puede organizar un barco privado con costo adicional.",
        "Las entradas a los tres sitios están incluidas en el precio del tour.",
        "Use ropa cómoda y transpirable: las temperaturas en Asuán superan regularmente los 35 °C."
      ],
      pt: [
        "A busca no hotel está incluída dentro do centro de Assuão. Hotéis fora do centro da cidade podem ter uma taxa extra.",
        "O barco para a Ilha de File é compartilhado com outros visitantes; um barco privado pode ser organizado por um custo adicional.",
        "As taxas de entrada para os três locais estão incluídas no preço do tour.",
        "Use roupas confortáveis e respiráveis — as temperaturas em Assuão regularmente superam os 35 °C."
      ],
      it: [
        "Il ritiro in hotel è incluso all'interno del centro di Assuan. Gli hotel fuori dal centro città potrebbero comportare un costo extra.",
        "La barca per l'isola di File è condivisa con altri visitatori; è possibile organizzare una barca privata a costo aggiuntivo.",
        "I biglietti d'ingresso a tutti i tre siti sono inclusi nel prezzo del tour.",
        "Indossate abiti comodi e traspiranti — le temperature ad Assuan superano regolarmente i 35 °C."
      ],
      fr: [
        "La prise en charge à l'hôtel est incluse dans le centre d'Assouan. Les hôtels situés hors du centre-ville peuvent entraîner un supplément.",
        "Le bateau pour l'île de Philae est partagé avec d'autres visiteurs ; un bateau privé peut être organisé contre un supplément.",
        "Les frais d'entrée pour les trois sites sont inclus dans le prix de l'excursion.",
        "Portez des vêtements confortables et respirants — les températures à Assouan dépassent régulièrement les 35 °C."
      ],
      ru: [
        "Трансфер из отеля включён в пределах центра Асуана. Для отелей за пределами центра города может взиматься дополнительная плата.",
        "Лодка до острова Филе используется совместно с другими посетителями; за дополнительную плату можно организовать частную лодку.",
        "Стоимость входных билетов на все три объекта включена в цену тура.",
        "Надевайте удобную, дышащую одежду — температура в Асуане регулярно превышает 35 °C."
      ],
      de: [
        "Die Hotelabholung ist innerhalb des Zentrums von Assuan inbegriffen. Für Hotels außerhalb des Stadtzentrums kann eine zusätzliche Gebühr anfallen.",
        "Das Boot zur Insel Philae wird mit anderen Besuchern geteilt; ein privates Boot kann gegen Aufpreis organisiert werden.",
        "Die Eintrittsgebühren für alle drei Sehenswürdigkeiten sind im Tourpreis enthalten.",
        "Tragen Sie bequeme, atmungsaktive Kleidung — die Temperaturen in Assuan überschreiten regelmäßig 35 °C."
      ]
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
            "This half-day tour is one of the most rewarding ways to spend a morning in Aswan, packing in three entirely different layers of history into five focused hours — from 20th-century engineering to 3,500-year-old stoneworking to a temple devoted to one of the most beloved goddesses of the ancient world. You begin at the southern edge of the city with a visit to the Aswan High Dam — a colossal feat of 20th-century engineering that transformed Egypt's relationship with the Nile forever, taming a river whose annual floods had governed the rhythm of Egyptian life since before written history began. Standing on the dam, with the vast expanse of Lake Nasser stretching behind you toward the horizon and the rushing waters of the Nile churning below, the scale of this achievement becomes viscerally real in a way that photographs simply cannot convey. Your guide will explain the dam's construction during the Nasser era, its political significance as a symbol of post-colonial independence, and its dramatic impact on both Egypt's modern economy and the ancient Nubian monuments that had to be relocated — entire temples lifted, cut apart, and moved to higher ground — before the waters rose and swallowed the valley below. From there, you head to one of Aswan's most unexpectedly fascinating sites: the ancient granite quarries where the Unfinished Obelisk lies exactly where it was abandoned, a deep crack running through the stone where the ancient masons' chisels suddenly stopped. Had it been completed and erected, this single piece of stone — still attached to the bedrock from which it was being carved — would have been the largest obelisk in the ancient world, taller even than the famous obelisks that now stand in Luxor, Paris, and Rome. The final stop is Philae Island, reached by a short motorboat crossing across waters that shimmer turquoise in the desert sun, where the Temple of Isis stands in extraordinary beauty against the backdrop of the Nile. Originally located on a different island entirely, the entire temple was dismantled block by block and reassembled here during the 1970s UNESCO rescue operation to save it from the rising waters of Lake Nasser — a feat of preservation almost as impressive as the temple's original construction.",
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
      es: [{
        day: 1,
        title: "Los iconos de Asuán: la presa, el obelisco y el templo de la isla",
        description: "Este tour de medio día es una de las maneras más gratificantes de pasar una mañana en Asuán, condensando tres capas de historia completamente diferentes en cinco horas concentradas, desde la ingeniería del siglo XX hasta el trabajo en piedra de hace 3,500 años y un templo dedicado a una de las diosas más queridas del mundo antiguo. Comienza en el extremo sur de la ciudad con una visita a la Presa Alta de Asuán, una hazaña colosal de la ingeniería del siglo XX que transformó para siempre la relación de Egipto con el Nilo, domesticando un río cuyas inundaciones anuales habían regido el ritmo de la vida egipcia desde antes de que comenzara la historia escrita. De pie sobre la presa, con la vasta extensión del lago Nasser extendiéndose detrás de usted hacia el horizonte y las aguas torrenciales del Nilo agitándose abajo, la escala de este logro se vuelve visceralmente real de una manera que las fotografías simplemente no pueden transmitir. Su guía le explicará la construcción de la presa durante la era de Nasser, su significado político como símbolo de la independencia poscolonial, y su impacto dramático tanto en la economía moderna de Egipto como en los antiguos monumentos nubios que tuvieron que ser trasladados, templos enteros levantados, cortados y movidos a terrenos más altos, antes de que las aguas subieran y engulleran el valle de abajo. Desde allí, se dirige a uno de los lugares más inesperadamente fascinantes de Asuán: las antiguas canteras de granito donde el Obelisco Inacabado reposa exactamente donde fue abandonado, con una profunda grieta atravesando la piedra en el punto donde los cinceles de los antiguos canteros se detuvieron de repente. De haberse completado y erigido, esta única pieza de piedra, todavía unida al lecho de roca del que estaba siendo extraída, habría sido el obelisco más grande del mundo antiguo, más alto incluso que los famosos obeliscos que hoy se alzan en Luxor, París y Roma. La última parada es la isla de Filé, a la que se llega tras un breve cruce en lancha por aguas que brillan en turquesa bajo el sol del desierto, donde el Templo de Isis se alza con extraordinaria belleza contra el telón de fondo del Nilo. Ubicado originalmente en una isla completamente diferente, todo el templo fue desmontado bloque por bloque y reensamblado aquí durante la operación de rescate de la UNESCO en la década de 1970 para salvarlo de las aguas crecientes del lago Nasser, una hazaña de preservación casi tan impresionante como la construcción original del templo.",

        steps: [{
          time: "08:00",
          description: "Recogida en el hotel desde su alojamiento en Asuán."
        }, {
          time: "08:30",
          description: "Llegada a la Presa Alta de Asuán. Su guía explica la historia de la presa, su construcción y cómo transformó la relación de Egipto con el Nilo. Camine por la presa con vistas al lago Nasser por un lado y al Nilo torrencial abajo."
        }, {
          time: "09:30",
          description: "Traslado a las antiguas canteras de granito al sur de Asuán."
        }, {
          time: "10:00",
          description: "Visita al Obelisco Inacabado: párese junto a este gigante de 42 metros todavía incrustado en el lecho de roca. Su guía explica por qué fue abandonado (apareció una grieta durante la talla) y lo que revela sobre las técnicas antiguas egipcias de extracción y construcción."
        }, {
          time: "11:00",
          description: "Traslado al muelle de la isla de Filé."
        }, {
          time: "11:15",
          description: "Breve cruce en lancha hasta la isla de Filé."
        }, {
          time: "11:30",
          description: "Visita guiada al Templo de Isis: explore las grandes puertas con pilonos, el patio delantero con columnas, la casa del nacimiento (Mammisi), la sala hipóstila y el santuario interior. Su guía da vida a la leyenda de Isis, Osiris y Horus que inspiró la creación de este templo."
        }, {
          time: "13:00",
          description: "Regreso en lancha al muelle. Traslado a su hotel. Fin del tour."
        }]
      }],
      pt: [{
        day: 1,
        title: "Ícones de Assuão — Barragem, Obelisco e Templo da Ilha",
        description: "Este tour de meio dia é uma das formas mais gratificantes de passar uma manhã em Assuão, reunindo três camadas completamente diferentes de história em cinco horas concentradas — da engenharia do século XX ao trabalho em pedra de 3.500 anos até um templo dedicado a uma das deusas mais amadas do mundo antigo. Você começa na borda sul da cidade com uma visita à Grande Barragem de Assuão — um feito colossal da engenharia do século XX que transformou para sempre a relação do Egito com o Nilo, domando um rio cujas inundações anuais governavam o ritmo da vida egípcia desde antes do início da história escrita. Em pé sobre a barragem, com a vasta extensão do Lago Nasser se estendendo atrás de você em direção ao horizonte e as águas turbulentas do Nilo agitando-se abaixo, a escala dessa realização se torna visceralmente real de uma forma que as fotografias simplesmente não conseguem transmitir. Seu guia explicará a construção da barragem durante a era Nasser, seu significado político como símbolo da independência pós-colonial, e seu impacto dramático tanto na economia moderna do Egito quanto nos antigos monumentos núbios que tiveram que ser realocados — templos inteiros foram levantados, cortados e movidos para terrenos mais altos — antes que as águas subissem e engolissem o vale abaixo. A partir daí, você se dirige a um dos locais mais inesperadamente fascinantes de Assuão: as antigas pedreiras de granito onde o Obelisco Inacabado repousa exatamente onde foi abandonado, com uma rachadura profunda atravessando a pedra no ponto onde os cinzéis dos antigos pedreiros pararam repentinamente. Se tivesse sido concluído e erguido, esse único bloco de pedra — ainda fixado ao leito de rocha do qual estava sendo esculpido — teria sido o maior obelisco do mundo antigo, mais alto até do que os famosos obeliscos que hoje estão em Luxor, Paris e Roma. A última parada é a Ilha de File, alcançada por uma breve travessia de barco a motor por águas que brilham em turquesa sob o sol do deserto, onde o Templo de Ísis se ergue com extraordinária beleza diante do cenário do Nilo. Originalmente localizado em uma ilha completamente diferente, o templo inteiro foi desmontado bloco por bloco e remontado aqui durante a operação de resgate da UNESCO na década de 1970 para salvá-lo das águas crescentes do Lago Nasser — uma proeza de preservação quase tão impressionante quanto a construção original do templo.",

        steps: [{
          time: "08:00",
          description: "Busca no hotel a partir da sua acomodação em Assuão."
        }, {
          time: "08:30",
          description: "Chegada à Grande Barragem de Assuão. Seu guia explica a história da barragem, sua construção e como ela transformou a relação do Egito com o Nilo. Caminhe pela barragem com vistas do Lago Nasser de um lado e do Nilo turbulento abaixo."
        }, {
          time: "09:30",
          description: "Traslado até as antigas pedreiras de granito ao sul de Assuão."
        }, {
          time: "10:00",
          description: "Visita ao Obelisco Inacabado — fique ao lado deste gigante de 42 metros ainda encrustado no leito de rocha. Seu guia explica por que ele foi abandonado (uma rachadura apareceu durante a escultura) e o que isso revela sobre as técnicas antigas egípcias de extração de pedreira e construção."
        }, {
          time: "11:00",
          description: "Traslado até o cais de barcos da Ilha de File."
        }, {
          time: "11:15",
          description: "Breve travessia de barco a motor até a Ilha de File."
        }, {
          time: "11:30",
          description: "Tour guiado pelo Templo de Ísis — explore os grandes portões em pilone, o pátio dianteiro com colunas, a casa do nascimento (Mammisi), o salão hipostilo e o santuário interior. Seu guia dá vida à lenda de Ísis, Osíris e Hórus que inspirou a criação deste templo."
        }, {
          time: "13:00",
          description: "Retorno de barco a motor ao cais. Traslado até seu hotel. Fim do tour."
        }]
      }],
      it: [{
        day: 1,
        title: "Le icone di Assuan — Diga, Obelisco e Tempio dell'Isola",
        description: "Questo tour di mezza giornata è uno dei modi più gratificanti di passare una mattinata ad Assuan, racchiudendo tre strati di storia completamente diversi in cinque ore concentrate — dall'ingegneria del XX secolo alla lavorazione della pietra di 3.500 anni fa, fino a un tempio dedicato a una delle dee più amate del mondo antico. Si comincia ai margini meridionali della città con una visita alla Grande Diga di Assuan — un'impresa colossale dell'ingegneria del XX secolo che ha trasformato per sempre il rapporto dell'Egitto con il Nilo, addomesticando un fiume le cui inondazioni annuali avevano governato il ritmo della vita egizia da prima dell'inizio della storia scritta. In piedi sulla diga, con la vasta distesa del Lago Nasser che si estende dietro di voi verso l'orizzonte e le acque impetuose del Nilo che si agitano sotto, la portata di questo traguardo diventa concretamente reale in un modo che le fotografie semplicemente non possono trasmettere. La vostra guida vi spiegherà la costruzione della diga durante l'era di Nasser, il suo significato politico come simbolo di indipendenza post-coloniale, e il suo impatto drammatico sia sull'economia moderna dell'Egitto sia sugli antichi monumenti nubiani che dovettero essere trasferiti — interi templi alzati, tagliati in pezzi e spostati su terreni più alti — prima che le acque si alzassero e sommergessero la valle sottostante. Da lì, vi dirigerete verso uno dei siti più inaspettatamente affascinanti di Assuan: le antiche cave di granito dove l'Obelisco Incompiuto giace esattamente dove fu abbandonato, con una profonda fenditura che attraversa la pietra nel punto in cui gli scalpelli degli antichi scalpellini si fermarono improvvisamente. Se fosse stato completato ed eretto, questo singolo blocco di pietra — ancora attaccato al substrato roccioso da cui veniva scolpito — sarebbe stato il più grande obelisco del mondo antico, più alto persino dei famosi obelischi oggi visibili a Luxor, Parigi e Roma. L'ultima tappa è l'isola di File, raggiunta con una breve traversata in motoscafo attraverso acque che brillano color turchese sotto il sole del deserto, dove il Tempio di Iside si erge con straordinaria bellezza sullo sfondo del Nilo. Originariamente situato su un'isola completamente diversa, l'intero tempio fu smontato blocco per blocco e riassemblato qui durante l'operazione di salvataggio dell'UNESCO degli anni '70 per salvarlo dalle acque crescenti del Lago Nasser — un'impresa di conservazione quasi tanto impressionante quanto la costruzione originale del tempio.",

        steps: [{
          time: "08:00",
          description: "Ritiro in hotel dal vostro alloggio ad Assuan."
        }, {
          time: "08:30",
          description: "Arrivo alla Grande Diga di Assuan. La vostra guida spiega la storia della diga, la sua costruzione e come ha trasformato il rapporto dell'Egitto con il Nilo. Camminate sulla diga con vista sul Lago Nasser da un lato e sul Nilo impetuoso sotto."
        }, {
          time: "09:30",
          description: "Trasferimento alle antiche cave di granito a sud di Assuan."
        }, {
          time: "10:00",
          description: "Visita all'Obelisco Incompiuto — fermatevi accanto a questo gigante di 42 metri ancora incastonato nella roccia madre. La vostra guida spiega perché fu abbandonato (apparve una crepa durante la lavorazione) e cosa rivela sulle antiche tecniche egizie di estrazione e costruzione."
        }, {
          time: "11:00",
          description: "Trasferimento al molo dell'isola di File."
        }, {
          time: "11:15",
          description: "Breve traversata in motoscafo verso l'isola di File."
        }, {
          time: "11:30",
          description: "Visita guidata al Tempio di Iside — esplorate i grandi piloni d'ingresso, il cortile colonnato, la casa della nascita (Mammisi), la sala ipostila e il santuario interno. La vostra guida dà vita alla leggenda di Iside, Osiride e Horus che ha inspirato la creazione di questo tempio."
        }, {
          time: "13:00",
          description: "Ritorno in motoscafo al molo. Trasferimento al vostro hotel. Fine del tour."
        }]
      }],
      fr: [{
        day: 1,
        title: "Les incontournables d'Assouan — barrage, obélisque et temple de l'île",
        description: "Cette excursion d'une demi-journée est l'une des façons les plus gratifiantes de passer une matinée à Assouan, condensant trois couches d'histoire totalement différentes en cinq heures bien remplies — de l'ingénierie du XXe siècle à la taille de pierre datant de 3 500 ans, jusqu'à un temple dédié à l'une des déesses les plus aimées du monde antique. Vous commencez à la périphérie sud de la ville par une visite du Haut Barrage d'Assouan — un exploit colossal de l'ingénierie du XXe siècle qui a transformé pour toujours la relation de l'Égypte avec le Nil, domestiquant un fleuve dont les crues annuelles avaient régi le rythme de la vie égyptienne depuis bien avant le début de l'histoire écrite. Debout sur le barrage, avec la vaste étendue du lac Nasser s'étirant derrière vous vers l'horizon et les eaux tumultueuses du Nil s'agitant en dessous, l'ampleur de cet exploit devient viscéralement réelle d'une manière que les photographies ne peuvent simplement pas transmettre. Votre guide vous expliquera la construction du barrage durant l'ère Nasser, sa portée politique en tant que symbole d'indépendance postcoloniale, et son impact spectaculaire à la fois sur l'économie moderne de l'Égypte et sur les monuments nubiens antiques qui ont dû être déplacés — des temples entiers soulevés, découpés et transportés vers des terrains plus élevés — avant que les eaux ne montent et n'engloutissent la vallée en dessous. De là, vous vous rendez sur l'un des sites les plus étonnamment fascinants d'Assouan : les anciennes carrières de granit où l'Obélisque inachevé repose exactement là où il a été abandonné, une fissure profonde traversant la pierre à l'endroit même où les ciseaux des anciens tailleurs de pierre se sont brusquement arrêtés. S'il avait été achevé et érigé, ce seul bloc de pierre — toujours rattaché au substrat rocheux dont il était extrait — aurait été le plus grand obélisque du monde antique, plus haut même que les célèbres obélisques aujourd'hui dressés à Louxor, Paris et Rome. Le dernier arrêt est l'île de Philae, accessible après une courte traversée en bateau à moteur sur des eaux qui scintillent de turquoise sous le soleil du désert, où le temple d'Isis se dresse avec une beauté extraordinaire devant la toile de fond du Nil. Situé à l'origine sur une île entièrement différente, le temple entier a été démonté bloc par bloc et réassemblé ici lors de l'opération de sauvetage de l'UNESCO dans les années 1970, afin de le sauver de la montée des eaux du lac Nasser — un exploit de préservation presque aussi impressionnant que la construction originale du temple.",

        steps: [{
          time: "08:00",
          description: "Prise en charge à l'hôtel depuis votre hébergement à Assouan."
        }, {
          time: "08:30",
          description: "Arrivée au Haut Barrage d'Assouan. Votre guide explique l'histoire du barrage, sa construction et la façon dont il a transformé la relation de l'Égypte avec le Nil. Promenade sur le barrage avec vue sur le lac Nasser d'un côté et sur le Nil tumultueux en dessous."
        }, {
          time: "09:30",
          description: "Trajet vers les anciennes carrières de granit au sud d'Assouan."
        }, {
          time: "10:00",
          description: "Visite de l'Obélisque inachevé — tenez-vous aux côtés de ce géant de 42 mètres toujours ancré dans la roche mère. Votre guide explique pourquoi il a été abandonné (une fissure est apparue pendant la taille) et ce qu'il révèle sur les anciennes techniques égyptiennes d'extraction et de construction."
        }, {
          time: "11:00",
          description: "Trajet vers le quai d'embarquement de l'île de Philae."
        }, {
          time: "11:15",
          description: "Courte traversée en bateau à moteur vers l'île de Philae."
        }, {
          time: "11:30",
          description: "Visite guidée du temple d'Isis — explorez les grands pylônes d'entrée, la cour à colonnades, le mammisi (maison de naissance), la salle hypostyle et le sanctuaire intérieur. Votre guide fait revivre la légende d'Isis, d'Osiris et d'Horus qui a inspiré la création de ce temple."
        }, {
          time: "13:00",
          description: "Retour en bateau à moteur vers le quai. Transfert vers votre hôtel. Fin de l'excursion."
        }]
      }],
      ru: [{
        day: 1,
        title: "Символы Асуана — плотина, обелиск и храм на острове",
        description: "Этот тур на полдня — один из самых насыщенных способов провести утро в Асуане, объединяя три совершенно разных исторических слоя в пять насыщенных часов — от инженерии XX века до обработки камня 3500-летней давности и храма, посвящённого одной из самых любимых богинь древнего мира. Начинается тур на южной окраине города с посещения Асуанской высотной плотины — колоссального инженерного достижения XX века, навсегда изменившего отношения Египта с Нилом и укротившего реку, чьи ежегодные разливы определяли ритм египетской жизни задолго до начала письменной истории. Стоя на плотине, когда позади до самого горизонта простирается необъятное озеро Насер, а внизу бурлят стремительные воды Нила, масштаб этого достижения становится по-настоящему ощутимым так, как никакие фотографии передать не способны. Гид расскажет о строительстве плотины в эпоху Насера, о её политическом значении как символа постколониальной независимости и о её драматическом влиянии как на современную экономику Египта, так и на древние нубийские памятники, которые пришлось переносить — целые храмы поднимали, разрезали на части и перемещали на более высокие места — прежде чем воды поднялись и поглотили долину внизу. Оттуда вы направитесь к одному из самых неожиданно увлекательных мест Асуана — древним гранитным каменоломням, где Недостроенный обелиск лежит точно там, где был оставлен: глубокая трещина проходит через камень в том месте, где резцы древних мастеров внезапно остановились. Если бы он был завершён и установлен, этот единый кусок камня — до сих пор соединённый со скальной породой, из которой его вырезали, — стал бы крупнейшим обелиском древнего мира, выше даже знаменитых обелисков, которые сегодня стоят в Луксоре, Париже и Риме. Последняя остановка — остров Филе, до которого можно добраться на коротком моторном катере по водам, переливающимся бирюзой в пустынном солнце: здесь храм Исиды поражает своей необыкновенной красотой на фоне Нила. Изначально расположенный на совершенно другом острове, весь храм был разобран блок за блоком и собран здесь заново во время спасательной операции ЮНЕСКО в 1970-х годах, чтобы спасти его от наступающих вод озера Насер — подвиг сохранения почти столь же впечатляющий, как и первоначальное строительство храма.",

        steps: [{
          time: "08:00",
          description: "Трансфер из вашего отеля в Асуане."
        }, {
          time: "08:30",
          description: "Прибытие к Асуанской высотной плотине. Гид расскажет об истории плотины, её строительстве и о том, как она изменила отношения Египта с Нилом. Прогулка по плотине с видом на озеро Насер с одной стороны и бурлящий Нил внизу."
        }, {
          time: "09:30",
          description: "Поездка к древним гранитным каменоломням южнее Асуана."
        }, {
          time: "10:00",
          description: "Посещение Недостроенного обелиска — встаньте рядом с этим 42-метровым гигантом, до сих пор вмонтированным в скальную породу. Гид объяснит, почему он был оставлен (во время резьбы появилась трещина) и что это говорит о древнеегипетских технологиях добычи камня и строительства."
        }, {
          time: "11:00",
          description: "Поездка к причалу острова Филе."
        }, {
          time: "11:15",
          description: "Короткая переправа на моторном катере до острова Филе."
        }, {
          time: "11:30",
          description: "Экскурсия с гидом по храму Исиды — большие пилонные ворота, колоннадный двор, дом рождения (Маммиси), гипостильный зал и внутреннее святилище. Гид оживит легенду об Исиде, Осирисе и Хоре, которая вдохновила создание этого храма."
        }, {
          time: "13:00",
          description: "Возвращение на моторном катере к причалу. Трансфер в ваш отель. Окончание тура."
        }]
      }],
      de: [{
        day: 1,
        title: "Die Highlights von Assuan — Staudamm, Obelisk & Inseltempel",
        description: "Diese Halbtagestour ist eine der lohnendsten Arten, einen Vormittag in Assuan zu verbringen, da sie drei völlig unterschiedliche Geschichtsebenen in fünf konzentrierte Stunden packt — von der Ingenieurskunst des 20. Jahrhunderts über 3.500 Jahre alte Steinbearbeitung bis hin zu einem Tempel, der einer der beliebtesten Göttinnen der antiken Welt gewidmet ist. Sie beginnen am südlichen Stadtrand mit einem Besuch des Assuan-Staudamms — einer kolossalen ingenieurtechnischen Leistung des 20. Jahrhunderts, die Ägyptens Beziehung zum Nil für immer veränderte und einen Fluss zähmte, dessen jährliche Überschwemmungen den Rhythmus des ägyptischen Lebens schon vor Beginn der schriftlichen Geschichte bestimmt hatten. Wenn Sie auf dem Staudamm stehen, mit der weiten Fläche des Nassersees, die sich hinter Ihnen zum Horizont erstreckt, und den reißenden Wassern des Nils, die unter Ihnen toben, wird das Ausmaß dieser Leistung auf eine Weise greifbar real, die Fotografien einfach nicht vermitteln können. Ihr Reiseleiter erklärt den Bau des Staudamms während der Nasser-Ära, seine politische Bedeutung als Symbol postkolonialer Unabhängigkeit und seine dramatischen Auswirkungen sowohl auf Ägyptens moderne Wirtschaft als auch auf die antiken nubischen Monumente, die umgesiedelt werden mussten — ganze Tempel wurden angehoben, in Teile zerschnitten und auf höher gelegenes Gelände gebracht — bevor das Wasser anstieg und das darunterliegende Tal verschluckte. Von dort geht es zu einem der überraschend faszinierendsten Orte von Assuan: den antiken Granitsteinbrüchen, in denen der Unvollendete Obelisk genau dort liegt, wo er aufgegeben wurde, mit einem tiefen Riss, der durch den Stein verläuft, an der Stelle, an der die Meißel der antiken Steinmetze plötzlich zum Stillstand kamen. Wäre er fertiggestellt und aufgestellt worden, wäre dieser einzelne Steinblock — noch immer mit dem Felsuntergrund verbunden, aus dem er herausgeschnitten wurde — der größte Obelisk der antiken Welt gewesen, höher noch als die berühmten Obelisken, die heute in Luxor, Paris und Rom stehen. Die letzte Station ist die Insel Philae, die nach einer kurzen Motorbootüberfahrt über Gewässer erreicht wird, die in der Wüstensonne türkis schimmern, und wo der Isis-Tempel in außergewöhnlicher Schönheit vor der Kulisse des Nils steht. Ursprünglich auf einer völlig anderen Insel gelegen, wurde der gesamte Tempel Block für Block abgebaut und hier während der UNESCO-Rettungsaktion in den 1970er-Jahren wieder zusammengesetzt, um ihn vor den steigenden Wassern des Nassersees zu retten — eine Erhaltungsleistung, die fast so beeindruckend ist wie der ursprüngliche Bau des Tempels.",

        steps: [{
          time: "08:00",
          description: "Hotelabholung von Ihrer Unterkunft in Assuan."
        }, {
          time: "08:30",
          description: "Ankunft am Assuan-Staudamm. Ihr Reiseleiter erklärt die Geschichte und den Bau des Staudamms sowie seine Auswirkungen auf Ägyptens Beziehung zum Nil. Spaziergang über den Staudamm mit Blick auf den Nassersee auf einer Seite und den reißenden Nil darunter."
        }, {
          time: "09:30",
          description: "Fahrt zu den antiken Granitsteinbrüchen südlich von Assuan."
        }, {
          time: "10:00",
          description: "Besuch des Unvollendeten Obelisken — stehen Sie neben diesem 42 Meter hohen Riesen, der noch immer im Felsuntergrund eingebettet ist. Ihr Reiseleiter erklärt, warum er aufgegeben wurde (während der Bearbeitung entstand ein Riss) und was dies über die antiken ägyptischen Steinbruch- und Bautechniken verrät."
        }, {
          time: "11:00",
          description: "Fahrt zum Bootsanleger der Insel Philae."
        }, {
          time: "11:15",
          description: "Kurze Motorbootüberfahrt zur Insel Philae."
        }, {
          time: "11:30",
          description: "Geführte Tour durch den Isis-Tempel — erkunden Sie die großen Pylontore, den Säulenvorhof, das Geburtshaus (Mammisi), den Säulensaal und das innere Heiligtum. Ihr Reiseleiter erweckt die Legende von Isis, Osiris und Horus zum Leben, die die Errichtung dieses Tempels inspirierte."
        }, {
          time: "13:00",
          description: "Rückfahrt mit dem Motorboot zum Anleger. Transfer zu Ihrem Hotel. Ende der Tour."
        }]
      }]
    },
  },
  {
    title: "Temple of Philae Sound & Light Show",
    slug: "temple-philae-sound-light-show-aswan",
    description:
      "As night falls over the Nile, the ancient Temple of Philae transforms into a canvas of light and storytelling, shedding its daytime identity as an archaeological monument and becoming something closer to a living stage. On this magical evening experience, you'll take a boat to the island of Philae and witness a spectacular sound and light show that projects dramatic colors onto the temple's ancient walls while a captivating narration recounts the timeless legend of Isis and Osiris — a story of betrayal, death, devotion, and resurrection that lies at the very heart of ancient Egyptian religion and that shaped how an entire civilization understood love, loss, and the afterlife. The columns that stood silent under the desert sun by day suddenly glow amber, then blue, then gold, as the voice of the narrator carries the legend across the water and into the night. It's a deeply atmospheric and unforgettable way to connect with Egypt's mythological past, leaving visitors with a sense of having witnessed something far older and stranger than an ordinary tourist attraction.",
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
      es: "El lobby de su hotel en Asuán. El guía lo recogerá y lo trasladará al muelle de Filé.",
      pt: "O lobby do seu hotel em Assuão. O guia irá buscá-lo e levá-lo ao cais de barcos de File.",
      it: "La hall del vostro hotel ad Assuan. La guida vi verrà a prendere e vi accompagnerà al molo di File.",
      fr: "Le hall de votre hôtel à Assouan. Le guide viendra vous chercher et vous conduira au quai d'embarquement de Philae.",
      ru: "Лобби вашего отеля в Асуане. Гид встретит вас и доставит к причалу для лодок на Филе.",
      de: "Die Lobby Ihres Hotels in Assuan. Der Reiseleiter holt Sie ab und bringt Sie zum Bootsanleger von Philae."
    },
    accessibility: {
      en: "The show is mostly seated on outdoor benches. Boat crossing required. Uneven surfaces on the island. Not recommended for guests with severe mobility issues.",
      es: "El espectáculo se ve mayormente sentado en bancos al aire libre. Se requiere cruce en barco. Superficies irregulares en la isla. No recomendado para huéspedes con problemas graves de movilidad.",
      pt: "O espetáculo é assistido principalmente sentado em bancos ao ar livre. É necessária uma travessia de barco. Superfícies irregulares na ilha. Não recomendado para hóspedes com problemas graves de mobilidade.",
      it: "Lo spettacolo si guarda principalmente seduti su panche all'aperto. È richiesta una traversata in barca. Superfici irregolari sull'isola. Non consigliato per ospiti con gravi problemi di mobilità.",
      fr: "Le spectacle se regarde principalement assis sur des bancs en extérieur. Une traversée en bateau est nécessaire. Surfaces irrégulières sur l'île. Non recommandé pour les personnes ayant de graves problèmes de mobilité.",
      ru: "Шоу смотрят, в основном сидя на скамьях на открытом воздухе. Требуется переправа на лодке. На острове неровные поверхности. Не рекомендуется гостям с серьёзными проблемами с подвижностью.",
      de: "Die Show wird größtenteils sitzend auf Bänken im Freien angeschaut. Eine Bootsüberfahrt ist erforderlich. Unebene Oberflächen auf der Insel. Nicht empfehlenswert für Gäste mit starken Mobilitätseinschränkungen."
    },
    whatToBring: {
      en: ["Light jacket or shawl (evenings on the Nile can be cool)", "Comfortable flat shoes", "Insect repellent", "Camera (no flash during the show)"],
      es: [
        "Chaqueta ligera o chal (las noches en el Nilo pueden ser frescas)",
        "Zapatos planos y cómodos",
        "Repelente de insectos",
        "Cámara (sin flash durante el espectáculo)"
      ],
      pt: [
        "Jaqueta leve ou xale (as noites no Nilo podem ser frias)",
        "Sapatos baixos e confortáveis",
        "Repelente de insetos",
        "Câmera fotográfica (sem flash durante o espetáculo)"
      ],
      it: [
        "Giacca leggera o scialle (le serate sul Nilo possono essere fresche)",
        "Scarpe basse e comode",
        "Repellente per insetti",
        "Macchina fotografica (senza flash durante lo spettacolo)"
      ],
      fr: [
        "Veste légère ou châle (les soirées sur le Nil peuvent être fraîches)",
        "Chaussures plates confortables",
        "Répulsif anti-insectes",
        "Appareil photo (sans flash pendant le spectacle)"
      ],
      ru: [
        "Лёгкая куртка или шаль (вечера на Ниле могут быть прохладными)",
        "Удобная обувь на плоской подошве",
        "Средство от насекомых",
        "Фотоаппарат (без вспышки во время шоу)"
      ],
      de: [
        "Leichte Jacke oder Schal (Abende am Nil können kühl sein)",
        "Bequeme flache Schuhe",
        "Insektenschutzmittel",
        "Kamera (kein Blitz während der Show)"
      ]
    },
    importantInfo: {
      en: [
        "The show is conducted in English on most nights; check availability for Arabic, French, or German sessions.",
        "The show takes place outdoors; bring a light layer as evenings by the Nile can be cool.",
        "Photography is permitted before and after the show but not during the narration.",
        "The show lasts approximately 45 minutes; total duration includes transfers and the boat crossing.",
      ],
      es: [
        "El espectáculo se realiza en inglés la mayoría de las noches; consulte la disponibilidad de sesiones en árabe, francés o alemán.",
        "El espectáculo se realiza al aire libre; lleve una prenda ligera, ya que las noches junto al Nilo pueden ser frescas.",
        "Se permite fotografiar antes y después del espectáculo, pero no durante la narración.",
        "El espectáculo dura aproximadamente 45 minutos; la duración total incluye los traslados y el cruce en barco."
      ],
      pt: [
        "O espetáculo é realizado em inglês na maioria das noites; verifique a disponibilidade de sessões em árabe, francês ou alemão.",
        "O espetáculo ocorre ao ar livre; leve uma peça de roupa leve, já que as noites junto ao Nilo podem ser frias.",
        "É permitido fotografar antes e depois do espetáculo, mas não durante a narração.",
        "O espetáculo dura aproximadamente 45 minutos; a duração total inclui os traslados e a travessia de barco."
      ],
      it: [
        "Lo spettacolo si svolge in inglese nella maggior parte delle serate; verificate la disponibilità delle sessioni in arabo, francese o tedesco.",
        "Lo spettacolo si svolge all'aperto; portate un capo leggero, poiché le serate lungo il Nilo possono essere fresche.",
        "È consentito fotografare prima e dopo lo spettacolo, ma non durante la narrazione.",
        "Lo spettacolo dura circa 45 minuti; la durata totale comprende i trasferimenti e la traversata in barca."
      ],
      fr: [
        "Le spectacle est présenté en anglais la plupart des soirs ; vérifiez la disponibilité des séances en arabe, en français ou en allemand.",
        "Le spectacle se déroule en extérieur ; emportez une couche légère, car les soirées au bord du Nil peuvent être fraîches.",
        "La photographie est autorisée avant et après le spectacle, mais pas pendant la narration.",
        "Le spectacle dure environ 45 minutes ; la durée totale comprend les transferts et la traversée en bateau."
      ],
      ru: [
        "В большинстве вечеров шоу проводится на английском языке; уточняйте наличие сеансов на арабском, французском или немецком.",
        "Шоу проходит на открытом воздухе; возьмите лёгкую одежду, так как вечера у Нила могут быть прохладными.",
        "Фотографировать разрешено до и после шоу, но не во время повествования.",
        "Шоу длится примерно 45 минут; общая продолжительность включает трансферы и переправу на лодке."
      ],
      de: [
        "Die Show wird an den meisten Abenden auf Englisch gehalten; prüfen Sie die Verfügbarkeit von Vorstellungen auf Arabisch, Französisch oder Deutsch.",
        "Die Show findet im Freien statt; bringen Sie eine leichte Schicht mit, da die Abende am Nil kühl sein können.",
        "Fotografieren ist vor und nach der Show erlaubt, jedoch nicht während der Erzählung.",
        "Die Show dauert etwa 45 Minuten; die Gesamtdauer umfasst die Transfers und die Bootsüberfahrt."
      ]
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
            "As the sun sets over the Sahara and the Nile takes on the deep blue of night, this evening experience offers one of the most atmospheric encounters with ancient Egypt imaginable — a complete departure from the heat and bustle of daytime sightseeing. You'll be collected from your hotel as darkness begins to fall and driven to the boat dock at Shellal, just south of the Aswan High Dam, the desert air finally cooling after the heat of the day. A short motorboat crossing brings you to Philae Island, which by night is transformed into something otherworldly — the temple's columns, pylons, and carved walls lit in shifting shades of amber, blue, and gold, the reliefs of gods and pharaohs suddenly cast in dramatic relief against the darkness. You'll take your seat on the outdoor terraces, the cool night breeze drifting off the lake, and the show begins: a 45-minute narrated journey through the ancient legend of Isis and Osiris, projected through colored lights and a rich dramatic soundtrack that swells and falls with the rhythm of the story. The tale of the god Osiris's death at the hands of his jealous brother Seth, his resurrection through the devoted magic of Isis, and the birth and eventual triumph of their son Horus unfolds across the temple walls in a performance that is genuinely moving, even for visitors who arrived skeptical of sound-and-light shows in general. After the show, you'll have a few quiet moments to linger on the island, the temple now empty of crowds and lit only by the fading glow of the installation, before the boat returns you to the dock and your guide transfers you back to your hotel.",
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
      es: [{
        day: 1,
        title: "Una noche de mito y luz en Filé",
        description: "Mientras el sol se pone sobre el Sahara y el Nilo adquiere el azul profundo de la noche, esta experiencia vespertina ofrece uno de los encuentros más evocadores imaginables con el antiguo Egipto, un completo cambio respecto al calor y el bullicio de las visitas diurnas. Será recogido en su hotel cuando empiece a caer la oscuridad y llevado al muelle de Shellal, justo al sur de la Presa Alta de Asuán, mientras el aire del desierto finalmente se enfría tras el calor del día. Un breve cruce en lancha lo lleva a la isla de Filé, que de noche se transforma en algo de otro mundo: las columnas, pilonos y muros tallados del templo iluminados en tonos cambiantes de ámbar, azul y dorado, con los relieves de dioses y faraones repentinamente proyectados en dramático relieve contra la oscuridad. Tomará asiento en las terrazas al aire libre, con la fresca brisa nocturna llegando desde el lago, y comienza el espectáculo: un viaje narrado de 45 minutos a través de la antigua leyenda de Isis y Osiris, proyectado mediante luces de colores y una rica banda sonora dramática que crece y decae al ritmo de la historia. El relato de la muerte del dios Osiris a manos de su celoso hermano Seth, su resurrección a través de la magia devota de Isis, y el nacimiento y eventual triunfo de su hijo Horus se despliega sobre los muros del templo en una representación genuinamente conmovedora, incluso para los visitantes que llegaron escépticos sobre los espectáculos de luz y sonido en general. Después del espectáculo, tendrá unos momentos tranquilos para quedarse en la isla, con el templo ahora vacío de multitudes e iluminado solo por el resplandor menguante de la instalación, antes de que el barco lo regrese al muelle y su guía lo traslade de vuelta a su hotel.",

        steps: [{
          time: "19:00",
          description: "Recogida en el hotel desde su alojamiento en Asuán mientras cae el atardecer."
        }, {
          time: "19:30",
          description: "Llegada al muelle de Shellal. Abordar la lancha hacia la isla de Filé."
        }, {
          time: "19:45",
          description: "Llegada a la isla de Filé. Caminata por los terrenos iluminados del templo hasta sus asientos en la terraza de visualización al aire libre."
        }, {
          time: "20:00",
          description: "Comienza el espectáculo de luz y sonido: 45 minutos de drama narrado, luces de colores y música que cuentan la leyenda de Isis y Osiris sobre los antiguos muros del templo."
        }, {
          time: "20:45",
          description: "Finaliza el espectáculo. Tiempo libre para caminar entre las columnas iluminadas y tomar fotografías."
        }, {
          time: "21:15",
          description: "Abordar la lancha de regreso al muelle."
        }, {
          time: "21:30",
          description: "Traslado de regreso a su hotel. Fin del tour."
        }]
      }],
      pt: [{
        day: 1,
        title: "Uma noite de mito e luz em File",
        description: "Enquanto o sol se põe sobre o Saara e o Nilo assume o azul profundo da noite, esta experiência noturna oferece um dos encontros mais envolventes imagináveis com o Egito antigo — um afastamento completo do calor e da agitação dos passeios diurnos. Você será buscado no seu hotel quando a escuridão começar a cair e levado ao cais de barcos de Shellal, ao sul da Grande Barragem de Assuão, com o ar do deserto finalmente se refrescando depois do calor do dia. Uma breve travessia de barco a motor o leva à Ilha de File, que à noite se transforma em algo de outro mundo — as colunas, pilones e paredes esculpidas do templo iluminadas em tons cambiantes de âmbar, azul e dourado, com os relevos de deuses e faraós repentinamente projetados em relevo dramático contra a escuridão. Você se sentará nos terraços ao ar livre, com a brisa noturna fresca vindo do lago, e o espetáculo começa: uma jornada narrada de 45 minutos pela antiga lenda de Ísis e Osíris, projetada através de luzes coloridas e uma rica trilha sonora dramática que cresce e diminui com o ritmo da história. A história da morte do deus Osíris às mãos de seu invejoso irmão Seth, sua ressurreição por meio da magia devotada de Ísis, e o nascimento e eventual triunfo de seu filho Hórus se desenrola pelas paredes do templo em uma apresentação genuinamente emocionante, mesmo para visitantes que chegaram céticos quanto aos espetáculos de som e luz em geral. Após o espetáculo, você terá alguns momentos tranquilos para permanecer na ilha, o templo agora vazio de multidões e iluminado apenas pelo brilho enfraquecido da instalação, antes que o barco o leve de volta ao cais e seu guia o transfira de volta ao hotel.",

        steps: [{
          time: "19:00",
          description: "Busca no hotel a partir da sua acomodação em Assuão ao cair da noite."
        }, {
          time: "19:30",
          description: "Chegada ao cais de Shellal. Embarque no barco a motor até a Ilha de File."
        }, {
          time: "19:45",
          description: "Chegada à Ilha de File. Caminhada pelos terrenos iluminados do templo até seus assentos no terraço de visualização ao ar livre."
        }, {
          time: "20:00",
          description: "Início do Espetáculo de Som e Luz — 45 minutos de drama narrado, luzes coloridas e música contando a lenda de Ísis e Osíris sobre as antigas paredes do templo."
        }, {
          time: "20:45",
          description: "Fim do espetáculo. Tempo livre para caminhar entre as colunas iluminadas e tirar fotografias."
        }, {
          time: "21:15",
          description: "Embarque no barco a motor de volta ao cais."
        }, {
          time: "21:30",
          description: "Traslado de volta ao seu hotel. Fim do tour."
        }]
      }],
      it: [{
        day: 1,
        title: "Una serata di mito e luce a File",
        description: "Mentre il sole tramonta sul Sahara e il Nilo assume il blu profondo della notte, questa esperienza serale offre uno degli incontri più suggestivi immaginabili con l'antico Egitto — un completo allontanamento dal caldo e dal trambusto delle visite diurne. Verrete prelevati dal vostro hotel quando inizia a scendere il buio e portati al molo di Shellal, appena a sud della Grande Diga di Assuan, mentre l'aria del deserto finalmente si rinfresca dopo il calore della giornata. Una breve traversata in motoscafo vi porta all'isola di File, che di notte si trasforma in qualcosa di sovrannaturale — le colonne, i piloni e le pareti scolpite del tempio illuminate in tonalità cangianti di ambra, blu e oro, con i rilievi di dèi e faraoni improvvisamente proiettati in drammatico risalto contro l'oscurità. Prenderete posto sulle terrazze all'aperto, con la fresca brezza notturna che arriva dal lago, e lo spettacolo inizia: un viaggio narrato di 45 minuti attraverso l'antica leggenda di Iside e Osiride, proiettato tramite luci colorate e una ricca colonna sonora drammatica che cresce e si placa seguendo il ritmo della storia. La storia della morte del dio Osiride per mano del fratello geloso Seth, la sua resurrezione attraverso la magia devota di Iside, e la nascita e il successivo trionfo del figlio Horus si svolgono sulle pareti del tempio in una rappresentazione genuinamente emozionante, anche per i visitatori arrivati scettici riguardo agli spettacoli di luci e suoni in generale. Dopo lo spettacolo, avrete alcuni momenti di tranquillità per restare sull'isola, con il tempio ora svuotato dalla folla e illuminato solo dal bagliore svanente dell'installazione, prima che la barca vi riporti al molo e la guida vi riaccompagni in hotel.",

        steps: [{
          time: "19:00",
          description: "Ritiro in hotel dal vostro alloggio ad Assuan al calare della sera."
        }, {
          time: "19:30",
          description: "Arrivo al molo di Shellal. Imbarco sul motoscafo verso l'isola di File."
        }, {
          time: "19:45",
          description: "Arrivo sull'isola di File. Passeggiata attraverso i terreni illuminati del tempio fino ai posti sulla terrazza panoramica all'aperto."
        }, {
          time: "20:00",
          description: "Inizia lo Spettacolo di Luci e Suoni — 45 minuti di narrazione drammatica, luci colorate e musica che raccontano la leggenda di Iside e Osiride sulle antiche pareti del tempio."
        }, {
          time: "20:45",
          description: "Fine dello spettacolo. Tempo libero per camminare tra le colonne illuminate e scattare fotografie."
        }, {
          time: "21:15",
          description: "Imbarco sul motoscafo di ritorno al molo."
        }, {
          time: "21:30",
          description: "Trasferimento di ritorno al vostro hotel. Fine del tour."
        }]
      }],
      fr: [{
        day: 1,
        title: "Une soirée de mythe et de lumière à Philae",
        description: "Tandis que le soleil se couche sur le Sahara et que le Nil prend le bleu profond de la nuit, cette expérience nocturne offre l'une des rencontres les plus envoûtantes imaginables avec l'Égypte antique — une rupture complète avec la chaleur et l'agitation des visites diurnes. Vous serez pris en charge à votre hôtel à la tombée de la nuit et conduit jusqu'au quai d'embarquement de Shellal, juste au sud du Haut Barrage d'Assouan, alors que l'air du désert se rafraîchit enfin après la chaleur de la journée. Une courte traversée en bateau à moteur vous amène à l'île de Philae, qui se transforme la nuit en un lieu presque irréel — les colonnes, les pylônes et les murs sculptés du temple éclairés de teintes changeantes d'ambre, de bleu et d'or, les reliefs de dieux et de pharaons soudain mis en relief de façon spectaculaire contre l'obscurité. Vous prendrez place sur les terrasses en plein air, la brise nocturne fraîche venant du lac, et le spectacle commence : un voyage narré de 45 minutes à travers l'ancienne légende d'Isis et d'Osiris, projeté à travers des lumières colorées et une riche bande sonore dramatique qui s'amplifie et retombe au rythme de l'histoire. Le récit de la mort du dieu Osiris aux mains de son frère jaloux Seth, sa résurrection grâce à la magie dévouée d'Isis, et la naissance puis le triomphe final de leur fils Horus se déploient sur les murs du temple dans une représentation véritablement émouvante, même pour les visiteurs arrivés sceptiques quant aux spectacles son et lumière en général. Après le spectacle, vous aurez quelques instants de calme pour vous attarder sur l'île, le temple désormais vidé de la foule et éclairé seulement par la lueur déclinante de l'installation, avant que le bateau ne vous ramène au quai et que votre guide ne vous transfère à nouveau vers votre hôtel.",

        steps: [{
          time: "19:00",
          description: "Prise en charge à l'hôtel depuis votre hébergement à Assouan à la tombée du jour."
        }, {
          time: "19:30",
          description: "Arrivée au quai d'embarquement de Shellal. Montée à bord du bateau à moteur vers l'île de Philae."
        }, {
          time: "19:45",
          description: "Arrivée sur l'île de Philae. Marche à travers les terrains illuminés du temple jusqu'à vos places sur la terrasse panoramique en plein air."
        }, {
          time: "20:00",
          description: "Début du spectacle son et lumière — 45 minutes de récit dramatique, de lumières colorées et de musique racontant la légende d'Isis et d'Osiris sur les murs antiques du temple."
        }, {
          time: "20:45",
          description: "Fin du spectacle. Temps libre pour se promener parmi les colonnes illuminées et prendre des photographies."
        }, {
          time: "21:15",
          description: "Montée à bord du bateau à moteur pour le retour au quai."
        }, {
          time: "21:30",
          description: "Transfert de retour vers votre hôtel. Fin de l'excursion."
        }]
      }],
      ru: [{
        day: 1,
        title: "Вечер мифов и света на Филе",
        description: "Когда солнце садится над Сахарой и Нил приобретает глубокий синий цвет ночи, этот вечерний опыт предлагает одну из самых атмосферных встреч с древним Египтом, какую можно себе представить — полный контраст с дневной жарой и суетой экскурсий. Вас забирают из отеля, когда начинает темнеть, и везут к причалу в Шеллале, чуть южнее Асуанской высотной плотины, пока воздух пустыни наконец остывает после дневного зноя. Короткая переправа на моторном катере доставляет вас на остров Филе, который ночью превращается в нечто неземное — колонны, пилоны и резные стены храма освещены меняющимися оттенками янтаря, синего и золота, а рельефы богов и фараонов внезапно проступают драматичным силуэтом на фоне темноты. Вы займёте место на открытых террасах, прохладный ночной бриз будет доноситься с озера, и начнётся шоу: 45-минутное путешествие с повествованием по древней легенде об Исиде и Осирисе, представленное через цветные огни и насыщенную драматическую музыку, нарастающую и спадающую в ритме истории. История о смерти бога Осириса от руки его завистливого брата Сета, его воскрешении благодаря преданной магии Исиды, а также рождении и окончательном торжестве их сына Хора разворачивается на стенах храма в представлении, которое искренне трогает даже посетителей, прибывших со скептическим отношением к шоу света и звука в целом. После шоу у вас будет несколько спокойных минут, чтобы задержаться на острове, где храм теперь свободен от толп и освещён лишь угасающим светом инсталляции, прежде чем лодка вернёт вас к причалу, а гид отвезёт обратно в отель.",

        steps: [{
          time: "19:00",
          description: "Трансфер из вашего отеля в Асуане, когда начинает темнеть."
        }, {
          time: "19:30",
          description: "Прибытие к причалу Шеллал. Посадка на моторный катер до острова Филе."
        }, {
          time: "19:45",
          description: "Прибытие на остров Филе. Прогулка по освещённой территории храма до мест на открытой смотровой террасе."
        }, {
          time: "20:00",
          description: "Начало шоу света и звука — 45 минут драматического повествования, цветных огней и музыки, рассказывающих легенду об Исиде и Осирисе на древних стенах храма."
        }, {
          time: "20:45",
          description: "Окончание шоу. Свободное время для прогулки среди освещённых колонн и фотографирования."
        }, {
          time: "21:15",
          description: "Посадка на моторный катер для возвращения к причалу."
        }, {
          time: "21:30",
          description: "Трансфер обратно в ваш отель. Окончание тура."
        }]
      }],
      de: [{
        day: 1,
        title: "Ein Abend voller Mythos und Licht in Philae",
        description: "Während die Sonne über der Sahara untergeht und der Nil das tiefe Blau der Nacht annimmt, bietet dieses abendliche Erlebnis eine der stimmungsvollsten Begegnungen mit dem alten Ägypten, die man sich vorstellen kann — eine völlige Abkehr von der Hitze und Geschäftigkeit der Tagesbesichtigungen. Sie werden bei einbrechender Dunkelheit von Ihrem Hotel abgeholt und zum Bootsanleger in Schellal gefahren, knapp südlich des Assuan-Staudamms, während sich die Wüstenluft nach der Tageshitze endlich abkühlt. Eine kurze Motorbootüberfahrt bringt Sie zur Insel Philae, die sich nachts in etwas geradezu Überirdisches verwandelt — die Säulen, Pylone und geschnitzten Wände des Tempels leuchten in wechselnden Schattierungen von Bernstein, Blau und Gold, während die Reliefs von Göttern und Pharaonen plötzlich dramatisch gegen die Dunkelheit hervortreten. Sie nehmen auf den Außenterrassen Platz, die kühle Nachtbrise zieht vom See herüber, und die Show beginnt: eine 45-minütige erzählte Reise durch die antike Legende von Isis und Osiris, dargestellt durch farbige Lichter und einen ausdrucksstarken, dramatischen Soundtrack, der mit dem Rhythmus der Geschichte an- und abschwillt. Die Geschichte vom Tod des Gottes Osiris durch die Hand seines eifersüchtigen Bruders Seth, seiner Auferstehung durch die hingebungsvolle Magie der Isis und der Geburt sowie dem letztendlichen Triumph ihres Sohnes Horus entfaltet sich auf den Tempelwänden in einer Vorstellung, die wirklich bewegend ist — selbst für Besucher, die Licht- und Tonshows generell skeptisch gegenüberstanden. Nach der Show haben Sie ein paar ruhige Momente, um auf der Insel zu verweilen, während der Tempel nun frei von Menschenmassen ist und nur noch vom verblassenden Schein der Installation beleuchtet wird, bevor das Boot Sie zurück zum Anleger bringt und Ihr Reiseleiter Sie zurück zu Ihrem Hotel transferiert.",

        steps: [{
          time: "19:00",
          description: "Hotelabholung von Ihrer Unterkunft in Assuan bei Einbruch der Dämmerung."
        }, {
          time: "19:30",
          description: "Ankunft am Bootsanleger von Schellal. Einstieg in das Motorboot zur Insel Philae."
        }, {
          time: "19:45",
          description: "Ankunft auf der Insel Philae. Spaziergang durch das beleuchtete Tempelgelände zu Ihren Plätzen auf der Außenterrasse."
        }, {
          time: "20:00",
          description: "Die Licht- und Tonshow beginnt — 45 Minuten erzählerisches Drama, farbige Lichter und Musik, die die Legende von Isis und Osiris auf den antiken Tempelwänden erzählen."
        }, {
          time: "20:45",
          description: "Ende der Show. Freizeit, um zwischen den beleuchteten Säulen zu spazieren und Fotos zu machen."
        }, {
          time: "21:15",
          description: "Einstieg in das Motorboot zurück zum Anleger."
        }, {
          time: "21:30",
          description: "Rücktransfer zu Ihrem Hotel. Ende der Tour."
        }]
      }]
    },
  },
  {
    title: "Elephantine Island Boat Tour",
    slug: "elephantine-island-boat-tour-aswan",
    description:
      "Escape the city and glide across the calm waters of the Nile on a traditional felucca to Elephantine Island, the largest island in Aswan and one of the longest continuously inhabited places on the planet. This lush, peaceful island has been inhabited since prehistoric times — long before the first pharaoh ever wore a crown — and is packed with history, including ancient ruins, the Aswan Museum, and the famous Nilometer used to measure the Nile's flood levels, a device upon which an entire civilization's tax rates and harvest predictions once depended. Living Nubian villages still occupy parts of the island today, their painted houses and daily rhythms offering a glimpse of a culture that has endured every dynasty, empire, and modern transformation that has swept through this corner of Egypt. The surrounding landscapes of granite boulders, swaying palms, and turquoise water make this one of the most scenic boat trips in all of Egypt, a gentle counterpoint to the grander, more monumental sites nearby.",
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
      es: "Muelle de feluca en la Corniche de Asuán, cerca del Mövenpick Resort. Su guía estará esperando con un cartel.",
      pt: "Cais de feluca na Corniche de Assuão, perto do Mövenpick Resort. Seu guia estará esperando com uma placa.",
      it: "Molo delle felucche sulla Corniche di Assuan, vicino al Mövenpick Resort. La vostra guida vi aspetterà con un cartello.",
      fr: "Quai des felouques sur la corniche d'Assouan, près du Mövenpick Resort. Votre guide vous attendra avec un panneau.",
      ru: "Причал для фелук на Корниш в Асуане, рядом с курортом Mövenpick. Ваш гид будет ждать с табличкой.",
      de: "Felucca-Anlegestelle an der Corniche von Assuan, in der Nähe des Mövenpick Resorts. Ihr Reiseleiter wird mit einem Schild auf Sie warten."
    },
    accessibility: {
      en: "Felucca boarding requires stepping down into a low boat. The island has uneven rocky paths. Not suitable for wheelchairs.",
      es: "Subir a la feluca requiere descender a una embarcación baja. La isla tiene senderos rocosos irregulares. No es adecuado para sillas de ruedas.",
      pt: "Embarcar na feluca exige descer para um barco baixo. A ilha tem caminhos rochosos irregulares. Não é adequado para cadeiras de rodas.",
      it: "Salire sulla felucca richiede di scendere in un'imbarcazione bassa. L'isola presenta sentieri rocciosi irregolari. Non adatto alle sedie a rotelle.",
      fr: "Monter à bord de la felouque nécessite de descendre dans une embarcation basse. L'île présente des chemins rocheux irréguliers. Ne convient pas aux fauteuils roulants.",
      ru: "Посадка на фелуку требует спуска в низкую лодку. На острове неровные каменистые дорожки. Не подходит для инвалидных колясок.",
      de: "Das Einsteigen in die Felucca erfordert das Hinabsteigen in ein niedriges Boot. Die Insel hat unebene, steinige Wege. Nicht geeignet für Rollstuhlfahrer."
    },
    whatToBring: {
      en: ["Comfortable flat shoes", "Sun hat and sunscreen", "Water bottle", "Camera", "Small bag — space is limited on a felucca"],
      es: [
        "Zapatos planos y cómodos",
        "Sombrero y protector solar",
        "Botella de agua",
        "Cámara",
        "Bolsa pequeña: el espacio en una feluca es limitado"
      ],
      pt: [
        "Sapatos baixos e confortáveis",
        "Chapéu e protetor solar",
        "Garrafa de água",
        "Câmera fotográfica",
        "Bolsa pequena — o espaço em uma feluca é limitado"
      ],
      it: [
        "Scarpe basse e comode",
        "Cappello e crema solare",
        "Bottiglia d'acqua",
        "Macchina fotografica",
        "Borsa piccola — lo spazio su una felucca è limitato"
      ],
      fr: [
        "Chaussures plates confortables",
        "Chapeau et crème solaire",
        "Bouteille d'eau",
        "Appareil photo",
        "Petit sac — l'espace est limité sur une felouque"
      ],
      ru: [
        "Удобная обувь на плоской подошве",
        "Шляпа от солнца и солнцезащитный крем",
        "Бутылка воды",
        "Фотоаппарат",
        "Маленькая сумка — на фелуке мало места"
      ],
      de: [
        "Bequeme flache Schuhe",
        "Sonnenhut und Sonnenschutz",
        "Wasserflasche",
        "Kamera",
        "Kleine Tasche — der Platz auf einer Felucca ist begrenzt"
      ]
    },
    importantInfo: {
      en: [
        "Hotel pickup is not included; you make your own way to the Corniche dock.",
        "The felucca ride is weather-dependent; in case of strong winds the tour may be modified.",
        "Entrance fees to the Aswan Museum and ancient ruins are included.",
        "Life jackets are provided onboard the felucca.",
      ],
      es: [
        "La recogida en el hotel no está incluida; usted debe llegar por su cuenta al muelle de la Corniche.",
        "El paseo en feluca depende del clima; en caso de vientos fuertes, el tour puede modificarse.",
        "Las entradas al Museo de Asuán y a las ruinas antiguas están incluidas.",
        "Se proporcionan chalecos salvavidas a bordo de la feluca."
      ],
      pt: [
        "A busca no hotel não está incluída; você deve chegar por conta própria ao cais da Corniche.",
        "O passeio de feluca depende das condições climáticas; em caso de ventos fortes, o tour pode ser modificado.",
        "As taxas de entrada para o Museu de Assuão e as ruínas antigas estão incluídas.",
        "Coletes salva-vidas são fornecidos a bordo da feluca."
      ],
      it: [
        "Il ritiro in hotel non è incluso; dovete raggiungere autonomamente il molo della Corniche.",
        "La gita in felucca dipende dalle condizioni meteo; in caso di forte vento il tour potrebbe essere modificato.",
        "I biglietti d'ingresso al Museo di Assuan e alle rovine antiche sono inclusi.",
        "I giubbotti di salvataggio sono forniti a bordo della felucca."
      ],
      fr: [
        "La prise en charge à l'hôtel n'est pas incluse ; vous devez vous rendre vous-même au quai de la corniche.",
        "La balade en felouque dépend des conditions météorologiques ; en cas de vents forts, l'excursion peut être modifiée.",
        "Les frais d'entrée au musée d'Assouan et aux ruines antiques sont inclus.",
        "Des gilets de sauvetage sont fournis à bord de la felouque."
      ],
      ru: [
        "Трансфер из отеля не включён; до причала на Корниш нужно добраться самостоятельно.",
        "Поездка на фелуке зависит от погоды; при сильном ветре тур может быть изменён.",
        "Входные билеты в Асуанский музей и к древним руинам включены.",
        "На борту фелуки предоставляются спасательные жилеты."
      ],
      de: [
        "Die Hotelabholung ist nicht inbegriffen; Sie gelangen selbstständig zur Anlegestelle an der Corniche.",
        "Die Felucca-Fahrt ist wetterabhängig; bei starkem Wind kann die Tour angepasst werden.",
        "Die Eintrittsgebühren für das Assuan-Museum und die antiken Ruinen sind enthalten.",
        "Rettungswesten werden an Bord der Felucca bereitgestellt."
      ]
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
            "Elephantine Island sits in the middle of the Nile directly in front of Aswan's corniche and has been continuously inhabited for longer than almost any place on earth, its layers of settlement stretching back to a time before Egypt itself existed as a unified kingdom. Its southern tip contains one of the oldest settlements in Egypt, predating the pharaohs by centuries, and its strategic position made it the ancient border post and trading gateway between Egypt and sub-Saharan Africa — the place where ivory, gold, exotic animals, and enslaved people once passed from one world into another. Today it offers one of Aswan's most enjoyable and peaceful half-day experiences — a gentle felucca crossing, a walk through two surviving Nubian villages whose residents still speak the Nubian language at home, and a visit to the island's museum and ancient sites. The felucca ride itself is the opening pleasure: the silence of the sail catching wind, the proximity to the water close enough to trail a hand across its surface, and the views of Aswan's corniche, the Aga Khan Mausoleum gleaming white on its hilltop, and the great golden sand dunes of the West Bank beyond are already worth the journey before you've even set foot on the island.",
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
      es: [{
        day: 1,
        title: "Cruce en feluca y exploración de la isla",
        description: "La isla Elefantina se encuentra en medio del Nilo, justo frente a la Corniche de Asuán, y ha estado habitada de manera continua durante más tiempo que casi cualquier otro lugar en la Tierra, con capas de asentamientos que se remontan a una época anterior a la existencia de Egipto como reino unificado. Su extremo sur contiene uno de los asentamientos más antiguos de Egipto, anterior a los faraones por siglos, y su posición estratégica la convirtió en el antiguo puesto fronterizo y puerta comercial entre Egipto y el África subsahariana, el lugar donde marfil, oro, animales exóticos y personas esclavizadas pasaban una vez de un mundo a otro. Hoy ofrece una de las experiencias de medio día más agradables y tranquilas de Asuán: un suave cruce en feluca, un paseo por dos aldeas nubias que perduran y cuyos residentes todavía hablan el idioma nubio en sus hogares, y una visita al museo y a los sitios antiguos de la isla. El paseo en feluca es en sí mismo el primer placer: el silencio de la vela atrapando el viento, la cercanía al agua, lo suficiente como para rozarla con la mano, y las vistas de la Corniche de Asuán, el Mausoleo del Aga Khan brillando en blanco sobre su colina, y las grandes dunas doradas de la Orilla Oeste a lo lejos ya hacen que valga la pena el viaje incluso antes de poner un pie en la isla.",

        steps: [{
          time: "08:00",
          description: "Encuentro con su guía en el muelle de felucas de la Corniche. Abordar el tradicional velero feluca."
        }, {
          time: "08:15",
          description: "Navegación por el Nilo hacia el extremo norte de la isla Elefantina. Disfrute de las vistas del paseo marítimo de Asuán, el hotel Mövenpick en la isla y la Orilla Oeste desértica."
        }, {
          time: "08:30",
          description: "Desembarque e inicio del recorrido a pie. Primera parada: las ruinas antiguas del Templo de Khnum en el extremo sur de la isla, uno de los sitios de templos más antiguos de Egipto, dedicado al dios creador con cabeza de carnero."
        }, {
          time: "09:15",
          description: "Visita al Museo de Asuán, que alberga artefactos descubiertos en la isla, incluyendo cerámica, estatuas y objetos desde el período predinástico hasta el romano."
        }, {
          time: "10:00",
          description: "Caminata hasta el antiguo Nilómetro, una escalera de piedra que desciende hacia el Nilo, tallada con escalas de medición utilizadas durante milenios para registrar los niveles de las inundaciones anuales del río y predecir el rendimiento agrícola y las tasas fiscales de Egipto."
        }, {
          time: "10:30",
          description: "Paseo por las activas aldeas nubias de Siou y Koti en la isla: casas pintadas con colores vivos, callejones estrechos y residentes locales en su vida diaria ofrecen una visión auténtica de la cultura de la isla."
        }, {
          time: "11:30",
          description: "Regreso al muelle norte y embarque en la feluca para el cruce de vuelta hacia la Corniche de Asuán."
        }, {
          time: "12:00",
          description: "Llegada al muelle de la Corniche. Fin del tour."
        }]
      }],
      pt: [{
        day: 1,
        title: "Travessia de feluca e exploração da ilha",
        description: "A Ilha Elefantina situa-se no meio do Nilo, diretamente em frente à orla de Assuão, e tem sido habitada continuamente por mais tempo do que quase qualquer outro lugar na Terra, com camadas de povoamento que remontam a uma época anterior à própria existência do Egito como um reino unificado. Sua extremidade sul contém um dos assentamentos mais antigos do Egito, anterior aos faraós por séculos, e sua posição estratégica fez dela o antigo posto fronteiriço e portal comercial entre o Egito e a África subsaariana — o lugar por onde marfim, ouro, animais exóticos e pessoas escravizadas uma vez passaram de um mundo para outro. Hoje ela oferece uma das experiências de meio dia mais agradáveis e tranquilas de Assuão — uma suave travessia de feluca, uma caminhada por duas vilas núbias remanescentes cujos residentes ainda falam a língua núbia em casa, e uma visita ao museu e aos sítios antigos da ilha. O passeio de feluca em si já é um prazer inicial: o silêncio da vela capturando o vento, a proximidade com a água, próxima o suficiente para deslizar a mão sobre a superfície, e as vistas da orla de Assuão, do Mausoléu do Aga Khan brilhando em branco sobre sua colina, e das grandes dunas de areia dourada da Margem Ocidental ao fundo já valem a viagem antes mesmo de pôr os pés na ilha.",

        steps: [{
          time: "08:00",
          description: "Encontro com seu guia no cais de felucas da Corniche. Embarque no tradicional veleiro feluca."
        }, {
          time: "08:15",
          description: "Navegação pelo Nilo até a extremidade norte da Ilha Elefantina. Aprecie as vistas da orla de Assuão, do hotel Mövenpick na ilha e da Margem Ocidental desértica."
        }, {
          time: "08:30",
          description: "Desembarque e início do passeio a pé. Primeira parada: as ruínas antigas do Templo de Khnum, na extremidade sul da ilha — um dos sítios de templos mais antigos do Egito, dedicado ao deus criador com cabeça de carneiro."
        }, {
          time: "09:15",
          description: "Visita ao Museu de Assuão, que abriga artefatos descobertos na ilha, incluindo cerâmicas, estátuas e objetos do período pré-dinástico ao período romano."
        }, {
          time: "10:00",
          description: "Caminhada até o antigo Nilômetro — uma escadaria de pedra que desce ao Nilo, esculpida com escalas de medição usadas durante milênios para registrar os níveis das cheias anuais do rio e prever a produção agrícola e as taxas de impostos do Egito."
        }, {
          time: "10:30",
          description: "Passeio pelas vilas núbias vivas de Siou e Koti, na ilha — casas pintadas em cores vivas, ruas estreitas e moradores locais em seu cotidiano oferecem um vislumbre genuíno da cultura da ilha."
        }, {
          time: "11:30",
          description: "Retorno ao cais norte e embarque na feluca para a travessia de volta à orla de Assuão."
        }, {
          time: "12:00",
          description: "Chegada ao cais da Corniche. Fim do tour."
        }]
      }],
      it: [{
        day: 1,
        title: "Traversata in felucca ed esplorazione dell'isola",
        description: "L'Isola Elefantina si trova nel mezzo del Nilo, proprio davanti alla Corniche di Assuan, ed è stata abitata ininterrottamente più a lungo di quasi qualsiasi altro luogo sulla Terra, con strati di insediamenti che risalgono a un'epoca precedente all'esistenza dell'Egitto stesso come regno unificato. La sua punta meridionale racchiude uno dei più antichi insediamenti d'Egitto, precedente ai faraoni di secoli, e la sua posizione strategica la rese l'antico avamposto di confine e porta commerciale tra l'Egitto e l'Africa subsahariana — il luogo dove avorio, oro, animali esotici e persone rese schiave passavano un tempo da un mondo all'altro. Oggi offre una delle esperienze di mezza giornata più piacevoli e tranquille di Assuan — una dolce traversata in felucca, una passeggiata attraverso due villaggi nubiani sopravvissuti i cui abitanti parlano ancora la lingua nubiana in casa, e una visita al museo e ai siti antichi dell'isola. La gita in felucca è di per sé il primo piacere: il silenzio della vela che cattura il vento, la vicinanza all'acqua, abbastanza prossima da poterla sfiorare con una mano, e le viste sulla Corniche di Assuan, il Mausoleo dell'Aga Khan che risplende bianco sulla sua collina, e le grandi dune dorate della Riva Occidentale in lontananza valgono già il viaggio prima ancora di aver messo piede sull'isola.",

        steps: [{
          time: "08:00",
          description: "Incontro con la guida al molo delle felucche sulla Corniche. Imbarco sulla tradizionale barca a vela felucca."
        }, {
          time: "08:15",
          description: "Navigazione attraverso il Nilo verso l'estremità settentrionale dell'Isola Elefantina. Godetevi le viste sul lungofiume di Assuan, sull'hotel Mövenpick sull'isola e sulla desertica Riva Occidentale."
        }, {
          time: "08:30",
          description: "Sbarco e inizio della visita a piedi. Prima tappa: le antiche rovine del Tempio di Khnum, all'estremità meridionale dell'isola — uno dei più antichi siti templari d'Egitto, dedicato al dio creatore con la testa d'ariete."
        }, {
          time: "09:15",
          description: "Visita al Museo di Assuan, che custodisce reperti scoperti sull'isola, tra cui ceramiche, statue e oggetti dal periodo predinastico a quello romano."
        }, {
          time: "10:00",
          description: "Passeggiata fino all'antico Nilometro — una scalinata di pietra che scende nel Nilo, intagliata con scale di misurazione usate per millenni per registrare i livelli delle piene annuali del fiume e prevedere il raccolto agricolo e le aliquote fiscali dell'Egitto."
        }, {
          time: "10:30",
          description: "Passeggiata tra i villaggi nubiani ancora vivi di Siou e Koti sull'isola — case colorate vivacemente, stradine stretti e residenti locali nella vita quotidiana offrono uno spaccato autentico della cultura dell'isola."
        }, {
          time: "11:30",
          description: "Ritorno al molo settentrionale e imbarco sulla felucca per la traversata di ritorno verso la Corniche di Assuan."
        }, {
          time: "12:00",
          description: "Arrivo al molo della Corniche. Fine del tour."
        }]
      }],
      fr: [{
        day: 1,
        title: "Traversée en felouque et exploration de l'île",
        description: "L'île Éléphantine se trouve au milieu du Nil, juste en face de la corniche d'Assouan, et a été habitée en continu plus longtemps que presque n'importe quel autre lieu sur Terre, ses couches de peuplement remontant à une époque antérieure à l'existence de l'Égypte elle-même en tant que royaume unifié. Sa pointe sud abrite l'un des plus anciens établissements d'Égypte, précédant les pharaons de plusieurs siècles, et sa position stratégique en a fait l'ancien poste-frontière et la porte commerciale entre l'Égypte et l'Afrique subsaharienne — le lieu où l'ivoire, l'or, les animaux exotiques et les personnes asservies passaient autrefois d'un monde à l'autre. Aujourd'hui, elle offre l'une des expériences de demi-journée les plus agréables et paisibles d'Assouan — une douce traversée en felouque, une promenade à travers deux villages nubiens encore existants dont les habitants parlent toujours le nubien à la maison, et une visite du musée et des sites antiques de l'île. La balade en felouque est elle-même le premier plaisir : le silence de la voile captant le vent, la proximité avec l'eau, suffisamment proche pour y faire glisser une main, et les vues sur la corniche d'Assouan, le mausolée de l'Aga Khan rayonnant de blancheur sur sa colline, et les grandes dunes de sable doré de la rive ouest au loin valent déjà le déplacement avant même d'avoir posé le pied sur l'île.",

        steps: [{
          time: "08:00",
          description: "Rencontre avec votre guide au quai des felouques sur la corniche. Montée à bord de la felouque traditionnelle à voile."
        }, {
          time: "08:15",
          description: "Navigation à travers le Nil vers l'extrémité nord de l'île Éléphantine. Profitez des vues sur le front de mer d'Assouan, l'hôtel Mövenpick sur l'île et la rive ouest désertique."
        }, {
          time: "08:30",
          description: "Débarquement et début de la visite à pied. Premier arrêt : les ruines antiques du temple de Khnoum, à l'extrémité sud de l'île — l'un des plus anciens sites de temple en Égypte, dédié au dieu créateur à tête de bélier."
        }, {
          time: "09:15",
          description: "Visite du musée d'Assouan, qui abrite des objets découverts sur l'île, notamment des poteries, des statues et des objets allant de la période prédynastique à l'époque romaine."
        }, {
          time: "10:00",
          description: "Marche jusqu'au nilomètre antique — un escalier en pierre descendant vers le Nil, gravé d'échelles de mesure utilisées pendant des millénaires pour enregistrer les niveaux annuels des crues du fleuve et prévoir le rendement agricole et les taux d'imposition de l'Égypte."
        }, {
          time: "10:30",
          description: "Promenade à travers les villages nubiens vivants de Siou et Koti sur l'île — maisons aux couleurs vives, ruelles étroites et habitants locaux vaquant à leur quotidien offrent un véritable aperçu de la culture insulaire."
        }, {
          time: "11:30",
          description: "Retour au quai nord et embarquement sur la felouque pour la traversée de retour vers la corniche d'Assouan."
        }, {
          time: "12:00",
          description: "Arrivée au quai de la corniche. Fin de l'excursion."
        }]
      }],
      ru: [{
        day: 1,
        title: "Переправа на фелуке и исследование острова",
        description: "Остров Элефантина расположен посреди Нила прямо напротив набережной Асуана и был непрерывно заселён дольше, чем почти любое другое место на земле: слои поселений уходят в эпоху, предшествовавшую самому существованию Египта как единого царства. Его южная оконечность хранит одно из древнейших поселений в Египте, существовавшее за столетия до фараонов, а стратегическое положение сделало остров древним пограничным пунктом и торговыми воротами между Египтом и Африкой к югу от Сахары — местом, где слоновая кость, золото, экзотические животные и порабощённые люди когда-то переходили из одного мира в другой. Сегодня здесь можно провести одну из самых приятных и спокойных половин дня в Асуане — неспешную переправу на фелуке, прогулку по двум сохранившимся нубийским деревням, жители которых до сих пор говорят дома на нубийском языке, и посещение музея и древних памятников острова. Сама поездка на фелуке — это первое удовольствие: тишина паруса, наполняемого ветром, близость воды, до которой можно дотронуться рукой, и виды на набережную Асуана, мавзолей Ага-Хана, белеющий на холме, и огромные золотые дюны Западного берега вдали уже стоят этого путешествия, даже прежде чем вы ступите на остров.",

        steps: [{
          time: "08:00",
          description: "Встреча с гидом у причала для фелук на Корниш. Посадка на традиционную парусную фелуку."
        }, {
          time: "08:15",
          description: "Плавание через Нил к северной части острова Элефантина. Виды на набережную Асуана, отель Mövenpick на острове и пустынный Западный берег."
        }, {
          time: "08:30",
          description: "Высадка и начало пешеходной экскурсии. Первая остановка: древние руины храма Хнума на южной оконечности острова — одно из старейших мест расположения храмов в Египте, посвящённое богу-творцу с головой барана."
        }, {
          time: "09:15",
          description: "Посещение Асуанского музея, в котором хранятся артефакты, найденные на острове, включая керамику, статуи и предметы от додинастического до римского периода."
        }, {
          time: "10:00",
          description: "Прогулка к древнему Нилометру — каменной лестнице, спускающейся к Нилу, с вырезанными измерительными шкалами, использовавшимися на протяжении тысячелетий для записи уровней ежегодных разливов реки и прогнозирования урожайности и налоговых ставок в Египте."
        }, {
          time: "10:30",
          description: "Прогулка по живым нубийским деревням Сиу и Коти на острове — ярко окрашенные дома, узкие улочки и местные жители, занятые повседневными делами, дают подлинное представление о культуре острова."
        }, {
          time: "11:30",
          description: "Возвращение к северному причалу и посадка на фелуку для обратной переправы к набережной Асуана."
        }, {
          time: "12:00",
          description: "Прибытие к причалу на Корниш. Окончание тура."
        }]
      }],
      de: [{
        day: 1,
        title: "Felucca-Überfahrt & Inselerkundung",
        description: "Die Elephantine-Insel liegt mitten im Nil, direkt vor der Corniche von Assuan, und ist länger durchgehend bewohnt als fast jeder andere Ort auf der Erde — ihre Siedlungsschichten reichen zurück bis in eine Zeit, bevor Ägypten selbst als vereintes Königreich existierte. An ihrer Südspitze befindet sich eine der ältesten Siedlungen Ägyptens, die den Pharaonen um Jahrhunderte vorausging, und ihre strategische Lage machte sie zum antiken Grenzposten und Handelstor zwischen Ägypten und dem subsaharischen Afrika — dem Ort, an dem einst Elfenbein, Gold, exotische Tiere und versklavte Menschen von einer Welt in die andere gelangten. Heute bietet sie eines der angenehmsten und friedlichsten Halbtageserlebnisse in Assuan — eine sanfte Felucca-Überfahrt, einen Spaziergang durch zwei erhaltene nubische Dörfer, deren Bewohner zu Hause noch immer die nubische Sprache sprechen, und einen Besuch des Inselmuseums und der antiken Stätten. Die Felucca-Fahrt selbst ist schon der erste Genuss: die Stille des Segels, das den Wind einfängt, die Nähe zum Wasser, nah genug, um eine Hand über die Oberfläche gleiten zu lassen, und die Ausblicke auf die Corniche von Assuan, das weiß leuchtende Aga-Khan-Mausoleum auf seinem Hügel und die großen goldenen Sanddünen des Westufers in der Ferne sind die Fahrt schon wert, bevor Sie überhaupt einen Fuß auf die Insel gesetzt haben.",

        steps: [{
          time: "08:00",
          description: "Treffen mit Ihrem Reiseleiter an der Felucca-Anlegestelle an der Corniche. Einstieg in das traditionelle Felucca-Segelboot."
        }, {
          time: "08:15",
          description: "Überfahrt über den Nil zum nördlichen Ende der Elephantine-Insel. Genießen Sie die Ausblicke auf die Uferpromenade von Assuan, das Mövenpick-Hotel auf der Insel und das wüstenartige Westufer."
        }, {
          time: "08:30",
          description: "Anlegen und Beginn der Wandertour. Erster Stopp: die antiken Ruinen des Khnum-Tempels an der Südspitze der Insel — eine der ältesten Tempelstätten Ägyptens, dem widderköpfigen Schöpfergott gewidmet."
        }, {
          time: "09:15",
          description: "Besuch des Assuan-Museums, das auf der Insel entdeckte Artefakte beherbergt, darunter Keramik, Statuen und Objekte von der vordynastischen bis zur römischen Zeit."
        }, {
          time: "10:00",
          description: "Spaziergang zum antiken Nilmesser — einer in Stein gehauenen Treppe, die zum Nil hinabführt und mit Messskalen versehen ist, die über Jahrtausende genutzt wurden, um die jährlichen Hochwasserstände des Flusses zu erfassen und Ägyptens landwirtschaftlichen Ertrag sowie die Steuersätze vorherzusagen."
        }, {
          time: "10:30",
          description: "Spaziergang durch die lebendigen nubischen Dörfer Siou und Koti auf der Insel — bunt bemalte Häuser, enge Gassen und Einheimische bei ihrem Alltag bieten einen authentischen Einblick in die Inselkultur."
        }, {
          time: "11:30",
          description: "Rückkehr zur nördlichen Anlegestelle und Einstieg in die Felucca für die Rückfahrt zur Corniche von Assuan."
        }, {
          time: "12:00",
          description: "Ankunft an der Anlegestelle der Corniche. Ende der Tour."
        }]
      }]
    },
  },
  {
    title: "Abu Simbel Day Trip",
    slug: "abu-simbel-day-trip-aswan",
    description:
      "Journey deep into the Egyptian south to witness one of the most awe-inspiring monuments ever built — the twin temples of Abu Simbel, a destination so remote and so monumental that simply reaching it feels like an expedition in its own right. Carved into the mountainside by Ramses II over 3,000 years ago, these colossal temples were built not merely as places of worship but as unmistakable declarations of divine power, designed to be the first and most overwhelming sight that greeted anyone approaching Egypt from the south. They were famously relocated in the 1960s in a UNESCO-led rescue operation considered one of the greatest feats of archaeological engineering in history, lifted in more than 2,000 individual blocks and reassembled on higher ground to save them from the rising waters of Lake Nasser. The Great Temple of Ramses II, guarded by four enormous seated statues each as tall as a six-story building, and the smaller but equally graceful Temple of Nefertari are among the most breathtaking sights in all of Egypt, a destination that rewards the long desert drive many times over the moment the temples first come into view.",
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
      es: "El lobby de su hotel en Asuán. El guía se reunirá con usted en las primeras horas para el viaje hacia el sur, a Abu Simbel.",
      pt: "O lobby do seu hotel em Assuão. O guia irá encontrá-lo nas primeiras horas para o trajeto ao sul, até Abu Simbel.",
      it: "La hall del vostro hotel ad Assuan. La guida vi incontrerà nelle prime ore del mattino per il viaggio verso sud, fino ad Abu Simbel.",
      fr: "Le hall de votre hôtel à Assouan. Le guide vous rejoindra aux premières heures pour le trajet vers le sud, jusqu'à Abou Simbel.",
      ru: "Лобби вашего отеля в Асуане. Гид встретит вас в ранние часы для поездки на юг, в Абу-Симбел.",
      de: "Die Lobby Ihres Hotels in Assuan. Der Reiseleiter trifft Sie in den frühen Morgenstunden für die Fahrt nach Süden, nach Abu Simbel."
    },
    accessibility: {
      en: "Abu Simbel involves walking on sand and uneven ground outside the temples, and ducking through low doorways inside. Not suitable for guests with severe mobility issues. The interior chambers can feel enclosed.",
      es: "Abu Simbel implica caminar sobre arena y terreno irregular fuera de los templos, y agacharse para pasar por puertas bajas en el interior. No es adecuado para huéspedes con problemas graves de movilidad. Las cámaras interiores pueden sentirse cerradas.",
      pt: "Abu Simbel envolve caminhar sobre areia e terreno irregular do lado de fora dos templos, e abaixar-se para passar por portas baixas no interior. Não é adequado para hóspedes com problemas graves de mobilidade. As câmaras internas podem parecer fechadas.",
      it: "Abu Simbel comporta camminare su sabbia e terreno irregolare all'esterno dei templi, e chinarsi per passare attraverso porte basse all'interno. Non adatto agli ospiti con gravi problemi di mobilità. Le camere interne possono risultare claustrofobiche.",
      fr: "Abou Simbel implique de marcher sur du sable et un terrain irrégulier à l'extérieur des temples, et de se baisser pour passer par des portes basses à l'intérieur. Ne convient pas aux personnes ayant de graves problèmes de mobilité. Les chambres intérieures peuvent sembler exiguës.",
      ru: "Посещение Абу-Симбела предполагает ходьбу по песку и неровной местности снаружи храмов, а также наклоны при прохождении через низкие проёмы внутри. Не подходит для гостей с серьёзными проблемами с подвижностью. Внутренние камеры могут показаться тесными.",
      de: "Abu Simbel beinhaltet das Gehen auf Sand und unebenem Gelände außerhalb der Tempel sowie das Bücken durch niedrige Türöffnungen im Inneren. Nicht geeignet für Gäste mit starken Mobilitätseinschränkungen. Die Innenräume können sich beengt anfühlen."
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun hat and high SPF sunscreen", "Water (plenty — the desert is extreme)", "Light breakfast snacks for the early drive", "Camera", "Warm layer for the pre-dawn departure"],
      es: [
        "Zapatos cómodos para caminar",
        "Sombrero y protector solar de alto FPS",
        "Agua (en abundancia: el desierto es extremo)",
        "Snacks ligeros para el viaje matutino",
        "Cámara",
        "Una capa abrigada para la salida antes del amanecer"
      ],
      pt: [
        "Sapatos confortáveis para caminhar",
        "Chapéu e protetor solar de alto FPS",
        "Água (em abundância — o deserto é extremo)",
        "Lanches leves para o trajeto matinal",
        "Câmera fotográfica",
        "Camada quente para a saída antes do amanhecer"
      ],
      it: [
        "Scarpe comode da camminata",
        "Cappello e crema solare ad alta protezione",
        "Acqua (abbondante — il deserto è estremo)",
        "Snack leggeri per il viaggio di prima mattina",
        "Macchina fotografica",
        "Uno strato caldo per la partenza prima dell'alba"
      ],
      fr: [
        "Chaussures de marche confortables",
        "Chapeau et crème solaire à indice élevé",
        "Eau (en abondance — le désert est extrême)",
        "Collations légères pour le trajet matinal",
        "Appareil photo",
        "Une couche chaude pour le départ avant l'aube"
      ],
      ru: [
        "Удобная обувь для ходьбы",
        "Шляпа от солнца и солнцезащитный крем с высоким SPF",
        "Вода (в большом количестве — пустыня очень суровая)",
        "Лёгкие закуски для раннего выезда",
        "Фотоаппарат",
        "Тёплая вещь для выезда перед рассветом"
      ],
      de: [
        "Bequeme Wanderschuhe",
        "Sonnenhut und Sonnenschutz mit hohem Lichtschutzfaktor",
        "Wasser (reichlich — die Wüste ist extrem)",
        "Leichte Snacks für die frühe Fahrt",
        "Kamera",
        "Warme Schicht für die Abfahrt vor Sonnenaufgang"
      ]
    },
    importantInfo: {
      en: [
        "Departure is very early — typically between 04:00 and 05:00 — to travel in convoy as required by Egyptian authorities.",
        "The drive from Aswan to Abu Simbel is approximately 3 hours each way through the desert.",
        "Abu Simbel is a UNESCO World Heritage Site; entry is strictly regulated.",
        "The temples align with the sun twice a year (February 22 and October 22) — these dates are busier and prices may vary.",
        "Photography inside the temples is generally not permitted.",
      ],
      es: [
        "La salida es muy temprana, normalmente entre las 04:00 y las 05:00, para viajar en convoy según lo exigen las autoridades egipcias.",
        "El trayecto de Asuán a Abu Simbel es de aproximadamente 3 horas por trayecto, a través del desierto.",
        "Abu Simbel es Patrimonio de la Humanidad de la UNESCO; el acceso está estrictamente regulado.",
        "Los templos se alinean con el sol dos veces al año (22 de febrero y 22 de octubre); estas fechas son más concurridas y los precios pueden variar.",
        "Por lo general, no se permite fotografiar dentro de los templos."
      ],
      pt: [
        "A partida é muito cedo — geralmente entre 04h00 e 05h00 — para viajar em comboio, conforme exigido pelas autoridades egípcias.",
        "O trajeto de Assuão a Abu Simbel dura aproximadamente 3 horas em cada sentido, através do deserto.",
        "Abu Simbel é Patrimônio Mundial da UNESCO; a entrada é estritamente regulamentada.",
        "Os templos se alinham com o sol duas vezes ao ano (22 de fevereiro e 22 de outubro) — essas datas são mais movimentadas e os preços podem variar.",
        "Geralmente não é permitido fotografar dentro dos templos."
      ],
      it: [
        "La partenza è molto presto — generalmente tra le 04:00 e le 05:00 — per viaggiare in convoglio come richiesto dalle autorità egiziane.",
        "Il tragitto da Assuan ad Abu Simbel dura circa 3 ore per tratta, attraverso il deserto.",
        "Abu Simbel è Patrimonio dell'Umanità UNESCO; l'accesso è strettamente regolamentato.",
        "I templi si allineano con il sole due volte l'anno (22 febbraio e 22 ottobre) — in queste date l'afflusso è maggiore e i prezzi possono variare.",
        "Generalmente non è consentito fotografare all'interno dei templi."
      ],
      fr: [
        "Le départ est très matinal — généralement entre 4 h 00 et 5 h 00 — afin de voyager en convoi, comme l'exigent les autorités égyptiennes.",
        "Le trajet d'Assouan à Abou Simbel dure environ 3 heures dans chaque sens, à travers le désert.",
        "Abou Simbel est un site classé au patrimoine mondial de l'UNESCO ; l'accès y est strictement réglementé.",
        "Les temples s'alignent avec le soleil deux fois par an (le 22 février et le 22 octobre) — ces dates sont plus fréquentées et les prix peuvent varier.",
        "La photographie à l'intérieur des temples n'est généralement pas autorisée."
      ],
      ru: [
        "Выезд очень ранний — как правило, между 04:00 и 05:00 — для движения колонной, как того требуют египетские власти.",
        "Путь от Асуана до Абу-Симбела занимает около 3 часов в одну сторону через пустыню.",
        "Абу-Симбел входит в список Всемирного наследия ЮНЕСКО; вход строго регулируется.",
        "Храмы выстраиваются по линии солнца два раза в год (22 февраля и 22 октября) — в эти даты больше посетителей, и цены могут отличаться.",
        "Фотографировать внутри храмов, как правило, не разрешается."
      ],
      de: [
        "Die Abfahrt erfolgt sehr früh — typischerweise zwischen 04:00 und 05:00 Uhr —, um wie von den ägyptischen Behörden vorgeschrieben im Konvoi zu fahren.",
        "Die Fahrt von Assuan nach Abu Simbel dauert jeweils etwa 3 Stunden durch die Wüste.",
        "Abu Simbel ist eine UNESCO-Welterbestätte; der Zugang ist streng geregelt.",
        "Die Tempel richten sich zweimal im Jahr nach der Sonne aus (22. Februar und 22. Oktober) — an diesen Terminen ist mehr Betrieb, und die Preise können variieren.",
        "Das Fotografieren im Inneren der Tempel ist im Allgemeinen nicht erlaubt."
      ]
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
            "Abu Simbel is not simply a monument — it is one of the defining experiences of ancient Egypt, and arguably the single most dramatic man-made sight on the African continent. The twin temples carved into the sandstone cliff above what is now Lake Nasser were built by Ramses II at the height of his power in the 13th century BC, designed not only as a place of worship but as an unmistakable declaration of divine kingship visible to all who approached from the south — a message of strength and permanence carved directly into the bones of the earth. When the Aswan High Dam was built and the waters began to rise in the 1960s, the international community mounted the greatest archaeological rescue operation in history: both temples were cut into over 2,000 individual blocks, some weighing up to 30 tons, and reassembled on higher ground, 65 meters above their original position, so precisely that the solar alignment inside the Great Temple — where twice a year the rising sun illuminates the sanctuary's innermost statues in a phenomenon that still draws crowds today — was preserved almost exactly, down to the angle of the light. The day begins long before dawn in Aswan, as the convoy south departs in the cool desert darkness, headlights cutting through a landscape of nothing but sand and stars. The 280-kilometer drive through the Western Desert is itself a remarkable journey — flat, silent, and immense, the kind of emptiness that makes the eventual sight of the temples at the water's edge feel almost like a mirage stepping into solid reality.",
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
      es: [{
        day: 1,
        title: "Viaje por el desierto y los templos de Ramsés II",
        description: "Abu Simbel no es simplemente un monumento: es una de las experiencias definitorias del antiguo Egipto, y posiblemente la vista hecha por el hombre más dramática de todo el continente africano. Los templos gemelos esculpidos en el acantilado de arenisca sobre lo que hoy es el lago Nasser fueron construidos por Ramsés II en el apogeo de su poder, en el siglo XIII a. C., diseñados no solo como un lugar de culto, sino como una declaración inequívoca de la realeza divina, visible para todos los que se acercaban desde el sur: un mensaje de fuerza y permanencia esculpido directamente en los huesos de la tierra. Cuando se construyó la Presa Alta de Asuán y las aguas comenzaron a subir en la década de 1960, la comunidad internacional emprendió la mayor operación de rescate arqueológico de la historia: ambos templos fueron cortados en más de 2,000 bloques individuales, algunos de hasta 30 toneladas, y reensamblados en terreno más elevado, 65 metros por encima de su posición original, con tal precisión que el alineamiento solar dentro del Gran Templo, donde dos veces al año el sol naciente ilumina las estatuas más profundas del santuario en un fenómeno que aún hoy atrae multitudes, se conservó casi exactamente, hasta el ángulo de la luz. El día comienza mucho antes del amanecer en Asuán, cuando el convoy hacia el sur parte en la fresca oscuridad del desierto, con los faros atravesando un paisaje de solo arena y estrellas. El trayecto de 280 kilómetros a través del desierto occidental es en sí mismo un viaje extraordinario: plano, silencioso e inmenso, el tipo de vacío que hace que la eventual vista de los templos a la orilla del agua se sienta casi como un espejismo que se convierte en realidad sólida.",

        steps: [{
          time: "04:00",
          description: "Recogida en el hotel en Asuán. Traslado al punto de salida del convoy."
        }, {
          time: "04:30",
          description: "El convoy sale hacia el sur por la carretera del desierto en dirección a Abu Simbel. Snacks ligeros disponibles durante el trayecto."
        }, {
          time: "07:30",
          description: "Llegada a Abu Simbel. Primera vista de las cuatro colosales estatuas sentadas de Ramsés II que custodian la fachada del Gran Templo."
        }, {
          time: "08:00",
          description: "Comienza la visita guiada. Párese frente al Gran Templo de Ramsés II: su guía explica las estatuas (cada una de 20 metros de altura), el fenómeno de alineamiento solar y la historia de la operación de rescate de la UNESCO."
        }, {
          time: "08:30",
          description: "Entrada al Gran Templo. Camine por la sala hipóstila con sus ocho pilares en forma de Osiris que llevan el rostro de Ramsés II, hasta la cámara santuario donde los cuatro dioses, Ramsés II, Amón, Ra-Horajty y Ptah, permanecen sentados en una oscuridad eterna."
        }, {
          time: "09:15",
          description: "Salida del Gran Templo y traslado al templo más pequeño de Nefertari, dedicado a la querida reina de Ramsés y a la diosa Hathor. Observe las seis colosales estatuas en pie de la fachada; de manera inusual, las estatuas de Nefertari tienen la misma altura que las del faraón."
        }, {
          time: "09:45",
          description: "Tiempo libre en el sitio. Camine para ver los templos desde diferentes ángulos, siéntese junto al lago y tome fotografías de este extraordinario paisaje."
        }, {
          time: "10:30",
          description: "Salida de Abu Simbel. Viaje de regreso del convoy hacia el norte, a Asuán."
        }, {
          time: "13:30",
          description: "Llegada de vuelta a Asuán. Traslado a su hotel. Fin del tour."
        }]
      }],
      pt: [{
        day: 1,
        title: "Viagem pelo deserto e os templos de Ramsés II",
        description: "Abu Simbel não é simplesmente um monumento — é uma das experiências definidoras do Egito Antigo, e possivelmente a visão construída pelo homem mais dramática de todo o continente africano. Os templos gêmeos esculpidos no penhasco de arenito sobre o que hoje é o Lago Nasser foram construídos por Ramsés II no auge de seu poder, no século XIII a.C., concebidos não apenas como um local de culto, mas como uma declaração inequívoca de realeza divina, visível para todos que se aproximavam pelo sul — uma mensagem de força e permanência esculpida diretamente nos ossos da terra. Quando a Grande Barragem de Assuão foi construída e as águas começaram a subir na década de 1960, a comunidade internacional realizou a maior operação de resgate arqueológico da história: ambos os templos foram cortados em mais de 2.000 blocos individuais, alguns pesando até 30 toneladas, e remontados em terreno mais elevado, 65 metros acima de sua posição original, com tanta precisão que o alinhamento solar dentro do Grande Templo — onde, duas vezes ao ano, o sol nascente ilumina as estátuas mais internas do santuário em um fenômeno que ainda atrai multidões hoje — foi preservado quase exatamente, até o ângulo da luz. O dia começa bem antes do amanhecer em Assuão, quando o comboio parte rumo ao sul na fresca escuridão do deserto, com os faróis cortando uma paisagem feita apenas de areia e estrelas. O trajeto de 280 quilômetros pelo Deserto Ocidental é, em si, uma jornada notável — plano, silencioso e imenso, o tipo de vazio que faz a eventual visão dos templos à beira da água parecer quase uma miragem tornando-se realidade sólida.",

        steps: [{
          time: "04:00",
          description: "Busca no hotel em Assuão. Traslado até o ponto de partida do comboio."
        }, {
          time: "04:30",
          description: "O comboio parte rumo ao sul pela estrada do deserto em direção a Abu Simbel. Lanches leves disponíveis durante o trajeto."
        }, {
          time: "07:30",
          description: "Chegada a Abu Simbel. Primeiro vislumbre das quatro estátuas colossais sentadas de Ramsés II que guardam a fachada do Grande Templo."
        }, {
          time: "08:00",
          description: "Início do tour guiado. Fique diante do Grande Templo de Ramsés II — seu guia explica as estátuas (cada uma com 20 metros de altura), o fenômeno do alinhamento solar e a história da operação de resgate da UNESCO."
        }, {
          time: "08:30",
          description: "Entrada no Grande Templo. Caminhe pelo Salão Hipostilo com seus oito pilares em forma de Osíris trazendo o rosto de Ramsés II, até a câmara santuário onde os quatro deuses — Ramsés II, Amon, Ra-Horakhty e Ptah — permanecem sentados em escuridão eterna."
        }, {
          time: "09:15",
          description: "Saída do Grande Templo e deslocamento até o templo menor de Nefertari, dedicado à amada rainha de Ramsés e à deusa Hathor. Observe as seis estátuas colossais em pé na fachada — de forma incomum, as estátuas de Nefertari têm a mesma altura das do faraó."
        }, {
          time: "09:45",
          description: "Tempo livre no local. Caminhe para ver os templos de diferentes ângulos, sente-se à beira do lago e tire fotografias desta paisagem extraordinária."
        }, {
          time: "10:30",
          description: "Partida de Abu Simbel. Viagem de retorno do comboio rumo ao norte, até Assuão."
        }, {
          time: "13:30",
          description: "Chegada de volta a Assuão. Traslado até seu hotel. Fim do tour."
        }]
      }],
      it: [{
        day: 1,
        title: "Viaggio nel deserto e i templi di Ramses II",
        description: "Abu Simbel non è semplicemente un monumento — è una delle esperienze più rappresentative dell'antico Egitto, e probabilmente la vista costruita dall'uomo più spettacolare di tutto il continente africano. I due templi gemelli scolpiti nella scogliera di arenaria sopra quello che oggi è il Lago Nasser furono costruiti da Ramses II all'apice del suo potere, nel XIII secolo a.C., concepiti non solo come luogo di culto ma come un'inequivocabile dichiarazione di regalità divina, visibile a chiunque si avvicinasse da sud — un messaggio di forza e permanenza scolpito direttamente nelle ossa della terra. Quando fu costruita la Grande Diga di Assuan e le acque iniziarono a salire negli anni '60, la comunità internazionale organizzò la più grande operazione di salvataggio archeologico della storia: entrambi i templi furono tagliati in oltre 2.000 blocchi singoli, alcuni dei quali fino a 30 tonnellate, e ricomposti su un terreno più alto, 65 metri sopra la loro posizione originale, con una precisione tale che l'allineamento solare all'interno del Grande Tempio — dove due volte l'anno il sole nascente illumina le statue più interne del santuario in un fenomeno che ancora oggi attira folle — fu preservato quasi esattamente, persino nell'angolazione della luce. La giornata inizia molto prima dell'alba ad Assuan, quando il convoglio parte verso sud nella fresca oscurità del deserto, con i fari che tagliano un paesaggio fatto solo di sabbia e stelle. Il tragitto di 280 chilometri attraverso il Deserto Occidentale è di per sé un viaggio straordinario — piatto, silenzioso e immenso, il tipo di vuoto che rende la vista finale dei templi sulla riva del lago quasi un miraggio che diventa realtà concreta.",

        steps: [{
          time: "04:00",
          description: "Ritiro in hotel ad Assuan. Trasferimento al punto di partenza del convoglio."
        }, {
          time: "04:30",
          description: "Il convoglio parte verso sud lungo la strada del deserto in direzione di Abu Simbel. Snack leggeri disponibili durante il tragitto."
        }, {
          time: "07:30",
          description: "Arrivo ad Abu Simbel. Primo sguardo alle quattro colossali statue sedute di Ramses II a guardia della facciata del Grande Tempio."
        }, {
          time: "08:00",
          description: "Inizia la visita guidata. Fermatevi davanti al Grande Tempio di Ramses II — la guida spiega le statue (ognuna alta 20 metri), il fenomeno dell'allineamento solare e la storia dell'operazione di salvataggio dell'UNESCO."
        }, {
          time: "08:30",
          description: "Ingresso nel Grande Tempio. Camminate attraverso la Sala Ipostila con i suoi otto pilastri a forma di Osiride che portano il volto di Ramses II, fino alla camera del santuario dove i quattro dèi — Ramses II, Amon, Ra-Horakhty e Ptah — siedono nell'oscurità eterna."
        }, {
          time: "09:15",
          description: "Uscita dal Grande Tempio e spostamento verso il più piccolo Tempio di Nefertari, dedicato all'amata regina di Ramses e alla dea Hathor. Osservate le sei colossali statue in piedi sulla facciata — in modo insolito, le statue di Nefertari hanno la stessa altezza di quelle del faraone."
        }, {
          time: "09:45",
          description: "Tempo libero presso il sito. Passeggiate per vedere i templi da diverse angolazioni, sedetevi vicino al lago e scattate fotografie di questo straordinario paesaggio."
        }, {
          time: "10:30",
          description: "Partenza da Abu Simbel. Viaggio di ritorno del convoglio verso nord, ad Assuan."
        }, {
          time: "13:30",
          description: "Arrivo di ritorno ad Assuan. Trasferimento al vostro hotel. Fine del tour."
        }]
      }],
      fr: [{
        day: 1,
        title: "Traversée du désert et les temples de Ramsès II",
        description: "Abou Simbel n'est pas simplement un monument — c'est l'une des expériences les plus marquantes de l'Égypte antique, et sans doute le site bâti par l'homme le plus spectaculaire de tout le continent africain. Les deux temples jumeaux sculptés dans la falaise de grès au-dessus de ce qui est aujourd'hui le lac Nasser ont été construits par Ramsès II à l'apogée de son pouvoir, au XIIIe siècle av. J.-C., conçus non seulement comme un lieu de culte mais comme une déclaration sans équivoque de royauté divine, visible par tous ceux qui s'approchaient depuis le sud — un message de force et de permanence gravé directement dans la roche de la terre. Lorsque le Haut Barrage d'Assouan a été construit et que les eaux ont commencé à monter dans les années 1960, la communauté internationale a mené la plus grande opération de sauvetage archéologique de l'histoire : les deux temples ont été découpés en plus de 2 000 blocs individuels, certains pesant jusqu'à 30 tonnes, puis réassemblés sur un terrain plus élevé, 65 mètres au-dessus de leur position d'origine, avec une telle précision que l'alignement solaire à l'intérieur du Grand Temple — où, deux fois par an, le soleil levant illumine les statues les plus reculées du sanctuaire, un phénomène qui attire encore les foules aujourd'hui — a été préservé presque exactement, jusqu'à l'angle de la lumière. La journée commence bien avant l'aube à Assouan, lorsque le convoi part vers le sud dans l'obscurité fraîche du désert, les phares perçant un paysage fait uniquement de sable et d'étoiles. Le trajet de 280 kilomètres à travers le désert occidental est en lui-même un voyage remarquable — plat, silencieux et immense, le genre de vide qui rend la vision finale des temples au bord de l'eau presque semblable à un mirage devenant réalité tangible.",

        steps: [{
          time: "04:00",
          description: "Prise en charge à l'hôtel à Assouan. Transfert vers le point de départ du convoi."
        }, {
          time: "04:30",
          description: "Le convoi part vers le sud le long de l'autoroute du désert en direction d'Abou Simbel. Collations légères disponibles pendant le trajet."
        }, {
          time: "07:30",
          description: "Arrivée à Abou Simbel. Premier aperçu des quatre statues colossales assises de Ramsès II gardant la façade du Grand Temple."
        }, {
          time: "08:00",
          description: "Début de la visite guidée. Tenez-vous devant le Grand Temple de Ramsès II — votre guide explique les statues (chacune de 20 mètres de hauteur), le phénomène d'alignement solaire et l'histoire de l'opération de sauvetage de l'UNESCO."
        }, {
          time: "08:30",
          description: "Entrée dans le Grand Temple. Traversez la salle hypostyle avec ses huit piliers en forme d'Osiris portant le visage de Ramsès II, jusqu'à la chambre du sanctuaire où les quatre dieux — Ramsès II, Amon, Râ-Horakhty et Ptah — siègent dans une obscurité éternelle."
        }, {
          time: "09:15",
          description: "Sortie du Grand Temple et déplacement vers le plus petit Temple de Néfertari, dédié à la reine bien-aimée de Ramsès et à la déesse Hathor. Observez les six statues colossales debout sur la façade — chose inhabituelle, les statues de Néfertari ont la même hauteur que celles du pharaon."
        }, {
          time: "09:45",
          description: "Temps libre sur le site. Promenez-vous pour voir les temples sous différents angles, asseyez-vous au bord du lac et photographiez ce paysage extraordinaire."
        }, {
          time: "10:30",
          description: "Départ d'Abou Simbel. Trajet de retour du convoi vers le nord, jusqu'à Assouan."
        }, {
          time: "13:30",
          description: "Retour à Assouan. Transfert vers votre hôtel. Fin de l'excursion."
        }]
      }],
      ru: [{
        day: 1,
        title: "Поездка через пустыню и храмы Рамсеса II",
        description: "Абу-Симбел — это не просто памятник, это одно из самых значимых впечатлений от древнего Египта и, возможно, самое впечатляющее рукотворное зрелище на всём африканском континенте. Парные храмы, вырезанные в песчаниковом утёсе над тем, что сегодня является озером Насер, были построены Рамсесом II на пике его могущества в XIII веке до н.э., задуманные не только как место богослужения, но и как безошибочное заявление о божественной царской власти, видимое всем, кто приближался с юга — послание силы и постоянства, вырезанное прямо в костях земли. Когда была построена Асуанская высотная плотина и в 1960-х годах воды начали подниматься, международное сообщество провело крупнейшую в истории археологическую спасательную операцию: оба храма были разрезаны на более чем 2000 отдельных блоков, некоторые весом до 30 тонн, и собраны заново на более высоком месте, на 65 метров выше первоначального положения, причём настолько точно, что солнечное выравнивание внутри Большого храма — где два раза в год восходящее солнце освещает самые внутренние статуи святилища в феномене, до сих пор привлекающем толпы, — было сохранено почти в точности, вплоть до угла падения света. День начинается задолго до рассвета в Асуане, когда колонна отправляется на юг в прохладной темноте пустыни, а фары прорезают пейзаж, состоящий лишь из песка и звёзд. Путь длиной 280 километров через Западную пустыню сам по себе является удивительным путешествием — плоским, тихим и необъятным, той пустотой, которая делает финальный вид храмов на берегу воды похожим на мираж, превращающийся в твёрдую реальность.",

        steps: [{
          time: "04:00",
          description: "Трансфер из отеля в Асуане. Доставка к точке отправления колонны."
        }, {
          time: "04:30",
          description: "Колонна отправляется на юг по пустынному шоссе в направлении Абу-Симбела. Во время поездки доступны лёгкие закуски."
        }, {
          time: "07:30",
          description: "Прибытие в Абу-Симбел. Первый взгляд на четыре колоссальные сидящие статуи Рамсеса II, охраняющие фасад Большого храма."
        }, {
          time: "08:00",
          description: "Начало экскурсии с гидом. Остановка перед Большим храмом Рамсеса II — гид расскажет о статуях (каждая высотой 20 метров), феномене солнечного выравнивания и истории спасательной операции ЮНЕСКО."
        }, {
          time: "08:30",
          description: "Вход в Большой храм. Прогулка через гипостильный зал с восемью пилонами в форме Осириса, несущими лицо Рамсеса II, до камеры святилища, где четыре бога — Рамсес II, Амон, Ра-Хорахти и Птах — сидят в вечной темноте."
        }, {
          time: "09:15",
          description: "Выход из Большого храма и переход к меньшему храму Нефертари, посвящённому любимой царице Рамсеса и богине Хатхор. Рассмотрите шесть колоссальных стоящих статуй на фасаде — необычно, что статуи Нефертари имеют ту же высоту, что и статуи фараона."
        }, {
          time: "09:45",
          description: "Свободное время на месте. Прогулка для осмотра храмов с разных ракурсов, отдых у озера и фотографирование этого удивительного ландшафта."
        }, {
          time: "10:30",
          description: "Отъезд из Абу-Симбела. Обратный путь колонны на север, в Асуан."
        }, {
          time: "13:30",
          description: "Прибытие обратно в Асуан. Трансфер в ваш отель. Окончание тура."
        }]
      }],
      de: [{
        day: 1,
        title: "Wüstenfahrt & die Tempel von Ramses II.",
        description: "Abu Simbel ist nicht einfach nur ein Denkmal — es ist eines der prägendsten Erlebnisse des alten Ägypten und wohl der dramatischste von Menschenhand geschaffene Anblick auf dem gesamten afrikanischen Kontinent. Die beiden Zwillingstempel, die in die Sandsteinklippe über dem heutigen Nassersee gehauen wurden, wurden von Ramses II. auf dem Höhepunkt seiner Macht im 13. Jahrhundert v. Chr. erbaut — konzipiert nicht nur als Ort der Verehrung, sondern als unmissverständliche Erklärung göttlichen Königtums, sichtbar für alle, die sich von Süden näherten — eine Botschaft von Stärke und Beständigkeit, direkt in das Gestein der Erde gemeißelt. Als der Assuan-Staudamm gebaut wurde und die Wasser in den 1960er-Jahren zu steigen begannen, organisierte die internationale Gemeinschaft die größte archäologische Rettungsaktion der Geschichte: Beide Tempel wurden in über 2.000 einzelne Blöcke geschnitten, einige davon bis zu 30 Tonnen schwer, und auf höher gelegenem Gelände, 65 Meter über ihrer ursprünglichen Position, wieder zusammengesetzt — so präzise, dass die Sonnenausrichtung im Inneren des Großen Tempels, bei der zweimal im Jahr die aufgehende Sonne die innersten Statuen des Heiligtums in einem bis heute Menschenmengen anziehenden Phänomen erleuchtet, fast exakt erhalten blieb, bis hin zum Winkel des Lichts. Der Tag beginnt lange vor Sonnenaufgang in Assuan, wenn der Konvoi in der kühlen Dunkelheit der Wüste nach Süden aufbricht, die Scheinwerfer durchschneiden eine Landschaft aus nichts als Sand und Sternen. Die 280 Kilometer lange Fahrt durch die Westliche Wüste ist selbst eine bemerkenswerte Reise — flach, still und gewaltig, jene Art von Leere, die den schließlichen Anblick der Tempel am Wasserrand fast wie eine Fata Morgana erscheinen lässt, die zu fester Realität wird.",

        steps: [{
          time: "04:00",
          description: "Hotelabholung in Assuan. Transfer zum Abfahrtspunkt des Konvois."
        }, {
          time: "04:30",
          description: "Der Konvoi fährt entlang der Wüstenstraße nach Süden in Richtung Abu Simbel ab. Leichte Snacks während der Fahrt erhältlich."
        }, {
          time: "07:30",
          description: "Ankunft in Abu Simbel. Erster Blick auf die vier kolossalen, sitzenden Statuen von Ramses II., die die Fassade des Großen Tempels bewachen."
        }, {
          time: "08:00",
          description: "Die geführte Tour beginnt. Stehen Sie vor dem Großen Tempel von Ramses II. — Ihr Reiseleiter erklärt die Statuen (jede 20 Meter hoch), das Phänomen der Sonnenausrichtung und die Geschichte der UNESCO-Rettungsaktion."
        }, {
          time: "08:30",
          description: "Eintritt in den Großen Tempel. Gehen Sie durch den Säulensaal mit seinen acht osirisförmigen Pfeilern, die das Gesicht von Ramses II. tragen, hinein in die Heiligtumskammer, wo die vier Götter — Ramses II., Amun, Re-Harachte und Ptah — in ewiger Dunkelheit sitzen."
        }, {
          time: "09:15",
          description: "Verlassen des Großen Tempels und Weiterfahrt zum kleineren Tempel der Nefertari, der der geliebten Königin von Ramses und der Göttin Hathor gewidmet ist. Betrachten Sie die sechs kolossalen stehenden Statuen an der Fassade — ungewöhnlich ist, dass die Statuen der Nefertari dieselbe Höhe haben wie die des Pharaos."
        }, {
          time: "09:45",
          description: "Freizeit an der Stätte. Spazieren Sie umher, um die Tempel aus verschiedenen Blickwinkeln zu sehen, setzen Sie sich an den See und fotografieren Sie diese außergewöhnliche Landschaft."
        }, {
          time: "10:30",
          description: "Abfahrt von Abu Simbel. Rückfahrt des Konvois nach Norden, nach Assuan."
        }, {
          time: "13:30",
          description: "Rückkehr nach Assuan. Transfer zu Ihrem Hotel. Ende der Tour."
        }]
      }]
    },
  },
  {
    title: "2-Day Abu Simbel Tour + Light and Sound Show",
    slug: "2-day-abu-simbel-tour-light-sound-show-aswan",
    description:
      "Experience the full magic of Abu Simbel on this relaxed 2-day tour that lets you avoid the early morning rush entirely, trading the standard 4 a.m. convoy departure for a civilized mid-morning start and a far deeper, more contemplative encounter with one of the ancient world's most overwhelming sights. Arrive in Abu Simbel at your own pace and spend quality time exploring the magnificent temples of Ramses II and Nefertari with a knowledgeable guide, free from the pressure of a ticking clock or a queue of buses waiting outside. As night falls, stay on for the spectacular light and sound show, where the temples are dramatically illuminated and the story of Ramses II — his battles, his queens, his obsession with eternal legacy — unfolds in an unforgettable performance against the very stone he commanded to be carved. Overnight accommodation in Abu Simbel is included, granting you something almost no day-tripper ever gets: a second visit the following morning, when the temples are wrapped in stillness and the desert light turns the sandstone facade to gold.",
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
      es: "El lobby de su hotel en Asuán. El guía se reunirá con usted por la mañana para el viaje a Abu Simbel.",
      pt: "O lobby do seu hotel em Assuão. O guia irá encontrá-lo de manhã para o trajeto até Abu Simbel.",
      it: "La hall del vostro hotel ad Assuan. La guida vi incontrerà al mattino per il viaggio verso Abu Simbel.",
      fr: "Le hall de votre hôtel à Assouan. Le guide vous rejoindra le matin pour le trajet vers Abou Simbel.",
      ru: "Лобби вашего отеля в Асуане. Гид встретит вас утром для поездки в Абу-Симбел.",
      de: "Die Lobby Ihres Hotels in Assuan. Der Reiseleiter trifft Sie morgens für die Fahrt nach Abu Simbel."
    },
    accessibility: {
      en: "Involves walking on sand and uneven terrain. Low doorways inside the temples require ducking. Not suitable for guests with severe mobility issues.",
      es: "Implica caminar sobre arena y terreno irregular. Las puertas bajas dentro de los templos requieren agacharse. No es adecuado para huéspedes con problemas graves de movilidad.",
      pt: "Envolve caminhar sobre areia e terreno irregular. Portas baixas dentro dos templos exigem que você se abaixe. Não é adequado para hóspedes com problemas graves de mobilidade.",
      it: "Prevede di camminare su sabbia e terreno irregolare. Le porte basse all'interno dei templi richiedono di chinarsi. Non adatto agli ospiti con gravi problemi di mobilità.",
      fr: "Implique de marcher sur du sable et un terrain irrégulier. Les portes basses à l'intérieur des temples nécessitent de se baisser. Ne convient pas aux personnes ayant de graves problèmes de mobilité.",
      ru: "Предполагает ходьбу по песку и неровной местности. Низкие проёмы внутри храмов требуют наклона. Не подходит для гостей с серьёзными проблемами с подвижностью.",
      de: "Beinhaltet das Gehen auf Sand und unebenem Gelände. Niedrige Türöffnungen im Inneren der Tempel erfordern das Bücken. Nicht geeignet für Gäste mit starken Mobilitätseinschränkungen."
    },
    whatToBring: {
      en: ["Overnight bag with essentials", "Comfortable walking shoes", "Sun protection", "Water", "Camera", "Light evening layer for the sound and light show"],
      es: [
        "Bolsa de viaje con artículos esenciales para pasar la noche",
        "Zapatos cómodos para caminar",
        "Protección solar",
        "Agua",
        "Cámara",
        "Capa ligera para la noche, para el espectáculo de luz y sonido"
      ],
      pt: [
        "Bolsa de pernoite com itens essenciais",
        "Sapatos confortáveis para caminhar",
        "Proteção solar",
        "Água",
        "Câmera fotográfica",
        "Camada leve para a noite, para o espetáculo de som e luz"
      ],
      it: [
        "Borsa per il pernottamento con gli articoli essenziali",
        "Scarpe comode da camminata",
        "Protezione solare",
        "Acqua",
        "Macchina fotografica",
        "Strato leggero per la serata, per lo spettacolo di luci e suoni"
      ],
      fr: [
        "Sac de voyage avec les essentiels pour la nuit",
        "Chaussures de marche confortables",
        "Protection solaire",
        "Eau",
        "Appareil photo",
        "Couche légère pour la soirée, pour le spectacle son et lumière"
      ],
      ru: [
        "Сумка для ночёвки с необходимыми вещами",
        "Удобная обувь для ходьбы",
        "Солнцезащитные средства",
        "Вода",
        "Фотоаппарат",
        "Лёгкая вещь на вечер для шоу света и звука"
      ],
      de: [
        "Übernachtungstasche mit dem Nötigsten",
        "Bequeme Wanderschuhe",
        "Sonnenschutz",
        "Wasser",
        "Kamera",
        "Leichte Schicht für den Abend, für die Licht- und Tonshow"
      ]
    },
    importantInfo: {
      en: [
        "This tour travels outside the mandatory convoy hours, allowing a more relaxed pace — ideal for photographers and those who want extra time at the temples.",
        "Overnight accommodation in Abu Simbel is in a comfortable hotel close to the temples.",
        "Breakfast on Day 2 is included; other meals are at your own expense.",
        "Photography is not permitted inside the temples.",
      ],
      es: [
        "Este tour viaja fuera del horario obligatorio de convoy, lo que permite un ritmo más relajado, ideal para fotógrafos y quienes desean más tiempo en los templos.",
        "El alojamiento nocturno en Abu Simbel es en un hotel cómodo cerca de los templos.",
        "El desayuno del día 2 está incluido; las demás comidas son a su propio cargo.",
        "No se permite fotografiar dentro de los templos."
      ],
      pt: [
        "Este tour viaja fora do horário obrigatório de comboio, permitindo um ritmo mais relaxado — ideal para fotógrafos e para quem deseja mais tempo nos templos.",
        "A hospedagem noturna em Abu Simbel é em um hotel confortável próximo aos templos.",
        "O café da manhã do dia 2 está incluído; as demais refeições são por conta própria.",
        "Não é permitido fotografar dentro dos templos."
      ],
      it: [
        "Questo tour viaggia fuori dagli orari obbligatori del convoglio, consentendo un ritmo più rilassato — ideale per i fotografi e per chi desidera più tempo ai templi.",
        "Il pernottamento ad Abu Simbel avviene in un comodo hotel vicino ai templi.",
        "La colazione del giorno 2 è inclusa; gli altri pasti sono a proprio carico.",
        "Non è consentito fotografare all'interno dei templi."
      ],
      fr: [
        "Cette excursion se déroule en dehors des horaires obligatoires de convoi, ce qui permet un rythme plus détendu — idéal pour les photographes et ceux qui souhaitent passer plus de temps aux temples.",
        "L'hébergement de nuit à Abou Simbel se fait dans un hôtel confortable proche des temples.",
        "Le petit-déjeuner du jour 2 est inclus ; les autres repas sont à votre charge.",
        "La photographie n'est pas autorisée à l'intérieur des temples."
      ],
      ru: [
        "Этот тур проходит за пределами обязательных часов колонны, что позволяет двигаться в более спокойном темпе — идеально для фотографов и тех, кто хочет провести больше времени у храмов.",
        "Ночёвка в Абу-Симбеле проходит в комфортабельном отеле рядом с храмами.",
        "Завтрак во 2-й день включён; остальные приёмы пищи оплачиваются самостоятельно.",
        "Фотографировать внутри храмов не разрешается."
      ],
      de: [
        "Diese Tour fährt außerhalb der vorgeschriebenen Konvoizeiten, was ein entspannteres Tempo ermöglicht — ideal für Fotografen und alle, die mehr Zeit an den Tempeln verbringen möchten.",
        "Die Übernachtung in Abu Simbel erfolgt in einem komfortablen Hotel in der Nähe der Tempel.",
        "Das Frühstück am 2. Tag ist inbegriffen; weitere Mahlzeiten gehen auf eigene Kosten.",
        "Das Fotografieren im Inneren der Tempel ist nicht erlaubt."
      ]
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
            "Unlike the standard dawn convoy, this tour departs Aswan mid-morning, transforming the drive into a relaxed desert journey rather than a pre-dawn dash through darkness. By the time you arrive at Abu Simbel in the early afternoon, the day-trip crowds that arrived at dawn have largely departed, the parking lots emptying out as buses head back north, and you'll have the temples in relative peace, the desert quiet settling back over the site. Your guide takes you through both the Great Temple of Ramses II and the Temple of Nefertari at an unhurried pace, explaining not just the monuments themselves but the extraordinary story of how they were saved — and the human drama of the archaeologists, engineers, and workers who disassembled and reassembled them block by block over four years of painstaking labor, racing against a rising waterline that gave no quarter. As evening falls, the site transforms once more: the tourists are gone, the desert silence returns almost completely, and then the sound and light show begins — colors sweeping the ancient stone in slow waves, and the voice of Ramses II, or at least the voice given to him by the show's narration, rolling across the still water of Lake Nasser into the surrounding dark.",
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
            "One of the great privileges of staying overnight at Abu Simbel is the morning — before the convoy from Aswan arrives, rumbling in across the desert in a long line of headlights, the temples belong entirely to you. Rise early and return to the site as the sun climbs above the desert horizon, casting the great statues of Ramses II in long golden light that seems to set the sandstone itself on fire, the shadows stretching dramatically across the facade in a way that no midday photograph can ever capture. This is when photographers and those who simply want to feel the full weight of the place come into their own, standing in near-total silence before monuments built to be seen exactly like this. After breakfast at the hotel, your guide will return you to the temples for any final time before the drive north back to Aswan, the desert highway unspooling behind you as the temples slowly disappear from view, already feeling like something almost too vivid to have been entirely real.",
          steps: [
            { time: "06:00", description: "Optional early morning visit to Abu Simbel before the day-trip crowds arrive. Sunrise light on the temple facade is exceptional for photography." },
            { time: "07:30", description: "Breakfast at the hotel (included)." },
            { time: "09:00", description: "Optional second visit to the temples if desired, or free time in Abu Simbel village." },
            { time: "10:00", description: "Check out of hotel. Depart Abu Simbel for the drive back to Aswan." },
            { time: "13:00", description: "Arrive in Aswan. Transfer to your hotel. Tour ends." },
          ],
        },
      ],
      es: [{
        day: 1,
        title: "Asuán a Abu Simbel: llegada por la tarde y templos",
        description: "A diferencia del convoy estándar del amanecer, este tour sale de Asuán a media mañana, transformando el trayecto en un relajado viaje por el desierto en lugar de una carrera previa al amanecer a través de la oscuridad. Para cuando llegue a Abu Simbel a primera hora de la tarde, las multitudes de excursionistas de un día que llegaron al amanecer ya se habrán ido en su mayoría, los estacionamientos se vaciarán mientras los autobuses regresan hacia el norte, y usted tendrá los templos en relativa tranquilidad, con el silencio del desierto asentándose de nuevo sobre el sitio. Su guía lo llevará por el Gran Templo de Ramsés II y el Templo de Nefertari sin prisas, explicando no solo los monumentos en sí, sino la extraordinaria historia de cómo fueron salvados, y el drama humano de los arqueólogos, ingenieros y trabajadores que los desmontaron y reensamblaron bloque por bloque durante cuatro años de trabajo meticuloso, corriendo contra una línea de agua en aumento que no daba tregua. Al caer la tarde, el sitio se transforma una vez más: los turistas se han ido, el silencio del desierto regresa casi por completo, y entonces comienza el espectáculo de luz y sonido: colores que recorren la antigua piedra en lentas oleadas, y la voz de Ramsés II, o al menos la voz que le da la narración del espectáculo, resonando sobre las aguas tranquilas del lago Nasser hacia la oscuridad circundante.",

        steps: [{
          time: "08:00",
          description: "Recogida en el hotel en Asuán."
        }, {
          time: "08:30",
          description: "Salida hacia Abu Simbel en vehículo privado. Disfrute del trayecto por la carretera del desierto a un ritmo relajado."
        }, {
          time: "11:30",
          description: "Llegada a Abu Simbel. Check-in en el hotel y deje su bolsa de viaje."
        }, {
          time: "12:30",
          description: "Almuerzo a su propio cargo en uno de los restaurantes locales cerca del sitio."
        }, {
          time: "14:00",
          description: "Entrada al sitio del templo. Visita guiada al Gran Templo de Ramsés II: explore las estatuas de la fachada, la sala hipóstila, el vestíbulo y el santuario interior."
        }, {
          time: "15:00",
          description: "Traslado al Templo de Nefertari. Visita guiada a las figuras colosales exteriores y a las cámaras pintadas interiores dedicadas a Hathor."
        }, {
          time: "16:00",
          description: "Tiempo libre en el sitio: recorra todo el perímetro, fotografíe los templos desde la orilla del lago, o siéntese tranquilamente mientras la luz cambia sobre la piedra."
        }, {
          time: "17:30",
          description: "Regreso al hotel para la cena a su propio cargo y descanso antes del espectáculo nocturno."
        }, {
          time: "20:00",
          description: "Traslado al espectáculo de Luz y Sonido de Abu Simbel."
        }, {
          time: "20:30",
          description: "Comienza el espectáculo: dramáticas luces de colores iluminan los templos mientras la historia del reinado de Ramsés II, su batalla de Qadesh y su legado divino se despliegan en narración y música."
        }, {
          time: "21:15",
          description: "Finaliza el espectáculo. Regreso al hotel para pasar la noche."
        }]
      }, {
        day: 2,
        title: "Amanecer en Abu Simbel y regreso a Asuán",
        description: "Uno de los grandes privilegios de pasar la noche en Abu Simbel es la mañana: antes de que llegue el convoy desde Asuán, avanzando ruidosamente a través del desierto en una larga fila de faros, los templos le pertenecen por completo. Despierte temprano y regrese al sitio mientras el sol asciende sobre el horizonte del desierto, bañando las grandes estatuas de Ramsés II en una larga luz dorada que parece incendiar la propia arenisca, con las sombras extendiéndose dramáticamente a lo largo de la fachada de una manera que ninguna fotografía del mediodía podrá captar jamás. Este es el momento en que los fotógrafos y quienes simplemente desean sentir todo el peso del lugar se lucen, de pie en un silencio casi total ante monumentos construidos para ser vistos exactamente así. Después del desayuno en el hotel, su guía lo llevará de regreso a los templos para una última vez antes del viaje hacia el norte de vuelta a Asuán, con la carretera del desierto desenrollándose detrás de usted mientras los templos desaparecen lentamente de la vista, sintiéndose ya como algo casi demasiado vívido para haber sido del todo real.",

        steps: [{
          time: "06:00",
          description: "Visita matutina opcional a Abu Simbel antes de que lleguen las multitudes de excursionistas de un día. La luz del amanecer en la fachada del templo es excepcional para la fotografía."
        }, {
          time: "07:30",
          description: "Desayuno en el hotel (incluido)."
        }, {
          time: "09:00",
          description: "Segunda visita opcional a los templos si lo desea, o tiempo libre en el pueblo de Abu Simbel."
        }, {
          time: "10:00",
          description: "Check-out del hotel. Salida de Abu Simbel para el regreso por carretera a Asuán."
        }, {
          time: "13:00",
          description: "Llegada a Asuán. Traslado a su hotel. Fin del tour."
        }]
      }],
      pt: [{
        day: 1,
        title: "Assuão a Abu Simbel — Chegada à tarde e templos",
        description: "Diferente do comboio padrão do amanhecer, este tour parte de Assuão em meio à manhã, transformando o trajeto em uma viagem relaxada pelo deserto, em vez de uma corrida antes do amanhecer através da escuridão. Quando você chegar a Abu Simbel no início da tarde, as multidões de excursionistas de um dia que chegaram ao amanhecer já terão, em sua maioria, partido, os estacionamentos esvaziando enquanto os ônibus retornam ao norte, e você terá os templos em relativa tranquilidade, com o silêncio do deserto voltando a se instalar sobre o local. Seu guia o conduzirá pelo Grande Templo de Ramsés II e pelo Templo de Nefertari em um ritmo tranquilo, explicando não apenas os monumentos em si, mas a extraordinária história de como foram salvos — e o drama humano dos arqueólogos, engenheiros e trabalhadores que os desmontaram e remontaram bloco por bloco durante quatro anos de trabalho meticuloso, correndo contra uma linha de água crescente que não dava trégua. Ao cair da noite, o local se transforma novamente: os turistas se foram, o silêncio do deserto retorna quase por completo, e então começa o espetáculo de som e luz — cores percorrendo a antiga pedra em lentas ondas, e a voz de Ramsés II, ou ao menos a voz que a narração do espetáculo lhe atribui, ecoando sobre as águas tranquilas do Lago Nasser em direção à escuridão ao redor.",

        steps: [{
          time: "08:00",
          description: "Busca no hotel em Assuão."
        }, {
          time: "08:30",
          description: "Partida para Abu Simbel em veículo privado. Aproveite o trajeto pela estrada do deserto em um ritmo tranquilo."
        }, {
          time: "11:30",
          description: "Chegada a Abu Simbel. Check-in no hotel e deixe sua bolsa de pernoite."
        }, {
          time: "12:30",
          description: "Almoço por conta própria em um dos restaurantes locais próximos ao local."
        }, {
          time: "14:00",
          description: "Entrada no complexo dos templos. Tour guiado pelo Grande Templo de Ramsés II — explore as estátuas da fachada, o salão hipostilo, o vestíbulo e o santuário interior."
        }, {
          time: "15:00",
          description: "Deslocamento até o Templo de Nefertari. Tour guiado pelas figuras colossais externas e pelas câmaras pintadas internas dedicadas a Hathor."
        }, {
          time: "16:00",
          description: "Tempo livre no local — caminhe por todo o perímetro, fotografe os templos a partir da margem do lago, ou sente-se tranquilamente enquanto a luz muda sobre a pedra."
        }, {
          time: "17:30",
          description: "Retorno ao hotel para jantar por conta própria e descanso antes do espetáculo noturno."
        }, {
          time: "20:00",
          description: "Traslado para o Espetáculo de Som e Luz de Abu Simbel."
        }, {
          time: "20:30",
          description: "Início do espetáculo — luzes coloridas dramáticas iluminam os templos enquanto a história do reinado de Ramsés II, sua batalha de Cadexe e seu legado divino se desenrolam em narração e música."
        }, {
          time: "21:15",
          description: "Fim do espetáculo. Retorno ao hotel para passar a noite."
        }]
      }, {
        day: 2,
        title: "Nascer do sol em Abu Simbel e retorno a Assuão",
        description: "Um dos grandes privilégios de pernoitar em Abu Simbel é a manhã — antes que o comboio de Assuão chegue, avançando ruidosamente pelo deserto em uma longa fila de faróis, os templos pertencem inteiramente a você. Acorde cedo e retorne ao local enquanto o sol sobe sobre o horizonte do deserto, lançando sobre as grandes estátuas de Ramsés II uma longa luz dourada que parece incendiar o próprio arenito, com as sombras se estendendo dramaticamente pela fachada de uma forma que nenhuma fotografia do meio-dia jamais conseguirá captar. É nesse momento que fotógrafos e aqueles que simplesmente desejam sentir todo o peso do lugar se destacam, parados em silêncio quase total diante de monumentos construídos para serem vistos exatamente assim. Depois do café da manhã no hotel, seu guia o levará de volta aos templos por uma última vez antes do trajeto rumo ao norte, de volta a Assuão, com a estrada do deserto se desenrolando atrás de você enquanto os templos desaparecem lentamente de vista, já parecendo algo quase demasiado vívido para ter sido totalmente real.",

        steps: [{
          time: "06:00",
          description: "Visita matinal opcional a Abu Simbel antes da chegada das multidões de excursionistas de um dia. A luz do nascer do sol na fachada do templo é excepcional para fotografia."
        }, {
          time: "07:30",
          description: "Café da manhã no hotel (incluído)."
        }, {
          time: "09:00",
          description: "Segunda visita opcional aos templos, se desejado, ou tempo livre na vila de Abu Simbel."
        }, {
          time: "10:00",
          description: "Check-out do hotel. Partida de Abu Simbel para o trajeto de volta a Assuão."
        }, {
          time: "13:00",
          description: "Chegada a Assuão. Traslado até seu hotel. Fim do tour."
        }]
      }],
      it: [{
        day: 1,
        title: "Da Assuan ad Abu Simbel — Arrivo nel pomeriggio e templi",
        description: "A differenza del convoglio standard dell'alba, questo tour parte da Assuan a metà mattina, trasformando il viaggio in un rilassato tragitto nel deserto piuttosto che in una corsa prima dell'alba attraverso l'oscurità. Quando arriverete ad Abu Simbel nel primo pomeriggio, le folle delle gite di un giorno arrivate all'alba se ne saranno già in gran parte andate, i parcheggi si svuoteranno mentre gli autobus tornano verso nord, e potrete godervi i templi in relativa tranquillità, con il silenzio del deserto che torna a posarsi sul sito. La vostra guida vi condurrà attraverso il Grande Tempio di Ramses II e il Tempio di Nefertari con calma, spiegando non solo i monumenti in sé ma la straordinaria storia di come sono stati salvati — e il drama umano degli archeologi, ingegneri e operai che li smontarono e riassemblarono blocco per blocco in quattro anni di lavoro meticoloso, correndo contro una linea d'acqua in costante aumento che non concedeva tregua. Al calare della sera, il sito si trasforma ancora una volta: i turisti sono andati via, il silenzio del deserto ritorna quasi completamente, e poi inizia lo spettacolo di luci e suoni — colori che attraversano l'antica pietra in lente ondate, e la voce di Ramses II, o almeno la voce che gli viene data dalla narrazione dello spettacolo, che si propaga sulle acque immobili del Lago Nasser fino all'oscurità circostante.",

        steps: [{
          time: "08:00",
          description: "Ritiro in hotel ad Assuan."
        }, {
          time: "08:30",
          description: "Partenza per Abu Simbel con veicolo privato. Godetevi il viaggio sulla strada del deserto a un ritmo rilassato."
        }, {
          time: "11:30",
          description: "Arrivo ad Abu Simbel. Check-in in hotel e deposito della borsa per il pernottamento."
        }, {
          time: "12:30",
          description: "Pranzo a proprio carico in uno dei ristoranti locali vicino al sito."
        }, {
          time: "14:00",
          description: "Ingresso nel sito dei templi. Visita guidata al Grande Tempio di Ramses II — esplorate le statue della facciata, la sala ipostila, il vestibolo e il santuario interno."
        }, {
          time: "15:00",
          description: "Spostamento al Tempio di Nefertari. Visita guidata alle figure colossali esterne e alle camere interne dipinte dedicate a Hathor."
        }, {
          time: "16:00",
          description: "Tempo libero presso il sito — percorrete l'intero perimetro, fotografate i templi dalla riva del lago, oppure sedetevi in silenzio mentre la luce cambia sulla pietra."
        }, {
          time: "17:30",
          description: "Ritorno in hotel per la cena a proprio carico e riposo prima dello spettacolo serale."
        }, {
          time: "20:00",
          description: "Trasferimento allo Spettacolo di Luci e Suoni di Abu Simbel."
        }, {
          time: "20:30",
          description: "Inizia lo spettacolo — drammatiche luci colorate illuminano i templi mentre la storia del regno di Ramses II, la sua battaglia di Qadesh e la sua eredità divina si svolgono tra narrazione e musica."
        }, {
          time: "21:15",
          description: "Fine dello spettacolo. Ritorno in hotel per la notte."
        }]
      }, {
        day: 2,
        title: "Alba ad Abu Simbel e ritorno ad Assuan",
        description: "Uno dei grandi privilegi di pernottare ad Abu Simbel è la mattina — prima che il convoglio da Assuan arrivi, rombando attraverso il deserto in una lunga fila di fari, i templi appartengono interamente a voi. Svegliatevi presto e tornate al sito mentre il sole sale sopra l'orizzonte del deserto, gettando sulle grandi statue di Ramses II una lunga luce dorata che sembra incendiare l'arenaria stessa, con le ombre che si allungano drammaticamente lungo la facciata in un modo che nessuna fotografia di mezzogiorno potrà mai catturare. È questo il momento in cui i fotografi e chi semplicemente desidera sentire tutto il peso del luogo si esprimono al meglio, in piedi in un silenzio quasi totale davanti a monumenti costruiti per essere visti esattamente così. Dopo la colazione in hotel, la vostra guida vi riporterà ai templi per un'ultima visita prima del viaggio verso nord, di ritorno ad Assuan, con la strada del deserto che si svolge dietro di voi mentre i templi scompaiono lentamente dalla vista, sembrando già qualcosa di quasi troppo vivido per essere stato del tutto reale.",

        steps: [{
          time: "06:00",
          description: "Visita opzionale di prima mattina ad Abu Simbel prima dell'arrivo delle folle delle gite di un giorno. La luce dell'alba sulla facciata del tempio è eccezionale per la fotografia."
        }, {
          time: "07:30",
          description: "Colazione in hotel (inclusa)."
        }, {
          time: "09:00",
          description: "Seconda visita opzionale ai templi, se desiderata, oppure tempo libero nel villaggio di Abu Simbel."
        }, {
          time: "10:00",
          description: "Check-out dall'hotel. Partenza da Abu Simbel per il viaggio di ritorno ad Assuan."
        }, {
          time: "13:00",
          description: "Arrivo ad Assuan. Trasferimento al vostro hotel. Fine del tour."
        }]
      }],
      fr: [{
        day: 1,
        title: "Assouan à Abou Simbel — Arrivée dans l'après-midi et temples",
        description: "Contrairement au convoi standard de l'aube, cette excursion part d'Assouan en milieu de matinée, transformant le trajet en un voyage détendu à travers le désert plutôt qu'en une course à travers l'obscurité avant l'aube. Lorsque vous arriverez à Abou Simbel en début d'après-midi, les foules de visiteurs d'une journée arrivées à l'aube seront en grande partie déjà parties, les parkings se vidant à mesure que les bus repartent vers le nord, et vous profiterez des temples dans une relative tranquillité, le silence du désert se réinstallant peu à peu sur le site. Votre guide vous fera découvrir le Grand Temple de Ramsès II et le Temple de Néfertari à un rythme tranquille, expliquant non seulement les monuments eux-mêmes mais aussi l'extraordinaire histoire de leur sauvetage — et le drame humain des archéologues, ingénieurs et ouvriers qui les ont démontés puis remontés bloc par bloc pendant quatre années de travail minutieux, dans une course contre une ligne d'eau montante qui ne laissait aucun répit. À la tombée du soir, le site se transforme à nouveau : les touristes sont partis, le silence du désert revient presque entièrement, puis le spectacle son et lumière commence — des couleurs balayant la pierre antique en lentes vagues, et la voix de Ramsès II, ou du moins la voix que lui donne la narration du spectacle, résonnant sur les eaux calmes du lac Nasser jusque dans l'obscurité environnante.",

        steps: [{
          time: "08:00",
          description: "Prise en charge à l'hôtel à Assouan."
        }, {
          time: "08:30",
          description: "Départ pour Abou Simbel en véhicule privé. Profitez du trajet sur la route du désert à un rythme détendu."
        }, {
          time: "11:30",
          description: "Arrivée à Abou Simbel. Enregistrement à l'hôtel et dépôt de votre sac de voyage."
        }, {
          time: "12:30",
          description: "Déjeuner à votre charge dans l'un des restaurants locaux près du site."
        }, {
          time: "14:00",
          description: "Entrée sur le site des temples. Visite guidée du Grand Temple de Ramsès II — explorez les statues de la façade, la salle hypostyle, le vestibule et le sanctuaire intérieur."
        }, {
          time: "15:00",
          description: "Déplacement vers le Temple de Néfertari. Visite guidée des figures colossales extérieures et des chambres intérieures peintes dédiées à Hathor."
        }, {
          time: "16:00",
          description: "Temps libre sur le site — parcourez tout le périmètre, photographiez les temples depuis le bord du lac, ou asseyez-vous tranquillement tandis que la lumière change sur la pierre."
        }, {
          time: "17:30",
          description: "Retour à l'hôtel pour le dîner à votre charge et repos avant le spectacle du soir."
        }, {
          time: "20:00",
          description: "Transfert vers le Spectacle Son et Lumière d'Abou Simbel."
        }, {
          time: "20:30",
          description: "Début du spectacle — des lumières colorées spectaculaires illuminent les temples tandis que l'histoire du règne de Ramsès II, de sa bataille de Qadesh et de son héritage divin se déploie en narration et en musique."
        }, {
          time: "21:15",
          description: "Fin du spectacle. Retour à l'hôtel pour la nuit."
        }]
      }, {
        day: 2,
        title: "Lever du soleil à Abou Simbel et retour à Assouan",
        description: "L'un des grands privilèges de passer la nuit à Abou Simbel est le matin — avant que le convoi venant d'Assouan n'arrive, grondant à travers le désert en une longue file de phares, les temples vous appartiennent entièrement. Levez-vous tôt et retournez sur le site tandis que le soleil monte au-dessus de l'horizon désertique, baignant les grandes statues de Ramsès II d'une longue lumière dorée qui semble embraser le grès lui-même, les ombres s'étirant de façon spectaculaire sur la façade d'une manière qu'aucune photographie de midi ne pourra jamais capturer. C'est le moment où les photographes et ceux qui souhaitent simplement ressentir tout le poids du lieu trouvent leur compte, debout dans un silence presque total devant des monuments construits pour être vus exactement ainsi. Après le petit-déjeuner à l'hôtel, votre guide vous ramènera aux temples une dernière fois avant le trajet vers le nord, retour à Assouan, la route du désert se déroulant derrière vous tandis que les temples disparaissent lentement de votre vue, donnant déjà l'impression d'avoir été presque trop saisissants pour avoir été tout à fait réels.",

        steps: [{
          time: "06:00",
          description: "Visite matinale optionnelle à Abou Simbel avant l'arrivée des foules de visiteurs d'une journée. La lumière du lever du soleil sur la façade du temple est exceptionnelle pour la photographie."
        }, {
          time: "07:30",
          description: "Petit-déjeuner à l'hôtel (inclus)."
        }, {
          time: "09:00",
          description: "Deuxième visite optionnelle des temples si souhaité, ou temps libre dans le village d'Abou Simbel."
        }, {
          time: "10:00",
          description: "Départ de l'hôtel. Départ d'Abou Simbel pour le trajet de retour vers Assouan."
        }, {
          time: "13:00",
          description: "Arrivée à Assouan. Transfert vers votre hôtel. Fin de l'excursion."
        }]
      }],
      ru: [{
        day: 1,
        title: "Из Асуана в Абу-Симбел — прибытие во второй половине дня и храмы",
        description: "В отличие от стандартной рассветной колонны, этот тур выезжает из Асуана в середине утра, превращая поездку в спокойное путешествие по пустыне, а не в гонку через темноту перед рассветом. К тому моменту, как вы прибудете в Абу-Симбел в начале дня, толпы однодневных туристов, приехавших на рассвете, в основном уже разъедутся, парковки опустеют по мере того, как автобусы направятся обратно на север, и вы сможете осмотреть храмы в относительном спокойствии, когда тишина пустыни снова окутывает это место. Ваш гид без спешки проведёт вас по Большому храму Рамсеса II и храму Нефертари, рассказывая не только о самих памятниках, но и о удивительной истории их спасения — и о человеческой драме археологов, инженеров и рабочих, которые разбирали и собирали их заново блок за блоком на протяжении четырёх лет кропотливого труда, соревнуясь с поднимающимся уровнем воды, не дававшим пощады. С наступлением вечера место снова преображается: туристы уезжают, тишина пустыни почти полностью возвращается, и затем начинается шоу света и звука — цвета медленными волнами скользят по древнему камню, а голос Рамсеса II, или, по крайней мере, голос, которым его наделяет повествование шоу, разносится над спокойными водами озера Насер в окружающую темноту.",

        steps: [{
          time: "08:00",
          description: "Трансфер из отеля в Асуане."
        }, {
          time: "08:30",
          description: "Отправление в Абу-Симбел на частном автомобиле. Насладитесь поездкой по пустынному шоссе в спокойном темпе."
        }, {
          time: "11:30",
          description: "Прибытие в Абу-Симбел. Регистрация в отеле и оставление сумки для ночёвки."
        }, {
          time: "12:30",
          description: "Обед за собственный счёт в одном из местных ресторанов рядом с объектом."
        }, {
          time: "14:00",
          description: "Вход на территорию храмов. Экскурсия с гидом по Большому храму Рамсеса II — статуи фасада, гипостильный зал, вестибюль и внутреннее святилище."
        }, {
          time: "15:00",
          description: "Переход к храму Нефертари. Экскурсия с гидом по колоссальным наружным фигурам и расписным внутренним камерам, посвящённым Хатхор."
        }, {
          time: "16:00",
          description: "Свободное время на объекте — обойдите весь периметр, сфотографируйте храмы с берега озера или спокойно посидите, наблюдая, как меняется свет на камне."
        }, {
          time: "17:30",
          description: "Возвращение в отель для ужина за собственный счёт и отдыха перед вечерним шоу."
        }, {
          time: "20:00",
          description: "Трансфер на шоу света и звука в Абу-Симбеле."
        }, {
          time: "20:30",
          description: "Начало шоу — драматичные цветные огни освещают храмы, пока история правления Рамсеса II, его битвы при Кадеше и его божественного наследия разворачивается через повествование и музыку."
        }, {
          time: "21:15",
          description: "Окончание шоу. Возвращение в отель на ночь."
        }]
      }, {
        day: 2,
        title: "Рассвет в Абу-Симбеле и возвращение в Асуан",
        description: "Одна из главных привилегий ночёвки в Абу-Симбеле — это утро: прежде чем прибудет колонна из Асуана, с грохотом проезжающая через пустыню длинной цепочкой фар, храмы полностью принадлежат вам. Встаньте рано и вернитесь на объект, когда солнце поднимается над горизонтом пустыни, заливая великие статуи Рамсеса II длинным золотистым светом, который, кажется, поджигает сам песчаник, а тени драматично растягиваются по фасаду так, как никогда не сможет передать ни одна полуденная фотография. Именно в этот момент фотографы и те, кто просто хочет почувствовать всю значимость этого места, оказываются в своей стихии, стоя почти в полной тишине перед памятниками, построенными именно для того, чтобы быть увиденными именно так. После завтрака в отеле гид вернёт вас к храмам в последний раз перед поездкой на север, обратно в Асуан, когда пустынное шоссе разворачивается позади вас, а храмы медленно исчезают из виду, оставляя ощущение чего-то почти слишком яркого, чтобы быть полностью реальным.",

        steps: [{
          time: "06:00",
          description: "Дополнительное раннее утреннее посещение Абу-Симбела до прибытия толп однодневных туристов. Свет рассвета на фасаде храма исключительно хорош для фотографии."
        }, {
          time: "07:30",
          description: "Завтрак в отеле (включён)."
        }, {
          time: "09:00",
          description: "Дополнительное второе посещение храмов по желанию, либо свободное время в деревне Абу-Симбел."
        }, {
          time: "10:00",
          description: "Выезд из отеля. Отправление из Абу-Симбела в обратный путь до Асуана."
        }, {
          time: "13:00",
          description: "Прибытие в Асуан. Трансфер в ваш отель. Окончание тура."
        }]
      }],
      de: [{
        day: 1,
        title: "Assuan nach Abu Simbel — Ankunft am Nachmittag & Tempel",
        description: "Anders als beim üblichen Morgenkonvoi startet diese Tour erst am späten Vormittag von Assuan aus und verwandelt die Fahrt so in eine entspannte Wüstenreise statt einer Hetzfahrt durch die Dunkelheit vor Sonnenaufgang. Wenn Sie am frühen Nachmittag in Abu Simbel eintreffen, sind die Tagesausflügler-Menschenmengen, die im Morgengrauen angekommen waren, größtenteils bereits weitergezogen, die Parkplätze leeren sich, während die Busse nach Norden zurückfahren, und Sie können die Tempel in relativer Ruhe erleben, während sich die Stille der Wüste wieder über die Stätte legt. Ihr Reiseleiter führt Sie in entspanntem Tempo durch den Großen Tempel von Ramses II. und den Tempel der Nefertari und erklärt nicht nur die Monumente selbst, sondern auch die außergewöhnliche Geschichte ihrer Rettung — sowie das menschliche Drama der Archäologen, Ingenieure und Arbeiter, die sie über vier Jahre mühevoller Arbeit hinweg Block für Block abbauten und wieder zusammensetzten, im Wettlauf mit einem steigenden Wasserspiegel, der keine Gnade kannte. Mit Einbruch des Abends verwandelt sich die Stätte erneut: Die Touristen sind verschwunden, die Stille der Wüste kehrt fast vollständig zurück, und dann beginnt die Licht- und Tonshow — Farben gleiten in langsamen Wellen über den antiken Stein, und die Stimme von Ramses II., oder zumindest die Stimme, die ihm die Erzählung der Show verleiht, rollt über das ruhige Wasser des Nassersees hinaus in die umgebende Dunkelheit.",

        steps: [{
          time: "08:00",
          description: "Hotelabholung in Assuan."
        }, {
          time: "08:30",
          description: "Abfahrt nach Abu Simbel mit einem privaten Fahrzeug. Genießen Sie die Fahrt auf der Wüstenstraße in entspanntem Tempo."
        }, {
          time: "11:30",
          description: "Ankunft in Abu Simbel. Check-in im Hotel und Abgabe Ihrer Übernachtungstasche."
        }, {
          time: "12:30",
          description: "Mittagessen auf eigene Kosten in einem der lokalen Restaurants in der Nähe der Stätte."
        }, {
          time: "14:00",
          description: "Eintritt in das Tempelgelände. Geführte Tour durch den Großen Tempel von Ramses II. — erkunden Sie die Fassadenstatuen, den Säulensaal, das Vestibül und das innere Heiligtum."
        }, {
          time: "15:00",
          description: "Weiterfahrt zum Tempel der Nefertari. Geführte Tour zu den kolossalen Außenfiguren und den bemalten Innenkammern, die Hathor gewidmet sind."
        }, {
          time: "16:00",
          description: "Freizeit an der Stätte — umlaufen Sie den gesamten Bereich, fotografieren Sie die Tempel vom Seeufer aus, oder sitzen Sie ruhig, während sich das Licht auf dem Stein verändert."
        }, {
          time: "17:30",
          description: "Rückkehr zum Hotel zum Abendessen auf eigene Kosten und zur Ruhe vor der Abendshow."
        }, {
          time: "20:00",
          description: "Transfer zur Licht- und Tonshow von Abu Simbel."
        }, {
          time: "20:30",
          description: "Die Show beginnt — dramatische, farbige Lichter beleuchten die Tempel, während sich die Geschichte der Herrschaft von Ramses II., seiner Schlacht von Kadesch und seines göttlichen Erbes in Erzählung und Musik entfaltet."
        }, {
          time: "21:15",
          description: "Ende der Show. Rückkehr zum Hotel für die Nacht."
        }]
      }, {
        day: 2,
        title: "Sonnenaufgang in Abu Simbel & Rückkehr nach Assuan",
        description: "Eines der großen Privilegien einer Übernachtung in Abu Simbel ist der Morgen — bevor der Konvoi aus Assuan eintrifft, der in einer langen Reihe von Scheinwerfern durch die Wüste rumpelt, gehören die Tempel ganz allein Ihnen. Stehen Sie früh auf und kehren Sie zur Stätte zurück, während die Sonne über dem Wüstenhorizont aufsteigt und die großen Statuen von Ramses II. in ein langes, goldenes Licht taucht, das den Sandstein selbst in Flammen zu setzen scheint, wobei sich die Schatten dramatisch über die Fassade erstrecken — auf eine Weise, die kein Mittagsfoto je einfangen kann. Dies ist der Moment, in dem Fotografen und jene, die einfach das volle Gewicht dieses Ortes spüren möchten, zu ihrem Recht kommen, in fast völliger Stille vor Monumenten stehend, die genau dafür gebaut wurden, so gesehen zu werden. Nach dem Frühstück im Hotel bringt Sie Ihr Reiseleiter ein letztes Mal zu den Tempeln zurück, bevor die Fahrt nach Norden zurück nach Assuan beginnt, während sich die Wüstenstraße hinter Ihnen abrollt und die Tempel langsam aus dem Blickfeld verschwinden — schon jetzt fühlt es sich an wie etwas fast zu Lebendiges, um vollständig real gewesen zu sein.",

        steps: [{
          time: "06:00",
          description: "Optionaler früher Morgenbesuch in Abu Simbel, bevor die Tagesausflügler-Menschenmengen eintreffen. Das Licht des Sonnenaufgangs auf der Tempelfassade ist außergewöhnlich für Fotografien."
        }, {
          time: "07:30",
          description: "Frühstück im Hotel (inbegriffen)."
        }, {
          time: "09:00",
          description: "Optionaler zweiter Besuch der Tempel, falls gewünscht, oder Freizeit im Dorf Abu Simbel."
        }, {
          time: "10:00",
          description: "Check-out aus dem Hotel. Abfahrt von Abu Simbel für die Rückfahrt nach Assuan."
        }, {
          time: "13:00",
          description: "Ankunft in Assuan. Transfer zu Ihrem Hotel. Ende der Tour."
        }]
      }]
    },
  },
  {
    title: "Transfers in Aswan",
    slug: "transfers-aswan",
    description:
      "Move around Aswan with ease and comfort using our reliable private transfer service, designed for travelers who simply want to get from one point to another without the stress, the haggling, or the uncertainty of navigating an unfamiliar city in an unfamiliar language. A professional chauffeur will meet you at the airport, your hotel, or any address you choose and take you smoothly to your destination, watching for your name on arrival so you never have to search a crowded hall wondering who is there for you. Whether you're heading to the cruise terminal to begin a multi-day Nile journey, checking into a hotel after a long flight, or simply need a reliable pickup point for an early-morning day trip, our transfers ensure you arrive on time, in comfort, and without the stress of navigating unfamiliar roads, haggling with taxi drivers, or worrying about whether you'll make your connection.",
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
      es: "Sala de llegadas del Aeropuerto Internacional de Asuán, o el lobby de su hotel, según lo que especifique al reservar.",
      pt: "Sala de chegadas do Aeroporto Internacional de Assuão, ou o lobby do seu hotel — o que você especificar no momento da reserva.",
      it: "Sala arrivi dell'Aeroporto Internazionale di Assuan, oppure la hall del vostro hotel — a seconda di quanto specificato al momento della prenotazione.",
      fr: "Le hall des arrivées de l'aéroport international d'Assouan, ou le hall de votre hôtel — selon ce que vous précisez lors de la réservation.",
      ru: "Зал прилёта международного аэропорта Асуана или лобби вашего отеля — в зависимости от того, что вы укажете при бронировании.",
      de: "Ankunftshalle des internationalen Flughafens Assuan oder die Lobby Ihres Hotels — je nachdem, was Sie bei der Buchung angeben."
    },
    accessibility: {
      en: "Vehicles are air-conditioned private cars or minivans. Please inform us in advance if you require a wheelchair-accessible vehicle.",
      es: "Los vehículos son automóviles privados o minivans con aire acondicionado. Avísenos con anticipación si necesita un vehículo accesible para silla de ruedas.",
      pt: "Os veículos são carros particulares ou minivans com ar-condicionado. Avise-nos com antecedência se precisar de um veículo acessível para cadeira de rodas.",
      it: "I veicoli sono auto private o minivan con aria condizionata. Vi preghiamo di informarci in anticipo se necessitate di un veicolo accessibile per sedie a rotelle.",
      fr: "Les véhicules sont des voitures privées ou des minibus climatisés. Veuillez nous informer à l'avance si vous avez besoin d'un véhicule accessible aux fauteuils roulants.",
      ru: "Автомобили — это частные машины или микроавтобусы с кондиционером. Пожалуйста, сообщите нам заранее, если вам требуется автомобиль, доступный для инвалидной коляски.",
      de: "Die Fahrzeuge sind klimatisierte Privatwagen oder Minivans. Bitte informieren Sie uns vorab, falls Sie ein rollstuhlgerechtes Fahrzeug benötigen."
    },
    whatToBring: {
      en: ["Your booking confirmation", "Flight or cruise details for timing", "Contact number for the driver"],
      es: [
        "Su confirmación de reserva",
        "Datos del vuelo o crucero para el horario",
        "Número de contacto del conductor"
      ],
      pt: [
        "Sua confirmação de reserva",
        "Detalhes do voo ou cruzeiro para o horário",
        "Número de contato do motorista"
      ],
      it: [
        "La conferma della prenotazione",
        "Dettagli del volo o della crociera per gli orari",
        "Numero di contatto del conducente"
      ],
      fr: [
        "Votre confirmation de réservation",
        "Les détails de votre vol ou croisière pour les horaires",
        "Le numéro de contact du chauffeur"
      ],
      ru: [
        "Подтверждение вашего бронирования",
        "Данные о рейсе или круизе для определения времени",
        "Контактный номер водителя"
      ],
      de: [
        "Ihre Buchungsbestätigung",
        "Flug- oder Kreuzfahrtdetails für die Zeitplanung",
        "Kontaktnummer des Fahrers"
      ]
    },
    importantInfo: {
      en: [
        "Transfers are private — you will not share the vehicle with other passengers.",
        "The driver will hold a sign with your name at the airport arrivals hall.",
        "Please provide your flight or arrival details at the time of booking to ensure punctual pickup.",
        "Waiting time at the airport is up to 60 minutes after the scheduled landing time.",
        "Additional stops or extended routes may incur extra charges.",
      ],
      es: [
        "Los traslados son privados: no compartirá el vehículo con otros pasajeros.",
        "El conductor sostendrá un cartel con su nombre en la sala de llegadas del aeropuerto.",
        "Proporcione los detalles de su vuelo o llegada al momento de la reserva para garantizar una recogida puntual.",
        "El tiempo de espera en el aeropuerto es de hasta 60 minutos después de la hora de aterrizaje programada.",
        "Las paradas adicionales o rutas extendidas pueden generar cargos adicionales."
      ],
      pt: [
        "Os traslados são privados — você não compartilhará o veículo com outros passageiros.",
        "O motorista estará com uma placa com seu nome na sala de chegadas do aeroporto.",
        "Forneça os detalhes do seu voo ou chegada no momento da reserva para garantir uma busca pontual.",
        "O tempo de espera no aeroporto é de até 60 minutos após o horário de aterrissagem programado.",
        "Paradas adicionais ou rotas estendidas podem gerar custos extras."
      ],
      it: [
        "I trasferimenti sono privati — non condividerete il veicolo con altri passeggeri.",
        "Il conducente terrà un cartello con il vostro nome nella sala arrivi dell'aeroporto.",
        "Fornite i dettagli del vostro volo o del vostro arrivo al momento della prenotazione per garantire un ritiro puntuale.",
        "Il tempo di attesa in aeroporto è di massimo 60 minuti dopo l'orario di atterraggio previsto.",
        "Soste aggiuntive o percorsi più lunghi potrebbero comportare costi extra."
      ],
      fr: [
        "Les transferts sont privés — vous ne partagerez pas le véhicule avec d'autres passagers.",
        "Le chauffeur tiendra un panneau avec votre nom dans le hall des arrivées de l'aéroport.",
        "Veuillez fournir les détails de votre vol ou de votre arrivée au moment de la réservation afin de garantir une prise en charge ponctuelle.",
        "Le temps d'attente à l'aéroport est de 60 minutes maximum après l'heure d'atterrissage prévue.",
        "Des arrêts supplémentaires ou des trajets prolongés peuvent entraîner des frais additionnels."
      ],
      ru: [
        "Трансферы частные — вы не будете делить автомобиль с другими пассажирами.",
        "Водитель будет держать табличку с вашим именем в зале прилёта аэропорта.",
        "Пожалуйста, предоставьте данные о вашем рейсе или прибытии при бронировании, чтобы обеспечить пунктуальную встречу.",
        "Время ожидания в аэропорту составляет до 60 минут после запланированного времени посадки.",
        "Дополнительные остановки или продлённые маршруты могут повлечь дополнительную плату."
      ],
      de: [
        "Die Transfers sind privat — Sie teilen sich das Fahrzeug nicht mit anderen Passagieren.",
        "Der Fahrer hält in der Ankunftshalle des Flughafens ein Schild mit Ihrem Namen.",
        "Bitte geben Sie Ihre Flug- oder Ankunftsdetails bei der Buchung an, um eine pünktliche Abholung zu gewährleisten.",
        "Die Wartezeit am Flughafen beträgt bis zu 60 Minuten nach der planmäßigen Landezeit.",
        "Zusätzliche Stopps oder verlängerte Strecken können zusätzliche Kosten verursachen."
      ]
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
    slug: "4-day-lake-nasser-cruise-aswan",
    description:
      "Sail across the vast and serene waters of Lake Nasser on this all-inclusive 4-day cruise, one of the most unique travel experiences in Africa and a journey that feels worlds apart from the busier, more familiar Nile cruise route further north. Lake Nasser, one of the world's largest man-made lakes, stretching for hundreds of kilometers into Sudan, is home to a remarkable collection of ancient temples relocated during the construction of the Aswan High Dam, including Abu Simbel, Wadi el-Seboua, and Amada — monuments that would otherwise have vanished beneath the water forever. With a knowledgeable guide, comfortable cabins, and all meals provided, this cruise offers an intimate and exclusive way to discover monuments that few travelers ever see, sailing through a landscape of stark desert beauty where the silence is broken only by the wake of the ship and, occasionally, the call of a desert bird passing overhead.",
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
      es: "Muelle de la Presa Alta de Asuán. El traslado desde su hotel en Asuán hasta el punto de embarque está incluido.",
      pt: "Cais da Grande Barragem de Assuão. O traslado do seu hotel em Assuão até o ponto de embarque está incluído.",
      it: "Molo della Grande Diga di Assuan. Il trasferimento dal vostro hotel ad Assuan al punto di imbarco è incluso.",
      fr: "Quai du Haut Barrage d'Assouan. Le transfert depuis votre hôtel à Assouan jusqu'au point d'embarquement est inclus.",
      ru: "Причал у Асуанской высотной плотины. Трансфер из вашего отеля в Асуане до точки посадки включён.",
      de: "Anlegestelle am Assuan-Staudamm. Der Transfer von Ihrem Hotel in Assuan zum Einschiffungspunkt ist inbegriffen."
    },
    accessibility: {
      en: "Lake Nasser cruise ships have stairs between decks. Shore excursions involve walking on sandy and uneven terrain. Not suitable for guests with severe mobility issues.",
      es: "Los barcos de crucero del lago Nasser tienen escaleras entre cubiertas. Las excursiones en tierra implican caminar sobre terreno arenoso e irregular. No es adecuado para huéspedes con problemas graves de movilidad.",
      pt: "Os navios de cruzeiro do Lago Nasser têm escadas entre os decks. As excursões em terra envolvem caminhar em terreno arenoso e irregular. Não é adequado para hóspedes com problemas graves de mobilidade.",
      it: "Le navi da crociera sul Lago Nasser hanno scale tra i ponti. Le escursioni a terra prevedono di camminare su terreno sabbioso e irregolare. Non adatto agli ospiti con gravi problemi di mobilità.",
      fr: "Les bateaux de croisière sur le lac Nasser comportent des escaliers entre les ponts. Les excursions à terre impliquent de marcher sur un terrain sablonneux et irrégulier. Ne convient pas aux personnes ayant de graves problèmes de mobilité.",
      ru: "На круизных судах озера Насер есть лестницы между палубами. Береговые экскурсии предполагают ходьбу по песчаной и неровной местности. Не подходит для гостей с серьёзными проблемами с подвижностью.",
      de: "Die Kreuzfahrtschiffe auf dem Nassersee haben Treppen zwischen den Decks. Landausflüge beinhalten das Gehen auf sandigem und unebenem Gelände. Nicht geeignet für Gäste mit starken Mobilitätseinschränkungen."
    },
    whatToBring: {
      en: ["Light summer clothing for days", "Warmer layer for evenings on the lake", "Comfortable walking shoes", "High SPF sun protection", "Binoculars (optional — excellent for birdwatching on the lake)", "Camera", "Personal medications"],
      es: [
        "Ropa ligera de verano para el día",
        "Capa más abrigada para las noches en el lago",
        "Zapatos cómodos para caminar",
        "Protección solar de alto FPS",
        "Binoculares (opcional, excelentes para observar aves en el lago)",
        "Cámara",
        "Medicamentos personales"
      ],
      pt: [
        "Roupas leves de verão para o dia",
        "Camada mais quente para as noites no lago",
        "Sapatos confortáveis para caminhar",
        "Proteção solar de alto FPS",
        "Binóculos (opcional — excelentes para observação de aves no lago)",
        "Câmera fotográfica",
        "Medicamentos pessoais"
      ],
      it: [
        "Abiti estivi leggeri per il giorno",
        "Strato più caldo per le serate sul lago",
        "Scarpe comode da camminata",
        "Protezione solare ad alto fattore",
        "Binocolo (opzionale — eccellente per il birdwatching sul lago)",
        "Macchina fotografica",
        "Farmaci personali"
      ],
      fr: [
        "Vêtements légers d'été pour la journée",
        "Couche plus chaude pour les soirées sur le lac",
        "Chaussures de marche confortables",
        "Protection solaire à indice élevé",
        "Jumelles (facultatif — excellentes pour l'observation des oiseaux sur le lac)",
        "Appareil photo",
        "Médicaments personnels"
      ],
      ru: [
        "Лёгкая летняя одежда для дневного времени",
        "Более тёплая вещь для вечеров на озере",
        "Удобная обувь для ходьбы",
        "Солнцезащитные средства с высоким SPF",
        "Бинокль (по желанию — отлично подходит для наблюдения за птицами на озере)",
        "Фотоаппарат",
        "Личные медикаменты"
      ],
      de: [
        "Leichte Sommerkleidung für den Tag",
        "Wärmere Schicht für die Abende auf dem See",
        "Bequeme Wanderschuhe",
        "Sonnenschutz mit hohem Lichtschutzfaktor",
        "Fernglas (optional — ausgezeichnet für die Vogelbeobachtung auf dem See)",
        "Kamera",
        "Persönliche Medikamente"
      ]
    },
    importantInfo: {
      en: [
        "All meals are included throughout the cruise.",
        "Entrance fees to all temple sites visited are included.",
        "Lake Nasser cruises carry far fewer passengers than Nile cruises — expect an intimate experience.",
        "The temples on Lake Nasser are among the least visited ancient sites in Egypt; some days you may have them entirely to yourselves.",
        "Tipping for the crew and guide is appreciated but not obligatory.",
      ],
      es: [
        "Todas las comidas están incluidas durante todo el crucero.",
        "Las entradas a todos los sitios de templos visitados están incluidas.",
        "Los cruceros por el lago Nasser llevan muchos menos pasajeros que los cruceros por el Nilo: espere una experiencia íntima.",
        "Los templos del lago Nasser están entre los sitios antiguos menos visitados de Egipto; algunos días puede tenerlos completamente para usted.",
        "Las propinas para la tripulación y el guía son apreciadas pero no obligatorias."
      ],
      pt: [
        "Todas as refeições estão incluídas durante todo o cruzeiro.",
        "As taxas de entrada para todos os sítios de templos visitados estão incluídas.",
        "Os cruzeiros do Lago Nasser transportam muito menos passageiros do que os cruzeiros do Nilo — espere uma experiência íntima.",
        "Os templos no Lago Nasser estão entre os sítios antigos menos visitados do Egito; em alguns dias você pode tê-los completamente para si.",
        "Gorjetas para a tripulação e o guia são bem-vindas, mas não obrigatórias."
      ],
      it: [
        "Tutti i pasti sono inclusi durante l'intera crociera.",
        "I biglietti d'ingresso a tutti i siti templari visitati sono inclusi.",
        "Le crociere sul Lago Nasser trasportano molti meno passeggeri rispetto alle crociere sul Nilo — aspettatevi un'esperienza intima.",
        "I templi sul Lago Nasser sono tra i siti antichi meno visitati d'Egitto; in alcuni giorni potreste averli interamente a vostra disposizione.",
        "Le mance per l'equipaggio e la guida sono apprezzate ma non obbligatorie."
      ],
      fr: [
        "Tous les repas sont inclus pendant toute la croisière.",
        "Les frais d'entrée à tous les sites de temples visités sont inclus.",
        "Les croisières sur le lac Nasser accueillent beaucoup moins de passagers que les croisières sur le Nil — attendez-vous à une expérience intime.",
        "Les temples du lac Nasser comptent parmi les sites antiques les moins visités d'Égypte ; certains jours, vous pourriez les avoir entièrement pour vous.",
        "Les pourboires pour l'équipage et le guide sont appréciés mais non obligatoires."
      ],
      ru: [
        "Все приёмы пищи включены на протяжении всего круиза.",
        "Входные билеты на все посещаемые храмовые объекты включены.",
        "Круизы по озеру Насер вмещают значительно меньше пассажиров, чем круизы по Нилу — ожидайте уединённую атмосферу.",
        "Храмы на озере Насер входят в число наименее посещаемых древних объектов Египта; в некоторые дни они могут быть полностью в вашем распоряжении.",
        "Чаевые экипажу и гиду приветствуются, но не являются обязательными."
      ],
      de: [
        "Alle Mahlzeiten sind während der gesamten Kreuzfahrt inbegriffen.",
        "Die Eintrittsgebühren für alle besuchten Tempelstätten sind inbegriffen.",
        "Kreuzfahrten auf dem Nassersee befördern deutlich weniger Passagiere als Nilkreuzfahrten — erwarten Sie ein intimes Erlebnis.",
        "Die Tempel am Nassersee zählen zu den am wenigsten besuchten antiken Stätten Ägyptens; an manchen Tagen haben Sie sie vielleicht ganz für sich allein.",
        "Trinkgeld für Crew und Reiseleiter wird geschätzt, ist aber nicht verpflichtend."
      ]
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
            "Your Lake Nasser adventure begins at Aswan, where you'll transfer to the embarkation dock and board your intimate cruise ship, noticeably smaller and quieter than the large Nile cruise vessels further north — a hint of the more exclusive journey ahead. After settling into your cabin and a welcome briefing, the ship makes its first stop just south of the High Dam — the Kalabasha complex, home to three remarkable temples gathered on a single promontory above the lake, their relocated stones still bearing the marks of the rescue operation that saved them. The Temple of Kalabasha itself is one of the largest freestanding temples in Nubia, a grand Roman-era monument dedicated to the Nubian god Mandulis, its scale surprising for a site so rarely mentioned outside specialist guidebooks. Beside it, the rock-cut Temple of Beit El-Wali preserves some of the most vivid painted battle reliefs in Egypt, showing Ramses II charging into battle against the Nubians and Libyans in scenes still rich with original color after thousands of years. The elegant kiosk of Kertassi — just a few columns and a cornice, almost fragile in its simplicity — completes the group with unexpected grace, a quiet coda after the grandeur of Kalabasha.",
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
            "Today the ship reaches Wadi el-Seboua — 'Valley of the Lions' — where an avenue of human-headed sphinxes, weathered but still imposing, leads to one of the most remarkable temples on the lake. Built by Ramses II, the temple was later converted into a Christian church in the early centuries AD, and the paintings of saints applied directly over the ancient Egyptian reliefs were partially restored in the 20th century, leaving a ghostly palimpsest of two faiths occupying the same walls — pharaonic gods peeking out from beneath Coptic saints in a visual record of religious transformation spanning thousands of years. Nearby, the Temple of Dakka offers another architectural layer entirely — begun in the Meroitic era by a Nubian king, added to by Ptolemaic pharaohs centuries later, and further extended under the Roman emperor Augustus, making it a genuine palimpsest of cultures and centuries built one atop another. Its well-preserved pylon tower can be climbed for panoramic views across the lake, the water stretching to the horizon in every direction with barely another building in sight.",
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
            "The third day is the crown of the cruise — the ship reaches the southernmost point of the journey, the site of Abu Simbel, but not before stopping at two more remarkable monuments that most travelers to Egypt never even hear about. The Temple of Amada is the oldest temple on Lake Nasser, built during the reigns of Thutmose III and Amenhotep II in the 15th century BC, and preserves some of the finest and most vividly colored painted reliefs in all of Nubia, the pigments still startlingly bright against the pale sandstone. The nearby rock-cut Temple of Derr, built by Ramses II and dedicated to Ra-Horakhty, completes the morning before the ship makes the short final sail to Abu Simbel, where you'll spend the afternoon exploring both the Great Temple and the Temple of Nefertari with plenty of time and no crowds — a luxury almost unimaginable for a site this famous, made possible only by approaching from the water rather than the desert road.",
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
            "The final morning belongs to Abu Simbel once more. Before the convoy from Aswan arrives, you'll have the temples in the calm of the early hours — the ideal time to revisit the sanctuaries or simply sit in the presence of the great statues as the desert warms around you, the morning light still soft and forgiving on the carved stone. After breakfast and a last look at this extraordinary place, the ship begins the return journey north across the lake to Aswan, arriving in the afternoon in time for your onward travel arrangements, the temples slowly receding into the haze behind you until they vanish entirely from view, leaving only the memory of four days spent in one of the most remote and rewarding corners of ancient Egypt.",
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
      es: [{
        day: 1,
        title: "Asuán: embarque y templos de Kalabasha",
        description: "Su aventura por el lago Nasser comienza en Asuán, donde será trasladado al muelle de embarque y abordará su íntimo barco de crucero, notablemente más pequeño y silencioso que los grandes barcos de crucero del Nilo más al norte, un indicio del viaje más exclusivo que le espera. Después de instalarse en su camarote y recibir una sesión informativa de bienvenida, el barco hace su primera parada justo al sur de la Presa Alta: el complejo de Kalabasha, hogar de tres notables templos reunidos en un único promontorio sobre el lago, cuyas piedras reubicadas todavía conservan las marcas de la operación de rescate que los salvó. El Templo de Kalabasha en sí es uno de los templos independientes más grandes de Nubia, un gran monumento de la era romana dedicado al dios nubio Mandulis, cuya escala resulta sorprendente para un sitio tan poco mencionado fuera de las guías especializadas. A su lado, el templo excavado en la roca de Beit El-Wali conserva algunos de los relieves de batalla pintados más vívidos de Egipto, mostrando a Ramsés II cargando en batalla contra los nubios y los libios en escenas todavía ricas en color original después de miles de años. El elegante quiosco de Kertassi, solo unas columnas y una cornisa, casi frágil en su sencillez, completa el grupo con una gracia inesperada, una tranquila coda después de la grandeza de Kalabasha.",

        steps: [{
          time: "09:00",
          description: "Recogida en el hotel en Asuán y traslado al muelle de crucero del lago Nasser."
        }, {
          time: "10:00",
          description: "Embarque y check-in en el camarote. Sesión informativa de bienvenida por el director del crucero."
        }, {
          time: "12:00",
          description: "Almuerzo de bienvenida a bordo."
        }, {
          time: "14:00",
          description: "Breve traslado al complejo de templos de Kalabasha."
        }, {
          time: "14:30",
          description: "Visita guiada al Templo de Kalabasha: camine por el pilono, la sala hipóstila y el santuario dedicado al dios nubio Mandulis."
        }, {
          time: "15:30",
          description: "Visite Beit El-Wali: explore los vívidos relieves de batalla y las cámaras pintadas del templo excavado en la roca."
        }, {
          time: "16:00",
          description: "Vea el quiosco de Kertassi, un pequeño pero elegante fragmento de templo con vista al lago."
        }, {
          time: "17:00",
          description: "Regreso al barco. Navegación hacia el sur a través del lago Nasser."
        }, {
          time: "19:30",
          description: "Cena a bordo. Noche libre mientras el barco navega a través de la noche del desierto."
        }]
      }, {
        day: 2,
        title: "Templos de Wadi el-Seboua y Dakka",
        description: "Hoy el barco llega a Wadi el-Seboua, el 'Valle de los Leones', donde una avenida de esfinges con cabeza humana, desgastadas pero todavía imponentes, conduce a uno de los templos más notables del lago. Construido por Ramsés II, el templo fue convertido más tarde en una iglesia cristiana en los primeros siglos d. C., y las pinturas de santos aplicadas directamente sobre los relieves egipcios antiguos fueron parcialmente restauradas en el siglo XX, dejando un fantasmal palimpsesto de dos fes ocupando los mismos muros, dioses faraónicos asomándose bajo santos coptos en un registro visual de transformación religiosa que abarca miles de años. Cerca de allí, el Templo de Dakka ofrece toda otra capa arquitectónica: comenzado en la era meroítica por un rey nubio, ampliado por faraones ptolemaicos siglos después, y extendido aún más bajo el emperador romano Augusto, lo que lo convierte en un genuino palimpsesto de culturas y siglos construidos uno sobre otro. Su torre de pilono bien conservada puede escalarse para obtener vistas panorámicas del lago, con el agua extendiéndose hacia el horizonte en todas direcciones, sin apenas otro edificio a la vista.",

        steps: [{
          time: "07:00",
          description: "Desayuno a bordo mientras el barco llega a Wadi el-Seboua."
        }, {
          time: "08:30",
          description: "Desembarque para la visita guiada de Wadi el-Seboua. Camine por la avenida de esfinges y entre al templo: su guía explica tanto el diseño faraónico original como su posterior transformación cristiana."
        }, {
          time: "10:00",
          description: "Breve caminata o traslado al Templo de Dakka. Explore la construcción multietapa del templo y suba al pilono para obtener vistas del lago."
        }, {
          time: "11:30",
          description: "Regreso al barco."
        }, {
          time: "13:00",
          description: "Almuerzo a bordo. Navegación de tarde a través del tranquilo lago."
        }, {
          time: "15:30",
          description: "Tiempo opcional en cubierta para relajarse, observar aves o leer mientras pasa la extraordinaria belleza desolada del lago."
        }, {
          time: "19:30",
          description: "Cena a bordo. Atardecer sobre el lago Nasser desde la cubierta."
        }]
      }, {
        day: 3,
        title: "Templos de Amada y Derr + Abu Simbel",
        description: "El tercer día es la joya del crucero: el barco alcanza el punto más meridional del viaje, el sitio de Abu Simbel, pero no antes de detenerse en otros dos notables monumentos de los que la mayoría de los viajeros a Egipto jamás llegan a oír hablar. El Templo de Amada es el templo más antiguo del lago Nasser, construido durante los reinados de Tutmosis III y Amenhotep II en el siglo XV a. C., y conserva algunos de los relieves pintados más finos y de colores más vívidos de toda Nubia, con los pigmentos todavía sorprendentemente brillantes contra la pálida arenisca. El cercano Templo de Derr, excavado en la roca, construido por Ramsés II y dedicado a Ra-Horajty, completa la mañana antes de que el barco realice la breve navegación final hacia Abu Simbel, donde pasará la tarde explorando tanto el Gran Templo como el Templo de Nefertari con mucho tiempo y sin multitudes, un lujo casi inimaginable para un sitio tan famoso, posible solo al llegar desde el agua en lugar de la carretera del desierto.",

        steps: [{
          time: "06:30",
          description: "Desayuno temprano mientras el barco llega a Amada."
        }, {
          time: "07:30",
          description: "Visita guiada al Templo de Amada: explore el templo más antiguo del lago, sus relieves pintados notablemente conservados y sus inscripciones históricas que abarcan eventos de los reinados de dos faraones."
        }, {
          time: "09:00",
          description: "Breve traslado al Templo excavado en la roca de Derr. Visita guiada a las cámaras interiores y sus relieves dedicados a Ra-Horajty."
        }, {
          time: "10:30",
          description: "Regreso al barco. Navegación final hacia el sur, a Abu Simbel."
        }, {
          time: "12:00",
          description: "Llegada a Abu Simbel. Almuerzo a bordo."
        }, {
          time: "14:00",
          description: "Visita guiada al Gran Templo de Ramsés II en Abu Simbel: párese frente a las cuatro estatuas colosales, entre a la sala hipóstila y llegue al santuario interior."
        }, {
          time: "15:30",
          description: "Visita guiada al Templo de Nefertari."
        }, {
          time: "16:30",
          description: "Tiempo libre en Abu Simbel: camine junto al lago, fotografíe los templos y absorba el ambiente."
        }, {
          time: "18:00",
          description: "Regreso al barco. Cena de gala a bordo."
        }]
      }, {
        day: 4,
        title: "Espectáculo de luz y sonido de Abu Simbel y regreso",
        description: "La última mañana pertenece a Abu Simbel una vez más. Antes de que llegue el convoy desde Asuán, tendrá los templos en la calma de las primeras horas, el momento ideal para volver a visitar los santuarios o simplemente sentarse en presencia de las grandes estatuas mientras el desierto se calienta a su alrededor, con la luz de la mañana todavía suave y benévola sobre la piedra esculpida. Después del desayuno y una última mirada a este extraordinario lugar, el barco comienza el viaje de regreso hacia el norte a través del lago hasta Asuán, llegando por la tarde a tiempo para sus planes de viaje posteriores, con los templos retrocediendo lentamente en la bruma detrás de usted hasta desaparecer por completo de la vista, dejando solo el recuerdo de cuatro días pasados en uno de los rincones más remotos y gratificantes del antiguo Egipto.",

        steps: [{
          time: "06:30",
          description: "Visita matutina opcional de regreso a Abu Simbel antes de que lleguen las multitudes de excursionistas de un día: la mejor luz para la fotografía."
        }, {
          time: "08:00",
          description: "Desayuno a bordo."
        }, {
          time: "09:00",
          description: "Salida de Abu Simbel. El barco navega hacia el norte de vuelta a través del lago Nasser hacia Asuán."
        }, {
          time: "13:00",
          description: "Almuerzo a bordo durante la navegación de regreso."
        }, {
          time: "16:00",
          description: "Llegada al muelle de Asuán. Desembarque y check-out."
        }, {
          time: "16:30",
          description: "Traslado a su hotel en Asuán o a la estación de tren. Fin del tour."
        }]
      }],
      pt: [{
        day: 1,
        title: "Assuão — Embarque e Templos de Kalabasha",
        description: "Sua aventura no Lago Nasser começa em Assuão, onde você será transferido até o cais de embarque e embarcará em seu íntimo navio de cruzeiro, perceptivelmente menor e mais silencioso do que os grandes navios de cruzeiro do Nilo mais ao norte — um indício da jornada mais exclusiva que está por vir. Após se instalar em sua cabine e participar de um briefing de boas-vindas, o navio faz sua primeira parada pouco ao sul da Grande Barragem — o complexo de Kalabasha, que reúne três notáveis templos em um único promontório sobre o lago, cujas pedras realocadas ainda carregam as marcas da operação de resgate que os salvou. O Templo de Kalabasha em si é um dos maiores templos isolados da Núbia, um grande monumento da era romana dedicado ao deus núbio Mandulis, cuja escala surpreende para um sítio tão raramente mencionado fora de guias especializados. Ao lado, o Templo de Beit El-Wali, escavado na rocha, preserva alguns dos relevos pintados de batalha mais vívidos do Egito, mostrando Ramsés II avançando em combate contra núbios e líbios em cenas ainda ricas em cor original após milhares de anos. O elegante quiosque de Kertassi — apenas algumas colunas e uma cornija, quase frágil em sua simplicidade — completa o conjunto com uma graça inesperada, uma coda silenciosa após a grandiosidade de Kalabasha.",

        steps: [{
          time: "09:00",
          description: "Busca no hotel em Assuão e traslado até o cais de cruzeiros do Lago Nasser."
        }, {
          time: "10:00",
          description: "Embarque e check-in na cabine. Briefing de boas-vindas pelo diretor do cruzeiro."
        }, {
          time: "12:00",
          description: "Almoço de boas-vindas a bordo."
        }, {
          time: "14:00",
          description: "Breve traslado até o complexo de templos de Kalabasha."
        }, {
          time: "14:30",
          description: "Tour guiado pelo Templo de Kalabasha — caminhe pelo pilone, o salão hipostilo e o santuário dedicado ao deus núbio Mandulis."
        }, {
          time: "15:30",
          description: "Visite Beit El-Wali — explore os vívidos relevos de batalha e as câmaras pintadas do templo escavado na rocha."
        }, {
          time: "16:00",
          description: "Veja o quiosque de Kertassi — um pequeno mas elegante fragmento de templo com vista para o lago."
        }, {
          time: "17:00",
          description: "Retorno ao navio. Navegação para o sul através do Lago Nasser."
        }, {
          time: "19:30",
          description: "Jantar a bordo. Noite livre enquanto o navio navega pela noite do deserto."
        }]
      }, {
        day: 2,
        title: "Templos de Wadi el-Seboua e Dakka",
        description: "Hoje o navio chega a Wadi el-Seboua — o 'Vale dos Leões' — onde uma avenida de esfinges de cabeça humana, desgastadas mas ainda imponentes, leva a um dos templos mais notáveis do lago. Construído por Ramsés II, o templo foi posteriormente convertido em uma igreja cristã nos primeiros séculos d.C., e as pinturas de santos aplicadas diretamente sobre os antigos relevos egípcios foram parcialmente restauradas no século XX, deixando um fantasmagórico palimpsesto de duas fés ocupando as mesmas paredes — deuses faraônicos espreitando sob santos coptas em um registro visual de transformação religiosa que abrange milhares de anos. Próximo dali, o Templo de Dakka oferece outra camada arquitetônica inteiramente diferente — iniciado na era meroítica por um rei núbio, ampliado por faraós ptolemaicos séculos depois, e ainda mais estendido sob o imperador romano Augusto, tornando-o um verdadeiro palimpsesto de culturas e séculos construídos um sobre o outro. Sua torre de pilone bem preservada pode ser escalada para vistas panorâmicas do lago, com a água se estendendo até o horizonte em todas as direções, quase sem nenhuma outra construção à vista.",

        steps: [{
          time: "07:00",
          description: "Café da manhã a bordo enquanto o navio chega a Wadi el-Seboua."
        }, {
          time: "08:30",
          description: "Desembarque para o tour guiado de Wadi el-Seboua. Caminhe pela avenida das esfinges e entre no templo — seu guia explica tanto o design faraônico original quanto sua posterior transformação cristã."
        }, {
          time: "10:00",
          description: "Breve caminhada ou traslado até o Templo de Dakka. Explore a construção multietapas do templo e suba o pilone para vistas do lago."
        }, {
          time: "11:30",
          description: "Retorno ao navio."
        }, {
          time: "13:00",
          description: "Almoço a bordo. Navegação da tarde através do lago tranquilo."
        }, {
          time: "15:30",
          description: "Tempo opcional no deck para relaxar, observar aves ou ler enquanto a extraordinária beleza desolada do lago passa diante de você."
        }, {
          time: "19:30",
          description: "Jantar a bordo. Pôr do sol sobre o Lago Nasser visto do deck."
        }]
      }, {
        day: 3,
        title: "Templos de Amada e Derr + Abu Simbel",
        description: "O terceiro dia é o ponto culminante do cruzeiro — o navio alcança o ponto mais ao sul da jornada, o sítio de Abu Simbel, mas não antes de parar em mais dois notáveis monumentos sobre os quais a maioria dos viajantes ao Egito nunca ouve falar. O Templo de Amada é o templo mais antigo do Lago Nasser, construído durante os reinados de Tutmés III e Amenhotep II, no século XV a.C., e preserva alguns dos relevos pintados mais finos e vivamente coloridos de toda a Núbia, com pigmentos ainda surpreendentemente vivos contra o arenito pálido. O próximo Templo de Derr, escavado na rocha, construído por Ramsés II e dedicado a Ra-Horakhty, completa a manhã antes que o navio faça a breve navegação final até Abu Simbel, onde você passará a tarde explorando tanto o Grande Templo quanto o Templo de Nefertari com bastante tempo e sem multidões — um luxo quase inimaginável para um sítio tão famoso, possível apenas ao se aproximar pela água, em vez da estrada do deserto.",

        steps: [{
          time: "06:30",
          description: "Café da manhã antecipado enquanto o navio chega a Amada."
        }, {
          time: "07:30",
          description: "Tour guiado pelo Templo de Amada — explore o templo mais antigo do lago, seus relevos pintados notavelmente preservados e suas inscrições históricas que abrangem eventos dos reinados de dois faraós."
        }, {
          time: "09:00",
          description: "Breve traslado até o Templo de Derr, escavado na rocha. Tour guiado pelas câmaras internas e seus relevos dedicados a Ra-Horakhty."
        }, {
          time: "10:30",
          description: "Retorno ao navio. Navegação final para o sul, até Abu Simbel."
        }, {
          time: "12:00",
          description: "Chegada a Abu Simbel. Almoço a bordo."
        }, {
          time: "14:00",
          description: "Tour guiado pelo Grande Templo de Ramsés II em Abu Simbel — fique diante das quatro estátuas colossais, entre no salão hipostilo e alcance o santuário interior."
        }, {
          time: "15:30",
          description: "Tour guiado pelo Templo de Nefertari."
        }, {
          time: "16:30",
          description: "Tempo livre em Abu Simbel — caminhe ao longo do lago, fotografe os templos e absorva a atmosfera."
        }, {
          time: "18:00",
          description: "Retorno ao navio. Jantar de gala a bordo."
        }]
      }, {
        day: 4,
        title: "Espetáculo de Som e Luz de Abu Simbel e retorno",
        description: "A última manhã pertence a Abu Simbel uma vez mais. Antes que o comboio de Assuão chegue, você terá os templos na calma das primeiras horas — o momento ideal para revisitar os santuários ou simplesmente sentar-se na presença das grandes estátuas enquanto o deserto se aquece ao redor, com a luz matinal ainda suave e gentil sobre a pedra esculpida. Após o café da manhã e um último olhar a este lugar extraordinário, o navio inicia a viagem de retorno ao norte através do lago até Assuão, chegando à tarde a tempo para seus próximos planos de viagem, com os templos lentamente recuando na névoa atrás de você até desaparecerem completamente de vista, deixando apenas a memória de quatro dias passados em um dos cantos mais remotos e gratificantes do Egito Antigo.",

        steps: [{
          time: "06:30",
          description: "Visita matinal opcional de retorno a Abu Simbel antes da chegada das multidões de excursionistas de um dia — a melhor luz para fotografia."
        }, {
          time: "08:00",
          description: "Café da manhã a bordo."
        }, {
          time: "09:00",
          description: "Partida de Abu Simbel. O navio navega para o norte, de volta através do Lago Nasser em direção a Assuão."
        }, {
          time: "13:00",
          description: "Almoço a bordo durante a navegação de retorno."
        }, {
          time: "16:00",
          description: "Chegada ao cais de Assuão. Desembarque e check-out."
        }, {
          time: "16:30",
          description: "Traslado até seu hotel em Assuão ou até a estação de trem. Fim do tour."
        }]
      }],
      it: [{
        day: 1,
        title: "Assuan — Imbarco e Templi di Kalabasha",
        description: "La vostra avventura sul Lago Nasser inizia ad Assuan, dove verrete trasferiti al molo di imbarco e salirete a bordo della vostra intima nave da crociera, notevolmente più piccola e silenziosa rispetto alle grandi navi da crociera del Nilo più a nord — un accenno al viaggio più esclusivo che vi attende. Dopo essersi sistemati in cabina e aver partecipato a un briefing di benvenuto, la nave effettua la sua prima sosta appena a sud della Grande Diga — il complesso di Kalabasha, sede di tre notevoli templi raccolti su un unico promontorio sopra il lago, le cui pietre trasferite portano ancora i segni dell'operazione di salvataggio che le ha preservate. Il Tempio di Kalabasha stesso è uno dei più grandi templi indipendenti della Nubia, un grandioso monumento dell'epoca romana dedicato al dio nubiano Mandulis, la cui scala sorprende per un sito così raramente menzionato fuori dalle guide specializzate. Accanto, il Tempio rupestre di Beit El-Wali conserva alcuni dei rilievi di battaglia dipinti più vividi d'Egitto, che mostrano Ramses II lanciarsi in battaglia contro nubiani e libici in scene ancora ricche di colore originale dopo migliaia di anni. L'elegante chiosco di Kertassi — solo poche colonne e una cornice, quasi fragile nella sua semplicità — completa il gruppo con inaspettata grazia, un quieto epilogo dopo la grandiosità di Kalabasha.",

        steps: [{
          time: "09:00",
          description: "Ritiro in hotel ad Assuan e trasferimento al molo della crociera sul Lago Nasser."
        }, {
          time: "10:00",
          description: "Imbarco e check-in in cabina. Briefing di benvenuto a cura del direttore di crociera."
        }, {
          time: "12:00",
          description: "Pranzo di benvenuto a bordo."
        }, {
          time: "14:00",
          description: "Breve trasferimento al complesso templare di Kalabasha."
        }, {
          time: "14:30",
          description: "Visita guidata al Tempio di Kalabasha — camminate attraverso il pilone, la sala ipostila e il santuario dedicato al dio nubiano Mandulis."
        }, {
          time: "15:30",
          description: "Visitate Beit El-Wali — esplorate i vividi rilievi di battaglia e le camere dipinte del tempio rupestre."
        }, {
          time: "16:00",
          description: "Osservate il chiosco di Kertassi — un piccolo ma elegante frammento di tempio con vista sul lago."
        }, {
          time: "17:00",
          description: "Ritorno alla nave. Navigazione verso sud attraverso il Lago Nasser."
        }, {
          time: "19:30",
          description: "Cena a bordo. Serata libera mentre la nave naviga nella notte del deserto."
        }]
      }, {
        day: 2,
        title: "Templi di Wadi el-Seboua e Dakka",
        description: "Oggi la nave raggiunge Wadi el-Seboua — la 'Valle dei Leoni' — dove un viale di sfingi a testa umana, erose ma ancora imponenti, conduce a uno dei templi più notevoli del lago. Costruito da Ramses II, il tempio fu in seguito convertito in chiesa cristiana nei primi secoli d.C., e i dipinti di santi applicati direttamente sopra gli antichi rilievi egizi furono parzialmente restaurati nel XX secolo, lasciando un fantasmagorico palinsesto di due fedi che occupano le stesse pareti — divinità faraoniche che fanno capolino da sotto santi copti in un registro visivo di trasformazione religiosa che abbraccia migliaia di anni. Nelle vicinanze, il Tempio di Dakka offre un altro strato architettonico completamente diverso — iniziato in epoca meroitica da un re nubiano, ampliato da faraoni ptolemaici secoli dopo, e ulteriormente estesa sotto l'imperatore romano Augusto, rendendolo un autentico palinsesto di culture e secoli sovrapposti l'uno sull'altro. La sua torre del pilone ben conservata può essere scalata per vedute panoramiche sul lago, con l'acqua che si estende all'orizzonte in ogni direzione, con a malapena un altro edificio in vista.",

        steps: [{
          time: "07:00",
          description: "Colazione a bordo mentre la nave raggiunge Wadi el-Seboua."
        }, {
          time: "08:30",
          description: "Sbarco per la visita guidata di Wadi el-Seboua. Percorrete il viale delle sfingi ed entrate nel tempio — la guida spiega sia il design faraonico originale sia la sua successiva trasformazione cristiana."
        }, {
          time: "10:00",
          description: "Breve camminata o trasferimento al Tempio di Dakka. Esplorate la costruzione multi-epoca del tempio e scalate il pilone per le vedute sul lago."
        }, {
          time: "11:30",
          description: "Ritorno alla nave."
        }, {
          time: "13:00",
          description: "Pranzo a bordo. Navigazione pomeridiana attraverso il tranquillo lago."
        }, {
          time: "15:30",
          description: "Tempo opzionale sul ponte per relax, birdwatching o lettura mentre passa la straordinaria bellezza desolata del lago."
        }, {
          time: "19:30",
          description: "Cena a bordo. Tramonto sul Lago Nasser visto dal ponte."
        }]
      }, {
        day: 3,
        title: "Templi di Amada e Derr + Abu Simbel",
        description: "Il terzo giorno è il momento culminante della crociera — la nave raggiunge il punto più meridionale del viaggio, il sito di Abu Simbel, ma non prima di fermarsi presso altri due notevoli monumenti di cui la maggior parte dei viaggiatori in Egitto non sente mai parlare. Il Tempio di Amada è il tempio più antico sul Lago Nasser, costruito durante i regni di Thutmose III e Amenhotep II nel XV secolo a.C., e conserva alcuni dei rilievi dipinti più fini e vivacemente colorati di tutta la Nubia, con i pigmenti ancora sorprendentemente vivaci contro l'arenaria pallida. Il vicino Tempio rupestre di Derr, costruito da Ramses II e dedicato a Ra-Horakhty, completa la mattinata prima che la nave compia la breve navigazione finale verso Abu Simbel, dove passerete il pomeriggio esplorando sia il Grande Tempio che il Tempio di Nefertari con ampio tempo a disposizione e senza folle — un lusso quasi inimmaginabile per un sito così famoso, possibile solo avvicinandosi dall'acqua piuttosto che dalla strada del deserto.",

        steps: [{
          time: "06:30",
          description: "Colazione anticipata mentre la nave arriva ad Amada."
        }, {
          time: "07:30",
          description: "Visita guidata al Tempio di Amada — esplorate il tempio più antico del lago, i suoi rilievi dipinti straordinariamente conservati e le sue iscrizioni storiche che documentano eventi dei regni di due faraoni."
        }, {
          time: "09:00",
          description: "Breve trasferimento al Tempio rupestre di Derr. Visita guidata alle camere interne e ai loro rilievi dedicati a Ra-Horakhty."
        }, {
          time: "10:30",
          description: "Ritorno alla nave. Navigazione finale verso sud, verso Abu Simbel."
        }, {
          time: "12:00",
          description: "Arrivo ad Abu Simbel. Pranzo a bordo."
        }, {
          time: "14:00",
          description: "Visita guidata al Grande Tempio di Ramses II ad Abu Simbel — fermatevi davanti alle quattro statue colossali, entrate nella sala ipostila e raggiungete il santuario interno."
        }, {
          time: "15:30",
          description: "Visita guidata al Tempio di Nefertari."
        }, {
          time: "16:30",
          description: "Tempo libero ad Abu Simbel — camminate lungo il lago, fotografate i templi e assorbite l'atmosfera."
        }, {
          time: "18:00",
          description: "Ritorno alla nave. Cena di gala a bordo."
        }]
      }, {
        day: 4,
        title: "Spettacolo di Luci e Suoni di Abu Simbel e ritorno",
        description: "L'ultima mattinata appartiene ancora una volta ad Abu Simbel. Prima che il convoglio da Assuan arrivi, avrete i templi nella calma delle prime ore — il momento ideale per rivisitare i santuari o semplicemente sedersi in presenza delle grandi statue mentre il deserto si riscalda attorno a voi, con la luce del mattino ancora soffusa e benevola sulla pietra scolpita. Dopo la colazione e un ultimo sguardo a questo luogo straordinario, la nave inizia il viaggio di ritorno verso nord attraverso il lago fino ad Assuan, arrivando nel pomeriggio in tempo per i vostri successivi spostamenti, con i templi che lentamente si dissolvono nella foschia dietro di voi finché non svaniscono completamente dalla vista, lasciando solo il ricordo di quattro giorni passati in uno degli angoli più remoti e gratificanti dell'antico Egitto.",

        steps: [{
          time: "06:30",
          description: "Visita opzionale di prima mattina ad Abu Simbel prima dell'arrivo delle folle delle gite di un giorno — la luce migliore per la fotografia."
        }, {
          time: "08:00",
          description: "Colazione a bordo."
        }, {
          time: "09:00",
          description: "Partenza da Abu Simbel. La nave naviga verso nord, di ritorno attraverso il Lago Nasser in direzione di Assuan."
        }, {
          time: "13:00",
          description: "Pranzo a bordo durante la navigazione di ritorno."
        }, {
          time: "16:00",
          description: "Arrivo al molo di Assuan. Sbarco e check-out."
        }, {
          time: "16:30",
          description: "Trasferimento al vostro hotel ad Assuan o alla stazione ferroviaria. Fine del tour."
        }]
      }],
      fr: [{
        day: 1,
        title: "Assouan — Embarquement et temples de Kalabasha",
        description: "Votre aventure sur le lac Nasser commence à Assouan, où vous serez transféré jusqu'au quai d'embarquement pour monter à bord de votre bateau de croisière intimiste, nettement plus petit et plus silencieux que les grands navires de croisière du Nil plus au nord — un avant-goût du voyage plus exclusif qui vous attend. Après vous être installé dans votre cabine et avoir assisté à un briefing de bienvenue, le bateau effectue son premier arrêt juste au sud du Haut Barrage — le complexe de Kalabasha, qui regroupe trois temples remarquables sur un seul promontoire au-dessus du lac, leurs pierres déplacées portant encore les marques de l'opération de sauvetage qui les a préservées. Le temple de Kalabasha lui-même est l'un des plus grands temples autonomes de Nubie, un monument grandiose de l'époque romaine dédié au dieu nubien Mandulis, dont l'ampleur surprend pour un site si rarement mentionné hors des guides spécialisés. À ses côtés, le temple rupestre de Beit El-Wali conserve certains des reliefs de bataille peints les plus vivants d'Égypte, montrant Ramsès II chargeant au combat contre les Nubiens et les Libyens dans des scènes encore riches en couleurs originales après des milliers d'années. L'élégant kiosque de Kertassi — seulement quelques colonnes et une corniche, presque fragile dans sa simplicité — complète l'ensemble avec une grâce inattendue, une coda paisible après la grandeur de Kalabasha.",

        steps: [{
          time: "09:00",
          description: "Prise en charge à l'hôtel à Assouan et transfert vers le quai de croisière du lac Nasser."
        }, {
          time: "10:00",
          description: "Embarquement et enregistrement en cabine. Briefing de bienvenue par le directeur de croisière."
        }, {
          time: "12:00",
          description: "Déjeuner de bienvenue à bord."
        }, {
          time: "14:00",
          description: "Court trajet vers le complexe des temples de Kalabasha."
        }, {
          time: "14:30",
          description: "Visite guidée du temple de Kalabasha — traversez le pylône, la salle hypostyle et le sanctuaire dédié au dieu nubien Mandulis."
        }, {
          time: "15:30",
          description: "Visitez Beit El-Wali — explorez les reliefs de bataille peints et saisissants ainsi que les chambres peintes du temple rupestre."
        }, {
          time: "16:00",
          description: "Découvrez le kiosque de Kertassi — un petit fragment de temple, élégant, avec vue sur le lac."
        }, {
          time: "17:00",
          description: "Retour au bateau. Navigation vers le sud à travers le lac Nasser."
        }, {
          time: "19:30",
          description: "Dîner à bord. Soirée libre tandis que le bateau navigue dans la nuit du désert."
        }]
      }, {
        day: 2,
        title: "Temples de Wadi el-Seboua et Dakka",
        description: "Aujourd'hui, le bateau atteint Wadi el-Seboua — la « vallée des lions » — où une allée de sphinx à tête humaine, érodés mais toujours imposants, mène à l'un des temples les plus remarquables du lac. Construit par Ramsès II, le temple a été plus tard converti en église chrétienne dans les premiers siècles après J.-C., et les peintures de saints appliquées directement sur les anciens reliefs égyptiens ont été partiellement restaurées au XXe siècle, laissant un palimpseste fantomatique de deux croyances occupant les mêmes murs — des dieux pharaoniques apparaissant sous des saints coptes dans une trace visuelle d'une transformation religieuse s'étendant sur des milliers d'années. Tout proche, le temple de Dakka offre une toute autre strate architecturale — commencé à l'époque méroïtique par un roi nubien, agrandi par des pharaons ptolémaïques des siècles plus tard, puis encore étendu sous l'empereur romain Auguste, en faisant un véritable palimpseste de cultures et de siècles superposés. Sa tour-pylône bien conservée peut être gravie pour profiter de vues panoramiques sur le lac, l'eau s'étendant jusqu'à l'horizon dans toutes les directions, avec à peine un autre bâtiment en vue.",

        steps: [{
          time: "07:00",
          description: "Petit-déjeuner à bord à l'arrivée du bateau à Wadi el-Seboua."
        }, {
          time: "08:30",
          description: "Débarquement pour la visite guidée de Wadi el-Seboua. Parcourez l'allée des sphinx et entrez dans le temple — votre guide explique à la fois la conception pharaonique d'origine et sa transformation chrétienne ultérieure."
        }, {
          time: "10:00",
          description: "Courte marche ou trajet vers le temple de Dakka. Explorez la construction multi-époques du temple et grimpez le pylône pour des vues sur le lac."
        }, {
          time: "11:30",
          description: "Retour au bateau."
        }, {
          time: "13:00",
          description: "Déjeuner à bord. Navigation de l'après-midi à travers le lac tranquille."
        }, {
          time: "15:30",
          description: "Temps libre optionnel sur le pont pour se détendre, observer les oiseaux ou lire tandis que défile l'extraordinaire beauté désolée du lac."
        }, {
          time: "19:30",
          description: "Dîner à bord. Coucher de soleil sur le lac Nasser depuis le pont."
        }]
      }, {
        day: 3,
        title: "Temples d'Amada et de Derr + Abou Simbel",
        description: "Le troisième jour est le point d'orgue de la croisière — le bateau atteint le point le plus méridional du voyage, le site d'Abou Simbel, mais pas avant de s'arrêter à deux autres monuments remarquables dont la plupart des voyageurs en Égypte n'entendent jamais parler. Le temple d'Amada est le plus ancien temple du lac Nasser, construit sous les règnes de Thoutmôsis III et d'Amenhotep II au XVe siècle av. J.-C., et conserve certains des reliefs peints les plus fins et les plus vivement colorés de toute la Nubie, les pigments restant étonnamment vifs contre le grès pâle. Le temple rupestre voisin de Derr, construit par Ramsès II et dédié à Râ-Horakhty, complète la matinée avant que le bateau n'effectue la courte dernière traversée vers Abou Simbel, où vous passerez l'après-midi à explorer à la fois le Grand Temple et le temple de Néfertari, avec amplement de temps et sans foule — un luxe presque inimaginable pour un site aussi célèbre, rendu possible uniquement en y accédant par l'eau plutôt que par la route du désert.",

        steps: [{
          time: "06:30",
          description: "Petit-déjeuner matinal à l'arrivée du bateau à Amada."
        }, {
          time: "07:30",
          description: "Visite guidée du temple d'Amada — explorez le plus ancien temple du lac, ses reliefs peints remarquablement préservés et ses inscriptions historiques couvrant les événements des règnes de deux pharaons."
        }, {
          time: "09:00",
          description: "Court trajet vers le temple rupestre de Derr. Visite guidée des chambres intérieures et de leurs reliefs dédiés à Râ-Horakhty."
        }, {
          time: "10:30",
          description: "Retour au bateau. Dernière traversée vers le sud, jusqu'à Abou Simbel."
        }, {
          time: "12:00",
          description: "Arrivée à Abou Simbel. Déjeuner à bord."
        }, {
          time: "14:00",
          description: "Visite guidée du Grand Temple de Ramsès II à Abou Simbel — tenez-vous devant les quatre statues colossales, entrez dans la salle hypostyle et atteignez le sanctuaire intérieur."
        }, {
          time: "15:30",
          description: "Visite guidée du temple de Néfertari."
        }, {
          time: "16:30",
          description: "Temps libre à Abou Simbel — promenez-vous le long du lac, photographiez les temples et imprégnez-vous de l'atmosphère."
        }, {
          time: "18:00",
          description: "Retour au bateau. Dîner de gala à bord."
        }]
      }, {
        day: 4,
        title: "Spectacle son et lumière d'Abou Simbel et retour",
        description: "La dernière matinée appartient une fois encore à Abou Simbel. Avant que le convoi venant d'Assouan n'arrive, vous profiterez des temples dans le calme des premières heures — le moment idéal pour revisiter les sanctuaires ou simplement vous asseoir en présence des grandes statues tandis que le désert se réchauffe autour de vous, la lumière du matin encore douce et clémente sur la pierre sculptée. Après le petit-déjeuner et un dernier regard sur ce lieu extraordinaire, le bateau entame son voyage de retour vers le nord à travers le lac jusqu'à Assouan, arrivant dans l'après-midi à temps pour vos déplacements ultérieurs, les temples s'estompant lentement dans la brume derrière vous jusqu'à disparaître entièrement de votre vue, ne laissant que le souvenir de quatre jours passés dans l'un des coins les plus reculés et les plus gratifiants de l'Égypte antique.",

        steps: [{
          time: "06:30",
          description: "Visite matinale optionnelle de retour à Abou Simbel avant l'arrivée des foules de visiteurs d'une journée — la meilleure lumière pour la photographie."
        }, {
          time: "08:00",
          description: "Petit-déjeuner à bord."
        }, {
          time: "09:00",
          description: "Départ d'Abou Simbel. Le bateau navigue vers le nord, retraversant le lac Nasser en direction d'Assouan."
        }, {
          time: "13:00",
          description: "Déjeuner à bord pendant la navigation de retour."
        }, {
          time: "16:00",
          description: "Arrivée au quai d'Assouan. Débarquement et départ."
        }, {
          time: "16:30",
          description: "Transfert vers votre hôtel à Assouan ou vers la gare. Fin de l'excursion."
        }]
      }],
      ru: [{
        day: 1,
        title: "Асуан — посадка на судно и храмы Калабши",
        description: "Ваше приключение на озере Насер начинается в Асуане, где вас отвезут к причалу для посадки на ваше уютное круизное судно, заметно меньшее и тише, чем крупные круизные суда Нила севернее — намёк на более эксклюзивное путешествие, которое вас ждёт. После того как вы обустроитесь в каюте и пройдёте приветственный инструктаж, судно делает первую остановку чуть южнее Высотной плотины — в комплексе Калабша, где на одном мысе над озером собраны три замечательных храма, чьи перемещённые камни до сих пор хранят следы спасательной операции, которая их сохранила. Сам храм Калабша — один из крупнейших отдельно стоящих храмов Нубии, грандиозный памятник римской эпохи, посвящённый нубийскому богу Мандулису, чей масштаб удивляет для места, столь редко упоминаемого за пределами специализированных путеводителей. Рядом высеченный в скале храм Бейт-эль-Вали хранит одни из самых ярких расписных батальных рельефов Египта, изображающие Рамсеса II, идущего в бой против нубийцев и ливийцев, в сценах, до сих пор насыщенных оригинальным цветом спустя тысячи лет. Изящный киоск Кертасси — всего несколько колонн и карниз, почти хрупкий в своей простоте — завершает группу неожиданным изяществом, тихим финалом после величия Калабши.",

        steps: [{
          time: "09:00",
          description: "Трансфер из отеля в Асуане к причалу круизных судов озера Насер."
        }, {
          time: "10:00",
          description: "Посадка на судно и регистрация в каюте. Приветственный инструктаж от директора круиза."
        }, {
          time: "12:00",
          description: "Приветственный обед на борту."
        }, {
          time: "14:00",
          description: "Короткая поездка к комплексу храмов Калабша."
        }, {
          time: "14:30",
          description: "Экскурсия с гидом по храму Калабша — прогулка через пилон, гипостильный зал и святилище, посвящённое нубийскому богу Мандулису."
        }, {
          time: "15:30",
          description: "Посещение Бейт-эль-Вали — яркие расписные батальные рельефы и расписные камеры храма, высеченного в скале."
        }, {
          time: "16:00",
          description: "Осмотр киоска Кертасси — небольшой, но изящный фрагмент храма с видом на озеро."
        }, {
          time: "17:00",
          description: "Возвращение на судно. Плавание на юг через озеро Насер."
        }, {
          time: "19:30",
          description: "Ужин на борту. Свободный вечер, пока судно плывёт сквозь пустынную ночь."
        }]
      }, {
        day: 2,
        title: "Храмы Вади-эс-Себуа и Дакка",
        description: "Сегодня судно прибывает в Вади-эс-Себуа — «Долину львов» — где аллея сфинксов с человеческими головами, выветренных, но всё ещё внушительных, ведёт к одному из самых примечательных храмов на озере. Построенный Рамсесом II, храм позднее был превращён в христианскую церковь в первые века н.э., и росписи святых, нанесённые прямо поверх древнеегипетских рельефов, были частично восстановлены в XX веке, оставив призрачный палимпсест двух вер, занимающих одни и те же стены — фараоновские боги выглядывают из-под коптских святых в визуальной летописи религиозной трансформации, охватывающей тысячи лет. Рядом храм Дакка предлагает совершенно иной архитектурный слой — начатый в мероитскую эпоху нубийским царём, дополненный птолемеевскими фараонами столетия позже и далее расширенный при римском императоре Августе, что делает его настоящим палимпсестом культур и веков, наслоенных друг на друга. На его хорошо сохранившуюся пилонную башню можно подняться для панорамных видов на озеро, где вода простирается до горизонта во всех направлениях, и почти никаких других построек не видно.",

        steps: [{
          time: "07:00",
          description: "Завтрак на борту, пока судно прибывает в Вади-эс-Себуа."
        }, {
          time: "08:30",
          description: "Высадка для экскурсии с гидом по Вади-эс-Себуа. Прогулка по аллее сфинксов и вход в храм — гид объяснит как первоначальный фараоновский замысел, так и его позднейшее христианское преобразование."
        }, {
          time: "10:00",
          description: "Короткая прогулка или поездка к храму Дакка. Изучение многослойного строительства храма и подъём на пилон для видов на озеро."
        }, {
          time: "11:30",
          description: "Возвращение на судно."
        }, {
          time: "13:00",
          description: "Обед на борту. Дневное плавание через спокойное озеро."
        }, {
          time: "15:30",
          description: "Дополнительное время на палубе для отдыха, наблюдения за птицами или чтения, пока мимо проплывает удивительная пустынная красота озера."
        }, {
          time: "19:30",
          description: "Ужин на борту. Закат над озером Насер с палубы."
        }]
      }, {
        day: 3,
        title: "Храмы Амада и Дерр + Абу-Симбел",
        description: "Третий день — вершина круиза: судно достигает самой южной точки путешествия, места расположения Абу-Симбела, но не раньше, чем остановится у двух других выдающихся памятников, о которых большинство путешественников в Египет даже не слышали. Храм Амада — самый старый храм на озере Насер, построенный во время правления Тутмоса III и Аменхотепа II в XV веке до н.э., и хранит одни из самых тонких и ярко окрашенных расписных рельефов во всей Нубии, чьи пигменты до сих пор поразительно яркие на фоне бледного песчаника. Соседний высеченный в скале храм Дерр, построенный Рамсесом II и посвящённый Ра-Хорахти, завершает утро, прежде чем судно совершит короткое финальное плавание до Абу-Симбела, где вы проведёте день, исследуя как Большой храм, так и храм Нефертари, с достаточным временем и без толп — роскошь, почти невообразимая для столь известного места, возможная лишь при подходе с воды, а не по пустынной дороге.",

        steps: [{
          time: "06:30",
          description: "Ранний завтрак, пока судно прибывает в Амаду."
        }, {
          time: "07:30",
          description: "Экскурсия с гидом по храму Амада — изучение самого старого храма на озере, его удивительно сохранившихся расписных рельефов и исторических надписей, охватывающих события из правления двух фараонов."
        }, {
          time: "09:00",
          description: "Короткая поездка к высеченному в скале храму Дерр. Экскурсия с гидом по внутренним камерам и их рельефам, посвящённым Ра-Хорахти."
        }, {
          time: "10:30",
          description: "Возвращение на судно. Последнее плавание на юг, к Абу-Симбелу."
        }, {
          time: "12:00",
          description: "Прибытие в Абу-Симбел. Обед на борту."
        }, {
          time: "14:00",
          description: "Экскурсия с гидом по Большому храму Рамсеса II в Абу-Симбеле — остановка перед четырьмя колоссальными статуями, вход в гипостильный зал и достижение внутреннего святилища."
        }, {
          time: "15:30",
          description: "Экскурсия с гидом по храму Нефертари."
        }, {
          time: "16:30",
          description: "Свободное время в Абу-Симбеле — прогулка вдоль озера, фотографирование храмов и впитывание атмосферы."
        }, {
          time: "18:00",
          description: "Возвращение на судно. Праздничный ужин на борту."
        }]
      }, {
        day: 4,
        title: "Шоу света и звука в Абу-Симбеле и возвращение",
        description: "Последнее утро снова принадлежит Абу-Симбелу. Прежде чем прибудет колонна из Асуана, у вас будут храмы в спокойствии раннего часа — идеальное время, чтобы заново посетить святилища или просто посидеть в присутствии великих статуй, пока пустыня вокруг прогревается, а утренний свет всё ещё мягок и щадящ к резному камню. После завтрака и последнего взгляда на это удивительное место судно начинает обратный путь на север через озеро в Асуан, прибывая во второй половине дня, успевая к вашим дальнейшим планам поездки, пока храмы медленно растворяются в дымке позади вас, пока полностью не исчезают из виду, оставляя лишь воспоминание о четырёх днях, проведённых в одном из самых отдалённых и впечатляющих уголков древнего Египта.",

        steps: [{
          time: "06:30",
          description: "Дополнительное раннее утреннее возвращение в Абу-Симбел до прибытия толп однодневных туристов — лучший свет для фотографии."
        }, {
          time: "08:00",
          description: "Завтрак на борту."
        }, {
          time: "09:00",
          description: "Отъезд из Абу-Симбела. Судно плывёт на север обратно через озеро Насер в направлении Асуана."
        }, {
          time: "13:00",
          description: "Обед на борту во время обратного плавания."
        }, {
          time: "16:00",
          description: "Прибытие к причалу Асуана. Высадка и выезд."
        }, {
          time: "16:30",
          description: "Трансфер в ваш отель в Асуане или на железнодорожную станцию. Окончание тура."
        }]
      }],
      de: [{
        day: 1,
        title: "Assuan — Einschiffung & Kalabasha-Tempel",
        description: "Ihr Abenteuer auf dem Nassersee beginnt in Assuan, wo Sie zum Einschiffungsanleger gebracht werden und Ihr intimes Kreuzfahrtschiff besteigen — merklich kleiner und ruhiger als die großen Nilkreuzfahrtschiffe weiter nördlich, ein Vorgeschmack auf die exklusivere Reise, die vor Ihnen liegt. Nachdem Sie sich in Ihrer Kabine eingerichtet haben und an einem Begrüßungsbriefing teilgenommen haben, macht das Schiff seinen ersten Stopp direkt südlich des Staudamms — den Kalabasha-Komplex, der drei bemerkenswerte Tempel auf einem einzigen Vorsprung über dem See vereint, deren versetzte Steine noch die Spuren der Rettungsaktion tragen, die sie bewahrt hat. Der Kalabasha-Tempel selbst ist einer der größten freistehenden Tempel Nubiens, ein grandioses Monument der römischen Ära, das dem nubischen Gott Mandulis gewidmet ist — sein Ausmaß überrascht für eine Stätte, die außerhalb von Spezialreiseführern so selten erwähnt wird. Daneben bewahrt der in den Felsen gehauene Tempel von Beit El-Wali einige der lebhaftesten bemalten Schlachtreliefs Ägyptens, die Ramses II. im Kampf gegen Nubier und Libyer zeigen, in Szenen, die nach Tausenden von Jahren noch reich an ursprünglicher Farbe sind. Der elegante Kiosk von Kertassi — nur ein paar Säulen und ein Gesimse, fast zerbrechlich in seiner Schlichtheit — vervollständigt die Gruppe mit unerwarteter Anmut, eine ruhige Coda nach der Großartigkeit von Kalabasha.",

        steps: [{
          time: "09:00",
          description: "Hotelabholung in Assuan und Transfer zum Anleger der Nassersee-Kreuzfahrt."
        }, {
          time: "10:00",
          description: "Einschiffung und Check-in in der Kabine. Begrüßungsbriefing durch den Kreuzfahrtdirektor."
        }, {
          time: "12:00",
          description: "Begrüßungsmittagessen an Bord."
        }, {
          time: "14:00",
          description: "Kurze Fahrt zum Tempelkomplex von Kalabasha."
        }, {
          time: "14:30",
          description: "Geführte Tour durch den Kalabasha-Tempel — gehen Sie durch den Pylon, den Säulensaal und das dem nubischen Gott Mandulis gewidmete Heiligtum."
        }, {
          time: "15:30",
          description: "Besuchen Sie Beit El-Wali — erkunden Sie die lebhaften, in Fels gehauenen Schlachtreliefs und bemalten Kammern des Tempels."
        }, {
          time: "16:00",
          description: "Besichtigen Sie den Kiosk von Kertassi — ein kleines, aber elegantes Tempelfragment mit Blick auf den See."
        }, {
          time: "17:00",
          description: "Rückkehr zum Schiff. Fahrt nach Süden über den Nassersee."
        }, {
          time: "19:30",
          description: "Abendessen an Bord. Freier Abend, während das Schiff durch die Wüstennacht fährt."
        }]
      }, {
        day: 2,
        title: "Tempel von Wadi el-Sebua & Dakka",
        description: "Heute erreicht das Schiff Wadi el-Sebua — das „Tal der Löwen“ —, wo eine Allee menschenköpfiger Sphingen, verwittert, aber immer noch beeindruckend, zu einem der bemerkenswertesten Tempel am See führt. Erbaut von Ramses II., wurde der Tempel in den frühen Jahrhunderten n. Chr. später in eine christliche Kirche umgewandelt, und die direkt über den antiken ägyptischen Reliefs aufgetragenen Heiligenmalereien wurden im 20. Jahrhundert teilweise restauriert — zurück bleibt ein geisterhaftes Palimpsest zweier Glaubensrichtungen, die dieselben Wände einnehmen, mit pharaonischen Göttern, die unter koptischen Heiligen hervorblicken, in einem visuellen Zeugnis religiösen Wandels über Jahrtausende. In der Nähe bietet der Tempel von Dakka eine ganz andere architektonische Schicht — begonnen in der meroitischen Ära von einem nubischen König, Jahrhunderte später von ptolemäischen Pharaonen ergänzt und unter dem römischen Kaiser Augustus weiter erweitert, was ihn zu einem echten Palimpsest aus Kulturen und Jahrhunderten macht, die übereinander aufgebaut wurden. Sein gut erhaltener Pylonturm kann für Panoramablicke über den See bestiegen werden, dessen Wasser sich in jeder Richtung bis zum Horizont erstreckt, mit kaum einem weiteren Gebäude in Sicht.",

        steps: [{
          time: "07:00",
          description: "Frühstück an Bord, während das Schiff Wadi el-Sebua erreicht."
        }, {
          time: "08:30",
          description: "Von Bord gehen für die geführte Tour durch Wadi el-Sebua. Gehen Sie die Sphingenallee entlang und betreten Sie den Tempel — Ihr Reiseleiter erklärt sowohl das ursprüngliche pharaonische Design als auch seine spätere christliche Umwandlung."
        }, {
          time: "10:00",
          description: "Kurzer Spaziergang oder Fahrt zum Tempel von Dakka. Erkunden Sie die mehrphasige Bauweise des Tempels und besteigen Sie den Pylon für Aussichten auf den See."
        }, {
          time: "11:30",
          description: "Rückkehr zum Schiff."
        }, {
          time: "13:00",
          description: "Mittagessen an Bord. Nachmittägliche Fahrt über den ruhigen See."
        }, {
          time: "15:30",
          description: "Optionale Deckzeit zum Entspannen, zur Vogelbeobachtung oder zum Lesen, während die außergewöhnlich karge Schönheit des Sees vorbeizieht."
        }, {
          time: "19:30",
          description: "Abendessen an Bord. Sonnenuntergang über dem Nassersee vom Deck aus."
        }]
      }, {
        day: 3,
        title: "Tempel von Amada und Derr + Abu Simbel",
        description: "Der dritte Tag ist der Höhepunkt der Kreuzfahrt — das Schiff erreicht den südlichsten Punkt der Reise, die Stätte von Abu Simbel, doch nicht ohne vorher an zwei weiteren bemerkenswerten Monumenten anzulegen, von denen die meisten Reisenden in Ägypten nie etwas hören. Der Tempel von Amada ist der älteste Tempel am Nassersee, erbaut während der Herrschaft von Thutmosis III. und Amenhotep II. im 15. Jahrhundert v. Chr., und bewahrt einige der feinsten und lebhaftesten bemalten Reliefs ganz Nubiens, deren Pigmente vor dem blassen Sandstein noch erstaunlich kräftig wirken. Der nahe gelegene, in den Felsen gehauene Tempel von Derr, erbaut von Ramses II. und Ra-Harachte gewidmet, schließt den Vormittag ab, bevor das Schiff die kurze letzte Fahrt nach Abu Simbel unternimmt, wo Sie den Nachmittag damit verbringen werden, sowohl den Großen Tempel als auch den Tempel der Nefertari mit reichlich Zeit und ohne Menschenmassen zu erkunden — ein Luxus, der für eine so berühmte Stätte fast unvorstellbar ist und nur durch die Anreise vom Wasser aus statt über die Wüstenstraße möglich wird.",

        steps: [{
          time: "06:30",
          description: "Frühes Frühstück, während das Schiff in Amada eintrifft."
        }, {
          time: "07:30",
          description: "Geführte Tour durch den Tempel von Amada — erkunden Sie den ältesten Tempel am See, seine bemerkenswert erhaltenen bemalten Reliefs und seine historischen Inschriften, die Ereignisse aus der Herrschaft zweier Pharaonen abdecken."
        }, {
          time: "09:00",
          description: "Kurze Fahrt zum in den Felsen gehauenen Tempel von Derr. Geführte Tour durch die Innenkammern und deren Ra-Harachte gewidmete Reliefs."
        }, {
          time: "10:30",
          description: "Rückkehr zum Schiff. Letzte Fahrt nach Süden, nach Abu Simbel."
        }, {
          time: "12:00",
          description: "Ankunft in Abu Simbel. Mittagessen an Bord."
        }, {
          time: "14:00",
          description: "Geführte Tour durch den Großen Tempel von Ramses II. in Abu Simbel — stehen Sie vor den vier kolossalen Statuen, betreten Sie den Säulensaal und erreichen Sie das innere Heiligtum."
        }, {
          time: "15:30",
          description: "Geführte Tour durch den Tempel der Nefertari."
        }, {
          time: "16:30",
          description: "Freizeit in Abu Simbel — spazieren Sie am See entlang, fotografieren Sie die Tempel und nehmen Sie die Atmosphäre in sich auf."
        }, {
          time: "18:00",
          description: "Rückkehr zum Schiff. Galadinner an Bord."
        }]
      }, {
        day: 4,
        title: "Licht- und Tonshow von Abu Simbel & Rückkehr",
        description: "Der letzte Morgen gehört noch einmal Abu Simbel. Bevor der Konvoi aus Assuan eintrifft, haben Sie die Tempel in der Ruhe der frühen Stunden für sich — die ideale Zeit, um die Heiligtümer erneut zu besuchen oder einfach in der Gegenwart der großen Statuen zu verweilen, während sich die Wüste um Sie herum erwärmt und das Morgenlicht noch sanft und milde auf dem geschnitzten Stein liegt. Nach dem Frühstück und einem letzten Blick auf diesen außergewöhnlichen Ort beginnt das Schiff die Rückreise nach Norden über den See nach Assuan und kommt am Nachmittag rechtzeitig für Ihre Weiterreise an, während die Tempel langsam im Dunst hinter Ihnen verschwinden, bis sie vollständig aus dem Blickfeld geraten — zurück bleibt nur die Erinnerung an vier Tage, die Sie in einer der entlegensten und lohnendsten Ecken des alten Ägypten verbracht haben.",

        steps: [{
          time: "06:30",
          description: "Optionaler früher Rückbesuch in Abu Simbel vor der Ankunft der Tagesausflügler-Menschenmengen — das beste Licht für Fotografien."
        }, {
          time: "08:00",
          description: "Frühstück an Bord."
        }, {
          time: "09:00",
          description: "Abfahrt von Abu Simbel. Das Schiff fährt nach Norden zurück über den Nassersee in Richtung Assuan."
        }, {
          time: "13:00",
          description: "Mittagessen an Bord während der Rückfahrt."
        }, {
          time: "16:00",
          description: "Ankunft am Anleger von Assuan. Von Bord gehen und Check-out."
        }, {
          time: "16:30",
          description: "Transfer zu Ihrem Hotel in Assuan oder zum Bahnhof. Ende der Tour."
        }]
      }]
    },
  },
  {
    title: "Nubian Village Day Trip",
    slug: "nubian-village-day-trip-aswan",
    description:
      "Step away from ancient temples and discover the warm, colorful world of Nubian culture on this authentic day trip, an experience built less around monuments and more around people, color, and a hospitality that visitors often describe as one of the most memorable parts of their entire trip to Egypt. Cross the Nile on a traditional felucca to reach Gharb Soheil, one of the most genuine and welcoming Nubian villages in Egypt, where the homes themselves seem to have been painted with the desert sunset in mind. Here you'll wander through vivid blue and orange painted houses, meet local families who open their courtyards to visitors with genuine warmth rather than rehearsed performance, learn about Nubian traditions that survived displacement, dam construction, and the slow pressures of modernization, taste local food rich with flavors found nowhere else along the Nile, and perhaps visit a Nubian home for tea, sharing a moment of quiet hospitality that says more about this culture than any museum placard ever could. It's a rare and deeply human experience that brings the living culture of southern Egypt to life, a reminder that this region's story didn't end with the pharaohs but continues, vividly, today.",
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
      es: "Muelle de felucas de la Corniche de Asuán, cerca de la oficina de EgyptAir. Su guía estará esperando.",
      pt: "Cais de feluca da Corniche de Assuão, próximo ao escritório da EgyptAir. Seu guia estará esperando.",
      it: "Molo delle felucche sulla Corniche di Assuan, vicino all'ufficio EgyptAir. La vostra guida vi aspetterà.",
      fr: "Quai des felouques de la corniche d'Assouan, près du bureau d'EgyptAir. Votre guide vous attendra.",
      ru: "Причал для фелук на Корниш в Асуане, рядом с офисом EgyptAir. Ваш гид будет ждать.",
      de: "Felucca-Anlegestelle an der Corniche von Assuan, in der Nähe des EgyptAir-Büros. Ihr Reiseleiter wird dort warten."
    },
    accessibility: {
      en: "Felucca boarding requires stepping carefully into a low boat. Village paths are unpaved. Not suitable for wheelchairs.",
      es: "Subir a la feluca requiere pisar con cuidado en una embarcación baja. Los caminos del pueblo no están pavimentados. No es adecuado para sillas de ruedas.",
      pt: "Embarcar na feluca exige pisar com cuidado em um barco baixo. Os caminhos da vila não são pavimentados. Não adequado para cadeiras de rodas.",
      it: "Salire sulla felucca richiede di scendere con attenzione in un'imbarcazione bassa. I sentieri del villaggio non sono asfaltati. Non adatto alle sedie a rotelle.",
      fr: "Monter à bord de la felouque nécessite de descendre prudemment dans une embarcation basse. Les chemins du village ne sont pas pavés. Ne convient pas aux fauteuils roulants.",
      ru: "Посадка на фелуку требует осторожного шага в низкую лодку. Дорожки в деревне без покрытия. Не подходит для инвалидных колясок.",
      de: "Das Einsteigen in die Felucca erfordert vorsichtiges Hineinsteigen in ein niedriges Boot. Die Wege im Dorf sind unbefestigt. Nicht geeignet für Rollstuhlfahrer."
    },
    whatToBring: {
      en: ["Comfortable flat shoes", "Light, respectful clothing (covering shoulders and knees is appreciated)", "Small amount of local currency for purchases or tips", "Camera — but always ask before photographing residents", "Sun protection"],
      es: [
        "Zapatos planos y cómodos",
        "Ropa ligera y respetuosa (se agradece cubrir hombros y rodillas)",
        "Una pequeña cantidad de moneda local para compras o propinas",
        "Cámara, pero siempre pida permiso antes de fotografiar a los residentes",
        "Protección solar"
      ],
      pt: [
        "Sapatos baixos e confortáveis",
        "Roupas leves e respeitosas (cobrir ombros e joelhos é apreciado)",
        "Pequena quantia em moeda local para compras ou gorjetas",
        "Câmera — mas sempre pergunte antes de fotografar os residentes",
        "Proteção solar"
      ],
      it: [
        "Scarpe basse e comode",
        "Abiti leggeri e rispettosi (coprire spalle e ginocchia è apprezzato)",
        "Una piccola quantità di valuta locale per acquisti o mance",
        "Macchina fotografica — ma chiedete sempre prima di fotografare i residenti",
        "Protezione solare"
      ],
      fr: [
        "Chaussures plates confortables",
        "Vêtements légers et respectueux (couvrir les épaules et les genoux est apprécié)",
        "Une petite somme en monnaie locale pour les achats ou les pourboires",
        "Appareil photo — mais demandez toujours la permission avant de photographier les habitants",
        "Protection solaire"
      ],
      ru: [
        "Удобная обувь на плоской подошве",
        "Лёгкая, скромная одежда (желательно прикрывающая плечи и колени)",
        "Небольшая сумма местной валюты для покупок или чаевых",
        "Фотоаппарат — но всегда спрашивайте разрешение перед фотографированием жителей",
        "Солнцезащитные средства"
      ],
      de: [
        "Bequeme flache Schuhe",
        "Leichte, respektvolle Kleidung (das Bedecken von Schultern und Knien wird geschätzt)",
        "Etwas Bargeld in Landeswährung für Einkäufe oder Trinkgelder",
        "Kamera — aber fragen Sie immer um Erlaubnis, bevor Sie Bewohner fotografieren",
        "Sonnenschutz"
      ]
    },
    importantInfo: {
      en: [
        "Hotel pickup is not included; make your own way to the Corniche dock.",
        "This is a living village — please be respectful of residents and their privacy.",
        "The guide will translate and facilitate interactions with local families.",
        "Local tea and refreshments may be offered inside a Nubian home — accepting is a gesture of respect.",
        "Small handicrafts and Nubian souvenirs are available for purchase in the village.",
      ],
      es: [
        "La recogida en el hotel no está incluida; debe llegar por su cuenta al muelle de la Corniche.",
        "Este es un pueblo habitado: por favor, sea respetuoso con los residentes y su privacidad.",
        "El guía traducirá y facilitará las interacciones con las familias locales.",
        "Es posible que le ofrezcan té local y refrescos dentro de un hogar nubio; aceptar es un gesto de respeto.",
        "En el pueblo se pueden comprar pequeñas artesanías y recuerdos nubios."
      ],
      pt: [
        "A busca no hotel não está incluída; você deve chegar por conta própria ao cais da Corniche.",
        "Esta é uma vila habitada — por favor, respeite os moradores e sua privacidade.",
        "O guia irá traduzir e facilitar as interações com as famílias locais.",
        "Chá local e refrescos podem ser oferecidos dentro de uma casa núbia — aceitar é um gesto de respeito.",
        "Pequenos artesanatos e lembranças núbias estão disponíveis para compra na vila."
      ],
      it: [
        "Il ritiro in hotel non è incluso; dovete raggiungere autonomamente il molo della Corniche.",
        "Questo è un villaggio abitato — vi preghiamo di rispettare i residenti e la loro privacy.",
        "La guida tradurrà e faciliterà le interazioni con le famiglie locali.",
        "All'interno di una casa nubiana potrebbero offrirvi tè locale e rinfreschi — accettare è un gesto di rispetto.",
        "Piccoli manufatti artigianali e souvenir nubiani sono disponibili per l'acquisto nel villaggio."
      ],
      fr: [
        "La prise en charge à l'hôtel n'est pas incluse ; vous devez vous rendre vous-même au quai de la corniche.",
        "Il s'agit d'un village habité — veuillez respecter les habitants et leur vie privée.",
        "Le guide traduira et facilitera les échanges avec les familles locales.",
        "Du thé local et des rafraîchissements peuvent vous être offerts dans une maison nubienne — les accepter est un geste de respect.",
        "De petits objets artisanaux et souvenirs nubiens sont disponibles à l'achat dans le village."
      ],
      ru: [
        "Трансфер из отеля не включён; до причала на Корниш нужно добраться самостоятельно.",
        "Это настоящая, живая деревня — пожалуйста, уважайте жителей и их частную жизнь.",
        "Гид переведёт и поможет наладить общение с местными семьями.",
        "В нубийском доме вам могут предложить местный чай и угощения — принять их — это знак уважения.",
        "В деревне можно купить небольшие изделия ручной работы и нубийские сувениры."
      ],
      de: [
        "Die Hotelabholung ist nicht inbegriffen; Sie gelangen selbstständig zur Anlegestelle an der Corniche.",
        "Dies ist ein lebendiges Dorf — bitte respektieren Sie die Bewohner und ihre Privatsphäre.",
        "Der Reiseleiter übersetzt und unterstützt die Interaktion mit den lokalen Familien.",
        "In einem nubischen Haus können Ihnen lokaler Tee und Erfrischungen angeboten werden — das Annehmen ist eine Geste des Respekts.",
        "Kleine Handwerkserzeugnisse und nubische Souvenirs sind im Dorf zum Kauf erhältlich."
      ]
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
            "The Nubian people are one of the world's oldest civilizations, with a history that predates even the pharaohs, and yet their culture is among the least known to most visitors to Egypt, overshadowed in guidebooks by the more famous monuments their ancestors helped quarry, transport, and sometimes build. The Nubian homeland stretched along the Nile from Aswan deep into what is now Sudan, a kingdom and culture in its own right rather than a mere footnote to Egyptian history, and when the Aswan High Dam flooded the valley in the 1960s, entire communities were relocated — a displacement that Nubians still carry as a collective wound, their ancestral villages now resting silently beneath the waters of Lake Nasser. Today, the villages on the West Bank near Aswan are home to Nubian families who have kept their language, music, architecture, and way of life alive despite everything, and visiting Gharb Soheil is one of the most genuine and moving cultural encounters available to any traveler in Egypt. The experience begins with a felucca crossing of the Nile — a few minutes of silence and wind and water that feels like crossing into a different world entirely. On the far bank, the painted houses of Gharb Soheil rise from the desert edge in blues, yellows, and oranges, decorated with murals of boats, fish, camels, and geometric patterns that carry deep symbolic meaning in Nubian tradition, each color and motif chosen with intention rather than mere decoration.",
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
      es: [{
        day: 1,
        title: "Cruzando el Nilo hacia Gharb Soheil",
        description: "El pueblo nubio es una de las civilizaciones más antiguas del mundo, con una historia que precede incluso a los faraones, y sin embargo su cultura es una de las menos conocidas para la mayoría de los visitantes de Egipto, eclipsada en las guías por los monumentos más famosos que sus ancestros ayudaron a extraer, transportar y, a veces, construir. La tierra nubia se extendía a lo largo del Nilo desde Asuán hasta lo que hoy es Sudán, un reino y una cultura por derecho propio, más que una simple nota a pie de página en la historia egipcia, y cuando la Presa Alta de Asuán inundó el valle en la década de 1960, comunidades enteras fueron reubicadas, un desplazamiento que los nubios todavía llevan como una herida colectiva, con sus pueblos ancestrales descansando ahora silenciosamente bajo las aguas del lago Nasser. Hoy, los pueblos de la Orilla Oeste cerca de Asuán albergan a familias nubias que han mantenido viva su lengua, música, arquitectura y forma de vida a pesar de todo, y visitar Gharb Soheil es uno de los encuentros culturales más genuinos y conmovedores disponibles para cualquier viajero en Egipto. La experiencia comienza con un cruce en feluca por el Nilo, unos minutos de silencio, viento y agua que se sienten como cruzar hacia un mundo completamente diferente. En la orilla opuesta, las casas pintadas de Gharb Soheil se elevan desde el borde del desierto en azules, amarillos y naranjas, decoradas con murales de barcos, peces, camellos y patrones geométricos que tienen un profundo significado simbólico en la tradición nubia, cada color y motivo elegido con intención y no como mera decoración.",

        steps: [{
          time: "09:00",
          description: "Encuentro con su guía en el muelle de felucas de la Corniche. Abordar la feluca tradicional y cruzar el Nilo hacia la Orilla Oeste."
        }, {
          time: "09:20",
          description: "Llegada al desembarcadero de Gharb Soheil. Comienza la caminata hacia el pueblo."
        }, {
          time: "09:30",
          description: "Paseo por las calles pintadas de Gharb Soheil. Su guía explica el simbolismo de los murales en las casas, la tradición arquitectónica nubia de colores brillantes y el significado de los motivos decorativos."
        }, {
          time: "10:15",
          description: "Visita a un hogar de una familia nubia: conozca a sus anfitriones, siéntese en el patio tradicional, aprenda sobre la vida cotidiana nubia y comparta té y quizás karkadé (bebida de hibisco) con la familia."
        }, {
          time: "11:00",
          description: "Caminata hacia los pequeños espacios comunitarios del pueblo: vea artesanías nubias tradicionales, instrumentos musicales, y escuche a su guía explicar la historia del desplazamiento nubio y el esfuerzo continuo por preservar la cultura nubia."
        }, {
          time: "11:45",
          description: "Recorra el pequeño mercado de artesanos en busca de productos nubios hechos a mano: cestas tejidas, joyería de cuentas, cerámica y especias."
        }, {
          time: "12:15",
          description: "Regreso al desembarcadero de la feluca y navegación de vuelta a la Corniche de Asuán."
        }, {
          time: "12:30",
          description: "Llegada al muelle de la Corniche. Fin del tour."
        }]
      }],
      pt: [{
        day: 1,
        title: "Atravessando o Nilo até Gharb Soheil",
        description: "O povo núbio é uma das civilizações mais antigas do mundo, com uma história que antecede até mesmo os faraós, e, no entanto, sua cultura é uma das menos conhecidas pela maioria dos visitantes do Egito, eclipsada nos guias turísticos pelos monumentos mais famosos que seus ancestrais ajudaram a extrair, transportar e, às vezes, construir. A terra natal núbia se estendia ao longo do Nilo, desde Assuão até o que hoje é o Sudão, um reino e uma cultura por direito próprio, e não apenas uma nota de rodapé na história egípcia, e quando a Grande Barragem de Assuão inundou o vale na década de 1960, comunidades inteiras foram realocadas — um deslocamento que os núbios ainda carregam como uma ferida coletiva, com suas vilas ancestrais agora repousando silenciosamente sob as águas do Lago Nasser. Hoje, as vilas na Margem Ocidental, próximas a Assuão, abrigam famílias núbias que mantiveram viva sua língua, música, arquitetura e modo de vida, apesar de tudo, e visitar Gharb Soheil é um dos encontros culturais mais genuínos e emocionantes disponíveis para qualquer viajante no Egito. A experiência começa com uma travessia de feluca pelo Nilo — alguns minutos de silêncio, vento e água que parecem uma passagem completa para um mundo diferente. Na margem oposta, as casas pintadas de Gharb Soheil se erguem na borda do deserto em tons de azul, amarelo e laranja, decoradas com murais de barcos, peixes, camelos e padrões geométricos que carregam um profundo significado simbólico na tradição núbia, cada cor e motivo escolhidos com intenção, e não como mera decoração.",

        steps: [{
          time: "09:00",
          description: "Encontro com seu guia no cais de felucas da Corniche. Embarque na feluca tradicional e atravesse o Nilo até a Margem Ocidental."
        }, {
          time: "09:20",
          description: "Chegada ao desembarque de Gharb Soheil. Início da caminhada até a vila."
        }, {
          time: "09:30",
          description: "Passeio pelas ruas pintadas de Gharb Soheil. Seu guia explica o simbolismo dos murais das casas, a tradição arquitetônica núbia de cores vibrantes e o significado dos motivos decorativos."
        }, {
          time: "10:15",
          description: "Visita a uma casa de família núbia — conheça seus anfitriões, sente-se no pátio tradicional, conheça o cotidiano núbio e compartilhe chá e talvez karkadê (bebida de hibisco) com a família."
        }, {
          time: "11:00",
          description: "Caminhada até os pequenos espaços comunitários da vila — veja artesanatos núbios tradicionais, instrumentos musicais, e ouça seu guia explicar a história do deslocamento núbio e o esforço contínuo para preservar a cultura núbia."
        }, {
          time: "11:45",
          description: "Explore o pequeno mercado de artesãos em busca de produtos núbios feitos à mão — cestos trançados, joias com contas, cerâmica e especiarias."
        }, {
          time: "12:15",
          description: "Retorno ao desembarque da feluca e navegação de volta para a Corniche de Assuão."
        }, {
          time: "12:30",
          description: "Chegada ao cais da Corniche. Fim do tour."
        }]
      }],
      it: [{
        day: 1,
        title: "Attraverso il Nilo verso Gharb Soheil",
        description: "Il popolo nubiano è una delle civiltà più antiche del mondo, con una storia che precede persino i faraoni, eppure la sua cultura è tra le meno conosciute dalla maggior parte dei visitatori dell'Egitto, messa in ombra nelle guide turistiche dai monumenti più famosi che i loro antenati contribuirono a estrarre, trasportare e a volte a costruire. La terra natale nubiana si estendeva lungo il Nilo da Assuan fino a quello che oggi è il Sudan, un regno e una cultura a pieno diritto e non semplicemente una nota a margine della storia egizia, e quando la Grande Diga di Assuan inondò la valle negli anni '60, intere comunità furono trasferite — uno sfollamento che i nubiani portano ancora come una ferita collettiva, con i loro villaggi ancestrali che oggi riposano silenziosamente sotto le acque del Lago Nasser. Oggi, i villaggi sulla Riva Occidentale vicino ad Assuan ospitano famiglie nubiane che hanno mantenuto viva la propria lingua, musica, architettura e modo di vita nonostante tutto, e visitare Gharb Soheil è uno degli incontri culturali più genuini e toccanti disponibili per qualsiasi viaggiatore in Egitto. L'esperienza inizia con una traversata in felucca sul Nilo — pochi minuti di silenzio, vento e acqua che sembrano un autentico passaggio verso un mondo completamente diverso. Sulla riva opposta, le case dipinte di Gharb Soheil si innalzano dal margine del deserto in toni di blu, giallo e arancione, decorate con murales di barche, pesci, cammelli e motivi geometrici che portano un profondo significato simbolico nella tradizione nubiana, ogni colore e motivo scelto con intenzione e non come semplice decorazione.",

        steps: [{
          time: "09:00",
          description: "Incontro con la guida al molo delle felucche sulla Corniche. Imbarco sulla tradizionale felucca e traversata del Nilo verso la Riva Occidentale."
        }, {
          time: "09:20",
          description: "Arrivo allo sbarco di Gharb Soheil. Inizio della passeggiata verso il villaggio."
        }, {
          time: "09:30",
          description: "Passeggiata tra le strade dipinte di Gharb Soheil. La vostra guida spiega il simbolismo dei murales sulle case, la tradizione architettonica nubiana dei colori vivaci e il significato dei motivi decorativi."
        }, {
          time: "10:15",
          description: "Visita a una casa di famiglia nubiana — incontrate i vostri ospiti, sedetevi nel cortile tradizionale, scoprite la vita quotidiana nubiana e condividete il tè e forse il karkadè (bevanda all'ibisco) con la famiglia."
        }, {
          time: "11:00",
          description: "Passeggiata verso i piccoli spazi comunitari del villaggio — osservate l'artigianato tradizionale nubiano, gli strumenti musicali, e ascoltate la guida spiegare la storia dello sfollamento nubiano e l'impegno continuo per preservare la cultura nubiana."
        }, {
          time: "11:45",
          description: "Curiosate nel piccolo mercato artigianale per prodotti nubiani fatti a mano — cesti tessuti, gioielli con perline, ceramiche e spezie."
        }, {
          time: "12:15",
          description: "Ritorno allo sbarco della felucca e navigazione di ritorno verso la Corniche di Assuan."
        }, {
          time: "12:30",
          description: "Arrivo al molo della Corniche. Fine del tour."
        }]
      }],
      fr: [{
        day: 1,
        title: "Traversée du Nil vers Gharb Soheil",
        description: "Le peuple nubien est l'une des plus anciennes civilisations du monde, avec une histoire qui précède même celle des pharaons, et pourtant sa culture est l'une des moins connues de la plupart des visiteurs de l'Égypte, éclipsée dans les guides touristiques par les monuments plus célèbres que leurs ancêtres ont contribué à extraire, transporter et parfois construire. La patrie nubienne s'étendait le long du Nil depuis Assouan jusqu'à ce qui est aujourd'hui le Soudan, un royaume et une culture à part entière plutôt qu'une simple note de bas de page dans l'histoire égyptienne, et lorsque le Haut Barrage d'Assouan a inondé la vallée dans les années 1960, des communautés entières ont été déplacées — un déplacement que les Nubiens portent encore comme une blessure collective, leurs villages ancestraux reposant désormais silencieusement sous les eaux du lac Nasser. Aujourd'hui, les villages de la rive ouest près d'Assouan abritent des familles nubiennes qui ont su préserver leur langue, leur musique, leur architecture et leur mode de vie malgré tout, et visiter Gharb Soheil est l'une des rencontres culturelles les plus authentiques et les plus émouvantes accessibles à tout voyageur en Égypte. L'expérience commence par une traversée du Nil en felouque — quelques minutes de silence, de vent et d'eau qui donnent l'impression de basculer dans un monde entièrement différent. Sur la rive opposée, les maisons peintes de Gharb Soheil s'élèvent depuis la lisière du désert dans des tons de bleu, de jaune et d'orange, décorées de fresques représentant des bateaux, des poissons, des chameaux et des motifs géométriques porteurs d'une profonde signification symbolique dans la tradition nubienne, chaque couleur et chaque motif étant choisi avec intention plutôt que comme simple décoration.",

        steps: [{
          time: "09:00",
          description: "Rencontre avec votre guide au quai des felouques de la corniche. Montée à bord de la felouque traditionnelle et traversée du Nil vers la rive ouest."
        }, {
          time: "09:20",
          description: "Arrivée au débarcadère de Gharb Soheil. Début de la marche vers le village."
        }, {
          time: "09:30",
          description: "Promenade dans les rues colorées de Gharb Soheil. Votre guide explique le symbolisme des fresques sur les maisons, la tradition architecturale nubienne des couleurs vives et la signification des motifs décoratifs."
        }, {
          time: "10:15",
          description: "Visite d'une maison de famille nubienne — rencontrez vos hôtes, asseyez-vous dans la cour traditionnelle, découvrez la vie quotidienne nubienne et partagez du thé et peut-être du karkadé (boisson à l'hibiscus) avec la famille."
        }, {
          time: "11:00",
          description: "Marche vers les petits espaces communautaires du village — découvrez l'artisanat nubien traditionnel, les instruments de musique, et écoutez votre guide expliquer l'histoire du déplacement des Nubiens et les efforts continus pour préserver leur culture."
        }, {
          time: "11:45",
          description: "Parcourez le petit marché artisanal à la recherche de produits nubiens faits main — paniers tressés, bijoux en perles, poteries et épices."
        }, {
          time: "12:15",
          description: "Retour au débarcadère de la felouque et traversée de retour vers la corniche d'Assouan."
        }, {
          time: "12:30",
          description: "Arrivée au quai de la corniche. Fin de l'excursion."
        }]
      }],
      ru: [{
        day: 1,
        title: "Через Нил в Гарб-Сохейль",
        description: "Нубийцы — одна из древнейших цивилизаций мира, чья история предшествует даже фараонам, и тем не менее их культура остаётся одной из наименее известных для большинства путешественников в Египет, отодвинутая в путеводителях на второй план более знаменитыми памятниками, которые их предки помогали добывать, перевозить и иногда строить. Нубийская родина простиралась вдоль Нила от Асуана глубоко в территорию современного Судана — это было собственное царство и культура, а не просто примечание к истории Египта, и когда в 1960-х годах Асуанская высотная плотина затопила долину, целые общины были переселены — перемещение, которое нубийцы до сих пор несут как коллективную рану, а их родовые деревни ныне покоятся в безмолвии под водами озера Насер. Сегодня деревни на Западном берегу близ Асуана населены нубийскими семьями, которые сохранили свой язык, музыку, архитектуру и образ жизни несмотря ни на что, и посещение Гарб-Сохейль — одна из самых искренних и трогательных культурных встреч, доступных любому путешественнику в Египте. Опыт начинается с переправы на фелуке через Нил — несколько минут тишины, ветра и воды, ощущающихся как переход в совершенно другой мир. На дальнем берегу расписные дома Гарб-Сохейль поднимаются от края пустыни в синих, жёлтых и оранжевых тонах, украшенные росписями с лодками, рыбами, верблюдами и геометрическими узорами, несущими глубокий символический смысл в нубийской традиции, где каждый цвет и мотив выбран осознанно, а не просто как украшение.",

        steps: [{
          time: "09:00",
          description: "Встреча с гидом у причала для фелук на Корниш. Посадка на традиционную фелуку и переправа через Нил на Западный берег."
        }, {
          time: "09:20",
          description: "Прибытие к месту высадки в Гарб-Сохейль. Начало прогулки в деревню."
        }, {
          time: "09:30",
          description: "Прогулка по расписным улочкам Гарб-Сохейль. Гид объяснит символику настенных рисунков на домах, нубийскую архитектурную традицию ярких цветов и значение декоративных мотивов."
        }, {
          time: "10:15",
          description: "Посещение дома нубийской семьи — знакомство с хозяевами, отдых в традиционном дворике, рассказ о повседневной жизни нубийцев и совместное чаепитие, возможно с каркаде (напиток из гибискуса), вместе с семьёй."
        }, {
          time: "11:00",
          description: "Прогулка к небольшим общественным пространствам деревни — традиционные нубийские ремёсла, музыкальные инструменты, и рассказ гида об истории переселения нубийцев и продолжающихся усилиях по сохранению нубийской культуры."
        }, {
          time: "11:45",
          description: "Прогулка по небольшому ремесленному рынку за изделиями нубийских мастеров — плетёные корзины, бисерные украшения, керамика и специи."
        }, {
          time: "12:15",
          description: "Возвращение к месту посадки на фелуку и переправа обратно к набережной Асуана."
        }, {
          time: "12:30",
          description: "Прибытие к причалу на Корниш. Окончание тура."
        }]
      }],
      de: [{
        day: 1,
        title: "Über den Nil nach Gharb Soheil",
        description: "Das nubische Volk gehört zu den ältesten Zivilisationen der Welt, mit einer Geschichte, die sogar den Pharaonen vorausgeht, und doch ist seine Kultur den meisten Besuchern Ägyptens kaum bekannt — in Reiseführern überschattet von den berühmteren Monumenten, bei deren Abbau, Transport und manchmal auch Bau ihre Vorfahren halfen. Die nubische Heimat erstreckte sich entlang des Nils von Assuan bis tief in das heutige Sudan — ein eigenständiges Königreich und eine Kultur für sich, nicht bloß eine Fußnote der ägyptischen Geschichte, und als der Assuan-Staudamm in den 1960er-Jahren das Tal überflutete, wurden ganze Gemeinschaften umgesiedelt — eine Vertreibung, die Nubier bis heute als kollektive Wunde tragen, während ihre angestammten Dörfer nun still unter den Wassern des Nassersees ruhen. Heute beherbergen die Dörfer am Westufer in der Nähe von Assuan nubische Familien, die ihre Sprache, Musik, Architektur und Lebensweise trotz allem bewahrt haben, und ein Besuch in Gharb Soheil ist eine der echtesten und bewegendsten kulturellen Begegnungen, die einem Reisenden in Ägypten geboten werden. Das Erlebnis beginnt mit einer Felucca-Überfahrt über den Nil — wenige Minuten der Stille, des Windes und des Wassers, die sich anfühlen wie der Übergang in eine ganz andere Welt. Am gegenüberliegenden Ufer erheben sich die bunt bemalten Häuser von Gharb Soheil vom Wüstenrand in Blau-, Gelb- und Orangetönen, verziert mit Wandmalereien von Booten, Fischen, Kamelen und geometrischen Mustern, die in der nubischen Tradition eine tiefe symbolische Bedeutung tragen — jede Farbe und jedes Motiv bewusst gewählt und nicht bloß Dekoration.",

        steps: [{
          time: "09:00",
          description: "Treffen mit Ihrem Reiseleiter an der Felucca-Anlegestelle an der Corniche. Einstieg in die traditionelle Felucca und Überfahrt über den Nil zum Westufer."
        }, {
          time: "09:20",
          description: "Ankunft an der Anlegestelle von Gharb Soheil. Beginn des Spaziergangs ins Dorf."
        }, {
          time: "09:30",
          description: "Spaziergang durch die bunt bemalten Straßen von Gharb Soheil. Ihr Reiseleiter erklärt die Symbolik der Hausmalereien, die nubische Architekturtradition der leuchtenden Farben und die Bedeutung der dekorativen Motive."
        }, {
          time: "10:15",
          description: "Besuch bei einer nubischen Familie — lernen Sie Ihre Gastgeber kennen, sitzen Sie im traditionellen Innenhof, erfahren Sie mehr über das nubische Alltagsleben und teilen Sie Tee und vielleicht Karkadeh (Hibiskusgetränk) mit der Familie."
        }, {
          time: "11:00",
          description: "Spaziergang zu den kleinen Gemeinschaftsräumen des Dorfes — sehen Sie traditionelles nubisches Kunsthandwerk und Musikinstrumente, und hören Sie, wie Ihr Reiseleiter die Geschichte der nubischen Vertreibung und die anhaltenden Bemühungen zur Erhaltung der nubischen Kultur erklärt."
        }, {
          time: "11:45",
          description: "Schlendern Sie über den kleinen Kunsthandwerkermarkt für handgefertigte nubische Waren — geflochtene Körbe, Perlenschmuck, Töpferwaren und Gewürze."
        }, {
          time: "12:15",
          description: "Rückkehr zur Felucca-Anlegestelle und Rückfahrt zur Corniche von Assuan."
        }, {
          time: "12:30",
          description: "Ankunft an der Anlegestelle der Corniche. Ende der Tour."
        }]
      }]
    },
  },
  {
    title: "Kalabasha, Beit El-Wali & Kertassi Temples Tour",
    slug: "kalabasha-beit-wali-kertassi-temples-aswan",
    description:
      "Explore three extraordinary temples near Aswan that span different periods of Egyptian history, all relocated to their current site on the shores of Lake Nasser during the UNESCO rescue operation of the 1960s — a trio of monuments that, despite their scale and beauty, remain largely unknown even among seasoned travelers to Egypt. The Temple of Kalabasha is one of the largest freestanding temples in Nubia, built during the Roman era and dedicated to a Nubian solar deity whose worship long outlasted the empire that built his temple. Beit El-Wali is a rock-cut temple from the reign of Ramses II, filled with vivid battle reliefs that still carry their original color in places, depicting campaigns against Nubian and Libyan forces with a vividness rarely matched elsewhere. The small Kertassi kiosk, with its elegant columns standing almost alone against the sky, completes this remarkable trio with a quiet, understated grace that feels like a deliberate counterpoint to the grandeur of its neighbors.",
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
      es: "Zona de la Presa Alta de Asuán, lado sur. Su guía se reunirá con usted y organizará el barco hacia la isla del templo.",
      pt: "Área da Grande Barragem de Assuão, lado sul. Seu guia irá encontrá-lo e organizar o barco até a ilha do templo.",
      it: "Zona della Grande Diga di Assuan, lato sud. La vostra guida vi incontrerà e organizzerà la barca verso l'isola del tempio.",
      fr: "Zone du Haut Barrage d'Assouan, côté sud. Votre guide vous rejoindra et organisera le bateau vers l'île du temple.",
      ru: "Район Асуанской высотной плотины, южная сторона. Гид встретит вас и организует лодку до острова с храмами.",
      de: "Gebiet des Assuan-Staudamms, Südseite. Ihr Reiseleiter trifft Sie dort und organisiert das Boot zur Tempelinsel."
    },
    accessibility: {
      en: "The temples are reached by boat. Involves walking on sandy and uneven ground. Beit El-Wali has low doorways. Not suitable for wheelchairs.",
      es: "Se accede a los templos en barco. Implica caminar sobre suelo arenoso e irregular. Beit El-Wali tiene puertas bajas. No es adecuado para sillas de ruedas.",
      pt: "Os templos são alcançados por barco. Envolve caminhar sobre solo arenoso e irregular. Beit El-Wali tem portas baixas. Não é adequado para cadeiras de rodas.",
      it: "Si raggiungono i templi in barca. Prevede di camminare su terreno sabbioso e irregolare. Beit El-Wali presenta porte basse. Non adatto alle sedie a rotelle.",
      fr: "On accède aux temples en bateau. Implique de marcher sur un sol sablonneux et irrégulier. Beit El-Wali comporte des portes basses. Ne convient pas aux fauteuils roulants.",
      ru: "До храмов добираются на лодке. Предполагает ходьбу по песчаной и неровной местности. В Бейт-эль-Вали низкие проёмы. Не подходит для инвалидных колясок.",
      de: "Die Tempel sind nur mit dem Boot erreichbar. Beinhaltet das Gehen auf sandigem und unebenem Untergrund. Beit El-Wali hat niedrige Türöffnungen. Nicht geeignet für Rollstuhlfahrer."
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun hat and sunscreen", "Water bottle", "Camera"],
      es: [
        "Zapatos cómodos para caminar",
        "Sombrero y protector solar",
        "Botella de agua",
        "Cámara"
      ],
      pt: [
        "Sapatos confortáveis para caminhar",
        "Chapéu de sol e protetor solar",
        "Garrafa de água",
        "Câmera fotográfica"
      ],
      it: [
        "Scarpe comode da camminata",
        "Cappello da sole e crema solare",
        "Bottiglia d'acqua",
        "Macchina fotografica"
      ],
      fr: [
        "Chaussures de marche confortables",
        "Chapeau de soleil et crème solaire",
        "Bouteille d'eau",
        "Appareil photo"
      ],
      ru: [
        "Удобная обувь для ходьбы",
        "Шляпа от солнца и солнцезащитный крем",
        "Бутылка воды",
        "Фотоаппарат"
      ],
      de: [
        "Bequeme Wanderschuhe",
        "Sonnenhut und Sonnenschutzmittel",
        "Wasserflasche",
        "Kamera"
      ]
    },
    importantInfo: {
      en: [
        "Hotel pickup is not included; travel to the Aswan High Dam area independently.",
        "The temples are on an island in Lake Nasser reached by boat — the boat ride is included.",
        "Entrance fees are included in the tour price.",
        "The temples are rarely crowded — you may have the site almost to yourselves.",
      ],
      es: [
        "La recogida en el hotel no está incluida; viaje por su cuenta hasta la zona de la Presa Alta de Asuán.",
        "Los templos están en una isla en el lago Nasser a la que se llega en barco; el paseo en barco está incluido.",
        "Las entradas están incluidas en el precio del tour.",
        "Los templos rara vez están concurridos: puede tener el sitio casi solo para usted."
      ],
      pt: [
        "A busca no hotel não está incluída; viaje por conta própria até a área da Grande Barragem de Assuão.",
        "Os templos estão em uma ilha no Lago Nasser, acessível por barco — o passeio de barco está incluído.",
        "As taxas de entrada estão incluídas no preço do tour.",
        "Os templos raramente estão movimentados — você pode ter o local quase inteiramente para si."
      ],
      it: [
        "Il ritiro in hotel non è incluso; raggiungete autonomamente la zona della Grande Diga di Assuan.",
        "I templi si trovano su un'isola nel Lago Nasser raggiungibile in barca — il tragitto in barca è incluso.",
        "I biglietti d'ingresso sono inclusi nel prezzo del tour.",
        "I templi sono raramente affollati — potreste avere il sito quasi interamente a vostra disposizione."
      ],
      fr: [
        "La prise en charge à l'hôtel n'est pas incluse ; rendez-vous de manière indépendante à la zone du Haut Barrage d'Assouan.",
        "Les temples se trouvent sur une île du lac Nasser accessible en bateau — la traversée en bateau est incluse.",
        "Les frais d'entrée sont inclus dans le prix de l'excursion.",
        "Les temples sont rarement fréquentés — vous pourriez avoir le site presque entièrement pour vous."
      ],
      ru: [
        "Трансфер из отеля не включён; добраться до района Высотной плотины Асуана нужно самостоятельно.",
        "Храмы расположены на острове на озере Насер, до которого добираются на лодке — поездка на лодке включена.",
        "Входные билеты включены в стоимость тура.",
        "Храмы редко бывают многолюдными — возможно, у вас будет это место почти полностью в своём распоряжении."
      ],
      de: [
        "Die Hotelabholung ist nicht inbegriffen; reisen Sie selbstständig zum Gebiet des Assuan-Staudamms.",
        "Die Tempel liegen auf einer Insel im Nassersee, die mit dem Boot erreicht wird — die Bootsfahrt ist inbegriffen.",
        "Die Eintrittsgebühren sind im Tourpreis enthalten.",
        "Die Tempel sind selten überfüllt — möglicherweise haben Sie die Stätte fast ganz für sich allein."
      ]
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
            "This half-day tour visits one of the most concentrated and least-visited groups of ancient temples in Egypt — three structures from three different eras gathered on a single promontory above the waters of Lake Nasser, just south of the Aswan High Dam, a site that feels almost like a private discovery compared to the crowded courts of Karnak or Luxor. Their presence here is itself a story: all three were dismantled and relocated from their original sites in the early 1960s, before the rising waters of the new lake swallowed the Nubian valley forever, erasing villages, farmland, and ancient sites that could not be saved in time. The boat crossing from the dam to the temple island takes only a few minutes, but the approach across the lake — with the great wall of the dam behind you and the open desert stretching in every direction — is a quietly powerful introduction to the landscape of Lake Nasser, a vastness that makes the scale of the relocation effort feel even more astonishing. The Temple of Kalabasha dominates the site: a large, well-preserved Greco-Roman temple dedicated to the Nubian solar deity Mandulis, built in the reign of Augustus and decorated in a style that mixes Egyptian pharaonic convention with Hellenistic detail, a visual record of two civilizations meeting on Nubian soil.",
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
      es: [{
        day: 1,
        title: "Tres templos en el lago: medio día en Nubia",
        description: "Este tour de medio día visita uno de los grupos de templos antiguos más concentrados y menos visitados de Egipto: tres estructuras de tres épocas diferentes reunidas en un único promontorio sobre las aguas del lago Nasser, justo al sur de la Presa Alta de Asuán, un sitio que se siente casi como un descubrimiento privado en comparación con los concurridos patios de Karnak o Luxor. Su presencia aquí es en sí misma una historia: los tres fueron desmontados y reubicados de sus sitios originales a principios de la década de 1960, antes de que las aguas crecientes del nuevo lago engulleran para siempre el valle nubio, borrando pueblos, tierras de cultivo y sitios antiguos que no pudieron ser salvados a tiempo. El cruce en barco desde la presa hasta la isla del templo dura solo unos minutos, pero el acercamiento a través del lago, con el gran muro de la presa detrás de usted y el desierto abierto extendiéndose en todas direcciones, es una introducción tranquilamente poderosa al paisaje del lago Nasser, una inmensidad que hace que la escala del esfuerzo de reubicación se sienta aún más asombrosa. El Templo de Kalabasha domina el sitio: un gran templo grecorromano bien conservado dedicado a la deidad solar nubia Mandulis, construido durante el reinado de Augusto y decorado en un estilo que mezcla la convención faraónica egipcia con detalles helenísticos, un registro visual de dos civilizaciones que se encuentran en suelo nubio.",

        steps: [{
          time: "08:00",
          description: "Encuentro con su guía en el lado sur de la Presa Alta de Asuán. Breve orientación antes de abordar el barco."
        }, {
          time: "08:15",
          description: "Breve cruce en barco hacia la isla del templo de Kalabasha en el lago Nasser."
        }, {
          time: "08:30",
          description: "Visita guiada al Templo de Kalabasha: entre por el pilono, camine por el patio abierto y la sala hipóstila, y llegue al santuario interior. Su guía explica al dios nubio Mandulis y el estilo de construcción grecorromano único del templo."
        }, {
          time: "09:30",
          description: "Traslado a Beit El-Wali. Entre al templo excavado en la roca, tallado durante el reinado de Ramsés II. Examine los relieves de batalla de colores dramáticos en el patio delantero (Ramsés cargando contra ejércitos enemigos en su carro) y las cámaras interiores pintadas, más íntimas."
        }, {
          time: "10:15",
          description: "Visite el quiosco de Kertassi: una pequeña estructura de columnas abiertas de gran elegancia, dedicada a Hathor e Isis, con vistas sobre las aguas tranquilas del lago."
        }, {
          time: "10:45",
          description: "Tiempo libre en el promontorio: camine hasta la orilla del agua, fotografíe los templos desde diferentes ángulos y absorba el extraordinario silencio de este rincón de Egipto, raramente visitado."
        }, {
          time: "11:15",
          description: "Abordar el barco para el cruce de regreso."
        }, {
          time: "11:30",
          description: "Llegada de vuelta a la zona de la Presa Alta. Fin del tour."
        }]
      }],
      pt: [{
        day: 1,
        title: "Três templos no lago — Meio dia na Núbia",
        description: "Este tour de meio dia visita um dos grupos de templos antigos mais concentrados e menos visitados do Egito — três estruturas de três épocas diferentes reunidas em um único promontório sobre as águas do Lago Nasser, pouco ao sul da Grande Barragem de Assuão, um local que parece quase uma descoberta particular comparado aos pátios movimentados de Karnak ou Luxor. Sua presença aqui é, em si, uma história: todos os três foram desmontados e realocados de seus sítios originais no início da década de 1960, antes que as águas crescentes do novo lago engolissem para sempre o vale núbio, apagando vilas, terras agrícolas e sítios antigos que não puderam ser salvos a tempo. A travessia de barco da barragem até a ilha do templo leva apenas alguns minutos, mas a aproximação através do lago — com a grande parede da barragem atrás de você e o deserto aberto se estendendo em todas as direções — é uma introdução silenciosamente poderosa à paisagem do Lago Nasser, uma vastidão que torna a escala do esforço de realocação ainda mais surpreendente. O Templo de Kalabasha domina o local: um grande templo greco-romano bem preservado, dedicado à divindade solar núbia Mandulis, construído durante o reinado de Augusto e decorado em um estilo que mistura a convenção faraônica egípcia com detalhes helenísticos, um registro visual de duas civilizações se encontrando em solo núbio.",

        steps: [{
          time: "08:00",
          description: "Encontro com seu guia no lado sul da Grande Barragem de Assuão. Breve orientação antes de embarcar no barco."
        }, {
          time: "08:15",
          description: "Breve travessia de barco até a ilha do templo de Kalabasha, no Lago Nasser."
        }, {
          time: "08:30",
          description: "Tour guiado pelo Templo de Kalabasha — entre pelo pilone, caminhe pelo pátio aberto e pelo salão hipostilo, e alcance o santuário interior. Seu guia explica sobre o deus núbio Mandulis e o estilo único de construção greco-romana do templo."
        }, {
          time: "09:30",
          description: "Deslocamento até Beit El-Wali. Entre no templo escavado na rocha, esculpido durante o reinado de Ramsés II. Examine os relevos de batalha vivamente coloridos no pátio frontal — Ramsés avançando contra exércitos inimigos em sua carruagem — e as câmaras internas pintadas, mais íntimas."
        }, {
          time: "10:15",
          description: "Visite o quiosque de Kertassi — uma pequena estrutura de colunas abertas de grande elegância, dedicada a Hathor e Ísis, com vistas sobre as águas tranquilas do lago."
        }, {
          time: "10:45",
          description: "Tempo livre no promontório — caminhe até a beira da água, fotografe os templos de diferentes ângulos e absorva o silêncio extraordinário deste canto raramente visitado do Egito."
        }, {
          time: "11:15",
          description: "Embarque no barco para a travessia de retorno."
        }, {
          time: "11:30",
          description: "Chegada de volta à área da Grande Barragem. Fim do tour."
        }]
      }],
      it: [{
        day: 1,
        title: "Tre templi sul lago — Mezza giornata in Nubia",
        description: "Questo tour di mezza giornata visita uno dei gruppi di templi antichi più concentrati e meno visitati d'Egitto — tre strutture di tre epoche diverse raccolte su un unico promontorio sopra le acque del Lago Nasser, appena a sud della Grande Diga di Assuan, un sito che sembra quasi una scoperta privata rispetto alle corti affollate di Karnak o Luxor. La loro presenza qui è di per sé una storia: tutti e tre furono smontati e trasferiti dai loro siti originali nei primi anni '60, prima che le acque crescenti del nuovo lago sommergessero per sempre la valle nubiana, cancellando villaggi, terreni agricoli e siti antichi che non poterono essere salvati in tempo. La traversata in barca dalla diga all'isola del tempio richiede solo pochi minuti, ma l'approccio attraverso il lago — con la grande parete della diga dietro di voi e il deserto aperto che si estende in ogni direzione — è un'introduzione silenziosamente potente al paesaggio del Lago Nasser, una vastità che rende la portata dell'operazione di trasferimento ancora più sorprendente. Il Tempio di Kalabasha domina il sito: un grande tempio greco-romano ben conservato dedicato alla divinità solare nubiana Mandulis, costruito durante il regno di Augusto e decorato in uno stile che mescola la convenzione faraonica egizia con dettagli ellenistici, una testimonianza visiva di due civiltà che si incontrano su suolo nubiano.",

        steps: [{
          time: "08:00",
          description: "Incontro con la guida sul lato sud della Grande Diga di Assuan. Breve orientamento prima di imbarcarsi sulla barca."
        }, {
          time: "08:15",
          description: "Breve traversata in barca verso l'isola del tempio di Kalabasha sul Lago Nasser."
        }, {
          time: "08:30",
          description: "Visita guidata al Tempio di Kalabasha — entrate attraverso il pilone, camminate nel cortile aperto e nella sala ipostila, e raggiungete il santuario interno. La vostra guida spiega il dio nubiano Mandulis e lo stile costruttivo greco-romano unico del tempio."
        }, {
          time: "09:30",
          description: "Spostamento a Beit El-Wali. Entrate nel tempio rupestre scolpito durante il regno di Ramses II. Osservate i drammatici rilievi di battaglia colorati nel cortile anteriore — Ramses che carica contro gli eserciti nemici sul suo carro — e le più intime camere interne dipinte."
        }, {
          time: "10:15",
          description: "Visitate il chiosco di Kertassi — una piccola struttura a colonne aperte di grande eleganza, dedicata a Hathor e Iside, con vedute sulle acque immobili del lago."
        }, {
          time: "10:45",
          description: "Tempo libero sul promontorio — camminate fino alla riva dell'acqua, fotografate i templi da diverse angolazioni e assorbite il silenzio straordinario di questo angolo raramente visitato dell'Egitto."
        }, {
          time: "11:15",
          description: "Imbarco sulla barca per la traversata di ritorno."
        }, {
          time: "11:30",
          description: "Arrivo di ritorno alla zona della Grande Diga. Fine del tour."
        }]
      }],
      fr: [{
        day: 1,
        title: "Trois temples sur le lac — Une demi-journée en Nubie",
        description: "Cette excursion d'une demi-journée visite l'un des groupes de temples antiques les plus concentrés et les moins visités d'Égypte — trois structures issues de trois époques différentes réunies sur un seul promontoire au-dessus des eaux du lac Nasser, juste au sud du Haut Barrage d'Assouan, un site qui ressemble presque à une découverte privée comparé aux cours bondées de Karnak ou de Louxor. Leur présence ici est en elle-même une histoire : tous les trois ont été démontés et déplacés de leurs sites d'origine au début des années 1960, avant que les eaux montantes du nouveau lac n'engloutissent pour toujours la vallée nubienne, effaçant villages, terres agricoles et sites antiques qui n'ont pu être sauvés à temps. La traversée en bateau depuis le barrage jusqu'à l'île du temple ne prend que quelques minutes, mais l'approche à travers le lac — avec le grand mur du barrage derrière vous et le désert ouvert s'étendant dans toutes les directions — constitue une introduction discrètement saisissante au paysage du lac Nasser, une immensité qui rend l'ampleur de l'opération de déplacement encore plus impressionnante. Le temple de Kalabasha domine le site : un grand temple gréco-romain bien conservé, dédié à la divinité solaire nubienne Mandulis, construit sous le règne d'Auguste et décoré dans un style mêlant les conventions pharaoniques égyptiennes aux détails helléniques, un témoignage visuel de la rencontre de deux civilisations sur le sol nubien.",

        steps: [{
          time: "08:00",
          description: "Rencontre avec votre guide du côté sud du Haut Barrage d'Assouan. Brève orientation avant de monter à bord du bateau."
        }, {
          time: "08:15",
          description: "Courte traversée en bateau vers l'île du temple de Kalabasha sur le lac Nasser."
        }, {
          time: "08:30",
          description: "Visite guidée du temple de Kalabasha — entrez par le pylône, traversez la cour ouverte et la salle hypostyle, et atteignez le sanctuaire intérieur. Votre guide explique le dieu nubien Mandulis et le style de construction gréco-romain unique du temple."
        }, {
          time: "09:30",
          description: "Déplacement vers Beit El-Wali. Entrez dans le temple rupestre taillé sous le règne de Ramsès II. Examinez les reliefs de bataille aux couleurs spectaculaires dans la cour avant — Ramsès chargeant les armées ennemies sur son char — ainsi que les chambres intérieures peintes, plus intimes."
        }, {
          time: "10:15",
          description: "Visitez le kiosque de Kertassi — une petite structure à colonnes ouvertes, d'une grande élégance, dédiée à Hathor et Isis, avec vue sur les eaux calmes du lac."
        }, {
          time: "10:45",
          description: "Temps libre sur le promontoire — marchez jusqu'au bord de l'eau, photographiez les temples sous différents angles et imprégnez-vous du silence extraordinaire de ce coin rarement visité de l'Égypte."
        }, {
          time: "11:15",
          description: "Montée à bord du bateau pour la traversée de retour."
        }, {
          time: "11:30",
          description: "Retour à la zone du Haut Barrage. Fin de l'excursion."
        }]
      }],
      ru: [{
        day: 1,
        title: "Три храма на озере — полдня в Нубии",
        description: "Этот тур на полдня посещает одну из самых концентрированных и наименее посещаемых групп древних храмов Египта — три сооружения трёх разных эпох, собранных на одном мысе над водами озера Насер, чуть южнее Асуанской высотной плотины, место, которое ощущается почти как личное открытие по сравнению с многолюдными дворами Карнака или Луксора. Их присутствие здесь само по себе является историей: все три были разобраны и перемещены со своих первоначальных мест в начале 1960-х годов, прежде чем поднимающиеся воды нового озера навсегда поглотили нубийскую долину, стерев деревни, сельскохозяйственные земли и древние памятники, которые не успели спасти. Переправа на лодке от плотины до острова с храмами занимает всего несколько минут, но сам подход через озеро — с огромной стеной плотины позади и открытой пустыней, простирающейся во всех направлениях — служит тихим, но мощным введением в ландшафт озера Насер, необъятность которого делает масштаб операции по переселению ещё более поразительным. Храм Калабша доминирует на этом месте: большой, хорошо сохранившийся греко-римский храм, посвящённый нубийскому солнечному божеству Мандулису, построенный в эпоху правления Августа и украшенный в стиле, сочетающем египетскую фараоновскую традицию с эллинистическими деталями — визуальное свидетельство встречи двух цивилизаций на нубийской земле.",

        steps: [{
          time: "08:00",
          description: "Встреча с гидом на южной стороне Асуанской высотной плотины. Краткий инструктаж перед посадкой на лодку."
        }, {
          time: "08:15",
          description: "Короткая переправа на лодке до острова с храмом Калабша на озере Насер."
        }, {
          time: "08:30",
          description: "Экскурсия с гидом по храму Калабша — вход через пилон, прогулка по открытому двору и гипостильному залу, достижение внутреннего святилища. Гид расскажет о нубийском боге Мандулисе и уникальном греко-римском стиле постройки храма."
        }, {
          time: "09:30",
          description: "Переход к Бейт-эль-Вали. Вход в храм, высеченный в скале во времена правления Рамсеса II. Рассмотрите драматично окрашенные батальные рельефы во дворе перед храмом — Рамсес, атакующий армии врагов на своей колеснице — и более интимные расписные внутренние камеры."
        }, {
          time: "10:15",
          description: "Посещение киоска Кертасси — небольшого изящного сооружения с открытыми колоннами, посвящённого Хатхор и Исиде, с видами на спокойные воды озера."
        }, {
          time: "10:45",
          description: "Свободное время на мысе — прогулка к краю воды, фотографирование храмов с разных ракурсов и наслаждение удивительной тишиной этого редко посещаемого уголка Египта."
        }, {
          time: "11:15",
          description: "Посадка на лодку для обратной переправы."
        }, {
          time: "11:30",
          description: "Возвращение в район Высотной плотины. Окончание тура."
        }]
      }],
      de: [{
        day: 1,
        title: "Drei Tempel auf dem See — Ein halber Tag in Nubien",
        description: "Diese Halbtagestour besucht eine der am dichtesten konzentrierten und am wenigsten besuchten Gruppen antiker Tempel in Ägypten — drei Bauwerke aus drei verschiedenen Epochen, vereint auf einem einzigen Vorsprung über den Wassern des Nassersees, direkt südlich des Assuan-Staudamms, eine Stätte, die sich im Vergleich zu den überfüllten Höfen von Karnak oder Luxor fast wie eine private Entdeckung anfühlt. Ihre Anwesenheit hier ist selbst eine Geschichte: Alle drei wurden Anfang der 1960er-Jahre von ihren ursprünglichen Standorten abgebaut und verlegt, bevor die steigenden Wasser des neuen Sees das nubische Tal für immer verschlangen und Dörfer, Ackerland und antike Stätten auslöschten, die nicht rechtzeitig gerettet werden konnten. Die Bootsüberfahrt vom Staudamm zur Tempelinsel dauert nur wenige Minuten, doch die Anfahrt über den See — mit der großen Mauer des Staudamms hinter Ihnen und der offenen Wüste, die sich in alle Richtungen erstreckt — ist eine still beeindruckende Einführung in die Landschaft des Nassersees, deren Weite das Ausmaß der Umsiedlungsaktion umso erstaunlicher erscheinen lässt. Der Tempel von Kalabasha dominiert die Stätte: ein großer, gut erhaltener griechisch-römischer Tempel, der der nubischen Sonnengottheit Mandulis gewidmet ist, erbaut zur Zeit der Herrschaft von Augustus und verziert in einem Stil, der ägyptische pharaonische Konventionen mit hellenistischen Details vermischt — ein visuelles Zeugnis zweier Zivilisationen, die auf nubischem Boden zusammentreffen.",

        steps: [{
          time: "08:00",
          description: "Treffen mit Ihrem Reiseleiter auf der Südseite des Assuan-Staudamms. Kurze Einweisung vor dem Einstieg ins Boot."
        }, {
          time: "08:15",
          description: "Kurze Bootsüberfahrt zur Kalabasha-Tempelinsel auf dem Nassersee."
        }, {
          time: "08:30",
          description: "Geführte Tour durch den Tempel von Kalabasha — treten Sie durch den Pylon, gehen Sie durch den offenen Innenhof und den Säulensaal und erreichen Sie das innere Heiligtum. Ihr Reiseleiter erklärt den nubischen Gott Mandulis und den einzigartigen griechisch-römischen Baustil des Tempels."
        }, {
          time: "09:30",
          description: "Weiterfahrt nach Beit El-Wali. Betreten Sie den in den Felsen gehauenen Tempel aus der Regierungszeit von Ramses II. Betrachten Sie die dramatisch gefärbten Schlachtreliefs im Vorhof — Ramses, der mit seinem Streitwagen feindliche Heere angreift — sowie die intimeren bemalten Innenkammern."
        }, {
          time: "10:15",
          description: "Besuchen Sie den Kiosk von Kertassi — ein kleines, offenes Säulenbauwerk von großer Eleganz, das Hathor und Isis gewidmet ist, mit Blick über die ruhigen Wasser des Sees."
        }, {
          time: "10:45",
          description: "Freizeit auf dem Vorsprung — gehen Sie bis zum Wasser, fotografieren Sie die Tempel aus verschiedenen Blickwinkeln und nehmen Sie die außergewöhnliche Stille dieser selten besuchten Ecke Ägyptens in sich auf."
        }, {
          time: "11:15",
          description: "Einstieg ins Boot für die Rückfahrt."
        }, {
          time: "11:30",
          description: "Rückkehr zum Gebiet des Staudamms. Ende der Tour."
        }]
      }]
    },
  },
  {
    title: "Edfu & Kom Ombo Temples Tour from Aswan",
    slug: "edfu-kom-ombo-temples-tour-aswan",
    description:
      "Head north from Aswan on this full-day guided tour to two of the Nile Valley's most impressive ancient temples, both stops you would otherwise only glimpse briefly from the deck of a passing cruise ship, but which here receive the time and attention they truly deserve. At Edfu, you'll discover the magnificent Temple of Horus, dedicated to the falcon-headed god and considered one of the best-preserved temples in Egypt, with towering pylons and richly carved walls that reveal the secrets of ancient Egyptian religion in a level of architectural completeness found almost nowhere else in the country. At Kom Ombo, an extraordinary double temple dedicated to both Sobek the crocodile god and Haroeris the falcon god awaits, its perfectly symmetrical design a rare architectural curiosity, along with a fascinating collection of genuine mummified crocodiles that once terrified and fascinated ancient worshippers in equal measure.",
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
      es: "El lobby de su hotel en Asuán. El guía y el vehículo lo recogerán para el viaje hacia el norte.",
      pt: "O lobby do seu hotel em Assuão. O guia e o veículo o buscarão para o trajeto rumo ao norte.",
      it: "La hall del vostro hotel ad Assuan. La guida e il veicolo vi verranno a prendere per il viaggio verso nord.",
      fr: "Le hall de votre hôtel à Assouan. Le guide et le véhicule viendront vous chercher pour le trajet vers le nord.",
      ru: "Лобби вашего отеля в Асуане. Гид и автомобиль заберут вас для поездки на север.",
      de: "Die Lobby Ihres Hotels in Assuan. Der Reiseleiter und das Fahrzeug holen Sie für die Fahrt nach Norden ab."
    },
    accessibility: {
      en: "Both temples involve walking on uneven ancient paving. Edfu has a horse-carriage approach. Not suitable for guests with severe mobility issues.",
      es: "Ambos templos implican caminar sobre antiguos pavimentos irregulares. Edfu tiene un acceso en carruaje tirado por caballos. No es adecuado para huéspedes con problemas graves de movilidad.",
      pt: "Ambos os templos envolvem caminhar sobre pavimentação antiga irregular. Edfu tem um acesso de carruagem puxada por cavalos. Não é adequado para hóspedes com problemas graves de mobilidade.",
      it: "Entrambi i templi prevedono di camminare su antiche pavimentazioni irregolari. Edfu prevede un accesso in carrozza a cavalli. Non adatto agli ospiti con gravi problemi di mobilità.",
      fr: "Les deux temples impliquent de marcher sur un pavage antique irrégulier. Edfou comprend une approche en calèche tirée par des chevaux. Ne convient pas aux personnes ayant de graves problèmes de mobilité.",
      ru: "В обоих храмах предполагается ходьба по неровному древнему покрытию. В Эдфу — подъезд на конной повозке. Не подходит для гостей с серьёзными проблемами с подвижностью.",
      de: "Beide Tempel erfordern das Gehen auf unebenem antikem Pflaster. In Edfu erfolgt die Anfahrt mit einer Pferdekutsche. Nicht geeignet für Gäste mit starken Mobilitätseinschränkungen."
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun hat and sunscreen", "Water bottle", "Camera", "Light jacket for the early morning drive"],
      es: [
        "Zapatos cómodos para caminar",
        "Sombrero y protector solar",
        "Botella de agua",
        "Cámara",
        "Chaqueta ligera para el viaje de primera hora de la mañana"
      ],
      pt: [
        "Sapatos confortáveis para caminhar",
        "Chapéu de sol e protetor solar",
        "Garrafa de água",
        "Câmera fotográfica",
        "Jaqueta leve para o trajeto da manhã bem cedo"
      ],
      it: [
        "Scarpe comode da camminata",
        "Cappello da sole e crema solare",
        "Bottiglia d'acqua",
        "Macchina fotografica",
        "Giacca leggera per il viaggio di prima mattina"
      ],
      fr: [
        "Chaussures de marche confortables",
        "Chapeau de soleil et crème solaire",
        "Bouteille d'eau",
        "Appareil photo",
        "Veste légère pour le trajet matinal"
      ],
      ru: [
        "Удобная обувь для ходьбы",
        "Шляпа от солнца и солнцезащитный крем",
        "Бутылка воды",
        "Фотоаппарат",
        "Лёгкая куртка для раннего утреннего выезда"
      ],
      de: [
        "Bequeme Wanderschuhe",
        "Sonnenhut und Sonnenschutzmittel",
        "Wasserflasche",
        "Kamera",
        "Leichte Jacke für die frühmorgendliche Fahrt"
      ]
    },
    importantInfo: {
      en: [
        "Hotel pickup from central Aswan is included.",
        "The horse-drawn carriage to Edfu Temple is part of the local experience and is included.",
        "Entrance fees to both temples are included.",
        "Lunch is not included — your guide can recommend local restaurants in Edfu or Kom Ombo.",
      ],
      es: [
        "La recogida en el hotel desde el centro de Asuán está incluida.",
        "El carruaje tirado por caballos hacia el Templo de Edfu forma parte de la experiencia local y está incluido.",
        "Las entradas a ambos templos están incluidas.",
        "El almuerzo no está incluido: su guía puede recomendarle restaurantes locales en Edfu o Kom Ombo."
      ],
      pt: [
        "A busca no hotel no centro de Assuão está incluída.",
        "A carruagem puxada por cavalos até o Templo de Edfu faz parte da experiência local e está incluída.",
        "As taxas de entrada para ambos os templos estão incluídas.",
        "O almoço não está incluído — seu guia pode recomendar restaurantes locais em Edfu ou Kom Ombo."
      ],
      it: [
        "Il ritiro in hotel dal centro di Assuan è incluso.",
        "La carrozza a cavalli verso il Tempio di Edfu fa parte dell'esperienza locale ed è inclusa.",
        "I biglietti d'ingresso a entrambi i templi sono inclusi.",
        "Il pranzo non è incluso — la vostra guida potrà consigliarvi ristoranti locali a Edfu o Kom Ombo."
      ],
      fr: [
        "La prise en charge à l'hôtel depuis le centre d'Assouan est incluse.",
        "La calèche tirée par des chevaux jusqu'au temple d'Edfou fait partie de l'expérience locale et est incluse.",
        "Les frais d'entrée pour les deux temples sont inclus.",
        "Le déjeuner n'est pas inclus — votre guide pourra vous recommander des restaurants locaux à Edfou ou Kom Ombo."
      ],
      ru: [
        "Трансфер из отеля в центре Асуана включён.",
        "Поездка на конной повозке до храма Эдфу является частью местного колорита и включена.",
        "Входные билеты в оба храма включены.",
        "Обед не включён — гид может порекомендовать местные рестораны в Эдфу или Ком-Омбо."
      ],
      de: [
        "Die Hotelabholung im Zentrum von Assuan ist inbegriffen.",
        "Die Pferdekutsche zum Tempel von Edfu ist Teil des lokalen Erlebnisses und inbegriffen.",
        "Die Eintrittsgebühren für beide Tempel sind inbegriffen.",
        "Das Mittagessen ist nicht inbegriffen — Ihr Reiseleiter kann lokale Restaurants in Edfu oder Kom Ombo empfehlen."
      ]
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
            "This full-day tour follows the Nile north from Aswan to two of the river valley's most magnificent ancient temples. Both are regular stops on the Aswan-to-Luxor Nile cruise route, but visiting them by road from Aswan gives you the flexibility to spend more time at each site without the rushing of a ship's schedule, free to linger in a hypostyle hall or examine a particular relief for as long as your curiosity demands. The Temple of Horus at Edfu is arguably the most complete ancient Egyptian temple in existence — so well preserved that its structural logic, from the entrance pylon through the successive courts and halls to the inner sanctuary, can be read almost like an architectural blueprint laid out in stone. Built between 237 and 57 BC in the Ptolemaic period, long after the pharaonic era had ended, it was constructed in the ancient style as a deliberate act of cultural preservation by Greek-descended rulers eager to legitimize their reign in distinctly Egyptian terms. The Temple of Kom Ombo, built on a curve of the Nile with the river visible through its columns, is unique for its perfect bilateral symmetry — two temples in one, dedicated to two gods, with every chamber, corridor, and staircase doubled, a layout that still puzzles and delights visitors trying to work out which half belongs to which deity.",
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
      es: [{
        day: 1,
        title: "Templos de Horus y del dios cocodrilo",
        description: "Este tour de día completo sigue el Nilo hacia el norte desde Asuán hasta dos de los templos antiguos más magníficos del valle del río. Ambos son paradas habituales en la ruta del crucero por el Nilo de Asuán a Luxor, pero visitarlos por carretera desde Asuán le da la flexibilidad de pasar más tiempo en cada sitio sin las prisas del horario de un barco, libre para demorarse en una sala hipóstila o examinar un relieve en particular durante el tiempo que su curiosidad exija. El Templo de Horus en Edfu es posiblemente el templo egipcio antiguo más completo que existe, tan bien conservado que su lógica estructural, desde el pilono de entrada a través de los patios y salas sucesivas hasta el santuario interior, puede leerse casi como un plano arquitectónico trazado en piedra. Construido entre el 237 y el 57 a. C. en el período ptolemaico, mucho después de que terminara la era faraónica, fue construido en el estilo antiguo como un acto deliberado de preservación cultural por parte de gobernantes de ascendencia griega ansiosos por legitimar su reinado en términos claramente egipcios. El Templo de Kom Ombo, construido en una curva del Nilo con el río visible a través de sus columnas, es único por su perfecta simetría bilateral: dos templos en uno, dedicados a dos dioses, con cada cámara, pasillo y escalera duplicados, una disposición que todavía desconcierta y deleita a los visitantes que intentan determinar qué mitad pertenece a cada deidad.",

        steps: [{
          time: "07:00",
          description: "Recogida en el hotel en Asuán. Viaje hacia el norte por la carretera del valle del Nilo en dirección a Kom Ombo."
        }, {
          time: "08:30",
          description: "Llegada a Kom Ombo. Caminata hasta la entrada del templo con vistas al Nilo."
        }, {
          time: "09:00",
          description: "Visita guiada al Templo de Kom Ombo: camine por el pilono de entrada doble, explore los santuarios gemelos dedicados a Sobek y Haroeris, examine los relieves tallados de instrumentos médicos y visite el Museo del Cocodrilo, que exhibe auténticos cocodrilos momificados antiguos encontrados en el sitio."
        }, {
          time: "10:30",
          description: "Salida de Kom Ombo. Continuación hacia el norte, a Edfu."
        }, {
          time: "11:30",
          description: "Llegada a Edfu. Abordar un carruaje tradicional tirado por caballos para el corto trayecto hasta la entrada del templo, una experiencia esencial de Edfu."
        }, {
          time: "12:00",
          description: "Visita guiada al Templo de Horus en Edfu: párese frente al imponente pilono decorado con relieves de Ptolomeo XII derrotando a sus enemigos; camine por el patio abierto de los Festivales; entre en la magnífica Sala Hipóstila; continúe a través del vestíbulo hacia el santuario donde todavía se encuentra el altar de granito original de Horus."
        }, {
          time: "13:30",
          description: "Tiempo libre en Edfu. Almuerzo a su propio cargo en un restaurante local (su guía le recomendará opciones)."
        }, {
          time: "14:30",
          description: "Regreso en carruaje al vehículo. Salida de Edfu para el viaje de regreso a Asuán."
        }, {
          time: "17:00",
          description: "Llegada de vuelta a Asuán. Traslado a su hotel. Fin del tour."
        }]
      }],
      pt: [{
        day: 1,
        title: "Templos de Hórus e do deus crocodilo",
        description: "Este tour de dia inteiro segue o Nilo para o norte, de Assuão até dois dos templos antigos mais magníficos do vale do rio. Ambos são paradas regulares na rota de cruzeiro do Nilo entre Assuão e Luxor, mas visitá-los por estrada a partir de Assuão lhe dá a flexibilidade de passar mais tempo em cada local sem a pressa do cronograma de um navio, livre para se demorar em um salão hipostilo ou examinar um relevo específico pelo tempo que sua curiosidade exigir. O Templo de Hórus em Edfu é, sem dúvida, o templo egípcio antigo mais completo em existência — tão bem preservado que sua lógica estrutural, desde o pilone de entrada através dos pátios e salões sucessivos até o santuário interior, pode ser lida quase como uma planta arquitetônica esculpida em pedra. Construído entre 237 e 57 a.C., no período ptolemaico, muito depois do fim da era faraônica, foi erguido no estilo antigo como um ato deliberado de preservação cultural por governantes de ascendência grega, ansiosos por legitimar seu reinado em termos genuinamente egípcios. O Templo de Kom Ombo, construído em uma curva do Nilo com o rio visível através de suas colunas, é singular por sua perfeita simetria bilateral — dois templos em um, dedicados a dois deuses, com cada câmara, corredor e escada duplicados, um layout que ainda intriga e encanta os visitantes que tentam descobrir qual metade pertence a qual divindade.",

        steps: [{
          time: "07:00",
          description: "Busca no hotel em Assuão. Trajeto para o norte pela estrada do Vale do Nilo em direção a Kom Ombo."
        }, {
          time: "08:30",
          description: "Chegada a Kom Ombo. Caminhada até a entrada do templo com vistas do Nilo."
        }, {
          time: "09:00",
          description: "Tour guiado pelo Templo de Kom Ombo — caminhe pelo pilone de entrada duplo, explore os santuários gêmeos dedicados a Sobek e Haroéris, examine os relevos esculpidos de instrumentos médicos e visite o Museu do Crocodilo, que exibe autênticos crocodilos mumificados antigos encontrados no local."
        }, {
          time: "10:30",
          description: "Partida de Kom Ombo. Continuação para o norte, até Edfu."
        }, {
          time: "11:30",
          description: "Chegada a Edfu. Embarque em uma carruagem tradicional puxada por cavalos para o curto trajeto até a entrada do templo — uma experiência essencial de Edfu."
        }, {
          time: "12:00",
          description: "Tour guiado pelo Templo de Hórus em Edfu — fique diante do imponente pilone decorado com relevos de Ptolomeu XII derrotando inimigos; caminhe pelo pátio aberto dos Festivais; entre no magnífico Salão Hipostilo; siga através do vestíbulo até o santuário onde o altar de granito original de Hórus ainda permanece."
        }, {
          time: "13:30",
          description: "Tempo livre em Edfu. Almoço por conta própria em um restaurante local (seu guia recomendará opções)."
        }, {
          time: "14:30",
          description: "Retorno de carruagem até o veículo. Partida de Edfu para o trajeto de volta a Assuão."
        }, {
          time: "17:00",
          description: "Chegada de volta a Assuão. Traslado até seu hotel. Fim do tour."
        }]
      }],
      it: [{
        day: 1,
        title: "I templi di Horus e del dio coccodrillo",
        description: "Questo tour di un'intera giornata segue il Nilo verso nord da Assuan fino a due dei più magnifici templi antichi della valle del fiume. Entrambi sono tappe regolari sulla rotta di crociera del Nilo tra Assuan e Luxor, ma visitarli su strada da Assuan vi offre la flessibilità di passare più tempo in ciascun sito senza la fretta dell'orario di una nave, liberi di soffermarvi in una sala ipostila o di esaminare un particolare rilievo per tutto il tempo che la vostra curiosità richiede. Il Tempio di Horus a Edfu è probabilmente il tempio egizio antico più completo esistente — così ben conservato che la sua logica strutturale, dal pilone d'ingresso attraverso i cortili e le sale successive fino al santuario interno, può essere letta quasi come un progetto architettonico scolpito nella pietra. Costruito tra il 237 e il 57 a.C. in epoca ptolemaica, molto dopo la fine dell'era faraonica, fu eretto nello stile antico come deliberato atto di conservazione culturale da parte di governanti di origine greca, desiderosi di legittimare il proprio regno in termini decisamente egizi. Il Tempio di Kom Ombo, costruito su una curva del Nilo con il fiume visibile attraverso le sue colonne, è unico per la sua perfetta simmetria bilaterale — due templi in uno, dedicati a due divinità, con ogni camera, corridoio e scala duplicati, una disposizione che ancora oggi sorprende e affascina i visitatori che cercano di capire a quale divinità appartenga ciascuna metà.",

        steps: [{
          time: "07:00",
          description: "Ritiro in hotel ad Assuan. Viaggio verso nord lungo la strada della Valle del Nilo in direzione di Kom Ombo."
        }, {
          time: "08:30",
          description: "Arrivo a Kom Ombo. Passeggiata fino all'ingresso del tempio con vista sul Nilo."
        }, {
          time: "09:00",
          description: "Visita guidata al Tempio di Kom Ombo — camminate attraverso il doppio pilone d'ingresso, esplorate i santuari gemelli dedicati a Sobek e Haroeris, osservate i rilievi scolpiti con strumenti medici e visitate il Museo dei Coccodrilli, che espone autentici coccodrilli mummificati antichi rinvenuti nel sito."
        }, {
          time: "10:30",
          description: "Partenza da Kom Ombo. Si prosegue verso nord, a Edfu."
        }, {
          time: "11:30",
          description: "Arrivo a Edfu. Salita su una tradizionale carrozza a cavalli per il breve tragitto fino all'ingresso del tempio — un'esperienza tipica di Edfu."
        }, {
          time: "12:00",
          description: "Visita guidata al Tempio di Horus a Edfu — fermatevi davanti all'imponente pilone decorato con rilievi di Tolomeo XII che abbatte i nemici; camminate nel cortile aperto dei Festival; entrate nella magnifica Sala Ipostila; procedete attraverso il vestibolo fino al santuario dove si trova ancora l'altare originale in granito di Horus."
        }, {
          time: "13:30",
          description: "Tempo libero a Edfu. Pranzo a proprio carico in un ristorante locale (la vostra guida vi consiglierà alcune opzioni)."
        }, {
          time: "14:30",
          description: "Ritorno in carrozza al veicolo. Partenza da Edfu per il viaggio di ritorno ad Assuan."
        }, {
          time: "17:00",
          description: "Arrivo di ritorno ad Assuan. Trasferimento al vostro hotel. Fine del tour."
        }]
      }],
      fr: [{
        day: 1,
        title: "Les temples d'Horus et du dieu crocodile",
        description: "Cette excursion d'une journée complète suit le Nil vers le nord depuis Assouan jusqu'à deux des plus magnifiques temples antiques de la vallée du fleuve. Les deux sont des arrêts habituels sur l'itinéraire de croisière du Nil entre Assouan et Louxor, mais les visiter par la route depuis Assouan vous donne la liberté de passer plus de temps sur chaque site sans la précipitation de l'horaire d'un bateau, libre de vous attarder dans une salle hypostyle ou d'examiner un relief particulier aussi longtemps que votre curiosité l'exige. Le temple d'Horus à Edfou est sans doute le temple égyptien antique le plus complet qui existe — si bien préservé que sa logique structurelle, depuis le pylône d'entrée à travers les cours et salles successives jusqu'au sanctuaire intérieur, peut se lire presque comme un plan architectural gravé dans la pierre. Construit entre 237 et 57 av. J.-C. à l'époque ptolémaïque, bien après la fin de l'ère pharaonique, il a été érigé dans le style ancien comme un acte délibéré de préservation culturelle par des souverains d'ascendance grecque soucieux de légitimer leur règne en des termes résolument égyptiens. Le temple de Kom Ombo, construit sur une courbe du Nil avec le fleuve visible à travers ses colonnes, est unique par sa parfaite symétrie bilatérale — deux temples en un, dédiés à deux dieux, avec chaque chambre, couloir et escalier dédoublés, une disposition qui continue d'intriguer et d'enchanter les visiteurs essayant de déterminer quelle moitié appartient à quelle divinité.",

        steps: [{
          time: "07:00",
          description: "Prise en charge à l'hôtel à Assouan. Trajet vers le nord le long de la route de la vallée du Nil en direction de Kom Ombo."
        }, {
          time: "08:30",
          description: "Arrivée à Kom Ombo. Marche jusqu'à l'entrée du temple avec vue sur le Nil."
        }, {
          time: "09:00",
          description: "Visite guidée du temple de Kom Ombo — traversez le double pylône d'entrée, explorez les sanctuaires jumeaux dédiés à Sobek et Haroëris, examinez les reliefs sculptés représentant des instruments médicaux, et visitez le musée des crocodiles, qui expose d'authentiques crocodiles momifiés antiques découverts sur le site."
        }, {
          time: "10:30",
          description: "Départ de Kom Ombo. Poursuite vers le nord, jusqu'à Edfou."
        }, {
          time: "11:30",
          description: "Arrivée à Edfou. Montée à bord d'une calèche traditionnelle tirée par des chevaux pour le court trajet jusqu'à l'entrée du temple — une expérience emblématique d'Edfou."
        }, {
          time: "12:00",
          description: "Visite guidée du temple d'Horus à Edfou — tenez-vous devant l'imposant pylône décoré de reliefs représentant Ptolémée XII terrassant ses ennemis ; traversez la cour ouverte des Fêtes ; entrez dans la magnifique salle hypostyle ; poursuivez à travers le vestibule jusqu'au sanctuaire où se trouve toujours l'autel de granit original d'Horus."
        }, {
          time: "13:30",
          description: "Temps libre à Edfou. Déjeuner à votre charge dans un restaurant local (votre guide vous proposera des options)."
        }, {
          time: "14:30",
          description: "Retour en calèche vers le véhicule. Départ d'Edfou pour le trajet de retour vers Assouan."
        }, {
          time: "17:00",
          description: "Retour à Assouan. Transfert vers votre hôtel. Fin de l'excursion."
        }]
      }],
      ru: [{
        day: 1,
        title: "Храмы Хора и бога-крокодила",
        description: "Этот тур на целый день следует вдоль Нила на север от Асуана к двум самым великолепным древним храмам долины реки. Оба места являются регулярными остановками на маршруте круиза по Нилу от Асуана до Луксора, но посещение их по дороге из Асуана даёт вам возможность провести больше времени в каждом месте без спешки по графику судна — свободно задержаться в гипостильном зале или рассмотреть конкретный рельеф столько, сколько потребует ваше любопытство. Храм Хора в Эдфу, возможно, является самым полным сохранившимся древнеегипетским храмом — настолько хорошо сохранившимся, что его структурную логику, от входного пилона через последовательные дворы и залы до внутреннего святилища, можно прочитать почти как архитектурный чертёж, высеченный в камне. Построенный между 237 и 57 годами до н.э. в эпоху Птолемеев, спустя долгое время после окончания фараоновской эры, он был возведён в древнем стиле как сознательный акт сохранения культуры правителями греческого происхождения, стремившимися узаконить своё правление в подлинно египетских терминах. Храм Ком-Омбо, построенный на изгибе Нила, откуда река видна через его колонны, уникален своей идеальной двусторонней симметрией — два храма в одном, посвящённые двум богам, где каждая камера, коридор и лестница дублированы, — планировка, которая до сих пор интригует и радует посетителей, пытающихся определить, какая половина принадлежит какому божеству.",

        steps: [{
          time: "07:00",
          description: "Трансфер из отеля в Асуане. Поездка на север по дороге долины Нила в направлении Ком-Омбо."
        }, {
          time: "08:30",
          description: "Прибытие в Ком-Омбо. Прогулка ко входу храма с видами на Нил."
        }, {
          time: "09:00",
          description: "Экскурсия с гидом по храму Ком-Омбо — пройдите через парный входной пилон, исследуйте парные святилища, посвящённые Себеку и Хароерису, рассмотрите резные рельефы с медицинскими инструментами и посетите Музей крокодилов, в котором выставлены настоящие мумифицированные древние крокодилы, найденные на этом месте."
        }, {
          time: "10:30",
          description: "Отъезд из Ком-Омбо. Продолжение пути на север, в Эдфу."
        }, {
          time: "11:30",
          description: "Прибытие в Эдфу. Посадка на традиционную конную повозку для короткой поездки ко входу храма — типичный для Эдфу опыт."
        }, {
          time: "12:00",
          description: "Экскурсия с гидом по храму Хора в Эдфу — остановка перед высоким пилоном, украшенным рельефами Птолемея XII, поражающего врагов; прогулка через открытый Праздничный двор; вход в величественный гипостильный зал; проход через вестибюль в святилище, где до сих пор стоит оригинальный гранитный алтарь Хора."
        }, {
          time: "13:30",
          description: "Свободное время в Эдфу. Обед за собственный счёт в местном ресторане (гид порекомендует варианты)."
        }, {
          time: "14:30",
          description: "Возвращение на повозке к автомобилю. Отъезд из Эдфу в обратный путь до Асуана."
        }, {
          time: "17:00",
          description: "Возвращение в Асуан. Трансфер в ваш отель. Окончание тура."
        }]
      }],
      de: [{
        day: 1,
        title: "Tempel des Horus & des Krokodilgottes",
        description: "Diese Ganztagestour folgt dem Nil von Assuan aus nach Norden zu zwei der prächtigsten antiken Tempel des Flusstals. Beide sind reguläre Stopps auf der Nilkreuzfahrtroute zwischen Assuan und Luxor, doch ein Besuch auf dem Landweg von Assuan aus gibt Ihnen die Flexibilität, mehr Zeit an jeder Stätte zu verbringen, ohne den Zeitdruck eines Schiffsfahrplans — Sie können sich so lange in einem Säulensaal aufhalten oder ein bestimmtes Relief betrachten, wie es Ihre Neugier verlangt. Der Horus-Tempel in Edfu ist wohl der vollständigste erhaltene altägyptische Tempel überhaupt — so gut erhalten, dass seine bauliche Logik, vom Eingangspylon über die aufeinanderfolgenden Höfe und Säle bis zum inneren Heiligtum, fast wie ein in Stein gehauener Architekturplan gelesen werden kann. Erbaut zwischen 237 und 57 v. Chr. in der ptolemäischen Periode, lange nach dem Ende der pharaonischen Ära, wurde er im antiken Stil errichtet — ein bewusster Akt kultureller Bewahrung durch Herrscher griechischer Abstammung, die ihre Herrschaft auf eindeutig ägyptische Weise legitimieren wollten. Der Tempel von Kom Ombo, erbaut an einer Biegung des Nils mit Blick auf den Fluss durch seine Säulen, ist einzigartig durch seine perfekte bilaterale Symmetrie — zwei Tempel in einem, zwei Göttern gewidmet, wobei jede Kammer, jeder Gang und jede Treppe verdoppelt ist — eine Anordnung, die Besucher, die herauszufinden versuchen, welche Hälfte zu welcher Gottheit gehört, bis heute verblüfft und erfreut.",

        steps: [{
          time: "07:00",
          description: "Hotelabholung in Assuan. Fahrt nach Norden entlang der Straße des Niltals in Richtung Kom Ombo."
        }, {
          time: "08:30",
          description: "Ankunft in Kom Ombo. Spaziergang zum Tempeleingang mit Blick auf den Nil."
        }, {
          time: "09:00",
          description: "Geführte Tour durch den Tempel von Kom Ombo — gehen Sie durch den doppelten Eingangspylon, erkunden Sie die beiden Heiligtümer, die Sobek und Haroeris gewidmet sind, betrachten Sie die geschnitzten Reliefs medizinischer Instrumente und besuchen Sie das Krokodilmuseum mit echten, an der Stätte gefundenen mumifizierten Krokodilen aus der Antike."
        }, {
          time: "10:30",
          description: "Abfahrt von Kom Ombo. Weiterfahrt nach Norden, nach Edfu."
        }, {
          time: "11:30",
          description: "Ankunft in Edfu. Einstieg in eine traditionelle Pferdekutsche für die kurze Fahrt zum Tempeleingang — ein typisches Edfu-Erlebnis."
        }, {
          time: "12:00",
          description: "Geführte Tour durch den Horus-Tempel in Edfu — stehen Sie vor dem hoch aufragenden Pylon, geschmückt mit Reliefs von Ptolemaios XII., der Feinde niederstreckt; gehen Sie durch den offenen Festhof; betreten Sie den prächtigen Säulensaal; gehen Sie weiter durch das Vestibül in das Heiligtum, in dem der ursprüngliche Granitschrein des Horus noch immer steht."
        }, {
          time: "13:30",
          description: "Freizeit in Edfu. Mittagessen auf eigene Kosten in einem lokalen Restaurant (Ihr Reiseleiter empfiehlt Ihnen gerne Optionen)."
        }, {
          time: "14:30",
          description: "Rückfahrt mit der Kutsche zum Fahrzeug. Abfahrt von Edfu für die Rückfahrt nach Assuan."
        }, {
          time: "17:00",
          description: "Rückkehr nach Assuan. Transfer zu Ihrem Hotel. Ende der Tour."
        }]
      }]
    },
  },
  {
    title: "Civitatis eSIM Card Egypt",
    slug: "civitatis-esim-card-egypt-aswan",
    description:
      "Stay connected throughout your Egyptian adventure with this convenient eSIM card designed for travelers, taking one more uncertainty off your plate before you even land. Whether you're navigating to the temples of Abu Simbel, sharing photos from the Nile, or looking up information about the monuments you're visiting, this eSIM gives you reliable mobile data access across Egypt without the hassle of finding a local SIM card, queuing at an airport kiosk, or trying to explain your needs to a vendor in a language you may not speak. Available in multiple durations to match the length of your trip, it activates digitally in minutes and keeps you connected from the moment you touch down through your final day exploring Aswan, Luxor, Cairo, or wherever else your Egyptian journey takes you.",
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
      es: [
        "La eSIM se activa digitalmente: no es necesario cambiar la tarjeta SIM física.",
        "Asegúrese de que su teléfono esté liberado y sea compatible con eSIM antes de comprar.",
        "Disponible en planes de 7, 15 y 30 días.",
        "Funciona en redes 4G/LTE en todo Egipto, incluyendo todos los sitios turísticos principales.",
        "Las llamadas de voz y los SMS no están incluidos."
      ],
      pt: [
        "O eSIM é ativado digitalmente — não é necessária a troca de um cartão SIM físico.",
        "Certifique-se de que seu telefone esteja desbloqueado e seja compatível com eSIM antes de comprar.",
        "Disponível em planos de 7, 15 e 30 dias.",
        "Funciona em redes 4G/LTE em todo o Egito, incluindo todos os principais pontos turísticos.",
        "Chamadas de voz e SMS não estão incluídos."
      ],
      it: [
        "La eSIM viene attivata digitalmente — non è richiesta nessuna sostituzione fisica della SIM.",
        "Assicuratevi che il vostro telefono sia sbloccato e compatibile con eSIM prima dell'acquisto.",
        "Disponibile in piani da 7, 15 e 30 giorni.",
        "Funziona su reti 4G/LTE in tutto l'Egitto, inclusi tutti i principali siti turistici.",
        "Chiamate vocali e SMS non sono inclusi."
      ],
      fr: [
        "L'eSIM est activée numériquement — aucun remplacement physique de carte SIM n'est nécessaire.",
        "Assurez-vous que votre téléphone est débloqué et compatible eSIM avant l'achat.",
        "Disponible avec des forfaits de 7, 15 et 30 jours.",
        "Fonctionne sur les réseaux 4G/LTE partout en Égypte, y compris sur tous les principaux sites touristiques.",
        "Les appels vocaux et les SMS ne sont pas inclus."
      ],
      ru: [
        "eSIM активируется в цифровом виде — замена физической SIM-карты не требуется.",
        "Перед покупкой убедитесь, что ваш телефон разблокирован и совместим с eSIM.",
        "Доступны тарифы на 7, 15 и 30 дней.",
        "Работает в сетях 4G/LTE по всему Египту, включая все основные туристические объекты.",
        "Голосовые звонки и SMS не включены."
      ],
      de: [
        "Die eSIM wird digital aktiviert — ein physischer SIM-Kartentausch ist nicht erforderlich.",
        "Stellen Sie vor dem Kauf sicher, dass Ihr Telefon entsperrt und eSIM-fähig ist.",
        "Verfügbar in Tarifen für 7, 15 und 30 Tage.",
        "Funktioniert in 4G/LTE-Netzen in ganz Ägypten, einschließlich aller wichtigen touristischen Stätten.",
        "Sprachanrufe und SMS sind nicht enthalten."
      ]
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
    slug: "5-day-cruise-lake-nasser-aswan",
    description:
      "For those who want to fully immerse themselves in the ancient wonders of Nubia, this 5-day all-inclusive Lake Nasser cruise is the ultimate experience, a slower and far more thorough journey than the standard 4-day version, designed for travelers who would rather linger over every temple than rush between highlights. Sail across one of the world's largest reservoirs and visit a series of extraordinary temples that were rescued from the rising waters decades ago, including the awe-inspiring temples of Abu Simbel, Wadi el-Seboua, Dakka, Maharraqa, and Amada — five distinct chapters of Nubian and pharaonic history laid out along a single waterway. Every day brings a new discovery as your expert guide reveals the stories behind these remarkable monuments, from forgotten Nubian kings to Roman governors to the pharaohs who first commissioned these temples in granite and sandstone meant to outlast empires.",
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
      es: "Muelle de la Presa Alta de Asuán. El traslado desde su hotel en Asuán está incluido.",
      pt: "Cais da Grande Barragem de Assuão. O traslado do seu hotel em Assuão está incluído.",
      it: "Molo della Grande Diga di Assuan. Il trasferimento dal vostro hotel ad Assuan è incluso.",
      fr: "Quai du Haut Barrage d'Assouan. Le transfert depuis votre hôtel à Assouan est inclus.",
      ru: "Причал у Асуанской высотной плотины. Трансфер из вашего отеля в Асуане включён.",
      de: "Anlegestelle am Assuan-Staudamm. Der Transfer von Ihrem Hotel in Assuan ist inbegriffen."
    },
    accessibility: {
      en: "Cruise ships have stairs between decks. Shore excursions involve walking on sandy and rocky terrain. Not suitable for guests with severe mobility issues.",
      es: "Los barcos de crucero tienen escaleras entre cubiertas. Las excursiones en tierra implican caminar sobre terreno arenoso y rocoso. No es adecuado para huéspedes con problemas graves de movilidad.",
      pt: "Os navios de cruzeiro têm escadas entre os decks. As excursões em terra envolvem caminhar em terreno arenoso e rochoso. Não é adequado para hóspedes com problemas graves de mobilidade.",
      it: "Le navi da crociera hanno scale tra i ponti. Le escursioni a terra prevedono di camminare su terreno sabbioso e roccioso. Non adatto agli ospiti con gravi problemi di mobilità.",
      fr: "Les bateaux de croisière comportent des escaliers entre les ponts. Les excursions à terre impliquent de marcher sur un terrain sablonneux et rocailleux. Ne convient pas aux personnes ayant de graves problèmes de mobilité.",
      ru: "На круизных судах есть лестницы между палубами. Береговые экскурсии предполагают ходьбу по песчаной и каменистой местности. Не подходит для гостей с серьёзными проблемами с подвижностью.",
      de: "Die Kreuzfahrtschiffe haben Treppen zwischen den Decks. Landausflüge beinhalten das Gehen auf sandigem und felsigem Gelände. Nicht geeignet für Gäste mit starken Mobilitätseinschränkungen."
    },
    whatToBring: {
      en: ["Light summer clothing", "Warmer layer for evenings", "Walking shoes", "High SPF sunscreen", "Binoculars (optional)", "Camera", "Personal medications"],
      es: [
        "Ropa ligera de verano",
        "Capa más abrigada para las noches",
        "Zapatos para caminar",
        "Protector solar de alto FPS",
        "Binoculares (opcional)",
        "Cámara",
        "Medicamentos personales"
      ],
      pt: [
        "Roupas leves de verão",
        "Camada mais quente para as noites",
        "Sapatos para caminhar",
        "Protetor solar de alto FPS",
        "Binóculos (opcional)",
        "Câmera fotográfica",
        "Medicamentos pessoais"
      ],
      it: [
        "Abiti estivi leggeri",
        "Strato più caldo per le serate",
        "Scarpe da camminata",
        "Crema solare ad alta protezione",
        "Binocolo (opzionale)",
        "Macchina fotografica",
        "Farmaci personali"
      ],
      fr: [
        "Vêtements légers d'été",
        "Couche plus chaude pour les soirées",
        "Chaussures de marche",
        "Crème solaire à indice élevé",
        "Jumelles (facultatif)",
        "Appareil photo",
        "Médicaments personnels"
      ],
      ru: [
        "Лёгкая летняя одежда",
        "Более тёплая вещь для вечеров",
        "Обувь для ходьбы",
        "Солнцезащитный крем с высоким SPF",
        "Бинокль (по желанию)",
        "Фотоаппарат",
        "Личные медикаменты"
      ],
      de: [
        "Leichte Sommerkleidung",
        "Wärmere Schicht für die Abende",
        "Wanderschuhe",
        "Sonnenschutzmittel mit hohem Lichtschutzfaktor",
        "Fernglas (optional)",
        "Kamera",
        "Persönliche Medikamente"
      ]
    },
    importantInfo: {
      en: [
        "All meals are included throughout the 5-day cruise.",
        "Entrance fees to all sites visited are included.",
        "This is one of the most exclusive cruise experiences in Egypt — passenger numbers are very limited.",
        "Some temple sites on this itinerary are accessible only by Lake Nasser cruise — they cannot be visited any other way.",
      ],
      es: [
        "Todas las comidas están incluidas durante todo el crucero de 5 días.",
        "Las entradas a todos los sitios visitados están incluidas.",
        "Esta es una de las experiencias de crucero más exclusivas de Egipto: el número de pasajeros es muy limitado.",
        "Algunos sitios de templos en este itinerario solo son accesibles mediante el crucero del lago Nasser; no se pueden visitar de ninguna otra manera."
      ],
      pt: [
        "Todas as refeições estão incluídas durante todo o cruzeiro de 5 dias.",
        "As taxas de entrada para todos os sítios visitados estão incluídas.",
        "Esta é uma das experiências de cruzeiro mais exclusivas do Egito — o número de passageiros é muito limitado.",
        "Alguns sítios de templos neste itinerário são acessíveis apenas por meio do cruzeiro do Lago Nasser — eles não podem ser visitados de nenhuma outra forma."
      ],
      it: [
        "Tutti i pasti sono inclusi durante l'intera crociera di 5 giorni.",
        "I biglietti d'ingresso a tutti i siti visitati sono inclusi.",
        "Questa è una delle esperienze di crociera più esclusive d'Egitto — il numero di passeggeri è molto limitato.",
        "Alcuni siti templari di questo itinerario sono accessibili solo tramite la crociera sul Lago Nasser — non possono essere visitati in nessun altro modo."
      ],
      fr: [
        "Tous les repas sont inclus pendant toute la croisière de 5 jours.",
        "Les frais d'entrée à tous les sites visités sont inclus.",
        "Il s'agit d'une des expériences de croisière les plus exclusives d'Égypte — le nombre de passagers est très limité.",
        "Certains sites de temples de cet itinéraire ne sont accessibles que par la croisière sur le lac Nasser — ils ne peuvent être visités d'aucune autre manière."
      ],
      ru: [
        "Все приёмы пищи включены на протяжении всего 5-дневного круиза.",
        "Входные билеты на все посещаемые объекты включены.",
        "Это один из самых эксклюзивных круизных опытов в Египте — количество пассажиров очень ограничено.",
        "Некоторые храмовые объекты в этом маршруте доступны только в рамках круиза по озеру Насер — посетить их иначе невозможно."
      ],
      de: [
        "Alle Mahlzeiten sind während der gesamten 5-tägigen Kreuzfahrt inbegriffen.",
        "Die Eintrittsgebühren für alle besuchten Stätten sind inbegriffen.",
        "Dies ist eines der exklusivsten Kreuzfahrterlebnisse in Ägypten — die Passagierzahl ist sehr begrenzt.",
        "Einige Tempelstätten auf dieser Route sind nur per Nassersee-Kreuzfahrt zu erreichen — sie können auf keine andere Weise besucht werden."
      ]
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
            "Your five-day Lake Nasser journey begins at the Aswan High Dam dock, where you'll board your intimate cruise ship and settle into your cabin, the gentle rocking of the boat against the dock the first sign that this trip will move at an entirely different pace than the bustling Nile cruises further north. After a welcome lunch, the ship makes its first stop at the Kalabasha complex — three relocated temples gathered on a promontory above the lake's northern shore, survivors of an engineering project that reshaped the entire region. The Temple of Kalabasha, one of the grandest Greco-Roman temples in Nubia, is your main focus, alongside the painted battle reliefs of Beit El-Wali and the elegant columns of the Kertassi kiosk, three very different monuments united only by the fact that all three would now lie underwater had they not been moved.",
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
            "Today the ship visits three temples in a single remarkable morning — Wadi el-Seboua with its avenue of sphinxes and its extraordinary Christian-over-Egyptian painted overlay, a visual record of religious change spanning centuries; the multi-era Temple of Dakka with its climbable pylon and sweeping lake views; and the small but exceptional Temple of Maharraqa, the southernmost ancient monument relocated for the UNESCO rescue operation, built in the Roman era and noteworthy for its unusual spiral staircase, a rare architectural feature in ancient Egyptian construction that still puzzles visiting architects.",
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
            "The ship reaches the temples of Amada and Derr — the oldest monuments on the lake, predating even the more famous sites further south. The Temple of Amada, built by Thutmose III and Amenhotep II, preserves the most vividly colored painted reliefs in Nubia, including two historically crucial texts that record actual events from the pharaohs' reigns, inscriptions historians still rely on to reconstruct this period of Egyptian military history. The Temple of Derr, a rock-cut structure from the time of Ramses II, adds another layer of 19th-dynasty grandeur before the afternoon passage toward Abu Simbel, the lake widening around the ship as the desert shoreline grows increasingly remote and untouched.",
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
            "An entire day devoted to Abu Simbel — the undisputed highlight of any Lake Nasser cruise, and the reason most passengers chose this itinerary in the first place. The morning visit gives you the temples before the day-trip convoys from Aswan arrive, the site still wrapped in the cool stillness of early desert morning. The afternoon is free to return independently, sit by the lake watching the light shift across the water, or simply remain on the ship enjoying the rare luxury of unhurried time. As night falls, the Abu Simbel Sound and Light Show illuminates the temples in a dramatic performance narrating the story of Ramses II, the colored lights sweeping across a facade you've now had an entire day to come to know intimately.",
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
            "The final morning offers one last sunrise at Abu Simbel — one of the most moving sights in Egypt — before the ship makes the long return sail north to Aswan, the temples shrinking slowly behind the wake until they disappear into the desert haze entirely. The journey across the lake in reverse offers its own pleasures: the changing light on the water, the desert silence, and the growing anticipation of what comes next in your Egyptian adventure, the five days behind you already settling into the particular kind of memory reserved for journeys that felt, even while happening, slightly larger than ordinary life.",
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
      es: [{
        day: 1,
        title: "Asuán: embarque, Kalabasha y Beit El-Wali",
        description: "Su viaje de cinco días por el lago Nasser comienza en el muelle de la Presa Alta de Asuán, donde abordará su íntimo barco de crucero y se instalará en su camarote, el suave balanceo del barco contra el muelle siendo la primera señal de que este viaje se moverá a un ritmo completamente diferente al de los bulliciosos cruceros por el Nilo más al norte. Después de un almuerzo de bienvenida, el barco hace su primera parada en el complejo de Kalabasha: tres templos reubicados reunidos en un promontorio sobre la orilla norte del lago, supervivientes de un proyecto de ingeniería que transformó toda la región. El Templo de Kalabasha, uno de los templos grecorromanos más grandiosos de Nubia, es su atención principal, junto con los relieves de batalla pintados de Beit El-Wali y las elegantes columnas del quiosco de Kertassi, tres monumentos muy diferentes unidos solo por el hecho de que los tres ahora estarían bajo el agua si no hubieran sido trasladados.",

        steps: [{
          time: "09:00",
          description: "Traslado desde el hotel al muelle de embarque de la Presa Alta de Asuán."
        }, {
          time: "10:00",
          description: "Abordar el barco de crucero del lago Nasser y check-in en su camarote."
        }, {
          time: "12:00",
          description: "Almuerzo de bienvenida a bordo."
        }, {
          time: "14:00",
          description: "Breve traslado al complejo de templos de Kalabasha."
        }, {
          time: "14:30",
          description: "Visita guiada al Templo de Kalabasha, Beit El-Wali y el quiosco de Kertassi."
        }, {
          time: "17:00",
          description: "Regreso al barco. Navegación hacia el sur."
        }, {
          time: "19:30",
          description: "Cena a bordo."
        }]
      }, {
        day: 2,
        title: "Wadi el-Seboua, Dakka y Maharraqa",
        description: "Hoy el barco visita tres templos en una sola mañana extraordinaria: Wadi el-Seboua, con su avenida de esfinges y su extraordinaria superposición pintada cristiana sobre la egipcia, un registro visual de cambio religioso que abarca siglos; el Templo de Dakka, de varias épocas, con su pilono escalable y amplias vistas del lago; y el pequeño pero excepcional Templo de Maharraqa, el monumento antiguo más meridional reubicado para la operación de rescate de la UNESCO, construido en la era romana y notable por su inusual escalera de caracol, una característica arquitectónica rara en la construcción del antiguo Egipto que todavía desconcierta a los arquitectos visitantes.",

        steps: [{
          time: "07:00",
          description: "Desayuno mientras el barco llega a Wadi el-Seboua."
        }, {
          time: "08:00",
          description: "Visita guiada al Templo de Wadi el-Seboua: avenida de esfinges, capas faraónicas y cristianas."
        }, {
          time: "09:30",
          description: "Caminata hasta el Templo de Dakka. Visita guiada y ascenso opcional al pilono para obtener vistas."
        }, {
          time: "10:30",
          description: "Visite el Templo de Maharraqa: período romano, escalera de caracol única."
        }, {
          time: "11:30",
          description: "Regreso al barco. Navegación hacia el sur, en dirección a Amada."
        }, {
          time: "13:00",
          description: "Almuerzo a bordo."
        }, {
          time: "15:00",
          description: "Tarde libre en cubierta mientras pasa el inmenso paisaje desértico del lago."
        }, {
          time: "19:30",
          description: "Cena a bordo."
        }]
      }, {
        day: 3,
        title: "Templos de Amada y Derr",
        description: "El barco llega a los templos de Amada y Derr, los monumentos más antiguos del lago, anteriores incluso a los sitios más famosos más al sur. El Templo de Amada, construido por Tutmosis III y Amenhotep II, conserva los relieves pintados de colores más vívidos de Nubia, incluyendo dos textos históricamente cruciales que registran eventos reales de los reinados de los faraones, inscripciones en las que los historiadores todavía se basan para reconstruir este período de la historia militar egipcia. El Templo de Derr, una estructura excavada en la roca de la época de Ramsés II, añade otra capa de grandeza de la dinastía XIX antes del paso de la tarde hacia Abu Simbel, mientras el lago se ensancha alrededor del barco y la costa desértica se vuelve cada vez más remota e intacta.",

        steps: [{
          time: "07:00",
          description: "Desayuno temprano mientras el barco llega a Amada."
        }, {
          time: "08:00",
          description: "Visita guiada al Templo de Amada: el templo más antiguo del lago, relieves pintados excepcionales, inscripciones históricas."
        }, {
          time: "09:30",
          description: "Traslado al Templo de Derr. Visita guiada al templo excavado en la roca de Ramsés II, dedicado a Ra-Horajty."
        }, {
          time: "11:00",
          description: "Regreso al barco. Navegación hacia Abu Simbel."
        }, {
          time: "13:00",
          description: "Almuerzo a bordo."
        }, {
          time: "16:00",
          description: "Llegada a Abu Simbel."
        }, {
          time: "16:30",
          description: "Primera visita guiada al Gran Templo de Ramsés II y al Templo de Nefertari: la luz de la tarde es ideal."
        }, {
          time: "18:30",
          description: "Regreso al barco. Cena de gala a bordo."
        }]
      }, {
        day: 4,
        title: "Abu Simbel: día completo y espectáculo de luz y sonido",
        description: "Un día entero dedicado a Abu Simbel: el punto culminante indiscutible de cualquier crucero por el lago Nasser, y la razón por la que la mayoría de los pasajeros eligieron este itinerario en primer lugar. La visita matutina le permite ver los templos antes de que lleguen los convoyes de excursionistas de un día desde Asuán, con el sitio todavía envuelto en la fresca quietud de la temprana mañana del desierto. La tarde queda libre para regresar de forma independiente, sentarse junto al lago observando cómo cambia la luz sobre el agua, o simplemente permanecer en el barco disfrutando del raro lujo de un tiempo sin prisas. Al caer la noche, el espectáculo de luz y sonido de Abu Simbel ilumina los templos en una dramática representación que narra la historia de Ramsés II, con las luces de colores recorriendo una fachada que ahora ha tenido todo un día para llegar a conocer íntimamente.",

        steps: [{
          time: "06:30",
          description: "Visita matutina temprana a Abu Simbel: los templos están en silencio y la luz es extraordinaria."
        }, {
          time: "08:30",
          description: "Regreso al barco para el desayuno."
        }, {
          time: "10:00",
          description: "Segunda visita opcional a los templos o tiempo libre en el barco."
        }, {
          time: "13:00",
          description: "Almuerzo a bordo."
        }, {
          time: "15:00",
          description: "Tarde libre: regrese a los templos, explore el pueblo o relájese a bordo."
        }, {
          time: "20:00",
          description: "Espectáculo de luz y sonido de Abu Simbel: dramática iluminación de la fachada del templo y narración de la historia de Ramsés II."
        }, {
          time: "21:15",
          description: "Regreso al barco. Última noche a bordo."
        }]
      }, {
        day: 5,
        title: "Amanecer en Abu Simbel y regreso a Asuán",
        description: "La última mañana ofrece un último amanecer en Abu Simbel, una de las vistas más conmovedoras de Egipto, antes de que el barco haga la larga navegación de regreso hacia el norte a Asuán, con los templos achicándose lentamente detrás de la estela hasta desaparecer por completo en la bruma del desierto. El viaje a través del lago en sentido inverso ofrece sus propios placeres: la luz cambiante sobre el agua, el silencio del desierto y la creciente expectativa de lo que viene a continuación en su aventura egipcia, con los cinco días anteriores asentándose ya en ese tipo particular de recuerdo reservado para los viajes que, incluso mientras ocurrían, se sintieron ligeramente más grandes que la vida ordinaria.",

        steps: [{
          time: "06:00",
          description: "Visita opcional al amanecer en Abu Simbel: la última y posiblemente la luz más hermosa del viaje."
        }, {
          time: "08:00",
          description: "Desayuno a bordo."
        }, {
          time: "09:00",
          description: "Salida de Abu Simbel. El barco navega hacia el norte a través del lago Nasser."
        }, {
          time: "13:00",
          description: "Almuerzo a bordo durante la navegación de regreso."
        }, {
          time: "17:00",
          description: "Llegada al muelle de Asuán. Desembarque."
        }, {
          time: "17:30",
          description: "Traslado a su hotel en Asuán o a la estación de tren. Fin del tour."
        }]
      }],
      pt: [{
        day: 1,
        title: "Assuão — Embarque, Kalabasha e Beit El-Wali",
        description: "Sua jornada de cinco dias pelo Lago Nasser começa no cais da Grande Barragem de Assuão, onde você embarcará em seu íntimo navio de cruzeiro e se instalará em sua cabine — o suave balançar do barco contra o cais sendo o primeiro sinal de que esta viagem se moverá em um ritmo totalmente diferente dos movimentados cruzeiros do Nilo mais ao norte. Após um almoço de boas-vindas, o navio faz sua primeira parada no complexo de Kalabasha — três templos realocados reunidos em um promontório acima da margem norte do lago, sobreviventes de um projeto de engenharia que remodelou toda a região. O Templo de Kalabasha, um dos mais grandiosos templos greco-romanos da Núbia, é seu foco principal, junto com os relevos pintados de batalha de Beit El-Wali e as elegantes colunas do quiosque de Kertassi — três monumentos muito diferentes, unidos apenas pelo fato de que todos os três estariam agora submersos se não tivessem sido transferidos.",

        steps: [{
          time: "09:00",
          description: "Traslado do hotel até o cais de embarque da Grande Barragem de Assuão."
        }, {
          time: "10:00",
          description: "Embarque no navio de cruzeiro do Lago Nasser e check-in na cabine."
        }, {
          time: "12:00",
          description: "Almoço de boas-vindas a bordo."
        }, {
          time: "14:00",
          description: "Breve traslado até o complexo de templos de Kalabasha."
        }, {
          time: "14:30",
          description: "Tour guiado pelo Templo de Kalabasha, Beit El-Wali e o quiosque de Kertassi."
        }, {
          time: "17:00",
          description: "Retorno ao navio. Navegação para o sul."
        }, {
          time: "19:30",
          description: "Jantar a bordo."
        }]
      }, {
        day: 2,
        title: "Wadi el-Seboua, Dakka e Maharraqa",
        description: "Hoje o navio visita três templos em uma única manhã notável — Wadi el-Seboua, com sua avenida de esfinges e sua extraordinária sobreposição pintada cristã sobre a egípcia, um registro visual de mudança religiosa que abrange séculos; o Templo de Dakka, de múltiplas eras, com seu pilone escalável e amplas vistas do lago; e o pequeno, mas excepcional, Templo de Maharraqa, o monumento antigo mais ao sul realocado para a operação de resgate da UNESCO, construído na era romana e notável por sua incomum escada em espiral, uma característica arquitetônica rara na construção do Egito Antigo que ainda intriga os arquitetos visitantes.",

        steps: [{
          time: "07:00",
          description: "Café da manhã enquanto o navio chega a Wadi el-Seboua."
        }, {
          time: "08:00",
          description: "Tour guiado pelo Templo de Wadi el-Seboua — avenida de esfinges, camadas faraônica e cristã."
        }, {
          time: "09:30",
          description: "Caminhada até o Templo de Dakka. Tour guiado e subida opcional ao pilone para vistas."
        }, {
          time: "10:30",
          description: "Visite o Templo de Maharraqa — período romano, escada em espiral única."
        }, {
          time: "11:30",
          description: "Retorno ao navio. Navegação para o sul em direção a Amada."
        }, {
          time: "13:00",
          description: "Almoço a bordo."
        }, {
          time: "15:00",
          description: "Tarde livre no deck enquanto a imensa paisagem desértica do lago passa."
        }, {
          time: "19:30",
          description: "Jantar a bordo."
        }]
      }, {
        day: 3,
        title: "Templos de Amada e Derr",
        description: "O navio chega aos templos de Amada e Derr — os monumentos mais antigos do lago, anteriores até mesmo aos sítios mais famosos mais ao sul. O Templo de Amada, construído por Tutmés III e Amenhotep II, preserva os relevos pintados com cores mais vivas da Núbia, incluindo dois textos historicamente cruciais que registram eventos reais dos reinados dos faraós, inscrições nas quais os historiadores ainda se baseiam para reconstruir esse período da história militar egípcia. O Templo de Derr, uma estrutura escavada na rocha da época de Ramsés II, adiciona outra camada de grandiosidade da 19ª dinastia antes da passagem da tarde em direção a Abu Simbel, com o lago se ampliando em torno do navio enquanto o litoral desértico se torna cada vez mais remoto e intocado.",

        steps: [{
          time: "07:00",
          description: "Café da manhã antecipado enquanto o navio chega a Amada."
        }, {
          time: "08:00",
          description: "Tour guiado pelo Templo de Amada — templo mais antigo do lago, relevos pintados excepcionais, inscrições históricas."
        }, {
          time: "09:30",
          description: "Traslado até o Templo de Derr. Tour guiado pelo templo escavado na rocha de Ramsés II, dedicado a Ra-Horakhty."
        }, {
          time: "11:00",
          description: "Retorno ao navio. Navegação em direção a Abu Simbel."
        }, {
          time: "13:00",
          description: "Almoço a bordo."
        }, {
          time: "16:00",
          description: "Chegada a Abu Simbel."
        }, {
          time: "16:30",
          description: "Primeira visita guiada ao Grande Templo de Ramsés II e ao Templo de Nefertari — a luz da tarde é ideal."
        }, {
          time: "18:30",
          description: "Retorno ao navio. Jantar de gala a bordo."
        }]
      }, {
        day: 4,
        title: "Abu Simbel — Dia completo e Espetáculo de Som e Luz",
        description: "Um dia inteiro dedicado a Abu Simbel — o ponto culminante indiscutível de qualquer cruzeiro pelo Lago Nasser, e o motivo pelo qual a maioria dos passageiros escolheu este itinerário, antes de mais nada. A visita matinal lhe oferece os templos antes da chegada dos comboios de excursionistas de um dia vindos de Assuão, com o local ainda envolto na fresca quietude da manhã desértica. A tarde fica livre para retornar de forma independente, sentar-se junto ao lago observando a luz mudar sobre a água, ou simplesmente permanecer no navio aproveitando o raro luxo de um tempo sem pressa. Ao cair da noite, o Espetáculo de Som e Luz de Abu Simbel ilumina os templos em uma apresentação dramática que narra a história de Ramsés II, com as luzes coloridas percorrendo uma fachada que você agora teve um dia inteiro para conhecer intimamente.",

        steps: [{
          time: "06:30",
          description: "Visita matinal antecipada a Abu Simbel — os templos estão silenciosos e a luz é extraordinária."
        }, {
          time: "08:30",
          description: "Retorno ao navio para o café da manhã."
        }, {
          time: "10:00",
          description: "Segunda visita opcional aos templos ou tempo livre no navio."
        }, {
          time: "13:00",
          description: "Almoço a bordo."
        }, {
          time: "15:00",
          description: "Tarde livre — retorne aos templos, explore a vila ou relaxe a bordo."
        }, {
          time: "20:00",
          description: "Espetáculo de Som e Luz de Abu Simbel — iluminação dramática da fachada do templo e narração da história de Ramsés II."
        }, {
          time: "21:15",
          description: "Retorno ao navio. Última noite a bordo."
        }]
      }, {
        day: 5,
        title: "Nascer do sol em Abu Simbel e retorno a Assuão",
        description: "A última manhã oferece um último nascer do sol em Abu Simbel — uma das vistas mais emocionantes do Egito — antes que o navio faça a longa navegação de retorno para o norte, até Assuão, com os templos diminuindo lentamente atrás da esteira até desaparecerem completamente na névoa do deserto. A viagem através do lago em sentido inverso oferece seus próprios prazeres: a luz mutável sobre a água, o silêncio do deserto e a crescente expectativa do que vem a seguir em sua aventura egípcia, com os cinco dias anteriores já se transformando naquele tipo particular de memória reservado para viagens que, mesmo enquanto aconteciam, pareciam ligeiramente maiores que a vida comum.",

        steps: [{
          time: "06:00",
          description: "Visita opcional ao nascer do sol em Abu Simbel — a última e possivelmente a mais bela luz da viagem."
        }, {
          time: "08:00",
          description: "Café da manhã a bordo."
        }, {
          time: "09:00",
          description: "Partida de Abu Simbel. O navio navega para o norte através do Lago Nasser."
        }, {
          time: "13:00",
          description: "Almoço a bordo durante a navegação de retorno."
        }, {
          time: "17:00",
          description: "Chegada ao cais de Assuão. Desembarque."
        }, {
          time: "17:30",
          description: "Traslado até seu hotel em Assuão ou até a estação de trem. Fim do tour."
        }]
      }],
      it: [{
        day: 1,
        title: "Assuan — Imbarco, Kalabasha e Beit El-Wali",
        description: "Il vostro viaggio di cinque giorni sul Lago Nasser inizia al molo della Grande Diga di Assuan, dove salirete a bordo della vostra intima nave da crociera e vi sistemerete in cabina — il dolce dondolio della nave contro il molo è il primo segno che questo viaggio si muoverà a un ritmo completamente diverso dalle vivaci crociere sul Nilo più a nord. Dopo un pranzo di benvenuto, la nave effettua la sua prima sosta al complesso di Kalabasha — tre templi trasferiti raccolti su un promontorio sopra la riva settentrionale del lago, sopravvissuti a un progetto di ingegneria che ha ridisegnato l'intera regione. Il Tempio di Kalabasha, uno dei più grandiosi templi greco-romani della Nubia, è il vostro punto focale principale, insieme ai rilievi di battaglia dipinti di Beit El-Wali e alle eleganti colonne del chiosco di Kertassi — tre monumenti molto diversi, uniti solo dal fatto che tutti e tre giacerebbero oggi sott'acqua se non fossero stati spostati.",

        steps: [{
          time: "09:00",
          description: "Trasferimento dall'hotel al molo di imbarco della Grande Diga di Assuan."
        }, {
          time: "10:00",
          description: "Imbarco sulla nave da crociera del Lago Nasser e check-in in cabina."
        }, {
          time: "12:00",
          description: "Pranzo di benvenuto a bordo."
        }, {
          time: "14:00",
          description: "Breve trasferimento al complesso templare di Kalabasha."
        }, {
          time: "14:30",
          description: "Visita guidata al Tempio di Kalabasha, a Beit El-Wali e al chiosco di Kertassi."
        }, {
          time: "17:00",
          description: "Ritorno alla nave. Navigazione verso sud."
        }, {
          time: "19:30",
          description: "Cena a bordo."
        }]
      }, {
        day: 2,
        title: "Wadi el-Seboua, Dakka e Maharraqa",
        description: "Oggi la nave visita tre templi in un'unica straordinaria mattinata — Wadi el-Seboua, con il suo viale di sfingi e la sua straordinaria sovrapposizione pittorica cristiana su quella egizia, una testimonianza visiva di un cambiamento religioso che abbraccia secoli; il Tempio di Dakka, di epoche multiple, con il suo pilone scalabile e ampie vedute sul lago; e il piccolo ma eccezionale Tempio di Maharraqa, il monumento antico più meridionale trasferito per l'operazione di salvataggio dell'UNESCO, costruito in epoca romana e degno di nota per la sua inusuale scala a chiocciola, una caratteristica architettonica rara nella costruzione dell'antico Egitto che ancora oggi sorprende gli architetti in visita.",

        steps: [{
          time: "07:00",
          description: "Colazione mentre la nave arriva a Wadi el-Seboua."
        }, {
          time: "08:00",
          description: "Visita guidata al Tempio di Wadi el-Seboua — viale delle sfingi, strati faraonico e cristiano."
        }, {
          time: "09:30",
          description: "Passeggiata verso il Tempio di Dakka. Visita guidata e scalata opzionale al pilone per le vedute."
        }, {
          time: "10:30",
          description: "Visitate il Tempio di Maharraqa — epoca romana, scala a chiocciola unica."
        }, {
          time: "11:30",
          description: "Ritorno alla nave. Navigazione verso sud in direzione di Amada."
        }, {
          time: "13:00",
          description: "Pranzo a bordo."
        }, {
          time: "15:00",
          description: "Pomeriggio libero sul ponte mentre scorre l'immenso paesaggio desertico del lago."
        }, {
          time: "19:30",
          description: "Cena a bordo."
        }]
      }, {
        day: 3,
        title: "Templi di Amada e Derr",
        description: "La nave raggiunge i templi di Amada e Derr — i monumenti più antichi sul lago, precedenti persino ai siti più famosi più a sud. Il Tempio di Amada, costruito da Thutmose III e Amenhotep II, conserva i rilievi dipinti con i colori più vivaci della Nubia, inclusi due testi storicamente fondamentali che registrano eventi reali dei regni dei faraoni, iscrizioni su cui gli storici ancora oggi si basano per ricostruire questo periodo della storia militare egizia. Il Tempio di Derr, una struttura rupestre dell'epoca di Ramses II, aggiunge un ulteriore strato di grandiosità della XIX dinastia prima del passaggio pomeridiano verso Abu Simbel, mentre il lago si allarga attorno alla nave e la costa desertica diventa sempre più remota e incontaminata.",

        steps: [{
          time: "07:00",
          description: "Colazione anticipata mentre la nave arriva ad Amada."
        }, {
          time: "08:00",
          description: "Visita guidata al Tempio di Amada — il tempio più antico del lago, eccezionali rilievi dipinti, iscrizioni storiche."
        }, {
          time: "09:30",
          description: "Trasferimento al Tempio di Derr. Visita guidata al tempio rupestre di Ramses II dedicato a Ra-Horakhty."
        }, {
          time: "11:00",
          description: "Ritorno alla nave. Navigazione verso Abu Simbel."
        }, {
          time: "13:00",
          description: "Pranzo a bordo."
        }, {
          time: "16:00",
          description: "Arrivo ad Abu Simbel."
        }, {
          time: "16:30",
          description: "Prima visita guidata al Grande Tempio di Ramses II e al Tempio di Nefertari — la luce del pomeriggio è ideale."
        }, {
          time: "18:30",
          description: "Ritorno alla nave. Cena di gala a bordo."
        }]
      }, {
        day: 4,
        title: "Abu Simbel — Giornata intera e Spettacolo di Luci e Suoni",
        description: "Un'intera giornata dedicata ad Abu Simbel — il punto culminante indiscutibile di qualsiasi crociera sul Lago Nasser, e il motivo per cui la maggior parte dei passeggeri ha scelto questo itinerario fin dall'inizio. La visita del mattino vi permette di vedere i templi prima che arrivino i convogli delle gite di un giorno da Assuan, con il sito ancora avvolto nella fresca quiete del primo mattino desertico. Il pomeriggio è libero per tornare in autonomia, sedersi vicino al lago osservando la luce che cambia sull'acqua, o semplicemente restare sulla nave godendo del raro lusso di un tempo senza fretta. Al calare della notte, lo Spettacolo di Luci e Suoni di Abu Simbel illumina i templi in una performance drammatica che narra la storia di Ramses II, con le luci colorate che attraversano una facciata che ora avete avuto un'intera giornata per conoscere intimamente.",

        steps: [{
          time: "06:30",
          description: "Visita di prima mattina ad Abu Simbel — i templi sono silenziosi e la luce è straordinaria."
        }, {
          time: "08:30",
          description: "Ritorno alla nave per la colazione."
        }, {
          time: "10:00",
          description: "Seconda visita opzionale ai templi o tempo libero sulla nave."
        }, {
          time: "13:00",
          description: "Pranzo a bordo."
        }, {
          time: "15:00",
          description: "Pomeriggio libero — ritorno ai templi, esplorazione del villaggio o relax a bordo."
        }, {
          time: "20:00",
          description: "Spettacolo di Luci e Suoni di Abu Simbel — drammatica illuminazione della facciata del tempio e narrazione della storia di Ramses II."
        }, {
          time: "21:15",
          description: "Ritorno alla nave. Ultima serata a bordo."
        }]
      }, {
        day: 5,
        title: "Alba ad Abu Simbel e ritorno ad Assuan",
        description: "L'ultima mattinata offre un'ultima alba ad Abu Simbel — una delle vedute più emozionanti d'Egitto — prima che la nave compia la lunga navigazione di ritorno verso nord, ad Assuan, con i templi che si rimpiccioliscono lentamente dietro la scia finché non scompaiono del tutto nella foschia del deserto. Il viaggio attraverso il lago in senso inverso offre i propri piaceri: la luce che cambia sull'acqua, il silenzio del deserto e la crescente attesa di ciò che verrà dopo nella vostra avventura egiziana, con i cinque giorni precedenti che già si trasformano in quel tipo particolare di ricordo riservato ai viaggi che, anche mentre accadevano, sembravano leggermente più grandi della vita ordinaria.",

        steps: [{
          time: "06:00",
          description: "Visita opzionale all'alba ad Abu Simbel — l'ultima e probabilmente la luce più bella del viaggio."
        }, {
          time: "08:00",
          description: "Colazione a bordo."
        }, {
          time: "09:00",
          description: "Partenza da Abu Simbel. La nave naviga verso nord attraverso il Lago Nasser."
        }, {
          time: "13:00",
          description: "Pranzo a bordo durante la navigazione di ritorno."
        }, {
          time: "17:00",
          description: "Arrivo al molo di Assuan. Sbarco."
        }, {
          time: "17:30",
          description: "Trasferimento al vostro hotel ad Assuan o alla stazione ferroviaria. Fine del tour."
        }]
      }],
      fr: [{
        day: 1,
        title: "Assouan — Embarquement, Kalabasha et Beit El-Wali",
        description: "Votre voyage de cinq jours sur le lac Nasser commence au quai du Haut Barrage d'Assouan, où vous monterez à bord de votre bateau de croisière intimiste et vous installerez dans votre cabine — le doux bercement du bateau contre le quai étant le premier signe que ce voyage évoluera à un rythme entièrement différent des croisières animées du Nil plus au nord. Après un déjeuner de bienvenue, le bateau effectue son premier arrêt au complexe de Kalabasha — trois temples déplacés réunis sur un promontoire au-dessus de la rive nord du lac, survivants d'un projet d'ingénierie qui a remodelé toute la région. Le temple de Kalabasha, l'un des plus grandioses temples gréco-romains de Nubie, constitue votre point d'intérêt principal, aux côtés des reliefs de bataille peints de Beit El-Wali et des élégantes colonnes du kiosque de Kertassi — trois monuments très différents, unis seulement par le fait que tous trois seraient aujourd'hui sous l'eau s'ils n'avaient pas été déplacés.",

        steps: [{
          time: "09:00",
          description: "Transfert depuis l'hôtel jusqu'au quai d'embarquement du Haut Barrage d'Assouan."
        }, {
          time: "10:00",
          description: "Montée à bord du bateau de croisière du lac Nasser et enregistrement en cabine."
        }, {
          time: "12:00",
          description: "Déjeuner de bienvenue à bord."
        }, {
          time: "14:00",
          description: "Court trajet vers le complexe des temples de Kalabasha."
        }, {
          time: "14:30",
          description: "Visite guidée du temple de Kalabasha, de Beit El-Wali et du kiosque de Kertassi."
        }, {
          time: "17:00",
          description: "Retour au bateau. Navigation vers le sud."
        }, {
          time: "19:30",
          description: "Dîner à bord."
        }]
      }, {
        day: 2,
        title: "Wadi el-Seboua, Dakka et Maharraqa",
        description: "Aujourd'hui, le bateau visite trois temples au cours d'une seule matinée remarquable — Wadi el-Seboua, avec son allée de sphinx et son extraordinaire superposition peinte chrétienne sur l'égyptienne, un témoignage visuel d'un changement religieux s'étendant sur des siècles ; le temple de Dakka, aux multiples époques, avec son pylône que l'on peut gravir et ses vastes panoramas sur le lac ; et le petit mais remarquable temple de Maharraqa, le monument antique le plus méridional déplacé lors de l'opération de sauvetage de l'UNESCO, construit à l'époque romaine et notable pour son escalier en colimaçon inhabituel, une caractéristique architecturale rare dans la construction de l'Égypte antique qui continue d'intriguer les architectes visiteurs.",

        steps: [{
          time: "07:00",
          description: "Petit-déjeuner à l'arrivée du bateau à Wadi el-Seboua."
        }, {
          time: "08:00",
          description: "Visite guidée du temple de Wadi el-Seboua — allée des sphinx, strates pharaonique et chrétienne."
        }, {
          time: "09:30",
          description: "Marche jusqu'au temple de Dakka. Visite guidée et ascension optionnelle du pylône pour profiter des vues."
        }, {
          time: "10:30",
          description: "Visitez le temple de Maharraqa — période romaine, escalier en colimaçon unique."
        }, {
          time: "11:30",
          description: "Retour au bateau. Navigation vers le sud en direction d'Amada."
        }, {
          time: "13:00",
          description: "Déjeuner à bord."
        }, {
          time: "15:00",
          description: "Après-midi libre sur le pont tandis que défile l'immense paysage désertique du lac."
        }, {
          time: "19:30",
          description: "Dîner à bord."
        }]
      }, {
        day: 3,
        title: "Temples d'Amada et de Derr",
        description: "Le bateau atteint les temples d'Amada et de Derr — les monuments les plus anciens du lac, antérieurs même aux sites plus célèbres situés plus au sud. Le temple d'Amada, construit par Thoutmôsis III et Amenhotep II, conserve les reliefs peints les plus vivement colorés de Nubie, dont deux textes historiquement cruciaux relatant des événements réels des règnes des pharaons — des inscriptions sur lesquelles les historiens s'appuient encore pour reconstituer cette période de l'histoire militaire égyptienne. Le temple de Derr, une structure rupestre datant de l'époque de Ramsès II, ajoute une autre strate de grandeur de la XIXe dynastie avant la traversée de l'après-midi vers Abou Simbel, le lac s'élargissant autour du bateau tandis que le littoral désertique devient de plus en plus reculé et préservé.",

        steps: [{
          time: "07:00",
          description: "Petit-déjeuner matinal à l'arrivée du bateau à Amada."
        }, {
          time: "08:00",
          description: "Visite guidée du temple d'Amada — plus ancien temple du lac, reliefs peints exceptionnels, inscriptions historiques."
        }, {
          time: "09:30",
          description: "Trajet vers le temple de Derr. Visite guidée du temple rupestre de Ramsès II dédié à Râ-Horakhty."
        }, {
          time: "11:00",
          description: "Retour au bateau. Navigation en direction d'Abou Simbel."
        }, {
          time: "13:00",
          description: "Déjeuner à bord."
        }, {
          time: "16:00",
          description: "Arrivée à Abou Simbel."
        }, {
          time: "16:30",
          description: "Première visite guidée du Grand Temple de Ramsès II et du temple de Néfertari — la lumière de l'après-midi est idéale."
        }, {
          time: "18:30",
          description: "Retour au bateau. Dîner de gala à bord."
        }]
      }, {
        day: 4,
        title: "Abou Simbel — Journée complète et spectacle son et lumière",
        description: "Une journée entière consacrée à Abou Simbel — le point culminant incontesté de toute croisière sur le lac Nasser, et la raison pour laquelle la plupart des passagers ont choisi cet itinéraire en premier lieu. La visite matinale vous permet de découvrir les temples avant l'arrivée des convois de visiteurs d'une journée venant d'Assouan, le site encore enveloppé dans la fraîche tranquillité du petit matin désertique. L'après-midi est libre pour y retourner de façon indépendante, vous asseoir au bord du lac en observant la lumière changer sur l'eau, ou simplement rester à bord du bateau pour profiter du rare luxe d'un temps sans hâte. À la tombée de la nuit, le spectacle son et lumière d'Abou Simbel illumine les temples dans une représentation spectaculaire racontant l'histoire de Ramsès II, les lumières colorées balayant une façade que vous avez désormais eu une journée entière pour apprendre à connaître intimement.",

        steps: [{
          time: "06:30",
          description: "Visite matinale d'Abou Simbel — les temples sont calmes et la lumière est extraordinaire."
        }, {
          time: "08:30",
          description: "Retour au bateau pour le petit-déjeuner."
        }, {
          time: "10:00",
          description: "Deuxième visite optionnelle des temples ou temps libre sur le bateau."
        }, {
          time: "13:00",
          description: "Déjeuner à bord."
        }, {
          time: "15:00",
          description: "Après-midi libre — retour aux temples, exploration du village, ou détente à bord."
        }, {
          time: "20:00",
          description: "Spectacle son et lumière d'Abou Simbel — illumination spectaculaire de la façade du temple et narration de l'histoire de Ramsès II."
        }, {
          time: "21:15",
          description: "Retour au bateau. Dernière soirée à bord."
        }]
      }, {
        day: 5,
        title: "Lever du soleil à Abou Simbel et retour à Assouan",
        description: "La dernière matinée offre un ultime lever de soleil à Abou Simbel — l'un des spectacles les plus émouvants d'Égypte — avant que le bateau n'entame la longue navigation de retour vers le nord, jusqu'à Assouan, les temples rétrécissant lentement derrière le sillage jusqu'à disparaître entièrement dans la brume du désert. La traversée du lac en sens inverse offre ses propres plaisirs : la lumière changeante sur l'eau, le silence du désert, et l'anticipation croissante de ce qui vous attend dans votre aventure égyptienne, les cinq jours écoulés s'installant déjà dans ce type particulier de souvenir réservé aux voyages qui, même en se déroulant, paraissaient légèrement plus grands que la vie ordinaire.",

        steps: [{
          time: "06:00",
          description: "Visite optionnelle au lever du soleil à Abou Simbel — la dernière et sans doute la plus belle lumière du voyage."
        }, {
          time: "08:00",
          description: "Petit-déjeuner à bord."
        }, {
          time: "09:00",
          description: "Départ d'Abou Simbel. Le bateau navigue vers le nord à travers le lac Nasser."
        }, {
          time: "13:00",
          description: "Déjeuner à bord pendant la navigation de retour."
        }, {
          time: "17:00",
          description: "Arrivée au quai d'Assouan. Débarquement."
        }, {
          time: "17:30",
          description: "Transfert vers votre hôtel à Assouan ou vers la gare. Fin de l'excursion."
        }]
      }],
      ru: [{
        day: 1,
        title: "Асуан — посадка на судно, Калабша и Бейт-эль-Вали",
        description: "Ваше пятидневное путешествие по озеру Насер начинается у причала Асуанской высотной плотины, где вы взойдёте на борт своего уютного круизного судна и расположитесь в каюте — мягкое покачивание судна у причала станет первым признаком того, что это путешествие будет проходить совсем в другом темпе по сравнению с оживлёнными круизами по Нилу севернее. После приветственного обеда судно делает первую остановку в комплексе Калабша — три перемещённых храма, собранных на мысе над северным берегом озера, уцелевшие после инженерного проекта, изменившего весь регион. Храм Калабша, один из самых грандиозных греко-римских храмов Нубии, станет вашим главным объектом внимания, вместе с расписными батальными рельефами Бейт-эль-Вали и изящными колоннами киоска Кертасси — три совершенно разных памятника, объединённых лишь тем фактом, что все три сейчас находились бы под водой, если бы их не перенесли.",

        steps: [{
          time: "09:00",
          description: "Трансфер из отеля к причалу посадки у Асуанской высотной плотины."
        }, {
          time: "10:00",
          description: "Посадка на круизное судно озера Насер и регистрация в каюте."
        }, {
          time: "12:00",
          description: "Приветственный обед на борту."
        }, {
          time: "14:00",
          description: "Короткая поездка к храмовому комплексу Калабша."
        }, {
          time: "14:30",
          description: "Экскурсия с гидом по храму Калабша, Бейт-эль-Вали и киоску Кертасси."
        }, {
          time: "17:00",
          description: "Возвращение на судно. Плавание на юг."
        }, {
          time: "19:30",
          description: "Ужин на борту."
        }]
      }, {
        day: 2,
        title: "Вади-эс-Себуа, Дакка и Мухаррака",
        description: "Сегодня судно посещает три храма за одно примечательное утро — Вади-эс-Себуа с его аллеей сфинксов и удивительным христианским расписным слоем над египетским, визуальной летописью религиозных перемен, охватывающей столетия; многослойный храм Дакка с его пилоном, на который можно подняться, и захватывающими видами на озеро; и небольшой, но исключительный храм Мухаррака — самый южный древний памятник, перемещённый в рамках спасательной операции ЮНЕСКО, построенный в римскую эпоху и примечательный своей необычной винтовой лестницей, редкой архитектурной особенностью древнеегипетского строительства, которая до сих пор удивляет приезжающих архитекторов.",

        steps: [{
          time: "07:00",
          description: "Завтрак, пока судно прибывает в Вади-эс-Себуа."
        }, {
          time: "08:00",
          description: "Экскурсия с гидом по храму Вади-эс-Себуа — аллея сфинксов, фараоновский и христианский слои."
        }, {
          time: "09:30",
          description: "Прогулка к храму Дакка. Экскурсия с гидом и дополнительный подъём на пилон для видов."
        }, {
          time: "10:30",
          description: "Посещение храма Мухаррака — римский период, уникальная винтовая лестница."
        }, {
          time: "11:30",
          description: "Возвращение на судно. Плавание на юг в направлении Амады."
        }, {
          time: "13:00",
          description: "Обед на борту."
        }, {
          time: "15:00",
          description: "Свободный день на палубе, пока проплывает необъятный пустынный ландшафт озера."
        }, {
          time: "19:30",
          description: "Ужин на борту."
        }]
      }, {
        day: 3,
        title: "Храмы Амада и Дерр",
        description: "Судно прибывает к храмам Амада и Дерр — самым старым памятникам на озере, более древним даже, чем более известные объекты южнее. Храм Амада, построенный Тутмосом III и Аменхотепом II, хранит самые ярко окрашенные расписные рельефы Нубии, включая два исторически важных текста, фиксирующих реальные события из правления фараонов — надписи, на которые историки до сих пор опираются при восстановлении этого периода военной истории Египта. Высеченный в скале храм Дерр времён Рамсеса II добавляет ещё один слой величия XIX династии перед дневным переходом в направлении Абу-Симбела, пока озеро расширяется вокруг судна, а пустынный берег становится всё более отдалённым и нетронутым.",

        steps: [{
          time: "07:00",
          description: "Ранний завтрак, пока судно прибывает в Амаду."
        }, {
          time: "08:00",
          description: "Экскурсия с гидом по храму Амада — старейший храм на озере, исключительные расписные рельефы, исторические надписи."
        }, {
          time: "09:30",
          description: "Поездка к храму Дерр. Экскурсия с гидом по высеченному в скале храму Рамсеса II, посвящённому Ра-Хорахти."
        }, {
          time: "11:00",
          description: "Возвращение на судно. Плавание в направлении Абу-Симбела."
        }, {
          time: "13:00",
          description: "Обед на борту."
        }, {
          time: "16:00",
          description: "Прибытие в Абу-Симбел."
        }, {
          time: "16:30",
          description: "Первое посещение Большого храма Рамсеса II и храма Нефертари с гидом — вечерний свет идеален."
        }, {
          time: "18:30",
          description: "Возвращение на судно. Праздничный ужин на борту."
        }]
      }, {
        day: 4,
        title: "Абу-Симбел — полный день и шоу света и звука",
        description: "Целый день, посвящённый Абу-Симбелу, — бесспорной вершине любого круиза по озеру Насер, и причине, по которой большинство пассажиров изначально выбрали этот маршрут. Утреннее посещение позволяет увидеть храмы до прибытия колонн однодневных туристов из Асуана, пока место ещё окутано прохладной тишиной раннего пустынного утра. Вторая половина дня свободна — можно вернуться самостоятельно, посидеть у озера, наблюдая, как меняется свет на воде, или просто остаться на судне, наслаждаясь редкой роскошью неспешного времени. С наступлением ночи шоу света и звука в Абу-Симбеле освещает храмы в драматичном представлении, повествующем историю Рамсеса II, а цветные огни скользят по фасаду, который вы уже успели узнать за целый день близко и подробно.",

        steps: [{
          time: "06:30",
          description: "Раннее утреннее посещение Абу-Симбела — храмы тихи, а свет необыкновенный."
        }, {
          time: "08:30",
          description: "Возвращение на судно к завтраку."
        }, {
          time: "10:00",
          description: "Дополнительное второе посещение храмов или свободное время на судне."
        }, {
          time: "13:00",
          description: "Обед на борту."
        }, {
          time: "15:00",
          description: "Свободный день — возвращение к храмам, прогулка по деревне или отдых на борту."
        }, {
          time: "20:00",
          description: "Шоу света и звука в Абу-Симбеле — драматичное освещение фасада храма и повествование истории Рамсеса II."
        }, {
          time: "21:15",
          description: "Возвращение на судно. Последний вечер на борту."
        }]
      }, {
        day: 5,
        title: "Рассвет в Абу-Симбеле и возвращение в Асуан",
        description: "Последнее утро предлагает последний рассвет в Абу-Симбеле — одно из самых трогательных зрелищ в Египте — прежде чем судно отправится в долгий обратный путь на север, в Асуан, а храмы медленно уменьшаются за кормой, пока полностью не исчезнут в пустынной дымке. Путешествие через озеро в обратном направлении дарит собственные удовольствия: меняющийся свет на воде, тишину пустыни и растущее предвкушение того, что ждёт далее в вашем египетском приключении, пока прошедшие пять дней уже превращаются в тот особый вид воспоминаний, который остаётся от путешествий, казавшихся, даже пока они происходили, чуть больше обычной жизни.",

        steps: [{
          time: "06:00",
          description: "Дополнительное посещение Абу-Симбела на рассвете — последний и, возможно, самый красивый свет за всю поездку."
        }, {
          time: "08:00",
          description: "Завтрак на борту."
        }, {
          time: "09:00",
          description: "Отъезд из Абу-Симбела. Судно плывёт на север через озеро Насер."
        }, {
          time: "13:00",
          description: "Обед на борту во время обратного плавания."
        }, {
          time: "17:00",
          description: "Прибытие к причалу Асуана. Высадка."
        }, {
          time: "17:30",
          description: "Трансфер в ваш отель в Асуане или на железнодорожную станцию. Окончание тура."
        }]
      }],
      de: [{
        day: 1,
        title: "Assuan — Einschiffung, Kalabasha & Beit El-Wali",
        description: "Ihre fünftägige Reise auf dem Nassersee beginnt am Anleger des Assuan-Staudamms, wo Sie Ihr intimes Kreuzfahrtschiff besteigen und sich in Ihrer Kabine einrichten — das sanfte Schaukeln des Bootes am Anleger ist das erste Zeichen, dass diese Reise sich in einem völlig anderen Tempo bewegen wird als die geschäftigen Nilkreuzfahrten weiter nördlich. Nach einem Begrüßungsmittagessen macht das Schiff seinen ersten Stopp am Kalabasha-Komplex — drei versetzte Tempel, vereint auf einem Vorsprung über dem nördlichen Ufer des Sees, Überlebende eines Ingenieurprojekts, das die gesamte Region umgestaltet hat. Der Kalabasha-Tempel, einer der grandiosesten griechisch-römischen Tempel Nubiens, steht im Mittelpunkt, zusammen mit den bemalten Schlachtreliefs von Beit El-Wali und den eleganten Säulen des Kertassi-Kiosks — drei sehr unterschiedliche Monumente, vereint nur durch die Tatsache, dass alle drei heute unter Wasser liegen würden, wären sie nicht versetzt worden.",

        steps: [{
          time: "09:00",
          description: "Hoteltransfer zum Einschiffungsanleger des Assuan-Staudamms."
        }, {
          time: "10:00",
          description: "Einschiffung auf das Nassersee-Kreuzfahrtschiff und Check-in in der Kabine."
        }, {
          time: "12:00",
          description: "Begrüßungsmittagessen an Bord."
        }, {
          time: "14:00",
          description: "Kurze Fahrt zum Tempelkomplex von Kalabasha."
        }, {
          time: "14:30",
          description: "Geführte Tour durch den Tempel von Kalabasha, Beit El-Wali und den Kertassi-Kiosk."
        }, {
          time: "17:00",
          description: "Rückkehr zum Schiff. Fahrt nach Süden."
        }, {
          time: "19:30",
          description: "Abendessen an Bord."
        }]
      }, {
        day: 2,
        title: "Wadi el-Sebua, Dakka & Maharraqa",
        description: "Heute besucht das Schiff an einem einzigen bemerkenswerten Vormittag drei Tempel — Wadi el-Sebua mit seiner Sphingenallee und seiner außergewöhnlichen christlichen Übermalung über der ägyptischen, einem visuellen Zeugnis religiösen Wandels über Jahrhunderte; den mehrphasigen Tempel von Dakka mit seinem begehbaren Pylon und weiten Seeblicken; und den kleinen, aber außergewöhnlichen Tempel von Maharraqa, das südlichste antike Monument, das für die UNESCO-Rettungsaktion versetzt wurde, erbaut in der römischen Ära und bemerkenswert für seine ungewöhnliche Wendeltreppe — ein seltenes architektonisches Merkmal in der altägyptischen Bauweise, das besuchende Architekten bis heute rätseln lässt.",

        steps: [{
          time: "07:00",
          description: "Frühstück, während das Schiff Wadi el-Sebua erreicht."
        }, {
          time: "08:00",
          description: "Geführte Tour durch den Tempel von Wadi el-Sebua — Sphingenallee, pharaonische und christliche Schichten."
        }, {
          time: "09:30",
          description: "Spaziergang zum Tempel von Dakka. Geführte Tour und optionaler Aufstieg auf den Pylon für Ausblicke."
        }, {
          time: "10:30",
          description: "Besuchen Sie den Tempel von Maharraqa — römische Zeit, einzigartige Wendeltreppe."
        }, {
          time: "11:30",
          description: "Rückkehr zum Schiff. Fahrt nach Süden in Richtung Amada."
        }, {
          time: "13:00",
          description: "Mittagessen an Bord."
        }, {
          time: "15:00",
          description: "Freier Nachmittag auf dem Deck, während die gewaltige Wüstenlandschaft des Sees vorbeizieht."
        }, {
          time: "19:30",
          description: "Abendessen an Bord."
        }]
      }, {
        day: 3,
        title: "Tempel von Amada und Derr",
        description: "Das Schiff erreicht die Tempel von Amada und Derr — die ältesten Monumente am See, die sogar den berühmteren Stätten weiter südlich vorausgehen. Der Tempel von Amada, erbaut von Thutmosis III. und Amenhotep II., bewahrt die lebhaftesten farbig bemalten Reliefs Nubiens, einschließlich zweier historisch entscheidender Texte, die tatsächliche Ereignisse aus den Regierungszeiten der Pharaonen festhalten — Inschriften, auf die sich Historiker noch heute stützen, um diese Periode der ägyptischen Militärgeschichte zu rekonstruieren. Der Tempel von Derr, ein in den Felsen gehauenes Bauwerk aus der Zeit von Ramses II., fügt eine weitere Schicht der Größe der 19. Dynastie hinzu, bevor am Nachmittag die Fahrt in Richtung Abu Simbel beginnt, während sich der See um das Schiff weitet und die Wüstenküste zunehmend abgelegener und unberührter wird.",

        steps: [{
          time: "07:00",
          description: "Frühes Frühstück, während das Schiff in Amada eintrifft."
        }, {
          time: "08:00",
          description: "Geführte Tour durch den Tempel von Amada — ältester Tempel am See, außergewöhnliche bemalte Reliefs, historische Inschriften."
        }, {
          time: "09:30",
          description: "Transfer zum Tempel von Derr. Geführte Tour durch den in den Felsen gehauenen Tempel von Ramses II., der Re-Harachte gewidmet ist."
        }, {
          time: "11:00",
          description: "Rückkehr zum Schiff. Fahrt in Richtung Abu Simbel."
        }, {
          time: "13:00",
          description: "Mittagessen an Bord."
        }, {
          time: "16:00",
          description: "Ankunft in Abu Simbel."
        }, {
          time: "16:30",
          description: "Erster geführter Besuch des Großen Tempels von Ramses II. und des Tempels der Nefertari — das Nachmittagslicht ist ideal."
        }, {
          time: "18:30",
          description: "Rückkehr zum Schiff. Galadinner an Bord."
        }]
      }, {
        day: 4,
        title: "Abu Simbel — Ganzer Tag & Licht- und Tonshow",
        description: "Ein ganzer Tag, der Abu Simbel gewidmet ist — dem unangefochtenen Höhepunkt jeder Nassersee-Kreuzfahrt und dem Grund, warum sich die meisten Passagiere überhaupt für diese Route entschieden haben. Der Morgenbesuch ermöglicht es Ihnen, die Tempel zu sehen, bevor die Tagesausflugskonvois aus Assuan eintreffen, während die Stätte noch in die kühle Stille des frühen Wüstenmorgens gehüllt ist. Der Nachmittag steht Ihnen frei zur Verfügung, um eigenständig zurückzukehren, am See zu sitzen und zu beobachten, wie sich das Licht über dem Wasser verändert, oder einfach an Bord zu bleiben und den seltenen Luxus unbeschwerter Zeit zu genießen. Mit Einbruch der Nacht erleuchtet die Licht- und Tonshow von Abu Simbel die Tempel in einer dramatischen Inszenierung, die die Geschichte von Ramses II. erzählt — die farbigen Lichter gleiten über eine Fassade, die Sie nun einen ganzen Tag lang genau kennenlernen konnten.",

        steps: [{
          time: "06:30",
          description: "Früher Morgenbesuch in Abu Simbel — die Tempel sind ruhig und das Licht ist außergewöhnlich."
        }, {
          time: "08:30",
          description: "Rückkehr zum Schiff zum Frühstück."
        }, {
          time: "10:00",
          description: "Optionaler zweiter Besuch der Tempel oder Freizeit auf dem Schiff."
        }, {
          time: "13:00",
          description: "Mittagessen an Bord."
        }, {
          time: "15:00",
          description: "Freier Nachmittag — Rückkehr zu den Tempeln, Erkundung des Dorfes oder Entspannung an Bord."
        }, {
          time: "20:00",
          description: "Licht- und Tonshow von Abu Simbel — dramatische Beleuchtung der Tempelfassade und Erzählung der Geschichte von Ramses II."
        }, {
          time: "21:15",
          description: "Rückkehr zum Schiff. Letzter Abend an Bord."
        }]
      }, {
        day: 5,
        title: "Sonnenaufgang in Abu Simbel & Rückkehr nach Assuan",
        description: "Der letzte Morgen bietet einen letzten Sonnenaufgang in Abu Simbel — einen der bewegendsten Anblicke Ägyptens — bevor das Schiff die lange Rückreise nach Norden, nach Assuan, antritt, während die Tempel hinter dem Kielwasser langsam kleiner werden, bis sie vollständig im Wüstendunst verschwinden. Die Fahrt über den See in umgekehrter Richtung bietet ihre eigenen Freuden: das sich verändernde Licht auf dem Wasser, die Stille der Wüste und die wachsende Vorfreude auf das, was als Nächstes in Ihrem ägyptischen Abenteuer kommt, während sich die vergangenen fünf Tage bereits zu jener besonderen Art von Erinnerung verdichten, die Reisen vorbehalten ist, die sich selbst während sie geschahen, etwas größer als das gewöhnliche Leben anfühlten.",

        steps: [{
          time: "06:00",
          description: "Optionaler Sonnenaufgangsbesuch in Abu Simbel — das letzte und wohl schönste Licht der Reise."
        }, {
          time: "08:00",
          description: "Frühstück an Bord."
        }, {
          time: "09:00",
          description: "Abfahrt von Abu Simbel. Das Schiff fährt nach Norden über den Nassersee."
        }, {
          time: "13:00",
          description: "Mittagessen an Bord während der Rückfahrt."
        }, {
          time: "17:00",
          description: "Ankunft am Anleger von Assuan. Von Bord gehen."
        }, {
          time: "17:30",
          description: "Transfer zu Ihrem Hotel in Assuan oder zum Bahnhof. Ende der Tour."
        }]
      }]
    },
  },
  {
    title: "Aswan Felucca Tour",
    slug: "aswan-felucca-tour",
    description:
      "There is no more peaceful way to experience the Nile than drifting along its waters on a traditional felucca sailboat, a vessel design barely changed since the time of the pharaohs and still, even now, the most natural way to see this stretch of river. On this relaxed one-hour tour, you'll glide past Aswan's most scenic spots — Elephantine Island, the Aga Khan Mausoleum perched on its hilltop like a pale crown against the desert sky, and the desert cliffs of the West Bank — as the warm breeze fills the sails and the timeless sounds of the river surround you: water lapping against the hull, distant calls from riverside villages, and the occasional creak of old wooden rigging that has carried sailors across this same stretch of water for centuries. A simple, beautiful, and deeply memorable experience that asks nothing of you but to sit back and let the Nile do the rest.",
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
      es: "Muelle de felucas de la Corniche de Asuán, frente al Hotel Sofitel Legend Old Cataract. Su capitán estará esperando junto a la feluca.",
      pt: "Cais de felucas da Corniche de Assuão, em frente ao Hotel Sofitel Legend Old Cataract. Seu capitão estará esperando junto à feluca.",
      it: "Molo delle felucche sulla Corniche di Assuan, di fronte all'Hotel Sofitel Legend Old Cataract. Il vostro capitano vi aspetterà accanto alla felucca.",
      fr: "Quai des felouques de la corniche d'Assouan, en face de l'hôtel Sofitel Legend Old Cataract. Votre capitaine vous attendra près de la felouque.",
      ru: "Причал для фелук на Корниш в Асуане, перед отелем Sofitel Legend Old Cataract. Ваш капитан будет ждать у фелуки.",
      de: "Felucca-Anlegestelle an der Corniche von Assuan, gegenüber dem Hotel Sofitel Legend Old Cataract. Ihr Kapitän wird neben der Felucca warten."
    },
    accessibility: {
      en: "Boarding the felucca requires stepping down carefully from the dock into a low-seated boat. Not suitable for guests with significant mobility issues. Life jackets available.",
      es: "Subir a la feluca requiere bajar con cuidado desde el muelle a una embarcación de asientos bajos. No es adecuado para huéspedes con problemas de movilidad significativos. Chalecos salvavidas disponibles.",
      pt: "Embarcar na feluca exige descer com cuidado do cais para uma embarcação de assentos baixos. Não é adequado para hóspedes com problemas significativos de mobilidade. Coletes salva-vidas disponíveis.",
      it: "Salire sulla felucca richiede di scendere con attenzione dal molo a un'imbarcazione con sedili bassi. Non adatto agli ospiti con significativi problemi di mobilità. Giubbotti di salvataggio disponibili.",
      fr: "Monter à bord de la felouque nécessite de descendre prudemment du quai dans une embarcation à sièges bas. Ne convient pas aux personnes ayant des problèmes de mobilité importants. Gilets de sauvetage disponibles.",
      ru: "Посадка на фелуку требует осторожного спуска с причала в лодку с низкими сиденьями. Не подходит для гостей с серьёзными проблемами с подвижностью. Имеются спасательные жилеты.",
      de: "Das Einsteigen in die Felucca erfordert vorsichtiges Hinabsteigen vom Anleger in ein niedrig sitzendes Boot. Nicht geeignet für Gäste mit erheblichen Mobilitätseinschränkungen. Schwimmwesten sind verfügbar."
    },
    whatToBring: {
      en: ["Sun hat and sunscreen", "Light jacket for afternoon or evening departures", "Camera", "Water bottle"],
      es: [
        "Sombrero y protector solar",
        "Chaqueta ligera para salidas de tarde o noche",
        "Cámara",
        "Botella de agua"
      ],
      pt: [
        "Chapéu de sol e protetor solar",
        "Jaqueta leve para saídas no fim da tarde ou à noite",
        "Câmera fotográfica",
        "Garrafa de água"
      ],
      it: [
        "Cappello da sole e crema solare",
        "Giacca leggera per le partenze del pomeriggio o della sera",
        "Macchina fotografica",
        "Bottiglia d'acqua"
      ],
      fr: [
        "Chapeau de soleil et crème solaire",
        "Veste légère pour les départs en fin d'après-midi ou en soirée",
        "Appareil photo",
        "Bouteille d'eau"
      ],
      ru: [
        "Шляпа от солнца и солнцезащитный крем",
        "Лёгкая куртка для дневных или вечерних поездок",
        "Фотоаппарат",
        "Бутылка воды"
      ],
      de: [
        "Sonnenhut und Sonnenschutz",
        "Leichte Jacke für Nachmittags- oder Abendfahrten",
        "Kamera",
        "Wasserflasche"
      ]
    },
    importantInfo: {
      en: [
        "Hotel pickup is not included; make your own way to the Corniche dock.",
        "Life jackets are provided onboard.",
        "The sunset departure (17:30) is particularly recommended for its golden light on the Nile and the West Bank dunes.",
        "The tour operates in most weather conditions; in case of strong wind the captain will advise.",
      ],
      es: [
        "La recogida en el hotel no está incluida; debe llegar por su cuenta al muelle de la Corniche.",
        "Se proporcionan chalecos salvavidas a bordo.",
        "La salida al atardecer (17:30) es especialmente recomendada por su luz dorada sobre el Nilo y las dunas de la Orilla Oeste.",
        "El tour opera en la mayoría de las condiciones climáticas; en caso de viento fuerte, el capitán asesorará."
      ],
      pt: [
        "A busca no hotel não está incluída; você deve chegar por conta própria ao cais da Corniche.",
        "Coletes salva-vidas são fornecidos a bordo.",
        "A saída ao pôr do sol (17h30) é especialmente recomendada por sua luz dourada sobre o Nilo e as dunas da Margem Ocidental.",
        "O tour funciona na maioria das condições climáticas; em caso de vento forte, o capitão fará as recomendações necessárias."
      ],
      it: [
        "Il ritiro in hotel non è incluso; dovete raggiungere autonomamente il molo della Corniche.",
        "I giubbotti di salvataggio sono forniti a bordo.",
        "La partenza al tramonto (17:30) è particolarmente consigliata per la sua luce dorata sul Nilo e sulle dune della Riva Occidentale.",
        "Il tour opera nella maggior parte delle condizioni meteorologiche; in caso di vento forte il capitano fornirà indicazioni."
      ],
      fr: [
        "La prise en charge à l'hôtel n'est pas incluse ; vous devez vous rendre vous-même au quai de la corniche.",
        "Des gilets de sauvetage sont fournis à bord.",
        "Le départ au coucher du soleil (17h30) est particulièrement recommandé pour sa lumière dorée sur le Nil et les dunes de la rive ouest.",
        "L'excursion fonctionne dans la plupart des conditions météorologiques ; en cas de vent fort, le capitaine vous conseillera."
      ],
      ru: [
        "Трансфер из отеля не включён; до причала на Корниш нужно добраться самостоятельно.",
        "На борту предоставляются спасательные жилеты.",
        "Особенно рекомендуется отправление на закате (17:30) благодаря золотистому свету над Нилом и дюнами Западного берега.",
        "Тур проводится в большинстве погодных условий; в случае сильного ветра капитан даст рекомендации."
      ],
      de: [
        "Die Hotelabholung ist nicht inbegriffen; Sie gelangen selbstständig zur Anlegestelle an der Corniche.",
        "Schwimmwesten werden an Bord bereitgestellt.",
        "Die Abfahrt bei Sonnenuntergang (17:30 Uhr) wird besonders wegen des goldenen Lichts auf dem Nil und den Dünen des Westufers empfohlen.",
        "Die Tour findet bei den meisten Wetterbedingungen statt; bei starkem Wind gibt der Kapitän entsprechende Hinweise."
      ]
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
            "The felucca — a traditional wooden sailboat with a single lateen sail — is the oldest form of transport on the Nile and one of the most enduring images of Egypt, appearing in tomb paintings thousands of years old in almost exactly the same form it takes today. Aswan is its spiritual home: the river here is broad and calm, free of the busy cargo traffic that dominates stretches further north, and the surrounding landscape — Elephantine Island to the west, the great sand dunes of the West Bank beyond, and the pale desert hills behind the city — is among the most beautiful on the entire Nile, a composition that has drawn painters and photographers for well over a century. This one-hour tour makes no grand promises. It offers the simple, profound pleasure of moving quietly across water in the open air, in a vessel that has not essentially changed in 3,000 years. Your experienced captain will read the wind and navigate you past the most scenic stretches of Aswan's waterfront, pointing out landmarks and offering commentary — or simply letting the silence of the river speak for itself, an option many passengers find they prefer once the sail catches and the city noise finally fades behind them.",
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
      es: [{
        day: 1,
        title: "Una hora en el Nilo: la experiencia más serena de Asuán",
        description: "La feluca, un velero tradicional de madera con una sola vela latina, es la forma de transporte más antigua del Nilo y una de las imágenes más perdurables de Egipto, apareciendo en pinturas de tumbas de miles de años de antigüedad casi exactamente con la misma forma que tiene hoy. Asuán es su hogar espiritual: el río aquí es ancho y tranquilo, libre del intenso tráfico de carga que domina tramos más al norte, y el paisaje circundante (la isla Elefantina al oeste, las grandes dunas de arena de la Orilla Oeste más allá, y las pálidas colinas del desierto detrás de la ciudad) es uno de los más bellos de todo el Nilo, una composición que ha atraído a pintores y fotógrafos durante más de un siglo. Este tour de una hora no hace grandes promesas. Ofrece el placer simple y profundo de moverse silenciosamente sobre el agua al aire libre, en una embarcación que esencialmente no ha cambiado en 3,000 años. Su experimentado capitán leerá el viento y lo guiará por los tramos más pintorescos del paseo marítimo de Asuán, señalando puntos de referencia y ofreciendo comentarios, o simplemente dejando que el silencio del río hable por sí mismo, una opción que muchos pasajeros descubren que prefieren una vez que la vela toma viento y el ruido de la ciudad finalmente se desvanece detrás de ellos.",

        steps: [{
          time: "17:30",
          description: "Encuentro con su capitán en el muelle de felucas de la Corniche. Aborde la feluca: baje con cuidado a la embarcación de bordes bajos y tome asiento en los bancos acolchados."
        }, {
          time: "17:35",
          description: "La vela se llena y la feluca se adentra en el Nilo. Los sonidos de la ciudad se desvanecen. Su capitán navega hacia el sur, paralelo a la Corniche."
        }, {
          time: "17:45",
          description: "Pase por el extremo sur de la isla Elefantina: su capitán explica su historia como el sitio habitado más antiguo de Asuán, que data del Egipto predinástico. Observe los pueblos nubios en la orilla occidental de la isla."
        }, {
          time: "18:00",
          description: "La feluca rodea la punta norte de la isla Elefantina y se ve el Mausoleo del Aga Khan en su colina sobre la Orilla Oeste: la cúpula de mármol resplandeciendo con el sol de la tarde. Su capitán comparte la historia del Aga Khan III, quien se enamoró de Asuán y eligió ser enterrado aquí."
        }, {
          time: "18:15",
          description: "El barco se desliza de vuelta hacia el sur con la corriente, mientras las grandes dunas de arena de la Orilla Oeste captan los últimos rayos de luz dorada. Este es el momento que la mayoría de la gente quiere fotografiar."
        }, {
          time: "18:30",
          description: "Regreso al muelle de la Corniche. Desembarque. Fin del tour."
        }]
      }],
      pt: [{
        day: 1,
        title: "Uma hora no Nilo — a experiência mais tranquila de Assuão",
        description: "A feluca — um veleiro tradicional de madeira com uma única vela latina — é a forma mais antiga de transporte no Nilo e uma das imagens mais duradouras do Egito, aparecendo em pinturas de tumbas com milhares de anos quase exatamente na mesma forma que tem hoje. Assuão é seu lar espiritual: o rio aqui é largo e calmo, livre do intenso tráfego de carga que domina trechos mais ao norte, e a paisagem ao redor — a Ilha Elefantina a oeste, as grandes dunas de areia da Margem Ocidental além dela, e as pálidas colinas do deserto detrás da cidade — está entre as mais belas de todo o Nilo, uma composição que atrai pintores e fotógrafos há mais de um século. Este passeio de uma hora não faz grandes promessas. Ele oferece o prazer simples e profundo de deslizar silenciosamente pela água ao ar livre, em uma embarcação que essencialmente não mudou em 3.000 anos. Seu capitão experiente lerá o vento e o conduzirá pelos trechos mais pitorescos da orla de Assuão, apontando pontos de referência e oferecendo comentários — ou simplesmente deixando que o silêncio do rio fale por si só, uma opção que muitos passageiros descobrem preferir depois que a vela enche e o ruído da cidade finalmente se dissipa atrás deles.",

        steps: [{
          time: "17:30",
          description: "Encontro com seu capitão no cais de felucas da Corniche. Embarque na feluca — desça com cuidado para a embarcação de bordas baixas e sente-se nos bancos acolchoados."
        }, {
          time: "17:35",
          description: "A vela enche e a feluca avança para o Nilo. Os sons da cidade se dissipam. Seu capitão navega para o sul, paralelo à Corniche."
        }, {
          time: "17:45",
          description: "Passe pela extremidade sul da Ilha Elefantina — seu capitão explica sua história como o sítio habitado mais antigo de Assuão, datando do Egito pré-dinástico. Observe as vilas núbias na margem ocidental da ilha."
        }, {
          time: "18:00",
          description: "A feluca contorna a ponta norte da Elefantina e você vê o Mausoléu do Aga Khan no topo da colina sobre a Margem Ocidental — a cúpula de mármore brilhando ao sol do final da tarde. Seu capitão compartilha a história do Aga Khan III, que se apaixonou por Assuão e escolheu ser enterrado aqui."
        }, {
          time: "18:15",
          description: "O barco desliza de volta para o sul com a correnteza, enquanto as grandes dunas de areia da Margem Ocidental captam os últimos raios da luz dourada. Este é o momento que a maioria das pessoas quer fotografar."
        }, {
          time: "18:30",
          description: "Retorno ao cais da Corniche. Desembarque. Fim do tour."
        }]
      }],
      it: [{
        day: 1,
        title: "Un'ora sul Nilo — l'esperienza più tranquilla di Assuan",
        description: "La felucca — una tradizionale barca a vela in legno con un'unica vela latina — è la forma di trasporto più antica del Nilo e una delle immagini più durature dell'Egitto, presente in pitture tombali di migliaia di anni fa quasi esattamente nella stessa forma che ha oggi. Assuan è la sua patria spirituale: il fiume qui è ampio e calmo, libero dal traffico merci intenso che domina i tratti più a nord, e il paesaggio circostante — l'Isola Elefantina a ovest, le grandi dune di sabbia della Riva Occidentale oltre, e le pallide colline desertiche dietro la città — è tra i più belli di tutto il Nilo, una composizione che ha attirato pittori e fotografi per ben più di un secolo. Questo tour di un'ora non fa grandi promesse. Offre il piacere semplice e profondo di muoversi silenziosamente sull'acqua all'aria aperta, in un'imbarcazione che essenzialmente non è cambiata in 3.000 anni. Il vostro esperto capitano leggerà il vento e vi guiderà lungo i tratti più panoramici del lungofiume di Assuan, indicando punti di interesse e offrendo commenti — oppure lasciando semplicemente che il silenzio del fiume parli da sé, un'opzione che molti passeggeri scoprono di preferire una volta che la vela si gonfia e il rumore della città finalmente svanisce dietro di loro.",

        steps: [{
          time: "17:30",
          description: "Incontro con il capitano al molo delle felucche sulla Corniche. Imbarco sulla felucca — scendete con attenzione nell'imbarcazione a bordi bassi e prendete posto sulle panche imbottite."
        }, {
          time: "17:35",
          description: "La vela si gonfia e la felucca si muove verso il Nilo. I suoni della città si dissolvono. Il capitano naviga verso sud, parallelamente alla Corniche."
        }, {
          time: "17:45",
          description: "Passate l'estremità meridionale dell'Isola Elefantina — il capitano spiega la sua storia come il sito abitato più antico di Assuan, risalente all'Egitto predinastico. Osservate i villaggi nubiani sulla riva occidentale dell'isola."
        }, {
          time: "18:00",
          description: "La felucca gira attorno alla punta settentrionale di Elefantina e potete vedere il Mausoleo dell'Aga Khan sulla sua collina sopra la Riva Occidentale — la cupola di marmo che risplende nel sole del tardo pomeriggio. Il capitano racconta la storia dell'Aga Khan III, che si innamorò di Assuan e scelse di essere sepolto qui."
        }, {
          time: "18:15",
          description: "La barca scivola di nuovo verso sud seguendo la corrente, mentre le grandi dune di sabbia della Riva Occidentale catturano gli ultimi raggi della luce dorata. Questo è il momento che la maggior parte delle persone vuole fotografare."
        }, {
          time: "18:30",
          description: "Ritorno al molo della Corniche. Sbarco. Fine del tour."
        }]
      }],
      fr: [{
        day: 1,
        title: "Une heure sur le Nil — l'expérience la plus paisible d'Assouan",
        description: "La felouque — un voilier traditionnel en bois équipé d'une seule voile latine — est le plus ancien mode de transport sur le Nil et l'une des images les plus durables de l'Égypte, apparaissant dans des peintures funéraires vieilles de plusieurs milliers d'années sous une forme presque identique à celle qu'elle a aujourd'hui. Assouan en est le foyer spirituel : le fleuve y est large et calme, libéré du trafic de marchandises intense qui domine les tronçons plus au nord, et le paysage environnant — l'île Éléphantine à l'ouest, les grandes dunes de sable de la rive ouest au-delà, et les pâles collines désertiques derrière la ville — compte parmi les plus beaux de tout le Nil, une composition qui attire peintres et photographes depuis bien plus d'un siècle. Cette excursion d'une heure ne fait aucune grande promesse. Elle offre le plaisir simple et profond de glisser silencieusement sur l'eau en plein air, à bord d'une embarcation qui n'a pratiquement pas changé depuis 3 000 ans. Votre capitaine expérimenté lira le vent et vous fera naviguer le long des tronçons les plus pittoresques du front de mer d'Assouan, signalant les points de repère et proposant des commentaires — ou laissant simplement le silence du fleuve parler de lui-même, une option que de nombreux passagers découvrent préférer une fois que la voile se gonfle et que le bruit de la ville s'efface enfin derrière eux.",

        steps: [{
          time: "17:30",
          description: "Rencontre avec votre capitaine au quai des felouques de la corniche. Montée à bord de la felouque — descendez prudemment dans l'embarcation à bords bas et installez-vous sur les banquettes capitonnées."
        }, {
          time: "17:35",
          description: "La voile se gonfle et la felouque s'avance sur le Nil. Les bruits de la ville s'effacent. Votre capitaine met le cap au sud, parallèlement à la corniche."
        }, {
          time: "17:45",
          description: "Passez l'extrémité sud de l'île Éléphantine — votre capitaine explique son histoire en tant que site habité le plus ancien d'Assouan, datant de l'Égypte prédynastique. Observez les villages nubiens sur la rive occidentale de l'île."
        }, {
          time: "18:00",
          description: "La felouque contourne la pointe nord de l'Éléphantine et vous apercevez le mausolée de l'Aga Khan sur sa colline au-dessus de la rive ouest — le dôme de marbre rayonnant sous le soleil de fin d'après-midi. Votre capitaine vous raconte l'histoire de l'Aga Khan III, tombé amoureux d'Assouan et qui a choisi d'y être enterré."
        }, {
          time: "18:15",
          description: "Le bateau redescend vers le sud au fil du courant, les grandes dunes de sable de la rive ouest captant les derniers rayons de lumière dorée. C'est le moment que la plupart des visiteurs souhaitent photographier."
        }, {
          time: "18:30",
          description: "Retour au quai de la corniche. Débarquement. Fin de l'excursion."
        }]
      }],
      ru: [{
        day: 1,
        title: "Час на Ниле — самое умиротворённое впечатление Асуана",
        description: "Фелука — традиционная деревянная парусная лодка с одним косым парусом — самый старый вид транспорта на Ниле и один из самых устойчивых образов Египта, встречающийся в гробничных росписях тысячелетней давности почти в той же форме, что и сегодня. Асуан — её духовный дом: река здесь широкая и спокойная, свободная от оживлённого грузового движения, которое доминирует на участках севернее, а окружающий ландшафт — остров Элефантина на западе, огромные песчаные дюны Западного берега за ним и бледные пустынные холмы за городом — один из самых красивых на всём Ниле, композиция, которая привлекала художников и фотографов на протяжении более чем столетия. Этот часовой тур не даёт громких обещаний. Он предлагает простое, глубокое удовольствие тихого скольжения по воде на открытом воздухе, на судне, которое практически не изменилось за 3000 лет. Ваш опытный капитан будет читать ветер и проведёт вас вдоль самых живописных участков набережной Асуана, указывая на достопримечательности и рассказывая о них — или просто позволяя тишине реки говорить самой за себя, и многие пассажиры обнаруживают, что предпочитают именно этот вариант, когда парус наполняется ветром и шум города наконец стихает позади.",

        steps: [{
          time: "17:30",
          description: "Встреча с капитаном у причала для фелук на Корниш. Посадка на фелуку — осторожно спуститесь в лодку с низкими бортами и займите место на мягких скамьях."
        }, {
          time: "17:35",
          description: "Парус наполняется ветром, и фелука выходит на Нил. Звуки города стихают. Капитан направляет лодку на юг, параллельно набережной."
        }, {
          time: "17:45",
          description: "Прохождение южной оконечности острова Элефантина — капитан расскажет о его истории как самого древнего обитаемого места в Асуане, относящегося к додинастическому Египту. Посмотрите на нубийские деревни на западном берегу острова."
        }, {
          time: "18:00",
          description: "Фелука обходит северную оконечность Элефантины, и вы видите мавзолей Ага-Хана на холме над Западным берегом — мраморный купол светится в лучах позднего дня. Капитан расскажет историю Ага-Хана III, который полюбил Асуан и выбрал быть похороненным здесь."
        }, {
          time: "18:15",
          description: "Лодка плывёт обратно на юг по течению, а большие песчаные дюны Западного берега ловят последние лучи золотистого света. Это момент, который большинство людей хотят запечатлеть на фото."
        }, {
          time: "18:30",
          description: "Возвращение к причалу на Корниш. Высадка. Окончание тура."
        }]
      }],
      de: [{
        day: 1,
        title: "Eine Stunde auf dem Nil — Assuans friedlichstes Erlebnis",
        description: "Die Felucca — ein traditionelles Holzsegelboot mit einem einzigen Lateinsegel — ist die älteste Transportform auf dem Nil und eines der beständigsten Bilder Ägyptens, das in Jahrtausende alten Grabmalereien fast genau in derselben Form erscheint, die es heute hat. Assuan ist seine spirituelle Heimat: Der Fluss ist hier breit und ruhig, frei vom geschäftigen Frachtverkehr, der weiter nördlich gelegene Abschnitte prägt, und die umgebende Landschaft — die Elephantine-Insel im Westen, die großen Sanddünen des Westufers dahinter und die blassen Wüstenhügel hinter der Stadt — zählt zu den schönsten am gesamten Nil, eine Komposition, die seit weit über einem Jahrhundert Maler und Fotografen anzieht. Diese einstündige Tour macht keine großen Versprechen. Sie bietet das einfache, tiefe Vergnügen, sich leise über das Wasser an der frischen Luft zu bewegen, in einem Gefährt, das sich in 3.000 Jahren im Wesentlichen nicht verändert hat. Ihr erfahrener Kapitän liest den Wind und navigiert Sie an den schönsten Abschnitten der Uferpromenade von Assuan entlang, weist auf Sehenswürdigkeiten hin und gibt Erläuterungen — oder lässt einfach die Stille des Flusses für sich selbst sprechen, eine Option, die viele Passagiere bevorzugen, sobald sich das Segel füllt und der Lärm der Stadt endlich hinter ihnen verklingt.",

        steps: [{
          time: "17:30",
          description: "Treffen mit Ihrem Kapitän an der Felucca-Anlegestelle an der Corniche. Einstieg in die Felucca — steigen Sie vorsichtig in das niedrig gebaute Boot hinab und nehmen Sie auf den gepolsterten Bänken Platz."
        }, {
          time: "17:35",
          description: "Das Segel füllt sich und die Felucca fährt hinaus auf den Nil. Die Geräusche der Stadt verklingen. Ihr Kapitän steuert nach Süden, parallel zur Corniche."
        }, {
          time: "17:45",
          description: "Passieren Sie das südliche Ende der Elephantine-Insel — Ihr Kapitän erklärt ihre Geschichte als ältesten bewohnten Ort in Assuan, der bis in die vordynastische Zeit Ägyptens zurückreicht. Blicken Sie hinüber zu den nubischen Dörfern am westlichen Ufer der Insel."
        }, {
          time: "18:00",
          description: "Die Felucca umfährt die nördliche Spitze von Elephantine, und Sie sehen das Aga-Khan-Mausoleum auf seinem Hügel über dem Westufer — die Marmorkuppel leuchtet im Licht des späten Nachmittags. Ihr Kapitän erzählt die Geschichte von Aga Khan III., der sich in Assuan verliebte und sich entschied, hier begraben zu werden."
        }, {
          time: "18:15",
          description: "Das Boot treibt mit der Strömung wieder nach Süden, während die großen Sanddünen des Westufers das letzte goldene Licht einfangen. Dies ist der Moment, den die meisten Menschen fotografieren möchten."
        }, {
          time: "18:30",
          description: "Rückkehr zur Anlegestelle der Corniche. Von Bord gehen. Ende der Tour."
        }]
      }]
    },
  },
  {
    title: "Egypt Tour Package: 8 Days All-Inclusive from Aswan",
    slug: "egypt-tour-package-8-days-all-inclusive-aswan",
    description:
      "Discover the greatest highlights of Egypt from south to north on this comprehensive 8-day all-inclusive tour starting from Aswan, a single seamless journey that traces nearly the entire arc of ancient Egyptian civilization from its southern frontier to the great monuments of Memphis and the Delta. Begin your journey with the legendary temples of Abu Simbel before heading through the Nile Valley to Luxor, ancient Thebes, where temples and tombs are layered more thickly than almost anywhere else on earth, then continuing to Cairo to see the Pyramids of Giza, the Sphinx, and the Grand Egyptian Museum, the final and arguably most overwhelming chapter of any trip through Egypt. Every detail is taken care of — transport, accommodation, meals, guided excursions, and entrance fees are all included for a seamless Egyptian adventure, allowing you to focus entirely on the monuments, the history, and the country itself rather than the logistics of getting from one site to the next. This journey is proudly organized by Aurevian Tours, bringing together eight days of expert guiding, comfortable transport, and seamless logistics across the full sweep of Egypt's ancient and modern landscapes.",
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
      es: "El lobby de su hotel en Asuán, el día 1. El guía se reunirá con usted para comenzar el tour.",
      pt: "O lobby do seu hotel em Assuão no Dia 1. O guia irá encontrá-lo para iniciar o tour.",
      it: "La hall del vostro hotel ad Assuan il Giorno 1. La guida vi incontrerà per iniziare il tour.",
      fr: "Le hall de votre hôtel à Assouan, le jour 1. Le guide vous rejoindra pour commencer l'excursion.",
      ru: "Лобби вашего отеля в Асуане в 1-й день. Гид встретит вас, чтобы начать тур.",
      de: "Die Lobby Ihres Hotels in Assuan am 1. Tag. Der Reiseleiter trifft Sie, um die Tour zu beginnen."
    },
    accessibility: {
      en: "This tour involves significant walking at multiple sites. Some locations have uneven terrain, sand, and stairs. Not suitable for guests with severe mobility issues.",
      es: "Este tour implica caminar significativamente en múltiples sitios. Algunos lugares tienen terreno irregular, arena y escaleras. No es adecuado para huéspedes con problemas graves de movilidad.",
      pt: "Este tour envolve caminhadas significativas em vários locais. Alguns lugares têm terreno irregular, areia e escadas. Não é adequado para hóspedes com problemas graves de mobilidade.",
      it: "Questo tour prevede di camminare significativamente in più siti. Alcuni luoghi presentano terreno irregolare, sabbia e scale. Non adatto agli ospiti con gravi problemi di mobilità.",
      fr: "Cette excursion implique de marcher considérablement sur plusieurs sites. Certains lieux présentent un terrain irrégulier, du sable et des escaliers. Ne convient pas aux personnes ayant de graves problèmes de mobilité.",
      ru: "Этот тур предполагает значительную ходьбу на нескольких объектах. В некоторых местах неровная местность, песок и лестницы. Не подходит для гостей с серьёзными проблемами с подвижностью.",
      de: "Diese Tour beinhaltet erhebliches Gehen an mehreren Stätten. Einige Orte haben unebenes Gelände, Sand und Treppen. Nicht geeignet für Gäste mit starken Mobilitätseinschränkungen."
    },
    whatToBring: {
      en: ["Comfortable walking shoes for all 8 days", "Sun protection throughout", "Light layers for cooler Cairo evenings", "Camera", "Power adapter (Egypt uses Type C/F plugs)", "Personal medications", "Travel insurance documents"],
      es: [
        "Zapatos cómodos para caminar durante los 8 días",
        "Protección solar durante todo el recorrido",
        "Capas ligeras para las noches más frescas de El Cairo",
        "Cámara",
        "Adaptador de corriente (Egipto usa enchufes tipo C/F)",
        "Medicamentos personales",
        "Documentos de seguro de viaje"
      ],
      pt: [
        "Sapatos confortáveis para caminhar durante os 8 dias",
        "Proteção solar durante todo o percurso",
        "Camadas leves para as noites mais frescas do Cairo",
        "Câmera fotográfica",
        "Adaptador de tomada (o Egito usa plugues tipo C/F)",
        "Medicamentos pessoais",
        "Documentos de seguro de viagem"
      ],
      it: [
        "Scarpe comode da camminata per tutti gli 8 giorni",
        "Protezione solare per l'intero percorso",
        "Strati leggeri per le serate più fresche del Cairo",
        "Macchina fotografica",
        "Adattatore di corrente (l'Egitto utilizza prese di tipo C/F)",
        "Farmaci personali",
        "Documenti dell'assicurazione di viaggio"
      ],
      fr: [
        "Chaussures de marche confortables pour les 8 jours",
        "Protection solaire pour toute la durée du séjour",
        "Couches légères pour les soirées plus fraîches du Caire",
        "Appareil photo",
        "Adaptateur électrique (l'Égypte utilise des prises de type C/F)",
        "Médicaments personnels",
        "Documents d'assurance voyage"
      ],
      ru: [
        "Удобная обувь для ходьбы на все 8 дней",
        "Солнцезащитные средства на весь маршрут",
        "Лёгкая многослойная одежда для более прохладных вечеров в Каире",
        "Фотоаппарат",
        "Адаптер для розетки (в Египте используются вилки типа C/F)",
        "Личные медикаменты",
        "Документы о туристической страховке"
      ],
      de: [
        "Bequeme Wanderschuhe für alle 8 Tage",
        "Sonnenschutz für die gesamte Reise",
        "Leichte Kleidungsschichten für die kühleren Abende in Kairo",
        "Kamera",
        "Steckdosenadapter (Ägypten verwendet Typ C/F-Stecker)",
        "Persönliche Medikamente",
        "Reiseversicherungsunterlagen"
      ]
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
      es: [
        "Todo el transporte interno está incluido, incluyendo el vuelo de Luxor a El Cairo.",
        "Se incluyen 7 noches de alojamiento (2 en Asuán, 2 en Luxor, 3 en El Cairo).",
        "Todas las comidas están incluidas durante los 8 días.",
        "Los vuelos internacionales hacia y desde Egipto no están incluidos.",
        "Las propinas para guías y conductores son habituales y muy apreciadas.",
        "Se requiere un pasaporte válido en todos los sitios y para el vuelo nacional."
      ],
      pt: [
        "Todo o transporte interno está incluído, incluindo o voo de Luxor para o Cairo.",
        "7 noites de hospedagem estão incluídas (2 em Assuão, 2 em Luxor, 3 no Cairo).",
        "Todas as refeições estão incluídas durante os 8 dias.",
        "Voos internacionais de ida e volta ao Egito não estão incluídos.",
        "Gorjetas para guias e motoristas são costumeiras e muito apreciadas.",
        "Um passaporte válido é exigido em todos os locais e para o voo doméstico."
      ],
      it: [
        "Tutti i trasporti interni sono inclusi, incluso il volo da Luxor al Cairo.",
        "Sono incluse 7 notti di alloggio (2 ad Assuan, 2 a Luxor, 3 al Cairo).",
        "Tutti i pasti sono inclusi durante gli 8 giorni.",
        "I voli internazionali da e per l'Egitto non sono inclusi.",
        "Le mance per le guide e i conducenti sono consuetudine e molto apprezzate.",
        "È richiesto un passaporto valido in tutti i siti e per il volo nazionale."
      ],
      fr: [
        "Tous les transports intérieurs sont inclus, y compris le vol entre Louxor et Le Caire.",
        "7 nuits d'hébergement sont incluses (2 à Assouan, 2 à Louxor, 3 au Caire).",
        "Tous les repas sont inclus pendant les 8 jours.",
        "Les vols internationaux à destination et en provenance d'Égypte ne sont pas inclus.",
        "Les pourboires pour les guides et les chauffeurs sont d'usage et grandement appréciés.",
        "Un passeport valide est requis sur tous les sites et pour le vol intérieur."
      ],
      ru: [
        "Весь внутренний транспорт включён, включая перелёт из Луксора в Каир.",
        "Включены 7 ночей проживания (2 в Асуане, 2 в Луксоре, 3 в Каире).",
        "Все приёмы пищи включены на протяжении всех 8 дней.",
        "Международные авиабилеты в Египет и обратно не включены.",
        "Чаевые гидам и водителям являются обычной практикой и очень приветствуются.",
        "На всех объектах и для внутреннего перелёта требуется действующий паспорт."
      ],
      de: [
        "Alle Inlandstransporte sind inbegriffen, einschließlich des Fluges von Luxor nach Kairo.",
        "7 Übernachtungen sind inbegriffen (2 in Assuan, 2 in Luxor, 3 in Kairo).",
        "Alle Mahlzeiten sind während der 8 Tage inbegriffen.",
        "Internationale Flüge nach und von Ägypten sind nicht inbegriffen.",
        "Trinkgeld für Reiseleiter und Fahrer ist üblich und wird sehr geschätzt.",
        "Ein gültiger Reisepass ist an allen Stätten und für den Inlandsflug erforderlich."
      ]
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
            "Your Egyptian adventure begins in Aswan, Egypt's southernmost major city, where the Nile runs wide and clear between granite boulders and golden desert hills, a far gentler introduction to the country than the noise and density of Cairo would offer. You'll be met at your hotel by your Aurevian Tours guide and given an orientation to the days ahead, a chance to ask questions and settle any nerves before the real journey begins. The afternoon is spent at the Temple of Philae — one of Egypt's most beautiful ancient sanctuaries, perched on an island in the Nile and dedicated to the goddess Isis, a fitting first stop for a trip that will trace this civilization's relationship with its gods all the way north to the pyramids. In the evening, settle into your hotel and enjoy Aswan's warm, relaxed atmosphere, a gentle first night before eight days of temples, tombs, and monuments still to come.",
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
            "An early start for the most dramatic day of the tour: the drive south across the desert to Abu Simbel, where the colossal temples of Ramses II and Nefertari await, their statues visible from a remarkable distance against the pale stone of the cliffs. Carved into the mountainside over 3,000 years ago and relocated in the 1960s to save them from Lake Nasser's rising waters, these temples represent one of humanity's greatest achievements in both art and engineering, a double feat separated by three millennia but united in the same determination to defy time itself. Your guide brings their story to life before the return drive to Aswan, the desert highway carrying you back toward the comparative comfort of the city as the sun climbs higher over the dunes.",
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
            "Today you travel north from Aswan to Luxor by road, stopping at two of the Nile Valley's most impressive temples along the way, breaking up the journey with two of ancient Egypt's most remarkable architectural achievements rather than simply watching the desert pass by. At Kom Ombo, the extraordinary double temple dedicated to Sobek and Haroeris stands on a curve of the Nile, its symmetry as striking now as it must have been to ancient worshippers. At Edfu, the magnificent Temple of Horus — the best-preserved ancient temple in Egypt — awaits behind towering pylon gates, a site so intact it feels almost as if its priests might return at any moment. Arrive in Luxor in the late afternoon and check in to your hotel, the ancient city of Thebes spreading out before you on both banks of the river.",
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
            "Luxor's West Bank is the ancient burial ground of the pharaohs — a landscape of dry valleys and hidden tombs that remains one of the most extraordinary places on Earth, a place where the dead were given an entire necropolis stretching for miles along the desert edge. Today you'll visit the Valley of the Kings, the Mortuary Temple of Hatshepsut, and the Colossi of Memnon, with your guide unravelling the stories of the rulers buried beneath these hills, their names and deeds carved into walls meant to be read by gods rather than tourists, though the experience of standing before them today feels just as powerful regardless of the original audience.",
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
            "The morning is devoted to Karnak — one of the greatest temple complexes ever built — before a visit to the smaller but magnificent Luxor Temple in the heart of the city, a temple so central to modern Luxor that part of it has, at various points in history, shared its grounds with a mosque, a measure of just how continuously this ground has been considered sacred. In the afternoon, transfer to Luxor Airport for the domestic flight to Cairo, where you'll spend the final three nights of the tour, leaving behind the temple-dense landscape of Upper Egypt for the very different energy of the modern capital.",
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
            "The defining day of any visit to Egypt: the Pyramids of Giza and the Grand Egyptian Museum. Stand before the last surviving wonder of the ancient world, a monument so famous it can feel almost unreal to encounter in person, explore the sphinx with its weathered, enigmatic face, and then spend the afternoon in the world's largest archaeological museum, where Tutankhamun's complete golden treasures are displayed for the first time in their entirety, an assembly of objects so dazzling it has taken an entire purpose-built museum to properly house them.",
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
            "Cairo's historic layers extend far beyond the pharaonic era. Today you'll explore the city's remarkable Islamic and Coptic heritage — from the medieval minarets of Islamic Cairo, where minaret after minaret pierces the skyline above a thousand years of continuous urban life, to the ancient Christian churches of Old Cairo that predate Islam by centuries, hidden away in narrow lanes that feel a world apart from the grand boulevards of the modern city just a few minutes away.",
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
            "Your final morning in Egypt is free for any last-minute sightseeing or shopping before your transfer to Cairo International Airport, one last chance to wander a market stall, find a gift for someone back home, or simply sit somewhere quiet and let the trip settle in before the long flight ahead. Your Aurevian Tours guide will accompany you to the airport and assist with check-in, closing the loop on an extraordinary eight-day journey through the greatest civilization the ancient world produced, from the granite quarries of Aswan to the golden treasures of Cairo.",
          steps: [
            { time: "08:00", description: "Breakfast at the hotel." },
            { time: "09:00", description: "Free morning — optional visit to the Egyptian Museum in Tahrir Square (at your own expense), shopping in Zamalek, or relaxing at the hotel." },
            { time: "12:00", description: "Check out of hotel." },
            { time: "13:00", description: "Lunch included." },
            { time: "14:00", description: "Transfer to Cairo International Airport for your departure flight. Tour ends." },
          ],
        },
      ],
      es: [{
        day: 1,
        title: "Llegada a Asuán y Templo de Filé",
        description: "Su aventura egipcia comienza en Asuán, la ciudad principal más meridional de Egipto, donde el Nilo corre ancho y claro entre rocas de granito y colinas doradas del desierto, una introducción mucho más suave al país que el ruido y la densidad de El Cairo. Su guía de Aurevian Tours lo recibirá en su hotel y le dará una orientación sobre los días venideros, una oportunidad para hacer preguntas y calmar los nervios antes de que comience el verdadero viaje. La tarde se pasa en el Templo de Filé, uno de los santuarios antiguos más hermosos de Egipto, ubicado en una isla en el Nilo y dedicado a la diosa Isis, una primera parada apropiada para un viaje que rastreará la relación de esta civilización con sus dioses hasta llegar al norte, a las pirámides. Por la noche, instálese en su hotel y disfrute del cálido y relajado ambiente de Asuán, una suave primera noche antes de los ocho días de templos, tumbas y monumentos que están por llegar.",

        steps: [{
          time: "09:00",
          description: "Encuentro con su guía en su hotel en Asuán. Sesión informativa de orientación para todo el itinerario de 8 días."
        }, {
          time: "10:00",
          description: "Viaje al muelle de barcos de Shellal."
        }, {
          time: "10:15",
          description: "Lancha motora hacia la isla de Filé."
        }, {
          time: "10:30",
          description: "Visita guiada al Templo de Isis en Filé: explore el gran pilono, la casa del nacimiento, el patio delantero con columnas y el santuario interior."
        }, {
          time: "12:30",
          description: "Regreso a Asuán. Almuerzo incluido."
        }, {
          time: "14:00",
          description: "Tarde libre para explorar la Corniche de Asuán, el zoco local, o descansar en el hotel."
        }, {
          time: "19:30",
          description: "Cena incluida."
        }]
      }, {
        day: 2,
        title: "Excursión de un día a Abu Simbel",
        description: "Un comienzo temprano para el día más dramático del tour: el viaje hacia el sur a través del desierto hasta Abu Simbel, donde le esperan los colosales templos de Ramsés II y Nefertari, sus estatuas visibles desde una distancia notable contra la pálida piedra de los acantilados. Tallados en la ladera de la montaña hace más de 3,000 años y reubicados en la década de 1960 para salvarlos de las aguas crecientes del lago Nasser, estos templos representan uno de los mayores logros de la humanidad tanto en arte como en ingeniería, una doble hazaña separada por tres milenios pero unida por la misma determinación de desafiar al tiempo mismo. Su guía da vida a su historia antes del viaje de regreso a Asuán, con la carretera del desierto llevándolo de vuelta hacia la comodidad relativa de la ciudad mientras el sol sube más alto sobre las dunas.",

        steps: [{
          time: "04:00",
          description: "Recogida en el hotel para la salida del convoy antes del amanecer hacia Abu Simbel."
        }, {
          time: "07:30",
          description: "Llegada a Abu Simbel."
        }, {
          time: "08:00",
          description: "Visita guiada al Gran Templo de Ramsés II: las colosales estatuas de la fachada, la sala hipóstila y el santuario interior."
        }, {
          time: "09:15",
          description: "Visita guiada al Templo de Nefertari."
        }, {
          time: "10:00",
          description: "Tiempo libre en el sitio. Fotografía alrededor de los templos y la orilla del lago."
        }, {
          time: "10:30",
          description: "Salida de Abu Simbel para el viaje de regreso a Asuán."
        }, {
          time: "13:30",
          description: "Llegada a Asuán. Almuerzo incluido."
        }, {
          time: "15:00",
          description: "Resto del día libre en Asuán."
        }, {
          time: "19:30",
          description: "Cena incluida."
        }]
      }, {
        day: 3,
        title: "De Asuán a Luxor vía Kom Ombo y Edfu",
        description: "Hoy viaja hacia el norte desde Asuán a Luxor por carretera, deteniéndose en dos de los templos más impresionantes del valle del Nilo en el camino, dividiendo el viaje con dos de los logros arquitectónicos más notables del antiguo Egipto en lugar de simplemente ver pasar el desierto. En Kom Ombo, el extraordinario templo doble dedicado a Sobek y Haroeris se alza en una curva del Nilo, su simetría tan llamativa ahora como debió serlo para los antiguos adoradores. En Edfu, le espera el magnífico Templo de Horus, el templo antiguo mejor conservado de Egipto, detrás de imponentes puertas con pilonos, un sitio tan intacto que se siente casi como si sus sacerdotes pudieran regresar en cualquier momento. Llegue a Luxor a última hora de la tarde y haga el check-in en su hotel, con la antigua ciudad de Tebas extendiéndose ante usted en ambas orillas del río.",

        steps: [{
          time: "07:00",
          description: "Desayuno en el hotel. Check-out."
        }, {
          time: "08:00",
          description: "Salida de Asuán en vehículo privado en dirección norte."
        }, {
          time: "09:30",
          description: "Llegada a Kom Ombo. Visita guiada al templo doble y al Museo del Cocodrilo."
        }, {
          time: "11:00",
          description: "Salida hacia Edfu."
        }, {
          time: "12:00",
          description: "Llegada a Edfu. Carruaje tirado por caballos hacia el templo."
        }, {
          time: "12:30",
          description: "Visita guiada al Templo de Horus en Edfu."
        }, {
          time: "14:00",
          description: "Almuerzo incluido en Edfu."
        }, {
          time: "15:00",
          description: "Salida de Edfu y continuación hacia el norte, a Luxor."
        }, {
          time: "17:30",
          description: "Llegada a Luxor. Check-in en el hotel. Cena incluida."
        }]
      }, {
        day: 4,
        title: "Orilla Oeste de Luxor: Valle de los Reyes y Hatshepsut",
        description: "La Orilla Oeste de Luxor es el antiguo cementerio de los faraones, un paisaje de valles secos y tumbas ocultas que sigue siendo uno de los lugares más extraordinarios de la Tierra, un lugar donde a los muertos se les dio toda una necrópolis que se extiende por kilómetros a lo largo del borde del desierto. Hoy visitará el Valle de los Reyes, el Templo Funerario de Hatshepsut y los Colosos de Memnón, con su guía desentrañando las historias de los gobernantes enterrados bajo estas colinas, sus nombres y hazañas tallados en muros destinados a ser leídos por dioses en lugar de turistas, aunque la experiencia de estar de pie ante ellos hoy se siente igualmente poderosa sin importar la audiencia original.",

        steps: [{
          time: "07:00",
          description: "Desayuno en el hotel."
        }, {
          time: "08:00",
          description: "Cruce del Nilo hacia la Orilla Oeste."
        }, {
          time: "08:30",
          description: "Llegada al Valle de los Reyes. Visite tres tumbas reales con su guía."
        }, {
          time: "10:30",
          description: "Viaje al Templo Funerario de Hatshepsut en Deir el-Bahari."
        }, {
          time: "11:00",
          description: "Visita guiada al templo de Hatshepsut: las tres terrazas con columnas, los relieves pintados y el santuario interior."
        }, {
          time: "12:30",
          description: "Breve parada en los Colosos de Memnón."
        }, {
          time: "13:00",
          description: "Regreso a Luxor. Almuerzo incluido."
        }, {
          time: "15:00",
          description: "Tarde libre en Luxor: camine por la Corniche de la Orilla Este o visite el zoco de Luxor."
        }, {
          time: "19:30",
          description: "Cena incluida."
        }]
      }, {
        day: 5,
        title: "Orilla Este de Luxor: Karnak y Templo de Luxor, luego vuelo a El Cairo",
        description: "La mañana está dedicada a Karnak, uno de los mayores complejos de templos jamás construidos, antes de una visita al más pequeño pero magnífico Templo de Luxor en el corazón de la ciudad, un templo tan central para el Luxor moderno que parte de él ha compartido, en varios momentos de la historia, sus terrenos con una mezquita, una medida de cuán continuamente se ha considerado sagrado este terreno. Por la tarde, traslado al Aeropuerto de Luxor para el vuelo nacional a El Cairo, donde pasará las últimas tres noches del tour, dejando atrás el paisaje denso en templos del Alto Egipto por la energía muy diferente de la capital moderna.",

        steps: [{
          time: "07:00",
          description: "Desayuno en el hotel."
        }, {
          time: "08:00",
          description: "Traslado al complejo del Templo de Karnak."
        }, {
          time: "08:30",
          description: "Visita guiada a Karnak: la Avenida de las Esfinges, la Gran Sala Hipóstila, el Lago Sagrado y los obeliscos de Hatshepsut."
        }, {
          time: "11:00",
          description: "Viaje al Templo de Luxor en el centro de la ciudad."
        }, {
          time: "11:30",
          description: "Visita guiada al Templo de Luxor."
        }, {
          time: "13:00",
          description: "Regreso al hotel. Check-out. Almuerzo incluido."
        }, {
          time: "15:30",
          description: "Traslado al Aeropuerto de Luxor."
        }, {
          time: "17:30",
          description: "Vuelo nacional a El Cairo."
        }, {
          time: "19:00",
          description: "Llegada a El Cairo. Traslado al hotel. Cena incluida."
        }]
      }, {
        day: 6,
        title: "Pirámides de Guiza, la Esfinge y el Gran Museo Egipcio",
        description: "El día definitorio de cualquier visita a Egipto: las Pirámides de Guiza y el Gran Museo Egipcio. Párese ante la última maravilla superviviente del mundo antiguo, un monumento tan famoso que puede sentirse casi irreal encontrarlo en persona, explore la esfinge con su rostro desgastado y enigmático, y luego pase la tarde en el museo arqueológico más grande del mundo, donde los tesoros dorados completos de Tutankamón se exhiben por primera vez en su totalidad, una colección de objetos tan deslumbrante que ha requerido un museo entero construido especialmente para albergarlos adecuadamente.",

        steps: [{
          time: "07:00",
          description: "Desayuno en el hotel."
        }, {
          time: "08:00",
          description: "Traslado a la meseta de Guiza."
        }, {
          time: "08:30",
          description: "Visita guiada a las pirámides de Keops, Kefrén y Micerinos. Visite la Gran Esfinge y el Templo del Valle."
        }, {
          time: "11:00",
          description: "Paseo opcional en camello o caballo alrededor de la meseta (con costo adicional)."
        }, {
          time: "12:00",
          description: "Traslado al Gran Museo Egipcio."
        }, {
          time: "12:30",
          description: "Almuerzo incluido en el restaurante del museo."
        }, {
          time: "13:30",
          description: "Visita guiada al Gran Museo Egipcio: la Sala de las Momias Reales, la colección completa de Tutankamón, y lo más destacado de las galerías permanentes."
        }, {
          time: "16:30",
          description: "Regreso al hotel en El Cairo. Tarde libre para explorar Zamalek o el bazar de Khan el-Khalili."
        }, {
          time: "19:30",
          description: "Cena incluida."
        }]
      }, {
        day: 7,
        title: "El Cairo: patrimonio islámico y copto",
        description: "Las capas históricas de El Cairo se extienden mucho más allá de la era faraónica. Hoy explorará el notable patrimonio islámico y copto de la ciudad, desde los minaretes medievales del Cairo islámico, donde minarete tras minarete perfora el horizonte sobre mil años de vida urbana continua, hasta las antiguas iglesias cristianas del Viejo Cairo que preceden al Islam por siglos, escondidas en callejones estrechos que se sienten a un mundo de distancia de los grandes bulevares de la ciudad moderna a solo unos minutos.",

        steps: [{
          time: "08:00",
          description: "Desayuno en el hotel."
        }, {
          time: "09:00",
          description: "Traslado al Cairo islámico."
        }, {
          time: "09:30",
          description: "Visita guiada a la Ciudadela de Saladino y la Mezquita de Muhammad Ali: vistas panorámicas de El Cairo desde la fortaleza en la colina."
        }, {
          time: "11:00",
          description: "Paseo por el medieval bazar de Khan el-Khalili y las calles del Cairo islámico: las históricas mezquitas y monumentos de la calle Al-Muizz."
        }, {
          time: "13:00",
          description: "Almuerzo incluido en un restaurante tradicional del Cairo islámico."
        }, {
          time: "14:30",
          description: "Traslado al Cairo copto (Viejo Cairo)."
        }, {
          time: "15:00",
          description: "Visita guiada al barrio copto: la Iglesia Colgante (Al-Muallaqah), la Iglesia de San Sergio, la Sinagoga Ben Ezra y el Museo Copto."
        }, {
          time: "17:30",
          description: "Regreso al hotel. Tarde libre."
        }, {
          time: "19:30",
          description: "Cena incluida."
        }]
      }, {
        day: 8,
        title: "El Cairo: última mañana y salida",
        description: "Su última mañana en Egipto queda libre para cualquier visita turística o compras de último momento antes de su traslado al Aeropuerto Internacional de El Cairo, una última oportunidad para recorrer un puesto de mercado, encontrar un regalo para alguien en casa, o simplemente sentarse en algún lugar tranquilo y dejar que el viaje se asiente antes del largo vuelo que le espera. Su guía de Aurevian Tours lo acompañará al aeropuerto y le ayudará con el check-in, cerrando el círculo de un extraordinario viaje de ocho días a través de la mayor civilización que produjo el mundo antiguo, desde las canteras de granito de Asuán hasta los tesoros dorados de El Cairo.",

        steps: [{
          time: "08:00",
          description: "Desayuno en el hotel."
        }, {
          time: "09:00",
          description: "Mañana libre: visita opcional al Museo Egipcio en la plaza Tahrir (por cuenta propia), compras en Zamalek, o relajación en el hotel."
        }, {
          time: "12:00",
          description: "Check-out del hotel."
        }, {
          time: "13:00",
          description: "Almuerzo incluido."
        }, {
          time: "14:00",
          description: "Traslado al Aeropuerto Internacional de El Cairo para su vuelo de salida. Fin del tour."
        }]
      }],
      pt: [{
        day: 1,
        title: "Chegada a Assuão e Templo de File",
        description: "Sua aventura egípcia começa em Assuão, a maior cidade mais ao sul do Egito, onde o Nilo corre largo e claro entre rochas de granito e colinas douradas do deserto, uma introdução muito mais suave ao país do que o ruído e a densidade do Cairo. Você será recebido em seu hotel pelo guia da Aurevian Tours e receberá uma orientação sobre os dias seguintes, uma chance de fazer perguntas e acalmar os nervos antes que a verdadeira jornada comece. A tarde é passada no Templo de File — um dos mais belos santuários antigos do Egito, situado em uma ilha no Nilo e dedicado à deusa Ísis, uma primeira parada apropriada para uma viagem que traçará a relação desta civilização com seus deuses até chegar ao norte, às pirâmides. À noite, instale-se em seu hotel e aproveite a atmosfera calorosa e relaxada de Assuão, uma suave primeira noite antes dos oito dias de templos, tumbas e monumentos que ainda estão por vir.",

        steps: [{
          time: "09:00",
          description: "Encontro com seu guia em seu hotel em Assuão. Briefing de orientação para todo o itinerário de 8 dias."
        }, {
          time: "10:00",
          description: "Trajeto até o cais de barcos de Shellal."
        }, {
          time: "10:15",
          description: "Barco a motor até a Ilha de File."
        }, {
          time: "10:30",
          description: "Tour guiado pelo Templo de Ísis em File — explore o grande pilone, a casa do nascimento, o pátio dianteiro com colunas e o santuário interior."
        }, {
          time: "12:30",
          description: "Retorno a Assuão. Almoço incluído."
        }, {
          time: "14:00",
          description: "Tarde livre para explorar a Corniche de Assuão, o mercado local, ou descansar no hotel."
        }, {
          time: "19:30",
          description: "Jantar incluído."
        }]
      }, {
        day: 2,
        title: "Excursão de um dia a Abu Simbel",
        description: "Um início bem cedo para o dia mais marcante do tour — o trajeto para o sul através do deserto até Abu Simbel, onde os colossais templos de Ramsés II e Nefertari aguardam, suas estátuas visíveis a uma distância notável contra a pedra pálida das falésias. Esculpidos na encosta da montanha há mais de 3.000 anos e realocados na década de 1960 para salvá-los das águas crescentes do Lago Nasser, esses templos representam uma das maiores conquistas da humanidade tanto em arte quanto em engenharia, um feito duplo separado por três milênios, mas unido pela mesma determinação de desafiar o próprio tempo. Seu guia traz a história deles à vida antes do trajeto de retorno a Assuão, com a estrada do deserto levando você de volta ao conforto relativo da cidade enquanto o sol sobe mais alto sobre as dunas.",

        steps: [{
          time: "04:00",
          description: "Busca no hotel para a partida do comboio antes do amanhecer rumo a Abu Simbel."
        }, {
          time: "07:30",
          description: "Chegada a Abu Simbel."
        }, {
          time: "08:00",
          description: "Tour guiado pelo Grande Templo de Ramsés II — as colossais estátuas da fachada, o salão hipostilo e o santuário interior."
        }, {
          time: "09:15",
          description: "Tour guiado pelo Templo de Nefertari."
        }, {
          time: "10:00",
          description: "Tempo livre no local. Fotografia em torno dos templos e à beira do lago."
        }, {
          time: "10:30",
          description: "Partida de Abu Simbel para o trajeto de retorno a Assuão."
        }, {
          time: "13:30",
          description: "Chegada a Assuão. Almoço incluído."
        }, {
          time: "15:00",
          description: "Resto do dia livre em Assuão."
        }, {
          time: "19:30",
          description: "Jantar incluído."
        }]
      }, {
        day: 3,
        title: "De Assuão a Luxor via Kom Ombo e Edfu",
        description: "Hoje você viaja para o norte de Assuão a Luxor por estrada, parando em dois dos templos mais impressionantes do Vale do Nilo no caminho, dividindo a jornada com duas das mais notáveis realizações arquitetônicas do Egito Antigo, em vez de simplesmente ver o deserto passar. Em Kom Ombo, o extraordinário templo duplo dedicado a Sobek e Haroéris se ergue em uma curva do Nilo, sua simetria tão impressionante hoje quanto deve ter sido para os antigos devotos. Em Edfu, o magnífico Templo de Hórus — o templo antigo mais bem preservado do Egito — aguarda atrás de imponentes portões em forma de pilone, um sítio tão intacto que parece quase que seus sacerdotes poderiam retornar a qualquer momento. Chegue a Luxor no final da tarde e faça o check-in em seu hotel, com a antiga cidade de Tebas se estendendo diante de você em ambas as margens do rio.",

        steps: [{
          time: "07:00",
          description: "Café da manhã no hotel. Check-out."
        }, {
          time: "08:00",
          description: "Partida de Assuão em veículo privado rumo ao norte."
        }, {
          time: "09:30",
          description: "Chegada a Kom Ombo. Tour guiado pelo templo duplo e pelo Museu do Crocodilo."
        }, {
          time: "11:00",
          description: "Partida para Edfu."
        }, {
          time: "12:00",
          description: "Chegada a Edfu. Carruagem puxada por cavalos até o templo."
        }, {
          time: "12:30",
          description: "Tour guiado pelo Templo de Hórus em Edfu."
        }, {
          time: "14:00",
          description: "Almoço incluído em Edfu."
        }, {
          time: "15:00",
          description: "Partida de Edfu e continuação para o norte, até Luxor."
        }, {
          time: "17:30",
          description: "Chegada a Luxor. Check-in no hotel. Jantar incluído."
        }]
      }, {
        day: 4,
        title: "Margem Ocidental de Luxor — Vale dos Reis e Hatshepsut",
        description: "A Margem Ocidental de Luxor é o antigo cemitério dos faraós — uma paisagem de vales secos e tumbas escondidas que permanece um dos lugares mais extraordinários da Terra, um local onde os mortos receberam uma necrópole inteira que se estende por quilômetros ao longo da borda do deserto. Hoje você visitará o Vale dos Reis, o Templo Funerário de Hatshepsut e os Colossos de Memnon, com seu guia desvendando as histórias dos governantes enterrados sob essas colinas, seus nomes e feitos esculpidos em paredes destinadas a serem lidas por deuses, e não por turistas, embora a experiência de estar diante deles hoje seja igualmente poderosa, independentemente do público original.",

        steps: [{
          time: "07:00",
          description: "Café da manhã no hotel."
        }, {
          time: "08:00",
          description: "Travessia do Nilo até a Margem Ocidental."
        }, {
          time: "08:30",
          description: "Chegada ao Vale dos Reis. Visite três tumbas reais com seu guia."
        }, {
          time: "10:30",
          description: "Trajeto até o Templo Funerário de Hatshepsut em Deir el-Bahari."
        }, {
          time: "11:00",
          description: "Tour guiado pelo templo de Hatshepsut — os três terraços com colunas, relevos pintados e o santuário interior."
        }, {
          time: "12:30",
          description: "Breve parada nos Colossos de Memnon."
        }, {
          time: "13:00",
          description: "Retorno a Luxor. Almoço incluído."
        }, {
          time: "15:00",
          description: "Tarde livre em Luxor — caminhe pela orla da Margem Oriental ou visite o mercado de Luxor."
        }, {
          time: "19:30",
          description: "Jantar incluído."
        }]
      }, {
        day: 5,
        title: "Margem Oriental de Luxor — Karnak e Templo de Luxor, depois voo para o Cairo",
        description: "A manhã é dedicada a Karnak — um dos maiores complexos de templos já construídos — antes de uma visita ao menor, mas magnífico, Templo de Luxor, no coração da cidade, um templo tão central para a Luxor moderna que parte dele já compartilhou, em diversos momentos da história, seus terrenos com uma mesquita, uma medida de quão continuamente este terreno tem sido considerado sagrado. Na tarde, traslado até o Aeroporto de Luxor para o voo doméstico até o Cairo, onde você passará as três últimas noites do tour, deixando atrás a paisagem repleta de templos do Alto Egito pela energia bem diferente da capital moderna.",

        steps: [{
          time: "07:00",
          description: "Café da manhã no hotel."
        }, {
          time: "08:00",
          description: "Traslado até o Complexo do Templo de Karnak."
        }, {
          time: "08:30",
          description: "Tour guiado por Karnak — a Avenida das Esfinges, o Grande Salão Hipostilo, o Lago Sagrado e os obeliscos de Hatshepsut."
        }, {
          time: "11:00",
          description: "Trajeto até o Templo de Luxor, no centro da cidade."
        }, {
          time: "11:30",
          description: "Tour guiado pelo Templo de Luxor."
        }, {
          time: "13:00",
          description: "Retorno ao hotel. Check-out. Almoço incluído."
        }, {
          time: "15:30",
          description: "Traslado até o Aeroporto de Luxor."
        }, {
          time: "17:30",
          description: "Voo doméstico até o Cairo."
        }, {
          time: "19:00",
          description: "Chegada ao Cairo. Traslado até o hotel. Jantar incluído."
        }]
      }, {
        day: 6,
        title: "Pirâmides de Gizé, Esfinge e Grande Museu Egípcio",
        description: "O dia definidor de qualquer visita ao Egito — as Pirâmides de Gizé e o Grande Museu Egípcio. Fique diante da última maravilha sobrevivente do mundo antigo, um monumento tão famoso que pode parecer quase irreal encontrá-lo pessoalmente, explore a esfinge com seu rosto desgastado e enigmático, e depois passe a tarde no maior museu arqueológico do mundo, onde os tesouros dourados completos de Tutancâmon são exibidos por inteiro pela primeira vez, uma coleção de objetos tão deslumbrante que exigiu um museu inteiro, construído especialmente, para abrigá-los adequadamente.",

        steps: [{
          time: "07:00",
          description: "Café da manhã no hotel."
        }, {
          time: "08:00",
          description: "Traslado até o Planalto de Gizé."
        }, {
          time: "08:30",
          description: "Tour guiado pelas pirâmides de Quéops, Quéfren e Miquerinos. Visite a Grande Esfinge e o Templo do Vale."
        }, {
          time: "11:00",
          description: "Passeio opcional de camelo ou cavalo ao redor do planalto (com custo adicional)."
        }, {
          time: "12:00",
          description: "Traslado até o Grande Museu Egípcio."
        }, {
          time: "12:30",
          description: "Almoço incluído no restaurante do museu."
        }, {
          time: "13:30",
          description: "Tour guiado pelo Grande Museu Egípcio — o Salão das Múmias Reais, a coleção completa de Tutancâmon, e os destaques das galerias permanentes."
        }, {
          time: "16:30",
          description: "Retorno ao hotel no Cairo. Noite livre para explorar Zamalek ou o bazar de Khan el-Khalili."
        }, {
          time: "19:30",
          description: "Jantar incluído."
        }]
      }, {
        day: 7,
        title: "Cairo — Patrimônio Islâmico e Copta",
        description: "As camadas históricas do Cairo se estendem muito além da era faraônica. Hoje você explorará o notável patrimônio islâmico e copta da cidade — desde os minaretes medievais do Cairo islâmico, onde minarete após minarete perfura o horizonte sobre mil anos de vida urbana contínua, até as antigas igrejas cristãs do Cairo Antigo, que antecedem o Islã por séculos, escondidas em ruas estreitas que parecem um mundo distante dos grandes bulevares da cidade moderna a apenas alguns minutos de distância.",

        steps: [{
          time: "08:00",
          description: "Café da manhã no hotel."
        }, {
          time: "09:00",
          description: "Traslado até o Cairo islâmico."
        }, {
          time: "09:30",
          description: "Tour guiado pela Cidadela de Saladino e a Mesquita de Muhammad Ali — vistas panorâmicas do Cairo a partir da fortaleza no topo da colina."
        }, {
          time: "11:00",
          description: "Caminhada pelo medieval bazar de Khan el-Khalili e pelas ruas do Cairo islâmico — as históricas mesquitas e monumentos da Rua Al-Muizz."
        }, {
          time: "13:00",
          description: "Almoço incluído em um restaurante tradicional no Cairo islâmico."
        }, {
          time: "14:30",
          description: "Traslado até o Cairo Copta (Cairo Antigo)."
        }, {
          time: "15:00",
          description: "Tour guiado pelo bairro copta — a Igreja Suspensa (Al-Muallaqah), a Igreja de São Sérgio, a Sinagoga Ben Ezra e o Museu Copta."
        }, {
          time: "17:30",
          description: "Retorno ao hotel. Noite livre."
        }, {
          time: "19:30",
          description: "Jantar incluído."
        }]
      }, {
        day: 8,
        title: "Cairo — Última manhã e partida",
        description: "Sua última manhã no Egito fica livre para qualquer passeio turístico ou compra de última hora antes do traslado até o Aeroporto Internacional do Cairo — uma última chance de percorrer uma banca de mercado, encontrar um presente para alguém em casa, ou simplesmente sentar-se em algum lugar tranquilo e deixar a viagem se assentar antes do longo voo que está por vir. Seu guia da Aurevian Tours irá acompanhá-lo até o aeroporto e ajudar com o check-in, encerrando o ciclo de uma extraordinária jornada de oito dias pela maior civilização que o mundo antigo produziu, desde as pedreiras de granito de Assuão até os tesouros dourados do Cairo.",

        steps: [{
          time: "08:00",
          description: "Café da manhã no hotel."
        }, {
          time: "09:00",
          description: "Manhã livre — visita opcional ao Museu Egípcio na Praça Tahrir (por conta própria), compras em Zamalek, ou relaxamento no hotel."
        }, {
          time: "12:00",
          description: "Check-out do hotel."
        }, {
          time: "13:00",
          description: "Almoço incluído."
        }, {
          time: "14:00",
          description: "Traslado até o Aeroporto Internacional do Cairo para seu voo de partida. Fim do tour."
        }]
      }],
      it: [{
        day: 1,
        title: "Arrivo ad Assuan e Tempio di File",
        description: "La vostra avventura egiziana inizia ad Assuan, la principale città più meridionale dell'Egitto, dove il Nilo scorre ampio e limpido tra massi di granito e colline dorate del deserto, un'introduzione molto più dolce al paese rispetto al rumore e alla densità del Cairo. Sarete accolti in hotel dalla vostra guida di Aurevian Tours, che vi fornirà un orientamento sui giorni successivi, un'occasione per fare domande e calmare i nervi prima che inizi il vero viaggio. Il pomeriggio si svolge al Tempio di File — uno dei più bei santuari antichi d'Egitto, situato su un'isola nel Nilo e dedicato alla dea Iside, una prima tappa appropriata per un viaggio che traccerà il rapporto di questa civiltà con i suoi dèi fino ad arrivare a nord, alle piramidi. In serata, sistematevi nel vostro hotel e godetevi l'atmosfera calda e rilassata di Assuan, una dolce prima notte prima degli otto giorni di templi, tombe e monumenti ancora da venire.",

        steps: [{
          time: "09:00",
          description: "Incontro con la guida nel vostro hotel ad Assuan. Briefing di orientamento per l'intero itinerario di 8 giorni."
        }, {
          time: "10:00",
          description: "Viaggio verso il molo delle barche di Shellal."
        }, {
          time: "10:15",
          description: "Motoscafo verso l'isola di File."
        }, {
          time: "10:30",
          description: "Visita guidata al Tempio di Iside a File — esplorate il grande pilone, la casa della nascita, il cortile colonnato anteriore e il santuario interno."
        }, {
          time: "12:30",
          description: "Ritorno ad Assuan. Pranzo incluso."
        }, {
          time: "14:00",
          description: "Pomeriggio libero per esplorare la Corniche di Assuan, il souk locale, o riposare in hotel."
        }, {
          time: "19:30",
          description: "Cena incluso."
        }]
      }, {
        day: 2,
        title: "Gita di un giorno ad Abu Simbel",
        description: "Una partenza anticipata per la giornata più spettacolare del tour — il viaggio verso sud attraverso il deserto fino ad Abu Simbel, dove vi attendono i colossali templi di Ramses II e Nefertari, le cui statue sono visibili da una distanza notevole contro la pietra pallida delle scogliere. Scolpiti nel fianco della montagna oltre 3.000 anni fa e trasferiti negli anni '60 per salvarli dalle acque crescenti del Lago Nasser, questi templi rappresentano una delle più grandi conquiste dell'umanità sia nell'arte che nell'ingegneria, una doppia impresa separata da tre millenni ma unita dalla stessa determinazione a sfidare il tempo stesso. La vostra guida darà vita alla loro storia prima del viaggio di ritorno ad Assuan, con l'autostrada del deserto che vi riporta verso il comfort relativo della città mentre il sole sale più alto sopra le dune.",

        steps: [{
          time: "04:00",
          description: "Ritiro in hotel per la partenza del convoglio prima dell'alba verso Abu Simbel."
        }, {
          time: "07:30",
          description: "Arrivo ad Abu Simbel."
        }, {
          time: "08:00",
          description: "Visita guidata al Grande Tempio di Ramses II — le colossali statue della facciata, la sala ipostila e il santuario interno."
        }, {
          time: "09:15",
          description: "Visita guidata al Tempio di Nefertari."
        }, {
          time: "10:00",
          description: "Tempo libero presso il sito. Fotografie attorno ai templi e sulla riva del lago."
        }, {
          time: "10:30",
          description: "Partenza da Abu Simbel per il viaggio di ritorno ad Assuan."
        }, {
          time: "13:30",
          description: "Arrivo ad Assuan. Pranzo incluso."
        }, {
          time: "15:00",
          description: "Resto della giornata libero ad Assuan."
        }, {
          time: "19:30",
          description: "Cena incluso."
        }]
      }, {
        day: 3,
        title: "Da Assuan a Luxor via Kom Ombo ed Edfu",
        description: "Oggi viaggiate verso nord da Assuan a Luxor su strada, fermandovi in due dei templi più impressionanti della Valle del Nilo lungo il percorso, suddividendo il viaggio con due dei più notevoli risultati architettonici dell'antico Egitto, invece di limitarvi a osservare il deserto scorrere. A Kom Ombo, lo straordinario tempio doppio dedicato a Sobek e Haroeris si erge su una curva del Nilo, la sua simmetria tanto sorprendente oggi quanto deve essere stata per gli antichi devoti. A Edfu, vi attende il magnifico Tempio di Horus — il tempio antico meglio conservato d'Egitto — dietro imponenti porte a pilone, un sito così intatto che sembra quasi che i suoi sacerdoti possano tornare in qualsiasi momento. Arrivate a Luxor nel tardo pomeriggio e fate il check-in nel vostro hotel, con l'antica città di Tebe che si estende davanti a voi su entrambe le rive del fiume.",

        steps: [{
          time: "07:00",
          description: "Colazione in hotel. Check-out."
        }, {
          time: "08:00",
          description: "Partenza da Assuan con veicolo privato in direzione nord."
        }, {
          time: "09:30",
          description: "Arrivo a Kom Ombo. Visita guidata al tempio doppio e al Museo dei Coccodrilli."
        }, {
          time: "11:00",
          description: "Partenza per Edfu."
        }, {
          time: "12:00",
          description: "Arrivo a Edfu. Carrozza a cavalli verso il tempio."
        }, {
          time: "12:30",
          description: "Visita guidata al Tempio di Horus a Edfu."
        }, {
          time: "14:00",
          description: "Pranzo incluso a Edfu."
        }, {
          time: "15:00",
          description: "Partenza da Edfu e continuazione verso nord, a Luxor."
        }, {
          time: "17:30",
          description: "Arrivo a Luxor. Check-in in hotel. Cena incluso."
        }]
      }, {
        day: 4,
        title: "Riva Occidentale di Luxor — Valle dei Re e Hatshepsut",
        description: "La Riva Occidentale di Luxor è l'antico luogo di sepoltura dei faraoni — un paesaggio di valli aride e tombe nascoste che resta uno dei luoghi più straordinari della Terra, un posto dove ai morti fu concessa un'intera necropoli estesa per chilometri lungo il margine del deserto. Oggi visiterete la Valle dei Re, il Tempio Funerario di Hatshepsut e i Colossi di Memnone, mentre la vostra guida svela le storie dei sovrani sepolti sotto queste colline, i loro nomi e le loro gesta scolpiti su pareti destinate a essere lette dagli dèi piuttosto che dai turisti, sebbene l'esperienza di trovarsi oggi davanti a essi risulti altrettanto potente, indipendentemente dal pubblico originario.",

        steps: [{
          time: "07:00",
          description: "Colazione in hotel."
        }, {
          time: "08:00",
          description: "Traversata del Nilo verso la Riva Occidentale."
        }, {
          time: "08:30",
          description: "Arrivo alla Valle dei Re. Visitate tre tombe reali con la vostra guida."
        }, {
          time: "10:30",
          description: "Viaggio verso il Tempio Funerario di Hatshepsut a Deir el-Bahari."
        }, {
          time: "11:00",
          description: "Visita guidata al tempio di Hatshepsut — le tre terrazze colonnate, i rilievi dipinti e il sacro santuario interno."
        }, {
          time: "12:30",
          description: "Breve sosta ai Colossi di Memnone."
        }, {
          time: "13:00",
          description: "Ritorno a Luxor. Pranzo incluso."
        }, {
          time: "15:00",
          description: "Pomeriggio libero a Luxor — passeggiata sul lungofiume della Riva Orientale o visita al souk di Luxor."
        }, {
          time: "19:30",
          description: "Cena incluso."
        }]
      }, {
        day: 5,
        title: "Riva Orientale di Luxor — Karnak e Tempio di Luxor, poi volo verso il Cairo",
        description: "La mattinata è dedicata a Karnak — uno dei più grandi complessi templari mai costruiti — prima di una visita al più piccolo ma magnifico Tempio di Luxor, nel cuore della città, un tempio così centrale per la Luxor moderna che parte di esso ha, in vari momenti della storia, condiviso il proprio terreno con una moschea, una prova di quanto continuativamente questo luogo sia stato considerato sacro. Nel pomeriggio, trasferimento all'aeroporto di Luxor per il volo nazionale verso il Cairo, dove passerete le ultime tre notti del tour, lasciando dietro di voi il paesaggio denso di templi dell'Alto Egitto per l'energia molto diversa della capitale moderna.",

        steps: [{
          time: "07:00",
          description: "Colazione in hotel."
        }, {
          time: "08:00",
          description: "Trasferimento al Complesso del Tempio di Karnak."
        }, {
          time: "08:30",
          description: "Visita guidata a Karnak — il Viale delle Sfingi, la Grande Sala Ipostila, il Lago Sacro e gli obelischi di Hatshepsut."
        }, {
          time: "11:00",
          description: "Viaggio verso il Tempio di Luxor nel centro città."
        }, {
          time: "11:30",
          description: "Visita guidata al Tempio di Luxor."
        }, {
          time: "13:00",
          description: "Ritorno in hotel. Check-out. Pranzo incluso."
        }, {
          time: "15:30",
          description: "Trasferimento all'aeroporto di Luxor."
        }, {
          time: "17:30",
          description: "Volo nazionale verso il Cairo."
        }, {
          time: "19:00",
          description: "Arrivo al Cairo. Trasferimento in hotel. Cena incluso."
        }]
      }, {
        day: 6,
        title: "Piramidi di Giza, Sfinge e Grande Museo Egizio",
        description: "Il giorno che definisce ogni visita all'Egitto — le Piramidi di Giza e il Grande Museo Egizio. Fermatevi davanti all'ultima meraviglia sopravvissuta del mondo antico, un monumento così famoso che incontrarlo di persona può sembrare quasi irreale, esplorate la sfinge con il suo volto eroso ed enigmatico, e poi passate il pomeriggio nel più grande museo archeologico del mondo, dove i tesori d'oro completi di Tutankhamon sono esposti per la prima volta nella loro interezza, un insieme di oggetti così abbagliante da richiedere un intero museo costruito appositamente per ospitarli adeguatamente.",

        steps: [{
          time: "07:00",
          description: "Colazione in hotel."
        }, {
          time: "08:00",
          description: "Trasferimento all'altopiano di Giza."
        }, {
          time: "08:30",
          description: "Visita guidata alle piramidi di Cheope, Chefren e Micerino. Visitate la Grande Sfinge e il Tempio della Valle."
        }, {
          time: "11:00",
          description: "Giro opzionale in cammello o a cavallo intorno all'altopiano (a costo aggiuntivo)."
        }, {
          time: "12:00",
          description: "Trasferimento al Grande Museo Egizio."
        }, {
          time: "12:30",
          description: "Pranzo incluso al ristorante del museo."
        }, {
          time: "13:30",
          description: "Visita guidata al Grande Museo Egizio — la Sala delle Mummie Reali, la collezione completa di Tutankhamon e i punti salienti delle gallerie permanenti."
        }, {
          time: "16:30",
          description: "Ritorno all'hotel del Cairo. Serata libera per esplorare Zamalek o il bazar di Khan el-Khalili."
        }, {
          time: "19:30",
          description: "Cena incluso."
        }]
      }, {
        day: 7,
        title: "Il Cairo — Patrimonio islamico e copto",
        description: "Gli strati storici del Cairo si estendono ben oltre l'era faraonica. Oggi esplorerete il notevole patrimonio islamico e copto della città — dai minareti medievali del Cairo islamico, dove un minareto dopo l'altro perfora lo skyline sopra mille anni di vita urbana continua, alle antiche chiese cristiane del Cairo Vecchio, che precedono l'Islam di secoli, nascoste in strette stradine che sembrano un mondo lontano dai grandi viali della città moderna a pochi minuti di distanza.",

        steps: [{
          time: "08:00",
          description: "Colazione in hotel."
        }, {
          time: "09:00",
          description: "Trasferimento al Cairo islamico."
        }, {
          time: "09:30",
          description: "Visita guidata alla Cittadella di Saladino e alla Moschea di Muhammad Ali — vedute panoramiche sul Cairo dalla fortezza in cima alla collina."
        }, {
          time: "11:00",
          description: "Passeggiata attraverso il medievale bazar di Khan el-Khalili e le strade del Cairo islamico — le storiche moschee e i monumenti di Via Al-Muizz."
        }, {
          time: "13:00",
          description: "Pranzo incluso in un ristorante tradizionale nel Cairo islamico."
        }, {
          time: "14:30",
          description: "Trasferimento al Cairo copto (Cairo Vecchio)."
        }, {
          time: "15:00",
          description: "Visita guidata al quartiere copto — la Chiesa Sospesa (Al-Muallaqah), la Chiesa di San Sergio, la Sinagoga Ben Ezra e il Museo Copto."
        }, {
          time: "17:30",
          description: "Ritorno in hotel. Serata libera."
        }, {
          time: "19:30",
          description: "Cena incluso."
        }]
      }, {
        day: 8,
        title: "Il Cairo — Ultima mattinata e partenza",
        description: "La vostra ultima mattinata in Egitto è libera per qualsiasi visita turistica o shopping dell'ultimo minuto prima del trasferimento all'Aeroporto Internazionale del Cairo — un'ultima occasione per girovagare tra le bancarelle del mercato, trovare un regalo per qualcuno a casa, o semplicemente sedersi in un luogo tranquillo e lasciare che il viaggio si sedimenti prima del lungo volo che vi attende. La vostra guida di Aurevian Tours vi accompagnerà all'aeroporto e vi assisterà con il check-in, chiudendo il cerchio di uno straordinario viaggio di otto giorni attraverso la più grande civiltà prodotta dal mondo antico, dalle cave di granito di Assuan ai tesori d'oro del Cairo.",

        steps: [{
          time: "08:00",
          description: "Colazione in hotel."
        }, {
          time: "09:00",
          description: "Mattinata libera — visita opzionale al Museo Egizio in Piazza Tahrir (a proprio carico), shopping a Zamalek, o relax in hotel."
        }, {
          time: "12:00",
          description: "Check-out dall'hotel."
        }, {
          time: "13:00",
          description: "Pranzo incluso."
        }, {
          time: "14:00",
          description: "Trasferimento all'Aeroporto Internazionale del Cairo per il volo di partenza. Fine del tour."
        }]
      }],
      fr: [{
        day: 1,
        title: "Arrivée à Assouan et temple de Philae",
        description: "Votre aventure égyptienne commence à Assouan, la principale ville la plus méridionale d'Égypte, où le Nil s'étend large et limpide entre des blocs de granit et des collines désertiques dorées, une introduction bien plus douce au pays que le bruit et la densité du Caire. Vous serez accueilli à votre hôtel par votre guide Aurevian Tours, qui vous présentera les jours à venir, une occasion de poser des questions et d'apaiser toute nervosité avant que ne commence le véritable voyage. L'après-midi est consacré au temple de Philae — l'un des plus beaux sanctuaires antiques d'Égypte, perché sur une île du Nil et dédié à la déesse Isis, une première étape toute indiquée pour un voyage qui retracera la relation de cette civilisation avec ses dieux jusqu'au nord, vers les pyramides. Le soir, installez-vous dans votre hôtel et profitez de l'atmosphère chaleureuse et détendue d'Assouan, une douce première nuit avant les huit jours de temples, de tombes et de monuments encore à venir.",

        steps: [{
          time: "09:00",
          description: "Rencontre avec votre guide à votre hôtel à Assouan. Briefing d'orientation pour l'ensemble de l'itinéraire de 8 jours."
        }, {
          time: "10:00",
          description: "Trajet vers le quai d'embarquement de Shellal."
        }, {
          time: "10:15",
          description: "Bateau à moteur vers l'île de Philae."
        }, {
          time: "10:30",
          description: "Visite guidée du temple d'Isis à Philae — explorez le grand pylône, le mammisi (maison de naissance), la cour à colonnades et le sanctuaire intérieur."
        }, {
          time: "12:30",
          description: "Retour à Assouan. Déjeuner inclus."
        }, {
          time: "14:00",
          description: "Après-midi libre pour explorer la corniche d'Assouan, le souk local, ou se reposer à l'hôtel."
        }, {
          time: "19:30",
          description: "Dîner inclus."
        }]
      }, {
        day: 2,
        title: "Excursion d'une journée à Abou Simbel",
        description: "Un départ matinal pour la journée la plus saisissante de l'excursion — le trajet vers le sud à travers le désert jusqu'à Abou Simbel, où vous attendent les temples colossaux de Ramsès II et de Néfertari, leurs statues visibles à une distance remarquable contre la pierre pâle des falaises. Sculptés à flanc de montagne il y a plus de 3 000 ans et déplacés dans les années 1960 pour les sauver de la montée des eaux du lac Nasser, ces temples représentent l'un des plus grands exploits de l'humanité, à la fois artistique et technique, un double accomplissement séparé par trois millénaires mais uni par la même détermination à défier le temps lui-même. Votre guide fera revivre leur histoire avant le trajet de retour vers Assouan, l'autoroute du désert vous ramenant vers le confort relatif de la ville tandis que le soleil monte plus haut au-dessus des dunes.",

        steps: [{
          time: "04:00",
          description: "Prise en charge à l'hôtel pour le départ du convoi avant l'aube vers Abou Simbel."
        }, {
          time: "07:30",
          description: "Arrivée à Abou Simbel."
        }, {
          time: "08:00",
          description: "Visite guidée du Grand Temple de Ramsès II — les statues colossales de la façade, la salle hypostyle et le sanctuaire intérieur."
        }, {
          time: "09:15",
          description: "Visite guidée du temple de Néfertari."
        }, {
          time: "10:00",
          description: "Temps libre sur le site. Photographies autour des temples et au bord du lac."
        }, {
          time: "10:30",
          description: "Départ d'Abou Simbel pour le trajet de retour vers Assouan."
        }, {
          time: "13:30",
          description: "Arrivée à Assouan. Déjeuner inclus."
        }, {
          time: "15:00",
          description: "Reste de la journée libre à Assouan."
        }, {
          time: "19:30",
          description: "Dîner inclus."
        }]
      }, {
        day: 3,
        title: "D'Assouan à Louxor via Kom Ombo et Edfou",
        description: "Aujourd'hui, vous voyagez vers le nord d'Assouan à Louxor par la route, en vous arrêtant en chemin à deux des temples les plus impressionnants de la vallée du Nil, ponctuant le trajet par deux des réalisations architecturales les plus remarquables de l'Égypte antique, plutôt que de simplement regarder le désert défiler. À Kom Ombo, l'extraordinaire temple double dédié à Sobek et à Haroëris se dresse sur une courbe du Nil, sa symétrie aussi frappante aujourd'hui qu'elle a dû l'être pour les anciens fidèles. À Edfou, le magnifique temple d'Horus — le temple antique le mieux conservé d'Égypte — vous attend derrière d'imposants pylônes, un site si intact qu'on a presque l'impression que ses prêtres pourraient y revenir à tout moment. Arrivez à Louxor en fin d'après-midi et enregistrez-vous à votre hôtel, l'antique cité de Thèbes s'étendant devant vous sur les deux rives du fleuve.",

        steps: [{
          time: "07:00",
          description: "Petit-déjeuner à l'hôtel. Départ de l'hôtel."
        }, {
          time: "08:00",
          description: "Départ d'Assouan en véhicule privé en direction du nord."
        }, {
          time: "09:30",
          description: "Arrivée à Kom Ombo. Visite guidée du temple double et du musée des crocodiles."
        }, {
          time: "11:00",
          description: "Départ pour Edfou."
        }, {
          time: "12:00",
          description: "Arrivée à Edfou. Calèche tirée par des chevaux jusqu'au temple."
        }, {
          time: "12:30",
          description: "Visite guidée du temple d'Horus à Edfou."
        }, {
          time: "14:00",
          description: "Déjeuner inclus à Edfou."
        }, {
          time: "15:00",
          description: "Départ d'Edfou et poursuite vers le nord, jusqu'à Louxor."
        }, {
          time: "17:30",
          description: "Arrivée à Louxor. Enregistrement à l'hôtel. Dîner inclus."
        }]
      }, {
        day: 4,
        title: "Rive ouest de Louxor — Vallée des Rois et Hatchepsout",
        description: "La rive ouest de Louxor est l'ancien cimetière des pharaons — un paysage de vallées sèches et de tombes cachées qui demeure l'un des lieux les plus extraordinaires de la planète, un endroit où les morts disposaient d'une nécropole entière s'étendant sur des kilomètres le long de la lisière du désert. Aujourd'hui, vous visiterez la Vallée des Rois, le temple funéraire d'Hatchepsout et les colosses de Memnon, votre guide vous dévoilant les histoires des souverains enterrés sous ces collines, leurs noms et leurs exploits gravés sur des murs destinés à être lus par les dieux plutôt que par les touristes, bien que l'expérience de se tenir devant eux aujourd'hui demeure tout aussi puissante, quel que soit le public d'origine.",

        steps: [{
          time: "07:00",
          description: "Petit-déjeuner à l'hôtel."
        }, {
          time: "08:00",
          description: "Traversée du Nil vers la rive ouest."
        }, {
          time: "08:30",
          description: "Arrivée à la Vallée des Rois. Visitez trois tombes royales avec votre guide."
        }, {
          time: "10:30",
          description: "Trajet vers le temple funéraire d'Hatchepsout à Deir el-Bahari."
        }, {
          time: "11:00",
          description: "Visite guidée du temple d'Hatchepsout — les trois terrasses à colonnades, les reliefs peints et le sanctuaire intérieur."
        }, {
          time: "12:30",
          description: "Brève halte aux colosses de Memnon."
        }, {
          time: "13:00",
          description: "Retour à Louxor. Déjeuner inclus."
        }, {
          time: "15:00",
          description: "Après-midi libre à Louxor — promenade le long de la corniche de la rive est ou visite du souk de Louxor."
        }, {
          time: "19:30",
          description: "Dîner inclus."
        }]
      }, {
        day: 5,
        title: "Rive est de Louxor — Karnak et temple de Louxor, puis vol vers Le Caire",
        description: "La matinée est consacrée à Karnak — l'un des plus grands complexes de temples jamais construits — avant une visite du plus petit mais magnifique temple de Louxor, au cœur de la ville, un temple si central pour la Louxor moderne qu'une partie de celui-ci a, à diverses époques de l'histoire, partagé son enceinte avec une mosquée, preuve de la continuité avec laquelle ce lieu a été considéré comme sacré. Dans l'après-midi, transfert vers l'aéroport de Louxor pour le vol intérieur vers Le Caire, où vous passerez les trois dernières nuits de l'excursion, laissant derrière vous le paysage dense en temples de la Haute-Égypte pour l'énergie bien différente de la capitale moderne.",

        steps: [{
          time: "07:00",
          description: "Petit-déjeuner à l'hôtel."
        }, {
          time: "08:00",
          description: "Transfert vers le complexe du temple de Karnak."
        }, {
          time: "08:30",
          description: "Visite guidée de Karnak — l'allée des sphinx, la grande salle hypostyle, le lac sacré et les obélisques d'Hatchepsout."
        }, {
          time: "11:00",
          description: "Trajet vers le temple de Louxor, au centre-ville."
        }, {
          time: "11:30",
          description: "Visite guidée du temple de Louxor."
        }, {
          time: "13:00",
          description: "Retour à l'hôtel. Départ de l'hôtel. Déjeuner inclus."
        }, {
          time: "15:30",
          description: "Transfert vers l'aéroport de Louxor."
        }, {
          time: "17:30",
          description: "Vol intérieur vers Le Caire."
        }, {
          time: "19:00",
          description: "Arrivée au Caire. Transfert vers l'hôtel. Dîner inclus."
        }]
      }, {
        day: 6,
        title: "Pyramides de Gizeh, Sphinx et Grand Musée Égyptien",
        description: "La journée incontournable de toute visite en Égypte — les pyramides de Gizeh et le Grand Musée Égyptien. Tenez-vous devant la dernière merveille survivante du monde antique, un monument si célèbre qu'il peut sembler presque irréel de le rencontrer en personne, explorez le Sphinx avec son visage érodé et énigmatique, puis passez l'après-midi dans le plus grand musée archéologique du monde, où les trésors d'or complets de Toutânkhamon sont exposés pour la première fois dans leur intégralité, un ensemble d'objets si éblouissant qu'il a fallu tout un musée construit spécialement pour les abriter convenablement.",

        steps: [{
          time: "07:00",
          description: "Petit-déjeuner à l'hôtel."
        }, {
          time: "08:00",
          description: "Transfert vers le plateau de Gizeh."
        }, {
          time: "08:30",
          description: "Visite guidée des pyramides de Khéops, Khéphren et Mykérinos. Visite du Grand Sphinx et du temple de la vallée."
        }, {
          time: "11:00",
          description: "Promenade optionnelle à dos de chameau ou de cheval autour du plateau (en supplément)."
        }, {
          time: "12:00",
          description: "Transfert vers le Grand Musée Égyptien."
        }, {
          time: "12:30",
          description: "Déjeuner inclus au restaurant du musée."
        }, {
          time: "13:30",
          description: "Visite guidée du Grand Musée Égyptien — la salle des momies royales, la collection complète de Toutânkhamon, et les temps forts des galeries permanentes."
        }, {
          time: "16:30",
          description: "Retour à l'hôtel du Caire. Soirée libre pour explorer Zamalek ou le bazar de Khan el-Khalili."
        }, {
          time: "19:30",
          description: "Dîner inclus."
        }]
      }, {
        day: 7,
        title: "Le Caire — Patrimoine islamique et copte",
        description: "Les couches historiques du Caire vont bien au-delà de l'ère pharaonique. Aujourd'hui, vous explorerez le remarquable patrimoine islamique et copte de la ville — des minarets médiévaux du Caire islamique, où minaret après minaret perce l'horizon au-dessus de mille ans de vie urbaine continue, jusqu'aux anciennes églises chrétiennes du Vieux Caire, antérieures à l'islam de plusieurs siècles, dissimulées dans des ruelles étroites qui semblent à des années-lumière des grands boulevards de la ville moderne, à quelques minutes seulement.",

        steps: [{
          time: "08:00",
          description: "Petit-déjeuner à l'hôtel."
        }, {
          time: "09:00",
          description: "Transfert vers le Caire islamique."
        }, {
          time: "09:30",
          description: "Visite guidée de la citadelle de Saladin et de la mosquée Mohamed Ali — vues panoramiques sur Le Caire depuis la forteresse perchée sur la colline."
        }, {
          time: "11:00",
          description: "Promenade à travers le bazar médiéval de Khan el-Khalili et les rues du Caire islamique — les mosquées et monuments historiques de la rue Al-Muizz."
        }, {
          time: "13:00",
          description: "Déjeuner inclus dans un restaurant traditionnel du Caire islamique."
        }, {
          time: "14:30",
          description: "Transfert vers le Caire copte (le Vieux Caire)."
        }, {
          time: "15:00",
          description: "Visite guidée du quartier copte — l'église suspendue (Al-Muallaqah), l'église Saint-Serge, la synagogue Ben Ezra et le musée copte."
        }, {
          time: "17:30",
          description: "Retour à l'hôtel. Soirée libre."
        }, {
          time: "19:30",
          description: "Dîner inclus."
        }]
      }, {
        day: 8,
        title: "Le Caire — Dernière matinée et départ",
        description: "Votre dernière matinée en Égypte est libre pour toute visite ou achat de dernière minute avant votre transfert vers l'aéroport international du Caire — une dernière occasion de flâner devant un étal de marché, de trouver un cadeau pour quelqu'un à la maison, ou simplement de s'asseoir dans un endroit calme et de laisser le voyage s'imprégner avant le long vol à venir. Votre guide Aurevian Tours vous accompagnera à l'aéroport et vous assistera lors de l'enregistrement, bouclant ainsi la boucle d'un extraordinaire voyage de huit jours à travers la plus grande civilisation produite par le monde antique, des carrières de granit d'Assouan aux trésors d'or du Caire.",

        steps: [{
          time: "08:00",
          description: "Petit-déjeuner à l'hôtel."
        }, {
          time: "09:00",
          description: "Matinée libre — visite optionnelle du Musée égyptien sur la place Tahrir (à votre charge), shopping à Zamalek, ou détente à l'hôtel."
        }, {
          time: "12:00",
          description: "Départ de l'hôtel."
        }, {
          time: "13:00",
          description: "Déjeuner inclus."
        }, {
          time: "14:00",
          description: "Transfert vers l'aéroport international du Caire pour votre vol de départ. Fin de l'excursion."
        }]
      }],
      ru: [{
        day: 1,
        title: "Прибытие в Асуан и храм Филе",
        description: "Ваше египетское приключение начинается в Асуане — самом южном крупном городе Египта, где Нил течёт широко и прозрачно между гранитными валунами и золотистыми пустынными холмами, что является намного более мягким знакомством со страной, чем шум и плотность Каира. Вас встретит в отеле гид Aurevian Tours, который проведёт ориентационную беседу о предстоящих днях — возможность задать вопросы и успокоить нервы перед началом настоящего путешествия. День посвящён посещению храма Филе — одного из самых красивых древних святилищ Египта, расположенного на острове на Ниле и посвящённого богине Исиде, подходящей первой остановки для поездки, которая проследит отношения этой цивилизации с её богами вплоть до севера, до пирамид. Вечером расположитесь в своём отеле и насладитесь тёплой, спокойной атмосферой Асуана — мягким первым вечером перед восемью днями храмов, гробниц и памятников, которые ещё предстоят.",

        steps: [{
          time: "09:00",
          description: "Встреча с гидом в вашем отеле в Асуане. Ориентационный инструктаж по всему 8-дневному маршруту."
        }, {
          time: "10:00",
          description: "Поездка к причалу Шеллал."
        }, {
          time: "10:15",
          description: "Поездка на моторном катере до острова Филе."
        }, {
          time: "10:30",
          description: "Экскурсия с гидом по храму Исиды в Филе — большой пилон, дом рождения, колоннадный передний двор и внутреннее святилище."
        }, {
          time: "12:30",
          description: "Возвращение в Асуан. Обед включён."
        }, {
          time: "14:00",
          description: "Свободный день для прогулки по набережной Асуана, местному рынку или отдыха в отеле."
        }, {
          time: "19:30",
          description: "Ужин включён."
        }]
      }, {
        day: 2,
        title: "Однодневная поездка в Абу-Симбел",
        description: "Ранний старт для самого впечатляющего дня тура — поездка на юг через пустыню в Абу-Симбел, где вас ждут колоссальные храмы Рамсеса II и Нефертари, чьи статуи видны с поразительного расстояния на фоне бледного камня скал. Вырезанные в склоне горы более 3000 лет назад и перенесённые в 1960-х годах, чтобы спасти от поднимающихся вод озера Насер, эти храмы представляют одно из величайших достижений человечества как в искусстве, так и в инженерии — двойной подвиг, разделённый тремя тысячелетиями, но объединённый одинаковой решимостью противостоять самому времени. Гид оживит их историю перед обратной поездкой в Асуан — пустынное шоссе несёт вас обратно к относительному комфорту города, пока солнце поднимается выше над дюнами.",

        steps: [{
          time: "04:00",
          description: "Трансфер из отеля для отправления колонны перед рассветом в Абу-Симбел."
        }, {
          time: "07:30",
          description: "Прибытие в Абу-Симбел."
        }, {
          time: "08:00",
          description: "Экскурсия с гидом по Большому храму Рамсеса II — колоссальные статуи фасада, гипостильный зал и внутреннее святилище."
        }, {
          time: "09:15",
          description: "Экскурсия с гидом по храму Нефертари."
        }, {
          time: "10:00",
          description: "Свободное время на объекте. Фотографирование храмов и берега озера."
        }, {
          time: "10:30",
          description: "Отъезд из Абу-Симбела в обратный путь до Асуана."
        }, {
          time: "13:30",
          description: "Прибытие в Асуан. Обед включён."
        }, {
          time: "15:00",
          description: "Остаток дня свободен в Асуане."
        }, {
          time: "19:30",
          description: "Ужин включён."
        }]
      }, {
        day: 3,
        title: "Из Асуана в Луксор через Ком-Омбо и Эдфу",
        description: "Сегодня вы путешествуете на север из Асуана в Луксор по дороге, останавливаясь по пути у двух самых впечатляющих храмов долины Нила, разбавляя путь двумя самыми выдающимися архитектурными достижениями древнего Египта, а не просто наблюдая, как проносится пустыня. В Ком-Омбо необычный двойной храм, посвящённый Себеку и Хароерису, стоит на изгибе Нила, и его симметрия сегодня впечатляет так же, как, должно быть, впечатляла древних верующих. В Эдфу вас ждёт величественный храм Хора — лучше всего сохранившийся древний храм в Египте — за высокими воротами-пилонами, место настолько целое, что кажется, будто его жрецы могут вернуться в любой момент. Прибытие в Луксор во второй половине дня и регистрация в отеле, пока древний город Фивы раскинется перед вами на обоих берегах реки.",

        steps: [{
          time: "07:00",
          description: "Завтрак в отеле. Выезд из отеля."
        }, {
          time: "08:00",
          description: "Отъезд из Асуана на частном автомобиле в направлении севера."
        }, {
          time: "09:30",
          description: "Прибытие в Ком-Омбо. Экскурсия с гидом по двойному храму и Музею крокодилов."
        }, {
          time: "11:00",
          description: "Отъезд в Эдфу."
        }, {
          time: "12:00",
          description: "Прибытие в Эдфу. Поездка на конной повозке к храму."
        }, {
          time: "12:30",
          description: "Экскурсия с гидом по храму Хора в Эдфу."
        }, {
          time: "14:00",
          description: "Обед включён, в Эдфу."
        }, {
          time: "15:00",
          description: "Отъезд из Эдфу и продолжение пути на север, в Луксор."
        }, {
          time: "17:30",
          description: "Прибытие в Луксор. Регистрация в отеле. Ужин включён."
        }]
      }, {
        day: 4,
        title: "Западный берег Луксора — Долина царей и Хатшепсут",
        description: "Западный берег Луксора — древнее место погребения фараонов — пейзаж из сухих долин и скрытых гробниц, остающийся одним из самых удивительных мест на Земле, местом, где мёртвым была дана целая некрополь, простирающаяся на километры вдоль края пустыни. Сегодня вы посетите Долину царей, храм царицы Хатшепсут и колоссов Мемнона, и гид раскроет вам истории правителей, погребённых под этими холмами, чьи имена и деяния вырезаны на стенах, предназначенных для чтения богами, а не туристами, хотя опыт стоять перед ними сегодня ощущается столь же мощным, независимо от первоначальной аудитории.",

        steps: [{
          time: "07:00",
          description: "Завтрак в отеле."
        }, {
          time: "08:00",
          description: "Переправа через Нил на Западный берег."
        }, {
          time: "08:30",
          description: "Прибытие в Долину царей. Посещение трёх царских гробниц с гидом."
        }, {
          time: "10:30",
          description: "Поездка к храму царицы Хатшепсут в Дейр-эль-Бахри."
        }, {
          time: "11:00",
          description: "Экскурсия с гидом по храму Хатшепсут — три террасы с колоннадами, расписные рельефы и внутреннее святилище."
        }, {
          time: "12:30",
          description: "Короткая остановка у колоссов Мемнона."
        }, {
          time: "13:00",
          description: "Возвращение в Луксор. Обед включён."
        }, {
          time: "15:00",
          description: "Свободный день в Луксоре — прогулка по набережной Восточного берега или посещение рынка Луксора."
        }, {
          time: "19:30",
          description: "Ужин включён."
        }]
      }, {
        day: 5,
        title: "Восточный берег Луксора — Карнак и храм Луксора, затем перелёт в Каир",
        description: "Утро посвящено Карнаку — одному из величайших храмовых комплексов, когда-либо построенных, — а затем посещению меньшего, но величественного храма Луксора в центре города, храма, настолько важного для современного Луксора, что часть его в разные моменты истории делила свою территорию с мечетью — мера того, насколько непрерывно эта земля считалась священной. Во второй половине дня — трансфер в аэропорт Луксора на внутренний рейс до Каира, где вы проведёте последние три ночи тура, оставляя позади насыщенный храмами ландшафт Верхнего Египта ради совершенно иной энергии современной столицы.",

        steps: [{
          time: "07:00",
          description: "Завтрак в отеле."
        }, {
          time: "08:00",
          description: "Трансфер к комплексу Карнакского храма."
        }, {
          time: "08:30",
          description: "Экскурсия с гидом по Карнаку — Аллея сфинксов, Большой гипостильный зал, Священное озеро и обелиски Хатшепсут."
        }, {
          time: "11:00",
          description: "Поездка к храму Луксора в центре города."
        }, {
          time: "11:30",
          description: "Экскурсия с гидом по храму Луксора."
        }, {
          time: "13:00",
          description: "Возвращение в отель. Выезд из отеля. Обед включён."
        }, {
          time: "15:30",
          description: "Трансфер в аэропорт Луксора."
        }, {
          time: "17:30",
          description: "Внутренний рейс в Каир."
        }, {
          time: "19:00",
          description: "Прибытие в Каир. Трансфер в отель. Ужин включён."
        }]
      }, {
        day: 6,
        title: "Пирамиды Гизы, Сфинкс и Большой египетский музей",
        description: "Определяющий день любого визита в Египет — пирамиды Гизы и Большой египетский музей. Постойте перед последним сохранившимся чудом древнего мира — памятником настолько знаменитым, что встретить его лично может казаться почти невероятным, исследуйте сфинкса с его выветренным загадочным лицом, а затем проведите день во второй половине дня в крупнейшем археологическом музее мира, где впервые полностью выставлены золотые сокровища Тутанхамона — собрание предметов настолько ослепительное, что для их достойного размещения потребовался целый специально построенный музей.",

        steps: [{
          time: "07:00",
          description: "Завтрак в отеле."
        }, {
          time: "08:00",
          description: "Трансфер на плато Гиза."
        }, {
          time: "08:30",
          description: "Экскурсия с гидом по пирамидам Хеопса, Хефрена и Микерина. Посещение Большого сфинкса и храма в долине."
        }, {
          time: "11:00",
          description: "Дополнительная поездка на верблюде или лошади вокруг плато (за дополнительную плату)."
        }, {
          time: "12:00",
          description: "Трансфер в Большой египетский музей."
        }, {
          time: "12:30",
          description: "Обед включён, в ресторане музея."
        }, {
          time: "13:30",
          description: "Экскурсия с гидом по Большому египетскому музею — Зал царских мумий, полная коллекция Тутанхамона и основные экспонаты постоянных галерей."
        }, {
          time: "16:30",
          description: "Возвращение в отель в Каире. Свободный вечер для прогулки по Замалеку или базару Хан-эль-Халили."
        }, {
          time: "19:30",
          description: "Ужин включён."
        }]
      }, {
        day: 7,
        title: "Каир — исламское и коптское наследие",
        description: "Исторические слои Каира выходят далеко за пределы фараоновской эпохи. Сегодня вы исследуете удивительное исламское и коптское наследие города — от средневековых минаретов исламского Каира, где минарет за минаретом пронзают горизонт над тысячелетием непрерывной городской жизни, до древних христианских церквей Старого Каира, появившихся за столетия до ислама, скрытых в узких переулках, которые ощущаются совершенно другим миром по сравнению с широкими бульварами современного города, расположенными всего в нескольких минутах.",

        steps: [{
          time: "08:00",
          description: "Завтрак в отеле."
        }, {
          time: "09:00",
          description: "Трансфер в исламский Каир."
        }, {
          time: "09:30",
          description: "Экскурсия с гидом по Цитадели Салах ад-Дина и мечети Мухаммеда Али — панорамные виды на Каир с крепости на холме."
        }, {
          time: "11:00",
          description: "Прогулка по средневековому базару Хан-эль-Халили и улицам исламского Каира — исторические мечети и памятники улицы Аль-Муизз."
        }, {
          time: "13:00",
          description: "Обед включён, в традиционном ресторане исламского Каира."
        }, {
          time: "14:30",
          description: "Трансфер в коптский Каир (Старый Каир)."
        }, {
          time: "15:00",
          description: "Экскурсия с гидом по коптскому кварталу — Подвешенная церковь (Аль-Муаллака), церковь Святого Сергия, синагога Бен-Эзра и Коптский музей."
        }, {
          time: "17:30",
          description: "Возвращение в отель. Свободный вечер."
        }, {
          time: "19:30",
          description: "Ужин включён."
        }]
      }, {
        day: 8,
        title: "Каир — последнее утро и отъезд",
        description: "Ваше последнее утро в Египте свободно для любых последних осмотров достопримечательностей или покупок перед трансфером в международный аэропорт Каира — последняя возможность пройтись по рыночному прилавку, найти подарок для кого-то дома, или просто посидеть в тихом месте и дать поездке осесть перед долгим предстоящим полётом. Гид Aurevian Tours будет сопровождать вас в аэропорт и поможет с регистрацией, завершая круг удивительного восьмидневного путешествия через величайшую цивилизацию, созданную древним миром, от гранитных каменоломен Асуана до золотых сокровищ Каира.",

        steps: [{
          time: "08:00",
          description: "Завтрак в отеле."
        }, {
          time: "09:00",
          description: "Свободное утро — дополнительное посещение Египетского музея на площади Тахрир (за собственный счёт), покупки в Замалеке или отдых в отеле."
        }, {
          time: "12:00",
          description: "Выезд из отеля."
        }, {
          time: "13:00",
          description: "Обед включён."
        }, {
          time: "14:00",
          description: "Трансфер в международный аэропорт Каира на ваш вылет. Окончание тура."
        }]
      }],
      de: [{
        day: 1,
        title: "Ankunft in Assuan & Philae-Tempel",
        description: "Ihr ägyptisches Abenteuer beginnt in Assuan, Ägyptens südlichster Großstadt, wo der Nil breit und klar zwischen Granitfelsen und goldenen Wüstenhügeln fließt — eine weitaus sanftere Einführung in das Land als der Lärm und die Dichte Kairos. Sie werden in Ihrem Hotel von Ihrem Aurevian Tours-Reiseleiter empfangen und erhalten eine Orientierung für die kommenden Tage, eine Gelegenheit, Fragen zu stellen und etwaige Nervosität zu legen, bevor die eigentliche Reise beginnt. Der Nachmittag wird im Tempel von Philae verbracht — einem der schönsten antiken Heiligtümer Ägyptens, auf einer Insel im Nil gelegen und der Göttin Isis gewidmet, ein passender erster Stopp für eine Reise, die die Beziehung dieser Zivilisation zu ihren Göttern bis hinauf in den Norden zu den Pyramiden nachzeichnen wird. Am Abend richten Sie sich in Ihrem Hotel ein und genießen die warme, entspannte Atmosphäre Assuans — ein sanfter erster Abend vor den acht Tagen voller Tempel, Gräber und Monumente, die noch bevorstehen.",

        steps: [{
          time: "09:00",
          description: "Treffen mit Ihrem Reiseleiter in Ihrem Hotel in Assuan. Orientierungsbriefing für die gesamte 8-tägige Route."
        }, {
          time: "10:00",
          description: "Fahrt zum Bootsanleger von Schellal."
        }, {
          time: "10:15",
          description: "Motorboot zur Insel Philae."
        }, {
          time: "10:30",
          description: "Geführte Tour durch den Isis-Tempel auf Philae — erkunden Sie den großen Pylon, das Geburtshaus, den Säulenvorhof und das innere Heiligtum."
        }, {
          time: "12:30",
          description: "Rückkehr nach Assuan. Mittagessen inbegriffen."
        }, {
          time: "14:00",
          description: "Freier Nachmittag, um die Uferpromenade von Assuan, den lokalen Souk zu erkunden oder im Hotel zu entspannen."
        }, {
          time: "19:30",
          description: "Abendessen inbegriffen."
        }]
      }, {
        day: 2,
        title: "Tagesausflug nach Abu Simbel",
        description: "Ein früher Start für den dramatischsten Tag der Tour — die Fahrt nach Süden durch die Wüste nach Abu Simbel, wo die kolossalen Tempel von Ramses II. und Nefertari warten, deren Statuen aus beachtlicher Entfernung vor dem hellen Gestein der Klippen sichtbar sind. Vor über 3.000 Jahren in den Berghang gehauen und in den 1960er-Jahren versetzt, um sie vor den steigenden Wassern des Nassersees zu retten, stellen diese Tempel eine der größten Errungenschaften der Menschheit in Kunst und Ingenieurwesen dar — eine doppelte Leistung, getrennt durch drei Jahrtausende, aber vereint durch dieselbe Entschlossenheit, der Zeit selbst zu widerstehen. Ihr Reiseleiter erweckt ihre Geschichte zum Leben, bevor es zur Rückfahrt nach Assuan geht — die Wüstenautobahn bringt Sie zurück zum relativen Komfort der Stadt, während die Sonne höher über den Dünen aufsteigt.",

        steps: [{
          time: "04:00",
          description: "Hotelabholung für die Abfahrt des Konvois vor Sonnenaufgang nach Abu Simbel."
        }, {
          time: "07:30",
          description: "Ankunft in Abu Simbel."
        }, {
          time: "08:00",
          description: "Geführte Tour durch den Großen Tempel von Ramses II. — die kolossalen Fassadenstatuen, der Säulensaal und das innere Heiligtum."
        }, {
          time: "09:15",
          description: "Geführte Tour durch den Tempel der Nefertari."
        }, {
          time: "10:00",
          description: "Freizeit an der Stätte. Fotografieren um die Tempel und am Seeufer."
        }, {
          time: "10:30",
          description: "Abfahrt von Abu Simbel für die Rückfahrt nach Assuan."
        }, {
          time: "13:30",
          description: "Ankunft in Assuan. Mittagessen inbegriffen."
        }, {
          time: "15:00",
          description: "Restlicher Tag frei in Assuan."
        }, {
          time: "19:30",
          description: "Abendessen inbegriffen."
        }]
      }, {
        day: 3,
        title: "Von Assuan nach Luxor über Kom Ombo & Edfu",
        description: "Heute reisen Sie auf dem Landweg von Assuan nach Norden nach Luxor und halten dabei an zwei der beeindruckendsten Tempel des Niltals, wodurch die Reise durch zwei der bemerkenswertesten architektonischen Leistungen des alten Ägypten unterbrochen wird, anstatt einfach nur die Wüste vorbeiziehen zu sehen. In Kom Ombo erhebt sich der außergewöhnliche Doppeltempel, der Sobek und Haroeris gewidmet ist, an einer Biegung des Nils, seine Symmetrie heute genauso beeindruckend wie sie es für die antiken Gläubigen gewesen sein muss. In Edfu erwartet Sie der prächtige Horus-Tempel — der am besten erhaltene antike Tempel Ägyptens — hinter hoch aufragenden Pylontoren, eine Stätte, die so intakt ist, dass es sich fast anfühlt, als könnten ihre Priester jeden Moment zurückkehren. Erreichen Sie Luxor am späten Nachmittag und checken Sie in Ihrem Hotel ein, während sich die antike Stadt Theben vor Ihnen auf beiden Ufern des Flusses ausbreitet.",

        steps: [{
          time: "07:00",
          description: "Frühstück im Hotel. Check-out."
        }, {
          time: "08:00",
          description: "Abfahrt von Assuan mit einem privaten Fahrzeug nach Norden."
        }, {
          time: "09:30",
          description: "Ankunft in Kom Ombo. Geführte Tour durch den Doppeltempel und das Krokodilmuseum."
        }, {
          time: "11:00",
          description: "Abfahrt nach Edfu."
        }, {
          time: "12:00",
          description: "Ankunft in Edfu. Pferdekutsche zum Tempel."
        }, {
          time: "12:30",
          description: "Geführte Tour durch den Horus-Tempel in Edfu."
        }, {
          time: "14:00",
          description: "Mittagessen inbegriffen, in Edfu."
        }, {
          time: "15:00",
          description: "Abfahrt von Edfu und Weiterfahrt nach Norden, nach Luxor."
        }, {
          time: "17:30",
          description: "Ankunft in Luxor. Check-in im Hotel. Abendessen inbegriffen."
        }]
      }, {
        day: 4,
        title: "Luxors Westufer — Tal der Könige & Hatschepsut",
        description: "Luxors Westufer ist die antike Begräbnisstätte der Pharaonen — eine Landschaft aus trockenen Tälern und verborgenen Gräbern, die einer der außergewöhnlichsten Orte der Erde bleibt, ein Ort, an dem den Toten eine gesamte Nekropole gewidmet wurde, die sich über Kilometer am Wüstenrand entlangzieht. Heute besuchen Sie das Tal der Könige, den Totentempel der Hatschepsut und die Memnonkolosse, während Ihr Reiseleiter die Geschichten der unter diesen Hügeln begrabenen Herrscher entfaltet, deren Namen und Taten in Wände gemeißelt wurden, die eigentlich von Göttern und nicht von Touristen gelesen werden sollten — wobei sich die Erfahrung, heute vor ihnen zu stehen, unabhängig vom ursprünglichen Publikum genauso eindrucksvoll anfühlt.",

        steps: [{
          time: "07:00",
          description: "Frühstück im Hotel."
        }, {
          time: "08:00",
          description: "Überfahrt über den Nil zum Westufer."
        }, {
          time: "08:30",
          description: "Ankunft im Tal der Könige. Besichtigung von drei königlichen Gräbern mit Ihrem Reiseleiter."
        }, {
          time: "10:30",
          description: "Fahrt zum Totentempel der Hatschepsut in Deir el-Bahari."
        }, {
          time: "11:00",
          description: "Geführte Tour durch den Tempel der Hatschepsut — die drei Säulenterrassen, bemalte Reliefs und das innere Sanktuarium."
        }, {
          time: "12:30",
          description: "Kurzer Stopp an den Memnonkolossen."
        }, {
          time: "13:00",
          description: "Rückkehr nach Luxor. Mittagessen inbegriffen."
        }, {
          time: "15:00",
          description: "Nachmittag frei in Luxor — Spaziergang an der Promenade des Ostufers oder Besuch des Luxor-Souks."
        }, {
          time: "19:30",
          description: "Abendessen inbegriffen."
        }]
      }, {
        day: 5,
        title: "Luxors Ostufer — Karnak & Luxor-Tempel, dann Flug nach Kairo",
        description: "Der Vormittag ist Karnak gewidmet — einem der größten je errichteten Tempelkomplexe — bevor es zu einem Besuch des kleineren, aber prächtigen Luxor-Tempels im Herzen der Stadt geht, ein Tempel, der für das moderne Luxor so zentral ist, dass ein Teil davon im Laufe der Geschichte sein Gelände zeitweise mit einer Moschee teilte — ein Beweis dafür, wie ununterbrochen dieser Ort als heilig betrachtet wurde. Am Nachmittag erfolgt der Transfer zum Flughafen Luxor für den Inlandsflug nach Kairo, wo Sie die letzten drei Nächte der Tour verbringen werden — die tempelreiche Landschaft Oberägyptens hinter sich lassend für die ganz andere Energie der modernen Hauptstadt.",

        steps: [{
          time: "07:00",
          description: "Frühstück im Hotel."
        }, {
          time: "08:00",
          description: "Transfer zum Karnak-Tempelkomplex."
        }, {
          time: "08:30",
          description: "Geführte Tour durch Karnak — die Sphinxallee, die Große Säulenhalle, der Heilige See und die Obelisken der Hatschepsut."
        }, {
          time: "11:00",
          description: "Fahrt zum Luxor-Tempel im Stadtzentrum."
        }, {
          time: "11:30",
          description: "Geführte Tour durch den Luxor-Tempel."
        }, {
          time: "13:00",
          description: "Rückkehr zum Hotel. Check-out. Mittagessen inbegriffen."
        }, {
          time: "15:30",
          description: "Transfer zum Flughafen Luxor."
        }, {
          time: "17:30",
          description: "Inlandsflug nach Kairo."
        }, {
          time: "19:00",
          description: "Ankunft in Kairo. Transfer zum Hotel. Abendessen inbegriffen."
        }]
      }, {
        day: 6,
        title: "Pyramiden von Gizeh, Sphinx & Großes Ägyptisches Museum",
        description: "Der prägende Tag jedes Ägyptenbesuchs — die Pyramiden von Gizeh und das Große Ägyptische Museum. Stehen Sie vor dem letzten erhaltenen Weltwunder der Antike, einem Monument, das so berühmt ist, dass es sich fast unwirklich anfühlen kann, ihm persönlich zu begegnen, erkunden Sie die Sphinx mit ihrem verwitterten, rätselhaften Gesicht, und verbringen Sie dann den Nachmittag im größten archäologischen Museum der Welt, wo Tutanchamuns vollständige goldene Schätze erstmals in ihrer Gesamtheit ausgestellt werden — eine derart beeindruckende Sammlung von Objekten, dass ein ganzes, speziell errichtetes Museum erforderlich war, um sie angemessen zu beherbergen.",

        steps: [{
          time: "07:00",
          description: "Frühstück im Hotel."
        }, {
          time: "08:00",
          description: "Transfer zum Plateau von Gizeh."
        }, {
          time: "08:30",
          description: "Geführte Tour durch die Pyramiden von Cheops, Chephren und Mykerinos. Besuch der Großen Sphinx und des Taltempels."
        }, {
          time: "11:00",
          description: "Optionale Kamel- oder Pferderitt rund um das Plateau (gegen Aufpreis)."
        }, {
          time: "12:00",
          description: "Transfer zum Großen Ägyptischen Museum."
        }, {
          time: "12:30",
          description: "Mittagessen inbegriffen, im Restaurant des Museums."
        }, {
          time: "13:30",
          description: "Geführte Tour durch das Große Ägyptische Museum — der Saal der königlichen Mumien, die vollständige Tutanchamun-Sammlung und Höhepunkte der Dauerausstellungen."
        }, {
          time: "16:30",
          description: "Rückkehr zum Hotel in Kairo. Freier Abend, um Zamalek oder den Khan-el-Khalili-Bazar zu erkunden."
        }, {
          time: "19:30",
          description: "Abendessen inbegriffen."
        }]
      }, {
        day: 7,
        title: "Kairo — Islamisches & Koptisches Erbe",
        description: "Kairos historische Schichten reichen weit über die pharaonische Ära hinaus. Heute erkunden Sie das bemerkenswerte islamische und koptische Erbe der Stadt — von den mittelalterlichen Minaretten des islamischen Kairo, wo Minarett nach Minarett die Skyline über tausend Jahre ununterbrochenes Stadtleben durchbricht, bis zu den antiken christlichen Kirchen von Alt-Kairo, die dem Islam um Jahrhunderte vorausgehen und versteckt in engen Gassen liegen, die sich nur wenige Minuten von den großen Boulevards der modernen Stadt entfernt wie eine andere Welt anfühlen.",

        steps: [{
          time: "08:00",
          description: "Frühstück im Hotel."
        }, {
          time: "09:00",
          description: "Transfer ins islamische Kairo."
        }, {
          time: "09:30",
          description: "Geführte Tour durch die Zitadelle von Saladin und die Muhammad-Ali-Moschee — Panoramablicke über Kairo von der Festung auf dem Hügel."
        }, {
          time: "11:00",
          description: "Spaziergang durch den mittelalterlichen Khan-el-Khalili-Bazar und die Straßen des islamischen Kairo — die historischen Moscheen und Monumente der Al-Muizz-Straße."
        }, {
          time: "13:00",
          description: "Mittagessen inbegriffen, in einem traditionellen Restaurant im islamischen Kairo."
        }, {
          time: "14:30",
          description: "Transfer ins koptische Kairo (Alt-Kairo)."
        }, {
          time: "15:00",
          description: "Geführte Tour durch das koptische Viertel — die Hängende Kirche (Al-Muallaqah), die Kirche des Heiligen Sergius, die Ben-Ezra-Synagoge und das Koptische Museum."
        }, {
          time: "17:30",
          description: "Rückkehr zum Hotel. Freier Abend."
        }, {
          time: "19:30",
          description: "Abendessen inbegriffen."
        }]
      }, {
        day: 8,
        title: "Kairo — Letzter Morgen & Abreise",
        description: "Ihr letzter Morgen in Ägypten steht für letzte Besichtigungen oder Einkäufe frei zur Verfügung, bevor es zum Transfer zum internationalen Flughafen Kairo geht — eine letzte Gelegenheit, über einen Marktstand zu schlendern, ein Geschenk für jemanden zu Hause zu finden oder einfach an einem ruhigen Ort zu sitzen und die Reise nachwirken zu lassen, bevor der lange Flug bevorsteht. Ihr Aurevian Tours-Reiseleiter wird Sie zum Flughafen begleiten und bei der Abfertigung unterstützen, womit sich der Kreis einer außergewöhnlichen achttägigen Reise durch die größte Zivilisation der antiken Welt schließt — von den Granitsteinbrüchen Assuans bis zu den goldenen Schätzen Kairos.",

        steps: [{
          time: "08:00",
          description: "Frühstück im Hotel."
        }, {
          time: "09:00",
          description: "Freier Vormittag — optionaler Besuch des Ägyptischen Museums am Tahrir-Platz (auf eigene Kosten), Einkaufen in Zamalek, oder Entspannung im Hotel."
        }, {
          time: "12:00",
          description: "Check-out aus dem Hotel."
        }, {
          time: "13:00",
          description: "Mittagessen inbegriffen."
        }, {
          time: "14:00",
          description: "Transfer zum internationalen Flughafen Kairo für Ihren Abflug. Ende der Tour."
        }]
      }]
    },
  },
];

export { cityData, toursData };