const sql = require("./db");

const Review = function (review) {
  this.user_id = review.user_id;
  this.product_id = review.product_id;
  this.score = review.score;
  this.content = review.content;
  this.like_count = review.like_count;
  this.date = review.date;
  this.image = review.image;
};
