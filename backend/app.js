const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const warehouseDB = require('./whdbs');
console.log("App is running")

global.port = process.env.HOST_PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false}));
    
const db = warehouseDB.getDbServiceInstance()                                            

function tryGrab(){
    const db = warehouseDB.getDbServiceInstance();
    const result = db.getSql();
    console.log(result);
}

app.listen(port, () => console.log('app is running on port ' + port + '.'));

tryGrab();