const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_PASSWORD,
    password: process.env.DB_PASSWORD,
});

let sql = "SELECT * FROM Employees;";

pool.execute(sql, function(err, result){
    if (err) throw err;

    console.log(result.title);

});

module.exports.pool.promise();