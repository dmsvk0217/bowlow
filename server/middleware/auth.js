const jwt = require("jsonwebtoken");
const { secretToken } = require("../config/auth.config");
const db = require("../models/db");

let auth = (req, res, next) => {
  if (!req.body) {
    res.status(400).send({
      data: "Content can not be empty!",
    });
  }

  //cookies꺼내기 -> jwt 복호화 -> user id -> select b id -> db token과 jwt 일치여부 확인 -> 인증
  const token = req.cookies.x_auth;

  sql = "select * from user where id=? and token=?";
  jwt.verify(token, secretToken, (err, decode) => {
    // decode is user id
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
