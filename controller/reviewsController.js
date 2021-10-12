const express = require("express");

const router = express.Router();
const { Review } = require("../models");

// base url === /foodie

//get review index
router.get("/", function(req, res, next) {
  Review.find({}, function (error, allReviews) {
    if(error) { 
      console.log(error); 
      req.error = error;
      next();
    }
    const context = {
      reviews: allReviews,
    }
    return res.render("index", context);
  })
});

//post review create
router.post("/", function(req, res, next) {
  res.send({
    message: "Create new review",
    body: req.body,
  });
})

//4. export router
module.exports = router;

