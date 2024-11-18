// routes/contatoRoutes.js
const express = require('express');
const router = express.Router();
const { getContato, createContato, updateContato, deleteContato } = require('../controllers/contatoController');

router.get('/', getContato);
router.post('/', createContato);
router.put('/:id', updateContato);
router.delete('/:id', deleteContato);

module.exports = router;
