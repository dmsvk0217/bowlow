const db = require("./db");

const Notice = function (notice) {
  this.id = notice.id;
  this.user_name = notice.user_name;
  this.title = notice.title;
  this.content = notice.content;
  this.date = notice.date;
};

Notice.get = (cb) => {
  let sql = "SELECT * FROM notice ";

  db.query(sql, (err, result) => {
    if (err) return cb(err, null);
    return cb(null, result);
  });
};

Notice.findOne = (id, cb) => {
  let sql = "SELECT * FROM notice where = ?";
  let sql_object = id;

  db.query(sql, sql_object, (err, result) => {
    console.log("🚀 ~ file: notice.model.js:26 ~ db.query ~ result", result);
    if (err) return cb(err, null);
    if (!result) return cb({ kind: "not_found" }, null);
    return cb(null, result);
  });
};

Notice.create = (notice, cb) => {
  const sql = "insert into notice set ?";
  db.query(sql, notice, (err, result) => {
    console.log(
      "🚀create ~ file: notice.model.js:42 ~ db.query ~ result",
      result
    );
    if (err) return cb(err);
    return cb(null, { crateNoticeSuccess: true });
  });
};

Notice.update = (notice, cb) => {
  const sql = "UPDATE notice set ? where id=?";
  const sql_object = [notice, notice.id];
  db.query(sql, sql_object, (err, result) => {
    console.log(
      "🚀update ~ file: notice.model.js:51 ~ db.query ~ result",
      result
    );
    if (err) return cb(err);
    return cb(null, { updateNoticeSuccess: true });
  });
};

Notice.delete = (id, cb) => {
  console.log("🚀 ~ file: notice.model.js:58 ~ Notice.delete ~ id", id);
  const sql = "DELETE FROM notice WHERE id = ?";
  db.query(sql, id, (err, result) => {
    console.log("🚀 ~ file: notice.model.js:60 ~ db.query ~ err", err);
    if (err) return cb(err);
    console.log("🚀 ~ file: notice.model.js:61 ~ db.query ~ result", result);

    if (result.affectedRows == 0) {
      return cb({ kind: "not_found" }, null);
    }
    console.log("deleted notice with id: ", id);
    cb(null, result);
  });
};

module.exports = Notice;
