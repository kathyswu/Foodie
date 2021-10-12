// External Modules
const express = require("express");

// Internal Modules
const reviewsController = require("./controller/reviewsController");

// Database Connection
require("./config/db.connection");

// System Variables
const app = express();
const PORT = 4000;

// System Configuration

// use ejs
app.set("view engine", "ejs");

// public directory for styles and scripts
app.use(express.static("public"));

// Default Routes

// Redirect to Reviews Home
app.get("/", function(req, res){
  res.redirect("/foodie");
});

// // Home
// app.get("/foodie", function(req, res){
//   res.render("index");
// });

// Reviews page
app.use("/foodie", reviewsController);



// listener
app.listen(PORT, function(){
  console.log(`Listening for requests on port ${PORT}`);
})

