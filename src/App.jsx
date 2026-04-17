import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { cities } from "./data/cities";

/* ================= APP ================= */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/city/:id" element={<CityPage />} />
      <Route path="/tour/:cityId/:tourId" element={<TourPage />} />
    </Routes>
  );
}

/* ================= HOME ================= */
function Home() {
  const navigate = useNavigate();

  return (
    <div style={page}>
      <h1 style={title}>🌍 Golden Egypt Tours</h1>
      <p style={subtitle}>Discover Egypt's Best Destinations</p>

      <div style={grid}>
        {cities.map((city) => (
          <div
            key={city.id}
            style={card}
            onClick={() => navigate(`/city/${city.id}`)}
          >
            <img src={city.image} style={img} />
            <div style={overlay}>
              <h2>{city.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= CITY PAGE ================= */
function CityPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const city = cities.find((c) => c.id === id);

  if (!city) {
    return <h2 style={{ color: "white", padding: 20 }}>City not found</h2>;
  }

  return (
    <div style={page}>
      <h1 style={title}>{city.name} Tours</h1>

      <div style={tourGrid}>
        {city.tours.map((tour, index) => (
          <div
            key={index}
            style={tourCard}
            onClick={() => navigate(`/tour/${city.id}/${index}`)}
          >
            🎫 {tour.name}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= TOUR PAGE ================= */
function TourPage() {
  const { cityId, tourId } = useParams();

  const city = cities.find((c) => c.id === cityId);
  const tour = city?.tours?.[tourId];

  if (!tour) {
    return <h2 style={{ color: "white", padding: 20 }}>Tour not found</h2>;
  }

  return (
    <div style={page}>
      <h1 style={title}>{tour.name}</h1>

      <p style={desc}>{tour.description}</p>

      <h2 style={{ color: "#C8A24A" }}>💰 ${tour.price}</h2>

      <button style={btn}>Book Now</button>
    </div>
  );
}

/* ================= STYLES ================= */

const page = {
  background: "#0B0B0B",
  minHeight: "100vh",
  color: "white",
  padding: "20px",
  fontFamily: "Arial"
};

const title = {
  textAlign: "center",
  color: "#C8A24A"
};

const subtitle = {
  textAlign: "center",
  opacity: 0.7,
  marginBottom: 20
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px"
};

const card = {
  position: "relative",
  cursor: "pointer",
  borderRadius: "15px",
  overflow: "hidden",
  height: "200px",
  border: "1px solid #333"
};

const img = {
  width: "100%",
  height: "100%",
  objectFit: "cover"
};

const overlay = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  background: "rgba(0,0,0,0.6)",
  textAlign: "center",
  padding: "10px"
};

const tourGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "15px",
  marginTop: "20px"
};

const tourCard = {
  background: "#111",
  padding: "15px",
  border: "1px solid #444",
  cursor: "pointer"
};

const desc = {
  maxWidth: "600px",
  margin: "20px auto",
  textAlign: "center",
  opacity: 0.8
};

const btn = {
  display: "block",
  margin: "20px auto",
  padding: "12px 20px",
  background: "#C8A24A",
  border: "none",
  cursor: "pointer"
};

export default App;