const Order = require("../models/order.model");

exports.get = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  Order.get((err, data) => {
    if (err)
      res.state(500).json(data || "Some error occured while getting Order");
    res.json(data);
  });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  //uuid 생성?
  const order = new Order({
    id: order.id,
    user_id: order.user_id,
    product_id: order.product_id,
    quantity: order.quantity,
    date: order.date,
  });

  Order.create(order, (err, data) => {
    if (err)
      res.state(500).json(data || "Some error occured while creating Order");
    res.json(data);
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
