import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import PaymentModal from "../components/PaymentModal";
import { calculatePrice } from "../utils/pricing";
import { useGlobal } from "../context/GlobalContext";
import "./Booking.css";

export default function Booking() {
  const { tourId }  = useParams();
  const navigate    = useNavigate();
  const { formatPrice, exchangeRates, currency } = useGlobal();

  const [loading,     setLoading]     = useState(false);
  const [message,     setMessage]     = useState("");
  const [formData,    setFormData]    = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [guests,      setGuests]      = useState(1);

  // السعر الأساسي للتور — هتغيره حسب كل تور
  const BASE_PRICE = 150;

  const pricing = calculatePrice(BASE_PRICE, guests, exchangeRates, currency);

  const handleBookingSubmit = async (data) => {
    setFormData(data);
    setGuests(Number(data.bookingDetails.numberOfGuests) || 1);
    setShowPayment(true);
  };

  const handleWhatsApp = () => {
    if (!formData) return;
    const msg = encodeURIComponent(
      `🏛️ *New Booking — Golden Egypt Tours*\n\n` +
      `📋 *Tour ID:* ${tourId}\n` +
      `👤 *Name:* ${formData.user.name}\n` +
      `✉️ *Email:* ${formData.user.email}\n` +
      `📱 *WhatsApp:* ${formData.user.whatsapp}\n` +
      `🌍 *Nationality:* ${formData.user.nationality}\n` +
      `📅 *Date:* ${formData.bookingDetails.date}\n` +
      `👥 *Guests:* ${formData.bookingDetails.numberOfGuests}\n` +
      `🗣️ *Language:* ${formData.bookingDetails.tourLanguage}\n` +
      `📍 *Pickup:* ${formData.locations.pickupLocation}\n` +
      `📍 *Dropoff:* ${formData.locations.dropoffLocation}\n` +
      `💬 *Notes:* ${formData.specialRequests || "None"}\n\n` +
      `💰 *Total:* $${pricing.totalUSD.toFixed(2)}\n` +
      `🏷️ *Discount:* ${pricing.discount * 100}% (${pricing.discountLabel})\n\n` +
      `Ref: GET-${Date.now().toString().slice(-6)}`
    );
    window.open(`https://wa.me/201068257754?text=${msg}`, "_blank");
  };

  return (
    <div className="booking-page" style={{ background: "#060606", minHeight: "100vh", paddingTop: 80 }}>

      {/* Header */}
      <div style={{
        textAlign: "center", padding: "40px 20px 30px",
        borderBottom: "1px solid rgba(201,168,76,0.1)",
      }}>
        <div style={{ fontSize: 9, color: "#C9A84C", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "'Cinzel',serif", marginBottom: 10 }}>
          ✦ Golden Egypt Tours
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(22px,4vw,42px)", fontWeight: 700, color: "#EDE8D9", marginBottom: 10 }}>
          Book Your Egypt Journey
        </h1>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", color: "rgba(237,232,217,0.5)", fontSize: 16 }}>
          Fill in your details and choose your payment method
        </p>
      </div>

      {/* Price Summary Bar */}
      <div style={{
        background: "rgba(201,168,76,0.06)",
        borderBottom: "1px solid rgba(201,168,76,0.12)",
        padding: "16px clamp(16px,4vw,48px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: "clamp(16px,4vw,48px)", flexWrap: "wrap",
      }}>
        {[
          { label: "Per Person", value: formatPrice(pricing.basePrice) },
          { label: "Guests",     value: `× ${guests}` },
          { label: "Discount",   value: pricing.badge || "Standard" },
          { label: "Total",      value: formatPrice(pricing.totalUSD), highlight: true },
        ].map((item, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 9, color: "rgba(201,168,76,0.5)", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Cinzel',serif", marginBottom: 4 }}>
              {item.label}
            </div>
            <div style={{
              fontFamily: "'Cinzel',serif", fontWeight: 700,
              fontSize: item.highlight ? 22 : 16,
              color: item.highlight ? "#C9A84C" : "#EDE8D9",
            }}>
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* Group Pricing Tiers */}
      <div style={{ maxWidth: 800, margin: "24px auto", padding: "0 clamp(16px,4vw,48px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 8 }}>
          {[
            { n: 1, label: "Solo",    discount: "Standard", color: "#EDE8D9" },
            { n: 2, label: "Couple",  discount: "10% OFF",  color: "#52B788" },
            { n: 3, label: "Group 3", discount: "15% OFF",  color: "#C9A84C" },
            { n: 4, label: "Group 4+",discount: "20% OFF",  color: "#E8A87C" },
          ].map(tier => (
            <div key={tier.n} style={{
              background: guests >= tier.n && (tier.n < 4 ? guests === tier.n : guests >= 4)
                ? "rgba(201,168,76,0.12)" : "rgba(201,168,76,0.04)",
              border: `1px solid ${guests >= tier.n && (tier.n < 4 ? guests === tier.n : guests >= 4)
                ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.1)"}`,
              borderRadius: 10, padding: "10px 8px", textAlign: "center",
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#EDE8D9", fontFamily: "'Cinzel',serif", marginBottom: 4 }}>
                {tier.label}
              </div>
              <div style={{ fontSize: 11, color: tier.color, fontFamily: "'Cormorant Garamond',serif" }}>
                {tier.discount}
              </div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 11, color: "rgba(201,168,76,0.4)", textAlign: "center", fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic" }}>
          ✦ Group discounts applied automatically based on number of guests
        </div>
      </div>

      {message && (
        <div style={{
          maxWidth: 800, margin: "0 auto 20px", padding: "14px 20px",
          background: message.includes("✅") ? "rgba(82,183,136,0.1)" : "rgba(231,76,60,0.1)",
          border: `1px solid ${message.includes("✅") ? "rgba(82,183,136,0.3)" : "rgba(231,76,60,0.3)"}`,
          borderRadius: 12, color: message.includes("✅") ? "#52B788" : "#e74c3c",
          fontSize: 13, textAlign: "center",
        }}>
          {message}
        </div>
      )}

      {/* Booking Form */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 clamp(16px,4vw,48px) 60px" }}>
        <BookingForm
          tourId={tourId}
          onSubmit={handleBookingSubmit}
          onGuestsChange={setGuests}
        />

        {/* Payment Buttons — بيظهروا بعد ما الفورم يتملى */}
        {formData && (
          <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <button
              onClick={() => setShowPayment(true)}
              style={{
                background: "linear-gradient(135deg,#C9A84C,#E8C96D)",
                color: "#050309", border: "none", borderRadius: 12,
                padding: "16px", cursor: "pointer", fontWeight: 700,
                fontSize: 13, letterSpacing: "0.15em",
                fontFamily: "'Cinzel',serif",
                boxShadow: "0 6px 28px rgba(201,168,76,0.4)",
              }}
            >
              💳 Pay Online — {formatPrice(pricing.totalUSD)}
            </button>
            <button
              onClick={handleWhatsApp}
              style={{
                background: "rgba(37,211,102,0.12)",
                border: "1px solid rgba(37,211,102,0.35)",
                color: "#25D366", borderRadius: 12, padding: "16px",
                cursor: "pointer", fontWeight: 700, fontSize: 13,
                letterSpacing: "0.15em", fontFamily: "'Cinzel',serif",
              }}
            >
              💬 Book via WhatsApp
            </button>
          </div>
        )}

        {loading && (
          <div style={{ textAlign: "center", padding: 20, color: "#C9A84C", fontFamily: "'Cinzel',serif" }}>
            ⏳ Processing your booking…
          </div>
        )}
      </div>

      {/* Payment Modal */}
      {showPayment && formData && (
        <PaymentModal
          item={{ title: `Tour ${tourId}`, price: BASE_PRICE }}
          guests={guests}
          onClose={() => setShowPayment(false)}
        />
      )}
    </div>
  );
}