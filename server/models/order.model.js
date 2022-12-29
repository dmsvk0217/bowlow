const db = require("./db");

const Order = function (order) {
  this.id = order.id;
  this.user_id = order.user_id;
  this.product_id = order.product_id;
  this.user_name = order.user_name;
  this.quantity = order.quantity;
  this.date = order.date;
  this.phone = order.phone;
  this.addressNumber = order.addressNumber;
  this.address = order.address;
  this.addressDetail = order.addressDetail;
  this.email = order.email;
};

Order.get = (cb) => {
  let sql = "SELECT * FROM orders ";

  db.query(sql, (err, result) => {
    console.log("🚀 ~ file: Order.model.js:14 ~ db.query ~ result", result);
    if (err) return cb(err, null);
    return cb(null, result);
  });
};

Order.create = (order, cb) => {
  var order = order.map(Object.values);
  console.log("🚀 ~ file: order.model.js:40 ~ order", order);
  const sql =
    "insert into orders (name, user_id, product_id, quantity, date, phone, addressNumber, address, addressDetail, email) values ?";
  db.query(sql, [order], (err, result) => {
    console.log("🚀 ~ file: order.model.js:25 ~ db.query ~ err", err);
    console.log("🚀 ~ file: Order.model.js:23 ~ db.query ~ result", result);
    if (err) return cb(err);
    return cb(null, { crateOrderSuccess: true });
  });
};
Order.delete = (id, cb) => {
  const sql = "DELETE FROM orders WHERE id = ?";
  db.query(sql, id, (err, result) => {
    console.log("🚀 ~ file: Order.model.js:32 ~ db.query ~ result", result);
    if (err) return cb(err);
    if (result.affectedRows == 0) {
      return cb({ kind: "not_found" }, null);
    }
    console.log("deleted Order with id: ", id);
    return cb(null, result);
  });
};

module.exports = Order;
