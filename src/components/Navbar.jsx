import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={nav}>
      <div style={logo}>Egypt Tours</div>

      <div style={links}>
        <Link to="/" style={a}>Home</Link>
        <Link to="/city/cairo" style={a}>Cairo</Link>
        <Link to="/city/giza" style={a}>Giza</Link>
        <Link to="/city/luxor" style={a}>Luxor</Link>
        <Link to="/city/aswan" style={a}>Aswan</Link>
      </div>
    </div>
  );
}

const nav = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  padding: "12px 25px",
  display: "flex",
  justifyContent: "space-between",
  background: "rgba(0,0,0,0.4)",
  backdropFilter: "blur(10px)",
  zIndex: 999
};

const logo = {
  color: "#FFD700",
  fontWeight: "bold"
};

const links = {
  display: "flex",
  gap: 15
};

const a = {
  color: "white",
  textDecoration: "none",
  fontSize: 14
};