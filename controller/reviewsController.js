const express = require("express");

const router = express.Router();
const { Review } = require("../models");

// base url === /foodie

//Index route
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

//Show route
router.get("/:id", function (req, res, next){
  Review.findById(req.params.id, function(error, foundReview){
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }
    const context = {
      reviews: foundReview,
    };
    res.render("show", context);
    }
  )
});


//New
router.get("/new", function(req, res){
  
});

//Create
router.post("/", function(req, res, next) {
  res.send({
    message: "Create new review",
    body: req.body,
  });
})



//Edit route FIXME fix route on nav href links
router.get("/:id/edit", function(req, res, next){
  Review.findById(req.params.id, function (error, foundReview){
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }
    const context = {
      reviews: foundReview,
    }
    res.render("edit", context);
  })
});


//Update
router.put("/:id");

//Delete route
router.delete("/:id", function (req, res, next){
  Review.findByIdAndDelete(req.params.id, function (error, deletedReview) {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }
    return res.redirect("/foodie");
  })
});


//4. export router
module.exports = router;

