const express = require('express');
const { notes } = require('./data/db.json')
const fs = require('fs');
const path = require('path');

//to allow Heroku to convert server to port 80
const PORT = process.env.PORT || 3001;
const app = express();
//const notesRoutes = require('./routes/notesRoutes');

// parse incoming string or array data ; MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

//gathers data from public folder such as index.html and script files
app.use(express.static('public'));
app.use('/apiRoutes', notesRoutes);




// app.get('/api/notes', (req, res) => {
//     let results = notes
    
//     res.json(results);
// })

// app.get('/api/notes/:id', (req, res) => {
//     const result = findById(req.params.id, notes);
//       res.json(result);
// });

// app.post('/api/notes', (req, res) => {
//     req.body.id = notes.length.toString();

//     const note = createNewNotes(req.body, notes);

//     res.json(note);
// });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});