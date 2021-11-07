const mysql = require('mysql2');
let instance = null;
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    
});

connection.connect((err) => {
  if (err) {
      console.log(err.message);
  }
})

class whdbs{

  static getDbServiceInstance() {
    return instance ? instance : new whdbs();
  }
  
  
  async getSql() { // naming is ambigious for now
    try {
        const response = await new Promise((resolve, reject) => {
            const query = "";

            connection.query(query, (err, results) => {
                if (err) reject(new Error(err.message));
                resolve(results);
            })
        });
        // console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
  }
}


module.exports = whdbs;

  // const EventEmitter = require('events');
  // class Emitter extends EventEmitter {}
  // const sqlEmitter = new Emitter();
  // sqlEmitter.on('event', () => {
  // });
  // sqlEmitter.emit('event');