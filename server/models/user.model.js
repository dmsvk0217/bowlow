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
    console.log("🚀 ~ file: user.model.js:21 ~ result", result);
    if (err) return cb(err);
    if (result[0]) return cb(null, { exist: true });

    console.log("🚀 ~ file: user.model.js:26 ~ result", result);
    const saltRounds = 10;
    const myPlaintextPassword = user.password;

    bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
      if (err) return cb(err);

      let sql = "insert into user set ?";
      user.password = hash;
      console.log("🚀 ~ file: user.model.js:34 ~ user", user);

      db.query(sql, user, function (err, result, fields) {
        console.log("🚀 ~ file: user.model.js:35 ~ result", result);
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
    console.log("🚀 ~ file: user.model.js:52 ~ result", result);

    if (err) return cb(err);
    if (!result[0]) return cb("exist_false", { exist: false });

    const plaintextPassword = user.password;
    const hash = result[0].password;
    console.log("🚀 ~ file: user.model.js:60 ~ hash", hash);
    user = result[0];
    console.log("🚀 ~ file: user.model.js:61 ~ user", user);

    bcrypt.compare(plaintextPassword, hash, function (err, result) {
      console.log("🚀 ~ file: user.model.js:63 ~ result", result);
      if (err) return cb(err);
      if (!result) return cb("wrong_password", { worngPassword: true });

      console.log("🚀 ~ file: user.model.js:67 ~ result", result);
      return cb(null, { loginSuccess: true });
    });
  });
};

User.generateToken = (email, cb) => {
  //jwt 생성하기
  let token = jwt.sign(email, secretToken);
  console.log("🚀 ~ file: user.model.js:79 ~ token", token);

  let sql = "UPDATE user set token=? where id=?";
  let sqlObject = [token, email];

  db.query(sql, sqlObject, function (err, result) {
    console.log("🚀 ~ file: user.model.js:70 ~ result", result);
    if (err) return cb(err);
    return cb(null, token);
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
