const express = require('express');
//const { notes } = require('./data/db.json')
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

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
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});