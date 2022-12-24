module.exports = (app) => {
  const router = require("express").Router();
  const productController = require("../controllers/product.controller");

  router.get("/", productController.get);

  router.post("/", productController.create);

  router.put("/", productController.update);

  router.delete("/", productController.delete);

  app.use("api/product");
};
