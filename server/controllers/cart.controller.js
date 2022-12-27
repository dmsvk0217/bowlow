const Cart = require("../models/cart.model");

exports.get = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  Cart.get((err, data) => {
    if (err)
      res.statue(500).json(data || "Some error occured while getting Cart");
    res.json(data);
  });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  //uuid 생성?
  const cart = new Cart({
    id: cart.id,
    user_id: cart.user_id,
    product_id: cart.product_id,
    quantity: cart.quantity,
  });

  Cart.create(cart, (err, data) => {
    if (err)
      res.statue(500).json(data || "Some error occured while creating Cart");
    res.json(data);
  });
};

exports.delete = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const id = req.params.id;

  Cart.delete(id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found list with id ${req.params.id}.`,
          deleteCartSuccess: false,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Cart with id " + id,
          deleteCartSuccess: false,
        });
      }
    } else res.send({ deleteCartSuccess: true });
  });
};
