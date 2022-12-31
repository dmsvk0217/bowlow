const Cart = require("../models/cart.model");
const Order = require("../models/order.model");
const User = require("../models/user.model");

exports.get = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const user_id = req.user.id;

  Order.get(user_id, (err, data) => {
    if (err)
      res.status(500).json(data || "Some error occured while getting Order");
    res.json(data);
  });
};

exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ data: "Content can not be empty" });
  }

  const orders = req.body;
  console.log("🚀 ~ file: order.controller.js:25 ~ orders", orders);

  const user_id = req.user.id;

  Order.create(orders, (err, data) => {
    if (err) return res.status(500).json(err);

    //2) cart비우기.
    Cart.deleteAllByUserId(user_id, (err, result) => {
      console.log(
        "🚀 ~ file: order.controller.js:33 ~ Cart.deleteAllByUserId ~ err",
        err
      );
      if (err) return res.status(500).send(err);

      //3) uesr db 장바구니 카운터 0으로 만들기
      User.initCartCount(user_id, (err, result) => {
        console.log(
          "🚀 ~ file: order.controller.js:41 ~ User.initCartCount ~ user_id",
          user_id
        );
        if (err) return res.status(500).send(err);
        return res.json({ crateOrderSuccess: true });
      });
    });
  });
};

exports.delete = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const id = req.params.id;

  Order.delete(id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found list with id ${req.params.id}.`,
          deleteOrderSuccess: false,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Order with id " + id,
          deleteOrderSuccess: false,
        });
      }
    } else res.send({ deleteOrderSuccess: true });
  });
};
