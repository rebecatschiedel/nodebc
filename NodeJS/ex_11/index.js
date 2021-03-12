const express = require('express');
const port = 3000;
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'products.html'));
})

app.listen(port, (err) => {  
    if (err) {
      return console.log(`Unable to start the server on port ${port}`, err)
    }
  
    console.log(`This HTTP server is running on port ${port}`)
});


