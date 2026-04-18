import { Link } from "react-router-dom";

const cities = [
  { name: "cairo", title: "Cairo", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368" },
  { name: "giza", title: "Giza Pyramids", image: "https://images.unsplash.com/photo-1601524909162-ae8725290836" },
  { name: "luxor", title: "Luxor", image: "https://images.unsplash.com/photo-1548013146-72479768bada" },
  { name: "aswan", title: "Aswan", image: "https://images.unsplash.com/photo-1589395937772-f3f4c5c4c8d6" },
  { name: "alexandria", title: "Alexandria", image: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45" },
  { name: "hurghada", title: "Red Sea", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21" },
  { name: "sharm", title: "Sharm El Sheikh", image: "https://images.unsplash.com/photo-1589395937901-3b0c0f5c9f1e" },
  { name: "dahab", title: "Dahab", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { name: "siwa", title: "Siwa Oasis", image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf" }
];

export default function Home() {
  return (
    <div style={app}>

      {/* HERO */}
      <div style={hero}>
        <div style={overlay}>
          <h1 style={title}>Discover Egypt</h1>
          <p style={subtitle}>
            Luxury Tours • Ancient History • Desert Adventures • Nile Experiences
          </p>

          <Link to="/city/cairo" style={btn}>
            Explore Tours
          </Link>
        </div>
      </div>

      {/* SECTION */}
      <div style={section}>
        <h2 style={h2}>Top Destinations</h2>

        <div style={grid}>
          {cities.map((c) => (
           <Link key={c.name} to={`/city/${c.name}`} style={card} className="city-card">
              <img src={c.image} style={img} />
              <div style={city}>{c.title}</div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}

/* STYLES */
const cardHover = `
  .city-card:hover {
    transform: scale(1.03);
    filter: brightness(1.1);
  }
`;
const app = { background: "#0A0A0A", color: "white", minHeight: "100vh" };

const hero = {
  height: "90vh",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1539650116574-75c0c6d0f7a5')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
};

const overlay = {
  textAlign: "center",
  background: "rgba(0,0,0,0.6)",
  padding: 30,
  borderRadius: 15
};

const title = { fontSize: 55, color: "#FFD700", marginBottom: 10 };

const subtitle = { opacity: 0.8, marginBottom: 20 };

const btn = {
  background: "#FFD700",
  color: "black",
  padding: "10px 20px",
  textDecoration: "none",
  borderRadius: 8,
  fontWeight: "bold"
};

const section = { padding: 30 };

const h2 = { textAlign: "center", color: "#FFD700", marginBottom: 20 };

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
  gap: 15
};

const card = {
  position: "relative",
  borderRadius: 16,
  overflow: "hidden",
  textDecoration: "none",
  color: "white",
  transition: "0.3s",
  boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
};

const img = { width: "100%", height: 180, objectFit: "cover" };

const city = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  background: "rgba(0,0,0,0.6)",
  padding: 10,
  textAlign: "center"
};