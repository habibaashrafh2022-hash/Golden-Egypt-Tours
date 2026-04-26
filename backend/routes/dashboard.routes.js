import express from "express";
import { getDashboardStats } from "../controllers/dashboard.controller.js";
import { extractTenant } from "../middleware/tenant.js";

const router = express.Router();

// Dashboard stats
router.get("/", extractTenant, getDashboardStats);

export default router;