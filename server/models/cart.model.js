const db = require("./db");

const Cart = function (cart) {
  this.id = cart.id;
  this.user_id = cart.user_id;
  this.product_id = cart.product_id;
  this.quantity = cart.quantity;
};

Cart.get = (cart, cb) => {
  let sql = "SELECT * FROM Cart ";

  db.query(sql, (err, result) => {
    console.log("🚀 ~ file: cart.model.js:14 ~ db.query ~ result", result);
    if (err) return cb(err, null);
    return cb(null, result);
  });
};

Cart.create = (cart, cb) => {
  const sql = "insert into Cart set ?";
  db.query(sql, cart, (err, result) => {
    console.log("🚀 ~ file: cart.model.js:23 ~ db.query ~ result", result);
    if (err) return cb(err);
    return cb(null, { crateCartSuccess: true });
  });
};

Cart.delete = (id, cb) => {
  const sql = "DELETE FROM Carts WHERE id = ?";
  db.query(sql, id, (err, result) => {
    console.log("🚀 ~ file: cart.model.js:32 ~ db.query ~ result", result);
    if (err) return cb(err);
    if (result.affectedRows == 0) {
      return cb({ kind: "not_found" }, null);
    }
    console.log("deleted Cart with id: ", id);
    result(null, result);
  });
};

module.exports = Cart;
