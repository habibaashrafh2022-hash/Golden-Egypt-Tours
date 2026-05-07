import express from "express";
import {
  getAllCities,
  getCityBySlug,
  getToursByCity,
} from "../controllers/cityController.js";

const router = express.Router();

router.get("/", getAllCities);
router.get("/:slug", getCityBySlug);
router.get("/:slug/tours", getToursByCity);

export default router;