import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={nav}>

      <Link to="/" style={logoBox}>
        <img src="/images/logo.png" style={logo} />
        <span style={brand}>Golden Egypt Tours</span>
      </Link>

      <div style={menu}>
        <Link to="/" style={link}>Home</Link>
        <Link to="/city/cairo" style={link}>Cairo</Link>
        <Link to="/city/luxor" style={link}>Luxor</Link>
        <Link to="/city/aswan" style={link}>Aswan</Link>
      </div>

    </div>
  );
}

const nav = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: 70,
  background: "rgba(0,0,0,0.85)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px",
  zIndex: 1000
};

const logoBox = { display: "flex", gap: 10, alignItems: "center", textDecoration: "none" };
const logo = { height: 40 };
const brand = { color: "#d4af37", fontWeight: "bold" };
const menu = { display: "flex", gap: 20 };
const link = { color: "white", textDecoration: "none" };