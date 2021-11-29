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
const query2 = "SELECT Employee.FirstName, Employee.LastName, Employee.Position,Employee.Salary, AssignedZone.Zone FROM Employee, AssignedZone WHERE Employee.EmployeeID = AssignedZone.EmployeeID;"
// Employee view
const query3 = "select AssignedZone.Zone, COUNT(DISTINCT EmployeeID) as Assigned_Employees from AssignedZone, Inventory GROUP BY Zone ORDER BY Zone;"
// Distinct Items View
const query4 = "select Inventory.ItemType, count(ALL Inventory.ItemName) as Distint_Items_Of_Time from Inventory\n GROUP BY ItemType;"

app.get('/query1', (request, response) =>{
    const db = warehouseDB.getDbServiceInstance();
    const result = db.getSql(query1);
    console.log(result);

    result
        .then(data => response.json({data : data}))
        .catch(err => console.log(err));
});

app.get('/query2', (request, response) =>{
    const db = warehouseDB.getDbServiceInstance();
    const result = db.getSql(query2);
    console.log(result);

    result
        .then(data => response.json({data : data}))
        .catch(err => console.log(err));
});

app.get('/query3', (request, response) =>{
    const db = warehouseDB.getDbServiceInstance();
    const result = db.getSql(query3);
    console.log(result);

    result
        .then(data => response.json({data : data}))
        .catch(err => console.log(err));
});

app.get('/query4', (request, response) =>{
    const db = warehouseDB.getDbServiceInstance();
    const result = db.getSql(query4);
    console.log(result);

    result
        .then(data => response.json({data : data}))
        .catch(err => console.log(err));
});

app.get('/', function(req, res) {
    res.sendFile('/warehouse.html', {root: __dirname })

});

app.listen(process.env.PORT || 3000)

