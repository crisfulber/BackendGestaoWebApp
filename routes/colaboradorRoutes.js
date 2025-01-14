const express = require('express');
const router = express.Router();
const { getColaborador, createColaborador, updateColaborador, deleteColaborador, getColaboradorById } = require('../controllers/colaboradorController');

router.get('/', getColaborador);
router.get('/:id', getColaboradorById);
router.post('/', createColaborador);
router.put('/:id', updateColaborador);
router.delete('/:id', deleteColaborador);

module.exports = router;
