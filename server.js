// External Modules
const mongoose = require("mongoose");
const express = require("express");

// Internal Modules
require("./config/db.connection");

// System Variables
const app = express();
const PORT = 4000;

// System Configuration

// use ejs
app.set("view engine", "ejs");

// Default Routes

// Redirect to Home
app.get("/", function(req, res){
  res.redirect("/foodie");
});

// Home
app.get("/foodie", function(req, res){
  res.send("This is the home page");
});



// listener
app.listen(PORT, function(){
  console.log(`Listening for requests on port ${PORT}`);
})

