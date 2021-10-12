const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = new Schema (
  {
      restaurant: {
        type: String,
        required: [true, "You must provide the restaurant name"],
        minlength: [1,"The restaurant name must be greater than 1 character"],
      },
      rating: {
        type: Number,
        required: [true, "Please provide a rating between 0 and 5 stars"],
        min: 0,
        max: 5,
      },
      content: {
        type: String,
        required: [true, "You must provide at least a reasoning for your review"],
        minlength: [5,"The review must be greater than one word"],
      },
      image: {
        type: String,
        required: [true, "Please provide a picture of your meal"],
      },
      date: {
        type: Date,
        default: Date.now(),
      },
      location: {
        type: String,
        required: [true, "Please provide the location of the restaurant"],
      },
      tags: {
        type: [String],
        minLength: [3, "Tag must be 3 characters long"],
        
      }
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;