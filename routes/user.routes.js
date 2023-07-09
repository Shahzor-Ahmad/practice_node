// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  uploadFile,
} = require("../controllers/user.controller");

// Route for creating a new user
router.post("/api/user/create", createUser);

// Route for login
router.post("/api/user/login", loginUser);

router.post("/api/user/upload", uploadFile);

module.exports = router;
