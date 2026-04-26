export const normalizeTours = (tours = []) => {
  return tours.map((tour) => ({
    ...tour,

    city: tour.city || "cairo",

    price: {
      single: tour.price?.single || 0,
      double: tour.price?.double || tour.price?.single || 0,
      triple: tour.price?.triple || tour.price?.single || 0
    },

    images: tour.images || [],
    program: tour.program || { days: [] },
    extras: tour.extras || [],
    faqs: tour.faqs || []
  }));
};