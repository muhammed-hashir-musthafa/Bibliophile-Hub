const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler.js');
require('dotenv').config(); 

const app = express();

 connectDB();

 app.use(cors());
app.use(express.json());

 app.use('/books', bookRoutes);

 app.use(errorHandler);

module.exports = app;
