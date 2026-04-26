import { Link } from "react-router-dom";

export default function Home() {

  const destinations = [
    { name: "Luxor", img: "https://images.unsplash.com/photo-1589395937772-38c8e5d5f3a7", link: "/city/luxor" },
    { name: "Cairo", img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368", link: "/city/cairo" },
    { name: "Giza", img: "https://images.unsplash.com/photo-1597751062248-4224a37d70a5", link: "/city/giza" },
    { name: "Aswan", img: "https://images.unsplash.com/photo-1589395937749-3c9b4b6f8f0c", link: "/city/aswan" },
    { name: "Hurghada", img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21", link: "/city/hurghada" },
    { name: "Sharm El Sheikh", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220", link: "/city/sharm" },
    { name: "Siwa", img: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8", link: "/city/siwa" },
    { name: "Alexandria", img: "https://images.unsplash.com/photo-1589395937711-5b1a7c0b9c1e", link: "/city/alexandria" },
    { name: "Fayoum", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b", link: "/city/fayoum" },
    { name: "Ain Sokhna", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", link: "/city/ain-sokhna" }
  ];

  return (
    <div style={page}>

      {/* HEADER */}
      <header style={header}>
        <h1 style={logo}>🟡 Golden Egypt Tours</h1>

        <nav style={nav}>
          <a href="#dest">Destinations</a>
          <a href="#search">Search</a>
          <a href="#about">About</a>
        </nav>

        <button style={btn}>Book Now</button>
      </header>

      {/* HERO VIDEO */}
      <section style={hero}>
        <video autoPlay loop muted style={video}>
          <source src="https://cdn.coverr.co/videos/coverr-hot-air-balloons-over-cappadocia-9712/1080p.mp4" />
        </video>

        <div style={overlay}>
          <h1 style={logoHero}>Golden Egypt Tours</h1>
          <p>Luxury Ancient Egypt Experiences</p>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section id="search" style={searchBox}>
        <input placeholder="Where in Egypt?" style={input} />
        <input type="date" style={input} />
        <button style={searchBtn}>Search</button>
      </section>

      {/* DESTINATIONS */}
      <section id="dest" style={section}>
        <h2 style={title}>Destinations</h2>

        <div style={grid}>
          {destinations.map((d, i) => (
            <Link to={d.link} key={i} style={card}>
              <img src={d.img} style={img} />
              <h3>{d.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        © 2026 Golden Egypt Tours — All Rights Reserved
      </footer>

    </div>
  );
}

/* ===== STYLES ===== */

const page = {
  background: "#0c0c0c",
  color: "white",
  fontFamily: "Arial"
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 20,
  background: "#111"
};

const logo = {
  color: "#d4af37",
  fontSize: 20,
  fontWeight: "bold"
};

const nav = {
  display: "flex",
  gap: 15
};

const btn = {
  background: "#d4af37",
  border: "none",
  padding: "10px 15px",
  cursor: "pointer",
  fontWeight: "bold"
};

const hero = {
  position: "relative",
  height: "80vh",
  overflow: "hidden"
};

const video = {
  width: "100%",
  height: "100%",
  objectFit: "cover"
};

const overlay = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center"
};

const logoHero = {
  fontSize: 48,
  color: "#d4af37",
  textShadow: "0px 0px 20px black",
  fontWeight: "bold"
};

const searchBox = {
  display: "flex",
  gap: 10,
  padding: 20,
  justifyContent: "center",
  flexWrap: "wrap"
};

const input = {
  padding: 10,
  width: 200,
  borderRadius: 5,
  border: "none"
};

const searchBtn = {
  background: "#d4af37",
  border: "none",
  padding: "10px 20px",
  fontWeight: "bold",
  cursor: "pointer"
};

const section = {
  padding: 40
};

const title = {
  color: "#d4af37",
  textAlign: "center",
  marginBottom: 20,
  fontSize: 28
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: 20
};

const card = {
  textDecoration: "none",
  color: "white",
  background: "#111",
  padding: 10,
  borderRadius: 10,
  transition: "0.3s"
};

const img = {
  width: "100%",
  height: 140,
  objectFit: "cover",
  borderRadius: 10
};

const footer = {
  textAlign: "center",
  padding: 20,
  background: "#111",
  marginTop: 40
};