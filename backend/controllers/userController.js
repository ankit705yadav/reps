const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const genToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "1" });
};

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.login(email, password);

    //create token
    const token = genToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  // res.json({ msg: "LOGIN_USER" });
};

//register
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.register(email, password);

    //create token
    const token = genToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, registerUser };
