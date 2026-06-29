import express               from "express";
import * as bookingController from "../controllers/booking.controller.js";

const router = express.Router();

// ── Public routes (guests) ──────────────────────────────────
router.post  ("/create",          bookingController.createBooking);
router.get   ("/user/:email",     bookingController.getUserBookings);

// ── Admin routes — MUST come before /:id ───────────────────
router.get   ("/all",             bookingController.getAllBookings);

// ── Single booking (by id) ──────────────────────────────────
router.get   ("/:id",             bookingController.getBookingById);
router.put   ("/:id",             bookingController.updateBooking);
router.put   ("/:id/confirm",     bookingController.confirmBooking);
router.put   ("/:id/cancel",      bookingController.cancelBooking);
router.delete("/:id",             bookingController.deleteBooking);

export default router;