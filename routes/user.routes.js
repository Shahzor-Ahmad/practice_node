// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const { createUser, loginUser } = require("../controllers/user.controller");

// Route for creating a new user
router.post("/create", createUser);

// Route for login
router.post("/login", loginUser);

module.exports = router;
