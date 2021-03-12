const express = require('express');
const port = 3000;

const app = express();

const home = require('./home.js');
const user = require('./user.js');

app.use('/', home);
app.use('/users', user);

app.listen(port, (err) => {  
    if (err) {
      return console.log(`Unable to start the server on port ${port}`, err)
    }
  
    console.log(`This HTTP server is running on port ${port}`)
});