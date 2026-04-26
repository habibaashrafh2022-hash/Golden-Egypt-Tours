const express = require("express");
const router = express.Router();
const tours = require("../data/tours");

// GET all tours
router.get("/", (req, res) => {
  res.json(tours);
});

module.exports = router;