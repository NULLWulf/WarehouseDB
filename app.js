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

app.get('/frontEndPoker', (request, response) =>{
  console.log("Poked from Front End");
});

app.get('/getQuery', (request, response) =>{
    const db = warehouseDB.getDbServiceInstance();
    const result = db.getSql();
    console.log(result);

    result
        .then(data => response.json({data : data}))
        .catch(err => console.log(err));
});

app.get('/', function(req, res) {
    res.sendFile('/warehouse.html', {root: __dirname })
});


// test
app.listen(process.env.PORT || 3000)