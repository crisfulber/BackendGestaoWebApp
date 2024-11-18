// routes/estadoCivilRoutes.js
const express = require('express');
const router = express.Router();
const { getEstadoCivil, createEstadoCivil, updateEstadoCivil, deleteEstadoCivil } = require('../controllers/estadoCivilController');

router.get('/', getEstadoCivil);
router.post('/', createEstadoCivil);
router.put('/:id', updateEstadoCivil);
router.delete('/:id', deleteEstadoCivil);

module.exports = router;
