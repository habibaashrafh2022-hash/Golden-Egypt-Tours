import { useState } from "react";
import { useParams } from "react-router-dom";
import { tours } from "../data/tours";

export default function TourExperience() {
  const { city, tourId } = useParams();
  const tour = tours?.[city]?.find((t) => t.id === tourId);

  const [people, setPeople] = useState(1);
  const [tab, setTab] = useState("overview");

  if (!tour)
    return <h2 style={{ color: "white", padding: 20 }}>Tour not found</h2>;

  const price = tour.pricing?.base || tour.pricing?.adult || 0;

  const discount =
    people >= 4
      ? 0.25
      : people === 3
      ? 0.15
      : people === 2
      ? 0.1
      : 0;

  const finalPrice = price * people * (1 - discount);

  return (
    <div style={app}>

      {/* HERO */}
      <div style={hero}>
        <div style={overlay}>
          <h1 style={{ fontSize: 38 }}>{tour.title}</h1>
          <p>{tour.short}</p>

          <div style={meta}>
            ⭐ {tour.rating} • ⏱ {tour.duration}
          </div>

          {discount > 0 && (
            <div style={badge}>🔥 Group discount applied</div>
          )}
        </div>
      </div>

      {/* MAIN */}
      <div style={container}>

        {/* LEFT CONTENT */}
        <div style={left}>

          {/* TABS */}
          <div style={tabs}>
            {["overview", "places", "reviews", "addons"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  ...tabBtn,
                  borderBottom: tab === t ? "2px solid #FFD700" : "none"
                }}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>

          {/* OVERVIEW */}
          {tab === "overview" && (
            <div style={box}>
              <h2>About this tour</h2>
              <p>{tour.description}</p>

              <h3>Highlights</h3>
              {tour.highlights.map((h, i) => (
                <div key={i}>✔ {h}</div>
              ))}

              <h3>Itinerary</h3>
              {tour.itinerary?.map((i, idx) => (
                <div key={idx}>➡ {i}</div>
              ))}
            </div>
          )}

          {/* PLACES */}
          {tab === "places" && (
            <div style={box}>
              <h2>Places you will visit</h2>

              {tour.places?.map((p, i) => (
                <div key={i} style={placeCard}>
                  <h3>{p.name}</h3>
                  <p>{p.info}</p>
                  <small style={{ opacity: 0.7 }}>💡 {p.tip}</small>
                </div>
              ))}
            </div>
          )}

          {/* REVIEWS (mock style like Civitatis) */}
          {tab === "reviews" && (
            <div style={box}>
              <h2>Customer Reviews</h2>

              <div style={review}>
                ⭐⭐⭐⭐⭐ “Amazing experience with great guide!”
              </div>
              <div style={review}>
                ⭐⭐⭐⭐⭐ “Very professional and well organized tour.”
              </div>
              <div style={review}>
                ⭐⭐⭐⭐ “Highly recommended for families.”
              </div>
            </div>
          )}

          {/* ADD ONS */}
          {tab === "addons" && (
            <div style={box}>
              <h2>Extra Experiences</h2>

              {tour.addons?.length ? (
                tour.addons.map((a, i) => (
                  <div key={i} style={addon}>
                    ➕ {a.name} <b>+${a.price}</b>
                  </div>
                ))
              ) : (
                <p>No extras available</p>
              )}
            </div>
          )}
        </div>

        {/* RIGHT BOOKING */}
        <div style={booking}>

          <h2>Book now</h2>

          <div style={priceBox}>
            <h1>${price}</h1>
            <span>per person</span>
          </div>

          <label>People</label>
          <input
            type="number"
            min="1"
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
            style={input}
          />

          <div style={total}>
            Discount: {discount * 100}%
            <br />
            Total: <b>${finalPrice.toFixed(0)}</b>
          </div>

          <button
            style={btn}
            onClick={() => (window.location.href = "/checkout")}
          >
            Book Now
          </button>

          <p style={{ fontSize: 12, opacity: 0.7 }}>
            Free cancellation available
          </p>

        </div>

      </div>
    </div>
  );
}

/* STYLES */

const app = { background: "#0A0A0A", color: "white", minHeight: "100vh" };

const hero = {
  height: 320,
  background:
    "url('https://images.unsplash.com/photo-1503177119275-0aa32b3a9368') center/cover",
  position: "relative"
};

const overlay = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.65)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const meta = { marginTop: 10, opacity: 0.8 };

const badge = {
  marginTop: 10,
  background: "#FFD700",
  color: "black",
  padding: "5px 10px",
  borderRadius: 20
};

const container = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: 20,
  padding: 20
};

const left = {};

const tabs = {
  display: "flex",
  gap: 10,
  marginBottom: 15
};

const tabBtn = {
  background: "transparent",
  color: "white",
  border: "none",
  cursor: "pointer",
  padding: 10
};

const box = {
  background: "#111",
  padding: 20,
  borderRadius: 10
};

const placeCard = {
  background: "#1a1a1a",
  padding: 10,
  marginBottom: 10,
  borderRadius: 8
};

const review = {
  background: "#1a1a1a",
  padding: 10,
  marginBottom: 10,
  borderRadius: 8
};

const addon = {
  background: "#1a1a1a",
  padding: 10,
  marginBottom: 10,
  borderRadius: 8
};

const booking = {
  background: "#111",
  padding: 20,
  borderRadius: 10,
  position: "sticky",
  top: 80
};

const priceBox = {
  display: "flex",
  alignItems: "baseline",
  gap: 10,
  marginBottom: 10
};

const input = {
  width: "100%",
  padding: 10,
  marginTop: 5,
  marginBottom: 10
};

const total = {
  fontSize: 16,
  marginBottom: 10
};

const btn = {
  width: "100%",
  padding: 12,
  background: "#FFD700",
  border: "none",
  fontWeight: "bold",
  cursor: "pointer"
};