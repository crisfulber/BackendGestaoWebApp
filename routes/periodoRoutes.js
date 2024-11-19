// routes/PeriodoRoutes.js
const express = require('express');
const router = express.Router();
const { getPeriodo, createPeriodo, updatePeriodo, deletePeriodo } = require('../controllers/PeriodoController');

router.get('/', getPeriodo);
router.post('/', createPeriodo);
router.put('/:id', updatePeriodo);
router.delete('/:id', deletePeriodo);

module.exports = router;
