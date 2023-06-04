const express = require("express");
const app = express();
app.use(express.json());
const userRoutes = require("./routes/user.routes");
const connectToDB = require("./db/db.config");

// Call the connection function
connectToDB();

// Use user routes
app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
