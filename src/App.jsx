import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home     from "./pages/Home";
import City from "./pages/City";
import Tour     from "./pages/Tour";
import Hotels     from "./pages/Hotels";
import Packages from "./pages/Packages";
import NileCruisesPage from "./pages/NileCruisesPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AITripBuilder from "./components/AITripBuilder";
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
       <Route path="/Packages" element={<Packages/>} /> 
 <Route path="/hotels" element={<Hotels/>} />
<Route path="/cruises" element={<NileCruisesPage />} />
        {/* ── Fallback: أي رابط تاني يرجع الهوم ── */}
        <Route path="*"             element={<Navigate to="/" replace />} />

<Route path="/login" element={<Login />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aitripbuilder" element={<AITripBuilder />} />
      </Routes>
    </BrowserRouter>
  );
}