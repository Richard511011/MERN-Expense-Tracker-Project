const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')

dotenv.config({path:'./config/config.env'});

connectDB();

const transactions = require('./routes/transactions.js')
const app = express();

//need this for using body parser in controller/transaction.js
app.use(express.json());


if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}
app.use('/api/v1/transactions',transactions);

//do process.env to access global variables from config.env
const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));