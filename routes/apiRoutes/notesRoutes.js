const router = require('express').Router();
const { findById, createNewNotes, validateNotes } = require('../../lib/db');
const { notes } = require('../../data/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    
    res.json(results);
});
  
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
});
  
router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    if (!validateNotes(req.body)) {
        res.status(400).send('The data is not properly formatted.');
    } else {
        const note = createNewNotes(req.body, notes);
        res.json(note);
    }
});

module.exports  = router;