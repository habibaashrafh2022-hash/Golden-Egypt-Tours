// src/utils/pricing.js

export const calculatePrice = ({
  basePrice = 100,
  persons = 1,
  city = "default",
  season = "normal"
}) => {
  let price = basePrice;

  // 👤 GROUP PRICING (Core SaaS logic)
  const groupMultipliers = {
    1: 1,
    2: 1.75,
    3: 2.4,
    4: 3.0,
    5: 3.6
  };

  price *= groupMultipliers[persons] || 4.2;

  // 🌍 CITY MULTIPLIER
  const cityMultiplier = {
    cairo: 1,
    giza: 1.1,
    luxor: 1.25,
    aswan: 1.3
  };

  price *= cityMultiplier[city?.toLowerCase()] || 1;

  // ☀️ SEASON PRICING
  if (season === "high") price *= 1.3;
  if (season === "low") price *= 0.85;

  return Math.round(price);
};