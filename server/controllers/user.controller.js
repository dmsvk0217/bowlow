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

exports.login = () => {};

exports.logout = () => {};

exports.auth = () => {};
