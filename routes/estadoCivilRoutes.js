const express = require('express');
const router = express.Router();
const { getEstadoCivil, createEstadoCivil, updateEstadoCivil, deleteEstadoCivil, getEstadoCivilById } = require('../controllers/estadoCivilController');

router.get('/', getEstadoCivil);
router.get('/:id', getEstadoCivilById);
router.post('/', createEstadoCivil);
router.put('/:id', updateEstadoCivil);
router.delete('/:id', deleteEstadoCivil);

module.exports = router;
