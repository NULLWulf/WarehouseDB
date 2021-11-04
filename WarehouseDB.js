const mysql = require('mysql2');
const EvenEmitter = require('events');

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_PASSWORD,
//     password: process.env.DB_PASSWORD,
// });

var con = mysql.createConnection({
  host : "vincentprivatenas.mynetgear.com",
  port : "3306",
  user : "allyk",
  password : "rich300",
  database : "Warehouse329"
});
const emitter = new EvenEmitter();

emitter.on('generalSql', function(){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("show tables;", function(err, result){
    //   if (err) throw err;
      console.log(result);
    //   console.log(fields);
    });
  });
});

emitter.emit('generalSql');
