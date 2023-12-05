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

//CUSTOM static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All of the fields must be filled");
  }
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("No such email is registered");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Wrong password");
  }

  return user;
};

module.exports = mongoose.model("userModel", userSchema);
