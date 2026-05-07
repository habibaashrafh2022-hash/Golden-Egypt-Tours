import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  // معلومات العميل الأساسية
  user: {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: 1,
      max: 150
    },
    nationality: {
      type: String,
      required: [true, "Nationality is required"],
      trim: true
    },
    whatsapp: {
      type: String,
      required: [true, "WhatsApp number is required"],
      trim: true
    }
  },

  // معلومات الجولة
  tour: {
    tourId: {
      type: String,
      required: true
    },
    tourName: String,
    price: Number
  },

  // تفاصيل البوكينج
  bookingDetails: {
    date: {
      type: Date,
      required: [true, "Booking date is required"]
    },
    numberOfGuests: {
      type: Number,
      required: [true, "Number of guests is required"],
      min: 1
    },
    tourLanguage: {
      type: String,
      enum: ["English", "Spanish", "French", "Italian", "German", "Portuguese", "Chinese", "Dutch", "Japanese", "Arabic"],
      required: [true, "Tour language is required"]
    }
  },

  // مكان البيك أب والدروب أوف
  locations: {
    pickupLocation: {
      type: String,
      required: [true, "Pickup location is required"],
      enum: [
        "Cairo",
        "Giza",
        "Luxor",
        "Aswan",
        "Hurghada",
        "Sharm El Sheikh",
        "Alexandria",
        "New Cairo",
        "Heliopolis",
        "6th of October City",
        "Other - Specify"
      ]
    },
    pickupSpecific: String, // إذا اختار Other
    
    dropoffLocation: {
      type: String,
      required: [true, "Dropoff location is required"],
      enum: [
        "Cairo",
        "Giza",
        "Luxor",
        "Aswan",
        "Hurghada",
        "Sharm El Sheikh",
        "Alexandria",
        "New Cairo",
        "Heliopolis",
        "6th of October City",
        "Hotel",
        "Other - Specify"
      ]
    },
    dropoffSpecific: String, // إذا اختار Other
    hotelName: String, // إذا اختار Hotel
    hotelAddress: String
  },

  // معلومات إضافية
  specialRequests: {
    type: String,
    default: ""
  },

  // السعر والدفع
  totalPrice: {
    type: Number,
    required: true
  },
  
  paymentStatus: {
    type: String,
    enum: ["pending", "completed", "cancelled"],
    default: "pending"
  },

  bookingStatus: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending"
  },

  // المعلومات الزمنية
  createdAt: {
    type: Date,
    default: Date.now
  },
  
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Booking", BookingSchema);
