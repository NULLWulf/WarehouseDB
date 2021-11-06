const mysql = require('mysql2');
const EvenEmitter = require('events');
require('dotenv').config();

const con = mysql.connect({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    
});

con.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected!');
});
var sql1 = "SELECT * from Employee;"  // Gets employee 
const emitter = new EvenEmitter();
emitter.emit('generalSql');
