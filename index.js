const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

const db =
  "mongodb+srv://shahzorahmad90:shahzor123@cluster0.rirci3a.mongodb.net/node_practice";

mongoose.set("strictQuery", false);

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", function () {
  console.log("Mongoose connected to: " + db);
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose connected error: " + err);
});

mongoose.connection.on("Disconnected", function () {
  console.log("Mongoose Disconnected");
});

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
