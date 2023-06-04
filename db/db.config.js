require("dotenv").config();
const mongoose = require("mongoose");

module.exports = function () {
  const db = process.env.DB_CONNECTION_STRING;

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
};
