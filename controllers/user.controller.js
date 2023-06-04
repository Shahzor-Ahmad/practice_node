const express = require("express");
const app = express();
app.use(express.json());
const jwt = require("jsonwebtoken");
const { userSignUpSchema, userLoginSchema } = require("../models/user.model");

// api to create the user
const createUser = (req, res) => {
  const { name, email, password, userType } = req.body;

  // Check if the email already exists in the database
  userSignUpSchema
    .findOne({ email })
    .then((existingUser) => {
      if (existingUser) {
        // Email already exists
        res.status(409).json({ error: "This user already exists" });
      } else {
        // Create a new user
        const newUser = new userSignUpSchema({
          name,
          email,
          password,
          userType,
        });

        newUser
          .save()
          .then(() => {
            res.json({ message: "User created successfully" });
          })
          .catch((error) => {
            console.error("Error creating user:", error);
            res.status(500).json({ error: "User creation failed" });
          });
      }
    })
    .catch((error) => {
      console.error("Error checking existing user:", error);
      res.status(500).json({ error: "User creation failed" });
    });
};

// Secret key for JWT
const secretKey = "shahzor-secret-key";
const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Find the user with the given email and password
  userLoginSchema
    .findOne({ email, password })
    .then((user) => {
      if (user) {
        // User found, login successful
        const token = jwt.sign({ id: user._id }, secretKey);
        res.json({ message: "Login successful", token });
      } else {
        // User not found or password incorrect
        res.status(401).json({ error: "Invalid email or password" });
      }
    })
    .catch((error) => {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Login failed" });
    });
};

module.exports = { createUser, loginUser };
