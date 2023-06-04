require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const userRoutes = require("./routes/user.routes");
const studentRoutes = require("./routes/students.routes");
const PORT = process.env.PORT || 5000;
const connectToDB = require("./db/db.config");

// Call the connection function
connectToDB();

// Use user routes
app.use("/api/user", userRoutes);
//  Use student routes
app.use("/api/student", studentRoutes);

// saying hello on the browser
app.get("/", (req, res) => {
  res.send(
    `Hello developers ---> Server is running on port ${PORT} ---> Happy Coding`
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
