import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState("all");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [tenant, setTenant] = useState("Company");
  const [role, setRole] = useState("admin");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  /* ================= AUTH ================= */
  useEffect(() => {
    if (!token) navigate("/login");
  }, [token]);

  /* ================= FETCH ================= */
  const fetchDashboard = () => {
    setLoading(true);
    setError("");

    fetch("http://localhost:5000/api/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setTenant(res.user?.tenantName || "Golden Egypt");
        setRole(res.user?.role || "admin");
        setLoading(false);
      })
      .catch(() => {
        setError("Server error");
        setLoading(false);
      });
  };

  useEffect(() => {
    if (token) fetchDashboard();
  }, []);

  /* ================= FILTER LOGIC ================= */
  useEffect(() => {
    if (!data?.latestBookings) return;

    if (filter === "all") {
      setFiltered(data.latestBookings);
    } else {
      setFiltered(
        data.latestBookings.filter((b) => b.status === filter)
      );
    }
  }, [data, filter]);

  /* ================= ACTIONS (UI ONLY) ================= */
  function updateStatus(id, status) {
    const updated = data.latestBookings.map((b) =>
      b._id === id ? { ...b, status } : b
    );

    setData({ ...data, latestBookings: updated });
  }

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  /* ================= STATES ================= */
  if (loading) return <div style={page}>⏳ Loading SaaS System...</div>;

  if (error)
    return (
      <div style={page}>
        ❌ {error}
        <button onClick={fetchDashboard} style={btn}>Retry</button>
      </div>
    );

  return (
    <div style={page}>

      {/* HEADER */}
      <div style={header}>
        <div>
          <h1>🚀 SaaS Admin System</h1>
          <p>🏢 {tenant} • 👤 {role}</p>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={fetchDashboard} style={btn}>🔄 Refresh</button>
          <button onClick={logout} style={logoutBtn}>Logout</button>
        </div>
      </div>

      {/* STATS */}
      <div style={grid}>
        <div style={card}>
          <h4>📦 Bookings</h4>
          <h2>{data?.totalBookings || 0}</h2>
        </div>

        <div style={card}>
          <h4>💰 Revenue</h4>
          <h2>${data?.totalRevenue || 0}</h2>
        </div>

        <div style={card}>
          <h4>📈 Growth</h4>
          <h2 style={{ color: "green" }}>+30%</h2>
        </div>
      </div>

      {/* FILTER BAR */}
      <div style={filterBar}>
        {["all", "confirmed", "cancelled"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              ...filterBtn,
              background: filter === f ? "#111" : "#fff",
              color: filter === f ? "#fff" : "#111"
            }}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* BOOKINGS */}
      <h2>🧾 Bookings Management</h2>

      <div>
        {filtered?.length ? (
          filtered.map((b) => (
            <div key={b._id} style={row}>

              <div>
                👤 <b>{b.userName}</b>
              </div>

              <div>👥 {b.persons}</div>

              <div style={{ color: "#b8860b" }}>
                💰 ${b.totalPrice}
              </div>

              {/* STATUS */}
              <div>
                <span style={status(b.status)}>
                  {b.status || "confirmed"}
                </span>
              </div>

              {/* ACTIONS */}
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={() => updateStatus(b._id, "confirmed")}
                  style={actionBtn}
                >
                  Confirm
                </button>

                <button
                  onClick={() => updateStatus(b._id, "cancelled")}
                  style={actionBtnDanger}
                >
                  Cancel
                </button>
              </div>

            </div>
          ))
        ) : (
          <div style={{ marginTop: 20, color: "#888" }}>
            No bookings found
          </div>
        )}
      </div>

    </div>
  );
}

/* ================= STYLES ================= */

const page = {
  padding: 25,
  fontFamily: "Arial",
  background: "#f6f7fb",
  minHeight: "100vh"
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 15,
  background: "#fff",
  borderRadius: 12,
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: 15,
  marginTop: 20
};

const card = {
  padding: 20,
  background: "#fff",
  borderRadius: 12,
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 15,
  marginTop: 10,
  background: "#fff",
  borderRadius: 10,
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
};

const filterBar = {
  display: "flex",
  gap: 10,
  marginTop: 25
};

const filterBtn = {
  padding: "8px 12px",
  border: "1px solid #ddd",
  borderRadius: 8,
  cursor: "pointer"
};

const btn = {
  padding: "8px 12px",
  borderRadius: 8,
  border: "none",
  cursor: "pointer"
};

const logoutBtn = {
  ...btn,
  background: "#111",
  color: "#fff"
};

const actionBtn = {
  padding: "5px 8px",
  borderRadius: 6,
  border: "1px solid #111",
  background: "#fff",
  cursor: "pointer"
};

const actionBtnDanger = {
  ...actionBtn,
  border: "1px solid red",
  color: "red"
};

const status = (s) => ({
  background:
    s === "cancelled"
      ? "#ffe6e6"
      : "#e6f7ea",
  color: s === "cancelled" ? "red" : "green",
  padding: "4px 8px",
  borderRadius: 6,
  fontSize: 12
});