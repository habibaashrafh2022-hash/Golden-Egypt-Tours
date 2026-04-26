export const calculatePrice = (basePrice, persons) => {
  let price = basePrice;

  if (persons === 1) {
    price = basePrice;
  } 
  else if (persons === 2) {
    price = basePrice * 1.9;
  } 
  else if (persons === 3) {
    price = basePrice * 2.7;
  } 
  else if (persons >= 4) {
    price = basePrice * persons * 0.85;
  }

  return Math.round(price);
};