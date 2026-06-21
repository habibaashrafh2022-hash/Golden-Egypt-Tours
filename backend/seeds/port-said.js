// seeds/cities/port-said.js

const cityData = {
  name: "Port Said",
  slug: "port-said",
  description:
    "Port Said is one of Egypt's most strategically significant and historically fascinating cities, perched at the northern entrance of the legendary Suez Canal where the Mediterranean Sea meets one of the world's most important waterways. Unlike Egypt's ancient temple cities, Port Said carries no pharaonic past at all — it is, by Egyptian standards, a remarkably young city, founded in 1859 during the construction of the canal as little more than a logistics outpost on a thin strip of land between sea and lake, and yet within a few short decades it had grown into one of the most cosmopolitan port cities anywhere on the Mediterranean. Engineers, merchants, sailors, and laborers from France, Greece, Italy, Malta, and across the Levant all settled here together, drawn by the sheer scale of the engineering project unfolding at the city's edge, and they left behind a distinctive architectural fingerprint that still defines Port Said today — wide tree-lined boulevards, wrought-iron balconies, and elegant colonial-era buildings that would look equally at home in Marseille or Alexandria. Today it offers visitors a unique window into a pivotal chapter of modern history — the canal that transformed global trade and shrank the distance between Europe and Asia by thousands of nautical miles — as well as a relaxed Mediterranean atmosphere, fresh seafood pulled straight from the surrounding waters, and easy access to Cairo and Alexandria for travelers looking to combine the canal city with Egypt's more famous ancient and modern landmarks.",
  country: "Egypt",
  image: "port-said.jpg",
};

const toursData = [
  {
    title: "Cairo & Giza Pyramids Full Day Trip from Port Said",
    slug: "cairo-giza-pyramids-day-trip-port-said",
    description:
      "Make the most of your time in Port Said with this outstanding full-day excursion to Cairo and the legendary Pyramids of Giza, a chance to trade the canal city's modern maritime story for a single, immersive day inside one of the oldest chapters of human civilization. Travel by private vehicle to the Egyptian capital and spend the day in the company of an expert Egyptologist guide, beginning with the awe-inspiring Giza Plateau where the three great pyramids of Khufu, Khafre, and Menkaure have dominated the desert skyline for over 4,500 years, their scale almost impossible to fully grasp until you are standing directly beneath one of them. Visit the enigmatic Great Sphinx, its weathered face still gazing eastward exactly as it has for millennia, before heading to the world-renowned Egyptian Museum of Antiquities in Tahrir Square with its extraordinary collection of royal mummies, ancient statues, and Tutankhamun's legendary golden treasures, room after room of objects that quietly rewrite what you thought you knew about the people who built all of this. The day ends with a visit to the atmospheric Coptic neighborhood and the famous Hanging Church, a quieter, more contemplative final stop after a day spent among pharaohs and gold.",
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
    title: "Aurevian eSIM Card Egypt",
    slug: "Aurevian-esim-card-egypt-port-said",
    description:
      "Stay connected throughout your Port Said and Egypt adventure with this easy-to-use travel eSIM, a small piece of digital convenience that removes one more thing to think about once you land. Whether you're watching giant container ships pass through the Suez Canal just meters from the shoreline, exploring Port Said's historic streets with their colonial-era facades, or making day trips to Cairo and Alexandria, this eSIM gives you reliable mobile data coverage across all of Egypt without the friction of finding a local vendor or navigating a kiosk queue in an unfamiliar language. No need to buy or swap a local SIM card — simply activate digitally before your trip and enjoy seamless connectivity from the moment you arrive, all the way through whichever combination of canal views, ancient temples, and Mediterranean seafood your Egyptian itinerary ends up including.",
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
    title: "Aurevian Travel Insurance",
    slug: "Aurevian-travel-insurance-port-said",
    description:
      "Explore Port Said and travel throughout Egypt with complete peace of mind thanks to Aurevian Travel Insurance, a quiet layer of protection running underneath every canal-side stroll, day trip, and overnight journey on your itinerary. Whether you're making day trips to the Pyramids of Giza, watching ships navigate the Suez Canal, or traveling between Egypt's cities by road, rail, or air, unexpected situations can always arise, and the difference between a minor hiccup and a genuinely disrupted trip often comes down to whether you were covered in the first place. This comprehensive travel insurance covers medical emergencies, trip cancellations, lost or delayed luggage, and much more — ensuring that nothing disrupts your Egyptian journey, however far your travels take you beyond Port Said itself. Available for trips lasting between 3 and 31 days, easily matched to however long your particular mix of canal city and onward Egyptian adventures happens to last.",
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