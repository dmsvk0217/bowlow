const db = require("./db");

const Cart = function (cart) {
  this.cart_id = cart.cart_id;
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

    const sql = "select * from cart where cart_id = ?";
    db.query(sql, result.insertId, (err, result) => {
      if (err) return cb(err);
      return cb(null, { crateCartSuccess: true, cart: result[0] });
    });
  });
};

Cart.delete = (cart_id, cb) => {
  const sql = "DELETE FROM cart WHERE cart_id = ?";
  db.query(sql, cart_id, (err, result) => {
    console.log("🚀 ~ file: cart.model.js:36 ~ db.query ~ err", err);
    console.log("🚀 ~ file: cart.model.js:32 ~ db.query ~ result", result);
    if (err) return cb(err);
    if (result.affectedRows == 0) {
      return cb({ kind: "not_found" }, null);
    }
    console.log("deleted Cart with cart_id: ", cart_id);
    return cb(null, result);
  });
};

module.exports = Cart;
