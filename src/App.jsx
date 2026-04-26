import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home     from "./pages/Home";
import City from "./pages/City";
import Tour     from "./pages/Tour";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        
        {/* ── الهوم بيج ── */}
        <Route path="/"             element={<Home />} />

        {/* ── صفحة المدينة ── */}
         <Route path="/city/:cityId" element={<City/>} />

        {/* ── صفحة التور ── */}
        <Route path="/tour/:tourId" element={<Tour />} />

        {/* ── Fallback: أي رابط تاني يرجع الهوم ── */}
        <Route path="*"             element={<Navigate to="/" replace />} />

<Route path="/login" element={<Login />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}