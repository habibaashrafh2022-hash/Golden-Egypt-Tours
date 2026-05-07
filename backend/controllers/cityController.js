import City from "../models/City.js";
import Tour from "../models/Tour.js";

// GET /api/cities
export const getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.json({ success: true, data: cities });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/cities/:slug
export const getCityBySlug = async (req, res) => {
  try {
    const city = await City.findOne({ slug: req.params.slug });
    if (!city) {
      return res.status(404).json({ success: false, message: "City not found" });
    }
    res.json({ success: true, data: city });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/cities/:slug/tours
export const getToursByCity = async (req, res) => {
  try {
    const city = await City.findOne({ slug: req.params.slug });
    if (!city) {
      return res.status(404).json({ success: false, message: "City not found" });
    }
    const tours = await Tour.find({ city: city._id });
    res.json({ success: true, data: tours });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};