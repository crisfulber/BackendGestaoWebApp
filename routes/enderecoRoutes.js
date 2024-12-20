// routes/enderecoRoutes.js
const express = require('express');
const router = express.Router();
const { getEndereco, createEndereco, updateEndereco, deleteEndereco, getEnderecoById } = require('../controllers/enderecoController');

router.get('/', getEndereco);
router.get('/:id', getEnderecoById);
router.post('/', createEndereco);
router.put('/:id', updateEndereco);
router.delete('/:id', deleteEndereco);

module.exports = router;
