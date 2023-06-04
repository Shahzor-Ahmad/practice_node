const express = require("express");
const app = express();
app.use(express.json());
const bcrypt = require("bcrypt");
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

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await userLoginSchema.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    // Password is correct, generate and sign a JWT
    const token = jwt.sign({ id: user._id }, secretKey, {
      expiresIn: "1h",
    });

    // Return the token as a response
    return res.json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createUser, loginUser };
