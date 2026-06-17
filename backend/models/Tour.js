import mongoose from "mongoose";

// ── Itinerary Step Schema ──
const itineraryStepSchema = new mongoose.Schema({
  time: { type: String },
  title: { type: String },
  description: { type: String },
  icon: { type: String },
  tags: { type: [String], default: [] },
}, { _id: false });

// ── Itinerary Day Schema (for multi-day tours) ──
const itineraryDaySchema = new mongoose.Schema({
  day: { type: Number },
  title: { type: String },
  icon: { type: String },
  location: { type: String },
  meals: { type: String },
  accommodation: { type: String },
  steps: { type: [itineraryStepSchema], default: [] },
}, { _id: false });

// ── FAQ Schema ──
const faqSchema = new mongoose.Schema({
  question: { type: String },
  answer: { type: String },
}, { _id: false });

// ── Review Schema ──
const reviewSchema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  location: { type: String },
  rating: { type: Number },
  date: { type: String },
  text: { type: String },
}, { _id: false });

// ── Main Tour Schema ──
const tourSchema = new mongoose.Schema(
  {
    // ── BASIC INFO ──
    title: {
      type: String,
      required: true,
      trim: true,
    },
    titleAr: {
      type: String,
      trim: true,
    },
    tagline: { type: String },
    taglineAr: { type: String },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    // ── DESCRIPTIONS ──
    description: {
      type: String,
      required: true,
    },
    descriptionAr: {
      type: String,
    },

    // ── CITY REFERENCE ──
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },

    // ── CATEGORY & PRICE ──
    category: {
      type: String,
      required: true,
    },
    price: {
      original: { type: Number },
      discounted: { type: Number },
      currency: { type: String, default: "USD" },
    },

    // ── TOUR DETAILS ──
    duration: { type: String },
    language: { type: [String], default: ["English"] },
    difficulty: { type: String, default: "Easy" },
    minAge: { type: Number, default: 0 },
    groupSize: { type: Number, default: 15 },
   meetingPoint: { type: mongoose.Schema.Types.Mixed },
    cancellation: { type: String },

    // ── STATS ──
    rating: {
      score: { type: Number, default: 0 },
      reviews: { type: Number, default: 0 },
    },
    travellers: { type: Number, default: 0 },
    freeCancellation: { type: Boolean, default: true },

    // ── MEDIA ──
    images: { type: [String], default: [] },

    // ── CONTENT ──
    highlights: { type: [String], default: [] },
    includes: { type: [String], default: [] },
    excludes: { type: [String], default: [] },

    // ── ITINERARY ──
    // لو التور بيوم واحد — itinerary بيكون array من steps
    // لو التور متعدد الأيام — itinerary بيكون array من days
    itinerary: { type: mongoose.Schema.Types.Mixed, default: [] },

    // ── FAQ ──
    faq: { type: [faqSchema], default: [] },

    // ── REVIEWS ──
    reviews: { type: [reviewSchema], default: [] },

    // ── STATUS ──
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// ── INDEXES ──

tourSchema.index({ city: 1 });
tourSchema.index({ category: 1 });
tourSchema.index({ "price.discounted": 1 });
tourSchema.index({ "rating.score": -1 });

export default mongoose.model("Tour", tourSchema);