const express = require("express");
const app = express();
app.use(express.json());
const { studentSchema } = require("../models/students.model");

const createStudent = (req, res) => {
  const { firstName, lastName, email, age, gender, city, interestedInSports } =
    req.body;

  studentSchema.findOne({ email }).then((existingStudent) => {
    if (existingStudent) {
      // Email already exists
      res.status(409).json({ error: "This Student already exists" });
    } else {
      const newStudent = new studentSchema({
        firstName,
        lastName,
        email,
        age,
        gender,
        city,
        interestedInSports,
      });

      newStudent
        .save()
        .then(() => {
          res.json({ message: "Student Added Successfully" });
        })
        .catch((error) => {
          console.log("there is error while adding student", error);
          res.status(500).json({ error: "Student Creation Failed" });
        });
    }
  });
};

const getStudents = (req, res) => {
  studentSchema
    .find()
    .then((students) => {
      res.json(students);
    })
    .catch((error) => {
      console.log("Error while Fatching Students", error);
      res.status(500).json({ message: "failed to fetch students" });
    });
};

const updateStudent = (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  const { firstName, lastName, email, age, gender, city, interestedInSports } =
    req.body;
  studentSchema
    .findByIdAndUpdate(
      id,
      { firstName, lastName, email, age, gender, city, interestedInSports },
      { new: true }
    )
    .then((updatedstudent) => {
      if (updatedstudent) {
        res.json(updatedstudent);
      } else {
        res.status(404).json({ error: "Student not fornd" });
      }
    })
    .catch((error) => {
      console.error("Error updating student data:", error);
      res.status(500).json({ error: "Failed to update student data" });
    });
};

const deleteStudent = (req, res) => {
  // for the api like that "/delete?id=12345" use this
  const { id } = req.query;
  // for the endpoint like that "/delete/12345" use this
  // const {id} = req.params;

  studentSchema
    .findByIdAndDelete(id)
    .then((deletedStudent) => {
      if (deletedStudent) {
        console.log("deeleted student", deletedStudent);
        res.json({ message: "Student Deleted Successfully" });
      } else {
        res.status(404).json({ error: "Student not found" });
      }
    })
    .catch((error) => {
      console.log("error while deleting Student", error);
      res.status(404).json({ error: "failed to delete student" });
    });
};

module.exports = { createStudent, getStudents, updateStudent, deleteStudent };
