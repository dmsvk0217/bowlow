module.exports = (app) => {
  const router = require("express").Router();
  const orderController = require("../controllers/order.controller");
  const auth = require("../middleware/auth");

  router.get("/", orderController.get);

  router.post("/", auth, orderController.create);

  router.delete("/:id", orderController.delete);

  app.use("/api/order", router);
};
