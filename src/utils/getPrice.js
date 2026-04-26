export const getPrice = (tour) => {
  if (!tour?.price) return 0;

  if (typeof tour.price === "object") {
    return tour.price.single || 0;
  }

  return tour.price;
};