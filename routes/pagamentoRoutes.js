// routes/pagamentoRoutes.js
const express = require('express');
const router = express.Router();
const { getPagamento, createPagamento, updatePagamento, deletePagamento } = require('../controllers/pagamentoController');

router.get('/', getPagamento);
router.post('/', createPagamento);
router.put('/:id', updatePagamento);
router.delete('/:id', deletePagamento);

module.exports = router;
