const mongoose = require("mongoose");

module.exports = function () {
  const db =
    "mongodb+srv://shahzorahmad90:shahzor123@cluster0.rirci3a.mongodb.net/";

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
