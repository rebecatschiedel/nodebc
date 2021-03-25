const express = require('express');
const port = 3000;

const app = express();
 
const requestTime = (req, res, next) => {
    const message = `request: ${req.baseUrl} ${Date.now()}`;
    console.log(message);

    next();
}

app.use(requestTime);

app.get('/', (req, res) => {
    res.json({
        "status": 200,
        "message": "Este request/response está OK"
      })
})

app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log(`Up and running on port ${port}`);
})