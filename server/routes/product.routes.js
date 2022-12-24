module.exports = (app) => {
  const router = require("express").Router();
  const productController = require("../controllers/product.controller");

  router.get("/", productController.getProduct);

  app.use("api/product");
};
