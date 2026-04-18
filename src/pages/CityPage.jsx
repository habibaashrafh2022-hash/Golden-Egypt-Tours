import { useParams, Link } from "react-router-dom";
import { tours } from "../data/tours";

export default function CityPage() {
  const { name } = useParams();
  const data = tours?.[name] || [];

  return (
    <div style={app}>
      <h1 style={title}>{name?.toUpperCase()}</h1>

      <div style={grid}>
        {data.map((t) => (
          <div key={t.id} style={card}>
            <img src={t.image} style={img} />
            <h3>{t.title}</h3>
            <p>{t.short}</p>

            <Link to={`/tour/${name}/${t.id}`} style={btn}>
              View Tour
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const app = { background: "#0A0A0A", minHeight: "100vh", color: "white", padding: 20 };

const title = { textAlign: "center", color: "#FFD700" };

const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))", gap: 15 };

const card = { background: "#111", padding: 10, borderRadius: 10 };

const img = { width: "100%", height: 180, objectFit: "cover" };

const btn = {
  display: "block",
  marginTop: 10,
  textAlign: "center",
  background: "#FFD700",
  color: "black",
  padding: 8,
  textDecoration: "none"
};