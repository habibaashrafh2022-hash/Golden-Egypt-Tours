export const cairoTours = [
  {
    id: "",
    city: "cairo",

    heroImage: "",
    
    title: {
      en: "",
      ar: ""
    },

    description: {
      en: "",
      ar: ""
    },

    details: {
      duration: "",
      languages: ["English", "Arabic", "French"],

      pickup: {
        en: "",
        ar: ""
      },

      dropoff: {
        en: "",
        ar: ""
      },

      included: [],
      notIncluded: []
    },

    faq: [
      {
        q: { en: "", ar: "" },
        a: { en: "", ar: "" }
      }
    ],

    cancellationPolicy: {
      en: "",
      ar: ""
    },

    childrenPolicy: {
      en: "",
      ar: ""
    },

    reviews: [
      {
        name: "",
        rating: 5,
        comment: ""
      }
    ],

    booking: {
      pricePerPerson: {
        single: 0,
        double: 0,
        group: 0
      },
      discounts: [
        {
          from: 2,
          discount: "10%"
        }
      ]
    },

    filters: {
      type: "day | experience | package",
      duration: "short | full-day | multi-day"
    }
  }
];