const sql = require("./db");

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

const Product_option = function (product_option) {
  this.id = product_option.id;
  this.product_id = product_option.product_id;
  this.color = product_option.color;
  this.size = product_option.size;
  this.quantitiy = product_option.quantitiy;
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

// product.getAll = (title, result) => {
//   let query = "SELECT * FROM products";

//   if (title) {
//     query += ` WHERE title LIKE '%${title}%'`;
//   }

//   sql.query(query, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     //console.log("products: ", res);
//     result(null, res);
//   });
// };

// product.getAllPublished = (result) => {
//   sql.query("SELECT * FROM products WHERE published=true", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("products: ", res);
//     result(null, res);
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

// module.exports = product;
