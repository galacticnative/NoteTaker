const express = require('express');
const { database } = require('./data/db.json')

//to allow Heroku to convert server to port 80
const PORT = process.env.PORT || 3001;
const app = express();
//const notesRoutes = require('./routes/notesRoutes');


// parse incoming string or array data aka MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
//gathers data from public folder such as index.html and script files
app.use(express.static('public'));
//app.use('/api', notesRoutes);

function filterByQuery(query, notesArray) {
    let filteredResults = notesArray;
    if (query.title) {
      filteredResults = filteredResults.filter(database => database.title === query.title);
    }
    if (query.text) {
      filteredResults = filteredResults.filter(database => database.text === query.text);
    }
    return filteredResults;
}

//brings up single object instead of an array
function findById(id, notesArray) {
    const result = notesArray.filter(database => database.id === id)[0];
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
}

app.get('/api/database', (req, res) => {
    let results = database
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
})

app.get('/api/database/:id', (req, res) => {
    const result = findById(req.params.id, database);
      res.json(result);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});