// routes/mesAnoRoutes.js
const express = require('express');
const router = express.Router();
const { getMesAno, createMesAno, updateMesAno, deleteMesAno } = require('../controllers/mesAnoController');

router.get('/', getMesAno);
router.post('/', createMesAno);
router.put('/:id', updateMesAno);
router.delete('/:id', deleteMesAno);

module.exports = router;
