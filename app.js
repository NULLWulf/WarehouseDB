const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const warehouseDB = require('./whdbs');

global.port = process.env.HOST_PORT

app.use(express.json());
app.use(express.urlencoded({ extended : false}));
    
const db = warehouseDB.getDbServiceInstance()

app.tryGrab = function (tryGrab, param2) {

}
app.tryGrab('/tryGrab', (request, response) =>{
    const db = warehouseDB.getDbServiceInstance();
    const result = db.getSql();
    console.log(result);

    result
        .then(data => response.json({data : data}))
        .catch(err => console.log(err));
});

app.listen(port, () => console.log('app is running on port ' + port + '.'));
