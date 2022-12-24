module.exports = (app) => {
  const router = require("express").Router();
  const eventController = require("../controllers/event.controller");

  router.get("/", eventController.get);

  router.get("/:id", eventController.findOne);

  router.post("/", eventController.create);

  router.put("/:id", eventController.update);

  router.delete("/:id", eventController.delete);

  app.use("api/event");
};
