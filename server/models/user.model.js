const sql = require("./db");

const User = function (user) {
  this.id = user.id;
  this.password = user.password;
  this.name = user.name;
  this.phone = user.phone;
  this.address = user.address;
  this.email = user.email;
};
