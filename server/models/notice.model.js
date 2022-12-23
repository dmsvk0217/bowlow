const sql = require("./db");

const Notice = function (notice) {
  this.user_name = notice.user_name;
  this.title = notice.title;
  this.content = notice.content;
  this.date = notice.date;
};
