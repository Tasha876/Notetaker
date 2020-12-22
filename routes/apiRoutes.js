// sets up dependencies

const fs = require('fs');

const noteData = JSON.parse(fs.readFileSync('./db/db.json'));

const path = require('path');

const uniqid = require('uniqid');

let i = 0;
module.exports = (app) => {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/notes... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    
    app.get(path.join('/api/notes'), (req, res) => res.json(noteData));
  
    // API POST Request
    // Below code handles when a user submits a note and thus submits data to the server.
    // When a user submits a note (a JSON object)
    // ...the JSON is pushed to the JavaScript array
    // Then the server saves the data to the noteData array)
    app.post(path.join('/api/notes'), (req, res) => {
    
        req.body.id = uniqid();
        noteData.push(req.body);
        res.json(noteData);
    });

    // API Delete Request
    // Below code handles when a user deletes a note and thus deletes data from the server.
    // When a user deletes a note (a JSON object)
    // ...the JSON is spliced from the JavaScript array
    // Then the server saves the data to the noteData array)
    app.delete('/api/notes/:id', (req, res) => {
        const { id } = req.params;
        noteData.forEach((note, i) => {
            if (note.id === id) {
                console.log(`${note.title} with id ${note.id} has been deleted`)
                noteData.splice(i, 1);
            }
        });
        return res.json(noteData);
    });
  };
  