const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const warehouseDB = require('./whdbs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false}));





app.listen(process.env.HOST_PORT, () => console.log('app is running'));