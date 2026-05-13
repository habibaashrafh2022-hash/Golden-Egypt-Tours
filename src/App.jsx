import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";   // ← جديد

import Home from "./pages/Home";
import City from "./pages/City";
import Tour from "./pages/Tour";
import Hotels from "./pages/Hotels";
import Packages from "./pages/Packages";
import NileCruisesPage from "./pages/NileCruisesPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import AITripBuilder from "./components/AITripBuilder";

export default function App() {
  return (
    <GlobalProvider>          {/* ← لف كل حاجة بيه */}
      <BrowserRouter>
        <Routes>

          {/* ── الهوم بيج ── */}
          <Route path="/"                   element={<Home />} />

          {/* ── صفحة المدينة ── */}
          <Route path="/city/:cityId"       element={<City />} />

          {/* ── صفحة التور ── */}
          <Route path="/tour/:tourId"       element={<Tour />} />

          {/* ── صفحة الحجز ── */}
          <Route path="/booking/:tourId"    element={<Booking />} />

          <Route path="/Packages"           element={<Packages />} />
          <Route path="/hotels"             element={<Hotels />} />
          <Route path="/cruises"            element={<NileCruisesPage />} />
          <Route path="/login"              element={<Login />} />
          <Route path="/dashboard"          element={<Dashboard />} />
          <Route path="/aitripbuilder"      element={<AITripBuilder />} />

          {/* ── Fallback ── */}
          <Route path="*"                   element={<Navigate to="/" replace />} />

        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}