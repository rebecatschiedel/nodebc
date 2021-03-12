const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Please log to get a user')
})

router.post('/:id', (req, res) => {
    res.send('Please log to create a user')
})

router.put('/:id', (req, res) => {
    res.send('Please log to update a user')
})

router.delete('/:id', (req, res) => {
    res.send('Please log to delete a user')
})

module.exports = router;