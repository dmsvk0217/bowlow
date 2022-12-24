const User = require("../models/user.model");

exports.register = (req, res) => {
  //validate request check
  if (!req.body) {
    res.status(400).send({
      data: "Content can not be empty!",
    });
  }

  var user = new User({
    id: req.body.id,
    password: req.body.password,
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    email: req.body.email,
  });

  User.register(user, (err, data) => {
    if (err)
      res.state(500).json(data || "Some error occured while registering user");
    res.json(data);
  });
};

exports.login = (req, res) => {
  //validate request check
  if (!req.body) {
    res.status(400).send({
      data: "Content can not be empty!",
    });
  }

  var user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  User.login(user, (err, data) => {
    if (err)
      res.state(500).json(data || "Some error occured while logining user");

    User.generateToken(user, (err, result) => {
      if (err)
        res.state(500).json(data || "Some error occured while logining user");

      res.cookie("x_auth", user.token).status(200).json(data);
    });
  });
};

exports.logout = () => {};

exports.auth = (req, res) => {
  //여기까지 왔다면 인증이 완료된 것임.
  res.json({ isAuth: true, email: req.user.email });
};
