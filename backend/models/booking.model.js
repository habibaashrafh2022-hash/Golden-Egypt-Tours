import mongoose from "mongoose";

const PICKUP_LOCATIONS = [
  "Cairo", "Giza", "Luxor", "Aswan", "Hurghada",
  "Sharm El Sheikh", "Alexandria", "New Cairo",
  "Heliopolis", "6th of October City", "Other"
];

const DROPOFF_LOCATIONS = [
  "Cairo", "Giza", "Luxor", "Aswan", "Hurghada",
  "Sharm El Sheikh", "Alexandria", "New Cairo",
  "Heliopolis", "6th of October City", "Hotel", "Other"
];

const TOUR_LANGUAGES = [
  "English", "Spanish", "French", "Italian", "German",
  "Portuguese", "Chinese", "Dutch", "Japanese", "Arabic"
];

const BookingSchema = new mongoose.Schema(
  {
    // ── Reference number (auto-generated) ──────────────────────
    reference: {
      type: String,
      unique: true,
    },

    // ── Customer information ───────────────────────────────────
    user: {
      name:        { type: String, required: [true, "Name is required"], trim: true },
      email:       { type: String, required: [true, "Email is required"], lowercase: true, trim: true },
      age:         { type: Number, required: [true, "Age is required"], min: 1, max: 150 },
      nationality: { type: String, required: [true, "Nationality is required"], trim: true },
      whatsapp:    { type: String, required: [true, "WhatsApp number is required"], trim: true },
    },

    // ── Tour information ───────────────────────────────────────
    tour: {
      tourId:   { type: String, required: true },
      tourName: { type: String },
      city:     { type: String },
      price:    { type: Number },
    },

    // ── Booking details ────────────────────────────────────────
    bookingDetails: {
      date:           { type: Date, required: [true, "Booking date is required"] },
      numberOfGuests: { type: Number, required: [true, "Number of guests is required"], min: 1 },
      tourLanguage:   { type: String, enum: TOUR_LANGUAGES, required: [true, "Tour language is required"] },
    },

    // ── Pickup & drop-off ──────────────────────────────────────
    locations: {
      pickupLocation:  { type: String, required: [true, "Pickup location is required"], enum: PICKUP_LOCATIONS },
      pickupSpecific:  { type: String, default: "" },   // filled when pickupLocation === "Other"
      dropoffLocation: { type: String, required: [true, "Dropoff location is required"], enum: DROPOFF_LOCATIONS },
      dropoffSpecific: { type: String, default: "" },   // filled when dropoffLocation === "Other"
      hotelName:       { type: String, default: "" },   // filled when dropoffLocation === "Hotel"
      hotelAddress:    { type: String, default: "" },
    },

    // ── Special requests ───────────────────────────────────────
    specialRequests: { type: String, default: "" },

    // ── Pricing ────────────────────────────────────────────────
    totalPrice: { type: Number, required: true },
    currency:   { type: String, default: "USD" },

    // ── Status ─────────────────────────────────────────────────
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "cancelled", "refunded"],
      default: "pending",
    },
    bookingStatus: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },

    // ── Email tracking (helps you debug delivery from the DB) ──
    confirmationEmailSent: { type: Boolean, default: false },
    adminEmailSent:        { type: Boolean, default: false },
  },
  {
    timestamps: true, // createdAt + updatedAt auto-managed by Mongoose
  }
);

// Auto-generate a short, readable reference before saving
BookingSchema.pre("save", function (next) {
  if (!this.reference) {
    const ts   = Date.now().toString().slice(-6);
    const rand = Math.random().toString(36).slice(2, 5).toUpperCase();
    this.reference = `AUR-${ts}-${rand}`;
  }
  next();
});

export const PICKUP_LOCATIONS_LIST  = PICKUP_LOCATIONS;
export const DROPOFF_LOCATIONS_LIST = DROPOFF_LOCATIONS;
export const TOUR_LANGUAGES_LIST    = TOUR_LANGUAGES;

export default mongoose.model("Booking", BookingSchema);