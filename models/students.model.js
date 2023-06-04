const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    interestedInSports: {
      type: Boolean,
      required: true,
    },
  },
  { collection: "students" }
);

module.exports = {
  studentSchema: mongoose.model("studentSchema", studentSchema),
};
