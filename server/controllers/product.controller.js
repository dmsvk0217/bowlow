const Product = require("../models/product.model");
const Product_option = require("../models/product_option");

exports.get = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const product = new Product({
    type: req.body.type,
    category1: req.body.category1,
    category2: req.body.category2,
  });

  Product.get(product, (err, data) => {
    if (err)
      res.state(500).json(data || "Some error occured while getting Product");
    res.json(data);
  });
};

exports.findOne = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const id = req.params.id;

  Product.findOne(id, (err, data) => {
    if (err)
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found product with id ${req.params.id}.`,
          findOneProductSuccess: false,
        });
      } else {
        res.status(500).send({
          message: "Could not findOne product with id " + id,
          findOneProductSuccess: false,
        });
      }
    res.json(data);
  });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    content: req.body.content,
    image: req.body.image,
    type: req.body.type,
    category1: req.body.category1,
    category2: req.body.category2,
  });

  Product.create(product, (err, data) => {
    if (err)
      res.state(500).json(data || "Some error occured while creating Product");
    res.json(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    content: req.body.content,
    image: req.body.image,
    type: req.body.type,
    category1: req.body.category1,
    category2: req.body.category2,
  });

  Product.update(product, (err, data) => {
    if (err)
      res.state(500).json(data || "Some error occured while updating product");
    res.json(data);
  });
};

exports.delete = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const id = req.params.id;
  Product.delete(id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found list with id ${req.params.id}.`,
          deleteProductSuccess: false,
        });
      } else {
        res.status(500).send({
          message: "Could not delete product with id " + id,
          deleteProductSuccess: false,
        });
      }
    } else res.send({ deleteProductSuccess: true });
  });
};
