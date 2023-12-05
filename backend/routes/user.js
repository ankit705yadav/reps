const express = require("express");
const { loginUser, registerUser } = require("../controllers/userController");

const userRouter = express.Router();

//login
userRouter.post("/login", loginUser);

//register
userRouter.post("/register", registerUser);

module.exports = userRouter;
