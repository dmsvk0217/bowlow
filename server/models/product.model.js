const db = require("./db");

// constructor
const Product = function (product) {
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

Product.get = (product, cb) => {
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
    console.log("🚀 ~ file: product.model.js:36 ~ db.query ~ result", result);
    if (err) return cb(err, null);
    return cb(null, result);
  });
};

Product.create = (product, cb) => {
  const sql = "insert into product set ?";
  db.query(sql, product, (err, result) => {
    console.log("🚀 ~ file: product.model.js:42 ~ db.query ~ result", result);
    if (err) return cb(err);
    return cb(null, { crateProductSuccess: true });
  });
};

Product.update = (product, cb) => {
  const sql = "UPDATE product set ? where name=?";
  const sql_object = [product, product.name];
  db.query(sql, sql_object, (err, result) => {
    console.log("🚀 ~ file: product.model.js:51 ~ db.query ~ result", result);
    if (err) return cb(err);
    return cb(null, { updateProductSuccess: true });
  });
};

// Product.create = (newproduct, result) => {
//   sql.query("INSERT INTO products SET ?", newproduct, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     console.log("created product: ", { id: res.insertId, ...newproduct });
//     result(null, { id: res.insertId, ...newproduct });
//   });
// };

// product.findById = (id, result) => {
//   sql.query(`SELECT * FROM products WHERE id = ${id}`, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("found product: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found product with the id
//     result({ kind: "not_found" }, null);
//   });
// };

// product.updateById = (id, product, result) => {
//   sql.query(
//     "UPDATE products SET title = ?, description = ?, published = ? WHERE id = ?",
//     [product.title, product.description, product.published, id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // not found product with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("updated product: ", { id: id, ...product });
//       result(null, { id: id, ...product });
//     }
//   );
// };

// product.remove = (id, result) => {
//   sql.query("DELETE FROM products WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // not found product with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("deleted product with id: ", id);
//     result(null, res);
//   });
// };

// product.removeAll = (result) => {
//   sql.query("DELETE FROM products", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log(`deleted ${res.affectedRows} products`);
//     result(null, res);
//   });
// };

module.exports = Product;
