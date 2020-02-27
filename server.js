//
const express = require('express');

//
const morgan = require('morgan');

//
const dotenv = require('dotenv');

//Load config.env file(Containing Variables)
dotenv.config({ path: './config.env' });

const app = express();

//Dev logging - Allows log messages in console such as:
//"GET /api/v1/profile/psn/Soviet_Monkey- 200 25.385 ms - 5"
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Profile routes
app.use('/api/v2/profile', require('./routes/profile'));

//Running on port 5000 else running on port 8000
const port = process.env.PORT || 8000;

//Listening to port
app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} port ${port}`)
);
