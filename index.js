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
    const R = [255, 150, 0];
    const Y = [150, 80, 50];

    const bananaLED = [
        O, O, X, X, X, X, O, O,
        O, X, O, O, O, O, X, O,
        X, O, O, O, O, O, O, X,
        X, O, X, O, O, X, O, X,
        X, O, O, O, O, O, O, X,
        X, O, X, X, X, X, O, X,
        O, X, O, O, O, O, X, O,
        O, O, X, X, X, X, O, O,
    ];

    matrix.setPixels(bananaLED);
    res.send(200, "Yes!!", () => {});
});

app.post('/apple', (req, res) => {
    console.log('apple!!!');
    const O = [0, 0, 0];
    const X = [255, 100, 100];

    const smile = [
        O, O, X, X, X, X, O, O,
        O, X, O, O, O, O, X, O,
        X, O, O, O, O, O, O, X,
        X, O, X, O, O, X, O, X,
        X, O, O, O, O, O, O, X,
        X, O, X, X, X, X, O, X,
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

    const cross = [
        O, O, O, G, O, G, O, O,
        O, O, G, G, G, G, G, O,
        O, G, O, G, G, G, O, G,
        O, O, O, X, X, X, O, O,
        O, O, X, Y, X, Y, X, O,
        O, O, Y, X, Y, X, Y, O,
        O, O, X, Y, X, Y, X, O,
        O, O, O, X, X, X, O, O,
    ];

    matrix.setPixels(cross);
    res.send(200, "pineapple!!", () => {});
});