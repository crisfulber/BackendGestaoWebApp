// routes/historicoSalarioRoutes.js
const express = require('express');
const router = express.Router();
const { getHistoricoSalario, createHistoricoSalario, updateHistoricoSalario, deleteHistoricoSalario, getHistoricoSalarioById } = require('../controllers/historicoSalarioController');

router.get('/', getHistoricoSalario);
router.get('/:id', getHistoricoSalarioById);
router.post('/', createHistoricoSalario);
router.put('/:id', updateHistoricoSalario);
router.delete('/:id', deleteHistoricoSalario);

module.exports = router;
