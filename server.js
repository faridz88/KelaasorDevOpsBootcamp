'use strict';

const express = require('express');
const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
app.get('/', (req, res) => {
  // res.send('Hello World From: ' + process.env.DEPLOY_ENV);
  res.json({ message: 'Hello, World!', environment: process.env.DEPLOY_ENV });
});

module.exports = app;


app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});