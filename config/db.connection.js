// require mongoose
const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);

// connection messages
mongoose.connection.on("connected", function() {
  console.log("MongoDB connected ... 🟢");
});

mongoose.connection.on("error", function(error) {
  console.log("MongoDB connection error ... 🟡", error);
});

mongoose.connection.on("disconnected", function() {
  console.log("MongoDB disconnected ... ❌");
});