import { useState } from "react";
import { useParams } from "react-router-dom";
import { tours } from "../data/tours";

export default function TourExperience() {
  const { city, tourId } = useParams();
  const tour = tours?.[city]?.find((t) => t.id === tourId);

  const [step, setStep] = useState(1);
  const [people, setPeople] = useState(1);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  if (!tour) return <h2 style={{ color: "white" }}>Tour not found</h2>;

  const price = tour.pricing?.solo || 0;
  const total = price * people;

  return (
    <div style={app}>

      {/* HERO */}
      <div style={hero}>
        <img src={tour.image} style={imgHero} />
        <div style={overlay}>
          <h1>{tour.title}</h1>
          <p>{tour.short}</p>
        </div>
      </div>

      <div style={container}>

        {/* LEFT */}
        <div style={left}>

          {step === 1 && (
            <Box title="Overview">
              <p>{tour.description}</p>
              <button style={btn} onClick={() => setStep(2)}>
                Start Booking
              </button>
            </Box>
          )}

          {step === 2 && (
            <Box title="Your Details">

              <input
                placeholder="Name"
                style={input}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="date"
                style={input}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <input
                type="number"
                min="1"
                style={input}
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
              />

              <button style={btn} onClick={() => setStep(3)}>
                Continue
              </button>

            </Box>
          )}

          {step === 3 && (
            <Box title="Confirm Booking">

              <div>👤 Name: {name}</div>
              <div>📅 Date: {date}</div>
              <div>👥 People: {people}</div>
              <div>💰 Total: ${total}</div>

              <button style={btn} onClick={() => setStep(4)}>
                Confirm
              </button>

            </Box>
          )}

          {step === 4 && (
            <Box title="Success 🎉">
              <h2 style={{ color: "lightgreen" }}>Booking Confirmed</h2>
              <p>Reference: EG-{Math.floor(Math.random() * 99999)}</p>
            </Box>
          )}

        </div>

      </div>

    </div>
  );
}

function Box({ title, children }) {
  return (
    <div style={box}>
      <h2 style={{ color: "#FFD700" }}>{title}</h2>
      {children}
    </div>
  );
}

/* STYLES */

const app = { background: "#0A0A0A", color: "white", minHeight: "100vh" };

const hero = { position: "relative", height: 300 };

const imgHero = { width: "100%", height: "100%", objectFit: "cover" };

const overlay = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const container = { padding: 20 };

const left = { maxWidth: 600 };

const box = {
  background: "#111",
  padding: 15,
  borderRadius: 10,
  marginBottom: 15
};

const input = {
  width: "100%",
  padding: 8,
  marginBottom: 10
};

const btn = {
  width: "100%",
  padding: 10,
  background: "#FFD700",
  border: "none",
  cursor: "pointer",
  marginTop: 10
};