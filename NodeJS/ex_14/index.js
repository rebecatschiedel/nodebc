const express = require('express');
const port = 3000;
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'))
})

app.get('/products', (req, res) => {
    res.status(500).send('Server error, please try it later')
})

app.get('/users', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'))
})

app.listen(port, (error) => {
    if(error) {
        console.log('There is an error');
    } else {
        console.log(`This server is running on port ${port}`);
    }
})