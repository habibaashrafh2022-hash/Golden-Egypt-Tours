import mongoose from "mongoose";

const tenantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    plan: {
      type: String,
      enum: ["basic", "pro", "enterprise"],
      default: "basic",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tenant", tenantSchema);