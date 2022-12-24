const jwt = require("jsonwebtoken");
const { secretToken } = require("../config/auth.config");
const db = require("../models/db");

let auth = (req, res, next) => {
  //cookies꺼내기 -> jwt 복호화 -> user email -> select b yemail -> db token과 jwt 일치여부 확인 -> 인증
  const token = req.cookies.x_auth;

  sql = "select * from user where email=? and token=?";
  jwt.verify(token, secretToken, (err, decode) => {
    // decode is user email
    if (err) res.status(500).send(err);
    db.query(sql, [decode, token], (err, user) => {
      if (err) res.status(500).send(err);
      if (!user[0]) {
        res.json({ isAuth: false, error: true });
      }
      req.user = user[0];
      next();
    });
  });
};

module.exports = auth;