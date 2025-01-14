const express = require('express');
const router = express.Router();
const { getUnidade, createUnidade, updateUnidade, deleteUnidade, getUnidadeById } = require('../controllers/unidadeController');

router.get('/', getUnidade);
router.get('/:id', getUnidadeById);
router.post('/', createUnidade);
router.put('/:id', updateUnidade);
router.delete('/:id', deleteUnidade);

module.exports = router;
