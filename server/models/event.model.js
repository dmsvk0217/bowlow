const db = require("./db");

const Event = function (event) {
  this.id = event.id;
  this.user_name = event.user_name;
  this.title = event.title;
  this.content = event.content;
  this.date = event.date;
};

Event.get = (cb) => {
  let sql = "SELECT * FROM event ";

  db.query(sql, (err, result) => {
    console.log("🚀get ~ file: event.model.js:36 ~ db.query ~ result get 완료");
    if (err) return cb(err, null);
    return cb(null, result);
  });
};

Event.findOne = (id, cb) => {
  let sql = "SELECT * FROM event where = ?";
  let sql_object = id;

  db.query(sql, sql_object, (err, result) => {
    console.log("🚀get ~ file: event.model.js:36 ~ db.query ~ result", result);
    if (err) return cb(err, null);
    if (!result) return cb({ kind: "not_found" }, null);
    return cb(null, result);
  });
};

Event.create = (event, cb) => {
  const sql = "insert into event set ?";
  db.query(sql, event, (err, result) => {
    console.log(
      "🚀create ~ file: event.model.js:42 ~ db.query ~ result",
      result
    );
    if (err) return cb(err);
    return cb(null, { crateEventSuccess: true });
  });
};

Event.update = (event, cb) => {
  const sql = "UPDATE Event set ? where id=?";
  const sql_object = [event, event.id];
  db.query(sql, sql_object, (err, result) => {
    console.log("🚀 ~ file: event.model.js:49 ~ db.query ~ err", err);
    console.log(
      "🚀update ~ file: Event.model.js:51 ~ db.query ~ result",
      result
    );
    if (err) return cb(err);
    return cb(null, { updateEventSuccess: true });
  });
};

Event.delete = (id, cb) => {
  const sql = "DELETE FROM event WHERE id = ?";
  db.query(sql, id, (err, result) => {
    if (err) return cb(err);
    console.log("🚀 ~ file: Event.model.js:61 ~ db.query ~ result", result);

    if (result.affectedRows == 0) {
      return cb({ kind: "not_found" }, null);
    }
    console.log("deleted Event with id: ", id);
    return cb(null, result);
  });
};

module.exports = Event;
