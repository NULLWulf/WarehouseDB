const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const warehouseDB = require('./whdbs');

global.port = process.env.HOST_PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false}));
    
const db = warehouseDB.getDbServiceInstance()


app.get('/', (request, response) =>{
    const db = warehouseDB.getDbServiceInstance();
    const result = db.getSql();
    console.log(result);

    result
        .then(data => response.json({data : data}))
        .catch(err => console.log(err));
});


app.listen(process.env.HOST_PORT || 3000)