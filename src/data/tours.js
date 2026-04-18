export const tours = {
  cairo: [
    {
      id: "pyramids",
      title: "Giza Pyramids & Sphinx Experience",
      short: "Explore the Great Pyramids and Sphinx",
      description: "Discover the magic of ancient Egypt with a private guided tour.",
      highlights: ["Pyramids", "Sphinx", "Panorama View"],
      itinerary: [
        "Pickup from hotel",
        "Visit pyramids",
        "Visit Sphinx",
        "Return"
      ],
      includes: ["Guide", "Car", "Pickup"],
      excludes: ["Tickets"],
      pricing: { solo: 80 }
    }
  ],

  giza: [
    {
      id: "plateau",
      title: "Giza Plateau Tour",
      short: "Full experience of pyramids",
      description: "Explore all pyramids with guide.",
      highlights: ["Khufu", "Khafre", "Menkaure"],
      itinerary: ["Pickup", "Visit", "Return"],
      includes: ["Guide", "Transport"],
      excludes: [],
      pricing: { solo: 70 }
    }
  ],

  luxor: [
    {
      id: "temples",
      title: "Luxor East & West Bank",
      short: "Valley of the Kings & Karnak",
      description: "Explore ancient temples and tombs.",
      highlights: ["Karnak", "Valley of Kings"],
      itinerary: ["Pickup", "Temples", "Return"],
      includes: ["Guide", "Car"],
      excludes: [],
      pricing: { solo: 90 }
    }
  ],

  aswan: [
    {
      id: "philae",
      title: "Philae Temple Tour",
      short: "Island temple experience",
      description: "Visit the beautiful temple of Philae.",
      highlights: ["Philae Temple", "Boat ride"],
      itinerary: ["Pickup", "Boat", "Temple"],
      includes: ["Boat", "Guide"],
      excludes: [],
      pricing: { solo: 60 }
    }
  ],

  alexandria: [
    {
      id: "sea",
      title: "Alexandria Day Tour",
      short: "Mediterranean vibes",
      description: "Explore the coastal beauty of Alexandria.",
      highlights: ["Library", "Citadel"],
      itinerary: ["Pickup", "City tour", "Return"],
      includes: ["Guide"],
      excludes: [],
      pricing: { solo: 85 }
    }
  ],

  hurghada: [
    {
      id: "snorkeling",
      title: "Red Sea Snorkeling",
      short: "Crystal clear waters",
      description: "Enjoy snorkeling in the Red Sea.",
      highlights: ["Snorkeling", "Boat"],
      itinerary: ["Pickup", "Boat", "Swim"],
      includes: ["Equipment"],
      excludes: [],
      pricing: { solo: 75 }
    }
  ],

  sharm: [
    {
      id: "desert",
      title: "Desert Safari",
      short: "ATV & Bedouin night",
      description: "Adventure in Sinai desert.",
      highlights: ["ATV", "Sunset"],
      itinerary: ["Pickup", "Safari", "Dinner"],
      includes: ["ATV"],
      excludes: [],
      pricing: { solo: 65 }
    }
  ],

  siwa: [
    {
      id: "oasis",
      title: "Siwa Oasis Experience",
      short: "Desert & salt lakes",
      description: "Discover Siwa magic.",
      highlights: ["Salt lakes", "Safari"],
      itinerary: ["Arrival", "Tour"],
      includes: ["Guide"],
      excludes: [],
      pricing: { solo: 120 }
    }
  ],

  dahab: [
    {
      id: "bluehole",
      title: "Blue Hole Adventure",
      short: "Diving paradise",
      description: "Explore Dahab underwater world.",
      highlights: ["Blue Hole"],
      itinerary: ["Pickup", "Dive"],
      includes: ["Equipment"],
      excludes: [],
      pricing: { solo: 95 }
    }
  ]
};