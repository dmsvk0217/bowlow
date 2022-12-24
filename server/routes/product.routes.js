module.exports = (app) => {
  const router = require("express").Router();
  const productController = require("../controllers/product.controller");

  router.get("/", productController.get);

  router.get("/:id", productController.findOne);

  router.post("/", productController.create);

  router.put("/:id", productController.update);

  router.delete("/:id", productController.delete);

  app.use("api/product");
};
