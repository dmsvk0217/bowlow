const db = require("./db");
const bcrypt = require("bcrypt");

const User = function (user) {
  this.id = user.id;
  this.password = user.password;
  this.name = user.name;
  this.phone = user.phone;
  this.address = user.address;
  this.email = user.email;
};

User.register = (user, cb) => {
  var sql = "Select * from user where email=?";

  //이메일 중복체크 후 비밀번호 암호화 후 db에 저장.
  db.query(sql, user.email, function (err, result) {
    if (err) return cb(err);
    console.log(result);
    if (result) return cb(null, { exist: true });

    const saltRounds = 10;
    const myPlaintextPassword = user.password;

    bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
      if (err) return cb(err);

      const sqlInsertUser = "insert into user set ?";
      user.password = hash;
      db.query(sqlInsertUser, user, function (err, result, fields) {
        if (err) return cb(err, null);
        data = { registerSuccess: true };
        return cb(null, data);
      });
    });
  });
};
