const express = require('express');
const { cats } = require('./cats-data.js');
const app = express();

app.use('/cats', (req, res) => {
  const filteredCats = [];
  for (const cat of cats) {
    filteredCats.push({ id: cat.id, name: cat.name });
  }
  res.json(filteredCats);
  console.log(filteredCats);
});
module.exports = app;

app.use('/', (req, res) => {
  res.send('hello world!');
});
