// routes/colaboradorRoutes.js
const express = require('express');
const router = express.Router();
const { getColaborador, createColaborador, updateColaborador, deleteColaborador } = require('../controllers/colaboradorController');

router.get('/', getColaborador);
router.post('/', createColaborador);
router.put('/:id', updateColaborador);
router.delete('/:id', deleteColaborador);

module.exports = router;
