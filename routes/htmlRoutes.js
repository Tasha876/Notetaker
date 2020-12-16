const express = require('express');
const app = express();

const path = require('path');

module.exports = (app) => {

    app.get('/notes', (req, res) => {
    //   let data = fs.readFileSync();
    res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('*', (req, res) => {
    //   let data = fs.readFileSync(path.join(__dirname, '../public/index.html'));
    res.sendFile(path.join(__dirname, '../public/index.html'));
    });

}