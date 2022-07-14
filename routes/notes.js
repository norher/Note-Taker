const router = require('express').Router();
const { readFile, writeFile, readAppend, uuid } = require('../helpers/util');

router.post('/notes', (req, res) => {
    const { title, text }  = req.body;
    if (req.body) {
        const note = {
            title,
            text,
            id: uuid(),
        };
        readAppend(note, '/db/db.json');
        res.json("Note Saved!")
    } else {
        res.error('No note was saved');
    }
});

router.get('/notes', (req, res) => {
    readFile('./db/db.json')
    .then((router) => res.json(JSON.parse(router)))
});

router.delete('/notes/:id', (req, res) => {
    readFile('./db/db.json')
        .then((savedNotes) => {
            let parsedData = JSON.parse(savedNotes);
            individual = parsedData.filter(savedNotes => savedNotes.id !== req.params.id);
            writeFile('./db/db.json', individual);
            res.json(individual)
            console.log('Note deleted');
        });
})

module.exports = router;