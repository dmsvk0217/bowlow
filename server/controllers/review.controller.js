const Review = require("../models/review.model");

exports.get = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  Review.get((err, data) => {
    if (err)
      res.status(500).json(data || "Some error occured while getting review");
    res.json(data);
  });
};

exports.findOne = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const id = req.params.id;

  Review.findOne(id, (err, data) => {
    if (err)
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Review with id ${req.params.id}.`,
          findOneReviewSuccess: false,
        });
      } else {
        res.status(500).send({
          message: "Could not findOne Review with id " + id,
          findOneReviewSuccess: false,
        });
      }
    res.json(data);
  });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
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

  Review.create(review, (err, data) => {
    if (err)
      res.status(500).json(data || "Some error occured while creating review");
    res.json(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
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
      res.status(500).json(data || "Some error occured while updating review");
    res.json(data);
  });
};

exports.delete = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const id = req.params.id;
  Review.delete(id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found list with id ${req.params.id}.`,
          deleteReviewSuccess: false,
        });
      } else {
        res.status(500).send({
          message: "Could not delete review with name " + name,
          deleteReviewSuccess: false,
        });
      }
    } else res.send({ deleteReviewSuccess: true });
  });
};
