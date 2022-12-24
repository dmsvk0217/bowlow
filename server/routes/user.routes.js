const { auth } = require("../middleware/auth");

module.exports = (app) => {
  const userController = require("../controllers/user.controller");

  var router = require("express").Router();

  router.post("/register", userController.register);

  router.post("/login", userController.login);

  router.post("/logout", auth, userController.logout);

  router.post("/auth", auth, userController.auth);

  router.post("/cartCount", auth, userController.cartCount);

  app.use("/api/user", router);
};
