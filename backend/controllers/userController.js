const userModel = require("../models/userModel");

//login
const loginUser = async (req, res) => {
  res.json({ msg: "LOGIN_USER" });
};

//register
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.register(email, password);
    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.json({ msg: "REGisTER_USER" });
};

module.exports = { loginUser, registerUser };
