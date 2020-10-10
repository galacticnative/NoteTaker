const express = require('express');
const { database } = require('./data/db.json')

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

app.get('/api/database', (req, res) => {
    let results = database
    console.log(req.query)
    res.json(results);
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});