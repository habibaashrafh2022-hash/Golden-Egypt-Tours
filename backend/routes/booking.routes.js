import express from "express";
import { createBooking } from "../controllers/booking.controller.js";
import { extractTenant } from "../middleware/tenant.js";

const router = express.Router();

// POST /api/bookings
router.post("/", (req, res) => {
  const { tourId, persons, totalPrice } = req.body;

  console.log("NEW BOOKING:", req.body);

  res.json({
    success: true,
    message: "Booking received",
    price: totalPrice
  });
});
router.post("/", extractTenant, createBooking);

export default router;