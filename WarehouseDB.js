const mysql = require('mysql2');
const EvenEmitter = require('events');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    
});

pool.query('select * FROM Employee;', function(err, result){
  console.log(result);
})

console.log("Program reached end")