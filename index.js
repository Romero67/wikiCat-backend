const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dataInMemory = require('./libs/dataInMemory');
const {config} = require('./config')

//use the libs
require('dotenv').config();
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//use the initial lib
dataInMemory.setData();

//setup routes
app.use('/api/cat', require('./routes/cat.route'));

//listen to port

app.listen(config.port, () => console.log(`server onn port ${config.port}`));