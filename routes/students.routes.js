const express = require("express");
const {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/students.controller");
const router = express.Router();

router.post("/api/student/create", createStudent);

router.get("/api/student/get", getStudents);

router.put("/api/student/update/:id", updateStudent);

// this route is for the end point like that /delete?id=12345
router.delete("/api/student/delete", deleteStudent);

// this route is for the end point like that /delete/12345
// router.delete("/delete/:id", deleteStudent);

module.exports = router;
