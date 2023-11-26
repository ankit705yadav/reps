const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createworkout,
} = require("../controllers/workoutControllers");

const router = express.Router();

//Get all workoutes
router.get("/", getWorkouts);

//Get single workout
router.get("/:id", getWorkout);

//Post a new workout
router.post("/", createworkout);

//Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a workout" });
});

//Update a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a workout" });
});

module.exports = router;
