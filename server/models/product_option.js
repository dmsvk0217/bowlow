const db = require("./db");

const Product_option = function (product_option) {
  this.id = product_option.id;
  this.product_id = product_option.product_id;
  this.color = product_option.color;
  this.size = product_option.size;
  this.quantitiy = product_option.quantitiy;
};

module.exports = Product_option;
