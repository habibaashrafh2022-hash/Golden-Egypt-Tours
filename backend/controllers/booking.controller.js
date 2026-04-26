import Booking from "../models/Booking.js";
import Tour from "../models/Tour.js";
import { calculatePrice } from "../utils/pricing.js";

// CREATE BOOKING
export const createBooking = async (req, res) => {
  try {
    const { tourId, userName, persons } = req.body;

    // 1. Get Tour (source of truth)
    const tour = await Tour.findById(tourId);

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found"
      });
    }

    // 2. Base price from DB (fallback 100)
    const basePrice = tour?.booking?.price?.single || 100;

    // 3. AI Pricing Engine (single source of truth)
    const totalPrice = calculatePrice(basePrice, persons);

    // 4. Create Booking
    const booking = await Booking.create({
      tourId,
      userName,
      persons,
      totalPrice
    });

    res.json({
      success: true,
      message: "Booking created successfully",
      data: booking
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};