const mysql = require("mysql");
const DBconfig = require("../config/db.config");

//mysql db설정
var db = mysql.createConnection({
  host: DBconfig.HOST,
  port: DBconfig.PORT,
  user: DBconfig.USER,
  password: DBconfig.PASSWORD,
  database: DBconfig.DATABASE,
});

module.exports = db;
