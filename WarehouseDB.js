const mysql = require('mysql2');
const EventEmitter = require('events');
require('dotenv').config();

class Emitter extends EventEmitter {}
const sqlEmitter = new Emitter();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    
});

sqlEmitter.on('event', () => {
  console.log('an event occurred!');
  pool.query('select * FROM Employee;', function(err, result){
    console.log(result);
  });
});

sqlEmitter.emit('event');