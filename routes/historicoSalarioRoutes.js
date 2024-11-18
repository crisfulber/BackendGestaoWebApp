// routes/historicoSalarioRoutes.js
const express = require('express');
const router = express.Router();
const { getHistoricoSalario, createHistoricoSalario, updateHistoricoSalario, deleteHistoricoSalario } = require('../controllers/historicoSalarioController');

router.get('/', getHistoricoSalario);
router.post('/', createHistoricoSalario);
router.put('/:id', updateHistoricoSalario);
router.delete('/:id', deleteHistoricoSalario);

module.exports = router;
