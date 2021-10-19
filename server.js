// --- External Modules
const express = require("express");
const methodOverride = require("method-override");
const helmet = require("helmet");
require("dotenv").config();

// --- Internal Modules
const reviewsController = require("./controller/reviewsController");

// --- System Variables
const app = express();
const PORT = process.env.PORT;

// --- System Configuration

// Base security and set imgur content security policy
app.use(
  helmet({
    contentSecurityPolicy: false,
    }
  )
);


// Database Connection
require("./config/db.connection");

// Set up ejs
app.set("view engine", "ejs");

// Public directory for styles and scripts
app.use(express.static("public"));

// handle form data
app.use(express.urlencoded({extended: false}));

// override request methods
app.use(methodOverride("_method"));

// --- Default Routes

// Redirect to Reviews Home
app.get("/", function(req, res){
  res.redirect("/foodie");
});

// Reviews page
app.use("/foodie", reviewsController);

// --- Listener
app.listen(PORT, function(){
  console.log(`Listening for requests on port ${PORT}`);
})

