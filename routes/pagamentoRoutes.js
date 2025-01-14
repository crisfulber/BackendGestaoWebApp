const express = require('express');
const router = express.Router();
const { getPagamento, createPagamento, updatePagamento, deletePagamento, getPagamentoById } = require('../controllers/pagamentoController');

router.get('/', getPagamento);
router.get('/:id', getPagamentoById);
router.post('/', createPagamento);
router.put('/:id', updatePagamento);
router.delete('/:id', deletePagamento);

module.exports = router;
