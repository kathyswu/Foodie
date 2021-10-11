// require mongoose
const mongoose = require("mongoose");

// mongoose variables
const MONGOOSE_URI = "mongodb://localhost:27017/foodie";

mongoose.connect(MONGOOSE_URI);

// connection messages
mongoose.connection.on("connected", function() {
  console.log("MongoDB connected ... 🟢");
});

mongoose.connection.on("error", function() {
  console.log("MongoDB connection error ... 🟡");
});

mongoose.connection.on("disconnected", function() {
  console.log("MongoDB disconnected ... ❌");
});