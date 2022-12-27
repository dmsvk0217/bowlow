const db = require("./db");

// constructor
const Product = function (product) {
  this.id = product.id;
  this.name = product.name;
  this.price = product.price;
  this.content = product.content;
  this.image = product.image;
  this.review_count = product.review_count;
  this.review_score = product.review_score;
  this.type = product.type;
  this.category1 = product.category1;
  this.category2 = product.category2;
};

Product.get = (cb) => {
  let sql = "SELECT * FROM product ";
  let sql_object;

  //type, category1,2 별 분류
  if (product.type != 4) {
    sql += "where type=?";
    sql_object = product.type;
  } else if (product.category2 == 0) {
    sql += "where category1=?";
    sql_object = product.category1;
  } else {
    sql += "where category1=? and category2=?";
    sql_object = [product.category1, product.category2];
  }

  db.query(sql, sql_object, (err, result) => {
    console.log(
      "🚀get ~ file: product.model.js:36 ~ db.query ~ result",
      result
    );
    if (err) return cb(err, null);
    return cb(null, result);
  });
};

Product.findOne = (id, cb) => {
  let sql = "SELECT * FROM product where = ?";
  let sql_object = id;

  db.query(sql, sql_object, (err, result) => {
    console.log(
      "🚀get ~ file: product.model.js:36 ~ db.query ~ result",
      result
    );
    if (err) return cb(err, null);
    if (!result) return cb({ kind: "not_found" }, null);
    return cb(null, result);
  });
};

Product.create = (product, cb) => {
  const sql = "insert into product set ?";
  db.query(sql, product, (err, result) => {
    console.log(
      "🚀create ~ file: product.model.js:42 ~ db.query ~ result",
      result
    );
    if (err) return cb(err);
    return cb(null, { crateProductSuccess: true });
  });
};

Product.update = (product, cb) => {
  const sql = "UPDATE product set ? where name=?";
  const sql_object = [product, product.name];
  db.query(sql, sql_object, (err, result) => {
    console.log(
      "🚀update ~ file: product.model.js:51 ~ db.query ~ result",
      result
    );
    if (err) return cb(err);
    return cb(null, { updateProductSuccess: true });
  });
};

Product.delete = (id, cb) => {
  const sql = "DELETE FROM product WHERE id = ?";
  db.query(sql, id, (err, result) => {
    if (err) return cb(err);
    console.log("🚀 ~ file: product.model.js:61 ~ db.query ~ result", result);

    if (result.affectedRows == 0) {
      return cb({ kind: "not_found" }, null);
    }
    console.log("deleted product with id: ", id);
    return cb(null, result);
  });
};

module.exports = Product;
