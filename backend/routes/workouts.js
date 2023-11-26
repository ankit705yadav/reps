const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createworkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");

const router = express.Router();

//Get all workoutes
router.get("/", getWorkouts);

//Get single workout
router.get("/:id", getWorkout);

//Post a new workout
router.post("/", createworkout);

//Delete a workout
router.delete("/:id", deleteWorkout);

//Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
