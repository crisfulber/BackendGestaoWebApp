const express = require('express');
const router = express.Router();
const { getAdiantamento, createAdiantamento, updateAdiantamento, deleteAdiantamento, getAdiantamentoById } = require('../controllers/adiantamentoController');

router.get('/', getAdiantamento);
router.get('/:id', getAdiantamentoById);
router.post('/', createAdiantamento);
router.put('/:id', updateAdiantamento);
router.delete('/:id', deleteAdiantamento);

module.exports = router;
