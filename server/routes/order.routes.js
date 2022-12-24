module.exports = (app) => {
  const router = require("express").Router();
  const orderController = require("../controllers/order.controller");

  router.get("/", orderController.get);

  router.post("/", orderController.create);

  router.delete("/:id", orderController.delete);

  app.use("api/order");
};
