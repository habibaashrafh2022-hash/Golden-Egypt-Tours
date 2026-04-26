import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import cairoTours from "../data/cairo";

export default function Cairo() {
  const [lang, setLang] = useState("en");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // ================= SAFE TEXT =================
  const t = (field) => {
    if (!field) return "";
    if (typeof field === "string") return field;
    if (typeof field === "object") return field?.[lang] || field?.en || "";
    return "";
  };

  // ================= DATA (FIXED) =================
  const tours = cairoTours || [];

  // ================= FILTER LOGIC (FIXED BUT SAME IDEA) =================
  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const title = (tour.hero?.title || "").toLowerCase();
      const desc = (tour.description?.full || "").toLowerCase();

      const matchSearch =
        title.includes(search.toLowerCase()) ||
        desc.includes(search.toLowerCase());

      const isPackage = tour.filters?.type === "package";

      const matchFilter =
        filter === "all"
          ? true
          : filter === "packages"
          ? isPackage
          : filter === "day"
          ? tour.filters?.type === "day"
          : true;

      return matchSearch && matchFilter;
    });
  }, [tours, search, filter]);

  return (
    <div style={page}>

      {/* ================= HERO (UNCHANGED STRUCTURE) ================= */}
      <div style={hero}>
        <div style={heroOverlay}>
          <h1 style={title}>Cairo Experiences</h1>
          <p style={subtitle}>
            Discover Egypt’s capital through curated tours & packages
          </p>

          {/* SEARCH */}
          <input
            placeholder="Search tours..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={searchBox}
          />

          {/* LANGUAGE */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            style={select}
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>

      {/* ================= FILTERS ================= */}
      <div style={filters}>
        {[
          { key: "all", label: "All" },
          { key: "day", label: "Day Tours" },
          { key: "packages", label: "Packages" },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            style={{
              ...filterBtn,
              background: filter === f.key ? "#d4af37" : "transparent",
              color: filter === f.key ? "#000" : "#fff",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* ================= GRID ================= */}
      <div style={grid}>

        {(filteredTours || []).map((tour) => (
          <Link
            to={`/tour/${tour.id}`}
            key={tour.id}
            style={card}
          >

            {/* IMAGE */}
            <div style={imgWrap}>
              <img
                src={tour.hero?.images?.[0]}
                style={img}
              />
            </div>

            {/* CONTENT */}
            <div style={content}>

              <div style={topRow}>
                <h3 style={cardTitle}>
                  {tour.hero?.title}
                </h3>

                <span style={tag}>
                  {tour.filters?.type || "tour"}
                </span>
              </div>

              <p style={desc}>
                {(tour.description?.full || "").slice(0, 110)}...
              </p>

              {/* META */}
              <div style={meta}>
                <span>⏱ {tour.details?.duration}</span>

                <span style={price}>
                  From ${tour.booking?.price?.single || 0}
                </span>
              </div>

            </div>

          </Link>
        ))}

      </div>

    </div>
  );
}

/* ================= STYLES (UNCHANGED) ================= */

const page = { background: "#0b0f1a", minHeight: "100vh", color: "white" };

const hero = {
  height: 320,
  background:
    "url('https://images.unsplash.com/photo-1503174971373-b1f69850bded') center/cover",
  position: "relative",
};

const heroOverlay = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const title = { fontSize: 42, color: "#d4af37" };
const subtitle = { color: "#ccc" };

const searchBox = {
  marginTop: 15,
  padding: 10,
  width: "60%",
};

const select = {
  marginTop: 10,
  padding: 10,
};

const filters = {
  display: "flex",
  gap: 10,
  padding: 15,
  justifyContent: "center",
};

const filterBtn = {
  padding: "8px 14px",
  border: "1px solid #d4af37",
  cursor: "pointer",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: 20,
  padding: 20,
};

const card = {
  background: "rgba(255,255,255,0.04)",
  borderRadius: 14,
  textDecoration: "none",
  color: "white",
  overflow: "hidden",
};

const imgWrap = { height: 180 };

const img = { width: "100%", height: "100%", objectFit: "cover" };

const content = { padding: 15 };

const topRow = { display: "flex", justifyContent: "space-between" };

const cardTitle = { color: "#d4af37", margin: 0 };

const tag = { fontSize: 10, background: "#d4af37", color: "#000", padding: 4 };

const desc = { fontSize: 13, color: "#bbb" };

const meta = { display: "flex", justifyContent: "space-between" };

const price = { color: "#d4af37" };