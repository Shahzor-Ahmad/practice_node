// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const { createUser, loginUser } = require("../controllers/user.controller");

// Route for creating a new user
router.post("/api/user/create", createUser);

// Route for login
router.post("/api/user/login", loginUser);

module.exports = router;
