const express = require('express');
const app = express();
const port = 8080;

const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/notes', (req, res) => {
  let data = fs.readFileSync(__dirname + '/public/notes.html');
  res.send(data.toString());
});


let data = JSON.parse(fs.readFileSync(__dirname + '/db/db.json').toString());

app.get('/api/notes', (req, res) => {
  res.json(data);
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body
  console.log(newNote)
  data.push(newNote);
  // console.log('here', req.body.name);
  res.json(true);
});

app.get('*', (req, res) => {
  let data = fs.readFileSync(__dirname + '/public/index.html');
  res.send(data.toString());
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})