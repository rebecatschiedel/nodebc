const express = require('express');
const Logger = require('logplease');

const logger = Logger.create('utils');

const app = express();

app.get('/', function(request, response) {
  response.send('Congrats you\'re using your first Node.js and Express as Web Server');
});

const port = 3000;

app.listen(port, (err) => {  
    if (err) {
      return logger.error(`Unable to start the server on port ${port}`, err)
    }
  
    logger.info(`This HTTP server is running on port ${port}`)
});