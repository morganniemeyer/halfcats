const express = require('express');
const { cats } = require('./cats-data.js');
const app = express();

app.use('/cats/:id', (req, res) => {
  const match = cats.find((cat) => cat.id === req.params.id);

  return res.json(match);
});

app.use('/cats', (req, res) => {
  const filteredCats = [];
  for (const cat of cats) {
    filteredCats.push({ id: cat.id, name: cat.name });
  }
  res.json(filteredCats);
});
module.exports = app;

app.use('/', (req, res) => {
  res.send('hello world!');
});
