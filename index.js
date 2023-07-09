require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const studentRoutes = require("./routes/students.routes");
const productRoutes = require("./routes/product.routes");
const PORT = process.env.PORT || 5000;
const connectToDB = require("./db/db.config");

// Call the connection function
connectToDB();

// Enable CORS for all routes
app.use(cors());

// Use all routes
app.use(userRoutes, studentRoutes, productRoutes);

// saying hello on the browser
app.get("/", (req, res) => {
  res.send(
    `Hello developers ---> Server is running on port ${PORT} ---> Happy Coding`
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
