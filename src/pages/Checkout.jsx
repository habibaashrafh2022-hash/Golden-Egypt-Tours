import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const tour = state?.tour;
  const people = state?.people || 1;
  const price = state?.price || 0;
  const total = state?.total || 0;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  if (!tour) {
    return (
      <div style={{ color: "white", padding: 20 }}>
        No booking data found
      </div>
    );
  }

  const handleBook = () => {
    alert(
      `Booking Confirmed 🎉\nReference: EG-${Math.floor(Math.random() * 99999)}`
    );

    navigate("/");
  };

  return (
    <div style={app}>

      <h1 style={title}>Checkout</h1>

      <div style={container}>

        {/* FORM */}
        <div style={box}>
          <h2>Customer Details</h2>

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={input}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={input}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={input}
          />
        </div>

        {/* SUMMARY */}
        <div style={box}>
          <h2>Booking Summary</h2>

          <p><b>Tour:</b> {tour.title}</p>
          <p><b>People:</b> {people}</p>
          <p><b>Price:</b> ${price}</p>

          <hr />

          <h3>Total: ${total}</h3>

          <button style={btn} onClick={handleBook}>
            Confirm Booking
          </button>

          <p style={{ fontSize: 12, opacity: 0.7 }}>
            Free cancellation up to 24h before
          </p>
        </div>

      </div>
    </div>
  );
}

/* styles */
const app = { background: "#0A0A0A", color: "white", minHeight: "100vh", padding: 20 };
const title = { textAlign: "center", color: "#FFD700" };
const container = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20 };
const box = { background: "#111", padding: 20, borderRadius: 10 };
const input = { width: "100%", padding: 10, marginBottom: 10 };
const btn = { width: "100%", padding: 12, background: "#FFD700", border: "none", fontWeight: "bold" };