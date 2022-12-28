const db = require("./db");

const Cart = function (cart) {
  this.id = cart.id;
  this.user_id = cart.user_id;
  this.product_id = cart.product_id;
  this.quantity = cart.quantity;
  this.date = cart.date;
};

Cart.get = (user_id, cb) => {
  const sql =
    "select * from cart left join product on cart.product_id = product.id where cart.user_id=?";
  const sql_object = user_id;

  db.query(sql, sql_object, (err, result) => {
    if (err) return cb(err, null);
    return cb(null, result);
  });
};

Cart.create = (cart, cb) => {
  console.log("🚀 ~ file: cart.model.js:22 ~ cart", cart);
  const sql = "insert into Cart set ?";
  db.query(sql, cart, (err, result) => {
    console.log("🚀 ~ file: cart.model.js:24 ~ db.query ~ err", err);
    console.log("🚀 ~ file: cart.model.js:23 ~ db.query ~ result", result);
    if (err) return cb(err);
    return cb(null, { crateCartSuccess: true });
  });
};

Cart.delete = (id, cb) => {
  const sql = "DELETE FROM cart WHERE id = ?";
  db.query(sql, id, (err, result) => {
    console.log("🚀 ~ file: cart.model.js:32 ~ db.query ~ result", result);
    if (err) return cb(err);
    if (result.affectedRows == 0) {
      return cb({ kind: "not_found" }, null);
    }
    console.log("deleted Cart with id: ", id);
    return cb(null, result);
  });
};

module.exports = Cart;
