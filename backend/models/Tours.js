import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  title: String,
  city: String,
  description: String,
  images: [String],

  basePrice: Number,

  tenantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tenant",
    required: true
  }
});

export default mongoose.model("Tour", tourSchema);