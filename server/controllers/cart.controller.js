const Cart = require("../models/cart.model");
const User = require("../models/user.model");

exports.get = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const user_id = req.params.user_id;

  Cart.get(user_id, (err, data) => {
    if (err)
      res.statue(500).json(data || "Some error occured while getting Cart");
    res.json(data);
  });
};

exports.create = (req, res) => {
  console.log("🚀 ~ file: cart.controller.js:16 ~ reqbody", req.body);
  if (!req.body) {
    return res.status(400).send({ data: "Content can not be empty" });
  }

  //uuid 생성?
  const cart = new Cart({
    user_id: req.body.user_id,
    product_id: req.body.product_id,
    quantity: req.body.quantity,
    date: req.body.date,
  });
  console.log("🚀 ~ file: cart.controller.js:27 ~ cart", cart);

  Cart.create(cart, (err, data) => {
    if (err)
      return res
        .status(500)
        .json(data || "Some error occured while creating Cart");
    return res.json(data);
  });
};

exports.delete = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const cart_id = req.params.id;
  console.log(
    "🚀 ~ file: cart.controller.js:47 ~ exports.delete ~ cart_id",
    cart_id
  );

  Cart.delete(cart_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(404).send({
          message: `Not found list with id ${req.params.cart_id}.`,
          deleteCartSuccess: false,
        });
      } else {
        return res.status(500).send({
          message: "Could not delete Cart with cart_id " + cart_id,
          deleteCartSuccess: false,
        });
      }
    } else {
      return res.send({ deleteCartSuccess: true });
    }
  });
};
