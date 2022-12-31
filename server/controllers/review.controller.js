const Product = require("../models/product.model");
const Review = require("../models/review.model");

exports.get = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ data: "Content can not be empty" });
  }

  Review.get((err, data) => {
    if (err)
      return res
        .status(500)
        .json(data || "Some error occured while getting review");
    return res.json(data);
  });
};

exports.findOne = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ data: "Content can not be empty" });
  }

  const id = req.params.id;

  Review.findOne(id, (err, data) => {
    if (err)
      if (err.kind === "not_found") {
        return res.status(404).send({
          message: `Not found Review with id ${req.params.id}.`,
          findOneReviewSuccess: false,
        });
      } else {
        return res.status(500).send({
          message: "Could not findOne Review with id " + id,
          findOneReviewSuccess: false,
        });
      }
    return res.json(data);
  });
};

exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ data: "Content can not be empty" });
  }
  //리뷰 만들고, product의 리뷰개수 +1 및 리뷰 평점 계산

  const review = new Review({
    user_id: req.user.id,
    product_id: req.body.product_id,
    score: req.body.score,
    review_content: req.body.content,
    review_date: req.body.date,
    image: req.body.image,
    like_count: 0,
    isBest: 0,
  });
  const review_avg_score = req.body.review_avg_score;
  const product_id = req.body.product_id;
  const score = req.body.score;
  const review_count = req.body.review_count;

  // console.log("🚀 ~ file: review.controller.js:54 ~ review", review);

  Review.create(review, (err, data) => {
    if (err)
      return res
        .status(500)
        .json(data || "Some error occured while creating review");
    Product.createReview(
      product_id,
      review_count,
      review_avg_score,
      score,
      (err, result) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
      }
    );
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ data: "Content can not be empty" });
  }

  const review = new Review({
    id: req.body.id,
    user_id: req.body.user_id,
    product_id: req.body.product_id,
    score: req.body.score,
    content: req.body.content,
    like_count: req.body.like_count,
    date: req.body.date,
    image: req.body.image,
  });

  Review.update(review, (err, data) => {
    if (err)
      return res
        .status(500)
        .json(data || "Some error occured while updating review");
    return res.json(data);
  });
};

exports.delete = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ data: "Content can not be empty" });
  }

  const id = req.params.id;
  Review.delete(id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(404).send({
          message: `Not found list with id ${req.params.id}.`,
          deleteReviewSuccess: false,
        });
      } else {
        return res.status(500).send({
          message: "Could not delete review with name " + name,
          deleteReviewSuccess: false,
        });
      }
    } else return res.send({ deleteReviewSuccess: true });
  });
};
