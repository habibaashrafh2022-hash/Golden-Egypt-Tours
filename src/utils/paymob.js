// ============================================================
// PAYMOB PAYMENT GATEWAY — Golden Egypt Tours
// ============================================================

const API_KEY        = import.meta.env.VITE_PAYMOB_API_KEY;
const INTEGRATION_ID = import.meta.env.VITE_PAYMOB_INTEGRATION_ID;

// ── Step 1: Authentication ──
async function getAuthToken() {
  const res = await fetch("https://accept.paymob.com/api/auth/tokens", {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify({ api_key: API_KEY }),
  });
  const data = await res.json();
  return data.token;
}

// ── Step 2: Create Order ──
async function createOrder(authToken, amountCents, currency = "EGP") {
  const res = await fetch("https://accept.paymob.com/api/ecommerce/orders", {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      auth_token:      authToken,
      delivery_needed: false,
      amount_cents:    amountCents,
      currency,
      items: [],
    }),
  });
  const data = await res.json();
  return data.id;
}

// ── Step 3: Payment Key ──
async function getPaymentKey(authToken, orderId, amountCents, billing, currency = "EGP") {
  const res = await fetch("https://accept.paymob.com/api/acceptance/payment_keys", {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      auth_token:     authToken,
      amount_cents:   amountCents,
      expiration:     3600,
      order_id:       orderId,
      billing_data:   {
        first_name:   billing.firstName || "Guest",
        last_name:    billing.lastName  || "User",
        email:        billing.email     || "guest@email.com",
        phone_number: billing.phone     || "+20100000000",
        country:      billing.country   || "EG",
        city:         billing.city      || "Cairo",
        street:       billing.street    || "N/A",
        building:     "N/A",
        floor:        "N/A",
        apartment:    "N/A",
      },
      currency,
      integration_id: Number(INTEGRATION_ID),
      lock_order_when_paid: false,
    }),
  });
  const data = await res.json();
  return data.token;
}

// ── MAIN: Start Payment ──
export async function startPaymobPayment({ amountUSD, billing, onSuccess, onError }) {
  try {
    // Paymob بيشتغل بـ EGP — هنحول السعر
    const EGP_RATE   = 48.5;
    const amountEGP  = Math.round(amountUSD * EGP_RATE * 100); // cents

    const authToken  = await getAuthToken();
    const orderId    = await createOrder(authToken, amountEGP, "EGP");
    const paymentKey = await getPaymentKey(authToken, orderId, amountEGP, billing, "EGP");

    // فتح iframe الدفع
    const iframeURL = `https://accept.paymob.com/api/acceptance/iframes/887065?payment_token=${paymentKey}`;
    onSuccess?.(iframeURL);

  } catch (err) {
    console.error("Paymob error:", err);
    onError?.(err.message || "Payment failed");
  }
}