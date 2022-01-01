const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const {initalCats} = require('./libs/initialSetup');

//use the libs
require('dotenv').config();
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//connect to database
mongoose.connect(process.env.DATABASE,{
 useNewUrlParser: true,
 useUnifiedTopology: true
}).then(() => console.log('connection to database success'));

//use the initial lib
initalCats();

//setup routes
app.use('/api/cat', require('./routes/cat.route'));

//listen to port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server onn port ${port}`));