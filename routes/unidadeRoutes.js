// routes/unidadeRoutes.js
const express = require('express');
const router = express.Router();
const { getUnidade, createUnidade, updateUnidade, deleteUnidade } = require('../controllers/unidadeController');

router.get('/', getUnidade);
router.post('/', createUnidade);
router.put('/:id', updateUnidade);
router.delete('/:id', deleteUnidade);

module.exports = router;
