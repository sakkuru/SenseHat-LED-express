'use strict';
const matrix = require('node-sense-hat').Leds;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.port || process.env.PORT || 8088;
const server = app.listen(port, () => {
    console.log('Server is listening on port %s', port);
});

app.post('/banana', (req, res) => {
    console.log('banana!!!');
    const O = [0, 0, 0];
    const X = [255, 255, 0];

    const smile = [
        O, O, X, X, X, X, O, O,
        O, X, O, O, O, O, X, O,
        X, O, X, O, X, O, O, X,
        X, O, X, O, O, O, O, X,
        X, O, X, O, O, O, O, X,
        X, O, X, O, X, O, O, X,
        O, X, O, O, O, O, X, O,
        O, O, X, X, X, X, O, O,
    ];

    matrix.setPixels(bananaLED);
    res.send(200, "banana!!", () => {});
});

app.post('/apple', (req, res) => {
    console.log('apple!!!');
    const O = [0, 0, 0];
    const X = [255, 100, 100];

    const smile = [
        O, O, X, X, X, X, O, O,
        O, X, O, O, O, O, X, O,
        X, O, X, O, X, O, O, X,
        X, O, X, O, O, O, O, X,
        X, O, X, O, O, O, O, X,
        X, O, X, O, X, O, O, X,
        O, X, O, O, O, O, X, O,
        O, O, X, X, X, X, O, O,
    ];

    matrix.setPixels(smile);
    res.send(200, "Yes!!", () => {});
});

app.post('/pineapple', (req, res) => {
    console.log('pineapple!!!');

    const O = [0, 0, 0];
    const X = [255, 255, 0];
    const Y = [255, 120, 10];
    const G = [0, 255, 0];

    const pineappleLED = [
        O, O, O, O, O, O, O, O,
        O, O, O, O, O, G, O, O,
        O, X, Y, X, O, O, G, O,
        X, Y, X, Y, X, G, G, G,
        X, X, Y, X, X, G, G, O,
        X, Y, X, Y, X, G, G, G,
        O, X, Y, X, O, O, G, O,
        O, O, O, O, O, G, O, O,
    ];

    matrix.setPixels(pineappleLED);
    res.send(200, "pineapple!!", () => {});
});