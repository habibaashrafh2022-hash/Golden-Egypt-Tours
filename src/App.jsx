import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import { useState, useEffect } from "react";

// ── Existing Pages ──
import Home            from "./pages/Home";
import City            from "./pages/City";
import Tour            from "./pages/Tour";
import Hotels          from "./pages/Hotels";
import Packages        from "./pages/Packages";
import NileCruisesPage from "./pages/NileCruisesPage";
import Login           from "./pages/Login";
import Dashboard       from "./pages/Dashboard";
import Booking         from "./pages/Booking";
import AITripBuilder   from "./components/AITripBuilder";

// ── New Pages ──
import About           from "./pages/About";
import Contact         from "./pages/Contact";
import FAQ             from "./pages/FAQ";
import Blog            from "./pages/Blog";
import BlogPost        from "./pages/BlogPost";
import TravelGuides    from "./pages/TravelGuides";
import Terms           from "./pages/Terms";
import Privacy         from "./pages/Privacy";
import BookingPolicy   from "./pages/BookingPolicy";
import RefundPolicy    from "./pages/RefundPolicy";
import Careers         from "./pages/Careers";
import SearchResults   from "./pages/SearchResults";
import Wishlist        from "./pages/Wishlist";
import Compare         from "./pages/Compare";
import AdminDashboard  from "./pages/admin/AdminDashboard";
import AdminTours      from "./pages/admin/AdminTours";
import NotFound        from "./pages/NotFound";

// ── New Components ──
import LoadingScreen   from "./components/LoadingScreen/LoadingScreen";



// ── Inner app (needs to be inside GlobalProvider) ──
function AppInner() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* ─────────────────────────────────────────────
              PUBLIC ROUTES
          ───────────────────────────────────────────── */}
          <Route path="/"                    element={<Home />} />

          {/* Destinations / Cities */}
          <Route path="/destinations"        element={<City />} />
          <Route path="/city/:cityId"        element={<City />} />

          {/* Tours */}
          <Route path="/tours"               element={<Packages />} />
          <Route path="/tour/:tourId"        element={<Tour />} />

          {/* Booking */}
          <Route path="/booking/:tourId"     element={<Booking />} />

          {/* Packages, Hotels, Cruises */}
          <Route path="/packages"            element={<Packages />} />
          <Route path="/hotels"              element={<Hotels />} />
          <Route path="/cruises"             element={<NileCruisesPage />} />

          {/* AI Planner */}
          <Route path="/ai-planner"          element={<AITripBuilder />} />
          <Route path="/aitripbuilder"       element={<Navigate to="/ai-planner" replace />} />

          {/* Blog */}
          <Route path="/blog"                element={<Blog />} />
          <Route path="/blog/:slug"          element={<BlogPost />} />
          <Route path="/travel-guides"       element={<TravelGuides />} />

          {/* Company */}
          <Route path="/about"               element={<About />} />
          <Route path="/contact"             element={<Contact />} />
          <Route path="/faq"                 element={<FAQ />} />
          <Route path="/careers"             element={<Careers />} />

          {/* Legal */}
          <Route path="/terms"               element={<Terms />} />
          <Route path="/privacy"             element={<Privacy />} />
          <Route path="/booking-policy"      element={<BookingPolicy />} />
          <Route path="/refund-policy"       element={<RefundPolicy />} />

          {/* Search & Utils */}
          <Route path="/search"              element={<SearchResults />} />
          <Route path="/wishlist"            element={<Wishlist />} />
          <Route path="/compare"             element={<Compare />} />

          {/* Auth */}
          <Route path="/login"               element={<Login />} />

          

          
          {/* ─────────────────────────────────────────────
              FALLBACK
          ───────────────────────────────────────────── */}
          <Route path="404"                  element={<NotFound />} />
          <Route path="*"                    element={<Navigate to="/404" replace />} />

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