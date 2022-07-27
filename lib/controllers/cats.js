
const { Router } = require('express');
const { cats } = require('../../data/cats');
const router = Router();
const Cat = require('../models/Cats');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const cat = await Cat.getById(req.params.id);
    console.log('cat', cat);
    res.json(cat);
  })
  .get('/', async (req, res) => {
    const cats = await Cat.getAll();
    const ids = cats.map((cat) => ({ id:cat.id, name: cat.name })) ;
    res.json(ids);
  });

// module.exports = router;
