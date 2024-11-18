// routes/bonificacaoRoutes.js
const express = require('express');
const router = express.Router();
const { getBonificacao, createBonificacao, updateBonificacao, deleteBonificacao } = require('../controllers/bonificacaoController');

router.get('/', getBonificacao);
router.post('/', createBonificacao);
router.put('/:id', updateBonificacao);
router.delete('/:id', deleteBonificacao);

module.exports = router;
