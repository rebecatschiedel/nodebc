const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('this is my Home page using express Router')
})

module.exports = router;