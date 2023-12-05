const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const schema = mongoose.Schema;

const userSchema = new schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//CUSTOM static register method
userSchema.statics.register = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("All of the fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  //   if (!validator.isStrongPassword(password)) {
  //     throw Error("Bitch ,Please provide stronger password");
  //   }

  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email already in use you bitch");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
};

module.exports = mongoose.model("userModel", userSchema);