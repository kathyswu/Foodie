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
  res.render("new");
});

//Create
router.post("/", function(req, res, next) {
  Review.create(req.body, function (error, newReview){
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }
    console.log(newReview);
    res.redirect("/foodie");
  })
});



//Edit route
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


//Update route
router.put("/:id", function (req, res, next){
  Review.findByIdAndUpdate(req.params.id, req.body, {new:true},
    function (error, foundReview){
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }
    const context = {
      reviews: foundReview,
    }
    res.redirect(`/foodie/${req.params.id}`);
  })
});

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

