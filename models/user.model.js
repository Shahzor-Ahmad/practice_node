const mongoose = require("mongoose");
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

module.exports = {
  userSignUpSchema: mongoose.model("userSignUpSchema", userSignUpSchema),
  userLoginSchema: mongoose.model("userLoginSchema", userLoginSchema),
};
