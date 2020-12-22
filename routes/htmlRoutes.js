const express = require('express');
const app = express();

const path = require('path');

module.exports = (app) => {


    // hosts the static css and javascript files in 'public'
    app.use(express.static(path.join(__dirname, '../public')));

    app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    });

}