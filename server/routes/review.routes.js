module.exports = (app) => {
  const router = require("express").Router();
  const reviewController = require("../controllers/review.controller");
  const auth = require("../middleware/auth");

  router.get("/", auth, reviewController.get);

  router.get("/:id", reviewController.findOne);

  router.post("/", auth, reviewController.create);

  router.put("/:id", reviewController.update);

  router.delete("/:id", reviewController.delete);

  app.use("/api/review", router);
};
