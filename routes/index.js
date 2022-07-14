const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

router.get('*', (req, res) => {
    res.send('<h1>Error on loading the notes page, Please try again</h1>')
})

module.exports = router;