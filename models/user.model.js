const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// Create a schema for your data
const userSignUpSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

const userLoginSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

userSignUpSchema.pre("save", function (next) {
  const user = this;

  // it represents the number of rounds used to generate the salt
  const rounds = 10;
  bcrypt.genSalt(rounds, function (err, salt) {
    if (err) return next(err);

    // Hash the password with the generated salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // Replace the plain-text password with the hashed password
      user.password = hash;
      next();
    });
  });
});

module.exports = {
  userSignUpSchema: mongoose.model("userSignUpSchema", userSignUpSchema),
  userLoginSchema: mongoose.model("userLoginSchema", userLoginSchema),
};
