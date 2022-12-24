const db = require("./db");
const bcrypt = require("bcrypt");
const { secretToken } = require("../config/auth.config");

const User = function (user) {
  this.id = user.id;
  this.password = user.password;
  this.name = user.name;
  this.phone = user.phone;
  this.address = user.address;
  this.email = user.email;
  this.cart_count = user.cart_count;
  this.auth = user.auth;
  this.token = user.token;
};

User.register = (user, cb) => {
  let sql = "Select * from user where email=?";

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

User.login = (user, cb) => {
  let sql = "Select * from user where email=?";

  //이메일 존재 여부 확인 -> 비밀번호 복호화 비교 -> return
  db.query(sql, user.email, function (err, result) {
    console.log("🚀 ~ file: user.model.js:44 ~ result", result);
    if (err) return cb(err);
    if (!result) return cb(null, { exist: false });
    const plaintextPassword = user.password;
    const hash = result[0].password;
    bcrypt.compare(plaintextPassword, hash, function (err, result) {
      if (err) return cb(err);
      if (!result) return cb(null, { worngPassword: true });

      return cb(null, { loginSuccess: true });
    });
  });
};

User.generateToken = (user, cb) => {
  //jwt 생성하기
  let token = jwt.sign(user.id, secretToken);
  console.log("🚀 ~ file: user.model.js:64 ~ token", token);

  user.token = token;

  let sql = "UPDATE user set token=? where id=?";
  let sqlObject = [user.token, user.id];

  db.query(sql, sqlObject, function (err, result) {
    console.log("🚀 ~ file: user.model.js:70 ~ result", result);
    if (err) return cb(err);
    return cb(null, result);
  });
};

User.logout = (user, cb) => {
  //user db token null 처리
  let sql = "UPDATE user set token=NULL where email=?";

  db.query(sql, [user.email], function (err, result) {
    console.log("🚀 ~ file: user.model.js:80 ~ result", result);
    if (err) cb(err);

    return cb(null, { logoutSuccess: true });
  });
};

User.cartCount = (user, cb) => {
  let sql = "UPDATE user set cart_count=? where id=?";
  let sqlObject = [user.cart_count + 1, user.id];

  db.query(sql, sqlObject, function (err, result) {
    console.log("🚀 ~ file: user.model.js:96 ~ result", result);
    if (err) cb(err);
    return cb(null, result[0]);
  });
};

module.exports = User;
