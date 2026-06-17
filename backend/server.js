import "./config.js"; // ← أول سطر عشان dotenv يتحمل الأول
import express from "express";
import cors from "cors";
import cityRoutes from "./routes/cities.js";
import tourRoutes from "./routes/tours.js";
import authRoutes from "./routes/auth.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import mongoose from "mongoose";
import path from "path";
mongoose.connect(process.env.MONGO_URI, {
  tls: true,
  tlsAllowInvalidCertificates: true,
})
  .then(() => console.log("MongoDB Connected ✔"))
  .catch((err) => console.log("Mongo Error:", err));

const app = express();
const PORT = process.env.PORT || 5000;

// =======================
// MIDDLEWARE
// =======================
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://golden-egypt-tours.vercel.app"
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));
// simple logger
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
// ROUTES
// =======================
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.get("/test-image", (req, res) => {
  res.sendFile(process.cwd() + "/public/images/tours/westsolo.jpeg");
});
// =======================
// GLOBAL ERROR HANDLER ← الأخير دايماً
// =======================
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
});

// =======================
// START SERVER
// =======================
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});