const db = require("./db");

const Order = function (order) {
  this.id = order.id;
  this.user_id = order.user_id;
  this.product_id = order.product_id;
  this.quantity = order.quantity;
  this.date = order.date;
};

Order.get = (order, cb) => {
  let sql = "SELECT * FROM order ";

  db.query(sql, (err, result) => {
    console.log("🚀 ~ file: Order.model.js:14 ~ db.query ~ result", result);
    if (err) return cb(err, null);
    return cb(null, result);
  });
};

Order.create = (order, cb) => {
  const sql = "insert into Order set ?";
  db.query(sql, order, (err, result) => {
    console.log("🚀 ~ file: Order.model.js:23 ~ db.query ~ result", result);
    if (err) return cb(err);
    return cb(null, { crateOrderSuccess: true });
  });
};

Order.delete = (id, cb) => {
  const sql = "DELETE FROM Orders WHERE id = ?";
  db.query(sql, id, (err, result) => {
    console.log("🚀 ~ file: Order.model.js:32 ~ db.query ~ result", result);
    if (err) return cb(err);
    if (result.affectedRows == 0) {
      return cb({ kind: "not_found" }, null);
    }
    console.log("deleted Order with id: ", id);
    result(null, result);
  });
};

module.exports = Order;
