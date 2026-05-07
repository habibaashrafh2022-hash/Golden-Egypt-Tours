import mongoose from "mongoose";

const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    nameAr: {
      type: String,
      required: true,
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
    image: {
      type: String,
    },
    country: {
      type: String,
      default: "Egypt",
    },
  },
  { timestamps: true }
);

export default mongoose.model("City", citySchema);