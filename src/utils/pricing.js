// ============================================================
// PRICING SYSTEM — Golden Egypt Tours
// ============================================================

// ── Group Discounts ──
export const GROUP_DISCOUNTS = {
  1: { label: "Solo Traveler", discount: 0,    badge: null },
  2: { label: "Couple Deal",   discount: 0.10, badge: "10% OFF" },
  3: { label: "Group of 3",    discount: 0.15, badge: "15% OFF" },
  4: { label: "Group Deal",    discount: 0.20, badge: "20% OFF" },
};

// ── City Multipliers ──
const CITY_MULTIPLIERS = {
  cairo:    1,
  giza:     1.1,
  luxor:    1.25,
  aswan:    1.3,
  hurghada: 1.15,
  sharm:    1.2,
  default:  1,
};

// ── Season Multipliers ──
const SEASON_MULTIPLIERS = {
  high:   1.3,
  low:    0.85,
  normal: 1,
};

// ── Get Group Discount ──
export function getGroupDiscount(guests) {
  if (guests >= 4) return GROUP_DISCOUNTS[4];
  return GROUP_DISCOUNTS[guests] || GROUP_DISCOUNTS[1];
}

// ── Main Calculate Price ──
export function calculatePrice(basePriceUSD, guests, exchangeRates, currency, options = {}) {
  const { city = "default", season = "normal" } = options;

  const group          = getGroupDiscount(guests);
  const cityMult       = CITY_MULTIPLIERS[city?.toLowerCase()] || 1;
  const seasonMult     = SEASON_MULTIPLIERS[season] || 1;
  const discount       = group.discount;

  const adjustedBase   = basePriceUSD * cityMult * seasonMult;
  const total          = adjustedBase * guests * (1 - discount);
  const rate           = exchangeRates?.[currency] || 1;
  const converted      = total * rate;

  return {
    basePrice:          basePriceUSD,
    adjustedBase:       Math.round(adjustedBase),
    guests,
    discount,
    discountLabel:      group.label,
    badge:              group.badge,
    cityMultiplier:     cityMult,
    seasonMultiplier:   seasonMult,
    totalUSD:           Math.round(total * 100) / 100,
    totalConverted:     Math.round(converted * 100) / 100,
    perPersonUSD:       Math.round((total / guests) * 100) / 100,
    perPersonConverted: Math.round((converted / guests) * 100) / 100,
  };
}