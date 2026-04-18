import { useParams, Link } from "react-router-dom";
import { tours } from "../data/tours";

export default function CityPage() {
  const { name } = useParams();

  const city = name?.toLowerCase();
  const data = tours?.[city] || [];

  console.log("CITY =", city);
  console.log("DATA =", data);

  return (
    <div style={app}>
      <h1 style={title}>{city?.toUpperCase()}</h1>

      {/* EMPTY STATE */}
      {data.length === 0 ? (
        <div style={empty}>
          <h2>No tours available for this city yet</h2>
          <p>We are working on adding amazing experiences ✨</p>
        </div>
      ) : (
        <div style={grid}>
          {data.map((t) => (
            <div key={t.id} style={card}>
              <img
                src={t.images?.[0]}
                style={img}
                alt={t.title}
              />

              <h3 style={{ marginTop: 10 }}>{t.title}</h3>

              <p style={{ opacity: 0.8 }}>{t.short}</p>

              <Link to={`/tour/${city}/${t.id}`} style={btn}>
                View Tour
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* STYLES */

const app = {
  background: "#0A0A0A",
  minHeight: "100vh",
  color: "white",
  padding: 20
};

const title = {
  textAlign: "center",
  color: "#FFD700",
  marginBottom: 20
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
  gap: 15
};

const card = {
  background: "#111",
  padding: 10,
  borderRadius: 10
};

const img = {
  width: "100%",
  height: 180,
  objectFit: "cover",
  borderRadius: 8
};

const btn = {
  display: "block",
  marginTop: 10,
  textAlign: "center",
  background: "#FFD700",
  color: "black",
  padding: 8,
  textDecoration: "none",
  borderRadius: 6
};

const empty = {
  textAlign: "center",
  marginTop: 50,
  opacity: 0.7
};