require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const checkSum = require('./server/middlewares/authenticate').authenticateChecksum;
const morgan_log_level = require('./config/app_config').morgan_log_level;
const app = express();

app.use(cors());
app.use(logger(morgan_log_level));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const routes = require('./routes/index');

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('hi');
})

module.exports = app;