require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");

//express app
const app = express();

//MiddleWare To get hold of req object(like bodyParser)
app.use(express.json());

//MiddleWare / log on eact api request
app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods", "POST, GET, PATCH,DEL");
  // res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  console.log(req.path, req.method);
  next();
});

//routes to react to request
// app.get()
// app.post()
// app.delete()
// "/api/workouts" custom path for api
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

//db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// export default app;
