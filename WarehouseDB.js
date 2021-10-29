var mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_PASSWORD,
//     password: process.env.DB_PASSWORD,
// });

var con = mysql.createConnection({
  host : "vincentprivatenas.mynetgear.com",
  port : "3306",
  user : "nwolf",
  password : "123456789",
  database : "Warehouse329"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SHOW tables", function(err, result){
  //   if (err) throw err;
    console.log(result);
  //   console.log(fields);
  });
});

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host : "pi.cs.oswego.edu",
//   port : "3306",
//   user : "nwolf2",
//   password : "csc365",
//   database : "21F_nwolf2"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("SHOW users", function(err, result, fields){
//     if (err) throw err;
//     console.log(result);
//     console.log(fields);
//   });
// });
