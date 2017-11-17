/*jshint esversion: 6 */

const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    { name: 'Dennis', age: 53 },
    { name: 'Cindy', age: 52 },
    { name: 'Kiri', age: 13 }
  ]);
});

app.listen(3000);
module.exports.app = app;
