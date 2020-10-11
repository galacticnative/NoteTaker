const fs = require('fs');
const path = require('path');

//brings up single object instead of an array
function findById(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
}

function createNewNotes(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
    path.join(__dirname, './data/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

module.exports = { findById, createNewNotes };