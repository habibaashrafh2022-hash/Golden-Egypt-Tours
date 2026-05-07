import express from "express";
import Tour from "../models/Tour.js";

const router = express.Router();

// GET /api/tours
router.get("/", async (req, res) => {
  try {
    const { city, search, sort, page = 1, limit = 10 } = req.query;
    let query = {};

    if (city) query.city = city;
    if (search) query.title = { $regex: search, $options: "i" };

    let tours = Tour.find(query);

    if (sort === "price_low") tours = tours.sort({ "price.discounted": 1 });
    if (sort === "price_high") tours = tours.sort({ "price.discounted": -1 });

    const total = await Tour.countDocuments(query);
    const data = await tours.skip((page - 1) * limit).limit(Number(limit));

    res.json({ success: true, total, page: Number(page), limit: Number(limit), data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/tours/:id
router.get("/:id", async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id).populate("city");
    if (!tour) return res.status(404).json({ success: false, message: "Tour not found" });
    res.json({ success: true, data: tour });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;