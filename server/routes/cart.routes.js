module.exports = (app) => {
  const router = require("express").Router();
  const cartController = require("../controllers/cart.controller");

  router.get("/:user_id", cartController.get);

  router.post("/", cartController.create);

  router.delete("/:id", cartController.delete);

  app.use("/api/cart", router);
};
