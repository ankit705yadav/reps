const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createworkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//middleware to verify auth for every api request
router.use(requireAuth);

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
