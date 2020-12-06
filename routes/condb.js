var mysql = require('mysql');

var con = mysql.createConnection({
    host: "xxxxxxxx",
    user: "xxxxxxxx",
    password: "xxxxxxxx",
    database: "xxxxxxxx"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con