const express = require("express");
const {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/students.controller");
const router = express.Router();

router.post("/create", createStudent);

router.get("/get", getStudents);

router.put("/update/:id", updateStudent);

// this route is for the end point like that /delete?id=12345
router.delete("/delete", deleteStudent);

// this route is for the end point like that /delete/12345
// router.delete("/delete/:id", deleteStudent);

module.exports = router;
