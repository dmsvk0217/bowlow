const sql = require("./db");

const Order = function (order) {
  this.id = order.id;
  this.user_id = order.user_id;
  this.product_id = order.product_id;
  this.quantity = order.quantity;
  this.date = order.date;
};
