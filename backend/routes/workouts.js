const express = require("express");

const router = express.Router();

//Get all workoutes
router.get("/", (req, res) => {
  res.json({ message: "Get all workoutes" });
});

//Get single workout
router.get("/:id", (req, res) => {
  res.json({ message: "Get a single workout" });
});

//Post a new workout
router.post("/", (req, res) => {
  res.json({ message: "Post a new workout" });
});

//Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a workout" });
});

//Update a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a workout" });
});

module.exports = router;
