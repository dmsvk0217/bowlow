module.exports = (app) => {
  const router = require("express").Router();
  const reviewController = require("../controllers/review.controller");

  router.get("/", reviewController.get);

  router.get("/:id", reviewController.findOne);

  router.post("/", reviewController.create);

  router.put("/:id", reviewController.update);

  router.delete("/:id", reviewController.delete);

  app.use("api/review");
};
