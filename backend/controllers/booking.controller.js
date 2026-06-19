import nodemailer   from "nodemailer";
import Booking       from "../models/booking.model.js";
import { buildGuestEmail, buildAdminEmail } from "../utils/email.templates.js";

// ─── Nodemailer transporter ─────────────────────────────────
// Set these in your .env:
//   EMAIL_USER     → your Gmail address (e.g. Goldenegypttours26@gmail.com)
//   EMAIL_PASS     → Gmail App Password (NOT your login password)
//                    Generate at: myaccount.google.com/apppasswords
//   ADMIN_EMAIL    → address that receives every new-booking alert (can be same)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail({ to, subject, html }) {
  return transporter.sendMail({
    from: `"Aurevian Tours" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
}

// ─── HELPERS ───────────────────────────────────────────────
function buildWhatsAppLink(booking) {
  const dateStr = new Date(booking.details.date).toLocaleDateString("en-GB", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  const msg =
    `✦ *New Booking — Aurevian Tours*\n\n` +
    `📋 *${booking.tour.tourName}*\n` +
    `📍 City: ${booking.tour.city || "—"}\n` +
    `🔖 Ref: *${booking.reference}*\n\n` +
    `👤 *Guest*\n` +
    `Name: ${booking.guest.name}\n` +
    `WhatsApp: ${booking.guest.whatsapp}\n` +
    `Email: ${booking.guest.email}\n` +
    `Age: ${booking.guest.age} · Nationality: ${booking.guest.nationality}\n\n` +
    `📅 *Trip Details*\n` +
    `Date: ${dateStr}\n` +
    `Guests: ${booking.details.numberOfGuests}\n` +
    `Language: ${booking.details.tourLanguage}\n\n` +
    `📍 *Locations*\n` +
    `Pickup: ${booking.locations.pickupLocation === "Other"
      ? booking.locations.pickupSpecific
      : booking.locations.pickupLocation}\n` +
    `Drop-off: ${booking.locations.dropoffLocation === "Hotel"
      ? `Hotel — ${booking.locations.hotelName}`
      : booking.locations.dropoffLocation === "Other"
      ? booking.locations.dropoffSpecific
      : booking.locations.dropoffLocation}\n\n` +
    `💰 *Total: $${booking.totalPrice} ${booking.currency}*\n` +
    (booking.specialRequests ? `\n📝 Special Requests: ${booking.specialRequests}\n` : "") +
    `\n_Aurevian Tours · +20 106 825 7754_`;

  return `https://wa.me/201068257754?text=${encodeURIComponent(msg)}`;
}

// ─── CREATE BOOKING ────────────────────────────────────────
export async function createBooking(req, res) {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    // Fire emails concurrently — don't let an email failure block the response
    const [guestTemplate, adminTemplate] = [
      buildGuestEmail(booking),
      buildAdminEmail(booking),
    ];

    const emailResults = await Promise.allSettled([
      sendEmail({ to: booking.guest.email, ...guestTemplate }),
      sendEmail({ to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER, ...adminTemplate }),
    ]);

    // Track whether emails succeeded
    const guestSent = emailResults[0].status === "fulfilled";
    const adminSent = emailResults[1].status === "fulfilled";

    if (guestSent || adminSent) {
      await Booking.findByIdAndUpdate(booking._id, {
        confirmationEmailSent: guestSent,
        adminEmailSent:        adminSent,
      });
    }

    if (!guestSent) {
      console.warn("Guest email failed:", emailResults[0].reason?.message);
    }
    if (!adminSent) {
      console.warn("Admin email failed:", emailResults[1].reason?.message);
    }

    res.status(201).json({
      success:      true,
      message:      "Booking created successfully",
      reference:    booking.reference,
      bookingId:    booking._id,
      whatsappLink: buildWhatsAppLink(booking),
      emailsSent: {
        guest: guestSent,
        admin: adminSent,
      },
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: "Validation failed", errors });
    }
    console.error("createBooking error:", err);
    res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
}

// ─── GET ALL BOOKINGS (admin) ──────────────────────────────
export async function getAllBookings(req, res) {
  try {
    const {
      status, payment, city, from, to,
      page = 1, limit = 20, sort = "-createdAt",
    } = req.query;

    const filter = {};
    if (status)  filter.bookingStatus  = status;
    if (payment) filter.paymentStatus  = payment;
    if (city)    filter["tour.city"]   = city;
    if (from || to) {
      filter["details.date"] = {};
      if (from) filter["details.date"].$gte = new Date(from);
      if (to)   filter["details.date"].$lte = new Date(to);
    }

    const [bookings, total] = await Promise.all([
      Booking.find(filter)
        .sort(sort)
        .skip((page - 1) * limit)
        .limit(Number(limit))
        .lean(),
      Booking.countDocuments(filter),
    ]);

    res.json({
      success: true,
      total,
      page:    Number(page),
      pages:   Math.ceil(total / limit),
      bookings,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// ─── GET SINGLE BOOKING ────────────────────────────────────
export async function getBookingById(req, res) {
  try {
    const booking = await Booking.findById(req.params.id).lean();
    if (!booking) return res.status(404).json({ success: false, message: "Booking not found" });
    res.json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// ─── GET BOOKINGS BY GUEST EMAIL ───────────────────────────
export async function getUserBookings(req, res) {
  try {
    const bookings = await Booking.find({
      "guest.email": req.params.email.toLowerCase(),
    })
      .sort("-createdAt")
      .lean();

    res.json({ success: true, count: bookings.length, bookings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// ─── UPDATE BOOKING ────────────────────────────────────────
export async function updateBooking(req, res) {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    if (!booking) return res.status(404).json({ success: false, message: "Booking not found" });
    res.json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// ─── CONFIRM BOOKING ───────────────────────────────────────
export async function confirmBooking(req, res) {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { bookingStatus: "confirmed", updatedAt: new Date() },
      { new: true }
    );
    if (!booking) return res.status(404).json({ success: false, message: "Booking not found" });

    // Re-send confirmation email to guest
    try {
      const template = buildGuestEmail(booking);
      await sendEmail({ to: booking.guest.email, ...template });
    } catch (emailErr) {
      console.warn("Confirmation email failed:", emailErr.message);
    }

    res.json({ success: true, message: "Booking confirmed", booking });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// ─── CANCEL BOOKING ────────────────────────────────────────
export async function cancelBooking(req, res) {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { bookingStatus: "cancelled", paymentStatus: "cancelled", updatedAt: new Date() },
      { new: true }
    );
    if (!booking) return res.status(404).json({ success: false, message: "Booking not found" });
    res.json({ success: true, message: "Booking cancelled", booking });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// ─── DELETE BOOKING ────────────────────────────────────────
export async function deleteBooking(req, res) {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ success: false, message: "Booking not found" });
    res.json({ success: true, message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}