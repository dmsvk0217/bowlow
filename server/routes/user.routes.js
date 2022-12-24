module.exports = (app) => {
  const userController = require("../controllers/user.controller");

  var router = require("express").Router();

  router.post("/register", userController.register);

  router.post("/login", userController.login);

  router.post("/logout", userController.logout);

  router.post("/auth", auth, userController.auth);

  app.use("/api/user/", router);
};
