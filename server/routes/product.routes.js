module.exports = (app) => {
  const productController = require("../controllers/product.controller");

  var router = require("express").Router();

  router.get("/", productController.get);

  router.get("/:id", productController.findOne);

  router.post("/", productController.create);

  router.put("/:id", productController.update);

  router.delete("/:id", productController.delete);

  app.use("/api/product", router);
};
