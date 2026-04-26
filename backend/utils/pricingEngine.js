export function calculateAIPrice(basePrice, peopleCount) {
  let multiplier = 1;
  let discount = 0;

  // 🔥 AI RULE 1: group pricing
  if (peopleCount === 1) {
    multiplier = 1;
    discount = 0;
  }

  if (peopleCount === 2) {
    multiplier = 1.85;
    discount = 5;
  }

  if (peopleCount === 3) {
    multiplier = 2.6;
    discount = 10;
  }

  if (peopleCount >= 4 && peopleCount <= 6) {
    multiplier = peopleCount * 0.85;
    discount = 15;
  }

  if (peopleCount > 6) {
    multiplier = peopleCount * 0.75;
    discount = 20;
  }

  const rawPrice = basePrice * multiplier;
  const finalPrice = rawPrice - (rawPrice * discount) / 100;

  return {
    finalPrice: Math.round(finalPrice),
    discountPercent: discount,
    multiplier
  };
}