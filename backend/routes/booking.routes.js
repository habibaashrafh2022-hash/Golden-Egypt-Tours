import express from "express";
import * as bookingController from "../controllers/booking.controller.js";

const router = express.Router();

// إنشاء حجز جديد
router.post("/create", bookingController.createBooking);

// الحصول على جميع الحجوزات (للإدمن)
router.get("/all", bookingController.getAllBookings);

// الحصول على حجز معين
router.get("/:id", bookingController.getBookingById);

// تحديث الحجز
router.put("/:id", bookingController.updateBooking);

// حذف الحجز
router.delete("/:id", bookingController.deleteBooking);

// الحصول على حجوزات المستخدم
router.get("/user/:email", bookingController.getUserBookings);

// تأكيد الحجز
router.put("/:id/confirm", bookingController.confirmBooking);

// إلغاء الحجز
router.put("/:id/cancel", bookingController.cancelBooking);

export default router;
