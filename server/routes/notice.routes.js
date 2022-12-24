module.exports = (app) => {
  const router = require("express").Router();
  const noticeController = require("../controllers/notice.controller");

  router.get("/", noticeController.get);

  router.get("/:id", noticeController.findOne);

  router.post("/", noticeController.create);

  router.put("/:id", noticeController.update);

  router.delete("/:id", noticeController.delete);

  app.use("api/notice");
};
