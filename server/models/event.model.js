const sql = require("./db");

const Event = function (event) {
  this.id = event.id;
  this.user_name = event.user_name;
  this.title = event.title;
  this.content = event.content;
  this.date = event.date;
};
