const Product = require("../models/product.model");
const Product_option = require("../models/product_option");

exports.get = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ data: "Content can not be empty" });
  }

  const type = req.params.type;
  console.log("🚀 ~ file: product.controller.js:10 ~ type", type);

  Product.get(type, (err, data) => {
    if (err)
      return res
        .status(500)
        .json(data || "Some error occured while getting Product");
    return res.json(data);
  });
};

exports.findOne = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ data: "Content can not be empty" });
  }

  const id = req.params.id;

  Product.findOne(id, (err, data) => {
    if (err)
      if (err.kind === "not_found") {
        return res.status(404).send({
          message: `Not found product with id ${req.params.id}.`,
          findOneProductSuccess: false,
        });
      } else {
        return res.status(500).send({
          message: "Could not findOne product with id " + id,
          findOneProductSuccess: false,
        });
      }
    return res.json(data);
  });
};

exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ data: "Content can not be empty" });
  }

  const product = new Product({
    product_name: req.body.name,
    price: req.body.price,
    product_content: req.body.content,
    product_image: req.body.image,
    type: req.body.type,
    category1: req.body.category1,
    category2: req.body.category2,
    product_date: req.body.date,
  });

  Product.create(product, (err, data) => {
    if (err)
      return res
        .status(500)
        .json(data || "Some error occured while creating Product");
    return res.json(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ data: "Content can not be empty" });
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
      return res
        .status(500)
        .json(data || "Some error occured while updating product");
    return res.json(data);
  });
};

exports.delete = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ data: "Content can not be empty" });
  }

  const id = req.params.id;
  Product.delete(id, (err, data) => {
    if (err.kind === "not_found") {
      return res.status(404).send({
        message: `Not found list with id ${req.params.id}.`,
        deleteProductSuccess: false,
      });
    }
    if (err) {
      return res.status(500).send({
        message: "Could not delete product with id " + id,
        deleteProductSuccess: false,
      });
    }
    return res.send({ deleteProductSuccess: true });
  });
};
