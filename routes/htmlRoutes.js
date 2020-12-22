// sets up dependencies

const express = require('express');

const path = require('path');

// the exports will require app -- i.e. express()
module.exports = (app) => {


    // hosts the static css and javascript files in 'public'
    app.use(express.static(path.join(__dirname, '../public')));

    // gets the dynamic content

    app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // if the user enters '(host)/anything_not_specified, go to the main page
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    });

}