// seeds/cities/alexandria.js

const cityData = {
  name: "Alexandria",
  slug: "alexandria",
  description:
    "Alexandria is Egypt's magnificent Mediterranean jewel — a city of extraordinary layered history, intellectual legacy, and timeless coastal beauty, utterly unlike anywhere else in the country. Founded by Alexander the Great in 331 BC on a narrow strip of land between the sea and Lake Mareotis, it swiftly became one of the greatest cities of the ancient world, home to the legendary Library of Alexandria, one of the largest repositories of knowledge ever assembled and a magnet for scholars, mathematicians, and philosophers from across the Mediterranean, and the Pharos Lighthouse, one of the Seven Wonders of the Ancient World, whose light is said to have been visible from fifty kilometers out at sea. Cleopatra ruled from here, Julius Caesar walked its harbor, and for a time it was arguably the most important city anywhere on earth, a position that has left it with a melancholic, faded grandeur unlike Cairo's relentless modern energy. Today, Alexandria enchants visitors with its elegant seafront Corniche curving along the Mediterranean, its fascinating blend of Greco-Roman, Egyptian, and Ottoman heritage layered into a single streetscape, its world-class museums housing artifacts pulled from both land and sea, and its wonderfully relaxed Mediterranean atmosphere — sea breezes, seafood restaurants, and a slower, more contemplative pace — that sets it apart from every other city in Egypt.",
  country: "Egypt",
  image: "alexandria.jpg",
};

const toursData = [
  {
    title: "Guided Tour of Alexandria",
    slug: "guided-tour-alexandria",
    description:
      "Discover the extraordinary layered history of Alexandria — Egypt's Mediterranean queen — on this comprehensive guided tour of the city's most remarkable landmarks, a single day that somehow manages to move convincingly through more than two thousand years of continuous history. Your expert guide will take you through thousands of years of history, beginning at the eerie and fascinating Catacombs of Kom el-Shoqafa, a sprawling Roman-era underground necropolis where Egyptian and Greco-Roman artistic styles merge in an extraordinary fusion, ancient gods rendered in distinctly classical poses on the same walls where Egyptian funerary symbolism still holds court. Nearby, you'll see Pompey's Pillar, one of the last remaining vestiges of the ancient Serapeum temple, a single towering column standing in quiet defiance over ruins that once housed one of the most important religious complexes in the ancient Mediterranean world. The tour continues to the iconic Qaitbay Citadel, a magnificent 15th-century fortress built on the very spot where the legendary Pharos Lighthouse once stood, its stones reportedly recycled from the lighthouse's own collapsed remains, before finishing at the stunning modern Bibliotheca Alexandrina — a spectacular tribute to the ancient Library of Alexandria that manages to feel both monumental and deeply personal, as if the city had simply refused to let its greatest loss stay lost.",
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
      es: "El lobby de su hotel en Alejandría, o la estación de tren de Alejandría si llega desde El Cairo. Su guía lo recibirá con un cartel.",
      pt: "O lobby do seu hotel em Alexandria, ou a estação de trem de Alexandria, caso chegue do Cairo. Seu guia irá encontrá-lo com uma placa.",
      it: "La hall del vostro hotel ad Alessandria, oppure la stazione ferroviaria di Alessandria se in arrivo dal Cairo. La vostra guida vi accoglierà con un cartello.",
      fr: "Le hall de votre hôtel à Alexandrie, ou la gare ferroviaire d'Alexandrie si vous arrivez du Caire. Votre guide vous accueillera avec un panneau.",
      ru: "Лобби вашего отеля в Александрии или железнодорожный вокзал Александрии, если вы прибываете из Каира. Гид встретит вас с табличкой.",
      de: "Die Lobby Ihres Hotels in Alexandria, oder der Bahnhof von Alexandria, falls Sie aus Kairo anreisen. Ihr Reiseleiter wird Sie mit einem Schild erwarten."
    },
    accessibility: {
      en: "The Catacombs of Kom el-Shoqafa involve descending a spiral staircase underground — not suitable for guests with claustrophobia or severe mobility issues. The Citadel and Bibliotheca are largely accessible.",
      es: "Las Catacumbas de Kom el-Shoqafa implican descender una escalera de caracol bajo tierra: no son adecuadas para huéspedes con claustrofobia o problemas graves de movilidad. La Ciudadela y la Biblioteca son en su mayoría accesibles.",
      pt: "As Catacumbas de Kom el-Shoqafa envolvem descer uma escada em espiral subterrânea — não adequado para hóspedes com claustrofobia ou problemas graves de mobilidade. A Cidadela e a Biblioteca são, em sua maior parte, acessíveis.",
      it: "Le Catacombe di Kom el-Shoqafa prevedono di scendere una scala a chiocciola sottoterra — non adatte agli ospiti con claustrofobia o gravi problemi di mobilità. La Cittadella e la Biblioteca sono in gran parte accessibili.",
      fr: "Les catacombes de Kom el-Chouqafa nécessitent de descendre un escalier en colimaçon souterrain — ne convient pas aux personnes claustrophobes ou ayant de graves problèmes de mobilité. La citadelle et la bibliothèque sont en grande partie accessibles.",
      ru: "Посещение катакомб Ком-эш-Шукафа предполагает спуск по винтовой лестнице под землёй — не подходит для гостей с клаустрофобией или серьёзными проблемами с подвижностью. Цитадель и библиотека в основном доступны.",
      de: "Die Katakomben von Kom el-Shoqafa erfordern das Hinabsteigen einer Wendeltreppe unter die Erde — nicht geeignet für Gäste mit Klaustrophobie oder starken Mobilitätseinschränkungen. Die Zitadelle und die Bibliothek sind weitgehend barrierefrei."
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Light jacket (the sea breeze can be cool)", "Sun hat and sunscreen", "Camera", "Water bottle"],
      es: [
        "Zapatos cómodos para caminar",
        "Chaqueta ligera (la brisa marina puede ser fresca)",
        "Sombrero y protector solar",
        "Cámara",
        "Botella de agua"
      ],
      pt: [
        "Sapatos confortáveis para caminhar",
        "Jaqueta leve (a brisa marítima pode ser fresca)",
        "Chapéu de sol e protetor solar",
        "Câmera fotográfica",
        "Garrafa de água"
      ],
      it: [
        "Scarpe comode da camminata",
        "Giacca leggera (la brezza marina può essere fresca)",
        "Cappello da sole e crema solare",
        "Macchina fotografica",
        "Bottiglia d'acqua"
      ],
      fr: [
        "Chaussures de marche confortables",
        "Veste légère (la brise marine peut être fraîche)",
        "Chapeau de soleil et crème solaire",
        "Appareil photo",
        "Bouteille d'eau"
      ],
      ru: [
        "Удобная обувь для ходьбы",
        "Лёгкая куртка (морской бриз может быть прохладным)",
        "Шляпа от солнца и солнцезащитный крем",
        "Фотоаппарат",
        "Бутылка воды"
      ],
      de: [
        "Bequeme Wanderschuhe",
        "Leichte Jacke (die Meeresbrise kann kühl sein)",
        "Sonnenhut und Sonnenschutz",
        "Kamera",
        "Wasserflasche"
      ]
    },
    importantInfo: {
      en: [
        "Hotel or port pickup within Alexandria is included.",
        "Lunch at a traditional Alexandrian seafood restaurant is included.",
        "Entrance fees to all four sites are included.",
        "The Catacombs are underground — those with claustrophobia or knee problems may find the spiral staircase challenging.",
        "The Bibliotheca Alexandrina may be closed on certain national holidays; your guide will advise if alternatives are needed.",
      ],
      es: [
        "La recogida en el hotel o el puerto dentro de Alejandría está incluida.",
        "El almuerzo en un restaurante tradicional de mariscos de Alejandría está incluido.",
        "Las entradas a los cuatro sitios están incluidas.",
        "Las catacumbas están bajo tierra: quienes tengan claustrofobia o problemas de rodillas pueden encontrar difícil la escalera de caracol.",
        "La Biblioteca Alejandrina puede estar cerrada en ciertos días festivos nacionales; su guía le indicará si se necesitan alternativas."
      ],
      pt: [
        "A busca no hotel ou no porto dentro de Alexandria está incluída.",
        "O almoço em um restaurante tradicional de frutos do mar de Alexandria está incluído.",
        "As taxas de entrada para os quatro locais estão incluídas.",
        "As catacumbas são subterrâneas — quem tem claustrofobia ou problemas no joelho pode achar a escada em espiral desafiadora.",
        "A Biblioteca de Alexandria pode estar fechada em certos feriados nacionais; seu guia avisará se forem necessárias alternativas."
      ],
      it: [
        "Il ritiro in hotel o al porto all'interno di Alessandria è incluso.",
        "Il pranzo in un tradizionale ristorante di pesce alessandrino è incluso.",
        "I biglietti d'ingresso a tutti i quattro siti sono inclusi.",
        "Le catacombe sono sotterranee — chi soffre di claustrofobia o problemi alle ginocchia potrebbe trovare difficile la scala a chiocciola.",
        "La Biblioteca di Alessandria potrebbe essere chiusa in alcune festività nazionali; la vostra guida vi informerà se sono necessarie alternative."
      ],
      fr: [
        "La prise en charge à l'hôtel ou au port à Alexandrie est incluse.",
        "Le déjeuner dans un restaurant de fruits de mer traditionnel alexandrin est inclus.",
        "Les frais d'entrée pour les quatre sites sont inclus.",
        "Les catacombes sont souterraines — les personnes claustrophobes ou ayant des problèmes de genoux pourraient trouver l'escalier en colimaçon difficile.",
        "La Bibliotheca Alexandrina peut être fermée lors de certains jours fériés nationaux ; votre guide vous informera si des alternatives sont nécessaires."
      ],
      ru: [
        "Трансфер из отеля или порта в пределах Александрии включён.",
        "Обед в традиционном александрийском ресторане морепродуктов включён.",
        "Входные билеты на все четыре объекта включены.",
        "Катакомбы находятся под землёй — людям с клаустрофобией или проблемами с коленями винтовая лестница может показаться сложной.",
        "Александрийская библиотека может быть закрыта в некоторые национальные праздники; гид сообщит, если потребуются альтернативы."
      ],
      de: [
        "Die Abholung vom Hotel oder Hafen innerhalb Alexandrias ist inbegriffen.",
        "Das Mittagessen in einem traditionellen alexandrinischen Fischrestaurant ist inbegriffen.",
        "Die Eintrittsgebühren für alle vier Stätten sind inbegriffen.",
        "Die Katakomben liegen unter der Erde — Personen mit Klaustrophobie oder Knieproblemen könnten die Wendeltreppe als herausfordernd empfinden.",
        "Die Bibliotheca Alexandrina kann an bestimmten Nationalfeiertagen geschlossen sein; Ihr Reiseleiter informiert Sie, falls Alternativen benötigt werden."
      ]
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
            "Alexandria is unlike any other city in Egypt. Where Cairo overwhelms with its scale and its energy, Alexandria seduces — with its sea air, its faded European elegance, its melancholy sense of a great past just out of reach, glimpsed in cracked Belle Époque facades and the salt-worn stone of its harbor walls. Founded by Alexander the Great in 331 BC on the narrow strip of land between the Mediterranean and Lake Mareotis, it became within a century the most important city in the world — home to perhaps half a million people, to Cleopatra and Julius Caesar, to the world's first great library, and to a lighthouse visible 50 kilometers out to sea. Almost nothing of that ancient city physically survives above ground; centuries of earthquakes, fires, and rising sea levels swallowed most of it, including entire sections of the old royal quarter, which now lie beneath the harbor itself. But below the streets, in the museums, and along the seafront, its presence is everywhere. This full-day tour covers four of the city's defining sites, moving through layers of time from the Roman era to the medieval Islamic period to the 21st century, bound together by the sea that has always been Alexandria's defining element.",
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
      es: [{
        day: 1,
        title: "Alejandría: 3,000 años de historia en un día",
        description: "Alejandría no se parece a ninguna otra ciudad de Egipto. Mientras El Cairo abruma con su escala y su energía, Alejandría seduce, con su aire marino, su elegancia europea desvaída, su melancólica sensación de un gran pasado apenas fuera de alcance, vislumbrado en fachadas agrietadas de la Belle Époque y la piedra desgastada por la sal de los muros de su puerto. Fundada por Alejandro Magno en el 331 a. C. en la estrecha franja de tierra entre el Mediterráneo y el lago Mareotis, se convirtió en menos de un siglo en la ciudad más importante del mundo, hogar de quizás medio millón de personas, de Cleopatra y Julio César, de la primera gran biblioteca del mundo, y de un faro visible a 50 kilómetros mar adentro. Casi nada de aquella ciudad antigua sobrevive físicamente sobre el suelo; siglos de terremotos, incendios y aumento del nivel del mar se tragaron la mayor parte, incluyendo secciones enteras del antiguo barrio real, que ahora se encuentran bajo el propio puerto. Pero bajo las calles, en los museos y a lo largo del paseo marítimo, su presencia está en todas partes. Este tour de día completo recorre cuatro de los sitios definitorios de la ciudad, atravesando capas de tiempo desde la era romana hasta el período islámico medieval y el siglo XXI, unidas por el mar que siempre ha sido el elemento definitorio de Alejandría.",

        steps: [{
          time: "08:00",
          description: "Recogida en el hotel o el puerto. Su guía lo recibe y le da una breve introducción a la historia de Alejandría durante el trayecto al primer sitio."
        }, {
          time: "08:30",
          description: "Llegada a las Catacumbas de Kom el-Shoqafa. Descienda la escalera de caracol tres niveles bajo el nivel de la calle hacia uno de los espacios subterráneos más extraordinarios del mundo. Su guía explica la asombrosa fusión de arte y simbolismo religioso egipcio, griego y romano que recubre las cámaras funerarias, un documento físico de la identidad multicultural de Alejandría."
        }, {
          time: "09:30",
          description: "Camine hasta la cercana Columna de Pompeyo: una columna de granito rojo de 27 metros de altura, la más grande de su tipo fuera de Roma, que una vez se alzó dentro del gran complejo del templo del Serapeum. Su guía explica el papel del templo como último hogar de la 'colección hija' de la biblioteca de Alejandría y su destrucción en el siglo IV d. C."
        }, {
          time: "10:00",
          description: "Traslado a la Ciudadela de Qaitbay en el puerto oriental."
        }, {
          time: "10:30",
          description: "Entre a la Ciudadela de Qaitbay: la gran fortaleza mameluca del siglo XV construida por el sultán Qaitbay exactamente en el sitio del antiguo Faro de Alejandría. Su guía lo lleva por las torres y las murallas, explicando tanto la historia medieval de la fortaleza como el legendario faro antiguo que reemplazó. Párese en las murallas frente al mar con el Mediterráneo ante usted y comprenda exactamente por qué Alejandro eligió este lugar para construir su ciudad."
        }, {
          time: "12:00",
          description: "Traslado a un restaurante tradicional de mariscos en el paseo marítimo de Alejandría."
        }, {
          time: "12:30",
          description: "Almuerzo incluido: mariscos frescos alejandrinos, la gran tradición culinaria de la ciudad, con vistas al puerto."
        }, {
          time: "14:00",
          description: "Traslado a la Biblioteca Alejandrina en la Corniche."
        }, {
          time: "14:30",
          description: "Visita guiada a la Biblioteca Alejandrina: la espectacular biblioteca y centro cultural moderno inaugurado en 2002 y diseñado por la firma noruega Snøhetta para evocar un sol naciente inclinándose sobre el mar. Su guía lo lleva por la sala de lectura principal (una de las más grandes del mundo), el Museo de Antigüedades en el sótano (que exhibe artefactos encontrados durante la construcción de la biblioteca), el Museo de Manuscritos, y el muro exterior esculpido con inscripciones de cada sistema de escritura jamás desarrollado."
        }, {
          time: "16:30",
          description: "Camine por la Corniche, el paseo marítimo de Alejandría, mientras la luz de la tarde se suaviza sobre el Mediterráneo. Su guía señala los hitos históricos del puerto oriental."
        }, {
          time: "17:00",
          description: "Traslado de regreso a su hotel o puerto. Fin del tour."
        }]
      }],
      pt: [{
        day: 1,
        title: "Alexandria — 3.000 anos de história em um dia",
        description: "Alexandria não se parece com nenhuma outra cidade no Egito. Enquanto o Cairo impressiona pela sua escala e energia, Alexandria seduz — com seu ar marítimo, sua elegância europeia desbotada, sua sensação melancólica de um grande passado quase ao alcance, vislumbrado em fachadas rachadas da Belle Époque e na pedra desgastada pelo sal das muralhas de seu porto. Fundada por Alexandre, o Grande, em 331 a.C., na estreita faixa de terra entre o Mediterrâneo e o Lago Mareotis, ela se tornou, em menos de um século, a cidade mais importante do mundo — lar de talvez meio milhão de pessoas, de Cleópatra e Júlio César, da primeira grande biblioteca do mundo, e de um farol visível a 50 quilômetros mar adentro. Quase nada daquela cidade antiga sobrevive fisicamente acima do solo; séculos de terremotos, incêndios e a elevação do nível do mar engoliram a maior parte dela, incluindo seções inteiras do antigo bairro real, que agora se encontram sob o próprio porto. Mas, abaixo das ruas, nos museus e ao longo da orla marítima, sua presença está em todos os lugares. Este tour de dia inteiro percorre quatro dos locais mais marcantes da cidade, atravessando camadas de tempo, desde a era romana até o período islâmico medieval e o século XXI, unidas pelo mar que sempre foi o elemento definidor de Alexandria.",

        steps: [{
          time: "08:00",
          description: "Busca no hotel ou no porto. Seu guia o encontra e dá uma breve introdução à história de Alexandria durante o trajeto até o primeiro local."
        }, {
          time: "08:30",
          description: "Chegada às Catacumbas de Kom el-Shoqafa. Desça a escada em espiral três níveis abaixo do nível da rua, para um dos espaços subterrâneos mais notáveis do mundo. Seu guia explica a extraordinária fusão de arte e simbolismo religioso egípcio, grego e romano que cobre as câmaras funerárias — um documento físico da identidade multicultural de Alexandria."
        }, {
          time: "09:30",
          description: "Caminhe até a próxima Coluna de Pompeu — uma coluna de granito vermelho de 27 metros de altura, a maior de seu tipo fora de Roma, que outrora se erguia dentro do grande complexo do templo do Serapeum. Seu guia explica o papel do templo como último abrigo da 'coleção filha' da biblioteca de Alexandria e sua destruição no século IV d.C."
        }, {
          time: "10:00",
          description: "Traslado até a Cidadela de Qaitbay, no porto oriental."
        }, {
          time: "10:30",
          description: "Entre na Cidadela de Qaitbay — a grande fortaleza mameluca do século XV, construída pelo Sultão Qaitbay exatamente no local do antigo Farol de Alexandria. Seu guia o conduz pelas torres e muralhas, explicando tanto a história medieval da fortaleza quanto o legendário farol antigo que ela substituiu. Fique nas muralhas voltadas para o mar com o Mediterrâneo à sua frente e entenda exatamente por que Alexandre escolheu este local para construir sua cidade."
        }, {
          time: "12:00",
          description: "Traslado até um restaurante tradicional de frutos do mar na orla de Alexandria."
        }, {
          time: "12:30",
          description: "Almoço incluído — frutos do mar frescos alexandrinos, a grande tradição culinária da cidade, com vistas sobre o porto."
        }, {
          time: "14:00",
          description: "Traslado até a Biblioteca de Alexandria, na Corniche."
        }, {
          time: "14:30",
          description: "Tour guiado pela Biblioteca de Alexandria — a espetacular biblioteca moderna e centro cultural inaugurado em 2002, projetado pela firma norueguesa Snøhetta para evocar um sol nascente inclinando-se sobre o mar. Seu guia o leva pelo salão de leitura principal (um dos maiores do mundo), pelo Museu de Antiguidades no porão (exibindo artefatos encontrados durante a construção da biblioteca), pelo Museu de Manuscritos, e pela parede externa esculpida com inscrições de cada sistema de escrita já desenvolvido."
        }, {
          time: "16:30",
          description: "Caminhe pela Corniche — a orla marítima de Alexandria — enquanto a luz da tarde se suaviza sobre o Mediterrâneo. Seu guia aponta os marcos históricos do Porto Oriental."
        }, {
          time: "17:00",
          description: "Traslado de volta ao seu hotel ou porto. Fim do tour."
        }]
      }],
      it: [{
        day: 1,
        title: "Alessandria — 3.000 anni di storia in un giorno",
        description: "Alessandria non è come nessun'altra città d'Egitto. Mentre il Cairo travolge con la sua scala e la sua energia, Alessandria seduce — con la sua aria di mare, la sua sbiadita eleganza europea, il suo senso malinconico di un grande passato appena fuori portata, intravisto in facciate scrostate della Belle Époque e nella pietra corrosa dal sale delle sue mura portuali. Fondata da Alessandro Magno nel 331 a.C. sulla sottile striscia di terra tra il Mediterraneo e il Lago Mareotide, divenne nel giro di un secolo la città più importante del mondo — casa di forse mezzo milione di persone, di Cleopatra e Giulio Cesare, della prima grande biblioteca del mondo, e di un faro visibile a 50 chilometri di distanza in mare. Quasi nulla di quell'antica città sopravvive fisicamente in superficie; secoli di terremoti, incendi e l'innalzamento del livello del mare ne hanno inghiottito gran parte, incluse intere sezioni dell'antico quartiere reale, che ora giacciono sotto il porto stesso. Ma sotto le strade, nei musei e lungo il lungomare, la sua presenza è ovunque. Questo tour di un'intera giornata copre quattro dei siti più rappresentativi della città, attraversando strati di tempo dall'epoca romana al periodo islamico medievale fino al XXI secolo, uniti dal mare che è sempre stato l'elemento distintivo di Alessandria.",

        steps: [{
          time: "08:00",
          description: "Ritiro in hotel o al porto. La vostra guida vi accoglie e fornisce una breve introduzione alla storia di Alessandria durante il tragitto verso il primo sito."
        }, {
          time: "08:30",
          description: "Arrivo alle Catacombe di Kom el-Shoqafa. Scendete la scala a chiocciola tre livelli sotto il livello stradale, in uno degli spazi sotterranei più straordinari del mondo. La vostra guida spiega la straordinaria fusione di arte e simbolismo religioso egizio, greco e romano che ricopre le camere funerarie — un documento fisico dell'identità multiculturale di Alessandria."
        }, {
          time: "09:30",
          description: "Camminate fino alla vicina Colonna di Pompeo — una colonna di granito rosso alta 27 metri, la più grande del suo genere fuori da Roma, che un tempo si ergeva all'interno del grande complesso del tempio del Serapeo. La vostra guida spiega il ruolo del tempio come ultima dimora della 'collezione figlia' della biblioteca alessandrina e la sua distruzione nel IV secolo d.C."
        }, {
          time: "10:00",
          description: "Trasferimento alla Cittadella di Qaitbay, sul porto orientale."
        }, {
          time: "10:30",
          description: "Entrate nella Cittadella di Qaitbay — la grande fortezza mamelucca del XV secolo costruita dal sultano Qaitbay esattamente sul sito dell'antico Faro di Alessandria. La vostra guida vi conduce tra le torri e i bastioni, spiegando sia la storia medievale della fortezza che il leggendario faro antico che ha sostituito. Sostate sulle mura rivolte verso il mare con il Mediterraneo davanti a voi e comprendete esattamente perché Alessandro scelse questo luogo per costruire la sua città."
        }, {
          time: "12:00",
          description: "Trasferimento a un tradizionale ristorante di pesce sul lungomare di Alessandria."
        }, {
          time: "12:30",
          description: "Pranzo incluso — pesce fresco alessandrino, la grande tradizione culinaria della città, con vista sul porto."
        }, {
          time: "14:00",
          description: "Trasferimento alla Biblioteca di Alessandria sulla Corniche."
        }, {
          time: "14:30",
          description: "Visita guidata alla Biblioteca di Alessandria — la spettacolare biblioteca moderna e centro culturale inaugurato nel 2002 e progettato dallo studio norvegese Snøhetta per evocare un sole che si leva inclinandosi sul mare. La vostra guida vi conduce attraverso la sala di lettura principale (una delle più grandi del mondo), il Museo delle Antichità nel sottosuolo (che espone reperti rinvenuti durante la costruzione della biblioteca), il Museo dei Manoscritti, e la parete esterna scolpita con iscrizioni di ogni sistema di scrittura mai sviluppato."
        }, {
          time: "16:30",
          description: "Passeggiata lungo la Corniche — il lungomare di Alessandria — mentre la luce del pomeriggio si addolcisce sul Mediterraneo. La vostra guida indica i punti di interesse storici del Porto Orientale."
        }, {
          time: "17:00",
          description: "Trasferimento di ritorno al vostro hotel o al porto. Fine del tour."
        }]
      }],
      fr: [{
        day: 1,
        title: "Alexandrie — 3 000 ans d'histoire en une journée",
        description: "Alexandrie ne ressemble à aucune autre ville d'Égypte. Là où Le Caire submerge par son ampleur et son énergie, Alexandrie séduit — avec son air marin, son élégance européenne fanée, son sentiment mélancolique d'un grand passé juste hors de portée, aperçu dans des façades fissurées de la Belle Époque et la pierre érodée par le sel de ses murs portuaires. Fondée par Alexandre le Grand en 331 av. J.-C. sur l'étroite bande de terre entre la Méditerranée et le lac Maréotis, elle devint en moins d'un siècle la ville la plus importante du monde — abritant peut-être un demi-million de personnes, Cléopâtre et Jules César, la première grande bibliothèque du monde, et un phare visible à 50 kilomètres au large. Presque rien de cette ville antique ne subsiste physiquement en surface ; des siècles de tremblements de terre, d'incendies et de montée des eaux ont englouti la plus grande partie, y compris des sections entières de l'ancien quartier royal, qui se trouvent désormais sous le port lui-même. Mais sous les rues, dans les musées et le long du front de mer, sa présence est partout. Cette excursion d'une journée complète couvre quatre des sites emblématiques de la ville, traversant des couches de temps depuis l'époque romaine jusqu'à la période islamique médiévale et au XXIe siècle, unies par la mer qui a toujours été l'élément déterminant d'Alexandrie.",

        steps: [{
          time: "08:00",
          description: "Prise en charge à l'hôtel ou au port. Votre guide vous accueille et donne une brève introduction à l'histoire d'Alexandrie pendant le trajet vers le premier site."
        }, {
          time: "08:30",
          description: "Arrivée aux catacombes de Kom el-Chouqafa. Descendez l'escalier en colimaçon sur trois niveaux sous le niveau de la rue, dans l'un des espaces souterrains les plus remarquables du monde. Votre guide explique l'extraordinaire fusion d'art et de symbolisme religieux égyptien, grec et romain qui recouvre les chambres funéraires — un témoignage physique de l'identité multiculturelle d'Alexandrie."
        }, {
          time: "09:30",
          description: "Marchez jusqu'à la colonne de Pompée toute proche — une colonne de granit rouge de 27 mètres de haut, la plus grande de son genre hors de Rome, qui se dressait autrefois dans le grand complexe du temple du Sérapéum. Votre guide explique le rôle du temple en tant que dernière demeure de la « collection fille » de la bibliothèque d'Alexandrie et sa destruction au IVe siècle après J.-C."
        }, {
          time: "10:00",
          description: "Transfert vers la citadelle de Qaitbay, sur le port oriental."
        }, {
          time: "10:30",
          description: "Entrez dans la citadelle de Qaitbay — la grande forteresse mamelouke du XVe siècle construite par le sultan Qaitbay exactement à l'emplacement de l'ancien phare d'Alexandrie. Votre guide vous fait découvrir les tours et les remparts, en expliquant à la fois l'histoire médiévale de la forteresse et le légendaire phare antique qu'elle a remplacé. Tenez-vous sur les remparts face à la mer, la Méditerranée devant vous, et comprenez exactement pourquoi Alexandre a choisi cet endroit pour fonder sa ville."
        }, {
          time: "12:00",
          description: "Transfert vers un restaurant de fruits de mer traditionnel sur le front de mer d'Alexandrie."
        }, {
          time: "12:30",
          description: "Déjeuner inclus — fruits de mer frais alexandrins, la grande tradition culinaire de la ville, avec vue sur le port."
        }, {
          time: "14:00",
          description: "Transfert vers la Bibliotheca Alexandrina, sur la corniche."
        }, {
          time: "14:30",
          description: "Visite guidée de la Bibliotheca Alexandrina — la spectaculaire bibliothèque moderne et centre culturel inauguré en 2002 et conçu par le cabinet norvégien Snøhetta pour évoquer un soleil levant s'inclinant sur la mer. Votre guide vous fait traverser la grande salle de lecture (l'une des plus vastes au monde), le musée des Antiquités au sous-sol (exposant des objets découverts pendant la construction de la bibliothèque), le musée des Manuscrits, et le mur extérieur sculpté, gravé d'écritures provenant de tous les systèmes d'écriture jamais développés."
        }, {
          time: "16:30",
          description: "Promenade le long de la corniche — le front de mer d'Alexandrie — tandis que la lumière de l'après-midi s'adoucit sur la Méditerranée. Votre guide signale les sites historiques du port oriental."
        }, {
          time: "17:00",
          description: "Transfert de retour vers votre hôtel ou le port. Fin de l'excursion."
        }]
      }],
      ru: [{
        day: 1,
        title: "Александрия — 3000 лет истории за один день",
        description: "Александрия не похожа ни на один другой город Египта. Если Каир поражает своим масштабом и энергией, то Александрия очаровывает — морским воздухом, увядающим европейским изяществом, меланхоличным ощущением великого прошлого, едва уловимого в потрескавшихся фасадах эпохи belle époque и изъеденном солью камне крепостных стен гавани. Основанная Александром Македонским в 331 году до н.э. на узкой полосе земли между Средиземным морем и озером Мареотис, она менее чем за столетие стала самым важным городом мира — домом, возможно, для полумиллиона человек, для Клеопатры и Юлия Цезаря, для первой великой библиотеки мира и маяка, видимого с расстояния 50 километров в море. От того древнего города почти ничего не сохранилось физически на поверхности; века землетрясений, пожаров и подъёма уровня моря поглотили большую его часть, включая целые районы старого царского квартала, которые теперь покоятся под самой гаванью. Но под улицами, в музеях и вдоль набережной его присутствие повсюду. Этот тур на целый день охватывает четыре определяющих объекта города, проходя через слои времени от римской эпохи через средневековый исламский период до XXI века, объединённые морем, которое всегда было определяющей чертой Александрии.",

        steps: [{
          time: "08:00",
          description: "Трансфер из отеля или порта. Гид встретит вас и даст краткое введение в историю Александрии во время поездки к первому объекту."
        }, {
          time: "08:30",
          description: "Прибытие к катакомбам Ком-эш-Шукафа. Спуститесь по винтовой лестнице на три уровня ниже уровня улицы в одно из самых удивительных подземных пространств в мире. Гид расскажет о поразительном слиянии египетского, греческого и римского искусства и религиозной символики, покрывающей погребальные камеры — физическом документе мультикультурной идентичности Александрии."
        }, {
          time: "09:30",
          description: "Прогулка к расположенной рядом Колонне Помпея — 27-метровой колонне из красного гранита, крупнейшей такого типа за пределами Рима, которая когда-то стояла внутри великого храмового комплекса Серапеума. Гид расскажет о роли храма как последнего пристанища 'дочерней коллекции' александрийской библиотеки и его разрушении в IV веке н.э."
        }, {
          time: "10:00",
          description: "Переезд к цитадели Кайт-бей на восточной гавани."
        }, {
          time: "10:30",
          description: "Вход в цитадель Кайт-бей — великую мамлюкскую крепость XV века, построенную султаном Кайт-беем точно на месте древнего Александрийского маяка. Гид проведёт вас по башням и крепостным валам, рассказывая как о средневековой истории крепости, так и о легендарном древнем маяке, который она заменила. Постойте на стенах, обращённых к морю, с видом на Средиземное море, и поймёте, почему Александр выбрал именно это место для строительства своего города."
        }, {
          time: "12:00",
          description: "Переезд в традиционный ресторан морепродуктов на набережной Александрии."
        }, {
          time: "12:30",
          description: "Обед включён — свежие александрийские морепродукты, великая кулинарная традиция города, с видом на гавань."
        }, {
          time: "14:00",
          description: "Переезд к Александрийской библиотеке на Корниш."
        }, {
          time: "14:30",
          description: "Экскурсия с гидом по Александрийской библиотеке — впечатляющей современной библиотеке и культурному центру, открытому в 2002 году и спроектированному норвежской фирмой Snøhetta, чтобы напоминать восходящее солнце, склоняющееся над морем. Гид проведёт вас через главный читальный зал (один из крупнейших в мире), Музей античности в подвале (где выставлены артефакты, найденные во время строительства библиотеки), Музей рукописей и внешнюю резную стену с надписями на всех когда-либо созданных системах письма."
        }, {
          time: "16:30",
          description: "Прогулка по Корниш — приморской набережной Александрии — пока вечерний свет смягчается над Средиземным морем. Гид укажет на исторические достопримечательности Восточной гавани."
        }, {
          time: "17:00",
          description: "Трансфер обратно в ваш отель или порт. Окончание тура."
        }]
      }],
      de: [{
        day: 1,
        title: "Alexandria — 3.000 Jahre Geschichte an einem Tag",
        description: "Alexandria ist anders als jede andere Stadt in Ägypten. Während Kairo durch seine Größe und Energie überwältigt, verführt Alexandria — mit seiner Meeresluft, seiner verblassten europäischen Eleganz, seinem melancholischen Gefühl einer großen, gerade außer Reichweite liegenden Vergangenheit, sichtbar in rissigen Fassaden der Belle Époque und dem vom Salz zerfressenen Stein seiner Hafenmauern. Von Alexander dem Großen 331 v. Chr. auf dem schmalen Landstreifen zwischen dem Mittelmeer und dem Mareotis-See gegründet, wurde sie innerhalb eines Jahrhunderts zur bedeutendsten Stadt der Welt — Heimat für vielleicht eine halbe Million Menschen, für Kleopatra und Julius Cäsar, für die erste große Bibliothek der Welt, und für einen Leuchtturm, der noch 50 Kilometer auf See sichtbar war. Von jener antiken Stadt ist physisch fast nichts über der Erde erhalten geblieben; Jahrhunderte von Erdbeben, Bränden und steigendem Meeresspiegel verschlangen den größten Teil davon, einschließlich ganzer Abschnitte des alten königlichen Viertels, die heute unter dem Hafen selbst liegen. Doch unter den Straßen, in den Museen und entlang der Strandpromenade ist ihre Präsenz überall zu spüren. Diese Ganztagestour führt zu vier der prägendsten Stätten der Stadt und durchquert Zeitschichten von der römischen Ära über die mittelalterlich-islamische Periode bis zum 21. Jahrhundert, vereint durch das Meer, das stets das bestimmende Element Alexandrias war.",

        steps: [{
          time: "08:00",
          description: "Abholung vom Hotel oder Hafen. Ihr Reiseleiter trifft Sie und gibt während der Fahrt zur ersten Stätte eine kurze Einführung in die Geschichte Alexandrias."
        }, {
          time: "08:30",
          description: "Ankunft an den Katakomben von Kom el-Shoqafa. Steigen Sie die Wendeltreppe drei Stockwerke unter das Straßenniveau hinab, in einen der bemerkenswertesten unterirdischen Räume der Welt. Ihr Reiseleiter erklärt die außergewöhnliche Verschmelzung ägyptischer, griechischer und römischer Kunst und religiöser Symbolik, die die Grabkammern bedeckt — ein physisches Dokument der multikulturellen Identität Alexandrias."
        }, {
          time: "09:30",
          description: "Gehen Sie zur nahegelegenen Pompeius-Säule — eine 27 Meter hohe Säule aus rotem Granit, die größte ihrer Art außerhalb Roms, die einst innerhalb des großen Serapeum-Tempelkomplexes stand. Ihr Reiseleiter erklärt die Rolle des Tempels als letzte Heimat der Tochtersammlung der alexandrinischen Bibliothek und seine Zerstörung im 4. Jahrhundert n. Chr."
        }, {
          time: "10:00",
          description: "Transfer zur Zitadelle von Qaitbay am östlichen Hafen."
        }, {
          time: "10:30",
          description: "Betreten Sie die Zitadelle von Qaitbay — die große mamlukische Festung des 15. Jahrhunderts, erbaut von Sultan Qaitbay genau an der Stelle des antiken Pharos-Leuchtturms. Ihr Reiseleiter führt Sie durch die Türme und Wehrgänge und erklärt sowohl die mittelalterliche Geschichte der Festung als auch den legendären antiken Leuchtturm, den sie ersetzte. Stehen Sie auf den seewärtigen Mauern mit dem Mittelmeer vor sich und verstehen Sie genau, warum Alexander diesen Ort für den Bau seiner Stadt wählte."
        }, {
          time: "12:00",
          description: "Transfer zu einem traditionellen Fischrestaurant an der Uferpromenade von Alexandria."
        }, {
          time: "12:30",
          description: "Mittagessen inbegriffen — frische alexandrinische Meeresfrüchte, die große kulinarische Tradition der Stadt, mit Blick über den Hafen."
        }, {
          time: "14:00",
          description: "Transfer zur Bibliotheca Alexandrina an der Corniche."
        }, {
          time: "14:30",
          description: "Geführte Tour durch die Bibliotheca Alexandrina — die spektakuläre moderne Bibliothek und Kulturzentrum, eingeweiht 2002 und entworfen vom norwegischen Architekturbüro Snøhetta, um eine aufgehende Sonne zu evozieren, die sich über das Meer neigt. Ihr Reiseleiter führt Sie durch den Hauptlesesaal (einer der größten der Welt), das Antikenmuseum im Untergeschoss (mit Artefakten, die während des Bibliotheksbaus gefunden wurden), das Manuskriptmuseum und die geschnitzte Außenwand, die mit Schriftzeichen aus jedem je entwickelten Schriftsystem versehen ist."
        }, {
          time: "16:30",
          description: "Spaziergang entlang der Corniche — Alexandrias Strandpromenade — während sich das Nachmittagslicht über dem Mittelmeer mildert. Ihr Reiseleiter weist auf die historischen Sehenswürdigkeiten des Östlichen Hafens hin."
        }, {
          time: "17:00",
          description: "Rücktransfer zu Ihrem Hotel oder Hafen. Ende der Tour."
        }]
      }]
    },
  },
  {
    title: "Pyramids of Giza & Grand Egyptian Museum from Alexandria",
    slug: "pyramids-giza-grand-egyptian-museum-alexandria",
    description:
      "Make the most of your time in Alexandria with this unforgettable day trip to the two greatest wonders of ancient and modern Egypt — the Pyramids of Giza and the Grand Egyptian Museum, a single long day that bridges the Mediterranean coast and the edge of the Sahara. Travel by private vehicle from Alexandria to Cairo, where your expert Egyptologist guide will lead you around the legendary Giza Plateau to see the three great pyramids of Khufu, Khafre, and Menkaure and the iconic Great Sphinx, monuments so often photographed that nothing quite prepares visitors for how they actually feel standing directly beneath one. Then head to the Grand Egyptian Museum, the world's largest archaeological museum, to see the complete golden treasures of Tutankhamun displayed for the first time in their entirety, more than five thousand individual objects assembled together in one place after a century scattered across storerooms, smaller galleries, and the occasional traveling exhibition abroad.",
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
      es: "El lobby de su hotel o el puerto de cruceros de Alejandría. El guía y el vehículo privado lo recogerán muy temprano para el viaje a El Cairo.",
      pt: "O lobby do seu hotel ou o porto de cruzeiros de Alexandria. O guia e o veículo particular irão buscá-lo bem cedo para o trajeto até o Cairo.",
      it: "La hall del vostro hotel o il porto crociere di Alessandria. La guida e il veicolo privato vi verranno a prendere molto presto per il viaggio verso il Cairo.",
      fr: "Le hall de votre hôtel ou le port de croisière d'Alexandrie. Le guide et le véhicule privé viendront vous chercher très tôt pour le trajet vers Le Caire.",
      ru: "Лобби вашего отеля или круизный порт Александрии. Гид и частный автомобиль заберут вас очень рано для поездки в Каир.",
      de: "Die Lobby Ihres Hotels oder der Kreuzfahrthafen von Alexandria. Der Reiseleiter und das Privatfahrzeug holen Sie sehr früh für die Fahrt nach Kairo ab."
    },
    accessibility: {
      en: "The Giza Plateau involves walking on sand and uneven ground. The Grand Egyptian Museum is largely accessible. Entry inside the Great Pyramid involves crouching through low passages — not included and not recommended for claustrophobics.",
      es: "La meseta de Guiza implica caminar sobre arena y terreno irregular. El Gran Museo Egipcio es en su mayoría accesible. La entrada al interior de la Gran Pirámide implica agacharse para pasar por pasajes bajos: no está incluida y no se recomienda para personas con claustrofobia.",
      pt: "O Planalto de Gizé envolve caminhar sobre areia e terreno irregular. O Grande Museu Egípcio é, em sua maior parte, acessível. A entrada dentro da Grande Pirâmide envolve se abaixar para passar por passagens baixas — não está incluída e não é recomendada para pessoas com claustrofobia.",
      it: "L'altopiano di Giza prevede di camminare su sabbia e terreno irregolare. Il Grande Museo Egizio è in gran parte accessibile. L'ingresso all'interno della Grande Piramide prevede di chinarsi per passare attraverso passaggi bassi — non incluso e non consigliato per chi soffre di claustrofobia.",
      fr: "Le plateau de Gizeh implique de marcher sur du sable et un terrain irrégulier. Le Grand Musée Égyptien est en grande partie accessible. L'entrée à l'intérieur de la Grande Pyramide implique de se baisser pour passer par des passages bas — non incluse et non recommandée pour les personnes claustrophobes.",
      ru: "Плато Гиза предполагает ходьбу по песку и неровной местности. Большой египетский музей в основном доступен. Вход внутрь Великой пирамиды предполагает наклоны при прохождении через низкие проходы — не включён и не рекомендуется людям с клаустрофобией.",
      de: "Das Gizeh-Plateau erfordert das Gehen auf Sand und unebenem Gelände. Das Große Ägyptische Museum ist weitgehend barrierefrei. Der Eintritt in das Innere der Großen Pyramide erfordert das Bücken durch niedrige Gänge — nicht inbegriffen und nicht empfohlen für Personen mit Klaustrophobie."
    },
    whatToBring: {
      en: ["Comfortable walking shoes", "Sun hat and high SPF sunscreen", "Water (the desert is hot)", "Camera", "Light snacks for the long drive", "Warm layer for the early morning departure"],
      es: [
        "Zapatos cómodos para caminar",
        "Sombrero y protector solar de alto FPS",
        "Agua (el desierto es caluroso)",
        "Cámara",
        "Snacks ligeros para el largo trayecto",
        "Capa abrigada para la salida de madrugada"
      ],
      pt: [
        "Sapatos confortáveis para caminhar",
        "Chapéu de sol e protetor solar de alto FPS",
        "Água (o deserto é quente)",
        "Câmera fotográfica",
        "Lanches leves para o longo trajeto",
        "Camada quente para a saída de madrugada"
      ],
      it: [
        "Scarpe comode da camminata",
        "Cappello da sole e crema solare ad alta protezione",
        "Acqua (il deserto è caldo)",
        "Macchina fotografica",
        "Snack leggeri per il lungo tragitto",
        "Strato caldo per la partenza all'alba"
      ],
      fr: [
        "Chaussures de marche confortables",
        "Chapeau de soleil et crème solaire à indice élevé",
        "Eau (le désert est chaud)",
        "Appareil photo",
        "Collations légères pour le long trajet",
        "Couche chaude pour le départ matinal"
      ],
      ru: [
        "Удобная обувь для ходьбы",
        "Шляпа от солнца и солнцезащитный крем с высоким SPF",
        "Вода (в пустыне жарко)",
        "Фотоаппарат",
        "Лёгкие закуски на долгий путь",
        "Тёплая вещь для раннего утреннего выезда"
      ],
      de: [
        "Bequeme Wanderschuhe",
        "Sonnenhut und Sonnenschutz mit hohem Lichtschutzfaktor",
        "Wasser (die Wüste ist heiß)",
        "Kamera",
        "Leichte Snacks für die lange Fahrt",
        "Warme Schicht für die frühmorgendliche Abfahrt"
      ]
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
      es: [
        "El trayecto de Alejandría a Guiza es de aproximadamente 2.5 horas por trayecto.",
        "La recogida en el hotel o el puerto dentro de Alejandría está incluida.",
        "El almuerzo está incluido en un restaurante cerca de la meseta de Guiza o el Gran Museo Egipcio.",
        "La entrada al interior de la Gran Pirámide de Keops no está incluida y tiene un costo adicional en el sitio.",
        "Los paseos en camello o caballo en la meseta están disponibles con costo adicional; su guía puede ayudarle.",
        "El Gran Museo Egipcio abrió en 2023 y es el museo arqueológico más grande del mundo."
      ],
      pt: [
        "O trajeto de Alexandria a Gizé é de aproximadamente 2,5 horas em cada sentido.",
        "A busca no hotel ou no porto dentro de Alexandria está incluída.",
        "O almoço está incluído em um restaurante próximo ao Planalto de Gizé ou ao Grande Museu Egípcio.",
        "A entrada dentro da Grande Pirâmide de Quéops não está incluída e tem uma taxa adicional no local.",
        "Passeios de camelo ou cavalo no planalto estão disponíveis com custo adicional — seu guia pode ajudar.",
        "O Grande Museu Egípcio foi inaugurado em 2023 e é o maior museu arqueológico do mundo."
      ],
      it: [
        "Il tragitto da Alessandria a Giza è di circa 2,5 ore per tratta.",
        "Il ritiro in hotel o al porto all'interno di Alessandria è incluso.",
        "Il pranzo è incluso in un ristorante vicino all'altopiano di Giza o al Grande Museo Egizio.",
        "L'ingresso all'interno della Grande Piramide di Cheope non è incluso e comporta un costo extra sul posto.",
        "Le passeggiate a dorso di cammello o cavallo sull'altopiano sono disponibili a costo aggiuntivo — la vostra guida può assistervi.",
        "Il Grande Museo Egizio ha aperto nel 2023 ed è il più grande museo archeologico del mondo."
      ],
      fr: [
        "Le trajet d'Alexandrie à Gizeh dure environ 2h30 dans chaque sens.",
        "La prise en charge à l'hôtel ou au port à Alexandrie est incluse.",
        "Le déjeuner est inclus dans un restaurant proche du plateau de Gizeh ou du Grand Musée Égyptien.",
        "L'entrée à l'intérieur de la Grande Pyramide de Khéops n'est pas incluse et comporte un supplément sur place.",
        "Des promenades à dos de chameau ou de cheval sur le plateau sont disponibles en supplément — votre guide peut vous y aider.",
        "Le Grand Musée Égyptien a ouvert en 2023 et est le plus grand musée archéologique du monde."
      ],
      ru: [
        "Поездка из Александрии в Гизу занимает около 2,5 часов в одну сторону.",
        "Трансфер из отеля или порта в пределах Александрии включён.",
        "Обед включён в ресторане рядом с плато Гиза или Большим египетским музеем.",
        "Вход внутрь Великой пирамиды Хеопса не включён и оплачивается дополнительно на месте.",
        "Поездки на верблюде или лошади на плато доступны за дополнительную плату — гид может помочь.",
        "Большой египетский музей открылся в 2023 году и является крупнейшим археологическим музеем в мире."
      ],
      de: [
        "Die Fahrt von Alexandria nach Gizeh dauert jeweils etwa 2,5 Stunden.",
        "Die Abholung vom Hotel oder Hafen innerhalb Alexandrias ist inbegriffen.",
        "Das Mittagessen ist in einem Restaurant in der Nähe des Gizeh-Plateaus oder des Großen Ägyptischen Museums inbegriffen.",
        "Der Eintritt in das Innere der Cheops-Pyramide ist nicht inbegriffen und kostet vor Ort einen Aufpreis.",
        "Kamel- oder Pferderitte auf dem Plateau sind gegen Aufpreis verfügbar — Ihr Reiseleiter kann Ihnen dabei helfen.",
        "Das Große Ägyptische Museum wurde 2023 eröffnet und ist das größte archäologische Museum der Welt."
      ]
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
      es: [{
        day: 1,
        title: "De Alejandría a las pirámides: la mejor excursión de Egipto",
        description: "Esta es una de las excursiones de un día más impactantes disponibles en cualquier lugar del mundo: salir del paseo marítimo mediterráneo de Alejandría al amanecer y llegar a la última maravilla superviviente del mundo antiguo antes de las multitudes matutinas. El trayecto hacia el sur desde Alejandría, a través de las llanuras verdes del Delta y hacia la extensa área metropolitana de El Cairo, toma alrededor de dos horas y media, y su guía utilizará el viaje para prepararlo para lo que está por ver: el contexto, la escala, la historia y las historias que hacen que Guiza sea más que una fotografía. La meseta de Guiza se encuentra en el borde del Sahara, y lo abrupto de la transición, de la ciudad a la pirámide en un solo paso, es uno de los grandes impactos de viajar. Las tres pirámides de Keops, Kefrén y Micerinos se construyeron durante un período de 70 años en el siglo XXVI a. C. La más grande, la Gran Pirámide de Keops, fue la estructura más alta del mundo durante casi 4,000 años. Por la tarde, el Gran Museo Egipcio, inaugurado en 2023 tras décadas de construcción, presenta la colección más importante de artefactos del antiguo Egipto jamás reunida, incluyendo cada objeto encontrado en la tumba de Tutankamón, exhibidos juntos por primera vez.",

        steps: [{
          time: "06:00",
          description: "Recogida en el hotel o el puerto en Alejandría. Comienza el viaje hacia el sur en dirección a El Cairo."
        }, {
          time: "08:30",
          description: "Llegada a la meseta de Guiza. Primera vista de las tres pirámides desde la carretera de acceso oriental: su guía hace una pausa aquí para orientación y fotografías."
        }, {
          time: "09:00",
          description: "Entrada al sitio de Guiza. Visita guiada a la Gran Pirámide de Keops: camine alrededor de la base (el perímetro es de casi 1 km), examine las piedras de revestimiento originales cerca de la base, y comprenda el logro de la ingeniería. Su guía explica las últimas teorías sobre los métodos de construcción."
        }, {
          time: "10:00",
          description: "Camine hasta la Pirámide de Kefrén: ligeramente más pequeña que la de Keops, pero parece más alta debido a su posición elevada; todavía conserva su revestimiento original de piedra caliza en el ápice."
        }, {
          time: "10:30",
          description: "Visite la Pirámide de Micerinos y las tres pirámides más pequeñas de las reinas junto a ella."
        }, {
          time: "11:00",
          description: "Traslado a la Gran Esfinge. Párese ante el enigmático coloso de piedra caliza (73 metros de largo, esculpido a partir de un único afloramiento de roca natural) y el adyacente Templo del Valle de Kefrén, uno de los edificios de piedra más antiguos del mundo."
        }, {
          time: "11:45",
          description: "Parada opcional en un mirador panorámico para fotografías de las tres pirámides en un solo encuadre."
        }, {
          time: "12:30",
          description: "Almuerzo incluido en un restaurante cerca de la meseta."
        }, {
          time: "14:00",
          description: "Traslado al Gran Museo Egipcio en el borde de la meseta de Guiza."
        }, {
          time: "14:30",
          description: "Visita guiada al Gran Museo Egipcio: comience en el Gran Salón de la Escalera, flanqueado por colosales estatuas reales; continúe a las galerías completas de Tutankamón (más de 5,000 objetos, incluyendo la máscara funeraria dorada, el trono dorado, el santuario canopo y el ataúd dorado más interno); siga por la Sala de las Momias Reales y lo más destacado de la colección permanente."
        }, {
          time: "17:00",
          description: "Salida del museo para el viaje de regreso a Alejandría."
        }, {
          time: "19:30",
          description: "Llegada de vuelta a Alejandría. Entrega en su hotel o puerto. Fin del tour."
        }]
      }],
      pt: [{
        day: 1,
        title: "De Alexandria às Pirâmides — a melhor excursão de um dia do Egito",
        description: "Esta é uma das excursões de um dia mais impressionantes disponíveis em qualquer lugar do mundo — deixando a orla mediterrânea de Alexandria ao amanhecer e chegando à última maravilha sobrevivente do mundo antigo antes das multidões matinais. O trajeto para o sul a partir de Alexandria, através das planícies verdes do Delta e até a vasta área metropolitana do Cairo, leva cerca de duas horas e meia, e seu guia usará a viagem para prepará-lo para o que você está prestes a ver — o contexto, a escala, a história e as narrativas que fazem de Gizé muito mais do que uma fotografia. O Planalto de Gizé está na borda do Saara, e a abrupta transição — da cidade para a pirâmide em um único passo — é um dos grandes choques de viajar. As três pirâmides de Quéops, Quéfren e Miquerinos foram construídas em um período de 70 anos no século XXVI a.C. A maior, a Grande Pirâmide de Quéops, permaneceu a estrutura mais alta do mundo por quase 4.000 anos. Na parte da tarde, o Grande Museu Egípcio — inaugurado em 2023 após décadas de construção — apresenta a coleção mais importante de artefatos do Egito Antigo já reunida, incluindo todos os objetos encontrados na tumba de Tutancâmon, exibidos juntos pela primeira vez.",

        steps: [{
          time: "06:00",
          description: "Busca no hotel ou no porto em Alexandria. Início do trajeto para o sul, em direção ao Cairo."
        }, {
          time: "08:30",
          description: "Chegada ao Planalto de Gizé. Primeira vista das três pirâmides a partir da estrada de acesso oriental — seu guia faz uma pausa aqui para orientação e fotografias."
        }, {
          time: "09:00",
          description: "Entrada no sítio de Gizé. Tour guiado pela Grande Pirâmide de Quéops — caminhe ao redor da base (o perímetro tem quase 1 km), examine as pedras de revestimento originais próximas à base, e compreenda a conquista da engenharia. Seu guia explica as últimas teorias sobre os métodos de construção."
        }, {
          time: "10:00",
          description: "Caminhe até a Pirâmide de Quéfren — ligeiramente menor que a de Quéops, mas parece mais alta devido à sua posição elevada; ainda mantém seu revestimento original de calcário no topo."
        }, {
          time: "10:30",
          description: "Visite a Pirâmide de Miquerinos e as três pirâmides menores das rainhas ao seu lado."
        }, {
          time: "11:00",
          description: "Traslado até a Grande Esfinge. Fique diante do enigmático colosso de calcário — 73 metros de comprimento, esculpido a partir de um único afloramento de rocha natural — e o adjacente Templo do Vale de Quéfren, um dos edifícios de pedra mais antigos do mundo."
        }, {
          time: "11:45",
          description: "Parada opcional em um mirante panorâmico para fotografias das três pirâmides em um único enquadramento."
        }, {
          time: "12:30",
          description: "Almoço incluído em um restaurante próximo ao planalto."
        }, {
          time: "14:00",
          description: "Traslado até o Grande Museu Egípcio, na borda do Planalto de Gizé."
        }, {
          time: "14:30",
          description: "Tour guiado pelo Grande Museu Egípcio — comece no Grande Salão da Escadaria, ladeado por colossais estátuas reais; siga para as galerias completas de Tutancâmon (mais de 5.000 objetos, incluindo a máscara funerária dourada, o trono dourado, o santuário canópico e o caixão dourado mais interno); continue pelo Salão das Múmias Reais e os destaques da coleção permanente."
        }, {
          time: "17:00",
          description: "Partida do museu para o trajeto de retorno a Alexandria."
        }, {
          time: "19:30",
          description: "Chegada de volta a Alexandria. Entrega no seu hotel ou porto. Fim do tour."
        }]
      }],
      it: [{
        day: 1,
        title: "Da Alessandria alle Piramidi — la più grande gita di un giorno d'Egitto",
        description: "Questa è una delle gite di un giorno più spettacolari disponibili in qualsiasi parte del mondo: lasciare il lungomare mediterraneo di Alessandria all'alba e arrivare all'ultima meraviglia sopravvissuta del mondo antico prima delle folle del mattino. Il tragitto verso sud da Alessandria, attraverso le pianure verdi del Delta e fino alla vasta area metropolitana del Cairo, richiede circa due ore e mezza, e la vostra guida utilizzerà il viaggio per prepararvi a ciò che state per vedere — il contesto, la scala, la storia e le narrazioni che fanno di Giza molto più di una fotografia. L'altopiano di Giza si trova ai margini del Sahara, e la brusca transizione — dalla città alla piramide in un solo passo — è uno dei grandi shock del viaggiare. Le tre piramidi di Cheope, Chefren e Micerino furono costruite in un periodo di 70 anni nel XXVI secolo a.C. La più grande, la Grande Piramide di Cheope, rimase la struttura più alta del mondo per quasi 4.000 anni. Nel pomeriggio, il Grande Museo Egizio — inaugurato nel 2023 dopo decenni di costruzione — presenta la più importante collezione di reperti dell'antico Egitto mai assemblata, inclusi tutti gli oggetti trovati nella tomba di Tutankhamon, esposti insieme per la prima volta.",

        steps: [{
          time: "06:00",
          description: "Ritiro in hotel o al porto ad Alessandria. Inizio del tragitto verso sud in direzione del Cairo."
        }, {
          time: "08:30",
          description: "Arrivo all'altopiano di Giza. Prima vista delle tre piramidi dalla strada di accesso orientale — la vostra guida si ferma qui per l'orientamento e le fotografie."
        }, {
          time: "09:00",
          description: "Ingresso nel sito di Giza. Visita guidata alla Grande Piramide di Cheope — camminate intorno alla base (il perimetro è di quasi 1 km), osservate le pietre di rivestimento originali vicino alla base, e comprendete il traguardo ingegneristico raggiunto. La vostra guida spiega le ultime teorie sui metodi di costruzione."
        }, {
          time: "10:00",
          description: "Camminate fino alla Piramide di Chefren — leggermente più piccola di quella di Cheope, ma appare più alta per la sua posizione elevata; conserva ancora il suo rivestimento originale in calcare sull'apice."
        }, {
          time: "10:30",
          description: "Visitate la Piramide di Micerino e le tre piramidi più piccole delle regine accanto ad essa."
        }, {
          time: "11:00",
          description: "Trasferimento alla Grande Sfinge. Fermatevi davanti all'enigmatico colosso di calcare — lungo 73 metri, scolpito da un singolo affioramento di roccia naturale — e l'adiacente Tempio della Valle di Chefren, uno degli edifici in pietra più antichi del mondo."
        }, {
          time: "11:45",
          description: "Sosta opzionale presso un punto panoramico per fotografare tutte e tre le piramidi in un'unica inquadratura."
        }, {
          time: "12:30",
          description: "Pranzo incluso in un ristorante vicino all'altopiano."
        }, {
          time: "14:00",
          description: "Trasferimento al Grande Museo Egizio, ai margini dell'altopiano di Giza."
        }, {
          time: "14:30",
          description: "Visita guidata al Grande Museo Egizio — iniziate nella Grande Sala dello Scalone, fiancheggiata da colossali statue reali; procedete verso le complete gallerie di Tutankhamon (oltre 5.000 oggetti, inclusa la maschera funebre d'oro, il trono d'oro, il santuario canopo e il sarcofago d'oro più interno); continuate attraverso la Sala delle Mummie Reali e i punti salienti della collezione permanente."
        }, {
          time: "17:00",
          description: "Partenza dal museo per il viaggio di ritorno ad Alessandria."
        }, {
          time: "19:30",
          description: "Arrivo di ritorno ad Alessandria. Riconsegna al vostro hotel o porto. Fine del tour."
        }]
      }],
      fr: [{
        day: 1,
        title: "D'Alexandrie aux pyramides — la plus grande excursion d'une journée d'Égypte",
        description: "C'est l'une des excursions d'une journée les plus saisissantes disponibles n'importe où dans le monde : quitter le front de mer méditerranéen d'Alexandrie à l'aube et arriver à la dernière merveille survivante du monde antique avant les foules matinales. Le trajet vers le sud depuis Alexandrie, à travers les plaines verdoyantes du Delta puis dans la vaste agglomération du Caire, dure environ deux heures et demie, et votre guide mettra ce temps à profit pour vous préparer à ce que vous allez voir — le contexte, l'échelle, l'histoire et les récits qui font de Gizeh bien plus qu'une simple photographie. Le plateau de Gizeh se trouve à la lisière du Sahara, et la soudaineté de la transition — de la ville à la pyramide en un seul pas — est l'un des grands chocs du voyage. Les trois pyramides de Khéops, Khéphren et Mykérinos ont été construites sur une période de 70 ans au XXVIe siècle av. J.-C. La plus grande, la Grande Pyramide de Khéops, est restée la structure la plus haute du monde pendant près de 4 000 ans. Dans l'après-midi, le Grand Musée Égyptien — ouvert en 2023 après des décennies de construction — présente la plus importante collection d'objets de l'Égypte antique jamais réunie, incluant chaque objet trouvé dans la tombe de Toutânkhamon, exposés ensemble pour la première fois.",

        steps: [{
          time: "06:00",
          description: "Prise en charge à l'hôtel ou au port à Alexandrie. Début du trajet vers le sud, en direction du Caire."
        }, {
          time: "08:30",
          description: "Arrivée au plateau de Gizeh. Première vue des trois pyramides depuis la route d'accès orientale — votre guide fait une pause ici pour l'orientation et les photographies."
        }, {
          time: "09:00",
          description: "Entrée sur le site de Gizeh. Visite guidée de la Grande Pyramide de Khéops — faites le tour de la base (le périmètre fait près de 1 km), examinez les pierres de revêtement d'origine près de la base, et comprenez la prouesse technique réalisée. Votre guide explique les dernières théories sur les méthodes de construction."
        }, {
          time: "10:00",
          description: "Marchez jusqu'à la pyramide de Khéphren — légèrement plus petite que celle de Khéops, mais paraissant plus haute en raison de sa position surélevée ; conserve encore son revêtement original en calcaire au sommet."
        }, {
          time: "10:30",
          description: "Visitez la pyramide de Mykérinos et les trois pyramides plus petites des reines situées à côté."
        }, {
          time: "11:00",
          description: "Transfert vers le Grand Sphinx. Tenez-vous devant cet énigmatique colosse en calcaire — long de 73 mètres, sculpté dans un seul affleurement de roche naturelle — et le temple de la vallée de Khéphren adjacent, l'un des plus anciens édifices en pierre du monde."
        }, {
          time: "11:45",
          description: "Arrêt optionnel à un point de vue panoramique pour photographier les trois pyramides dans un même cadre."
        }, {
          time: "12:30",
          description: "Déjeuner inclus dans un restaurant proche du plateau."
        }, {
          time: "14:00",
          description: "Transfert vers le Grand Musée Égyptien, à la lisière du plateau de Gizeh."
        }, {
          time: "14:30",
          description: "Visite guidée du Grand Musée Égyptien — commencez dans le grand hall de l'escalier monumental, bordé de statues royales colossales ; poursuivez vers les galeries complètes de Toutânkhamon (plus de 5 000 objets, dont le masque funéraire en or, le trône d'or, la châsse à canopes et le cercueil d'or le plus intérieur) ; continuez à travers la salle des momies royales et les points forts de la collection permanente."
        }, {
          time: "17:00",
          description: "Départ du musée pour le trajet de retour vers Alexandrie."
        }, {
          time: "19:30",
          description: "Retour à Alexandrie. Dépose à votre hôtel ou au port. Fin de l'excursion."
        }]
      }],
      ru: [{
        day: 1,
        title: "Из Александрии к пирамидам — лучшая однодневная поездка Египта",
        description: "Это одна из самых впечатляющих однодневных поездок, доступных где-либо в мире: покинуть средиземноморское побережье Александрии на рассвете и прибыть к последнему сохранившемуся чуду древнего мира до утренних толп. Поездка на юг из Александрии через зелёные равнины Дельты и в обширную городскую агломерацию Каира занимает около двух с половиной часов, и гид использует это время, чтобы подготовить вас к тому, что вы скоро увидите — контекст, масштаб, историю и рассказы, которые делают Гизу гораздо большим, чем просто фотография. Плато Гиза находится на краю Сахары, и резкость перехода — от города к пирамиде за один шаг — одно из величайших потрясений путешествия. Три пирамиды Хеопса, Хефрена и Микерина были построены за 70-летний период в XXVI веке до н.э. Самая крупная, Великая пирамида Хеопса, оставалась самым высоким сооружением в мире почти 4000 лет. Во второй половине дня Большой египетский музей — открытый в 2023 году после десятилетий строительства — представляет самую важную коллекцию артефактов древнего Египта, когда-либо собранную, включая каждый предмет, найденный в гробнице Тутанхамона, выставленные вместе впервые.",

        steps: [{
          time: "06:00",
          description: "Трансфер из отеля или порта в Александрии. Начало поездки на юг в направлении Каира."
        }, {
          time: "08:30",
          description: "Прибытие на плато Гиза. Первый вид на три пирамиды с восточной подъездной дороги — гид делает паузу здесь для ориентации и фотографий."
        }, {
          time: "09:00",
          description: "Вход на территорию Гизы. Экскурсия с гидом по Великой пирамиде Хеопса — прогулка вокруг основания (периметр составляет почти 1 км), осмотр оригинальных облицовочных камней у основания, понимание инженерного достижения. Гид расскажет о последних теориях методов строительства."
        }, {
          time: "10:00",
          description: "Прогулка к пирамиде Хефрена — немного меньше пирамиды Хеопса, но кажется выше из-за приподнятого положения; до сих пор сохраняет оригинальную облицовку из известняка на вершине."
        }, {
          time: "10:30",
          description: "Посещение пирамиды Микерина и трёх меньших пирамид цариц рядом с ней."
        }, {
          time: "11:00",
          description: "Переезд к Большому сфинксу. Постойте перед загадочным известняковым колоссом — 73 метра длиной, вырезанным из единого выступа природной скалы — и соседним храмом в долине Хефрена, одним из старейших каменных сооружений в мире."
        }, {
          time: "11:45",
          description: "Дополнительная остановка на панорамной смотровой площадке для фотографий всех трёх пирамид в одном кадре."
        }, {
          time: "12:30",
          description: "Обед включён, в ресторане рядом с плато."
        }, {
          time: "14:00",
          description: "Переезд в Большой египетский музей на краю плато Гиза."
        }, {
          time: "14:30",
          description: "Экскурсия с гидом по Большому египетскому музею — начните в зале Большой лестницы, обрамлённом колоссальными царскими статуями; пройдите в полные галереи Тутанхамона (более 5000 предметов, включая золотую погребальную маску, золотой трон, канопический святилище и самый внутренний золотой саркофаг); продолжите через Зал царских мумий и основные экспонаты постоянной коллекции."
        }, {
          time: "17:00",
          description: "Отъезд из музея в обратный путь до Александрии."
        }, {
          time: "19:30",
          description: "Возвращение в Александрию. Доставка в ваш отель или порт. Окончание тура."
        }]
      }],
      de: [{
        day: 1,
        title: "Von Alexandria zu den Pyramiden — Ägyptens großartigster Tagesausflug",
        description: "Dies ist einer der spektakulärsten Tagesausflüge, die weltweit verfügbar sind: Die mediterrane Strandpromenade von Alexandria bei Sonnenaufgang verlassen und vor den Vormittagsmengen am letzten erhaltenen Weltwunder der Antike eintreffen. Die Fahrt nach Süden von Alexandria, durch die grünen Tiefebenen des Deltas und in die weitläufige Metropolregion Kairo, dauert etwa zweieinhalb Stunden, und Ihr Reiseleiter wird die Fahrt nutzen, um Sie auf das vorzubereiten, was Sie gleich sehen werden — den Kontext, das Ausmaß, die Geschichte und die Erzählungen, die Gizeh zu mehr als nur einem Foto machen. Das Gizeh-Plateau liegt am Rande der Sahara, und die Plötzlichkeit des Übergangs — von der Stadt zur Pyramide in einem einzigen Schritt — ist einer der großen Schocks des Reisens. Die drei Pyramiden von Cheops, Chephren und Mykerinos wurden über einen Zeitraum von 70 Jahren im 26. Jahrhundert v. Chr. errichtet. Die größte, die Cheops-Pyramide, blieb fast 4.000 Jahre lang das höchste Bauwerk der Welt. Am Nachmittag präsentiert das Große Ägyptische Museum — 2023 nach Jahrzehnten des Baus eröffnet — die wichtigste je zusammengestellte Sammlung altägyptischer Artefakte, einschließlich jedes einzelnen Objekts, das in Tutanchamuns Grab gefunden wurde, erstmals gemeinsam ausgestellt.",

        steps: [{
          time: "06:00",
          description: "Hotel- oder Hafenabholung in Alexandria. Beginn der Fahrt nach Süden in Richtung Kairo."
        }, {
          time: "08:30",
          description: "Ankunft am Gizeh-Plateau. Erster Blick auf die drei Pyramiden von der östlichen Zufahrtsstraße — Ihr Reiseleiter macht hier eine Pause zur Orientierung und für Fotos."
        }, {
          time: "09:00",
          description: "Eintritt in das Gelände von Gizeh. Geführte Tour durch die Cheops-Pyramide — gehen Sie um die Basis herum (der Umfang beträgt fast 1 km), betrachten Sie die originalen Verkleidungssteine in der Nähe der Basis und verstehen Sie die ingenieurtechnische Leistung. Ihr Reiseleiter erklärt die neuesten Theorien zu den Bauweisen."
        }, {
          time: "10:00",
          description: "Gehen Sie zur Chephren-Pyramide — etwas kleiner als die von Cheops, wirkt jedoch durch ihre erhöhte Lage höher; sie bewahrt an der Spitze noch immer ihre ursprüngliche Kalksteinverkleidung."
        }, {
          time: "10:30",
          description: "Besuchen Sie die Mykerinos-Pyramide und die drei kleineren Königinnenpyramiden daneben."
        }, {
          time: "11:00",
          description: "Transfer zur Großen Sphinx. Stehen Sie vor dem rätselhaften Kalksteinkoloss — 73 Meter lang, aus einem einzigen natürlichen Felsvorsprung geschnitzt — und dem angrenzenden Taltempel von Chephren, einem der ältesten Steingebäude der Welt."
        }, {
          time: "11:45",
          description: "Optionaler Stopp an einem Panoramablickpunkt für Fotos aller drei Pyramiden in einem einzigen Bild."
        }, {
          time: "12:30",
          description: "Mittagessen inbegriffen, in einem Restaurant nahe dem Plateau."
        }, {
          time: "14:00",
          description: "Transfer zum Großen Ägyptischen Museum am Rande des Gizeh-Plateaus."
        }, {
          time: "14:30",
          description: "Geführte Tour durch das Große Ägyptische Museum — beginnend in der Großen Treppenhalle, gesäumt von kolossalen königlichen Statuen; weiter zu den vollständigen Tutanchamun-Galerien (über 5.000 Objekte, einschließlich der goldenen Totenmaske, des goldenen Throns, des Kanopenschreins und des innersten goldenen Sarges); weiter durch den Saal der königlichen Mumien und die Highlights der Dauerausstellung."
        }, {
          time: "17:00",
          description: "Abfahrt vom Museum zur Rückfahrt nach Alexandria."
        }, {
          time: "19:30",
          description: "Rückkehr nach Alexandria. Absetzen an Ihrem Hotel oder Hafen. Ende der Tour."
        }]
      }]
    },
  },
  {
    title: "5-Day Alexandria & Siwa Desert Tour",
    slug: "5-day-alexandria-siwa-desert-tour",
    description:
      "Embark on one of Egypt's most unique and rewarding multi-day adventures on this 5-day tour that combines the Mediterranean heritage of Alexandria with the remote, magical isolation of the Siwa Oasis deep in the Western Desert, two halves of Egypt that few travelers ever manage to see on the same trip. After exploring Alexandria's catacombs, citadel, and library, you'll drive west across the dramatic North African desert to reach Siwa — one of Egypt's most isolated and atmospheric oases, where a centuries-old Berber culture survives among the ruins of the Oracle Temple of Amun, freshwater springs that have drawn visitors since antiquity, and the breathtaking Great Sand Sea, an unbroken ocean of dunes larger than entire countries. A truly extraordinary journey off the beaten path, organized by Aurevian Tours for travelers who want to see a side of Egypt that exists well beyond the usual Nile Valley itinerary.",
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
      es: "El lobby de su hotel en Alejandría el día 1. El guía se reunirá con usted para comenzar el tour.",
      pt: "O lobby do seu hotel em Alexandria, no Dia 1. O guia irá encontrá-lo para iniciar o tour.",
      it: "La hall del vostro hotel ad Alessandria il Giorno 1. La guida vi incontrerà per iniziare il tour.",
      fr: "Le hall de votre hôtel à Alexandrie, le jour 1. Le guide vous rejoindra pour commencer l'excursion.",
      ru: "Лобби вашего отеля в Александрии в 1-й день. Гид встретит вас, чтобы начать тур.",
      de: "Die Lobby Ihres Hotels in Alexandria am 1. Tag. Der Reiseleiter trifft Sie, um die Tour zu beginnen."
    },
    accessibility: {
      en: "This tour involves significant distances by road (Alexandria to Siwa is approximately 560 km). Siwa's desert terrain is not suitable for wheelchairs. The catacombs involve a spiral staircase underground. Not recommended for guests with severe mobility issues.",
      es: "Este tour implica distancias significativas por carretera (Alejandría a Siwa son aproximadamente 560 km). El terreno desértico de Siwa no es adecuado para sillas de ruedas. Las catacumbas implican una escalera de caracol bajo tierra. No se recomienda para huéspedes con problemas graves de movilidad.",
      pt: "Este tour envolve distâncias significativas por estrada (Alexandria a Siwa são aproximadamente 560 km). O terreno desértico de Siwa não é adequado para cadeiras de rodas. As catacumbas envolvem uma escada em espiral subterrânea. Não recomendado para hóspedes com problemas graves de mobilidade.",
      it: "Questo tour comporta distanze significative su strada (da Alessandria a Siwa sono circa 560 km). Il terreno desertico di Siwa non è adatto alle sedie a rotelle. Le catacombe prevedono una scala a chiocciola sotterranea. Non consigliato per ospiti con gravi problemi di mobilità.",
      fr: "Cette excursion implique des distances importantes par la route (Alexandrie à Siwa, environ 560 km). Le terrain désertique de Siwa ne convient pas aux fauteuils roulants. Les catacombes comportent un escalier en colimaçon souterrain. Non recommandée pour les personnes ayant de graves problèmes de mobilité.",
      ru: "Этот тур предполагает значительные расстояния по дороге (от Александрии до Сивы около 560 км). Пустынная местность Сивы не подходит для инвалидных колясок. Катакомбы предполагают подземную винтовую лестницу. Не рекомендуется гостям с серьёзными проблемами с подвижностью.",
      de: "Diese Tour beinhaltet erhebliche Strecken auf der Straße (Alexandria nach Siwa sind etwa 560 km). Das Wüstengelände von Siwa ist nicht für Rollstühle geeignet. Die Katakomben erfordern eine unterirdische Wendeltreppe. Nicht empfohlen für Gäste mit starken Mobilitätseinschränkungen."
    },
    whatToBring: {
      en: ["Comfortable walking shoes and sandals", "Light summer clothing", "Warmer layer for desert nights (temperatures drop sharply)", "High SPF sunscreen", "Swimwear for the freshwater springs", "Camera", "Personal medications", "Cash (ATMs are limited in Siwa)"],
      es: [
        "Zapatos cómodos para caminar y sandalias",
        "Ropa ligera de verano",
        "Capa más abrigada para las noches del desierto (las temperaturas bajan drásticamente)",
        "Protector solar de alto FPS",
        "Traje de baño para los manantiales de agua dulce",
        "Cámara",
        "Medicamentos personales",
        "Efectivo (los cajeros automáticos son limitados en Siwa)"
      ],
      pt: [
        "Sapatos confortáveis para caminhar e sandálias",
        "Roupas leves de verão",
        "Camada mais quente para as noites no deserto (as temperaturas caem bruscamente)",
        "Protetor solar de alto FPS",
        "Roupa de banho para as fontes de água doce",
        "Câmera fotográfica",
        "Medicamentos pessoais",
        "Dinheiro em espécie (os caixas eletrônicos são limitados em Siwa)"
      ],
      it: [
        "Scarpe comode da camminata e sandali",
        "Abiti estivi leggeri",
        "Strato più caldo per le notti nel deserto (le temperature scendono drasticamente)",
        "Crema solare ad alta protezione",
        "Costume da bagno per le sorgenti di acqua dolce",
        "Macchina fotografica",
        "Farmaci personali",
        "Contanti (i bancomat sono limitati a Siwa)"
      ],
      fr: [
        "Chaussures de marche confortables et sandales",
        "Vêtements d'été légers",
        "Couche plus chaude pour les nuits désertiques (les températures chutent fortement)",
        "Crème solaire à indice élevé",
        "Maillot de bain pour les sources d'eau douce",
        "Appareil photo",
        "Médicaments personnels",
        "Espèces (les distributeurs automatiques sont rares à Siwa)"
      ],
      ru: [
        "Удобная обувь для ходьбы и сандалии",
        "Лёгкая летняя одежда",
        "Более тёплая вещь для пустынных ночей (температура резко падает)",
        "Солнцезащитный крем с высоким SPF",
        "Купальник для источников с пресной водой",
        "Фотоаппарат",
        "Личные медикаменты",
        "Наличные деньги (банкоматы в Сиве ограничены)"
      ],
      de: [
        "Bequeme Wanderschuhe und Sandalen",
        "Leichte Sommerkleidung",
        "Wärmere Schicht für die Wüstennächte (die Temperaturen fallen drastisch)",
        "Sonnenschutz mit hohem Lichtschutzfaktor",
        "Badebekleidung für die Süßwasserquellen",
        "Kamera",
        "Persönliche Medikamente",
        "Bargeld (Geldautomaten sind in Siwa begrenzt)"
      ]
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
      es: [
        "Se incluyen 4 noches de alojamiento (1 en Alejandría, 3 en Siwa).",
        "Algunas comidas están incluidas; consulte su confirmación de reserva para ver el plan completo de comidas.",
        "El trayecto de Alejandría a Siwa toma aproximadamente 7-8 horas, incluyendo paradas.",
        "El oasis de Siwa es una comunidad berber conservadora; se agradece una vestimenta modesta, especialmente en el centro del pueblo.",
        "La señal de telefonía móvil es muy limitada en Siwa; informe a su familia y amigos antes de partir.",
        "La excursión al Gran Mar de Arena en Siwa utiliza vehículos 4x4 debido al terreno."
      ],
      pt: [
        "4 noites de hospedagem estão incluídas (1 em Alexandria, 3 em Siwa).",
        "Algumas refeições estão incluídas — verifique sua confirmação de reserva para o plano completo de refeições.",
        "O trajeto de Alexandria a Siwa leva aproximadamente 7-8 horas, incluindo paradas.",
        "O Oásis de Siwa é uma comunidade berbere conservadora — vestimentas discretas são apreciadas, especialmente no centro da cidade.",
        "O sinal de celular é muito limitado em Siwa; informe família e amigos antes de partir.",
        "A excursão ao Grande Mar de Areia em Siwa utiliza veículos 4x4 devido ao terreno."
      ],
      it: [
        "Sono incluse 4 notti di alloggio (1 ad Alessandria, 3 a Siwa).",
        "Alcuni pasti sono inclusi — controllate la vostra conferma di prenotazione per il piano pasti completo.",
        "Il tragitto da Alessandria a Siwa richiede circa 7-8 ore, incluse le soste.",
        "L'Oasi di Siwa è una comunità berbera conservatrice — un abbigliamento modesto è apprezzato, soprattutto nel centro città.",
        "Il segnale del telefono cellulare è molto limitato a Siwa; informate famiglia e amici prima della partenza.",
        "L'escursione nel Grande Mare di Sabbia a Siwa utilizza veicoli 4x4 a causa del terreno."
      ],
      fr: [
        "4 nuits d'hébergement sont incluses (1 à Alexandrie, 3 à Siwa).",
        "Certains repas sont inclus — consultez votre confirmation de réservation pour le plan de repas complet.",
        "Le trajet d'Alexandrie à Siwa dure environ 7 à 8 heures, arrêts compris.",
        "L'oasis de Siwa est une communauté berbère conservatrice — une tenue vestimentaire modeste est appréciée, surtout dans le centre-ville.",
        "Le signal téléphonique est très limité à Siwa ; informez-en votre famille et vos amis avant le départ.",
        "L'excursion dans le Grand Erg de sable à Siwa s'effectue en véhicules 4x4 en raison du terrain."
      ],
      ru: [
        "Включены 4 ночи проживания (1 в Александрии, 3 в Сиве).",
        "Некоторые приёмы пищи включены — проверьте подтверждение бронирования для полного плана питания.",
        "Поездка из Александрии в Сиву занимает примерно 7-8 часов, включая остановки.",
        "Оазис Сива — консервативное берберское сообщество; скромная одежда приветствуется, особенно в центре города.",
        "Сигнал мобильной связи в Сиве очень ограничен; предупредите семью и друзей перед отъездом.",
        "Экскурсия в Большое песчаное море в Сиве проводится на автомобилях 4x4 из-за особенностей местности."
      ],
      de: [
        "4 Übernachtungen sind inbegriffen (1 in Alexandria, 3 in Siwa).",
        "Einige Mahlzeiten sind inbegriffen — prüfen Sie Ihre Buchungsbestätigung für den vollständigen Mahlzeitenplan.",
        "Die Fahrt von Alexandria nach Siwa dauert etwa 7-8 Stunden, einschließlich Pausen.",
        "Die Oase Siwa ist eine konservative Berbergemeinschaft — zurückhaltende Kleidung wird geschätzt, insbesondere im Stadtzentrum.",
        "Der Handyempfang ist in Siwa sehr eingeschränkt; informieren Sie Familie und Freunde vor der Abreise.",
        "Der Ausflug ins Große Sandmeer in Siwa erfolgt aufgrund des Geländes mit 4x4-Fahrzeugen."
      ]
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
            "Your adventure begins in Alexandria, Egypt's Mediterranean city of layered ghosts. The day covers the city's greatest ancient and modern landmarks — the underground Roman catacombs of Kom el-Shoqafa where Egyptian and Greco-Roman art collide; Pompey's Pillar standing in the ruins of the ancient Serapeum; the Qaitbay Citadel rising above the harbour where the legendary Pharos Lighthouse once stood; and the magnificent modern Bibliotheca Alexandrina. In the evening, settle into your hotel and take a walk along the Corniche as the Mediterranean darkens into night, the warm desert air finally yielding to a cooler sea breeze.",
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
            "Today the journey takes a dramatic turn west, leaving the Mediterranean behind for one of the most extraordinary landscapes on Earth. The drive from Alexandria to Siwa crosses 560 kilometres of the Western Desert — a vast, almost surreally empty plateau broken by occasional oases and the pale shimmer of distant salt flats. The road runs along the Mediterranean coast before turning inland through the ancient caravan routes that once connected Egypt to Libya and sub-Saharan Africa, the same dusty corridors that have carried traders, pilgrims, and armies for thousands of years. Siwa Oasis appears like a mirage after hours of desert — a dense green garden of palm trees and olive groves surrounding a glittering salt lake, with the ruins of ancient mud-brick towers rising from the escarpment above, the whole scene almost disorienting in its sudden burst of color after so much pale, empty sand. You'll arrive in time to check in to your Siwa ecolodge and watch the desert sunset from its rooftop, the day's long drive already beginning to feel like a worthwhile trade for the view.",
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
            "Siwa's history is as improbable as its location. An oasis in the Libyan Desert, 50 metres below sea level, it has been inhabited since at least the 10th millennium BC, and its Oracle Temple of Amun was one of the most famous in the ancient world — consulted by Croesus of Lydia, Pindar the poet, and, most famously, Alexander the Great himself, who made the desert crossing from Egypt in 331 BC to receive confirmation of his divine status, a journey of remarkable hardship undertaken specifically to hear what this remote temple's priests would tell him. Today Siwa retains its ancient character in ways few Egyptian sites do: its people speak a distinct Berber language (Siwi), its architecture is still made from karshif (salt rock and mud), and its social customs have changed relatively little over centuries, giving the whole oasis a sense of having quietly slipped outside the usual flow of modern Egyptian life.",
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
            "The Great Sand Sea is one of the world's largest sand seas — an unbroken ocean of dunes stretching from Egypt deep into Libya, covering an area larger than the entire country of Ireland. A 4WD excursion into its edge is one of the most exhilarating experiences Egypt offers: the scale, the silence, and the extraordinary sculptural forms of the dunes are genuinely unlike anything else on the planet, the landscape shifting from soft golden curves to razor-sharp ridges depending entirely on the angle of the light. The afternoon brings a visit to the Mountain of the Dead — a rocky hillside near Siwa town carved with dozens of ancient Pharaonic rock tombs — before the famous Siwa sunset from the top of a sand dune, an experience regularly described by travelers as one of the most beautiful sights anywhere in Egypt.",
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
            "The final day is the long return drive east across the Western Desert to Alexandria. The journey in reverse offers a different perspective — the desert plateau opening back into the Mediterranean coast, and eventually the city skyline of Alexandria rising ahead, a welcome and slightly disorienting return to green fields and sea air after several days surrounded by sand. Depending on your arrival time, a brief final stroll along the Alexandria Corniche before your transfer to your hotel or onward connection closes the loop on one of Egypt's most remarkable journeys.",
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
      es: [{
        day: 1,
        title: "Alejandría: ciudad de la memoria",
        description: "Su aventura comienza en Alejandría, la ciudad mediterránea de Egipto de fantasmas superpuestos. El día cubre los hitos más importantes, antiguos y modernos, de la ciudad: las catacumbas romanas subterráneas de Kom el-Shoqafa, donde colisionan el arte egipcio y grecorromano; la Columna de Pompeyo, en pie entre las ruinas del antiguo Serapeum; la Ciudadela de Qaitbay, que se eleva sobre el puerto donde una vez estuvo el legendario Faro de Alejandría; y la magnífica Biblioteca Alejandrina moderna. Por la noche, instálese en su hotel y dé un paseo por la Corniche mientras el Mediterráneo se oscurece en la noche, el aire cálido del desierto cediendo finalmente ante una brisa marina más fresca.",

        steps: [{
          time: "08:00",
          description: "Encuentro con su guía en su hotel de Alejandría. Sesión informativa de orientación para el viaje de 5 días."
        }, {
          time: "08:30",
          description: "Viaje a las Catacumbas de Kom el-Shoqafa. Descienda bajo tierra y explore la extraordinaria fusión de arte funerario egipcio y grecorromano."
        }, {
          time: "09:30",
          description: "Camine hasta la Columna de Pompeyo y las ruinas del complejo del templo del Serapeum."
        }, {
          time: "10:15",
          description: "Traslado a la Ciudadela de Qaitbay. Visita guiada a la fortaleza medieval en el sitio del antiguo Faro de Alejandría, con vistas sobre el puerto oriental."
        }, {
          time: "12:00",
          description: "Almuerzo incluido en un restaurante tradicional de mariscos alejandrino en el paseo marítimo."
        }, {
          time: "14:00",
          description: "Visite la Biblioteca Alejandrina: visita guiada a la sala de lectura principal, el Museo de Antigüedades y el Museo de Manuscritos."
        }, {
          time: "16:30",
          description: "Camine por la Corniche. Check-in en su hotel."
        }, {
          time: "19:30",
          description: "Cena por cuenta propia. Tarde libre para explorar el paseo marítimo alejandrino."
        }]
      }, {
        day: 2,
        title: "De Alejandría a Siwa: cruzando el desierto occidental",
        description: "Hoy el viaje toma un giro dramático hacia el oeste, dejando atrás el Mediterráneo por uno de los paisajes más extraordinarios de la Tierra. El trayecto de Alejandría a Siwa cruza 560 kilómetros del desierto occidental, una vasta meseta casi surrealmente vacía, interrumpida ocasionalmente por oasis y el pálido resplandor de salinas distantes. La carretera sigue la costa mediterránea antes de girar hacia el interior a través de las antiguas rutas de caravanas que una vez conectaron Egipto con Libia y el África subsahariana, los mismos corredores polvorientos que han transportado comerciantes, peregrinos y ejércitos durante miles de años. El oasis de Siwa aparece como un espejismo después de horas de desierto: un denso jardín verde de palmeras y olivares que rodea un brillante lago salado, con las ruinas de antiguas torres de adobe elevándose desde el escarpe sobre él, toda la escena casi desorientadora en su repentina explosión de color tras tanta arena pálida y vacía. Llegará a tiempo para hacer el check-in en su ecolodge de Siwa y ver la puesta de sol del desierto desde su terraza, sintiendo que el largo trayecto del día ya empieza a parecer un intercambio que vale la pena por la vista.",

        steps: [{
          time: "07:00",
          description: "Desayuno en el hotel de Alejandría. Check-out."
        }, {
          time: "08:00",
          description: "Salida de Alejandría hacia el oeste en vehículo privado."
        }, {
          time: "10:00",
          description: "Parada en El Alamein, el sitio de la batalla decisiva de la Segunda Guerra Mundial de 1942. Breve visita al Cementerio de Guerra de El Alamein y al Museo de El Alamein (entrada por cuenta propia)."
        }, {
          time: "11:30",
          description: "Continúe hacia el oeste a través del desierto costero del norte de África. Su guía explica la geografía y la historia de la región."
        }, {
          time: "13:00",
          description: "Parada para almorzar en Marsa Matrouh, un pequeño pueblo costero con una hermosa bahía. Almuerzo por cuenta propia."
        }, {
          time: "14:30",
          description: "Gire hacia el sur desde la costa hacia el interior. El paisaje cambia de matorral costero a meseta desértica abierta."
        }, {
          time: "17:00",
          description: "Descienda desde la meseta hacia la depresión de Siwa. Primeras vistas de los jardines de palmeras, los lagos salados y las antiguas ruinas del oasis de Siwa."
        }, {
          time: "17:30",
          description: "Llegada a Siwa. Check-in en el ecolodge (construcción tradicional de adobe)."
        }, {
          time: "19:00",
          description: "Cena incluida en el lodge. Su guía presenta la historia y la cultura de Siwa y describe los días que vienen."
        }]
      }, {
        day: 3,
        title: "Siwa: el Templo del Oráculo, la fortaleza de Shali y el manantial de Cleopatra",
        description: "La historia de Siwa es tan improbable como su ubicación. Un oasis en el desierto líbico, 50 metros bajo el nivel del mar, ha estado habitado desde al menos el décimo milenio a. C., y su Templo del Oráculo de Amón fue uno de los más famosos del mundo antiguo, consultado por Creso de Lidia, el poeta Píndaro y, más famosamente, por el propio Alejandro Magno, quien hizo el cruce del desierto desde Egipto en el 331 a. C. para recibir confirmación de su estatus divino, un viaje de notable dificultad emprendido específicamente para escuchar lo que le dirían los sacerdotes de este remoto templo. Hoy Siwa conserva su carácter antiguo de maneras que pocos sitios egipcios logran: su gente habla una lengua berber distintiva (siwi), su arquitectura todavía se hace con karshif (roca de sal y barro), y sus costumbres sociales han cambiado relativamente poco a lo largo de los siglos, dando a todo el oasis la sensación de haberse deslizado silenciosamente fuera del flujo habitual de la vida egipcia moderna.",

        steps: [{
          time: "08:00",
          description: "Desayuno en el lodge."
        }, {
          time: "09:00",
          description: "Camine hasta el Templo del Oráculo de Amón (Templo del Oráculo): explore las ruinas del templo de la dinastía XXVI donde Alejandro recibió su oráculo, y el adyacente Templo de Umm Ubayda. Su guía explica la famosa visita de Alejandro y la tradición del oráculo."
        }, {
          time: "10:30",
          description: "Suba a la cima de la fortaleza de Shali: la notable ciudad medieval en ruinas de adobe sobre un afloramiento rocoso en el centro de Siwa, que ofrece vistas panorámicas de todo el oasis, los jardines de palmeras, el lago Siwa y el escarpe desértico circundante."
        }, {
          time: "11:30",
          description: "Visite el manantial de Cleopatra (Ain el-Girara): una piscina natural de agua dulce que brota del subsuelo, famosa desde la antigüedad y todavía utilizada por los lugareños y visitantes. Se permite nadar."
        }, {
          time: "12:30",
          description: "Regreso al lodge. Almuerzo incluido."
        }, {
          time: "14:00",
          description: "Explore el pueblo de Siwa a pie: la plaza central, el mercado que vende joyería de plata siwana y cestas tejidas, las casas tradicionales de adobe y los huertos de palmeras datileras. Su guía le presenta a artesanos locales."
        }, {
          time: "17:00",
          description: "Visite la isla de Fatnas (Isla de la Fantasía) en el lago Siwa: una pequeña isla bordeada de palmeras en el lago salado, accesible por una calzada, famosa por sus vistas del atardecer."
        }, {
          time: "18:30",
          description: "Regreso al lodge."
        }, {
          time: "19:30",
          description: "Cena incluida."
        }]
      }, {
        day: 4,
        title: "Siwa: el Gran Mar de Arena y atardecer en el desierto",
        description: "El Gran Mar de Arena es uno de los mares de arena más grandes del mundo: un océano ininterrumpido de dunas que se extiende desde Egipto hasta lo más profundo de Libia, cubriendo un área mayor que todo el país de Irlanda. Una excursión en 4x4 hacia su borde es una de las experiencias más estimulantes que ofrece Egipto: la escala, el silencio y las extraordinarias formas esculturales de las dunas son genuinamente diferentes a cualquier otra cosa en el planeta, el paisaje cambiando de suaves curvas doradas a crestas afiladas como cuchillas dependiendo enteramente del ángulo de la luz. La tarde trae una visita a la Montaña de los Muertos, una colina rocosa cerca del pueblo de Siwa tallada con docenas de antiguas tumbas faraónicas en roca, antes del famoso atardecer de Siwa desde la cima de una duna de arena, una experiencia que los viajeros describen regularmente como una de las vistas más hermosas en cualquier lugar de Egipto.",

        steps: [{
          time: "08:00",
          description: "Desayuno en el lodge."
        }, {
          time: "09:00",
          description: "Salida en vehículos 4x4 hacia el Gran Mar de Arena."
        }, {
          time: "09:30",
          description: "Entrada al Gran Mar de Arena. Su conductor navega a través del paisaje de dunas, coronando crestas, descendiendo a valles, deteniéndose en los miradores más altos para fotografías. El silencio es total."
        }, {
          time: "11:00",
          description: "Parada en un manantial de aguas termales de agua dulce en el desierto: una piscina natural cálida rodeada de dunas. Se puede nadar."
        }, {
          time: "12:00",
          description: "Almuerzo tipo picnic en el desierto, proporcionado por el lodge."
        }, {
          time: "13:30",
          description: "Regreso a través de las dunas hacia Siwa."
        }, {
          time: "15:00",
          description: "Visite Jebel al-Mawta (Montaña de los Muertos): una colina llena de antiguas tumbas excavadas en roca de la dinastía XXVI y los períodos grecorromanos. Visite la Tumba pintada de Si-Amun, la tumba pintada más fina del desierto occidental."
        }, {
          time: "16:30",
          description: "Viaje hasta una alta duna en el borde del desierto para el famoso atardecer de Siwa: observar cómo la luz cambia sobre el oasis de palmeras y el lago salado mientras el cielo se vuelve dorado y violeta es una de las experiencias de viaje más memorables de Egipto."
        }, {
          time: "18:30",
          description: "Regreso al lodge."
        }, {
          time: "19:30",
          description: "Cena incluida. Última noche en Siwa: visita opcional a una reunión musical local, si está disponible."
        }]
      }, {
        day: 5,
        title: "De Siwa a Alejandría: viaje de regreso",
        description: "El último día es el largo viaje de regreso hacia el este a través del desierto occidental hasta Alejandría. El viaje en sentido inverso ofrece una perspectiva diferente: la meseta desértica abriéndose de nuevo hacia la costa mediterránea, y finalmente el horizonte urbano de Alejandría elevándose adelante, un regreso bienvenido y ligeramente desorientador a los campos verdes y al aire marino después de varios días rodeado de arena. Dependiendo de su hora de llegada, un breve paseo final por la Corniche de Alejandría antes de su traslado a su hotel o conexión posterior cierra el círculo de uno de los viajes más extraordinarios de Egipto.",

        steps: [{
          time: "07:00",
          description: "Desayuno en el lodge. Check-out."
        }, {
          time: "08:00",
          description: "Salida de Siwa hacia el este. Últimas vistas del oasis mientras se aleja hacia el desierto."
        }, {
          time: "10:30",
          description: "Viaje a través de la meseta del desierto occidental. Su guía comparte reflexiones sobre el viaje y responde a cualquier pregunta pendiente."
        }, {
          time: "13:00",
          description: "Parada para almorzar en Marsa Matrouh, en la costa. Almuerzo por cuenta propia."
        }, {
          time: "14:30",
          description: "Continúe hacia el este a lo largo de la costa en dirección a Alejandría."
        }, {
          time: "15:30",
          description: "Parada breve opcional en El Alamein en el camino de regreso."
        }, {
          time: "17:00",
          description: "Llegada a Alejandría. Entrega en su hotel o en la estación de tren de Alejandría. Fin del tour."
        }]
      }],
      pt: [{
        day: 1,
        title: "Alexandria — Cidade da Memória",
        description: "Sua aventura começa em Alexandria, a cidade mediterrânea do Egito de fantasmas sobrepostos. O dia abrange os maiores marcos antigos e modernos da cidade — as catacumbas romanas subterrâneas de Kom el-Shoqafa, onde a arte egípcia e greco-romana colidem; a Coluna de Pompeu, erguida nas ruínas do antigo Serapeum; a Cidadela de Qaitbay, elevando-se sobre o porto onde outrora ficava o lendário Farol de Alexandria; e a magnífica Biblioteca de Alexandria moderna. À noite, instale-se em seu hotel e faça uma caminhada pela Corniche enquanto o Mediterrâneo escurece na noite, o ar quente do deserto finalmente cedendo a uma brisa marítima mais fresca.",

        steps: [{
          time: "08:00",
          description: "Encontro com seu guia em seu hotel em Alexandria. Briefing de orientação para a jornada de 5 dias."
        }, {
          time: "08:30",
          description: "Trajeto até as Catacumbas de Kom el-Shoqafa. Desça ao subsolo e explore a notável fusão de arte funerária egípcia e greco-romana."
        }, {
          time: "09:30",
          description: "Caminhe até a Coluna de Pompeu e as ruínas do complexo do templo do Serapeum."
        }, {
          time: "10:15",
          description: "Traslado até a Cidadela de Qaitbay. Tour guiado pela fortaleza medieval no local do antigo Farol de Alexandria, com vistas sobre o Porto Oriental."
        }, {
          time: "12:00",
          description: "Almoço incluído em um restaurante tradicional de frutos do mar alexandrino, na orla."
        }, {
          time: "14:00",
          description: "Visite a Biblioteca de Alexandria — tour guiado pelo salão de leitura principal, o Museu de Antiguidades e o Museu de Manuscritos."
        }, {
          time: "16:30",
          description: "Caminhe pela Corniche. Check-in no seu hotel."
        }, {
          time: "19:30",
          description: "Jantar por conta própria. Noite livre para explorar a orla alexandrina."
        }]
      }, {
        day: 2,
        title: "De Alexandria a Siwa — Atravessando o Deserto Ocidental",
        description: "Hoje a jornada toma um rumo dramático para o oeste, deixando o Mediterrâneo para trás em direção a uma das paisagens mais extraordinárias da Terra. O trajeto de Alexandria a Siwa cruza 560 quilômetros do Deserto Ocidental — um vasto planalto quase surrealmente vazio, interrompido ocasionalmente por oásis e o pálido brilho de salinas distantes. A estrada segue a costa mediterrânea antes de virar para o interior, atravessando as antigas rotas de caravanas que outrora conectavam o Egito à Líbia e à África subsaariana — os mesmos corredores empoeirados que transportaram comerciantes, peregrinos e exércitos por milhares de anos. O Oásis de Siwa aparece como uma miragem após horas de deserto — um denso jardim verde de tamareiras e olivais ao redor de um reluzente lago salgado, com ruínas de antigas torres de barro erguendo-se da escarpa acima, toda a cena quase desorientadora em sua súbita explosão de cor após tanta areia pálida e vazia. Você chegará a tempo de fazer o check-in em seu ecolodge em Siwa e assistir ao pôr do sol do deserto a partir de seu terraço, com a longa viagem do dia já começando a parecer uma troca que vale a pena pela vista.",

        steps: [{
          time: "07:00",
          description: "Café da manhã no hotel em Alexandria. Check-out."
        }, {
          time: "08:00",
          description: "Partida de Alexandria rumo ao oeste em veículo particular."
        }, {
          time: "10:00",
          description: "Parada em El Alamein — o local da decisiva batalha da Segunda Guerra Mundial de 1942. Breve visita ao Cemitério de Guerra de El Alamein e ao Museu de El Alamein (entrada por conta própria)."
        }, {
          time: "11:30",
          description: "Continuação para o oeste através do deserto costeiro do norte da África. Seu guia explica a geografia e a história da região."
        }, {
          time: "13:00",
          description: "Parada para almoço em Marsa Matrouh — uma pequena cidade costeira com uma bela baía. Almoço por conta própria."
        }, {
          time: "14:30",
          description: "Vire para o sul, saindo da costa em direção ao interior. A paisagem muda de vegetação costeira para um planalto desértico aberto."
        }, {
          time: "17:00",
          description: "Descida do planalto para a Depressão de Siwa. Primeiras vistas dos jardins de palmeiras, lagos salgados e antigas ruínas do Oásis de Siwa."
        }, {
          time: "17:30",
          description: "Chegada a Siwa. Check-in no ecolodge (construção tradicional em tijolo de barro)."
        }, {
          time: "19:00",
          description: "Jantar incluído no lodge. Seu guia apresenta a história e cultura de Siwa e detalha os dias seguintes."
        }]
      }, {
        day: 3,
        title: "Siwa — O Templo do Oráculo, a Fortaleza Shali e a Fonte de Cleópatra",
        description: "A história de Siwa é tão improvável quanto sua localização. Um oásis no Deserto da Líbia, 50 metros abaixo do nível do mar, é habitado desde pelo menos o décimo milênio a.C., e seu Templo do Oráculo de Amon foi um dos mais famosos do mundo antigo — consultado por Creso da Lídia, pelo poeta Píndaro e, mais notavelmente, pelo próprio Alexandre, o Grande, que fez a travessia do deserto a partir do Egito em 331 a.C. para receber a confirmação de seu status divino, uma jornada de notável dificuldade empreendida especificamente para ouvir o que os sacerdotes deste templo remoto lhe diriam. Hoje Siwa preserva seu caráter antigo de maneiras que poucos sítios egípcios conseguem: seu povo fala uma língua berbere distinta (siwi), sua arquitetura ainda é feita de karshif (rocha de sal e barro), e seus costumes sociais mudaram relativamente pouco ao longo dos séculos, dando a todo o oásis a sensação de ter discretamente escapado do fluxo habitual da vida egípcia moderna.",

        steps: [{
          time: "08:00",
          description: "Café da manhã no lodge."
        }, {
          time: "09:00",
          description: "Caminhe até o Templo do Oráculo de Amon (Templo do Oráculo) — explore as ruínas do templo da 26ª dinastia onde Alexandre recebeu seu oráculo, e o adjacente Templo de Umm Ubayda. Seu guia explica a famosa visita de Alexandre e a tradição do oráculo."
        }, {
          time: "10:30",
          description: "Suba ao topo da Fortaleza de Shali — a notável cidade medieval em ruínas de tijolo de barro em um afloramento rochoso no centro de Siwa, oferecendo vistas panorâmicas de todo o oásis, dos jardins de palmeiras, do Lago Siwa e da escarpa desértica ao redor."
        }, {
          time: "11:30",
          description: "Visite a Fonte de Cleópatra (Ain el-Girara) — uma piscina natural de água doce que brota do subsolo, famosa desde a antiguidade e ainda usada por moradores e visitantes. A natação é permitida."
        }, {
          time: "12:30",
          description: "Retorno ao lodge. Almoço incluído."
        }, {
          time: "14:00",
          description: "Explore a cidade de Siwa a pé — a praça central, o mercado que vende joias de prata siwana e cestas trançadas, as casas tradicionais de tijolo de barro e os pomares de tamareiras. Seu guia apresenta artesãos locais."
        }, {
          time: "17:00",
          description: "Visite a Ilha Fatnas (Ilha da Fantasia) no Lago Siwa — uma pequena ilha margeada de palmeiras no lago salgado, acessível por uma via elevada, famosa por suas vistas do pôr do sol."
        }, {
          time: "18:30",
          description: "Retorno ao lodge."
        }, {
          time: "19:30",
          description: "Jantar incluído."
        }]
      }, {
        day: 4,
        title: "Siwa — O Grande Mar de Areia e o Pôr do Sol no Deserto",
        description: "O Grande Mar de Areia é um dos maiores mares de areia do mundo — um oceano ininterrupto de dunas que se estende do Egito até o interior profundo da Líbia, cobrindo uma área maior que toda a Irlanda. Uma excursão 4x4 até sua borda é uma das experiências mais emocionantes que o Egito oferece — a escala, o silêncio e as extraordinárias formas esculturais das dunas são genuinamente diferentes de qualquer outra coisa no planeta, com a paisagem alternando entre curvas suaves e douradas e cristas afiadas como navalhas, dependendo inteiramente do ângulo da luz. A tarde traz uma visita à Montanha dos Mortos — uma encosta rochosa próxima à cidade de Siwa, esculpida com dezenas de antigas tumbas faraônicas em rocha — antes do famoso pôr do sol de Siwa visto do topo de uma duna de areia, uma experiência regularmente descrita pelos viajantes como uma das mais belas vistas em qualquer lugar do Egito.",

        steps: [{
          time: "08:00",
          description: "Café da manhã no lodge."
        }, {
          time: "09:00",
          description: "Partida em veículos 4x4 rumo ao Grande Mar de Areia."
        }, {
          time: "09:30",
          description: "Entrada no Grande Mar de Areia. Seu motorista navega pela paisagem de dunas — subindo cristas, descendo em vales, parando nos pontos mais altos para fotografias. O silêncio é total."
        }, {
          time: "11:00",
          description: "Parada em uma fonte termal de água doce no deserto — uma piscina natural quente rodeada por dunas. Natação possível."
        }, {
          time: "12:00",
          description: "Almoço tipo piquenique no deserto, fornecido pelo lodge."
        }, {
          time: "13:30",
          description: "Retorno através das dunas até Siwa."
        }, {
          time: "15:00",
          description: "Visite Jebel al-Mawta (Montanha dos Mortos) — uma colina repleta de antigas tumbas escavadas na rocha, da 26ª dinastia e dos períodos greco-romano. Visite a Tumba pintada de Si-Amun, a mais bela tumba pintada do Deserto Ocidental."
        }, {
          time: "16:30",
          description: "Trajeto até uma duna alta na borda do deserto para o famoso pôr do sol de Siwa — observar a luz mudando sobre o oásis de palmeiras e o lago salgado enquanto o céu se torna dourado e violeta é uma das experiências de viagem mais marcantes do Egito."
        }, {
          time: "18:30",
          description: "Retorno ao lodge."
        }, {
          time: "19:30",
          description: "Jantar incluído. Última noite em Siwa — visita opcional a um encontro musical local, se disponível."
        }]
      }, {
        day: 5,
        title: "De Siwa a Alexandria — Viagem de Retorno",
        description: "O dia final é a longa viagem de retorno para o leste, através do Deserto Ocidental, até Alexandria. A jornada em sentido inverso oferece uma perspectiva diferente — o planalto desértico se abrindo novamente em direção à costa mediterrânea, e finalmente o horizonte da cidade de Alexandria se erguendo adiante, um retorno bem-vindo e ligeiramente desorientador a campos verdes e ar marítimo, após vários dias rodeado de areia. Dependendo do seu horário de chegada, uma breve caminhada final pela Corniche de Alexandria antes do traslado até seu hotel ou conexão seguinte encerra o ciclo de uma das jornadas mais notáveis do Egito.",

        steps: [{
          time: "07:00",
          description: "Café da manhã no lodge. Check-out."
        }, {
          time: "08:00",
          description: "Partida de Siwa rumo ao leste. Últimas vistas do oásis enquanto ele desaparece no deserto."
        }, {
          time: "10:30",
          description: "Trajeto através do planalto do Deserto Ocidental. Seu guia compartilha reflexões sobre a jornada e responde a quaisquer perguntas restantes."
        }, {
          time: "13:00",
          description: "Parada para almoço em Marsa Matrouh, na costa. Almoço por conta própria."
        }, {
          time: "14:30",
          description: "Continuação para o leste, ao longo da costa, em direção a Alexandria."
        }, {
          time: "15:30",
          description: "Parada breve opcional em El Alamein no caminho de volta."
        }, {
          time: "17:00",
          description: "Chegada a Alexandria. Entrega no seu hotel ou na estação de trem de Alexandria. Fim do tour."
        }]
      }],
      it: [{
        day: 1,
        title: "Alessandria — Città della Memoria",
        description: "La vostra avventura inizia ad Alessandria, la città mediterranea d'Egitto dei fantasmi sovrapposti. La giornata comprende i più grandi siti antichi e moderni della città — le catacombe romane sotterranee di Kom el-Shoqafa, dove arte egizia e greco-romana si scontrano; la Colonna di Pompeo, che si erge tra le rovine dell'antico Serapeo; la Cittadella di Qaitbay, che domina il porto dove un tempo si trovava il leggendario Faro di Alessandria; e la magnifica Biblioteca di Alessandria moderna. In serata, sistematevi nel vostro hotel e fate una passeggiata lungo la Corniche mentre il Mediterraneo si oscura nella notte, l'aria calda del deserto che finalmente lascia spazio a una brezza marina più fresca.",

        steps: [{
          time: "08:00",
          description: "Incontro con la guida nel vostro hotel ad Alessandria. Briefing di orientamento per il viaggio di 5 giorni."
        }, {
          time: "08:30",
          description: "Viaggio verso le Catacombe di Kom el-Shoqafa. Scendete sottoterra ed esplorate la notevole fusione di arte funeraria egizia e greco-romana."
        }, {
          time: "09:30",
          description: "Camminate fino alla Colonna di Pompeo e alle rovine del complesso del tempio del Serapeo."
        }, {
          time: "10:15",
          description: "Trasferimento alla Cittadella di Qaitbay. Visita guidata alla fortezza medievale sul sito dell'antico Faro di Alessandria, con vedute sul Porto Orientale."
        }, {
          time: "12:00",
          description: "Pranzo incluso in un tradizionale ristorante di pesce alessandrino sul lungomare."
        }, {
          time: "14:00",
          description: "Visitate la Biblioteca di Alessandria — visita guidata alla sala di lettura principale, al Museo delle Antichità e al Museo dei Manoscritti."
        }, {
          time: "16:30",
          description: "Passeggiata lungo la Corniche. Check-in nel vostro hotel."
        }, {
          time: "19:30",
          description: "Cena a proprio carico. Serata libera per esplorare il lungomare alessandrino."
        }]
      }, {
        day: 2,
        title: "Da Alessandria a Siwa — Attraversando il Deserto Occidentale",
        description: "Oggi il viaggio prende una svolta drammatica verso ovest, lasciando il Mediterraneo per uno dei paesaggi più straordinari della Terra. Il tragitto da Alessandria a Siwa attraversa 560 chilometri del Deserto Occidentale — un vasto altopiano quasi surrealmente vuoto, interrotto occasionalmente da oasi e dal pallido luccichio di distese saline lontane. La strada segue la costa mediterranea prima di svoltare verso l'interno attraverso le antiche rotte delle carovane che una volta collegavano l'Egitto alla Libia e all'Africa subsahariana, gli stessi corridoi polverosi che hanno trasportato mercanti, pellegrini ed eserciti per migliaia di anni. L'Oasi di Siwa appare come un miraggio dopo ore di deserto — un denso giardino verde di palme e ulivi che circonda un luccicante lago salato, con le rovine di antiche torri in mattoni di fango che si innalzano dalla scarpata sopra di esso, l'intera scena quasi disorientante nella sua improvvisa esplosione di colore dopo tanta sabbia pallida e vuota. Arriverete in tempo per fare il check-in nel vostro ecolodge a Siwa e osservare il tramonto nel deserto dal suo tetto, mentre il lungo viaggio della giornata comincia già a sembrare un prezzo ben spesso per quella vista.",

        steps: [{
          time: "07:00",
          description: "Colazione in hotel ad Alessandria. Check-out."
        }, {
          time: "08:00",
          description: "Partenza da Alessandria verso ovest con veicolo privato."
        }, {
          time: "10:00",
          description: "Sosta a El Alamein — il sito della decisiva battaglia della Seconda Guerra Mondiale del 1942. Breve visita al Cimitero di Guerra di El Alamein e al Museo di El Alamein (ingresso a proprio carico)."
        }, {
          time: "11:30",
          description: "Continuazione verso ovest attraverso il deserto costiero del Nord Africa. La vostra guida spiega la geografia e la storia della regione."
        }, {
          time: "13:00",
          description: "Sosta pranzo a Marsa Matrouh — una piccola città costiera con una splendida baia. Pranzo a proprio carico."
        }, {
          time: "14:30",
          description: "Svolta verso sud, lasciando la costa per l'entroterra. Il paesaggio passa dalla vegetazione costiera all'altopiano desertico aperto."
        }, {
          time: "17:00",
          description: "Discesa dall'altopiano nella Depressione di Siwa. Prime vedute dei giardini di palme, dei laghi salati e delle antiche rovine dell'Oasi di Siwa."
        }, {
          time: "17:30",
          description: "Arrivo a Siwa. Check-in nell'ecolodge (costruzione tradizionale in mattoni di fango)."
        }, {
          time: "19:00",
          description: "Cena inclusa al lodge. La vostra guida introduce la storia e la cultura di Siwa e illustra i giorni successivi."
        }]
      }, {
        day: 3,
        title: "Siwa — Il Tempio dell'Oracolo, la Fortezza di Shali e la Fonte di Cleopatra",
        description: "La storia di Siwa è improbabile quanto la sua posizione. Un'oasi nel Deserto Libico, 50 metri sotto il livello del mare, è abitata almeno dal X millennio a.C., e il suo Tempio dell'Oracolo di Amon era uno dei più famosi del mondo antico — consultato da Creso di Lidia, dal poeta Pindaro e, più famosamente, da Alessandro Magno stesso, che compì la traversata del deserto dall'Egitto nel 331 a.C. per ricevere la conferma del suo status divino, un viaggio di notevole difficoltà intrapreso appositamente per ascoltare ciò che i sacerdoti di questo remoto tempio gli avrebbero detto. Oggi Siwa conserva il suo carattere antico in modi che pochi siti egiziani riescono a mantenere: la sua popolazione parla una distinta lingua berbera (il siwi), la sua architettura è ancora realizzata in karshif (roccia salina e fango), e i suoi costumi sociali sono cambiati relativamente poco nel corso dei secoli, conferendo all'intera oasi la sensazione di essersi silenziosamente sottratta al consueto flusso della vita egiziana moderna.",

        steps: [{
          time: "08:00",
          description: "Colazione al lodge."
        }, {
          time: "09:00",
          description: "Camminata verso il Tempio dell'Oracolo di Amon (Tempio dell'Oracolo) — esplorate le rovine del tempio della XXVI dinastia dove Alessandro ricevette il suo oracolo, e l'adiacente Tempio di Umm Ubayda. La vostra guida spiega la famosa visita di Alessandro e la tradizione dell'oracolo."
        }, {
          time: "10:30",
          description: "Salita in cima alla Fortezza di Shali — la straordinaria città medievale in rovina, in mattoni di fango, su uno sperone roccioso nel centro di Siwa, che offre vedute panoramiche su tutta l'oasi, i giardini di palme, il Lago di Siwa e la scarpata desertica circostante."
        }, {
          time: "11:30",
          description: "Visitate la Fonte di Cleopatra (Ain el-Girara) — una piscina naturale di acqua dolce che sgorga dal sottosuolo, famosa dall'antichità e ancora usata da residenti e visitatori. È consentito nuotare."
        }, {
          time: "12:30",
          description: "Ritorno al lodge. Pranzo incluso."
        }, {
          time: "14:00",
          description: "Esplorate la città di Siwa a piedi — la piazza centrale, il mercato che vende gioielli d'argento siwani e cesti intrecciati, le tradizionali case in mattoni di fango e i frutteti di palme da dattero. La vostra guida vi presenta gli artigiani locali."
        }, {
          time: "17:00",
          description: "Visitate l'Isola di Fatnas (Isola della Fantasia) sul Lago di Siwa — una piccola isola bordata di palme nel lago salato, raggiungibile tramite una passerella, famosa per le sue vedute al tramonto."
        }, {
          time: "18:30",
          description: "Ritorno al lodge."
        }, {
          time: "19:30",
          description: "Cena inclusa."
        }]
      }, {
        day: 4,
        title: "Siwa — Il Grande Mare di Sabbia e il Tramonto nel Deserto",
        description: "Il Grande Mare di Sabbia è uno dei più grandi mari di sabbia del mondo — un oceano ininterrotto di dune che si estende dall'Egitto fino in profondità della Libia, coprendo un'area più grande dell'intera Irlanda. Un'escursione in 4x4 ai suoi margini è una delle esperienze più esaltanti che l'Egitto offre: la scala, il silenzio e le straordinarie forme scolpite delle dune sono genuinamente diverse da qualsiasi altra cosa sul pianeta, con il paesaggio che passa da dolci curve dorate a creste affilate come lame, a seconda interamente dell'angolazione della luce. Il pomeriggio porta una visita alla Montagna dei Morti — un pendio roccioso vicino alla città di Siwa, scolpito con decine di antiche tombe faraoniche scavate nella roccia — prima del famoso tramonto di Siwa dalla cima di una duna di sabbia, un'esperienza regolarmente descritta dai viaggiatori come una delle vedute più belle in qualsiasi parte dell'Egitto.",

        steps: [{
          time: "08:00",
          description: "Colazione al lodge."
        }, {
          time: "09:00",
          description: "Partenza con veicoli 4x4 verso il Grande Mare di Sabbia."
        }, {
          time: "09:30",
          description: "Ingresso nel Grande Mare di Sabbia. Il vostro conducente naviga attraverso il paesaggio dunale — superando creste, scendendo nelle valli, fermandosi nei punti panoramici più alti per le fotografie. Il silenzio è totale."
        }, {
          time: "11:00",
          description: "Sosta a una sorgente termale di acqua dolce nel deserto — una piscina naturale calda circondata da dune. È possibile nuotare."
        }, {
          time: "12:00",
          description: "Pranzo al sacco nel deserto, fornito dal lodge."
        }, {
          time: "13:30",
          description: "Ritorno attraverso le dune verso Siwa."
        }, {
          time: "15:00",
          description: "Visitate Jebel al-Mawta (Montagna dei Morti) — una collina disseminata di antiche tombe scavate nella roccia, risalenti alla XXVI dinastia e ai periodi greco-romani. Visitate la Tomba dipinta di Si-Amun, la più bella tomba dipinta del Deserto Occidentale."
        }, {
          time: "16:30",
          description: "Viaggio verso una duna alta ai margini del deserto per il famoso tramonto di Siwa — osservare la luce che cambia sull'oasi di palme e sul lago salato mentre il cielo diventa dorato e violetto è una delle esperienze di viaggio più rappresentative dell'Egitto."
        }, {
          time: "18:30",
          description: "Ritorno al lodge."
        }, {
          time: "19:30",
          description: "Cena inclusa. Ultima serata a Siwa — visita opzionale a un raduno musicale locale, se disponibile."
        }]
      }, {
        day: 5,
        title: "Da Siwa ad Alessandria — Viaggio di Ritorno",
        description: "L'ultimo giorno è il lungo viaggio di ritorno verso est, attraverso il Deserto Occidentale, fino ad Alessandria. Il viaggio in senso inverso offre una prospettiva diversa — l'altopiano desertico che si apre nuovamente verso la costa mediterranea, e infine lo skyline della città di Alessandria che si profila davanti, un ritorno benvenuto e leggermente disorientante a campi verdi e aria di mare dopo diversi giorni circondati dalla sabbia. A seconda dell'orario di arrivo, una breve passeggiata finale lungo la Corniche di Alessandria prima del trasferimento al vostro hotel o alla coincidenza successiva chiude il cerchio di uno dei viaggi più straordinari d'Egitto.",

        steps: [{
          time: "07:00",
          description: "Colazione al lodge. Check-out."
        }, {
          time: "08:00",
          description: "Partenza da Siwa verso est. Ultime vedute dell'oasi mentre svanisce nel deserto."
        }, {
          time: "10:30",
          description: "Viaggio attraverso l'altopiano del Deserto Occidentale. La vostra guida condivide riflessioni sul viaggio e risponde a eventuali domande rimaste."
        }, {
          time: "13:00",
          description: "Sosta pranzo a Marsa Matrouh, sulla costa. Pranzo a proprio carico."
        }, {
          time: "14:30",
          description: "Continuazione verso est lungo la costa in direzione di Alessandria."
        }, {
          time: "15:30",
          description: "Sosta breve opzionale a El Alamein durante il ritorno."
        }, {
          time: "17:00",
          description: "Arrivo ad Alessandria. Riconsegna al vostro hotel o alla stazione ferroviaria di Alessandria. Fine del tour."
        }]
      }],
      fr: [{
        day: 1,
        title: "Alexandrie — Ville de mémoire",
        description: "Votre aventure commence à Alexandrie, la cité méditerranéenne d'Égypte aux fantômes superposés. La journée couvre les plus grands sites antiques et modernes de la ville — les catacombes romaines souterraines de Kom el-Chouqafa, où se rencontrent l'art égyptien et gréco-romain ; la colonne de Pompée, dressée parmi les ruines de l'ancien Sérapéum ; la citadelle de Qaitbay, dominant le port où se trouvait jadis le légendaire phare d'Alexandrie ; et la magnifique Bibliotheca Alexandrina moderne. Le soir, installez-vous dans votre hôtel et faites une promenade le long de la corniche tandis que la Méditerranée s'assombrit dans la nuit, l'air chaud du désert céder enfin la place à une brise marine plus fraîche.",

        steps: [{
          time: "08:00",
          description: "Rencontre avec votre guide à votre hôtel à Alexandrie. Briefing d'orientation pour le voyage de 5 jours."
        }, {
          time: "08:30",
          description: "Trajet vers les catacombes de Kom el-Chouqafa. Descendez sous terre et explorez la remarquable fusion de l'art funéraire égyptien et gréco-romain."
        }, {
          time: "09:30",
          description: "Marchez jusqu'à la colonne de Pompée et aux ruines du complexe du temple du Sérapéum."
        }, {
          time: "10:15",
          description: "Transfert vers la citadelle de Qaitbay. Visite guidée de la forteresse médiévale sur le site de l'ancien phare d'Alexandrie, avec vue sur le port oriental."
        }, {
          time: "12:00",
          description: "Déjeuner inclus dans un restaurant de fruits de mer traditionnel alexandrin, sur le front de mer."
        }, {
          time: "14:00",
          description: "Visitez la Bibliotheca Alexandrina — visite guidée de la grande salle de lecture, du musée des Antiquités et du musée des Manuscrits."
        }, {
          time: "16:30",
          description: "Promenade le long de la corniche. Enregistrement à votre hôtel."
        }, {
          time: "19:30",
          description: "Dîner à votre charge. Soirée libre pour explorer le front de mer alexandrin."
        }]
      }, {
        day: 2,
        title: "D'Alexandrie à Siwa — Traversée du désert occidental",
        description: "Aujourd'hui, le voyage prend un tournant spectaculaire vers l'ouest, laissant la Méditerranée derrière soi pour l'un des paysages les plus extraordinaires de la planète. Le trajet d'Alexandrie à Siwa traverse 560 kilomètres du désert occidental — un vaste plateau presque irréellement vide, interrompu occasionnellement par des oasis et le pâle scintillement de salines lointaines. La route suit la côte méditerranéenne avant de tourner vers l'intérieur, sur les anciennes routes caravanières qui reliaient autrefois l'Égypte à la Libye et à l'Afrique subsaharienne — les mêmes corridors poussiéreux qui ont vu passer marchands, pèlerins et armées pendant des milliers d'années. L'oasis de Siwa apparaît comme un mirage après des heures de désert — un dense jardin vert de palmiers et d'oliviers entourant un lac salé scintillant, avec les ruines d'anciennes tours en briques de terre s'élevant depuis l'escarpement au-dessus, toute la scène presque déroutante dans sa soudaine explosion de couleur après tant de sable pâle et vide. Vous arriverez à temps pour vous enregistrer dans votre écolodge de Siwa et observer le coucher de soleil sur le désert depuis son toit-terrasse, le long trajet de la journée commençant déjà à sembler un échange amplement valable pour cette vue.",

        steps: [{
          time: "07:00",
          description: "Petit-déjeuner à l'hôtel d'Alexandrie. Départ de l'hôtel."
        }, {
          time: "08:00",
          description: "Départ d'Alexandrie vers l'ouest en véhicule privé."
        }, {
          time: "10:00",
          description: "Arrêt à El Alamein — le site de la bataille décisive de la Seconde Guerre mondiale de 1942. Brève visite du cimetière militaire d'El Alamein et du musée d'El Alamein (entrée à votre charge)."
        }, {
          time: "11:30",
          description: "Poursuite vers l'ouest à travers le désert côtier d'Afrique du Nord. Votre guide explique la géographie et l'histoire de la région."
        }, {
          time: "13:00",
          description: "Arrêt déjeuner à Marsa Matrouh — une petite ville côtière dotée d'une magnifique baie. Déjeuner à votre charge."
        }, {
          time: "14:30",
          description: "Bifurcation vers le sud, quittant la côte pour l'intérieur des terres. Le paysage passe d'une végétation côtière à un plateau désertique ouvert."
        }, {
          time: "17:00",
          description: "Descente du plateau vers la dépression de Siwa. Premières vues sur les jardins de palmiers, les lacs salés et les ruines anciennes de l'oasis de Siwa."
        }, {
          time: "17:30",
          description: "Arrivée à Siwa. Enregistrement à l'écolodge (construction traditionnelle en briques de terre)."
        }, {
          time: "19:00",
          description: "Dîner inclus au lodge. Votre guide présente l'histoire et la culture de Siwa et trace les contours des jours à venir."
        }]
      }, {
        day: 3,
        title: "Siwa — Le temple de l'Oracle, la forteresse de Shali et la source de Cléopâtre",
        description: "L'histoire de Siwa est aussi improbable que son emplacement. Oasis du désert libyque, à 50 mètres sous le niveau de la mer, elle est habitée depuis au moins le Xe millénaire av. J.-C., et son temple de l'Oracle d'Amon était l'un des plus célèbres du monde antique — consulté par Crésus de Lydie, le poète Pindare, et, plus célèbre encore, par Alexandre le Grand lui-même, qui effectua la traversée du désert depuis l'Égypte en 331 av. J.-C. pour recevoir la confirmation de son statut divin, un voyage d'une difficulté remarquable entrepris spécifiquement pour entendre ce que les prêtres de ce temple isolé auraient à lui dire. Aujourd'hui, Siwa conserve son caractère ancien d'une manière que peu de sites égyptiens parviennent à préserver : ses habitants parlent une langue berbère distincte (le siwi), son architecture est encore réalisée en karchif (roche salée et boue), et ses coutumes sociales ont relativement peu changé au fil des siècles, donnant à toute l'oasis le sentiment d'avoir discrètement échappé au cours habituel de la vie égyptienne moderne.",

        steps: [{
          time: "08:00",
          description: "Petit-déjeuner au lodge."
        }, {
          time: "09:00",
          description: "Marche jusqu'au temple de l'Oracle d'Amon (temple de l'Oracle) — explorez les ruines du temple de la XXVIe dynastie où Alexandre reçut son oracle, ainsi que le temple voisin d'Umm Ubayda. Votre guide explique la célèbre visite d'Alexandre et la tradition de l'oracle."
        }, {
          time: "10:30",
          description: "Montée au sommet de la forteresse de Shali — la remarquable cité médiévale en ruines, construite en briques de terre sur un affleurement rocheux au centre de Siwa, offrant des vues panoramiques sur l'ensemble de l'oasis, les jardins de palmiers, le lac Siwa et l'escarpement désertique environnant."
        }, {
          time: "11:30",
          description: "Visite de la source de Cléopâtre (Ain el-Girara) — un bassin naturel d'eau douce jaillissant du sous-sol, célèbre depuis l'Antiquité et toujours utilisé par les habitants et les visiteurs. La baignade y est autorisée."
        }, {
          time: "12:30",
          description: "Retour au lodge. Déjeuner inclus."
        }, {
          time: "14:00",
          description: "Exploration à pied de la ville de Siwa — la place centrale, le marché vendant des bijoux en argent siwi et des paniers tressés, les maisons traditionnelles en briques de terre et les vergers de palmiers dattiers. Votre guide vous présente des artisans locaux."
        }, {
          time: "17:00",
          description: "Visite de l'île de Fatnas (île de la fantaisie) sur le lac Siwa — une petite île bordée de palmiers dans le lac salé, accessible par une chaussée, célèbre pour ses vues sur le coucher de soleil."
        }, {
          time: "18:30",
          description: "Retour au lodge."
        }, {
          time: "19:30",
          description: "Dîner inclus."
        }]
      }, {
        day: 4,
        title: "Siwa — Le Grand Erg de sable et coucher de soleil dans le désert",
        description: "Le Grand Erg de sable est l'un des plus vastes ergs du monde — un océan ininterrompu de dunes s'étendant de l'Égypte jusqu'au cœur de la Libye, couvrant une superficie plus grande que l'Irlande entière. Une excursion en 4x4 à sa lisière est l'une des expériences les plus exaltantes que l'Égypte ait à offrir : l'échelle, le silence et les formes sculpturales extraordinaires des dunes ne ressemblent véritablement à rien d'autre sur la planète, le paysage passant de douces courbes dorées à des crêtes acérées comme des lames, selon l'angle de la lumière. L'après-midi est consacré à une visite de la montagne des Morts — une colline rocheuse près de la ville de Siwa, creusée de dizaines d'anciennes tombes pharaoniques rupestres — avant le célèbre coucher de soleil de Siwa, observé du sommet d'une dune de sable, une expérience régulièrement décrite par les voyageurs comme l'un des plus beaux spectacles que l'Égypte ait à offrir.",

        steps: [{
          time: "08:00",
          description: "Petit-déjeuner au lodge."
        }, {
          time: "09:00",
          description: "Départ en véhicules 4x4 vers le Grand Erg de sable."
        }, {
          time: "09:30",
          description: "Entrée dans le Grand Erg de sable. Votre chauffeur navigue à travers le paysage de dunes — gravissant des crêtes, descendant dans des vallées, s'arrêtant aux points de vue les plus élevés pour des photographies. Le silence y est total."
        }, {
          time: "11:00",
          description: "Arrêt à une source d'eau chaude douce dans le désert — un bassin naturel chaud entouré de dunes. Baignade possible."
        }, {
          time: "12:00",
          description: "Pique-nique déjeuner dans le désert, fourni par le lodge."
        }, {
          time: "13:30",
          description: "Retour à travers les dunes vers Siwa."
        }, {
          time: "15:00",
          description: "Visite de Jebel al-Mawta (montagne des Morts) — une colline parsemée d'anciennes tombes rupestres datant de la XXVIe dynastie et des périodes gréco-romaines. Visitez la tombe peinte de Si-Amun, la plus belle tombe peinte du désert occidental."
        }, {
          time: "16:30",
          description: "Trajet vers une haute dune à la lisière du désert pour le célèbre coucher de soleil de Siwa — observer la lumière changer sur l'oasis de palmiers et le lac salé tandis que le ciel se teinte d'or et de violet est l'une des expériences de voyage les plus marquantes en Égypte."
        }, {
          time: "18:30",
          description: "Retour au lodge."
        }, {
          time: "19:30",
          description: "Dîner inclus. Dernière soirée à Siwa — visite optionnelle d'une réunion musicale locale, si disponible."
        }]
      }, {
        day: 5,
        title: "De Siwa à Alexandrie — Trajet de retour",
        description: "La dernière journée est consacrée au long trajet de retour vers l'est, à travers le désert occidental, jusqu'à Alexandrie. Le voyage en sens inverse offre une perspective différente — le plateau désertique se rouvrant vers la côte méditerranéenne, puis finalement la silhouette de la ville d'Alexandrie se dessinant à l'horizon, un retour bienvenu et légèrement déroutant vers les champs verts et l'air marin après plusieurs jours entourés de sable. Selon votre heure d'arrivée, une brève dernière promenade le long de la corniche d'Alexandrie avant votre transfert vers votre hôtel ou votre correspondance suivante clôt le cercle de l'un des voyages les plus remarquables d'Égypte.",

        steps: [{
          time: "07:00",
          description: "Petit-déjeuner au lodge. Départ du lodge."
        }, {
          time: "08:00",
          description: "Départ de Siwa vers l'est. Dernières vues de l'oasis tandis qu'elle s'efface dans le désert."
        }, {
          time: "10:30",
          description: "Trajet à travers le plateau du désert occidental. Votre guide partage ses réflexions sur le voyage et répond aux questions restantes."
        }, {
          time: "13:00",
          description: "Arrêt déjeuner à Marsa Matrouh, sur la côte. Déjeuner à votre charge."
        }, {
          time: "14:30",
          description: "Poursuite vers l'est le long de la côte en direction d'Alexandrie."
        }, {
          time: "15:30",
          description: "Arrêt bref optionnel à El Alamein sur le chemin du retour."
        }, {
          time: "17:00",
          description: "Arrivée à Alexandrie. Dépose à votre hôtel ou à la gare d'Alexandrie. Fin de l'excursion."
        }]
      }],
      ru: [{
        day: 1,
        title: "Александрия — город памяти",
        description: "Ваше приключение начинается в Александрии — средиземноморском городе Египта, полном наслаивающихся друг на друга призраков прошлого. День охватывает самые значимые древние и современные достопримечательности города — подземные римские катакомбы Ком-эш-Шукафа, где встречаются египетское и греко-римское искусство; Колонну Помпея, возвышающуюся среди руин древнего Серапеума; цитадель Кайт-бей, нависающую над гаванью, где когда-то стоял легендарный Александрийский маяк; и величественную современную Александрийскую библиотеку. Вечером расположитесь в своём отеле и прогуляйтесь по Корниш, пока Средиземное море темнеет в ночи, а тёплый пустынный воздух наконец сменяется более прохладным морским ветерком.",

        steps: [{
          time: "08:00",
          description: "Встреча с гидом в вашем отеле в Александрии. Ориентационный инструктаж для 5-дневного путешествия."
        }, {
          time: "08:30",
          description: "Поездка к катакомбам Ком-эш-Шукафа. Спуск под землю и изучение удивительного слияния египетского и греко-римского погребального искусства."
        }, {
          time: "09:30",
          description: "Прогулка к Колонне Помпея и руинам храмового комплекса Серапеума."
        }, {
          time: "10:15",
          description: "Переезд к цитадели Кайт-бей. Экскурсия с гидом по средневековой крепости на месте древнего Александрийского маяка с видами на Восточную гавань."
        }, {
          time: "12:00",
          description: "Обед включён, в традиционном александрийском ресторане морепродуктов на набережной."
        }, {
          time: "14:00",
          description: "Посещение Александрийской библиотеки — экскурсия с гидом по главному читальному залу, Музею античности и Музею рукописей."
        }, {
          time: "16:30",
          description: "Прогулка по Корниш. Регистрация в вашем отеле."
        }, {
          time: "19:30",
          description: "Ужин за собственный счёт. Свободный вечер для прогулки по александрийской набережной."
        }]
      }, {
        day: 2,
        title: "Из Александрии в Сиву — пересечение Западной пустыни",
        description: "Сегодня путешествие резко меняет направление на запад, оставляя Средиземное море позади ради одного из самых удивительных ландшафтов на Земле. Дорога из Александрии в Сиву пересекает 560 километров Западной пустыни — огромное, почти сюрреалистично пустое плато, лишь иногда прерываемое оазисами и бледным блеском далёких солончаков. Дорога идёт вдоль средиземноморского побережья, прежде чем повернуть в глубь страны по древним караванным путям, которые когда-то соединяли Египет с Ливией и Африкой к югу от Сахары — тем самым пыльным коридорам, по которым тысячелетиями шли торговцы, паломники и армии. Оазис Сива появляется как мираж после нескольких часов пустыни — густой зелёный сад из пальм и оливковых рощ, окружающий блестящее солёное озеро, с руинами древних глиняных башен, поднимающихся из утёса над ним, и вся эта картина почти ошеломляет внезапным взрывом цвета после столь долгого бледного и пустого песка. Вы прибудете вовремя, чтобы зарегистрироваться в своём экологическом лодже в Сиве и понаблюдать за пустынным закатом с его крыши, и долгая дневная поездка уже начинает казаться более чем оправданной ценой за этот вид.",

        steps: [{
          time: "07:00",
          description: "Завтрак в отеле в Александрии. Выезд из отеля."
        }, {
          time: "08:00",
          description: "Отъезд из Александрии на запад на частном автомобиле."
        }, {
          time: "10:00",
          description: "Остановка в Эль-Аламейне — месте решающего сражения Второй мировой войны 1942 года. Короткое посещение Военного кладбища Эль-Аламейна и Музея Эль-Аламейна (вход за собственный счёт)."
        }, {
          time: "11:30",
          description: "Продолжение пути на запад через прибрежную пустыню Северной Африки. Гид расскажет о географии и истории региона."
        }, {
          time: "13:00",
          description: "Остановка на обед в Марса-Матрухе — небольшом прибрежном городе с красивым заливом. Обед за собственный счёт."
        }, {
          time: "14:30",
          description: "Поворот на юг от побережья в глубь страны. Ландшафт меняется от прибрежной растительности к открытому пустынному плато."
        }, {
          time: "17:00",
          description: "Спуск с плато в Сивскую впадину. Первые виды на пальмовые сады, солёные озёра и древние руины оазиса Сива."
        }, {
          time: "17:30",
          description: "Прибытие в Сиву. Регистрация в экологическом лодже (традиционная постройка из глиняных кирпичей)."
        }, {
          time: "19:00",
          description: "Ужин включён, в лодже. Гид расскажет об истории и культуре Сивы и опишет предстоящие дни."
        }]
      }, {
        day: 3,
        title: "Сива — Храм Оракула, крепость Шали и источник Клеопатры",
        description: "История Сивы столь же невероятна, как и её расположение. Оазис в Ливийской пустыне, на 50 метров ниже уровня моря, был заселён по меньшей мере с десятого тысячелетия до н.э., а его храм Оракула Амона был одним из самых знаменитых в древнем мире — к нему обращались Крёз Лидийский, поэт Пиндар и, что наиболее известно, сам Александр Македонский, совершивший переход через пустыню из Египта в 331 году до н.э., чтобы получить подтверждение своего божественного статуса — путешествие исключительной сложности, предпринятое специально, чтобы услышать, что скажут жрецы этого отдалённого храма. Сегодня Сива сохраняет свой древний характер так, как немногим египетским памятникам удаётся: её жители говорят на особом берберском языке (сиви), её архитектура до сих пор строится из каршифа (соляной породы и глины), а её социальные обычаи изменились относительно мало за прошедшие века, придавая всему оазису ощущение, будто он тихо выскользнул из обычного потока современной египетской жизни.",

        steps: [{
          time: "08:00",
          description: "Завтрак в лодже."
        }, {
          time: "09:00",
          description: "Прогулка к Храму Оракула Амона (Храм Оракула) — изучение руин храма XXVI династии, где Александр получил своё пророчество, и соседнего храма Умм-Убайды. Гид расскажет о знаменитом визите Александра и традиции оракула."
        }, {
          time: "10:30",
          description: "Подъём на вершину крепости Шали — впечатляющего средневекового глиняного города-руины на скальном выступе в центре Сивы, откуда открываются панорамные виды на весь оазис, пальмовые сады, озеро Сива и окружающий пустынный утёс."
        }, {
          time: "11:30",
          description: "Посещение источника Клеопатры (Айн-эль-Гирара) — естественного бассейна с пресной водой, бьющей из-под земли, известного с древности и до сих пор используемого местными жителями и посетителями. Плавание разрешено."
        }, {
          time: "12:30",
          description: "Возвращение в лодж. Обед включён."
        }, {
          time: "14:00",
          description: "Прогулка по городу Сива пешком — центральная площадь, рынок, где продаются сивские серебряные украшения и плетёные корзины, традиционные глиняные дома и сады финиковых пальм. Гид познакомит вас с местными мастерами."
        }, {
          time: "17:00",
          description: "Посещение острова Фатнас (острова Фантазий) на озере Сива — небольшого острова, окружённого пальмами, на солёном озере, доступного по дамбе и известного своими видами на закат."
        }, {
          time: "18:30",
          description: "Возвращение в лодж."
        }, {
          time: "19:30",
          description: "Ужин включён."
        }]
      }, {
        day: 4,
        title: "Сива — Большое песчаное море и закат в пустыне",
        description: "Большое песчаное море — одно из крупнейших песчаных морей в мире: непрерывный океан дюн, простирающийся от Египта глубоко в Ливию и покрывающий территорию, большую, чем вся Ирландия. Поездка на 4x4 к его краю — одно из самых волнующих впечатлений, которое может предложить Египет: масштаб, тишина и удивительные скульптурные формы дюн действительно не похожи ни на что другое на планете, а ландшафт меняется от мягких золотистых изгибов до острых, как лезвие, гребней, в зависимости исключительно от угла падения света. Во второй половине дня состоится посещение Горы Мёртвых — скального холма недалеко от города Сива, в котором высечены десятки древних фараоновских гробниц, — а затем знаменитый закат в Сиве с вершины песчаной дюны, опыт, который путешественники регулярно описывают как один из самых красивых видов во всём Египте.",

        steps: [{
          time: "08:00",
          description: "Завтрак в лодже."
        }, {
          time: "09:00",
          description: "Отъезд на автомобилях 4x4 в Большое песчаное море."
        }, {
          time: "09:30",
          description: "Вход в Большое песчаное море. Водитель ведёт машину через ландшафт дюн — поднимаясь на гребни, спускаясь в долины, останавливаясь на самых высоких точках обзора для фотографий. Тишина абсолютна."
        }, {
          time: "11:00",
          description: "Остановка у термального источника с пресной водой в пустыне — естественного тёплого бассейна, окружённого дюнами. Возможно плавание."
        }, {
          time: "12:00",
          description: "Пикник-обед в пустыне, предоставленный лоджем."
        }, {
          time: "13:30",
          description: "Возвращение через дюны в Сиву."
        }, {
          time: "15:00",
          description: "Посещение Джебель-эль-Мавты (Горы Мёртвых) — холма, изобилующего древними гробницами, высеченными в скале, периода XXVI династии и греко-римского времени. Посещение расписной гробницы Си-Амуна, самой прекрасной расписной гробницы в Западной пустыне."
        }, {
          time: "16:30",
          description: "Поездка к высокой дюне на краю пустыни для знаменитого сивского заката — наблюдение за тем, как меняется свет над пальмовым оазисом и солёным озером, пока небо окрашивается в золотые и фиолетовые тона, является одним из самых запоминающихся путевых впечатлений в Египте."
        }, {
          time: "18:30",
          description: "Возвращение в лодж."
        }, {
          time: "19:30",
          description: "Ужин включён. Последний вечер в Сиве — дополнительное посещение местного музыкального вечера, если доступно."
        }]
      }, {
        day: 5,
        title: "Из Сивы в Александрию — обратный путь",
        description: "Последний день — это долгий обратный путь на восток через Западную пустыню до Александрии. Путешествие в обратном направлении предлагает иной взгляд — пустынное плато снова открывается к средиземноморскому побережью, и наконец впереди вырастает силуэт города Александрии — желанное и слегка дезориентирующее возвращение к зелёным полям и морскому воздуху после нескольких дней, проведённых среди песков. В зависимости от времени прибытия, последняя короткая прогулка по александрийской набережной перед трансфером в ваш отель или на следующий пересадочный пункт замыкает круг одного из самых необычных путешествий Египта.",

        steps: [{
          time: "07:00",
          description: "Завтрак в лодже. Выезд из лоджа."
        }, {
          time: "08:00",
          description: "Отъезд из Сивы на восток. Последние виды на оазис, пока он исчезает в пустыне."
        }, {
          time: "10:30",
          description: "Поездка через плато Западной пустыни. Гид поделится размышлениями о поездке и ответит на оставшиеся вопросы."
        }, {
          time: "13:00",
          description: "Остановка на обед в Марса-Матрухе на побережье. Обед за собственный счёт."
        }, {
          time: "14:30",
          description: "Продолжение пути на восток вдоль побережья в направлении Александрии."
        }, {
          time: "15:30",
          description: "Дополнительная короткая остановка в Эль-Аламейне на обратном пути."
        }, {
          time: "17:00",
          description: "Прибытие в Александрию. Доставка в ваш отель или на железнодорожную станцию Александрии. Окончание тура."
        }]
      }],
      de: [{
        day: 1,
        title: "Alexandria — Stadt der Erinnerung",
        description: "Ihr Abenteuer beginnt in Alexandria, Ägyptens mediterraner Stadt der übereinanderliegenden Geister. Der Tag umfasst die bedeutendsten antiken und modernen Sehenswürdigkeiten der Stadt — die unterirdischen römischen Katakomben von Kom el-Shoqafa, wo ägyptische und griechisch-römische Kunst aufeinandertreffen; die Pompeius-Säule, die zwischen den Ruinen des antiken Serapeum-Tempels steht; die Zitadelle von Qaitbay, die über dem Hafen aufragt, an dem einst der legendäre Leuchtturm von Alexandria stand; und die prächtige moderne Bibliotheca Alexandrina. Am Abend richten Sie sich in Ihrem Hotel ein und schlendern entlang der Corniche, während sich das Mittelmeer in der Nacht verdunkelt und die warme Wüstenluft endlich einer kühleren Meeresbrise weicht.",

        steps: [{
          time: "08:00",
          description: "Treffen mit Ihrem Reiseleiter in Ihrem Hotel in Alexandria. Orientierungsbriefing für die 5-tägige Reise."
        }, {
          time: "08:30",
          description: "Fahrt zu den Katakomben von Kom el-Shoqafa. Steigen Sie hinab unter die Erde und erkunden Sie die bemerkenswerte Verschmelzung ägyptischer und griechisch-römischer Grabkunst."
        }, {
          time: "09:30",
          description: "Gehen Sie zur Pompeius-Säule und den Ruinen des Serapeum-Tempelkomplexes."
        }, {
          time: "10:15",
          description: "Transfer zur Zitadelle von Qaitbay. Geführte Tour durch die mittelalterliche Festung an der Stelle des antiken Leuchtturms von Alexandria, mit Blick über den Östlichen Hafen."
        }, {
          time: "12:00",
          description: "Mittagessen inbegriffen, in einem traditionellen alexandrinischen Fischrestaurant an der Uferpromenade."
        }, {
          time: "14:00",
          description: "Besuchen Sie die Bibliotheca Alexandrina — geführte Tour durch den Hauptlesesaal, das Antikenmuseum und das Manuskriptmuseum."
        }, {
          time: "16:30",
          description: "Spaziergang entlang der Corniche. Check-in in Ihrem Hotel."
        }, {
          time: "19:30",
          description: "Abendessen auf eigene Kosten. Freier Abend, um die alexandrinische Uferpromenade zu erkunden."
        }]
      }, {
        day: 2,
        title: "Von Alexandria nach Siwa — Durchquerung der Westlichen Wüste",
        description: "Heute nimmt die Reise eine dramatische Wendung nach Westen und lässt das Mittelmeer hinter sich für eine der außergewöhnlichsten Landschaften der Erde. Die Fahrt von Alexandria nach Siwa durchquert 560 Kilometer der Westlichen Wüste — ein riesiges, fast surreal leeres Plateau, das gelegentlich von Oasen und dem blassen Glitzern entfernter Salzpfannen unterbrochen wird. Die Straße folgt der Mittelmeerküste, bevor sie ins Landesinnere abbiegt, entlang der alten Karawanenrouten, die einst Ägypten mit Libyen und Subsahara-Afrika verbanden — dieselben staubigen Korridore, auf denen seit Jahrtausenden Händler, Pilger und Heere unterwegs waren. Die Oase Siwa erscheint nach stundenlanger Wüste wie eine Fata Morgana — ein dichter grüner Garten aus Palmen und Olivenhainen rund um einen glitzernden Salzsee, mit den Ruinen antiker Lehmtürme, die sich über der Steilwand erheben, die ganze Szene fast desorientierend in ihrem plötzlichen Farbausbruch nach so viel blassem, leerem Sand. Sie werden rechtzeitig eintreffen, um in Ihrem Ökolodge in Siwa einzuchecken und den Wüstensonnenuntergang von seinem Dach aus zu beobachten — die lange Fahrt des Tages beginnt bereits, sich als lohnenden Tausch für diesen Anblick anzufühlen.",

        steps: [{
          time: "07:00",
          description: "Frühstück im Hotel in Alexandria. Check-out."
        }, {
          time: "08:00",
          description: "Abfahrt von Alexandria nach Westen mit privatem Fahrzeug."
        }, {
          time: "10:00",
          description: "Stopp in El Alamein — dem Ort der entscheidenden Schlacht des Zweiten Weltkriegs von 1942. Kurzer Besuch des Kriegsfriedhofs von El Alamein und des El-Alamein-Museums (Eintritt auf eigene Kosten)."
        }, {
          time: "11:30",
          description: "Weiterfahrt nach Westen durch die nordafrikanische Küstenwüste. Ihr Reiseleiter erklärt die Geografie und Geschichte der Region."
        }, {
          time: "13:00",
          description: "Mittagspause in Marsa Matrouh — einer kleinen Küstenstadt mit einer wunderschönen Bucht. Mittagessen auf eigene Kosten."
        }, {
          time: "14:30",
          description: "Abbiegen nach Süden, weg von der Küste ins Landesinnere. Die Landschaft wechselt von Küstenvegetation zu offenem Wüstenplateau."
        }, {
          time: "17:00",
          description: "Abstieg vom Plateau in die Siwa-Senke. Erste Ausblicke auf die Palmengärten, Salzseen und antiken Ruinen der Oase Siwa."
        }, {
          time: "17:30",
          description: "Ankunft in Siwa. Check-in im Ökolodge (traditionelle Lehmziegelbauweise)."
        }, {
          time: "19:00",
          description: "Abendessen inbegriffen, in der Lodge. Ihr Reiseleiter stellt die Geschichte und Kultur von Siwa vor und skizziert die kommenden Tage."
        }]
      }, {
        day: 3,
        title: "Siwa — Der Orakeltempel, die Festung Shali & die Quelle der Kleopatra",
        description: "Die Geschichte von Siwa ist ebenso unwahrscheinlich wie seine Lage. Eine Oase in der libyschen Wüste, 50 Meter unter dem Meeresspiegel, ist mindestens seit dem 10. Jahrtausend v. Chr. bewohnt, und ihr Orakeltempel des Amun war einer der berühmtesten der antiken Welt — konsultiert von Krösus von Lydien, dem Dichter Pindar und, am bekanntesten, von Alexander dem Großen selbst, der 331 v. Chr. die Wüstendurchquerung von Ägypten aus unternahm, um die Bestätigung seines göttlichen Status zu erhalten — eine Reise von beachtlicher Schwierigkeit, die eigens unternommen wurde, um zu hören, was die Priester dieses abgelegenen Tempels ihm sagen würden. Heute bewahrt Siwa seinen antiken Charakter auf eine Weise, wie es nur wenigen ägyptischen Stätten gelingt: Seine Bewohner sprechen eine eigene Berbersprache (Siwi), seine Architektur wird noch immer aus Karshif (Salzgestein und Lehm) errichtet, und seine sozialen Bräuche haben sich über die Jahrhunderte relativ wenig verändert, was der gesamten Oase das Gefühl gibt, sich leise aus dem üblichen Fluss des modernen ägyptischen Lebens herausgeschlichen zu haben.",

        steps: [{
          time: "08:00",
          description: "Frühstück in der Lodge."
        }, {
          time: "09:00",
          description: "Spaziergang zum Orakeltempel des Amun (Orakeltempel) — erkunden Sie die Ruinen des Tempels aus der 26. Dynastie, in dem Alexander sein Orakel erhielt, sowie den angrenzenden Tempel von Umm Ubayda. Ihr Reiseleiter erklärt den berühmten Besuch Alexanders und die Tradition des Orakels."
        }, {
          time: "10:30",
          description: "Aufstieg zur Spitze der Festung Shali — der bemerkenswerten mittelalterlichen Ruinenstadt aus Lehmziegeln auf einem Felsvorsprung im Zentrum von Siwa, die Panoramablicke über die gesamte Oase, die Palmengärten, den Siwasee und die umgebende Wüstensteilwand bietet."
        }, {
          time: "11:30",
          description: "Besuchen Sie die Quelle der Kleopatra (Ain el-Girara) — ein natürliches Süßwasserbecken, das aus dem Untergrund sprudelt, seit der Antike berühmt und noch immer von Einheimischen und Besuchern genutzt. Schwimmen ist erlaubt."
        }, {
          time: "12:30",
          description: "Rückkehr zur Lodge. Mittagessen inbegriffen."
        }, {
          time: "14:00",
          description: "Erkunden Sie die Stadt Siwa zu Fuß — den zentralen Platz, den Markt mit siwischem Silberschmuck und gewebten Körben, die traditionellen Lehmziegelhäuser und die Dattelpalmenhaine. Ihr Reiseleiter stellt Ihnen lokale Kunsthandwerker vor."
        }, {
          time: "17:00",
          description: "Besuchen Sie die Fatnas-Insel (Insel der Fantasie) im Siwasee — eine kleine, von Palmen umgebene Insel im Salzsee, erreichbar über einen Damm, berühmt für ihre Sonnenuntergangsblicke."
        }, {
          time: "18:30",
          description: "Rückkehr zur Lodge."
        }, {
          time: "19:30",
          description: "Abendessen inbegriffen."
        }]
      }, {
        day: 4,
        title: "Siwa — Das Große Sandmeer & Wüstensonnenuntergang",
        description: "Das Große Sandmeer ist eines der größten Sandmeere der Welt — ein ununterbrochener Ozean aus Dünen, der sich von Ägypten bis tief nach Libyen erstreckt und eine Fläche bedeckt, die größer als ganz Irland ist. Ein 4x4-Ausflug an seinen Rand ist eines der aufregendsten Erlebnisse, die Ägypten zu bieten hat — das Ausmaß, die Stille und die außergewöhnlichen, skulpturalen Formen der Dünen sind buchstäblich anders als alles andere auf dem Planeten, wobei die Landschaft je nach Lichteinfall zwischen sanften goldenen Kurven und messerscharfen Graten wechselt. Der Nachmittag bringt einen Besuch des Bergs der Toten — eines felsigen Hügels in der Nähe der Stadt Siwa, in den Dutzende antiker pharaonischer Felsgräber gehauen sind — bevor der berühmte Siwa-Sonnenuntergang vom Gipfel einer Sanddüne aus genossen wird, ein Erlebnis, das Reisende regelmäßig als einen der schönsten Anblicke in ganz Ägypten beschreiben.",

        steps: [{
          time: "08:00",
          description: "Frühstück in der Lodge."
        }, {
          time: "09:00",
          description: "Abfahrt mit 4x4-Fahrzeugen ins Große Sandmeer."
        }, {
          time: "09:30",
          description: "Eintritt ins Große Sandmeer. Ihr Fahrer navigiert durch die Dünenlandschaft — über Kämme hinweg, in Täler hinab, mit Stopps an den höchsten Aussichtspunkten für Fotos. Die Stille ist vollkommen."
        }, {
          time: "11:00",
          description: "Stopp an einer Süßwasser-Thermalquelle in der Wüste — ein natürliches warmes Becken, umgeben von Dünen. Schwimmen möglich."
        }, {
          time: "12:00",
          description: "Picknick-Mittagessen in der Wüste, von der Lodge bereitgestellt."
        }, {
          time: "13:30",
          description: "Rückfahrt durch die Dünen nach Siwa."
        }, {
          time: "15:00",
          description: "Besuchen Sie Jebel al-Mawta (Berg der Toten) — einen Hügel voller antiker, in den Fels gehauener Gräber aus der 26. Dynastie und den griechisch-römischen Perioden. Besuchen Sie das bemalte Grab von Si-Amun, das schönste bemalte Grab der Westlichen Wüste."
        }, {
          time: "16:30",
          description: "Fahrt zu einer hohen Düne am Wüstenrand für den berühmten Siwa-Sonnenuntergang — zu beobachten, wie sich das Licht über der Palmenoase und dem Salzsee verändert, während der Himmel golden und violett wird, ist eines der einprägsamsten Reiseerlebnisse Ägyptens."
        }, {
          time: "18:30",
          description: "Rückkehr zur Lodge."
        }, {
          time: "19:30",
          description: "Abendessen inbegriffen. Letzter Abend in Siwa — optionaler Besuch einer lokalen Musikveranstaltung, falls verfügbar."
        }]
      }, {
        day: 5,
        title: "Von Siwa nach Alexandria — Rückreise",
        description: "Der letzte Tag ist der langen Rückreise nach Osten durch die Westliche Wüste nach Alexandria gewidmet. Die Reise in umgekehrter Richtung bietet eine andere Perspektive — das Wüstenplateau öffnet sich wieder zur Mittelmeerküste, und schließlich erhebt sich die Skyline von Alexandria vor Ihnen, eine willkommene und leicht desorientierende Rückkehr zu grünen Feldern und Meeresluft nach mehreren Tagen umgeben von Sand. Je nach Ankunftszeit schließt ein letzter kurzer Spaziergang entlang der Corniche von Alexandria vor Ihrem Transfer zu Ihrem Hotel oder Ihrer Weiterreise den Kreis einer der bemerkenswertesten Reisen Ägyptens.",

        steps: [{
          time: "07:00",
          description: "Frühstück in der Lodge. Check-out."
        }, {
          time: "08:00",
          description: "Abfahrt von Siwa nach Osten. Letzte Ausblicke auf die Oase, während sie in der Wüste verschwindet."
        }, {
          time: "10:30",
          description: "Fahrt durch das Plateau der Westlichen Wüste. Ihr Reiseleiter teilt Gedanken zur Reise und beantwortet verbleibende Fragen."
        }, {
          time: "13:00",
          description: "Mittagspause in Marsa Matrouh an der Küste. Mittagessen auf eigene Kosten."
        }, {
          time: "14:30",
          description: "Weiterfahrt nach Osten entlang der Küste in Richtung Alexandria."
        }, {
          time: "15:30",
          description: "Optionaler kurzer Stopp in El Alamein auf dem Rückweg."
        }, {
          time: "17:00",
          description: "Ankunft in Alexandria. Absetzen an Ihrem Hotel oder am Bahnhof von Alexandria. Ende der Tour."
        }]
      }]
    },
  },
  {
    title: "Civitatis eSIM Card Egypt",
    slug: "civitatis-esim-card-egypt-alexandria",
    description:
      "Stay connected throughout your Alexandria and Egypt adventure with this convenient travel eSIM, a small piece of preparation that pays off the moment you land. Whether you're navigating the streets of Alexandria's ancient neighborhoods, researching the city's fascinating history on the spot, or sharing photos from the Qaitbay Citadel with the Mediterranean Sea as a backdrop, this eSIM gives you reliable mobile data coverage across all of Egypt without the hassle of hunting down a local vendor in an unfamiliar city. No need to search for a local SIM card — simply activate digitally before you travel and enjoy seamless connectivity from the moment you arrive, all the way through any side trips to the desert, the Delta, or the capital that your Egyptian itinerary happens to include.",
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
      es: [
        "La eSIM se activa digitalmente: no es necesario cambiar la tarjeta SIM física.",
        "Asegúrese de que su teléfono esté liberado y sea compatible con eSIM antes de comprar.",
        "Disponible en planes de 7, 15 y 30 días.",
        "Funciona en redes 4G/LTE en todo Egipto.",
        "Nota: la señal puede ser limitada en zonas remotas del desierto, como el oasis de Siwa.",
        "Las llamadas de voz y los SMS no están incluidos."
      ],
      pt: [
        "O eSIM é ativado digitalmente — não é necessária a troca de um cartão SIM físico.",
        "Certifique-se de que seu telefone esteja desbloqueado e seja compatível com eSIM antes de comprar.",
        "Disponível em planos de 7, 15 e 30 dias.",
        "Funciona em redes 4G/LTE em todo o Egito.",
        "Observação: o sinal pode ser limitado em áreas remotas do deserto, como o Oásis de Siwa.",
        "Chamadas de voz e SMS não estão incluídos."
      ],
      it: [
        "La eSIM viene attivata digitalmente — non è richiesta nessuna sostituzione fisica della SIM.",
        "Assicuratevi che il vostro telefono sia sbloccato e compatibile con eSIM prima dell'acquisto.",
        "Disponibile in piani da 7, 15 e 30 giorni.",
        "Funziona su reti 4G/LTE in tutto l'Egitto.",
        "Nota: il segnale potrebbe essere limitato nelle aree desertiche remote, come l'Oasi di Siwa.",
        "Chiamate vocali e SMS non sono inclusi."
      ],
      fr: [
        "L'eSIM est activée numériquement — aucun remplacement physique de carte SIM n'est nécessaire.",
        "Assurez-vous que votre téléphone est débloqué et compatible eSIM avant l'achat.",
        "Disponible avec des forfaits de 7, 15 et 30 jours.",
        "Fonctionne sur les réseaux 4G/LTE partout en Égypte.",
        "Remarque : le signal peut être limité dans les zones désertiques reculées telles que l'oasis de Siwa.",
        "Les appels vocaux et les SMS ne sont pas inclus."
      ],
      ru: [
        "eSIM активируется в цифровом виде — замена физической SIM-карты не требуется.",
        "Перед покупкой убедитесь, что ваш телефон разблокирован и совместим с eSIM.",
        "Доступны тарифы на 7, 15 и 30 дней.",
        "Работает в сетях 4G/LTE по всему Египту.",
        "Примечание: сигнал может быть ограничен в отдалённых пустынных районах, таких как оазис Сива.",
        "Голосовые звонки и SMS не включены."
      ],
      de: [
        "Die eSIM wird digital aktiviert — ein physischer SIM-Kartentausch ist nicht erforderlich.",
        "Stellen Sie vor dem Kauf sicher, dass Ihr Telefon entsperrt und eSIM-fähig ist.",
        "Verfügbar in Tarifen für 7, 15 und 30 Tage.",
        "Funktioniert in 4G/LTE-Netzen in ganz Ägypten.",
        "Hinweis: Der Empfang kann in abgelegenen Wüstengebieten wie der Oase Siwa eingeschränkt sein.",
        "Sprachanrufe und SMS sind nicht enthalten."
      ]
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
    slug: "civitatis-travel-insurance-alexandria",
    description:
      "Travel through Alexandria and Egypt with total peace of mind thanks to Civitatis Travel Insurance, a quiet layer of protection running underneath every catacomb visit, desert crossing, and coastal excursion on your itinerary. Whether you're exploring ancient catacombs, sailing to coastal fortresses, or making day trips to Cairo and the Pyramids, unexpected events can always happen, and the gap between a minor inconvenience and a genuinely ruined trip often comes down to whether you were covered in advance. This comprehensive travel insurance covers medical emergencies, trip cancellations, delayed or lost luggage, and much more — so nothing can spoil your Egyptian adventure, whether you stay along the Mediterranean coast or venture far out into the Western Desert. Available for trips lasting between 3 and 31 days, flexible enough to match whatever combination of Alexandria's seafront and Egypt's wider attractions your trip ends up covering.",
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
      es: [
        "La cobertura está disponible para viajes de 3 a 31 días.",
        "Las condiciones médicas preexistentes pueden no estar cubiertas; revise la póliza completa antes de comprar.",
        "Este seguro se recomienda especialmente para tours que incluyen zonas remotas como el desierto de Siwa.",
        "La cobertura incluye emergencias médicas, cancelación de viaje y equipaje perdido o retrasado.",
        "Compre antes de la salida: la póliza no se puede activar una vez que el viaje ha comenzado."
      ],
      pt: [
        "A cobertura está disponível para viagens de 3 a 31 dias.",
        "Condições médicas preexistentes podem não ser cobertas — revise a apólice completa antes de comprar.",
        "Este seguro é recomendado especialmente para tours que envolvem áreas remotas, como o deserto de Siwa.",
        "A cobertura inclui emergências médicas, cancelamento de viagem e bagagem perdida ou atrasada.",
        "Compre antes da partida — a apólice não pode ser ativada após o início da viagem."
      ],
      it: [
        "La copertura è disponibile per viaggi da 3 a 31 giorni.",
        "Le condizioni medicche preesistenti potrebbero non essere coperte — controllate la polizza completa prima dell'acquisto.",
        "Questa assicurazione è particolarmente consigliata per i tour che comprendono aree remote come il deserto di Siwa.",
        "La copertura include emergenze medicche, cancellazione del viaggio e bagagli persi o ritardati.",
        "Acquistate prima della partenza — la polizza non può essere attivata dopo l'inizio del viaggio."
      ],
      fr: [
        "La couverture est disponible pour des voyages de 3 à 31 jours.",
        "Les conditions médicales préexistantes peuvent ne pas être couvertes — consultez la police complète avant l'achat.",
        "Cette assurance est particulièrement recommandée pour les excursions impliquant des zones reculées telles que le désert de Siwa.",
        "La couverture comprend les urgences médicales, l'annulation de voyage et les bagages perdus ou retardés.",
        "Achetez avant le départ — la police ne peut pas être activée après le début du voyage."
      ],
      ru: [
        "Страховое покрытие доступно для поездок продолжительностью от 3 до 31 дня.",
        "Ранее существовавшие заболевания могут не покрываться — ознакомьтесь с полным полисом перед покупкой.",
        "Эта страховка особенно рекомендуется для туров, включающих отдалённые районы, такие как пустыня Сива.",
        "Покрытие включает медицинские экстренные случаи, отмену поездки и потерянный или задержанный багаж.",
        "Приобретайте страховку до отъезда — полис не может быть активирован после начала поездки."
      ],
      de: [
        "Der Versicherungsschutz ist für Reisen von 3 bis 31 Tagen verfügbar.",
        "Vorerkrankungen sind möglicherweise nicht abgedeckt — prüfen Sie die vollständige Police vor dem Kauf.",
        "Diese Versicherung wird besonders für Touren in abgelegene Gebiete wie die Siwa-Wüste empfohlen.",
        "Der Versicherungsschutz umfasst medizinische Notfälle, Reiserücktritt sowie verlorenes oder verspätetes Gepäck.",
        "Kaufen Sie die Versicherung vor der Abreise — die Police kann nach Reisebeginn nicht mehr aktiviert werden."
      ]
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