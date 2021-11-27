// Author : Nathaniel Wolf

const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();
var http = require('http');
var server = http.createServer(function(request, response){});

const warehouseDB = require('./whdbs');
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false}));
    
const db = warehouseDB.getDbServiceInstance()

// Displays order, customer id, route name, region associated with
const query1 = "SELECT Orders.OrderID, Orders.CustomerID, Orders.RouteName, Routes.Region FROM Orders, Routes WHERE Orders.RouteName = Routes.RouteName;"
// Shows supervisors or employees making above 50,000
const query2 = "SELECT FirstName, LastName,Position,Age,Salary FROM Employee WHERE Salary>'50000' or Position = 'Supervisor';"



app.get('/query1', (request, response) =>{
    const db = warehouseDB.getDbServiceInstance();
    const result = db.getSql(query2);
    console.log(result);

    result
        .then(data => response.json({data : data}))
        .catch(err => console.log(err));
});

app.get('/query2', (request, response) =>{
    const db = warehouseDB.getDbServiceInstance();
    const result = db.getSql(query1);
    console.log(result);

    result
        .then(data => response.json({data : data}))
        .catch(err => console.log(err));
});

app.get('/', function(req, res) {
    res.sendFile('/warehouse.html', {root: __dirname })

});

app.listen(process.env.PORT || 3000)

