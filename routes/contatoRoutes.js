const express = require('express');
const router = express.Router();
const { getContato, createContato, updateContato, deleteContato, getContatoById } = require('../controllers/contatoController');

router.get('/', getContato);
router.get('/:id', getContatoById);
router.post('/', createContato);
router.put('/:id', updateContato);
router.delete('/:id', deleteContato);

module.exports = router;
