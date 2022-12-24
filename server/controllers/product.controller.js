const Product = require("../models/product.model");
const Product_option = require("../models/product_option");

exports.getProduct = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const product = new Product({
    type: req.body.type,
    category1: req.body.category1,
    category2: req.body.category2,
  });

  Product.getProduct(product, (err, data) => {
    if (err)
      res.state(500).json(data || "Some error occured while getProduct user");
    res.json(data);
  });
};
