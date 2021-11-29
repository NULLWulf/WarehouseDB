// Author : Nathaniel Wolf

const mysql = require('mysql2');
let instance = null;
const host = process.env.DB_HOST,
    port = process.env.DB_PORT,
    user = process.env.DB_USER,
    password = process.env.DB_PASSWORD,
    database = process.env.DB_DATABASE;
const connection = mysql.createConnection({
    host: host,
    port: port,
    user: user,
    password: password,
    database: database});
connection.connect((err) => {
  if (err) {
      console.log(err.message);}})
class whdbs{
  static getDbServiceInstance() {
    return instance ? instance : new whdbs();}
  async getSql(query) {
    try {
        const response = await new Promise((resolve, reject) => {
            // const query = "select Orders.RouteName, Routes.Region from Orders, Routes where Orders.RouteName = Routes.RouteName;";
            connection.query(query, (err, results) => {
                if (err) reject(new Error(err.message));
                resolve(results);
            })});
       console.log(response);
        return response;
    } catch (error) {
        console.log(error);}}}
module.exports = whdbs;