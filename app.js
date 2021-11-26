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

const query1 = "select Orders.RouteName, Routes.Region from Orders, Routes where Orders.RouteName = Routes.RouteName;"

app.get('/getQuery', (request, response) =>{
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

