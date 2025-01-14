const express = require('express');
const router = express.Router();
const { getPeriodo, createPeriodo, updatePeriodo, deletePeriodo, getPeriodoById } = require('../controllers/PeriodoController');

router.get('/', getPeriodo);
router.get('/:id', getPeriodoById);
router.post('/', createPeriodo);
router.put('/:id', updatePeriodo);
router.delete('/:id', deletePeriodo);

module.exports = router;
