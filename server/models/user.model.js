const db = require("./db");
const bcrypt = require("bcrypt");
const { secretToken } = require("../config/auth.config");
const jwt = require("jsonwebtoken");

const User = function (user) {
  this.id = user.id;
  this.password = user.password;
  this.name = user.name;
  this.phone = user.phone;
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
    if (result[0]) return cb(null, { exist: true });
    const saltRounds = 10;
    const myPlaintextPassword = user.password;

    bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
      if (err) return cb(err);

      let sql = "insert into user set ?";
      user.password = hash;
      db.query(sql, user, function (err, result, fields) {
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
    if (err) return cb(err);
    if (!result[0]) return cb("exist_false", { exist: false });

    const plaintextPassword = user.password;
    const hash = result[0].password;
    user = result[0];
    bcrypt.compare(plaintextPassword, hash, function (err, result) {
      if (err) return cb(err);
      if (!result) return cb("wrong_password", { worngPassword: true });

      console.log(
        "🚀 ~ file: [user.login 안에서 return 하기 직전에 user 객체]user.model.js:52 ~ user",
        user
      );

      return cb(null, { loginSuccess: true });
    });
  });
};

User.generateToken = (email, cb) => {
  //jwt 생성하기
  let token = jwt.sign(email, secretToken);
  let sql = "UPDATE user set token=? where email=?";
  let sqlObject = [token, email];

  db.query(sql, sqlObject, function (err, result) {
    if (err) return cb(err);
    return cb(null, token);
  });
};

User.logout = (user, cb) => {
  //user db token null 처리
  let sql = "UPDATE user set token=NULL where email=?";

  db.query(sql, [user.email], function (err, result) {
    if (err) cb(err);

    return cb(null, { logoutSuccess: true });
  });
};

User.cartCount = (user, cb) => {
  let sql = "UPDATE user set cart_count=? where id=?";
  let sqlObject = [user.cart_count + 1, user.id];

  db.query(sql, sqlObject, function (err, result) {
    if (err) cb(err);
    return cb(null, result[0]);
  });
};

module.exports = User;
