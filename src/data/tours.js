export const tours = {
  cairo: [
    {
      id: "giza-pyramids",
      title: "Giza Pyramids & Sphinx Private Experience",
      short: "Explore the last remaining wonder of the ancient world",
      description:
        "A private guided experience with a professional Egyptologist to explore the Great Pyramids of Giza and the Sphinx. Discover ancient secrets, breathtaking views, and stories of the Pharaohs.",
      duration: "5 hours",
      rating: 4.9,
      images: [
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368",
        "https://images.unsplash.com/photo-1605540436563-5bca919ae766"
      ],
      highlights: ["Great Pyramid", "Sphinx", "Panoramic View"],
      places: [
        {
          name: "Great Pyramid of Khufu",
          info: "Largest pyramid in Egypt",
          details:
            "Built over 4,500 years ago and considered one of the Seven Wonders.",
          tip: "Inside visit available",
          images: ["https://images.unsplash.com/photo-1503177119275-0aa32b3a9368"]
        }
      ],
      itinerary: ["Pickup", "Pyramids", "Sphinx", "Return"],
      includes: ["Guide", "Car"],
      excludes: ["Tickets"],
      pricing: { base: 80 },
      discounts: { 2: 0.1, 3: 0.15, 4: 0.25 },
      childrenPolicy: { under6: 0, under12: 0.5 },
      addons: [{ name: "Camel Ride", price: 15 }],
      policies: {
        cancellation: "Free cancellation 24h before",
        children: "Kids under 6 free",
        refund: "Full refund available"
      },
      languages: ["English", "Spanish", "Italian", "French", "Portuguese"],
      logistics: {
        pickup: {
          included: true,
          location: "Hotel pickup",
          timeWindow: "08:00 - 09:00"
        },
        duration: { total: "5 hours" }
      }
    }
  ],

  giza: [
    {
      id: "giza-plateau",
      title: "Giza Plateau Full Experience",
      short: "Complete pyramids tour",
      description:
        "Explore all pyramids of Giza with expert guide and panoramic views.",
      duration: "4 hours",
      rating: 4.8,
      images: [
        "https://images.unsplash.com/photo-1548013146-72479768bada"
      ],
      highlights: ["Khufu", "Khafre", "Menkaure"],
      places: [
        {
          name: "Khafre Pyramid",
          info: "Second largest pyramid",
          details: "Still preserves original casing stones.",
          tip: "Best photo spot",
          images: ["https://images.unsplash.com/photo-1548013146-72479768bada"]
        }
      ],
      itinerary: ["Pickup", "Tour", "Return"],
      includes: ["Guide"],
      excludes: ["Tickets"],
      pricing: { base: 70 },
      discounts: { 2: 0.1, 3: 0.15, 4: 0.25 },
      childrenPolicy: { under6: 0, under12: 0.5 },
      addons: [],
      policies: {
        cancellation: "Free cancellation",
        children: "Allowed",
        refund: "Full refund"
      },
      languages: ["English", "Spanish", "Italian", "French", "Portuguese"],
      logistics: {
        pickup: { included: true },
        duration: { total: "4 hours" }
      }
    }
  ],

  luxor: [
    {
      id: "luxor-temples",
      title: "Luxor East & West Bank Tour",
      short: "Karnak & Valley of Kings",
      description:
        "Explore ancient Thebes, Karnak Temple, Valley of Kings and Hatshepsut Temple.",
      duration: "8 hours",
      rating: 4.9,
      images: [
        "https://images.unsplash.com/photo-1584473457409-ceaa5e2a3c2f"
      ],
      highlights: ["Karnak", "Valley of Kings"],
      places: [
        {
          name: "Karnak Temple",
          info: "Huge temple complex",
          details: "Built over 2000 years",
          tip: "Hypostyle Hall is a must-see",
          images: []
        }
      ],
      itinerary: ["Pickup", "Karnak", "West Bank", "Return"],
      includes: ["Guide", "Car"],
      excludes: ["Tickets"],
      pricing: { base: 95 },
      discounts: { 2: 0.1, 3: 0.15, 4: 0.25 },
      childrenPolicy: { under6: 0, under12: 0.5 },
      addons: [],
      policies: {
        cancellation: "Free cancellation",
        children: "Allowed",
        refund: "Full refund"
      },
      languages: ["English", "Spanish", "Italian", "French", "Portuguese"],
      logistics: {
        pickup: { included: true },
        duration: { total: "8 hours" }
      }
    }
  ],

  aswan: [
    {
      id: "philae-temple",
      title: "Philae Temple & Nile Boat Ride",
      short: "Island temple experience",
      description:
        "Visit Philae Temple and enjoy a Nile boat ride.",
      duration: "4 hours",
      rating: 4.8,
      images: [
        "https://images.unsplash.com/photo-1583267746897-2cf415887172"
      ],
      highlights: ["Philae Temple", "Nile Ride"],
      places: [
        {
          name: "Philae Temple",
          info: "Temple of Isis",
          details: "Relocated to save it from flooding",
          tip: "Sunset visit recommended",
          images: []
        }
      ],
      itinerary: ["Pickup", "Boat", "Temple", "Return"],
      includes: ["Boat", "Guide"],
      excludes: ["Tickets"],
      pricing: { base: 60 },
      discounts: { 2: 0.1, 3: 0.15, 4: 0.25 },
      childrenPolicy: { under6: 0, under12: 0.5 },
      addons: [],
      policies: {
        cancellation: "Free cancellation",
        children: "Allowed",
        refund: "Full refund"
      },
      languages: ["English", "Spanish", "Italian", "French", "Portuguese"],
      logistics: {
        pickup: { included: true },
        duration: { total: "4 hours" }
      }
    }
  ],

  alexandria: [],
  hurghada: [],
  sharm: [],
  siwa: [],
  dahab: []
};