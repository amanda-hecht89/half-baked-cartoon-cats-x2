
const { Router } = require('express');
const { cats } = require('../../data/cats');
const router = Router();
const Cat = require('../models/Cats');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const cat = await Cat.getbyId(req.params.id);
    console.log('dog');
    res.json(cat);
  })
  .get('/', (req, res) => {
    const ids = cats.map((cat) => ({ id:cat.id, name: cat.name })) ;
    res.json(ids);
  });

module.exports = router;
