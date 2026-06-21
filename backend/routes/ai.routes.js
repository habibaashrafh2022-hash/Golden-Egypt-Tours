import express from "express";
import { generateTripPlan } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/trip-plan", generateTripPlan);

export default router;