import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    titleAr: {
      type: String,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    descriptionAr: {
      type: String,
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      original: { type: Number },
      discounted: { type: Number },
      currency: { type: String, default: "USD" },
    },
    duration: {
      type: String,
    },
    language: {
      type: [String],
      default: ["English"],
    },
    rating: {
      score: { type: Number, default: 0 },
      reviews: { type: Number, default: 0 },
    },
    travellers: {
      type: Number,
      default: 0,
    },
    freeCancellation: {
      type: Boolean,
      default: true,
    },
    images: {
      type: [String],
      default: [],
    },
    highlights: {
      type: [String],
      default: [],
    },
    includes: {
      type: [String],
      default: [],
    },
    excludes: {
      type: [String],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);