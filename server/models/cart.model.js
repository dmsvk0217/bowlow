const sql = require("./db");

const Cart = function (cart) {
  this.user_id = cart.user_id;
  this.product_id = cart.product_id;
  this.product_option_id = cart.product_option_id;
  this.quantity = cart.quantity;
};