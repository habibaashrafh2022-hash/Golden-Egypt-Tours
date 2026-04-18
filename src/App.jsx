import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CityPage from "./pages/CityPage";
import TourExperience from "./pages/TourExperience";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:name" element={<CityPage />} />
        <Route path="/tour/:city/:tourId" element={<TourExperience />} />
      </Routes>
    </BrowserRouter>
  );
}