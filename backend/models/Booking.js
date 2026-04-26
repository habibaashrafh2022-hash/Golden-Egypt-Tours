import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true
    },

    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tenant",
      required: true
    },

    peopleCount: {
      type: Number,
      required: true,
      min: 1
    },

    basePrice: {
      type: Number,
      required: true
    },

    finalPrice: {
      type: Number,
      required: true
    },

    discountPercent: {
      type: Number,
      default: 0
    },

    aiPricingMeta: {
      type: Object
    },

    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);