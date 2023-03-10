const User = require("../models/user.model");

exports.register = (req, res) => {
  //validate request check
  if (!req.body) {
    res.status(400).send({
      data: "Content can not be empty!",
    });
  }
  var user = new User({
    password: req.body.password,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    cart_count: 0,
    auth: 0,
  });

  User.register(user, (err, data) => {
    if (err)
      res.status(500).json(data || "Some error occured while register user");
    res.json(data);
  });
};

exports.login = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      data: "Content can not be empty!",
    });
  }

  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  User.login(user, (err, data) => {
    // user 객체가 변경되지 않음.
    if (err == "exist_false") return res.json(data);
    if (err == "wrong_password") return res.json(data);
    if (err)
      return res
        .status(500)
        .json(data || "Some error occured while login user");

    User.generateToken(user.email, (err, token) => {
      if (err)
        return res
          .status(500)
          .json(data || "Some error occured while login user");

      res.cookie("x_auth", token).status(200).json(data);
    });
  });
};

exports.logout = (req, res) => {
  const user = req.user;
  User.logout(user, (err, data) => {
    if (err)
      res.status(500).json(data || "Some error occured while logout user");
    res.json(data);
  });
};

exports.auth = (req, res) => {
  // console.log("🚀 ~ file: user.controller.js:86 ~ req.user", req.user);
  //여기까지 왔다면 인증이 완료된 것임.
  res.json({ isAuth: true, user: req.user });
};

exports.cartCount = (req, res) => {
  const user = req.user;
  const type = req.body.type;
  console.log(
    "🚀 ~ file: user.controller.js:92 ~ req.body.type",
    req.body.type
  );

  User.cartCount(type, user, (err, data) => {
    if (err)
      return res
        .status(500)
        .json(data || "Some error occured while user cartCount");
    return res.json(data);
  });
};
