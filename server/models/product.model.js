const db = require("./db");

// constructor
const Product = function (product) {
  this.id = product.id;
  this.product_name = product.product_name;
  this.price = product.price;
  this.product_content = product.product_content;
  this.product_image = product.product_image;
  this.review_count = product.review_count;
  this.review_avg_score = product.review_avg_score;
  this.type = product.type;
  this.category1 = product.category1;
  this.category2 = product.category2;
  this.product_date = product.product_date;
};

// insert into product values(
//   null,
//   "트위스트 루즈 브이넥 니트",
//   59900,
//   "꽈배기 짜임으로 루즈한 핏감의 브이넥 니트입니다. 램스울 70 나일론 30 혼용 소매와 몸판 짜임이 다른 니트 디테일",
// "https://bowlow.co.kr/web/product/medium/202212/e3a728b5c175ef1c006b9a68b437d17f.webp",
//   0,
//   0,
//   2,
//   5,
//   3,
//   "2022-12-27"
// );

// [BOWLOW MADE] 프리미엄 히든 더블 코트
// 15시 이전 주문 시 당일발송
// KRW 238,000

// [BOWLOW MADE] 프리미엄 울 포켓 셔츠
// 15시 이전 주문 시 당일발송
// KRW 81,400

// 휴스턴 무스탕 레더 자켓
// KRW 134,900

//추가적인 category1,2 별 분류를 통한 초기 로딩 시간 줄이기 및 최적화 요.
Product.get = (type, cb) => {
  console.log("🚀 ~ file: product.model.js:43 ~ type", type);

  let sql = "SELECT * FROM product where type=?";
  const sql_object = [type];

  if (type == 0) {
    sql += " or type=?";
    sql_object.pop();
    sql_object.push(2);
    sql_object.push(3);
  }

  db.query(sql, sql_object, (err, result) => {
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

Product.createReview = (
  product_id,
  review_count,
  review_avg_score,
  score,
  cb
) => {
  var result_review_avg_score =
    (parseFloat(score) +
      parseFloat(review_avg_score) * parseFloat(review_count)) /
    parseFloat(review_count + 1);
  console.log("result_review_avg_score : ", result_review_avg_score);
  const sql =
    "UPDATE product set review_count=?, review_avg_score=? where id = ?";
  const sql_object = [
    review_count + 1,
    parseFloat(result_review_avg_score),
    product_id,
  ];
  db.query(sql, sql_object, (err, result) => {
    // console.log("🚀 ~ file: product.model.js:130 ~ db.query ~ result", result);
    console.log("🚀 ~ file: product.model.js:130 ~ db.query ~ err", err);
    if (err) return cb(err, null);
    return cb(null, result);
  });
};

module.exports = Product;
