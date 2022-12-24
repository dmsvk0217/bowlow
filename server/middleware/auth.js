const jwt = require("jsonwebtoken");
const secret = require("../config/auth.config");
const db = require("../models/db");

let auth = (req, res, next) => {
  //cookies 값 가지고
  const token = req.cookies.x_auth;
  sql = "select * from user where uid=? and token=?";
  //jwt 복호화 한후
  jwt.verify(token, secret.secretToken, (err, decode) => {
    // decode 값 is userid
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
