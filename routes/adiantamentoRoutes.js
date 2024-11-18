// routes/adiantamentoRoutes.js
const express = require('express');
const router = express.Router();
const { getAdiantamento, createAdiantamento, updateAdiantamento, deleteAdiantamento } = require('../controllers/adiantamentoController');

router.get('/', getAdiantamento);
router.post('/', createAdiantamento);
router.put('/:id', updateAdiantamento);
router.delete('/:id', deleteAdiantamento);

module.exports = router;
