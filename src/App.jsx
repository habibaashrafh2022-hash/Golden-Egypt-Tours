import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CityPage from "./pages/CityPage";
import TourExperience from "./pages/TourExperience";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <BrowserRouter>
      <div style={app}>

        <Navbar />

        <div style={container}>
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
            <Route path="/city/:name" element={<CityPage />} />
            <Route path="/tour/:city/:tourId" element={<TourExperience />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

/* 💥 GLOBAL LAYOUT STYLE (احترافي بسيط) */

const app = {
  background: "radial-gradient(circle at top, #111 0%, #000 100%)",
  color: "white",
  minHeight: "100vh"
};

const container = {
  paddingTop: "70px" // عشان Navbar ما يغطيش المحتوى
};
