const fs = require('fs');

const noteData = JSON.parse(fs.readFileSync('./db/db.json'));

const path = require('path');

const uniqid = require('uniqid');

// console.log(noteData);
let i = 0;
module.exports = (app) => {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    
    app.get(path.join('/api/notes'), (req, res) => res.json(noteData));
  
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
    noteData[0].id = '0';
    app.post(path.join('/api/notes'), (req, res) => {
    
    req.body.id = uniqid();
    noteData.push(req.body);
    console.log(noteData)
    res.json(noteData);
    });

    app.delete('/api/notes/:id', (req, res) => {
        const { id } = req.params;
        noteData.forEach((note, i) => {
            console.log(note.id, req.params.id)
            if (note.id === id) {
                console.log(`${note.title} with id ${note.id} has been deleted`)
                noteData.splice(i, 1);
            }
        });
        return res.json(noteData);
    });
  };
  