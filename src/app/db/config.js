let mysql = require('mysql');
require('dotenv').config();

let connect = mysql.createConnection({
  host: process.env.DB_Host,
  user: process.env.DB_User,
  password: process.env.DB_Password,
  database:process.env.DB_DBname
});

connect.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connect;