const { Router } = require('express');
const { cats } = require('../cats-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    const match = cats.find((cat) => cat.id === req.params.id);

    return res.json(match);
  })
  .get('/', (req, res) => {
    const filteredCats = [];
    for (const cat of cats) {
      filteredCats.push({ id: cat.id, name: cat.name });
    }
    res.json(filteredCats);
  });
