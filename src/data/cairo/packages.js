export const cairoPackages = [
  {
    id: "cairo-3days-package",
    city: "cairo",
    title: {
      en: "Cairo 3 Days Package",
      ar: "برنامج القاهرة 3 أيام"
    },
    duration: "3 days",
    price: { single: 180 },
    images: [],
    description: {
      en: "Full Cairo experience package.",
      ar: "برنامج شامل للقاهرة."
    },
    program: {
      days: [
        {
          day: 1,
          title: { en: "Arrival", ar: "الوصول" },
          activities: ["Airport pickup", "Hotel"]
        },
        {
          day: 2,
          title: { en: "Tour", ar: "جولة" },
          activities: ["Museum", "Pyramids"]
        },
        {
          day: 3,
          title: { en: "Free Day", ar: "يوم حر" },
          activities: ["Shopping", "Departure"]
        }
      ]
    },
    included: ["Hotel", "Guide", "Transport"],
    notIncluded: ["Flights"]
  }
];