const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = new Schema (
  {
      restaurant: {
        type: String,
        required: true,
        minlength: 2,
      },
      rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
      },
      image: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now(),
        required: true,
      }
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;