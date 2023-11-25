require("dotenv").config();
const express = require("express");

//express app
const app = express();

//midleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
