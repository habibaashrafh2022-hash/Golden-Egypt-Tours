import express from "express";
import cors from "cors";
import tours from "./data/tours.js";
import authRoutes from "./routes/auth.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✔"))
  .catch((err) => console.log("Mongo Error:", err));
const app = express();
const PORT = 5000;

// =======================
// MIDDLEWARE
// =======================
app.use(cors());
app.use(express.json());

// simple logger (SaaS touch)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// =======================
// HEALTH CHECK
// =======================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running 🚀"
  });
});

// =======================
// GET ALL TOURS + FILTERS + PAGINATION
// =======================
app.get("/api/tours", (req, res) => {
  try {
    let results = [...tours];

    const { city, search, sort, page = 1, limit = 10 } = req.query;

    // ===== FILTER CITY =====
    if (city) {
      results = results.filter(
        (t) =>
          (t.city || "").toLowerCase().trim() ===
          city.toLowerCase().trim()
      );
    }

    // ===== SEARCH =====
    if (search) {
      results = results.filter((t) =>
        (t.hero?.title?.en || "")
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // ===== SORT =====
    if (sort === "price_low") {
      results.sort(
        (a, b) =>
          (a.booking?.price?.single || 0) -
          (b.booking?.price?.single || 0)
      );
    }

    if (sort === "price_high") {
      results.sort(
        (a, b) =>
          (b.booking?.price?.single || 0) -
          (a.booking?.price?.single || 0)
      );
    }

    // ===== PAGINATION =====
    const start = (page - 1) * limit;
    const end = start + Number(limit);

    const paginated = results.slice(start, end);

    res.json({
      success: true,
      total: results.length,
      page: Number(page),
      limit: Number(limit),
      data: paginated
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

// =======================
// GET BY CITY (optional legacy)
// =======================
app.get("/api/tours/city/:city", (req, res) => {
  try {
    const city = (req.params.city || "").toLowerCase().trim();

    const filtered = tours.filter(
      (t) => (t.city || "").toLowerCase().trim() === city
    );

    res.json({
      success: true,
      city,
      count: filtered.length,
      data: filtered
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

// =======================
// GET SINGLE TOUR
// =======================
app.get("/api/tours/:id", (req, res) => {
  try {
    const tour = tours.find(
      (t) => String(t.id) === String(req.params.id)
    );

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found"
      });
    }

    res.json({
      success: true,
      data: tour
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

// =======================
// GLOBAL ERROR HANDLER
// =======================
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
});
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/dashboard", dashboardRoutes);
// =======================
// START SERVER
// =======================
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});