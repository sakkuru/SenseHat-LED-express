'use strict';
const matrix = require('node-sense-hat').Leds;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.port || process.env.PORT || 8088;
const server = app.listen(port, () => {
    console.log('Server is listening on port %s', port);
});

app.post('/yes', (req, res) => {
    console.log('yes!!!');
    const O = [0, 0, 0];
    const X = [0, 0, 255];

    const circle = [
        O, O, X, X, X, X, O, O,
        O, X, O, O, O, O, X, O,
        X, O, O, O, O, O, O, X,
        X, O, O, O, O, O, O, X,
        X, O, O, O, O, O, O, X,
        X, O, O, O, O, O, O, X,
        O, X, O, O, O, O, X, O,
        O, O, X, X, X, X, O, O,
    ];

    matrix.setPixels(circle);
    res.send(200, "Yes!!", () => {});
});

app.post('/no', (req, res) => {
    console.log('no!!!');

    const O = [0, 0, 0];
    const X = [255, 0, 0];

    const cross = [
        X, O, O, O, O, O, O, X,
        O, X, O, O, O, O, X, O,
        O, O, X, O, O, X, O, O,
        O, O, O, X, X, O, O, O,
        O, O, O, X, X, O, O, O,
        O, O, X, O, O, X, O, O,
        O, X, O, O, O, O, X, O,
        X, O, O, O, O, O, O, X,
    ];

    matrix.setPixels(cross);
    res.send(200, "No!!", () => {});
});