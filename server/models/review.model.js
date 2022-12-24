const sql = require("./db");

const Review = function (review) {
  this.id = review.id;
  this.user_id = review.user_id;
  this.product_id = review.product_id;
  this.score = review.score;
  this.content = review.content;
  this.like_count = review.like_count;
  this.date = review.date;
  this.image = review.image;
};

Review.get = (review, cb) => {
  const sql = "SELECT * FROM review ";

  db.query(sql, (err, result) => {
    console.log("🚀get ~ file: Review.model.js:36 ~ db.query ~ result", result);
    if (err) return cb(err, null);
    return cb(null, result);
  });
};

Review.create = (review, cb) => {
  const sql = "insert into Rrview set ?";

  db.query(sql, review, (err, result) => {
    console.log(
      "🚀create ~ file: Review.model.js:42 ~ db.query ~ result",
      result
    );
    if (err) return cb(err);
    return cb(null, { crateReviewSuccess: true });
  });
};

Review.update = (review, cb) => {
  const sql = "UPDATE review set ? where id=?";
  const sql_object = [review, review.id];

  db.query(sql, sql_object, (err, result) => {
    console.log(
      "🚀update ~ file: review.model.js:51 ~ db.query ~ result",
      result
    );
    if (err) return cb(err);
    return cb(null, { updateReviewSuccess: true });
  });
};

Review.delete = (id, cb) => {
  const sql = "DELETE FROM reviews WHERE id = ?";
  db.query(sql, id, (err, result) => {
    if (err) return cb(err);
    console.log("🚀 ~ file: review.model.js:61 ~ db.query ~ result", result);

    if (result.affectedRows == 0) {
      return cb({ kind: "not_found" }, null);
    }
    console.log("deleted review with id: ", id);
    result(null, result);
  });
};

module.exports = Review;
