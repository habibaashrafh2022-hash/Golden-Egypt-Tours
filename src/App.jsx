import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import { useState, useEffect } from "react";

// ── Pages ──
import Home           from "./pages/Home";
import City           from "./pages/City";
import Tour           from "./pages/Tour";
import Hotels         from "./pages/Hotels";
import Packages       from "./pages/Packages";
import NileCruisesPage from "./pages/NileCruisesPage";
import Login          from "./pages/Login";
import Dashboard      from "./pages/Dashboard";
import Booking        from "./pages/Booking";
import AITripBuilder  from "./components/AITripBuilder";

// ── New Components ──
import LoadingScreen  from "./components/LoadingScreen";



// ── Inner app (needs to be inside GlobalProvider) ──
function AppInner() {
 

  return (
    <>
     

      <BrowserRouter>
        <Routes>
          <Route path="/"                element={<Home />} />
          <Route path="/city/:cityId"    element={<City />} />
          <Route path="/tour/:tourId"    element={<Tour />} />
          <Route path="/booking/:tourId" element={<Booking />} />
          <Route path="/Packages"        element={<Packages />} />
          <Route path="/hotels"          element={<Hotels />} />
          <Route path="/cruises"         element={<NileCruisesPage />} />
          <Route path="/login"           element={<Login />} />
          <Route path="/dashboard"       element={<Dashboard />} />
          <Route path="/aitripbuilder"   element={<AITripBuilder />} />
          <Route path="*"               element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  // منع scroll أثناء loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [loading]);

  return (
    <GlobalProvider>
      {loading && (
        <LoadingScreen onComplete={() => setLoading(false)} />
      )}
      {/* AppInner يشتغل في الخلفية وبيظهر لما loading تخلص */}
      <div style={{
        opacity: loading ? 0 : 1,
        transition: "opacity 0.5s ease",
        pointerEvents: loading ? "none" : "all",
      }}>
        <AppInner />
      </div>
    </GlobalProvider>
  );
}